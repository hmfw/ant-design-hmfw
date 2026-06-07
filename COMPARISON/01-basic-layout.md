# 基础/布局（1–12）

← 回到 [COMPARISON 索引](../COMPARISON.md)

包含：Divider · Flex · Space · Typography · Tag · Badge · Alert · Avatar · Empty · Card · Result · Spin

---

## 1. Divider 分割线 ✅ 已完成

**对比基准**: `ant-design-master/components/divider/index.tsx`

### 发现的差异

| 项                                     | AntD v6           | hmfw（修改前）                 | 处理                                        |
| -------------------------------------- | ----------------- | ------------------------------ | ------------------------------------------- |
| `variant` (`solid`/`dashed`/`dotted`)  | ✅ 5.20.0+        | ❌ 仅 `dashed` 布尔            | ✅ 新增 `variant`，`dashed` 作为简写保留    |
| `size` (`small`/`middle`/`large`) 间距 | ✅                | ❌                             | ✅ 新增 `size`，对应 `-sm`/`-md` class      |
| `dotted` 点线样式                      | ✅                | ❌                             | ✅ CSS 新增 dotted（含水平/带文字/垂直）    |
| `titlePlacement` + `start`/`end` 语义  | ✅ 5.24.0+（RTL） | ❌ 用 `orientation` left/right | ⏭️ 未移植：本库无 RTL 体系，保留 left/right |
| 语义化 `classNames`/`styles`           | ✅                | ❌                             | ⏭️ 全库统一缺失，后续统一处理               |

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

| 项                                                                 | AntD v6                                              | hmfw（修改前）          | 处理                                       |
| ------------------------------------------------------------------ | ---------------------------------------------------- | ----------------------- | ------------------------------------------ |
| `justify`/`align` 取值范围                                         | 全集（`start`/`end`/`left`/`right`/`self-start` 等） | 窄子集                  | ✅ 类型拓宽至全集（inline style 直接透传） |
| 死代码 `-rtl: false` class                                         | —                                                    | 恒为 false 的无效 class | ✅ 移除                                    |
| 实现方式：class（`-justify-*`/`-align-*`/`-gap-*`）vs inline style | class                                                | inline style            | ⏭️ 功能等价，保留 inline 方式              |
| `orientation` 别名（同 Divider）                                   | ✅                                                   | ❌                      | ⏭️ 无 RTL 体系，跳过                       |
| `gap` 预设 token 化                                                | token                                                | 硬编码 8/16/24          | ⏭️ 数值一致，可接受                        |

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

| 项                        | 严重度  | 说明                                                                                          | 处理                                                      |
| ------------------------- | ------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `Comment` 未导入          | 🐛 Bug  | `Space.tsx` 引用 `Comment` 但未从 `vue` 导入，解析到全局 DOM `Comment`，注释 VNode 不会被过滤 | ✅ 正确导入并过滤                                         |
| 无 Fragment 展平          | 🐛 Bug  | `v-for` 产生单个 Fragment，整组渲染成「一个」Space item，间距/分隔符全错                      | ✅ 新增 `flattenChildren` 递归展平（对齐 AntD `toArray`） |
| margin 间距不支持换行行距 | ⚠️ 问题 | 用 per-item `margin-right/bottom`，`wrap` 后无行间距                                          | ✅ 改为容器 `column-gap`/`row-gap`（对齐 AntD v6）        |
| `separator` 别名缺失      | 差异    | AntD v6 用 `separator`，`split` 已废弃                                                        | ✅ 新增 `separator`，`split` 保留为别名                   |
| `vertical` 简写缺失       | 差异    | AntD v6 支持 `vertical` 布尔                                                                  | ✅ 新增                                                   |
| `split` 类型为 `any`      | 优化    | 类型不安全                                                                                    | ✅ 改为 `VNode \| string`                                 |
| 语义化 classNames/styles  | 差异    | —                                                                                             | ⏭️ 全库统一缺失，后续处理                                 |
| `Space.Compact` 紧凑模式  | 未实现  | AntD 有 Compact 子组件                                                                        | ⏭️ 记入待办（独立子组件，量较大）                         |

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

