<template>
  <SemanticPreview component="Splitter" :semantics="semantics" :height="220" :padding="false">
    <template #default="{ classNames }">
      <!-- 多个 Panel，确保 root / panel / dragger 三个语义节点都渲染 -->
      <Splitter style="height: 220px" :class-names="classNames">
        <Splitter.Panel default-size="40%" min="20%" max="70%">
          <div class="demo-splitter-panel">第一个面板</div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div class="demo-splitter-panel">第二个面板</div>
        </Splitter.Panel>
      </Splitter>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Splitter } from '@hmfw/ant-design'

// 与 SplitterClassNames / SplitterStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '分割面板根容器（div.hmfw-splitter）。承载整体 flex 布局与方向（横向/纵向），叠加 .hmfw-splitter-horizontal / -vertical。始终渲染。',
  },
  {
    name: 'panel',
    desc: '单个面板容器（div.hmfw-splitter-panel）。承载每个 Splitter.Panel 的尺寸、内边距与内容裁剪。有多少个 Panel 就渲染多少个。',
  },
  {
    name: 'dragger',
    desc: '拖拽手柄（div.hmfw-splitter-bar-dragger）。承载拖动条的样式与命中区，拖拽激活时叠加 .hmfw-splitter-bar-dragger-active。仅在相邻两个可调整面板之间渲染，可用字符串或 { default, active } 分别定制常态/激活态。',
  },
]
</script>

<style scoped>
.demo-splitter-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--doc-c-text-2, rgba(0, 0, 0, 0.65));
  font-size: 14px;
}
</style>
