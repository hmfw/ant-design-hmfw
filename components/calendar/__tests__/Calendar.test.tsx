import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Calendar } from '../Calendar'

describe('Calendar', () => {
  it('应该正确渲染', () => {
    const wrapper = mount(Calendar)
    expect(wrapper.find('.hmfw-calendar').exists()).toBe(true)
  })

  it('应该支持 fullscreen 属性', () => {
    const wrapper = mount(Calendar, {
      props: { fullscreen: true },
    })
    expect(wrapper.find('.hmfw-calendar-fullscreen').exists()).toBe(true)

    const wrapper2 = mount(Calendar, {
      props: { fullscreen: false },
    })
    expect(wrapper2.find('.hmfw-calendar-mini').exists()).toBe(true)
  })

  it('应该支持 mode 切换', () => {
    const wrapper = mount(Calendar, {
      props: { mode: 'year' },
    })
    expect(wrapper.find('.hmfw-calendar-year-panel').exists()).toBe(true)
  })

  it('应该支持日期选择', async () => {
    const wrapper = mount(Calendar)
    const cell = wrapper.find('.hmfw-calendar-cell-in-view')

    await cell.trigger('click')

    expect(wrapper.emitted('select')).toBeTruthy()
    expect(wrapper.emitted('change')).toBeTruthy()
  })

  it('应该支持 disabledDate', () => {
    const disabledDate = (date: Date) => date.getDate() > 15
    const wrapper = mount(Calendar, {
      props: { disabledDate },
    })

    const disabledCells = wrapper.findAll('.hmfw-calendar-cell-disabled')
    expect(disabledCells.length).toBeGreaterThan(0)
  })

  it('应该支持受控模式', async () => {
    const wrapper = mount(Calendar, {
      props: {
        value: '2024-01-15',
      },
    })

    expect(wrapper.find('.hmfw-calendar-cell-selected').exists()).toBe(true)
  })

  it('应该支持 cellRender 自定义渲染', () => {
    const cellRender = (current: Date) => {
      return <div class="custom-cell">{current.getDate()}</div>
    }

    const wrapper = mount(Calendar, {
      props: { cellRender },
    })

    expect(wrapper.find('.custom-cell').exists()).toBe(true)
  })

  describe('范围选择模式', () => {
    it('应该支持范围选择', async () => {
      const wrapper = mount(Calendar, {
        props: { range: true },
      })

      const cells = wrapper.findAll('.hmfw-calendar-cell-in-view')

      // 选择开始日期
      await cells[5].trigger('click')
      expect(wrapper.find('.hmfw-calendar-cell-range-start').exists()).toBe(true)

      // 选择结束日期
      await cells[10].trigger('click')
      expect(wrapper.find('.hmfw-calendar-cell-range-end').exists()).toBe(true)
      expect(wrapper.findAll('.hmfw-calendar-cell-in-range').length).toBeGreaterThan(0)
    })

    it('应该触发 rangeChange 事件', async () => {
      const wrapper = mount(Calendar, {
        props: { range: true },
      })

      const cells = wrapper.findAll('.hmfw-calendar-cell-in-view')

      await cells[5].trigger('click')
      await cells[10].trigger('click')

      expect(wrapper.emitted('rangeChange')).toBeTruthy()
      expect(wrapper.emitted('update:rangeValue')).toBeTruthy()
    })

    it('应该自动调整顺序（end < start）', async () => {
      const wrapper = mount(Calendar, {
        props: { range: true },
      })

      const cells = wrapper.findAll('.hmfw-calendar-cell-in-view')

      // 先选择较晚的日期
      await cells[10].trigger('click')
      // 再选择较早的日期
      await cells[5].trigger('click')

      const emitted = wrapper.emitted('rangeChange') as any[]
      expect(emitted).toBeTruthy()
      // 验证范围顺序已调整
      const [rangeStr, range] = emitted[0]
      expect(range[0].getTime()).toBeLessThanOrEqual(range[1].getTime())
    })

    it('应该支持受控的范围选择', async () => {
      const start = new Date(2024, 0, 5)
      const end = new Date(2024, 0, 10)

      const wrapper = mount(Calendar, {
        props: {
          range: true,
          rangeValue: [start, end],
          value: '2024-01-05', // 设置日历显示的月份
        },
      })

      // 等待组件渲染
      await wrapper.vm.$nextTick()

      expect(wrapper.find('.hmfw-calendar-cell-range-start').exists()).toBe(true)
      expect(wrapper.find('.hmfw-calendar-cell-range-end').exists()).toBe(true)
      expect(wrapper.findAll('.hmfw-calendar-cell-in-range').length).toBeGreaterThan(0)
    })
  })
})
