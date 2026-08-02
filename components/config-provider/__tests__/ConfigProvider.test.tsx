import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, toRef, nextTick } from 'vue'
import ConfigProvider from '../ConfigProvider'
import { Tooltip } from '../../tooltip/Tooltip'
import { useConfig, usePrefixCls, useLocale, useMergedDisabled, defaultConfig } from '../context'
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

  it('injects CSS variables into :root on mount', async () => {
    const wrapper = mount(ConfigProvider, {
      props: { theme: { colorPrimary: '#00b96b' } },
      slots: { default: '<div />' },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    const style = document.getElementById('hmfw-theme-vars')
    expect(style).not.toBeNull()
    expect(style!.textContent).toContain(':root {')
    expect(style!.textContent).toContain('--hmfw-color-primary: #00b96b;')
    wrapper.unmount()
  })

  it('renders no wrapper element as root provider', () => {
    const wrapper = mount(ConfigProvider, {
      slots: { default: '<span class="child">x</span>' },
    })
    // 根 Provider 不产生任何 DOM：不生成作用域节点，子节点直挂宿主
    expect(wrapper.find('.hmfw-config-provider').exists()).toBe(false)
    expect(wrapper.element.querySelector(':scope > .child')).not.toBeNull()
  })

  it('writes document dir only when direction is explicitly set', async () => {
    document.documentElement.dir = ''
    const noDir = mount(ConfigProvider, { slots: { default: '<div />' } })
    await noDir.vm.$nextTick()
    expect(document.documentElement.dir).toBe('')
    noDir.unmount()

    const rtl = mount(ConfigProvider, { props: { direction: 'rtl' }, slots: { default: '<div />' } })
    await rtl.vm.$nextTick()
    expect(document.documentElement.dir).toBe('rtl')
    rtl.unmount()
    document.documentElement.dir = ''
  })
})

describe('ConfigProvider 嵌套', () => {
  /** 挂载「外层 Provider + 内层 Provider + 消费者」，返回内层看到的 config */
  function mountNested(outer: Record<string, unknown>, inner: Record<string, unknown>) {
    let config: ReturnType<typeof useConfig> | null = null
    const Consumer = defineComponent({
      setup() {
        config = useConfig()
        return () => null
      },
    })
    const wrapper = mount(
      defineComponent({
        setup() {
          return () => (
            <ConfigProvider {...outer}>
              <ConfigProvider {...inner}>
                <Consumer />
              </ConfigProvider>
            </ConfigProvider>
          )
        },
      }),
      { attachTo: document.body },
    )
    return { wrapper, config: config! }
  }

  it('inherits unspecified config from parent instead of resetting to defaults', () => {
    const { wrapper, config } = mountNested(
      { componentSize: 'large', prefixCls: 'outer', direction: 'rtl', locale: enUS },
      { theme: { colorTextBase: '#ffffff' } },
    )
    // 内层只覆盖了 theme，其余各项必须继承外层
    expect(config.value.componentSize).toBe('large')
    expect(config.value.prefixCls).toBe('outer')
    expect(config.value.direction).toBe('rtl')
    expect(config.value.locale.locale).toBe('en-US')
    wrapper.unmount()
  })

  it('merges theme partially, keeping parent seed tokens', () => {
    const { wrapper, config } = mountNested(
      { theme: { colorPrimary: '#00b96b', borderRadius: 16 } },
      { theme: { colorTextBase: '#ffffff' } },
    )
    // 内层未列出的 seed 字段沿用外层，而非回落到库默认值
    expect(config.value.theme.colorPrimary).toBe('#00b96b')
    expect(config.value.theme.borderRadius).toBe(16)
    expect(config.value.theme.colorTextBase).toBe('#ffffff')
    wrapper.unmount()
  })

  it('allows inner provider to override parent explicitly', () => {
    const { wrapper, config } = mountNested({ componentSize: 'large' }, { componentSize: 'small' })
    expect(config.value.componentSize).toBe('small')
    wrapper.unmount()
  })

  it('allows inner provider to re-enable when parent set componentDisabled', () => {
    const { wrapper, config } = mountNested({ componentDisabled: true }, { componentDisabled: false })
    expect(config.value.componentDisabled).toBe(false)
    wrapper.unmount()
  })

  it('scopes theme to its own subtree without polluting :root', async () => {
    const before = document.getElementById('hmfw-theme-vars')?.textContent ?? ''
    const { wrapper } = mountNested({}, { theme: { colorPrimary: '#ff0000' } })
    await wrapper.vm.$nextTick()

    // 内层主题不得写进全局 :root
    const after = document.getElementById('hmfw-theme-vars')?.textContent ?? ''
    expect(after).toBe(before)
    expect(after).not.toContain('#ff0000')

    // 而是挂在作用域节点的 inline style 上
    const scope = wrapper.find('.hmfw-config-provider')
    expect(scope.exists()).toBe(true)
    expect(scope.attributes('style')).toContain('display: contents')
    expect(scope.attributes('style')).toContain('--hmfw-color-primary: #ff0000')
    wrapper.unmount()
  })

  it('only emits tokens that differ from parent', async () => {
    const { wrapper } = mountNested({}, { theme: { colorPrimary: '#ff0000' } })
    await wrapper.vm.$nextTick()
    const style = wrapper.find('.hmfw-config-provider').attributes('style') ?? ''
    // colorPrimary 及其派生色输出，与主色无关的 token（如 fontFamily）不应出现
    expect(style).toContain('--hmfw-color-primary-hover')
    expect(style).not.toContain('--hmfw-font-family')
    wrapper.unmount()
  })

  it('emits no token vars when theme matches parent', async () => {
    const { wrapper } = mountNested({ theme: { colorPrimary: '#00b96b' } }, { componentSize: 'small' })
    await wrapper.vm.$nextTick()
    const style = wrapper.find('.hmfw-config-provider').attributes('style') ?? ''
    expect(style).toContain('display: contents')
    expect(style).not.toContain('--hmfw-')
    wrapper.unmount()
  })

  it('sets dir on scope node when direction is specified', async () => {
    const { wrapper } = mountNested({}, { direction: 'rtl' })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.hmfw-config-provider').attributes('dir')).toBe('rtl')
    wrapper.unmount()
  })

  it('names the scope node with inherited prefixCls', async () => {
    const { wrapper } = mountNested({ prefixCls: 'mylib' }, { theme: { colorPrimary: '#ff0000' } })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.mylib-config-provider').exists()).toBe(true)
    wrapper.unmount()
  })
})

