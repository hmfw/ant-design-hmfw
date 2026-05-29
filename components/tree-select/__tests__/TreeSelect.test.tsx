import { describe, it, expect } from 'vitest'
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
    // Root nodes visible (children collapsed by default)
    const nodes = document.querySelectorAll('.hmfw-tree-select-tree-node')
    expect(nodes.length).toBe(3) // Node 1, Node 2, Node 3 (children collapsed)
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
    expect(nodes.length).toBe(5) // Node 1, 1-1, 1-2, Node 2, Node 3
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
    nodes[1]?.click() // Node 2
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
    nodes[1]?.click() // Node 2
    nodes[2]?.click() // Node 3
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
})
