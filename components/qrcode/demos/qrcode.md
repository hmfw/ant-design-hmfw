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

### 自定义尺寸

通过 `size` 定制二维码大小，支持响应式调整；`iconSize` 支持对象形式分别指定宽高。

<DemoBlock title="自定义尺寸" :source="QRCodeCustomSizeSource">
  <QRCodeCustomSize />
</DemoBlock>

### 带图标

二维码中间可以显示图标。

<DemoBlock title="带图标" :source="QRCodeIconSource">
  <QRCodeIcon />
</DemoBlock>

### 纠错等级

L/M/Q/H 四级纠错能力对比，等级越高抗遮挡能力越强但容量越小。

<DemoBlock title="纠错等级" :source="QRCodeErrorLevelSource">
  <QRCodeErrorLevel />
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

### 边框开关

`bordered` 控制边框与内边距。

<DemoBlock title="边框开关" :source="QRCodeBorderedSource">
  <QRCodeBordered />
</DemoBlock>

### 留白（安静区）

`marginSize` 以模块数为单位设置二维码四周留白，canvas 与 svg 渲染均支持。

<DemoBlock title="留白（安静区）" :source="QRCodeMarginSource">
  <QRCodeMargin />
</DemoBlock>

### 版本提升

文本越长自动提升 QR 版本（矩阵尺寸 21 → 25 → … → 57），最高支持版本 10。

<DemoBlock title="版本提升" :source="QRCodeVersionSource">
  <QRCodeVersion />
</DemoBlock>

### 下载二维码

canvas 渲染模式下通过 `toDataURL` 导出 PNG 图片。

<DemoBlock title="下载二维码" :source="QRCodeDownloadSource">
  <QRCodeDownload />
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
| marginSize   | 留白（安静区）大小（单位为模块数），`0` 表示无留白                               | `number`                                          | `0`             |
| statusRender | 自定义状态渲染函数                                                               | `(info: StatusRenderInfo) => VNode \| null`       | -               |
| classNames   | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `QRCodeClassNames`                                | -               |
| styles       | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `QRCodeStyles`                                    | -               |

### QRCode 事件

| 事件名  | 说明           | 类型         |
| ------- | -------------- | ------------ |
| refresh | 点击刷新的回调 | `() => void` |

> 仅在监听 `refresh` 事件时，过期状态的遮罩中才会渲染刷新按钮。

### StatusRenderInfo

| 参数      | 说明       | 类型                                  |
| --------- | ---------- | ------------------------------------- |
| status    | 当前状态   | `'expired' \| 'loading' \| 'scanned'` |
| locale    | 当前语言包 | `Locale['QRCode']`                    |
| onRefresh | 刷新回调   | `() => void \| undefined`             |

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

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的 `classNames` / `styles` 写法模板。

<QRCodeSemantic />

### DOM 结构与 className 映射

```html
<div class="hmfw-qrcode">
  <!-- ↑ classNames.root / styles.root -->
  <canvas></canvas>
  <!-- 或 <svg>...</svg> -->

  <!-- 仅在 status !== 'active' 时渲染 -->
  <div class="hmfw-qrcode-cover">
    <!-- ↑ classNames.cover / styles.cover -->
    <!-- 状态内容：loading / expired / scanned -->
  </div>
</div>
```

### 用法

`classNames` 追加自定义类，`styles` 写内联样式，二者可同时作用于同一节点：

```vue
<template>
  <!-- classNames：追加自定义类 -->
  <QRCode value="https://ant.design" :class-names="{ root: 'my-qrcode' }" />

  <!-- styles：内联样式，优先级高于 classNames -->
  <QRCode
    value="https://ant.design"
    status="expired"
    :styles="{
      cover: { background: 'rgba(0, 0, 0, 0.8)', color: 'white' },
    }"
    @refresh="handleRefresh"
  />

  <!-- 组合：classNames 与 styles 混用 -->
  <QRCode
    value="https://ant.design"
    status="loading"
    :class-names="{ cover: 'my-cover' }"
    :styles="{ root: { borderRadius: '12px', padding: '8px' } }"
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

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名（如 `.hmfw-qrcode`）合并，不会互相覆盖
- 根容器的 `width`、`height`、`backgroundColor` 由 `size` 和 `bgColor` props 控制，会与 `styles.root` 合并（`styles.root` 优先）
- canvas/svg 元素是 QR 码的核心渲染节点，其样式通过 `color`、`bgColor`、`size` 等专有 props 控制，不暴露在语义化 API 中

## 设计 Token

QRCode 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

### 全局 Token

| Token 名称                    | 说明         | 默认值               |
| ----------------------------- | ------------ | -------------------- |
| `--hmfw-color-border`         | 边框色       | `#d9d9d9`            |
| `--hmfw-color-primary`        | 主题色       | `#1677ff`            |
| `--hmfw-color-primary-hover`  | 主题色悬停态 | `#4096ff`            |
| `--hmfw-color-text`           | 主文本色     | `rgba(0,0,0,0.88)`   |
| `--hmfw-font-size-base`       | 基础字号     | `14px`               |
| `--hmfw-line-height`          | 标准行高     | `1.5714285714285714` |
| `--hmfw-border-radius-lg`     | 大号圆角     | `8px`                |
| `--hmfw-padding-sm`           | 小号内边距   | `12px`               |
| `--hmfw-padding-xs`           | 特小号内边距 | `8px`                |
| `--hmfw-padding`              | 标准内边距   | `16px`               |
| `--hmfw-margin-xs`            | 特小号外边距 | `8px`                |
| `--hmfw-motion-duration-slow` | 慢速动效时长 | `0.3s`               |

### 组件 Token

组件专属变量定义在 `.hmfw-qrcode` 上，可直接覆盖以定制遮罩配色。

| Token 名称               | 说明           | 默认值                                                                                                          |
| ------------------------ | -------------- | --------------------------------------------------------------------------------------------------------------- |
| `--hmfw-qrcode-cover-bg` | 状态遮罩背景色 | `rgba(255, 255, 255, 0.96)`（派生自 `color-bg-container` × 96% 透明度，对齐 AntD `QRCodeCoverBackgroundColor`） |

暗黑主题（`.hmfw-theme-dark` / `[data-theme='dark']`）下该变量自动切换为 `rgba(20, 20, 20, 0.96)`。
