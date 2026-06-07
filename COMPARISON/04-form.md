# C 表单控件（34–49）

← 回到 [COMPARISON 索引](../COMPARISON.md)

包含：Button · Checkbox · Radio · Switch · Input · InputNumber · Slider · Select · Cascader · TreeSelect · AutoComplete · DatePicker · TimePicker · RangePicker · Upload · Form

---

## 34. Button 按钮 ✅ 已完成

### 发现的差异/问题表

| 项                | 严重度 | AntD v6                      | hmfw修改前    | 处理                 |
| ----------------- | ------ | ---------------------------- | ------------- | -------------------- |
| `shape` prop      | 高     | ✅ `circle`/`round`/`square` | ❌ 缺失       | ✅ 新增 `shape` 支持 |
| `href` + `target` | 高     | ✅ 渲染为 `<a>`              | ❌ 缺失       | ✅ 新增 href/target  |
| `loading` delay   | 中     | ✅ `{ delay: number }`       | ❌ 仅 boolean | ✅ 支持延迟显示      |
| `iconPosition`    | 中     | ✅ `start`/`end`             | ❌ 缺失       | ✅ 新增图标位置控制  |

### 验证

- `npx vitest run components/button`：**20 passed**

---

## 35. Checkbox 多选框 ✅ 已完成(含Bug修复)

### 【对比基准】

- 参考: `/Users/hmfw/Downloads/ant-design-master/components/checkbox/`

### 【发现的差异/问题表】

| 项                       | 严重度 | AntD v6                           | hmfw修改前           | 处理                  |
| ------------------------ | ------ | --------------------------------- | -------------------- | --------------------- |
| CheckboxChangeEvent 结构 | 高     | 包含 `target: { checked, value }` | 直接传递原生 Event   | ✅ 新增完整事件结构   |
| indeterminate 状态设置   | 高     | 通过 ref.input.indeterminate 设置 | 仅 CSS 类名          | ✅ 修复:设置 DOM 属性 |
| 受控模式 update:checked  | Bug    | 受控时应触发 update:checked       | 受控时也修改内部状态 | ✅ 修复               |

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

| 项                    | 严重度 | AntD v6                           | hmfw修改前         | 处理                |
| --------------------- | ------ | --------------------------------- | ------------------ | ------------------- |
| RadioChangeEvent 结构 | 高     | 包含 `target: { checked, value }` | 直接传递原生 Event | ✅ 新增完整事件结构 |
| Radio.Button 样式     | 高     | 独立的按钮样式                    | 样式不完整         | ✅ 补全样式         |
| buttonStyle 切换      | 中     | 支持 outline/solid                | 不支持             | ✅ 新增支持         |

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

| 项                          | 严重度 | AntD v6              | hmfw修改前 | 处理        |
| --------------------------- | ------ | -------------------- | ---------- | ----------- |
| loading 状态禁用交互        | 高     | loading 时禁用点击   | 未禁用     | ✅ 修复     |
| checkedChildren 显示逻辑    | 中     | 根据状态显示不同内容 | 逻辑不完整 | ✅ 修复     |
| checkedValue/unCheckedValue | 中     | 支持自定义值         | 不支持     | ✅ 新增支持 |

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

| 项                                              | 严重度 | AntD v6                                                       | hmfw修改前                               | 处理                                                                      |
| ----------------------------------------------- | ------ | ------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------- |
| Input：prefix/suffix 未从 props 读取（仅 slot） | 🐛 Bug | 支持 prefix/suffix 作为 props（ReactNode）                    | 类型已声明但仅从 slot 读取，props 被忽略 | 增加 props 读取并回退 slot，现同时支持 props.prefix 与 slots.prefix       |
| Input：allowClear 不支持对象配置                | 高     | allowClear 可为 boolean 或 { clearIcon, disabled }            | 仅支持 boolean                           | 增加对象配置，clearIcon 默认 CloseOutlined，支持 disabled                 |
| Input：showCount 不支持 formatter               | 高     | showCount 可为 boolean 或 { formatter } 自定义显示            | 仅 boolean，固定显示 'N / max'           | 增加对象配置，支持 formatter 函数                                         |
| Input：未暴露 focus()/blur() 方法               | 🐛 Bug | 通过 ref 暴露 focus(options) 和 blur()                        | 未暴露任何方法                           | 增加 expose()，暴露 focus({ preventScroll, cursor })、blur() 及 input ref |
| Input：size 未从 config.componentSize 合并      | 中     | 未传时从 context 合并 size                                    | 硬编码默认 'middle'，无 context 合并     | 改为 computed(() => props.size ?? config.value.componentSize)             |
| Input：未透传 id prop                           | 高     | 将 id 透传到原生 input                                        | 未声明也未透传 id                        | 增加 id prop 并透传到 input 元素                                          |
| Input：缺少 rootClassName prop                  | 高     | 支持 rootClassName 控制外层样式                               | 无 rootClassName                         | 增加 rootClassName，应用到 affix-wrapper                                  |
| Input：未触发 onPressEnter 事件                 | 中     | 除 pressEnter 外还触发 onPressEnter                           | 仅触发 pressEnter                        | 增加 onPressEnter 触发（两个事件均触发以兼容）                            |
| InputPassword：缺少 iconRender prop             | 🐛 Bug | 支持 iconRender(visible) 自定义切换图标                       | 硬编码 emoji 图标（🙈/👁）               | 增加 iconRender，默认用 EyeOutlined（EyeInvisibleOutlined 待图标库补充）  |
| InputPassword：缺少 action prop                 | 中     | 支持 action='click'\|'hover' 触发切换                         | 仅支持 click                             | 增加 action，通过动态事件绑定支持 click/hover                             |
| InputPassword：visibilityToggle 不支持对象配置  | 高     | visibilityToggle 可为 boolean 或 { visible, onVisibleChange } | 仅 boolean                               | 增加对象配置，支持受控 visible 与 onVisibleChange 回调                    |
| InputPassword：缺少 focus()/blur() 方法         | 🐛 Bug | 暴露 focus/blur 方法                                          | 未暴露                                   | 增加 expose()，暴露 focus(options)、blur() 及 input ref                   |
| TextArea：autoSize 未实现                       | 🐛 Bug | 支持 autoSize 为 boolean 或 { minRows, maxRows }              | 类型已声明但未实现                       | 基于 scrollHeight 动态计算行数实现 autoSize                               |
| TextArea：allowClear 未实现                     | 🐛 Bug | 支持 allowClear 清除按钮                                      | 类型已声明但未实现                       | 增加 allowClear，支持对象配置（clearIcon、disabled）                      |
| TextArea：showCount 不支持 formatter            | 高     | showCount 可为 boolean 或 { formatter }                       | 仅 boolean                               | 增加对象配置，支持 formatter 函数                                         |
| TextArea：缺少 focus()/blur() 方法              | 🐛 Bug | 暴露 focus/blur 方法                                          | 未暴露                                   | 增加 expose()，暴露 focus(options)、blur() 及 resizableTextArea ref       |
| InputSearch：loading prop 未实现                | 🐛 Bug | loading=true 时显示 LoadingOutlined                           | 声明了 prop 但无视觉效果                 | 增加 LoadingOutlined（hmfw-icon-loading 动画），loading 时按钮禁用        |
| InputSearch：缺少 searchIcon prop               | 高     | 支持自定义 searchIcon                                         | 硬编码 emoji 🔍                          | 增加 searchIcon，默认 SearchOutlined                                      |
| InputSearch：onSearch 缺少 info.source 参数     | 🐛 Bug | onSearch(value, event, { source: 'input'\|'clear' })          | 仅 onSearch(value)                       | 增加 event 与 info 参数，按钮/回车时 source='input'                       |
| InputSearch：缺少 focus()/blur() 方法           | 🐛 Bug | 暴露 focus/blur 方法                                          | 未暴露                                   | 增加 expose()，暴露 focus(options)、blur() 及 input ref                   |
| 全部：addonBefore/addonAfter 未实现             | 低     | 已废弃，推荐 Space.Compact                                    | 类型已声明但未实现                       | 从类型与文档移除（v6 已废弃，改用 Space.Compact）                         |

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

