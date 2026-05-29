import{k as r,I as B,L as D,j as s,c as v,z as m,w as c,g as y,F as $,G as u,d as a,E as M,e as h,B as V,M as b,h as _}from"./index-DvxRruME.js";import{c as f}from"./cls-S9IiI6wd.js";const p=r({name:"Segmented",props:{value:[String,Number],defaultValue:[String,Number],options:{type:Array,default:()=>[]},disabled:Boolean,block:Boolean,size:{type:String,default:"middle"}},emits:["update:value","change"],setup(l,{emit:n}){var g;const d=B("segmented"),i=v(()=>l.options.map(t=>typeof t=="object"?t:{label:String(t),value:t})),e=l.defaultValue??l.value??((g=i.value[0])==null?void 0:g.value),o=m(e),S=v(()=>l.value!==void 0),k=v(()=>S.value?l.value:o.value);D(()=>l.value,t=>{t!==void 0&&(o.value=t)});const x=t=>{l.disabled||t.disabled||(o.value=t.value,n("update:value",t.value),n("change",t.value))};return()=>s("div",{class:f(d,`${d}-${l.size}`,{[`${d}-disabled`]:l.disabled,[`${d}-block`]:l.block})},[s("div",{class:`${d}-group`},[i.value.map(t=>s("div",{key:t.value,class:f(`${d}-item`,{[`${d}-item-selected`]:t.value===k.value,[`${d}-item-disabled`]:l.disabled||t.disabled}),onClick:()=>x(t)},[s("div",{class:`${d}-item-label`},[t.icon&&s("span",{class:`${d}-item-icon`},[t.icon]),t.label])]))])])}}),w=r({__name:"SegmentedBasic",setup(l){const n=m("Daily"),d=["Daily","Weekly","Monthly","Quarterly","Yearly"];return(i,e)=>(c(),y($,null,[s(u(p),{value:n.value,"onUpdate:value":e[0]||(e[0]=o=>n.value=o),options:d},null,8,["value"]),a("p",null,"当前选中："+M(n.value),1)],64))}}),C=`<template>
  <Segmented v-model:value="value" :options="options" />
  <p>当前选中：{{ value }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Daily')
const options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
<\/script>
`,z=r({__name:"SegmentedBlock",setup(l){const n=m("Map"),d=["Map","Transit","Satellite"];return(i,e)=>(c(),h(u(p),{value:n.value,"onUpdate:value":e[0]||(e[0]=o=>n.value=o),options:d,block:""},null,8,["value"]))}}),N=`<template>
  <Segmented v-model:value="value" :options="options" block />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Map')
const options = ['Map', 'Transit', 'Satellite']
<\/script>
`,W=r({__name:"SegmentedDisabled",setup(l){const n=m("Daily"),d=[{value:"Daily",label:"每日"},{value:"Weekly",label:"每周",disabled:!0},{value:"Monthly",label:"每月"}];return(i,e)=>(c(),h(u(p),{value:n.value,"onUpdate:value":e[0]||(e[0]=o=>n.value=o),options:d},null,8,["value"]))}}),E=`<template>
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
`,O={class:"markdown-body"},j={__name:"segmented",setup(l,{expose:n}){return n({frontmatter:{}}),(i,e)=>{const o=V("DemoBlock");return c(),y("div",O,[e[0]||(e[0]=a("h1",{id:"segmented-",tabindex:"-1"},"Segmented 分段控制器",-1)),e[1]||(e[1]=a("p",null,"分段控制器。",-1)),e[2]||(e[2]=a("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=a("ul",null,[a("li",null,"用于展示多个选项并允许用户选择其中单个选项"),a("li",null,"当切换选中选项时，关联区域的内容会发生变化")],-1)),e[4]||(e[4]=a("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=a("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=a("p",null,"基本分段控制器。",-1)),s(o,{title:"基础用法",source:u(C)},{default:b(()=>[s(w)]),_:1},8,["source"]),e[7]||(e[7]=a("h3",{id:"block-",tabindex:"-1"},"Block 模式",-1)),e[8]||(e[8]=a("p",null,"block 属性使其适合父元素宽度。",-1)),s(o,{title:"Block 模式",source:u(N)},{default:b(()=>[s(z)]),_:1},8,["source"]),e[9]||(e[9]=a("h3",{id:"-3",tabindex:"-1"},"禁用",-1)),e[10]||(e[10]=a("p",null,"禁用某些选项。",-1)),s(o,{title:"禁用",source:u(E)},{default:b(()=>[s(W)]),_:1},8,["source"]),e[11]||(e[11]=_('<h2 id="api" tabindex="-1">API</h2><h3 id="segmented-props" tabindex="-1">Segmented Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value (v-model)</td><td>当前选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>options</td><td>数据化配置选项内容</td><td><code>string[] | SegmentedOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>block</td><td>将宽度调整为父元素宽度</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>控件大小</td><td><code>&#39;large&#39; | &#39;middle&#39; | &#39;small&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr></tbody></table><h3 id="segmentedoption" tabindex="-1">SegmentedOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>选项值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>label</td><td>选项标签</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>选项图标</td><td><code>slot</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="segmented-events" tabindex="-1">Segmented Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr><tr><td>change</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr></tbody></table>',7))])}}};export{j as default};
