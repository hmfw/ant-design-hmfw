# ant-design-hmfw 项目路线图

> **更新日期**: 2026/06/14  
> **项目状态**: 核心开发完成，E2E P0 弹层/表单/导航 + P1 数据展示/反馈消息组件测试全覆盖，进入完善和发布阶段

---

## 📊 项目现状

### 已完成阶段

| 阶段                    | 成果                                                                 | 详见                     |
| ----------------------- | -------------------------------------------------------------------- | ------------------------ |
| **第一阶段** — 核心实现 | 66 组件、655 测试、TS 全覆盖、文档站、主题系统、i18n                 | `IMPLEMENTATION_PLAN.md` |
| **第二阶段** — 对比修复 | 59 组件对比、266 bug 修复、1540 测试                                 | `COMPARISON.md`          |
| **第三阶段** — 增强优化 | 4 轮迭代、~94 项增强（虚拟滚动、布局微调、API 补全）、E2E 弹层全覆盖 | `ROUND1~4_SUMMARY.md`    |

### 项目数据

| 指标       | 数值               | 指标       | 数值                |
| ---------- | ------------------ | ---------- | ------------------- |
| 组件数     | 66（80+ 导出）     | Bug 修复   | 266                 |
| 测试用例   | 2035（含 145 E2E） | 功能增强   | ~94                 |
| TypeScript | 100%               | ESLint     | 0/0                 |
| 文档演示   | 200+               | 代码格式化 | Prettier + Husky ✅ |

---

## 🎯 后续计划

### 阶段 4：构建与发布准备 🔴

#### 4.1 构建配置 ✅

- [x] Tree Shaking + 多格式输出（ESM/CJS/UMD）+ Source Maps
- [x] 样式优化（2.59KB → 0.54KB Gzip）
- [x] 构建分析工具（`pnpm analyze:treeshaking`）
- **详见**: `BUILD_OPTIMIZATION.md`

#### 4.2 NPM 包发布

- [x] package.json / README / CHANGELOG / LICENSE ✅
- [x] npm publish 脚本 + 发布前检查清单 ✅
- [ ] 本地 `npm pack` 安装验证
- [ ] 发布 v1.0.0-beta
- 预计时间: 0.5 天

#### 4.3 CI/CD

- [x] ESLint + Prettier + Husky ✅
- [ ] GitHub Actions：自动测试、构建、文档站部署、npm 发布
- 预计时间: 2-3 天

---

### 阶段 5：质量提升 🟡

#### 5.1 性能优化

- [x] **打包体积分析优化** ✅ — 改 transpile-only 产物（对齐 antd es/ 结构：每组件独立目录、相对引用、无 chunk/hash），tree-shaking 单组件 378→8.5KB（削减 97.9%）；补全产物扩展名兼容 Node 原生 ESM；ESM/CJS 去 sourcemap（仅留 UMD），npm 包大幅瘦身；UMD/CDN 572→385KB gzip；`pnpm size` 体积护栏接入 CI 防回归
- [ ] 虚拟滚动扩展到更多组件
- [ ] SSR 兼容（Nuxt 集成测试）
- 预计时间: 5-8 天

#### 5.2 E2E 测试

- [x] **基础设施** ✅ — Playwright Test v1.60、根目录配置、145 测试 35 组件
- [x] **P0 弹层定位** ✅ — DatePicker、RangePicker、Select、Drawer、Dropdown、Popover、Popconfirm、Tooltip、Modal · 已完成
- [x] **P0 表单交互** ✅ — Form、Input、InputNumber、ColorPicker · 已完成（21 测试）
- [x] **P0 导航/键盘** ✅ — Cascader、Menu、Tabs、Pagination、Tree · 已完成（27 测试）
- [x] **P1 数据展示** ✅ — Table、Transfer、Upload、TreeSelect、TimePicker、Steps、Carousel、Collapse、Rate、Slider · 已完成（35 测试）
- [x] **P1 反馈/消息** ✅ — Notification、Message、Tour、Segmented、Switch、Radio、Checkbox · 已完成（20 测试）
- [x] **视觉回归试点** ✅ — Tag、Alert、Button 静态 demo 截图对比（10 基线）· 独立配置 `playwright.visual.config.ts`，`pnpm visual` 比对、`pnpm visual:update` 更新基线。基线在 macOS 生成入库，CI(Linux) 渲染差异暂不强制运行
- [x] **测试覆盖率报告** ✅ — 语句 91.11% / 分支 82.49% / 函数 77.41% / 行 91.11%（阈值 80/65/65/80 全过）。`pnpm test:coverage` 输出 text-summary + html + lcov + json，CI 跑覆盖率门禁并上传报告

#### 5.3 无障碍性

- [ ] ARIA 属性完善 + 键盘导航 + 屏幕阅读器
- [ ] 颜色对比度 + 焦点指示器
- [ ] 无障碍文档
- 预计时间: 7-10 天

---

### 阶段 6：生态完善 🟢

#### 6.1 开发工具

- [ ] VS Code 扩展（snippets、智能提示） · 3-5 天
- [ ] CLI 工具（脚手架、组件生成器） · 5-7 天
- [ ] Playground 在线演示 · 1-2 天

#### 6.2 文档站增强

- [ ] 全文搜索 · 2-3 天
- [ ] 亮色/暗色主题切换 · 2-3 天
- [ ] 英文文档完善 · 5-7 天
- [ ] 最佳实践指南 + FAQ · 3-5 天

#### 6.3 社区建设

- [ ] CONTRIBUTING.md + PR/Issue 模板 · 1-2 天
- [ ] Admin Dashboard 等示例项目 · 10-15 天
- [ ] 技术博客和教程 · 持续

---

### 阶段 7：高级特性 🔵

- [ ] **主题系统升级** — 多主题预设包、可视化编辑器 · 12-17 天
- [ ] **ProComponents** — ProTable、ProForm、ProLayout · 15-20 天
- [ ] **图表集成** — ECharts/Chart.js 封装 · 10-15 天
- [ ] **移动端** — ant-design-hmfw-mobile（独立项目） · 30-45 天

---

## 📊 里程碑

| 版本              | 目标                              | 预计   |
| ----------------- | --------------------------------- | ------ |
| **v1.0.0-beta.1** | npm 发布 + CI/CD                  | 2 周内 |
| **v1.0.0**        | 性能优化 + E2E P0 覆盖 + 文档完善 | 1-2 月 |
| **v1.1.0**        | 无障碍性 + SSR + CLI 工具         | 3-4 月 |
| **v2.0.0**        | ProComponents + 主题编辑器        | 6 月+  |

---

## 📚 相关文档

- [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) · [COMPARISON.md](./COMPARISON.md) · [TODO.md](./TODO.md)
- [ROUND1_SUMMARY.md](./ROUND1_SUMMARY.md) · [ROUND2_SUMMARY.md](./ROUND2_SUMMARY.md) · [ROUND3_SUMMARY.md](./ROUND3_SUMMARY.md) · [ROUND4_SUMMARY.md](./ROUND4_SUMMARY.md)
- [TESTING.md](./TESTING.md) · [BUILD_OPTIMIZATION.md](./BUILD_OPTIMIZATION.md) · [README.md](./README.md)
