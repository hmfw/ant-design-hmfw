<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">Outlined（默认）：</p>
      <TimePicker v-model:value="time1" variant="outlined" placeholder="Outlined" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Filled：</p>
      <TimePicker v-model:value="time2" variant="filled" placeholder="Filled" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Borderless：</p>
      <TimePicker v-model:value="time3" variant="borderless" placeholder="Borderless" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Underlined：</p>
      <TimePicker v-model:value="time4" variant="underlined" placeholder="Underlined" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from '@hmfw/ant-design'

const time1 = ref('')
const time2 = ref('')
const time3 = ref('')
const time4 = ref('')
</script>
