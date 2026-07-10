import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { Alert } from '../Alert'
import { nextTick } from 'vue'

describe('Alert', () => {
  it('renders with default info type', () => {
    const wrapper = mount(Alert, { props: { title: 'Info message' } })
    expect(wrapper.classes()).toContain('hmfw-alert-info')
    expect(wrapper.text()).toContain('Info message')
  })

  it('renders all types', () => {
    for (const type of ['success', 'info', 'warning', 'error'] as const) {
      const wrapper = mount(Alert, { props: { type, title: 'msg' } })
      expect(wrapper.classes()).toContain(`hmfw-alert-${type}`)
    }
  })

  it('shows icon when showIcon is true', () => {
    const wrapper = mount(Alert, { props: { title: 'msg', showIcon: true } })
    expect(wrapper.find('.hmfw-alert-icon').exists()).toBe(true)
  })

  it('renders svg status icon (not emoji)', () => {
    const wrapper = mount(Alert, { props: { title: 'msg', showIcon: true, type: 'success' } })
    expect(wrapper.find('.hmfw-alert-icon svg').exists()).toBe(true)
  })

  it('does not show icon by default', () => {
    const wrapper = mount(Alert, { props: { title: 'msg' } })
    expect(wrapper.find('.hmfw-alert-icon').exists()).toBe(false)
  })

  it('renders description with v6 classNames', () => {
    const wrapper = mount(Alert, {
      props: { title: 'title', description: 'desc text' },
    })
    expect(wrapper.find('.hmfw-alert-description').text()).toBe('desc text')
    expect(wrapper.classes()).toContain('hmfw-alert-with-description')
  })

  it('shows close button when closable', () => {
    const wrapper = mount(Alert, { props: { title: 'msg', closable: true } })
    expect(wrapper.find('.hmfw-alert-close-icon').exists()).toBe(true)
  })

  it('renders default CloseOutlined svg in close button', () => {
    const wrapper = mount(Alert, { props: { title: 'msg', closable: true } })
    expect(wrapper.find('.hmfw-alert-close-icon svg').exists()).toBe(true)
  })

  it('emits close event and hides after close', async () => {
    vi.useFakeTimers()
    const wrapper = mount(Alert, { props: { title: 'msg', closable: true } })
    await wrapper.find('.hmfw-alert-close-icon').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
    vi.runAllTimers()
    await nextTick()
    await nextTick()
    expect(wrapper.find('.hmfw-alert').exists()).toBe(false)
    vi.useRealTimers()
  })

  it('emits afterClose after the close animation', async () => {
    vi.useFakeTimers()
    const wrapper = mount(Alert, { props: { title: 'msg', closable: true } })
    await wrapper.find('.hmfw-alert-close-icon').trigger('click')
    expect(wrapper.emitted('afterClose')).toBeFalsy()
    vi.runAllTimers()
    await nextTick()
    expect(wrapper.emitted('afterClose')).toBeTruthy()
    vi.useRealTimers()
  })

  it('renders banner style', () => {
    const wrapper = mount(Alert, { props: { title: 'msg', banner: true } })
    expect(wrapper.classes()).toContain('hmfw-alert-banner')
  })

  it('banner auto-enables icon', () => {
    const wrapper = mount(Alert, { props: { title: 'msg', banner: true } })
    expect(wrapper.find('.hmfw-alert-icon').exists()).toBe(true)
  })

  it('banner defaults to warning type', () => {
    const wrapper = mount(Alert, { props: { title: 'msg', banner: true } })
    expect(wrapper.classes()).toContain('hmfw-alert-warning')
  })

  it('banner can disable icon explicitly', () => {
    const wrapper = mount(Alert, { props: { title: 'msg', banner: true, showIcon: false } })
    expect(wrapper.find('.hmfw-alert-icon').exists()).toBe(false)
  })

  it('supports title prop rendered in -title', () => {
    const wrapper = mount(Alert, { props: { title: 'Title content' } })
    expect(wrapper.find('.hmfw-alert-title').text()).toBe('Title content')
  })

  it('applies outlined variant by default', () => {
    const wrapper = mount(Alert, { props: { title: 'msg' } })
    expect(wrapper.classes()).toContain('hmfw-alert-outlined')
  })

  it('applies filled variant', () => {
    const wrapper = mount(Alert, { props: { title: 'msg', variant: 'filled' } })
    expect(wrapper.classes()).toContain('hmfw-alert-filled')
  })

  it('renders slot title into -title', () => {
    const wrapper = mount(Alert, {
      slots: { title: '<strong>bold msg</strong>' },
    })
    expect(wrapper.find('.hmfw-alert-title').html()).toContain('<strong>')
  })

  it('has role=alert for accessibility by default', () => {
    const wrapper = mount(Alert, { props: { title: 'msg' } })
    expect(wrapper.attributes('role')).toBe('alert')
  })

  it('supports custom role prop', () => {
    const wrapper = mount(Alert, { props: { title: 'msg', role: 'status' } })
    expect(wrapper.attributes('role')).toBe('status')
  })

  it('renders custom icon prop', () => {
    const wrapper = mount(Alert, {
      props: { title: 'msg', showIcon: true, icon: h('i', { class: 'my-icon' }) },
    })
    expect(wrapper.find('.hmfw-alert-icon .my-icon').exists()).toBe(true)
  })

  it('renders action via prop into -actions', () => {
    const wrapper = mount(Alert, {
      props: { title: 'msg', action: h('button', { class: 'act-btn' }, 'undo') },
    })
    expect(wrapper.find('.hmfw-alert-actions .act-btn').exists()).toBe(true)
  })

  it('renders action via slot into -actions', () => {
    const wrapper = mount(Alert, {
      props: { title: 'msg' },
      slots: { action: '<button class="slot-act">x</button>' },
    })
    expect(wrapper.find('.hmfw-alert-actions .slot-act').exists()).toBe(true)
  })

  it('closable object with closeIcon makes it closable and renders custom icon', () => {
    const wrapper = mount(Alert, {
      props: { title: 'msg', closable: { closeIcon: h('span', { class: 'ci' }, 'C') } },
    })
    const close = wrapper.find('.hmfw-alert-close-icon')
    expect(close.exists()).toBe(true)
    expect(close.find('.ci').exists()).toBe(true)
  })

  it('closable object supports aria-label', () => {
    const wrapper = mount(Alert, {
      props: { title: 'msg', closable: { 'aria-label': 'dismiss me' } },
    })
    expect(wrapper.find('.hmfw-alert-close-icon').attributes('aria-label')).toBe('dismiss me')
  })

  it('not closable by default', () => {
    const wrapper = mount(Alert, { props: { title: 'msg' } })
    expect(wrapper.find('.hmfw-alert-close-icon').exists()).toBe(false)
  })

  it('renders content section wrapper', () => {
    const wrapper = mount(Alert, { props: { title: 'msg' } })
    expect(wrapper.find('.hmfw-alert-section').exists()).toBe(true)
  })

  it('actions come before close button in DOM order', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'msg',
        closable: true,
        action: h('button', { class: 'act-btn' }, 'undo'),
      },
    })
    const children = Array.from(wrapper.element.children).map((c) => c.className)
    const actionsIdx = children.findIndex((c) => c.includes('hmfw-alert-actions'))
    const closeIdx = children.findIndex((c) => c.includes('hmfw-alert-close-icon'))
    expect(actionsIdx).toBeGreaterThan(-1)
    expect(closeIdx).toBeGreaterThan(-1)
    expect(actionsIdx).toBeLessThan(closeIdx)
  })

  it('adds no-icon class when icon is hidden', () => {
    const wrapper = mount(Alert, { props: { title: 'msg' } })
    expect(wrapper.classes()).toContain('hmfw-alert-no-icon')
  })

  // === P2 优化项测试 ===

  it('banner mode has no border-radius style (via banner class)', () => {
    const wrapper = mount(Alert, { props: { title: 'msg', banner: true } })
    expect(wrapper.classes()).toContain('hmfw-alert-banner')
    // banner 类确保样式中 border-radius: 0 生效
    expect(wrapper.classes()).not.toContain('hmfw-alert-with-description')
  })

  it('banner mode with description applies both banner and description classes', () => {
    const wrapper = mount(Alert, {
      props: { title: 'title', description: 'desc', banner: true },
    })
    expect(wrapper.classes()).toContain('hmfw-alert-banner')
    expect(wrapper.classes()).toContain('hmfw-alert-with-description')
  })

  it('icon aligns with title when description is present (flex-start structure)', () => {
    const wrapper = mount(Alert, {
      props: { title: 'Title', description: 'Long description text', showIcon: true },
    })
    // 有 description 时应用 with-description 类（flex-start 对齐）
    expect(wrapper.classes()).toContain('hmfw-alert-with-description')
    const icon = wrapper.find('.hmfw-alert-icon')
    expect(icon.exists()).toBe(true)
    // 图标在 section 之前
    const children = Array.from(wrapper.element.children).map((c) => c.className)
    const iconIdx = children.findIndex((c) => c.includes('hmfw-alert-icon'))
    const sectionIdx = children.findIndex((c) => c.includes('hmfw-alert-section'))
    expect(iconIdx).toBeLessThan(sectionIdx)
  })

  it('action renders alongside close button with description present', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'Title',
        description: 'desc',
        closable: true,
        action: h('button', { class: 'desc-act' }, 'retry'),
      },
    })
    expect(wrapper.find('.hmfw-alert-actions .desc-act').exists()).toBe(true)
    expect(wrapper.find('.hmfw-alert-close-icon').exists()).toBe(true)
    // action 在 close 之前
    const children = Array.from(wrapper.element.children).map((c) => c.className)
    const actionsIdx = children.findIndex((c) => c.includes('hmfw-alert-actions'))
    const closeIdx = children.findIndex((c) => c.includes('hmfw-alert-close-icon'))
    expect(actionsIdx).toBeLessThan(closeIdx)
  })
})
