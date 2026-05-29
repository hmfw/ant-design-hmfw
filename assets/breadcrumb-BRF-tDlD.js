import{k as u,I as B,j as r,w as p,e as f,G as s,g as h,F as k,d as e,E as x,z as _,M as m,B as g,i as l,h as C}from"./index-DvxRruME.js";import{S as v}from"./Space-DHvzouOq.js";import"./cls-S9IiI6wd.js";const c=u({name:"Breadcrumb",props:{items:Array,separator:{type:String,default:"/"}},setup(d,{slots:n}){const a=B("breadcrumb");return()=>{var t;const o=d.items??[];return r("nav",{class:a,"aria-label":"breadcrumb"},[r("ol",{class:`${a}-list`},[o.map((i,b)=>r("li",{key:b,class:`${a}-item`},[b>0&&r("span",{class:`${a}-separator`,"aria-hidden":"true"},[d.separator]),i.href?r("a",{class:`${a}-link`,href:i.href,onClick:i.onClick},[i.title]):r("span",{class:`${a}-link`,"aria-current":b===o.length-1?"page":void 0,onClick:i.onClick,style:i.onClick?{cursor:"pointer"}:{}},[i.title])])),(t=n.default)==null?void 0:t.call(n)])])}}}),S=u({__name:"BreadcrumbBasic",setup(d){const n=[{title:"首页"},{title:"应用列表"},{title:"某应用"}];return(a,o)=>(p(),f(s(c),{items:n}))}}),y=`<template>
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
`,$={style:{"margin-top":"8px",color:"#666"}},w=u({__name:"BreadcrumbClick",setup(d){const n=_("无"),a=[{title:"首页",onClick:()=>{n.value="首页"}},{title:"应用列表",onClick:()=>{n.value="应用列表"}},{title:"某应用"}];return(o,t)=>(p(),h(k,null,[r(s(c),{items:a}),e("p",$,"点击了："+x(n.value),1)],64))}}),I=`<template>
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
`,N=u({__name:"BreadcrumbLink",setup(d){const n=[{title:"首页",href:"/"},{title:"应用列表",href:"/apps"},{title:"某应用"}];return(a,o)=>(p(),f(s(c),{items:n}))}}),V=`<template>
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
`,D=u({__name:"BreadcrumbSeparator",setup(d){const n=[{title:"首页",href:"/"},{title:"一级菜单",href:"/level1"},{title:"二级菜单"}];return(a,o)=>(p(),f(s(v),{direction:"vertical"},{default:m(()=>[r(s(c),{items:n,separator:">"}),r(s(c),{items:n,separator:"/"}),r(s(c),{items:n,separator:"|"})]),_:1}))}}),E=`<template>
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
`,P={class:"markdown-body"},M={__name:"breadcrumb",setup(d,{expose:n}){return n({frontmatter:{}}),(o,t)=>{const i=g("DemoBlock");return p(),h("div",P,[t[0]||(t[0]=e("h1",{id:"breadcrumb-",tabindex:"-1"},"Breadcrumb 面包屑",-1)),t[1]||(t[1]=e("p",null,"显示当前页面在系统层级结构中的位置，并能向上返回。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"当系统拥有超过两级以上的层级结构时"),e("li",null,"当需要告知用户当前位置时"),e("li",null,"当需要向上导航的功能时")],-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"最简单的用法。",-1)),r(i,{title:"基础用法",source:s(y)},{default:m(()=>[r(S)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"带链接",-1)),t[8]||(t[8]=e("p",null,[l("通过 "),e("code",null,"href"),l(" 属性设置链接。")],-1)),r(i,{title:"带链接",source:s(V)},{default:m(()=>[r(N)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-4",tabindex:"-1"},"自定义分隔符",-1)),t[10]||(t[10]=e("p",null,[l("通过 "),e("code",null,"separator"),l(" 属性自定义分隔符。")],-1)),r(i,{title:"自定义分隔符",source:s(E)},{default:m(()=>[r(D)]),_:1},8,["source"]),t[11]||(t[11]=e("h3",{id:"-5",tabindex:"-1"},"带点击事件",-1)),t[12]||(t[12]=e("p",null,[l("通过 "),e("code",null,"onClick"),l(" 处理面包屑点击。")],-1)),r(i,{title:"带点击事件",source:s(I)},{default:m(()=>[r(w)]),_:1},8,["source"]),t[13]||(t[13]=C('<h2 id="api" tabindex="-1">API</h2><h3 id="breadcrumb-props" tabindex="-1">Breadcrumb Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>路由栈信息</td><td><code>BreadcrumbItem[]</code></td><td><code>[]</code></td></tr><tr><td>separator</td><td>分隔符</td><td><code>string</code></td><td><code>&#39;/&#39;</code></td></tr></tbody></table><h3 id="breadcrumbitem" tabindex="-1">BreadcrumbItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>名称</td><td><code>string</code></td><td>-</td></tr><tr><td>href</td><td>链接地址</td><td><code>string</code></td><td>-</td></tr><tr><td>onClick</td><td>点击事件</td><td><code>(e: MouseEvent) =&gt; void</code></td><td>-</td></tr></tbody></table>',5))])}}};export{M as default};
