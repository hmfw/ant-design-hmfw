<template>
  <Card v-model:active-tab-key="activeKey" style="width: 100%" title="带额外内容的标签页" :tab-list="tabList">
    <template #tabBarExtraContent>
      <a href="#" style="color: #1890ff">更多</a>
    </template>
    <p v-if="activeKey === 'article'">文章内容展示区域</p>
    <p v-if="activeKey === 'app'">应用内容展示区域</p>
    <p v-if="activeKey === 'project'">项目内容展示区域</p>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card } from 'ant-design-hmfw'

const tabList = [
  { key: 'article', label: '文章' },
  { key: 'app', label: '应用' },
  { key: 'project', label: '项目' },
]

const activeKey = ref('article')
</script>
