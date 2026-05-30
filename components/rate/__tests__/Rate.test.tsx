import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { h, nextTick } from 'vue'
import { Rate } from '../Rate'
import { ConfigProvider } from '../../config-provider'

describe('Rate', () => {
  it('renders 5 stars by default', () => {
    const wrapper = mount(Rate)
    expect(wrapper.findAll('.hmfw-rate-star')).toHaveLength(5)
  })

  it('renders custom count', () => {
    const wrapper = mount(Rate, { props: { count: 3 } })
    expect(wrapper.findAll('.hmfw-rate-star')).toHaveLength(3)
  })

  it('shows correct filled stars for value', () => {
    const wrapper = mount(Rate, { props: { value: 3 } })
    const stars = wrapper.findAll('.hmfw-rate-star')
    expect(stars[0].classes()).toContain('hmfw-rate-star-full')
    expect(stars[1].classes()).toContain('hmfw-rate-star-full')
    expect(stars[2].classes()).toContain('hmfw-rate-star-full')
    expect(stars[3].classes()).toContain('hmfw-rate-star-zero')
    expect(stars[4].classes()).toContain('hmfw-rate-star-zero')
  })

  it('emits change on star click', async () => {
    const wrapper = mount(Rate, { props: { defaultValue: 0 } })
    await wrapper.findAll('.hmfw-rate-star-second')[2].trigger('click')
    expect(wrapper.emitted('change')?.[0]).toEqual([3])
  })

  it('clears value when clicking same star with allowClear', async () => {
    const wrapper = mount(Rate, { props: { defaultValue: 3, allowClear: true } })
    await wrapper.findAll('.hmfw-rate-star-second')[2].trigger('click')
    expect(wrapper.emitted('change')?.[0]).toEqual([0])
  })

  it('does not clear when allowClear=false', async () => {
    const wrapper = mount(Rate, { props: { defaultValue: 3, allowClear: false } })
    await wrapper.findAll('.hmfw-rate-star-second')[2].trigger('click')
    expect(wrapper.emitted('change')?.[0]).toEqual([3])
  })

  it('is disabled', () => {
    const wrapper = mount(Rate, { props: { disabled: true } })
    expect(wrapper.classes()).toContain('hmfw-rate-disabled')
  })

  it('does not emit change when disabled', async () => {
    const wrapper = mount(Rate, { props: { disabled: true, defaultValue: 2 } })
    await wrapper.findAll('.hmfw-rate-star-second')[4].trigger('click')
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('renders half star', () => {
    const wrapper = mount(Rate, { props: { value: 2.5, allowHalf: true } })
    const stars = wrapper.findAll('.hmfw-rate-star')
    expect(stars[2].classes()).toContain('hmfw-rate-star-half')
  })

  it('renders custom character', () => {
    const wrapper = mount(Rate, { props: { character: '♥', count: 3 } })
    const seconds = wrapper.findAll('.hmfw-rate-star-second')
    expect(seconds[0].text()).toBe('♥')
  })

  it('supports size prop', () => {
    const wrapperSmall = mount(Rate, { props: { size: 'small' } })
    expect(wrapperSmall.classes()).toContain('hmfw-rate-small')

    const wrapperLarge = mount(Rate, { props: { size: 'large' } })
    expect(wrapperLarge.classes()).toContain('hmfw-rate-large')
  })

  it('inherits size from ConfigProvider', () => {
    const wrapper = mount(ConfigProvider, {
      props: { componentSize: 'large' },
      slots: {
        default: () => h(Rate),
      },
    })
    expect(wrapper.find('.hmfw-rate').classes()).toContain('hmfw-rate-large')
  })

  it('supports character as function', () => {
    const wrapper = mount(Rate, {
      props: {
        count: 3,
        character: ({ index }: { index: number }) => String(index + 1),
      },
    })
    const seconds = wrapper.findAll('.hmfw-rate-star-second')
    expect(seconds[0].text()).toBe('1')
    expect(seconds[1].text()).toBe('2')
    expect(seconds[2].text()).toBe('3')
  })

  it('supports keyboard navigation', async () => {
    const wrapper = mount(Rate, { props: { defaultValue: 2, keyboard: true } })
    const container = wrapper.find('ul')

    await container.trigger('keydown', { key: 'ArrowRight' })
    await nextTick()
    expect(wrapper.emitted('change')?.[0]).toEqual([3])

    await container.trigger('keydown', { key: 'ArrowLeft' })
    await nextTick()
    expect(wrapper.emitted('change')?.[1]).toEqual([2])
  })

  it('disables keyboard when keyboard=false', async () => {
    const wrapper = mount(Rate, { props: { defaultValue: 2, keyboard: false } })
    const container = wrapper.find('ul')

    await container.trigger('keydown', { key: 'ArrowRight' })
    await nextTick()
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('exposes focus and blur methods', () => {
    const wrapper = mount(Rate)
    const instance = wrapper.vm as any
    expect(typeof instance.focus).toBe('function')
    expect(typeof instance.blur).toBe('function')
  })

  it('emits keydown event', async () => {
    const wrapper = mount(Rate, { props: { keyboard: true } })
    const container = wrapper.find('ul')

    await container.trigger('keydown', { key: 'ArrowRight' })
    expect(wrapper.emitted('keydown')).toBeTruthy()
  })

  it('supports autoFocus', async () => {
    const wrapper = mount(Rate, { props: { autoFocus: true }, attachTo: document.body })
    await nextTick()
    expect(document.activeElement).toBe(wrapper.find('ul').element)
    wrapper.unmount()
  })
})
