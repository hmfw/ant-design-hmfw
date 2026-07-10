<template>
  <header class="navbar">
    <RouterLink to="/" class="navbar__brand">
      <img src="/logo.svg" alt="logo" class="navbar__brand-logo" />
      <span>@hmfw/ant-design</span>
    </RouterLink>
    <nav class="navbar__nav">
      <RouterLink
        to="/guide/getting-started"
        class="navbar__nav-link"
        :class="{ 'is-active': route.path.startsWith('/guide') }"
      >
        指南
      </RouterLink>
      <RouterLink
        to="/components/button"
        class="navbar__nav-link"
        :class="{ 'is-active': route.path.startsWith('/components') }"
      >
        组件
      </RouterLink>
    </nav>
    <ThemeSwitcher style="margin-right: 12px" />
    <div class="navbar__social">
      <a
        href="https://github.com/hmfw/ant-design-hmfw"
        target="_blank"
        rel="noopener"
        class="navbar__github"
        aria-label="GitHub"
      >
        <GithubOutlined :style="{ fontSize: '20px' }" />
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { GithubOutlined } from '@hmfw/icons'
import ThemeSwitcher from './ThemeSwitcher.vue'

const route = useRoute()
</script>
