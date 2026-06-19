<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义数字徽标 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义数字徽标样式：</div>
      <Badge :count="5" :class-names="{ indicator: 'custom-indicator' }">
        <div style="width: 42px; height: 42px; background: #f0f0f0; border-radius: 4px"></div>
      </Badge>
    </div>

    <!-- 场景 2：自定义状态点 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义状态点样式：</div>
      <div style="display: flex; gap: 16px">
        <Badge status="success" text="成功" :class-names="{ dot: 'custom-dot-success', text: 'custom-text' }" />
        <Badge status="processing" text="进行中" :class-names="{ dot: 'custom-dot-processing', text: 'custom-text' }" />
        <Badge status="error" text="错误" :class-names="{ dot: 'custom-dot-error', text: 'custom-text' }" />
      </div>
    </div>

    <!-- 场景 3：自定义根容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器样式：</div>
      <Badge :count="99" :class-names="{ root: 'custom-root', indicator: 'custom-indicator-large' }">
        <div style="width: 42px; height: 42px; background: #f0f0f0; border-radius: 4px"></div>
      </Badge>
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Badge
        :count="12"
        :styles="{
          indicator: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '14px' },
        }"
      >
        <div style="width: 42px; height: 42px; background: #f0f0f0; border-radius: 4px"></div>
      </Badge>
    </div>

    <!-- 场景 5：组合自定义（dot 模式） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义（dot 模式）：</div>
      <Badge dot :class-names="{ indicator: 'custom-dot-badge' }">
        <div style="width: 42px; height: 42px; background: #f0f0f0; border-radius: 4px"></div>
      </Badge>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Badge } from 'ant-design-hmfw'
</script>

<style scoped>
:deep(.custom-indicator) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
  font-weight: bold;
  transition: all 0.3s;
}

:deep(.custom-indicator:hover) {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.6);
}

:deep(.custom-indicator-large) {
  background: linear-gradient(to right, #52c41a, #389e0d);
  font-size: 16px;
  padding: 0 8px;
  min-width: 28px;
  height: 28px;
  line-height: 28px;
  border-radius: 14px;
}

:deep(.custom-dot-success) {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(82, 196, 26, 0.6);
  animation: pulse-success 1.5s ease-in-out infinite;
}

:deep(.custom-dot-processing) {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(22, 119, 255, 0.6);
  animation: pulse-processing 1.5s ease-in-out infinite;
}

:deep(.custom-dot-error) {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(255, 77, 79, 0.6);
  animation: pulse-error 1.5s ease-in-out infinite;
}

:deep(.custom-text) {
  font-weight: 600;
  font-size: 14px;
}

:deep(.custom-root) {
  display: inline-block;
  padding: 4px;
  border-radius: 8px;
  background: #f0f5ff;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  background: #e6f4ff;
  transform: translateY(-2px);
}

:deep(.custom-dot-badge) {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
  width: 12px;
  height: 12px;
  box-shadow: 0 0 12px rgba(255, 107, 107, 0.8);
  animation: pulse-custom 1.5s ease-in-out infinite;
}

@keyframes pulse-success {
  0%,
  100% {
    box-shadow: 0 0 8px rgba(82, 196, 26, 0.6);
  }
  50% {
    box-shadow: 0 0 16px rgba(82, 196, 26, 1);
  }
}

@keyframes pulse-processing {
  0%,
  100% {
    box-shadow: 0 0 8px rgba(22, 119, 255, 0.6);
  }
  50% {
    box-shadow: 0 0 16px rgba(22, 119, 255, 1);
  }
}

@keyframes pulse-error {
  0%,
  100% {
    box-shadow: 0 0 8px rgba(255, 77, 79, 0.6);
  }
  50% {
    box-shadow: 0 0 16px rgba(255, 77, 79, 1);
  }
}

@keyframes pulse-custom {
  0%,
  100% {
    box-shadow: 0 0 12px rgba(255, 107, 107, 0.8);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 107, 107, 1);
    transform: scale(1.1);
  }
}
</style>
