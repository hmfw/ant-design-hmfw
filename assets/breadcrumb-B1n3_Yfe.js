import{D as E}from"./index-ClX2Pslu.js";import{n as f,M as L,m as r,F as j,r as S,q as z,z as b,h as g,J as o,j as V,g as n,I as F,D as H,o as $,Q as u,G as U,l,k as K}from"./index-BIkAb7lZ.js";import{c as x}from"./cls-S9IiI6wd.js";import{I}from"./Icon-DOjVoSFw.js";import{u as N,ak as M,O as W}from"./icons-DLCoPw-s.js";import{S as q}from"./Space-CLLuvOfj.js";import"./Menu-CZpiWSfT.js";import"./Button-DijKNe_E.js";function G(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!z(s)}const J=(s,e)=>{if(e===void 0)return e;let a=(e||"").replace(/^\//,"");return Object.keys(s).forEach(d=>{a=a.replace(`:${d}`,s[d])}),a},Q=(s,e)=>{const{title:a}=s;if(a==null)return null;if(typeof a=="string"){const d=Object.keys(e).join("|");return a.replace(new RegExp(`:(${d})`,"g"),(t,i)=>e[i]||t)}return a},X=s=>{const e={};return Object.keys(s).forEach(a=>{(a.startsWith("data-")||a.startsWith("aria-"))&&(e[a]=s[a])}),e},p=f({name:"Breadcrumb",props:{items:Array,separator:{type:[String,Object],default:"/"},params:{type:Object,default:()=>({})},itemRender:Function},setup(s){const e=L("breadcrumb"),a=(d,t,i)=>{if(t==null)return null;const{className:y,onClick:c,menu:m,...h}=d,B={...X(h),onClick:c};if(m&&m.items&&m.items.length>0){const k=i!==void 0?r("a",S(B,{class:x(`${e}-link`,y),href:i}),[r("span",{class:`${e}-overlay-link`},[t,r(I,{component:N,style:"margin-left: 4px; font-size: 10px;"},null)])]):r("span",S(B,{class:x(`${e}-link`,y)}),[r("span",{class:`${e}-overlay-link`},[t,r(I,{component:N,style:"margin-left: 4px; font-size: 10px;"},null)])]);return r(E,{menu:m,trigger:["hover"]},G(k)?k:{default:()=>[k]})}return i!==void 0?r("a",S(B,{class:x(`${e}-link`,y),href:i}),[t]):r("span",S(B,{class:x(`${e}-link`,y)}),[t])};return()=>{const d=s.items??[],t=[],i=d.filter(c=>!("type"in c&&c.type==="separator")),y=d.map((c,m)=>{if("type"in c&&c.type==="separator"){const _=c;return r("li",{key:_.key??`separator-${m}`,class:`${e}-separator`,"aria-hidden":"true"},[_.separator===""?_.separator:_.separator||s.separator])}const h=c,{path:B,key:k,className:D,style:T,onClick:ht}=h,v=J(s.params,B);v!==void 0&&t.push(v);const R=k??m,w=m===d.length-1,C=d[m+1],A=C&&"type"in C&&C.type==="separator";let{href:P}=h;t.length&&v!==void 0&&(P=`#/${t.join("/")}`);let O;if(s.itemRender)O=s.itemRender(h,s.params,i,[...t]);else{const _=Q(h,s.params);O=a(h,_,P)}return r(j,null,[r("li",{key:R,class:x(`${e}-item`,D),style:T,"aria-current":w?"page":void 0},[O]),!w&&!A&&r("li",{class:`${e}-separator`,"aria-hidden":"true"},[s.separator])])});return r("nav",{class:e,"aria-label":"breadcrumb"},[r("ol",null,[y])])}}}),Y=f({__name:"BreadcrumbBasic",setup(s){const e=[{title:"首页"},{title:"应用列表"},{title:"某应用"}];return(a,d)=>(b(),g(o(p),{items:e}))}}),Z=`<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const items = [
  { title: '首页' },
  { title: '应用列表' },
  { title: '某应用' },
]
<\/script>
`,tt={style:{"margin-top":"8px",color:"#666"}},et=f({__name:"BreadcrumbClick",setup(s){const e=H("无"),a=[{title:"首页",onClick:()=>{e.value="首页"}},{title:"应用列表",onClick:()=>{e.value="应用列表"}},{title:"某应用"}];return(d,t)=>(b(),V(j,null,[r(o(p),{items:a}),n("p",tt,"点击了："+F(e.value),1)],64))}}),rt=`<template>
  <Breadcrumb :items="items" />
  <p style="margin-top: 8px; color: #666;">点击了：{{ clicked }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Breadcrumb } from 'ant-design-hmfw'

const clicked = ref('无')

const items = [
  {
    title: '首页',
    onClick: () => { clicked.value = '首页' },
  },
  {
    title: '应用列表',
    onClick: () => { clicked.value = '应用列表' },
  },
  { title: '某应用' },
]
<\/script>
`,nt=f({__name:"BreadcrumbIcon",setup(s){const e=[{title:$(I,{component:W}),href:"/"},{title:$("span",{},[$(I,{component:M}),$("span",{style:{marginLeft:"4px"}},"用户列表")]),href:"/users"},{title:"用户详情"}];return(a,d)=>(b(),g(o(p),{items:e}))}}),st=`<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Breadcrumb, Icon, HomeOutlined, UserOutlined } from 'ant-design-hmfw'

