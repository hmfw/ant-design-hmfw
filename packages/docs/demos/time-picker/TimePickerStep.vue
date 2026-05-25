<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <div>
      <p style="margin-bottom: 4px;">小时步长 2：</p>
      <TimePicker
        v-model:value="time1"
        :hour-step="2"
        placeholder="小时步长 2"
      />
    </div>
    <div>
      <p style="margin-bottom: 4px;">分钟步长 15：</p>
      <TimePicker
        v-model:value="time2"
        :minute-step="15"
        placeholder="分钟步长 15"
      />
    </div>
    <div>
      <p style="margin-bottom: 4px;">秒步长 30：</p>
      <TimePicker
        v-model:value="time3"
        :second-step="30"
        placeholder="秒步长 30"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from 'ant-design-hmfw'

const time1 = ref('')
const time2 = ref('')
const time3 = ref('')
</script>
