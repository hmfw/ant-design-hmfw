<template>
  <Tree show-icon :tree-data="treeData" :icon="customIcon" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Tree } from '@hmfw/ant-design'
import { FolderOutlined, FileTextOutlined, FileImageOutlined, VideoCameraOutlined } from '@hmfw/icons'
import type { TreeDataNode } from '@hmfw/ant-design'

const treeData = [
  {
    title: '文档',
    key: '0-0',
    type: 'folder',
    children: [
      { title: 'README.md', key: '0-0-0', type: 'markdown' },
      { title: 'architecture.png', key: '0-0-1', type: 'image' },
    ],
  },
  {
    title: '视频',
    key: '0-1',
    type: 'folder',
    children: [{ title: 'demo.mp4', key: '0-1-0', type: 'video' }],
  },
]

// 根据节点类型渲染不同图标，叶子节点根据扩展名着色
const customIcon = (node: TreeDataNode) => {
  const type = (node as any).type
  if (type === 'folder') {
    return h(FolderOutlined, { style: { color: '#faad14' } })
  }
  if (type === 'markdown') {
    return h(FileTextOutlined, { style: { color: '#1677ff' } })
  }
  if (type === 'image') {
    return h(FileImageOutlined, { style: { color: '#52c41a' } })
  }
  if (type === 'video') {
    return h(VideoCameraOutlined, { style: { color: '#f5222d' } })
  }
  return h(FileTextOutlined, { style: { color: '#8c8c8c' } })
}
</script>
