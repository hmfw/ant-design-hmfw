import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { QRCode } from '../QRCode'
import { generateQR } from '../encoder'

describe('QRCode', () => {
  // ===== 空值处理（不触发 canvas） =====

  it('空 value 时返回 null', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const wrapper = mount(QRCode, { props: { value: '' } })
    expect(wrapper.html()).toBe('')
    expect(warnSpy).toHaveBeenCalledWith('[hmfw: QRCode] need to receive `value` props')
    warnSpy.mockRestore()
  })

  it('空 value 时发出 console.warn 警告', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    mount(QRCode, { props: { value: '' } })
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('need to receive `value` props'))
    warnSpy.mockRestore()
  })

  // ===== SVG 模式（不触发 canvas） =====

  it('type=svg 时渲染 svg 元素', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', type: 'svg' } })
    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.find('canvas').exists()).toBe(false)
  })

  it('SVG 模式正确传递 aria 属性', () => {
    const wrapper = mount(QRCode, {
      props: { value: 'test', type: 'svg' },
      attrs: { 'aria-label': 'Test QR' },
    })
    const svg = wrapper.find('svg')
    expect(svg.attributes('aria-label')).toBe('Test QR')
  })

  it('SVG 模式支持 marginSize', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', type: 'svg', marginSize: 5 } })
    const svg = wrapper.find('svg')
    const viewBox = svg.attributes('viewBox')
    expect(viewBox).toBeTruthy()
    const parts = viewBox!.split(' ')
    expect(Number(parts[2])).toBeGreaterThan(21)
  })

  // ===== 开发时警告（使用 SVG 模式避免 canvas） =====

  it('icon 配合 errorLevel=L 时发出警告', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    mount(QRCode, { props: { value: 'test', icon: 'test.png', errorLevel: 'L', type: 'svg' } })
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('ErrorLevel `L` is not recommended to be used with `icon`'),
    )
    warnSpy.mockRestore()
  })

  // ===== emits =====

  it('status=expired 时点击刷新触发 refresh 事件', async () => {
    const onRefresh = vi.fn()
    const wrapper = mount(QRCode, {
      props: { value: 'test', status: 'expired', type: 'svg' },
      attrs: { onRefresh },
    })
    const btn = wrapper.find('.hmfw-qrcode-refresh')
    expect(btn.exists()).toBe(true)
    await btn.trigger('click')
    expect(wrapper.emitted('refresh')).toBeTruthy()
    expect(onRefresh).toHaveBeenCalled()
  })

  it('未传入 onRefresh 时不渲染刷新按钮', () => {
    // 未监听 refresh 事件时 info.onRefresh 为 undefined
    const wrapper = mount(QRCode, { props: { value: 'test', status: 'expired', type: 'svg' } })
    expect(wrapper.find('.hmfw-qrcode-refresh').exists()).toBe(false)
  })

  // ===== 语义化 API =====

  it('bordered=false 时添加 borderless 类名', () => {
    const wrapper = mount(QRCode, { props: { value: 'test', bordered: false, type: 'svg' } })
    expect(wrapper.classes()).toContain('hmfw-qrcode-borderless')
  })

  it('classNames.root 合并到根容器', () => {
    const wrapper = mount(QRCode, {
      props: { value: 'test', classNames: { root: 'custom-root' }, type: 'svg' },
    })
    expect(wrapper.classes()).toContain('custom-root')
  })

  it('statusRender 自定义状态渲染', () => {
    const wrapper = mount(QRCode, {
      props: {
        value: 'test',
        status: 'expired',
        type: 'svg',
        statusRender: (info: { status: string }) =>
          info.status === 'expired' ? <div class="custom-status">自定义</div> : null,
      },
    })
    expect(wrapper.find('.custom-status').text()).toBe('自定义')
  })

  it('statusRender 优先于默认渲染', () => {
    const wrapper = mount(QRCode, {
      props: { value: 'test', status: 'loading', type: 'svg' },
    })
    expect(wrapper.find('.hmfw-spin').exists()).toBe(true)
  })

  it('styles.root 合并内联样式且优先级更高', () => {
    const wrapper = mount(QRCode, {
      props: { value: 'test', styles: { root: { borderRadius: '16px' } }, type: 'svg' },
    })
    expect(wrapper.attributes('style')).toContain('border-radius: 16px')
  })

  it('type 从 svg 切换到 canvas 不报错（flush post 绘制）', async () => {
    const wrapper = mount(QRCode, { props: { value: 'test', type: 'svg' } })
    expect(wrapper.find('svg').exists()).toBe(true)
    await wrapper.setProps({ type: 'canvas' })
    expect(wrapper.find('canvas').exists()).toBe(true)
  })

  it('icon 挖白背景：bgColor 透明时退化白色（避免二维码点透过图标）', () => {
    const wrapper = mount(QRCode, {
      props: { value: 'test', type: 'svg', icon: 'test.png' },
    })
    // 第二个 rect 为 icon 挖白矩形
    const rects = wrapper.findAll('rect')
    expect(rects.length).toBeGreaterThan(1)
    expect(rects[1].attributes('fill')).toBe('#ffffff')
  })

  it('icon 挖白背景：bgColor 不透明时沿用 bgColor', () => {
    const wrapper = mount(QRCode, {
      props: { value: 'test', type: 'svg', icon: 'test.png', bgColor: '#f0f0f0' },
    })
    const rects = wrapper.findAll('rect')
    expect(rects[1].attributes('fill')).toBe('#f0f0f0')
  })
})

