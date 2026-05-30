<template>
  <Tabs
    v-model:activeKey="activeKey"
    type="editable-card"
    :items="items"
    @edit="onEdit"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabs } from '../../../components'

const activeKey = ref('1')
const items = ref([
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3', closable: false },
])

let newTabIndex = 0

const onEdit = (targetKey: string | MouseEvent, action: 'add' | 'remove') => {
  if (action === 'add') {
    const newKey = `newTab${newTabIndex++}`
    items.value.push({
      key: newKey,
      label: 'New Tab',
      children: 'Content of new Tab',
    })
    activeKey.value = newKey
  } else {
    const targetIndex = items.value.findIndex((item) => item.key === targetKey)
    const newItems = items.value.filter((item) => item.key !== targetKey)

    if (newItems.length && targetKey === activeKey.value) {
      const newActiveKey =
        newItems[targetIndex === newItems.length ? targetIndex - 1 : targetIndex].key
      activeKey.value = newActiveKey
    }

    items.value = newItems
  }
}
</script>
