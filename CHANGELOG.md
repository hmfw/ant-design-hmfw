# 更新日志

本项目的所有重要变更都将记录在此文件中。

版本格式遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

---

## [0.18.0] - 2026-07-13

### ✨ 新特性

- **AutoComplete `defaultValue` / `defaultOpen`（还原半受控）**: 重新支持 `defaultValue` 指定非受控初始值、`defaultOpen` 指定初始展开状态。不传 `value` 时组件自维护内部值（以 `defaultValue` 为初始值）；传入 `value`（或 `v-model:value`）后转为受控。撤销 0.17.0 的「纯受控」限制
- **Input 系列 `defaultValue`（还原半受控）**: Input / TextArea / InputPassword / InputSearch 重新支持 `defaultValue` 指定非受控初始值。撤销 0.15.0 的「纯受控」限制
- **Select `defaultValue` / `defaultOpen`（还原半受控）**: 重新支持 `defaultValue` 指定非受控初始值、`defaultOpen` 指定初始展开状态。撤销 0.14.0 移除 `defaultValue` 的变更

### 🔧 重构

- **半受控约定统一**: 三组件内部值 ref 以 `props.value ?? props.defaultValue ?? 默认` 播种；取值 computed 遵循 `props.value !== undefined ? props.value : innerValue`；写入时仅在非受控（`props.value === undefined`）落地内部状态，始终 emit `update:value` + `change`
- **Input `useMergedValue`**: 种子扩展 `defaultValue`；watch 恢复 `v !== undefined` 受控守卫，非受控时保留内部状态不被父级 `undefined` 清空

### 🐛 修复

- **Pagination（responsive 失效）**: `size` prop 默认值由 `'middle'` 改回 `undefined`，修复 0.16.1 迁移后 `!props.size` 恒为 `false` 导致 `responsive` 在 xs 断点无法自动缩小为 mini 的问题；具体渲染尺寸仍由 `isSmall` 兜底为 `'middle'`
- **Tabs（测试修正）**: `size='middle'` 现按 0.16.1 的「三档 size 均渲染 CSS 类」正常输出 `hmfw-tabs-middle`，更新对应断言

### 📝 文档

- **API**: AutoComplete / Select 补充 `defaultValue` / `defaultOpen`，Input 补充 `defaultValue`；三者「纯受控」说明改为半受控描述

### 🧪 测试

- 三组件新增半受控用例：不传 `value` 时 `defaultValue` 生效、非受控输入/选择后内部值更新、传 `value` 时受控优先、`defaultOpen` 初始展开（AutoComplete / Select）

---

## [0.17.0] - 2026-07-13

### 💥 Breaking Changes

- **AutoComplete 纯受控化**: 移除 `defaultValue` / `defaultOpen` props，组件不再维护内部值状态；必须绑定 `value` 或使用 `v-model:value` 才能反映输入/选择。`open` 保持半受控（不传由内部管理，传入则受控）

### ✨ 新特性

- **AutoComplete `optionFilterProp`**: 内置过滤可指定依据字段 `'value'`（默认）或 `'label'`；`label` 为非字符串（VNode）时自动回退到 `value`
- **AutoComplete `notFoundContent`**: 类型升级为 `VNodeChild`，缺省时回退本地化文案（复用 `Select.notFoundContent`）
- **AutoComplete `autoFocus`**: 组件挂载后自动聚焦输入框
- **AutoComplete `id`**: 透传到内部 `input`，便于表单 `label` 关联
- **AutoComplete `AutoCompleteOption.label`**: 类型升级为 `VNodeChild`，支持富文本选项内容
- **AutoComplete 事件**: 新增 `update:open`（`open` 的 v-model 支持）与 `dropdownVisibleChange`（`openChange` 别名，对齐 antd v6）
- **AutoComplete `size` 回退**: 缺省时回退到 `ConfigProvider` 的 `componentSize`，再兜底 `'middle'`

### 🔧 重构

- **AutoComplete**: Props 提取 `satisfies Record<keyof AutoCompleteProps, any>` 模式确保类型安全；`backfill` 改为仅更新显示值（`update:value`）不触发 `change`；抽取 `renderOption` / `renderInput` 复用 virtual 与非 virtual 渲染路径；新增 `findEnabledIndex` 统一键盘导航跳过禁用项；导出 `AutoCompleteAllowClear` / `AutoCompleteFilterProp` / `AutoCompleteFilterFn` / `AutoCompleteFilterOption` 类型
- **AutoComplete JSDoc**: types.ts 全量补充中文 JSDoc 注释

### 📝 文档

- **尺寸文案统一**: Collapse、Descriptions、Tabs、AutoComplete 的"不同尺寸"章节统一为 `small`、`middle`（默认）、`large` 三档表述
- **AutoComplete API**: 补充纯受控说明、`optionFilterProp` / `autoFocus` / `id` / `dropdownVisibleChange` 文档

---

## [0.16.2] - 2026-07-13

### 🎨 Steps 样式 Token 化

- **新增 CSS 变量**: `--hmfw-steps-gap-sm` / `--hmfw-steps-gap-lg`、`--hmfw-steps-icon-size-sm` / `--hmfw-steps-icon-size-lg`，替代硬编码的 `±4px` / `±8px` 偏移量
- **vertical tail 定位**: `top` / `left` / `bottom` 改用 CSS 变量计算，适配 small / middle / large 三档尺寸
- **label-vertical tail**: 使用 `:not(.hmfw-steps-dot)` 排除 dot 模式，避免 dot tail 被覆盖；为 small / large 添加独立尺寸适配
- **CSS 结构重排**: 按 Base → Orientation → Type → Variant → Size → Modifiers 层级重组
- **移除冗余样式**: `display: inline-block` / `vertical-align: top` / `width: 100%` / `padding-left: 0`

### 📝 Steps Demo 完善

- **新增 4 个 demo**: StepsIcon（自定义图标）、StepsType（default/dot/inline 三类型对比）、StepsVariant（filled/outlined 变体）、StepsTitlePlacement（标签垂直放置）
- **重构**: StepsSmall → StepsSize（small/middle/large 三档尺寸对比）；StepsDot + StepsInline 合并为 StepsType
- **修复**: StepsDot 误用 `progress-dot`（非声明 prop）→ `type="dot"`

---

## [0.16.1] - 2026-07-12

### 💥 Breaking Changes

- **ComponentSize 统一类型**: 抽取共享类型 `ComponentSize = 'small' | 'middle' | 'large'`，从 `ConfigProvider` / `@hmfw/ant-design` 统一导入；移除所有组件的独立 Size 类型别名（`ButtonSize`、`InputSize` 等除外——这些组件后续迁移）
- **size 值 `'default'` → `'middle'`**: Pagination、Switch、Spin、Avatar、Badge、Table 的 size prop 默认值及有效值从 `'default'` 迁移为 `'middle'`，与 `ComponentSize` 语义一致

### 🔧 重构

