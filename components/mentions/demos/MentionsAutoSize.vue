<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">自动高度（autoSize=true）</div>
      <Mentions
        v-model:value="value1"
        :options="options"
        :auto-size="true"
        placeholder="输入多行内容，高度会自动调整"
      />
      <div style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 14px">高度会根据内容自动调整</div>
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">限制最小/最大行数（minRows: 2, maxRows: 6）</div>
      <Mentions
        v-model:value="value2"
        :options="options"
        :auto-size="{ minRows: 2, maxRows: 6 }"
        placeholder="最少 2 行，最多 6 行"
      />
      <div style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 14px">
        最少显示 2 行，超过 6 行后出现滚动条
      </div>
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">限制最小行数（minRows: 4）</div>
      <Mentions
        v-model:value="value3"
        :options="options"
        :auto-size="{ minRows: 4 }"
        placeholder="最少 4 行，无最大行数限制"
      />
      <div style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 14px">最少显示 4 行，可以无限增长</div>
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">固定行数（rows=3）</div>
      <Mentions v-model:value="value4" :options="options" :rows="3" placeholder="固定 3 行，不自动调整" />
      <div style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 14px">
        固定 3 行高度，内容过多时出现滚动条
      </div>
    </div>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Space, Mentions } from '@hmfw/ant-design'

const options = [
  { value: 'alice', label: 'Alice' },
  { value: 'bob', label: 'Bob' },
  { value: 'charlie', label: 'Charlie' },
]

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>
