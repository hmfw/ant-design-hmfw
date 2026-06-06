import {
  defineComponent, ref, computed, watch, nextTick, type PropType, type VNodeChild,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Checkbox } from '../checkbox'
import { VirtualList } from '../_internal/virtual-list'
import * as Icons from '../icon'
import type {
  TreeDataNode, TreeExpandedKeys, TreeSelectedKeys, TreeCheckedKeys,
  CheckedKeysObject, FieldNames, ShowLineConfig, DraggableConfig, AllowDropOptions,
  TreeSemanticClassNames, TreeSemanticStyles, Key,
} from './types'

interface Entity {
  node: TreeDataNode
  parentKey: Key | null
  level: number
  pos: string
  index: number
  childrenKeys: Key[]
}

interface FlatNode {
  node: TreeDataNode
  level: number
  hasChildren: boolean
  pos: string
}

/** 节点图标上下文（传给自定义 icon 函数） */
interface IconCtx {
  expanded: boolean
  isLeaf: boolean
}

/** 按名称渲染库内图标组件；找不到时返回原始内容 */
function renderIcon(
  icon: string | ((node: any, ctx?: IconCtx) => VNodeChild) | undefined,
  node: TreeDataNode,
  ctx?: IconCtx,
): VNodeChild {
  if (!icon) return null
  if (typeof icon === 'function') return icon(node, ctx)
  const Comp = (Icons as Record<string, unknown>)[icon] as ((p: any) => VNodeChild) | undefined
  return Comp ? Comp({}) : icon
}

