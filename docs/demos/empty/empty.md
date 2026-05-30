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

## API

### Empty Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| description | 自定义描述内容，为 `false` 时不显示 | `string \| false` | `'暂无数据'` |
| image | 显示图片：图片地址字符串，或预设标识 `'default'` / `'simple'`，为 `false` 时不显示 | `string \| false` | `'default'` |
| imageStyle | 图片样式 | `CSSProperties` | - |

预设常量：`PRESENTED_IMAGE_DEFAULT`（`'default'`）、`PRESENTED_IMAGE_SIMPLE`（`'simple'`）。

### Empty Slots

| 名称 | 说明 |
| --- | --- |
| default | 底部内容 |
| description | 自定义描述内容 |
| image | 自定义图片 |
