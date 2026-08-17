<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">单行（rows=1，默认）</div>
      <Mentions :options="options" :rows="1" placeholder="单行输入" />
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">3 行</div>
      <Mentions :options="options" :rows="3" placeholder="3 行输入框" />
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">5 行</div>
      <Mentions :options="options" :rows="5" placeholder="5 行输入框" />
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">8 行</div>
      <Mentions :options="options" :rows="8" placeholder="8 行输入框，适合长文本输入" />
    </div>

    <div style="padding: 12px; background: #f0f0f0; border-radius: 4px">
      <div style="margin-bottom: 8px; font-weight: 500">说明：</div>
      <ul style="margin: 0; padding-left: 20px; color: rgba(0, 0, 0, 0.65)">
        <li>rows 属性控制 textarea 的固定行数</li>
        <li>内容超出时会出现垂直滚动条</li>
        <li>如需自适应高度，请使用 autoSize 属性</li>
      </ul>
    </div>
  </Space>
</template>

<script setup lang="ts">
import { Space, Mentions } from '@hmfw/ant-design'

const options = [
  { value: 'alice', label: 'Alice' },
  { value: 'bob', label: 'Bob' },
  { value: 'charlie', label: 'Charlie' },
  { value: 'dave', label: 'Dave' },
]
</script>
