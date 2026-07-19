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
        <button class="demo-block__icon-btn" :title="copied ? '已复制' : '复制代码'" @click="copyCode">
          <svg
            v-if="!copied"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </button>
        <button class="demo-block__icon-btn" :title="expanded ? '收起代码' : '查看代码'" @click="expanded = !expanded">
          <!-- 未展开时显示 <> -->
          <svg v-if="!expanded" viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
            <title>展开代码</title>
            <path
              d="M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62z"
              fill-rule="evenodd"
              opacity="0.78"
            />
          </svg>
          <!-- 已展开时显示 </> -->
          <svg v-else viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
            <title>收起代码</title>
            <path
              d="M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688z"
              fill-rule="evenodd"
              opacity="0.78"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- 代码区 -->
    <div v-show="expanded" class="demo-block__code">
      <pre class="demo-block__pre"><code class="language-typescript" v-html="highlightedCode"></code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Prism from 'prismjs'

// 按完整依赖链导入
import 'prismjs/components/prism-markup' // HTML/XML (JSX 的基础)
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx' // tsx 依赖 jsx
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-tsx'

const props = defineProps<{
  source: string
  title?: string
  description?: string
}>()

const expanded = ref(false)
const copied = ref(false)

const highlightedCode = computed(() => {
  try {
    // 检测是否是 Vue SFC 文件
    const isVueSFC = /<template[\s>]/.test(props.source) || /<script[\s>]/.test(props.source)

    if (isVueSFC) {
      // 拆分处理 Vue SFC 的三个部分
      return highlightVueSFC(props.source)
    }

    // 非 SFC 文件：检测是否包含 JSX/TSX 语法
    const hasTsx = /<[A-Z]/.test(props.source) || /<\/[A-Z]/.test(props.source)
    const language = hasTsx ? 'tsx' : 'typescript'
    return Prism.highlight(props.source, Prism.languages[language], language)
  } catch {
    return props.source
  }
})

/**
 * 高亮 Vue SFC 文件
 * 拆分 <template>、<script>、<style> 三个部分分别处理
 */
function highlightVueSFC(source: string): string {
  const sections: { tag: string; content: string; attrs: string; start: number; end: number }[] = []

  // 匹配三种标签 - 改用贪婪匹配避免嵌套标签干扰
  const tagRegex = /<(template|script|style)([^>]*)>([\s\S]*)<\/\1>/g
  let match: RegExpExecArray | null

  while ((match = tagRegex.exec(source)) !== null) {
    sections.push({
      tag: match[1],
      attrs: match[2],
      content: match[3],
      start: match.index,
      end: match.index + match[0].length,
    })
  }

  // 按位置排序
  sections.sort((a, b) => a.start - b.start)

  let result = ''
  let lastEnd = 0

  for (const section of sections) {
    // 添加标签之间的内容（通常是空白）
    if (section.start > lastEnd) {
      result += source.slice(lastEnd, section.start)
    }

    // 高亮开始标签
    const openTag = `<${section.tag}${section.attrs}>`
    result += Prism.highlight(openTag, Prism.languages.markup, 'markup')

    // 根据标签类型高亮内容
    let highlightedContent: string
    if (section.tag === 'template') {
      highlightedContent = Prism.highlight(section.content, Prism.languages.markup, 'markup')
    } else if (section.tag === 'script') {
      // 检测 script 标签的 lang 属性
      const isTs = /lang=["']ts["']/.test(section.attrs) || /lang=["']typescript["']/.test(section.attrs)
      const isTsx = /lang=["']tsx["']/.test(section.attrs)
      const lang = isTsx ? 'tsx' : isTs ? 'typescript' : 'javascript'
      highlightedContent = Prism.highlight(section.content, Prism.languages[lang], lang)
    } else if (section.tag === 'style') {
      highlightedContent = Prism.highlight(section.content, Prism.languages.css, 'css')
    } else {
      highlightedContent = section.content
    }

    result += highlightedContent

    // 高亮结束标签
    const closeTag = `</${section.tag}>`
    result += Prism.highlight(closeTag, Prism.languages.markup, 'markup')

    lastEnd = section.end
  }

  // 添加剩余内容
  if (lastEnd < source.length) {
    result += source.slice(lastEnd)
  }

  return result
}

async function copyCode() {
  await navigator.clipboard.writeText(props.source)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
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

.demo-block__toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-top: 1px dashed rgba(5, 5, 5, 0.1);
  background: var(--vp-c-bg-soft, var(--doc-c-bg-soft));
  gap: 8px;
}

.demo-block__title {
  font-size: 13px;
  color: var(--vp-c-text-2, var(--doc-c-text-2));
  flex: 1;
}

.demo-block__actions {
  display: flex;
  align-items: center;
  gap: 8px;
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
  color: var(--vp-c-text-2, var(--doc-c-text-2));
  border-radius: 4px;
  transition:
    background 0.15s,
    color 0.15s;
}

.demo-block__icon-btn:hover {
  background: rgba(22, 119, 255, 0.06);
  color: #1677ff;
}

.demo-block__code {
  border-top: 1px solid rgba(5, 5, 5, 0.06);
}

.demo-block__pre {
  margin: 0;
  padding: 20px 24px;
  background: var(--vp-c-bg-soft, var(--doc-c-bg-soft));
  overflow-x: auto;
  font-family: var(--vp-font-family-mono, var(--doc-font-mono));
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-1, var(--doc-c-text-1));
  tab-size: 2;
}
</style>
