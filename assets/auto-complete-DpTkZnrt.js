import{n as S,M,D as i,P as q,w as ee,x as te,m as d,T as le,F as ne,e as C,s as oe,z as y,j as O,J as p,G as ae,k as N,Q as $,g,l as D}from"./index-i0jnWELi.js";import{c as F}from"./cls-S9IiI6wd.js";const de=t=>t==="large"?"lg":t==="small"?"sm":"",b=S({name:"AutoComplete",inheritAttrs:!1,props:{value:String,defaultValue:{type:String,default:""},options:{type:Array,default:()=>[]},disabled:Boolean,placeholder:String,allowClear:{type:[Boolean,Object],default:!1},size:{type:String,default:"middle"},status:{type:String,default:""},filterOption:{type:[Boolean,Function],default:!0},backfill:Boolean,defaultActiveFirstOption:{type:Boolean,default:!0},notFoundContent:String,defaultOpen:Boolean,open:{type:Boolean,default:void 0}},emits:["update:value","change","select","search","focus","blur","clear","openChange"],setup(t,{slots:r,emit:u,attrs:f,expose:l}){const a=M("auto-complete"),o=M("input"),m=i(t.value??t.defaultValue??""),A=i(t.defaultOpen??!1),s=i(-1),w=i(),c=i(),v=i(),_=i({top:0,left:0,width:0}),W=C(()=>t.value!==void 0),k=C(()=>W.value?t.value:m.value),R=C(()=>t.open!==void 0?t.open:A.value);q(()=>t.value,e=>{e!==void 0&&(m.value=e)});const x=C(()=>{const e=k.value;return!e||t.filterOption===!1?t.options:typeof t.filterOption=="function"?t.options.filter(n=>t.filterOption(e,n)):t.options.filter(n=>n.value.toLowerCase().includes(e.toLowerCase())||(n.label??n.value).toLowerCase().includes(e.toLowerCase()))}),j=C(()=>x.value.length>0||!!t.notFoundContent),K=C(()=>x.value.findIndex(e=>!e.disabled)),V=()=>{s.value=t.defaultActiveFirstOption?K.value:-1};q(()=>x.value,e=>{var n;R.value&&(s.value>=e.length||s.value>=0&&((n=e[s.value])!=null&&n.disabled)||s.value===-1)&&V()});const E=e=>{A.value!==e&&(A.value=e,u("openChange",e))},G=()=>{if(!w.value)return;const e=w.value.getBoundingClientRect();_.value={top:e.bottom+window.scrollY+4,left:e.left+window.scrollX,width:e.width}},I=()=>{G(),E(!0)},L=()=>{E(!1),s.value=-1},z=e=>{m.value=e,u("update:value",e),u("change",e)},Q=e=>{const n=e.target.value;z(n),u("search",n),I(),V()},T=e=>{e.disabled||(z(e.value),u("select",e.value,e),L())},X=e=>{var n;e.preventDefault(),e.stopPropagation(),z(""),u("clear"),(n=c.value)==null||n.focus()},Y=()=>{oe(()=>{var n;const e=(n=v.value)==null?void 0:n.querySelector(`.${a}-dropdown-item-active`);e&&typeof e.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})})},U=e=>{const n=x.value;if(!n.length)return;let h=s.value;for(let P=0;P<n.length&&(h=(h+e+n.length)%n.length,!!n[h].disabled);P++);s.value=h,t.backfill&&n[h]&&!n[h].disabled&&z(n[h].value),Y()},H=e=>{if(!R.value){(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),I(),V());return}const n=x.value;e.key==="ArrowDown"?(e.preventDefault(),U(1)):e.key==="ArrowUp"?(e.preventDefault(),U(-1)):e.key==="Enter"?s.value>=0&&n[s.value]&&!n[s.value].disabled?(e.preventDefault(),T(n[s.value])):L():e.key==="Escape"&&L()},J=e=>{var n,h;!((n=w.value)!=null&&n.contains(e.target))&&!((h=v.value)!=null&&h.contains(e.target))&&L()};ee(()=>document.addEventListener("mousedown",J)),te(()=>document.removeEventListener("mousedown",J)),l({focus:()=>{var e;return(e=c.value)==null?void 0:e.focus()},blur:()=>{var e;return(e=c.value)==null?void 0:e.blur()}});const Z=()=>typeof t.allowClear=="object"&&t.allowClear.clearIcon?t.allowClear.clearIcon:"✕",B=C(()=>de(t.size));return()=>d(ne,null,[d("div",{ref:w,class:F(a,`${o}-affix-wrapper`,B.value&&`${o}-affix-wrapper-${B.value}`,{[`${o}-affix-wrapper-disabled`]:t.disabled,[`${o}-affix-wrapper-status-error`]:t.status==="error",[`${o}-affix-wrapper-status-warning`]:t.status==="warning",[`${o}-affix-wrapper-focused`]:R.value}),style:f.style},[r.prefix&&d("span",{class:`${o}-prefix`},[r.prefix()]),d("input",{ref:c,class:F(o,B.value&&`${o}-${B.value}`),value:k.value,disabled:t.disabled,placeholder:t.placeholder,onInput:Q,onFocus:e=>{I(),V(),u("focus",e)},onBlur:e=>u("blur",e),onKeydown:H,autocomplete:"off"},null),!!t.allowClear&&k.value&&!t.disabled&&d("span",{class:`${o}-clear-icon`,onMousedown:X},[Z()]),r.suffix&&d("span",{class:`${o}-suffix`},[r.suffix()])]),R.value&&j.value&&d(le,{to:"body"},{default:()=>[d("div",{ref:v,class:`${a}-dropdown`,style:{position:"absolute",top:`${_.value.top}px`,left:`${_.value.left}px`,width:`${_.value.width}px`,zIndex:1050}},[x.value.length>0?x.value.map((e,n)=>d("div",{key:e.value,class:F(`${a}-dropdown-item`,{[`${a}-dropdown-item-active`]:s.value===n,[`${a}-dropdown-item-disabled`]:e.disabled,[`${a}-dropdown-item-selected`]:e.value===k.value}),onMouseenter:()=>{e.disabled||(s.value=n)},onMousedown:h=>{h.preventDefault(),T(e)}},[e.label??e.value])):d("div",{class:`${a}-dropdown-empty`},[t.notFoundContent])])]})])}}),ue={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},ie=S({__name:"AutoCompleteAdvanced",setup(t){const r=i(""),u=i(""),f=i("Vue"),l=i(""),a=i([{value:"Vue"},{value:"React"},{value:"Angular"}]),o=i([{value:"TypeScript"},{value:"JavaScript"},{value:"Python"}]),m=i([{value:"Vue"},{value:"React"},{value:"Angular"}]),A=i([{value:"Vue"},{value:"React"},{value:"Angular"}]),s=w=>{const c=["Vue","React","Angular"];A.value=c.filter(v=>v.toLowerCase().includes(w.toLowerCase())).map(v=>({value:v}))};return(w,c)=>(y(),O("div",ue,[d(p(b),{value:r.value,"onUpdate:value":c[0]||(c[0]=v=>r.value=v),options:a.value,placeholder:"默认高亮第一项","default-active-first-option":!0},null,8,["value","options"]),d(p(b),{value:u.value,"onUpdate:value":c[1]||(c[1]=v=>u.value=v),options:o.value,placeholder:"不高亮第一项","default-active-first-option":!1},null,8,["value","options"]),d(p(b),{value:f.value,"onUpdate:value":c[2]||(c[2]=v=>f.value=v),options:m.value,placeholder:"自定义清除图标","allow-clear":{clearIcon:"🗑️"}},null,8,["value","options"]),d(p(b),{value:l.value,"onUpdate:value":c[3]||(c[3]=v=>l.value=v),options:A.value,placeholder:"无匹配时显示提示","not-found-content":"无匹配结果",onSearch:s},null,8,["value","options"])]))}}),re=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
    <AutoComplete
      v-model:value="value1"
      :options="options1"
      placeholder="默认高亮第一项"
      :default-active-first-option="true"
    />
    <AutoComplete
      v-model:value="value2"
      :options="options2"
      placeholder="不高亮第一项"
      :default-active-first-option="false"
    />
    <AutoComplete
      v-model:value="value3"
      :options="options3"
      placeholder="自定义清除图标"
      :allow-clear="{ clearIcon: '🗑️' }"
    />
    <AutoComplete
      v-model:value="value4"
      :options="filteredOptions"
      placeholder="无匹配时显示提示"
      not-found-content="无匹配结果"
      @search="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from 'ant-design-hmfw'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('Vue')
