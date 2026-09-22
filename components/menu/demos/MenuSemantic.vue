<template>
  <SemanticPreview component="Menu" :semantics="semantics" :height="480">
    <template #default="{ classNames }">
      <!-- inline 模式 + 预置 openKeys / selectedKeys，让所有语义节点（含子菜单、分组、分割线）都真实渲染 -->
      <Menu
        mode="inline"
        :items="items"
        :selected-keys="['selected', 'sub-child']"
        :open-keys="['sub1']"
        :class-names="classNames"
        style="width: 100%"
      />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Menu } from '@hmfw/ant-design'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@hmfw/icons'
import type { ItemType } from '@hmfw/ant-design'

// 覆盖全部语义节点的菜单结构：
// - 普通项（含图标）、选中项、禁用项、危险项
// - 展开的子菜单（含图标、箭头、子列表、其内选中的子项）
// - 禁用子菜单
// - 分组（标题 + 列表）
// - 分割线
const items: ItemType[] = [
  { key: 'normal', icon: h(MailOutlined), label: '普通菜单项' },
  { key: 'selected', label: '选中菜单项' },
  { key: 'disabled', label: '禁用菜单项', disabled: true },
  { key: 'danger', label: '危险菜单项', danger: true },
  {
    key: 'sub1',
    icon: h(AppstoreOutlined),
    label: '展开的子菜单',
    children: [
      { key: 'sub-child', label: '选中的子项' },
      { key: 'sub-child2', label: '子项二' },
    ],
  },
  {
    key: 'sub2',
    icon: h(SettingOutlined),
    label: '禁用的子菜单',
    disabled: true,
    children: [{ key: 'sub2-child', label: '子项' }],
  },
  { type: 'divider' },
  {
    type: 'group',
    label: '分组标题',
    children: [
      { key: 'g1', label: '分组项一' },
      { key: 'g2', label: '分组项二' },
    ],
  },
]

// selectedKeys 同时命中顶层项（selected）与子菜单内子项（sub-child）：
// 前者点亮 itemSelected，后者使其所在子菜单带上 submenuSelected。
// 与 MenuClassNames / MenuStyles 的 key 一一对应，顺序严格照抄类型定义
const semantics = [
  {
    name: 'root',
    desc: '菜单根容器（ul.hmfw-menu.hmfw-menu-root）。承载菜单整体的模式（inline/vertical/horizontal）、主题与布局，始终渲染。',
  },
  {
    name: 'item',
    desc: '普通菜单项节点（li.hmfw-menu-item）。承载菜单项的高度、内边距、hover 与点击态，每个非子菜单项各渲染一个。',
  },
  {
    name: 'itemSelected',
    desc: '选中态菜单项附加类（.hmfw-menu-item-selected）。仅当该项 key 命中 selectedKeys 时叠加在对应 item 上。',
  },
  {
    name: 'itemDisabled',
    desc: '禁用态菜单项附加类（.hmfw-menu-item-disabled）。仅当菜单项 disabled 为真时叠加在对应 item 上。',
  },
  {
    name: 'itemDanger',
    desc: '危险态菜单项附加类（.hmfw-menu-item-danger）。仅当菜单项 danger 为真时叠加在对应 item 上。',
  },
  {
    name: 'itemIcon',
    desc: '菜单项图标容器（span.hmfw-menu-item-icon）。承载图标字号与右侧间距，仅在菜单项设置 icon 时渲染。',
  },
  {
    name: 'itemContent',
    desc: '菜单项文本内容（span.hmfw-menu-title-content）。承载标签文字的排版与省略，普通项与子菜单标题均渲染。',
  },
  {
    name: 'submenu',
    desc: '子菜单容器节点（li.hmfw-menu-submenu）。承载含子项的菜单项整体，仅在存在子菜单（children）时渲染。',
  },
  {
    name: 'submenuTitle',
    desc: '子菜单标题行（div.hmfw-menu-submenu-title）。承载子菜单可点击标题的布局与展开交互，仅在子菜单存在时渲染。',
  },
  {
    name: 'submenuOpen',
    desc: '展开态子菜单附加类（.hmfw-menu-submenu-open）。仅当子菜单 key 命中 openKeys 时叠加在对应 submenu 上。',
  },
  {
    name: 'submenuSelected',
    desc: '含选中项的子菜单附加类（.hmfw-menu-submenu-selected）。仅当子菜单后代含选中项时叠加在对应 submenu 上。',
  },
  {
    name: 'submenuDisabled',
    desc: '禁用态子菜单附加类（.hmfw-menu-submenu-disabled）。仅当子菜单 disabled 为真时叠加在对应 submenu 上。',
  },
  {
    name: 'submenuIcon',
    desc: '子菜单图标容器（span.hmfw-menu-item-icon）。承载子菜单标题左侧图标，仅在子菜单设置 icon 时渲染。',
  },
  {
    name: 'submenuArrow',
    desc: '子菜单展开箭头（span.hmfw-menu-submenu-arrow）。承载展开/收起指示箭头，未自定义 expandIcon 且子菜单存在时渲染。',
  },
  {
    name: 'sub',
    desc: '子菜单的子项列表容器（ul.hmfw-menu-sub）。承载展开后的子项列表，inline 模式下展开时渲染；popup 模式下弹层内渲染。',
  },
  {
    name: 'itemGroup',
    desc: '菜单项分组容器（li.hmfw-menu-item-group）。承载一组菜单项，仅在使用 type: "group" 分组项时渲染。',
  },
  {
    name: 'itemGroupTitle',
    desc: '分组标题节点（div.hmfw-menu-item-group-title）。承载分组名的弱化排版，仅在分组项存在时渲染。',
  },
  {
    name: 'itemGroupList',
    desc: '分组内菜单项列表（ul.hmfw-menu-item-group-list）。承载分组下的子项列表，仅在分组项存在时渲染。',
  },
  {
    name: 'divider',
    desc: '菜单分割线节点（li.hmfw-menu-item-divider）。承载分隔线样式，仅在使用 type: "divider" 分割项时渲染。',
  },
]
</script>
