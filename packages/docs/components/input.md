# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 代码演示

### 基础用法

基本使用。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <Input v-model:value="value" placeholder="请输入内容" />
    <Input v-model:value="value" placeholder="禁用状态" disabled />
    <Input v-model:value="value" placeholder="只读状态" readonly />
    <p>当前值：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from 'ant-design-hmfw'

const value = ref('')
</script>
```

### 前缀/后缀

在输入框上添加前缀或后缀图标。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <Input v-model:value="value1" placeholder="请输入用户名" prefix="👤" />
    <Input v-model:value="value2" placeholder="请输入金额" prefix="¥" suffix="元" />
    <Input v-model:value="value3" placeholder="带前置/后置标签" addon-before="http://" addon-after=".com" />
    <Input v-model:value="value4" placeholder="支持清除" allow-clear />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from 'ant-design-hmfw'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>
```

### 密码框

密码输入框，可切换密码可见性。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <InputPassword v-model:value="password" placeholder="请输入密码" />
    <InputPassword
      v-model:value="password2"
      placeholder="不可切换可见性"
      :visibility-toggle="false"
    />
    <p>密码：{{ password }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputPassword } from 'ant-design-hmfw'

const password = ref('')
const password2 = ref('')
</script>
```

### 文本域

用于多行输入。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <TextArea
      v-model:value="text1"
      placeholder="固定行数"
      :rows="4"
    />
    <TextArea
      v-model:value="text2"
      placeholder="自适应高度"
      :auto-size="{ minRows: 2, maxRows: 6 }"
    />
    <TextArea
      v-model:value="text3"
      placeholder="显示字数"
      :maxlength="100"
      :show-count="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextArea } from 'ant-design-hmfw'

const text1 = ref('')
const text2 = ref('')
const text3 = ref('')
</script>
```

### 搜索框

带有搜索按钮的输入框。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <InputSearch
      v-model:value="keyword"
      placeholder="请输入搜索内容"
      @search="handleSearch"
    />
    <InputSearch
      v-model:value="keyword2"
      placeholder="带按钮的搜索框"
      enter-button
      @search="handleSearch"
    />
    <InputSearch
      v-model:value="keyword3"
      placeholder="加载中"
      enter-button
      :loading="loading"
      @search="handleSearchWithLoading"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputSearch } from 'ant-design-hmfw'

const keyword = ref('')
const keyword2 = ref('')
const keyword3 = ref('')
const loading = ref(false)

const handleSearch = (value: string) => {
  console.log('搜索：', value)
}

const handleSearchWithLoading = (value: string) => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    console.log('搜索完成：', value)
  }, 1500)
}
</script>
```

## API

### Input Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 输入框内容 | `string` | - |
| defaultValue | 输入框默认内容 | `string` | - |
| placeholder | 输入框占位文本 | `string` | - |
| disabled | 是否禁用状态 | `boolean` | `false` |
| size | 控件大小 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| maxlength | 最大长度 | `number` | - |
| showCount | 是否展示字数 | `boolean` | `false` |
| allowClear | 可以点击清除图标删除内容 | `boolean` | `false` |
| prefix | 带有前缀图标的 input | `string \| VNode` | - |
| suffix | 带有后缀图标的 input | `string \| VNode` | - |
| addonBefore | 带标签的 input，设置前置标签 | `string \| VNode` | - |
| addonAfter | 带标签的 input，设置后置标签 | `string \| VNode` | - |
| status | 设置校验状态 | `'error' \| 'warning'` | - |
| readonly | 是否只读 | `boolean` | `false` |

### InputPassword Props

继承 Input 所有属性，额外支持：

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| visibilityToggle | 是否显示切换按钮或者控制密码显隐 | `boolean` | `true` |

### TextArea Props

继承 Input 所有属性，额外支持：

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| rows | 输入框行数 | `number` | `3` |
| autoSize | 自适应内容高度，可设置为 true \| false 或对象 | `boolean \| { minRows?: number; maxRows?: number }` | `false` |

### InputSearch Props

继承 Input 所有属性，额外支持：

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| enterButton | 是否有确认按钮，可设为按钮文字 | `boolean \| string` | `false` |
| loading | 搜索 loading | `boolean` | `false` |

### Input Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 输入框内容变化时的回调 | `(value: string) => void` |
| change | 输入框内容变化时的回调 | `(event: Event) => void` |
| focus | 获取焦点时的回调 | `(event: FocusEvent) => void` |
| blur | 失去焦点时的回调 | `(event: FocusEvent) => void` |
| pressEnter | 按下回车的回调 | `(event: KeyboardEvent) => void` |
| clear | 点击清除按钮时的回调 | `() => void` |

### InputSearch Events

继承 Input 所有事件，额外支持：

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| search | 点击搜索图标、清除图标，或按下回车键时的回调 | `(value: string, event: Event) => void` |
