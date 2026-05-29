<template>
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <Checkbox v-model:checked="checked1">普通复选框</Checkbox>
    <Checkbox v-model:checked="checked2" disabled>禁用复选框</Checkbox>
    <Checkbox v-model:checked="checked3" disabled>禁用选中</Checkbox>
    <p>checked1: {{ checked1 }}, checked2: {{ checked2 }}, checked3: {{ checked3 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from 'ant-design-hmfw'

const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(true)
</script>
