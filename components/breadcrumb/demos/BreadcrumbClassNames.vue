<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义根容器和列表 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器和列表样式：</div>
      <Breadcrumb
        :items="[{ title: '首页', href: '#' }, { title: '产品中心', href: '#' }, { title: '详情' }]"
        :class-names="{
          root: 'custom-root',
          list: 'custom-list',
        }"
      />
    </div>

    <!-- 场景 2：自定义面包屑项和链接 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义面包屑项和链接：</div>
      <Breadcrumb
        :items="[{ title: '首页', href: '#' }, { title: '应用列表', href: '#' }, { title: '应用详情' }]"
        :class-names="{
          item: 'custom-item',
          link: 'custom-link',
        }"
      />
    </div>

    <!-- 场景 3：自定义分隔符 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义分隔符样式：</div>
      <Breadcrumb
        :items="[
          { title: '首页', href: '#' },
          { title: '文档', href: '#' },
          { title: '组件', href: '#' },
          { title: 'Breadcrumb' },
        ]"
        separator=">"
        :class-names="{
          separator: 'custom-separator',
        }"
      />
    </div>

    <!-- 场景 4：使用内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Breadcrumb
        :items="[{ title: '首页', href: '#' }, { title: '设置', href: '#' }, { title: '个人信息' }]"
        :styles="{
          root: { padding: '12px 16px', background: '#f0f5ff', borderRadius: '8px' },
          link: { color: '#1677ff', fontWeight: 500 },
          separator: { color: '#d9d9d9', margin: '0 12px' },
        }"
      />
    </div>

    <!-- 场景 5：组合使用 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用（渐变背景 + 自定义间距）：</div>
      <Breadcrumb
        :items="[
          { title: '控制台', href: '#' },
          { title: '项目管理', href: '#' },
          { title: '项目 A', href: '#' },
          { title: '详细信息' },
        ]"
        :class-names="{
          root: 'gradient-root',
          item: 'gradient-item',
          link: 'gradient-link',
        }"
        :styles="{
          separator: { margin: '0 16px' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Breadcrumb } from '@hmfw/ant-design'
</script>

<style scoped>
/* 场景 1：自定义根容器和列表 */
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 12px 20px;
  border-radius: 8px;
}

:deep(.custom-list) {
  display: flex;
  align-items: center;
}

:deep(.custom-root .hmfw-breadcrumb-item .hmfw-breadcrumb-link) {
  color: rgba(255, 255, 255, 0.85);
  transition: all 0.3s;
}

:deep(.custom-root .hmfw-breadcrumb-item .hmfw-breadcrumb-link:hover) {
  color: #ffffff;
}

:deep(.custom-root .hmfw-breadcrumb-separator) {
  color: rgba(255, 255, 255, 0.5);
}

/* 场景 2：自定义面包屑项和链接 */
:deep(.custom-item) {
  transition: all 0.3s;
}

:deep(.custom-item:hover) {
  transform: translateX(2px);
}

:deep(.custom-link) {
  color: #722ed1;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.3s;
}

:deep(.custom-link:hover) {
  background: #f9f0ff;
  color: #531dab;
}

/* 场景 3：自定义分隔符 */
:deep(.custom-separator) {
  color: #1677ff;
  font-weight: bold;
  font-size: 16px;
  margin: 0 12px;
}

/* 场景 5：组合使用 - 渐变背景 */
:deep(.gradient-root) {
  background: linear-gradient(to right, #52c41a, #389e0d);
  padding: 14px 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.3);
  transition: all 0.3s;
}

:deep(.gradient-root:hover) {
  box-shadow: 0 6px 16px rgba(82, 196, 26, 0.4);
  transform: translateY(-2px);
}

:deep(.gradient-item) {
  display: flex;
  align-items: center;
}

:deep(.gradient-link) {
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 6px;
  transition: all 0.3s;
}

:deep(.gradient-link:hover) {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

:deep(.gradient-root .hmfw-breadcrumb-separator) {
  color: rgba(255, 255, 255, 0.6);
}
</style>
