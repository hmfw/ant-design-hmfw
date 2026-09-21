<template>
  <div class="app-layout">
    <NavBar />
    <div class="app-layout__body">
      <Sidebar :groups="activeSidebar" />
      <div class="app-layout__content md-content" :class="{ 'app-layout__content--wide': !showToc }">
        <RouterView />
      </div>
      <TocNav v-if="showToc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './NavBar.vue'
import Sidebar from './Sidebar.vue'
import TocNav from './TocNav.vue'
import { componentsSidebar, guideSidebar } from '../router/sidebar'

const route = useRoute()

const activeSidebar = computed(() => (route.path.startsWith('/guide') ? guideSidebar : componentsSidebar))

// 组件总览页为纯组件页、无 markdown 标题，不显示右侧目录，内容区放宽
const showToc = computed(() => route.path !== '/components/overview')
</script>

<style scoped>
.app-layout__body {
  display: flex;
  min-height: calc(100vh - var(--doc-nav-height));
}

/* 无右侧目录时，内容区放宽以充分利用空间 */
.app-layout__content--wide {
  max-width: none;
}
</style>
