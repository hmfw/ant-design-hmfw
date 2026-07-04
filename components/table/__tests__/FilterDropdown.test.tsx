import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { FilterDropdown } from '../FilterDropdown'

const filters = [
  { text: 'Alice', value: 'Alice' },
  { text: 'Bob', value: 'Bob' },
]

describe('FilterDropdown', () => {
  it('renders a checkbox per filter item', () => {
    const wrapper = mount(FilterDropdown, {
      props: { prefixCls: 'hmfw-table', filters, onConfirm: vi.fn() },
    })
    expect(wrapper.findAll('.hmfw-table-dropdown-menu-item input[type="checkbox"]').length).toBe(2)
  })

  it('checks and unchecks an item on repeated clicks', async () => {
    const onConfirm = vi.fn()
    const wrapper = mount(FilterDropdown, {
      props: { prefixCls: 'hmfw-table', filters, onConfirm },
    })
    const firstCheckbox = wrapper.findAll('.hmfw-table-dropdown-menu-item input[type="checkbox"]')[0]

    // 第一次点击：勾选
    await firstCheckbox.setValue(true)
    expect((firstCheckbox.element as HTMLInputElement).checked).toBe(true)

    // 确定后应携带被选中的值
    await wrapper.findAll('.hmfw-table-dropdown-btns .hmfw-btn')[1].trigger('click')
    expect(onConfirm).toHaveBeenLastCalledWith(['Alice'])

    // 第二次点击：取消勾选（回归点：change 回调需从事件对象取 target.checked）
    await firstCheckbox.setValue(false)
    expect((firstCheckbox.element as HTMLInputElement).checked).toBe(false)

    // 再次确定应为空数组
    await wrapper.findAll('.hmfw-table-dropdown-btns .hmfw-btn')[1].trigger('click')
    expect(onConfirm).toHaveBeenLastCalledWith([])
  })

  it('single-select mode keeps only the last checked item', async () => {
    const onConfirm = vi.fn()
    const wrapper = mount(FilterDropdown, {
      props: { prefixCls: 'hmfw-table', filters, filterMultiple: false, onConfirm },
    })
    const [first, second] = wrapper.findAll('.hmfw-table-dropdown-menu-item input[type="checkbox"]')

    await first.setValue(true)
    await second.setValue(true)
    await wrapper.findAll('.hmfw-table-dropdown-btns .hmfw-btn')[1].trigger('click')
    expect(onConfirm).toHaveBeenLastCalledWith(['Bob'])
  })

  it('reset clears selection and confirms empty', async () => {
    const onConfirm = vi.fn()
    const wrapper = mount(FilterDropdown, {
      props: { prefixCls: 'hmfw-table', filters, filteredValue: ['Alice'], onConfirm },
    })
    // 重置按钮为第一个
    await wrapper.findAll('.hmfw-table-dropdown-btns .hmfw-btn')[0].trigger('click')
    expect(onConfirm).toHaveBeenLastCalledWith([])
  })
})
