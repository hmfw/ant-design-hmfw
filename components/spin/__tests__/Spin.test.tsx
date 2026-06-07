import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { nextTick, h, ref } from 'vue'
import { Spin } from '../Spin'

describe('Spin', () => {
  it('renders spinning indicator by default', () => {
    const wrapper = mount(Spin)
    expect(wrapper.find('.hmfw-spin-dot').exists()).toBe(true)
  })

  it('shows tip text', () => {
    const wrapper = mount(Spin, { props: { tip: 'Loading...' } })
    expect(wrapper.find('.hmfw-spin-description').text()).toBe('Loading...')
  })

  it('applies small size class', () => {
    const wrapper = mount(Spin, { props: { size: 'small' } })
    expect(wrapper.find('.hmfw-spin').classes()).toContain('hmfw-spin-sm')
  })

  it('applies large size class', () => {
    const wrapper = mount(Spin, { props: { size: 'large' } })
    expect(wrapper.find('.hmfw-spin').classes()).toContain('hmfw-spin-lg')
  })

  it('wraps children in nested loading', () => {
    const wrapper = mount(Spin, { slots: { default: '<div class="content">Content</div>' } })
    expect(wrapper.find('.hmfw-spin-nested-loading').exists()).toBe(true)
    expect(wrapper.find('.content').exists()).toBe(true)
  })

  it('hides overlay when spinning=false', () => {
    const wrapper = mount(Spin, {
      props: { spinning: false },
      slots: { default: '<div>Content</div>' },
    })
    expect(wrapper.find('.hmfw-spin-container').exists()).toBe(false)
  })

  it('renders custom indicator slot', () => {
    const wrapper = mount(Spin, {
      slots: { indicator: '<span class="my-spinner">loading</span>' },
    })
    expect(wrapper.find('.hmfw-spin-dot .my-spinner').exists()).toBe(true)
    // 默认四点指示器不应渲染
    expect(wrapper.find('.hmfw-spin-dot-item').exists()).toBe(false)
  })

  it('description acts as tip alias', () => {
    const wrapper = mount(Spin, { props: { description: 'Please wait' } })
    expect(wrapper.find('.hmfw-spin-description').text()).toBe('Please wait')
  })

  it('renders fullscreen mode', () => {
    const wrapper = mount(Spin, { props: { fullscreen: true } })
    expect(wrapper.find('.hmfw-spin-fullscreen').exists()).toBe(true)
    expect(wrapper.find('.hmfw-spin-fullscreen').classes()).toContain('hmfw-spin-fullscreen-show')
  })

  it('sets aria-busy on indicator', () => {
    const wrapper = mount(Spin)
    expect(wrapper.find('.hmfw-spin').attributes('aria-busy')).toBe('true')
  })

  it('delays showing spinner when delay is set', async () => {
    vi.useFakeTimers()
    const wrapper = mount(Spin, {
      props: { spinning: false, delay: 200 },
      slots: { default: '<div>Content</div>' },
    })
    // 初始未转
    expect(wrapper.find('.hmfw-spin-container').exists()).toBe(false)
    await wrapper.setProps({ spinning: true })
    // delay 未到，还不显示
    expect(wrapper.find('.hmfw-spin-container').exists()).toBe(false)
    vi.advanceTimersByTime(200)
    await nextTick()
    expect(wrapper.find('.hmfw-spin-container').exists()).toBe(true)
    vi.useRealTimers()
  })

  it('delays on mount when spinning=true + delay set (bug fix)', async () => {
    vi.useFakeTimers()
    const wrapper = mount(Spin, {
      props: { spinning: true, delay: 200 },
      slots: { default: '<div>Content</div>' },
    })
    // 挂载即带 delay，初始不应显示
    expect(wrapper.find('.hmfw-spin-container').exists()).toBe(false)
    vi.advanceTimersByTime(200)
    await nextTick()
    // delay 到点后显示
    expect(wrapper.find('.hmfw-spin-container').exists()).toBe(true)
    vi.useRealTimers()
  })

  it('wraps default dot in dot-holder', () => {
    const wrapper = mount(Spin)
    expect(wrapper.find('.hmfw-spin-dot-holder').exists()).toBe(true)
    expect(wrapper.find('.hmfw-spin-dot-holder .hmfw-spin-dot-spin').exists()).toBe(true)
    expect(wrapper.findAll('.hmfw-spin-dot-item')).toHaveLength(4)
  })

  it('renders circular progress when percent is set', () => {
    const wrapper = mount(Spin, { props: { percent: 50 } })
    const progress = wrapper.find('.hmfw-spin-dot-progress')
    expect(progress.exists()).toBe(true)
    const bar = wrapper.find('[role="progressbar"]')
    expect(bar.attributes('aria-valuenow')).toBe('50')
    // percent>0 时四点 holder 被隐藏
    expect(wrapper.find('.hmfw-spin-dot-holder-hidden').exists()).toBe(true)
  })

  it('does not render progress when percent is 0 or undefined', () => {
    const wrapper = mount(Spin, { props: { percent: 0 } })
    expect(wrapper.find('.hmfw-spin-dot-progress').exists()).toBe(false)
    const wrapper2 = mount(Spin)
    expect(wrapper2.find('.hmfw-spin-dot-progress').exists()).toBe(false)
  })

  it('clamps percent into [0,100] for aria-valuenow', () => {
    const wrapper = mount(Spin, { props: { percent: 150 } })
    expect(wrapper.find('[role="progressbar"]').attributes('aria-valuenow')).toBe('100')
  })

  it('auto percent increments over time', async () => {
    vi.useFakeTimers()
    const wrapper = mount(Spin, { props: { percent: 'auto' } })
    // 初始 0，无进度
    expect(wrapper.find('.hmfw-spin-dot-progress').exists()).toBe(false)
    vi.advanceTimersByTime(200)
    await nextTick()
    // 一个 tick 后 percent 应 > 0
    expect(wrapper.find('.hmfw-spin-dot-progress').exists()).toBe(true)
    const now = Number(wrapper.find('[role="progressbar"]').attributes('aria-valuenow'))
    expect(now).toBeGreaterThan(0)
    vi.useRealTimers()
  })

  it('exposes percent to indicator slot', () => {
    const wrapper = mount(Spin, {
      props: { percent: 42 },
      slots: {
        indicator: (params: { percent?: number }) =>
          h('span', { class: 'my-pct' }, String(params?.percent)),
      },
    })
    expect(wrapper.find('.my-pct').text()).toBe('42')
  })

  // ======================= 自定义 indicator 尺寸自适应 =======================
  it('custom indicator wrapper adapts to size=small', () => {
    const wrapper = mount(Spin, {
      props: { size: 'small' },
      slots: {
        indicator: () => h('span', { class: 'custom-icon' }, 'X'),
      },
    })
    const dot = wrapper.find('.hmfw-spin-dot')
    expect(dot.exists()).toBe(true)
    // small 对应 14px
    expect(dot.attributes('style')).toContain('width: 14px')
    expect(dot.attributes('style')).toContain('height: 14px')
    expect(dot.attributes('style')).toContain('font-size: 14px')
  })

  it('custom indicator wrapper adapts to size=large', () => {
    const wrapper = mount(Spin, {
      props: { size: 'large' },
      slots: {
        indicator: () => h('span', { class: 'custom-icon' }, 'X'),
      },
    })
    const dot = wrapper.find('.hmfw-spin-dot')
    expect(dot.exists()).toBe(true)
    // large 对应 32px
    expect(dot.attributes('style')).toContain('width: 32px')
    expect(dot.attributes('style')).toContain('height: 32px')
    expect(dot.attributes('style')).toContain('font-size: 32px')
  })

  it('custom indicator wrapper uses default size (20px) when size is not set', () => {
    const wrapper = mount(Spin, {
      slots: {
        indicator: () => h('span', { class: 'custom-icon' }, 'X'),
      },
    })
    const dot = wrapper.find('.hmfw-spin-dot')
    expect(dot.attributes('style')).toContain('width: 20px')
    expect(dot.attributes('style')).toContain('height: 20px')
  })

  // ======================= delay 计时逻辑修复 =======================
  it('delay timer does not fire before mount (onMounted timing)', async () => {
    vi.useFakeTimers()
    const wrapper = mount(Spin, {
      props: { spinning: true, delay: 100 },
      slots: { default: '<div>Content</div>' },
    })
    // 挂载后 delay 计时开始，但还未到时
    expect(wrapper.find('.hmfw-spin-container').exists()).toBe(false)
    // 推进 100ms，delay 到期
    vi.advanceTimersByTime(100)
    await nextTick()
    expect(wrapper.find('.hmfw-spin-container').exists()).toBe(true)
    vi.useRealTimers()
  })

  it('delay timer is immediately cleared when spinning changes to false', async () => {
    vi.useFakeTimers()
    const wrapper = mount(Spin, {
      props: { spinning: true, delay: 300 },
      slots: { default: '<div>Content</div>' },
    })
    // 未到 delay，不显示
    expect(wrapper.find('.hmfw-spin-container').exists()).toBe(false)
    // 推进 100ms（尚在 delay 内）
    vi.advanceTimersByTime(100)
    await nextTick()
    expect(wrapper.find('.hmfw-spin-container').exists()).toBe(false)
    // spinning 改为 false，应立即清空 timer
    await wrapper.setProps({ spinning: false })
    await nextTick()
    // 即使再推进 300ms 也不会显示
    vi.advanceTimersByTime(300)
    await nextTick()
    expect(wrapper.find('.hmfw-spin-container').exists()).toBe(false)
    vi.useRealTimers()
  })

  // ======================= fullscreen 全屏模式 =======================
  it('fullscreen mode uses fixed positioning with mask', () => {
    const wrapper = mount(Spin, { props: { fullscreen: true } })
    const fullscreenEl = wrapper.find('.hmfw-spin-fullscreen')
    expect(fullscreenEl.exists()).toBe(true)
    expect(fullscreenEl.classes()).toContain('hmfw-spin-fullscreen-show')
  })

  it('fullscreen mode hides when spinning=false', () => {
    const wrapper = mount(Spin, { props: { fullscreen: true, spinning: false } })
    const fullscreenEl = wrapper.find('.hmfw-spin-fullscreen')
    expect(fullscreenEl.exists()).toBe(true)
    // 不应有 show 类
    expect(fullscreenEl.classes()).not.toContain('hmfw-spin-fullscreen-show')
  })

  it('fullscreen mode does not render nested-loading wrapper', () => {
    const wrapper = mount(Spin, { props: { fullscreen: true } })
    expect(wrapper.find('.hmfw-spin-nested-loading').exists()).toBe(false)
  })
})
