import { describe, it, expect, vi } from 'vitest'
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
})
