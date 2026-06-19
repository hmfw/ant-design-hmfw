import{o as x,N as J,L as X,Q as E,x as Z,t as H,w as ee,n as o,E as m,f as B,r as te,A as O,k as w,F as ne,K as s,h as d,J as le,i as L,p,H as oe,R as k,m as M,l as ae}from"./index-CCJgYszN.js";import{c as P}from"./cls-S9IiI6wd.js";import{T as ie}from"./Tooltip-IZZ8mlRV.js";import{B as de,P as se}from"./PictureOutlined-CeznYNqd.js";import{I as c}from"./Icon-DcJqStDf.js";import{U as z}from"./UserOutlined-aiZac4sK.js";import{S as N}from"./SettingOutlined-BgtyyoiM.js";import{H as T}from"./HomeOutlined-IW-iLt-y.js";function ue(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!te(i)}const v=x({name:"Segmented",props:{value:[String,Number],defaultValue:[String,Number],options:{type:Array,default:()=>[]},disabled:Boolean,block:Boolean,size:{type:String,default:"middle"},vertical:Boolean,orientation:String,shape:{type:String,default:"default"},name:String},emits:["update:value","change"],setup(i,{emit:a}){var Q;const l=J("segmented"),u=X(),e=m(),n=m(),b=B(()=>i.options.map(t=>typeof t=="object"?t:{label:String(t),value:t})),$=i.defaultValue??i.value??((Q=b.value[0])==null?void 0:Q.value),D=m($),W=B(()=>i.value!==void 0),y=B(()=>W.value?i.value:D.value);E(()=>i.value,t=>{t!==void 0&&(D.value=t)});const S=B(()=>i.orientation?i.orientation==="vertical":i.vertical),K=B(()=>i.name||`segmented-${Math.random().toString(36).slice(2,9)}`),A=(t,f)=>{i.disabled||t.disabled||(D.value=t.value,a("update:value",t.value),a("change",t.value),H(()=>R(f)))},q=(t,f,g)=>{var Y;if(i.disabled||f.disabled)return;const I=b.value,r=!S.value,h=u.value.direction==="rtl";let U=-1;if(r&&t.key==="ArrowRight"||!r&&t.key==="ArrowDown"?U=h&&r?g-1:g+1:(r&&t.key==="ArrowLeft"||!r&&t.key==="ArrowUp")&&(U=h&&r?g+1:g-1),U>=0&&U<I.length){t.preventDefault();const j=I[U];if(!j.disabled){A(j,U);const C=(Y=e.value)==null?void 0:Y.querySelectorAll('input[type="radio"]');C!=null&&C[U]&&C[U].focus()}}},R=t=>{if(!n.value||!e.value)return;const g=e.value.querySelectorAll(`.${l}-item`)[t];if(!g)return;const I=e.value.getBoundingClientRect(),r=g.getBoundingClientRect();if(S.value){const h=r.top-I.top+e.value.scrollTop;n.value.style.transform=`translateY(${h}px)`,n.value.style.height=`${r.height}px`,n.value.style.width="100%"}else{const h=r.left-I.left+e.value.scrollLeft;n.value.style.transform=`translateX(${h}px)`,n.value.style.width=`${r.width}px`,n.value.style.height="100%"}},V=()=>{const t=b.value.findIndex(f=>f.value===y.value);t>=0&&R(t)};let _=null;Z(()=>{V(),e.value&&typeof ResizeObserver<"u"&&(_=new ResizeObserver(()=>{H(()=>V())}),_.observe(e.value))}),ee(()=>{_&&(_.disconnect(),_=null)}),E([y,b,S],()=>{H(()=>V())});const F=t=>{const f=!!t.icon,g=t.label!==void 0&&t.label!==null;return o("div",{class:P(`${l}-item-label`,{[`${l}-item-icon-only`]:f&&!g})},[f&&o("span",{class:`${l}-item-icon`},[t.icon]),g&&o("span",{class:`${l}-item-text`},[t.label])])},G=(t,f)=>{const g=t.value===y.value,I=i.disabled||t.disabled,r=o("label",{key:t.value,class:P(`${l}-item`,t.className,{[`${l}-item-selected`]:g,[`${l}-item-disabled`]:I}),style:t.style,title:t.title},[o("input",{type:"radio",class:`${l}-item-input`,name:K.value,value:t.value,checked:g,disabled:I,onChange:()=>A(t,f),onKeydown:h=>q(h,t,f)},null),F(t)]);if(t.tooltip){const h=typeof t.tooltip=="string"?{title:t.tooltip}:t.tooltip;return o(ie,h,ue(r)?r:{default:()=>[r]})}return r};return()=>o("div",{class:P(l,`${l}-${i.size}`,{[`${l}-disabled`]:i.disabled,[`${l}-block`]:i.block,[`${l}-vertical`]:S.value,[`${l}-rtl`]:u.value.direction==="rtl",[`${l}-shape-${i.shape}`]:i.shape==="round"})},[o("div",{ref:e,class:`${l}-group`},[o("div",{ref:n,class:`${l}-thumb`},null),b.value.map((t,f)=>G(t,f))])])}}),re=x({__name:"SegmentedBasic",setup(i){const a=m("Daily"),l=["Daily","Weekly","Monthly","Quarterly","Yearly"];return(u,e)=>(O(),w(ne,null,[o(s(v),{value:a.value,"onUpdate:value":e[0]||(e[0]=n=>a.value=n),options:l},null,8,["value"]),d("p",null,"当前选中："+le(a.value),1)],64))}}),me=`<template>
  <Segmented v-model:value="value" :options="options" />
  <p>当前选中：{{ value }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Daily')
const options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
<\/script>
`,pe=x({__name:"SegmentedBlock",setup(i){const a=m("Map"),l=["Map","Transit","Satellite"];return(u,e)=>(O(),L(s(v),{value:a.value,"onUpdate:value":e[0]||(e[0]=n=>a.value=n),options:l,block:""},null,8,["value"]))}}),ce=`<template>
  <Segmented v-model:value="value" :options="options" block />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Map')
const options = ['Map', 'Transit', 'Satellite']
<\/script>
`,ve=x({__name:"SegmentedCustomStyle",setup(i){const a=m("apple"),l=[{value:"apple",label:"苹果",style:{color:"#cf1322",fontWeight:600}},{value:"orange",label:"橙子",style:{color:"#d46b08"}},{value:"pear",label:"梨",className:"demo-segmented-pear"}];return(u,e)=>(O(),L(s(v),{value:a.value,"onUpdate:value":e[0]||(e[0]=n=>a.value=n),options:l},null,8,["value"]))}}),fe=`<template>
  <Segmented v-model:value="value" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('apple')
// 每个选项支持单独的 className 和 style
const options = [
  { value: 'apple', label: '苹果', style: { color: '#cf1322', fontWeight: 600 } },
  { value: 'orange', label: '橙子', style: { color: '#d46b08' } },
  { value: 'pear', label: '梨', className: 'demo-segmented-pear' },
]
<\/script>

<style>
.demo-segmented-pear {
  font-style: italic;
}
</style>
`,ge=x({__name:"SegmentedDisabled",setup(i){const a=m("Daily"),l=[{value:"Daily",label:"每日"},{value:"Weekly",label:"每周",disabled:!0},{value:"Monthly",label:"每月"}];return(u,e)=>(O(),L(s(v),{value:a.value,"onUpdate:value":e[0]||(e[0]=n=>a.value=n),options:l},null,8,["value"]))}}),be=`<template>
  <Segmented v-model:value="value" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Daily')
const options = [
  { value: 'Daily', label: '每日' },
  { value: 'Weekly', label: '每周', disabled: true },
  { value: 'Monthly', label: '每月' },
]
<\/script>
`,ye={style:{display:"flex","flex-direction":"column",gap:"16px"}},Se=x({__name:"SegmentedIconLabel",setup(i){const a=m("list"),l=[{value:"list",label:"列表",icon:p(c,{component:de})},{value:"grid",label:"网格",icon:p(c,{component:se})}];return(u,e)=>(O(),w("div",ye,[o(s(v),{value:a.value,"onUpdate:value":e[0]||(e[0]=n=>a.value=n),options:l},null,8,["value"]),o(s(v),{value:a.value,"onUpdate:value":e[1]||(e[1]=n=>a.value=n),options:l,size:"large"},null,8,["value"]),o(s(v),{value:a.value,"onUpdate:value":e[2]||(e[2]=n=>a.value=n),options:l,size:"small"},null,8,["value"])]))}}),he=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value" :options="options" />
    <Segmented v-model:value="value" :options="options" size="large" />
    <Segmented v-model:value="value" :options="options" size="small" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from 'ant-design-hmfw'
