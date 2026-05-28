<template>
  <aside class="sidebar">
    <div
      v-for="group in groups"
      :key="group.text"
      class="sidebar__group"
    >
      <div class="sidebar__group-title">{{ group.text }}</div>
      <ul class="sidebar__list">
        <li v-for="item in group.items" :key="item.link">
          <RouterLink :to="item.link" class="sidebar__link">{{ item.text }}</RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { SidebarGroup } from '../nav/sidebar'

defineProps<{ groups: SidebarGroup[] }>()
</script>
