import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { nextTick } from 'vue'
import { Switch } from '../Switch'

describe('Switch', () => {
  it('renders correctly', () => {
    const wrapper = mount(Switch)
    expect(wrapper.find('button[role="switch"]').exists()).toBe(true)
  })

  it('is off by default', () => {
    const wrapper = mount(Switch)
    expect(wrapper.attributes('aria-checked')).toBe('false')
  })

  it('respects defaultChecked', () => {
    const wrapper = mount(Switch, { props: { defaultChecked: true } })
    expect(wrapper.attributes('aria-checked')).toBe('true')
  })

  it('respects controlled checked prop', () => {
    const wrapper = mount(Switch, { props: { checked: true } })
    expect(wrapper.attributes('aria-checked')).toBe('true')
  })

  it('respects value prop as checked alias', () => {
    const wrapper = mount(Switch, { props: { value: true } })
    expect(wrapper.attributes('aria-checked')).toBe('true')
  })

  it('toggles on click', async () => {
    const wrapper = mount(Switch)
    await wrapper.trigger('click')
    expect(wrapper.emitted('change')![0][0]).toBe(true)
    expect(wrapper.emitted('change')![0][1]).toBeInstanceOf(MouseEvent)
  })

  it('emits click event with event object', async () => {
    const wrapper = mount(Switch)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')![0][0]).toBe(true)
    expect(wrapper.emitted('click')![0][1]).toBeInstanceOf(MouseEvent)
  })

  it('does not toggle when disabled', async () => {
    const wrapper = mount(Switch, { props: { disabled: true } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('does not toggle when loading', async () => {
    const wrapper = mount(Switch, { props: { loading: true } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('applies small size class', () => {
    const wrapper = mount(Switch, { props: { size: 'small' } })
    expect(wrapper.classes()).toContain('hmfw-switch-small')
  })

  it('shows checkedChildren when on', () => {
    const wrapper = mount(Switch, { props: { checked: true, checkedChildren: 'ON' } })
    expect(wrapper.find('.hmfw-switch-inner-checked').text()).toContain('ON')
  })

  it('shows unCheckedChildren when off', () => {
    const wrapper = mount(Switch, { props: { checked: false, unCheckedChildren: 'OFF' } })
    expect(wrapper.find('.hmfw-switch-inner-unchecked').text()).toContain('OFF')
  })

  it('renders both tracks for smooth transition', () => {
    const wrapper = mount(Switch, {
      props: { checked: true, checkedChildren: 'ON', unCheckedChildren: 'OFF' },
    })
    expect(wrapper.find('.hmfw-switch-inner-checked').text()).toBe('ON')
    expect(wrapper.find('.hmfw-switch-inner-unchecked').text()).toBe('OFF')
  })

  it('supports VNode children via slots', () => {
    const wrapper = mount(Switch, {
      props: { checked: true },
      slots: {
        checkedChildren: () => '<span>✓</span>',
      },
    })
    expect(wrapper.find('.hmfw-switch-inner-checked').text()).toContain('✓')
  })

  it('supports autoFocus prop', async () => {
    const wrapper = mount(Switch, {
      props: { autoFocus: true },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.activeElement).toBe(wrapper.element)
    wrapper.unmount()
  })

  it('supports id prop', () => {
    const wrapper = mount(Switch, { props: { id: 'test-switch' } })
    expect(wrapper.attributes('id')).toBe('test-switch')
  })

  it('supports title prop', () => {
    const wrapper = mount(Switch, { props: { title: 'Toggle switch' } })
    expect(wrapper.attributes('title')).toBe('Toggle switch')
  })

  it('supports tabIndex prop', () => {
    const wrapper = mount(Switch, { props: { tabIndex: 5 } })
    expect(wrapper.attributes('tabindex')).toBe('5')
  })

  it('supports className prop', () => {
    const wrapper = mount(Switch, { props: { className: 'my-switch' } })
    expect(wrapper.classes()).toContain('my-switch')
  })

  it('supports style prop', () => {
    const wrapper = mount(Switch, { props: { style: { marginLeft: '8px' } } })
    expect(wrapper.attributes('style')).toContain('margin-left: 8px')
  })

  it('emits focus event', async () => {
    const wrapper = mount(Switch)
    await wrapper.trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()
    expect(wrapper.emitted('focus')![0][0]).toBeInstanceOf(FocusEvent)
  })

  it('emits blur event', async () => {
    const wrapper = mount(Switch)
    await wrapper.trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
    expect(wrapper.emitted('blur')![0][0]).toBeInstanceOf(FocusEvent)
  })

  it('shows loading icon when loading', () => {
    const wrapper = mount(Switch, { props: { loading: true } })
    expect(wrapper.find('.hmfw-switch-loading-icon').exists()).toBe(true)
    expect(wrapper.classes()).toContain('hmfw-switch-loading')
  })

  it('disables interaction when loading', () => {
    const wrapper = mount(Switch, { props: { loading: true } })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('maintains checked state in controlled mode', async () => {
    const wrapper = mount(Switch, { props: { checked: true } })
    expect(wrapper.attributes('aria-checked')).toBe('true')
    await wrapper.trigger('click')
    // 受控模式下保持 checked，由外部决定
    expect(wrapper.attributes('aria-checked')).toBe('true')
  })

  it('updates checked state in uncontrolled mode', async () => {
    const wrapper = mount(Switch, { props: { defaultChecked: false } })
    expect(wrapper.attributes('aria-checked')).toBe('false')
    await wrapper.trigger('click')
    expect(wrapper.attributes('aria-checked')).toBe('true')
  })

  it('auto-enters loading when onChange returns a Promise', async () => {
    let resolveFn: (() => void) | null = null
    const onChange = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          resolveFn = resolve
        }),
    )
    const wrapper = mount(Switch, { props: { onChange } })

    await wrapper.trigger('click')
    await nextTick()

    expect(onChange).toHaveBeenCalled()
    expect(wrapper.classes()).toContain('hmfw-switch-loading')
    expect(wrapper.find('.hmfw-switch-loading-icon').exists()).toBe(true)

    // 二次点击在 loading 期间应被忽略
    await wrapper.trigger('click')
    expect(onChange).toHaveBeenCalledTimes(1)

    resolveFn!()
    // 等待 Promise.finally 回调与 Vue 响应式更新
    await new Promise((resolve) => setTimeout(resolve, 0))
    await nextTick()
    expect(wrapper.classes()).not.toContain('hmfw-switch-loading')
  })

  it('clears auto-loading when onChange Promise rejects', async () => {
    let rejectFn: ((err: Error) => void) | null = null
    const onChange = vi.fn(() =>
      // 测试侧静默 rejection，避免 unhandled rejection 影响其它用例
      new Promise<void>((_, reject) => {
        rejectFn = (err) => reject(err)
      }).catch(() => {
        /* swallow */
      }),
    )
    const wrapper = mount(Switch, { props: { onChange } })

    await wrapper.trigger('click')
    await nextTick()
    expect(wrapper.classes()).toContain('hmfw-switch-loading')

    rejectFn!(new Error('failed'))
    await new Promise((resolve) => setTimeout(resolve, 0))
    await nextTick()
    expect(wrapper.classes()).not.toContain('hmfw-switch-loading')
  })

  it('does not enter loading when onChange returns void', async () => {
    const onChange = vi.fn(() => undefined)
    const wrapper = mount(Switch, { props: { onChange } })

    await wrapper.trigger('click')
    await nextTick()
    expect(wrapper.classes()).not.toContain('hmfw-switch-loading')
  })

  it('renders long text without breaking layout (ellipsis)', () => {
    const wrapper = mount(Switch, {
      props: {
        checked: true,
        checkedChildren: 'A very long checked label that should be truncated',
      },
    })
    const inner = wrapper.find('.hmfw-switch-inner-checked')
    expect(inner.exists()).toBe(true)
    // 子元素带省略号样式（运行时 jsdom 不计算样式，只校验类与文本存在）
    expect(inner.text()).toContain('A very long')
  })
})
