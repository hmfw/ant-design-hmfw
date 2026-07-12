<template>
  <div class="app-layout">
    <NavBar />
    <div class="app-layout__body">
      <Sidebar :groups="activeSidebar" />
      <div class="app-layout__content md-content">
        <RouterView />
      </div>
      <TocNav />
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
</script>

<style scoped>
.app-layout__body {
  display: flex;
  min-height: calc(100vh - var(--doc-nav-height));
}
</style>
