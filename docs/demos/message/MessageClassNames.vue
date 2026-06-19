<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <!-- 场景 1：通过 classNames 定制卡片主体（notice） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义卡片主体（notice）：</div>
      <Button @click="showNotice"> 渐变卡片提示 </Button>
    </div>

    <!-- 场景 2：通过 classNames 同时定制图标与文本（icon + title） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义图标与文本（icon + title）：</div>
      <Button @click="showIconTitle"> 强调图标与文字 </Button>
    </div>

    <!-- 场景 3：通过 classNames 定制最外层容器（wrapper），整体右对齐 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义容器对齐（wrapper）：</div>
      <Button @click="showWrapper"> 右对齐提示 </Button>
    </div>

    <!-- 场景 4：通过 styles 内联样式做临时定制 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联 styles：</div>
      <Button @click="showStyles"> 内联样式提示 </Button>
    </div>

    <!-- 场景 5：classNames 与 styles 组合使用 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">classNames + styles 组合：</div>
      <Button @click="showCombined"> 组合定制提示 </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { message, Button } from 'ant-design-hmfw'

// 场景 1：定制卡片主体——渐变背景 + 白色文字
function showNotice() {
  message.success({
    content: '保存成功',
    classNames: { notice: 'msg-notice-gradient' },
  })
}

// 场景 2：强调图标与文本
function showIconTitle() {
  message.warning({
    content: '磁盘空间不足',
    classNames: {
      icon: 'msg-icon-pulse',
      title: 'msg-title-bold',
    },
  })
}

// 场景 3：定制最外层容器，让提示整体靠右
function showWrapper() {
  message.info({
    content: '提示靠右显示',
    classNames: { wrapper: 'msg-wrapper-right' },
  })
}

// 场景 4：纯内联样式定制
function showStyles() {
  message.info({
    content: '内联样式控制的提示',
    styles: {
      notice: { borderRadius: '16px', background: '#f0f5ff' },
      title: { color: '#1677ff', fontWeight: 600 },
    },
  })
}

// 场景 5：classNames 与 styles 组合，styles 优先级更高
function showCombined() {
  message.error({
    content: '组合定制：className 打底，style 覆盖',
    classNames: { notice: 'msg-notice-gradient' },
    styles: {
      notice: { borderRadius: '20px' },
      icon: { color: '#fff' },
      title: { color: '#fff' },
    },
  })
}
</script>

<!--
  message 通过独立的 Vue 应用挂载在 document.body 上，
  位于本 demo 组件的 DOM 树之外，scoped 的 :deep() 无法命中，
  因此这里用 :global() 让自定义 className 生效。
-->
<style scoped>
:global(.msg-notice-gradient) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: #fff !important;
  border: none;
}

:global(.msg-notice-gradient .hmfw-message-notice-icon),
:global(.msg-notice-gradient .hmfw-message-notice-title) {
  color: #fff;
}

:global(.msg-icon-pulse) {
  animation: msg-icon-pulse 1s ease-in-out infinite;
}

@keyframes msg-icon-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
}

:global(.msg-title-bold) {
  font-weight: 700;
  letter-spacing: 0.5px;
}

:global(.msg-wrapper-right) {
  justify-content: flex-end !important;
  padding-right: 24px;
}
</style>
