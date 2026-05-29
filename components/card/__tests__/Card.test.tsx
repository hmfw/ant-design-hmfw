import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Card, CardMeta } from '../Card'

describe('Card', () => {
  it('renders correctly', () => {
    const wrapper = mount(Card)
    expect(wrapper.classes()).toContain('hmfw-card')
  })

  it('has border by default', () => {
    const wrapper = mount(Card)
    expect(wrapper.classes()).toContain('hmfw-card-bordered')
  })

  it('removes border when bordered=false', () => {
    const wrapper = mount(Card, { props: { bordered: false } })
    expect(wrapper.classes()).not.toContain('hmfw-card-bordered')
  })

  it('applies hoverable class', () => {
    const wrapper = mount(Card, { props: { hoverable: true } })
    expect(wrapper.classes()).toContain('hmfw-card-hoverable')
  })

  it('applies loading class', () => {
    const wrapper = mount(Card, { props: { loading: true } })
    expect(wrapper.classes()).toContain('hmfw-card-loading')
  })

  it('applies small size class', () => {
    const wrapper = mount(Card, { props: { size: 'small' } })
    expect(wrapper.classes()).toContain('hmfw-card-small')
  })

  it('renders title', () => {
    const wrapper = mount(Card, { props: { title: 'Card Title' } })
    expect(wrapper.find('.hmfw-card-head-title').text()).toBe('Card Title')
  })

  it('renders body content', () => {
    const wrapper = mount(Card, { slots: { default: '<p>Body</p>' } })
    expect(wrapper.find('.hmfw-card-body p').text()).toBe('Body')
  })

  it('renders extra slot', () => {
    const wrapper = mount(Card, {
      props: { title: 'Title' },
      slots: { extra: '<a>More</a>' },
    })
    expect(wrapper.find('.hmfw-card-extra a').text()).toBe('More')
  })

  it('shows loading skeleton when loading', () => {
    const wrapper = mount(Card, { props: { loading: true } })
    expect(wrapper.find('.hmfw-card-loading-content').exists()).toBe(true)
  })
})

describe('CardMeta', () => {
  it('renders correctly', () => {
    const wrapper = mount(CardMeta)
    expect(wrapper.classes()).toContain('hmfw-card-meta')
  })

  it('renders title', () => {
    const wrapper = mount(CardMeta, { props: { title: 'Meta Title' } })
    expect(wrapper.find('.hmfw-card-meta-title').text()).toBe('Meta Title')
  })

  it('renders description', () => {
    const wrapper = mount(CardMeta, { props: { description: 'Meta Desc' } })
    expect(wrapper.find('.hmfw-card-meta-description').text()).toBe('Meta Desc')
  })
})
