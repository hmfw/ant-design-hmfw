<template>
  <Splitter style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
    <Splitter.Panel default-size="40%" min="20%" max="70%">
      <Desc text="第一个面板" />
    </Splitter.Panel>
    <Splitter.Panel>
      <Desc text="第二个面板" />
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h5 style={{ color: 'var(--hmfw-color-text-secondary)', whiteSpace: 'nowrap' }}>{props.text}</h5>
      </div>
    )
  },
})
</script>
