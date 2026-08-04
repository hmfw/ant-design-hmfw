# Trigger 组件代码审查报告

> 审查对象：`components/_internal/trigger/`（内部弹层原语，不对外导出）
> 消费方：13 个组件（Select / Tooltip / Dropdown / DatePicker / RangePicker / TimePicker / Cascader / TreeSelect / AutoComplete / Mentions / ColorPicker / SubMenu / FloatButtonGroup）
> 基线：72 测试文件 / 2478 测试全部通过

## 总体评价

| 维度                 | 评分 | 说明                                                                    |
| -------------------- | ---- | ----------------------------------------------------------------------- |
| API 设计合理性       | B+   | 28 个 props 职责清晰，`popupClass` 函数形式设计巧妙；缺事件类型导出     |
| 健壮性与边界条件     | C    | 6 项可复现的状态/定时器缺陷，见下文（均已用探针测试实证）               |
| 设计模式与架构       | A-   | 4 文件分层干净：纯函数定位 / 全局事件复用 / 组件 / 类型，428 行未超阈值 |
| 可读性与可维护性     | A    | 分节注释（1~8 编号）、每个非显然决策都有中文 why 注释，质量突出         |
| 运行时行为与状态安全 | C    | 受控/非受控合并正确，但事件幂等性与定时器生命周期有实质问题             |
| 设计 Token 化        | B    | 颜色/圆角/阴影已 Token 化；箭头尺寸与偏移共 6 处硬编码                  |
| 测试覆盖             | A-   | 61 个单测 + 13 个纯函数测 + 8 组 E2E，但缺上述缺陷对应的回归用例        |

架构是这个模块最强的部分。`computePosition` 保持纯函数使 12 方位 × 翻转逻辑可脱离 DOM 单测；`eventManager` 把 N 实例 × 4 事件降为 4 个原生监听，且空订阅自动解绑。问题集中在状态机的幂等性与定时器/观察器的生命周期管理。

## 严重问题（必须修复）

### 1. P0 — `setOpen` 缺少状态短路，产生重复与虚假事件

`Trigger.tsx:124`。`setOpen` 无条件 emit，不检查目标值是否已等于当前值。两个实测场景：

**重复 emit**：hover 打开后鼠标从触发器移入弹层，`mouseleave`(触发器) 与 `mouseenter`(弹层) 相继触发，后者再次 `setOpen(true)`：

```
openChange calls: [[true,{source:'trigger'}], [true,{source:'trigger'}]]
```

**虚假 emit**：`mouseEnterDelay` 未到就 `mouseleave`，弹层从未打开，却发出关闭事件：

```
// mouseEnterDelay=0.5，100ms 时 mouseleave
openChange calls: [[false,{source:'trigger'}]]
```

Tooltip/Dropdown/Select 均把 `openChange` 直接透传给用户回调，用户会收到与 UI 不符的事件序列。

修复：`if (v === visible.value) return`。

### 2. P0 — `placement` 动态变更后不重新定位

`Trigger.tsx:114-119`。watch 只写 `actualPlacement.value`，未调用 `updatePosition`。实测弹层打开时 `bottomLeft → topRight`：

```
before: top 330px / left 300px
after:  top 330px / left 300px   ← 坐标未变
cls: hmfw-trigger-popup hmfw-trigger-placement-topRight  ← class 已变
```

结果是箭头方向（由 class 驱动）与弹层实际位置不一致。

### 3. P0 — `enterTimer` / `leaveTimer` 堆积且清理不全

`Trigger.tsx:240-256`。`handleMouseEnter` 清理的是 `leaveTimer`，但未清理**自身**上一轮的 `enterTimer` 就覆盖句柄；`handleMouseLeave` 同理。连续 3 次 `mouseenter`：

```
pending timers: 3        ← 应为 1
openChange calls: 3      ← 应为 1（叠加问题 1 后每次都 emit）
```

只有最后一个句柄被变量持有，`onBeforeUnmount` 只能 `clearTimeout` 掉一个。快速划过一排带 Tooltip 的元素就会命中此路径。

## 中等问题（建议修复）

### 4. P1 — `observePopupResize` 由 `false` 动态改 `true` 时永久失效

`Trigger.tsx:306-312` 只在 `onMounted` 且 prop 为 true 时 `new ResizeObserver`。`Trigger.tsx:209-219` 的 watch 首行 `if (!resizeObserver) return` 直接退出。实测初始 false → `setProps(true)`：observer 创建 0 次，`observe` 调用 0 次。watch 的存在暗示支持动态切换，实际只支持 true→false 单向。

### 5. P1 — `disabled` 变 `true` 时弹层卡死为打开态

`Trigger.tsx:125` 的守卫只拦截新请求。弹层已打开时置 `disabled`，弹层保持可见，且此后 Esc、外点、mouseleave 全部被同一守卫拦截，用户无法关闭。实测 disable 后 `hidden` 类未出现。

### 6. P1 — `scroll`/`resize` 重定位无节流

`Trigger.tsx:236-238` 同步调用 `updatePosition`，而 scroll 监听用了 capture（`Trigger.tsx:304`），任意可滚动祖先的滚动都会命中。每次调用读 2 个 `getBoundingClientRect` 并同步写 `style.top/left`，构成读-写-读的强制重排链。实测 10 次 scroll → 20 次 rect 读取。惯性滚动下每帧多次。

### 7. P1 — `afterOpenChange` 定时器句柄未纳入卸载清理

`Trigger.tsx:131` 的 `setTimeout` 句柄未保存，`onBeforeUnmount`（`Trigger.tsx:326-332`）清理了 enter/leave/observer/rAF 却漏了它。与同文件其他定时器的处理方式不一致。

