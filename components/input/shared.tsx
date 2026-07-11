import type { VNode } from 'vue'
import type { InputAffix } from './types'

/** 渲染前后缀：函数（图标组件）走 Icon 组件，其余（字符串 / VNode）直接渲染 */
export function renderAffix(affix: InputAffix | undefined): VNode | string | null {
  if (affix == null) return null
  if (typeof affix === 'function') {
    const AffixComp = affix
    return <AffixComp class="hmfw-icon" />
  }
  return affix
}
