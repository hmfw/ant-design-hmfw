import {
  defineComponent,
  ref,
  computed,
  watch,
  onBeforeUnmount,
  type PropType,
  type VNode,
  type CSSProperties,
} from 'vue'
import { cls } from '../_utils/cls'
import { UpOutlined, DownOutlined, LeftOutlined, RightOutlined } from '@hmfw/icons'
import type { SplitterProps, ShowCollapsibleIconMode } from './types'

const getValidNumber = (num?: number) => {
  return typeof num === 'number' && Number.isFinite(num) ? Math.round(num) : 0
}

const DOUBLE_CLICK_TIME_GAP = 300

interface SplitBarProps {
  index: number
  active: boolean
  draggerStyle?: { default?: CSSProperties; active?: CSSProperties }
  draggerClassName?: { default?: string; active?: string }
  prefixCls: string
  resizable: boolean
  startCollapsible: boolean
  endCollapsible: boolean
  draggerIcon?: VNode
  collapsibleIcon?: NonNullable<SplitterProps['collapsible']>['icon']
  showStartCollapsibleIcon: ShowCollapsibleIconMode
  showEndCollapsibleIcon: ShowCollapsibleIconMode
  onDraggerDoubleClick?: (index: number) => void
  onOffsetStart: (index: number) => void
  onOffsetUpdate: (index: number, offsetX: number, offsetY: number, lazyEnd?: boolean) => void
  onOffsetEnd: (lazyEnd?: boolean) => void
  onCollapse: (index: number, type: 'start' | 'end') => void
  vertical: boolean
  ariaNow: number
  ariaMin: number
  ariaMax: number
  lazy?: boolean
  containerSize: number
}

const splitBarProps = {
  index: { type: Number, required: true },
  active: { type: Boolean, default: false },
  draggerStyle: { type: Object as PropType<SplitBarProps['draggerStyle']>, default: undefined },
  draggerClassName: { type: Object as PropType<SplitBarProps['draggerClassName']>, default: undefined },
  prefixCls: { type: String, required: true },
  resizable: { type: Boolean, default: true },
  startCollapsible: { type: Boolean, default: false },
  endCollapsible: { type: Boolean, default: false },
  draggerIcon: { type: Object as PropType<VNode>, default: undefined },
  collapsibleIcon: { type: Object as PropType<SplitBarProps['collapsibleIcon']>, default: undefined },
  showStartCollapsibleIcon: { type: [Boolean, String] as PropType<ShowCollapsibleIconMode>, default: 'auto' },
  showEndCollapsibleIcon: { type: [Boolean, String] as PropType<ShowCollapsibleIconMode>, default: 'auto' },
  onDraggerDoubleClick: { type: Function as PropType<(index: number) => void>, default: undefined },
  onOffsetStart: { type: Function as PropType<(index: number) => void>, required: true },
  onOffsetUpdate: {
    type: Function as PropType<(index: number, offsetX: number, offsetY: number, lazyEnd?: boolean) => void>,
    required: true,
  },
  onOffsetEnd: { type: Function as PropType<(lazyEnd?: boolean) => void>, required: true },
  onCollapse: { type: Function as PropType<(index: number, type: 'start' | 'end') => void>, required: true },
  vertical: { type: Boolean, default: false },
  ariaNow: { type: Number, required: true },
  ariaMin: { type: Number, required: true },
  ariaMax: { type: Number, required: true },
  lazy: { type: Boolean, default: false },
  containerSize: { type: Number, required: true },
} satisfies Record<keyof SplitBarProps, any>

