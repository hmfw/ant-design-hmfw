# ant-design-hmfw 实现计划

基于 Ant Design v6，使用 Vue3 + TypeScript + TSX 实现的 UI 组件库

## 项目状态

- **开始日期**: 2026-05-24
- **当前进度**: 58 个组件已完成（含子组件共 70+ 个导出）
- **单元测试**: 55 个测试文件，538 个测试用例，全部通过
- **Playground**: 58 个独立 Tab，每个组件一个演示页，导航栏支持换行

---

## ✅ 已完成

### 基础架构
- [x] Monorepo 结构 (pnpm workspace)
- [x] TypeScript 配置
- [x] 构建工具 (tsup)
- [x] 测试框架 (vitest + @vue/test-utils)
- [x] 开发 Playground (Vite)

### 设计系统
- [x] Design Tokens 系统（Seed → Map → Alias 三层）
- [x] ConfigProvider 全局配置（主题 + 国际化）
- [x] 工具函数 (cls, usePrefixCls)
- [x] 修复 line-height CSS 变量 bug（inject.ts 无单位数值不加 px）

### 已完成组件（24 个，按实现顺序）

| 组件 | 说明 | 测试 | Playground |
|------|------|------|-----------|
| Icon | 图标组件（8 个内置图标） | ✓ | ✓ |
| Button | 按钮（type/size/loading/danger/block） | ✓ | ✓ |
| Space | 间距布局（方向/尺寸/对齐/分隔符） | ✓ | ✓ |
| Divider | 分割线（水平/垂直/文字方向） | ✓ | ✓ |
| Grid (Row/Col) | 24 列栅格系统（响应式断点/gutter） | ✓ | ✓ |
| Typography (Text/Title/Paragraph) | 排版组件 | ✓ | ✓ |
| Layout (Header/Footer/Sider/Content) | 页面布局（可折叠侧边栏/响应式断点） | ✓ | ✓ |
| Avatar / AvatarGroup | 头像（图片/图标/文字/尺寸/形状/组） | ✓ | ✓ |
| Badge | 徽标（数字/点状/状态/溢出） | ✓ | ✓ |
| Tag / CheckableTag | 标签（预设颜色/自定义颜色/可关闭/可选中） | ✓ | ✓ |
| Empty | 空状态（默认图/自定义图/描述/底部操作） | ✓ | ✓ |
| Card / CardMeta | 卡片（标题/extra/封面/操作栏/加载/小尺寸） | ✓ | ✓ |
| Input / InputPassword / TextArea / InputSearch | 输入框系列（前缀/后缀/清除/字数统计） | ✓ | ✓ |
| Checkbox / CheckboxGroup | 多选框（受控/非受控/indeterminate/group） | ✓ | ✓ |
| Radio / RadioGroup | 单选框（受控/非受控/group） | ✓ | ✓ |
| Switch | 开关（loading/size/checkedChildren） | ✓ | ✓ |
| Spin | 加载中（size/tip/嵌套内容遮罩） | ✓ | ✓ |
| Progress | 进度条（line/circle/dashboard/status/自定义颜色） | ✓ | ✓ |
| Breadcrumb | 面包屑（items/自定义 separator） | ✓ | ✓ |
| Pagination | 分页（受控/非受控/省略号/showTotal） | ✓ | ✓ |
| Tabs | 标签页（line/card/受控/非受控/disabled） | ✓ | ✓ |
| Modal | 对话框（Teleport/mask/footer/centered） | ✓ | ✓ |
| Drawer | 抽屉（四方向/Teleport/mask） | ✓ | ✓ |
| message | 全局提示（success/error/warning/info/loading） | ✓ | ✓ |
| Tooltip | 文字提示（12方向/trigger/color/受控） | ✓ | ✓ |
| Alert | 警告提示（4类型/showIcon/closable/banner/描述） | ✓ | ✓ |
| notification | 通知提醒框（4类型/4位置/命令式API） | ✓ | ✓ |
| Select | 选择器（单选/多选/搜索/allowClear/尺寸/状态） | ✓ | ✓ |
| Popover | 气泡卡片（title+content/12方向/trigger/受控） | ✓ | ✓ |
| InputNumber | 数字输入框（min/max/step/precision/addon/prefix） | ✓ | ✓ |
| Collapse / CollapsePanel | 折叠面板（accordion/bordered/ghost/size/icon位置） | ✓ | ✓ |
| Descriptions | 描述列表（title/extra/bordered/column/size/layout） | ✓ | ✓ |
| Steps | 步骤条（current/direction/size/status/progressDot） | ✓ | ✓ |
| Result | 结果页（success/error/warning/info/404/403/500） | ✓ | ✓ |
| Skeleton / SkeletonButton / SkeletonInput | 骨架屏（active/avatar/paragraph/title/round） | ✓ | ✓ |
| Rate | 评分（count/allowHalf/allowClear/disabled/character/tooltips） | ✓ | ✓ |
| Slider | 滑动输入条（range/marks/step/vertical/tooltip） | ✓ | ✓ |
| Timeline | 时间轴（color/pending/reverse/mode/label） | ✓ | ✓ |
| List / ListItem / ListItemMeta | 列表（bordered/size/split/loading/pagination） | ✓ | ✓ |
| Dropdown | 下拉菜单（hover/click/placement/overlay/disabled） | ✓ | ✓ |
| Popconfirm | 气泡确认框（title/description/okText/cancelText/placement） | ✓ | ✓ |
| Segmented | 分段控制器（options/disabled/block/size/icon） | ✓ | ✓ |
| Table | 表格（排序/筛选/分页/行选择/自定义渲染） | ✓ | ✓ |
| Menu | 导航菜单（horizontal/vertical/inline/dark/collapsed） | ✓ | ✓ |
| Form / FormItem | 表单容器（校验/布局/validateStatus/help） | ✓ | ✓ |
| Watermark | 水印（content/font/rotate/gap） | ✓ | ✓ |
| BackTop | 回到顶部（visibilityHeight/target/duration） | ✓ | ✓ |
| FloatButton / FloatButtonGroup | 悬浮按钮（type/shape/badge/href/trigger） | ✓ | ✓ |
| QRCode | 二维码（纯 Canvas 实现，状态/颜色/纠错级别） | ✓ | ✓ |
| Anchor | 锚点（垂直/水平/嵌套/ink bar） | ✓ | ✓ |
| Tree | 树形控件（展开/选择/多选/勾选/显示线/fieldNames） | ✓ | ✓ |
| TimePicker | 时间选择框（时分秒/步进/受控/状态/格式） | ✓ | ✓ |
| DatePicker | 日期选择框（date/month/year/quarter/禁用日期/showTime） | ✓ | ✓ |
| Upload | 上传（text/picture/picture-card/picture-circle/拖拽/customRequest） | ✓ | ✓ |
| Flex | 弹性布局（justify/align/gap/wrap/vertical/自定义标签） | ✓ | ✓ |
| AutoComplete | 自动完成（filterOption/backfill/受控/键盘导航） | ✓ | ✓ |
| Cascader | 级联选择（多列/hover展开/搜索/changeOnSelect/fieldNames） | ✓ | ✓ |

