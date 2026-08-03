import { describe, it, expect } from 'vitest'
import {
  ARROW_SIZE,
  DEFAULT_GAP_OFFSET,
  DEFAULT_GAP_RADIUS,
  calcPopoverPos,
  getGapOffset,
  getHoleRect,
  getRect,
  getTargetEl,
  isEditableTarget,
  isRenderable,
} from '../utils'

const VIEWPORT = { width: 1000, height: 800 }

/** 构造一个可控尺寸的假卡片元素 */
function fakePopover(width = 300, height = 200) {
  return { offsetWidth: width, offsetHeight: height } as HTMLElement
}

describe('getRect', () => {
  it('返回视口坐标，不叠加滚动量', () => {
    const el = {
      getBoundingClientRect: () => ({ top: 100, left: 50, width: 80, height: 40 }),
    } as unknown as HTMLElement

    // 模拟页面已滚动
    const originalScrollY = window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 500, configurable: true })
    Object.defineProperty(window, 'scrollX', { value: 300, configurable: true })

    expect(getRect(el)).toEqual({ top: 100, left: 50, width: 80, height: 40 })

    Object.defineProperty(window, 'scrollY', { value: originalScrollY, configurable: true })
  })

  it('无元素返回 null', () => {
    expect(getRect(null)).toBeNull()
  })
})

describe('getTargetEl', () => {
  it('支持 CSS 选择器', () => {
    const div = document.createElement('div')
    div.id = 'tour-target-test'
    document.body.appendChild(div)
    expect(getTargetEl('#tour-target-test')).toBe(div)
    div.remove()
  })

  it('支持 DOM 节点与返回节点的函数', () => {
    const div = document.createElement('div')
    expect(getTargetEl(div)).toBe(div)
    expect(getTargetEl(() => div)).toBe(div)
  })

  it('解包 Vue 组件实例的 $el', () => {
    const div = document.createElement('div')
    const instance = { $el: div } as any
    expect(getTargetEl(() => instance)).toBe(div)
  })

  it('无法测量的节点返回 null，不抛异常', () => {
    // 注释节点没有 getBoundingClientRect
    const comment = document.createComment('x') as any
    expect(() => getTargetEl(() => ({ $el: comment }))).not.toThrow()
    expect(getTargetEl(() => ({ $el: comment }))).toBeNull()
  })

  it('空 target 返回 null', () => {
    expect(getTargetEl(undefined)).toBeNull()
    expect(getTargetEl(() => null)).toBeNull()
  })
})

describe('getGapOffset', () => {
  it('默认值为 6，对齐 AntD', () => {
    expect(getGapOffset(undefined, 0)).toBe(DEFAULT_GAP_OFFSET)
    expect(DEFAULT_GAP_OFFSET).toBe(6)
  })

  it('number 形态两轴共用', () => {
    expect(getGapOffset({ offset: 10 }, 0)).toBe(10)
    expect(getGapOffset({ offset: 10 }, 1)).toBe(10)
  })

  it('[x, y] 形态按轴取值', () => {
    expect(getGapOffset({ offset: [4, 12] }, 0)).toBe(4)
    expect(getGapOffset({ offset: [4, 12] }, 1)).toBe(12)
  })

  it('非法值回退默认', () => {
    expect(getGapOffset({ offset: NaN }, 0)).toBe(DEFAULT_GAP_OFFSET)
  })
})

describe('getHoleRect', () => {
  const target = { top: 100, left: 200, width: 80, height: 40 }

  it('按默认 gap 外扩目标矩形', () => {
    expect(getHoleRect(target, undefined)).toEqual({
      top: 100 - 6,
      left: 200 - 6,
      width: 80 + 12,
      height: 40 + 12,
      radius: DEFAULT_GAP_RADIUS,
    })
  })

  it('radius 默认 2，对齐 AntD', () => {
    expect(DEFAULT_GAP_RADIUS).toBe(2)
    expect(getHoleRect(target, {})?.radius).toBe(2)
  })

  it('offset 支持双轴独立外扩', () => {
    const hole = getHoleRect(target, { offset: [10, 2] })!
    expect(hole.left).toBe(190)
    expect(hole.top).toBe(98)
    expect(hole.width).toBe(100)
    expect(hole.height).toBe(44)
  })

  it('无目标返回 null', () => {
    expect(getHoleRect(null, undefined)).toBeNull()
  })
})

