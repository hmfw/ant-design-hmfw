import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { Form, FormItem } from '../Form'
import { nextTick } from 'vue'

describe('Form', () => {
  it('renders form element', () => {
    const wrapper = mount(Form)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('applies layout class', () => {
    const vertical = mount(Form, { props: { layout: 'vertical' } })
    expect(vertical.find('form').classes()).toContain('hmfw-form-vertical')
    const inline = mount(Form, { props: { layout: 'inline' } })
    expect(inline.find('form').classes()).toContain('hmfw-form-inline')
  })

  it('emits finish on valid submit', async () => {
    const model = { name: 'Alice' }
    const rules = { name: [{ required: true, message: 'Required' }] }
    const wrapper = mount(Form, { props: { model, rules } })
    await wrapper.find('form').trigger('submit')
    await nextTick()
    expect(wrapper.emitted('finish')).toBeTruthy()
  })

  it('emits finishFailed on invalid submit', async () => {
    const model = { name: '' }
    const rules = { name: [{ required: true, message: 'Required' }] }
    const wrapper = mount(Form, { props: { model, rules } })
    await wrapper.find('form').trigger('submit')
    await nextTick()
    expect(wrapper.emitted('finishFailed')).toBeTruthy()
  })
})

describe('FormItem', () => {
  it('renders label', () => {
    const wrapper = mount(FormItem, { props: { label: 'Username' } })
    expect(wrapper.find('.hmfw-form-item-label').text()).toContain('Username')
  })

  it('shows required asterisk', () => {
    const wrapper = mount(FormItem, { props: { label: 'Name', required: true } })
    expect(wrapper.find('.hmfw-form-item').classes()).toContain('hmfw-form-item-required')
  })

  it('shows error status', () => {
    const wrapper = mount(FormItem, {
      props: { label: 'Name', validateStatus: 'error', help: 'This field is required' },
    })
    expect(wrapper.find('.hmfw-form-item').classes()).toContain('hmfw-form-item-has-error')
    expect(wrapper.find('.hmfw-form-item-explain-error').text()).toBe('This field is required')
  })

  it('shows extra text', () => {
    const wrapper = mount(FormItem, {
      props: { label: 'Name', extra: 'Extra hint' },
    })
    expect(wrapper.find('.hmfw-form-item-extra').text()).toBe('Extra hint')
  })

  it('renders slot content', () => {
    const wrapper = mount(FormItem, {
      props: { label: 'Name' },
      slots: { default: '<input type="text" />' },
    })
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('is hidden when hidden=true', () => {
    const wrapper = mount(FormItem, {
      props: { label: 'Name', hidden: true },
      slots: { default: '<input />' },
    })
    expect(wrapper.find('div').attributes('style')).toContain('display: none')
  })
})
