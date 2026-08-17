<template>
  <Space direction="vertical" :size="16" style="width: 100%">
    <div>
      <h4 style="margin-bottom: 8px">自定义拖拽图标</h4>
      <Splitter style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)" :dragger-icon="draggerIcon">
        <Splitter.Panel>
          <Desc text="左侧" />
        </Splitter.Panel>
        <Splitter.Panel>
          <Desc text="右侧" />
        </Splitter.Panel>
      </Splitter>
    </div>

    <div>
      <h4 style="margin-bottom: 8px">自定义折叠图标</h4>
      <Splitter
        style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)"
        :collapsible="{
          icon: {
            start: collapseStartIcon,
            end: collapseEndIcon,
          },
        }"
      >
        <Splitter.Panel :collapsible="true">
          <Desc text="左侧" />
        </Splitter.Panel>
        <Splitter.Panel :collapsible="true">
          <Desc text="右侧" />
        </Splitter.Panel>
      </Splitter>
    </div>

    <div>
      <h4 style="margin-bottom: 8px">组合自定义</h4>
      <Splitter
        style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)"
        :dragger-icon="draggerIcon"
        :collapsible="{
          icon: {
            start: collapseStartIcon,
            end: collapseEndIcon,
          },
        }"
      >
        <Splitter.Panel :collapsible="true">
          <Desc text="左侧" />
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
import { DragOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@hmfw/icons'
import { defineComponent } from 'vue'

const draggerIcon = <DragOutlined />
const collapseStartIcon = <DoubleLeftOutlined />
const collapseEndIcon = <DoubleRightOutlined />

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
