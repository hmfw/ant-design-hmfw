# 组件对比结果（ant-design-hmfw vs ant-design v6）

逐个组件从简单到复杂对比。每个组件记录：差异、未实现项、问题、优化点，以及处理结果。

---

## 📋 进度与路线图（恢复工作的入口）

**对比基准**：`/Users/hmfw/Downloads/ant-design-master`（React ant-design v6 源码）
**流程**（每次一个组件）：对比 API+行为+样式 → 记录差异 → 修复 → 更新测试+文档 → 验证（`npx vitest run components/<name>` + `pnpm typecheck`）→ 记入本文件 → 下一个。

### ✅ 已完成（47 个，全量 1228 测试通过，修复 105 个真实 bug）
**基础/布局**: Divider · Flex · Space(修2bug) · Typography · Tag · Badge(修1) · Alert(修1行为) · Avatar · Empty · Card · Result · Spin(修 delay 失效 bug)

**A 展示类**: Skeleton(修5bug) · Progress · Timeline(修2bug) · Segmented(修3bug) · Rate · QRCode(修5bug) · Watermark(修3bug) · BackTop(修5bug) · FloatButton(修2bug) · Descriptions(修1bug)

**B 容器/导航**: List(修5bug) · Collapse(修4bug) · Steps · Anchor · Breadcrumb(修1bug) · Pagination(修7bug) · Grid(修5bug) · Layout(修5bug) · Tabs(修4bug) · Menu(修4bug) · Dropdown(修4bug)

**C 表单控件**: Button(修3bug) · Checkbox(修3bug) · Radio(修2bug) · Switch(修1bug)

**C 表单控件(补齐)**: Input(修12bug) · InputNumber(修1bug) · Slider(修1bug) · Select(修1bug) · Cascader(修4bug) · TreeSelect(修4bug) · AutoComplete(修1bug) · DatePicker(修1bug) · TimePicker(修4bug) · RangePicker(修3bug)

### ⏭️ 待办路线图（简单→复杂，按序进行）
- **C 表单控件(剩余)**：upload、form
- **D 浮层/反馈**：tooltip、popover、popconfirm、modal、drawer、message、notification、tour、image
- **E 数据/复杂**：table、tree、transfer、carousel、color-picker

**下一个执行**：D 浮层/反馈类（tooltip 起）。恢复时对我说「继续」即可。

---

## 1. Divider 分割线 ✅ 已完成

**对比基准**: `ant-design-master/components/divider/index.tsx`

### 发现的差异
| 项 | AntD v6 | hmfw（修改前） | 处理 |
| --- | --- | --- | --- |
| `variant` (`solid`/`dashed`/`dotted`) | ✅ 5.20.0+ | ❌ 仅 `dashed` 布尔 | ✅ 新增 `variant`，`dashed` 作为简写保留 |
| `size` (`small`/`middle`/`large`) 间距 | ✅ | ❌ | ✅ 新增 `size`，对应 `-sm`/`-md` class |
| `dotted` 点线样式 | ✅ | ❌ | ✅ CSS 新增 dotted（含水平/带文字/垂直） |
| `titlePlacement` + `start`/`end` 语义 | ✅ 5.24.0+（RTL） | ❌ 用 `orientation` left/right | ⏭️ 未移植：本库无 RTL 体系，保留 left/right |
| 语义化 `classNames`/`styles` | ✅ | ❌ | ⏭️ 全库统一缺失，后续统一处理 |

### 改动文件
- `components/divider/types.ts` — 新增 `DividerVariant`、`DividerSize` 类型与 props
- `components/divider/Divider.tsx` — `variant`（优先于 `dashed`）+ `size` class 逻辑
- `components/divider/style/index.css` — dotted 样式 + sm/md 间距
- `components/divider/index.ts` — 导出新类型
- `components/divider/__tests__/Divider.test.tsx` — +7 用例（19 通过）
- `docs/demos/divider/DividerVariant.vue`、`DividerSize.vue` — 新增 demo
- `docs/demos/divider/divider.md` — 新增演示 + 补全 API 表（`orientationMargin`/`variant`/`size`）

### 验证
- `vitest run components/divider`：19 通过
- `pnpm typecheck`：通过
- 全量测试：723 通过

---

## 2. Flex 弹性布局 ✅ 已完成

**对比基准**: `ant-design-master/components/flex/{index.tsx,interface.ts,utils.ts}`

### 发现的差异
| 项 | AntD v6 | hmfw（修改前） | 处理 |
| --- | --- | --- | --- |
| `justify`/`align` 取值范围 | 全集（`start`/`end`/`left`/`right`/`self-start` 等） | 窄子集 | ✅ 类型拓宽至全集（inline style 直接透传） |
| 死代码 `-rtl: false` class | — | 恒为 false 的无效 class | ✅ 移除 |
| 实现方式：class（`-justify-*`/`-align-*`/`-gap-*`）vs inline style | class | inline style | ⏭️ 功能等价，保留 inline 方式 |
| `orientation` 别名（同 Divider） | ✅ | ❌ | ⏭️ 无 RTL 体系，跳过 |
| `gap` 预设 token 化 | token | 硬编码 8/16/24 | ⏭️ 数值一致，可接受 |

### 改动文件
- `components/flex/types.ts` — `FlexJustify`/`FlexAlign` 拓宽取值
- `components/flex/Flex.tsx` — 移除死代码 `-rtl` class
- `components/flex/__tests__/Flex.test.tsx` — +2 用例（15 通过）
- `docs/demos/flex/flex.md` — API 表更新取值范围

### 验证
- `vitest run components/flex`：15 通过
- `pnpm typecheck`：通过

---

## 3. Space 间距 ✅ 已完成（含 Bug 修复）

**对比基准**: `ant-design-master/components/space/{index.tsx,Item.tsx}`

### 发现的问题（重点）
| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| `Comment` 未导入 | 🐛 Bug | `Space.tsx` 引用 `Comment` 但未从 `vue` 导入，解析到全局 DOM `Comment`，注释 VNode 不会被过滤 | ✅ 正确导入并过滤 |
| 无 Fragment 展平 | 🐛 Bug | `v-for` 产生单个 Fragment，整组渲染成「一个」Space item，间距/分隔符全错 | ✅ 新增 `flattenChildren` 递归展平（对齐 AntD `toArray`） |
| margin 间距不支持换行行距 | ⚠️ 问题 | 用 per-item `margin-right/bottom`，`wrap` 后无行间距 | ✅ 改为容器 `column-gap`/`row-gap`（对齐 AntD v6） |
| `separator` 别名缺失 | 差异 | AntD v6 用 `separator`，`split` 已废弃 | ✅ 新增 `separator`，`split` 保留为别名 |
| `vertical` 简写缺失 | 差异 | AntD v6 支持 `vertical` 布尔 | ✅ 新增 |
| `split` 类型为 `any` | 优化 | 类型不安全 | ✅ 改为 `VNode \| string` |
| 语义化 classNames/styles | 差异 | — | ⏭️ 全库统一缺失，后续处理 |
| `Space.Compact` 紧凑模式 | 未实现 | AntD 有 Compact 子组件 | ⏭️ 记入待办（独立子组件，量较大） |

### 改动文件
- `components/space/Space.tsx` — 重写：Fragment 展平+注释过滤、gap 间距、separator/vertical
- `components/space/types.ts` — `vertical`/`separator` + `split` 类型收窄
- `components/space/style/index.css` — split 垂直居中
- `components/space/__tests__/Space.test.tsx` — gap 断言 + 4 新用例（15 通过）
- `docs/demos/space/space.md` — separator/vertical/wrap 文档 + API
- `docs/demos/space/SpaceWrap.vue` — 新增换行 demo

### 验证
- `vitest run components/space`：15 通过
- `pnpm typecheck`：通过

### 遗留待办
- `Space.Compact` 紧凑布局子组件未实现

---

## 4. Typography 排版 ✅ 已完成（补齐核心能力）

**对比基准**: `ant-design-master/components/typography/{Text,Title,Paragraph,Link,Base}.tsx`

### 发现的差异
| 项 | AntD v6 | hmfw（修改前） | 处理 |
| --- | --- | --- | --- |
| `Link` 子组件 | ✅ | ❌ 缺失 | ✅ 新增 `Typography.Link`（href/target/disabled） |
| `copyable` 复制 | ✅ | ❌（文档号称有，实际未实现） | ✅ 实现：复制按钮+成功态切换+自定义内容/回调 |
| `ellipsis` 省略 | ✅（多行+展开） | ❌（文档号称有） | ✅ 实现单行省略；多行/展开记入待办 |
| 装饰 props 不一致 | 全组件统一 | `italic`/`keyboard` 仅 Text 有，Paragraph/Title 缺 | ✅ 抽 `Base.tsx` 统一，全组件对齐 |
| 装饰逻辑重复 | 共享 Base | 三份拷贝 | ✅ 抽公共 `Base.tsx`（props/class/装饰/复制） |
| `editable` 编辑 | ✅ | ❌ | ⏭️ 记入待办（交互复杂） |

### 改动文件
- `components/typography/Base.tsx` — 新增：共享 props、class、装饰包裹、文本提取、`useCopyable`
- `components/typography/{Text,Title,Paragraph}.tsx` — 改用 Base，补齐装饰 + copyable + ellipsis
- `components/typography/Link.tsx` — 新增
- `components/typography/types.ts` — `CopyableConfig`/`LinkProps` + 装饰字段
- `components/typography/index.ts`、`components/index.ts` — 导出 + 注册 `Link`
- `components/typography/style/index.css` — link/copy/ellipsis 样式
- `__tests__/Typography.test.tsx` — +8 用例（24 通过）
- `docs/demos/typography/` — Link/Copyable/Ellipsis 三个 demo + API 重写

### 验证
- `vitest run components/typography`：24 通过
- `pnpm typecheck`：通过
- 全量：736 通过

### 遗留待办
- `ellipsis` 多行 + 展开/省略提示（`rows`/`expandable`/tooltip）
- `editable` 行内编辑

---

## 5. Tag 标签 ✅ 已完成（含行为修复）

**对比基准**: `ant-design-master/components/tag/index.tsx`

### 发现的差异
| 项 | 严重度 | AntD v6 | hmfw（修改前） | 处理 |
| --- | --- | --- | --- | --- |
| `closable` 不自动隐藏 | ⚠️ 行为缺失 | 点击关闭后隐藏标签（可 `preventDefault` 阻止） | 仅 emit close，不隐藏 | ✅ 新增 `visible` 状态，自动隐藏 + 可阻止 |
| `href`/`target` 链接 | 差异 | 渲染为 `<a>` | ❌ | ✅ 新增 |
| `disabled` | 差异 | ✅ | ❌ | ✅ 新增（禁用 close/href/交互 + 样式） |
| 关闭键盘可达性 | a11y | Enter/Space 触发 | 仅鼠标 | ✅ 新增 keydown + tabindex |
| `variant`（filled/solid/outlined） | 差异 | ✅ 替代 `bordered` | 仅 `bordered` | ⏭️ 需重写全部预设色 CSS，记入待办 |
| `Tag.CheckableTagGroup` | 未实现 | ✅ | ❌ | ⏭️ 记入待办 |
| 语义化 classNames/styles | 差异 | ✅ | ❌ | ⏭️ 全库统一处理 |

### 改动文件
- `components/tag/Tag.tsx` — visible 自动隐藏、href/target、disabled、键盘可达性
- `components/tag/types.ts` — href/target/disabled
- `components/tag/style/index.css` — hidden/链接/禁用样式
- `components/tag/__tests__/Tag.test.tsx` — +6 用例（15 通过）
- `docs/demos/tag/TagLinkDisabled.vue` + `tag.md` — 新 demo + API 重写

### 验证
- `vitest run components/tag`：15 通过
- `pnpm typecheck`：通过
- 全量：740 通过

### 遗留待办
- `variant`（filled/solid/outlined）+ `xxx-inverse` 色
- `Tag.CheckableTagGroup`

---

## 6. Badge 徽标数 ✅ 已完成（含 Bug 修复）

**对比基准**: `ant-design-master/components/badge/{Badge,Ribbon}.tsx`

### 发现的问题
| 项 | 严重度 | AntD v6 | hmfw（修改前） | 处理 |
| --- | --- | --- | --- | --- |
| `not-a-wrapper` class 反了 | 🐛 Bug | `!children` 时加（独立徽标） | 「有」children 时加（反向） | ✅ 修正逻辑 |
| `Badge.Ribbon` 缎带 | 未实现 | ✅ | ❌ | ✅ 新增子组件（text/color/placement，预设色+自定义色） |
| 语义化 classNames/styles | 差异 | ✅ | ❌ | ⏭️ 全库统一处理 |
| `count` 滚动动画（ScrollNumber） | 差异 | ✅ CSSMotion | 静态 | ⏭️ 视觉增强，记入待办 |

### 改动文件
- `components/badge/Badge.tsx` — 修正 not-a-wrapper 反向 bug
- `components/badge/Ribbon.tsx` — 新增缎带子组件
- `components/badge/types.ts` — `RibbonProps`/`RibbonPlacement`
- `components/badge/index.ts` — 挂载 `Badge.Ribbon` + 导出
- `components/index.ts` — 导出 + 注册 `Ribbon`
- `components/badge/style/index.css` — Ribbon 样式（corner 几何 + 13 预设色）
- `__tests__/Badge.test.tsx` — +7 用例（17 通过）
- `docs/demos/badge/BadgeRibbon.vue` + `badge.md` — 新 demo + API

### 验证
- `vitest run components/badge`：17 通过
- `pnpm typecheck`：通过
- 全量：747 通过

### 遗留待办
- ScrollNumber 数字滚动动画

---

## 7. Alert 警告提示 ✅ 已完成

**对比基准**: `ant-design-master/components/alert/Alert.tsx`

### 发现的差异
| 项 | 严重度 | AntD v6 | hmfw（修改前） | 处理 |
| --- | --- | --- | --- | --- |
| `banner` 不自动开图标 | ⚠️ 行为缺失 | `banner && showIcon===undefined → true` | 需手动 showIcon | ✅ 修正（showIcon 改 `undefined` 默认） |
| `title` prop | 差异 | v6 用 `title`，`message` 废弃 | 仅 `message` | ✅ 新增 `title`，`message` 保留为别名 |
| `variant`（outlined/filled） | 差异 | ✅ 6.4.0+ | ❌ | ✅ 新增 + filled CSS |
| `icon` slot 自定义图标 | 差异 | ✅ | ❌ | ✅ 新增 icon slot |
| 图标用 glyph 而非 SVG | 视觉 | Filled SVG 图标 | unicode ✓ℹ⚠✕ | ⏭️ 图标库未含 Filled 系列，记入待办 |
| 语义化 classNames/styles | 差异 | ✅ | ❌ | ⏭️ 全库统一处理 |

