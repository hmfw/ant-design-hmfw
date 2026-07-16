<template>
  <div>
    <Tabs v-model:active-key="activeKey" type="editable-card" :items="items" @edit="onEdit" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabs } from '@hmfw/ant-design'

const activeKey = ref('1')
let newTabIndex = 0

const items = ref([
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
])

const onEdit = (targetKey: string | MouseEvent, action: 'add' | 'remove') => {
  if (action === 'add') {
    const newKey = `newTab${newTabIndex++}`
    items.value.push({ key: newKey, label: 'New Tab', children: 'Content of new Tab' })
    activeKey.value = newKey
  } else {
    const targetIndex = items.value.findIndex((item) => item.key === targetKey)
    const newItems = items.value.filter((item) => item.key !== targetKey)
    if (newItems.length && targetKey === activeKey.value) {
      activeKey.value = newItems[targetIndex === newItems.length ? targetIndex - 1 : targetIndex].key
    }
    items.value = newItems
  }
}
</script>
