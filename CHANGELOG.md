# 更新日志

本项目的所有重要变更都将记录在此文件中。

版本格式遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

---

## [0.5.2] - 2026-06-30

### 💥 破坏性变更 — InputNumber

- **移除 addon API**：删除 `addonBefore` / `addonAfter` 属性及相关实现，与 Ant Design v6 官方 API 对齐（InputNumber 组件不支持外部标签，仅保留 `prefix` / `suffix` 内部前后缀）
- **移除 variant API**：删除 `variant` 属性（`'outlined' | 'filled' | 'borderless' | 'underlined'`），统一为单一样式，与 Ant Design v6 对齐

### ✨ 改进 — InputNumber

- **Spinner 模式重构**：横向三段式布局（左减按钮 / 中间值 / 右加按钮），替代原竖排增减按钮，对齐 Ant Design 设计规范
- **suffix 遮挡修复**：增减按钮仅在 hover/focus 时显示，suffix 通过 `margin-inline-end` 平滑推开 22px（配合 0.2s 过渡动画），默认状态无空隙
- **聚焦步进修复**：聚焦时点击增减按钮，从当前已键入值计算步进值，并同步更新显示（修复点击 up/down 值不变的问题）
- **语义化 API 精简**：删除 `classNames` / `styles` 中的 `groupWrapper`、`wrapper`、`addonBefore`、`addonAfter` 字段

### 🐛 修复 — 主题 Token CSS 变量

- **新增静态默认变量**：新增 `components/_theme/style/index.css`，将 `generateMapTokens(defaultSeedTokens)` 产物静态化为 `:root`，并在 `components/style.css` 顶部引入。未挂载 `ConfigProvider` 时组件 CSS 中的 `var(--hmfw-*)` 也能获得正确默认值
- **统一 line-height**：将散落在各组件中的硬编码 `line-height: 1.5714` / `1.5715` / `1.5714285714285714` 统一替换为 `var(--hmfw-line-height)`，去除冗余 fallback
- **修复 Descriptions 行高错误**：`var(--hmfw-line-height-lg, 1.5714)` 的 fallback 与真实 token 值（1.5）不一致，改用无 fallback 的 `var(--hmfw-line-height-lg)`；`--hmfw-line-height-base` 统一为 `--hmfw-line-height`

### ✨ 改进 — Picker 组件

- **图标替换**：DatePicker、RangePicker、TimePicker 的后缀与清除图标由 emoji（📅🕐✕）替换为 `@hmfw/icons` 组件（`CalendarOutlined`、`ClockCircleOutlined`、`CloseCircleFilled`）
- **清除图标交互**：有值时 hover 显示清除图标并完整遮挡后缀图标，清除图标字号与后缀对齐（14px）避免边缘露出
- **输入框对齐**：`input-inner` 清零默认 `margin`/`padding`，行高改用 `var(--hmfw-line-height)`，修复文字基线偏移

### ✨ 改进 — Input 组件

- **TextArea 自动高度优化**：新增 `calculateNodeHeight.ts` 工具函数（参考 Ant Design v6 实现），使用隐藏 textarea 精确计算内容高度，支持 `minRows`/`maxRows` 配置，修复自动高度计算不准确的问题
- **新增 count 属性**：对齐 Ant Design v6 API，支持 `count.show`、`count.max`、`count.strategy`、`count.exceedFormatter` 配置，提供更灵活的字符计数控制
- **超出限制自动截断**：当配置 `count.max` 时，输入超出限制会自动截断，避免用户输入超长内容
- **InputPassword 图标替换**：隐藏密码图标从 emoji（👁‍🗨）替换为 `EyeInvisibleOutlined` 组件，视觉统一
- **计数显示改进**：新增 `.hmfw-input-data-count` 类名，优化计数节点样式和结构

### ✨ 改进 — DatePicker 组件

