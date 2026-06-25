<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义选择器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义选择器样式：</div>
      <Cascader
        :options="cityOptions"
        placeholder="请选择城市"
        :class-names="{
          root: 'custom-cascader-root',
          selector: 'custom-selector',
          arrow: 'custom-arrow',
        }"
      />
    </div>

    <!-- 场景 2：自定义下拉面板样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义下拉面板与菜单项：</div>
      <Cascader
        :options="cityOptions"
        placeholder="请选择城市"
        :class-names="{
          dropdown: 'custom-dropdown',
          menu: 'custom-menu',
          menuItem: 'custom-menu-item',
          menuItemContent: 'custom-menu-item-content',
        }"
      />
    </div>

    <!-- 场景 3：多选模式自定义标签样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">多选模式自定义标签：</div>
      <Cascader
        multiple
        :options="cityOptions"
        placeholder="请选择多个城市"
        :default-value="[
          ['zhejiang', 'hangzhou'],
          ['jiangsu', 'nanjing'],
        ]"
        :class-names="{
          selectionItem: 'custom-tag',
          selectionItemContent: 'custom-tag-content',
          selectionItemRemove: 'custom-tag-remove',
        }"
      />
    </div>

    <!-- 场景 4：搜索模式高亮样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">搜索高亮自定义：</div>
      <Cascader
        show-search
        :options="cityOptions"
        placeholder="搜索城市"
        :class-names="{
          searchInput: 'custom-search-input',
          menuItemHighlight: 'custom-highlight',
        }"
      />
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Cascader
        :options="cityOptions"
        placeholder="请选择城市"
        :styles="{
          root: { borderRadius: '20px', borderColor: '#722ed1' },
          selector: { padding: '8px 16px' },
          dropdown: { borderRadius: '12px', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)' },
          menuItem: { padding: '10px 16px' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Cascader } from '@hmfw/ant-design'

const cityOptions = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      { value: 'hangzhou', label: '杭州' },
      { value: 'ningbo', label: '宁波' },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      { value: 'nanjing', label: '南京' },
      { value: 'suzhou', label: '苏州' },
    ],
  },
  {
    value: 'guangdong',
    label: '广东',
    children: [
      { value: 'guangzhou', label: '广州' },
      { value: 'shenzhen', label: '深圳' },
    ],
  },
]
</script>

<style scoped>
:deep(.custom-cascader-root) {
  border: 2px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  border-radius: 8px;
  transition: all 0.3s;
}

:deep(.custom-cascader-root:hover) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

:deep(.custom-selector) {
  padding: 6px 12px;
}

:deep(.custom-arrow) {
  color: #764ba2;
  transition: transform 0.3s;
}

:deep(.custom-tag) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 4px 8px;
  transition: all 0.3s;
}

:deep(.custom-tag:hover) {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
}

:deep(.custom-tag-content) {
  color: white;
  font-weight: 500;
}

:deep(.custom-tag-remove) {
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
}

:deep(.custom-tag-remove:hover) {
  color: white;
  background: rgba(255, 255, 255, 0.2);
}

:deep(.custom-search-input) {
  border: 2px solid #722ed1;
  border-radius: 6px;
}

:deep(.custom-search-input:focus) {
  border-color: #531dab;
  box-shadow: 0 0 0 2px rgba(114, 46, 209, 0.1);
}

:deep(.custom-highlight) {
  color: #d4380d;
  font-weight: 600;
  background: #fff2e8;
  padding: 0 2px;
  border-radius: 2px;
}
</style>

<style>
/* 弹层通过 Teleport 渲染，必须使用 :global() */
:global(.custom-dropdown) {
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border: 2px solid #f0f0f0;
}

:global(.custom-menu) {
  background: linear-gradient(to bottom, #ffffff 0%, #fafafa 100%);
}

:global(.custom-menu-item) {
  border-radius: 6px;
  margin: 4px 8px;
  transition: all 0.3s;
}

:global(.custom-menu-item:hover) {
  background: linear-gradient(135deg, #e6f4ff 0%, #f0e6ff 100%);
  transform: translateX(4px);
}

:global(.custom-menu-item-content) {
  font-weight: 500;
  color: #262626;
}
</style>
