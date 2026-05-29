import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
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
})
