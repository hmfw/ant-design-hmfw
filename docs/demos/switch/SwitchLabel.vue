<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Switch v-model:checked="checked1" checked-children="开" un-checked-children="关" />
    <Switch v-model:checked="checked2" checked-children="✓" un-checked-children="✗" />
    <Switch v-model:checked="checked3" checked-children="ON" un-checked-children="OFF" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@hmfw/ant-design'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(true)
</script>
