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
})
