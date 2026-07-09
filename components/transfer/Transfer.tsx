import { defineComponent, ref, computed, watch, type PropType, type VNode, type CSSProperties } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils'
import { Button } from '../button'
import { LeftOutlined, RightOutlined } from '@hmfw/icons'
import { TransferList } from './TransferList'
import type {
  TransferItem,
  TransferKey,
  TransferDirection,
  RenderResult,
  SelectAllLabel,
  PaginationType,
  TransferSearchOption,
  TransferLocale,
  InputStatus,
  TransferListContext,
  TransferReorderInfo,
  TransferSemanticClassNames,
  TransferSemanticStyles,
} from './types'

export const Transfer = defineComponent({
  name: 'Transfer',
  props: {
    dataSource: { type: Array as PropType<TransferItem[]>, default: () => [] },
    targetKeys: Array as PropType<TransferKey[]>,
    defaultTargetKeys: { type: Array as PropType<TransferKey[]>, default: () => [] },
    selectedKeys: Array as PropType<TransferKey[]>,
    defaultSelectedKeys: { type: Array as PropType<TransferKey[]>, default: () => [] },
    titles: { type: Array as PropType<(VNode | string)[]>, default: () => ['', ''] },
    /** @deprecated 请使用 actions */
    operations: { type: Array as PropType<string[]>, default: () => [] },
    render: Function as PropType<(item: TransferItem) => RenderResult>,
    rowKey: Function as PropType<(record: TransferItem) => TransferKey>,
    showSearch: {
      type: [Boolean, Object] as PropType<boolean | TransferSearchOption>,
      default: false,
    },
    filterOption: Function as PropType<(input: string, item: TransferItem, direction: TransferDirection) => boolean>,
    footer: Function as PropType<(info: TransferListContext) => VNode | string | null>,
    listStyle: {
      type: [Object, Function] as PropType<CSSProperties | ((info: { direction: TransferDirection }) => CSSProperties)>,
      default: () => ({}),
    },
    disabled: Boolean,
    showSelectAll: { type: Boolean, default: true },
    selectAllLabels: { type: Array as PropType<SelectAllLabel[]>, default: () => [] },
    oneWay: Boolean,
    draggable: Boolean,
    pagination: { type: [Boolean, Object] as PropType<PaginationType>, default: undefined },
    status: String as PropType<InputStatus>,
    locale: { type: Object as PropType<Partial<TransferLocale>>, default: () => ({}) },
    rootClassName: String,
    classNames: { type: Object as PropType<TransferSemanticClassNames>, default: () => ({}) },
    styles: { type: Object as PropType<TransferSemanticStyles>, default: () => ({}) },

    // 虚拟滚动
    virtual: { type: Boolean, default: false },
    listHeight: { type: Number, default: 400 },
    listItemHeight: { type: Number, default: 40 },
  },
  emits: ['update:targetKeys', 'change', 'update:selectedKeys', 'selectChange', 'search', 'scroll', 'reorder'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('transfer')
    const globalLocale = useLocale()

    // 合并 locale：全局 < props.locale
    const mergedLocale = computed(() => ({ ...globalLocale.value.Transfer, ...props.locale }))

    const innerTargetKeys = ref<TransferKey[]>([...props.defaultTargetKeys])
    const innerSelectedKeys = ref<TransferKey[]>([...props.defaultSelectedKeys])

    watch(
      () => props.targetKeys,
      (v) => {
        if (v) innerTargetKeys.value = [...v]
      },
    )
    watch(
      () => props.selectedKeys,
      (v) => {
        if (v) innerSelectedKeys.value = [...v]
      },
    )

    const targetKeys = computed(() => props.targetKeys ?? innerTargetKeys.value)
    const selectedKeys = computed(() => props.selectedKeys ?? innerSelectedKeys.value)

    // rowKey 归一化：为缺 key 的项补 key
    const mergedDataSource = computed<TransferItem[]>(() =>
      props.dataSource.map((item) => ({
        ...item,
        key: props.rowKey ? props.rowKey(item) : item.key,
      })),
    )

    const leftDataSource = computed(() =>
      mergedDataSource.value.filter((item) => !targetKeys.value.includes(item.key as TransferKey)),
    )
    const targetKeyMap = computed(() => new Map(mergedDataSource.value.map((i) => [i.key, i])))
    // 右侧按 targetKeys 顺序排列（对齐 AntD：新移入的排在前）
    const rightDataSource = computed(
      () => targetKeys.value.map((k) => targetKeyMap.value.get(k)).filter(Boolean) as TransferItem[],
    )

    // 两侧选中态
    const sourceSelectedKeys = computed(() =>
      selectedKeys.value.filter((k) => leftDataSource.value.some((i) => i.key === k)),
    )
    const targetSelectedKeys = computed(() =>
      selectedKeys.value.filter((k) => rightDataSource.value.some((i) => i.key === k)),
    )

    function setSelectedKeys(next: TransferKey[]) {
      innerSelectedKeys.value = next
      emit('update:selectedKeys', next)
    }

    function handleSelectChange(direction: TransferDirection, holder: TransferKey[]) {
      const otherSide = direction === 'left' ? targetSelectedKeys.value : sourceSelectedKeys.value
      const next = direction === 'left' ? [...holder, ...otherSide] : [...otherSide, ...holder]
      setSelectedKeys(next)
      if (direction === 'left') emit('selectChange', holder, targetSelectedKeys.value)
      else emit('selectChange', sourceSelectedKeys.value, holder)
    }

    function moveTo(direction: TransferDirection) {
      const moveKeys = direction === 'right' ? sourceSelectedKeys.value : targetSelectedKeys.value
      const disabledKeys = new Set(mergedDataSource.value.filter((i) => i.disabled).map((i) => i.key))
      const newMoveKeys = moveKeys.filter((k) => !disabledKeys.has(k))
      const moveSet = new Set(newMoveKeys)
      const newTargetKeys =
        direction === 'right' ? [...newMoveKeys, ...targetKeys.value] : targetKeys.value.filter((k) => !moveSet.has(k))

      innerTargetKeys.value = newTargetKeys
      emit('update:targetKeys', newTargetKeys)

      // 清空对侧选中
      const oppositeKeys = direction === 'right' ? targetSelectedKeys.value : sourceSelectedKeys.value
      setSelectedKeys(oppositeKeys)
      if (direction === 'right') emit('selectChange', [], targetSelectedKeys.value)
      else emit('selectChange', sourceSelectedKeys.value, [])

      emit('change', newTargetKeys, direction, newMoveKeys)
    }

    const moveToRight = () => moveTo('right')
    const moveToLeft = () => moveTo('left')

    // shift 多选锚点（每侧独立）
    const lastSelectedIndex: Record<TransferDirection, number | null> = { left: null, right: null }

    function onItemSelect(direction: TransferDirection, key: TransferKey, checked: boolean, multiple?: boolean) {
      const isLeft = direction === 'left'
      const holder = isLeft ? sourceSelectedKeys.value : targetSelectedKeys.value
      const data = (isLeft ? leftDataSource.value : rightDataSource.value).filter((i) => !i.disabled)
      const currentIndex = data.findIndex((i) => i.key === key)
      const holderSet = new Set(holder)

      if (multiple && lastSelectedIndex[direction] !== null) {
        // shift 范围多选
        const start = Math.min(lastSelectedIndex[direction]!, currentIndex)
        const end = Math.max(lastSelectedIndex[direction]!, currentIndex)
        for (let i = start; i <= end; i++) {
          const k = data[i]?.key as TransferKey
          if (k !== undefined) holderSet.add(k)
        }
      } else {
        if (holderSet.has(key)) holderSet.delete(key)
        if (checked) holderSet.add(key)
        lastSelectedIndex[direction] = checked ? currentIndex : null
      }
      handleSelectChange(direction, [...holderSet])
    }

    function onItemSelectAll(direction: TransferDirection, keys: TransferKey[], checkAll: boolean | 'replace') {
      const prev = direction === 'left' ? sourceSelectedKeys.value : targetSelectedKeys.value
      let merged: TransferKey[]
      if (checkAll === 'replace') {
        merged = keys
      } else if (checkAll) {
        merged = [...new Set([...prev, ...keys])]
      } else {
        const set = new Set(keys)
        merged = prev.filter((k) => !set.has(k))
      }
      lastSelectedIndex[direction] = null
      handleSelectChange(direction, merged)
    }

    function onRightItemRemove(keys: TransferKey[]) {
      const removeSet = new Set(keys)
      const newTargetKeys = targetKeys.value.filter((k) => !removeSet.has(k))
      innerTargetKeys.value = newTargetKeys
      emit('update:targetKeys', newTargetKeys)
      // 清空右侧选中
      setSelectedKeys(sourceSelectedKeys.value)
      emit('change', newTargetKeys, 'left', [...keys])
    }

    /**
     * 拖拽排序：将 fromKey 移动到 toKey 位置（after=true 表示放到 toKey 后面）。
     * 仅作用于右侧 targetKeys，不会修改左右归属，不触发 change。
     */
    function onReorder(fromKey: TransferKey, toKey: TransferKey, after: boolean) {
      if (fromKey === toKey) return
      const oldKeys = [...targetKeys.value]
      const fromIndex = oldKeys.indexOf(fromKey)
      const toIndexRaw = oldKeys.indexOf(toKey)
      if (fromIndex < 0 || toIndexRaw < 0) return

      // 先移除 fromKey
      const next = oldKeys.slice()
      next.splice(fromIndex, 1)
      // 在新数组中重新计算 toKey 下标（移除后位置可能左移 1）
      const adjustedTo = next.indexOf(toKey)
      const insertIndex = after ? adjustedTo + 1 : adjustedTo
      next.splice(insertIndex, 0, fromKey)

      innerTargetKeys.value = next
      emit('update:targetKeys', next)
      const info: TransferReorderInfo = {
        direction: 'right',
        oldTargetKeys: oldKeys,
        newTargetKeys: next,
        activeKey: fromKey,
        fromIndex,
        toIndex: next.indexOf(fromKey),
      }
      emit('reorder', info)
    }

    function handleListStyle(direction: TransferDirection): CSSProperties {
      return typeof props.listStyle === 'function' ? props.listStyle({ direction }) : props.listStyle
    }

    // 右箭头（source→target）在源选中时可用；左箭头（target→source）在目标选中时可用
    const rightActive = computed(() => sourceSelectedKeys.value.length > 0)
    const leftActive = computed(() => targetSelectedKeys.value.length > 0)

    // 操作按钮文案（兼容废弃的 operations）
    const operations = computed(() => props.operations || [])

    function renderListProps(direction: TransferDirection) {
      const isLeft = direction === 'left'
      const lc = mergedLocale.value
      return {
        prefixCls,
        direction,
        titleText: props.titles?.[isLeft ? 0 : 1] ?? '',
        dataSource: isLeft ? leftDataSource.value : rightDataSource.value,
        checkedKeys: isLeft ? sourceSelectedKeys.value : targetSelectedKeys.value,
        disabled: props.disabled,
        showSearch: props.showSearch,
        showSelectAll: props.showSelectAll,
        showRemove: props.oneWay && !isLeft,
        draggable: !!props.draggable && !isLeft,
        pagination: props.pagination,
        selectAllLabel: props.selectAllLabels?.[isLeft ? 0 : 1],
        render: props.render,
        filterOption: props.filterOption,
        footer: props.footer,
        listStyle: handleListStyle(direction),
        classNames: props.classNames,
        styles: props.styles,
        virtual: props.virtual,
        listHeight: props.listHeight,
        listItemHeight: props.listItemHeight,
        // locale
        searchPlaceholder: lc.searchPlaceholder,
        notFoundContent: props.locale.notFoundContent ?? lc.notFoundContent,
        itemUnit: lc.itemUnit,
        itemsUnit: lc.itemsUnit,
        selectAll: lc.selectAll,
        deselectAll: lc.deselectAll,
        selectCurrent: lc.selectCurrent,
        selectInvert: lc.selectInvert,
        removeAll: lc.removeAll,
        removeCurrent: lc.removeCurrent,
        onItemSelect: (key: TransferKey, checked: boolean, e?: MouseEvent) =>
          onItemSelect(direction, key, checked, e?.shiftKey),
        onItemSelectAll: (keys: TransferKey[], checkAll: boolean | 'replace') =>
          onItemSelectAll(direction, keys, checkAll),
        onItemRemove: (keys: TransferKey[]) => onRightItemRemove(keys),
        onReorder: (fromKey: TransferKey, toKey: TransferKey, after: boolean) => onReorder(fromKey, toKey, after),
        onFilter: (dir: TransferDirection, val: string) => emit('search', dir, val),
        onScroll: (dir: TransferDirection, e: Event) => emit('scroll', dir, e),
      }
    }

    return () => (
      <div
        class={cls(prefixCls, props.rootClassName, props.classNames.root, {
          [`${prefixCls}-disabled`]: props.disabled,
          [`${prefixCls}-status-error`]: props.status === 'error',
          [`${prefixCls}-status-warning`]: props.status === 'warning',
        })}
        style={props.styles.root}
      >
        <TransferList {...renderListProps('left')} />

        <div class={cls(`${prefixCls}-actions`, props.classNames.actions)} style={props.styles.actions}>
          <Button
            type="primary"
            size="small"
            icon={RightOutlined}
            disabled={!rightActive.value || props.disabled}
            onClick={moveToRight}
          >
            {operations.value[0]}
          </Button>
          {!props.oneWay && (
            <Button
              type="primary"
              size="small"
              icon={LeftOutlined}
              disabled={!leftActive.value || props.disabled}
              onClick={moveToLeft}
            >
              {operations.value[1]}
            </Button>
          )}
        </div>

        <TransferList {...renderListProps('right')} />
      </div>
    )
  },
})
