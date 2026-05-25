<template>
  <Layout style="min-height: 300px">
    <Sider
      v-model:collapsed="collapsed"
      collapsible
      :width="200"
      :collapsed-width="64"
      style="background: #001529;"
    >
      <div style="color: #fff; padding: 16px; text-align: center;">
        {{ collapsed ? '收' : '导航菜单' }}
      </div>
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0 24px; border-bottom: 1px solid #f0f0f0; line-height: 64px;">
        Header
      </Header>
      <Content style="padding: 24px; background: #f5f5f5;">
        <p>当前状态：{{ collapsed ? '已折叠' : '已展开' }}</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider } from 'ant-design-hmfw'

const collapsed = ref(false)
</script>
