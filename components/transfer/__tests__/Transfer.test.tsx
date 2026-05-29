import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Transfer } from '../Transfer'
import type { TransferItem } from '../types'

const dataSource: TransferItem[] = [
  { key: '1', title: 'Item 1' },
  { key: '2', title: 'Item 2' },
  { key: '3', title: 'Item 3', disabled: true },
  { key: '4', title: 'Item 4' },
]

describe('Transfer', () => {
  it('renders two lists', () => {
    const wrapper = mount(Transfer, { props: { dataSource } })
    expect(wrapper.findAll('.hmfw-transfer-list').length).toBe(2)
  })

  it('shows source items in left list', () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, targetKeys: ['1'] },
    })
    const items = wrapper.findAll('.hmfw-transfer-list')[0].findAll('.hmfw-transfer-list-content-item')
    expect(items.length).toBe(3) // 2, 3, 4
  })

  it('shows target items in right list', () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, targetKeys: ['1', '2'] },
    })
    const items = wrapper.findAll('.hmfw-transfer-list')[1].findAll('.hmfw-transfer-list-content-item')
    expect(items.length).toBe(2)
  })

  it('moves selected items to right on > click', async () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, defaultSelectedKeys: ['2'] },
    })
    await wrapper.findAll('.hmfw-transfer-operation button')[0].trigger('click')
    expect(wrapper.emitted('change')?.[0]?.[0]).toContain('2')
  })

  it('moves selected items to left on < click', async () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, defaultTargetKeys: ['1'], defaultSelectedKeys: ['1'] },
    })
    await wrapper.findAll('.hmfw-transfer-operation button')[1].trigger('click')
    expect(wrapper.emitted('change')?.[0]?.[0]).toEqual([])
  })

  it('selects item on click', async () => {
    const wrapper = mount(Transfer, { props: { dataSource } })
    await wrapper.findAll('.hmfw-transfer-list-content-item')[0].trigger('click')
    expect(wrapper.emitted('selectChange')).toBeTruthy()
  })

  it('does not select disabled items', async () => {
    const wrapper = mount(Transfer, { props: { dataSource } })
    // item 3 is disabled (index 2)
    await wrapper.findAll('.hmfw-transfer-list-content-item')[2].trigger('click')
    expect(wrapper.emitted('selectChange')).toBeFalsy()
  })

  it('shows search input when showSearch=true', () => {
    const wrapper = mount(Transfer, { props: { dataSource, showSearch: true } })
    expect(wrapper.findAll('.hmfw-transfer-list-search').length).toBe(2)
  })

  it('filters items by search', async () => {
    const wrapper = mount(Transfer, { props: { dataSource, showSearch: true } })
    const input = wrapper.findAll('.hmfw-transfer-list-search-input')[0]
    await input.setValue('Item 1')
    await input.trigger('input')
    const items = wrapper.findAll('.hmfw-transfer-list')[0].findAll('.hmfw-transfer-list-content-item')
    expect(items.length).toBe(1)
  })

  it('applies disabled class when disabled', () => {
    const wrapper = mount(Transfer, { props: { dataSource, disabled: true } })
    expect(wrapper.find('.hmfw-transfer-disabled').exists()).toBe(true)
  })
})
