# E 数据/复杂

← 回到 [COMPARISON 索引](../COMPARISON.md)

包含：Table · Tree · Transfer · Carousel · ColorPicker

✅ 已完成（5/5：全部组件已对比）

---

## 59. Table 表格 ✅ 已完成（含 Bug 修复 + 功能补全）

**对比基准**: `ant-design-master/components/table/{InternalTable.tsx,interface.ts,hooks/useSelection.tsx,hooks/useSorter.tsx,hooks/useFilter/index.tsx}`

**实现说明**: hmfw 为原生精简实现（`Table.tsx` 577 行 + `FilterDropdown.tsx` + `interface.ts`），未照搬 AntD 的 rc-table 模块化架构。核心交互（排序/筛选/分页/行选择/展开/固定列/响应式）已实现并有测试覆盖；大数据虚拟化、树形数据、单元格合并等高级能力按需后补。

### 发现的差异/问题表

| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| 行选择用原生 `<input>` | 🐛 Bug | 未集成库内 Checkbox/Radio，样式与受控行为不统一 | ✅ 改用 `<Checkbox>`/`<Radio>` 组件；支持 `getCheckboxProps` |
| `rowSelection.onChange` 缺 `info` | 🐛 Bug | AntD 第三参 `{ type: RowSelectMethod }`，消费者无法区分单选/全选 | ✅ 补 `info.type`：单行 `single`/`multiple`，全选 `all`/`none`；并补发 `onSelect`/`onSelectAll` |
| `onChange` 缺 `extra` 参数 | 🐛 Bug | AntD 第四参 `{ currentDataSource, action }` 缺失 | ✅ 补 `extra`，`action` 为 `sort`/`filter`/`paginate` |
| 筛选只有逻辑无 UI | 🐛 Bug | 有 `onFilter` 过滤但表头无筛选入口，用户无法触发 | ✅ 新增 `FilterDropdown.tsx`（Checkbox 列表 + 确定/重置），表头渲染筛选图标 |
| 固定列 `fixed` 无效 | 🐛 Bug | 类型有 `fixed` 但无任何定位实现 | ✅ `position: sticky` + `cell-fix-left/right` class + 滚动阴影；测试断言 class 存在 |
| 展开行 `expandedRowRender` 未处理 | 🐛 Bug | `expandable` 对象被忽略，无展开能力 | ✅ 实现展开图标列 + 展开内容行；受控 `expandedRowKeys` + `onExpand`/`onExpandedRowsChange` |
| 排序仅单列 | 差异 | AntD 支持 `sorter.multiple` 多列排序 | ✅ 重构为 `sortStates` 数组，Shift+点击追加多列；升→降→取消三态循环 |
| `onChange` 排序参数为内部结构 | 🐛 Bug | 传出私有 `{key,order}`，非 AntD `SorterResult` | ✅ 映射为 `SorterResult`（`column`/`order`/`field`/`columnKey`），单列传对象、多列传数组 |
| 响应式列缺失 | 差异 | AntD `column.responsive` 按断点显隐 | ✅ 实现 6 断点（xs–xxl）+ resize 监听 + `responsiveColumns` 过滤 |
| `title`/`footer` 缺失 | 差异 | AntD 表格标题/页脚 | ✅ 新增 prop（`string \| (data)=>VNode`），渲染 `-title`/`-footer` 容器 |
| `onRow`/`onHeaderRow` 缺失 | 差异 | AntD 行/表头行属性注入 | ✅ 新增 prop，spread 到 `<tr>` |
| pagination 配置不全 | 差异 | 缺 `showQuickJumper`/`showSizeChanger`/`showTotal`/`pageSizeOptions` | ✅ 透传至 `<Pagination>` |
| 可访问性不足 | 🐛 Bug | 无 `role`、`aria-sort` 不完整、不可键盘排序 | ✅ 补 `role`(table/row/columnheader/cell/rowgroup)、`aria-sort`/`aria-selected`/`aria-expanded`、`tabindex`+Enter/Space 触发排序 |
| 类型定义零散 | 差异 | 类型内联在 Table.tsx，缺核心导出类型 | ✅ 抽出 `interface.ts`：`SortOrder`/`CompareFn`/`SorterResult`/`ColumnFilterItem`/`FilterValue`/`TableCurrentDataSource`/`TableRowSelection`/`ExpandableConfig`/`TablePaginationConfig` 等 |
| `classNames`/`styles`/`rootClassName` | 未实现 | `interface.ts` 已声明类型，但 `Table.tsx` 未注册 prop、未使用 | ⏭️ 待补（类型占位，运行时未接线） |
| 虚拟滚动 `virtual` | 未实现 | AntD 大数据虚拟列表 | ⏭️ 按需后补 |
| 树形数据 `children`/`childrenColumnName` | 未实现 | 嵌套行 + 级联勾选 | ⏭️ 后补 |
| 单元格合并 `colSpan`/`rowSpan` | 未实现 | 类型已声明，渲染未消费 | ⏭️ 后补 |
| `summary` 总结栏 | 未实现 | AntD `<Table.Summary>` | ⏭️ 后补 |
| 自定义图标 `sortIcon`/`filterIcon` | 未实现 | 固定 ▲▼/🔽 | ⏭️ 后补 |
| 筛选搜索/树形筛选 `filterSearch`/`filterMode` | 未实现 | 仅平铺多选 | ⏭️ 后补 |
| `filterDropdown` 自定义面板 | 未实现 | 仅内置面板 | ⏭️ 后补 |
| 静态成员 `Table.Column`/`ColumnGroup`/`Summary`/`SELECTION_*` | 未实现 | JSX 式列声明与选择常量 | ⏭️ 后补 |
| `getPopupContainer`/`sticky`(吸顶)/`loading` 对象形式 | 未实现 | — | ⏭️ 后补 |

