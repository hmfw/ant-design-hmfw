# A 展示类（13–22）

← 回到 [COMPARISON 索引](../COMPARISON.md)

包含：Skeleton · Progress · Timeline · Segmented · Rate · QRCode · Watermark · BackTop · FloatButton · Descriptions

---

## 13. Skeleton 骨架屏 ✅ 已完成(含Bug修复)

### 【对比基准】

- **AntD v6 路径**: `/Users/hmfw/Downloads/ant-design-master/components/skeleton/`
- **参考文件**: `Skeleton.tsx`, `Avatar.tsx`, `Button.tsx`, `Input.tsx`, `Image.tsx`, `Node.tsx`, `Element.tsx`, `Paragraph.tsx`, `Title.tsx`, `style/index.ts`

### 【发现的差异/问题表】

| 项               | 严重度 | AntD v6                                                     | hmfw修改前                               | 处理                                           |
| ---------------- | ------ | ----------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------- |
| 缺失子组件       | 高     | 提供 `Skeleton.Avatar`, `Skeleton.Image`, `Skeleton.Node`   | 仅有 `Skeleton.Button`, `Skeleton.Input` | ✅ 已补全全部子组件                            |
| 布局结构         | 中     | 使用 `table`/`table-cell` 布局                              | 使用 `flex` 布局                         | ✅ 改为 `table` 布局                           |
| 类名错误         | 高     | 内容区用 `.ant-skeleton-section`                            | 用 `.hmfw-skeleton-content`              | ✅ 改为 `.hmfw-skeleton-section`               |
| 标题宽度逻辑     | 中     | 无头像+段落=38%，有头像+段落=50%                            | 固定38%                                  | ✅ 实现智能默认宽度                            |
| 段落行数默认     | 中     | 有头像=2行，无头像+标题=3行                                 | 固定3行                                  | ✅ 实现智能默认行数                            |
| 段落最后一行宽度 | 低     | 多行时最后一行自动61%                                       | 全部100%                                 | ✅ 实现自动61%逻辑                             |
| 头像形状逻辑     | 中     | `title && !paragraph` 时默认方形                            | 始终默认圆形                             | ✅ 实现智能形状选择                            |
| Element 包装器   | 中     | Button/Input/Avatar 包裹在 `.ant-skeleton-element` 容器中   | 直接渲染                                 | ✅ 添加 `.hmfw-skeleton-element` 包装          |
| Size 上下文继承  | 中     | 子组件通过 `useSize` 继承 ConfigProvider 的 `componentSize` | 不继承                                   | ✅ 实现 `useSize` 逻辑                         |
| CSS 变量         | 中     | 使用 `colorFillContent` 等 token                            | 硬编码 `rgba(0,0,0,0.06)`                | ✅ 改用 `--hmfw-color-fill-secondary` 等 token |

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

| 项                 | 严重度 | Ant Design v6                                                         | hmfw 修改前               | 处理                                  |
| ------------------ | ------ | --------------------------------------------------------------------- | ------------------------- | ------------------------------------- |
| `steps` prop       | 高     | 支持步骤进度条 `steps: number \| { count: number; gap: number }`      | 未实现                    | ✅ 已实现 `steps: number`             |
| `success` prop     | 高     | 支持成功分段 `{ percent?: number; strokeColor?: string }`             | 未实现                    | ✅ 已实现                             |
| `strokeLinecap`    | 中     | 支持 `'round' \| 'butt' \| 'square'`                                  | 未实现                    | ✅ 已实现                             |
| `railColor`        | 中     | 新 API，`trailColor` 已废弃                                           | 仅 `trailColor`           | ✅ 已实现，保留 `trailColor` 作为别名 |
| `gapDegree`        | 中     | 自定义圆形/仪表盘缺口角度                                             | 仅 dashboard 硬编码 75°   | ✅ 已实现                             |
| `percentPosition`  | 中     | `{ align?: 'start' \| 'center' \| 'end'; type?: 'inner' \| 'outer' }` | 未实现                    | ✅ 已实现                             |
| `size` 扩展类型    | 中     | 支持 `number \| { width?: number; height?: number }`                  | 仅 `'default' \| 'small'` | ✅ 已实现                             |
| 渐变 `strokeColor` | 中     | 支持 `ProgressGradient` 对象                                          | 仅字符串                  | ✅ 已实现                             |
| 状态图标           | 中     | success/exception 显示图标 (CheckOutlined/CloseOutlined)              | 显示 unicode 字符 ✓/✕     | ✅ 已修复，使用 Icon 组件             |

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

