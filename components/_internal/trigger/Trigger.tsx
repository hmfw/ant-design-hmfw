import {
  defineComponent,
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
  Teleport,
  type PropType,
} from 'vue'
import { cls } from '../../_utils'
import { useConfig } from '../../config-provider/context'
import { computePosition } from './computePosition'
import { subscribeGlobal, pushOpenStack, removeFromOpenStack, isTopOfOpenStack } from './eventManager'
import type { Placement, TriggerAction, TriggerOpenSource, TriggerProps } from './types'

/**
 * 通用弹层触发器原语（内部组件，不对外导出）。
 *
 * 统一接管：弹层定位（12 方位 + autoAdjustOverflow 翻转 + scroll/resize 重定位）、
 * Teleport、触发器事件（hover/click/focus/contextMenu）、外点关闭、Esc 关闭、
 * 受控/非受控 open 状态、matchWidth、getPopupContainer。
 *
 * 插槽：
 *  - default：触发器元素
 *  - popup({ placement })：弹层内容，回传翻转后实际方位供箭头方向使用
 */
const triggerProps = {
  open: { type: Boolean, default: undefined },
  defaultOpen: { type: Boolean, default: false },
  trigger: { type: [String, Array] as PropType<TriggerAction | TriggerAction[]>, default: 'hover' },
  placement: { type: String as PropType<Placement>, default: 'bottomLeft' },
  autoAdjustOverflow: { type: Boolean, default: true },
  /** 箭头尖端对齐触发器中心（Dropdown 的 arrow.pointAtCenter）。 */
  arrowPointAtCenter: { type: Boolean, default: false },
  getPopupContainer: { type: Function as PropType<(triggerNode: HTMLElement) => HTMLElement>, default: undefined },
  mouseEnterDelay: { type: Number, default: 0.1 },
  mouseLeaveDelay: { type: Number, default: 0.1 },
  disabled: { type: Boolean, default: false },
  destroyOnHidden: { type: Boolean, default: false },
  forceRender: { type: Boolean, default: false },
  /** 弹层宽度与触发器宽度一致（Select 的 dropdownMatchSelectWidth）。 */
  matchWidth: { type: [Boolean, Number] as PropType<boolean | number>, default: false },
  gap: { type: Number, default: 4 },
  /**
   * 弹层层级。不传时回退到主题 Token `--hmfw-z-index-popup`（默认 1050），
   * 使层级可随主题统一调整；传数值则直接生效。
   */
  zIndex: { type: Number, default: undefined },
  closeOnEscape: { type: Boolean, default: true },
  closeOnOutsideClick: { type: Boolean, default: true },
  /** 监听弹层内容尺寸变化并自动重新定位（Tooltip 的 ResizeObserver）。 */
  observePopupResize: { type: Boolean, default: false },
  /** 变化时强制重新定位（Tooltip 的 fresh）。 */
  fresh: { type: [Boolean, Number] as PropType<boolean | number>, default: undefined },
  /** 持续跟踪触发元素位置变化，每帧自动重新定位（适用于触发元素有动画/过渡的场景）。 */
  trackPosition: { type: Boolean, default: false },
  /**
   * 触发器外层 wrapper 的 display。不传时不写行内样式，
   * 由基础类 `:where(.hmfw-trigger)` 提供 inline-block 默认值，
   * 宿主可用自身根类（如 .hmfw-select）直接覆盖。
   * 仅在宿主无根类可挂载、又需要特定 display（如 Menu 的 contents）时才显式传入。
   */
  triggerDisplay: { type: String, default: undefined },
  /**
   * 弹层 wrapper 的 class。可为字符串，或接收实际方位返回字符串的函数
   * （宿主据此拼出 placement 类，使 wrapper 自身即组件根节点，避免双层嵌套）。
   */
  popupClass: { type: [String, Function] as PropType<string | ((placement: Placement) => string)>, default: undefined },
  /** 隐藏态 class，默认 hmfw-trigger-popup-hidden；宿主可换成自己的（如 hmfw-dropdown-hidden）。 */
  hiddenClass: { type: String, default: 'hmfw-trigger-popup-hidden' },
  popupStyle: { type: Object as PropType<Record<string, any>>, default: undefined },
  /** 触发器外层 wrapper 的 class。 */
  triggerClass: { type: String, default: undefined },
  triggerStyle: { type: Object as PropType<Record<string, any>>, default: undefined },
} satisfies Record<keyof TriggerProps, any>

