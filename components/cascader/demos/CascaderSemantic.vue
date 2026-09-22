<template>
  <SemanticPreview component="Cascader" :semantics="semantics" :height="380">
    <template #default="{ classNames }">
      <!-- 下拉默认经 Trigger 传送到 body，用 ConfigProvider.getPopupContainer 就地挂载回预览区宿主，
           配合 default-open 常开，使 dropdown/menus/menu/menuItem 等弹层节点落在预览区内可被框选 -->
      <ConfigProvider :get-popup-container="getPopupContainer">
        <div ref="hostRef" class="demo-cascader-host">
          <!-- 主用例：多选 + 默认展开 + 已选值 + 可清除 + 可搜索，
               暴露 selector/selectionItem/-Content/-Remove/searchInput/suffix/clear/arrow
               /dropdown/menus/menu/menuItem/-Content/-Checkbox/-ExpandIcon -->
          <Cascader
            multiple
            show-search
            allow-clear
            default-open
            :options="options"
            :default-value="[['zhejiang', 'hangzhou']]"
            style="width: 260px"
            :class-names="classNames"
          />
          <!-- 辅助用例：多选空值，暴露 selectionPlaceholder（占位符节点） -->
          <Cascader
            multiple
            :options="options"
            placeholder="请选择（占位符）"
            style="width: 260px"
            :class-names="classNames"
          />
        </div>
      </ConfigProvider>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader, ConfigProvider } from '@hmfw/ant-design'

const hostRef = ref<HTMLElement | null>(null)
// 弹层就近挂载到预览区宿主，避免默认 Teleport 到 body 后无法框选
const getPopupContainer = () => hostRef.value ?? document.body

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      { value: 'hangzhou', label: '杭州' },
      { value: 'ningbo', label: '宁波' },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      { value: 'nanjing', label: '南京' },
      { value: 'suzhou', label: '苏州' },
    ],
  },
]

// 与 CascaderClassNames / CascaderStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '根容器（div.hmfw-cascader）。承载选择器整体的边框、圆角、尺寸与状态（open/disabled/multiple/error 等）类名，始终渲染。',
  },
  {
    name: 'selector',
    desc: '选择器容器（span.hmfw-cascader-selector）。承载已选内容/占位符/搜索框的内边距与布局，始终渲染。',
  },
  {
    name: 'selectionItem',
    desc: '已选项标签（span.hmfw-cascader-selection-item）。多选时为每个选中路径的 tag、单选时为已选文本容器，承载标签样式；多选每个选中项各渲染一个。',
  },
  {
    name: 'selectionItemContent',
    desc: '已选项内容（span.hmfw-cascader-selection-item-content）。多选 tag 内的文本节点，承载标签文本样式，仅多选模式且存在选中值时渲染。',
  },
  {
    name: 'selectionItemRemove',
    desc: '已选项删除按钮（span.hmfw-cascader-selection-item-remove）。多选 tag 上的「×」，承载删除按钮样式与 hover 态，仅多选、非禁用且存在选中值时渲染。',
  },
  {
    name: 'selectionPlaceholder',
    desc: '占位符（span.hmfw-cascader-selection-placeholder）。承载未选择时的提示文字样式，仅多选模式且无选中值、无搜索文本时渲染（见下方第二个空值示例）。',
  },
  {
    name: 'searchInput',
    desc: '搜索输入框（input.hmfw-cascader-search-input）。承载搜索文本输入样式，仅 showSearch 开启且下拉展开时渲染。',
  },
  {
    name: 'suffix',
    desc: '后缀区域（span.hmfw-cascader-suffix）。承载箭头图标的定位容器，始终渲染。',
  },
  {
    name: 'clear',
    desc: '清除按钮（button.hmfw-cascader-clear / hmfw-select-clear）。承载清空图标样式，仅 allowClear 开启、存在选中值且非禁用时渲染（通常 hover 时显现）。',
  },
  {
    name: 'arrow',
    desc: '箭头图标（.hmfw-cascader-arrow）。展开时叠加 .hmfw-cascader-arrow-open 类做旋转，承载下拉箭头样式，始终渲染。',
  },
  {
    name: 'dropdown',
    desc: '下拉弹层容器（.hmfw-cascader-dropdown，经 Trigger 传送到 body）。承载弹层背景、圆角与阴影，仅在下拉展开时渲染。',
  },
  {
    name: 'menus',
    desc: '多列菜单容器（div.hmfw-cascader-menus）。承载多级列的横向排列，仅在非搜索状态且下拉展开时渲染。',
  },
  {
    name: 'menu',
    desc: '单列菜单（ul.hmfw-cascader-menu）。承载单级选项列表的滚动与宽度，每一级各渲染一个，下拉展开时渲染。',
  },
  {
    name: 'menuItem',
    desc: '菜单项（li.hmfw-cascader-menu-item）。单个选项，承载 active/selected/disabled/expand 状态类名，每个选项各渲染一个。',
  },
  {
    name: 'menuItemContent',
    desc: '菜单项内容（span.hmfw-cascader-menu-item-content）。承载选项文本样式，每个菜单项内均渲染。',
  },
  {
    name: 'menuItemCheckbox',
    desc: '菜单项复选框（span.hmfw-cascader-menu-item-checkbox）。承载多选勾选框的选中/半选样式，仅多选模式下渲染。',
  },
  {
    name: 'menuItemExpandIcon',
    desc: '菜单项展开图标（.hmfw-cascader-menu-item-expand-icon）。承载右侧展开箭头样式，仅该选项含子级（可展开）时渲染。',
  },
  {
    name: 'menuItemHighlight',
    desc: '搜索高亮文本（.hmfw-cascader-menu-item-highlight）。承载搜索命中片段的高亮样式，仅在搜索框输入关键字命中选项时渲染（需在上方搜索框中输入文字触发）。',
  },
  {
    name: 'menuItemEmpty',
    desc: '空状态提示（div.hmfw-cascader-menu-item-empty）。承载「无匹配结果」提示样式，仅在搜索无命中时渲染（需在搜索框中输入无匹配关键字触发）。',
  },
]
</script>

<style scoped>
/* 定位上下文 + 预留高度，常开下拉向下展开后完整落在预览区内 */
.demo-cascader-host {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 240px;
}
</style>
