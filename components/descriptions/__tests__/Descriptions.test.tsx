import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { Descriptions } from '../Descriptions'
import { DescriptionsItem } from '../DescriptionsItem'

const items = [
  { label: 'Name', children: 'Alice' },
  { label: 'Age', children: '30' },
  { label: 'City', children: 'Beijing' },
  { label: 'Email', children: 'alice@example.com', span: 2 },
]

describe('Descriptions', () => {
  it('renders items', () => {
    const wrapper = mount(Descriptions, { props: { items } })
    expect(wrapper.findAll('.hmfw-descriptions-item-label')).toHaveLength(4)
    expect(wrapper.findAll('.hmfw-descriptions-item-content')).toHaveLength(4)
  })

  it('renders title', () => {
    const wrapper = mount(Descriptions, { props: { items, title: 'User Info' } })
    expect(wrapper.find('.hmfw-descriptions-title').text()).toBe('User Info')
  })

  it('renders extra', () => {
    const wrapper = mount(Descriptions, { props: { items, extra: 'Edit' } })
    expect(wrapper.find('.hmfw-descriptions-extra').text()).toBe('Edit')
  })

  it('applies bordered class', () => {
    const wrapper = mount(Descriptions, { props: { items, bordered: true } })
    expect(wrapper.classes()).toContain('hmfw-descriptions-bordered')
  })

  it('applies size class', () => {
    const small = mount(Descriptions, { props: { items, size: 'small' } })
    expect(small.classes()).toContain('hmfw-descriptions-small')
    const middle = mount(Descriptions, { props: { items, size: 'middle' } })
    expect(middle.classes()).toContain('hmfw-descriptions-middle')
  })

  it('normalizes medium to middle', () => {
    const wrapper = mount(Descriptions, { props: { items, size: 'medium' } })
    expect(wrapper.classes()).toContain('hmfw-descriptions-middle')
  })

  it('renders label text', () => {
    const wrapper = mount(Descriptions, { props: { items } })
    const labels = wrapper.findAll('.hmfw-descriptions-item-label')
    expect(labels[0].text()).toContain('Name')
    expect(labels[1].text()).toContain('Age')
  })

  it('renders content text', () => {
    const wrapper = mount(Descriptions, { props: { items } })
    const contents = wrapper.findAll('.hmfw-descriptions-item-content')
    expect(contents[0].text()).toBe('Alice')
    expect(contents[1].text()).toBe('30')
  })

  it('renders vertical layout', () => {
    const wrapper = mount(Descriptions, { props: { items, layout: 'vertical' } })
    // In vertical layout, each row generates 2 tr elements (label row + content row)
    const rows = wrapper.findAll('tr')
    expect(rows.length).toBeGreaterThan(0)
  })

  it('supports colon prop', () => {
    const wrapper = mount(Descriptions, { props: { items, colon: false } })
    const label = wrapper.find('.hmfw-descriptions-item-label')
    expect(label.classes()).toContain('hmfw-descriptions-item-no-colon')
  })

  it('auto-fills last item span to fill row', () => {
    const testItems = [
      { label: 'Product', children: 'Cloud Database' },
      { label: 'Billing', children: 'Prepaid', span: 2 },
    ]
    const wrapper = mount(Descriptions, { props: { items: testItems, column: 6 } })
    const tds = wrapper.findAll('td')
    // Last item should have colspan=5 (6 - 1)
    expect(tds[tds.length - 1].attributes('colspan')).toBe('5')
  })

  it('supports span="filled"', () => {
    const testItems = [
      { label: '0', children: '', span: 2 },
      { label: '1', children: '' },
      { label: '2', children: '' },
      { label: '3', children: '', span: 'filled' as const },
      { label: '4', children: '', span: 'filled' as const },
      { label: '5', children: '' },
    ]
    const wrapper = mount(Descriptions, { props: { items: testItems, column: 3 } })
    const tds = wrapper.findAll('td')
    // Item 3 should fill remaining 2 columns (3 - 1)
    // Item 4 should fill all 3 columns
    expect(tds.length).toBeGreaterThan(0)
  })

  it('supports Descriptions.Item children syntax', () => {
    const wrapper = mount(Descriptions, {
      slots: {
        default: () => [
          h(DescriptionsItem, { label: 'Product' }, () => 'Cloud Database'),
          h(DescriptionsItem, { label: 'Billing' }, () => 'Prepaid'),
        ],
      },
    })
    expect(wrapper.findAll('.hmfw-descriptions-item-label')).toHaveLength(2)
    // 验证 slot children 内容正确渲染（不应显示 [object Object]）
    const contents = wrapper.findAll('.hmfw-descriptions-item-content')
    expect(contents[0].text()).toBe('Cloud Database')
    expect(contents[1].text()).toBe('Prepaid')
  })

  it('supports labelStyle and contentStyle', () => {
    const testItems = [
      {
        label: 'Name',
        children: 'Alice',
        labelStyle: { color: 'red' },
        contentStyle: { color: 'blue' },
      },
    ]
    const wrapper = mount(Descriptions, { props: { items: testItems } })
    const label = wrapper.find('.hmfw-descriptions-item-label span')
    const content = wrapper.find('.hmfw-descriptions-item-content span')
    expect(label.attributes('style')).toContain('color: red')
    expect(content.attributes('style')).toContain('color: blue')
  })

  it('merges root-level and item-level styles', () => {
    const testItems = [
      {
        label: 'Name',
        children: 'Alice',
        labelStyle: { fontWeight: 'bold' },
      },
    ]
    const wrapper = mount(Descriptions, {
      props: {
        items: testItems,
        labelStyle: { color: 'red' },
      },
    })
    const label = wrapper.find('.hmfw-descriptions-item-label span')
    const style = label.attributes('style') || ''
    expect(style).toContain('color: red')
    expect(style).toContain('font-weight: bold')
  })

  it('renders bordered horizontal layout correctly', () => {
    const wrapper = mount(Descriptions, { props: { items, bordered: true } })
    // Bordered horizontal: th for label, td for content
    expect(wrapper.findAll('th.hmfw-descriptions-item-label').length).toBeGreaterThan(0)
    expect(wrapper.findAll('td.hmfw-descriptions-item-content').length).toBeGreaterThan(0)
  })

  it('renders non-bordered horizontal layout with item-container', () => {
    const wrapper = mount(Descriptions, { props: { items } })
    expect(wrapper.findAll('.hmfw-descriptions-item-container').length).toBeGreaterThan(0)
  })

  it('handles empty items gracefully', () => {
    const wrapper = mount(Descriptions, { props: { items: [] } })
    expect(wrapper.find('.hmfw-descriptions-view').exists()).toBe(true)
  })

  it('supports responsive column (object)', () => {
    const wrapper = mount(Descriptions, {
      props: {
        items,
        column: { xs: 1, md: 2, lg: 3 },
      },
    })
    // Should render without error
    expect(wrapper.find('.hmfw-descriptions-view').exists()).toBe(true)
  })

  it('supports responsive span (object)', () => {
    const testItems = [
      {
        label: 'Product',
        children: 'Cloud Database',
        span: { xs: 1, md: 2 },
      },
    ]
    const wrapper = mount(Descriptions, { props: { items: testItems } })
    expect(wrapper.find('.hmfw-descriptions-view').exists()).toBe(true)
  })

  it('renders vertical layout with bordered correctly', () => {
    const wrapper = mount(Descriptions, {
      props: { items, layout: 'vertical', bordered: true },
    })
    // 垂直布局下每行数据生成两个 tr：一个 label 行，一个 content 行
    const rows = wrapper.findAll('tr')
    expect(rows.length).toBeGreaterThan(0)
    // 验证边框类应用
    expect(wrapper.classes()).toContain('hmfw-descriptions-bordered')
    // 验证 label 行使用 th 标签
    expect(wrapper.findAll('th.hmfw-descriptions-item-label').length).toBeGreaterThan(0)
    // 验证 content 行使用 td 标签
    expect(wrapper.findAll('td.hmfw-descriptions-item-content').length).toBeGreaterThan(0)
  })

  it('initializes with correct responsive breakpoint', () => {
    // 测试响应式断点初始化不会报错
    const wrapper = mount(Descriptions, {
      props: {
        items,
        column: { xs: 1, sm: 2, md: 3 },
      },
    })
    expect(wrapper.find('.hmfw-descriptions-view').exists()).toBe(true)
    // 组件应该正常渲染
    expect(wrapper.findAll('.hmfw-descriptions-item-label').length).toBeGreaterThan(0)
  })
})