export const Trigger = defineComponent({
  name: 'Trigger',
  inheritAttrs: false,
  props: triggerProps,
  emits: ['update:open', 'openChange', 'afterOpenChange'],
  setup(props, { slots, emit, attrs, expose }) {
    // ================================================================
    // 1. 响应式状态
    // ================================================================
    // 供 getContainer 在自身 prop 缺省时回退到全局 getPopupContainer
    const config = useConfig()
    const triggerRef = ref<HTMLElement | null>(null)
    const popupRef = ref<HTMLElement | null>(null)
    const innerOpen = ref(props.defaultOpen ?? false)
    const position = ref({ top: 0, left: 0 })
    const popupWidth = ref<number | null>(null)
    const actualPlacement = ref<Placement>(props.placement)
    let enterTimer: ReturnType<typeof setTimeout> | null = null
    let leaveTimer: ReturnType<typeof setTimeout> | null = null
    // afterOpenChange 的宏任务句柄，需在卸载时清理，避免已销毁实例上的延迟 emit
    let afterOpenTimer: ReturnType<typeof setTimeout> | null = null
    let resizeObserver: ResizeObserver | null = null
    const unsubs: (() => void)[] = []

    const isControlled = computed(() => props.open !== undefined)
    const visible = computed(() => (isControlled.value ? props.open! : innerOpen.value))
    const triggers = computed(() => {
      const t = props.trigger
      return Array.isArray(t) ? t : [t]
    })
    let positionTrackingFrame: number | null = null
    // scroll/resize 重定位的 rAF 合并句柄
    let repositionFrame: number | null = null
    // 本实例在全局弹层栈中的身份标识，用于 Esc 只关最内层
    const stackToken = Symbol('trigger')
    const pushStack = () => pushOpenStack(stackToken)
    const popStack = () => removeFromOpenStack(stackToken)

    // ================================================================
    // 2. Props → 内部状态同步
    // ================================================================
    watch(
      () => props.open,
      (v) => {
        if (v !== undefined) innerOpen.value = v
      },
    )
    // placement 变更需同时更新方位类与坐标：只改 actualPlacement 会让箭头方向
    // （由方位类驱动）与弹层实际位置错配，必须在可见时重新测量定位。
    watch(
      () => props.placement,
      (v) => {
        actualPlacement.value = v
        if (visible.value) nextTick(() => updatePosition())
      },
    )

    // disabled 变 true 时强制收起已打开的弹层。
    // 否则弹层保持可见，且后续 Esc / 外点 / mouseleave 全被 setOpen 的 disabled 守卫
    // 拦截，用户无从关闭；因此这里用 force 绕过该守卫。
    watch(
      () => props.disabled,
      (v) => {
        if (v && visible.value) setOpen(false, 'trigger', true)
      },
    )

    // ================================================================
    // 3. 核心方法
    // ================================================================
    /**
     * 切换弹层开关状态。
     *
     * @param v 目标状态
     * @param source 事件来源，随 openChange 回传给宿主
     * @param force 绕过 disabled 守卫（仅用于 disabled 变 true 时强制收起已打开的弹层）
     */
    const setOpen = (v: boolean, source: TriggerOpenSource = 'trigger', force = false) => {
      if (props.disabled && !force) return
      // 状态未变化时不 emit：
      //  - hover 从触发器移入弹层会连续触发 mouseleave + mouseenter，否则重复 emit(true)
      //  - mouseEnterDelay 未到即移出时弹层从未打开，否则会 emit 一次虚假的 (false)
      if (v === visible.value) return
      if (!isControlled.value) innerOpen.value = v
      emit('update:open', v)
      emit('openChange', v, { source })
      // afterOpenChange 在下一个宏任务触发，此时 DOM 已更新但 CSS 过渡未完成。
      // 若宿主组件有入场/出场动画，应自行监听 transitionend/animationend 确定动画结束时机。
      if (afterOpenTimer) clearTimeout(afterOpenTimer)
      afterOpenTimer = setTimeout(() => {
        afterOpenTimer = null
        emit('afterOpenChange', v)
      }, 0)
    }

    const updatePosition = () => {
      // 弹层不可见时 getBoundingClientRect 返回零值，跳过以避免错误坐标
      if (!visible.value || !triggerRef.value || !popupRef.value) return
      // 当 triggerDisplay 为 contents 时，wrapper 自身不生成盒模型，
      // getBoundingClientRect 返回全零值，需回退到第一个子元素计算位置
      let triggerEl: HTMLElement = triggerRef.value
      if (props.triggerDisplay === 'contents' && triggerRef.value.firstElementChild) {
        triggerEl = triggerRef.value.firstElementChild as HTMLElement
      }
      const triggerRect = triggerEl.getBoundingClientRect()
      const popupRect = popupRef.value.getBoundingClientRect()
      const r = computePosition(triggerRect, popupRect, props.placement, {
        gap: props.gap,
        autoAdjustOverflow: props.autoAdjustOverflow,
        arrowPointAtCenter: props.arrowPointAtCenter,
      })
      actualPlacement.value = r.placement
      position.value = { top: r.top, left: r.left }
      if (props.matchWidth === true) popupWidth.value = triggerRect.width
    }

    /**
     * 按需创建 ResizeObserver（惰性、幂等）。
     * @returns 是否可用（环境不支持 ResizeObserver 时返回 false）
     */
    const ensureResizeObserver = (): boolean => {
      if (resizeObserver) return true
      if (typeof ResizeObserver === 'undefined') return false
      resizeObserver = new ResizeObserver(() => {
        if (visible.value) nextTick(() => updatePosition())
      })
      return true
    }

    // ================================================================
    // 4. 副作用 Watch
    // ================================================================
    watch(visible, async (v) => {
      // 维护全局弹层栈：后打开的在栈顶，Esc 只作用于栈顶实例
      if (v) pushStack()
      else popStack()
      if (v) {
        await nextTick()
        updatePosition()
        // matchWidth 设置 minWidth 后弹层可能变宽，需等 DOM 更新后重新测量定位
        if (props.matchWidth) {
          await nextTick()
          updatePosition()
        }
        if (props.observePopupResize && popupRef.value && ensureResizeObserver()) {
          resizeObserver!.observe(popupRef.value)
        }
        // 启动持续位置跟踪循环（仅在 trackPosition 为 true 时）
        if (props.trackPosition) {
          startPositionTracking()
        }
      } else {
        if (resizeObserver) resizeObserver.disconnect()
        // 停止位置跟踪
        stopPositionTracking()
      }
    })

    // 持续位置跟踪：弹层可见时每帧检查并更新位置
    const startPositionTracking = () => {
      stopPositionTracking() // 先清理旧循环
      const trackLoop = () => {
        if (visible.value) {
          updatePosition()
          positionTrackingFrame = requestAnimationFrame(trackLoop)
        }
      }
      positionTrackingFrame = requestAnimationFrame(trackLoop)
    }

    const stopPositionTracking = () => {
      if (positionTrackingFrame !== null) {
        cancelAnimationFrame(positionTrackingFrame)
        positionTrackingFrame = null
      }
    }

    // fresh 变化时强制重新定位
    watch(
      () => props.fresh,
      () => {
        if (visible.value) updatePosition()
      },
    )

    // observePopupResize 动态变更时同步 ResizeObserver 状态。
    // observer 惰性创建：若挂载时该 prop 为 false、之后才切到 true，
    // 也要能在此刻补建（早期实现只在 onMounted 创建，导致 false→true 永久失效）。
    watch(
      () => props.observePopupResize,
      (v) => {
        if (v) {
          if (visible.value && popupRef.value && ensureResizeObserver()) {
            resizeObserver!.observe(popupRef.value)
          }
        } else {
          resizeObserver?.disconnect()
        }
      },
    )

    // trackPosition 动态变更时同步位置跟踪状态
    watch(
      () => props.trackPosition,
      (v) => {
        if (v && visible.value) {
          startPositionTracking()
        } else if (!v) {
          stopPositionTracking()
        }
      },
    )

    // ================================================================
    // 5. 事件处理
    // ================================================================
    // scroll 用 capture 监听，任意可滚动祖先滚动都会命中本回调；而 updatePosition
    // 读 2 次 getBoundingClientRect 再同步写 style，构成读-写-读的强制重排链。
    // 用 rAF 把同一帧内的多次请求合并为一次，惯性滚动下从「每事件一次」降为「每帧一次」。
    const onScrollOrResize = () => {
      if (!visible.value || repositionFrame !== null) return
      repositionFrame = requestAnimationFrame(() => {
        repositionFrame = null
        if (visible.value) updatePosition()
      })
    }

    const cancelPendingReposition = () => {
      if (repositionFrame !== null) {
        cancelAnimationFrame(repositionFrame)
        repositionFrame = null
      }
    }

    const clearHoverTimers = () => {
      if (enterTimer) {
        clearTimeout(enterTimer)
        enterTimer = null
      }
      if (leaveTimer) {
        clearTimeout(leaveTimer)
        leaveTimer = null
      }
    }

    // 进入/离开都先清空两个 hover 定时器再排新的：
    // 只清对侧会让同侧的旧句柄被覆盖后失联（连续 N 次 mouseenter 堆积 N 个待执行定时器，
    // 卸载时只能清掉最后一个）。负延迟按 0 处理。
    const handleMouseEnter = () => {
      if (!triggers.value.includes('hover')) return
      clearHoverTimers()
      enterTimer = setTimeout(
        () => {
          enterTimer = null
          setOpen(true)
        },
        Math.max(0, props.mouseEnterDelay) * 1000,
      )
    }

    const handleMouseLeave = () => {
      if (!triggers.value.includes('hover')) return
      clearHoverTimers()
      leaveTimer = setTimeout(
        () => {
          leaveTimer = null
          setOpen(false)
        },
        Math.max(0, props.mouseLeaveDelay) * 1000,
      )
    }

    const handleClick = () => {
      if (!triggers.value.includes('click')) return
      setOpen(!visible.value)
    }

    const handleFocusIn = () => {
      if (!triggers.value.includes('focus')) return
      setOpen(true)
    }

    // 焦点离开触发器时关闭弹层，但焦点移入弹层内容不关闭，
    // 否则弹层内的可聚焦元素（下拉菜单项、输入框等）无法获得焦点。
    const handleFocusOut = (e: FocusEvent) => {
      if (!triggers.value.includes('focus')) return
      if (popupRef.value?.contains(e.relatedTarget as Node)) return
      setOpen(false)
    }

    const handleContextMenu = (e: MouseEvent) => {
      if (!triggers.value.includes('contextMenu')) return
      e.preventDefault()
      setOpen(true)
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (!visible.value || !props.closeOnOutsideClick) return
      if (triggerRef.value?.contains(e.target as Node) || popupRef.value?.contains(e.target as Node)) return
      setOpen(false)
    }

    // Esc 只关闭最内层弹层：keydown 是全局广播，不做栈顶判断会让嵌套弹层整层塌陷。
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!props.closeOnEscape || e.key !== 'Escape' || !visible.value) return
      if (!isTopOfOpenStack(stackToken)) return
      setOpen(false)
      e.preventDefault()
    }

    // ================================================================
    // 6. 生命周期
    // ================================================================
    onMounted(() => {
      // 通过全局事件管理器订阅，避免 N 个实例重复注册 DOM 事件
      unsubs.push(subscribeGlobal(document, 'mousedown', handleOutsideClick))
      unsubs.push(subscribeGlobal(document, 'keydown', handleKeyDown))
      unsubs.push(subscribeGlobal(window, 'resize', onScrollOrResize))
      // scroll 使用 capture 阶段以捕获所有可滚动祖先的滚动事件
      unsubs.push(subscribeGlobal(window, 'scroll', onScrollOrResize, { capture: true }))

      if (props.observePopupResize) ensureResizeObserver()

      // defaultOpen 或 open 为 true 时，弹层初始即可见，需在挂载后立即计算位置。
      // visible watch 不会为初始值触发，故此处也要补入栈。
      if (visible.value) {
        pushStack()
        nextTick(() => {
          updatePosition()
          // 如果启用了 trackPosition，启动位置跟踪
          if (props.trackPosition) {
            startPositionTracking()
          }
        })
      }
    })

    onBeforeUnmount(() => {
      unsubs.forEach((fn) => fn())
      clearHoverTimers()
      if (afterOpenTimer) clearTimeout(afterOpenTimer)
      if (resizeObserver) resizeObserver.disconnect()
      stopPositionTracking()
      cancelPendingReposition()
      // 从 Esc 栈中移除，避免已卸载实例继续占据栈顶导致 Esc 失效
      popStack()
    })

    // ================================================================
    // 7. 工具方法
    // ================================================================
    // 容器优先级：组件自身 prop > ConfigProvider 的全局 getPopupContainer > body
    const getContainer = (): HTMLElement | 'body' => {
      if (!triggerRef.value) return 'body'
      const resolve = props.getPopupContainer ?? config.value.getPopupContainer
      return resolve?.(triggerRef.value) ?? 'body'
    }

    // ================================================================
    // 8. 暴露 API
    // ================================================================
    expose({
      updatePosition,
      actualPlacement,
      setOpen,
    })

    return () => {
      const children = slots.default?.()
      if (!children || (Array.isArray(children) && children.length === 0)) return null

      const shouldRender = visible.value || !props.destroyOnHidden || props.forceRender

      // 注意：props.popupStyle 在最后展开，可覆盖 position/top/left 等内部定位属性。
      // 消费者应避免覆盖这些关键属性，仅在确有需求时使用（如需固定定位替代绝对定位）。
      const popupStyle: Record<string, any> = {
        position: 'absolute',
        top: `${position.value.top}px`,
        left: `${position.value.left}px`,
        zIndex: props.zIndex ?? 'var(--hmfw-z-index-popup)',
        // 负值会生成非法的 min-width 被浏览器静默丢弃，钳到 0 使行为可预期
        ...(typeof props.matchWidth === 'number'
          ? { minWidth: `${Math.max(0, props.matchWidth)}px` }
          : props.matchWidth === true && popupWidth.value != null
            ? { minWidth: `${Math.max(0, popupWidth.value)}px` }
            : null),
        ...props.popupStyle,
      }

      // 弹层 class 计算：包含宿主传入的 popupClass（支持函数形式接收当前方位）、
      // placement 方位类、arrowPointAtCenter 标记类、以及 visible 切换的隐藏类。
      const popupCls = cls(
        'hmfw-trigger-popup',
        typeof props.popupClass === 'function' ? props.popupClass(actualPlacement.value) : props.popupClass,
        `hmfw-trigger-placement-${actualPlacement.value}`,
        {
          'hmfw-trigger-arrow-point-at-center': props.arrowPointAtCenter,
          [props.hiddenClass]: !visible.value,
        },
      )

      // 基础类 hmfw-trigger 提供零特异性的 display 默认值，宿主根类可直接覆盖。
      const triggerCls = cls('hmfw-trigger', props.triggerClass, attrs.class as string | undefined)
      // display 只在显式传入 triggerDisplay 时写行内样式，否则交给 CSS，
      // 避免行内样式压过宿主根类中声明的 display。
      const triggerSty = {
        ...(props.triggerDisplay ? { display: props.triggerDisplay } : null),
        ...(attrs.style as Record<string, any> | undefined),
        ...props.triggerStyle,
      }

      const triggerEvents = {
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onClick: handleClick,
        onFocusin: handleFocusIn,
        onFocusout: handleFocusOut,
        onContextmenu: handleContextMenu,
      }

      // 弹层上绑定 hover 事件：鼠标从触发器移入弹层时取消 leave timer，防止误关闭
      const popupEvents = {
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
      }

      return (
        <>
          <div ref={triggerRef} class={triggerCls} style={triggerSty} {...triggerEvents}>
            {children}
          </div>
          {shouldRender && (
            <Teleport to={getContainer()}>
              <div ref={popupRef} class={popupCls} style={popupStyle} {...popupEvents}>
                {slots.popup?.({ placement: actualPlacement.value, visible: visible.value })}
              </div>
            </Teleport>
          )}
        </>
      )
    }
  },
})
