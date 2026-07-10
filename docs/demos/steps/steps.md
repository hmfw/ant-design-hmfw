# Steps 步骤条

引导用户按照流程完成任务的导航条。

## 何时使用

- 当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务
- 需要展示当前操作的进度时

## 代码演示

### 基础用法

简单的步骤条。

<DemoBlock title="基础用法" :source="StepsBasicSource">
  <StepsBasic />
</DemoBlock>

### 垂直步骤条

通过 `orientation="vertical"` 设置垂直方向步骤条。

<DemoBlock title="垂直步骤条" :source="StepsVerticalSource">
  <StepsVertical />
</DemoBlock>

### 点状步骤条

通过 `type="dot"` 或 `progress-dot` 属性设置点状步骤条。

<DemoBlock title="点状步骤条" :source="StepsDotSource">
  <StepsDot />
</DemoBlock>

### 错误状态

通过 `status="error"` 设置错误状态。

<DemoBlock title="错误状态" :source="StepsErrorSource">
  <StepsError />
</DemoBlock>

### 小型步骤条

通过 `size="small"` 设置小型步骤条。

<DemoBlock title="小型步骤条" :source="StepsSmallSource">
  <StepsSmall />
</DemoBlock>

### 内联型步骤条

通过 `type="inline"` 设置内联型步骤条。

<DemoBlock title="内联型步骤条" :source="StepsInlineSource">
  <StepsInline />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="StepsClassNamesSource">
  <StepsClassNames />
</DemoBlock>

## API

### Steps Props

| 参数           | 说明                                                                             | 类型                                         | 默认值         |
| -------------- | -------------------------------------------------------------------------------- | -------------------------------------------- | -------------- |
| current        | 指定当前步骤，从 0 开始记数                                                      | `number`                                     | `0`            |
| initial        | 起始序号，从 0 开始记数                                                          | `number`                                     | `0`            |
| items          | 配置选项                                                                         | `StepItem[]`                                 | `[]`           |
| orientation    | 指定步骤条方向                                                                   | `'horizontal' \| 'vertical'`                 | `'horizontal'` |
| size           | 指定大小                                                                         | `'default' \| 'small'`                       | `'default'`    |
| status         | 指定当前步骤的状态                                                               | `'wait' \| 'process' \| 'finish' \| 'error'` | `'process'`    |
| type           | 步骤条类型                                                                       | `'default' \| 'inline' \| 'dot'`             | `'default'`    |
| titlePlacement | 指定标签放置位置                                                                 | `'horizontal' \| 'vertical'`                 | `'horizontal'` |
| variant        | 步骤条样式变体                                                                   | `'filled' \| 'outlined'`                     | `'filled'`     |
| responsive     | 是否响应式                                                                       | `boolean`                                    | `true`         |
| ellipsis       | 是否省略过长的标题和描述                                                         | `boolean`                                    | `false`        |
| offset         | 内联型步骤条的偏移量                                                             | `number`                                     | `0`            |
| iconRender     | 自定义图标渲染函数                                                               | `(node, info) => VNode`                      | -              |
| classNames     | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `StepsClassNames`                            | -              |
| styles         | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `StepsStyles`                                | -              |

### Steps Events

| 事件名 | 说明               | 回调参数                    |
| ------ | ------------------ | --------------------------- |
| change | 点击切换步骤时触发 | `(current: number) => void` |

### StepItem

| 参数     | 说明             | 类型                                         | 默认值  |
| -------- | ---------------- | -------------------------------------------- | ------- |
| title    | 标题             | `string \| VNode`                            | -       |
| content  | 步骤的详情描述   | `string \| VNode`                            | -       |
| subTitle | 子标题           | `string \| VNode`                            | -       |
| status   | 指定状态         | `'wait' \| 'process' \| 'finish' \| 'error'` | -       |
| icon     | 步骤图标         | `VNode`                                      | -       |
| disabled | 禁用点击         | `boolean`                                    | `false` |
| onClick  | 点击步骤时的回调 | `(e: MouseEvent) => void`                    | -       |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 Steps 组件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface StepsClassNames {
  root?: string // 根节点 div.hmfw-steps
  item?: string // 步骤项 div.hmfw-steps-item
  header?: string // 步骤项 header div.hmfw-steps-item-header
  tail?: string // 步骤连接线 div.hmfw-steps-item-tail
  icon?: string // 步骤图标容器 div.hmfw-steps-item-icon
  content?: string // 步骤内容容器 div.hmfw-steps-item-content
  title?: string // 步骤标题 div.hmfw-steps-item-title
  subtitle?: string // 步骤副标题 span.hmfw-steps-item-subtitle
  description?: string // 步骤描述 div.hmfw-steps-item-description
}

