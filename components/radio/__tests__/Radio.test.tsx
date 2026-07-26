import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { Radio, RadioGroup, RadioButton } from '../Radio'

describe('Radio', () => {
  it('renders correctly', () => {
    const wrapper = mount(Radio)
    expect(wrapper.find('input[type="radio"]').exists()).toBe(true)
  })

  it('renders label slot', () => {
    const wrapper = mount(Radio, { slots: { default: 'Option A' } })
    expect(wrapper.text()).toContain('Option A')
  })

  it('is unchecked by default', () => {
    const wrapper = mount(Radio)
    expect(wrapper.find('input').element.checked).toBe(false)
  })

  it('respects defaultChecked', () => {
    const wrapper = mount(Radio, { props: { defaultChecked: true } })
    expect(wrapper.find('input').element.checked).toBe(true)
  })

  it('respects controlled checked prop', () => {
    const wrapper = mount(Radio, { props: { checked: true } })
    expect(wrapper.find('input').element.checked).toBe(true)
  })

  it('emits change on click', async () => {
    const wrapper = mount(Radio, { props: { value: 'test' } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('change')).toBeTruthy()
    const event = wrapper.emitted('change')![0][0] as any
    expect(event.target.value).toBe('test')
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(Radio, { props: { disabled: true } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('applies disabled class', () => {
    const wrapper = mount(Radio, { props: { disabled: true } })
    expect(wrapper.classes()).toContain('hmfw-radio-wrapper-disabled')
  })

  it('supports name prop', () => {
    const wrapper = mount(Radio, { props: { name: 'test-radio' } })
    expect(wrapper.find('input').attributes('name')).toBe('test-radio')
  })

  it('supports id prop', () => {
    const wrapper = mount(Radio, { props: { id: 'test-id' } })
    expect(wrapper.find('input').attributes('id')).toBe('test-id')
  })

  it('id binds to native input element', () => {
    const wrapper = mount(Radio, { props: { id: 'custom-radio-id', value: 'test' } })
    const input = wrapper.find('input').element as HTMLInputElement
    expect(input.id).toBe('custom-radio-id')
  })
})

describe('RadioButton', () => {
  it('renders as button style', () => {
    const wrapper = mount(RadioButton, { slots: { default: 'Button' } })
    expect(wrapper.find('input[type="radio"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Button')
  })

  it('works with value prop', () => {
    const wrapper = mount(RadioButton, { props: { value: 'btn1' } })
    expect(wrapper.find('input').attributes('value')).toBe('btn1')
  })

  it('supports id prop', () => {
    const wrapper = mount(RadioButton, { props: { id: 'test-button-id' } })
    expect(wrapper.find('input').attributes('id')).toBe('test-button-id')
  })

  it('supports classNames for RadioButton', () => {
    const wrapper = mount(RadioButton, {
      props: {
        value: 'btn1',
        classNames: { root: 'custom-button', label: 'custom-label' },
      },
      slots: { default: 'Button' },
    })
    expect(wrapper.classes()).toContain('custom-button')
    expect(wrapper.find('.hmfw-radio-button-label').classes()).toContain('custom-label')
  })

  it('supports styles for RadioButton', () => {
    const wrapper = mount(RadioButton, {
      props: {
        value: 'btn1',
        styles: { root: { padding: '20px' }, label: { color: 'red' } },
      },
      slots: { default: 'Button' },
    })
    expect(wrapper.attributes('style')).toContain('padding: 20px')
    expect(wrapper.find('.hmfw-radio-button-label').attributes('style')).toContain('color: red')
  })
})

describe('RadioGroup', () => {
  it('renders options', () => {
    const wrapper = mount(RadioGroup, {
      props: { options: ['A', 'B', 'C'] },
    })
    expect(wrapper.findAll('input[type="radio"]').length).toBe(3)
  })

  it('reflects value prop', () => {
    const wrapper = mount(RadioGroup, {
      props: { options: ['A', 'B', 'C'], value: 'B' },
    })
    const inputs = wrapper.findAll('input[type="radio"]')
    expect(inputs[0].element.checked).toBe(false)
    expect(inputs[1].element.checked).toBe(true)
    expect(inputs[2].element.checked).toBe(false)
  })

  it('emits change when option selected', async () => {
    const wrapper = mount(RadioGroup, {
      props: { options: ['A', 'B'], value: 'A' },
    })
    await wrapper.findAll('input')[1].trigger('change')
    expect(wrapper.emitted('change')).toBeTruthy()
    const event = wrapper.emitted('change')![0][0] as any
    expect(event.target.value).toBe('B')
  })

  it('supports object options', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: [
          { label: 'Option A', value: 'a' },
          { label: 'Option B', value: 'b', disabled: true },
        ],
      },
    })
    expect(wrapper.text()).toContain('Option A')
    expect(wrapper.text()).toContain('Option B')
    const inputs = wrapper.findAll('input')
    expect(inputs[1].element.disabled).toBe(true)
  })

  it('applies buttonStyle class', () => {
    const wrapper = mount(RadioGroup, {
      props: { options: ['A', 'B'], buttonStyle: 'solid', optionType: 'button' },
    })
    expect(wrapper.classes()).toContain('hmfw-radio-group-solid')
  })

  it('applies size class', () => {
    const wrapper = mount(RadioGroup, {
      props: { options: ['A', 'B'], size: 'large', optionType: 'button' },
    })
    expect(wrapper.classes()).toContain('hmfw-radio-group-large')
  })

  it('applies block class', () => {
    const wrapper = mount(RadioGroup, {
      props: { options: ['A', 'B'], block: true },
    })
    expect(wrapper.classes()).toContain('hmfw-radio-group-block')
  })

  it('renders button type when optionType is button', () => {
    const wrapper = mount(RadioGroup, {
      props: { options: ['A', 'B'], optionType: 'button' },
    })
    expect(wrapper.findAll('.hmfw-radio-button-wrapper').length).toBe(2)
  })

  it('passes name to child radios', () => {
    const wrapper = mount(RadioGroup, {
      props: { options: ['A', 'B'], name: 'test-group' },
    })
    const inputs = wrapper.findAll('input')
    expect(inputs[0].attributes('name')).toBe('test-group')
    expect(inputs[1].attributes('name')).toBe('test-group')
  })

  it('passes id from options to radio inputs', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: [
          { label: 'A', value: 'a', id: 'radio-a' },
          { label: 'B', value: 'b', id: 'radio-b' },
        ],
      },
    })
    const inputs = wrapper.findAll('input')
    expect(inputs[0].attributes('id')).toBe('radio-a')
    expect(inputs[1].attributes('id')).toBe('radio-b')
  })

  it('disables all radios when disabled', () => {
    const wrapper = mount(RadioGroup, {
      props: { options: ['A', 'B'], disabled: true },
    })
    const inputs = wrapper.findAll('input')
    expect(inputs[0].element.disabled).toBe(true)
    expect(inputs[1].element.disabled).toBe(true)
  })

  it('supports defaultValue', () => {
    const wrapper = mount(RadioGroup, {
      props: { options: ['A', 'B', 'C'], defaultValue: 'B' },
    })
    const radios = wrapper.findAll('.hmfw-radio')
    expect(radios[1].classes()).toContain('hmfw-radio-checked')
  })

  it('works in uncontrolled mode', async () => {
    const wrapper = mount(RadioGroup, {
      props: { options: ['A', 'B'] },
    })
    await wrapper.findAll('input')[1].trigger('change')
    await nextTick()
    const radios = wrapper.findAll('.hmfw-radio')
    expect(radios[1].classes()).toContain('hmfw-radio-checked')
  })

  it('applies direction class', () => {
    const wrapper = mount(RadioGroup, {
      props: { options: ['A', 'B'], direction: 'vertical' },
    })
    expect(wrapper.classes()).toContain('hmfw-radio-group-vertical')
  })

  it('applies horizontal direction by default', () => {
    const wrapper = mount(RadioGroup, {
      props: { options: ['A', 'B'] },
    })
    expect(wrapper.classes()).toContain('hmfw-radio-group-horizontal')
  })

  it('supports classNames for RadioGroup', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: ['A', 'B'],
        classNames: { root: 'custom-group' },
      },
    })
    expect(wrapper.classes()).toContain('custom-group')
  })

  it('supports styles for RadioGroup', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: ['A', 'B'],
        styles: { root: { padding: '10px' } },
      },
    })
    expect(wrapper.attributes('style')).toContain('padding: 10px')
  })

  it('event has stopPropagation and preventDefault methods', async () => {
    const onChange = vi.fn()
    const wrapper = mount(Radio, {
      props: { value: 'test', onChange },
    })
    await wrapper.find('input').trigger('change')
    expect(onChange).toHaveBeenCalled()
    const event = onChange.mock.calls[0][0]
    expect(typeof event.stopPropagation).toBe('function')
    expect(typeof event.preventDefault).toBe('function')
  })
})
