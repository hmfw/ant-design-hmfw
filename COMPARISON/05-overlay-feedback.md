# D 浮层/反馈（50–）

← 回到 [COMPARISON 索引](../COMPARISON.md)

包含：Tooltip · Popover · Popconfirm · Modal · Drawer · Message · Notification · Tour · Image

待办：notification · tour · image

---

## 50. Tooltip 文字提示 ✅ 已完成（含 Bug 修复）

**对比基准**: `ant-design-master/components/tooltip/{index.tsx,util.ts,hook/useMergedArrow.ts}`

### 发现的差异/问题表
| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| 空 `title` 仍渲染浮层 | 🐛 Bug | AntD v6 `noTitle` 守卫：`title` 为 `''`/`null`/`undefined` 时不挂载浮层；hmfw 任意值都开 | ✅ 新增 `hasTitle` computed；`setOpen(true)` 在 `!hasTitle` 时短路；render 阶段 `shouldRender` 必须 `hasTitle` |
| `focus` 触发对内嵌 input 失效 | 🐛 Bug | 用 `onFocus`/`onBlur`（不冒泡），子节点是 `<input>` 时事件不触达包装 `<div>`；`focusin`/`focusout` 才冒泡 | ✅ 改为 `onFocusin`/`onFocusout` |
| 滚动/缩放后 tooltip 漂移 | 🐛 Bug | 仅在显隐切换时计算位置，`scroll`/`resize` 期间不更新 | ✅ `onMounted` 注册 `window.addEventListener('scroll', handler, true)` + `resize`，可见态动态重算；`onBeforeUnmount` 注销 |
| `autoAdjustOverflow` 缺失 | 差异 | AntD 默认 true，溢出视口时翻转方向 | ✅ 新增 prop（默认 true），`updatePosition` 计算后检测视口溢出；尝试翻转，仅当翻转后真的不溢出时才采纳 |
| `getPopupContainer` 缺失 | 差异 | AntD 用于挂到 Modal/Drawer 内部 | ✅ 新增 prop，渲染时若返回容器则 Teleport 到该容器，否则 `body` |
| `zIndex` prop 缺失 | 差异 | AntD 可覆盖默认值；hmfw 硬编码 1070 | ✅ 新增 prop，写入 inline style |
| `arrow` 仅 boolean | 差异 | AntD: `boolean \| { pointAtCenter?: boolean }` | ✅ 类型扩展，对象时挂 `.hmfw-tooltip-arrow-point-at-center` class |
| `afterOpenChange` 事件缺失 | 差异 | AntD 浮层动画结束后触发 | ✅ `setOpen` 内 `setTimeout(..., 0)` emit（让消费者在 fake timer 下也可拦截） |
| `destroyOnHidden` (5.25+) 缺失 | 差异 | AntD 重命名 `destroyTooltipOnHide` | ✅ 新增 prop，`destroyTooltipOnHide` 保留为兼容别名 |
| `title` 仅 string | 差异 | AntD: `ReactNode \| RenderFunction`；含 0 数字 | ✅ 类型扩展为 `string \| number \| VNode \| () => VNode`；render 时若是函数则调用 |
| `overlay` 别名缺失 | 差异 | AntD 旧 prop，作为 `title` 别名 | ✅ 新增 prop，title 优先 |
| `contextMenu` outside-click 不关闭 | 🐛 Bug | `handleOutsideClick` 仅检查 `click` trigger，contextMenu 打开后无法点外部关闭 | ✅ 加入 `contextMenu` 也响应 outside click 关闭 |
| `builtinPlacements`/`align` 自定义对齐 | 未实现 | AntD 完整 dom-align | ⏭️ 简化实现保留，记入待办 |
| `motion`/动画过渡 | 未实现 | AntD `zoom-big-fast` motion | ⏭️ 仅 CSS opacity transition |
| 主题预设色（`colors.ts` 颜色名） | 部分 | AntD 支持 `green`/`pink` 等预设；hmfw 仅原始 CSS 颜色 | ⏭️ 待补 |
| 语义化 `classNames`/`styles`/`overlayInnerStyle` | 差异 | 全库统一缺失 | ⏭️ 全库统一处理 |
| RTL 支持 | 差异 | 无 RTL 体系 | ⏭️ 跳过 |
| `forceAlign` ref 方法 | 未实现 | AntD `tooltipRef.current.forceAlign()` 强制重对齐 | ⏭️ 通过 scroll/resize 已自动重算，未单独 expose |

### 改动文件
- `components/tooltip/types.ts` — 新增 `TooltipArrow`/`TooltipTitle`，扩展 `TooltipProps`（`overlay`/`destroyOnHidden`/`autoAdjustOverflow`/`zIndex`/`getPopupContainer`）
- `components/tooltip/Tooltip.tsx` — 重写：
  - `hasTitle` computed（含 0 与 slot 回退）；空 title 不挂载浮层
  - `focusin`/`focusout` 替代 `focus`/`blur`
  - `scroll`/`resize` 监听重算位置
  - `computeForPlacement` 抽出 + `autoAdjustOverflow` 翻转逻辑
  - `actualPlacement` ref 反映实际方向
  - `getPopupContainer` 解析 Teleport 目标
  - `arrow` 对象支持 `pointAtCenter`
  - `title` 函数渲染 + `overlay` 别名
  - `afterOpenChange` 通过 `setTimeout(..., 0)` 异步 emit
  - `contextMenu` 也参与 outside click 关闭
- `components/tooltip/index.ts` — 导出 `TooltipArrow`/`TooltipTitle`
- `components/index.ts` — 同步根导出
- `components/tooltip/__tests__/Tooltip.test.tsx` — `afterEach` 清理 teleport 残留；+13 用例（21 通过）
- `docs/demos/tooltip/tooltip.md` — 重写 API 表（autoAdjustOverflow/zIndex/destroyOnHidden/overlay/title 类型/arrow 对象/getPopupContainer/afterOpenChange）

