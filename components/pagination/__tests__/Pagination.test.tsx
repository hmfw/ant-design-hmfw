import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Pagination } from '../Pagination'
import { nextTick } from 'vue'

describe('Pagination', () => {
  it('renders page buttons', () => {
    const wrapper = mount(Pagination, { props: { total: 50, pageSize: 10 } })
    expect(wrapper.findAll('.hmfw-pagination-item').length).toBe(5)
  })

  it('marks current page as active', () => {
    const wrapper = mount(Pagination, { props: { total: 50, pageSize: 10, current: 2 } })
    const items = wrapper.findAll('.hmfw-pagination-item')
    expect(items[1].classes()).toContain('hmfw-pagination-item-active')
  })

  it('emits change on page click', async () => {
    const wrapper = mount(Pagination, { props: { total: 50, pageSize: 10, current: 1 } })
    await wrapper.findAll('.hmfw-pagination-item')[2].trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
    expect(wrapper.emitted('change')![0]).toEqual([3, 10])
  })

  it('prev button disabled on first page', () => {
    const wrapper = mount(Pagination, { props: { total: 50, pageSize: 10, current: 1 } })
    expect(wrapper.find('.hmfw-pagination-prev').classes()).toContain('hmfw-pagination-disabled')
  })

  it('next button disabled on last page', () => {
    const wrapper = mount(Pagination, { props: { total: 50, pageSize: 10, current: 5 } })
    expect(wrapper.find('.hmfw-pagination-next').classes()).toContain('hmfw-pagination-disabled')
  })

  it('hides when hideOnSinglePage and only one page', () => {
    const wrapper = mount(Pagination, { props: { total: 5, pageSize: 10, hideOnSinglePage: true } })
    expect(wrapper.find('.hmfw-pagination').exists()).toBe(false)
  })

  it('supports controlled current', async () => {
    const wrapper = mount(Pagination, { props: { total: 50, pageSize: 10, current: 1 } })
    await wrapper.setProps({ current: 3 })
    const items = wrapper.findAll('.hmfw-pagination-item')
    expect(items[2].classes()).toContain('hmfw-pagination-item-active')
  })

  it('supports defaultCurrent for uncontrolled mode', () => {
    const wrapper = mount(Pagination, { props: { total: 50, pageSize: 10, defaultCurrent: 3 } })
    const items = wrapper.findAll('.hmfw-pagination-item')
    expect(items[2].classes()).toContain('hmfw-pagination-item-active')
  })

  it('supports pageSize prop', () => {
    const wrapper = mount(Pagination, { props: { total: 100, pageSize: 20 } })
    expect(wrapper.findAll('.hmfw-pagination-item').length).toBe(5)
  })

  it('supports defaultPageSize', () => {
    const wrapper = mount(Pagination, { props: { total: 100, defaultPageSize: 20 } })
    expect(wrapper.findAll('.hmfw-pagination-item').length).toBe(5)
  })

  it('renders showTotal', () => {
    const showTotal = (total: number, range: [number, number]) => `${range[0]}-${range[1]} of ${total} items`
    const wrapper = mount(Pagination, {
      props: { total: 50, pageSize: 10, current: 2, showTotal },
    })
    expect(wrapper.find('.hmfw-pagination-total-text').text()).toBe('11-20 of 50 items')
  })

  it('renders size changer when showSizeChanger is true', () => {
    const wrapper = mount(Pagination, {
      props: { total: 100, showSizeChanger: true },
    })
    expect(wrapper.find('.hmfw-pagination-options-size-changer').exists()).toBe(true)
  })

  it('emits showSizeChange when page size changes', async () => {
    const wrapper = mount(Pagination, {
      props: { total: 100, pageSize: 10, showSizeChanger: true },
    })
    const select = wrapper.findComponent({ name: 'Select' })
    await select.vm.$emit('change', 20)
    await nextTick()
    expect(wrapper.emitted('showSizeChange')).toBeTruthy()
    expect(wrapper.emitted('showSizeChange')![0]).toEqual([1, 20])
  })

  it('renders quick jumper when showQuickJumper is true', () => {
    const wrapper = mount(Pagination, {
      props: { total: 100, showQuickJumper: true },
    })
    expect(wrapper.find('.hmfw-pagination-options-quick-jumper').exists()).toBe(true)
  })

  it('jumps to page on Enter in quick jumper', async () => {
    const wrapper = mount(Pagination, {
      props: { total: 100, pageSize: 10, current: 1, showQuickJumper: true },
    })
    const input = wrapper.find('.hmfw-pagination-options-quick-jumper input')
    await input.setValue('5')
    await input.trigger('keydown', { key: 'Enter' })
    await nextTick()
    expect(wrapper.emitted('change')).toBeTruthy()
    expect(wrapper.emitted('change')![0]).toEqual([5, 10])
  })

  it('renders simple mode', () => {
    const wrapper = mount(Pagination, {
      props: { total: 50, pageSize: 10, simple: true },
    })
    expect(wrapper.find('.hmfw-pagination-simple').exists()).toBe(true)
    expect(wrapper.find('.hmfw-pagination-simple-pager').exists()).toBe(true)
  })

  it('applies small size class', () => {
    const wrapper = mount(Pagination, {
      props: { total: 50, pageSize: 10, size: 'small' },
    })
    expect(wrapper.find('.hmfw-pagination-mini').exists()).toBe(true)
  })

  it('disables all interactions when disabled', async () => {
    const wrapper = mount(Pagination, {
      props: { total: 50, pageSize: 10, current: 2, disabled: true },
    })
    await wrapper.findAll('.hmfw-pagination-item')[0].trigger('click')
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('supports align prop', () => {
    const wrapper = mount(Pagination, {
      props: { total: 50, pageSize: 10, align: 'center' },
    })
    expect(wrapper.find('.hmfw-pagination-center').exists()).toBe(true)
  })

  it('supports itemRender for custom rendering', () => {
    const itemRender = vi.fn((page, type, element) => element)
    mount(Pagination, {
      props: { total: 50, pageSize: 10, itemRender },
    })
    expect(itemRender).toHaveBeenCalled()
  })

  it('shows jump-prev and jump-next for many pages', () => {
    const wrapper = mount(Pagination, {
      props: { total: 200, pageSize: 10, current: 10 },
    })
    expect(wrapper.find('.hmfw-pagination-jump-prev').exists()).toBe(true)
    expect(wrapper.find('.hmfw-pagination-jump-next').exists()).toBe(true)
  })

  it('jumps 5 pages on jump-prev click', async () => {
    const wrapper = mount(Pagination, {
      props: { total: 200, pageSize: 10, current: 10 },
    })
    await wrapper.find('.hmfw-pagination-jump-prev').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
    expect(wrapper.emitted('change')![0]).toEqual([5, 10])
  })

  it('jumps 5 pages on jump-next click', async () => {
    const wrapper = mount(Pagination, {
      props: { total: 200, pageSize: 10, current: 10 },
    })
    await wrapper.find('.hmfw-pagination-jump-next').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
    expect(wrapper.emitted('change')![0]).toEqual([15, 10])
  })

  it('resets to page 1 when pageSize change causes current page to exceed total', async () => {
    const wrapper = mount(Pagination, {
      props: { total: 100, pageSize: 10, current: 10, showSizeChanger: true },
    })
    const select = wrapper.findComponent({ name: 'Select' })
    await select.vm.$emit('change', 50)
    await nextTick()
    expect(wrapper.emitted('update:current')).toBeTruthy()
    expect(wrapper.emitted('update:current')![0]).toEqual([1])
  })

  it('emits update:pageSize when pageSize changes', async () => {
    const wrapper = mount(Pagination, {
      props: { total: 100, pageSize: 10, showSizeChanger: true },
    })
    const select = wrapper.findComponent({ name: 'Select' })
    await select.vm.$emit('change', 20)
    await nextTick()
    expect(wrapper.emitted('update:pageSize')).toBeTruthy()
    expect(wrapper.emitted('update:pageSize')![0]).toEqual([20])
  })
})
