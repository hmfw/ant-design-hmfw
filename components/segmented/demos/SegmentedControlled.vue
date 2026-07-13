<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <!-- 纯受控：不使用 v-model，通过 :value + @change 手动维护状态 -->
    <Segmented :value="value" :options="options" @change="onChange" />

    <div style="display: flex; gap: 8px; align-items: center">
      <span>关联内容：</span>
      <strong>{{ contentMap[value] }}</strong>
    </div>

    <div style="display: flex; gap: 8px">
      <Button size="small" @click="value = 'Map'">跳到「地图」</Button>
      <Button size="small" @click="value = 'List'">跳到「列表」</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented, Button } from '@hmfw/ant-design'
import type { SegmentedValue } from '@hmfw/ant-design'

const value = ref<SegmentedValue>('Map')
const options = ['Map', 'Transit', 'List']

const contentMap: Record<string, string> = {
  Map: '🗺️ 地图视图',
  Transit: '🚇 交通视图',
  List: '📋 列表视图',
}

// 受控模式下需在 change 回调中显式更新 value，滑块随受控值移动
const onChange = (val: SegmentedValue) => {
  value.value = val
}
</script>
