import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { nextTick, h, ref } from 'vue'
import { AutoComplete } from '../AutoComplete'

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
]

describe('AutoComplete', () => {
  it('renders correctly', () => {
    const wrapper = mount(AutoComplete, { props: { options } })
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('shows placeholder', () => {
    const wrapper = mount(AutoComplete, { props: { options, placeholder: '搜索' } })
    expect(wrapper.find('input').attributes('placeholder')).toBe('搜索')
  })

  it('disabled state', () => {
    const wrapper = mount(AutoComplete, { props: { options, disabled: true } })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('displays controlled value', () => {
    const wrapper = mount(AutoComplete, { props: { options, value: 'apple' } })
    expect(wrapper.find('input').element.value).toBe('apple')
  })

  it('small size maps to input -sm class', () => {
    const wrapper = mount(AutoComplete, { props: { options, size: 'small' } })
    expect(wrapper.find('.hmfw-input-affix-wrapper-sm').exists()).toBe(true)
    expect(wrapper.find('input.hmfw-input-sm').exists()).toBe(true)
  })

  it('large size maps to input -lg class', () => {
    const wrapper = mount(AutoComplete, { props: { options, size: 'large' } })
    expect(wrapper.find('.hmfw-input-affix-wrapper-lg').exists()).toBe(true)
    expect(wrapper.find('input.hmfw-input-lg').exists()).toBe(true)
  })

  it('middle size adds no size suffix class', () => {
    const wrapper = mount(AutoComplete, { props: { options, size: 'middle' } })
    expect(wrapper.find('.hmfw-input-affix-wrapper-middle').exists()).toBe(false)
    expect(wrapper.find('.hmfw-input-affix-wrapper-lg').exists()).toBe(false)
    expect(wrapper.find('.hmfw-input-affix-wrapper-sm').exists()).toBe(false)
  })

  it('error status', () => {
    const wrapper = mount(AutoComplete, { props: { options, status: 'error' } })
    expect(wrapper.find('.hmfw-input-affix-wrapper-status-error').exists()).toBe(true)
  })

  it('emits search on input', async () => {
    const wrapper = mount(AutoComplete, { props: { options }, attachTo: document.body })
    await wrapper.find('input').setValue('ap')
    await wrapper.find('input').trigger('input')
    expect(wrapper.emitted('search')).toBeTruthy()
    wrapper.unmount()
  })

  it('emits change on input', async () => {
    const wrapper = mount(AutoComplete, { props: { options }, attachTo: document.body })
    await wrapper.find('input').setValue('ap')
    await wrapper.find('input').trigger('input')
    expect(wrapper.emitted('change')).toBeTruthy()
    wrapper.unmount()
  })

  it('filterOption=false shows all options', async () => {
    const wrapper = mount(AutoComplete, {
      props: { options, filterOption: false, value: 'zzz' },
      attachTo: document.body,
    })
    await wrapper.find('input').trigger('focus')
    expect(document.querySelectorAll('.hmfw-auto-complete-dropdown-item').length).toBe(3)
    wrapper.unmount()
  })

  it('opens dropdown on focus and renders options', async () => {
    const wrapper = mount(AutoComplete, { props: { options }, attachTo: document.body })
    await wrapper.find('input').trigger('focus')
    expect(document.querySelector('.hmfw-auto-complete-dropdown')).toBeTruthy()
    expect(document.querySelectorAll('.hmfw-auto-complete-dropdown-item').length).toBe(3)
    wrapper.unmount()
  })

  it('default-activates the first option on open', async () => {
    const wrapper = mount(AutoComplete, { props: { options }, attachTo: document.body })
    await wrapper.find('input').trigger('focus')
    expect(document.querySelector('.hmfw-auto-complete-dropdown-item-active')?.textContent).toBe('Apple')
    wrapper.unmount()
  })

  it('does not activate first option when defaultActiveFirstOption=false', async () => {
    const wrapper = mount(AutoComplete, {
      props: { options, defaultActiveFirstOption: false },
      attachTo: document.body,
    })
    await wrapper.find('input').trigger('focus')
    expect(document.querySelector('.hmfw-auto-complete-dropdown-item-active')).toBeNull()
    wrapper.unmount()
  })

  it('Enter selects the active option and emits select', async () => {
    const wrapper = mount(AutoComplete, { props: { options }, attachTo: document.body })
    const input = wrapper.find('input')
    await input.trigger('focus')
    await input.trigger('keydown', { key: 'Enter' })
    const selected = wrapper.emitted('select')
    expect(selected).toBeTruthy()
    expect(selected![0]).toEqual(['apple', options[0]])
    wrapper.unmount()
  })

  it('ArrowDown moves the active option', async () => {
    const wrapper = mount(AutoComplete, { props: { options }, attachTo: document.body })
    const input = wrapper.find('input')
    await input.trigger('focus')
    await input.trigger('keydown', { key: 'ArrowDown' })
    await input.trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('select')![0][0]).toBe('banana')
    wrapper.unmount()
  })

  it('skips disabled options when navigating', async () => {
    const wrapper = mount(AutoComplete, {
      props: {
        options: [
          { value: 'a', label: 'A' },
          { value: 'b', label: 'B', disabled: true },
          { value: 'c', label: 'C' },
        ],
      },
      attachTo: document.body,
    })
    const input = wrapper.find('input')
    await input.trigger('focus')
    await input.trigger('keydown', { key: 'ArrowDown' })
    await input.trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('select')![0][0]).toBe('c')
    wrapper.unmount()
  })

  it('does not select a disabled option on click', async () => {
    const wrapper = mount(AutoComplete, {
      props: {
        options: [{ value: 'a', label: 'A', disabled: true }],
      },
      attachTo: document.body,
    })
    await wrapper.find('input').trigger('focus')
    const item = document.querySelector('.hmfw-auto-complete-dropdown-item-disabled') as HTMLElement
    item.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('select')).toBeFalsy()
    wrapper.unmount()
  })

  it('backfill writes the highlighted value while navigating', async () => {
    const wrapper = mount(AutoComplete, {
      props: { options, backfill: true },
      attachTo: document.body,
    })
    const input = wrapper.find('input')
    await input.trigger('focus')
    await input.trigger('keydown', { key: 'ArrowDown' })
    expect(wrapper.emitted('update:value')!.pop()).toEqual(['banana'])
    wrapper.unmount()
  })

  it('allowClear shows clear icon and clears value', async () => {
    const wrapper = mount(AutoComplete, {
      props: { options, allowClear: true, value: 'apple' },
      attachTo: document.body,
    })
    const clear = wrapper.find('.hmfw-input-clear-icon')
    expect(clear.exists()).toBe(true)
    await clear.trigger('mousedown')
    expect(wrapper.emitted('clear')).toBeTruthy()
    expect(wrapper.emitted('update:value')!.pop()).toEqual([''])
    wrapper.unmount()
  })

  it('does not show clear icon without a value', () => {
    const wrapper = mount(AutoComplete, { props: { options, allowClear: true } })
    expect(wrapper.find('.hmfw-input-clear-icon').exists()).toBe(false)
  })

  it('emits openChange when the dropdown opens and closes', async () => {
    const wrapper = mount(AutoComplete, { props: { options }, attachTo: document.body })
    const input = wrapper.find('input')
    await input.trigger('focus')
    await input.trigger('keydown', { key: 'Escape' })
    const events = wrapper.emitted('openChange')
    expect(events).toBeTruthy()
    expect(events![0]).toEqual([true])
    expect(events!.pop()).toEqual([false])
    wrapper.unmount()
  })

  it('renders an empty panel with default notFoundContent when there are no options', async () => {
    const wrapper = mount(AutoComplete, { props: { options: [] }, attachTo: document.body })
    await wrapper.find('input').trigger('focus')
    // 对齐 antd：无选项时展示空状态面板，而非整体隐藏
    const empty = document.querySelector('.hmfw-auto-complete-dropdown-empty')
    expect(empty).toBeTruthy()
    expect(empty?.textContent).toBe('无匹配结果')
    wrapper.unmount()
  })

  it('renders notFoundContent when options are empty', async () => {
    const wrapper = mount(AutoComplete, {
      props: { options: [], notFoundContent: '无匹配' },
      attachTo: document.body,
    })
    await wrapper.find('input').trigger('focus')
    expect(document.querySelector('.hmfw-auto-complete-dropdown-empty')?.textContent).toBe('无匹配')
    wrapper.unmount()
  })

  it('exposes focus and blur methods', () => {
    const wrapper = mount(AutoComplete, { props: { options }, attachTo: document.body })
    expect(typeof (wrapper.vm as any).focus).toBe('function')
    expect(typeof (wrapper.vm as any).blur).toBe('function')
    wrapper.unmount()
  })

  it('renders custom clearIcon from allowClear object', () => {
    const wrapper = mount(AutoComplete, {
      props: { options, value: 'apple', allowClear: { clearIcon: 'X' } },
    })
    expect(wrapper.find('.hmfw-input-clear-icon').text()).toBe('X')
  })

  // ----------------------------------------------------------------
  // 重构新增：受控 open / optionFilterProp / backfill / autoFocus / 边界
  // ----------------------------------------------------------------
  describe('受控与边界', () => {
    it('受控 open 下内部交互不改变展示状态，但仍 emit openChange', async () => {
      const wrapper = mount(AutoComplete, {
        props: { options, open: false },
        attachTo: document.body,
      })
      await wrapper.find('input').trigger('focus')
      // open 受控为 false，聚焦不应真正展开面板
      expect(document.querySelector('.hmfw-auto-complete-dropdown')).toBeNull()
      // 但应通知父级期望展开
      expect(wrapper.emitted('openChange')?.[0]).toEqual([true])
      wrapper.unmount()
    })

    it('openChange 与 dropdownVisibleChange 别名同时触发', async () => {
      const wrapper = mount(AutoComplete, { props: { options }, attachTo: document.body })
      await wrapper.find('input').trigger('focus')
      expect(wrapper.emitted('openChange')?.[0]).toEqual([true])
      expect(wrapper.emitted('dropdownVisibleChange')?.[0]).toEqual([true])
      wrapper.unmount()
    })

    it('optionFilterProp="label" 时按 label 过滤', async () => {
      const wrapper = mount(AutoComplete, {
        props: {
          options: [
            { value: '1', label: 'Apple' },
            { value: '2', label: 'Banana' },
          ],
          optionFilterProp: 'label',
          value: 'app',
        },
        attachTo: document.body,
      })
      await wrapper.find('input').trigger('focus')
      const items = document.querySelectorAll('.hmfw-auto-complete-dropdown-item')
      expect(items.length).toBe(1)
      expect(items[0].textContent).toBe('Apple')
      wrapper.unmount()
    })

    it('label 为非字符串时内置过滤回退到 value 且不抛错', async () => {
      const wrapper = mount(AutoComplete, {
        props: {
          options: [
            { value: 'apple', label: h('span', 'Apple') },
            { value: 'banana', label: h('span', 'Banana') },
          ],
          optionFilterProp: 'label',
          value: 'app',
        },
        attachTo: document.body,
      })
      await wrapper.find('input').trigger('focus')
      const items = document.querySelectorAll('.hmfw-auto-complete-dropdown-item')
      // 回退到 value 匹配 'app' → 命中 apple
      expect(items.length).toBe(1)
      wrapper.unmount()
    })

    it('renders custom notFoundContent as VNode', async () => {
      const wrapper = mount(AutoComplete, {
        props: { options: [], notFoundContent: h('div', { class: 'my-empty' }, '空空如也') },
        attachTo: document.body,
      })
      await wrapper.find('input').trigger('focus')
      expect(document.querySelector('.hmfw-auto-complete-dropdown-empty .my-empty')?.textContent).toBe('空空如也')
      wrapper.unmount()
    })

    it('backfill 箭头移动仅回填显示、不 emit change；Enter 才 emit change/select', async () => {
      const value = ref('')
      const wrapper = mount(AutoComplete, {
        props: {
          options,
          backfill: true,
          value: value.value,
          'onUpdate:value': (v: string) => {
            value.value = v
          },
        },
        attachTo: document.body,
      })
      const input = wrapper.find('input')
      await input.trigger('focus')
      await input.trigger('keydown', { key: 'ArrowDown' })
      await wrapper.setProps({ value: value.value })
      // 回填了显示值，但不触发 change
      expect(input.element.value).toBe('banana')
      expect(wrapper.emitted('change')).toBeFalsy()
      await input.trigger('keydown', { key: 'Enter' })
      expect(wrapper.emitted('change')?.[0]).toEqual(['banana'])
      expect(wrapper.emitted('select')?.[0]).toEqual(['banana', options[1]])
      wrapper.unmount()
    })

    it('autoFocus 时挂载后自动聚焦', async () => {
      const wrapper = mount(AutoComplete, { props: { options, autoFocus: true }, attachTo: document.body })
      await nextTick()
      expect(document.activeElement).toBe(wrapper.find('input').element)
      wrapper.unmount()
    })

    it('透传 id 到 input', () => {
      const wrapper = mount(AutoComplete, { props: { options, id: 'ac-1' } })
      expect(wrapper.find('input').attributes('id')).toBe('ac-1')
    })

    it('过滤后 active 项落在禁用/越界时自动重定位到首个可用项', async () => {
      const value = ref('')
      const wrapper = mount(AutoComplete, {
        props: {
          options: [
            { value: 'a', label: 'A' },
            { value: 'b', label: 'B' },
            { value: 'c', label: 'C' },
          ],
          value: value.value,
          'onUpdate:value': (v: string) => {
            value.value = v
          },
        },
        attachTo: document.body,
      })
      const input = wrapper.find('input')
      await input.trigger('focus')
      // 移动到最后一项
      await input.trigger('keydown', { key: 'ArrowDown' })
      await input.trigger('keydown', { key: 'ArrowDown' })
      // 输入过滤只剩一项，active 应重定位到首个可用项
      await input.setValue('a')
      await input.trigger('input')
      await wrapper.setProps({ value: value.value })
      await nextTick()
      await input.trigger('keydown', { key: 'Enter' })
      expect(wrapper.emitted('select')?.pop()?.[0]).toBe('a')
      wrapper.unmount()
    })
  })

  // ----------------------------------------------------------------
  // 虚拟滚动测试
  // ----------------------------------------------------------------
  describe('虚拟滚动', () => {
    const manyOptions = Array.from({ length: 100 }, (_, i) => ({
      value: `option-${i}`,
      label: `Option ${i}`,
    }))

    it('virtual=true 时渲染 VirtualList', async () => {
      const wrapper = mount(AutoComplete, {
        props: { options: manyOptions, virtual: true, open: true },
        attachTo: document.body,
      })
      await nextTick()
      await new Promise((r) => setTimeout(r, 50))

      const vl = document.querySelector('.hmfw-auto-complete-dropdown .hmfw-virtual-list')
      expect(vl).toBeTruthy()
      wrapper.unmount()
    })

    it('virtual=false 时不渲染 VirtualList', async () => {
      const wrapper = mount(AutoComplete, {
        props: { options: manyOptions, virtual: false, open: true },
        attachTo: document.body,
      })
      await nextTick()
      await new Promise((r) => setTimeout(r, 50))

      const vl = document.querySelector('.hmfw-auto-complete-dropdown .hmfw-virtual-list')
      expect(vl).toBeFalsy()
      wrapper.unmount()
    })

    it('虚拟滚动仅渲染可见选项', async () => {
      const wrapper = mount(AutoComplete, {
        props: { options: manyOptions, virtual: true, open: true, listHeight: 200 },
        attachTo: document.body,
      })
      await nextTick()
      await new Promise((r) => setTimeout(r, 50))

      const items = document.querySelectorAll('.hmfw-auto-complete-dropdown .hmfw-virtual-list-item')
      expect(items.length).toBeLessThan(100)
      expect(items.length).toBeGreaterThan(0)
      wrapper.unmount()
    })

    it('虚拟滚动选项支持选择交互', async () => {
      const wrapper = mount(AutoComplete, {
        props: { options: manyOptions, virtual: true, open: true },
        attachTo: document.body,
      })
      await nextTick()
      await new Promise((r) => setTimeout(r, 50))

      const items = document.querySelectorAll('.hmfw-auto-complete-dropdown .hmfw-virtual-list-item')
      expect(items.length).toBeGreaterThan(0)
      // 第一项应可交互
      const firstItem = items[0]?.querySelector('.hmfw-auto-complete-dropdown-item')
      expect(firstItem).toBeTruthy()
      wrapper.unmount()
    })
  })

  describe('半受控 defaultValue / defaultOpen', () => {
    it('未传 value 时 defaultValue 作为初始值', () => {
      const wrapper = mount(AutoComplete, { props: { options, defaultValue: 'apple' } })
      expect(wrapper.find('input').element.value).toBe('apple')
    })

    it('未传 value 时输入后内部值更新（非受控）', async () => {
      const wrapper = mount(AutoComplete, { props: { options, defaultValue: 'a' }, attachTo: document.body })
      await wrapper.find('input').setValue('ap')
      await wrapper.find('input').trigger('input')
      await nextTick()
      expect(wrapper.find('input').element.value).toBe('ap')
      expect(wrapper.emitted('update:value')?.at(-1)).toEqual(['ap'])
      wrapper.unmount()
    })

    it('传入 value 时受控优先，忽略 defaultValue', () => {
      const wrapper = mount(AutoComplete, { props: { options, value: 'banana', defaultValue: 'apple' } })
      expect(wrapper.find('input').element.value).toBe('banana')
    })

    it('defaultOpen 使下拉初始展开', async () => {
      const wrapper = mount(AutoComplete, { props: { options, defaultOpen: true }, attachTo: document.body })
      await nextTick()
      expect(document.querySelector('.hmfw-auto-complete-dropdown')).toBeTruthy()
      wrapper.unmount()
    })
  })
})