import { PictureOutlined, BarsOutlined } from 'ant-design-hmfw'

const value = ref('list')
// 图标 + 文本同时存在的布局
const options = [
  { value: 'list', label: '列表', icon: h(Icon, { component: BarsOutlined }) },
  { value: 'grid', label: '网格', icon: h(Icon, { component: PictureOutlined }) },
]
<\/script>
`,xe={style:{display:"flex","flex-direction":"column",gap:"16px"}},Oe=x({__name:"SegmentedShape",setup(i){const a=m("light"),l=[{label:"Light",value:"light",icon:p(c,{component:z})},{label:"Dark",value:"dark",icon:p(c,{component:N})}],u=m("Daily"),e=["Daily","Weekly","Monthly"];return(n,b)=>(O(),w("div",xe,[o(s(v),{value:a.value,"onUpdate:value":b[0]||(b[0]=$=>a.value=$),options:l,shape:"round"},null,8,["value"]),o(s(v),{value:u.value,"onUpdate:value":b[1]||(b[1]=$=>u.value=$),options:e,shape:"round",size:"large"},null,8,["value"])]))}}),ke=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value1" :options="options1" shape="round" />
    <Segmented v-model:value="value2" :options="options2" shape="round" size="large" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from 'ant-design-hmfw'
import { UserOutlined, SettingOutlined } from 'ant-design-hmfw'

const value1 = ref('light')
const options1 = [
  { label: 'Light', value: 'light', icon: h(Icon, { component: UserOutlined }) },
  { label: 'Dark', value: 'dark', icon: h(Icon, { component: SettingOutlined }) },
]

const value2 = ref('Daily')
const options2 = ['Daily', 'Weekly', 'Monthly']
<\/script>
`,$e={style:{display:"flex","flex-direction":"column",gap:"16px"}},Ie=x({__name:"SegmentedSize",setup(i){const a=m("Daily"),l=["Daily","Weekly","Monthly","Quarterly","Yearly"],u=m("list"),e=[{label:"List",value:"list",icon:p(c,{component:z})},{label:"Grid",value:"grid",icon:p(c,{component:N})}],n=m("home"),b=[{value:"home",icon:p(c,{component:T}),tooltip:"Home"},{value:"user",icon:p(c,{component:z}),tooltip:"User"},{value:"settings",icon:p(c,{component:N}),tooltip:"Settings"}],$=m("a"),D=[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}];return(W,y)=>(O(),w("div",$e,[o(s(v),{value:a.value,"onUpdate:value":y[0]||(y[0]=S=>a.value=S),options:l},null,8,["value"]),o(s(v),{value:u.value,"onUpdate:value":y[1]||(y[1]=S=>u.value=S),options:e},null,8,["value"]),o(s(v),{value:n.value,"onUpdate:value":y[2]||(y[2]=S=>n.value=S),options:b,size:"large"},null,8,["value"]),o(s(v),{value:$.value,"onUpdate:value":y[3]||(y[3]=S=>$.value=S),options:D,size:"small"},null,8,["value"])]))}}),Ue=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value1" :options="options1" />
    <Segmented v-model:value="value2" :options="options2" />
    <Segmented v-model:value="value3" :options="options3" size="large" />
    <Segmented v-model:value="value4" :options="options4" size="small" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from 'ant-design-hmfw'
