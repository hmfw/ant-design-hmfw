# Descriptions 描述列表

成组展示多个只读字段。

## 何时使用

- 常见于详情页的信息展示

## 代码演示

### 基础用法

简单的展示。

<DemoBlock title="基础用法" :source="DescriptionsBasicSource">
  <DescriptionsBasic />
</DemoBlock>

### 带边框

带边框和背景颜色列表。

<DemoBlock title="带边框" :source="DescriptionsBorderedSource">
  <DescriptionsBordered />
</DemoBlock>

### 垂直布局

垂直的列表。

<DemoBlock title="垂直布局" :source="DescriptionsVerticalSource">
  <DescriptionsVertical />
</DemoBlock>

### 垂直布局带边框

垂直布局与边框模式的组合使用，确保列边框和行边框正确显示。

<DemoBlock title="垂直布局带边框" :source="DescriptionsVerticalBorderedSource">
  <DescriptionsVerticalBordered />
</DemoBlock>

### 响应式列数

支持响应式的列数配置，窗口大小变化时自动调整列数布局。

<DemoBlock title="响应式列数" :source="DescriptionsResponsiveSource">
  <DescriptionsResponsive />
</DemoBlock>

### 不同尺寸

支持 default、middle、small 三种尺寸。

<DemoBlock title="不同尺寸" :source="DescriptionsSizesSource">
  <DescriptionsSizes />
</DemoBlock>

### Span 填充

使用 `span="filled"` 填充剩余列。

<DemoBlock title="Span 填充" :source="DescriptionsFilledSource">
  <DescriptionsFilled />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="DescriptionsClassNamesSource">
  <DescriptionsClassNames />
</DemoBlock>

## API

### Descriptions Props

| 参数         | 说明                                                                             | 类型                                           | 默认值         |
| ------------ | -------------------------------------------------------------------------------- | ---------------------------------------------- | -------------- |
| title        | 描述列表的标题                                                                   | `string \| VNode`                              | -              |
| extra        | 描述列表的操作区域                                                               | `string \| VNode \| slot`                      | -              |
| bordered     | 是否展示边框                                                                     | `boolean`                                      | `false`        |
| column       | 一行的 DescriptionItems 数量,可以是响应式对象                                    | `number \| Record<Breakpoint, number>`         | `3`            |
| size         | 设置列表的大小                                                                   | `'default' \| 'middle' \| 'small' \| 'medium'` | `'default'`    |
| layout       | 描述布局                                                                         | `'horizontal' \| 'vertical'`                   | `'horizontal'` |
| colon        | 配置 Descriptions.Item 的 colon 的默认值                                         | `boolean`                                      | `true`         |
| items        | 描述列表的数据项                                                                 | `DescriptionsItem[]`                           | -              |
| labelStyle   | 自定义标签样式(全局)                                                             | `CSSProperties`                                | -              |
| contentStyle | 自定义内容样式(全局)                                                             | `CSSProperties`                                | -              |
| classNames   | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `DescriptionsClassNames`                       | -              |
| styles       | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `DescriptionsStyles`                           | -              |

### DescriptionsItem

| 参数         | 说明                                     | 类型                                               | 默认值 |
| ------------ | ---------------------------------------- | -------------------------------------------------- | ------ |
| label        | 内容的描述                               | `string`                                           | -      |
| children     | 内容                                     | `any`                                              | -      |
| span         | 包含列的数量,可以是响应式对象或 'filled' | `number \| 'filled' \| Record<Breakpoint, number>` | `1`    |
| labelStyle   | 自定义标签样式                           | `CSSProperties`                                    | -      |
| contentStyle | 自定义内容样式                           | `CSSProperties`                                    | -      |

### Breakpoint

```ts
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
```

响应式断点:

- xs: `>= 0px`
- sm: `>= 576px`
- md: `>= 768px`
- lg: `>= 992px`
- xl: `>= 1200px`
- xxl: `>= 1600px`

## 功能特性

### 垂直布局边框样式

当 `layout="vertical"` 与 `bordered` 同时启用时，组件会渲染为垂直分组的表格结构（label 与 content 分别独占一行）。
内置样式确保每一列之间存在垂直分隔线，同时保留行之间的水平分隔线，渲染效果与水平边框模式一致。

```vue
<Descriptions title="用户信息" layout="vertical" bordered :items="items" />
```

### 响应式列数自动更新

`column` 属性支持传入响应式对象（按断点配置列数）。组件内部将 `useBreakpoint()` 实现为真正的响应式 composable：

- 在 `onMounted` 中绑定 `window.resize` 事件监听
- 使用 `debounce` 防抖（100ms 延迟）优化 resize 性能，避免频繁重渲染
- 在 `onUnmounted` 中自动清理监听器

当窗口大小跨越断点时，列数将自动重新计算并触发视图更新，无需用户手动刷新页面。

```vue
<Descriptions :column="{ xs: 1, sm: 2, md: 3, lg: 4 }" :items="items" />
```

### debounce 工具函数

新增的 `debounce` 防抖工具函数位于 `components/_utils/function.ts`，作为内部工具供组件库使用。

| 函数     | 说明                                             | 类型                                             |
| -------- | ------------------------------------------------ | ------------------------------------------------ |
| debounce | 在指定延迟后执行函数，延迟期间再次调用则重新计时 | `<T>(fn: T, delay: number) => (...args) => void` |

