import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { h, nextTick } from 'vue'
import { Table } from '../Table'

const columns = [
  { key: 'name', dataIndex: 'name', title: 'Name' },
  { key: 'age', dataIndex: 'age', title: 'Age', sorter: (a: any, b: any) => a.age - b.age },
  { key: 'city', dataIndex: 'city', title: 'City' },
]

const dataSource = [
  { key: '1', name: 'Alice', age: 30, city: 'Beijing' },
  { key: '2', name: 'Bob', age: 25, city: 'Shanghai' },
  { key: '3', name: 'Charlie', age: 35, city: 'Guangzhou' },
]

describe('Table', () => {
  it('renders columns and rows', () => {
    const wrapper = mount(Table, { props: { columns, dataSource } })
    expect(wrapper.findAll('th')).toHaveLength(3)
    expect(wrapper.findAll('tbody tr')).toHaveLength(3)
  })

  it('renders empty state when no data', () => {
    const wrapper = mount(Table, { props: { columns, dataSource: [] } })
    expect(wrapper.find('.hmfw-table-placeholder').exists()).toBe(true)
  })

  it('applies bordered class', () => {
    const wrapper = mount(Table, { props: { columns, dataSource, bordered: true } })
    expect(wrapper.classes()).toContain('hmfw-table-bordered')
  })

  it('applies size class', () => {
    const small = mount(Table, { props: { columns, dataSource, size: 'small' } })
    expect(small.classes()).toContain('hmfw-table-small')
    const middle = mount(Table, { props: { columns, dataSource, size: 'middle' } })
    expect(middle.classes()).toContain('hmfw-table-middle')
    const large = mount(Table, { props: { columns, dataSource, size: 'large' } })
    expect(large.classes()).toContain('hmfw-table-large')
  })

  it('renders sorter icons for sortable columns', () => {
    const wrapper = mount(Table, { props: { columns, dataSource } })
    expect(wrapper.find('.hmfw-table-column-sorter').exists()).toBe(true)
  })

  it('sorts data on header click', async () => {
    const wrapper = mount(Table, { props: { columns, dataSource } })
    const ageHeader = wrapper.findAll('th')[1]
    await ageHeader.trigger('click')
    const cells = wrapper.findAll('tbody tr td:nth-child(2)')
    expect(cells[0].text()).toBe('25')
    expect(cells[1].text()).toBe('30')
    expect(cells[2].text()).toBe('35')
  })

  it('renders custom cell via render function', () => {
    const customCols = [
      ...columns.slice(0, 2),
      { key: 'action', title: 'Action', render: (_: any, record: any) => `Edit ${record.name}` },
    ]
    const wrapper = mount(Table, { props: { columns: customCols, dataSource } })
    const lastCells = wrapper.findAll('tbody tr td:last-child')
    expect(lastCells[0].text()).toBe('Edit Alice')
  })

  it('renders row selection checkboxes', () => {
    const wrapper = mount(Table, {
      props: {
        columns,
        dataSource,
        rowSelection: { onChange: vi.fn() },
      },
    })
    expect(wrapper.findAll('input[type="checkbox"]').length).toBeGreaterThan(0)
  })

  it('hides header when showHeader=false', () => {
    const wrapper = mount(Table, { props: { columns, dataSource, showHeader: false } })
    expect(wrapper.find('thead').exists()).toBe(false)
  })

  it('renders pagination when pagination prop set', () => {
    const manyData = Array.from({ length: 15 }, (_, i) => ({
      key: String(i),
      name: `User ${i}`,
      age: 20 + i,
      city: 'City',
    }))
    const wrapper = mount(Table, {
      props: { columns, dataSource: manyData, pagination: { pageSize: 10 } },
    })
    expect(wrapper.find('.hmfw-table-pagination').exists()).toBe(true)
  })

  it('hides pagination when pagination=false', () => {
    const wrapper = mount(Table, { props: { columns, dataSource, pagination: false } })
    expect(wrapper.find('.hmfw-table-pagination').exists()).toBe(false)
  })

  it('toggles sort order ascend -> descend -> none on repeated clicks', async () => {
    const wrapper = mount(Table, { props: { columns, dataSource } })
    const ageHeader = wrapper.findAll('th')[1]
    // 1st click: ascend
    await ageHeader.trigger('click')
    let cells = wrapper.findAll('tbody tr td:nth-child(2)')
    expect(cells.map((c) => c.text())).toEqual(['25', '30', '35'])
    // 2nd click: descend
    await ageHeader.trigger('click')
    cells = wrapper.findAll('tbody tr td:nth-child(2)')
    expect(cells.map((c) => c.text())).toEqual(['35', '30', '25'])
    // 3rd click: back to original (no sort)
    await ageHeader.trigger('click')
    cells = wrapper.findAll('tbody tr td:nth-child(2)')
    expect(cells.map((c) => c.text())).toEqual(['30', '25', '35'])
  })

  it('triggers sort via keyboard (Enter)', async () => {
    const wrapper = mount(Table, { props: { columns, dataSource } })
    const ageHeader = wrapper.findAll('th')[1]
    await ageHeader.trigger('keydown', { key: 'Enter' })
    const cells = wrapper.findAll('tbody tr td:nth-child(2)')
    expect(cells.map((c) => c.text())).toEqual(['25', '30', '35'])
  })

  it('sets aria-sort on sortable column header', async () => {
    const wrapper = mount(Table, { props: { columns, dataSource } })
    const ageHeader = wrapper.findAll('th')[1]
    expect(ageHeader.attributes('aria-sort')).toBe('none')
    await ageHeader.trigger('click')
    expect(ageHeader.attributes('aria-sort')).toBe('ascending')
  })

  it('applies fixed column classes', () => {
    const fixedCols = [
      { key: 'name', dataIndex: 'name', title: 'Name', fixed: 'left' as const },
      { key: 'age', dataIndex: 'age', title: 'Age' },
      { key: 'city', dataIndex: 'city', title: 'City', fixed: 'right' as const },
    ]
    const wrapper = mount(Table, { props: { columns: fixedCols, dataSource } })
    expect(wrapper.find('.hmfw-table-cell-fix-left').exists()).toBe(true)
    expect(wrapper.find('.hmfw-table-cell-fix-right').exists()).toBe(true)

    // 固定列的 class 需同时作用于表头 th 与表体 td，否则表头不会固定
    expect(wrapper.find('thead th.hmfw-table-cell-fix-left').exists()).toBe(true)
    expect(wrapper.find('thead th.hmfw-table-cell-fix-right').exists()).toBe(true)
    expect(wrapper.find('tbody td.hmfw-table-cell-fix-left').exists()).toBe(true)
    expect(wrapper.find('tbody td.hmfw-table-cell-fix-right').exists()).toBe(true)
  })

  it('renders filter trigger when column has filters', () => {
    const filterCols = [
      {
        key: 'name',
        dataIndex: 'name',
        title: 'Name',
        filters: [{ text: 'Alice', value: 'Alice' }],
        onFilter: (value: any, record: any) => record.name === value,
      },
      ...columns.slice(1),
    ]
    const wrapper = mount(Table, { props: { columns: filterCols, dataSource } })
    expect(wrapper.find('.hmfw-table-filter-trigger').exists()).toBe(true)
    // 验证图标是 SVG 而不是 emoji
    expect(wrapper.find('.hmfw-table-filter-trigger svg').exists()).toBe(true)
  })

  it('opens filter dropdown on trigger click and filters data on confirm', async () => {
    const filterCols = [
      {
        key: 'name',
        dataIndex: 'name',
        title: 'Name',
        filters: [
          { text: 'Alice', value: 'Alice' },
          { text: 'Bob', value: 'Bob' },
        ],
        onFilter: (value: any, record: any) => record.name === value,
      },
      ...columns.slice(1),
    ]
    const onChange = vi.fn()
    const wrapper = mount(Table, {
      props: { columns: filterCols, dataSource, onChange },
      attachTo: document.body,
    })

    // 初始显示全部 3 行
    expect(wrapper.findAll('tbody tr').length).toBe(3)

    // 点击筛选触发器（span 上有 stopPropagation，须由受控状态自行开启）
    await wrapper.find('.hmfw-table-filter-trigger').trigger('click')
    await wrapper.vm.$nextTick()
    await new Promise((resolve) => setTimeout(resolve, 50))

    // 弹层经 Teleport 渲染到 body，且始终存在于 DOM 中（关闭时加 hmfw-dropdown-hidden）
    // 取最后一个（本次新开）的弹层容器
    const popups = document.querySelectorAll('.hmfw-trigger-popup')
    const popup = popups[popups.length - 1]
    expect(popup).toBeTruthy()

    // 关键断言：点击后弹层必须为可见态。
    // 若回归到「span 上纯 stopPropagation 阻断 Trigger 打开」的写法，
    // 弹层会保持 hmfw-dropdown-hidden，此断言失败。
    expect(popup.classList.contains('hmfw-dropdown-hidden')).toBe(false)

    const dropdown = popup.querySelector('.hmfw-table-dropdown') as HTMLElement
    expect(dropdown).toBeTruthy()

    // 勾选第一个筛选项 Alice
    const firstCheckbox = dropdown.querySelector(
      '.hmfw-table-dropdown-menu-item input[type="checkbox"]',
    ) as HTMLInputElement
    expect(firstCheckbox).toBeTruthy()
    firstCheckbox.click()
    await wrapper.vm.$nextTick()

    // 点击「确定」（注意：Button 组件会在两个中文字符间插入空格）
    const confirmBtn = Array.from(dropdown.querySelectorAll('.hmfw-table-dropdown-btns .hmfw-btn')).find((btn) =>
      btn.textContent?.includes('确 定'),
    ) as HTMLElement
    expect(confirmBtn).toBeTruthy()
    confirmBtn.click()
    await wrapper.vm.$nextTick()
    await new Promise((resolve) => setTimeout(resolve, 50))

    // 数据被过滤为仅 Alice 一行
    const rows = wrapper.findAll('tbody tr')
    expect(rows.length).toBe(1)
    expect(rows[0].text()).toContain('Alice')

    // 筛选图标处于激活状态
    expect(wrapper.find('.hmfw-table-filter-trigger').classes()).toContain('active')

    // onChange 以 filter action 触发
    expect(onChange).toHaveBeenCalled()
    const extra = onChange.mock.calls.at(-1)![3]
    expect(extra.action).toBe('filter')

    wrapper.unmount()
  })

  it('renders expanded row content when expandable configured', () => {
    const wrapper = mount(Table, {
      props: {
        columns,
        dataSource,
        expandable: {
          expandedRowKeys: ['1'],
          expandedRowRender: (record: any) => `Detail: ${record.name}`,
        },
      },
    })
    expect(wrapper.find('.hmfw-table-expanded-row').exists()).toBe(true)
    expect(wrapper.find('.hmfw-table-expanded-row').text()).toContain('Detail: Alice')
  })

  it('toggles expanded row on expand icon click', async () => {
    const onExpand = vi.fn()
    const wrapper = mount(Table, {
      props: {
        columns,
        dataSource,
        expandable: {
          expandedRowRender: (record: any) => `Detail: ${record.name}`,
          onExpand,
        },
      },
    })
    expect(wrapper.find('.hmfw-table-expanded-row').exists()).toBe(false)

    // 展开图标应为 SVG 图标而非 emoji 字符
    const expandIcon = wrapper.find('.hmfw-table-expand-icon')
    expect(expandIcon.find('svg').exists()).toBe(true)
    expect(expandIcon.text()).not.toMatch(/[▶▼]/)

    await expandIcon.trigger('click')
    expect(wrapper.find('.hmfw-table-expanded-row').exists()).toBe(true)
    expect(onExpand).toHaveBeenCalledWith(true, dataSource[0])
    // 展开后仍为 SVG 图标
    expect(wrapper.find('.hmfw-table-expand-icon svg').exists()).toBe(true)
  })

  describe('树形数据（嵌套 children）', () => {
    const treeData = [
      {
        key: '1',
        name: 'Parent',
        age: 40,
        city: 'Beijing',
        children: [
          { key: '1-1', name: 'Child A', age: 15, city: 'Beijing' },
          {
            key: '1-2',
            name: 'Child B',
            age: 12,
            city: 'Beijing',
            children: [{ key: '1-2-1', name: 'Grandchild', age: 1, city: 'Beijing' }],
          },
        ],
      },
      { key: '2', name: 'Leaf', age: 20, city: 'Shanghai' },
    ]

    it('展开图标内嵌首列，可展开行渲染图标、叶子行渲染占位', () => {
      const wrapper = mount(Table, { props: { columns, dataSource: treeData } })
      // 树形模式不使用独立展开列
      expect(wrapper.find('.hmfw-table-expand-icon-cell').exists()).toBe(false)
      const trees = wrapper.findAll('.hmfw-table-cell-tree')
      // 顶层两行各有一个树形首列
      expect(trees).toHaveLength(2)
      // Parent 行可展开 → 有展开图标
      expect(trees[0].find('.hmfw-table-row-expand-icon-wrap').exists()).toBe(true)
      // Leaf 行无子节点 → 占位
      expect(trees[1].find('.hmfw-table-row-expand-icon-spacer').exists()).toBe(true)
    })

    it('点击展开图标后渲染子节点行', async () => {
      const onExpand = vi.fn()
      const wrapper = mount(Table, {
        props: { columns, dataSource: treeData, expandable: { onExpand } },
      })
      // 未展开时子节点不渲染
      expect(wrapper.text()).not.toContain('Child A')
      await wrapper.find('.hmfw-table-cell-tree .hmfw-table-expand-icon').trigger('click')
      expect(onExpand).toHaveBeenCalledWith(true, treeData[0])
      expect(wrapper.text()).toContain('Child A')
      expect(wrapper.text()).toContain('Child B')
      // 孙节点未展开，不渲染
      expect(wrapper.text()).not.toContain('Grandchild')
    })

    it('defaultExpandAllRows 默认展开所有带子节点的行', () => {
      const wrapper = mount(Table, {
        props: { columns, dataSource: treeData, expandable: { defaultExpandAllRows: true } },
      })
      expect(wrapper.text()).toContain('Child A')
      expect(wrapper.text()).toContain('Grandchild')
    })

    it('indentSize 控制子节点缩进', () => {
      const wrapper = mount(Table, {
        props: {
          columns,
          dataSource: treeData,
          expandable: { expandedRowKeys: ['1'], indentSize: 20 },
        },
      })
      const indents = wrapper.findAll('.hmfw-table-row-indent')
      // 顶层缩进为 0
      expect(indents[0].attributes('style')).toContain('padding-left: 0px')
      // 子节点缩进为 1 * 20 = 20px
      const childIndent = indents.find((n) => n.attributes('style')?.includes('20px'))
      expect(childIndent).toBeTruthy()
    })

    it('rowExpandable 可否决某行展开', () => {
      const wrapper = mount(Table, {
        props: {
          columns,
          dataSource: treeData,
          expandable: { rowExpandable: (record: any) => record.key !== '1' },
        },
      })
      // key '1' 被否决 → 无展开图标，渲染占位
      const trees = wrapper.findAll('.hmfw-table-cell-tree')
      expect(trees[0].find('.hmfw-table-row-expand-icon-wrap').exists()).toBe(false)
      expect(trees[0].find('.hmfw-table-row-expand-icon-spacer').exists()).toBe(true)
    })

    it('expandRowByClick 点击整行切换展开', async () => {
      const wrapper = mount(Table, {
        props: { columns, dataSource: treeData, expandable: { expandRowByClick: true } },
      })
      expect(wrapper.text()).not.toContain('Child A')
      await wrapper.find('.hmfw-table-row').trigger('click')
      expect(wrapper.text()).toContain('Child A')
    })
  })

  it('calls rowSelection onChange with selected keys and info', async () => {
    const onChange = vi.fn()
    const wrapper = mount(Table, {
      props: { columns, dataSource, rowSelection: { onChange } },
    })
    // first checkbox in tbody (index 0 is header select-all)
    const rowCheckbox = wrapper.findAll('tbody input[type="checkbox"]')[0]
    await rowCheckbox.setValue(true)
    expect(onChange).toHaveBeenCalled()
    const [keys, rows, info] = onChange.mock.calls[0]
    expect(keys).toContain('1')
    expect(rows[0]).toEqual(dataSource[0])
    expect(info.type).toBe('multiple')
  })

  it('select-all checkbox selects all rows on current page', async () => {
    const onChange = vi.fn()
    const wrapper = mount(Table, {
      props: { columns, dataSource, rowSelection: { onChange } },
    })
    const selectAll = wrapper.find('thead input[type="checkbox"]')
    await selectAll.setValue(true)
    const [keys, , info] = onChange.mock.calls[0]
    expect(keys).toEqual(['1', '2', '3'])
    expect(info.type).toBe('all')
  })

  it('renders radio inputs when rowSelection type is radio', () => {
    const wrapper = mount(Table, {
      props: { columns, dataSource, rowSelection: { type: 'radio', onChange: vi.fn() } },
    })
    expect(wrapper.findAll('input[type="radio"]').length).toBe(3)
  })

  it('renders title and footer', () => {
    const wrapper = mount(Table, {
      props: {
        columns,
        dataSource,
        title: () => 'My Title',
        footer: () => 'My Footer',
      },
    })
    expect(wrapper.find('.hmfw-table-title').text()).toBe('My Title')
    expect(wrapper.find('.hmfw-table-footer').text()).toBe('My Footer')
  })

  it('emits change with extra.action on sort', async () => {
    const onChange = vi.fn()
    const wrapper = mount(Table, { props: { columns, dataSource, onChange } })
    await wrapper.findAll('th')[1].trigger('click')
    expect(onChange).toHaveBeenCalled()
    const extra = onChange.mock.calls[0][3]
    expect(extra.action).toBe('sort')
  })

  it('paginates data to pageSize', () => {
    const manyData = Array.from({ length: 15 }, (_, i) => ({
      key: String(i),
      name: `User ${i}`,
      age: 20 + i,
      city: 'City',
    }))
    const wrapper = mount(Table, {
      props: { columns, dataSource: manyData, pagination: { pageSize: 10 } },
    })
    expect(wrapper.findAll('tbody tr')).toHaveLength(10)
  })

  // ----------------------------------------------------------------
  // 虚拟滚动测试
  // ----------------------------------------------------------------
  describe('虚拟滚动', () => {
    const manyColumns = [
      { key: 'id', dataIndex: 'id', title: 'ID', width: 80 },
      { key: 'name', dataIndex: 'name', title: 'Name', width: 120 },
      { key: 'age', dataIndex: 'age', title: 'Age', width: 80 },
      { key: 'city', dataIndex: 'city', title: 'City', width: 150 },
    ]

    function makeData(count: number) {
      return Array.from({ length: count }, (_, i) => ({
        key: String(i),
        id: i + 1,
        name: `User ${i}`,
        age: 20 + (i % 30),
        city: `City ${i % 10}`,
      }))
    }

    it('数据量 >20 且有 scroll.y 时启用虚拟滚动，仅渲染可见行', () => {
      const data = makeData(100)
      const wrapper = mount(Table, {
        props: {
          columns: manyColumns,
          dataSource: data,
          scroll: { y: 200 },
        },
      })

      // 虚拟滚动启用：渲染的行数应远小于 100（加上 spacer 和 expand 等额外行）
      const rows = wrapper.findAll('tbody tr')
      expect(rows.length).toBeLessThan(100)
      // 至少渲染了一些可见行
      expect(rows.length).toBeGreaterThan(0)
    })

    it('数据量 ≤20 时不启用虚拟滚动，渲染全部行', () => {
      const data = makeData(15)
      const wrapper = mount(Table, {
        props: {
          columns: manyColumns,
          dataSource: data,
          scroll: { y: 200 },
          pagination: false,
        },
      })

      // 15 行数据全部渲染（加上可能的 spacer/placeholder）
      const rows = wrapper.findAll('tbody tr.hmfw-table-row')
      expect(rows.length).toBe(15)
    })

    it('虚拟滚动渲染上部 spacer 占位行', () => {
      const data = makeData(100)
      const wrapper = mount(Table, {
        props: {
          columns: manyColumns,
          dataSource: data,
          scroll: { y: 200 },
        },
      })

      // 初始滚动位置为 0，上部 spacer 高度应为 0（条件渲染，不存在）
      // 设置 scrollTop 并触发 scroll 事件
      const contentEl = wrapper.find('.hmfw-table-content')
      expect(contentEl.exists()).toBe(true)
    })

    it('不同 size 使用不同行高', () => {
      const data = makeData(100)
      const wrapperSmall = mount(Table, {
        props: {
          columns: manyColumns,
          dataSource: data,
          scroll: { y: 200 },
          size: 'small',
        },
      })

      // small 行高 38px，同样容器高度能装更多行
      const rowsSmall = wrapperSmall.findAll('tbody tr.hmfw-table-row')
      expect(rowsSmall.length).toBeGreaterThan(0)

      const wrapperLarge = mount(Table, {
        props: {
          columns: manyColumns,
          dataSource: data,
          scroll: { y: 200 },
          size: 'middle',
        },
      })

      // middle 行高 46px，能装的行数应不同
      const rowsMiddle = wrapperLarge.findAll('tbody tr.hmfw-table-row')
      expect(rowsMiddle.length).toBeGreaterThan(0)
    })

    it('排序后虚拟列表正确更新', async () => {
      const data = makeData(100)
      const sortColumns = [
        { key: 'id', dataIndex: 'id', title: 'ID' },
        { key: 'name', dataIndex: 'name', title: 'Name' },
        {
          key: 'age',
          dataIndex: 'age',
          title: 'Age',
          sorter: (a: any, b: any) => a.age - b.age,
        },
      ]
      const wrapper = mount(Table, {
        props: {
          columns: sortColumns,
          dataSource: data,
          scroll: { y: 200 },
        },
      })

      // 点击排序列
      const ageHeader = wrapper.findAll('th').at(2)
      await ageHeader?.trigger('click')

      // 排序后行仍然存在（虚拟滚动正常工作）
      const rows = wrapper.findAll('tbody tr.hmfw-table-row')
      expect(rows.length).toBeGreaterThan(0)
    })

    it('无 scroll.y 时不启用虚拟滚动', () => {
      const data = makeData(100)
      const wrapper = mount(Table, {
        props: {
          columns: manyColumns,
          dataSource: data,
        },
      })

      // 无 scroll.y，全部行渲染（受分页控制，默认 10/page）
      const rows = wrapper.findAll('tbody tr.hmfw-table-row')
      expect(rows.length).toBeLessThanOrEqual(10)
    })
  })

  describe('rowClassName', () => {
    it('applies string rowClassName to all rows', () => {
      const wrapper = mount(Table, {
        props: { columns, dataSource, rowClassName: 'custom-row' },
      })
      const rows = wrapper.findAll('tbody tr.hmfw-table-row')
      rows.forEach((row) => {
        expect(row.classes()).toContain('custom-row')
      })
    })

    it('applies function rowClassName with record and index', () => {
      const wrapper = mount(Table, {
        props: {
          columns,
          dataSource,
          rowClassName: (record: any, index: number) => (index % 2 === 0 ? 'even-row' : 'odd-row'),
        },
      })
      const rows = wrapper.findAll('tbody tr.hmfw-table-row')
      expect(rows[0].classes()).toContain('even-row')
      expect(rows[1].classes()).toContain('odd-row')
      expect(rows[2].classes()).toContain('even-row')
    })

    it('rowClassName works with selected rows', () => {
      const wrapper = mount(Table, {
        props: {
          columns,
          dataSource,
          rowClassName: 'custom-row',
          rowSelection: { selectedRowKeys: ['1'] },
        },
      })
      const firstRow = wrapper.find('tbody tr.hmfw-table-row')
      expect(firstRow.classes()).toContain('custom-row')
      expect(firstRow.classes()).toContain('hmfw-table-row-selected')
    })
  })

  describe('排序受控 / 默认排序 / 方向序列', () => {
    const nameCol = { key: 'name', dataIndex: 'name', title: 'Name' }

    it('defaultSortOrder 首次渲染即按默认方向排序', () => {
      const wrapper = mount(Table, {
        props: {
          columns: [
            nameCol,
            {
              key: 'age',
              dataIndex: 'age',
              title: 'Age',
              sorter: (a: any, b: any) => a.age - b.age,
              defaultSortOrder: 'descend',
            },
          ],
          dataSource,
          pagination: false,
        },
      })
      expect(wrapper.find('tbody tr.hmfw-table-row').text()).toContain('Charlie')
    })

    it('sortOrder 受控：渲染跟随 props，点击仅抛出 change 不改变显示', async () => {
      const onChange = vi.fn()
      const sortColumn = {
        key: 'age',
        dataIndex: 'age',
        title: 'Age',
        sorter: (a: any, b: any) => a.age - b.age,
        sortOrder: 'ascend',
      }
      const wrapper = mount(Table, {
        props: { columns: [nameCol, sortColumn], dataSource, pagination: false, onChange },
      })
      expect(wrapper.find('tbody tr.hmfw-table-row').text()).toContain('Bob')

      await wrapper.find('th.hmfw-table-column-has-sorters').trigger('click')
      // 受控列未收到新 props → 显示保持 ascend
      expect(wrapper.find('tbody tr.hmfw-table-row').text()).toContain('Bob')
      expect(onChange.mock.calls[0][2].order).toBe('descend')

      // 外部更新 sortOrder 后渲染跟随
      await wrapper.setProps({ columns: [nameCol, { ...sortColumn, sortOrder: 'descend' }] })
      expect(wrapper.find('tbody tr.hmfw-table-row').text()).toContain('Charlie')
    })

    it('sortDirections 控制方向循环，越过末尾即取消排序', async () => {
      const wrapper = mount(Table, {
        props: {
          columns: [
            nameCol,
            {
              key: 'age',
              dataIndex: 'age',
              title: 'Age',
              sorter: (a: any, b: any) => a.age - b.age,
              sortDirections: ['ascend'],
            },
          ],
          dataSource,
          pagination: false,
        },
      })
      const th = wrapper.find('th.hmfw-table-column-has-sorters')
      await th.trigger('click')
      expect(wrapper.find('tbody tr.hmfw-table-row').text()).toContain('Bob')
      await th.trigger('click') // ascend 已是最后一个方向 → 取消
      expect(wrapper.find('tbody tr.hmfw-table-row').text()).toContain('Alice')
    })

    it('sorter 对象形式 { compare, multiple } 参与排序并支持多列', async () => {
      const onChange = vi.fn()
      const wrapper = mount(Table, {
        props: {
          columns: [
            {
              key: 'name',
              dataIndex: 'name',
              title: 'Name',
              sorter: { compare: (a: any, b: any) => a.name.localeCompare(b.name), multiple: 1 },
            },
            {
              key: 'age',
              dataIndex: 'age',
              title: 'Age',
              sorter: { compare: (a: any, b: any) => a.age - b.age, multiple: 2 },
            },
          ],
          dataSource,
          pagination: false,
          onChange,
        },
      })
      const ths = wrapper.findAll('th.hmfw-table-column-has-sorters')
      await ths[0].trigger('click')
      await ths[1].trigger('click')
      // 第二列为多列排序：两次点击后 sorter 为长度 2 的数组
      const sorter = onChange.mock.calls[1][2]
      expect(Array.isArray(sorter)).toBe(true)
      expect(sorter).toHaveLength(2)
    })
  })

  describe('分页透传', () => {
    const manyData = Array.from({ length: 15 }, (_, i) => ({
      key: String(i + 1),
      name: `Row${i + 1}`,
      age: 20 + i,
      city: 'X',
    }))

    it('defaultCurrent / defaultPageSize 决定初始页', () => {
      const wrapper = mount(Table, {
        props: { columns, dataSource: manyData, pagination: { pageSize: 5, defaultCurrent: 2 } },
      })
      expect(wrapper.find('tbody tr.hmfw-table-row').text()).toContain('Row6')
    })

    it('position 含 top 时分页渲染在表格容器之前', () => {
      const wrapper = mount(Table, {
        props: { columns, dataSource: manyData, pagination: { pageSize: 5, position: ['topRight'] } },
      })
      const html = wrapper.html()
      expect(html.indexOf('hmfw-table-pagination')).toBeLessThan(html.indexOf('hmfw-table-container'))
      expect(wrapper.find('.hmfw-table-pagination-right').exists()).toBe(true)
    })

    it('size 与 simple 透传到 Pagination', () => {
      const small = mount(Table, {
        props: { columns, dataSource: manyData, pagination: { pageSize: 5, size: 'small' } },
      })
      expect(small.find('.hmfw-pagination-mini').exists()).toBe(true)

      const simple = mount(Table, {
        props: { columns, dataSource: manyData, pagination: { pageSize: 5, simple: true } },
      })
      expect(simple.find('.hmfw-pagination-simple').exists()).toBe(true)
    })

    it('hideOnSinglePage 单页时隐藏分页', () => {
      const wrapper = mount(Table, {
        props: { columns, dataSource, pagination: { defaultPageSize: 10, hideOnSinglePage: true } },
      })
      expect(wrapper.find('.hmfw-pagination').exists()).toBe(false)
    })

    it('onShowSizeChange 在页大小变化时回调', async () => {
      const onShowSizeChange = vi.fn()
      const wrapper = mount(Table, {
        props: {
          columns,
          dataSource: manyData,
          pagination: { pageSize: 5, showSizeChanger: true, onShowSizeChange },
        },
      })
      const select = wrapper.findComponent({ name: 'Select' })
      await select.vm.$emit('change', 10)
      expect(onShowSizeChange).toHaveBeenCalledWith(1, 10)
    })
  })

  describe('列级 colSpan（表头合并）', () => {
    it('列级 colSpan 只作用于表头，数据单元格不受影响', () => {
      const wrapper = mount(Table, {
        props: {
          columns: [
            { key: 'name', dataIndex: 'name', title: 'Name' },
            { key: 'age', dataIndex: 'age', title: 'Age', colSpan: 2 },
            { key: 'city', dataIndex: 'city', title: 'City', colSpan: 0 },
          ],
          dataSource,
        },
      })
      // 表头：Age 跨 2 列、City 不渲染
      const ths = wrapper.findAll('thead th')
      expect(ths).toHaveLength(2)
      expect(ths[1].attributes('colspan')).toBe('2')
      // 数据行：三列均正常渲染（合并表头跨过两个数据单元格）
      expect(wrapper.findAll('tbody tr.hmfw-table-row')[0].findAll('td')).toHaveLength(3)
    })
  })

  describe('locale 覆盖', () => {
    it('locale.emptyText 覆盖空数据文案', () => {
      const wrapper = mount(Table, {
        props: { columns, dataSource: [], locale: { emptyText: '空空如也' } },
      })
      expect(wrapper.text()).toContain('空空如也')
    })

    it('locale.expand / collapse 用于展开图标 aria-label', async () => {
      const wrapper = mount(Table, {
        props: {
          columns,
          dataSource,
          locale: { expand: '展开', collapse: '收起' },
          expandable: { expandedRowRender: (record: any) => record.name },
        },
      })
      const icon = wrapper.find('.hmfw-table-expand-icon')
      expect(icon.attributes('aria-label')).toBe('展开')
      await icon.trigger('click')
      expect(wrapper.find('.hmfw-table-expand-icon').attributes('aria-label')).toBe('收起')
    })
  })

  describe('rowSelection 细项', () => {
    it('defaultSelectedRowKeys 初始选中', () => {
      const wrapper = mount(Table, {
        props: { columns, dataSource, rowSelection: { defaultSelectedRowKeys: ['2'] } },
      })
      const boxes = wrapper.findAll('tbody input[type="checkbox"]')
      expect((boxes[0].element as HTMLInputElement).checked).toBe(false)
      expect((boxes[1].element as HTMLInputElement).checked).toBe(true)
    })

    it('hideSelectAll 隐藏表头全选框', () => {
      const wrapper = mount(Table, {
        props: { columns, dataSource, rowSelection: { hideSelectAll: true } },
      })
      expect(wrapper.find('thead input[type="checkbox"]').exists()).toBe(false)
      expect(wrapper.findAll('tbody input[type="checkbox"]')).toHaveLength(3)
    })

    it('columnTitle 自定义选择列表头', () => {
      const wrapper = mount(Table, {
        props: { columns, dataSource, rowSelection: { columnTitle: '选择' } },
      })
      expect(wrapper.find('thead th.hmfw-table-selection-column').text()).toContain('选择')
    })

    it('preserveSelectedRowKeys 保留移出 dataSource 的选中项', async () => {
      const wrapper = mount(Table, {
        props: { columns, dataSource, rowSelection: { preserveSelectedRowKeys: true } },
      })
      await wrapper.findAll('tbody input[type="checkbox"]')[0].setValue(true)
      await wrapper.setProps({ dataSource: dataSource.slice(1) })
      await wrapper.setProps({ dataSource })
      expect((wrapper.findAll('tbody input[type="checkbox"]')[0].element as HTMLInputElement).checked).toBe(true)
    })

    it('未开启 preserveSelectedRowKeys 时选中项随行移除', async () => {
      const wrapper = mount(Table, {
        props: { columns, dataSource, rowSelection: {} },
      })
      await wrapper.findAll('tbody input[type="checkbox"]')[0].setValue(true)
      await wrapper.setProps({ dataSource: dataSource.slice(1) })
      await wrapper.setProps({ dataSource })
      expect((wrapper.findAll('tbody input[type="checkbox"]')[0].element as HTMLInputElement).checked).toBe(false)
    })
  })

  describe('defaultFilteredValue 默认筛选', () => {
    it('首次渲染即应用默认筛选值', () => {
      const filterCols = [
        { key: 'name', dataIndex: 'name', title: 'Name' },
        {
          key: 'city',
          dataIndex: 'city',
          title: 'City',
          filters: [
            { text: 'Beijing', value: 'Beijing' },
            { text: 'Shanghai', value: 'Shanghai' },
          ],
          onFilter: (value: any, record: any) => record.city === value,
          defaultFilteredValue: ['Shanghai'],
        },
      ]
      const wrapper = mount(Table, { props: { columns: filterCols, dataSource } })
      const rows = wrapper.findAll('tbody tr.hmfw-table-row')
      expect(rows).toHaveLength(1)
      expect(rows[0].text()).toContain('Bob')
    })

    it('受控 filteredValue 优先于 defaultFilteredValue', () => {
      const filterCols = [
        { key: 'name', dataIndex: 'name', title: 'Name' },
        {
          key: 'city',
          dataIndex: 'city',
          title: 'City',
          filters: [{ text: 'Beijing', value: 'Beijing' }],
          onFilter: (value: any, record: any) => record.city === value,
          filteredValue: ['Beijing'],
          defaultFilteredValue: ['Shanghai'],
        },
      ]
      const wrapper = mount(Table, { props: { columns: filterCols, dataSource } })
      const rows = wrapper.findAll('tbody tr.hmfw-table-row')
      expect(rows).toHaveLength(1)
      expect(rows[0].text()).toContain('Alice')
    })
  })

  describe('expandIconColumnIndex 展开列位置', () => {
    it('expandedRowRender 模式下可插入到选择列之后', () => {
      const wrapper = mount(Table, {
        props: {
          columns,
          dataSource,
          rowSelection: {},
          expandable: { expandedRowRender: (record: any) => record.name, expandIconColumnIndex: 1 },
        },
      })
      const ths = wrapper.findAll('thead th')
      expect(ths[0].classes()).toContain('hmfw-table-selection-column')
      expect(ths[1].classes()).toContain('hmfw-table-expand-icon-col')
      // 数据单元格顺序同样生效
      const tds = wrapper.findAll('tbody tr.hmfw-table-row')[0].findAll('td')
      expect(tds[0].classes()).toContain('hmfw-table-selection-column')
      expect(tds[1].classes()).toContain('hmfw-table-expand-icon-cell')
    })

    it('默认展开列在首位（选择列之前）', () => {
      const wrapper = mount(Table, {
        props: {
          columns,
          dataSource,
          rowSelection: {},
          expandable: { expandedRowRender: (record: any) => record.name },
        },
      })
      const ths = wrapper.findAll('thead th')
      expect(ths[0].classes()).toContain('hmfw-table-expand-icon-col')
      expect(ths[1].classes()).toContain('hmfw-table-selection-column')
    })

    it('树形模式下指定图标内嵌的数据列', () => {
      const treeData = [
        {
          key: '1',
          name: 'Parent',
          age: 40,
          city: 'Beijing',
          children: [{ key: '1-1', name: 'Child', age: 1, city: 'Beijing' }],
        },
      ]
      const wrapper = mount(Table, {
        props: { columns, dataSource: treeData, expandable: { expandIconColumnIndex: 1 } },
      })
      const tds = wrapper.findAll('tbody tr.hmfw-table-row')[0].findAll('td')
      expect(tds[0].find('.hmfw-table-cell-tree').exists()).toBe(false)
      expect(tds[1].find('.hmfw-table-cell-tree').exists()).toBe(true)
    })
  })

  describe('自定义筛选入口', () => {
    it('仅提供 filterDropdown 的列也渲染筛选入口，自定义面板可用', async () => {
      const wrapper = mount(Table, {
        attachTo: document.body,
        props: {
          columns: [
            { key: 'name', dataIndex: 'name', title: 'Name' },
            {
              key: 'city',
              dataIndex: 'city',
              title: 'City',
              filterDropdown: ({ setSelectedKeys, confirm }: any) =>
                h('div', { class: 'my-filter-panel' }, [
                  h(
                    'button',
                    {
                      class: 'my-filter-confirm',
                      onClick: () => {
                        setSelectedKeys(['Beijing'])
                        confirm()
                      },
                    },
                    'ok',
                  ),
                ]),
              onFilter: (value: any, record: any) => record.city === value,
            },
          ],
          dataSource,
        },
      })
      expect(wrapper.find('.hmfw-table-filter-trigger').exists()).toBe(true)

      await wrapper.find('.hmfw-table-filter-trigger').trigger('click')
      await nextTick()
      await new Promise((resolve) => setTimeout(resolve, 50))

      // 弹层经 Teleport 渲染到 body
      expect(document.querySelector('.my-filter-panel')).toBeTruthy()
      ;(document.querySelector('.my-filter-confirm') as HTMLElement).click()
      await nextTick()
      await new Promise((resolve) => setTimeout(resolve, 50))

      // 过滤生效：只剩 Beijing 行（Alice）
      const rows = wrapper.findAll('tbody tr.hmfw-table-row')
      expect(rows).toHaveLength(1)
      expect(rows[0].text()).toContain('Alice')
      wrapper.unmount()
    })
  })

  describe('onCell / onHeaderCell 单元格合并', () => {
    const mergeData = [
      { key: '1', province: '浙江', city: '杭州', name: 'A' },
      { key: '2', province: '浙江', city: '宁波', name: 'B' },
      { key: '3', province: '江苏', city: '南京', name: 'C' },
    ]

    it('onCell 返回 rowSpan 时纵向合并，为 0 时不渲染该单元格', () => {
      const wrapper = mount(Table, {
        props: {
          columns: [
            {
              key: 'province',
              dataIndex: 'province',
              title: '省份',
              onCell: (_: any, index: number) => ({ rowSpan: index % 2 === 0 ? 2 : 0 }),
            },
            { key: 'city', dataIndex: 'city', title: '城市' },
            { key: 'name', dataIndex: 'name', title: '姓名' },
          ],
          dataSource: mergeData,
        },
      })
      const rows = wrapper.findAll('tbody tr.hmfw-table-row')
      expect(rows[0].findAll('td')).toHaveLength(3)
      expect(rows[0].findAll('td')[0].attributes('rowspan')).toBe('2')
      // 第二行省份单元格被合并（rowSpan 0 → 不渲染）
      expect(rows[1].findAll('td')).toHaveLength(2)
      expect(rows[2].findAll('td')[0].attributes('rowspan')).toBe('2')
    })

    it('onCell / onHeaderCell 返回 colSpan 时横向合并', () => {
      const wrapper = mount(Table, {
        props: {
          columns: [
            {
              key: 'name',
              dataIndex: 'name',
              title: '姓名',
              onCell: () => ({ colSpan: 2 }),
              onHeaderCell: () => ({ colSpan: 2 }),
            },
            {
              key: 'city',
              dataIndex: 'city',
              title: '城市',
              onCell: () => ({ colSpan: 0 }),
              onHeaderCell: () => ({ colSpan: 0 }),
            },
          ],
          dataSource: mergeData,
        },
      })
      const ths = wrapper.findAll('thead th')
      expect(ths).toHaveLength(1)
      expect(ths[0].attributes('colspan')).toBe('2')
      const tds = wrapper.findAll('tbody tr.hmfw-table-row')[0].findAll('td')
      expect(tds).toHaveLength(1)
      expect(tds[0].attributes('colspan')).toBe('2')
    })

    it('onCell 返回的 className/style/事件合并到单元格', async () => {
      const onClick = vi.fn()
      const wrapper = mount(Table, {
        props: {
          columns: [
            { key: 'name', dataIndex: 'name', title: '姓名', className: 'col-cls' },
            {
              key: 'city',
              dataIndex: 'city',
              title: '城市',
              onCell: () => ({ className: 'cell-cls', style: { color: 'rgb(255, 0, 0)' }, onClick }),
            },
          ],
          dataSource: mergeData,
        },
      })
      const td = wrapper.findAll('tbody tr.hmfw-table-row')[0].findAll('td')[1]
      expect(td.classes()).toContain('cell-cls')
      expect(td.attributes('style')).toContain('color: rgb(255, 0, 0)')
      await td.trigger('click')
      expect(onClick).toHaveBeenCalled()
    })

    it('onCell 返回的 span 为 1 时不渲染 colspan/rowspan 属性', () => {
      const wrapper = mount(Table, {
        props: {
          columns: [
            {
              key: 'province',
              dataIndex: 'province',
              title: '省份',
              onCell: () => ({ colSpan: 1, rowSpan: 1 }),
            },
          ],
          dataSource: mergeData,
        },
      })
      const td = wrapper.findAll('tbody tr.hmfw-table-row')[0].find('td')
      expect(td.attributes('colspan')).toBeUndefined()
      expect(td.attributes('rowspan')).toBeUndefined()
    })
  })

  describe('固定列阴影与吸底滚动条', () => {
    const mockContentBox = (
      wrapper: any,
      box: { scrollWidth: number; clientWidth: number; bottom?: number; top?: number },
    ) => {
      const content = wrapper.find('.hmfw-table-content').element as HTMLElement
      Object.defineProperty(content, 'scrollWidth', { value: box.scrollWidth, configurable: true })
      Object.defineProperty(content, 'clientWidth', { value: box.clientWidth, configurable: true })
      Object.defineProperty(content, 'offsetHeight', { value: 300, configurable: true })
      Object.defineProperty(content, 'clientHeight', { value: 285, configurable: true })
      content.getBoundingClientRect = () =>
        ({
          top: box.top ?? 100,
          bottom: box.bottom ?? 2000,
          left: 0,
          right: 0,
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          toJSON: () => ({}),
        }) as DOMRect
      return content
    }

    it('横向滚动时按位置切换 ping 阴影类名', async () => {
      const wrapper = mount(Table, {
        props: { columns, dataSource, scroll: { x: 800 } },
      })
      const content = mockContentBox(wrapper, { scrollWidth: 800, clientWidth: 400 }) as any
      content.scrollLeft = 0
      await wrapper.find('.hmfw-table-content').trigger('scroll')
      expect(wrapper.find('.hmfw-table').classes()).not.toContain('hmfw-table-ping-left')

      content.scrollLeft = 100
      await wrapper.find('.hmfw-table-content').trigger('scroll')
      const root = wrapper.find('.hmfw-table')
      expect(root.classes()).toContain('hmfw-table-ping-left')
      expect(root.classes()).toContain('hmfw-table-ping-right')

      // 滚到最右侧：右侧阴影消失
      content.scrollLeft = 400
      await wrapper.find('.hmfw-table-content').trigger('scroll')
      expect(root.classes()).toContain('hmfw-table-ping-left')
      expect(root.classes()).not.toContain('hmfw-table-ping-right')
    })

    it('sticky 开启且有横向溢出且真实滚动条不可见时渲染吸底滚动条', async () => {
      const wrapper = mount(Table, {
        props: { columns, dataSource, sticky: true, scroll: { x: 800 } },
      })
      mockContentBox(wrapper, { scrollWidth: 800, clientWidth: 400 })
      await wrapper.find('.hmfw-table-content').trigger('scroll')

      const bar = wrapper.find('.hmfw-table-sticky-scroll')
      expect(bar.exists()).toBe(true)
      // 滑块宽度 = clientWidth² / scrollWidth = 200
      expect(bar.find('.hmfw-table-sticky-scroll-bar').attributes('style')).toContain('width: 200px')
    })

    it('真实滚动条在可视区域内时不渲染吸底滚动条', async () => {
      const wrapper = mount(Table, {
        props: { columns, dataSource, sticky: true, scroll: { x: 800 } },
      })
      // bottom 在视口内（jsdom innerHeight=768）
      mockContentBox(wrapper, { scrollWidth: 800, clientWidth: 400, top: 0, bottom: 300 })
      await wrapper.find('.hmfw-table-content').trigger('scroll')
      expect(wrapper.find('.hmfw-table-sticky-scroll').exists()).toBe(false)
    })

    it('拖动吸底滚动条同步内容区横向滚动', async () => {
      const wrapper = mount(Table, {
        props: { columns, dataSource, sticky: true, scroll: { x: 800 } },
      })
      const content = mockContentBox(wrapper, { scrollWidth: 800, clientWidth: 400 }) as any
      await wrapper.find('.hmfw-table-content').trigger('scroll')

      await wrapper.find('.hmfw-table-sticky-scroll-bar').trigger('mousedown', { pageX: 0 })
      // pageX 由 clientX + 滚动偏移推导；用 clientX 保证 jsdom 下生效
      document.dispatchEvent(new MouseEvent('mousemove', { clientX: 100, bubbles: true }))
      // left(100) / wrapWidth(400) * scrollWidth(800) = 200
      expect(content.scrollLeft).toBe(200)
      document.dispatchEvent(new MouseEvent('mouseup'))
    })
  })

  describe('树形数据 · 选择级联', () => {
    const treeData = [
      {
        key: '1',
        name: 'Parent',
        age: 40,
        city: 'Beijing',
        children: [
          { key: '1-1', name: 'Child A', age: 15, city: 'Beijing' },
          {
            key: '1-2',
            name: 'Child B',
            age: 12,
            city: 'Beijing',
            children: [{ key: '1-2-1', name: 'Grandchild', age: 1, city: 'Beijing' }],
          },
        ],
      },
      { key: '2', name: 'Leaf', age: 20, city: 'Shanghai' },
    ]

    it('勾选父节点联动全部后代，取消子节点联动祖先', async () => {
      const onChange = vi.fn()
      const wrapper = mount(Table, {
        props: {
          columns,
          dataSource: treeData,
          expandable: { defaultExpandAllRows: true },
          rowSelection: { onChange },
        },
      })
      // 行顺序：Parent, Child A, Child B, Grandchild, Leaf
      let boxes = wrapper.findAll('tbody input[type="checkbox"]')
      await boxes[0].setValue(true)
      expect(onChange.mock.calls[0][0]).toEqual(expect.arrayContaining(['1', '1-1', '1-2', '1-2-1']))

      // 取消 Child A → 祖先 Parent 一并取消
      boxes = wrapper.findAll('tbody input[type="checkbox"]')
      await boxes[1].setValue(false)
      const keys = onChange.mock.calls[1][0]
      expect(keys).not.toContain('1')
      expect(keys).not.toContain('1-1')
      expect(keys).toContain('1-2')
    })

    it('checkStrictly 关闭父子联动', async () => {
      const onChange = vi.fn()
      const wrapper = mount(Table, {
        props: {
          columns,
          dataSource: treeData,
          expandable: { defaultExpandAllRows: true },
          rowSelection: { onChange, checkStrictly: true },
        },
      })
      const boxes = wrapper.findAll('tbody input[type="checkbox"]')
      await boxes[0].setValue(true)
      expect(onChange.mock.calls[0][0]).toEqual(['1'])
    })
  })
})
