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

### 细粒度样式控制

通过 `classNames` / `styles` 对根容器和状态遮罩做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="QRCodeClassNamesSource">
  <QRCodeClassNames />
</DemoBlock>

## API

### QRCode Props

| 参数         | 说明                                                                             | 类型                                              | 默认值          |
| ------------ | -------------------------------------------------------------------------------- | ------------------------------------------------- | --------------- |
| value        | 扫描后的文本                                                                     | `string`                                          | -               |
| type         | 渲染类型                                                                         | `'canvas' \| 'svg'`                               | `'canvas'`      |
| size         | 二维码大小                                                                       | `number`                                          | `160`           |
| color        | 二维码颜色                                                                       | `string`                                          | `'#000000'`     |
| bgColor      | 二维码背景颜色                                                                   | `string`                                          | `'transparent'` |
| errorLevel   | 二维码纠错等级                                                                   | `'L' \| 'M' \| 'Q' \| 'H'`                        | `'M'`           |
| status       | 二维码状态                                                                       | `'active' \| 'expired' \| 'loading' \| 'scanned'` | `'active'`      |
| icon         | 二维码中图片的地址                                                               | `string`                                          | -               |
| iconSize     | 二维码中图片的大小                                                               | `number \| { width: number; height: number }`     | `40`            |
| bordered     | 是否有边框                                                                       | `boolean`                                         | `true`          |
| marginSize   | SVG 类型二维码的边距                                                             | `number`                                          | -               |
| statusRender | 自定义状态渲染函数                                                               | `(info: StatusRenderInfo) => VNode \| null`       | -               |
| onRefresh    | 点击刷新的回调                                                                   | `() => void`                                      | -               |
| classNames   | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `QRCodeClassNames`                                | -               |
| styles       | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `QRCodeStyles`                                    | -               |

### StatusRenderInfo

| 参数      | 说明     | 类型                                  |
| --------- | -------- | ------------------------------------- |
| status    | 当前状态 | `'expired' \| 'loading' \| 'scanned'` |
| onRefresh | 刷新回调 | `() => void \| undefined`             |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface QRCodeClassNames {
  root?: string // 根容器
  cover?: string // 状态遮罩层（非 active 状态时显示）
}

interface QRCodeStyles {
  root?: CSSProperties
  cover?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-qrcode">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <canvas></canvas>
  <!-- 或 <svg>...</svg> -->

  <!-- 仅在 status !== 'active' 时渲染 -->
  <div class="hmfw-qrcode-cover">
    <!-- ↑ classNames.cover / styles.cover 应用于此 -->
    <!-- 状态内容：loading / expired / scanned -->
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义根容器样式 -->
  <QRCode value="https://ant.design" :class-names="{ root: 'my-qrcode' }" />

  <!-- 自定义状态遮罩 -->
  <QRCode
    value="https://ant.design"
    status="expired"
    :class-names="{ cover: 'my-cover' }"
    :on-refresh="handleRefresh"
  />

  <!-- 组合使用 -->
  <QRCode
    value="https://ant.design"
    status="loading"
    :class-names="{
      root: 'my-qrcode',
      cover: 'my-cover',
    }"
  />
</template>

<style scoped>
:deep(.my-qrcode) {
  border-radius: 12px;
  border: 3px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  transition: all 0.3s;
}

:deep(.my-qrcode:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:deep(.my-cover) {
  background: linear-gradient(135deg, rgba(255, 77, 79, 0.9) 0%, rgba(255, 120, 117, 0.9) 100%);
  backdrop-filter: blur(4px);
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制根容器 -->
  <QRCode
    value="https://ant.design"
    :styles="{
      root: {
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(22, 119, 255, 0.3)',
      },
    }"
  />

  <!-- 自定义遮罩样式 -->
  <QRCode
    value="https://ant.design"
    status="expired"
    :styles="{
      cover: {
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
      },
    }"
    :on-refresh="handleRefresh"
  />

  <!-- 组合使用 -->
  <QRCode
    value="https://ant.design"
    status="loading"
    :styles="{
      root: { borderRadius: '12px', padding: '8px' },
      cover: { backdropFilter: 'blur(8px)' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `cover` 节点仅在 `status` 不为 `'active'` 时渲染，因此相关样式仅在状态切换时生效
- 根容器的 `width`、`height`、`backgroundColor` 由 `size` 和 `bgColor` props 控制，会与 `styles.root` 合并（`styles.root` 优先）
- canvas/svg 元素是 QR 码的核心渲染节点，其样式通过 `color`、`bgColor`、`size` 等专有 props 控制，不暴露在语义化 API 中

## 设计 Token

QRCode 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                   | 说明         | 默认值               |
| ---------------------------- | ------------ | -------------------- |
| `--hmfw-color-bg-container`  | 容器背景色   | `#ffffff`            |
| `--hmfw-color-border`        | 边框色       | `#d9d9d9`            |
| `--hmfw-color-primary`       | 主题色       | `#1677ff`            |
| `--hmfw-color-primary-hover` | 主题色悬停态 | `#4096ff`            |
| `--hmfw-color-text`          | 主文本色     | `rgba(0,0,0,0.88)`   |
| `--hmfw-font-size-base`      | 基础字号     | `14px`               |
| `--hmfw-line-height`         | 标准行高     | `1.5714285714285714` |
| `--hmfw-border-radius-lg`    | 大号圆角     | `8px`                |
| `--hmfw-padding-sm`          | 小号内边距   | `8px`                |

<script setup lang="ts">
import QRCodeBasic from './QRCodeBasic.vue'
import QRCodeType from './QRCodeType.vue'
import QRCodeCustomColor from './QRCodeCustomColor.vue'
import QRCodeIcon from './QRCodeIcon.vue'
import QRCodeStatus from './QRCodeStatus.vue'
import QRCodeCustomStatusRender from './QRCodeCustomStatusRender.vue'
import QRCodeClassNames from './QRCodeClassNames.vue'
import QRCodeBasicSource from './QRCodeBasic.vue?raw'
import QRCodeTypeSource from './QRCodeType.vue?raw'
import QRCodeCustomColorSource from './QRCodeCustomColor.vue?raw'
import QRCodeIconSource from './QRCodeIcon.vue?raw'
import QRCodeStatusSource from './QRCodeStatus.vue?raw'
import QRCodeCustomStatusRenderSource from './QRCodeCustomStatusRender.vue?raw'
import QRCodeClassNamesSource from './QRCodeClassNames.vue?raw'
</script>
