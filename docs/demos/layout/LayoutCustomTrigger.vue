<template>
  <Layout style="min-height: 400px">
    <Sider
      :trigger="null"
      v-model:collapsed="collapsed"
      collapsible
      style="background: #001529;"
    >
      <div style="color: #fff; padding: 16px; text-align: center;">
        Menu
      </div>
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0 24px; line-height: 64px; display: flex; align-items: center;">
        <button
          @click="collapsed = !collapsed"
          style="border: none; background: none; cursor: pointer; font-size: 18px; padding: 8px;"
        >
          {{ collapsed ? '☰' : '✕' }}
        </button>
        <span style="margin-left: 16px;">Custom Trigger in Header</span>
      </Header>
      <Content style="padding: 24px; background: #f5f5f5;">
        <p>This example shows how to use a custom trigger.</p>
        <p>Set <code>trigger={null}</code> to hide the default trigger.</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider } from 'ant-design-hmfw'

const collapsed = ref(false)
</script>