| 项                               | 严重度  | AntD v6                                            | hmfw（修改前）                         | 处理                                                |
| -------------------------------- | ------- | -------------------------------------------------- | -------------------------------------- | --------------------------------------------------- |
| API 命名不一致                   | ⚠️ 问题 | 主 API 用 `title`/`content`/`icon`/`placement`     | 用 `label`/`children`/`dot`/`position` | ✅ 新增主 API，旧 API 作为 legacy 保留兼容          |
| `Timeline.Item` 子组件缺失       | 差异    | ✅ 支持 `<Timeline.Item>` 子组件模式               | ❌ 仅 `items` 数组                     | ✅ 新增 `TimelineItem` 子组件 + VNode children 提取 |
| `loading` 状态缺失               | 差异    | ✅ `loading: true` 显示 LoadingOutlined            | ❌                                     | ✅ 新增 `loading` prop + 自动渲染旋转图标           |
| `mode` 取值不对齐                | 差异    | `start`/`end`/`alternate`（`left`/`right` 已废弃） | `left`/`right`/`alternate`             | ✅ 支持全部取值，内部归一化                         |
| `orientation: 'horizontal'` 缺失 | 差异    | ✅ 水平时间轴                                      | ❌ 仅垂直                              | ✅ 新增水平布局 + CSS                               |
| `variant: 'filled'` 缺失         | 差异    | ✅ 填充/描边变体                                   | ❌                                     | ✅ 新增 `variant` prop + filled 样式                |
| 自定义颜色样式位置错误           | 🐛 Bug  | 自定义色应用到 head                                | 应用到 item                            | ✅ 修正 style 绑定到 head 元素                      |

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

| 项                   | 严重度  | AntD v6                              | hmfw 修改前  | 处理                                      |
| -------------------- | ------- | ------------------------------------ | ------------ | ----------------------------------------- |
| icon 类型            | 🔴 Bug  | ReactNode(VNode)                     | string       | ✅ 改为 VNode,支持 h(Icon, { component }) |
| label 类型           | 🟡 限制 | ReactNode                            | string       | ✅ 改为 string \| VNode,支持自定义渲染    |
| vertical/orientation | 🟡 缺失 | 支持 vertical + orientation          | 无           | ✅ 新增 vertical/orientation props        |
| shape                | 🟡 缺失 | 'default' \| 'round'                 | 无           | ✅ 新增 shape prop,round 为胶囊型         |
| name                 | 🟡 缺失 | 支持 name 属性                       | 无           | ✅ 新增 name prop,为 radio input 分组     |
| tooltip              | 🟡 缺失 | 支持 tooltip(string \| TooltipProps) | 无           | ✅ 新增 tooltip 支持                      |
| 动画滑块             | 🟡 体验 | 有动画滑块指示器                     | 仅背景色变化 | ✅ 新增 .hmfw-segmented-thumb 动画滑块    |
| 键盘导航             | 🟡 a11y | 支持方向键切换                       | 无           | ✅ 新增键盘导航(ArrowLeft/Right/Up/Down)  |

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

| 项                  | 严重度 | AntD v6                          | hmfw 修改前     | 处理                                 |
| ------------------- | ------ | -------------------------------- | --------------- | ------------------------------------ |
| size 属性           | 高     | 支持 small/middle/large 三种尺寸 | 无 size 属性    | ✅ 已补充 size prop                  |
| ConfigProvider 集成 | 高     | 继承 componentSize               | 未集成          | ✅ 已集成 useConfig                  |
| keyboard 属性       | 中     | 支持键盘导航（方向键调整评分）   | 无键盘支持      | ✅ 已实现键盘导航                    |
| character 函数      | 中     | 支持函数动态渲染字符             | 仅支持字符串    | ✅ 已支持函数                        |
| tooltips 类型       | 中     | 支持 string 或 TooltipProps 对象 | 仅支持 string[] | ✅ 已支持 (string \| TooltipProps)[] |
| 方法暴露            | 中     | 暴露 focus()/blur() 方法         | 无方法暴露      | ✅ 已通过 expose 暴露                |

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

| 项                   | 严重度 | AntD v6                               | hmfw 修改前       | 处理               |
| -------------------- | ------ | ------------------------------------- | ----------------- | ------------------ |
| **type 属性**        | 高     | 支持 `'canvas' \| 'svg'`              | 仅支持 canvas     | ✅ 已补全 SVG 渲染 |
| **iconSize 类型**    | 中     | `number \| { width, height }`         | 仅 `number`       | ✅ 已修复,支持对象 |
| **statusRender**     | 高     | 支持自定义状态渲染函数                | 缺失              | ✅ 已补全          |
| **borderless class** | 中     | `bordered={false}` 添加 `-borderless` | 未添加 class      | ✅ 已修复          |
| **空 value 处理**    | 高     | 返回 null + 警告                      | 仍渲染空组件      | ✅ 已修复          |
| **a11y 属性传递**    | 高     | aria-_/data-_ 传给 canvas/svg         | 未传递            | ✅ 已修复          |
| **遮罩背景色**       | 中     | `rgba(255,255,255,0.96)`              | `rgba(0,0,0,0.6)` | ✅ 已修复          |

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

