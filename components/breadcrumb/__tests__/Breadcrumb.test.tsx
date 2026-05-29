import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Breadcrumb } from '../Breadcrumb'

describe('Breadcrumb', () => {
  it('renders items', () => {
    const wrapper = mount(Breadcrumb, {
      props: { items: [{ title: 'Home' }, { title: 'List' }, { title: 'Detail' }] },
    })
    expect(wrapper.findAll('.hmfw-breadcrumb-item').length).toBe(3)
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Detail')
  })

  it('renders separators between items', () => {
    const wrapper = mount(Breadcrumb, {
      props: { items: [{ title: 'A' }, { title: 'B' }] },
    })
    expect(wrapper.find('.hmfw-breadcrumb-separator').text()).toBe('/')
  })

  it('uses custom separator', () => {
    const wrapper = mount(Breadcrumb, {
      props: { items: [{ title: 'A' }, { title: 'B' }], separator: '>' },
    })
    expect(wrapper.find('.hmfw-breadcrumb-separator').text()).toBe('>')
  })

  it('renders link for items with href', () => {
    const wrapper = mount(Breadcrumb, {
      props: { items: [{ title: 'Home', href: '/' }] },
    })
    expect(wrapper.find('a').attributes('href')).toBe('/')
  })
})
