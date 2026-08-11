<template>
  <div ref="containerRef" class="semantic-preview">
    <Row :style="{ minHeight: height ? `${height}px` : undefined }">
      <!-- 左：组件预览区，通过作用域插槽把标记 classNames 下发给使用方 -->
      <Col :span="16" class="semantic-preview__stage" :class="{ 'semantic-preview__stage--flush': padding === false }">
        <!-- 插槽 prop 的键名不做 kebab→camel 归一化，必须与使用方解构的名字逐字一致 -->
        <slot :class-names="markClassNames" />
      </Col>

      <!-- 右：语义节点列表 -->
      <Col :span="8">
        <ul class="semantic-preview__list">
          <li
            v-for="item in semantics"
            :key="item.name"
            class="semantic-preview__item"
            @mouseenter="hovered = item.name"
            @mouseleave="hovered = null"
          >
            <div class="semantic-preview__head">
              <div class="semantic-preview__title">
                <code>{{ item.name }}</code>
                <Tag v-if="item.version" color="blue">{{ item.version }}</Tag>
              </div>
              <div class="semantic-preview__actions">
                <Button
                  size="small"
                  :type="pinned === item.name ? 'primary' : 'text'"
                  :icon="PushpinOutlined"
                  :aria-label="`固定 ${item.name} 高亮`"
                  :aria-pressed="pinned === item.name"
                  @click="togglePin(item.name)"
                />
                <Popover placement="left" :content="() => renderExample(item.name)">
                  <Button size="small" type="text" :icon="InfoCircleOutlined" :aria-label="`查看 ${item.name} 用法`" />
                </Popover>
              </div>
            </div>
            <p class="semantic-preview__desc">{{ item.desc }}</p>
          </li>
        </ul>
      </Col>
    </Row>

    <!-- 高亮框：首个匹配为主标记，其余为次标记 -->
    <div
      v-for="(rect, i) in rects"
      :key="i"
      class="semantic-preview__marker"
      :class="{ 'semantic-preview__marker--primary': i === 0 }"
      :style="{
        '--rect-left': rect.left,
        '--rect-top': rect.top,
        '--rect-width': rect.width,
        '--rect-height': rect.height,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick, h } from 'vue'
import { Row, Col, Tag, Button, Popover } from '@hmfw/ant-design'
import { PushpinOutlined, InfoCircleOutlined } from '@hmfw/icons'
import Prism from 'prismjs'

interface SemanticItem {
  /** 语义节点名，即 classNames / styles 的 key */
  name: string
  /** 该节点的职责说明 */
  desc: string
  /** 引入版本 */
  version?: string
}

const props = withDefaults(
  defineProps<{
    /** 代码示例中的标签名，如 Button */
    component?: string
    semantics: SemanticItem[]
    /** 预览区最小高度（px） */
    height?: number
    /** 传 false 去掉预览区内边距 */
    padding?: false
  }>(),
  { component: 'Component', height: undefined, padding: undefined },
)

const MARK_PREFIX = 'semantic-mark-'

const containerRef = ref<HTMLElement | null>(null)
const hovered = ref<string | null>(null)
const pinned = ref<string | null>(null)

/** pin 优先于 hover：钉住后移开鼠标仍保持高亮 */
const active = computed(() => pinned.value ?? hovered.value)

function togglePin(name: string) {
  pinned.value = pinned.value === name ? null : name
}

/**
 * 下发给使用方的 classNames：每个语义节点固定挂一个标记类。
 * 不随激活项变化 —— 高亮完全由测量出的浮层承担，
 * 这样 hover 时演示组件不会重渲染，避免动画被打断。
 */
const markClassNames = computed(() => {
  const map: Record<string, string> = {}
  for (const item of props.semantics) {
    map[item.name] = MARK_PREFIX + item.name
  }
  return map
})

interface Rect {
  left: number
  top: number
  width: number
  height: number
}

const rects = ref<Rect[]>([])