### 改动文件
- `components/alert/Alert.tsx` — banner 自动图标、title 别名、variant、icon slot、mergedType computed
- `components/alert/types.ts` — `AlertVariant`/`title`
- `components/alert/index.ts`、`components/index.ts` — 导出 `AlertVariant`
- `components/alert/style/index.css` — filled 变体样式
- `__tests__/Alert.test.tsx` — +7 用例（17 通过）
- `docs/demos/alert/{AlertVariant,AlertBanner}.vue` + `alert.md` — 2 新 demo + API 重写

### 验证
- `vitest run components/alert`：17 通过
- `pnpm typecheck`：通过
- 全量：754 通过

### 遗留待办
- Filled SVG 图标（需扩充图标库）

---

## 8. Avatar 头像 ✅ 已完成

**对比基准**: `ant-design-master/components/avatar/{Avatar.tsx,AvatarContext.ts}`

### 发现的差异
| 项 | 严重度 | AntD v6 | hmfw（修改前） | 处理 |
| --- | --- | --- | --- | --- |
| Group 不下发 size/shape | ⚠️ 功能缺失 | AvatarContext 下发给子 Avatar | 子 Avatar 不继承 | ✅ 新增 `context.ts`（provide/inject），props 优先 |
| `draggable`/`crossOrigin` | 差异 | ✅ img 属性 | ❌ | ✅ 新增 |
| gap 缩放缺保护 | 小问题 | `gap*2 < nodeWidth` 判断 | 无判断 | ✅ 补充保护条件 |
| 死代码 `sizeValue` | 优化 | — | 计算后 `void` 丢弃 | ✅ 移除 |
| 响应式 size（断点对象） | 差异 | ✅ ScreenSizeMap | ❌ | ⏭️ 无栅格断点联动，记入待办 |
| Group 折叠弹层 | 差异 | maxPopover | 仅 +N | ⏭️ 需 Popover 集成，记入待办 |

### 改动文件
- `components/avatar/context.ts` — 新增 AvatarContext（provide/inject）
- `components/avatar/Avatar.tsx` — 消费上下文（props 优先）、draggable/crossOrigin、gap 保护、移除死代码
- `components/avatar/types.ts` — draggable/crossOrigin，移除未用 maxPopoverPlacement
- `__tests__/Avatar.test.tsx` — +3 用例（15 通过，含 props 覆盖上下文）
- `docs/demos/avatar/AvatarGroup.vue` + `avatar.md` — 下发 demo + API

### 验证
- `vitest run components/avatar`：15 通过
- `pnpm typecheck`：通过
- 全量：757 通过

### 遗留待办
- 响应式 size（断点对象）
- Group 折叠 Popover 弹层

---

## 9. Empty 空状态 ✅ 已完成

**对比基准**: `ant-design-master/components/empty/{index.tsx,simple.tsx}`

### 发现的差异
| 项 | AntD v6 | hmfw（修改前） | 处理 |
| --- | --- | --- | --- |
| `PRESENTED_IMAGE_SIMPLE` 简约图 | ✅ + `empty-normal` 类 | ❌ 仅默认图 | ✅ 新增简约 SVG + normal 样式 + 预设常量 |
| `image` slot 自定义节点 | ✅（image 可为 ReactNode） | 仅 string/false | ✅ 新增 image slot |
| 预设常量挂载 | `Empty.PRESENTED_IMAGE_*` | ❌ | ✅ 导出常量 + 挂载到组件 |
| `img draggable={false}` | ✅ | ❌ | ✅ 补充 |
| 语义化 classNames/styles | ✅ | ❌ | ⏭️ 全库统一处理 |

### 改动文件
- `components/empty/Empty.tsx` — 简约图、image slot、预设常量、normal 类、draggable
- `components/empty/index.ts` — 导出常量
- `components/empty/style/index.css` — `empty-normal` 样式
- `__tests__/Empty.test.tsx` — +4 用例（12 通过）
- `docs/demos/empty/EmptySimple.vue` + `empty.md` — 简约 demo + API

### 验证
- `vitest run components/empty`：12 通过
- `pnpm typecheck`：通过
- 全量：761 通过

---

## 10. Card 卡片 ✅ 已完成

**对比基准**: `ant-design-master/components/card/Card.tsx`

### 发现的差异
| 项 | AntD v6 | hmfw（修改前） | 处理 |
| --- | --- | --- | --- |
| `Card.Grid` 网格 | ✅ + `contain-grid` 检测 | ❌ | ✅ 新增 CardGrid 子组件 + 递归检测子节点 + 样式 |
| `type='inner'` | ✅ | ❌ | ✅ 新增 + 样式 |
| `variant`（borderless/outlined） | ✅ 替代 `bordered` | 仅 `bordered` | ✅ 新增（优先于 bordered） |
| `Card.Meta` 挂载 | `Card.Meta` | 仅独立 CardMeta | ✅ 挂载 `Card.Grid`/`Card.Meta` |
| `tabList` 页签 | ✅ Tabs 集成 | ❌ | ⏭️ 需 Tabs 深度集成，记入待办 |
| `actions` 数组自动 `<li>` 分隔 | ✅ 等宽分隔 | slot 直插 ul（需手写 li） | ⏭️ slot 模式保留，记入待办 |
| 语义化 classNames/styles | ✅ | ❌ | ⏭️ 全库统一处理 |

### 改动文件
- `components/card/Card.tsx` — CardGrid 子组件、contain-grid 检测、type、variant
- `components/card/types.ts` — `CardType`/`CardVariant`/`CardGridProps`
- `components/card/index.ts` — 挂载 `Card.Grid`/`Card.Meta` + 导出
- `components/index.ts` — 导出 + 注册 CardGrid
- `components/card/style/index.css` — grid + inner 样式
- `__tests__/Card.test.tsx` — +7 用例（20 通过）
- `docs/demos/card/{CardGrid,CardInner}.vue` + `card.md` — 2 demo + API

### 验证
- `vitest run components/card`：20 通过
- `pnpm typecheck`：通过
- 全量：768 通过

### 遗留待办
- `tabList` 卡片页签（需 Tabs 集成）
- `actions` 数组 prop 自动等宽分隔

---

## 11. Result 结果 ✅ 已完成

**对比基准**: `ant-design-master/components/result/index.tsx`

### 发现的差异
| 项 | AntD v6 | hmfw（修改前） | 处理 |
| --- | --- | --- | --- |
| 404/403/500 异常插画 | ✅ SVG 插画 + `result-image` 类 | 纯文本 "404" 字 | ✅ 新增简化版 SVG 插画 + image 类（原版各 200+ 行，采用紧凑版） |
| `icon={false}` 隐藏图标 | ✅ | ❌（无法隐藏） | ✅ icon 改 `string \| false` |
| `PRESENTED_IMAGE_*` 导出 | ✅ | ❌ | ⏭️ 简化插画内联，不单独导出 |
| 语义化 classNames/styles | ✅ | ❌ | ⏭️ 全库统一处理 |

### 改动文件
- `components/result/Result.tsx` — 异常插画、icon=false 隐藏、image 类
- `components/result/style/index.css` — `result-image` 样式（移除文本字号 hack）
- `__tests__/Result.test.tsx` — +3 用例（11 通过）
- `docs/demos/result/result.md` — API 更新（icon 支持 false、slots 补全）

### 验证
- `vitest run components/result`：11 通过
- `pnpm typecheck`：通过
- 全量：771 通过

### 遗留待办
- 完整精细异常插画（当前为紧凑简化版）

---

## 12. Spin 加载中 ✅ 已完成（含 Bug 修复）

**对比基准**: `ant-design-master/components/spin/index.tsx`

### 发现的差异
| 项 | 严重度 | AntD v6 | hmfw（修改前） | 处理 |
| --- | --- | --- | --- | --- |
| `delay` 防闪烁 | 🐞 Bug | 实现延迟显示 | 声明了 prop 但**完全未实现**（无效果） | ✅ 用 watch+setTimeout 实现 |
| `indicator` 自定义指示器 | ⚠️ 功能缺失 | ✅ slot/prop | ❌ | ✅ 新增 indicator slot |
| `fullscreen` 全屏 | 差异 | ✅ | ❌ | ✅ 新增 + 遮罩样式 |
| `description`（tip 新名） | 差异 | ✅ tip 已废弃 | 仅 tip | ✅ 新增 description，tip 保留为别名 |
| a11y（aria-busy/aria-live） | 优化 | ✅ | ❌ | ✅ 补充 |
| `percent` 进度 | 差异 | ✅ | ❌ | ⏭️ 需进度联动，记入待办 |
| `Spin.setDefaultIndicator` | 差异 | ✅ 全局默认 | ❌ | ⏭️ 记入待办 |

### 改动文件
- `components/spin/Spin.tsx` — delay 实现、indicator slot、fullscreen、description、a11y
- `components/spin/types.ts` — description/fullscreen
- `components/spin/style/index.css` — fullscreen 遮罩样式
- `__tests__/Spin.test.tsx` — +5 用例（11 通过，含 fake timers 测 delay）

### 验证
- `vitest run components/spin`：11 通过
- `pnpm typecheck`：通过
- 全量：776 通过

### 遗留待办
- `percent` 进度联动
- `Spin.setDefaultIndicator` 全局默认指示器
- docs demo 未补（indicator/fullscreen/delay 示例）

---

## 13. Skeleton 骨架屏 ✅ 已完成(含Bug修复)

### 【对比基准】
- **AntD v6 路径**: `/Users/hmfw/Downloads/ant-design-master/components/skeleton/`
- **参考文件**: `Skeleton.tsx`, `Avatar.tsx`, `Button.tsx`, `Input.tsx`, `Image.tsx`, `Node.tsx`, `Element.tsx`, `Paragraph.tsx`, `Title.tsx`, `style/index.ts`

### 【发现的差异/问题表】

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| 缺失子组件 | 高 | 提供 `Skeleton.Avatar`, `Skeleton.Image`, `Skeleton.Node` | 仅有 `Skeleton.Button`, `Skeleton.Input` | ✅ 已补全全部子组件 |
| 布局结构 | 中 | 使用 `table`/`table-cell` 布局 | 使用 `flex` 布局 | ✅ 改为 `table` 布局 |
| 类名错误 | 高 | 内容区用 `.ant-skeleton-section` | 用 `.hmfw-skeleton-content` | ✅ 改为 `.hmfw-skeleton-section` |
| 标题宽度逻辑 | 中 | 无头像+段落=38%，有头像+段落=50% | 固定38% | ✅ 实现智能默认宽度 |
| 段落行数默认 | 中 | 有头像=2行，无头像+标题=3行 | 固定3行 | ✅ 实现智能默认行数 |
| 段落最后一行宽度 | 低 | 多行时最后一行自动61% | 全部100% | ✅ 实现自动61%逻辑 |
| 头像形状逻辑 | 中 | `title && !paragraph` 时默认方形 | 始终默认圆形 | ✅ 实现智能形状选择 |
| Element 包装器 | 中 | Button/Input/Avatar 包裹在 `.ant-skeleton-element` 容器中 | 直接渲染 | ✅ 添加 `.hmfw-skeleton-element` 包装 |
| Size 上下文继承 | 中 | 子组件通过 `useSize` 继承 ConfigProvider 的 `componentSize` | 不继承 | ✅ 实现 `useSize` 逻辑 |
| CSS 变量 | 中 | 使用 `colorFillContent` 等 token | 硬编码 `rgba(0,0,0,0.06)` | ✅ 改用 `--hmfw-color-fill-secondary` 等 token |

### 【改动文件】
1. `components/skeleton/Skeleton.tsx` — 重写主组件，添加 `SkeletonAvatar`, `SkeletonImage`, `SkeletonNode`；实现智能默认逻辑、`useSize` 继承、Element 包装器
2. `components/skeleton/index.ts` — 导出新增子组件，挂载到 `Skeleton` 命名空间
3. `components/skeleton/style/index.css` — 改为 `table` 布局，修正类名 `.section`，使用 theme token，添加 `.hmfw-skeleton-element`/`.hmfw-skeleton-image`/`.hmfw-skeleton-node` 样式
4. `components/skeleton/__tests__/Skeleton.test.tsx` — 新增 39 个测试用例覆盖全部子组件和智能逻辑
5. `docs/demos/skeleton/SkeletonAvatar.vue` — 新增头像骨架演示
6. `docs/demos/skeleton/SkeletonImageNode.vue` — 新增图片/节点骨架演示
7. `docs/demos/skeleton/skeleton.md` — 补全 API 文档

### 【验证】
```bash
npx vitest run components/skeleton
# ✅ PASS (39) FAIL (0)
```

### 【遗留待办】
1. **语义化 classNames/styles API** — v6 支持 `classNames={{ root, header, section, avatar, title, paragraph }}` 和 `styles` 对象，用于精细控制各部分样式。hmfw 未实现（需要 `useMergeSemantic` 工具函数）。
2. **RTL 支持** — v6 根据 `direction === 'rtl'` 添加 `.ant-skeleton-rtl` 类。hmfw 未实现。

---

## 14. Progress 进度条 ✅ 已完成

### 对比基准

- **参考源**: `/Users/hmfw/Downloads/ant-design-master/components/progress/`
- **对比版本**: Ant Design v6
- **对比文件**: progress.tsx, Circle.tsx, Line.tsx, Steps.tsx, utils.ts, style/index.ts

### 发现的差异/问题表

