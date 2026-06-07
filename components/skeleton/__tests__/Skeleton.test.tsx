import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Skeleton, SkeletonButton, SkeletonInput, SkeletonAvatar, SkeletonImage, SkeletonNode } from '../Skeleton'
import { ConfigProvider } from '../../config-provider'

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

  it('defaults to 2 rows for paragraph', () => {
    const wrapper = mount(Skeleton, { props: { avatar: true } })
    expect(wrapper.findAll('.hmfw-skeleton-paragraph li')).toHaveLength(2)
  })

  it('defaults to 3 rows when no avatar and has title', () => {
    const wrapper = mount(Skeleton, { props: { avatar: false } })
    expect(wrapper.findAll('.hmfw-skeleton-paragraph li')).toHaveLength(3)
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

  it('renders avatar with square shape when title && !paragraph', () => {
    const wrapper = mount(Skeleton, { props: { avatar: true, paragraph: false } })
    expect(wrapper.find('.hmfw-skeleton-avatar').classes()).toContain('hmfw-skeleton-avatar-square')
  })

  it('renders avatar with explicit square shape', () => {
    const wrapper = mount(Skeleton, { props: { avatar: { shape: 'square' } } })
    expect(wrapper.find('.hmfw-skeleton-avatar').classes()).toContain('hmfw-skeleton-avatar-square')
  })

  it('sets title width to 50% with avatar and paragraph', () => {
    const wrapper = mount(Skeleton, { props: { avatar: true } })
    const title = wrapper.find('.hmfw-skeleton-title')
    expect(title.attributes('style')).toContain('width: 50%')
  })

  it('sets title width to 38% without avatar', () => {
    const wrapper = mount(Skeleton)
    const title = wrapper.find('.hmfw-skeleton-title')
    expect(title.attributes('style')).toContain('width: 38%')
  })

  it('uses section class instead of content', () => {
    const wrapper = mount(Skeleton)
    expect(wrapper.find('.hmfw-skeleton-section').exists()).toBe(true)
  })

  it('sets last paragraph row width to 61% for single row without title', () => {
    const wrapper = mount(Skeleton, { props: { title: false, paragraph: { rows: 1 } } })
    const rows = wrapper.findAll('.hmfw-skeleton-paragraph li')
    expect(rows).toHaveLength(1)
    expect(rows[0].attributes('style')).toContain('width: 61%')
  })

  it('sets last paragraph row width to 61% when no avatar', () => {
    const wrapper = mount(Skeleton, { props: { paragraph: { rows: 3 } } })
    const rows = wrapper.findAll('.hmfw-skeleton-paragraph li')
    expect(rows[rows.length - 1].attributes('style')).toContain('width: 61%')
  })

  it('keeps last row full width when both avatar and title present', () => {
    const wrapper = mount(Skeleton, { props: { avatar: true, paragraph: { rows: 2 } } })
    const rows = wrapper.findAll('.hmfw-skeleton-paragraph li')
    expect(rows[rows.length - 1].attributes('style')).toContain('width: 100%')
  })

  it('applies explicit scalar paragraph width to last row only', () => {
    const wrapper = mount(Skeleton, { props: { paragraph: { rows: 2, width: '40%' } } })
    const rows = wrapper.findAll('.hmfw-skeleton-paragraph li')
    expect(rows[0].attributes('style')).toContain('width: 100%')
    expect(rows[1].attributes('style')).toContain('width: 40%')
  })

  it('applies rtl class when ConfigProvider direction is rtl', () => {
    const wrapper = mount(ConfigProvider, {
      props: { direction: 'rtl' },
      slots: { default: () => <Skeleton /> },
    })
    expect(wrapper.find('.hmfw-skeleton-rtl').exists()).toBe(true)
  })

  it('does not apply rtl class by default', () => {
    const wrapper = mount(Skeleton)
    expect(wrapper.classes()).not.toContain('hmfw-skeleton-rtl')
  })
})

describe('SkeletonButton', () => {
  it('renders button skeleton', () => {
    const wrapper = mount(SkeletonButton)
    expect(wrapper.find('.hmfw-skeleton-button').exists()).toBe(true)
  })

  it('wraps in element container', () => {
    const wrapper = mount(SkeletonButton)
    expect(wrapper.classes()).toContain('hmfw-skeleton-element')
  })

  it('applies size class', () => {
    const lg = mount(SkeletonButton, { props: { size: 'large' } })
    expect(lg.find('.hmfw-skeleton-button').classes()).toContain('hmfw-skeleton-button-lg')
  })

  it('applies active class', () => {
    const wrapper = mount(SkeletonButton, { props: { active: true } })
    expect(wrapper.classes()).toContain('hmfw-skeleton-active')
  })

  it('applies shape classes', () => {
    const circle = mount(SkeletonButton, { props: { shape: 'circle' } })
    expect(circle.find('.hmfw-skeleton-button').classes()).toContain('hmfw-skeleton-button-circle')

    const round = mount(SkeletonButton, { props: { shape: 'round' } })
    expect(round.find('.hmfw-skeleton-button').classes()).toContain('hmfw-skeleton-button-round')

    const square = mount(SkeletonButton, { props: { shape: 'square' } })
    expect(square.find('.hmfw-skeleton-button').classes()).toContain('hmfw-skeleton-button-square')
  })

  it('applies block class', () => {
    const wrapper = mount(SkeletonButton, { props: { block: true } })
    expect(wrapper.classes()).toContain('hmfw-skeleton-block')
  })
})

