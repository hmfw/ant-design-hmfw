import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Progress } from '../Progress'

describe('Progress', () => {
  it('renders line progress', () => {
    const wrapper = mount(Progress, { props: { percent: 50 } })
    expect(wrapper.find('.hmfw-progress-line').exists()).toBe(true)
  })

  it('shows percent text', () => {
    const wrapper = mount(Progress, { props: { percent: 60 } })
    expect(wrapper.find('.hmfw-progress-text').text()).toBe('60%')
  })

  it('hides info when showInfo=false', () => {
    const wrapper = mount(Progress, { props: { percent: 50, showInfo: false } })
    expect(wrapper.find('.hmfw-progress-text').exists()).toBe(false)
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
  })

  it('uses custom format', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, format: (p: number) => `${p} done` },
    })
    expect(wrapper.find('.hmfw-progress-text').text()).toBe('50 done')
  })
})
