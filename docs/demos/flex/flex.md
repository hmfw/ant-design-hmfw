# Flex 弹性布局

弹性布局。

## 何时使用

- 需要在水平或垂直方向上排列元素时
- 需要控制元素间距、对齐方式时
- 替代传统的 float 布局

## 代码演示

### 基础水平排列

默认水平排列，通过 `justify` 和 `align` 控制对齐。

<DemoBlock title="基础水平排列" :source="FlexBasicSource">
  <FlexBasic />
</DemoBlock>

### 垂直排列

通过 `vertical` 属性设置垂直方向排列。

<DemoBlock title="垂直排列" :source="FlexVerticalSource">
  <FlexVertical />
</DemoBlock>

### 交叉轴对齐

通过 `align` 属性控制子元素在交叉轴上的对齐方式。

<DemoBlock title="交叉轴对齐" :source="FlexAlignSource">
  <FlexAlign />
</DemoBlock>

### 间距设置

通过 `gap` 属性设置元素间距，支持预设值和数字。

<DemoBlock title="间距设置" :source="FlexGapSource">
  <FlexGap />
</DemoBlock>

### 自动换行

通过 `wrap` 属性允许子元素换行。

<DemoBlock title="自动换行" :source="FlexWrapSource">
  <FlexWrap />
</DemoBlock>

### 自定义元素标签

通过 `component` 属性设置渲染的 HTML 标签，支持语义化 HTML。

<DemoBlock title="自定义元素标签" :source="FlexComponentSource">
  <FlexComponent />
</DemoBlock>

## API

### Flex Props

| 参数      | 说明                                 | 类型                                                                                                                       | 默认值  |
| --------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| vertical  | 是否垂直方向排列                     | `boolean`                                                                                                                  | `false` |
| wrap      | 是否自动换行                         | `boolean \| string`                                                                                                        | `false` |
| justify   | 主轴对齐方式，对应 `justify-content` | `'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly' \| 'start' \| 'end' \| ...` | -       |
| align     | 交叉轴对齐方式，对应 `align-items`   | `'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline' \| 'start' \| 'end' \| ...`                             | -       |
| gap       | 子元素间距                           | `'small' \| 'middle' \| 'large' \| number`                                                                                 | -       |
| flex      | flex CSS 简写属性                    | `string \| number`                                                                                                         | -       |
| component | 自定义元素类型                       | `string`                                                                                                                   | `'div'` |

### Flex Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 子元素内容 |

---

Flex 是单元素透传组件，可直接使用原生 class 和 style attribute 进行样式定制。

## 设计 Token

Flex 组件通过以下 Design Token 控制 gap 预设间距，可通过 `ConfigProvider` 的 `theme` 属性全局覆盖：

| Token               | 默认值 | gap 预设       | 用途   |
| ------------------- | ------ | -------------- | ------ |
| `--hmfw-padding-xs` | `8px`  | `gap="small"`  | 小间距 |
| `--hmfw-padding`    | `16px` | `gap="middle"` | 中间距 |
| `--hmfw-padding-lg` | `24px` | `gap="large"`  | 大间距 |

自定义示例：

```vue
<ConfigProvider :theme="{ paddingXS: 12, padding: 20, paddingLG: 32 }">
  <Flex gap="middle">...</Flex>
</ConfigProvider>
```
