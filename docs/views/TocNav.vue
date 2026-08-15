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
  // 仅收集文档自身的标题，排除 demo 预览区内组件渲染出的 h 标签
  // （如 Typography.Title 会渲染真实的 <h2>/<h3>，不应进入大纲）
  const headings = Array.from(content.querySelectorAll('h2, h3')).filter((el) => !el.closest('.demo-block'))
  const seen = new Map<string, number>()
  return headings.map((el) => {
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
  width: 210px;
  flex-shrink: 0;
  align-self: flex-start;
  max-height: calc(100vh - var(--doc-nav-height) - 64px);
  overflow-y: auto;
  font-size: 12px;
  padding: 12px;
  scrollbar-width: thin;
  scrollbar-color: var(--doc-c-border) transparent;
  background: transparent;
  border-left: 1px solid var(--doc-c-divider);
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
  padding: 4px 8px;
  color: var(--doc-c-text-3);
  text-decoration: none;
  border-radius: 4px;
  transition: var(--doc-t-all);
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  font-size: 13px;
}

.toc__link::before {
  content: '';
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 0;
  background: var(--doc-c-brand);
  transition: height 0.2s ease;
}

.toc__link:hover {
  color: var(--doc-c-text-2);
  background: var(--doc-c-bg-soft);
}

.toc__item--active .toc__link {
  color: var(--doc-c-brand);
  font-weight: 500;
}

.toc__item--active .toc__link::before {
  height: 16px;
}

/* 更大的屏幕才显示右侧目录 */
@media (max-width: 1440px) {
  .toc {
    display: none;
  }
}
</style>