### 改动文件
- `components/table/interface.ts` — 新建：抽出全部类型（`Key`/`SortOrder`/`CompareFn`/`SorterResult`/`ColumnFilterItem`/`FilterValue`/`TableLocale`/`ColumnTitleProps`/`TableColumn`/`TableRowSelection`/`TablePaginationConfig`/`ExpandableConfig`/`TableSemanticClassNames`/`TableSemanticStyles`/`TableProps`）
- `components/table/FilterDropdown.tsx` — 新建：筛选下拉面板（Checkbox 列表 + 确定/重置按钮，支持 `filterMultiple`）
- `components/table/Table.tsx` — 重写（577 行）：
  - 行选择改用 `Checkbox`/`Radio`；`getCheckboxProps`；`onChange` 补 `info.type`；补 `onSelect`/`onSelectAll`
  - 排序重构为 `sortStates` 多列数组；Shift 多列；三态循环；传出标准 `SorterResult`
  - 筛选接入 `FilterDropdown`，表头筛选图标 + `handleFilterConfirm`
  - 固定列 `cell-fix-left/right` class
  - 展开行：展开图标列 + 展开内容行 + 受控 `expandedRowKeys`
  - 响应式 `responsiveColumns`（6 断点 + resize 监听）
  - `title`/`footer`/`onRow`/`onHeaderRow`；pagination 透传 `showQuickJumper` 等
  - `onChange` 补 `extra:{currentDataSource,action}`
  - 可访问性：`role`/`aria-*`/`tabindex`/键盘排序
- `components/table/index.ts` — 导出新增类型
- `components/table/style/index.css` — 新增固定列(+阴影)/展开行/筛选面板/title/footer 样式
- `components/table/__tests__/Table.test.tsx` — 11 → 24 用例（+13）：排序三态、键盘排序、aria-sort、固定列 class、筛选触发器、展开行渲染+点击、rowSelection onChange(info)、全选、radio、title/footer、change(extra.action)、分页切片
- `docs/demos/table/table.md` — 重写 API 表（Table/Column/rowSelection/expandable/pagination）+ 特性说明
- `docs/demos/table/{TableFilter,TableFixedColumns,TableExpandable,TableResponsive}.vue` — 新增 4 个演示

### 验证
- `npx vitest run components/table`：**24 通过**（11 → 24，+13）
- `pnpm typecheck`：通过（无输出）
- 全量测试：**1396 通过 / 2 skipped / 1 失败**；唯一失败为 `date-picker minDate constraint`，与 Table 无关（预先存在）
- E2E：未执行（待 dev server 起后补 playwright 验证）

### 备注（诚实声明）
- 多列排序逻辑已实现，但当前测试仅覆盖单列三态；多列专项断言待补。
- 响应式列依赖 `window.innerWidth` + resize，jsdom 环境未做断点切换断言。
- `classNames`/`styles`/`rootClassName` 仅类型声明、运行时未接线，已在差异表标 ⏭️，勿当作已实现。

---

## 60. Tree 树形控件 ✅ 已完成（含 Bug 修复 + 功能补全）

**对比基准**: `ant-design-master/components/tree/{Tree.tsx,index.tsx,DirectoryTree.tsx}`（AntD 基于 `@rc-component/tree`）

**实现说明**: hmfw 为原生扁平化渲染实现（`Tree.tsx` ~580 行 + `DirectoryTree.tsx` + `types.ts`），未照搬 rc-tree 的虚拟列表架构。核心交互（展开/选中/勾选级联/多选/键盘导航/拖拽/目录树/搜索高亮/语义化 class）已实现并有测试覆盖；虚拟滚动、异步加载、TreeNode JSX 声明按需后补。

### 发现的差异/问题表

| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| 勾选用自绘 `<span>` 复选框 | 🐛 Bug | 未集成库内 Checkbox，样式/受控/无障碍不统一 | ✅ 改用 `<Checkbox>` 组件（含 indeterminate） |
| 半选(indeterminate)计算错误 | 🐛 Bug | 原逻辑用「后代是否有选中」近似，与 AntD 不一致且无独立半选集合 | ✅ 重写 `halfCheckedKeys` 计算；勾选时自底向上回填祖先全选态 |
| 取消勾选未清祖先 | 🐛 Bug | 取消子节点后父节点仍可能保持 checked | ✅ 取消时连带清理后代 + 受影响祖先 |
| `checkedKeys` 不支持对象形式 | 🐛 Bug | AntD `checkStrictly` 下为 `{checked,halfChecked}`，原仅接受数组 | ✅ 入参归一化；`checkStrictly` 时 emit 对象形式 |
| check/select 事件 info 残缺 | 🐛 Bug | 原 `node` 仅传 key，缺 `selectedNodes`/`checkedNodes`/`halfCheckedKeys`/`event` | ✅ 补全 info：`node` 为完整节点对象 + 节点列表 + 半选 keys |
| expand 事件 `node` 传 key | 🐛 Bug | 应传节点对象 | ✅ 传完整 node + `nativeEvent` |
| 无 `autoExpandParent`/`defaultExpandParent` | 差异 | AntD 默认展开父节点 | ✅ 新增；`conductExpandParent` 补全祖先；受控展开 watch |
| 无键盘导航 | 🐛 Bug | 无 `tabindex`、方向键、Enter/Space | ✅ ↑↓ 移动焦点、→←展开/收起/进出、Enter/Space 选中或勾选；roving tabindex |
| 无 `icon`/`showIcon`/`switcherIcon`/`titleRender` | 差异 | AntD 自定义图标与标题渲染 | ✅ 全部新增；`icon` 支持名称(库内 Icon)或渲染函数 + `{expanded,isLeaf}` 上下文 |
| 无 `draggable` 拖拽 | 差异 | AntD 拖拽排序 | ✅ 支持 `boolean`/函数/对象配置；触发 `dragstart`/`dragenter`/`drop` 等事件 + drag-over 视觉 |
| 无 `DirectoryTree` | 差异 | AntD `Tree.DirectoryTree` 目录树 | ✅ 新建组件并挂为 `Tree.DirectoryTree`；默认 blockNode+showIcon+文件夹图标+`expandAction` |
| 无 `filterTreeNode` | 差异 | AntD 节点过滤/高亮 | ✅ 新增；命中节点加 `-matched` 高亮 class |
| `showLine` 仅 boolean | 差异 | AntD 支持 `{showLeafIcon}` | ✅ 类型与逻辑支持对象形式 |
| 无语义化 `classNames`/`styles`/`rootClassName` | 差异 | AntD v6 语义化 DOM | ✅ 实现 `root`/`item`/`itemIcon`/`itemTitle`/`itemSwitcher` 五处接线（区别于 Table 仅占位） |
| 无 `dblclick`/`rightClick` 事件 | 差异 | AntD 节点事件 | ✅ 新增 |
| `selectable`/`checkable` 节点级控制不全 | 🐛 Bug | 节点 `selectable:false`/`checkable:false` 未拦截 | ✅ 选中/勾选时校验节点级开关 |
| 可访问性不足 | 🐛 Bug | `aria-*` 不全、不可键盘操作 | ✅ 补 `role=tree/treeitem`、`aria-level/expanded/selected/checked/disabled`、roving tabindex |
| 类型定义零散 | 差异 | 类型简单内联 | ✅ 重写 `types.ts`：补 `CheckedKeysObject`/各事件 info/`ShowLineConfig`/`DraggableConfig`/语义化类型/`DirectoryTreeProps`/`ExpandAction` 等 |
| 虚拟滚动 `virtual`/`height` | 未实现 | 大数据虚拟列表 | ⏭️ 后补 |
| 异步加载 `loadData`/`loadedKeys` | 未实现 | 动态加载子节点 | ⏭️ 后补 |
| `TreeNode` 子组件式 JSX 声明 | 未实现 | 仅支持 `treeData` | ⏭️ 后补 |
| 拖拽 `dropToGap`/插入指示线 | 未实现 | 仅触发 `drop` 事件，不自动改数据/无 gap 定位 | ⏭️ 后补 |
| 展开/收起动画 `motion` | 未实现 | AntD collapse 动画 | ⏭️ 后补 |
| `allowDrop` 拖放校验 | 未实现 | — | ⏭️ 后补 |

