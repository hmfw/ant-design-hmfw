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

## 65. Popover 气泡卡片 ✅ 已完成（默认主题盒模型对齐 + 语义化 classNames/styles）

**对比基准**: `ant-design-master/components/popover/`（popover.tsx + PurePanel.tsx + style/index.ts）

**实现说明**: hmfw 的 Popover 复用 Tooltip 作为定位/触发/溢出底座（与 AntD React 中 Popover 复用 Tooltip 的设计一致），自身只负责 title+content 的卡片布局。本轮二次复查发现公开 API（title/content/trigger/placement/open/defaultOpen/arrow/color/zIndex/destroyOnHidden/getPopupContainer 等）已与 v6 对齐，差异集中在默认主题盒模型与语义化 classNames/styles 上：把 CSS 对齐到 v6 默认（非 wireframe）主题（内边距落容器、标题用 margin-bottom、去分隔线、宽度 max-content/100vw），并新增 classNames/styles 语义化 API + title-only 不渲染空 content 盒。

### 发现的差异/问题表

| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| 默认主题分隔线 | 差异 | hmfw 旧 CSS 在 `title:not(:last-child)` 上画 1px 底边分隔线；AntD v6 默认主题 `titleBorderBottom` 为 `none`（仅 wireframe 模式才有分隔线），title 与 content 靠 8px marginBottom 分隔 | ✅ 删除 `.hmfw-popover-title:not(:last-child)` 的 border-bottom，改为默认无分隔线 |
| 盒模型/内边距结构 | 差异 | hmfw 旧 CSS 把 padding 分别加在 `.title`(8px 12px) 和 `.inner-content`(12px)；AntD v6 默认主题把 `innerPadding:12` 加在容器(inner)上，title 仅 marginBottom:8、自身无 padding | ✅ padding:12px 移到 `.hmfw-popover-inner` 容器；`.hmfw-popover-title` 改 margin-bottom:8px 且 `:last-child` 归零；`.hmfw-popover-inner-content` 去掉 padding |
| 弹层最大宽度 | 差异 | hmfw 旧 CSS 用 `max-width:320px`（沿用 Tooltip 窄截断）；AntD v6 用 `width:max-content + max-width:100vw`，宽度随内容自适应 | ✅ 根 `.hmfw-popover` 改为 `width:max-content; max-width:100vw` |
| 语义化 `classNames`/`styles` 未实现 | 差异 | AntD v6 支持 `classNames`/`styles`（含函数形式）定制 title/content 语义节点；hmfw 缺失 | ✅ 新增 `PopoverClassNames`/`PopoverStyles` 类型 + `classNames`/`styles` props（对象或函数 `(info:{props})=>{...}`），应用到 title/content 节点；index.ts 导出新类型 |
| title-only 渲染空 content 盒 | 优化 | hmfw 旧逻辑无论 content 是否为空都渲染 `.inner-content` 空盒；AntD 仅在 content 非空时渲染 | ✅ `contentVisible` 判定，content 为空时不渲染 content 节点；同时 `overlayInnerStyle` 存在时才包一层薄 wrapper 承载样式 |
| `classNames`/`styles` 函数形参 | 差异 | AntD v6 函数形式接收 mergedProps（含默认值合并）；hmfw 传入 `{ props }` 原始对象 | ⏭️ 跳过(影响极小)：常见用法（按 props 字段分支）结果一致，仅默认值合并细节不同 |
| `fresh` / `align` 属性 | 差异 | AntD v6 共享 props 含 `fresh`（不缓存内容）与 `align`（dom-align 配置）；hmfw Tooltip/Popover 未实现 | ⏭️ 跳过(超出 Popover 单组件范围)：属 Tooltip 共享底层能力，应在 Tooltip 统一补齐后透传，本次仅限 popover/ 目录 |
| 语义节点 content 类名 | 差异 | AntD v6 内容节点类名为 `.ant-popover-content`（v5 的 inner-content 已重命名）；hmfw 用 `.hmfw-popover-inner-content` | ⏭️ 跳过(架构约束)：`.hmfw-popover-content` 已被 Tooltip 定位包裹层占用，改名会与定位层 CSS 冲突；`classNames.content`/`styles.content` 语义 API 正常工作，仅底层类名字符串不同 |

