import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { Input, InputPassword, TextArea, InputSearch } from '../Input'
import { nextTick } from 'vue'

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

  it('renders prefix prop in affix wrapper', () => {
    const wrapper = mount(Input, { props: { prefix: '@' } })
    expect(wrapper.find('.hmfw-input-affix-wrapper').exists()).toBe(true)
    expect(wrapper.find('.hmfw-input-prefix').text()).toBe('@')
  })

  it('renders clear button when allowClear and has value', async () => {
    const wrapper = mount(Input, { props: { allowClear: true, value: 'text' } })
    expect(wrapper.find('.hmfw-input-clear-icon').exists()).toBe(true)
  })

  it('clears value when clear button clicked', async () => {
    const wrapper = mount(Input, { props: { allowClear: true, value: 'text' } })
    await wrapper.find('.hmfw-input-clear-icon').trigger('click')
    expect(wrapper.emitted('update:value')).toBeTruthy()
    expect(wrapper.emitted('update:value')![0]).toEqual([''])
    expect(wrapper.emitted('clear')).toBeTruthy()
  })

  it('emits pressEnter on Enter key', async () => {
    const wrapper = mount(Input)
    await wrapper.find('input').trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('pressEnter')).toBeTruthy()
  })

  it('shows count when showCount is true', () => {
    const wrapper = mount(Input, { props: { showCount: true, value: 'hello' } })
    expect(wrapper.find('.hmfw-input-show-count-suffix').text()).toBe('5')
  })

  it('shows count with maxLength', () => {
    const wrapper = mount(Input, { props: { showCount: true, value: 'hello', maxLength: 10 } })
    expect(wrapper.find('.hmfw-input-show-count-suffix').text()).toBe('5 / 10')
  })

  it('exposes focus and blur methods', () => {
    const wrapper = mount(Input)
    const vm = wrapper.vm as any
    expect(vm.focus).toBeDefined()
    expect(vm.blur).toBeDefined()
  })

  it('forwards id prop to input', () => {
    const wrapper = mount(Input, { props: { id: 'test-input' } })
    expect(wrapper.find('input').attributes('id')).toBe('test-input')
  })

  it('applies rootClassName', () => {
    const wrapper = mount(Input, { props: { prefix: '@', rootClassName: 'custom-class' } })
    expect(wrapper.find('.hmfw-input-affix-wrapper').classes()).toContain('custom-class')
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
    await wrapper.find('.hmfw-input-password-icon').trigger('click')
    expect(wrapper.find('input').attributes('type')).toBe('text')
  })

  it('supports visibilityToggle as false', () => {
    const wrapper = mount(InputPassword, { props: { visibilityToggle: false } })
    expect(wrapper.find('.hmfw-input-password-icon').exists()).toBe(false)
  })

  it('supports controlled visibility', async () => {
    const onVisibleChange = vi.fn()
    const wrapper = mount(InputPassword, {
      props: { visibilityToggle: { visible: false, onVisibleChange } },
    })
    expect(wrapper.find('input').attributes('type')).toBe('password')
    await wrapper.find('.hmfw-input-password-icon').trigger('click')
    expect(onVisibleChange).toHaveBeenCalledWith(true)
  })

  it('supports custom iconRender', () => {
    const wrapper = mount(InputPassword, {
      props: { iconRender: (visible: boolean) => (visible ? 'SHOW' : 'HIDE') },
    })
    expect(wrapper.find('.hmfw-input-password-icon').text()).toContain('HIDE')
  })

  it('exposes focus and blur methods', () => {
    const wrapper = mount(InputPassword)
    const vm = wrapper.vm as any
    expect(vm.focus).toBeDefined()
    expect(vm.blur).toBeDefined()
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

  it('shows count when showCount is true', () => {
    const wrapper = mount(TextArea, { props: { showCount: true, value: 'hello' } })
    expect(wrapper.find('.hmfw-input-show-count-suffix').text()).toBe('5')
  })

  it('supports allowClear', async () => {
    const wrapper = mount(TextArea, { props: { allowClear: true, value: 'text' } })
    expect(wrapper.find('.hmfw-input-clear-icon').exists()).toBe(true)
    await wrapper.find('.hmfw-input-clear-icon').trigger('click')
    expect(wrapper.emitted('clear')).toBeTruthy()
  })

  it('exposes focus and blur methods', () => {
    const wrapper = mount(TextArea)
    const vm = wrapper.vm as any
    expect(vm.focus).toBeDefined()
    expect(vm.blur).toBeDefined()
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
    expect(wrapper.emitted('search')![0][0]).toBe('query')
  })

  it('emits search with info.source on button click', async () => {
    const wrapper = mount(InputSearch, { props: { value: 'query' } })
    await wrapper.find('.hmfw-input-search-button').trigger('click')
    const searchEvent = wrapper.emitted('search')![0]
    expect(searchEvent[2]).toEqual({ source: 'input' })
  })

  it('shows loading icon when loading', () => {
    const wrapper = mount(InputSearch, { props: { loading: true } })
    expect(wrapper.find('.hmfw-icon-loading').exists()).toBe(true)
  })

  it('disables button when loading', () => {
    const wrapper = mount(InputSearch, { props: { loading: true } })
    expect(wrapper.find('.hmfw-input-search-button').attributes('disabled')).toBeDefined()
  })

  it('supports custom searchIcon', () => {
    const wrapper = mount(InputSearch, { props: { searchIcon: '🔎' } })
    expect(wrapper.find('.hmfw-input-search-button').text()).toContain('🔎')
  })

  it('exposes focus and blur methods', () => {
    const wrapper = mount(InputSearch)
    const vm = wrapper.vm as any
    expect(vm.focus).toBeDefined()
    expect(vm.blur).toBeDefined()
  })
})
