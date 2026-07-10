# 主题定制

@hmfw/ant-design 基于 CSS Variables 实现主题定制，采用**「构建时生成 + 运行时覆盖」**架构。通过 `ConfigProvider` 传入自定义 Seed Token，所有派生 Token 自动计算并注入。

## 设计 Token 系统

Token 分为三层管道：

```
SeedTokens（原始参数，16 个）
    │  用户通过 ConfigProvider 覆盖
    ▼
generateMapTokens（自动派生）
    │  lighten / darken / alpha / 间距公式
    ▼
MapTokens（~110 个 CSS 变量）
    │  tokensToCssVars / injectCssVars
    ▼
var(--hmfw-xxx)
    组件 CSS 消费
```

**核心原则**：TS 代码（`components/_theme/theme.ts`）是唯一真值源，静态 CSS 文件（`style/index.css`）由构建脚本自动生成。修改 seed 默认值或派生逻辑后，运行 `pnpm generate-theme` 重新生成。

## 快速上手

### 修改品牌色

只需改一个 `colorPrimary`，9 个派生变体（hover / active / bg / border / text 系列）自动计算：

```vue
<template>
  <ConfigProvider :theme="{ colorPrimary: '#00b96b' }">
    <Button type="primary">绿色按钮</Button>
    <Button>默认按钮</Button>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider, Button } from '@hmfw/ant-design'
</script>
```

### 暗色模式

修改 `colorTextBase` 和 `colorBgBase`，所有文字色、背景色、边框色、填充色自动重新派生：

```vue
<template>
  <ConfigProvider :theme="{ colorTextBase: '#ffffff', colorBgBase: '#000000' }">
    <App />
  </ConfigProvider>
</template>
```

## Seed Token 完整列表

### 颜色

| Token           | 说明       | 类型     | 默认值      |
| --------------- | ---------- | -------- | ----------- |
| `colorPrimary`  | 品牌主色   | `string` | `'#1677ff'` |
| `colorSuccess`  | 成功色     | `string` | `'#52c41a'` |
| `colorWarning`  | 警告色     | `string` | `'#faad14'` |
| `colorError`    | 错误色     | `string` | `'#ff4d4f'` |
| `colorInfo`     | 信息色     | `string` | `'#1677ff'` |
| `colorTextBase` | 文字基准色 | `string` | `'#000000'` |
| `colorBgBase`   | 背景基准色 | `string` | `'#ffffff'` |

**派生规则**：所有文字色从 `colorTextBase` 按透明度阶梯派生（0.88 / 0.65 / 0.45 / 0.25）；所有背景衍生色和边框色从 `colorBgBase` 通过 `darken()` 派生；所有语义色（primary/success/warning/error/info）的 bg / border / text / hover / active 变体通过 `lighten()` / `darken()` 派生。

### 字体

| Token            | 说明     | 类型     | 默认值     |
| ---------------- | -------- | -------- | ---------- |
| `fontFamily`     | 字体家族 | `string` | 系统字体栈 |
| `fontSizeBase`   | 基础字号 | `number` | `14`       |
| `lineHeightBase` | 基础行高 | `number` | `1.5714`   |

### 圆角

| Token            | 说明     | 类型     | 默认值 |
| ---------------- | -------- | -------- | ------ |
| `borderRadius`   | 基础圆角 | `number` | `6`    |
| `borderRadiusSM` | 小圆角   | `number` | `4`    |
| `borderRadiusLG` | 大圆角   | `number` | `8`    |

### 动效

| Token                | 说明         | 类型     | 默认值                                   |
| -------------------- | ------------ | -------- | ---------------------------------------- |
| `motionDurationFast` | 快速动画时长 | `string` | `'0.1s'`                                 |
| `motionDurationMid`  | 中速动画时长 | `string` | `'0.2s'`                                 |
| `motionDurationSlow` | 慢速动画时长 | `string` | `'0.3s'`                                 |
| `motionEaseInOut`    | 进出缓动     | `string` | `'cubic-bezier(0.645, 0.045, 0.355, 1)'` |
| `motionEaseOut`      | 出缓动       | `string` | `'cubic-bezier(0.215, 0.61, 0.355, 1)'`  |

### 阴影 & 布局

| Token                   | 说明          | 类型     | 默认值      |
| ----------------------- | ------------- | -------- | ----------- |
| `boxShadow`             | 基础阴影      | `string` | -           |
| `boxShadowSecondary`    | 次级阴影      | `string` | -           |
| `boxShadowTertiary`     | 三级阴影      | `string` | -           |
| `boxShadowPopoverArrow` | 弹出层箭头    | `string` | -           |
| `colorBgHeader`         | Header 背景色 | `string` | `'#001529'` |

## 派生 Token（MapTokens）

以下 Token 由 SeedTokens 自动派生，**无需也不应手动设置**。在组件 CSS 中通过 `var(--hmfw-xxx)` 直接使用：

| 类别       | 数量 | 示例                                                             | 派生来源                                         |
| ---------- | ---- | ---------------------------------------------------------------- | ------------------------------------------------ |
| 文字色     | 9    | `colorText` / `colorTextSecondary` / `colorTextDisabled`         | `colorTextBase` + alpha 透明度                   |
| 主色变体   | 9    | `colorPrimaryHover` / `colorPrimaryBg` / `colorPrimaryBorder`    | `colorPrimary` + lighten/darken                  |
| 语义色变体 | 15   | `colorSuccessBg` / `colorInfoHover` / `colorErrorActive`         | 各语义色 + lighten/darken                        |
| 背景衍生色 | 7    | `colorBgContainer` / `colorBgLayout` / `colorBgMask`             | `colorBgBase` / `colorTextBase`                  |
| 边框/填充  | 8    | `colorBorder` / `colorFill` / `colorFillSecondary`               | `colorBgBase` + darken / `colorTextBase` + alpha |
| 间距       | 16   | `padding` / `marginSM` / `marginXXL`                             | 内部间距公式                                     |
| 字号/行高  | 16   | `fontSize` / `fontSizeHeading1` / `lineHeightSM`                 | `fontSizeBase` / `lineHeightBase`                |
| 控件尺寸   | 6    | `controlHeight` / `controlHeightSM` / `controlPaddingHorizontal` | 固定设计常量                                     |
| 补充 Token | 14   | `zIndexPopup` / `colorSplit` / `arrowBg`                         | 混合                                             |

完整列表见 `components/_theme/theme.ts` 中的 `MapTokens` 接口。

## 直接使用 CSS Variables

所有 Token 都会以 `--hmfw-` 前缀注入为 CSS 变量，可以在自定义样式中直接使用：

```css
.my-component {
  color: var(--hmfw-color-primary);
  border: 1px solid var(--hmfw-color-border);
  border-radius: var(--hmfw-border-radius);
  font-size: var(--hmfw-font-size);
  padding: var(--hmfw-padding-sm) var(--hmfw-padding);
}
```

## 构建时生成

修改 seed 默认值或派生逻辑后，运行以下命令重新生成静态 CSS fallback：

```bash
pnpm generate-theme
```

`precheck` 和 `build:lib` 会自动校验 CSS 是否与 TS 代码同步，不一致则发布失败。

## 更多示例

参见 [ConfigProvider 组件文档](/components/config-provider) 中的交互式 Demo（品牌色切换、暗色模式、紧凑间距）。
