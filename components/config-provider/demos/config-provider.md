# ConfigProvider 全局配置

为组件提供统一的全局化配置。

## 何时使用

- 需要统一配置组件库的主题、国际化、组件尺寸等全局属性时
- 在应用根组件处包裹，影响所有子组件

## 代码演示

### 主题配置

通过 `theme` 属性修改品牌色。**只需改 `colorPrimary` 一个值**，所有派生色（hover、active、bg、border、text 变体）自动计算。

<DemoBlock title="主题配置" :source="ConfigProviderThemeSource">
  <ConfigProviderTheme />
</DemoBlock>

### 暗色模式

通过修改 `colorTextBase` 和 `colorBgBase` 实现暗色/浅色主题切换，所有文字色、背景色、边框色、填充色自动重新派生。

<DemoBlock title="暗色模式" :source="ConfigProviderDarkModeSource">
  <ConfigProviderDarkMode />
</DemoBlock>

### 紧凑间距

展示默认与紧凑两种尺寸的布局和间距差异。

<DemoBlock title="紧凑间距" :source="ConfigProviderCompactSource">
  <ConfigProviderCompact />
</DemoBlock>

### 国际化

通过 locale 属性配置国际化语言。

<DemoBlock title="国际化" :source="ConfigProviderLocaleSource">
  <ConfigProviderLocale />
</DemoBlock>

### 全局尺寸

通过 componentSize 属性统一配置组件尺寸。

<DemoBlock title="全局尺寸" :source="ConfigProviderSizeSource">
  <ConfigProviderSize />
</DemoBlock>

## API

### ConfigProvider Props

| 参数          | 说明             | 类型                             | 默认值     |
| ------------- | ---------------- | -------------------------------- | ---------- |
| theme         | 设置主题 Token   | `Partial<SeedTokens>`            | -          |
| locale        | 语言包配置       | `zhCN \| enUS`                   | `zhCN`     |
| prefixCls     | 设置统一样式前缀 | `string`                         | `'hmfw'`   |
| componentSize | 设置组件大小     | `'small' \| 'middle' \| 'large'` | `'middle'` |
| direction     | 设置布局方向     | `'ltr' \| 'rtl'`                 | `'ltr'`    |

### Theme Token（SeedTokens）

> **核心设计**：只需设置这些原始 Token，所有 ~110 个 MapTokens 自动派生。修改后运行 `pnpm generate-theme` 更新静态 CSS。

| Token              | 说明        | 类型     | 默认值      |
| ------------------ | ----------- | -------- | ----------- |
| colorPrimary       | 品牌主色    | `string` | `'#1677ff'` |
| colorSuccess       | 成功色      | `string` | `'#52c41a'` |
| colorWarning       | 警告色      | `string` | `'#faad14'` |
| colorError         | 错误色      | `string` | `'#ff4d4f'` |
| colorInfo          | 信息色      | `string` | `'#1677ff'` |
| colorTextBase      | 文字基准色  | `string` | `'#000000'` |
| colorBgBase        | 背景基准色  | `string` | `'#ffffff'` |
| borderRadius       | 基础圆角    | `number` | `6`         |
| borderRadiusSM     | 小圆角      | `number` | `4`         |
| borderRadiusLG     | 大圆角      | `number` | `8`         |
| fontSizeBase       | 基础字号    | `number` | `14`        |
| fontFamily         | 字体家族    | `string` | 系统字体栈  |
| boxShadow          | 基础阴影    | `string` | -           |
| boxShadowSecondary | 次级阴影    | `string` | -           |
| boxShadowTertiary  | 三级阴影    | `string` | -           |
| colorBgHeader      | Header 背景 | `string` | `'#001529'` |

### 派生 Token（MapTokens）

以下 Token 由 SeedTokens **自动派生**，无需手动设置，可在组件 CSS 中通过 `var(--hmfw-xxx)` 直接使用：

- **文字色**（9 个）：`colorText` / `colorTextSecondary` / `colorTextTertiary` / ... — 从 `colorTextBase` 按透明度阶梯派生
- **主色变体**（9 个）：`colorPrimaryBg` / `colorPrimaryBorder` / `colorPrimaryHover` / ... — 从 `colorPrimary` 通过 lighten/darken 派生
- **语义色变体**（15 个）：success / warning / error / info 系列的 bg / border / text / hover / active
- **背景衍生色**（5 个）：`colorBgContainer` / `colorBgLayout` / `colorBgMask` / ...
- **边框/填充色**（8 个）：`colorBorder` / `colorFill` / ... — 从 `colorBgBase` / `colorTextBase` 派生
- **间距/字号/控件尺寸**（30+ 个）：`padding` / `margin` / `fontSize` / `controlHeight` 系列
- **补充 Token**（14 个）：`zIndexPopup` / `colorSplit` / `controlPaddingHorizontal` / ...

完整列表见 `components/_theme/theme.ts` 中的 `MapTokens` 接口。

### 国际化语言包

| 语言包 | 说明     |
| ------ | -------- |
| `zhCN` | 简体中文 |
| `enUS` | 英文     |
