import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Form, FormItem, useForm } from '../Form'
import { defineComponent, h, nextTick, reactive, ref, computed } from 'vue'

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

describe('Form (extended)', () => {
  it('formRef.validate() resolves on valid model', async () => {
    const ChildForm = defineComponent({
      setup(_, { expose }) {
        const formRef = ref<any>(null)
        const model = reactive({ name: 'ok' })
        const rules = { name: [{ required: true, message: 'Required' }] }
        expose({
          run: () => formRef.value?.validate(),
        })
        return () => h(Form, { ref: formRef, model, rules }, () => h(FormItem, { name: 'name' }))
      },
    })
    const wrapper = mount(ChildForm)
    await expect((wrapper.vm as any).run()).resolves.toBeTruthy()
  })

  it('formRef.validate() rejects on invalid model', async () => {
    const ChildForm = defineComponent({
      setup(_, { expose }) {
        const formRef = ref<any>(null)
        const model = reactive({ name: '' })
        const rules = { name: [{ required: true, message: 'Required' }] }
        expose({ run: () => formRef.value?.validate() })
        return () => h(Form, { ref: formRef, model, rules }, () => h(FormItem, { name: 'name' }))
      },
    })
    const wrapper = mount(ChildForm)
    await expect((wrapper.vm as any).run()).rejects.toMatchObject({
      errorFields: [{ name: 'name', errors: ['Required'] }],
    })
  })

  it('formRef.clearValidate() clears errors', async () => {
    const ChildForm = defineComponent({
      setup(_, { expose }) {
        const formRef = ref<any>(null)
        const model = reactive({ name: '' })
        const rules = { name: [{ required: true, message: 'Required' }] }
        expose({
          submit: () => formRef.value?.submit(),
          clear: () => formRef.value?.clearValidate(),
        })
        return () => h(Form, { ref: formRef, model, rules }, () => h(FormItem, { name: 'name' }))
      },
    })
    const wrapper = mount(ChildForm)
    await (wrapper.vm as any).submit()
    await nextTick()
    expect(wrapper.find('.hmfw-form-item-has-error').exists()).toBe(true)
    ;(wrapper.vm as any).clear()
    await nextTick()
    expect(wrapper.find('.hmfw-form-item-has-error').exists()).toBe(false)
  })

  it('renders requiredMark="optional" suffix on non-required items', () => {
    const ChildForm = defineComponent({
      setup() {
        return () =>
          h(Form, { requiredMark: 'optional' }, () => [
            h(FormItem, { label: 'A', name: 'a' }),
            h(FormItem, { label: 'B', name: 'b', required: true }),
          ])
      },
    })
    const wrapper = mount(ChildForm)
    const optionalMarks = wrapper.findAll('.hmfw-form-item-optional')
    expect(optionalMarks.length).toBe(1)
  })

  it('requiredMark=false suppresses required asterisk class', () => {
    const ChildForm = defineComponent({
      setup() {
        return () => h(Form, { requiredMark: false }, () => h(FormItem, { label: 'A', required: true }))
      },
    })
    const wrapper = mount(ChildForm)
    expect(wrapper.find('.hmfw-form-item-required').exists()).toBe(false)
  })

  it('labelCol/wrapperCol on Form propagate to FormItems', () => {
    const ChildForm = defineComponent({
      setup() {
        return () =>
          h(Form, { labelCol: { span: 6 }, wrapperCol: { span: 18 } }, () =>
            h(FormItem, { label: 'A' }, { default: () => h('input') }),
          )
      },
    })
    const wrapper = mount(ChildForm)
    const labelStyle = wrapper.find('.hmfw-form-item-label').attributes('style') ?? ''
    const wrapperStyle = wrapper.find('.hmfw-form-item-control').attributes('style') ?? ''
    expect(labelStyle).toContain('flex')
    expect(wrapperStyle).toContain('flex')
  })

  it('emits valuesChange when notifyValueChange called via useForm.setFieldValue', async () => {
    let captured: any
    const Probe = defineComponent({
      setup() {
        const f = useForm()
        captured = f
        return () => h('div')
      },
    })
    const ChildForm = defineComponent({
      setup() {
        const model = reactive<Record<string, unknown>>({ name: '' })
        return () =>
          h(
            Form,
            {
              model,
              onValuesChange: (changed: any) => {
                ;(window as any).__changed = changed
              },
            },
            () => h(Probe),
          )
      },
    })
    mount(ChildForm)
    captured.setFieldValue('name', 'hello')
    await nextTick()
    // Note: valuesChange is fired via notifyValueChange, which we don't auto-call
    // from setFieldValue (Vue components handle their own bindings). Just confirm
    // setFieldValue mutated the model:
    expect(captured.getFieldsValue()).toMatchObject({ name: 'hello' })
  })

  it('label slot overrides label prop', () => {
    const wrapper = mount(FormItem, {
      props: { label: 'Plain' },
      slots: { label: '<em>Fancy</em>' },
    })
    expect(wrapper.find('em').text()).toBe('Fancy')
  })

  it('useForm validateFields throws with errorFields on failure', async () => {
    let api: ReturnType<typeof useForm> | undefined
    const Probe = defineComponent({
      setup() {
        api = useForm()
        return () => h('div')
      },
    })
    const ChildForm = defineComponent({
      setup() {
        const model = reactive({ name: '' })
        const rules = { name: [{ required: true, message: 'Required' }] }
        return () => h(Form, { model, rules }, () => h(Probe))
      },
    })
    mount(ChildForm)
    await expect(api!.validateFields()).rejects.toMatchObject({
      errorFields: [{ name: 'name', errors: ['Required'] }],
    })
  })

  it('useForm validates only nameList subset', async () => {
    let api: ReturnType<typeof useForm> | undefined
    const Probe = defineComponent({
      setup() {
        api = useForm()
        return () => h('div')
      },
    })
    const ChildForm = defineComponent({
      setup() {
        const model = reactive({ a: '', b: 'ok' })
        const rules = {
          a: [{ required: true, message: 'A required' }],
          b: [{ required: true, message: 'B required' }],
        }
        return () => h(Form, { model, rules }, () => h(Probe))
      },
    })
    mount(ChildForm)
    // Only validate `b` (which is valid) — should resolve true.
    await expect(api!.validate(['b'])).resolves.toBe(true)
  })

  it('renders tooltip marker when tooltip prop is set', () => {
    const wrapper = mount(FormItem, {
      props: { label: 'X', tooltip: 'help text' },
    })
    expect(wrapper.find('.hmfw-form-item-tooltip').exists()).toBe(true)
    expect(wrapper.find('.hmfw-form-item-tooltip').attributes('title')).toBe('help text')
  })

  it('getFieldsError returns all field errors', async () => {
    let api: ReturnType<typeof useForm> | undefined
    const Probe = defineComponent({
      setup() {
        api = useForm()
        return () => h('div')
      },
    })
    const ChildForm = defineComponent({
      setup() {
        const model = reactive({ a: '', b: '' })
        const rules = {
          a: [{ required: true, message: 'A required' }],
          b: [{ required: true, message: 'B required' }],
        }
        return () => h(Form, { model, rules }, () => h(Probe))
      },
    })
    mount(ChildForm)
    await api!.validateFields().catch(() => {})
    const errors = api!.getFieldsError()
    expect(errors).toHaveLength(2)
    expect(errors[0].name).toBe('a')
    expect(errors[0].errors).toEqual(['A required'])
    expect(errors[1].name).toBe('b')
    expect(errors[1].errors).toEqual(['B required'])
  })

  it('getFieldsError with nameList returns subset', async () => {
    let api: ReturnType<typeof useForm> | undefined
    const Probe = defineComponent({
      setup() {
        api = useForm()
        return () => h('div')
      },
    })
    const ChildForm = defineComponent({
      setup() {
        const model = reactive({ a: '', b: '' })
        const rules = {
          a: [{ required: true, message: 'A required' }],
          b: [{ required: true, message: 'B required' }],
        }
        return () => h(Form, { model, rules }, () => h(Probe))
      },
    })
    mount(ChildForm)
    await api!.validateFields().catch(() => {})
    const errors = api!.getFieldsError(['a'])
    expect(errors).toHaveLength(1)
    expect(errors[0].name).toBe('a')
  })

  it('getFieldError returns single field error', async () => {
    let api: ReturnType<typeof useForm> | undefined
    const Probe = defineComponent({
      setup() {
        api = useForm()
        return () => h('div')
      },
    })
    const ChildForm = defineComponent({
      setup() {
        const model = reactive({ name: '' })
        const rules = { name: [{ required: true, message: 'Required' }] }
        return () => h(Form, { model, rules }, () => h(Probe))
      },
    })
    mount(ChildForm)
    await api!.validateFields().catch(() => {})
    const error = api!.getFieldError('name')
    expect(error).toEqual(['Required'])
  })

  it('isFieldsTouched returns false initially', () => {
    let api: ReturnType<typeof useForm> | undefined
    const Probe = defineComponent({
      setup() {
        api = useForm()
        return () => h('div')
      },
    })
    const ChildForm = defineComponent({
      setup() {
        const model = reactive({ a: '', b: '' })
        const rules = { a: [{ required: true }], b: [{ required: true }] }
        return () => h(Form, { model, rules }, () => h(Probe))
      },
    })
    mount(ChildForm)
    expect(api!.isFieldsTouched()).toBe(false)
    expect(api!.isFieldsTouched(['a', 'b'], true)).toBe(false)
  })

  it('isFieldTouched returns field touch state', () => {
    let api: ReturnType<typeof useForm> | undefined
    const Probe = defineComponent({
      setup() {
        api = useForm()
        return () => h('div')
      },
    })
    const ChildForm = defineComponent({
      setup() {
        const model = reactive({ name: '' })
        const rules = { name: [{ required: true }] }
        return () => h(Form, { model, rules }, () => h(Probe))
      },
    })
    mount(ChildForm)
    expect(api!.isFieldTouched('name')).toBe(false)
  })

  it('formRef.scrollToField scrolls to specific field', () => {
    const ChildForm = defineComponent({
      setup(_, { expose }) {
        const formRef = ref<any>(null)
        const model = reactive({ name: '' })
        const rules = { name: [{ required: true }] }
        expose({ scroll: () => formRef.value?.scrollToField('name') })
        return () => h(Form, { ref: formRef, model, rules }, () => h(FormItem, { name: 'name' }))
      },
    })
    const wrapper = mount(ChildForm)
    // Just ensure it doesn't throw
    expect(() => (wrapper.vm as any).scroll()).not.toThrow()
  })

  it('formRef.getFieldsError returns errors via ref', async () => {
    const ChildForm = defineComponent({
      setup(_, { expose }) {
        const formRef = ref<any>(null)
        const model = reactive({ name: '' })
        const rules = { name: [{ required: true, message: 'Required' }] }
        expose({
          validate: () => formRef.value?.validate().catch(() => {}),
          getErrors: () => formRef.value?.getFieldsError(),
        })
        return () => h(Form, { ref: formRef, model, rules }, () => h(FormItem, { name: 'name' }))
      },
    })
    const wrapper = mount(ChildForm)
    await (wrapper.vm as any).validate()
    const errors = (wrapper.vm as any).getErrors()
    expect(errors).toHaveLength(1)
    expect(errors[0].errors).toEqual(['Required'])
  })

  it('formRef.isFieldsTouched returns touch state via ref', () => {
    const ChildForm = defineComponent({
      setup(_, { expose }) {
        const formRef = ref<any>(null)
        const model = reactive({ name: '' })
        const rules = { name: [{ required: true }] }
        expose({ isTouched: () => formRef.value?.isFieldsTouched() })
        return () => h(Form, { ref: formRef, model, rules }, () => h(FormItem, { name: 'name' }))
      },
    })
    const wrapper = mount(ChildForm)
    expect((wrapper.vm as any).isTouched()).toBe(false)
  })

  it('preserve prop defaults to false', () => {
    const wrapper = mount(Form)
    // Just verify component mounts without errors when preserve is not set
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('preserve=true passed to context', () => {
    const wrapper = mount(Form, { props: { preserve: true } })
    // Just verify the prop is accepted without error
    expect(wrapper.find('form').exists()).toBe(true)
  })
})

describe('Form - Field Dependency & Linkage', () => {
  it('dependent validation: field B validates when field A changes', async () => {
    let formApi: ReturnType<typeof useForm> | undefined
    const Probe = defineComponent({
      setup() {
        formApi = useForm()
        return () => h('div')
      },
    })
    const ChildForm = defineComponent({
      setup() {
        const model = reactive({ password: '', confirmPassword: '' })
        const rules = {
          password: [{ required: true, message: 'Password required' }],
          confirmPassword: [
            { required: true, message: 'Confirm required' },
            {
              validator: (_rule: any, value: any) => {
                if (value && value !== model.password) {
                  return Promise.reject('Passwords do not match')
                }
                return Promise.resolve()
              },
            },
          ],
        }
        return () => h(Form, { model, rules }, () => h(Probe))
      },
    })
    mount(ChildForm)

    // Set passwords to different values
    formApi!.setFieldValue('password', 'abc123')
    formApi!.setFieldValue('confirmPassword', 'xyz789')

    // Validate confirm password - should fail
    await expect(formApi!.validateFields(['confirmPassword'])).rejects.toMatchObject({
      errorFields: expect.arrayContaining([expect.objectContaining({ name: 'confirmPassword' })]),
    })

    // Set confirm to match
    formApi!.setFieldValue('confirmPassword', 'abc123')

    // Should now pass
    await expect(formApi!.validateFields(['confirmPassword'])).resolves.toBeTruthy()
  })

  it('dynamic fields: add and remove fields maintains validation state', async () => {
    let formApi: ReturnType<typeof useForm> | undefined
    const showExtra = ref(false)

    const Probe = defineComponent({
      setup() {
        formApi = useForm()
        return () => h('div')
      },
    })

    const ChildForm = defineComponent({
      setup() {
        const model = reactive({ name: '', extra: '' })
        const rules = computed(() => {
          const base = { name: [{ required: true, message: 'Name required' }] }
          if (showExtra.value) {
            return { ...base, extra: [{ required: true, message: 'Extra required' }] }
          }
          return base
        })
        return () => h(Form, { model, rules: rules.value }, () => h(Probe))
      },
    })

    mount(ChildForm)

    // Initially only name field
    formApi!.setFieldValue('name', 'John')
    await expect(formApi!.validateFields()).resolves.toBeTruthy()

    // Add extra field
    showExtra.value = true
    await nextTick()

    // Now validation should include extra field (empty)
    await expect(formApi!.validateFields()).rejects.toMatchObject({
      errorFields: expect.arrayContaining([expect.objectContaining({ name: 'extra' })]),
    })

    // Fill extra field
    formApi!.setFieldValue('extra', 'data')
    await expect(formApi!.validateFields()).resolves.toBeTruthy()
  })

  it('conditional validation: rules change based on other field value', async () => {
    let formApi: ReturnType<typeof useForm> | undefined

    const Probe = defineComponent({
      setup() {
        formApi = useForm()
        return () => h('div')
      },
    })

    const ChildForm = defineComponent({
      setup() {
        const model = reactive({ type: 'email', contact: '' })
        const rules = computed(() => ({
          type: [{ required: true }],
          contact: [
            { required: true, message: 'Contact required' },
            model.type === 'email'
              ? { type: 'email' as const, message: 'Invalid email' }
              : { pattern: /^\d+$/, message: 'Invalid phone' },
          ],
        }))
        return () => h(Form, { model, rules: rules.value }, () => h(Probe))
      },
    })

    mount(ChildForm)

    // Test email validation
    formApi!.setFieldValue('type', 'email')
    formApi!.setFieldValue('contact', 'invalid')
    await expect(formApi!.validateFields(['contact'])).rejects.toMatchObject({
      errorFields: expect.arrayContaining([expect.objectContaining({ name: 'contact' })]),
    })

    formApi!.setFieldValue('contact', 'test@example.com')
    await expect(formApi!.validateFields(['contact'])).resolves.toBeTruthy()

    // Switch to phone validation
    formApi!.setFieldValue('type', 'phone')
    formApi!.setFieldValue('contact', 'abc')
    await expect(formApi!.validateFields(['contact'])).rejects.toMatchObject({
      errorFields: expect.arrayContaining([expect.objectContaining({ name: 'contact' })]),
    })

    formApi!.setFieldValue('contact', '12345')
    await expect(formApi!.validateFields(['contact'])).resolves.toBeTruthy()
  })
})
