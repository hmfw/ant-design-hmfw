import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Splitter from '../Splitter'
import Panel from '../Panel'

// Mock ResizeObserver
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('Splitter', () => {
  beforeEach(() => {
    global.ResizeObserver = ResizeObserverMock as any
    // jsdom 中元素尺寸默认为 0，mock 出容器尺寸使折叠/拖拽逻辑可生效
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      configurable: true,
      get: () => 800,
    })
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      get: () => 600,
    })
  })

  it('应该正确渲染', () => {
    const wrapper = mount({
      render() {
        return (
          <Splitter>
            <Panel>第一个面板</Panel>
            <Panel>第二个面板</Panel>
          </Splitter>
        )
      },
    })
    expect(wrapper.find('.hmfw-splitter').exists()).toBe(true)
  })

  it('应该支持垂直方向', () => {
    const wrapper = mount({
      render() {
        return (
          <Splitter orientation="vertical">
            <Panel>第一个面板</Panel>
            <Panel>第二个面板</Panel>
          </Splitter>
        )
      },
    })
    expect(wrapper.find('.hmfw-splitter-vertical').exists()).toBe(true)
  })

  it('应该渲染分隔栏', () => {
    const wrapper = mount({
      render() {
        return (
          <Splitter>
            <Panel>第一个面板</Panel>
            <Panel>第二个面板</Panel>
          </Splitter>
        )
      },
    })
    expect(wrapper.find('.hmfw-splitter-bar').exists()).toBe(true)
    expect(wrapper.find('.hmfw-splitter-bar-dragger').exists()).toBe(true)
  })

  it('应该支持折叠功能', async () => {
    let collapsedStates: boolean[] = []
    const wrapper = mount({
      render() {
        return (
          <Splitter
            onCollapse={(collapsed) => {
              collapsedStates = collapsed
            }}
          >
            <Panel collapsible>第一个面板</Panel>
            <Panel>第二个面板</Panel>
          </Splitter>
        )
      },
    })

    await wrapper.vm.$nextTick()

    // 容器有尺寸且面板未折叠时，折叠按钮应渲染
    const collapseBar = wrapper.find('.hmfw-splitter-bar-collapse-bar')
    expect(collapseBar.exists()).toBe(true)

    // 点击折叠按钮触发 onCollapse，第一个面板折叠
    await collapseBar.trigger('click')
    await wrapper.vm.$nextTick()

    expect(collapsedStates.length).toBe(2)
    expect(collapsedStates[0]).toBe(true)
    expect(collapsedStates[1]).toBe(false)

    // 折叠后面板隐藏类生效
    const panels = wrapper.findAll('.hmfw-splitter-panel')
    expect(panels[0].classes()).toContain('hmfw-splitter-panel-hidden')

    // 再次点击恢复展开
    await collapseBar.trigger('click')
    await wrapper.vm.$nextTick()
    expect(collapsedStates[0]).toBe(false)
  })

  it('应该支持禁用调整大小', () => {
    const wrapper = mount({
      render() {
        return (
          <Splitter>
            <Panel resizable={false}>第一个面板</Panel>
            <Panel>第二个面板</Panel>
          </Splitter>
        )
      },
    })
    expect(wrapper.find('.hmfw-splitter-bar-dragger-disabled').exists()).toBe(true)
  })

  it('应该支持自定义类名', () => {
    const wrapper = mount({
      render() {
        return (
          <Splitter classNames={{ root: 'custom-splitter', panel: 'custom-panel' }}>
            <Panel>第一个面板</Panel>
            <Panel>第二个面板</Panel>
          </Splitter>
        )
      },
    })
    expect(wrapper.find('.custom-splitter').exists()).toBe(true)
  })

  it('应该触发 onResize 回调', async () => {
    let resizeSizes: number[] = []
    let resizeEndSizes: number[] = []
    const wrapper = mount({
      render() {
        return (
          <Splitter
            onResize={(sizes) => {
              resizeSizes = sizes
            }}
            onResizeEnd={(sizes) => {
              resizeEndSizes = sizes
            }}
          >
            <Panel>第一个面板</Panel>
            <Panel>第二个面板</Panel>
          </Splitter>
        )
      },
    })

    // 等待容器尺寸测量与渲染完成
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    // jsdom 的 MouseEvent 构造器不接受 pageX 入参，用 defineProperty 注入坐标
    const makeMouseEvent = (type: string, pageX: number, pageY: number) => {
      const event = new MouseEvent(type)
      Object.defineProperty(event, 'pageX', { value: pageX })
      Object.defineProperty(event, 'pageY', { value: pageY })
      return event
    }

    // 模拟拖拽：按下 → 移动 → 松开
    const dragger = wrapper.find('.hmfw-splitter-bar-dragger')
    await dragger.element.dispatchEvent(makeMouseEvent('mousedown', 100, 100))
    // 等 startPos watcher 注册 window 监听
    await wrapper.vm.$nextTick()
    await window.dispatchEvent(makeMouseEvent('mousemove', 200, 100))
    await window.dispatchEvent(makeMouseEvent('mouseup', 200, 100))

    // 拖动 +100px 后 onResize 回调应收到两个面板的新尺寸
    expect(resizeSizes.length).toBe(2)
    expect(resizeSizes[0]).toBeGreaterThan(resizeSizes[1])
    expect(resizeEndSizes.length).toBe(2)
  })

  it('根级 class 不应泄漏到面板', async () => {
    const wrapper = mount({
      render() {
        return (
          <Splitter class="root-custom">
            <Panel>第一个面板</Panel>
            <Panel>第二个面板</Panel>
          </Splitter>
        )
      },
    })
    await wrapper.vm.$nextTick()

    // 根节点有自定义类
    expect(wrapper.find('.root-custom').exists()).toBe(true)

    // 面板不应带有根级自定义类
    const panels = wrapper.findAll('.hmfw-splitter-panel')
    expect(panels.length).toBe(2)
    for (const panel of panels) {
      expect(panel.classes()).not.toContain('root-custom')
    }
  })

  it('Panel 自身 class 应传递到面板节点', async () => {
    const wrapper = mount({
      render() {
        return (
          <Splitter>
            <Panel class="panel-custom">第一个面板</Panel>
            <Panel>第二个面板</Panel>
          </Splitter>
        )
      },
    })
    await wrapper.vm.$nextTick()

    const panel = wrapper.find('.hmfw-splitter-panel')
    expect(panel.classes()).toContain('panel-custom')
  })

  it('classNames.dragger 字符串形式应转换为 default 类', async () => {
    const wrapper = mount({
      render() {
        return (
          <Splitter classNames={{ dragger: 'custom-dragger' }}>
            <Panel>第一个面板</Panel>
            <Panel>第二个面板</Panel>
          </Splitter>
        )
      },
    })
    await wrapper.vm.$nextTick()

    const dragger = wrapper.find('.hmfw-splitter-bar-dragger')
    expect(dragger.classes()).toContain('custom-dragger')
  })
})
