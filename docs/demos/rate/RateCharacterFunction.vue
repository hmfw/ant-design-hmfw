<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 4px">使用数字索引：</p>
      <Rate v-model:value="value1" :character="renderNumber" />
    </div>
    <div>
      <p style="margin-bottom: 4px">根据索引显示不同表情：</p>
      <Rate v-model:value="value2" :character="renderEmoji" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'
import type { RateCharacterRenderContext } from '@hmfw/ant-design'

const value1 = ref(3)
const value2 = ref(2)

const renderNumber = ({ index }: RateCharacterRenderContext) => index + 1

const emojis = ['😢', '😟', '😐', '😊', '😍']
const renderEmoji = ({ index }: RateCharacterRenderContext) => emojis[index]
</script>
