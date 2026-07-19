<template>
  <div>
    <p style="margin-bottom: 12px; color: rgba(0, 0, 0, 0.65)">大数据量场景（1000 项）使用虚拟滚动优化性能</p>
    <Transfer
      v-model:target-keys="targetKeys"
      :data-source="dataSource"
      :titles="['源列表（1000 项）', '目标列表']"
      virtual
      :list-height="400"
      :list-item-height="40"
      show-search
    />
    <div style="margin-top: 12px; color: rgba(0, 0, 0, 0.45); font-size: 12px">
      <p>✅ 虚拟滚动已启用，仅渲染可见区域的列表项</p>
      <p>✅ 当前数据量：{{ dataSource.length }} 项，已选：{{ targetKeys.length }} 项</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from '@hmfw/ant-design'
import type { TransferItem } from '@hmfw/ant-design'

// 生成 1000 条数据
const dataSource: TransferItem[] = Array.from({ length: 1000 }, (_, i) => ({
  key: String(i),
  title: `选项 ${i + 1}`,
  description: `这是选项 ${i + 1} 的描述信息`,
  disabled: i % 100 === 0, // 每 100 项禁用一个
}))

// 默认选中前 50 项
const targetKeys = ref<string[]>(Array.from({ length: 50 }, (_, i) => String(i)))
</script>
