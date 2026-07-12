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
    <Dropdown :menu="themeMenu" placement="bottom" trigger="click">
      <Button :icon="DownOutlined" icon-position="end" style="margin-right: 12px">
        <span class="theme-dot" :style="{ background: activeColor }" />
        {{ activeLabel }}
      </Button>
    </Dropdown>
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
import { computed, h } from 'vue'
import { useRoute } from 'vue-router'
import { GithubOutlined, DownOutlined } from '@hmfw/icons'
import { Dropdown, Button } from '@hmfw/ant-design'
import { useTheme, themePresets } from '../composables/useTheme'

const route = useRoute()

const { currentPreset, setPreset } = useTheme()

const activePreset = computed(() => themePresets.find((p) => p.name === currentPreset.value))
const activeLabel = computed(() => activePreset.value?.label ?? '主题')
const activeColor = computed(() => activePreset.value?.color ?? '#1677ff')

function dot(color: string) {
  return h('span', {
    class: 'theme-dot',
    style: { background: color },
  })
}

const themeMenu = computed(() => ({
  items: themePresets.map((p) => ({
    key: p.name,
    label: p.label,
    icon: () => dot(p.color),
  })),
  selectedKeys: [currentPreset.value],
  onClick: ({ key }: { key: string }) => setPreset(key),
}))
</script>

<style>
.theme-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}
</style>
