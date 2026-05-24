import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Dropdown } from '../Dropdown'
import { nextTick } from 'vue'

const menu = {
  items: [
    { key: '1', label: 'Item 1' },
    { key: '2', label: 'Item 2' },
    { key: '3', label: 'Item 3', disabled: true },
    { key: 'd', type: 'divider' as const },
    { key: '4', label: 'Danger', danger: true },
  ],
}

describe('Dropdown', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => {
    vi.useRealTimers()
    document.body.innerHTML = ''
  })

  it('renders trigger element', () => {
    const wrapper = mount(Dropdown, {
      props: { menu },
      slots: { default: '<button>Click me</button>' },
      attachTo: document.body,
    })
    expect(wrapper.find('button').exists()).toBe(true)
    wrapper.unmount()
  })

  it('shows dropdown on hover', async () => {
    const wrapper = mount(Dropdown, {
      props: { menu, mouseEnterDelay: 0 },
      slots: { default: '<button>Hover</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    const dropdown = document.querySelector('.hmfw-dropdown')
    expect(dropdown?.classList.contains('hmfw-dropdown-hidden')).toBe(false)
    wrapper.unmount()
  })

  it('hides dropdown on mouseleave', async () => {
    const wrapper = mount(Dropdown, {
      props: { menu, mouseEnterDelay: 0, mouseLeaveDelay: 0 },
      slots: { default: '<button>Hover</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    await wrapper.find('div').trigger('mouseleave')
    vi.runAllTimers()
    await nextTick()
    const dropdown = document.querySelector('.hmfw-dropdown')
    expect(dropdown?.classList.contains('hmfw-dropdown-hidden')).toBe(true)
    wrapper.unmount()
  })

  it('shows on click trigger', async () => {
    const wrapper = mount(Dropdown, {
      props: { menu, trigger: 'click' },
      slots: { default: '<button>Click</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('click')
    await nextTick()
    const dropdown = document.querySelector('.hmfw-dropdown')
    expect(dropdown?.classList.contains('hmfw-dropdown-hidden')).toBe(false)
    wrapper.unmount()
  })

  it('renders menu items', async () => {
    const wrapper = mount(Dropdown, {
      props: { menu, open: true },
      slots: { default: '<button>Open</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const items = document.querySelectorAll('.hmfw-dropdown-menu-item')
    expect(items.length).toBe(4) // 3 normal + 1 danger (divider is not .menu-item)
    wrapper.unmount()
  })

  it('renders divider', async () => {
    const wrapper = mount(Dropdown, {
      props: { menu, open: true },
      slots: { default: '<button>Open</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-dropdown-menu-divider')).not.toBeNull()
    wrapper.unmount()
  })

  it('calls onClick when item clicked', async () => {
    const onClick = vi.fn()
    const menuWithClick = { items: [{ key: '1', label: 'Item 1', onClick }] }
    const wrapper = mount(Dropdown, {
      props: { menu: menuWithClick, open: true },
      slots: { default: '<button>Open</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const item = document.querySelector('.hmfw-dropdown-menu-item') as HTMLElement
    item.click()
    expect(onClick).toHaveBeenCalled()
    wrapper.unmount()
  })

  it('does not call onClick for disabled item', async () => {
    const onClick = vi.fn()
    const menuWithDisabled = { items: [{ key: '1', label: 'Disabled', disabled: true, onClick }] }
    const wrapper = mount(Dropdown, {
      props: { menu: menuWithDisabled, open: true },
      slots: { default: '<button>Open</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const item = document.querySelector('.hmfw-dropdown-menu-item') as HTMLElement
    item.click()
    expect(onClick).not.toHaveBeenCalled()
    wrapper.unmount()
  })
})
