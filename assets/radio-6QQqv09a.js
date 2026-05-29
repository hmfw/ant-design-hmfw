import{k as f,I as B,m as $,z as p,L as C,j as n,c as R,x as S,w as y,g as x,G as s,M as b,i as k,d as l,E as g,B as w,h as U}from"./index-DvxRruME.js";import{c as z}from"./cls-S9IiI6wd.js";const G=Symbol("radio-group"),h=f({name:"Radio",props:{checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:Boolean,value:[String,Number,Boolean]},emits:["update:checked","change"],setup(a,{slots:i,emit:r}){const o=B("radio"),e=$(G,null),t=p(a.defaultChecked??!1);C(()=>a.checked,c=>{c!==void 0&&(t.value=c)});const d=R(()=>e?e.value===a.value:a.checked!==void 0?a.checked:t.value),u=R(()=>a.disabled||((e==null?void 0:e.disabled)??!1)),v=()=>{u.value||(e&&a.value!==void 0?e.onChange(a.value):(t.value=!0,r("update:checked",!0),r("change",!0)))};return()=>n("label",{class:z(`${o}-wrapper`,{[`${o}-wrapper-checked`]:d.value,[`${o}-wrapper-disabled`]:u.value})},[n("span",{class:z(o,{[`${o}-checked`]:d.value,[`${o}-disabled`]:u.value})},[n("input",{type:"radio",class:`${o}-input`,checked:d.value,disabled:u.value,onChange:v},null),n("span",{class:`${o}-inner`},null)]),i.default&&n("span",{class:`${o}-label`},[i.default()])])}}),m=f({name:"RadioGroup",props:{value:[String,Number,Boolean],defaultValue:[String,Number,Boolean],disabled:Boolean,options:Array},emits:["update:value","change"],setup(a,{slots:i,emit:r}){const o=B("radio"),e=p(a.defaultValue);C(()=>a.value,u=>{u!==void 0&&(e.value=u)});const t=R(()=>a.value!==void 0?a.value:e.value);return S(G,{get value(){return t.value},get disabled(){return a.disabled??!1},onChange:u=>{e.value=u,r("update:value",u),r("change",u)}}),()=>{var u;return a.options?n("div",{class:`${o}-group`},[a.options.map(v=>{const c=typeof v=="object"&&v!==null&&"value"in v?v:{label:String(v),value:v};return n(h,{key:String(c.value),value:c.value,disabled:c.disabled},{default:()=>c.label})})]):n("div",{class:`${o}-group`},[(u=i.default)==null?void 0:u.call(i)])}}}),V={style:{display:"flex","flex-direction":"column",gap:"8px"}},E=f({__name:"RadioBasic",setup(a){const i=p(!1),r=p(!1),o=p(!0);return(e,t)=>(y(),x("div",V,[n(s(h),{checked:i.value,"onUpdate:checked":t[0]||(t[0]=d=>i.value=d)},{default:b(()=>[...t[3]||(t[3]=[k("单选框",-1)])]),_:1},8,["checked"]),n(s(h),{checked:r.value,"onUpdate:checked":t[1]||(t[1]=d=>r.value=d),disabled:""},{default:b(()=>[...t[4]||(t[4]=[k("禁用单选框",-1)])]),_:1},8,["checked"]),n(s(h),{checked:o.value,"onUpdate:checked":t[2]||(t[2]=d=>o.value=d),disabled:""},{default:b(()=>[...t[5]||(t[5]=[k("禁用选中",-1)])]),_:1},8,["checked"]),l("p",null,"checked: "+g(i.value),1)]))}}),N=`<template>
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <Radio v-model:checked="checked">单选框</Radio>
    <Radio v-model:checked="checked2" disabled>禁用单选框</Radio>
    <Radio v-model:checked="checked3" disabled>禁用选中</Radio>
    <p>checked: {{ checked }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Radio } from 'ant-design-hmfw'

const checked = ref(false)
const checked2 = ref(false)
const checked3 = ref(true)
<\/script>
`,O={style:{display:"flex","flex-direction":"column",gap:"16px"}},A=f({__name:"RadioButton",setup(a){const i=p("middle"),r=p("middle"),o=p("large"),e=[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}];return(t,d)=>(y(),x("div",O,[l("div",null,[d[3]||(d[3]=l("p",{style:{"margin-bottom":"8px"}},"outline 样式（默认）：",-1)),n(s(m),{value:i.value,"onUpdate:value":d[0]||(d[0]=u=>i.value=u),options:e,"option-type":"button","button-style":"outline"},null,8,["value"])]),l("div",null,[d[4]||(d[4]=l("p",{style:{"margin-bottom":"8px"}},"solid 样式：",-1)),n(s(m),{value:r.value,"onUpdate:value":d[1]||(d[1]=u=>r.value=u),options:e,"option-type":"button","button-style":"solid"},null,8,["value"])]),l("div",null,[d[5]||(d[5]=l("p",{style:{"margin-bottom":"8px"}},"大尺寸：",-1)),n(s(m),{value:o.value,"onUpdate:value":d[2]||(d[2]=u=>o.value=u),options:e,"option-type":"button",size:"large"},null,8,["value"])]),l("p",null,"选中："+g(i.value),1)]))}}),D=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin-bottom: 8px;">outline 样式（默认）：</p>
      <RadioGroup
        v-model:value="size"
        :options="sizeOptions"
        option-type="button"
        button-style="outline"
      />
    </div>
    <div>
      <p style="margin-bottom: 8px;">solid 样式：</p>
      <RadioGroup
        v-model:value="size2"
        :options="sizeOptions"
        option-type="button"
        button-style="solid"
      />
    </div>
    <div>
      <p style="margin-bottom: 8px;">大尺寸：</p>
      <RadioGroup
        v-model:value="size3"
        :options="sizeOptions"
        option-type="button"
        size="large"
      />
    </div>
    <p>选中：{{ size }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup } from 'ant-design-hmfw'

