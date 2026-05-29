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

  it('selects an option', async () => {
    const wrapper = mount(Select, { props: { options }, attachTo: document.body })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const items = document.querySelectorAll('.hmfw-select-item-option')
    ;(items[0] as HTMLElement).click()
    await nextTick()
    expect(wrapper.emitted('change')?.[0]).toEqual(['apple'])
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
})
