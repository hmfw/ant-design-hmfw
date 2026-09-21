<template>
  <div class="doc-search" :class="{ 'is-focusing': focusing }">
    <div class="doc-search__box">
      <SearchOutlined class="doc-search__icon" />
      <input
        ref="inputRef"
        v-model="keywords"
        class="doc-search__input"
        type="text"
        :placeholder="`搜索组件、指南…`"
        aria-label="搜索文档"
        autocomplete="off"
        spellcheck="false"
        @focus="onFocus"
        @blur="onBlur"
        @mouseenter="load"
        @compositionstart="imeWaiting = true"
        @compositionend="imeWaiting = false"
        @input="activeIndex = -1"
        @keydown="onKeydown"
      />
      <span v-show="!keywords" class="doc-search__shortcut">{{ shortcut }}</span>
      <button
        v-show="keywords"
        type="button"
        class="doc-search__clear"
        aria-label="清空"
        tabindex="-1"
        @mousedown.prevent
        @click="onClear"
      >
        <CloseCircleFilled />
      </button>
    </div>

    <div v-if="open" class="doc-search__popover" @mousedown.capture.prevent @mouseleave="activeIndex = -1">
      <div v-if="loading" class="doc-search__state">搜索中…</div>
      <div v-else-if="!total" class="doc-search__state">没有找到与「{{ keywords.trim() }}」相关的内容</div>
      <div v-else class="doc-search__results">
        <template v-for="grp in groups" :key="grp.title">
          <div class="doc-search__group-title">{{ grp.title }}</div>
          <a
            v-for="hit in grp.hits"
            :key="hit.entry.path"
            class="doc-search__item"
            :class="{ 'is-active': activeIndex === hit.activeIndex }"
            :href="href(hit.entry.path)"
            :data-index="hit.activeIndex"
            @click.prevent="go(hit.entry.path)"
            @mouseenter="activeIndex = hit.activeIndex"
          >
            <component :is="iconOf(hit.entry.type)" class="doc-search__item-icon" />
            <span class="doc-search__item-text">
              <span class="doc-search__item-title">
                <template v-for="(part, i) in hit.titleParts" :key="i">
                  <mark v-if="part.highlighted">{{ part.text }}</mark>
                  <template v-else>{{ part.text }}</template>
                </template>
                <span v-if="hit.matchedProp" class="doc-search__item-prop">
                  · <mark>{{ hit.matchedProp }}</mark>
                </span>
              </span>
              <span v-if="hit.entry.description" class="doc-search__item-desc">
                <template v-for="(part, i) in hit.descParts" :key="i">
                  <mark v-if="part.highlighted">{{ part.text }}</mark>
                  <template v-else>{{ part.text }}</template>
                </template>
              </span>
            </span>
          </a>
        </template>
      </div>
      <div class="doc-search__footer">
        <span><kbd>↑</kbd><kbd>↓</kbd> 导航</span>
        <span><kbd>↵</kbd> 选择</span>
        <span><kbd>esc</kbd> 关闭</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { SearchOutlined, CloseCircleFilled, AppstoreOutlined, FileTextOutlined } from '@hmfw/icons'
import { useDocSearch } from '../composables/useDocSearch'

const router = useRouter()
const { keywords, loading, groups, total, flatHits, load, clear } = useDocSearch()

const inputRef = ref<HTMLInputElement | null>(null)
const focusing = ref(false)
const activeIndex = ref(-1)
const imeWaiting = ref(false)

const isApple =
  typeof navigator !== 'undefined' && /(mac|iphone|ipod|ipad)/i.test(navigator.platform || navigator.userAgent)
const shortcut = ref('/')

// popover 展开条件：有关键词 + 聚焦中
const open = computed(() => !!keywords.value.trim() && focusing.value)

function iconOf(type: 'component' | 'guide') {
  return type === 'component' ? AppstoreOutlined : FileTextOutlined
}

function href(path: string) {
  return router.resolve(path).href
}

function onFocus() {
  focusing.value = true
  load()
}

function onBlur() {
  // 延迟收起，等结果项的 click 先触发
  setTimeout(() => {
    focusing.value = false
  }, 120)
}

function onClear() {
  clear()
  activeIndex.value = -1
  inputRef.value?.focus()
}

function onKeydown(ev: KeyboardEvent) {
  const count = total.value
  if (ev.key === 'ArrowDown') {
    ev.preventDefault()
    if (count) activeIndex.value = (activeIndex.value + 1) % count
  } else if (ev.key === 'ArrowUp') {
    ev.preventDefault()
    if (count) activeIndex.value = (activeIndex.value + count - 1) % count
  } else if (ev.key === 'Enter' && !imeWaiting.value) {
    const hit = flatHits.value.find((h) => h.activeIndex === activeIndex.value)
    if (hit) {
      go(hit.entry.path)
    } else if (flatHits.value.length) {
      go(flatHits.value[0].entry.path)
    }
  } else if (ev.key === 'Escape' && !imeWaiting.value) {
    inputRef.value?.blur()
  }
  if (['Escape', 'Enter'].includes(ev.key)) activeIndex.value = -1
  // 命中项滚动进入可视区
  if (['ArrowDown', 'ArrowUp'].includes(ev.key)) {
    nextTick(scrollActiveIntoView)
  }
}

function scrollActiveIntoView() {
  const el = document.querySelector<HTMLElement>(`.doc-search__item[data-index="${activeIndex.value}"]`)
  el?.scrollIntoView({ block: 'nearest' })
}

function go(path: string) {
  router.push(path)
  clear()
  activeIndex.value = -1
  focusing.value = false
  inputRef.value?.blur()
}

