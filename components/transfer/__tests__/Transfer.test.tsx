import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Transfer } from '../Transfer'
import type { TransferItem } from '../types'

const dataSource: TransferItem[] = [
  { key: '1', title: 'Item 1' },
  { key: '2', title: 'Item 2', description: 'desc 2' },
  { key: '3', title: 'Item 3', disabled: true },
  { key: '4', title: 'Item 4' },
  { key: '5', title: 'Item 5' },
]

describe('Transfer', () => {
  it('renders two sections', () => {
    const wrapper = mount(Transfer, { props: { dataSource } })
    expect(wrapper.findAll('.hmfw-transfer-section').length).toBe(2)
  })

  it('shows source items in left list', () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, targetKeys: ['1'] },
    })
    const items = wrapper.findAll('.hmfw-transfer-section')[0].findAll('.hmfw-transfer-list-content-item')
    expect(items.length).toBe(4) // 2,3,4,5
  })

  it('shows target items in right list', () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, targetKeys: ['1', '2'] },
    })
    const items = wrapper.findAll('.hmfw-transfer-section')[1].findAll('.hmfw-transfer-list-content-item')
    expect(items.length).toBe(2)
  })

  it('uses Checkbox component (not native input)', () => {
    const wrapper = mount(Transfer, { props: { dataSource } })
    const checkboxes = wrapper.findAll('.hmfw-checkbox')
    expect(checkboxes.length).toBeGreaterThan(0)
  })

  it('uses Button component for actions', () => {
    const wrapper = mount(Transfer, { props: { dataSource } })
    const buttons = wrapper.findAll('.hmfw-transfer-actions .hmfw-btn')
    expect(buttons.length).toBe(2) // right & left
  })

  it('moves selected items to right on right button click', async () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, defaultSelectedKeys: ['2'] },
    })
    const rightBtn = wrapper.findAll('.hmfw-transfer-actions .hmfw-btn')[0]
    await rightBtn.trigger('click')
    expect(wrapper.emitted('change')?.[0]).toEqual([['2'], 'right', ['2']])
  })

  it('moves selected items to left on left button click', async () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, defaultTargetKeys: ['1'], defaultSelectedKeys: ['1'] },
    })
    const leftBtn = wrapper.findAll('.hmfw-transfer-actions .hmfw-btn')[1]
    await leftBtn.trigger('click')
    expect(wrapper.emitted('change')?.[0]).toEqual([[], 'left', ['1']])
  })

  it('selects item on click', async () => {
    const wrapper = mount(Transfer, { props: { dataSource } })
    await wrapper.findAll('.hmfw-transfer-list-content-item')[0].trigger('click')
    expect(wrapper.emitted('selectChange')).toBeTruthy()
  })

  it('does not select disabled items', async () => {
    const wrapper = mount(Transfer, { props: { dataSource } })
    // item 3 is disabled (index 2 in left list)
    await wrapper.findAll('.hmfw-transfer-list-content-item')[2].trigger('click')
    expect(wrapper.emitted('selectChange')).toBeFalsy()
  })

  it('selects item on checkbox click', async () => {
    const wrapper = mount(Transfer, { props: { dataSource } })
    const firstItem = wrapper.findAll('.hmfw-transfer-list-content-item')[0]
    const checkbox = firstItem.find('.hmfw-checkbox')
    await checkbox.trigger('click')
    expect(wrapper.emitted('selectChange')).toBeTruthy()
    const selectChangeEvents = wrapper.emitted('selectChange') as any[]
    // 验证最后一次事件包含 key '1'
    const lastEvent = selectChangeEvents[selectChangeEvents.length - 1]
    expect(lastEvent[0]).toContain('1') // key '1' is selected
  })

  it('deselects item on checkbox click when already selected', async () => {
    const wrapper = mount(Transfer, { props: { dataSource, defaultSelectedKeys: ['1'] } })
    const firstItem = wrapper.findAll('.hmfw-transfer-list-content-item')[0]
    const checkbox = firstItem.find('.hmfw-checkbox')
    await checkbox.trigger('click')
    const selectChangeEvents = wrapper.emitted('selectChange') as any[]
    // 验证最后一次事件不包含 key '1'
    const lastEvent = selectChangeEvents[selectChangeEvents.length - 1]
    expect(lastEvent[0]).not.toContain('1') // key '1' is deselected
  })

  it('checkbox and item text both trigger selection', async () => {
    const wrapper = mount(Transfer, { props: { dataSource } })
    const firstItem = wrapper.findAll('.hmfw-transfer-list-content-item')[0]

    // 点击 checkbox 能触发选中
    const checkbox = firstItem.find('.hmfw-checkbox')
    await checkbox.trigger('click')
    expect(wrapper.emitted('selectChange')).toBeTruthy()

    // 点击列表项也能触发选中
    const wrapper2 = mount(Transfer, { props: { dataSource } })
    const secondItem = wrapper2.findAll('.hmfw-transfer-list-content-item')[1]
    await secondItem.trigger('click')
    expect(wrapper2.emitted('selectChange')).toBeTruthy()
  })

  it('renders Input component when showSearch=true', () => {
    const wrapper = mount(Transfer, { props: { dataSource, showSearch: true } })
    const inputs = wrapper.findAll('.hmfw-input')
    expect(inputs.length).toBe(2) // left & right
  })

  it('filters items by search (Input component)', async () => {
    const wrapper = mount(Transfer, { props: { dataSource, showSearch: true } })
    const inputEl = wrapper.find('.hmfw-transfer-list-body-search-wrapper input')
    await inputEl.setValue('Item 1')
    await inputEl.trigger('input')
    const items = wrapper.findAll('.hmfw-transfer-section')[0].findAll('.hmfw-transfer-list-content-item')
    expect(items.length).toBe(1)
  })

  it('shows not-found container when no data', () => {
    const wrapper = mount(Transfer, { props: { dataSource: [] } })
    expect(wrapper.findAll('.hmfw-transfer-list-body-not-found').length).toBe(2)
  })

  it('oneWay shows only right button and remove icons on right', async () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, oneWay: true, targetKeys: ['1'] },
    })
    const buttons = wrapper.findAll('.hmfw-transfer-actions .hmfw-btn')
    expect(buttons.length).toBe(1) // only right button
    const rightSection = wrapper.findAll('.hmfw-transfer-section')[1]
    expect(rightSection.find('.hmfw-transfer-list-content-item-remove').exists()).toBe(true)
  })

  it('oneWay remove button triggers itemRemove event', async () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, oneWay: true, targetKeys: ['1', '2'] },
    })
    const removeBtn = wrapper.findAll('.hmfw-transfer-section')[1].find('.hmfw-transfer-list-content-item-remove')!
    await removeBtn.trigger('click')
    expect(wrapper.emitted('change')?.[0]).toEqual([['2'], 'left', ['1']])
  })

  it('renders footer when footer prop is provided', () => {
    const wrapper = mount(Transfer, {
      props: {
        dataSource,
        footer: () => 'Custom footer',
      },
    })
    const footers = wrapper.findAll('.hmfw-transfer-list-footer')
    expect(footers.length).toBe(2)
    expect(footers[0].text()).toBe('Custom footer')
  })

  it('renders pagination when pagination=true', () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, targetKeys: ['1', '2'], pagination: true },
    })
    expect(wrapper.findAll('.hmfw-pagination').length).toBe(2)
  })

  it('custom render function works', () => {
    const wrapper = mount(Transfer, {
      props: {
        dataSource,
        render: (item: TransferItem) => `[${item.title}]`,
      },
    })
    const firstItem = wrapper.find('.hmfw-transfer-list-content-item-text')
    expect(firstItem.text()).toBe('[Item 1]')
  })

  it('applies disabled class', () => {
    const wrapper = mount(Transfer, { props: { dataSource, disabled: true } })
    expect(wrapper.find('.hmfw-transfer-disabled').exists()).toBe(true)
  })

  it('applies status error class', () => {
    const wrapper = mount(Transfer, { props: { dataSource, status: 'error' } })
    expect(wrapper.find('.hmfw-transfer-status-error').exists()).toBe(true)
  })

  it('applies status warning class', () => {
    const wrapper = mount(Transfer, { props: { dataSource, status: 'warning' } })
    expect(wrapper.find('.hmfw-transfer-status-warning').exists()).toBe(true)
  })

  it('renders selections dropdown trigger', () => {
    const wrapper = mount(Transfer, { props: { dataSource } })
    // Dropdown 渲染 Fragment，class 无法继承，改测下拉触发器
    expect(wrapper.findAll('.hmfw-transfer-list-header-dropdown-trigger').length).toBe(2)
  })

  it('supports rowKey to normalize key', () => {
    const data = [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
    ]
    const wrapper = mount(Transfer, {
      props: {
        dataSource: data as any,
        rowKey: (item: any) => String(item.id),
        targetKeys: ['1'],
      },
    })
    const rightItems = wrapper.findAll('.hmfw-transfer-section')[1].findAll('.hmfw-transfer-list-content-item')
    expect(rightItems.length).toBe(1)
  })

  it('emits search event when Input changes', async () => {
    const wrapper = mount(Transfer, { props: { dataSource, showSearch: true } })
    const inputEl = wrapper.find('.hmfw-transfer-list-body-search-wrapper input')
    await inputEl.setValue('test')
    await inputEl.trigger('input')
    expect(wrapper.emitted('search')?.[0]).toEqual(['left', 'test'])
  })

  it('applies semantic classNames', () => {
    const wrapper = mount(Transfer, {
      props: {
        dataSource,
        classNames: { root: 'custom-root', actions: 'custom-actions' },
      },
    })
    expect(wrapper.find('.custom-root').exists()).toBe(true)
    expect(wrapper.find('.custom-actions').exists()).toBe(true)
  })

  it('applies semantic styles', () => {
    const wrapper = mount(Transfer, {
      props: {
        dataSource,
        styles: { root: { background: 'red' } },
      },
    })
    expect((wrapper.find('.hmfw-transfer').element as HTMLElement).style.background).toBe('red')
  })

  it('shift+click enables multi-select', async () => {
    const wrapper = mount(Transfer, { props: { dataSource } })
    const items = wrapper.findAll('.hmfw-transfer-list-content-item')
    await items[0].trigger('click')
    // 点击 item[3] (Item 4)，shift 选中 0-3，跳过 disabled item[2]
    await items[3].trigger('click', { shiftKey: true })
    const emitted = wrapper.emitted('selectChange') as any[]
    expect(emitted.length).toBe(2)
    // 第二次 shift 选中应包含多项（1,4,5）
    expect(emitted[1][0].length).toBeGreaterThan(1)
  })

  it('supports actions for button text', () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, actions: ['To Right', 'To Left'] },
    })
    const buttons = wrapper.findAll('.hmfw-transfer-actions .hmfw-btn')
    expect(buttons[0].text()).toContain('To Right')
    expect(buttons[1].text()).toContain('To Left')
  })

  it('selectAllLabel customizes header label', () => {
    const wrapper = mount(Transfer, {
      props: {
        dataSource,
        selectAllLabels: ['Custom Left', 'Custom Right'],
      },
    })
    const headers = wrapper.findAll('.hmfw-transfer-list-header-selected')
    expect(headers[0].text()).toContain('Custom Left')
    expect(headers[1].text()).toContain('Custom Right')
  })

  it('listStyle function receives direction', () => {
    const wrapper = mount(Transfer, {
      props: {
        dataSource,
        listStyle: (info: { direction: string }) => ({
          background: info.direction === 'left' ? 'blue' : 'green',
        }),
      },
    })
    const sections = wrapper.findAll('.hmfw-transfer-section')
    expect((sections[0].element as HTMLElement).style.background).toBe('blue')
    expect((sections[1].element as HTMLElement).style.background).toBe('green')
  })

  // ===== 拖拽排序 =====
  it('does not render draggable attr by default on right items', () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, targetKeys: ['1', '2', '4'] },
    })
    const rightItems = wrapper.findAll('.hmfw-transfer-section')[1].findAll('.hmfw-transfer-list-content-item')
    expect(rightItems[0].attributes('draggable')).toBeFalsy()
  })

  it('marks right items draggable when draggable=true', () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, targetKeys: ['1', '2', '4'], draggable: true },
    })
    const rightItems = wrapper.findAll('.hmfw-transfer-section')[1].findAll('.hmfw-transfer-list-content-item')
    expect(rightItems[0].attributes('draggable')).toBe('true')
    // 左侧不可拖拽
    const leftItems = wrapper.findAll('.hmfw-transfer-section')[0].findAll('.hmfw-transfer-list-content-item')
    expect(leftItems[0].attributes('draggable')).toBeFalsy()
  })

  it('disabled item is not draggable even when draggable=true', () => {
    const wrapper = mount(Transfer, {
      props: {
        dataSource: [
          { key: '1', title: 'A' },
          { key: '2', title: 'B', disabled: true },
        ],
        targetKeys: ['1', '2'],
        draggable: true,
      },
    })
    const rightItems = wrapper.findAll('.hmfw-transfer-section')[1].findAll('.hmfw-transfer-list-content-item')
    expect(rightItems[0].attributes('draggable')).toBe('true')
    expect(rightItems[1].attributes('draggable')).toBeFalsy()
  })

  it('reorder via drag and drop updates targetKeys (drop after target)', async () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, targetKeys: ['1', '2', '4'], draggable: true },
    })
    const rightItems = wrapper.findAll('.hmfw-transfer-section')[1].findAll('.hmfw-transfer-list-content-item')
    // 拖拽 item[0] (key='1') 到 item[2] (key='4') 之后
    await rightItems[0].trigger('dragstart')
    // 模拟 dragover：mock currentTarget bounding rect 让鼠标在下半部分
    const dragOverEvent = new Event('dragover', { bubbles: true, cancelable: true }) as any
    Object.defineProperty(dragOverEvent, 'clientY', { value: 100 })
    Object.defineProperty(dragOverEvent, 'currentTarget', {
      value: { getBoundingClientRect: () => ({ top: 0, height: 40 }) },
    })
    await rightItems[2].element.dispatchEvent(dragOverEvent)
    await rightItems[2].trigger('drop')
    const updates = wrapper.emitted('update:targetKeys') as any[]
    expect(updates).toBeTruthy()
    expect(updates[updates.length - 1][0]).toEqual(['2', '4', '1'])
  })

  it('reorder via drag and drop updates targetKeys (drop before target)', async () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, targetKeys: ['1', '2', '4'], draggable: true },
    })
    const rightItems = wrapper.findAll('.hmfw-transfer-section')[1].findAll('.hmfw-transfer-list-content-item')
    // 拖拽 item[2] (key='4') 到 item[0] (key='1') 之前
    await rightItems[2].trigger('dragstart')
    const dragOverEvent = new Event('dragover', { bubbles: true, cancelable: true }) as any
    Object.defineProperty(dragOverEvent, 'clientY', { value: 5 })
    Object.defineProperty(dragOverEvent, 'currentTarget', {
      value: { getBoundingClientRect: () => ({ top: 0, height: 40 }) },
    })
    await rightItems[0].element.dispatchEvent(dragOverEvent)
    await rightItems[0].trigger('drop')
    const updates = wrapper.emitted('update:targetKeys') as any[]
    expect(updates[updates.length - 1][0]).toEqual(['4', '1', '2'])
  })

  it('reorder emits reorder event with info', async () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, targetKeys: ['1', '2', '4'], draggable: true },
    })
    const rightItems = wrapper.findAll('.hmfw-transfer-section')[1].findAll('.hmfw-transfer-list-content-item')
    await rightItems[0].trigger('dragstart')
    const dragOverEvent = new Event('dragover', { bubbles: true, cancelable: true }) as any
    Object.defineProperty(dragOverEvent, 'clientY', { value: 100 })
    Object.defineProperty(dragOverEvent, 'currentTarget', {
      value: { getBoundingClientRect: () => ({ top: 0, height: 40 }) },
    })
    await rightItems[2].element.dispatchEvent(dragOverEvent)
    await rightItems[2].trigger('drop')
    const reorder = wrapper.emitted('reorder') as any[]
    expect(reorder).toBeTruthy()
    expect(reorder[0][0]).toMatchObject({
      direction: 'right',
      activeKey: '1',
      oldTargetKeys: ['1', '2', '4'],
      newTargetKeys: ['2', '4', '1'],
      fromIndex: 0,
      toIndex: 2,
    })
  })

  it('reorder dragging same item does nothing', async () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, targetKeys: ['1', '2', '4'], draggable: true },
    })
    const rightItems = wrapper.findAll('.hmfw-transfer-section')[1].findAll('.hmfw-transfer-list-content-item')
    await rightItems[0].trigger('dragstart')
    await rightItems[0].trigger('drop')
    expect(wrapper.emitted('reorder')).toBeFalsy()
  })

  it('drag end clears dragging state', async () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, targetKeys: ['1', '2', '4'], draggable: true },
    })
    const rightItems = wrapper.findAll('.hmfw-transfer-section')[1].findAll('.hmfw-transfer-list-content-item')
    await rightItems[0].trigger('dragstart')
    await rightItems[0].trigger('dragend')
    // dragend 后再 drop 不应触发 reorder（因为 draggingKey 已清空）
    await rightItems[2].trigger('drop')
    expect(wrapper.emitted('reorder')).toBeFalsy()
  })

  // ----------------------------------------------------------------
  // 虚拟滚动测试
  // ----------------------------------------------------------------
  describe('虚拟滚动', () => {
    const manyItems: TransferItem[] = Array.from({ length: 100 }, (_, i) => ({
      key: String(i),
      title: `Item ${i}`,
    }))

    it('virtual=true 时渲染 VirtualList', () => {
      const wrapper = mount(Transfer, {
        props: { dataSource: manyItems, virtual: true, listHeight: 300 },
      })
      const vl = wrapper.find('.hmfw-virtual-list')
      expect(vl.exists()).toBe(true)
    })

    it('virtual=false 时不渲染 VirtualList', () => {
      const wrapper = mount(Transfer, {
        props: { dataSource: manyItems, virtual: false },
      })
      const vl = wrapper.find('.hmfw-virtual-list')
      expect(vl.exists()).toBe(false)
    })

    it('virtual=true 且无分页时启用虚拟滚动', () => {
      const wrapper = mount(Transfer, {
        props: { dataSource: manyItems, virtual: true, listHeight: 300 },
      })
      // 虚拟列表渲染的项数应少于总数（仅渲染可见区域）
      const items = wrapper.findAll('.hmfw-virtual-list-item')
      expect(items.length).toBeLessThan(100)
      expect(items.length).toBeGreaterThan(0)
    })

    it('有分页时 virtual 不生效', () => {
      const wrapper = mount(Transfer, {
        props: {
          dataSource: manyItems,
          virtual: true,
          listHeight: 300,
          pagination: { pageSize: 10 },
        },
      })
      // 有分页时不应使用 VirtualList
      const vl = wrapper.find('.hmfw-virtual-list')
      expect(vl.exists()).toBe(false)
    })

    it('虚拟滚动项支持选择交互', async () => {
      const wrapper = mount(Transfer, {
        props: { dataSource: manyItems, virtual: true, listHeight: 300 },
      })

      // 左侧虚拟列表中的 checkbox 应可选中
      const checkboxes = wrapper.findAll('.hmfw-virtual-list-item input[type="checkbox"]')
      expect(checkboxes.length).toBeGreaterThan(0)
    })

    it('虚拟滚动在右侧列表也生效', () => {
      const wrapper = mount(Transfer, {
        props: {
          dataSource: manyItems,
          targetKeys: Array.from({ length: 50 }, (_, i) => String(i)),
          virtual: true,
          listHeight: 300,
        },
      })

      // 左右两侧都应有 VirtualList
      const vls = wrapper.findAll('.hmfw-virtual-list')
      expect(vls.length).toBe(2)
    })
  })
})
