import{k as m,I as g,j as l,F as $,w as p,e as f,G as b,B as k,g as B,d as a,M as y,h as _}from"./index-BNHhPN23.js";import{c as v}from"./cls-S9IiI6wd.js";const D=m({name:"Descriptions",props:{title:String,extra:String,bordered:Boolean,column:{type:Number,default:3},size:{type:String,default:"default"},layout:{type:String,default:"horizontal"},colon:{type:Boolean,default:!0},items:Array,labelStyle:Object,contentStyle:Object},setup(e,{slots:d}){const n=g("descriptions");return()=>{var x,S;const u=e.items??[],t=[];let i=[],h=0;for(const o of u){const s=o.span??1;h+s>e.column&&i.length>0&&(t.push(i),i=[],h=0),i.push(o),h+=s,h>=e.column&&(t.push(i),i=[],h=0)}return i.length>0&&t.push(i),l("div",{class:v(n,`${n}-${e.size}`,{[`${n}-bordered`]:e.bordered,[`${n}-${e.layout}`]:e.layout!=="horizontal"})},[(e.title||e.extra||d.title||d.extra)&&l("div",{class:`${n}-header`},[l("div",{class:`${n}-title`},[((x=d.title)==null?void 0:x.call(d))??e.title]),(e.extra||d.extra)&&l("div",{class:`${n}-extra`},[((S=d.extra)==null?void 0:S.call(d))??e.extra])]),l("div",{class:`${n}-view`},[l("table",null,[l("tbody",null,[t.map((o,s)=>e.layout==="vertical"?l($,null,[l("tr",{key:`label-${s}`,class:`${n}-row`},[o.map((r,c)=>l("th",{key:c,class:`${n}-item-label`,colspan:r.span??1,style:{...e.labelStyle,...r.labelStyle}},[r.label,e.colon&&e.bordered?":":""]))]),l("tr",{key:`content-${s}`,class:`${n}-row`},[o.map((r,c)=>l("td",{key:c,class:`${n}-item-content`,colspan:r.span??1,style:{...e.contentStyle,...r.contentStyle}},[r.children]))])]):l("tr",{key:s,class:`${n}-row`},[o.map((r,c)=>l($,null,[l("th",{key:`label-${c}`,class:`${n}-item-label`,style:{...e.labelStyle,...r.labelStyle}},[r.label,e.colon&&e.bordered?":":""]),l("td",{key:`content-${c}`,class:`${n}-item-content`,colspan:r.span?r.span*2-1:1,style:{...e.contentStyle,...r.contentStyle}},[r.children])]))]))])])])])}}}),C=m({__name:"DescriptionsBasic",setup(e){const d=[{label:"用户名",children:"Zhou Maomao"},{label:"手机号",children:"1810000000"},{label:"居住地",children:"杭州市"},{label:"备注",children:"学校"},{label:"联系地址",children:"浙江省杭州市西湖区古翠路"}];return(n,u)=>(p(),f(b(D),{title:"用户信息",items:d}))}}),M=`<template>
  <Descriptions title="用户信息" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '用户名', children: 'Zhou Maomao' },
  { label: '手机号', children: '1810000000' },
  { label: '居住地', children: '杭州市' },
  { label: '备注', children: '学校' },
  { label: '联系地址', children: '浙江省杭州市西湖区古翠路' },
]
<\/script>
`,w=m({__name:"DescriptionsBordered",setup(e){const d=[{label:"产品",children:"Cloud Database"},{label:"计费模式",children:"按量付费"},{label:"自动续费",children:"否"},{label:"订单时间",children:"2018-04-24 18:00:00"},{label:"使用时间",children:"2019-04-24 18:00:00",span:2},{label:"状态",children:"运行中"},{label:"协商速度",children:"100Mbps"},{label:"配置信息",children:"Data disk type: MongoDB"}];return(n,u)=>(p(),f(b(D),{title:"用户信息",bordered:"",items:d}))}}),z=`<template>
  <Descriptions title="用户信息" bordered :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '产品', children: 'Cloud Database' },
  { label: '计费模式', children: '按量付费' },
  { label: '自动续费', children: '否' },
  { label: '订单时间', children: '2018-04-24 18:00:00' },
  { label: '使用时间', children: '2019-04-24 18:00:00', span: 2 },
  { label: '状态', children: '运行中' },
  { label: '协商速度', children: '100Mbps' },
  { label: '配置信息', children: 'Data disk type: MongoDB' },
]
<\/script>
`,P=m({__name:"DescriptionsVertical",setup(e){const d=[{label:"用户名",children:"Zhou Maomao"},{label:"手机号",children:"1810000000"},{label:"居住地",children:"杭州市"},{label:"联系地址",children:"浙江省杭州市西湖区古翠路"}];return(n,u)=>(p(),f(b(D),{title:"用户信息",layout:"vertical",items:d}))}}),V=`<template>
  <Descriptions title="用户信息" layout="vertical" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '用户名', children: 'Zhou Maomao' },
  { label: '手机号', children: '1810000000' },
  { label: '居住地', children: '杭州市' },
  { label: '联系地址', children: '浙江省杭州市西湖区古翠路' },
]
<\/script>
`,N={class:"markdown-body"},I={__name:"descriptions",setup(e,{expose:d}){return d({frontmatter:{}}),(u,t)=>{const i=k("DemoBlock");return p(),B("div",N,[t[0]||(t[0]=a("h1",{id:"descriptions-",tabindex:"-1"},"Descriptions 描述列表",-1)),t[1]||(t[1]=a("p",null,"成组展示多个只读字段。",-1)),t[2]||(t[2]=a("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=a("ul",null,[a("li",null,"常见于详情页的信息展示")],-1)),t[4]||(t[4]=a("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=a("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=a("p",null,"简单的展示。",-1)),l(i,{title:"基础用法",source:b(M)},{default:y(()=>[l(C)]),_:1},8,["source"]),t[7]||(t[7]=a("h3",{id:"-3",tabindex:"-1"},"带边框",-1)),t[8]||(t[8]=a("p",null,"带边框和背景颜色列表。",-1)),l(i,{title:"带边框",source:b(z)},{default:y(()=>[l(w)]),_:1},8,["source"]),t[9]||(t[9]=a("h3",{id:"-4",tabindex:"-1"},"垂直布局",-1)),t[10]||(t[10]=a("p",null,"垂直的列表。",-1)),l(i,{title:"垂直布局",source:b(V)},{default:y(()=>[l(P)]),_:1},8,["source"]),t[11]||(t[11]=_('<h2 id="api" tabindex="-1">API</h2><h3 id="descriptions-props" tabindex="-1">Descriptions Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>描述列表的标题</td><td><code>string</code></td><td>-</td></tr><tr><td>extra</td><td>描述列表的操作区域</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>bordered</td><td>是否展示边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>column</td><td>一行的 DescriptionItems 数量</td><td><code>number</code></td><td><code>3</code></td></tr><tr><td>size</td><td>设置列表的大小</td><td><code>&#39;default&#39; | &#39;middle&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>layout</td><td>描述布局</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>items</td><td>描述列表的数据项</td><td><code>DescriptionsItem[]</code></td><td>-</td></tr></tbody></table><h3 id="descriptionsitem" tabindex="-1">DescriptionsItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>内容的描述</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>内容</td><td><code>string</code></td><td>-</td></tr><tr><td>span</td><td>包含列的数量</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>labelStyle</td><td>自定义标签样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>contentStyle</td><td>自定义内容样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table>',5))])}}};export{I as default};
