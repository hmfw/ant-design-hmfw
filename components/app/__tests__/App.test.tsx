import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { App } from '../App'
import { useApp } from '../context'

describe('App', () => {
  it('renders slot content', () => {
    const wrapper = mount(App, {
      slots: { default: '<div class="child">hello</div>' },
    })
    expect(wrapper.find('.child').exists()).toBe(true)
    expect(wrapper.find('.child').text()).toBe('hello')
  })

  it('provides useApp() with message and notification', () => {
    let appConfig: ReturnType<typeof useApp> | null = null

    const Consumer = defineComponent({
      setup() {
        appConfig = useApp()
        return () => null
      },
    })

    mount(App, {
      slots: { default: () => [<Consumer />] },
    })

    expect(appConfig).not.toBeNull()
    expect(typeof appConfig!.message.success).toBe('function')
    expect(typeof appConfig!.message.error).toBe('function')
    expect(typeof appConfig!.notification.open).toBe('function')
  })

  it('provides modal methods via useApp()', () => {
    let appConfig: ReturnType<typeof useApp> | null = null

    const Consumer = defineComponent({
      setup() {
        appConfig = useApp()
        return () => null
      },
    })

    mount(App, {
      slots: { default: () => [<Consumer />] },
    })

    expect(typeof appConfig!.modal.confirm).toBe('function')
    expect(typeof appConfig!.modal.info).toBe('function')
    expect(typeof appConfig!.modal.success).toBe('function')
    expect(typeof appConfig!.modal.warning).toBe('function')
    expect(typeof appConfig!.modal.error).toBe('function')
  })

  it('opens modal when modal.info() is called', async () => {
    let appConfig: ReturnType<typeof useApp> | null = null

    const Consumer = defineComponent({
      setup() {
        appConfig = useApp()
        return () => null
      },
    })

    const wrapper = mount(App, {
      slots: { default: () => [<Consumer />] },
      attachTo: document.body,
    })

    appConfig!.modal.info({ title: 'Test Info' })
    await wrapper.vm.$nextTick()

    expect(document.querySelector('.hmfw-modal')).not.toBeNull()
    wrapper.unmount()
  })

  it('modal.confirm() renders content and supports onOk callback', async () => {
    let appConfig: ReturnType<typeof useApp> | null = null
    const okResults: boolean[] = []

    const Consumer = defineComponent({
      setup() {
        appConfig = useApp()
        return () => null
      },
    })

    const wrapper = mount(App, {
      slots: { default: () => [<Consumer />] },
      attachTo: document.body,
    })

    appConfig!.modal.confirm({
      title: 'Confirm Title',
      content: 'Confirm Content',
      onOk: () => {
        okResults.push(true)
      },
    })
    await wrapper.vm.$nextTick()
    await new Promise((resolve) => setTimeout(resolve, 100))

    // 验证 content 渲染
    expect(document.body.textContent).toContain('Confirm Content')
    // 验证显示 confirm 图标
    expect(document.querySelector('.hmfw-modal-confirm')).not.toBeNull()

    // 点击确定按钮
    const buttons = document.querySelectorAll('.hmfw-modal-confirm-btns button')
    expect(buttons.length).toBeGreaterThan(0)
    const okButton = buttons[buttons.length - 1] as HTMLElement
    okButton.click()
    await new Promise((resolve) => setTimeout(resolve, 100))

    expect(okResults.length).toBe(1)
    expect(okResults[0]).toBe(true)
    wrapper.unmount()
  })

  it('modal methods return ModalFuncReturn with destroy and update', async () => {
    let appConfig: ReturnType<typeof useApp> | null = null

    const Consumer = defineComponent({
      setup() {
        appConfig = useApp()
        return () => null
      },
    })

    const wrapper = mount(App, {
      slots: { default: () => [<Consumer />] },
      attachTo: document.body,
    })

    const instance = appConfig!.modal.info({ title: 'Test' })

    expect(instance).toHaveProperty('destroy')
    expect(instance).toHaveProperty('update')
    expect(typeof instance.destroy).toBe('function')
    expect(typeof instance.update).toBe('function')

    instance.destroy()
    wrapper.unmount()
  })

  it('modal.info/success/error/warning show different icons', async () => {
    let appConfig: ReturnType<typeof useApp> | null = null

    const Consumer = defineComponent({
      setup() {
        appConfig = useApp()
        return () => null
      },
    })

    const wrapper = mount(App, {
      slots: { default: () => [<Consumer />] },
      attachTo: document.body,
    })

    // info 图标
    const infoInstance = appConfig!.modal.info({ title: 'Info' })
    await wrapper.vm.$nextTick()
    await new Promise((resolve) => setTimeout(resolve, 50))
    expect(document.querySelector('.hmfw-modal-confirm-info')).not.toBeNull()
    infoInstance.destroy()
    await new Promise((resolve) => setTimeout(resolve, 50))

    // success 图标
    const successInstance = appConfig!.modal.success({ title: 'Success' })
    await wrapper.vm.$nextTick()
    await new Promise((resolve) => setTimeout(resolve, 50))
    expect(document.querySelector('.hmfw-modal-confirm-success')).not.toBeNull()
    successInstance.destroy()

    wrapper.unmount()
  })

  it('multiple modal calls do not override each other', async () => {
    let appConfig: ReturnType<typeof useApp> | null = null

    const Consumer = defineComponent({
      setup() {
        appConfig = useApp()
        return () => null
      },
    })

    const wrapper = mount(App, {
      slots: { default: () => [<Consumer />] },
      attachTo: document.body,
    })

    appConfig!.modal.info({ title: 'First Modal', content: 'First Content' })
    appConfig!.modal.success({ title: 'Second Modal', content: 'Second Content' })
    await wrapper.vm.$nextTick()
    await new Promise((resolve) => setTimeout(resolve, 50))

    // 两个 modal 应该同时存在
    expect(document.body.textContent).toContain('First Content')
    expect(document.body.textContent).toContain('Second Content')

    wrapper.unmount()
  })

  it('useApp() returns default config outside App context', () => {
    const Consumer = defineComponent({
      setup() {
        const app = useApp()
        return () => <div data-has-message={String(!!app.message)} />
      },
    })

    const wrapper = mount(Consumer)
    expect(wrapper.find('[data-has-message="true"]').exists()).toBe(true)
  })

  it('renders with custom component prop', () => {
    const wrapper = mount(App, {
      props: { component: 'section' },
      slots: { default: '<div class="child">content</div>' },
    })
    expect(wrapper.element.tagName).toBe('SECTION')
    expect(wrapper.find('.child').text()).toBe('content')
  })

  it('renders without container when component is false', () => {
    const wrapper = mount(App, {
      props: { component: false },
      slots: { default: '<div class="child">content</div>' },
    })
    // component={false} 渲染为 Fragment，wrapper 本身是注释节点
    expect(wrapper.find('.child').exists()).toBe(true)
    expect(wrapper.find('.child').text()).toBe('content')
  })

  it('applies className and style props', () => {
    const wrapper = mount(App, {
      props: {
        className: 'custom-class',
        rootClassName: 'root-class',
        style: { color: 'red', fontSize: '16px' },
      },
      slots: { default: '<div>content</div>' },
    })
    expect(wrapper.classes()).toContain('custom-class')
    expect(wrapper.classes()).toContain('root-class')
    expect(wrapper.element.style.color).toBe('red')
    expect(wrapper.element.style.fontSize).toBe('16px')
  })

  it('does not apply style when component is false', () => {
    const wrapper = mount(App, {
      props: {
        component: false,
        className: 'should-not-apply',
        style: { color: 'red' },
      },
      slots: { default: '<div class="child">content</div>' },
    })
    // Fragment 不会有容器元素，className 不会应用
    const child = wrapper.find('.child')
    expect(child.exists()).toBe(true)
    expect(wrapper.classes()).not.toContain('should-not-apply')
  })
})
