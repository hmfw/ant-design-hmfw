# Masonry 瀑布流

瀑布流布局组件，用于展示不同高度的内容。

## 何时使用

- 展示不规则高度的图片或卡片时
- 需要按照列数均匀分布内容时
- 需要响应式调整列数时

瀑布流布局通过贪心算法将每个项目放置在当前最短的列中，实现视觉上的平衡和美观。

## 代码演示

### 基础用法

最简单的用法，通过 `items` 传入数据，通过默认插槽渲染每个项目。

<DemoBlock title="基础用法" :source="MasonryBasicSource">
  <MasonryBasic />
</DemoBlock>

### 响应式列数

通过 `columns` 设置响应式列数，支持 `xs`、`sm`、`md`、`lg`、`xl`、`xxl`、`xxxl` 七个断点。

<DemoBlock title="响应式列数" :source="MasonryResponsiveSource">
  <MasonryResponsive />
</DemoBlock>

### 图片瀑布流

使用 `fresh` 属性持续监听图片加载导致的尺寸变化，自动重新布局。

<DemoBlock title="图片瀑布流" :source="MasonryImageSource">
  <MasonryImage />
</DemoBlock>

### 动态更新

支持动态添加、删除和排序项目，布局会自动更新。

<DemoBlock title="动态更新" :source="MasonryDynamicSource">
  <MasonryDynamic />
</DemoBlock>

## API

### Masonry Props

| 参数       | 说明                                                                             | 类型                                            | 默认值           |
| ---------- | -------------------------------------------------------------------------------- | ----------------------------------------------- | ---------------- |
| items      | 瀑布流项数据                                                                     | `MasonryItemType[]`                             | `[]`             |
| columns    | 列数，支持固定值或响应式配置                                                     | `number \| Partial<Record<Breakpoint, number>>` | `3`              |
| gutter     | 项目间距，支持单值或 `[水平间距, 垂直间距]`                                      | `number \| [number, number]`                    | `0`              |
| fresh      | 是否持续监听子项尺寸变化                                                         | `boolean`                                       | `false`          |
| prefixCls  | 自定义类名前缀                                                                   | `string`                                        | `'hmfw-masonry'` |
| className  | 根元素类名                                                                       | `string`                                        | -                |
| style      | 根元素样式                                                                       | `CSSProperties`                                 | -                |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `MasonryClassNames`                             | -                |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `MasonryStyles`                                 | -                |

### Masonry Events

| 事件名       | 说明           | 回调参数                                                          |
| ------------ | -------------- | ----------------------------------------------------------------- |
| layoutChange | 布局变化时触发 | `(sortInfo: { key: string \| number; column: number }[]) => void` |

### Masonry Slots

| 插槽名  | 说明           | 参数                                           |
| ------- | -------------- | ---------------------------------------------- |
| default | 自定义项目渲染 | `{ item: any, index: number, column: number }` |

### MasonryItemType

| 参数   | 说明                 | 类型               | 默认值 |
| ------ | -------------------- | ------------------ | ------ |
| key    | 唯一标识             | `string \| number` | -      |
| data   | 自定义存储数据       | `any`              | -      |
| column | 预指定所在列（可选） | `number`           | -      |
| height | 预设高度（可选）     | `number`           | -      |

### Breakpoint

响应式断点类型：

```typescript
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
```

断点对应的屏幕宽度：

- `xs`: `< 576px`
- `sm`: `≥ 576px`
- `md`: `≥ 768px`
- `lg`: `≥ 992px`
- `xl`: `≥ 1200px`
- `xxl`: `≥ 1600px`
- `xxxl`: `≥ 1920px`

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对瀑布流容器和项目应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface MasonryClassNames {
  root?: string // 瀑布流容器根节点
  item?: string // 每个瀑布流项目
}

interface MasonryStyles {
  root?: CSSProperties
  item?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- 瀑布流容器 -->
<div class="hmfw-masonry">
  <!-- ↑ classNames.root / styles.root 应用于此 -->

  <!-- 瀑布流项目 1 -->
  <div class="hmfw-masonry-item" style="position: absolute; left: 0; top: 0; width: calc(...)">
    <!-- ↑ classNames.item / styles.item 应用于此 -->
    <!-- 项目内容由插槽渲染 -->
  </div>

