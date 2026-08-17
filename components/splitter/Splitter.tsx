import { defineComponent, ref, computed, watch, type PropType, type VNode, type CSSProperties } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils/cls'
import { InternalPanel } from './Panel'
import SplitBar from './SplitBar'
import useItems from './hooks/useItems'
import useSizes from './hooks/useSizes'
import useResizable from './hooks/useResizable'
import useResize from './hooks/useResize'
import type { SplitterProps, SplitterClassNames, SplitterStyles, Orientation } from './types'

// Props 定义（使用 satisfies 确保与 SplitterProps 类型一致）
const splitterProps = {
  collapsible: { type: Object as PropType<SplitterProps['collapsible']>, default: undefined },
  orientation: { type: String as PropType<Orientation>, default: 'horizontal' },
  vertical: { type: Boolean, default: false },
  rootClassName: { type: String, default: undefined },
  destroyOnHidden: { type: Boolean, default: false },
  draggerIcon: { type: Object as PropType<VNode>, default: undefined },
  onDraggerDoubleClick: { type: Function as PropType<(index: number) => void>, default: undefined },
  onResizeStart: { type: Function as PropType<(sizes: number[]) => void>, default: undefined },
  onResize: { type: Function as PropType<(sizes: number[]) => void>, default: undefined },
  onResizeEnd: { type: Function as PropType<(sizes: number[]) => void>, default: undefined },
  onCollapse: {
    type: Function as PropType<(collapsed: boolean[], sizes: number[]) => void>,
    default: undefined,
  },
  lazy: { type: Boolean, default: false },
  classNames: { type: Object as PropType<SplitterClassNames>, default: undefined },
  styles: { type: Object as PropType<SplitterStyles>, default: undefined },
} satisfies Record<keyof SplitterProps, any>

