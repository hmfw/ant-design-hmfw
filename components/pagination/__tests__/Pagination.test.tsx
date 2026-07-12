import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { Pagination } from '../Pagination'
import { h, nextTick } from 'vue'

// 默认所有断点均不匹配；responsive 用例可通过 matchedQueries 指定命中的媒体查询。
function mockMatchMedia(matchedQueries: string[] = []) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: matchedQueries.includes(query),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
}

describe('Pagination', () => {
  beforeEach(() => {
    mockMatchMedia()
  })

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

  it('renders active page from initial current prop', () => {
    const wrapper = mount(Pagination, { props: { total: 50, pageSize: 10, current: 3 } })
    const items = wrapper.findAll('.hmfw-pagination-item')
    expect(items[2].classes()).toContain('hmfw-pagination-item-active')
  })

  it('computes page count from pageSize prop', () => {
    const wrapper = mount(Pagination, { props: { total: 100, pageSize: 20 } })
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

  it('renders double-arrow icon and ellipsis inside jump buttons', () => {
    const wrapper = mount(Pagination, {
      props: { total: 200, pageSize: 10, current: 10 },
    })
    // 每个 jump 按钮内部同时含图标（hover 显示）与省略号（默认显示），叠放后通过 opacity 切换
    const jumpPrev = wrapper.find('.hmfw-pagination-jump-prev')
    expect(jumpPrev.find('.hmfw-pagination-item-link-icon').exists()).toBe(true)
    expect(jumpPrev.find('.hmfw-pagination-item-ellipsis').text()).toBe('•••')
    const jumpNext = wrapper.find('.hmfw-pagination-jump-next')
    expect(jumpNext.find('.hmfw-pagination-item-link-icon').exists()).toBe(true)
    expect(jumpNext.find('.hmfw-pagination-item-ellipsis').text()).toBe('•••')
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

  describe('responsive', () => {
    it('auto shrinks to small size at xs breakpoint when responsive is set', async () => {
      mockMatchMedia(['(max-width: 575px)'])
      const wrapper = mount(Pagination, {
        props: { total: 50, pageSize: 10, responsive: true },
      })
      await nextTick()
      expect(wrapper.find('.hmfw-pagination-mini').exists()).toBe(true)
    })

    it('does not shrink at xs breakpoint without responsive', async () => {
      mockMatchMedia(['(max-width: 575px)'])
      const wrapper = mount(Pagination, {
        props: { total: 50, pageSize: 10 },
      })
      await nextTick()
      expect(wrapper.find('.hmfw-pagination-mini').exists()).toBe(false)
    })

    it('does not shrink when responsive but not at xs breakpoint', async () => {
      mockMatchMedia(['(min-width: 768px)'])
      const wrapper = mount(Pagination, {
        props: { total: 50, pageSize: 10, responsive: true },
      })
      await nextTick()
      expect(wrapper.find('.hmfw-pagination-mini').exists()).toBe(false)
    })

    it('explicit size takes precedence over responsive', async () => {
      // xs 命中但显式 size='middle'，responsive 不应生效
      mockMatchMedia(['(max-width: 575px)'])
      const wrapper = mount(Pagination, {
        props: { total: 50, pageSize: 10, responsive: true, size: 'middle' },
      })
      await nextTick()
      expect(wrapper.find('.hmfw-pagination-mini').exists()).toBe(false)
    })
  })

  describe('semantic API (classNames / styles)', () => {
    it('applies classNames to each node', () => {
      const wrapper = mount(Pagination, {
        props: {
          total: 200,
          pageSize: 10,
          current: 10,
          showTotal: (t: number) => `共 ${t} 条`,
          showSizeChanger: true,
          showQuickJumper: true,
          classNames: {
            root: 'my-root',
            total: 'my-total',
            prev: 'my-prev',
            next: 'my-next',
            item: 'my-item',
            itemActive: 'my-item-active',
            jumpPrev: 'my-jump-prev',
            jumpNext: 'my-jump-next',
            options: 'my-options',
            sizeChanger: 'my-size-changer',
            quickJumper: 'my-quick-jumper',
          },
        },
      })
      expect(wrapper.find('.hmfw-pagination').classes()).toContain('my-root')
      expect(wrapper.find('.hmfw-pagination-total-text').classes()).toContain('my-total')
      expect(wrapper.find('.hmfw-pagination-prev').classes()).toContain('my-prev')
      expect(wrapper.find('.hmfw-pagination-next').classes()).toContain('my-next')
      expect(wrapper.find('.hmfw-pagination-item').classes()).toContain('my-item')
      expect(wrapper.find('.hmfw-pagination-item-active').classes()).toContain('my-item-active')
      expect(wrapper.find('.hmfw-pagination-jump-prev').classes()).toContain('my-jump-prev')
      expect(wrapper.find('.hmfw-pagination-jump-next').classes()).toContain('my-jump-next')
      expect(wrapper.find('.hmfw-pagination-options').classes()).toContain('my-options')
      expect(wrapper.find('.hmfw-pagination-options-size-changer').classes()).toContain('my-size-changer')
      expect(wrapper.find('.hmfw-pagination-options-quick-jumper').classes()).toContain('my-quick-jumper')
    })

    it('applies styles to each node', () => {
      const wrapper = mount(Pagination, {
        props: {
          total: 50,
          pageSize: 10,
          current: 2,
          showTotal: (t: number) => `共 ${t} 条`,
          styles: {
            root: { color: 'rgb(255, 0, 0)' },
            total: { color: 'rgb(0, 128, 0)' },
            prev: { color: 'rgb(0, 0, 255)' },
            next: { color: 'rgb(128, 0, 128)' },
            item: { margin: '4px' },
            itemActive: { fontWeight: 'bold' },
          },
        },
      })
      expect(wrapper.find('.hmfw-pagination').attributes('style')).toContain('color: rgb(255, 0, 0)')
      expect(wrapper.find('.hmfw-pagination-total-text').attributes('style')).toContain('color: rgb(0, 128, 0)')
      expect(wrapper.find('.hmfw-pagination-prev').attributes('style')).toContain('color: rgb(0, 0, 255)')
      expect(wrapper.find('.hmfw-pagination-next').attributes('style')).toContain('color: rgb(128, 0, 128)')
      // 普通 item 有 item 样式
      expect(wrapper.find('.hmfw-pagination-item').attributes('style')).toContain('margin: 4px')
      // 激活 item 同时合并 item 与 itemActive 样式
      const activeStyle = wrapper.find('.hmfw-pagination-item-active').attributes('style')
      expect(activeStyle).toContain('margin: 4px')
      expect(activeStyle).toContain('font-weight: bold')
    })
  })

  describe('edge cases', () => {
    it('renders no page items when total is 0', () => {
      const wrapper = mount(Pagination, { props: { total: 0, pageSize: 10 } })
      expect(wrapper.findAll('.hmfw-pagination-item').length).toBe(0)
      // prev / next 均禁用
      expect(wrapper.find('.hmfw-pagination-prev').classes()).toContain('hmfw-pagination-disabled')
      expect(wrapper.find('.hmfw-pagination-next').classes()).toContain('hmfw-pagination-disabled')
    })

    it('passes [0, 0] range to showTotal when total is 0', () => {
      const showTotal = (total: number, range: [number, number]) => `${range[0]}-${range[1]} / ${total}`
      const wrapper = mount(Pagination, { props: { total: 0, pageSize: 10, showTotal } })
      expect(wrapper.find('.hmfw-pagination-total-text').text()).toBe('0-0 / 0')
    })

    it('guards against division by zero when pageSize is 0', () => {
      // pageSize 为 0 时应被兜底为 1，total=5 => 5 页，而非 Infinity/NaN
      const wrapper = mount(Pagination, { props: { total: 5, pageSize: 0 } })
      expect(wrapper.findAll('.hmfw-pagination-item').length).toBe(5)
    })

    it('does not emit change when clicking prev on first page', async () => {
      const wrapper = mount(Pagination, { props: { total: 50, pageSize: 10, current: 1 } })
      await wrapper.find('.hmfw-pagination-prev').trigger('click')
      expect(wrapper.emitted('change')).toBeFalsy()
    })

    it('does not emit change when clicking next on last page', async () => {
      const wrapper = mount(Pagination, { props: { total: 50, pageSize: 10, current: 5 } })
      await wrapper.find('.hmfw-pagination-next').trigger('click')
      expect(wrapper.emitted('change')).toBeFalsy()
    })

    it('ignores out-of-range value in quick jumper', async () => {
      const wrapper = mount(Pagination, {
        props: { total: 100, pageSize: 10, current: 1, showQuickJumper: true },
      })
      const input = wrapper.find('.hmfw-pagination-options-quick-jumper input')
      await input.setValue('999')
      await input.trigger('keydown', { key: 'Enter' })
      await nextTick()
      expect(wrapper.emitted('change')).toBeFalsy()
      // 输入框在处理后应被清空
      expect((input.element as HTMLInputElement).value).toBe('')
    })

    it('ignores non-numeric value in quick jumper', async () => {
      const wrapper = mount(Pagination, {
        props: { total: 100, pageSize: 10, current: 1, showQuickJumper: true },
      })
      const input = wrapper.find('.hmfw-pagination-options-quick-jumper input')
      await input.setValue('abc')
      await input.trigger('keydown', { key: 'Enter' })
      await nextTick()
      expect(wrapper.emitted('change')).toBeFalsy()
    })
  })

  describe('itemRender / pageSizeOptions assertions', () => {
    it('renders custom element returned by itemRender into the DOM', () => {
      const wrapper = mount(Pagination, {
        props: {
          total: 50,
          pageSize: 10,
          itemRender: (page: number, type: string, element: any) => {
            if (type === 'prev') return h('span', { class: 'custom-prev' }, '上一页')
            if (type === 'next') return h('span', { class: 'custom-next' }, '下一页')
            return element
          },
        },
      })
      expect(wrapper.find('.custom-prev').exists()).toBe(true)
      expect(wrapper.find('.custom-prev').text()).toBe('上一页')
      expect(wrapper.find('.custom-next').exists()).toBe(true)
    })

    it('renders custom pageSizeOptions in the size changer', async () => {
      const wrapper = mount(Pagination, {
        props: {
          total: 100,
          pageSize: 15,
          showSizeChanger: true,
          pageSizeOptions: [15, 30, 45],
        },
      })
      const select = wrapper.findComponent({ name: 'Select' })
      // options 数量应与自定义数组一致
      expect((select.props('options') as unknown[]).length).toBe(3)
      expect(select.props('options')).toEqual([
        { value: 15, label: '15 条/页' },
        { value: 30, label: '30 条/页' },
        { value: 45, label: '45 条/页' },
      ])
    })
  })
})
