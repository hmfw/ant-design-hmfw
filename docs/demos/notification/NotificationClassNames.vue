<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <!-- 场景 1：通过 classNames 自定义渐变卡片 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义渐变通知卡片（classNames）：</div>
      <Button @click="openGradient">渐变通知</Button>
    </div>

    <!-- 场景 2：突出标题与图标 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">突出标题与图标（classNames）：</div>
      <Button @click="openHighlight">高亮标题</Button>
    </div>

    <!-- 场景 3：操作型通知，定制按钮区与关闭按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">操作型通知（classNames）：</div>
      <Button @click="openAction">带操作按钮</Button>
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式（styles）：</div>
      <Button @click="openInlineStyles">内联样式</Button>
    </div>

    <!-- 场景 5：classNames 与 styles 叠加 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">classNames 与 styles 叠加：</div>
      <Button @click="openCombined">组合定制</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { notification, Button } from 'ant-design-hmfw'

// 场景 1：通过 classNames 应用渐变背景与白色文本
function openGradient() {
  notification.info({
    message: '系统更新',
    description: '新版本已发布，建议尽快升级以获得更好体验。',
    classNames: {
      notice: 'demo-gradient-notice',
      message: 'demo-gradient-message',
      description: 'demo-gradient-desc',
      icon: 'demo-gradient-icon',
      close: 'demo-gradient-close',
    },
  })
}

// 场景 2：突出标题与图标
function openHighlight() {
  notification.success({
    message: '保存成功',
    description: '您的更改已自动保存到云端。',
    classNames: {
      message: 'demo-highlight-message',
      icon: 'demo-highlight-icon',
    },
  })
}

// 场景 3：操作型通知，定制按钮区与关闭按钮
function openAction() {
  notification.warning({
    message: '订阅即将到期',
    description: '您的会员将于 3 天后到期，请及时续费。',
    btn: h(Button, { type: 'primary' }, () => '立即续费'),
    classNames: {
      notice: 'demo-action-notice',
      btn: 'demo-action-btn',
      close: 'demo-action-close',
    },
  })
}

// 场景 4：使用 styles 内联样式对象
function openInlineStyles() {
  notification.error({
    message: '操作失败',
    description: '请求超时，请检查网络后重试。',
    styles: {
      notice: { borderRadius: '12px', borderLeft: '4px solid #ff4d4f' },
      message: { fontSize: '17px', color: '#cf1322' },
      description: { color: '#a8071a' },
    },
  })
}

// 场景 5：classNames 与 styles 同时使用（styles 优先级更高）
function openCombined() {
  notification.info({
    message: '组合定制',
    description: 'classNames 控制结构样式，styles 内联样式优先级更高。',
    classNames: {
      notice: 'demo-combined-notice',
      icon: 'demo-combined-icon',
    },
    styles: {
      message: { color: '#fff', fontSize: '16px' },
      description: { color: 'rgba(255, 255, 255, 0.85)' },
    },
  })
}
</script>

<style scoped>
/* 场景 1：渐变通知卡片 */
:deep(.demo-gradient-notice) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
}

:deep(.demo-gradient-message) {
  color: #fff;
}

:deep(.demo-gradient-desc) {
  color: rgba(255, 255, 255, 0.85);
}

:deep(.demo-gradient-icon) {
  color: #fff;
}

:deep(.demo-gradient-close) {
  color: rgba(255, 255, 255, 0.7);
}

:deep(.demo-gradient-close:hover) {
  color: #fff;
}

/* 场景 2：突出标题与图标 */
:deep(.demo-highlight-message) {
  font-size: 18px;
  font-weight: 700;
  background: linear-gradient(to right, #52c41a, #389e0d);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

:deep(.demo-highlight-icon) {
  transform: scale(1.15);
  transition: transform 0.3s;
}

/* 场景 3：操作型通知 */
:deep(.demo-action-notice) {
  background: #fffbe6;
  border: 1px solid #ffe58f;
}

:deep(.demo-action-btn) {
  display: flex;
  justify-content: flex-end;
}

:deep(.demo-action-close:hover) {
  background-color: rgba(250, 173, 20, 0.15);
}

/* 场景 5：组合定制 */
:deep(.demo-combined-notice) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  border: none;
  box-shadow: 0 4px 16px rgba(9, 109, 217, 0.35);
}

:deep(.demo-combined-icon) {
  color: #fff;
}
</style>
