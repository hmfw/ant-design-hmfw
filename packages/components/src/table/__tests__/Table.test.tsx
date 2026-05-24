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
    const manyData = Array.from({ length: 15 }, (_, i) => ({ key: String(i), name: `User ${i}`, age: 20 + i, city: 'City' }))
    const wrapper = mount(Table, { props: { columns, dataSource: manyData, pagination: { pageSize: 10 } } })
    expect(wrapper.find('.hmfw-table-pagination').exists()).toBe(true)
  })

  it('hides pagination when pagination=false', () => {
    const wrapper = mount(Table, { props: { columns, dataSource, pagination: false } })
    expect(wrapper.find('.hmfw-table-pagination').exists()).toBe(false)
  })
})
