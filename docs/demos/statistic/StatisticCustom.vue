<template>
  <div class="statistic-demo">
    <Space :size="32">
      <Statistic title="自定义渲染" :value="112893" :value-render="customRender" />
      <Statistic
        title="增长率"
        :value="9.3"
        :precision="2"
        suffix="%"
        :value-style="{ color: '#3f8600' }"
        :prefix="h('span', { style: { color: '#3f8600' } }, '↑')"
      />
    </Space>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Statistic, Space } from 'ant-design-hmfw'

const customRender = (value: string) => {
  return h('span', { style: { color: '#cf1322', fontWeight: 'bold' } }, [h('span', '💰 '), value, h('span', ' 元')])
}
</script>

<style scoped>
.statistic-demo {
  padding: 24px;
  background: #fafafa;
}
</style>
