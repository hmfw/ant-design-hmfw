<template>
  <div style="display: flex; gap: 32px; flex-direction: column">
    <div>
      <h4>倒计时完成回调</h4>
      <div style="display: flex; gap: 32px; align-items: flex-start">
        <Countdown title="5秒倒计时" :value="shortDeadline" format="s 秒" @finish="onFinish" />
        <div v-if="finished" style="color: #52c41a; padding-top: 30px">倒计时已完成！</div>
      </div>
    </div>

    <div>
      <h4>倒计时变化回调</h4>
      <div style="display: flex; gap: 32px; align-items: flex-start">
        <Countdown title="剩余时间" :value="deadline" format="HH:mm:ss" @change="onChange" />
        <div style="padding-top: 30px">剩余毫秒: {{ remaining }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Countdown } from '@hmfw/ant-design'

const shortDeadline = ref(Date.now() + 1000 * 5)
const deadline = ref(Date.now() + 1000 * 60 * 60)
const finished = ref(false)
const remaining = ref(0)

const onFinish = () => {
  finished.value = true
  console.log('倒计时完成')
}

const onChange = (value: number) => {
  remaining.value = value
}
</script>
