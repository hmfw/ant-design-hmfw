<template>
  <div class="demo-block">
    <!-- 预览区 -->
    <div class="demo-block__preview">
      <slot />
    </div>

    <!-- 分割线 + 工具栏 -->
    <div class="demo-block__toolbar">
      <span v-if="title" class="demo-block__title">{{ title }}</span>
      <div class="demo-block__actions">
        <div class="demo-block__lang-tabs">
          <button
            class="demo-block__lang-btn"
            :class="{ active: lang === 'ts' }"
            @click="lang = 'ts'"
          >TypeScript</button>
          <button
            class="demo-block__lang-btn"
            :class="{ active: lang === 'js' }"
            @click="lang = 'js'"
          >JavaScript</button>
        </div>
        <button class="demo-block__icon-btn" :title="copied ? '已复制' : '复制代码'" @click="copyCode">
          <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </button>
        <button class="demo-block__toggle-btn" @click="expanded = !expanded">
          <span>{{ expanded ? '收起代码' : '查看代码' }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
            :style="{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }"
          ><polyline points="6 9 12 15 18 9"/></svg>
        </button>
      </div>
    </div>

    <!-- 代码区 -->
    <div v-show="expanded" class="demo-block__code">
      <pre class="demo-block__pre"><code>{{ displaySource }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  source: string
  title?: string
  description?: string
}>()

const lang = ref<'ts' | 'js'>('ts')
const expanded = ref(false)
const copied = ref(false)

function tsToJs(src: string): string {
  return src
    .replace(/<script setup lang="ts">/g, '<script setup>')
    .replace(/^import type .+\n/gm, '')
    .replace(/<[A-Z][a-zA-Z]*(?:\[\])?>/g, '')
    .replace(/: (?:string|number|boolean|void|any|never|unknown|null|undefined)(?:\[\])?(?=[,)\s=])/g, '')
    .replace(/(\w+): [A-Z][a-zA-Z<>[\]|&, ]+(?=[,)])/g, '$1')
    .replace(/ as [A-Z][a-zA-Z<>[\]]+/g, '')
    .replace(/^interface [\s\S]+?\n}\n/gm, '')
    .replace(/^type .+ = .+\n/gm, '')
    .replace(/\n{3,}/g, '\n\n')
}

const displaySource = computed(() =>
  lang.value === 'ts' ? props.source : tsToJs(props.source)
)

async function copyCode() {
  await navigator.clipboard.writeText(displaySource.value)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<style scoped>
.demo-block {
  border: 1px solid rgba(5, 5, 5, 0.06);
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
  transition: box-shadow 0.2s;
}

.demo-block:hover {
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.08);
}

.demo-block__preview {
  padding: 24px;
  background: #fff;
  min-height: 60px;
}

.dark .demo-block__preview {
  background: var(--vp-c-bg);
}

.demo-block__toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-top: 1px dashed rgba(5, 5, 5, 0.1);
  background: var(--vp-c-bg-soft);
  gap: 8px;
}

.dark .demo-block__toolbar {
  border-top-color: rgba(255, 255, 255, 0.1);
}

.demo-block__title {
  font-size: 13px;
  color: var(--vp-c-text-2);
  flex: 1;
}

.demo-block__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.demo-block__lang-tabs {
  display: flex;
  border: 1px solid rgba(5, 5, 5, 0.12);
  border-radius: 4px;
  overflow: hidden;
}

.dark .demo-block__lang-tabs {
  border-color: rgba(255, 255, 255, 0.15);
}

.demo-block__lang-btn {
  padding: 2px 10px;
  font-size: 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: background 0.15s, color 0.15s;
  line-height: 20px;
}

.demo-block__lang-btn.active {
  background: #1677ff;
  color: #fff;
}

.demo-block__lang-btn:not(.active):hover {
  background: rgba(22, 119, 255, 0.06);
  color: #1677ff;
}

.demo-block__icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--vp-c-text-2);
  border-radius: 4px;
  transition: background 0.15s, color 0.15s;
}

.demo-block__icon-btn:hover {
  background: rgba(22, 119, 255, 0.06);
  color: #1677ff;
}

.demo-block__toggle-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 10px;
  font-size: 12px;
  background: transparent;
  border: 1px solid rgba(5, 5, 5, 0.12);
  border-radius: 4px;
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  line-height: 20px;
  white-space: nowrap;
}

.dark .demo-block__toggle-btn {
  border-color: rgba(255, 255, 255, 0.15);
}

.demo-block__toggle-btn:hover {
  background: rgba(22, 119, 255, 0.06);
  color: #1677ff;
  border-color: #1677ff;
}

.demo-block__code {
  border-top: 1px solid rgba(5, 5, 5, 0.06);
}

.dark .demo-block__code {
  border-top-color: rgba(255, 255, 255, 0.08);
}

.demo-block__pre {
  margin: 0;
  padding: 20px 24px;
  background: var(--vp-c-bg-soft);
  overflow-x: auto;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  tab-size: 2;
}
</style>
