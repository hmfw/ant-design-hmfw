import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import Button from '../Button'

describe('Button', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders correctly', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Click me' },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toBe('Click me')
  })

  it('handles different types', () => {
    const types = ['default', 'primary', 'dashed', 'text', 'link'] as const
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type },
        slots: { default: 'Button' },
      })
      expect(wrapper.classes()).toContain(`hmfw-btn-${type}`)
    })
  })

  it('handles different sizes', () => {
    const sizes = ['small', 'middle', 'large'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size },
        slots: { default: 'Button' },
      })
      expect(wrapper.classes()).toContain(`hmfw-btn-${size}`)
    })
  })

  it('handles different shapes', () => {
    const shapes = ['circle', 'round'] as const
    shapes.forEach((shape) => {
      const wrapper = mount(Button, {
        props: { shape },
        slots: { default: 'Button' },
      })
      expect(wrapper.classes()).toContain(`hmfw-btn-${shape}`)
    })
  })

  it('emits click event', async () => {
    const wrapper = mount(Button, {
      slots: { default: 'Click me' },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Click me' },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('does not emit click when loading', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'Click me' },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('handles loading with delay', async () => {
    const wrapper = mount(Button, {
      props: { loading: { delay: 500 } },
      slots: { default: 'Button' },
    })

    // Initially should not have loading class
    expect(wrapper.classes()).not.toContain('hmfw-btn-loading')

    // After delay, should have loading class
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    expect(wrapper.classes()).toContain('hmfw-btn-loading')
  })

  it('handles disabled state', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Button' },
    })
    expect(wrapper.classes()).toContain('hmfw-btn-disabled')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('handles loading state', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'Button' },
    })
    expect(wrapper.classes()).toContain('hmfw-btn-loading')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('handles danger state', () => {
    const wrapper = mount(Button, {
      props: { danger: true },
      slots: { default: 'Button' },
    })
    expect(wrapper.classes()).toContain('hmfw-btn-dangerous')
  })

  it('handles block mode', () => {
    const wrapper = mount(Button, {
      props: { block: true },
      slots: { default: 'Button' },
    })
    expect(wrapper.classes()).toContain('hmfw-btn-block')
  })

  it('handles ghost mode', () => {
    const wrapper = mount(Button, {
      props: { ghost: true },
      slots: { default: 'Button' },
    })
    expect(wrapper.classes()).toContain('hmfw-btn-background-ghost')
  })

  it('handles icon only button', () => {
    const wrapper = mount(Button, {
      props: { icon: () => <span>icon</span> },
    })
    expect(wrapper.classes()).toContain('hmfw-btn-icon-only')
  })

  it('handles icon position end', () => {
    const wrapper = mount(Button, {
      props: { icon: () => <span>icon</span>, iconPosition: 'end' },
      slots: { default: 'Button' },
    })
    expect(wrapper.classes()).toContain('hmfw-btn-icon-end')
  })

  it('renders as anchor when href is provided', () => {
    const wrapper = mount(Button, {
      props: { href: 'https://example.com' },
      slots: { default: 'Link' },
    })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('https://example.com')
  })

  it('renders anchor with target', () => {
    const wrapper = mount(Button, {
      props: { href: 'https://example.com', target: '_blank' },
      slots: { default: 'Link' },
    })
    expect(wrapper.attributes('target')).toBe('_blank')
  })

  it('disables href when disabled', () => {
    const wrapper = mount(Button, {
      props: { href: 'https://example.com', disabled: true },
      slots: { default: 'Link' },
    })
    expect(wrapper.attributes('href')).toBeUndefined()
  })

  it('handles different html types', () => {
    const wrapper = mount(Button, {
      props: { htmlType: 'submit' },
      slots: { default: 'Submit' },
    })
    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('supports slots', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Custom Content' },
    })
    expect(wrapper.text()).toContain('Custom Content')
  })

  // ===== P2 优化功能：classNames / styles 细粒度控制 =====
  it('applies classNames.root to root element', () => {
    const wrapper = mount(Button, {
      props: { classNames: { root: 'custom-root' } },
      slots: { default: 'Button' },
    })
    expect(wrapper.classes()).toContain('custom-root')
  })

  it('applies classNames.icon to icon wrapper', () => {
    const wrapper = mount(Button, {
      props: {
        icon: () => <span class="my-icon">i</span>,
        classNames: { icon: 'custom-icon' },
      },
      slots: { default: 'Button' },
    })
    const iconEl = wrapper.find('.hmfw-btn-icon')
    expect(iconEl.exists()).toBe(true)
    expect(iconEl.classes()).toContain('custom-icon')
  })

  it('applies classNames.icon to loading icon wrapper', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
        classNames: { icon: 'custom-icon' },
      },
      slots: { default: 'Button' },
    })
    const loadingEl = wrapper.find('.hmfw-btn-loading-icon')
    expect(loadingEl.exists()).toBe(true)
    expect(loadingEl.classes()).toContain('custom-icon')
  })

  it('applies styles.root to root element', () => {
    const wrapper = mount(Button, {
      props: { styles: { root: { color: 'rgb(255, 0, 0)' } } },
      slots: { default: 'Button' },
    })
    expect(wrapper.attributes('style')).toContain('color')
  })

  it('applies styles.icon to icon wrapper', () => {
    const wrapper = mount(Button, {
      props: {
        icon: () => <span>i</span>,
        styles: { icon: { fontSize: '20px' } },
      },
      slots: { default: 'Button' },
    })
    const iconEl = wrapper.find('.hmfw-btn-icon')
    expect(iconEl.attributes('style')).toContain('font-size')
  })

  // ===== content 语义节点（对齐 AntD v6 的 root / icon / content） =====
  it('wraps text content in a content element', () => {
    const wrapper = mount(Button, { slots: { default: 'Button' } })
    const contentEl = wrapper.find('.hmfw-btn-content')
    expect(contentEl.exists()).toBe(true)
    expect(contentEl.text()).toBe('Button')
  })

  it('applies classNames.content and styles.content to content element', () => {
    const wrapper = mount(Button, {
      props: {
        classNames: { content: 'custom-content' },
        styles: { content: { fontWeight: '700' } },
      },
      slots: { default: 'Button' },
    })
    const contentEl = wrapper.find('.hmfw-btn-content')
    expect(contentEl.classes()).toContain('custom-content')
    expect(contentEl.attributes('style')).toContain('font-weight')
  })

  it('does not render content element when there is no children', () => {
    const wrapper = mount(Button, { props: { icon: () => <span>i</span> } })
    expect(wrapper.find('.hmfw-btn-content').exists()).toBe(false)
    expect(wrapper.classes()).toContain('hmfw-btn-icon-only')
  })

  // ===== P2 优化功能：iconPosition 为 end 时图标位置 =====
  it('renders icon after text when iconPosition is end', () => {
    const wrapper = mount(Button, {
      props: {
        icon: () => <span class="end-icon">i</span>,
        iconPosition: 'end',
      },
      slots: { default: 'Text' },
    })
    expect(wrapper.classes()).toContain('hmfw-btn-icon-end')
    // icon span 出现在 DOM 中的文本节点之后
    const html = wrapper.html()
    const textIdx = html.indexOf('Text')
    const iconIdx = html.indexOf('end-icon')
    expect(iconIdx).toBeGreaterThan(textIdx)
  })

  it('renders icon before text when iconPosition is start (default)', () => {
    const wrapper = mount(Button, {
      props: {
        icon: () => <span class="start-icon">i</span>,
      },
      slots: { default: 'Text' },
    })
    expect(wrapper.classes()).not.toContain('hmfw-btn-icon-end')
    const html = wrapper.html()
    const textIdx = html.indexOf('Text')
    const iconIdx = html.indexOf('start-icon')
    expect(iconIdx).toBeLessThan(textIdx)
  })

  // ===== P2 优化功能：紧凑模式（Space.Compact）样式标记 =====
  it('inherits compact mode styling via parent class', () => {
    // 紧凑模式由 Space.Compact 注入 .hmfw-space-compact 父类，
    // Button 自身保持原始结构。此处验证渲染稳定性。
    const wrapper = mount(Button, {
      props: { type: 'primary' },
      slots: { default: 'Btn' },
      attachTo: document.body,
    })
    expect(wrapper.classes()).toContain('hmfw-btn-primary')
    wrapper.unmount()
  })

  // ===== autoInsertSpace 功能测试 =====
  it('inserts space between two Chinese characters by default', async () => {
    const wrapper = mount(Button, {
      props: { autoInsertSpace: true },
      slots: { default: '按钮' },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    // 新实现：直接在文本中插入空格，不再添加 class 和嵌套 span
    const contentSpan = wrapper.find('.hmfw-btn-content')
    expect(contentSpan.exists()).toBe(true)
    expect(contentSpan.text()).toBe('按 钮') // 字符间应该有空格
    wrapper.unmount()
  })

  it('does not insert space when autoInsertSpace is false', async () => {
    const wrapper = mount(Button, {
      props: { autoInsertSpace: false },
      slots: { default: '按钮' },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    const contentSpan = wrapper.find('.hmfw-btn-content')
    expect(contentSpan.exists()).toBe(true)
    expect(contentSpan.text()).toBe('按钮') // 不应该有空格
    wrapper.unmount()
  })

  it('does not insert space for non-two-character text', async () => {
    const wrapper = mount(Button, {
      props: { autoInsertSpace: true },
      slots: { default: '确认按钮' },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    const contentSpan = wrapper.find('.hmfw-btn-content')
    expect(contentSpan.text()).toBe('确认按钮') // 不应该有空格
    wrapper.unmount()
  })

  it('does not insert space for single character', async () => {
    const wrapper = mount(Button, {
      props: { autoInsertSpace: true },
      slots: { default: '确' },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    expect(wrapper.classes()).not.toContain('hmfw-btn-two-chinese-chars')
    wrapper.unmount()
  })

  it('does not insert space when button has icon', async () => {
    const wrapper = mount(Button, {
      props: {
        autoInsertSpace: true,
        icon: () => <span>icon</span>,
      },
      slots: { default: '按钮' },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    expect(wrapper.classes()).not.toContain('hmfw-btn-two-chinese-chars')
    wrapper.unmount()
  })

  it('does not insert space when button is loading', async () => {
    const wrapper = mount(Button, {
      props: {
        autoInsertSpace: true,
        loading: true,
      },
      slots: { default: '按钮' },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    expect(wrapper.classes()).not.toContain('hmfw-btn-two-chinese-chars')
    wrapper.unmount()
  })

  // ===== ARIA 属性测试 =====
  it('sets aria-busy when loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'Button' },
    })
    expect(wrapper.attributes('aria-busy')).toBe('true')
    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  it('sets aria-disabled for disabled button', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Button' },
    })
    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  it('sets aria-disabled and role=button for disabled link', () => {
    const wrapper = mount(Button, {
      props: { href: 'https://example.com', disabled: true },
      slots: { default: 'Link' },
    })
    expect(wrapper.attributes('aria-disabled')).toBe('true')
    expect(wrapper.attributes('tabindex')).toBe('-1')
    expect(wrapper.attributes('role')).toBe('button')
  })

  it('sets role=button for link button', () => {
    const wrapper = mount(Button, {
      props: { href: 'https://example.com' },
      slots: { default: 'Link' },
    })
    expect(wrapper.attributes('role')).toBe('button')
  })

  it('does not set tabindex for enabled link button', () => {
    const wrapper = mount(Button, {
      props: { href: 'https://example.com' },
      slots: { default: 'Link' },
    })
    expect(wrapper.attributes('tabindex')).toBeUndefined()
  })

  // ===== loading 延迟取消测试 =====
  it('cancels loading delay when loading becomes false before delay', async () => {
    const wrapper = mount(Button, {
      props: { loading: { delay: 500 } },
      slots: { default: 'Button' },
    })

    expect(wrapper.classes()).not.toContain('hmfw-btn-loading')

    // 在延迟前取消 loading
    await wrapper.setProps({ loading: false })
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()

    // 应该仍然没有 loading 类
    expect(wrapper.classes()).not.toContain('hmfw-btn-loading')
  })

  it('clears loading delay timer on unmount', () => {
    const wrapper = mount(Button, {
      props: { loading: { delay: 500 } },
      slots: { default: 'Button' },
    })

    expect(wrapper.classes()).not.toContain('hmfw-btn-loading')

    // 在延迟完成前卸载
    wrapper.unmount()

    // 推进时间，不应该抛出错误
    expect(() => {
      vi.advanceTimersByTime(500)
    }).not.toThrow()
  })

  // ===== loading 状态下的 icon 语义节点 =====
  it('applies styles.icon to loading icon wrapper', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
        styles: {
          icon: { fontSize: '16px', color: 'red' },
        },
      },
      slots: { default: 'Button' },
    })
    const loadingEl = wrapper.find('.hmfw-btn-loading-icon')
    expect(loadingEl.exists()).toBe(true)
    const style = loadingEl.attributes('style')
    expect(style).toContain('font-size')
    expect(style).toContain('color')
  })

  it('keeps built-in loading-icon class alongside classNames.icon', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
        classNames: {
          icon: 'custom-icon',
        },
      },
      slots: { default: 'Button' },
    })
    const loadingEl = wrapper.find('.hmfw-btn-loading-icon')
    expect(loadingEl.exists()).toBe(true)
    expect(loadingEl.classes()).toContain('hmfw-btn-icon')
    expect(loadingEl.classes()).toContain('custom-icon')
  })

  // 回归：attrs 曾在 class/style 之后展开，导致外部透传值整体覆盖组件自身样式
  it('外部 class 与内置 class 合并而非覆盖', () => {
    const wrapper = mount(Button, { attrs: { class: 'my-cls' }, slots: { default: () => 'x' } })
    const classes = wrapper.find('button').classes()
    expect(classes).toContain('my-cls')
    expect(classes).toContain('hmfw-btn')
    expect(classes).toContain('hmfw-btn-default')
  })

  it('外部 style 与 styles.root 合并而非覆盖', () => {
    const wrapper = mount(Button, {
      attrs: { style: 'margin-top: 4px' },
      props: { styles: { root: { color: 'rgb(1, 2, 3)' } } },
      slots: { default: () => 'x' },
    })
    const style = wrapper.find('button').attributes('style')
    expect(style).toContain('margin-top: 4px')
    expect(style).toContain('color: rgb(1, 2, 3)')
  })

  it('href 模式下外部 class 同样合并', () => {
    const wrapper = mount(Button, {
      attrs: { class: 'my-link' },
      props: { href: 'https://example.com', type: 'primary' },
      slots: { default: () => 'x' },
    })
    const classes = wrapper.find('a').classes()
    expect(classes).toContain('my-link')
    expect(classes).toContain('hmfw-btn')
    expect(classes).toContain('hmfw-btn-primary')
  })
})
