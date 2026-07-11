<template>
  <div style="max-width: 320px; display: flex; flex-direction: column; gap: 12px">
    <Space>
      <Button id="toggle-ellipsis" @click="enabled = !enabled">
        {{ enabled ? '关闭省略' : '开启省略' }}
      </Button>
      <Button id="change-rows" @click="rows = rows === 2 ? 3 : 2"> 切换行数 ({{ rows }}) </Button>
    </Space>
    <Paragraph :ellipsis="enabled ? { rows, tooltip: true, onEllipsis: onEllipsis } : false">
      这是一段用于测试动态省略切换的长文本内容。当省略功能启用时，文本超出容器的部分会被截断，并通过 Tooltip
      展示完整内容。关闭省略后，文本将完整显示。通过下方状态可以验证 onEllipsis 回调是否正确触发，以及行数切换时
      ResizeObserver 是否正确重建。
    </Paragraph>
    <div id="ellipsis-state" style="font-size: 12px; color: #999">省略状态: {{ isEllipsis ? '已截断' : '未截断' }}</div>
    <div id="callback-log" style="font-size: 12px; color: #666">回调记录: {{ callbackLog.join(', ') || '无' }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Paragraph, Space } from '@hmfw/ant-design'

const enabled = ref(true)
const rows = ref(2)
const isEllipsis = ref(false)
const callbackLog = ref<string[]>([])

function onEllipsis(v: boolean) {
  isEllipsis.value = v
  callbackLog.value.push(v ? '截断' : '恢复')
}
</script>