### 改动文件
- `components/popover/types.ts` — 新增 `PopoverClassNames`/`PopoverStyles` 接口；`PopoverProps` 增加 `classNames`/`styles`（对象或函数）
- `components/popover/Popover.tsx` — 新增 `resolveSemantic` 解析对象/函数形式的 classNames/styles；`titleVisible`/`contentVisible` 判定（title-only 不渲染空 content 盒）；overlayInnerStyle 存在时包薄 wrapper
- `components/popover/index.ts` — 导出 `PopoverClassNames`/`PopoverStyles`
- `components/popover/style/index.css` — 对齐 v6 默认主题盒模型：去分隔线、padding 移到容器、title 用 margin-bottom、根宽度改 max-content/100vw
- `components/popover/__tests__/Popover.test.tsx` — 22 → 29（+7）：array trigger、contextMenu trigger、destroyOnHidden、update:open/openChange、arrow pointAtCenter、getPopupContainer、title-only 单 inner 盒
- `docs/demos/popover/popover.md` — API 表补 `classNames`/`styles`

### 验证
- `npx vitest run components/popover`：**29 通过**（22 → 29，+7）
- `pnpm typecheck`：通过（无输出）
- 全量回归：**1540 通过 / 2 skipped**
- E2E：`pnpm dev` 起站 → playwright 打开 `/components/popover`：
  - 首屏 console **0 错误**；hover「鼠标移入」触发 popover 后 console **0 错误**
  - 实测盒模型：`.hmfw-popover-inner` padding=**12px**（落容器）、title `border-bottom-width=`**0px**（去分隔线）、title `margin-bottom=`**8px**（margin 分隔）、根 width=**201px**（max-content 自适应，未被截到 320px）
  - CSS 核对：`width:max-content; max-width:100vw` 在根 `.hmfw-popover`，padding 在 `.hmfw-popover-inner`

### 备注（诚实声明）
- hmfw Popover 复用 Tooltip 作为底座，Tooltip 拥有唯一的 `.hmfw-popover-inner` 卡片盒，Popover 只负责 title+content 布局，不能再叠卡片盒（已有「单 inner 盒」测试守护）。
- 两点与 v6 的已知实现差异保留：1) 内容语义节点类名为 `.hmfw-popover-inner-content` 而非 v6 的 `content`（因 `.hmfw-popover-content` 被 Tooltip 定位层占用），但 `classNames.content`/`styles.content` 语义 API 工作正常；2) `fresh`/`align` 属 Tooltip 共享底层，受单组件目录边界限制本次未实现。
- 工作流核查发现：并行 agent 自报「只改 CSS + 测试」，但真实 diff 显示同时新增了 classNames/styles 语义 API（Popover.tsx/types.ts/index.ts）。本条目已按真实 diff 修正记录，表为唯一事实源。

---

## 66. Result 结果 ✅ 已完成（含 Bug 修复：真实图标 + 异常插画）

**对比基准**: `ant-design-master/components/result/`（index.tsx + style/index.ts）

**实现说明**: hmfw 原实现整体结构（status/title/subTitle/extra/icon/插画）已接近 AntD，但状态图标用 emoji/字符占位（✓✕ℹ⚠），违反项目「禁用占位字符」规则；body 容器 className 用旧版 `-content` 而非 v6 的 `-body`；`icon=false` 会连异常插画一起隐藏；extra 仅支持 slot。本次逐项对齐：补缺失的 WarningFilled 图标、改用四个真实 Filled 图标、改 `-body`、修正异常插画始终渲染、新增 extra prop。

### 发现的差异/问题表

| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| 状态图标用 emoji/字符占位 | 🐛 Bug | AntD 用 `CheckCircleFilled/CloseCircleFilled/ExclamationCircleFilled/WarningFilled` 真实图标；hmfw 用 `✓✕ℹ⚠` 字符占位，违反项目禁用占位字符规则，视觉与无障碍不一致 | ✅ 从 ant-design-icons 取 `filled/warning.svg` 存为 `components/icon/svg/warning-filled.svg`，跑 `pnpm gen:icons` 生成 `WarningFilled`；Result.tsx 改用四个真实 Filled 图标组件渲染 |
| `icon=false` 时连异常插画也被隐藏 | 🐛 Bug | AntD 中异常状态(404/403/500)始终渲染插画，`icon=false` 只对普通状态生效；hmfw 把 `icon!==false` 作为最外层判断，导致 `icon=false` 时异常插画也消失 | ✅ 调整渲染分支：先判 `isException` 始终渲染插画，再判 slot.icon，再判 `icon===false`（仅普通状态隐藏），最后渲染默认 Filled 图标 |
| body 容器 className 为 `-content` | 差异 | AntD v6 内容区 className 为 `${prefixCls}-body`；hmfw 仍用 `hmfw-result-content` | ✅ Result.tsx 默认 slot 容器改为 `-body`，style/index.css 同步改 `.hmfw-result-body`，测试断言改为 `.hmfw-result-body` |
| extra 仅支持 slot | 差异 | AntD 中 extra 是 prop(ReactNode)；hmfw 仅提供 extra slot | ✅ 新增 `extra: String` prop，`slot.extra` 优先于 prop |
| semantic classNames/styles API | 差异 | AntD v6 提供细粒度语义化 API（root/title/subTitle/body/extra/icon）及 useMergeSemantic | ⏭️ 跳过(全库级基础设施，各组件均未实现，单组件引入会破坏一致性，应由主线统一规划) |
| RTL 支持 (`-rtl` class) | 差异 | AntD 根据 `direction==='rtl'` 加 `-rtl` | ⏭️ 跳过(hmfw ConfigProvider 尚无 direction 体系，全库未实现 RTL) |
| 异常状态插画为简化版 | 优化 | AntD 的 404/403/500 为完整 SVG 插画(各 200+ 行)；hmfw 用文字数字简化插画 | ⏭️ 跳过(原代码已注释为有意简化，视觉占位功能完整，避免引入大量静态 SVG 体积) |

