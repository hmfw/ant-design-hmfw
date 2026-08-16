<template>
  <Layout style="min-height: 360px">
    <Header style="position: sticky; top: 0; z-index: 1; display: flex; align-items: center; padding: 0 24px">
      <div style="color: #fff; font-size: 16px; font-weight: 600; white-space: nowrap; margin-right: 24px">
        Fixed Header
      </div>
      <Menu
        v-model:selected-keys="selectedKeys"
        mode="horizontal"
        theme="dark"
        :items="navItems"
        style="flex: 1; min-width: 0; background: transparent"
      />
    </Header>
    <Content style="padding: 0 24px">
      <div
        style="
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          padding: 24px 0;
          max-height: 220px;
          overflow-y: auto;
        "
      >
        <div v-for="i in 8" :key="i" style="padding: 32px; background: #fff; text-align: center; border-radius: 8px">
          内容卡片 {{ i }}
        </div>
      </div>
    </Content>
    <Footer style="text-align: center">滚动内容区时，Header 保持固定在顶部</Footer>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Footer, Menu } from '@hmfw/ant-design'
import type { ItemType } from '@hmfw/ant-design'

const selectedKeys = ref(['2'])

const navItems: ItemType[] = [
  { key: '1', label: '导航一' },
  { key: '2', label: '导航二' },
  { key: '3', label: '导航三' },
]
</script>
