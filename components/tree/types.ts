import type { VNodeChild } from 'vue'

export type Key = string | number

/** 树节点数据 */
export interface TreeDataNode {
  key: Key
  title?: string
  children?: TreeDataNode[]
  disabled?: boolean
  disableCheckbox?: boolean
  selectable?: boolean
  checkable?: boolean
  isLeaf?: boolean
  /** 图标名（对应库内 Icon 组件名）或自定义渲染函数 */
  icon?: string | ((node: TreeDataNode) => VNodeChild)
  [key: string]: unknown
}

export type TreeExpandedKeys = Key[]
export type TreeSelectedKeys = Key[]
export type TreeCheckedKeys = Key[]

/** checkedKeys 的对象形式（checkStrictly 下区分半选） */
export interface CheckedKeysObject {
  checked: Key[]
  halfChecked: Key[]
}

/** 自定义字段名 */
export interface FieldNames {
  title?: string
  key?: string
  children?: string
}

/** expand 事件 info */
export interface TreeExpandInfo {
  expanded: boolean
  node: TreeDataNode
  nativeEvent?: Event
}

/** select 事件 info */
export interface TreeSelectInfo {
  event: 'select'
  selected: boolean
  node: TreeDataNode
  selectedNodes: TreeDataNode[]
  nativeEvent?: Event
}

/** check 事件 info */
export interface TreeCheckInfo {
  event: 'check'
  checked: boolean
  node: TreeDataNode
  checkedNodes: TreeDataNode[]
  halfCheckedKeys: Key[]
  nativeEvent?: Event
}

/** 节点鼠标/键盘事件 info（rightClick / dragstart / dragover / dragleave / dragend） */
export interface TreeNodeMouseInfo {
  event: Event
  node: TreeDataNode
}

/** 拖拽 drop 事件 info */
export interface TreeDropInfo {
  event: DragEvent
  node: TreeDataNode
  dragNode: TreeDataNode
  dragNodesKeys: Key[]
  dropPosition: number
  dropToGap: boolean
}

/** 拖拽 dragenter 事件 info */
export interface TreeDragEnterInfo {
  event: DragEvent
  node: TreeDataNode
  expandedKeys: Key[]
}

/** showLine 配置 */
export type ShowLineConfig = boolean | { showLeafIcon: boolean }

/** draggable 配置 */
export type DraggableConfig =
  | boolean
  | ((node: TreeDataNode) => boolean)
  | { icon?: string | false; nodeDraggable?: (node: TreeDataNode) => boolean }

/** allowDrop 回调参数 */
export interface AllowDropOptions {
  dragNode: TreeDataNode
  dropNode: TreeDataNode
  dropPosition: -1 | 0 | 1
}

/** 语义化 class 名 */
export interface TreeSemanticClassNames {
  root?: string
  item?: string
  itemIcon?: string
  itemTitle?: string
  itemSwitcher?: string
}

/** 语义化内联样式 */
export interface TreeSemanticStyles {
  root?: Record<string, string | number>
  item?: Record<string, string | number>
  itemIcon?: Record<string, string | number>
  itemTitle?: Record<string, string | number>
  itemSwitcher?: Record<string, string | number>
}

export interface TreeProps {
  treeData?: TreeDataNode[]
  expandedKeys?: TreeExpandedKeys
  defaultExpandedKeys?: TreeExpandedKeys
  defaultExpandAll?: boolean
  /** 默认展开父节点（含受控 expandedKeys 的祖先） */
  defaultExpandParent?: boolean
  /** 展开时自动展开父节点 */
  autoExpandParent?: boolean
  selectedKeys?: TreeSelectedKeys
  defaultSelectedKeys?: TreeSelectedKeys
  checkedKeys?: TreeCheckedKeys | CheckedKeysObject
  defaultCheckedKeys?: TreeCheckedKeys
  checkable?: boolean
  checkStrictly?: boolean
  multiple?: boolean
  selectable?: boolean
  disabled?: boolean
  draggable?: DraggableConfig
  /** 是否允许拖放到目标节点，返回 false 阻止 */
  allowDrop?: (options: AllowDropOptions) => boolean
  showLine?: ShowLineConfig
  showIcon?: boolean
  blockNode?: boolean
  indent?: number
  /** 节点过滤（高亮匹配项） */
  filterTreeNode?: (node: TreeDataNode) => boolean
  /** 自定义节点图标 */
  icon?: string | ((node: TreeDataNode) => VNodeChild)
  /** 自定义展开/收起图标 */
  switcherIcon?: string | ((node: { expanded: boolean; isLeaf: boolean }) => VNodeChild)
  /** 自定义节点标题渲染 */
  titleRender?: (node: TreeDataNode) => VNodeChild
  fieldNames?: FieldNames
  /** 是否开启虚拟滚动 */
  virtual?: boolean
  /** 虚拟滚动容器高度（开启 virtual 时必需） */
  height?: number | string
  /** 虚拟滚动每项高度 */
  itemHeight?: number
  classNames?: TreeSemanticClassNames
  styles?: TreeSemanticStyles
}

/** DirectoryTree 展开触发方式 */
export type ExpandAction = false | 'click' | 'doubleClick'

export interface DirectoryTreeProps extends TreeProps {
  expandAction?: ExpandAction
}

// ============ 事件回调类型 ============

/** expand 事件回调 */
export type TreeExpandHandler = (keys: Key[], info: TreeExpandInfo) => void
/** select 事件回调 */
export type TreeSelectHandler = (keys: Key[], info: TreeSelectInfo) => void
/** check 事件回调 */
export type TreeCheckHandler = (keys: Key[] | CheckedKeysObject, info: TreeCheckInfo) => void
/** dblclick 事件回调 */
export type TreeDblClickHandler = (event: Event, node: TreeDataNode) => void
/** rightClick 事件回调 */
export type TreeRightClickHandler = (info: TreeNodeMouseInfo) => void
/** 拖拽过程事件回调（dragstart/dragover/dragleave/dragend） */
export type TreeDragHandler = (info: TreeNodeMouseInfo) => void
/** dragenter 事件回调 */
export type TreeDragEnterHandler = (info: TreeDragEnterInfo) => void
/** drop 事件回调 */
export type TreeDropHandler = (info: TreeDropInfo) => void