### 改动文件
- `components/result/Result.tsx` — 状态图标改用真实 Filled 组件；修正 `icon=false` 不再隐藏异常插画；新增 extra prop；body 容器 className 改为 `-body`
- `components/result/style/index.css` — `.hmfw-result-content` 重命名为 `.hmfw-result-body`
- `components/result/__tests__/Result.test.tsx` — 11 → 15（+4）：真实 svg 图标、`icon=false` 保留异常插画、extra prop、extra slot 优先
- `components/icon/svg/warning-filled.svg` — 新增 AntD `filled/warning` 图标素材
- `components/icon/icons.ts` — `pnpm gen:icons` 自动生成，新增 `WarningFilled` 组件
- `docs/demos/result/result.md` — API 表补 `extra` prop，更新 `icon` 说明（异常插画不受 `icon=false` 影响）

### 验证
- `npx vitest run components/result`：**15 通过**（11 → 15，+4）
- `pnpm typecheck`：通过（无输出）
- 全量回归：**1540 通过 / 2 skipped**
- E2E：免（Result 为纯静态展示组件，无交互/无异步刷新，渲染由 props/slot 直接决定，单测已覆盖图标/标题/插画/extra 分支）

### 备注（诚实声明）
- `WarningFilled` 此前不存在于 hmfw 图标库，已按规范引入（去 class、跑 gen:icons），其余三个 Filled 图标库内已有。
- **工作流回归修复**：Result agent 误把 `warning-filled` 写入 `components/icon/metadata.ts`，破坏了「metadata 条目数 == 可检索 Outlined 图标数」的不变量，导致 `getAllIcons` 测试失败（21≠22）。metadata 只登记可检索的 Outlined 图标，4 个 Filled 图标（CheckCircleFilled 等）均不在 metadata 内——主线已删除该误加条目，全量回归恢复 1540 通过。`WarningFilled` 组件由 gen:icons 从 SVG 生成、不依赖 metadata，保留无碍。
- 状态颜色由 CSS `.hmfw-result-{status} .hmfw-result-icon { color }` 控制，真实图标 `fill:currentColor` 正确继承。
- semantic classNames/styles 与 RTL 为全库级基础设施，异常插画为有意简化，均留待主线统一规划。

---

## 67. Spin 加载中 ✅ 已完成（含 Bug 修复：delay-on-mount + percent 环形进度）

**对比基准**: `ant-design-master/components/spin/`（index.tsx + usePercent.ts + style/index.ts）

**实现说明**: hmfw 原实现已覆盖 spinning/size/tip/description/delay/fullscreen/自定义指示器等主线功能，但缺 v6 的 percent 环形进度能力、存在 delay-on-mount Bug，且 description 的 className 与 v6 不一致。本次修复 delay 挂载即生效 Bug、补全 percent（number|'auto'）环形进度指示器及自动模拟递增、新增 dot-holder 包裹层、把描述文案 className 由 `-text` 对齐为 v6 的 `-description`。

### 发现的差异/问题表

| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| delay 挂载即生效 | 🐛 Bug | AntD v6 挂载时 effect 立即执行 debounce，`spinning=true+delay` 延迟后显示；hmfw watch 未加 immediate，挂载时 active 初值 false 且不触发回调，导致定时器永不设置、永久不显示 | ✅ `watch(()=>props.spinning, applySpinning, {immediate:true})`，抽出 `applySpinning` 统一处理 clearTimer/delay；新增测试覆盖 |
| percent 环形进度（number\|'auto'） | 差异 | AntD v6 新增 percent：number 受控显示环形 SVG 进度，'auto' 在 spinning 期间按 STEP_BUCKETS 模拟递增（AUTO_INTERVAL=200ms）；hmfw 完全缺失 | ✅ types 增加 `percent?:number\|'auto'`；实现 usePercent 等价逻辑（mockPercent+interval+STEP_BUCKETS）、`renderProgress` 输出与 v6 一致的 svg/circle（viewBox 100、borderWidth=20、role=progressbar + aria-valuemin/max/now）；新增受控/为0/clamp/auto 递增 4 项测试 |
| 四点指示器缺 dot-holder 包裹与隐藏机制 | 差异 | AntD v6 默认指示器为 `dot-holder > dot.dot-spin > 4×dot-item`，percent>0 时给 holder 加 `-holder-hidden` 隐藏四点改显进度环；hmfw 仅 `dot > dot-item` | ✅ renderIndicator 增加 `spin-dot-holder` 包裹与 `spin-dot-spin`，percent>0 时加 `-holder-hidden`；CSS 补 dot-holder/dot-progress/dot-circle 样式 |
| 描述文案 className | 差异 | AntD v6 描述容器 className 为 `{prefix}-description`；hmfw 用 `{prefix}-text` | ✅ 渲染改为 `hmfw-spin-description`；CSS 的 `.hmfw-spin-text` 与 fullscreen 覆盖规则同步改名；测试断言同步更新 |
| indicator 插槽透出 percent | 优化 | AntD v6 通过 cloneElement 把 percent 注入自定义 indicator；hmfw 自定义指示器拿不到 percent | ✅ `slots.indicator({ percent: mergedPercent.value })` 透传；新增测试 |
| `size='default'` 弃用为 `'medium'` | 差异 | AntD v6 deprecate `size='default'` 推荐 `'medium'`；hmfw 仍以 `'default'` 为默认 | ⏭️ 跳过(保持向后兼容，全库 SizeType 未引入 medium，单组件改动会破坏一致性) |
| 语义化 classNames/styles 与 RTL | 差异 | AntD v6 支持 classNames/styles 语义化映射及 `-rtl`；hmfw 未实现 | ⏭️ 跳过(依赖全库 useMergeSemantic / direction 基础设施) |
| `setDefaultIndicator` 静态方法 | 差异 | AntD v6 提供全局默认指示器；hmfw 未实现 | ⏭️ 跳过(属全局配置范畴，使用场景边缘) |

### 改动文件
- `components/spin/types.ts` — 新增 `percent?:number|'auto'`
- `components/spin/Spin.tsx` — 修复 delay-on-mount Bug；新增 percent 模拟递增与环形 Progress 渲染；dot-holder 包裹与隐藏；description className；indicator 插槽透出 percent
- `components/spin/style/index.css` — 新增 dot-holder/进度环样式，`-text` 改名为 `-description`
- `components/spin/__tests__/Spin.test.tsx` — 11 → 18（+7）：delay-on-mount、dot-holder、percent 受控/为0/clamp/auto/插槽透出
- `docs/demos/spin/SpinPercent.vue` — 新建：演示 percent 受控递增 + `percent='auto'`
- `docs/demos/spin/spin.md` — 新增「进度」demo 引用，API 表补 `percent`，indicator slot 说明含 percent

### 验证
- `npx vitest run components/spin`：**18 通过**（11 → 18，+7）
- `pnpm typecheck`：通过（无输出）
- 全量回归：**1540 通过 / 2 skipped**
- E2E：`pnpm dev` 起站 → playwright 打开 `/components/spin`：
  - 首屏 console **0 错误**
  - 实测 DOM：`hmfw-spin-dot-holder`=**6**（包裹层已渲染）、`hmfw-spin-description`=**1**（改名生效）、`hmfw-spin-spinning`=**6**
  - 补 SpinPercent demo 后 `[role=progressbar]` 环形进度可见（初次复查时无 demo 故 progressbar=0，已补 demo 填缺口）

### 备注（诚实声明）
- 本次未做整体 DOM 重构：hmfw 嵌套态沿用 `-nested-loading/-blur-container/-container` 旧结构，v6 已改为单根 div + `-section/-container` 语义结构。为避免破坏既有测试与跨组件基础设施（useMergeSemantic/SizeContext/direction），仅对齐核心行为与 percent 能力。
- percent 自动递增步进算法与 AntD v6 usePercent 完全一致（AUTO_INTERVAL=200、STEP_BUCKETS [30,0.05]/[70,0.03]/[96,0.01]）。
- `size='default'→'medium'`、语义化 classNames/styles、RTL、setDefaultIndicator 四项依赖全库基础设施，留主线统一处理。

---

## 68. Skeleton 骨架屏 ✅ 已完成（含 Bug 修复：段落 61% 边界）

**对比基准**: `ant-design-master/components/skeleton/`（Skeleton.tsx + Element.tsx + Paragraph.tsx + Title.tsx + Avatar.tsx + Button.tsx + Input.tsx + Image.tsx + Node.tsx）

