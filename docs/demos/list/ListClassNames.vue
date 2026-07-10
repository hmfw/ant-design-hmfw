<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义头部和底部样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义头部和底部：</div>
      <List
        :data-source="data1"
        :render-item="renderItem1"
        header="精选文章"
        footer="查看更多 →"
        bordered
        :class-names="{
          header: 'custom-header',
          footer: 'custom-footer',
        }"
      />
    </div>

    <!-- 场景 2：自定义列表项和操作按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义列表项和操作样式：</div>
      <List :data-source="data2" :render-item="renderItem2" bordered />
    </div>

    <!-- 场景 3：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <List
        :data-source="data3"
        :render-item="renderItem3"
        header="任务列表"
        bordered
        :styles="{
          root: { borderRadius: '12px', overflow: 'hidden' },
          header: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', fontWeight: 600 },
          items: { background: '#fafafa' },
        }"
      />
    </div>

    <!-- 场景 4：自定义分页器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义分页器：</div>
      <List
        :data-source="longData"
        :render-item="renderItem1"
        :pagination="{ pageSize: 3 }"
        :class-names="{
          pagination: 'custom-pagination',
        }"
      />
    </div>

    <!-- 场景 5：空状态自定义 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义空状态：</div>
      <List
        :data-source="[]"
        bordered
        :class-names="{
          empty: 'custom-empty',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, ListItem, ListItemMeta, Avatar } from '@hmfw/ant-design'

const data1 = ['Vue 3 组件库开发实战', 'TypeScript 类型体操进阶', 'Vite 构建工具深度解析']

const data2 = [
  { title: '用户体验设计', description: '提升产品的整体用户体验' },
  { title: '性能优化', description: '前端性能优化最佳实践' },
  { title: '代码规范', description: '团队协作的代码规范建议' },
]

const data3 = ['完成需求文档评审', '实现用户反馈功能', '修复已知 Bug']

const longData = ['条目 1', '条目 2', '条目 3', '条目 4', '条目 5', '条目 6', '条目 7']

const renderItem1 = (item: string) => h(ListItem, null, () => item)

const renderItem2 = (item: { title: string; description: string }) =>
  h(
    ListItem,
    {
      actions: [h('a', { style: 'color: #1677ff' }, '编辑'), h('a', { style: 'color: #1677ff' }, '删除')],
      classNames: {
        item: 'custom-item',
        action: 'custom-action',
      },
    },
    () =>
      h(ListItemMeta, {
        avatar: h(Avatar, { style: { backgroundColor: '#1677ff' } }, () => item.title[0]),
        title: item.title,
        description: item.description,
        classNames: {
          title: 'custom-title',
          description: 'custom-description',
        },
      }),
  )

const renderItem3 = (item: string) => h(ListItem, null, () => item)
</script>

<style scoped>
:deep(.custom-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
}

:deep(.custom-header:hover) {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

:deep(.custom-footer) {
  background: #f0f5ff;
  color: #1677ff;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

:deep(.custom-footer:hover) {
  background: #e6f0ff;
  color: #0958d9;
}

:deep(.custom-item) {
  transition: all 0.3s;
  padding: 16px;
}

:deep(.custom-item:hover) {
  background: #f0f5ff;
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.15);
}

:deep(.custom-action) {
  gap: 12px;
}

:deep(.custom-action a:hover) {
  color: #0958d9 !important;
  text-decoration: underline;
}

:deep(.custom-title) {
  color: #1677ff;
  font-weight: 600;
}

:deep(.custom-description) {
  font-style: italic;
  color: #8c8c8c;
}

:deep(.custom-pagination) {
  margin-top: 24px;
  text-align: center;
}

:deep(.custom-empty) {
  padding: 48px 0;
  color: #bfbfbf;
  font-size: 16px;
  font-style: italic;
}
</style>