const SplitBar = defineComponent<SplitBarProps>({
  name: 'SplitBar',
  props: splitBarProps,
  setup(props) {
    const splitBarPrefixCls = computed(() => `${props.prefixCls}-bar`)
    const lastClickTimeRef = ref<number>(0)

    // ======================== 调整大小 ========================
    const startPos = ref<[x: number, y: number] | null>(null)
    const constrainedOffset = ref<number>(0)

    const constrainedOffsetX = computed(() => (props.vertical ? 0 : constrainedOffset.value))
    const constrainedOffsetY = computed(() => (props.vertical ? constrainedOffset.value : 0))

    const onMouseDown = (e: MouseEvent) => {
      e.stopPropagation()

      const currentTime = Date.now()
      const timeGap = currentTime - lastClickTimeRef.value

      if (timeGap > 0 && timeGap < DOUBLE_CLICK_TIME_GAP) {
        // 如果是双击操作，阻止拖拽开始
        return
      }

      lastClickTimeRef.value = currentTime

      if (props.resizable && e.currentTarget) {
        startPos.value = [e.pageX, e.pageY]
        props.onOffsetStart(props.index)
      }
    }

    const onTouchStart = (e: TouchEvent) => {
      if (props.resizable && e.touches.length === 1) {
        const touch = e.touches[0]
        startPos.value = [touch.pageX, touch.pageY]
        props.onOffsetStart(props.index)
      }
    }

    // 更新的约束计算
    const getConstrainedOffset = (rawOffset: number) => {
      const currentPos = (props.containerSize * props.ariaNow) / 100
      const newPos = currentPos + rawOffset

      // 计算可用空间
      const minAllowed = Math.max(0, (props.containerSize * props.ariaMin) / 100)
      const maxAllowed = Math.min(props.containerSize, (props.containerSize * props.ariaMax) / 100)

      // 将新位置限制在边界内
      const clampedPos = Math.max(minAllowed, Math.min(maxAllowed, newPos))
      return clampedPos - currentPos
    }

    const handleLazyMove = (offsetX: number, offsetY: number) => {
      const constrainedOffsetValue = getConstrainedOffset(props.vertical ? offsetY : offsetX)
      constrainedOffset.value = constrainedOffsetValue
    }

    const handleLazyEnd = () => {
      props.onOffsetUpdate(props.index, constrainedOffsetX.value, constrainedOffsetY.value, true)
      constrainedOffset.value = 0
      props.onOffsetEnd(true)
    }

    const onCollapseKeyDown = (e: KeyboardEvent, type: 'start' | 'end') => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        props.onCollapse(props.index, type)
      }
    }

    const getVisibilityClass = (mode: ShowCollapsibleIconMode): string => {
      switch (mode) {
        case true:
          return `${splitBarPrefixCls.value}-collapse-bar-always-visible`
        case false:
          return `${splitBarPrefixCls.value}-collapse-bar-always-hidden`
        case 'auto':
          return `${splitBarPrefixCls.value}-collapse-bar-hover-only`
      }
    }

    // 监听拖拽
    let cleanupFn: (() => void) | null = null

    watch(startPos, (pos) => {
      // 清理上一次的监听器
      if (cleanupFn) {
        cleanupFn()
        cleanupFn = null
      }

      if (!pos) {
        return
      }

      const onMouseMove = (e: MouseEvent) => {
        const { pageX, pageY } = e
        const offsetX = pageX - pos[0]
        const offsetY = pageY - pos[1]
        if (props.lazy) {
          handleLazyMove(offsetX, offsetY)
        } else {
          props.onOffsetUpdate(props.index, offsetX, offsetY)
        }
      }

      const onMouseUp = () => {
        if (props.lazy) {
          handleLazyEnd()
        } else {
          props.onOffsetEnd()
        }
        startPos.value = null
      }

      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length === 1) {
          const touch = e.touches[0]
          const offsetX = touch.pageX - pos[0]
          const offsetY = touch.pageY - pos[1]
          if (props.lazy) {
            handleLazyMove(offsetX, offsetY)
          } else {
            props.onOffsetUpdate(props.index, offsetX, offsetY)
          }
        }
      }

      const handleTouchEnd = () => {
        if (props.lazy) {
          handleLazyEnd()
        } else {
          props.onOffsetEnd()
        }
        startPos.value = null
      }

      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
      window.addEventListener('touchmove', handleTouchMove as any)
      window.addEventListener('touchend', handleTouchEnd)

      // 存储清理函数
      cleanupFn = () => {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseup', onMouseUp)
        window.removeEventListener('touchmove', handleTouchMove as any)
        window.removeEventListener('touchend', handleTouchEnd)
      }
    })

    // 组件卸载时清理
    onBeforeUnmount(() => {
      if (cleanupFn) {
        cleanupFn()
      }
    })

    const transformStyle = computed<CSSProperties>(() => ({
      '--hmfw-splitter-bar-preview-offset': `${constrainedOffset.value}px`,
    }))

    // ======================== 渲染 ========================
    const icons = computed(() => {
      let startIcon = null
      let endIcon = null
      const startCustomize = props.collapsibleIcon?.start !== undefined
      const endCustomize = props.collapsibleIcon?.end !== undefined

      if (props.vertical) {
        startIcon = startCustomize ? props.collapsibleIcon!.start : <UpOutlined />
        endIcon = endCustomize ? props.collapsibleIcon!.end : <DownOutlined />
      } else {
        startIcon = startCustomize ? props.collapsibleIcon!.start : <LeftOutlined />
        endIcon = endCustomize ? props.collapsibleIcon!.end : <RightOutlined />
      }

      return { startIcon, endIcon, startCustomize, endCustomize }
    })

    return () => {
      const { startIcon, endIcon, startCustomize, endCustomize } = icons.value

      return (
        <div class={splitBarPrefixCls.value}>
          {props.lazy && (
            <div
              class={cls(`${splitBarPrefixCls.value}-preview`, {
                [`${splitBarPrefixCls.value}-preview-active`]: !!constrainedOffset.value,
              })}
              style={transformStyle.value}
            />
          )}

          <div
            style={props.draggerStyle?.default}
            class={cls(
              `${splitBarPrefixCls.value}-dragger`,
              {
                [`${splitBarPrefixCls.value}-dragger-disabled`]: !props.resizable,
                [`${splitBarPrefixCls.value}-dragger-active`]: props.active,
                [`${splitBarPrefixCls.value}-dragger-customize`]: props.draggerIcon !== undefined,
              },
              props.draggerClassName?.default,
              props.active && props.draggerClassName?.active,
            )}
            onMousedown={onMouseDown}
            onTouchstart={onTouchStart}
            onDblclick={() => props.onDraggerDoubleClick?.(props.index)}
            role="separator"
            aria-disabled={!props.resizable}
            aria-orientation={props.vertical ? 'horizontal' : 'vertical'}
            aria-valuenow={getValidNumber(props.ariaNow)}
            aria-valuemin={getValidNumber(props.ariaMin)}
            aria-valuemax={getValidNumber(props.ariaMax)}
          >
            {props.draggerIcon !== undefined ? (
              <div class={cls(`${splitBarPrefixCls.value}-dragger-icon`)}>{props.draggerIcon}</div>
            ) : null}
          </div>

          {/* 开始折叠按钮 */}
          {props.startCollapsible && (
            <div
              class={cls(
                `${splitBarPrefixCls.value}-collapse-bar`,
                `${splitBarPrefixCls.value}-collapse-bar-start`,
                {
                  [`${splitBarPrefixCls.value}-collapse-bar-customize`]: startCustomize,
                },
                getVisibilityClass(props.showStartCollapsibleIcon),
              )}
              role="button"
              tabindex={0}
              aria-label="Toggle start panel"
              onClick={() => props.onCollapse(props.index, 'start')}
              onKeydown={(e) => onCollapseKeyDown(e, 'start')}
            >
              <span
                class={cls(`${splitBarPrefixCls.value}-collapse-icon`, `${splitBarPrefixCls.value}-collapse-start`)}
              >
                {startIcon}
              </span>
            </div>
          )}

          {/* 结束折叠按钮 */}
          {props.endCollapsible && (
            <div
              class={cls(
                `${splitBarPrefixCls.value}-collapse-bar`,
                `${splitBarPrefixCls.value}-collapse-bar-end`,
                {
                  [`${splitBarPrefixCls.value}-collapse-bar-customize`]: endCustomize,
                },
                getVisibilityClass(props.showEndCollapsibleIcon),
              )}
              role="button"
              tabindex={0}
              aria-label="Toggle end panel"
              onClick={() => props.onCollapse(props.index, 'end')}
              onKeydown={(e) => onCollapseKeyDown(e, 'end')}
            >
              <span class={cls(`${splitBarPrefixCls.value}-collapse-icon`, `${splitBarPrefixCls.value}-collapse-end`)}>
                {endIcon}
              </span>
            </div>
          )}
        </div>
      )
    }
  },
})

export default SplitBar
