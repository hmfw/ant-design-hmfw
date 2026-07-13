<template>
  <Space direction="vertical" style="width: 100%" size="large">
    <!-- 默认：filled 变体 -->
    <div>
      <h4 style="margin-top: 0">默认变体 <code>variant="filled"</code>（实心填充）</h4>
      <Steps :current="1" :items="items" variant="filled" />
    </div>

    <!-- outlined 变体 -->
    <div>
      <h4 style="margin-top: 0"><code>variant="outlined"</code>（描边样式）</h4>
      <Steps :current="1" :items="items" variant="outlined" />
    </div>

    <!-- outlined + small -->
    <div>
      <h4 style="margin-top: 0"><code>variant="outlined"</code> + <code>size="small"</code></h4>
      <Steps :current="1" :items="items" variant="outlined" size="small" />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { Steps, Space } from '@hmfw/ant-design'

const items = [
  { title: 'Finished', subTitle: 'This is a subtitle', content: 'This is a description.' },
  { title: 'In Progress', subTitle: 'Left 00:00:08', content: 'This is a description.' },
  { title: 'Waiting', subTitle: 'Waiting for action', content: 'This is a description.' },
]
</script>
