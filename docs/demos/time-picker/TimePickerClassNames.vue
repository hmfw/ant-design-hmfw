<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义触发器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义触发器与输入区域：</div>
      <TimePicker
        placeholder="选择时间"
        :class-names="{
          root: 'custom-trigger',
          input: 'custom-input',
          suffix: 'custom-suffix',
        }"
      />
    </div>

    <!-- 场景 2：自定义弹层与面板 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义弹层与时间列：</div>
      <TimePicker
        placeholder="选择时间"
        :class-names="{
          popup: 'custom-popup',
          panel: 'custom-panel',
          column: 'custom-column',
          cell: 'custom-cell',
        }"
      />
    </div>

    <!-- 场景 3：自定义底部按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义底部按钮样式：</div>
      <TimePicker
        placeholder="选择时间"
        :need-confirm="true"
        :class-names="{
          footer: 'custom-footer',
          now: 'custom-now-btn',
          ok: 'custom-ok-btn',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式对象：</div>
      <TimePicker
        placeholder="选择时间"
        :styles="{
          root: { borderRadius: '20px', borderColor: '#722ed1' },
          input: { color: '#722ed1', fontWeight: 500 },
          suffix: { color: '#722ed1', fontSize: '18px' },
        }"
      />
    </div>

    <!-- 场景 5：组合使用 classNames + styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合 classNames 与 styles：</div>
      <TimePicker
        placeholder="选择时间"
        :need-confirm="true"
        :class-names="{
          root: 'gradient-trigger',
          popup: 'gradient-popup',
          ok: 'gradient-ok',
        }"
        :styles="{
          panel: { borderRadius: '12px' },
          cell: { fontWeight: 500 },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TimePicker } from '@hmfw/ant-design'
</script>

<style scoped>
/* 场景 1：触发器渐变 */
:deep(.custom-trigger) {
  border: 2px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  transition: all 0.3s;
}

:deep(.custom-trigger:hover) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

:deep(.custom-input) {
  color: #667eea;
  font-weight: 500;
}

:deep(.custom-suffix) {
  color: #764ba2;
  font-size: 18px;
}

/* 场景 5：整体渐变主题 */
:deep(.gradient-trigger) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  transition: all 0.3s;
}

:deep(.gradient-trigger:hover) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
}

:deep(.gradient-trigger .hmfw-time-picker-input) {
  color: white;
}

:deep(.gradient-trigger .hmfw-time-picker-suffix) {
  color: white;
}

:deep(.gradient-ok) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%) !important;
  border: none !important;
  color: white !important;
  font-weight: 500;
  transition: all 0.3s;
}

:deep(.gradient-ok:hover) {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.4);
}
</style>

<style>
/* 弹层通过 Teleport 渲染到 body，必须使用全局样式（非 scoped） */

/* 场景 2：弹层与面板自定义 */
.custom-popup {
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2) !important;
}

.custom-panel {
  border-radius: 12px;
  background: linear-gradient(to bottom, #f0f5ff 0%, #ffffff 100%);
}

.custom-column {
  scrollbar-width: thin;
  scrollbar-color: #667eea #f0f5ff;
}

.custom-cell {
  transition: all 0.3s;
  border-radius: 4px;
  margin: 2px 4px;
}

.custom-cell:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  transform: scale(1.05);
}

.custom-cell.hmfw-time-picker-panel-cell-selected {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%) !important;
  color: white !important;
  font-weight: 600;
}

/* 场景 3：底部按钮自定义 */
.custom-footer {
  background: #f6ffed;
  border-top: 2px solid #b7eb8f;
}

.custom-now-btn {
  color: #52c41a;
  font-weight: 500;
  transition: all 0.3s;
}

.custom-now-btn:hover {
  background: #d9f7be !important;
  transform: translateX(2px);
}

.custom-ok-btn {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%) !important;
  border: none !important;
  color: white !important;
  font-weight: 500;
  transition: all 0.3s;
}

.custom-ok-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.4);
}

/* 场景 5：渐变弹层 */
.gradient-popup {
  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.3) !important;
}

.gradient-popup .hmfw-time-picker-panel {
  border: 2px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
}

.gradient-popup .hmfw-time-picker-panel-cell:hover {
  background: rgba(102, 126, 234, 0.1) !important;
  color: #667eea !important;
}

.gradient-popup .hmfw-time-picker-panel-cell-selected {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
}
</style>