### 改动文件
- `components/tree/types.ts` — 重写：`Key`/`CheckedKeysObject`/`FieldNames`/`TreeExpandInfo`/`TreeSelectInfo`/`TreeCheckInfo`/`TreeNodeMouseInfo`/`TreeDropInfo`/`TreeDragEnterInfo`/`ShowLineConfig`/`DraggableConfig`/`TreeSemanticClassNames`/`TreeSemanticStyles`/`TreeProps`/`DirectoryTreeProps`/`ExpandAction`
- `components/tree/Tree.tsx` — 重写（~580 行）：
  - `keyEntities` 实体表（祖先/后代/层级查询）；`conductExpandParent`
  - 勾选级联重写 + `halfCheckedKeys` 计算 + 取消清祖先；`checkStrictly` 对象形式
  - 复用 `<Checkbox>`；select/check/expand 事件 info 补全（node 对象 + nodes 列表）
  - 键盘导航（roving tabindex + 方向键 + Enter/Space）
  - `icon`/`switcherIcon`/`titleRender`；`showIcon`/`showLine` 对象形式
  - `draggable`（boolean/函数/对象）+ 拖拽事件 + drag-over
  - `filterTreeNode` 高亮；`dblclick`/`rightClick`/`expandAction`
  - 语义化 `classNames`/`styles`/`rootClassName` 五处接线
  - `aria-*` 与 `role`
- `components/tree/DirectoryTree.tsx` — 新建：blockNode+showIcon+文件夹/文件图标(随展开态切换 Folder/FolderOpen/File 真实 SVG)+`expandAction`
- `components/tree/index.ts` — 重写：挂 `Tree.DirectoryTree` 静态成员 + 导出新类型
- `components/index.ts` — 顶层补导出 `DirectoryTree` 及新类型
- `components/tree/style/index.css` — 移除自绘 checkbox 样式（改用 Checkbox 组件）；新增 icon/焦点环/active/拖拽把手/drag-over/目录树/过滤高亮样式
- `components/icon/svg/{folder,folder-open,file}.svg` — 新增 3 个图标 SVG（取自 `ant-design-icons-master` outlined），跑 `pnpm gen:icons` 生成 `FolderOutlined`/`FolderOpenOutlined`/`FileOutlined`；`metadata.ts` 补 file 分类条目
- `components/icon/__tests__/utils.test.ts` — `getAllIcons` 数量断言改为与 `iconMetadata` 联动（不再硬编码）
- `components/tree/__tests__/Tree.test.tsx` — 11 → 40 用例（+29）：勾选级联/半选/checkStrictly 对象、多选、autoExpandParent、受控展开、icon/titleRender/switcherIcon、filterTreeNode 高亮、键盘导航、aria、draggable+drop、语义化 class、rightClick、DirectoryTree（含真实 SVG 图标断言）
- `docs/demos/tree/tree.md` — 重写：补 6 个 demo 引用 + 完整 API（Tree/DirectoryTree/TreeDataNode/Events/键盘/未支持能力）
- `docs/demos/tree/{TreeDirectory,TreeDraggable,TreeSearch}.vue` — 新增 3 个演示

### 验证
- `npx vitest run components/tree`：**40 通过**（11 → 40，+29）
- `pnpm typecheck`：通过（无输出）
- 全量测试：**1424 通过 / 2 skipped / 1 失败**；唯一失败为 `date-picker` 预先存在用例（与 Tree 无关，Table 条目已记录）
- E2E：已实测。`pnpm dev` + `playwright-cli` 打开 `/components/tree`，0 console error；DOM 计数确认 6 棵树/1 目录树/4 Checkbox/5 可拖拽节点/3 图标；实测勾选父节点→3 项选中，取消一个子节点→父节点转半选

### 备注（诚实声明）
- 拖拽仅触发 `drop` 事件并提供 `dropPosition`/`dragNodesKeys`，**不自动重排数据**，也无 gap 插入指示线；消费者需在回调中自行改 `treeData`。
- DirectoryTree 文件夹图标用库内真实 SVG（`FolderOutlined`/`FolderOpenOutlined`/`FileOutlined`，随展开态/叶子态切换），可被节点 `icon` 覆盖。
- 键盘导航的 roving tabindex 在 jsdom 下聚焦行为有限，测试以事件 emit 为断言，未断言真实 DOM focus 移动。
- 半选集合通过遍历实体表实时计算，超大树未做性能优化（与虚拟滚动一并 ⏭️）。

---

## 61. Transfer 穿梭框 ✅ 已完成（含 Bug 修复 + 功能补全）

