import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Skeleton, SkeletonButton, SkeletonInput } from '../Skeleton'

describe('Skeleton', () => {
  it('renders skeleton when loading=true', () => {
    const wrapper = mount(Skeleton, { props: { loading: true } })
    expect(wrapper.find('.hmfw-skeleton').exists()).toBe(true)
  })

  it('renders children when loading=false', () => {
    const wrapper = mount(Skeleton, {
      props: { loading: false },
      slots: { default: '<p>Real content</p>' },
    })
    expect(wrapper.find('.hmfw-skeleton').exists()).toBe(false)
    expect(wrapper.find('p').text()).toBe('Real content')
  })

  it('renders title by default', () => {
    const wrapper = mount(Skeleton)
    expect(wrapper.find('.hmfw-skeleton-title').exists()).toBe(true)
  })

  it('hides title when title=false', () => {
    const wrapper = mount(Skeleton, { props: { title: false } })
    expect(wrapper.find('.hmfw-skeleton-title').exists()).toBe(false)
  })

  it('renders paragraph by default', () => {
    const wrapper = mount(Skeleton)
    expect(wrapper.find('.hmfw-skeleton-paragraph').exists()).toBe(true)
  })

  it('hides paragraph when paragraph=false', () => {
    const wrapper = mount(Skeleton, { props: { paragraph: false } })
    expect(wrapper.find('.hmfw-skeleton-paragraph').exists()).toBe(false)
  })

  it('renders correct number of paragraph rows', () => {
    const wrapper = mount(Skeleton, { props: { paragraph: { rows: 5 } } })
    expect(wrapper.findAll('.hmfw-skeleton-paragraph li')).toHaveLength(5)
  })

  it('renders avatar when avatar=true', () => {
    const wrapper = mount(Skeleton, { props: { avatar: true } })
    expect(wrapper.find('.hmfw-skeleton-avatar').exists()).toBe(true)
    expect(wrapper.classes()).toContain('hmfw-skeleton-with-avatar')
  })

  it('applies active class', () => {
    const wrapper = mount(Skeleton, { props: { active: true } })
    expect(wrapper.classes()).toContain('hmfw-skeleton-active')
  })

  it('applies round class', () => {
    const wrapper = mount(Skeleton, { props: { round: true } })
    expect(wrapper.classes()).toContain('hmfw-skeleton-round')
  })

  it('renders avatar with circle shape by default', () => {
    const wrapper = mount(Skeleton, { props: { avatar: true } })
    expect(wrapper.find('.hmfw-skeleton-avatar').classes()).toContain('hmfw-skeleton-avatar-circle')
  })

  it('renders avatar with square shape', () => {
    const wrapper = mount(Skeleton, { props: { avatar: { shape: 'square' } } })
    expect(wrapper.find('.hmfw-skeleton-avatar').classes()).toContain('hmfw-skeleton-avatar-square')
  })
})

describe('SkeletonButton', () => {
  it('renders button skeleton', () => {
    const wrapper = mount(SkeletonButton)
    expect(wrapper.find('.hmfw-skeleton-button').exists()).toBe(true)
  })

  it('applies size class', () => {
    const lg = mount(SkeletonButton, { props: { size: 'large' } })
    expect(lg.classes()).toContain('hmfw-skeleton-button-large')
  })

  it('applies active class', () => {
    const wrapper = mount(SkeletonButton, { props: { active: true } })
    expect(wrapper.classes()).toContain('hmfw-skeleton-active')
  })
})

describe('SkeletonInput', () => {
  it('renders input skeleton', () => {
    const wrapper = mount(SkeletonInput)
    expect(wrapper.find('.hmfw-skeleton-input').exists()).toBe(true)
  })

  it('applies size class', () => {
    const sm = mount(SkeletonInput, { props: { size: 'small' } })
    expect(sm.classes()).toContain('hmfw-skeleton-input-small')
  })
})
