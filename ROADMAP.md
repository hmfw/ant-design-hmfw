# ant-design-hmfw 项目路线图

> **更新日期**: 2026/06/07  
> **项目状态**: 核心开发完成，进入完善和发布阶段

---

## 📊 项目现状总览

### ✅ 已完成的三个阶段

#### 第一阶段：核心实现 ✅ (100%)

**时间**: 2026/06 初期  
**成果**:

- ✅ **66 个组件**全部实现（80+ 导出，含子组件）
- ✅ **655 个测试用例**，全部通过
- ✅ **TypeScript + TSX** 完整类型定义
- ✅ **文档站点**完整搭建（Vite + Vue Router）
- ✅ **主题系统**完整实现（CSS Variables + Design Tokens）
- ✅ **国际化**支持（中英文语言包）

**详见**: `IMPLEMENTATION_PLAN.md`

---

#### 第二阶段：系统性对比与修复 ✅ (100%)

**时间**: 2026/06/06-07  
**方法**: 逐组件对比 ant-design-hmfw vs React Ant Design v6  
**成果**:

- ✅ **59 个唯一组件**系统性对比完成
- ✅ **修复 266 个真实 bug**（涵盖 API、样式、行为、类型）
- ✅ **1540 个测试通过** (+ 2 skipped)
- ✅ **7 个分类全部完成**：
  1. 基础/布局 (12 个组件) ✅
  2. 数据展示类 (10 个组件) ✅
  3. 容器/导航 (11 个组件) ✅
  4. 表单控件 (16 个组件) ✅
  5. 浮层/反馈 (9 个组件) ✅
  6. 数据/复杂 (5 个组件) ✅
  7. 反馈类 (7 个组件) ✅

**详见**: `COMPARISON.md` + `COMPARISON/` 目录

---

#### 第三阶段：增强与优化 ✅ (100%)

**时间**: 2026/06/06-07  
**方式**: 4 轮迭代式增强  
**成果**:

**Round 1** - 数据录入组件深度优化

- Form: `preserve`、批量查询 API、表单联动
- Input: `classNames/styles` 细粒度控制、`showCount`
- DatePicker: `cellRender` 自定义单元格
- Select: 验证现有功能完整性

**Round 2** - 虚拟滚动基础设施

- ✅ **VirtualList 通用组件**（10,000+ 数据流畅滚动）
- ✅ Select 集成虚拟滚动
- ✅ List 响应式 grid 配置

**Round 3** - 反馈和导航组件

- Modal: `classNames/styles`、`modalRender`、自定义 icon
- Message: `top/bottom` 配置、`prefixCls`、`config()` 方法
- Notification: `showProgress`、`closeIcon`、RTL 模式
- Menu: `triggerSubMenuAction`、`itemIcon`、缩进优化
- Tabs: `renderTabBar`、`popupClassName`、动画、`centered`
- Pagination: `showTitle`、`itemRender`

**Round 4** - 布局和数据展示组件

- Breadcrumb: `itemRender`、路由集成、下拉菜单
- Layout: Sider 响应式断点、zero-width 触发器
- Grid: `wrap` 属性、响应式 gutter
- Space: `split` 分隔符
- Drawer: `rootClassName/rootStyle`、DrawerManager
- Popconfirm: `showCancel`、按钮属性透传
- Tooltip: `arrow.pointAtCenter`、`fresh`、ResizeObserver
- Card: 骨架屏优化、tabList 功能
- Descriptions: 样式控制、响应式修复
- Timeline: label 左右布局
- Statistic: loading 状态、Countdown 倒计时

**详见**: `ROUND1_SUMMARY.md` ~ `ROUND4_SUMMARY.md` + `TODO.md`

---

## 📈 项目数据

| 指标           | 数值     | 说明                 |
| -------------- | -------- | -------------------- |
| **组件数**     | 66 个    | 含子组件共 80+ 导出  |
| **测试文件**   | 67 个    | 覆盖所有组件         |
| **测试用例**   | 1650 个  | 全部通过 (2 skipped) |
| **Bug 修复**   | 266 个   | 系统性对比阶段       |
| **功能增强**   | ~94 个   | 4 轮优化阶段         |
| **代码行数**   | ~50,000+ | 含组件、测试、文档   |
| **文档演示**   | 200+ 个  | 每个组件多个 demo    |
| **TypeScript** | 100%     | 完整类型覆盖         |