import { UserOutlined, SettingOutlined, HomeOutlined } from 'ant-design-hmfw'

const value1 = ref('Daily')
const options1 = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']

const value2 = ref('list')
const options2 = [
  { label: 'List', value: 'list', icon: h(Icon, { component: UserOutlined }) },
  { label: 'Grid', value: 'grid', icon: h(Icon, { component: SettingOutlined }) },
]

const value3 = ref('home')
const options3 = [
  { value: 'home', icon: h(Icon, { component: HomeOutlined }), tooltip: 'Home' },
  { value: 'user', icon: h(Icon, { component: UserOutlined }), tooltip: 'User' },
  { value: 'settings', icon: h(Icon, { component: SettingOutlined }), tooltip: 'Settings' },
]

const value4 = ref('a')
const options4 = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
]
<\/script>
`,we={style:{display:"flex",gap:"16px"}},De=x({__name:"SegmentedVertical",setup(i){const a=m("home"),l=[{value:"home",icon:p(c,{component:T})},{value:"user",icon:p(c,{component:z})},{value:"settings",icon:p(c,{component:N})}];return(u,e)=>(O(),w("div",we,[o(s(v),{value:a.value,"onUpdate:value":e[0]||(e[0]=n=>a.value=n),options:l,vertical:""},null,8,["value"])]))}}),_e=`<template>
  <div style="display: flex; gap: 16px">
    <Segmented v-model:value="value" :options="options" vertical />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from 'ant-design-hmfw'
