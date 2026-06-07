<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon, searchIcons, getIconsByCategory, getAllCategories, getAllIcons } from 'ant-design-hmfw'
import type { IconSearchResult } from 'ant-design-hmfw'

const searchQuery = ref('')
const selectedCategory = ref('all')
const copiedIcon = ref('')

const categories = computed(() => ['all', ...getAllCategories()])

const filteredIcons = computed(() => {
  let results: IconSearchResult[] = []

  if (searchQuery.value.trim()) {
    // 搜索模式
    results = searchIcons(searchQuery.value)
  } else if (selectedCategory.value !== 'all') {
    // 分类过滤模式
    results = getIconsByCategory(selectedCategory.value)
  } else {
    // 显示所有图标
    results = getAllIcons()
  }

  return results
})

const copyCode = (iconName: string) => {
  const componentName =
    iconName
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'Outlined'

  const code = `import { ${componentName} } from 'ant-design-hmfw'\n\n<Icon :component="${componentName}" />`

  navigator.clipboard.writeText(code).then(() => {
    copiedIcon.value = iconName
    setTimeout(() => {
      copiedIcon.value = ''
    }, 2000)
  })
}
</script>

<template>
  <div class="icon-browser">
    <!-- 搜索和过滤栏 -->
    <div class="controls">
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索图标... (如: home, search, arrow)"
          class="search-input"
        />
        <span class="search-icon">🔍</span>
      </div>

      <div class="category-filter">
        <label>分类：</label>
        <select v-model="selectedCategory" class="category-select">
          <option v-for="category in categories" :key="category" :value="category">
            {{ category === 'all' ? '全部' : category }}
          </option>
        </select>
      </div>
    </div>

    <!-- 结果统计 -->
    <div class="stats">
      找到 <strong>{{ filteredIcons.length }}</strong> 个图标
      <span v-if="searchQuery" class="search-term"> 搜索: "{{ searchQuery }}" </span>
    </div>

    <!-- 图标网格 -->
    <div class="icon-grid">
      <div
        v-for="icon in filteredIcons"
        :key="icon.name"
        class="icon-card"
        :class="{ copied: copiedIcon === icon.name }"
        @click="copyCode(icon.name)"
      >
        <div class="icon-display">
          <Icon :component="icon.component" :style="{ fontSize: '32px' }" />
        </div>
        <div class="icon-name">
          {{ icon.name }}
        </div>
        <div class="icon-category">
          {{ icon.category }}
        </div>
        <div class="icon-keywords">
          <span v-for="keyword in icon.keywords.slice(0, 3)" :key="keyword" class="keyword-tag">
            {{ keyword }}
          </span>
        </div>
        <div v-if="copiedIcon === icon.name" class="copied-indicator">✓ 已复制</div>
      </div>
    </div>

    <!-- 空状态 -->
    <div v-if="filteredIcons.length === 0" class="empty-state">
      <div class="empty-icon">🔍</div>
      <div class="empty-text">未找到匹配的图标</div>
      <div class="empty-hint">尝试其他关键词或选择不同的分类</div>
    </div>
  </div>
</template>

<style scoped>
.icon-browser {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.controls {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.search-box {
  position: relative;
  flex: 1;
  min-width: 300px;
}

.search-input {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
}

.search-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  opacity: 0.5;
}

.category-filter {
  display: flex;
  align-items: center;
  gap: 8px;
}

.category-select {
  padding: 8px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.category-select:hover {
  border-color: #1890ff;
}

.stats {
  margin-bottom: 16px;
  color: #666;
  font-size: 14px;
}

.search-term {
  color: #1890ff;
  margin-left: 8px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.icon-card {
  position: relative;
  padding: 20px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  background: #fff;
}

.icon-card:hover {
  border-color: #1890ff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.icon-card.copied {
  border-color: #52c41a;
  background: #f6ffed;
}

.icon-display {
  margin-bottom: 12px;
  color: #333;
}

.icon-name {
  font-size: 13px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}

.icon-category {
  font-size: 11px;
  color: #999;
  margin-bottom: 8px;
  text-transform: capitalize;
}

.icon-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
  min-height: 20px;
}

.keyword-tag {
  font-size: 10px;
  padding: 2px 6px;
  background: #f0f0f0;
  border-radius: 4px;
  color: #666;
}

.copied-indicator {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 12px;
  color: #52c41a;
  font-weight: 500;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.empty-text {
  font-size: 16px;
  margin-bottom: 8px;
  color: #666;
}

.empty-hint {
  font-size: 14px;
}
</style>
