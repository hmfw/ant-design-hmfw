import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Input, InputPassword, TextArea, InputSearch } from '../Input'

describe('Input', () => {
  it('renders correctly', () => {
    const wrapper = mount(Input)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('input').classes()).toContain('hmfw-input')
  })

  it('renders with placeholder', () => {
    const wrapper = mount(Input, { props: { placeholder: 'Enter text' } })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Enter text')
  })

  it('renders disabled state', () => {
    const wrapper = mount(Input, { props: { disabled: true } })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('applies large size class', () => {
    const wrapper = mount(Input, { props: { size: 'large' } })
    expect(wrapper.find('input').classes()).toContain('hmfw-input-lg')
  })

  it('applies small size class', () => {
    const wrapper = mount(Input, { props: { size: 'small' } })
    expect(wrapper.find('input').classes()).toContain('hmfw-input-sm')
  })

  it('applies error status class', () => {
    const wrapper = mount(Input, { props: { status: 'error' } })
    expect(wrapper.find('input').classes()).toContain('hmfw-input-status-error')
  })

  it('emits update:value on input', async () => {
    const wrapper = mount(Input)
    await wrapper.find('input').setValue('hello')
    expect(wrapper.emitted('update:value')).toBeTruthy()
    expect(wrapper.emitted('update:value')![0]).toEqual(['hello'])
  })

  it('renders prefix slot in affix wrapper', () => {
    const wrapper = mount(Input, { slots: { prefix: '<span>@</span>' } })
    expect(wrapper.find('.hmfw-input-affix-wrapper').exists()).toBe(true)
    expect(wrapper.find('.hmfw-input-prefix span').text()).toBe('@')
  })

  it('renders clear button when allowClear and has value', async () => {
    const wrapper = mount(Input, { props: { allowClear: true, value: 'text' } })
    expect(wrapper.find('.hmfw-input-clear-icon').exists()).toBe(true)
  })

  it('emits pressEnter on Enter key', async () => {
    const wrapper = mount(Input)
    await wrapper.find('input').trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('pressEnter')).toBeTruthy()
  })
})

describe('InputPassword', () => {
  it('renders password input', () => {
    const wrapper = mount(InputPassword)
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })

  it('toggles visibility', async () => {
    const wrapper = mount(InputPassword)
    expect(wrapper.find('input').attributes('type')).toBe('password')
    await wrapper.find('.hmfw-input-suffix').trigger('click')
    expect(wrapper.find('input').attributes('type')).toBe('text')
  })
})

describe('TextArea', () => {
  it('renders textarea', () => {
    const wrapper = mount(TextArea)
    expect(wrapper.find('textarea').exists()).toBe(true)
    expect(wrapper.find('textarea').classes()).toContain('hmfw-input')
  })

  it('renders with rows', () => {
    const wrapper = mount(TextArea, { props: { rows: 6 } })
    expect(wrapper.find('textarea').attributes('rows')).toBe('6')
  })

  it('emits update:value on input', async () => {
    const wrapper = mount(TextArea)
    await wrapper.find('textarea').setValue('hello')
    expect(wrapper.emitted('update:value')).toBeTruthy()
  })
})

describe('InputSearch', () => {
  it('renders search input', () => {
    const wrapper = mount(InputSearch)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('.hmfw-input-search-button').exists()).toBe(true)
  })

  it('emits search on button click', async () => {
    const wrapper = mount(InputSearch, { props: { value: 'query' } })
    await wrapper.find('.hmfw-input-search-button').trigger('click')
    expect(wrapper.emitted('search')).toBeTruthy()
  })
})
