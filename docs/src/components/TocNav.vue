<template>
  <aside v-if="anchors.length > 0" class="toc">
<ul class="toc__list">
      <li
        v-for="anchor in anchors"
        :key="anchor.id"
        class="toc__item"
        :class="[`toc__item--h${anchor.level}`, { 'toc__item--active': activeId === anchor.id }]"
      >
        <a :href="`#${anchor.id}`" class="toc__link" @click.prevent="scrollTo(anchor.id)">
          {{ anchor.text }}
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

interface Anchor {
  id: string
  text: string
  level: number
}

const route = useRoute()
const anchors = ref<Anchor[]>([])
const activeId = ref('')

function collectAnchors(): Anchor[] {
  const content = document.querySelector('.md-content')
  if (!content) return []
  const headings = content.querySelectorAll('h2, h3')
  const seen = new Map<string, number>()
  return Array.from(headings).map((el) => {
    let id = el.id || slugify((el as HTMLElement).innerText) || 'section'
    // Guarantee unique ids: collapsed/empty slugs (e.g. CJK-only headings)
    // would otherwise collide and trigger duplicate-key warnings.
    const count = seen.get(id) ?? 0
    seen.set(id, count + 1)
    if (count > 0) id = `${id}-${count}`
    // Reflect the resolved id back so anchor links / getElementById resolve.
    if (!el.id) el.id = id
    return {
      id,
      text: (el as HTMLElement).innerText,
      level: parseInt(el.tagName[1]),
    }
  })
}

function slugify(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\p{L}\p{N}-]/gu, '')
}

function updateAnchors() {
  // Wait for DOM to settle after route change
  setTimeout(() => {
    anchors.value = collectAnchors()
    if (anchors.value.length > 0) {
      activeId.value = anchors.value[0].id
    }
  }, 100)
}

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
    activeId.value = id
  }
}

function onScroll() {
  if (anchors.value.length === 0) return
  const scrollY = window.scrollY + 100
  let current = anchors.value[0].id
  for (const anchor of anchors.value) {
    const el = document.getElementById(anchor.id)
    if (el && el.getBoundingClientRect().top + window.scrollY <= scrollY) {
      current = anchor.id
    }
  }
  activeId.value = current
}

onMounted(() => {
  updateAnchors()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

watch(() => route.path, updateAnchors)
</script>

<style scoped>
.toc {
  position: sticky;
  top: calc(var(--doc-nav-height) + 32px);
  width: 200px;
  flex-shrink: 0;
  align-self: flex-start;
  max-height: calc(100vh - var(--doc-nav-height) - 64px);
  overflow-y: auto;
  font-size: 13px;
  padding: 0 16px 0 0;
  scrollbar-width: thin;
  scrollbar-color: var(--doc-c-border) transparent;
}

.toc::-webkit-scrollbar {
  width: 3px;
}

.toc::-webkit-scrollbar-thumb {
  background: var(--doc-c-border);
  border-radius: 2px;
}

.toc__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.toc__item {
  margin: 2px 0;
}

.toc__item--h3 {
  padding-left: 12px;
}

.toc__link {
  display: block;
  padding: 3px 8px;
  color: var(--doc-c-text-2);
  text-decoration: none;
  border-radius: 4px;
  transition: color 0.2s, background 0.2s;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.toc__link:hover {
  color: var(--doc-c-brand);
  background: rgba(22, 119, 255, 0.04);
}

.toc__item--active .toc__link {
  color: var(--doc-c-brand);
  font-weight: 500;
}

@media (max-width: 1280px) {
  .toc {
    display: none;
  }
}
</style>
