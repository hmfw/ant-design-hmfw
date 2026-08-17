<template>
  <Splitter style="height: 300px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
    <Splitter.Panel :collapsible="true" min="10%">
      <Desc text="左侧面板（可折叠）" />
    </Splitter.Panel>
    <Splitter.Panel>
      <Desc text="中间面板" />
    </Splitter.Panel>
    <Splitter.Panel :collapsible="{ start: true }" min="10%">
      <Desc text="右侧面板（可折叠）" />
    </Splitter.Panel>
  </Splitter>
</template>

<script setup lang="tsx">
import { Splitter } from '@hmfw/ant-design'
import { defineComponent } from 'vue'

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
