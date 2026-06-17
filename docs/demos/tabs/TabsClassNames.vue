<template>
  <div class="demo-tabs-classnames">
    <!-- 场景 1: 自定义根节点 -->
    <section class="demo-section">
      <h3>1. 自定义根节点样式</h3>
      <Tabs :items="items" :class-names="{ root: 'custom-root' }" />
    </section>

    <!-- 场景 2: 自定义标签栏 -->
    <section class="demo-section">
      <h3>2. 自定义标签栏样式</h3>
      <Tabs :items="items" :class-names="{ nav: 'custom-nav' }" />
    </section>

    <!-- 场景 3: 自定义标签项与激活态 -->
    <section class="demo-section">
      <h3>3. 自定义标签项与激活态</h3>
      <Tabs :items="items" :class-names="{ tab: 'custom-tab', tabActive: 'custom-tab-active' }" />
    </section>

    <!-- 场景 4: 自定义墨条 -->
    <section class="demo-section">
      <h3>4. 自定义墨条样式</h3>
      <Tabs :items="items" :class-names="{ inkBar: 'custom-inkbar' }" />
    </section>

    <!-- 场景 5: 自定义内容区域 -->
    <section class="demo-section">
      <h3>5. 自定义内容区域样式</h3>
      <Tabs :items="items" :class-names="{ content: 'custom-content', tabpane: 'custom-tabpane' }" />
    </section>

    <!-- 场景 6: 组合使用多个 classNames -->
    <section class="demo-section">
      <h3>6. 组合使用多个 classNames</h3>
      <Tabs
        :items="items"
        :class-names="{
          root: 'combined-root',
          nav: 'combined-nav',
          tab: 'combined-tab',
          tabActive: 'combined-tab-active',
          inkBar: 'combined-inkbar',
          content: 'combined-content',
        }"
      />
    </section>

    <!-- 场景 7: 使用 styles prop -->
    <section class="demo-section">
      <h3>7. 使用 styles 动态样式</h3>
      <Tabs
        :items="items"
        :styles="{
          root: { border: '2px solid #1890ff', borderRadius: '12px', padding: '12px' },
          nav: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '8px' },
          content: { padding: '16px', background: '#f0f2f5', borderRadius: '8px', marginTop: '12px' },
        }"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { Tabs } from '../../../components'

const items = [
  { key: '1', label: '标签一', children: '这是标签一的内容面板' },
  { key: '2', label: '标签二', children: '这是标签二的内容面板' },
  { key: '3', label: '标签三', children: '这是标签三的内容面板' },
]
</script>

<style scoped>
.demo-tabs-classnames {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-section {
  padding: 16px;
  background: #fafafa;
  border-radius: 8px;
}

.demo-section h3 {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #666;
}

/* 场景 1: 自定义根节点 */
:deep(.custom-root) {
  border: 2px dashed #722ed1;
  border-radius: 12px;
  padding: 12px;
  background: #f9f0ff;
}

/* 场景 2: 自定义标签栏 */
:deep(.custom-nav) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  padding: 4px 8px;
}

:deep(.custom-nav .hmfw-tabs-tab) {
  color: rgba(255, 255, 255, 0.75);
}

:deep(.custom-nav .hmfw-tabs-tab-active) {
  color: white;
}

/* 场景 3: 自定义标签项与激活态 */
:deep(.custom-tab) {
  border-radius: 6px 6px 0 0;
  transition: all 0.3s ease;
}

:deep(.custom-tab:hover) {
  background: #e6f7ff;
}

:deep(.custom-tab-active) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white !important;
  font-weight: 600;
}

/* 场景 4: 自定义墨条 */
:deep(.custom-inkbar) {
  height: 4px !important;
  background: linear-gradient(to right, #52c41a, #389e0d) !important;
  border-radius: 2px;
}

/* 场景 5: 自定义内容区域 */
:deep(.custom-content) {
  background: #fff7e6;
  border-radius: 8px;
  margin-top: 8px;
}

:deep(.custom-tabpane) {
  padding: 16px;
  color: #d4380d;
  font-weight: 500;
}

/* 场景 6: 组合样式 */
:deep(.combined-root) {
  border: 2px solid #13c2c2;
  border-radius: 12px;
  padding: 12px;
  background: #e6fffb;
}

:deep(.combined-nav) {
  background: #13c2c2;
  border-radius: 8px;
  padding: 4px 8px;
}

:deep(.combined-tab) {
  color: rgba(255, 255, 255, 0.75);
  border-radius: 6px 6px 0 0;
}

:deep(.combined-tab-active) {
  color: white !important;
  font-weight: 600;
}

:deep(.combined-inkbar) {
  background: #fff !important;
  height: 3px !important;
}

:deep(.combined-content) {
  background: white;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
}
</style>
