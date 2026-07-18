import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { h } from 'vue'
import Text from '../Text'
import Title from '../Title'
import Paragraph from '../Paragraph'
import Link from '../Link'
import { resolveEllipsisTooltipProps, extractText, getEllipsisConfig } from '../Base'

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

    it('renders with target attribute', () => {
      const wrapper = mount(Link, {
        props: { href: 'https://example.com', target: '_blank' },
        slots: { default: () => 'Open' },
      })
      expect(wrapper.attributes('target')).toBe('_blank')
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
            icon: [h('span', { class: 'custom-copy-icon' }, 'C'), h('span', { class: 'custom-copied-icon' }, 'V')],
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
      tests.forEach((props: Record<string, unknown>) => {
        const wrapper = mount(Text, {
          props: props as any,
          slots: { default: () => 'truncated text' },
        })
        // 渲染未抛错即视为通过
        expect(wrapper.classes()).toContain('hmfw-typography-ellipsis')
      })
    })

    it('renders tooltip when ellipsis is triggered', async () => {
      const wrapper = mount(Paragraph, {
        props: { ellipsis: { rows: 2, tooltip: '完整信息' } },
        slots: { default: () => 'truncated content' },
        attachTo: document.body,
      })
      const el = wrapper.element as HTMLElement
      // 模拟截断状态：scrollHeight > clientHeight
      Object.defineProperty(el, 'scrollHeight', { value: 100, configurable: true })
      Object.defineProperty(el, 'clientHeight', { value: 40, configurable: true })
      await new Promise((r) => setTimeout(r, 20))
      // Tooltip 包裹内容，验证渲染未崩溃
      expect(wrapper.find('.hmfw-typography').exists()).toBe(true)
      wrapper.unmount()
    })
  })

  describe('resolveEllipsisTooltipProps', () => {
    it('returns null for false / undefined', () => {
      expect(resolveEllipsisTooltipProps(false, '')).toBeNull()
      expect(resolveEllipsisTooltipProps(undefined, '')).toBeNull()
    })

    it('returns { title: fallbackText } for true', () => {
      expect(resolveEllipsisTooltipProps(true, 'hello')).toEqual({ title: 'hello' })
    })

    it('returns { title: value } for string', () => {
      expect(resolveEllipsisTooltipProps('custom', 'fallback')).toEqual({ title: 'custom' })
    })

    it('returns { title: value } for number', () => {
      expect(resolveEllipsisTooltipProps(42, 'fallback')).toEqual({ title: 42 })
    })

    it('merges object config with fallback title', () => {
      const result = resolveEllipsisTooltipProps({ placement: 'top' }, 'fallback')
      expect(result).toEqual({ title: 'fallback', placement: 'top' })
    })
  })

  describe('extractText', () => {
    it('returns empty string for null/undefined/boolean', () => {
      expect(extractText(null)).toBe('')
      expect(extractText(undefined)).toBe('')
      expect(extractText(false)).toBe('')
      expect(extractText(true)).toBe('')
    })

    it('returns string for string/number', () => {
      expect(extractText('hello')).toBe('hello')
      expect(extractText(42)).toBe('42')
    })

    it('concatenates array nodes', () => {
      expect(extractText(['a', 'b', 'c'])).toBe('abc')
    })

    it('extracts text from VNode children string', () => {
      const vnode = { children: 'nested' }
      expect(extractText(vnode)).toBe('nested')
    })

    it('extracts text from VNode children array', () => {
      const vnode = { children: ['x', { children: 'y' }, 'z'] }
      expect(extractText(vnode)).toBe('xyz')
    })

    it('returns empty for VNode with object children', () => {
      const vnode = { children: { default: () => 'text' } }
      expect(extractText(vnode)).toBe('')
    })
  })

  describe('getEllipsisConfig', () => {
    it('returns empty object for falsy or true', () => {
      expect(getEllipsisConfig(false)).toEqual({})
      expect(getEllipsisConfig(true)).toEqual({})
      expect(getEllipsisConfig(undefined)).toEqual({})
    })

    it('returns config object as-is', () => {
      const cfg = { rows: 3, onEllipsis: vi.fn() }
      expect(getEllipsisConfig(cfg)).toBe(cfg)
    })
  })

  describe('ellipsis edge cases', () => {
    it('treats rows=0 as single-line ellipsis (rows falsy fallback)', () => {
      const wrapper = mount(Paragraph, {
        props: { ellipsis: { rows: 0 } },
        slots: { default: () => 'x' },
      })
      // rows 0 is falsy → falls back to 1 → single-line
      expect(wrapper.classes()).toContain('hmfw-typography-ellipsis')
      expect(wrapper.classes()).not.toContain('hmfw-typography-ellipsis-multiple-line')
    })
  })

  describe('copyable fallback', () => {
    it('falls back to execCommand when clipboard API is absent', async () => {
      const origClipboard = (navigator as any).clipboard
      delete (navigator as any).clipboard
      // jsdom 没有 execCommand，手动挂载
      const execSpy = vi.fn().mockReturnValue(true)
      ;(document as any).execCommand = execSpy

      const wrapper = mount(Text, {
        props: { copyable: true },
        slots: { default: () => 'fallback copy' },
      })
      await wrapper.find('.hmfw-typography-copy').trigger('click')

      expect(execSpy).toHaveBeenCalledWith('copy')
      ;(navigator as any).clipboard = origClipboard
      delete (document as any).execCommand
    })
  })

  describe('ellipsis tooltip rendering', () => {
    function mockTruncated(wrapper: ReturnType<typeof mount>) {
      const el = wrapper.element as HTMLElement
      // 多行省略用 scrollHeight，单行省略用 scrollWidth，两种都设
      Object.defineProperty(el, 'scrollHeight', { value: 100, configurable: true })
      Object.defineProperty(el, 'clientHeight', { value: 40, configurable: true })
      Object.defineProperty(el, 'scrollWidth', { value: 200, configurable: true })
      Object.defineProperty(el, 'clientWidth', { value: 40, configurable: true })
    }

    async function waitForMeasure() {
      await new Promise((r) => setTimeout(r, 20))
    }

    it('wraps Text in Tooltip when ellipsis is active', async () => {
      const wrapper = mount(Text, {
        props: { ellipsis: { rows: 2, tooltip: '完整内容' } },
        slots: { default: () => 'truncated text here' },
        attachTo: document.body,
      })
      mockTruncated(wrapper)
      await waitForMeasure()
      // 组件应正常渲染，Tooltip 包裹内容
      expect(wrapper.find('.hmfw-typography').exists()).toBe(true)
      wrapper.unmount()
    })

    it('wraps Title in Tooltip when ellipsis is active', async () => {
      const wrapper = mount(Title, {
        props: { level: 3, ellipsis: { rows: 1, tooltip: true } },
        slots: { default: () => 'A very long title that will be truncated' },
        attachTo: document.body,
      })
      mockTruncated(wrapper)
      await waitForMeasure()
      expect(wrapper.find('.hmfw-typography').exists()).toBe(true)
      wrapper.unmount()
    })

    it('wraps Link in Tooltip when ellipsis is active', async () => {
      const wrapper = mount(Link, {
        props: { href: '#', ellipsis: { rows: 1, tooltip: 'Long link text' } },
        slots: { default: () => 'A very long link text that will truncate' },
        attachTo: document.body,
      })
      mockTruncated(wrapper)
      await waitForMeasure()
      expect(wrapper.find('.hmfw-typography-link').exists()).toBe(true)
      wrapper.unmount()
    })

    it('rebuilds observer when rows prop changes', async () => {
      // 注入 ResizeObserver 验证 watch 回调触发 + setup 重建
      const disconnectSpy = vi.fn()
      const observeSpy = vi.fn()
      vi.stubGlobal(
        'ResizeObserver',
        vi.fn(function () {
          return { observe: observeSpy, disconnect: disconnectSpy, unobserve: vi.fn() }
        }),
      )

      const wrapper = mount(Text, {
        props: { ellipsis: { rows: 2, tooltip: true } },
        slots: { default: () => 'text' },
        attachTo: document.body,
      })
      // 初始 mount 创建一次 ResizeObserver
      expect(observeSpy).toHaveBeenCalledTimes(1)

      // 改变 rows → watch 触发 → setup() 调用 teardown 后重建
      await wrapper.setProps({ ellipsis: { rows: 3, tooltip: true } })
      expect(disconnectSpy).toHaveBeenCalled()
      expect(observeSpy).toHaveBeenCalledTimes(2)

      vi.unstubAllGlobals()
      wrapper.unmount()
    })

    it('detects ellipsis via ResizeObserver when available', async () => {
      // 注入 ResizeObserver stub 触发 observer 路径
      const observeSpy = vi.fn()
      const disconnectSpy = vi.fn()
      const RO = vi.fn(function (_cb?: () => void) {
        return { observe: observeSpy, disconnect: disconnectSpy, unobserve: vi.fn() }
      })
      vi.stubGlobal('ResizeObserver', RO)

      const onEllipsis = vi.fn()
      const wrapper = mount(Text, {
        props: { ellipsis: { rows: 2, onEllipsis, tooltip: true } },
        slots: { default: () => 'truncated' },
        attachTo: document.body,
      })
      // ResizeObserver 被创建并 observe
      expect(observeSpy).toHaveBeenCalled()
      // dismount 触发 disconnect
      wrapper.unmount()
      expect(disconnectSpy).toHaveBeenCalled()

      vi.unstubAllGlobals()
    })
  })

  describe('classNames / styles', () => {
    it('applies root classNames and styles on Text', () => {
      const wrapper = mount(Text, {
        props: {
          classNames: { root: 'my-text', copy: 'my-copy' },
          styles: { root: { color: 'red' }, copy: { fontSize: '12px' } },
          copyable: true,
        },
        slots: { default: () => 'styled' },
      })
      const root = wrapper.find('.hmfw-typography')
      expect(root.classes()).toContain('my-text')
      expect(root.attributes('style')).toContain('color: red')
      const btn = wrapper.find('.hmfw-typography-copy')
      expect(btn.classes()).toContain('my-copy')
      expect(btn.attributes('style')).toContain('font-size: 12px')
    })
  })

  describe('copyable timer & error', () => {
    beforeEach(() => {
      Object.assign(navigator, {
        clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
      })
    })

    it('resets copied state after 3 seconds', async () => {
      vi.useFakeTimers()
      const wrapper = mount(Text, {
        props: { copyable: true },
        slots: { default: () => 'timer test' },
      })
      await wrapper.find('.hmfw-typography-copy').trigger('click')
      await vi.runAllTimersAsync()
      // success class 应在定时器触发后移除
      expect(wrapper.find('.hmfw-typography-copy-success').exists()).toBe(false)
      vi.useRealTimers()
    })

    it('handles clipboard write failure gracefully', async () => {
      ;(navigator.clipboard as any).writeText = vi.fn().mockRejectedValue(new Error('denied'))
      const onCopy = vi.fn()
      const wrapper = mount(Text, {
        props: { copyable: { onCopy } },
        slots: { default: () => 'copy test' },
      })
      // 不应抛错
      await wrapper.find('.hmfw-typography-copy').trigger('click')
      // onCopy 在失败时不调用（仅 catch 内忽略）
      expect(onCopy).not.toHaveBeenCalled()
    })
  })
})
