<template>
  <div class="home">
    <NavBar />
    <div class="home__hero">
      <h1 class="home__name">ant-design-hmfw</h1>
      <p class="home__text">Vue3 UI 组件库</p>
      <p class="home__tagline">基于 Ant Design v6 设计规范，使用 TypeScript + TSX 原生实现</p>
      <div class="home__actions">
        <RouterLink to="/guide/getting-started" class="home__btn home__btn--brand">快速上手</RouterLink>
        <RouterLink to="/components/button" class="home__btn home__btn--alt">组件文档</RouterLink>
      </div>
    </div>
    <div class="home__features">
      <div v-for="f in features" :key="f.title" class="home__feature">
        <div class="home__feature-icon">{{ f.icon }}</div>
        <div class="home__feature-title">{{ f.title }}</div>
        <div class="home__feature-details">{{ f.details }}</div>
      </div>
    </div>
    <footer class="home__footer">
      <p>Released under the MIT License.</p>
      <p>Copyright © 2026 ant-design-hmfw</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue'

const features = [
  { icon: '⚡', title: '高性能', details: '基于 esbuild 的 tsup 构建，支持 Tree Shaking 按需加载' },
  { icon: '🎨', title: '主题定制', details: '完整的 CSS Variables 设计 Token 系统，轻松定制品牌色' },
  { icon: '🔒', title: '类型安全', details: '完整的 TypeScript 类型定义，提供优秀的 IDE 支持' },
  { icon: '🧪', title: '测试覆盖', details: '55 个测试文件，538 个测试用例，全部通过' },
  { icon: '📦', title: '58 个组件', details: '覆盖表单、数据展示、反馈、导航等各类场景' },
  { icon: '🌐', title: '国际化', details: '内置中文和英文语言包，支持自定义语言' },
]
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.home__hero {
  padding: 96px 24px 64px;
  text-align: center;
  background: linear-gradient(180deg, rgba(22, 119, 255, 0.04) 0%, transparent 100%);
}

.home__name {
  font-size: 56px;
  font-weight: 700;
  color: #1677ff;
  margin: 0 0 8px;
  line-height: 1.2;
}

.home__text {
  font-size: 28px;
  font-weight: 600;
  color: var(--doc-c-text-1);
  margin: 0 0 12px;
}

.home__tagline {
  font-size: 16px;
  color: var(--doc-c-text-2);
  margin: 0 0 32px;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
}

.home__actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.home__btn {
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.2s, box-shadow 0.2s;
}

.home__btn--brand {
  background: #1677ff;
  color: #fff;
}

.home__btn--brand:hover {
  opacity: 0.88;
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.3);
}

.home__btn--alt {
  background: var(--doc-c-bg-alt);
  color: var(--doc-c-text-1);
  border: 1px solid var(--doc-c-border);
}

.home__btn--alt:hover {
  border-color: #1677ff;
  color: #1677ff;
}

.home__features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px 64px;
}

.home__feature {
  padding: 24px;
  border: 1px solid var(--doc-c-divider);
  border-radius: 8px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.home__feature:hover {
  border-color: #1677ff;
  box-shadow: 0 4px 16px rgba(22, 119, 255, 0.12);
}

.home__feature-icon {
  font-size: 28px;
  margin-bottom: 12px;
}

.home__feature-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--doc-c-text-1);
  margin-bottom: 8px;
}

.home__feature-details {
  font-size: 14px;
  color: var(--doc-c-text-2);
  line-height: 1.6;
}

.home__footer {
  margin-top: auto;
  padding: 24px;
  text-align: center;
  border-top: 1px solid var(--doc-c-divider);
  color: var(--doc-c-text-2);
  font-size: 13px;
}

.home__footer p {
  margin: 4px 0;
}

@media (max-width: 768px) {
  .home__name { font-size: 40px; }
  .home__features { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .home__features { grid-template-columns: 1fr; }
}
</style>
