<template>
  <div class="float-btn-demo">
    <FloatButtonGroup shape="circle" :style="pos">
      <FloatButton :icon="EditOutlined" tooltip="编辑" />
      <FloatButton :icon="DeleteOutlined" tooltip="删除" />
      <FloatButton :icon="SearchOutlined" tooltip="搜索" />
    </FloatButtonGroup>
  </div>
</template>

<script setup lang="ts">
import { FloatButton, FloatButtonGroup } from '@hmfw/ant-design'
import { EditOutlined, DeleteOutlined, SearchOutlined } from '@hmfw/icons'

const pos = { position: 'absolute', insetInlineEnd: '24px', insetBlockEnd: '24px' } as const
</script>

<style scoped>
.float-btn-demo {
  position: relative;
  height: 220px;
  overflow: hidden;
}
</style>
