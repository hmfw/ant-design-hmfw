import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { VirtualList } from '../VirtualList'
import { h, nextTick } from 'vue'

describe('VirtualList', () => {
  const generateData = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({ id: i, text: `Item ${i}` }))
  }

  it('renders correctly with basic props', () => {
    const data = generateData(100)
    const wrapper = mount(VirtualList, {
      props: {
        data,
        height: 300,
        itemHeight: 32,
        renderItem: (item: any) => h('div', item.text),
      },
    })

    expect(wrapper.find('.hmfw-virtual-list').exists()).toBe(true)
    expect(wrapper.find('.hmfw-virtual-list-holder').exists()).toBe(true)
  })

  it('calculates total height correctly', () => {
    const data = generateData(100)
    const wrapper = mount(VirtualList, {
      props: {
        data,
        height: 300,
        itemHeight: 32,
        renderItem: (item: any) => h('div', item.text),
      },
    })

    const holder = wrapper.find('.hmfw-virtual-list-holder')
    expect(holder.attributes('style')).toContain('height: 3200px') // 100 * 32
  })

  it('renders only visible items', () => {
    const data = generateData(100)
    const wrapper = mount(VirtualList, {
      props: {
        data,
        height: 300,
        itemHeight: 32,
        buffer: 2,
        renderItem: (item: any) => h('div', item.text),
      },
    })

    // 可见区域: 300 / 32 ≈ 9.4 项，加上 buffer 2 * 2 = 4，总共约 13-14 项
    const items = wrapper.findAll('.hmfw-virtual-list-item')
    expect(items.length).toBeGreaterThan(0)
    expect(items.length).toBeLessThan(20) // 应该远少于 100
  })

  it('updates visible items on scroll', async () => {
    const data = generateData(100)
    const wrapper = mount(VirtualList, {
      props: {
        data,
        height: 300,
        itemHeight: 32,
        buffer: 2,
        renderItem: (item: any) => h('div', item.text),
      },
    })

    const container = wrapper.find('.hmfw-virtual-list').element as HTMLElement

    // 模拟滚动
    container.scrollTop = 320 // 滚动 10 项
    await wrapper.trigger('scroll')
    await nextTick()

    // 验证偏移量更新
    const itemsContainer = wrapper.find('.hmfw-virtual-list-items')
    expect(itemsContainer.attributes('style')).toContain('transform')
  })

  it('uses custom itemKey', () => {
    const data = generateData(10)
    const wrapper = mount(VirtualList, {
      props: {
        data,
        height: 300,
        itemHeight: 32,
        itemKey: 'id',
        renderItem: (item: any) => h('div', item.text),
      },
    })

    const items = wrapper.findAll('.hmfw-virtual-list-item')
    expect(items.length).toBeGreaterThan(0)
  })

  it('exposes scrollToIndex method', () => {
    const data = generateData(100)
    const wrapper = mount(VirtualList, {
      props: {
        data,
        height: 300,
        itemHeight: 32,
        renderItem: (item: any) => h('div', item.text),
      },
    })

    expect(wrapper.vm.scrollToIndex).toBeDefined()
    expect(typeof wrapper.vm.scrollToIndex).toBe('function')
  })

  it('exposes scrollToTop method', () => {
    const data = generateData(100)
    const wrapper = mount(VirtualList, {
      props: {
        data,
        height: 300,
        itemHeight: 32,
        renderItem: (item: any) => h('div', item.text),
      },
    })

    expect(wrapper.vm.scrollToTop).toBeDefined()
    expect(typeof wrapper.vm.scrollToTop).toBe('function')
  })

  it('exposes scrollToBottom method', () => {
    const data = generateData(100)
    const wrapper = mount(VirtualList, {
      props: {
        data,
        height: 300,
        itemHeight: 32,
        renderItem: (item: any) => h('div', item.text),
      },
    })

    expect(wrapper.vm.scrollToBottom).toBeDefined()
    expect(typeof wrapper.vm.scrollToBottom).toBe('function')
  })

  it('handles empty data', () => {
    const wrapper = mount(VirtualList, {
      props: {
        data: [],
        height: 300,
        itemHeight: 32,
        renderItem: (item: any) => h('div', item.text),
      },
    })

    expect(wrapper.find('.hmfw-virtual-list').exists()).toBe(true)
    expect(wrapper.findAll('.hmfw-virtual-list-item')).toHaveLength(0)
  })

  it('handles string height prop', () => {
    const data = generateData(10)
    const wrapper = mount(VirtualList, {
      props: {
        data,
        height: '300px',
        itemHeight: 32,
        renderItem: (item: any) => h('div', item.text),
      },
    })

    const container = wrapper.find('.hmfw-virtual-list')
    expect(container.attributes('style')).toContain('height: 300px')
  })
})