| 项 | 严重度 | Ant Design v6 | hmfw 修改前 | 处理 |
|---|---|---|---|---|
| `steps` prop | 高 | 支持步骤进度条 `steps: number \| { count: number; gap: number }` | 未实现 | ✅ 已实现 `steps: number` |
| `success` prop | 高 | 支持成功分段 `{ percent?: number; strokeColor?: string }` | 未实现 | ✅ 已实现 |
| `strokeLinecap` | 中 | 支持 `'round' \| 'butt' \| 'square'` | 未实现 | ✅ 已实现 |
| `railColor` | 中 | 新 API，`trailColor` 已废弃 | 仅 `trailColor` | ✅ 已实现，保留 `trailColor` 作为别名 |
| `gapDegree` | 中 | 自定义圆形/仪表盘缺口角度 | 仅 dashboard 硬编码 75° | ✅ 已实现 |
| `percentPosition` | 中 | `{ align?: 'start' \| 'center' \| 'end'; type?: 'inner' \| 'outer' }` | 未实现 | ✅ 已实现 |
| `size` 扩展类型 | 中 | 支持 `number \| { width?: number; height?: number }` | 仅 `'default' \| 'small'` | ✅ 已实现 |
| 渐变 `strokeColor` | 中 | 支持 `ProgressGradient` 对象 | 仅字符串 | ✅ 已实现 |
| 状态图标 | 中 | success/exception 显示图标 (CheckOutlined/CloseOutlined) | 显示 unicode 字符 ✓/✕ | ✅ 已修复，使用 Icon 组件 |

### 改动文件

1. `components/progress/types.ts` — 扩展类型定义
2. `components/progress/Progress.tsx` — 完全重写，实现所有缺失 API
3. `components/progress/style/index.css` — 重写样式，使用语义化 class
4. `components/progress/__tests__/Progress.test.tsx` — 扩展测试用例
5. `docs/demos/progress/ProgressSteps.vue` — 新增步骤进度条演示
6. `docs/demos/progress/ProgressGradient.vue` — 新增渐变色和成功分段演示
7. `docs/demos/progress/ProgressCustom.vue` — 新增自定义尺寸/间隙/线帽演示
8. `docs/demos/progress/progress.md` — 更新文档

### 验证

```bash
npx vitest run components/progress
# ✅ 23 passed, 0 failed
```

### 遗留待办

1. **图标库扩展** — line 类型的 success/exception 状态应使用 CheckCircleFilled/CloseCircleFilled，但当前图标库仅有 Outlined 变体。
2. **steps 对象形式** — v6 支持 `steps: { count: number; gap: number }`，当前简化为仅支持 `number`。
3. **语义化 classNames/styles** — v6 支持 `classNames: { root, body, rail, track, indicator }` 和 `styles` 对象。

---

## 15. Timeline 时间轴 ✅ 已完成（含 Bug 修复）

**对比基准**: `ant-design-master/components/timeline/{Timeline.tsx,useItems.tsx,index.tsx}`

### 发现的差异/问题

| 项 | 严重度 | AntD v6 | hmfw（修改前） | 处理 |
| --- | --- | --- | --- | --- |
| API 命名不一致 | ⚠️ 问题 | 主 API 用 `title`/`content`/`icon`/`placement` | 用 `label`/`children`/`dot`/`position` | ✅ 新增主 API，旧 API 作为 legacy 保留兼容 |
| `Timeline.Item` 子组件缺失 | 差异 | ✅ 支持 `<Timeline.Item>` 子组件模式 | ❌ 仅 `items` 数组 | ✅ 新增 `TimelineItem` 子组件 + VNode children 提取 |
| `loading` 状态缺失 | 差异 | ✅ `loading: true` 显示 LoadingOutlined | ❌ | ✅ 新增 `loading` prop + 自动渲染旋转图标 |
| `mode` 取值不对齐 | 差异 | `start`/`end`/`alternate`（`left`/`right` 已废弃） | `left`/`right`/`alternate` | ✅ 支持全部取值，内部归一化 |
| `orientation: 'horizontal'` 缺失 | 差异 | ✅ 水平时间轴 | ❌ 仅垂直 | ✅ 新增水平布局 + CSS |
| `variant: 'filled'` 缺失 | 差异 | ✅ 填充/描边变体 | ❌ | ✅ 新增 `variant` prop + filled 样式 |
| 自定义颜色样式位置错误 | 🐛 Bug | 自定义色应用到 head | 应用到 item | ✅ 修正 style 绑定到 head 元素 |

### 改动文件

- `components/timeline/types.ts` — 新增：完整类型定义
- `components/timeline/Timeline.tsx` — 重写
- `components/timeline/index.ts` — 子组件挂载
- `components/timeline/style/index.css` — 重写
- `components/timeline/__tests__/Timeline.test.tsx` — 重写：24 个测试用例
- `docs/demos/timeline/*.vue` — 更新现有 demo + 新增 4 个 demo
- `docs/demos/timeline/timeline.md` — 重写 API 文档

### 验证

- `npx vitest run components/timeline`：24 passed

### 遗留待办

- v6 基于内部 `Steps` 组件重构（架构级差异，超出对齐范围）
- `classNames`/`styles` 语义化自定义（全库统一缺失，后续处理）


---

## 16. Segmented 分段控制器 ✅ 已完成

### 【对比基准】
- 参考源码: `/Users/hmfw/Downloads/ant-design-master/components/segmented/`
- React 版本: Ant Design v6 (基于 @rc-component/segmented)

### 【发现的差异/问题表】

| 项 | 严重度 | AntD v6 | hmfw 修改前 | 处理 |
|---|---|---|---|---|
| icon 类型 | 🔴 Bug | ReactNode(VNode) | string | ✅ 改为 VNode,支持 h(Icon, { component }) |
| label 类型 | 🟡 限制 | ReactNode | string | ✅ 改为 string \| VNode,支持自定义渲染 |
| vertical/orientation | 🟡 缺失 | 支持 vertical + orientation | 无 | ✅ 新增 vertical/orientation props |
| shape | 🟡 缺失 | 'default' \| 'round' | 无 | ✅ 新增 shape prop,round 为胶囊型 |
| name | 🟡 缺失 | 支持 name 属性 | 无 | ✅ 新增 name prop,为 radio input 分组 |
| tooltip | 🟡 缺失 | 支持 tooltip(string \| TooltipProps) | 无 | ✅ 新增 tooltip 支持 |
| 动画滑块 | 🟡 体验 | 有动画滑块指示器 | 仅背景色变化 | ✅ 新增 .hmfw-segmented-thumb 动画滑块 |
| 键盘导航 | 🟡 a11y | 支持方向键切换 | 无 | ✅ 新增键盘导航(ArrowLeft/Right/Up/Down) |

### 【改动文件】
- `components/segmented/Segmented.tsx` — 重写:新增 vertical/orientation/shape/name/tooltip/keyboard/thumb 动画
- `components/segmented/types.ts` — 新增:完整类型定义
- `components/segmented/style/index.css` — 重写:新增 vertical/round/thumb 动画/focus/RTL 样式
- `components/segmented/__tests__/Segmented.test.tsx` — 扩展:新增 14 个测试用例
- `docs/demos/segmented/*.vue` — 新增 4 个 demo

### 【验证】
```bash
npx vitest run components/segmented
# ✅ PASS (24) FAIL (0)
```

### 【遗留待办】
1. **语义化 classNames/styles API** - v6 支持 `classNames={{ root, icon, label, item }}` 和 `styles={{ ... }}` 的函数式语义定制,成本较高,暂不实现。

---

## 17. Rate 评分 ✅ 已完成

### 对比基准

- **参考源码**: `/Users/hmfw/Downloads/ant-design-master/components/rate/`
- **AntD v6 版本**: React 实现，基于 `@rc-component/rate`

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw 修改前 | 处理 |
|---|---|---|---|---|
| size 属性 | 高 | 支持 small/middle/large 三种尺寸 | 无 size 属性 | ✅ 已补充 size prop |
| ConfigProvider 集成 | 高 | 继承 componentSize | 未集成 | ✅ 已集成 useConfig |
| keyboard 属性 | 中 | 支持键盘导航（方向键调整评分） | 无键盘支持 | ✅ 已实现键盘导航 |
| character 函数 | 中 | 支持函数动态渲染字符 | 仅支持字符串 | ✅ 已支持函数 |
| tooltips 类型 | 中 | 支持 string 或 TooltipProps 对象 | 仅支持 string[] | ✅ 已支持 (string \| TooltipProps)[] |
| 方法暴露 | 中 | 暴露 focus()/blur() 方法 | 无方法暴露 | ✅ 已通过 expose 暴露 |

### 改动文件

- `components/rate/Rate.tsx` — 重构主组件
- `components/rate/types.ts` — 新增类型文件
- `components/rate/style/index.css` — 重写样式，使用设计 Token
- `components/rate/__tests__/Rate.test.tsx` — 新增 10 个测试用例
- `docs/demos/rate/*.vue` — 新增 4 个 demo

### 验证

```bash
npx vitest run components/rate
# ✅ 18 passed, 0 failed
```

### 遗留待办

1. **RTL 支持** — AntD v6 有 RTL 样式，hmfw 暂未实现 RTL 全局能力
2. **StarFilled 图标** — 当前使用 Unicode 星号 `★`，待图标库补充后可替换

---

## 18. QRCode 二维码 ✅ 已完成(含 Bug 修复)

### 【对比基准】
- **React 源码**: `/Users/hmfw/Downloads/ant-design-master/components/qr-code/`
- **版本**: Ant Design v6

### 【发现的差异/问题表】

| 项 | 严重度 | AntD v6 | hmfw 修改前 | 处理 |
|---|---|---|---|---|
| **type 属性** | 高 | 支持 `'canvas' \| 'svg'` | 仅支持 canvas | ✅ 已补全 SVG 渲染 |
| **iconSize 类型** | 中 | `number \| { width, height }` | 仅 `number` | ✅ 已修复,支持对象 |
| **statusRender** | 高 | 支持自定义状态渲染函数 | 缺失 | ✅ 已补全 |
| **borderless class** | 中 | `bordered={false}` 添加 `-borderless` | 未添加 class | ✅ 已修复 |
| **空 value 处理** | 高 | 返回 null + 警告 | 仍渲染空组件 | ✅ 已修复 |
| **a11y 属性传递** | 高 | aria-*/data-* 传给 canvas/svg | 未传递 | ✅ 已修复 |
| **遮罩背景色** | 中 | `rgba(255,255,255,0.96)` | `rgba(0,0,0,0.6)` | ✅ 已修复 |

### 改动文件
1. `components/qrcode/types.ts` — 新增类型
2. `components/qrcode/QRCode.tsx` — 完全重写
3. `components/qrcode/style/index.css` — 重写样式
4. `components/qrcode/__tests__/QRCode.test.tsx` — 扩展测试
5. `docs/demos/qrcode/*.vue` — 新增 3 个 demo

### 验证
```bash
npx vitest run components/qrcode
# ✅ 24 passed (0 failed)
```

### 遗留待办
1. **boostLevel 属性** — v6 5.28.0+ 新增,用于 canvas 性能优化
2. **国际化文本** — v6 从 locale context 读取文本,hmfw 暂时硬编码中文

---

## 19. Watermark 水印 ✅ 已完成

### 对比基准

- **AntD v6 源码**: `/Users/hmfw/Downloads/ant-design-master/components/watermark/`

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw 修改前 | 处理 |
|---|---|---|---|---|
| Canvas 渲染逻辑 | 🔴 高 | 使用 useClips 实现旋转+交替布局 | 简单的 translate+rotate | ✅ 完整实现 getClips 函数 |
| offset 支持 | 🔴 高 | 声明并实现,默认 gap/2 | 声明但未使用 | ✅ 实现 offset 逻辑 |
| zIndex 默认值 | 🟡 中 | 999 | 9 | ✅ 改为 999 |
| 图片加载 | 🟡 中 | 异步加载,onerror 回退 | 同步 drawImage | ✅ 实现异步加载+错误回退 |
| MutationObserver 防篡改 | 🟡 中 | 监听 childList/attributes | 无 | ✅ 实现 MutationObserver |
| inherit 嵌套水印 | 🟡 中 | 通过 WatermarkContext 支持 | 声明但未实现 | ✅ 实现 Context provide/inject |

### 改动文件

- `components/watermark/Watermark.tsx` — 完全重写,从 79 行扩展到 ~300 行
- `components/watermark/types.ts` — 新增
- `components/watermark/style/index.css` — 简化
- `components/watermark/__tests__/Watermark.test.tsx` — 从 4 个用例扩展到 11 个
- `docs/demos/watermark/*.vue` — 新增 2 个 demo

### 验证

```bash
npx vitest run components/watermark
# ✅ 11 passed
```

### 遗留待办

1. **onRemove 回调** — 需要在 MutationObserver 检测到水印被移除时触发
2. **RAF 防抖优化** — v6 使用 useRafDebounce 限制重绘频率
3. **单例缓存** — v6 使用 useSingletonCache 避免重复计算

---

## 20. BackTop 回到顶部 ✅ 已完成(含Bug修复)

### 对比基准
- **AntD v6 源码**: `/Users/hmfw/Downloads/ant-design-master/components/back-top/`

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| **Props API** | 🔴高 | visibilityHeight, target, duration, onClick, className, rootClassName, style, prefixCls | 缺少 className, rootClassName, style, prefixCls | ✅ 已修复 |
| **滚动监听性能** | 🔴高 | throttleByAnimationFrame节流 | 无节流 | ✅ 已修复 |
| **缓动函数** | 🟡中 | easeInOutCubic标准公式 | 简化版公式 | ✅ 已修复 |
| **可见性动画** | 🟡中 | CSSMotion fade过渡 | 无过渡 | ✅ 已修复 |
| **RTL支持** | 🟡中 | 根据direction context添加rtl类名 | 无RTL支持 | ✅ 已修复 |

### 改动文件
1. **新增** `components/back-top/types.ts`
2. **重写** `components/back-top/BackTop.tsx`
3. **重写** `components/back-top/style/index.css`
4. **重写** `components/back-top/__tests__/BackTop.test.tsx` — 14个测试用例
5. **更新** `docs/demos/back-top/*.vue` — 更新现有+新增1个demo

### 验证
```bash
npx vitest run components/back-top
# ✅ PASS (14) FAIL (0)
```

### 遗留待办
1. **废弃警告** — v6在开发模式下console.warn提示使用FloatButton.BackTop
2. **响应式Token** — v6的backTopInlineEndMD/XS从token计算

---

## 21. FloatButton 悬浮按钮 ✅ 已完成(含Bug修复)

### 【对比基准】
- **React 版本**: ant-design v6 (2024-2025)