/** 按激活的标记类查出所有匹配节点，换算为相对容器的坐标 */
function measure() {
  const container = containerRef.value
  if (!container || !active.value) {
    rects.value = []
    return
  }
  const base = container.getBoundingClientRect()
  rects.value = Array.from(container.querySelectorAll<HTMLElement>(`.${MARK_PREFIX}${active.value}`))
    .map((el) => {
      const r = el.getBoundingClientRect()
      return { left: r.left - base.left, top: r.top - base.top, width: r.width, height: r.height }
    })
    // 尺寸为 0 的节点（如未渲染的占位）不画框
    .filter((r) => r.width > 0 || r.height > 0)
}

// 激活项变化后需等 DOM 应用新 class 再测量
watch(active, () => nextTick(measure))

let observer: ResizeObserver | null = null

onMounted(() => {
  window.addEventListener('resize', measure)
  if (typeof ResizeObserver !== 'undefined' && containerRef.value) {
    observer = new ResizeObserver(() => measure())
    observer.observe(containerRef.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', measure)
  observer?.disconnect()
  observer = null
})

/** 生成该语义节点的 Vue 用法片段（模板语法，与文档站其他示例一致） */
function exampleCode(name: string): string {
  return [
    `<${props.component}`,
    `  :class-names="{ ${name}: 'my-classname' }"`,
    `  :styles="{ ${name}: { color: 'red' } }"`,
    `/>`,
  ].join('\n')
}

function renderExample(name: string) {
  const html = Prism.highlight(exampleCode(name), Prism.languages.markup, 'markup')
  return h('pre', { class: 'semantic-preview__code' }, [h('code', { innerHTML: html })])
}
</script>

<style scoped>
.semantic-preview {
  position: relative;
  z-index: 0;
  border: 1px solid var(--doc-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
}

.semantic-preview__stage {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 24px;
  overflow: hidden;
  border-right: 1px solid var(--doc-c-divider);
}

.semantic-preview__stage--flush {
  padding: 0;
}

.semantic-preview__list {
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 600px;
  overflow: auto;
}

.semantic-preview__item {
  padding: 12px;
  cursor: pointer;
  transition: var(--doc-t-bg);
}

.semantic-preview__item:hover {
  background: var(--doc-c-bg-soft);
}

.semantic-preview__item:not(:first-child) {
  border-top: 1px solid var(--doc-c-divider);
}

.semantic-preview__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.semantic-preview__title {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.semantic-preview__title code {
  font-family: var(--doc-font-mono);
  font-size: 13px;
  font-weight: 600;
  color: var(--doc-c-text-1);
  background: none;
  padding: 0;
}

.semantic-preview__actions {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.semantic-preview__desc {
  margin: 6px 0 0;
  font-size: 12px;
  line-height: 1.6;
  color: var(--doc-c-text-2);
}

/* 高亮框：坐标由 CSS 变量驱动，避免逐帧重建内联 style 字符串 */
.semantic-preview__marker {
  --mark-border-size: 1px;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  z-index: 10;
  border: var(--mark-border-size) solid var(--hmfw-color-warning, #faad14);
  left: calc(var(--rect-left) * 1px - var(--mark-border-size));
  top: calc(var(--rect-top) * 1px - var(--mark-border-size));
  width: calc(var(--rect-width) * 1px + var(--mark-border-size) * 2);
  height: calc(var(--rect-height) * 1px + var(--mark-border-size) * 2);
  opacity: 0.875;
  transition: all var(--hmfw-motion-duration-slow, 0.3s) ease;
}

.semantic-preview__marker--primary {
  --mark-border-size: 2px;
  opacity: 1;
  box-shadow: 0 0 0 1px var(--doc-c-bg);
  z-index: 11;
}
</style>

<!--
  代码示例弹层被 Trigger 传送到 body，scoped 属性选择器命中不到，
  因此这条规则必须非 scoped。类名带 semantic-preview 前缀，不会外泄。
-->
<style>
.semantic-preview__code {
  margin: 0;
  font-family: var(--doc-font-mono);
  font-size: 12px;
  line-height: 1.6;
  white-space: pre;
  tab-size: 2;
}
</style>
