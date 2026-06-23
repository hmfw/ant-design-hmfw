import { describe, it, expect } from 'vitest'
import { computePosition } from '../computePosition'
import type { Rect } from '../types'

// 触发器：左 100 / 上 100 / 宽 80 / 高 30 → 中心 (140, 115)
const trigger: Rect = { left: 100, top: 100, width: 80, height: 30 }
const popup: Rect = { left: 0, top: 0, width: 120, height: 60 }

// 固定视口与滚动，避免依赖 jsdom 默认值
const base = { scrollX: 0, scrollY: 0, viewportWidth: 1000, viewportHeight: 800, gap: 4 }

describe('computePosition', () => {
  it('bottomLeft：弹层左缘对齐触发器左缘，位于下方', () => {
    const r = computePosition(trigger, popup, 'bottomLeft', base)
    expect(r.placement).toBe('bottomLeft')
    expect(r.left).toBe(100) // 对齐左缘
    expect(r.top).toBe(100 + 30 + 4) // 触发器底 + gap
  })

  it('bottomRight：弹层右缘对齐触发器右缘', () => {
    const r = computePosition(trigger, popup, 'bottomRight', base)
    expect(r.left).toBe(100 + 80 - 120) // tRight - popupWidth
  })

  it('bottom：水平居中', () => {
    const r = computePosition(trigger, popup, 'bottom', base)
    expect(r.left).toBe(140 - 120 / 2) // centerX - popupWidth/2
  })

  it('topLeft：位于上方', () => {
    const r = computePosition(trigger, popup, 'topLeft', base)
    expect(r.top).toBe(100 - 60 - 4) // tTop - popupHeight - gap
    expect(r.left).toBe(100)
  })

  it('left：位于左侧并垂直居中', () => {
    // 触发器靠右，避免左侧溢出触发翻转
    const t: Rect = { left: 500, top: 100, width: 80, height: 30 }
    const r = computePosition(t, popup, 'left', base)
    expect(r.left).toBe(500 - 120 - 4)
    expect(r.top).toBe(115 - 60 / 2) // centerY - popupHeight/2
  })

  it('right：位于右侧', () => {
    const r = computePosition(trigger, popup, 'right', base)
    expect(r.left).toBe(100 + 80 + 4)
  })

  it('left 溢出左缘时翻转到 right', () => {
    const r = computePosition(trigger, popup, 'left', base)
    expect(r.placement).toBe('right')
    expect(r.left).toBe(100 + 80 + 4)
  })

  it('autoAdjustOverflow：下方放不下时翻到上方', () => {
    // 触发器贴近视口底部，下方 60+4 放不下，上方放得下
    const t: Rect = { left: 100, top: 760, width: 80, height: 30 }
    const r = computePosition(t, popup, 'bottomLeft', base)
    expect(r.placement).toBe('topLeft')
    expect(r.top).toBe(760 - 60 - 4)
  })

  it('autoAdjustOverflow：上方放不下时翻到下方', () => {
    const t: Rect = { left: 100, top: 10, width: 80, height: 30 }
    const r = computePosition(t, popup, 'topLeft', base)
    expect(r.placement).toBe('bottomLeft')
  })

  it('两侧都放不下时保持原方位（不来回跳）', () => {
    const tallPopup: Rect = { left: 0, top: 0, width: 120, height: 700 }
    const t: Rect = { left: 100, top: 400, width: 80, height: 30 }
    const r = computePosition(t, tallPopup, 'bottomLeft', base)
    expect(r.placement).toBe('bottomLeft') // 翻转后仍溢出 → 不翻
  })

  it('autoAdjustOverflow=false 时即使溢出也不翻转', () => {
    const t: Rect = { left: 100, top: 760, width: 80, height: 30 }
    const r = computePosition(t, popup, 'bottomLeft', { ...base, autoAdjustOverflow: false })
    expect(r.placement).toBe('bottomLeft')
  })

  it('考虑页面滚动量', () => {
    const r = computePosition(trigger, popup, 'bottomLeft', { ...base, scrollX: 50, scrollY: 200 })
    expect(r.left).toBe(100 + 50)
    expect(r.top).toBe(100 + 30 + 4 + 200)
  })
})
