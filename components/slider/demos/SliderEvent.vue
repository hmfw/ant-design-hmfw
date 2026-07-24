<template>
  <div style="display: flex; flex-direction: column; gap: 24px; padding: 0 16px">
    <div>
      <p style="margin-bottom: 8px">拖动滑块，观察事件触发时机：</p>
      <Slider v-model:value="value" @change="onChange" @after-change="onAfterChange" />
    </div>
    <div style="color: #666; font-size: 13px">
      <p>change（实时值变化）：{{ changeValue }}</p>
      <p>afterChange（拖拽结束）：{{ afterChangeValue }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@hmfw/ant-design'
import type { SliderValue } from '@hmfw/ant-design'

const value = ref(30)
const changeValue = ref<SliderValue>(30)
const afterChangeValue = ref<SliderValue>()

const onChange = (val: SliderValue) => {
  changeValue.value = val
}

const onAfterChange = (val: SliderValue) => {
  afterChangeValue.value = val
}
</script>
