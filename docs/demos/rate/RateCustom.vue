<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 4px">使用表情：</p>
      <Rate v-model:value="value1" character="😊" />
    </div>
    <div>
      <p style="margin-bottom: 4px">使用文字：</p>
      <Rate v-model:value="value2" character="好" />
    </div>
    <div>
      <p style="margin-bottom: 4px">使用字母：</p>
      <Rate v-model:value="value3" character="A" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value1 = ref(3)
const value2 = ref(4)
const value3 = ref(2)
</script>