- **Steps**: Props 提取 `satisfies Record<keyof StepsProps, any>` 模式确保类型安全（对齐 Tabs/Input）；移除死代码 `offset`/`responsive`/`mergedType`；简化 `mergedOrientation`；新增 `'large'` 尺寸 + CSS；添加 JSDoc 注释
- **ComponentSize 全量接入**: 20+ 组件的 size prop 统一使用 `ComponentSize` 类型——TreeSelect、TimePicker、RangePicker、DatePicker、Cascader、Mentions、AutoComplete、ColorPicker、Form、Collapse、Radio、Segmented、Rate、Divider、InputNumber
- **移除 XxxSize 类型别名**: PaginationSize、InputNumberSize、SpinSize、DividerSize、SwitchSize、BadgeSize、RateSize 全部移除，直接使用 `ComponentSize`
- **size CSS 类统一渲染**: Steps、Collapse、Radio、Form、Table 的 size 修饰类名不再对 `'middle'` 做条件排除，三档 size 均渲染对应 CSS 类

### 🎨 样式

- **Steps**: 新增 `.hmfw-steps-large` 样式（图标 40px / 标题 18px）
- **Table**: 新增 `.hmfw-table-large`（`padding: 20px 16px`），`.hmfw-table-middle` 显式 padding，三档尺寸 CSS 类齐全

### 🗑️ 移除

- **Steps**: 移除死代码 prop `offset`
- **StepsClassNames / StepsStyles**: 移除未使用的 `container` 字段
- **StepsProps**: 移除 `responsive`（保留 prop + TODO）、`onChange`（应由 emits 处理）

### 🔧 重构

- **Tabs（useInkBar 数据驱动）**: 重写 ink bar 为数据驱动架构（对齐 rc-tabs），核心管线 `ResizeObserver → tabSizes(Map) → activeTabOffset(computed) → indicatorStyle(computed)` → 模板绑定，不再直接操作 DOM ref；`indicatorStyle` 返回 `CSSProperties` 类型与项目体系一致

### 🎨 样式

- **Tabs（ink bar 样式分离）**: 厚度与贴边方向移至 CSS（对齐 rc-tabs），四个 position 各自独立——top→`bottom:0`、bottom→`top:0`、left→`right:0`、right→`left:0`；inline style 仅负责沿轴尺寸与位置
- **Tabs（nav 底线 ::before）**: `.hmfw-tabs-nav` 的 `border-bottom` 改为 `::before` 伪元素实现（对齐 antd），底线脱离文档流，卡片式 tab 保留四边完整边框，激活态通过 `border-*-color: bgColor` 自然覆盖
- **Tabs（卡片式对齐 antd genCardStyle）**: 四位置（top/bottom/left/right）独立 border-radius + 激活态 border-color；`:is()` 合并 card/editable-card 共用规则；隐藏 ink bar；nav-add 透明背景

### 🐛 修复

- **Tabs**: 补齐 `.hmfw-tabs-top` 类名（原先 `tabPosition='top'` 时缺失），使 ink bar CSS 选择器正确匹配；移除未使用的 `DEFAULT_SIZE` 常量

---

## [0.16.0] - 2026-07-12

### 💥 Breaking Changes

- **Tabs（受控化）**: 移除 `defaultActiveKey` 属性，改为完全受控模式——`activeKey`（配合 `v-model:activeKey`）成为唯一状态来源，支持受控/非受控模式动态切换

### 🔧 重构

- **Tabs（文件拆分）**: 将 ink bar 定位逻辑抽取为 `useInkBar` composable（基于 `requestAnimationFrame` + `ResizeObserver` 实现，替代手动 `resize` 事件监听）；键盘导航抽取为 `useKeyboardNav` composable；Props 采用 `satisfies Record<keyof TabsProps, any>` 模式确保类型安全
- **Tabs（渲染拆分）**: 提取 `renderTab` / `renderTabPane` / `renderExtraContent` 渲染函数，消除模板内嵌 map 中的重复 JSX；新增 `isTabBarExtraContent` 类型守卫精确识别 `{ left, right }` 对象与 VNode

### ✨ 增强

- **Tabs（类型系统）**: `TabItem.children` 类型从 `unknown` 收敛为 `VNode | string`；`tabBarStyle` 类型从 `Record<string, unknown>` 改为 `CSSProperties`；`TabsEmits.edit` 改为函数重载——`add` 时 `targetKey` 为 `MouseEvent`，`remove` 时 `targetKey` 为 `string`
- **Tabs（per-item 销毁/渲染）**: 支持 `TabItem` 级别的 `destroyInactiveTabPane` 和 `forceRender` 属性，允许单个 tab 独立控制 DOM 保留/销毁行为

### 🎨 样式

- **Tabs**: `.hmfw-tabs-card` 与 `.hmfw-tabs-editable-card` 共用样式，使用 `:is()` 选择器合并重复的 ~30 行 CSS，减少维护成本

### 📝 文档

- **Tabs**: 新增 9 个 Demo——禁用选项（`TabsDisabled`）、动画配置（`TabsAnimated`）、左右附加内容（`TabsExtraLR`）、自定义图标（`TabsCustomIcon`）、强制渲染与销毁（`TabsForceRender`）、间距与样式（`TabsGutter`）、受控模式（`TabsControlled`）、额外操作（`TabsExtraActions`）、嵌套标签页（`TabsNest`）
- **Tabs**: API 表格移除 `defaultActiveKey`，补充 `activeKey` 默认值说明

### 🧪 测试

- **Tabs**: 单元测试从 ~22 项扩充至 ~40 项，新增受控/非受控切换、forceRender、per-item destroy、自定义图标、语义化 API、动画配置、动态 items 变化、空态等用例
- **Tabs（E2E）**: 新增 centered 模式下 ink-bar 与激活 tab 对齐的视觉回归测试

---

## [0.15.0] - 2026-07-11

### 💥 Breaking Changes

- **Input（受控化）**: 移除 `defaultValue` 属性，Input / TextArea / InputPassword / InputSearch 全部改为完全受控模式，`value`（配合 `v-model`）成为唯一状态来源

### ✨ 增强

- **Input（类型系统）**: 新增 `ShowCountConfig`、`CountConfig`、`AllowClearConfig`、`VisibilityToggleConfig`、`AutoSizeConfig` 具名配置类型，替代原有内联字面量；`styles` 属性从 `Record<string, string>` 统一为 `CSSProperties` 类型
- **TextArea（count 配置）**: 新增 `count` 属性（对齐 Ant Design v6），支持 `show`/`max`/`strategy`/`exceedFormatter` 完整配置，超长时计数变红但不截断输入
- **InputPassword**: 新增 `readOnly`、`maxLength`、`id` 属性
- **InputSearch**: 新增 `readOnly`、`status`、`id` 属性
- **导出**: 新增 `InputAffix`、`ShowCountConfig`、`CountConfig`、`AllowClearConfig`、`VisibilityToggleConfig`、`InputClassNames`、`InputStyles`、`TextAreaClassNames`、`TextAreaStyles` 类型导出

### 🔧 重构