---

## 🎯 后续计划（按优先级）

### 阶段 4：构建与发布准备 🔴 高优先级

#### 4.1 构建配置优化 ✅ (已完成)

**目标**: 生产级构建产物  
**完成日期**: 2026/06/07

- [x] **Tree Shaking 验证**
  - ✅ 测试按需引入是否生效
  - ✅ 分析 bundle 体积 (ESM: 789KB → 160KB Gzip)
  - ✅ 优化导出策略 (241 个导出)
  - ✅ 创建分析工具 (`pnpm analyze:treeshaking`)

- [x] **多格式输出**
  - ✅ ESM (import) - `dist/index.js`
  - ✅ CJS (require) - `dist/index.cjs`
  - ✅ UMD (script tag) - `dist/ant-design-hmfw.umd.js`
  - ✅ 类型声明文件 (.d.ts, .d.cts)
  - ✅ Source Maps 全格式支持

- [x] **样式构建优化**
  - ✅ 样式文件优化 (2.59KB → 0.54KB Gzip)
  - ✅ CSS 添加版本和许可 banner
  - ✅ 支持按需引入样式
  - ✅ CSS Variables 已内置主题系统

**详见**: `BUILD_OPTIMIZATION.md`

#### 4.2 NPM 包发布

**目标**: 发布到 npm registry

- [x] **package.json 完善** ✅ (已完成 - 2026/06/07)
  - ✅ 正确的 main/module/types 字段
  - ✅ peerDependencies 配置
  - ✅ files 白名单
  - ✅ author、bugs、keywords 等字段
  - ✅ LICENSE 文件创建
  - ✅ CHANGELOG.md 创建
  - ✅ .npmignore 配置
  - ✅ prepublish-check 脚本

- [x] **README 和文档** ✅ (已完成 - 2026/06/07)
  - ✅ 完善 README.md（安装、快速开始、示例）
  - ✅ CHANGELOG.md 维护规范（已创建）
  - ✅ LICENSE 文件（已创建）
  - ✅ 373 行完整文档，33 个章节
  - ✅ 5 个代码示例，8 个徽章

- [ ] **发布流程**
  - 版本号管理策略（semantic versioning）
  - ✅ npm publish 脚本（已配置）
  - ✅ 发布前检查清单（已创建）
  - 本地测试安装验证
  - 预计时间: 0.5 天

#### 4.3 CI/CD 配置

**目标**: 自动化测试和部署

- [ ] **GitHub Actions / GitLab CI**
  - 自动运行测试
  - 自动构建
  - 自动发布文档站
  - 自动 npm 发布（tag 触发）
  - 预计时间: 2-3 天

- [ ] **代码质量检查**
  - ESLint 配置和集成
  - Prettier 格式化
  - Husky + lint-staged（commit hooks）
  - 预计时间: 1 天

---

### 阶段 5：质量提升 🟡 中优先级

#### 5.1 性能优化

**目标**: 提升运行时性能

- [ ] **打包体积优化**
  - 分析依赖体积
  - 移除未使用的依赖
  - 考虑 external 配置
  - 目标: 核心包 < 500KB
  - 预计时间: 2 天

- [ ] **运行时性能**
  - 虚拟滚动应用到更多组件
  - 大数据渲染优化
  - 事件处理优化
  - 预计时间: 3-5 天

- [ ] **SSR 支持**
  - Nuxt.js 集成测试
  - SSR 兼容性修复
  - 预计时间: 3-5 天

#### 5.2 测试覆盖增强

**目标**: 提高测试质量和覆盖率

- [ ] **E2E 测试扩展**
  - Playwright 测试套件
  - 关键交互流程覆盖
  - 视觉回归测试
  - 预计时间: 5-7 天

- [ ] **测试覆盖率报告**
  - 配置 coverage 报告
  - 目标覆盖率: 80%+
  - 预计时间: 1 天

