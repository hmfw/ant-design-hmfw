import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
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

  it('pointAtCenter aligns arrow tip to trigger center', async () => {
    // 触发器宽 100、左缘 50 → 中心 100；弹层宽 120；箭头尖端距边缘 20px
    const triggerRect = { left: 50, right: 150, top: 0, bottom: 30, width: 100, height: 30 }
    const dropdownRect = { width: 120, height: 80, left: 0, right: 0, top: 0, bottom: 0 }

    const makeWrapper = (arrow: any) =>
      mount(Dropdown, {
        props: { menu, open: true, placement: 'bottomLeft', arrow },
        slots: { default: '<button>Open</button>' },
        attachTo: document.body,
      })

    const stub = (el: Element | null, rect: any) => {
      if (el) (el as HTMLElement).getBoundingClientRect = () => rect as DOMRect
    }

    // 默认：左缘对齐触发器左缘 → left = 50
    const w1 = makeWrapper(true)
    stub(document.querySelector('button')?.parentElement ?? null, triggerRect)
    stub(document.querySelector('.hmfw-dropdown'), dropdownRect)
    window.dispatchEvent(new Event('resize'))
    await nextTick()
    const left1 = (document.querySelector('.hmfw-dropdown') as HTMLElement).style.left
    expect(left1).toBe('50px')
    w1.unmount()

    // pointAtCenter：箭头尖端(距左缘 20px)对齐触发器中心(100) → left = 80
    const w2 = makeWrapper({ pointAtCenter: true })
    stub(document.querySelector('button')?.parentElement ?? null, triggerRect)
    stub(document.querySelector('.hmfw-dropdown'), dropdownRect)
    window.dispatchEvent(new Event('resize'))
    await nextTick()
    const left2 = (document.querySelector('.hmfw-dropdown') as HTMLElement).style.left
    expect(left2).toBe('80px')
    w2.unmount()
  })

  it('flips placement class to top when bottom overflows', async () => {
    // 触发器贴近视口底部：下方放不下、上方放得下 → 应翻转到 top，placement 类同步
    const viewportH = window.innerHeight
    const triggerRect = {
      left: 50,
      right: 150,
      top: viewportH - 40,
      bottom: viewportH - 10,
      width: 100,
      height: 30,
    }
    const dropdownRect = { width: 120, height: 200, left: 0, right: 0, top: 0, bottom: 0 }

    const wrapper = mount(Dropdown, {
      props: { menu, open: true, placement: 'bottomLeft', arrow: true },
      slots: { default: '<button>Open</button>' },
      attachTo: document.body,
    })

    const stub = (el: Element | null, rect: any) => {
      if (el) (el as HTMLElement).getBoundingClientRect = () => rect as DOMRect
    }
    stub(document.querySelector('button')?.parentElement ?? null, triggerRect)
    stub(document.querySelector('.hmfw-dropdown'), dropdownRect)
    window.dispatchEvent(new Event('resize'))
    await nextTick()

    const dropdown = document.querySelector('.hmfw-dropdown') as HTMLElement
    // 翻转后箭头方向类应为 topLeft，而非初始的 bottomLeft
    expect(dropdown.classList.contains('hmfw-trigger-placement-topLeft')).toBe(true)
    expect(dropdown.classList.contains('hmfw-trigger-placement-bottomLeft')).toBe(false)
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

  it('opens on hover by default', async () => {
    const wrapper = mount(DropdownButton, {
      props: { menu, mouseEnterDelay: 0 },
      slots: { default: 'Actions' },
      attachTo: document.body,
    })

    // 默认 trigger 为 hover（与基础 Dropdown 一致）
    const dropdownWrapper = wrapper.findComponent(Dropdown)
    expect(dropdownWrapper.props('trigger')).toBe('hover')

    // Dropdown 触发区域是 .hmfw-dropdown-button 下的 div（左按钮是 button，不是 div）
    const triggerDiv = document.querySelector('.hmfw-dropdown-button > div') as HTMLElement
    expect(triggerDiv).not.toBeNull()

    // 悬停触发区域应该打开下拉菜单
    await triggerDiv.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }))
    vi.runAllTimers()
    await nextTick()

    const dropdown = document.querySelector('.hmfw-dropdown')
    expect(dropdown?.classList.contains('hmfw-dropdown-hidden')).toBe(false)

    wrapper.unmount()
  })

  it('opens on click when trigger is click', async () => {
    const wrapper = mount(DropdownButton, {
      props: { menu, trigger: 'click' },
      slots: { default: 'Actions' },
      attachTo: document.body,
    })

    const dropdownWrapper = wrapper.findComponent(Dropdown)
    expect(dropdownWrapper.props('trigger')).toBe('click')

    // 点击触发区域应该打开下拉菜单
    const triggerDiv = document.querySelector('.hmfw-dropdown-button > div') as HTMLElement
    expect(triggerDiv).not.toBeNull()
    await triggerDiv.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    await nextTick()

    const dropdown = document.querySelector('.hmfw-dropdown')
    expect(dropdown?.classList.contains('hmfw-dropdown-hidden')).toBe(false)

    wrapper.unmount()
  })
})