const items = [
  {
    title: h(Icon, { component: HomeOutlined }),
    href: '/',
  },
  {
    title: h('span', {}, [
      h(Icon, { component: UserOutlined }),
      h('span', { style: { marginLeft: '4px' } }, '用户列表'),
    ]),
    href: '/users',
  },
  {
    title: '用户详情',
  },
]
<\/script>
`,at=f({__name:"BreadcrumbLink",setup(s){const e=[{title:"首页",href:"/"},{title:"应用列表",href:"/apps"},{title:"某应用"}];return(a,d)=>(b(),g(o(p),{items:e}))}}),dt=`<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const items = [
  { title: '首页', href: '/' },
  { title: '应用列表', href: '/apps' },
  { title: '某应用' },
]
<\/script>
`,ot=f({__name:"BreadcrumbParams",setup(s){const e={id:"123"},a=[{title:"用户管理",href:"/users"},{title:"用户 :id"}];return(d,t)=>(b(),g(o(p),{items:a,params:e}))}}),it=`<template>
  <Breadcrumb :items="items" :params="params" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const params = { id: '123' }

const items = [
  { title: '用户管理', href: '/users' },
  { title: '用户 :id' },
]
<\/script>
`,lt=f({__name:"BreadcrumbPath",setup(s){const e=[{path:"home",title:"首页"},{path:"user",title:"用户"},{path:"profile",title:"个人资料"}];return(a,d)=>(b(),g(o(p),{items:e}))}}),pt=`<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const items = [
  { path: 'home', title: '首页' },
  { path: 'user', title: '用户' },
  { path: 'profile', title: '个人资料' },
]
<\/script>
`,ct=f({__name:"BreadcrumbSeparator",setup(s){const e=[{title:"首页",href:"/"},{title:"一级菜单",href:"/level1"},{title:"二级菜单"}];return(a,d)=>(b(),g(o(q),{direction:"vertical"},{default:u(()=>[r(o(p),{items:e,separator:">"}),r(o(p),{items:e,separator:"/"}),r(o(p),{items:e,separator:"|"})]),_:1}))}}),mt=`<template>
  <Space direction="vertical">
    <Breadcrumb :items="items" separator=">" />
    <Breadcrumb :items="items" separator="/" />
    <Breadcrumb :items="items" separator="|" />
  </Space>
</template>

<script setup lang="ts">
import { Breadcrumb, Space } from 'ant-design-hmfw'

