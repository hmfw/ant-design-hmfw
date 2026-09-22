<template>
  <SemanticPreview component="Dropdown" :semantics="semantics" :height="260">
    <template #default="{ classNames }">
      <!-- open 常开 + getPopupContainer 就地挂载，让弹层节点渲染在预览区内可被框选 -->
      <div ref="hostRef" class="demo-dropdown-host">
        <Dropdown
          :menu="menu"
          :open="true"
          :arrow="true"
          trigger="click"
          :get-popup-container="getPopupContainer"
          :class-names="classNames"
        >
          <Button>悬停或点击</Button>
        </Dropdown>
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dropdown, Button } from '@hmfw/ant-design'

const hostRef = ref<HTMLElement | null>(null)
// 将弹层就地挂载到宿主容器，避免默认 Teleport 到 body 后无法被预览区框选
const getPopupContainer = () => hostRef.value ?? document.body

const menu = {
  items: [
    { key: '1', label: '菜单项一' },
    { key: '2', label: '菜单项二' },
    { key: '3', label: '菜单项三' },
  ],
}

// 与 DropdownClassNames / DropdownStyles 的 key 一一对应，顺序对齐类型定义
const semantics = [
  {
    name: 'trigger',
    desc: '触发器容器（包裹默认插槽的元素）。承载触发器自身的 class/style，通过 openClassName 反映展开态，始终渲染。',
  },
  {
    name: 'dropdown',
    desc: '下拉浮层根节点（div.hmfw-dropdown）。承载浮层定位、背景、圆角与阴影，展开或 forceRender 时渲染。',
  },
  {
    name: 'arrow',
    desc: '箭头（div.hmfw-dropdown-arrow）。指向触发器的小三角，仅在 arrow 开启时渲染。',
  },
  {
    name: 'content',
    desc: '浮层内容容器（div.hmfw-dropdown-content）。包裹菜单或自定义 overlay，承载内边距与内容布局，浮层渲染时始终存在。',
  },
]
</script>

<style scoped>
.demo-dropdown-host {
  position: relative;
}
</style>