const value4 = ref('')

const options1 = ref([
  { value: 'Vue' },
  { value: 'React' },
  { value: 'Angular' },
])

const options2 = ref([
  { value: 'TypeScript' },
  { value: 'JavaScript' },
  { value: 'Python' },
])

const options3 = ref([
  { value: 'Vue' },
  { value: 'React' },
  { value: 'Angular' },
])

const filteredOptions = ref([
  { value: 'Vue' },
  { value: 'React' },
  { value: 'Angular' },
])

const handleSearch = (searchText: string) => {
  const allOptions = ['Vue', 'React', 'Angular']
  filteredOptions.value = allOptions
    .filter(item => item.toLowerCase().includes(searchText.toLowerCase()))
    .map(item => ({ value: item }))
}
<\/script>
`,se={style:{width:"300px"}},ce=S({__name:"AutoCompleteBasic",setup(t){const r=i(""),u=i([{value:"Vue"},{value:"React"},{value:"Angular"},{value:"Svelte"}]),f=l=>{const a=["Vue","React","Angular","Svelte","Solid"];u.value=a.filter(o=>o.toLowerCase().includes(l.toLowerCase())).map(o=>({value:o}))};return(l,a)=>(y(),O("div",se,[d(p(b),{value:r.value,"onUpdate:value":a[0]||(a[0]=o=>r.value=o),options:u.value,placeholder:"请输入内容",onSearch:f},null,8,["value","options"])]))}}),ve=`<template>
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
`,pe={style:{width:"300px"}},fe=S({__name:"AutoCompleteCustom",setup(t){const r=i(""),u=i([{value:"vue",label:"Vue - 渐进式 JavaScript 框架"},{value:"react",label:"React - 用于构建用户界面的 JavaScript 库"},{value:"angular",label:"Angular - 现代 Web 开发平台"}]),f=l=>{const a=[{value:"vue",label:"Vue - 渐进式 JavaScript 框架"},{value:"react",label:"React - 用于构建用户界面的 JavaScript 库"},{value:"angular",label:"Angular - 现代 Web 开发平台"}];u.value=a.filter(o=>o.value.toLowerCase().includes(l.toLowerCase()))};return(l,a)=>(y(),O("div",pe,[d(p(b),{value:r.value,"onUpdate:value":a[0]||(a[0]=o=>r.value=o),options:u.value,placeholder:"请输入内容",onSearch:f},null,8,["value","options"])]))}}),me=`<template>
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
`,he={style:{width:"300px"}},ge=S({__name:"AutoCompleteEmail",setup(t){const r=i(""),u=i([]),f=["@gmail.com","@qq.com","@163.com","@outlook.com","@hotmail.com"],l=a=>{if(!a||a.includes("@")){u.value=[];return}u.value=f.map(o=>({value:a+o}))};return(a,o)=>(y(),O("div",he,[d(p(b),{value:r.value,"onUpdate:value":o[0]||(o[0]=m=>r.value=m),options:u.value,placeholder:"请输入邮箱",onSearch:l},null,8,["value","options"])]))}}),be=`<template>
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
`,we={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},xe=S({__name:"AutoCompleteSize",setup(t){const r=i(""),u=i(""),f=i(""),l=i([{value:"Vue"},{value:"React"},{value:"Angular"}]);return(a,o)=>(y(),O("div",we,[d(p(b),{value:r.value,"onUpdate:value":o[0]||(o[0]=m=>r.value=m),options:l.value,size:"large",placeholder:"Large size"},null,8,["value","options"]),d(p(b),{value:u.value,"onUpdate:value":o[1]||(o[1]=m=>u.value=m),options:l.value,placeholder:"Default size"},null,8,["value","options"]),d(p(b),{value:f.value,"onUpdate:value":o[2]||(o[2]=m=>f.value=m),options:l.value,size:"small",placeholder:"Small size"},null,8,["value","options"])]))}}),Ce=`<template>
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
`,Ae={class:"markdown-body"},Oe={__name:"auto-complete",setup(t,{expose:r}){return r({frontmatter:{}}),(f,l)=>{const a=ae("DemoBlock");return y(),O("div",Ae,[l[0]||(l[0]=N('<h1 id="autocomplete-" tabindex="-1">AutoComplete 自动完成</h1><p>输入框自动完成功能。</p><h2 id="" tabindex="-1">何时使用</h2><p>需要自动完成时。</p><ul><li>需要一个输入框而不是选择器。</li><li>需要输入建议/辅助提示。</li></ul><p>和 Select 的区别是：</p><ul><li>AutoComplete 是一个带提示的文本输入框，用户可以自由输入，关键词是辅助输入。</li><li>Select 是在限定的可选项中进行选择，关键词是选择。</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基础用法</h3><p>基本使用，通过 <code>options</code> 设置自动完成的数据源。</p>',10)),d(a,{title:"基础用法",source:p(ve)},{default:$(()=>[d(ce)]),_:1},8,["source"]),l[1]||(l[1]=g("h3",{id:"-3",tabindex:"-1"},"自定义选项",-1)),l[2]||(l[2]=g("p",null,[D("通过 "),g("code",null,"options"),D(" 的 "),g("code",null,"label"),D(" 属性自定义选项内容。")],-1)),d(a,{title:"自定义选项",source:p(me)},{default:$(()=>[d(fe)]),_:1},8,["source"]),l[3]||(l[3]=g("h3",{id:"-4",tabindex:"-1"},"邮箱补全",-1)),l[4]||(l[4]=g("p",null,"邮箱输入自动补全示例。",-1)),d(a,{title:"邮箱补全",source:p(be)},{default:$(()=>[d(ge)]),_:1},8,["source"]),l[5]||(l[5]=g("h3",{id:"-5",tabindex:"-1"},"不同尺寸",-1)),l[6]||(l[6]=g("p",null,"三种大小的输入框，大的用在表单中，中的为默认。",-1)),d(a,{title:"不同尺寸",source:p(Ce)},{default:$(()=>[d(xe)]),_:1},8,["source"]),l[7]||(l[7]=g("h3",{id:"-6",tabindex:"-1"},"高级特性",-1)),l[8]||(l[8]=g("p",null,"演示 defaultActiveFirstOption、notFoundContent 和自定义清除图标。",-1)),d(a,{title:"高级特性",source:p(re)},{default:$(()=>[d(ie)]),_:1},8,["source"]),l[9]||(l[9]=N('<h2 id="api" tabindex="-1">API</h2><h3 id="autocomplete-props" tabindex="-1">AutoComplete Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定当前选中的条目</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>指定默认选中的条目</td><td><code>string</code></td><td>-</td></tr><tr><td>options</td><td>数据源</td><td><code>AutoCompleteOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td>-</td></tr><tr><td>allowClear</td><td>支持清除，可传入对象自定义清除图标</td><td><code>boolean | { clearIcon?: VNodeChild }</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>filterOption</td><td>是否根据输入项进行筛选。当其为一个函数时，会接收 <code>inputValue</code> <code>option</code> 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false</td><td><code>boolean | ((inputValue: string, option: AutoCompleteOption) =&gt; boolean)</code></td><td><code>true</code></td></tr><tr><td>backfill</td><td>使用键盘选择选项的时候把选中项回填到输入框中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultActiveFirstOption</td><td>是否默认高亮第一个选项</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>defaultOpen</td><td>默认是否展开下拉菜单</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>open</td><td>是否展开下拉菜单（受控）</td><td><code>boolean</code></td><td>-</td></tr><tr><td>notFoundContent</td><td>当下拉列表为空时显示的内容</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="autocompleteoption" tabindex="-1">AutoCompleteOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td><code>string</code></td></tr><tr><td>label</td><td>选项的标签，若不设置则默认与 value 相同</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用该选项</td><td><code>boolean</code></td></tr></tbody></table><h3 id="autocomplete-events" tabindex="-1">AutoComplete Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选中 option，或 input 的 value 变化时，调用此函数</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>change</td><td>选中 option，或 input 的 value 变化时，调用此函数</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>select</td><td>被选中时调用，参数为选中项的 value 值</td><td><code>(value: string, option: AutoCompleteOption) =&gt; void</code></td></tr><tr><td>search</td><td>搜索补全项的时候调用</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>focus</td><td>获得焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清除按钮时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>openChange</td><td>下拉框展开/收起时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="autocomplete-methods" tabindex="-1">AutoComplete Methods</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>focus()</td><td>获取焦点</td></tr><tr><td>blur()</td><td>失去焦点</td></tr></tbody></table>',9))])}}};export{Oe as default};
