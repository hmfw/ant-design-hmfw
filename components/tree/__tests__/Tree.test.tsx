import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Tree } from '../Tree'
import { DirectoryTree } from '../DirectoryTree'

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
    expect(wrapper.findAll('.hmfw-tree-treenode').length).toBe(1)
  })

  it('expands nodes on click', async () => {
    const wrapper = mount(Tree, { props: { treeData } })
    await wrapper.find('.hmfw-tree-switcher').trigger('click')
    expect(wrapper.findAll('.hmfw-tree-treenode').length).toBeGreaterThan(1)
  })

  it('defaultExpandAll expands all', () => {
    const wrapper = mount(Tree, { props: { treeData, defaultExpandAll: true } })
    expect(wrapper.findAll('.hmfw-tree-treenode').length).toBe(6)
  })

  it('renders checkbox component when checkable', () => {
    const wrapper = mount(Tree, { props: { treeData, checkable: true } })
    expect(wrapper.find('.hmfw-checkbox').exists()).toBe(true)
    expect(wrapper.find('.hmfw-tree-checkbox-cell').exists()).toBe(true)
  })

  it('selects node on click', async () => {
    const wrapper = mount(Tree, { props: { treeData } })
    await wrapper.find('.hmfw-tree-node-content-wrapper').trigger('click')
    expect(wrapper.emitted('select')).toBeTruthy()
  })

  it('select info carries node and selectedNodes', async () => {
    const wrapper = mount(Tree, { props: { treeData } })
    await wrapper.find('.hmfw-tree-node-content-wrapper').trigger('click')
    const [keys, info] = wrapper.emitted('select')![0] as any[]
    expect(keys).toEqual(['0-0'])
    expect(info.node.key).toBe('0-0')
    expect(info.selected).toBe(true)
    expect(info.selectedNodes.map((n: any) => n.key)).toEqual(['0-0'])
  })

  it('shows line when showLine', () => {
    const wrapper = mount(Tree, { props: { treeData, showLine: true } })
    expect(wrapper.classes()).toContain('hmfw-tree-show-line')
  })

  it('disabled tree', () => {
    const wrapper = mount(Tree, { props: { treeData, disabled: true } })
    expect(wrapper.classes()).toContain('hmfw-tree-disabled')
  })

  it('does not select when disabled', async () => {
    const wrapper = mount(Tree, { props: { treeData, disabled: true } })
    await wrapper.find('.hmfw-tree-node-content-wrapper').trigger('click')
    expect(wrapper.emitted('select')).toBeFalsy()
  })

  it('emits expandedKeys on expand', async () => {
    const wrapper = mount(Tree, { props: { treeData } })
    await wrapper.find('.hmfw-tree-switcher').trigger('click')
    expect(wrapper.emitted('update:expandedKeys')).toBeTruthy()
  })

  it('renders custom fieldNames', () => {
    const data = [{ id: '1', label: 'Node 1', items: [] }]
    const wrapper = mount(Tree, { props: { treeData: data as any, fieldNames: { key: 'id', title: 'label', children: 'items' } } })
    expect(wrapper.find('.hmfw-tree-title').text()).toBe('Node 1')
  })

  // ============ 新增：勾选联动 ============
  it('checking parent checks all descendants', async () => {
    const wrapper = mount(Tree, { props: { treeData, checkable: true, defaultExpandAll: true } })
    const firstCheckbox = wrapper.findAll('.hmfw-checkbox input')[0]
    await firstCheckbox.setValue(true)
    const [keys] = wrapper.emitted('check')![0] as any[]
    // 0-0 + 全部后代
    expect(keys).toContain('0-0')
    expect(keys).toContain('0-0-0')
    expect(keys).toContain('0-0-0-0')
    expect(keys).toContain('0-0-1-0')
    expect(keys.length).toBe(6)
  })

  it('check info carries checkedNodes and halfCheckedKeys', async () => {
    const wrapper = mount(Tree, {
      props: { treeData, checkable: true, defaultExpandAll: true, defaultCheckedKeys: ['0-0-0-0'] },
    })
    // 勾选另一个叶子，使父半选保持
    const leafCheckbox = wrapper.findAll('.hmfw-checkbox input')
    // 找到 0-0-1-0（最后一个叶子）
    await leafCheckbox[leafCheckbox.length - 1].setValue(true)
    const emitted = wrapper.emitted('check')![0] as any[]
    const info = emitted[1]
    expect(info.event).toBe('check')
    expect(Array.isArray(info.checkedNodes)).toBe(true)
    expect(Array.isArray(info.halfCheckedKeys)).toBe(true)
  })

  it('parent shows indeterminate when only some children checked', () => {
    const wrapper = mount(Tree, {
      props: { treeData, checkable: true, defaultExpandAll: true, defaultCheckedKeys: ['0-0-0-0'] },
    })
    // 至少有一个 indeterminate 的 checkbox（父链）
    expect(wrapper.find('.hmfw-checkbox-indeterminate').exists()).toBe(true)
  })

  it('checkStrictly does not cascade', async () => {
    const wrapper = mount(Tree, {
      props: { treeData, checkable: true, checkStrictly: true, defaultExpandAll: true },
    })
    await wrapper.findAll('.hmfw-checkbox input')[0].setValue(true)
    const [keys] = wrapper.emitted('check')![0] as any[]
    expect(keys).toEqual(['0-0'])
  })

  it('checkedKeys object form (checkStrictly) emits object', async () => {
    const wrapper = mount(Tree, {
      props: { treeData, checkable: true, checkStrictly: true, defaultExpandAll: true },
    })
    await wrapper.findAll('.hmfw-checkbox input')[0].setValue(true)
    const [payload] = wrapper.emitted('update:checkedKeys')![0] as any[]
    expect(payload).toHaveProperty('checked')
    expect(payload).toHaveProperty('halfChecked')
  })

  it('accepts checkedKeys as object form', () => {
    const wrapper = mount(Tree, {
      props: {
        treeData, checkable: true, checkStrictly: true, defaultExpandAll: true,
        checkedKeys: { checked: ['0-0'], halfChecked: [] },
      },
    })
    expect(wrapper.find('.hmfw-checkbox-checked').exists()).toBe(true)
  })

  // ============ 多选 ============
  it('multiple selection keeps previous selected', async () => {
    const wrapper = mount(Tree, { props: { treeData, multiple: true, defaultExpandAll: true } })
    const contents = wrapper.findAll('.hmfw-tree-node-content-wrapper')
    await contents[0].trigger('click')
    await contents[1].trigger('click')
    const last = wrapper.emitted('select')!.at(-1) as any[]
    expect((last[0] as any[]).length).toBe(2)
  })

  // ============ autoExpandParent / defaultExpandParent ============
  it('defaultExpandParent expands ancestors of expandedKeys', () => {
    const wrapper = mount(Tree, {
      props: { treeData, defaultExpandedKeys: ['0-0-0'], defaultExpandParent: true },
    })
    // 0-0（祖先）被展开 => 0-0-0 可见
    const titles = wrapper.findAll('.hmfw-tree-title').map((t) => t.text())
    expect(titles).toContain('parent 1-0')
  })

  // ============ 受控展开 ============
  it('controlled expandedKeys', () => {
    const wrapper = mount(Tree, { props: { treeData, expandedKeys: ['0-0'] } })
    expect(wrapper.findAll('.hmfw-tree-treenode').length).toBe(3)
  })

  // ============ icon / titleRender / switcherIcon ============
  it('renders custom icon function when showIcon', () => {
    const wrapper = mount(Tree, {
      props: { treeData, showIcon: true, icon: () => 'ICON' },
    })
    expect(wrapper.find('.hmfw-tree-iconEle').exists()).toBe(true)
    expect(wrapper.find('.hmfw-tree-iconEle').text()).toBe('ICON')
  })

  it('titleRender customizes title', () => {
    const wrapper = mount(Tree, {
      props: { treeData, titleRender: (n: any) => `#${n.title}` },
    })
    expect(wrapper.find('.hmfw-tree-title').text()).toBe('#parent 1')
  })

  it('custom switcherIcon function', () => {
    const wrapper = mount(Tree, {
      props: { treeData, switcherIcon: ({ expanded }: any) => (expanded ? 'O' : 'C') },
    })
    expect(wrapper.find('.hmfw-tree-switcher').text()).toBe('C')
  })

  // ============ filterTreeNode ============
  it('filterTreeNode highlights matched node', () => {
    const wrapper = mount(Tree, {
      props: { treeData, filterTreeNode: (n: any) => n.title === 'parent 1' },
    })
    expect(wrapper.find('.hmfw-tree-node-content-wrapper-matched').exists()).toBe(true)
  })

  // ============ 键盘导航 ============
  it('keyboard ArrowRight expands node', async () => {
    const wrapper = mount(Tree, { props: { treeData } })
    const node = wrapper.find('.hmfw-tree-treenode')
    await node.trigger('keydown', { key: 'ArrowRight' })
    expect(wrapper.emitted('update:expandedKeys')).toBeTruthy()
  })

  it('keyboard Enter selects node', async () => {
    const wrapper = mount(Tree, { props: { treeData } })
    await wrapper.find('.hmfw-tree-treenode').trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('select')).toBeTruthy()
  })

  it('keyboard Enter checks node when checkable', async () => {
    const wrapper = mount(Tree, { props: { treeData, checkable: true } })
    await wrapper.find('.hmfw-tree-treenode').trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('check')).toBeTruthy()
  })

  // ============ ARIA ============
  it('has tree role and treeitem roles', () => {
    const wrapper = mount(Tree, { props: { treeData } })
    expect(wrapper.attributes('role')).toBe('tree')
    expect(wrapper.find('[role="treeitem"]').exists()).toBe(true)
  })

  it('aria-expanded reflects expand state', async () => {
    const wrapper = mount(Tree, { props: { treeData } })
    const node = wrapper.find('.hmfw-tree-treenode')
    expect(node.attributes('aria-expanded')).toBe('false')
    await wrapper.find('.hmfw-tree-switcher').trigger('click')
    expect(wrapper.find('.hmfw-tree-treenode').attributes('aria-expanded')).toBe('true')
  })

  // ============ draggable ============
  it('draggable adds draggable attribute and class', () => {
    const wrapper = mount(Tree, { props: { treeData, draggable: true } })
    const node = wrapper.find('.hmfw-tree-treenode')
    expect(node.attributes('draggable')).toBe('true')
    expect(node.classes()).toContain('hmfw-tree-treenode-draggable')
  })

  it('drop emits drop event', async () => {
    const wrapper = mount(Tree, { props: { treeData, draggable: true, defaultExpandAll: true } })
    const nodes = wrapper.findAll('.hmfw-tree-treenode')
    await nodes[0].trigger('dragstart')
    await nodes[1].trigger('drop')
    expect(wrapper.emitted('drop')).toBeTruthy()
    const info = (wrapper.emitted('drop')![0] as any[])[0]
    expect(info.dragNode.key).toBe('0-0')
  })

  // ============ semantic classNames / styles ============
  it('applies semantic classNames', () => {
    const wrapper = mount(Tree, {
      props: { treeData, classNames: { root: 'my-root', item: 'my-item', itemTitle: 'my-title' } },
    })
    expect(wrapper.classes()).toContain('my-root')
    expect(wrapper.find('.my-item').exists()).toBe(true)
    expect(wrapper.find('.my-title').exists()).toBe(true)
  })

  it('rootClassName applies to root', () => {
    const wrapper = mount(Tree, { props: { treeData, rootClassName: 'custom-root' } })
    expect(wrapper.classes()).toContain('custom-root')
  })

  // ============ rightClick ============
  it('emits rightClick on contextmenu', async () => {
    const wrapper = mount(Tree, { props: { treeData } })
    await wrapper.find('.hmfw-tree-treenode').trigger('contextmenu')
    expect(wrapper.emitted('rightClick')).toBeTruthy()
  })
})