### 验证
- `vitest run components/tooltip`：21 通过
- `pnpm typecheck`：通过
- 全量测试：1263 通过（+13）
- E2E（playwright-cli）：tooltip 页面 hover 触发，浮层正常出现于 trigger 上方，0 console error

### 发现的 Bug 清单（4 个）
1. 空 `title` 仍渲染浮层（与 AntD `noTitle` 行为不一致）
2. `focus` 触发对内嵌 input 失效（事件不冒泡）
3. 滚动/缩放后 tooltip 位置漂移
4. `contextMenu` 打开后 outside click 无法关闭

---

## 51. Popover 气泡卡片 ✅ 已完成（含 Bug 修复）

**对比基准**: `ant-design-master/components/popover/{index.tsx,PurePanel.tsx}`（AntD 中 Popover 直接包裹 Tooltip）

### 设计决定：让 Popover 委托 Tooltip
AntD React 实现 Popover 是用 `<Tooltip>` 包一层，把 title+content 组合渲染到 popup body。原 hmfw Popover 把 Tooltip 的整套定位/触发/teleport 代码完整抄了一份，导致 Tooltip 修复的 bug 在 Popover 上仍然存在（focus 不冒泡、滚动漂移、空 title 仍渲染……）。这次重写让 Popover 真正委托 Tooltip：
- 给 Tooltip 增加 `customPrefixCls` prop，让 wrappers 把弹窗根 class 改成 `.hmfw-popover`
- 给 Tooltip 增加 `popupStyle` prop，承载 wrapper 的 `overlayStyle`
- Popover 把 `<div class="popover-inner">` 通过 Tooltip 的 `title` slot 喂入，于是位置/触发/视口翻转/scroll 监听全部自动继承

### 发现的差异/问题表（多数 bug 与 Tooltip 同源，借助委托一次性修好）
| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| 重复实现定位/触发逻辑 | ⚠️ 设计 | 与 Tooltip 完全雷同的几百行代码副本，修复需双倍工作量 | ✅ 改写为 Tooltip 包装；删除重复代码 |
| 空 `title`+`content` 仍渲染浮层 | 🐛 Bug | 与 Tooltip 同源，AntD `noTitle` 守卫缺失 | ✅ `hasOverlay` computed；只有有内容时才传 `title` slot |
| `focus` 触发对内嵌 input 失效 | 🐛 Bug | `onFocus`/`onBlur` 不冒泡 | ✅ 委托给 Tooltip（已用 `focusin`/`focusout`） |
| 滚动/缩放后 popover 漂移 | 🐛 Bug | 仅显隐时计算，scroll/resize 不重算 | ✅ 委托给 Tooltip（已注册 scroll/resize 监听） |
| `autoAdjustOverflow` 缺失 | 差异 | AntD 默认 true，溢出翻转 | ✅ 委托给 Tooltip + 暴露 prop |
| `getPopupContainer` 缺失 | 差异 | 无法挂到 Modal/Drawer 内 | ✅ 委托 + 暴露 prop |
| `zIndex` prop 缺失 | 差异 | 硬编码 1070 | ✅ 委托 + 暴露 prop |
| `arrow` 仅 boolean | 差异 | AntD: `boolean \| { pointAtCenter? }` | ✅ 类型扩展为 `TooltipArrow`，委托 |
| `afterOpenChange` 事件缺失 | 差异 | AntD 浮层动画结束触发 | ✅ 委托 emit |
| `destroyOnHidden` (5.25+) 缺失 | 差异 | 同 Tooltip | ✅ 委托 + 暴露 prop |
| `title`/`content` 仅 string | 差异 | AntD `ReactNode \| RenderFunction` | ✅ 类型扩展为 `PopoverContent`；render 函数被自动调用 |
| `color` prop 缺失 | 差异 | AntD 支持 | ✅ 委托给 Tooltip |
| `contextMenu` 触发不参与 outside click 关闭 | 🐛 Bug | 同 Tooltip | ✅ 委托修复 |
| 仅有 content 时 popover 标题 div 多余渲染 | 优化 | 旧实现 `(props.title \|\| slots.title)` 仍可能为空字符串导致空 `<div class="popover-title">` | ✅ render 时严格校验非空才渲染 title 容器 |
| 主题预设色 | 部分 | 仅原始 CSS 颜色 | ⏭️ 待补 |
| 语义化 `classNames`/`styles` | 差异 | 全库统一缺失 | ⏭️ 全库统一处理 |
| RTL | 差异 | 无 RTL 体系 | ⏭️ 跳过 |

### 改动文件
- `components/popover/types.ts` — 新增 `PopoverContent`；扩展 props（autoAdjustOverflow/zIndex/destroyOnHidden/getPopupContainer/color/arrow 对象）
- `components/popover/Popover.tsx` — 完全重写：`h(Tooltip, ..., { default, title })` 委托；title/content 渲染逻辑保留在 Popover 这一层
- `components/popover/index.ts` — 导出 `PopoverContent`
- `components/index.ts` — 同步根导出
- `components/tooltip/Tooltip.tsx` — 新增 `customPrefixCls` 和 `popupStyle` 两个 wrapper 接口（BC：未传时行为不变）
- `components/popover/__tests__/Popover.test.tsx` — `afterEach` 清理 + +7 用例（14 通过）
- `docs/demos/popover/popover.md` — 重写 API 表（autoAdjustOverflow/zIndex/destroyOnHidden/arrow 对象/getPopupContainer/afterOpenChange/title 函数类型）

### 验证
- `vitest run components/popover`：14 通过
- `vitest run components/tooltip`：21 通过（确认 Tooltip 改造无 BC 破坏）
- `pnpm typecheck`：通过
- 全量测试：1270 通过（+7 popover）
- E2E（playwright-cli）：popover 页面 hover/click 触发器双双正常出浮层，0 console error

