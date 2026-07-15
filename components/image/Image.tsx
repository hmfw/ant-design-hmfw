import { defineComponent, ref, computed, inject, watch, onBeforeUnmount, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { ZoomInOutlined } from '@hmfw/icons'
import type { ImageProps, PreviewConfig, ImageContent, ImgInfo, ImageClassNames, ImageStyles } from './types'
import { normalizePreview, resolveMask, renderContent } from './utils'
import { PREVIEW_GROUP_KEY } from './context'
import { ImagePreview } from './ImagePreview'

// ---- Image ----
const imageProps = {
  src: { type: String, default: undefined },
  alt: { type: String, default: undefined },
  width: { type: [Number, String] as PropType<number | string>, default: undefined },
  height: { type: [Number, String] as PropType<number | string>, default: undefined },
  preview: { type: [Boolean, Object] as PropType<boolean | PreviewConfig>, default: true },
  fallback: { type: String, default: undefined },
  placeholder: {
    type: [Boolean, Object, Function] as PropType<ImageProps['placeholder']>,
    default: false,
  },
  classNames: { type: Object as PropType<ImageClassNames>, default: undefined },
  styles: { type: Object as PropType<ImageStyles>, default: undefined },
  onError: { type: Function as PropType<(e: Event) => void>, default: undefined },
} satisfies Record<keyof ImageProps, any>

export const Image = defineComponent({
  name: 'Image',
  inheritAttrs: false,
  props: imageProps,
  setup(props, { attrs }) {
    const prefixCls = usePrefixCls('image')
    const status = ref<'loading' | 'loaded' | 'error'>('loading')
    const selfVisible = ref(false)
    const groupCtx = inject(PREVIEW_GROUP_KEY, null)
    // 标记是否已经尝试过 fallback（避免 fallback 失败后死循环）
    const isShowingFallback = ref(false)
    const fallbackFailed = ref(false)

    watch(
      () => props.src,
      () => {
        status.value = 'loading'
        isShowingFallback.value = false
        fallbackFailed.value = false
      },
    )

    const onLoad = () => {
      status.value = 'loaded'
    }
    const onError = (e: Event) => {
      status.value = 'error'
      props.onError?.(e)
      // 如果当前显示的是 fallback，标记 fallback 也失败了
      if (isShowingFallback.value) {
        fallbackFailed.value = true
      } else if (props.fallback) {
        // 否则，如果有 fallback，切换到 fallback
        isShowingFallback.value = true
      }
    }

    // 解析 preview 配置（group 优先取 group 的）
    const previewConfig = computed<PreviewConfig | null>(() => {
      if (groupCtx) return normalizePreview(groupCtx.preview())
      return normalizePreview(props.preview)
    })

    const canPreview = computed(() => previewConfig.value !== null && status.value !== 'error')

    // 受控 open（仅非 group 单图场景；group 由 group 统一管理）
    const controlledOpen = computed(() => previewConfig.value?.open)
    const isControlled = computed(() => controlledOpen.value !== undefined)
    const actualVisible = computed(() => (isControlled.value ? !!controlledOpen.value : selfVisible.value))

    const emitOpenChange = (open: boolean) => {
      const cfg = previewConfig.value
      if (!cfg) return
      cfg.onOpenChange?.(open)
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

    const rootStyle = computed(() => {
      const normalizeSize = (size: number | string | undefined) => {
        if (size === undefined) return undefined
        // 纯数字字符串或数字都加 px
        if (typeof size === 'number') return `${size}px`
        if (/^\d+$/.test(size)) return `${size}px`
        return size
      }
      return {
        width: normalizeSize(props.width),
        height: normalizeSize(props.height),
      }
    })

    const displaySrc = computed(() => {
      // 如果标记了显示 fallback，则显示 fallback，否则显示 src
      return isShowingFallback.value && props.fallback ? props.fallback : props.src
    })

    const previewSrc = computed(() => previewConfig.value?.src ?? props.src ?? '')

    const maskInfo = computed(() => (previewConfig.value ? resolveMask(previewConfig.value) : null))

    const renderPlaceholder = () => {
      const p = props.placeholder
      if (!p) return null
      if (p === true)
        return (
          <div
            class={cls(`${prefixCls}-placeholder`, props.classNames?.placeholder)}
            style={props.styles?.placeholder}
          />
        )
      // 自定义 VNode / 函数
      return (
        <div class={cls(`${prefixCls}-placeholder`, props.classNames?.placeholder)} style={props.styles?.placeholder}>
          {renderContent(p as ImageContent)}
        </div>
      )
    }

    return () => (
      <div
        class={cls(
          prefixCls,
          attrs.class as string,
          {
            [`${prefixCls}-preview`]: canPreview.value,
            [`${prefixCls}-error`]: status.value === 'error' && (!props.fallback || fallbackFailed.value),
          },
          props.classNames?.root,
        )}
        style={[rootStyle.value, attrs.style as any, props.styles?.root]}
      >
        {status.value === 'loading' && renderPlaceholder()}
        {status.value === 'error' && (!props.fallback || fallbackFailed.value) ? (
          <div class={cls(`${prefixCls}-error-placeholder`, props.classNames?.error)} style={props.styles?.error}>
            <span>图片加载失败</span>
          </div>
        ) : (
          <img
            src={displaySrc.value}
            alt={props.alt}
            class={cls(`${prefixCls}-img`, props.classNames?.img)}
            style={props.styles?.img}
            onLoad={onLoad}
            onError={onError}
            onClick={handleClick}
          />
        )}
        {canPreview.value && status.value === 'loaded' && maskInfo.value?.enabled && (
          <div
            class={cls(`${prefixCls}-mask`, props.classNames?.mask)}
            style={props.styles?.mask}
            onClick={handleClick}
          >
            {maskInfo.value.coverNode ?? (
              <span class={cls(`${prefixCls}-mask-info`, props.classNames?.maskInfo)} style={props.styles?.maskInfo}>
                <ZoomInOutlined class="hmfw-icon" /> <span>预览</span>
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
            classNames={props.classNames}
            styles={props.styles}
          />
        )}
      </div>
    )
  },
})