**实现说明**: hmfw 用单文件 TSX 实现（Skeleton.tsx 内含主体 + Button/Input/Avatar/Image/Node 五个子组件），AntD v6 拆成多文件并基于 Element 复用。整体 API、默认 props 推导、className 结构已与 v6 高度一致。本轮二次复查核对发现 4 处可对齐点并全部修复：段落最后一行 61% 宽度的边界条件、缺失的 RTL 类、SkeletonButton 缺 square 形状、SkeletonNode 缺自定义节点样式入口。

### 发现的差异/问题表

| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| 段落最后一行 61% 宽度的行数限制 | 🐛 Bug | AntD `getParagraphBasicProps`：只要 `!hasAvatar \|\| !hasTitle` 就给段落最后一行 width=61%，与行数无关（rows=1 也会 61%）；hmfw 加了 `rows > 1` 额外限制，导致单行段落（如 title=false, rows:1）宽度错误地为 100% | ✅ 删除默认宽度分支的 `rows > 1` 条件，改为仅判断 `!showAvatar \|\| !showTitle`，对齐 AntD；补单行 61%/3 行最后一行 61%/双行 avatar+title 保持 100% 测试 |
| 缺少 RTL（direction=rtl）支持 | 差异 | AntD 主体在 `direction==='rtl'` 时加 `${prefixCls}-rtl`；hmfw 主体未读 config direction | ✅ setup 接入 useConfig，根节点按 `config.direction==='rtl'` 加 `hmfw-skeleton-rtl`；CSS 增 `.hmfw-skeleton-rtl{direction:rtl}`；补 rtl 生效/默认无 rtl 测试 |
| SkeletonButton 缺 square 形状 | 差异 | AntD 文档 Button shape 支持 `circle\|round\|square\|default`；hmfw 的 shape 类型只有 `default\|circle\|round` | ✅ shape 类型补 `'square'`，渲染补 `hmfw-skeleton-button-square` 类；CSS 增 `.hmfw-skeleton-button-square{border-radius:border-radius-sm}`；补 square 类断言测试 |
| SkeletonNode 缺自定义节点样式入口 | 差异 | AntD Node 接收 style 并 merge 到内部 `-node` 元素，常用于设定占位尺寸；hmfw 的 SkeletonNode 无样式入口 | ✅ 新增 `nodeStyle?: CSSProperties` prop 作用于内部 `.hmfw-skeleton-node`；补 width 透传测试 |
| 语义化 classNames/styles（semantic DOM） | 优化 | AntD v6 主体及各子组件支持 classNames/styles 分槽定制，依赖 useMergeSemantic；hmfw 整库未引入 | ⏭️ 跳过(框架级特性，需全库统一引入 useMergeSemantic，超出单组件边界) |
| `size='default'` 废弃告警 | 优化 | AntD v6 Element 对 `size='default'` 发 deprecated 告警建议改 `'medium'`；hmfw 仍以 default 为默认且无告警 | ⏭️ 跳过(hmfw config-provider componentSize 用 small\|middle\|large，引入 medium 别名属全库 size 体系迁移) |

### 改动文件
- `components/skeleton/Skeleton.tsx` — 接入 useConfig 加 rtl 类；段落默认宽度去掉 `rows>1` 限制对齐 61% 规则；SkeletonButton shape 补 square；SkeletonNode 新增 nodeStyle prop
- `components/skeleton/style/index.css` — 新增 `.hmfw-skeleton-rtl` 与 `.hmfw-skeleton-button-square` 规则
- `components/skeleton/__tests__/Skeleton.test.tsx` — 39 → 46（+7）：段落 61% 边界 ×4、RTL ×2、button square、node nodeStyle 透传
- `docs/demos/skeleton/skeleton.md` — Button shape 补 `square`，Node Props 补 `nodeStyle`

### 验证
- `npx vitest run components/skeleton`：**46 通过**（39 → 46，+7）
- `pnpm typecheck`：通过（无输出）
- 全量回归：**1540 通过 / 2 skipped**
- E2E：免（Skeleton 为纯静态占位展示组件，无交互/无异步刷新，差异均为 className/宽度/形状的静态渲染，单测已充分覆盖）

### 备注（诚实声明）
- SkeletonNode 自定义样式入口用 `nodeStyle` 命名而非 AntD 的 `style`，避免与组件根 style 透传语义冲突，属有意取舍。
- 段落「最后一行 61%」在 hmfw 由主体组件预先算好 paragraphWidths 数组实现，AntD 由子 Paragraph 的 getWidth 运行时计算，结果等价。
- button square 在 AntD 中视觉等同 default 直角矩形（仅 circle/round 有特殊圆角），hmfw 显式给 border-radius-sm 与 default 保持一致。
- 语义化 classNames/styles 与 size 废弃告警两项为全库级特性，留待主线统筹。