### 发现的 Bug 清单（5 个）
1. 重复实现 Tooltip 整套逻辑（架构性 bug，导致单点修复扩散到双点）
2. 空 `title`+`content` 仍渲染浮层
3. `focus` 触发对内嵌 input 失效
4. 滚动/缩放后 popover 位置漂移
5. `contextMenu` 触发后 outside click 无法关闭

---

## 52. Popconfirm 气泡确认框 ✅ 已完成（含 Bug 修复）

**对比基准**: `ant-design-master/components/popconfirm/{index.tsx,PurePanel.tsx}`（AntD 中 Popconfirm 包裹 Popover，Popover 包裹 Tooltip）

### 设计决定：直接委托 Tooltip（绕过 Popover）
AntD Popconfirm 是 Popover 的特化（Popover 提供 title+content 拆分，Popconfirm 把 content 替换成自己结构化的 OK/Cancel 卡片）。但 hmfw Popover 已经把 title/content 双区都用掉了，Popconfirm 想塞进去会撞结构。**这次让 Popconfirm 直接委托 Tooltip**：
- Tooltip 已暴露 `customPrefixCls`（让 popup 根 class 改成 `.hmfw-popconfirm`）和 `popupStyle`（承载 `overlayStyle`）
- 通过 Tooltip 的 `title` slot 喂入完整结构（icon + title/description + buttons），Tooltip 的 `-inner` 包装直接用 popconfirm CSS 提供 background/padding/shadow
- 触发器/定位/视口翻转/scroll 重算/focus 冒泡/outside click 全部从 Tooltip 自动继承

### 发现的差异/问题表
| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| 重复实现 Tooltip 整套定位逻辑 | ⚠️ 设计 | 与 Tooltip / Popover 完全雷同的几百行代码副本 | ✅ 改写为 Tooltip 委托；删除重复代码 |
| 硬编码 click 触发，`trigger` prop 缺失 | 🐛 Bug | AntD 允许 `'hover' \| 'click' \| 'focus' \| 'contextMenu'`；hmfw 在 trigger `<div onClick>` 内强制点击，连声明都没有 trigger prop | ✅ 新增 `trigger` prop（默认 `'click'`，AntD 一致）；委托 Tooltip 处理所有触发模式 |
| `confirm`/`cancel` 不带 MouseEvent | 🐛 Bug | AntD 签名 `(e?: MouseEvent) => void`；hmfw 单纯 `emit('confirm')` | ✅ 改为 `emit('confirm', e)` / `emit('cancel', e)` |
| `okType: 'danger'` 旧简写未对齐 | 🐛 Bug | hmfw 把 `'danger'` 当 ButtonType（未导出值），实际未生效 danger 样式；AntD 视作 `primary + danger` 简写 | ✅ `isDangerOk` 显式判断，转为 `type: 'primary'` + `danger: true` |
| `okButtonProps`/`cancelButtonProps` 缺失 | 差异 | AntD 透传 props，常用于 loading/disabled | ✅ 新增 props，spread 到对应 Button |
| `title`/`description` 仅 string | 差异 | AntD `ReactNode \| RenderFunction` | ✅ 类型扩展为 `PopconfirmContent`；render 函数自动调用 |
| `icon` 仅 string | 差异 | AntD `ReactNode`，常用于自定义图标组件 | ✅ 类型扩展，slot/prop 都接受；slot 优先 |
| 空 `title`+`description` 仍渲染浮层 | 🐛 Bug | 与 Tooltip/Popover 同源 | ✅ `hasOverlay` computed；空时不传 title slot，触发 Tooltip 的 noTitle 守卫 |
| `disabled` 不阻止触发 | 🐛 Bug | hmfw setOpen 早返但 outside-click 路径仍会显示之前打开的 popup | ✅ disabled 时不传 title slot，从 DOM 层就不挂载 popup |
| `focus` 触发对内嵌 input 失效 | 🐛 Bug | 同 Tooltip | ✅ 委托 Tooltip（focusin/focusout） |
| 滚动/缩放后 popconfirm 漂移 | 🐛 Bug | 同 Tooltip | ✅ 委托 Tooltip 自动重算 |
| `autoAdjustOverflow`/`getPopupContainer`/`zIndex`/`destroyOnHidden`/`afterOpenChange`/`arrow` 对象 | 差异 | 全 Tooltip 套件未暴露 | ✅ 委托 Tooltip + 暴露 prop/事件 |
| outside click 用 `mousedown` 而非 `click` | 优化 | 与 Popover 不一致；右键也会触发 | ✅ 委托 Tooltip 后统一 `click` |
| `defaultOpen` 缺失 | 差异 | 仅 `open` 受控 | ✅ 新增 prop |
| `PopconfirmProps` 类型未导出 | 差异 | 只导出组件 | ✅ index.ts 导出 `PopconfirmProps`/`PopconfirmContent`/`PopconfirmOkType` |
| `overlayInnerStyle` 应用到内层 | 部分 | hmfw 之前直接挂在 `-inner`；委托后内层在 Tooltip 里，需要单独传递 | ⏭️ 暂未透传；因 Tooltip 没有 inner-style 接口，记入待办（影响极小：背景/padding/shadow 仍走 popconfirm CSS） |
| `onConfirm` 返回 Promise → loading | 差异 | AntD：返回 Promise 时 OK 按钮显示 loading 直到 resolve | ⏭️ 设计上 Vue emit 不返回值；建议消费者通过 `okButtonProps.loading` 受控（已支持） |
| 主题预设色 | 部分 | 仅原始颜色 | ⏭️ 待补 |
| 语义化 classNames/styles | 差异 | 全库统一缺失 | ⏭️ 全库统一处理 |
| RTL | 差异 | 无 RTL 体系 | ⏭️ 跳过 |

