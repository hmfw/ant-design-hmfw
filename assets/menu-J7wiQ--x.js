import{B as z}from"./Button-CtozVOI9.js";import{k as K,I as N,z as b,L as O,j as d,i as M,c as $,x as A,w as S,g as C,G as p,M as x,E as P,d as i,r as V,e as D,B as L,h as T}from"./index-DvxRruME.js";import{c as k}from"./cls-S9IiI6wd.js";import"./icons-CgCOAJDO.js";const H=Symbol("menu-context"),_=K({name:"Menu",props:{items:Array,mode:{type:String,default:"vertical"},selectedKeys:Array,defaultSelectedKeys:Array,openKeys:Array,defaultOpenKeys:Array,inlineCollapsed:Boolean,theme:{type:String,default:"light"},multiple:Boolean,selectable:{type:Boolean,default:!0},inlineIndent:{type:Number,default:24}},emits:["update:selectedKeys","update:openKeys","select","deselect","openChange","click"],setup(l,{emit:s}){const e=N("menu"),c=b(l.defaultSelectedKeys??l.selectedKeys??[]),n=b(l.defaultOpenKeys??l.openKeys??[]),r=$(()=>l.selectedKeys!==void 0),f=$(()=>l.openKeys!==void 0),y=$(()=>r.value?l.selectedKeys:c.value),h=$(()=>f.value?l.openKeys:n.value);O(()=>l.selectedKeys,o=>{o&&(c.value=o)}),O(()=>l.openKeys,o=>{o&&(n.value=o)});const B=o=>{if(!l.selectable)return;let a;l.multiple?a=y.value.includes(o)?y.value.filter(t=>t!==o):[...y.value,o]:a=[o],c.value=a,s("update:selectedKeys",a),s("select",{key:o,selectedKeys:a}),s("click",{key:o})},m=(o,a)=>{const t=a?[...h.value,o]:h.value.filter(v=>v!==o);n.value=t,s("update:openKeys",t),s("openChange",t)};A(H,{get selectedKeys(){return y.value},get openKeys(){return h.value},get mode(){return l.mode},prefixCls:e,onSelect:B,onOpenChange:m});const g=(o,a=0)=>o.map(t=>{var w;if(t.type==="divider")return d("li",{key:t.key,class:`${e}-item-divider`,role:"separator"},null);if(t.type==="group")return d("li",{key:t.key,class:`${e}-item-group`},[d("div",{class:`${e}-item-group-title`},[t.label]),d("ul",{class:`${e}-item-group-list`},[t.children&&g(t.children,a+1)])]);if((w=t.children)!=null&&w.length){const u=h.value.includes(t.key),I=t.children.some(E=>y.value.includes(E.key));return l.mode==="inline"?d("li",{key:t.key,class:k(`${e}-submenu`,`${e}-submenu-inline`,{[`${e}-submenu-open`]:u,[`${e}-submenu-selected`]:I})},[d("div",{class:`${e}-submenu-title`,style:{paddingLeft:`${l.inlineIndent*(a+1)}px`},role:"button","aria-expanded":u,"aria-haspopup":"true",onClick:()=>m(t.key,!u)},[t.icon&&d("span",{class:`${e}-item-icon`},[t.icon]),d("span",{class:`${e}-title-content`},[t.label]),d("span",{class:k(`${e}-submenu-arrow`,{open:u})},[M("▾")])]),u&&d("ul",{class:`${e}-sub ${e}-inline`},[g(t.children,a+1)])]):d("li",{key:t.key,class:k(`${e}-submenu`,`${e}-submenu-${l.mode}`,{[`${e}-submenu-open`]:u,[`${e}-submenu-selected`]:I}),onMouseenter:()=>l.mode!=="vertical"&&m(t.key,!0),onMouseleave:()=>l.mode!=="vertical"&&m(t.key,!1)},[d("div",{class:`${e}-submenu-title`,role:"button","aria-expanded":u,"aria-haspopup":"true",onClick:()=>l.mode==="vertical"&&m(t.key,!u)},[t.icon&&d("span",{class:`${e}-item-icon`},[t.icon]),d("span",{class:`${e}-title-content`},[t.label]),d("span",{class:`${e}-submenu-arrow`},[M("▾")])]),u&&d("ul",{class:`${e}-sub ${e}-vertical`},[g(t.children,a+1)])])}const v=y.value.includes(t.key);return d("li",{key:t.key,class:k(`${e}-item`,{[`${e}-item-selected`]:v,[`${e}-item-disabled`]:t.disabled,[`${e}-item-danger`]:t.danger}),style:l.mode==="inline"?{paddingLeft:`${l.inlineIndent*(a+1)}px`}:{},role:"menuitem","aria-disabled":t.disabled||void 0,"aria-current":v?"true":void 0,title:t.title??t.label,onClick:()=>!t.disabled&&B(t.key)},[t.icon&&d("span",{class:`${e}-item-icon`},[t.icon]),d("span",{class:`${e}-title-content`},[t.label])])});return()=>d("ul",{class:k(e,`${e}-root`,`${e}-${l.mode}`,`${e}-${l.theme}`,{[`${e}-inline-collapsed`]:l.inlineCollapsed}),role:"menu"},[g(l.items??[])])}}),R=K({__name:"MenuCollapsed",setup(l){const s=b(!1),e=b(["1"]),c=[{key:"1",label:"导航一",icon:"home"},{key:"2",label:"导航二",icon:"user"},{key:"3",label:"导航三",icon:"setting"}],n=({key:r})=>{e.value=[r]};return(r,f)=>(S(),C("div",null,[d(p(z),{type:"primary",style:{"margin-bottom":"16px"},onClick:f[0]||(f[0]=y=>s.value=!s.value)},{default:x(()=>[M(P(s.value?"展开":"折叠"),1)]),_:1}),i("div",{style:V({width:s.value?"80px":"256px",borderRight:"1px solid #f0f0f0",transition:"width 0.2s"})},[d(p(_),{mode:"inline",items:c,"selected-keys":e.value,"inline-collapsed":s.value,onSelect:n},null,8,["selected-keys","inline-collapsed"])],4)]))}}),j=`<template>
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
`,G=K({__name:"MenuHorizontal",setup(l){const s=b(["home"]),e=[{key:"home",label:"首页",icon:"home"},{key:"user",label:"用户管理",icon:"user"},{key:"setting",label:"系统设置",icon:"setting",children:[{key:"setting-1",label:"基础设置"},{key:"setting-2",label:"高级设置"}]}],c=({key:n})=>{s.value=[n]};return(n,r)=>(S(),D(p(_),{mode:"horizontal",items:e,"selected-keys":s.value,onSelect:c},null,8,["selected-keys"]))}}),U=`<template>
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
`,X={style:{width:"256px","border-right":"1px solid #f0f0f0"}},Y=K({__name:"MenuInline",setup(l){const s=b(["1"]),e=[{key:"sub1",label:"导航一",icon:"home",children:[{key:"1",label:"选项一"},{key:"2",label:"选项二"},{key:"3",label:"选项三"}]},{key:"sub2",label:"导航二",icon:"setting",children:[{key:"5",label:"选项五"},{key:"6",label:"选项六"}]},{key:"9",label:"导航三",icon:"user"}],c=({key:n})=>{s.value=[n]};return(n,r)=>(S(),C("div",X,[d(p(_),{mode:"inline",items:e,"selected-keys":s.value,"default-open-keys":["sub1"],onSelect:c},null,8,["selected-keys"])]))}}),q=`<template>
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
`,F={class:"markdown-body"},ee={__name:"menu",setup(l,{expose:s}){return s({frontmatter:{}}),(c,n)=>{const r=L("DemoBlock");return S(),C("div",F,[n[0]||(n[0]=i("h1",{id:"menu-",tabindex:"-1"},"Menu 导航菜单",-1)),n[1]||(n[1]=i("p",null,"为页面和功能提供导航的菜单列表。",-1)),n[2]||(n[2]=i("h2",{id:"",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=i("ul",null,[i("li",null,"需要展示一个系统功能菜单时"),i("li",null,"需要展示多级导航时"),i("li",null,"需要顶部导航或侧边导航时")],-1)),n[4]||(n[4]=i("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=i("h3",{id:"-2",tabindex:"-1"},"顶部导航",-1)),n[6]||(n[6]=i("p",null,"水平的顶部导航菜单。",-1)),d(r,{title:"顶部导航",source:p(U)},{default:x(()=>[d(G)]),_:1},8,["source"]),n[7]||(n[7]=i("h3",{id:"-3",tabindex:"-1"},"内嵌菜单",-1)),n[8]||(n[8]=i("p",null,"垂直菜单，子菜单内嵌在菜单区域。",-1)),d(r,{title:"内嵌菜单",source:p(q)},{default:x(()=>[d(Y)]),_:1},8,["source"]),n[9]||(n[9]=i("h3",{id:"-4",tabindex:"-1"},"折叠菜单",-1)),n[10]||(n[10]=i("p",null,"内嵌菜单可以被折叠。",-1)),d(r,{title:"折叠菜单",source:p(j)},{default:x(()=>[d(R)]),_:1},8,["source"]),n[11]||(n[11]=T('<h2 id="api" tabindex="-1">API</h2><h3 id="menu-props" tabindex="-1">Menu Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>菜单内容</td><td><code>MenuItem[]</code></td><td><code>[]</code></td></tr><tr><td>mode</td><td>菜单类型</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39; | &#39;inline&#39;</code></td><td><code>&#39;vertical&#39;</code></td></tr><tr><td>theme</td><td>主题颜色</td><td><code>&#39;light&#39; | &#39;dark&#39;</code></td><td><code>&#39;light&#39;</code></td></tr><tr><td>selectedKeys</td><td>当前选中的菜单项 key 数组</td><td><code>string[]</code></td><td>-</td></tr><tr><td>defaultSelectedKeys</td><td>初始选中的菜单项 key 数组</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td>openKeys</td><td>当前展开的 SubMenu 菜单项 key 数组</td><td><code>string[]</code></td><td>-</td></tr><tr><td>defaultOpenKeys</td><td>初始展开的 SubMenu 菜单项 key 数组</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td>collapsed</td><td>是否折叠（仅 inline 模式）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>inlineCollapsed</td><td>inline 时菜单是否收起状态</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="menuitem" tabindex="-1">MenuItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>菜单项标题</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>图标类型</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>子菜单项</td><td><code>MenuItem[]</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>type</td><td>菜单项类型</td><td><code>&#39;group&#39; | &#39;divider&#39;</code></td><td>-</td></tr></tbody></table><h3 id="menu-events" tabindex="-1">Menu Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>被选中时调用</td><td><code>({ key: string, keyPath: string[], selectedKeys: string[] }) =&gt; void</code></td></tr><tr><td>openChange</td><td>SubMenu 展开/关闭的回调</td><td><code>(openKeys: string[]) =&gt; void</code></td></tr><tr><td>click</td><td>点击菜单项触发的回调</td><td><code>({ key: string, keyPath: string[] }) =&gt; void</code></td></tr></tbody></table>',7))])}}};export{ee as default};
