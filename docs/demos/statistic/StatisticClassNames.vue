<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器：</div>
      <Statistic title="活跃用户" :value="93185" :class-names="{ root: 'custom-root' }" prefix="👥" />
    </div>

    <!-- 场景 2：自定义标题与数值样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义标题与数值：</div>
      <Statistic
        title="总销售额"
        :value="1234567.89"
        :precision="2"
        :class-names="{
          title: 'custom-title',
          value: 'custom-value',
        }"
        prefix="¥"
      />
    </div>

    <!-- 场景 3：自定义前缀和后缀样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义前缀和后缀：</div>
      <Statistic
        title="增长率"
        :value="28.5"
        :precision="1"
        :class-names="{
          prefix: 'custom-prefix',
          suffix: 'custom-suffix',
        }"
        prefix="📈"
        suffix="%"
      />
    </div>

    <!-- 场景 4：组合使用 classNames -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义：</div>
      <Statistic
        title="在线人数"
        :value="8888"
        :class-names="{
          root: 'combined-root',
          title: 'combined-title',
          content: 'combined-content',
          value: 'combined-value',
        }"
        suffix="人"
      />
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Statistic
        title="转化率"
        :value="12.8"
        :precision="1"
        :styles="{
          root: {
            padding: '16px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
          },
          title: { fontWeight: 'bold', color: '#8b4513' },
          value: { fontSize: '28px', color: '#fff' },
          suffix: { color: '#fff', fontSize: '18px' },
        }"
        suffix="%"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Statistic } from '@hmfw/ant-design'
</script>

<style scoped>
/* 场景 1：渐变背景根容器 */
:deep(.custom-root) {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

:deep(.custom-root .hmfw-statistic-title) {
  color: rgba(255, 255, 255, 0.85);
}

:deep(.custom-root .hmfw-statistic-content) {
  color: #fff;
}

/* 场景 2：自定义标题和数值 */
:deep(.custom-title) {
  font-size: 16px;
  font-weight: bold;
  color: #1890ff;
  text-transform: uppercase;
  letter-spacing: 1px;
}

:deep(.custom-value) {
  font-size: 32px;
  font-weight: 700;
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 场景 3：自定义前缀和后缀 */
:deep(.custom-prefix) {
  font-size: 24px;
  margin-right: 8px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

:deep(.custom-suffix) {
  color: #52c41a;
  font-weight: bold;
  font-size: 20px;
  margin-left: 4px;
}

/* 场景 4：组合样式 */
:deep(.combined-root) {
  padding: 16px 24px;
  background: linear-gradient(to right, #f0f5ff, #e6f7ff);
  border: 2px solid #1890ff;
  border-radius: 8px;
  transition: all 0.3s;
}

:deep(.combined-root:hover) {
  border-color: #096dd9;
  box-shadow: 0 4px 16px rgba(24, 144, 255, 0.3);
}

:deep(.combined-title) {
  color: #096dd9;
  font-weight: 600;
}

:deep(.combined-content) {
  margin-top: 8px;
}

:deep(.combined-value) {
  font-size: 36px;
  color: #1890ff;
  font-weight: bold;
}
</style>
