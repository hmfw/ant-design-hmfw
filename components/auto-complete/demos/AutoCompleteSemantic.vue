<template>
  <SemanticPreview component="AutoComplete" :semantics="semantics" :height="260">
    <!-- 下拉面板默认 Teleport 到 body，SemanticPreview 仅测量容器内节点， -->
    <!-- 故用 ConfigProvider 把弹层容器改为触发器父级，使 dropdown/option/empty 可被框选 -->
    <template #default="{ classNames }">
      <ConfigProvider :get-popup-container="getPopupContainer">
        <div class="demo-ac-row">
          <!-- 有匹配项：渲染 dropdown + option -->
          <AutoComplete
            :options="options"
            :open="true"
            value="a"
            allow-clear
            placeholder="输入以搜索"
            :class-names="classNames"
          >
            <template #prefix>@</template>
            <template #suffix>▾</template>
          </AutoComplete>

          <!-- 无匹配项：渲染 dropdown + empty -->
          <AutoComplete
            :options="options"
            :open="true"
            value="zzz"
            allow-clear
            placeholder="无匹配项"
            :class-names="classNames"
          >
            <template #prefix>@</template>
            <template #suffix>▾</template>
          </AutoComplete>
        </div>
      </ConfigProvider>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { AutoComplete, ConfigProvider } from '@hmfw/ant-design'

const options = [{ value: 'apple' }, { value: 'amber' }, { value: 'avocado' }]

// 弹层挂到触发器父级，保持在 SemanticPreview 容器内以便测量高亮
const getPopupContainer = (node?: HTMLElement) => (node?.parentElement as HTMLElement) ?? document.body

// 与 AutoCompleteClassNames / AutoCompleteStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '根节点（div.hmfw-input-affix-wrapper）。输入框外层容器，承载边框、背景、圆角与聚焦/校验态样式，始终渲染。',
  },
  {
    name: 'prefix',
    desc: '前缀容器（span.hmfw-input-prefix）。承载输入框左侧前置内容的间距与对齐，仅在提供 prefix 插槽时渲染。',
  },
  {
    name: 'input',
    desc: '输入框（input.hmfw-input）。承载文字输入的字号、行高与占位符样式，始终渲染。',
  },
  {
    name: 'clear',
    desc: '清除按钮（button.hmfw-select-clear）。承载清除图标样式，仅在 allowClear、存在输入值且未禁用时渲染。',
  },
  {
    name: 'suffix',
    desc: '后缀容器（span.hmfw-input-suffix）。承载输入框右侧后置内容的间距与对齐，仅在提供 suffix 插槽时渲染。',
  },
  {
    name: 'dropdown',
    desc: '下拉面板（div.hmfw-auto-complete-dropdown）。承载弹层的背景、圆角、阴影与内边距，仅在展开时渲染（此处用 open 强制展开并挂到容器内）。',
  },
  {
    name: 'option',
    desc: '选项（div.hmfw-auto-complete-dropdown-item）。承载单个选项的内边距、hover/激活/选中态样式，仅在展开且存在匹配选项时逐项渲染（左侧实例）。',
  },
  {
    name: 'empty',
    desc: '空状态内容（div.hmfw-auto-complete-dropdown-empty）。承载无匹配选项时的占位文案样式，仅在展开且过滤结果为空时渲染（右侧实例）。',
  },
]
</script>

<style scoped>
.demo-ac-row {
  display: flex;
  gap: 16px;
  width: 100%;
  align-items: flex-start;
}
.demo-ac-row > * {
  flex: 1;
  min-width: 0;
}
</style>
