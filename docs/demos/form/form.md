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

### 高级 API 演示

展示 Form 的高级查询 API：`getFieldsError`、`isFieldsTouched` 等批量查询方法。

<DemoBlock title="高级 API" :source="FormAdvancedApiSource">
  <FormAdvancedApi />
</DemoBlock>

### 表单联动

展示字段之间的依赖关系和动态验证规则。

<DemoBlock title="表单联动" :source="FormDependencySource">
  <FormDependency />
</DemoBlock>

## API

### Form Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| model | 表单数据对象 | `object` | - |
| rules | 表单验证规则 | `Record<string, FormRule \| FormRule[]>` | - |
| layout | 表单布局 | `'horizontal' \| 'vertical' \| 'inline'` | `'horizontal'` |
| labelCol | label 标签布局，同 Col 组件 | `{ span?: number; offset?: number }` | - |
| wrapperCol | 输入控件布局样式 | `{ span?: number; offset?: number }` | - |
| labelAlign | label 文本对齐方式 | `'left' \| 'right'` | `'right'` |
| colon | 是否显示 label 后面的冒号（仅 horizontal 布局有效） | `boolean` | `true` |
| disabled | 设置表单组件禁用，仅对 ant-design-hmfw 组件有效 | `boolean` | `false` |
| size | 设置字段组件的尺寸 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| validateTrigger | 统一设置字段触发验证的时机 | `'blur' \| 'change' \| ('blur' \| 'change')[]` | `'change'` |
| requiredMark | 必选样式：`true` 显示星号，`false` 不显示，`'optional'` 反向标注「可选」 | `boolean \| 'optional'` | `true` |
| scrollToFirstError | 提交失败自动滚动到第一个错误字段 | `boolean` | `false` |
| preserve | 字段卸载时是否保留字段值 | `boolean` | `false` |

### FormItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| label | label 标签的文本 | `string` | - |
| name | 字段名，支持数组（嵌套字段） | `string \| number \| (string \| number)[]` | - |
| rules | 校验规则，设置字段的校验逻辑 | `FormRule \| FormRule[]` | - |
| required | 必填样式设置。如不设置，则会根据校验规则自动生成 | `boolean` | `false` |
| validateStatus | 校验状态 | `'success' \| 'warning' \| 'error' \| 'validating' \| ''` | - |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | `string` | - |
| extra | 额外的提示信息 | `string` | - |
| labelCol | label 标签布局，优先级高于 Form 的 labelCol | `{ span?: number; offset?: number }` | - |
| wrapperCol | 输入控件布局样式，优先级高于 Form 的 wrapperCol | `{ span?: number; offset?: number }` | - |
| validateTrigger | 设置字段校验的时机 | `'blur' \| 'change' \| ('blur' \| 'change')[]` | 继承自 Form |
| tooltip | 配置提示信息（鼠标悬停 ⓘ 图标显示） | `string` | - |
| noStyle | 为 true 时不带样式，作为纯字段控件使用 | `boolean` | `false` |
| hidden | 是否隐藏字段（依然会收集和校验字段） | `boolean` | `false` |
| colon | 配合 label 属性，覆盖 Form 的 colon | `boolean` | 继承自 Form |

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
| validate | 触发表单验证；成功 resolve 模型，失败 reject `{ values, errorFields }` | `(nameList?: string[]) => Promise<values>` |
| validateFields | `validate` 的别名（AntD 一致） | `(nameList?: string[]) => Promise<values>` |
| clearValidate | 清理某些字段的校验信息 | `(nameList?: string[]) => void` |
| resetFields | 重置一组字段的校验信息 | `() => void` |
| submit | 触发表单提交，效果等同 `<button type="submit">` | `() => void` |
| getFieldsValue | 取当前表单全部字段值 | `() => object` |
| getFieldsError | 获取所有字段的错误信息 | `(nameList?: string[]) => { name: string, errors: string[] }[]` |
| isFieldsTouched | 检查字段是否被用户操作过 | `(nameList?: string[], allTouched?: boolean) => boolean` |
| scrollToField | 滚动到指定字段位置 | `(name: string) => void` |

### Form Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| finish | 提交表单且数据验证成功后触发 | `(values) => void` |
| finishFailed | 提交表单且数据验证失败后触发 | `({ values, errorFields }) => void` |
| valuesChange | 字段值更新时触发（需在控件中显式调用 ctx.notifyValueChange，详见说明） | `(changedValues, allValues) => void` |

### Form Slots

| 插槽名 | 说明 |
|--------|------|
| default | 表单内容 |

### FormItem Slots

| 插槽名 | 说明 |
|--------|------|
| default | 表单控件 |
| label | 自定义 label 内容 |
