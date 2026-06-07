<template>
  <div style="width: 256px">
    <Menu mode="inline" :items="items" :selected-keys="selectedKeys" :inline-indent="40" @select="onSelect" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu } from 'ant-design-hmfw'

const selectedKeys = ref(['1'])

// 测试分组内项目的缩进计算
const items = [
  { key: '1', label: '普通项目' },
  {
    type: 'group',
    key: 'group-1',
    label: '分组一',
    children: [
      { key: 'g1-1', label: '分组项 1' },
      { key: 'g1-2', label: '分组项 2' },
      {
        key: 'g1-sub',
        label: '分组子菜单',
        children: [
          { key: 'g1-sub-1', label: '三级项目 1' },
          { key: 'g1-sub-2', label: '三级项目 2' },
        ],
      },
    ],
  },
  {
    type: 'group',
    key: 'group-2',
    label: '分组二',
    children: [
      { key: 'g2-1', label: '分组项 3' },
      { key: 'g2-2', label: '分组项 4' },
    ],
  },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
</script>
