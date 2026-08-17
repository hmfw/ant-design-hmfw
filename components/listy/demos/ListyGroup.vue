<template>
  <Listy :groups="groups" :height="400" :children="renderItem" />
</template>

<script setup lang="tsx">
import { Listy } from '@hmfw/ant-design'
import type { ListyGroupItem } from '../types'

const groups: ListyGroupItem[] = [
  {
    group: '水果',
    items: [
      { id: 1, name: '苹果', price: '¥5.00/斤' },
      { id: 2, name: '香蕉', price: '¥3.00/斤' },
      { id: 3, name: '橙子', price: '¥4.50/斤' },
    ],
  },
  {
    group: '蔬菜',
    items: [
      { id: 4, name: '番茄', price: '¥3.50/斤' },
      { id: 5, name: '黄瓜', price: '¥2.80/斤' },
      { id: 6, name: '生菜', price: '¥4.00/斤' },
    ],
  },
  {
    group: '肉类',
    items: [
      { id: 7, name: '猪肉', price: '¥18.00/斤' },
      { id: 8, name: '牛肉', price: '¥35.00/斤' },
      { id: 9, name: '鸡肉', price: '¥12.00/斤' },
    ],
  },
]

const renderItem = (item: any) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
    <span>{item.name}</span>
    <span style={{ color: '#ff4d4f', fontWeight: 500 }}>{item.price}</span>
  </div>
)
</script>