### 【发现的差异/问题表】

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| 默认图标错误 | 🔴 Bug | FloatButton 无 content/icon 时默认 `FileTextOutlined` | 默认 `UpOutlined` | ✅ 修复 |
| BackTop 默认图标错误 | 🔴 Bug | BackTop 默认 `VerticalAlignTopOutlined` | 默认 `UpOutlined` | ✅ 修复 |
| 缺失 `content` prop | 🟡 缺失 | v6 新增 `content` prop | 仅有 `description` | ✅ 补齐 |
| 缺失 `disabled` prop | 🟡 缺失 | v6.4.0 新增 `disabled` prop | 无 | ✅ 补齐 |
| Tooltip 类型受限 | 🟡 缺失 | v6 tooltip 接受 `string \| TooltipProps` | 仅接受 `string` | ✅ 补齐 |
| Group 未实现外部点击关闭 | 🟡 缺失 | v6 trigger='click' 时点击外部关闭菜单 | 无 | ✅ 补齐 |

### 【改动文件】
- `components/float-button/icons.ts` — 新增：本地图标定义
- `components/float-button/FloatButton.tsx` — 修改：修复默认图标、新增功能
- `components/float-button/types.ts` — 修改：新增 content/disabled prop
- `components/float-button/style/index.css` — 修改：新增 disabled 样式
- `components/float-button/__tests__/FloatButton.test.tsx` — 修改：新增测试用例

### 【验证】
```bash
npx vitest run components/float-button
# ✅ PASS (34) FAIL (0)
```

### 【遗留待办】
1. **复杂动画简化**: v6 Group 菜单展开使用 `@rc-component/motion`
2. **缺失图标**: FileTextOutlined 和 VerticalAlignTopOutlined 未在共享图标库中

---

## 22. Descriptions 描述列表 ✅ 已完成(含Bug修复)

### 【对比基准】
- React ant-design v6: `/Users/hmfw/Downloads/ant-design-master/components/descriptions/`

### 【发现的差异/问题表】

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| 缺少 Descriptions.Item 子组件 | 高 | 支持 `<Descriptions.Item>` JSX 语法 | 无此子组件 | ✅ 新增 DescriptionsItem |
| column 不支持响应式 | 高 | `column={{ xs:1, md:2, lg:3 }}` | 仅支持 number | ✅ 实现响应式对象 |
| span 不支持响应式 | 高 | `span={{ xs:1, md:2 }}` | 仅支持 number | ✅ 支持响应式 span |
| 缺少 span='filled' | 高 | `span='filled'` 填充剩余列 | 无此功能 | ✅ 实现 filled 逻辑 |
| colon 显示逻辑错误 | 高(Bug) | 默认显示(CSS ::after),bordered 时隐藏 | 仅在 bordered 时显示 | ✅ 修复 |
| 最后一项 span 未自动填充 | 中 | 自动填充至 column | 不填充 | ✅ 实现 auto-fill |

### 【改动文件】
**新增**:
- `components/descriptions/types.ts`
- `components/descriptions/DescriptionsItem.tsx`
- `docs/demos/descriptions/DescriptionsResponsive.vue`
- `docs/demos/descriptions/DescriptionsSizes.vue`
- `docs/demos/descriptions/DescriptionsFilled.vue`

**修改**:
- `components/descriptions/Descriptions.tsx` — 核心重构
- `components/descriptions/index.ts` — 挂载子组件
- `components/descriptions/style/index.css` — 全面重写
- `components/descriptions/__tests__/Descriptions.test.tsx` — 新增 12 个测试用例

### 【验证】
```bash
npx vitest run components/descriptions
# ✅ PASS (20) FAIL (0)
```

### 【遗留待办】
1. **响应式监听优化** — 当前仅在初始化时读取 window.innerWidth,未监听 resize
2. **语义化 classNames/styles API** — v6 支持细粒度样式定制

---


---

## 23. List 列表 ✅ 已完成(含 Bug 修复)

### 【对比基准】
- React 版本: ant-design v6 `/components/list/`
- 主要文件: `index.tsx` (350 行)、`Item.tsx` (176 行)、`context.ts`、`style/index.ts` (461 行)
- 核心能力: dataSource 数组渲染、renderItem、grid 网格布局、pagination 分页集成、loading 状态、itemLayout(horizontal/vertical)、List.Item/List.Item.Meta 子组件、actions 操作组、bordered/size/split 样式控制、rowKey 键值管理

### 【发现的差异/问题表】

| 项 | 严重度 | AntD v6 | hmfw 修改前 | 处理 |
|---|---|---|---|---|
| ListContext 缺失 | 🔴 高 | 通过 Context 向子组件传递 grid/itemLayout | 无 Context,子组件无法获取配置 | ✅ 新增 context.ts,实现 provideListContext/useListContext |
| 分页状态管理 | 🔴 高 | 内部维护 current/pageSize 状态,支持受控/非受控 | 仅简单透传 props,无状态管理 | ✅ 新增 internalCurrent/internalPageSize ref,实现完整状态管理 |
| 分页位置控制 | 🔴 高 | 支持 position: 'top'\|'bottom'\|'both' | 仅支持 bottom | ✅ 实现 position 逻辑,支持三种位置 |
| Grid 布局 | 🔴 高 | 用 Row/Col 包裹,支持响应式列数 | 完全缺失 | ✅ 实现 grid 模式,渲染 Row/Col 结构 |
| itemLayout vertical | 🔴 高 | vertical 时 extra 在右侧,actions 在底部 | 不支持 vertical 布局 | ✅ 实现 vertical 模式,调整 extra/actions 位置 |
| Loading 包裹逻辑 | 🔴 高 | 用 Spin 包裹内容,内容仍可见 | loading 时替换内容为 spinner | ✅ 改为 `<Spin spinning={isLoading}>{content}</Spin>` |
| rowKey 支持 | 🟡 中 | 支持 string\|function,自动提取 key | 不支持 rowKey | ✅ 实现 getKey 函数,支持 string/function/默认 key |
| Action 分隔符 | 🟡 中 | actions 项之间有 `<em class="action-split" />` | 无分隔符 | ✅ 在 ListItem 中渲染分隔符 |
| ListItem.Meta 挂载 | 🔴 高 | List.Item.Meta 可用 | ListItemMeta 未挂载到 List.Item | ✅ 在 index.ts 中正确挂载 List.Item.Meta |

### 【验证】
```bash
npx vitest run components/list
# ✅ PASS (19) FAIL (0)
```

### 【遗留待办】
1. **虚拟滚动** — v6 支持 rc-virtual-list,成本高,暂不实现
2. **Grid 响应式断点** — 当前 grid 仅支持固定 column,v6 支持 xs/sm/md/lg/xl/xxl 响应式列数

---

## 24. Collapse 折叠面板 ✅ 已完成(含Bug修复)

### 【对比基准】
- 参考源码: `/Users/hmfw/Downloads/ant-design-master/components/collapse/`
- React 版本: Ant Design v6

### 【发现的差异/问题表】

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| CollapsePanel 集成 | 🔴 严重 | Panel 通过 context 与 Collapse 通信,支持完整交互 | Panel 完全不工作,只是静态渲染,无法展开/折叠 | ✅ 已修复:使用 provide/inject 实现 context 通信 |
| onChange 事件返回值 | 🔴 严重 | 始终返回 `string[]` | accordion 模式返回 `string`,非 accordion 返回 `string[]` | ✅ 已修复:统一返回 `string[]` |
| collapsible 属性 | 🟡 缺失 | 支持 `header`/`icon`/`disabled` 控制触发区域 | 不支持 | ✅ 已实现:支持父级和 item 级别 collapsible |
| expandIcon 自定义 | 🟡 缺失 | 支持函数自定义展开图标 | 不支持,硬编码 unicode ▶ | ✅ 已实现:支持函数返回 VNode |
| 图标实现 | 🟡 问题 | 使用 `<RightOutlined>` Icon 组件 | 使用 unicode ▶ | ✅ 已修复:使用 Icon + RightOutlined |

### 【验证】
```bash
npx vitest run components/collapse
# ✅ 23 passed (0 failed)
```

### 【遗留待办】
1. **动画效果** — 当前使用简单的 display:none 切换,v6 使用 rc-motion 实现高度动画

---

## 25. Steps 步骤条 ✅ 已完成

### 【对比基准】
- **参考版本**: ant-design v6 (React)
- **对比文件**: `/Users/hmfw/Downloads/ant-design-master/components/steps/`

### 【发现的差异/问题表】

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| 缺失 `orientation` prop | 中 | 支持 `orientation` 作为 `direction` 的新名称 | 仅支持 `direction` | ✅ 已补充 `orientation` prop |
| 缺失 `type` 多种类型 | 高 | 支持 `panel`、`dot` 类型 | 仅支持 `default`、`navigation`、`inline` | ✅ 已补充 `panel` 和 `dot` 类型 |
| 缺失 `variant` prop | 中 | 支持 `filled`/`outlined` 变体 | 无此 prop | ✅ 已补充 `variant` prop |
| 缺失 `percent` prop | 中 | 支持显示当前步骤进度百分比 | 无此功能 | ✅ 已补充 `percent` prop 和 ProgressIcon 组件 |
| 图标实现方式 | 中 | 使用 CheckOutlined/CloseOutlined 组件 | 使用 unicode 字符 ✓/✕ | ✅ 已改用 Icon 组件 |

### 【验证】
```bash
npx vitest run components/steps
# ✅ 28 passed (0 failed)
```

### 【遗留待办】
1. **响应式断点逻辑** — 当前 `responsive` prop 已声明但未实现真实的断点检测
2. **Tooltip 集成** — inline 类型在 v6 中会在有 content 时显示 Tooltip

---

## 26. Anchor 锚点 ✅ 已完成

### 对比基准
- **React 版本**: ant-design v6 `/components/anchor/`

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw 修改前 | 处理 |
|---|---|---|---|---|
| 缺少 AnchorLink 子组件 | 高 | 有独立 `Anchor.Link` 组件 | 无,只有 items 渲染 | ✅ 新增 AnchorLink.tsx,通过 context 通信 |
| 缺少 context 系统 | 高 | 用 React.Context 在 Anchor/Link 间通信 | 无 context | ✅ 新增 context.ts |
| getCurrentAnchor 签名错误 | 中 | `(activeLink: string) => string` | `() => string` | ✅ 修正为接收 activeLink 参数 |
| 缺少 targetOffset 支持 | 中 | 全局 targetOffset + 每个 Link 可单独设置 | 只有全局 targetOffset | ✅ 支持 link-level targetOffset |

### 验证
```bash
npx vitest run components/anchor
# ✅ PASS (16) FAIL (0)
```

### 遗留待办
1. **Affix 集成** — React 版用 `<Affix>` 包裹实现吸顶,hmfw 无 Affix 组件

---

## 27. Breadcrumb 面包屑 ✅ 已完成

### 【对比基准】
- 源码: `/Users/hmfw/Downloads/ant-design-master/components/breadcrumb/`
- 版本: Ant Design v6

### 【发现的差异/问题表】

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| title 类型 | 🔴 高 | 支持 ReactNode (string/number/VNode) | 仅支持 string | ✅ 已修复:支持 string/number/VNode |
| separator 类型 | 🔴 高 | 支持 ReactNode | 仅支持 string | ✅ 已修复:支持 string/VNode |
| 分隔符位置 | 🔴 高 | 在 item 之后 | 在 item 之前(第一个除外) | ✅ 已修复:改为在 item 之后 |
| type: 'separator' | 🔴 高 | 支持 separator 类型项 | 不支持 | ✅ 已实现 |
| params 参数替换 | 🟡 中 | 支持 `:id` 替换 | 不支持 | ✅ 已实现 |

### 验证
```bash
npx vitest run components/breadcrumb
# ✅ PASS (19) FAIL (0)
```

### 遗留待办
1. **menu 下拉菜单** — v6 支持 `menu` prop 配合 Dropdown 组件显示子菜单
2. **itemRender 自定义渲染** — 自定义面包屑项的渲染函数


---

## 28. Pagination 分页 ✅ 已完成

**对比基准**: `ant-design-master/components/pagination/{Pagination.tsx,useShowSizeChanger.ts}`

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
| --- | --- | --- | --- | --- |
| `defaultPageSize` 未实现 | 🐛 Bug | ✅ 支持非受控 pageSize | ❌ 声明但未实现 | ✅ 实现受控/非受控 pageSize 管理 |
| `pageSizeOptions` 未实现 | 🐛 Bug | ✅ 自定义选项 | ❌ 声明但未实现 | ✅ 实现，默认 `[10, 20, 50, 100]` |
| `showSizeChanger` 未实现 | 🐛 Bug | ✅ 集成 Select 组件 | ❌ 声明但未实现 | ✅ 集成 Select，支持切换每页条数 |
| `showQuickJumper` 未实现 | 🐛 Bug | ✅ 输入框快速跳转 | ❌ 声明但未实现 | ✅ 实现输入框+Enter/blur 跳转 |
| `simple` 模式未实现 | 🐛 Bug | ✅ 简洁输入框模式 | ❌ 声明但未实现 | ✅ 实现 simple 模式 |

### 验证
- `npx vitest run components/pagination`：25 passed

---

## 29. Grid 栅格 ✅ 已完成(含Bug修复)

### 【对比基准】
- 源码: `/Users/hmfw/Downloads/ant-design-master/components/grid/`

### 【发现的差异/问题表】

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| 响应式 gutter | 🔴高 | 支持对象 `{ xs: 8, md: 16 }` | 硬编码为 0 | ✅ 已修复,实现 useBreakpoint hook |
| Col flex 属性 | 🔴高 | 支持 `number \| 'auto' \| 'none' \| string` | 缺失 | ✅ 已实现 |
| wrap 上下文传递 | 🟡中 | Row 传递 wrap 给 Col(Firefox hack) | 未传递 | ✅ 已修复 |
| CSS 逻辑属性 | 🟡中 | 使用 `margin-inline`, `inset-inline-start/end` | 使用 `margin-left/right` | ✅ 已修复 |
| 完整 CSS 类 | 🔴高 | 所有 24 值 + 所有断点 | 仅部分值 | ✅ 已补全 |

### 验证
```bash
npx vitest run components/grid
# ✅ 21 passed, 0 failed
```

---

## 30. Layout 布局 ✅ 已完成(含Bug修复)

### 对比基准
- **React 版本**: ant-design v6 `/components/layout/`

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| Sider breakpoint 逻辑反了 | 🔴 Bug | 使用 max-width 媒体查询 | 使用 min-width | ✅ 已修复 |
| trigger prop 类型错误 | 🔴 Bug | `ReactNode \| null` | `boolean` | ✅ 已修复 |
| reverseArrow 不生效 | 🔴 Bug | 根据 reverseArrow 切换箭头 | 箭头方向始终相同 | ✅ 已修复 |
| onCollapse 缺少 type 参数 | 🟡 中 | `(collapsed, type)` | 只有 collapsed | ✅ 已补齐 |
| 缺少零宽触发器 | 🟡 中 | collapsedWidth=0 时显示浮动按钮 | 未实现 | ✅ 已补齐 |

