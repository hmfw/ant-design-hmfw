import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { Select } from '../Select'
import { nextTick } from 'vue'

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange', disabled: true },
]

describe('Select', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('renders selector', () => {
    const wrapper = mount(Select, { props: { options }, attachTo: document.body })
    expect(wrapper.find('.hmfw-select-selector').exists()).toBe(true)
    wrapper.unmount()
  })

  it('shows placeholder', () => {
    const wrapper = mount(Select, {
      props: { options, placeholder: 'Choose one' },
      attachTo: document.body,
    })
    expect(wrapper.find('.hmfw-select-selection-placeholder').text()).toBe('Choose one')
    wrapper.unmount()
  })

  it('opens dropdown on click', async () => {
    const wrapper = mount(Select, { props: { options }, attachTo: document.body })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    expect(document.querySelector('.hmfw-select-dropdown')).not.toBeNull()
    wrapper.unmount()
  })

  it('selects an option and emits value and option', async () => {
    const wrapper = mount(Select, { props: { options }, attachTo: document.body })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const items = document.querySelectorAll('.hmfw-select-item-option')
    ;(items[0] as HTMLElement).click()
    await nextTick()
    const changeEvent = wrapper.emitted('change')
    expect(changeEvent).toBeTruthy()
    expect(changeEvent?.[0][0]).toBe('apple')
    expect(changeEvent?.[0][1]).toEqual(options[0])
    wrapper.unmount()
  })

  it('does not select disabled option', async () => {
    const wrapper = mount(Select, { props: { options }, attachTo: document.body })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const items = document.querySelectorAll('.hmfw-select-item-option')
    ;(items[2] as HTMLElement).click()
    await nextTick()
    expect(wrapper.emitted('change')).toBeFalsy()
    wrapper.unmount()
  })

  it('shows selected value', () => {
    const wrapper = mount(Select, {
      props: { options, value: 'apple' },
      attachTo: document.body,
    })
    expect(wrapper.find('.hmfw-select-selection-item').text()).toBe('Apple')
    wrapper.unmount()
  })

  it('supports multiple mode', async () => {
    const wrapper = mount(Select, {
      props: { options, mode: 'multiple' },
      attachTo: document.body,
    })
    expect(wrapper.find('.hmfw-select').classes()).toContain('hmfw-select-multiple')
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const items = document.querySelectorAll('.hmfw-select-item-option')
    ;(items[0] as HTMLElement).click()
    await nextTick()
    ;(items[1] as HTMLElement).click()
    await nextTick()
    const lastChange = wrapper.emitted('change')
    expect(lastChange).toBeTruthy()
    expect(lastChange?.[1][0]).toEqual(['apple', 'banana'])
    expect(lastChange?.[1][1]).toEqual([options[0], options[1]])
    wrapper.unmount()
  })

  it('clears value when allowClear clicked', async () => {
    const wrapper = mount(Select, {
      props: { options, value: 'apple', allowClear: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-clear').trigger('click')
    expect(wrapper.emitted('clear')).toBeTruthy()
    wrapper.unmount()
  })

  it('is disabled', () => {
    const wrapper = mount(Select, { props: { options, disabled: true }, attachTo: document.body })
    expect(wrapper.find('.hmfw-select').classes()).toContain('hmfw-select-disabled')
    wrapper.unmount()
  })

  it('shows size classes', () => {
    const small = mount(Select, { props: { options, size: 'small' }, attachTo: document.body })
    expect(small.find('.hmfw-select').classes()).toContain('hmfw-select-small')
    small.unmount()
    const large = mount(Select, { props: { options, size: 'large' }, attachTo: document.body })
    expect(large.find('.hmfw-select').classes()).toContain('hmfw-select-large')
    large.unmount()
  })

  it('supports labelInValue', async () => {
    const wrapper = mount(Select, {
      props: { options, labelInValue: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const items = document.querySelectorAll('.hmfw-select-item-option')
    ;(items[0] as HTMLElement).click()
    await nextTick()
    const changeEvent = wrapper.emitted('change')
    expect(changeEvent?.[0][0]).toEqual({ value: 'apple', label: 'Apple', key: 'apple' })
    wrapper.unmount()
  })

  it('supports maxCount in multiple mode', async () => {
    const wrapper = mount(Select, {
      props: { options, mode: 'multiple', maxCount: 2 },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const items = document.querySelectorAll('.hmfw-select-item-option')
    ;(items[0] as HTMLElement).click()
    await nextTick()
    ;(items[1] as HTMLElement).click()
    await nextTick()
    // Try to select third - should be blocked
    ;(items[2] as HTMLElement).click()
    await nextTick()
    const lastChange = wrapper.emitted('change')
    expect(lastChange?.[lastChange.length - 1][0]).toEqual(['apple', 'banana'])
    wrapper.unmount()
  })

  it('removes last tag with Backspace when input is empty', async () => {
    const wrapper = mount(Select, {
      props: { options, mode: 'multiple', value: ['apple', 'banana'] },
      attachTo: document.body,
    })
    // 输入框为空时按 Backspace，应删除最后一个标签 banana
    await wrapper.find('.hmfw-select-selector').trigger('keydown', { key: 'Backspace' })
    await nextTick()
    const changeEvent = wrapper.emitted('change')
    expect(changeEvent?.[0][0]).toEqual(['apple'])
    expect(wrapper.emitted('deselect')?.[0][0]).toBe('banana')
    wrapper.unmount()
  })

  it('removes only one tag with Backspace from search input (no double delete)', async () => {
    // 回归：keydown 从 input 冒泡到 selector，此前双触发会一次删两个标签
    const wrapper = mount(Select, {
      props: { options, mode: 'multiple', showSearch: true, value: ['apple', 'banana', 'orange'] },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const input = document.querySelector('.hmfw-select-selection-search-input') as HTMLInputElement
    expect(input).not.toBeNull()
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Backspace', bubbles: true }))
    await nextTick()
    const changeEvent = wrapper.emitted('change')
    // 只应删除最后一个 orange，保留 apple、banana
    expect(changeEvent?.[0][0]).toEqual(['apple', 'banana'])
    expect(wrapper.emitted('deselect')).toHaveLength(1)
    wrapper.unmount()
  })

  it('does not remove tag with Backspace when input has text', async () => {
    const wrapper = mount(Select, {
      props: { options, mode: 'tags', value: ['apple'] },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const input = document.querySelector('.hmfw-select-selection-search-input') as HTMLInputElement
    input.value = 'typing'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Backspace', bubbles: true }))
    await nextTick()
    // 输入框有内容时，Backspace 不应删除标签
    expect(wrapper.emitted('deselect')).toBeFalsy()
    wrapper.unmount()
  })

  it('renders search input in tags mode without explicit showSearch', async () => {
    // tags 模式应隐式启用搜索输入框，否则无法创建标签
    const wrapper = mount(Select, {
      props: { options: [], mode: 'tags' },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const input = document.querySelector('.hmfw-select-selection-search-input') as HTMLInputElement
    expect(input).not.toBeNull()
    input.value = 'newtag'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    await nextTick()
    expect(wrapper.emitted('change')?.[0][0]).toEqual(['newtag'])
    wrapper.unmount()
  })

  it('supports tags mode with tokenSeparators', async () => {
    const wrapper = mount(Select, {
      props: { options: [], mode: 'tags', tokenSeparators: [','] },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const input = document.querySelector('.hmfw-select-selection-search-input') as HTMLInputElement
    expect(input).not.toBeNull()
    input.value = 'tag1,tag2'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()
    const changeEvent = wrapper.emitted('change')
    expect(changeEvent?.[0][0]).toEqual(['tag1', 'tag2'])
    wrapper.unmount()
  })

  it('supports OptGroup', async () => {
    const groupOptions = [
      {
        label: 'Fruits',
        options: [
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
        ],
      },
      {
        label: 'Vegetables',
        options: [{ label: 'Carrot', value: 'carrot' }],
      },
    ]
    const wrapper = mount(Select, {
      props: { options: groupOptions },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    expect(document.querySelectorAll('.hmfw-select-item-group').length).toBe(2)
    expect(document.querySelectorAll('.hmfw-select-item-group-label')[0].textContent).toBe('Fruits')
    wrapper.unmount()
  })

  it('filters options by search input in non-virtual mode', async () => {
    const wrapper = mount(Select, {
      props: { options, showSearch: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()

    const input = document.querySelector('.hmfw-select-selection-search-input') as HTMLInputElement
    input.value = 'app'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()

    const items = document.querySelectorAll('.hmfw-select-item-option')
    expect(items.length).toBe(1)
    expect(items[0].textContent).toContain('Apple')
    wrapper.unmount()
  })

  it('filters within groups and hides empty groups when searching', async () => {
    const groupOptions = [
      {
        label: 'Fruits',
        options: [
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
        ],
      },
      { label: 'Vegetables', options: [{ label: 'Carrot', value: 'carrot' }] },
    ]
    const wrapper = mount(Select, {
      props: { options: groupOptions, showSearch: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()

    const input = document.querySelector('.hmfw-select-selection-search-input') as HTMLInputElement
    input.value = 'apple'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()

    // 只剩 Fruits 组，且组内只剩 Apple；Vegetables 组被隐藏
    const groups = document.querySelectorAll('.hmfw-select-item-group')
    expect(groups.length).toBe(1)
    expect(document.querySelectorAll('.hmfw-select-item-group-label')[0].textContent).toBe('Fruits')
    const items = document.querySelectorAll('.hmfw-select-item-option')
    expect(items.length).toBe(1)
    expect(items[0].textContent).toContain('Apple')
    wrapper.unmount()
  })

  it('exposes focus and blur methods', () => {
    const wrapper = mount(Select, { props: { options }, attachTo: document.body })
    expect(wrapper.vm.focus).toBeDefined()
    expect(wrapper.vm.blur).toBeDefined()
    wrapper.unmount()
  })

  it('supports keyboard navigation', async () => {
    const wrapper = mount(Select, { props: { options }, attachTo: document.body })
    const selector = wrapper.find('.hmfw-select-selector')
    await selector.trigger('keydown', { key: 'ArrowDown' })
    await nextTick()
    expect(document.querySelector('.hmfw-select-dropdown')).not.toBeNull()
    wrapper.unmount()
  })

  // 边界条件测试
  it('handles empty options with keyboard navigation', async () => {
    const wrapper = mount(Select, { props: { options: [] }, attachTo: document.body })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const selector = wrapper.find('.hmfw-select-selector')
    // 不应该崩溃
    await selector.trigger('keydown', { key: 'ArrowDown' })
    await selector.trigger('keydown', { key: 'ArrowUp' })
    await nextTick()
    expect(document.querySelector('.hmfw-select-item-empty')).not.toBeNull()
    wrapper.unmount()
  })

  it('supports multiple tokenSeparators', async () => {
    const wrapper = mount(Select, {
      props: { options: [], mode: 'tags', tokenSeparators: [',', ';', '|'], showSearch: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const input = document.querySelector('.hmfw-select-selection-search-input') as HTMLInputElement
    expect(input).not.toBeNull()
    // 混合使用多种分隔符
    input.value = 'tag1,tag2;tag3|tag4'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()
    const changeEvent = wrapper.emitted('change')
    expect(changeEvent?.[0][0]).toEqual(['tag1', 'tag2', 'tag3', 'tag4'])
    wrapper.unmount()
  })

  it('cleans up dynamic options when tags are deselected', async () => {
    const wrapper = mount(Select, {
      props: { options: [], mode: 'tags', showSearch: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const input = document.querySelector('.hmfw-select-selection-search-input') as HTMLInputElement

    // 创建动态标签
    input.value = 'dynamic'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await wrapper.find('.hmfw-select-selector').trigger('keydown', { key: 'Enter' })
    await nextTick()

    expect(wrapper.emitted('change')?.[0][0]).toEqual(['dynamic'])

    // 移除标签
    const removeBtn = document.querySelector('.hmfw-select-selection-item-remove') as HTMLElement
    expect(removeBtn).not.toBeNull()
    removeBtn.click()
    await nextTick()

    // 动态选项应该被清理
    expect(wrapper.emitted('change')?.[1][0]).toEqual([])
    wrapper.unmount()
  })

  it('respects maxCount in tags mode with Enter key', async () => {
    const wrapper = mount(Select, {
      props: { options: [], mode: 'tags', maxCount: 2, showSearch: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()

    const getInput = () => document.querySelector('.hmfw-select-selection-search-input') as HTMLInputElement

    // 添加第一个标签
    let input = getInput()
    input.value = 'tag1'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    await nextTick()

    // 添加第二个标签
    input = getInput()
    input.value = 'tag2'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    await nextTick()

    // 尝试添加第三个标签（应该被阻止）
    input = getInput()
    input.value = 'tag3'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    await nextTick()

    const changes = wrapper.emitted('change')
    expect(changes).toBeTruthy()
    const lastValue = changes?.[changes.length - 1][0]
    expect(lastValue).toEqual(['tag1', 'tag2'])
    wrapper.unmount()
  })

  it('handles null and undefined values correctly', async () => {
    const wrapper = mount(Select, {
      props: { options, value: null },
      attachTo: document.body,
    })
    expect(wrapper.find('.hmfw-select-selection-placeholder').exists()).toBe(true)

    await wrapper.setProps({ value: undefined })
    expect(wrapper.find('.hmfw-select-selection-placeholder').exists()).toBe(true)
    wrapper.unmount()
  })

  it('supports custom fieldNames', async () => {
    const customOptions = [
      { name: 'Apple', id: 'apple' },
      { name: 'Banana', id: 'banana' },
    ]
    const wrapper = mount(Select, {
      props: {
        options: customOptions as any,
        fieldNames: { label: 'name', value: 'id' },
      },
      attachTo: document.body,
    })

    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()

    const items = document.querySelectorAll('.hmfw-select-item-option-content')
    expect(items[0].textContent).toBe('Apple')
    expect(items[1].textContent).toBe('Banana')

    ;(items[0].parentElement as HTMLElement).click()
    await nextTick()

    const changeEvent = wrapper.emitted('change')
    expect(changeEvent?.[0][0]).toBe('apple')
    wrapper.unmount()
  })

  it('supports custom groupLabel field in fieldNames', async () => {
    const groupOptions = [
      {
        title: 'Fruits',
        label: 'ignored',
        children: [{ label: 'Apple', value: 'apple' }],
      },
    ]
    const wrapper = mount(Select, {
      props: {
        options: groupOptions as any,
        fieldNames: { options: 'children', groupLabel: 'title' },
      },
      attachTo: document.body,
    })

    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()

    // 分组标题取 groupLabel 指定的 title 字段，而非 label
    expect(document.querySelectorAll('.hmfw-select-item-group-label')[0].textContent).toBe('Fruits')
    wrapper.unmount()
  })

  it('handles empty array value in multiple mode', async () => {
    const wrapper = mount(Select, {
      props: { options, mode: 'multiple', value: [] },
      attachTo: document.body,
    })
    expect(wrapper.find('.hmfw-select-selection-placeholder').exists()).toBe(true)
    wrapper.unmount()
  })

  it('prevents creating duplicate dynamic tags', async () => {
    const wrapper = mount(Select, {
      props: { options: [], mode: 'tags', tokenSeparators: [','], showSearch: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()
    const input = document.querySelector('.hmfw-select-selection-search-input') as HTMLInputElement

    // 第一次创建
    input.value = 'duplicate,duplicate'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()

    const changeEvent = wrapper.emitted('change')
    // 应该只创建一个
    expect(changeEvent?.[0][0]).toEqual(['duplicate'])
    wrapper.unmount()
  })

  it('virtual mode renders options with styled classes and a11y attributes', async () => {
    const opts = Array.from({ length: 50 }, (_, i) => ({ label: `Opt ${i}`, value: i }))
    const wrapper = mount(Select, {
      props: { options: opts, virtual: true, value: 0 },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-select-selector').trigger('click')
    await nextTick()

    // 虚拟项应与非虚拟项使用同一套有样式的类名，并具备无障碍属性
    const option = document.querySelector('.hmfw-select-item-option') as HTMLElement
    expect(option).not.toBeNull()
    expect(option.getAttribute('role')).toBe('option')
    expect(document.querySelector('.hmfw-select-item-option-selected')).not.toBeNull()
    expect(document.querySelector('.hmfw-select-item-option-content')).not.toBeNull()
    expect(document.querySelector('.hmfw-select-item-option-state')).not.toBeNull()
    wrapper.unmount()
  })

  describe('半受控 defaultValue / defaultOpen', () => {
    it('未传 value 时 defaultValue 作为初始值', () => {
      const wrapper = mount(Select, { props: { options, defaultValue: 'apple' }, attachTo: document.body })
      expect(wrapper.find('.hmfw-select-selection-item').text()).toBe('Apple')
      wrapper.unmount()
    })

    it('未传 value 时选择后内部值更新（非受控）', async () => {
      const wrapper = mount(Select, { props: { options, defaultValue: 'apple' }, attachTo: document.body })
      await wrapper.find('.hmfw-select-selector').trigger('click')
      await nextTick()
      const banana = Array.from(document.querySelectorAll('.hmfw-select-item-option')).find((el) =>
        el.textContent?.includes('Banana'),
      ) as HTMLElement
      banana.click()
      await nextTick()
      expect(wrapper.find('.hmfw-select-selection-item').text()).toBe('Banana')
      expect(wrapper.emitted('update:value')).toBeTruthy()
      wrapper.unmount()
    })

    it('传入 value 时受控优先，忽略 defaultValue', () => {
      const wrapper = mount(Select, {
        props: { options, value: 'banana', defaultValue: 'apple' },
        attachTo: document.body,
      })
      expect(wrapper.find('.hmfw-select-selection-item').text()).toBe('Banana')
      wrapper.unmount()
    })

    it('defaultOpen 使下拉初始展开', async () => {
      const wrapper = mount(Select, { props: { options, defaultOpen: true }, attachTo: document.body })
      await nextTick()
      expect(document.querySelector('.hmfw-select-item-option')).not.toBeNull()
      wrapper.unmount()
    })
  })
})
