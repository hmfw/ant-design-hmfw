<template>
  <Layout style="min-height: 300px">
    <Header style="background: #1677ff"> Header </Header>
    <Layout>
      <Sider :width="200">
        <div style="padding: 16px">Sider</div>
      </Sider>
      <Content style="margin: 24px 16px; padding: 24px; background: #fff"> Content </Content>
    </Layout>
    <Footer style="text-align: center"> Footer ©2024 </Footer>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, Header, Content, Footer, Sider } from '@hmfw/ant-design'
</script>
