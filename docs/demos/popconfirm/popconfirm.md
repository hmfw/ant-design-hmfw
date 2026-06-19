# Popconfirm 气泡确认框

点击元素，弹出气泡式的确认框。

## 何时使用

- 目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户
- 和 confirm 弹出的全屏居中模态对话框相比，交互形式更轻量

## 代码演示

### 基础用法

最简单的用法。

<DemoBlock title="基础用法" :source="PopconfirmBasicSource">
  <PopconfirmBasic />
</DemoBlock>

### 自定义按钮文字

自定义确认按钮和取消按钮的文字。

<DemoBlock title="自定义按钮文字" :source="PopconfirmCustomTextSource">
  <PopconfirmCustomText />
</DemoBlock>

### 不同位置

位置有十二个方向。

<DemoBlock title="不同位置" :source="PopconfirmPlacementSource">
  <PopconfirmPlacement />
</DemoBlock>

### 自定义图标

可以通过 `icon` 属性或插槽自定义图标，也可以设置为空字符串隐藏图标。

<DemoBlock title="自定义图标" :source="PopconfirmIconSource">
  <PopconfirmIcon />
</DemoBlock>

### 按钮类型

使用 `okType` 设置确认按钮的类型。`danger` 是 `primary + danger` 的简写形式。

<DemoBlock title="按钮类型" :source="PopconfirmDangerSource">
  <PopconfirmDanger />
</DemoBlock>

### 异步关闭

通过 `okButtonProps` 和 `cancelButtonProps` 可以控制按钮的 loading 状态，实现异步确认。

<DemoBlock title="异步关闭" :source="PopconfirmAsyncSource">
  <PopconfirmAsync />
</DemoBlock>

### 受控模式

使用 `v-model:open` 控制气泡框的显示隐藏，可以通过 `disabled` 禁用，也可以隐藏取消按钮。

<DemoBlock title="受控模式" :source="PopconfirmControlledSource">
  <PopconfirmControlled />
</DemoBlock>

### 触发方式

通过 `trigger` 设置触发行为，支持 `hover`、`click`、`focus`、`contextMenu`。

<DemoBlock title="触发方式" :source="PopconfirmTriggerSource">
  <PopconfirmTrigger />
</DemoBlock>

### 自定义配置

可以自定义 z-index、样式、箭头等配置。

<DemoBlock title="自定义配置" :source="PopconfirmCustomSource">
  <PopconfirmCustom />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="PopconfirmClassNamesSource">
  <PopconfirmClassNames />
</DemoBlock>

## API

### Popconfirm Props

| 参数               | 说明                                                                             | 类型                                               | 默认值        |
| ------------------ | -------------------------------------------------------------------------------- | -------------------------------------------------- | ------------- |
| title              | 确认框标题（空值时不渲染浮层）                                                   | `string \| number \| VNode \| () => VNode \| slot` | -             |
| description        | 确认框描述                                                                       | `string \| number \| VNode \| () => VNode \| slot` | -             |
| icon               | 提示图标，slot 优先级高于 prop                                                   | `string \| VNode \| () => VNode \| slot`           | `'⚠'`         |
| okText             | 确认按钮文字                                                                     | `string`                                           | locale 默认值 |
| cancelText         | 取消按钮文字                                                                     | `string`                                           | locale 默认值 |
| okType             | 确认按钮类型，`'danger'` 是 `primary + danger` 的简写                            | `ButtonType \| 'danger'`                           | `'primary'`   |
| okButtonProps      | 确认按钮的额外 props（loading/disabled 等）                                      | `ButtonProps`                                      | -             |
| cancelButtonProps  | 取消按钮的额外 props                                                             | `ButtonProps`                                      | -             |
| showCancel         | 是否显示取消按钮                                                                 | `boolean`                                          | `true`        |
| trigger            | 触发行为，可设单值或数组                                                         | `'hover' \| 'click' \| 'focus' \| 'contextMenu'`   | `'click'`     |
| placement          | 气泡框位置，溢出视口时自动翻转                                                   | 12 个方向（同 Tooltip）                            | `'top'`       |
| open (v-model)     | 用于手动控制浮层显隐                                                             | `boolean`                                          | -             |
| defaultOpen        | 默认是否显示（非受控）                                                           | `boolean`                                          | `false`       |
| disabled           | 禁用，禁用时点击触发器不会弹出                                                   | `boolean`                                          | `false`       |
| arrow              | 是否显示箭头，可对象配置                                                         | `boolean \| { pointAtCenter?: boolean }`           | `true`        |
| mouseEnterDelay    | 鼠标移入延时显示（trigger=hover），单位秒                                        | `number`                                           | `0.1`         |
| mouseLeaveDelay    | 鼠标移出延时隐藏（trigger=hover），单位秒                                        | `number`                                           | `0.1`         |
| autoAdjustOverflow | 浮层超出视口时自动翻转方向                                                       | `boolean`                                          | `true`        |
| zIndex             | 自定义浮层 z-index                                                               | `number`                                           | `1070`        |
| destroyOnHidden    | 隐藏时销毁浮层 DOM                                                               | `boolean`                                          | `false`       |
| getPopupContainer  | 自定义浮层挂载容器（默认 `body`）                                                | `(triggerNode: HTMLElement) => HTMLElement`        | -             |
| overlayStyle       | 卡片外层样式                                                                     | `Record<string, string>`                           | -             |
| overlayInnerStyle  | 卡片内层样式                                                                     | `Record<string, string>`                           | -             |
| classNames         | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `PopconfirmClassNames`                             | -             |
| styles             | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `PopconfirmStyles`                                 | -             |

