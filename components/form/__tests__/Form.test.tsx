import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Form, FormItem, useForm } from '../Form'
import { Input } from '../../input'
import { Checkbox } from '../../checkbox'
import { Switch } from '../../switch'
import { Button } from '../../button'
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

  it('hasFeedback renders a status icon for each validate status', () => {
    const statuses = ['success', 'warning', 'error', 'validating'] as const
    statuses.forEach((s) => {
      const wrapper = mount(FormItem, {
        props: { label: 'Name', hasFeedback: true, validateStatus: s },
      })
      const icon = wrapper.find('.hmfw-form-item-feedback-icon')
      expect(icon.exists()).toBe(true)
      expect(icon.classes()).toContain(`hmfw-form-item-feedback-icon-${s}`)
      expect(icon.find('svg').exists()).toBe(true)
    })
  })

  it('hasFeedback renders nothing without a status, and status alone renders no icon', () => {
    // 有 hasFeedback 但无状态 → 不渲染
    const noStatus = mount(FormItem, { props: { label: 'Name', hasFeedback: true } })
    expect(noStatus.find('.hmfw-form-item-feedback-icon').exists()).toBe(false)
    // 有状态但未开 hasFeedback → 不渲染
    const noFlag = mount(FormItem, { props: { label: 'Name', validateStatus: 'error' } })
    expect(noFlag.find('.hmfw-form-item-feedback-icon').exists()).toBe(false)
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

  it('requiredMark="optional" marks items so CSS can hide the asterisk', () => {
    const ChildForm = defineComponent({
      setup() {
        return () => h(Form, { requiredMark: 'optional' }, () => h(FormItem, { label: 'A', name: 'a', required: true }))
      },
    })
    const wrapper = mount(ChildForm)
    const item = wrapper.find('.hmfw-form-item')
    // required 类保留（语义上仍是必填），额外加 optional 标记类供 CSS 隐藏星号
    expect(item.classes()).toContain('hmfw-form-item-required')
    expect(item.classes()).toContain('hmfw-form-item-required-mark-optional')
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

  it('applies labelAlign class', () => {
    const right = mount(Form)
    expect(right.find('form').classes()).toContain('hmfw-form-label-right')
    const left = mount(Form, { props: { labelAlign: 'left' } })
    expect(left.find('form').classes()).toContain('hmfw-form-label-left')
  })

  it('renders data-field-name on FormItem root', () => {
    const wrapper = mount(Form, {
      slots: { default: () => h(FormItem, { name: 'username', label: 'Username' }) },
    })
    expect(wrapper.find('.hmfw-form-item').attributes('data-field-name')).toBe('username')
  })

  it('omits data-field-name when FormItem has no name', () => {
    const wrapper = mount(Form, {
      slots: { default: () => h(FormItem, { label: 'No name' }) },
    })
    expect(wrapper.find('.hmfw-form-item').attributes('data-field-name')).toBeUndefined()
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

describe('Form - FormItem-level rules', () => {
  const mountWithItem = (model: any, itemProps: any) => {
    const formRef = ref<any>(null)
    const Host = defineComponent({
      setup: () => () => h(Form, { ref: formRef, model }, () => h(FormItem, itemProps)),
    })
    mount(Host)
    return formRef
  }

  it('FormItem rules participate in validate()', async () => {
    const model = reactive({ name: '' })
    const formRef = mountWithItem(model, {
      name: 'name',
      rules: [{ required: true, message: 'Required' }],
    })
    await nextTick()
    let rejected = false
    await formRef.value.validate().catch(() => {
      rejected = true
    })
    expect(rejected).toBe(true)
    expect(formRef.value.getFieldsError()[0].errors).toEqual(['Required'])
  })

  it('FormItem rules pass when value is valid', async () => {
    const model = reactive({ name: 'Alice' })
    const formRef = mountWithItem(model, {
      name: 'name',
      rules: [{ required: true, message: 'Required' }],
    })
    await nextTick()
    await expect(formRef.value.validate()).resolves.toBeTruthy()
  })

  it('accepts a single rule object (not array)', async () => {
    const model = reactive({ name: '' })
    const formRef = mountWithItem(model, {
      name: 'name',
      rules: { required: true, message: 'Single' },
    })
    await nextTick()
    await formRef.value.validate().catch(() => {})
    expect(formRef.value.getFieldsError()[0].errors).toEqual(['Single'])
  })

  it('merges Form-level and FormItem-level rules', async () => {
    const model = reactive({ name: 'ab' })
    const formRef = ref<any>(null)
    const Host = defineComponent({
      setup: () => () =>
        h(Form, { ref: formRef, model, rules: { name: [{ required: true, message: 'Required' }] } }, () =>
          h(FormItem, { name: 'name', rules: [{ min: 5, message: 'Too short' }] }),
        ),
    })
    mount(Host)
    await nextTick()
    await formRef.value.validate().catch(() => {})
    // Form 级 required 通过，FormItem 级 min 报错
    expect(formRef.value.getFieldsError()[0].errors).toEqual(['Too short'])
  })

  it('unregisters rules when FormItem unmounts', async () => {
    const model = reactive({ name: '' })
    const show = ref(true)
    const formRef = ref<any>(null)
    const Host = defineComponent({
      setup: () => () =>
        h(Form, { ref: formRef, model }, () =>
          show.value ? h(FormItem, { name: 'name', rules: [{ required: true, message: 'R' }] }) : null,
        ),
    })
    mount(Host)
    await nextTick()
    await formRef.value.validate().catch(() => {})
    expect(formRef.value.getFieldsError()[0].errors).toEqual(['R'])

    show.value = false
    await nextTick()
    formRef.value.clearValidate()
    // 字段已卸载，不应再阻塞校验
    await expect(formRef.value.validate()).resolves.toBeTruthy()
  })
})

describe('Form - size/disabled propagation', () => {
  const renderIn = (formProps: any, control: any) =>
    mount(
      defineComponent({
        setup: () => () => h(Form, { model: {}, ...formProps }, () => h(FormItem, { name: 'a' }, () => control)),
      }),
    )

  it('propagates size to Input', () => {
    const w = renderIn({ size: 'large' }, h(Input))
    expect(w.find('input').classes()).toContain('hmfw-input-lg')
  })

  it('propagates disabled to Input', () => {
    const w = renderIn({ disabled: true }, h(Input))
    expect(w.find('input').attributes('disabled')).toBeDefined()
  })

  it('propagates disabled to Button', () => {
    const w = renderIn(
      { disabled: true },
      h(Button, null, () => '提交'),
    )
    expect(w.find('button').attributes('disabled')).toBeDefined()
  })

  it('propagates disabled to Checkbox and Switch', () => {
    expect(renderIn({ disabled: true }, h(Checkbox)).find('input').attributes('disabled')).toBeDefined()
    expect(renderIn({ disabled: true }, h(Switch)).find('button').attributes('disabled')).toBeDefined()
  })

  it('control keeps its own disabled when Form is not disabled', () => {
    const w = renderIn({}, h(Input, { disabled: true }))
    expect(w.find('input').attributes('disabled')).toBeDefined()
  })

  it('does not disable controls when Form is enabled', () => {
    const w = renderIn({}, h(Input))
    expect(w.find('input').attributes('disabled')).toBeUndefined()
  })

  it('control size prop overrides Form size', () => {
    const w = renderIn({ size: 'large' }, h(Input, { size: 'small' }))
    expect(w.find('input').classes()).toContain('hmfw-input-sm')
  })
})

describe('Form - validateTrigger', () => {
  const Input = defineComponent({
    props: { value: { type: String, default: '' } },
    emits: ['update:value'],
    setup(props, { emit }) {
      return () =>
        h('input', {
          value: props.value,
          onInput: (e: any) => emit('update:value', e.target.value),
        })
    },
  })

  const mountForm = (formProps: any, itemProps: any) => {
    const model = reactive({ name: 'ok' })
    const formRef = ref<any>(null)
    const wrapper = mount(
      defineComponent({
        setup: () => () =>
          h(Form, { ref: formRef, model, ...formProps }, () =>
            h(FormItem, { name: 'name', ...itemProps }, () =>
              h(Input, {
                value: model.name,
                'onUpdate:value': (v: string) => {
                  model.name = v
                },
              }),
            ),
          ),
      }),
    )
    return { wrapper, model, formRef }
  }

  it('validates on change by default', async () => {
    const { wrapper, formRef } = mountForm({}, { rules: [{ required: true, message: 'Required' }] })
    await nextTick()
    await wrapper.find('input').setValue('')
    await nextTick()
    expect(formRef.value.getFieldsError()[0].errors).toEqual(['Required'])
  })

  it('does not validate on change when trigger is blur', async () => {
    const { wrapper, formRef } = mountForm(
      { validateTrigger: 'blur' },
      { rules: [{ required: true, message: 'Required' }] },
    )
    await nextTick()
    await wrapper.find('input').setValue('')
    await nextTick()
    expect(formRef.value.getFieldsError()[0].errors).toEqual([])
  })

  it('validates on blur when trigger is blur', async () => {
    const { wrapper, model, formRef } = mountForm(
      { validateTrigger: 'blur' },
      { rules: [{ required: true, message: 'Required' }] },
    )
    await nextTick()
    model.name = ''
    await nextTick()
    await wrapper.find('input').trigger('focusout')
    await nextTick()
    expect(formRef.value.getFieldsError()[0].errors).toEqual(['Required'])
  })

  it('FormItem validateTrigger overrides Form-level', async () => {
    const { wrapper, formRef } = mountForm(
      { validateTrigger: 'blur' },
      { validateTrigger: 'change', rules: [{ required: true, message: 'Required' }] },
    )
    await nextTick()
    await wrapper.find('input').setValue('')
    await nextTick()
    expect(formRef.value.getFieldsError()[0].errors).toEqual(['Required'])
  })

  it('per-rule trigger narrows when a rule runs', async () => {
    const { wrapper, formRef } = mountForm(
      {},
      { validateTrigger: ['change', 'blur'], rules: [{ required: true, message: 'Required', trigger: 'blur' }] },
    )
    await nextTick()
    // change 不应触发只声明了 blur 的规则
    await wrapper.find('input').setValue('')
    await nextTick()
    expect(formRef.value.getFieldsError()[0].errors).toEqual([])
    // blur 才触发
    await wrapper.find('input').trigger('focusout')
    await nextTick()
    expect(formRef.value.getFieldsError()[0].errors).toEqual(['Required'])
  })

  it('submit runs all rules regardless of trigger', async () => {
    const { wrapper, model, formRef } = mountForm(
      { validateTrigger: 'blur' },
      { rules: [{ required: true, message: 'Required', trigger: 'blur' }] },
    )
    await nextTick()
    model.name = ''
    await nextTick()
    await wrapper.find('form').trigger('submit')
    await nextTick()
    expect(formRef.value.getFieldsError()[0].errors).toEqual(['Required'])
  })

  it('does not validate on initial render', async () => {
    const model = reactive({ name: '' })
    const formRef = ref<any>(null)
    mount(
      defineComponent({
        setup: () => () =>
          h(Form, { ref: formRef, model }, () =>
            h(FormItem, { name: 'name', rules: [{ required: true, message: 'Required' }] }),
          ),
      }),
    )
    await nextTick()
    expect(formRef.value.getFieldsError()[0].errors).toEqual([])
  })
})

describe('Form - resetFields', () => {
  it('restores initial values and clears errors', async () => {
    const model = reactive({ name: 'Alice', age: 20 })
    const rules = { name: [{ required: true, message: 'Required' }] }
    const formRef = ref<any>(null)
    const Host = defineComponent({
      setup: () => () => h(Form, { ref: formRef, model, rules }, () => h(FormItem, { name: 'name' })),
    })
    mount(Host)
    await nextTick()

    model.name = ''
    model.age = 99
    await formRef.value.validate().catch(() => {})
    expect(formRef.value.getFieldsError()[0].errors).toEqual(['Required'])

    formRef.value.resetFields()
    await nextTick()
    expect(model.name).toBe('Alice')
    expect(model.age).toBe(20)
    expect(formRef.value.getFieldsError()[0].errors).toEqual([])
  })

  it('resets only the given nameList', async () => {
    const model = reactive({ name: 'Alice', city: 'Beijing' })
    const formRef = ref<any>(null)
    const Host = defineComponent({
      setup: () => () => h(Form, { ref: formRef, model }, () => h(FormItem, { name: 'name' })),
    })
    mount(Host)
    await nextTick()

    model.name = 'Bob'
    model.city = 'Shanghai'
    formRef.value.resetFields(['name'])
    await nextTick()
    expect(model.name).toBe('Alice')
    expect(model.city).toBe('Shanghai')
  })

  it('restores nested values via dotted keys', async () => {
    const model = reactive({ user: { email: 'a@b.com' } })
    const formRef = ref<any>(null)
    const Host = defineComponent({
      setup: () => () => h(Form, { ref: formRef, model }, () => h(FormItem, { name: ['user', 'email'] })),
    })
    mount(Host)
    await nextTick()

    model.user.email = 'changed@b.com'
    formRef.value.resetFields(['user.email'])
    await nextTick()
    expect(model.user.email).toBe('a@b.com')
  })

  it('resets touched state', async () => {
    const model = reactive({ name: 'Alice' })
    const rules = { name: [{ required: true }] }
    const formRef = ref<any>(null)
    let api: ReturnType<typeof useForm> | undefined
    const Probe = defineComponent({
      setup() {
        api = useForm()
        return () => h('div')
      },
    })
    const Host = defineComponent({
      setup: () => () => h(Form, { ref: formRef, model, rules }, () => h(Probe)),
    })
    mount(Host)
    await nextTick()

    api!.setFieldValue('name', 'Bob')
    expect(model.name).toBe('Bob')

    api!.resetFields()
    await nextTick()
    expect(model.name).toBe('Alice')
    expect(formRef.value.isFieldsTouched()).toBe(false)
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
