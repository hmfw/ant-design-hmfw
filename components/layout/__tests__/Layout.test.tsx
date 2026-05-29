import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
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
})
