<template>
  <Space direction="vertical" style="width: 100%" size="large">
    <div>
      <h4 style="margin-top: 0"><code>type="default"</code>（默认）</h4>
      <Steps type="default" :current="1" :items="items" />
    </div>
    <div>
      <h4 style="margin-top: 0"><code>type="dot"</code></h4>
      <Steps type="dot" :current="1" :items="items" />
    </div>
    <div>
      <h4 style="margin-top: 0"><code>type="inline"</code></h4>
      <Steps type="inline" :current="1" :items="items" />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { Steps, Space } from '@hmfw/ant-design'

const items = [
  { title: 'Step 1', content: 'First step description' },
  { title: 'Step 2', content: 'Second step description' },
  { title: 'Step 3', content: 'Third step description' },
  { title: 'Step 4', content: 'Fourth step description' },
]
</script>
