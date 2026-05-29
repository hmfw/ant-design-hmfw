import{k as g,I as T,z as s,L as M,t as N,u as W,j as d,i as O,T as K,F as j,c as _,w as b,g as w,G as v,B as G,h as U,M as $,d as f}from"./index-BNHhPN23.js";import{c as L}from"./cls-S9IiI6wd.js";const m=g({name:"AutoComplete",inheritAttrs:!1,props:{value:String,defaultValue:{type:String,default:""},options:{type:Array,default:()=>[]},disabled:Boolean,placeholder:String,allowClear:{type:Boolean,default:!1},size:{type:String,default:"middle"},status:{type:String,default:""},filterOption:{type:[Boolean,Function],default:!0},backfill:Boolean,open:{type:Boolean,default:void 0}},emits:["update:value","change","select","search","focus","blur","clear"],setup(o,{slots:i,emit:u,attrs:c}){const t=T("auto-complete"),l=T("input"),n=s(o.defaultValue??o.value??""),p=s(!1),r=s(-1),x=s(),B=s(),R=s(),C=s({top:0,left:0,width:0}),J=_(()=>o.value!==void 0),A=_(()=>J.value?o.value:n.value),V=_(()=>o.open!==void 0?o.open:p.value);M(()=>o.value,e=>{e!==void 0&&(n.value=e)});const k=_(()=>{const e=A.value;return!e||o.filterOption===!1?o.options:typeof o.filterOption=="function"?o.options.filter(a=>o.filterOption(e,a)):o.options.filter(a=>a.value.toLowerCase().includes(e.toLowerCase())||(a.label??a.value).toLowerCase().includes(e.toLowerCase()))}),P=()=>{if(!x.value)return;const e=x.value.getBoundingClientRect();C.value={top:e.bottom+window.scrollY+4,left:e.left+window.scrollX,width:e.width}},z=()=>{P(),p.value=!0},S=()=>{p.value=!1,r.value=-1},h=e=>{n.value=e,u("update:value",e),u("change",e)},F=e=>{const a=e.target.value;h(a),u("search",a),z(),r.value=-1},E=e=>{h(e.value),u("select",e.value,e),S()},I=e=>{var a;e.stopPropagation(),h(""),u("clear"),(a=B.value)==null||a.focus()},q=e=>{if(!V.value){(e.key==="ArrowDown"||e.key==="ArrowUp")&&z();return}const a=k.value;e.key==="ArrowDown"?(e.preventDefault(),r.value=(r.value+1)%a.length,o.backfill&&a[r.value]&&h(a[r.value].value)):e.key==="ArrowUp"?(e.preventDefault(),r.value=(r.value-1+a.length)%a.length,o.backfill&&a[r.value]&&h(a[r.value].value)):e.key==="Enter"?r.value>=0&&a[r.value]?E(a[r.value]):S():e.key==="Escape"&&S()},D=e=>{var a,y;!((a=x.value)!=null&&a.contains(e.target))&&!((y=R.value)!=null&&y.contains(e.target))&&S()};return N(()=>document.addEventListener("mousedown",D)),W(()=>document.removeEventListener("mousedown",D)),()=>d(j,null,[d("div",{ref:x,class:L(t,`${l}-affix-wrapper`,`${l}-affix-wrapper-${o.size}`,{[`${l}-affix-wrapper-disabled`]:o.disabled,[`${l}-affix-wrapper-status-error`]:o.status==="error",[`${l}-affix-wrapper-status-warning`]:o.status==="warning",[`${l}-affix-wrapper-focused`]:V.value}),style:c.style},[i.prefix&&d("span",{class:`${l}-prefix`},[i.prefix()]),d("input",{ref:B,class:L(l,`${l}-${o.size}`),value:A.value,disabled:o.disabled,placeholder:o.placeholder,onInput:F,onFocus:()=>{z(),u("focus")},onBlur:()=>u("blur"),onKeydown:q,autocomplete:"off"},null),o.allowClear&&A.value&&!o.disabled&&d("span",{class:`${l}-clear-icon`,onMousedown:I},[O("✕")]),i.suffix&&d("span",{class:`${l}-suffix`},[i.suffix()])]),V.value&&k.value.length>0&&d(K,{to:"body"},{default:()=>[d("div",{ref:R,class:`${t}-dropdown`,style:{position:"absolute",top:`${C.value.top}px`,left:`${C.value.left}px`,width:`${C.value.width}px`,zIndex:1050}},[k.value.map((e,a)=>d("div",{key:e.value,class:L(`${t}-dropdown-item`,{[`${t}-dropdown-item-active`]:r.value===a,[`${t}-dropdown-item-disabled`]:e.disabled,[`${t}-dropdown-item-selected`]:e.value===A.value}),onMousedown:y=>{y.preventDefault(),!e.disabled&&E(e)}},[e.label??e.value]))])]})])}}),X={style:{width:"300px"}},Y=g({__name:"AutoCompleteBasic",setup(o){const i=s(""),u=s([{value:"Vue"},{value:"React"},{value:"Angular"},{value:"Svelte"}]),c=t=>{const l=["Vue","React","Angular","Svelte","Solid"];u.value=l.filter(n=>n.toLowerCase().includes(t.toLowerCase())).map(n=>({value:n}))};return(t,l)=>(b(),w("div",X,[d(v(m),{value:i.value,"onUpdate:value":l[0]||(l[0]=n=>i.value=n),options:u.value,placeholder:"请输入内容",onSearch:c},null,8,["value","options"])]))}}),H=`<template>
  <div style="width: 300px;">
    <AutoComplete
      v-model:value="value"
      :options="options"
      placeholder="请输入内容"
      @search="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from 'ant-design-hmfw'

const value = ref('')
const options = ref([
  { value: 'Vue' },
  { value: 'React' },
  { value: 'Angular' },
  { value: 'Svelte' },
])

const handleSearch = (searchText: string) => {
  const allOptions = ['Vue', 'React', 'Angular', 'Svelte', 'Solid']
  options.value = allOptions
    .filter(item => item.toLowerCase().includes(searchText.toLowerCase()))
    .map(item => ({ value: item }))
}
<\/script>
`,Q={style:{width:"300px"}},Z=g({__name:"AutoCompleteCustom",setup(o){const i=s(""),u=s([{value:"vue",label:"Vue - 渐进式 JavaScript 框架"},{value:"react",label:"React - 用于构建用户界面的 JavaScript 库"},{value:"angular",label:"Angular - 现代 Web 开发平台"}]),c=t=>{const l=[{value:"vue",label:"Vue - 渐进式 JavaScript 框架"},{value:"react",label:"React - 用于构建用户界面的 JavaScript 库"},{value:"angular",label:"Angular - 现代 Web 开发平台"}];u.value=l.filter(n=>n.value.toLowerCase().includes(t.toLowerCase()))};return(t,l)=>(b(),w("div",Q,[d(v(m),{value:i.value,"onUpdate:value":l[0]||(l[0]=n=>i.value=n),options:u.value,placeholder:"请输入内容",onSearch:c},null,8,["value","options"])]))}}),ee=`<template>
  <div style="width: 300px;">
    <AutoComplete
      v-model:value="value"
      :options="options"
      placeholder="请输入内容"
      @search="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from 'ant-design-hmfw'

const value = ref('')
const options = ref([
  { value: 'vue', label: 'Vue - 渐进式 JavaScript 框架' },
  { value: 'react', label: 'React - 用于构建用户界面的 JavaScript 库' },
  { value: 'angular', label: 'Angular - 现代 Web 开发平台' },
])

const handleSearch = (searchText: string) => {
  const allOptions = [
    { value: 'vue', label: 'Vue - 渐进式 JavaScript 框架' },
    { value: 'react', label: 'React - 用于构建用户界面的 JavaScript 库' },
    { value: 'angular', label: 'Angular - 现代 Web 开发平台' },
  ]
  options.value = allOptions.filter(item =>
    item.value.toLowerCase().includes(searchText.toLowerCase())
  )
}
<\/script>
`,te={style:{width:"300px"}},le=g({__name:"AutoCompleteEmail",setup(o){const i=s(""),u=s([]),c=["@gmail.com","@qq.com","@163.com","@outlook.com","@hotmail.com"],t=l=>{if(!l||l.includes("@")){u.value=[];return}u.value=c.map(n=>({value:l+n}))};return(l,n)=>(b(),w("div",te,[d(v(m),{value:i.value,"onUpdate:value":n[0]||(n[0]=p=>i.value=p),options:u.value,placeholder:"请输入邮箱",onSearch:t},null,8,["value","options"])]))}}),oe=`<template>
  <div style="width: 300px;">
    <AutoComplete
      v-model:value="email"
      :options="emailOptions"
      placeholder="请输入邮箱"
      @search="handleEmailSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from 'ant-design-hmfw'

const email = ref('')
const emailOptions = ref<Array<{ value: string }>>([])

const emailSuffixes = ['@gmail.com', '@qq.com', '@163.com', '@outlook.com', '@hotmail.com']

const handleEmailSearch = (searchText: string) => {
  if (!searchText || searchText.includes('@')) {
    emailOptions.value = []
    return
  }

  emailOptions.value = emailSuffixes.map(suffix => ({
    value: searchText + suffix,
  }))
}
<\/script>
`,ae={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},ne=g({__name:"AutoCompleteSize",setup(o){const i=s(""),u=s(""),c=s(""),t=s([{value:"Vue"},{value:"React"},{value:"Angular"}]);return(l,n)=>(b(),w("div",ae,[d(v(m),{value:i.value,"onUpdate:value":n[0]||(n[0]=p=>i.value=p),options:t.value,size:"large",placeholder:"Large size"},null,8,["value","options"]),d(v(m),{value:u.value,"onUpdate:value":n[1]||(n[1]=p=>u.value=p),options:t.value,placeholder:"Default size"},null,8,["value","options"]),d(v(m),{value:c.value,"onUpdate:value":n[2]||(n[2]=p=>c.value=p),options:t.value,size:"small",placeholder:"Small size"},null,8,["value","options"])]))}}),de=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
    <AutoComplete
      v-model:value="value1"
      :options="options"
      size="large"
      placeholder="Large size"
    />
    <AutoComplete
      v-model:value="value2"
      :options="options"
      placeholder="Default size"
    />
    <AutoComplete
      v-model:value="value3"
      :options="options"
      size="small"
      placeholder="Small size"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from 'ant-design-hmfw'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const options = ref([
  { value: 'Vue' },
  { value: 'React' },
  { value: 'Angular' },
])
<\/script>
`,ue={class:"markdown-body"},re={__name:"auto-complete",setup(o,{expose:i}){return i({frontmatter:{}}),(c,t)=>{const l=G("DemoBlock");return b(),w("div",ue,[t[0]||(t[0]=U('<h1 id="autocomplete-" tabindex="-1">AutoComplete 自动完成</h1><p>输入框自动完成功能。</p><h2 id="" tabindex="-1">何时使用</h2><p>需要自动完成时。</p><ul><li>需要一个输入框而不是选择器。</li><li>需要输入建议/辅助提示。</li></ul><p>和 Select 的区别是：</p><ul><li>AutoComplete 是一个带提示的文本输入框，用户可以自由输入，关键词是辅助输入。</li><li>Select 是在限定的可选项中进行选择，关键词是选择。</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基础用法</h3><p>基本使用，通过 <code>options</code> 设置自动完成的数据源。</p>',10)),d(l,{title:"基础用法",source:v(H)},{default:$(()=>[d(Y)]),_:1},8,["source"]),t[1]||(t[1]=f("h3",{id:"-3",tabindex:"-1"},"自定义选项",-1)),t[2]||(t[2]=f("p",null,[O("通过 "),f("code",null,"options"),O(" 的 "),f("code",null,"label"),O(" 属性自定义选项内容。")],-1)),d(l,{title:"自定义选项",source:v(ee)},{default:$(()=>[d(Z)]),_:1},8,["source"]),t[3]||(t[3]=f("h3",{id:"-4",tabindex:"-1"},"邮箱补全",-1)),t[4]||(t[4]=f("p",null,"邮箱输入自动补全示例。",-1)),d(l,{title:"邮箱补全",source:v(oe)},{default:$(()=>[d(le)]),_:1},8,["source"]),t[5]||(t[5]=f("h3",{id:"-5",tabindex:"-1"},"不同尺寸",-1)),t[6]||(t[6]=f("p",null,"三种大小的输入框，大的用在表单中，中的为默认。",-1)),d(l,{title:"不同尺寸",source:v(de)},{default:$(()=>[d(ne)]),_:1},8,["source"]),t[7]||(t[7]=U('<h2 id="api" tabindex="-1">API</h2><h3 id="autocomplete-props" tabindex="-1">AutoComplete Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定当前选中的条目</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>指定默认选中的条目</td><td><code>string</code></td><td>-</td></tr><tr><td>options</td><td>数据源</td><td><code>AutoCompleteOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td>-</td></tr><tr><td>allowClear</td><td>支持清除</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>filterOption</td><td>是否根据输入项进行筛选。当其为一个函数时，会接收 <code>inputValue</code> <code>option</code> 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false</td><td><code>boolean | ((inputValue: string, option: AutoCompleteOption) =&gt; boolean)</code></td><td><code>true</code></td></tr><tr><td>backfill</td><td>使用键盘选择选项的时候把选中项回填到输入框中</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="autocompleteoption" tabindex="-1">AutoCompleteOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td><code>string</code></td></tr><tr><td>label</td><td>选项的标签，若不设置则默认与 value 相同</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用该选项</td><td><code>boolean</code></td></tr></tbody></table><h3 id="autocomplete-events" tabindex="-1">AutoComplete Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选中 option，或 input 的 value 变化时，调用此函数</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>change</td><td>选中 option，或 input 的 value 变化时，调用此函数</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>select</td><td>被选中时调用，参数为选中项的 value 值</td><td><code>(value: string, option: AutoCompleteOption) =&gt; void</code></td></tr><tr><td>search</td><td>搜索补全项的时候调用</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>focus</td><td>获得焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清除按钮时的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table>',7))])}}};export{re as default};
