import {
  defineComponent,
  ref,
  computed,
  watch,
  nextTick,
  onBeforeUnmount,
  Teleport,
  Transition,
  type PropType,
  type VNode,
} from 'vue'
import { cls } from '../_utils/cls'
import {
  CloseOutlined,
  LeftOutlined,
  RightOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  SwapOutlined,
} from '@hmfw/icons'
import { usePanelRef } from '../watermark'
import { useScrollLock, useOverlayKeyboard } from '../_utils/overlay'
import type {
  PreviewConfig,
  TransformType,
  TransformAction,
  ImgInfo,
  ImageClassNames,
  ImageStyles,
  ImagePreviewProps,
} from './types'
import {
  DEFAULT_SCALE_STEP,
  DEFAULT_MIN_SCALE,
  DEFAULT_MAX_SCALE,
  renderContent,
  resolveMask,
  DEFAULT_TRANSFORM,
} from './utils'

/**
 * ImagePreview 内部组件
 *
 * 图片预览浮层，提供缩放、旋转、翻转、拖拽等交互功能。
 * 不对外导出，仅供 Image 和 PreviewGroup 组件内部使用。
 *
 * 核心功能：
 * - 缩放：滚轮缩放、工具栏按钮缩放、双击缩放/重置
 * - 旋转：左右旋转 90°
 * - 翻转：水平/垂直翻转
 * - 拖拽：按住图片拖动平移
 * - 导航：上一张/下一张（PreviewGroup 场景）
 * - 键盘：Esc 关闭、← → 切换
 * - 性能优化：硬件加速、切换时禁用过渡避免卡顿
 * - 水印集成：自动传导 Watermark Context
 */
const imagePreviewProps = {
  prefixCls: { type: String, required: true },
  src: { type: String, default: '' },
  alt: { type: String, default: undefined },
  config: { type: Object as PropType<PreviewConfig>, default: () => ({}) },
  visible: { type: Boolean, default: false },
  onClose: { type: Function as PropType<() => void>, required: true },
  onPrev: { type: Function as PropType<() => void>, default: undefined },
  onNext: { type: Function as PropType<() => void>, default: undefined },
  hasPrev: { type: Boolean, default: false },
  hasNext: { type: Boolean, default: false },
  current: { type: Number, default: undefined },
  total: { type: Number, default: undefined },
  countRender: { type: Function as PropType<(current: number, total: number) => VNode>, default: undefined },
  classNames: { type: Object as PropType<ImageClassNames>, default: undefined },
  styles: { type: Object as PropType<ImageStyles>, default: undefined },
} satisfies Record<keyof ImagePreviewProps, any>