### 8. P1 — `openChange` 事件参数类型未导出

`emits: ['update:open', 'openChange', 'afterOpenChange']`（`Trigger.tsx:79`），但 `info` 的类型 `{ source: 'trigger' | 'popup' }` 内联在 `setOpen` 签名里，`types.ts` 未导出。后果是同一字面量在仓库里被抄了 4 遍：

```
Trigger.tsx:124      source: 'trigger' | 'popup' = 'trigger'
Dropdown.tsx:56      ((v: boolean, source?: 'trigger' | 'popup') => void)
Dropdown.tsx:60      info: { source: 'trigger' | 'popup' }
tooltip/types.ts:28  source: 'trigger' | 'popup'
popover/types.ts:28  source: 'trigger' | 'popup'
```

违反项目规范「有 `emits` 就要有导出类型」。

### 9. P1 — 箭头尺寸与偏移硬编码（Token 化缺口）

`style/index.css` 中 6 处硬编码设计值：

| 位置       | 值             | AntD 对应                                                             |
| ---------- | -------------- | --------------------------------------------------------------------- |
| L48-49     | `16px` × 2     | seed `sizePopupArrow: 16`                                             |
| L57-58     | `16px` / `8px` | `sizePopupArrow` / `sizePopupArrow / 2`                               |
| L104, L108 | `12px`         | `arrowOffsetHorizontal = contentRadius > 12 ? contentRadius + 2 : 12` |
| L112, L116 | `8px`          | `arrowOffsetVertical`，受 `MAX_VERTICAL_CONTENT_RADIUS = 8` 限制      |

颜色（`--hmfw-arrow-bg`）、背景、圆角、阴影已正确 Token 化，缺口仅在几何量。

## 较低优先级

### 10. P2 — 嵌套弹层 Esc 一次关闭所有层级

全局 keydown 广播给所有实例，各自独立判断。实测 2 层嵌套按一次 Esc → 2 个弹层同时关闭。AntD 只关最内层。Dropdown 内嵌 Select、DatePicker 在 Modal 内等场景会命中。

### 11. P2 — 数值 props 缺少边界防御

`matchWidth` 传负数生成 `min-width: -100px`（无效值，浏览器丢弃，静默失效）；`mouseEnterDelay`/`mouseLeaveDelay`/`gap` 负值无约束。项目规范要求数值 props 做防御性钳制。

### 12. P2 — `zIndex` 默认值绕过主题 Token

`Trigger.tsx:46` 硬写 `1050`，与 `--hmfw-z-index-popup: 1050` 重复；改主题 Token 对 Trigger 无效。`SubMenu.tsx:230` 又硬写一遍。

### 13. P2 — 已知差异：缺少副轴 shift 溢出补偿（对比 AntD）

`computePosition` 只做主轴翻转（flip），无副轴平移（shift）。AntD `getOverflowOptions` 同时启用 `shiftX`/`shiftY`。本项目中弹层比触发器宽且触发器靠视口右缘时，`bottomLeft` 弹层右侧会溢出且无补偿——现有 E2E 用 ±5px 容差恰好掩盖了这点。

属功能范围决策而非缺陷，不在本次修复，列出交用户决定是否补齐。

## API 对齐（对比 AntD）

AntD v6 无同名 `Trigger` 组件，该原语对应 `@rc-component/trigger` + `components/_util/placements.ts`。对齐检查落在行为层：

| 维度       | 结论                                                                      |
| ---------- | ------------------------------------------------------------------------- |
| 12 方位    | ✅ 与 `PlacementAlignMap` 完全一致                                        |
| flip 翻转  | ✅ 映射表与 AntD 对侧翻转一致，且「两侧都放不下时不翻」防抖优于朴素实现   |
| shift 平移 | ❌ 缺失，见问题 13                                                        |
| 箭头几何   | ⚠️ clip-path 路径与 AntD `roundedArrow` 一致，但尺寸未 Token 化（问题 9） |
| 触发方式   | ✅ hover/click/focus/contextMenu 与 AntD `action` 对齐                    |
| 无障碍     | ✅ 恰当地不在原语层加 ARIA — Select/SubMenu/Tooltip 各自按语义添加        |

无障碍这点是正确的设计决策：弹层的 `role`（listbox / menu / tooltip）取决于宿主语义，原语层强加会出错。

## 修复优先级建议

| 优先级 | 问题                           | 工作量 | 影响                           |
| ------ | ------------------------------ | ------ | ------------------------------ |
| P0     | 1. setOpen 幂等                | 极小   | 13 个组件的事件正确性          |
| P0     | 2. placement 重定位            | 极小   | 箭头与位置错配                 |
| P0     | 3. timer 堆积                  | 小     | hover 场景的定时器泄漏         |
| P1     | 4. observePopupResize 惰性创建 | 小     | Tooltip 动态开关此特性时失效   |
| P1     | 5. disabled 关闭已开弹层       | 小     | 弹层卡死无法关闭               |
| P1     | 6. scroll rAF 节流             | 小     | 滚动性能（强制重排）           |
| P1     | 7. afterOpenChange 清理        | 极小   | 一致性                         |
| P1     | 8. 事件类型导出                | 小     | 规范合规 + 消除 4 处重复字面量 |
| P1     | 9. 箭头 Token 化               | 中     | 主题可定制性                   |
| P2     | 10. Esc 只关栈顶               | 中     | 嵌套弹层交互                   |
| P2     | 11. 数值边界防御               | 极小   | 规范合规                       |
| P2     | 12. zIndex Token               | 小     | 主题一致性                     |
| P2     | 13. shift 补偿（已知差异）     | 大     | 交用户决策，本次不做           |
