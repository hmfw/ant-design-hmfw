# Tour 漫游引导

用于分步引导用户了解产品功能的组件。

## 何时使用

- 新功能上线时，引导用户了解新功能
- 复杂操作流程，需要分步骤引导用户完成
- 对于特定的元素进行操作指引

## 代码演示

### 基础用法

最简单的用法，无目标元素，居中展示。

<DemoBlock title="基础用法" :source="TourBasicSource">
  <TourBasic />
</DemoBlock>

### 不同类型

Tour 有两种类型：`default` 和 `primary`。

<DemoBlock title="不同类型" :source="TourTypeSource">
  <TourType />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对遮罩、卡片、标题、描述、指示器、按钮等子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="TourClassNamesSource">
  <TourClassNames />
</DemoBlock>

## API

### Tour Props

| 参数                  | 说明                                                                             | 类型                                                       | 默认值                      |
| --------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------- |
| open (v-model)        | 是否显示                                                                         | `boolean`                                                  | `false`                     |
| current (v-model)     | 当前步骤                                                                         | `number`                                                   | `0`                         |
| steps                 | 步骤配置                                                                         | `TourStep[]`                                               | `[]`                        |
| arrow                 | 是否显示箭头                                                                     | `boolean \| { pointAtCenter?: boolean }`                   | `true`                      |
| placement             | 引导卡片相对于目标元素的位置                                                     | `TooltipPlacement`                                         | `'bottom'`                  |
| mask                  | 是否显示遮罩                                                                     | `boolean \| { style?: CSSProperties; color?: string }`     | `true`                      |
| type                  | 类型，影响底色与文字颜色                                                         | `'default' \| 'primary'`                                   | `'default'`                 |
| scrollIntoViewOptions | 是否滚动到目标元素，支持传入滚动选项                                             | `boolean \| ScrollIntoViewOptions`                         | `true`                      |
| zIndex                | Tour 的 z-index                                                                  | `number`                                                   | `1001`                      |
| gap                   | 引导卡片与目标元素的距离和箭头偏移                                               | `{ offset?: number \| [number, number]; radius?: number }` | `{ offset: 12, radius: 4 }` |
| indicatorsRender      | 自定义指示器渲染                                                                 | `(current: number, total: number) => VNode`                | -                           |
| closeIcon             | 自定义关闭图标，设置为 `false` 时隐藏关闭按钮                                    | `VNode \| (() => VNode) \| false`                          | `<CloseOutlined />`         |
| classNames            | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TourClassNames`                                           | -                           |
| styles                | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TourStyles`                                               | -                           |

### TourStep

| 参数                  | 说明                                   | 类型                                                   | 默认值 |
| --------------------- | -------------------------------------- | ------------------------------------------------------ | ------ |
| title                 | 标题                                   | `string \| VNode \| (() => VNode)`                     | -      |
| description           | 描述                                   | `string \| VNode \| (() => VNode)`                     | -      |
| target                | 目标元素（CSS 选择器或返回元素的函数） | `string \| (() => HTMLElement \| null)`                | -      |
| placement             | 弹出位置                               | `TooltipPlacement`                                     | -      |
| cover                 | 封面图片或自定义内容                   | `string \| VNode`                                      | -      |
| type                  | 类型，优先级高于 Tour 的 type          | `'default' \| 'primary'`                               | -      |
| mask                  | 是否显示遮罩，优先级高于 Tour 的 mask  | `boolean \| { style?: CSSProperties; color?: string }` | -      |
| style                 | 自定义样式                             | `CSSProperties`                                        | -      |
| className             | 自定义类名                             | `string`                                               | -      |
| nextButtonProps       | 下一步按钮的属性                       | `TourButtonProps`                                      | -      |
| prevButtonProps       | 上一步按钮的属性                       | `TourButtonProps`                                      | -      |
| scrollIntoViewOptions | 是否滚动到目标元素                     | `boolean \| ScrollIntoViewOptions`                     | -      |

### TourButtonProps

| 参数     | 说明                  | 类型              |
| -------- | --------------------- | ----------------- |
| children | 按钮文本              | `string \| VNode` |
| onClick  | 点击回调              | `() => void`      |
| ...其他  | Button 组件的其他属性 | `ButtonProps`     |

