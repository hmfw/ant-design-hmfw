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

### skipGroup 属性

在 CheckboxGroup 中使用 `skipGroup` 可以让复选框独立控制，不受组管理。

<DemoBlock title="skipGroup" :source="CheckboxSkipGroupSource">
  <CheckboxSkipGroup />
</DemoBlock>

### id 属性绑定

id 属性会自动绑定到原生 input 元素，方便配合 label 使用。

<DemoBlock title="id 属性" :source="CheckboxIdBindingSource">
  <CheckboxIdBinding />
</DemoBlock>

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| checked(v-model) | 指定当前是否选中 | `boolean` | `false` |
| defaultChecked | 初始是否选中 | `boolean` | `false` |
| disabled | 失效状态 | `boolean` | `false` |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | `boolean` | `false` |
| value | checkbox 的 value，在 CheckboxGroup 中使用 | `string \| number \| boolean` | - |
| autoFocus | 自动获取焦点 | `boolean` | `false` |
| name | input[type="checkbox"] 的 name 属性 | `string` | - |
| id | input[type="checkbox"] 的 id 属性 | `string` | - |
| title | input[type="checkbox"] 的 title 属性 | `string` | - |
| tabIndex | input[type="checkbox"] 的 tabindex 属性 | `number` | - |
| required | input[type="checkbox"] 的 required 属性 | `boolean` | `false` |
| skipGroup | 在 CheckboxGroup 中时，跳过组控制 | `boolean` | `false` |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 指定选中的选项 | `(string \| number \| boolean)[]` | `[]` |
| defaultValue | 默认选中的选项 | `(string \| number \| boolean)[]` | `[]` |
| options | 指定可选项 | `Array<string \| number \| CheckboxOptionType>` | `[]` |
| disabled | 整组失效 | `boolean` | `false` |
| name | CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| className | 自定义类名 | `string` | - |

### CheckboxOptionType

| 参数 | 说明 | 类型 |
|------|------|------|
| label | 选项显示文本 | `string` |
| value | 选项值 | `string \| number \| boolean` |
| disabled | 是否禁用 | `boolean` |
| style | 自定义样式 | `CSSProperties` |
| className | 自定义类名 | `string` |
| title | title 属性 | `string` |
| id | id 属性 | `string` |
| required | required 属性 | `boolean` |

### Checkbox Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:checked | 变化时回调函数（Checkbox） | `(checked: boolean) => void` |
| change | 变化时回调函数 | `(event: CheckboxChangeEvent) => void` |
| click | 点击时回调函数 | `(event: MouseEvent) => void` |
| mouseenter | 鼠标移入时回调函数 | `(event: MouseEvent) => void` |
| mouseleave | 鼠标移出时回调函数 | `(event: MouseEvent) => void` |
| focus | 获得焦点时回调函数 | `(event: FocusEvent) => void` |
| blur | 失去焦点时回调函数 | `(event: FocusEvent) => void` |
| keypress | 按键时回调函数 | `(event: KeyboardEvent) => void` |
| keydown | 按键按下时回调函数 | `(event: KeyboardEvent) => void` |

### CheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 变化时回调函数 | `(value: (string \| number \| boolean)[]) => void` |
| change | 变化时回调函数 | `(value: (string \| number \| boolean)[]) => void` |

### Checkbox Slots

| 插槽名 | 说明 |
|--------|------|
| default | checkbox 的内容 |
