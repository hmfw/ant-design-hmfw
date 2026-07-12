<template>
  <div>
    <h4 style="margin-bottom: 8px">自定义添加按钮图标</h4>
    <Tabs
      v-model:active-key="activeKey1"
      type="editable-card"
      :items="items1"
      :add-icon="addIcon"
      style="margin-bottom: 24px"
      @edit="onEdit1"
    />

    <h4 style="margin-bottom: 8px">自定义关闭按钮图标</h4>
    <Tabs
      v-model:active-key="activeKey2"
      type="editable-card"
      :items="items2"
      :remove-icon="removeIcon"
      @edit="onEdit2"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Tabs } from '@hmfw/ant-design'
import { PlusCircleOutlined, MinusCircleOutlined } from '@hmfw/icons'

const activeKey1 = ref('1')
const items1 = ref([
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
])

const addIcon = h(PlusCircleOutlined, { class: 'hmfw-icon' })

let newTabIndex = 0
const onEdit1 = (targetKey: string | MouseEvent, action: 'add' | 'remove') => {
  if (action === 'add') {
    const newKey = `newTab${newTabIndex++}`
    items1.value.push({ key: newKey, label: 'New Tab', children: 'Content of new Tab' })
    activeKey1.value = newKey
  } else {
    items1.value = items1.value.filter((item) => item.key !== targetKey)
  }
}

const activeKey2 = ref('1')
const items2 = ref([
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
])

const removeIcon = h(MinusCircleOutlined, { class: 'hmfw-icon' })

const onEdit2 = (_targetKey: string | MouseEvent, action: 'add' | 'remove') => {
  if (action === 'remove') {
    items2.value = items2.value.slice(0, -1)
  }
}
</script>
