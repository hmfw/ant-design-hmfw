import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Progress } from '../Progress'

describe('Progress', () => {
  it('renders line progress', () => {
    const wrapper = mount(Progress, { props: { percent: 50 } })
    expect(wrapper.find('.hmfw-progress-line').exists()).toBe(true)
    expect(wrapper.find('.hmfw-progress-rail').exists()).toBe(true)
    expect(wrapper.find('.hmfw-progress-track').exists()).toBe(true)
  })

  it('shows percent text', () => {
    const wrapper = mount(Progress, { props: { percent: 60 } })
    expect(wrapper.find('.hmfw-progress-indicator').text()).toBe('60%')
  })

  it('hides info when showInfo=false', () => {
    const wrapper = mount(Progress, { props: { percent: 50, showInfo: false } })
    expect(wrapper.find('.hmfw-progress-indicator').exists()).toBe(false)
  })

  it('shows success status at 100%', () => {
    const wrapper = mount(Progress, { props: { percent: 100 } })
    expect(wrapper.classes()).toContain('hmfw-progress-status-success')
  })

  it('applies exception status', () => {
    const wrapper = mount(Progress, { props: { percent: 50, status: 'exception' } })
    expect(wrapper.classes()).toContain('hmfw-progress-status-exception')
  })

  it('renders circle type', () => {
    const wrapper = mount(Progress, { props: { percent: 75, type: 'circle' } })
    expect(wrapper.find('.hmfw-progress-circle').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.find('.hmfw-progress-circle-path').exists()).toBe(true)
  })

  it('renders dashboard type', () => {
    const wrapper = mount(Progress, { props: { percent: 75, type: 'dashboard' } })
    expect(wrapper.find('.hmfw-progress-circle').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('uses custom format', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, format: (p: number) => `${p} done` },
    })
    expect(wrapper.find('.hmfw-progress-indicator').text()).toBe('50 done')
  })

  it('supports strokeColor', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, strokeColor: '#ff0000' },
    })
    const track = wrapper.find('.hmfw-progress-track')
    expect(track.attributes('style')).toContain('background')
  })

  it('supports railColor', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, railColor: '#f0f0f0' },
    })
    const rail = wrapper.find('.hmfw-progress-rail')
    expect(rail.attributes('style')).toContain('background-color: rgb(240, 240, 240)')
  })

  it('supports strokeLinecap', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, type: 'circle', strokeLinecap: 'butt' },
    })
    const path = wrapper.find('.hmfw-progress-circle-path')
    expect(path.attributes('stroke-linecap')).toBe('butt')
  })

  it('supports success prop', () => {
    const wrapper = mount(Progress, {
      props: {
        percent: 60,
        success: { percent: 30, strokeColor: '#52c41a' },
      },
    })
    expect(wrapper.find('.hmfw-progress-track-success').exists()).toBe(true)
  })

  it('supports steps', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, steps: 5 },
    })
    expect(wrapper.find('.hmfw-progress-steps').exists()).toBe(true)
    expect(wrapper.findAll('.hmfw-progress-steps-item')).toHaveLength(5)
    expect(wrapper.findAll('.hmfw-progress-steps-item-active')).toHaveLength(3) // 50% of 5 = 2.5 rounded to 3
  })

  it('supports gapDegree for dashboard', () => {
    const wrapper = mount(Progress, {
      props: { percent: 75, type: 'dashboard', gapDegree: 90 },
    })
    expect(wrapper.find('.hmfw-progress-circle').exists()).toBe(true)
  })

  it('supports size as number', () => {
    const wrapper = mount(Progress, {
      props: { percent: 75, type: 'circle', size: 80 },
    })
    const body = wrapper.find('.hmfw-progress-body')
    expect(body.attributes('style')).toContain('width: 80px')
  })

  it('supports size as small', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, size: 'small' },
    })
    expect(wrapper.classes()).toContain('hmfw-progress-small')
  })

  it('supports percentPosition', () => {
    const wrapper = mount(Progress, {
      props: {
        percent: 50,
        percentPosition: { align: 'start', type: 'inner' },
      },
    })
    expect(wrapper.find('.hmfw-progress-indicator-start').exists()).toBe(true)
    expect(wrapper.find('.hmfw-progress-indicator-inner').exists()).toBe(true)
  })

  it('shows icon for success status', () => {
    const wrapper = mount(Progress, {
      props: { percent: 100, status: 'success' },
    })
    const indicator = wrapper.find('.hmfw-progress-indicator')
    expect(indicator.find('svg').exists()).toBe(true)
  })

  it('shows icon for exception status', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, status: 'exception' },
    })
    const indicator = wrapper.find('.hmfw-progress-indicator')
    expect(indicator.find('svg').exists()).toBe(true)
  })

  it('supports gradient strokeColor', () => {
    const wrapper = mount(Progress, {
      props: {
        percent: 50,
        strokeColor: { from: '#108ee9', to: '#87d068' },
      },
    })
    const track = wrapper.find('.hmfw-progress-track')
    expect(track.attributes('style')).toContain('linear-gradient')
  })

  it('validates percent range', () => {
    const wrapper1 = mount(Progress, { props: { percent: -10 } })
    expect(wrapper1.find('.hmfw-progress-track').attributes('style')).toContain('width: 0%')

    const wrapper2 = mount(Progress, { props: { percent: 150 } })
    expect(wrapper2.find('.hmfw-progress-track').attributes('style')).toContain('width: 100%')
  })

  it('supports active status animation', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, status: 'active' },
    })
    expect(wrapper.classes()).toContain('hmfw-progress-status-active')
  })

  it('renders aria attributes', () => {
    const wrapper = mount(Progress, { props: { percent: 75 } })
    expect(wrapper.attributes('role')).toBe('progressbar')
    expect(wrapper.attributes('aria-valuenow')).toBe('75')
    expect(wrapper.attributes('aria-valuemin')).toBe('0')
    expect(wrapper.attributes('aria-valuemax')).toBe('100')
  })
})
