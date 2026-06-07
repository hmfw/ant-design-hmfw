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

## API

### Descriptions Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 描述列表的标题 | `string \| VNode` | - |
| extra | 描述列表的操作区域 | `string \| VNode \| slot` | - |
| bordered | 是否展示边框 | `boolean` | `false` |
| column | 一行的 DescriptionItems 数量,可以是响应式对象 | `number \| Record<Breakpoint, number>` | `3` |
| size | 设置列表的大小 | `'default' \| 'middle' \| 'small' \| 'medium'` | `'default'` |
| layout | 描述布局 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| colon | 配置 Descriptions.Item 的 colon 的默认值 | `boolean` | `true` |
| items | 描述列表的数据项 | `DescriptionsItem[]` | - |
| labelStyle | 自定义标签样式(全局) | `CSSProperties` | - |
| contentStyle | 自定义内容样式(全局) | `CSSProperties` | - |

### DescriptionsItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 内容的描述 | `string` | - |
| children | 内容 | `any` | - |
| span | 包含列的数量,可以是响应式对象或 'filled' | `number \| 'filled' \| Record<Breakpoint, number>` | `1` |
| labelStyle | 自定义标签样式 | `CSSProperties` | - |
| contentStyle | 自定义内容样式 | `CSSProperties` | - |

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

| 函数 | 说明 | 类型 |
| --- | --- | --- |
| debounce | 在指定延迟后执行函数，延迟期间再次调用则重新计时 | `<T>(fn: T, delay: number) => (...args) => void` |

参数说明:
- `fn`: 需要防抖的目标函数
- `delay`: 延迟时间，单位毫秒

