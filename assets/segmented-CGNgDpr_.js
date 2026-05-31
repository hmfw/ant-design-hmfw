import{m as O,L as F,J as G,O as L,v as K,l as o,B as m,d as _,r as T,p as J,y as k,i as D,F as X,I as s,f as a,H as Z,g as Q,n as v,E as ee,P as $,j as te}from"./index-BZxHTh1S.js";import{c as j}from"./cls-S9IiI6wd.js";import{T as ne}from"./Tooltip-BtL1uRTx.js";import{m as B,l as H,H as V}from"./icons-D7iQGqyN.js";import{I as f}from"./Icon-B8OCUOt-.js";function oe(d){return typeof d=="function"||Object.prototype.toString.call(d)==="[object Object]"&&!J(d)}const y=O({name:"Segmented",props:{value:[String,Number],defaultValue:[String,Number],options:{type:Array,default:()=>[]},disabled:Boolean,block:Boolean,size:{type:String,default:"middle"},vertical:Boolean,orientation:String,shape:{type:String,default:"default"},name:String},emits:["update:value","change"],setup(d,{emit:i}){var P;const l=F("segmented"),c=G(),e=m(),n=m(),g=_(()=>d.options.map(t=>typeof t=="object"?t:{label:String(t),value:t})),S=d.defaultValue??d.value??((P=g.value[0])==null?void 0:P.value),U=m(S),N=_(()=>d.value!==void 0),p=_(()=>N.value?d.value:U.value);L(()=>d.value,t=>{t!==void 0&&(U.value=t)});const b=_(()=>d.orientation?d.orientation==="vertical":d.vertical),R=_(()=>d.name||`segmented-${Math.random().toString(36).slice(2,9)}`),C=(t,u)=>{d.disabled||t.disabled||(U.value=t.value,i("update:value",t.value),i("change",t.value),T(()=>M(u)))},Y=(t,u,r)=>{var W;if(d.disabled||u.disabled)return;const w=g.value,h=!b.value,I=c.value.direction==="rtl";let x=-1;if(h&&t.key==="ArrowRight"||!h&&t.key==="ArrowDown"?x=I&&h?r-1:r+1:(h&&t.key==="ArrowLeft"||!h&&t.key==="ArrowUp")&&(x=I&&h?r+1:r-1),x>=0&&x<w.length){t.preventDefault();const A=w[x];if(!A.disabled){C(A,x);const z=(W=e.value)==null?void 0:W.querySelectorAll('input[type="radio"]');z!=null&&z[x]&&z[x].focus()}}},M=t=>{if(!n.value||!e.value)return;const r=e.value.querySelectorAll(`.${l}-item`)[t];r&&(b.value?(n.value.style.top=`${r.offsetTop}px`,n.value.style.height=`${r.offsetHeight}px`,n.value.style.width="100%",n.value.style.left="0"):(n.value.style.left=`${r.offsetLeft}px`,n.value.style.width=`${r.offsetWidth}px`,n.value.style.height="100%",n.value.style.top="0"))};K(()=>{const t=g.value.findIndex(u=>u.value===p.value);t>=0&&M(t)}),L(p,()=>{const t=g.value.findIndex(u=>u.value===p.value);t>=0&&T(()=>M(t))});const E=t=>{const u=!!t.icon,r=t.label!==void 0&&t.label!==null;return o("div",{class:`${l}-item-label`},[u&&o("span",{class:`${l}-item-icon`},[t.icon]),r&&o("span",null,[t.label])])},q=(t,u)=>{const r=t.value===p.value,w=d.disabled||t.disabled,h=o("label",{key:t.value,class:j(`${l}-item`,t.className,{[`${l}-item-selected`]:r,[`${l}-item-disabled`]:w}),title:t.title},[o("input",{type:"radio",class:`${l}-item-input`,name:R.value,value:t.value,checked:r,disabled:w,onChange:()=>C(t,u),onKeydown:I=>Y(I,t,u)},null),E(t)]);if(t.tooltip){const I=typeof t.tooltip=="string"?{title:t.tooltip}:t.tooltip;return o(ne,I,oe(h)?h:{default:()=>[h]})}return h};return()=>o("div",{class:j(l,`${l}-${d.size}`,{[`${l}-disabled`]:d.disabled,[`${l}-block`]:d.block,[`${l}-vertical`]:b.value,[`${l}-rtl`]:c.value.direction==="rtl",[`${l}-shape-${d.shape}`]:d.shape==="round"})},[o("div",{ref:e,class:`${l}-group`},[o("div",{ref:n,class:`${l}-thumb`},null),g.value.map((t,u)=>q(t,u))])])}}),le=O({__name:"SegmentedBasic",setup(d){const i=m("Daily"),l=["Daily","Weekly","Monthly","Quarterly","Yearly"];return(c,e)=>(k(),D(X,null,[o(s(y),{value:i.value,"onUpdate:value":e[0]||(e[0]=n=>i.value=n),options:l},null,8,["value"]),a("p",null,"当前选中："+Z(i.value),1)],64))}}),de=`<template>
  <Segmented v-model:value="value" :options="options" />
  <p>当前选中：{{ value }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Daily')
const options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
<\/script>
`,ie=O({__name:"SegmentedBlock",setup(d){const i=m("Map"),l=["Map","Transit","Satellite"];return(c,e)=>(k(),Q(s(y),{value:i.value,"onUpdate:value":e[0]||(e[0]=n=>i.value=n),options:l,block:""},null,8,["value"]))}}),ae=`<template>
  <Segmented v-model:value="value" :options="options" block />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Map')
const options = ['Map', 'Transit', 'Satellite']
<\/script>
`,se=O({__name:"SegmentedDisabled",setup(d){const i=m("Daily"),l=[{value:"Daily",label:"每日"},{value:"Weekly",label:"每周",disabled:!0},{value:"Monthly",label:"每月"}];return(c,e)=>(k(),Q(s(y),{value:i.value,"onUpdate:value":e[0]||(e[0]=n=>i.value=n),options:l},null,8,["value"]))}}),ue=`<template>
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
`,re={style:{display:"flex","flex-direction":"column",gap:"16px"}},ce=O({__name:"SegmentedShape",setup(d){const i=m("light"),l=[{label:"Light",value:"light",icon:v(f,{component:B})},{label:"Dark",value:"dark",icon:v(f,{component:H})}],c=m("Daily"),e=["Daily","Weekly","Monthly"];return(n,g)=>(k(),D("div",re,[o(s(y),{value:i.value,"onUpdate:value":g[0]||(g[0]=S=>i.value=S),options:l,shape:"round"},null,8,["value"]),o(s(y),{value:c.value,"onUpdate:value":g[1]||(g[1]=S=>c.value=S),options:e,shape:"round",size:"large"},null,8,["value"])]))}}),me=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
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
`,pe={style:{display:"flex","flex-direction":"column",gap:"16px"}},ve=O({__name:"SegmentedSize",setup(d){const i=m("Daily"),l=["Daily","Weekly","Monthly","Quarterly","Yearly"],c=m("list"),e=[{label:"List",value:"list",icon:v(f,{component:B})},{label:"Grid",value:"grid",icon:v(f,{component:H})}],n=m("home"),g=[{value:"home",icon:v(f,{component:V}),tooltip:"Home"},{value:"user",icon:v(f,{component:B}),tooltip:"User"},{value:"settings",icon:v(f,{component:H}),tooltip:"Settings"}],S=m("a"),U=[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}];return(N,p)=>(k(),D("div",pe,[o(s(y),{value:i.value,"onUpdate:value":p[0]||(p[0]=b=>i.value=b),options:l},null,8,["value"]),o(s(y),{value:c.value,"onUpdate:value":p[1]||(p[1]=b=>c.value=b),options:e},null,8,["value"]),o(s(y),{value:n.value,"onUpdate:value":p[2]||(p[2]=b=>n.value=b),options:g,size:"large"},null,8,["value"]),o(s(y),{value:S.value,"onUpdate:value":p[3]||(p[3]=b=>S.value=b),options:U,size:"small"},null,8,["value"])]))}}),fe=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
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
`,ge={style:{display:"flex",gap:"16px"}},be=O({__name:"SegmentedVertical",setup(d){const i=m("home"),l=[{value:"home",icon:v(f,{component:V})},{value:"user",icon:v(f,{component:B})},{value:"settings",icon:v(f,{component:H})}];return(c,e)=>(k(),D("div",ge,[o(s(y),{value:i.value,"onUpdate:value":e[0]||(e[0]=n=>i.value=n),options:l,vertical:""},null,8,["value"])]))}}),he=`<template>
  <div style="display: flex; gap: 16px;">
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
`,ye={style:{display:"flex","flex-direction":"column",gap:"16px"}},Se=O({__name:"SegmentedWithIcon",setup(d){const i=m("home"),l=[{value:"home",icon:v(f,{component:V}),tooltip:"Home Page"},{value:"user",icon:v(f,{component:B}),tooltip:"User Profile"},{value:"settings",icon:v(f,{component:H}),tooltip:"Settings"}];return(c,e)=>(k(),D("div",ye,[o(s(y),{value:i.value,"onUpdate:value":e[0]||(e[0]=n=>i.value=n),options:l},null,8,["value"])]))}}),xe=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
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
`,Oe={class:"markdown-body"},we={__name:"segmented",setup(d,{expose:i}){return i({frontmatter:{}}),(c,e)=>{const n=ee("DemoBlock");return k(),D("div",Oe,[e[0]||(e[0]=a("h1",{id:"segmented-",tabindex:"-1"},"Segmented 分段控制器",-1)),e[1]||(e[1]=a("p",null,"分段控制器。",-1)),e[2]||(e[2]=a("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=a("ul",null,[a("li",null,"用于展示多个选项并允许用户选择其中单个选项"),a("li",null,"当切换选中选项时,关联区域的内容会发生变化")],-1)),e[4]||(e[4]=a("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=a("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=a("p",null,"基本分段控制器。",-1)),o(n,{title:"基础用法",source:s(de)},{default:$(()=>[o(le)]),_:1},8,["source"]),e[7]||(e[7]=a("h3",{id:"block-",tabindex:"-1"},"Block 模式",-1)),e[8]||(e[8]=a("p",null,"block 属性使其适合父元素宽度。",-1)),o(n,{title:"Block 模式",source:s(ae)},{default:$(()=>[o(ie)]),_:1},8,["source"]),e[9]||(e[9]=a("h3",{id:"-3",tabindex:"-1"},"禁用",-1)),e[10]||(e[10]=a("p",null,"禁用某些选项。",-1)),o(n,{title:"禁用",source:s(ue)},{default:$(()=>[o(se)]),_:1},8,["source"]),e[11]||(e[11]=a("h3",{id:"-4",tabindex:"-1"},"三种尺寸",-1)),e[12]||(e[12]=a("p",null,"提供 large、middle、small 三种尺寸。",-1)),o(n,{title:"三种尺寸",source:s(fe)},{default:$(()=>[o(ve)]),_:1},8,["source"]),e[13]||(e[13]=a("h3",{id:"-5",tabindex:"-1"},"垂直方向",-1)),e[14]||(e[14]=a("p",null,"垂直布局的分段控制器。",-1)),o(n,{title:"垂直方向",source:s(he)},{default:$(()=>[o(be)]),_:1},8,["source"]),e[15]||(e[15]=a("h3",{id:"-6",tabindex:"-1"},"圆角形状",-1)),e[16]||(e[16]=a("p",null,"胶囊型的分段控制器。",-1)),o(n,{title:"圆角形状",source:s(me)},{default:$(()=>[o(ce)]),_:1},8,["source"]),e[17]||(e[17]=a("h3",{id:"-7",tabindex:"-1"},"带图标",-1)),e[18]||(e[18]=a("p",null,"在选项中使用图标。",-1)),o(n,{title:"带图标",source:s(xe)},{default:$(()=>[o(Se)]),_:1},8,["source"]),e[19]||(e[19]=te('<h2 id="api" tabindex="-1">API</h2><h3 id="segmented-props" tabindex="-1">Segmented Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value (v-model)</td><td>当前选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>options</td><td>数据化配置选项内容</td><td><code>string[] | number[] | SegmentedOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>block</td><td>将宽度调整为父元素宽度</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>控件大小</td><td><code>&#39;large&#39; | &#39;middle&#39; | &#39;small&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>vertical</td><td>垂直方向</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>orientation</td><td>方向(优先级高于 vertical)</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>shape</td><td>形状</td><td><code>&#39;default&#39; | &#39;round&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>name</td><td>为所有 radio input 设置 name 属性</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="segmentedoption" tabindex="-1">SegmentedOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>选项值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>label</td><td>选项标签</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>icon</td><td>选项图标</td><td><code>VNode</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>HTML title 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>tooltip</td><td>提示信息</td><td><code>string | Omit&lt;TooltipProps, &#39;title&#39;&gt;</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="segmented-events" tabindex="-1">Segmented Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr><tr><td>change</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr></tbody></table>',7))])}}};export{we as default};
