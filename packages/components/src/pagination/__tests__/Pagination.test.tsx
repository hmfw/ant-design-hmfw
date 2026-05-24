import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Pagination } from '../Pagination'

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
    expect(wrapper.emitted('change')![0][0]).toBe(3)
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
})
