<template>
  <Layout style="min-height: 400px">
    <Header style="display: flex; align-items: center; padding: 0 24px">
      <div style="color: #fff; font-size: 16px; font-weight: 600; white-space: nowrap">hmfw Admin</div>
      <Menu
        v-model:selected-keys="selectedKeys"
        mode="horizontal"
        theme="dark"
        :items="navItems"
        style="flex: 1; min-width: 0; background: transparent"
      />
    </Header>
    <Layout>
      <Sider :width="200">
        <Menu
          v-model:selected-keys="siderSelectedKeys"
          mode="inline"
          theme="dark"
          :items="siderItems"
          style="height: 100%"
        />
      </Sider>
      <Layout>
        <Content style="margin: 16px">
          <Breadcrumb :items="breadcrumbItems" style="margin-bottom: 16px" />
          <div style="padding: 24px; background: #fff; min-height: 240px">Content</div>
        </Content>
        <Footer style="text-align: center">Footer ©2026 Created by hmfw</Footer>
      </Layout>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Footer, Sider, Menu, Breadcrumb } from '@hmfw/ant-design'
import type { ItemType } from '@hmfw/ant-design'

const selectedKeys = ref(['1'])
const siderSelectedKeys = ref(['sub1'])

const navItems: ItemType[] = [
  { key: '1', label: '导航一' },
  { key: '2', label: '导航二' },
  { key: '3', label: '导航三' },
]

const siderItems: ItemType[] = [
  { key: 'sub1', label: '选项一' },
  { key: 'sub2', label: '选项二' },
  { key: 'sub3', label: '选项三' },
  { key: 'sub4', label: '选项四' },
]

const breadcrumbItems = [{ title: 'Home' }, { title: 'List' }, { title: 'App' }]
</script>
