import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Divider from '../Divider'
import { h } from 'vue'

describe('Divider', () => {
  it('renders correctly', () => {
    const wrapper = mount(Divider)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.classes()).toContain('hmfw-divider')
  })

  it('renders horizontal divider by default', () => {
    const wrapper = mount(Divider)
    expect(wrapper.classes()).toContain('hmfw-divider-horizontal')
  })

  it('renders vertical divider', () => {
    const wrapper = mount(Divider, {
      props: { type: 'vertical' },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-vertical')
  })

  it('renders dashed divider', () => {
    const wrapper = mount(Divider, {
      props: { dashed: true },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-dashed')
  })

  it('renders divider with text', () => {
    const wrapper = mount(Divider, {
      slots: {
        default: () => 'Text',
      },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-with-text')
    expect(wrapper.text()).toBe('Text')
  })

  it('renders divider with text center', () => {
    const wrapper = mount(Divider, {
      props: { orientation: 'center' },
      slots: {
        default: () => 'Text',
      },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-with-text-center')
  })

  it('renders divider with text left', () => {
    const wrapper = mount(Divider, {
      props: { orientation: 'left' },
      slots: {
        default: () => 'Text',
      },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-with-text-left')
  })

  it('renders divider with text right', () => {
    const wrapper = mount(Divider, {
      props: { orientation: 'right' },
      slots: {
        default: () => 'Text',
      },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-with-text-right')
  })

  it('renders plain divider', () => {
    const wrapper = mount(Divider, {
      props: { plain: true },
      slots: {
        default: () => 'Text',
      },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-plain')
  })

  it('applies orientation margin for left', () => {
    const wrapper = mount(Divider, {
      props: {
        orientation: 'left',
        orientationMargin: 20,
      },
      slots: {
        default: () => 'Text',
      },
    })
    const innerText = wrapper.find('.hmfw-divider-inner-text')
    expect(innerText.attributes('style')).toContain('margin-left: 20px')
  })

  it('applies orientation margin for right', () => {
    const wrapper = mount(Divider, {
      props: {
        orientation: 'right',
        orientationMargin: '30px',
      },
      slots: {
        default: () => 'Text',
      },
    })
    const innerText = wrapper.find('.hmfw-divider-inner-text')
    expect(innerText.attributes('style')).toContain('margin-right: 30px')
  })

  it('has role separator', () => {
    const wrapper = mount(Divider)
    expect(wrapper.attributes('role')).toBe('separator')
  })

  it('vertical divider ignores text', () => {
    const wrapper = mount(Divider, {
      props: { type: 'vertical' },
      slots: {
        default: () => 'Text',
      },
    })
    expect(wrapper.classes()).not.toContain('hmfw-divider-with-text')
  })
})
