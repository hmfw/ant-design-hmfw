import type { Placement, Rect, ComputeOptions, ComputeResult } from './types'

/** 溢出时翻转到对侧方位的映射表（与 Tooltip 的 FLIP_PLACEMENT 一致）。 */
const FLIP_PLACEMENT: Record<Placement, Placement> = {
  top: 'bottom',
  topLeft: 'bottomLeft',
  topRight: 'bottomRight',
  bottom: 'top',
  bottomLeft: 'topLeft',
  bottomRight: 'topRight',
  left: 'right',
  leftTop: 'rightTop',
  leftBottom: 'rightBottom',
  right: 'left',
  rightTop: 'leftTop',
  rightBottom: 'leftBottom',
}

/** 针对单一方位计算弹层左上角的文档坐标（不做翻转）。 */
function placeAt(
  placement: Placement,
  trigger: Rect,
  popup: Rect,
  gap: number,
  scrollX: number,
  scrollY: number,
  arrowPointAtCenter: boolean,
  arrowTipOffset: number,
): { top: number; left: number } {
  let top = 0
  let left = 0
  const centerX = trigger.left + trigger.width / 2 + scrollX
  const centerY = trigger.top + trigger.height / 2 + scrollY
  const tLeft = trigger.left + scrollX
  const tRight = trigger.left + trigger.width + scrollX
  const tTop = trigger.top + scrollY
  const tBottom = trigger.top + trigger.height + scrollY

  if (placement.startsWith('top') || placement.startsWith('bottom')) {
    top = placement.startsWith('top') ? tTop - popup.height - gap : tBottom + gap
    if (placement === 'top' || placement === 'bottom') {
      left = centerX - popup.width / 2
    } else if (placement.endsWith('Left')) {
      // pointAtCenter 时让箭头尖端（距弹层左缘 arrowTipOffset）对齐触发器中心
      left = arrowPointAtCenter ? centerX - arrowTipOffset : tLeft
    } else {
      // *Right
      left = arrowPointAtCenter ? centerX - popup.width + arrowTipOffset : tRight - popup.width
    }
  } else if (placement.startsWith('left')) {
    left = tLeft - popup.width - gap
    if (placement === 'left') top = centerY - popup.height / 2
    else if (placement === 'leftTop') top = tTop
    else top = tBottom - popup.height
  } else {
    // right*
    left = tRight + gap
    if (placement === 'right') top = centerY - popup.height / 2
    else if (placement === 'rightTop') top = tTop
    else top = tBottom - popup.height
  }
  return { top, left }
}

/** 判断给定坐标的弹层在主轴方向上是否溢出视口。 */
function overflowsOnAxis(
  placement: Placement,
  pos: { top: number; left: number },
  popup: Rect,
  scrollX: number,
  scrollY: number,
  vw: number,
  vh: number,
): boolean {
  if (placement.startsWith('top')) return pos.top - scrollY < 0
  if (placement.startsWith('bottom')) return pos.top - scrollY + popup.height > vh
  if (placement.startsWith('left')) return pos.left - scrollX < 0
  return pos.left - scrollX + popup.width > vw // right*
}

/**
 * 计算弹层位置。纯函数，不触碰 DOM，便于单测。
 *
 * @param trigger 触发器矩形（getBoundingClientRect 结果）
 * @param popup 弹层矩形（用于宽高，top/left 可为 0）
 * @param placement 期望方位
 * @param options 间距、是否翻转、滚动量、视口尺寸
 * @returns 文档坐标与翻转后实际方位
 */
export function computePosition(
  trigger: Rect,
  popup: Rect,
  placement: Placement,
  options: ComputeOptions = {},
): ComputeResult {
  const gap = options.gap ?? 4
  const autoAdjustOverflow = options.autoAdjustOverflow ?? true
  const arrowPointAtCenter = options.arrowPointAtCenter ?? false
  const arrowTipOffset = options.arrowTipOffset ?? 20
  const scrollX = options.scrollX ?? (typeof window !== 'undefined' ? window.scrollX : 0)
  const scrollY = options.scrollY ?? (typeof window !== 'undefined' ? window.scrollY : 0)
  const vw = options.viewportWidth ?? (typeof window !== 'undefined' ? window.innerWidth : 0)
  const vh = options.viewportHeight ?? (typeof window !== 'undefined' ? window.innerHeight : 0)

  let active = placement
  let pos = placeAt(active, trigger, popup, gap, scrollX, scrollY, arrowPointAtCenter, arrowTipOffset)

  if (autoAdjustOverflow && overflowsOnAxis(active, pos, popup, scrollX, scrollY, vw, vh)) {
    const flipped = FLIP_PLACEMENT[active]
    const flippedPos = placeAt(flipped, trigger, popup, gap, scrollX, scrollY, arrowPointAtCenter, arrowTipOffset)
    // 仅当翻转后不再溢出时才采用，避免两侧都放不下时来回跳。
    if (!overflowsOnAxis(flipped, flippedPos, popup, scrollX, scrollY, vw, vh)) {
      active = flipped
      pos = flippedPos
    }
  }

  return { top: pos.top, left: pos.left, placement: active }
}