- **Input（文件拆分）**: 将原先 692 行单体 `Input.tsx` 拆分为独立文件——`Input.tsx`（核心输入框）、`InputPassword.tsx`（密码框）、`InputSearch.tsx`（搜索框）、`TextArea.tsx`（文本域），共享逻辑抽取到 `hooks.ts`（useInput / useComposition / useCount 等 composable）和 `shared.tsx`（共享渲染逻辑）

### 🎨 样式

- **Input（输入框）**: 内部 `<input>` / `<textarea>` 添加 `height: auto; background: transparent`，边框/高度/背景由外层 wrapper 统一控制，修复输入内容溢出遮挡 wrapper 边框的问题
- **Input（搜索按钮）**: 禁用态改用独立 class `.hmfw-input-search-button-disabled` 控制，而非伪类 `:disabled`，修复禁用时 hover 仍变色的问题

### 📝 文档

- **Input**: 新增 `InputStatus` Demo（error / warning 校验状态展示）
- **Input**: API 表格移除 `defaultValue`、补充 `count` 配置说明；更新 `CountConfig.max` 描述为「超出时计数变红，不会截断输入」

### 🧪 测试

- Input 单测扩充至覆盖 InputPassword / InputSearch / TextArea 的渲染、事件、组合输入、清除、计数等功能

---

## [0.14.0] - 2026-07-11

### 💥 Breaking Changes

- **Select（受控化）**: 移除 `defaultValue`，改为完全受控——`value`（配合 `v-model`）成为唯一状态来源，需通过 `v-model` 或监听 `change` 事件驱动更新，组件不再维护内部默认值状态

### ✨ 增强

- **Select（自定义字段名）**: `fieldNames` 新增 `groupLabel` 字段，用于映射分组标题字段，缺省时复用 `label` 字段（与 AntD v6 对齐）
- **Select（搜索过滤）**: 非虚拟模式下补齐本地搜索过滤——`matchOption` 统一处理 `filterOption` 函数/布尔值，分组内过滤且自动隐藏空分组；`tokenSeparators` 分隔符做正则转义，支持逗号、分号、竖线等特殊字符混合分词
- **Select（占位符布局）**: placeholder 改为绝对定位叠加，不再参与 flex 布局挤占内容/输入框位置，超长文本 `ellipsis` 截断；`small` 尺寸同步调整边距
- **Select（搜索框宽度）**: 搜索输入框改用 `flex: 1 1 40px` + `min-width: 0` 自适应剩余宽度，替代 `ch` 估算，修复中文等宽字符溢出被裁剪

### 🔧 重构

- **Select**: props 补齐 `satisfies Record<keyof SelectProps, any>` 约束，按「数据与取值 / 模式与状态 / 展现与交互 / 搜索 / 多选标签 / 自定义渲染 / 虚拟滚动 / 语义化 API」分组；types 抽出 `SelectFilterOption`、`SelectMaxTagPlaceholder`、`SelectOptionRender`、`SelectLabelRender`、`SelectTagRender`、`SelectTagRenderProps`、`SelectFieldNames` 具名类型并从主入口导出
- **Select**: 渲染逻辑拆分为 `renderOptionContent` / `renderOptionList` / `renderLeafOption`，虚拟与非虚拟模式共用叶子选项渲染；`filteredTree` 递归过滤统一虚拟/非虚拟数据源

### 🎨 样式

- **Select（下拉项）**: 下拉容器补充四周 `padding`，选项增加 `border-radius`；分组标题色由 `color-text-secondary` 调整为 `color-text-description` 并移除加粗，与 AntD v6 视觉对齐

### 📝 文档

- **Select**: 新增 7 个 Demo——三种大小（`SelectSize`）、状态（`SelectStatus`）、折叠标签（`SelectMaxTagCount`）、自动分词（`SelectTokenSeparators`）、自定义字段名（`SelectFieldNames`）、自定义渲染（`SelectCustomRender`）、受控展开（`SelectControlledOpen`）
- **Select**: 补充 `listHeight` / `listItemHeight` 仅在 `virtual` 开启时生效的说明；API 表格移除 `defaultValue`、补充 `fieldNames.groupLabel`
- **Demo（受控写法）**: Select / Calendar / TreeSelect 相关 Demo 的 `ref` 统一改为 `shallowRef`，`SelectOptGroup` 分组补充 `value` 字段

### 🧪 测试

- Select 单测扩充搜索过滤、分组过滤、多分隔符分词、`fieldNames`/`groupLabel`、Backspace 删除标签、`maxCount`、虚拟模式 a11y 等用例；全量 2167 个测试通过

---

## [0.13.0] - 2026-07-10

### 💥 Breaking Changes

- **Pagination（受控化）**: 移除 `defaultCurrent` 与 `defaultPageSize`，改为完全受控模式。`current`（默认 `1`）与 `pageSize`（默认 `10`）成为唯一状态来源，需通过 `v-model:current` / `v-model:pageSize` 或监听 `change` 事件驱动更新，组件不再维护内部页码/页长状态

### ✨ 增强

- **Pagination（响应式）**: `responsive` 行为对齐 AntD——仅在未显式指定 `size` 时，屏幕宽度小于 576px（`xs` 断点）自动切换为 small；显式 `size` 优先级更高。新增响应式 Demo（`PaginationResponsive.vue`）
- **Pagination（快速跳转图标）**: jump-prev / jump-next 默认显示省略号，hover 时淡入 `DoubleLeftOutlined` / `DoubleRightOutlined` 双箭头图标；图标与省略号叠放并以 `opacity` 切换，消除 hover 时的宽度跳变
- **Select（下拉尺寸）**: 下拉面板补充 `small` / `large` 尺寸样式（选项高度、内边距、字号随 `size` 联动）；选项内边距与状态图标间距改用主题 Token（`--hmfw-control-padding-horizontal`、`--hmfw-margin-xs`）
- **Menu（自定义展开图标）**: 自定义 `expandIcon` 现包裹于绝对定位容器 `.hmfw-menu-submenu-expand-icon`，与默认箭头位置一致，不再跟随文档流错位；horizontal / inline-collapsed 模式下同步隐藏

### 🐛 修复

- **Pagination（翻页闪动）**: 基础页码 item 的 `transition` 收窄为仅 `border-color`，激活态背景切换保持瞬时，修复省略号窗口滑动时相邻页码同时淡入淡出导致的高亮闪动
- **Pagination（空态区间）**: `total` 为 0 时 `showTotal` 的 range 返回 `[0, 0]`；`pageSize` 通过 `Math.max(1, …)` 兜底防止除零
- **useBreakpoint（SSR 兼容）**: 无 `window.matchMedia` 的环境（SSR / 旧浏览器）下退化为空断点表，不再抛错

### 🔧 重构