- [ ] **性能基准测试**
  - 组件渲染性能测试
  - 虚拟滚动性能对比
  - 预计时间: 2-3 天

#### 5.3 无障碍性（Accessibility）

**目标**: WCAG 2.1 AA 级别合规

- [ ] **ARIA 属性完善**
  - 所有交互组件添加 ARIA
  - 键盘导航支持
  - 屏幕阅读器测试
  - 预计时间: 5-7 天

- [ ] **对比度和焦点可见性**
  - 颜色对比度检查
  - 焦点指示器优化
  - 预计时间: 2-3 天

- [ ] **无障碍性文档**
  - 每个组件的 a11y 说明
  - 最佳实践指南
  - 预计时间: 2-3 天

---

### 阶段 6：生态完善 🟢 低优先级

#### 6.1 开发工具

**目标**: 提升开发者体验

- [ ] **VS Code 扩展**
  - 代码片段（snippets）
  - 组件智能提示
  - 预计时间: 3-5 天

- [ ] **CLI 工具**
  - 项目初始化脚手架
  - 组件生成器
  - 主题定制工具
  - 预计时间: 5-7 天

- [ ] **Playground 在线演示**
  - CodeSandbox 模板
  - StackBlitz 模板
  - 预计时间: 1-2 天

#### 6.2 文档站增强

**目标**: 更好的文档体验

- [ ] **搜索功能**
  - 全文搜索
  - API 搜索
  - 预计时间: 2-3 天

- [ ] **主题切换**
  - 亮色/暗色模式
  - 实时预览主题定制
  - 预计时间: 2-3 天

- [ ] **国际化文档**
  - 英文文档完善
  - 多语言支持
  - 预计时间: 5-7 天

- [ ] **最佳实践**
  - 设计模式指南
  - 性能优化指南
  - 常见问题 FAQ
  - 预计时间: 3-5 天

#### 6.3 社区建设

**目标**: 建立开发者社区

- [ ] **贡献指南**
  - CONTRIBUTING.md
  - 代码规范文档
  - PR 模板
  - Issue 模板
  - 预计时间: 1-2 天

- [ ] **示例项目**
  - Admin Dashboard 示例
  - 电商网站示例
  - 博客系统示例
  - 预计时间: 10-15 天

- [ ] **博客和教程**
  - 组件库开发系列文章
  - 最佳实践分享
  - 预计时间: 持续进行

---

### 阶段 7：高级特性 🔵 长期规划

#### 7.1 Design Token 2.0

**目标**: 更灵活的主题系统

- [ ] **多主题支持**
  - 预设主题包（科技蓝、商务灰等）
  - 主题市场
  - 预计时间: 5-7 天

- [ ] **主题编辑器**
  - 可视化主题定制工具
  - 实时预览
  - 导出主题配置
  - 预计时间: 7-10 天

#### 7.2 高级组件

**目标**: 更多业务场景组件

- [ ] **ProComponents**
  - ProTable（高级表格）
  - ProForm（高级表单）
  - ProLayout（高级布局）
  - 预计时间: 15-20 天

- [ ] **Chart 图表集成**
  - 与 ECharts/Chart.js 集成
  - 图表组件封装
  - 预计时间: 10-15 天

#### 7.3 移动端支持

**目标**: 移动端组件库

- [ ] **ant-design-hmfw-mobile**
  - 移动端专用组件
  - 触摸手势支持
  - 预计时间: 30-45 天（独立项目）

---

## 🚀 快速开始后续工作

### 推荐优先级路线

#### 路线 A：快速发布（2-3 周）

适合希望尽快发布到 npm 的情况

1. ✅ 核心功能已完成
2. 构建配置优化 (2 天)
3. NPM 包发布准备 (2 天)
4. CI/CD 配置 (3 天)
5. README 和文档完善 (2 天)
6. 发布 v1.0.0-beta (1 天)
7. 收集反馈并修复 (1 周)
8. 发布 v1.0.0 正式版

#### 路线 B：质量优先（1-2 个月）

适合追求高质量产品的情况

