import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Anchor } from '../Anchor'

const items = [
  { href: '#introduction', title: '介绍' },
  { href: '#usage', title: '使用方法' },
  { href: '#api', title: 'API', children: [{ href: '#props', title: 'Props' }] },
]

describe('Anchor', () => {
  it('renders correctly', () => {
    const wrapper = mount(Anchor, { props: { items } })
    expect(wrapper.classes()).toContain('hmfw-anchor')
  })

  it('renders link items', () => {
    const wrapper = mount(Anchor, { props: { items } })
    const links = wrapper.findAll('.hmfw-anchor-link-title')
    expect(links.length).toBeGreaterThan(0)
  })

  it('renders nested children', () => {
    const wrapper = mount(Anchor, { props: { items } })
    const links = wrapper.findAll('a')
    expect(links.length).toBe(4)
  })

  it('renders horizontal direction', () => {
    const wrapper = mount(Anchor, { props: { items, direction: 'horizontal' } })
    expect(wrapper.classes()).toContain('hmfw-anchor-horizontal')
  })

  it('renders vertical ink bar', () => {
    const wrapper = mount(Anchor, { props: { items } })
    expect(wrapper.find('.hmfw-anchor-ink').exists()).toBe(true)
  })

  it('no ink bar in horizontal mode', () => {
    const wrapper = mount(Anchor, { props: { items, direction: 'horizontal' } })
    expect(wrapper.find('.hmfw-anchor-ink').exists()).toBe(false)
  })

  it('emits click on link click', async () => {
    const wrapper = mount(Anchor, { props: { items } })
    const link = wrapper.find('a')
    await link.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
