<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 320px">
    <div>
      <div style="margin-bottom: 8px; color: #666">自动排序（order）</div>
      <RangePicker v-model:value="range" :order="true" />
    </div>
    <div>
      <div style="margin-bottom: 8px; color: #666">不排序 + 自定义分隔符</div>
      <RangePicker v-model:value="range2" :order="false" separator="~" />
    </div>
    <p>范围 1：{{ range }}</p>
    <p>范围 2：{{ range2 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RangePicker } from '@hmfw/ant-design'

const range = ref<[string | null, string | null]>([null, null])
const range2 = ref<[string | null, string | null]>([null, null])
</script>
