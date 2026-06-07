<template>
  <div>
    <h3>虚拟滚动 - 10,000 个节点</h3>
    <Tree
      :tree-data="treeData"
      :default-expanded-keys="expandedKeys"
      virtual
      :height="400"
      :item-height="28"
      show-line
    />

    <div style="margin-top: 16px; color: #666">
      总节点数: {{ treeData.length }} 个根节点，约 {{ totalNodes }} 个节点
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Tree } from 'ant-design-hmfw'

// 生成大量树节点
const generateTreeData = (level: number, parentKey: string, count: number): any[] => {
  if (level > 3) return []

  return Array.from({ length: count }, (_, i) => {
    const key = `${parentKey}-${i}`
    const hasChildren = level < 3

    return {
      key,
      title: `Node ${key}`,
      children: hasChildren ? generateTreeData(level + 1, key, Math.min(10, count)) : undefined,
    }
  })
}

const treeData = generateTreeData(0, '0', 100)

// 默认展开前几个节点
const expandedKeys = ref(['0-0', '0-1', '0-0-0', '0-0-1'])

// 计算总节点数
const totalNodes = computed(() => {
  const count = (nodes: any[]): number => {
    return nodes.reduce((sum, node) => {
      return sum + 1 + (node.children ? count(node.children) : 0)
    }, 0)
  }
  return count(treeData)
})
</script>

<style scoped>
h3 {
  margin-bottom: 16px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
}
</style>
