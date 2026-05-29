# Tour 漫游引导

用于分步引导用户了解产品功能的组件。

## 何时使用

- 新功能上线时，引导用户了解新功能
- 复杂操作流程，需要分步骤引导用户完成

## 代码演示

### 基础用法

最简单的用法，无目标元素，居中展示。

<DemoBlock title="基础用法" :source="TourBasicSource">
  <TourBasic />
</DemoBlock>

## API

### Tour Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open (v-model) | 是否显示 | `boolean` | `false` |
| current (v-model) | 当前步骤 | `number` | `0` |
| steps | 步骤配置 | `TourStep[]` | `[]` |
| arrow | 是否显示箭头 | `boolean` | `true` |
| mask | 是否显示遮罩 | `boolean` | `true` |
| type | 类型 | `'default' \| 'primary'` | `'default'` |

### TourStep

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| title | 标题 | `string` |
| description | 描述 | `string` |
| target | 目标元素（CSS 选择器或返回元素的函数） | `string \| (() => HTMLElement \| null)` |
| placement | 弹出位置 | `TooltipPlacement` |
| cover | 封面图片地址 | `string` |

### Tour Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 步骤改变时 | `(current: number) => void` |
| close | 关闭时 | `() => void` |
| finish | 完成时（最后一步点击下一步） | `() => void` |
