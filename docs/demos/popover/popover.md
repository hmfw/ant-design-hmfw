# Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用

- 当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现
- 和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等

## 代码演示

### 基础用法

最简单的用法，鼠标移入时显示。

<DemoBlock title="基础用法" :source="PopoverBasicSource">
  <PopoverBasic />
</DemoBlock>

### 触发方式

鼠标移入、聚集、点击。

<DemoBlock title="触发方式" :source="PopoverTriggerSource">
  <PopoverTrigger />
</DemoBlock>

### 十二个方向

位置有十二个方向。

<DemoBlock title="十二个方向" :source="PopoverPlacementSource">
  <PopoverPlacement />
</DemoBlock>

### 纯展示面板

`Popover._InternalPanelDoNotUseOrYouWillBeFired` 是内部使用的纯展示面板，仅渲染气泡卡片的外观（标题 + 内容 + 箭头），不含触发与定位逻辑，可直接内联到页面中。常规业务请使用 `Popover` 本身。

<DemoBlock title="纯展示面板" :source="PopoverPurePanelSource">
  <PopoverPurePanel />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对标题和内容做细粒度样式控制，支持函数形式动态计算。

<DemoBlock title="语义化 className 与 style" :source="PopoverClassNamesSource">
  <PopoverClassNames />
</DemoBlock>

## API

### Popover Props

| 参数               | 说明                                                                             | 类型                                                                                                                                                             | 默认值    |
| ------------------ | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| title              | 卡片标题（空值时不渲染浮层）                                                     | `string \| number \| VNode \| () => VNode \| slot`                                                                                                               | -         |
| content            | 卡片内容（与 title 同时为空时不渲染浮层）                                        | `string \| number \| VNode \| () => VNode \| slot`                                                                                                               | -         |
| trigger            | 触发行为                                                                         | `'hover' \| 'click' \| 'focus' \| 'contextMenu'`                                                                                                                 | `'hover'` |
| placement          | 气泡框位置，溢出视口时自动翻转                                                   | `'top' \| 'topLeft' \| 'topRight' \| 'bottom' \| 'bottomLeft' \| 'bottomRight' \| 'left' \| 'leftTop' \| 'leftBottom' \| 'right' \| 'rightTop' \| 'rightBottom'` | `'top'`   |
| open (v-model)     | 用于手动控制浮层显隐                                                             | `boolean`                                                                                                                                                        | -         |
| defaultOpen        | 默认是否显示（非受控）                                                           | `boolean`                                                                                                                                                        | `false`   |
| color              | 背景颜色                                                                         | `string`                                                                                                                                                         | -         |
| arrow              | 是否显示箭头，可对象配置                                                         | `boolean \| { pointAtCenter?: boolean }`                                                                                                                         | `true`    |
| mouseEnterDelay    | 鼠标移入后延时显示，单位秒                                                       | `number`                                                                                                                                                         | `0.1`     |
| mouseLeaveDelay    | 鼠标移出后延时隐藏，单位秒                                                       | `number`                                                                                                                                                         | `0.1`     |
| disabled           | 禁用 popover                                                                     | `boolean`                                                                                                                                                        | `false`   |
| autoAdjustOverflow | 浮层超出视口时自动翻转方向                                                       | `boolean`                                                                                                                                                        | `true`    |
| zIndex             | 自定义浮层 z-index                                                               | `number`                                                                                                                                                         | `1070`    |
| destroyOnHidden    | 隐藏时销毁浮层 DOM                                                               | `boolean`                                                                                                                                                        | `false`   |
| getPopupContainer  | 自定义浮层挂载容器（默认 `body`）                                                | `(triggerNode: HTMLElement) => HTMLElement`                                                                                                                      | -         |
| overlayStyle       | 卡片样式                                                                         | `Record<string, string>`                                                                                                                                         | -         |
| overlayInnerStyle  | 卡片内层样式                                                                     | `Record<string, string>`                                                                                                                                         | -         |
| classNames         | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `{ title?, content? } \| (info) => {...}`                                                                                                                        | -         |
| styles             | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `{ title?, content? } \| (info) => {...}`                                                                                                                        | -         |

### Popover Events

| 事件名          | 说明                      | 回调参数                  |
| --------------- | ------------------------- | ------------------------- |
| update:open     | 显示隐藏的回调（v-model） | `(open: boolean) => void` |
| openChange      | 显示隐藏的回调            | `(open: boolean) => void` |
| afterOpenChange | 浮层动画结束时触发        | `(open: boolean) => void` |

### Popover Slots

| 名称    | 说明                                 |
| ------- | ------------------------------------ |
| default | 触发气泡卡片的元素                   |
| content | 卡片内容（与 `content` prop 二选一） |
| title   | 卡片标题（与 `title` prop 二选一）   |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对气泡卡片的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
interface PopoverClassNames {
  title?: string // 标题区域
  content?: string // 内容区域
}

