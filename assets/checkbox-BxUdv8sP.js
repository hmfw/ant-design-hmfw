import{C as v,a as f}from"./Checkbox-DK8T4LOI.js";import{m as C,y as k,i as x,l as c,I as s,P as p,k as h,f as e,H as b,B as u,E as y,j as G}from"./index-B2-fWtt3.js";import"./cls-S9IiI6wd.js";const A={style:{display:"flex","flex-direction":"column",gap:"8px"}},B=C({__name:"CheckboxBasic",setup(m){const n=u(!1),l=u(!1),r=u(!0);return(t,d)=>(k(),x("div",A,[c(s(v),{checked:n.value,"onUpdate:checked":d[0]||(d[0]=o=>n.value=o)},{default:p(()=>[...d[3]||(d[3]=[h("普通复选框",-1)])]),_:1},8,["checked"]),c(s(v),{checked:l.value,"onUpdate:checked":d[1]||(d[1]=o=>l.value=o),disabled:""},{default:p(()=>[...d[4]||(d[4]=[h("禁用复选框",-1)])]),_:1},8,["checked"]),c(s(v),{checked:r.value,"onUpdate:checked":d[2]||(d[2]=o=>r.value=o),disabled:""},{default:p(()=>[...d[5]||(d[5]=[h("禁用选中",-1)])]),_:1},8,["checked"]),e("p",null,"checked1: "+b(n.value)+", checked2: "+b(l.value)+", checked3: "+b(r.value),1)]))}}),E=`<template>
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
`,S={style:{"border-bottom":"1px solid #e8e8e8","padding-bottom":"8px","margin-bottom":"8px"}},D={style:{"margin-top":"8px"}},w=C({__name:"CheckboxCheckAll",setup(m){const n=[{label:"选项 A",value:"A"},{label:"选项 B",value:"B"},{label:"选项 C",value:"C"},{label:"选项 D",value:"D"}],l=u(["A","B"]),r=u(!1),t=u(!0),d=a=>{l.value=a?n.map(i=>i.value):[],t.value=!1},o=a=>{t.value=!!a.length&&a.length<n.length,r.value=a.length===n.length};return(a,i)=>(k(),x("div",null,[e("div",S,[c(s(v),{checked:r.value,"onUpdate:checked":i[0]||(i[0]=g=>r.value=g),indeterminate:t.value,onChange:d},{default:p(()=>[...i[2]||(i[2]=[h(" 全选 ",-1)])]),_:1},8,["checked","indeterminate"])]),c(s(f),{value:l.value,"onUpdate:value":i[1]||(i[1]=g=>l.value=g),options:n,onChange:o},null,8,["value"]),e("p",D,"已选："+b(l.value),1)]))}}),O=`<template>
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
`,F={style:{display:"flex","flex-direction":"column",gap:"16px"}},U=C({__name:"CheckboxGroup",setup(m){const n=u(["apple"]),l=u([]),r=[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橙子",value:"orange"},{label:"葡萄",value:"grape",disabled:!0}],t=[{label:"红色",value:"red"},{label:"绿色",value:"green"},{label:"蓝色",value:"blue"}];return(d,o)=>(k(),x("div",F,[e("div",null,[o[2]||(o[2]=e("p",{style:{"margin-bottom":"8px"}},"水平排列：",-1)),c(s(f),{value:n.value,"onUpdate:value":o[0]||(o[0]=a=>n.value=a),options:r},null,8,["value"])]),e("div",null,[o[3]||(o[3]=e("p",{style:{"margin-bottom":"8px"}},"垂直排列（通过 style 控制）：",-1)),c(s(f),{value:l.value,"onUpdate:value":o[1]||(o[1]=a=>l.value=a),options:t,style:{display:"flex",flexDirection:"column",gap:"8px"}},null,8,["value"])]),e("p",null,"水果："+b(n.value)+"，颜色："+b(l.value),1)]))}}),N=`<template>
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
`,P={class:"markdown-body"},q={__name:"checkbox",setup(m,{expose:n}){return n({frontmatter:{}}),(r,t)=>{const d=y("DemoBlock");return k(),x("div",P,[t[0]||(t[0]=e("h1",{id:"checkbox-",tabindex:"-1"},"Checkbox 多选框",-1)),t[1]||(t[1]=e("p",null,"多选框。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"在一组可选项中进行多项选择时。"),e("li",null,"单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。")],-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"简单的 checkbox。",-1)),c(d,{title:"基础用法",source:s(E)},{default:p(()=>[c(B)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"checkboxgroup",tabindex:"-1"},"CheckboxGroup",-1)),t[8]||(t[8]=e("p",null,"方便的从数组生成 Checkbox 组。",-1)),c(d,{title:"CheckboxGroup",source:s(N)},{default:p(()=>[c(U)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-3",tabindex:"-1"},"全选",-1)),t[10]||(t[10]=e("p",null,[h("在实现全选效果时，你可能会用到 "),e("code",null,"indeterminate"),h(" 属性。")],-1)),c(d,{title:"全选",source:s(O)},{default:p(()=>[c(w)]),_:1},8,["source"]),t[11]||(t[11]=G('<h2 id="api" tabindex="-1">API</h2><h3 id="checkbox-props" tabindex="-1">Checkbox Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>失效状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>indeterminate</td><td>设置 indeterminate 状态，只负责样式控制</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>value</td><td>checkbox 的 value，在 CheckboxGroup 中使用</td><td><code>string | number | boolean</code></td><td>-</td></tr><tr><td>autoFocus</td><td>自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>input[type=“checkbox”] 的 name 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>id</td><td>input[type=“checkbox”] 的 id 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>input[type=“checkbox”] 的 title 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>tabIndex</td><td>input[type=“checkbox”] 的 tabindex 属性</td><td><code>number</code></td><td>-</td></tr><tr><td>required</td><td>input[type=“checkbox”] 的 required 属性</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>skipGroup</td><td>在 CheckboxGroup 中时，跳过组控制</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="checkboxgroup-props" tabindex="-1">CheckboxGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定选中的选项</td><td><code>(string | number | boolean)[]</code></td><td><code>[]</code></td></tr><tr><td>defaultValue</td><td>默认选中的选项</td><td><code>(string | number | boolean)[]</code></td><td><code>[]</code></td></tr><tr><td>options</td><td>指定可选项</td><td><code>Array&lt;string | number | CheckboxOptionType&gt;</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>整组失效</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>CheckboxGroup 下所有 input[type=“checkbox”] 的 name 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="checkboxoptiontype" tabindex="-1">CheckboxOptionType</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>label</td><td>选项显示文本</td><td><code>string</code></td></tr><tr><td>value</td><td>选项值</td><td><code>string | number | boolean</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td></tr><tr><td>title</td><td>title 属性</td><td><code>string</code></td></tr><tr><td>id</td><td>id 属性</td><td><code>string</code></td></tr><tr><td>required</td><td>required 属性</td><td><code>boolean</code></td></tr></tbody></table><h3 id="checkbox-events" tabindex="-1">Checkbox Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数（Checkbox）</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(event: CheckboxChangeEvent) =&gt; void</code></td></tr><tr><td>click</td><td>点击时回调函数</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>mouseenter</td><td>鼠标移入时回调函数</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>mouseleave</td><td>鼠标移出时回调函数</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>focus</td><td>获得焦点时回调函数</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时回调函数</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>keypress</td><td>按键时回调函数</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr><tr><td>keydown</td><td>按键按下时回调函数</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr></tbody></table><h3 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>变化时回调函数</td><td><code>(value: (string | number | boolean)[]) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(value: (string | number | boolean)[]) =&gt; void</code></td></tr></tbody></table><h3 id="checkbox-slots" tabindex="-1">Checkbox Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>checkbox 的内容</td></tr></tbody></table>',13))])}}};export{q as default};
