<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 禁用状态 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">禁用状态：</div>
      <Transfer v-model:target-keys="targetKeys1" :data-source="dataSource" :titles="['待选', '已选']" disabled />
    </div>

    <!-- 错误状态 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">错误状态（error）：</div>
      <Transfer v-model:target-keys="targetKeys2" :data-source="dataSource" :titles="['待选', '已选']" status="error" />
      <p style="margin-top: 8px; color: #ff4d4f; font-size: 12px">请至少选择 3 项</p>
    </div>

    <!-- 警告状态 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">警告状态（warning）：</div>
      <Transfer
        v-model:target-keys="targetKeys3"
        :data-source="dataSource"
        :titles="['待选', '已选']"
        status="warning"
      />
      <p style="margin-top: 8px; color: #faad14; font-size: 12px">建议选择 5 项以上</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from '@hmfw/ant-design'
import type { TransferItem } from '@hmfw/ant-design'

const dataSource: TransferItem[] = Array.from({ length: 10 }, (_, i) => ({
  key: String(i),
  title: `选项 ${i + 1}`,
  description: `描述 ${i + 1}`,
}))

const targetKeys1 = ref(['1', '3', '5'])
const targetKeys2 = ref(['1'])
const targetKeys3 = ref(['1', '2', '3'])
</script>
