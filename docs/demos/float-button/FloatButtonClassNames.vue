<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根节点样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根节点（渐变背景）：</div>
      <FloatButton :icon="QuestionCircleOutlined" :class-names="{ root: 'custom-root' }" tooltip="帮助" />
    </div>

    <!-- 场景 2：自定义图标容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义图标容器（放大图标）：</div>
      <FloatButton
        type="primary"
        :icon="CustomerServiceOutlined"
        :class-names="{ icon: 'custom-icon' }"
        tooltip="客服"
      />
    </div>

    <!-- 场景 3：自定义 square 形状的内容区域 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义内容区域（square 形状）：</div>
      <FloatButton
        shape="square"
        :icon="CommentOutlined"
        content="反馈"
        :class-names="{ body: 'custom-body', content: 'custom-content' }"
      />
    </div>

    <!-- 场景 4：组合使用 classNames -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义（多个 key）：</div>
      <FloatButton
        shape="square"
        :icon="EditOutlined"
        content="编辑"
        :class-names="{
          root: 'custom-combined-root',
          body: 'custom-combined-body',
          icon: 'custom-combined-icon',
          content: 'custom-combined-content',
        }"
      />
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <FloatButton
        type="primary"
        shape="square"
        :icon="RocketOutlined"
        content="启动"
        :styles="{
          root: { borderRadius: '12px', boxShadow: '0 4px 16px rgba(22, 119, 255, 0.3)' },
          body: { padding: '8px' },
          icon: { fontSize: '20px' },
          content: { fontWeight: 'bold' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FloatButton } from '@hmfw/ant-design'
import {
  QuestionCircleOutlined,
  CustomerServiceOutlined,
  CommentOutlined,
  EditOutlined,
  RocketOutlined,
} from '@hmfw/icons'
</script>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

:deep(.custom-icon) {
  font-size: 20px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

:deep(.custom-body) {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

:deep(.custom-content) {
  color: #52c41a;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

:deep(.custom-combined-root) {
  background: linear-gradient(to right, #fa8c16, #faad14);
  border: 2px solid #fff;
  box-shadow: 0 4px 12px rgba(250, 140, 22, 0.4);
}

:deep(.custom-combined-body) {
  padding: 4px;
}

:deep(.custom-combined-icon) {
  color: #fff;
  font-size: 18px;
}

:deep(.custom-combined-content) {
  color: #fff;
  font-size: 12px;
  margin-top: 2px;
}
</style>
