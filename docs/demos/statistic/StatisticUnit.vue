<template>
  <div class="statistic-demo">
    <Space :size="32">
      <Statistic title="账户余额" :value="112893" :precision="2" prefix="$" />
      <Statistic title="增长率" :value="9.3" :precision="2" suffix="%" />
      <Statistic title="价格" :value="568.08" :precision="2" prefix="¥" :value-style="{ color: '#3f8600' }" />
    </Space>
  </div>
</template>

<script setup lang="ts">
import { Statistic, Space } from 'ant-design-hmfw'
</script>

<style scoped>
.statistic-demo {
  padding: 24px;
  background: #fafafa;
}
</style>
