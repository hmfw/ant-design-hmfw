<template>
  <div>
    <div style="margin-bottom: 16px">
      <button
        style="padding: 8px 16px; cursor: pointer; border: 1px solid #d9d9d9; border-radius: 4px; background: #fff"
        @click="toggleTheme"
      >
        切换主题 (当前: {{ theme === 'dark' ? '暗色' : '亮色' }})
      </button>
    </div>
    <Layout style="min-height: 400px">
      <Sider :theme="theme" collapsible>
        <div style="padding: 16px; color: inherit">
          <div style="margin-bottom: 12px">菜单项 1</div>
          <div style="margin-bottom: 12px">菜单项 2</div>
          <div style="margin-bottom: 12px">菜单项 3</div>
          <div style="margin-bottom: 12px">菜单项 4</div>
        </div>
      </Sider>
      <Layout>
        <Header
          style="background: #fff; padding: 0 24px; line-height: 64px; box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08)"
        >
          <h2 style="margin: 0; color: #000">主题切换演示</h2>
        </Header>
        <Content style="margin: 24px 16px; padding: 24px; background: #fff">
          <p>侧边栏支持 light 和 dark 两种主题。</p>
          <p>主题切换时，背景色、文字颜色和边框颜色会平滑过渡（0.3s），提供流畅的视觉体验。</p>
          <p>宽度变化保持快速响应（0.2s），确保交互的即时反馈。</p>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider } from '../../../components/layout'

const theme = ref<'light' | 'dark'>('dark')

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>
