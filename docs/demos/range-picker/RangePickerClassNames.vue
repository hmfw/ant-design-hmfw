<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义输入框与分隔符 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义输入框与分隔符样式：</div>
      <RangePicker
        :class-names="{
          input: 'custom-input',
          separator: 'custom-separator',
          suffix: 'custom-suffix',
        }"
      />
    </div>

    <!-- 场景 2：自定义弹层与预设范围 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义弹层与预设范围：</div>
      <RangePicker
        :presets="presets"
        :class-names="{
          popup: 'custom-popup',
          presets: 'custom-presets',
          preset: 'custom-preset',
        }"
      />
    </div>

    <!-- 场景 3：自定义日期单元格 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义日期单元格与范围高亮：</div>
      <RangePicker
        :class-names="{
          day: 'custom-day',
          dayInRange: 'custom-day-in-range',
          dayRangeStart: 'custom-day-range-start',
          dayRangeEnd: 'custom-day-range-end',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <RangePicker
        :styles="{
          root: { borderRadius: '12px' },
          input: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' },
          separator: { color: 'white', fontWeight: 'bold' },
        }"
      />
    </div>

    <!-- 场景 5：组合定制 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合定制（渐变边框 + 高亮范围）：</div>
      <RangePicker
        :presets="presets"
        :class-names="{
          root: 'combined-root',
          input: 'combined-input',
          popup: 'combined-popup',
          dayInRange: 'combined-day-in-range',
          dayRangeStart: 'combined-day-range-start',
          dayRangeEnd: 'combined-day-range-end',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RangePicker } from 'ant-design-hmfw'

const presets = [
  {
    label: '最近 7 天',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setDate(start.getDate() - 6)
      return [start.toISOString().split('T')[0], end.toISOString().split('T')[0]] as [string, string]
    },
  },
  {
    label: '最近 30 天',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setDate(start.getDate() - 29)
      return [start.toISOString().split('T')[0], end.toISOString().split('T')[0]] as [string, string]
    },
  },
  {
    label: '本月',
    value: () => {
      const now = new Date()
      const start = new Date(now.getFullYear(), now.getMonth(), 1)
      const end = new Date(now.getFullYear(), now.getMonth() + 1, 0)
      return [start.toISOString().split('T')[0], end.toISOString().split('T')[0]] as [string, string]
    },
  },
]
</script>

<style>
/* 场景 1：弹层使用 :global() */
.custom-popup {
  border-radius: 12px !important;
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3) !important;
}
</style>

<style scoped>
/* 场景 1：输入框与分隔符 */
:deep(.custom-input) {
  background: linear-gradient(135deg, #e6f4ff 0%, #f0f5ff 100%);
  border-color: #1890ff;
  transition: all 0.3s;
}

:deep(.custom-input:hover) {
  border-color: #40a9ff;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.2);
}

:deep(.custom-separator) {
  color: #1890ff;
  font-weight: bold;
  font-size: 16px;
}

:deep(.custom-suffix) {
  color: #1890ff;
  transition: transform 0.3s;
}

:deep(.custom-suffix:hover) {
  transform: scale(1.2);
}

/* 场景 2：预设范围（弹层必须用 :global） */
:deep(.custom-presets) {
  background: linear-gradient(to bottom, #f0f5ff, #e6f4ff);
  border-right-color: #1890ff;
}

:deep(.custom-preset) {
  font-weight: 500;
  transition: all 0.3s;
}

:deep(.custom-preset:hover) {
  background: #1890ff !important;
  color: white;
  transform: translateX(4px);
}

/* 场景 3：日期单元格 */
:deep(.custom-day) {
  font-weight: 500;
  transition: all 0.3s;
}

:deep(.custom-day:hover) {
  transform: scale(1.1);
  box-shadow: 0 2px 6px rgba(24, 144, 255, 0.3);
}

:deep(.custom-day-in-range) {
  background: linear-gradient(135deg, #e6f4ff 0%, #bae0ff 100%) !important;
}

:deep(.custom-day-range-start) {
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%) !important;
  color: white !important;
  font-weight: bold;
}

:deep(.custom-day-range-end) {
  background: linear-gradient(135deg, #40a9ff 0%, #1890ff 100%) !important;
  color: white !important;
  font-weight: bold;
}

/* 场景 5：组合定制 */
:deep(.combined-root) {
  border: 2px solid transparent;
  background-image: linear-gradient(white, white), linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 8px;
  transition: all 0.3s;
}

:deep(.combined-root:hover) {
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
}

:deep(.combined-input) {
  font-weight: 500;
}

:deep(.combined-day-in-range) {
  background: linear-gradient(135deg, #f0e6ff 0%, #e6d9ff 100%) !important;
}

:deep(.combined-day-range-start),
:deep(.combined-day-range-end) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  font-weight: bold;
  position: relative;
}

:deep(.combined-day-range-start::after),
:deep(.combined-day-range-end::after) {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.2);
  opacity: 0;
  transition: opacity 0.3s;
}

:deep(.combined-day-range-start:hover::after),
:deep(.combined-day-range-end:hover::after) {
  opacity: 1;
}
</style>