| 项                                   | 严重度 | AntD v6                                                                    | hmfw修改前                                   | 处理                                                                   |
| ------------------------------------ | ------ | -------------------------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------- |
| formatter 函数签名                   | 🐛 Bug | formatter: (value, info: { userTyping, input }) => string                  | formatter: (value) => string，缺少 info 参数 | 修正 formatter，接收含 userTyping/input 的 info 对象，对齐 v6 签名     |
| suffix prop                          | 高     | 支持 suffix（v6 5.20.0 新增）                                              | 无 suffix                                    | 增加 suffix，支持 slot，渲染在 input 之后                              |
| variant prop                         | 高     | variant：'outlined'\|'filled'\|'borderless'\|'underlined'（默认 outlined） | 无 variant，仅 outlined 样式                 | 增加 variant，实现全部 4 种变体及对应 CSS                              |
| ref 方法（focus/blur/nativeElement） | 高     | 暴露 focus({cursor?, preventScroll?})、blur()、nativeElement               | 未暴露任何方法                               | 增加 expose()，focus 支持 cursor（start\|end\|all）与 preventScroll    |
| mode prop                            | 中     | mode：'input'\|'spinner'（默认 input），spinner 显示 +/− 图标              | 无 mode，固定 input 模式（▲/▼）              | 增加 mode，spinner 模式显示 +/− 图标                                   |
| controls 对象形式自定义图标          | 中     | controls：boolean \| { upIcon?, downIcon? }                                | controls 仅 boolean                          | 扩展 controls 支持对象，可自定义 upIcon/downIcon                       |
| changeOnBlur prop                    | 中     | changeOnBlur：boolean（默认 true），控制失焦是否触发 onChange              | 失焦总是触发 change                          | 增加 changeOnBlur（默认 true）控制失焦行为                             |
| changeOnWheel prop                   | 中     | changeOnWheel：boolean，聚焦时允许滚轮改值                                 | 无滚轮支持                                   | 增加 changeOnWheel 与 handleWheel，仅聚焦且非 disabled/readOnly 时生效 |
| decimalSeparator prop                | 中     | decimalSeparator：string，自定义小数分隔符（如欧式 ','）                   | 固定用 '.'                                   | 增加 decimalSeparator，formatDisplay/parseInput 处理自定义分隔符       |
| onStep 的 emitter 字段               | 低     | onStep info 含 emitter：'handler'\|'keydown'\|'wheel'                      | onStep info 仅有 offset 与 type              | 增加 emitter 字段，区分 step 来自点击/键盘/滚轮                        |
| without-controls 类名                | 低     | controls=false 时加 .ant-input-number-without-controls                     | 隐藏 controls 时无类名                       | 增加 .hmfw-input-number-without-controls 类与 CSS 隐藏 handler-wrap    |

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

| 项                                  | 严重度 | AntD v6                                                                 | hmfw修改前                                   | 处理                                                                                      |
| ----------------------------------- | ------ | ----------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------- |
| range 模式下点击 mark 标签          | 🐛 Bug | range 模式下点击 mark 标签会把最近的滑块移到该值                        | setValue(mv) 总是设单值，破坏 range 模式     | 增加 handleMarkClick()，计算到两个滑块的距离并移动最近的一个                              |
| 键盘导航                            | 高     | 支持方向键（←/→/↑/↓）、Home、End，keyboard prop（默认 true）            | 完全无键盘支持                               | 增加 handleKeyDown()，支持方向键/Home/End，增加 keyboard prop（默认 true），遵守 disabled |
| step=null 支持                      | 高     | step 为 null 时仅吸附到 marks、min、max                                 | step 类型仅 number，snapToStep 总用步长运算  | step 类型改为 number\|null，snapToStep 在 step 为 null 时查找最近 mark/min/max            |
| marks 对象形式                      | 高     | marks 支持 string 与 {label, style?} 两种格式                           | marks 仅支持 string                          | marks 类型改为 Record<number, string \| {label, style?}>，渲染时提取 label 并应用 style   |
| tooltip.open 受控可见性             | 中     | tooltip.open 控制显隐：true 常显、false 常隐、undefined 悬停/拖动时显示 | tooltip 仅悬停/拖动时显示，无法强制常显/常隐 | 增加 shouldShowTooltip()，优先看 tooltip.open，回退悬停/拖动状态                          |
| dots prop                           | 中     | dots 在每个 step 间隔渲染圆点                                           | 无 dots，仅 marks 渲染圆点                   | 增加 dots（boolean，默认 false），dots=true 且 step 有效时生成 dotPoints 并渲染独立圆点   |
| tooltip.formatter 类型              | 低     | formatter 可返回 string 或 null                                         | formatter 类型仅返回 string                  | tooltip.formatter 类型改为 (value) => string\|null                                        |
| draggableTrack                      | 低     | range 可为对象，draggableTrack 允许拖动轨道本身                         | 未实现                                       | 延后 — 需轨道拖动手势处理                                                                 |
| editable/minCount/maxCount          | 低     | range 可为对象，editable、minCount/maxCount 动态增删滑块                | 未实现                                       | 延后 — 需动态滑块管理                                                                     |
| 多滑块（>2）                        | 低     | 通过数组值支持超过 2 个滑块                                             | 仅支持单滑块或双滑块 range                   | 延后 — 需数组值处理与多滑块渲染                                                           |
| focus()/blur() 方法                 | 低     | 通过 ref 暴露 focus() 和 blur()                                         | 未暴露                                       | 延后 — 需 defineExpose 与滑块 ref 管理                                                    |
| onFocus/onBlur 事件                 | 低     | 触发 onFocus 与 onBlur                                                  | 无 focus/blur 事件                           | 延后 — 低优先，需要时再加                                                                 |
| autoFocus prop                      | 低     | autoFocus 挂载时聚焦                                                    | 未实现                                       | 延后 — 需 onMounted focus 调用                                                            |
| 语义化 classNames/styles            | 低     | 支持 root/tracks/track/rail/handle 语义化定制                           | 无语义化定制                                 | 延后 — 全库统一处理                                                                       |
| orientation prop                    | 低     | orientation（'horizontal'\|'vertical'）作为 vertical 布尔的替代         | 仅 vertical 布尔                             | 延后 — 当前 vertical 布尔已足够                                                           |
| tooltip placement/getPopupContainer | 低     | tooltip.placement 与 getPopupContainer 控制定位                         | tooltip 总渲染在滑块上方                     | 延后 — 需 Tooltip 组件集成                                                                |

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

