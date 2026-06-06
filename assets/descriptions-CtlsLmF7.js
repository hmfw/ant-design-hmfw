import{m as g,L as P,J as V,l as n,F as w,d as $,y as D,g as _,I as h,i as j,f as a,E as M,P as k,k as B,j as F}from"./index-BQisgCTe.js";import{c as v}from"./cls-S9IiI6wd.js";const L={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function z(){if(typeof window>"u")return{};const l=window.innerWidth;return{xs:l>=0,sm:l>=576,md:l>=768,lg:l>=992,xl:l>=1200,xxl:l>=1600}}function C(l,t){if(!t)return;const s=["xxl","xl","lg","md","sm","xs"];for(const c of s)if(l[c]&&t[c]!==void 0)return t[c]}const R=g({name:"Descriptions",props:{title:[String,Object],extra:[String,Object],bordered:Boolean,column:{type:[Number,Object],default:3},size:{type:String,default:"default"},layout:{type:String,default:"horizontal"},colon:{type:Boolean,default:!0},items:Array,labelStyle:Object,contentStyle:Object},setup(l,{slots:t}){const s=P("descriptions"),c=V(),e=$(()=>{const p=z();return typeof l.column=="number"?l.column:C(p,l.column)??C(p,L)??3}),x=$(()=>{var f;return l.items?l.items.map((i,r)=>({...i,key:r})):(((f=t.default)==null?void 0:f.call(t))||[]).filter(i=>i.type&&typeof i.type=="object").map((i,r)=>({...i.props||{},children:i.children,key:i.key??r}))}),I=$(()=>{const p=z();return x.value.map(f=>{const{span:i,...r}=f;if(i==="filled")return{...r,filled:!0,computedSpan:1};const u=typeof i=="number"?i:C(p,i)??1;return{...r,computedSpan:u}})}),N=$(()=>{const p=e.value,f=I.value,i=[];let r=[],u=0;for(const b of f){if(b.filled){const d=p-u;r.push({...b,computedSpan:d}),i.push(r),r=[],u=0;continue}const o=b.computedSpan??1,m=p-u;u+o>p&&r.length>0&&(i.push(r),r=[],u=0),u+o>p?(r.push({...b,computedSpan:m}),u=p):(r.push(b),u+=o),u>=p&&(i.push(r),r=[],u=0)}return r.length>0&&i.push(r),i.map(b=>{const o=b.reduce((m,d)=>m+(d.computedSpan??1),0);if(o<p&&b.length>0){const m=b[b.length-1],d=m.computedSpan??1;m.computedSpan=p-(o-d)}return b})}),O=$(()=>l.size==="medium"?"middle":l.size);return()=>{var u,b;const p=c.value.direction,f=O.value,i=o=>{const m={...l.labelStyle,...o.labelStyle};return n("span",{style:m},[o.label])},r=o=>{const m={...l.contentStyle,...o.contentStyle};return n("span",{style:m},[o.children])};return n("div",{class:v(s,{[`${s}-${f}`]:f!=="default",[`${s}-bordered`]:l.bordered,[`${s}-rtl`]:p==="rtl"})},[(l.title||l.extra||t.title||t.extra)&&n("div",{class:`${s}-header`},[(l.title||t.title)&&n("div",{class:`${s}-title`},[((u=t.title)==null?void 0:u.call(t))??l.title]),(l.extra||t.extra)&&n("div",{class:`${s}-extra`},[((b=t.extra)==null?void 0:b.call(t))??l.extra])]),n("div",{class:`${s}-view`},[n("table",null,[n("tbody",null,[N.value.map((o,m)=>l.layout==="vertical"?n(w,null,[n("tr",{key:`label-${m}`,class:`${s}-row`},[o.map((d,y)=>n("th",{key:`label-${d.key??y}`,class:`${s}-item-label`,colspan:d.computedSpan??1},[i(d)]))]),n("tr",{key:`content-${m}`,class:`${s}-row`},[o.map((d,y)=>n("td",{key:`content-${d.key??y}`,class:`${s}-item-content`,colspan:d.computedSpan??1},[r(d)]))])]):l.bordered?n("tr",{key:m,class:`${s}-row`},[o.map((d,y)=>[n("th",{key:`label-${d.key??y}`,class:`${s}-item-label`},[i(d)]),n("td",{key:`content-${d.key??y}`,class:`${s}-item-content`,colspan:(d.computedSpan??1)*2-1},[r(d)])])]):n("tr",{key:m,class:`${s}-row`},[o.map((d,y)=>n("td",{key:`item-${d.key??y}`,class:`${s}-item`,colspan:d.computedSpan??1},[n("div",{class:`${s}-item-container`},[d.label&&n("span",{class:v(`${s}-item-label`,{[`${s}-item-no-colon`]:!l.colon})},[i(d)]),n("span",{class:`${s}-item-content`},[r(d)])])]))]))])])])])}}}),A=g({name:"DescriptionsItem",props:{label:String,span:[Number,String,Object],labelStyle:Object,contentStyle:Object},setup(l,{slots:t}){return()=>{var s;return(s=t.default)==null?void 0:s.call(t)}}}),S=R;S.Item=A;const G=g({__name:"DescriptionsBasic",setup(l){const t=[{label:"用户名",children:"Zhou Maomao"},{label:"手机号",children:"1810000000"},{label:"居住地",children:"杭州市"},{label:"备注",children:"学校"},{label:"联系地址",children:"浙江省杭州市西湖区古翠路",span:2}];return(s,c)=>(D(),_(h(S),{title:"用户信息",items:t}))}}),Z=`<template>
  <Descriptions title="用户信息" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '用户名', children: 'Zhou Maomao' },
  { label: '手机号', children: '1810000000' },
  { label: '居住地', children: '杭州市' },
  { label: '备注', children: '学校' },
  { label: '联系地址', children: '浙江省杭州市西湖区古翠路', span: 2 },
]
<\/script>
`,E=g({__name:"DescriptionsBordered",setup(l){const t=[{label:"产品",children:"Cloud Database"},{label:"计费方式",children:"预付费"},{label:"自动续费",children:"已开通"},{label:"订单时间",children:"2018-04-24 18:00:00"},{label:"使用时长",children:"2年"},{label:"到期时间",children:"2020-04-24 18:00:00"},{label:"配置信息",children:"2核 4GB 80GB SSD",span:3}];return(s,c)=>(D(),_(h(S),{title:"用户信息",bordered:"",items:t}))}}),T=`<template>
  <Descriptions title="用户信息" bordered :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '产品', children: 'Cloud Database' },
  { label: '计费方式', children: '预付费' },
  { label: '自动续费', children: '已开通' },
  { label: '订单时间', children: '2018-04-24 18:00:00' },
  { label: '使用时长', children: '2年' },
  { label: '到期时间', children: '2020-04-24 18:00:00' },
  { label: '配置信息', children: '2核 4GB 80GB SSD', span: 3 },
]
<\/script>
`,U=g({__name:"DescriptionsFilled",setup(l){const t=[{label:"产品",children:"Cloud Database",span:2},{label:"计费",children:"预付费"},{label:"时间",children:"18:00:00"},{label:"金额",children:"$80.00",span:"filled"},{label:"折扣",children:"$20.00",span:"filled"},{label:"实付",children:"$60.00"}];return(s,c)=>(D(),_(h(S),{title:"Span 填充示例",column:3,items:t}))}}),J=`<template>
  <Descriptions title="Span 填充示例" :column="3" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '产品', children: 'Cloud Database', span: 2 },
  { label: '计费', children: '预付费' },
  { label: '时间', children: '18:00:00' },
  { label: '金额', children: '$80.00', span: 'filled' as const },
  { label: '折扣', children: '$20.00', span: 'filled' as const },
  { label: '实付', children: '$60.00' },
]
<\/script>
`,W=g({__name:"DescriptionsResponsive",setup(l){const t=[{label:"产品",children:"Cloud Database"},{label:"计费",children:"预付费"},{label:"时间",children:"18:00:00"},{label:"金额",children:"$80.00"},{label:"折扣",children:"$20.00"},{label:"实付",children:"$60.00"}];return(s,c)=>(D(),_(h(S),{title:"响应式列数",column:{xs:1,sm:2,md:3},items:t}))}}),q=`<template>
  <Descriptions title="响应式列数" :column="{ xs: 1, sm: 2, md: 3 }" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '产品', children: 'Cloud Database' },
  { label: '计费', children: '预付费' },
  { label: '时间', children: '18:00:00' },
  { label: '金额', children: '$80.00' },
  { label: '折扣', children: '$20.00' },
  { label: '实付', children: '$60.00' },
]
<\/script>
`,H=g({__name:"DescriptionsSizes",setup(l){const t=[{label:"产品",children:"Cloud Database"},{label:"计费",children:"预付费"},{label:"时间",children:"18:00:00"}];return(s,c)=>(D(),j(w,null,[n(h(S),{title:"尺寸示例",column:3,items:t}),c[0]||(c[0]=a("br",null,null,-1)),n(h(S),{title:"中等尺寸",size:"middle",column:3,items:t}),c[1]||(c[1]=a("br",null,null,-1)),n(h(S),{title:"小尺寸",size:"small",column:3,items:t})],64))}}),K=`<template>
  <Descriptions title="尺寸示例" :column="3" :items="items" />
  <br />
  <Descriptions title="中等尺寸" size="middle" :column="3" :items="items" />
  <br />
  <Descriptions title="小尺寸" size="small" :column="3" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '产品', children: 'Cloud Database' },
  { label: '计费', children: '预付费' },
  { label: '时间', children: '18:00:00' },
]
<\/script>
`,Q=g({__name:"DescriptionsVertical",setup(l){const t=[{label:"用户名",children:"Zhou Maomao"},{label:"手机号",children:"1810000000"},{label:"居住地",children:"杭州市"},{label:"联系地址",children:"浙江省杭州市西湖区古翠路"}];return(s,c)=>(D(),_(h(S),{title:"用户信息",layout:"vertical",items:t}))}}),X=`<template>
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
`,Y={class:"markdown-body"},ne={__name:"descriptions",setup(l,{expose:t}){return t({frontmatter:{}}),(c,e)=>{const x=M("DemoBlock");return D(),j("div",Y,[e[0]||(e[0]=a("h1",{id:"descriptions-",tabindex:"-1"},"Descriptions 描述列表",-1)),e[1]||(e[1]=a("p",null,"成组展示多个只读字段。",-1)),e[2]||(e[2]=a("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=a("ul",null,[a("li",null,"常见于详情页的信息展示")],-1)),e[4]||(e[4]=a("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=a("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=a("p",null,"简单的展示。",-1)),n(x,{title:"基础用法",source:h(Z)},{default:k(()=>[n(G)]),_:1},8,["source"]),e[7]||(e[7]=a("h3",{id:"-3",tabindex:"-1"},"带边框",-1)),e[8]||(e[8]=a("p",null,"带边框和背景颜色列表。",-1)),n(x,{title:"带边框",source:h(T)},{default:k(()=>[n(E)]),_:1},8,["source"]),e[9]||(e[9]=a("h3",{id:"-4",tabindex:"-1"},"垂直布局",-1)),e[10]||(e[10]=a("p",null,"垂直的列表。",-1)),n(x,{title:"垂直布局",source:h(X)},{default:k(()=>[n(Q)]),_:1},8,["source"]),e[11]||(e[11]=a("h3",{id:"-5",tabindex:"-1"},"响应式列数",-1)),e[12]||(e[12]=a("p",null,"支持响应式的列数配置。",-1)),n(x,{title:"响应式列数",source:h(q)},{default:k(()=>[n(W)]),_:1},8,["source"]),e[13]||(e[13]=a("h3",{id:"-6",tabindex:"-1"},"不同尺寸",-1)),e[14]||(e[14]=a("p",null,"支持 default、middle、small 三种尺寸。",-1)),n(x,{title:"不同尺寸",source:h(K)},{default:k(()=>[n(H)]),_:1},8,["source"]),e[15]||(e[15]=a("h3",{id:"span-",tabindex:"-1"},"Span 填充",-1)),e[16]||(e[16]=a("p",null,[B("使用 "),a("code",null,'span="filled"'),B(" 填充剩余列。")],-1)),n(x,{title:"Span 填充",source:h(J)},{default:k(()=>[n(U)]),_:1},8,["source"]),e[17]||(e[17]=F(`<h2 id="api" tabindex="-1">API</h2><h3 id="descriptions-props" tabindex="-1">Descriptions Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>描述列表的标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>extra</td><td>描述列表的操作区域</td><td><code>string | VNode | slot</code></td><td>-</td></tr><tr><td>bordered</td><td>是否展示边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>column</td><td>一行的 DescriptionItems 数量,可以是响应式对象</td><td><code>number | Record&lt;Breakpoint, number&gt;</code></td><td><code>3</code></td></tr><tr><td>size</td><td>设置列表的大小</td><td><code>&#39;default&#39; | &#39;middle&#39; | &#39;small&#39; | &#39;medium&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>layout</td><td>描述布局</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>colon</td><td>配置 Descriptions.Item 的 colon 的默认值</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>items</td><td>描述列表的数据项</td><td><code>DescriptionsItem[]</code></td><td>-</td></tr><tr><td>labelStyle</td><td>自定义标签样式(全局)</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>contentStyle</td><td>自定义内容样式(全局)</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="descriptionsitem" tabindex="-1">DescriptionsItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>内容的描述</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>内容</td><td><code>any</code></td><td>-</td></tr><tr><td>span</td><td>包含列的数量,可以是响应式对象或 ‘filled’</td><td><code>number | &#39;filled&#39; | Record&lt;Breakpoint, number&gt;</code></td><td><code>1</code></td></tr><tr><td>labelStyle</td><td>自定义标签样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>contentStyle</td><td>自定义内容样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="breakpoint" tabindex="-1">Breakpoint</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">Breakpoint</span> <span class="token operator">=</span> <span class="token string">&#39;xs&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;sm&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lg&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;xl&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;xxl&#39;</span>
</code></pre><p>响应式断点:</p><ul><li>xs: <code>&gt;= 0px</code></li><li>sm: <code>&gt;= 576px</code></li><li>md: <code>&gt;= 768px</code></li><li>lg: <code>&gt;= 992px</code></li><li>xl: <code>&gt;= 1200px</code></li><li>xxl: <code>&gt;= 1600px</code></li></ul>`,9))])}}};export{ne as default};
