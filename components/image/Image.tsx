import {
  defineComponent,
  ref,
  computed,
  inject,
  provide,
  watch,
  nextTick,
  onBeforeUnmount,
  Teleport,
  Transition,
  isVNode,
  type PropType,
  type InjectionKey,
  type VNode,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls, KEYS } from '../_utils'
import { Icon } from '../icon'
import {
  CloseOutlined,
  LeftOutlined,
  RightOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  SwapOutlined,
} from '../icon/icons'
import type {
  ImageProps,
  PreviewConfig,
  ImageContent,
  TransformType,
  TransformAction,
  MaskType,
  ImgInfo,
} from './types'

// ---- body scroll lock (引用计数，与 Modal 同策略) ----
let lockCount = 0
let cachedOverflow = ''
function lockScroll() {
  if (typeof document === 'undefined') return
  if (lockCount === 0) {
    cachedOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  }
  lockCount += 1
}
function unlockScroll() {
  if (typeof document === 'undefined') return
  lockCount = Math.max(0, lockCount - 1)
  if (lockCount === 0) document.body.style.overflow = cachedOverflow
}

// ---- helpers ----
function renderContent(content?: ImageContent): VNode | null {
  if (content == null) return null
  return typeof content === 'function' ? content() : content
}

/** 把 preview prop（boolean | PreviewConfig）规范成 config 或 null（禁用） */
function normalizePreview(preview: boolean | PreviewConfig | undefined): PreviewConfig | null {
  if (typeof preview === 'boolean') return preview ? {} : null
  return preview ?? {}
}

/** 解析 mask 配置：返回 { enabled, closable, coverNode } */
function resolveMask(cfg: PreviewConfig): {
  enabled: boolean
  closable: boolean
  coverNode: VNode | null
} {
  const cover = renderContent(cfg.cover)
  // mask 作为 VNode 是 deprecated 的 cover 别名
  let coverNode: VNode | null = cover
  let maskObj: boolean | MaskType | undefined
  if (isVNode(cfg.mask)) {
    if (!coverNode) coverNode = cfg.mask
  } else {
    maskObj = cfg.mask as boolean | MaskType | undefined
  }
  let enabled = true
  let closable = true
  if (typeof maskObj === 'boolean') {
    enabled = maskObj
  } else if (maskObj && typeof maskObj === 'object') {
    if (maskObj.enabled !== undefined) enabled = maskObj.enabled
    if (maskObj.closable !== undefined) closable = maskObj.closable
  }
  return { enabled, closable, coverNode }
}

const DEFAULT_TRANSFORM = (): TransformType => ({
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  flipX: false,
  flipY: false,
})

// ---- PreviewGroup context ----
interface PreviewGroupContext {
  register: (getItem: () => ImgInfo) => () => void
  open: (item: () => ImgInfo) => void
  preview: () => boolean | PreviewConfig | undefined
}

const PREVIEW_GROUP_KEY: InjectionKey<PreviewGroupContext> = Symbol('PreviewGroup')

