<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器和滑块 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器与动画滑块：</div>
      <Segmented
        v-model:value="value1"
        :options="['选项一', '选项二', '选项三']"
        :class-names="{
          root: 'custom-root',
          thumb: 'custom-thumb',
        }"
      />
    </div>

    <!-- 场景 2：自定义选项样式（选中/禁用状态） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义选项与状态样式：</div>
      <Segmented
        v-model:value="value2"
        :options="options2"
        :class-names="{
          item: 'custom-item',
          itemSelected: 'custom-item-selected',
          itemDisabled: 'custom-item-disabled',
        }"
      />
    </div>

    <!-- 场景 3：自定义图标和文本 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义图标与文本样式：</div>
      <Segmented
        v-model:value="value3"
        :options="options3"
        :class-names="{
          itemIcon: 'custom-icon',
          itemText: 'custom-text',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Segmented
        v-model:value="value4"
        :options="['Morning', 'Afternoon', 'Evening']"
        :styles="{
          root: {
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            padding: '4px',
          },
          thumb: { borderRadius: '12px', background: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' },
          itemText: { color: '#ffffff', fontWeight: 500 },
        }"
      />
    </div>

    <!-- 场景 5：组合使用 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用（垂直模式）：</div>
      <Segmented
        v-model:value="value5"
        :options="options5"
        vertical
        :class-names="{
          root: 'custom-vertical-root',
          item: 'custom-vertical-item',
        }"
        :styles="{
          itemIcon: { fontSize: '20px' },
          itemLabel: { padding: '8px 16px' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from '@hmfw/ant-design'
import { HomeOutlined, UserOutlined, SettingOutlined } from '@hmfw/ant-design'

const value1 = ref('选项一')

const value2 = ref('option1')
const options2 = [
  { value: 'option1', label: '启用选项' },
  { value: 'option2', label: '另一选项' },
  { value: 'option3', label: '禁用选项', disabled: true },
]

const value3 = ref('list')
const options3 = [
  { value: 'list', label: '列表', icon: h(Icon, { component: HomeOutlined }) },
  { value: 'grid', label: '网格', icon: h(Icon, { component: UserOutlined }) },
]

const value4 = ref('Morning')

const value5 = ref('home')
const options5 = [
  { value: 'home', icon: h(Icon, { component: HomeOutlined }) },
  { value: 'user', icon: h(Icon, { component: UserOutlined }) },
  { value: 'settings', icon: h(Icon, { component: SettingOutlined }) },
]
</script>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  border: 2px solid #1677ff;
  padding: 4px;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.2);
}

:deep(.custom-thumb) {
  background: linear-gradient(135deg, #1677ff 0%, #4096ff 100%);
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.3);
}

:deep(.custom-item) {
  transition: all 0.3s;
}

:deep(.custom-item:hover) {
  transform: translateY(-1px);
}

:deep(.custom-item-selected) {
  color: #ffffff;
  font-weight: 600;
}

:deep(.custom-item-disabled) {
  opacity: 0.4;
  text-decoration: line-through;
}

:deep(.custom-icon) {
  font-size: 18px;
  filter: drop-shadow(0 0 2px rgba(22, 119, 255, 0.4));
}

:deep(.custom-text) {
  font-weight: 500;
  letter-spacing: 0.5px;
}

:deep(.custom-vertical-root) {
  background: #f6ffed;
  border: 2px solid #52c41a;
  padding: 4px;
  border-radius: 12px;
}

:deep(.custom-vertical-item) {
  border-radius: 8px;
  transition: all 0.3s;
}

:deep(.custom-vertical-item:hover) {
  background: rgba(82, 196, 26, 0.1);
}
</style>
