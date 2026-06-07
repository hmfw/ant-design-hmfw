import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
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

  it('wraps stars with Tooltip when tooltips is provided', () => {
    const wrapper = mount(Rate, {
      props: {
        count: 3,
        tooltips: ['差', '一般', '好'],
      },
    })
    // Tooltip 包裹后，星星仍然能找到
    expect(wrapper.findAll('.hmfw-rate-star')).toHaveLength(3)
  })

  it('supports tooltips as TooltipProps object', () => {
    const wrapper = mount(Rate, {
      props: {
        count: 2,
        tooltips: [{ title: 'first' }, { title: 'second', placement: 'bottom' }],
      },
    })
    expect(wrapper.findAll('.hmfw-rate-star')).toHaveLength(2)
  })

  it('does not render half star when allowHalf is false', () => {
    const wrapper = mount(Rate, { props: { count: 3, allowHalf: false } })
    expect(wrapper.findAll('.hmfw-rate-star-first')).toHaveLength(0)
    expect(wrapper.findAll('.hmfw-rate-star-second')).toHaveLength(3)
  })

  it('renders half-star regions when allowHalf is true', () => {
    const wrapper = mount(Rate, { props: { count: 3, allowHalf: true } })
    expect(wrapper.findAll('.hmfw-rate-star-first')).toHaveLength(3)
    expect(wrapper.findAll('.hmfw-rate-star-second')).toHaveLength(3)
  })

  it('clicks on first half region triggers half value when allowHalf', async () => {
    const wrapper = mount(Rate, { props: { defaultValue: 0, allowHalf: true } })
    await wrapper.findAll('.hmfw-rate-star-first')[2].trigger('click')
    expect(wrapper.emitted('change')?.[0]).toEqual([2.5])
  })

  it('emits hoverChange on mousemove and undefined on mouseleave', async () => {
    const wrapper = mount(Rate, { props: { defaultValue: 0 } })
    await wrapper.findAll('.hmfw-rate-star-second')[2].trigger('mousemove')
    expect(wrapper.emitted('hoverChange')?.[0]).toEqual([3])

    await wrapper.find('ul').trigger('mouseleave')
    const events = wrapper.emitted('hoverChange') as unknown[][]
    expect(events[events.length - 1]).toEqual([undefined])
  })

  it('keyboard step is 0.5 when allowHalf', async () => {
    const wrapper = mount(Rate, {
      props: { defaultValue: 2, keyboard: true, allowHalf: true },
    })
    await wrapper.find('ul').trigger('keydown', { key: 'ArrowRight' })
    await nextTick()
    expect(wrapper.emitted('change')?.[0]).toEqual([2.5])
  })

  it('keyboard clamps to [0, count]', async () => {
    const wrapper = mount(Rate, { props: { defaultValue: 0, keyboard: true } })
    const ul = wrapper.find('ul')

    // 已是最小值，再按一次不应触发 change
    await ul.trigger('keydown', { key: 'ArrowLeft' })
    expect(wrapper.emitted('change')).toBeFalsy()

    // 上界
    const wrapper2 = mount(Rate, { props: { defaultValue: 5, count: 5, keyboard: true } })
    await wrapper2.find('ul').trigger('keydown', { key: 'ArrowRight' })
    expect(wrapper2.emitted('change')).toBeFalsy()
  })

  it('Home key jumps to 0', async () => {
    const wrapper = mount(Rate, { props: { defaultValue: 4, keyboard: true } })
    await wrapper.find('ul').trigger('keydown', { key: 'Home' })
    await nextTick()
    expect(wrapper.emitted('change')?.[0]).toEqual([0])
  })

  it('End key jumps to count', async () => {
    const wrapper = mount(Rate, { props: { defaultValue: 1, count: 5, keyboard: true } })
    await wrapper.find('ul').trigger('keydown', { key: 'End' })
    await nextTick()
    expect(wrapper.emitted('change')?.[0]).toEqual([5])
  })

  it('Home/End do not emit when value already at boundary', async () => {
    const wrapper = mount(Rate, { props: { defaultValue: 0, keyboard: true } })
    await wrapper.find('ul').trigger('keydown', { key: 'Home' })
    expect(wrapper.emitted('change')).toBeFalsy()

    const wrapper2 = mount(Rate, { props: { defaultValue: 5, count: 5, keyboard: true } })
    await wrapper2.find('ul').trigger('keydown', { key: 'End' })
    expect(wrapper2.emitted('change')).toBeFalsy()
  })

  it('Home/End disabled when keyboard=false', async () => {
    const wrapper = mount(Rate, { props: { defaultValue: 2, keyboard: false } })
    await wrapper.find('ul').trigger('keydown', { key: 'Home' })
    await wrapper.find('ul').trigger('keydown', { key: 'End' })
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('reverses arrow direction in RTL mode', async () => {
    const wrapper = mount(ConfigProvider, {
      props: { direction: 'rtl' },
      slots: {
        default: () => h(Rate, { defaultValue: 2, keyboard: true }),
      },
    })
    const ul = wrapper.find('ul')
    expect(ul.classes()).toContain('hmfw-rate-rtl')

    // RTL：ArrowLeft 增加
    await ul.trigger('keydown', { key: 'ArrowLeft' })
    await nextTick()
    const rateInstance = wrapper.findComponent(Rate)
    expect(rateInstance.emitted('change')?.[0]).toEqual([3])

    // RTL：ArrowRight 减少
    await ul.trigger('keydown', { key: 'ArrowRight' })
    await nextTick()
    expect(rateInstance.emitted('change')?.[1]).toEqual([2])
  })

  it('passes isHalf to character render function', () => {
    const seen: boolean[] = []
    mount(Rate, {
      props: {
        count: 1,
        allowHalf: true,
        character: ({ isHalf }: { isHalf: boolean }) => {
          seen.push(isHalf)
          return isHalf ? 'H' : 'F'
        },
      },
    })
    // count=1 + allowHalf 应同时渲染 first(half=true) 和 second(half=false)
    expect(seen).toContain(true)
    expect(seen).toContain(false)
  })

  it('passes isHalf to character slot', () => {
    const wrapper = mount(Rate, {
      props: { count: 1, allowHalf: true },
      slots: {
        character: ({ isHalf }: { isHalf: boolean }) => (isHalf ? 'H' : 'F'),
      },
    })
    expect(wrapper.find('.hmfw-rate-star-first').text()).toBe('H')
    expect(wrapper.find('.hmfw-rate-star-second').text()).toBe('F')
  })

  it('has correct ARIA attributes', () => {
    const wrapper = mount(Rate, { props: { value: 2, count: 5 } })
    const ul = wrapper.find('ul')
    expect(ul.attributes('role')).toBe('radiogroup')

    const stars = wrapper.findAll('.hmfw-rate-star')
    stars.forEach((star, i) => {
      expect(star.attributes('role')).toBe('radio')
      expect(star.attributes('aria-posinset')).toBe(String(i + 1))
      expect(star.attributes('aria-setsize')).toBe('5')
    })
    // value=2 时前 2 个 aria-checked 为 true，其余为 false
    expect(stars[0].attributes('aria-checked')).toBe('true')
    expect(stars[1].attributes('aria-checked')).toBe('true')
    expect(stars[2].attributes('aria-checked')).toBe('false')
  })

  it('emits focus and blur', async () => {
    const wrapper = mount(Rate, { attachTo: document.body })
    await wrapper.find('ul').trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()

    await wrapper.find('ul').trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
    wrapper.unmount()
  })

  it('syncs internal value when controlled value changes', async () => {
    const wrapper = mount(Rate, { props: { value: 1 } })
    expect(wrapper.findAll('.hmfw-rate-star-full')).toHaveLength(1)

    await wrapper.setProps({ value: 3 })
    await nextTick()
    expect(wrapper.findAll('.hmfw-rate-star-full')).toHaveLength(3)
  })

  it('tabindex is -1 when disabled, 0 otherwise', () => {
    const w1 = mount(Rate)
    expect(w1.find('ul').attributes('tabindex')).toBe('0')

    const w2 = mount(Rate, { props: { disabled: true } })
    expect(w2.find('ul').attributes('tabindex')).toBe('-1')
  })
})
