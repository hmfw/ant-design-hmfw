<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">默认分隔符（空格）</div>
      <Mentions v-model:value="value1" :options="options" placeholder="输入 @Alice 空格 @Bob" />
      <div style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 14px">当前值：{{ value1 || '(空)' }}</div>
      <div style="margin-top: 4px; color: rgba(0, 0, 0, 0.45); font-size: 12px">
        使用空格作为分隔符，@Alice 后输入空格才会结束当前提及
      </div>
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">逗号分隔符（split=","）</div>
      <Mentions v-model:value="value2" :options="options" split="," placeholder="输入 @Alice, @Bob" />
      <div style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 14px">当前值：{{ value2 || '(空)' }}</div>
      <div style="margin-top: 4px; color: rgba(0, 0, 0, 0.45); font-size: 12px">
        使用逗号作为分隔符，@Alice 后输入逗号才会结束当前提及
      </div>
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">换行分隔符（split="\n"）</div>
      <Mentions v-model:value="value3" :options="options" split="\n" :rows="4" placeholder="输入 @Alice 回车 @Bob" />
      <div style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 14px">
        当前值：
        <pre style="display: inline">{{ value3 || '(空)' }}</pre>
      </div>
      <div style="margin-top: 4px; color: rgba(0, 0, 0, 0.45); font-size: 12px">
        使用换行作为分隔符，@Alice 后按回车才会结束当前提及，适合多行输入场景
      </div>
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">分号分隔符（split=";"）</div>
      <Mentions v-model:value="value4" :options="options" split=";" placeholder="输入 @Alice; @Bob; @Charlie" />
      <div style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 14px">当前值：{{ value4 || '(空)' }}</div>
      <div style="margin-top: 4px; color: rgba(0, 0, 0, 0.45); font-size: 12px">使用分号作为分隔符</div>
    </div>

    <div style="padding: 12px; background: #f0f0f0; border-radius: 4px">
      <div style="margin-bottom: 8px; font-weight: 500">说明：</div>
      <ul style="margin: 0; padding-left: 20px; color: rgba(0, 0, 0, 0.65)">
        <li>split 属性定义提及之间的分隔符</li>
        <li>只有在分隔符之后才会识别新的前缀字符（如 @）</li>
        <li>默认为空格，可以自定义为逗号、换行、分号等任意字符</li>
        <li>分隔符影响提及识别的边界判断逻辑</li>
      </ul>
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
  { value: 'dave', label: 'Dave' },
]

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>
