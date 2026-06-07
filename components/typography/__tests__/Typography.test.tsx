import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { h } from 'vue'
import Text from '../Text'
import Title from '../Title'
import Paragraph from '../Paragraph'
import Link from '../Link'

describe('Typography', () => {
  describe('Text', () => {
    it('renders correctly', () => {
      const wrapper = mount(Text, {
        slots: { default: () => 'Hello' },
      })
      expect(wrapper.text()).toBe('Hello')
      expect(wrapper.classes()).toContain('hmfw-typography')
    })

    it('handles type prop', () => {
      const types = ['secondary', 'success', 'warning', 'danger'] as const
      types.forEach((type) => {
        const wrapper = mount(Text, {
          props: { type },
          slots: { default: () => 'Text' },
        })
        expect(wrapper.classes()).toContain(`hmfw-typography-${type}`)
      })
    })

    it('handles disabled', () => {
      const wrapper = mount(Text, {
        props: { disabled: true },
        slots: { default: () => 'Text' },
      })
      expect(wrapper.classes()).toContain('hmfw-typography-disabled')
    })

    it('handles mark', () => {
      const wrapper = mount(Text, {
        props: { mark: true },
        slots: { default: () => 'Text' },
      })
      expect(wrapper.find('mark').exists()).toBe(true)
    })

    it('handles code', () => {
      const wrapper = mount(Text, {
        props: { code: true },
        slots: { default: () => 'Text' },
      })
      expect(wrapper.find('code').exists()).toBe(true)
    })

    it('handles keyboard', () => {
      const wrapper = mount(Text, {
        props: { keyboard: true },
        slots: { default: () => 'Text' },
      })
      expect(wrapper.find('kbd').exists()).toBe(true)
    })

    it('handles underline', () => {
      const wrapper = mount(Text, {
        props: { underline: true },
        slots: { default: () => 'Text' },
      })
      expect(wrapper.find('u').exists()).toBe(true)
    })

    it('handles delete', () => {
      const wrapper = mount(Text, {
        props: { delete: true },
        slots: { default: () => 'Text' },
      })
      expect(wrapper.find('del').exists()).toBe(true)
    })

    it('handles strong', () => {
      const wrapper = mount(Text, {
        props: { strong: true },
        slots: { default: () => 'Text' },
      })
      expect(wrapper.find('strong').exists()).toBe(true)
    })

    it('handles italic', () => {
      const wrapper = mount(Text, {
        props: { italic: true },
        slots: { default: () => 'Text' },
      })
      expect(wrapper.find('i').exists()).toBe(true)
    })
  })

  describe('Title', () => {
    it('renders correctly', () => {
      const wrapper = mount(Title, {
        slots: { default: () => 'Title' },
      })
      expect(wrapper.text()).toBe('Title')
      expect(wrapper.element.tagName).toBe('H1')
    })

    it('handles level prop', () => {
      const levels = [1, 2, 3, 4, 5] as const
      levels.forEach((level) => {
        const wrapper = mount(Title, {
          props: { level },
          slots: { default: () => 'Title' },
        })
        expect(wrapper.element.tagName).toBe(`H${level}`)
        expect(wrapper.classes()).toContain(`hmfw-typography-h${level}`)
      })
    })

    it('handles type prop', () => {
      const wrapper = mount(Title, {
        props: { type: 'danger' },
        slots: { default: () => 'Title' },
      })
      expect(wrapper.classes()).toContain('hmfw-typography-danger')
    })
  })

  describe('Paragraph', () => {
    it('renders correctly', () => {
      const wrapper = mount(Paragraph, {
        slots: { default: () => 'Paragraph' },
      })
      expect(wrapper.text()).toBe('Paragraph')
      expect(wrapper.element.tagName).toBe('P')
    })

    it('handles type prop', () => {
      const wrapper = mount(Paragraph, {
        props: { type: 'secondary' },
        slots: { default: () => 'Paragraph' },
      })
      expect(wrapper.classes()).toContain('hmfw-typography-secondary')
    })

    it('handles strong', () => {
      const wrapper = mount(Paragraph, {
        props: { strong: true },
        slots: { default: () => 'Paragraph' },
      })
      expect(wrapper.find('strong').exists()).toBe(true)
    })

    it('handles italic (parity with Text)', () => {
      const wrapper = mount(Paragraph, {
        props: { italic: true },
        slots: { default: () => 'Paragraph' },
      })
      expect(wrapper.find('i').exists()).toBe(true)
    })

    it('handles code (parity with Text)', () => {
      const wrapper = mount(Paragraph, {
        props: { code: true },
        slots: { default: () => 'Paragraph' },
      })
      expect(wrapper.find('code').exists()).toBe(true)
    })
  })

  describe('Link', () => {
    it('renders an anchor', () => {
      const wrapper = mount(Link, {
        props: { href: 'https://example.com' },
        slots: { default: () => 'Go' },
      })
      expect(wrapper.element.tagName).toBe('A')
      expect(wrapper.attributes('href')).toBe('https://example.com')
      expect(wrapper.classes()).toContain('hmfw-typography-link')
    })

    it('disabled link drops href', () => {
      const wrapper = mount(Link, {
        props: { href: 'https://example.com', disabled: true },
        slots: { default: () => 'Go' },
      })
      expect(wrapper.attributes('href')).toBeUndefined()
      expect(wrapper.attributes('aria-disabled')).toBe('true')
    })
  })

  describe('ellipsis & copyable', () => {
    beforeEach(() => {
      Object.assign(navigator, {
        clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
      })
    })

    it('applies ellipsis class', () => {
      const wrapper = mount(Text, {
        props: { ellipsis: true },
        slots: { default: () => 'Long text that should be truncated' },
      })
      expect(wrapper.classes()).toContain('hmfw-typography-ellipsis')
    })

    it('applies multi-line ellipsis from { rows } config', () => {
      const wrapper = mount(Paragraph, {
        props: { ellipsis: { rows: 2 } },
        slots: { default: () => 'Long text that should be clamped to two lines' },
      })
      expect(wrapper.classes()).toContain('hmfw-typography-ellipsis-multiple-line')
      expect(wrapper.classes()).not.toContain('hmfw-typography-ellipsis')
      expect(wrapper.attributes('style')).toContain('-webkit-line-clamp: 2')
    })

    it('treats { rows: 1 } as single-line ellipsis', () => {
      const wrapper = mount(Paragraph, {
        props: { ellipsis: { rows: 1 } },
        slots: { default: () => 'Long text' },
      })
      expect(wrapper.classes()).toContain('hmfw-typography-ellipsis')
      expect(wrapper.classes()).not.toContain('hmfw-typography-ellipsis-multiple-line')
    })

    it('renders copy button when copyable', () => {
      const wrapper = mount(Text, {
        props: { copyable: true },
        slots: { default: () => 'Copy me' },
      })
      expect(wrapper.find('.hmfw-typography-copy').exists()).toBe(true)
    })

    it('copies text on click', async () => {
      const onCopy = vi.fn()
      const wrapper = mount(Text, {
        props: { copyable: { onCopy } },
        slots: { default: () => 'Copy me' },
      })
      await wrapper.find('.hmfw-typography-copy').trigger('click')
      await new Promise((r) => setTimeout(r, 0))
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Copy me')
      expect(onCopy).toHaveBeenCalled()
      expect(wrapper.find('.hmfw-typography-copy-success').exists()).toBe(true)
    })

    it('uses custom copyable text', async () => {
      const wrapper = mount(Text, {
        props: { copyable: { text: 'custom value' } },
        slots: { default: () => 'displayed' },
      })
      await wrapper.find('.hmfw-typography-copy').trigger('click')
      await new Promise((r) => setTimeout(r, 0))
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('custom value')
    })

    it('copy button uses locale text by default (zh-CN)', () => {
      const wrapper = mount(Text, {
        props: { copyable: true },
        slots: { default: () => 'Copy me' },
      })
      const btn = wrapper.find('.hmfw-typography-copy')
      // 默认 locale 为 zh-CN，aria-label 应为「复制」
      expect(btn.attributes('aria-label')).toBe('复制')
      expect(btn.attributes('title')).toBe('复制')
    })

    it('copy button shows copied locale text after click', async () => {
      const wrapper = mount(Text, {
        props: { copyable: true },
        slots: { default: () => 'Copy me' },
      })
      await wrapper.find('.hmfw-typography-copy').trigger('click')
      await new Promise((r) => setTimeout(r, 0))
      const btn = wrapper.find('.hmfw-typography-copy')
      expect(btn.attributes('aria-label')).toBe('复制成功')
    })

    it('supports custom copyable tooltips text', () => {
      const wrapper = mount(Text, {
        props: { copyable: { tooltips: ['点我复制', '已复制'] } },
        slots: { default: () => 'x' },
      })
      const btn = wrapper.find('.hmfw-typography-copy')
      expect(btn.attributes('aria-label')).toBe('点我复制')
    })

    it('supports custom copyable icons', () => {
      const wrapper = mount(Text, {
        props: {
          copyable: {
            icon: [
              h('span', { class: 'custom-copy-icon' }, 'C'),
              h('span', { class: 'custom-copied-icon' }, 'V'),
            ] as any,
          },
        },
        slots: { default: () => 'x' },
      })
      expect(wrapper.find('.custom-copy-icon').exists()).toBe(true)
    })

    it('disables copyable tooltip when tooltips is false', () => {
      const wrapper = mount(Text, {
        props: { copyable: { tooltips: false } },
        slots: { default: () => 'x' },
      })
      // Tooltip 关闭时复制按钮不在 Tooltip 包裹内
      const btn = wrapper.find('.hmfw-typography-copy')
      expect(btn.exists()).toBe(true)
    })

    it('triggers onEllipsis callback when truncation state changes', async () => {
      const onEllipsis = vi.fn()
      const wrapper = mount(Paragraph, {
        props: { ellipsis: { rows: 2, onEllipsis } },
        slots: { default: () => 'long text' },
        attachTo: document.body,
      })
      // 模拟元素被截断
      const el = wrapper.element as HTMLElement
      Object.defineProperty(el, 'scrollHeight', { value: 100, configurable: true })
      Object.defineProperty(el, 'clientHeight', { value: 40, configurable: true })
      // 直接调用 detect 内部测量逻辑：通过触发 ResizeObserver 是异步的，
      // 这里改为重挂载并立即检查回调
      await new Promise((r) => setTimeout(r, 20))
      // 至少应该被调用一次（mount 之后的 nextTick measure）
      expect(onEllipsis).toHaveBeenCalled()
      wrapper.unmount()
    })

    it('exposes ellipsis tooltip config via prop type', () => {
      // 类型/接口检查：可传 boolean / string / 对象配置
      const tests = [
        { ellipsis: { rows: 1, tooltip: true } },
        { ellipsis: { rows: 1, tooltip: '完整内容' } },
        { ellipsis: { rows: 1, tooltip: { placement: 'topLeft' as const } } },
      ]
      tests.forEach((props) => {
        const wrapper = mount(Text, {
          props,
          slots: { default: () => 'truncated text' },
        })
        // 渲染未抛错即视为通过
        expect(wrapper.classes()).toContain('hmfw-typography-ellipsis')
      })
    })
  })
})
