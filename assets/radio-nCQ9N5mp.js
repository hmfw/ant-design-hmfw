import{m as k,L as E,o as U,B as b,O,l as n,d as c,q as N,z as P,y as B,i as $,I as p,P as y,k as G,f as l,H as z,E as T,j as A}from"./index-BZUMvgWw.js";import{c as R}from"./cls-S9IiI6wd.js";const C=Symbol("radio-group"),w=k({name:"Radio",props:{checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:Boolean,value:[String,Number,Boolean],name:String,id:String},emits:["update:checked","change"],setup(t,{slots:o,emit:v}){const r=E("radio"),e=U(C,null),d=b(t.defaultChecked??!1);O(()=>t.checked,g=>{g!==void 0&&(d.value=g)});const u=c(()=>e?e.value.value===t.value:t.checked!==void 0?t.checked:d.value),f=c(()=>t.disabled||((e==null?void 0:e.disabled.value)??!1)),a=c(()=>(e==null?void 0:e.optionType.value)==="button"),s=c(()=>(e==null?void 0:e.block.value)??!1),i=c(()=>a.value?`${r}-button`:r),m=g=>{if(f.value)return;const V={target:{checked:!0,value:t.value},nativeEvent:g};e&&t.value!==void 0?e.onChange(t.value,g):(d.value=!0,v("update:checked",!0),v("change",V))},S=c(()=>t.name||(e==null?void 0:e.name.value));return()=>{var g;return a.value?n("label",{class:R(`${i.value}-wrapper`,{[`${i.value}-wrapper-checked`]:u.value,[`${i.value}-wrapper-disabled`]:f.value,[`${i.value}-wrapper-block`]:s.value}),id:t.id},[n("input",{type:"radio",class:`${i.value}-input`,checked:u.value,disabled:f.value,name:S.value,value:t.value,onChange:m},null),n("span",{class:`${i.value}-label`},[(g=o.default)==null?void 0:g.call(o)])]):n("label",{class:R(`${i.value}-wrapper`,{[`${i.value}-wrapper-checked`]:u.value,[`${i.value}-wrapper-disabled`]:f.value,[`${i.value}-wrapper-block`]:s.value}),id:t.id},[n("span",{class:R(i.value,{[`${i.value}-checked`]:u.value,[`${i.value}-disabled`]:f.value})},[n("input",{type:"radio",class:`${i.value}-input`,checked:u.value,disabled:f.value,name:S.value,value:t.value,onChange:m},null),n("span",{class:`${i.value}-inner`},null)]),o.default&&n("span",{class:`${i.value}-label`},[o.default()])])}}}),D=k({name:"RadioButton",props:{checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:Boolean,value:[String,Number,Boolean],name:String,id:String},emits:["update:checked","change"],setup(t,{slots:o,emit:v}){return U(C,null),()=>n(w,N(t,{"onUpdate:checked":r=>v("update:checked",r),onChange:r=>v("change",r)}),o)}}),h=k({name:"RadioGroup",props:{value:[String,Number,Boolean],defaultValue:[String,Number,Boolean],disabled:Boolean,buttonStyle:{type:String,default:"outline"},optionType:{type:String,default:"default"},size:{type:String,default:"middle"},name:String,block:Boolean,options:Array},emits:["update:value","change"],setup(t,{slots:o,emit:v}){const r=E("radio"),e=b(t.defaultValue);O(()=>t.value,s=>{s!==void 0&&(e.value=s)});const d=c(()=>t.value!==void 0?t.value:e.value),u=(s,i)=>{const m=d.value;t.value===void 0&&(e.value=s),s!==m&&(v("update:value",s),v("change",{target:{checked:!0,value:s},nativeEvent:i}))},f={value:d,disabled:c(()=>t.disabled??!1),name:c(()=>t.name),optionType:c(()=>t.optionType),block:c(()=>t.block),onChange:u};P(C,f);const a=c(()=>R(`${r}-group`,{[`${r}-group-${t.buttonStyle}`]:t.optionType==="button",[`${r}-group-${t.size}`]:t.size!=="middle",[`${r}-group-block`]:t.block}));return()=>{var s;return t.options?n("div",{class:a.value},[t.options.map(i=>{const m=typeof i=="object"&&i!==null&&"value"in i?i:{label:String(i),value:i};return n(w,{key:String(m.value),value:m.value,disabled:m.disabled,id:m.id},{default:()=>[m.label]})})]):n("div",{class:a.value},[(s=o.default)==null?void 0:s.call(o)])}}}),x=w;x.Group=h;x.Button=D;const j={style:{display:"flex","flex-direction":"column",gap:"8px"}},I=k({__name:"RadioBasic",setup(t){const o=b(!1),v=b(!1),r=b(!0);return(e,d)=>(B(),$("div",j,[n(p(x),{checked:o.value,"onUpdate:checked":d[0]||(d[0]=u=>o.value=u)},{default:y(()=>[...d[3]||(d[3]=[G("单选框",-1)])]),_:1},8,["checked"]),n(p(x),{checked:v.value,"onUpdate:checked":d[1]||(d[1]=u=>v.value=u),disabled:""},{default:y(()=>[...d[4]||(d[4]=[G("禁用单选框",-1)])]),_:1},8,["checked"]),n(p(x),{checked:r.value,"onUpdate:checked":d[2]||(d[2]=u=>r.value=u),disabled:""},{default:y(()=>[...d[5]||(d[5]=[G("禁用选中",-1)])]),_:1},8,["checked"]),l("p",null,"checked: "+z(o.value),1)]))}}),q=`<template>
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
`,H={style:{display:"flex","flex-direction":"column",gap:"16px"}},K=k({__name:"RadioButton",setup(t){const o=b("middle"),v=b("middle"),r=b("large"),e=b("small"),d=b("middle"),u=[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}];return(f,a)=>(B(),$("div",H,[l("div",null,[a[5]||(a[5]=l("p",{style:{"margin-bottom":"8px"}},"outline 样式（默认）：",-1)),n(p(h),{value:o.value,"onUpdate:value":a[0]||(a[0]=s=>o.value=s),options:u,"option-type":"button","button-style":"outline"},null,8,["value"])]),l("div",null,[a[6]||(a[6]=l("p",{style:{"margin-bottom":"8px"}},"solid 样式：",-1)),n(p(h),{value:v.value,"onUpdate:value":a[1]||(a[1]=s=>v.value=s),options:u,"option-type":"button","button-style":"solid"},null,8,["value"])]),l("div",null,[a[7]||(a[7]=l("p",{style:{"margin-bottom":"8px"}},"大尺寸：",-1)),n(p(h),{value:r.value,"onUpdate:value":a[2]||(a[2]=s=>r.value=s),options:u,"option-type":"button",size:"large"},null,8,["value"])]),l("div",null,[a[8]||(a[8]=l("p",{style:{"margin-bottom":"8px"}},"小尺寸：",-1)),n(p(h),{value:e.value,"onUpdate:value":a[3]||(a[3]=s=>e.value=s),options:u,"option-type":"button",size:"small"},null,8,["value"])]),l("div",null,[a[9]||(a[9]=l("p",{style:{"margin-bottom":"8px"}},"禁用状态：",-1)),n(p(h),{value:d.value,"onUpdate:value":a[4]||(a[4]=s=>d.value=s),options:u,"option-type":"button",disabled:""},null,8,["value"])]),l("p",null,"选中："+z(o.value),1)]))}}),L=`<template>
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
    <div>
      <p style="margin-bottom: 8px;">小尺寸：</p>
      <RadioGroup
        v-model:value="size4"
        :options="sizeOptions"
        option-type="button"
        size="small"
      />
    </div>
    <div>
      <p style="margin-bottom: 8px;">禁用状态：</p>
      <RadioGroup
        v-model:value="size5"
        :options="sizeOptions"
        option-type="button"
        disabled
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
const size4 = ref('small')
const size5 = ref('middle')

const sizeOptions = [
  { label: '大', value: 'large' },
  { label: '中', value: 'middle' },
  { label: '小', value: 'small' },
]
<\/script>
`,Y={style:{display:"flex","flex-direction":"column",gap:"16px"}},F=k({__name:"RadioGroup",setup(t){const o=b("a"),v=b("b"),r=[{label:"选项 A",value:"a"},{label:"选项 B",value:"b"},{label:"选项 C",value:"c"},{label:"禁用选项",value:"d",disabled:!0}];return(e,d)=>(B(),$("div",Y,[l("div",null,[d[2]||(d[2]=l("p",{style:{"margin-bottom":"8px"}},"水平排列：",-1)),n(p(h),{value:o.value,"onUpdate:value":d[0]||(d[0]=u=>o.value=u),options:r},null,8,["value"])]),l("div",null,[d[3]||(d[3]=l("p",{style:{"margin-bottom":"8px"}},"垂直排列：",-1)),n(p(h),{value:v.value,"onUpdate:value":d[1]||(d[1]=u=>v.value=u),options:r,direction:"vertical"},null,8,["value"])]),l("p",null,"value1: "+z(o.value)+"，value2: "+z(v.value),1)]))}}),J=`<template>
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
`,M={class:"markdown-body"},X={__name:"radio",setup(t,{expose:o}){return o({frontmatter:{}}),(r,e)=>{const d=T("DemoBlock");return B(),$("div",M,[e[0]||(e[0]=l("h1",{id:"radio-",tabindex:"-1"},"Radio 单选框",-1)),e[1]||(e[1]=l("p",null,"单选框。",-1)),e[2]||(e[2]=l("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=l("ul",null,[l("li",null,"用于在多个备选项中选中单个状态。"),l("li",null,"和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。")],-1)),e[4]||(e[4]=l("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=l("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=l("p",null,"最简单的用法。",-1)),n(d,{title:"基础用法",source:p(q)},{default:y(()=>[n(I)]),_:1},8,["source"]),e[7]||(e[7]=l("h3",{id:"radiogroup",tabindex:"-1"},"RadioGroup",-1)),e[8]||(e[8]=l("p",null,"一组互斥的 Radio 配合使用。",-1)),n(d,{title:"RadioGroup",source:p(J)},{default:y(()=>[n(F)]),_:1},8,["source"]),e[9]||(e[9]=l("h3",{id:"-3",tabindex:"-1"},"按钮样式",-1)),e[10]||(e[10]=l("p",null,"按钮样式的单选组合。",-1)),n(d,{title:"按钮样式",source:p(L)},{default:y(()=>[n(K)]),_:1},8,["source"]),e[11]||(e[11]=A('<h2 id="api" tabindex="-1">API</h2><h3 id="radio-props" tabindex="-1">Radio Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>禁用 Radio</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>value</td><td>根据 value 进行比较，判断是否选中</td><td><code>string | number</code></td><td>-</td></tr></tbody></table><h3 id="radiogroup-props" tabindex="-1">RadioGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>用于设置当前选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>options</td><td>以配置形式设置子元素</td><td><code>Array&lt;{ label: string; value: string | number; disabled?: boolean }&gt;</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>禁选所有子单选器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>direction</td><td>排列方向</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>optionType</td><td>用于设置 Radio options 类型</td><td><code>&#39;default&#39; | &#39;button&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>buttonStyle</td><td>RadioButton 的风格样式，目前有描边和填色两种风格</td><td><code>&#39;outline&#39; | &#39;solid&#39;</code></td><td><code>&#39;outline&#39;</code></td></tr><tr><td>size</td><td>大小，只对按钮样式生效</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr></tbody></table><h3 id="radio-events" tabindex="-1">Radio Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(event: Event) =&gt; void</code></td></tr></tbody></table><h3 id="radiogroup-events" tabindex="-1">RadioGroup Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr><tr><td>change</td><td>选项变化时的回调函数</td><td><code>(event: Event) =&gt; void</code></td></tr></tbody></table><h3 id="radio-slots" tabindex="-1">Radio Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>Radio 的内容</td></tr></tbody></table>',11))])}}};export{X as default};