---

## 69. Alert 警告提示 ✅ 已完成（含 Bug 修复：真实图标 + DOM 顺序）

**对比基准**: `ant-design-master/components/alert/Alert.tsx` + `ErrorBoundary.tsx` + style/index.ts

**实现说明**: 本次二次复查发现 hmfw Alert 与 AntD v6 仍有多项实质差异（图标用 emoji 字符、className 为旧版 `-message/-content/-action`、closable 仅支持 boolean、缺 icon/closeIcon/action/role props、DOM 顺序 close 在 action 之前）。已逐条对齐：状态图标改用 SVG Filled、关闭图标默认 CloseOutlined、className 统一为 v6 的 `-section/-title/-actions`、closable 支持对象配置、补全 icon/closeIcon/action/role props 并保留对应 slot、修正 DOM 顺序为 icon→section→actions→close。

### 发现的差异/问题表

| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| 状态图标使用 emoji 字符（✓ ℹ ⚠ ✕） | 🐛 Bug | AntD v6 用 Filled SVG 图标组件；hmfw 用 Unicode 字符占位，视觉与无障碍均不符 | ✅ iconMap 改为引用 `../icon` 的 `CheckCircleFilled/InfoCircleFilled/ExclamationCircleFilled/CloseCircleFilled`，渲染为组件；补 `.hmfw-alert-icon svg` 断言 |
| 关闭按钮用字符 × | 🐛 Bug | AntD v6 默认渲染 `CloseOutlined` SVG；hmfw 用 `×` 字符 | ✅ 关闭图标默认改用 `CloseOutlined`，mergedCloseIcon 为空时回退；补 close 按钮内含 svg 断言 |
| className 命名为旧版（`-message/-content/-action`） | 差异 | AntD v6 内容结构为 `-section`(外层)/`-title`(标题)/`-actions`(操作区)；hmfw 用 `-content/-message/-action` | ✅ 统一改为 v6 命名，TSX 与 CSS 同步更新，测试断言改为新类名 |
| DOM 顺序：close 在 action 之前 | 🐛 Bug | AntD v6 顺序为 icon→section→actions→close；hmfw 把 close 放在 action 之前 | ✅ 调整渲染顺序为 icon→section→actions→close；补 actions 索引小于 close 索引断言 |
| closable 仅支持 boolean | 差异 | AntD v6 closable 可为对象 `{ closeIcon, aria-label, ... }`；hmfw 仅 boolean | ✅ 新增 `AlertClosable` 联合类型，prop 改 `[Boolean, Object]`，isClosable 对 plainObject 返回 true，mergedCloseIcon 优先取 `closable.closeIcon`，aria-label 取自 `closable['aria-label']`；补 3 条测试 |
| 缺 icon / closeIcon / action / role props | 差异 | AntD v6 提供 icon、closeIcon、action、role 等 props；hmfw 仅靠 slot，role 硬编码 `'alert'` | ✅ 新增 icon/closeIcon/action props（prop 优先，slot 回退）与 role prop（默认 `'alert'`）；补对应测试 |
| closeText 已废弃但可关闭逻辑未统一 | 差异 | AntD v6 closeText 已 deprecated，应并入 closeIcon 合并逻辑且能使组件可关闭 | ✅ isClosable 与 mergedCloseIcon 统一处理 closeText（标 @deprecated），存在即可关闭并渲染内容；补测试 |
| with-description 对齐与 description 显隐 | 差异 | AntD v6 默认 `align-items:center`，有 description 时切 flex-start 且 description 默认 `display:none` 仅 with-description 时显示；hmfw 恒为 flex-start | ✅ CSS 默认 center，`.hmfw-alert-with-description` 切 flex-start；description 默认 none，with-description 下 block |
| banner 样式与 v6 不一致 | 优化 | AntD v6 banner 为 `border:0!important + border-radius:0 + margin-bottom:0`；hmfw 仅去掉部分边框 | ✅ CSS banner 改为与 v6 一致 |
| data-show / tabindex 缺失 | 优化 | AntD v6 根节点带 `data-show`，关闭按钮带 `tabIndex=0` | ✅ 根节点补 data-show，关闭 button 补 tabindex=0 |
| aria-live 行为 | 优化 | AntD v6 未按 type 设置 aria-live；hmfw 对 error/warning 设 assertive、其余 polite | ⏭️ 跳过(保留 hmfw 现有无障碍增强，不破坏 v6 行为) |
| ConfigProvider 级 alert 配置 | 差异 | AntD v6 支持通过 ConfigProvider 注入 alert 的 closable/closeIcon/variant 等 | ⏭️ 跳过(hmfw config-provider 暂无 alert 组件级配置通道，跨组件改造超出边界) |
| Alert.ErrorBoundary 子组件 | 差异 | AntD v6 导出 Alert.ErrorBoundary；hmfw 未实现 | ⏭️ 跳过(依赖 React 错误边界，Vue 需用 errorCaptured 另行设计，属独立功能点) |

