<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div style="display: flex; align-items: center; gap: 16px">
      <Switch v-model:checked="checked1" />
      <span>默认大小</span>
    </div>
    <div style="display: flex; align-items: center; gap: 16px">
      <Switch v-model:checked="checked2" size="small" />
      <Switch v-model:checked="checked2" size="small" checked-children="on" un-checked-children="off" />
      <span>小号开关</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@hmfw/ant-design'

const checked1 = ref(true)
const checked2 = ref(true)
</script>
