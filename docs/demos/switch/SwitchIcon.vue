<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Switch v-model:checked="checked1">
      <template #checkedChildren>
        <CheckOutlined class="hmfw-icon" />
      </template>
      <template #unCheckedChildren>
        <CloseOutlined class="hmfw-icon" />
      </template>
    </Switch>
    <Switch v-model:checked="checked2" checked-children="✓" un-checked-children="✗" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch, CheckOutlined, CloseOutlined } from '@hmfw/ant-design'

const checked1 = ref(true)
const checked2 = ref(false)
</script>
