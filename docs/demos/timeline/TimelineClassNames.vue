<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义根容器和连接线 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">自定义连接线与节点：</div>
      <Timeline
        :items="basicItems"
        :class-names="{
          root: 'custom-timeline-root',
          tail: 'custom-tail',
          dot: 'custom-dot',
        }"
      />
    </div>

    <!-- 场景 2：自定义标题和内容区域 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">自定义标题与内容：</div>
      <Timeline
        mode="alternate"
        :items="labeledItems"
        :class-names="{
          label: 'custom-label',
          content: 'custom-content',
        }"
      />
    </div>

    <!-- 场景 3：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">使用内联样式：</div>
      <Timeline
        :items="colorItems"
        :styles="{
          root: { padding: '16px', backgroundColor: '#f0f5ff', borderRadius: '8px' },
          dot: { transform: 'scale(1.2)' },
          content: { fontSize: '15px', fontWeight: 500 },
        }"
      />
    </div>

    <!-- 场景 4：组合自定义所有子元素 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">组合自定义所有子元素：</div>
      <Timeline
        mode="left"
        :items="complexItems"
        :class-names="{
          root: 'timeline-fancy',
          item: 'timeline-fancy-item',
          label: 'timeline-fancy-label',
          tail: 'timeline-fancy-tail',
          dot: 'timeline-fancy-dot',
          content: 'timeline-fancy-content',
        }"
      />
    </div>

    <!-- 场景 5：水平布局自定义 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">水平布局自定义：</div>
      <Timeline
        orientation="horizontal"
        :items="horizontalItems"
        :class-names="{
          root: 'horizontal-timeline',
          dot: 'horizontal-dot',
          content: 'horizontal-content',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const basicItems = [
  { content: '创建服务站点 2024-01-01' },
  { content: '初步排查网络异常 2024-01-02' },
  { content: '技术测试完成 2024-01-03', color: 'green' },
  { content: '网络异常正在修复中 2024-01-04', color: 'red' },
]

const labeledItems = [
  { title: '2024-01-01', content: '创建服务站点' },
  { title: '2024-01-02', content: '初步排查网络异常' },
  { title: '2024-01-03', content: '技术测试完成', color: 'green' },
]

const colorItems = [
  { content: 'Create a services site 2024-01-01', color: 'blue' },
  { content: 'Solve initial network problems 2024-01-02', color: 'blue' },
  { content: 'Technical testing completed 2024-01-03', color: 'green' },
]

const complexItems = [
  { title: '阶段一', content: '项目启动与需求分析', color: 'blue' },
  { title: '阶段二', content: '技术方案设计与评审', color: 'blue' },
  { title: '阶段三', content: '开发与测试进行中', color: 'green' },
  { title: '阶段四', content: '即将上线部署', color: 'gray' },
]

const horizontalItems = [
  { content: '步骤 1', color: 'green' },
  { content: '步骤 2', color: 'green' },
  { content: '步骤 3', color: 'blue' },
  { content: '步骤 4', color: 'gray' },
]
</script>

<style scoped>
/* 场景 1：自定义连接线与节点 */
:deep(.custom-timeline-root) {
  margin-left: 8px;
}

:deep(.custom-tail) {
  border-left-width: 3px;
  border-left-style: dashed;
  border-left-color: #1890ff;
}

:deep(.custom-dot) {
  border-width: 3px;
  transform: scale(1.2);
  box-shadow: 0 0 8px rgba(24, 144, 255, 0.4);
  transition: all 0.3s;
}

:deep(.custom-dot:hover) {
  transform: scale(1.4);
  box-shadow: 0 0 12px rgba(24, 144, 255, 0.6);
}

/* 场景 2：自定义标题和内容区域 */
:deep(.custom-label) {
  font-weight: 600;
  color: #1890ff;
  background: linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%);
  padding: 4px 12px;
  border-radius: 12px;
  display: inline-block;
}

:deep(.custom-content) {
  background-color: #f0f5ff;
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 3px solid #1890ff;
  transition: all 0.3s;
}

:deep(.custom-content:hover) {
  background-color: #d6e4ff;
  transform: translateX(4px);
}

/* 场景 4：组合自定义所有子元素 */
:deep(.timeline-fancy) {
  background: linear-gradient(to right, #f0f5ff, #fff);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #d6e4ff;
}

:deep(.timeline-fancy-item) {
  margin-bottom: 24px;
}

:deep(.timeline-fancy-label) {
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 6px 16px;
  border-radius: 16px;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

:deep(.timeline-fancy-tail) {
  border-left-width: 2px;
  border-left-style: solid;
  border-image: linear-gradient(to bottom, #667eea, #764ba2) 1;
}

:deep(.timeline-fancy-dot) {
  border: 3px solid #667eea;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.2);
  transition: all 0.3s;
}

:deep(.timeline-fancy-dot:hover) {
  transform: scale(1.3) rotate(90deg);
  box-shadow: 0 0 0 6px rgba(102, 126, 234, 0.3);
}

:deep(.timeline-fancy-content) {
  background: #fff;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
}

:deep(.timeline-fancy-content:hover) {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

/* 场景 5：水平布局自定义 */
:deep(.horizontal-timeline) {
  padding: 24px;
  background: linear-gradient(to right, #f6ffed, #d9f7be);
  border-radius: 12px;
}

:deep(.horizontal-dot) {
  border-width: 3px;
  transform: scale(1.3);
  box-shadow: 0 0 12px rgba(82, 196, 26, 0.5);
  transition: all 0.3s;
}

:deep(.horizontal-dot:hover) {
  transform: scale(1.5);
  box-shadow: 0 0 16px rgba(82, 196, 26, 0.7);
}

:deep(.horizontal-content) {
  background-color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-weight: 500;
}
</style>
