import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { Statistic, Countdown } from '../index'

describe('Statistic', () => {
  describe('基础功能', () => {
    it('应该正确渲染基本的统计数值', () => {
      const wrapper = mount(Statistic, {
        props: {
          title: '用户数',
          value: 12345,
        },
      })

      expect(wrapper.find('.hmfw-statistic-title').text()).toBe('用户数')
      expect(wrapper.find('.hmfw-statistic-content-value').text()).toBe('12,345')
    })

    it('应该支持字符串数值', () => {
      const wrapper = mount(Statistic, {
        props: {
          value: '9876',
        },
      })

      expect(wrapper.find('.hmfw-statistic-content-value').text()).toBe('9,876')
    })

    it('应该支持 VNode 作为 title', () => {
      const wrapper = mount(Statistic, {
        props: {
          title: h('span', { class: 'custom-title' }, '自定义标题'),
          value: 100,
        },
      })

      expect(wrapper.find('.custom-title').exists()).toBe(true)
      expect(wrapper.find('.custom-title').text()).toBe('自定义标题')
    })
  })

  describe('数字格式化', () => {
    it('应该添加千分位分隔符', () => {
      const wrapper = mount(Statistic, {
        props: {
          value: 1234567890,
        },
      })

      expect(wrapper.find('.hmfw-statistic-content-value').text()).toBe('1,234,567,890')
    })

    it('应该支持精度控制', () => {
      const wrapper = mount(Statistic, {
        props: {
          value: 3.1415926,
          precision: 2,
        },
      })

      expect(wrapper.find('.hmfw-statistic-content-value').text()).toBe('3.14')
    })

    it('应该支持自定义分组分隔符', () => {
      const wrapper = mount(Statistic, {
        props: {
          value: 12345,
          groupSeparator: ' ',
        },
      })

      expect(wrapper.find('.hmfw-statistic-content-value').text()).toBe('12 345')
    })

    it('应该支持自定义小数点符号', () => {
      const wrapper = mount(Statistic, {
        props: {
          value: 3.14,
          decimalSeparator: ',',
        },
      })

      expect(wrapper.find('.hmfw-statistic-content-value').text()).toBe('3,14')
    })

    it('应该处理负数', () => {
      const wrapper = mount(Statistic, {
        props: {
          value: -12345,
        },
      })

      expect(wrapper.find('.hmfw-statistic-content-value').text()).toBe('-12,345')
    })

    it('应该处理零值', () => {
      const wrapper = mount(Statistic, {
        props: {
          value: 0,
        },
      })

      expect(wrapper.find('.hmfw-statistic-content-value').text()).toBe('0')
    })
  })

  describe('前缀和后缀', () => {
    it('应该支持字符串前缀', () => {
      const wrapper = mount(Statistic, {
        props: {
          value: 100,
          prefix: '$',
        },
      })

      expect(wrapper.find('.hmfw-statistic-content-prefix').text()).toBe('$')
    })

    it('应该支持字符串后缀', () => {
      const wrapper = mount(Statistic, {
        props: {
          value: 85,
          suffix: '%',
        },
      })

      expect(wrapper.find('.hmfw-statistic-content-suffix').text()).toBe('%')
    })

    it('应该同时支持前缀和后缀', () => {
      const wrapper = mount(Statistic, {
        props: {
          value: 100,
          prefix: '$',
          suffix: 'USD',
        },
      })

      expect(wrapper.find('.hmfw-statistic-content-prefix').text()).toBe('$')
      expect(wrapper.find('.hmfw-statistic-content-suffix').text()).toBe('USD')
    })

    it('应该支持 VNode 前缀和后缀', () => {
      const wrapper = mount(Statistic, {
        props: {
          value: 100,
          prefix: h('span', { class: 'prefix-icon' }, '↑'),
          suffix: h('span', { class: 'suffix-icon' }, '→'),
        },
      })

      expect(wrapper.find('.prefix-icon').exists()).toBe(true)
      expect(wrapper.find('.suffix-icon').exists()).toBe(true)
    })
  })

  describe('加载状态', () => {
    it('loading 为 true 时应该显示骨架屏', () => {
      const wrapper = mount(Statistic, {
        props: {
          title: '标题',
          value: 100,
          loading: true,
        },
      })

      expect(wrapper.find('.hmfw-skeleton').exists()).toBe(true)
      expect(wrapper.find('.hmfw-statistic-title').text()).toBe('标题')
    })

    it('loading 为 false 时应该显示正常内容', () => {
      const wrapper = mount(Statistic, {
        props: {
          value: 100,
          loading: false,
        },
      })

      expect(wrapper.find('.hmfw-skeleton').exists()).toBe(false)
      expect(wrapper.find('.hmfw-statistic-content-value').text()).toBe('100')
    })
  })

  describe('自定义渲染', () => {
    it('应该支持 valueRender', () => {
      const wrapper = mount(Statistic, {
        props: {
          value: 100,
          valueRender: (value: string) => h('span', { class: 'custom-value' }, `自定义: ${value}`),
        },
      })

      expect(wrapper.find('.custom-value').exists()).toBe(true)
      expect(wrapper.find('.custom-value').text()).toBe('自定义: 100')
    })
  })

  describe('样式', () => {
    it('应该应用自定义 valueStyle', () => {
      const wrapper = mount(Statistic, {
        props: {
          value: 100,
          valueStyle: { color: 'red', fontSize: '32px' },
        },
      })

      const content = wrapper.find('.hmfw-statistic-content')
      expect(content.attributes('style')).toContain('color: red')
      expect(content.attributes('style')).toContain('font-size: 32px')
    })
  })
})