// 支持函数形式，动态计算
type PopoverClassNamesProp = PopoverClassNames | ((info: { props: PopoverProps }) => PopoverClassNames)

interface PopoverStyles {
  title?: Record<string, string> // 标题区域
  content?: Record<string, string> // 内容区域
}

// 支持函数形式，动态计算
type PopoverStylesProp = PopoverStyles | ((info: { props: PopoverProps }) => PopoverStyles)
```

### DOM 结构与 className 映射

```html
<!-- 浮层容器（Teleport 到 body） -->
<div class="hmfw-popover">
  <div class="hmfw-popover-content">
    <div class="hmfw-popover-arrow"></div>
    <div class="hmfw-popover-inner">
      <!-- 标题区域（当 title 存在时） -->
      <div class="hmfw-popover-title">
        <!-- ↑ classNames.title / styles.title 应用于此 -->
        标题文字
      </div>

      <!-- 内容区域 -->
      <div class="hmfw-popover-inner-content">
        <!-- ↑ classNames.content / styles.content 应用于此 -->
        内容文字
      </div>
    </div>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类。

```vue
<template>
  <!-- 自定义标题样式 -->
  <Popover title="提示标题" content="这是一段内容" :class-names="{ title: 'my-popover-title' }">
    <Button>鼠标移入</Button>
  </Popover>

  <!-- 自定义内容样式 -->
  <Popover title="通知" content="您有新的消息" :class-names="{ content: 'my-popover-content' }">
    <Button>点击查看</Button>
  </Popover>

  <!-- 组合使用 -->
  <Popover
    title="完整自定义"
    content="自定义标题和内容的样式"
    :class-names="{
      title: 'my-title',
      content: 'my-content',
    }"
  >
    <Button>完整示例</Button>
  </Popover>

  <!-- 函数形式（动态计算） -->
  <Popover
    :title="dynamicTitle"
    content="根据 props 动态计算样式"
    :class-names="
      (info) => ({
        title: info.props.title ? 'has-title' : 'no-title',
        content: 'dynamic-content',
      })
    "
  >
    <Button>动态样式</Button>
  </Popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Popover, Button } from 'ant-design-hmfw'

const dynamicTitle = ref('动态标题')
</script>

<style scoped>
:deep(.my-popover-title) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 16px;
  font-weight: bold;
  border-radius: 4px 4px 0 0;
}

:deep(.my-popover-content) {
  background: #f0f5ff;
  padding: 16px;
  font-size: 14px;
  color: #333;
}

:deep(.my-title) {
  color: #722ed1;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 2px solid #722ed1;
  padding-bottom: 8px;
}

:deep(.my-content) {
  color: #1890ff;
  line-height: 1.8;
}

:deep(.has-title) {
  background: #e6f7ff;
}

:deep(.dynamic-content) {
  font-style: italic;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式。

```vue
<template>
  <!-- 内联样式控制标题 -->
  <Popover
    title="提示标题"
    content="这是一段内容"
    :styles="{
      title: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '12px 16px',
        fontWeight: 'bold',
      },
    }"
  >
    <Button>鼠标移入</Button>
  </Popover>

  <!-- 内联样式控制内容 -->
  <Popover
    title="通知"
    content="您有新的消息"
    :styles="{
      content: {
        background: '#f0f5ff',
        padding: '16px',
        fontSize: '14px',
      },
    }"
  >
    <Button>点击查看</Button>
  </Popover>

  <!-- 组合使用 -->
  <Popover
    title="完整自定义"
    content="自定义标题和内容的样式"
    :styles="{
      title: {
        color: '#722ed1',
        fontSize: '16px',
        fontWeight: '600',
        borderBottom: '2px solid #722ed1',
        paddingBottom: '8px',
      },
      content: {
        color: '#1890ff',
        lineHeight: '1.8',
      },
    }"
  >
    <Button>完整示例</Button>
  </Popover>

  <!-- 函数形式（动态计算） -->
  <Popover
    :title="dynamicTitle"
    content="根据 props 动态计算样式"
    :styles="
      (info) => ({
        title: {
          background: info.props.title ? '#e6f7ff' : '#f5f5f5',
        },
        content: {
          fontStyle: 'italic',
        },
      })
    "
  >
    <Button>动态样式</Button>
  </Popover>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- 支持**函数形式**，可根据 `props` 动态计算样式：`(info: { props: PopoverProps }) => { ... }`
- `title` 样式仅在 `title` prop 或 slot 存在时生效
- `content` 样式会应用到内容容器，不影响外层的 `.hmfw-popover-inner`
- 浮层整体样式可通过 `overlayStyle` / `overlayInnerStyle` props 控制，`classNames` / `styles` 用于更细粒度的标题/内容控制
- Popover 浮层通过 Teleport 挂载到 `body`（或自定义容器），所以 scoped 样式需要使用 `:deep()` 穿透

## 设计 Token

Popover 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。
