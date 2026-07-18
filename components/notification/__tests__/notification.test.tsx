import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { notification } from '../notification'
import { nextTick, h } from 'vue'

async function flushAll() {
  await nextTick()
  await nextTick()
  await nextTick()
}

describe('Notification', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    notification.destroy()
    vi.useRealTimers()
    document.body.innerHTML = ''
  })

  it('renders notification with message', async () => {
    notification.open({ message: 'Test notification', duration: 0 })
    await flushAll()
    expect(document.querySelector('.hmfw-notification-notice-message')?.textContent).toBe('Test notification')
  })

  it('renders notification with description', async () => {
    notification.open({ message: 'Title', description: 'Desc text', duration: 0 })
    await flushAll()
    expect(document.querySelector('.hmfw-notification-notice-description')?.textContent).toBe('Desc text')
  })

  it('renders success type with SVG icon', async () => {
    notification.success({ message: 'Success!', duration: 0 })
    await flushAll()
    const icon = document.querySelector('.hmfw-notification-notice-icon-success')
    expect(icon).not.toBeNull()
    expect(icon?.querySelector('svg')).not.toBeNull()
  })

  it('renders error type with SVG icon', async () => {
    notification.error({ message: 'Error!', duration: 0 })
    await flushAll()
    const icon = document.querySelector('.hmfw-notification-notice-icon-error')
    expect(icon).not.toBeNull()
    expect(icon?.querySelector('svg')).not.toBeNull()
  })

  it('renders warning type with SVG icon', async () => {
    notification.warning({ message: 'Warning!', duration: 0 })
    await flushAll()
    const icon = document.querySelector('.hmfw-notification-notice-icon-warning')
    expect(icon).not.toBeNull()
    expect(icon?.querySelector('svg')).not.toBeNull()
  })

  it('renders info type with SVG icon', async () => {
    notification.info({ message: 'Info!', duration: 0 })
    await flushAll()
    const icon = document.querySelector('.hmfw-notification-notice-icon-info')
    expect(icon).not.toBeNull()
    expect(icon?.querySelector('svg')).not.toBeNull()
  })

  it('auto-closes after duration', async () => {
    notification.open({ message: 'Auto close', duration: 2 })
    await flushAll()
    expect(document.querySelector('.hmfw-notification-notice-message')).not.toBeNull()

    vi.advanceTimersByTime(2000)
    await flushAll()

    const notice = document.querySelector('.hmfw-notification-notice')
    expect(notice?.classList.contains('hmfw-notification-notice-leaving')).toBe(true)
  })

  it('does not auto-close when duration is 0', async () => {
    notification.open({ message: 'No auto close', duration: 0 })
    await flushAll()
    expect(document.querySelector('.hmfw-notification-notice-message')).not.toBeNull()

    vi.advanceTimersByTime(10000)
    await flushAll()

    const notice = document.querySelector('.hmfw-notification-notice')
    expect(notice?.classList.contains('hmfw-notification-notice-leaving')).toBe(false)
  })

  it('destroys notification by key', async () => {
    notification.open({ message: 'Keyed', key: 'my-key', duration: 0 })
    await flushAll()
    expect(document.querySelector('.hmfw-notification-notice')).not.toBeNull()

    notification.destroy('my-key')
    await flushAll()

    const notice = document.querySelector('.hmfw-notification-notice')
    expect(notice?.classList.contains('hmfw-notification-notice-leaving')).toBe(true)
  })

  it('destroys all notifications when called without key', async () => {
    notification.open({ message: 'First', key: 'key1', duration: 0 })
    notification.open({ message: 'Second', key: 'key2', duration: 0 })
    await flushAll()
    expect(document.querySelectorAll('.hmfw-notification-notice').length).toBe(2)

    notification.destroy()
    await flushAll()

    expect(document.querySelectorAll('.hmfw-notification-notice').length).toBe(0)
  })

  it('updates existing notification with same key', async () => {
    notification.open({ message: 'Original', key: 'update-key', duration: 0 })
    await flushAll()
    expect(document.querySelector('.hmfw-notification-notice-message')?.textContent).toBe('Original')

    notification.open({ message: 'Updated', key: 'update-key', duration: 0 })
    await flushAll()
    expect(document.querySelectorAll('.hmfw-notification-notice').length).toBe(1)
    expect(document.querySelector('.hmfw-notification-notice-message')?.textContent).toBe('Updated')
  })

  it('respects maxCount config', async () => {
    notification.config({ maxCount: 2 })

    notification.open({ message: 'First', key: '1', duration: 0 })
    notification.open({ message: 'Second', key: '2', duration: 0 })
    notification.open({ message: 'Third', key: '3', duration: 0 })
    await flushAll()

    // Only 2 should remain (first one should be removed)
    const notices = document.querySelectorAll('.hmfw-notification-notice:not(.hmfw-notification-notice-leaving)')
    expect(notices.length).toBe(2)

    // Reset config
    notification.config({ maxCount: undefined })
  })

  it('supports custom top offset', async () => {
    notification.config({ top: 100 })
    notification.open({ message: 'Custom top', duration: 0, placement: 'topRight' })
    await flushAll()

    const container = document.querySelector('.hmfw-notification')
    const style = container ? window.getComputedStyle(container) : null
    expect(style?.top).toBe('100px')

    // Reset config
    notification.config({ top: 24 })
  })

  it('supports custom bottom offset', async () => {
    notification.config({ bottom: 50 })
    notification.open({ message: 'Custom bottom', duration: 0, placement: 'bottomRight' })
    await flushAll()

    const container = document.querySelector('.hmfw-notification')
    const style = container ? window.getComputedStyle(container) : null
    expect(style?.bottom).toBe('50px')

    // Reset config
    notification.config({ bottom: 24 })
  })

  it('supports custom icon', async () => {
    const customIcon = h('span', { class: 'custom-icon' }, '🎉')
    notification.open({ message: 'Custom', icon: customIcon, duration: 0 })
    await flushAll()

    expect(document.querySelector('.custom-icon')).not.toBeNull()
  })

  it('supports VNode content', async () => {
    const content = h('strong', {}, 'Bold message')
    notification.open({ message: content, duration: 0 })
    await flushAll()

    expect(document.querySelector('.hmfw-notification-notice-message strong')?.textContent).toBe('Bold message')
  })

  it('supports render function content', async () => {
    notification.open({ message: () => h('em', {}, 'Italic message'), duration: 0 })
    await flushAll()

    expect(document.querySelector('.hmfw-notification-notice-message em')?.textContent).toBe('Italic message')
  })

  it('calls onClick when notification is clicked', async () => {
    const onClick = vi.fn()
    notification.open({ message: 'Clickable', onClick, duration: 0 })
    await flushAll()

    const notice = document.querySelector('.hmfw-notification-notice') as HTMLElement
    notice.click()

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when notification is closed', async () => {
    const onClose = vi.fn()
    notification.open({ message: 'Closable', onClose, duration: 0, key: 'close-test' })
    await flushAll()

    notification.destroy('close-test')
    await flushAll()

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('supports custom className', async () => {
    notification.open({ message: 'Custom class', className: 'my-custom-class', duration: 0 })
    await flushAll()

    expect(document.querySelector('.my-custom-class')).not.toBeNull()
  })

  it('supports custom style', async () => {
    notification.open({ message: 'Custom style', style: { width: '500px' }, duration: 0 })
    await flushAll()

    const notice = document.querySelector('.hmfw-notification-notice') as HTMLElement
    expect(notice.style.width).toBe('500px')
  })

  it('supports btn slot', async () => {
    const btn = h('button', { class: 'custom-btn' }, 'Action')
    notification.open({ message: 'With button', btn, duration: 0 })
    await flushAll()

    expect(document.querySelector('.hmfw-notification-notice-btn .custom-btn')).not.toBeNull()
  })

  it('pauses timer on hover by default', async () => {
    notification.open({ message: 'Hover me', duration: 1 })
    await flushAll()

    const notice = document.querySelector('.hmfw-notification-notice') as HTMLElement

    // Simulate mouse enter
    notice.dispatchEvent(new MouseEvent('mouseenter'))
    vi.advanceTimersByTime(1000)
    await flushAll()

    // Should not be leaving because timer was paused
    expect(notice.classList.contains('hmfw-notification-notice-leaving')).toBe(false)

    // Simulate mouse leave
    notice.dispatchEvent(new MouseEvent('mouseleave'))
    vi.advanceTimersByTime(1000)
    await flushAll()

    // Now should be leaving
    expect(notice.classList.contains('hmfw-notification-notice-leaving')).toBe(true)
  })

  it('supports different placements', async () => {
    const placements: Array<'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'top' | 'bottom'> = [
      'topLeft',
      'topRight',
      'bottomLeft',
      'bottomRight',
      'top',
      'bottom',
    ]

    for (const placement of placements) {
      notification.open({
        message: `Placement ${placement}`,
        placement,
        duration: 0,
        key: placement,
      })
      await flushAll()
    }

    expect(document.querySelectorAll('.hmfw-notification').length).toBe(6)
  })

  it('applies type-specific class', async () => {
    notification.success({ message: 'Success', duration: 0 })
    await flushAll()

    expect(document.querySelector('.hmfw-notification-notice-success')).not.toBeNull()
  })

  it('renders custom closeIcon', async () => {
    const closeIcon = h('span', { class: 'custom-close' }, 'X')
    notification.open({ message: 'Custom close', closeIcon, duration: 0 })
    await flushAll()

    expect(document.querySelector('.hmfw-notification-notice-close .custom-close')).not.toBeNull()
  })

  it('supports number as message content', async () => {
    notification.open({ message: 123, duration: 0 })
    await flushAll()

    expect(document.querySelector('.hmfw-notification-notice-message')?.textContent).toBe('123')
  })

  it('sets role attribute', async () => {
    notification.open({ message: 'Alert', role: 'alert', duration: 0 })
    await flushAll()

    const notice = document.querySelector('.hmfw-notification-notice')
    expect(notice?.getAttribute('role')).toBe('alert')
  })

  it('defaults to alert role', async () => {
    notification.open({ message: 'Default role', duration: 0 })
    await flushAll()

    const notice = document.querySelector('.hmfw-notification-notice')
    expect(notice?.getAttribute('role')).toBe('alert')
  })

  it('renders progress bar when showProgress is enabled', async () => {
    notification.open({ message: 'With progress', showProgress: true, duration: 3 })
    await flushAll()

    const progress = document.querySelector('.hmfw-notification-notice-progress') as HTMLElement
    expect(progress).not.toBeNull()
    expect(progress.style.animationDuration).toBe('3s')
  })

  it('does not render progress bar when duration is 0', async () => {
    notification.open({ message: 'No progress', showProgress: true, duration: 0 })
    await flushAll()

    expect(document.querySelector('.hmfw-notification-notice-progress')).toBeNull()
  })

  it('does not render progress bar when showProgress is not set', async () => {
    notification.open({ message: 'Plain', duration: 3 })
    await flushAll()

    expect(document.querySelector('.hmfw-notification-notice-progress')).toBeNull()
  })

  it('pauses progress animation on hover', async () => {
    notification.open({ message: 'Hover progress', showProgress: true, duration: 3 })
    await flushAll()

    const notice = document.querySelector('.hmfw-notification-notice') as HTMLElement
    notice.dispatchEvent(new MouseEvent('mouseenter'))
    await flushAll()

    const progress = document.querySelector('.hmfw-notification-notice-progress') as HTMLElement
    expect(progress.style.animationPlayState).toBe('paused')

    notice.dispatchEvent(new MouseEvent('mouseleave'))
    await flushAll()
    expect(progress.style.animationPlayState).toBe('running')
  })

  it('applies rtl class and direction when rtl is enabled', async () => {
    notification.config({ rtl: true })
    notification.open({ message: 'RTL', duration: 0 })
    await flushAll()

    const container = document.querySelector('.hmfw-notification') as HTMLElement
    expect(container.classList.contains('hmfw-notification-rtl')).toBe(true)
    expect(container.style.direction).toBe('rtl')

    // 复位配置
    notification.config({ rtl: false })
  })

  it('reacts to config() placement offset changes without remount', async () => {
    notification.open({ message: 'Reactive top', duration: 0, placement: 'topRight' })
    await flushAll()

    const container = document.querySelector('.hmfw-notification') as HTMLElement
    expect(container.style.top).toBe('24px')

    // 已挂载容器上更新 top，reactive globalConfig 应触发 computed 重算
    notification.config({ top: 88 })
    await flushAll()
    expect(container.style.top).toBe('88px')

    notification.config({ top: 24 })
  })
})