### Tour Events

| 事件名 | 说明                         | 回调参数                    |
| ------ | ---------------------------- | --------------------------- |
| change | 步骤改变时                   | `(current: number) => void` |
| close  | 关闭时                       | `() => void`                |
| finish | 完成时（最后一步点击下一步） | `() => void`                |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 Tour 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface TourClassNames {
  root?: string // 根容器 div.hmfw-tour-root
  mask?: string // 遮罩层 div.hmfw-tour-mask
  popover?: string // 弹出卡片 div.hmfw-tour-popover
  popoverInner?: string // 卡片内层 div.hmfw-tour-popover-inner
  close?: string // 关闭按钮 button.hmfw-tour-close
  cover?: string // 封面图片区域 div.hmfw-tour-cover
  title?: string // 标题 div.hmfw-tour-title
  description?: string // 描述文本 div.hmfw-tour-description
  footer?: string // 底部区域 div.hmfw-tour-footer
  indicators?: string // 指示器容器 div.hmfw-tour-indicators
  indicator?: string // 单个指示器点 span.hmfw-tour-indicator
  buttons?: string // 按钮组 div.hmfw-tour-buttons
  prevBtn?: string // 上一步按钮 button.hmfw-tour-prev-btn
  nextBtn?: string // 下一步/完成按钮 button.hmfw-tour-next-btn
}

interface TourStyles {
  root?: CSSProperties
  mask?: CSSProperties
  popover?: CSSProperties
  popoverInner?: CSSProperties
  close?: CSSProperties
  cover?: CSSProperties
  title?: CSSProperties
  description?: CSSProperties
  footer?: CSSProperties
  indicators?: CSSProperties
  indicator?: CSSProperties
  buttons?: CSSProperties
  prevBtn?: CSSProperties
  nextBtn?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- Tour 根容器 -->
<div class="hmfw-tour-root">
  <!-- ↑ classNames.root / styles.root 应用于此 -->

  <!-- 遮罩层 -->
  <div class="hmfw-tour-mask">
    <!-- ↑ classNames.mask / styles.mask 应用于此 -->
    <svg class="hmfw-tour-mask-svg">...</svg>
  </div>

  <!-- 弹出卡片 -->
  <div class="hmfw-tour-popover">
    <!-- ↑ classNames.popover / styles.popover 应用于此 -->
    <div class="hmfw-tour-popover-inner">
      <!-- ↑ classNames.popoverInner / styles.popoverInner 应用于此 -->

      <!-- 关闭按钮 -->
      <button class="hmfw-tour-close">
        <!-- ↑ classNames.close / styles.close 应用于此 -->
        <CloseOutlined />
      </button>

      <!-- 封面（可选） -->
      <div class="hmfw-tour-cover">
        <!-- ↑ classNames.cover / styles.cover 应用于此 -->
        <img src="..." />
      </div>

      <!-- 标题 -->
      <div class="hmfw-tour-title">
        <!-- ↑ classNames.title / styles.title 应用于此 -->
        标题文本
      </div>

      <!-- 描述 -->
      <div class="hmfw-tour-description">
        <!-- ↑ classNames.description / styles.description 应用于此 -->
        描述文本
      </div>

      <!-- 底部 -->
      <div class="hmfw-tour-footer">
        <!-- ↑ classNames.footer / styles.footer 应用于此 -->

        <!-- 指示器 -->
        <div class="hmfw-tour-indicators">
          <!-- ↑ classNames.indicators / styles.indicators 应用于此 -->
          <span class="hmfw-tour-indicator"></span>
          <!-- ↑ classNames.indicator / styles.indicator 应用于此 -->
          <span class="hmfw-tour-indicator hmfw-tour-indicator-active"></span>
          <span class="hmfw-tour-indicator"></span>
        </div>

