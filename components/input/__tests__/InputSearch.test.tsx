import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { InputSearch } from '../index'
import { SearchOutlined, AudioOutlined } from '@hmfw/icons'

describe('InputSearch', () => {
  it('renders an input with a clickable search icon by default', () => {
    const wrapper = mount(InputSearch)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('.hmfw-input-search-button').exists()).toBe(true)
    // 默认（无 enterButton）不渲染独立按钮
    expect(wrapper.find('.hmfw-input-search-with-button').exists()).toBe(false)
  })

  // 回归：此前传 prefix 会把图标组件当作 DOM 属性设到 <span> 上导致崩溃
  it('renders prefix (icon component) without crashing', () => {
    const wrapper = mount(InputSearch, { props: { prefix: SearchOutlined } })
    expect(wrapper.find('.hmfw-input-prefix .hmfw-icon').exists()).toBe(true)
  })

  it('emits search with current value on icon click', async () => {
    const wrapper = mount(InputSearch)
    await wrapper.find('input').setValue('kiro')
    await wrapper.find('.hmfw-input-search-button').trigger('click')
    const search = wrapper.emitted('search')!
    expect(search[0][0]).toBe('kiro')
    expect(search[0][2]).toEqual({ source: 'input' })
  })

  it('emits search on Enter key', async () => {
    const wrapper = mount(InputSearch)
    await wrapper.find('input').setValue('abc')
    await wrapper.find('input').trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('search')![0][0]).toBe('abc')
  })

  it('does not emit search when loading', async () => {
    const wrapper = mount(InputSearch, { props: { loading: true } })
    await wrapper.find('input').setValue('abc')
    await wrapper.find('.hmfw-input-search-button').trigger('click')
    expect(wrapper.emitted('search')).toBeFalsy()
  })

  it('renders a text enter button and triggers search on click', async () => {
    const wrapper = mount(InputSearch, { props: { enterButton: '搜索' } })
    expect(wrapper.find('.hmfw-input-search-with-button').exists()).toBe(true)
    const btn = wrapper.find('.hmfw-btn')
    expect(btn.exists()).toBe(true)
    // Button 会在两个中文字之间自动插入空格（autoInsertSpace）
    expect(btn.text().replace(/\s/g, '')).toContain('搜索')
    await wrapper.find('input').setValue('q')
    await btn.trigger('click')
    expect(wrapper.emitted('search')![0][0]).toBe('q')
  })

  it('renders an icon-only enter button when enterButton is true', () => {
    const wrapper = mount(InputSearch, { props: { enterButton: true } })
    expect(wrapper.find('.hmfw-input-search-with-button .hmfw-btn-icon .anticon').exists()).toBe(true)
  })

  it('uses a custom searchIcon component in icon mode', () => {
    const wrapper = mount(InputSearch, { props: { searchIcon: AudioOutlined } })
    expect(wrapper.find('.hmfw-input-search-button .hmfw-icon').exists()).toBe(true)
  })

  it('emits clear and a clear-source search when allowClear clears the value', async () => {
    const wrapper = mount(InputSearch, { props: { value: 'x', allowClear: true } })
    await wrapper.find('.hmfw-input-clear-icon').trigger('click')
    expect(wrapper.emitted('clear')).toBeTruthy()
    const search = wrapper.emitted('search')!
    const last = search[search.length - 1]
    expect(last[0]).toBe('')
    expect(last[2]).toEqual({ source: 'clear' })
  })

  it('emits update:value on input', async () => {
    const wrapper = mount(InputSearch)
    await wrapper.find('input').setValue('hello')
    expect(wrapper.emitted('update:value')![0]).toEqual(['hello'])
  })
})
