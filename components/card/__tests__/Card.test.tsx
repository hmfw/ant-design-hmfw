import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { Card, CardGrid, CardMeta } from '../Card'

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

  it('applies type=inner class', () => {
    const wrapper = mount(Card, { props: { type: 'inner', title: 'Inner' } })
    expect(wrapper.classes()).toContain('hmfw-card-type-inner')
  })

  it('variant=borderless removes border', () => {
    const wrapper = mount(Card, { props: { variant: 'borderless' } })
    expect(wrapper.classes()).not.toContain('hmfw-card-bordered')
  })

  it('variant=outlined adds border (overrides bordered=false)', () => {
    const wrapper = mount(Card, { props: { variant: 'outlined', bordered: false } })
    expect(wrapper.classes()).toContain('hmfw-card-bordered')
  })

  it('detects grid children and adds contain-grid', () => {
    const wrapper = mount(Card, {
      slots: {
        default: () => [h(CardGrid, () => 'A'), h(CardGrid, () => 'B')],
      },
    })
    expect(wrapper.classes()).toContain('hmfw-card-contain-grid')
    expect(wrapper.findAll('.hmfw-card-grid')).toHaveLength(2)
  })
})

describe('Card.Grid', () => {
  it('renders grid with hoverable by default', () => {
    const wrapper = mount(CardGrid, { slots: { default: () => 'Grid' } })
    expect(wrapper.classes()).toContain('hmfw-card-grid')
    expect(wrapper.classes()).toContain('hmfw-card-grid-hoverable')
  })

  it('can disable hoverable', () => {
    const wrapper = mount(CardGrid, { props: { hoverable: false }, slots: { default: () => 'Grid' } })
    expect(wrapper.classes()).not.toContain('hmfw-card-grid-hoverable')
  })

  it('is attached as Card.Grid', async () => {
    const { Card: C } = await import('../index')
    expect((C as any).Grid).toBe(CardGrid)
    expect((C as any).Meta).toBe(CardMeta)
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
