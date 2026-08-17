<template>
  <div>
    <Space style="margin-bottom: 16px">
      <Button @click="setSizes([30, 70])">30% / 70%</Button>
      <Button @click="setSizes([50, 50])">50% / 50%</Button>
      <Button @click="setSizes([70, 30])">70% / 30%</Button>
    </Space>
    <Splitter style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)" @resize="handleResize">
      <Splitter.Panel :size="sizes[0] + '%'">
        <Desc :text="`左侧 ${sizes[0]}%`" />
      </Splitter.Panel>
      <Splitter.Panel :size="sizes[1] + '%'">
        <Desc :text="`右侧 ${sizes[1]}%`" />
      </Splitter.Panel>
    </Splitter>
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
import { Splitter, Button, Space } from '@hmfw/ant-design'
import { defineComponent } from 'vue'

const sizes = ref([40, 60])

const setSizes = (newSizes: number[]) => {
  sizes.value = newSizes
}

const handleResize = (newSizes: number[]) => {
  // 将 px 转为百分比
  const total = newSizes.reduce((a, b) => a + b, 0)
  if (total > 0) {
    sizes.value = newSizes.map((s) => Math.round((s / total) * 100))
  }
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
