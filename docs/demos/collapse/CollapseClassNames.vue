<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义头部样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义头部渐变背景：</div>
      <Collapse
        :default-active-key="['1']"
        :class-names="{
          header: 'custom-header',
          icon: 'custom-icon',
        }"
      >
        <CollapsePanel key="1" header="渐变头部面板">
          <p>通过 classNames.header 自定义头部背景色，使用渐变效果。</p>
          <p>通过 classNames.icon 控制图标样式。</p>
        </CollapsePanel>
      </Collapse>
    </div>

    <!-- 场景 2：自定义内容区域 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义内容区域样式：</div>
      <Collapse
        :default-active-key="['2']"
        :class-names="{
          body: 'custom-body',
          content: 'custom-content',
        }"
      >
        <CollapsePanel key="2" header="自定义内容面板">
          <p>通过 classNames.body 控制实际内容容器。</p>
          <p>通过 classNames.content 控制外层动画容器。</p>
        </CollapsePanel>
      </Collapse>
    </div>

    <!-- 场景 3：高级组合定制 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合多个语义节点：</div>
      <Collapse
        :default-active-key="['3']"
        :class-names="{
          item: 'custom-item',
          header: 'custom-header-combined',
          headerText: 'custom-header-text',
          icon: 'custom-icon-combined',
          body: 'custom-body-combined',
        }"
      >
        <CollapsePanel key="3" header="完整定制面板" extra="标签">
          <p>同时自定义多个语义节点的样式。</p>
          <p>包括面板项、头部、头部文本、图标和内容。</p>
        </CollapsePanel>
      </Collapse>
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Collapse
        :default-active-key="['4']"
        :styles="{
          header: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderRadius: '8px',
            padding: '12px 16px',
          },
          icon: { color: 'white', fontSize: '16px' },
          body: { backgroundColor: '#f0f5ff', padding: '16px', borderRadius: '0 0 8px 8px' },
        }"
      >
        <CollapsePanel key="4" header="内联样式面板">
          <p>通过 styles 属性直接应用内联样式。</p>
          <p>styles 优先级高于 classNames。</p>
        </CollapsePanel>
      </Collapse>
    </div>

    <!-- 场景 5：悬停效果与动画 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">悬停效果与动画：</div>
      <Collapse
        :default-active-key="['5']"
        :class-names="{
          item: 'hover-item',
          header: 'hover-header',
          icon: 'hover-icon',
        }"
      >
        <CollapsePanel key="5" header="悬停效果面板">
          <p>通过 CSS 为头部添加悬停动画效果。</p>
          <p>图标旋转和头部阴影变化。</p>
        </CollapsePanel>
      </Collapse>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Collapse, CollapsePanel } from '@hmfw/ant-design'
</script>

<style scoped>
/* 场景 1：渐变头部 */
:deep(.custom-header) {
  background: linear-gradient(to right, #52c41a, #389e0d);
  color: white;
  border-radius: 6px;
  transition: all 0.3s;
}

:deep(.custom-header:hover) {
  transform: translateX(4px);
}

:deep(.custom-icon) {
  color: white;
  font-size: 16px;
}

/* 场景 2：内容区域 */
:deep(.custom-body) {
  background-color: #f6ffed;
  border-left: 3px solid #52c41a;
  padding: 16px;
}

:deep(.custom-content) {
  border-radius: 0 0 6px 6px;
  overflow: hidden;
}

/* 场景 3：组合定制 */
:deep(.custom-item) {
  border: 2px solid #1890ff;
  border-radius: 8px;
  margin-bottom: 8px;
  overflow: hidden;
}

:deep(.custom-header-combined) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
}

:deep(.custom-header-text) {
  font-weight: 600;
  font-size: 16px;
}

:deep(.custom-icon-combined) {
  color: #fadb14;
  font-size: 18px;
}

:deep(.custom-body-combined) {
  background: #e6f7ff;
  padding: 20px;
}

/* 场景 5：悬停效果 */
:deep(.hover-item) {
  transition: all 0.3s;
  border-radius: 6px;
}

:deep(.hover-header) {
  transition: all 0.3s;
}

:deep(.hover-header:hover) {
  background-color: #fafafa;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

:deep(.hover-icon) {
  transition: transform 0.3s;
}

:deep(.hover-header:hover .hover-icon) {
  transform: scale(1.2);
}
</style>