---

## 📋 待实现

### 已有目录但未实现（0 个）

（全部完成）

### Ant Design 有但未开始的组件（8 个）

| 组件 | 复杂度 | 说明 |
|------|--------|------|
| ColorPicker | 中 | 颜色选择器（色板 + 自定义输入） |
| Image | 中 | 图片预览（懒加载/fallback/预览组） |
| Carousel | 中 | 走马灯/轮播 |
| Transfer | 高 | 穿梭框（双列表互选） |
| TreeSelect | 高 | 树形下拉选择（Tree + Select 结合） |
| Tour | 中 | 漫游引导 |
| App | 低 | 全局上下文（message/notification 的静态调用） |
| RangePicker | 高 | 日期范围选择（DatePicker 的双值变体） |

---

## 🚀 发布准备

### 文档系统
- [x] 搭建 VitePress 文档站（packages/docs）
- [x] 首页（hero + features）
- [x] 快速上手指南
- [x] 主题定制文档
- [x] 国际化文档
- [x] 全部 58 个组件文档（含代码演示 + API 表格）

### 构建和发布
- [ ] 配置 npm 发布流程（package.json publishConfig）
- [ ] 设置 CI/CD (GitHub Actions) — 自动测试 + 发布
- [ ] 版本管理策略
- [ ] Changelog 生成