### 改动文件
- `components/popconfirm/types.ts` — **新建**：`PopconfirmContent`、`PopconfirmOkType`、完整 `PopconfirmProps`
- `components/popconfirm/Popconfirm.tsx` — 完全重写：`h(Tooltip, ..., { default, title })` 委托；icon/title/description/buttons 结构通过 title slot 数组喂入
- `components/popconfirm/index.ts` — 导出类型
- `components/index.ts` — 同步根导出
- `components/popconfirm/__tests__/Popconfirm.test.tsx` — 加 `useFakeTimers` + `afterEach` 清理 teleport；+13 用例（21 通过）
- `docs/demos/popconfirm/popconfirm.md` — 重写 API 表（trigger/okType danger/okButtonProps/cancelButtonProps/icon/zIndex/destroyOnHidden/autoAdjustOverflow/afterOpenChange/title 函数类型）

### 验证
- `vitest run components/popconfirm`：21 通过
- `vitest run components/popover components/tooltip`：35 通过（确认 wrapper 接口无 BC 破坏）
- `pnpm typecheck`：通过
- 全量测试：1283 通过（+13）
- E2E（playwright-cli）：popconfirm 页面点击「删除」弹出 ⚠ 图标 + 标题 + 取消/确定按钮，点击确定关闭，0 console error

### 发现的 Bug 清单（8 个）
1. 重复实现 Tooltip 定位/触发整套（架构性 bug）
2. `trigger` prop 缺失，硬编码 click
3. `confirm`/`cancel` emit 不带 MouseEvent 参数
4. `okType: 'danger'` 简写未对齐 AntD（danger 样式未生效）
5. `disabled` 未真正阻止 popup 挂载（DOM 层仍存在）
6. `focus` 触发对内嵌 input 失效（继承 Tooltip 同源 bug）
7. 滚动/缩放后 popconfirm 漂移
8. `okButtonProps`/`cancelButtonProps` 缺失（无法控 loading/disabled）

---

## 53. Modal 对话框 ✅ 已完成（含 Bug 修复）

**对比基准**: `ant-design-master/components/modal/{Modal.tsx,ConfirmDialog.tsx,confirm.tsx,interface.ts,shared.tsx,locale.ts}`

### 设计决定

AntD Modal 由 `rc-dialog` 提供 dialog/mask/transition，外层包一层 ConfigProvider 隔离用于静态方法（`Modal.confirm`/`info`/`success`/`error`/`warning`）。hmfw 没有 rc-dialog，直接基于 Vue3 `<Teleport>` + `<Transition>` 实现，并复用：
- `Button` 组件渲染 footer 按钮（之前是 raw `<button>`，样式不会跟随主题）
- `Skeleton` 提供 `loading` 时的骨架屏
- `<Transition name="hmfw-zoom">` 提供 zoom + opacity 过渡，关闭后通过 `onAfterLeave` 触发 `afterClose`

静态方法（Modal.confirm 等）通过 `createApp(...).mount(documentFragment)` 独立挂载 `ConfirmDialog`，与主应用解耦。`onOk` 返回 Promise 时按钮自动 loading 直到 settled。`Modal.destroyAll()` 通过共享 `destroyFns` 注册表逐个关闭。新增 4 个 filled 图标（CheckCircleFilled、CloseCircleFilled、ExclamationCircleFilled、InfoCircleFilled）作为 confirm 默认图标。

### 发现的差异/问题表

| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| `afterClose` 事件声明但从未触发 | 🐛 Bug | emits 列表里有但 setup 内无 emit，消费者写了回调也收不到 | ✅ 切换为条件渲染 + `<Transition>` 的 `onAfterLeave` 中 emit |
| `confirmLoading` 不阻止取消/关闭/Esc | 🐛 Bug | AntD 在 `handleCancel` 内 `if (confirmLoading) return`；hmfw 之前 mask click / 关闭按钮都能在 loading 时绕过 | ✅ `close()` 起始 short-circuit `confirmLoading` |
| Footer 用 raw `<button>` 而非 Button 组件 | 🐛 Bug | `<button class="hmfw-btn hmfw-btn-primary">` 字符串拼接，无法响应主题、无 loading 状态、不显示 danger 样式 | ✅ 改为渲染 `<Button>`，自动获取 type/danger/loading |
| `okType: 'danger'` 简写未生效 | 🐛 Bug | 把 `'danger'` 直接当 ButtonType 用作 className `hmfw-btn-danger`（不存在的类）；AntD 视作 `primary + danger` | ✅ `isDangerOk` 判断后转 `type='primary'` + `danger=true` |
| 关闭后焦点丢失 | 🐛 Bug | `trapFocus` cleanup 内无条件 `prev?.focus()` 但 cleanup 时机不对；且不可关 | ✅ 新增 `focusTriggerAfterClose` prop（默认 true），cleanup 时按需还焦 |
| 无 body 滚动锁 | 🐛 Bug | Modal 打开时背景仍可滚动 | ✅ 引用计数式 `lockScroll` / `unlockScroll`（多个 Modal 嵌套时正确栈式管理）；setup unmount 守卫泄漏 |
| 无 Esc 键关闭 | 🐛 Bug | AntD `keyboard` 默认 true；hmfw 完全缺失 | ✅ 新增 `keyboard` prop + `handleKeydown` |
| Mask 点击冒泡误触发关闭 | 🐛 Bug | 之前 `onClick={handleMaskClick}` 挂在 `.hmfw-modal-mask` 上，但 dialog 在 `.hmfw-modal-wrap` 内，触发器在 wrap 上时不会冒泡到 mask；同时 dialog 内部点击会冒泡到 wrap | ✅ `onClick={handleMaskClick}` 挂 wrap，但内部 `if (e.target !== e.currentTarget) return` 守卫防止内部冒泡 |
| `mask` prop 缺失 | 差异 | AntD 可关闭遮罩 | ✅ 新增 prop（默认 true），false 时不渲染 mask 元素 |
| `closeIcon` prop 缺失，硬编码 `×` | 差异 | AntD 默认 `CloseOutlined`，可自定义 | ✅ 新增 `closeIcon` prop（默认 CloseOutlined），用 Icon 组件渲染 |
| `okButtonProps` / `cancelButtonProps` 缺失 | 差异 | AntD 透传 props，常用于 loading/disabled/icon | ✅ 新增两 props，spread 到对应 Button |
| `loading` prop（5.18+）缺失 | 差异 | AntD body 整体显示 4 行 Skeleton | ✅ 新增 prop，启用时 body 渲染 `<Skeleton active title={false} paragraph={{ rows: 4 }} />` |
| `destroyOnHidden`（5.25+）缺失 | 差异 | `destroyOnClose` 重命名 | ✅ 新增 prop，`destroyOnClose` 保留为兼容别名 |
| `forceRender` prop 缺失 | 差异 | AntD 强制预渲染 | ✅ 新增 prop |
| `wrapClassName` / `rootClassName` / `bodyStyle` / `maskStyle` 缺失 | 差异 | AntD 全部支持 | ✅ 全部新增 |
| `afterOpenChange` 事件缺失 | 差异 | AntD 浮层动画结束触发 | ✅ 新增 emit，`setTimeout(..., 0)` 异步触发 |
| `title` 仅 string，slot 名声明但未读 | 🐛 Bug | docs 里写了 `title` slot 但 setup 不读 `slots.title`；类型也只允许 string | ✅ 类型扩展为 `string \| number \| VNode \| () => VNode`，`renderContent` 同时处理 prop 和 slot 两种来源 |
| 静态方法 `Modal.confirm/info/success/error/warning` 缺失 | 差异 | AntD 核心特性 | ✅ 新增 `ConfirmDialog.tsx` + `confirm.tsx`；通过 `createApp` 独立挂载到 `documentFragment` |
| `Modal.destroyAll()` 缺失 | 差异 | 关闭所有静态方法创建的对话框 | ✅ 共享 `destroyFns` 注册表实现 |
| `onOk` 返回 Promise 自动 loading | 差异 | AntD 静态方法 `onOk` 返回 Promise 时按钮 loading 直到 resolve | ✅ ConfirmDialog 内 `confirmLoading` ref，await + finally 复位 |
| 缺 4 个 filled 状态图标 | 设施 | confirm 默认图标用 ExclamationCircleFilled 等；hmfw 仅有 outlined 系列 | ✅ 新增 4 个 SVG + 改造 `generate-icons.ts` 识别 `-filled.svg` 后缀生成 `Filled` 组件 |
| Transition name `hmfw-modal-fade` 仅 opacity | 差异 | AntD `zoom-big-fast`：scale + opacity | ✅ 改为 `hmfw-zoom`，叠加 `transform: scale(0.85)` |
| AutoFocus on OK/Cancel 按钮 | 未实现 | AntD `focusable.autoFocusButton` 静态方法默认 `'ok'` | ⏭️ Button 无 `autoFocus` prop；focus trap 已自动聚焦首个可聚焦元素，记入待办 |
| 响应式 width（`Partial<Record<Breakpoint, ...>>`） | 未实现 | AntD width 可传断点对象，CSS vars 适配 | ⏭️ 仅支持 number/string，记入待办 |
| `getContainer` 完整支持 | 部分 | AntD 接受 string/HTMLElement/() => HTMLElement/false；hmfw 类型已声明但 Teleport 仅 hardcode 到 body | ⏭️ Teleport 动态目标待补，类型先 expose |
| `modalRender` 自定义渲染包裹 | 未实现 | AntD `(node) => ReactNode` 包一层 | ⏭️ 待补 |
| 鼠标位置 zoom origin（`mousePosition`） | 未实现 | AntD 从点击位置展开动画 | ⏭️ 待补 |
| useModal hook（context-aware 静态方法） | 未实现 | AntD `[modal, contextHolder] = Modal.useModal()` 让静态方法继承当前 ConfigProvider | ⏭️ Vue 中 createApp 隔离，需要单独 holder 组件桥接，记入待办 |
| 语义化 `classNames`/`styles` API | 差异 | 全库统一缺失 | ⏭️ 全库统一处理 |
| RTL | 差异 | 无 RTL 体系 | ⏭️ 跳过 |
| `closable: { closeIcon, onClose, afterClose }` 对象形式 | 差异 | AntD 5.x 支持对象 | ⏭️ 待补 |
| `mask: MaskType`（含 `mask.closable`） | 差异 | AntD 5.x 推荐用 `mask` 对象代替 `maskClosable` | ⏭️ 待补 |
| `state preserve when destroyOnHidden=false` | 部分 | 当前条件渲染会在 close 时卸载 body 子树（同 Drawer 当前实现） | ⏭️ 需 keep-alive 桥接，记入待办；`forceRender=true` 可保活 |

