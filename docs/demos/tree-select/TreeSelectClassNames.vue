<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义选择器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义选择器容器（渐变背景）：</div>
      <TreeSelect
        v-model:value="value1"
        :tree-data="treeData"
        placeholder="请选择部门"
        allow-clear
        :class-names="{
          root: 'custom-selector-root',
          selector: 'custom-selector',
          arrow: 'custom-arrow',
        }"
        style="width: 280px"
      />
    </div>

    <!-- 场景 2：自定义下拉面板与树节点 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义下拉面板与树节点样式：</div>
      <TreeSelect
        v-model:value="value2"
        :tree-data="treeData"
        placeholder="选择分类"
        tree-default-expand-all
        :class-names="{
          dropdown: 'custom-dropdown',
          treeNode: 'custom-tree-node',
          treeNodeContent: 'custom-tree-node-content',
        }"
        style="width: 280px"
      />
    </div>

    <!-- 场景 3：多选模式自定义标签样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">多选模式自定义标签：</div>
      <TreeSelect
        v-model:value="value3"
        :tree-data="treeData"
        multiple
        placeholder="选择多个部门"
        allow-clear
        :class-names="{
          selector: 'custom-multi-selector',
          item: 'custom-multi-item',
        }"
        style="width: 320px"
      />
    </div>

    <!-- 场景 4：可勾选模式自定义复选框 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">可勾选模式自定义复选框：</div>
      <TreeSelect
        v-model:value="value4"
        :tree-data="treeData"
        tree-checkable
        placeholder="勾选节点"
        show-checked-strategy="SHOW_PARENT"
        :class-names="{
          treeCheckbox: 'custom-checkbox',
          treeSwitcher: 'custom-switcher',
        }"
        style="width: 280px"
      />
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用 styles 内联样式：</div>
      <TreeSelect
        v-model:value="value5"
        :tree-data="treeData"
        placeholder="内联样式示例"
        allow-clear
        :styles="{
          root: { borderRadius: '12px', borderColor: '#52c41a' },
          selector: { background: 'linear-gradient(to right, #f0f9ff, #e0f2fe)' },
          dropdown: { borderRadius: '12px', boxShadow: '0 6px 20px rgba(82, 196, 26, 0.2)' },
          treeNode: { padding: '6px 8px' },
        }"
        style="width: 280px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TreeSelect } from 'ant-design-hmfw'
import type { TreeSelectNode } from 'ant-design-hmfw'

const value1 = ref<string | number>()
const value2 = ref<string | number>()
const value3 = ref<(string | number)[]>([])
const value4 = ref<(string | number)[]>([])
const value5 = ref<string | number>()

const treeData: TreeSelectNode[] = [
  {
    value: 'engineering',
    label: '工程部',
    children: [
      { value: 'frontend', label: '前端团队' },
      { value: 'backend', label: '后端团队' },
      { value: 'mobile', label: '移动端团队' },
    ],
  },
  {
    value: 'product',
    label: '产品部',
    children: [
      { value: 'pm', label: '产品经理' },
      { value: 'design', label: '设计师' },
    ],
  },
  {
    value: 'marketing',
    label: '市场部',
    children: [
      { value: 'sales', label: '销售团队' },
      { value: 'promotion', label: '推广团队' },
    ],
  },
]
</script>

<style scoped>
/* 场景 1：渐变选择器 */
:deep(.custom-selector-root) {
  border-color: #722ed1;
  transition: all 0.3s;
}

:deep(.custom-selector-root:hover) {
  border-color: #9254de;
  box-shadow: 0 2px 8px rgba(114, 46, 209, 0.2);
}

:deep(.custom-selector) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

:deep(.custom-arrow) {
  color: white;
}

/* 场景 2：下拉面板与树节点（使用 :global，因为通过 Teleport 渲染） */
:global(.custom-dropdown) {
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  border: 2px solid #1677ff;
}

:global(.custom-tree-node) {
  transition: all 0.3s;
}

:global(.custom-tree-node:hover) {
  background: linear-gradient(90deg, #e6f4ff 0%, #bae0ff 100%);
  transform: translateX(4px);
}

:global(.custom-tree-node-content) {
  font-weight: 500;
  color: #1677ff;
}

/* 场景 3：多选标签 */
:deep(.custom-multi-selector) {
  background: #f0f5ff;
  border-color: #adc6ff;
  padding: 4px 8px;
}

:deep(.custom-multi-item) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 4px 12px;
  font-size: 13px;
  transition: all 0.3s;
}

:deep(.custom-multi-item:hover) {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
}

/* 场景 4：复选框与展开按钮（使用 :global） */
:global(.custom-checkbox) {
  border-color: #52c41a;
  border-width: 2px;
  border-radius: 4px;
}

:global(.hmfw-tree-select-tree-checkbox-checked .custom-checkbox) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  border-color: #52c41a;
}

:global(.custom-switcher) {
  color: #1677ff;
  font-weight: bold;
}

:global(.custom-switcher:hover) {
  color: #096dd9;
}
</style>