// ---- Preview overlay ----
const ImagePreview = defineComponent({
  name: 'ImagePreview',
  props: {
    prefixCls: { type: String, required: true },
    src: { type: String, default: '' },
    alt: String,
    config: { type: Object as PropType<PreviewConfig>, default: () => ({}) },
    visible: { type: Boolean, default: false },
    onClose: { type: Function as PropType<() => void>, required: true },
    onPrev: Function as PropType<() => void>,
    onNext: Function as PropType<() => void>,
    hasPrev: Boolean,
    hasNext: Boolean,
    current: Number,
    total: Number,
    countRender: Function as PropType<(current: number, total: number) => VNode>,
  },
  setup(props) {
    const transform = ref<TransformType>(DEFAULT_TRANSFORM())
    // 切换图片瞬间禁用过渡，避免从旧图的缩放/旋转状态“回弹”造成卡顿
    const switching = ref(false)

    const scaleStep = computed(() => props.config.scaleStep ?? 0.5)
    const minScale = computed(() => props.config.minScale ?? 1)
    const maxScale = computed(() => props.config.maxScale ?? 50)
    const movable = computed(() => props.config.movable !== false)

    const emitTransform = (action: TransformAction) => {
      props.config.onTransform?.({ transform: { ...transform.value }, action })
    }

    const reset = () => {
      transform.value = DEFAULT_TRANSFORM()
      emitTransform('reset')
    }

    watch(
      () => props.visible,
      (v) => {
        if (v) {
          transform.value = DEFAULT_TRANSFORM()
          lockScroll()
        } else {
          unlockScroll()
        }
      },
    )

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

    // ---- 键盘：Esc 关闭 / 左右切换 ----
    const handleKeydown = (e: KeyboardEvent) => {
      if (!props.visible) return
      if (e.key === KEYS.ESCAPE) {
        props.onClose()
      } else if (e.key === KEYS.ARROW_LEFT && props.hasPrev) {
        props.onPrev?.()
      } else if (e.key === KEYS.ARROW_RIGHT && props.hasNext) {
        props.onNext?.()
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeydown)
      onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
    }
    onBeforeUnmount(() => {
      if (props.visible) unlockScroll()
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
    const maskInfo = computed(() => resolveMask(props.config))
    const handleMaskClick = (e: MouseEvent) => {
      if (e.target === e.currentTarget && maskInfo.value.closable) props.onClose()
    }

    const previewCls = `${props.prefixCls}-preview`

    const getCloseIcon = () => {
      const ci = props.config.closeIcon
      if (ci === false) return null
      if (ci) return renderContent(ci)
      return <Icon component={CloseOutlined} />
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
      onClose: props.onClose,
      onActive,
    }

    const renderDefaultToolbar = (): VNode => (
      <div class={`${previewCls}-operations`} onClick={(e: MouseEvent) => e.stopPropagation()}>
        <button class={`${previewCls}-op-btn`} onClick={flipX} title="左右翻转">
          <Icon component={SwapOutlined} />
        </button>
        <button class={`${previewCls}-op-btn`} onClick={flipY} title="上下翻转">
          <Icon component={SwapOutlined} rotate={90} />
        </button>
        <button class={`${previewCls}-op-btn`} onClick={rotateLeft} title="向左旋转">
          <Icon component={RotateLeftOutlined} />
        </button>
        <button class={`${previewCls}-op-btn`} onClick={rotateRight} title="向右旋转">
          <Icon component={RotateRightOutlined} />
        </button>
        <button
          class={cls(`${previewCls}-op-btn`, {
            [`${previewCls}-op-btn-disabled`]: transform.value.scale <= minScale.value,
          })}
          onClick={zoomOut}
          title="缩小"
        >
          <Icon component={ZoomOutOutlined} />
        </button>
        <button
          class={cls(`${previewCls}-op-btn`, {
            [`${previewCls}-op-btn-disabled`]: transform.value.scale >= maxScale.value,
          })}
          onClick={zoomIn}
          title="放大"
        >
          <Icon component={ZoomInOutlined} />
        </button>
      </div>
    )

    const renderToolbar = (): VNode => {
      const original = renderDefaultToolbar()
      // 优先使用 AntD v6 对齐的 toolbarRender，其次兼容 deprecated 的 actionsRender
      const render = props.config.toolbarRender ?? props.config.actionsRender
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
          class={`${previewCls}-img`}
          style={realImgStyle.value}
          draggable={false}
          onMousedown={onMouseDownImg}
          onDblclick={onDoubleClick}
          onClick={(e: MouseEvent) => e.stopPropagation()}
        />
      ) as VNode
      if (props.config.imageRender) {
        return props.config.imageRender(original, {
          transform: { ...transform.value },
          current: props.current,
          total: props.total,
          image: imgInfo.value,
        })
      }
      return original
    }

    return () => {
      const showCount = props.total != null && props.total > 1
      return (
        <Teleport to="body">
          <Transition name={`${previewCls}-fade`}>
            {props.visible && (
              <div
                class={`${previewCls}-root`}
                style={props.config.zIndex != null ? { zIndex: props.config.zIndex } : undefined}
                onClick={handleMaskClick}
              >
                <div
                  class={cls(`${previewCls}-mask`, {
                    [`${previewCls}-mask-hidden`]: !maskInfo.value.enabled,
                  })}
                />
                <button class={`${previewCls}-close`} onClick={props.onClose} title="关闭">
                  {getCloseIcon()}
                </button>
                <div class={`${previewCls}-wrap`} onClick={handleMaskClick} onWheel={handleWheel}>
                  {renderImage()}
                </div>
                {renderToolbar()}
                {showCount && (
                  <div class={`${previewCls}-count`}>
                    {props.countRender
                      ? props.countRender((props.current ?? 0) + 1, props.total!)
                      : `${(props.current ?? 0) + 1} / ${props.total}`}
                  </div>
                )}
                {props.hasPrev && (
                  <button
                    class={`${previewCls}-switch ${previewCls}-switch-left`}
                    onClick={(e: MouseEvent) => {
                      e.stopPropagation()
                      props.onPrev?.()
                    }}
                  >
                    <Icon component={LeftOutlined} />
                  </button>
                )}
                {props.hasNext && (
                  <button
                    class={`${previewCls}-switch ${previewCls}-switch-right`}
                    onClick={(e: MouseEvent) => {
                      e.stopPropagation()
                      props.onNext?.()
                    }}
                  >
                    <Icon component={RightOutlined} />
                  </button>
                )}
              </div>
            )}
          </Transition>
        </Teleport>
      )
    }
  },
})

// ---- Image ----
export const Image = defineComponent({
  name: 'Image',
  inheritAttrs: false,
  props: {
    src: String,
    alt: String,
    width: [Number, String] as PropType<number | string>,
    height: [Number, String] as PropType<number | string>,
    preview: { type: [Boolean, Object] as PropType<boolean | PreviewConfig>, default: true },
    fallback: String,
    placeholder: {
      type: [Boolean, Object, Function] as PropType<ImageProps['placeholder']>,
      default: false,
    },
    rootClassName: String,
    onError: Function as PropType<(e: Event) => void>,
  },
  setup(props, { attrs }) {
    const prefixCls = usePrefixCls('image')
    const status = ref<'loading' | 'loaded' | 'error'>('loading')
    const selfVisible = ref(false)
    const groupCtx = inject(PREVIEW_GROUP_KEY, null)

    watch(
      () => props.src,
      () => {
        status.value = 'loading'
      },
    )

    const onLoad = () => {
      status.value = 'loaded'
    }
    const onError = (e: Event) => {
      status.value = 'error'
      props.onError?.(e)
    }

    // 解析 preview 配置（group 优先取 group 的）
    const previewConfig = computed<PreviewConfig | null>(() => {
      if (groupCtx) return normalizePreview(groupCtx.preview())
      return normalizePreview(props.preview)
    })

    const canPreview = computed(() => previewConfig.value !== null && status.value !== 'error')

    // 受控 open（仅非 group 单图场景；group 由 group 统一管理）
    const controlledOpen = computed(() => previewConfig.value?.open ?? previewConfig.value?.visible)
    const isControlled = computed(() => controlledOpen.value !== undefined)
    const actualVisible = computed(() => (isControlled.value ? !!controlledOpen.value : selfVisible.value))

    const emitOpenChange = (open: boolean) => {
      const cfg = previewConfig.value
      if (!cfg) return
      cfg.onOpenChange?.(open)
      cfg.onVisibleChange?.(open, !open)
    }

    const setOpen = (open: boolean) => {
      if (!isControlled.value) selfVisible.value = open
      emitOpenChange(open)
    }

    const getItem = (): ImgInfo => ({
      url: previewConfig.value?.src ?? props.src ?? '',
      alt: props.alt,
      width: props.width,
      height: props.height,
    })

    const handleClick = () => {
      if (!canPreview.value) return
      if (groupCtx) {
        groupCtx.open(getItem)
      } else {
        setOpen(true)
      }
    }

    // 注册到 group
    if (groupCtx) {
      const unregister = groupCtx.register(getItem)
      onBeforeUnmount(unregister)
    }

    const rootStyle = computed(() => ({
      width: typeof props.width === 'number' ? `${props.width}px` : props.width,
      height: typeof props.height === 'number' ? `${props.height}px` : props.height,
    }))

    const displaySrc = computed(() => (status.value === 'error' && props.fallback ? props.fallback : props.src))

    const previewSrc = computed(() => previewConfig.value?.src ?? props.src ?? '')

    const maskInfo = computed(() => (previewConfig.value ? resolveMask(previewConfig.value) : null))

    const renderPlaceholder = () => {
      const p = props.placeholder
      if (!p) return null
      if (p === true) return <div class={`${prefixCls}-placeholder`} />
      // 自定义 VNode / 函数
      return <div class={`${prefixCls}-placeholder`}>{renderContent(p as ImageContent)}</div>
    }

    return () => (
      <div
        class={cls(prefixCls, props.rootClassName, attrs.class as string, {
          [`${prefixCls}-preview`]: canPreview.value,
          [`${prefixCls}-error`]: status.value === 'error' && !props.fallback,
        })}
        style={[rootStyle.value, attrs.style as any]}
      >
        {status.value === 'loading' && renderPlaceholder()}
        {status.value === 'error' && !props.fallback ? (
          <div class={`${prefixCls}-error-placeholder`}>
            <span>图片加载失败</span>
          </div>
        ) : (
          <img
            src={displaySrc.value}
            alt={props.alt}
            class={`${prefixCls}-img`}
            onLoad={onLoad}
            onError={onError}
            onClick={handleClick}
          />
        )}
        {canPreview.value && status.value === 'loaded' && maskInfo.value?.enabled && (
          <div class={`${prefixCls}-mask`} onClick={handleClick}>
            {maskInfo.value.coverNode ?? (
              <span class={`${prefixCls}-mask-info`}>
                <Icon component={ZoomInOutlined} /> <span>预览</span>
              </span>
            )}
          </div>
        )}
        {!groupCtx && previewConfig.value && (
          <ImagePreview
            prefixCls={prefixCls}
            src={previewSrc.value}
            alt={props.alt}
            config={previewConfig.value}
            visible={actualVisible.value}
            onClose={() => setOpen(false)}
          />
        )}
      </div>
    )
  },
})

// ---- PreviewGroup ----
export const PreviewGroup = defineComponent({
  name: 'PreviewGroup',
  props: {
    preview: { type: [Boolean, Object] as PropType<boolean | PreviewConfig>, default: true },
    items: { type: Array as PropType<(string | ImgInfo)[]>, default: undefined },
    current: Number,
    onChange: Function as PropType<(current: number, prevCurrent: number) => void>,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('image')
    // 注册的子 Image（动态）
    const registry = ref<Array<() => ImgInfo>>([])
    const selfCurrent = ref(0)
    const selfVisible = ref(false)

    const cfg = computed<PreviewConfig | null>(() => normalizePreview(props.preview))

    const isControlled = computed(() => cfg.value?.open ?? cfg.value?.visible)
    const visible = computed(() => (isControlled.value !== undefined ? !!isControlled.value : selfVisible.value))
    const currentControlled = computed(() => props.current)
    const current = computed(() =>
      currentControlled.value !== undefined ? currentControlled.value : selfCurrent.value,
    )

    // items prop 优先；否则用注册表
    const itemList = computed<ImgInfo[]>(() => {
      if (props.items) {
        return props.items.map((it) => (typeof it === 'string' ? { url: it } : it))
      }
      return registry.value.map((g) => g())
    })

    const setCurrent = (next: number) => {
      const prev = current.value
      if (props.current === undefined) selfCurrent.value = next
      if (next !== prev) props.onChange?.(next, prev)
    }

    const setVisible = (v: boolean) => {
      if (isControlled.value === undefined) selfVisible.value = v
      const c = cfg.value
      if (c) {
        c.onOpenChange?.(v)
        c.onVisibleChange?.(v, !v)
      }
    }

    const ctx: PreviewGroupContext = {
      preview: () => props.preview,
      register(getItem) {
        registry.value.push(getItem)
        return () => {
          const idx = registry.value.indexOf(getItem)
          if (idx >= 0) registry.value.splice(idx, 1)
        }
      },
      open(getItem) {
        const idx = registry.value.indexOf(getItem)
        setCurrent(idx >= 0 ? idx : 0)
        setVisible(true)
      },
    }

    provide(PREVIEW_GROUP_KEY, ctx)

    const currentSrc = computed(() => itemList.value[current.value]?.url ?? '')
    const currentAlt = computed(() => itemList.value[current.value]?.alt)

    return () => (
      <>
        {slots.default?.()}
        {cfg.value && (
          <ImagePreview
            prefixCls={prefixCls}
            src={currentSrc.value}
            alt={currentAlt.value}
            config={cfg.value}
            visible={visible.value}
            current={current.value}
            total={itemList.value.length}
            hasPrev={current.value > 0}
            hasNext={current.value < itemList.value.length - 1}
            onPrev={() => setCurrent(current.value - 1)}
            onNext={() => setCurrent(current.value + 1)}
            onClose={() => setVisible(false)}
          />
        )}
      </>
    )
  },
})
