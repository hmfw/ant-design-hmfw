# ConfigProvider 全局配置

为组件提供统一的全局化配置。

## 何时使用

- 需要统一配置组件库的主题、国际化、组件尺寸等全局属性时
- 在应用根组件处包裹，影响所有子组件

## 代码演示


### 主题配置

通过 theme 属性配置全局主题色。

<DemoBlock title="主题配置" :source="ConfigProviderThemeSource">
  <ConfigProviderTheme />
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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 设置主题，包括主色等 Design Token | `{ token?: { colorPrimary?: string, borderRadius?: number, ... } }` | - |
| locale | 语言包配置 | `zhCN \| enUS` | `zhCN` |
| prefixCls | 设置统一样式前缀 | `string` | `'hmfw'` |
| componentSize | 设置 antd 组件大小 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| direction | 设置布局方向 | `'ltr' \| 'rtl'` | `'ltr'` |

### Theme Token（常用）

| Token | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colorPrimary | 品牌主色 | `string` | `'#1677ff'` |
| colorSuccess | 成功色 | `string` | `'#52c41a'` |
| colorWarning | 警告色 | `string` | `'#faad14'` |
| colorError | 错误色 | `string` | `'#ff4d4f'` |
| borderRadius | 基础圆角 | `number` | `6` |
| fontSize | 基础字号 | `number` | `14` |

### 国际化语言包

| 语言包 | 说明 |
| --- | --- |
| `zhCN` | 简体中文 |
| `enUS` | 英文 |