| 项                        | 严重度 | AntD v6                                                                    | hmfw修改前                             | 处理                                                                                              |
| ------------------------- | ------ | -------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| onChange 事件签名         | 🐛 Bug | onChange(value, option) 同时传值与 option 对象                             | onChange(value) 仅传值，缺 option 参数 | 修正：onChange 现传 (value, option)，option 为 SelectOption\|SelectOption[]，对齐 AntD            |
| labelInValue 支持         | 高     | labelInValue 将值转为 {value, label, key} 格式                             | 不支持                                 | 实现：增加 labelInValue、值归一化与 LabeledValue 类型，开启时触发 {value,label,key} 对象          |
| tags 模式区分             | 高     | tags 模式允许创建新选项，支持 tokenSeparators 自动分词，回车建标签         | tags 与 multiple 完全相同，无动态创建  | 实现：增加 tokenSeparators，回车/分隔符输入时动态创建选项，增加 isTags 计算标记                   |
| maxCount prop             | 高     | maxCount 限制 multiple/tags 模式的选择数量（区别于限制显示的 maxTagCount） | 不支持                                 | 实现：增加 maxCount，在 selectOption 中强制，达上限阻止选择                                       |
| OptGroup 支持             | 高     | 含 'options' 键的嵌套选项渲染为带标签的分组                                | 不支持                                 | 实现：增加 flatOptions 扁平化嵌套结构，renderOptions 递归渲染分组（.hmfw-select-item-group 样式） |
| optionRender prop         | 高     | optionRender(option, {index}) 自定义下拉项渲染                             | 不支持                                 | 实现：增加 optionRender，集成到 renderOptions                                                     |
| labelRender prop          | 高     | labelRender(LabeledValue) 自定义已选标签显示                               | 不支持                                 | 实现：增加 labelRender，用于单选模式的 renderSelectedLabel                                        |
| tagRender prop            | 高     | tagRender({label, value, closable, onClose}) 自定义 multiple/tags 标签渲染 | 不支持                                 | 实现：增加 tagRender，集成到 renderTag，支持 closable/onClose                                     |
| 键盘导航                  | 中     | ArrowUp/Down 导航、Enter 选择、Escape 关闭、activeIndex 跟踪               | 无键盘导航                             | 实现：增加 handleKeydown（上下/回车/Esc）、activeIndex ref 与 active 态样式                       |
| focus/blur 方法           | 中     | 通过 ref 暴露 focus() 和 blur()                                            | 未暴露                                 | 实现：增加 focus/blur 并通过 expose() 暴露                                                        |
| fieldNames prop           | 中     | fieldNames 自定义 label/value/options/groupLabel 字段名                    | 硬编码 'label'/'value'/'options'       | 实现：增加 fieldNames（含默认值），labelField/valueField/optionsField 计算属性全程使用            |
| maxTagPlaceholder prop    | 中     | maxTagPlaceholder 自定义溢出标签显示（string 或函数）                      | 硬编码 '+N'                            | 实现：增加 maxTagPlaceholder，支持 string\|function，向函数传 omittedValues                       |
| autoClearSearchValue prop | 中     | autoClearSearchValue 控制选择后是否清空搜索（multiple/tags 默认 true）     | 总是清空搜索文本                       | 实现：增加 autoClearSearchValue（默认 true），selectOption 中条件清空                             |
| onFocus/onBlur 事件       | 中     | 触发 focus/blur 事件                                                       | 未触发                                 | 实现：emits 增加 focus/blur，在 selector 的 onFocus/onBlur 中触发                                 |
| tabindex 与键盘聚焦       | 中     | selector 有 tabindex 可键盘聚焦                                            | 无 tabindex，不可键盘访问              | 实现：selector 增加 tabindex={disabled ? -1 : 0} 与 onKeydown                                     |
| 活动项悬停跟踪            | 低     | 鼠标悬停更新 activeIndex，保持键盘导航连续                                 | 无悬停跟踪                             | 实现：renderOptions 增加 onMouseenter 更新 activeIndex                                            |

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

| 项                                             | 严重度 | AntD v6                                                                  | hmfw修改前                                   | 处理                                                                                                   |
| ---------------------------------------------- | ------ | ------------------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| change 事件签名                                | 🐛 Bug | onChange(value, selectedOptions)，selectedOptions 为完整 option 对象数组 | onChange(value, labels)，labels 为字符串数组 | 修正：change 现传 (value, selectedOptions) 完整对象；emitChange 调 getOptionPath 传 option 对象        |
| displayRender 签名                             | 🐛 Bug | displayRender(labels, selectedOptions) 同时接收标签数组与 option 对象    | displayRender(labels) 仅接收标签数组         | 修正：displayRender 增加 selectedOptions 第二参；displayText 计算传 getOptionPath 结果                 |
| multiple 多选模式                              | 高     | 支持多选，值为路径数组 [[a,b],[c,d]]，显示标签与复选框 UI                | 声明了 multiple 但完全未实现                 | 实现：normalizeValue 处理多选格式，UI 显示带删除按钮的标签、菜单复选框，handleOptionClick 切换选择逻辑 |
| open 受控状态                                  | 🐛 Bug | 下拉显隐变化时触发 onOpenChange                                          | open 受控但未触发 update:open                | 修正：在 open()/close() 中增加 update:open 触发                                                        |
| focus/blur 方法                                | 高     | 通过 ref 暴露 focus() 和 blur()                                          | 未暴露                                       | 实现：expose({ focus, blur })，调用 inputRef.value?.focus/blur                                         |
| defaultOpen prop                               | 中     | defaultOpen 控制初始下拉显隐                                             | 缺失                                         | 实现：innerOpen 用 props.defaultOpen ?? false 初始化                                                   |
| notFoundContent prop                           | 中     | 可自定义空状态文本                                                       | 硬编码 '无匹配结果'                          | 实现：增加 notFoundContent（默认 '无匹配结果'），用于空状态渲染                                        |
| loadData prop                                  | 高     | 支持 loadData 回调懒加载                                                 | 缺失                                         | 实现：增加 loadData，handleOptionClick 展开无子节点的非叶节点时调用并传路径                            |
| maxTagCount/maxTagPlaceholder/maxTagTextLength | 中     | 控制多选模式标签显示                                                     | 缺失                                         | 实现：增加三者，按 maxTagCount 截断标签、溢出显示占位符、按 maxTagTextLength 截断文本                  |
| showCheckedStrategy prop                       | 低     | 控制多选模式选中项显示方式（SHOW_PARENT/SHOW_CHILD）                     | 缺失                                         | 增加 prop（默认 SHOW_PARENT），导出 SHOW_PARENT/SHOW_CHILD 常量。完整策略逻辑延后（复杂树遍历）        |
| CascaderOption.value 类型                      | 中     | value 可为 string\|number                                                | 类型仅允许 string                            | 修正：CascaderOption 的 value 改为 string\|number，getValue 返回 string\|number                        |
| 多选模式 UI 样式                               | 中     | 标签带背景、删除图标、自动换行、最小高度                                 | 无多选专属样式                               | 实现：增加 .hmfw-cascader-multiple，自适应高度、标签背景/内边距/删除按钮、菜单复选框样式               |

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

