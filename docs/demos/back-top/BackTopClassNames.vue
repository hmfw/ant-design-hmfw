<template>
  <div
    style="
      position: relative;
      height: 220px;
      overflow: auto;
      border: 1px solid #f0f0f0;
      border-radius: 8px;
      padding: 16px;
    "
  >
    <div style="height: 800px; padding: 8px">
      <p style="color: #666">在此容器内向下滚动，即可看到经过语义化定制的回到顶部按钮。</p>
      <p style="color: #999; margin-top: 8px">
        下面通过 classNames / styles 对 root、content、icon 三个子节点做细粒度样式控制。
      </p>

      <!-- 场景 1：自定义根容器 -->
      <BackTop :target="getTarget" :visibility-height="0" :class-names="{ root: 'demo-bt-root' }" />

      <!-- 场景 2：自定义内容容器 + 图标 -->
      <BackTop
        :target="getTarget"
        :visibility-height="0"
        :class-names="{ content: 'demo-bt-content', icon: 'demo-bt-icon' }"
        style="right: 100px"
      />

      <!-- 场景 3：使用内联 styles -->
      <BackTop
        :target="getTarget"
        :visibility-height="0"
        :styles="{
          content: { borderRadius: '12px', background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)' },
          icon: { color: '#fff' },
        }"
        style="right: 180px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BackTop } from '@hmfw/ant-design'

const containerRef = ref<HTMLElement>()

// target 指向当前滚动容器，这里返回 demo 外层可滚动元素
const getTarget = () => {
  // 取最近的可滚动祖先（演示用途，返回 document 兜底）
  return (containerRef.value as HTMLElement) || document.body
}
</script>

<style scoped>
/* 场景 1：渐变根容器 */
:deep(.demo-bt-root) {
  transition: all 0.3s;
}

:deep(.demo-bt-root:hover) {
  transform: translateY(-2px);
}

/* 场景 2：自定义内容容器与图标 */
:deep(.demo-bt-content) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:deep(.demo-bt-icon) {
  color: #fff;
  transition: transform 0.3s;
}

:deep(.demo-bt-content:hover .demo-bt-icon) {
  transform: scale(1.2);
}
</style>
