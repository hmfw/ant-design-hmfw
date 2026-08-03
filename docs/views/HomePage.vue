<template>
  <div class="home">
    <NavBar />
    <div class="home__hero">
      <h1 class="home__name">@hmfw/ant-design</h1>
      <p class="home__text">Vue3 UI 组件库</p>
      <p class="home__tagline">基于 Ant Design v6 设计规范，使用 TypeScript + TSX 原生实现</p>
      <div class="home__actions">
        <RouterLink to="/guide/getting-started" class="home__btn home__btn--brand"> 快速上手 </RouterLink>
        <RouterLink to="/components/button" class="home__btn home__btn--alt"> 组件文档 </RouterLink>
      </div>
    </div>
    <div class="home__features">
      <div v-for="f in features" :key="f.title" class="home__feature">
        <div class="home__feature-icon">
          {{ f.icon }}
        </div>
        <div class="home__feature-title">
          {{ f.title }}
        </div>
        <div class="home__feature-details">
          {{ f.details }}
        </div>
      </div>
    </div>
    <footer class="home__footer">
      <p>Released under the MIT License.</p>
      <p>Copyright © 2026 hmfw</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import NavBar from './NavBar.vue'

const features = [
  { icon: '⚡', title: '高性能', details: '基于 esbuild 的 tsup 构建，支持 Tree Shaking 按需加载' },
  {
    icon: '🎨',
    title: '主题定制',
    details: '完整的 CSS Variables 设计 Token 系统，轻松定制品牌色',
  },
  { icon: '🔒', title: '类型安全', details: '完整的 TypeScript 类型定义，提供优秀的 IDE 支持' },
  { icon: '🧪', title: '测试覆盖', details: '65 个测试文件，655 个测试用例，全部通过' },
  { icon: '📦', title: '66 个组件', details: '覆盖表单、数据展示、反馈、导航等各类场景' },
  { icon: '🌐', title: '国际化', details: '内置中文和英文语言包，支持自定义语言' },
]
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--doc-c-bg);
  position: relative;
  overflow: hidden;
}

/* 装饰性背景 */
.home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 500px;
  background: radial-gradient(ellipse at top center, var(--doc-c-brand-soft) 0%, transparent 70%);
  opacity: 0.6;
  pointer-events: none;
  z-index: 0;
}

.home::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, color-mix(in srgb, var(--doc-c-brand) 8%, transparent), transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.home > * {
  position: relative;
  z-index: 1;
}

.home__hero {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 24px 40px;
  text-align: center;
  animation: fadeIn 0.6s ease-out;
  min-height: 0;
}

.home__name {
  font-size: 56px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--doc-c-brand) 0%, var(--doc-c-brand-hover) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 12px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  animation: fadeIn 0.8s ease-out 0.2s both;
}

.home__text {
  font-size: 28px;
  font-weight: 600;
  color: var(--doc-c-text-1);
  margin: 0 0 12px;
  animation: fadeIn 0.8s ease-out 0.3s both;
}

.home__tagline {
  font-size: 16px;
  color: var(--doc-c-text-2);
  margin: 0 0 32px;
  max-width: 560px;
  line-height: 1.6;
  animation: fadeIn 0.8s ease-out 0.4s both;
}

.home__actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeIn 0.8s ease-out 0.5s both;
  margin-bottom: 48px;
}

.home__btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--doc-t-all);
  position: relative;
  overflow: hidden;
}

.home__btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.home__btn:hover::before {
  opacity: 1;
}

.home__btn--brand {
  background: linear-gradient(135deg, var(--doc-c-brand), var(--doc-c-brand-hover));
  color: #fff;
  box-shadow: 0 4px 16px color-mix(in srgb, var(--doc-c-brand) 25%, transparent);
}

.home__btn--brand:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px color-mix(in srgb, var(--doc-c-brand) 35%, transparent);
}

.home__btn--brand:active {
  transform: translateY(0);
}

.home__btn--alt {
  background: var(--doc-c-bg-elevated);
  color: var(--doc-c-text-1);
  border: 2px solid var(--doc-c-divider);
  box-shadow: var(--doc-shadow-1);
}

.home__btn--alt:hover {
  border-color: var(--doc-c-brand);
  color: var(--doc-c-brand);
  transform: translateY(-2px);
  box-shadow: var(--doc-shadow-2);
}

.home__features {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px 64px;
  animation: fadeIn 0.8s ease-out 0.6s both;
}

.home__feature {
  padding: 20px 16px;
  background: var(--doc-c-bg-elevated);
  border: 1px solid var(--doc-c-divider);
  border-radius: 10px;
  transition: var(--doc-t-all);
  box-shadow: var(--doc-shadow-1);
  text-align: center;
}

.home__feature:hover {
  border-color: var(--doc-c-brand-soft-hover);
  box-shadow: var(--doc-shadow-2);
  transform: translateY(-2px);
}

.home__feature-icon {
  font-size: 28px;
  margin-bottom: 8px;
  line-height: 1;
  filter: grayscale(0.2);
  transition: var(--doc-t-transform);
}

.home__feature:hover .home__feature-icon {
  transform: scale(1.1);
  filter: grayscale(0);
}

.home__feature-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--doc-c-text-1);
  margin-bottom: 4px;
  letter-spacing: -0.01em;
}

.home__feature-details {
  font-size: 12px;
  color: var(--doc-c-text-2);
  line-height: 1.5;
}

.home__footer {
  margin-top: auto;
  padding: 20px 24px;
  text-align: center;
  border-top: 1px solid var(--doc-c-divider);
  background: var(--doc-c-bg-soft);
  color: var(--doc-c-text-2);
  font-size: 12px;
}

.home__footer p {
  margin: 4px 0;
  opacity: 0.8;
}

@media (max-width: 1024px) {
  .home__features {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .home__name {
    font-size: 42px;
  }

  .home__text {
    font-size: 22px;
  }

  .home__features {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 0 20px 20px;
  }

  .home__hero {
    padding: 64px 20px 32px;
    min-height: calc(100vh - 180px);
  }

  .home__btn {
    padding: 10px 20px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .home__name {
    font-size: 32px;
  }

  .home__text {
    font-size: 18px;
  }

  .home__tagline {
    font-size: 14px;
  }

  .home__features {
    grid-template-columns: repeat(2, 1fr);
  }

  .home__btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