| 项                      | 严重度 | AntD v6                         | hmfw 修改前             | 处理                           |
| ----------------------- | ------ | ------------------------------- | ----------------------- | ------------------------------ |
| Canvas 渲染逻辑         | 🔴 高  | 使用 useClips 实现旋转+交替布局 | 简单的 translate+rotate | ✅ 完整实现 getClips 函数      |
| offset 支持             | 🔴 高  | 声明并实现,默认 gap/2           | 声明但未使用            | ✅ 实现 offset 逻辑            |
| zIndex 默认值           | 🟡 中  | 999                             | 9                       | ✅ 改为 999                    |
| 图片加载                | 🟡 中  | 异步加载,onerror 回退           | 同步 drawImage          | ✅ 实现异步加载+错误回退       |
| MutationObserver 防篡改 | 🟡 中  | 监听 childList/attributes       | 无                      | ✅ 实现 MutationObserver       |
| inherit 嵌套水印        | 🟡 中  | 通过 WatermarkContext 支持      | 声明但未实现            | ✅ 实现 Context provide/inject |

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

| 项               | 严重度 | AntD v6                                                                                 | hmfw修改前                                      | 处理      |
| ---------------- | ------ | --------------------------------------------------------------------------------------- | ----------------------------------------------- | --------- |
| **Props API**    | 🔴高   | visibilityHeight, target, duration, onClick, className, rootClassName, style, prefixCls | 缺少 className, rootClassName, style, prefixCls | ✅ 已修复 |
| **滚动监听性能** | 🔴高   | throttleByAnimationFrame节流                                                            | 无节流                                          | ✅ 已修复 |
| **缓动函数**     | 🟡中   | easeInOutCubic标准公式                                                                  | 简化版公式                                      | ✅ 已修复 |
| **可见性动画**   | 🟡中   | CSSMotion fade过渡                                                                      | 无过渡                                          | ✅ 已修复 |
| **RTL支持**      | 🟡中   | 根据direction context添加rtl类名                                                        | 无RTL支持                                       | ✅ 已修复 |

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

| 项                       | 严重度  | AntD v6                                               | hmfw修改前         | 处理    |
| ------------------------ | ------- | ----------------------------------------------------- | ------------------ | ------- |
| 默认图标错误             | 🔴 Bug  | FloatButton 无 content/icon 时默认 `FileTextOutlined` | 默认 `UpOutlined`  | ✅ 修复 |
| BackTop 默认图标错误     | 🔴 Bug  | BackTop 默认 `VerticalAlignTopOutlined`               | 默认 `UpOutlined`  | ✅ 修复 |
| 缺失 `content` prop      | 🟡 缺失 | v6 新增 `content` prop                                | 仅有 `description` | ✅ 补齐 |
| 缺失 `disabled` prop     | 🟡 缺失 | v6.4.0 新增 `disabled` prop                           | 无                 | ✅ 补齐 |
| Tooltip 类型受限         | 🟡 缺失 | v6 tooltip 接受 `string \| TooltipProps`              | 仅接受 `string`    | ✅ 补齐 |
| Group 未实现外部点击关闭 | 🟡 缺失 | v6 trigger='click' 时点击外部关闭菜单                 | 无                 | ✅ 补齐 |

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

| 项                            | 严重度  | AntD v6                               | hmfw修改前           | 处理                     |
| ----------------------------- | ------- | ------------------------------------- | -------------------- | ------------------------ |
| 缺少 Descriptions.Item 子组件 | 高      | 支持 `<Descriptions.Item>` JSX 语法   | 无此子组件           | ✅ 新增 DescriptionsItem |
| column 不支持响应式           | 高      | `column={{ xs:1, md:2, lg:3 }}`       | 仅支持 number        | ✅ 实现响应式对象        |
| span 不支持响应式             | 高      | `span={{ xs:1, md:2 }}`               | 仅支持 number        | ✅ 支持响应式 span       |
| 缺少 span='filled'            | 高      | `span='filled'` 填充剩余列            | 无此功能             | ✅ 实现 filled 逻辑      |
| colon 显示逻辑错误            | 高(Bug) | 默认显示(CSS ::after),bordered 时隐藏 | 仅在 bordered 时显示 | ✅ 修复                  |
| 最后一项 span 未自动填充      | 中      | 自动填充至 column                     | 不填充               | ✅ 实现 auto-fill        |

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