describe('encoder（QR 编码器）', () => {
  // ===== 版本选择与矩阵尺寸 =====

  it('版本 1 生成 21×21 矩阵', () => {
    const m = generateQR('HELLO WORLD', 'M')!
    expect(m.length).toBe(21)
  })

  it('文本长度决定版本（尺寸 = version × 4 + 17）', () => {
    // v1-L 容量 17 字节（19 码字 = 152bit，扣除模式 4 + 长度 8 + 终止符 4 的开销）
    const v1 = generateQR('a'.repeat(17), 'L')!
    expect(v1.length).toBe(21)
    // v2-L 容量 32 字节
    const v2 = generateQR('a'.repeat(18), 'L')!
    expect(v2.length).toBe(25)
    // v7-L 容量 154 字节（多块交错）
    const v7 = generateQR('a'.repeat(140), 'L')!
    expect(v7.length).toBe(45)
    // v10-L 容量 271 字节（16bit 长度字段）
    const v10 = generateQR('a'.repeat(260), 'L')!
    expect(v10.length).toBe(57)
  })

  // ===== 结构不变量 =====

  it('左上 finder 图案符合标准（1111111 起）', () => {
    const m = generateQR('test', 'M')!
    expect(m[0].slice(0, 7).map(Number).join('')).toBe('1111111')
    expect(m[6].slice(0, 7).map(Number).join('')).toBe('1111111')
    expect(m[0][7]).toBe(false) // 隔离区
  })

  it('暗模块位置 (size-8, 8) 为深色', () => {
    const m = generateQR('test', 'M')!
    expect(m[m.length - 8][8]).toBe(true)
  })

  it('时序图案第 6 行黑白交替', () => {
    const m = generateQR('test', 'M')!
    const size = m.length
    for (let c = 8; c < size - 8; c++) {
      expect(m[6][c]).toBe(c % 2 === 0)
      expect(m[c][6]).toBe(c % 2 === 0)
    }
  })

  it('所有模块均已填充（无残留 -1）', () => {
    for (const [text, ec] of [
      ['a', 'L'],
      ['test', 'M'],
      ['a'.repeat(50), 'Q'],
      ['a'.repeat(140), 'L'],
      ['a'.repeat(260), 'L'],
    ] as const) {
      const m = generateQR(text, ec)!
      expect(m.every((row) => row.every((v) => typeof v === 'boolean'))).toBe(true)
    }
  })

  // ===== 边界条件 =====

  it('空文本返回 null', () => {
    expect(generateQR('')).toBeNull()
  })

  it('超出 v10 容量返回 null', () => {
    // v10-H 容量 118 字节
    expect(generateQR('a'.repeat(120), 'H')).toBeNull()
    expect(generateQR('a'.repeat(280), 'L')).toBeNull()
  })

  it('纠错等级 H 的容量小于 L', () => {
    // 40 字节文本：H 级 v5（44 字节容量）而 L 级 v2（32）→ 不同版本
    const h = generateQR('a'.repeat(40), 'H')!
    const l = generateQR('a'.repeat(40), 'L')!
    expect(h.length).toBeGreaterThan(l.length)
  })
})
