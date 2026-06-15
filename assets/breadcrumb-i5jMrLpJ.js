import{D as E}from"./index-DGM9rXHz.js";import{o as f,N as H,n as r,F as j,s as S,r as L,A as b,i as g,K as d,k as V,h as n,J as U,E as F,p as $,R as u,H as K,m as l,l as z}from"./index-C7r7ERgN.js";import{c as x}from"./cls-S9IiI6wd.js";import{I}from"./Icon-Bn-1ylNX.js";import{D as P}from"./DownOutlined-B23SxAsn.js";import{U as W}from"./UserOutlined-kibQnsPc.js";import{H as J}from"./HomeOutlined-AZYQdqrf.js";import{S as M}from"./Space-CYS8Qg3Y.js";import"./Menu-CGZROkSs.js";import"./Button-Cw7qEaQa.js";import"./LoadingOutlined-CFTLq47r.js";function q(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!L(s)}const G=(s,e)=>{if(e===void 0)return e;let a=(e||"").replace(/^\//,"");return Object.keys(s).forEach(o=>{a=a.replace(`:${o}`,s[o])}),a},Q=(s,e)=>{const{title:a}=s;if(a==null)return null;if(typeof a=="string"){const o=Object.keys(e).join("|");return a.replace(new RegExp(`:(${o})`,"g"),(t,i)=>e[i]||t)}return a},X=s=>{const e={};return Object.keys(s).forEach(a=>{(a.startsWith("data-")||a.startsWith("aria-"))&&(e[a]=s[a])}),e},p=f({name:"Breadcrumb",props:{items:Array,separator:{type:[String,Object],default:"/"},params:{type:Object,default:()=>({})},itemRender:Function},setup(s){const e=H("breadcrumb"),a=(o,t,i)=>{if(t==null)return null;const{className:y,onClick:m,menu:c,...h}=o,B={...X(h),onClick:m};if(c&&c.items&&c.items.length>0){const k=i!==void 0?r("a",S(B,{class:x(`${e}-link`,y),href:i}),[r("span",{class:`${e}-overlay-link`},[t,r(I,{component:P,style:"margin-left: 4px; font-size: 10px;"},null)])]):r("span",S(B,{class:x(`${e}-link`,y)}),[r("span",{class:`${e}-overlay-link`},[t,r(I,{component:P,style:"margin-left: 4px; font-size: 10px;"},null)])]);return r(E,{menu:c,trigger:["hover"]},q(k)?k:{default:()=>[k]})}return i!==void 0?r("a",S(B,{class:x(`${e}-link`,y),href:i}),[t]):r("span",S(B,{class:x(`${e}-link`,y)}),[t])};return()=>{const o=s.items??[],t=[],i=o.filter(m=>!("type"in m&&m.type==="separator")),y=o.map((m,c)=>{if("type"in m&&m.type==="separator"){const _=m;return r("li",{key:_.key??`separator-${c}`,class:`${e}-separator`,"aria-hidden":"true"},[_.separator===""?_.separator:_.separator||s.separator])}const h=m,{path:B,key:k,className:D,style:R}=h,v=G(s.params,B);v!==void 0&&t.push(v);const T=k??c,w=c===o.length-1,C=o[c+1],A=C&&"type"in C&&C.type==="separator";let{href:N}=h;t.length&&v!==void 0&&(N=`#/${t.join("/")}`);let O;if(s.itemRender)O=s.itemRender(h,s.params,i,[...t]);else{const _=Q(h,s.params);O=a(h,_,N)}return r(j,null,[r("li",{key:T,class:x(`${e}-item`,D),style:R,"aria-current":w?"page":void 0},[O]),!w&&!A&&r("li",{class:`${e}-separator`,"aria-hidden":"true"},[s.separator])])});return r("nav",{class:e,"aria-label":"breadcrumb"},[r("ol",null,[y])])}}}),Y=f({__name:"BreadcrumbBasic",setup(s){const e=[{title:"首页"},{title:"应用列表"},{title:"某应用"}];return(a,o)=>(b(),g(d(p),{items:e}))}}),Z=`<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const items = [{ title: '首页' }, { title: '应用列表' }, { title: '某应用' }]
<\/script>
`,tt={style:{"margin-top":"8px",color:"#666"}},et=f({__name:"BreadcrumbClick",setup(s){const e=F("无"),a=[{title:"首页",onClick:()=>{e.value="首页"}},{title:"应用列表",onClick:()=>{e.value="应用列表"}},{title:"某应用"}];return(o,t)=>(b(),V(j,null,[r(d(p),{items:a}),n("p",tt,"点击了："+U(e.value),1)],64))}}),rt=`<template>
  <Breadcrumb :items="items" />
  <p style="margin-top: 8px; color: #666">点击了：{{ clicked }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Breadcrumb } from 'ant-design-hmfw'

const clicked = ref('无')

const items = [
  {
    title: '首页',
    onClick: () => {
      clicked.value = '首页'
    },
  },
  {
    title: '应用列表',
    onClick: () => {
      clicked.value = '应用列表'
    },
  },
  { title: '某应用' },
]
<\/script>
`,nt=f({__name:"BreadcrumbIcon",setup(s){const e=[{title:$(I,{component:J}),href:"/"},{title:$("span",{},[$(I,{component:W}),$("span",{style:{marginLeft:"4px"}},"用户列表")]),href:"/users"},{title:"用户详情"}];return(a,o)=>(b(),g(d(p),{items:e}))}}),st=`<template>
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
`,at=f({__name:"BreadcrumbLink",setup(s){const e=[{title:"首页",href:"/"},{title:"应用列表",href:"/apps"},{title:"某应用"}];return(a,o)=>(b(),g(d(p),{items:e}))}}),ot=`<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const items = [{ title: '首页', href: '/' }, { title: '应用列表', href: '/apps' }, { title: '某应用' }]
<\/script>
`,dt=f({__name:"BreadcrumbParams",setup(s){const e={id:"123"},a=[{title:"用户管理",href:"/users"},{title:"用户 :id"}];return(o,t)=>(b(),g(d(p),{items:a,params:e}))}}),it=`<template>
  <Breadcrumb :items="items" :params="params" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const params = { id: '123' }

const items = [{ title: '用户管理', href: '/users' }, { title: '用户 :id' }]
<\/script>
`,lt=f({__name:"BreadcrumbPath",setup(s){const e=[{path:"home",title:"首页"},{path:"user",title:"用户"},{path:"profile",title:"个人资料"}];return(a,o)=>(b(),g(d(p),{items:e}))}}),pt=`<template>
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
`,mt=f({__name:"BreadcrumbSeparator",setup(s){const e=[{title:"首页",href:"/"},{title:"一级菜单",href:"/level1"},{title:"二级菜单"}];return(a,o)=>(b(),g(d(M),{direction:"vertical"},{default:u(()=>[r(d(p),{items:e,separator:">"}),r(d(p),{items:e,separator:"/"}),r(d(p),{items:e,separator:"|"})]),_:1}))}}),ct=`<template>
  <Space direction="vertical">
    <Breadcrumb :items="items" separator=">" />
    <Breadcrumb :items="items" separator="/" />
    <Breadcrumb :items="items" separator="|" />
  </Space>
</template>

<script setup lang="ts">
import { Breadcrumb, Space } from 'ant-design-hmfw'

const items = [{ title: '首页', href: '/' }, { title: '一级菜单', href: '/level1' }, { title: '二级菜单' }]
<\/script>
`,ut=f({__name:"BreadcrumbSeparatorType",setup(s){const e=[{title:"位置"},{type:"separator",separator:":"},{title:"应用中心",href:"/app"},{type:"separator"},{title:"应用列表",href:"/app/list"},{type:"separator"},{title:"某应用"}];return(a,o)=>(b(),g(d(p),{items:e,separator:""}))}}),ft=`<template>
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
`,bt={class:"markdown-body"},Ct={__name:"breadcrumb",setup(s,{expose:e}){return e({frontmatter:{}}),(o,t)=>{const i=K("DemoBlock");return b(),V("div",bt,[t[0]||(t[0]=n("h1",{id:"breadcrumb-",tabindex:"-1"},"Breadcrumb 面包屑",-1)),t[1]||(t[1]=n("p",null,"显示当前页面在系统层级结构中的位置，并能向上返回。",-1)),t[2]||(t[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"当系统拥有超过两级以上的层级结构时"),n("li",null,"当需要告知用户当前位置时"),n("li",null,"当需要向上导航的功能时")],-1)),t[4]||(t[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=n("p",null,"最简单的用法。",-1)),r(i,{title:"基础用法",source:d(Z)},{default:u(()=>[r(Y)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"-3",tabindex:"-1"},"带链接",-1)),t[8]||(t[8]=n("p",null,[l("通过 "),n("code",null,"href"),l(" 属性设置链接。")],-1)),r(i,{title:"带链接",source:d(ot)},{default:u(()=>[r(at)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"-4",tabindex:"-1"},"自定义分隔符",-1)),t[10]||(t[10]=n("p",null,[l("通过 "),n("code",null,"separator"),l(" 属性自定义分隔符。")],-1)),r(i,{title:"自定义分隔符",source:d(ct)},{default:u(()=>[r(mt)]),_:1},8,["source"]),t[11]||(t[11]=n("h3",{id:"-5",tabindex:"-1"},"带图标",-1)),t[12]||(t[12]=n("p",null,[l("可以在 "),n("code",null,"title"),l(" 中使用图标。")],-1)),r(i,{title:"带图标",source:d(st)},{default:u(()=>[r(nt)]),_:1},8,["source"]),t[13]||(t[13]=n("h3",{id:"-6",tabindex:"-1"},"带点击事件",-1)),t[14]||(t[14]=n("p",null,[l("通过 "),n("code",null,"onClick"),l(" 处理面包屑点击。")],-1)),r(i,{title:"带点击事件",source:d(rt)},{default:u(()=>[r(et)]),_:1},8,["source"]),t[15]||(t[15]=n("h3",{id:"-7",tabindex:"-1"},"参数替换",-1)),t[16]||(t[16]=n("p",null,[l("通过 "),n("code",null,"params"),l(" 属性替换路径中的参数。")],-1)),r(i,{title:"参数替换",source:d(it)},{default:u(()=>[r(dt)]),_:1},8,["source"]),t[17]||(t[17]=n("h3",{id:"-8",tabindex:"-1"},"分隔符类型",-1)),t[18]||(t[18]=n("p",null,[l("可以在 "),n("code",null,"items"),l(" 中使用 "),n("code",null,"type: 'separator'"),l(" 来自定义每个分隔符。")],-1)),r(i,{title:"分隔符类型",source:d(ft)},{default:u(()=>[r(ut)]),_:1},8,["source"]),t[19]||(t[19]=n("h3",{id:"-9",tabindex:"-1"},"路径拼接",-1)),t[20]||(t[20]=n("p",null,[l("使用 "),n("code",null,"path"),l(" 属性自动拼接路径。")],-1)),r(i,{title:"路径拼接",source:d(pt)},{default:u(()=>[r(lt)]),_:1},8,["source"]),t[21]||(t[21]=z('<h2 id="api" tabindex="-1">API</h2><h3 id="breadcrumb-props" tabindex="-1">Breadcrumb Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>路由栈信息</td><td><code>ItemType[]</code></td><td><code>[]</code></td></tr><tr><td>separator</td><td>分隔符</td><td><code>string | VNode</code></td><td><code>&#39;/&#39;</code></td></tr><tr><td>params</td><td>路径参数</td><td><code>Record&lt;string, any&gt;</code></td><td><code>{}</code></td></tr></tbody></table><h3 id="itemtype" tabindex="-1">ItemType</h3><p>面包屑项或分隔符。</p><p><strong>BreadcrumbItemType:</strong></p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string | number</code></td><td>-</td></tr><tr><td>title</td><td>名称</td><td><code>string | number | VNode</code></td><td>-</td></tr><tr><td>href</td><td>链接地址</td><td><code>string</code></td><td>-</td></tr><tr><td>path</td><td>路径（会自动拼接前面的路径）</td><td><code>string</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>onClick</td><td>点击事件</td><td><code>(e: MouseEvent) =&gt; void</code></td><td>-</td></tr><tr><td>data-*</td><td>自定义数据属性</td><td><code>any</code></td><td>-</td></tr><tr><td>aria-*</td><td>ARIA 无障碍属性</td><td><code>any</code></td><td>-</td></tr></tbody></table><p><strong>BreadcrumbSeparatorType:</strong></p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型（必须为 ‘separator’）</td><td><code>&#39;separator&#39;</code></td><td>-</td></tr><tr><td>separator</td><td>分隔符内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>key</td><td>唯一标识</td><td><code>string | number</code></td><td>-</td></tr></tbody></table>',9))])}}};export{Ct as default};
