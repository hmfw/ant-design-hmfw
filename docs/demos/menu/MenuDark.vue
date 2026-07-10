<template>
  <div style="width: 256px">
    <Menu
      mode="inline"
      theme="dark"
      :items="items"
      :selected-keys="selectedKeys"
      :default-open-keys="['sub1']"
      @select="onSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Menu } from '@hmfw/ant-design'
import { MailOutlined, SettingOutlined, UserOutlined } from '@hmfw/icons'

const selectedKeys = ref(['1'])

const items = [
  {
    key: 'sub1',
    label: '导航一',
    icon: h(MailOutlined),
    children: [
      { key: '1', label: '选项一' },
      { key: '2', label: '选项二' },
    ],
  },
  {
    key: 'sub2',
    label: '导航二',
    icon: h(SettingOutlined),
    children: [
      { key: '3', label: '选项三' },
      { key: '4', label: '选项四' },
    ],
  },
  { key: '5', label: '导航三', icon: h(UserOutlined) },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
</script>
