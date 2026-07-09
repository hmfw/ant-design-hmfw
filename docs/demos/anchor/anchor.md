# Anchor 锚点

用于跳转到页面指定位置。

## 何时使用

- 需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转时
- 需要固定在页面某个位置时

## 代码演示

### 基础用法（垂直）

最简单的用法，垂直方向展示锚点列表。

<DemoBlock title="基础用法（垂直）" :source="AnchorBasicSource">
  <AnchorBasic />
</DemoBlock>

### 使用 Anchor.Link

使用 `Anchor.Link` 组件作为子组件。

<DemoBlock title="使用 Anchor.Link" :source="AnchorLinkSource">
  <AnchorLink />
</DemoBlock>

### 水平锚点

通过 `direction="horizontal"` 设置水平方向锚点。

<DemoBlock title="水平锚点" :source="AnchorHorizontalSource">
  <AnchorHorizontal />
</DemoBlock>

### 自定义目标偏移

通过 `targetOffset` 设置全局偏移，或在 `Anchor.Link` 上设置单独偏移。

<DemoBlock title="自定义目标偏移" :source="AnchorTargetOffsetSource">
  <AnchorTargetOffset />
</DemoBlock>

### 固定锚点

通过 `affix` 属性让锚点固定在页面某个位置。

<DemoBlock title="固定锚点" :source="AnchorAffixSource">
  <AnchorAffix />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="AnchorClassNamesSource">
  <AnchorClassNames />
</DemoBlock>

### 自定义边界

通过 `bounds` 属性调整锚点高亮的判定边界值，影响激活状态切换的灵敏度。

<DemoBlock title="自定义边界" :source="AnchorBoundsSource">
  <AnchorBounds />
</DemoBlock>

### 替换历史记录

通过 `replace` 属性控制点击锚点时是添加新历史记录（`pushState`）还是替换当前记录（`replaceState`）。

<DemoBlock title="替换历史记录" :source="AnchorReplaceSource">
  <AnchorReplace />
</DemoBlock>

### 自定义高亮锚点

通过 `getCurrentAnchor` 自定义激活锚点的判定逻辑。

<DemoBlock title="自定义高亮锚点" :source="AnchorGetCurrentAnchorSource">
  <AnchorGetCurrentAnchor />
</DemoBlock>

### 自定义滚动容器

通过 `getContainer` 指定滚动的目标容器，适用于锚点与内容区域不在同一滚动上下文中的场景。

<DemoBlock title="自定义滚动容器" :source="AnchorGetContainerSource">
  <AnchorGetContainer />
</DemoBlock>

### 外部链接

锚点支持外部链接（http/https），可配合 `target` 属性在新窗口中打开。

<DemoBlock title="外部链接" :source="AnchorExternalLinkSource">
  <AnchorExternalLink />
</DemoBlock>

## API

### Anchor Props

| 参数             | 说明                                                                             | 类型                             | 默认值         |
| ---------------- | -------------------------------------------------------------------------------- | -------------------------------- | -------------- |
| items            | 数据化配置选项内容                                                               | `AnchorLinkItem[]`               | `[]`           |
| affix            | 固定模式                                                                         | `boolean`                        | `true`         |
| offsetTop        | 距离窗口顶部达到指定偏移量后触发，影响滚动定位、高亮判定和 wrapper 高度          | `number`                         | `0`            |
| direction        | 锚点方向                                                                         | `'vertical' \| 'horizontal'`     | `'vertical'`   |
| bounds           | 锚点区域边界                                                                     | `number`                         | `5`            |
| replace          | 是否替换浏览器历史记录                                                           | `boolean`                        | `false`        |
| getCurrentAnchor | 自定义高亮的锚点                                                                 | `(activeLink: string) => string` | -              |
| getContainer     | 指定滚动的容器                                                                   | `() => HTMLElement \| Window`    | `() => window` |
| classNames       | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `AnchorClassNames`               | -              |
| styles           | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `AnchorStyles`                   | -              |

### AnchorLinkItem

| 参数         | 说明               | 类型               | 默认值 |
| ------------ | ------------------ | ------------------ | ------ |
| key          | 唯一标识           | `string`           | -      |
| href         | 锚点链接           | `string`           | -      |
| title        | 文字内容           | `string`           | -      |
| target       | 链接打开方式       | `string`           | -      |
| targetOffset | 该锚点的滚动偏移量 | `number`           | -      |
| children     | 子节点             | `AnchorLinkItem[]` | -      |

### Anchor.Link Props

| 参数         | 说明                   | 类型      | 默认值  |
| ------------ | ---------------------- | --------- | ------- |
| href         | 锚点链接               | `string`  | -       |
| title        | 文字内容               | `string`  | -       |
| target       | 链接打开方式           | `string`  | -       |
| replace      | 是否替换浏览器历史记录 | `boolean` | `false` |
| targetOffset | 该锚点的滚动偏移量     | `number`  | -       |

### Anchor Events