| 项                | AntD v6         | hmfw（修改前）                                     | 处理                                              |
| ----------------- | --------------- | -------------------------------------------------- | ------------------------------------------------- |
| `Link` 子组件     | ✅              | ❌ 缺失                                            | ✅ 新增 `Typography.Link`（href/target/disabled） |
| `copyable` 复制   | ✅              | ❌（文档号称有，实际未实现）                       | ✅ 实现：复制按钮+成功态切换+自定义内容/回调      |
| `ellipsis` 省略   | ✅（多行+展开） | ❌（文档号称有）                                   | ✅ 实现单行省略；多行/展开记入待办                |
| 装饰 props 不一致 | 全组件统一      | `italic`/`keyboard` 仅 Text 有，Paragraph/Title 缺 | ✅ 抽 `Base.tsx` 统一，全组件对齐                 |
| 装饰逻辑重复      | 共享 Base       | 三份拷贝                                           | ✅ 抽公共 `Base.tsx`（props/class/装饰/复制）     |
| `editable` 编辑   | ✅              | ❌                                                 | ⏭️ 记入待办（交互复杂）                           |

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

| 项                                 | 严重度      | AntD v6                                        | hmfw（修改前）        | 处理                                      |
| ---------------------------------- | ----------- | ---------------------------------------------- | --------------------- | ----------------------------------------- |
| `closable` 不自动隐藏              | ⚠️ 行为缺失 | 点击关闭后隐藏标签（可 `preventDefault` 阻止） | 仅 emit close，不隐藏 | ✅ 新增 `visible` 状态，自动隐藏 + 可阻止 |
| `href`/`target` 链接               | 差异        | 渲染为 `<a>`                                   | ❌                    | ✅ 新增                                   |
| `disabled`                         | 差异        | ✅                                             | ❌                    | ✅ 新增（禁用 close/href/交互 + 样式）    |
| 关闭键盘可达性                     | a11y        | Enter/Space 触发                               | 仅鼠标                | ✅ 新增 keydown + tabindex                |
| `variant`（filled/solid/outlined） | 差异        | ✅ 替代 `bordered`                             | 仅 `bordered`         | ⏭️ 需重写全部预设色 CSS，记入待办         |
| `Tag.CheckableTagGroup`            | 未实现      | ✅                                             | ❌                    | ⏭️ 记入待办                               |
| 语义化 classNames/styles           | 差异        | ✅                                             | ❌                    | ⏭️ 全库统一处理                           |

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

| 项                               | 严重度 | AntD v6                      | hmfw（修改前）              | 处理                                                   |
| -------------------------------- | ------ | ---------------------------- | --------------------------- | ------------------------------------------------------ |
| `not-a-wrapper` class 反了       | 🐛 Bug | `!children` 时加（独立徽标） | 「有」children 时加（反向） | ✅ 修正逻辑                                            |
| `Badge.Ribbon` 缎带              | 未实现 | ✅                           | ❌                          | ✅ 新增子组件（text/color/placement，预设色+自定义色） |
| 语义化 classNames/styles         | 差异   | ✅                           | ❌                          | ⏭️ 全库统一处理                                        |
| `count` 滚动动画（ScrollNumber） | 差异   | ✅ CSSMotion                 | 静态                        | ⏭️ 视觉增强，记入待办                                  |

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

| 项                           | 严重度      | AntD v6                                 | hmfw（修改前）  | 处理                                    |
| ---------------------------- | ----------- | --------------------------------------- | --------------- | --------------------------------------- |
| `banner` 不自动开图标        | ⚠️ 行为缺失 | `banner && showIcon===undefined → true` | 需手动 showIcon | ✅ 修正（showIcon 改 `undefined` 默认） |
| `title` prop                 | 差异        | v6 用 `title`，`message` 废弃           | 仅 `message`    | ✅ 新增 `title`，`message` 保留为别名   |
| `variant`（outlined/filled） | 差异        | ✅ 6.4.0+                               | ❌              | ✅ 新增 + filled CSS                    |
| `icon` slot 自定义图标       | 差异        | ✅                                      | ❌              | ✅ 新增 icon slot                       |
| 图标用 glyph 而非 SVG        | 视觉        | Filled SVG 图标                         | unicode ✓ℹ⚠✕    | ⏭️ 图标库未含 Filled 系列，记入待办     |
| 语义化 classNames/styles     | 差异        | ✅                                      | ❌              | ⏭️ 全库统一处理                         |

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

| 项                        | 严重度      | AntD v6                       | hmfw（修改前）     | 处理                                               |
| ------------------------- | ----------- | ----------------------------- | ------------------ | -------------------------------------------------- |
| Group 不下发 size/shape   | ⚠️ 功能缺失 | AvatarContext 下发给子 Avatar | 子 Avatar 不继承   | ✅ 新增 `context.ts`（provide/inject），props 优先 |
| `draggable`/`crossOrigin` | 差异        | ✅ img 属性                   | ❌                 | ✅ 新增                                            |
| gap 缩放缺保护            | 小问题      | `gap*2 < nodeWidth` 判断      | 无判断             | ✅ 补充保护条件                                    |
| 死代码 `sizeValue`        | 优化        | —                             | 计算后 `void` 丢弃 | ✅ 移除                                            |
| 响应式 size（断点对象）   | 差异        | ✅ ScreenSizeMap              | ❌                 | ⏭️ 无栅格断点联动，记入待办                        |
| Group 折叠弹层            | 差异        | maxPopover                    | 仅 +N              | ⏭️ 需 Popover 集成，记入待办                       |

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

