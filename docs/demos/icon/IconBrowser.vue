<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon, searchIcons, getIconsByCategory, getAllCategories, getAllIcons } from '@hmfw/ant-design'
import type { IconSearchResult } from '@hmfw/ant-design'

const searchQuery = ref('')
const selectedCategory = ref('all')
const copiedIcon = ref('')

// 图标风格：all 全部 / outlined 线形 / filled 实底
type IconStyle = 'all' | 'outlined' | 'filled'
const iconStyle = ref<IconStyle>('all')

const styleOptions: { value: IconStyle; label: string }[] = [
  { value: 'all', label: '全部' },
  { value: 'outlined', label: '线形' },
  { value: 'filled', label: '实底' },
]

const categories = computed(() => ['all', ...getAllCategories()])

// 按风格过滤图标
const filterByStyle = (icons: IconSearchResult[]): IconSearchResult[] => {
  if (iconStyle.value === 'filled') {
    return icons.filter((i) => i.name.endsWith('-filled'))
  }
  if (iconStyle.value === 'outlined') {
    return icons.filter((i) => !i.name.endsWith('-filled'))
  }
  return icons
}

// 分组图标数据
const groupedIcons = computed(() => {
  const groups: Record<string, IconSearchResult[]> = {}

  let icons: IconSearchResult[] = []

  if (searchQuery.value.trim()) {
    // 搜索模式 - 不分组，直接显示搜索结果
    return { 'Search Results': filterByStyle(searchIcons(searchQuery.value)) }
  }

  if (selectedCategory.value !== 'all') {
    icons = getIconsByCategory(selectedCategory.value)
  } else {
    icons = getAllIcons()
  }

  // 按风格过滤
  icons = filterByStyle(icons)

  // 按分类分组
  icons.forEach((icon) => {
    if (!groups[icon.category]) {
      groups[icon.category] = []
    }
    groups[icon.category].push(icon)
  })

  // 按 getAllCategories() 的顺序重新排序分组
  const orderedGroups: Record<string, IconSearchResult[]> = {}
  getAllCategories().forEach((category) => {
    if (groups[category]) {
      orderedGroups[category] = groups[category]
    }
  })

  return orderedGroups
})

const totalCount = computed(() => {
  return Object.values(groupedIcons.value).reduce((sum, icons) => sum + icons.length, 0)
})

const copyCode = (icon: IconSearchResult) => {
  const parts = icon.name.split('-')
  const baseName = parts.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('')
  const suffix = icon.name.includes('filled') ? 'Filled' : 'Outlined'
  const componentName = baseName.replace(/filled$/i, '') + suffix
  const code = `<Icon :component="${componentName}" />`

  navigator.clipboard.writeText(code).then(() => {
    copiedIcon.value = icon.name
    setTimeout(() => {
      copiedIcon.value = ''
    }, 2000)
  })
}
</script>