- **Pagination**: props 补齐 `satisfies Record<keyof PaginationProps, any>` 约束；渲染逻辑拆分为 `renderPrevButton` / `renderNextButton` / `renderSizeChanger` / `renderQuickJumper` 等函数；抽出 `JUMP_SIZE` / `ELLIPSIS_THRESHOLD` / `JUMP_PREV` / `JUMP_NEXT` 常量；types 补充 `PaginationAlign`、`PaginationItemType`、`ShowTotalFn` 具名类型
- **theme 生成脚本**: `generate-theme-css.ts` 生成 CSS 后自动调用 Prettier 格式化，保持与仓库风格一致

### 🧹 清理

- 移除跨组件冒烟测试 `e2e/smoke.spec.ts`，`playwright.config.ts` 的 `testMatch` 收窄为 `components/**/*.e2e.spec.ts`

### 📝 文档

- **List**: 垂直列表 Demo 的操作项 emoji 替换为 `EyeOutlined` / `MessageOutlined` / `StarOutlined` 图标
- **Menu**: 自定义展开图标 Demo 改用 `DownOutlined` / `RightOutlined`
- **NavBar**: GitHub 内联 SVG 替换为 `GithubOutlined` 图标

### 🧪 测试

- Pagination 单测扩充受控化、响应式、jump 图标、空态区间等用例；全量 2151 个测试通过

---

## [0.12.0] - 2026-07-10

### 💥 Breaking Changes

集中移除全部已废弃 API（`@deprecated` 别名与遗留 prop），并整体删除已废弃的 `BackTop` 组件。迁移对照如下：

- **BackTop（整体移除）**: 组件、导出与样式已删除，请改用 `FloatButton.BackTop`
- **Tooltip / Popover / Popconfirm**: 移除 `destroyTooltipOnHide` → 使用 `destroyOnHidden`
- **Dropdown / DropdownButton**: 移除 `destroyPopupOnHide` → `destroyOnHidden`；移除 `dropdownRender` → `popupRender`
- **Progress**: 移除 `trailColor` → `railColor`；`width` → `size`；`gapPosition` → `gapPlacement`
- **Alert**: 移除 `message` → `title`（含同名 slot：`#message` → `#title`）；移除 `closeText`、`closeIcon` prop → 使用 `closable.closeIcon`（`#closeIcon` slot 保留）
- **Transfer**: 移除 `operations` → 新增 `actions`（`(VNode | string)[]`，与 AntD v6 对齐）
- **Image（preview 配置）**: 移除 `visible` → `open`；`onVisibleChange` → `onOpenChange`；`actionsRender` → `toolbarRender`；`mask` 收窄为 `boolean | MaskType`（去除 VNode 形态，自定义遮罩内容请用 `cover`）
- **Steps**: 移除 `direction` → `orientation`；`labelPlacement` → `titlePlacement`；`progressDot` → `type="dot"`（自定义点用 `iconRender`）；item 级 `description` → `content`
- **Space**: 移除 `split` prop → `separator`（`#split` slot 与 `classNames.split` 保留）
- **Modal**: 移除静态方法 `Modal.warn()` → `Modal.warning()`
- **Timeline**: 移除 `pending`、`pendingDot` → 使用带 `loading: true` 的普通 item；item 级 `label` → `title`、`children` → `content`、`dot` → `icon`、`position` → `placement`

### 🐛 修复

- **Tooltip**: 修复非受控（hover/focus）模式下 `aria-hidden` 恒为 `true` 的可访问性缺陷——`Trigger` 现通过 popup 插槽回传真实可见状态；触发器补充 `aria-describedby` 关联弹层内容；`tooltipId` 改用 `useId()` 生成，消除 SSR 水合不匹配
- **Tooltip / Popover**: 修复未传 `color` 时 `--tooltip-bg` 无默认值导致背景透明、文字不可见的问题——Tooltip 默认取暗色 token `--hmfw-color-bg-spotlight`，Popover 取 `--hmfw-color-bg-elevated`，背景色随主题变化

### 🔧 重构

- **Tooltip**: props 补齐 `satisfies Record<keyof TooltipProps, any>` 约束；抽出 `resolveTitle()` 统一标题解析；清理死代码与类型收窄
- **Dropdown**: `destroyOnHidden` 默认值由刻意的 `undefined` 恢复为 `false`（不再需要 `??` 穿透回退到废弃别名）

### 🧪 测试

- 同步更新受影响组件的单测（移除废弃行为用例、别名 prop 改为新 API），新增 Tooltip 可访问性回归用例（`aria-hidden`/`aria-describedby`）；全量 2136 个测试通过

---

## [0.11.0] - 2026-07-10

### 🔧 重构

- **Menu 渲染架构**: Menu.tsx（~790 → ~236 行）渲染逻辑分发到 `MenuItem`/`SubMenu`/`MenuDivider`/`MenuItemGroup` 四个子组件，采用 `provide`/`inject` 通信模式，与 Collapse/Form/Radio 保持一致
- **Menu 依赖精简**: `context.ts` 合并至 `types.ts`，`renderUtils.tsx` 转换为 `composables/useMenuRender.tsx`，减少文件碎片
- **移除 JSX 复合组件模式**: 7 个组件的 `Parent.Child = Child` 静态属性挂载已移除（`Menu`、`Form`、`Radio`、`Descriptions`、`List`、`FloatButton`、`Timeline`），统一使用 re-export，Vue 模板中直接 import 子组件使用

### 🐛 修复

- **Menu**: 子组件 `key` prop 重命名为 `itemKey`，修复 Vue 保留字冲突导致的 `[Vue warn]: Invalid prop name: "key"` 告警

### 🧪 测试

- **Menu**: 测试用例从 53 → 79（+26），新增 Slot 模式、expandIcon、暗色主题、多级嵌套、SubMenu 高级属性、键盘导航增强等覆盖

### 📝 文档

- **Menu**: 新增 4 个 Demo（暗色主题、声明式写法、自定义展开图标、垂直弹出模式）

---

## [0.10.0] - 2026-07-10

### 🔧 重构

- **主题系统**: `seed.ts` + `map.ts` + `inject.ts` 三文件合并为单一 `theme.ts`（~530 行），统一设计 Token 的三层管道（Seed → Map → CSS 变量）
- **颜色工具**: 新增 `alpha()` 工具函数，支持 hex→rgba 转换并带 `isValidHex` 格式校验；`lighten`/`darken` 对无效输入安全降级
- **间距系统**: `SIZE_UNIT`/`SIZE_STEP` 内置为常量（不再从 seed 取值），`sizeXXS` 增加 `Math.max(0, …)` 下限防护
- **CSS 变量生成**: 新增 `scripts/generate-theme-css.ts` 脚本，从 `theme.ts` 自动生成 `components/_theme/style/index.css`（CSS 文件严禁手动编辑）
- **ConfigProvider**: 移除 `containerRef` 局部注入逻辑，统一使用全局 CSS 变量注入；导入路径从三文件简化为单一 `_theme/theme`

### ✨ 增强

