# AutoComplete 自动完成

输入框自动完成功能。


## 何时使用

需要自动完成时。

- 需要一个输入框而不是选择器。
- 需要输入建议/辅助提示。

和 Select 的区别是：

- AutoComplete 是一个带提示的文本输入框，用户可以自由输入，关键词是辅助输入。
- Select 是在限定的可选项中进行选择，关键词是选择。

## 代码演示

### 基础用法

基本使用，通过 `options` 设置自动完成的数据源。

<DemoBlock title="基础用法" :source="AutoCompleteBasicSource">
  <AutoCompleteBasic />
</DemoBlock>

### 自定义选项

通过 `options` 的 `label` 属性自定义选项内容。

<DemoBlock title="自定义选项" :source="AutoCompleteCustomSource">
  <AutoCompleteCustom />
</DemoBlock>

### 邮箱补全

邮箱输入自动补全示例。

<DemoBlock title="邮箱补全" :source="AutoCompleteEmailSource">
  <AutoCompleteEmail />
</DemoBlock>

### 不同尺寸

三种大小的输入框，大的用在表单中，中的为默认。

<DemoBlock title="不同尺寸" :source="AutoCompleteSizeSource">
  <AutoCompleteSize />
</DemoBlock>

## API

### AutoComplete Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 指定当前选中的条目 | `string` | - |
| defaultValue | 指定默认选中的条目 | `string` | - |
| options | 数据源 | `AutoCompleteOption[]` | `[]` |
| disabled | 是否禁用 | `boolean` | `false` |
| placeholder | 输入框占位文本 | `string` | - |
| allowClear | 支持清除 | `boolean` | `false` |
| size | 输入框大小 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| status | 设置校验状态 | `'error' \| 'warning'` | - |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false | `boolean \| ((inputValue: string, option: AutoCompleteOption) => boolean)` | `true` |
| backfill | 使用键盘选择选项的时候把选中项回填到输入框中 | `boolean` | `false` |

### AutoCompleteOption

| 参数 | 说明 | 类型 |
|------|------|------|
| value | 选项的值 | `string` |
| label | 选项的标签，若不设置则默认与 value 相同 | `string` |
| disabled | 是否禁用该选项 | `boolean` |

### AutoComplete Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 选中 option，或 input 的 value 变化时，调用此函数 | `(value: string) => void` |
| change | 选中 option，或 input 的 value 变化时，调用此函数 | `(value: string) => void` |
| select | 被选中时调用，参数为选中项的 value 值 | `(value: string, option: AutoCompleteOption) => void` |
| search | 搜索补全项的时候调用 | `(value: string) => void` |
| focus | 获得焦点时的回调 | `(event: FocusEvent) => void` |
| blur | 失去焦点时的回调 | `(event: FocusEvent) => void` |
| clear | 点击清除按钮时的回调 | `() => void` |
