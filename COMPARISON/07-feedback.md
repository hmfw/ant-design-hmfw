# 数据/复杂 - F 反馈

逐个组件从简单到复杂对比 AntD v6 与 hmfw 实现差异。

> 父索引：[`../COMPARISON.md`](../COMPARISON.md)

---

## 64. Progress 进度条 ✅ 已完成（含 Bug 修复 + 功能补全）

**对比基准**: `ant-design-master/components/progress/`（progress.tsx + Line.tsx + Circle.tsx + Steps.tsx + utils.ts）

**实现说明**: hmfw 为单文件原生 SVG 实现（`Progress.tsx`），AntD 拆为 `<Line>` / `<Circle>` / `<Steps>` 三子组件 + `@rc-component/progress` 依赖。本次按 v6 公开 API 全量对齐：补全 size/steps/strokeColor 的对象/数组形态、`gapPlacement`、`rounding`、`rootClassName` + 语义化 `classNames`/`styles`、小圆形 Tooltip、format 返回 VNode、indicator-bright 自动检测、`aria-label` 透传、circle 渐变 SVG `<linearGradient>` 等。

### 发现的差异/问题表

| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| Steps 默认单段宽度逻辑错（line 的 getSize 返回 width=-1 / steps 求出 NaN） | 🐛 Bug | hmfw 复用 `'line'` 分支算 step 宽度，未实现 step 类型；当 `size` 未指定时 `width=-1`，`stepWidth=NaN/-0.2` | ✅ 新增 `'step'` 类型分支（small=2, default=14；与 strokeWidth 配合）；按 `width/steps` 切分 |
| `format(percent)` 直接传原 percent，未走 validProgress | 🐛 Bug | `percent=-10` 时回调拿到 `-10`，与 AntD 行为不一致 | ✅ 调用前 `validProgress(percent)` + `validProgress(successPercent)` |
| line 的 success/exception 用 Outlined（√/×）而非 Filled 圆形 | 🐛 Bug | AntD v5+ line 用 `CheckCircleFilled/CloseCircleFilled`（带圆形背景），circle 用 `CheckOutlined/CloseOutlined` | ✅ line 切到 Filled 版本，圆形保留 Outlined |
| circle 渐变 `strokeColor` 对象会渲染为 `[object Object]` | 🐛 Bug | `<circle stroke={obj}>` 报错；AntD 用 `<linearGradient>` defs | ✅ 渐变对象时生成 `<linearGradient>` defs，circle stroke 引用 `url(#id)` |
| Steps `strokeColor` 不支持数组 | 🐛 Bug | AntD v6 支持每段独立色 `strokeColor: string[]` | ✅ 新增数组分支，`Array.isArray` 时按 index 取色 |
| `indicator-bright` class 在 JS 端无人输出 | 🐛 Bug | CSS 已写但 JS 从未输出 class；inner 模式下浅色背景白字看不清 | ✅ `pickFirstColor` 取首色 → `isLightColor` (YIQ ≥ 178) 判定亮色 → inner 模式下输出 `indicator-bright` |
| `format` 返回类型限死 string | 🐛 Bug | AntD `format` 可返回 React.ReactNode（VNode/string/number/null） | ✅ 类型改为 `(percent?, successPercent?) => VNode \| string \| number \| null` |
| `aria-label` 强制写死 `${percent}%` | 🐛 Bug | 用户无法通过 attr 透传自定义 aria-label | ✅ 优先取 `attrs['aria-label']`，回退 percent 字符串；同步透传 `aria-labelledby` |
| Circle 小尺寸 `radius` 计算为负，触发 SVG 报错 | 🐛 Bug | `size=14` 时默认 strokeWidth = `(3/14)*100` = 21.4 → radius = (14-21.4)/2 = -3.7 → `<circle r="-3.7">` 浏览器报错 | ✅ 默认 strokeWidth 钳制为 `min(默认值, size/2 - 1)`；radius 兜底 `Math.max(_, 0.5)` |
| `size='medium'`（v6 新值）未支持 | 差异 | v6 默认 `'medium'`，hmfw 默认 `'default'` | ✅ 默认值改 `'medium'`；内部 `'medium' === 'default'` 等价处理 |
| `size` 数组形式 `[width, height]` 未支持 | 差异 | line 可用 `size={[200, 12]}` | ✅ getSize 新增 `Array.isArray` 分支 |
| `steps` 对象形式 `{count, gap}` 未支持 | 差异 | v6 步骤进度条可设段间距 | ✅ 类型改为 `number \| {count, gap}`；body style 注入 `gap: ${gap}px` |
| `gapPlacement` 未支持 | 差异 | v6 新 API（`top/bottom/start/end`），替代 `gapPosition` | ✅ 新增 `gapPlacement` prop；旋转角度按 placement 计算；`gapPosition` 标 `@deprecated` 兼容 |
| `rounding` 自定义舍入未支持 | 差异 | v6 步骤进度条可指定 `Math.ceil/Math.floor`，hmfw 写死 `Math.round` | ✅ 新增 `rounding` prop，默认 `Math.round` |
| 小圆形（`size <= 20`）应套 Tooltip | 差异 | AntD v6 小圆形容纳不下 indicator，自动包 Tooltip 显示 | ✅ `size <= 20` 时根加 `inline-circle` class；indicator 包入 `<Tooltip>`；indicator 不直接渲染在 body 内 |
| `rootClassName` + 语义化 `classNames`/`styles` 未支持 | 差异 | v6 通用语义化 slot：`{root, body, rail, track, indicator}` | ✅ 新增 `rootClassName` / `classNames` / `styles` props；五个语义槽全覆盖 |
| Indicator 缺 `title` 属性 | 差异 | AntD 在 indicator 上挂 `title={text}`，鼠标悬停可看完整文本 | ✅ 文本内容时输出 `title`；VNode 时不输出 |
| 未接入 ConfigProvider direction（RTL） | 差异 | RTL 时渐变方向反转、根加 `rtl` class | ✅ `useConfig().direction === 'rtl'` 时根加 `rtl` class；`handleGradient` 默认方向 `to left` |
| `strokeColor` 字符串数组（非渐变）未支持 | 差异 | v6 line `strokeColor: string[]` 取第一个；steps 按段取色 | ✅ line 取 `strokeColor[0]`；steps 按 index 取色 |
| `strokeColor` 渐变格式的 stops 排序 | 差异 | AntD 按 `%` key 数值排序 | ✅ `handleGradient` 排序保留；新增过滤 `direction` 字段（避免被当 stop） |
| 圆形 `width` prop 标 `@deprecated` | 差异 | v6 推荐用 `size`，`width` 仅兜底兼容 | ✅ 类型标 `@deprecated`；`size='medium' && width !== undefined` 时用 width 作为兜底 |
| `inheritAttrs` 未关闭，多重 class 冲突 | 优化 | mount 时 `attrs.class` 会被 Vue 自动合并到根，但本组件手动拼 class，重复 | ✅ `inheritAttrs: false` + 手动展开 `restAttrs`（已剔除 class/style/aria-label/aria-labelledby） |

