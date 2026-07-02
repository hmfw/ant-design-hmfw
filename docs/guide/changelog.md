# 更新日志

本项目的所有重要变更都将记录在此文件中。

版本格式遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

---

## [Unreleased]

### 💥 破坏性变更

- **移除图标重导出**：删除 `components/icon/` 目录，不再从主包 `@hmfw/ant-design` 重导出图标。用户需直接从 `@hmfw/icons` 导入图标和图标搜索 API
  ```typescript
  // 旧方式（已废弃）
  import { SearchOutlined, searchIcons } from '@hmfw/ant-design'

  // 新方式
  import { SearchOutlined, searchIcons } from '@hmfw/icons'
  ```

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
  - Today 单元格边框色调为主题色（保留 `--hmfw-color-primary`）
  - 时间列 padding / gap 统一规范化（`0 4px` / `6px`）

### 🐛 修复 — Space 组件

- **消除竖排间距偏移**：移除 `display: inline-block`，改为弹性布局（`display: inline-flex; flex-wrap: wrap`），修复竖排（`direction="vertical"`）下子项因内联块元素基线对齐产生的 ~4px 错位
- **添加缺失测试**：补充 Space 组件测试用例，覆盖 basic、horizontal、vertical、split、wrap、align 等场景

---

## [0.5.1] - 2026-06-29

### ✨ 新特性

- **图标系统独立发布**：图标相关代码迁移至独立仓库 [@hmfw/icons](https://github.com/hmfw/ant-design-icons)，发布为独立 npm 包，包含 681 个高质量图标（从 Ant Design v6 同步）
- **主包保持兼容**：主包 `@hmfw/ant-design` 通过 `components/icon/index.ts` 重导出所有图标，用户无需修改导入路径

### 🗑️ 代码清理

- **删除冗余图标文件**：从主仓库删除以下文件，迁移至 `@hmfw/icons`：
  - `components/icon/svg/`、`icons/`、`metadata.ts`、`utils.ts`
  - `scripts/convert-svg.ts`、`scripts/generate-icon-metadata.ts`
- **依赖更新**：添加 `@hmfw/icons@^0.1.0` 为 dependencies

---

## [0.5.0] - 2026-06-28

### 🎉 重大里程碑

- **组件完成度 100%**：68 个组件全部完成，覆盖所有常用场景
- **测试覆盖率达标**：1828 个单元测试 + 36 个 E2E 测试，确保代码质量
- **正式发布 npm**：发布到 [@hmfw/ant-design](https://www.npmjs.com/package/@hmfw/ant-design)

### ✨ 新组件（5 个）

1. **Calendar 日历**：月视图/年视图切换，支持自定义日期单元格渲染
2. **Carousel 走马灯**：支持自动播放、无限循环、渐显/滑动效果
3. **ColorPicker 颜色选择器**：支持 HEX/RGB/HSL 格式，提供色板和滑块选择
4. **Tour 漫游式引导**：支持多步骤引导、自定义位置和蒙层
5. **Transfer 穿梭框**：双列表结构，支持搜索、分页、自定义渲染

### 🐛 修复

- **修复 Radio.Button 边框重叠**：调整负 margin 避免选中态边框被遮挡
- **修复 Table 虚拟滚动计算**：优化滚动性能，修复快速滚动时的渲染抖动

---

## [0.4.0] - 2026-06-20

### ✨ 新组件（10 个）

1. **TreeSelect 树选择**：下拉树形选择器
2. **RangePicker 范围选择器**：日期范围选择
3. **Upload 上传**：文件上传组件
4. **DatePicker 日期选择器**：日期/周/月/季度/年选择
5. **TimePicker 时间选择器**：时/分/秒选择
6. **Tree 树形控件**：树形数据展示
7. **Anchor 锚点**：页面导航锚点
8. **QRCode 二维码**：二维码生成组件
9. **FloatButton 悬浮按钮**：页面悬浮操作按钮
10. **BackTop 回到顶部**：快速返回顶部

---

## [0.3.0] - 2026-06-10

### ✨ 新组件（15 个）

包括 Form、Menu、Table、Dropdown、Segmented、Popconfirm、List、Timeline、Slider、Rate、Skeleton、Result、Steps、Descriptions、Collapse 等。

---

## [0.2.0] - 2026-06-01

### ✨ 新组件（20 个）

包括 Modal、Drawer、Alert、Tooltip、Popover、Select、Notification、Message、Tabs、Pagination、Breadcrumb、Progress、Spin、Switch、Radio、Checkbox 等。

---

## [0.1.0] - 2026-05-20

### 🎉 首次发布

- **基础组件**（18 个）：Button、Input、Space、Divider、Grid、Typography、Layout、Avatar、Badge、Tag、Empty、Card、Image、Watermark、Flex、AutoComplete、Cascader、Statistic
- **设计系统**：基于 CSS Variables 的主题系统，支持 ConfigProvider 动态配置
- **国际化**：内置中英文语言包
- **图标系统**：681 个高质量图标
