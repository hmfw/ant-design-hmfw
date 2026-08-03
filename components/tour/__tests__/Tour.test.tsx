import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { Tour } from '../Tour'
import type { TourStep } from '../types'

const steps: TourStep[] = [
  { title: 'Step 1', description: 'First step description' },
  { title: 'Step 2', description: 'Second step description' },
  { title: 'Step 3', description: 'Last step' },
]

describe('Tour', () => {
  // Tour 通过 Teleport 挂到 body，卸载后残留节点会污染后续用例的 document 查询
  beforeEach(() => {
    document.querySelectorAll('.hmfw-tour-root').forEach((el) => el.remove())
  })

  it('renders nothing when closed', () => {
    const wrapper = mount(Tour, {
      props: { open: false, steps },
      attachTo: document.body,
    })
    expect(document.querySelector('.hmfw-tour-popover')).toBeNull()
    wrapper.unmount()
  })

  it('renders popover when open', async () => {
    const wrapper = mount(Tour, {
      props: { open: true, steps },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tour-popover')).not.toBeNull()
    wrapper.unmount()
  })

  it('shows step title and description', async () => {
    const wrapper = mount(Tour, {
      props: { open: true, steps },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tour-title')?.textContent).toBe('Step 1')
    expect(document.querySelector('.hmfw-tour-description')?.textContent).toBe('First step description')
    wrapper.unmount()
  })

  it('advances to next step on next button click', async () => {
    const wrapper = mount(Tour, {
      props: { open: true, steps },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    const nextBtn = document.querySelector<HTMLButtonElement>('.hmfw-tour-next-btn')
    nextBtn?.click()
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tour-title')?.textContent).toBe('Step 2')
    wrapper.unmount()
  })

  it('shows prev button after first step', async () => {
    const wrapper = mount(Tour, {
      props: { open: true, steps, defaultCurrent: 1 },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tour-prev-btn')).not.toBeNull()
    wrapper.unmount()
  })

  it('emits close when close button clicked', async () => {
    const wrapper = mount(Tour, {
      props: { open: true, steps },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    document.querySelector<HTMLButtonElement>('.hmfw-tour-close')?.click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('close')).toBeTruthy()
    wrapper.unmount()
  })

  it('emits finish on last step next click', async () => {
    const wrapper = mount(Tour, {
      props: { open: true, steps, defaultCurrent: 2 },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    document.querySelector<HTMLButtonElement>('.hmfw-tour-next-btn')?.click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('finish')).toBeTruthy()
    wrapper.unmount()
  })

  it('shows indicators for each step', async () => {
    const wrapper = mount(Tour, {
      props: { open: true, steps },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelectorAll('.hmfw-tour-indicator').length).toBe(3)
    wrapper.unmount()
  })

  it('emits change when navigating', async () => {
    const wrapper = mount(Tour, {
      props: { open: true, steps },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    document.querySelector<HTMLButtonElement>('.hmfw-tour-next-btn')?.click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('change')?.[0]).toEqual([1])
    wrapper.unmount()
  })

  it('uses SVG close icon instead of Unicode character', async () => {
    const wrapper = mount(Tour, {
      props: { open: true, steps },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    const closeBtn = document.querySelector('.hmfw-tour-close')
    expect(closeBtn?.querySelector('svg')).not.toBeNull()
    expect(closeBtn?.textContent).not.toBe('✕')
    wrapper.unmount()
  })

  it('hides close button when closeIcon is false', async () => {
    const wrapper = mount(Tour, {
      props: { open: true, steps, closeIcon: false },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tour-close')).toBeNull()
    wrapper.unmount()
  })

  it('supports custom closeIcon', async () => {
    const customIcon = h('span', { class: 'custom-close' }, 'X')
    const wrapper = mount(Tour, {
      props: { open: true, steps, closeIcon: customIcon },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tour-close .custom-close')).not.toBeNull()
    wrapper.unmount()
  })

  it('supports VNode title', async () => {
    const stepsWithVNode: TourStep[] = [{ title: h('strong', {}, 'Bold Title'), description: 'Desc' }]
    const wrapper = mount(Tour, {
      props: { open: true, steps: stepsWithVNode },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tour-title strong')?.textContent).toBe('Bold Title')
    wrapper.unmount()
  })

  it('supports render function title', async () => {
    const stepsWithFn: TourStep[] = [{ title: () => h('em', {}, 'Italic Title'), description: 'Desc' }]
    const wrapper = mount(Tour, {
      props: { open: true, steps: stepsWithFn },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tour-title em')?.textContent).toBe('Italic Title')
    wrapper.unmount()
  })

  it('supports primary type', async () => {
    const wrapper = mount(Tour, {
      props: { open: true, steps, type: 'primary' },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tour-popover-primary')).not.toBeNull()
    wrapper.unmount()
  })

  it('supports step-level type override', async () => {
    const stepsWithType: TourStep[] = [{ title: 'Title', description: 'Desc', type: 'primary' }]
    const wrapper = mount(Tour, {
      props: { open: true, steps: stepsWithType, type: 'default' },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tour-popover-primary')).not.toBeNull()
    wrapper.unmount()
  })

  it('hides mask when mask is false', async () => {
    const wrapper = mount(Tour, {
      props: { open: true, steps, mask: false },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tour-mask')).toBeNull()
    wrapper.unmount()
  })

  it('supports custom mask style', async () => {
    const wrapper = mount(Tour, {
      props: {
        open: true,
        steps,
        mask: { style: { backdropFilter: 'blur(4px)' }, color: 'rgba(255,0,0,0.3)' },
      },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    const mask = document.querySelector<HTMLElement>('.hmfw-tour-mask')
    expect(mask).not.toBeNull()
    wrapper.unmount()
  })

  it('supports custom zIndex', async () => {
    const wrapper = mount(Tour, {
      props: { open: true, steps, zIndex: 2000 },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    const root = document.querySelector<HTMLElement>('.hmfw-tour-root')
    expect(root?.style.zIndex).toBe('2000')
    wrapper.unmount()
  })

  it('supports custom indicator render', async () => {
    const indicatorsRender = (current: number, total: number) =>
      h('span', { class: 'custom-indicators' }, `${current + 1}/${total}`)
    const wrapper = mount(Tour, {
      props: { open: true, steps, indicatorsRender },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.custom-indicators')?.textContent).toBe('1/3')
    wrapper.unmount()
  })

  it('calls nextButtonProps onClick before advancing', async () => {
    const onClick = vi.fn()
    const stepsWithCb: TourStep[] = [{ title: 'Step 1', description: 'Desc', nextButtonProps: { onClick } }]
    const wrapper = mount(Tour, {
      props: { open: true, steps: stepsWithCb },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    document.querySelector<HTMLButtonElement>('.hmfw-tour-next-btn')?.click()
    await wrapper.vm.$nextTick()
    expect(onClick).toHaveBeenCalled()
    wrapper.unmount()
  })

  it('calls prevButtonProps onClick before going back', async () => {
    const onClick = vi.fn()
    const stepsWithCb: TourStep[] = [
      { title: 'Step 1', description: 'Desc' },
      { title: 'Step 2', description: 'Desc', prevButtonProps: { onClick } },
    ]
    const wrapper = mount(Tour, {
      props: { open: true, steps: stepsWithCb, defaultCurrent: 1 },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    document.querySelector<HTMLButtonElement>('.hmfw-tour-prev-btn')?.click()
    await wrapper.vm.$nextTick()
    expect(onClick).toHaveBeenCalled()
    wrapper.unmount()
  })

  it('hides indicators when total is 1', async () => {
    const wrapper = mount(Tour, {
      props: { open: true, steps: [{ title: 'Only step', description: 'Desc' }] },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tour-indicators')).toBeNull()
    wrapper.unmount()
  })

  it('supports custom button text', async () => {
    const stepsWithCustom: TourStep[] = [
      { title: 'Step 1', description: 'Desc', nextButtonProps: { children: '继续' } },
      { title: 'Step 2', description: 'Desc', prevButtonProps: { children: '返回' } },
    ]
    const wrapper = mount(Tour, {
      props: { open: true, steps: stepsWithCustom, defaultCurrent: 1 },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tour-prev-btn')?.textContent).toBe('返回')
    wrapper.unmount()
  })

  // ==================== 键盘导航 ====================

  describe('keyboard', () => {
    function press(key: string, target: EventTarget = window) {
      const event = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true })
      target.dispatchEvent(event)
      return event
    }

    it('ArrowRight 切换到下一步，ArrowLeft 回上一步', async () => {
      const wrapper = mount(Tour, { props: { steps }, attachTo: document.body })
      await wrapper.setProps({ open: true })
      await wrapper.vm.$nextTick()

      press('ArrowRight')
      await wrapper.vm.$nextTick()
      expect(document.querySelector('.hmfw-tour-title')?.textContent).toBe('Step 2')

      press('ArrowLeft')
      await wrapper.vm.$nextTick()
      expect(document.querySelector('.hmfw-tour-title')?.textContent).toBe('Step 1')
      wrapper.unmount()
    })

    it('Escape 关闭引导', async () => {
      const wrapper = mount(Tour, { props: { steps }, attachTo: document.body })
      await wrapper.setProps({ open: true })
      await wrapper.vm.$nextTick()

      press('Escape')
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted('close')).toBeTruthy()
      wrapper.unmount()
    })

    it('首步 ArrowLeft / 末步 ArrowRight 不越界', async () => {
      const wrapper = mount(Tour, { props: { steps }, attachTo: document.body })
      await wrapper.setProps({ open: true })
      await wrapper.vm.$nextTick()

      press('ArrowLeft')
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted('change')).toBeFalsy()
      wrapper.unmount()
    })

    it('输入框内的方向键不切换步骤', async () => {
      const input = document.createElement('input')
      document.body.appendChild(input)
      const wrapper = mount(Tour, { props: { steps }, attachTo: document.body })
      await wrapper.setProps({ open: true })
      await wrapper.vm.$nextTick()

      press('ArrowRight', input)
      await wrapper.vm.$nextTick()
      expect(document.querySelector('.hmfw-tour-title')?.textContent).toBe('Step 1')
      input.remove()
      wrapper.unmount()
    })

    it('keyboard=false 时不响应键盘', async () => {
      const wrapper = mount(Tour, { props: { steps, keyboard: false }, attachTo: document.body })
      await wrapper.setProps({ open: true })
      await wrapper.vm.$nextTick()

      press('ArrowRight')
      await wrapper.vm.$nextTick()
      expect(document.querySelector('.hmfw-tour-title')?.textContent).toBe('Step 1')
      wrapper.unmount()
    })

    it('运行时切换 keyboard 立即生效', async () => {
      const wrapper = mount(Tour, { props: { steps, keyboard: false }, attachTo: document.body })
      await wrapper.setProps({ open: true })
      await wrapper.vm.$nextTick()

      await wrapper.setProps({ keyboard: true })
      await wrapper.vm.$nextTick()
      press('ArrowRight')
      await wrapper.vm.$nextTick()
      expect(document.querySelector('.hmfw-tour-title')?.textContent).toBe('Step 2')
      wrapper.unmount()
    })

    it('关闭后不再响应键盘', async () => {
      const wrapper = mount(Tour, { props: { steps }, attachTo: document.body })
      await wrapper.setProps({ open: true })
      await wrapper.vm.$nextTick()
      await wrapper.setProps({ open: false })
      await wrapper.vm.$nextTick()

      press('ArrowRight')
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted('change')).toBeFalsy()
      wrapper.unmount()
    })
  })

  // ==================== 无 target 居中 ====================

  it('无 target 时居中展示且不显示箭头', async () => {
    const wrapper = mount(Tour, { props: { open: true, steps }, attachTo: document.body })
    await wrapper.vm.$nextTick()
    await new Promise((r) => setTimeout(r, 30))
    expect(document.querySelector('.hmfw-tour-popover-center')).not.toBeNull()
    expect(document.querySelector('.hmfw-tour-arrow')).toBeNull()
    wrapper.unmount()
  })

  it('placement=center 时居中', async () => {
    const target = document.createElement('div')
    document.body.appendChild(target)
    const wrapper = mount(Tour, {
      props: { open: true, steps: [{ title: 'T', description: 'D', target: () => target }], placement: 'center' },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    await new Promise((r) => setTimeout(r, 30))
    expect(document.querySelector('.hmfw-tour-popover-center')).not.toBeNull()
    target.remove()
    wrapper.unmount()
  })

  // ==================== target 各形态 ====================

  describe('target', () => {
    it('支持 CSS 选择器', async () => {
      const target = document.createElement('div')
      target.id = 'sel-target'
      document.body.appendChild(target)
      const wrapper = mount(Tour, {
        props: { open: true, steps: [{ title: 'T', description: 'D', target: '#sel-target' }] },
        attachTo: document.body,
      })
      await wrapper.vm.$nextTick()
      await new Promise((r) => setTimeout(r, 30))
      // 有目标 → 生成高亮 rect 且不走居中
      expect(document.querySelectorAll('.hmfw-tour-mask-svg mask rect').length).toBe(2)
      expect(document.querySelector('.hmfw-tour-popover-center')).toBeNull()
      target.remove()
      wrapper.unmount()
    })

    it('支持组件实例（自动解包 $el），不抛异常', async () => {
      const target = document.createElement('div')
      document.body.appendChild(target)
      const wrapper = mount(Tour, {
        props: { open: true, steps: [{ title: 'T', description: 'D', target: () => ({ $el: target }) as any }] },
        attachTo: document.body,
      })
      await wrapper.vm.$nextTick()
      await new Promise((r) => setTimeout(r, 30))
      expect(document.querySelectorAll('.hmfw-tour-mask-svg mask rect').length).toBe(2)
      target.remove()
      wrapper.unmount()
    })

    it('target 无法测量时降级为居中，不抛异常', async () => {
      const wrapper = mount(Tour, {
        props: { open: true, steps: [{ title: 'T', description: 'D', target: () => ({}) as any }] },
        attachTo: document.body,
      })
      await wrapper.vm.$nextTick()
      await new Promise((r) => setTimeout(r, 30))
      expect(document.querySelector('.hmfw-tour-popover-center')).not.toBeNull()
      wrapper.unmount()
    })
  })

  // ==================== 高亮交互 ====================

  describe('disabledInteraction', () => {
    it('默认放行命中测试，高亮元素可交互', async () => {
      const target = document.createElement('div')
      document.body.appendChild(target)
      const wrapper = mount(Tour, {
        props: { open: true, steps: [{ title: 'T', description: 'D', target: () => target }] },
        attachTo: document.body,
      })
      await wrapper.vm.$nextTick()
      await new Promise((r) => setTimeout(r, 30))
      const mask = document.querySelector<HTMLElement>('.hmfw-tour-mask')
      expect(mask?.style.pointerEvents).toBe('none')
      // 四周 blocker 拦截高亮区域之外
      expect(document.querySelector('.hmfw-tour-mask-blockers')).not.toBeNull()
      target.remove()
      wrapper.unmount()
    })

    it('disabledInteraction=true 时整层拦截', async () => {
      const target = document.createElement('div')
      document.body.appendChild(target)
      const wrapper = mount(Tour, {
        props: {
          open: true,
          steps: [{ title: 'T', description: 'D', target: () => target }],
          disabledInteraction: true,
        },
        attachTo: document.body,
      })
      await wrapper.vm.$nextTick()
      await new Promise((r) => setTimeout(r, 30))
      const mask = document.querySelector<HTMLElement>('.hmfw-tour-mask')
      expect(mask?.style.pointerEvents).toBe('auto')
      expect(document.querySelector('.hmfw-tour-mask-blockers')).toBeNull()
      target.remove()
      wrapper.unmount()
    })
  })

  // ==================== gap ====================

  describe('gap', () => {
    function holeAttrs() {
      const rect = document.querySelectorAll('.hmfw-tour-mask-svg mask rect')[1]
      return {
        x: Number(rect?.getAttribute('x')),
        y: Number(rect?.getAttribute('y')),
        w: Number(rect?.getAttribute('width')),
        h: Number(rect?.getAttribute('height')),
        rx: Number(rect?.getAttribute('rx')),
      }
    }

    it('默认按 offset=6 外扩高亮区域，radius=2', async () => {
      const target = document.createElement('div')
      target.getBoundingClientRect = () =>
        ({ top: 100, left: 200, width: 80, height: 40, bottom: 140, right: 280 }) as DOMRect
      document.body.appendChild(target)
      const wrapper = mount(Tour, {
        props: { open: true, steps: [{ title: 'T', description: 'D', target: () => target }] },
        attachTo: document.body,
      })
      await wrapper.vm.$nextTick()
      await new Promise((r) => setTimeout(r, 30))
      expect(holeAttrs()).toEqual({ x: 194, y: 94, w: 92, h: 52, rx: 2 })
      target.remove()
      wrapper.unmount()
    })

    it('gap.offset 支持 [x, y] 双轴独立外扩', async () => {
      const target = document.createElement('div')
      target.getBoundingClientRect = () =>
        ({ top: 100, left: 200, width: 80, height: 40, bottom: 140, right: 280 }) as DOMRect
      document.body.appendChild(target)
      const wrapper = mount(Tour, {
        props: {
          open: true,
          steps: [{ title: 'T', description: 'D', target: () => target }],
          gap: { offset: [10, 2] as [number, number], radius: 8 },
        },
        attachTo: document.body,
      })
      await wrapper.vm.$nextTick()
      await new Promise((r) => setTimeout(r, 30))
      expect(holeAttrs()).toEqual({ x: 190, y: 98, w: 100, h: 44, rx: 8 })
      target.remove()
      wrapper.unmount()
    })
  })

  // ==================== 箭头 ====================

  describe('arrow', () => {
    function mountWithTarget(props: Record<string, unknown> = {}) {
      const target = document.createElement('div')
      target.getBoundingClientRect = () =>
        ({ top: 100, left: 200, width: 80, height: 40, bottom: 140, right: 280 }) as DOMRect
      document.body.appendChild(target)
      const wrapper = mount(Tour, {
        props: { open: true, steps: [{ title: 'T', description: 'D', target: () => target }], ...props },
        attachTo: document.body,
      })
      return { wrapper, target }
    }

    it('有目标时默认显示箭头', async () => {
      const { wrapper, target } = mountWithTarget()
      await wrapper.vm.$nextTick()
      await new Promise((r) => setTimeout(r, 30))
      expect(document.querySelector('.hmfw-tour-arrow')).not.toBeNull()
      target.remove()
      wrapper.unmount()
    })

    it('arrow=false 时不显示', async () => {
      const { wrapper, target } = mountWithTarget({ arrow: false })
      await wrapper.vm.$nextTick()
      await new Promise((r) => setTimeout(r, 30))
      expect(document.querySelector('.hmfw-tour-arrow')).toBeNull()
      target.remove()
      wrapper.unmount()
    })

    it('bottom 方位下箭头贴卡片上边', async () => {
      const { wrapper, target } = mountWithTarget({ placement: 'bottom' })
      await wrapper.vm.$nextTick()
      await new Promise((r) => setTimeout(r, 30))
      expect(document.querySelector('.hmfw-tour-arrow-top')).not.toBeNull()
      target.remove()
      wrapper.unmount()
    })

    it('步骤级 arrow 优先于 Tour 级', async () => {
      const target = document.createElement('div')
      target.getBoundingClientRect = () =>
        ({ top: 100, left: 200, width: 80, height: 40, bottom: 140, right: 280 }) as DOMRect
      document.body.appendChild(target)
      const wrapper = mount(Tour, {
        props: {
          open: true,
          arrow: true,
          steps: [{ title: 'T', description: 'D', target: () => target, arrow: false }],
        },
        attachTo: document.body,
      })
      await wrapper.vm.$nextTick()
      await new Promise((r) => setTimeout(r, 30))
      expect(document.querySelector('.hmfw-tour-arrow')).toBeNull()
      target.remove()
      wrapper.unmount()
    })
  })

  // ==================== 无障碍 ====================

  describe('无障碍', () => {
    it('弹层为 dialog 并关联标题与描述', async () => {
      const wrapper = mount(Tour, { props: { open: true, steps }, attachTo: document.body })
      await wrapper.vm.$nextTick()
      const pop = document.querySelector('.hmfw-tour-popover')!
      expect(pop.getAttribute('role')).toBe('dialog')
      expect(pop.getAttribute('aria-modal')).toBe('true')

      const titleId = pop.getAttribute('aria-labelledby')
      const descId = pop.getAttribute('aria-describedby')
      expect(titleId).toBeTruthy()
      expect(document.getElementById(titleId!)?.textContent).toBe('Step 1')
      expect(document.getElementById(descId!)?.textContent).toBe('First step description')
      wrapper.unmount()
    })

    it('mask=false 时不声明 aria-modal', async () => {
      const wrapper = mount(Tour, { props: { open: true, steps, mask: false }, attachTo: document.body })
      await wrapper.vm.$nextTick()
      expect(document.querySelector('.hmfw-tour-popover')?.getAttribute('aria-modal')).toBeNull()
      wrapper.unmount()
    })

    it('关闭按钮 aria-label 取自 locale', async () => {
      const wrapper = mount(Tour, { props: { open: true, steps }, attachTo: document.body })
      await wrapper.vm.$nextTick()
      // 默认 zh-CN
      expect(document.querySelector('.hmfw-tour-close')?.getAttribute('aria-label')).toBe('关闭')
      wrapper.unmount()
    })

    it('指示器为可聚焦 button 且标注当前步', async () => {
      const wrapper = mount(Tour, { props: { open: true, steps }, attachTo: document.body })
      await wrapper.vm.$nextTick()
      const indicators = document.querySelectorAll('.hmfw-tour-indicator')
      expect(indicators[0].tagName).toBe('BUTTON')
      expect(indicators[0].getAttribute('aria-current')).toBe('step')
      expect(indicators[1].getAttribute('aria-current')).toBeNull()
      expect(indicators[0].getAttribute('aria-label')).toBe('1 / 3')
      wrapper.unmount()
    })

    it('点击指示器跳转到对应步骤', async () => {
      const wrapper = mount(Tour, { props: { open: true, steps }, attachTo: document.body })
      await wrapper.vm.$nextTick()
      document.querySelectorAll<HTMLButtonElement>('.hmfw-tour-indicator')[2].click()
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted('change')?.[0]).toEqual([2])
      expect(document.querySelector('.hmfw-tour-title')?.textContent).toBe('Step 3')
      wrapper.unmount()
    })

    it('打开时焦点移入卡片，关闭后归还', async () => {
      const trigger = document.createElement('button')
      document.body.appendChild(trigger)
      trigger.focus()

      const wrapper = mount(Tour, { props: { steps }, attachTo: document.body })
      await wrapper.setProps({ open: true })
      await wrapper.vm.$nextTick()
      await new Promise((r) => setTimeout(r, 30))
      expect(document.activeElement).toBe(document.querySelector('.hmfw-tour-popover'))

      await wrapper.setProps({ open: false })
      await wrapper.vm.$nextTick()
      expect(document.activeElement).toBe(trigger)
      trigger.remove()
      wrapper.unmount()
    })
  })

  // ==================== 其他 ====================

  it('mask.color 落到遮罩填充色', async () => {
    const wrapper = mount(Tour, {
      props: { open: true, steps, mask: { color: 'rgba(255,0,0,0.3)' } },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    const fillRect = document.querySelectorAll('.hmfw-tour-mask-svg > rect')[0]
    expect(fillRect.getAttribute('fill')).toBe('rgba(255,0,0,0.3)')
    wrapper.unmount()
  })

  it('未指定 mask.color 时遮罩填充走组件级 Token', async () => {
    const wrapper = mount(Tour, { props: { open: true, steps }, attachTo: document.body })
    await wrapper.vm.$nextTick()
    const fillRect = document.querySelectorAll('.hmfw-tour-mask-svg > rect')[0]
    expect(fillRect.getAttribute('fill')).toBe('var(--hmfw-tour-mask-color)')
    wrapper.unmount()
  })

  it('title 为 0 时仍渲染', async () => {
    const wrapper = mount(Tour, {
      props: { open: true, steps: [{ title: 0, description: 'Desc' }] },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tour-title')?.textContent).toBe('0')
    wrapper.unmount()
  })

  it('受控 current 变化时同步步骤并可外部跳步', async () => {
    const wrapper = mount(Tour, { props: { open: true, current: 0, steps }, attachTo: document.body })
    await wrapper.vm.$nextTick()
    await wrapper.setProps({ current: 2 })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tour-title')?.textContent).toBe('Step 3')
    expect(document.querySelector('.hmfw-tour-description')?.textContent).toBe('Last step')
    wrapper.unmount()
  })

  it('点击下一步同时触发 update:current', async () => {
    const wrapper = mount(Tour, { props: { open: true, steps }, attachTo: document.body })
    await wrapper.vm.$nextTick()
    document.querySelector<HTMLButtonElement>('.hmfw-tour-next-btn')?.click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('update:current')?.[0]).toEqual([1])
    wrapper.unmount()
  })

  it('getPopupContainer 指定挂载容器', async () => {
    const container = document.createElement('div')
    container.id = 'tour-container'
    document.body.appendChild(container)
    const wrapper = mount(Tour, {
      props: { open: true, steps, getPopupContainer: () => container },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(container.querySelector('.hmfw-tour-root')).not.toBeNull()
    container.remove()
    wrapper.unmount()
  })

  it('scrollIntoViewOptions=false 时不滚动', async () => {
    const target = document.createElement('div')
    const scrollIntoView = vi.fn()
    target.scrollIntoView = scrollIntoView
    target.getBoundingClientRect = () =>
      ({ top: 5000, left: 0, width: 80, height: 40, bottom: 5040, right: 80 }) as DOMRect
    document.body.appendChild(target)

    const wrapper = mount(Tour, {
      props: {
        open: true,
        steps: [{ title: 'T', description: 'D', target: () => target }],
        scrollIntoViewOptions: false,
      },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    await new Promise((r) => setTimeout(r, 30))
    expect(scrollIntoView).not.toHaveBeenCalled()
    target.remove()
    wrapper.unmount()
  })

  it('目标在视口外时滚动到目标，在视口内则不滚动', async () => {
    const outside = document.createElement('div')
    const outsideScroll = vi.fn()
    outside.scrollIntoView = outsideScroll
    outside.getBoundingClientRect = () =>
      ({ top: 5000, left: 0, width: 80, height: 40, bottom: 5040, right: 80 }) as DOMRect
    document.body.appendChild(outside)

    const w1 = mount(Tour, {
      props: { open: true, steps: [{ title: 'T', description: 'D', target: () => outside }] },
      attachTo: document.body,
    })
    await w1.vm.$nextTick()
    await new Promise((r) => setTimeout(r, 30))
    expect(outsideScroll).toHaveBeenCalled()
    outside.remove()
    w1.unmount()

    const inside = document.createElement('div')
    const insideScroll = vi.fn()
    inside.scrollIntoView = insideScroll
    inside.getBoundingClientRect = () =>
      ({ top: 10, left: 10, width: 80, height: 40, bottom: 50, right: 90 }) as DOMRect
    document.body.appendChild(inside)

    const w2 = mount(Tour, {
      props: { open: true, steps: [{ title: 'T', description: 'D', target: () => inside }] },
      attachTo: document.body,
    })
    await w2.vm.$nextTick()
    await new Promise((r) => setTimeout(r, 30))
    expect(insideScroll).not.toHaveBeenCalled()
    inside.remove()
    w2.unmount()
  })
})