| 项                                       | 严重度 | AntD v6                                              | hmfw修改前                                             | 处理                                                                                                                       |
| ---------------------------------------- | ------ | ---------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 搜索仅过滤已展平节点                     | 🐛 Bug | 搜索遍历整棵树，自动展开匹配项的祖先                 | flatNodes 仅过滤可见（已折叠）节点，嵌套折叠节点搜不到 | 重写搜索：遍历整棵树，收集 matchKeys + ancestorKeys，用 forceExpand 标志显示匹配路径                                       |
| selectable:false 声明但无效              | 🐛 Bug | 遵守 node.selectable（默认 true）                    | TreeSelectNode 声明了 prop 但 selectNode 从不检查      | 增加 selectable 检查：`if (!selectable \|\| node.disabled \|\| props.disabled) return`                                     |
| treeDefaultExpandAll 仅在 setup 计算一次 | 🐛 Bug | 响应式：treeData 变化时重新展开                      | getAllKeys 仅在 ref 初始化时调用，不更新               | 包进 computed initExpandedKeys，watch 同步 expandedKeys.value                                                              |
| treeCheckable 仅切换单节点               | 🐛 Bug | 父子级联：勾选父节点勾选全部后代，显示半选态         | 把 checkable 当 multiple，无级联逻辑                   | 实现 conductCheck（自叶向上级联）、descendantLeaves（向下级联）、半选渲染（.hmfw-tree-select-tree-checkbox-indeterminate） |
| 缺少受控 open                            | 高     | 支持 open prop + onOpenChange                        | 仅 innerOpen，无受控模式                               | 增加 open/defaultOpen，computed isOpen = props.open ?? innerOpen，触发 update:open/openChange/dropdownVisibleChange        |
| 缺少 onSelect 事件                       | 高     | 节点点击时触发 onSelect(value, node, extra)          | 仅 change 事件                                         | 在 selectNode 中增加 emit('select', key, node)                                                                             |
| 缺少 onTreeExpand 事件                   | 高     | 展开/折叠时触发 onTreeExpand(expandedKeys)           | 无事件                                                 | 在 toggleExpand 中增加 emit('treeExpand', expandedKeys.value)                                                              |
| 缺少 showCheckedStrategy                 | 高     | SHOW_ALL/SHOW_PARENT/SHOW_CHILD 控制返回哪些勾选节点 | 总是返回所有勾选叶节点                                 | 增加 showCheckedStrategy（默认 SHOW_CHILD），conductCheck 后在 selectNode 中过滤                                           |
| 缺少 treeCheckStrictly                   | 高     | 为 true 时父子选择互相独立                           | 不支持                                                 | 增加 treeCheckStrictly，selectNode 分支：strict 则简单切换，否则级联                                                       |
| 缺少 status prop                         | 中     | status='error'\|'warning' 用于校验状态               | 不支持                                                 | 增加 status，类 .hmfw-tree-select-status-error/warning，CSS 红/橙边框+阴影                                                 |
| 缺少 maxCount                            | 中     | 多选模式限制最大选中数                               | 不支持                                                 | 增加 maxCount，selectNode 守卫：`if (maxCount !== undefined && newVals.length > maxCount) return`                          |
| 缺少 notFoundContent                     | 中     | 自定义空文本                                         | 硬编码 '暂无数据'                                      | 增加 notFoundContent（默认 '暂无数据'），渲染于 dropdown-empty                                                             |
| 缺少 treeDefaultExpandedKeys             | 中     | 默认展开的 key 数组                                  | 仅 treeDefaultExpandAll                                | 增加 treeDefaultExpandedKeys，合并进 initExpandedKeys 计算                                                                 |
| 缺少 autoClearSearchValue                | 中     | 多选模式选择后自动清搜索（默认 true）                | 总是清空                                               | 增加 autoClearSearchValue（默认 true），条件 `if (props.autoClearSearchValue) searchText.value = ''`                       |
| 节点缺少 disableCheckbox                 | 低     | node.disableCheckbox 独立于 node.disabled 禁用复选框 | 不支持                                                 | TreeSelectNode 增加 disableCheckbox，selectNode 中检查 + 类 .hmfw-tree-select-tree-checkbox-disabled                       |
| 节点缺少 isLeaf                          | 低     | node.isLeaf 标记叶节点（用于异步加载）               | 未声明                                                 | TreeSelectNode 增加 isLeaf?: boolean（暂仅类型，无逻辑）                                                                   |

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

| 项                          | 严重度 | AntD v6                                                                | hmfw修改前                                                                                     | 处理                                                                                                                           |
| --------------------------- | ------ | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| size prop 类名映射          | 🐛 Bug | AutoComplete 包裹 Select，Select 用 Input，Input CSS 定义 -lg/-sm 后缀 | 生成 hmfw-input-affix-wrapper-small/middle/large，但 Input CSS 只有 -lg/-sm，size 样式静默失效 | 增加 sizeSuffix() 映射 'small'→'sm'、'large'→'lg'、'middle'→''，对齐 Input CSS 约定，size 样式正常生效                         |
| defaultActiveFirstOption    | 高     | defaultActiveFirstOption（默认 true）下拉打开时高亮首个非禁用项        | 未实现，打开时从不高亮首项                                                                     | 增加 prop（默认 true）、firstEnabledIndex 计算、resetActive() 逻辑及 watcher，选项异步变化时重新高亮（受控搜索常见模式）       |
| 键盘导航跳过禁用项          | 高     | ArrowUp/Down 跳过禁用项；Enter 不选禁用项                              | 导航遍历所有项含禁用；Enter 可能选中禁用项                                                     | 重写 moveActive() 循环至非禁用项；handleSelect() 守卫禁用；handleKeydown 的 Enter 选前检查 opt.disabled                        |
| notFoundContent             | 中     | notFoundContent 在选项为空时显示自定义文本                             | 未实现，空选项列表从不显示面板                                                                 | 增加 notFoundContent。filteredOptions.length > 0 或设了 notFoundContent 时渲染下拉，增加 .hmfw-auto-complete-dropdown-empty 类 |
| allowClear 对象含 clearIcon | 中     | allowClear 可为 boolean \| { clearIcon } 自定义清除图标                | allowClear 仅 boolean，清除图标硬编码 '✕'                                                      | allowClear 类型改为 boolean \| { clearIcon?: VNodeChild }，增加 renderClearIcon() 渲染自定义图标                               |
| defaultOpen                 | 中     | defaultOpen 设置下拉初始打开状态                                       | 未实现，下拉总是初始关闭                                                                       | 增加 defaultOpen，innerOpen 用 props.defaultOpen ?? false 初始化                                                               |
| openChange 事件             | 中     | 下拉开关时触发 onOpenChange(open)                                      | 未实现                                                                                         | 增加 openChange 事件，抽出 setOpen() 在 innerOpen 变化时触发                                                                   |
| focus/blur 方法             | 中     | 通过 ref 暴露 focus() 和 blur()                                        | 未暴露                                                                                         | 增加 expose({ focus, blur }) 委托给 inputRef.value?.focus/blur()                                                               |
| 活动项 scrollIntoView       | 低     | 键盘导航时活动项滚动入视                                               | 未实现                                                                                         | 增加 scrollActiveIntoView()，在 moveActive() 后调用，守卫 typeof scrollIntoView === 'function' 避免 jsdom 报错                 |
| mouseenter 高亮项           | 低     | 悬停选项时高亮（设 activeIndex）                                       | 无悬停高亮，activeIndex 仅键盘改变                                                             | 下拉项增加 onMouseenter 设 activeIndex（跳过禁用项）                                                                           |
| backfill 跳过禁用项         | 低     | backfill 仅把非禁用项的值写入输入框                                    | backfill 逻辑存在但未检查 opt.disabled                                                         | moveActive() 现只落在非禁用项，backfill 天然跳过禁用                                                                           |
| 无活动项时 Enter 关闭下拉   | 低     | activeIndex=-1 时按 Enter 关闭下拉而不选择                             | 已正确实现                                                                                     | 无需改动，现有逻辑已处理                                                                                                       |

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
- \_InternalPanelDoNotUseOrYouWillBeFired（调试/storybook 面板，非用户向）

