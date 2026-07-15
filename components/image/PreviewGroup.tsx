import { defineComponent, ref, computed, provide, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import type { PreviewGroupProps, PreviewConfig, ImgInfo } from './types'
import { normalizePreview } from './utils'
import { PREVIEW_GROUP_KEY, type PreviewGroupContext } from './context'
import { ImagePreview } from './ImagePreview'

// ---- PreviewGroup ----
const previewGroupProps = {
  preview: { type: [Boolean, Object] as PropType<boolean | PreviewConfig>, default: true },
  items: { type: Array as PropType<(string | ImgInfo)[]>, default: undefined },
  current: { type: Number, default: undefined },
  onChange: { type: Function as PropType<(current: number, prevCurrent: number) => void>, default: undefined },
} satisfies Record<keyof PreviewGroupProps, any>

export const PreviewGroup = defineComponent({
  name: 'PreviewGroup',
  props: previewGroupProps,
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('image')
    // 注册的子 Image（动态）
    const registry = ref<Array<() => ImgInfo>>([])
    const selfCurrent = ref(0)
    const selfVisible = ref(false)

    const cfg = computed<PreviewConfig | null>(() => normalizePreview(props.preview))

    const isControlled = computed(() => cfg.value?.open)
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
            classNames={undefined}
            styles={undefined}
          />
        )}
      </>
    )
  },
})
