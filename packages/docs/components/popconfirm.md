# Popconfirm 气泡确认框

点击元素，弹出气泡式的确认框。

## 何时使用

- 目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户
- 和 confirm 弹出的全屏居中模态对话框相比，交互形式更轻量

## 代码演示

### 基础用法

最简单的用法。

```vue
<template>
  <Popconfirm
    title="确定要删除吗？"
    ok-text="确定"
    cancel-text="取消"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <button>删除</button>
  </Popconfirm>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-hmfw'

function onConfirm() {
  console.log('已确认删除')
}

function onCancel() {
  console.log('已取消')
}
</script>
```

### 自定义按钮文字

自定义确认按钮和取消按钮的文字。

```vue
<template>
  <Popconfirm
    title="确定要提交吗？"
    description="提交后将无法修改，请确认信息无误。"
    ok-text="提交"
    cancel-text="再想想"
    @confirm="onConfirm"
  >
    <button>提交</button>
  </Popconfirm>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-hmfw'

function onConfirm() {
  console.log('已提交')
}
</script>
```

### 不同位置

位置有十二个方向。

```vue
<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Popconfirm
      v-for="placement in placements"
      :key="placement"
      :placement="placement"
      title="确定要执行此操作吗？"
      @confirm="() => console.log(placement)"
    >
      <button>{{ placement }}</button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-hmfw'

const placements = [
  'topLeft', 'top', 'topRight',
  'leftTop', 'left', 'leftBottom',
  'rightTop', 'right', 'rightBottom',
  'bottomLeft', 'bottom', 'bottomRight',
]
</script>
```

## API

### Popconfirm Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 确认框标题 | `string` | - |
| description | 确认框描述 | `string` | - |
| okText | 确认按钮文字 | `string` | `'确定'` |
| cancelText | 取消按钮文字 | `string` | `'取消'` |
| okType | 确认按钮类型 | `string` | `'primary'` |
| placement | 气泡框位置 | `'top' \| 'left' \| 'right' \| 'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'leftTop' \| 'leftBottom' \| 'rightTop' \| 'rightBottom'` | `'top'` |
| disabled | 点击 Popconfirm 子元素是否弹出气泡确认框 | `boolean` | `false` |

### Popconfirm Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击确认的回调 | `(e: MouseEvent) => void` |
| cancel | 点击取消的回调 | `(e: MouseEvent) => void` |

### Popconfirm Slots

| 名称 | 说明 |
| --- | --- |
| default | 触发气泡确认框的元素 |
