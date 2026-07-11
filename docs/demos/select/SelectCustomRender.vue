<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <Select
      v-model:value="single"
      :options="options"
      placeholder="自定义选项渲染 optionRender"
      style="width: 100%"
      :option-render="renderOption"
    />
    <Select
      v-model:value="tags"
      :options="options"
      mode="multiple"
      placeholder="自定义标签渲染 tagRender"
      style="width: 100%"
      :tag-render="renderTag"
    />
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
import { Select } from '@hmfw/ant-design'
import type { SelectOption } from '@hmfw/ant-design'

const single = ref<string>()
const tags = ref<string[]>(['vue'])

const options: SelectOption[] = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
]

// 自定义选项：图标 + 文本
const renderOption = (option: SelectOption) => (
  <span style="display: flex; align-items: center; gap: 8px">
    <span style="width: 8px; height: 8px; border-radius: 50%; background: #1677ff" />
    {option.label}
  </span>
)

// 自定义标签：带边框的胶囊样式
const renderTag = (props: { label: string; value: string | number; closable: boolean; onClose: () => void }) => (
  <span style="display: inline-flex; align-items: center; gap: 4px; padding: 0 8px; margin: 2px; border: 1px solid #1677ff; border-radius: 10px; color: #1677ff">
    {props.label}
    {props.closable && (
      <span style="cursor: pointer" onClick={props.onClose}>
        ×
      </span>
    )}
  </span>
)
</script>
