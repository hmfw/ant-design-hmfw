<template>
  <div>
    <Space style="margin-bottom: 16px">
      <Button @click="scrollToTop">滚动到顶部</Button>
      <Button @click="scrollToMiddle">滚动到中间</Button>
      <Button @click="scrollToBottom">滚动到底部</Button>
      <Button @click="scrollToIndex">滚动到索引 888</Button>
    </Space>
    <Listy ref="listyRef" :data="data" :height="300" :virtual="true" :children="renderItem" />
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
import { Listy } from '@hmfw/ant-design'
import { Button, Space } from '../../index'
import type { ListyRef } from '../types'

const listyRef = ref<ListyRef>()

const data = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  title: `列表项 ${i + 1}`,
}))

const renderItem = (item: any, index: number) => (
  <div style={{ padding: '8px 0', fontWeight: 500 }}>
    #{index + 1} {item.title}
  </div>
)

const scrollToTop = () => {
  listyRef.value?.scrollTo({ index: 0, align: 'top' })
}

const scrollToMiddle = () => {
  listyRef.value?.scrollTo({ index: Math.floor(data.length / 2), align: 'top' })
}

const scrollToBottom = () => {
  listyRef.value?.scrollTo({ index: data.length - 1, align: 'bottom' })
}

const scrollToIndex = () => {
  listyRef.value?.scrollTo({ index: 888, align: 'top' })
}
</script>
