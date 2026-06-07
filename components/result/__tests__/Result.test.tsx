import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { Result } from '../Result'

describe('Result', () => {
  it('renders with default info status', () => {
    const wrapper = mount(Result, { props: { title: 'Info' } })
    expect(wrapper.classes()).toContain('hmfw-result-info')
  })

  it('renders all status types', () => {
    for (const status of ['success', 'error', 'info', 'warning', '404', '403', '500'] as const) {
      const wrapper = mount(Result, { props: { status, title: 'Test' } })
      expect(wrapper.classes()).toContain(`hmfw-result-${status}`)
    }
  })

  it('renders title', () => {
    const wrapper = mount(Result, { props: { title: 'Operation Successful' } })
    expect(wrapper.find('.hmfw-result-title').text()).toBe('Operation Successful')
  })

  it('renders subTitle', () => {
    const wrapper = mount(Result, { props: { title: 'T', subTitle: 'Sub text' } })
    expect(wrapper.find('.hmfw-result-subtitle').text()).toBe('Sub text')
  })

  it('renders extra slot', () => {
    const wrapper = mount(Result, {
      props: { title: 'T' },
      slots: { extra: '<button>Go Home</button>' },
    })
    expect(wrapper.find('.hmfw-result-extra').find('button').exists()).toBe(true)
  })

  it('renders default slot as content', () => {
    const wrapper = mount(Result, {
      props: { title: 'T' },
      slots: { default: '<p>Detail content</p>' },
    })
    expect(wrapper.find('.hmfw-result-body').find('p').exists()).toBe(true)
  })

  it('renders icon slot', () => {
    const wrapper = mount(Result, {
      props: { title: 'T' },
      slots: { icon: '<span class="custom-icon">★</span>' },
    })
    expect(wrapper.find('.hmfw-result-icon .custom-icon').exists()).toBe(true)
  })

  it('renders title slot', () => {
    const wrapper = mount(Result, {
      slots: { title: '<strong>Bold Title</strong>' },
    })
    expect(wrapper.find('.hmfw-result-title strong').exists()).toBe(true)
  })

  it('renders exception status as image illustration', () => {
    const wrapper = mount(Result, { props: { status: '404', title: 'Not Found' } })
    const icon = wrapper.find('.hmfw-result-icon')
    expect(icon.classes()).toContain('hmfw-result-image')
    expect(icon.find('svg').exists()).toBe(true)
  })

  it('hides icon when icon=false', () => {
    const wrapper = mount(Result, { props: { status: 'success', icon: false, title: 'T' } })
    expect(wrapper.find('.hmfw-result-icon').exists()).toBe(false)
  })

  it('renders custom string icon', () => {
    const wrapper = mount(Result, { props: { status: 'info', icon: '★', title: 'T' } })
    expect(wrapper.find('.hmfw-result-icon').text()).toBe('★')
  })

  it('renders real svg icon for each non-exception status', () => {
    for (const status of ['success', 'error', 'info', 'warning'] as const) {
      const wrapper = mount(Result, { props: { status, title: 'T' } })
      expect(wrapper.find('.hmfw-result-icon svg').exists()).toBe(true)
    }
  })

  it('keeps exception image even when icon=false', () => {
    const wrapper = mount(Result, { props: { status: '404', icon: false, title: 'T' } })
    const icon = wrapper.find('.hmfw-result-icon')
    expect(icon.exists()).toBe(true)
    expect(icon.classes()).toContain('hmfw-result-image')
    expect(icon.find('svg').exists()).toBe(true)
  })

  it('renders extra prop', () => {
    const wrapper = mount(Result, { props: { title: 'T', extra: 'Back home' } })
    expect(wrapper.find('.hmfw-result-extra').text()).toBe('Back home')
  })

  it('extra slot takes precedence over extra prop', () => {
    const wrapper = mount(Result, {
      props: { title: 'T', extra: 'prop-text' },
      slots: { extra: '<button>slot-btn</button>' },
    })
    expect(wrapper.find('.hmfw-result-extra button').exists()).toBe(true)
  })

  // ===== P2 新增测试：extra 支持 VNode =====
  it('renders extra prop as VNode', () => {
    const extraVNode = h('button', { class: 'vnode-btn' }, '返回首页')
    const wrapper = mount(Result, {
      props: { title: 'T', extra: extraVNode },
    })
    expect(wrapper.find('.hmfw-result-extra .vnode-btn').exists()).toBe(true)
    expect(wrapper.find('.hmfw-result-extra .vnode-btn').text()).toBe('返回首页')
  })

  it('renders extra prop as array of VNodes', () => {
    const extraArr = [h('button', { class: 'btn-1' }, '返回'), h('button', { class: 'btn-2' }, '重试')]
    const wrapper = mount(Result, {
      props: { title: 'T', extra: extraArr },
    })
    expect(wrapper.find('.hmfw-result-extra .btn-1').exists()).toBe(true)
    expect(wrapper.find('.hmfw-result-extra .btn-2').exists()).toBe(true)
  })

  // ===== P2 新增测试：自定义 icon 不被默认样式覆盖 =====
  it('custom icon via slot gets hmfw-result-icon-custom class', () => {
    const wrapper = mount(Result, {
      props: { title: 'T', status: 'success' },
      slots: { icon: '<span style="color: red; font-size: 48px;">❤</span>' },
    })
    const iconEl = wrapper.find('.hmfw-result-icon')
    expect(iconEl.classes()).toContain('hmfw-result-icon-custom')
  })

  it('custom icon via prop (VNode) gets hmfw-result-icon-custom class', () => {
    const customIcon = h('span', { style: 'color: purple; font-size: 36px;' }, '🎉')
    const wrapper = mount(Result, {
      props: { title: 'T', status: 'error', icon: customIcon },
    })
    const iconEl = wrapper.find('.hmfw-result-icon')
    expect(iconEl.classes()).toContain('hmfw-result-icon-custom')
  })

  it('default status icon does NOT have hmfw-result-icon-custom class', () => {
    const wrapper = mount(Result, {
      props: { title: 'T', status: 'success' },
    })
    const iconEl = wrapper.find('.hmfw-result-icon')
    expect(iconEl.classes()).not.toContain('hmfw-result-icon-custom')
  })

  // ===== P2 新增测试：暗黑模式 CSS 类结构验证 =====
  it('result component renders proper structure for dark mode styling', () => {
    // 验证组件在各状态下渲染了正确的 CSS 类结构，暗黑模式依赖这些类选择器
    for (const status of ['success', 'error', 'info', 'warning'] as const) {
      const wrapper = mount(Result, {
        props: { status, title: '测试', subTitle: '描述' },
      })
      expect(wrapper.find(`.hmfw-result-${status}`).exists()).toBe(true)
      expect(wrapper.find('.hmfw-result-title').exists()).toBe(true)
      expect(wrapper.find('.hmfw-result-subtitle').exists()).toBe(true)
    }
  })

  it('exception statuses render svg elements for dark mode fill override', () => {
    for (const status of ['404', '403', '500'] as const) {
      const wrapper = mount(Result, {
        props: { status, title: '异常' },
      })
      // 暗黑模式 CSS 通过 .hmfw-result-image svg ellipse/text 选择器来适配
      expect(wrapper.find('.hmfw-result-image svg ellipse').exists()).toBe(true)
      expect(wrapper.find('.hmfw-result-image svg text').exists()).toBe(true)
    }
  })
})
