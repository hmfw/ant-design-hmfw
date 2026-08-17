<template>
  <Space direction="vertical" :size="16" style="width: 100%">
    <div>
      <h4 style="margin-bottom: 8px">自定义根节点（classNames.root + styles.root）</h4>
      <Splitter
        style="height: 200px"
        :class-names="{ root: 'style-root' }"
        :styles="{ root: { backgroundColor: '#fffbe6' } }"
      >
        <Splitter.Panel>
          <Desc text="左侧" />
        </Splitter.Panel>
        <Splitter.Panel>
          <Desc text="右侧" />
        </Splitter.Panel>
      </Splitter>
    </div>

    <div>
      <h4 style="margin-bottom: 8px">自定义拖拽条：字符串形式（classNames.dragger）</h4>
      <Splitter style="height: 200px" :class-names="{ dragger: 'style-dragger' }">
        <Splitter.Panel>
          <Desc text="左侧" />
        </Splitter.Panel>
        <Splitter.Panel>
          <Desc text="右侧" />
        </Splitter.Panel>
      </Splitter>
    </div>

    <div>
      <h4 style="margin-bottom: 8px">自定义拖拽条：区分默认与激活状态（styles.dragger）</h4>
      <Splitter
        style="height: 200px"
        :styles="{
          dragger: {
            default: { backgroundColor: 'rgba(194, 223, 252, 0.4)' },
            active: { backgroundColor: 'rgba(22, 119, 255, 0.4)' },
          },
        }"
      >
        <Splitter.Panel>
          <Desc text="拖拽时激活样式生效" />
        </Splitter.Panel>
        <Splitter.Panel>
          <Desc text="右侧" />
        </Splitter.Panel>
      </Splitter>
    </div>

    <div>
      <h4 style="margin-bottom: 8px">自定义面板（classNames.panel + styles.panel）</h4>
      <Splitter style="height: 200px" :class-names="{ panel: 'style-panel' }" :styles="{ panel: { padding: '16px' } }">
        <Splitter.Panel>
          <Desc text="面板样式已自定义" />
        </Splitter.Panel>
        <Splitter.Panel>
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

<style scoped>
:deep(.style-root) {
  border: 2px dashed var(--hmfw-color-primary);
}

:deep(.style-dragger) {
  background: rgba(22, 119, 255, 0.4);
}

:deep(.style-panel) {
  background: var(--hmfw-color-fill-quaternary);
}
</style>
