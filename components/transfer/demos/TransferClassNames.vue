<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 自定义列表样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义列表容器和项：</div>
      <Transfer
        v-model:target-keys="targetKeys1"
        :data-source="basicData"
        :class-names="{
          list: 'custom-list',
          item: 'custom-item',
        }"
        :titles="['源列表', '目标列表']"
      />
    </div>

    <!-- 自定义头部和标题 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义头部和标题：</div>
      <Transfer
        v-model:target-keys="targetKeys2"
        :data-source="basicData"
        :class-names="{
          header: 'custom-header',
          title: 'custom-title',
        }"
        :titles="['可选项', '已选项']"
      />
    </div>

    <!-- 自定义操作按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义操作按钮区：</div>
      <Transfer
        v-model:target-keys="targetKeys3"
        :data-source="basicData"
        :class-names="{
          actions: 'custom-actions',
        }"
        :titles="['左侧', '右侧']"
      />
    </div>

    <!-- 完整自定义 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">完整自定义（组合使用）：</div>
      <Transfer
        v-model:target-keys="targetKeys4"
        :data-source="basicData"
        :class-names="{
          root: 'complete-root',
          section: 'complete-section',
          header: 'complete-header',
          title: 'complete-title',
          body: 'complete-body',
          list: 'complete-list',
          item: 'complete-item',
          actions: 'complete-actions',
        }"
        :titles="['待选区', '已选区']"
      />
    </div>

    <!-- 使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式（styles）：</div>
      <Transfer
        v-model:target-keys="targetKeys5"
        :data-source="basicData"
        :styles="{
          section: { border: '2px solid #1890ff', borderRadius: '8px' },
          header: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '12px 16px',
          },
          list: { background: '#fafafa' },
          item: { padding: '12px 16px', borderRadius: '4px' },
        }"
        :titles="['来源', '目标']"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from '@hmfw/ant-design'

const generateData = () => {
  const data = []
  for (let i = 1; i <= 10; i++) {
    data.push({
      key: `item-${i}`,
      title: `选项 ${i}`,
      description: `这是选项 ${i} 的描述`,
    })
  }
  return data
}

const basicData = generateData()

const targetKeys1 = ref(['item-2', 'item-4'])
const targetKeys2 = ref(['item-1', 'item-3'])
const targetKeys3 = ref(['item-5', 'item-6'])
const targetKeys4 = ref(['item-7', 'item-8'])
const targetKeys5 = ref(['item-9', 'item-10'])
</script>

<style scoped>
:deep(.custom-list) {
  background: linear-gradient(to bottom, #ffffff, #f5f5f5);
  border-radius: 4px;
}

:deep(.custom-item) {
  padding: 12px;
  transition: all 0.3s;
  border-radius: 4px;
  margin: 4px 8px;
}

:deep(.custom-item:hover) {
  background: #e6f7ff;
  transform: translateX(4px);
  box-shadow: 0 2px 4px rgba(24, 144, 255, 0.2);
}

:deep(.custom-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 16px;
  border-radius: 8px 8px 0 0;
}

:deep(.custom-title) {
  color: white;
  font-weight: 600;
  font-size: 15px;
}

:deep(.custom-actions) {
  margin: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

:deep(.custom-actions button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  font-weight: 500;
  transition: all 0.3s;
}

:deep(.custom-actions button:hover) {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:deep(.complete-root) {
  background: #fafafa;
  padding: 20px;
  border-radius: 12px;
}

:deep(.complete-section) {
  border: 2px solid #1890ff;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.1);
}

:deep(.complete-header) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  padding: 14px 16px;
  border-radius: 6px 6px 0 0;
}

:deep(.complete-title) {
  color: white;
  font-weight: 700;
  font-size: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

:deep(.complete-body) {
  background: #f5f5f5;
}

:deep(.complete-list) {
  background: white;
  padding: 8px;
}

:deep(.complete-item) {
  padding: 14px 16px;
  border-radius: 6px;
  margin: 6px 0;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.complete-item:hover) {
  background: linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%);
  border-color: #1890ff;
  transform: translateX(6px);
  box-shadow: 0 4px 8px rgba(24, 144, 255, 0.15);
}

:deep(.complete-actions) {
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

:deep(.complete-actions button) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  border: none;
  color: white;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(82, 196, 26, 0.3);
  transition: all 0.3s;
}

:deep(.complete-actions button:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.5);
}

:deep(.complete-actions button:disabled) {
  background: #d9d9d9;
  box-shadow: none;
}
</style>
