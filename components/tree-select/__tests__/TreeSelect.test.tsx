import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { TreeSelect } from '../TreeSelect'
import type { TreeSelectNode } from '../types'

const treeData: TreeSelectNode[] = [
  {
    value: '1',
    label: 'Node 1',
    children: [
      { value: '1-1', label: 'Node 1-1' },
      { value: '1-2', label: 'Node 1-2', disabled: true },
    ],
  },
  { value: '2', label: 'Node 2' },
  { value: '3', label: 'Node 3' },
]

describe('TreeSelect', () => {
  it('renders selector', () => {
    const wrapper = mount(TreeSelect, { props: { treeData } })
    expect(wrapper.find('.hmfw-tree-select-selector').exists()).toBe(true)
  })

  it('shows placeholder when no value', () => {
    const wrapper = mount(TreeSelect, {
      props: { treeData, placeholder: 'Select node' },
    })
    expect(wrapper.find('.hmfw-tree-select-selection-placeholder').text()).toBe('Select node')
  })

  it('shows selected value label', () => {
    const wrapper = mount(TreeSelect, {
      props: { treeData, value: '2' },
    })
    expect(wrapper.find('.hmfw-tree-select-selection-item').text()).toBe('Node 2')
  })

  it('opens dropdown on click', async () => {
    const wrapper = mount(TreeSelect, {
      props: { treeData },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-tree-select-selector').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tree-select-dropdown')).not.toBeNull()
    wrapper.unmount()
  })

  it('shows tree nodes in dropdown', async () => {
    const wrapper = mount(TreeSelect, {
      props: { treeData },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-tree-select-selector').trigger('click')
    await wrapper.vm.$nextTick()
    const nodes = document.querySelectorAll('.hmfw-tree-select-tree-node')
    expect(nodes.length).toBe(3)
    wrapper.unmount()
  })

  it('expands children on switcher click', async () => {
    const wrapper = mount(TreeSelect, {
      props: { treeData },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-tree-select-selector').trigger('click')
    await wrapper.vm.$nextTick()
    const switcher = document.querySelector<HTMLElement>('.hmfw-tree-select-tree-switcher')
    switcher?.click()
    await wrapper.vm.$nextTick()
    const nodes = document.querySelectorAll('.hmfw-tree-select-tree-node')
    expect(nodes.length).toBe(5)
    wrapper.unmount()
  })

  it('selects node and emits change', async () => {
    const wrapper = mount(TreeSelect, {
      props: { treeData },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-tree-select-selector').trigger('click')
    await wrapper.vm.$nextTick()
    const nodes = document.querySelectorAll<HTMLElement>('.hmfw-tree-select-tree-node-content')
    nodes[1]?.click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('change')?.[0]?.[0]).toBe('2')
    wrapper.unmount()
  })

  it('supports multiple selection', async () => {
    const wrapper = mount(TreeSelect, {
      props: { treeData, multiple: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-tree-select-selector').trigger('click')
    await wrapper.vm.$nextTick()
    const nodes = document.querySelectorAll<HTMLElement>('.hmfw-tree-select-tree-node-content')
    nodes[1]?.click()
    nodes[2]?.click()
    await wrapper.vm.$nextTick()
    const emitted = wrapper.emitted('change')
    expect(Array.isArray(emitted?.[emitted.length - 1]?.[0])).toBe(true)
    wrapper.unmount()
  })

  it('applies disabled class', () => {
    const wrapper = mount(TreeSelect, { props: { treeData, disabled: true } })
    expect(wrapper.find('.hmfw-tree-select-disabled').exists()).toBe(true)
  })

  it('expands all nodes when treeDefaultExpandAll', async () => {
    const wrapper = mount(TreeSelect, {
      props: { treeData, treeDefaultExpandAll: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-tree-select-selector').trigger('click')
    await wrapper.vm.$nextTick()
    const nodes = document.querySelectorAll('.hmfw-tree-select-tree-node')
    expect(nodes.length).toBe(5)
    wrapper.unmount()
  })

  it('respects selectable:false', async () => {
    const data: TreeSelectNode[] = [
      { value: '1', label: 'Node 1', selectable: false },
      { value: '2', label: 'Node 2' },
    ]
    const wrapper = mount(TreeSelect, {
      props: { treeData: data },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-tree-select-selector').trigger('click')
    await wrapper.vm.$nextTick()
    const nodes = document.querySelectorAll<HTMLElement>('.hmfw-tree-select-tree-node-content')
    nodes[0]?.click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('change')).toBeUndefined()
    wrapper.unmount()
  })

  it('searches nested nodes', async () => {
    const wrapper = mount(TreeSelect, {
      props: { treeData, showSearch: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-tree-select-selector').trigger('click')
    await wrapper.vm.$nextTick()
    const input = document.querySelector<HTMLInputElement>('.hmfw-tree-select-selection-search')
    if (input) {
      input.value = '1-1'
      input.dispatchEvent(new Event('input'))
    }
    await wrapper.vm.$nextTick()
    const nodes = document.querySelectorAll('.hmfw-tree-select-tree-node')
    expect(nodes.length).toBeGreaterThan(0)
    wrapper.unmount()
  })

  it('treeCheckable cascades parent-child', async () => {
    const wrapper = mount(TreeSelect, {
      props: { treeData, treeCheckable: true },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-tree-select-selector').trigger('click')
    await wrapper.vm.$nextTick()
    const switcher = document.querySelector<HTMLElement>('.hmfw-tree-select-tree-switcher')
    switcher?.click()
    await wrapper.vm.$nextTick()
    const checkboxes = document.querySelectorAll<HTMLElement>('.hmfw-tree-select-tree-checkbox')
    checkboxes[0]?.click()
    await wrapper.vm.$nextTick()
    const emitted = wrapper.emitted('change')
    const lastVal = emitted?.[emitted.length - 1]?.[0] as string[]
    expect(lastVal).toContain('1-1')
    expect(lastVal).toContain('1-2')
    wrapper.unmount()
  })

  it('respects maxCount', async () => {
    const wrapper = mount(TreeSelect, {
      props: { treeData, multiple: true, maxCount: 2 },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-tree-select-selector').trigger('click')
    await wrapper.vm.$nextTick()
    const nodes = document.querySelectorAll<HTMLElement>('.hmfw-tree-select-tree-node-content')
    nodes[0]?.click()
    nodes[1]?.click()
    nodes[2]?.click()
    await wrapper.vm.$nextTick()
    const emitted = wrapper.emitted('change')
    const lastVal = emitted?.[emitted.length - 1]?.[0] as string[]
    expect(lastVal.length).toBeLessThanOrEqual(2)
    wrapper.unmount()
  })

  it('emits onSelect', async () => {
    const wrapper = mount(TreeSelect, {
      props: { treeData },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-tree-select-selector').trigger('click')
    await wrapper.vm.$nextTick()
    const nodes = document.querySelectorAll<HTMLElement>('.hmfw-tree-select-tree-node-content')
    nodes[1]?.click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('select')?.[0]?.[0]).toBe('2')
    wrapper.unmount()
  })

  it('emits onTreeExpand', async () => {
    const wrapper = mount(TreeSelect, {
      props: { treeData },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-tree-select-selector').trigger('click')
    await wrapper.vm.$nextTick()
    const switcher = document.querySelector<HTMLElement>('.hmfw-tree-select-tree-switcher')
    switcher?.click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('treeExpand')).toBeDefined()
    wrapper.unmount()
  })

  it('controlled open', async () => {
    const wrapper = mount(TreeSelect, {
      props: { treeData, open: true },
      attachTo: document.body,
    })
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tree-select-dropdown')).not.toBeNull()
    wrapper.unmount()
  })

  it('applies status class', () => {
    const wrapper = mount(TreeSelect, { props: { treeData, status: 'error' } })
    expect(wrapper.find('.hmfw-tree-select-status-error').exists()).toBe(true)
  })

  it('shows notFoundContent when empty', async () => {
    const wrapper = mount(TreeSelect, {
      props: { treeData: [], notFoundContent: 'No data' },
      attachTo: document.body,
    })
    await wrapper.find('.hmfw-tree-select-selector').trigger('click')
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.hmfw-tree-select-dropdown-empty')?.textContent).toBe('No data')
    wrapper.unmount()
  })

  // ============== 虚拟滚动 ==============
  describe('virtual scroll', () => {
    const buildLargeData = (n: number): TreeSelectNode[] =>
      Array.from({ length: n }, (_, i) => ({ value: `n-${i}`, label: `节点 ${i}` }))

    it('启用虚拟滚动时只渲染窗口内节点', async () => {
      const data = buildLargeData(500)
      const wrapper = mount(TreeSelect, {
        props: { treeData: data, virtual: true, listHeight: 256, itemHeight: 28 },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-tree-select-selector').trigger('click')
      await wrapper.vm.$nextTick()
      const nodes = document.querySelectorAll('.hmfw-tree-select-tree-node')
      // 数据 500 条 * 28px = 14000px，远超 256px 应启用虚拟滚动
      expect(nodes.length).toBeLessThan(500)
      expect(nodes.length).toBeGreaterThan(0)
      // 应包含 holder 容器
      expect(document.querySelector('.hmfw-tree-select-dropdown-list-holder')).not.toBeNull()
      wrapper.unmount()
    })

    it('virtual=false 时全量渲染', async () => {
      const data = buildLargeData(100)
      const wrapper = mount(TreeSelect, {
        props: { treeData: data, virtual: false, listHeight: 256, itemHeight: 28 },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-tree-select-selector').trigger('click')
      await wrapper.vm.$nextTick()
      const nodes = document.querySelectorAll('.hmfw-tree-select-tree-node')
      expect(nodes.length).toBe(100)
      expect(document.querySelector('.hmfw-tree-select-dropdown-list-holder')).toBeNull()
      wrapper.unmount()
    })

    it('数据量未超出 listHeight 时不启用虚拟滚动', async () => {
      const data = buildLargeData(5)
      const wrapper = mount(TreeSelect, {
        props: { treeData: data, virtual: true, listHeight: 256, itemHeight: 28 },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-tree-select-selector').trigger('click')
      await wrapper.vm.$nextTick()
      // 5 * 28 = 140 < 256，全量渲染
      expect(document.querySelector('.hmfw-tree-select-dropdown-list-holder')).toBeNull()
      const nodes = document.querySelectorAll('.hmfw-tree-select-tree-node')
      expect(nodes.length).toBe(5)
      wrapper.unmount()
    })

    it('滚动后渲染区间发生变化', async () => {
      const data = buildLargeData(500)
      const wrapper = mount(TreeSelect, {
        props: { treeData: data, virtual: true, listHeight: 256, itemHeight: 28 },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-tree-select-selector').trigger('click')
      await wrapper.vm.$nextTick()
      const list = document.querySelector<HTMLElement>('.hmfw-tree-select-dropdown-list')!
      const firstBefore = document.querySelector<HTMLElement>('.hmfw-tree-select-tree-node')?.textContent
      list.scrollTop = 1000
      list.dispatchEvent(new Event('scroll'))
      await wrapper.vm.$nextTick()
      const firstAfter = document.querySelector<HTMLElement>('.hmfw-tree-select-tree-node')?.textContent
      expect(firstAfter).not.toBe(firstBefore)
      wrapper.unmount()
    })
  })

  // ============== treeIcon ==============
  describe('treeIcon', () => {
    it('treeIcon=true 显示默认图标', async () => {
      const wrapper = mount(TreeSelect, {
        props: { treeData, treeIcon: true },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-tree-select-selector').trigger('click')
      await wrapper.vm.$nextTick()
      const icons = document.querySelectorAll('.hmfw-tree-select-tree-icon')
      expect(icons.length).toBe(3)
      wrapper.unmount()
    })

    it('treeIcon 不传时不渲染图标', async () => {
      const wrapper = mount(TreeSelect, {
        props: { treeData },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-tree-select-selector').trigger('click')
      await wrapper.vm.$nextTick()
      const icons = document.querySelectorAll('.hmfw-tree-select-tree-icon')
      expect(icons.length).toBe(0)
      wrapper.unmount()
    })

    it('treeIcon 为字符串时统一渲染', async () => {
      const wrapper = mount(TreeSelect, {
        props: { treeData, treeIcon: '★' },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-tree-select-selector').trigger('click')
      await wrapper.vm.$nextTick()
      const icons = document.querySelectorAll('.hmfw-tree-select-tree-icon')
      expect(icons.length).toBe(3)
      expect(icons[0].textContent).toBe('★')
      wrapper.unmount()
    })

    it('treeIcon 为函数时按节点动态返回', async () => {
      const wrapper = mount(TreeSelect, {
        props: { treeData, treeIcon: (n: TreeSelectNode) => (n.value === '2' ? '🔥' : '·') },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-tree-select-selector').trigger('click')
      await wrapper.vm.$nextTick()
      const icons = document.querySelectorAll('.hmfw-tree-select-tree-icon')
      expect(icons[1].textContent).toBe('🔥')
      expect(icons[0].textContent).toBe('·')
      wrapper.unmount()
    })

    it('节点级 icon 优先级高于全局 treeIcon', async () => {
      const data: TreeSelectNode[] = [
        { value: 'a', label: 'A', icon: '⚡' },
        { value: 'b', label: 'B' },
      ]
      const wrapper = mount(TreeSelect, {
        props: { treeData: data, treeIcon: '·' },
        attachTo: document.body,
      })
      await wrapper.find('.hmfw-tree-select-selector').trigger('click')
      await wrapper.vm.$nextTick()
      const icons = document.querySelectorAll('.hmfw-tree-select-tree-icon')
      expect(icons[0].textContent).toBe('⚡')
      expect(icons[1].textContent).toBe('·')
      wrapper.unmount()
    })
  })

  // ============== 多选标签策略 ==============
  describe('maxTagCount', () => {
    const multiData: TreeSelectNode[] = [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
      { value: 'c', label: 'C' },
      { value: 'd', label: 'D' },
    ]

    it('maxTagCount 限制标签数量并显示折叠占位', () => {
      const wrapper = mount(TreeSelect, {
        props: { treeData: multiData, multiple: true, value: ['a', 'b', 'c', 'd'], maxTagCount: 2 },
      })
      const items = wrapper.findAll('.hmfw-tree-select-selection-item')
      // 2 个标签 + 1 个 +N 占位
      expect(items.length).toBe(3)
      expect(wrapper.find('.hmfw-tree-select-selection-overflow').exists()).toBe(true)
      expect(wrapper.find('.hmfw-tree-select-selection-overflow').text()).toContain('+ 2')
    })

    it('maxTagCount 未达到上限时不显示折叠占位', () => {
      const wrapper = mount(TreeSelect, {
        props: { treeData: multiData, multiple: true, value: ['a'], maxTagCount: 2 },
      })
      expect(wrapper.find('.hmfw-tree-select-selection-overflow').exists()).toBe(false)
    })

    it('maxTagPlaceholder 字符串自定义', () => {
      const wrapper = mount(TreeSelect, {
        props: {
          treeData: multiData,
          multiple: true,
          value: ['a', 'b', 'c', 'd'],
          maxTagCount: 1,
          maxTagPlaceholder: '更多',
        },
      })
      expect(wrapper.find('.hmfw-tree-select-selection-overflow').text()).toBe('更多')
    })

    it('maxTagPlaceholder 函数接收省略值', () => {
      const wrapper = mount(TreeSelect, {
        props: {
          treeData: multiData,
          multiple: true,
          value: ['a', 'b', 'c', 'd'],
          maxTagCount: 1,
          maxTagPlaceholder: (omitted: Array<string | number>) => `还有 ${omitted.length} 项`,
        },
      })
      expect(wrapper.find('.hmfw-tree-select-selection-overflow').text()).toBe('还有 3 项')
    })

    it('maxTagTextLength 截断标签文本', () => {
      const wrapper = mount(TreeSelect, {
        props: {
          treeData: [{ value: 'a', label: '一段很长的标签文字' }],
          multiple: true,
          value: ['a'],
          maxTagTextLength: 4,
        },
      })
      const content = wrapper.find('.hmfw-tree-select-selection-item-content').text()
      expect(content).toBe('一段很长...')
    })

    it('未指定 maxTagCount 时全部展示', () => {
      const wrapper = mount(TreeSelect, {
        props: { treeData: multiData, multiple: true, value: ['a', 'b', 'c', 'd'] },
      })
      const items = wrapper.findAll('.hmfw-tree-select-selection-item')
      expect(items.length).toBe(4)
      expect(wrapper.find('.hmfw-tree-select-selection-overflow').exists()).toBe(false)
    })
  })
})
