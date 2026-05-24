# Alert 警告提示

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭

## 代码演示

### 四种类型

共有四种样式 success、info、warning、error。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <Alert message="成功提示" type="success" />
    <Alert message="消息提示" type="info" />
    <Alert message="警告提示" type="warning" />
    <Alert message="错误提示" type="error" />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'
</script>
```

### 带描述

含有辅助性文字介绍的警告提示。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <Alert
      message="成功提示"
      description="详细的成功描述和对此次成功的说明。"
      type="success"
      show-icon
    />
    <Alert
      message="错误提示"
      description="详细的错误描述和对此次错误的说明。"
      type="error"
      show-icon
    />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'
</script>
```

### 可关闭

显示关闭按钮，点击可关闭警告提示。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <Alert
      message="警告提示"
      type="warning"
      closable
      @close="onClose"
    />
    <Alert
      message="错误提示"
      description="详细的错误描述信息。"
      type="error"
      closable
    />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'

function onClose() {
  console.log('关闭警告')
}
</script>
```

## API

### Alert Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 指定警告提示的样式 | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'` |
| message | 警告提示内容 | `string` | - |
| description | 警告提示的辅助性文字介绍 | `string` | - |
| showIcon | 是否显示辅助图标 | `boolean` | `false` |
| closable | 默认不显示关闭按钮 | `boolean` | `false` |
| banner | 是否用作顶部公告 | `boolean` | `false` |
| action | 自定义操作项 | `slot` | - |

### Alert Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭时触发的回调函数 | `(e: MouseEvent) => void` |
| afterClose | 关闭动画结束后触发的回调函数 | `() => void` |
