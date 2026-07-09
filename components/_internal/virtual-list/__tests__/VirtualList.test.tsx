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

  // ============================================================
  // 新增测试 — 覆盖 code review 修复的所有逻辑
  // ============================================================

  describe('containerHeight 边界', () => {
    it('handles height=0 correctly without falling back to 300', () => {
      const data = generateData(100)
      const wrapper = mount(VirtualList, {
        props: {
          data,
          height: 0,
          itemHeight: 32,
          renderItem: (item: any) => h('div', item.text),
        },
      })

      const container = wrapper.find('.hmfw-virtual-list')
      expect(container.attributes('style')).toContain('height: 0px')
    })

    it('falls back to 300 for unparseable CSS height string', () => {
      const data = generateData(100)
      const wrapper = mount(VirtualList, {
        props: {
          data,
          height: 'calc(100vh - 64px)',
          itemHeight: 32,
          renderItem: (item: any) => h('div', item.text),
        },
      })

      // 容器 style 保持原始 CSS 值
      const container = wrapper.find('.hmfw-virtual-list')
      expect(container.attributes('style')).toContain('height: calc(100vh - 64px)')

      // 但内部用 300px 计算可见项，应渲染有效数量
      const items = wrapper.findAll('.hmfw-virtual-list-item')
      expect(items.length).toBeGreaterThan(0)
      expect(items.length).toBeLessThan(data.length)
    })
  })

  describe('exposed methods', () => {
    it('scrollToIndex aligns item to top (default)', () => {
      const data = generateData(100)
      const wrapper = mount(VirtualList, {
        props: {
          data,
          height: 300,
          itemHeight: 32,
          renderItem: (item: any) => h('div', item.text),
        },
      })

      ;(wrapper.vm as any).scrollToIndex(50, 'top')
      const container = wrapper.find('.hmfw-virtual-list').element as HTMLElement
      expect(container.scrollTop).toBe(50 * 32) // 1600
    })

    it('scrollToIndex aligns item to center', () => {
      const data = generateData(100)
      const wrapper = mount(VirtualList, {
        props: {
          data,
          height: 300,
          itemHeight: 32,
          renderItem: (item: any) => h('div', item.text),
        },
      })

      ;(wrapper.vm as any).scrollToIndex(50, 'center')
      const container = wrapper.find('.hmfw-virtual-list').element as HTMLElement
      // targetScrollTop = 50 * 32 - 300/2 + 32/2 = 1600 - 150 + 16 = 1466
      expect(container.scrollTop).toBe(1466)
    })

    it('scrollToIndex aligns item to bottom', () => {
      const data = generateData(100)
      const wrapper = mount(VirtualList, {
        props: {
          data,
          height: 300,
          itemHeight: 32,
          renderItem: (item: any) => h('div', item.text),
        },
      })

      ;(wrapper.vm as any).scrollToIndex(50, 'bottom')
      const container = wrapper.find('.hmfw-virtual-list').element as HTMLElement
      // targetScrollTop = 50 * 32 - 300 + 32 = 1600 - 268 = 1332
      expect(container.scrollTop).toBe(1332)
    })

    it('scrollToIndex clamps index to valid range', () => {
      const data = generateData(10)
      const wrapper = mount(VirtualList, {
        props: {
          data,
          height: 300,
          itemHeight: 32,
          renderItem: (item: any) => h('div', item.text),
        },
      })

      // 负索引应 clamp 到 0
      ;(wrapper.vm as any).scrollToIndex(-5, 'top')
      let container = wrapper.find('.hmfw-virtual-list').element as HTMLElement
      expect(container.scrollTop).toBe(0)

      // 超出范围应 clamp 到最后一项
      ;(wrapper.vm as any).scrollToIndex(999, 'top')
      container = wrapper.find('.hmfw-virtual-list').element as HTMLElement
      expect(container.scrollTop).toBe(9 * 32) // index 9 * 32 = 288
    })

    it('scrollToBottom scrolls to correct position', () => {
      const data = generateData(100)
      const wrapper = mount(VirtualList, {
        props: {
          data,
          height: 300,
          itemHeight: 32,
          renderItem: (item: any) => h('div', item.text),
        },
      })

      ;(wrapper.vm as any).scrollToBottom()
      const container = wrapper.find('.hmfw-virtual-list').element as HTMLElement
      // totalHeight = 3200, containerHeight = 300, expected = 2900
      expect(container.scrollTop).toBe(2900)
    })

    it('scrollToTop scrolls to position 0', () => {
      const data = generateData(100)
      const wrapper = mount(VirtualList, {
        props: {
          data,
          height: 300,
          itemHeight: 32,
          renderItem: (item: any) => h('div', item.text),
        },
      })

      const container = wrapper.find('.hmfw-virtual-list').element as HTMLElement
      container.scrollTop = 500
      ;(wrapper.vm as any).scrollToTop()
      expect(container.scrollTop).toBe(0)
    })
  })

  describe('onScroll 回调', () => {
    it('calls onScroll callback with scrollTop value', async () => {
      const data = generateData(100)
      let capturedScrollTop = -1
      const wrapper = mount(VirtualList, {
        props: {
          data,
          height: 300,
          itemHeight: 32,
          renderItem: (item: any) => h('div', item.text),
          onScroll: (top: number) => {
            capturedScrollTop = top
          },
        },
      })

      const container = wrapper.find('.hmfw-virtual-list').element as HTMLElement
      container.scrollTop = 200
      await wrapper.trigger('scroll')
      await nextTick()

      expect(capturedScrollTop).toBe(200)
    })

    it('does not throw when onScroll is not provided', async () => {
      const data = generateData(100)
      const wrapper = mount(VirtualList, {
        props: {
          data,
          height: 300,
          itemHeight: 32,
          renderItem: (item: any) => h('div', item.text),
        },
      })

      const container = wrapper.find('.hmfw-virtual-list').element as HTMLElement
      container.scrollTop = 100
      // 不应抛出错误
      await expect(wrapper.trigger('scroll')).resolves.not.toThrow()
    })
  })

  describe('data 变化重置滚动位置', () => {
    it('resets scrollTop when data array changes', async () => {
      const data = generateData(100)
      const wrapper = mount(VirtualList, {
        props: {
          data,
          height: 300,
          itemHeight: 32,
          renderItem: (item: any) => h('div', item.text),
        },
      })

      const container = wrapper.find('.hmfw-virtual-list').element as HTMLElement

      // 先滚动到中间
      ;(wrapper.vm as any).scrollToIndex(40)
      expect(container.scrollTop).toBeGreaterThan(0)

      // 替换 data 为新数组（模拟搜索过滤场景）
      const newData = generateData(10)
      await wrapper.setProps({ data: newData })
      await nextTick()

      expect(container.scrollTop).toBe(0)
    })
  })

  describe('getKey 策略', () => {
    it('supports function mode for itemKey', () => {
      const data = generateData(10)
      const wrapper = mount(VirtualList, {
        props: {
          data,
          height: 300,
          itemHeight: 32,
          itemKey: (item: any) => `custom-${item.id}`,
          renderItem: (item: any) => h('div', item.text),
        },
      })

      const items = wrapper.findAll('.hmfw-virtual-list-item')
      expect(items.length).toBeGreaterThan(0)
      expect(wrapper.find('.hmfw-virtual-list').exists()).toBe(true)
    })

    it('falls back to index for non-object items with string itemKey', () => {
      const primitiveData = ['a', 'b', 'c', 'd', 'e']
      const wrapper = mount(VirtualList, {
        props: {
          data: primitiveData,
          height: 300,
          itemHeight: 32,
          itemKey: 'id', // 原始类型字符串没有 'id' 属性，应降级 index
          renderItem: (item: any) => h('div', item),
        },
      })

      const items = wrapper.findAll('.hmfw-virtual-list-item')
      expect(items.length).toBe(primitiveData.length)
    })
  })

  describe('buffer 缓冲区', () => {
    it('renders more items when buffer is increased', () => {
      const data = generateData(100)

      const wrapperNoBuffer = mount(VirtualList, {
        props: {
          data,
          height: 300,
          itemHeight: 32,
          buffer: 0,
          renderItem: (item: any) => h('div', item.text),
        },
      })

      const wrapperLargeBuffer = mount(VirtualList, {
        props: {
          data,
          height: 300,
          itemHeight: 32,
          buffer: 10,
          renderItem: (item: any) => h('div', item.text),
        },
      })

      const noBufferCount = wrapperNoBuffer.findAll('.hmfw-virtual-list-item').length
      const largeBufferCount = wrapperLargeBuffer.findAll('.hmfw-virtual-list-item').length

      expect(largeBufferCount).toBeGreaterThan(noBufferCount)
    })

    it('buffer=0 still renders visible items', () => {
      const data = generateData(100)
      const wrapper = mount(VirtualList, {
        props: {
          data,
          height: 300,
          itemHeight: 32,
          buffer: 0,
          renderItem: (item: any) => h('div', item.text),
        },
      })

      const items = wrapper.findAll('.hmfw-virtual-list-item')
      expect(items.length).toBeGreaterThan(0)
      // 无 buffer 时只渲染可视区域：Math.ceil(300 / 32) = 10
      expect(items.length).toBeLessThanOrEqual(10)
    })
  })
})
