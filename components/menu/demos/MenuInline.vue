<template>
  <div style="width: 256px; border-right: 1px solid #f0f0f0">
    <Menu
      mode="inline"
      :items="items"
      :selected-keys="selectedKeys"
      :open-keys="openKeys"
      @select="onSelect"
      @open-change="onOpenChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Menu } from '@hmfw/ant-design'
import { MailOutlined, SettingOutlined, UserOutlined } from '@hmfw/icons'

const selectedKeys = ref(['1'])
const openKeys = ref(['sub1'])

const items = [
  {
    key: 'sub1',
    label: '导航一',
    icon: h(MailOutlined),
    children: [
      { key: '1', label: '选项一' },
      { key: '2', label: '选项二' },
      { key: '3', label: '选项三' },
    ],
  },
  {
    key: 'sub2',
    label: '导航二',
    icon: h(SettingOutlined),
    children: [
      { key: '5', label: '选项五' },
      { key: '6', label: '选项六' },
    ],
  },
  { key: '9', label: '导航三', icon: h(UserOutlined) },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}

const onOpenChange = (keys: string[]) => {
  openKeys.value = keys
}
</script>