### 改动文件
- `components/progress/types.ts` — 重写：补 `ProgressClassNames` / `ProgressStyles` / `ProgressFormat` / `ProgressFormatReturn` / `ProgressStepsConfig` / `GapPlacement` / `GapPosition` / `StringGradients` / `FromToGradients`；`size` 类型增加 `'medium'` + 数组；`steps` 改为 `number \| {count, gap}`；`strokeColor` 增加 `string[]`；`width` / `trailColor` / `gapPosition` 标 `@deprecated`；新增 `rounding` / `rootClassName` / `classNames` / `styles`
- `components/progress/utils.ts` — 新建：抽出 `validProgress` / `getSuccessPercent` / `getSize`（line/circle/dashboard/step 全分支）/ `handleGradient` / `isLightColor`（YIQ）/ `pickFirstColor` / `getSuccessStrokeColor`
- `components/progress/Progress.tsx` — 重写（~370 行，从 ~349 行）：
  - `inheritAttrs: false` + `attrs` 透传（aria-label/aria-labelledby）
  - `useConfig` 拿 direction，`isRTL` computed
  - `pickFirstColor` + `isLightColor` 实现 `indicator-bright`
  - `renderIndicator` 抽出，按 inner/outer/format 分支决定文本/图标；line 用 `CheckCircleFilled/CloseCircleFilled`，circle 用 `CheckOutlined/CloseOutlined`；外层加 `title` 属性
  - `renderLine` 接入语义化 `classNames`/`styles`、size 数组/对象
  - `renderSteps` 用 `'step'` 类型分支算单段宽度；支持 `{count, gap}`、strokeColor 数组、`rounding`
  - `renderCircle` 加 `<linearGradient>` defs；`gapPlacement` 计算旋转角度；strokeWidth 钳制避免负 radius；`size <= 20` 时套 `<Tooltip>`
  - 根元素：`rootClassName` + `classNames.root` + `inline-circle` + `rtl` class；`aria-label` 透传
