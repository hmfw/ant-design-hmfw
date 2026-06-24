# 更新日志

本项目的所有重要变更都将记录在此文件中。

版本格式遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

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
