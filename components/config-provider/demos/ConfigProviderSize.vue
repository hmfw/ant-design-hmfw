<template>
  <Space direction="vertical" size="large" style="width: 100%">
    <Segmented v-model:value="size" :options="options" />

    <ConfigProvider :component-size="size">
      <div :style="panelStyle">
        <Space wrap align="center">
          <Input placeholder="输入框" style="width: 150px" />
          <AutoComplete :options="[{ value: '选项一' }]" placeholder="自动完成" style="width: 150px" />
          <Segmented :options="['日', '周', '月']" />
        </Space>
        <Space wrap align="center">
          <Rate :value="3" />
          <!-- 控件自身 size 优先级高于全局配置 -->
          <Input size="large" placeholder="size=large 覆盖全局" style="width: 200px" />
        </Space>
      </div>
    </ConfigProvider>

    <p :style="hintStyle">
      当前响应 componentSize 的组件：Input 系列、AutoComplete、Segmented、Rate、Skeleton。 Button、Select 等组件的 size
      有自身默认值，暂不回退到全局配置。
    </p>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { CSSProperties } from 'vue'
import { ConfigProvider, Input, AutoComplete, Segmented, Rate, Space } from '@hmfw/ant-design'

const size = ref<'small' | 'middle' | 'large'>('middle')
const options = [
  { label: 'Small', value: 'small' },
  { label: 'Middle 默认', value: 'middle' },
  { label: 'Large', value: 'large' },
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
