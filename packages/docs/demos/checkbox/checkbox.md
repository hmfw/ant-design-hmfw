# Checkbox 多选框

多选框。


## 何时使用

- 在一组可选项中进行多项选择时。
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

### 基础用法

简单的 checkbox。

<DemoBlock title="基础用法" :source="CheckboxBasicSource">
  <CheckboxBasic />
</DemoBlock>

### CheckboxGroup

方便的从数组生成 Checkbox 组。

<DemoBlock title="CheckboxGroup" :source="CheckboxGroupSource">
  <CheckboxGroup />
</DemoBlock>

### 全选

在实现全选效果时，你可能会用到 `indeterminate` 属性。

<DemoBlock title="全选" :source="CheckboxCheckAllSource">
  <CheckboxCheckAll />
</DemoBlock>

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| checked(v-model) | 指定当前是否选中 | `boolean` | `false` |
| defaultChecked | 初始是否选中 | `boolean` | `false` |
| disabled | 失效状态 | `boolean` | `false` |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | `boolean` | `false` |
| value | checkbox 的 value，在 CheckboxGroup 中使用 | `string \| number` | - |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 指定选中的选项 | `(string \| number)[]` | `[]` |
| defaultValue | 默认选中的选项 | `(string \| number)[]` | `[]` |
| options | 指定可选项 | `Array<{ label: string; value: string \| number; disabled?: boolean }>` | `[]` |
| disabled | 整组失效 | `boolean` | `false` |
| direction | 排列方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |

### Checkbox Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:checked | 变化时回调函数（Checkbox） | `(checked: boolean) => void` |
| change | 变化时回调函数 | `(event: Event) => void` |

### CheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 变化时回调函数 | `(value: (string \| number)[]) => void` |
| change | 变化时回调函数 | `(value: (string \| number)[]) => void` |

### Checkbox Slots

| 插槽名 | 说明 |
|--------|------|
| default | checkbox 的内容 |
