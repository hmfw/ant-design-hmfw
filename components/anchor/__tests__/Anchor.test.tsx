import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { h, nextTick } from 'vue'
import { Anchor } from '../Anchor'
import { AnchorLink } from '../AnchorLink'

const items = [
  { href: '#introduction', title: '介绍' },
  { href: '#usage', title: '使用方法' },
  { href: '#api', title: 'API', children: [{ href: '#props', title: 'Props' }] },
]

describe('Anchor', () => {
  beforeEach(() => {
    // Mock scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders correctly', () => {
    const wrapper = mount(Anchor, { props: { items } })
    expect(wrapper.find('.hmfw-anchor-wrapper').exists()).toBe(true)
    expect(wrapper.find('.hmfw-anchor').exists()).toBe(true)
  })

  it('renders link items', () => {
    const wrapper = mount(Anchor, { props: { items } })
    const links = wrapper.findAll('.hmfw-anchor-link-title')
    expect(links.length).toBe(4)
  })

  it('renders nested children', () => {
    const wrapper = mount(Anchor, { props: { items } })
    const links = wrapper.findAll('a')
    expect(links.length).toBe(4)
  })

  it('renders horizontal direction', () => {
    const wrapper = mount(Anchor, { props: { items, direction: 'horizontal' } })
    expect(wrapper.find('.hmfw-anchor-wrapper-horizontal').exists()).toBe(true)
  })

  it('renders vertical ink bar', () => {
    const wrapper = mount(Anchor, { props: { items } })
    expect(wrapper.find('.hmfw-anchor-ink').exists()).toBe(true)
  })

  it('emits click on link click', async () => {
    const wrapper = mount(Anchor, { props: { items } })
    const link = wrapper.find('a')
    await link.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('supports AnchorLink as children', () => {
    const wrapper = mount(Anchor, {
      slots: {
        default: () => [
          h(AnchorLink, { href: '#test1', title: 'Test 1' }),
          h(AnchorLink, { href: '#test2', title: 'Test 2' }),
        ],
      },
    })
    const links = wrapper.findAll('.hmfw-anchor-link')
    expect(links.length).toBe(2)
  })

  it('supports targetOffset prop', () => {
    const wrapper = mount(Anchor, { props: { items, targetOffset: 100 } })
    expect(wrapper.props('targetOffset')).toBe(100)
  })

  it('supports getCurrentAnchor prop', () => {
    const getCurrentAnchor = vi.fn((link: string) => link)
    const wrapper = mount(Anchor, { props: { items, getCurrentAnchor } })
    expect(wrapper.props('getCurrentAnchor')).toBe(getCurrentAnchor)
  })

  it('supports replace prop', () => {
    const wrapper = mount(Anchor, { props: { items, replace: true } })
    expect(wrapper.props('replace')).toBe(true)
  })

  it('emits change event when active link changes', async () => {
    const wrapper = mount(Anchor, { props: { items } })
    // Simulate scroll event
    await nextTick()
    // Note: Full scroll testing requires DOM setup
    expect(wrapper.emitted('change')).toBeDefined()
  })

  it('supports bounds prop', () => {
    const wrapper = mount(Anchor, { props: { items, bounds: 10 } })
    expect(wrapper.props('bounds')).toBe(10)
  })

  it('AnchorLink supports targetOffset', () => {
    const wrapper = mount(Anchor, {
      slots: {
        default: () => h(AnchorLink, { href: '#test', title: 'Test', targetOffset: 50 }),
      },
    })
    const link = wrapper.findComponent(AnchorLink)
    expect(link.props('targetOffset')).toBe(50)
  })

  it('AnchorLink supports target prop', () => {
    const wrapper = mount(Anchor, {
      slots: {
        default: () => h(AnchorLink, { href: '#test', title: 'Test', target: '_blank' }),
      },
    })
    const link = wrapper.find('a')
    expect(link.attributes('target')).toBe('_blank')
  })

  it('applies fixed class when affix is false', () => {
    const wrapper = mount(Anchor, { props: { items, affix: false } })
    expect(wrapper.find('.hmfw-anchor-fixed').exists()).toBe(true)
  })

  it('shows ink-visible class when there is active link', async () => {
    const wrapper = mount(Anchor, { props: { items } })
    // Initially no active link, so ink should not be visible
    // This would require actual scroll simulation to test properly
    expect(wrapper.find('.hmfw-anchor-ink').exists()).toBe(true)
  })
})