**对比基准**: `ant-design-master/components/transfer/{index.tsx,list/index.tsx,ListBody.tsx,search.tsx,interface.ts}`

**实现说明**: hmfw 为原生双列实现（`Transfer.tsx` ~240 行 + `TransferList.tsx` ~390 行 + `types.ts`），复用库内 Checkbox/Input/Button/Empty/Dropdown/Pagination 组件。核心交互（左右移动/搜索过滤/全选/分页/selections 下拉/oneWay 单向模式/shift 多选/自定义 render/footer）已实现并有测试覆盖；拖拽排序、表格模式、树形模式按需后补。

### 发现的差异/问题表

| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| 列表项用自绘 checkbox | 🐛 Bug | 未集成库内 Checkbox，样式不统一 | ✅ 改用 `<Checkbox>` 组件 |
| 搜索框用原生 `<input>` | 🐛 Bug | 未集成库内 Input（缺 allowClear/prefix） | ✅ 改用 `<Input>` 组件（prefix=SearchOutlined，allowClear） |
| 操作按钮用原生 `<button>` | 🐛 Bug | 未集成库内 Button（样式/size/disabled 不统一） | ✅ 改用 `<Button>` 组件（type=primary，size=small，icon） |
| 无全选框/selections 下拉 | 🐛 Bug | AntD 头部有全选 Checkbox + DownOutlined 下拉（全选所有/反选当页/取消全选/全选当页），原无此交互 | ✅ 新增 selections 下拉（Dropdown + Menu items）；全选框在非分页且非 oneWay 时显示 |
| 无分页 `pagination` | 差异 | AntD 支持分页（单页 pageSize 默认 10） | ✅ 新增 prop `pagination: boolean \| {pageSize,simple,showSizeChanger,showLessItems}`；复用库内 Pagination 组件 |
| 无 `oneWay` 单向模式 | 差异 | AntD 单向穿梭（右侧项带删除按钮 DeleteOutlined） | ✅ 新增 prop；右侧渲染 remove 按钮；触发 `change(targetKeys,'left',keys)` |
| 无 `footer` | 差异 | AntD 列表底部自定义渲染 | ✅ 新增 prop `footer: (info) => VNode`；`info` 含 `direction`/`filteredItems`/`selectedKeys`/`disabled` |
| `showSearch` 仅 boolean | 差异 | AntD 支持对象 `{placeholder,defaultValue}` | ✅ 类型与逻辑支持对象形式 |
| `listStyle` 仅对象 | 差异 | AntD 支持函数 `(info)=>CSSProperties` | ✅ 类型与逻辑支持函数形式；`info` 含 `direction` |
| 移动按钮方向反了 | 🐛 Bug | 原 leftActive/rightActive 语义反了：右箭头应在源选中时激活 | ✅ 修正 `rightActive = sourceSelectedKeys.length > 0` |
| 无 shift 多选 | 差异 | AntD 按住 Shift 范围多选 | ✅ 实现 shift 多选：记录 `lastSelectedIndex`，shift 时选中锚点到目标间所有 enabled 项 |
| 无 `selectAllLabel` | 差异 | AntD 自定义全选文案（支持函数形式 `(info)=>VNode`） | ✅ 新增 prop `selectAllLabels: SelectAllLabel[]`；函数接收 `{selectedCount,totalCount}` |
| 无 `onScroll` | 差异 | AntD 列表滚动事件 | ✅ 新增 emit `scroll(direction,e)` |
| `notFoundContent` 未使用 | 差异 | AntD 空状态自定义；原固定「列表为空」 | ✅ 支持 prop；未设置时渲染 `<Empty description={false} />` |
| 无 `rowKey` | 差异 | AntD 自定义 key 提取（如 `item => item.id`） | ✅ 新增 prop `rowKey: (record)=>TransferKey`；归一化 key 后统一处理 |
| `TransferItem.key` 仅 string | 差异 | AntD 支持 `React.Key` (string\|number) | ✅ 类型改为 `TransferKey = string \| number` |
| `render` 仅返回 VNode | 差异 | AntD 支持 `{label,value}` 对象（value 用于搜索匹配） | ✅ 类型支持 `RenderResult = VNode \| {label,value} \| string \| null`；提取 value 用于搜索 |
| 无 `status` | 差异 | AntD `status='error'\|'warning'` 校验态边框 | ✅ 新增 prop；`.hmfw-transfer-status-error/warning` class |
| 无 locale 国际化 | 差异 | AntD 全量 locale 支持 | ✅ 新增 `components/_locale/{zh-CN,en-US,types}.ts` Transfer 条目；`useLocale()` 合并 props.locale |
| 无语义化 class/style | 差异 | AntD `classNames`/`styles` | ✅ 新增类型 `TransferSemanticClassNames/Styles`（root/section/header/title/body/list/item/itemIcon/itemContent/footer/actions）；渲染接线 |
| 无 `operations` | 差异 | AntD 已废弃，但仍兼容 | ✅ 新增 prop（类型标 `@deprecated`）；按钮文案用 `operations[0/1]` |

### 改动文件
- `components/transfer/types.ts` — 重写：补全类型（`TransferKey`=string\|number、`TransferDirection`、`RenderResult`/`RenderResultObject`、`SelectAllLabel`、`PaginationType`、`TransferSearchOption`、`TransferLocale`、`InputStatus`、`TransferSemanticClassNames`/`Styles`、`TransferListContext`、`TransferProps` 全量字段）
- `components/transfer/TransferList.tsx` — 新建（~390 行）：Section 等价组件
  - 头部：复用 `<Checkbox>` 全选框 + `<Dropdown>` selections 下拉（`<Icon component={DownOutlined}>` 触发器） + 已选计数 + 标题
  - 搜索：复用 `<Input allowClear prefix={SearchOutlined}>` + `filterOption` 自定义匹配
  - 列表：`pagedRenderItems` 分页切片；非 oneWay 时 `<Checkbox>` + 点击选中；oneWay 时 `<button class="remove">` + `<Icon component={DeleteOutlined}>`
  - 底部：footer 自定义渲染
  - 分页：复用 `<Pagination size="small" simple>`；修正 `current` 防止溢出
  - selections 下拉：`dropdownItems` 动态生成（全选所有/取消全选/全选当页/反选当页 或 删除全部/删除当页）；`onClick` 触发 `itemSelectAll`/`itemRemove`