1. ✅ 核心功能已完成
2. 构建配置优化 (2 天)
3. 性能优化 (1 周)
4. E2E 测试扩展 (1 周)
5. 无障碍性完善 (1 周)
6. 文档站增强 (1 周)
7. NPM 包发布准备 (2 天)
8. CI/CD 配置 (3 天)
9. Beta 测试 (1 周)
10. 发布 v1.0.0 正式版

#### 路线 C：生态构建（3-6 个月）

适合长期运营的情况

1. 完成路线 B
2. CLI 工具开发 (1 周)
3. VS Code 扩展 (1 周)
4. 示例项目开发 (2-3 周)
5. ProComponents 开发 (3-4 周)
6. 主题编辑器 (2 周)
7. 社区建设和推广 (持续)

---

## 📋 当前待办事项（立即可开始）

根据你的时间和目标，选择以下任务之一开始：

### 选项 1：立即准备发布 🔴

```bash
# 1. 完善 package.json
# 2. 验证构建产物
pnpm build:lib
# 3. 本地测试包安装
npm pack
npm install ./ant-design-hmfw-*.tgz
# 4. 准备 README 和 CHANGELOG
# 5. 发布到 npm（建议先发 beta 版）
npm publish --tag beta
```

### 选项 2：性能优化 🟡

```bash
# 1. 分析打包体积
pnpm build:lib --metafile
# 2. 运行性能基准测试
# 3. 优化大数据场景组件
# 4. 应用 VirtualList 到更多组件
```

### 选项 3：完善 CI/CD 🟡

```bash
# 1. 创建 .github/workflows/ci.yml
# 2. 配置自动测试
# 3. 配置自动部署文档站
# 4. 配置代码质量检查
```

### 选项 4：增强文档 🟢

```bash
# 1. 完善每个组件的文档说明
# 2. 添加更多实用示例
# 3. 编写最佳实践指南
# 4. 添加搜索功能
```

---

## 📊 里程碑规划

### v1.0.0-beta.1（建议 2 周内）

- [x] 66 个组件实现 ✅
- [x] 基础测试覆盖 ✅
- [x] 文档站搭建 ✅
- [ ] 构建配置优化
- [ ] NPM 包发布

### v1.0.0（建议 1-2 月内）

- [ ] 性能优化完成
- [ ] E2E 测试覆盖
- [ ] CI/CD 配置完成
- [ ] 文档完善
- [ ] Beta 用户反馈修复

### v1.1.0（3-4 月）

- [ ] 无障碍性达标
- [ ] SSR 支持
- [ ] CLI 工具
- [ ] VS Code 扩展

### v2.0.0（6 月+）

- [ ] ProComponents
- [ ] 主题编辑器
- [ ] 移动端版本规划

---

## 🤝 如何选择下一步

根据你的目标回答以下问题：

1. **主要目标是什么？**
   - 快速发布到 npm → 选择路线 A
   - 打造高质量产品 → 选择路线 B
   - 长期生态建设 → 选择路线 C

2. **时间预算是多少？**
   - 2-3 周 → 专注构建和发布
   - 1-2 月 → 加入质量提升
   - 3-6 月 → 完整生态构建

3. **团队规模？**
   - 独立开发 → 专注核心功能
   - 小团队 → 可并行多个方向
   - 多人团队 → 全面推进

---

## 📚 相关文档

- [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) - 第一阶段实现计划
- [COMPARISON.md](./COMPARISON.md) - 第二阶段对比记录
- [TODO.md](./TODO.md) - 第三阶段任务清单
- [ROUND1_SUMMARY.md](./ROUND1_SUMMARY.md) - 第一轮总结
- [ROUND2_SUMMARY.md](./ROUND2_SUMMARY.md) - 第二轮总结
- [ROUND3_SUMMARY.md](./ROUND3_SUMMARY.md) - 第三轮总结
- [ROUND4_SUMMARY.md](./ROUND4_SUMMARY.md) - 第四轮总结
- [TESTING.md](./TESTING.md) - E2E 测试指南
- [README.md](./README.md) - 项目说明

---

**最后更新**: 2026/06/07  
**当前阶段**: 第三阶段已完成，等待开始第四阶段（构建与发布）