export const ImagePreview = defineComponent({
  name: 'ImagePreview',
  props: imagePreviewProps,
  setup(props) {
    const transform = ref<TransformType>(DEFAULT_TRANSFORM())
    // 切换图片瞬间禁用过渡，避免从旧图的缩放/旋转状态”回弹”造成卡顿
    const switching = ref(false)
    const previewRootRef = ref<HTMLElement | null>(null)

    const scaleStep = computed(() => props.config.scaleStep ?? DEFAULT_SCALE_STEP)
    const minScale = computed(() => props.config.minScale ?? DEFAULT_MIN_SCALE)
    const maxScale = computed(() => props.config.maxScale ?? DEFAULT_MAX_SCALE)
    const movable = computed(() => props.config.movable !== false)

    const emitTransform = (action: TransformAction) => {
      props.config?.onTransform?.({ transform: { ...transform.value }, action })
    }

    const reset = () => {
      transform.value = DEFAULT_TRANSFORM()
      emitTransform('reset')
    }

    // 集成 Watermark Context - 使水印传导到 ImagePreview
    const watermarkPanelRef = usePanelRef()
    const mergedPreviewRef = (el: any) => {
      previewRootRef.value = el as HTMLElement | null
      watermarkPanelRef(el as HTMLElement | null)
    }

    const isVisible = computed(() => props.visible)

    watch(isVisible, (v) => {
      if (v) {
        transform.value = DEFAULT_TRANSFORM()
      }
    })

    // 切换图片时复位 transform。切换时关闭过渡，让新图直接以初始状态呈现，
    // 待下一帧再恢复过渡，避免 translate/scale/rotate 的回弹动画造成卡顿。
    watch(
      () => props.src,
      () => {
        switching.value = true
        transform.value = DEFAULT_TRANSFORM()
        nextTick(() => {
          switching.value = false
        })
      },
    )

    const setScale = (next: number, action: TransformAction) => {
      transform.value = {
        ...transform.value,
        scale: Math.min(Math.max(next, minScale.value), maxScale.value),
      }
      emitTransform(action)
    }

    const zoomIn = () => setScale(transform.value.scale * (1 + scaleStep.value), 'zoomIn')
    const zoomOut = () => setScale(transform.value.scale / (1 + scaleStep.value), 'zoomOut')
    const rotateLeft = () => {
      transform.value = { ...transform.value, rotate: transform.value.rotate - 90 }
      emitTransform('rotateLeft')
    }
    const rotateRight = () => {
      transform.value = { ...transform.value, rotate: transform.value.rotate + 90 }
      emitTransform('rotateRight')
    }
    const flipX = () => {
      transform.value = { ...transform.value, flipX: !transform.value.flipX }
      emitTransform('flipX')
    }
    const flipY = () => {
      transform.value = { ...transform.value, flipY: !transform.value.flipY }
      emitTransform('flipY')
    }

    // 使用公共 Hooks
    useScrollLock(isVisible)
    useOverlayKeyboard(isVisible, {
      onClose: () => props.onClose!(),
      onPrev: props.hasPrev && props.onPrev ? () => props.onPrev!() : undefined,
      onNext: props.hasNext && props.onNext ? () => props.onNext!() : undefined,
    })

    // ---- 滚轮缩放 ----
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY
      if (delta < 0) zoomIn()
      else zoomOut()
      emitTransform('wheel')
    }

    // ---- 拖拽移动 ----
    let dragging = false
    let startX = 0
    let startY = 0
    let startTX = 0
    let startTY = 0
    const onMouseDownImg = (e: MouseEvent) => {
      if (!movable.value) return
      e.preventDefault()
      dragging = true
      startX = e.clientX
      startY = e.clientY
      startTX = transform.value.x
      startTY = transform.value.y
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    }
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging) return
      transform.value = {
        ...transform.value,
        x: startTX + (e.clientX - startX),
        y: startTY + (e.clientY - startY),
      }
    }
    const onMouseUp = () => {
      if (!dragging) return
      dragging = false
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      emitTransform('move')
    }
    onBeforeUnmount(() => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    })

    const onDoubleClick = () => {
      if (transform.value.scale !== 1) reset()
      else setScale(2, 'doubleClick')
    }

    // ---- 关闭：遮罩可点性 ----
    const maskInfo = computed(() => resolveMask(props.config ?? {}))
    const handleMaskClick = (e: MouseEvent) => {
      if (e.target === e.currentTarget && maskInfo.value.closable) props.onClose!()
    }

    const previewCls = `${props.prefixCls}-preview`

    const getCloseIcon = () => {
      const ci = props.config?.closeIcon
      if (ci === false) return null
      if (ci) return renderContent(ci)
      return <CloseOutlined class="hmfw-icon" />
    }

    const realImgStyle = computed(() => {
      const t = transform.value
      const scaleX = t.scale * (t.flipX ? -1 : 1)
      const scaleY = t.scale * (t.flipY ? -1 : 1)
      return {
        transform: `translate3d(${t.x}px, ${t.y}px, 0) scale3d(${scaleX}, ${scaleY}, 1) rotate(${t.rotate}deg)`,
        // 拖拽或切换图片时禁用过渡：拖拽需即时跟手，切换需避免回弹卡顿
        transition: dragging || switching.value ? 'none' : 'transform 0.3s',
        // 提示浏览器开启合成层，减少切换/缩放时的重绘抖动
        willChange: 'transform',
        cursor: movable.value ? 'grab' : 'default',
      }
    })

    // 当前预览图片信息，供 imageRender / toolbarRender 使用
    const imgInfo = computed<ImgInfo>(() => ({
      url: props.src,
      alt: props.alt,
    }))

    // 按偏移切换图片（PreviewGroup 场景）：-1 上一张，1 下一张
    const onActive = (offset: number) => {
      if (offset < 0) props.onPrev?.()
      else if (offset > 0) props.onNext?.()
    }

    const actions = {
      onFlipY: flipY,
      onFlipX: flipX,
      onRotateLeft: rotateLeft,
      onRotateRight: rotateRight,
      onZoomOut: zoomOut,
      onZoomIn: zoomIn,
      onReset: reset,
      onClose: props.onClose as () => void,
      onActive,
    }
    const renderDefaultToolbar = (): VNode => (
      <div
        class={cls(`${previewCls}-operations`, props.classNames?.operations)}
        style={props.styles?.operations}
        onClick={(e: MouseEvent) => e.stopPropagation()}
        role="toolbar"
        aria-label="图片操作工具栏"
      >
        <button
          class={cls(`${previewCls}-op-btn`, props.classNames?.operationBtn)}
          style={props.styles?.operationBtn}
          onClick={flipX}
          aria-label="左右翻转"
          title="左右翻转"
        >
          <SwapOutlined class="hmfw-icon" />
        </button>
        <button
          class={cls(`${previewCls}-op-btn`, props.classNames?.operationBtn)}
          style={props.styles?.operationBtn}
          onClick={flipY}
          aria-label="上下翻转"
          title="上下翻转"
        >
          <SwapOutlined class="hmfw-icon" style={{ transform: 'rotate(90deg)' }} />
        </button>
        <button
          class={cls(`${previewCls}-op-btn`, props.classNames?.operationBtn)}
          style={props.styles?.operationBtn}
          onClick={rotateLeft}
          aria-label="向左旋转"
          title="向左旋转"
        >
          <RotateLeftOutlined class="hmfw-icon" />
        </button>
        <button
          class={cls(`${previewCls}-op-btn`, props.classNames?.operationBtn)}
          style={props.styles?.operationBtn}
          onClick={rotateRight}
          aria-label="向右旋转"
          title="向右旋转"
        >
          <RotateRightOutlined class="hmfw-icon" />
        </button>
        <button
          class={cls(
            `${previewCls}-op-btn`,
            {
              [`${previewCls}-op-btn-disabled`]: transform.value.scale <= minScale.value,
            },
            props.classNames?.operationBtn,
          )}
          style={props.styles?.operationBtn}
          onClick={zoomOut}
          aria-label="缩小"
          aria-disabled={transform.value.scale <= minScale.value}
          title="缩小"
        >
          <ZoomOutOutlined class="hmfw-icon" />
        </button>
        <button
          class={cls(
            `${previewCls}-op-btn`,
            {
              [`${previewCls}-op-btn-disabled`]: transform.value.scale >= maxScale.value,
            },
            props.classNames?.operationBtn,
          )}
          style={props.styles?.operationBtn}
          onClick={zoomIn}
          aria-label="放大"
          aria-disabled={transform.value.scale >= maxScale.value}
          title="放大"
        >
          <ZoomInOutlined class="hmfw-icon" />
        </button>
      </div>
    )
    const renderToolbar = (): VNode => {
      const original = renderDefaultToolbar()
      const render = props.config?.toolbarRender
      if (render) {
        return render(original, {
          transform: { ...transform.value },
          current: props.current,
          total: props.total,
          image: imgInfo.value,
          actions,
        })
      }
      return original
    }

    const renderImage = (): VNode => {
      const original = (
        <img
          src={props.src}
          alt={props.alt}
          class={cls(`${previewCls}-img`, props.classNames?.previewImg)}
          style={[realImgStyle.value, props.styles?.previewImg]}
          draggable={false}
          onMousedown={onMouseDownImg}
          onDblclick={onDoubleClick}
          onClick={(e: MouseEvent) => e.stopPropagation()}
        />
      ) as VNode
      if (props.config?.imageRender) {
        return props.config.imageRender(original, {
          transform: { ...transform.value },
          current: props.current,
          total: props.total,
          image: imgInfo.value,
        })
      }
      return original
    }

    // 解析 getContainer：字符串选择器 | HTMLElement | 函数 | false（原地渲染） | undefined（默认 body）
    const getContainerElement = computed(() => {
      const container = props.config?.getContainer
      if (container === false) return false
      if (container === undefined) return 'body'
      if (typeof container === 'string') return container
      if (typeof container === 'function') {
        try {
          return container()
        } catch {
          return 'body'
        }
      }
      return container
    })

    return () => {
      const showCount = props.total != null && props.total > 1
      const previewContent = (
        <Transition name={`${previewCls}-fade`}>
          {props.visible && (
            <div
              ref={mergedPreviewRef}
              class={cls(`${previewCls}-root`, props.classNames?.preview)}
              style={[props.config.zIndex != null ? { zIndex: props.config.zIndex } : undefined, props.styles?.preview]}
              role="dialog"
              aria-modal="true"
              aria-label="图片预览"
              onClick={handleMaskClick}
            >
              <div
                class={cls(
                  `${previewCls}-mask`,
                  {
                    [`${previewCls}-mask-hidden`]: !maskInfo.value.enabled,
                  },
                  props.classNames?.previewMask,
                )}
                style={props.styles?.previewMask}
                aria-hidden="true"
              />
              <button
                class={cls(`${previewCls}-close`, props.classNames?.closeBtn)}
                style={props.styles?.closeBtn}
                onClick={props.onClose}
                aria-label="关闭预览"
                title="关闭"
              >
                {getCloseIcon()}
              </button>
              <div
                class={cls(`${previewCls}-wrap`, props.classNames?.previewWrap)}
                style={props.styles?.previewWrap}
                onClick={handleMaskClick}
                onWheel={handleWheel}
              >
                {renderImage()}
              </div>
              {renderToolbar()}
              {showCount && (
                <div class={cls(`${previewCls}-count`, props.classNames?.count)} style={props.styles?.count}>
                  {props.countRender
                    ? props.countRender((props.current ?? 0) + 1, props.total!)
                    : `${(props.current ?? 0) + 1} / ${props.total}`}
                </div>
              )}
              {props.hasPrev && (
                <button
                  class={cls(`${previewCls}-switch`, `${previewCls}-switch-left`, props.classNames?.switchBtn)}
                  style={props.styles?.switchBtn}
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation()
                    props.onPrev?.()
                  }}
                  aria-label="上一张"
                  title="上一张"
                >
                  <LeftOutlined class="hmfw-icon" />
                </button>
              )}
              {props.hasNext && (
                <button
                  class={cls(`${previewCls}-switch`, `${previewCls}-switch-right`, props.classNames?.switchBtn)}
                  style={props.styles?.switchBtn}
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation()
                    props.onNext?.()
                  }}
                  aria-label="下一张"
                  title="下一张"
                >
                  <RightOutlined class="hmfw-icon" />
                </button>
              )}
            </div>
          )}
        </Transition>
      )

      // getContainer === false 时原地渲染，否则使用 Teleport
      const containerEl = getContainerElement.value
      if (containerEl === false) {
        return previewContent
      }
      return <Teleport to={containerEl}>{previewContent}</Teleport>
    }
  },
})
