# 主题定制

ant-design-hmfw 基于 CSS Variables 实现主题定制，通过 `ConfigProvider` 传入自定义 Token 即可覆盖默认样式。

## 设计 Token 系统

Token 分为三层：

- **Seed Token**：最基础的设计变量，如主色、字体大小、圆角等
- **Map Token**：由 Seed Token 派生的中间层 Token
- **CSS Variables**：最终注入到 `:root` 的 CSS 变量

## 通过 ConfigProvider 定制

```vue
<template>
  <ConfigProvider :theme="theme">
    <Button type="primary">自定义主题按钮</Button>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider, Button } from 'ant-design-hmfw'

const theme = {
  token: {
    colorPrimary: '#722ed1',
    borderRadius: 2,
  },
}
</script>
```

## 可用 Token

### 颜色

| Token           | 说明       | 默认值             |
| --------------- | ---------- | ------------------ |
| `colorPrimary`  | 主色       | `#1677ff`          |
| `colorSuccess`  | 成功色     | `#52c41a`          |
| `colorWarning`  | 警告色     | `#faad14`          |
| `colorError`    | 错误色     | `#ff4d4f`          |
| `colorInfo`     | 信息色     | `#1677ff`          |
| `colorTextBase` | 基础文字色 | `rgba(0,0,0,0.88)` |
| `colorBgBase`   | 基础背景色 | `#ffffff`          |

### 字体

| Token        | 说明     | 默认值     |
| ------------ | -------- | ---------- |
| `fontSize`   | 基础字号 | `14`       |
| `fontFamily` | 字体族   | `系统字体` |
| `lineHeight` | 行高     | `1.5714`   |

### 圆角

| Token          | 说明     | 默认值 |
| -------------- | -------- | ------ |
| `borderRadius` | 基础圆角 | `6`    |

### 间距

| Token      | 说明     | 默认值 |
| ---------- | -------- | ------ |
| `sizeUnit` | 间距单位 | `4`    |
| `sizeStep` | 间距步长 | `4`    |

## 直接使用 CSS Variables

所有 Token 都会以 `--hmfw-` 前缀注入为 CSS 变量，可以在自定义样式中直接使用：

```css
.my-component {
  color: var(--hmfw-color-primary);
  border-radius: var(--hmfw-border-radius);
  font-size: var(--hmfw-font-size-base);
}
```
