import { describe, it, expect, afterEach } from 'vitest'
import { h, nextTick } from 'vue'
import { message } from '../message'

/** flush Vue's async render queue (microtask based — safe under fake timers) */
async function flush() {
  await nextTick()
  await Promise.resolve()
}

const NOTICE = '.hmfw-message-notice'

describe('message', () => {
  afterEach(() => {
    message.destroy()
    vi.useRealTimers()
    document.body.innerHTML = ''
  })

  it('renders a notice into document.body', async () => {
    message.success('成功')
    await flush()
    const notices = document.querySelectorAll(NOTICE)
    expect(notices.length).toBe(1)
    expect(notices[0].textContent).toContain('成功')
  })

  it('applies type-specific class', async () => {
    message.error('错误')
    await flush()
    expect(document.querySelector('.hmfw-message-notice-error')).not.toBeNull()
  })

  it('renders an svg icon, not a literal char', async () => {
    message.success('ok')
    await flush()
    const icon = document.querySelector('.hmfw-message-notice-icon')
    expect(icon).not.toBeNull()
    expect(icon!.querySelector('svg')).not.toBeNull()
  })

  it('loading icon spins', async () => {
    message.loading('加载中')
    await flush()
    expect(document.querySelector('.hmfw-message-notice-icon .hmfw-icon-spin')).not.toBeNull()
  })

  it('return value is callable (manual close) and thenable', async () => {
    const result = message.info('信息')
    expect(typeof result).toBe('function')
    expect(typeof result.then).toBe('function')
  })

  it('auto-dismisses after duration and resolves thenable', async () => {
    vi.useFakeTimers()
    let resolved = false
    message.success('test', 1).then(() => {
      resolved = true
    })
    await flush()
    expect(document.querySelectorAll(NOTICE).length).toBe(1)
    vi.advanceTimersByTime(1000) // duration elapsed -> leaving
    vi.advanceTimersByTime(200) // leave animation -> removed
    await Promise.resolve()
    await Promise.resolve()
    expect(resolved).toBe(true)
  })

  it('duration: 0 never auto-dismisses', async () => {
    vi.useFakeTimers()
    message.info('persist', 0)
    await flush()
    vi.advanceTimersByTime(100000)
    await flush()
    expect(document.querySelectorAll(NOTICE).length).toBe(1)
  })

  it('manual close removes the notice', async () => {
    vi.useFakeTimers()
    const close = message.info('manual', 0)
    await flush()
    expect(document.querySelectorAll(NOTICE).length).toBe(1)
    close()
    vi.advanceTimersByTime(200)
    await flush()
    expect(document.querySelectorAll(NOTICE).length).toBe(0)
  })

  it('calls onClose passed as 3rd arg', async () => {
    vi.useFakeTimers()
    const onClose = vi.fn()
    message.success('msg', 1, onClose)
    vi.advanceTimersByTime(1200)
    await flush()
    expect(onClose).toHaveBeenCalled()
  })

  it('calls onClose passed as 2nd arg (function)', async () => {
    vi.useFakeTimers()
    const onClose = vi.fn()
    message.success('msg', onClose)
    vi.advanceTimersByTime(DEFAULT_DURATION_MS + 200)
    await flush()
    expect(onClose).toHaveBeenCalled()
  })

  it('open(config) accepts object form', async () => {
    message.open({ type: 'warning', content: '对象配置', duration: 0 })
    await flush()
    expect(document.querySelector('.hmfw-message-notice-warning')).not.toBeNull()
    expect(document.querySelector(NOTICE)!.textContent).toContain('对象配置')
  })

  it('type method accepts object config', async () => {
    message.info({ content: '内联', duration: 0 })
    await flush()
    expect(document.querySelector(NOTICE)!.textContent).toContain('内联')
  })

  it('same key updates existing notice instead of stacking', async () => {
    message.loading({ content: '加载中', key: 'k', duration: 0 })
    await flush()
    message.success({ content: '完成', key: 'k', duration: 0 })
    await flush()
    expect(document.querySelectorAll(NOTICE).length).toBe(1)
    expect(document.querySelector(NOTICE)!.textContent).toContain('完成')
  })

  it('destroy(key) removes only that notice', async () => {
    vi.useFakeTimers()
    message.info({ content: 'a', key: 'a', duration: 0 })
    message.info({ content: 'b', key: 'b', duration: 0 })
    await flush()
    expect(document.querySelectorAll(NOTICE).length).toBe(2)
    message.destroy('a')
    vi.advanceTimersByTime(200)
    await flush()
    expect(document.querySelectorAll(NOTICE).length).toBe(1)
    expect(document.querySelector(NOTICE)!.textContent).toContain('b')
  })

  it('destroy() clears all notices', async () => {
    message.info({ content: 'a', duration: 0 })
    message.info({ content: 'b', duration: 0 })
    await flush()
    expect(document.querySelectorAll(NOTICE).length).toBe(2)
    message.destroy()
    await flush()
    expect(document.querySelectorAll(NOTICE).length).toBe(0)
  })

  it('config({ maxCount }) drops the oldest notice', async () => {
    vi.useFakeTimers()
    message.config({ maxCount: 2 })
    message.info({ content: 'a', duration: 0 })
    message.info({ content: 'b', duration: 0 })
    message.info({ content: 'c', duration: 0 })
    await flush()
    vi.advanceTimersByTime(200)
    await flush()
    const texts = [...document.querySelectorAll(NOTICE)].map((n) => n.textContent)
    expect(texts.length).toBe(2)
    expect(texts.some((t) => t?.includes('a'))).toBe(false)
    message.config({ maxCount: undefined })
  })

  it('config({ top }) sets container top offset', async () => {
    message.config({ top: 100 })
    message.info({ content: 'x', duration: 0 })
    await flush()
    const el = document.querySelector('.hmfw-message') as HTMLElement
    expect(el.style.top).toBe('100px')
    message.config({ top: 8 })
  })

  it('custom icon overrides the type icon', async () => {
    message.open({ content: 'custom', icon: () => h('i', { class: 'my-icon' }), duration: 0 })
    await flush()
    expect(document.querySelector('.my-icon')).not.toBeNull()
  })

  it('onClick fires when notice is clicked', async () => {
    const onClick = vi.fn()
    message.open({ content: 'clickme', onClick, duration: 0 })
    await flush()
    ;(document.querySelector(NOTICE) as HTMLElement).click()
    expect(onClick).toHaveBeenCalled()
  })

  it('renders VNode content', async () => {
    message.open({ content: h('span', { class: 'vnode-content' }, 'hi'), duration: 0 })
    await flush()
    expect(document.querySelector('.vnode-content')).not.toBeNull()
  })
})

const DEFAULT_DURATION_MS = 3000
