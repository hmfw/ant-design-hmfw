# BackTop 回到顶部

返回页面顶部的操作按钮。

> **已废弃**: 此组件已被 FloatButton.BackTop 替代，但仍保持兼容性支持。

## 何时使用

- 当页面内容区域比较长时
- 当用户需要频繁返回顶部查看相关内容时

## 代码演示

<script setup lang="ts">
import BackTopBasic from './BackTopBasic.vue'
import BackTopCustom from './BackTopCustom.vue'
import BackTopTarget from './BackTopTarget.vue'
import BackTopClassNames from './BackTopClassNames.vue'
import BackTopBasicSource from './BackTopBasic.vue?raw'
import BackTopCustomSource from './BackTopCustom.vue?raw'
import BackTopTargetSource from './BackTopTarget.vue?raw'
import BackTopClassNamesSource from './BackTopClassNames.vue?raw'
</script>

### 基础用法

滚动页面后，右下角会出现回到顶部按钮。

> 注意：需要滚动页面才能看到按钮出现。默认当页面滚动超过 400px 时显示。

<DemoBlock title="基础用法" :source="BackTopBasicSource">
  <BackTopBasic />
</DemoBlock>

### 自定义内容

可以自定义回到顶部按钮的样式。

<DemoBlock title="自定义内容" :source="BackTopCustomSource">
  <BackTopCustom />
</DemoBlock>

### 指定容器

在指定容器内滚动时显示回到顶部按钮。

<DemoBlock title="指定容器" :source="BackTopTargetSource">
  <BackTopTarget />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="BackTopClassNamesSource">
  <BackTopClassNames />
</DemoBlock>

## API

### BackTop Props

| 参数             | 说明                                                                             | 类型                                      | 默认值         |
| ---------------- | -------------------------------------------------------------------------------- | ----------------------------------------- | -------------- |
| visibilityHeight | 滚动高度达到此参数值才出现 BackTop                                               | `number`                                  | `400`          |
| target           | 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数                    | `() => HTMLElement \| Window \| Document` | `() => window` |
| duration         | 回到顶部所需时间（ms）                                                           | `number`                                  | `450`          |
| className        | 自定义类名                                                                       | `string`                                  | -              |
| rootClassName    | 根节点类名                                                                       | `string`                                  | -              |
| style            | 自定义样式                                                                       | `CSSProperties`                           | -              |
| classNames       | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `BackTopClassNames`                       | -              |
| styles           | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `BackTopStyles`                           | -              |
| prefixCls        | 自定义前缀                                                                       | `string`                                  | `'hmfw'`       |

### BackTop Events

| 事件名 | 说明               | 回调参数                  |
| ------ | ------------------ | ------------------------- |
| click  | 点击按钮的回调函数 | `(e: MouseEvent) => void` |

### BackTop Slots

| 名称    | 说明                           |
| ------- | ------------------------------ |
| default | 自定义内容，默认为向上箭头图标 |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface BackTopClassNames {
  root?: string // 根容器
  content?: string // 默认内容容器
  icon?: string // 图标容器
}

interface BackTopStyles {
  root?: CSSProperties
  content?: CSSProperties
  icon?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-back-top">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-back-top-content">
    <!-- ↑ classNames.content / styles.content 应用于此（仅当使用默认内容时） -->
    <div class="hmfw-back-top-icon">
      <!-- ↑ classNames.icon / styles.icon 应用于此（仅当使用默认内容时） -->
      <span class="hmfw-icon">
        <svg>...</svg>
      </span>
    </div>
  </div>
</div>
```

### 使用 classNames

```vue
<template>
  <BackTop :class-names="{ root: 'my-back-top', content: 'my-content', icon: 'my-icon' }" />
</template>

<style scoped>
:deep(.my-back-top:hover) {
  transform: translateY(-2px);
}

:deep(.my-content) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:deep(.my-icon) {
  color: white;
  font-size: 20px;
}
</style>
```

### 使用 styles

```vue
<template>
  <BackTop
    :styles="{
      content: { borderRadius: '12px', background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)' },
      icon: { color: '#fff', fontSize: '18px' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `content` 和 `icon` 仅在使用默认内容时生效（未传入 default slot）
- 传入自定义 slot 时，可以通过 `classNames.root` / `styles.root` 控制根容器样式

---

## 设计 Token

| Token 名称                      | 说明               | 默认值                |
| ------------------------------- | ------------------ | --------------------- |
| `--hmfw-color-text`             | 悬停背景颜色       | `rgba(0, 0, 0, 0.88)` |
| `--hmfw-color-text-description` | 默认背景颜色       | `rgba(0, 0, 0, 0.45)` |
| `--hmfw-color-text-light-solid` | 图标颜色           | `#ffffff`             |
| `--hmfw-control-height-lg`      | 按钮尺寸           | `40px`                |
| `--hmfw-font-size-heading3`     | 图标字体大小       | `24px`                |
| `--hmfw-motion-duration-mid`    | 动画时长           | `0.2s`                |
| `--hmfw-motion-ease-in-out`     | 动画缓动函数       | `cubic-bezier(...)`   |
| `--hmfw-z-index-base`           | 基础层级（未使用） | `0`                   |