- **MapToken 扩充**: 新增 ~20 个派生 Token，包括 `colorSuccess/Warning/InfoHover/Active`、`colorInfo*` 全套变体、`arrowBg`、`borderRadiusXS`、`colorFillAlter`、`colorSplit`、`controlItemBgHover`、`controlPaddingHorizontal*`、`lineWidthBold`、`zIndexBase/Popup`、`skeletonColor*`、`timelineTitleSpan`
- **ConfigProvider**: 新增紧凑模式 Demo（`ConfigProviderCompact.vue`）和暗色模式 Demo（`ConfigProviderDarkMode.vue`）
- **文档站**: 新增 `ThemeSwitcher` 主题切换组件和 `useTheme` 工具函数
- **构建流程**: `build:lib` 前置 `generate-theme` 步骤；`precheck` 新增主题 CSS 同步校验（`git diff --exit-code`），防止 TS 与 CSS 漂移
- **Button/Input 样式**: 适配新增的 design token 引用

### 🧪 测试

- **主题测试**: 新增 `theme.test.ts`（270 行），覆盖间距、颜色派生、语义色变体、补充 token、字号下限守卫、整体一致性；旧 `map.test.ts` 已移除

---

## [0.9.0] - 2026-07-10

### 💥 Breaking Changes

- **全面移除 `rootClassName`**: 所有组件的 `rootClassName` prop 已移除，统一使用语义化 API `classNames.root`（或对应节点的 `classNames.xxx`）替代
  - **Tree**: `rootClassName` → `classNames.root`
  - **Dropdown**: `rootClassName` → `classNames.dropdown`
  - **Drawer**: `rootClassName` → 使用 `class` 或 `classNames.root`
  - **Progress**: `rootClassName` → `classNames.root`
  - **Input / InputPassword / Textarea / Search**: `rootClassName` → `classNames.affixWrapper`（或 `classNames.root`）
  - **Transfer**: `rootClassName` → `classNames.root`
  - **Mentions**: `rootClassName` → `classNames.root`
  - **BackTop**: `rootClassName` → `classNames.root`（`className` 保留不变）
  - **Image**: `rootClassName` → `classNames.root`
  - **Watermark**: `rootClassName` → 使用 `class` 透传
  - **Table**: `rootClassName` → `classNames.root`
  - **Modal**: `rootClassName` → `classNames.root`
  - **ConfirmDialog**: `rootClassName` → `classNames.root`

### 🔧 修复

- **Modal**: `ModalClassNames` 新增 `root` 字段，支持 `classNames.root` 语义化控制

---

## [0.8.0] - 2026-07-10

### 💥 Breaking Changes

- **Carousel**: `infinite` → `loop`，与 Swiper 生态命名对齐
- **Carousel**: `slidesToShow` → `slidesPerView`，`slidesToScroll` → `slidesPerGroup`，与 Swiper 命名对齐
- **Carousel**: `autoplaySpeed` → `delay`，语义更准确
- **Carousel**: `rootClassName` 移除，统一使用 `classNames.root`
- **Carousel**: `dots` 不再支持 `{ className }` 对象形式，使用 `classNames.dots` 替代
- **Carousel**: `autoplay` 不再支持 `{ dotDuration }` 对象形式，`dotDuration` 功能已移除
- **Carousel**: `CarouselAutoplayConfig`、`CarouselDotsConfig` 接口已移除
- **Carousel**: `CarouselDotPosition` 类型名称已移除，统一为 `CarouselDotPlacement`

### 🔧 重构

- **Carousel**: `goTo` 函数拆分为 `normalizeIndex` + `handleTransitionEnd` + `clearTransitionTimer`，函数体从 54 行缩减至 25 行
- **Carousel**: 提取 `wrapIndex` 工具函数，消除 5 处重复的模运算回绕代码
- **Carousel**: 提取 `renderArrow` 消除 prev/next 箭头渲染重复
- **Carousel**: 提取 `renderTrack` / `renderDots` / `renderSlide` 子渲染函数，主 render 从 130 行缩减至 ~35 行
- **Carousel**: track/list style 从 computed 改为 render 局部变量，减少不必要的依赖追踪
- **Carousel**: 箭头改用原生 `<button>` 替代 `<Button>` 组件，消除 CSS 中全部 `!important`
- **Carousel**: `carouselProps` 添加 `as PropType<T>` 类型标注，与 Button/Input 等组件规范统一
- **Carousel**: 补充 `CarouselEmits` 类型定义并导出

### ✨ 增强

- **Carousel**: `loop: false` 时首/尾箭头自动置灰 + `cursor: not-allowed`
- **Carousel**: `waitForAnimate` 拦截时开发环境输出 console.warn，提示动画进行中
- **Carousel**: `slidesPerView`/`slidesPerGroup` ≤ 0 时开发环境输出 console.warn，提示已自动修正
- **Carousel**: `onBeforeUnmount` 补充 `clearTransitionTimer()`，防止非 autoplay 场景定时器泄漏

### 🐛 修复

- **Carousel**: 自适应高度模式下 `align-items: flex-start` 解除 flex stretch，修复不同高度 slide 切换时高度不变的问题
- **Carousel**: `CarouselDotPlacement` 类型补全 `'left' | 'right'`，与运行时兼容映射对齐

### 🌐 国际化

- **Carousel**: `aria-label` 统一改为中文（走马灯 / 上一页 / 下一页 / 跳转到第 N 页）

---

## [0.7.1] - 2026-07-09

### 🔧 重构

- **Dropdown**: Props 定义迁移到 `satisfies Record<keyof DropdownProps, any>` 模式，与 Button/Breadcrumb 类型安全规范统一
- **Dropdown**: 新增 `arrow` 属性（`boolean | { pointAtCenter?: boolean }`），支持下拉菜单箭头及指向控制
- **Dropdown**: `destroyOnHidden` 作为 `destroyPopupOnHide` 的废弃别名，通过 `??` 链式回退保持兼容

### ✨ 增强

- **Trigger**: `matchWidth` 属性从 `boolean` 扩展为 `boolean | number`，数字时设置 `minWidth` 而非固定 `width`，支持弹层最小宽度约束
- **Trigger**: 修复 `matchWidth` 设置 `minWidth` 后弹层宽度变化需重新测量定位的问题
- **Trigger**: 修复 `defaultOpen` 或 `open` 初始为 `true` 时弹层位置未在挂载后立即计算的问题
- **Select**: `dropdownMatchSelectWidth` 类型扩展为 `boolean | number`，支持设置下拉最小宽度
- **Cascader**: 接入 `matchWidth`，下拉菜单宽度与触发器对齐

### 🎨 Design Token

- **Theme**: 新增 14 个 CSS 变量补充 Token 体系 — `--hmfw-arrow-bg`、`--hmfw-border-radius-xs`、`--hmfw-box-shadow-tertiary`、`--hmfw-color-fill-alter`、`--hmfw-color-fill-content`、`--hmfw-color-split`、`--hmfw-control-item-bg-hover`、`--hmfw-control-padding-horizontal`、`--hmfw-control-padding-horizontal-sm`、`--hmfw-line-width-bold`、`--hmfw-skeleton-color-base`、`--hmfw-skeleton-color-highlight`、`--hmfw-timeline-title-span`、`--hmfw-z-index-base`、`--hmfw-z-index-popup`
- **CSS 变量清理**: 40+ 组件样式移除 CSS 变量中的硬编码 fallback 值（如 `var(--hmfw-color-primary, #1677ff)` → `var(--hmfw-color-primary)`），默认值统一由 Theme 层管理，减少重复维护

