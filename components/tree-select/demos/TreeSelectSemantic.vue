<template>
  <!--
    下拉面板默认由 Trigger 传送到 body，SemanticPreview 只在自身容器内测量，无法框选。
    这里用 ConfigProvider 的 getPopupContainer 把弹层就近传送回触发器所在容器，
    使 dropdown / treeNode 等节点落在预览容器内、可被框选。弹层为 fixed 定位，
    仍浮在触发器下方，不影响布局。
  -->
  <SemanticPreview component="TreeSelect" :semantics="semantics" :height="480">
    <template #default="{ classNames }">
      <ConfigProvider :get-popup-container="getPopupContainer">
        <div style="display: flex; flex-direction: column; gap: 12px; width: 260px">
          <!-- 主用例：多选 + 可勾选 + 搜索 + 清除 + 图标，常开下拉，覆盖大部分节点 -->
          <TreeSelect
            :tree-data="treeData"
            :default-value="['leaf-1']"
            multiple
            tree-checkable
            show-search
            allow-clear
            :tree-icon="true"
            tree-default-expand-all
            :open="true"
            :list-height="150"
            placeholder="请选择"
            :class-names="classNames"
          />
          <!-- 占位用例：无值时渲染 placeholder 节点 -->
          <TreeSelect :tree-data="treeData" placeholder="请选择节点" :class-names="classNames" />
          <!-- 空态用例：treeData 为空且常开，渲染 dropdownEmpty 节点 -->
          <TreeSelect :tree-data="[]" :open="true" placeholder="无数据" :class-names="classNames" />
        </div>
      </ConfigProvider>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { TreeSelect, ConfigProvider } from '@hmfw/ant-design'

// 弹层就近传送回触发器所在父容器，保证节点落在预览容器内
const getPopupContainer = (node: HTMLElement) => node.parentElement ?? document.body

const treeData = [
  {
    label: '父节点',
    value: 'parent',
    children: [
      { label: '叶子一', value: 'leaf-1' },
      { label: '叶子二', value: 'leaf-2' },
    ],
  },
]

// 与 TreeSelectClassNames / TreeSelectStyles 的 key 一一对应，顺序对齐类型定义
const semantics = [
  {
    name: 'root',
    desc: '根节点（div.hmfw-tree-select）。承载整体尺寸、禁用/校验状态类（status-error/warning）与多选、展开等修饰类，始终渲染。',
  },
  {
    name: 'selector',
    desc: '选择器容器（div.hmfw-tree-select-selector，role="combobox"）。承载边框、内边距、聚焦态样式，是已选项/占位/搜索框的容器，始终渲染。',
  },
  {
    name: 'item',
    desc: '已选项（span.hmfw-tree-select-selection-item）。单选时为文本、多选时为标签，承载已选内容样式；仅在存在选中值时渲染，多选每个值渲染一个。',
  },
  {
    name: 'placeholder',
    desc: '占位符（span.hmfw-tree-select-selection-placeholder）。承载占位文字样式，仅在无选中值（多选时还需搜索框为空）时渲染。',
  },
  {
    name: 'search',
    desc: '搜索输入框（input.hmfw-tree-select-selection-search）。承载搜索输入样式，仅在 show-search 时渲染（单选还需下拉展开）。',
  },
  {
    name: 'arrow',
    desc: '后缀箭头容器（div.hmfw-tree-select-arrow）。承载下拉箭头图标的样式，始终渲染。',
  },
  {
    name: 'clear',
    desc: '清除按钮（button.hmfw-tree-select-clear）。承载清空图标样式，仅在 allow-clear 且存在选中值时渲染。',
  },
  {
    name: 'dropdown',
    desc: '下拉面板（div.hmfw-tree-select-dropdown）。承载弹层的背景、阴影、圆角与内边距，仅在下拉展开时渲染（本例常开）。',
  },
  {
    name: 'dropdownEmpty',
    desc: '空状态（div.hmfw-tree-select-dropdown-empty）。承载「无数据」提示样式，仅在下拉展开且无匹配节点时渲染（本例第三个实例）。',
  },
  {
    name: 'treeNode',
    desc: '树节点行（div.hmfw-tree-select-tree-node，role="treeitem"）。承载每行的选中/禁用状态与缩进，下拉内每个节点渲染一个。',
  },
  {
    name: 'treeNodeContent',
    desc: '树节点内容（span.hmfw-tree-select-tree-node-content）。承载节点标题的点击热区与文字样式，始终随节点渲染。',
  },
  {
    name: 'treeSwitcher',
    desc: '展开/收起按钮（span.hmfw-tree-select-tree-switcher）。承载展开箭头样式，含 switcher-noop 叶子占位态，始终随节点渲染。',
  },
  {
    name: 'treeCheckbox',
    desc: '复选框（span.hmfw-tree-select-tree-checkbox）。承载勾选框样式，含 checked/indeterminate/disabled 状态类，仅在 tree-checkable 时随节点渲染。',
  },
  {
    name: 'treeIcon',
    desc: '节点图标（span.hmfw-tree-select-tree-icon）。承载节点前置图标样式，仅在存在节点图标（node.icon 或 tree-icon 配置）时渲染。',
  },
]
</script>
