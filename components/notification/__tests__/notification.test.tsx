import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { notification } from '../notification'
import { nextTick } from 'vue'

async function flushAll() {
  await nextTick()
  await nextTick()
  await nextTick()
}

describe('notification', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    notification.destroy()
    vi.useRealTimers()
    document.body.innerHTML = ''
  })

  it('shows a notification', async () => {
    notification.open({ message: 'Test notification', duration: 0 })
    await flushAll()
    expect(document.querySelector('.hmfw-notification-notice-message')?.textContent).toBe('Test notification')
  })

  it('shows description', async () => {
    notification.open({ message: 'Title', description: 'Desc text', duration: 0 })
    await flushAll()
    expect(document.querySelector('.hmfw-notification-notice-description')?.textContent).toBe('Desc text')
  })

  it('shows success type with icon', async () => {
    notification.success({ message: 'Success!', duration: 0 })
    await flushAll()
    expect(document.querySelector('.hmfw-notification-notice-icon-success')).not.toBeNull()
  })

  it('shows error type with icon', async () => {
    notification.error({ message: 'Error!', duration: 0 })
    await flushAll()
    expect(document.querySelector('.hmfw-notification-notice-icon-error')).not.toBeNull()
  })

  it('auto-closes after duration', async () => {
    notification.open({ message: 'Auto close', duration: 1 })
    await flushAll()
    expect(document.querySelector('.hmfw-notification-notice-message')).not.toBeNull()
    vi.advanceTimersByTime(1000)
    await flushAll()
    const notice = document.querySelector('.hmfw-notification-notice')
    expect(notice?.classList.contains('hmfw-notification-notice-closing')).toBe(true)
  })

  it('destroys by key', async () => {
    notification.open({ message: 'Keyed', key: 'my-key', duration: 0 })
    await flushAll()
    notification.destroy('my-key')
    await flushAll()
    const notice = document.querySelector('.hmfw-notification-notice')
    expect(notice?.classList.contains('hmfw-notification-notice-closing')).toBe(true)
  })
})
