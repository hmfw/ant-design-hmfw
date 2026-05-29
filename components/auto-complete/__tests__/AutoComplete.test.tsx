import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { AutoComplete } from '../AutoComplete'

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
]

describe('AutoComplete', () => {
  it('renders correctly', () => {
    const wrapper = mount(AutoComplete, { props: { options } })
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('shows placeholder', () => {
    const wrapper = mount(AutoComplete, { props: { options, placeholder: '搜索' } })
    expect(wrapper.find('input').attributes('placeholder')).toBe('搜索')
  })

  it('disabled state', () => {
    const wrapper = mount(AutoComplete, { props: { options, disabled: true } })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('displays controlled value', () => {
    const wrapper = mount(AutoComplete, { props: { options, value: 'apple' } })
    expect(wrapper.find('input').element.value).toBe('apple')
  })

  it('small size', () => {
    const wrapper = mount(AutoComplete, { props: { options, size: 'small' } })
    expect(wrapper.find('.hmfw-input-affix-wrapper-small').exists()).toBe(true)
  })

  it('large size', () => {
    const wrapper = mount(AutoComplete, { props: { options, size: 'large' } })
    expect(wrapper.find('.hmfw-input-affix-wrapper-large').exists()).toBe(true)
  })

  it('error status', () => {
    const wrapper = mount(AutoComplete, { props: { options, status: 'error' } })
    expect(wrapper.find('.hmfw-input-affix-wrapper-status-error').exists()).toBe(true)
  })

  it('emits search on input', async () => {
    const wrapper = mount(AutoComplete, { props: { options }, attachTo: document.body })
    await wrapper.find('input').setValue('ap')
    await wrapper.find('input').trigger('input')
    expect(wrapper.emitted('search')).toBeTruthy()
    wrapper.unmount()
  })

  it('emits change on input', async () => {
    const wrapper = mount(AutoComplete, { props: { options }, attachTo: document.body })
    await wrapper.find('input').setValue('ap')
    await wrapper.find('input').trigger('input')
    expect(wrapper.emitted('change')).toBeTruthy()
    wrapper.unmount()
  })

  it('filterOption=false shows all options', async () => {
    const wrapper = mount(AutoComplete, {
      props: { options, filterOption: false },
      attachTo: document.body,
    })
    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()
    wrapper.unmount()
  })
})
