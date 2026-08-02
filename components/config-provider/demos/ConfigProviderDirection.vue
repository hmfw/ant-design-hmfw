<template>
  <Space direction="vertical" size="large" style="width: 100%">
    <Segmented v-model:value="direction" :options="options" />

    <ConfigProvider :direction="direction">
      <div :style="panelStyle">
        <Rate :value="3" />
        <Progress :percent="60" />
        <Statistic title="活跃用户" :value="112893" />
        <Descriptions :items="items" bordered :column="1" />
      </div>
    </ConfigProvider>

    <p :style="hintStyle">
      当前支持 RTL 的组件：Rate、Progress、Statistic、Descriptions、Segmented、Skeleton。 其余组件暂不响应 direction。
    </p>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { CSSProperties } from 'vue'
import { ConfigProvider, Rate, Progress, Statistic, Descriptions, Segmented, Space } from '@hmfw/ant-design'

const direction = ref<'ltr' | 'rtl'>('rtl')
const options = [
  { label: 'LTR 从左到右', value: 'ltr' },
  { label: 'RTL 从右到左', value: 'rtl' },
]

const items = [
  { label: '姓名', children: 'Zhou Maomao' },
  { label: '电话', children: '1810000000' },
]

const panelStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '16px',
  background: 'var(--hmfw-color-bg-layout)',
  borderRadius: 'var(--hmfw-border-radius)',
}

const hintStyle: CSSProperties = {
  margin: 0,
  fontSize: '12px',
  color: 'var(--hmfw-color-text-tertiary)',
}
</script>