### E2E 测试
- [ ] Playwright 覆盖核心交互流程（DatePicker/TimePicker/Upload/Tree 等）

---

## 💡 需要考虑的特性

### 核心功能
- [ ] 国际化 (i18n) - 多语言支持（基础框架已有 zh-CN/en-US）
- [ ] 主题定制 - CSS Variables + 动态主题切换
- [ ] 无障碍 (a11y) - ARIA 属性、键盘导航
- [ ] Tree Shaking - 按需加载支持
- [ ] SSR 支持 - Nuxt.js 兼容性

### 质量保证
- [ ] 单元测试覆盖率 >80%
- [ ] E2E 测试 (Playwright)
- [ ] 性能优化
- [ ] 浏览器兼容性测试

---

## 📊 组件开发标准

每个组件必须满足：

1. **功能完整** - 实现核心功能，支持常用 props/events，提供合理默认值
2. **类型安全** - 完整 TypeScript 类型定义，Props/事件类型检查
3. **测试覆盖** - 单元测试覆盖核心功能，Playwright E2E 验证
4. **样式规范** - 遵循 Ant Design 设计规范，支持主题定制
5. **Playground 演示** - 每个组件独立 Tab，展示主要用法

---

## 🔄 开发流程

### 单个组件开发流程
1. 创建组件目录结构（`ComponentName.tsx` / `types.ts` / `index.ts` / `style/index.css` / `__tests__/`）
2. 实现组件逻辑 (TSX)
3. 编写样式文件 (CSS)
4. 编写单元测试
5. 更新 `src/index.ts` 导出
6. 更新 `src/style.css` 导入
7. 构建并运行测试（`pnpm build` + `pnpm test`）
8. 创建 Playground 演示文件（`packages/playground/src/demos/XxxDemo.tsx`）
9. 更新 `packages/playground/src/App.tsx` 添加 Tab
10. Playwright 验证
11. 更新本计划状态

---

## 📝 更新日志

### 2026-05-24
- ✅ 初始化项目结构（Monorepo + tsup + vitest + Vite playground）
- ✅ 实现 Icon、Button、Space、Divider 组件
- ✅ 实现 Grid (Row/Col) 组件
- ✅ 重构 Playground 为 Tab 导航 + 独立演示文件结构
- ✅ 实现 Typography (Text/Title/Paragraph) 组件
- ✅ 修复 line-height CSS 变量 bug
- ✅ 实现 Layout (Header/Footer/Sider/Content) 组件
- ✅ 实现 Avatar/AvatarGroup、Badge、Tag/CheckableTag 组件
- ✅ 实现 Empty、Card/CardMeta、Input 系列组件
- ✅ 实现 Checkbox/RadioGroup、Radio/RadioGroup、Switch 组件
- ✅ 实现 Spin、Progress 组件
- ✅ 实现 Breadcrumb、Pagination、Tabs 组件
- ✅ 实现 Modal、Drawer、message 组件
- ✅ Playground 改为每个组件独立 Tab，导航栏支持换行
- ✅ 实现 Tooltip、Alert、notification、Select 组件（共 4 个）
- ✅ 实现 Popover、InputNumber、Collapse、Descriptions、Steps、Result、Skeleton 组件（共 7 个）
- ✅ 实现 Rate、Slider、Timeline、List、Dropdown、Popconfirm、Segmented 组件（共 7 个）
- ✅ 实现 Table、Menu、Form/FormItem、Watermark、BackTop、FloatButton 组件（共 6 个）
- ✅ 实现 QRCode、Anchor、Tree、TimePicker、DatePicker、Upload 组件（共 6 个，所有待实现组件全部完成）
- ✅ 实现 Flex、AutoComplete、Cascader 组件（共 3 个，补全已有目录的空实现）

---

## 🎯 里程碑

- **v0.1.0** (目标: 2026-06)
  - 完成 30+ 核心组件
  - 搭建文档站
  - 首次 npm 发布

- **v0.2.0** (目标: 2026-07)
  - 完成 Table、Form、Select 等复杂组件
  - 国际化支持完善
  - 主题定制功能

- **v1.0.0** (目标: 2026-09)
  - 完成所有核心组件（50+）
  - 完整文档
  - 生产就绪
