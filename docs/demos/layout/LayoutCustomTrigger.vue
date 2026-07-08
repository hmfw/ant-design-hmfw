<template>
  <Layout style="min-height: 400px">
    <Sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div style="color: #fff; padding: 16px; text-align: center">Menu</div>
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0 24px; display: flex; align-items: center">
        <Button
          type="primary"
          shape="round"
          :icon="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined"
          @click="collapsed = !collapsed"
        ></Button>
        <span style="margin-left: 16px; color: #333">Custom Trigger in Header</span>
      </Header>
      <Content style="margin: 24px 16px; padding: 24px; background: #fff">
        <p>This example shows how to use a custom trigger.</p>
        <p>Set <code>trigger={null}</code> to hide the default trigger.</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider, Button } from '@hmfw/ant-design'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@hmfw/icons'
// <MenuFoldOutlined class="hmfw-icon" />
// <MenuUnfoldOutlined class="hmfw-icon" />
const collapsed = ref(false)
</script>
