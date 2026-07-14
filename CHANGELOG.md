# 更新日志

本项目的所有重要变更都将记录在此文件中。

版本格式遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

**完整历史记录**：所有版本的详细变更记录存放在 [changelogs/](./changelogs/) 目录，每个版本一个独立文件。

---

## 最近版本

## [0.24.0] - 2026-07-14

[查看完整内容](./changelogs/v0.24.0.md)

### 🔧 重构

- **Collapse 渲染逻辑去重**：提取 `renderPanelNode` 共享函数，Items/Panel 两模式共用唯一模板（减少 ~200 行重复代码）
- **CollapsePanel 独立文件**：从 Collapse.tsx 分离到 CollapsePanel.tsx，共享内部 API 通过 export 暴露

### ✨ 新特性

- **Collapse 键盘无障碍**：header 新增 Enter/Space 键支持 + tabindex 管理
- **Item 级别 `classNames`/`styles`**：面板级语义化样式定制，优先级高于 Collapse 级别

### 🐛 修复

- **Context 类型安全**：定义 `CollapseContext` 接口，消除 `inject<any>`
- **`CollapseItem.style` 类型修正**：`Record<string, any>` → `CSSProperties`
- **CSS `:not()` 选择器兼容性**：修复嵌套后代选择器在旧浏览器中的行为

### 📝 文档

- **Collapse demo 扩充**：新增 Ghost、IconPosition、DestroyInactive、PanelLevel 四个 demo（8 → 12）

---

## [0.23.0] - 2026-07-14

[查看完整内容](./changelogs/v0.23.0.md)

### 🔧 重构

- **Empty props 类型规范化**：提取 `emptyProps` 并使用 `satisfies Record<keyof EmptyProps, any>` 模式
- **图片渲染去重 + 消除 `as any`**：三分支合并单一 wrapper，复合类型挂载预设常量

### ✨ 新特性

- **`img alt` 无障碍增强**：优先取字符串 `description`，与 AntD v6 对齐
- **`#description` 插槽优先级高于 `description={false}`**：提供插槽时始终展示

### 💥 Breaking Changes

- **`imageStyle` 类型**：`Record<string, string>` → `CSSProperties`（对绝大多数用法向后兼容）

### 📊 质量提升

- 测试覆盖：18 → 21 (+17%)、文档 7 → 9 Demo (+29%)，覆盖全部对外能力

---

## [0.22.0] - 2026-07-14

[查看完整内容](./changelogs/v0.22.0.md)

### 🔧 重构

- **Skeleton 类型规范化**：所有 6 个组件使用 `satisfies Record<keyof XProps, any>` 模式
- **Skeleton 代码可读性优化**：提取魔法数字为语义化常量，添加完整注释

### ✨ 新特性

- **Skeleton 数字尺寸边界校验**：`size` 限制在 8-200px，防止布局异常
- **Skeleton 开发环境警告**：在 DEV 模式下警告无效配置

### 📊 质量提升

- 测试覆盖：50 → 72 (+44%)
- 综合评分：92.5/100 → 96/100，从"优秀"提升到"卓越"

---

## [0.21.0] - 2026-07-13

[查看完整内容](./changelogs/v0.21.0.md)

### ✨ 新特性

- **Segmented `size` 接入 ConfigProvider**：未显式传 `size` 时回退到全局 `componentSize`
- **Segmented 键盘导航跳过禁用项**：方向键遇到连续禁用选项时自动越过
- **Segmented 无障碍增强**：根节点补 `role="radiogroup"`

### 🐛 修复

- **Segmented 默认模式选项等分导致长文本被裁剪**：现仅 `block` 模式等分
- **Segmented 异步选项默认值失效**：改由 computed 兜底首个可用选项

---

## [0.20.0] - 2026-07-13

[查看完整内容](./changelogs/v0.20.0.md)

### ✨ 新特性

- **Tag 新增 `variant` 属性**：支持 `outlined`、`filled`、`solid` 三种变体
- **新增 CheckableTagGroup 组件**：支持单选/多选、受控/非受控模式
- **Tag 新增 `icon` 插槽**：支持前置图标

### 🐛 修复

- **Tag 自定义颜色 3 位缩写 hex 底色错误**：`#f50` 等 3 位 hex 现已正确展开
- **CheckableTag 无障碍与键盘支持缺失**：补齐 `role="checkbox"`、`aria-checked` 等

---

## [0.19.0] - 2026-07-13

[查看完整内容](./changelogs/v0.19.0.md)

### 🔧 重构

- **Badge 全面代码审查与重构**：从 API 设计、健壮性、架构、可维护性四个维度系统优化
- **类型安全**：引入 `satisfies Record<keyof BadgeProps, any>` 约束

### 🐛 修复

- **Badge 独立徽标宽高为 0**：修复容器高度塌陷，独立模式改为 `position: static`
- **Badge 预设颜色数字徽标显示错误**：修复 count/dot 模式未应用预设颜色类名

### 🧪 测试

- Badge 测试从 18 → 28，覆盖率提升 30.8%

---

## [0.18.1] - 2026-07-13

[查看完整内容](./changelogs/v0.18.1.md)

### ✨ 新特性

- **AvatarGroup `max` 结构化 API**：新增 `max={{ count, style, popover }}`
- **Avatar `error` 事件可阻止 fallback**：返回 `false` 时保留 `img` 元素

### 🐛 修复

- **Avatar src 变更不复位**：切换图片地址时复位 `imgError` / `scale`
- **Avatar 响应式回退方向**：仅取当前断点值，不再向更小断点回退

---

## [0.18.0] - 2026-07-13

[查看完整内容](./changelogs/v0.18.0.md)

### ✨ 新特性

