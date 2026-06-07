# Empty 空状态

空状态时的展示占位图。

## 何时使用

- 当目前没有数据时，用于显式的用户提示
- 初始化场景时的引导创建流程

## 代码演示


### 基础用法

简单的空状态展示。

<DemoBlock title="基础用法" :source="EmptyBasicSource">
  <EmptyBasic />
</DemoBlock>

### 自定义描述

自定义描述文字。

<DemoBlock title="自定义描述" :source="EmptyCustomDescriptionSource">
  <EmptyCustomDescription />
</DemoBlock>

### 底部操作

带有操作按钮的空状态。

<DemoBlock title="底部操作" :source="EmptyActionSource">
  <EmptyAction />
</DemoBlock>

### 简约模式

通过 `image="simple"`（或 `PRESENTED_IMAGE_SIMPLE`）使用更紧凑的简约空状态。

<DemoBlock title="简约模式" :source="EmptySimpleSource">
  <EmptySimple />
</DemoBlock>

### 自定义图片尺寸

通过 `imageWidth` / `imageHeight`（数字按 px 处理，也可传带单位字符串）或 `imageStyle` 控制默认插画的尺寸。

<DemoBlock title="自定义图片尺寸" :source="EmptyImageSizeSource">
  <EmptyImageSize />
</DemoBlock>

### 暗黑模式

默认插画的配色通过 CSS 变量驱动，会自动跟随系统配色（`prefers-color-scheme: dark`）。也可在祖先元素上设置 `data-theme="dark"`（或 `.hmfw-theme-dark` 类）强制使用暗色插画。

<DemoBlock title="暗黑模式" :source="EmptyDarkSource">
  <EmptyDark />
</DemoBlock>

## API

### Empty Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| description | 自定义描述内容，为 `false` 时不显示 | `string \| false` | `'暂无数据'` |
| image | 显示图片：图片地址字符串，或预设标识 `'default'` / `'simple'`，为 `false` 时不显示 | `string \| false` | `'default'` |
| imageStyle | 图片样式（优先级高于 imageWidth/imageHeight） | `CSSProperties` | - |
| imageWidth | 图片宽度，数字按 px 处理，亦可传带单位字符串 | `number \| string` | - |
| imageHeight | 图片高度，数字按 px 处理，亦可传带单位字符串 | `number \| string` | - |

预设常量：`PRESENTED_IMAGE_DEFAULT`（`'default'`）、`PRESENTED_IMAGE_SIMPLE`（`'simple'`）。

### Empty Slots

| 名称 | 说明 |
| --- | --- |
| default | 底部内容 |
| description | 自定义描述内容 |
| image | 自定义图片 |
