<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">需要确认（needConfirm）：</p>
      <TimePicker v-model:value="time1" :need-confirm="true" placeholder="点击确定按钮生效" />
    </div>
    <div>
      <p style="margin-bottom: 4px">滚动即改变（changeOnScroll）：</p>
      <TimePicker v-model:value="time2" :change-on-scroll="true" :need-confirm="false" placeholder="选择即生效" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from '@hmfw/ant-design'

const time1 = ref('')
const time2 = ref('')
</script>
