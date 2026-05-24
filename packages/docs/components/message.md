# Message 全局提示

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式

## 代码演示

### 基础用法

信息提醒反馈。

```vue
<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <button @click="showSuccess">成功</button>
    <button @click="showError">错误</button>
    <button @click="showWarning">警告</button>
    <button @click="showInfo">信息</button>
    <button @click="showLoading">加载中</button>
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-hmfw'

function showSuccess() {
  message.success('操作成功！')
}

function showError() {
  message.error('操作失败，请重试。')
}

function showWarning() {
  message.warning('请注意此操作的风险。')
}

function showInfo() {
  message.info('这是一条普通提示信息。')
}

function showLoading() {
  message.loading('正在加载中...')
}
</script>
```

### 自定义时长

自定义消息显示时长，默认 3 秒。

```vue
<template>
  <div style="display: flex; gap: 8px;">
    <button @click="showLong">显示 10 秒</button>
    <button @click="showWithCallback">关闭后回调</button>
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-hmfw'

function showLong() {
  message.success('这条消息将显示 10 秒', 10)
}

function showWithCallback() {
  message.info('关闭后将触发回调', 2).then(() => {
    message.success('消息已关闭！')
  })
}
</script>
```

## API

### message 方法

| 方法 | 说明 | 参数 |
| --- | --- | --- |
| message.success | 成功提示 | `(content: string, duration?: number, onClose?: () => void) => Promise` |
| message.error | 错误提示 | `(content: string, duration?: number, onClose?: () => void) => Promise` |
| message.warning | 警告提示 | `(content: string, duration?: number, onClose?: () => void) => Promise` |
| message.info | 普通提示 | `(content: string, duration?: number, onClose?: () => void) => Promise` |
| message.loading | 加载中提示 | `(content: string, duration?: number, onClose?: () => void) => Promise` |

### 参数说明

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | `string` | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | `number` | `3` |
| onClose | 关闭时触发的回调函数 | `() => void` | - |

所有方法均返回 `Promise`，可通过 `.then()` 在关闭后执行回调。
