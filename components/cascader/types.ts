import type { CSSProperties, VNode } from 'vue'
import type { ComponentSize } from '../config-provider'

export interface CascaderOption {
  value: string | number
  label: string
  disabled?: boolean
  children?: CascaderOption[]
  isLeaf?: boolean
  [key: string]: any
}

export type CascaderValue = (string | number)[]
export type CascaderExpandTrigger = 'click' | 'hover'
export type CascaderShowCheckedStrategy = 'SHOW_PARENT' | 'SHOW_CHILD'

/**
 * Cascader 组件各部分的自定义 className
 */
export interface CascaderClassNames {
  /** 根容器 */
  root?: string
  /** 选择器容器 */
  selector?: string
  /** 已选项标签 */
  selectionItem?: string
  /** 已选项内容 */
  selectionItemContent?: string
  /** 已选项删除按钮 */
  selectionItemRemove?: string
  /** 占位符 */
  selectionPlaceholder?: string
  /** 搜索输入框 */
  searchInput?: string
  /** 后缀区域 */
  suffix?: string
  /** 清除按钮 */
  clear?: string
  /** 箭头图标 */
  arrow?: string
  /** 下拉弹层容器 */
  dropdown?: string
  /** 多列菜单容器 */
  menus?: string
  /** 单列菜单 */
  menu?: string
  /** 菜单项 */
  menuItem?: string
  /** 菜单项内容 */
  menuItemContent?: string
  /** 菜单项复选框（多选模式） */
  menuItemCheckbox?: string
  /** 菜单项展开图标 */
  menuItemExpandIcon?: string
  /** 搜索高亮文本 */
  menuItemHighlight?: string
  /** 空状态提示 */
  menuItemEmpty?: string
}

/**
 * Cascader 组件各部分的自定义样式
 */
export interface CascaderStyles {
  /** 根容器 */
  root?: CSSProperties
  /** 选择器容器 */
  selector?: CSSProperties
  /** 已选项标签 */
  selectionItem?: CSSProperties
  /** 已选项内容 */
  selectionItemContent?: CSSProperties
  /** 已选项删除按钮 */
  selectionItemRemove?: CSSProperties
  /** 占位符 */
  selectionPlaceholder?: CSSProperties
  /** 搜索输入框 */
  searchInput?: CSSProperties
  /** 后缀区域 */
  suffix?: CSSProperties
  /** 清除按钮 */
  clear?: CSSProperties
  /** 箭头图标 */
  arrow?: CSSProperties
  /** 下拉弹层容器 */
  dropdown?: CSSProperties
  /** 多列菜单容器 */
  menus?: CSSProperties
  /** 单列菜单 */
  menu?: CSSProperties
  /** 菜单项 */
  menuItem?: CSSProperties
  /** 菜单项内容 */
  menuItemContent?: CSSProperties
  /** 菜单项复选框（多选模式） */
  menuItemCheckbox?: CSSProperties
  /** 菜单项展开图标 */
  menuItemExpandIcon?: CSSProperties
  /** 搜索高亮文本 */
  menuItemHighlight?: CSSProperties
  /** 空状态提示 */
  menuItemEmpty?: CSSProperties
}

export interface CascaderProps {
  value?: CascaderValue | CascaderValue[]
  defaultValue?: CascaderValue | CascaderValue[]
  options?: CascaderOption[]
  disabled?: boolean
  placeholder?: string
  allowClear?: boolean
  size?: ComponentSize
  status?: 'error' | 'warning' | ''
  expandTrigger?: CascaderExpandTrigger
  multiple?: boolean
  showSearch?: boolean
  changeOnSelect?: boolean
  displayRender?: (labels: string[], selectedOptions?: CascaderOption[]) => string | VNode
  fieldNames?: { label?: string; value?: string; children?: string }
  open?: boolean
  defaultOpen?: boolean
  notFoundContent?: string
  loadData?: (selectedOptions: CascaderOption[]) => void
  showCheckedStrategy?: CascaderShowCheckedStrategy
  maxTagCount?: number
  maxTagPlaceholder?: string | ((omittedValues: CascaderValue[]) => string)
  maxTagTextLength?: number
  /** 自定义类名 */
  classNames?: CascaderClassNames
  /** 自定义样式 */
  styles?: CascaderStyles

  // ----------------------------------------------------------------
  // 虚拟滚动
  // ----------------------------------------------------------------

  /** 是否启用虚拟滚动（默认 false，大数据量时开启以提升性能） */
  virtual?: boolean
  /** 下拉菜单容器高度（px），默认 256 */
  listHeight?: number
  /** 菜单项高度（px），默认 32 */
  listItemHeight?: number
}
