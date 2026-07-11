<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义头部和面板背景 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">自定义头部和面板背景：</div>
      <Calendar
        :fullscreen="false"
        :class-names="{
          root: 'custom-calendar-root',
          header: 'custom-header',
          panel: 'custom-panel',
        }"
      />
    </div>

    <!-- 场景 2：自定义日期单元格 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">自定义日期单元格：</div>
      <Calendar
        :fullscreen="false"
        :class-names="{
          cell: 'custom-cell',
          cellInner: 'custom-cell-inner',
          date: 'custom-date',
        }"
      />
    </div>

    <!-- 场景 3：自定义星期头 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">自定义星期头：</div>
      <Calendar
        :fullscreen="false"
        :class-names="{
          weekdays: 'custom-weekdays',
          weekdayCell: 'custom-weekday-cell',
        }"
      />
    </div>

    <!-- 场景 4：年视图自定义 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">年视图自定义：</div>
      <Calendar
        mode="year"
        :fullscreen="false"
        :class-names="{
          yearPanel: 'custom-year-panel',
          monthCell: 'custom-month-cell',
          month: 'custom-month',
        }"
      />
    </div>

    <!-- 场景 5：组合使用 styles -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">使用内联样式：</div>
      <Calendar
        :fullscreen="false"
        :styles="{
          root: { borderRadius: '12px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' },
          header: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '16px',
            borderRadius: '12px 12px 0 0',
          },
          body: { padding: '12px' },
          cell: { margin: '2px' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Calendar } from '@hmfw/ant-design'
</script>

<style scoped>
/* 场景 1：自定义头部和面板 */
:deep(.custom-calendar-root) {
  border: 2px solid #e0e7ff;
  border-radius: 12px;
  overflow: hidden;
}

:deep(.custom-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px;
  border-bottom: none;
}

:deep(.custom-header .hmfw-select-selector) {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

:deep(.custom-header .hmfw-select-arrow) {
  color: white;
}

:deep(.custom-header .hmfw-radio-group) {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  padding: 2px;
}

:deep(.custom-header .hmfw-radio-button-wrapper) {
  background: transparent;
  border-color: transparent;
  color: white;
}

:deep(.custom-header .hmfw-radio-button-wrapper-checked) {
  background: white;
  color: #667eea;
}

:deep(.custom-panel) {
  background: linear-gradient(to bottom, #f8faff 0%, #ffffff 100%);
}

/* 场景 2：自定义日期单元格 */
:deep(.custom-cell) {
  border-radius: 8px;
  margin: 2px;
  transition: all 0.3s;
}

:deep(.custom-cell:hover) {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

:deep(.custom-cell.hmfw-calendar-cell-selected .custom-cell-inner) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 6px;
}

:deep(.custom-cell.hmfw-calendar-cell-today .custom-cell-inner) {
  border: 2px solid #667eea;
  border-radius: 6px;
}

:deep(.custom-cell-inner) {
  border-radius: 6px;
  transition: all 0.3s;
}

:deep(.custom-date) {
  font-weight: 500;
}

/* 场景 3：自定义星期头 */
:deep(.custom-weekdays) {
  background: linear-gradient(to right, #f0f5ff, #e6f0ff);
  border-radius: 8px;
  margin-bottom: 8px;
}

:deep(.custom-weekday-cell) {
  font-weight: 600;
  color: #667eea;
  padding: 12px 0;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.5px;
}

/* 场景 4：年视图自定义 */
:deep(.custom-year-panel) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 16px;
}

:deep(.custom-month-cell) {
  border-radius: 12px;
  transition: all 0.3s;
  border: 2px solid transparent;
}

:deep(.custom-month-cell:hover) {
  border-color: #667eea;
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

:deep(.custom-month-cell.hmfw-calendar-cell-selected) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: transparent;
}

:deep(.custom-month-cell.hmfw-calendar-cell-selected .custom-month) {
  color: white;
  font-weight: 600;
}

:deep(.custom-month) {
  font-size: 16px;
  padding: 16px 0;
  transition: all 0.3s;
}
</style>