describe('SkeletonInput', () => {
  it('renders input skeleton', () => {
    const wrapper = mount(SkeletonInput)
    expect(wrapper.find('.hmfw-skeleton-input').exists()).toBe(true)
  })

  it('wraps in element container', () => {
    const wrapper = mount(SkeletonInput)
    expect(wrapper.classes()).toContain('hmfw-skeleton-element')
  })

  it('applies size class', () => {
    const sm = mount(SkeletonInput, { props: { size: 'small' } })
    expect(sm.find('.hmfw-skeleton-input').classes()).toContain('hmfw-skeleton-input-sm')
  })

  it('applies block class', () => {
    const wrapper = mount(SkeletonInput, { props: { block: true } })
    expect(wrapper.classes()).toContain('hmfw-skeleton-block')
  })
})

describe('SkeletonAvatar', () => {
  it('renders avatar skeleton', () => {
    const wrapper = mount(SkeletonAvatar)
    expect(wrapper.find('.hmfw-skeleton-avatar').exists()).toBe(true)
  })

  it('wraps in element container', () => {
    const wrapper = mount(SkeletonAvatar)
    expect(wrapper.classes()).toContain('hmfw-skeleton-element')
  })

  it('applies size class', () => {
    const lg = mount(SkeletonAvatar, { props: { size: 'large' } })
    expect(lg.find('.hmfw-skeleton-avatar').classes()).toContain('hmfw-skeleton-avatar-lg')
  })

  it('applies shape class', () => {
    const square = mount(SkeletonAvatar, { props: { shape: 'square' } })
    expect(square.find('.hmfw-skeleton-avatar').classes()).toContain('hmfw-skeleton-avatar-square')
  })

  it('supports numeric size', () => {
    const wrapper = mount(SkeletonAvatar, { props: { size: 64 } })
    const avatar = wrapper.find('.hmfw-skeleton-avatar')
    expect(avatar.attributes('style')).toContain('width: 64px')
    expect(avatar.attributes('style')).toContain('height: 64px')
  })
})

describe('SkeletonImage', () => {
  it('renders image skeleton', () => {
    const wrapper = mount(SkeletonImage)
    expect(wrapper.find('.hmfw-skeleton-image').exists()).toBe(true)
  })

  it('renders svg placeholder', () => {
    const wrapper = mount(SkeletonImage)
    expect(wrapper.find('.hmfw-skeleton-image-svg').exists()).toBe(true)
  })

  it('wraps in element container', () => {
    const wrapper = mount(SkeletonImage)
    expect(wrapper.classes()).toContain('hmfw-skeleton-element')
  })
})

describe('SkeletonNode', () => {
  it('renders node skeleton', () => {
    const wrapper = mount(SkeletonNode)
    expect(wrapper.find('.hmfw-skeleton-node').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(SkeletonNode, {
      slots: { default: '<span class="custom">Custom</span>' },
    })
    expect(wrapper.find('.custom').exists()).toBe(true)
  })

  it('wraps in element container', () => {
    const wrapper = mount(SkeletonNode)
    expect(wrapper.classes()).toContain('hmfw-skeleton-element')
  })

  it('applies nodeStyle to the inner node', () => {
    const wrapper = mount(SkeletonNode, { props: { nodeStyle: { width: '160px' } } })
    expect(wrapper.find('.hmfw-skeleton-node').attributes('style')).toContain('width: 160px')
  })

  it('applies fullSize class when fullSize=true', () => {
    const wrapper = mount(SkeletonNode, { props: { fullSize: true } })
    expect(wrapper.find('.hmfw-skeleton-node').classes()).toContain('hmfw-skeleton-node-full')
  })

  it('does not apply fullSize class by default', () => {
    const wrapper = mount(SkeletonNode)
    expect(wrapper.find('.hmfw-skeleton-node').classes()).not.toContain('hmfw-skeleton-node-full')
  })

  it('applies active class for animation', () => {
    const wrapper = mount(SkeletonNode, { props: { active: true } })
    expect(wrapper.classes()).toContain('hmfw-skeleton-active')
  })

  it('renders complex slot content', () => {
    const wrapper = mount(SkeletonNode, {
      slots: { default: '<svg class="custom-icon"><circle cx="10" cy="10" r="5"/></svg>' },
    })
    expect(wrapper.find('.custom-icon').exists()).toBe(true)
    expect(wrapper.find('circle').exists()).toBe(true)
  })
})