describe('Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('基础功能', () => {
    it('应该正确渲染倒计时', () => {
      const targetTime = Date.now() + 60000 // 1分钟后
      const wrapper = mount(Countdown, {
        props: {
          value: targetTime,
          format: 'mm:ss',
        },
      })

      expect(wrapper.find('.hmfw-statistic-countdown').exists()).toBe(true)
      expect(wrapper.find('.hmfw-statistic-content-value').exists()).toBe(true)
    })

    it('应该支持 Date 对象', () => {
      const targetTime = new Date(Date.now() + 60000)
      const wrapper = mount(Countdown, {
        props: {
          value: targetTime,
        },
      })

      expect(wrapper.find('.hmfw-statistic-countdown').exists()).toBe(true)
    })
  })

  describe('时间格式化', () => {
    it('应该使用默认格式 HH:mm:ss', async () => {
      const targetTime = Date.now() + 3661000 // 1小时1分1秒
      const wrapper = mount(Countdown, {
        props: {
          value: targetTime,
        },
      })

      await wrapper.vm.$nextTick()
      const text = wrapper.find('.hmfw-statistic-content-value').text()
      expect(text).toMatch(/01:01:0[01]/) // 可能有1秒误差
    })

    it('应该支持自定义格式', async () => {
      const targetTime = Date.now() + 86400000 + 3661000 // 1天1小时1分1秒
      const wrapper = mount(Countdown, {
        props: {
          value: targetTime,
          format: 'DD天 HH:mm:ss',
        },
      })

      await wrapper.vm.$nextTick()
      const text = wrapper.find('.hmfw-statistic-content-value').text()
      expect(text).toContain('天')
    })

    it('应该支持毫秒格式', async () => {
      const targetTime = Date.now() + 5000
      const wrapper = mount(Countdown, {
        props: {
          value: targetTime,
          format: 's.SSS',
        },
      })

      await wrapper.vm.$nextTick()
      const text = wrapper.find('.hmfw-statistic-content-value').text()
      expect(text).toMatch(/\d+\.\d{3}/)
    })
  })

  describe('倒计时完成', () => {
    it('应该在倒计时结束时触发 onFinish', async () => {
      const onFinish = vi.fn()
      const targetTime = Date.now() + 100 // 100ms 后

      const wrapper = mount(Countdown, {
        props: {
          value: targetTime,
          onFinish,
        },
      })

      await wrapper.vm.$nextTick()

      // 快进时间
      vi.advanceTimersByTime(200)
      await wrapper.vm.$nextTick()

      expect(onFinish).toHaveBeenCalled()
    })

    it('倒计时结束后应该显示全零', async () => {
      const targetTime = Date.now() - 1000 // 已经过期
      const wrapper = mount(Countdown, {
        props: {
          value: targetTime,
          format: 'HH:mm:ss',
        },
      })

      await wrapper.vm.$nextTick()
      expect(wrapper.find('.hmfw-statistic-content-value').text()).toBe('00:00:00')
    })
  })

  describe('onChange 回调', () => {
    it('应该在时间变化时触发 onChange', async () => {
      const onChange = vi.fn()
      const targetTime = Date.now() + 5000

      const wrapper = mount(Countdown, {
        props: {
          value: targetTime,
          onChange,
        },
      })

      await wrapper.vm.$nextTick()

      // 推进时间让 requestAnimationFrame 执行
      vi.advanceTimersByTime(100)
      await wrapper.vm.$nextTick()

      // onChange 应该至少被调用一次
      expect(onChange).toHaveBeenCalled()
    })
  })

  describe('加载状态', () => {
    it('loading 为 true 时应该显示骨架屏', () => {
      const wrapper = mount(Countdown, {
        props: {
          title: '倒计时',
          value: Date.now() + 60000,
          loading: true,
        },
      })

      expect(wrapper.find('.hmfw-skeleton').exists()).toBe(true)
    })
  })

  describe('前缀后缀和标题', () => {
    it('应该支持 title、prefix 和 suffix', () => {
      const wrapper = mount(Countdown, {
        props: {
          title: '距离结束',
          value: Date.now() + 60000,
          prefix: '剩余',
          suffix: '时间',
        },
      })

      expect(wrapper.find('.hmfw-statistic-title').text()).toBe('距离结束')
      expect(wrapper.find('.hmfw-statistic-content-prefix').text()).toBe('剩余')
      expect(wrapper.find('.hmfw-statistic-content-suffix').text()).toBe('时间')
    })
  })

  describe('组件销毁', () => {
    it('应该在组件卸载时清理定时器', async () => {
      const wrapper = mount(Countdown, {
        props: {
          value: Date.now() + 60000,
        },
      })

      await wrapper.vm.$nextTick()

      // 卸载组件
      wrapper.unmount()

      // 不应该抛出错误
      vi.advanceTimersByTime(1000)
    })
  })
})
