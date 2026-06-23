# 更新日志

本项目的所有重要变更都将记录在此文件中。

版本格式遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

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
