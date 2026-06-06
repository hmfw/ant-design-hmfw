import{B as h}from"./Button-CwdPD8WR.js";import{M as u}from"./Menu-CYqHKtUv.js";import{m as p,y as c,i as y,l as n,I as l,P as r,k,H as g,f as e,t as f,B as m,g as v,E as x,j as M}from"./index-BQisgCTe.js";import"./icons-Buy98oKP.js";import"./Icon-BfLh2ono.js";import"./cls-S9IiI6wd.js";const _=p({__name:"MenuCollapsed",setup(a){const d=m(!1),s=m(["1"]),i=[{key:"1",label:"导航一",icon:"home"},{key:"2",label:"导航二",icon:"user"},{key:"3",label:"导航三",icon:"setting"}],t=({key:o})=>{s.value=[o]};return(o,b)=>(c(),y("div",null,[n(l(h),{type:"primary",style:{"margin-bottom":"16px"},onClick:b[0]||(b[0]=A=>d.value=!d.value)},{default:r(()=>[k(g(d.value?"展开":"折叠"),1)]),_:1}),e("div",{style:f({width:d.value?"80px":"256px",borderRight:"1px solid #f0f0f0",transition:"width 0.2s"})},[n(l(u),{mode:"inline",items:i,"selected-keys":s.value,"inline-collapsed":d.value,onSelect:t},null,8,["selected-keys","inline-collapsed"])],4)]))}}),S=`<template>
  <div>
    <Button
      type="primary"
      style="margin-bottom: 16px;"
      @click="collapsed = !collapsed"
    >
      {{ collapsed ? '展开' : '折叠' }}
    </Button>
    <div :style="{ width: collapsed ? '80px' : '256px', borderRight: '1px solid #f0f0f0', transition: 'width 0.2s' }">
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
`,w={style:{width:"256px"}},K=p({__name:"MenuDanger",setup(a){const d=[{key:"1",label:"普通选项"},{key:"2",label:"编辑",icon:"✏️"},{type:"divider"},{key:"3",label:"删除",danger:!0,icon:"🗑️"}];return(s,i)=>(c(),y("div",w,[n(l(u),{mode:"inline",items:d})]))}}),I=`<template>
  <div style="width: 256px;">
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
`,T={style:{width:"256px"}},B=p({__name:"MenuGroup",setup(a){const d=[{type:"group",label:"用户管理",children:[{key:"1",label:"用户列表"},{key:"2",label:"添加用户"}]},{type:"group",label:"系统设置",children:[{key:"3",label:"基本设置"},{key:"4",label:"高级设置"}]}];return(s,i)=>(c(),y("div",T,[n(l(u),{mode:"inline",items:d})]))}}),$=`<template>
  <div style="width: 256px;">
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
`,N=p({__name:"MenuHorizontal",setup(a){const d=m(["home"]),s=[{key:"home",label:"首页",icon:"home"},{key:"user",label:"用户管理",icon:"user"},{key:"setting",label:"系统设置",icon:"setting",children:[{key:"setting-1",label:"基础设置"},{key:"setting-2",label:"高级设置"}]}],i=({key:t})=>{d.value=[t]};return(t,o)=>(c(),v(l(u),{mode:"horizontal",items:s,"selected-keys":d.value,onSelect:i},null,8,["selected-keys"]))}}),V=`<template>
  <Menu
    mode="horizontal"
    :items="items"
    :selected-keys="selectedKeys"
    @select="onSelect"
  />
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
`,C={style:{width:"256px","border-right":"1px solid #f0f0f0"}},z=p({__name:"MenuInline",setup(a){const d=m(["1"]),s=[{key:"sub1",label:"导航一",icon:"home",children:[{key:"1",label:"选项一"},{key:"2",label:"选项二"},{key:"3",label:"选项三"}]},{key:"sub2",label:"导航二",icon:"setting",children:[{key:"5",label:"选项五"},{key:"6",label:"选项六"}]},{key:"9",label:"导航三",icon:"user"}],i=({key:t})=>{d.value=[t]};return(t,o)=>(c(),y("div",C,[n(l(u),{mode:"inline",items:s,"selected-keys":d.value,"default-open-keys":["sub1"],onSelect:i},null,8,["selected-keys"])]))}}),D=`<template>
  <div style="width: 256px; border-right: 1px solid #f0f0f0;">
    <Menu
      mode="inline"
      :items="items"
      :selected-keys="selectedKeys"
      :default-open-keys="['sub1']"
      @select="onSelect"
    />
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
`,E={style:{width:"256px"}},G=p({__name:"MenuMultiple",setup(a){const d=[{key:"1",label:"选项一"},{key:"2",label:"选项二"},{key:"3",label:"选项三"},{key:"4",label:"选项四"}];return(s,i)=>(c(),y("div",E,[n(l(u),{mode:"inline",items:d,multiple:"","default-selected-keys":["1","2"]})]))}}),H=`<template>
  <div style="width: 256px;">
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
`,P={class:"markdown-body"},L={__name:"menu",setup(a,{expose:d}){return d({frontmatter:{}}),(i,t)=>{const o=x("DemoBlock");return c(),y("div",P,[t[0]||(t[0]=e("h1",{id:"menu-",tabindex:"-1"},"Menu 导航菜单",-1)),t[1]||(t[1]=e("p",null,"为页面和功能提供导航的菜单列表。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"需要展示一个系统功能菜单时"),e("li",null,"需要展示多级导航时"),e("li",null,"需要顶部导航或侧边导航时")],-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"顶部导航",-1)),t[6]||(t[6]=e("p",null,"水平的顶部导航菜单。",-1)),n(o,{title:"顶部导航",source:l(V)},{default:r(()=>[n(N)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"内嵌菜单",-1)),t[8]||(t[8]=e("p",null,"垂直菜单，子菜单内嵌在菜单区域。",-1)),n(o,{title:"内嵌菜单",source:l(D)},{default:r(()=>[n(z)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-4",tabindex:"-1"},"折叠菜单",-1)),t[10]||(t[10]=e("p",null,"内嵌菜单可以被折叠。",-1)),n(o,{title:"折叠菜单",source:l(S)},{default:r(()=>[n(_)]),_:1},8,["source"]),t[11]||(t[11]=e("h3",{id:"-5",tabindex:"-1"},"危险选项",-1)),t[12]||(t[12]=e("p",null,"危险操作使用 danger 属性标记。",-1)),n(o,{title:"危险选项",source:l(I)},{default:r(()=>[n(K)]),_:1},8,["source"]),t[13]||(t[13]=e("h3",{id:"-6",tabindex:"-1"},"分组菜单",-1)),t[14]||(t[14]=e("p",null,"使用 type: ‘group’ 对菜单项进行分组。",-1)),n(o,{title:"分组菜单",source:l($)},{default:r(()=>[n(B)]),_:1},8,["source"]),t[15]||(t[15]=e("h3",{id:"-7",tabindex:"-1"},"多选菜单",-1)),t[16]||(t[16]=e("p",null,"设置 multiple 属性支持多选。",-1)),n(o,{title:"多选菜单",source:l(H)},{default:r(()=>[n(G)]),_:1},8,["source"]),t[17]||(t[17]=M('<h2 id="api" tabindex="-1">API</h2><h3 id="menu-props" tabindex="-1">Menu Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>菜单内容</td><td><code>ItemType[]</code></td><td><code>[]</code></td></tr><tr><td>mode</td><td>菜单类型</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39; | &#39;inline&#39;</code></td><td><code>&#39;vertical&#39;</code></td></tr><tr><td>theme</td><td>主题颜色</td><td><code>&#39;light&#39; | &#39;dark&#39;</code></td><td><code>&#39;light&#39;</code></td></tr><tr><td>selectedKeys</td><td>当前选中的菜单项 key 数组</td><td><code>string[]</code></td><td>-</td></tr><tr><td>defaultSelectedKeys</td><td>初始选中的菜单项 key 数组</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td>openKeys</td><td>当前展开的 SubMenu 菜单项 key 数组</td><td><code>string[]</code></td><td>-</td></tr><tr><td>defaultOpenKeys</td><td>初始展开的 SubMenu 菜单项 key 数组</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td>inlineCollapsed</td><td>inline 时菜单是否收起状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>inlineIndent</td><td>inline 模式的菜单缩进宽度</td><td><code>number</code></td><td><code>24</code></td></tr><tr><td>multiple</td><td>是否允许多选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>selectable</td><td>是否允许选中</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>expandIcon</td><td>自定义展开图标</td><td><code>VNode | ((props: { isOpen: boolean }) =&gt; VNode)</code></td><td>-</td></tr><tr><td>triggerSubMenuAction</td><td>SubMenu 展开/关闭的触发行为</td><td><code>&#39;hover&#39; | &#39;click&#39;</code></td><td><code>&#39;hover&#39;</code></td></tr></tbody></table><h3 id="itemtype" tabindex="-1">ItemType</h3><p>菜单项类型，可以是以下之一：</p><h4 id="menuitemtype-" tabindex="-1">MenuItemType (普通菜单项)</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>菜单项标题</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>图标</td><td><code>VNode | (() =&gt; VNode)</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>danger</td><td>是否为危险选项</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>设置收缩时展示的悬浮标题</td><td><code>string</code></td><td>-</td></tr></tbody></table><h4 id="submenutype-" tabindex="-1">SubMenuType (子菜单)</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>子菜单标题</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>图标</td><td><code>VNode | (() =&gt; VNode)</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>children</td><td>子菜单项</td><td><code>ItemType[]</code></td><td>-</td></tr><tr><td>theme</td><td>子菜单主题</td><td><code>&#39;light&#39; | &#39;dark&#39;</code></td><td>-</td></tr></tbody></table><h4 id="menudividertype-" tabindex="-1">MenuDividerType (分割线)</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型标识</td><td><code>&#39;divider&#39;</code></td><td>-</td></tr><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>dashed</td><td>是否虚线</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h4 id="menuitemgrouptype-" tabindex="-1">MenuItemGroupType (菜单分组)</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型标识</td><td><code>&#39;group&#39;</code></td><td>-</td></tr><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>分组标题</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>分组内的菜单项</td><td><code>ItemType[]</code></td><td>-</td></tr></tbody></table><h3 id="menu-events" tabindex="-1">Menu Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>被选中时调用</td><td><code>({ key: string, selectedKeys: string[] }) =&gt; void</code></td></tr><tr><td>deselect</td><td>取消选中时调用（仅 multiple 模式）</td><td><code>({ key: string, selectedKeys: string[] }) =&gt; void</code></td></tr><tr><td>openChange</td><td>SubMenu 展开/关闭的回调</td><td><code>(openKeys: string[]) =&gt; void</code></td></tr><tr><td>click</td><td>点击菜单项触发的回调</td><td><code>({ key: string }) =&gt; void</code></td></tr></tbody></table>',15))])}}};export{L as default};
