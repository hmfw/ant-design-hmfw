import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { Progress } from '../Progress'

describe('Progress', () => {
  it('renders line progress', () => {
    const wrapper = mount(Progress, { props: { percent: 50 } })
    expect(wrapper.find('.hmfw-progress-line').exists()).toBe(true)
    expect(wrapper.find('.hmfw-progress-rail').exists()).toBe(true)
    expect(wrapper.find('.hmfw-progress-track').exists()).toBe(true)
  })

  it('shows percent text', () => {
    const wrapper = mount(Progress, { props: { percent: 60 } })
    expect(wrapper.find('.hmfw-progress-indicator').text()).toBe('60%')
  })

  it('hides info when showInfo=false', () => {
    const wrapper = mount(Progress, { props: { percent: 50, showInfo: false } })
    expect(wrapper.find('.hmfw-progress-indicator').exists()).toBe(false)
  })

  it('shows success status at 100%', () => {
    const wrapper = mount(Progress, { props: { percent: 100 } })
    expect(wrapper.classes()).toContain('hmfw-progress-status-success')
  })

  it('applies exception status', () => {
    const wrapper = mount(Progress, { props: { percent: 50, status: 'exception' } })
    expect(wrapper.classes()).toContain('hmfw-progress-status-exception')
  })

  it('renders circle type', () => {
    const wrapper = mount(Progress, { props: { percent: 75, type: 'circle' } })
    expect(wrapper.find('.hmfw-progress-circle').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.find('.hmfw-progress-circle-path').exists()).toBe(true)
  })

  it('renders dashboard type', () => {
    const wrapper = mount(Progress, { props: { percent: 75, type: 'dashboard' } })
    expect(wrapper.find('.hmfw-progress-circle').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('uses custom format', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, format: (p: number) => `${p} done` },
    })
    expect(wrapper.find('.hmfw-progress-indicator').text()).toBe('50 done')
  })

  it('supports strokeColor', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, strokeColor: '#ff0000' },
    })
    const track = wrapper.find('.hmfw-progress-track')
    expect(track.attributes('style')).toContain('background')
  })

  it('supports railColor', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, railColor: '#f0f0f0' },
    })
    const rail = wrapper.find('.hmfw-progress-rail')
    expect(rail.attributes('style')).toContain('background-color: rgb(240, 240, 240)')
  })

  it('supports strokeLinecap', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, type: 'circle', strokeLinecap: 'butt' },
    })
    const path = wrapper.find('.hmfw-progress-circle-path')
    expect(path.attributes('stroke-linecap')).toBe('butt')
  })

  it('supports success prop', () => {
    const wrapper = mount(Progress, {
      props: {
        percent: 60,
        success: { percent: 30, strokeColor: '#52c41a' },
      },
    })
    expect(wrapper.find('.hmfw-progress-track-success').exists()).toBe(true)
  })

  it('supports steps', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, steps: 5 },
    })
    expect(wrapper.find('.hmfw-progress-steps').exists()).toBe(true)
    expect(wrapper.findAll('.hmfw-progress-steps-item')).toHaveLength(5)
    expect(wrapper.findAll('.hmfw-progress-steps-item-active')).toHaveLength(3) // 50% of 5 = 2.5 rounded to 3
  })

  it('supports gapDegree for dashboard', () => {
    const wrapper = mount(Progress, {
      props: { percent: 75, type: 'dashboard', gapDegree: 90 },
    })
    expect(wrapper.find('.hmfw-progress-circle').exists()).toBe(true)
  })

  it('supports size as number', () => {
    const wrapper = mount(Progress, {
      props: { percent: 75, type: 'circle', size: 80 },
    })
    const body = wrapper.find('.hmfw-progress-body')
    expect(body.attributes('style')).toContain('width: 80px')
  })

  it('supports size as small', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, size: 'small' },
    })
    expect(wrapper.classes()).toContain('hmfw-progress-small')
  })

  it('supports percentPosition', () => {
    const wrapper = mount(Progress, {
      props: {
        percent: 50,
        percentPosition: { align: 'start', type: 'inner' },
      },
    })
    expect(wrapper.find('.hmfw-progress-indicator-start').exists()).toBe(true)
    expect(wrapper.find('.hmfw-progress-indicator-inner').exists()).toBe(true)
  })

  it('shows icon for success status', () => {
    const wrapper = mount(Progress, {
      props: { percent: 100, status: 'success' },
    })
    const indicator = wrapper.find('.hmfw-progress-indicator')
    expect(indicator.find('svg').exists()).toBe(true)
  })

  it('shows icon for exception status', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, status: 'exception' },
    })
    const indicator = wrapper.find('.hmfw-progress-indicator')
    expect(indicator.find('svg').exists()).toBe(true)
  })

  it('supports gradient strokeColor', () => {
    const wrapper = mount(Progress, {
      props: {
        percent: 50,
        strokeColor: { from: '#108ee9', to: '#87d068' },
      },
    })
    const track = wrapper.find('.hmfw-progress-track')
    expect(track.attributes('style')).toContain('linear-gradient')
  })

  it('validates percent range', () => {
    const wrapper1 = mount(Progress, { props: { percent: -10 } })
    expect(wrapper1.find('.hmfw-progress-track').attributes('style')).toContain('width: 0%')

    const wrapper2 = mount(Progress, { props: { percent: 150 } })
    expect(wrapper2.find('.hmfw-progress-track').attributes('style')).toContain('width: 100%')
  })

  it('supports active status animation', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, status: 'active' },
    })
    expect(wrapper.classes()).toContain('hmfw-progress-status-active')
  })

  it('renders aria attributes', () => {
    const wrapper = mount(Progress, { props: { percent: 75 } })
    expect(wrapper.attributes('role')).toBe('progressbar')
    expect(wrapper.attributes('aria-valuenow')).toBe('75')
    expect(wrapper.attributes('aria-valuemin')).toBe('0')
    expect(wrapper.attributes('aria-valuemax')).toBe('100')
  })

  // ===== v6 新增功能 =====

  it('passes through custom aria-label', () => {
    const wrapper = mount(Progress, { props: { percent: 50 }, attrs: { 'aria-label': '上传进度' } })
    expect(wrapper.attributes('aria-label')).toBe('上传进度')
  })

  it('clamps percent passed to format callback', () => {
    const wrapper = mount(Progress, {
      props: { percent: 150, format: (p?: number) => `clamped:${p}` },
    })
    expect(wrapper.find('.hmfw-progress-indicator').text()).toBe('clamped:100')

    const wrapper2 = mount(Progress, {
      props: { percent: -20, format: (p?: number) => `clamped:${p}` },
    })
    expect(wrapper2.find('.hmfw-progress-indicator').text()).toBe('clamped:0')
  })

  it('uses CheckCircleFilled for line success status', () => {
    const wrapper = mount(Progress, { props: { percent: 100 } })
    const indicator = wrapper.find('.hmfw-progress-indicator')
    expect(indicator.find('.hmfw-icon').exists()).toBe(true)
  })

  it('renders array strokeColor for steps', () => {
    const wrapper = mount(Progress, {
      props: { percent: 60, steps: 5, strokeColor: ['#f00', '#0f0', '#00f', '#ff0', '#f0f'] },
    })
    const items = wrapper.findAll('.hmfw-progress-steps-item-active')
    expect(items).toHaveLength(3)
    // 第一段红色
    expect(items[0].attributes('style')).toContain('background-color: rgb(255, 0, 0)')
    // 第二段绿色
    expect(items[1].attributes('style')).toContain('background-color: rgb(0, 255, 0)')
  })

  it('supports steps as object with count and gap', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, steps: { count: 4, gap: 6 } },
    })
    expect(wrapper.findAll('.hmfw-progress-steps-item')).toHaveLength(4)
    const body = wrapper.find('.hmfw-progress-steps-body')
    expect(body.attributes('style')).toContain('gap: 6px')
  })

  it('supports custom rounding for steps', () => {
    // ceil → 50% of 5 = 2.5 → 3
    const wrapper1 = mount(Progress, {
      props: { percent: 41, steps: 5, rounding: Math.ceil },
    })
    expect(wrapper1.findAll('.hmfw-progress-steps-item-active')).toHaveLength(3)
    // floor → 41% of 5 = 2.05 → 2
    const wrapper2 = mount(Progress, {
      props: { percent: 41, steps: 5, rounding: Math.floor },
    })
    expect(wrapper2.findAll('.hmfw-progress-steps-item-active')).toHaveLength(2)
  })

  it('supports gapPlacement (v6)', () => {
    const wrapper = mount(Progress, {
      props: { percent: 75, type: 'dashboard', gapPlacement: 'top' },
    })
    expect(wrapper.find('.hmfw-progress-circle').exists()).toBe(true)
  })

  it('renders linearGradient defs for circle gradient strokeColor', () => {
    const wrapper = mount(Progress, {
      props: {
        percent: 50,
        type: 'circle',
        strokeColor: { '0%': '#108ee9', '100%': '#87d068' },
      },
    })
    expect(wrapper.find('linearGradient').exists()).toBe(true)
    expect(wrapper.findAll('stop')).toHaveLength(2)
    // path 引用 url(#...)
    const path = wrapper.find('.hmfw-progress-circle-path')
    expect(path.attributes('stroke')).toMatch(/^url\(#/)
  })

  it('adds inline-circle class when circle size <= 20', () => {
    const wrapper = mount(Progress, { props: { percent: 50, type: 'circle', size: 14 } })
    expect(wrapper.classes()).toContain('hmfw-progress-inline-circle')
  })

  it('supports size as array for line', () => {
    const wrapper = mount(Progress, { props: { percent: 50, size: [200, 12] } })
    const body = wrapper.find('.hmfw-progress-body')
    expect(body.attributes('style')).toContain('width: 200px')
    const rail = wrapper.find('.hmfw-progress-rail')
    expect(rail.attributes('style')).toContain('height: 12px')
  })

  it('supports size as object for line', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, size: { width: 300, height: 10 } },
    })
    const body = wrapper.find('.hmfw-progress-body')
    expect(body.attributes('style')).toContain('width: 300px')
  })

  it('supports first array element of strokeColor for line (non-gradient)', () => {
    const wrapper = mount(Progress, {
      props: { percent: 50, strokeColor: ['#ff0000', '#00ff00'] },
    })
    const track = wrapper.find('.hmfw-progress-track')
    expect(track.attributes('style')).toContain('background')
    expect(track.attributes('style')).toContain('255, 0, 0')
  })

  it('supports semantic classNames.root', () => {
    const wrapper = mount(Progress, { props: { percent: 50, classNames: { root: 'custom-root' } } })
    expect(wrapper.classes()).toContain('custom-root')
  })

  it('supports semantic classNames slot', () => {
    const wrapper = mount(Progress, {
      props: {
        percent: 50,
        classNames: {
          root: 'sem-root',
          body: 'sem-body',
          rail: 'sem-rail',
          track: 'sem-track',
          indicator: 'sem-indicator',
        },
      },
    })
    expect(wrapper.classes()).toContain('sem-root')
    expect(wrapper.find('.sem-body').exists()).toBe(true)
    expect(wrapper.find('.sem-rail').exists()).toBe(true)
    expect(wrapper.find('.sem-track').exists()).toBe(true)
    expect(wrapper.find('.sem-indicator').exists()).toBe(true)
  })

  it('supports semantic styles slot', () => {
    const wrapper = mount(Progress, {
      props: {
        percent: 50,
        styles: {
          rail: { boxShadow: '0 0 4px red' },
          indicator: { color: 'rgb(120, 80, 200)' },
        },
      },
    })
    expect(wrapper.find('.hmfw-progress-rail').attributes('style')).toContain('box-shadow')
    expect(wrapper.find('.hmfw-progress-indicator').attributes('style')).toContain('rgb(120, 80, 200)')
  })

  it('adds title attribute for string indicator content', () => {
    const wrapper = mount(Progress, { props: { percent: 60 } })
    expect(wrapper.find('.hmfw-progress-indicator').attributes('title')).toBe('60%')
  })

  it('renders VNode format return', () => {
    const wrapper = mount(Progress, {
      props: {
        percent: 50,
        format: () => h('strong', { class: 'fmt-strong' }, 'done'),
      },
    })
    expect(wrapper.find('.hmfw-progress-indicator .fmt-strong').exists()).toBe(true)
  })

  it('treats size="medium" same as default', () => {
    const wrapper = mount(Progress, { props: { percent: 50, size: 'medium' } })
    // medium 等价 default：rail 高度 8px
    expect(wrapper.find('.hmfw-progress-rail').attributes('style')).toContain('height: 8px')
  })

  it('marks indicator-bright when inner + bright color', () => {
    const wrapper = mount(Progress, {
      props: {
        percent: 50,
        strokeColor: '#ffffff',
        percentPosition: { type: 'inner', align: 'center' },
      },
    })
    expect(wrapper.find('.hmfw-progress-indicator-bright').exists()).toBe(true)
  })

  it('does not mark indicator-bright with dark color', () => {
    const wrapper = mount(Progress, {
      props: {
        percent: 50,
        strokeColor: '#1677ff',
        percentPosition: { type: 'inner', align: 'center' },
      },
    })
    expect(wrapper.find('.hmfw-progress-indicator-bright').exists()).toBe(false)
  })

  // ===== 仪表盘/圆形 渐变色修复 =====

  it('renders gradient defs for dashboard type with userSpaceOnUse', () => {
    const wrapper = mount(Progress, {
      props: {
        percent: 60,
        type: 'dashboard',
        strokeColor: { '0%': '#108ee9', '100%': '#87d068' },
      },
    })
    const grad = wrapper.find('linearGradient')
    expect(grad.exists()).toBe(true)
    // 使用 userSpaceOnUse，保证渐变在屏幕空间内可控
    expect(grad.attributes('gradientUnits')).toBe('userSpaceOnUse')
    // gradientTransform 抵消 path 的 rotate
    expect(grad.attributes('gradientTransform')).toMatch(/^rotate\(/)
    const path = wrapper.find('.hmfw-progress-circle-path')
    expect(path.attributes('stroke')).toMatch(/^url\(#/)
  })

  it('sorts gradient stops numerically (out-of-order keys)', () => {
    const wrapper = mount(Progress, {
      props: {
        percent: 50,
        type: 'circle',
        strokeColor: { '100%': '#ffcb00', '0%': '#108ee9', '50%': '#87d068' },
      },
    })
    const stops = wrapper.findAll('stop')
    expect(stops).toHaveLength(3)
    expect(stops[0].attributes('offset')).toBe('0%')
    expect(stops[1].attributes('offset')).toBe('50%')
    expect(stops[2].attributes('offset')).toBe('100%')
  })

  it('maps from/to gradient to 0%/100% stops for circle', () => {
    const wrapper = mount(Progress, {
      props: {
        percent: 50,
        type: 'circle',
        strokeColor: { from: '#108ee9', to: '#87d068' },
      },
    })
    const stops = wrapper.findAll('stop')
    expect(stops).toHaveLength(2)
    expect(stops[0].attributes('offset')).toBe('0%')
    expect(stops[0].attributes('stop-color')).toBe('#108ee9')
    expect(stops[1].attributes('offset')).toBe('100%')
    expect(stops[1].attributes('stop-color')).toBe('#87d068')
  })

  it('keeps gradient id stable across re-renders', async () => {
    const wrapper = mount(Progress, {
      props: {
        percent: 30,
        type: 'circle',
        strokeColor: { from: '#108ee9', to: '#87d068' },
      },
    })
    const idBefore = wrapper.find('linearGradient').attributes('id')
    const strokeBefore = wrapper.find('.hmfw-progress-circle-path').attributes('stroke')
    await wrapper.setProps({ percent: 80 })
    expect(wrapper.find('linearGradient').attributes('id')).toBe(idBefore)
    expect(wrapper.find('.hmfw-progress-circle-path').attributes('stroke')).toBe(strokeBefore)
  })

  it('gives different gradient ids to different instances', () => {
    const w1 = mount(Progress, {
      props: { percent: 50, type: 'circle', strokeColor: { from: '#000', to: '#fff' } },
    })
    const w2 = mount(Progress, {
      props: { percent: 50, type: 'circle', strokeColor: { from: '#000', to: '#fff' } },
    })
    expect(w1.find('linearGradient').attributes('id')).not.toBe(w2.find('linearGradient').attributes('id'))
  })

  it('reverses gradient direction for RTL circle', async () => {
    const { ConfigProvider } = await import('../../config-provider')
    const wrapper = mount({
      components: { ConfigProvider, Progress },
      template: `<ConfigProvider direction="rtl"><Progress :percent="50" type="circle" :stroke-color="{ from: '#000', to: '#fff' }" /></ConfigProvider>`,
    })
    const grad = wrapper.find('linearGradient')
    // RTL 下起点在右侧（x1 = size），终点在左侧（x2 = 0）
    expect(Number(grad.attributes('x1'))).toBeGreaterThan(Number(grad.attributes('x2')))
  })
})
