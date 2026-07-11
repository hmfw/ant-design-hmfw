<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义根容器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器背景与圆角：</div>
      <Empty :class-names="{ root: 'custom-root' }" description="精美卡片样式" />
    </div>

    <!-- 场景 2：自定义图片容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义图片容器（渐变背景 + 动画）：</div>
      <Empty :class-names="{ image: 'custom-image' }" description="图片增强效果" />
    </div>

    <!-- 场景 3：自定义描述文本样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义描述文本样式：</div>
      <Empty :class-names="{ description: 'custom-description' }" description="醒目的提示文字" />
    </div>

    <!-- 场景 4：组合使用多个 key -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义多个节点：</div>
      <Empty
        :class-names="{
          root: 'custom-combined-root',
          image: 'custom-combined-image',
          description: 'custom-combined-description',
          footer: 'custom-combined-footer',
        }"
        description="完整定制体验"
      >
        <template #default>
          <Button type="primary">立即创建</Button>
        </template>
      </Empty>
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Empty
        :styles="{
          root: { padding: '48px 24px', background: '#f0f5ff', borderRadius: '12px' },
          image: { height: '120px', opacity: '0.8' },
          description: { fontSize: '16px', color: '#1677ff', fontWeight: '500' },
        }"
        description="内联样式控制"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Empty, Button } from '@hmfw/ant-design'
</script>

<style scoped>
/* 场景 1：根容器样式 */
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 48px 32px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
  color: white;
}

:deep(.custom-root .hmfw-empty-description) {
  color: rgba(255, 255, 255, 0.9);
}

/* 场景 2：图片容器样式 */
:deep(.custom-image) {
  padding: 24px;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  border-radius: 50%;
  transition: all 0.3s;
}

:deep(.custom-image:hover) {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 20px rgba(252, 182, 159, 0.4);
}

/* 场景 3：描述文本样式 */
:deep(.custom-description) {
  font-size: 18px;
  font-weight: 600;
  color: #ff4d4f;
  text-shadow: 0 2px 4px rgba(255, 77, 79, 0.2);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* 场景 4：组合样式 */
:deep(.custom-combined-root) {
  background: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  padding: 56px 40px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(250, 112, 154, 0.3);
}

:deep(.custom-combined-image) {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
  transition: transform 0.3s;
}

:deep(.custom-combined-root:hover .custom-combined-image) {
  transform: translateY(-8px);
}

:deep(.custom-combined-description) {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}

:deep(.custom-combined-footer) {
  margin-top: 24px;
}

:deep(.custom-combined-footer .hmfw-button) {
  background: white;
  color: #fa709a;
  border: none;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
}

:deep(.custom-combined-footer .hmfw-button:hover) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.4);
}
</style>