- `components/progress/index.ts` — 导出新增 9 个类型
- `components/progress/style/index.css` — 新增 `.hmfw-progress-inline-circle` + `.hmfw-progress-rtl` 样式块
- `components/progress/__tests__/Progress.test.tsx` — 23 → 44 用例（+21）：
  - aria-label 透传、format clamp、line 用 Filled 图标、steps strokeColor 数组、steps 对象 + gap、rounding 自定义、gapPlacement、gapPosition 兼容、circle linearGradient、inline-circle、size 数组、size 对象、line strokeColor 数组（首段）、rootClassName、classNames 五槽、styles 两槽、indicator title、format VNode、size='medium'、indicator-bright（亮色 + 暗色双向断言）
- `docs/demos/progress/progress.md` — API 表全量重写（22 行 props）+ 注意事项 + 引入 2 个新 demo
- `docs/demos/progress/ProgressGapPlacement.vue` — 新建：演示 4 种 gapPlacement
- `docs/demos/progress/ProgressV6.vue` — 新建：演示 size 数组/对象、size=14 小圆形、steps 对象+gap、strokeColor 数组、rounding=ceil

### 验证
- `npx vitest run components/progress`：**44 通过**（23 → 44，+21）
- `pnpm typecheck`：通过（无输出）
- 全量回归：**1483 通过 / 2 skipped**（从 1462 增至 1483，+21；Progress 贡献 +21）
- E2E：`pnpm dev` 起站 → `playwright-cli` 打开 `/components/progress`：
  - 首屏 console **0 错误**
  - line 进度（30%/50%/异常 ×/成功 ✓/65%）渲染正确
  - 圆形（normal/exception/success）+ 仪表盘渲染正确
  - 步骤进度（5/10/small/custom-color）渲染正确
  - 渐变（from-to / multi-stop）线形渲染正确
  - 自定义 size + gapDegree 渲染正确
  - v6 新特性 demo：size=[200,12]、size={width:300,height:10}、size=14 小圆形（`hmfw-progress-inline-circle` class 已加）、steps {count:6,gap:8}、strokeColor 数组（前 3 段红橙黄）、rounding=ceil（41% → 3 段亮）全部正确
  - 关闭后 console **0 错误**

### 备注（诚实声明）
- AntD `Progress` 依赖 `@ant-design/colors` 的 `presetPrimaryColors.green` / `FastColor.isLight()`；hmfw 用硬编码 `#52c41a` 与自实现 YIQ 阈值（178）兜底，行为一致但精度略差。
- AntD circle 实际通过 `@rc-component/progress`（rc-progress）渲染，`gapPlacement` 内部映射到 `gapPosition`（top/bottom/left/right）；hmfw 直接用 SVG 计算旋转角度，placement→旋转规则与目测一致但与 rc-progress 内部数学公式可能有像素级差异。
- `inline-circle` 的 Tooltip 在 size≤20 且 `showInfo=true` 时启用；indicator 不再直接渲染于 body 内（避免溢出）。
- Steps `gap` 通过 `body.style.gap` 实现，与 AntD `unitWidth` 内联布局有差异：AntD 通过 step item 的 margin 控制，hmfw 用 flex gap，视觉等价但 DOM 不同。
- `strokeWidth` 默认值钳制：`size=14` 时默认 strokeW 由 21.4 钳到 6（`size/2 - 1 = 6`），与 AntD（rc-progress 内部同样有最大值约束）行为一致。

---
