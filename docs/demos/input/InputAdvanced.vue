<template>
  <div class="input-advanced-demo">
    <h4>细粒度样式控制（classNames / styles）</h4>
    <Space direction="vertical" style="width: 100%; max-width: 400px">
      <Input
        v-model:value="value1"
        placeholder="自定义样式的 Input"
        :class-names="{
          affixWrapper: 'custom-wrapper',
          input: 'custom-input',
          prefix: 'custom-prefix',
          suffix: 'custom-suffix',
        }"
        :styles="{
          affixWrapper: { border: '2px solid #1890ff', borderRadius: '8px' },
          input: { color: '#1890ff', fontWeight: 'bold' },
        }"
        prefix="🔍"
        suffix="✨"
      />

      <Input
        v-model:value="value2"
        placeholder="带字符计数"
        :max-length="50"
        :show-count="true"
        :class-names="{ count: 'custom-count' }"
        :styles="{ count: { color: '#52c41a', fontWeight: 'bold' } }"
      />
    </Space>

    <h4 style="margin-top: 32px">TextArea 按键事件</h4>
    <Space direction="vertical" style="width: 100%; max-width: 400px">
      <TextArea
        v-model:value="textareaValue"
        placeholder="按 Enter 键触发事件（可以用 Ctrl+Enter 换行）"
        :rows="4"
        @press-enter="handlePressEnter"
      />
      <div v-if="pressEnterCount > 0" style="padding: 8px; background: #f0f9ff; border-radius: 4px">
        <span
          >Enter 键被按下了 <strong>{{ pressEnterCount }}</strong> 次</span
        >
      </div>
    </Space>

    <h4 style="margin-top: 32px">TextArea 自定义样式</h4>
    <TextArea
      v-model:value="styledTextareaValue"
      placeholder="带样式的 TextArea"
      :rows="3"
      :show-count="true"
      :max-length="200"
      :class-names="{ textarea: 'custom-textarea', count: 'custom-count' }"
      :styles="{
        textarea: { borderColor: '#722ed1', borderRadius: '8px' },
        count: { color: '#722ed1', fontSize: '14px' },
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input, TextArea } from '../../../components/input'
import { Space } from '../../../components/space'

const value1 = ref('')
const value2 = ref('')
const textareaValue = ref('')
const styledTextareaValue = ref('')
const pressEnterCount = ref(0)

const handlePressEnter = (e: KeyboardEvent) => {
  if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
    pressEnterCount.value++
  }
}
</script>

<style scoped>
.input-advanced-demo h4 {
  margin-bottom: 16px;
  color: #262626;
}

.input-advanced-demo :deep(.custom-wrapper) {
  transition: all 0.3s;
}

.input-advanced-demo :deep(.custom-wrapper:hover) {
  box-shadow: 0 0 8px rgba(24, 144, 255, 0.3);
}

.input-advanced-demo :deep(.custom-input::placeholder) {
  color: #91caff;
}

.input-advanced-demo :deep(.custom-prefix),
.input-advanced-demo :deep(.custom-suffix) {
  font-size: 16px;
}

.input-advanced-demo :deep(.custom-count) {
  font-family: 'Monaco', 'Courier New', monospace;
}

.input-advanced-demo :deep(.custom-textarea) {
  font-family: 'Monaco', 'Courier New', monospace;
  line-height: 1.8;
}
</style>
