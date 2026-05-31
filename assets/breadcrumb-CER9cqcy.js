import{m,L as A,l as n,F as P,q as v,y as u,g as b,I as o,i as w,f as r,H,B as D,n as _,P as c,E as R,k as l,j as U}from"./index-CsoOETlJ.js";import{c as S}from"./cls-S9IiI6wd.js";import{i as F,H as K}from"./icons-BOELVDCf.js";import{I as C}from"./Icon-Bu-seQlV.js";import{S as W}from"./Space-Rctnr-lV.js";const q=(a,e)=>{if(e===void 0)return e;let s=(e||"").replace(/^\//,"");return Object.keys(a).forEach(d=>{s=s.replace(`:${d}`,a[d])}),s},M=(a,e)=>{const{title:s}=a;if(s==null)return null;if(typeof s=="string"){const d=Object.keys(e).join("|");return s.replace(new RegExp(`:(${d})`,"g"),(t,i)=>e[i]||t)}return s},z=a=>{const e={};return Object.keys(a).forEach(s=>{(s.startsWith("data-")||s.startsWith("aria-"))&&(e[s]=a[s])}),e},p=m({name:"Breadcrumb",props:{items:Array,separator:{type:[String,Object],default:"/"},params:{type:Object,default:()=>({})}},setup(a){const e=A("breadcrumb"),s=(d,t,i)=>{if(t==null)return null;const{className:f,onClick:h,...g}=d,B={...z(g),onClick:h};return i!==void 0?n("a",v(B,{class:S(`${e}-link`,f),href:i}),[t]):n("span",v(B,{class:S(`${e}-link`,f)}),[t])};return()=>{const d=a.items??[],t=[],i=d.map((f,h)=>{if("type"in f&&f.type==="separator"){const y=f;return n("li",{key:y.key??`separator-${h}`,class:`${e}-separator`,"aria-hidden":"true"},[y.separator===""?y.separator:y.separator||a.separator])}const g=f,{path:B,key:N,className:O,style:j,onClick:mt}=g,k=q(a.params,B);k!==void 0&&t.push(k);const T=N??h,I=h===d.length-1,x=d[h+1],V=x&&"type"in x&&x.type==="separator";let{href:$}=g;t.length&&k!==void 0&&($=`#/${t.join("/")}`);const E=M(g,a.params),L=s(g,E,$);return n(P,null,[n("li",{key:T,class:S(`${e}-item`,O),style:j,"aria-current":I?"page":void 0},[L]),!I&&!V&&n("li",{class:`${e}-separator`,"aria-hidden":"true"},[a.separator])])});return n("nav",{class:e,"aria-label":"breadcrumb"},[n("ol",null,[i])])}}}),G=m({__name:"BreadcrumbBasic",setup(a){const e=[{title:"首页"},{title:"应用列表"},{title:"某应用"}];return(s,d)=>(u(),b(o(p),{items:e}))}}),J=`<template>
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
`,Q={style:{"margin-top":"8px",color:"#666"}},X=m({__name:"BreadcrumbClick",setup(a){const e=D("无"),s=[{title:"首页",onClick:()=>{e.value="首页"}},{title:"应用列表",onClick:()=>{e.value="应用列表"}},{title:"某应用"}];return(d,t)=>(u(),w(P,null,[n(o(p),{items:s}),r("p",Q,"点击了："+H(e.value),1)],64))}}),Y=`<template>
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
`,Z=m({__name:"BreadcrumbIcon",setup(a){const e=[{title:_(C,{component:K}),href:"/"},{title:_("span",{},[_(C,{component:F}),_("span",{style:{marginLeft:"4px"}},"用户列表")]),href:"/users"},{title:"用户详情"}];return(s,d)=>(u(),b(o(p),{items:e}))}}),tt=`<template>
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
`,et=m({__name:"BreadcrumbLink",setup(a){const e=[{title:"首页",href:"/"},{title:"应用列表",href:"/apps"},{title:"某应用"}];return(s,d)=>(u(),b(o(p),{items:e}))}}),rt=`<template>
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
`,nt=m({__name:"BreadcrumbParams",setup(a){const e={id:"123"},s=[{title:"用户管理",href:"/users"},{title:"用户 :id"}];return(d,t)=>(u(),b(o(p),{items:s,params:e}))}}),st=`<template>
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
`,at=m({__name:"BreadcrumbPath",setup(a){const e=[{path:"home",title:"首页"},{path:"user",title:"用户"},{path:"profile",title:"个人资料"}];return(s,d)=>(u(),b(o(p),{items:e}))}}),dt=`<template>
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
`,ot=m({__name:"BreadcrumbSeparator",setup(a){const e=[{title:"首页",href:"/"},{title:"一级菜单",href:"/level1"},{title:"二级菜单"}];return(s,d)=>(u(),b(o(W),{direction:"vertical"},{default:c(()=>[n(o(p),{items:e,separator:">"}),n(o(p),{items:e,separator:"/"}),n(o(p),{items:e,separator:"|"})]),_:1}))}}),it=`<template>
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
`,lt=m({__name:"BreadcrumbSeparatorType",setup(a){const e=[{title:"位置"},{type:"separator",separator:":"},{title:"应用中心",href:"/app"},{type:"separator"},{title:"应用列表",href:"/app/list"},{type:"separator"},{title:"某应用"}];return(s,d)=>(u(),b(o(p),{items:e,separator:""}))}}),pt=`<template>
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
`,ct={class:"markdown-body"},Bt={__name:"breadcrumb",setup(a,{expose:e}){return e({frontmatter:{}}),(d,t)=>{const i=R("DemoBlock");return u(),w("div",ct,[t[0]||(t[0]=r("h1",{id:"breadcrumb-",tabindex:"-1"},"Breadcrumb 面包屑",-1)),t[1]||(t[1]=r("p",null,"显示当前页面在系统层级结构中的位置，并能向上返回。",-1)),t[2]||(t[2]=r("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=r("ul",null,[r("li",null,"当系统拥有超过两级以上的层级结构时"),r("li",null,"当需要告知用户当前位置时"),r("li",null,"当需要向上导航的功能时")],-1)),t[4]||(t[4]=r("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=r("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=r("p",null,"最简单的用法。",-1)),n(i,{title:"基础用法",source:o(J)},{default:c(()=>[n(G)]),_:1},8,["source"]),t[7]||(t[7]=r("h3",{id:"-3",tabindex:"-1"},"带链接",-1)),t[8]||(t[8]=r("p",null,[l("通过 "),r("code",null,"href"),l(" 属性设置链接。")],-1)),n(i,{title:"带链接",source:o(rt)},{default:c(()=>[n(et)]),_:1},8,["source"]),t[9]||(t[9]=r("h3",{id:"-4",tabindex:"-1"},"自定义分隔符",-1)),t[10]||(t[10]=r("p",null,[l("通过 "),r("code",null,"separator"),l(" 属性自定义分隔符。")],-1)),n(i,{title:"自定义分隔符",source:o(it)},{default:c(()=>[n(ot)]),_:1},8,["source"]),t[11]||(t[11]=r("h3",{id:"-5",tabindex:"-1"},"带图标",-1)),t[12]||(t[12]=r("p",null,[l("可以在 "),r("code",null,"title"),l(" 中使用图标。")],-1)),n(i,{title:"带图标",source:o(tt)},{default:c(()=>[n(Z)]),_:1},8,["source"]),t[13]||(t[13]=r("h3",{id:"-6",tabindex:"-1"},"带点击事件",-1)),t[14]||(t[14]=r("p",null,[l("通过 "),r("code",null,"onClick"),l(" 处理面包屑点击。")],-1)),n(i,{title:"带点击事件",source:o(Y)},{default:c(()=>[n(X)]),_:1},8,["source"]),t[15]||(t[15]=r("h3",{id:"-7",tabindex:"-1"},"参数替换",-1)),t[16]||(t[16]=r("p",null,[l("通过 "),r("code",null,"params"),l(" 属性替换路径中的参数。")],-1)),n(i,{title:"参数替换",source:o(st)},{default:c(()=>[n(nt)]),_:1},8,["source"]),t[17]||(t[17]=r("h3",{id:"-8",tabindex:"-1"},"分隔符类型",-1)),t[18]||(t[18]=r("p",null,[l("可以在 "),r("code",null,"items"),l(" 中使用 "),r("code",null,"type: 'separator'"),l(" 来自定义每个分隔符。")],-1)),n(i,{title:"分隔符类型",source:o(pt)},{default:c(()=>[n(lt)]),_:1},8,["source"]),t[19]||(t[19]=r("h3",{id:"-9",tabindex:"-1"},"路径拼接",-1)),t[20]||(t[20]=r("p",null,[l("使用 "),r("code",null,"path"),l(" 属性自动拼接路径。")],-1)),n(i,{title:"路径拼接",source:o(dt)},{default:c(()=>[n(at)]),_:1},8,["source"]),t[21]||(t[21]=U('<h2 id="api" tabindex="-1">API</h2><h3 id="breadcrumb-props" tabindex="-1">Breadcrumb Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>路由栈信息</td><td><code>ItemType[]</code></td><td><code>[]</code></td></tr><tr><td>separator</td><td>分隔符</td><td><code>string | VNode</code></td><td><code>&#39;/&#39;</code></td></tr><tr><td>params</td><td>路径参数</td><td><code>Record&lt;string, any&gt;</code></td><td><code>{}</code></td></tr></tbody></table><h3 id="itemtype" tabindex="-1">ItemType</h3><p>面包屑项或分隔符。</p><p><strong>BreadcrumbItemType:</strong></p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string | number</code></td><td>-</td></tr><tr><td>title</td><td>名称</td><td><code>string | number | VNode</code></td><td>-</td></tr><tr><td>href</td><td>链接地址</td><td><code>string</code></td><td>-</td></tr><tr><td>path</td><td>路径（会自动拼接前面的路径）</td><td><code>string</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>onClick</td><td>点击事件</td><td><code>(e: MouseEvent) =&gt; void</code></td><td>-</td></tr><tr><td>data-*</td><td>自定义数据属性</td><td><code>any</code></td><td>-</td></tr><tr><td>aria-*</td><td>ARIA 无障碍属性</td><td><code>any</code></td><td>-</td></tr></tbody></table><p><strong>BreadcrumbSeparatorType:</strong></p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型（必须为 ‘separator’）</td><td><code>&#39;separator&#39;</code></td><td>-</td></tr><tr><td>separator</td><td>分隔符内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>key</td><td>唯一标识</td><td><code>string | number</code></td><td>-</td></tr></tbody></table>',9))])}}};export{Bt as default};