  <!-- 瀑布流项目 2 -->
  <div class="hmfw-masonry-item" style="position: absolute; left: calc(...); top: 0; width: calc(...)">
    <!-- 项目内容 -->
  </div>

  <!-- 更多项目... -->
</div>

<!-- RTL 模式：容器上追加 hmfw-masonry-rtl -->
<div class="hmfw-masonry hmfw-masonry-rtl">
  <!-- 项目使用 right 而非 left 定位 -->
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义容器样式 -->
  <Masonry :items="items" :columns="4" :gutter="16" :class-names="{ root: 'my-masonry-container' }">
    <template #default="{ item }">
      <Card>{{ item }}</Card>
    </template>
  </Masonry>

  <!-- 自定义项目样式 -->
  <Masonry :items="items" :columns="4" :gutter="16" :class-names="{ item: 'my-masonry-item' }">
    <template #default="{ item }">
      <Card>{{ item }}</Card>
    </template>
  </Masonry>
</template>

<style scoped>
:deep(.my-masonry-container) {
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
}

:deep(.my-masonry-item) {
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

:deep(.my-masonry-item:hover) {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制容器 -->
  <Masonry
    :items="items"
    :columns="4"
    :gutter="16"
    :styles="{
      root: { background: '#f5f5f5', padding: '16px' },
    }"
  >
    <template #default="{ item }">
      <Card>{{ item }}</Card>
    </template>
  </Masonry>

  <!-- 自定义项目边框 -->
  <Masonry
    :items="items"
    :columns="4"
    :gutter="16"
    :styles="{
      item: { border: '2px solid #1677ff', borderRadius: '8px' },
    }"
  >
    <template #default="{ item }">
      <Card>{{ item }}</Card>
    </template>
  </Masonry>

  <!-- 组合使用 -->
  <Masonry
    :items="items"
    :columns="4"
    :gutter="16"
    :styles="{
      root: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      item: { borderRadius: '12px', overflow: 'hidden' },
    }"
  >
    <template #default="{ item }">
      <Card>{{ item }}</Card>
    </template>
  </Masonry>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- 语义节点只有 `root` 和 `item` 两个
- `styles.item` 会与组件内置的定位样式合并，请避免覆盖 `position`、`left`/`right`、`top`、`width` 等布局相关属性
- RTL 模式下，容器会自动添加 `.hmfw-masonry-rtl` 类，项目使用 `right` 定位
- 项目的过渡动画已内置，如需自定义可通过 `classNames.item` 覆盖

## 设计 Token

Masonry 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                    | 说明         | 默认值                                |
| ----------------------------- | ------------ | ------------------------------------- |
| `--hmfw-motion-duration-slow` | 慢速动画时长 | `0.3s`                                |
| `--hmfw-motion-ease-out`      | 缓出曲线     | `cubic-bezier(0.215, 0.61, 0.355, 1)` |

## 常见问题

### 如何解决项目重叠问题？

确保每个项目都有固定的高度或内容已完全加载。如果内容是动态加载的（如图片），请使用 `fresh` 属性：

```vue
<Masonry :items="items" :columns="4" fresh>
  <template #default="{ item }">
    <img :src="item" />
  </template>
</Masonry>
```

### 如何实现更平滑的过渡动画？

通过 `classNames.item` 自定义过渡效果：

```vue
<Masonry :items="items" :class-names="{ item: 'smooth-item' }">
  <!-- ... -->
</Masonry>

<style scoped>
:deep(.smooth-item) {
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
```

### 如何控制最小列数？

在响应式配置中设置 `xs` 断点：

```vue
<Masonry :columns="{ xs: 2, sm: 3, md: 4 }" :items="items">
  <!-- 最小始终显示 2 列 -->
</Masonry>
```

### 性能优化建议

1. 避免频繁更新 `items`，使用稳定的 `key` 值
2. 大量项目时考虑虚拟滚动（可结合 Listy 组件）
3. 图片使用懒加载和合适的尺寸
4. 非必要不开启 `fresh` 模式（会持续监听尺寸变化）