export default defineComponent({
  name: 'Splitter',
  props: splitterProps,
  setup(props, { slots, attrs }) {
    const prefixCls = usePrefixCls('splitter')

    // ======================== 方向 ========================
    // vertical 为简写属性，与 orientation 共存时 orientation 优先
    const mergedOrientation = computed(() => props.orientation || (props.vertical ? 'vertical' : 'horizontal'))
    const isVertical = computed(() => mergedOrientation.value === 'vertical')
    const isRTL = false // TODO: 从 ConfigProvider 获取
    const reverse = computed(() => !isVertical.value && isRTL)

    // ====================== Items 数据 ======================
    // slot 必须在 render 函数内调用（Vue 依赖跟踪要求，setup 中调用会导致面板动态变化失效）
    // 此处仅持有 items 状态与映射函数，由 render 阶段同步
    const { items, updateItems } = useItems()

    // 记录上次同步的 children 内容指纹，避免每次 render 都重建 items 造成无限更新循环
    let prevChildrenKey = ''

    const syncChildren = (vnodes: VNode[]) => {
      const key = vnodes.map((vnode) => JSON.stringify((vnode.props || {}) as object)).join('|')
      if (key !== prevChildrenKey) {
        prevChildrenKey = key
        updateItems(vnodes)
      }
    }

    // ====================== 容器 =======================
    const containerSize = ref<number | undefined>()
    const containerRef = ref<HTMLDivElement | null>(null)

    // 使用 ResizeObserver 监听容器尺寸变化
    watch(
      containerRef,
      (el) => {
        if (!el) return

        // 立即同步读取一次尺寸，避免初始化时 containerSize 为 undefined
        const initialSize = isVertical.value ? el.offsetHeight : el.offsetWidth
        if (initialSize > 0) {
          containerSize.value = initialSize
        }

        const observer = new ResizeObserver((entries) => {
          for (const entry of entries) {
            const { offsetWidth, offsetHeight } = entry.target as HTMLElement
            const size = isVertical.value ? offsetHeight : offsetWidth
            // 跳过容器无尺寸的情况（例如嵌套在隐藏的标签面板中）
            if (size === 0) {
              return
            }
            containerSize.value = size
          }
        })

        observer.observe(el)

        return () => {
          observer.disconnect()
        }
      },
      { immediate: true },
    )

    // ========================= 尺寸 =========================
    const { panelSizes, postPxSizes, postPercentSizes, postPercentMinSizes, postPercentMaxSizes, updateSizes } =
      useSizes(items, containerSize)

    // ====================== 可调整大小 =======================
    const resizableInfos = useResizable(items, postPxSizes, reverse.value, containerSize)

    const { onOffsetStart, onOffsetUpdate, onOffsetEnd, onCollapse, movingIndex } = useResize(
      items,
      resizableInfos,
      postPercentSizes,
      containerSize,
      updateSizes,
      reverse.value,
    )

    // ======================== 事件 ========================
    const onInternalResizeStart = (index: number) => {
      onOffsetStart(index)
      props.onResizeStart?.(postPxSizes.value)
    }

    const onInternalResizeUpdate = (index: number, offset: number, lazyEnd?: boolean) => {
      const nextSizes = onOffsetUpdate(index, offset)

      if (lazyEnd) {
        props.onResizeEnd?.(nextSizes)
      } else {
        props.onResize?.(nextSizes)
      }
    }

    const onInternalResizeEnd = (lazyEnd?: boolean) => {
      onOffsetEnd()

      if (!lazyEnd) {
        props.onResizeEnd?.(postPxSizes.value)
      }
    }

    const onInternalCollapse = (index: number, type: 'start' | 'end') => {
      const nextSizes = onCollapse(index, type)
      props.onResize?.(nextSizes)
      props.onResizeEnd?.(nextSizes)
      const collapsed = nextSizes.map((size) => Math.abs(size) < Number.EPSILON)
      props.onCollapse?.(collapsed, nextSizes)
    }

    // ======================== 样式 ========================
    // 注：attrs 上的 class/style 由 Vue fallthrough 自动应用到根节点，无需手动合并
    const containerClassName = computed(() =>
      cls(
        prefixCls,
        `${prefixCls}-${mergedOrientation.value}`,
        {
          [`${prefixCls}-rtl`]: isRTL,
        },
        props.rootClassName,
        props.classNames?.root,
      ),
    )

    const containerStyle = computed<CSSProperties>(() => ({
      ...props.styles?.root,
    }))

    // ======================== 渲染 ========================
    const maskCls = `${prefixCls}-mask`

    const stackSizes = computed(() => {
      const mergedSizes: number[] = []

      let stack = 0
      const len = items.value.length
      for (let i = 0; i < len; i += 1) {
        stack += postPercentSizes.value[i]
        mergedSizes.push(stack)
      }

      return mergedSizes
    })

    return () => {
      // 在 render 函数内调用 slot，使面板内容/配置的响应式依赖可被跟踪
      const defaultSlot = slots.default?.()
      const children = defaultSlot ? (Array.isArray(defaultSlot) ? defaultSlot : [defaultSlot]) : []
      syncChildren(children)

      return (
        <div ref={containerRef} style={containerStyle.value} class={containerClassName.value}>
          {items.value.map((item, idx) => {
            // 仅合并 Panel 自身与语义化 API 的 class/style，根级 attrs 只应用于根节点。
            // 注意：必须剔除 item 中的 className 键——Vue 会将其作为 fallthrough 的
            // DOM prop patch 到面板元素上（值为 undefined 时会清空 class）
            const { className, ...restItem } = item
            const panelProps = {
              ...restItem,
              class: cls(className, props.classNames?.panel) || undefined,
              style: { ...item.style, ...props.styles?.panel },
            }

            const panel = (
              <InternalPanel
                {...panelProps}
                prefixCls={prefixCls}
                size={panelSizes.value[idx]}
                supportMotion={props.collapsible?.motion && movingIndex.value === undefined}
                destroyOnHidden={item.destroyOnHidden ?? props.destroyOnHidden}
              >
                {children[idx]}
              </InternalPanel>
            )

            // 分隔栏
            let splitBar: VNode | null = null

            const resizableInfo = resizableInfos.value[idx]
            if (resizableInfo) {
              const prevStackSize = Number.isFinite(stackSizes.value[idx - 1]) ? stackSizes.value[idx - 1] : 0
              const nextStackSize = Number.isFinite(stackSizes.value[idx + 1]) ? stackSizes.value[idx + 1] : 1
              const ariaMinStart = prevStackSize + postPercentMinSizes.value[idx]
              const ariaMinEnd = nextStackSize - postPercentMaxSizes.value[idx + 1]

              const ariaMaxStart = prevStackSize + postPercentMaxSizes.value[idx]
              const ariaMaxEnd = nextStackSize - postPercentMinSizes.value[idx + 1]

              splitBar = (
                <SplitBar
                  lazy={props.lazy}
                  index={idx}
                  active={movingIndex.value?.index === idx}
                  prefixCls={prefixCls}
                  vertical={isVertical.value}
                  resizable={resizableInfo.resizable}
                  draggerStyle={props.styles?.dragger}
                  draggerClassName={
                    typeof props.classNames?.dragger === 'string'
                      ? { default: props.classNames.dragger }
                      : props.classNames?.dragger
                  }
                  draggerIcon={props.draggerIcon}
                  collapsibleIcon={props.collapsible?.icon}
                  ariaNow={stackSizes.value[idx] * 100}
                  ariaMin={Math.max(ariaMinStart, ariaMinEnd) * 100}
                  ariaMax={Math.min(ariaMaxStart, ariaMaxEnd) * 100}
                  startCollapsible={resizableInfo.startCollapsible}
                  endCollapsible={resizableInfo.endCollapsible}
                  showStartCollapsibleIcon={resizableInfo.showStartCollapsibleIcon}
                  showEndCollapsibleIcon={resizableInfo.showEndCollapsibleIcon}
                  onDraggerDoubleClick={props.onDraggerDoubleClick}
                  onOffsetStart={onInternalResizeStart}
                  onOffsetUpdate={(index, offsetX, offsetY, lazyEnd) => {
                    let offset = isVertical.value ? offsetY : offsetX
                    if (reverse.value) {
                      offset = -offset
                    }
                    onInternalResizeUpdate(index, offset, lazyEnd)
                  }}
                  onOffsetEnd={onInternalResizeEnd}
                  onCollapse={onInternalCollapse}
                  containerSize={containerSize.value || 0}
                />
              )
            }

            return (
              <>
                {panel}
                {splitBar}
              </>
            )
          })}

          {/* 拖拽时的遮罩层 */}
          {typeof movingIndex.value?.index === 'number' && (
            <div aria-hidden class={cls(maskCls, `${maskCls}-${mergedOrientation.value}`)} />
          )}
        </div>
      )
    }
  },
})