describe('useMergedDisabled', () => {
  /** 渲染一个把合并后禁用态写到 data-disabled 的消费者 */
  const Control = defineComponent({
    props: { disabled: { type: Boolean, default: undefined } },
    setup(props) {
      const merged = useMergedDisabled(toRef(props, 'disabled'))
      return () => <div data-disabled={String(merged.value)} />
    },
  })

  it('falls back to componentDisabled from ConfigProvider', () => {
    const wrapper = mount(ConfigProvider, {
      props: { componentDisabled: true },
      slots: { default: () => [<Control />] },
    })
    expect(wrapper.find('[data-disabled="true"]').exists()).toBe(true)
  })

  it('keeps control disabled when context is enabled but control opts in', () => {
    const wrapper = mount(ConfigProvider, {
      slots: { default: () => [<Control disabled />] },
    })
    expect(wrapper.find('[data-disabled="true"]').exists()).toBe(true)
  })

  it('cannot un-disable a control while context is disabled', () => {
    const wrapper = mount(ConfigProvider, {
      props: { componentDisabled: true },
      slots: { default: () => [<Control disabled={false} />] },
    })
    // 与 AntD DisabledContext 一致：容器禁用时控件无法单独反禁用
    expect(wrapper.find('[data-disabled="true"]').exists()).toBe(true)
  })

  it('is enabled by default outside any ConfigProvider', () => {
    const wrapper = mount(Control)
    expect(wrapper.find('[data-disabled="false"]').exists()).toBe(true)
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

describe('getPopupContainer', () => {
  it('is undefined by default so popups can decide their own fallback', () => {
    // 不兜底 () => document.body，以区分「未配置」与「配置为 body」，并避免 SSR 访问 document
    expect(defaultConfig.getPopupContainer).toBeUndefined()
  })

  it('is provided to descendants through context', () => {
    const container = document.createElement('div')
    const getPopupContainer = () => container
    let config: ReturnType<typeof useConfig> | null = null
    const Consumer = defineComponent({
      setup() {
        config = useConfig()
        return () => null
      },
    })
    mount(ConfigProvider, {
      props: { getPopupContainer },
      slots: { default: () => [<Consumer />] },
    })
    expect(config!.value.getPopupContainer).toBe(getPopupContainer)
  })

  it('is consumed by popups when they have no own getPopupContainer', async () => {
    const container = document.createElement('div')
    container.id = 'global-popup-container'
    document.body.appendChild(container)

    const wrapper = mount(
      defineComponent({
        setup() {
          return () => (
            <ConfigProvider getPopupContainer={() => container}>
              <Tooltip title="tip" open>
                <button>trigger</button>
              </Tooltip>
            </ConfigProvider>
          )
        },
      }),
      { attachTo: document.body },
    )
    await nextTick()
    await nextTick()

    // 弹层挂到 ConfigProvider 指定的全局容器，而非 body
    expect(container.querySelector('.hmfw-tooltip')).not.toBeNull()

    wrapper.unmount()
    container.remove()
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
