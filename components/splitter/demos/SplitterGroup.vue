<template>
  <Splitter style="height: 400px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
    <!-- 左侧边栏 -->
    <Splitter.Panel default-size="20%" min="15%" max="30%" :collapsible="true">
      <Desc text="左侧边栏" />
    </Splitter.Panel>

    <!-- 右侧主区域 -->
    <Splitter.Panel>
      <Splitter orientation="vertical">
        <!-- 顶部内容区 -->
        <Splitter.Panel>
          <Splitter>
            <Splitter.Panel>
              <Desc text="主内容区" />
            </Splitter.Panel>
            <Splitter.Panel default-size="30%" :collapsible="{ start: true }">
              <Desc text="右侧面板" />
            </Splitter.Panel>
          </Splitter>
        </Splitter.Panel>

        <!-- 底部控制台 -->
        <Splitter.Panel default-size="30%" :collapsible="{ start: true }">
          <Desc text="底部控制台" />
        </Splitter.Panel>
      </Splitter>
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
