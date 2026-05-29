<template>
  <div>
    <Rate
      v-model:value="value"
      :tooltips="tooltips"
      @hover-change="handleHoverChange"
    />
    <p style="margin-top: 8px;">
      当前：{{ tooltips[value - 1] || '未评分' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value = ref(0)
const tooltips = ['极差', '差', '一般', '好', '极好']

const handleHoverChange = (hoverValue: number) => {
  console.log('悬停：', tooltips[hoverValue - 1])
}
</script>
