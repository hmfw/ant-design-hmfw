import{R as x,a as v}from"./index-mkri1kNH.js";import{m as h,y as c,i as f,l as n,I as a,P as m,k as g,f as t,H as b,B as u,E as R,j as k}from"./index-BQisgCTe.js";import"./cls-S9IiI6wd.js";const z={style:{display:"flex","flex-direction":"column",gap:"8px"}},G=h({__name:"RadioBasic",setup(y){const i=u(!1),s=u(!1),r=u(!0);return(e,d)=>(c(),f("div",z,[n(a(x),{checked:i.value,"onUpdate:checked":d[0]||(d[0]=l=>i.value=l)},{default:m(()=>[...d[3]||(d[3]=[g("单选框",-1)])]),_:1},8,["checked"]),n(a(x),{checked:s.value,"onUpdate:checked":d[1]||(d[1]=l=>s.value=l),disabled:""},{default:m(()=>[...d[4]||(d[4]=[g("禁用单选框",-1)])]),_:1},8,["checked"]),n(a(x),{checked:r.value,"onUpdate:checked":d[2]||(d[2]=l=>r.value=l),disabled:""},{default:m(()=>[...d[5]||(d[5]=[g("禁用选中",-1)])]),_:1},8,["checked"]),t("p",null,"checked: "+b(i.value),1)]))}}),B=`<template>
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
`,U={style:{display:"flex","flex-direction":"column",gap:"16px"}},S=h({__name:"RadioButton",setup(y){const i=u("middle"),s=u("middle"),r=u("large"),e=u("small"),d=u("middle"),l=[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}];return(V,o)=>(c(),f("div",U,[t("div",null,[o[5]||(o[5]=t("p",{style:{"margin-bottom":"8px"}},"outline 样式（默认）：",-1)),n(a(v),{value:i.value,"onUpdate:value":o[0]||(o[0]=p=>i.value=p),options:l,"option-type":"button","button-style":"outline"},null,8,["value"])]),t("div",null,[o[6]||(o[6]=t("p",{style:{"margin-bottom":"8px"}},"solid 样式：",-1)),n(a(v),{value:s.value,"onUpdate:value":o[1]||(o[1]=p=>s.value=p),options:l,"option-type":"button","button-style":"solid"},null,8,["value"])]),t("div",null,[o[7]||(o[7]=t("p",{style:{"margin-bottom":"8px"}},"大尺寸：",-1)),n(a(v),{value:r.value,"onUpdate:value":o[2]||(o[2]=p=>r.value=p),options:l,"option-type":"button",size:"large"},null,8,["value"])]),t("div",null,[o[8]||(o[8]=t("p",{style:{"margin-bottom":"8px"}},"小尺寸：",-1)),n(a(v),{value:e.value,"onUpdate:value":o[3]||(o[3]=p=>e.value=p),options:l,"option-type":"button",size:"small"},null,8,["value"])]),t("div",null,[o[9]||(o[9]=t("p",{style:{"margin-bottom":"8px"}},"禁用状态：",-1)),n(a(v),{value:d.value,"onUpdate:value":o[4]||(o[4]=p=>d.value=p),options:l,"option-type":"button",disabled:""},null,8,["value"])]),t("p",null,"选中："+b(i.value),1)]))}}),O=`<template>
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
`,C={style:{display:"flex","flex-direction":"column",gap:"16px"}},E=h({__name:"RadioGroup",setup(y){const i=u("a"),s=u("b"),r=[{label:"选项 A",value:"a"},{label:"选项 B",value:"b"},{label:"选项 C",value:"c"},{label:"禁用选项",value:"d",disabled:!0}];return(e,d)=>(c(),f("div",C,[t("div",null,[d[2]||(d[2]=t("p",{style:{"margin-bottom":"8px"}},"水平排列：",-1)),n(a(v),{value:i.value,"onUpdate:value":d[0]||(d[0]=l=>i.value=l),options:r},null,8,["value"])]),t("div",null,[d[3]||(d[3]=t("p",{style:{"margin-bottom":"8px"}},"垂直排列：",-1)),n(a(v),{value:s.value,"onUpdate:value":d[1]||(d[1]=l=>s.value=l),options:r,direction:"vertical"},null,8,["value"])]),t("p",null,"value1: "+b(i.value)+"，value2: "+b(s.value),1)]))}}),$=`<template>
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
`,w={class:"markdown-body"},D={__name:"radio",setup(y,{expose:i}){return i({frontmatter:{}}),(r,e)=>{const d=R("DemoBlock");return c(),f("div",w,[e[0]||(e[0]=t("h1",{id:"radio-",tabindex:"-1"},"Radio 单选框",-1)),e[1]||(e[1]=t("p",null,"单选框。",-1)),e[2]||(e[2]=t("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=t("ul",null,[t("li",null,"用于在多个备选项中选中单个状态。"),t("li",null,"和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。")],-1)),e[4]||(e[4]=t("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=t("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=t("p",null,"最简单的用法。",-1)),n(d,{title:"基础用法",source:a(B)},{default:m(()=>[n(G)]),_:1},8,["source"]),e[7]||(e[7]=t("h3",{id:"radiogroup",tabindex:"-1"},"RadioGroup",-1)),e[8]||(e[8]=t("p",null,"一组互斥的 Radio 配合使用。",-1)),n(d,{title:"RadioGroup",source:a($)},{default:m(()=>[n(E)]),_:1},8,["source"]),e[9]||(e[9]=t("h3",{id:"-3",tabindex:"-1"},"按钮样式",-1)),e[10]||(e[10]=t("p",null,"按钮样式的单选组合。",-1)),n(d,{title:"按钮样式",source:a(O)},{default:m(()=>[n(S)]),_:1},8,["source"]),e[11]||(e[11]=k('<h2 id="api" tabindex="-1">API</h2><h3 id="radio-props" tabindex="-1">Radio Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>禁用 Radio</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>value</td><td>根据 value 进行比较，判断是否选中</td><td><code>string | number</code></td><td>-</td></tr></tbody></table><h3 id="radiogroup-props" tabindex="-1">RadioGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>用于设置当前选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>options</td><td>以配置形式设置子元素</td><td><code>Array&lt;{ label: string; value: string | number; disabled?: boolean }&gt;</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>禁选所有子单选器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>direction</td><td>排列方向</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>optionType</td><td>用于设置 Radio options 类型</td><td><code>&#39;default&#39; | &#39;button&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>buttonStyle</td><td>RadioButton 的风格样式，目前有描边和填色两种风格</td><td><code>&#39;outline&#39; | &#39;solid&#39;</code></td><td><code>&#39;outline&#39;</code></td></tr><tr><td>size</td><td>大小，只对按钮样式生效</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr></tbody></table><h3 id="radio-events" tabindex="-1">Radio Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(event: Event) =&gt; void</code></td></tr></tbody></table><h3 id="radiogroup-events" tabindex="-1">RadioGroup Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr><tr><td>change</td><td>选项变化时的回调函数</td><td><code>(event: Event) =&gt; void</code></td></tr></tbody></table><h3 id="radio-slots" tabindex="-1">Radio Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>Radio 的内容</td></tr></tbody></table>',11))])}}};export{D as default};
