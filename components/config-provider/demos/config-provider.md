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

### 嵌套与局部主题

ConfigProvider 可以嵌套。**内层只需声明要改的项，其余配置继承外层**，且内层主题被限定在自己的子树内，不会泄漏到外层或其他兄弟节点。

<DemoBlock title="嵌套与局部主题" :source="ConfigProviderNestedSource">
  <ConfigProviderNested />
</DemoBlock>

### 全局尺寸

通过 `componentSize` 属性统一配置组件尺寸。控件自身的 `size` 优先级更高，可单独覆盖全局配置。

<DemoBlock title="全局尺寸" :source="ConfigProviderSizeSource">
  <ConfigProviderSize />
</DemoBlock>

### 全局禁用

通过 `componentDisabled` 统一下发禁用态。与控件自身 `disabled` 取「或」，因此容器禁用时**控件无法单独反禁用**（与 Ant Design 的 DisabledContext 行为一致）。

<DemoBlock title="全局禁用" :source="ConfigProviderDisabledSource">
  <ConfigProviderDisabled />
</DemoBlock>

### 国际化

通过 `locale` 属性配置语言包，统一驱动组件内置文案（占位符、空状态、确认框按钮等）。

<DemoBlock title="国际化" :source="ConfigProviderLocaleSource">
  <ConfigProviderLocale />
</DemoBlock>

### 布局方向

通过 `direction` 设置文本方向。目前支持 RTL 的组件为 Rate、Progress、Statistic、Descriptions、Segmented、Skeleton，其余组件暂不响应。

<DemoBlock title="布局方向" :source="ConfigProviderDirectionSource">
  <ConfigProviderDirection />
</DemoBlock>

## API

### ConfigProvider Props

| 参数              | 说明                                                | 类型                                         | 默认值     |
| ----------------- | --------------------------------------------------- | -------------------------------------------- | ---------- |
| theme             | 设置主题 Token，未列出的字段继承上层 ConfigProvider | `Partial<SeedTokens>`                        | -          |
| locale            | 语言包配置                                          | `zhCN \| enUS`                               | `zhCN`     |
| prefixCls         | 设置统一样式前缀                                    | `string`                                     | `'hmfw'`   |
| componentSize     | 设置组件大小                                        | `'small' \| 'middle' \| 'large'`             | `'middle'` |
| componentDisabled | 统一禁用内部控件，控件无法单独反禁用                | `boolean`                                    | `false`    |
| direction         | 设置布局方向                                        | `'ltr' \| 'rtl'`                             | `'ltr'`    |
| getPopupContainer | 弹层（Tooltip / Dropdown / Popover 等）默认挂载节点 | `(triggerNode?: HTMLElement) => HTMLElement` | `body`     |

所有属性均支持嵌套继承：内层 ConfigProvider 未声明的属性沿用外层配置，而非重置为默认值。

### 嵌套行为说明

- **配置继承**：内层未声明的属性逐项回退到外层；`theme` 是部分覆盖语义，未列出的 seed token 继承外层
- **主题作用域**：根 ConfigProvider 把 CSS 变量注入 `:root` 全局生效，不产生任何 DOM；**嵌套** ConfigProvider 会渲染一个 `display: contents` 的作用域节点承载局部变量，该节点不产生盒模型、不进无障碍树，对布局与语义透明
- **`prefixCls` 不支持运行时切换**：组件类名在挂载时求值，运行时修改 `prefixCls` 只会更新 CSS 变量名而不更新类名，二者会脱节。请在应用启动时一次性设定

### Hooks

以下 hooks 从包内直接导出，供自定义组件消费全局配置：

| Hook                     | 返回值                       | 说明                                                      |
| ------------------------ | ---------------------------- | --------------------------------------------------------- |
| `useConfig()`            | `ComputedRef<ConfigContext>` | 获取完整配置上下文；无 ConfigProvider 时返回默认配置      |
| `usePrefixCls(name)`     | `string`                     | 拼接组件类名前缀，如 `usePrefixCls('btn')` → `'hmfw-btn'` |
| `useLocale()`            | `ComputedRef<Locale>`        | 获取当前语言包                                            |
| `useMergedDisabled(ref)` | `ComputedRef<boolean>`       | 合并控件自身 `disabled` 与上下文禁用态（取「或」）        |

### Theme Token（SeedTokens）

> **核心设计**：只需设置这些 23 个原始 Token，所有 115 个 MapTokens 自动派生。修改默认值后运行 `pnpm generate-theme` 更新静态 CSS。

| Token                 | 说明             | 类型     | 默认值                                 |
| --------------------- | ---------------- | -------- | -------------------------------------- |
| colorPrimary          | 品牌主色         | `string` | `'#1677ff'`                            |
| colorSuccess          | 成功色           | `string` | `'#52c41a'`                            |
| colorWarning          | 警告色           | `string` | `'#faad14'`                            |
| colorError            | 错误色           | `string` | `'#ff4d4f'`                            |
| colorInfo             | 信息色           | `string` | `'#1677ff'`                            |
| colorTextBase         | 文字基准色       | `string` | `'#000000'`                            |
| colorBgBase           | 背景基准色       | `string` | `'#ffffff'`                            |
| fontFamily            | 字体家族         | `string` | 系统字体栈                             |
| fontSizeBase          | 基础字号         | `number` | `14`                                   |
| lineHeightBase        | 基础行高         | `number` | `1.5714285714285714`                   |
| borderRadius          | 基础圆角         | `number` | `6`                                    |
| borderRadiusSM        | 小圆角           | `number` | `4`                                    |
| borderRadiusLG        | 大圆角           | `number` | `8`                                    |
| motionDurationFast    | 快速动画时长     | `string` | `'0.1s'`                               |
| motionDurationMid     | 中速动画时长     | `string` | `'0.2s'`                               |
| motionDurationSlow    | 慢速动画时长     | `string` | `'0.3s'`                               |
| motionEaseInOut       | 缓入缓出曲线     | `string` | `cubic-bezier(0.645, 0.045, 0.355, 1)` |
| motionEaseOut         | 缓出曲线         | `string` | `cubic-bezier(0.215, 0.61, 0.355, 1)`  |
| boxShadow             | 基础阴影         | `string` | 三层组合阴影                           |
| boxShadowSecondary    | 次级阴影（弹层） | `string` | 三层组合阴影                           |
| boxShadowTertiary     | 三级阴影         | `string` | 三层组合阴影                           |
| boxShadowPopoverArrow | 弹层箭头阴影     | `string` | `2px 2px 5px rgba(0,0,0,0.05)`         |
| colorBgHeader         | Header 背景      | `string` | `'#001529'`                            |

### 派生 Token（MapTokens）

以下 115 个 Token 由 SeedTokens **自动派生**，无需手动设置，可在组件 CSS 中通过 `var(--hmfw-xxx)` 直接使用：

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
