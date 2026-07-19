<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">默认状态：</p>
      <TimePicker v-model:value="time1" placeholder="默认" />
    </div>
    <div>
      <p style="margin-bottom: 4px">错误状态：</p>
      <TimePicker v-model:value="time2" status="error" placeholder="错误状态" />
    </div>
    <div>
      <p style="margin-bottom: 4px">警告状态：</p>
      <TimePicker v-model:value="time3" status="warning" placeholder="警告状态" />
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