| 事件名 | 说明           | 回调参数                                                         |
| ------ | -------------- | ---------------------------------------------------------------- |
| change | 锚点改变时触发 | `(currentActiveLink: string) => void`                            |
| click  | 点击锚点时触发 | `(e: MouseEvent, link: { title: string; href: string }) => void` |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对锚点组件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface AnchorClassNames {
  wrapper?: string // 外层滚动容器（Anchor 组件的最外层 div）
  root?: string // 锚点根容器（包含 ink 和链接的内层容器）
  ink?: string // 指示器滑块（当前激活项的视觉指示器）
  link?: string // 链接项容器（每个 AnchorLink 的 div 包裹层）
  linkActive?: string // 激活状态的链接项（当前激活的链接项额外样式）
  title?: string // 链接文本（a 标签）
  titleActive?: string // 激活状态的链接文本（当前激活的链接文本额外样式）
}

interface AnchorStyles {
  wrapper?: CSSProperties
  root?: CSSProperties
  ink?: CSSProperties
  link?: CSSProperties
  linkActive?: CSSProperties
  title?: CSSProperties
  titleActive?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- 垂直锚点结构 -->
<div class="hmfw-anchor-wrapper">
  <!-- ↑ classNames.wrapper / styles.wrapper 应用于此 -->
  <div class="hmfw-anchor">
    <!-- ↑ classNames.root / styles.root 应用于此 -->
    <span class="hmfw-anchor-ink">
      <!-- ↑ classNames.ink / styles.ink 应用于此 -->
    </span>
    <div class="hmfw-anchor-link">
      <!-- ↑ classNames.link / styles.link 应用于此 -->
      <a class="hmfw-anchor-link-title" href="#section-1">
        <!-- ↑ classNames.title / styles.title 应用于此 -->
        锚点标题
      </a>
    </div>
    <div class="hmfw-anchor-link hmfw-anchor-link-active">
      <!-- ↑ classNames.link + classNames.linkActive 叠加应用 -->
      <!-- ↑ styles.link + styles.linkActive 合并应用 -->
      <a class="hmfw-anchor-link-title hmfw-anchor-link-title-active" href="#section-2">
        <!-- ↑ classNames.title + classNames.titleActive 叠加应用 -->
        <!-- ↑ styles.title + styles.titleActive 合并应用 -->
        当前激活锚点
      </a>
    </div>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义根容器和墨水条 -->
  <Anchor
    :items="items"
    :class-names="{
      root: 'my-anchor-root',
      ink: 'my-anchor-ink',
    }"
  />

  <!-- 自定义链接项和激活状态 -->
  <Anchor
    :items="items"
    :class-names="{
      link: 'my-anchor-link',
      linkActive: 'my-link-active',
      title: 'my-link-title',
      titleActive: 'my-title-active',
    }"
  />
</template>

<style scoped>
:deep(.my-anchor-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px;
  border-radius: 8px;
}

:deep(.my-anchor-ink) {
  background: white;
  width: 3px;
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
}

:deep(.my-anchor-link) {
  padding: 8px 12px;
  margin: 4px 0;
  border-radius: 6px;
  transition: all 0.3s;
}

:deep(.my-link-active) {
  background: linear-gradient(90deg, #e6f4ff 0%, transparent 100%);
  border-left: 3px solid #1677ff;
}

:deep(.my-title-active) {
  color: #1677ff;
  font-weight: 600;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制墨水条 -->
  <Anchor
    :items="items"
    :styles="{
      ink: { width: '4px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    }"
  />

  <!-- 自定义链接文本样式 -->
  <Anchor
    :items="items"
    :styles="{
      title: { fontSize: '15px', fontWeight: 500 },
      titleActive: { color: '#52c41a' },
    }"
  />

  <!-- 组合使用 -->
  <Anchor
    :items="items"
    :styles="{
      root: { background: '#f0f5ff', padding: '12px', borderRadius: '8px' },
      ink: { width: '3px' },
      link: { margin: '6px 0' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- 激活状态时，`classNames.linkActive` 与 `classNames.link` 会**叠加**应用在同一个 `<div>` 上
- 激活状态时，`styles.linkActive` 与 `styles.link` 会**合并**应用，`styles.linkActive` 优先
- 同样地，`classNames.titleActive` / `styles.titleActive` 会叠加/合并到激活的标题元素上
- `wrapper` 是最外层容器，用于控制整体布局；`root` 是内层锚点容器，包含墨水条和链接列表
- 水平锚点（`direction="horizontal"`）和垂直锚点共享相同的 classNames/styles 结构

## 设计 Token

Anchor 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                    | 说明         | 默认值                |
| ----------------------------- | ------------ | --------------------- |
| `--hmfw-color-primary`        | 主题色       | `#1677ff`             |
| `--hmfw-color-primary-hover`  | 主题色悬停态 | `#4096ff`             |
| `--hmfw-color-split`          | 分割线颜色   | `rgba(5, 5, 5, 0.06)` |
| `--hmfw-color-text`           | 主文本色     | `rgba(0, 0, 0, 0.88)` |
| `--hmfw-font-size-base`       | 标准字号     | `14px`                |
| `--hmfw-line-height`          | 标准行高     | `1.5714285714285714`  |
| `--hmfw-line-width-bold`      | 粗线宽       | `2px`                 |
| `--hmfw-motion-duration-slow` | 慢速动画时长 | `0.3s`                |
| `--hmfw-padding`              | 标准内边距   | `12px`                |
| `--hmfw-padding-xxs`          | 超小内边距   | `2px`                 |
