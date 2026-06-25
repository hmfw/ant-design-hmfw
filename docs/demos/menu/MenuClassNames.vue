<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义菜单项样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义菜单项样式：</div>
      <Menu
        mode="inline"
        :default-selected-keys="['1']"
        :items="basicItems"
        :class-names="{
          item: 'custom-item',
          itemSelected: 'custom-item-selected',
          itemIcon: 'custom-icon',
        }"
        style="width: 256px"
      />
    </div>

    <!-- 场景 2：自定义子菜单样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义子菜单样式：</div>
      <Menu
        mode="inline"
        :default-open-keys="['sub1']"
        :default-selected-keys="['1']"
        :items="submenuItems"
        :class-names="{
          submenu: 'custom-submenu',
          submenuTitle: 'custom-submenu-title',
          submenuArrow: 'custom-arrow',
        }"
        style="width: 256px"
      />
    </div>

    <!-- 场景 3：自定义分组和分割线 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义分组和分割线：</div>
      <Menu
        mode="inline"
        :default-selected-keys="['1']"
        :items="groupItems"
        :class-names="{
          itemGroup: 'custom-group',
          itemGroupTitle: 'custom-group-title',
          divider: 'custom-divider',
        }"
        style="width: 256px"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Menu
        mode="inline"
        :default-selected-keys="['2']"
        :items="basicItems"
        :styles="{
          root: { border: '2px solid #722ed1', borderRadius: '12px' },
          item: { margin: '8px 12px' },
          itemSelected: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            fontWeight: 'bold',
          },
          itemIcon: { fontSize: '16px' },
        }"
        style="width: 256px"
      />
    </div>

    <!-- 场景 5：水平菜单自定义样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">水平菜单自定义：</div>
      <Menu
        mode="horizontal"
        :default-selected-keys="['mail']"
        :items="horizontalItems"
        :class-names="{
          root: 'custom-horizontal',
          item: 'custom-horizontal-item',
          itemSelected: 'custom-horizontal-selected',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu } from '@hmfw/ant-design'

const basicItems = [
  { key: '1', label: '导航一', icon: 'mail' },
  { key: '2', label: '导航二', icon: 'appstore' },
  { key: '3', label: '导航三', icon: 'setting' },
]

const submenuItems = [
  { key: '1', label: '选项 1', icon: 'mail' },
  {
    key: 'sub1',
    label: '子菜单',
    icon: 'appstore',
    children: [
      { key: '2', label: '选项 2' },
      { key: '3', label: '选项 3' },
    ],
  },
  { key: '4', label: '选项 4', icon: 'setting' },
]

const groupItems = [
  {
    type: 'group',
    label: '分组 1',
    children: [
      { key: '1', label: '选项 1', icon: 'user' },
      { key: '2', label: '选项 2', icon: 'team' },
    ],
  },
  { type: 'divider' },
  {
    type: 'group',
    label: '分组 2',
    children: [
      { key: '3', label: '选项 3', icon: 'file' },
      { key: '4', label: '选项 4', icon: 'setting' },
    ],
  },
]

const horizontalItems = [
  { key: 'mail', label: '邮件', icon: 'mail' },
  { key: 'app', label: '应用', icon: 'appstore' },
  { key: 'setting', label: '设置', icon: 'setting' },
]
</script>

<style scoped>
/* 自定义菜单项 */
:deep(.custom-item) {
  border-left: 3px solid transparent;
  transition: all 0.3s;
}

:deep(.custom-item:hover) {
  border-left-color: #1677ff;
  transform: translateX(4px);
}

:deep(.custom-item-selected) {
  background: linear-gradient(90deg, #e6f4ff 0%, transparent 100%) !important;
  border-left-color: #1677ff !important;
}

:deep(.custom-icon) {
  font-size: 18px;
  color: #1677ff;
}

/* 自定义子菜单 */
:deep(.custom-submenu) {
  margin: 8px 0;
}

:deep(.custom-submenu-title) {
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  border-radius: 8px;
  font-weight: 600;
}

:deep(.custom-submenu-title:hover) {
  background: linear-gradient(135deg, #d6e4ff 0%, #bae0ff 100%) !important;
}

:deep(.custom-arrow) {
  color: #1677ff;
  font-size: 12px;
}

/* 自定义分组 */
:deep(.custom-group) {
  padding: 8px 0;
}

:deep(.custom-group-title) {
  background: linear-gradient(90deg, #1677ff 0%, transparent 100%);
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  padding-left: 20px;
}

:deep(.custom-divider) {
  background: linear-gradient(90deg, #1677ff 0%, #52c41a 100%);
  height: 2px;
  margin: 12px 8px;
}

/* 自定义水平菜单 */
:deep(.custom-horizontal) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  border: none;
  padding: 0 16px;
}

:deep(.custom-horizontal-item) {
  color: rgba(255, 255, 255, 0.85);
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
}

:deep(.custom-horizontal-item:hover) {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

:deep(.custom-horizontal-selected) {
  color: #fff !important;
  border-bottom-color: #fff !important;
  background: rgba(255, 255, 255, 0.15);
}
</style>