- **时间列渲染重构**：提取 `renderTimeColumn` 函数复用时间列渲染逻辑，消除小时/分钟/秒列的重复代码（~60 行）
- **面板布局优化**：`showTime` 时日期面板与时间面板并排显示（flex 布局），替代原来的垂直堆叠，提升空间利用率
- **日期单元格尺寸固定**：日历格子由响应式 `grid-template-columns: repeat(7, 1fr)` 改为固定 `36px`，消除宽度不一致问题
- **样式细节调整**：
  - 星期标题字号 12px → 14px，增加高度和居中对齐
  - 年份/月份标题按钮字重 500 → 700，强化层级
  - 月份/年份/季度选择面板新增固定宽度 252px
  - 移除面板 `min-width: 280px`，由内容自适应

### 🐛 修复 — 其他

- **AutoComplete**：移除多余的 `closeOnOutsideClick={false}`、`closeOnEscape={false}` 传参
- **Checkbox demo**：`handleCheckAllChange` 参数类型修正为 `CheckboxChangeEvent`，从 `e.target.checked` 取值

---

## [0.5.1] - 2026-06-30

### 🐛 修复 — Tabs 组件

- **Centered 模式 ink-bar 位置**：修复 `centered` 模式下选中指示条位置偏移的问题，正确计算 `nav-list` 相对偏移
- **垂直方向样式**：为 `tabPosition="left/right"` 添加正确的 `padding: 8px 24px` 和 `margin-top: 16px` 间距
- **tabBarExtraContent 实现**：
  - 使用 `isVNode()` 正确区分 VNode 和 `{ left, right }` 对象
  - 修复 DOM 结构：`left` 在 `nav-wrap` 之前，`right` 在 `nav-wrap` 之后
  - 单个 VNode 默认靠右显示
- **响应式更新**：添加窗口大小变化监听，自动重新计算 ink-bar 位置

### ✨ 改进 — Demo 质量

- 将所有 demo 中的原生 HTML 表单元素（`<select>`、`<input>`）替换为 Ant Design 组件
- 修复 `h(Button)` 使用方式，children 传入函数避免 Vue 警告
- 涉及 7 个 demo 文件：Tabs、Menu、Space、Tree、ConfigProvider、Icon

---

## [0.5.0] - 2026-06-30

### ♻️ 重构 — Steps 组件

- **DOM 结构重构**：`container` 拆分为 `header`（icon + title + tail）和 `content`（空 icon 占位符 + description），与 antd v6 对齐
- **Tail 连接线**：移除 `::after` 伪元素，改为真实 DOM 元素直接绘制
- **新增 Steps 专属 Design Token**：`--hmfw-steps-gap`、`--hmfw-steps-icon-size`、`--hmfw-steps-dot-size`、`--hmfw-steps-tail-width`、`--hmfw-steps-tail-min-width`

### ⚠️ 移除

- 移除 `type="panel"` 及 `PanelArrow` 组件
- 移除 `type="navigation"` 及相关样式
- 移除 `percent` prop 及 `ProgressIcon` 组件
- 移除相关 demo 文件

---

## [0.4.2] - 2026-06-29

### 🐛 修复 — Menu 组件

- **Tooltip 位置**：修复折叠态一级菜单项 Tooltip 定位到左上角的问题。`Trigger` 组件在 `triggerDisplay="contents"` 时回退使用子元素计算位置
- **子菜单 click 触发**：修复 `triggerSubMenuAction="click"` 时点击无响应的问题。移除标题 div 与 Trigger wrapper 间的双击冲突，`e.stopPropagation()` + `e.detail` 保持键盘无障碍
- **点击外部关闭**：修复 click 模式下点击其他位置弹框不关闭的问题。`closeOnOutsideClick` 根据触发模式动态设置
- **Hover 间距**：修复 `.hmfw-menu-item` 与 `.hmfw-menu-submenu-title` 的 margin 不折叠导致间距不一致的问题（4px vs 8px）。将 `margin-block` 统一到 `<li>` 级别

### 📦 包含（自 0.4.1 起未发布的变更）

