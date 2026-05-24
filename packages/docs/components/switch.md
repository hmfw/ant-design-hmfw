# Switch 开关

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时。
- 和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

### 基础用法

最简单的用法。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <Switch v-model:checked="checked" />
      <span>{{ checked ? '开启' : '关闭' }}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <Switch v-model:checked="checked2" disabled />
      <span>禁用状态</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from 'ant-design-hmfw'

const checked = ref(false)
const checked2 = ref(true)
</script>
```

### 文字和图标

带有文字和图标的开关。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Switch
      v-model:checked="checked1"
      checked-children="开"
      un-checked-children="关"
    />
    <Switch
      v-model:checked="checked2"
      checked-children="✓"
      un-checked-children="✗"
    />
    <Switch
      v-model:checked="checked3"
      checked-children="ON"
      un-checked-children="OFF"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from 'ant-design-hmfw'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(true)
</script>
```

### 加载中

标识开关操作仍在执行中。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div style="display: flex; gap: 8px;">
      <Switch :checked="true" loading />
      <Switch :checked="false" loading />
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <Switch
        v-model:checked="checked"
        :loading="loading"
        @change="handleChange"
      />
      <span>{{ loading ? '切换中...' : (checked ? '已开启' : '已关闭') }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from 'ant-design-hmfw'

const checked = ref(false)
const loading = ref(false)

const handleChange = (val: boolean) => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    checked.value = val
  }, 1500)
}
</script>
```

### 不同尺寸

`size="small"` 表示小号开关。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div style="display: flex; align-items: center; gap: 16px;">
      <Switch v-model:checked="checked1" />
      <span>默认大小</span>
    </div>
    <div style="display: flex; align-items: center; gap: 16px;">
      <Switch v-model:checked="checked2" size="small" />
      <span>小号开关</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from 'ant-design-hmfw'

const checked1 = ref(true)
const checked2 = ref(true)
</script>
```

## API

### Switch Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| checked(v-model) | 指定当前是否选中 | `boolean` | `false` |
| defaultChecked | 初始是否选中 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 加载中的开关 | `boolean` | `false` |
| size | 开关大小 | `'default' \| 'small'` | `'default'` |
| checkedChildren | 选中时的内容 | `string \| VNode` | - |
| unCheckedChildren | 非选中时的内容 | `string \| VNode` | - |

### Switch Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:checked | 变化时回调函数 | `(checked: boolean) => void` |
| change | 变化时回调函数 | `(checked: boolean, event: MouseEvent) => void` |
| click | 点击时回调函数 | `(checked: boolean, event: MouseEvent) => void` |
| focus | 获取焦点时的回调 | `() => void` |
| blur | 失去焦点时的回调 | `() => void` |
