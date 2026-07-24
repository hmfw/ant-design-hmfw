<template>
  <Space direction="vertical" size="middle">
    <Switch v-model:checked="checked1">
      <template #checkedChildren>
        <CheckOutlined />
      </template>
      <template #unCheckedChildren>
        <CloseOutlined />
      </template>
    </Switch>
    <Switch v-model:checked="checked2" checked-children="✓" un-checked-children="✗" />
  </Space>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import { CheckOutlined, CloseOutlined } from '@hmfw/icons'
import { Switch, Space } from '@hmfw/ant-design'

const checked1 = shallowRef(true)
const checked2 = shallowRef(false)
</script>
