import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { h } from 'vue'
import { Listy } from '../Listy'
import type { ListyGroupItem } from '../types'

describe('Listy', () => {
  it('渲染基础列表', () => {
    const data = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ]

    const wrapper = mount(Listy, {
      props: {
        data,
        height: 300,
        children: (item: any) => h('div', { class: 'test-item' }, item.name),
      },
    })

    expect(wrapper.find('.hmfw-listy').exists()).toBe(true)
    expect(wrapper.findAll('.hmfw-listy-item')).toHaveLength(3)
    expect(wrapper.findAll('.test-item')).toHaveLength(3)
  })

  it('支持自定义 itemKey', () => {
    const data = [
      { uid: 'a', name: 'A' },
      { uid: 'b', name: 'B' },
    ]

    const wrapper = mount(Listy, {
      props: {
        data,
        height: 200,
        itemKey: 'uid',
        children: (item: any) => h('div', {}, item.name),
      },
    })

    const items = wrapper.findAll('.hmfw-listy-item')
    expect(items).toHaveLength(2)
  })

  it('支持虚拟滚动', () => {
    const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, name: `Item ${i}` }))

    const wrapper = mount(Listy, {
      props: {
        data,
        height: 300,
        virtual: true,
        children: (item: any) => h('div', {}, item.name),
      },
    })

    expect(wrapper.find('.hmfw-listy').exists()).toBe(true)
    // 虚拟滚动应该只渲染可见项，不是全部 1000 项
  })

  it('支持分组数据', () => {
    const groups: ListyGroupItem[] = [
      {
        group: 'Group A',
        items: [
          { id: 1, name: 'A1' },
          { id: 2, name: 'A2' },
        ],
      },
      {
        group: 'Group B',
        items: [{ id: 3, name: 'B1' }],
      },
    ]

    const wrapper = mount(Listy, {
      props: {
        groups,
        height: 300,
        children: (item: any) => h('div', {}, item.name),
      },
    })

    expect(wrapper.findAll('.hmfw-listy-group-header')).toHaveLength(2)
    expect(wrapper.findAll('.hmfw-listy-item')).toHaveLength(3)
  })

  it('支持语义化 classNames', () => {
    const wrapper = mount(Listy, {
      props: {
        data: [{ id: 1 }],
        height: 100,
        classNames: {
          root: 'custom-root',
          item: 'custom-item',
        },
        children: (_item: any) => h('div', {}, 'Item'),
      },
    })

    expect(wrapper.find('.custom-root').exists()).toBe(true)
    expect(wrapper.find('.custom-item').exists()).toBe(true)
  })

  it('支持语义化 styles', () => {
    const wrapper = mount(Listy, {
      props: {
        data: [{ id: 1 }],
        height: 100,
        styles: {
          root: { padding: '10px' },
          item: { margin: '5px' },
        },
        children: (_item: any) => h('div', {}, 'Item'),
      },
    })

    const root = wrapper.find('.hmfw-listy')
    expect(root.attributes('style')).toContain('padding: 10px')

    const item = wrapper.find('.hmfw-listy-item')
    expect(item.attributes('style')).toContain('margin: 5px')
  })

  it('触发 onScroll 事件', async () => {
    const onScroll = vi.fn()

    const wrapper = mount(Listy, {
      props: {
        data: Array.from({ length: 100 }, (_, i) => ({ id: i })),
        height: 300,
        onScroll,
        children: (item: any) => h('div', {}, `Item ${item.id}`),
      },
    })

    await wrapper.find('.hmfw-listy').trigger('scroll')
    expect(onScroll).toHaveBeenCalled()
  })

  it('空数据显示空状态', () => {
    const wrapper = mount(Listy, {
      props: {
        data: [],
        height: 200,
        children: (item: any) => h('div', {}, item.name),
      },
    })

    expect(wrapper.find('.hmfw-listy-empty').exists()).toBe(true)
    expect(wrapper.find('.hmfw-listy-empty').text()).toContain('暂无数据')
  })

  it('暴露 scrollTo 方法', () => {
    const wrapper = mount(Listy, {
      props: {
        data: Array.from({ length: 100 }, (_, i) => ({ id: i })),
        height: 300,
        virtual: true,
        children: (_item: any) => h('div', {}, 'Item'),
      },
    })

    const instance = wrapper.vm as any
    expect(typeof instance.scrollTo).toBe('function')
    expect(typeof instance.getScrollInfo).toBe('function')

    // 调用不应报错
    instance.scrollTo(10)
    instance.scrollTo({ index: 20, align: 'top' })

    const info = instance.getScrollInfo()
    expect(info).toHaveProperty('scrollTop')
    expect(info).toHaveProperty('scrollHeight')
    expect(info).toHaveProperty('clientHeight')
  })

  it('支持函数式 itemKey', () => {
    const data = [
      { uid: 'x1', name: 'X' },
      { uid: 'y2', name: 'Y' },
    ]

    const itemKey = vi.fn((item: any) => item.uid)

    const wrapper = mount(Listy, {
      props: {
        data,
        height: 200,
        itemKey,
        children: (item: any) => h('div', {}, item.name),
      },
    })

    expect(wrapper.findAll('.hmfw-listy-item')).toHaveLength(2)
    expect(itemKey).toHaveBeenCalled()
  })

  it('分组支持粘性标题', () => {
    const groups: ListyGroupItem[] = [
      {
        group: 'Sticky Group',
        sticky: true,
        items: [{ id: 1 }],
      },
      {
        group: 'Non-sticky Group',
        sticky: false,
        items: [{ id: 2 }],
      },
    ]

    const wrapper = mount(Listy, {
      props: {
        groups,
        height: 300,
        children: (_item: any) => h('div', {}, 'Item'),
      },
    })

    const headers = wrapper.findAll('.hmfw-listy-group-header')
    expect(headers[0].classes()).toContain('hmfw-listy-group-header-sticky')
    expect(headers[1].classes()).not.toContain('hmfw-listy-group-header-sticky')
  })

  it('支持自定义 itemHeight', () => {
    const wrapper = mount(Listy, {
      props: {
        data: Array.from({ length: 100 }, (_, i) => ({ id: i })),
        height: 300,
        virtual: true,
        itemHeight: 50,
        children: (item: any) => h('div', {}, `Item ${item.id}`),
      },
    })

    expect(wrapper.find('.hmfw-listy').exists()).toBe(true)
  })

  it('height 支持字符串格式', () => {
    const wrapper = mount(Listy, {
      props: {
        data: [{ id: 1 }],
        height: '200px',
        children: (_item: any) => h('div', {}, 'Item'),
      },
    })

    const root = wrapper.find('.hmfw-listy')
    expect(root.attributes('style')).toContain('height: 200px')
  })

  it('分组中某个组的 items 为空数组', () => {
    const groups: ListyGroupItem[] = [
      {
        group: 'Empty Group',
        items: [],
      },
      {
        group: 'Normal Group',
        items: [{ id: 1 }],
      },
    ]

    const wrapper = mount(Listy, {
      props: {
        groups,
        height: 300,
        children: (_item: any) => h('div', {}, 'Item'),
      },
    })

    expect(wrapper.findAll('.hmfw-listy-group-header')).toHaveLength(2)
    expect(wrapper.findAll('.hmfw-listy-item')).toHaveLength(1)
  })

  it('children 返回 null 不应报错', () => {
    const wrapper = mount(Listy, {
      props: {
        data: [{ id: 1 }, { id: 2 }],
        height: 200,
        children: (item: any) => (item.id === 1 ? null : h('div', {}, 'Item')),
      },
    })

    expect(wrapper.findAll('.hmfw-listy-item')).toHaveLength(2)
  })

  it('虚拟滚动实际只渲染可见项', () => {
    const data = Array.from({ length: 1000 }, (_, i) => ({ id: i }))

    const wrapper = mount(Listy, {
      props: {
        data,
        height: 300,
        virtual: true,
        itemHeight: 40,
        children: (item: any) => h('div', {}, `Item ${item.id}`),
      },
    })

    // 容器高度 300px，项高度 40px，可见项约 7-8 个，加上缓冲区（默认 5）
    // 实际渲染应该远少于 1000 个
    const renderedItems = wrapper.findAll('.hmfw-virtual-list-item')
    expect(renderedItems.length).toBeLessThan(30)
    expect(renderedItems.length).toBeGreaterThan(0)
  })
})