- `components/transfer/Transfer.tsx` — 重写（~240 行）：
  - `rowKey` 归一化 `mergedDataSource`；左右数据源过滤
  - `sourceSelectedKeys`/`targetSelectedKeys` 分侧选中态
  - 移动逻辑：过滤 disabled 项；新 targetKeys + 反向清空选中；emit `change(targetKeys,direction,moveKeys)`
  - shift 多选：`lastSelectedIndex` 每侧独立；shift 时填充锚点到目标间 enabled 项
  - oneWay 移除：`onRightItemRemove` 从 targetKeys 中移除 + emit `change(...,'left',removeKeys)`
  - 操作按钮：`<Button type="primary" size="small" icon={RightOutlined/LeftOutlined}>`；oneWay 时仅右按钮
  - locale 合并：`useLocale()` + `props.locale`
  - `listStyle` 函数：`handleListStyle(direction)` 判断类型
  - 语义化 class：渲染 `classNames.root`/`actions` + `styles`
- `components/transfer/index.ts` — 导出新增类型（14 个）
- `components/transfer/style/index.css` — 重写：移除自绘 checkbox 样式；新增 section/header-selected/header-dropdown-trigger/body-search-wrapper/content-item-remove/body-not-found/footer/pagination/actions/status-error/warning 样式
- `components/transfer/__tests__/Transfer.test.tsx` — 10 → 29 用例（+19）：
  - 组件复用：Checkbox/Button/Input/Empty/Dropdown-trigger/Pagination 渲染
  - 核心交互：左右移动（change 事件）、点击选中、disabled 不可选、搜索过滤、Input onInput
  - 新功能：oneWay 移除按钮、pagination、footer、custom render、selections 下拉、locale、status、rowKey、shift 多选、语义化 classNames/styles、listStyle 函数
- `components/index.ts` — 导出新增 14 个类型（`TransferKey`/`Direction`/`RenderResult`/`RenderResultObject`/`SelectAllLabel`/`PaginationType`/`SearchOption`/`Locale`/`ListContext`/`SemanticClassNames`/`Styles`）
- `components/_locale/{zh-CN,en-US,types}.ts` — 新增 Transfer 条目（`searchPlaceholder`/`itemUnit`/`itemsUnit`/`remove`/`selectAll`/`deselectAll`/`selectCurrent`/`selectInvert`/`removeAll`/`removeCurrent`/`notFoundContent`）
- `docs/demos/transfer/{TransferBasic,TransferSearch,TransferPagination,TransferOneWay,TransferCustom}.vue` — 新增 5 个演示
- `docs/demos/transfer/transfer.md` — 重写 API 表（Props 24 行 / Events 4 行 / TransferItem / PaginationType / TransferLocale / SemanticClassNames）+ 特性说明（搜索/分页/oneWay/shift/键盘）

### 验证
- `npx vitest run components/transfer`：**29 通过**（10 → 29，+19）
- `pnpm typecheck`：通过（无输出）
- 全量测试：**1446 通过 / 2 skipped**；无失败
- E2E：未执行（待 dev server 起后补 playwright 验证）

### 备注（诚实声明）
- Dropdown 渲染 Fragment，class prop 无法继承（Vue 警告），但不影响功能；测试改用 `.hmfw-transfer-list-header-dropdown-trigger` 选择器。
- 拖拽排序（AntD Table Transfer）、表格模式（`<Table>` 嵌入 Transfer）、树形模式（`<Tree>` 嵌入）未实现，差异表已标 ⏭️。
- `onScroll` 未实测滚动触发（jsdom 滚动事件模拟有限）。
- selections 下拉菜单项点击后自动关闭依赖 Dropdown/Menu 自身逻辑，未单独测试。

---

## 62. Carousel 走马灯 ✅ 已完成（含 Bug 修复 + 功能补全）

**对比基准**: `ant-design-master/components/carousel/index.tsx`（AntD 基于 `@ant-design/react-slick`）

**实现说明**: hmfw 为原生精简实现（`Carousel.tsx` ~270 行），手动实现 scrollx/fade 切换与自动播放。核心交互（手动切换/自动播放/指示点/箭头/渐显/ref 方法/可访问性）已实现并有测试覆盖；AntD 基于 react-slick 提供的高级能力（拖拽滑动、响应式断点、自定义箭头、垂直模式、多列轮播）按需后补。

### 发现的差异/问题表

| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| 箭头用自绘 `<button>` | 🐛 Bug | 未集成库内 Button，aria-label 缺失 | ✅ 改用 Button(type=text) + Icon(LeftOutlined/RightOutlined)；补 `aria-label` |
| 无 `arrows` 控制显隐 | 差异 | AntD v5.17+ `arrows` prop 控制箭头显示，hmfw 固定渲染 | ✅ 新增 prop（默认 false，与 AntD 对齐） |
| 无自定义箭头 `prevArrow`/`nextArrow` | 差异 | AntD 支持自定义箭头 VNode | ✅ 新增 prop（VNode 类型） |
| 无 `draggable` 拖拽 | 差异 | AntD 支持鼠标/触摸拖拽切换 | ⏭️ 后补（需处理触摸事件与鼠标事件兼容，阈值判定） |
| 无 `waitForAnimate` | 差异 | AntD 动画期间禁止切换，hmfw 已用 `transitioning` 实现但未暴露 prop | ✅ 新增 prop（默认 false），接入 `transitioning` 判断 |
| `dotPosition` 命名过时 | 差异 | AntD v6 废弃 `dotPosition`，推荐 `dotPlacement`（start/end 替代 left/right，RTL 自适应） | ✅ 新增 `dotPlacement` prop；保留 `dotPosition` 兼容并标 `@deprecated`；`mergedDotPlacement` 映射 left→start、right→end |
| `dots` 仅 boolean | 差异 | AntD 支持对象 `{className}` 自定义 dots class | ✅ 类型支持 `boolean \| DotsConfig`；提取 `dotsClassName` 合并到 class |
| 无 `autoplay.dotDuration` | 差异 | AntD v5.24+ 自动播放时 dots 显示进度条动画 | ✅ 支持 `autoplay: {dotDuration}` 对象形式；CSS 变量 `--carousel-dot-duration` + `.hmfw-carousel-dots-progress` class + 伪元素 `::before` + `@keyframes carousel-dot-progress` |
| 无 `vertical` | 差异 | AntD 垂直滚动模式（`dotPlacement=start/end` 时自动推断） | ✅ 实现 `isVertical` computed（dotPlacement=start/end 时为 true）；scrollx 改用 `translateY`；CSS `.hmfw-carousel-vertical` + dots 纵向样式 |
| 无 `speed` 自定义动画时长 | 差异 | AntD `speed=500` 可调，hmfw 固定 400ms | ✅ 新增 prop（默认 500ms）；`setTimeout` 延迟改用 `props.speed` |
| 无 `easing` | 差异 | AntD 自定义缓动函数（`linear`/`ease`/...） | ✅ 新增 prop（默认 `ease`）；透传到 CSS `transition-timing-function` |
| 无 `fade` 独立 prop | 差异 | AntD 同时支持 `fade={true}` 与 `effect='fade'`，hmfw 仅 `effect` | ✅ 新增 `fade` prop；`finalEffect` computed 优先取 `fade`，否则取 `effect` |
| 无响应式 `responsive` | 未实现 | AntD react-slick 提供断点配置（每个断点不同 slidesToShow/speed） | ⏭️ 按需后补 |
| 无 `slidesToShow`/`slidesToScroll` | 未实现 | 多列轮播 | ⏭️ 后补 |
| 无 `centerMode` | 未实现 | 居中展示当前 slide | ⏭️ 后补 |
| 无 `swipeToSlide` | 未实现 | 拖拽到任意位置 | ⏭️ 后补 |
| 无 `lazyLoad` | 未实现 | 懒加载 slide 内容 | ⏭️ 后补 |
| 无 `adaptiveHeight` | 未实现 | 根据当前 slide 调整容器高度 | ⏭️ 后补 |
| 无 `initialSlide` | 差异 | AntD 初始 slide 索引，hmfw 固定 0 | ✅ 新增 prop（默认 0）；`onMounted` 时设置 `current.value` |
| 无 `slickGoTo` 受控跳转 | 差异 | AntD prop 受控跳转到指定索引 | ⏭️ 后补（需 watch prop 触发 goTo） |
| 无 `ref` 方法暴露 | 差异 | AntD 暴露 `{goTo,next,prev,autoPlay,innerSlider}`，hmfw 无 ref | ✅ `expose({goTo,next,prev})`；类型定义 `CarouselRef` |
| 无 RTL 支持 | 差异 | AntD `direction=rtl` 时反转箭头语义与 slides 顺序 | ⏭️ 后补（接入 ConfigProvider direction；反转 transform） |
| 无 `rootClassName` | 差异 | AntD v5 语义化 class | ✅ 新增 prop；合并到根元素 class |
| 无可访问性 `role`/`aria-*` | 🐛 Bug | 无 `role=region`/`aria-roledescription=carousel`/`aria-label`/`aria-live` | ✅ 根元素补 `role=region`、`aria-roledescription=carousel`、`aria-label=Carousel`；每个 slide 补 `role=group`、`aria-roledescription=slide`、`aria-label="${i+1} / ${count}"`、`aria-hidden`；箭头 `aria-label`；dots 按钮 `aria-label` |
| 未使用 ConfigProvider | 差异 | 未接入全局配置 | ✅ 接入 `usePrefixCls('carousel')`；移除 config.carousel（项目 ConfigContext 无组件级配置） |
| 无国际化 | 差异 | 箭头 aria-label 固定英文 | ⏭️ 后补（locale 支持） |

### 改动文件
- `components/carousel/types.ts` — 重写：补全类型（`CarouselDotPlacement`、`CarouselDotsConfig`、`CarouselAutoplayConfig`、`CarouselRef`；`dotPosition` 标 `@deprecated`；`CarouselProps` 新增 13 个字段）
- `components/carousel/Carousel.tsx` — 重写（~270 行，从 130 行）：
  - 接入 `usePrefixCls` + `rootClassName`
  - 箭头改用 `<Button type="text" icon={LeftOutlined/RightOutlined}>` + `arrows` prop 控制显隐（默认 false）+ `prevArrow`/`nextArrow` 自定义
  - `waitForAnimate` prop + `transitioning` 判断
  - `dotPlacement` 新 API + `mergedDotPlacement` 映射（left→start、right→end）；`dotPosition` 兼容
  - `dots` 对象形式 + `dotsClassName` 提取
  - `autoplay` 对象形式 + `showDotDuration` computed + CSS 变量 `--carousel-dot-duration`
  - `isVertical` computed + scrollx `translateY`
  - `speed`/`easing` props + `speedInSec` computed + CSS `transition-timing-function`
  - `fade` prop + `finalEffect` computed 优先级
  - `initialSlide` prop + `onMounted` 初始化
  - `expose({goTo,next,prev})`
  - 可访问性：`role`/`aria-*`
- `components/carousel/index.ts` — 导出新增 5 个类型
- `components/carousel/style/index.css` — 重构箭头样式（Button 组件）+ 补充进度条 dots（`.hmfw-carousel-dots-progress` + `::before` 伪元素 + `@keyframes`）+ 补充 start/end class（映射 left/right）
- `components/carousel/__tests__/Carousel.test.tsx` — 11 → 27 用例（+16）：
  - 新增：dots 对象 className、arrows 显隐、arrows 点击导航、fade prop 优先级、autoplay 对象 dotDuration、speed prop 延迟、easing、initialSlide、waitForAnimate、rootClassName、dotPlacement、dotPlacement start/end 映射、dotPosition 兼容、可访问性、ref 方法、goTo dontAnimate
  - 修正：原有测试调整 speed 从 400ms→500ms；arrows 测试补 `arrows: true`
- `docs/demos/carousel/carousel.md` — 重写 API 表（Props 18 行 / Events 2 行 / Ref 方法 3 行 / 可访问性 / 注意事项）+ 新增 2 个 demo 引用（箭头/进度条）
- `docs/demos/carousel/CarouselArrows.vue` — 新建：演示 `arrows` prop
- `docs/demos/carousel/CarouselProgress.vue` — 新建：演示 `autoplay.dotDuration` 进度条

