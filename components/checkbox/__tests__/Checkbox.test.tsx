import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Checkbox } from '../Checkbox'
import { CheckboxGroup } from '../CheckboxGroup'
import { nextTick, ref } from 'vue'

describe('Checkbox', () => {
  it('renders correctly', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
  })

  it('renders label slot', () => {
    const wrapper = mount(Checkbox, { slots: { default: 'Option A' } })
    expect(wrapper.text()).toContain('Option A')
  })

  it('is unchecked by default', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.find('input').element.checked).toBe(false)
  })

  it('respects defaultChecked', () => {
    const wrapper = mount(Checkbox, { props: { defaultChecked: true } })
    expect(wrapper.find('input').element.checked).toBe(true)
  })

  it('respects controlled checked prop', () => {
    const wrapper = mount(Checkbox, { props: { checked: true } })
    expect(wrapper.find('input').element.checked).toBe(true)
  })

  it('emits change on click', async () => {
    const wrapper = mount(Checkbox)
    const input = wrapper.find('input').element as HTMLInputElement
    input.checked = true
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('change')).toBeTruthy()
  })

  it('emits update:checked', async () => {
    const wrapper = mount(Checkbox, { props: { checked: false } })
    const input = wrapper.find('input').element as HTMLInputElement
    input.checked = true
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:checked')![0]).toEqual([true])
  })

  it('emits change event with correct structure', async () => {
    const wrapper = mount(Checkbox, { props: { value: 'test' } })
    const input = wrapper.find('input').element as HTMLInputElement
    input.checked = true
    await wrapper.find('input').trigger('change')
    const changeEvent = wrapper.emitted('change')![0][0] as any
    expect(changeEvent.target.checked).toBe(true)
    expect(changeEvent.target.value).toBe('test')
    expect(changeEvent.nativeEvent).toBeDefined()
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(Checkbox, { props: { disabled: true } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('applies indeterminate class', () => {
    const wrapper = mount(Checkbox, { props: { indeterminate: true } })
    expect(wrapper.find('.hmfw-checkbox').classes()).toContain('hmfw-checkbox-indeterminate')
  })

  it('sets indeterminate property on input element', async () => {
    const wrapper = mount(Checkbox, { props: { indeterminate: true } })
    await nextTick()
    const input = wrapper.find('input').element as HTMLInputElement
    expect(input.indeterminate).toBe(true)
  })

  it('supports autoFocus', () => {
    const wrapper = mount(Checkbox, { props: { autoFocus: true }, attachTo: document.body })
    const input = wrapper.find('input').element
    expect(document.activeElement).toBe(input)
    wrapper.unmount()
  })

  it('supports name prop', () => {
    const wrapper = mount(Checkbox, { props: { name: 'test-name' } })
    expect(wrapper.find('input').attributes('name')).toBe('test-name')
  })

  it('supports id prop', () => {
    const wrapper = mount(Checkbox, { props: { id: 'test-id' } })
    expect(wrapper.find('input').attributes('id')).toBe('test-id')
  })

  it('supports title prop', () => {
    const wrapper = mount(Checkbox, { props: { title: 'test-title' } })
    expect(wrapper.find('input').attributes('title')).toBe('test-title')
  })

  it('supports tabIndex prop', () => {
    const wrapper = mount(Checkbox, { props: { tabIndex: 5 } })
    expect(wrapper.find('input').attributes('tabindex')).toBe('5')
  })

  it('supports required prop', () => {
    const wrapper = mount(Checkbox, { props: { required: true } })
    expect(wrapper.find('input').attributes('required')).toBeDefined()
  })

  it('emits click event', async () => {
    const wrapper = mount(Checkbox)
    await wrapper.find('label').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('emits mouseenter and mouseleave events', async () => {
    const wrapper = mount(Checkbox)
    await wrapper.find('label').trigger('mouseenter')
    expect(wrapper.emitted('mouseenter')).toBeTruthy()
    await wrapper.find('label').trigger('mouseleave')
    expect(wrapper.emitted('mouseleave')).toBeTruthy()
  })

  it('emits focus and blur events', async () => {
    const wrapper = mount(Checkbox)
    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()
    await wrapper.find('input').trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
  })

  it('exposes input ref', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.vm.input).toBeDefined()
    expect(wrapper.vm.input).toBeInstanceOf(HTMLInputElement)
  })

  it('supports skipGroup prop - not controlled by group', async () => {
    const wrapper = mount({
      setup() {
        return () => (
          <CheckboxGroup value={['a']}>
            <Checkbox value="a" skipGroup>
              Skip Group
            </Checkbox>
          </CheckboxGroup>
        )
      },
    })
    const input = wrapper.find('input').element as HTMLInputElement
    // Even though group has value=['a'], skipGroup makes it independent
    expect(input.checked).toBe(false)
  })

  it('skipGroup allows independent v-model:checked', async () => {
    const wrapper = mount({
      setup() {
        const checked = ref(true)
        const groupValue = ref<string[]>([])
        return () => (
          <CheckboxGroup value={groupValue.value}>
            <Checkbox value="a" skipGroup checked={checked.value}>
              Independent
            </Checkbox>
          </CheckboxGroup>
        )
      },
    })
    const input = wrapper.find('input').element as HTMLInputElement
    expect(input.checked).toBe(true)
  })

  it('skipGroup does not register/unregister with group', async () => {
    const wrapper = mount({
      setup() {
        const groupValue = ref<string[]>([])
        return () => (
          <CheckboxGroup
            value={groupValue.value}
            onUpdate:value={(v: any) => {
              groupValue.value = v
            }}
          >
            <Checkbox value="a">Normal</Checkbox>
            <Checkbox value="b" skipGroup>
              Skip
            </Checkbox>
          </CheckboxGroup>
        )
      },
    })

    const inputs = wrapper.findAll('input')
    // Check the skipGroup checkbox
    ;(inputs[1].element as HTMLInputElement).checked = true
    await inputs[1].trigger('change')
    await nextTick()

    // Group value should not include 'b'
    const emitted = wrapper.findComponent(CheckboxGroup).emitted('update:value')
    expect(emitted).toBeFalsy() // skipGroup doesn't emit to group
  })
})

describe('CheckboxGroup', () => {
  it('renders options', () => {
    const wrapper = mount(CheckboxGroup, {
      props: { options: ['A', 'B', 'C'] },
    })
    expect(wrapper.findAll('input[type="checkbox"]').length).toBe(3)
  })

  it('renders object options', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        options: [
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
        ],
      },
    })
    expect(wrapper.text()).toContain('Apple')
    expect(wrapper.text()).toContain('Banana')
  })

  it('reflects value prop', () => {
    const wrapper = mount(CheckboxGroup, {
      props: { options: ['A', 'B', 'C'], value: ['A', 'C'] },
    })
    const inputs = wrapper.findAll('input[type="checkbox"]')
    expect(inputs[0].element.checked).toBe(true)
    expect(inputs[1].element.checked).toBe(false)
    expect(inputs[2].element.checked).toBe(true)
  })

  it('emits change when option toggled', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: { options: ['A', 'B'], value: [] },
    })
    const input = wrapper.findAll('input')[0].element as HTMLInputElement
    input.checked = true
    await wrapper.findAll('input')[0].trigger('change')
    expect(wrapper.emitted('change')).toBeTruthy()
  })

  it('supports name prop', () => {
    const wrapper = mount(CheckboxGroup, {
      props: { options: ['A', 'B'], name: 'test-group' },
    })
    const inputs = wrapper.findAll('input')
    inputs.forEach((input) => {
      expect(input.attributes('name')).toBe('test-group')
    })
  })

  it('supports disabled prop', () => {
    const wrapper = mount(CheckboxGroup, {
      props: { options: ['A', 'B'], disabled: true },
    })
    const inputs = wrapper.findAll('input')
    inputs.forEach((input) => {
      expect(input.attributes('disabled')).toBeDefined()
    })
  })

  it('option-level disabled overrides group disabled', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        options: [
          { label: 'A', value: 'a', disabled: false },
          { label: 'B', value: 'b' },
        ],
        disabled: true,
      },
    })
    const checkboxes = wrapper.findAllComponents(Checkbox)
    expect(checkboxes[0].props('disabled')).toBe(false)
    expect(checkboxes[1].props('disabled')).toBe(true)
  })

  it('supports style and className props', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        options: ['A'],
        style: { color: 'red' },
        className: 'custom-class',
      },
    })
    expect(wrapper.classes()).toContain('custom-class')
    expect(wrapper.attributes('style')).toContain('color')
  })

  it('supports option style and className', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        options: [{ label: 'A', value: 'a', style: { color: 'blue' }, className: 'opt-class' }],
      },
    })
    const checkbox = wrapper.find('.hmfw-checkbox-wrapper')
    expect(checkbox.classes()).toContain('opt-class')
  })

  it('supports option title, id, required', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        options: [{ label: 'A', value: 'a', title: 'Title A', id: 'id-a', required: true }],
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes('title')).toBe('Title A')
    expect(input.attributes('id')).toBe('id-a')
    expect(input.attributes('required')).toBeDefined()
  })

  it('renders children when no options provided', () => {
    const wrapper = mount(CheckboxGroup, {
      slots: {
        default: () => [<Checkbox value="a">A</Checkbox>, <Checkbox value="b">B</Checkbox>],
      },
    })
    expect(wrapper.findAll('input').length).toBe(2)
  })

  it('maintains value order based on registration', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: { options: ['A', 'B', 'C'] },
    })
    const inputs = wrapper.findAll('input')

    // Check C
    ;(inputs[2].element as HTMLInputElement).checked = true
    await inputs[2].trigger('change')
    await nextTick()

    // Check A
    ;(inputs[0].element as HTMLInputElement).checked = true
    await inputs[0].trigger('change')
    await nextTick()

    // Check B
    ;(inputs[1].element as HTMLInputElement).checked = true
    await inputs[1].trigger('change')
    await nextTick()

    const emitted = wrapper.emitted('change') as any[]
    // The order should be based on options order (A, B, C), not check order
    expect(emitted[emitted.length - 1][0]).toEqual(['A', 'B', 'C'])
  })
})