describe('DirectoryTree', () => {
  it('renders with block-node and directory class', () => {
    const wrapper = mount(DirectoryTree, { props: { treeData } as any })
    expect(wrapper.find('.hmfw-tree-directory').exists()).toBe(true)
    expect(wrapper.find('.hmfw-tree-block-node').exists()).toBe(true)
  })

  it('shows folder icon by default', () => {
    const wrapper = mount(DirectoryTree, { props: { treeData } as any })
    expect(wrapper.find('.hmfw-tree-iconEle').exists()).toBe(true)
  })

  it('renders real svg icon (not emoji text)', () => {
    const wrapper = mount(DirectoryTree, { props: { treeData } as any })
    const iconEle = wrapper.find('.hmfw-tree-iconEle')
    // 应渲染库内 SVG 图标组件，而非字符占位
    expect(iconEle.find('svg').exists()).toBe(true)
  })

  it('leaf node renders file icon', () => {
    const wrapper = mount(DirectoryTree, {
      props: { treeData, defaultExpandAll: true } as any,
    })
    // 展开后应有多个 svg 图标（文件夹 + 叶子文件）
    const svgs = wrapper.findAll('.hmfw-tree-iconEle svg')
    expect(svgs.length).toBe(6)
  })

  it('expandAction click expands on title click', async () => {
    const wrapper = mount(DirectoryTree, { props: { treeData } as any })
    await wrapper.find('.hmfw-tree-node-content-wrapper').trigger('click')
    expect(wrapper.findAll('.hmfw-tree-treenode').length).toBeGreaterThan(1)
  })
})
