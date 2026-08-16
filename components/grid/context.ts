import type { ComputedRef } from 'vue'

// Row 通过 provide 向 Col 传递 gutter/wrap 的注入契约
export interface RowContext {
  gutter: ComputedRef<[number | string, number | string]>
  wrap: ComputedRef<boolean>
}

export const RowContextKey = Symbol('RowContext')
