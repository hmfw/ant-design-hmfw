<template>
  <div class="overview">
    <header class="overview__header">
      <h1 class="overview__title">组件总览</h1>
      <p class="overview__desc">
        @hmfw/ant-design 基于 Ant Design v6 设计规范，使用 TypeScript + TSX 原生实现，为 Web 应用提供丰富的基础 UI
        组件，当前共 {{ totalCount }} 个组件。
      </p>
      <div class="overview__search">
        <input
          v-model="search"
          class="overview__search-input"
          type="text"
          placeholder="搜索组件"
          @keydown.enter="goFirstMatch"
        />
        <SearchOutlined class="overview__search-icon" />
      </div>
    </header>

    <template v-if="filteredGroups.length">
      <section v-for="group in filteredGroups" :key="group.title" class="overview__group">
        <h2 class="overview__group-title">
          {{ group.title }}
          <span class="overview__group-count">{{ group.children.length }}</span>
        </h2>
        <div class="overview__grid">
          <RouterLink
            v-for="item in group.children"
            :key="item.name"
            :to="`/components/${item.name}`"
            class="overview__card"
          >
            <div class="overview__card-title">
              {{ item.title }}
            </div>
            <div class="overview__card-cover">
              <img :src="coverOf(item.name)" :alt="item.title" loading="lazy" />
            </div>
          </RouterLink>
        </div>
      </section>
    </template>
    <div v-else class="overview__empty">未找到相关组件</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { SearchOutlined } from '@hmfw/icons'
import { componentGroups } from '../router/sidebar'
import { useTheme } from '../composables/useTheme'

const router = useRouter()
const search = ref('')

const { currentPreset } = useTheme()
const isDark = computed(() => currentPreset.value === 'dark')

const totalCount = computed(() => componentGroups.reduce((sum, g) => sum + g.children.length, 0))

/** 封面图路径：暗色预设取 -dark 变体（放在 docs/public/covers 下，需带上部署 base） */
const coverOf = (name: string) => `${import.meta.env.BASE_URL}covers/${name}${isDark.value ? '-dark' : ''}.svg`

/** 按关键字过滤各分组，过滤后为空的组不保留 */
const filteredGroups = computed(() => {
  const keyword = search.value.trim().toLowerCase()
  if (!keyword) return componentGroups
  return componentGroups
    .map((group) => ({
      title: group.title,
      children: group.children.filter((item) => item.title.toLowerCase().includes(keyword)),
    }))
    .filter((group) => group.children.length > 0)
})

/** 回车跳转到第一个匹配项 */
function goFirstMatch() {
  const first = filteredGroups.value[0]?.children[0]
  if (first) router.push(`/components/${first.name}`)
}
</script>

<style scoped>
.overview {
  max-width: 1400px;
  margin: 0 auto;
  padding: 8px 0 64px;
}

.overview__header {
  margin-bottom: 24px;
}

.overview__title {
  font-size: 30px;
  font-weight: 600;
  color: var(--doc-c-text-1);
  margin: 0 0 12px;
}

.overview__desc {
  font-size: 14px;
  line-height: 1.7;
  color: var(--doc-c-text-2);
  margin: 0 0 20px;
}

/* 搜索框：无边框，仅底部一条线，滚动时吸顶 */
.overview__search {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 4px;
  background: var(--doc-c-bg);
  border-bottom: 1px solid var(--doc-c-divider);
  transition: var(--doc-t-all);
}

.overview__search:focus-within {
  border-bottom-color: var(--doc-c-brand);
}

.overview__search-icon {
  color: var(--doc-c-text-3);
  font-size: 18px;
  flex-shrink: 0;
}

.overview__search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: var(--doc-c-text-1);
}

.overview__search-input::placeholder {
  color: var(--doc-c-text-3);
}

.overview__group {
  margin-top: 32px;
}

.overview__group-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 600;
  color: var(--doc-c-text-1);
  margin: 0 0 16px;
}

.overview__group-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 7px;
  font-size: 12px;
  font-weight: 400;
  color: var(--doc-c-text-2);
  background: var(--doc-c-bg-alt);
  border-radius: 4px;
}

.overview__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.overview__card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--doc-c-bg-elevated);
  border: 1px solid var(--doc-c-divider);
  border-radius: 10px;
  text-decoration: none;
  box-shadow: var(--doc-shadow-1);
  transition: var(--doc-t-all);
}

.overview__card:hover {
  border-color: var(--doc-c-brand);
  box-shadow: var(--doc-shadow-2);
  transform: translateY(-2px);
}

.overview__card-title {
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--doc-c-text-1);
  border-bottom: 1px solid var(--doc-c-divider);
}

.overview__card-cover {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 152px;
  padding: 12px;
  overflow: hidden;
}

.overview__card-cover img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.overview__empty {
  padding: 80px 0;
  text-align: center;
  color: var(--doc-c-text-2);
  font-size: 15px;
}

@media (max-width: 1024px) {
  .overview__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .overview__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .overview__grid {
    grid-template-columns: 1fr;
  }
}
</style>
