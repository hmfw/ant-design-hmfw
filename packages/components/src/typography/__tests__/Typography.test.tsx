import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Text from '../Text'
import Title from '../Title'
import Paragraph from '../Paragraph'

describe('Typography', () => {
  describe('Text', () => {
    it('renders correctly', () => {
      const wrapper = mount(Text, {
        slots: { default: () => 'Hello' },
      })
      expect(wrapper.text()).toBe('Hello')
      expect(wrapper.classes()).toContain('hmfw-typography')
    })

    it('handles type prop', () => {
      const types = ['secondary', 'success', 'warning', 'danger'] as const
      types.forEach((type) => {
        const wrapper = mount(Text, {
          props: { type },
          slots: { default: () => 'Text' },
        })
        expect(wrapper.classes()).toContain(`hmfw-typography-${type}`)
      })
    })

    it('handles disabled', () => {
      const wrapper = mount(Text, {
        props: { disabled: true },
        slots: { default: () => 'Text' },
      })
      expect(wrapper.classes()).toContain('hmfw-typography-disabled')
    })

    it('handles mark', () => {
      const wrapper = mount(Text, {
        props: { mark: true },
        slots: { default: () => 'Text' },
      })
      expect(wrapper.find('mark').exists()).toBe(true)
    })

    it('handles code', () => {
      const wrapper = mount(Text, {
        props: { code: true },
        slots: { default: () => 'Text' },
      })
      expect(wrapper.find('code').exists()).toBe(true)
    })

    it('handles keyboard', () => {
      const wrapper = mount(Text, {
        props: { keyboard: true },
        slots: { default: () => 'Text' },
      })
      expect(wrapper.find('kbd').exists()).toBe(true)
    })

    it('handles underline', () => {
      const wrapper = mount(Text, {
        props: { underline: true },
        slots: { default: () => 'Text' },
      })
      expect(wrapper.find('u').exists()).toBe(true)
    })

    it('handles delete', () => {
      const wrapper = mount(Text, {
        props: { delete: true },
        slots: { default: () => 'Text' },
      })
      expect(wrapper.find('del').exists()).toBe(true)
    })

    it('handles strong', () => {
      const wrapper = mount(Text, {
        props: { strong: true },
        slots: { default: () => 'Text' },
      })
      expect(wrapper.find('strong').exists()).toBe(true)
    })

    it('handles italic', () => {
      const wrapper = mount(Text, {
        props: { italic: true },
        slots: { default: () => 'Text' },
      })
      expect(wrapper.find('i').exists()).toBe(true)
    })
  })

  describe('Title', () => {
    it('renders correctly', () => {
      const wrapper = mount(Title, {
        slots: { default: () => 'Title' },
      })
      expect(wrapper.text()).toBe('Title')
      expect(wrapper.element.tagName).toBe('H1')
    })

    it('handles level prop', () => {
      const levels = [1, 2, 3, 4, 5] as const
      levels.forEach((level) => {
        const wrapper = mount(Title, {
          props: { level },
          slots: { default: () => 'Title' },
        })
        expect(wrapper.element.tagName).toBe(`H${level}`)
        expect(wrapper.classes()).toContain(`hmfw-typography-h${level}`)
      })
    })

    it('handles type prop', () => {
      const wrapper = mount(Title, {
        props: { type: 'danger' },
        slots: { default: () => 'Title' },
      })
      expect(wrapper.classes()).toContain('hmfw-typography-danger')
    })
  })

  describe('Paragraph', () => {
    it('renders correctly', () => {
      const wrapper = mount(Paragraph, {
        slots: { default: () => 'Paragraph' },
      })
      expect(wrapper.text()).toBe('Paragraph')
      expect(wrapper.element.tagName).toBe('P')
    })

    it('handles type prop', () => {
      const wrapper = mount(Paragraph, {
        props: { type: 'secondary' },
        slots: { default: () => 'Paragraph' },
      })
      expect(wrapper.classes()).toContain('hmfw-typography-secondary')
    })

    it('handles strong', () => {
      const wrapper = mount(Paragraph, {
        props: { strong: true },
        slots: { default: () => 'Paragraph' },
      })
      expect(wrapper.find('strong').exists()).toBe(true)
    })
  })
})
