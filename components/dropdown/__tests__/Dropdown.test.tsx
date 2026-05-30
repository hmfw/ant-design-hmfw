import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Dropdown } from '../Dropdown'
import { DropdownButton } from '../DropdownButton'
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

  it('supports defaultOpen prop', async () => {
    const wrapper = mount(Dropdown, {
      props: { menu, defaultOpen: true },
      slots: { default: '<button>Open</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const dropdown = document.querySelector('.hmfw-dropdown')
    expect(dropdown?.classList.contains('hmfw-dropdown-hidden')).toBe(false)
    wrapper.unmount()
  })

  it('supports controlled open prop', async () => {
    const wrapper = mount(Dropdown, {
      props: { menu, open: true },
      slots: { default: '<button>Open</button>' },
      attachTo: document.body,
    })
    await nextTick()
    let dropdown = document.querySelector('.hmfw-dropdown')
    expect(dropdown?.classList.contains('hmfw-dropdown-hidden')).toBe(false)

    await wrapper.setProps({ open: false })
    await nextTick()
    dropdown = document.querySelector('.hmfw-dropdown')
    expect(dropdown?.classList.contains('hmfw-dropdown-hidden')).toBe(true)
    wrapper.unmount()
  })

  it('emits openChange with source parameter', async () => {
    const onOpenChange = vi.fn()
    const wrapper = mount(Dropdown, {
      props: { menu, trigger: 'click', onOpenChange },
      slots: { default: '<button>Click</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('click')
    await nextTick()
    expect(onOpenChange).toHaveBeenCalledWith(true, { source: 'trigger' })
    wrapper.unmount()
  })

  it('renders menu items', async () => {
    const wrapper = mount(Dropdown, {
      props: { menu, open: true },
      slots: { default: '<button>Open</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const items = document.querySelectorAll('.hmfw-menu-item')
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
    expect(document.querySelector('.hmfw-menu-item-divider')).not.toBeNull()
    wrapper.unmount()
  })

  it('supports arrow prop', async () => {
    const wrapper = mount(Dropdown, {
      props: { menu, open: true, arrow: true },
      slots: { default: '<button>Open</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-dropdown-arrow')).not.toBeNull()
    wrapper.unmount()
  })

  it('supports arrow with options', async () => {
    const wrapper = mount(Dropdown, {
      props: { menu, open: true, arrow: { pointAtCenter: true } },
      slots: { default: '<button>Open</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-dropdown-arrow')).not.toBeNull()
    wrapper.unmount()
  })

  it('supports overlayClassName', async () => {
    const wrapper = mount(Dropdown, {
      props: { menu, open: true, overlayClassName: 'custom-class' },
      slots: { default: '<button>Open</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const dropdown = document.querySelector('.hmfw-dropdown')
    expect(dropdown?.classList.contains('custom-class')).toBe(true)
    wrapper.unmount()
  })

  it('supports overlayStyle', async () => {
    const wrapper = mount(Dropdown, {
      props: { menu, open: true, overlayStyle: { width: '200px' } },
      slots: { default: '<button>Open</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const dropdown = document.querySelector('.hmfw-dropdown') as HTMLElement
    expect(dropdown?.style.width).toBe('200px')
    wrapper.unmount()
  })

  it('supports destroyOnHidden', async () => {
    const wrapper = mount(Dropdown, {
      props: { menu, open: false, destroyOnHidden: true },
      slots: { default: '<button>Open</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-dropdown')).toBeNull()
    wrapper.unmount()
  })

  it('supports disabled prop', async () => {
    const wrapper = mount(Dropdown, {
      props: { menu, trigger: 'click', disabled: true },
      slots: { default: '<button>Click</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('click')
    await nextTick()
    const dropdown = document.querySelector('.hmfw-dropdown')
    expect(dropdown?.classList.contains('hmfw-dropdown-hidden')).toBe(true)
    wrapper.unmount()
  })

  it('supports multiple triggers', async () => {
    const wrapper = mount(Dropdown, {
      props: { menu, trigger: ['hover', 'click'], mouseEnterDelay: 0 },
      slots: { default: '<button>Trigger</button>' },
      attachTo: document.body,
    })

    // Test hover
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    let dropdown = document.querySelector('.hmfw-dropdown')
    expect(dropdown?.classList.contains('hmfw-dropdown-hidden')).toBe(false)

    // Close it
    await wrapper.find('div').trigger('mouseleave')
    vi.runAllTimers()
    await nextTick()

    // Test click
    await wrapper.find('div').trigger('click')
    await nextTick()
    dropdown = document.querySelector('.hmfw-dropdown')
    expect(dropdown?.classList.contains('hmfw-dropdown-hidden')).toBe(false)

    wrapper.unmount()
  })

  it('supports contextMenu trigger', async () => {
    const wrapper = mount(Dropdown, {
      props: { menu, trigger: 'contextMenu' },
      slots: { default: '<button>Right Click</button>' },
      attachTo: document.body,
    })
    const event = new MouseEvent('contextmenu', { bubbles: true, cancelable: true })
    await wrapper.find('div').element.dispatchEvent(event)
    await nextTick()
    const dropdown = document.querySelector('.hmfw-dropdown')
    expect(dropdown?.classList.contains('hmfw-dropdown-hidden')).toBe(false)
    wrapper.unmount()
  })
})

describe('DropdownButton', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => {
    vi.useRealTimers()
    document.body.innerHTML = ''
  })

  it('renders two buttons', () => {
    const wrapper = mount(DropdownButton, {
      props: { menu },
      slots: { default: 'Actions' },
      attachTo: document.body,
    })
    const buttons = wrapper.findAll('.hmfw-btn')
    expect(buttons.length).toBe(2)
    wrapper.unmount()
  })

  it('emits click event on left button', async () => {
    const onClick = vi.fn()
    const wrapper = mount(DropdownButton, {
      props: { menu, onClick },
      slots: { default: 'Actions' },
      attachTo: document.body,
    })
    const buttons = wrapper.findAll('.hmfw-btn')
    await buttons[0].trigger('click')
    expect(onClick).toHaveBeenCalled()
    wrapper.unmount()
  })

  it('supports type prop', () => {
    const wrapper = mount(DropdownButton, {
      props: { menu, type: 'primary' },
      slots: { default: 'Actions' },
      attachTo: document.body,
    })
    const buttons = wrapper.findAll('.hmfw-btn')
    expect(buttons[0].classes()).toContain('hmfw-btn-primary')
    wrapper.unmount()
  })

  it('supports danger prop', () => {
    const wrapper = mount(DropdownButton, {
      props: { menu, danger: true },
      slots: { default: 'Actions' },
      attachTo: document.body,
    })
    const buttons = wrapper.findAll('.hmfw-btn')
    expect(buttons[0].classes()).toContain('hmfw-btn-dangerous')
    wrapper.unmount()
  })

  it('supports disabled prop', () => {
    const wrapper = mount(DropdownButton, {
      props: { menu, disabled: true },
      slots: { default: 'Actions' },
      attachTo: document.body,
    })
    const buttons = wrapper.findAll('.hmfw-btn')
    expect(buttons[0].attributes('disabled')).toBeDefined()
    wrapper.unmount()
  })
})
