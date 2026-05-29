# Segmented 分段控制器

分段控制器。

## 何时使用

- 用于展示多个选项并允许用户选择其中单个选项
- 当切换选中选项时，关联区域的内容会发生变化

## 代码演示


### 基础用法

基本分段控制器。

<DemoBlock title="基础用法" :source="SegmentedBasicSource">
  <SegmentedBasic />
</DemoBlock>

### Block 模式

block 属性使其适合父元素宽度。

<DemoBlock title="Block 模式" :source="SegmentedBlockSource">
  <SegmentedBlock />
</DemoBlock>

### 禁用

禁用某些选项。

<DemoBlock title="禁用" :source="SegmentedDisabledSource">
  <SegmentedDisabled />
</DemoBlock>

## API

### Segmented Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value (v-model) | 当前选中的值 | `string \| number` | - |
| defaultValue | 默认选中的值 | `string \| number` | - |
| options | 数据化配置选项内容 | `string[] \| SegmentedOption[]` | `[]` |
| disabled | 是否禁用 | `boolean` | `false` |
| block | 将宽度调整为父元素宽度 | `boolean` | `false` |
| size | 控件大小 | `'large' \| 'middle' \| 'small'` | `'middle'` |

### SegmentedOption

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选项值 | `string \| number` | - |
| label | 选项标签 | `string` | - |
| icon | 选项图标 | `slot` | - |
| disabled | 是否禁用 | `boolean` | `false` |

### Segmented Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:value | 选项变化时的回调函数 | `(value: string \| number) => void` |
| change | 选项变化时的回调函数 | `(value: string \| number) => void` |