### 验证
```bash
npx vitest run components/layout
# ✅ 25 passed, 0 failed
```

---

## 31. Tabs 标签页 ✅ 已完成(含Bug修复)

### 【对比基准】
- React 版本: ant-design v6 `/components/tabs/`

### 【发现的差异/问题表】

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| Ink bar 未定位 | 高 | 动态计算位置并动画过渡 | 渲染但无位置/宽度 | ✅ 已修复 |
| editable-card 未实现 | 高 | 完整的添加/删除功能 | 类型声明但无实现 | ✅ 已修复 |
| closable 字段无效 | 中 | TabItem.closable 控制关闭按钮 | 字段存在但未使用 | ✅ 已修复 |
| tabBarExtraContent | 中 | 支持 VNode 或 {left,right} | 无 | ✅ 已补齐 |

### 验证
```bash
npx vitest run components/tabs
# ✅ 26 passed (0 failed)
```

---

## 32. Menu 导航菜单 ✅ 已完成

### 【对比基准】
- 参考源码: `/Users/hmfw/Downloads/ant-design-master/components/menu/`

### 【发现的差异/问题表】

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| 类型系统 | 高 | 完整的类型定义 | 只有简单的 `MenuItem` 接口 | ✅ 新增完整类型系统 |
| `deselect` 事件 | 中 | 支持 `onDeselect` 事件 | 缺失 | ✅ 新增 |
| `danger` 属性 | 中 | 菜单项支持 `danger` | 已声明但未完整实现 | ✅ 完善实现 |
| `expandIcon` | 中 | 支持自定义展开图标 | 不支持 | ✅ 新增 |

### 验证
```bash
npx vitest run components/menu
# ✅ 19 passed, 0 failed
```


---

## 33. Dropdown 下拉菜单 ✅ 已完成(含Bug修复)

### 【对比基准】
- 参考源码: `/Users/hmfw/Downloads/ant-design-master/components/dropdown/`

### 【发现的差异/问题表】

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| 缺失 defaultOpen | 中 | 支持非受控默认打开 | 仅支持受控 open | ✅ 新增 defaultOpen prop |
| onOpenChange 缺 source | 中 | 传递 `{ source: 'trigger'\|'menu' }` | 仅传递 boolean | ✅ 修改为 `(open, { source })` |
| 缺失 Dropdown.Button | 高 | 有独立子组件 | 无 | ✅ 新增 DropdownButton.tsx |
| 缺失 arrow 支持 | 中 | 支持 boolean 或 `{ pointAtCenter }` | 仅 boolean | ✅ 支持对象配置 |

### 验证
```bash
npx vitest run components/dropdown
# ✅ 22 passed, 0 failed
```

---

## 34. Button 按钮 ✅ 已完成

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
| --- | --- | --- | --- | --- |
| `shape` prop | 高 | ✅ `circle`/`round`/`square` | ❌ 缺失 | ✅ 新增 `shape` 支持 |
| `href` + `target` | 高 | ✅ 渲染为 `<a>` | ❌ 缺失 | ✅ 新增 href/target |
| `loading` delay | 中 | ✅ `{ delay: number }` | ❌ 仅 boolean | ✅ 支持延迟显示 |
| `iconPosition` | 中 | ✅ `start`/`end` | ❌ 缺失 | ✅ 新增图标位置控制 |

### 验证
- `npx vitest run components/button`：**20 passed**

---

## 35. Checkbox 多选框 ✅ 已完成(含Bug修复)

### 【对比基准】
- 参考: `/Users/hmfw/Downloads/ant-design-master/components/checkbox/`

### 【发现的差异/问题表】

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| CheckboxChangeEvent 结构 | 高 | 包含 `target: { checked, value }` | 直接传递原生 Event | ✅ 新增完整事件结构 |
| indeterminate 状态设置 | 高 | 通过 ref.input.indeterminate 设置 | 仅 CSS 类名 | ✅ 修复:设置 DOM 属性 |
| 受控模式 update:checked | Bug | 受控时应触发 update:checked | 受控时也修改内部状态 | ✅ 修复 |

### 验证
```bash
npx vitest run components/checkbox
# ✅ PASS (34) FAIL (0)
```

---

## 36. Radio 单选框 ✅ 已完成(含Bug修复)

### 【对比基准】
- 参考: `/Users/hmfw/Downloads/ant-design-master/components/radio/`

### 【发现的差异/问题表】

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| RadioChangeEvent 结构 | 高 | 包含 `target: { checked, value }` | 直接传递原生 Event | ✅ 新增完整事件结构 |
| Radio.Button 样式 | 高 | 独立的按钮样式 | 样式不完整 | ✅ 补全样式 |
| buttonStyle 切换 | 中 | 支持 outline/solid | 不支持 | ✅ 新增支持 |

### 验证
```bash
npx vitest run components/radio
# ✅ PASS (28) FAIL (0)
```

---

## 37. Switch 开关 ✅ 已完成(含Bug修复)

### 【对比基准】
- 参考: `/Users/hmfw/Downloads/ant-design-master/components/switch/`

### 【发现的差异/问题表】

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| loading 状态禁用交互 | 高 | loading 时禁用点击 | 未禁用 | ✅ 修复 |
| checkedChildren 显示逻辑 | 中 | 根据状态显示不同内容 | 逻辑不完整 | ✅ 修复 |
| checkedValue/unCheckedValue | 中 | 支持自定义值 | 不支持 | ✅ 新增支持 |

### 验证
```bash
npx vitest run components/switch
# ✅ PASS (17) FAIL (0)
```


---

## 38. Input 输入框 ✅ 已完成

### 对比基准
- 参考: `/Users/hmfw/Downloads/ant-design-master/components/input/`

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| Input：prefix/suffix 未从 props 读取（仅 slot） | 🐛 Bug | 支持 prefix/suffix 作为 props（ReactNode） | 类型已声明但仅从 slot 读取，props 被忽略 | 增加 props 读取并回退 slot，现同时支持 props.prefix 与 slots.prefix |
| Input：allowClear 不支持对象配置 | 高 | allowClear 可为 boolean 或 { clearIcon, disabled } | 仅支持 boolean | 增加对象配置，clearIcon 默认 CloseOutlined，支持 disabled |
| Input：showCount 不支持 formatter | 高 | showCount 可为 boolean 或 { formatter } 自定义显示 | 仅 boolean，固定显示 'N / max' | 增加对象配置，支持 formatter 函数 |
| Input：未暴露 focus()/blur() 方法 | 🐛 Bug | 通过 ref 暴露 focus(options) 和 blur() | 未暴露任何方法 | 增加 expose()，暴露 focus({ preventScroll, cursor })、blur() 及 input ref |
| Input：size 未从 config.componentSize 合并 | 中 | 未传时从 context 合并 size | 硬编码默认 'middle'，无 context 合并 | 改为 computed(() => props.size ?? config.value.componentSize) |
| Input：未透传 id prop | 高 | 将 id 透传到原生 input | 未声明也未透传 id | 增加 id prop 并透传到 input 元素 |
| Input：缺少 rootClassName prop | 高 | 支持 rootClassName 控制外层样式 | 无 rootClassName | 增加 rootClassName，应用到 affix-wrapper |
| Input：未触发 onPressEnter 事件 | 中 | 除 pressEnter 外还触发 onPressEnter | 仅触发 pressEnter | 增加 onPressEnter 触发（两个事件均触发以兼容） |
| InputPassword：缺少 iconRender prop | 🐛 Bug | 支持 iconRender(visible) 自定义切换图标 | 硬编码 emoji 图标（🙈/👁） | 增加 iconRender，默认用 EyeOutlined（EyeInvisibleOutlined 待图标库补充） |
| InputPassword：缺少 action prop | 中 | 支持 action='click'\|'hover' 触发切换 | 仅支持 click | 增加 action，通过动态事件绑定支持 click/hover |
| InputPassword：visibilityToggle 不支持对象配置 | 高 | visibilityToggle 可为 boolean 或 { visible, onVisibleChange } | 仅 boolean | 增加对象配置，支持受控 visible 与 onVisibleChange 回调 |
| InputPassword：缺少 focus()/blur() 方法 | 🐛 Bug | 暴露 focus/blur 方法 | 未暴露 | 增加 expose()，暴露 focus(options)、blur() 及 input ref |
| TextArea：autoSize 未实现 | 🐛 Bug | 支持 autoSize 为 boolean 或 { minRows, maxRows } | 类型已声明但未实现 | 基于 scrollHeight 动态计算行数实现 autoSize |
| TextArea：allowClear 未实现 | 🐛 Bug | 支持 allowClear 清除按钮 | 类型已声明但未实现 | 增加 allowClear，支持对象配置（clearIcon、disabled） |
| TextArea：showCount 不支持 formatter | 高 | showCount 可为 boolean 或 { formatter } | 仅 boolean | 增加对象配置，支持 formatter 函数 |
| TextArea：缺少 focus()/blur() 方法 | 🐛 Bug | 暴露 focus/blur 方法 | 未暴露 | 增加 expose()，暴露 focus(options)、blur() 及 resizableTextArea ref |
| InputSearch：loading prop 未实现 | 🐛 Bug | loading=true 时显示 LoadingOutlined | 声明了 prop 但无视觉效果 | 增加 LoadingOutlined（hmfw-icon-loading 动画），loading 时按钮禁用 |
| InputSearch：缺少 searchIcon prop | 高 | 支持自定义 searchIcon | 硬编码 emoji 🔍 | 增加 searchIcon，默认 SearchOutlined |
| InputSearch：onSearch 缺少 info.source 参数 | 🐛 Bug | onSearch(value, event, { source: 'input'\|'clear' }) | 仅 onSearch(value) | 增加 event 与 info 参数，按钮/回车时 source='input' |
| InputSearch：缺少 focus()/blur() 方法 | 🐛 Bug | 暴露 focus/blur 方法 | 未暴露 | 增加 expose()，暴露 focus(options)、blur() 及 input ref |
| 全部：addonBefore/addonAfter 未实现 | 低 | 已废弃，推荐 Space.Compact | 类型已声明但未实现 | 从类型与文档移除（v6 已废弃，改用 Space.Compact） |

### 改动文件
- `components/input/Input.tsx`
- `components/input/types.ts`
- `components/input/index.ts`
- `components/input/style/index.css`
- `components/input/__tests__/Input.test.tsx`
- `docs/demos/input/InputAddon.vue`
- `docs/demos/input/input.md`

### 验证
```bash
npx vitest run components/input
# ✅ 61 passed (36 Input + 25 InputNumber), 0 failed
```

### 遗留待办
- Input.Group — 已废弃组件，改用 Space.Compact
- Input.OTP — 独立组件尚未实现
- variant prop（outlined/filled/borderless/underlined）— 需主题系统支持
- count prop（高级 showCount，含 max/strategy/exceedFormatter）— 复杂特性
- 语义化 classNames/styles props（函数式，带 props 上下文）
- RTL 支持（direction='rtl'）
- Form 集成（hasFeedback、feedbackIcon，来自 FormItemInputContext）
- useRemovePasswordTimeout hook（密码字段安全特性）
- TextArea resize 脏标记跟踪（用于 resize: both）
- EyeInvisibleOutlined 图标 — 图标库缺失，暂用 emoji 回退
- 输入法组合事件处理（onCompositionStart/End）
- onSearch 事件中 allowClear 的 'clear' source
- enterButton 作为自定义 ReactElement/Button 组件
- InputSearch 的 Space.Compact 集成
- addonBefore/addonAfter — 已废弃，从 API 移除

---

## 39. InputNumber 数字输入框 ✅ 已完成(含Bug修复)

### 对比基准
- 参考: `/Users/hmfw/Downloads/ant-design-master/components/input-number`

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| formatter 函数签名 | 🐛 Bug | formatter: (value, info: { userTyping, input }) => string | formatter: (value) => string，缺少 info 参数 | 修正 formatter，接收含 userTyping/input 的 info 对象，对齐 v6 签名 |
| suffix prop | 高 | 支持 suffix（v6 5.20.0 新增） | 无 suffix | 增加 suffix，支持 slot，渲染在 input 之后 |
| variant prop | 高 | variant：'outlined'\|'filled'\|'borderless'\|'underlined'（默认 outlined） | 无 variant，仅 outlined 样式 | 增加 variant，实现全部 4 种变体及对应 CSS |
| ref 方法（focus/blur/nativeElement） | 高 | 暴露 focus({cursor?, preventScroll?})、blur()、nativeElement | 未暴露任何方法 | 增加 expose()，focus 支持 cursor（start\|end\|all）与 preventScroll |
| mode prop | 中 | mode：'input'\|'spinner'（默认 input），spinner 显示 +/− 图标 | 无 mode，固定 input 模式（▲/▼） | 增加 mode，spinner 模式显示 +/− 图标 |
| controls 对象形式自定义图标 | 中 | controls：boolean \| { upIcon?, downIcon? } | controls 仅 boolean | 扩展 controls 支持对象，可自定义 upIcon/downIcon |
| changeOnBlur prop | 中 | changeOnBlur：boolean（默认 true），控制失焦是否触发 onChange | 失焦总是触发 change | 增加 changeOnBlur（默认 true）控制失焦行为 |
| changeOnWheel prop | 中 | changeOnWheel：boolean，聚焦时允许滚轮改值 | 无滚轮支持 | 增加 changeOnWheel 与 handleWheel，仅聚焦且非 disabled/readOnly 时生效 |
| decimalSeparator prop | 中 | decimalSeparator：string，自定义小数分隔符（如欧式 ','） | 固定用 '.' | 增加 decimalSeparator，formatDisplay/parseInput 处理自定义分隔符 |
| onStep 的 emitter 字段 | 低 | onStep info 含 emitter：'handler'\|'keydown'\|'wheel' | onStep info 仅有 offset 与 type | 增加 emitter 字段，区分 step 来自点击/键盘/滚轮 |
| without-controls 类名 | 低 | controls=false 时加 .ant-input-number-without-controls | 隐藏 controls 时无类名 | 增加 .hmfw-input-number-without-controls 类与 CSS 隐藏 handler-wrap |

