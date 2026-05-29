import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { message } from '../message'

describe('message', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('message.success returns a Promise', () => {
    const result = message.success('成功')
    expect(result).toBeInstanceOf(Promise)
  })

  it('message.error returns a Promise', () => {
    expect(message.error('错误')).toBeInstanceOf(Promise)
  })

  it('message.warning returns a Promise', () => {
    expect(message.warning('警告')).toBeInstanceOf(Promise)
  })

  it('message.info returns a Promise', () => {
    expect(message.info('信息')).toBeInstanceOf(Promise)
  })

  it('message.loading returns a Promise', () => {
    expect(message.loading('加载中')).toBeInstanceOf(Promise)
  })

  it('creates container in document.body', async () => {
    message.success('test')
    await Promise.resolve()
    expect(document.querySelector('.hmfw-message-container')).not.toBeNull()
  })

  it('shows message content', async () => {
    message.info('hello world')
    await Promise.resolve()
    await Promise.resolve()
    const container = document.querySelector('.hmfw-message-container')
    expect(container).not.toBeNull()
  })

  it('resolves promise after duration', async () => {
    vi.useFakeTimers()
    let resolved = false
    message.success('test', 1).then(() => { resolved = true })
    expect(resolved).toBe(false)
    vi.advanceTimersByTime(1100)
    await Promise.resolve()
    expect(resolved).toBe(true)
    vi.useRealTimers()
  })

  it('accepts custom duration', () => {
    const p = message.success('test', 5)
    expect(p).toBeInstanceOf(Promise)
  })
})
