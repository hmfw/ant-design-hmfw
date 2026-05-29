import { defineComponent, ref, computed, inject, provide, watch, Teleport, Transition, type PropType, type InjectionKey } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { ImageProps } from './types'

// PreviewGroup context
interface PreviewGroupContext {
  register: (src: string) => number
  unregister: (index: number) => void
  open: (index: number) => void
  preview: boolean
}

const PREVIEW_GROUP_KEY: InjectionKey<PreviewGroupContext> = Symbol('PreviewGroup')

// ---- Preview overlay ----
const ImagePreview = defineComponent({
  name: 'ImagePreview',
  props: {
    src: { type: String, required: true },
    visible: { type: Boolean, default: false },
    onClose: { type: Function as PropType<() => void>, required: true },
    onPrev: Function as PropType<() => void>,
    onNext: Function as PropType<() => void>,
    hasPrev: Boolean,
    hasNext: Boolean,
  },
  setup(props) {
    const scale = ref(1)
    const rotate = ref(0)

    watch(() => props.visible, (v) => {
      if (v) { scale.value = 1; rotate.value = 0 }
    })

    const zoomIn = () => { scale.value = Math.min(scale.value + 0.25, 5) }
    const zoomOut = () => { scale.value = Math.max(scale.value - 0.25, 0.25) }
    const rotateCw = () => { rotate.value = (rotate.value + 90) % 360 }
    const reset = () => { scale.value = 1; rotate.value = 0 }

    const handleMaskClick = (e: MouseEvent) => {
      if (e.target === e.currentTarget) props.onClose()
    }

    return () => (
      <Teleport to="body">
        <Transition name="hmfw-image-preview-fade">
          {props.visible && (
            <div class="hmfw-image-preview-root" onClick={handleMaskClick}>
              <div class="hmfw-image-preview-mask" />
              <div class="hmfw-image-preview-wrap" onClick={handleMaskClick}>
                <img
                  src={props.src}
                  class="hmfw-image-preview-img"
                  style={{
                    transform: `scale(${scale.value}) rotate(${rotate.value}deg)`,
                    transition: 'transform 0.3s',
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div class="hmfw-image-preview-operations" onClick={(e) => e.stopPropagation()}>
                <button class="hmfw-image-preview-op-btn" onClick={zoomIn} title="放大">＋</button>
                <button class="hmfw-image-preview-op-btn" onClick={zoomOut} title="缩小">－</button>
                <button class="hmfw-image-preview-op-btn" onClick={rotateCw} title="旋转">↻</button>
                <button class="hmfw-image-preview-op-btn" onClick={reset} title="重置">⊙</button>
                <button class="hmfw-image-preview-op-btn" onClick={props.onClose} title="关闭">✕</button>
              </div>
              {props.hasPrev && (
                <button class="hmfw-image-preview-switch hmfw-image-preview-switch-left" onClick={(e) => { e.stopPropagation(); props.onPrev?.() }}>‹</button>
              )}
              {props.hasNext && (
                <button class="hmfw-image-preview-switch hmfw-image-preview-switch-right" onClick={(e) => { e.stopPropagation(); props.onNext?.() }}>›</button>
              )}
            </div>
          )}
        </Transition>
      </Teleport>
    )
  },
})

// ---- Image ----
export const Image = defineComponent({
  name: 'Image',
  props: {
    src: String,
    alt: String,
    width: [Number, String] as PropType<number | string>,
    height: [Number, String] as PropType<number | string>,
    preview: { type: Boolean, default: true },
    fallback: String,
    placeholder: Boolean,
  },
  setup(props) {
    const prefixCls = usePrefixCls('image')
    const status = ref<'loading' | 'loaded' | 'error'>('loading')
    const previewVisible = ref(false)
    const groupCtx = inject(PREVIEW_GROUP_KEY, null)
    const groupIndex = ref(-1)

    watch(() => props.src, () => { status.value = 'loading' }, { immediate: false })

    const onLoad = () => { status.value = 'loaded' }
    const onError = () => { status.value = 'error' }

    const canPreview = computed(() => {
      if (groupCtx) return groupCtx.preview
      return props.preview
    })

    const handleClick = () => {
      if (!canPreview.value || status.value === 'error') return
      if (groupCtx && groupIndex.value >= 0) {
        groupCtx.open(groupIndex.value)
      } else {
        previewVisible.value = true
      }
    }

    // Register with group
    if (groupCtx && props.src) {
      groupIndex.value = groupCtx.register(props.src)
    }

    const imgStyle = computed(() => ({
      width: typeof props.width === 'number' ? `${props.width}px` : props.width,
      height: typeof props.height === 'number' ? `${props.height}px` : props.height,
    }))

    const displaySrc = computed(() =>
      status.value === 'error' && props.fallback ? props.fallback : props.src
    )

    return () => (
      <div
        class={cls(prefixCls, {
          [`${prefixCls}-preview`]: canPreview.value,
          [`${prefixCls}-error`]: status.value === 'error' && !props.fallback,
        })}
        style={imgStyle.value}
      >
        {status.value === 'loading' && props.placeholder && (
          <div class={`${prefixCls}-placeholder`} />
        )}
        {status.value === 'error' && !props.fallback ? (
          <div class={`${prefixCls}-error-placeholder`}>
            <span>图片加载失败</span>
          </div>
        ) : (
          <img
            src={displaySrc.value}
            alt={props.alt}
            class={`${prefixCls}-img`}
            style={imgStyle.value}
            onLoad={onLoad}
            onError={onError}
            onClick={handleClick}
          />
        )}
        {canPreview.value && status.value === 'loaded' && (
          <div class={`${prefixCls}-mask`} onClick={handleClick}>
            <span class={`${prefixCls}-mask-info`}>
              <span>🔍 预览</span>
            </span>
          </div>
        )}
        {!groupCtx && (
          <ImagePreview
            src={props.src ?? ''}
            visible={previewVisible.value}
            onClose={() => { previewVisible.value = false }}
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
    preview: { type: Boolean, default: true },
  },
  setup(props, { slots }) {
    const images = ref<string[]>([])
    const currentIndex = ref(0)
    const visible = ref(false)

    const ctx: PreviewGroupContext = {
      get preview() { return props.preview },
      register(src) {
        const idx = images.value.length
        images.value.push(src)
        return idx
      },
      unregister(index) {
        images.value.splice(index, 1)
      },
      open(index) {
        currentIndex.value = index
        visible.value = true
      },
    }

    provide(PREVIEW_GROUP_KEY, ctx)

    return () => (
      <>
        {slots.default?.()}
        <ImagePreview
          src={images.value[currentIndex.value] ?? ''}
          visible={visible.value}
          onClose={() => { visible.value = false }}
          hasPrev={currentIndex.value > 0}
          hasNext={currentIndex.value < images.value.length - 1}
          onPrev={() => { currentIndex.value-- }}
          onNext={() => { currentIndex.value++ }}
        />
      </>
    )
  },
})