import { UserOutlined, SettingOutlined, HomeOutlined } from 'ant-design-hmfw'

const value = ref('home')
const options = [
  { value: 'home', icon: h(Icon, { component: HomeOutlined }) },
  { value: 'user', icon: h(Icon, { component: UserOutlined }) },
  { value: 'settings', icon: h(Icon, { component: SettingOutlined }) },
]
<\/script>
`,Be={style:{display:"flex","flex-direction":"column",gap:"16px"}},ze=x({__name:"SegmentedWithIcon",setup(i){const a=m("home"),l=[{value:"home",icon:p(c,{component:T}),tooltip:"Home Page"},{value:"user",icon:p(c,{component:z}),tooltip:"User Profile"},{value:"settings",icon:p(c,{component:N}),tooltip:"Settings"}];return(u,e)=>(O(),w("div",Be,[o(s(v),{value:a.value,"onUpdate:value":e[0]||(e[0]=n=>a.value=n),options:l},null,8,["value"])]))}}),Ne=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from 'ant-design-hmfw'
import { UserOutlined, SettingOutlined, HomeOutlined } from 'ant-design-hmfw'

const value = ref('home')
const options = [
  { value: 'home', icon: h(Icon, { component: HomeOutlined }), tooltip: 'Home Page' },
  { value: 'user', icon: h(Icon, { component: UserOutlined }), tooltip: 'User Profile' },
  { value: 'settings', icon: h(Icon, { component: SettingOutlined }), tooltip: 'Settings' },
]
<\/script>
`,Ce={class:"markdown-body"},Re={__name:"segmented",setup(i,{expose:a}){return a({frontmatter:{}}),(u,e)=>{const n=oe("DemoBlock");return O(),w("div",Ce,[e[0]||(e[0]=d("h1",{id:"segmented-分段控制器",tabindex:"-1"},"Segmented 分段控制器",-1)),e[1]||(e[1]=d("p",null,"分段控制器。",-1)),e[2]||(e[2]=d("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=d("ul",null,[d("li",null,"用于展示多个选项并允许用户选择其中单个选项"),d("li",null,"当切换选中选项时,关联区域的内容会发生变化")],-1)),e[4]||(e[4]=d("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=d("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=d("p",null,"基本分段控制器。",-1)),o(n,{title:"基础用法",source:s(me)},{default:k(()=>[o(re)]),_:1},8,["source"]),e[7]||(e[7]=d("h3",{id:"block-模式",tabindex:"-1"},"Block 模式",-1)),e[8]||(e[8]=d("p",null,"block 属性使其适合父元素宽度。",-1)),o(n,{title:"Block 模式",source:s(ce)},{default:k(()=>[o(pe)]),_:1},8,["source"]),e[9]||(e[9]=d("h3",{id:"禁用",tabindex:"-1"},"禁用",-1)),e[10]||(e[10]=d("p",null,"禁用某些选项。",-1)),o(n,{title:"禁用",source:s(be)},{default:k(()=>[o(ge)]),_:1},8,["source"]),e[11]||(e[11]=d("h3",{id:"三种尺寸",tabindex:"-1"},"三种尺寸",-1)),e[12]||(e[12]=d("p",null,"提供 large、middle、small 三种尺寸。",-1)),o(n,{title:"三种尺寸",source:s(Ue)},{default:k(()=>[o(Ie)]),_:1},8,["source"]),e[13]||(e[13]=d("h3",{id:"垂直方向",tabindex:"-1"},"垂直方向",-1)),e[14]||(e[14]=d("p",null,"垂直布局的分段控制器。",-1)),o(n,{title:"垂直方向",source:s(_e)},{default:k(()=>[o(De)]),_:1},8,["source"]),e[15]||(e[15]=d("h3",{id:"圆角形状",tabindex:"-1"},"圆角形状",-1)),e[16]||(e[16]=d("p",null,"胶囊型的分段控制器。",-1)),o(n,{title:"圆角形状",source:s(ke)},{default:k(()=>[o(Oe)]),_:1},8,["source"]),e[17]||(e[17]=d("h3",{id:"带图标",tabindex:"-1"},"带图标",-1)),e[18]||(e[18]=d("p",null,"在选项中使用图标。",-1)),o(n,{title:"带图标",source:s(Ne)},{default:k(()=>[o(ze)]),_:1},8,["source"]),e[19]||(e[19]=d("h3",{id:"图标--文本",tabindex:"-1"},"图标 + 文本",-1)),e[20]||(e[20]=d("p",null,"图标与文本同时存在时自动优化布局，间距统一。",-1)),o(n,{title:"图标 + 文本",source:s(he)},{default:k(()=>[o(Se)]),_:1},8,["source"]),e[21]||(e[21]=d("h3",{id:"自定义选项样式",tabindex:"-1"},"自定义选项样式",-1)),e[22]||(e[22]=d("p",null,[M("每个选项支持单独的 "),d("code",null,"className"),M(" 与 "),d("code",null,"style"),M("。")],-1)),o(n,{title:"自定义选项样式",source:s(fe)},{default:k(()=>[o(ve)]),_:1},8,["source"]),e[23]||(e[23]=ae('<h2 id="api" tabindex="-1">API</h2><h3 id="segmented-props" tabindex="-1">Segmented Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value (v-model)</td><td>当前选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>options</td><td>数据化配置选项内容</td><td><code>string[] | number[] | SegmentedOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>block</td><td>将宽度调整为父元素宽度</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>控件大小</td><td><code>&#39;large&#39; | &#39;middle&#39; | &#39;small&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>vertical</td><td>垂直方向</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>orientation</td><td>方向(优先级高于 vertical)</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>shape</td><td>形状</td><td><code>&#39;default&#39; | &#39;round&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>name</td><td>为所有 radio input 设置 name 属性</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="segmentedoption" tabindex="-1">SegmentedOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>选项值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>label</td><td>选项标签</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>icon</td><td>选项图标</td><td><code>VNode</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>HTML title 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>tooltip</td><td>提示信息</td><td><code>string | Omit&lt;TooltipProps, &#39;title&#39;&gt;</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="segmented-events" tabindex="-1">Segmented Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr><tr><td>change</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr></tbody></table>',7))])}}};export{Re as default};
