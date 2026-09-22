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

### Slot 语法

使用 `title` 和 `content` slot 传入富内容，如图标、按钮、链接等交互元素。

<DemoBlock title="Slot 语法" :source="PopoverSlotSource">
  <PopoverSlot />
</DemoBlock>

### 受控模式

通过 `v-model:open` 手动控制显隐，监听 `openChange` 事件获取显隐状态变化。

<DemoBlock title="受控模式" :source="PopoverControlledSource">
  <PopoverControlled />
</DemoBlock>

### 属性配置

演示 `disabled`、`arrow`、`destroyOnHidden`、`mouseEnterDelay` 等布尔属性和延迟配置。

<DemoBlock title="属性配置" :source="PopoverPropsSource">
  <PopoverProps />
</DemoBlock>

### 高级样式

演示 `color`、`overlayStyle`、`overlayInnerStyle`、`getPopupContainer` 等高级样式定制。

<DemoBlock title="高级样式" :source="PopoverAdvancedSource">
  <PopoverAdvanced />
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

| 事件名          | 说明                             | 回调参数                                               |
| --------------- | -------------------------------- | ------------------------------------------------------ |
| update:open     | 显示隐藏的回调（v-model）        | `(open: boolean) => void`                              |
| openChange      | 显示隐藏的回调，附带触发来源信息 | `(open: boolean, info: PopoverOpenChangeInfo) => void` |
| afterOpenChange | 浮层显隐动画结束时触发           | `(open: boolean) => void`                              |

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

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的 `classNames` / `styles` 写法模板。

<PopoverSemantic />

### DOM 结构与 className 映射

```html
<!-- 浮层容器（Teleport 到 body） -->
<div class="hmfw-popover">
  <div class="hmfw-popover-content">
    <div class="hmfw-popover-arrow"></div>
    <div class="hmfw-popover-inner">
      <!-- 标题区域（当 title 存在时） -->
      <div class="hmfw-popover-title">
        <!-- ↑ classNames.title / styles.title -->
        标题文字
      </div>

      <!-- 内容区域 -->
      <div class="hmfw-popover-inner-content">
        <!-- ↑ classNames.content / styles.content -->
        内容文字
      </div>
    </div>
  </div>
</div>
```

### 用法

`classNames` 追加自定义类，`styles` 写内联样式，二者可同时作用于同一节点：

```vue
<template>
  <!-- classNames：追加自定义类 -->
  <Popover title="提示标题" content="这是一段内容" :class-names="{ title: 'my-popover-title' }">
    <Button>鼠标移入</Button>
  </Popover>

  <!-- styles：内联样式，优先级高于 classNames -->
  <Popover
    title="通知"
    content="您有新的消息"
    :styles="{
      content: { background: '#f0f5ff', padding: '16px', fontSize: '14px' },
    }"
  >
    <Button>点击查看</Button>
  </Popover>

  <!-- 组合：classNames 与 styles 混用 -->
  <Popover
    title="完整自定义"
    content="自定义标题和内容的样式"
    :class-names="{ content: 'my-popover-content' }"
    :styles="{
      title: { color: '#722ed1', fontWeight: '600', borderBottom: '2px solid #722ed1' },
    }"
  >
    <Button>完整示例</Button>
  </Popover>
</template>

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
</style>
```

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名（如 `.hmfw-popover-title`）合并，不会互相覆盖
- 支持**函数形式**，可根据 `props` 动态计算样式：`(info: { props: PopoverProps }) => { ... }`
- 浮层整体样式可通过 `overlayStyle` / `overlayInnerStyle` props 控制，`classNames` / `styles` 用于更细粒度的标题/内容控制
- Popover 浮层通过 Teleport 挂载到 `body`（或自定义容器），所以 scoped 样式需要使用 `:deep()` 穿透

## 设计 Token

Popover 组件已接入设计 Token 系统，支持通过 ConfigProvider 全局定制：

| Token                      | 说明         | 默认值           |
| -------------------------- | ------------ | ---------------- |
| `fontWeightStrong`         | 标题字重     | `600`            |
| `popoverTitleMinWidth`     | 标题最小宽度 | `177px`          |
| `popoverInnerPadding`      | 内层内边距   | `12px`           |
| `popoverTitleMarginBottom` | 标题下边距   | `8px` (marginXS) |

使用示例：

```vue
<template>
  <ConfigProvider :theme="{ fontWeightStrong: 700, popoverInnerPadding: 16 }">
    <Popover title="自定义主题" content="标题字重更粗、内边距更大">
      <Button>查看</Button>
    </Popover>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider, Popover, Button } from '@hmfw/ant-design'
</script>
```
