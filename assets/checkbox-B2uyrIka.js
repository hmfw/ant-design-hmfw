import{m as A,L as P,o as M,B as v,O as F,v as L,u as I,l as u,d as B,z as j,y as $,i as w,I as k,P as g,k as C,f as a,H as y,E as T,j as _}from"./index-BZUMvgWw.js";import{c as E}from"./cls-S9IiI6wd.js";const U=Symbol("checkbox-group"),G=A({name:"Checkbox",props:{checked:{type:Boolean,default:void 0},defaultChecked:Boolean,indeterminate:Boolean,disabled:Boolean,value:[String,Number,Boolean],autoFocus:Boolean,name:String,id:String,title:String,tabIndex:Number,required:Boolean,skipGroup:Boolean},emits:["update:checked","change","click","mouseenter","mouseleave","keypress","keydown","focus","blur"],setup(e,{slots:c,emit:l,expose:i}){const t=P("checkbox"),d=M(U,null),n=v(null),s=v(e.defaultChecked??!1);F(()=>e.checked,r=>{r!==void 0&&(s.value=r)});const h=B(()=>!e.skipGroup&&d?d.value.includes(e.value):e.checked!==void 0?e.checked:s.value),p=B(()=>e.disabled||!e.skipGroup&&(d==null?void 0:d.disabled)||!1);L(()=>{!e.skipGroup&&d&&e.value!==void 0&&d.registerValue(e.value),e.autoFocus&&n.value&&n.value.focus(),n.value&&(n.value.indeterminate=e.indeterminate??!1)}),I(()=>{!e.skipGroup&&d&&e.value!==void 0&&d.cancelValue(e.value)}),F(()=>e.indeterminate,r=>{n.value&&(n.value.indeterminate=r??!1)});const V=r=>{if(p.value)return;const S=r.target.checked,K={target:{checked:S,value:e.value},nativeEvent:r};!e.skipGroup&&d&&e.value!==void 0?d.onChange(e.value,S):(e.checked===void 0&&(s.value=S),l("update:checked",S)),l("change",K)},o=r=>{l("click",r)},m=r=>{l("mouseenter",r)},b=r=>{l("mouseleave",r)},f=r=>{l("keypress",r)},x=r=>{l("keydown",r)},O=r=>{l("focus",r)},N=r=>{l("blur",r)};i({input:n});const D=B(()=>!e.skipGroup&&(d!=null&&d.name)?d.name:e.name);return()=>u("label",{class:E(`${t}-wrapper`,{[`${t}-wrapper-checked`]:h.value,[`${t}-wrapper-disabled`]:p.value}),onClick:o,onMouseenter:m,onMouseleave:b},[u("span",{class:E(t,{[`${t}-checked`]:h.value,[`${t}-indeterminate`]:e.indeterminate,[`${t}-disabled`]:p.value})},[u("input",{ref:n,type:"checkbox",class:`${t}-input`,checked:h.value,disabled:p.value||void 0,name:D.value,id:e.id,title:e.title,tabindex:e.tabIndex,required:e.required||void 0,value:e.value,onChange:V,onKeypress:f,onKeydown:x,onFocus:O,onBlur:N},null),u("span",{class:`${t}-inner`},null)]),c.default&&u("span",{class:`${t}-label`},[c.default()])])}}),q=A({name:"CheckboxGroup",props:{value:Array,defaultValue:Array,disabled:Boolean,name:String,options:Array,style:Object,className:String},emits:["update:value","change"],setup(e,{slots:c,emit:l}){const i=P("checkbox"),t=v(e.defaultValue??[]),d=v([]);F(()=>e.value,o=>{o!==void 0&&(t.value=o)});const n=B(()=>e.value!==void 0?e.value:t.value);j(U,{get value(){return n.value},get disabled(){return e.disabled??!1},get name(){return e.name},onChange:(o,m)=>{const f=(m?[...n.value,o]:n.value.filter(x=>x!==o)).filter(x=>d.value.includes(x)).sort((x,O)=>{const N=d.value.indexOf(x),D=d.value.indexOf(O);return N-D});t.value=f,l("update:value",f),l("change",f)},registerValue:o=>{d.value.includes(o)||d.value.push(o)},cancelValue:o=>{d.value=d.value.filter(m=>m!==o)}});const V=B(()=>e.options?e.options.map(o=>typeof o=="object"&&o!==null&&"value"in o?o:{label:String(o),value:o}):[]);return()=>{var m;const o=E(`${i}-group`,e.className);return e.options&&e.options.length>0?u("div",{class:o,style:e.style},[V.value.map(b=>{const f=b.disabled!==void 0?b.disabled:e.disabled;return u(G,{key:String(b.value),value:b.value,disabled:f,style:b.style,class:E(`${i}-group-item`,b.className),title:b.title,id:b.id,required:b.required},{default:()=>b.label})})]):u("div",{class:o,style:e.style},[(m=c.default)==null?void 0:m.call(c)])}}}),z={style:{display:"flex","flex-direction":"column",gap:"8px"}},H=A({__name:"CheckboxBasic",setup(e){const c=v(!1),l=v(!1),i=v(!0);return(t,d)=>($(),w("div",z,[u(k(G),{checked:c.value,"onUpdate:checked":d[0]||(d[0]=n=>c.value=n)},{default:g(()=>[...d[3]||(d[3]=[C("普通复选框",-1)])]),_:1},8,["checked"]),u(k(G),{checked:l.value,"onUpdate:checked":d[1]||(d[1]=n=>l.value=n),disabled:""},{default:g(()=>[...d[4]||(d[4]=[C("禁用复选框",-1)])]),_:1},8,["checked"]),u(k(G),{checked:i.value,"onUpdate:checked":d[2]||(d[2]=n=>i.value=n),disabled:""},{default:g(()=>[...d[5]||(d[5]=[C("禁用选中",-1)])]),_:1},8,["checked"]),a("p",null,"checked1: "+y(c.value)+", checked2: "+y(l.value)+", checked3: "+y(i.value),1)]))}}),R=`<template>
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <Checkbox v-model:checked="checked1">普通复选框</Checkbox>
    <Checkbox v-model:checked="checked2" disabled>禁用复选框</Checkbox>
    <Checkbox v-model:checked="checked3" disabled>禁用选中</Checkbox>
    <p>checked1: {{ checked1 }}, checked2: {{ checked2 }}, checked3: {{ checked3 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from 'ant-design-hmfw'

const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(true)
<\/script>
`,X={style:{"border-bottom":"1px solid #e8e8e8","padding-bottom":"8px","margin-bottom":"8px"}},Y={style:{"margin-top":"8px"}},J=A({__name:"CheckboxCheckAll",setup(e){const c=[{label:"选项 A",value:"A"},{label:"选项 B",value:"B"},{label:"选项 C",value:"C"},{label:"选项 D",value:"D"}],l=v(["A","B"]),i=v(!1),t=v(!0),d=s=>{l.value=s?c.map(h=>h.value):[],t.value=!1},n=s=>{t.value=!!s.length&&s.length<c.length,i.value=s.length===c.length};return(s,h)=>($(),w("div",null,[a("div",X,[u(k(G),{checked:i.value,"onUpdate:checked":h[0]||(h[0]=p=>i.value=p),indeterminate:t.value,onChange:d},{default:g(()=>[...h[2]||(h[2]=[C(" 全选 ",-1)])]),_:1},8,["checked","indeterminate"])]),u(k(q),{value:l.value,"onUpdate:value":h[1]||(h[1]=p=>l.value=p),options:c,onChange:n},null,8,["value"]),a("p",Y,"已选："+y(l.value),1)]))}}),Q=`<template>
  <div>
    <div style="border-bottom: 1px solid #e8e8e8; padding-bottom: 8px; margin-bottom: 8px;">
      <Checkbox
        v-model:checked="checkAll"
        :indeterminate="indeterminate"
        @change="handleCheckAllChange"
      >
        全选
      </Checkbox>
    </div>
    <CheckboxGroup
      v-model:value="checkedList"
      :options="options"
      @change="handleGroupChange"
    />
    <p style="margin-top: 8px;">已选：{{ checkedList }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, CheckboxGroup } from 'ant-design-hmfw'

const options = [
  { label: '选项 A', value: 'A' },
  { label: '选项 B', value: 'B' },
  { label: '选项 C', value: 'C' },
  { label: '选项 D', value: 'D' },
]

const checkedList = ref<string[]>(['A', 'B'])
const checkAll = ref(false)
const indeterminate = ref(true)

const handleCheckAllChange = (checked: boolean) => {
  checkedList.value = checked ? options.map(o => o.value) : []
  indeterminate.value = false
}

const handleGroupChange = (list: string[]) => {
  indeterminate.value = !!list.length && list.length < options.length
  checkAll.value = list.length === options.length
}
<\/script>
`,W={style:{display:"flex","flex-direction":"column",gap:"16px"}},Z=A({__name:"CheckboxGroup",setup(e){const c=v(["apple"]),l=v([]),i=[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橙子",value:"orange"},{label:"葡萄",value:"grape",disabled:!0}],t=[{label:"红色",value:"red"},{label:"绿色",value:"green"},{label:"蓝色",value:"blue"}];return(d,n)=>($(),w("div",W,[a("div",null,[n[2]||(n[2]=a("p",{style:{"margin-bottom":"8px"}},"水平排列：",-1)),u(k(q),{value:c.value,"onUpdate:value":n[0]||(n[0]=s=>c.value=s),options:i},null,8,["value"])]),a("div",null,[n[3]||(n[3]=a("p",{style:{"margin-bottom":"8px"}},"垂直排列（通过 style 控制）：",-1)),u(k(q),{value:l.value,"onUpdate:value":n[1]||(n[1]=s=>l.value=s),options:t,style:{display:"flex",flexDirection:"column",gap:"8px"}},null,8,["value"])]),a("p",null,"水果："+y(c.value)+"，颜色："+y(l.value),1)]))}}),ee=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin-bottom: 8px;">水平排列：</p>
      <CheckboxGroup
        v-model:value="selectedFruits"
        :options="fruitOptions"
      />
    </div>
    <div>
      <p style="margin-bottom: 8px;">垂直排列（通过 style 控制）：</p>
      <CheckboxGroup
        v-model:value="selectedColors"
        :options="colorOptions"
        :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }"
      />
    </div>
    <p>水果：{{ selectedFruits }}，颜色：{{ selectedColors }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckboxGroup } from 'ant-design-hmfw'

const selectedFruits = ref<string[]>(['apple'])
const selectedColors = ref<string[]>([])

const fruitOptions = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄', value: 'grape', disabled: true },
]

const colorOptions = [
  { label: '红色', value: 'red' },
  { label: '绿色', value: 'green' },
  { label: '蓝色', value: 'blue' },
]
<\/script>
`,te={class:"markdown-body"},oe={__name:"checkbox",setup(e,{expose:c}){return c({frontmatter:{}}),(i,t)=>{const d=T("DemoBlock");return $(),w("div",te,[t[0]||(t[0]=a("h1",{id:"checkbox-",tabindex:"-1"},"Checkbox 多选框",-1)),t[1]||(t[1]=a("p",null,"多选框。",-1)),t[2]||(t[2]=a("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=a("ul",null,[a("li",null,"在一组可选项中进行多项选择时。"),a("li",null,"单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。")],-1)),t[4]||(t[4]=a("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=a("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=a("p",null,"简单的 checkbox。",-1)),u(d,{title:"基础用法",source:k(R)},{default:g(()=>[u(H)]),_:1},8,["source"]),t[7]||(t[7]=a("h3",{id:"checkboxgroup",tabindex:"-1"},"CheckboxGroup",-1)),t[8]||(t[8]=a("p",null,"方便的从数组生成 Checkbox 组。",-1)),u(d,{title:"CheckboxGroup",source:k(ee)},{default:g(()=>[u(Z)]),_:1},8,["source"]),t[9]||(t[9]=a("h3",{id:"-3",tabindex:"-1"},"全选",-1)),t[10]||(t[10]=a("p",null,[C("在实现全选效果时，你可能会用到 "),a("code",null,"indeterminate"),C(" 属性。")],-1)),u(d,{title:"全选",source:k(Q)},{default:g(()=>[u(J)]),_:1},8,["source"]),t[11]||(t[11]=_('<h2 id="api" tabindex="-1">API</h2><h3 id="checkbox-props" tabindex="-1">Checkbox Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>失效状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>indeterminate</td><td>设置 indeterminate 状态，只负责样式控制</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>value</td><td>checkbox 的 value，在 CheckboxGroup 中使用</td><td><code>string | number | boolean</code></td><td>-</td></tr><tr><td>autoFocus</td><td>自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>input[type=“checkbox”] 的 name 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>id</td><td>input[type=“checkbox”] 的 id 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>input[type=“checkbox”] 的 title 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>tabIndex</td><td>input[type=“checkbox”] 的 tabindex 属性</td><td><code>number</code></td><td>-</td></tr><tr><td>required</td><td>input[type=“checkbox”] 的 required 属性</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>skipGroup</td><td>在 CheckboxGroup 中时，跳过组控制</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="checkboxgroup-props" tabindex="-1">CheckboxGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定选中的选项</td><td><code>(string | number | boolean)[]</code></td><td><code>[]</code></td></tr><tr><td>defaultValue</td><td>默认选中的选项</td><td><code>(string | number | boolean)[]</code></td><td><code>[]</code></td></tr><tr><td>options</td><td>指定可选项</td><td><code>Array&lt;string | number | CheckboxOptionType&gt;</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>整组失效</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>CheckboxGroup 下所有 input[type=“checkbox”] 的 name 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="checkboxoptiontype" tabindex="-1">CheckboxOptionType</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>label</td><td>选项显示文本</td><td><code>string</code></td></tr><tr><td>value</td><td>选项值</td><td><code>string | number | boolean</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td></tr><tr><td>title</td><td>title 属性</td><td><code>string</code></td></tr><tr><td>id</td><td>id 属性</td><td><code>string</code></td></tr><tr><td>required</td><td>required 属性</td><td><code>boolean</code></td></tr></tbody></table><h3 id="checkbox-events" tabindex="-1">Checkbox Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数（Checkbox）</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(event: CheckboxChangeEvent) =&gt; void</code></td></tr><tr><td>click</td><td>点击时回调函数</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>mouseenter</td><td>鼠标移入时回调函数</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>mouseleave</td><td>鼠标移出时回调函数</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>focus</td><td>获得焦点时回调函数</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时回调函数</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>keypress</td><td>按键时回调函数</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr><tr><td>keydown</td><td>按键按下时回调函数</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr></tbody></table><h3 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>变化时回调函数</td><td><code>(value: (string | number | boolean)[]) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(value: (string | number | boolean)[]) =&gt; void</code></td></tr></tbody></table><h3 id="checkbox-slots" tabindex="-1">Checkbox Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>checkbox 的内容</td></tr></tbody></table>',13))])}}};export{oe as default};
