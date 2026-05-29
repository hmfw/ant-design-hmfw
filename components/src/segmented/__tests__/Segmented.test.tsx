import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Segmented } from '../Segmented'

const options = ['Daily', 'Weekly', 'Monthly']

describe('Segmented', () => {
  it('renders all options', () => {
    const wrapper = mount(Segmented, { props: { options } })
    expect(wrapper.findAll('.hmfw-segmented-item')).toHaveLength(3)
  })

  it('selects first option by default', () => {
    const wrapper = mount(Segmented, { props: { options } })
    expect(wrapper.findAll('.hmfw-segmented-item')[0].classes()).toContain('hmfw-segmented-item-selected')
  })

  it('selects specified defaultValue', () => {
    const wrapper = mount(Segmented, { props: { options, defaultValue: 'Weekly' } })
    expect(wrapper.findAll('.hmfw-segmented-item')[1].classes()).toContain('hmfw-segmented-item-selected')
  })

  it('emits change on click', async () => {
    const wrapper = mount(Segmented, { props: { options } })
    await wrapper.findAll('.hmfw-segmented-item')[1].trigger('click')
    expect(wrapper.emitted('change')?.[0]).toEqual(['Weekly'])
  })

  it('applies disabled class', () => {
    const wrapper = mount(Segmented, { props: { options, disabled: true } })
    expect(wrapper.classes()).toContain('hmfw-segmented-disabled')
  })

  it('does not emit change when disabled', async () => {
    const wrapper = mount(Segmented, { props: { options, disabled: true } })
    await wrapper.findAll('.hmfw-segmented-item')[1].trigger('click')
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('applies block class', () => {
    const wrapper = mount(Segmented, { props: { options, block: true } })
    expect(wrapper.classes()).toContain('hmfw-segmented-block')
  })

  it('applies size class', () => {
    const large = mount(Segmented, { props: { options, size: 'large' } })
    expect(large.classes()).toContain('hmfw-segmented-large')
    const small = mount(Segmented, { props: { options, size: 'small' } })
    expect(small.classes()).toContain('hmfw-segmented-small')
  })

  it('renders object options with icon', () => {
    const objOptions = [
      { label: 'List', value: 'list', icon: '☰' },
      { label: 'Grid', value: 'grid', icon: '⊞' },
    ]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    expect(wrapper.findAll('.hmfw-segmented-item-icon')).toHaveLength(2)
  })

  it('does not select disabled option', async () => {
    const objOptions = [
      { label: 'A', value: 'a' },
      { label: 'B', value: 'b', disabled: true },
    ]
    const wrapper = mount(Segmented, { props: { options: objOptions } })
    await wrapper.findAll('.hmfw-segmented-item')[1].trigger('click')
    expect(wrapper.emitted('change')).toBeFalsy()
  })

  it('respects controlled value', async () => {
    const wrapper = mount(Segmented, { props: { options, value: 'Monthly' } })
    expect(wrapper.findAll('.hmfw-segmented-item')[2].classes()).toContain('hmfw-segmented-item-selected')
  })
})
