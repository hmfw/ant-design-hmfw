import{M as d}from"./index-LTsPJ62j.js";import{M as x,A as S,T as N,F as M,a as O}from"./TeamOutlined-Sz3EGK-k.js";import{S as b}from"./SettingOutlined-Cpv62SOz.js";import{U as v}from"./UserOutlined-BDjuzx7J.js";import{o as k,p as a,A as u,k as g,h as t,n as e,L as o,_ as T,Q as r,m as h,K as q,v as _,E as y,i as K,H as z,l as A}from"./index-aeAUYztw.js";import{B as C}from"./Button-Cv9KoN5D.js";import{H as w}from"./HomeOutlined-D_rBhTxD.js";import{E as P}from"./EditOutlined-BucXdjrc.js";import{D}from"./DeleteOutlined-D8Q6D3V8.js";import{C as G}from"./CopyOutlined-DrOm84W6.js";import{S as $}from"./Select-CwdzfgA-.js";import"./Layout-BBWqEPZF.js";import"./MinusOutlined-BbO896_q.js";import"./LeftOutlined-CwH079FJ.js";import"./RightOutlined-LA_EhZJ6.js";import"./cls-S9IiI6wd.js";import"./event-CMqgYmge.js";import"./Trigger-DUHNd6y-.js";import"./Tooltip-DfKv4R5d.js";import"./LoadingOutlined-DS-uT1Fx.js";import"./DownOutlined-BRuKGSP9.js";import"./VirtualList-DxjmNnJl.js";const B={style:{display:"flex","flex-direction":"column",gap:"32px"}},E=k({__name:"MenuClassNames",setup(m){const s=[{key:"1",label:"导航一",icon:a(x)},{key:"2",label:"导航二",icon:a(S)},{key:"3",label:"导航三",icon:a(b)}],p=[{key:"1",label:"选项 1",icon:a(x)},{key:"sub1",label:"子菜单",icon:a(S),children:[{key:"2",label:"选项 2"},{key:"3",label:"选项 3"}]},{key:"4",label:"选项 4",icon:a(b)}],i=[{type:"group",label:"分组 1",children:[{key:"1",label:"选项 1",icon:a(v)},{key:"2",label:"选项 2",icon:a(N)}]},{type:"divider"},{type:"group",label:"分组 2",children:[{key:"3",label:"选项 3",icon:a(M)},{key:"4",label:"选项 4",icon:a(b)}]}],n=[{key:"mail",label:"邮件",icon:a(x)},{key:"app",label:"应用",icon:a(S)},{key:"setting",label:"设置",icon:a(b)}];return(l,c)=>(u(),g("div",B,[t("div",null,[c[0]||(c[0]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义菜单项样式：",-1)),e(o(d),{mode:"inline","default-selected-keys":["1"],items:s,"class-names":{item:"custom-item",itemSelected:"custom-item-selected",itemIcon:"custom-icon"},style:{width:"256px"}})]),t("div",null,[c[1]||(c[1]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义子菜单样式：",-1)),e(o(d),{mode:"inline","default-open-keys":["sub1"],"default-selected-keys":["1"],items:p,"class-names":{submenu:"custom-submenu",submenuTitle:"custom-submenu-title",submenuArrow:"custom-arrow"},style:{width:"256px"}})]),t("div",null,[c[2]||(c[2]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义分组和分割线：",-1)),e(o(d),{mode:"inline","default-selected-keys":["1"],items:i,"class-names":{itemGroup:"custom-group",itemGroupTitle:"custom-group-title",divider:"custom-divider"},style:{width:"256px"}})]),t("div",null,[c[3]||(c[3]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),e(o(d),{mode:"inline","default-selected-keys":["2"],items:s,styles:{root:{border:"2px solid #722ed1",borderRadius:"12px"},item:{margin:"8px 12px"},itemSelected:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"#fff",fontWeight:"bold"},itemIcon:{fontSize:"16px"}},style:{width:"256px"}})]),t("div",null,[c[4]||(c[4]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"水平菜单自定义：",-1)),e(o(d),{mode:"horizontal","default-selected-keys":["mail"],items:n,"class-names":{root:"custom-horizontal",item:"custom-horizontal-item",itemSelected:"custom-horizontal-selected"}})])]))}}),V=T(E,[["__scopeId","data-v-e873dbdc"]]),F=`<template>
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
import { h } from 'vue'
import { Menu } from '@hmfw/ant-design'
import { MailOutlined, AppstoreOutlined, SettingOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@hmfw/icons'

const basicItems = [
  { key: '1', label: '导航一', icon: h(MailOutlined) },
  { key: '2', label: '导航二', icon: h(AppstoreOutlined) },
  { key: '3', label: '导航三', icon: h(SettingOutlined) },
]

const submenuItems = [
  { key: '1', label: '选项 1', icon: h(MailOutlined) },
  {
    key: 'sub1',
    label: '子菜单',
    icon: h(AppstoreOutlined),
    children: [
      { key: '2', label: '选项 2' },
      { key: '3', label: '选项 3' },
    ],
  },
  { key: '4', label: '选项 4', icon: h(SettingOutlined) },
]

const groupItems = [
  {
    type: 'group',
    label: '分组 1',
    children: [
      { key: '1', label: '选项 1', icon: h(UserOutlined) },
      { key: '2', label: '选项 2', icon: h(TeamOutlined) },
    ],
  },
  { type: 'divider' },
  {
    type: 'group',
    label: '分组 2',
    children: [
      { key: '3', label: '选项 3', icon: h(FileOutlined) },
      { key: '4', label: '选项 4', icon: h(SettingOutlined) },
    ],
  },
]

const horizontalItems = [
  { key: 'mail', label: '邮件', icon: h(MailOutlined) },
  { key: 'app', label: '应用', icon: h(AppstoreOutlined) },
  { key: 'setting', label: '设置', icon: h(SettingOutlined) },
]
<\/script>

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
`,U=k({__name:"MenuCollapsed",setup(m){const s=y(!1),p=y(["1"]),i=[{key:"1",label:"导航一",icon:a(w)},{key:"2",label:"导航二",icon:a(v)},{key:"3",label:"导航三",icon:a(b)}],n=({key:l})=>{p.value=[l]};return(l,c)=>(u(),g("div",null,[e(o(C),{type:"primary",style:{"margin-bottom":"16px"},onClick:c[0]||(c[0]=f=>s.value=!s.value)},{default:r(()=>[h(q(s.value?"展开":"折叠"),1)]),_:1}),t("div",{style:_({width:s.value?"80px":"256px",borderRight:"1px solid #f0f0f0",transition:"width 0.2s"})},[e(o(d),{mode:"inline",items:i,"selected-keys":p.value,"inline-collapsed":s.value,onSelect:n},null,8,["selected-keys","inline-collapsed"])],4)]))}}),H=`<template>
  <div>
    <Button type="primary" style="margin-bottom: 16px" @click="collapsed = !collapsed">
      {{ collapsed ? '展开' : '折叠' }}
    </Button>
    <div
      :style="{
        width: collapsed ? '80px' : '256px',
        borderRight: '1px solid #f0f0f0',
        transition: 'width 0.2s',
      }"
    >
      <Menu
        mode="inline"
        :items="items"
        :selected-keys="selectedKeys"
        :inline-collapsed="collapsed"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Menu, Button } from '@hmfw/ant-design'
import { HomeOutlined, UserOutlined, SettingOutlined } from '@hmfw/icons'

const collapsed = ref(false)
const selectedKeys = ref(['1'])

const items = [
  { key: '1', label: '导航一', icon: h(HomeOutlined) },
  { key: '2', label: '导航二', icon: h(UserOutlined) },
  { key: '3', label: '导航三', icon: h(SettingOutlined) },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
<\/script>
`,R={style:{width:"256px"}},L=k({__name:"MenuDanger",setup(m){const s=[{key:"1",label:"普通选项"},{key:"2",label:"编辑",icon:a(P)},{type:"divider"},{key:"3",label:"删除",danger:!0,icon:a(D)}];return(p,i)=>(u(),g("div",R,[e(o(d),{mode:"inline",items:s})]))}}),W=`<template>
  <div style="width: 256px">
    <Menu mode="inline" :items="items" />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Menu } from '@hmfw/ant-design'
import type { ItemType } from '@hmfw/ant-design'
import { EditOutlined, DeleteOutlined } from '@hmfw/icons'

const items: ItemType[] = [
  { key: '1', label: '普通选项' },
  { key: '2', label: '编辑', icon: h(EditOutlined) },
  { type: 'divider' },
  { key: '3', label: '删除', danger: true, icon: h(DeleteOutlined) },
]
<\/script>
`,X={style:{width:"256px"}},Q=k({__name:"MenuGlobalIcon",setup(m){const s=y(["1"]),p=[{key:"1",label:"导航一",icon:a(M,{style:{color:"#1890ff"}})},{key:"2",label:"导航二",icon:a(G,{style:{color:"#52c41a"}})},{key:"3",label:"导航三",icon:a(b,{style:{color:"#fa8c16"}})},{key:"sub",label:"子菜单",icon:a(O),children:[{key:"sub-1",label:"子项 1"},{key:"sub-2",label:"子项 2"}]}],i=({key:n})=>{s.value=[n]};return(n,l)=>(u(),g("div",X,[e(o(d),{mode:"inline",items:p,"selected-keys":s.value,onSelect:i},null,8,["selected-keys"])]))}}),j=`<template>
  <div style="width: 256px">
    <Menu mode="inline" :items="items" :selected-keys="selectedKeys" @select="onSelect" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Menu } from '@hmfw/ant-design'
import { FileOutlined, CopyOutlined, SettingOutlined, FolderOutlined } from '@hmfw/icons'

const selectedKeys = ref(['1'])

// 使用 VNode 作为图标
const items = [
  {
    key: '1',
    label: '导航一',
    icon: h(FileOutlined, { style: { color: '#1890ff' } }),
  },
  {
    key: '2',
    label: '导航二',
    icon: h(CopyOutlined, { style: { color: '#52c41a' } }),
  },
  {
    key: '3',
    label: '导航三',
    icon: h(SettingOutlined, { style: { color: '#fa8c16' } }),
  },
  {
    key: 'sub',
    label: '子菜单',
    icon: h(FolderOutlined),
    children: [
      { key: 'sub-1', label: '子项 1' },
      { key: 'sub-2', label: '子项 2' },
    ],
  },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
<\/script>
`,J={style:{width:"256px"}},Y=k({__name:"MenuGroup",setup(m){const s=[{type:"group",label:"用户管理",children:[{key:"1",label:"用户列表"},{key:"2",label:"添加用户"}]},{type:"group",label:"系统设置",children:[{key:"3",label:"基本设置"},{key:"4",label:"高级设置"}]}];return(p,i)=>(u(),g("div",J,[e(o(d),{mode:"inline",items:s})]))}}),Z=`<template>
  <div style="width: 256px">
    <Menu mode="inline" :items="items" />
  </div>
</template>

<script setup lang="ts">
import { Menu } from '@hmfw/ant-design'
import type { ItemType } from '@hmfw/ant-design'

const items: ItemType[] = [
  {
    type: 'group',
    label: '用户管理',
    children: [
      { key: '1', label: '用户列表' },
      { key: '2', label: '添加用户' },
    ],
  },
  {
    type: 'group',
    label: '系统设置',
    children: [
      { key: '3', label: '基本设置' },
      { key: '4', label: '高级设置' },
    ],
  },
]
<\/script>
`,nn=k({__name:"MenuHorizontal",setup(m){const s=y(["home"]),p=[{key:"home",label:"首页",icon:a(w)},{key:"user",label:"用户管理",icon:a(v)},{key:"setting",label:"系统设置",icon:a(b),children:[{key:"setting-1",label:"基础设置"},{key:"setting-2",label:"高级设置"}]}],i=({key:n})=>{s.value=[n]};return(n,l)=>(u(),K(o(d),{mode:"horizontal",items:p,"selected-keys":s.value,onSelect:i},null,8,["selected-keys"]))}}),tn=`<template>
  <Menu mode="horizontal" :items="items" :selected-keys="selectedKeys" @select="onSelect" />
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Menu } from '@hmfw/ant-design'
import { HomeOutlined, UserOutlined, SettingOutlined } from '@hmfw/icons'

const selectedKeys = ref(['home'])

const items = [
  { key: 'home', label: '首页', icon: h(HomeOutlined) },
  { key: 'user', label: '用户管理', icon: h(UserOutlined) },
  {
    key: 'setting',
    label: '系统设置',
    icon: h(SettingOutlined),
    children: [
      { key: 'setting-1', label: '基础设置' },
      { key: 'setting-2', label: '高级设置' },
    ],
  },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
<\/script>
`,en={style:{width:"256px"}},sn=k({__name:"MenuIndent",setup(m){const s=y(["1"]),p=[{key:"1",label:"普通项目"},{type:"group",key:"group-1",label:"分组一",children:[{key:"g1-1",label:"分组项 1"},{key:"g1-2",label:"分组项 2"},{key:"g1-sub",label:"分组子菜单",children:[{key:"g1-sub-1",label:"三级项目 1"},{key:"g1-sub-2",label:"三级项目 2"}]}]},{type:"group",key:"group-2",label:"分组二",children:[{key:"g2-1",label:"分组项 3"},{key:"g2-2",label:"分组项 4"}]}],i=({key:n})=>{s.value=[n]};return(n,l)=>(u(),g("div",en,[e(o(d),{mode:"inline",items:p,"selected-keys":s.value,"inline-indent":40,onSelect:i},null,8,["selected-keys"])]))}}),an=`<template>
  <div style="width: 256px">
    <Menu mode="inline" :items="items" :selected-keys="selectedKeys" :inline-indent="40" @select="onSelect" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu } from '@hmfw/ant-design'

const selectedKeys = ref(['1'])

// 测试分组内项目的缩进计算
const items = [
  { key: '1', label: '普通项目' },
  {
    type: 'group',
    key: 'group-1',
    label: '分组一',
    children: [
      { key: 'g1-1', label: '分组项 1' },
      { key: 'g1-2', label: '分组项 2' },
      {
        key: 'g1-sub',
        label: '分组子菜单',
        children: [
          { key: 'g1-sub-1', label: '三级项目 1' },
          { key: 'g1-sub-2', label: '三级项目 2' },
        ],
      },
    ],
  },
  {
    type: 'group',
    key: 'group-2',
    label: '分组二',
    children: [
      { key: 'g2-1', label: '分组项 3' },
      { key: 'g2-2', label: '分组项 4' },
    ],
  },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
<\/script>
`,on={style:{width:"256px","border-right":"1px solid #f0f0f0"}},ln=k({__name:"MenuInline",setup(m){const s=y(["1"]),p=[{key:"sub1",label:"导航一",icon:a(x),children:[{key:"1",label:"选项一"},{key:"2",label:"选项二"},{key:"3",label:"选项三"}]},{key:"sub2",label:"导航二",icon:a(b),children:[{key:"5",label:"选项五"},{key:"6",label:"选项六"}]},{key:"9",label:"导航三",icon:a(v)}],i=({key:n})=>{s.value=[n]};return(n,l)=>(u(),g("div",on,[e(o(d),{mode:"inline",items:p,"selected-keys":s.value,"default-open-keys":["sub1"],onSelect:i},null,8,["selected-keys"])]))}}),pn=`<template>
  <div style="width: 256px; border-right: 1px solid #f0f0f0">
    <Menu mode="inline" :items="items" :selected-keys="selectedKeys" :default-open-keys="['sub1']" @select="onSelect" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Menu } from '@hmfw/ant-design'
import { MailOutlined, SettingOutlined, UserOutlined } from '@hmfw/icons'

const selectedKeys = ref(['1'])

const items = [
  {
    key: 'sub1',
    label: '导航一',
    icon: h(MailOutlined),
    children: [
      { key: '1', label: '选项一' },
      { key: '2', label: '选项二' },
      { key: '3', label: '选项三' },
    ],
  },
  {
    key: 'sub2',
    label: '导航二',
    icon: h(SettingOutlined),
    children: [
      { key: '5', label: '选项五' },
      { key: '6', label: '选项六' },
    ],
  },
  { key: '9', label: '导航三', icon: h(UserOutlined) },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
<\/script>
`,cn={style:{width:"256px"}},dn=k({__name:"MenuMultiple",setup(m){const s=[{key:"1",label:"选项一"},{key:"2",label:"选项二"},{key:"3",label:"选项三"},{key:"4",label:"选项四"}];return(p,i)=>(u(),g("div",cn,[e(o(d),{mode:"inline",items:s,multiple:"","default-selected-keys":["1","2"]})]))}}),rn=`<template>
  <div style="width: 256px">
    <Menu mode="inline" :items="items" multiple :default-selected-keys="['1', '2']" />
  </div>
</template>

<script setup lang="ts">
import { Menu } from '@hmfw/ant-design'
import type { ItemType } from '@hmfw/ant-design'

const items: ItemType[] = [
  { key: '1', label: '选项一' },
  { key: '2', label: '选项二' },
  { key: '3', label: '选项三' },
  { key: '4', label: '选项四' },
]
<\/script>
`,un=k({__name:"MenuTooltip",setup(m){const s=y(!1),p=y(["1"]),i=[{key:"1",label:"导航一",icon:a(w),title:"这是导航一的提示"},{key:"2",label:"导航二",icon:a(v),title:"这是导航二的提示"},{key:"3",label:"导航三",icon:a(b)},{key:"sub",label:"子菜单",icon:a(O),children:[{key:"sub-1",label:"子项 1"},{key:"sub-2",label:"子项 2"}]}],n=({key:l})=>{p.value=[l]};return(l,c)=>(u(),g("div",null,[e(o(C),{type:"primary",style:{"margin-bottom":"16px"},onClick:c[0]||(c[0]=f=>s.value=!s.value)},{default:r(()=>[h(q(s.value?"展开":"折叠"),1)]),_:1}),t("div",{style:_({width:s.value?"80px":"256px",borderRight:"1px solid #f0f0f0",transition:"width 0.2s"})},[e(o(d),{mode:"inline",items:i,"selected-keys":p.value,"inline-collapsed":s.value,onSelect:n},null,8,["selected-keys","inline-collapsed"])],4)]))}}),mn=`<template>
  <div>
    <Button type="primary" style="margin-bottom: 16px" @click="collapsed = !collapsed">
      {{ collapsed ? '展开' : '折叠' }}
    </Button>
    <div
      :style="{
        width: collapsed ? '80px' : '256px',
        borderRight: '1px solid #f0f0f0',
        transition: 'width 0.2s',
      }"
    >
      <Menu
        mode="inline"
        :items="items"
        :selected-keys="selectedKeys"
        :inline-collapsed="collapsed"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Menu, Button } from '@hmfw/ant-design'
import { HomeOutlined, UserOutlined, SettingOutlined, FolderOutlined } from '@hmfw/icons'

const collapsed = ref(false)
const selectedKeys = ref(['1'])

// 收起时鼠标悬停会自动显示 Tooltip
const items = [
  {
    key: '1',
    label: '导航一',
    icon: h(HomeOutlined),
    title: '这是导航一的提示',
  },
  {
    key: '2',
    label: '导航二',
    icon: h(UserOutlined),
    title: '这是导航二的提示',
  },
  {
    key: '3',
    label: '导航三',
    icon: h(SettingOutlined),
  },
  {
    key: 'sub',
    label: '子菜单',
    icon: h(FolderOutlined),
    children: [
      { key: 'sub-1', label: '子项 1' },
      { key: 'sub-2', label: '子项 2' },
    ],
  },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
<\/script>
`,kn={style:{"margin-bottom":"16px"}},gn=k({__name:"MenuTrigger",setup(m){const s=y(["1"]),p=y("hover"),i=[{value:"hover",label:"hover"},{value:"click",label:"click"}],n=[{key:"1",label:"导航一",icon:a(S)},{key:"2",label:"导航二",icon:a(b)},{key:"sub",label:"子菜单",children:[{key:"sub-1",label:"子项 1"},{key:"sub-2",label:"子项 2"},{key:"sub-3",label:"子项 3"}]},{key:"4",label:"导航四"}],l=({key:c})=>{s.value=[c]};return(c,f)=>(u(),g("div",null,[t("div",kn,[f[1]||(f[1]=t("label",{style:{"margin-right":"8px"}},"触发方式:",-1)),e(o($),{value:p.value,"onUpdate:value":f[0]||(f[0]=I=>p.value=I),options:i,style:{width:"100px"}},null,8,["value"])]),e(o(d),{mode:"horizontal",items:n,"selected-keys":s.value,"trigger-sub-menu-action":p.value,onSelect:l},null,8,["selected-keys","trigger-sub-menu-action"])]))}}),bn=`<template>
  <div>
    <div style="margin-bottom: 16px">
      <label style="margin-right: 8px">触发方式:</label>
      <Select v-model:value="triggerAction" :options="triggerOptions" style="width: 100px" />
    </div>
    <Menu
      mode="horizontal"
      :items="items"
      :selected-keys="selectedKeys"
      :trigger-sub-menu-action="triggerAction"
      @select="onSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Menu, Select } from '@hmfw/ant-design'
import { AppstoreOutlined, SettingOutlined } from '@hmfw/icons'

const selectedKeys = ref(['1'])
const triggerAction = ref<'hover' | 'click'>('hover')

const triggerOptions = [
  { value: 'hover', label: 'hover' },
  { value: 'click', label: 'click' },
]

const items = [
  { key: '1', label: '导航一', icon: h(AppstoreOutlined) },
  { key: '2', label: '导航二', icon: h(SettingOutlined) },
  {
    key: 'sub',
    label: '子菜单',
    children: [
      { key: 'sub-1', label: '子项 1' },
      { key: 'sub-2', label: '子项 2' },
      { key: 'sub-3', label: '子项 3' },
    ],
  },
  { key: '4', label: '导航四' },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
<\/script>
`,yn={class:"markdown-body"},En={__name:"menu",setup(m,{expose:s}){return s({frontmatter:{}}),(i,n)=>{const l=z("DemoBlock");return u(),g("div",yn,[n[0]||(n[0]=t("h1",{id:"menu-导航菜单",tabindex:"-1"},"Menu 导航菜单",-1)),n[1]||(n[1]=t("p",null,"为页面和功能提供导航的菜单列表。",-1)),n[2]||(n[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=t("ul",null,[t("li",null,"需要展示一个系统功能菜单时"),t("li",null,"需要展示多级导航时"),t("li",null,"需要顶部导航或侧边导航时")],-1)),n[4]||(n[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=t("h3",{id:"顶部导航",tabindex:"-1"},"顶部导航",-1)),n[6]||(n[6]=t("p",null,"水平的顶部导航菜单。",-1)),e(l,{title:"顶部导航",source:o(tn)},{default:r(()=>[e(nn)]),_:1},8,["source"]),n[7]||(n[7]=t("h3",{id:"内嵌菜单",tabindex:"-1"},"内嵌菜单",-1)),n[8]||(n[8]=t("p",null,"垂直菜单，子菜单内嵌在菜单区域。",-1)),e(l,{title:"内嵌菜单",source:o(pn)},{default:r(()=>[e(ln)]),_:1},8,["source"]),n[9]||(n[9]=t("h3",{id:"折叠菜单",tabindex:"-1"},"折叠菜单",-1)),n[10]||(n[10]=t("p",null,"内嵌菜单可以被折叠。",-1)),e(l,{title:"折叠菜单",source:o(H)},{default:r(()=>[e(U)]),_:1},8,["source"]),n[11]||(n[11]=t("h3",{id:"危险选项",tabindex:"-1"},"危险选项",-1)),n[12]||(n[12]=t("p",null,"危险操作使用 danger 属性标记。",-1)),e(l,{title:"危险选项",source:o(W)},{default:r(()=>[e(L)]),_:1},8,["source"]),n[13]||(n[13]=t("h3",{id:"分组菜单",tabindex:"-1"},"分组菜单",-1)),n[14]||(n[14]=t("p",null,"使用 type: ‘group’ 对菜单项进行分组。",-1)),e(l,{title:"分组菜单",source:o(Z)},{default:r(()=>[e(Y)]),_:1},8,["source"]),n[15]||(n[15]=t("h3",{id:"多选菜单",tabindex:"-1"},"多选菜单",-1)),n[16]||(n[16]=t("p",null,"设置 multiple 属性支持多选。",-1)),e(l,{title:"多选菜单",source:o(rn)},{default:r(()=>[e(dn)]),_:1},8,["source"]),n[17]||(n[17]=t("h3",{id:"全局图标配置",tabindex:"-1"},"全局图标配置",-1)),n[18]||(n[18]=t("p",null,"为菜单项配置图标，支持 VNode 和函数两种形式。",-1)),e(l,{title:"全局图标配置",source:o(j)},{default:r(()=>[e(Q)]),_:1},8,["source"]),n[19]||(n[19]=t("h3",{id:"收起状态提示",tabindex:"-1"},"收起状态提示",-1)),n[20]||(n[20]=t("p",null,"inlineCollapsed 为 true 时，鼠标悬停会自动显示 Tooltip 提示。",-1)),e(l,{title:"收起状态提示",source:o(mn)},{default:r(()=>[e(un)]),_:1},8,["source"]),n[21]||(n[21]=t("h3",{id:"自定义缩进",tabindex:"-1"},"自定义缩进",-1)),n[22]||(n[22]=t("p",null,"使用 inlineIndent 属性自定义菜单项缩进宽度，分组内项目会正确计算层级缩进。",-1)),e(l,{title:"自定义缩进",source:o(an)},{default:r(()=>[e(sn)]),_:1},8,["source"]),n[23]||(n[23]=t("h3",{id:"子菜单触发方式",tabindex:"-1"},"子菜单触发方式",-1)),n[24]||(n[24]=t("p",null,"使用 triggerSubMenuAction 属性控制子菜单的展开方式（hover 或 click）。",-1)),e(l,{title:"子菜单触发方式",source:o(bn)},{default:r(()=>[e(gn)]),_:1},8,["source"]),n[25]||(n[25]=t("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[26]||(n[26]=t("p",null,[h("通过 "),t("code",null,"classNames"),h(" / "),t("code",null,"styles"),h(" 对各子元素做细粒度样式控制。")],-1)),e(l,{title:"语义化 className 与 style",source:o(F)},{default:r(()=>[e(V)]),_:1},8,["source"]),n[27]||(n[27]=A(`<h2 id="api" tabindex="-1">API</h2><h3 id="menu-props" tabindex="-1">Menu Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>菜单内容</td><td><code>ItemType[]</code></td><td><code>[]</code></td></tr><tr><td>mode</td><td>菜单类型</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39; | &#39;inline&#39;</code></td><td><code>&#39;vertical&#39;</code></td></tr><tr><td>theme</td><td>主题颜色</td><td><code>&#39;light&#39; | &#39;dark&#39;</code></td><td><code>&#39;light&#39;</code></td></tr><tr><td>selectedKeys</td><td>当前选中的菜单项 key 数组</td><td><code>string[]</code></td><td>-</td></tr><tr><td>defaultSelectedKeys</td><td>初始选中的菜单项 key 数组</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td>openKeys</td><td>当前展开的 SubMenu 菜单项 key 数组</td><td><code>string[]</code></td><td>-</td></tr><tr><td>defaultOpenKeys</td><td>初始展开的 SubMenu 菜单项 key 数组</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td>inlineCollapsed</td><td>inline 时菜单是否收起状态，收起时会自动显示 Tooltip</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>inlineIndent</td><td>inline 模式的菜单缩进宽度（单位：px），分组内项目会递增 depth 正确计算缩进</td><td><code>number</code></td><td><code>24</code></td></tr><tr><td>multiple</td><td>是否允许多选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>selectable</td><td>是否允许选中</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>expandIcon</td><td>自定义展开图标</td><td><code>VNode | ((props: { isOpen: boolean }) =&gt; VNode)</code></td><td>-</td></tr><tr><td>triggerSubMenuAction</td><td>SubMenu 展开/关闭的触发行为，支持鼠标悬停或点击</td><td><code>&#39;hover&#39; | &#39;click&#39;</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>MenuClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>MenuStyles</code></td><td>-</td></tr></tbody></table><h3 id="itemtype" tabindex="-1">ItemType</h3><p>菜单项类型，可以是以下之一：</p><h4 id="menuitemtype-普通菜单项" tabindex="-1">MenuItemType (普通菜单项)</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>菜单项标题</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>图标，支持 VNode 或返回 VNode 的函数</td><td><code>VNode | (() =&gt; VNode)</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>danger</td><td>是否为危险选项，用于删除等操作</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>设置收缩时展示的悬浮标题，inlineCollapsed 时显示为 Tooltip</td><td><code>string</code></td><td>-</td></tr></tbody></table><h4 id="submenutype-子菜单" tabindex="-1">SubMenuType (子菜单)</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>子菜单标题</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>图标</td><td><code>VNode | (() =&gt; VNode)</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>children</td><td>子菜单项</td><td><code>ItemType[]</code></td><td>-</td></tr><tr><td>theme</td><td>子菜单主题</td><td><code>&#39;light&#39; | &#39;dark&#39;</code></td><td>-</td></tr></tbody></table><h4 id="menudividertype-分割线" tabindex="-1">MenuDividerType (分割线)</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型标识</td><td><code>&#39;divider&#39;</code></td><td>-</td></tr><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>dashed</td><td>是否虚线</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h4 id="menuitemgrouptype-菜单分组" tabindex="-1">MenuItemGroupType (菜单分组)</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型标识</td><td><code>&#39;group&#39;</code></td><td>-</td></tr><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>分组标题</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>分组内的菜单项，深度会递增以正确计算 inline 模式缩进</td><td><code>ItemType[]</code></td><td>-</td></tr></tbody></table><h3 id="menu-events" tabindex="-1">Menu Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>被选中时调用</td><td><code>({ key: string, selectedKeys: string[] }) =&gt; void</code></td></tr><tr><td>deselect</td><td>取消选中时调用（仅 multiple 模式）</td><td><code>({ key: string, selectedKeys: string[] }) =&gt; void</code></td></tr><tr><td>openChange</td><td>SubMenu 展开/关闭的回调</td><td><code>(openKeys: string[]) =&gt; void</code></td></tr><tr><td>click</td><td>点击菜单项触发的回调</td><td><code>({ key: string }) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对菜单的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">MenuClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 菜单根容器</span>
  item<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 普通菜单项</span>
  itemSelected<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选中状态的菜单项</span>
  itemDisabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 禁用状态的菜单项</span>
  itemDanger<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 危险状态的菜单项</span>
  itemIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 菜单项图标容器</span>
  itemContent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 菜单项文本内容</span>
  submenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 子菜单容器</span>
  submenuTitle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 子菜单标题</span>
  submenuOpen<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 展开状态的子菜单</span>
  submenuSelected<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 包含选中项的子菜单</span>
  submenuDisabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 禁用状态的子菜单</span>
  submenuIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 子菜单图标</span>
  submenuArrow<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 展开箭头</span>
  sub<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 子菜单列表容器</span>
  itemGroup<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 菜单项分组容器</span>
  itemGroupTitle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 分组标题</span>
  itemGroupList<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 分组列表</span>
  divider<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 分割线</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MenuStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  item<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemSelected<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemDisabled<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemDanger<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemIcon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemContent<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  submenu<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  submenuTitle<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  submenuOpen<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  submenuSelected<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  submenuDisabled<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  submenuIcon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  submenuArrow<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  sub<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemGroup<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemGroupTitle<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemGroupList<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  divider<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu hmfw-menu-inline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>

  <span class="token comment">&lt;!-- 普通菜单项 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu-item hmfw-menu-item-selected<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.item + classNames.itemSelected / styles.item + styles.itemSelected 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu-item-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.itemIcon / styles.itemIcon 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu-title-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.itemContent / styles.itemContent 应用于此 --&gt;</span>
      导航一
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 子菜单 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu-submenu hmfw-menu-submenu-open hmfw-menu-submenu-selected<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.submenu + classNames.submenuOpen + classNames.submenuSelected 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu-submenu-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.submenuTitle / styles.submenuTitle 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu-item-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.submenuIcon / styles.submenuIcon 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>子菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu-submenu-arrow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.submenuArrow / styles.submenuArrow 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu-sub hmfw-menu-inline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.sub / styles.sub 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>选项 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>选项 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 菜单分组 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu-item-group<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.itemGroup / styles.itemGroup 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu-item-group-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.itemGroupTitle / styles.itemGroupTitle 应用于此 --&gt;</span>
      分组标题
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu-item-group-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.itemGroupList / styles.itemGroupList 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>分组项 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>分组项 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 分割线 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-menu-item-divider<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.divider / styles.divider 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Menu
    mode=&quot;inline&quot;
    :items=&quot;items&quot;
    :class-names=&quot;{
      item: &#39;my-menu-item&#39;,
      itemSelected: &#39;my-item-selected&#39;,
      submenuTitle: &#39;my-submenu-title&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-menu-item) {
  border-left: 3px solid transparent;
  transition: all 0.3s;
}

:deep(.my-menu-item:hover) {
  border-left-color: #1677ff;
  transform: translateX(4px);
}

:deep(.my-item-selected) {
  background: linear-gradient(90deg, #e6f4ff 0%, transparent 100%) !important;
  border-left-color: #1677ff !important;
}

:deep(.my-submenu-title) {
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  border-radius: 8px;
  font-weight: 600;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Menu
    mode=&quot;inline&quot;
    :items=&quot;items&quot;
    :styles=&quot;{
      root: { border: &#39;2px solid #722ed1&#39;, borderRadius: &#39;12px&#39; },
      item: { margin: &#39;8px 12px&#39; },
      itemSelected: {
        background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;,
        color: &#39;#fff&#39;,
        fontWeight: &#39;bold&#39;,
      },
      itemIcon: { fontSize: &#39;16px&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>状态类（如 <code>itemSelected</code>、<code>itemDisabled</code>）会与基础类（如 <code>item</code>）<strong>叠加</strong>应用</li><li>子菜单的弹出层（<code>mode=&quot;vertical&quot;</code> 或 <code>mode=&quot;horizontal&quot;</code> 时）挂载到 <code>body</code>，需使用 <code>:global()</code> 而非 <code>:deep()</code> 来应用样式</li><li>水平菜单（<code>mode=&quot;horizontal&quot;</code>）的选中指示器通过 <code>border-bottom</code> 实现，可通过 <code>itemSelected</code> 自定义</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Menu 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr></tbody></table><h2 id="menu-events-1" tabindex="-1">Menu Events</h2>`,34))])}}};export{En as default};
