import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { h } from 'vue'
import { Collapse, CollapsePanel } from '../index'

const items = [
  { key: '1', label: 'Panel 1', children: 'Content 1' },
  { key: '2', label: 'Panel 2', children: 'Content 2' },
  { key: '3', label: 'Panel 3', children: 'Content 3', disabled: true },
]

describe('Collapse', () => {
  describe('items mode', () => {
    it('renders all panels', () => {
      const wrapper = mount(Collapse, { props: { items } })
      expect(wrapper.findAll('.hmfw-collapse-item')).toHaveLength(3)
    })

    it('expands panel on click', async () => {
      const wrapper = mount(Collapse, { props: { items } })
      await wrapper.findAll('.hmfw-collapse-header')[0].trigger('click')
      expect(wrapper.findAll('.hmfw-collapse-item')[0].classes()).toContain('hmfw-collapse-item-active')
    })

    it('collapses open panel on click', async () => {
      const wrapper = mount(Collapse, { props: { items, defaultActiveKey: '1' } })
      await wrapper.findAll('.hmfw-collapse-header')[0].trigger('click')
      expect(wrapper.findAll('.hmfw-collapse-item')[0].classes()).not.toContain('hmfw-collapse-item-active')
    })

    it('accordion mode only opens one panel', async () => {
      const wrapper = mount(Collapse, { props: { items, accordion: true } })
      await wrapper.findAll('.hmfw-collapse-header')[0].trigger('click')
      await wrapper.findAll('.hmfw-collapse-header')[1].trigger('click')
      const activeItems = wrapper.findAll('.hmfw-collapse-item-active')
      expect(activeItems).toHaveLength(1)
      expect(activeItems[0].find('.hmfw-collapse-header-text').text()).toBe('Panel 2')
    })

    it('does not toggle disabled panel', async () => {
      const wrapper = mount(Collapse, { props: { items } })
      await wrapper.findAll('.hmfw-collapse-header')[2].trigger('click')
      expect(wrapper.findAll('.hmfw-collapse-item')[2].classes()).not.toContain('hmfw-collapse-item-active')
    })

    it('renders defaultActiveKey', () => {
      const wrapper = mount(Collapse, { props: { items, defaultActiveKey: ['1', '2'] } })
      expect(wrapper.findAll('.hmfw-collapse-item-active')).toHaveLength(2)
    })

    it('emits change event with array', async () => {
      const wrapper = mount(Collapse, { props: { items } })
      await wrapper.findAll('.hmfw-collapse-header')[0].trigger('click')
      expect(wrapper.emitted('change')).toBeTruthy()
      expect(wrapper.emitted('change')![0]).toEqual([['1']])
    })

    it('emits change event with array in accordion mode', async () => {
      const wrapper = mount(Collapse, { props: { items, accordion: true } })
      await wrapper.findAll('.hmfw-collapse-header')[0].trigger('click')
      expect(wrapper.emitted('change')).toBeTruthy()
      expect(wrapper.emitted('change')![0]).toEqual([['1']])
    })

    it('applies borderless class', () => {
      const wrapper = mount(Collapse, { props: { items, bordered: false } })
      expect(wrapper.classes()).toContain('hmfw-collapse-borderless')
    })

    it('applies ghost class', () => {
      const wrapper = mount(Collapse, { props: { items, ghost: true } })
      expect(wrapper.classes()).toContain('hmfw-collapse-ghost')
    })

    it('applies size class', () => {
      const small = mount(Collapse, { props: { items, size: 'small' } })
      expect(small.classes()).toContain('hmfw-collapse-small')
    })
  })

  describe('Panel children mode', () => {
    it('renders Panel children', () => {
      const wrapper = mount(Collapse, {
        slots: {
          default: () => [
            h(CollapsePanel, { key: '1', header: 'Header 1' }, () => 'Content 1'),
            h(CollapsePanel, { key: '2', header: 'Header 2' }, () => 'Content 2'),
          ],
        },
      })
      expect(wrapper.findAll('.hmfw-collapse-item')).toHaveLength(2)
      expect(wrapper.text()).toContain('Header 1')
      expect(wrapper.text()).toContain('Header 2')
    })

    it('toggles Panel children', async () => {
      const wrapper = mount(Collapse, {
        slots: {
          default: () => [
            h(CollapsePanel, { key: '1', header: 'Header 1' }, () => 'Content 1'),
          ],
        },
      })
      await wrapper.find('.hmfw-collapse-header').trigger('click')
      expect(wrapper.find('.hmfw-collapse-item').classes()).toContain('hmfw-collapse-item-active')
    })

    it('respects Panel disabled prop', async () => {
      const wrapper = mount(Collapse, {
        slots: {
          default: () => [
            h(CollapsePanel, { key: '1', header: 'Header 1', disabled: true }, () => 'Content 1'),
          ],
        },
      })
      await wrapper.find('.hmfw-collapse-header').trigger('click')
      expect(wrapper.find('.hmfw-collapse-item').classes()).toContain('hmfw-collapse-item-disabled')
      expect(wrapper.find('.hmfw-collapse-item').classes()).not.toContain('hmfw-collapse-item-active')
    })
  })

  describe('collapsible prop', () => {
    it('collapsible="header" allows clicking header', async () => {
      const wrapper = mount(Collapse, {
        props: { items, collapsible: 'header' },
      })
      await wrapper.findAll('.hmfw-collapse-header')[0].trigger('click')
      expect(wrapper.findAll('.hmfw-collapse-item')[0].classes()).toContain('hmfw-collapse-item-active')
    })

    it('collapsible="icon" only allows clicking icon', async () => {
      const wrapper = mount(Collapse, {
        props: { items, collapsible: 'icon' },
      })
      // Click header should not work
      await wrapper.findAll('.hmfw-collapse-header')[0].trigger('click')
      expect(wrapper.findAll('.hmfw-collapse-item')[0].classes()).not.toContain('hmfw-collapse-item-active')

      // Click icon should work
      await wrapper.findAll('.hmfw-collapse-expand-icon')[0].trigger('click')
      expect(wrapper.findAll('.hmfw-collapse-item')[0].classes()).toContain('hmfw-collapse-item-active')
    })

    it('collapsible="disabled" prevents any interaction', async () => {
      const wrapper = mount(Collapse, {
        props: { items, collapsible: 'disabled' },
      })
      await wrapper.findAll('.hmfw-collapse-header')[0].trigger('click')
      expect(wrapper.findAll('.hmfw-collapse-item')[0].classes()).not.toContain('hmfw-collapse-item-active')
      expect(wrapper.findAll('.hmfw-collapse-item')[0].classes()).toContain('hmfw-collapse-item-disabled')
    })

    it('item-level collapsible overrides parent', async () => {
      const customItems = [
        { key: '1', label: 'Panel 1', children: 'Content 1', collapsible: 'icon' as const },
      ]
      const wrapper = mount(Collapse, {
        props: { items: customItems, collapsible: 'header' },
      })
      // Header click should not work (item overrides to icon)
      await wrapper.find('.hmfw-collapse-header').trigger('click')
      expect(wrapper.find('.hmfw-collapse-item').classes()).not.toContain('hmfw-collapse-item-active')

      // Icon click should work
      await wrapper.find('.hmfw-collapse-expand-icon').trigger('click')
      expect(wrapper.find('.hmfw-collapse-item').classes()).toContain('hmfw-collapse-item-active')
    })
  })

  describe('expandIcon prop', () => {
    it('uses custom expandIcon', () => {
      const customIcon = vi.fn(() => h('span', { class: 'custom-icon' }, '→'))
      const wrapper = mount(Collapse, {
        props: { items, expandIcon: customIcon },
      })
      expect(wrapper.find('.custom-icon').exists()).toBe(true)
      expect(customIcon).toHaveBeenCalled()
    })

    it('passes isActive to expandIcon', async () => {
      const customIcon = vi.fn(({ isActive }) =>
        h('span', { class: 'custom-icon' }, isActive ? '↓' : '→'),
      )
      const wrapper = mount(Collapse, {
        props: { items, expandIcon: customIcon },
      })
      await wrapper.find('.hmfw-collapse-header').trigger('click')
      expect(customIcon).toHaveBeenCalledWith(expect.objectContaining({ isActive: true }))
    })
  })

  describe('destroyInactivePanel', () => {
    it('destroys inactive panel content', async () => {
      const wrapper = mount(Collapse, {
        props: { items, destroyInactivePanel: true },
      })
      // Initially no panels are active, so no content should be rendered
      expect(wrapper.findAll('.hmfw-collapse-content')).toHaveLength(0)

      // Open first panel
      await wrapper.findAll('.hmfw-collapse-header')[0].trigger('click')
      expect(wrapper.findAll('.hmfw-collapse-content')).toHaveLength(1)
    })

    it('forceRender keeps panel content', () => {
      const customItems = [
        { key: '1', label: 'Panel 1', children: 'Content 1', forceRender: true },
      ]
      const wrapper = mount(Collapse, {
        props: { items: customItems, destroyInactivePanel: true },
      })
      // Content should be rendered even though panel is not active
      expect(wrapper.findAll('.hmfw-collapse-content')).toHaveLength(1)
    })
  })

  describe('expandIconPosition', () => {
    it('positions icon at end', () => {
      const wrapper = mount(Collapse, {
        props: { items, expandIconPosition: 'end' },
      })
      expect(wrapper.classes()).toContain('hmfw-collapse-icon-position-end')
    })
  })

  describe('showArrow prop', () => {
    it('shows arrow by default', () => {
      const wrapper = mount(Collapse, { props: { items } })
      expect(wrapper.findAll('.hmfw-collapse-expand-icon')).toHaveLength(3)
    })

    it('hides arrow when showArrow=false on item', () => {
      const customItems = [
        { key: '1', label: 'Panel 1', children: 'Content 1', showArrow: false },
        { key: '2', label: 'Panel 2', children: 'Content 2' },
      ]
      const wrapper = mount(Collapse, { props: { items: customItems } })
      const icons = wrapper.findAll('.hmfw-collapse-expand-icon')
      expect(icons).toHaveLength(1)
      // Only second panel should have icon
      const items = wrapper.findAll('.hmfw-collapse-item')
      expect(items[0].find('.hmfw-collapse-expand-icon').exists()).toBe(false)
      expect(items[1].find('.hmfw-collapse-expand-icon').exists()).toBe(true)
    })

    it('respects showArrow on CollapsePanel', () => {
      const wrapper = mount(Collapse, {
        slots: {
          default: () => [
            h(CollapsePanel, { key: '1', header: 'Header 1', showArrow: false }, () => 'Content 1'),
            h(CollapsePanel, { key: '2', header: 'Header 2' }, () => 'Content 2'),
          ],
        },
      })
      const items = wrapper.findAll('.hmfw-collapse-item')
      expect(items[0].find('.hmfw-collapse-expand-icon').exists()).toBe(false)
      expect(items[1].find('.hmfw-collapse-expand-icon').exists()).toBe(true)
    })

    it('can still click header when showArrow=false', async () => {
      const customItems = [
        { key: '1', label: 'Panel 1', children: 'Content 1', showArrow: false },
      ]
      const wrapper = mount(Collapse, { props: { items: customItems } })
      await wrapper.find('.hmfw-collapse-header').trigger('click')
      expect(wrapper.find('.hmfw-collapse-item').classes()).toContain('hmfw-collapse-item-active')
    })
  })
})