### 改动文件
- `components/modal/types.ts` — **新建**：`ModalProps`、`ModalFuncProps`、`ModalFuncReturn`、`ModalContent`、`LegacyButtonType`、`GetContainer`
- `components/modal/Modal.tsx` — 完全重写：滚动锁、focus trap（含 focusTriggerAfterClose）、Esc keyboard、mask/maskClosable/closable/closeIcon、Button-based footer、okType=danger 简写、okButtonProps/cancelButtonProps、loading 骨架屏、destroyOnHidden/destroyOnClose、forceRender、wrapClassName/rootClassName、bodyStyle/maskStyle、title slot、afterClose / afterOpenChange、zoom transition
- `components/modal/ConfirmDialog.tsx` — **新建**：渲染图标 + paragraph + 按钮的内部组件，Promise-aware onOk
- `components/modal/confirm.tsx` — **新建**：`createApp` 挂载到 documentFragment 的工厂；`withInfo`/`withSuccess`/`withError`/`withWarn`/`withConfirm`
- `components/modal/destroyFns.ts` — **新建**：共享 close 注册表
- `components/modal/index.ts` — 重写：导出附带静态方法的 `Modal`，含类型 re-export
- `components/modal/style/index.css` — 替换 `hmfw-modal-fade-*` 为 `hmfw-zoom-*`（含 transform scale），新增 `.hmfw-modal-confirm-*` 全套（body/icon/paragraph/title/content/btns + 4 个 type 颜色）+ `.hmfw-modal-close-x`
- `components/modal/__tests__/Modal.test.tsx` — 加 `afterEach` 清理 + body.style.overflow 复位；从 5 用例扩到 19（基础 + bug 修复 + 静态方法）
- `components/icon/svg/check-circle-filled.svg`、`close-circle-filled.svg`、`exclamation-circle-filled.svg`、`info-circle-filled.svg` — **新建**
- `scripts/generate-icons.ts` — `generateIconComponent` 识别 `-filled.svg` 后缀生成 `Filled` 组件
- `components/icon/icons.ts` — 自动重新生成（25 个图标，新增 4 个 Filled）
- `docs/demos/modal/ModalConfirm.vue` — **新建**：演示 confirm/info/success/error/warning + Promise 异步 confirm
- `docs/demos/modal/modal.md` — 重写 API 表（新增 16 个 props/events）+ 静态方法章节 + ModalConfirm demo

### 验证
- `vitest run components/modal`：19 通过（原 5 → 新 19，+14）
- `pnpm typecheck`：通过
- 全量测试：1297 通过（+14 modal）+ 2 skipped
- E2E（playwright-cli）：基础对话框 / `Modal.confirm({ okType: 'danger' })` 双双正常出浮层；danger OK 按钮红色、Cancel/确定 hmfw-btn 主题样式生效；0 console error

### 发现的 Bug 清单（9 个）
1. `afterClose` 事件声明但从未 emit
2. `confirmLoading` 不阻止 mask click / Esc / 关闭按钮 关闭
3. Footer 用 raw `<button>` 字符串拼接，无法响应主题与 loading
4. `okType: 'danger'` 简写未生效（错误的 className，不存在的 `.hmfw-btn-danger`）
5. 无 body 滚动锁 / 无 Esc 关闭 / 无 keyboard prop
6. mask 点击冒泡误触发：内部点击会通过 wrap 触发关闭
7. `title` slot 在文档里声明但 setup 不读
8. `closeIcon` 硬编码 `×` 字符
9. 缺失静态方法 `Modal.confirm/info/success/error/warning` + `Modal.destroyAll`（核心特性）

---

## 54. Drawer 抽屉 ✅ 已完成（含 Bug 修复）

参考源码：`ant-design-master/components/drawer/{Drawer,DrawerPanel,useFocusable}.tsx`、`index.en-US.md`。
原实现仅 117 行、5 个用例，缺失大量 v6 特性，且自身文档里声明的 `extra`/`afterOpenChange` 根本没实现。

### 发现的差异/问题表

| 维度 | AntD v6 | 原 hmfw | 处理 |
| --- | --- | --- | --- |
| body 滚动锁 | RcDrawer 锁 body 滚动 | ❌ 无 | ✅ 复用 Modal 的 ref-count `lockScroll`，仅 `mask` 时锁 |
| Esc 关闭 | `keyboard`（默认 true） | ❌ 无 keyboard，Esc 无效 | ✅ 加 `keyboard` prop + `handleKeydown` |
| `afterOpenChange` | 文档声明 | ❌ 声明在 md 但从未 emit | ✅ `setTimeout(emit, 0)`（fake-timer 友好），与 Modal 一致 |
| `extra` | 右上角操作区 | ❌ 文档声明 md 但无实现 | ✅ `extra` slot + `.hmfw-drawer-extra` |
| `close` 事件参数 | `(e)` | ❌ emit 不带 event | ✅ `emit('close', e)`，单测断言 MouseEvent |
| 关闭图标 | Icon（CloseOutlined） | ❌ 硬编码 `×` 字符 | ✅ `<Icon component={closeIcon ?? CloseOutlined}>` + `closeIcon` prop |
| header 布局 | v6：关闭按钮在**标题左侧**（`header-title` 容器） | 旧：关闭按钮在右、`space-between` | ✅ 重排为 `header-title`(close+title) + extra，对齐 v6 |
| `size` | `'default'\|'large'\|number\|string`，large=736 | ❌ 仅 width/height | ✅ `resolvedSize`：large→736/default→378/数字/纯数字串→px/其它原样；size 优先于 width/height |
| `loading` | Skeleton | ❌ 无 | ✅ `loading` → `<Skeleton active title=false rows=5>` |
| `getContainer` | 挂载节点 / false | ❌ 固定 `to="body"` | ✅ `getContainer` prop，`false` → Teleport disabled 原地渲染 |
| `destroyOnHidden` | 5.25 新名 | 仅旧 `destroyOnClose` | ✅ 两者都支持，`destroyOnHidden ?? destroyOnClose` |
| `forceRender` | 预渲染 | ❌ 无 | ✅ `forceRender` → 渲染但 `display:none` |
| `focusTriggerAfterClose` | focusable.focusTriggerAfterClose（默认 true） | ❌ 焦点恒返回 | ✅ prop，透传给 trapFocus（与 Modal 同签名） |
| mask 动画 | mask 淡入 + panel 滑出（分离） | ❌ 整块跟着 placement 平移、mask 也被 translate | ✅ 单 Transition 落在 root，CSS 分别给 mask（opacity）与 wrapper（transform） |
| `rootClassName`/`rootStyle`/`*Style` | 全套 | ❌ 仅 maskStyle 间接 | ✅ rootClassName/rootStyle/bodyStyle/headerStyle/footerStyle/maskStyle |
| title/footer slot | ReactNode | footer slot 有、title 仅 string | ✅ title 支持 string\|number\|VNode\|render\|slot；footer slot 保留 |
| pointer-events | mask 与 panel 分层可点 | root `inset:0` 全屏挡住点击 | ✅ root `pointer-events:none`，mask/wrapper 各自 `auto` |

