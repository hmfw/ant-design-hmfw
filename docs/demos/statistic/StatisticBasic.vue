<template>
  <div class="statistic-demo">
    <Space :size="32">
      <Statistic title="用户数" :value="112893" />
      <Statistic title="账户余额（元）" :value="112893" :precision="2" />
      <Statistic title="活跃用户" :value="93" suffix="/ 100" />
    </Space>
  </div>
</template>

<script setup lang="ts">
import { Statistic, Space } from '../../../components'
</script>

<style scoped>
.statistic-demo {
  padding: 24px;
  background: #fafafa;
}
</style>
