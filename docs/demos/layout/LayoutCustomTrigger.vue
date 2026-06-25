<template>
  <Layout style="min-height: 400px">
    <Sider v-model:collapsed="collapsed" :trigger="null" collapsible style="background: #001529">
      <div style="color: #fff; padding: 16px; text-align: center">Menu</div>
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0 24px; line-height: 64px; display: flex; align-items: center">
        <Button
          style="border: none; background: none; cursor: pointer; font-size: 18px; padding: 8px"
          @click="collapsed = !collapsed"
        >
          {{ collapsed ? '☰' : '✕' }}
        </Button>
        <span style="margin-left: 16px">Custom Trigger in Header</span>
      </Header>
      <Content style="padding: 24px; background: #f5f5f5">
        <p>This example shows how to use a custom trigger.</p>
        <p>Set <code>trigger={null}</code> to hide the default trigger.</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider, Button } from '@hmfw/ant-design'

const collapsed = ref(false)
</script>
