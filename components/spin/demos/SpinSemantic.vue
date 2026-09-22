<template>
  <SemanticPreview component="Spin" :semantics="semantics" :height="180">
    <template #default="{ classNames }">
      <!-- 嵌套加载 + spinning + tip，确保 root / dot / container / description 全部渲染 -->
      <Spin spinning tip="加载中，请稍候…" :class-names="classNames">
        <div class="demo-spin-content">
          <p>内容区域会被浮层覆盖，加载指示符与描述文案居中显示。</p>
          <p>失之毫厘，谬以千里。等待数据返回时使用 Spin 提示用户。</p>
        </div>
      </Spin>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Spin } from '@hmfw/ant-design'

// 与 SpinClassNames / SpinStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '加载组件根节点（span.hmfw-spin，fullscreen 模式下为遮罩 div）。承载整体定位、尺寸与颜色，spinning 激活时带 .hmfw-spin-spinning。始终渲染。',
  },
  {
    name: 'dot',
    desc: '加载指示符容器（span.hmfw-spin-dot）。内含四点旋转动画或自定义 indicator，percent 生效时改为环形进度。始终渲染。',
  },
  {
    name: 'container',
    desc: '嵌套加载时的浮层容器（div.hmfw-spin-container）。覆盖在被包裹内容之上并居中指示符，仅在使用默认插槽包裹内容、且当前处于 spinning 激活态时渲染。',
  },
  {
    name: 'description',
    desc: '描述文案节点（div.hmfw-spin-description）。承载提示文字样式，仅在设置 tip 或 description 时渲染。',
  },
]
</script>

<style scoped>
.demo-spin-content {
  padding: 16px;
  border-radius: 8px;
  background: var(--doc-c-bg-soft, rgba(0, 0, 0, 0.04));
}
.demo-spin-content p {
  margin: 0 0 8px;
  color: var(--doc-c-text-2, rgba(0, 0, 0, 0.65));
  font-size: 14px;
  line-height: 1.6;
}
.demo-spin-content p:last-child {
  margin-bottom: 0;
}
</style>
