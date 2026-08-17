<template>
  <div>
    <Alert message="提示：双击拖拽条可重置为默认尺寸" type="info" style="margin-bottom: 16px" />
    <Splitter
      style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)"
      @dragger-double-click="handleReset"
      @resize="handleResize"
    >
      <Splitter.Panel :size="sizes[0]" default-size="40%">
        <Desc :text="`左侧 ${formatSize(sizes[0], 40)}`" />
      </Splitter.Panel>
      <Splitter.Panel :size="sizes[1]" default-size="60%">
        <Desc :text="`右侧 ${formatSize(sizes[1], 60)}`" />
      </Splitter.Panel>
    </Splitter>
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
import { Splitter, Alert, message } from '@hmfw/ant-design'
import { defineComponent } from 'vue'

const sizes = ref<(number | string | undefined)[]>([undefined, undefined])

const handleReset = () => {
  sizes.value = [undefined, undefined]
  message.success('已重置为默认尺寸（40% / 60%）')
}

const handleResize = (newSizes: number[]) => {
  // 保存 px 值用于受控
  sizes.value = newSizes
}

const formatSize = (size: number | string | undefined, defaultPercent: number) => {
  if (size === undefined) return `${defaultPercent}%`
  if (typeof size === 'string') return size
  // 假设容器宽度，转换为百分比显示
  return `${Math.round((size / (size + (sizes.value[0] === size ? (sizes.value[1] as number) : (sizes.value[0] as number)))) * 100)}%`
}

const Desc = defineComponent({
  props: {
    text: { type: String, default: '' },
  },
  setup(props) {
    return () => (
      <div style="display: flex; justify-content: center; align-items: center; height: 100%">
        <h5 style="color: var(--hmfw-color-text-secondary); white-space: nowrap">{props.text}</h5>
      </div>
    )
  },
})
</script>
