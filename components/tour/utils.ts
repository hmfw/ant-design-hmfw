import { isVNode, type VNode } from 'vue'
import { renderContent as renderContentUtil } from '../_utils/renderContent'
import type { TourGap, TourPlacement, TourStep } from './types'
import { omit } from '../_utils/function'
import type { TourButtonProps } from './types'

/** 高亮区域外扩的默认值，对齐 AntD `gap.offset` 默认 6 */
export const DEFAULT_GAP_OFFSET = 6
/** 高亮区域圆角默认值，对齐 AntD `gap.radius` 默认 2 */
export const DEFAULT_GAP_RADIUS = 2
/** 箭头视觉尺寸（等边三角外接边长的一半），同时作为卡片与高亮区域的间距 */
export const ARROW_SIZE = 8
/** 卡片贴边时与视口保留的最小边距 */
export const VIEWPORT_PADDING = 8

/** 视口坐标系下的矩形。所有位置计算统一使用视口坐标 —— 遮罩与卡片均挂在 `position: fixed` 容器内。 */
export interface Rect {
  top: number
  left: number
  width: number
  height: number
}

/**
 * 解析步骤的 `target` 为真实 DOM 节点。
 *
 * Vue 中 `ref` 挂在组件上拿到的是组件实例而非 DOM 节点，需通过 `$el` 解包；
 * 解包后仍需校验 `getBoundingClientRect` 可用（`$el` 也可能是注释节点或文本节点）。
 */
export function getTargetEl(target: TourStep['target']): HTMLElement | null {
  if (!target) return null

  const raw = typeof target === 'function' ? target() : target
  if (!raw) return null

  if (typeof raw === 'string') return document.querySelector<HTMLElement>(raw)

  // 组件实例 → 解包根元素
  const el = (raw as any).$el ?? raw

  // 注释/文本节点等无法测量的节点一律视为无目标，避免异常打断定位流程
  return el && typeof (el as HTMLElement).getBoundingClientRect === 'function' ? (el as HTMLElement) : null
}

/**
 * 读取元素的视口坐标矩形。
 *
 * 注意：**不叠加 `window.scrollY/scrollX`**。消费方（遮罩 SVG、引导卡片）都位于
 * `position: fixed` 的根容器内，属视口坐标系；叠加滚动量会导致页面滚动后整体错位。
 */
export function getRect(el: HTMLElement | null): Rect | null {
  if (!el) return null
  const r = el.getBoundingClientRect()
  return { top: r.top, left: r.left, width: r.width, height: r.height }
}

/** 取 `gap.offset` 在指定轴上的值（0 = 水平，1 = 垂直），兼容 `number` 与 `[x, y]` 两种形态 */
export function getGapOffset(gap: TourGap | undefined, index: 0 | 1): number {
  const offset = gap?.offset
  const value = Array.isArray(offset) ? offset[index] : offset
  return typeof value === 'number' && !Number.isNaN(value) ? value : DEFAULT_GAP_OFFSET
}

/**
 * 按 `gap` 外扩目标矩形，得到高亮区域。
 * 对齐 AntD：`offset` 控制高亮区域相对目标元素的外扩边距，`radius` 控制高亮框圆角。
 */
export function getHoleRect(targetRect: Rect | null, gap: TourGap | undefined): (Rect & { radius: number }) | null {
  if (!targetRect) return null
  const offsetX = getGapOffset(gap, 0)
  const offsetY = getGapOffset(gap, 1)
  const radius = typeof gap?.radius === 'number' && !Number.isNaN(gap.radius) ? gap.radius : DEFAULT_GAP_RADIUS

  return {
    left: targetRect.left - offsetX,
    top: targetRect.top - offsetY,
    width: targetRect.width + offsetX * 2,
    height: targetRect.height + offsetY * 2,
    radius,
  }
}

/** 卡片定位结果。`center` 表示走居中兜底、不显示箭头。 */
export interface PopoverPosition {
  top: number
  left: number
  /** 箭头贴靠的卡片边 —— 与最终生效的 placement 主轴相反 */
  arrowSide: 'top' | 'bottom' | 'left' | 'right' | null
  /** 箭头沿该边的偏移量（左/上起算），指向目标中心 —— 对应 `pointAtCenter: true` */
  arrowOffset: number
  /** 箭头沿该边的偏移量，对齐卡片自身中心 —— 对应 `pointAtCenter: false` */
  arrowOffsetSelf: number
  center: boolean
}

/**
 * 计算引导卡片位置。
 *
 * 定位基准是**高亮区域**（已含 `gap.offset` 外扩）而非目标元素本身，
 * 卡片再沿主轴让出 `ARROW_SIZE` 供箭头占位，这样箭头不会压在高亮描边上。
 *
 * 主轴空间不足时翻转到对侧；交叉轴超出视口时做钳制，并同步修正箭头偏移，
 * 保证钳制后箭头依然指向目标中心。
 */