### 🧪 测试

- **Dropdown**: 测试用例大幅扩充（+385 行），覆盖 arrow、destroyOnHidden、受控/非受控模式等场景
- **Trigger**: 测试更新适配 `matchWidth` 新类型

### 📊 统计

- 全量单测通过，类型检查通过

---

## [0.7.0] - 2026-07-09

### 🚀 新组件

- **Mentions**: 新增 `@` 提及组件，支持多前缀触发、搜索过滤、键盘导航、虚拟滚动下拉列表

### 🔧 重构

- **VirtualList**: 提取 `useVirtualScroll` composable，将核心虚拟滚动算法（O(1) 可见范围计算、缓冲区管理、数据变化自动重置）从组件中解耦为可复用逻辑
- **Table**: 自定义 O(n) 虚拟滚动统一到 `useVirtualScroll` composable，消除 ~200 行重复的虚拟/非虚拟渲染代码，移除 `rowHeightCache` 死代码
- **TreeSelect**: 自实现虚拟滚动（`scrollTop` + `visibleRange` + spacer div）统一到 VirtualList 组件，裁撤 ~30 行手动计算逻辑

### ✨ 虚拟滚动接入

- **Cascader**: 搜索模式 + 列模式（选项 >10 时）双重 VirtualList 接入，支持大数据量级联选择
- **Transfer**: VirtualList 接入穿梭框两侧列表，与 `pagination` 互斥，与 `draggable` 不兼容时自动降级
- **AutoComplete**: `virtual` prop 控制 VirtualList 下拉渲染，与 Select 保持一致的接入模式

### 🧪 测试

- **VirtualList**: 单元测试 25 → 25（composable 提取后 API 不变）
- **Table**: 新增 6 项虚拟滚动单元测试 + 2 项 E2E 测试（31 total）
- **Mentions**: 17 项测试（含键盘导航、搜索过滤、虚拟滚动）
- **Cascader**: 新增 5 项虚拟滚动测试（34 total）
- **Transfer**: 新增 6 项虚拟滚动测试（46 total）
- **AutoComplete**: 新增 4 项虚拟滚动测试（32 total）
- **TreeSelect**: 更新 4 项虚拟滚动测试适配新 DOM 结构（34 total）

### 📊 统计

- 已接入 VirtualList 的组件：**9 个**（VirtualList · Select · Tree · List · Table · Mentions · Cascader · Transfer · AutoComplete · TreeSelect）
- 全量单测：**2072 passed**（72 files），类型检查通过

---

## [0.6.11] - 2026-07-09

### 🐛 修复

- **Trigger**: 修复 `handleFocusOut` 焦点移入弹层时错误关闭的严重 Bug，弹层内可聚焦元素（下拉菜单项、输入框等）现在可正常获得焦点
- **Anchor**: 消除 jsdom 中 `<a href>` 异步 navigation 引发的 stderr 噪音，改用 `vi.useFakeTimers()` 阻止

### ✨ 优化

- **Trigger**: 新增全局事件管理器 `eventManager.ts`，N 个实例共享一组 `document`/`window` 监听器，消除 N 倍回调开销
- **Trigger**: Props 定义从混用简写/完整写法统一为全完整 `{ type, default }` 格式，与 Button/Breadcrumb 保持一致
- **Trigger**: `attrs.class` / `attrs.style` 的 `as any` 替换为精确类型断言 `as string | undefined` / `as Record<string, any> | undefined`
- **Trigger**: 代码组织重排为 9 层清晰结构（响应式状态 → Props 同步 → 核心方法 → 副作用 Watch → 事件处理 → 生命周期 → 工具方法 → 暴露 API → 渲染）
- **Trigger**: render 函数中 class/style/events 逻辑提取为 `popupCls`/`triggerCls`/`triggerSty`/`triggerEvents`/`popupEvents` 变量
- **Trigger**: `child` 重命名为 `children`，语义更准确
- **Trigger**: `TriggerProps` 接口与运行时 props 完全同步，新增 9 个缺失字段
- **Trigger**: `observePopupResize` prop 动态变更时 ResizeObserver 状态同步
- **Trigger**: `updatePosition` 增加可见性守卫，防止隐藏态计算出错

### 🧪 测试

- **Trigger**: 单元测试从 13 项扩充至 55 项，覆盖全部 22 项未测 Props 与行为（contextMenu、多 trigger、focusOut relatedTarget、matchWidth、triggerDisplay contents、ResizeObserver 等）
- **Trigger**: 新增 12 项 E2E 测试，覆盖真实浏览器视口定位、autoAdjustOverflow 翻转、焦点管理、matchWidth、hover 触发、多实例等场景
- **Anchor**: 新增 6 项 E2E 测试，覆盖真实滚动联动、active link 切换、ink bar 渲染等场景

## [0.6.10] - 2026-07-09

### 🐛 修复

- **Breadcrumb**: `getBreadcrumbName` 修复空 `params` 时正则 `/:()/g` 误匹配标题中独立 `:` 字符的边缘情况
- **Breadcrumb**: `pickAttrs` 从白名单改为黑名单方式，`target`/`rel` 等标准 HTML 属性现在可正确透传到 `<a>` 标签
- **Breadcrumb**: 修复显式 `href` 被 `path` 拼接结果静默覆盖的问题，显式 `href` 优先
- **Breadcrumb**: 分隔符渲染判断 `||` 改为 `??`，正确处理 `''`/`0` 等 falsy 边界值
- **Breadcrumb**: 自动插入的分隔符 `<li>` 添加 `key` 属性，避免 Vue 重渲染异常

### ✨ 优化

- **Breadcrumb**: Props 类型采用 `satisfies Record<keyof BreadcrumbProps, any>` 模式，接口与运行时 props 编译时强制同步，杜绝双源头漂移
- **Breadcrumb**: 抽取 `BreadcrumbItemRender` 类型别名，消除 `itemRender` 签名在两处重复定义
- **Breadcrumb**: 变量 `crumbs` 重命名为 `crumbNodes`，语义更明确
- **Breadcrumb**: 完善 `normalizeMenu` 中 `as any` 和 `getBreadcrumbName` 中 number 类型分支的注释
- **Docs**: 清理 breadcrumb 等 9 个组件文档中冗余的 `<script setup>` 块（`autoDemoImports` 插件自动生成，手动维护多余且易漏）
- **CLAUDE.md**: 新增「Props 类型定义规范」章节

### 🎨 样式

- **Breadcrumb**: 移除 CSS `var()` 中所有冗余 fallback 值，统一为裸变量引用

### ✅ 测试

- **Breadcrumb**: 新增 12 个边界测试用例（28→40），覆盖 href 优先级、target/rel 透传、空 items、空 menu.items、itemRender 与 menu 互斥、VNode 分隔符、多参数 path、title 含冒号+空 params 等场景

