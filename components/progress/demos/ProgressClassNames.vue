<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 自定义轨道样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义轨道和进度条：</div>
      <Progress
        :percent="60"
        :class-names="{
          rail: 'custom-rail',
          track: 'custom-track',
        }"
      />
    </div>

    <!-- 自定义指示器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义百分比指示器：</div>
      <Progress :percent="75" :class-names="{ indicator: 'custom-indicator' }" />
    </div>

    <!-- 自定义根容器和主体 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义容器样式：</div>
      <Progress
        :percent="80"
        :class-names="{
          root: 'custom-root',
          body: 'custom-body',
        }"
      />
    </div>

    <!-- 完整自定义 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">完整自定义（组合使用）：</div>
      <Progress
        :percent="90"
        :class-names="{
          root: 'complete-root',
          rail: 'complete-rail',
          track: 'complete-track',
          indicator: 'complete-indicator',
        }"
      />
    </div>

    <!-- 使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式（styles）：</div>
      <Progress
        :percent="65"
        :styles="{
          rail: { background: '#f0f0f0', height: '12px', borderRadius: '6px' },
          track: { background: 'linear-gradient(to right, #1890ff, #52c41a)', height: '12px' },
          indicator: { fontSize: '16px', fontWeight: 'bold', color: '#722ed1' },
        }"
      />
    </div>

    <!-- 圆形进度条自定义 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">圆形进度条自定义：</div>
      <div style="display: flex; gap: 32px; align-items: center">
        <Progress
          type="circle"
          :percent="70"
          :class-names="{
            body: 'circle-body',
            indicator: 'circle-indicator',
          }"
        />

        <Progress
          type="circle"
          :percent="85"
          :styles="{
            body: { filter: 'drop-shadow(0 4px 12px rgba(24, 144, 255, 0.4))' },
            indicator: { fontSize: '24px', fontWeight: '600', color: '#1890ff' },
          }"
        />
      </div>
    </div>

    <!-- 仪表盘样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">仪表盘进度条：</div>
      <Progress
        type="dashboard"
        :percent="80"
        :class-names="{
          body: 'dashboard-body',
          indicator: 'dashboard-indicator',
        }"
      />
    </div>

    <!-- 动态示例 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">动态进度（点击按钮改变）：</div>
      <Progress
        :percent="dynamicPercent"
        :class-names="{
          track: 'dynamic-track',
          indicator: 'dynamic-indicator',
        }"
      />
      <div style="margin-top: 12px; display: flex; gap: 8px">
        <Button size="small" @click="decrease">-10%</Button>
        <Button size="small" @click="increase">+10%</Button>
        <Button size="small" @click="reset">重置</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Progress, Button } from '@hmfw/ant-design'

const dynamicPercent = ref(50)

const increase = () => {
  dynamicPercent.value = Math.min(100, dynamicPercent.value + 10)
}

const decrease = () => {
  dynamicPercent.value = Math.max(0, dynamicPercent.value - 10)
}

const reset = () => {
  dynamicPercent.value = 50
}
</script>

<style scoped>
:deep(.custom-rail) {
  background: linear-gradient(to right, #f0f0f0, #e0e0e0);
  height: 10px;
  border-radius: 5px;
}

:deep(.custom-track) {
  background: linear-gradient(to right, #1890ff, #52c41a);
  height: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(24, 144, 255, 0.3);
}

:deep(.custom-indicator) {
  font-weight: bold;
  color: #722ed1;
  font-size: 16px;
}

:deep(.custom-root) {
  background: #fafafa;
  padding: 12px;
  border-radius: 8px;
}

:deep(.custom-body) {
  opacity: 0.9;
}

:deep(.complete-root) {
  background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
  padding: 16px;
  border-radius: 12px;
  border: 2px solid #667eea30;
}

:deep(.complete-rail) {
  background: #e8e8e8;
  height: 14px;
  border-radius: 7px;
}

:deep(.complete-track) {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  height: 14px;
  border-radius: 7px;
  position: relative;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.2);
  }
  100% {
    filter: brightness(1);
  }
}

:deep(.complete-indicator) {
  font-size: 18px;
  font-weight: 700;
  color: #667eea;
  text-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
}

:deep(.circle-body) {
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15));
  transform: scale(1.05);
}

:deep(.circle-indicator) {
  font-size: 20px;
  font-weight: 600;
  color: #52c41a;
}

:deep(.dashboard-body) {
  filter: drop-shadow(0 4px 12px rgba(250, 140, 22, 0.3));
}

:deep(.dashboard-indicator) {
  font-size: 24px;
  font-weight: 700;
  color: #fa8c16;
}

:deep(.dynamic-track) {
  transition: all 0.5s ease;
  background: linear-gradient(to right, #722ed1, #eb2f96);
}

:deep(.dynamic-indicator) {
  transition: all 0.5s ease;
  font-weight: 600;
  color: #722ed1;
}
</style>
