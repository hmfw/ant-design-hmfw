<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义触发器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">渐变触发器：</div>
      <DatePicker
        placeholder="选择日期"
        :class-names="{
          root: 'custom-root',
          input: 'custom-input',
          suffix: 'custom-suffix',
        }"
      />
    </div>

    <!-- 场景 2：自定义弹层与面板 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义弹层面板：</div>
      <DatePicker
        placeholder="选择日期"
        :class-names="{
          popup: 'custom-popup',
          panel: 'custom-panel',
          panelHeader: 'custom-header',
        }"
      />
    </div>

    <!-- 场景 3：自定义日期单元格 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义日期单元格：</div>
      <DatePicker
        placeholder="选择日期"
        :class-names="{
          day: 'custom-day',
          weekday: 'custom-weekday',
        }"
      />
    </div>

    <!-- 场景 4：带时间选择的样式定制 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">带时间选择：</div>
      <DatePicker
        placeholder="选择日期时间"
        :show-time="true"
        :class-names="{
          root: 'custom-datetime-root',
          timePanel: 'custom-time-panel',
          timeColumn: 'custom-time-column',
          timeCell: 'custom-time-cell',
        }"
      />
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <DatePicker
        placeholder="选择日期"
        :styles="{
          root: { borderRadius: '20px', borderColor: '#722ed1' },
          input: { color: '#722ed1', fontWeight: 500 },
          popup: { borderRadius: '16px' },
          panel: { boxShadow: '0 8px 24px rgba(114, 46, 209, 0.15)' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DatePicker } from 'ant-design-hmfw'
</script>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  transform: translateY(-2px);
}

:deep(.custom-input) {
  color: white;
}

:deep(.custom-input::placeholder) {
  color: rgba(255, 255, 255, 0.7);
}

:deep(.custom-suffix) {
  color: white;
  font-size: 16px;
}

:deep(.custom-datetime-root) {
  border-color: #52c41a;
  border-width: 2px;
  transition: all 0.3s;
}

:deep(.custom-datetime-root:hover) {
  border-color: #73d13d;
  box-shadow: 0 0 0 2px rgba(82, 196, 26, 0.1);
}
</style>

<style>
/* 弹层组件通过 Teleport 渲染到 body，必须使用 :global() */
:global(.custom-popup) {
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(102, 126, 234, 0.2);
}

:global(.custom-panel) {
  background: linear-gradient(180deg, #f0f5ff 0%, #ffffff 100%);
}

:global(.custom-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px 12px 0 0;
  padding: 12px 16px;
}

:global(.custom-day) {
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s;
}

:global(.custom-day:hover) {
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

:global(.custom-weekday) {
  color: #722ed1;
  font-weight: 600;
  font-size: 12px;
}

:global(.custom-time-panel) {
  border-left: 2px solid #52c41a;
}

:global(.custom-time-column) {
  background: #f6ffed;
}

:global(.custom-time-cell) {
  border-radius: 4px;
  transition: all 0.2s;
}

:global(.custom-time-cell:hover) {
  background: linear-gradient(135deg, #95de64 0%, #52c41a 100%);
  color: white;
  transform: translateX(4px);
}
</style>
