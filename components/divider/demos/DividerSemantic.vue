<template>
  <SemanticPreview component="Divider" :semantics="semantics" :height="320">
    <template #default="{ classNames }">
      <div style="width: 100%">
        <p class="demo-divider-para">失之毫厘，谬以千里。分割线用于区隔内容的不同章节，让版面层次更清晰。</p>
        <Divider :class-names="classNames" />
        <p class="demo-divider-para">失之毫厘，谬以千里。分割线用于区隔内容的不同章节，让版面层次更清晰。</p>
        <Divider :class-names="classNames">实线</Divider>
        <p class="demo-divider-para">失之毫厘，谬以千里。分割线用于区隔内容的不同章节，让版面层次更清晰。</p>
        <Divider orientation="left" variant="dotted" :class-names="classNames">点线</Divider>
        <p class="demo-divider-para">失之毫厘，谬以千里。分割线用于区隔内容的不同章节，让版面层次更清晰。</p>
        <Divider orientation="right" variant="dashed" :class-names="classNames">虚线</Divider>
        <p class="demo-divider-para" style="display: flex; align-items: center">
          <span>行内</span>
          <Divider type="vertical" :class-names="classNames" />
          <span>垂直</span>
          <Divider type="vertical" :class-names="classNames" />
          <span>分割线</span>
        </p>
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Divider } from '@hmfw/ant-design'

// 与 DividerClassNames / DividerStyles 的 key 一一对应，顺序对齐 Ant Design v6
const semantics = [
  {
    name: 'root',
    desc: '分割线根容器（<div>）。承载分割线整体的边框顶部样式、间距与布局，垂直分割线时仅此节点生效。',
  },
  {
    name: 'rail',
    desc: '文字两侧的连接条。同时作用于文字左右两翼（.hmfw-divider-rail-start / -end），承载边框顶部样式；无文字时线条由根容器绘制，此节点不渲染。',
  },
  {
    name: 'content',
    desc: '分割线中的文字容器（.hmfw-divider-inner-text）。承载行内块显示、内边距等文本样式，仅在通过默认插槽传入文字时渲染。',
  },
]
</script>

<style scoped>
.demo-divider-para {
  margin: 0;
  color: var(--doc-c-text-2, rgba(0, 0, 0, 0.65));
  font-size: 14px;
  line-height: 1.6;
}
</style>
