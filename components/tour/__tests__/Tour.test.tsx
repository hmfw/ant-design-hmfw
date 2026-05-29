import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
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
})
