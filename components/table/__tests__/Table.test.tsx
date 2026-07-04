import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
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

    // 点击「确定」
    const confirmBtn = Array.from(dropdown.querySelectorAll('.hmfw-table-dropdown-btns .hmfw-btn')).find((btn) =>
      btn.textContent?.includes('确定'),
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
})