describe('calcPopoverPos', () => {
  const hole = { top: 300, left: 400, width: 100, height: 50, radius: 2 }

  it('无目标时居中且不显示箭头', () => {
    const pos = calcPopoverPos(null, fakePopover(300, 200), 'bottom', VIEWPORT)
    expect(pos.center).toBe(true)
    expect(pos.arrowSide).toBeNull()
    expect(pos.left).toBe((1000 - 300) / 2)
    expect(pos.top).toBe((800 - 200) / 2)
  })

  it('placement=center 同样居中', () => {
    const pos = calcPopoverPos(hole, fakePopover(), 'center', VIEWPORT)
    expect(pos.center).toBe(true)
    expect(pos.arrowSide).toBeNull()
  })

  it('bottom：卡片在高亮区域下方，箭头贴上边', () => {
    const pos = calcPopoverPos(hole, fakePopover(300, 200), 'bottom', VIEWPORT)
    expect(pos.top).toBe(hole.top + hole.height + ARROW_SIZE)
    expect(pos.left).toBe(hole.left + hole.width / 2 - 150)
    expect(pos.arrowSide).toBe('top')
  })

  it('top：卡片在上方，箭头贴下边', () => {
    const pos = calcPopoverPos(hole, fakePopover(300, 200), 'top', VIEWPORT)
    expect(pos.top).toBe(hole.top - 200 - ARROW_SIZE)
    expect(pos.arrowSide).toBe('bottom')
  })

  it('right / left 主轴与箭头方向正确', () => {
    const right = calcPopoverPos(hole, fakePopover(300, 200), 'right', VIEWPORT)
    expect(right.left).toBe(hole.left + hole.width + ARROW_SIZE)
    expect(right.arrowSide).toBe('left')

    const left = calcPopoverPos(hole, fakePopover(300, 200), 'left', VIEWPORT)
    expect(left.left).toBe(hole.left - 300 - ARROW_SIZE)
    expect(left.arrowSide).toBe('right')
  })

  it('bottomLeft / bottomRight 交叉轴对齐高亮边缘', () => {
    const bl = calcPopoverPos(hole, fakePopover(300, 200), 'bottomLeft', VIEWPORT)
    expect(bl.left).toBe(hole.left)

    const br = calcPopoverPos(hole, fakePopover(300, 200), 'bottomRight', VIEWPORT)
    expect(br.left).toBe(hole.left + hole.width - 300)
  })

  it('主轴空间不足时翻转到对侧', () => {
    // 目标贴近视口底部，bottom 放不下 → 翻转到 top
    const bottomHole = { top: 700, left: 400, width: 100, height: 50, radius: 2 }
    const pos = calcPopoverPos(bottomHole, fakePopover(300, 200), 'bottom', VIEWPORT)
    expect(pos.top).toBe(bottomHole.top - 200 - ARROW_SIZE)
    expect(pos.arrowSide).toBe('bottom')
  })

  it('交叉轴超出视口时钳制卡片位置', () => {
    // 目标贴左边缘，卡片居中会溢出视口左侧
    const edgeHole = { top: 300, left: 0, width: 40, height: 40, radius: 2 }
    const pos = calcPopoverPos(edgeHole, fakePopover(300, 200), 'bottom', VIEWPORT)
    expect(pos.left).toBeGreaterThanOrEqual(0)
  })

  it('bottomLeft 下箭头指向目标中心（卡片未被钳制）', () => {
    const pos = calcPopoverPos(hole, fakePopover(300, 200), 'bottomLeft', VIEWPORT)
    const targetCenter = hole.left + hole.width / 2
    expect(pos.arrowOffset).toBeCloseTo(targetCenter - pos.left, 1)
  })

  it('卡片被钳到视口边界时，箭头偏移限制在卡片内并避开圆角', () => {
    // 目标贴视口右侧，卡片被钳制，箭头无法完全对齐目标中心
    const rightHole = { top: 300, left: 960, width: 40, height: 40, radius: 2 }
    const pos = calcPopoverPos(rightHole, fakePopover(300, 200), 'bottom', VIEWPORT)
    expect(pos.arrowOffset).toBeGreaterThanOrEqual(ARROW_SIZE * 2)
    expect(pos.arrowOffset).toBeLessThanOrEqual(300 - ARROW_SIZE * 2)
    // 钳到上界
    expect(pos.arrowOffset).toBe(300 - ARROW_SIZE * 2)
  })

  it('目标中心落在卡片圆角区内时，箭头偏移被钳到最小内缩值', () => {
    const edgeHole = { top: 300, left: 0, width: 40, height: 40, radius: 2 }
    const pos = calcPopoverPos(edgeHole, fakePopover(300, 200), 'bottom', VIEWPORT)
    // 目标中心距卡片左边仅 12px < ARROW_SIZE*2，钳到 16 避免压住圆角
    expect(pos.arrowOffset).toBe(ARROW_SIZE * 2)
  })

  it('arrowOffsetSelf 对齐卡片自身中心', () => {
    const pos = calcPopoverPos(hole, fakePopover(300, 200), 'bottom', VIEWPORT)
    expect(pos.arrowOffsetSelf).toBe(150)
  })
})

describe('isEditableTarget', () => {
  it('识别输入类元素', () => {
    for (const tag of ['INPUT', 'TEXTAREA', 'SELECT']) {
      const el = document.createElement(tag)
      expect(isEditableTarget({ target: el } as unknown as KeyboardEvent)).toBe(true)
    }
  })

  it('识别 contenteditable', () => {
    const el = document.createElement('div')
    el.contentEditable = 'true'
    // jsdom 下 isContentEditable 可能不联动，直接断言属性驱动的分支
    Object.defineProperty(el, 'isContentEditable', { value: true })
    expect(isEditableTarget({ target: el } as unknown as KeyboardEvent)).toBe(true)
  })

  it('普通元素不算可编辑', () => {
    const el = document.createElement('div')
    expect(isEditableTarget({ target: el } as unknown as KeyboardEvent)).toBe(false)
  })
})

describe('isRenderable', () => {
  it('0 与空字符串视为可渲染', () => {
    expect(isRenderable(0)).toBe(true)
    expect(isRenderable('')).toBe(true)
  })

  it('null / undefined 不可渲染', () => {
    expect(isRenderable(null)).toBe(false)
    expect(isRenderable(undefined)).toBe(false)
  })
})