### 📖 文档

- **Breadcrumb**: 新增「带下拉菜单」demo（BreadcrumbMenu.vue 之前未在文档中展示）
- **Breadcrumb**: 新增「自定义下拉图标」demo（dropdownIcon + dropdownProps）
- **Breadcrumb**: 新增「target 与 rel」demo（新窗口打开 + rel 安全属性）
- **Breadcrumb**: API 表格补充 `dropdownIcon`/`itemRender`/`target`/`rel`/`menu`/`dropdownProps`

---

## [0.6.9] - 2026-07-09

### 🐛 修复

- **Anchor**: 修复 `activeLink` 在 context 中响应式断裂导致高亮和 ink 指示器完全失效的核心 bug。`activeLink`、`direction`、`replace`、`classNames`、`styles` 改为 Ref 传递
- **Anchor**: 修复水平模式下 `scrollIntoView` 冒泡到 `document` 导致页面滚动死循环的问题，改为仅在 Anchor 自身容器内水平滚动
- **Anchor**: 修复 `scrollTo` 多次调用时旧 `requestAnimationFrame` 帧泄漏
- **Anchor**: 修复 `onUnmounted` 中 `getScrollContainer()` 可能与 `onMounted` 时引用不一致导致事件监听器泄漏

### ✨ 优化

- **Anchor**: scroll/resize 事件使用 `requestAnimationFrame` 节流，减少高频触发带来的性能开销
- **Anchor**: `renderLinks` 改为 `computed`，减少不必要的 VNode 重建
- **Anchor**: 添加 `window.resize` 事件监听，窗口大小变化时重新计算激活锚点
- **Anchor**: 移除 `targetOffset` prop，与 `offsetTop` 职责合并，精简 API
- **Anchor**: 正则表达式 `[\S ]` 改为 `.`，提升可读性

### 🎨 样式

- **Anchor**: 硬编码 `font-family` 替换为 `var(--hmfw-font-family)`，统一使用 Design Token
- **Theme**: 全局字体栈精简，移除冗余的 `BlinkMacSystemFont`（现代 macOS Chrome 已支持 `-apple-system`）

### 📝 文档

- **Anchor**: 新增 5 个 Demo：`AnchorBounds`（边界值）、`AnchorReplace`（历史记录替换）、`AnchorGetCurrentAnchor`（自定义高亮）、`AnchorGetContainer`（自定义滚动容器）、`AnchorExternalLink`（外部链接）
- **Anchor**: Demo `AnchorBasic` 和 `AnchorLink` 补齐缺失的子锚点目标 DOM 元素
- **Anchor**: Demo `AnchorHorizontal` 添加 `offset-top` 避免内容被顶部导航遮挡

### 🧪 测试

- **Anchor**: 测试用例从 16 个扩展到 48 个，新增覆盖 `classNames`、`styles`、`offsetTop`、`replace`、`getContainer`、`getCurrentAnchor`、外部链接、动态变更、水平方向、边界情况等

---

## [0.6.8] - 2026-07-08

### 🐛 修复

- **Layout**: 修复 Sider 与 Content 上下排列而非左右排列的问题。根因是 Vue 3 的 Boolean prop 自动转换机制：`hasSider` 未显式传递时 Vue 默认转为 `false`（而非 `undefined`），导致 `props.hasSider !== undefined` 判断永远为 true，`siderCount` 自动检测逻辑失效。改为 `props.hasSider || siderCount.value > 0`
- **Layout**: 修复 `CollapseType` 类型未从主入口导出的问题，Demo 文件 `LayoutCollapsible.vue` 不再报 TS 2724 错误

### ✨ 优化

- **Flex**: `gap` 预设值从硬编码像素值迁移至 Design Token CSS 变量（`--hmfw-padding-xs` / `--hmfw-padding` / `--hmfw-padding-lg`），支持 ConfigProvider 主题覆盖
- **Grid (Col)**: 响应式断点的 `offset`/`order`/`pull`/`push` 支持值为 `0` 的情况，允许显式重置上级断点设置，与 ant-design v6 行为对齐
- **Grid (style)**: 栅格样式从手写 24 列 × 6 断点 × 5 方向硬编码迁移为 CSS 变量化方案，大幅减少样式体积
- **Divider**: 重构代码结构，提取 `isHorizontalWithText` computed 复用，优化 `textStyle` 计算逻辑，增加详细注释
- **Divider/Layout/Space (style)**: 样式微调，接入 Design Token

### 📝 文档

- 新增 `DividerOrientationMargin`、`FlexAlign`、`FlexComponent`、`GridAlign`、`GridOrder`、`LayoutReverseArrow` Demo
- 更新 Divider、Flex、Grid、Layout 组件文档与 Demo

### ✨ 优化

- **Typography**: 全面提升代码质量、测试覆盖率和可定制性
  - CSS 颜色、字号、行高、过渡时间全面接入 Design Token（`--hmfw-color-*`、`--hmfw-font-size-heading-*` 等），支持 ConfigProvider 主题覆盖
  - 修复 `ellipsis` 关闭时未重置截断状态的问题：`setup()` 在 disabled 时也会通过 `nextTick(measure)` 触发 `onEllipsis(false)`
  - 类型安全：`CopyableConfig.icon` 类型由 `[any, any]` 收敛为 `[VNode, VNode]`
  - 合并 `BaseProps` / `BaseTypographyProps` 重复类型定义，统一到 `types.ts`
  - 修复 `useEllipsisDetect` watch 中重复触发 `measure()` 的问题
  - `resolveEllipsisTooltipProps` 返回值类型从 `Record<string, unknown>` 收紧为 `Partial<TooltipProps>`
  - 移除 `index.ts` 中未使用的 `export default` 死代码
  - 单元测试从 40 个扩充至 58 个（+18），覆盖率提升至 **98.74% statements / 100% functions / 90.17% branches**
  - 新增 7 个 E2E 测试覆盖 ResizeObserver 路径（ellipsis 检测、tooltip 渲染、动态切换、行数变化）
  - 新增「动态省略切换」Demo
- **FloatButton**: compound 模式从 `FloatButton.tsx` 迁移至 `index.ts`，对齐 Badge/Card/Menu 等组件的统一模式，消除循环依赖
- **Theme**: `toKebab` 新增 `([a-z])(\d) → $1-$2` 规则，数字作为独立语义段分隔（`fontSizeHeading1` → `--hmfw-font-size-heading-1`），同步更新 `_theme/style/index.css`、`back-top/style/index.css`

### 📝 文档

- **Typography**: 更新 API 文档（`CopyableConfig.icon` 类型、Design Token 说明）

---

## [0.6.6] - 2026-07-08

### ✨ 优化

- **FloatButton**: 重构组件结构，提升可维护性
  - 拆分子组件：`FloatButtonGroup`、`FloatButtonBackTop` 独立为单独文件
  - 提取共享逻辑：`shared.ts`（`renderIcon`、`normalizeTooltip`、`IconLike` 类型）
  - 类型收敛：`tooltip` 由 `Record<string, any>` 收敛为 `string | TooltipProps`
  - 移除内部 `icons.ts`，统一使用 `@hmfw/icons`