### 验证
- `npx vitest run components/carousel`：**27 通过**（11 → 27，+16）
- `pnpm typecheck`：通过（无输出）
- 全量测试：**1462 通过 / 2 skipped**（从 1383 增至 1462，+79；Carousel 贡献 +16）
- E2E：⏭️ 待补（需 `pnpm dev` + `playwright-cli` 验证箭头点击、进度条动画、垂直模式）

### 备注（诚实声明）
- 当前 hmfw Carousel 为轻量级原生实现（~270 行），AntD 依赖 react-slick（>3000 行）提供企业级轮播能力（拖拽/响应式/多列/居中/懒加载）。
- 本次对比聚焦 AntD v6 公开 API 与基础交互；react-slick 的高级配置（`centerPadding`/`cssEase`/`focusOnSelect`/`rows`/`variableWidth` 等 20+ 项）未逐一实现，差异表已标 ⏭️ 按需后补。
- `arrows` 默认 false 与 AntD 对齐；原实现固定显示箭头，现需显式设置 `arrows={true}`。
- 箭头改用 Button 组件，icon prop 传 `LeftOutlined`/`RightOutlined`（Function 类型，非 VNode）。
- 进度条 dots 用 CSS 动画实现，未监听 `animationend` 同步切换（自动播放计时器独立触发）。
- ref 方法通过 `wrapper.vm as unknown as CarouselRef` 访问（测试环境）；生产环境用模板 ref。
- `dotPlacement=start/end` 会自动启用垂直模式（`isVertical`），CSS 仍用 `left`/`right` class（`dotPositionClass` computed 映射）。

---

## 63. ColorPicker 颜色选择器 ✅ 已对比（待修复）

**对比基准**: `ant-design-master/components/color-picker/{ColorPicker.tsx,ColorPickerPanel.tsx,interface.ts,color.ts,util.ts}`（AntD 基于 `@rc-component/color-picker` + `@ctrl/tinycolor`）

**实现说明**: hmfw 为原生精简实现（`ColorPicker.tsx` 276 行 + `color-utils.ts`），手动实现 HSB 颜色空间拾取器。核心交互（色板拾取/色相滑块/HEX 输入/预设色/清除/尺寸/禁用）已实现并有 12 个测试覆盖；AntD 高级能力（渐变模式/Alpha 通道/多格式切换/面板自定义渲染/Popover 集成/Form 集成/语义化 class）未实现。

### 发现的差异/问题表

| 项 | 严重度 | 说明 | 处理 |
| --- | --- | --- | --- |
| 未集成 Popover 组件 | 🐛 Bug | hmfw 用 Teleport 手动定位面板（固定 `bottom + 4px`），AntD 用 Popover（支持 12 方向 placement/自动调整溢出/getPopupContainer） | ✅ 待修复：改用库内 Popover，支持 `placement`/`arrow`/`autoAdjustOverflow`/`getPopupContainer`/`destroyTooltipOnHide` |
| 面板定位逻辑简陋 | 🐛 Bug | 固定下方 4px 偏移，未处理视口边界溢出 | ✅ 待修复：Popover 自动处理 |
| 无 `trigger` 控制 | 差异 | AntD 支持 `'click'\|'hover'`，hmfw 固定 click | ✅ 待补充：新增 prop，透传至 Popover |
| 无 `open` 受控 | 差异 | AntD 支持受控打开/关闭，hmfw 仅内部状态 | ✅ 待补充：新增 prop + `onOpenChange` emit |
| 无渐变模式 `mode` | 差异 | AntD 支持 `'single'\|'gradient'`（含渐变滑块编辑、多色标点），hmfw 仅单色 | ⏭️ 按需后补：需实现 `AggregationColor` 类（支持渐变数据结构）、渐变滑块 UI、activeIndex 切换 |
| 无 Alpha 通道 `disabledAlpha` | 差异 | AntD 默认支持透明度滑块，可通过 prop 禁用；hmfw 无透明度能力 | ✅ 待补充：新增 Alpha 滑块（0-100%）+ `disabledAlpha` prop |
| 格式固定 HEX | 差异 | AntD 支持 `'hex'\|'rgb'\|'hsb'` 动态切换（面板显示对应输入框），hmfw 固定 HEX | ✅ 待补充：`format`/`defaultFormat` prop + 格式切换按钮 + RGB/HSB 输入框 + `onFormatChange` emit |
| `value` 类型过窄 | 🐛 Bug | hmfw `value?: string`，AntD `ColorValueType = SingleValueType \| LineGradientType \| null`（支持 `AggregationColor` 对象、渐变数组、null） | ✅ 待修复：类型改为 `string \| AggregationColor \| null`（先支持单色对象，渐变后补） |
| `onChange` 参数不全 | 🐛 Bug | hmfw `(hex: string)`，AntD `(value: AggregationColor, css: string)` | ✅ 待修复：传 `AggregationColor` 实例（含 `.toHexString()`/`.toRgbString()` 等方法）+ CSS 字符串 |
| 无 `onChangeComplete` | 差异 | AntD 区分拖拽中 `onChange` 与拖拽结束 `onChangeComplete`，hmfw 无此区分 | ✅ 待补充：拖拽结束时触发 |
| `showText` 仅 boolean | 差异 | AntD 支持函数 `(color: AggregationColor) => ReactNode`，hmfw 固定显示 hex 字符串 | ✅ 待补充：类型支持函数形式 |
| `presets` 结构简化 | 差异 | AntD `PresetsItem` 含 `defaultOpen`/`key`/支持渐变色，hmfw 仅 `{label, colors: string[]}` | ✅ 待补充：类型对齐 + 折叠交互 |
| 无 `panelRender` | 差异 | AntD 自定义面板渲染（可访问 `{Picker, Presets}` 组件），hmfw 固定布局 | ⏭️ 按需后补 |
| 无 `children` 自定义触发器 | 差异 | AntD 支持 `<ColorPicker><CustomTrigger /></ColorPicker>`，hmfw 固定渲染触发器 | ✅ 待补充：slot 支持 |
| 未使用 Input 组件 | 🐛 Bug | HEX 输入框用原生 `<input>`，未集成库内 Input | ✅ 待修复：改用 `<Input>` 组件 |
| 清除按钮用自绘 | 🐛 Bug | `allowClear` 渲染自绘 `<div>` + 固定文案「清除」，未集成 Button/未国际化 | ✅ 待修复：改用 Button(type=text) + locale |
| 无 ConfigProvider 集成 | 🐛 Bug | 未接入 `DisabledContext`/`SizeContext`/`direction` | ✅ 待修复：已用 `usePrefixCls`，需补 disabled/size 继承、RTL |
| 无 Form 集成 | 差异 | AntD 接入 `FormItemInputContext`（校验态边框 status），hmfw 无 | ⏭️ 按需后补 |
| 无 Space.Compact 集成 | 差异 | AntD 支持紧凑模式（`useCompactItemContext`），hmfw 无 | ⏭️ 按需后补 |
| 无语义化 `classNames`/`styles` | 差异 | AntD v6 支持 `{root, body, content, description, popup}` 细粒度样式，hmfw 无 | ✅ 待补充：类型定义 + 渲染接线 |
| 无 `rootClassName` | 差异 | AntD v5 语义化 class，hmfw 无 | ✅ 待补充：合并到根元素 |
| 无 `arrow` 配置 | 差异 | AntD Popover 箭头可配置 `boolean \| {pointAtCenter}`，hmfw 无 | ✅ 待补充：透传至 Popover |
| 无可访问性 | 🐛 Bug | 触发器仅 `role=button` + `aria-haspopup/expanded`，面板无 `role`/`aria-label`，拾色器无键盘操作 | ✅ 待补充：面板 `role=dialog`/`aria-label`；色板/滑块支持方向键调整 |
| 无国际化 locale | 差异 | 清除按钮固定「清除」，AntD 全量 locale | ✅ 待补充：接入 `_locale` 系统 |
| 无 `disabledFormat` | 差异 | AntD 禁用格式切换，hmfw 无此 prop（当前也无格式切换 UI） | ⏭️ 与格式切换一并后补 |
| 色板拖拽未处理触摸事件 | 差异 | `getSBFromEvent` 已处理 `TouchEvent`，但未绑定 `touchstart`/`touchmove`/`touchend` | ✅ 待补充：补绑定触摸事件监听器 |
| 外部点击关闭用 mousedown | 差异 | AntD Popover 自动处理，hmfw 手动监听 mousedown 可能误触（drag 期间 mousedown 在面板外） | ✅ 待修复：改用 Popover 后自动处理 |
| 无颜色工具类 `AggregationColor` | 🐛 Bug | AntD 提供 `AggregationColor` 类（`.toHexString()`/`.toRgbString()`/`.toHsbString()`/`.isGradient()` 等 20+ 方法），hmfw 仅工具函数 | ✅ 待补充：实现 Color 类，导出为 `Color` |
| 未导出类型 | 差异 | hmfw 仅导出 `ColorPickerProps`，AntD 导出 14 个类型（`ColorGenInput`/`PresetsItem`/`ColorFormatType`/`ColorValueType`/`ModeType`/`TriggerType`/`TriggerPlacement`/`Color` 等） | ✅ 待补充：补全导出 |

