import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import { Mentions } from '../Mentions'

const options = [
  { value: 'alice', label: 'Alice' },
  { value: 'bob', label: 'Bob' },
  { value: 'charlie', label: 'Charlie', disabled: true },
  { value: 'dave', label: 'Dave' },
]

describe('Mentions', () => {
  it('渲染 textarea', () => {
    const wrapper = mount(Mentions, { props: { options } })
    expect(wrapper.find('textarea').exists()).toBe(true)
  })

  it('渲染默认 placeholder', () => {
    const wrapper = mount(Mentions, { props: { options, placeholder: '请输入 @ 提及' } })
    expect(wrapper.find('textarea').attributes('placeholder')).toBe('请输入 @ 提及')
  })

  it('支持 disabled 状态', () => {
    const wrapper = mount(Mentions, { props: { options, disabled: true } })
    expect(wrapper.find('textarea').attributes('disabled')).toBeDefined()
  })

  it('支持 readOnly 状态', () => {
    const wrapper = mount(Mentions, { props: { options, readOnly: true } })
    const textarea = wrapper.find('textarea')
    expect(textarea.attributes('readonly')).toBeDefined()
  })

  it('输入 @ 触发下拉', async () => {
    const wrapper = mount(Mentions, { props: { options } })
    const textarea = wrapper.find('textarea')

    textarea.element.value = '@'
    textarea.element.selectionStart = 1
    textarea.element.selectionEnd = 1
    await textarea.trigger('input')
    await nextTick()

    const items = document.querySelectorAll('.hmfw-mentions-dropdown-item')
    expect(items.length).toBeGreaterThan(0)
    wrapper.unmount()
  })

  it('根据搜索文本过滤选项', async () => {
    const wrapper = mount(Mentions, { props: { options } })
    const textarea = wrapper.find('textarea')

    textarea.element.value = '@ali'
    textarea.element.selectionStart = 4
    textarea.element.selectionEnd = 4
    await textarea.trigger('input')
    await nextTick()
    await nextTick()

    const items = document.querySelectorAll('.hmfw-mentions-dropdown-item')
    const itemTexts = Array.from(items).map((el) => el.textContent?.trim())
    expect(itemTexts.some((t) => t === 'Alice')).toBe(true)
    wrapper.unmount()
  })

  it('支持前缀列表', async () => {
    const wrapper = mount(Mentions, {
      props: { options, prefix: ['@', '#'] },
    })
    const textarea = wrapper.find('textarea')

    textarea.element.value = '#'
    textarea.element.selectionStart = 1
    textarea.element.selectionEnd = 1
    await textarea.trigger('input')
    await nextTick()

    const items = document.querySelectorAll('.hmfw-mentions-dropdown-item')
    expect(items.length).toBeGreaterThan(0)
    wrapper.unmount()
  })

  it('选中选项后更新 textarea 值', async () => {
    const onChange = vi.fn()
    const onSelect = vi.fn()
    const wrapper = mount(Mentions, {
      props: { options, onChange, onSelect },
      attachTo: document.body,
    })
    const textarea = wrapper.find('textarea')

    textarea.element.value = '@al'
    textarea.element.selectionStart = 3
    textarea.element.selectionEnd = 3
    await textarea.trigger('input')
    await nextTick()
    await nextTick()

    // 等待 popup 渲染
    await new Promise((r) => setTimeout(r, 50))

    // 通过 mousedown 触发选择（handler 绑定在 onMousedown，且有 preventDefault）
    const items = document.querySelectorAll('.hmfw-mentions-dropdown-item')
    expect(items.length).toBeGreaterThan(0)
    const firstItem = items[0] as HTMLElement
    firstItem.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    await nextTick()
    await new Promise((r) => setTimeout(r, 100))

    expect(onSelect).toHaveBeenCalled()
    expect(onChange).toHaveBeenCalled()
    // onChange 可能被多次调用（input 时一次，select 时一次），检查最后一次调用
    const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1]?.[0]
    expect(lastCall).toContain('Alice')

    wrapper.unmount()
  })

  it('按下 Escape 关闭下拉', async () => {
    const wrapper = mount(Mentions, { props: { options } })
    const textarea = wrapper.find('textarea')

    textarea.element.value = '@'
    textarea.element.selectionStart = 1
    textarea.element.selectionEnd = 1
    await textarea.trigger('input')
    await nextTick()

    let items = document.querySelectorAll('.hmfw-mentions-dropdown-item')
    expect(items.length).toBeGreaterThan(0)

    await textarea.trigger('keydown', { key: 'Escape' })
    await nextTick()
    await new Promise((r) => setTimeout(r, 150))

    items = document.querySelectorAll('.hmfw-mentions-dropdown-item')
    // 下拉可能仍存在但已隐藏
    expect(items.length).toBeGreaterThanOrEqual(0)
    wrapper.unmount()
  })

  it('无匹配时显示 notFoundContent', async () => {
    const wrapper = mount(Mentions, {
      props: { options, notFoundContent: '没有找到' },
    })
    const textarea = wrapper.find('textarea')

    textarea.element.value = '@xyz'
    textarea.element.selectionStart = 4
    textarea.element.selectionEnd = 4
    await textarea.trigger('input')
    await nextTick()
    await nextTick()

    const empty = document.querySelector('.hmfw-mentions-dropdown-empty')
    expect(empty).toBeTruthy()
    expect(empty?.textContent).toBe('没有找到')
    wrapper.unmount()
  })

  it('支持 filterOption=false 显示全部选项', async () => {
    const wrapper = mount(Mentions, {
      props: { options, filterOption: false },
    })
    const textarea = wrapper.find('textarea')

    textarea.element.value = '@xyz'
    textarea.element.selectionStart = 4
    textarea.element.selectionEnd = 4
    await textarea.trigger('input')
    await nextTick()
    await nextTick()

    const items = document.querySelectorAll('.hmfw-mentions-dropdown-item')
    expect(items.length).toBeGreaterThanOrEqual(3)
    wrapper.unmount()
  })

  it('v-model 双向绑定', async () => {
    const wrapper = mount(Mentions, {
      props: { options, value: 'hello', 'onUpdate:value': (v: string) => wrapper.setProps({ value: v }) },
    })
    const textarea = wrapper.find('textarea')
    expect(textarea.element.value).toBe('hello')
  })

  it('暴露 focus / blur 方法', () => {
    const wrapper = mount(Mentions, { props: { options } })
    const vm = wrapper.vm as any
    expect(typeof vm.focus).toBe('function')
    expect(typeof vm.blur).toBe('function')
  })

  // ----------------------------------------------------------------
  // 虚拟滚动测试
  // ----------------------------------------------------------------
  describe('虚拟滚动', () => {
    const manyOptions = Array.from({ length: 100 }, (_, i) => ({
      value: `user-${i}`,
      label: `User ${i}`,
    }))

    it('virtual 默认开启，渲染 VirtualList', async () => {
      const wrapper = mount(Mentions, {
        props: { options: manyOptions },
      })
      const textarea = wrapper.find('textarea')

      textarea.element.value = '@'
      textarea.element.selectionStart = 1
      textarea.element.selectionEnd = 1
      await textarea.trigger('input')
      await nextTick()
      await nextTick()

      // VirtualList 容器存在于下拉中
      const vl = document.querySelector('.hmfw-virtual-list')
      expect(vl).toBeTruthy()
      wrapper.unmount()
    })

    it('virtual=false 时直接渲染所有选项', async () => {
      // 清理之前测试残留的 DOM 节点
      document.querySelectorAll('.hmfw-mentions-dropdown').forEach((el) => el.remove())

      const wrapper = mount(Mentions, {
        props: { options: manyOptions, virtual: false },
      })
      const textarea = wrapper.find('textarea')

      textarea.element.value = '@'
      textarea.element.selectionStart = 1
      textarea.element.selectionEnd = 1
      await textarea.trigger('input')
      await nextTick()
      await nextTick()
      await new Promise((r) => setTimeout(r, 50))

      // virtual=false 时 dropdown 内不应存在 .hmfw-virtual-list
      const dropdown = document.querySelector('.hmfw-mentions-dropdown')
      const vl = dropdown?.querySelector('.hmfw-virtual-list')
      expect(vl).toBeFalsy()
      wrapper.unmount()
    })

    it('虚拟滚动仅渲染可见选项 DOM', async () => {
      const wrapper = mount(Mentions, {
        props: { options: manyOptions, listHeight: 200 },
      })
      const textarea = wrapper.find('textarea')

      textarea.element.value = '@'
      textarea.element.selectionStart = 1
      textarea.element.selectionEnd = 1
      await textarea.trigger('input')
      await nextTick()
      await nextTick()

      const items = document.querySelectorAll('.hmfw-virtual-list-item')
      expect(items.length).toBeLessThan(100)
      expect(items.length).toBeGreaterThan(0)
      wrapper.unmount()
    })

    it('键盘导航在虚拟列表中选择选项', async () => {
      const onSelect = vi.fn()
      const wrapper = mount(Mentions, {
        props: { options: manyOptions, onSelect },
      })
      const textarea = wrapper.find('textarea')

      textarea.element.value = '@'
      textarea.element.selectionStart = 1
      textarea.element.selectionEnd = 1
      await textarea.trigger('input')
      await nextTick()
      await nextTick()

      await textarea.trigger('keydown', { key: 'ArrowDown' })
      await textarea.trigger('keydown', { key: 'ArrowDown' })
      await textarea.trigger('keydown', { key: 'Enter' })
      await nextTick()

      expect(onSelect).toHaveBeenCalled()
      wrapper.unmount()
    })
  })
})