### 改动文件
- `components/drawer/Drawer.tsx` — 重写（117 → 279 行）：新增 size 解析、getContainer、Icon 关闭图标、extra/title slot、loading Skeleton、body 滚动锁、Esc/keyboard、afterOpenChange、destroyOnHidden/forceRender/focusTriggerAfterClose、rootClassName/rootStyle 及各 \*Style；header 改为 v6 的 `header-title`(close 在左) 布局
- `components/drawer/style/index.css` — 重写：root `pointer-events:none` + mask/wrapper 分层；transition 落在 root，mask 淡入 / wrapper 按 placement 滑出（4 向）；header-title/extra/close（margin-inline-end）/footer（8px 16px）样式对齐 v6
- `components/drawer/index.ts` — 导出 `DrawerPlacement/DrawerSize/DrawerContent/DrawerGetContainer` 类型
- `components/index.ts` — re-export 上述类型
- `components/drawer/__tests__/Drawer.test.tsx` — 5 → 24 用例（标题/插槽、close 带 event、Icon 非 ×、mask/maskClosable、mask=false、Esc/keyboard、滚动锁、size 预设/数字/字符串、top/bottom 用 height、extra+footer、loading Skeleton、无内容不渲染 header、afterOpenChange、defaultOpen 非受控、destroyOnHidden、自定义 closeIcon）
- `docs/demos/drawer/DrawerBasic.vue`、`DrawerPlacement.vue` — 触发器改用 `<Button>`
- `docs/demos/drawer/DrawerExtraFooter.vue`、`DrawerLoading.vue` — **新建**：size 预设 + extra/footer、loading 骨架屏
- `docs/demos/drawer/drawer.md` — 重写 API 表（补全 22 个 props + slots 表 + close 带参），新增两个 demo 章节

### 验证
- `vitest run components/drawer`：24 通过（原 5 → 新 24，+19）
- `pnpm typecheck`：通过
- 全量测试：1316 通过 + 2 skipped
- E2E（playwright-cli）：基础抽屉出浮层、`role=dialog`、标题正确；关闭按钮渲染为 svg（非 `×`）；Esc 关闭生效；large size → 736px、extra/footer 同时渲染；0 console error

### 发现的 Bug 清单（6 个）
1. `afterOpenChange` 在自身 md 文档声明但从未 emit
2. `extra` 在自身 md 文档声明但无实现
3. `close` 事件不传递 event 参数（与文档 `(e: MouseEvent)` 不符）
4. 无 body 滚动锁、无 Esc/keyboard 关闭
5. `closeIcon` 硬编码 `×` 字符，无法自定义
6. mask 与 panel 共用一个 transform 动画：遮罩跟着面板平移而非淡入；且 root `inset:0` 全屏 + 无 pointer-events 分层会挡住非遮罩区域点击

---

## 55. Message 全局提示 ✅ 已完成（含 Bug 修复）

**对比基准**: `ant-design-master/components/message/{index.tsx,useMessage.tsx,interface.ts,PurePanel.tsx,PureList.tsx,util.ts,style/index.ts}`

原实现仅 68 行的极简 stub：5 个 type 方法 + 字符串内容 + 字符图标 + 返回原生 Promise，缺失绝大部分 AntD v6 API。本次重写 68 → ~290 行（message.tsx），并抽出 `types.ts`。

