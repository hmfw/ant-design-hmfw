import{k as f,I as G,m as S,z as h,L as $,j as r,c as y,x as V,w as g,g as C,G as b,M as p,i as v,d as o,E as k,B as D,h as O}from"./index-BNHhPN23.js";import{c as A}from"./cls-S9IiI6wd.js";const w=Symbol("checkbox-group"),x=f({name:"Checkbox",props:{checked:{type:Boolean,default:void 0},defaultChecked:Boolean,indeterminate:Boolean,disabled:Boolean,value:[String,Number,Boolean]},emits:["update:checked","change"],setup(a,{slots:c,emit:u}){const d=G("checkbox"),e=S(w,null),t=h(a.defaultChecked??!1);$(()=>a.checked,s=>{s!==void 0&&(t.value=s)});const l=y(()=>e?e.value.includes(a.value):a.checked!==void 0?a.checked:t.value),n=y(()=>a.disabled||((e==null?void 0:e.disabled)??!1)),i=s=>{if(n.value)return;const m=!l.value;e&&a.value!==void 0?e.onChange(a.value,m):(t.value=m,u("update:checked",m),u("change",s))};return()=>r("label",{class:A(`${d}-wrapper`,{[`${d}-wrapper-checked`]:l.value,[`${d}-wrapper-disabled`]:n.value})},[r("span",{class:A(d,{[`${d}-checked`]:l.value,[`${d}-indeterminate`]:a.indeterminate,[`${d}-disabled`]:n.value})},[r("input",{type:"checkbox",class:`${d}-input`,checked:l.value,disabled:n.value,onChange:i},null),r("span",{class:`${d}-inner`},null)]),c.default&&r("span",{class:`${d}-label`},[c.default()])])}}),B=f({name:"CheckboxGroup",props:{value:Array,defaultValue:Array,disabled:Boolean,options:Array},emits:["update:value","change"],setup(a,{slots:c,emit:u}){const d=G("checkbox"),e=h(a.defaultValue??[]);$(()=>a.value,n=>{n!==void 0&&(e.value=n)});const t=y(()=>a.value!==void 0?a.value:e.value);return V(w,{get value(){return t.value},get disabled(){return a.disabled??!1},onChange:(n,i)=>{const s=i?[...t.value,n]:t.value.filter(m=>m!==n);e.value=s,u("update:value",s),u("change",s)}}),()=>{var n;return a.options?r("div",{class:`${d}-group`},[a.options.map(i=>{const s=typeof i=="object"&&i!==null&&"value"in i?i:{label:String(i),value:i};return r(x,{key:String(s.value),value:s.value,disabled:s.disabled},{default:()=>s.label})})]):r("div",{class:`${d}-group`},[(n=c.default)==null?void 0:n.call(c)])}}}),U={style:{display:"flex","flex-direction":"column",gap:"8px"}},E=f({__name:"CheckboxBasic",setup(a){const c=h(!1),u=h(!1),d=h(!0);return(e,t)=>(g(),C("div",U,[r(b(x),{checked:c.value,"onUpdate:checked":t[0]||(t[0]=l=>c.value=l)},{default:p(()=>[...t[3]||(t[3]=[v("普通复选框",-1)])]),_:1},8,["checked"]),r(b(x),{checked:u.value,"onUpdate:checked":t[1]||(t[1]=l=>u.value=l),disabled:""},{default:p(()=>[...t[4]||(t[4]=[v("禁用复选框",-1)])]),_:1},8,["checked"]),r(b(x),{checked:d.value,"onUpdate:checked":t[2]||(t[2]=l=>d.value=l),disabled:""},{default:p(()=>[...t[5]||(t[5]=[v("禁用选中",-1)])]),_:1},8,["checked"]),o("p",null,"checked1: "+k(c.value)+", checked2: "+k(u.value)+", checked3: "+k(d.value),1)]))}}),L=`<template>
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
`,N={style:{"border-bottom":"1px solid #e8e8e8","padding-bottom":"8px","margin-bottom":"8px"}},P={style:{"margin-top":"8px"}},F=f({__name:"CheckboxCheckAll",setup(a){const c=[{label:"选项 A",value:"A"},{label:"选项 B",value:"B"},{label:"选项 C",value:"C"},{label:"选项 D",value:"D"}],u=h(["A","B"]),d=h(!1),e=h(!0),t=n=>{u.value=n?c.map(i=>i.value):[],e.value=!1},l=n=>{e.value=!!n.length&&n.length<c.length,d.value=n.length===c.length};return(n,i)=>(g(),C("div",null,[o("div",N,[r(b(x),{checked:d.value,"onUpdate:checked":i[0]||(i[0]=s=>d.value=s),indeterminate:e.value,onChange:t},{default:p(()=>[...i[2]||(i[2]=[v(" 全选 ",-1)])]),_:1},8,["checked","indeterminate"])]),r(b(B),{value:u.value,"onUpdate:value":i[1]||(i[1]=s=>u.value=s),options:c,onChange:l},null,8,["value"]),o("p",P,"已选："+k(u.value),1)]))}}),j=`<template>
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
`,z={style:{display:"flex","flex-direction":"column",gap:"16px"}},_=f({__name:"CheckboxGroup",setup(a){const c=h(["apple"]),u=h([]),d=[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橙子",value:"orange"},{label:"葡萄",value:"grape",disabled:!0}],e=[{label:"红色",value:"red"},{label:"绿色",value:"green"},{label:"蓝色",value:"blue"}];return(t,l)=>(g(),C("div",z,[o("div",null,[l[2]||(l[2]=o("p",{style:{"margin-bottom":"8px"}},"水平排列：",-1)),r(b(B),{value:c.value,"onUpdate:value":l[0]||(l[0]=n=>c.value=n),options:d},null,8,["value"])]),o("div",null,[l[3]||(l[3]=o("p",{style:{"margin-bottom":"8px"}},"垂直排列：",-1)),r(b(B),{value:u.value,"onUpdate:value":l[1]||(l[1]=n=>u.value=n),options:e,direction:"vertical"},null,8,["value"])]),o("p",null,"水果："+k(c.value)+"，颜色："+k(u.value),1)]))}}),I=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin-bottom: 8px;">水平排列：</p>
      <CheckboxGroup
        v-model:value="selectedFruits"
        :options="fruitOptions"
      />
    </div>
    <div>
      <p style="margin-bottom: 8px;">垂直排列：</p>
      <CheckboxGroup
        v-model:value="selectedColors"
        :options="colorOptions"
        direction="vertical"
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
`,K={class:"markdown-body"},R={__name:"checkbox",setup(a,{expose:c}){return c({frontmatter:{}}),(d,e)=>{const t=D("DemoBlock");return g(),C("div",K,[e[0]||(e[0]=o("h1",{id:"checkbox-",tabindex:"-1"},"Checkbox 多选框",-1)),e[1]||(e[1]=o("p",null,"多选框。",-1)),e[2]||(e[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=o("ul",null,[o("li",null,"在一组可选项中进行多项选择时。"),o("li",null,"单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。")],-1)),e[4]||(e[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=o("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=o("p",null,"简单的 checkbox。",-1)),r(t,{title:"基础用法",source:b(L)},{default:p(()=>[r(E)]),_:1},8,["source"]),e[7]||(e[7]=o("h3",{id:"checkboxgroup",tabindex:"-1"},"CheckboxGroup",-1)),e[8]||(e[8]=o("p",null,"方便的从数组生成 Checkbox 组。",-1)),r(t,{title:"CheckboxGroup",source:b(I)},{default:p(()=>[r(_)]),_:1},8,["source"]),e[9]||(e[9]=o("h3",{id:"-3",tabindex:"-1"},"全选",-1)),e[10]||(e[10]=o("p",null,[v("在实现全选效果时，你可能会用到 "),o("code",null,"indeterminate"),v(" 属性。")],-1)),r(t,{title:"全选",source:b(j)},{default:p(()=>[r(F)]),_:1},8,["source"]),e[11]||(e[11]=O('<h2 id="api" tabindex="-1">API</h2><h3 id="checkbox-props" tabindex="-1">Checkbox Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>失效状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>indeterminate</td><td>设置 indeterminate 状态，只负责样式控制</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>value</td><td>checkbox 的 value，在 CheckboxGroup 中使用</td><td><code>string | number</code></td><td>-</td></tr></tbody></table><h3 id="checkboxgroup-props" tabindex="-1">CheckboxGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定选中的选项</td><td><code>(string | number)[]</code></td><td><code>[]</code></td></tr><tr><td>defaultValue</td><td>默认选中的选项</td><td><code>(string | number)[]</code></td><td><code>[]</code></td></tr><tr><td>options</td><td>指定可选项</td><td><code>Array&lt;{ label: string; value: string | number; disabled?: boolean }&gt;</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>整组失效</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>direction</td><td>排列方向</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr></tbody></table><h3 id="checkbox-events" tabindex="-1">Checkbox Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数（Checkbox）</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(event: Event) =&gt; void</code></td></tr></tbody></table><h3 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>变化时回调函数</td><td><code>(value: (string | number)[]) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(value: (string | number)[]) =&gt; void</code></td></tr></tbody></table><h3 id="checkbox-slots" tabindex="-1">Checkbox Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>checkbox 的内容</td></tr></tbody></table>',11))])}}};export{R as default};
