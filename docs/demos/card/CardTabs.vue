<template>
  <Card title="卡片标题" :tab-list="tabList" :active-tab-key="activeKey" @tab-change="onTabChange">
    <template #tabBarExtraContent>
      <a href="#">更多</a>
    </template>
    <p>{{ contentMap[activeKey] }}</p>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card } from 'ant-design-hmfw'

const tabList = [
  { key: 'tab1', label: '选项卡一' },
  { key: 'tab2', label: '选项卡二' },
  { key: 'tab3', label: '选项卡三' },
]

const contentMap: Record<string, string> = {
  tab1: '选项卡一的内容',
  tab2: '选项卡二的内容',
  tab3: '选项卡三的内容',
}

const activeKey = ref('tab1')

const onTabChange = (key: string) => {
  activeKey.value = key
  console.log('Tab changed:', key)
}
</script>
