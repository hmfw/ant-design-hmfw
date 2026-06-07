import{R as y,b as v,a as z}from"./index-BMtTLp75.js";import{n as k,z as x,j as R,m as l,J as n,Q as u,l as b,g as t,I as g,D as p,G as h,k as B}from"./index-BIkAb7lZ.js";import"./cls-S9IiI6wd.js";const G={style:{display:"flex","flex-direction":"column",gap:"8px"}},U=k({__name:"RadioBasic",setup(c){const a=p(!1),s=p(!1),r=p(!0);return(d,o)=>(x(),R("div",G,[l(n(y),{checked:a.value,"onUpdate:checked":o[0]||(o[0]=e=>a.value=e)},{default:u(()=>[...o[3]||(o[3]=[b("单选框",-1)])]),_:1},8,["checked"]),l(n(y),{checked:s.value,"onUpdate:checked":o[1]||(o[1]=e=>s.value=e),disabled:""},{default:u(()=>[...o[4]||(o[4]=[b("禁用单选框",-1)])]),_:1},8,["checked"]),l(n(y),{checked:r.value,"onUpdate:checked":o[2]||(o[2]=e=>r.value=e),disabled:""},{default:u(()=>[...o[5]||(o[5]=[b("禁用选中",-1)])]),_:1},8,["checked"]),t("p",null,"checked: "+g(a.value),1)]))}}),O=`<template>
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
`,S={style:{display:"flex","flex-direction":"column",gap:"16px"}},C=k({__name:"RadioButton",setup(c){const a=p("middle"),s=p("middle"),r=p("large"),d=p("small"),o=p("middle"),e=[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}];return(f,i)=>(x(),R("div",S,[t("div",null,[i[5]||(i[5]=t("p",{style:{"margin-bottom":"8px"}},"outline 样式（默认）：",-1)),l(n(v),{value:a.value,"onUpdate:value":i[0]||(i[0]=m=>a.value=m),options:e,"option-type":"button","button-style":"outline"},null,8,["value"])]),t("div",null,[i[6]||(i[6]=t("p",{style:{"margin-bottom":"8px"}},"solid 样式：",-1)),l(n(v),{value:s.value,"onUpdate:value":i[1]||(i[1]=m=>s.value=m),options:e,"option-type":"button","button-style":"solid"},null,8,["value"])]),t("div",null,[i[7]||(i[7]=t("p",{style:{"margin-bottom":"8px"}},"大尺寸：",-1)),l(n(v),{value:r.value,"onUpdate:value":i[2]||(i[2]=m=>r.value=m),options:e,"option-type":"button",size:"large"},null,8,["value"])]),t("div",null,[i[8]||(i[8]=t("p",{style:{"margin-bottom":"8px"}},"小尺寸：",-1)),l(n(v),{value:d.value,"onUpdate:value":i[3]||(i[3]=m=>d.value=m),options:e,"option-type":"button",size:"small"},null,8,["value"])]),t("div",null,[i[9]||(i[9]=t("p",{style:{"margin-bottom":"8px"}},"禁用状态：",-1)),l(n(v),{value:o.value,"onUpdate:value":i[4]||(i[4]=m=>o.value=m),options:e,"option-type":"button",disabled:""},null,8,["value"])]),t("p",null,"选中："+g(a.value),1)]))}}),$=`<template>
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
`,w={style:{display:"flex","flex-direction":"column",gap:"16px"}},A=k({__name:"RadioGroup",setup(c){const a=p("a"),s=p("b"),r=[{label:"选项 A",value:"a"},{label:"选项 B",value:"b"},{label:"选项 C",value:"c"},{label:"禁用选项",value:"d",disabled:!0}];return(d,o)=>(x(),R("div",w,[t("div",null,[o[2]||(o[2]=t("p",{style:{"margin-bottom":"8px"}},"水平排列：",-1)),l(n(v),{value:a.value,"onUpdate:value":o[0]||(o[0]=e=>a.value=e),options:r},null,8,["value"])]),t("div",null,[o[3]||(o[3]=t("p",{style:{"margin-bottom":"8px"}},"垂直排列：",-1)),l(n(v),{value:s.value,"onUpdate:value":o[1]||(o[1]=e=>s.value=e),options:r,direction:"vertical"},null,8,["value"])]),t("p",null,"value1: "+g(a.value)+"，value2: "+g(s.value),1)]))}}),E=`<template>
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
`,M={style:{display:"flex","flex-direction":"column",gap:"16px"}},V={style:{display:"flex",gap:"16px","align-items":"center"}},D=k({__name:"RadioIdBinding",setup(c){const a=p("a"),s=p(!1),r=p("middle"),d=p("light");return(o,e)=>(x(),R("div",M,[t("div",null,[e[7]||(e[7]=t("p",{style:{"margin-bottom":"8px"}},"id 属性自动绑定到原生 input：",-1)),l(n(v),{value:a.value,"onUpdate:value":e[0]||(e[0]=f=>a.value=f)},{default:u(()=>[l(n(y),{value:"a",id:"radio-a"},{default:u(()=>[...e[4]||(e[4]=[b('选项 A（id="radio-a"）',-1)])]),_:1}),l(n(y),{value:"b",id:"radio-b"},{default:u(()=>[...e[5]||(e[5]=[b('选项 B（id="radio-b"）',-1)])]),_:1}),l(n(y),{value:"c",id:"radio-c"},{default:u(()=>[...e[6]||(e[6]=[b('选项 C（id="radio-c"）',-1)])]),_:1})]),_:1},8,["value"])]),t("div",null,[e[9]||(e[9]=t("p",{style:{"margin-bottom":"8px"}},"通过 label[for] 配合使用：",-1)),t("div",V,[l(n(y),{id:"payment-alipay",value:"alipay",checked:s.value,"onUpdate:checked":e[1]||(e[1]=f=>s.value=f)},null,8,["checked"]),e[8]||(e[8]=t("label",{for:"payment-alipay",style:{cursor:"pointer","user-select":"none"}}," 支付宝支付 ",-1))])]),t("div",null,[e[10]||(e[10]=t("p",{style:{"margin-bottom":"8px"}},"RadioGroup 中的 id：",-1)),l(n(v),{value:r.value,"onUpdate:value":e[2]||(e[2]=f=>r.value=f),options:[{label:"大",value:"large",id:"size-large"},{label:"中",value:"middle",id:"size-middle"},{label:"小",value:"small",id:"size-small"}]},null,8,["value"])]),t("div",null,[e[14]||(e[14]=t("p",{style:{"margin-bottom":"8px"}},"RadioButton 中的 id：",-1)),l(n(v),{value:d.value,"onUpdate:value":e[3]||(e[3]=f=>d.value=f),"option-type":"button"},{default:u(()=>[l(n(z),{value:"light",id:"theme-light"},{default:u(()=>[...e[11]||(e[11]=[b("浅色",-1)])]),_:1}),l(n(z),{value:"dark",id:"theme-dark"},{default:u(()=>[...e[12]||(e[12]=[b("深色",-1)])]),_:1}),l(n(z),{value:"auto",id:"theme-auto"},{default:u(()=>[...e[13]||(e[13]=[b("自动",-1)])]),_:1})]),_:1},8,["value"])]),t("div",null,[t("p",null,"状态："+g({selectedOption:a.value,paymentMethod:s.value,size:r.value,theme:d.value}),1)]),e[15]||(e[15]=t("div",null,[t("p",{style:{"margin-bottom":"8px"}},"用例说明："),t("ul",{style:{margin:"0","padding-left":"20px"}},[t("li",null,'id 属性自动绑定到原生 <input type="radio"> 元素'),t("li",null,'可以配合 <label for="..."> 实现点击文本选中单选框'),t("li",null,"在 RadioGroup 的 options 中也可以指定 id"),t("li",null,"RadioButton 同样支持 id 属性")])],-1))]))}}),I=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin-bottom: 8px;">id 属性自动绑定到原生 input：</p>
      <RadioGroup v-model:value="selectedOption">
        <Radio value="a" id="radio-a">选项 A（id="radio-a"）</Radio>
        <Radio value="b" id="radio-b">选项 B（id="radio-b"）</Radio>
        <Radio value="c" id="radio-c">选项 C（id="radio-c"）</Radio>
      </RadioGroup>
    </div>
    <div>
      <p style="margin-bottom: 8px;">通过 label[for] 配合使用：</p>
      <div style="display: flex; gap: 16px; align-items: center;">
        <Radio id="payment-alipay" value="alipay" v-model:checked="paymentMethod" />
        <label for="payment-alipay" style="cursor: pointer; user-select: none;">
          支付宝支付
        </label>
      </div>
    </div>
    <div>
      <p style="margin-bottom: 8px;">RadioGroup 中的 id：</p>
      <RadioGroup
        v-model:value="size"
        :options="[
          { label: '大', value: 'large', id: 'size-large' },
          { label: '中', value: 'middle', id: 'size-middle' },
          { label: '小', value: 'small', id: 'size-small' },
        ]"
      />
    </div>
    <div>
      <p style="margin-bottom: 8px;">RadioButton 中的 id：</p>
      <RadioGroup
        v-model:value="theme"
        option-type="button"
      >
        <RadioButton value="light" id="theme-light">浅色</RadioButton>
        <RadioButton value="dark" id="theme-dark">深色</RadioButton>
        <RadioButton value="auto" id="theme-auto">自动</RadioButton>
      </RadioGroup>
    </div>
    <div>
      <p>状态：{{ { selectedOption, paymentMethod, size, theme } }}</p>
    </div>
    <div>
      <p style="margin-bottom: 8px;">用例说明：</p>
      <ul style="margin: 0; padding-left: 20px;">
        <li>id 属性自动绑定到原生 &lt;input type="radio"&gt; 元素</li>
        <li>可以配合 &lt;label for="..."&gt; 实现点击文本选中单选框</li>
        <li>在 RadioGroup 的 options 中也可以指定 id</li>
        <li>RadioButton 同样支持 id 属性</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, Radio, RadioButton } from 'ant-design-hmfw'

