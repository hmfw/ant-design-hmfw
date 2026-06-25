<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器渐变背景：</div>
      <Tooltip title="自定义渐变提示" :class-names="{ root: 'custom-root' }">
        <Button type="primary">悬停查看渐变效果</Button>
      </Tooltip>
    </div>

    <!-- 场景 2：自定义内容区域样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义内容区域样式：</div>
      <Tooltip title="大号字体提示内容" :class-names="{ inner: 'custom-inner' }">
        <Button>悬停查看大号字体</Button>
      </Tooltip>
    </div>

    <!-- 场景 3：自定义箭头样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义箭头颜色：</div>
      <Tooltip title="绿色箭头提示" :class-names="{ arrow: 'custom-arrow' }">
        <Button type="default">悬停查看绿色箭头</Button>
      </Tooltip>
    </div>

    <!-- 场景 4：组合使用多个 classNames -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义多个节点：</div>
      <Tooltip
        title="完整自定义样式"
        :class-names="{
          root: 'custom-combined-root',
          content: 'custom-combined-content',
          inner: 'custom-combined-inner',
          arrow: 'custom-combined-arrow',
        }"
      >
        <Button type="primary">悬停查看组合效果</Button>
      </Tooltip>
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式控制：</div>
      <Tooltip
        title="内联样式控制"
        :styles="{
          root: { filter: 'drop-shadow(0 4px 12px rgba(102, 126, 234, 0.4))' },
          inner: { fontSize: '16px', padding: '12px 16px', borderRadius: '8px' },
        }"
      >
        <Button>悬停查看内联样式</Button>
      </Tooltip>
    </div>

    <!-- 场景 6：classNames 与 styles 混合使用 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">混合使用 classNames 和 styles：</div>
      <Tooltip
        title="混合样式控制"
        :class-names="{ root: 'custom-hover', inner: 'custom-inner' }"
        :styles="{ inner: { fontWeight: '600' } }"
      >
        <Button type="dashed">悬停查看混合效果</Button>
      </Tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tooltip, Button } from '@hmfw/ant-design'
</script>

<style scoped>
/* Tooltip 是弹层组件，挂载到 body，需要使用 :global() */
:global(.custom-root) {
  filter: drop-shadow(0 4px 12px rgba(102, 126, 234, 0.6));
}

:global(.custom-root .hmfw-tooltip-inner) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
}

:global(.custom-root .hmfw-tooltip-arrow::before) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

:global(.custom-inner) {
  font-size: 16px;
  font-weight: 500;
  padding: 10px 14px;
}

:global(.custom-arrow::before) {
  background-color: #52c41a !important;
}

/* 组合自定义 */
:global(.custom-combined-root) {
  animation: tooltipFadeIn 0.3s ease;
}

@keyframes tooltipFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

:global(.custom-combined-content) {
  border-radius: 12px;
  overflow: hidden;
}

:global(.custom-combined-inner) {
  background: linear-gradient(to right, #ff6b6b, #ee5a6f);
  padding: 12px 16px;
  font-size: 15px;
}

:global(.custom-combined-arrow::before) {
  background: linear-gradient(to right, #ff6b6b, #ee5a6f);
}

/* Hover 效果 */
:global(.custom-hover) {
  transition: all 0.3s ease;
}

:global(.custom-hover:not(.hmfw-tooltip-hidden)) {
  animation: tooltipBounce 0.3s ease;
}

@keyframes tooltipBounce {
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