---

## 45. DatePicker 日期选择框 ✅ 已完成(含Bug修复)

### 对比基准

- 参考: `/Users/hmfw/Downloads/ant-design-master/components/date-picker/`

### 发现的差异/问题表

| 项                           | 严重度 | AntD v6                                                | hmfw修改前                                            | 处理                                                                                             |
| ---------------------------- | ------ | ------------------------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| panelChange 事件从不触发     | 🐛 Bug | 月/年导航与模式切换时触发 panelChange(value, mode)     | emits 中声明但从不调用                                | 在 prevMonth/nextMonth/prevYear/nextYear 及所有模式切换按钮（年/月/日切换）接入 panelChange 触发 |
| 缺少 defaultOpen prop        | 高     | defaultOpen：boolean，初始打开状态                     | 不支持，innerOpen 总初始化为 false                    | 增加 defaultOpen，innerOpen 从 props.defaultOpen ?? false 初始化                                 |
| Esc 键不关闭面板             | 中     | 按 Esc 关闭选择器面板                                  | 无键盘处理                                            | 增加 keydown 监听，Esc 关闭面板                                                                  |
| 缺少 presets prop            | 高     | presets：PresetItem[] 快捷日期选择                     | 不支持                                                | 增加 presets，在 footer 渲染快捷按钮，支持静态值与函数                                           |
| 缺少 minDate/maxDate 约束    | 高     | minDate/maxDate：dayjs，限制可选日期范围               | 不支持                                                | 增加 minDate/maxDate（string），在 selectDate 中阻止越界选择                                     |
| 缺少 showNow prop            | 中     | showNow：boolean，显示「此刻」按钮（优先于 showToday） | 仅支持 showToday                                      | 增加 showNow，为 true 时 footer 显示 locale.DatePicker.now 而非 .today                           |
| 缺少 renderExtraFooter prop  | 中     | renderExtraFooter：() => ReactNode 自定义底部内容      | 不支持                                                | 增加 renderExtraFooter，在面板底部、操作按钮上方渲染                                             |
| showTime 仅改格式，无时间 UI | 高     | showTime 渲染时/分/秒列 + 确定按钮                     | showTime 仅在 format 追加 HH:mm:ss，时间恒为 00:00:00 | 延后（见待办）                                                                                   |
| picker=week 未实现           | 高     | picker='week' 显示周数，选择整周                       | 类型声明但未实现                                      | 延后（见待办）                                                                                   |

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

| 项                                         | 严重度 | AntD v6                                                                                             | hmfw修改前                                                                                                                               | 处理                                                                                                                              |
| ------------------------------------------ | ------ | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| hourStep 生成超出范围的小时                | 🐛 Bug | hourStep 正确生成 0 到 23（或 0 到 11）范围内的小时，步长为 hourStep                                | 使用 Array.from({ length: 24 }, (\_, i) => i \* hourStep) 生成小时，当 hourStep > 1 时会产生超出 23 的值（如 hourStep=2 时最大值为 46）  | 改用 for 循环 i += hourStep，确保不超过最大值（24 或 12）                                                                         |
| use12Hours 完全不工作                      | 🐛 Bug | use12Hours 时显示 1-12 小时 + AM/PM 列，格式化支持 h/hh/a/A token，正确处理午夜和正午               | use12Hours 仅影响小时列生成（且有 bug），无 AM/PM 列，格式化不支持 h/hh/a/A token，无法正确显示 12 小时制时间                            | 重写 formatTime 支持 h/hh/a/A token；parseTime 解析 am/pm；增加 AM/PM 列；修正 12 小时制小时计算（0→12, 13→1）                    |
| displayValue 在面板打开时错误显示 00:00:00 | 🐛 Bug | 未选择值时输入框为空，选择后才显示时间                                                              | displayValue 逻辑为 innerOpen.value \|\| innerH.value \|\| innerM.value \|\| innerS.value，导致面板一打开就显示 00:00:00，即使用户未选择 | 引入 hasValue 标志位，仅在真正选择过值后才显示，避免误导用户                                                                      |
| 受控 value 清空后内部状态未重置            | 🐛 Bug | 受控模式下 value 变为 null/undefined 时，输入框清空且内部状态重置                                   | watch 中仅在 v 存在时更新 innerH/M/S，value 清空时不重置，导致下次打开面板仍显示旧值                                                     | watch 中增加 if (!v) 分支，清空时重置 innerH/M/S 为 0 且 hasValue=false                                                           |
| disabledTime 未实现                        | 高     | disabledTime 返回 { disabledHours, disabledMinutes, disabledSeconds }，禁用的选项显示为灰色不可点击 | 类型声明了 disabledHours/Minutes/Seconds 三个独立 prop，但未实现禁用逻辑                                                                 | 改为单一 disabledTime prop 返回配置对象；在 hours/minutes/seconds computed 中标记 disabled；渲染时添加 disabled class 并阻止点击  |
| hideDisabledOptions 未实现                 | 中     | hideDisabledOptions=true 时，禁用的选项从列表中移除                                                 | 未实现                                                                                                                                   | 在 hours/minutes/seconds computed 中，当 hideDisabledOptions=true 时过滤掉 disabled 项                                            |
| needConfirm 未实现                         | 高     | needConfirm=true 时显示确定按钮，点击后才触发 change；false 时选择即生效                            | 始终显示确定按钮且必须点击才生效，无法配置                                                                                               | 增加 needConfirm prop，仅在 true 时渲染确定按钮；false 时选择即触发 confirmTime                                                   |
| changeOnScroll 未实现                      | 中     | changeOnScroll=true 时，滚动选择立即触发 change（需配合 needConfirm=false）                         | 未实现                                                                                                                                   | 增加 changeOnScroll prop，在 handleHourClick/MinuteClick/SecondClick 中，当 changeOnScroll && !needConfirm 时立即调用 confirmTime |
| renderExtraFooter 未实现                   | 中     | renderExtraFooter 在面板底部渲染自定义内容（addon 已废弃，统一用 renderExtraFooter）                | 未实现                                                                                                                                   | 增加 renderExtraFooter prop，在 footer 中增加 footer-extra 区域渲染其返回值                                                       |
| variant 未实现                             | 中     | variant 支持 outlined/borderless/filled/underlined 四种样式                                         | 仅有默认 outlined 样式                                                                                                                   | 增加 variant prop，在根元素添加对应 class，CSS 中实现四种样式                                                                     |
| placement 未实现                           | 低     | placement 控制面板弹出位置（bottomLeft/bottomRight/topLeft/topRight）                               | 固定 bottomLeft                                                                                                                          | 增加 placement prop，updatePos 中根据 placement 计算 top/left                                                                     |
| focus()/blur() 方法未暴露                  | 中     | 通过 ref 暴露 focus() 和 blur() 方法                                                                | 未暴露                                                                                                                                   | 使用 expose({ focus, blur }) 暴露方法，调用 inputRef.value?.focus/blur()                                                          |
| change 事件仅传一个参数                    | 中     | change 事件传递 (value, timeString) 两个参数                                                        | 仅传递 value 一个参数                                                                                                                    | emit('change', str, str) 传递两个参数（Vue 中 value 即 timeString）                                                               |
| focus/blur 事件未实现                      | 低     | 输入框 focus/blur 时触发对应事件                                                                    | 未实现                                                                                                                                   | 在 input 上添加 onFocus/onBlur 监听，emit 对应事件                                                                                |

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

