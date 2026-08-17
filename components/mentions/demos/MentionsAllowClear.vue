<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">带清除按钮</div>
      <Mentions
        v-model:value="value1"
        :options="options"
        allow-clear
        placeholder="输入内容后可以清除"
        @clear="handleClear"
      />
      <div style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 14px">当前值：{{ value1 || '(空)' }}</div>
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">禁用状态（不显示清除按钮）</div>
      <Mentions v-model:value="value2" :options="options" allow-clear disabled placeholder="禁用状态" />
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">只读状态（不显示清除按钮）</div>
      <Mentions v-model:value="value3" :options="options" allow-clear readonly placeholder="只读状态" />
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">无清除按钮</div>
      <Mentions v-model:value="value4" :options="options" placeholder="不显示清除按钮" />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Space, Mentions, message } from '@hmfw/ant-design'

const options = [
  { value: 'alice', label: 'Alice' },
  { value: 'bob', label: 'Bob' },
  { value: 'charlie', label: 'Charlie' },
]

const value1 = ref('@Alice 你好')
const value2 = ref('@Bob 禁用')
const value3 = ref('@Charlie 只读')
const value4 = ref('')

const handleClear = () => {
  message.success('已清除内容')
}
</script>
