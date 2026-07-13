<template>
  <Space direction="vertical" style="width: 100%" size="large">
    <div>
      <h4 style="margin-top: 0"><code>size="small"</code></h4>
      <Steps size="small" :current="1" :items="items" />
    </div>
    <div>
      <h4 style="margin-top: 0"><code>size="middle"</code>（默认）</h4>
      <Steps size="middle" :current="1" :items="items" />
    </div>
    <div>
      <h4 style="margin-top: 0"><code>size="large"</code></h4>
      <Steps size="large" :current="1" :items="items" />
    </div>
    <div>
      <h4 style="margin-top: 0"><code>size="small"</code> + <code>titlePlacement="vertical"</code></h4>
      <Steps size="small" :current="1" :items="items" title-placement="vertical" />
    </div>
    <div>
      <h4 style="margin-top: 0"><code>size="middle"</code> + <code>titlePlacement="vertical"</code>（默认）</h4>
      <Steps size="middle" :current="1" :items="items" title-placement="vertical" />
    </div>
    <div>
      <h4 style="margin-top: 0"><code>size="large"</code> + <code>titlePlacement="vertical"</code></h4>
      <Steps size="large" :current="1" :items="items" title-placement="vertical" />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { Steps, Space } from '@hmfw/ant-design'

const items = [
  { title: '已完成', content: '这是一段描述文字。' },
  { title: '进行中', content: '这是一段描述文字。' },
  { title: '待处理', content: '这是一段描述文字。' },
]
</script>
