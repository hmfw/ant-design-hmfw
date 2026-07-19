<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 自定义全选文案 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义全选文案（selectAllLabels）：</div>
      <Transfer
        v-model:target-keys="targetKeys1"
        :data-source="dataSource"
        :titles="['可选项', '已选项']"
        :select-all-labels="[
          (info) => `共 ${info.totalCount} 个，已选 ${info.selectedCount} 个`,
          (info) => `目标列表（${info.selectedCount}/${info.totalCount}）`,
        ]"
      />
    </div>

    <!-- 自定义搜索匹配逻辑 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义搜索匹配逻辑（filterOption）：</div>
      <Transfer
        v-model:target-keys="targetKeys2"
        :data-source="dataSource"
        :titles="['源列表', '目标列表']"
        show-search
        :filter-option="customFilter"
      />
      <p style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 12px">
        💡 仅匹配 key 值（不匹配 title），尝试搜索"1"、"2"
      </p>
    </div>

    <!-- 自定义 rowKey -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义 rowKey 提取：</div>
      <Transfer
        v-model:target-keys="targetKeys3"
        :data-source="customDataSource"
        :titles="['用户列表', '已选用户']"
        :row-key="(item) => item.id"
        :render="(item) => `${item.name} (${item.email})`"
      />
      <p style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 12px">
        💡 数据源使用 id 作为唯一标识（非默认的 key 字段）
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from '@hmfw/ant-design'
import type { TransferItem } from '@hmfw/ant-design'

// 标准数据源
const dataSource: TransferItem[] = Array.from({ length: 10 }, (_, i) => ({
  key: String(i),
  title: `选项 ${i + 1}`,
  description: `描述 ${i + 1}`,
}))

const targetKeys1 = ref(['1', '3', '5'])
const targetKeys2 = ref(['2', '4'])

// 自定义搜索匹配：仅匹配 key
function customFilter(inputValue: string, item: TransferItem) {
  return String(item.key).includes(inputValue)
}

// 自定义数据源（使用 id 而非 key）
interface User {
  id: number
  name: string
  email: string
}

const customDataSource: User[] = [
  { id: 101, name: '张三', email: 'zhangsan@example.com' },
  { id: 102, name: '李四', email: 'lisi@example.com' },
  { id: 103, name: '王五', email: 'wangwu@example.com' },
  { id: 104, name: '赵六', email: 'zhaoliu@example.com' },
  { id: 105, name: '钱七', email: 'qianqi@example.com' },
]

const targetKeys3 = ref<number[]>([101, 103])
</script>