export const Tree = defineComponent({
  name: 'Tree',
  props: {
    treeData: { type: Array as PropType<TreeDataNode[]>, default: () => [] },
    expandedKeys: Array as PropType<TreeExpandedKeys>,
    defaultExpandedKeys: { type: Array as PropType<TreeExpandedKeys>, default: () => [] },
    defaultExpandAll: Boolean,
    defaultExpandParent: { type: Boolean, default: true },
    autoExpandParent: Boolean,
    selectedKeys: Array as PropType<TreeSelectedKeys>,
    defaultSelectedKeys: { type: Array as PropType<TreeSelectedKeys>, default: () => [] },
    checkedKeys: [Array, Object] as PropType<TreeCheckedKeys | CheckedKeysObject>,
    defaultCheckedKeys: { type: Array as PropType<TreeCheckedKeys>, default: () => [] },
    checkable: Boolean,
    checkStrictly: Boolean,
    multiple: Boolean,
    selectable: { type: Boolean, default: true },
    disabled: Boolean,
    draggable: [Boolean, Function, Object] as PropType<DraggableConfig>,
    allowDrop: Function as PropType<(options: AllowDropOptions) => boolean>,
    showLine: [Boolean, Object] as PropType<ShowLineConfig>,
    showIcon: Boolean,
    blockNode: Boolean,
    indent: { type: Number, default: 24 },
    filterTreeNode: Function as PropType<(node: TreeDataNode) => boolean>,
    icon: [String, Function] as PropType<string | ((node: TreeDataNode) => VNodeChild)>,
    switcherIcon: [String, Function] as PropType<string | ((s: { expanded: boolean; isLeaf: boolean }) => VNodeChild)>,
    titleRender: Function as PropType<(node: TreeDataNode) => VNodeChild>,
    fieldNames: Object as PropType<FieldNames>,
    virtual: Boolean,
    height: [Number, String] as PropType<number | string>,
    itemHeight: { type: Number, default: 28 },
    rootClassName: String,
    classNames: Object as PropType<TreeSemanticClassNames>,
    styles: Object as PropType<TreeSemanticStyles>,
    /** DirectoryTree 用：展开触发方式 */
    expandAction: { type: [Boolean, String] as PropType<false | 'click' | 'doubleClick'>, default: undefined },
  },
  emits: [
    'update:expandedKeys', 'update:selectedKeys', 'update:checkedKeys',
    'expand', 'select', 'check', 'dblclick', 'rightClick',
    'dragstart', 'dragenter', 'dragover', 'dragleave', 'dragend', 'drop',
  ],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('tree')

    const keyField = computed(() => props.fieldNames?.key ?? 'key')
    const titleField = computed(() => props.fieldNames?.title ?? 'title')
    const childrenField = computed(() => props.fieldNames?.children ?? 'children')

    const getKey = (node: TreeDataNode) => node[keyField.value] as Key
    const getTitle = (node: TreeDataNode) => node[titleField.value] as string
    const getChildren = (node: TreeDataNode) => node[childrenField.value] as TreeDataNode[] | undefined

    /** 实体表：key -> { node, parentKey, level, childrenKeys, ... }，用于祖先/后代查询 */
    const keyEntities = computed(() => {
      const map = new Map<Key, Entity>()
      const walk = (nodes: TreeDataNode[], parentKey: Key | null, level: number, parentPos: string) => {
        nodes.forEach((node, index) => {
          const key = getKey(node)
          const pos = `${parentPos}-${index}`
          const children = getChildren(node) ?? []
          map.set(key, {
            node, parentKey, level, pos, index,
            childrenKeys: children.map((c) => getKey(c)),
          })
          if (children.length) walk(children, key, level + 1, pos)
        })
      }
      walk(props.treeData, null, 0, '0')
      return map
    })

    const getAllKeys = () => Array.from(keyEntities.value.keys())

    /** 收集某 key 的全部后代 key */
    const getDescendantKeys = (key: Key): Key[] => {
      const entity = keyEntities.value.get(key)
      if (!entity) return []
      return entity.childrenKeys.flatMap((c) => [c, ...getDescendantKeys(c)])
    }

    /** 收集某 key 的全部祖先 key（自底向上） */
    const getAncestorKeys = (key: Key): Key[] => {
      const acc: Key[] = []
      let cur = keyEntities.value.get(key)?.parentKey ?? null
      while (cur !== null) {
        acc.push(cur)
        cur = keyEntities.value.get(cur)?.parentKey ?? null
      }
      return acc
    }

    /** 展开父节点：把传入 keys 的所有祖先补全 */
    const conductExpandParent = (keys: Key[]): Key[] => {
      const set = new Set<Key>(keys)
      keys.forEach((k) => getAncestorKeys(k).forEach((a) => set.add(a)))
      return Array.from(set)
    }
    // __STATE__

    // ============ 受控/非受控状态 ============
    const computeInitExpanded = (): Key[] => {
      if (props.defaultExpandAll) return getAllKeys()
      const base = props.expandedKeys ?? props.defaultExpandedKeys
      return props.defaultExpandParent ? conductExpandParent(base) : [...base]
    }

    const innerExpanded = ref<Key[]>(computeInitExpanded())
    const innerSelected = ref<Key[]>([...props.defaultSelectedKeys])

    /** 把 checkedKeys（数组或对象）归一为 checked 数组 */
    const normalizeChecked = (v: TreeCheckedKeys | CheckedKeysObject | undefined): Key[] => {
      if (!v) return []
      return Array.isArray(v) ? v : (v.checked ?? [])
    }
    const innerChecked = ref<Key[]>([...props.defaultCheckedKeys])

    const expandedKeys = computed(() => props.expandedKeys ?? innerExpanded.value)
    const selectedKeys = computed(() => props.selectedKeys ?? innerSelected.value)
    const checkedKeys = computed(() => (
      props.checkedKeys !== undefined ? normalizeChecked(props.checkedKeys) : innerChecked.value
    ))

    // treeData 变化时，按 defaultExpandAll 重算展开
    watch(() => props.treeData, () => {
      if (props.defaultExpandAll) innerExpanded.value = getAllKeys()
    })

    // autoExpandParent：受控展开变化时自动补全祖先
    watch(() => props.expandedKeys, (val) => {
      if (val && props.autoExpandParent) innerExpanded.value = conductExpandParent(val)
    })

    // ============ 半选计算（checkStrictly 关闭时） ============
    const halfCheckedKeys = computed<Set<Key>>(() => {
      const result = new Set<Key>()
      if (props.checkStrictly) return result
      const checkedSet = new Set(checkedKeys.value)
      // 自身未选中，但后代中有被选中的 -> 半选
      for (const [key] of keyEntities.value) {
        if (checkedSet.has(key)) continue
        const descendants = getDescendantKeys(key)
        if (descendants.length && descendants.some((d) => checkedSet.has(d))) {
          result.add(key)
        }
      }
      return result
    })
    // __FLATTEN__

    // ============ 扁平化可见节点 ============
    const flattenNodes = (nodes: TreeDataNode[], level = 0, parentPos = '0'): FlatNode[] => (
      nodes.flatMap((node, i) => {
        const key = getKey(node)
        const children = getChildren(node)
        const pos = `${parentPos}-${i}`
        const hasChildren = !!(children?.length)
        const result: FlatNode[] = [{ node, level, hasChildren, pos }]
        if (hasChildren && expandedKeys.value.includes(key)) {
          result.push(...flattenNodes(children!, level + 1, pos))
        }
        return result
      })
    )
    const flatNodes = computed(() => flattenNodes(props.treeData))

    const collectNodes = (keys: Key[]): TreeDataNode[] => (
      keys.map((k) => keyEntities.value.get(k)?.node).filter(Boolean) as TreeDataNode[]
    )

    // ============ 展开 ============
    const setExpanded = (next: Key[]) => {
      innerExpanded.value = next
      emit('update:expandedKeys', next)
    }

    const handleExpand = (key: Key, node: TreeDataNode, nativeEvent?: Event) => {
      const willExpand = !expandedKeys.value.includes(key)
      const next = willExpand
        ? [...expandedKeys.value, key]
        : expandedKeys.value.filter((k) => k !== key)
      setExpanded(next)
      emit('expand', next, { expanded: willExpand, node, nativeEvent })
    }

    // ============ 选中 ============
    const handleSelect = (key: Key, node: TreeDataNode, nativeEvent?: Event) => {
      if (props.disabled || node.disabled || node.selectable === false || !props.selectable) return
      const willSelect = !selectedKeys.value.includes(key)
      let next: Key[]
      if (props.multiple) {
        next = willSelect
          ? [...selectedKeys.value, key]
          : selectedKeys.value.filter((k) => k !== key)
      } else {
        next = selectedKeys.value[0] === key ? [] : [key]
      }
      innerSelected.value = next
      emit('update:selectedKeys', next)
      emit('select', next, {
        event: 'select',
        selected: next.includes(key),
        node,
        selectedNodes: collectNodes(next),
        nativeEvent,
      })
    }

    // ============ 勾选 ============
    const handleCheck = (key: Key, node: TreeDataNode, nativeEvent?: Event) => {
      if (props.disabled || node.disabled || node.disableCheckbox || node.checkable === false) return
      const wasChecked = checkedKeys.value.includes(key)
      let next: Key[]

      if (props.checkStrictly) {
        next = wasChecked
          ? checkedKeys.value.filter((k) => k !== key)
          : [...checkedKeys.value, key]
      } else {
        const descendants = getDescendantKeys(key).filter((d) => {
          const n = keyEntities.value.get(d)?.node
          return n && !n.disabled && !n.disableCheckbox
        })
        const checkedSet = new Set(checkedKeys.value)
        if (wasChecked) {
          // 取消：自身 + 后代 + 受影响的祖先
          checkedSet.delete(key)
          descendants.forEach((d) => checkedSet.delete(d))
          getAncestorKeys(key).forEach((a) => checkedSet.delete(a))
        } else {
          // 选中：自身 + 后代
          checkedSet.add(key)
          descendants.forEach((d) => checkedSet.add(d))
          // 自底向上：若某祖先的所有可选子节点都已选中，则补选该祖先
          getAncestorKeys(key).forEach((a) => {
            const childKeys = (keyEntities.value.get(a)?.childrenKeys ?? []).filter((c) => {
              const n = keyEntities.value.get(c)?.node
              return n && !n.disabled && !n.disableCheckbox
            })
            if (childKeys.length && childKeys.every((c) => checkedSet.has(c))) checkedSet.add(a)
          })
        }
        next = Array.from(checkedSet)
      }

      innerChecked.value = next
      const half = Array.from(halfCheckedKeysFor(next))
      emit('update:checkedKeys', props.checkStrictly ? { checked: next, halfChecked: half } : next)
      emit('check', next, {
        event: 'check',
        checked: !wasChecked,
        node,
        checkedNodes: collectNodes(next),
        halfCheckedKeys: half,
        nativeEvent,
      })
    }

    // 给定 checked 数组，推算半选集合（供事件回调用）
    const halfCheckedKeysFor = (checked: Key[]): Set<Key> => {
      const result = new Set<Key>()
      if (props.checkStrictly) return result
      const checkedSet = new Set(checked)
      for (const [key] of keyEntities.value) {
        if (checkedSet.has(key)) continue
        const descendants = getDescendantKeys(key)
        if (descendants.length && descendants.some((d) => checkedSet.has(d))) result.add(key)
      }
      return result
    }
    // __INTERACTION__

    // ============ 焦点（键盘导航） ============
    const activeKey = ref<Key | null>(null)

    const focusNode = (key: Key | null) => {
      activeKey.value = key
      if (key === null) return
      nextTick(() => {
        const el = treeRef.value?.querySelector<HTMLElement>(`[data-key="${String(key)}"]`)
        el?.focus()
      })
    }

    const handleNodeKeydown = (e: KeyboardEvent, key: Key, node: TreeDataNode, hasChildren: boolean) => {
      const list = flatNodes.value
      const idx = list.findIndex((n) => getKey(n.node) === key)
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          if (idx < list.length - 1) focusNode(getKey(list[idx + 1].node))
          break
        case 'ArrowUp':
          e.preventDefault()
          if (idx > 0) focusNode(getKey(list[idx - 1].node))
          break
        case 'ArrowRight':
          e.preventDefault()
          if (hasChildren && !expandedKeys.value.includes(key)) handleExpand(key, node, e)
          else if (hasChildren && idx < list.length - 1) focusNode(getKey(list[idx + 1].node))
          break
        case 'ArrowLeft':
          e.preventDefault()
          if (hasChildren && expandedKeys.value.includes(key)) handleExpand(key, node, e)
          else {
            const parentKey = keyEntities.value.get(key)?.parentKey
            if (parentKey != null) focusNode(parentKey)
          }
          break
        case 'Enter':
        case ' ':
          e.preventDefault()
          if (props.checkable) handleCheck(key, node, e)
          else handleSelect(key, node, e)
          break
        default:
          break
      }
    }

    // ============ 节点点击（含 expandAction） ============
    const handleTitleClick = (key: Key, node: TreeDataNode, hasChildren: boolean, e: Event) => {
      handleSelect(key, node, e)
      if (props.expandAction === 'click' && hasChildren) handleExpand(key, node, e)
    }

    const handleTitleDblclick = (key: Key, node: TreeDataNode, hasChildren: boolean, e: Event) => {
      emit('dblclick', e, node)
      if (props.expandAction === 'doubleClick' && hasChildren) handleExpand(key, node, e)
    }

    const handleRightClick = (key: Key, node: TreeDataNode, e: Event) => {
      emit('rightClick', { event: e, node })
    }

    // ============ 拖拽 ============
    const dragKey = ref<Key | null>(null)
    const dragOverKey = ref<Key | null>(null)

    const isDraggable = (node: TreeDataNode): boolean => {
      if (!props.draggable) return false
      if (props.draggable === true) return true
      if (typeof props.draggable === 'function') return props.draggable(node)
      if (typeof props.draggable === 'object' && props.draggable.nodeDraggable) {
        return props.draggable.nodeDraggable(node)
      }
      return true
    }

    /**
     * 判断拖放是否合法（边界检查）：
     * 1. 不能拖到自身
     * 2. 不能将节点拖入其自身的后代（会造成循环引用）
     * 3. 满足用户自定义的 allowDrop 校验
     */
    const isValidDrop = (dropKey: Key): boolean => {
      if (dragKey.value == null) return false
      // 1. 不能拖到自身
      if (dragKey.value === dropKey) return false
      // 2. 不能拖入自身后代
      const descendants = getDescendantKeys(dragKey.value)
      if (descendants.includes(dropKey)) return false
      // 3. 用户自定义校验
      if (props.allowDrop) {
        const dragNode = keyEntities.value.get(dragKey.value)?.node
        const dropNode = keyEntities.value.get(dropKey)?.node
        if (dragNode && dropNode) {
          return props.allowDrop({ dragNode, dropNode, dropPosition: 0 })
        }
      }
      return true
    }

    const handleDragStart = (e: DragEvent, key: Key, node: TreeDataNode) => {
      dragKey.value = key
      emit('dragstart', { event: e, node })
    }
    const handleDragEnter = (e: DragEvent, key: Key, node: TreeDataNode) => {
      // 仅在合法目标上显示拖放高亮
      dragOverKey.value = isValidDrop(key) ? key : null
      emit('dragenter', { event: e, node, expandedKeys: expandedKeys.value })
    }
    const handleDragOver = (e: DragEvent, key: Key, node: TreeDataNode) => {
      // 仅在合法目标上调用 preventDefault 以允许放置；非法目标保持默认行为（禁止放置光标）
      if (isValidDrop(key)) {
        e.preventDefault()
      }
      emit('dragover', { event: e, node })
    }
    const handleDragLeave = (e: DragEvent, node: TreeDataNode) => {
      emit('dragleave', { event: e, node })
    }
    const handleDragEnd = (e: DragEvent, node: TreeDataNode) => {
      dragKey.value = null
      dragOverKey.value = null
      emit('dragend', { event: e, node })
    }
    const handleDrop = (e: DragEvent, key: Key, node: TreeDataNode) => {
      e.preventDefault()
      // 边界检查：非法放置（拖到自身、拖入后代、未通过 allowDrop）直接忽略，不触发 drop 事件
      if (!isValidDrop(key)) {
        dragKey.value = null
        dragOverKey.value = null
        return
      }
      const dragNode = dragKey.value != null ? keyEntities.value.get(dragKey.value)?.node : undefined
      const dropEntity = keyEntities.value.get(key)
      emit('drop', {
        node,
        dragNode,
        dragNodesKeys: dragKey.value != null ? [dragKey.value, ...getDescendantKeys(dragKey.value)] : [],
        dropPosition: dropEntity?.index ?? 0,
        dropToGap: false,
        nativeEvent: e,
      })
      dragKey.value = null
      dragOverKey.value = null
    }
    // __RENDER__

    const treeRef = ref<HTMLElement | null>(null)

    // showLine 是否展示叶子图标
    const showLeafIcon = computed(() => {
      if (typeof props.showLine === 'object') return props.showLine.showLeafIcon !== false
      return !!props.showLine
    })
    const showLineEnabled = computed(() => !!props.showLine)

    // draggable 把手图标
    const dragIcon = computed(() => {
      if (typeof props.draggable === 'object' && props.draggable.icon === false) return false
      return true
    })

    const sn = (k: keyof TreeSemanticClassNames) => props.classNames?.[k]
    const ss = (k: keyof TreeSemanticStyles) => props.styles?.[k]

    const renderSwitcher = (node: TreeDataNode, hasChildren: boolean, isExpanded: boolean): VNodeChild => {
      if (props.switcherIcon) {
        const custom = typeof props.switcherIcon === 'function'
          ? props.switcherIcon({ expanded: isExpanded, isLeaf: !hasChildren })
          : renderIcon(props.switcherIcon, node)
        if (custom) return custom
      }
      if (!hasChildren) return null
      return isExpanded ? '▾' : '▸'
    }

    // 渲染单个树节点
    const renderTreeNode = (flatNode: FlatNode, index: number) => {
      const { node, level, hasChildren } = flatNode
      const key = getKey(node)
      const isExpanded = expandedKeys.value.includes(key)
      const isSelected = selectedKeys.value.includes(key)
      const isChecked = checkedKeys.value.includes(key)
      const isHalfChecked = halfCheckedKeys.value.has(key)
      const isActive = activeKey.value === key
      const isDisabled = !!(node.disabled || props.disabled)
      const matched = props.filterTreeNode?.(node)
      const nodeIcon = node.icon ?? props.icon
      const draggableNode = isDraggable(node)

      return (
        <div
          key={key}
          data-key={String(key)}
          class={cls(`${prefixCls}-treenode`, sn('item'), {
            [`${prefixCls}-treenode-selected`]: isSelected,
            [`${prefixCls}-treenode-disabled`]: isDisabled,
            [`${prefixCls}-treenode-leaf`]: !hasChildren,
            [`${prefixCls}-treenode-active`]: isActive,
            [`${prefixCls}-treenode-draggable`]: draggableNode,
            [`${prefixCls}-treenode-drag-over`]: dragOverKey.value === key,
          })}
          role="treeitem"
          tabindex={isActive || (activeKey.value === null && level === 0 && flatNodes.value[0]?.node === node) ? 0 : -1}
          aria-level={level + 1}
          aria-expanded={hasChildren ? isExpanded : undefined}
          aria-selected={props.selectable ? isSelected : undefined}
          aria-checked={props.checkable ? isChecked : undefined}
          aria-disabled={isDisabled || undefined}
          style={{ paddingLeft: `${level * props.indent}px`, ...ss('item') }}
          draggable={draggableNode || undefined}
          onFocus={() => { activeKey.value = key }}
          onKeydown={(e: KeyboardEvent) => handleNodeKeydown(e, key, node, hasChildren)}
          onContextmenu={(e: Event) => handleRightClick(key, node, e)}
          onDragstart={draggableNode ? ((e: DragEvent) => handleDragStart(e, key, node)) : undefined}
          onDragenter={props.draggable ? ((e: DragEvent) => handleDragEnter(e, key, node)) : undefined}
          onDragover={props.draggable ? ((e: DragEvent) => handleDragOver(e, key, node)) : undefined}
          onDragleave={props.draggable ? ((e: DragEvent) => handleDragLeave(e, node)) : undefined}
          onDragend={props.draggable ? ((e: DragEvent) => handleDragEnd(e, node)) : undefined}
          onDrop={props.draggable ? ((e: DragEvent) => handleDrop(e, key, node)) : undefined}
        >
          {/* 拖拽把手 */}
          {draggableNode && dragIcon.value && (
            <span class={`${prefixCls}-draggable-icon`}>⋮⋮</span>
          )}

          {/* Switcher */}
          <span
            class={cls(`${prefixCls}-switcher`, sn('itemSwitcher'), {
              [`${prefixCls}-switcher_open`]: hasChildren && isExpanded,
              [`${prefixCls}-switcher_close`]: hasChildren && !isExpanded,
              [`${prefixCls}-switcher-noop`]: !hasChildren,
            })}
            style={ss('itemSwitcher')}
            onClick={() => hasChildren && handleExpand(key, node)}
          >
            {renderSwitcher(node, hasChildren, isExpanded)}
          </span>

          {/* Checkbox */}
          {props.checkable && (
            <span class={`${prefixCls}-checkbox-cell`} onClick={(e: Event) => e.stopPropagation()}>
              <Checkbox
                checked={isChecked}
                indeterminate={isHalfChecked}
                disabled={isDisabled || !!node.disableCheckbox}
                onChange={() => handleCheck(key, node)}
              />
            </span>
          )}

          {/* Icon */}
          {props.showIcon && (nodeIcon || (showLineEnabled.value && showLeafIcon.value)) && (
            <span class={cls(`${prefixCls}-iconEle`, sn('itemIcon'))} style={ss('itemIcon')}>
              {renderIcon(nodeIcon, node, { expanded: isExpanded, isLeaf: !hasChildren })}
            </span>
          )}

          {/* Node content */}
          <span
            class={cls(`${prefixCls}-node-content-wrapper`, sn('itemTitle'), {
              [`${prefixCls}-node-content-wrapper-normal`]: !hasChildren,
              [`${prefixCls}-node-selected`]: isSelected,
              [`${prefixCls}-node-content-wrapper-matched`]: matched,
            })}
            style={ss('itemTitle')}
            onClick={(e: Event) => handleTitleClick(key, node, hasChildren, e)}
            onDblclick={(e: Event) => handleTitleDblclick(key, node, hasChildren, e)}
          >
            <span class={`${prefixCls}-title`}>
              {props.titleRender ? props.titleRender(node) : getTitle(node)}
            </span>
          </span>
        </div>
      )
    }

    return () => {
      const treeContent = props.virtual && props.height
        ? (
          <VirtualList
            data={flatNodes.value}
            height={props.height}
            itemHeight={props.itemHeight}
            renderItem={(flatNode: FlatNode, index: number) => renderTreeNode(flatNode, index)}
            itemKey={(flatNode: FlatNode) => getKey(flatNode.node)}
          />
        )
        : flatNodes.value.map((flatNode, index) => renderTreeNode(flatNode, index))

      return (
        <div
          ref={treeRef}
          class={cls(prefixCls, props.rootClassName, sn('root'), {
            [`${prefixCls}-show-line`]: showLineEnabled.value,
            [`${prefixCls}-block-node`]: props.blockNode,
            [`${prefixCls}-disabled`]: props.disabled,
            [`${prefixCls}-icon-hide`]: !props.showIcon,
            [`${prefixCls}-unselectable`]: !props.selectable,
          })}
          style={ss('root')}
          role="tree"
          aria-multiselectable={props.multiple || undefined}
        >
          {treeContent}
        </div>
      )
    }
  },
})
