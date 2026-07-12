<template>
  <div>
    <h4 style="margin-bottom: 8px">自定义标签间距 + 样式 + 隐藏添加按钮</h4>
    <Tabs
      type="editable-card"
      :items="items"
      :tab-bar-gutter="24"
      :tab-bar-style="{ background: '#f5f5f5', padding: '8px', borderRadius: '8px' }"
      hide-add
      @edit="onEdit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabs } from '@hmfw/ant-design'

const items = ref([
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
])

const onEdit = (targetKey: string | MouseEvent, action: 'add' | 'remove') => {
  if (action === 'remove') {
    items.value = items.value.filter((item) => item.key !== targetKey)
  }
}
</script>