### 改动文件
- `components/input-number/InputNumber.tsx`
- `components/input-number/style/index.css`
- `components/input-number/__tests__/InputNumber.test.tsx`
- `docs/demos/input-number/input-number.md`
- `docs/demos/input-number/InputNumberVariant.vue`
- `docs/demos/input-number/InputNumberSuffix.vue`
- `docs/demos/input-number/InputNumberMode.vue`
- `docs/demos/input-number/InputNumberFormatter.vue`

### 验证
```bash
npx vitest run components/input-number
# ✅ 25 passed, 0 failed
```

### 遗留待办
- 语义化 classNames/styles props（低优先，需全库语义系统）
- RTL 支持（需全局 direction 上下文）
- Form 集成上下文（hasFeedback、feedbackIcon、isFormItemInput）
- Space.Compact 集成替代 addon（需 Space 组件）
- ConfigProvider size/disabled 上下文合并（已用基础 usePrefixCls）
- 设计 token 系统集成（handleVisible、handleBg 等，当前硬编码颜色）
- stringMode 完整实现（prop 已存在但高精度小数未充分测试）

---

## 40. Slider 滑动输入条 ✅ 已完成(含Bug修复)

### 对比基准
- 参考: `/Users/hmfw/Downloads/ant-design-master/components/slider/`

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| range 模式下点击 mark 标签 | 🐛 Bug | range 模式下点击 mark 标签会把最近的滑块移到该值 | setValue(mv) 总是设单值，破坏 range 模式 | 增加 handleMarkClick()，计算到两个滑块的距离并移动最近的一个 |
| 键盘导航 | 高 | 支持方向键（←/→/↑/↓）、Home、End，keyboard prop（默认 true） | 完全无键盘支持 | 增加 handleKeyDown()，支持方向键/Home/End，增加 keyboard prop（默认 true），遵守 disabled |
| step=null 支持 | 高 | step 为 null 时仅吸附到 marks、min、max | step 类型仅 number，snapToStep 总用步长运算 | step 类型改为 number\|null，snapToStep 在 step 为 null 时查找最近 mark/min/max |
| marks 对象形式 | 高 | marks 支持 string 与 {label, style?} 两种格式 | marks 仅支持 string | marks 类型改为 Record<number, string \| {label, style?}>，渲染时提取 label 并应用 style |
| tooltip.open 受控可见性 | 中 | tooltip.open 控制显隐：true 常显、false 常隐、undefined 悬停/拖动时显示 | tooltip 仅悬停/拖动时显示，无法强制常显/常隐 | 增加 shouldShowTooltip()，优先看 tooltip.open，回退悬停/拖动状态 |
| dots prop | 中 | dots 在每个 step 间隔渲染圆点 | 无 dots，仅 marks 渲染圆点 | 增加 dots（boolean，默认 false），dots=true 且 step 有效时生成 dotPoints 并渲染独立圆点 |
| tooltip.formatter 类型 | 低 | formatter 可返回 string 或 null | formatter 类型仅返回 string | tooltip.formatter 类型改为 (value) => string\|null |
| draggableTrack | 低 | range 可为对象，draggableTrack 允许拖动轨道本身 | 未实现 | 延后 — 需轨道拖动手势处理 |
| editable/minCount/maxCount | 低 | range 可为对象，editable、minCount/maxCount 动态增删滑块 | 未实现 | 延后 — 需动态滑块管理 |
| 多滑块（>2） | 低 | 通过数组值支持超过 2 个滑块 | 仅支持单滑块或双滑块 range | 延后 — 需数组值处理与多滑块渲染 |
| focus()/blur() 方法 | 低 | 通过 ref 暴露 focus() 和 blur() | 未暴露 | 延后 — 需 defineExpose 与滑块 ref 管理 |
| onFocus/onBlur 事件 | 低 | 触发 onFocus 与 onBlur | 无 focus/blur 事件 | 延后 — 低优先，需要时再加 |
| autoFocus prop | 低 | autoFocus 挂载时聚焦 | 未实现 | 延后 — 需 onMounted focus 调用 |
| 语义化 classNames/styles | 低 | 支持 root/tracks/track/rail/handle 语义化定制 | 无语义化定制 | 延后 — 全库统一处理 |
| orientation prop | 低 | orientation（'horizontal'\|'vertical'）作为 vertical 布尔的替代 | 仅 vertical 布尔 | 延后 — 当前 vertical 布尔已足够 |
| tooltip placement/getPopupContainer | 低 | tooltip.placement 与 getPopupContainer 控制定位 | tooltip 总渲染在滑块上方 | 延后 — 需 Tooltip 组件集成 |

### 改动文件
- `components/slider/Slider.tsx`
- `components/slider/__tests__/Slider.test.tsx`
- `docs/demos/slider/slider.md`
- `docs/demos/slider/SliderMarks.vue`
- `docs/demos/slider/SliderTooltip.vue`
- `docs/demos/slider/SliderVertical.vue`
- `docs/demos/slider/SliderDots.vue`

### 验证
```bash
npx vitest run components/slider
# ✅ 33 passed, 0 failed
```

### 遗留待办
- draggableTrack — 需轨道拖动手势处理
- editable/minCount/maxCount — 需动态滑块增删
- 多滑块（>2）— 需数组值处理
- focus()/blur() 方法 — 需 defineExpose
- onFocus/onBlur 事件 — 低优先
- autoFocus prop — 需 onMounted focus
- 语义化 classNames/styles — 全库统一处理
- orientation prop — vertical 布尔已足够
- tooltip placement/getPopupContainer — 需 Tooltip 组件集成
- RTL 支持 — 全库统一处理
- ariaLabelForHandle/ariaLabelledByForHandle/ariaValueTextFormatterForHandle — 高级 a11y props

---

## 41. Select 选择器 ✅ 已完成(含Bug修复)

### 对比基准
- 参考: `/Users/hmfw/Downloads/ant-design-master/components/select`

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| onChange 事件签名 | 🐛 Bug | onChange(value, option) 同时传值与 option 对象 | onChange(value) 仅传值，缺 option 参数 | 修正：onChange 现传 (value, option)，option 为 SelectOption\|SelectOption[]，对齐 AntD |
| labelInValue 支持 | 高 | labelInValue 将值转为 {value, label, key} 格式 | 不支持 | 实现：增加 labelInValue、值归一化与 LabeledValue 类型，开启时触发 {value,label,key} 对象 |
| tags 模式区分 | 高 | tags 模式允许创建新选项，支持 tokenSeparators 自动分词，回车建标签 | tags 与 multiple 完全相同，无动态创建 | 实现：增加 tokenSeparators，回车/分隔符输入时动态创建选项，增加 isTags 计算标记 |
| maxCount prop | 高 | maxCount 限制 multiple/tags 模式的选择数量（区别于限制显示的 maxTagCount） | 不支持 | 实现：增加 maxCount，在 selectOption 中强制，达上限阻止选择 |
| OptGroup 支持 | 高 | 含 'options' 键的嵌套选项渲染为带标签的分组 | 不支持 | 实现：增加 flatOptions 扁平化嵌套结构，renderOptions 递归渲染分组（.hmfw-select-item-group 样式） |
| optionRender prop | 高 | optionRender(option, {index}) 自定义下拉项渲染 | 不支持 | 实现：增加 optionRender，集成到 renderOptions |
| labelRender prop | 高 | labelRender(LabeledValue) 自定义已选标签显示 | 不支持 | 实现：增加 labelRender，用于单选模式的 renderSelectedLabel |
| tagRender prop | 高 | tagRender({label, value, closable, onClose}) 自定义 multiple/tags 标签渲染 | 不支持 | 实现：增加 tagRender，集成到 renderTag，支持 closable/onClose |
| 键盘导航 | 中 | ArrowUp/Down 导航、Enter 选择、Escape 关闭、activeIndex 跟踪 | 无键盘导航 | 实现：增加 handleKeydown（上下/回车/Esc）、activeIndex ref 与 active 态样式 |
| focus/blur 方法 | 中 | 通过 ref 暴露 focus() 和 blur() | 未暴露 | 实现：增加 focus/blur 并通过 expose() 暴露 |
| fieldNames prop | 中 | fieldNames 自定义 label/value/options/groupLabel 字段名 | 硬编码 'label'/'value'/'options' | 实现：增加 fieldNames（含默认值），labelField/valueField/optionsField 计算属性全程使用 |
| maxTagPlaceholder prop | 中 | maxTagPlaceholder 自定义溢出标签显示（string 或函数） | 硬编码 '+N' | 实现：增加 maxTagPlaceholder，支持 string\|function，向函数传 omittedValues |
| autoClearSearchValue prop | 中 | autoClearSearchValue 控制选择后是否清空搜索（multiple/tags 默认 true） | 总是清空搜索文本 | 实现：增加 autoClearSearchValue（默认 true），selectOption 中条件清空 |
| onFocus/onBlur 事件 | 中 | 触发 focus/blur 事件 | 未触发 | 实现：emits 增加 focus/blur，在 selector 的 onFocus/onBlur 中触发 |
| tabindex 与键盘聚焦 | 中 | selector 有 tabindex 可键盘聚焦 | 无 tabindex，不可键盘访问 | 实现：selector 增加 tabindex={disabled ? -1 : 0} 与 onKeydown |
| 活动项悬停跟踪 | 低 | 鼠标悬停更新 activeIndex，保持键盘导航连续 | 无悬停跟踪 | 实现：renderOptions 增加 onMouseenter 更新 activeIndex |

### 改动文件
- `components/select/Select.tsx`
- `components/select/types.ts`
- `components/select/index.ts`
- `components/select/style/index.css`
- `components/select/__tests__/Select.test.tsx`
- `docs/demos/select/SelectLabelInValue.vue`
- `docs/demos/select/SelectTags.vue`
- `docs/demos/select/SelectOptGroup.vue`
- `docs/demos/select/SelectMaxCount.vue`
- `docs/demos/select/select.md`

### 验证
```bash
npx vitest run components/select
# ✅ 16 passed, 0 failed
```

### 遗留待办
- 虚拟滚动（listHeight、listItemHeight、virtual props）— 需 rc-virtual-list 或自实现
- 语义化 classNames/styles props — 需语义化 DOM 系统
- 自定义图标（prefix、suffixIcon、removeIcon、menuItemSelectedIcon、clearIcon、loadingIcon、searchIcon）— 当前硬编码 Unicode
- popupRender prop（自定义下拉内容）
- getPopupContainer prop（自定义 portal 容器）
- placement prop（bottomLeft/bottomRight/topLeft/topRight）
- variant prop（outlined/borderless/filled/underlined）
- defaultOpen 与 defaultActiveFirstOption props
- optionLabelProp prop
- showSearch 对象形式（filterSort、optionFilterProp、searchValue、searchIcon 子属性）
- maxTagTextLength prop
- onInputKeyDown、onPopupScroll、onActive 事件
- RTL 支持
- 响应式 maxTagCount

---

## 42. Cascader 级联选择 ✅ 已完成(含Bug修复)

### 对比基准
- 参考: `/Users/hmfw/Downloads/ant-design-master/components/cascader/`

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| change 事件签名 | 🐛 Bug | onChange(value, selectedOptions)，selectedOptions 为完整 option 对象数组 | onChange(value, labels)，labels 为字符串数组 | 修正：change 现传 (value, selectedOptions) 完整对象；emitChange 调 getOptionPath 传 option 对象 |
| displayRender 签名 | 🐛 Bug | displayRender(labels, selectedOptions) 同时接收标签数组与 option 对象 | displayRender(labels) 仅接收标签数组 | 修正：displayRender 增加 selectedOptions 第二参；displayText 计算传 getOptionPath 结果 |
| multiple 多选模式 | 高 | 支持多选，值为路径数组 [[a,b],[c,d]]，显示标签与复选框 UI | 声明了 multiple 但完全未实现 | 实现：normalizeValue 处理多选格式，UI 显示带删除按钮的标签、菜单复选框，handleOptionClick 切换选择逻辑 |
| open 受控状态 | 🐛 Bug | 下拉显隐变化时触发 onOpenChange | open 受控但未触发 update:open | 修正：在 open()/close() 中增加 update:open 触发 |
| focus/blur 方法 | 高 | 通过 ref 暴露 focus() 和 blur() | 未暴露 | 实现：expose({ focus, blur })，调用 inputRef.value?.focus/blur |
| defaultOpen prop | 中 | defaultOpen 控制初始下拉显隐 | 缺失 | 实现：innerOpen 用 props.defaultOpen ?? false 初始化 |
| notFoundContent prop | 中 | 可自定义空状态文本 | 硬编码 '无匹配结果' | 实现：增加 notFoundContent（默认 '无匹配结果'），用于空状态渲染 |
| loadData prop | 高 | 支持 loadData 回调懒加载 | 缺失 | 实现：增加 loadData，handleOptionClick 展开无子节点的非叶节点时调用并传路径 |
| maxTagCount/maxTagPlaceholder/maxTagTextLength | 中 | 控制多选模式标签显示 | 缺失 | 实现：增加三者，按 maxTagCount 截断标签、溢出显示占位符、按 maxTagTextLength 截断文本 |
| showCheckedStrategy prop | 低 | 控制多选模式选中项显示方式（SHOW_PARENT/SHOW_CHILD） | 缺失 | 增加 prop（默认 SHOW_PARENT），导出 SHOW_PARENT/SHOW_CHILD 常量。完整策略逻辑延后（复杂树遍历） |
| CascaderOption.value 类型 | 中 | value 可为 string\|number | 类型仅允许 string | 修正：CascaderOption 的 value 改为 string\|number，getValue 返回 string\|number |
| 多选模式 UI 样式 | 中 | 标签带背景、删除图标、自动换行、最小高度 | 无多选专属样式 | 实现：增加 .hmfw-cascader-multiple，自适应高度、标签背景/内边距/删除按钮、菜单复选框样式 |

### 改动文件
- `components/cascader/Cascader.tsx`
- `components/cascader/types.ts`
- `components/cascader/index.ts`
- `components/cascader/style/index.css`
- `components/cascader/__tests__/Cascader.test.tsx`
- `docs/demos/cascader/CascaderMultiple.vue`
- `docs/demos/cascader/cascader.md`

### 验证
```bash
npx vitest run components/cascader
# ✅ 23 passed, 0 failed
```

