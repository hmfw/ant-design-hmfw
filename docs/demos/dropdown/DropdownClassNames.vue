<template>
  <div class="demo-dropdown-classnames">
    <!-- 场景 1: 自定义触发器 -->
    <section class="demo-section">
      <h3>1. 自定义触发器样式</h3>
      <Dropdown :menu="menu" :class-names="{ trigger: 'custom-trigger' }">
        <Button>自定义触发器</Button>
      </Dropdown>
    </section>

    <!-- 场景 2: 自定义下拉浮层 -->
    <section class="demo-section">
      <h3>2. 自定义下拉浮层样式</h3>
      <Dropdown :menu="menu" :class-names="{ dropdown: 'custom-dropdown' }">
        <Button>自定义浮层</Button>
      </Dropdown>
    </section>

    <!-- 场景 3: 自定义内容容器 -->
    <section class="demo-section">
      <h3>3. 自定义内容容器样式</h3>
      <Dropdown :menu="menu" :class-names="{ content: 'custom-content' }">
        <Button>自定义内容</Button>
      </Dropdown>
    </section>

    <!-- 场景 4: 自定义箭头 -->
    <section class="demo-section">
      <h3>4. 自定义箭头样式</h3>
      <Dropdown :menu="menu" :arrow="true" :class-names="{ arrow: 'custom-arrow' }">
        <Button>带箭头</Button>
      </Dropdown>
    </section>

    <!-- 场景 5: 组合使用多个 classNames -->
    <section class="demo-section">
      <h3>5. 组合使用多个 classNames</h3>
      <Dropdown
        :menu="menu"
        :arrow="true"
        :class-names="{
          trigger: 'combined-trigger',
          dropdown: 'combined-dropdown',
          content: 'combined-content',
          arrow: 'combined-arrow',
        }"
      >
        <Button>综合样式</Button>
      </Dropdown>
    </section>

    <!-- 场景 6: 使用 styles prop -->
    <section class="demo-section">
      <h3>6. 使用 styles 动态样式</h3>
      <Dropdown
        :menu="menu"
        :styles="{
          dropdown: { borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)' },
          content: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '4px' },
        }"
      >
        <Button>动态样式</Button>
      </Dropdown>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Dropdown, Button } from 'ant-design-hmfw'

const menu = {
  items: [
    { key: '1', label: '菜单项一' },
    { key: '2', label: '菜单项二' },
    { key: '3', label: '菜单项三' },
  ],
}
</script>

<style scoped>
.demo-dropdown-classnames {
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

/* 场景 1: 自定义触发器（trigger 是普通容器，可用 :deep 也可全局） */
:deep(.custom-trigger) {
  padding: 4px;
  border: 2px dashed #722ed1;
  border-radius: 8px;
}
</style>

<!-- 全局样式：dropdown 浮层 Teleport 到 body，需用全局样式 -->
<style>
/* 场景 2: 自定义下拉浮层 */
.custom-dropdown {
  border: 2px solid #722ed1 !important;
  border-radius: 12px !important;
  box-shadow: 0 8px 24px rgba(114, 46, 209, 0.2) !important;
}

/* 场景 3: 自定义内容容器 */
.custom-content {
  background: #f9f0ff !important;
  border-radius: 8px !important;
  padding: 4px !important;
}

/* 场景 4: 自定义箭头 */
.custom-arrow {
  background: #722ed1 !important;
  width: 12px !important;
  height: 12px !important;
}

/* 场景 5: 组合样式 */
.combined-dropdown {
  border-radius: 14px !important;
  box-shadow: 0 8px 24px rgba(19, 194, 194, 0.25) !important;
}

.combined-content {
  background: linear-gradient(135deg, #e6fffb 0%, #b5f5ec 100%) !important;
  border-radius: 10px !important;
  padding: 4px !important;
}

.combined-arrow {
  background: #13c2c2 !important;
}

.combined-content .hmfw-menu-item {
  border-radius: 6px;
  transition: all 0.2s ease;
}

.combined-content .hmfw-menu-item:hover {
  background: rgba(19, 194, 194, 0.15) !important;
}
</style>