参数说明:

- `fn`: 需要防抖的目标函数
- `delay`: 延迟时间，单位毫秒

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface DescriptionsClassNames {
  root?: string // 根容器
  header?: string // 头部容器
  title?: string // 标题
  extra?: string // 右侧扩展
  view?: string // 视图容器
  row?: string // 表格行
  item?: string // 项容器（水平无边框布局）
  itemContainer?: string // 项内部容器（水平无边框布局）
  label?: string // 标签
  content?: string // 内容
}

interface DescriptionsStyles {
  root?: CSSProperties
  header?: CSSProperties
  title?: CSSProperties
  extra?: CSSProperties
  view?: CSSProperties
  row?: CSSProperties
  item?: CSSProperties
  itemContainer?: CSSProperties
  label?: CSSProperties
  content?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-descriptions">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-descriptions-header">
    <!-- ↑ classNames.header / styles.header 应用于此 -->
    <div class="hmfw-descriptions-title">
      <!-- ↑ classNames.title / styles.title 应用于此 -->
      标题
    </div>
    <div class="hmfw-descriptions-extra">
      <!-- ↑ classNames.extra / styles.extra 应用于此 -->
      操作区域
    </div>
  </div>
  <div class="hmfw-descriptions-view">
    <!-- ↑ classNames.view / styles.view 应用于此 -->
    <table>
      <tbody>
        <tr class="hmfw-descriptions-row">
          <!-- ↑ classNames.row / styles.row 应用于此 -->

          <!-- 垂直布局 / 有边框布局 -->
          <th class="hmfw-descriptions-item-label">
            <!-- ↑ classNames.label / styles.label 应用于此 -->
            标签
          </th>
          <td class="hmfw-descriptions-item-content">
            <!-- ↑ classNames.content / styles.content 应用于此 -->
            内容
          </td>

          <!-- 水平无边框布局 -->
          <td class="hmfw-descriptions-item">
            <!-- ↑ classNames.item / styles.item 应用于此 -->
            <div class="hmfw-descriptions-item-container">
              <!-- ↑ classNames.itemContainer / styles.itemContainer 应用于此 -->
              <span class="hmfw-descriptions-item-label">
                <!-- ↑ classNames.label / styles.label 应用于此 -->
                标签
              </span>
              <span class="hmfw-descriptions-item-content">
                <!-- ↑ classNames.content / styles.content 应用于此 -->
                内容
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <Descriptions
    title="用户信息"
    extra="编辑"
    :items="items"
    :class-names="{
      header: 'custom-header',
      title: 'custom-title',
      label: 'custom-label',
      content: 'custom-content',
    }"
  />
</template>

<style scoped>
:deep(.custom-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px 20px;
  border-radius: 8px 8px 0 0;
}

:deep(.custom-title) {
  color: white;
  font-size: 18px;
  font-weight: 600;
}

:deep(.custom-label) {
  background: #f0f5ff;
  color: #1890ff;
  font-weight: 600;
}

:deep(.custom-content) {
  background: #fafafa;
  font-family: 'Monaco', monospace;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <Descriptions
    title="配置信息"
    :items="items"
    :styles="{
      root: { border: '2px solid #1890ff', borderRadius: '12px', padding: '16px' },
      title: { fontSize: '18px', color: '#1890ff', fontWeight: 600 },
      label: { color: '#8c8c8c', fontWeight: 500 },
      content: { color: '#262626', fontWeight: 600 },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `item` 和 `itemContainer` 仅在水平无边框布局（`layout="horizontal"` 且 `bordered={false}`）时生效
- 在垂直布局或有边框布局中，标签和内容分别使用 `<th>` 和 `<td>` 元素
- `header`、`title` 和 `extra` 仅在设置了 `title` 或 `extra` 属性时渲染
- `row` 应用于每一个表格行，可用于实现 hover 效果或斑马纹
- `label` 和 `content` 在所有布局模式下都会应用

## 设计 Token

| Token 名称                    | 说明         | 默认值               |
| ----------------------------- | ------------ | -------------------- |
| `--hmfw-color-text`           | 主文本颜色   | `rgba(0,0,0,0.88)`   |
| `--hmfw-color-text-secondary` | 次要文本颜色 | `rgba(0,0,0,0.65)`   |
| `--hmfw-color-border`         | 边框颜色     | `#d9d9d9`            |
| `--hmfw-color-fill-alter`     | 备用填充色   | `rgba(0,0,0,0.02)`   |
| `--hmfw-font-size-base`       | 标准字号     | `14px`               |
| `--hmfw-font-size-lg`         | 大字号       | `16px`               |
| `--hmfw-line-height-base`     | 标准行高     | `1.5714285714285714` |
| `--hmfw-line-height-lg`       | 大行高       | `1.5`                |
| `--hmfw-padding-xs`           | 超小内边距   | `8px`                |
| `--hmfw-padding-sm`           | 小内边距     | `12px`               |
| `--hmfw-padding`              | 标准内边距   | `16px`               |
| `--hmfw-padding-lg`           | 大内边距     | `24px`               |
| `--hmfw-margin`               | 标准外边距   | `16px`               |
| `--hmfw-margin-xs`            | 超小外边距   | `8px`                |
| `--hmfw-border-radius-lg`     | 大圆角       | `8px`                |