- **重构**：包名迁移 `ant-design-hmfw` → `@hmfw/ant-design`
- **Menu 全面优化**：新增键盘导航（方向键/Enter/Home/End/字母搜索）、Tooltip 集成（折叠态）、动画系统（collapse 过渡 / popup zoom）、水平菜单溢出处理（ResizeObserver + 省略号下拉）、Design Token 体系（20+ CSS 变量）、暗色主题完善、Sider 联动、subMenuOpenDelay/subMenuCloseDelay 延迟控制

---

## [0.4.1] - 2026-06-24

版本号升级，内容同 0.4.0。

---

## [0.4.0] - 2026-06-24

### ♻️ 重构 — 图标系统独立为 @hmfw/icons

将内置的 681 个 SVG 图标拆分到独立 npm 包 [`@hmfw/icons`](https://www.npmjs.com/package/@hmfw/icons)。

#### 主要变更

- **图标独立发布** — 681 个图标组件、元数据系统（15 个分类）、搜索 API（`searchIcons`/`getIconsByCategory` 等）移至独立包 `@hmfw/icons@1.0.1`
- **Icon 包装器保留** — `Icon` 组件继续在主包，依赖 `ConfigProvider` 前缀（`usePrefixCls`）
- **API 向后兼容** — `import { Icon, SearchOutlined, searchIcons } from 'ant-design-hmfw'` 保持不变，通过 barrel 重导出
- **新增依赖** — `@hmfw/icons: ^1.0.1`

#### 删除

- `components/icon/svg/`、`icons/`、`metadata.ts`、`utils.ts`
- `scripts/generate-icons.ts`、`generate-icon-metadata.ts`
- `pnpm gen:icons`、`gen:icon-metadata` 命令

---

## [0.3.0] - 2026-06-24

### ♻️ 重构 — Trigger 浮层系统样式统一

本次重构将 11 个使用 Trigger 的组件中重复的弹出层样式集中到 Trigger 系统内管理，消除 ~400 行冗余 CSS，并统一了命名与 API 格式。

#### 箭头样式统一（P0）

- 将 Tooltip / Dropdown / Popover / Popconfirm 四组件中重复的箭头 CSS（~350 行）提取到 `_internal/trigger/style/index.css`
- 新增 `hmfw-trigger-arrow` 通用箭头类，通过 `--hmfw-arrow-bg` CSS 变量控制颜色
- 新增 `hmfw-trigger-placement-*` 和 `hmfw-trigger-arrow-point-at-center` 自动方位类
- Tooltip 箭头 DOM 结构调整：从 `-content` 内部移至 popup wrapper 直接子元素

#### 弹出层容器基础样式统一（P1）

- 新增 `hmfw-trigger-popup` 基础类，所有使用 Trigger 的组件自动继承 `background` / `border-radius` / `box-shadow`
- 7 个平铺型组件（Select、TreeSelect、Cascader、AutoComplete、DatePicker、TimePicker、ColorPicker）无需再各自定义容器样式
- 4 个分层型组件（Tooltip、Popover、Popconfirm、Dropdown）自动覆盖为透明，视觉由内层元素承载

#### 阴影统一（P2）

- 三种不同 box-shadow 实现（3 层 / 2 层 / drop-shadow）统一为 `--hmfw-box-shadow-secondary` CSS 变量
- Cascader、AutoComplete 阴影由 2 层修正为 3 层
- DatePicker、TimePicker 由 `filter: drop-shadow()` 改为标准 `box-shadow`

#### 条目样式统一（P3）

- Select / Cascader / TreeSelect / AutoComplete 的选项条目样式统一使用 CSS 变量
- 引入 `--hmfw-control-item-bg-hover`、`--hmfw-color-primary-bg`、`--hmfw-control-height` 等变量

#### FloatButtonGroup 迁移至 Trigger

- FloatButtonGroup 手动实现的弹出层逻辑（外部点击关闭、受控/非受控状态、hover/click 触发）替换为 Trigger 统一管理
- 删除 ~30 行重复的事件处理代码

#### 命名与 API 清理

- **TimePicker**：`hmfw-time-picker-panel-container` → `hmfw-time-picker-popup`（与 DatePicker 对齐）
- **Tooltip / Dropdown**：`popupClass` 函数简化为字符串，移除冗余的 placement class（Trigger 已自动添加 `hmfw-trigger-placement-*`）

### 📦 影响范围

- **27 个文件变更**：+417 / −519 行
- **1881 单元测试通过** + **252 E2E 冒烟测试通过**
- 所有组件的公开 API（props、events、slots）保持不变

---

## [0.2.0] - 2026-06-23

### ✨ 新特性

- **统一浮层系统** - 新增内部 `Trigger` 组件与 `computePosition` 定位引擎，支持 12 个弹出方位、溢出自动翻转、箭头对齐等能力，作为所有浮层类组件的共享基座
- **Breadcrumb 下拉菜单增强**
  - 新增公开类型 `BreadcrumbMenu`、`BreadcrumbMenuItem`，菜单项支持 `title`（`label` 别名）与 `path`（与当前项 `href` 拼接）
  - 新增 `dropdownProps`，可透传 `placement`、`trigger` 等属性给底层 Dropdown
  - 新增 `dropdownIcon`，可自定义下拉展开图标（默认 `DownOutlined`）
- **新增设计 Token** - `boxShadowPopoverArrow`，用于浮层箭头阴影

### ♻️ 重构

- 10 个浮层组件统一迁移至 `Trigger` 系统，行为更一致、代码更精简：AutoComplete、Cascader、ColorPicker、DatePicker、Dropdown、RangePicker、Select、TimePicker、Tooltip、TreeSelect

### 🧪 质量保障

- 新增 `Trigger` / `computePosition` 与主题 `map` 单元测试
- 单元测试增至 1925 个（1925 通过 + 2 跳过）

---

## [0.1.0] - 2026-06-20

### 首次发布 🎉

基于 Ant Design v6 的 Vue3 组件库，首个 npm 发布版本。

#### ✨ 核心特性

- 🎨 **68 个高质量组件** - 涵盖通用、布局、导航、表单、数据展示、反馈等全场景
- 💪 **完整 TypeScript 支持** - 所有组件提供完整类型定义
- 🎯 **按需引入** - 支持 Tree Shaking，最小化打包体积
- 🌍 **国际化** - 内置中英文语言包
- 🎨 **主题定制** - 基于 CSS Variables 的设计 Token 系统
- 🎨 **语义化 API** - 所有组件支持 classNames/styles 精细化样式控制
- ⚡ **高性能** - Select/Table 支持虚拟滚动，流畅处理大数据

#### 📦 组件列表

**通用 (3)**  
Button, Icon, Typography

**布局 (5)**  
Divider, Flex, Grid, Layout, Space

**导航 (7)**  
Anchor, Breadcrumb, Dropdown, Menu, Pagination, Steps, Tabs

**数据录入 (18)**  
AutoComplete, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, Radio, RangePicker, Rate, Select, Slider, Switch, TimePicker, Transfer, TreeSelect, Upload

**数据展示 (18)**  
Avatar, Badge, Calendar, Card, Carousel, Collapse, Descriptions, Empty, Image, List, Popover, Progress, QRCode, Segmented, Statistic, Table, Tag, Timeline, Tooltip, Tree, Watermark

**反馈 (11)**  
Alert, Drawer, Message, Modal, Notification, Popconfirm, Result, Skeleton, Spin, Tour

**其他 (4)**  
App, BackTop, ConfigProvider, FloatButton

#### 🧪 质量保障

- ✅ 1891 个单元测试（1889 通过 + 2 跳过）
- ✅ 36 个 E2E 测试，覆盖所有组件页面
- ✅ 完整的文档站点和在线演示

#### 📦 构建产物

- ESM 格式（支持 Tree Shaking）
- UMD 格式（CDN 使用）
- 完整 TypeScript 类型定义
- 独立 CSS 样式文件
- npm 包体积：1.1MB（压缩），4.4MB（解压）

---

[0.2.0]: https://github.com/hmfw/ant-design-hmfw/releases/tag/v0.2.0
[0.1.0]: https://github.com/hmfw/ant-design-hmfw/releases/tag/v0.1.0
