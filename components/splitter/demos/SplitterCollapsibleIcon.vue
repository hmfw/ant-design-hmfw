<template>
  <Space direction="vertical" :size="16" style="width: 100%">
    <div>
      <h4 style="margin-bottom: 8px">始终显示折叠图标</h4>
      <Splitter style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
        <Splitter.Panel :collapsible="{ start: false, end: true, showCollapsibleIcon: true }">
          <Desc text="左侧" />
        </Splitter.Panel>
        <Splitter.Panel :collapsible="{ start: true, end: false, showCollapsibleIcon: true }">
          <Desc text="右侧" />
        </Splitter.Panel>
      </Splitter>
    </div>

    <div>
      <h4 style="margin-bottom: 8px">始终隐藏折叠图标</h4>
      <Splitter style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
        <Splitter.Panel :collapsible="{ start: false, end: true, showCollapsibleIcon: false }">
          <Desc text="左侧" />
        </Splitter.Panel>
        <Splitter.Panel :collapsible="{ start: true, end: false, showCollapsibleIcon: false }">
          <Desc text="右侧（可折叠但无图标）" />
        </Splitter.Panel>
      </Splitter>
    </div>

    <div>
      <h4 style="margin-bottom: 8px">Hover 显示（默认）</h4>
      <Splitter style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
        <Splitter.Panel :collapsible="true">
          <Desc text="左侧（hover 分隔条显示图标）" />
        </Splitter.Panel>
        <Splitter.Panel :collapsible="true">
          <Desc text="右侧" />
        </Splitter.Panel>
      </Splitter>
    </div>
  </Space>
</template>

<script setup lang="tsx">
import { Splitter, Space } from '@hmfw/ant-design'
import { defineComponent } from 'vue'

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
