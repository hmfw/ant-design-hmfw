import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Popover } from '../Popover'
import { nextTick } from 'vue'

describe('Popover', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => {
    vi.useRealTimers()
    document.body.innerHTML = ''
  })

  it('renders trigger element', () => {
    const wrapper = mount(Popover, {
      props: { title: 'Title', content: 'Content' },
      slots: { default: '<button>hover me</button>' },
      attachTo: document.body,
    })
    expect(wrapper.find('button').exists()).toBe(true)
    wrapper.unmount()
  })

  it('shows popover on hover', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'Title', content: 'Content', mouseEnterDelay: 0 },
      slots: { default: '<button>hover me</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    const popover = document.querySelector('.hmfw-popover')
    expect(popover?.classList.contains('hmfw-popover-hidden')).toBe(false)
    wrapper.unmount()
  })

  it('hides popover on mouseleave', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'Title', content: 'Content', mouseEnterDelay: 0, mouseLeaveDelay: 0 },
      slots: { default: '<button>hover me</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    await wrapper.find('div').trigger('mouseleave')
    vi.runAllTimers()
    await nextTick()
    const popover = document.querySelector('.hmfw-popover')
    expect(popover?.classList.contains('hmfw-popover-hidden')).toBe(true)
    wrapper.unmount()
  })

  it('renders title and content', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'My Title', content: 'My Content', open: true },
      slots: { default: '<button>hover me</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-popover-title')?.textContent).toBe('My Title')
    expect(document.querySelector('.hmfw-popover-inner-content')?.textContent).toBe('My Content')
    wrapper.unmount()
  })

  it('renders slot title and content', async () => {
    const wrapper = mount(Popover, {
      props: { open: true },
      slots: {
        default: '<button>hover me</button>',
        title: '<strong>Slot Title</strong>',
        content: '<em>Slot Content</em>',
      },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-popover-title')?.innerHTML).toContain('<strong>')
    expect(document.querySelector('.hmfw-popover-inner-content')?.innerHTML).toContain('<em>')
    wrapper.unmount()
  })

  it('shows on click trigger', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'Title', content: 'Content', trigger: 'click' },
      slots: { default: '<button>click me</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('click')
    await nextTick()
    const popover = document.querySelector('.hmfw-popover')
    expect(popover?.classList.contains('hmfw-popover-hidden')).toBe(false)
    wrapper.unmount()
  })

  it('does not show when disabled', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'Title', content: 'Content', disabled: true, mouseEnterDelay: 0 },
      slots: { default: '<button>hover me</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    const popover = document.querySelector('.hmfw-popover')
    expect(popover?.classList.contains('hmfw-popover-hidden')).toBe(true)
    wrapper.unmount()
  })

  it('does not render popup when both title and content are empty', async () => {
    const wrapper = mount(Popover, {
      props: { mouseEnterDelay: 0 },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    expect(document.querySelector('.hmfw-popover')).toBeNull()
    wrapper.unmount()
  })

  it('renders with only content (no title)', async () => {
    const wrapper = mount(Popover, {
      props: { content: 'Just content', open: true },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-popover-inner-content')?.textContent).toBe('Just content')
    expect(document.querySelector('.hmfw-popover-title')).toBeNull()
    wrapper.unmount()
  })

  it('title as render function works', async () => {
    const wrapper = mount(Popover, {
      props: {
        title: () => 'Rendered Title',
        content: 'C',
        open: true,
      },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-popover-title')?.textContent).toContain('Rendered Title')
    wrapper.unmount()
  })

  it('respects zIndex prop', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'T', content: 'C', open: true, zIndex: 9000 },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const popup = document.querySelector('.hmfw-popover') as HTMLElement
    expect(popup?.style.zIndex).toBe('9000')
    wrapper.unmount()
  })

  it('arrow=false hides arrow', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'T', content: 'C', open: true, arrow: false },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-popover-arrow')).toBeNull()
    wrapper.unmount()
  })

  it('emits afterOpenChange', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'T', content: 'C', mouseEnterDelay: 0 },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    expect(wrapper.emitted('afterOpenChange')).toBeTruthy()
    expect(wrapper.emitted('afterOpenChange')?.[0]).toEqual([true])
    wrapper.unmount()
  })

  it('focus trigger uses focusin/focusout (works with nested input)', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'T', content: 'C', trigger: 'focus' },
      slots: { default: '<input />' },
      attachTo: document.body,
    })
    const input = wrapper.find('input').element
    input.dispatchEvent(new FocusEvent('focusin', { bubbles: true }))
    await nextTick()
    let popup = document.querySelector('.hmfw-popover')
    expect(popup?.classList.contains('hmfw-popover-hidden')).toBe(false)
    input.dispatchEvent(new FocusEvent('focusout', { bubbles: true }))
    await nextTick()
    popup = document.querySelector('.hmfw-popover')
    expect(popup?.classList.contains('hmfw-popover-hidden')).toBe(true)
    wrapper.unmount()
  })

  it('renders a single inner box (no double .hmfw-popover-inner nesting)', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'T', content: 'C', open: true },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    // Tooltip owns the single styled box; Popover must not add another one.
    expect(document.querySelectorAll('.hmfw-popover-inner').length).toBe(1)
    wrapper.unmount()
  })

  it('color prop drives popover background via --tooltip-bg', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'T', content: 'C', open: true, color: 'rgb(255, 0, 0)' },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const popup = document.querySelector('.hmfw-popover') as HTMLElement
    expect(popup?.style.getPropertyValue('--tooltip-bg')).toBe('rgb(255, 0, 0)')
    wrapper.unmount()
  })

  it('title-only popover does not render an empty content div', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'Only title', open: true },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-popover-title')?.textContent).toBe('Only title')
    expect(document.querySelector('.hmfw-popover-inner-content')).toBeNull()
    wrapper.unmount()
  })

  it('applies overlayInnerStyle to the overlay content', async () => {
    const wrapper = mount(Popover, {
      props: {
        title: 'T',
        content: 'C',
        open: true,
        overlayInnerStyle: { color: 'rgb(0, 128, 0)' },
      },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const inner = document.querySelector('.hmfw-popover-inner') as HTMLElement
    const styled = inner?.querySelector('div[style]') as HTMLElement
    expect(styled?.style.color).toBe('rgb(0, 128, 0)')
    wrapper.unmount()
  })

  it('content as render function works', async () => {
    const wrapper = mount(Popover, {
      props: {
        title: 'T',
        content: () => 'Rendered Content',
        open: true,
      },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-popover-inner-content')?.textContent).toContain('Rendered Content')
    wrapper.unmount()
  })

  it('applies semantic classNames to title and content (object form)', async () => {
    const wrapper = mount(Popover, {
      props: {
        title: 'T',
        content: 'C',
        open: true,
        classNames: { title: 'my-title', content: 'my-content' },
      },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-popover-title')?.classList.contains('my-title')).toBe(true)
    expect(document.querySelector('.hmfw-popover-inner-content')?.classList.contains('my-content')).toBe(true)
    wrapper.unmount()
  })

  it('applies semantic styles to title and content (object form)', async () => {
    const wrapper = mount(Popover, {
      props: {
        title: 'T',
        content: 'C',
        open: true,
        styles: {
          title: { color: 'rgb(1, 2, 3)' },
          content: { color: 'rgb(4, 5, 6)' },
        },
      },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const title = document.querySelector('.hmfw-popover-title') as HTMLElement
    const content = document.querySelector('.hmfw-popover-inner-content') as HTMLElement
    expect(title?.style.color).toBe('rgb(1, 2, 3)')
    expect(content?.style.color).toBe('rgb(4, 5, 6)')
    wrapper.unmount()
  })

  it('supports classNames / styles as a function of props', async () => {
    const wrapper = mount(Popover, {
      props: {
        title: 'T',
        content: 'C',
        open: true,
        classNames: () => ({ title: 'fn-title' }),
        styles: () => ({ content: { color: 'rgb(7, 8, 9)' } }),
      },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelector('.hmfw-popover-title')?.classList.contains('fn-title')).toBe(true)
    const content = document.querySelector('.hmfw-popover-inner-content') as HTMLElement
    expect(content?.style.color).toBe('rgb(7, 8, 9)')
    wrapper.unmount()
  })

  it('supports array trigger (hover + focus)', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'T', content: 'C', trigger: ['hover', 'focus'], mouseEnterDelay: 0 },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    // hover opens
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    const popup = document.querySelector('.hmfw-popover')
    expect(popup?.classList.contains('hmfw-popover-hidden')).toBe(false)
    wrapper.unmount()
  })

  it('opens on contextMenu trigger', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'T', content: 'C', trigger: 'contextMenu' },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('contextmenu')
    await nextTick()
    const popup = document.querySelector('.hmfw-popover')
    expect(popup?.classList.contains('hmfw-popover-hidden')).toBe(false)
    wrapper.unmount()
  })

  it('destroyOnHidden removes popup DOM when closed', async () => {
    const wrapper = mount(Popover, {
      props: {
        title: 'T',
        content: 'C',
        destroyOnHidden: true,
        mouseEnterDelay: 0,
        mouseLeaveDelay: 0,
      },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    // closed initially -> no popup in DOM
    expect(document.querySelector('.hmfw-popover')).toBeNull()
    await wrapper.find('div').trigger('mouseenter')
    vi.runAllTimers()
    await nextTick()
    expect(document.querySelector('.hmfw-popover')).not.toBeNull()
    await wrapper.find('div').trigger('mouseleave')
    vi.runAllTimers()
    await nextTick()
    expect(document.querySelector('.hmfw-popover')).toBeNull()
    wrapper.unmount()
  })

  it('emits update:open and openChange when toggled', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'T', content: 'C', trigger: 'click' },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await wrapper.find('div').trigger('click')
    await nextTick()
    expect(wrapper.emitted('update:open')?.[0]).toEqual([true])
    expect(wrapper.emitted('openChange')?.[0]).toEqual([true])
    wrapper.unmount()
  })

  it('arrow pointAtCenter adds the arrow-point-at-center class', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'T', content: 'C', open: true, arrow: { pointAtCenter: true } },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    const popup = document.querySelector('.hmfw-popover')
    expect(popup?.classList.contains('hmfw-popover-arrow-point-at-center')).toBe(true)
    wrapper.unmount()
  })

  it('getPopupContainer mounts popup into the custom container', async () => {
    const container = document.createElement('div')
    container.id = 'custom-popover-container'
    document.body.appendChild(container)
    const wrapper = mount(Popover, {
      props: {
        title: 'T',
        content: 'C',
        open: true,
        getPopupContainer: () => container,
      },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(container.querySelector('.hmfw-popover')).not.toBeNull()
    wrapper.unmount()
    container.remove()
  })

  it('renders a single inner box for title-only popover too', async () => {
    const wrapper = mount(Popover, {
      props: { title: 'Only', open: true },
      slots: { default: '<button>x</button>' },
      attachTo: document.body,
    })
    await nextTick()
    expect(document.querySelectorAll('.hmfw-popover-inner').length).toBe(1)
    wrapper.unmount()
  })
})

describe('Popover._InternalPanelDoNotUseOrYouWillBeFired (PurePanel)', () => {
  const Panel = Popover._InternalPanelDoNotUseOrYouWillBeFired

  it('is attached to Popover', () => {
    expect(Panel).toBeTruthy()
  })

  it('renders title and content inline (no trigger needed)', () => {
    const wrapper = mount(Panel, {
      props: { title: 'PT', content: 'PC' },
    })
    expect(wrapper.find('.hmfw-popover-pure').exists()).toBe(true)
    expect(wrapper.find('.hmfw-popover-title').text()).toBe('PT')
    expect(wrapper.find('.hmfw-popover-inner-content').text()).toBe('PC')
    // 单一内层盒子，不嵌套
    expect(wrapper.findAll('.hmfw-popover-inner').length).toBe(1)
    wrapper.unmount()
  })

  it('renders slots for title and content', () => {
    const wrapper = mount(Panel, {
      slots: {
        title: '<strong>ST</strong>',
        content: '<em>SC</em>',
      },
    })
    expect(wrapper.find('.hmfw-popover-title').html()).toContain('<strong>')
    expect(wrapper.find('.hmfw-popover-inner-content').html()).toContain('<em>')
    wrapper.unmount()
  })

  it('shows arrow by default and hides it with arrow=false', () => {
    const withArrow = mount(Panel, { props: { content: 'C' } })
    expect(withArrow.find('.hmfw-popover-arrow').exists()).toBe(true)
    withArrow.unmount()

    const noArrow = mount(Panel, { props: { content: 'C', arrow: false } })
    expect(noArrow.find('.hmfw-popover-arrow').exists()).toBe(false)
    noArrow.unmount()
  })

  it('applies placement class', () => {
    const wrapper = mount(Panel, {
      props: { content: 'C', placement: 'bottomLeft' },
    })
    expect(wrapper.find('.hmfw-popover-placement-bottomLeft').exists()).toBe(true)
    wrapper.unmount()
  })

  it('title-only panel does not render an empty content div', () => {
    const wrapper = mount(Panel, { props: { title: 'Only' } })
    expect(wrapper.find('.hmfw-popover-title').text()).toBe('Only')
    expect(wrapper.find('.hmfw-popover-inner-content').exists()).toBe(false)
    wrapper.unmount()
  })

  it('color drives background via --tooltip-bg', () => {
    const wrapper = mount(Panel, {
      props: { content: 'C', color: 'rgb(255, 0, 0)' },
    })
    const root = wrapper.find('.hmfw-popover-pure').element as HTMLElement
    expect(root.style.getPropertyValue('--tooltip-bg')).toBe('rgb(255, 0, 0)')
    wrapper.unmount()
  })

  it('supports render-function title/content and semantic classNames', () => {
    const wrapper = mount(Panel, {
      props: {
        title: () => 'FnTitle',
        content: () => 'FnContent',
        classNames: { title: 'ct', content: 'cc' },
      },
    })
    expect(wrapper.find('.hmfw-popover-title').text()).toContain('FnTitle')
    expect(wrapper.find('.hmfw-popover-inner-content').text()).toContain('FnContent')
    expect(wrapper.find('.hmfw-popover-title').classes()).toContain('ct')
    expect(wrapper.find('.hmfw-popover-inner-content').classes()).toContain('cc')
    wrapper.unmount()
  })
})
