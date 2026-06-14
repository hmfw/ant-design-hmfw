import{C as b,a as g}from"./Checkbox-idwaM24K.js";import{o as f,A as h,k as x,n,K as i,R as p,m as u,h as e,J as v,E as s,U as y,H as G,l as A}from"./index-B09KCCs0.js";import"./cls-S9IiI6wd.js";const B={style:{display:"flex","flex-direction":"column",gap:"8px"}},D=f({__name:"CheckboxBasic",setup(m){const l=s(!1),r=s(!1),a=s(!0);return(d,o)=>(h(),x("div",B,[n(i(b),{checked:l.value,"onUpdate:checked":o[0]||(o[0]=t=>l.value=t)},{default:p(()=>[...o[3]||(o[3]=[u(" 普通复选框 ",-1)])]),_:1},8,["checked"]),n(i(b),{checked:r.value,"onUpdate:checked":o[1]||(o[1]=t=>r.value=t),disabled:""},{default:p(()=>[...o[4]||(o[4]=[u(" 禁用复选框 ",-1)])]),_:1},8,["checked"]),n(i(b),{checked:a.value,"onUpdate:checked":o[2]||(o[2]=t=>a.value=t),disabled:""},{default:p(()=>[...o[5]||(o[5]=[u(" 禁用选中 ",-1)])]),_:1},8,["checked"]),e("p",null,"checked1: "+v(l.value)+", checked2: "+v(r.value)+", checked3: "+v(a.value),1)]))}}),V=`<template>
  <div style="display: flex; flex-direction: column; gap: 8px">
    <Checkbox v-model:checked="checked1"> 普通复选框 </Checkbox>
    <Checkbox v-model:checked="checked2" disabled> 禁用复选框 </Checkbox>
    <Checkbox v-model:checked="checked3" disabled> 禁用选中 </Checkbox>
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
`,U={style:{"border-bottom":"1px solid #e8e8e8","padding-bottom":"8px","margin-bottom":"8px"}},S={style:{"margin-top":"8px"}},E=f({__name:"CheckboxCheckAll",setup(m){const l=[{label:"选项 A",value:"A"},{label:"选项 B",value:"B"},{label:"选项 C",value:"C"},{label:"选项 D",value:"D"}],r=s(["A","B"]),a=s(!1),d=s(!0),o=c=>{r.value=c?l.map(k=>k.value):[],d.value=!1},t=c=>{d.value=!!c.length&&c.length<l.length,a.value=c.length===l.length};return(c,k)=>(h(),x("div",null,[e("div",U,[n(i(b),{checked:a.value,"onUpdate:checked":k[0]||(k[0]=C=>a.value=C),indeterminate:d.value,onChange:o},{default:p(()=>[...k[2]||(k[2]=[u(" 全选 ",-1)])]),_:1},8,["checked","indeterminate"])]),n(i(g),{value:r.value,"onUpdate:value":k[1]||(k[1]=C=>r.value=C),options:l,onChange:t},null,8,["value"]),e("p",S,"已选："+v(r.value),1)]))}}),w=`<template>
  <div>
    <div style="border-bottom: 1px solid #e8e8e8; padding-bottom: 8px; margin-bottom: 8px">
      <Checkbox v-model:checked="checkAll" :indeterminate="indeterminate" @change="handleCheckAllChange">
        全选
      </Checkbox>
    </div>
    <CheckboxGroup v-model:value="checkedList" :options="options" @change="handleGroupChange" />
    <p style="margin-top: 8px">已选：{{ checkedList }}</p>
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
  checkedList.value = checked ? options.map((o) => o.value) : []
  indeterminate.value = false
}

const handleGroupChange = (list: string[]) => {
  indeterminate.value = !!list.length && list.length < options.length
  checkAll.value = list.length === options.length
}
<\/script>
`,$={style:{display:"flex","flex-direction":"column",gap:"16px"}},O=f({__name:"CheckboxGroup",setup(m){const l=s(["apple"]),r=s([]),a=[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橙子",value:"orange"},{label:"葡萄",value:"grape",disabled:!0}],d=[{label:"红色",value:"red"},{label:"绿色",value:"green"},{label:"蓝色",value:"blue"}];return(o,t)=>(h(),x("div",$,[e("div",null,[t[2]||(t[2]=e("p",{style:{"margin-bottom":"8px"}},"水平排列：",-1)),n(i(g),{value:l.value,"onUpdate:value":t[0]||(t[0]=c=>l.value=c),options:a},null,8,["value"])]),e("div",null,[t[3]||(t[3]=e("p",{style:{"margin-bottom":"8px"}},"垂直排列（通过 style 控制）：",-1)),n(i(g),{value:r.value,"onUpdate:value":t[1]||(t[1]=c=>r.value=c),options:d,style:{display:"flex",flexDirection:"column",gap:"8px"}},null,8,["value"])]),e("p",null,"水果："+v(l.value)+"，颜色："+v(r.value),1)]))}}),T=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 8px">水平排列：</p>
      <CheckboxGroup v-model:value="selectedFruits" :options="fruitOptions" />
    </div>
    <div>
      <p style="margin-bottom: 8px">垂直排列（通过 style 控制）：</p>
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
`,F={style:{display:"flex","flex-direction":"column",gap:"16px"}},N={style:{display:"flex",gap:"16px","align-items":"center"}},L={for:"agree-terms",style:{cursor:"pointer","user-select":"none"}},P=f({__name:"CheckboxIdBinding",setup(m){const l=s(!1),r=s(!0),a=s(!1),d=s(["a"]);return(o,t)=>(h(),x("div",F,[e("div",null,[t[7]||(t[7]=e("p",{style:{"margin-bottom":"8px"}},"id 属性自动绑定到原生 input：",-1)),n(i(b),{id:"checkbox-1",checked:l.value,"onUpdate:checked":t[0]||(t[0]=c=>l.value=c)},{default:p(()=>[...t[5]||(t[5]=[u(' 复选框 1（id="checkbox-1"） ',-1)])]),_:1},8,["checked"]),n(i(b),{id:"checkbox-2",checked:r.value,"onUpdate:checked":t[1]||(t[1]=c=>r.value=c)},{default:p(()=>[...t[6]||(t[6]=[u(' 复选框 2（id="checkbox-2"） ',-1)])]),_:1},8,["checked"])]),e("div",null,[t[9]||(t[9]=e("p",{style:{"margin-bottom":"8px"}},"通过 label[for] 配合使用：",-1)),e("div",N,[n(i(b),{id:"agree-terms",checked:a.value,"onUpdate:checked":t[2]||(t[2]=c=>a.value=c)},null,8,["checked"]),e("label",L,[t[8]||(t[8]=u(" 我已阅读并同意",-1)),e("a",{href:"#",onClick:t[3]||(t[3]=y(()=>{},["prevent"]))},"《服务条款》")])])]),e("div",null,[t[10]||(t[10]=e("p",{style:{"margin-bottom":"8px"}},"CheckboxGroup 中的 id：",-1)),n(i(g),{value:d.value,"onUpdate:value":t[4]||(t[4]=c=>d.value=c),options:[{label:"选项 A",value:"a",id:"option-a"},{label:"选项 B",value:"b",id:"option-b"},{label:"选项 C",value:"c",id:"option-c"}]},null,8,["value"])]),e("div",null,[e("p",null,"状态："+v({checked1:l.value,checked2:r.value,agreeTerms:a.value,groupValue:d.value}),1)]),t[11]||(t[11]=e("div",null,[e("p",{style:{"margin-bottom":"8px"}},"用例说明："),e("ul",{style:{margin:"0","padding-left":"20px"}},[e("li",null,"id 属性自动绑定到原生 <input> 元素，方便表单验证和无障碍访问"),e("li",null,'可以配合 <label for="..."> 实现点击文本选中复选框'),e("li",null,"在 CheckboxGroup 的 options 中也可以指定 id")])],-1))]))}}),q=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 8px">id 属性自动绑定到原生 input：</p>
      <Checkbox id="checkbox-1" v-model:checked="checked1"> 复选框 1（id="checkbox-1"） </Checkbox>
      <Checkbox id="checkbox-2" v-model:checked="checked2"> 复选框 2（id="checkbox-2"） </Checkbox>
    </div>
    <div>
      <p style="margin-bottom: 8px">通过 label[for] 配合使用：</p>
      <div style="display: flex; gap: 16px; align-items: center">
        <Checkbox id="agree-terms" v-model:checked="agreeTerms" />
        <label for="agree-terms" style="cursor: pointer; user-select: none">
          我已阅读并同意<a href="#" @click.prevent>《服务条款》</a>
        </label>
      </div>
    </div>
    <div>
      <p style="margin-bottom: 8px">CheckboxGroup 中的 id：</p>
      <CheckboxGroup
        v-model:value="groupValue"
        :options="[
          { label: '选项 A', value: 'a', id: 'option-a' },
          { label: '选项 B', value: 'b', id: 'option-b' },
          { label: '选项 C', value: 'c', id: 'option-c' },
        ]"
      />
    </div>
    <div>
      <p>状态：{{ { checked1, checked2, agreeTerms, groupValue } }}</p>
    </div>
    <div>
      <p style="margin-bottom: 8px">用例说明：</p>
      <ul style="margin: 0; padding-left: 20px">
        <li>id 属性自动绑定到原生 &lt;input&gt; 元素，方便表单验证和无障碍访问</li>
        <li>可以配合 &lt;label for="..."&gt; 实现点击文本选中复选框</li>
        <li>在 CheckboxGroup 的 options 中也可以指定 id</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckboxGroup, Checkbox } from 'ant-design-hmfw'

const checked1 = ref(false)
const checked2 = ref(true)
const agreeTerms = ref(false)
const groupValue = ref<string[]>(['a'])
<\/script>
`,I={style:{display:"flex","flex-direction":"column",gap:"16px"}},M=f({__name:"CheckboxSkipGroup",setup(m){const l=s(["a"]),r=s(!1),a=s(!0);return(d,o)=>(h(),x("div",I,[e("div",null,[o[7]||(o[7]=e("p",{style:{"margin-bottom":"8px"}},"基本用法：skipGroup 跳过 CheckboxGroup 控制",-1)),n(i(g),{value:l.value,"onUpdate:value":o[2]||(o[2]=t=>l.value=t)},{default:p(()=>[n(i(b),{value:"a"},{default:p(()=>[...o[3]||(o[3]=[u(" A（受组控制） ",-1)])]),_:1}),n(i(b),{value:"b"},{default:p(()=>[...o[4]||(o[4]=[u(" B（受组控制） ",-1)])]),_:1}),n(i(b),{checked:r.value,"onUpdate:checked":o[0]||(o[0]=t=>r.value=t),value:"c","skip-group":""},{default:p(()=>[...o[5]||(o[5]=[u(" C（独立控制，skipGroup） ",-1)])]),_:1},8,["checked"]),n(i(b),{checked:a.value,"onUpdate:checked":o[1]||(o[1]=t=>a.value=t),value:"d","skip-group":""},{default:p(()=>[...o[6]||(o[6]=[u(" D（独立控制，skipGroup） ",-1)])]),_:1},8,["checked"])]),_:1},8,["value"])]),e("div",null,[e("p",null,"组值："+v(l.value),1),e("p",null,"C 独立值："+v(r.value),1),e("p",null,"D 独立值："+v(a.value),1)]),o[8]||(o[8]=e("div",null,[e("p",{style:{"margin-bottom":"8px"}},"用例说明："),e("ul",{style:{margin:"0","padding-left":"20px"}},[e("li",null,"A 和 B 由 CheckboxGroup 统一管理，选中状态反映在 groupValue 中"),e("li",null,"C 和 D 设置了 skipGroup，不受组控制，需要各自的 v-model:checked"),e("li",null,"适用场景：表单中有些复选框需要独立验证或特殊处理")])],-1))]))}}),K=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 8px">基本用法：skipGroup 跳过 CheckboxGroup 控制</p>
      <CheckboxGroup v-model:value="groupValue">
        <Checkbox value="a"> A（受组控制） </Checkbox>
        <Checkbox value="b"> B（受组控制） </Checkbox>
        <Checkbox v-model:checked="independentC" value="c" skip-group> C（独立控制，skipGroup） </Checkbox>
        <Checkbox v-model:checked="independentD" value="d" skip-group> D（独立控制，skipGroup） </Checkbox>
      </CheckboxGroup>
    </div>
    <div>
      <p>组值：{{ groupValue }}</p>
      <p>C 独立值：{{ independentC }}</p>
      <p>D 独立值：{{ independentD }}</p>
    </div>
    <div>
      <p style="margin-bottom: 8px">用例说明：</p>
      <ul style="margin: 0; padding-left: 20px">
        <li>A 和 B 由 CheckboxGroup 统一管理，选中状态反映在 groupValue 中</li>
        <li>C 和 D 设置了 skipGroup，不受组控制，需要各自的 v-model:checked</li>
        <li>适用场景：表单中有些复选框需要独立验证或特殊处理</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckboxGroup, Checkbox } from 'ant-design-hmfw'

const groupValue = ref<string[]>(['a'])
const independentC = ref(false)
const independentD = ref(true)
<\/script>
`,H={class:"markdown-body"},z={__name:"checkbox",setup(m,{expose:l}){return l({frontmatter:{}}),(a,d)=>{const o=G("DemoBlock");return h(),x("div",H,[d[0]||(d[0]=e("h1",{id:"checkbox-",tabindex:"-1"},"Checkbox 多选框",-1)),d[1]||(d[1]=e("p",null,"多选框。",-1)),d[2]||(d[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),d[3]||(d[3]=e("ul",null,[e("li",null,"在一组可选项中进行多项选择时。"),e("li",null,"单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。")],-1)),d[4]||(d[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),d[5]||(d[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),d[6]||(d[6]=e("p",null,"简单的 checkbox。",-1)),n(o,{title:"基础用法",source:i(V)},{default:p(()=>[n(D)]),_:1},8,["source"]),d[7]||(d[7]=e("h3",{id:"checkboxgroup",tabindex:"-1"},"CheckboxGroup",-1)),d[8]||(d[8]=e("p",null,"方便的从数组生成 Checkbox 组。",-1)),n(o,{title:"CheckboxGroup",source:i(T)},{default:p(()=>[n(O)]),_:1},8,["source"]),d[9]||(d[9]=e("h3",{id:"-3",tabindex:"-1"},"全选",-1)),d[10]||(d[10]=e("p",null,[u("在实现全选效果时，你可能会用到 "),e("code",null,"indeterminate"),u(" 属性。")],-1)),n(o,{title:"全选",source:i(w)},{default:p(()=>[n(E)]),_:1},8,["source"]),d[11]||(d[11]=e("h3",{id:"skipgroup-",tabindex:"-1"},"skipGroup 属性",-1)),d[12]||(d[12]=e("p",null,[u("在 CheckboxGroup 中使用 "),e("code",null,"skipGroup"),u(" 可以让复选框独立控制，不受组管理。")],-1)),n(o,{title:"skipGroup",source:i(K)},{default:p(()=>[n(M)]),_:1},8,["source"]),d[13]||(d[13]=e("h3",{id:"id-",tabindex:"-1"},"id 属性绑定",-1)),d[14]||(d[14]=e("p",null,"id 属性会自动绑定到原生 input 元素，方便配合 label 使用。",-1)),n(o,{title:"id 属性",source:i(q)},{default:p(()=>[n(P)]),_:1},8,["source"]),d[15]||(d[15]=A('<h2 id="api" tabindex="-1">API</h2><h3 id="checkbox-props" tabindex="-1">Checkbox Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>失效状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>indeterminate</td><td>设置 indeterminate 状态，只负责样式控制</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>value</td><td>checkbox 的 value，在 CheckboxGroup 中使用</td><td><code>string | number | boolean</code></td><td>-</td></tr><tr><td>autoFocus</td><td>自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>input[type=“checkbox”] 的 name 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>id</td><td>input[type=“checkbox”] 的 id 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>input[type=“checkbox”] 的 title 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>tabIndex</td><td>input[type=“checkbox”] 的 tabindex 属性</td><td><code>number</code></td><td>-</td></tr><tr><td>required</td><td>input[type=“checkbox”] 的 required 属性</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>skipGroup</td><td>在 CheckboxGroup 中时，跳过组控制</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="checkboxgroup-props" tabindex="-1">CheckboxGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定选中的选项</td><td><code>(string | number | boolean)[]</code></td><td><code>[]</code></td></tr><tr><td>defaultValue</td><td>默认选中的选项</td><td><code>(string | number | boolean)[]</code></td><td><code>[]</code></td></tr><tr><td>options</td><td>指定可选项</td><td><code>Array&lt;string | number | CheckboxOptionType&gt;</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>整组失效</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>CheckboxGroup 下所有 input[type=“checkbox”] 的 name 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="checkboxoptiontype" tabindex="-1">CheckboxOptionType</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>label</td><td>选项显示文本</td><td><code>string</code></td></tr><tr><td>value</td><td>选项值</td><td><code>string | number | boolean</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td></tr><tr><td>title</td><td>title 属性</td><td><code>string</code></td></tr><tr><td>id</td><td>id 属性</td><td><code>string</code></td></tr><tr><td>required</td><td>required 属性</td><td><code>boolean</code></td></tr></tbody></table><h3 id="checkbox-events" tabindex="-1">Checkbox Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数（Checkbox）</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(event: CheckboxChangeEvent) =&gt; void</code></td></tr><tr><td>click</td><td>点击时回调函数</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>mouseenter</td><td>鼠标移入时回调函数</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>mouseleave</td><td>鼠标移出时回调函数</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>focus</td><td>获得焦点时回调函数</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时回调函数</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>keypress</td><td>按键时回调函数</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr><tr><td>keydown</td><td>按键按下时回调函数</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr></tbody></table><h3 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>变化时回调函数</td><td><code>(value: (string | number | boolean)[]) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(value: (string | number | boolean)[]) =&gt; void</code></td></tr></tbody></table><h3 id="checkbox-slots" tabindex="-1">Checkbox Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>checkbox 的内容</td></tr></tbody></table>',13))])}}};export{z as default};
