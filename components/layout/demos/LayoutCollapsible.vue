<template>
  <Layout style="min-height: 400px">
    <Sider v-model:collapsed="collapsed" collapsible :width="200" :collapsed-width="80" @collapse="onCollapse">
      <div style="color: #fff; padding: 16px; text-align: center">
        {{ collapsed ? 'Menu' : 'Navigation Menu' }}
      </div>
    </Sider>
    <Layout>
      <Header style="padding: 0 24px; border-bottom: 1px solid #f0f0f0; background: #1677ff"> Header </Header>
      <Content style="margin: 24px 16px; padding: 24px; background: #fff">
        <p>Current state: {{ collapsed ? 'Collapsed' : 'Expanded' }}</p>
        <p>Collapse type: {{ collapseType }}</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider } from '@hmfw/ant-design'
import type { CollapseType } from '@hmfw/ant-design'

const collapsed = ref(false)
const collapseType = ref<CollapseType>('clickTrigger')

const onCollapse = (value: boolean, type: CollapseType) => {
  collapseType.value = type
  console.log('Collapsed:', value, 'Type:', type)
}
</script>
