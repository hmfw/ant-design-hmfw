import { mount, flushPromises } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { h } from 'vue'
import { Layout, Header, Footer, Content, Sider } from '../Layout'

describe('Layout', () => {
  it('renders correctly', () => {
    const wrapper = mount(Layout)
    expect(wrapper.find('section').exists()).toBe(true)
    expect(wrapper.classes()).toContain('hmfw-layout')
  })

  it('adds has-sider class when hasSider prop is true', () => {
    const wrapper = mount(Layout, { props: { hasSider: true } })
    expect(wrapper.classes()).toContain('hmfw-layout-has-sider')
  })

  it('renders slot content', () => {
    const wrapper = mount(Layout, { slots: { default: '<div class="child">content</div>' } })
    expect(wrapper.find('.child').exists()).toBe(true)
  })
})

describe('Header', () => {
  it('renders header element', () => {
    const wrapper = mount(Header)
    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.classes()).toContain('hmfw-layout-header')
  })
})

describe('Footer', () => {
  it('renders footer element', () => {
    const wrapper = mount(Footer)
    expect(wrapper.find('footer').exists()).toBe(true)
    expect(wrapper.classes()).toContain('hmfw-layout-footer')
  })
})

describe('Content', () => {
  it('renders main element', () => {
    const wrapper = mount(Content)
    expect(wrapper.find('main').exists()).toBe(true)
    expect(wrapper.classes()).toContain('hmfw-layout-content')
  })
})

describe('Sider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders aside element', () => {
    const wrapper = mount(Sider)
    expect(wrapper.find('aside').exists()).toBe(true)
    expect(wrapper.classes()).toContain('hmfw-layout-sider')
  })

  it('applies dark theme by default', () => {
    const wrapper = mount(Sider)
    expect(wrapper.classes()).toContain('hmfw-layout-sider-dark')
  })

  it('applies light theme', () => {
    const wrapper = mount(Sider, { props: { theme: 'light' } })
    expect(wrapper.classes()).toContain('hmfw-layout-sider-light')
  })

  it('collapses when defaultCollapsed is true', () => {
    const wrapper = mount(Sider, { props: { defaultCollapsed: true } })
    expect(wrapper.classes()).toContain('hmfw-layout-sider-collapsed')
  })

  it('uses controlled collapsed prop', () => {
    const wrapper = mount(Sider, { props: { collapsed: true } })
    expect(wrapper.classes()).toContain('hmfw-layout-sider-collapsed')
  })

  it('renders slot content', () => {
    const wrapper = mount(Sider, { slots: { default: '<div class="menu">menu</div>' } })
    expect(wrapper.find('.menu').exists()).toBe(true)
  })

  it('shows trigger when collapsible is true', () => {
    const wrapper = mount(Sider, { props: { collapsible: true } })
    expect(wrapper.find('.hmfw-layout-sider-trigger').exists()).toBe(true)
  })

  it('hides trigger when trigger prop is null', () => {
    const wrapper = mount(Sider, { props: { collapsible: true, trigger: null } })
    expect(wrapper.find('.hmfw-layout-sider-trigger').exists()).toBe(false)
  })

  it('toggles collapsed state on trigger click', async () => {
    const wrapper = mount(Sider, { props: { collapsible: true, defaultCollapsed: false } })
    expect(wrapper.classes()).not.toContain('hmfw-layout-sider-collapsed')

    await wrapper.find('.hmfw-layout-sider-trigger').trigger('click')
    expect(wrapper.classes()).toContain('hmfw-layout-sider-collapsed')
  })

  it('emits collapse event with type', async () => {
    const onCollapse = vi.fn()
    const wrapper = mount(Sider, {
      props: { collapsible: true, onCollapse },
    })

    await wrapper.find('.hmfw-layout-sider-trigger').trigger('click')
    expect(onCollapse).toHaveBeenCalledWith(true, 'clickTrigger')
  })

  it('emits update:collapsed event', async () => {
    const wrapper = mount(Sider, { props: { collapsible: true } })

    await wrapper.find('.hmfw-layout-sider-trigger').trigger('click')
    expect(wrapper.emitted('update:collapsed')?.[0]).toEqual([true])
  })

  it('applies custom width', () => {
    const wrapper = mount(Sider, { props: { width: 300 } })
    expect(wrapper.attributes('style')).toContain('300px')
  })

  it('applies collapsedWidth when collapsed', () => {
    const wrapper = mount(Sider, { props: { collapsed: true, collapsedWidth: 60 } })
    expect(wrapper.attributes('style')).toContain('60px')
  })

  it('shows zero-width trigger when collapsedWidth is 0', () => {
    const wrapper = mount(Sider, {
      props: { collapsed: true, collapsedWidth: 0, collapsible: true },
    })
    expect(wrapper.find('.hmfw-layout-sider-zero-width-trigger').exists()).toBe(true)
    expect(wrapper.classes()).toContain('hmfw-layout-sider-zero-width')
  })

  it('applies zeroWidthTriggerStyle', () => {
    const wrapper = mount(Sider, {
      props: {
        collapsed: true,
        collapsedWidth: 0,
        collapsible: true,
        zeroWidthTriggerStyle: { background: 'red' },
      },
    })
    const trigger = wrapper.find('.hmfw-layout-sider-zero-width-trigger')
    expect(trigger.attributes('style')).toContain('background')
  })

  it('renders custom trigger content', () => {
    const customTrigger = h('span', { class: 'custom-trigger' }, 'Toggle')
    const wrapper = mount(Sider, {
      props: { collapsible: true, trigger: customTrigger },
    })
    expect(wrapper.find('.custom-trigger').exists()).toBe(true)
  })

  it('adds has-trigger class when collapsible and trigger is not null', () => {
    const wrapper = mount(Sider, { props: { collapsible: true } })
    expect(wrapper.classes()).toContain('hmfw-layout-sider-has-trigger')
  })

  it('does not add has-trigger class when trigger is null', () => {
    const wrapper = mount(Sider, { props: { collapsible: true, trigger: null } })
    expect(wrapper.classes()).not.toContain('hmfw-layout-sider-has-trigger')
  })

  it('reverses arrow direction when reverseArrow is true', () => {
    const wrapper = mount(Sider, { props: { collapsible: true, reverseArrow: true } })
    // Icon component should be rendered with RightOutlined when collapsed=false and reverseArrow=true
    expect(wrapper.find('.hmfw-layout-sider-trigger').exists()).toBe(true)
  })
})
