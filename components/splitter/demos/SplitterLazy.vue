<template>
  <Splitter :lazy="true" style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
    <Splitter.Panel default-size="30%">
      <Desc text="拖拽时预览" />
    </Splitter.Panel>
    <Splitter.Panel>
      <Desc text="松开后应用" />
    </Splitter.Panel>
  </Splitter>
</template>

<script setup lang="tsx">
import { defineComponent } from 'vue'
import { Splitter } from '@hmfw/ant-design'

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
