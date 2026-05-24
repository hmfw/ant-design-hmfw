# Notification 通知提醒框

全局展示通知提醒信息。

## 何时使用

- 在系统四个角显示通知提醒信息
- 系统主动推送的消息，内容较为复杂时使用

## 代码演示

### 基础用法

最简单的用法，4.5 秒后自动关闭。

```vue
<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <button @click="openSuccess">成功</button>
    <button @click="openError">错误</button>
    <button @click="openWarning">警告</button>
    <button @click="openInfo">信息</button>
  </div>
</template>

<script setup lang="ts">
import { notification } from 'ant-design-hmfw'

function openSuccess() {
  notification.success({
    message: '操作成功',
    description: '您的操作已成功完成，请查看详情。',
  })
}

function openError() {
  notification.error({
    message: '操作失败',
    description: '操作过程中发生错误，请稍后重试。',
  })
}

function openWarning() {
  notification.warning({
    message: '警告',
    description: '此操作存在风险，请谨慎操作。',
  })
}

function openInfo() {
  notification.info({
    message: '提示信息',
    description: '这是一条普通的提示信息。',
  })
}
</script>
```

### 四个位置

通知从屏幕四个角弹出。

```vue
<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <button @click="open('topLeft')">左上角</button>
    <button @click="open('topRight')">右上角</button>
    <button @click="open('bottomLeft')">左下角</button>
    <button @click="open('bottomRight')">右下角</button>
  </div>
</template>

<script setup lang="ts">
import { notification } from 'ant-design-hmfw'

type Placement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

function open(placement: Placement) {
  notification.info({
    message: `通知 (${placement})`,
    description: `这是一条来自${placement}的通知消息。`,
    placement,
  })
}
</script>
```

## API

### notification 方法

| 方法 | 说明 |
| --- | --- |
| notification.success | 成功通知 |
| notification.error | 错误通知 |
| notification.warning | 警告通知 |
| notification.info | 普通通知 |

### 配置参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| message | 通知提醒标题 | `string` | - |
| description | 通知提醒内容 | `string` | - |
| duration | 默认 4.5 秒后自动关闭，设置为 null 则不自动关闭 | `number \| null` | `4.5` |
| placement | 弹出位置 | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'` | `'topRight'` |
| onClose | 当通知关闭时触发 | `() => void` | - |
| key | 当前通知唯一标志 | `string` | - |
