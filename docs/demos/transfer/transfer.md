# Transfer 穿梭框

双栏穿梭选择框，用于将元素从一列移入另一列。

## 何时使用

- 需要在两个集合之间进行选择，且需要直观展示两个集合的内容时

## 代码演示

### 基础用法

<DemoBlock title="基础用法" :source="TransferBasicSource">
  <TransferBasic />
</DemoBlock>

## API

### Transfer Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 数据源 | `TransferItem[]` | `[]` |
| targetKeys (v-model) | 右侧列表的 key 集合 | `string[]` | `[]` |
| selectedKeys (v-model) | 选中项的 key 集合 | `string[]` | `[]` |
| titles | 标题集合 | `[string, string]` | `['', '']` |
| operations | 操作按钮文案 | `[string, string]` | `['>', '<']` |
| showSearch | 是否显示搜索框 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| showSelectAll | 是否展示全选勾选框 | `boolean` | `true` |

### TransferItem

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| key | 唯一标识 | `string` |
| title | 标题 | `string` |
| description | 描述 | `string` |
| disabled | 是否禁用 | `boolean` |
