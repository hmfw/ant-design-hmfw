<template>
  <aside ref="asideRef" class="sidebar">
    <div v-for="group in groups" :key="group.title" class="sidebar__group">
      <div v-if="group.title" class="sidebar__group-title">
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
import { nextTick, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { NavGroup } from '../router/sidebar'

defineProps<{ groups: NavGroup[] }>()

const route = useRoute()
const asideRef = ref<HTMLElement>()

// 路由变化后，将选中项滚入侧边栏可视范围（如从组件总览跳转过来时选中项可能在滚动区之外）
function scrollActiveIntoView() {
  const container = asideRef.value
  if (!container) return
  const active = container.querySelector<HTMLElement>('.router-link-exact-active')
  if (!active) return

  const containerRect = container.getBoundingClientRect()
  const activeRect = active.getBoundingClientRect()
  // 仅当选中项不在可视范围内时才滚动
  if (activeRect.top < containerRect.top || activeRect.bottom > containerRect.bottom) {
    active.scrollIntoView({ block: 'center' })
  }
}

watch(
  () => route.path,
  () => nextTick(scrollActiveIntoView),
)

onMounted(() => nextTick(scrollActiveIntoView))
</script>
