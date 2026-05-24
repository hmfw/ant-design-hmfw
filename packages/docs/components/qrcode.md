# QRCode 二维码

生成二维码。

## 何时使用

- 当需要将链接转换成为二维码时使用

## 代码演示

### 基础用法

基本使用方法。

```vue
<template>
  <QRCode value="https://ant.design" />
</template>

<script setup lang="ts">
import { QRCode } from 'ant-design-hmfw'
</script>
```

### 自定义颜色

自定义二维码颜色。

```vue
<template>
  <div style="display: flex; gap: 16px;">
    <QRCode value="https://ant.design" color="#1677ff" />
    <QRCode value="https://ant.design" color="#52c41a" bg-color="#f0f0f0" />
  </div>
</template>

<script setup lang="ts">
import { QRCode } from 'ant-design-hmfw'
</script>
```

### 状态展示

二维码的不同状态。

```vue
<template>
  <div style="display: flex; gap: 16px;">
    <QRCode value="https://ant.design" status="active" />
    <QRCode value="https://ant.design" status="expired" @refresh="onRefresh" />
    <QRCode value="https://ant.design" status="loading" />
    <QRCode value="https://ant.design" status="scanned" />
  </div>
</template>

<script setup lang="ts">
import { QRCode } from 'ant-design-hmfw'

function onRefresh() {
  console.log('刷新二维码')
}
</script>
```

## API

### QRCode Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 扫描后的文本 | `string` | - |
| size | 二维码大小 | `number` | `160` |
| color | 二维码颜色 | `string` | `'#000000'` |
| bgColor | 二维码背景颜色 | `string` | `'#ffffff'` |
| errorLevel | 二维码纠错等级 | `'L' \| 'M' \| 'Q' \| 'H'` | `'M'` |
| status | 二维码状态 | `'active' \| 'expired' \| 'loading' \| 'scanned'` | `'active'` |
| icon | 二维码中图片的地址 | `string` | - |
| iconSize | 二维码中图片的大小 | `number` | `40` |
| bordered | 是否有边框 | `boolean` | `true` |

### QRCode Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| refresh | 点击刷新的回调 | `() => void` |
