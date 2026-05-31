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

  it('renders marks with string values', () => {
    const wrapper = mount(Slider, {
      props: { marks: { 0: '0°C', 50: '50°C', 100: '100°C' } },
    })
    expect(wrapper.findAll('.hmfw-slider-mark-text')).toHaveLength(3)
    expect(wrapper.findAll('.hmfw-slider-dot')).toHaveLength(3)
  })

  it('renders marks with object values', () => {
    const wrapper = mount(Slider, {
      props: {
        marks: {
          0: '0°C',
          100: { label: '100°C', style: { color: '#f50' } },
        },
      },
    })
    const markTexts = wrapper.findAll('.hmfw-slider-mark-text')
    expect(markTexts).toHaveLength(2)
    expect(markTexts[1].text()).toBe('100°C')
    expect(markTexts[1].attributes('style')).toContain('color: rgb(255, 85, 0)')
  })

  it('renders with-marks class when marks present', () => {
    const wrapper = mount(Slider, { props: { marks: { 50: '50' } } })
    expect(wrapper.classes()).toContain('hmfw-slider-with-marks')
  })

  it('renders dots when dots=true', () => {
    const wrapper = mount(Slider, { props: { dots: true, step: 25, min: 0, max: 100 } })
    // Should have dots at 0, 25, 50, 75, 100
    expect(wrapper.findAll('.hmfw-slider-dot')).toHaveLength(5)
  })

  it('does not render dots when dots=false', () => {
    const wrapper = mount(Slider, { props: { dots: false, step: 25 } })
    expect(wrapper.findAll('.hmfw-slider-dot')).toHaveLength(0)
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

  it('tooltip always visible when open=true', async () => {
    const wrapper = mount(Slider, {
      props: { value: 50, tooltip: { open: true } },
    })
    expect(wrapper.find('.hmfw-slider-tooltip').exists()).toBe(true)
  })

  it('tooltip always hidden when open=false', async () => {
    const wrapper = mount(Slider, {
      props: { value: 50, tooltip: { open: false } },
    })
    await wrapper.find('[role="slider"]').trigger('mouseenter')
    expect(wrapper.find('.hmfw-slider-tooltip').exists()).toBe(false)
  })

  it('supports step=null with marks', () => {
    const wrapper = mount(Slider, {
      props: {
        step: null,
        marks: { 0: '0', 50: '50', 100: '100' },
        defaultValue: 0,
      },
    })
    expect(wrapper.find('.hmfw-slider-handle').exists()).toBe(true)
  })

  it('keyboard: ArrowRight increases value', async () => {
    const wrapper = mount(Slider, { props: { value: 50, step: 10 } })
    const handle = wrapper.find('[role="slider"]')
    await handle.trigger('keydown', { key: 'ArrowRight' })
    expect(wrapper.emitted('change')?.[0]).toEqual([60])
  })

  it('keyboard: ArrowLeft decreases value', async () => {
    const wrapper = mount(Slider, { props: { value: 50, step: 10 } })
    const handle = wrapper.find('[role="slider"]')
    await handle.trigger('keydown', { key: 'ArrowLeft' })
    expect(wrapper.emitted('change')?.[0]).toEqual([40])
  })

  it('keyboard: Home goes to min', async () => {
    const wrapper = mount(Slider, { props: { value: 50, min: 0, max: 100 } })
    const handle = wrapper.find('[role="slider"]')
    await handle.trigger('keydown', { key: 'Home' })
    expect(wrapper.emitted('change')?.[0]).toEqual([0])
  })

  it('keyboard: End goes to max', async () => {
    const wrapper = mount(Slider, { props: { value: 50, min: 0, max: 100 } })
    const handle = wrapper.find('[role="slider"]')
    await handle.trigger('keydown', { key: 'End' })
    expect(wrapper.emitted('change')?.[0]).toEqual([100])
  })

  it('keyboard: disabled when keyboard=false', async () => {
    const wrapper = mount(Slider, { props: { value: 50, keyboard: false } })
    const handle = wrapper.find('[role="slider"]')
    await handle.trigger('keydown', { key: 'ArrowRight' })
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('keyboard: disabled when disabled=true', async () => {
    const wrapper = mount(Slider, { props: { value: 50, disabled: true } })
    const handle = wrapper.find('[role="slider"]')
    await handle.trigger('keydown', { key: 'ArrowRight' })
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('keyboard: range mode start handle', async () => {
    const wrapper = mount(Slider, { props: { range: true, value: [20, 80], step: 10 } })
    const handles = wrapper.findAll('[role="slider"]')
    await handles[0].trigger('keydown', { key: 'ArrowRight' })
    expect(wrapper.emitted('change')?.[0]).toEqual([[30, 80]])
  })

  it('keyboard: range mode end handle', async () => {
    const wrapper = mount(Slider, { props: { range: true, value: [20, 80], step: 10 } })
    const handles = wrapper.findAll('[role="slider"]')
    await handles[1].trigger('keydown', { key: 'ArrowLeft' })
    expect(wrapper.emitted('change')?.[0]).toEqual([[20, 70]])
  })

  it('mark click in range mode updates nearest handle', async () => {
    const wrapper = mount(Slider, {
      props: { range: true, value: [20, 80], marks: { 0: '0', 50: '50', 100: '100' } },
    })
    const markTexts = wrapper.findAll('.hmfw-slider-mark-text')
    await markTexts[1].trigger('click') // Click on 50
    // 50 is closer to 20 (dist=30) than to 80 (dist=30), so start handle moves
    expect(wrapper.emitted('change')?.[0]).toEqual([[50, 80]])
  })
})