| 项                              | AntD v6                    | hmfw（修改前）  | 处理                                     |
| ------------------------------- | -------------------------- | --------------- | ---------------------------------------- |
| `PRESENTED_IMAGE_SIMPLE` 简约图 | ✅ + `empty-normal` 类     | ❌ 仅默认图     | ✅ 新增简约 SVG + normal 样式 + 预设常量 |
| `image` slot 自定义节点         | ✅（image 可为 ReactNode） | 仅 string/false | ✅ 新增 image slot                       |
| 预设常量挂载                    | `Empty.PRESENTED_IMAGE_*`  | ❌              | ✅ 导出常量 + 挂载到组件                 |
| `img draggable={false}`         | ✅                         | ❌              | ✅ 补充                                  |
| 语义化 classNames/styles        | ✅                         | ❌              | ⏭️ 全库统一处理                          |

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

| 项                               | AntD v6                  | hmfw（修改前）            | 处理                                            |
| -------------------------------- | ------------------------ | ------------------------- | ----------------------------------------------- |
| `Card.Grid` 网格                 | ✅ + `contain-grid` 检测 | ❌                        | ✅ 新增 CardGrid 子组件 + 递归检测子节点 + 样式 |
| `type='inner'`                   | ✅                       | ❌                        | ✅ 新增 + 样式                                  |
| `variant`（borderless/outlined） | ✅ 替代 `bordered`       | 仅 `bordered`             | ✅ 新增（优先于 bordered）                      |
| `Card.Meta` 挂载                 | `Card.Meta`              | 仅独立 CardMeta           | ✅ 挂载 `Card.Grid`/`Card.Meta`                 |
| `tabList` 页签                   | ✅ Tabs 集成             | ❌                        | ⏭️ 需 Tabs 深度集成，记入待办                   |
| `actions` 数组自动 `<li>` 分隔   | ✅ 等宽分隔              | slot 直插 ul（需手写 li） | ⏭️ slot 模式保留，记入待办                      |
| 语义化 classNames/styles         | ✅                       | ❌                        | ⏭️ 全库统一处理                                 |

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

| 项                       | AntD v6                         | hmfw（修改前）  | 处理                                                            |
| ------------------------ | ------------------------------- | --------------- | --------------------------------------------------------------- |
| 404/403/500 异常插画     | ✅ SVG 插画 + `result-image` 类 | 纯文本 "404" 字 | ✅ 新增简化版 SVG 插画 + image 类（原版各 200+ 行，采用紧凑版） |
| `icon={false}` 隐藏图标  | ✅                              | ❌（无法隐藏）  | ✅ icon 改 `string \| false`                                    |
| `PRESENTED_IMAGE_*` 导出 | ✅                              | ❌              | ⏭️ 简化插画内联，不单独导出                                     |
| 语义化 classNames/styles | ✅                              | ❌              | ⏭️ 全库统一处理                                                 |

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

| 项                          | 严重度      | AntD v6       | hmfw（修改前）                         | 处理                                |
| --------------------------- | ----------- | ------------- | -------------------------------------- | ----------------------------------- |
| `delay` 防闪烁              | 🐞 Bug      | 实现延迟显示  | 声明了 prop 但**完全未实现**（无效果） | ✅ 用 watch+setTimeout 实现         |
| `indicator` 自定义指示器    | ⚠️ 功能缺失 | ✅ slot/prop  | ❌                                     | ✅ 新增 indicator slot              |
| `fullscreen` 全屏           | 差异        | ✅            | ❌                                     | ✅ 新增 + 遮罩样式                  |
| `description`（tip 新名）   | 差异        | ✅ tip 已废弃 | 仅 tip                                 | ✅ 新增 description，tip 保留为别名 |
| a11y（aria-busy/aria-live） | 优化        | ✅            | ❌                                     | ✅ 补充                             |
| `percent` 进度              | 差异        | ✅            | ❌                                     | ⏭️ 需进度联动，记入待办             |
| `Spin.setDefaultIndicator`  | 差异        | ✅ 全局默认   | ❌                                     | ⏭️ 记入待办                         |

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