const selectedOption = ref('a')
const paymentMethod = ref(false)
const size = ref('middle')
const theme = ref('light')
<\/script>
`,N={class:"markdown-body"},J={__name:"radio",setup(c,{expose:a}){return a({frontmatter:{}}),(r,d)=>{const o=h("DemoBlock");return x(),R("div",N,[d[0]||(d[0]=t("h1",{id:"radio-",tabindex:"-1"},"Radio 单选框",-1)),d[1]||(d[1]=t("p",null,"单选框。",-1)),d[2]||(d[2]=t("h2",{id:"",tabindex:"-1"},"何时使用",-1)),d[3]||(d[3]=t("ul",null,[t("li",null,"用于在多个备选项中选中单个状态。"),t("li",null,"和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。")],-1)),d[4]||(d[4]=t("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),d[5]||(d[5]=t("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),d[6]||(d[6]=t("p",null,"最简单的用法。",-1)),l(o,{title:"基础用法",source:n(O)},{default:u(()=>[l(U)]),_:1},8,["source"]),d[7]||(d[7]=t("h3",{id:"radiogroup",tabindex:"-1"},"RadioGroup",-1)),d[8]||(d[8]=t("p",null,"一组互斥的 Radio 配合使用。",-1)),l(o,{title:"RadioGroup",source:n(E)},{default:u(()=>[l(A)]),_:1},8,["source"]),d[9]||(d[9]=t("h3",{id:"-3",tabindex:"-1"},"按钮样式",-1)),d[10]||(d[10]=t("p",null,"按钮样式的单选组合。",-1)),l(o,{title:"按钮样式",source:n($)},{default:u(()=>[l(C)]),_:1},8,["source"]),d[11]||(d[11]=t("h3",{id:"id-",tabindex:"-1"},"id 属性绑定",-1)),d[12]||(d[12]=t("p",null,"id 属性会自动绑定到原生 input 元素，方便配合 label 使用。",-1)),l(o,{title:"id 属性",source:n(I)},{default:u(()=>[l(D)]),_:1},8,["source"]),d[13]||(d[13]=B('<h2 id="api" tabindex="-1">API</h2><h3 id="radio-props" tabindex="-1">Radio Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>禁用 Radio</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>value</td><td>根据 value 进行比较，判断是否选中</td><td><code>string | number</code></td><td>-</td></tr></tbody></table><h3 id="radiogroup-props" tabindex="-1">RadioGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>用于设置当前选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>options</td><td>以配置形式设置子元素</td><td><code>Array&lt;{ label: string; value: string | number; disabled?: boolean }&gt;</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>禁选所有子单选器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>direction</td><td>排列方向</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>optionType</td><td>用于设置 Radio options 类型</td><td><code>&#39;default&#39; | &#39;button&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>buttonStyle</td><td>RadioButton 的风格样式，目前有描边和填色两种风格</td><td><code>&#39;outline&#39; | &#39;solid&#39;</code></td><td><code>&#39;outline&#39;</code></td></tr><tr><td>size</td><td>大小，只对按钮样式生效</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr></tbody></table><h3 id="radio-events" tabindex="-1">Radio Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(event: Event) =&gt; void</code></td></tr></tbody></table><h3 id="radiogroup-events" tabindex="-1">RadioGroup Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr><tr><td>change</td><td>选项变化时的回调函数</td><td><code>(event: Event) =&gt; void</code></td></tr></tbody></table><h3 id="radio-slots" tabindex="-1">Radio Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>Radio 的内容</td></tr></tbody></table>',11))])}}};export{J as default};
