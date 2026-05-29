import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Cascader } from '../Cascader'

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖' },
        ],
      },
      { value: 'ningbo', label: '宁波' },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      { value: 'nanjing', label: '南京' },
    ],
  },
]

describe('Cascader', () => {
  it('renders correctly', () => {
    const wrapper = mount(Cascader, { props: { options } })
    expect(wrapper.find('.hmfw-cascader').exists()).toBe(true)
  })

  it('shows placeholder', () => {
    const wrapper = mount(Cascader, { props: { options, placeholder: '请选择地区' } })
    expect(wrapper.find('.hmfw-cascader-selection-placeholder').text()).toBe('请选择地区')
  })

  it('disabled state', () => {
    const wrapper = mount(Cascader, { props: { options, disabled: true } })
    expect(wrapper.find('.hmfw-cascader-disabled').exists()).toBe(true)
  })

  it('small size', () => {
    const wrapper = mount(Cascader, { props: { options, size: 'small' } })
    expect(wrapper.find('.hmfw-cascader-small').exists()).toBe(true)
  })

  it('large size', () => {
    const wrapper = mount(Cascader, { props: { options, size: 'large' } })
    expect(wrapper.find('.hmfw-cascader-large').exists()).toBe(true)
  })

  it('error status', () => {
    const wrapper = mount(Cascader, { props: { options, status: 'error' } })
    expect(wrapper.find('.hmfw-cascader-status-error').exists()).toBe(true)
  })

  it('displays value labels', () => {
    const wrapper = mount(Cascader, {
      props: { options, value: ['zhejiang', 'hangzhou', 'xihu'] },
    })
    expect(wrapper.find('.hmfw-cascader-selection-item').text()).toBe('浙江 / 杭州 / 西湖')
  })

  it('custom displayRender', () => {
    const wrapper = mount(Cascader, {
      props: {
        options,
        value: ['zhejiang', 'hangzhou'],
        displayRender: (labels: string[]) => labels.join(' > '),
      },
    })
    expect(wrapper.find('.hmfw-cascader-selection-item').text()).toBe('浙江 > 杭州')
  })

  it('opens dropdown on click', async () => {
    const wrapper = mount(Cascader, { props: { options }, attachTo: document.body })
    await wrapper.find('.hmfw-cascader').trigger('click')
    expect(wrapper.find('.hmfw-cascader-open').exists()).toBe(true)
    wrapper.unmount()
  })

  it('shows columns when open', async () => {
    const wrapper = mount(Cascader, { props: { options }, attachTo: document.body })
    await wrapper.find('.hmfw-cascader').trigger('click')
    expect(document.querySelector('.hmfw-cascader-menus')).not.toBeNull()
    wrapper.unmount()
  })

  it('shows clear button when value set', () => {
    const wrapper = mount(Cascader, {
      props: { options, value: ['zhejiang'], allowClear: true },
    })
    expect(wrapper.find('.hmfw-cascader-clear').exists()).toBe(true)
  })

  it('no clear when allowClear=false', () => {
    const wrapper = mount(Cascader, {
      props: { options, value: ['zhejiang'], allowClear: false },
    })
    expect(wrapper.find('.hmfw-cascader-clear').exists()).toBe(false)
  })

  it('emits clear', async () => {
    const wrapper = mount(Cascader, {
      props: { options, value: ['zhejiang'], allowClear: true },
    })
    await wrapper.find('.hmfw-cascader-clear').trigger('mousedown')
    expect(wrapper.emitted('clear')).toBeTruthy()
  })

  it('custom fieldNames', () => {
    const customOptions = [{ id: 'a', name: '选项A', sub: [] }]
    const wrapper = mount(Cascader, {
      props: {
        options: customOptions as any,
        value: ['a'],
        fieldNames: { value: 'id', label: 'name', children: 'sub' },
      },
    })
    expect(wrapper.find('.hmfw-cascader-selection-item').text()).toBe('选项A')
  })
})