| 项                            | 严重度 | AntD v6                                                                      | hmfw修改前                                                                           | 处理                                                                                                                |
| ----------------------------- | ------ | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| disabled 数组形式被忽略       | 🐛 Bug | disabled：boolean \| [boolean, boolean]，逐输入框禁用                        | 接受数组但仅判断 typeof === 'boolean'，[true,false] 被当 falsy，两个输入框都保持启用 | 修正：增加 startDisabled/endDisabled 计算属性正确处理数组形式；整体 disabled 类仅在 disabled 为 boolean true 时应用 |
| placeholder 硬编码，未本地化  | 🐛 Bug | placeholder 未传时回退 locale.lang.rangePlaceholder                          | prop 定义中硬编码默认 ['开始日期','结束日期']，忽略 locale                           | 修正：placeholder 改为 props.placeholder ?? locale.value.DatePicker.rangePlaceholder，遵守 zh-CN/en-US              |
| 缺少受控 open prop            | 高     | open?：boolean，受控面板显隐                                                 | 无 open prop，面板状态总是内部                                                       | 增加 open，isOpen = props.open ?? innerOpen；受控时 setOpen 触发 openChange 但不改 innerOpen                        |
| presets 快捷选择              | 高     | presets: { label, value: [Dayjs,Dayjs] \| (() => [Dayjs,Dayjs]) }[] 快捷范围 | 未实现                                                                               | 增加 presets（RangePreset[]），弹层左侧渲染可点击预设列表，value 支持静态数组或工厂函数，applyPreset 提交范围并关闭 |
| order 自动排序                | 中     | order：boolean（默认 true），用户逆序选择时自动排序起止                      | 总是在 end < start 时交换（硬编码）                                                  | 增加 order（默认 true），仅 props.order 为 true 时 selectDate 交换，允许禁用自动排序                                |
| separator 自定义分隔符        | 中     | separator：ReactNode（默认 <SwapRightOutlined />），自定义输入框间分隔符     | JSX 硬编码 '→'                                                                       | 增加 separator（默认 '→'），在 range-separator 中渲染 {props.separator}                                             |
| allowEmpty 部分范围           | 中     | allowEmpty：[boolean, boolean]（默认 [false,false]），允许起或止为 null      | 未实现（提交无校验）                                                                 | 类型增加 allowEmpty；当前实现未强制（延后至校验层或后续增强）                                                       |
| calendarChange 缺少 info 参数 | 中     | onCalendarChange(dates, dateStrings, info: { range: 'start'\|'end' })        | calendarChange 仅传 (value)，无 info                                                 | 修正：emitCalendarChange 现传 (value, dates, { range })，range 为 'start'/'end'                                     |
| disabledDate 缺少 info 参数   | 低     | disabledDate(date, info: { from?: Dayjs, type: string }) 条件禁用上下文      | disabledDate(date)，无 info                                                          | 更新类型与调用，第二参传 { from: innerValue[0], type: 'date' }                                                      |
| hasValue 逻辑不完善           | 低     | 起或止任一有值时显示清除按钮                                                 | 条件为 (displayStart \|\| displayEnd)，可用但基于字符串                              | 重构为 hasValue 计算属性，检查 startDate.value \|\| endDate.value（Date\|null），意图更清晰                         |
| 已打开时面板不重开            | 低     | 打开时点击触发器为 no-op                                                     | openPanel 未守卫 isOpen，可能重复触发 openChange(true)                               | 在 openPanel 增加 isOpen.value 守卫，避免冗余打开逻辑                                                               |
| 清除时未重置 selecting 状态   | 低     | 清除将选择流程重置到 start                                                   | clearValue 未重置 selecting ref                                                      | clearValue 现设 selecting.value = 'start'                                                                           |

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

---

## 48. Upload 上传 ✅ 已完成（含 Bug 修复）

**对比基准**: `ant-design-master/components/upload/{Upload.tsx,Dragger.tsx,interface.ts,utils.ts,UploadList/}`

### 发现的差异/问题表