export function calcPopoverPos(
  holeRect: (Rect & { radius: number }) | null,
  popoverEl: HTMLElement | null,
  placement: TourPlacement = 'bottom',
  viewport: { width: number; height: number },
): PopoverPosition {
  const pw = popoverEl?.offsetWidth || 300
  const ph = popoverEl?.offsetHeight || 200

  // 无目标或显式 center：居中展示，不显示箭头（对齐 AntD `target={null}` 行为）
  if (!holeRect || placement === 'center') {
    return {
      top: Math.max(VIEWPORT_PADDING, (viewport.height - ph) / 2),
      left: Math.max(VIEWPORT_PADDING, (viewport.width - pw) / 2),
      arrowSide: null,
      arrowOffset: 0,
      arrowOffsetSelf: 0,
      center: true,
    }
  }

  const cx = holeRect.left + holeRect.width / 2
  const cy = holeRect.top + holeRect.height / 2

  // 主轴方向与可用空间
  let axis: 'top' | 'bottom' | 'left' | 'right' = 'bottom'
  if (placement.startsWith('top')) axis = 'top'
  else if (placement.startsWith('left')) axis = 'left'
  else if (placement.startsWith('right')) axis = 'right'

  const spaceNeeded = ARROW_SIZE
  const fits = {
    bottom: holeRect.top + holeRect.height + spaceNeeded + ph <= viewport.height - VIEWPORT_PADDING,
    top: holeRect.top - spaceNeeded - ph >= VIEWPORT_PADDING,
    right: holeRect.left + holeRect.width + spaceNeeded + pw <= viewport.width - VIEWPORT_PADDING,
    left: holeRect.left - spaceNeeded - pw >= VIEWPORT_PADDING,
  }
  const opposite = { bottom: 'top', top: 'bottom', left: 'right', right: 'left' } as const

  // 主轴空间不足且对侧充足 → 翻转
  if (!fits[axis] && fits[opposite[axis]]) axis = opposite[axis]

  let top: number
  let left: number

  if (axis === 'bottom' || axis === 'top') {
    top = axis === 'bottom' ? holeRect.top + holeRect.height + spaceNeeded : holeRect.top - ph - spaceNeeded
    // 交叉轴：Left/Right 后缀对齐高亮区域边缘，无后缀居中
    left = placement.endsWith('Left')
      ? holeRect.left
      : placement.endsWith('Right')
        ? holeRect.left + holeRect.width - pw
        : cx - pw / 2
    left = clamp(left, VIEWPORT_PADDING, Math.max(VIEWPORT_PADDING, viewport.width - pw - VIEWPORT_PADDING))
  } else {
    left = axis === 'right' ? holeRect.left + holeRect.width + spaceNeeded : holeRect.left - pw - spaceNeeded
    top = placement.endsWith('Top')
      ? holeRect.top
      : placement.endsWith('Bottom')
        ? holeRect.top + holeRect.height - ph
        : cy - ph / 2
    top = clamp(top, VIEWPORT_PADDING, Math.max(VIEWPORT_PADDING, viewport.height - ph - VIEWPORT_PADDING))
  }

  // 箭头贴靠卡片朝向目标的那一边。
  // 偏移量以**钳制后**的卡片位置为基准重新计算：卡片被视口挤动后，箭头仍需指向目标中心。
  const arrowSide = opposite[axis]
  const isVerticalAxis = axis === 'bottom' || axis === 'top'
  const arrowSpan = isVerticalAxis ? pw : ph
  const arrowMin = ARROW_SIZE * 2
  const arrowMax = Math.max(arrowMin, arrowSpan - ARROW_SIZE * 2)

  const arrowOffset = isVerticalAxis ? clamp(cx - left, arrowMin, arrowMax) : clamp(cy - top, arrowMin, arrowMax)
  const arrowOffsetSelf = clamp(arrowSpan / 2, arrowMin, arrowMax)

  return { top, left, arrowSide, arrowOffset, arrowOffsetSelf, center: false }
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * 渲染文本 / VNode / 渲染函数三种内容形态
 * @deprecated 使用公共的 renderContent 工具
 */
export function renderContent(content: string | number | VNode | (() => VNode | string | number) | undefined | null) {
  const result = renderContentUtil(content)
  // Tour 组件特殊处理：将数字转为字符串（保持原有行为）
  if (typeof result === 'number') return String(result)
  return result
}

/**
 * 判断内容是否需要渲染对应容器节点。
 * 对齐 AntD `isReactRenderable`：`0` 与 `''` 属有效内容，仅 `undefined`/`null`/`false` 跳过。
 */
export function isRenderable(content: unknown): boolean {
  return content !== undefined && content !== null && content !== false
}

/** 剥离 children/onClick 后再透传给 Button，避免只读 children 属性透传到 DOM 触发告警 */
export function omitButtonProps(buttonProps?: TourButtonProps) {
  if (!buttonProps) return undefined
  return omit(buttonProps, ['children', 'onClick'])
}

/** 键盘事件是否来自可编辑元素 —— 输入时不应触发引导步骤切换（对齐 rc-tour） */
export function isEditableTarget(event: KeyboardEvent): boolean {
  const el = event.target as HTMLElement | null
  if (!el) return false
  const tagName = el.tagName
  return tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT' || el.isContentEditable === true
}

let maskIdSeed = 0
/** 生成稳定递增的遮罩 id —— 不用 `Math.random()`，避免 SSR 两端不一致与快照不稳定 */
export function genMaskId(prefixCls: string): string {
  maskIdSeed += 1
  return `${prefixCls}-mask-${maskIdSeed}`
}
