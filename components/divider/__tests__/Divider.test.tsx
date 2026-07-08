import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Divider from '../Divider'

describe('Divider', () => {
  it('renders correctly', () => {
    const wrapper = mount(Divider)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.classes()).toContain('hmfw-divider')
  })

  it('renders horizontal divider by default', () => {
    const wrapper = mount(Divider)
    expect(wrapper.classes()).toContain('hmfw-divider-horizontal')
  })

  it('renders vertical divider', () => {
    const wrapper = mount(Divider, {
      props: { type: 'vertical' },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-vertical')
  })

  it('renders dashed divider', () => {
    const wrapper = mount(Divider, {
      props: { dashed: true },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-dashed')
  })

  it('renders dotted divider via variant', () => {
    const wrapper = mount(Divider, {
      props: { variant: 'dotted' },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-dotted')
  })

  it('variant takes precedence over dashed', () => {
    const wrapper = mount(Divider, {
      props: { dashed: true, variant: 'dotted' },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-dotted')
    expect(wrapper.classes()).not.toContain('hmfw-divider-dashed')
  })

  it('does not add solid class for default variant', () => {
    const wrapper = mount(Divider)
    expect(wrapper.classes()).not.toContain('hmfw-divider-solid')
  })

  it('renders small size divider', () => {
    const wrapper = mount(Divider, {
      props: { size: 'small' },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-sm')
  })

  it('renders middle size divider', () => {
    const wrapper = mount(Divider, {
      props: { size: 'middle' },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-md')
  })

  it('ignores size on vertical divider', () => {
    const wrapper = mount(Divider, {
      props: { type: 'vertical', size: 'small' },
    })
    expect(wrapper.classes()).not.toContain('hmfw-divider-sm')
  })

  it('renders divider with text', () => {
    const wrapper = mount(Divider, {
      slots: {
        default: () => 'Text',
      },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-with-text')
    expect(wrapper.text()).toBe('Text')
  })

  it('renders divider with text center', () => {
    const wrapper = mount(Divider, {
      props: { orientation: 'center' },
      slots: {
        default: () => 'Text',
      },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-with-text-center')
  })

  it('renders divider with text left', () => {
    const wrapper = mount(Divider, {
      props: { orientation: 'left' },
      slots: {
        default: () => 'Text',
      },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-with-text-left')
  })

  it('renders divider with text right', () => {
    const wrapper = mount(Divider, {
      props: { orientation: 'right' },
      slots: {
        default: () => 'Text',
      },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-with-text-right')
  })

  it('renders plain divider', () => {
    const wrapper = mount(Divider, {
      props: { plain: true },
      slots: {
        default: () => 'Text',
      },
    })
    expect(wrapper.classes()).toContain('hmfw-divider-plain')
  })

  it('applies orientation margin for left', () => {
    const wrapper = mount(Divider, {
      props: {
        orientation: 'left',
        orientationMargin: 20,
      },
      slots: {
        default: () => 'Text',
      },
    })
    const innerText = wrapper.find('.hmfw-divider-inner-text')
    expect(innerText.attributes('style')).toContain('margin-left: 20px')
  })

  it('applies orientation margin for right', () => {
    const wrapper = mount(Divider, {
      props: {
        orientation: 'right',
        orientationMargin: '30px',
      },
      slots: {
        default: () => 'Text',
      },
    })
    const innerText = wrapper.find('.hmfw-divider-inner-text')
    expect(innerText.attributes('style')).toContain('margin-right: 30px')
  })

  it('has role separator', () => {
    const wrapper = mount(Divider)
    expect(wrapper.attributes('role')).toBe('separator')
  })

  it('vertical divider ignores text', () => {
    const wrapper = mount(Divider, {
      props: { type: 'vertical' },
      slots: {
        default: () => 'Text',
      },
    })
    expect(wrapper.classes()).not.toContain('hmfw-divider-with-text')
  })

  // ==================== 语义化 API：classNames ====================

  it('applies classNames.root to the root element', () => {
    const wrapper = mount(Divider, {
      props: {
        classNames: { root: 'custom-root-class' },
      },
    })
    expect(wrapper.classes()).toContain('custom-root-class')
    expect(wrapper.classes()).toContain('hmfw-divider')
  })

  it('applies classNames.text to inner text element', () => {
    const wrapper = mount(Divider, {
      props: {
        classNames: { text: 'custom-text-class' },
      },
      slots: {
        default: () => 'Text',
      },
    })
    const innerText = wrapper.find('.hmfw-divider-inner-text')
    expect(innerText.exists()).toBe(true)
    expect(innerText.classes()).toContain('custom-text-class')
  })

  it('classNames.text does not render when no children', () => {
    const wrapper = mount(Divider, {
      props: {
        classNames: { text: 'custom-text-class' },
      },
    })
    const innerText = wrapper.find('.hmfw-divider-inner-text')
    expect(innerText.exists()).toBe(false)
  })

  it('applies both classNames.root and classNames.text together', () => {
    const wrapper = mount(Divider, {
      props: {
        classNames: { root: 'root-cls', text: 'text-cls' },
      },
      slots: {
        default: () => 'Combined',
      },
    })
    expect(wrapper.classes()).toContain('root-cls')
    const innerText = wrapper.find('.hmfw-divider-inner-text')
    expect(innerText.classes()).toContain('text-cls')
  })

  // ==================== 语义化 API：styles ====================

  it('applies styles.root to the root element', () => {
    const wrapper = mount(Divider, {
      props: {
        styles: { root: { marginTop: '100px', borderColor: 'red' } },
      },
    })
    expect(wrapper.attributes('style')).toContain('margin-top: 100px')
    expect(wrapper.attributes('style')).toContain('border-color: red')
  })

  it('applies styles.text to inner text element', () => {
    const wrapper = mount(Divider, {
      props: {
        styles: { text: { fontSize: '20px', color: 'blue' } },
      },
      slots: {
        default: () => 'Text',
      },
    })
    const innerText = wrapper.find('.hmfw-divider-inner-text')
    expect(innerText.attributes('style')).toContain('font-size: 20px')
    expect(innerText.attributes('style')).toContain('color: blue')
  })

  it('applies both styles.root and styles.text together', () => {
    const wrapper = mount(Divider, {
      props: {
        styles: {
          root: { margin: '50px 0' },
          text: { fontWeight: 'bold' },
        },
      },
      slots: {
        default: () => 'Styled',
      },
    })
    expect(wrapper.attributes('style')).toContain('margin: 50px 0')
    const innerText = wrapper.find('.hmfw-divider-inner-text')
    expect(innerText.attributes('style')).toContain('font-weight: bold')
  })

  // ==================== 边界与默认值场景 ====================

  it('orientationMargin is ignored when orientation is center', () => {
    const wrapper = mount(Divider, {
      props: {
        orientation: 'center',
        orientationMargin: 50,
      },
      slots: {
        default: () => 'Text',
      },
    })
    const innerText = wrapper.find('.hmfw-divider-inner-text')
    expect(innerText.attributes('style')).toBeUndefined()
  })

  it('size=large does not add size class (default)', () => {
    const wrapper = mount(Divider, {
      props: { size: 'large' },
    })
    expect(wrapper.classes()).not.toContain('hmfw-divider-sm')
    expect(wrapper.classes()).not.toContain('hmfw-divider-md')
  })

  it('variant=solid does not add variant class (default)', () => {
    const wrapper = mount(Divider, {
      props: { variant: 'solid' },
    })
    expect(wrapper.classes()).not.toContain('hmfw-divider-solid')
    expect(wrapper.classes()).not.toContain('hmfw-divider-dashed')
    expect(wrapper.classes()).not.toContain('hmfw-divider-dotted')
  })

  it('plain without text still adds plain class', () => {
    const wrapper = mount(Divider, {
      props: { plain: true },
    })
    // plain class 始终添加，CSS 层面通过 .hmfw-divider-plain.hmfw-divider-with-text 选择器仅在带文字时生效
    expect(wrapper.classes()).toContain('hmfw-divider-plain')
  })
})
