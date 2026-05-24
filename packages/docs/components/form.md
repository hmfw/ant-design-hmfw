# Form 表单

高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。

## 何时使用

- 用于创建一个实体或收集信息。
- 需要对输入的数据类型进行校验时。

## 代码演示

### 基础表单

基本的表单数据域控制展示，包含布局、初始化、验证、提交。

```vue
<template>
  <Form
    :model="formState"
    :label-col="{ span: 6 }"
    :wrapper-col="{ span: 18 }"
    style="max-width: 480px;"
    @finish="handleFinish"
  >
    <FormItem label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名' }]">
      <Input v-model:value="formState.username" placeholder="请输入用户名" />
    </FormItem>
    <FormItem label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }]">
      <InputPassword v-model:value="formState.password" placeholder="请输入密码" />
    </FormItem>
    <FormItem :wrapper-col="{ offset: 6, span: 18 }">
      <Button type="primary" html-type="submit">提交</Button>
      <Button style="margin-left: 8px;" @click="handleReset">重置</Button>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Form, FormItem, Input, InputPassword, Button } from 'ant-design-hmfw'

const formState = reactive({
  username: '',
  password: '',
})

const handleFinish = (values: typeof formState) => {
  console.log('表单提交：', values)
}

const handleReset = () => {
  formState.username = ''
  formState.password = ''
}
</script>
```

### 表单校验

Form 组件提供了表单验证的功能，只需为 FormItem 设置 `rules` 属性即可。

```vue
<template>
  <Form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 19 }"
    style="max-width: 480px;"
  >
    <FormItem label="邮箱" name="email">
      <Input v-model:value="formState.email" placeholder="请输入邮箱" />
    </FormItem>
    <FormItem label="手机号" name="phone">
      <Input v-model:value="formState.phone" placeholder="请输入手机号" />
    </FormItem>
    <FormItem label="年龄" name="age">
      <InputNumber v-model:value="formState.age" :min="1" :max="120" placeholder="请输入年龄" style="width: 100%;" />
    </FormItem>
    <FormItem :wrapper-col="{ offset: 5, span: 19 }">
      <Button type="primary" @click="handleValidate">校验</Button>
      <Button style="margin-left: 8px;" @click="handleClear">清除校验</Button>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Form, FormItem, Input, InputNumber, Button } from 'ant-design-hmfw'

const formRef = ref()

const formState = reactive({
  email: '',
  phone: '',
  age: null as number | null,
})

const rules = {
  email: [
    { required: true, message: '请输入邮箱' },
    { type: 'email', message: '请输入有效的邮箱地址' },
  ],
  phone: [
    { required: true, message: '请输入手机号' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号' },
  ],
  age: [
    { required: true, message: '请输入年龄' },
  ],
}

const handleValidate = async () => {
  try {
    await formRef.value?.validate()
    console.log('校验通过')
  } catch (error) {
    console.log('校验失败：', error)
  }
}

const handleClear = () => {
  formRef.value?.clearValidate()
}
</script>
```

### 内联表单

内联排列表单项。

```vue
<template>
  <Form
    :model="formState"
    layout="inline"
    @finish="handleSearch"
  >
    <FormItem label="姓名" name="name">
      <Input v-model:value="formState.name" placeholder="请输入姓名" />
    </FormItem>
    <FormItem label="年龄" name="age">
      <InputNumber v-model:value="formState.age" placeholder="年龄" style="width: 100px;" />
    </FormItem>
    <FormItem>
      <Button type="primary" html-type="submit">搜索</Button>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Form, FormItem, Input, InputNumber, Button } from 'ant-design-hmfw'

const formState = reactive({
  name: '',
  age: null as number | null,
})

const handleSearch = (values: typeof formState) => {
  console.log('搜索：', values)
}
</script>
```

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
