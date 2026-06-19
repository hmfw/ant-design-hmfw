import{B as g}from"./Button-DXqNArqe.js";import{M as y}from"./Menu-BHUX68I9.js";import{o as m,A as a,k as b,n as l,K as o,R as c,m as f,J as v,h as t,v as x,E as p,p as k,i as M,S as _,O as S,H as w,l as K}from"./index-BIs5wmTl.js";import"./cls-S9IiI6wd.js";import"./Icon-Bx-OH41K.js";import"./LoadingOutlined-DBQWlWc3.js";const T=m({__name:"MenuCollapsed",setup(u){const n=p(!1),s=p(["1"]),i=[{key:"1",label:"导航一",icon:"home"},{key:"2",label:"导航二",icon:"user"},{key:"3",label:"导航三",icon:"setting"}],e=({key:d})=>{s.value=[d]};return(d,r)=>(a(),b("div",null,[l(o(g),{type:"primary",style:{"margin-bottom":"16px"},onClick:r[0]||(r[0]=h=>n.value=!n.value)},{default:c(()=>[f(v(n.value?"展开":"折叠"),1)]),_:1}),t("div",{style:x({width:n.value?"80px":"256px",borderRight:"1px solid #f0f0f0",transition:"width 0.2s"})},[l(o(y),{mode:"inline",items:i,"selected-keys":s.value,"inline-collapsed":n.value,onSelect:e},null,8,["selected-keys","inline-collapsed"])],4)]))}}),I=`<template>
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
import { ref } from 'vue'
import { Menu, Button } from 'ant-design-hmfw'

const collapsed = ref(false)
const selectedKeys = ref(['1'])

const items = [
  { key: '1', label: '导航一', icon: 'home' },
  { key: '2', label: '导航二', icon: 'user' },
  { key: '3', label: '导航三', icon: 'setting' },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
<\/script>
`,$={style:{width:"256px"}},V=m({__name:"MenuDanger",setup(u){const n=[{key:"1",label:"普通选项"},{key:"2",label:"编辑",icon:"✏️"},{type:"divider"},{key:"3",label:"删除",danger:!0,icon:"🗑️"}];return(s,i)=>(a(),b("div",$,[l(o(y),{mode:"inline",items:n})]))}}),B=`<template>
  <div style="width: 256px">
    <Menu mode="inline" :items="items" />
  </div>
</template>

<script setup lang="ts">
import { Menu } from 'ant-design-hmfw'
import type { ItemType } from 'ant-design-hmfw'

const items: ItemType[] = [
  { key: '1', label: '普通选项' },
  { key: '2', label: '编辑', icon: '✏️' },
  { type: 'divider' },
  { key: '3', label: '删除', danger: true, icon: '🗑️' },
]
<\/script>
`,N={style:{width:"256px"}},C=m({__name:"MenuGlobalIcon",setup(u){const n=p(["1"]),s=[{key:"1",label:"导航一",icon:k("span",{style:{color:"#1890ff"}},"📄")},{key:"2",label:"导航二",icon:k("span",{style:{color:"#52c41a"}},"📋")},{key:"3",label:"导航三",icon:k("span",{style:{color:"#fa8c16"}},"⚙️")},{key:"sub",label:"子菜单",icon:k("span","📁"),children:[{key:"sub-1",label:"子项 1"},{key:"sub-2",label:"子项 2"}]}],i=({key:e})=>{n.value=[e]};return(e,d)=>(a(),b("div",N,[l(o(y),{mode:"inline",items:s,"selected-keys":n.value,onSelect:i},null,8,["selected-keys"])]))}}),z=`<template>
  <div style="width: 256px">
    <Menu mode="inline" :items="items" :selected-keys="selectedKeys" @select="onSelect" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Menu } from 'ant-design-hmfw'

const selectedKeys = ref(['1'])

// 使用 VNode 作为全局图标
const items = [
  {
    key: '1',
    label: '导航一',
    icon: h('span', { style: { color: '#1890ff' } }, '📄'),
  },
  {
    key: '2',
    label: '导航二',
    icon: h('span', { style: { color: '#52c41a' } }, '📋'),
  },
  {
    key: '3',
    label: '导航三',
    icon: h('span', { style: { color: '#fa8c16' } }, '⚙️'),
  },
  {
    key: 'sub',
    label: '子菜单',
    icon: h('span', '📁'),
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
`,A={style:{width:"256px"}},D=m({__name:"MenuGroup",setup(u){const n=[{type:"group",label:"用户管理",children:[{key:"1",label:"用户列表"},{key:"2",label:"添加用户"}]},{type:"group",label:"系统设置",children:[{key:"3",label:"基本设置"},{key:"4",label:"高级设置"}]}];return(s,i)=>(a(),b("div",A,[l(o(y),{mode:"inline",items:n})]))}}),G=`<template>
  <div style="width: 256px">
    <Menu mode="inline" :items="items" />
  </div>
</template>

<script setup lang="ts">
import { Menu } from 'ant-design-hmfw'
import type { ItemType } from 'ant-design-hmfw'

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
`,R=m({__name:"MenuHorizontal",setup(u){const n=p(["home"]),s=[{key:"home",label:"首页",icon:"home"},{key:"user",label:"用户管理",icon:"user"},{key:"setting",label:"系统设置",icon:"setting",children:[{key:"setting-1",label:"基础设置"},{key:"setting-2",label:"高级设置"}]}],i=({key:e})=>{n.value=[e]};return(e,d)=>(a(),M(o(y),{mode:"horizontal",items:s,"selected-keys":n.value,onSelect:i},null,8,["selected-keys"]))}}),E=`<template>
  <Menu mode="horizontal" :items="items" :selected-keys="selectedKeys" @select="onSelect" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu } from 'ant-design-hmfw'

const selectedKeys = ref(['home'])

const items = [
  { key: 'home', label: '首页', icon: 'home' },
  { key: 'user', label: '用户管理', icon: 'user' },
  {
    key: 'setting',
    label: '系统设置',
    icon: 'setting',
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
`,H={style:{width:"256px"}},O=m({__name:"MenuIndent",setup(u){const n=p(["1"]),s=[{key:"1",label:"普通项目"},{type:"group",key:"group-1",label:"分组一",children:[{key:"g1-1",label:"分组项 1"},{key:"g1-2",label:"分组项 2"},{key:"g1-sub",label:"分组子菜单",children:[{key:"g1-sub-1",label:"三级项目 1"},{key:"g1-sub-2",label:"三级项目 2"}]}]},{type:"group",key:"group-2",label:"分组二",children:[{key:"g2-1",label:"分组项 3"},{key:"g2-2",label:"分组项 4"}]}],i=({key:e})=>{n.value=[e]};return(e,d)=>(a(),b("div",H,[l(o(y),{mode:"inline",items:s,"selected-keys":n.value,"inline-indent":40,onSelect:i},null,8,["selected-keys"])]))}}),P=`<template>
  <div style="width: 256px">
    <Menu mode="inline" :items="items" :selected-keys="selectedKeys" :inline-indent="40" @select="onSelect" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu } from 'ant-design-hmfw'

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
`,J={style:{width:"256px","border-right":"1px solid #f0f0f0"}},U=m({__name:"MenuInline",setup(u){const n=p(["1"]),s=[{key:"sub1",label:"导航一",icon:"home",children:[{key:"1",label:"选项一"},{key:"2",label:"选项二"},{key:"3",label:"选项三"}]},{key:"sub2",label:"导航二",icon:"setting",children:[{key:"5",label:"选项五"},{key:"6",label:"选项六"}]},{key:"9",label:"导航三",icon:"user"}],i=({key:e})=>{n.value=[e]};return(e,d)=>(a(),b("div",J,[l(o(y),{mode:"inline",items:s,"selected-keys":n.value,"default-open-keys":["sub1"],onSelect:i},null,8,["selected-keys"])]))}}),j=`<template>
  <div style="width: 256px; border-right: 1px solid #f0f0f0">
    <Menu mode="inline" :items="items" :selected-keys="selectedKeys" :default-open-keys="['sub1']" @select="onSelect" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu } from 'ant-design-hmfw'

const selectedKeys = ref(['1'])

const items = [
  {
    key: 'sub1',
    label: '导航一',
    icon: 'home',
    children: [
      { key: '1', label: '选项一' },
      { key: '2', label: '选项二' },
      { key: '3', label: '选项三' },
    ],
  },
  {
    key: 'sub2',
    label: '导航二',
    icon: 'setting',
    children: [
      { key: '5', label: '选项五' },
      { key: '6', label: '选项六' },
    ],
  },
  { key: '9', label: '导航三', icon: 'user' },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
<\/script>
`,q={style:{width:"256px"}},F=m({__name:"MenuMultiple",setup(u){const n=[{key:"1",label:"选项一"},{key:"2",label:"选项二"},{key:"3",label:"选项三"},{key:"4",label:"选项四"}];return(s,i)=>(a(),b("div",q,[l(o(y),{mode:"inline",items:n,multiple:"","default-selected-keys":["1","2"]})]))}}),L=`<template>
  <div style="width: 256px">
    <Menu mode="inline" :items="items" multiple :default-selected-keys="['1', '2']" />
  </div>
</template>

<script setup lang="ts">
import { Menu } from 'ant-design-hmfw'
import type { ItemType } from 'ant-design-hmfw'

const items: ItemType[] = [
  { key: '1', label: '选项一' },
  { key: '2', label: '选项二' },
  { key: '3', label: '选项三' },
  { key: '4', label: '选项四' },
]
<\/script>
`,Q=m({__name:"MenuTooltip",setup(u){const n=p(!1),s=p(["1"]),i=[{key:"1",label:"导航一",icon:k("span","🏠"),title:"这是导航一的提示"},{key:"2",label:"导航二",icon:k("span","👤"),title:"这是导航二的提示"},{key:"3",label:"导航三",icon:k("span","⚙️")},{key:"sub",label:"子菜单",icon:k("span","📁"),children:[{key:"sub-1",label:"子项 1"},{key:"sub-2",label:"子项 2"}]}],e=({key:d})=>{s.value=[d]};return(d,r)=>(a(),b("div",null,[l(o(g),{type:"primary",style:{"margin-bottom":"16px"},onClick:r[0]||(r[0]=h=>n.value=!n.value)},{default:c(()=>[f(v(n.value?"展开":"折叠"),1)]),_:1}),t("div",{style:x({width:n.value?"80px":"256px",borderRight:"1px solid #f0f0f0",transition:"width 0.2s"})},[l(o(y),{mode:"inline",items:i,"selected-keys":s.value,"inline-collapsed":n.value,onSelect:e},null,8,["selected-keys","inline-collapsed"])],4)]))}}),W=`<template>
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
import { Menu, Button } from 'ant-design-hmfw'

const collapsed = ref(false)
const selectedKeys = ref(['1'])

// 收起时会自动显示 Tooltip
const items = [
  {
    key: '1',
    label: '导航一',
    icon: h('span', '🏠'),
    title: '这是导航一的提示',
  },
  {
    key: '2',
    label: '导航二',
    icon: h('span', '👤'),
    title: '这是导航二的提示',
  },
  {
    key: '3',
    label: '导航三',
    icon: h('span', '⚙️'),
  },
  {
    key: 'sub',
    label: '子菜单',
    icon: h('span', '📁'),
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
`,X={style:{"margin-bottom":"16px"}},Y=m({__name:"MenuTrigger",setup(u){const n=p(["1"]),s=p("hover"),i=[{key:"1",label:"导航一"},{key:"2",label:"导航二"},{key:"sub",label:"子菜单",children:[{key:"sub-1",label:"子项 1"},{key:"sub-2",label:"子项 2"},{key:"sub-3",label:"子项 3"}]},{key:"4",label:"导航四"}],e=({key:d})=>{n.value=[d]};return(d,r)=>(a(),b("div",null,[t("div",X,[r[2]||(r[2]=t("label",{style:{"margin-right":"8px"}},"触发方式:",-1)),_(t("select",{"onUpdate:modelValue":r[0]||(r[0]=h=>s.value=h),style:{padding:"4px 8px"}},[...r[1]||(r[1]=[t("option",{value:"hover"},"hover",-1),t("option",{value:"click"},"click",-1)])],512),[[S,s.value]])]),l(o(y),{mode:"horizontal",items:i,"selected-keys":n.value,"trigger-sub-menu-action":s.value,onSelect:e},null,8,["selected-keys","trigger-sub-menu-action"])]))}}),Z=`<template>
  <div>
    <div style="margin-bottom: 16px">
      <label style="margin-right: 8px">触发方式:</label>
      <select v-model="triggerAction" style="padding: 4px 8px">
        <option value="hover">hover</option>
        <option value="click">click</option>
      </select>
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
import { ref } from 'vue'
import { Menu } from 'ant-design-hmfw'

const selectedKeys = ref(['1'])
const triggerAction = ref<'hover' | 'click'>('hover')

const items = [
  { key: '1', label: '导航一' },
  { key: '2', label: '导航二' },
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
`,ee={class:"markdown-body"},ie={__name:"menu",setup(u,{expose:n}){return n({frontmatter:{}}),(i,e)=>{const d=w("DemoBlock");return a(),b("div",ee,[e[0]||(e[0]=t("h1",{id:"menu-导航菜单",tabindex:"-1"},"Menu 导航菜单",-1)),e[1]||(e[1]=t("p",null,"为页面和功能提供导航的菜单列表。",-1)),e[2]||(e[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=t("ul",null,[t("li",null,"需要展示一个系统功能菜单时"),t("li",null,"需要展示多级导航时"),t("li",null,"需要顶部导航或侧边导航时")],-1)),e[4]||(e[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=t("h3",{id:"顶部导航",tabindex:"-1"},"顶部导航",-1)),e[6]||(e[6]=t("p",null,"水平的顶部导航菜单。",-1)),l(d,{title:"顶部导航",source:o(E)},{default:c(()=>[l(R)]),_:1},8,["source"]),e[7]||(e[7]=t("h3",{id:"内嵌菜单",tabindex:"-1"},"内嵌菜单",-1)),e[8]||(e[8]=t("p",null,"垂直菜单，子菜单内嵌在菜单区域。",-1)),l(d,{title:"内嵌菜单",source:o(j)},{default:c(()=>[l(U)]),_:1},8,["source"]),e[9]||(e[9]=t("h3",{id:"折叠菜单",tabindex:"-1"},"折叠菜单",-1)),e[10]||(e[10]=t("p",null,"内嵌菜单可以被折叠。",-1)),l(d,{title:"折叠菜单",source:o(I)},{default:c(()=>[l(T)]),_:1},8,["source"]),e[11]||(e[11]=t("h3",{id:"危险选项",tabindex:"-1"},"危险选项",-1)),e[12]||(e[12]=t("p",null,"危险操作使用 danger 属性标记。",-1)),l(d,{title:"危险选项",source:o(B)},{default:c(()=>[l(V)]),_:1},8,["source"]),e[13]||(e[13]=t("h3",{id:"分组菜单",tabindex:"-1"},"分组菜单",-1)),e[14]||(e[14]=t("p",null,"使用 type: ‘group’ 对菜单项进行分组。",-1)),l(d,{title:"分组菜单",source:o(G)},{default:c(()=>[l(D)]),_:1},8,["source"]),e[15]||(e[15]=t("h3",{id:"多选菜单",tabindex:"-1"},"多选菜单",-1)),e[16]||(e[16]=t("p",null,"设置 multiple 属性支持多选。",-1)),l(d,{title:"多选菜单",source:o(L)},{default:c(()=>[l(F)]),_:1},8,["source"]),e[17]||(e[17]=t("h3",{id:"全局图标配置",tabindex:"-1"},"全局图标配置",-1)),e[18]||(e[18]=t("p",null,"为菜单项配置图标，支持 VNode 和函数两种形式。",-1)),l(d,{title:"全局图标配置",source:o(z)},{default:c(()=>[l(C)]),_:1},8,["source"]),e[19]||(e[19]=t("h3",{id:"收起状态提示",tabindex:"-1"},"收起状态提示",-1)),e[20]||(e[20]=t("p",null,"inlineCollapsed 为 true 时，鼠标悬停会自动显示 Tooltip 提示。",-1)),l(d,{title:"收起状态提示",source:o(W)},{default:c(()=>[l(Q)]),_:1},8,["source"]),e[21]||(e[21]=t("h3",{id:"自定义缩进",tabindex:"-1"},"自定义缩进",-1)),e[22]||(e[22]=t("p",null,"使用 inlineIndent 属性自定义菜单项缩进宽度，分组内项目会正确计算层级缩进。",-1)),l(d,{title:"自定义缩进",source:o(P)},{default:c(()=>[l(O)]),_:1},8,["source"]),e[23]||(e[23]=t("h3",{id:"子菜单触发方式",tabindex:"-1"},"子菜单触发方式",-1)),e[24]||(e[24]=t("p",null,"使用 triggerSubMenuAction 属性控制子菜单的展开方式（hover 或 click）。",-1)),l(d,{title:"子菜单触发方式",source:o(Z)},{default:c(()=>[l(Y)]),_:1},8,["source"]),e[25]||(e[25]=K('<h2 id="api" tabindex="-1">API</h2><h3 id="menu-props" tabindex="-1">Menu Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>菜单内容</td><td><code>ItemType[]</code></td><td><code>[]</code></td></tr><tr><td>mode</td><td>菜单类型</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39; | &#39;inline&#39;</code></td><td><code>&#39;vertical&#39;</code></td></tr><tr><td>theme</td><td>主题颜色</td><td><code>&#39;light&#39; | &#39;dark&#39;</code></td><td><code>&#39;light&#39;</code></td></tr><tr><td>selectedKeys</td><td>当前选中的菜单项 key 数组</td><td><code>string[]</code></td><td>-</td></tr><tr><td>defaultSelectedKeys</td><td>初始选中的菜单项 key 数组</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td>openKeys</td><td>当前展开的 SubMenu 菜单项 key 数组</td><td><code>string[]</code></td><td>-</td></tr><tr><td>defaultOpenKeys</td><td>初始展开的 SubMenu 菜单项 key 数组</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td>inlineCollapsed</td><td>inline 时菜单是否收起状态，收起时会自动显示 Tooltip</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>inlineIndent</td><td>inline 模式的菜单缩进宽度（单位：px），分组内项目会递增 depth 正确计算缩进</td><td><code>number</code></td><td><code>24</code></td></tr><tr><td>multiple</td><td>是否允许多选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>selectable</td><td>是否允许选中</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>expandIcon</td><td>自定义展开图标</td><td><code>VNode | ((props: { isOpen: boolean }) =&gt; VNode)</code></td><td>-</td></tr><tr><td>triggerSubMenuAction</td><td>SubMenu 展开/关闭的触发行为，支持鼠标悬停或点击</td><td><code>&#39;hover&#39; | &#39;click&#39;</code></td><td><code>&#39;hover&#39;</code></td></tr></tbody></table><h3 id="itemtype" tabindex="-1">ItemType</h3><p>菜单项类型，可以是以下之一：</p><h4 id="menuitemtype-普通菜单项" tabindex="-1">MenuItemType (普通菜单项)</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>菜单项标题</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>图标，支持 VNode 或返回 VNode 的函数</td><td><code>VNode | (() =&gt; VNode)</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>danger</td><td>是否为危险选项，用于删除等操作</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>设置收缩时展示的悬浮标题，inlineCollapsed 时显示为 Tooltip</td><td><code>string</code></td><td>-</td></tr></tbody></table><h4 id="submenutype-子菜单" tabindex="-1">SubMenuType (子菜单)</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>子菜单标题</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>图标</td><td><code>VNode | (() =&gt; VNode)</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>children</td><td>子菜单项</td><td><code>ItemType[]</code></td><td>-</td></tr><tr><td>theme</td><td>子菜单主题</td><td><code>&#39;light&#39; | &#39;dark&#39;</code></td><td>-</td></tr></tbody></table><h4 id="menudividertype-分割线" tabindex="-1">MenuDividerType (分割线)</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型标识</td><td><code>&#39;divider&#39;</code></td><td>-</td></tr><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>dashed</td><td>是否虚线</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h4 id="menuitemgrouptype-菜单分组" tabindex="-1">MenuItemGroupType (菜单分组)</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型标识</td><td><code>&#39;group&#39;</code></td><td>-</td></tr><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>分组标题</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>分组内的菜单项，深度会递增以正确计算 inline 模式缩进</td><td><code>ItemType[]</code></td><td>-</td></tr></tbody></table><h3 id="menu-events" tabindex="-1">Menu Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>被选中时调用</td><td><code>({ key: string, selectedKeys: string[] }) =&gt; void</code></td></tr><tr><td>deselect</td><td>取消选中时调用（仅 multiple 模式）</td><td><code>({ key: string, selectedKeys: string[] }) =&gt; void</code></td></tr><tr><td>openChange</td><td>SubMenu 展开/关闭的回调</td><td><code>(openKeys: string[]) =&gt; void</code></td></tr><tr><td>click</td><td>点击菜单项触发的回调</td><td><code>({ key: string }) =&gt; void</code></td></tr></tbody></table>',15))])}}};export{ie as default};