        <!-- 按钮组 -->
        <div class="hmfw-tour-buttons">
          <!-- ↑ classNames.buttons / styles.buttons 应用于此 -->
          <button class="hmfw-button hmfw-tour-prev-btn">
            <!-- ↑ classNames.prevBtn / styles.prevBtn 应用于此 -->
            上一步
          </button>
          <button class="hmfw-button hmfw-button-primary hmfw-tour-next-btn">
            <!-- ↑ classNames.nextBtn / styles.nextBtn 应用于此 -->
            下一步
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <Button type="primary" @click="open = true">打开引导</Button>

  <Tour
    v-model:open="open"
    :steps="steps"
    :class-names="{
      mask: 'my-mask',
      popoverInner: 'my-popover-inner',
      title: 'my-title',
      indicator: 'my-indicator',
    }"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Tour } from 'ant-design-hmfw'

const open = ref(false)
const steps = [
  {
    title: '欢迎',
    description: '这是一个漫游引导',
  },
  {
    title: '第二步',
    description: '继续了解更多功能',
  },
]
</script>

<style scoped>
/* 自定义遮罩 */
:global(.my-mask) {
  background: rgba(102, 126, 234, 0.25) !important;
  backdrop-filter: blur(4px);
}

/* 自定义卡片背景 */
:global(.my-popover-inner) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
}

/* 自定义标题 */
:global(.my-title) {
  color: white !important;
  font-size: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* 自定义指示器 */
:global(.my-indicator) {
  background: rgba(255, 255, 255, 0.5) !important;
  transition: all 0.3s;
}

:global(.hmfw-tour-indicator-active.my-indicator) {
  background: white !important;
  width: 20px !important;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <Button type="primary" @click="open = true">打开引导</Button>

  <Tour
    v-model:open="open"
    :steps="steps"
    :styles="{
      popoverInner: { borderRadius: '16px', padding: '24px' },
      title: { color: '#722ed1', fontSize: '18px' },
      description: { color: '#52c41a', fontSize: '15px' },
      footer: { marginTop: '20px' },
      buttons: { gap: '12px' },
    }"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Tour } from 'ant-design-hmfw'

const open = ref(false)
const steps = [
  {
    title: '内联样式',
    description: '通过 styles 属性应用内联样式',
  },
]
</script>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- Tour 是弹层组件，挂载到 `body` 之外，样式定义需要使用 `:global()` 而非 `:deep()`
- `classNames.indicator` 会应用到所有指示器点，包括激活状态的点（`.hmfw-tour-indicator-active`）
- `classNames.prevBtn` 和 `classNames.nextBtn` 会与 Button 组件的样式类名合并
- 在 primary 类型下，弹出卡片的背景和文字颜色会自动切换为主题色和白色

## 设计 Token

Tour 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                     | 说明                                    | 默认值                                                              |
| ------------------------------ | --------------------------------------- | ------------------------------------------------------------------- |
| `--hmfw-color-bg-elevated`     | 卡片背景色                              | `#ffffff`                                                           |
| `--hmfw-color-primary`         | 主题色（primary 类型背景 & 激活指示器） | `#1677ff`                                                           |
| `--hmfw-color-text`            | 标题文字颜色                            | `rgba(0, 0, 0, 0.88)`                                               |
| `--hmfw-color-text-secondary`  | 描述文字颜色                            | `rgba(0, 0, 0, 0.65)`                                               |
| `--hmfw-color-text-tertiary`   | 关闭图标颜色                            | `rgba(0, 0, 0, 0.45)`                                               |
| `--hmfw-color-white`           | 白色（primary 类型文字颜色）            | `#ffffff`                                                           |
| `--hmfw-color-fill-quaternary` | 关闭按钮悬停背景                        | `rgba(0, 0, 0, 0.04)`                                               |
| `--hmfw-color-fill-tertiary`   | 指示器默认背景                          | `rgba(0, 0, 0, 0.15)`                                               |
| `--hmfw-color-fill-secondary`  | 指示器悬停背景                          | `rgba(0, 0, 0, 0.25)`                                               |
| `--hmfw-border-radius`         | 卡片与封面圆角                          | `6px`                                                               |
| `--hmfw-border-radius-sm`      | 关闭按钮圆角                            | `4px`                                                               |
| `--hmfw-box-shadow-secondary`  | 卡片阴影                                | `0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), …` |
