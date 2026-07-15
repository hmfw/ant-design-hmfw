<template>
  <aside class="sidebar">
    <div v-for="group in groups" :key="group.title" class="sidebar__group">
      <div class="sidebar__group-title">
        {{ group.title }}
      </div>
      <ul class="sidebar__list">
        <li v-for="item in group.children" :key="item.path">
          <RouterLink :to="item.path" class="sidebar__link">
            {{ item.title }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { NavGroup } from '../router/sidebar'

defineProps<{ groups: NavGroup[] }>()
</script>