// 全局快捷键：⌘K / Ctrl+K / "/"
function isEditable(target: EventTarget | null) {
  const el = target as HTMLElement | null
  if (!el) return false
  return ['INPUT', 'TEXTAREA'].includes(el.tagName) || el.isContentEditable
}

function onGlobalKeydown(ev: KeyboardEvent) {
  const hotkey = (isApple ? ev.metaKey : ev.ctrlKey) && ev.key.toLowerCase() === 'k'
  const slash = ev.key === '/' && !isEditable(ev.target)
  if (hotkey || slash) {
    ev.preventDefault()
    inputRef.value?.focus()
  }
}

onMounted(() => {
  shortcut.value = isApple ? '⌘ K' : 'Ctrl K'
  document.addEventListener('keydown', onGlobalKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onGlobalKeydown)
})
</script>

<style>
.doc-search {
  position: relative;
  margin-right: 16px;
}

.doc-search__box {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 220px;
  height: 34px;
  padding: 0 10px;
  background: var(--doc-c-bg-soft);
  border: 1px solid transparent;
  border-radius: 8px;
  transition: var(--doc-t-all);
}

.doc-search.is-focusing .doc-search__box {
  background: var(--doc-c-bg);
  border-color: var(--doc-c-brand);
  box-shadow: 0 0 0 3px var(--doc-c-brand-soft-hover);
}

.doc-search__icon {
  color: var(--doc-c-text-3);
  font-size: 14px;
  flex-shrink: 0;
}

.doc-search__input {
  flex: 1;
  min-width: 0;
  height: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--doc-c-text-1);
  font-size: 14px;
  font-family: inherit;
}

.doc-search__input::placeholder {
  color: var(--doc-c-text-3);
}

.doc-search__shortcut {
  flex-shrink: 0;
  padding: 2px 6px;
  font-size: 11px;
  line-height: 1;
  color: var(--doc-c-text-3);
  background: var(--doc-c-bg);
  border: 1px solid var(--doc-c-divider);
  border-radius: 4px;
  white-space: nowrap;
}

.doc-search__clear {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--doc-c-text-3);
  cursor: pointer;
  transition: var(--doc-t-color);
}

.doc-search__clear:hover {
  color: var(--doc-c-text-2);
}

.doc-search__popover {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 360px;
  max-height: min(70vh, 480px);
  overflow-y: auto;
  background: var(--doc-c-bg-elevated);
  border: 1px solid var(--doc-c-divider);
  border-radius: 10px;
  box-shadow: var(--doc-shadow-3);
  z-index: 200;
  scrollbar-width: thin;
  scrollbar-color: var(--doc-c-border) transparent;
}

.doc-search__popover::-webkit-scrollbar {
  width: 6px;
}

.doc-search__popover::-webkit-scrollbar-thumb {
  background: var(--doc-c-border);
  border-radius: 3px;
}

.doc-search__state {
  padding: 28px 16px;
  text-align: center;
  color: var(--doc-c-text-2);
  font-size: 13px;
}

.doc-search__results {
  padding: 6px;
}

.doc-search__group-title {
  padding: 8px 10px 4px;
  font-size: 11px;
  font-weight: 700;
  color: var(--doc-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.doc-search__item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 7px;
  text-decoration: none;
  color: var(--doc-c-text-1);
  cursor: pointer;
}

.doc-search__item.is-active {
  background: var(--doc-c-brand-soft-hover);
}

.doc-search__item-icon {
  flex-shrink: 0;
  font-size: 15px;
  color: var(--doc-c-text-2);
}

.doc-search__item.is-active .doc-search__item-icon {
  color: var(--doc-c-brand);
}

.doc-search__item-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.doc-search__item-title {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.doc-search__item-desc {
  font-size: 12px;
  color: var(--doc-c-text-2);
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.doc-search__item-prop {
  margin-left: 4px;
  font-size: 13px;
  font-weight: 400;
  color: var(--doc-c-text-3);
  font-family: var(--doc-font-mono);
}

.doc-search__item mark {
  background: transparent;
  color: var(--doc-c-brand);
  font-weight: 700;
}

.doc-search__footer {
  display: flex;
  gap: 16px;
  padding: 8px 12px;
  border-top: 1px solid var(--doc-c-divider);
  font-size: 12px;
  color: var(--doc-c-text-2);
  position: sticky;
  bottom: 0;
  background: var(--doc-c-bg-elevated);
}

.doc-search__footer kbd {
  display: inline-block;
  min-width: 16px;
  padding: 1px 4px;
  margin-right: 2px;
  font-family: var(--doc-font-mono);
  font-size: 11px;
  text-align: center;
  color: var(--doc-c-text-2);
  background: var(--doc-c-bg-soft);
  border: 1px solid var(--doc-c-divider);
  border-radius: 4px;
}

/* 窄屏：收起快捷键提示、缩短输入框 */
@media (max-width: 960px) {
  .doc-search__box {
    width: 160px;
  }
  .doc-search__shortcut {
    display: none;
  }
  .doc-search__popover {
    width: 300px;
  }
}

@media (max-width: 640px) {
  .doc-search__box {
    width: 40px;
    padding: 0;
    justify-content: center;
  }
  .doc-search.is-focusing .doc-search__box {
    width: 200px;
    padding: 0 10px;
    justify-content: flex-start;
  }
  .doc-search__input,
  .doc-search__shortcut {
    display: none;
  }
  .doc-search.is-focusing .doc-search__input {
    display: block;
  }
  .doc-search__popover {
    width: 78vw;
    left: auto;
    right: 0;
  }
}
</style>
