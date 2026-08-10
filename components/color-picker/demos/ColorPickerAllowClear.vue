<template>
  <Space direction="vertical" :size="16">
    <ColorPicker v-model:value="color" show-text allow-clear @clear="onClear" />
    <div class="tip">
      当前值：<code>{{ color || '(已清除)' }}</code>
      <span v-if="clearCount > 0" class="count">清除次数：{{ clearCount }}</span>
    </div>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorPicker, Space } from '@hmfw/ant-design'

const color = ref<string | undefined>('#52c41a')
const clearCount = ref(0)

function onClear() {
  clearCount.value += 1
}
</script>

<style scoped>
.tip {
  font-size: 13px;
  color: #666;
}

.tip code {
  padding: 2px 6px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  font-family: monospace;
}

.count {
  margin-left: 12px;
  color: #999;
}
</style>
