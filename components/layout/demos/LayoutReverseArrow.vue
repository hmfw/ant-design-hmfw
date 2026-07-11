<template>
  <Layout style="min-height: 300px">
    <Sider v-model:collapsed="collapsed" collapsible :reverse-arrow="true" :width="200" :collapsed-width="80">
      <div style="color: #fff; padding: 16px; text-align: center">{{ collapsed ? '←' : '→' }} Sidebar</div>
    </Sider>
    <Layout>
      <Header style="background: #1677ff; padding: 0 24px; border-bottom: 1px solid #f0f0f0"> reverseArrow </Header>
      <Content style="margin: 24px 16px; padding: 24px; background: #fff">
        <p><code>reverseArrow</code> 为 <code>true</code> 时，箭头方向会被翻转。</p>
        <p>展开状态：显示右箭头 → 点击后向右侧收起</p>
        <p>折叠状态：显示左箭头 ← 点击后向左侧展开</p>
        <p style="margin-top: 16px; color: #666">当前状态：{{ collapsed ? '已折叠' : '已展开' }}</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider } from '@hmfw/ant-design'

const collapsed = ref(false)
</script>