### 发现的差异/问题表
| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| `duration: 0` 仍自动关闭 | 🐛 Bug | 原 `show()` 无条件 `setTimeout(duration*1000)`，`0` 立即触发移除 | ✅ `startTimer` 在 `duration <= 0` 时直接 return，不挂定时器 |
| 图标是字符 `✓✕⚠ℹ⟳` | 🐛 Bug | 原用 Unicode 字符，与全库 SVG Icon 体系不一致、loading 旋转靠单独 keyframes | ✅ 改用 `<Icon component={...} spin>` + 五个 Filled/Outlined SVG（与 Modal ConfirmDialog 一致），loading 复用 `hmfw-icon-spin` |
| 返回值是原生 `Promise` | 差异 | AntD 返回 `MessageType`：既是可调用函数（调用即手动关闭）又是 thenable | ✅ `wrapPromise` 返回可调用对象，`.then` 代理内部 promise，关闭后 `resolve(true)` |
| `onClose` 回调缺失 | 差异 | AntD `type(content, duration?, onClose?)`；`duration` 也可直接传函数当 onClose | ✅ `normalizeArgs` 解析：`duration` 为函数时当 onClose；移除时触发 |
| 对象配置 `open(config)` / `type(config)` 缺失 | 差异 | AntD 支持 `message.open({...})` 与 `message.success({content,...})` | ✅ 新增 `open`；`normalizeArgs` 用 `isVNode` + `'content' in` 区分对象配置与裸内容 |
| `key` 去重/更新缺失 | 差异 | AntD 相同 key 原地更新而非堆叠 | ✅ `findIndex(mergedKey)` 命中则 `splice` 替换并重置计时器 |
| `destroy(key?)` 缺失 | 差异 | AntD `destroy()` 清空、`destroy(key)` 移除单条 | ✅ 新增；无 key 时清空全部并 resolve 所有挂起 promise |
| `config(options)` 缺失 | 差异 | AntD 全局配置 top/duration/maxCount/getContainer/pauseOnHover | ✅ 新增 `config`；写入模块级 `globalConfig`，实时更新容器 `top` |
| `maxCount` 缺失 | 差异 | 超限关闭最早 | ✅ push 后若超 `maxCount`，对溢出项调用 `removeNotice` |
| `top` 偏移缺失 | 差异 | AntD 默认 8，可配 string/number | ✅ 容器 `top` 由 `topStyle()` 计算，number 加 px |
| `pauseOnHover` 缺失 | 差异 | AntD 默认 true，悬停暂停计时 | ✅ `onMouseenter` clearTimer / `onMouseleave` startTimer（受 item 或全局开关控制） |
| 自定义 `icon` 缺失 | 差异 | AntD `icon?: ReactNode` 覆盖类型图标 | ✅ `getIconNode`：有 icon 用 icon，否则类型图标 |
| `content` 仅 string | 差异 | AntD `ReactNode`（含数字/VNode/render-fn） | ✅ 类型扩展 `string\|number\|VNode\|()=>VNodeChild`，`renderContent` 处理函数 |
| `onClick` / `style` / `className` 缺失 | 差异 | AntD 支持 | ✅ notice 节点绑定 `onClick`、`style`、`className` |
| 离场动画缺失 | 差异 | AntD `move-up` motion：高度折叠 + 淡出 | ✅ `leaving` 标记 + `-leave` class 触发 `move-out` keyframes（折叠 max-height + margin），200ms 后真正移除 |
| 容器结构/类名 | 差异 | AntD `ant-message > ant-message-notice-wrapper > ant-message-notice` | ✅ 对齐为 `hmfw-message > hmfw-message-list > hmfw-message-notice-wrapper > hmfw-message-notice`，含 `-notice-content`/`-icon`/`-title` |
| 背景/阴影/层级硬编码 | 差异 | 原写死 `#fff` / 自定义 shadow / z-index 1010 | ✅ 改用 `--hmfw-color-bg-elevated` / `--hmfw-box-shadow-secondary` / `--hmfw-z-index-popup` token |
| `getContainer` 缺失 | 差异 | AntD 可挂到指定容器 | ✅ `config({getContainer})`；`ensureContainer` 挂载点变更时重建 app |
| `useMessage`（contextHolder） | 未实现 | AntD hooks 用法获取 context 连接 | ⏭️ Vue 端 `App`/`provide` 已提供 message 实例（见 app 组件），未单独做 useMessage |
| `stack` 折叠 | 未实现 | AntD v6.4 多条折叠 | ⏭️ 记入待办 |
| RTL | 差异 | 全库无 RTL 体系 | ⏭️ 跳过 |
| 语义化 `classNames`/`styles` | 差异 | 全库统一缺失 | ⏭️ 全库统一处理 |
| `_InternalPanel`/`PureList` | 未实现 | AntD 内部组件 | ⏭️ 私有 API，不实现 |

### 改动文件
- `components/message/types.ts` — **新建**：`NoticeType`/`MessageContent`/`ArgsProps`/`JointContent`/`ConfigOptions`/`MessageType`/`TypeOpen`/`MessageInstance`/`MessageApi`
- `components/message/message.tsx` — 重写（68 → ~290 行）：SVG 图标映射、`renderContent`/`getIconNode`、计时器 Map + `startTimer`（duration≤0 不挂）、`ensureContainer`（getContainer 变更重建、容器 top）、`removeNotice`（leaving 动画 + onClose + resolve）、`wrapPromise`（可调用 thenable）、`open`/`destroy`/`config`、`normalizeArgs`（对象配置 + duration-as-onClose）、`makeTypeOpen`、`maxCount`/`pauseOnHover`/`key` 更新
- `components/message/style/index.css` — 重写：`hmfw-message`(fixed/top/z-index-popup) > `-list` > `-notice-wrapper`(进/出 keyframes) > `-notice`(elevated bg + secondary shadow + token)；`-notice-content`/`-icon`(按类型着色) /`-title`；`move-in`/`move-out` 折叠动画
- `components/message/index.ts` — 导出全部新类型
- `components/index.ts` — re-export（`MessageType`/`MessageApi`/`MessageInstance`/`MessageContent` + 带 `Message` 前缀别名 `MessageArgsProps`/`MessageConfigOptions`/`MessageJointContent`/`MessageNoticeType`/`MessageTypeOpen`）
- `components/message/__tests__/message.test.tsx` — 7 → 20 用例（渲染/类型 class/SVG 图标/loading spin/可调用+thenable/自动关闭+resolve/duration:0 不关/手动关闭/onClose 第 3 参/onClose 第 2 参函数/open 对象/type 对象/key 更新/destroy(key)/destroy()/maxCount/top/自定义 icon/onClick/VNode 内容）
- `docs/demos/message/MessageBasic.vue`、`MessageDuration.vue` — 触发器改用 `<Button>`，Duration 增加 duration:0 手动关闭演示
- `docs/demos/message/MessageUpdate.vue`、`MessageConfig.vue` — **新建**：key 更新加载态、maxCount/top 全局配置
- `docs/demos/message/message.md` — 重写 API（方法签名 + config 对象表 + 全局方法表 + MessageType 说明），新增「更新消息内容」「全局配置」两节

### 验证
- `vitest run components/message`：20 通过（原 7 → +13）
- `vitest run components/app`：5 通过（依赖 message 实例，未回归）
- `pnpm typecheck`：通过
- 全量测试：1329 通过 + 2 skipped（message 7 → 20，net +13）
- E2E（playwright-cli）：message 页面点击「成功」弹出提示并 3s 自动消失；「不自动关闭」弹出 warning，DOM 校验 `hasSvgIcon:true`（非字符）、`typeClass=...-warning`、容器 `top:8px`；0 console error

### 发现的 Bug 清单（2 个）
1. `duration: 0` 仍会自动关闭（应永久显示）—— 原 `show()` 无条件挂定时器
2. 图标用 Unicode 字符（`✓✕⚠ℹ⟳`），与全库 SVG Icon 体系不一致、无法自定义、loading 旋转靠独立 keyframes

---



