import { h, type VNode } from 'vue'
import type { IconComponent } from '@hmfw/icons'
import type { TooltipProps } from '../tooltip/types'

/** 图标 prop 可以是图标组件，也可以是原始字符串/字形。 */
export type IconLike = IconComponent | string

/** 渲染 icon prop：可为图标组件或原始字符串/字形，slot 优先。 */
export function renderIcon(icon: IconLike | undefined, fallbackSlot?: () => VNode[] | undefined) {
  const slotNode = fallbackSlot?.()
  if (slotNode && slotNode.length) return slotNode
  if (!icon) return undefined
  if (typeof icon === 'string') return icon
  const IconComp = icon as IconComponent
  return h(IconComp, { class: 'hmfw-icon' })
}

/** 归一化 tooltip prop：string → { title }，object 原样透传。 */
export function normalizeTooltip(tooltip: string | TooltipProps | undefined): TooltipProps | undefined {
  if (!tooltip) return undefined
  if (typeof tooltip === 'string') return { title: tooltip }
  return tooltip
}
