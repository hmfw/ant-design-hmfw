# QRCode 二维码

生成二维码。

## 何时使用

- 当需要将链接转换成为二维码时使用

## 代码演示

### 基础用法

基本使用方法。

<DemoBlock title="基础用法" :source="QRCodeBasicSource">
  <QRCodeBasic />
</DemoBlock>

### 渲染类型

支持 canvas 和 svg 两种渲染方式。

<DemoBlock title="渲染类型" :source="QRCodeTypeSource">
  <QRCodeType />
</DemoBlock>

### 自定义颜色

自定义二维码颜色。

<DemoBlock title="自定义颜色" :source="QRCodeCustomColorSource">
  <QRCodeCustomColor />
</DemoBlock>

### 带图标

二维码中间可以显示图标。

<DemoBlock title="带图标" :source="QRCodeIconSource">
  <QRCodeIcon />
</DemoBlock>

### 状态展示

二维码的不同状态。

<DemoBlock title="状态展示" :source="QRCodeStatusSource">
  <QRCodeStatus />
</DemoBlock>

### 自定义状态渲染

通过 statusRender 自定义状态渲染内容。

<DemoBlock title="自定义状态渲染" :source="QRCodeCustomStatusRenderSource">
  <QRCodeCustomStatusRender />
</DemoBlock>

## API

### QRCode Props

| 参数         | 说明                 | 类型                                              | 默认值          |
| ------------ | -------------------- | ------------------------------------------------- | --------------- |
| value        | 扫描后的文本         | `string`                                          | -               |
| type         | 渲染类型             | `'canvas' \| 'svg'`                               | `'canvas'`      |
| size         | 二维码大小           | `number`                                          | `160`           |
| color        | 二维码颜色           | `string`                                          | `'#000000'`     |
| bgColor      | 二维码背景颜色       | `string`                                          | `'transparent'` |
| errorLevel   | 二维码纠错等级       | `'L' \| 'M' \| 'Q' \| 'H'`                        | `'M'`           |
| status       | 二维码状态           | `'active' \| 'expired' \| 'loading' \| 'scanned'` | `'active'`      |
| icon         | 二维码中图片的地址   | `string`                                          | -               |
| iconSize     | 二维码中图片的大小   | `number \| { width: number; height: number }`     | `40`            |
| bordered     | 是否有边框           | `boolean`                                         | `true`          |
| marginSize   | SVG 类型二维码的边距 | `number`                                          | -               |
| statusRender | 自定义状态渲染函数   | `(info: StatusRenderInfo) => VNode \| null`       | -               |
| onRefresh    | 点击刷新的回调       | `() => void`                                      | -               |

### StatusRenderInfo

| 参数      | 说明     | 类型                                  |
| --------- | -------- | ------------------------------------- |
| status    | 当前状态 | `'expired' \| 'loading' \| 'scanned'` |
| onRefresh | 刷新回调 | `() => void \| undefined`             |

<script setup lang="ts">
import QRCodeBasic from './QRCodeBasic.vue'
import QRCodeType from './QRCodeType.vue'
import QRCodeCustomColor from './QRCodeCustomColor.vue'
import QRCodeIcon from './QRCodeIcon.vue'
import QRCodeStatus from './QRCodeStatus.vue'
import QRCodeCustomStatusRender from './QRCodeCustomStatusRender.vue'
import QRCodeBasicSource from './QRCodeBasic.vue?raw'
import QRCodeTypeSource from './QRCodeType.vue?raw'
import QRCodeCustomColorSource from './QRCodeCustomColor.vue?raw'
import QRCodeIconSource from './QRCodeIcon.vue?raw'
import QRCodeStatusSource from './QRCodeStatus.vue?raw'
import QRCodeCustomStatusRenderSource from './QRCodeCustomStatusRender.vue?raw'
</script>
