<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1: 自定义子元素容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义子元素容器样式：</div>
      <Space :class-names="{ item: 'custom-item' }">
        <Button>按钮 1</Button>
        <Button>按钮 2</Button>
        <Button>按钮 3</Button>
      </Space>
    </div>

    <!-- 场景 2: 自定义分隔符样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义分隔符样式：</div>
      <Space separator="|" :class-names="{ split: 'custom-split' }">
        <span>选项 1</span>
        <span>选项 2</span>
        <span>选项 3</span>
      </Space>
    </div>

    <!-- 场景 3: 组合使用 classNames -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义根容器、子元素和分隔符：</div>
      <Space
        separator="·"
        :class-names="{
          root: 'custom-root',
          item: 'custom-item-combined',
          split: 'custom-split-combined',
        }"
      >
        <span>首页</span>
        <span>产品</span>
        <span>关于</span>
      </Space>
    </div>

    <!-- 场景 4: 垂直布局自定义 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">垂直布局自定义子元素：</div>
      <Space direction="vertical" :class-names="{ item: 'custom-item-vertical' }">
        <Button type="primary">主按钮</Button>
        <Button>次要按钮</Button>
        <Button type="dashed">虚线按钮</Button>
      </Space>
    </div>

    <!-- 场景 5: 使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用 styles 内联样式：</div>
      <Space
        separator="|"
        :styles="{
          root: { padding: '12px', background: '#f0f5ff', borderRadius: '8px' },
          item: { padding: '4px 8px', background: '#e6f7ff', borderRadius: '4px' },
          split: { color: '#1890ff', fontWeight: 'bold', margin: '0 4px' },
        }"
      >
        <span>项目 A</span>
        <span>项目 B</span>
        <span>项目 C</span>
      </Space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-hmfw'
</script>

<style scoped>
/* 场景 1: 自定义子元素容器 */
:deep(.custom-item) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 8px 16px;
  border-radius: 6px;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
}

:deep(.custom-item:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* 场景 2: 自定义分隔符样式 */
:deep(.custom-split) {
  color: #1890ff;
  font-size: 20px;
  font-weight: bold;
  margin: 0 8px;
}

/* 场景 3: 组合使用 */
:deep(.custom-root) {
  padding: 16px;
  background: linear-gradient(to right, #f6ffed, #d9f7be);
  border-radius: 8px;
  border: 2px solid #52c41a;
}

:deep(.custom-item-combined) {
  padding: 6px 12px;
  background: white;
  border-radius: 4px;
  color: #52c41a;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

:deep(.custom-item-combined:hover) {
  background: #52c41a;
  color: white;
  transform: scale(1.05);
}

:deep(.custom-split-combined) {
  color: #52c41a;
  font-size: 18px;
  font-weight: bold;
}

/* 场景 4: 垂直布局 */
:deep(.custom-item-vertical) {
  border-left: 4px solid #1890ff;
  padding-left: 12px;
  transition: all 0.3s ease;
}

:deep(.custom-item-vertical:hover) {
  border-left-color: #722ed1;
  padding-left: 16px;
  background: #f9f0ff;
}
</style>
