import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Tree } from '../Tree'

const treeData = [
  {
    key: '0-0',
    title: 'parent 1',
    children: [
      { key: '0-0-0', title: 'parent 1-0', children: [
        { key: '0-0-0-0', title: 'leaf' },
        { key: '0-0-0-1', title: 'leaf' },
      ]},
      { key: '0-0-1', title: 'parent 1-1', children: [
        { key: '0-0-1-0', title: 'leaf' },
      ]},
    ],
  },
]

describe('Tree', () => {
  it('renders correctly', () => {
    const wrapper = mount(Tree, { props: { treeData } })
    expect(wrapper.classes()).toContain('hmfw-tree')
  })

  it('renders root nodes', () => {
    const wrapper = mount(Tree, { props: { treeData } })
    const nodes = wrapper.findAll('.hmfw-tree-treenode')
    expect(nodes.length).toBe(1)
  })

  it('expands nodes on click', async () => {
    const wrapper = mount(Tree, { props: { treeData } })
    const switcher = wrapper.find('.hmfw-tree-switcher')
    await switcher.trigger('click')
    const nodes = wrapper.findAll('.hmfw-tree-treenode')
    expect(nodes.length).toBeGreaterThan(1)
  })

  it('defaultExpandAll expands all', () => {
    const wrapper = mount(Tree, { props: { treeData, defaultExpandAll: true } })
    const nodes = wrapper.findAll('.hmfw-tree-treenode')
    expect(nodes.length).toBe(6)
  })

  it('renders checkboxes when checkable', () => {
    const wrapper = mount(Tree, { props: { treeData, checkable: true } })
    expect(wrapper.find('.hmfw-tree-checkbox').exists()).toBe(true)
  })

  it('selects node on click', async () => {
    const wrapper = mount(Tree, { props: { treeData } })
    const content = wrapper.find('.hmfw-tree-node-content-wrapper')
    await content.trigger('click')
    expect(wrapper.emitted('select')).toBeTruthy()
  })

  it('shows line when showLine', () => {
    const wrapper = mount(Tree, { props: { treeData, showLine: true } })
    expect(wrapper.classes()).toContain('hmfw-tree-show-line')
  })

  it('disabled tree', () => {
    const wrapper = mount(Tree, { props: { treeData, disabled: true } })
    expect(wrapper.classes()).toContain('hmfw-tree-disabled')
  })

  it('emits expandedKeys on expand', async () => {
    const wrapper = mount(Tree, { props: { treeData } })
    const switcher = wrapper.find('.hmfw-tree-switcher')
    await switcher.trigger('click')
    expect(wrapper.emitted('update:expandedKeys')).toBeTruthy()
  })

  it('renders custom fieldNames', () => {
    const data = [{ id: '1', label: 'Node 1', items: [] }]
    const wrapper = mount(Tree, { props: { treeData: data as any, fieldNames: { key: 'id', title: 'label', children: 'items' } } })
    expect(wrapper.find('.hmfw-tree-title').text()).toBe('Node 1')
  })
})
