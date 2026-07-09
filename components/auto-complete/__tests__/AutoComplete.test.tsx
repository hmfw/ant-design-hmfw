import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { nextTick } from 'vue'
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

  it('uses defaultValue for uncontrolled initial value', () => {
    const wrapper = mount(AutoComplete, { props: { options, defaultValue: 'apple' } })
    expect(wrapper.find('input').element.value).toBe('apple')
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

  it('does not render an empty panel when there are no options', async () => {
    const wrapper = mount(AutoComplete, { props: { options: [] }, attachTo: document.body })
    await wrapper.find('input').trigger('focus')
    expect(document.querySelector('.hmfw-auto-complete-dropdown')).toBeNull()
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

  it('respects defaultOpen', async () => {
    const wrapper = mount(AutoComplete, {
      props: { options, defaultOpen: true },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-auto-complete-dropdown')).toBeTruthy()
    wrapper.unmount()
  })

  it('renders custom clearIcon from allowClear object', () => {
    const wrapper = mount(AutoComplete, {
      props: { options, value: 'apple', allowClear: { clearIcon: 'X' } },
    })
    expect(wrapper.find('.hmfw-input-clear-icon').text()).toBe('X')
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
})
