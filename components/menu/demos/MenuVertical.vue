<template>
  <div style="width: 256px; border-right: 1px solid #f0f0f0">
    <Menu
      mode="vertical"
      :items="items"
      :selected-keys="selectedKeys"
      :trigger-sub-menu-action="triggerAction"
      @select="onSelect"
    />
    <div style="padding: 16px; border-top: 1px solid #f0f0f0">
      <label> <input v-model="triggerAction" type="radio" value="hover" /> 悬停展开 </label>
      <label style="margin-left: 12px"> <input v-model="triggerAction" type="radio" value="click" /> 点击展开 </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Menu } from '@hmfw/ant-design'
import { MailOutlined, SettingOutlined, UserOutlined } from '@hmfw/icons'

const selectedKeys = ref(['1'])
const triggerAction = ref<'hover' | 'click'>('hover')

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
