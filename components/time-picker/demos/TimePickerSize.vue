<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">Small：</p>
      <TimePicker v-model:value="time1" size="small" placeholder="Small" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Middle（默认）：</p>
      <TimePicker v-model:value="time2" size="middle" placeholder="Middle（默认）" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Large：</p>
      <TimePicker v-model:value="time3" size="large" placeholder="Large" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from '@hmfw/ant-design'

const time1 = ref('')
const time2 = ref('')
const time3 = ref('')
</script>