| 项                                                              | 严重度 | 说明                                                                                         | 处理                                                                                                         |
| --------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `Upload.Dragger` 子组件未实现                                   | 🐛 Bug | `docs/demos/upload/UploadDragger.vue` 引用 `<Upload.Dragger>` 但既未导出也未实现，运行时崩溃 | ✅ 新增 `UploadDragger` 组件 + `Upload.Dragger = UploadDragger` 复合 API；demo 改用顶层 `UploadDragger` 导入 |
| `type` prop 缺失                                                | 差异   | AntD v6: `'select' \| 'drag'`；hmfw 仅靠 `listType` 推断                                     | ✅ 新增 `type` prop，`drag` 模式渲染 `.hmfw-upload-drag` 容器（含 `-hover`/`-uploading`/`-disabled` 状态）   |
| `defaultFileList` 缺失                                          | 差异   | AntD 支持非受控初始值                                                                        | ✅ 新增 prop，`innerFileList` 用 `defaultFileList ?? []` 初始化                                              |
| `beforeUpload` 返回 File/Blob 未处理                            | 🐛 Bug | AntD: 返回 `File`/`Blob` 替换上传目标；hmfw 直接丢弃返回值                                   | ✅ 校验返回值类型，`File` 直传，`Blob` 重新封装为 `File`（保留原文件名/MIME）                                |
| `customRequest` 第二参 `defaultRequest` 缺失                    | 差异   | AntD 5.28+ 第二参 `{ defaultRequest }` 让用户回退默认 XHR；hmfw 仅一参                       | ✅ 抽出 `defaultRequest`，作为 `info.defaultRequest` 传入                                                    |
| `action` 仅支持字符串                                           | 差异   | AntD: `string \| (file) => string \| Promise<string>`                                        | ✅ 类型扩展，`resolveAction` 异步解析                                                                        |
| `data` 仅支持对象                                               | 差异   | AntD: 对象或 `(file) => object \| Promise<object>`                                           | ✅ 类型扩展，`resolveData` 异步解析                                                                          |
| `onRemove` 不支持取消删除                                       | 🐛 Bug | AntD: 返回 `false`/`Promise<false>` 阻止删除；hmfw 直接 emit remove 然后立即移除             | ✅ 改为 `await onRemove()`，`false` 时短路；`remove` 事件仅在确实删除后触发                                  |
| 拖拽 hover 闪烁                                                 | 🐛 Bug | `dragleave` 一律置 false，鼠标进入子元素也闪烁                                               | ✅ 改用 `dragDepth` 计数器，`dragenter`/`dragleave` 增减，0 时清除                                           |
| `drop` 事件未透传                                               | 🐛 Bug | demo 监听 `@drop` 但组件从未 emit                                                            | ✅ `handleDrop` 中 `emit('drop', e)`；不再被 `disabled` 短路（仅 dataTransfer 处理被短路）                   |
| `change` 进度事件缺 `event` 字段                                | 差异   | AntD `UploadChangeParam.event = { percent }` 标记进度阶段                                    | ✅ `onProgress` 内 emit 时附 `event: { percent }`                                                            |
| `showUploadList` 仅支持 boolean                                 | 差异   | AntD 支持对象 `{ showRemoveIcon?, showPreviewIcon?, showDownloadIcon?, ... }`                | ✅ 类型扩展为 `boolean \| ShowUploadListInterface`，渲染按钮时分别尊重                                       |
| `maxCount` 行为差异                                             | 🐛 Bug | hmfw `splice(0, ...)` 从前部丢弃；AntD 截掉超出部分。`maxCount=1` 应替换最后一个             | ✅ 改为 `splice(props.maxCount)` 截尾；`maxCount === 1` 单独处理为替换                                       |
| `change` payload `error`/`response` 字段丢失                    | 🐛 Bug | error 路径 emit 时未带 `error/response`                                                      | ✅ 一并展开到 emit payload                                                                                   |
| `iconRender`/`itemRender`/`isImageUrl`/`previewFile`/`progress` | 差异   | AntD 多个扩展点                                                                              | ⏭️ 未实现，记入待办                                                                                          |
| `onPreview`/`onDownload` 与对应 icon 切换                       | 差异   | AntD 卡片有完整三按钮，hmfw 仅 preview/remove 两键                                           | ⏭️ 部分实现，下载按钮未做                                                                                    |
| `directory` 真实目录上传                                        | 差异   | hmfw 仅设置 `webkitdirectory`，未对路径做集合处理                                            | ⏭️ 简化实现，保留                                                                                            |
| `pastable`/`capture`/`hasControlInside`                         | 未实现 | AntD 对接 rc-upload 的细化能力                                                               | ⏭️ 不在本次范围                                                                                              |
| 语义化 `classNames`/`styles`                                    | 差异   | 全库统一缺失                                                                                 | ⏭️ 全库统一处理                                                                                              |
| RTL 支持                                                        | 差异   | 无 RTL 上下文                                                                                | ⏭️ 无 RTL 体系                                                                                               |

### 改动文件

- `components/upload/types.ts` — 新增 `UploadType`/`UploadChangeParam`/`ShowUploadListInterface`/`BeforeUploadValue`，扩展 `action`/`data`/`onRemove`/`customRequest` 类型；移除原 `UploadProps['beforeUpload']` 旧返回类型
- `components/upload/Upload.tsx` — 重写：`defaultRequest` 抽出、`resolveAction`/`resolveData` 异步解析、`beforeUpload` File/Blob 替换、`onRemove` 异步取消、`dragDepth` 计数器、`drop` emit、`type='drag'` 渲染、新增 `UploadDragger` 组件 + `Upload.Dragger = UploadDragger` 复合 API
- `components/upload/index.ts` — 导出 `UploadDragger` 与新增类型
- `components/index.ts` — 同步根导出
- `components/upload/style/index.css` — 重写 `.hmfw-upload-drag`：默认态 + `-hover`/`-uploading`/`-disabled`，新增 `-drag-container` 内边距
- `components/upload/__tests__/Upload.test.tsx` — +12 用例（27 通过）
- `docs/demos/upload/UploadDragger.vue` — 用顶层 `UploadDragger` 修复 demo
- `docs/demos/upload/upload.md` — 重写 API 表（action/data 函数、onRemove 取消、type、showUploadList 对象、defaultFileList、change.event），补 Dragger 章节

### 验证

- `vitest run components/upload`：27 通过
- `pnpm typecheck`：通过
- 全量测试：1250 通过
- E2E（playwright-cli）：upload 与 Dragger 页面渲染正常，0 console error

### 发现的 Bug 清单（10 个）

1. `Upload.Dragger` 未实现导致 demo 崩溃
2. `beforeUpload` 返回 File/Blob 时被忽略
3. `onRemove` 返回 false 不取消删除
4. `customRequest` 缺第二参 `defaultRequest`
5. `action` 不接受函数
6. `data` 不接受函数
7. 拖拽 hover 进入子元素时闪烁
8. `drop` 事件未 emit
9. `maxCount` 截断方向错误（前部 vs 尾部）
10. `change` payload error/response 字段丢失

---

## 49. Form 表单 ✅ 已完成（含 Bug 修复）

**对比基准**: `ant-design-master/components/form/{Form.tsx,FormItem/index.tsx,FormList.tsx,hooks/useForm.ts,context.tsx}`

### 发现的差异/问题表