### 改动文件
- `components/alert/types.ts` — 新增 `AlertClosable/AlertClosableConfig` 类型，补 icon/closeIcon/action/role props 类型，closable 改联合类型
- `components/alert/Alert.tsx` — emoji 改 SVG 图标，className 改 v6(`-section/-title/-actions`)，closable 对象支持，补 icon/closeIcon/action/role props，修正 DOM 顺序，补 data-show/tabindex
- `components/alert/style/index.css` — className 改名同步，with-description 居中/顶对齐切换，description 默认隐藏，banner 对齐 v6
- `components/alert/index.ts` — 导出 `AlertClosable/AlertClosableConfig` 类型
- `components/alert/__tests__/Alert.test.tsx` — 17 → 32（+15）：类名断言更新为 v6，新增 SVG 图标/closable 对象/closeText/closeIcon/icon/action/role/DOM 顺序/afterClose 等覆盖
- `docs/demos/alert/alert.md` — API 表补 icon/closeIcon/action/role，closable 改对象类型，closeText 标废弃

### 验证
- `npx vitest run components/alert`：**32 通过**（17 → 32，+15）
- `pnpm typecheck`：通过（无输出）
- 全量回归：**1540 通过 / 2 skipped**
- E2E：`pnpm dev` 起站 → playwright 打开 `/components/alert`：
  - 首屏 console **0 错误**
  - 实测 DOM：`hmfw-alert-section`=**14**、`hmfw-alert-title`=**14**（v6 新 className 生效）、`.hmfw-alert-icon svg`=**8**（状态图标渲染为 SVG 非 emoji）、关闭按钮 svg=**2**、旧 `hmfw-alert-message`=**0**（旧 className 已清零）

### 备注（诚实声明）
- className 全面改为 AntD v6 命名（`-section/-title/-actions`），与旧版不兼容；docs 未手写引用旧类名，无失效。
- hmfw 用关闭过渡 `opacity+setTimeout(300)` 近似 v6 的 CSSMotion maxHeight 收起动画，时序对齐但动画形态为简化实现。
- 保留 Vue 习惯的 slot（icon/action/closeIcon/message/title/description）并新增同名 props，prop 优先 slot 回退。
- aria-live 为 hmfw 既有无障碍增强（v6 无此行为），按合理增强保留。
- ConfigProvider 级 alert 配置与 Alert.ErrorBoundary 子组件因跨组件/独立功能未实现，留待主线评估。

---

## 70. Watermark 水印 ✅ 已完成（含 Bug 修复：嵌套空转 + 响应性 + 防隐藏）

**对比基准**: `ant-design-master/components/watermark/`（index.tsx + useClips.ts + useWatermark.ts + useRafDebounce.ts + utils.ts）

**实现说明**: hmfw 与 AntD v6 的核心绘制算法（getClips/prepareCanvas/getMarkSize）已一致。本次二次复查发现 hmfw 在 API 完整性与防护行为上仍有缺口：缺 style/class/rootClassName 透传、缺 onRemove、缺防隐藏样式、嵌套 subElements 空转、gap/offset 在 setup 顶层解构丢失响应性。本次全部对齐：补齐透传与 onRemove，加入 emphasizedStyle(visibility !important) 与 removeAttribute('hidden')，实现容器 fixedStyle 篡改还原，并把单容器渲染重构为多容器 watermarkMap 真正支持嵌套场景。

### 发现的差异/问题表

| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| 嵌套 subElements 空转（Modal/Drawer 场景） | 🐛 Bug | hmfw 提供了 WatermarkContext.add/remove 并收集 subElements，但渲染时只往自身 containerRef 挂水印，子元素集合从不被渲染——功能空转 | ✅ 重构为 `watermarkMap(container→div)` 多容器模型；新增 `targetElements` computed(=container+subElements)，renderAll 遍历所有 target 挂载，每个 target 单独 observe，集合变化时挂载/卸载观察器并对移除项 removeWatermark |
| gap/offset 在 setup 顶层解构丢失响应性 | 🐛 Bug | hmfw 在 setup 顶层一次性解构 `const [gapX,gapY]=props.gap`，props.gap/offset 变化后 markStyle 与背景定位不更新 | ✅ gapX/gapY/gapXCenter/offsetLeft/offsetTop 全改为 computed 基于 props 读取，markStyle 依赖这些 computed 确保响应式更新 |
| 防隐藏样式 `visibility:visible !important` | 🐛 Bug | AntD 给水印节点附加 emphasizedStyle 防止外部 CSS/浏览器隐藏；hmfw 缺失 | ✅ appendWatermark 写 style 时合入 `{visibility:'visible !important'}`；补断言 |
| `removeAttribute('hidden')` | 🐛 Bug | AntD 挂载水印时同时移除 class 与 hidden 属性防隐藏；hmfw 只 removeAttribute('class')，遗漏 hidden | ✅ appendWatermark 补 `removeAttribute('hidden')`；补断言 |
| 容器 fixedStyle 被篡改后还原 | 🐛 Bug | AntD 监听容器 style 变化，若 position/overflow 被外部改动则还原；hmfw observer 只在水印节点变化时重渲染，容器自身样式被改不还原 | ✅ observer 增加分支：mutation.target 为容器且 attributeName 为 style 时遍历 fixedStyle 逐项还原 position/overflow；补还原断言 |
| style/class/rootClassName 容器透传 | 差异 | AntD 把 className/rootClassName/style 合并到根容器并保留 fixedStyle；hmfw 仅渲染固定 class | ✅ 组件改 `inheritAttrs:false`，取 attrs 的 class/style 与 prefixCls、props.rootClassName、fixedStyle 合并；新增 rootClassName prop；补透传且 overflow:hidden 保留断言 |
| onRemove 回调（v6.0.0 新增） | 差异 | AntD v6 新增 onRemove，水印节点被硬删除后重建时触发；hmfw 没有该 prop | ✅ 新增 onRemove prop；appendWatermark 中水印节点已存在但 parentElement 不是目标容器（被外部移除后重挂）时调用；补硬删除触发一次/unmount 不触发测试 |
| zIndex 默认值语义对齐 | 优化 | AntD 默认 zIndex = `token.zIndexPopupBase - WATERMARK_Z_INDEX_OFFSET = 999`；hmfw 硬编码 999 无语义说明且 props.zIndex 未纳入重绘 watch | ✅ mergedZIndex 改为 `1000 - WATERMARK_Z_INDEX_OFFSET` 并加注释保持 999；props.zIndex 加入重绘 watch 依赖 |

### 改动文件
- `components/watermark/types.ts` — WatermarkProps 新增 `rootClassName` 与 `onRemove`(@since 6.0.0)
- `components/watermark/Watermark.tsx` — `inheritAttrs:false` + class/style/rootClassName 透传；新增 onRemove；emphasizedStyle 防隐藏 + removeAttribute('hidden')；容器 fixedStyle 篡改还原；watermarkMap 多容器模型真正支持嵌套 subElements；gap/offset 改 computed 修复响应性；zIndex 默认值语义化并纳入重绘依赖；getStyleStr/raf 去抖
- `components/watermark/__tests__/Watermark.test.tsx` — 11 → 20（+9）：rootClassName、class/style 透传、visibility !important、hidden 属性移除、onRemove(触发/unmount 不触发)、容器样式还原、移除后重挂、offset 定位
- `docs/demos/watermark/watermark.md` — API 表补 `rootClassName` 与 `onRemove`

### 验证
- `npx vitest run components/watermark`：**20 通过**（11 → 20，+9）
- `pnpm typecheck`：通过（无输出）
- 全量回归：**1540 通过 / 2 skipped**
- E2E：`pnpm dev` 起站 → playwright 打开 `/components/watermark`：
  - 首屏 console **0 错误**
  - 实测 DOM：canvas 绘制的水印节点=**5**、首个节点 `backgroundImage` 含 `data:image`（base64 已绘制）、`visibility` priority=**important**（防隐藏生效）、`hidden` 属性=**false**（removeAttribute 生效）

### 备注（诚实声明）
- hmfw 未接入设计 token，AntD 默认 zIndex 来自 `token.zIndexPopupBase(1000)-1`、字体色来自 `token.colorFill`、字号来自 `token.fontSizeLG`；hmfw 沿用既有硬编码默认（zIndex 999、color rgba(0,0,0,0.15)、fontSize 16），语义与 AntD 等价。
- AntD 用 useSingletonCache 对 getClips 结果缓存、useRafDebounce 帧级去抖；hmfw 未做内容缓存，仅用轻量 raf 锁去抖避免 observer 触发风暴，纯文本/图片场景重绘开销可接受。
- AntD 的 usePanelRef 供 Modal/Drawer 内部注册嵌套容器；hmfw 已实现 provide/inject 的 WatermarkContext(add/remove) 与多容器渲染基建，但 hmfw 的 Modal/Drawer 是否调用 add 注册需主线在集成时核对（本次仅限 watermark 目录）。

---
