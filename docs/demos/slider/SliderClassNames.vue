<template>
  <div style="display: flex; flex-direction: column; gap: 48px">
    <!-- 场景 1：自定义轨道与填充 -->
    <div>
      <div style="margin-bottom: 16px; color: #666">自定义轨道与填充样式：</div>
      <Slider
        :default-value="40"
        :class-names="{
          rail: 'custom-rail',
          track: 'custom-track',
        }"
      />
    </div>

    <!-- 场景 2：自定义滑块手柄 -->
    <div>
      <div style="margin-bottom: 16px; color: #666">自定义滑块手柄：</div>
      <Slider
        :default-value="60"
        :class-names="{
          handle: 'custom-handle',
        }"
      />
    </div>

    <!-- 场景 3：自定义刻度标记 -->
    <div>
      <div style="margin-bottom: 16px; color: #666">自定义刻度标记样式：</div>
      <Slider
        :default-value="50"
        :marks="{ 0: '0°C', 25: '25°C', 50: '50°C', 75: '75°C', 100: '100°C' }"
        :class-names="{
          mark: 'custom-mark',
          markText: 'custom-mark-text',
          dot: 'custom-dot',
        }"
        dots
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 16px; color: #666">使用内联样式：</div>
      <Slider
        :default-value="[20, 80]"
        range
        :styles="{
          rail: { background: 'linear-gradient(to right, #e6f7ff, #bae7ff)', height: '8px' },
          track: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', height: '8px' },
          handle: { width: '20px', height: '20px', marginTop: '-6px', borderColor: '#667eea', borderWidth: '3px' },
        }"
      />
    </div>

    <!-- 场景 5：自定义 Tooltip -->
    <div>
      <div style="margin-bottom: 16px; color: #666">自定义 Tooltip 样式：</div>
      <Slider
        :default-value="70"
        :tooltip="{ open: true, formatter: (val) => `${val}%` }"
        :class-names="{
          tooltip: 'custom-tooltip',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Slider } from 'ant-design-hmfw'
</script>

<style scoped>
/* 自定义轨道 */
:deep(.custom-rail) {
  background: linear-gradient(to right, #f0f5ff, #d6e4ff);
  height: 6px;
}

/* 自定义填充 */
:deep(.custom-track) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  height: 6px;
  transition: all 0.3s;
}

/* 自定义滑块手柄 */
:deep(.custom-handle) {
  width: 24px;
  height: 24px;
  margin-top: -9px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 3px solid #ffffff;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
  transition: all 0.3s;
}

:deep(.custom-handle:hover) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.6);
  transform: scale(1.1);
}

:deep(.custom-handle:active) {
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.8);
  transform: scale(0.95);
}

/* 自定义刻度标签容器 */
:deep(.custom-mark) {
  margin-top: 4px;
}

/* 自定义刻度文本 */
:deep(.custom-mark-text) {
  color: #1890ff;
  font-weight: 600;
  font-size: 13px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* 自定义刻度点 */
:deep(.custom-dot) {
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 50%;
  background: #1890ff;
  border: 2px solid #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

/* 自定义 Tooltip */
:deep(.custom-tooltip) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  padding: 6px 12px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}
</style>
