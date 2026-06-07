import { describe, it, expect, vi } from 'vitest'
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
})