interface StepsStyles {
  root?: CSSProperties
  item?: CSSProperties
  header?: CSSProperties
  tail?: CSSProperties
  icon?: CSSProperties
  content?: CSSProperties
  title?: CSSProperties
  subtitle?: CSSProperties
  description?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-steps">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-steps-item hmfw-steps-item-finish">
    <!-- ↑ classNames.item / styles.item 应用于此 -->
    <div class="hmfw-steps-item-header">
      <!-- ↑ classNames.header / styles.header 应用于此 -->
      <div class="hmfw-steps-item-icon">
        <!-- ↑ classNames.icon / styles.icon 应用于此 -->
        <span class="hmfw-steps-icon">1</span>
      </div>
      <div class="hmfw-steps-item-title">
        <!-- ↑ classNames.title / styles.title 应用于此 -->
        标题
        <span class="hmfw-steps-item-subtitle">
          <!-- ↑ classNames.subtitle / styles.subtitle 应用于此 -->
          副标题
        </span>
      </div>
      <div class="hmfw-steps-item-tail">
        <!-- ↑ classNames.tail / styles.tail 应用于此 -->
      </div>
    </div>
    <div class="hmfw-steps-item-content">
      <!-- ↑ classNames.content / styles.content 应用于此 -->
      <div class="hmfw-steps-item-icon hmfw-steps-item-icon-placeholder">
        <!-- ↑ 空占位符，与 header icon 列对齐 -->
      </div>
      <div class="hmfw-steps-item-description">
        <!-- ↑ classNames.description / styles.description 应用于此 -->
        描述信息
      </div>
    </div>
  </div>
  <!-- 其他步骤项... -->
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <Steps
    :current="1"
    :items="items"
    :class-names="{
      root: 'my-steps-root',
      icon: 'my-icon',
      title: 'my-title',
      tail: 'my-tail',
    }"
  />
</template>

<style scoped>
:deep(.my-steps-root) {
  background: linear-gradient(to right, #f0f5ff, #e6f4ff);
  padding: 16px;
  border-radius: 8px;
}

:deep(.my-icon) {
  transform: scale(1.2);
  transition: all 0.3s;
}

:deep(.my-title) {
  font-weight: 600;
  color: #1677ff;
}

:deep(.my-tail) {
  background: linear-gradient(to bottom, #1677ff 0%, #722ed1 100%) !important;
  height: 3px !important;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <Steps
    :current="1"
    :items="items"
    :styles="{
      root: { padding: '20px', backgroundColor: '#fafafa', borderRadius: '8px' },
      icon: { fontSize: '20px' },
      title: { fontWeight: 600, color: '#1677ff' },
      description: { color: '#666', fontSize: '13px' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `item`、`header`、`tail`、`icon`、`content`、`title`、`subtitle`、`description` 这些节点类名会应用到**每个步骤项**上
- `tail` 是连接线，在最后一个步骤项中不渲染
- `subtitle` 和 `description` 仅在配置了对应内容时渲染
- 垂直方向步骤条（`orientation="vertical"`）的 `tail` 会垂直延伸
- 点状步骤条（`type="dot"`）的图标会变为小圆点，content 区的占位符 icon 会隐藏

## 设计 Token

Steps 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                    | 说明         | 默认值             |
| ----------------------------- | ------------ | ------------------ |
| `--hmfw-color-primary`        | 主题色       | `#1677ff`          |
| `--hmfw-color-error`          | 错误状态色   | `#ff4d4f`          |
| `--hmfw-color-text`           | 主文本色     | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-secondary` | 次级文本色   | `rgba(0,0,0,0.65)` |
| `--hmfw-color-border`         | 边框色       | `#d9d9d9`          |
| `--hmfw-color-bg-container`   | 容器背景色   | `#ffffff`          |
| `--hmfw-font-size-base`       | 基础字号     | `14px`             |
| `--hmfw-font-size-sm`         | 小号字号     | `12px`             |
| `--hmfw-motion-duration-mid`  | 中速动画时长 | `0.2s`             |
| `--hmfw-steps-gap`            | 步骤项间距   | `12px`             |
| `--hmfw-steps-icon-size`      | 图标尺寸     | `32px`             |
| `--hmfw-steps-dot-size`       | dot 图标尺寸 | `8px`              |
| `--hmfw-steps-tail-width`     | 连接线粗细   | `1px`              |
| `--hmfw-steps-tail-min-width` | 连接线最小宽 | `20px`             |
