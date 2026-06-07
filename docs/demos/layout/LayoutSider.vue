<template>
  <Layout style="min-height: 300px">
    <Header style="background: #001529; color: #fff; padding: 0 24px; line-height: 64px"> Header </Header>
    <Layout>
      <Sider :width="200" style="background: #fff; border-right: 1px solid #f0f0f0">
        <div style="padding: 16px">Sider</div>
      </Sider>
      <Content style="padding: 24px; background: #f5f5f5"> Content </Content>
    </Layout>
    <Footer style="text-align: center; background: #f5f5f5"> Footer ©2024 </Footer>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, Header, Content, Footer, Sider } from 'ant-design-hmfw'
</script>