- **AutoComplete / Input / Select 半受控还原**：重新支持 `defaultValue` / `defaultOpen`，撤销 0.14.0-0.17.0 的纯受控限制

### 🐛 修复

- **Pagination responsive 失效**：`size` prop 默认值改回 `undefined`，修复响应式断点失效问题

---

## [0.17.0] - 2026-07-13

[查看完整内容](./changelogs/v0.17.0.md)

### 💥 Breaking Changes

- **AutoComplete 纯受控化**：移除 `defaultValue` / `defaultOpen` props（v0.18.0 已还原）

### ✨ 新特性

- **AutoComplete `optionFilterProp`**：内置过滤可指定依据字段
- **AutoComplete `size` 回退**：缺省时回退到 `ConfigProvider` 的 `componentSize`

---

## [0.16.2] - 2026-07-13

[查看完整内容](./changelogs/v0.16.2.md)

### 🎨 Steps 样式 Token 化

- **新增 CSS 变量**：`--hmfw-steps-gap-sm` / `--hmfw-steps-gap-lg` 等，替代硬编码偏移量
- **CSS 结构重排**：按 Base → Orientation → Type → Variant → Size → Modifiers 层级重组

### 📝 Steps Demo 完善

- **新增 4 个 demo**：图标、类型对比、变体、标签垂直放置

---

## 历史版本索引

| 版本                              | 日期       | 重点变更                                   |
| --------------------------------- | ---------- | ------------------------------------------ |
| [0.24.0](./changelogs/v0.24.0.md) | 2026-07-14 | Collapse 全面重构、渲染去重、键盘无障碍    |
| [0.16.1](./changelogs/v0.16.1.md) | 2026-07-12 | ComponentSize 统一、Tabs ink bar 数据驱动  |
| [0.16.0](./changelogs/v0.16.0.md) | 2026-07-12 | Tabs 受控化、ink bar 抽取 composable       |
| [0.15.0](./changelogs/v0.15.0.md) | 2026-07-11 | Input 受控化、TextArea count 配置          |
| [0.14.0](./changelogs/v0.14.0.md) | 2026-07-11 | Select 受控化、自定义字段名                |
| [0.13.0](./changelogs/v0.13.0.md) | 2026-07-10 | Pagination 受控化、响应式优化              |
| [0.12.0](./changelogs/v0.12.0.md) | 2026-07-10 | 移除全部已废弃 API、删除 BackTop           |
| [0.11.0](./changelogs/v0.11.0.md) | 2026-07-10 | Menu 渲染架构重构                          |
| [0.10.0](./changelogs/v0.10.0.md) | 2026-07-10 | 主题系统三文件合并为 theme.ts              |
| [0.9.0](./changelogs/v0.9.0.md)   | 2026-07-10 | 全面移除 rootClassName                     |
| [0.8.0](./changelogs/v0.8.0.md)   | 2026-07-10 | Carousel API 重构与命名对齐                |
| [0.7.1](./changelogs/v0.7.1.md)   | 2026-07-09 | Dropdown arrow、Trigger matchWidth 增强    |
| [0.7.0](./changelogs/v0.7.0.md)   | 2026-07-09 | 新增 Mentions、VirtualList 统一抽取        |
| [0.6.11](./changelogs/v0.6.11.md) | 2026-07-09 | Trigger 焦点管理修复、全局事件优化         |
| [0.6.10](./changelogs/v0.6.10.md) | 2026-07-09 | Breadcrumb 类型安全、边界修复              |
| [0.6.9](./changelogs/v0.6.9.md)   | 2026-07-09 | Anchor 响应式断裂修复                      |
| [0.6.8](./changelogs/v0.6.8.md)   | 2026-07-08 | Layout hasSider 修复                       |
| [0.6.6](./changelogs/v0.6.6.md)   | 2026-07-08 | FloatButton 重构、Typography 优化          |
| [0.6.5](./changelogs/v0.6.5.md)   | 2026-07-07 | Button 全面代码优化                        |
| [0.6.4](./changelogs/v0.6.4.md)   | 2026-07-05 | Carousel infinite 循环方向修复             |
| [0.6.3](./changelogs/v0.6.3.md)   | 2026-07-04 | Image/Table 修复、图标替换                 |
| [0.6.2](./changelogs/v0.6.2.md)   | 2026-07-03 | Upload 内置预览、Transfer 优化             |
| [0.6.1](./changelogs/v0.6.1.md)   | 2026-07-03 | Rate/Switch/TimePicker 改进                |
| [0.6.0](./changelogs/v0.6.0.md)   | 2026-07-02 | 移除图标重导出                             |
| [0.5.2](./changelogs/v0.5.2.md)   | 2026-06-30 | InputNumber 重构、主题 Token 修复          |
| [0.5.1](./changelogs/v0.5.1.md)   | 2026-06-29 | 图标系统独立发布                           |
| [0.5.0](./changelogs/v0.5.0.md)   | 2026-06-28 | 🎉 68 个组件完成、正式发布 npm             |
| [0.4.0](./changelogs/v0.4.0.md)   | 2026-06-20 | 新增 10 个组件（TreeSelect、Upload 等）    |
| [0.3.0](./changelogs/v0.3.0.md)   | 2026-06-10 | 新增 15 个组件（Form、Menu、Table 等）     |
| [0.2.0](./changelogs/v0.2.0.md)   | 2026-06-01 | 新增 20 个组件（Modal、Drawer、Select 等） |
| [0.1.0](./changelogs/v0.1.0.md)   | 2026-05-20 | 🎉 首次发布、18 个基础组件                 |

---

## 查看完整历史

浏览 [changelogs/](./changelogs/) 目录查看所有版本的详细变更记录。
