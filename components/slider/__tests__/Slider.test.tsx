import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { Slider } from '../Slider'

describe('Slider', () => {
  it('renders rail and handle', () => {
    const wrapper = mount(Slider, { props: { defaultValue: 30 } })
    expect(wrapper.find('.hmfw-slider-rail').exists()).toBe(true)
    expect(wrapper.find('.hmfw-slider-handle').exists()).toBe(true)
  })

  it('renders track with correct width for value', () => {
    const wrapper = mount(Slider, { props: { value: 50, min: 0, max: 100 } })
    const track = wrapper.find('.hmfw-slider-track')
    expect(track.attributes('style')).toContain('50%')
  })

  it('renders two handles in range mode', () => {
    const wrapper = mount(Slider, { props: { range: true, value: [20, 60] } })
    expect(wrapper.findAll('.hmfw-slider-handle')).toHaveLength(2)
  })

  it('applies disabled class', () => {
    const wrapper = mount(Slider, { props: { disabled: true } })
    expect(wrapper.classes()).toContain('hmfw-slider-disabled')
  })

  it('applies vertical class', () => {
    const wrapper = mount(Slider, { props: { vertical: true } })
    expect(wrapper.classes()).toContain('hmfw-slider-vertical')
  })

  it('renders marks', () => {
    const wrapper = mount(Slider, {
      props: { marks: { 0: '0°C', 50: '50°C', 100: '100°C' } },
    })
    expect(wrapper.findAll('.hmfw-slider-mark-text')).toHaveLength(3)
    expect(wrapper.findAll('.hmfw-slider-dot')).toHaveLength(3)
  })

  it('renders with-marks class when marks present', () => {
    const wrapper = mount(Slider, { props: { marks: { 50: '50' } } })
    expect(wrapper.classes()).toContain('hmfw-slider-with-marks')
  })

  it('handle has correct aria attributes', () => {
    const wrapper = mount(Slider, { props: { value: 40, min: 0, max: 100 } })
    const handle = wrapper.find('[role="slider"]')
    expect(handle.attributes('aria-valuenow')).toBe('40')
    expect(handle.attributes('aria-valuemin')).toBe('0')
    expect(handle.attributes('aria-valuemax')).toBe('100')
  })

  it('handle has aria-orientation horizontal by default', () => {
    const wrapper = mount(Slider, { props: { value: 50 } })
    expect(wrapper.find('[role="slider"]').attributes('aria-orientation')).toBe('horizontal')
  })

  it('handle has aria-orientation vertical when vertical=true', () => {
    const wrapper = mount(Slider, { props: { value: 50, vertical: true } })
    expect(wrapper.find('[role="slider"]').attributes('aria-orientation')).toBe('vertical')
  })

  it('handle is not focusable when disabled', () => {
    const wrapper = mount(Slider, { props: { disabled: true } })
    expect(wrapper.find('[role="slider"]').attributes('tabindex')).toBe('-1')
  })

  it('handle is focusable when enabled', () => {
    const wrapper = mount(Slider, { props: { value: 50 } })
    expect(wrapper.find('[role="slider"]').attributes('tabindex')).toBe('0')
  })

  it('emits change on track click', async () => {
    const wrapper = mount(Slider, {
      props: { min: 0, max: 100 },
      attachTo: document.body,
    })
    // Mock getBoundingClientRect for the rail
    const rail = wrapper.find('.hmfw-slider-rail').element
    vi.spyOn(rail, 'getBoundingClientRect').mockReturnValue({
      left: 0, top: 0, width: 200, height: 10, right: 200, bottom: 10, x: 0, y: 0, toJSON: () => {},
    })
    await wrapper.find('.hmfw-slider-rail').trigger('click', { clientX: 100 })
    expect(wrapper.emitted('change')).toBeTruthy()
    wrapper.unmount()
  })

  it('range mode: start handle has aria-label 最小值', () => {
    const wrapper = mount(Slider, { props: { range: true, value: [20, 80] } })
    const handles = wrapper.findAll('[role="slider"]')
    expect(handles[0].attributes('aria-label')).toBe('最小值')
  })

  it('range mode: end handle has aria-label 最大值', () => {
    const wrapper = mount(Slider, { props: { range: true, value: [20, 80] } })
    const handles = wrapper.findAll('[role="slider"]')
    expect(handles[1].attributes('aria-label')).toBe('最大值')
  })

  it('single handle has aria-label 滑块', () => {
    const wrapper = mount(Slider, { props: { value: 50 } })
    expect(wrapper.find('[role="slider"]').attributes('aria-label')).toBe('滑块')
  })

  it('tooltip shows on mouseenter', async () => {
    const wrapper = mount(Slider, { props: { value: 50 } })
    await wrapper.find('[role="slider"]').trigger('mouseenter')
    expect(wrapper.find('.hmfw-slider-tooltip').exists()).toBe(true)
  })

  it('tooltip hidden when formatter returns null', async () => {
    const wrapper = mount(Slider, {
      props: { value: 50, tooltip: { formatter: null } },
    })
    await wrapper.find('[role="slider"]').trigger('mouseenter')
    expect(wrapper.find('.hmfw-slider-tooltip').exists()).toBe(false)
  })
})
