<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <label style="margin-right: 8px">受控展开状态：</label>
      <Button @click.stop="handleOpen"> {{ open ? '关闭' : '打开' }} (当前: {{ open }}) </Button>
    </div>
    <div class="float-btn-demo">
      <FloatButtonGroup
        v-model:open="open"
        trigger="click"
        type="primary"
        :icon="SettingOutlined"
        close-icon="✕"
        tooltip="设置菜单"
        :badge="{ count: 3 }"
        :style="pos"
      >
        <FloatButton :icon="EditOutlined" tooltip="编辑" />
        <FloatButton :icon="DeleteOutlined" tooltip="删除" />
        <FloatButton :icon="SearchOutlined" tooltip="搜索" />
      </FloatButtonGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, FloatButton, FloatButtonGroup } from '@hmfw/ant-design'
import { SettingOutlined, EditOutlined, DeleteOutlined, SearchOutlined } from '@hmfw/icons'

const open = ref(false)
const pos = { position: 'absolute', insetInlineEnd: '24px', insetBlockEnd: '24px' } as const

const handleOpen = () => {
  open.value = !open.value
}
</script>

<style scoped>
.float-btn-demo {
  position: relative;
  height: 300px;
  border: 1px dashed #d9d9d9;
  border-radius: 8px;
  background: #fafafa;
}
</style>