### Popconfirm Events

| 事件名          | 说明                              | 回调参数                  |
| --------------- | --------------------------------- | ------------------------- |
| confirm         | 点击确认的回调（携带 MouseEvent） | `(e: MouseEvent) => void` |
| cancel          | 点击取消的回调（携带 MouseEvent） | `(e: MouseEvent) => void` |
| update:open     | 显示隐藏的回调（v-model）         | `(open: boolean) => void` |
| openChange      | 显示隐藏的回调                    | `(open: boolean) => void` |
| afterOpenChange | 浮层动画结束时触发                | `(open: boolean) => void` |

### Popconfirm Slots

| 名称        | 说明                                            |
| ----------- | ----------------------------------------------- |
| default     | 触发气泡确认框的元素                            |
| title       | 标题（与 `title` prop 二选一，slot 优先）       |
| description | 描述（与 `description` prop 二选一，slot 优先） |
| icon        | 图标（与 `icon` prop 二选一，slot 优先）        |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对气泡确认框的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface PopconfirmClassNames {
  message?: string // 消息容器 div.hmfw-popconfirm-message
  icon?: string // 图标容器 span.hmfw-popconfirm-message-icon
  title?: string // 标题容器 div.hmfw-popconfirm-message-title
  description?: string // 描述文本 div.hmfw-popconfirm-description
  buttons?: string // 按钮组容器 div.hmfw-popconfirm-buttons
  cancelBtn?: string // 取消按钮
  okBtn?: string // 确定按钮
}

interface PopconfirmStyles {
  message?: CSSProperties
  icon?: CSSProperties
  title?: CSSProperties
  description?: CSSProperties
  buttons?: CSSProperties
  cancelBtn?: CSSProperties
  okBtn?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- Popconfirm 浮层内部结构 -->
<div class="hmfw-popconfirm-inner">
  <div class="hmfw-popconfirm-message">
    <!-- ↑ classNames.message / styles.message 应用于此 -->
    <span class="hmfw-popconfirm-message-icon">
      <!-- ↑ classNames.icon / styles.icon 应用于此 -->
      ⚠
    </span>
    <div class="hmfw-popconfirm-message-title">
      <!-- ↑ classNames.title / styles.title 应用于此 -->
      确定删除吗？
    </div>
  </div>
  <div class="hmfw-popconfirm-description">
    <!-- ↑ classNames.description / styles.description 应用于此 -->
    此操作不可逆
  </div>
  <div class="hmfw-popconfirm-buttons">
    <!-- ↑ classNames.buttons / styles.buttons 应用于此 -->
    <button class="hmfw-button">
      <!-- ↑ classNames.cancelBtn / styles.cancelBtn 通过 Button 的 classNames.root / styles.root 应用 -->
      取消
    </button>
    <button class="hmfw-button hmfw-button-primary">
      <!-- ↑ classNames.okBtn / styles.okBtn 通过 Button 的 classNames.root / styles.root 应用 -->
      确定
    </button>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义消息容器与图标 -->
  <Popconfirm
    title="确定删除这条记录吗？"
    description="此操作不可逆，请谨慎操作"
    :class-names="{
      message: 'custom-message',
      icon: 'custom-icon',
    }"
  >
    <Button type="primary">删除记录</Button>
  </Popconfirm>

  <!-- 自定义按钮样式 -->
  <Popconfirm
    title="确定要提交吗？"
    :class-names="{
      cancelBtn: 'custom-cancel',
      okBtn: 'custom-ok',
    }"
  >
    <Button>提交表单</Button>
  </Popconfirm>
</template>

<style scoped>
:global(.custom-message) {
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  padding: 8px;
  border-radius: 6px;
  border-left: 3px solid #1677ff;
}

:global(.custom-icon) {
  color: #1677ff;
  font-size: 18px;
}

:global(.custom-cancel:hover) {
  border-color: #ff4d4f;
  color: #ff4d4f;
}

:global(.custom-ok) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  border: none;
  box-shadow: 0 2px 4px rgba(82, 196, 26, 0.3);
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制各部分 -->
  <Popconfirm
    title="确认操作"
    description="这是一个测试描述"
    :styles="{
      message: { padding: '8px 0' },
      icon: { color: '#52c41a', fontSize: '18px' },
      title: { fontWeight: 'bold', color: '#1677ff' },
      description: { fontStyle: 'italic', color: '#8c8c8c' },
    }"
  >
    <Button type="dashed">样式演示</Button>
  </Popconfirm>

  <!-- 自定义按钮尺寸 -->
  <Popconfirm
    title="确认发布？"
    :styles="{
      okBtn: { minWidth: '80px', fontWeight: 'bold' },
      cancelBtn: { color: '#8c8c8c' },
    }"
  >
    <Button type="primary">发布</Button>
  </Popconfirm>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `cancelBtn` 和 `okBtn` 通过 Button 组件的 `classNames.root` 和 `styles.root` 实现样式传递
- 如需更细粒度控制按钮内部（如图标），可通过 `okButtonProps.classNames` 和 `cancelButtonProps.classNames` 传递完整的 Button classNames
- Popconfirm 浮层挂载在 `body` 外，样式需使用 `:global()` 而非 `:deep()`

## 设计 Token

Popconfirm 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。