const size = ref('middle')
const size2 = ref('middle')
const size3 = ref('large')

const sizeOptions = [
  { label: '大', value: 'large' },
  { label: '中', value: 'middle' },
  { label: '小', value: 'small' },
]
<\/script>
`,P={style:{display:"flex","flex-direction":"column",gap:"16px"}},j=f({__name:"RadioGroup",setup(a){const i=p("a"),r=p("b"),o=[{label:"选项 A",value:"a"},{label:"选项 B",value:"b"},{label:"选项 C",value:"c"},{label:"禁用选项",value:"d",disabled:!0}];return(e,t)=>(y(),x("div",P,[l("div",null,[t[2]||(t[2]=l("p",{style:{"margin-bottom":"8px"}},"水平排列：",-1)),n(s(m),{value:i.value,"onUpdate:value":t[0]||(t[0]=d=>i.value=d),options:o},null,8,["value"])]),l("div",null,[t[3]||(t[3]=l("p",{style:{"margin-bottom":"8px"}},"垂直排列：",-1)),n(s(m),{value:r.value,"onUpdate:value":t[1]||(t[1]=d=>r.value=d),options:o,direction:"vertical"},null,8,["value"])]),l("p",null,"value1: "+g(i.value)+"，value2: "+g(r.value),1)]))}}),I=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin-bottom: 8px;">水平排列：</p>
      <RadioGroup v-model:value="value1" :options="options" />
    </div>
    <div>
      <p style="margin-bottom: 8px;">垂直排列：</p>
      <RadioGroup v-model:value="value2" :options="options" direction="vertical" />
    </div>
    <p>value1: {{ value1 }}，value2: {{ value2 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup } from 'ant-design-hmfw'

const value1 = ref('a')
const value2 = ref('b')

const options = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' },
  { label: '禁用选项', value: 'd', disabled: true },
]
<\/script>
`,T={class:"markdown-body"},M={__name:"radio",setup(a,{expose:i}){return i({frontmatter:{}}),(o,e)=>{const t=w("DemoBlock");return y(),x("div",T,[e[0]||(e[0]=l("h1",{id:"radio-",tabindex:"-1"},"Radio 单选框",-1)),e[1]||(e[1]=l("p",null,"单选框。",-1)),e[2]||(e[2]=l("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=l("ul",null,[l("li",null,"用于在多个备选项中选中单个状态。"),l("li",null,"和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。")],-1)),e[4]||(e[4]=l("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=l("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=l("p",null,"最简单的用法。",-1)),n(t,{title:"基础用法",source:s(N)},{default:b(()=>[n(E)]),_:1},8,["source"]),e[7]||(e[7]=l("h3",{id:"radiogroup",tabindex:"-1"},"RadioGroup",-1)),e[8]||(e[8]=l("p",null,"一组互斥的 Radio 配合使用。",-1)),n(t,{title:"RadioGroup",source:s(I)},{default:b(()=>[n(j)]),_:1},8,["source"]),e[9]||(e[9]=l("h3",{id:"-3",tabindex:"-1"},"按钮样式",-1)),e[10]||(e[10]=l("p",null,"按钮样式的单选组合。",-1)),n(t,{title:"按钮样式",source:s(D)},{default:b(()=>[n(A)]),_:1},8,["source"]),e[11]||(e[11]=U('<h2 id="api" tabindex="-1">API</h2><h3 id="radio-props" tabindex="-1">Radio Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>禁用 Radio</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>value</td><td>根据 value 进行比较，判断是否选中</td><td><code>string | number</code></td><td>-</td></tr></tbody></table><h3 id="radiogroup-props" tabindex="-1">RadioGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>用于设置当前选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>options</td><td>以配置形式设置子元素</td><td><code>Array&lt;{ label: string; value: string | number; disabled?: boolean }&gt;</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>禁选所有子单选器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>direction</td><td>排列方向</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>optionType</td><td>用于设置 Radio options 类型</td><td><code>&#39;default&#39; | &#39;button&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>buttonStyle</td><td>RadioButton 的风格样式，目前有描边和填色两种风格</td><td><code>&#39;outline&#39; | &#39;solid&#39;</code></td><td><code>&#39;outline&#39;</code></td></tr><tr><td>size</td><td>大小，只对按钮样式生效</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr></tbody></table><h3 id="radio-events" tabindex="-1">Radio Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(event: Event) =&gt; void</code></td></tr></tbody></table><h3 id="radiogroup-events" tabindex="-1">RadioGroup Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr><tr><td>change</td><td>选项变化时的回调函数</td><td><code>(event: Event) =&gt; void</code></td></tr></tbody></table><h3 id="radio-slots" tabindex="-1">Radio Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>Radio 的内容</td></tr></tbody></table>',11))])}}};export{M as default};
