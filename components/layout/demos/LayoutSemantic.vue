<template>
  <Layout style="min-height: 300px">
    <Sider
      v-model:collapsed="collapsed"
      collapsible
      :width="200"
      :styles="{ root: siderRootStyle, body: { padding: '16px' } }"
      :class-names="{ root: collapsed ? 'semantic-sider-collapsed' : 'semantic-sider-expanded' }"
    >
      <div style="color: inherit; text-align: center">
        {{ collapsed ? 'Menu' : 'Navigation Menu' }}
      </div>
    </Sider>
    <Layout>
      <Content style="margin: 24px 16px; padding: 24px; background: #fff">
        <p>语义化 API 允许精细化控制组件各节点样式：</p>
        <ul style="margin: 8px 0 0 20px; line-height: 1.8">
          <li><code>styles.root</code>：侧边栏根容器背景色（随折叠状态切换）</li>
          <li><code>styles.body</code>：内容包装容器内边距</li>
          <li><code>classNames.root</code>：按折叠状态挂载自定义类名</li>
        </ul>
        <p style="margin-top: 12px; color: #666">当前状态：{{ collapsed ? '已折叠' : '已展开' }}</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Layout, Content, Sider } from '@hmfw/ant-design'

const collapsed = ref(false)

// 根容器样式随折叠状态切换，演示 styles.root 的动态能力
const siderRootStyle = computed(() => ({
  background: collapsed.value ? '#003a70' : '#001529',
}))
</script>
