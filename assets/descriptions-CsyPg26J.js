import{n as S,M as I,K as M,m as d,F as C,e as $,w as N,x as O,D as P,z as D,h as v,J as u,j as z,g as r,G as L,Q as k,l as w,k as T}from"./index-bv5A37HL.js";import{c as B}from"./cls-S9IiI6wd.js";function F(l,t){let n=null;return function(...a){n!==null&&clearTimeout(n),n=setTimeout(()=>{l.apply(this,a),n=null},t)}}const R={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function U(){const l=P(typeof window<"u"?window.innerWidth:0),n=F(()=>{typeof window<"u"&&(l.value=window.innerWidth)},100);return N(()=>{typeof window<"u"&&window.addEventListener("resize",n)}),O(()=>{typeof window<"u"&&window.removeEventListener("resize",n)}),$(()=>({xs:l.value>=0,sm:l.value>=576,md:l.value>=768,lg:l.value>=992,xl:l.value>=1200,xxl:l.value>=1600}))}function _(l,t){if(!t)return;const n=["xxl","xl","lg","md","sm","xs"];for(const a of n)if(l[a]&&t[a]!==void 0)return t[a]}const W=S({name:"Descriptions",props:{title:[String,Object],extra:[String,Object],bordered:Boolean,column:{type:[Number,Object],default:3},size:{type:String,default:"default"},layout:{type:String,default:"horizontal"},colon:{type:Boolean,default:!0},items:Array,labelStyle:Object,contentStyle:Object},setup(l,{slots:t}){const n=I("descriptions"),a=M(),e=U(),g=$(()=>{const p=e.value;return typeof l.column=="number"?l.column:_(p,l.column)??_(p,R)??3}),q=$(()=>{var y;return l.items?l.items.map((s,o)=>({...s,key:o})):(((y=t.default)==null?void 0:y.call(t))||[]).filter(s=>s.type&&typeof s.type=="object").map((s,o)=>({...s.props||{},children:s.children,key:s.key??o}))}),j=$(()=>{const p=e.value;return q.value.map(y=>{const{span:s,...o}=y;if(s==="filled")return{...o,filled:!0,computedSpan:1};const m=typeof s=="number"?s:_(p,s)??1;return{...o,computedSpan:m}})}),V=$(()=>{const p=g.value,y=j.value,s=[];let o=[],m=0;for(const h of y){if(h.filled){const i=p-m;o.push({...h,computedSpan:i}),s.push(o),o=[],m=0;continue}const c=h.computedSpan??1,b=p-m;m+c>p&&o.length>0&&(s.push(o),o=[],m=0),m+c>p?(o.push({...h,computedSpan:b}),m=p):(o.push(h),m+=c),m>=p&&(s.push(o),o=[],m=0)}return o.length>0&&s.push(o),s.map(h=>{const c=h.reduce((b,i)=>b+(i.computedSpan??1),0);if(c<p&&h.length>0){const b=h[h.length-1],i=b.computedSpan??1;b.computedSpan=p-(c-i)}return h})}),G=$(()=>l.size==="medium"?"middle":l.size);return()=>{var m,h;const p=a.value.direction,y=G.value,s=c=>{const b={...l.labelStyle,...c.labelStyle};return d("span",{style:b},[c.label])},o=c=>{const b={...l.contentStyle,...c.contentStyle};return d("span",{style:b},[c.children])};return d("div",{class:B(n,{[`${n}-${y}`]:y!=="default",[`${n}-bordered`]:l.bordered,[`${n}-rtl`]:p==="rtl"})},[(l.title||l.extra||t.title||t.extra)&&d("div",{class:`${n}-header`},[(l.title||t.title)&&d("div",{class:`${n}-title`},[((m=t.title)==null?void 0:m.call(t))??l.title]),(l.extra||t.extra)&&d("div",{class:`${n}-extra`},[((h=t.extra)==null?void 0:h.call(t))??l.extra])]),d("div",{class:`${n}-view`},[d("table",null,[d("tbody",null,[V.value.map((c,b)=>l.layout==="vertical"?d(C,null,[d("tr",{key:`label-${b}`,class:`${n}-row`},[c.map((i,x)=>d("th",{key:`label-${i.key??x}`,class:`${n}-item-label`,colspan:i.computedSpan??1},[s(i)]))]),d("tr",{key:`content-${b}`,class:`${n}-row`},[c.map((i,x)=>d("td",{key:`content-${i.key??x}`,class:`${n}-item-content`,colspan:i.computedSpan??1},[o(i)]))])]):l.bordered?d("tr",{key:b,class:`${n}-row`},[c.map((i,x)=>[d("th",{key:`label-${i.key??x}`,class:`${n}-item-label`},[s(i)]),d("td",{key:`content-${i.key??x}`,class:`${n}-item-content`,colspan:(i.computedSpan??1)*2-1},[o(i)])])]):d("tr",{key:b,class:`${n}-row`},[c.map((i,x)=>d("td",{key:`item-${i.key??x}`,class:`${n}-item`,colspan:i.computedSpan??1},[d("div",{class:`${n}-item-container`},[i.label&&d("span",{class:B(`${n}-item-label`,{[`${n}-item-no-colon`]:!l.colon})},[s(i)]),d("span",{class:`${n}-item-content`},[o(i)])])]))]))])])])])}}}),A=S({name:"DescriptionsItem",props:{label:String,span:[Number,String,Object],labelStyle:Object,contentStyle:Object},setup(l,{slots:t}){return()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),f=W;f.Item=A;const E=S({__name:"DescriptionsBasic",setup(l){const t=[{label:"用户名",children:"Zhou Maomao"},{label:"手机号",children:"1810000000"},{label:"居住地",children:"杭州市"},{label:"备注",children:"学校"},{label:"联系地址",children:"浙江省杭州市西湖区古翠路",span:2}];return(n,a)=>(D(),v(u(f),{title:"用户信息",items:t}))}}),Z=`<template>
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
`,J=S({__name:"DescriptionsBordered",setup(l){const t=[{label:"产品",children:"Cloud Database"},{label:"计费方式",children:"预付费"},{label:"自动续费",children:"已开通"},{label:"订单时间",children:"2018-04-24 18:00:00"},{label:"使用时长",children:"2年"},{label:"到期时间",children:"2020-04-24 18:00:00"},{label:"配置信息",children:"2核 4GB 80GB SSD",span:3}];return(n,a)=>(D(),v(u(f),{title:"用户信息",bordered:"",items:t}))}}),K=`<template>
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
`,Q=S({__name:"DescriptionsFilled",setup(l){const t=[{label:"产品",children:"Cloud Database",span:2},{label:"计费",children:"预付费"},{label:"时间",children:"18:00:00"},{label:"金额",children:"$80.00",span:"filled"},{label:"折扣",children:"$20.00",span:"filled"},{label:"实付",children:"$60.00"}];return(n,a)=>(D(),v(u(f),{title:"Span 填充示例",column:3,items:t}))}}),H=`<template>
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
`,X=S({__name:"DescriptionsResponsive",setup(l){const t=[{label:"产品",children:"Cloud Database"},{label:"计费",children:"预付费"},{label:"时间",children:"18:00:00"},{label:"金额",children:"$80.00"},{label:"折扣",children:"$20.00"},{label:"实付",children:"$60.00"}];return(n,a)=>(D(),v(u(f),{title:"响应式列数",column:{xs:1,sm:2,md:3},items:t}))}}),Y=`<template>
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
`,ee=S({__name:"DescriptionsSizes",setup(l){const t=[{label:"产品",children:"Cloud Database"},{label:"计费",children:"预付费"},{label:"时间",children:"18:00:00"}];return(n,a)=>(D(),z(C,null,[d(u(f),{title:"尺寸示例",column:3,items:t}),a[0]||(a[0]=r("br",null,null,-1)),d(u(f),{title:"中等尺寸",size:"middle",column:3,items:t}),a[1]||(a[1]=r("br",null,null,-1)),d(u(f),{title:"小尺寸",size:"small",column:3,items:t})],64))}}),te=`<template>
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
`,ne=S({__name:"DescriptionsVertical",setup(l){const t=[{label:"用户名",children:"Zhou Maomao"},{label:"手机号",children:"1810000000"},{label:"居住地",children:"杭州市"},{label:"联系地址",children:"浙江省杭州市西湖区古翠路"}];return(n,a)=>(D(),v(u(f),{title:"用户信息",layout:"vertical",items:t}))}}),le=`<template>
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
`,de=S({__name:"DescriptionsVerticalBordered",setup(l){const t=[{label:"产品",children:"Cloud Database"},{label:"计费方式",children:"预付费"},{label:"自动续费",children:"已开通"},{label:"订单时间",children:"2018-04-24 18:00:00"},{label:"使用时长",children:"2年"},{label:"到期时间",children:"2020-04-24 18:00:00"},{label:"配置信息",children:"2核 4GB 80GB SSD",span:3}];return(n,a)=>(D(),v(u(f),{title:"用户信息",layout:"vertical",bordered:"",items:t}))}}),ie=`<template>
  <Descriptions title="用户信息" layout="vertical" bordered :items="items" />
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
`,se={class:"markdown-body"},ae={__name:"descriptions",setup(l,{expose:t}){return t({frontmatter:{}}),(a,e)=>{const g=L("DemoBlock");return D(),z("div",se,[e[0]||(e[0]=r("h1",{id:"descriptions-",tabindex:"-1"},"Descriptions 描述列表",-1)),e[1]||(e[1]=r("p",null,"成组展示多个只读字段。",-1)),e[2]||(e[2]=r("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=r("ul",null,[r("li",null,"常见于详情页的信息展示")],-1)),e[4]||(e[4]=r("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=r("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=r("p",null,"简单的展示。",-1)),d(g,{title:"基础用法",source:u(Z)},{default:k(()=>[d(E)]),_:1},8,["source"]),e[7]||(e[7]=r("h3",{id:"-3",tabindex:"-1"},"带边框",-1)),e[8]||(e[8]=r("p",null,"带边框和背景颜色列表。",-1)),d(g,{title:"带边框",source:u(K)},{default:k(()=>[d(J)]),_:1},8,["source"]),e[9]||(e[9]=r("h3",{id:"-4",tabindex:"-1"},"垂直布局",-1)),e[10]||(e[10]=r("p",null,"垂直的列表。",-1)),d(g,{title:"垂直布局",source:u(le)},{default:k(()=>[d(ne)]),_:1},8,["source"]),e[11]||(e[11]=r("h3",{id:"-5",tabindex:"-1"},"垂直布局带边框",-1)),e[12]||(e[12]=r("p",null,"垂直布局与边框模式的组合使用，确保列边框和行边框正确显示。",-1)),d(g,{title:"垂直布局带边框",source:u(ie)},{default:k(()=>[d(de)]),_:1},8,["source"]),e[13]||(e[13]=r("h3",{id:"-6",tabindex:"-1"},"响应式列数",-1)),e[14]||(e[14]=r("p",null,"支持响应式的列数配置，窗口大小变化时自动调整列数布局。",-1)),d(g,{title:"响应式列数",source:u(Y)},{default:k(()=>[d(X)]),_:1},8,["source"]),e[15]||(e[15]=r("h3",{id:"-7",tabindex:"-1"},"不同尺寸",-1)),e[16]||(e[16]=r("p",null,"支持 default、middle、small 三种尺寸。",-1)),d(g,{title:"不同尺寸",source:u(te)},{default:k(()=>[d(ee)]),_:1},8,["source"]),e[17]||(e[17]=r("h3",{id:"span-",tabindex:"-1"},"Span 填充",-1)),e[18]||(e[18]=r("p",null,[w("使用 "),r("code",null,'span="filled"'),w(" 填充剩余列。")],-1)),d(g,{title:"Span 填充",source:u(H)},{default:k(()=>[d(Q)]),_:1},8,["source"]),e[19]||(e[19]=T(`<h2 id="api" tabindex="-1">API</h2><h3 id="descriptions-props" tabindex="-1">Descriptions Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>描述列表的标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>extra</td><td>描述列表的操作区域</td><td><code>string | VNode | slot</code></td><td>-</td></tr><tr><td>bordered</td><td>是否展示边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>column</td><td>一行的 DescriptionItems 数量,可以是响应式对象</td><td><code>number | Record&lt;Breakpoint, number&gt;</code></td><td><code>3</code></td></tr><tr><td>size</td><td>设置列表的大小</td><td><code>&#39;default&#39; | &#39;middle&#39; | &#39;small&#39; | &#39;medium&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>layout</td><td>描述布局</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>colon</td><td>配置 Descriptions.Item 的 colon 的默认值</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>items</td><td>描述列表的数据项</td><td><code>DescriptionsItem[]</code></td><td>-</td></tr><tr><td>labelStyle</td><td>自定义标签样式(全局)</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>contentStyle</td><td>自定义内容样式(全局)</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="descriptionsitem" tabindex="-1">DescriptionsItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>内容的描述</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>内容</td><td><code>any</code></td><td>-</td></tr><tr><td>span</td><td>包含列的数量,可以是响应式对象或 ‘filled’</td><td><code>number | &#39;filled&#39; | Record&lt;Breakpoint, number&gt;</code></td><td><code>1</code></td></tr><tr><td>labelStyle</td><td>自定义标签样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>contentStyle</td><td>自定义内容样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="breakpoint" tabindex="-1">Breakpoint</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">Breakpoint</span> <span class="token operator">=</span> <span class="token string">&#39;xs&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;sm&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lg&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;xl&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;xxl&#39;</span>
</code></pre><p>响应式断点:</p><ul><li>xs: <code>&gt;= 0px</code></li><li>sm: <code>&gt;= 576px</code></li><li>md: <code>&gt;= 768px</code></li><li>lg: <code>&gt;= 992px</code></li><li>xl: <code>&gt;= 1200px</code></li><li>xxl: <code>&gt;= 1600px</code></li></ul><h2 id="-8" tabindex="-1">功能特性</h2><h3 id="-9" tabindex="-1">垂直布局边框样式</h3><p>当 <code>layout=&quot;vertical&quot;</code> 与 <code>bordered</code> 同时启用时，组件会渲染为垂直分组的表格结构（label 与 content 分别独占一行）。 内置样式确保每一列之间存在垂直分隔线，同时保留行之间的水平分隔线，渲染效果与水平边框模式一致。</p><pre class="language-vue"><code class="language-vue">&lt;Descriptions title=&quot;用户信息&quot; layout=&quot;vertical&quot; bordered :items=&quot;items&quot; /&gt;
</code></pre><h3 id="-10" tabindex="-1">响应式列数自动更新</h3><p><code>column</code> 属性支持传入响应式对象（按断点配置列数）。组件内部将 <code>useBreakpoint()</code> 实现为真正的响应式 composable：</p><ul><li>在 <code>onMounted</code> 中绑定 <code>window.resize</code> 事件监听</li><li>使用 <code>debounce</code> 防抖（100ms 延迟）优化 resize 性能，避免频繁重渲染</li><li>在 <code>onUnmounted</code> 中自动清理监听器</li></ul><p>当窗口大小跨越断点时，列数将自动重新计算并触发视图更新，无需用户手动刷新页面。</p><pre class="language-vue"><code class="language-vue">&lt;Descriptions :column=&quot;{ xs: 1, sm: 2, md: 3, lg: 4 }&quot; :items=&quot;items&quot; /&gt;
</code></pre><h3 id="debounce-" tabindex="-1">debounce 工具函数</h3><p>新增的 <code>debounce</code> 防抖工具函数位于 <code>components/_utils/function.ts</code>，作为内部工具供组件库使用。</p><table><thead><tr><th>函数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>debounce</td><td>在指定延迟后执行函数，延迟期间再次调用则重新计时</td><td><code>&lt;T&gt;(fn: T, delay: number) =&gt; (...args) =&gt; void</code></td></tr></tbody></table><p>参数说明:</p><ul><li><code>fn</code>: 需要防抖的目标函数</li><li><code>delay</code>: 延迟时间，单位毫秒</li></ul>`,23))])}}};export{ae as default};