const items = [
  { title: '首页', href: '/' },
  { title: '一级菜单', href: '/level1' },
  { title: '二级菜单' },
]
<\/script>
`,ut=f({__name:"BreadcrumbSeparatorType",setup(s){const e=[{title:"位置"},{type:"separator",separator:":"},{title:"应用中心",href:"/app"},{type:"separator"},{title:"应用列表",href:"/app/list"},{type:"separator"},{title:"某应用"}];return(a,d)=>(b(),g(o(p),{items:e,separator:""}))}}),ft=`<template>
  <Breadcrumb :items="items" separator="" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const items = [
  { title: '位置' },
  { type: 'separator', separator: ':' },
  { title: '应用中心', href: '/app' },
  { type: 'separator' },
  { title: '应用列表', href: '/app/list' },
  { type: 'separator' },
  { title: '某应用' },
]
<\/script>
`,bt={class:"markdown-body"},It={__name:"breadcrumb",setup(s,{expose:e}){return e({frontmatter:{}}),(d,t)=>{const i=U("DemoBlock");return b(),V("div",bt,[t[0]||(t[0]=n("h1",{id:"breadcrumb-",tabindex:"-1"},"Breadcrumb 面包屑",-1)),t[1]||(t[1]=n("p",null,"显示当前页面在系统层级结构中的位置，并能向上返回。",-1)),t[2]||(t[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"当系统拥有超过两级以上的层级结构时"),n("li",null,"当需要告知用户当前位置时"),n("li",null,"当需要向上导航的功能时")],-1)),t[4]||(t[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=n("p",null,"最简单的用法。",-1)),r(i,{title:"基础用法",source:o(Z)},{default:u(()=>[r(Y)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"-3",tabindex:"-1"},"带链接",-1)),t[8]||(t[8]=n("p",null,[l("通过 "),n("code",null,"href"),l(" 属性设置链接。")],-1)),r(i,{title:"带链接",source:o(dt)},{default:u(()=>[r(at)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"-4",tabindex:"-1"},"自定义分隔符",-1)),t[10]||(t[10]=n("p",null,[l("通过 "),n("code",null,"separator"),l(" 属性自定义分隔符。")],-1)),r(i,{title:"自定义分隔符",source:o(mt)},{default:u(()=>[r(ct)]),_:1},8,["source"]),t[11]||(t[11]=n("h3",{id:"-5",tabindex:"-1"},"带图标",-1)),t[12]||(t[12]=n("p",null,[l("可以在 "),n("code",null,"title"),l(" 中使用图标。")],-1)),r(i,{title:"带图标",source:o(st)},{default:u(()=>[r(nt)]),_:1},8,["source"]),t[13]||(t[13]=n("h3",{id:"-6",tabindex:"-1"},"带点击事件",-1)),t[14]||(t[14]=n("p",null,[l("通过 "),n("code",null,"onClick"),l(" 处理面包屑点击。")],-1)),r(i,{title:"带点击事件",source:o(rt)},{default:u(()=>[r(et)]),_:1},8,["source"]),t[15]||(t[15]=n("h3",{id:"-7",tabindex:"-1"},"参数替换",-1)),t[16]||(t[16]=n("p",null,[l("通过 "),n("code",null,"params"),l(" 属性替换路径中的参数。")],-1)),r(i,{title:"参数替换",source:o(it)},{default:u(()=>[r(ot)]),_:1},8,["source"]),t[17]||(t[17]=n("h3",{id:"-8",tabindex:"-1"},"分隔符类型",-1)),t[18]||(t[18]=n("p",null,[l("可以在 "),n("code",null,"items"),l(" 中使用 "),n("code",null,"type: 'separator'"),l(" 来自定义每个分隔符。")],-1)),r(i,{title:"分隔符类型",source:o(ft)},{default:u(()=>[r(ut)]),_:1},8,["source"]),t[19]||(t[19]=n("h3",{id:"-9",tabindex:"-1"},"路径拼接",-1)),t[20]||(t[20]=n("p",null,[l("使用 "),n("code",null,"path"),l(" 属性自动拼接路径。")],-1)),r(i,{title:"路径拼接",source:o(pt)},{default:u(()=>[r(lt)]),_:1},8,["source"]),t[21]||(t[21]=K('<h2 id="api" tabindex="-1">API</h2><h3 id="breadcrumb-props" tabindex="-1">Breadcrumb Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>路由栈信息</td><td><code>ItemType[]</code></td><td><code>[]</code></td></tr><tr><td>separator</td><td>分隔符</td><td><code>string | VNode</code></td><td><code>&#39;/&#39;</code></td></tr><tr><td>params</td><td>路径参数</td><td><code>Record&lt;string, any&gt;</code></td><td><code>{}</code></td></tr></tbody></table><h3 id="itemtype" tabindex="-1">ItemType</h3><p>面包屑项或分隔符。</p><p><strong>BreadcrumbItemType:</strong></p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string | number</code></td><td>-</td></tr><tr><td>title</td><td>名称</td><td><code>string | number | VNode</code></td><td>-</td></tr><tr><td>href</td><td>链接地址</td><td><code>string</code></td><td>-</td></tr><tr><td>path</td><td>路径（会自动拼接前面的路径）</td><td><code>string</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>onClick</td><td>点击事件</td><td><code>(e: MouseEvent) =&gt; void</code></td><td>-</td></tr><tr><td>data-*</td><td>自定义数据属性</td><td><code>any</code></td><td>-</td></tr><tr><td>aria-*</td><td>ARIA 无障碍属性</td><td><code>any</code></td><td>-</td></tr></tbody></table><p><strong>BreadcrumbSeparatorType:</strong></p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型（必须为 ‘separator’）</td><td><code>&#39;separator&#39;</code></td><td>-</td></tr><tr><td>separator</td><td>分隔符内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>key</td><td>唯一标识</td><td><code>string | number</code></td><td>-</td></tr></tbody></table>',9))])}}};export{It as default};
