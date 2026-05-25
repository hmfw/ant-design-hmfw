# QRCode 二维码

生成二维码。

## 何时使用

- 当需要将链接转换成为二维码时使用

## 代码演示

<script setup>
import QRCodeBasic from '../demos/qrcode/QRCodeBasic.vue'
import QRCodeBasicSource from '../demos/qrcode/QRCodeBasic.vue?raw'
import QRCodeCustomColor from '../demos/qrcode/QRCodeCustomColor.vue'
import QRCodeCustomColorSource from '../demos/qrcode/QRCodeCustomColor.vue?raw'
import QRCodeStatus from '../demos/qrcode/QRCodeStatus.vue'
import QRCodeStatusSource from '../demos/qrcode/QRCodeStatus.vue?raw'
</script>

### 基础用法

基本使用方法。

<DemoBlock title="基础用法" :source="QRCodeBasicSource">
  <QRCodeBasic />
</DemoBlock>

### 自定义颜色

自定义二维码颜色。

<DemoBlock title="自定义颜色" :source="QRCodeCustomColorSource">
  <QRCodeCustomColor />
</DemoBlock>

### 状态展示

二维码的不同状态。

<DemoBlock title="状态展示" :source="QRCodeStatusSource">
  <QRCodeStatus />
</DemoBlock>

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