<template>
  <div class="icon-browser">
    <!-- 搜索框 -->
    <div class="search-wrapper">
      <input v-model="searchQuery" type="text" placeholder="在此搜索图标，点击图标可复制代码" class="search-input" />
    </div>

    <!-- 分类标签 -->
    <div class="category-tabs">
      <button
        v-for="category in categories"
        :key="category"
        :class="['category-tab', { active: selectedCategory === category }]"
        @click="selectedCategory = category"
      >
        {{ category === 'all' ? '全部图标' : category }}
      </button>
    </div>

    <!-- 统计信息 + 风格切换 -->
    <div v-if="totalCount > 0" class="icon-stats">
      <span class="stats-text">共 {{ totalCount }} 个图标</span>
      <div class="style-switch">
        <button
          v-for="opt in styleOptions"
          :key="opt.value"
          :class="['style-switch__item', { active: iconStyle === opt.value }]"
          @click="iconStyle = opt.value"
        >
          {{ opt.label }}
        </button>
      </div>
    </div>

    <!-- 图标分组列表 -->
    <div v-if="totalCount > 0" class="icon-groups">
      <div v-for="(icons, groupName) in groupedIcons" :key="groupName" class="icon-group">
        <h4 class="group-title">{{ groupName }}</h4>
        <ul class="icon-list">
          <li
            v-for="icon in icons"
            :key="icon.name"
            :class="['icon-item', { copied: copiedIcon === icon.name }]"
            @click="copyCode(icon)"
          >
            <Icon :component="icon.component" class="icon-svg" />
            <span class="icon-label">{{ icon.name }}</span>
            <span v-if="copiedIcon === icon.name" class="copied-badge">
              <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                <path
                  d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                ></path>
              </svg>
              Copied!
            </span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 空状态 -->
    <div v-else class="empty-state">
      <svg viewBox="64 64 896 896" width="64" height="64" fill="currentColor" opacity="0.3">
        <path
          d="M893.6 693.2L730.4 530c-9.4-9.4-24.6-9.4-33.9 0l-63.7 63.7-96.6-96.6L762.9 270.4c1.8-1.9 3.3-4 4.5-6.2l86.8-158.8c2.8-5.1.9-11.5-4.2-14.3-5.1-2.8-11.5-.9-14.3 4.2L749 253.9c-1.2 2.2-2.7 4.3-4.5 6.2L518.2 486.4 282 250.2c-9.4-9.4-24.6-9.4-33.9 0L64.4 433.9c-9.4 9.4-9.4 24.6 0 33.9l464.6 464.6c9.4 9.4 24.6 9.4 33.9 0l330.7-330.8c9.4-9.4 9.4-24.6 0-33.9z"
        ></path>
      </svg>
      <p class="empty-text">未找到相关图标</p>
    </div>
  </div>
</template>

<style scoped>
.icon-browser {
  width: 100%;
  padding: 0;
}

/* 搜索框 */
.search-wrapper {
  margin-bottom: 24px;
}

.search-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  line-height: 1.5715;
  color: rgba(0, 0, 0, 0.88);
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  transition: all 0.2s;
}

.search-input:hover {
  border-color: #4096ff;
}

.search-input:focus {
  outline: none;
  border-color: #4096ff;
  box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
}

.search-input::placeholder {
  color: rgba(0, 0, 0, 0.45);
}

/* 分类标签 */
.category-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.category-tab {
  padding: 4px 15px;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.88);
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.category-tab:hover {
  color: #4096ff;
  border-color: #4096ff;
}

.category-tab.active {
  color: #1677ff;
  background: #e6f4ff;
  border-color: #91caff;
}

/* 统计信息 */
.icon-stats {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.stats-text {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}

/* 图标分组 */
.icon-groups {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.icon-group {
  width: 100%;
}

.group-title {
  margin: 0 0 16px;
  padding-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.88);
  border-bottom: 1px solid #f0f0f0;
}

/* 风格切换 */
.style-switch {
  display: inline-flex;
  padding: 2px;
  background: #f5f5f5;
  border-radius: 6px;
}

.style-switch__item {
  padding: 2px 12px;
  font-size: 13px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.65);
  background: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.style-switch__item:hover {
  color: rgba(0, 0, 0, 0.88);
}

.style-switch__item.active {
  color: #1677ff;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}

/* 图标列表 */
.icon-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.icon-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  overflow: hidden;
}

.icon-item:hover {
  background-color: #f5f5f5;
}

.icon-item.copied {
  background-color: #e6f4ff;
}

.icon-svg {
  font-size: 36px;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 8px;
}

.icon-label {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.65);
  text-align: center;
  word-break: break-word;
  line-height: 1.4;
}

.copied-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  font-size: 12px;
  color: #52c41a;
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  border-radius: 4px;
  font-weight: 500;
}

/* 空状态 */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  color: rgba(0, 0, 0, 0.45);
}

.empty-text {
  margin-top: 16px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}

/* 响应式 */
@media (max-width: 768px) {
  .icon-list {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }

  .icon-svg {
    font-size: 28px;
  }

  .category-tabs {
    gap: 4px;
  }

  .category-tab {
    padding: 2px 12px;
    font-size: 13px;
  }
}
</style>