- **Button**: 中文字符正则改用 Unicode 码点区间，提升可读性
- **AutoComplete**: 清理未使用的 `CSSProperties` 导入

### 💥 破坏性变更

- **FloatButton**: 移除已废弃的 `description` 属性，统一使用 `content`

### 📝 文档

- **FloatButton**: 新增 Demo（禁用态、链接、Tooltip、受控分组、自定义回到顶部）

---

## [0.6.5] - 2026-07-07

### ✨ 优化

- **Button**: 全面代码优化，提升代码质量到卓越级
  - 类型安全：消除 `any` 类型，使用 `VNode | null` 和 HTML 属性类型别名
  - 性能优化：重构 `watch` 为 `computed` + `watchEffect`，避免过度触发
  - 代码重构：提取 `renderIcon()` 函数，简化两个中文字符判断逻辑
  - Props 组织：抽取到文件顶部，使用 `satisfies` 确保类型一致性
  - 属性抽取：使用完整属性对象 + 展开运算符，提升 JSX 可读性
  - 样式优化：使用 CSS 变量 `--hmfw-margin-xs` 替代硬编码
  - 正则优化：扩展中文字符范围到扩展 A 区（㐀-䶿）
  - 无障碍改进：完善 ARIA 属性（`role="button"`, `aria-busy`, `tabindex`）
  - 代码行数优化 14%（277 → 238 行）

### 🧪 测试

- **Button**: 新增 15 个测试用例，覆盖率从 82.5% 提升到 99%
  - autoInsertSpace 功能测试（6个）：两个汉字间距、图标/loading 状态排除
  - ARIA 无障碍测试（5个）：aria-busy、aria-disabled、role、tabindex
  - loading 延迟测试（2个）：延迟取消、定时器清理
  - 样式合并测试（2个）：classNames/styles 叠加逻辑
  - 测试用例总数：28 → 43 个（+53.6%），全部通过

### 📝 文档

- **Button**: 新增"两个汉字间距"章节和 Demo
  - 演示自动插入空格（默认开启）
  - 演示禁用自动插入空格
  - 演示非两个汉字、带图标等边界情况
  - 完善 API 文档中 `autoInsertSpace` 属性说明

---

## [0.6.4] - 2026-07-05

### 🐛 修复

- **Carousel**: 修复 infinite 模式下单项显示循环方向错误的问题
  - 问题：从最后一个 slide 到第一个 slide 时往右滑（应该往左）
  - 原因：提前取模导致跳过克隆节点动画
  - 修复：统一单项和多项使用克隆节点策略，符合 Swiper loop 标准行为

### 📝 文档

- **Carousel**: 新增 `adaptiveHeight` 属性文档
- **Carousel**: 重写"注意事项"部分，详细说明无限循环实现原理
  - 克隆节点策略（Swiper loop 模块）
  - 循环方向规则（next 往左，prev 往右）
  - Dots 数量计算规则（多项显示时为页面数而非 slide 数）
- **Carousel**: 调整示例顺序，将"细粒度样式控制"移到最后

### 🧪 测试

- **Carousel**: 修复 `wraps around with infinite=true` 测试，添加额外的 nextTick 等待循环重置
- **Carousel**: 所有 40 个测试通过，整体测试套件 1855 个测试全部通过

---

## [0.6.3] - 2026-07-04

### 🐛 修复

- **Image**: 修复 `width`/`height` 属性对纯数字字符串不生效的问题，统一处理数字和字符串类型
- **Image**: 修复 fallback 图片加载失败后的死循环问题，增加 fallback 失败标记
- **Table**: 修复筛选下拉框确认后未自动关闭的问题，使用受控状态管理
- **Table**: 修复筛选图标点击冒泡导致触发排序的问题

### ✨ 改进

- **Table**: 使用 @hmfw/icons 替换 emoji 图标（FilterOutlined、PlusOutlined、MinusOutlined），显示更清晰
- **FilterDropdown**: 优化 Checkbox onChange 参数传递，统一为 event 对象

### 🧪 测试

- **Table**: 新增 FilterDropdown 单元测试，覆盖筛选、确认、重置等核心场景

---

## [0.6.2] - 2026-07-03

### 🐛 修复

- **Upload**: 使用 @hmfw/icons 替换 emoji 图标（EyeOutlined、DownloadOutlined、DeleteOutlined），图标显示更清晰
- **Upload**: 新增内置图片预览功能，点击预览按钮自动打开 Image 预览弹窗
- **Badge/Ribbon**: 修复自定义颜色样式计算逻辑
- **Transfer**: 修复 checkbox 点击事件冒泡问题，防止触发列表项选中

### ✨ 改进

- **Upload**: 新增 154 个单元测试用例，覆盖文件上传、删除、预览、拖拽等核心场景
- **Transfer**: 新增 39 个单元测试用例，提升组件稳定性

### 🎨 样式

- **Badge**: 优化 Ribbon 组件自定义颜色渲染
- **TreeSelect**: 调整下拉框最大高度样式
- **Upload**: 优化操作按钮图标样式

---

## [0.6.1] - 2026-07-03

### ✨ 改进 — Rate 组件

- **精确半星计算**：根据鼠标位置精确计算半星值，`allowHalf` 模式下点击星星左半部分显示半星，右半部分显示全星，支持 RTL 模式
- **allowClear 逻辑优化**：修复清除逻辑，点击当前值的星星时重置为 0，再次 hover 时恢复正常交互
- **键盘导航增强**：完善方向键控制，支持 RTL 模式下左右键语义反转，修复步进值计算
- **焦点状态改进**：value=0 时第一颗星获得焦点，否则当前值对应的星获得焦点，视觉反馈更清晰
- **Hover 交互优化**：修复 hover 状态与 cleanedValue 的冲突，确保清除后再次 hover 时状态正确

### ✨ 改进 — Switch 组件

- **语义化 API 对齐**：重命名 `classNames`/`styles` 字段以对齐 Ant Design v6
  - `handle` → `indicator`（指示器/手柄）
  - `inner` → `content`（内容容器）
  - 移除 `loadingIcon`（加载图标不再暴露独立语义化接口）
- **新增标签属性**：新增 `checkedLabel` 和 `unCheckedLabel` 属性，支持在开关旁显示文本标签
- **样式优化**：手柄过渡动画更流畅，内容区布局更规范

### ✨ 改进 — TimePicker 组件

- **代码重构**：简化时间列渲染逻辑，提升代码可维护性
- **E2E 测试补充**：新增自动化测试用例，覆盖基础交互、时间选择、禁用状态等场景

### 🎨 设计 Token

- **新增填充色 Token**：`colorFillContent`（rgba(0,0,0,0.06)）和 `colorFillContentHover`（rgba(0,0,0,0.15)），用于组件内容区填充色

---

## [0.6.0] - 2026-07-02

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
