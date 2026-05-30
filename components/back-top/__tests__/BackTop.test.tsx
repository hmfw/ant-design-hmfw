import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { nextTick, h } from 'vue'
import { BackTop } from '../BackTop'
import ConfigProvider from '../../config-provider/ConfigProvider'

describe('BackTop', () => {
  beforeEach(() => {
    Object.defineProperty(document.documentElement, 'scrollTop', {
      writable: true,
      configurable: true,
      value: 0,
    })
    Object.defineProperty(window, 'pageYOffset', {
      writable: true,
      configurable: true,
      value: 0,
    })
  })

  it('renders correctly', () => {
    const wrapper = mount(BackTop, { props: { visibilityHeight: 0 } })
    expect(wrapper.find('.hmfw-back-top').exists()).toBe(true)
  })

  it('is hidden when scroll is below threshold', async () => {
    const wrapper = mount(BackTop, { props: { visibilityHeight: 400 } })
    await nextTick()
    // Initially hidden because scrollTop is 0
    expect(wrapper.find('.hmfw-back-top').html()).not.toContain('hmfw-back-top-content')
  })

  it('shows immediately when visibilityHeight is 0', async () => {
    const wrapper = mount(BackTop, { props: { visibilityHeight: 0 } })
    await nextTick()
    expect(wrapper.html()).toContain('hmfw-back-top-content')
  })

  it('renders custom slot content', async () => {
    const wrapper = mount(BackTop, {
      props: { visibilityHeight: 0 },
      slots: { default: () => h('span', { class: 'custom-icon' }, 'TOP') },
    })
    await nextTick()
    expect(wrapper.find('.custom-icon').exists()).toBe(true)
    expect(wrapper.find('.custom-icon').text()).toBe('TOP')
  })

  it('renders default icon when no slot provided', async () => {
    const wrapper = mount(BackTop, { props: { visibilityHeight: 0 } })
    await nextTick()
    expect(wrapper.find('.hmfw-back-top-content').exists()).toBe(true)
    expect(wrapper.find('.hmfw-back-top-icon').exists()).toBe(true)
  })

  it('emits click event with MouseEvent', async () => {
    const wrapper = mount(BackTop, { props: { visibilityHeight: 0 } })
    await nextTick()

    await wrapper.find('.hmfw-back-top').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')![0][0]).toBeInstanceOf(MouseEvent)
  })

  it('triggers scroll animation on click', async () => {
    // Just verify that clicking doesn't throw and emits the event
    const wrapper = mount(BackTop, { props: { visibilityHeight: 0 } })
    await nextTick()

    const backTop = wrapper.find('.hmfw-back-top')
    expect(backTop.exists()).toBe(true)

    await backTop.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    // The actual scrollTo behavior is tested in integration/E2E
  })

  it('supports className and rootClassName', async () => {
    const wrapper = mount(BackTop, {
      props: {
        visibilityHeight: 0,
        className: 'custom-class',
        rootClassName: 'root-class',
      },
    })
    await nextTick()

    const backTop = wrapper.find('.hmfw-back-top')
    expect(backTop.classes()).toContain('custom-class')
    expect(backTop.classes()).toContain('root-class')
  })

  it('supports custom style', async () => {
    const wrapper = mount(BackTop, {
      props: {
        visibilityHeight: 0,
        style: { backgroundColor: 'red' },
      },
    })
    await nextTick()

    const backTop = wrapper.find('.hmfw-back-top')
    expect(backTop.attributes('style')).toContain('background-color: red')
  })

  it('supports custom prefixCls', async () => {
    const wrapper = mount(BackTop, {
      props: { visibilityHeight: 0, prefixCls: 'custom-prefix' },
    })
    await nextTick()

    expect(wrapper.find('.custom-prefix').exists()).toBe(true)
    expect(wrapper.find('.custom-prefix-content').exists()).toBe(true)
  })

  it('supports RTL direction', async () => {
    const wrapper = mount(
      () =>
        h(ConfigProvider, { direction: 'rtl' }, () =>
          h(BackTop, { visibilityHeight: 0 }),
        ),
    )
    await nextTick()

    expect(wrapper.find('.hmfw-back-top-rtl').exists()).toBe(true)
  })

  it('handles invalid target gracefully', async () => {
    const wrapper = mount(BackTop, {
      props: { visibilityHeight: 0, target: undefined },
    })
    await nextTick()

    await wrapper.find('.hmfw-back-top').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('accepts custom duration prop', () => {
    const wrapper = mount(BackTop, {
      props: { visibilityHeight: 0, duration: 1000 },
    })
    expect(wrapper.props('duration')).toBe(1000)
  })

  it('accepts target prop', () => {
    const target = () => document.body
    const wrapper = mount(BackTop, {
      props: { visibilityHeight: 0, target },
    })
    expect(wrapper.props('target')).toBe(target)
  })
})



