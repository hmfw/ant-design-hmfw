import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Icon from '../Icon'
import {
  SearchOutlined, LoadingOutlined, CloseOutlined, CheckOutlined,
  DownOutlined, UpOutlined, LeftOutlined, RightOutlined,
  PlusOutlined, MinusOutlined, WarningOutlined, InfoCircleOutlined,
  EditOutlined, DeleteOutlined, EyeOutlined, HomeOutlined,
  UserOutlined, SettingOutlined,
} from '../icons'

describe('Icon', () => {
  it('renders the provided component', () => {
    const wrapper = mount(Icon, { props: { component: SearchOutlined } })
    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.find('[role="img"]').exists()).toBe(true)
    expect(wrapper.classes()).toContain('hmfw-icon')
  })

  it('returns null when no component is provided', () => {
    const wrapper = mount(Icon, { props: {} })
    expect(wrapper.find('span').exists()).toBe(false)
  })

  it('applies spin class when spin=true', () => {
    const wrapper = mount(Icon, { props: { component: LoadingOutlined, spin: true } })
    expect(wrapper.classes()).toContain('hmfw-icon-spin')
  })

  it('does not apply spin class when spin=false', () => {
    const wrapper = mount(Icon, { props: { component: LoadingOutlined, spin: false } })
    expect(wrapper.classes()).not.toContain('hmfw-icon-spin')
  })

  it('applies rotation style when rotate is set', () => {
    const wrapper = mount(Icon, { props: { component: SearchOutlined, rotate: 90 } })
    expect(wrapper.attributes('style')).toContain('rotate(90deg)')
  })

  it('applies custom class', () => {
    const wrapper = mount(Icon, { props: { component: SearchOutlined, class: 'my-icon' } })
    expect(wrapper.classes()).toContain('my-icon')
  })

  it('applies custom style', () => {
    const wrapper = mount(Icon, { props: { component: SearchOutlined, style: { color: 'red' } } })
    expect(wrapper.attributes('style')).toContain('color')
  })

  const allIcons = [
    SearchOutlined, LoadingOutlined, CloseOutlined, CheckOutlined,
    DownOutlined, UpOutlined, LeftOutlined, RightOutlined,
    PlusOutlined, MinusOutlined, WarningOutlined, InfoCircleOutlined,
    EditOutlined, DeleteOutlined, EyeOutlined, HomeOutlined,
    UserOutlined, SettingOutlined,
  ]

  it.each(allIcons)('icon %# renders svg with correct attributes', (IconComp) => {
    const wrapper = mount(IconComp)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
    expect(svg.attributes('width')).toBe('1em')
    expect(svg.attributes('height')).toBe('1em')
    expect(svg.attributes('fill')).toBe('currentColor')
    expect(svg.attributes('focusable')).toBe('false')
  })
})
