<template>
  <div class="statistic-demo">
    <Space direction="vertical" :size="16">
      <Countdown title="倒计时" :value="deadline" format="HH:mm:ss" />
      <Countdown title="天数倒计时" :value="deadline2" format="DD 天 HH 时 mm 分 ss 秒" />
      <Countdown title="毫秒倒计时" :value="deadline3" format="HH:mm:ss:SSS" @finish="onFinish" />
    </Space>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Countdown, Space, message } from 'ant-design-hmfw'

const deadline = ref(Date.now() + 1000 * 60 * 60 * 2) // 2小时后
const deadline2 = ref(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30 * 30) // 2天半后
const deadline3 = ref(Date.now() + 1000 * 10) // 10秒后

const onFinish = () => {
  message.success('倒计时结束！')
}
</script>

<style scoped>
.statistic-demo {
  padding: 24px;
  background: #fafafa;
}
</style>
