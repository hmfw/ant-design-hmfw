<template>
  <Layout style="min-height: 400px">
    <Sider
      breakpoint="lg"
      :collapsed-width="0"
      style="background: #001529"
      @breakpoint="onBreakpoint"
      @collapse="onCollapse"
    >
      <div style="color: #fff; padding: 16px">
        <div style="margin-bottom: 16px">Navigation</div>
        <div style="font-size: 12px; opacity: 0.65">Resize window to see responsive behavior</div>
      </div>
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0 24px; line-height: 64px"> Responsive Layout </Header>
      <Content style="padding: 24px; background: #f5f5f5">
        <p>Breakpoint: lg (992px)</p>
        <p>Below breakpoint: {{ isBelowBreakpoint ? 'Yes' : 'No' }}</p>
        <p>Collapsed: {{ isCollapsed ? 'Yes' : 'No' }}</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider } from 'ant-design-hmfw'
import type { CollapseType } from 'ant-design-hmfw'

const isBelowBreakpoint = ref(false)
const isCollapsed = ref(false)

const onBreakpoint = (broken: boolean) => {
  isBelowBreakpoint.value = broken
  console.log('Breakpoint:', broken)
}

const onCollapse = (collapsed: boolean, type: CollapseType) => {
  isCollapsed.value = collapsed
  console.log('Collapsed:', collapsed, 'Type:', type)
}
</script>