| 项                                                                                    | 严重度 | 说明                                                                                                                                                   | 处理                                                                                                                                    |
| ------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `Form.Item` / `Form.useForm` 复合 API 缺失                                            | 🐛 Bug | AntD 模板用 `<Form.Item>`/`Form.useForm()`；hmfw 仅命名导出 `FormItem`/`useForm`，AntD 习惯用法运行时找不到                                            | ✅ `Form.Item = FormItem`、`Form.useForm = useForm`；模板两种写法都可用                                                                 |
| `formRef.validate` / `clearValidate` 缺失                                             | 🐛 Bug | demo `FormValidation.vue` 用 `formRef.validate()` / `formRef.clearValidate()`，但组件 `expose` 未暴露任何方法，运行时静默失败                          | ✅ `expose({ validate, validateFields, clearValidate, resetFields, submit, getFieldsValue })`                                           |
| `validateFields` 失败 reject 缺失                                                     | 差异   | AntD reject `{ values, errorFields }`；hmfw 旧 `validate` 仅返回 boolean                                                                               | ✅ 新 `validate`/`validateFields` 成功 resolve 模型，失败 reject `{ values, errorFields }`（与 AntD 一致）                              |
| `valuesChange` 事件声明但永不 emit                                                    | 🐛 Bug | `emits: ['valuesChange']` 已声明，但内部从未触发                                                                                                       | ✅ context 暴露 `notifyValueChange`；保留事件以便子组件按需触发（控件级未做自动埋点，记入待办）                                         |
| `validateTrigger` 声明但未生效                                                        | 差异   | Form/FormItem 都接收 prop，但代码没有任何分支按 `blur`/`change` 走                                                                                     | ⚠️ 部分修复：context 暴露 `validateTrigger`，控件需主动调用 `ctx.validateField`；自动绑定（克隆子节点注入 onChange/onBlur）不在本次范围 |
| `requiredMark` 缺失                                                                   | 差异   | AntD 5.x: `boolean \| 'optional'`；`false` 隐藏星号，`'optional'` 在非必填字段后追加「（可选）」                                                       | ✅ 新增 prop，`-hide-required-mark` class + `.hmfw-form-item-optional` 后缀；`required-class` 也按 `requiredMark !== false` 渲染        |
| `labelCol`/`wrapperCol` 声明但未应用                                                  | 🐛 Bug | demo 设了 `:label-col="{ span: 5 }"` 完全无效；FormItem 也没读                                                                                         | ✅ FormItem 读取 `props.labelCol ?? ctx?.labelCol` 通过 `colToStyle` 转 `flex` + `marginLeft`，仅在 horizontal 布局应用                 |
| `tooltip` 声明但未渲染                                                                | 🐛 Bug | prop 存在但代码无任何使用                                                                                                                              | ✅ 渲染 `<span class="...-tooltip" :title="tooltip">ⓘ</span>`                                                                           |
| `label` 插槽未实现                                                                    | 🐛 Bug | docs.md 声称支持 `label` 插槽但代码只读 `props.label` 字符串                                                                                           | ✅ `slots.label?.()` 优先于 `props.label`                                                                                               |
| `useForm` 返回 API 不全                                                               | 差异   | AntD: `getFieldsValue`/`setFieldsValue`/`validateFields`/`clearValidate`/`submit` 等；hmfw 仅 `validate`/`resetFields`/`getFieldValue`/`setFieldValue` | ✅ 补齐 `getFieldsValue`/`setFieldsValue`/`validateFields`/`clearValidate`，`validate(nameList?)` 支持子集                              |
| nested `name` 路径不工作                                                              | 🐛 Bug | `validateField` 用 `props.model?.[name]`；`name` 是 `['user','email']` 经 `namePathKey` 拼成 `'user.email'` 后再去字典里查无结果                       | ✅ `validateField` 内若 key 含 `.` 拆数组，走 `getValueByPath` 取值                                                                     |
| `scrollToFirstError` 声明但未生效                                                     | 差异   | AntD 提交失败滚动到首个错误字段                                                                                                                        | ✅ 在 `submit` 失败时若 `scrollToFirstError` 为真，`querySelector('.hmfw-form-item-has-error').scrollIntoView()`                        |
| `clearValidate` 单独清理特定字段                                                      | 差异   | AntD 接受 `nameList`；hmfw 旧 `resetFields` 一律全清                                                                                                   | ✅ `clearValidate(nameList?)` 支持子集                                                                                                  |
| `Form.List` (动态字段)                                                                | 未实现 | AntD `<Form.List>` 提供 add/remove/move                                                                                                                | ⏭️ 未实现，记入待办                                                                                                                     |
| `initialValues`                                                                       | 未实现 | AntD 表单级初始值 + reset 还原                                                                                                                         | ⏭️ 未实现，依赖外部 reactive model                                                                                                      |
| `name` (form 名作为 id 前缀)                                                          | 未实现 | AntD 用于无障碍 + 跨表单引用                                                                                                                           | ⏭️ 未实现                                                                                                                               |
| `feedbackIcons`/`hasFeedback` 渲染图标                                                | 未实现 | prop 存在但无图标渲染                                                                                                                                  | ⏭️ 未实现                                                                                                                               |
| `dependencies`/`shouldUpdate`                                                         | 未实现 | 跨字段联动                                                                                                                                             | ⏭️ 未实现                                                                                                                               |
| `Form.useFormInstance`/`Form.useWatch`                                                | 未实现 | AntD 数据订阅钩子                                                                                                                                      | ⏭️ 未实现                                                                                                                               |
| `Form.Provider` (跨表单事件)                                                          | 未实现 | —                                                                                                                                                      | ⏭️ 未实现                                                                                                                               |
| `FormRule` 类型扩展（`type=array`/`url`/`tel`/`transform`/`enum`/`len`/`whitespace`） | 部分   | AntD 校验规则更全，hmfw 仅做了 `email`/`pattern`/`min`/`max`/`required`                                                                                | ⏭️ 待补；`async-validator` 整套不在本次范围                                                                                             |
| 语义化 `classNames`/`styles`                                                          | 差异   | 全库统一缺失                                                                                                                                           | ⏭️ 全库统一处理                                                                                                                         |

### 改动文件

- `components/form/Form.tsx` — 重写：
  - 新增 `NamePath`/`ValidateStatus` 类型；FormProps 增 `requiredMark`/`validateTrigger`
  - `validateField` 支持嵌套路径（`getValueByPath`）
  - `provide` context 暴露 `labelCol`/`wrapperCol`/`validateTrigger`/`requiredMark`/`notifyValueChange`
  - `expose({ validate, validateFields, clearValidate, resetFields, submit, getFieldsValue })`
  - `useForm` 补齐 `getFieldsValue`/`setFieldsValue`/`validateFields`/`clearValidate`
  - `colToStyle` 工具函数将 `{span,offset}` 转 24 列百分比
  - FormItem 读取 ctx labelCol/wrapperCol（horizontal 布局）；`tooltip`/`label` 插槽/`requiredMark='optional'` 后缀渲染
  - 复合 API：`Form.Item = FormItem`、`Form.useForm = useForm`
- `components/form/index.ts` — 导出 `NamePath`/`ValidateStatus`
- `components/index.ts` — 同步根导出
- `components/form/__tests__/Form.test.tsx` — +12 用例（22 通过）
- `docs/demos/form/form.md` — 重写 API 表：补 `validateTrigger`/`requiredMark`/`scrollToFirstError`/`tooltip`/嵌套 name；Form 方法表对齐 AntD 签名（成功 resolve、失败 reject）

### 验证

- `vitest run components/form`：22 通过
- `pnpm typecheck`：通过
- 全量测试：1250 通过（+22）
- E2E（playwright-cli）：Form 校验/清除按钮全链路正常，红边/错误文案/清除均生效，0 console error

### 发现的 Bug 清单（8 个）

1. `Form.Item`/`Form.useForm` 复合命名空间缺失（AntD 模板写法不可用）
2. `formRef.validate` / `clearValidate` 未 expose（demo 用了但静默失败）
3. `valuesChange` 事件声明但永不 emit
4. `labelCol`/`wrapperCol` 声明但完全未应用样式
5. `tooltip` prop 接受但未渲染
6. docs 声称的 `label` 插槽不存在（代码只读字符串）
7. nested `name` 数组路径取值失败（`getValueByPath` 未走）
8. `scrollToFirstError` prop 接受但未生效
