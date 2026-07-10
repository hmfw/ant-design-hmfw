<template>
  <div style="width: 256px; border-right: 1px solid #f0f0f0">
    <Menu
      mode="inline"
      :items="items"
      :selected-keys="selectedKeys"
      :default-open-keys="['sub1', 'sub2']"
      :expand-icon="expandIcon"
      @select="onSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Menu } from '@hmfw/ant-design'
import { MailOutlined, SettingOutlined } from '@hmfw/icons'

const selectedKeys = ref(['1'])

/**
 * 自定义展开图标：展开/折叠状态不同
 */
const expandIcon = ({ isOpen }: { isOpen: boolean }) => h('span', isOpen ? '▾' : '▸')

const items = [
  {
    key: 'sub1',
    label: '折叠图标示例',
    icon: h(MailOutlined),
    children: [
      { key: '1', label: '选项一' },
      { key: '2', label: '选项二' },
    ],
  },
  {
    key: 'sub2',
    label: '更多菜单',
    icon: h(SettingOutlined),
    children: [
      { key: '3', label: '选项三' },
      { key: '4', label: '选项四' },
    ],
  },
  { key: '5', label: '普通菜单项' },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
</script>
