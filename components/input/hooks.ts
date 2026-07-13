import { ref, computed, watch, type Ref } from 'vue'
import { useConfig } from '../config-provider'
import { cls } from '../_utils'
import type { InputSize, InputStatus, AllowClearConfig } from './types'

// ─── 受控 / 非受控值 ─────────────────────────────────────────────────────────

interface MergedValueProps {
  value?: string
  defaultValue?: string
}

/**
 * 统一受控 / 非受控值。
 * - 未传 `value` 时以 `innerValue` 为准（非受控），初始值取 `defaultValue`。
 * - 传入 `value` 时同步到 `innerValue`（受控优先）。
 */
export function useMergedValue(props: MergedValueProps) {
  const innerValue = ref(props.value ?? props.defaultValue ?? '')

  watch(
    () => props.value,
    (v) => {
      // 受控模式下（value 显式传入）跟随父值；非受控（undefined）时保留内部状态
      if (v !== undefined) innerValue.value = v
    },
  )

  return innerValue
}

// ─── focus / blur 暴露 ───────────────────────────────────────────────────────

export interface FocusOptions {
  preventScroll?: boolean
  cursor?: 'start' | 'end' | 'all'
}

type FocusableElement = HTMLInputElement | HTMLTextAreaElement

/**
 * 生成可 `expose` 的 focus/blur 方法，统一处理光标定位，避免四个组件各写一遍。
 */
export function useFocusExpose(elRef: Ref<FocusableElement | undefined>) {
  const focus = (options?: FocusOptions) => {
    const el = elRef.value
    if (!el) return
    el.focus(options)
    if (!options?.cursor) return
    const len = el.value.length
    if (options.cursor === 'start') el.setSelectionRange(0, 0)
    else if (options.cursor === 'end') el.setSelectionRange(len, len)
    else if (options.cursor === 'all') el.setSelectionRange(0, len)
  }

  const blur = () => elRef.value?.blur()

  return { focus, blur }
}

// ─── 尺寸合并 ────────────────────────────────────────────────────────────────

/** 组件 size 优先，其次跟随 ConfigProvider 的 componentSize。 */
export function useMergedSize(size: Ref<InputSize | undefined>) {
  const config = useConfig()
  return computed(() => size.value ?? config.value.componentSize)
}

// ─── affix-wrapper 类名 ──────────────────────────────────────────────────────

interface AffixWrapperState {
  disabled?: boolean
  status?: InputStatus
}

/**
 * 生成 affix-wrapper 的类名（disabled / 尺寸 / 状态五个修饰类），
 * Input / InputPassword / InputSearch 共用，避免三处重复。
 * @param extra 额外固定类名（如 `-password` / `-search`），会拼在 `-affix-wrapper` 之后。
 */
export function useAffixWrapperCls(
  prefixCls: string,
  state: AffixWrapperState,
  mergedSize: Ref<InputSize>,
  ...extra: string[]
) {
  return computed(() =>
    cls(`${prefixCls}-affix-wrapper`, ...extra, {
      [`${prefixCls}-affix-wrapper-disabled`]: state.disabled,
      [`${prefixCls}-affix-wrapper-lg`]: mergedSize.value === 'large',
      [`${prefixCls}-affix-wrapper-sm`]: mergedSize.value === 'small',
      [`${prefixCls}-affix-wrapper-status-error`]: state.status === 'error',
      [`${prefixCls}-affix-wrapper-status-warning`]: state.status === 'warning',
    }),
  )
}

// ─── allowClear 配置 ─────────────────────────────────────────────────────────

/** 归一化 `allowClear`（boolean | 对象）为统一配置对象。 */
export function useAllowClear(allowClear: Ref<boolean | AllowClearConfig | undefined>) {
  return computed<AllowClearConfig>(() => {
    const v = allowClear.value
    if (typeof v === 'object' && v !== null) return v
    return { disabled: false }
  })
}

// ─── 字符计数 ────────────────────────────────────────────────────────────────

/**
 * 默认按「字素」计数：`[...str]` 会正确切分 emoji / 代理对，
 * 避免 `.length` 把单个 emoji 算成 2。
 */
export function defaultCountStrategy(text: string): number {
  return [...text].length
}
