<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <div>
      <p style="margin-bottom: 4px;">只显示时分（HH:mm）：</p>
      <TimePicker
        v-model:value="time1"
        format="HH:mm"
        placeholder="选择时分"
      />
    </div>
    <div>
      <p style="margin-bottom: 4px;">12 小时制：</p>
      <TimePicker
        v-model:value="time2"
        :use12-hours="true"
        format="h:mm a"
        placeholder="12 小时制"
      />
    </div>
    <div>
      <p style="margin-bottom: 4px;">不显示秒：</p>
      <TimePicker
        v-model:value="time3"
        format="HH:mm"
        :show-now="false"
        placeholder="不显示秒"
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
