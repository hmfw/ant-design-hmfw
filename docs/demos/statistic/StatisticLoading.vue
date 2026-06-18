<template>
  <div class="statistic-demo">
    <Space :size="32">
      <Statistic title="用户数" :value="value" :loading="loading" />
      <Statistic title="活跃用户" :value="93" suffix="/ 100" :loading="loading" />
      <Countdown title="倒计时" :value="Date.now() + 60000" :loading="loading" />
    </Space>
    <div style="margin-top: 16px">
      <Button @click="toggleLoading">
        {{ loading ? '显示内容' : '显示加载' }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Statistic, Countdown, Space, Button } from 'ant-design-hmfw'

const loading = ref(true)
const value = ref(112893)

const toggleLoading = () => {
  loading.value = !loading.value
}
</script>

<style scoped>
.statistic-demo {
  padding: 24px;
  background: #fafafa;
}
</style>