### 遗留待办
- variant prop（outlined/filled/borderless）— 需共享表单变体系统
- placement prop — 需共享下拉定位系统
- prefix prop — 低优先视觉增强
- 自定义图标 props（removeIcon/clearIcon/suffixIcon/expandIcon/loadingIcon）— 需图标系统集成
- getPopupContainer prop — 需 portal/teleport 容器定制
- popupRender prop — 自定义下拉渲染包裹
- showSearch 配置对象（autoClearSearchValue、filter、limit、matchInputWidth、render、sort、searchIcon）— 当前仅 boolean，完整配置需类 rc-cascader 搜索引擎
- searchValue 受控搜索 — 需双向搜索状态控制
- tagRender 自定义标签渲染 — 中优先，需 render prop 模式
- optionRender 自定义选项渲染 — 中优先
- Panel 导出（独立 CascaderPanel 组件）— 需单独 Panel 实现
- showCheckedStrategy 完整逻辑 — prop 已存在但 SHOW_PARENT/SHOW_CHILD 的树遍历显示逻辑未实现（复杂的父子选中状态管理）
- 键盘导航（方向键、回车、Esc）— 无障碍增强
- RTL 支持 — 需全局 direction 上下文
- 语义化 classNames/styles props — 需语义化 prop 系统
- 大数据集虚拟滚动 — 性能优化

---

## 43. TreeSelect 树选择 ✅ 已完成(含Bug修复)

### 对比基准
- 参考: `/Users/hmfw/Downloads/ant-design-master/components/tree-select/`

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| 搜索仅过滤已展平节点 | 🐛 Bug | 搜索遍历整棵树，自动展开匹配项的祖先 | flatNodes 仅过滤可见（已折叠）节点，嵌套折叠节点搜不到 | 重写搜索：遍历整棵树，收集 matchKeys + ancestorKeys，用 forceExpand 标志显示匹配路径 |
| selectable:false 声明但无效 | 🐛 Bug | 遵守 node.selectable（默认 true） | TreeSelectNode 声明了 prop 但 selectNode 从不检查 | 增加 selectable 检查：`if (!selectable \|\| node.disabled \|\| props.disabled) return` |
| treeDefaultExpandAll 仅在 setup 计算一次 | 🐛 Bug | 响应式：treeData 变化时重新展开 | getAllKeys 仅在 ref 初始化时调用，不更新 | 包进 computed initExpandedKeys，watch 同步 expandedKeys.value |
| treeCheckable 仅切换单节点 | 🐛 Bug | 父子级联：勾选父节点勾选全部后代，显示半选态 | 把 checkable 当 multiple，无级联逻辑 | 实现 conductCheck（自叶向上级联）、descendantLeaves（向下级联）、半选渲染（.hmfw-tree-select-tree-checkbox-indeterminate） |
| 缺少受控 open | 高 | 支持 open prop + onOpenChange | 仅 innerOpen，无受控模式 | 增加 open/defaultOpen，computed isOpen = props.open ?? innerOpen，触发 update:open/openChange/dropdownVisibleChange |
| 缺少 onSelect 事件 | 高 | 节点点击时触发 onSelect(value, node, extra) | 仅 change 事件 | 在 selectNode 中增加 emit('select', key, node) |
| 缺少 onTreeExpand 事件 | 高 | 展开/折叠时触发 onTreeExpand(expandedKeys) | 无事件 | 在 toggleExpand 中增加 emit('treeExpand', expandedKeys.value) |
| 缺少 showCheckedStrategy | 高 | SHOW_ALL/SHOW_PARENT/SHOW_CHILD 控制返回哪些勾选节点 | 总是返回所有勾选叶节点 | 增加 showCheckedStrategy（默认 SHOW_CHILD），conductCheck 后在 selectNode 中过滤 |
| 缺少 treeCheckStrictly | 高 | 为 true 时父子选择互相独立 | 不支持 | 增加 treeCheckStrictly，selectNode 分支：strict 则简单切换，否则级联 |
| 缺少 status prop | 中 | status='error'\|'warning' 用于校验状态 | 不支持 | 增加 status，类 .hmfw-tree-select-status-error/warning，CSS 红/橙边框+阴影 |
| 缺少 maxCount | 中 | 多选模式限制最大选中数 | 不支持 | 增加 maxCount，selectNode 守卫：`if (maxCount !== undefined && newVals.length > maxCount) return` |
| 缺少 notFoundContent | 中 | 自定义空文本 | 硬编码 '暂无数据' | 增加 notFoundContent（默认 '暂无数据'），渲染于 dropdown-empty |
| 缺少 treeDefaultExpandedKeys | 中 | 默认展开的 key 数组 | 仅 treeDefaultExpandAll | 增加 treeDefaultExpandedKeys，合并进 initExpandedKeys 计算 |
| 缺少 autoClearSearchValue | 中 | 多选模式选择后自动清搜索（默认 true） | 总是清空 | 增加 autoClearSearchValue（默认 true），条件 `if (props.autoClearSearchValue) searchText.value = ''` |
| 节点缺少 disableCheckbox | 低 | node.disableCheckbox 独立于 node.disabled 禁用复选框 | 不支持 | TreeSelectNode 增加 disableCheckbox，selectNode 中检查 + 类 .hmfw-tree-select-tree-checkbox-disabled |
| 节点缺少 isLeaf | 低 | node.isLeaf 标记叶节点（用于异步加载） | 未声明 | TreeSelectNode 增加 isLeaf?: boolean（暂仅类型，无逻辑） |

### 改动文件
- `components/tree-select/types.ts`
- `components/tree-select/TreeSelect.tsx`
- `components/tree-select/style/index.css`
- `components/tree-select/__tests__/TreeSelect.test.tsx`
- `docs/demos/tree-select/tree-select.md`
- `docs/demos/tree-select/TreeSelectCheckable.vue`
- `docs/demos/tree-select/TreeSelectMultiple.vue`
- `docs/demos/tree-select/TreeSelectSearch.vue`

### 验证
```bash
npx vitest run components/tree-select
# ✅ 19 passed, 0 failed
```

### 遗留待办
- loadData / 异步加载（需 Promise 处理 + treeLoadedKeys 状态）
- treeDataSimpleMode（含 pId 引用的扁平列表）
- labelInValue（返回 {value, label, halfChecked} 对象）
- maxTagCount / maxTagPlaceholder（标签显示限制）
- maxTagTextLength（截断标签文本）
- tagRender（自定义标签渲染）
- treeLine（显示连接线）
- treeIcon（标签前显示图标）
- switcherIcon（自定义展开/折叠图标）
- treeExpandAction（click/doubleClick 展开）
- treeExpandedKeys 受控展开
- filterTreeNode 自定义函数（当前硬编码 label.includes）
- treeNodeFilterProp（按哪个字段过滤）
- treeNodeLabelProp（显示哪个字段）
- treeTitleRender（自定义节点渲染）
- getPopupContainer（自定义下拉容器）
- placement（下拉位置）
- popupMatchSelectWidth（下拉宽度行为）
- popupRender（自定义下拉包裹）
- 虚拟滚动（rc-tree-select 特性）
- onPopupScroll 事件
- prefix/suffixIcon 定制（当前硬编码 ▾）
- removeIcon 定制
- variant prop（outlined/borderless/filled/underlined）
- 语义化 classNames/styles（嵌套对象 API）
- RTL 支持
- 无障碍（ARIA 属性、键盘导航）

---

## 44. AutoComplete 自动完成 ✅ 已完成(含Bug修复)

### 对比基准
- 参考: `/Users/hmfw/Downloads/ant-design-master/components/auto-complete/`

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| size prop 类名映射 | 🐛 Bug | AutoComplete 包裹 Select，Select 用 Input，Input CSS 定义 -lg/-sm 后缀 | 生成 hmfw-input-affix-wrapper-small/middle/large，但 Input CSS 只有 -lg/-sm，size 样式静默失效 | 增加 sizeSuffix() 映射 'small'→'sm'、'large'→'lg'、'middle'→''，对齐 Input CSS 约定，size 样式正常生效 |
| defaultActiveFirstOption | 高 | defaultActiveFirstOption（默认 true）下拉打开时高亮首个非禁用项 | 未实现，打开时从不高亮首项 | 增加 prop（默认 true）、firstEnabledIndex 计算、resetActive() 逻辑及 watcher，选项异步变化时重新高亮（受控搜索常见模式） |
| 键盘导航跳过禁用项 | 高 | ArrowUp/Down 跳过禁用项；Enter 不选禁用项 | 导航遍历所有项含禁用；Enter 可能选中禁用项 | 重写 moveActive() 循环至非禁用项；handleSelect() 守卫禁用；handleKeydown 的 Enter 选前检查 opt.disabled |
| notFoundContent | 中 | notFoundContent 在选项为空时显示自定义文本 | 未实现，空选项列表从不显示面板 | 增加 notFoundContent。filteredOptions.length > 0 或设了 notFoundContent 时渲染下拉，增加 .hmfw-auto-complete-dropdown-empty 类 |
| allowClear 对象含 clearIcon | 中 | allowClear 可为 boolean \| { clearIcon } 自定义清除图标 | allowClear 仅 boolean，清除图标硬编码 '✕' | allowClear 类型改为 boolean \| { clearIcon?: VNodeChild }，增加 renderClearIcon() 渲染自定义图标 |
| defaultOpen | 中 | defaultOpen 设置下拉初始打开状态 | 未实现，下拉总是初始关闭 | 增加 defaultOpen，innerOpen 用 props.defaultOpen ?? false 初始化 |
| openChange 事件 | 中 | 下拉开关时触发 onOpenChange(open) | 未实现 | 增加 openChange 事件，抽出 setOpen() 在 innerOpen 变化时触发 |
| focus/blur 方法 | 中 | 通过 ref 暴露 focus() 和 blur() | 未暴露 | 增加 expose({ focus, blur }) 委托给 inputRef.value?.focus/blur() |
| 活动项 scrollIntoView | 低 | 键盘导航时活动项滚动入视 | 未实现 | 增加 scrollActiveIntoView()，在 moveActive() 后调用，守卫 typeof scrollIntoView === 'function' 避免 jsdom 报错 |
| mouseenter 高亮项 | 低 | 悬停选项时高亮（设 activeIndex） | 无悬停高亮，activeIndex 仅键盘改变 | 下拉项增加 onMouseenter 设 activeIndex（跳过禁用项） |
| backfill 跳过禁用项 | 低 | backfill 仅把非禁用项的值写入输入框 | backfill 逻辑存在但未检查 opt.disabled | moveActive() 现只落在非禁用项，backfill 天然跳过禁用 |
| 无活动项时 Enter 关闭下拉 | 低 | activeIndex=-1 时按 Enter 关闭下拉而不选择 | 已正确实现 | 无需改动，现有逻辑已处理 |

### 改动文件
- `components/auto-complete/AutoComplete.tsx`
- `components/auto-complete/types.ts`
- `components/auto-complete/__tests__/AutoComplete.test.tsx`
- `components/auto-complete/style/index.css`
- `docs/demos/auto-complete/auto-complete.md`
- `docs/demos/auto-complete/AutoCompleteAdvanced.vue`

### 验证
```bash
npx vitest run components/auto-complete
# ✅ 28 passed, 0 failed
```

### 遗留待办
- 自定义输入元素（AntD 接受 children 作为自定义 input/textarea，hmfw 仅支持 input）
- 语义化 classNames/styles API（全库统一缺失；AntD 有 classNames.{root,prefix,input,placeholder,content,popup.{root,list,listItem}} 及对应 styles）
- popupMatchSelectWidth / dropdownMatchSelectWidth（控制下拉宽度，需布局测量）
- getPopupContainer（控制下拉 portal 目标，需容器 ref API）
- popupRender / dropdownRender（自定义下拉内容包裹，需 render-prop 模式）
- 虚拟滚动（AntD Select 有 virtual prop，需 rc-virtual-list 或等价实现）
- onPopupScroll 事件（需从下拉转发滚动事件）
- onInputKeyDown 事件（AntD 暴露原始 keydown，hmfw 仅暴露语义事件）
- variant prop（outlined/filled/borderless/underlined，全库 Input 特性缺失）
- showSearch 对象 API（AntD 有 showSearch: { filterOption, onSearch }，hmfw 为顶层 filterOption + search 事件）
- dataSource prop（AntD v6 已废弃，改用 options，hmfw 从未有过）
- Option 复合组件（AntD 导出 AutoComplete.Option 供 JSX children，hmfw 仅 options 数组）
- _InternalPanelDoNotUseOrYouWillBeFired（调试/storybook 面板，非用户向）

---

## 45. DatePicker 日期选择框 ✅ 已完成(含Bug修复)

### 对比基准
- 参考: `/Users/hmfw/Downloads/ant-design-master/components/date-picker/`

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| panelChange 事件从不触发 | 🐛 Bug | 月/年导航与模式切换时触发 panelChange(value, mode) | emits 中声明但从不调用 | 在 prevMonth/nextMonth/prevYear/nextYear 及所有模式切换按钮（年/月/日切换）接入 panelChange 触发 |
| 缺少 defaultOpen prop | 高 | defaultOpen：boolean，初始打开状态 | 不支持，innerOpen 总初始化为 false | 增加 defaultOpen，innerOpen 从 props.defaultOpen ?? false 初始化 |
| Esc 键不关闭面板 | 中 | 按 Esc 关闭选择器面板 | 无键盘处理 | 增加 keydown 监听，Esc 关闭面板 |
| 缺少 presets prop | 高 | presets：PresetItem[] 快捷日期选择 | 不支持 | 增加 presets，在 footer 渲染快捷按钮，支持静态值与函数 |
| 缺少 minDate/maxDate 约束 | 高 | minDate/maxDate：dayjs，限制可选日期范围 | 不支持 | 增加 minDate/maxDate（string），在 selectDate 中阻止越界选择 |
| 缺少 showNow prop | 中 | showNow：boolean，显示「此刻」按钮（优先于 showToday） | 仅支持 showToday | 增加 showNow，为 true 时 footer 显示 locale.DatePicker.now 而非 .today |
| 缺少 renderExtraFooter prop | 中 | renderExtraFooter：() => ReactNode 自定义底部内容 | 不支持 | 增加 renderExtraFooter，在面板底部、操作按钮上方渲染 |
| showTime 仅改格式，无时间 UI | 高 | showTime 渲染时/分/秒列 + 确定按钮 | showTime 仅在 format 追加 HH:mm:ss，时间恒为 00:00:00 | 延后（见待办） |
| picker=week 未实现 | 高 | picker='week' 显示周数，选择整周 | 类型声明但未实现 | 延后（见待办） |

