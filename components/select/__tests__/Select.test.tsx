import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Select } from '../Select'
import { nextTick } from 'vue'

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange', disabled: true },
]

describe('Select', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('renders selector', () => {
    const wrapper = mount(Select, { props: { options }, attachTo: document.body })
    expect(wrapper.find('.hmfw-select-selector').exists()).toBe(true)
    wrapper.unmount()
  })

  it('shows placeholder', () => {
    const wrapper = mount(Select, {
      props: { options, placeholder: 'Choose one' },
      attachTo: document.body,
    })
    expect(wrapper.find('.hmfw-select-selection-placeholder').text()).toBe('Choose one')
    wrapper.unmount()
  })

  it('opens dropdown on click', async () => {
    const wrapper = mount(Select, { props: { options }, attachTo: document.body })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    expect(document.querySelector('.hmfw-select-dropdown')).not.toBeNull()
    wrapper.unmount()
  })

  it('selects an option and emits value and option', async () => {
    const wrapper = mount(Select, { props: { options }, attachTo: document.body })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const items = document.querySelectorAll('.hmfw-select-item-option')
    ;(items[0] as HTMLElement).click()
    await nextTick()
    const changeEvent = wrapper.emitted('change')
    expect(changeEvent).toBeTruthy()
    expect(changeEvent?.[0][0]).toBe('apple')
    expect(changeEvent?.[0][1]).toEqual(options[0])
    wrapper.unmount()
  })

  it('does not select disabled option', async () => {
    const wrapper = mount(Select, { props: { options }, attachTo: document.body })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const items = document.querySelectorAll('.hmfw-select-item-option')
    ;(items[2] as HTMLElement).click()
    await nextTick()
    expect(wrapper.emitted('change')).toBeFalsy()
    wrapper.unmount()
  })

  it('shows selected value', () => {
    const wrapper = mount(Select, {
      props: { options, value: 'apple' },
      attachTo: document.body,
    })
    expect(wrapper.find('.hmfw-select-selection-item').text()).toBe('Apple')
    wrapper.unmount()
  })

  it('supports multiple mode', async () => {
    const wrapper = mount(Select, {
      props: { options, mode: 'multiple' },
      attachTo: document.body,
    })
    expect(wrapper.classes()).toContain('hmfw-select-multiple')
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const items = document.querySelectorAll('.hmfw-select-item-option')
    ;(items[0] as HTMLElement).click()
    await nextTick()
    ;(items[1] as HTMLElement).click()
    await nextTick()
    const lastChange = wrapper.emitted('change')
    expect(lastChange).toBeTruthy()
    expect(lastChange?.[1][0]).toEqual(['apple', 'banana'])
    expect(lastChange?.[1][1]).toEqual([options[0], options[1]])
    wrapper.unmount()
  })

  it('clears value when allowClear clicked', async () => {
    const wrapper = mount(Select, {
      props: { options, value: 'apple', allowClear: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-clear').trigger('click')
    expect(wrapper.emitted('clear')).toBeTruthy()
    wrapper.unmount()
  })

  it('is disabled', () => {
    const wrapper = mount(Select, { props: { options, disabled: true }, attachTo: document.body })
    expect(wrapper.classes()).toContain('hmfw-select-disabled')
    wrapper.unmount()
  })

  it('shows size classes', () => {
    const small = mount(Select, { props: { options, size: 'small' }, attachTo: document.body })
    expect(small.classes()).toContain('hmfw-select-small')
    small.unmount()
    const large = mount(Select, { props: { options, size: 'large' }, attachTo: document.body })
    expect(large.classes()).toContain('hmfw-select-large')
    large.unmount()
  })

  it('supports labelInValue', async () => {
    const wrapper = mount(Select, {
      props: { options, labelInValue: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const items = document.querySelectorAll('.hmfw-select-item-option')
    ;(items[0] as HTMLElement).click()
    await nextTick()
    const changeEvent = wrapper.emitted('change')
    expect(changeEvent?.[0][0]).toEqual({ value: 'apple', label: 'Apple', key: 'apple' })
    wrapper.unmount()
  })

  it('supports maxCount in multiple mode', async () => {
    const wrapper = mount(Select, {
      props: { options, mode: 'multiple', maxCount: 2 },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const items = document.querySelectorAll('.hmfw-select-item-option')
    ;(items[0] as HTMLElement).click()
    await nextTick()
    ;(items[1] as HTMLElement).click()
    await nextTick()
    // Try to select third - should be blocked
    ;(items[2] as HTMLElement).click()
    await nextTick()
    const lastChange = wrapper.emitted('change')
    expect(lastChange?.[lastChange.length - 1][0]).toEqual(['apple', 'banana'])
    wrapper.unmount()
  })

  it('supports tags mode with tokenSeparators', async () => {
    const wrapper = mount(Select, {
      props: { options: [], mode: 'tags', tokenSeparators: [','], showSearch: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const input = document.querySelector('.hmfw-select-selection-search-input') as HTMLInputElement
    expect(input).not.toBeNull()
    input.value = 'tag1,tag2'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()
    const changeEvent = wrapper.emitted('change')
    expect(changeEvent?.[0][0]).toEqual(['tag1', 'tag2'])
    wrapper.unmount()
  })

  it('supports OptGroup', async () => {
    const groupOptions = [
      {
        label: 'Fruits',
        options: [
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
        ],
      },
      {
        label: 'Vegetables',
        options: [{ label: 'Carrot', value: 'carrot' }],
      },
    ]
    const wrapper = mount(Select, {
      props: { options: groupOptions },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    expect(document.querySelectorAll('.hmfw-select-item-group').length).toBe(2)
    expect(document.querySelectorAll('.hmfw-select-item-group-label')[0].textContent).toBe('Fruits')
    wrapper.unmount()
  })

  it('exposes focus and blur methods', () => {
    const wrapper = mount(Select, { props: { options }, attachTo: document.body })
    expect(wrapper.vm.focus).toBeDefined()
    expect(wrapper.vm.blur).toBeDefined()
    wrapper.unmount()
  })

  it('supports keyboard navigation', async () => {
    const wrapper = mount(Select, { props: { options }, attachTo: document.body })
    const selector = wrapper.find('.hmfw-select-selector')
    await selector.trigger('keydown', { key: 'ArrowDown' })
    await nextTick()
    expect(document.querySelector('.hmfw-select-dropdown')).not.toBeNull()
    wrapper.unmount()
  })
})
