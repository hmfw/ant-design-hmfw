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
      expect(style).toContain('margin-inline: calc(20px / -2)')
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
  })
})
