# Form 表单

高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。


## 何时使用

- 用于创建一个实体或收集信息。
- 需要对输入的数据类型进行校验时。

## 代码演示

### 基础表单

基本的表单数据域控制展示，包含布局、初始化、验证、提交。

<DemoBlock title="基础表单" :source="FormBasicSource">
  <FormBasic />
</DemoBlock>

### 表单校验

Form 组件提供了表单验证的功能，只需为 FormItem 设置 `rules` 属性即可。

<DemoBlock title="表单校验" :source="FormValidationSource">
  <FormValidation />
</DemoBlock>

### 内联表单

内联排列表单项。

<DemoBlock title="内联表单" :source="FormInlineSource">
  <FormInline />
</DemoBlock>

## API

### Form Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| model | 表单数据对象 | `object` | - |
| rules | 表单验证规则 | `Record<string, FormRule[]>` | - |
| layout | 表单布局 | `'horizontal' \| 'vertical' \| 'inline'` | `'horizontal'` |
| labelCol | label 标签布局，同 Col 组件 | `{ span?: number; offset?: number }` | - |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol | `{ span?: number; offset?: number }` | - |
| disabled | 设置表单组件禁用，仅对 ant-design-hmfw 组件有效 | `boolean` | `false` |
| size | 设置字段组件的尺寸 | `'small' \| 'middle' \| 'large'` | `'middle'` |

### FormItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| label | label 标签的文本 | `string` | - |
| name | 字段名，支持数组 | `string \| string[]` | - |
| rules | 校验规则，设置字段的校验逻辑 | `FormRule[]` | - |
| required | 必填样式设置。如不设置，则会根据校验规则自动生成 | `boolean` | `false` |
| validateStatus | 校验状态，如不设置，则会根据校验规则自动生成 | `'success' \| 'warning' \| 'error' \| 'validating'` | - |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | `string` | - |
| labelCol | label 标签布局，同 Col 组件，优先级高于 Form 的 labelCol | `{ span?: number; offset?: number }` | - |
| wrapperCol | 输入控件布局样式，优先级高于 Form 的 wrapperCol | `{ span?: number; offset?: number }` | - |

### FormRule

| 参数 | 说明 | 类型 |
|------|------|------|
| required | 是否必填 | `boolean` |
| message | 校验失败时的提示信息 | `string` |
| type | 类型，常见有 `string` `number` `email` `url` | `string` |
| min | 最小长度（string）或最小值（number） | `number` |
| max | 最大长度（string）或最大值（number） | `number` |
| pattern | 正则表达式校验 | `RegExp` |
| validator | 自定义校验函数 | `(rule: FormRule, value: any) => Promise<void>` |

### Form 方法（通过 ref 调用）

| 方法名 | 说明 | 参数 |
|--------|------|------|
| validate | 触发表单验证 | `(nameList?: string[]) => Promise<void>` |
| resetFields | 重置一组字段到初始值 | `(nameList?: string[]) => void` |
| clearValidate | 清理某个字段的表单验证信息 | `(nameList?: string[]) => void` |

### Form Slots

| 插槽名 | 说明 |
|--------|------|
| default | 表单内容 |

### FormItem Slots

| 插槽名 | 说明 |
|--------|------|
| default | 表单控件 |
| label | 自定义 label 内容 |
