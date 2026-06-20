# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- 🔧 修复 `install()` 函数漏注册 33 个组件的问题，全局注册现已支持所有 68 个组件
- 📦 优化 npm 包体积：排除 UMD sourcemap，包体积从 10.5MB 降至 4.4MB（压缩包 1.1MB）
- 📝 更新项目数据：68 个组件、1889 个测试用例
- 🧹 精简项目结构：移除历史开发文档、未使用脚本和视觉测试

### Added

- ✅ 添加冒烟测试，E2E 覆盖所有 68 个组件页面
- 🎨 完成全部组件的语义化 API（classNames/styles）支持，Wave 4A-4D 共 42 个组件
- 📚 同步 LLM 文档与组件元数据

### Removed

- 🗑️ 移除视觉回归测试（3 个测试文件，覆盖率仅 4.4%）
- 🗑️ 移除历史文档：COMPARISON/、IMPLEMENTATION_PLAN.md、BUILD_OPTIMIZATION.md 等
- 🗑️ 移除未使用脚本：verify-release.js、scripts/examples/

---

## [0.1.0] - 2026-06-07

### Added

#### 核心功能

- 🎉 实现 68 个高质量组件，涵盖所有常用场景
- 🎨 完整的主题系统，支持 CSS Variables 动态定制
- 🌍 国际化支持（中文、英文）
- 📦 TypeScript 完整类型定义
- ✅ 1891 个单元测试，覆盖所有组件

#### 组件列表

**通用组件 (3)**

- Button - 按钮
- Icon - 图标（79 个内置图标）
- Typography - 排版（Text, Title, Paragraph, Link）

**布局组件 (5)**

- Divider - 分割线
- Flex - 弹性布局
- Grid - 栅格系统（Row, Col）
- Layout - 布局容器（Layout, Header, Footer, Content, Sider）
- Space - 间距

**导航组件 (7)**

- Anchor - 锚点
- Breadcrumb - 面包屑
- Dropdown - 下拉菜单
- Menu - 导航菜单
- Pagination - 分页
- Steps - 步骤条
- Tabs - 标签页

**数据录入组件 (18)**

- AutoComplete - 自动完成
- Cascader - 级联选择
- Checkbox - 多选框
- ColorPicker - 颜色选择器
- DatePicker - 日期选择器
- Form - 表单
- Input - 输入框（Input, TextArea, InputSearch, InputPassword）
- InputNumber - 数字输入框
- Radio - 单选框
- RangePicker - 范围选择器
- Rate - 评分
- Select - 选择器（支持虚拟滚动）
- Slider - 滑动输入条
- Switch - 开关
- TimePicker - 时间选择器
- Transfer - 穿梭框
- TreeSelect - 树选择
- Upload - 上传

**数据展示组件 (18)**

- Avatar - 头像
- Badge - 徽标
- Calendar - 日历
- Card - 卡片
- Carousel - 走马灯
- Collapse - 折叠面板
- Descriptions - 描述列表
- Empty - 空状态
- Image - 图片
- List - 列表
- Popover - 气泡卡片
- Progress - 进度条
- QRCode - 二维码
- Segmented - 分段控制器
- Statistic - 统计数值
- Table - 表格
- Tag - 标签
- Timeline - 时间轴
- Tooltip - 文字提示
- Tree - 树形控件
- Watermark - 水印

**反馈组件 (11)**

- Alert - 警告提示
- Drawer - 抽屉
- Message - 全局提示
- Modal - 对话框
- Notification - 通知提醒框
- Popconfirm - 气泡确认框
- Result - 结果
- Skeleton - 骨架屏
- Spin - 加载中
- Tour - 漫游引导

**其他组件 (4)**

- App - 全局上下文
- BackTop - 回到顶部
- ConfigProvider - 全局配置
- FloatButton - 悬浮按钮

#### 构建优化

- 📦 支持多格式输出：ESM、CJS、UMD
- 🌲 Tree Shaking 支持，按需引入
- 📝 完整的 TypeScript 类型声明
- 🗺️ Source Map 支持
- 🎨 CSS 样式优化（2.59 KB → 0.54 KB Gzip）

#### 开发工具

- 🔍 Bundle 分析工具（`pnpm analyze:bundle`）
- 🌲 Tree Shaking 测试（`pnpm analyze:treeshaking`）
- 📚 完整的文档站点
- 🧪 单元测试框架（Vitest）

### Fixed

- 🐛 修复 266 个组件 bug
- 🎯 优化 94 个功能点

### Performance

- ⚡ VirtualList 支持 10,000+ 数据流畅滚动
- 🚀 构建产物体积优化（ESM: 160 KB Gzip）

---

## 版本说明

### 语义化版本规则

- **Major (x.0.0)**: 不兼容的 API 变更
- **Minor (0.x.0)**: 向后兼容的功能新增
- **Patch (0.0.x)**: 向后兼容的问题修正

### 链接

- [Unreleased]: https://github.com/hmfw/ant-design-hmfw/compare/v0.1.0...HEAD
- [0.1.0]: https://github.com/hmfw/ant-design-hmfw/releases/tag/v0.1.0
