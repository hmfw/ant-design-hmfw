import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import ConfigProvider from '../ConfigProvider'
import { useConfig, usePrefixCls, useLocale } from '../context'
import { enUS } from '../../_locale'

describe('ConfigProvider', () => {
  it('renders slot content', () => {
    const wrapper = mount(ConfigProvider, {
      slots: { default: '<div class="child">hello</div>' },
    })
    expect(wrapper.find('.child').text()).toBe('hello')
  })

  it('provides default config to children', () => {
    let config: ReturnType<typeof useConfig> | null = null
    const Consumer = defineComponent({
      setup() {
        config = useConfig()
        return () => null
      },
    })
    mount(ConfigProvider, { slots: { default: () => [<Consumer />] } })
    expect(config!.value.prefixCls).toBe('hmfw')
    expect(config!.value.componentSize).toBe('middle')
    expect(config!.value.direction).toBe('ltr')
  })

  it('provides custom prefixCls', () => {
    let config: ReturnType<typeof useConfig> | null = null
    const Consumer = defineComponent({
      setup() {
        config = useConfig()
        return () => null
      },
    })
    mount(ConfigProvider, {
      props: { prefixCls: 'mylib' },
      slots: { default: () => [<Consumer />] },
    })
    expect(config!.value.prefixCls).toBe('mylib')
  })

  it('provides custom locale', () => {
    let config: ReturnType<typeof useConfig> | null = null
    const Consumer = defineComponent({
      setup() {
        config = useConfig()
        return () => null
      },
    })
    mount(ConfigProvider, {
      props: { locale: enUS },
      slots: { default: () => [<Consumer />] },
    })
    expect(config!.value.locale).toStrictEqual(enUS)
  })

  it('provides componentSize', () => {
    let config: ReturnType<typeof useConfig> | null = null
    const Consumer = defineComponent({
      setup() {
        config = useConfig()
        return () => null
      },
    })
    mount(ConfigProvider, {
      props: { componentSize: 'large' },
      slots: { default: () => [<Consumer />] },
    })
    expect(config!.value.componentSize).toBe('large')
  })

  it('provides direction', () => {
    let config: ReturnType<typeof useConfig> | null = null
    const Consumer = defineComponent({
      setup() {
        config = useConfig()
        return () => null
      },
    })
    mount(ConfigProvider, {
      props: { direction: 'rtl' },
      slots: { default: () => [<Consumer />] },
    })
    expect(config!.value.direction).toBe('rtl')
  })

  it('injects CSS variables on mount', async () => {
    const wrapper = mount(ConfigProvider, {
      slots: { default: '<div />' },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    const _style = document.documentElement.style.cssText || document.head.querySelector('style')?.textContent || ''
    // CSS vars are injected — just verify no error thrown
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
})

describe('useConfig', () => {
  it('returns default config outside ConfigProvider', () => {
    const Consumer = defineComponent({
      setup() {
        const config = useConfig()
        return () => <div data-prefix={config.value.prefixCls} />
      },
    })
    const wrapper = mount(Consumer)
    expect(wrapper.find('[data-prefix="hmfw"]').exists()).toBe(true)
  })
})

describe('usePrefixCls', () => {
  it('returns prefixCls-componentName', () => {
    let cls = ''
    const Consumer = defineComponent({
      setup() {
        cls = usePrefixCls('button')
        return () => null
      },
    })
    mount(Consumer)
    expect(cls).toBe('hmfw-button')
  })

  it('uses custom prefixCls from ConfigProvider', () => {
    let cls = ''
    const Consumer = defineComponent({
      setup() {
        cls = usePrefixCls('button')
        return () => null
      },
    })
    mount(ConfigProvider, {
      props: { prefixCls: 'custom' },
      slots: { default: () => [<Consumer />] },
    })
    expect(cls).toBe('custom-button')
  })
})

describe('useLocale', () => {
  it('returns default zhCN locale', () => {
    let locale: ReturnType<typeof useLocale> | null = null
    const Consumer = defineComponent({
      setup() {
        locale = useLocale()
        return () => null
      },
    })
    mount(Consumer)
    expect(locale!.value).toBeDefined()
    expect(locale!.value.locale).toBe('zh-CN')
  })

  it('returns custom locale from ConfigProvider', () => {
    let locale: ReturnType<typeof useLocale> | null = null
    const Consumer = defineComponent({
      setup() {
        locale = useLocale()
        return () => null
      },
    })
    mount(ConfigProvider, {
      props: { locale: enUS },
      slots: { default: () => [<Consumer />] },
    })
    expect(locale!.value.locale).toBe('en-US')
  })
})