### 改动文件
- `components/date-picker/DatePicker.tsx`
- `components/date-picker/types.ts`
- `components/date-picker/index.ts`
- `components/date-picker/style/index.css`
- `components/date-picker/__tests__/DatePicker.test.tsx`
- `docs/demos/date-picker/DatePickerPresets.vue`
- `docs/demos/date-picker/DatePickerMinMax.vue`
- `docs/demos/date-picker/date-picker.md`

### 验证
```bash
npx vitest run components/date-picker
# ✅ 33 passed, 0 failed
```

### 遗留待办
- showTime 时间选择 UI（时/分/秒列）— 当前 showTime 仅改格式串，时间恒为 00:00:00。完整实现需列滚动器 + 时间状态管理
- picker=week 实现 — 需周数列、按行选择、周显示格式
- disabledTime prop（配合 showTime）— AntD 支持禁用特定时/分/秒
- onOk 事件（配合 showTime）— 当前仅在确定按钮 closePanel
- 多日期选择（multiple prop）— AntD v5.14.0+
- needConfirm prop — AntD v5.14.0+，值变更前需确认
- cellRender prop — 自定义单元格渲染
- panelRender prop — 自定义面板包裹
- components prop — 自定义面板组件（AntD v5.14.0+）
- variant prop（outlined/borderless/filled）— AntD v5.13.0+
- classNames/styles 语义化 DOM 定制 — AntD v6.0.0+
- 默认之外的 prefix/suffix 图标定制
- placement prop（bottomLeft/bottomRight/topLeft/topRight）
- getPopupContainer prop
- inputReadOnly prop
- preserveInvalidOnBlur prop（AntD v5.14.0+）
- order prop 自动排序（AntD v5.14.0+）
- mask 格式（AntD v5.14.0+）
- showWeek prop（AntD v5.14.0+）
- pickerValue/defaultPickerValue 受控面板日期（AntD v5.14.0+）
- focus()/blur() 方法

---

## 46. TimePicker 时间选择框 ✅ 已完成(含Bug修复)

### 对比基准
- 参考: `/Users/hmfw/Downloads/ant-design-master/components/time-picker`

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| hourStep 生成超出范围的小时 | 🐛 Bug | hourStep 正确生成 0 到 23（或 0 到 11）范围内的小时，步长为 hourStep | 使用 Array.from({ length: 24 }, (_, i) => i * hourStep) 生成小时，当 hourStep > 1 时会产生超出 23 的值（如 hourStep=2 时最大值为 46） | 改用 for 循环 i += hourStep，确保不超过最大值（24 或 12） |
| use12Hours 完全不工作 | 🐛 Bug | use12Hours 时显示 1-12 小时 + AM/PM 列，格式化支持 h/hh/a/A token，正确处理午夜和正午 | use12Hours 仅影响小时列生成（且有 bug），无 AM/PM 列，格式化不支持 h/hh/a/A token，无法正确显示 12 小时制时间 | 重写 formatTime 支持 h/hh/a/A token；parseTime 解析 am/pm；增加 AM/PM 列；修正 12 小时制小时计算（0→12, 13→1） |
| displayValue 在面板打开时错误显示 00:00:00 | 🐛 Bug | 未选择值时输入框为空，选择后才显示时间 | displayValue 逻辑为 innerOpen.value \|\| innerH.value \|\| innerM.value \|\| innerS.value，导致面板一打开就显示 00:00:00，即使用户未选择 | 引入 hasValue 标志位，仅在真正选择过值后才显示，避免误导用户 |
| 受控 value 清空后内部状态未重置 | 🐛 Bug | 受控模式下 value 变为 null/undefined 时，输入框清空且内部状态重置 | watch 中仅在 v 存在时更新 innerH/M/S，value 清空时不重置，导致下次打开面板仍显示旧值 | watch 中增加 if (!v) 分支，清空时重置 innerH/M/S 为 0 且 hasValue=false |
| disabledTime 未实现 | 高 | disabledTime 返回 { disabledHours, disabledMinutes, disabledSeconds }，禁用的选项显示为灰色不可点击 | 类型声明了 disabledHours/Minutes/Seconds 三个独立 prop，但未实现禁用逻辑 | 改为单一 disabledTime prop 返回配置对象；在 hours/minutes/seconds computed 中标记 disabled；渲染时添加 disabled class 并阻止点击 |
| hideDisabledOptions 未实现 | 中 | hideDisabledOptions=true 时，禁用的选项从列表中移除 | 未实现 | 在 hours/minutes/seconds computed 中，当 hideDisabledOptions=true 时过滤掉 disabled 项 |
| needConfirm 未实现 | 高 | needConfirm=true 时显示确定按钮，点击后才触发 change；false 时选择即生效 | 始终显示确定按钮且必须点击才生效，无法配置 | 增加 needConfirm prop，仅在 true 时渲染确定按钮；false 时选择即触发 confirmTime |
| changeOnScroll 未实现 | 中 | changeOnScroll=true 时，滚动选择立即触发 change（需配合 needConfirm=false） | 未实现 | 增加 changeOnScroll prop，在 handleHourClick/MinuteClick/SecondClick 中，当 changeOnScroll && !needConfirm 时立即调用 confirmTime |
| renderExtraFooter 未实现 | 中 | renderExtraFooter 在面板底部渲染自定义内容（addon 已废弃，统一用 renderExtraFooter） | 未实现 | 增加 renderExtraFooter prop，在 footer 中增加 footer-extra 区域渲染其返回值 |
| variant 未实现 | 中 | variant 支持 outlined/borderless/filled/underlined 四种样式 | 仅有默认 outlined 样式 | 增加 variant prop，在根元素添加对应 class，CSS 中实现四种样式 |
| placement 未实现 | 低 | placement 控制面板弹出位置（bottomLeft/bottomRight/topLeft/topRight） | 固定 bottomLeft | 增加 placement prop，updatePos 中根据 placement 计算 top/left |
| focus()/blur() 方法未暴露 | 中 | 通过 ref 暴露 focus() 和 blur() 方法 | 未暴露 | 使用 expose({ focus, blur }) 暴露方法，调用 inputRef.value?.focus/blur() |
| change 事件仅传一个参数 | 中 | change 事件传递 (value, timeString) 两个参数 | 仅传递 value 一个参数 | emit('change', str, str) 传递两个参数（Vue 中 value 即 timeString） |
| focus/blur 事件未实现 | 低 | 输入框 focus/blur 时触发对应事件 | 未实现 | 在 input 上添加 onFocus/onBlur 监听，emit 对应事件 |

### 改动文件
- `components/time-picker/TimePicker.tsx`
- `components/time-picker/types.ts`
- `components/time-picker/index.ts`
- `components/time-picker/style/index.css`
- `components/time-picker/__tests__/TimePicker.test.tsx`
- `docs/demos/time-picker/time-picker.md`
- `docs/demos/time-picker/TimePickerDisabled.vue`
- `docs/demos/time-picker/TimePickerConfirm.vue`
- `docs/demos/time-picker/TimePickerVariant.vue`

### 验证
```bash
npx vitest run components/time-picker
# ✅ 27 passed, 0 failed
```

### 遗留待办
- RangePicker（时间范围选择）：AntD 有 TimePicker.RangePicker，hmfw 未实现，需独立组件
- cellRender：自定义单元格渲染（5.4.0+），需完整重构渲染逻辑
- getPopupContainer：自定义浮层容器，当前固定 Teleport to body
- inputReadOnly：设置 input readonly 属性避免移动端虚拟键盘
- previewValue：hover 时预览值（6.0.0+），需增加 hover 状态管理
- classNames/styles 语义化定制：AntD 支持细粒度 classNames.popup.root/content/item 等，hmfw 未实现语义化 API
- popupClassName/popupStyle（已废弃）：AntD 保留向后兼容，hmfw 未实现
- prefix/suffixIcon：自定义前缀后缀图标，当前硬编码 emoji
- allowClear 对象形式：AntD 5.8.0+ 支持 { clearIcon: ReactNode }，hmfw 仅支持 boolean
- status='success'|'validating'：AntD 支持四种状态，hmfw 仅实现 error/warning
- onCalendarChange：RangePicker 专用事件，单选器不适用
- 国际化：placeholder/此刻/确定 等文案硬编码中文，需接入 i18n
- 键盘导航：上下键选择、Enter 确认、Esc 关闭等无障碍支持
- 虚拟滚动：选项过多时性能优化（全库统一缺失）

---

## 47. RangePicker 范围选择器 ✅ 已完成(含Bug修复)

### 对比基准
- 参考: `/Users/hmfw/Downloads/ant-design-master/components/date-picker/`

### 发现的差异/问题表

| 项 | 严重度 | AntD v6 | hmfw修改前 | 处理 |
|---|---|---|---|---|
| disabled 数组形式被忽略 | 🐛 Bug | disabled：boolean \| [boolean, boolean]，逐输入框禁用 | 接受数组但仅判断 typeof === 'boolean'，[true,false] 被当 falsy，两个输入框都保持启用 | 修正：增加 startDisabled/endDisabled 计算属性正确处理数组形式；整体 disabled 类仅在 disabled 为 boolean true 时应用 |
| placeholder 硬编码，未本地化 | 🐛 Bug | placeholder 未传时回退 locale.lang.rangePlaceholder | prop 定义中硬编码默认 ['开始日期','结束日期']，忽略 locale | 修正：placeholder 改为 props.placeholder ?? locale.value.DatePicker.rangePlaceholder，遵守 zh-CN/en-US |
| 缺少受控 open prop | 高 | open?：boolean，受控面板显隐 | 无 open prop，面板状态总是内部 | 增加 open，isOpen = props.open ?? innerOpen；受控时 setOpen 触发 openChange 但不改 innerOpen |
| presets 快捷选择 | 高 | presets: { label, value: [Dayjs,Dayjs] \| (() => [Dayjs,Dayjs]) }[] 快捷范围 | 未实现 | 增加 presets（RangePreset[]），弹层左侧渲染可点击预设列表，value 支持静态数组或工厂函数，applyPreset 提交范围并关闭 |
| order 自动排序 | 中 | order：boolean（默认 true），用户逆序选择时自动排序起止 | 总是在 end < start 时交换（硬编码） | 增加 order（默认 true），仅 props.order 为 true 时 selectDate 交换，允许禁用自动排序 |
| separator 自定义分隔符 | 中 | separator：ReactNode（默认 <SwapRightOutlined />），自定义输入框间分隔符 | JSX 硬编码 '→' | 增加 separator（默认 '→'），在 range-separator 中渲染 {props.separator} |
| allowEmpty 部分范围 | 中 | allowEmpty：[boolean, boolean]（默认 [false,false]），允许起或止为 null | 未实现（提交无校验） | 类型增加 allowEmpty；当前实现未强制（延后至校验层或后续增强） |
| calendarChange 缺少 info 参数 | 中 | onCalendarChange(dates, dateStrings, info: { range: 'start'\|'end' }) | calendarChange 仅传 (value)，无 info | 修正：emitCalendarChange 现传 (value, dates, { range })，range 为 'start'/'end' |
| disabledDate 缺少 info 参数 | 低 | disabledDate(date, info: { from?: Dayjs, type: string }) 条件禁用上下文 | disabledDate(date)，无 info | 更新类型与调用，第二参传 { from: innerValue[0], type: 'date' } |
| hasValue 逻辑不完善 | 低 | 起或止任一有值时显示清除按钮 | 条件为 (displayStart \|\| displayEnd)，可用但基于字符串 | 重构为 hasValue 计算属性，检查 startDate.value \|\| endDate.value（Date\|null），意图更清晰 |
| 已打开时面板不重开 | 低 | 打开时点击触发器为 no-op | openPanel 未守卫 isOpen，可能重复触发 openChange(true) | 在 openPanel 增加 isOpen.value 守卫，避免冗余打开逻辑 |
| 清除时未重置 selecting 状态 | 低 | 清除将选择流程重置到 start | clearValue 未重置 selecting ref | clearValue 现设 selecting.value = 'start' |

### 改动文件
- `components/range-picker/types.ts`
- `components/range-picker/RangePicker.tsx`
- `components/range-picker/index.ts`
- `components/range-picker/style/index.css`
- `components/range-picker/__tests__/RangePicker.test.tsx`
- `docs/demos/range-picker/range-picker.md`
- `docs/demos/range-picker/RangePickerPresets.vue`
- `docs/demos/range-picker/RangePickerDisabled.vue`

### 验证
```bash
npx vitest run components/range-picker
# ✅ 22 passed, 0 failed
```

### 遗留待办
- allowEmpty 校验强制 — prop 已加入类型但未强制；AntD 在提交/失焦时校验，需表单级集成
- RangePreset 类型未在 components/index.ts 重导出 — 本地 index.ts 已导出，共享 index 需手动补充（超出范围）
- showTime / 时间选择 — AntD RangePicker 支持 showTime 做日期时间范围；hmfw 尚无 TimePicker 集成
- picker prop（week/month/quarter/year 范围）— AntD 支持非日期范围；hmfw RangePicker 仅日期
- cellRender / dateRender 自定义单元格 — AntD 允许自定义日期单元格渲染；hmfw 无 render prop
- panelRender 自定义面板布局 — AntD 允许包裹/替换面板；hmfw 面板结构固定
- placement prop（bottomLeft/topRight 等）— AntD 支持 4 种位置；hmfw 总在左下渲染
- variant prop（outlined/filled/borderless）— AntD v6 设计系统；hmfw 尚无变体系统
- needConfirm 模式 — AntD 5.x 增加显式确定按钮；hmfw 在选完第二个日期时自动提交
- defaultPickerValue / pickerValue 受控面板日期 — AntD 允许独立于 value 设置初始面板月份；hmfw 从 value 或 now 推断
- onFocus / onBlur 带 range 信息 — AntD 在输入框 focus/blur 触发 { range: 'start'\|'end' }；hmfw 输入框只读，无 focus 处理
- id prop（输入框 id）— AntD 支持 { start?, end? } 用于无障碍；hmfw 无 id prop
- 多选 — AntD DatePicker 支持多日期；RangePicker 恒为一对
- RTL 支持 — AntD 遵守 direction 上下文；hmfw 无 RTL 布局
- 语义化 classNames/styles — AntD v6 语义化 API 深度定制样式；hmfw 为扁平类结构

