<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">禁用部分小时：</p>
      <TimePicker v-model:value="time1" :disabled-time="disabledTime1" placeholder="禁用 0-5 时" />
    </div>
    <div>
      <p style="margin-bottom: 4px">隐藏禁用选项：</p>
      <TimePicker
        v-model:value="time2"
        :disabled-time="disabledTime2"
        :hide-disabled-options="true"
        placeholder="隐藏 0-5 时"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from '@hmfw/ant-design'

const time1 = ref('')
const time2 = ref('')

const disabledTime1 = () => ({
  disabledHours: () => [0, 1, 2, 3, 4, 5],
})

const disabledTime2 = () => ({
  disabledHours: () => [0, 1, 2, 3, 4, 5],
})
</script>
