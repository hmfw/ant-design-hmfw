<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 自定义节点样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义节点项样式：</div>
      <Tree
        :tree-data="treeData"
        :default-expanded-keys="['1']"
        :class-names="{
          item: 'custom-item',
        }"
      />
    </div>

    <!-- 自定义图标和标题 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义图标和标题（需开启 showIcon）：</div>
      <Tree
        :tree-data="treeData"
        :default-expanded-keys="['1']"
        show-icon
        :class-names="{
          itemIcon: 'custom-icon',
          itemTitle: 'custom-title',
        }"
      />
    </div>

    <!-- 自定义展开/收起开关 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义展开/收起开关：</div>
      <Tree
        :tree-data="treeData"
        :default-expanded-keys="['1']"
        :class-names="{
          itemSwitcher: 'custom-switcher',
        }"
      />
    </div>

    <!-- 自定义根容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器样式：</div>
      <Tree
        :tree-data="treeData"
        :default-expanded-keys="['1', '2']"
        :class-names="{
          root: 'custom-root',
        }"
      />
    </div>

    <!-- 完整自定义 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">完整自定义（组合使用）：</div>
      <Tree
        :tree-data="treeData"
        :default-expanded-keys="['1']"
        show-icon
        checkable
        :class-names="{
          root: 'complete-root',
          item: 'complete-item',
          itemIcon: 'complete-icon',
          itemTitle: 'complete-title',
          itemSwitcher: 'complete-switcher',
        }"
      />
    </div>

    <!-- 使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式（styles）：</div>
      <Tree
        :tree-data="treeData"
        :default-expanded-keys="['1']"
        show-icon
        :styles="{
          root: {
            background: '#fafafa',
            padding: '16px',
            borderRadius: '8px',
          },
          item: {
            padding: '8px 12px',
            borderRadius: '4px',
          },
          itemIcon: {
            color: '#1890ff',
            fontSize: '18px',
          },
          itemTitle: {
            fontWeight: '500',
            fontSize: '14px',
          },
        }"
      />
    </div>

    <!-- 带搜索的树（高亮节点） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">带搜索高亮：</div>
      <div style="margin-bottom: 8px">
        <Input v-model:value="searchValue" placeholder="搜索节点" style="width: 200px" />
      </div>
      <Tree
        :tree-data="treeData"
        :default-expand-all="true"
        :filter-tree-node="filterTreeNode"
        :class-names="{
          item: 'searchable-item',
          itemTitle: 'searchable-title',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree, Input } from '@hmfw/ant-design'

const treeData = [
  {
    key: '1',
    title: '父节点 1',
    children: [
      {
        key: '1-1',
        title: '子节点 1-1',
        children: [
          { key: '1-1-1', title: '叶子节点 1-1-1' },
          { key: '1-1-2', title: '叶子节点 1-1-2' },
        ],
      },
      { key: '1-2', title: '子节点 1-2' },
    ],
  },
  {
    key: '2',
    title: '父节点 2',
    children: [
      { key: '2-1', title: '子节点 2-1' },
      { key: '2-2', title: '子节点 2-2' },
    ],
  },
  {
    key: '3',
    title: '父节点 3',
    children: [{ key: '3-1', title: '子节点 3-1' }],
  },
]

const searchValue = ref('')

const filterTreeNode = (node: any) => {
  if (!searchValue.value) return false
  return node.title.toLowerCase().includes(searchValue.value.toLowerCase())
}
</script>

<style scoped>
:deep(.custom-item) {
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s;
  margin: 2px 0;
}

:deep(.custom-item:hover) {
  background: #e6f7ff;
  transform: translateX(4px);
}

:deep(.custom-icon) {
  color: #1890ff;
  font-size: 18px;
  margin-right: 8px;
  transition: all 0.3s;
}

:deep(.custom-icon:hover) {
  color: #40a9ff;
  transform: scale(1.2);
}

:deep(.custom-title) {
  font-weight: 500;
  color: #333;
  font-size: 14px;
}

:deep(.custom-switcher) {
  color: #722ed1;
  font-size: 16px;
  transition: all 0.3s;
}

:deep(.custom-switcher:hover) {
  color: #9254de;
  transform: scale(1.2);
}

:deep(.custom-root) {
  background: linear-gradient(to bottom, #ffffff, #f5f5f5);
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
}

:deep(.complete-root) {
  background: #fafafa;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #1890ff20;
}

:deep(.complete-item) {
  padding: 10px 12px;
  border-radius: 6px;
  margin: 4px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid transparent;
}

:deep(.complete-item:hover) {
  background: linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%);
  border-color: #1890ff;
  transform: translateX(6px);
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.15);
}

:deep(.complete-icon) {
  color: #52c41a;
  font-size: 18px;
  margin-right: 8px;
  filter: drop-shadow(0 2px 4px rgba(82, 196, 26, 0.3));
}

:deep(.complete-title) {
  font-weight: 600;
  color: #262626;
  font-size: 14px;
  letter-spacing: 0.3px;
}

:deep(.complete-switcher) {
  color: #722ed1;
  font-size: 16px;
  transition: all 0.3s;
}

:deep(.complete-switcher svg) {
  transition: transform 0.3s;
}

:deep(.complete-switcher:hover) {
  color: #9254de;
}

:deep(.searchable-item) {
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s;
}

:deep(.searchable-title) {
  font-size: 14px;
}

/* 高亮搜索结果 */
:deep(.hmfw-tree-treenode-filtered > .hmfw-tree-node-content-wrapper .searchable-title) {
  background: linear-gradient(135deg, #ffe58f 0%, #ffd666 100%);
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: 600;
  color: #ad6800;
}
</style>
