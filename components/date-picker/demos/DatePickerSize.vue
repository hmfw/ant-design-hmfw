<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <DatePicker size="small" placeholder="Small 小尺寸" />
    <DatePicker placeholder="Middle 默认尺寸" />
    <DatePicker size="large" placeholder="Large 大尺寸" />
    <DatePicker disabled placeholder="禁用状态" />
    <DatePicker status="warning" placeholder="Warning 警告状态" />
    <DatePicker status="error" placeholder="Error 错误状态" />
    <DatePicker variant="filled" placeholder="Filled 填充形态" />
    <DatePicker variant="borderless" placeholder="Borderless 无边框" />
    <DatePicker variant="underlined" placeholder="Underlined 下划线" />
  </div>
</template>

<script setup lang="ts">
import { DatePicker } from '@hmfw/ant-design'
</script>
