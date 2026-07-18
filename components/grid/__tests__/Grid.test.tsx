import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import Row from '../Row'
import Col from '../Col'
import { h } from 'vue'

// Mock matchMedia
beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
})

describe('Grid', () => {
  describe('Row', () => {
    it('renders correctly', () => {
      const wrapper = mount(Row)
      expect(wrapper.exists()).toBe(true)
      expect(wrapper.classes()).toContain('hmfw-row')
    })

    it('handles gutter', () => {
      const wrapper = mount(Row, {
        props: { gutter: 16 },
      })
      const style = wrapper.attributes('style')
      expect(style).toContain('margin-inline: -8px')
    })

    it('handles vertical gutter', () => {
      const wrapper = mount(Row, {
        props: { gutter: [16, 8] },
      })
      expect(wrapper.attributes('style')).toContain('row-gap: 8px')
    })

    it('handles string gutter', () => {
      const wrapper = mount(Row, {
        props: { gutter: '20px' },
      })
      const style = wrapper.attributes('style')
      // jsdom 会将 calc(20px / -2) 归一化为等价的 calc(-10px)
      expect(style).toContain('margin-inline: calc(-10px)')
    })

    it('handles align', () => {
      const aligns = ['top', 'middle', 'bottom', 'stretch'] as const
      aligns.forEach((align) => {
        const wrapper = mount(Row, {
          props: { align },
        })
        expect(wrapper.classes()).toContain(`hmfw-row-${align}`)
      })
    })

    it('handles justify', () => {
      const justifies = ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'] as const
      justifies.forEach((justify) => {
        const wrapper = mount(Row, {
          props: { justify },
        })
        expect(wrapper.classes()).toContain(`hmfw-row-${justify}`)
      })
    })

    it('handles wrap', () => {
      const wrapper = mount(Row, {
        props: { wrap: false },
      })
      expect(wrapper.classes()).toContain('hmfw-row-no-wrap')
    })
  })

  describe('Col', () => {
    it('renders correctly', () => {
      const wrapper = mount(Col)
      expect(wrapper.exists()).toBe(true)
      expect(wrapper.classes()).toContain('hmfw-col')
    })

    it('handles span', () => {
      const wrapper = mount(Col, {
        props: { span: 12 },
      })
      expect(wrapper.classes()).toContain('hmfw-col-12')
    })

    it('handles span 0 (hidden)', () => {
      const wrapper = mount(Col, {
        props: { span: 0 },
      })
      expect(wrapper.classes()).toContain('hmfw-col-0')
    })

    it('handles offset', () => {
      const wrapper = mount(Col, {
        props: { offset: 4 },
      })
      expect(wrapper.classes()).toContain('hmfw-col-offset-4')
    })

    it('handles order', () => {
      const wrapper = mount(Col, {
        props: { order: 2 },
      })
      expect(wrapper.classes()).toContain('hmfw-col-order-2')
    })

    it('handles pull', () => {
      const wrapper = mount(Col, {
        props: { pull: 2 },
      })
      expect(wrapper.classes()).toContain('hmfw-col-pull-2')
    })

    it('handles push', () => {
      const wrapper = mount(Col, {
        props: { push: 2 },
      })
      expect(wrapper.classes()).toContain('hmfw-col-push-2')
    })

    it('handles flex prop - number', () => {
      const wrapper = mount(Col, {
        props: { flex: 2 },
      })
      expect(wrapper.attributes('style')).toContain('flex: 2 2 auto')
    })

    it('handles flex prop - auto', () => {
      const wrapper = mount(Col, {
        props: { flex: 'auto' },
      })
      expect(wrapper.attributes('style')).toContain('flex: 1 1 auto')
    })

    it('handles flex prop - px value', () => {
      const wrapper = mount(Col, {
        props: { flex: '200px' },
      })
      expect(wrapper.attributes('style')).toContain('flex: 0 0 200px')
    })

    it('handles responsive props - number', () => {
      const wrapper = mount(Col, {
        props: { xs: 24, sm: 12, md: 8 },
      })
      expect(wrapper.classes()).toContain('hmfw-col-xs-24')
      expect(wrapper.classes()).toContain('hmfw-col-sm-12')
      expect(wrapper.classes()).toContain('hmfw-col-md-8')
    })

    it('handles responsive props - object', () => {
      const wrapper = mount(Col, {
        props: {
          xs: { span: 24 },
          sm: { span: 12, offset: 2 },
        },
      })
      expect(wrapper.classes()).toContain('hmfw-col-xs-24')
      expect(wrapper.classes()).toContain('hmfw-col-sm-12')
      expect(wrapper.classes()).toContain('hmfw-col-sm-offset-2')
    })

    it('receives gutter from Row', () => {
      const wrapper = mount(Row, {
        props: { gutter: 16 },
        slots: {
          default: () => h(Col, { span: 12 }, () => 'Content'),
        },
      })
      const col = wrapper.findComponent(Col)
      const style = col.attributes('style')
      expect(style).toContain('padding-inline: 8px')
    })

    it('applies minWidth when wrap is false and flex is set', () => {
      const wrapper = mount(Row, {
        props: { wrap: false },
        slots: {
          default: () => h(Col, { flex: 'auto' }, () => 'Content'),
        },
      })
      const col = wrapper.findComponent(Col)
      const style = col.attributes('style')
      expect(style).toContain('min-width: 0')
    })

    // ==================== 扩展场景 ====================

    it('handles flex=none as string pass-through', () => {
      const wrapper = mount(Col, {
        props: { flex: 'none' },
      })
      // 浏览器将 flex: none 标准化为 flex: 0 0 auto（CSS 规范中等价）
      expect(wrapper.attributes('style')).toContain('flex: 0 0 auto')
    })

    it('responsive offset=0 allows reset at breakpoint', () => {
      const wrapper = mount(Col, {
        props: {
          xs: { span: 24, offset: 4 },
          sm: { span: 12, offset: 0 },
        },
      })
      expect(wrapper.classes()).toContain('hmfw-col-xs-offset-4')
      expect(wrapper.classes()).toContain('hmfw-col-sm-offset-0')
    })

    it('responsive order=0 allows reset at breakpoint', () => {
      const wrapper = mount(Col, {
        props: {
          xs: { span: 24, order: 2 },
          sm: { span: 12, order: 0 },
        },
      })
      expect(wrapper.classes()).toContain('hmfw-col-xs-order-2')
      expect(wrapper.classes()).toContain('hmfw-col-sm-order-0')
    })

    it('responsive pull=0 allows reset at breakpoint', () => {
      const wrapper = mount(Col, {
        props: {
          xs: { span: 24, pull: 2 },
          sm: { span: 12, pull: 0 },
        },
      })
      expect(wrapper.classes()).toContain('hmfw-col-xs-pull-2')
      expect(wrapper.classes()).toContain('hmfw-col-sm-pull-0')
    })

    it('responsive push=0 allows reset at breakpoint', () => {
      const wrapper = mount(Col, {
        props: {
          xs: { span: 24, push: 2 },
          sm: { span: 12, push: 0 },
        },
      })
      expect(wrapper.classes()).toContain('hmfw-col-xs-push-2')
      expect(wrapper.classes()).toContain('hmfw-col-sm-push-0')
    })

    it('Col standalone without Row context renders correctly', () => {
      const wrapper = mount(Col, {
        props: { span: 12 },
      })
      expect(wrapper.exists()).toBe(true)
      expect(wrapper.classes()).toContain('hmfw-col-12')
    })
  })

  describe('Row responsive', () => {
    it('accepts responsive object align', () => {
      const wrapper = mount(Row, {
        props: { align: { xs: 'top', sm: 'middle' } },
      })
      // responsive object should not crash; rendered class depends on screen
      expect(wrapper.classes()).toContain('hmfw-row')
    })

    it('accepts responsive object justify', () => {
      const wrapper = mount(Row, {
        props: { justify: { xs: 'start', sm: 'center' } },
      })
      expect(wrapper.classes()).toContain('hmfw-row')
    })

    it('accepts responsive object gutter', () => {
      const wrapper = mount(Row, {
        props: { gutter: { xs: 8, sm: 16 } },
      })
      expect(wrapper.classes()).toContain('hmfw-row')
    })
  })
})
