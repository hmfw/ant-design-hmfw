<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义根容器背景 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">自定义根容器背景：</div>
      <Steps :current="1" :items="basicItems" :class-names="{ root: 'custom-root' }" />
    </div>

    <!-- 场景 2：自定义图标和标题样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">自定义图标与标题：</div>
      <Steps
        :current="1"
        :items="basicItems"
        :class-names="{
          icon: 'custom-icon',
          title: 'custom-title',
        }"
      />
    </div>

    <!-- 场景 3：自定义连接线样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">自定义连接线：</div>
      <Steps
        :current="1"
        :items="itemsWithDescription"
        :class-names="{
          tail: 'custom-tail',
          description: 'custom-description',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">使用内联样式：</div>
      <Steps
        :current="2"
        :items="basicItems"
        :styles="{
          root: { padding: '20px', backgroundColor: '#fafafa', borderRadius: '8px' },
          icon: { fontSize: '20px' },
          title: { fontWeight: 600, color: '#1677ff' },
        }"
      />
    </div>

    <!-- 场景 5：垂直步骤条组合定制 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">垂直步骤条组合定制：</div>
      <Steps
        orientation="vertical"
        :current="1"
        :items="itemsWithDescription"
        :class-names="{
          item: 'custom-vertical-item',
          container: 'custom-container',
          content: 'custom-content',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const basicItems = [
  { title: '已完成', content: '这是第一步的描述' },
  { title: '进行中', content: '这是第二步的描述' },
  { title: '待处理', content: '这是第三步的描述' },
]

const itemsWithDescription = [
  { title: '注册账号', content: '填写基本信息并验证邮箱' },
  { title: '完善资料', content: '上传头像并填写个人详情' },
  { title: '开始使用', content: '探索产品功能' },
]
</script>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(to right, #f0f5ff, #e6f4ff);
  padding: 16px;
  border-radius: 8px;
}

:deep(.custom-icon) {
  transform: scale(1.2);
  transition: all 0.3s;
}

:deep(.custom-icon:hover) {
  transform: scale(1.3) rotate(360deg);
  transition: all 0.5s;
}

:deep(.custom-title) {
  font-weight: 600;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

:deep(.custom-tail) {
  background: linear-gradient(to bottom, #1677ff 0%, #722ed1 100%) !important;
  height: 3px !important;
}

:deep(.custom-description) {
  color: #722ed1;
  font-style: italic;
}

:deep(.custom-vertical-item) {
  padding: 12px;
  border-radius: 6px;
  transition: all 0.3s;
}

:deep(.custom-vertical-item:hover) {
  background-color: #f0f5ff;
  transform: translateX(4px);
}

:deep(.custom-container) {
  padding-left: 8px;
}

:deep(.custom-content) {
  margin-top: 4px;
}
</style>
