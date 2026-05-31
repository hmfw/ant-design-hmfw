# B 容器/导航（23–33）

← 回到 [COMPARISON 索引](../COMPARISON.md)

包含：List · Collapse · Steps · Anchor · Breadcrumb · Pagination · Grid · Layout · Tabs · Menu · Dropdown

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
