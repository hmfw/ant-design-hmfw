<template>
  <SemanticPreview component="Segmented" :semantics="semantics" :height="120">
    <template #default="{ classNames }">
      <!-- 含图标选项 + 选中项 + 禁用项，使 itemIcon / itemSelected / itemDisabled 等节点都真实渲染 -->
      <Segmented :default-value="'list'" :options="options" :class-names="classNames" />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Segmented } from '@hmfw/ant-design'
import { BarsOutlined, AppstoreOutlined } from '@hmfw/icons'

// 选项：图标 + 文本、含一个禁用项，覆盖 itemIcon/itemText/itemDisabled 等节点
const options = [
  { label: '列表', value: 'list', icon: h(BarsOutlined, { class: 'hmfw-icon' }) },
  { label: '卡片', value: 'card', icon: h(AppstoreOutlined, { class: 'hmfw-icon' }) },
  { label: '禁用', value: 'disabled', disabled: true },
]

// 与 SegmentedClassNames / SegmentedStyles 的 key 一一对应，顺序对齐类型定义
const semantics = [
  {
    name: 'root',
    desc: '根节点（div.hmfw-segmented，role="radiogroup"）。承载整体背景、尺寸（small/large）、block/vertical/round/disabled 等修饰类，始终渲染。',
  },
  {
    name: 'group',
    desc: '选项组容器（div.hmfw-segmented-group）。承载选项的排列布局，是滑块与所有选项的父级，始终渲染。',
  },
  {
    name: 'thumb',
    desc: '动画滑块（div.hmfw-segmented-thumb）。承载选中项背后的滑动高亮块，由 JS 计算定位，始终渲染。',
  },
  {
    name: 'item',
    desc: '单个选项（label.hmfw-segmented-item）。承载每个选项的点击热区与内边距，每个选项各渲染一个。',
  },
  {
    name: 'itemSelected',
    desc: '选中态选项（附加在选中的 label 上）。承载选中项的文字颜色等样式，仅当前选中项渲染该类。',
  },
  {
    name: 'itemDisabled',
    desc: '禁用态选项（附加在禁用的 label 上）。承载禁用项的置灰样式，仅 disabled 选项（或整体 disabled）渲染该类（见第三个「禁用」选项）。',
  },
  {
    name: 'itemInput',
    desc: '隐藏的单选输入（input.hmfw-segmented-item-input，type=radio）。承载无障碍与键盘导航，视觉上隐藏，每个选项各渲染一个。',
  },
  {
    name: 'itemLabel',
    desc: '选项内容包裹层（div.hmfw-segmented-item-label）。承载图标与文本的对齐布局，纯图标时附加 icon-only 类，每个选项各渲染一个。',
  },
  {
    name: 'itemIcon',
    desc: '选项图标（span.hmfw-segmented-item-icon）。承载图标字号与间距，仅在该选项配置了 icon 时渲染（见前两个选项）。',
  },
  {
    name: 'itemText',
    desc: '选项文本（span.hmfw-segmented-item-text）。承载选项文字样式，仅在该选项存在非空 label 时渲染。',
  },
]
</script>
