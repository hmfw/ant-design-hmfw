<template>
  <div>
    <div style="margin-bottom: 16px">
      <label style="margin-right: 8px">触发方式:</label>
      <select v-model="triggerAction" style="padding: 4px 8px">
        <option value="hover">hover</option>
        <option value="click">click</option>
      </select>
    </div>
    <Menu
      mode="horizontal"
      :items="items"
      :selected-keys="selectedKeys"
      :trigger-sub-menu-action="triggerAction"
      @select="onSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Menu } from '@hmfw/ant-design'
import { AppstoreOutlined, SettingOutlined } from '@hmfw/icons'

const selectedKeys = ref(['1'])
const triggerAction = ref<'hover' | 'click'>('hover')

const items = [
  { key: '1', label: '导航一', icon: h(AppstoreOutlined) },
  { key: '2', label: '导航二', icon: h(SettingOutlined) },
  {
    key: 'sub',
    label: '子菜单',
    children: [
      { key: 'sub-1', label: '子项 1' },
      { key: 'sub-2', label: '子项 2' },
      { key: 'sub-3', label: '子项 3' },
    ],
  },
  { key: '4', label: '导航四' },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
</script>