### 改动文件（预期）
- `components/color-picker/Color.ts` — 新建：`AggregationColor` 类（颜色对象，含格式转换/透明度操作/渐变支持）
- `components/color-picker/components/ColorTrigger.tsx` — 新建：触发器组件（分离逻辑）
- `components/color-picker/components/AlphaSlider.tsx` — 新建：Alpha 滑块组件
- `components/color-picker/components/FormatSelect.tsx` — 新建：格式切换组件
- `components/color-picker/ColorPicker.tsx` — 重写：改用 Popover 包裹 + 新 props（placement/trigger/open/arrow/format/disabledAlpha 等）+ ConfigProvider 完整集成
- `components/color-picker/types.ts` — 重写：补全类型（`ColorValueType`/`PresetsItem`/`TriggerType`/`TriggerPlacement`/`ModeType`/`ColorPickerSemanticClassNames`/`Styles` 等 14 个导出）
- `components/color-picker/color-utils.ts` — 修改：补充 HSBA 支持 + 8 位 HEX 转换
- `components/color-picker/index.ts` — 修改：导出新增类型（14 个）+ `Color` 类
- `components/color-picker/__tests__/ColorPicker.test.tsx` — 扩展：12 → 30+ 用例（Popover 集成/Alpha/格式切换/可访问性/触摸/国际化）
- `components/color-picker/style/index.css` — 新增：Alpha 滑块/格式选择器/语义化 class 样式
- `components/_locale/{zh-CN,en-US}.ts` — 新增：ColorPicker 条目（`clear`/`formatHex`/`formatRgb`/`formatHsb` 等）
- `docs/demos/color-picker/color-picker.md` — 重写：API 表 + 补充演示

### 验证
- ⏭️ 待实施修复后执行：`npx vitest run components/color-picker`（目标 30+ 通过）
- ⏭️ `pnpm typecheck`：通过
- ⏭️ E2E：`pnpm dev` + `playwright-cli` 验证拖拽/格式切换/键盘操作

### 备注（诚实声明）
- 当前实现为**原型级轻量实现**（276 行手写拾色器），缺少 Ant Design v6 核心生产能力。
- **架构缺陷**：未集成 Popover（定位/溢出/容器配置缺失）、未集成 ConfigProvider（全局状态断链）
- **能力缺失**：无 Alpha 通道、无格式切换、无渐变模式、无颜色对象类（`onChange` 只传字符串）
- **细节不足**：未用库内组件（Input/Button）、无国际化、无可访问性键盘操作、无触摸支持
- **修复优先级建议**：
  - **P0（阻塞）**: Popover 集成、Alpha 通道、格式切换、`AggregationColor` 类、ConfigProvider 完整集成
  - **P1（重要）**: 可访问性、国际化、语义化 class、触摸支持
  - **P2（按需）**: 渐变模式、`panelRender`、Form 集成
- 修复后可对齐 AntD **单色模式核心能力**（覆盖 90% 场景），渐变模式作为独立迭代目标。
- `AggregationColor` 类可精简至 10 个核心方法（满足库内需求），或完整对标 tinycolor（40+ 方法）。建议**先精简实现**。

---

