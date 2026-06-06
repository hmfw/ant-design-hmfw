import{I as i}from"./InputNumber-BZc7ycap.js";import{m as y,y as f,i as x,l,I as r,B as p,f as e,H as w,E as I,P as c,k as a,j as $}from"./index-B2-fWtt3.js";import"./cls-S9IiI6wd.js";const U={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},B=y({__name:"InputNumberAddon",setup(b){const n=p(null),u=p(null),o=p(null);return(t,d)=>(f(),x("div",U,[l(r(i),{value:n.value,"onUpdate:value":d[0]||(d[0]=s=>n.value=s),min:0,prefix:"¥","addon-after":"元",placeholder:"请输入价格",style:{width:"100%"}},null,8,["value"]),l(r(i),{value:u.value,"onUpdate:value":d[1]||(d[1]=s=>u.value=s),min:0,max:100,"addon-after":"%",placeholder:"请输入百分比",style:{width:"100%"}},null,8,["value"]),l(r(i),{value:o.value,"onUpdate:value":d[2]||(d[2]=s=>o.value=s),min:0,"addon-before":"重量","addon-after":"kg",placeholder:"请输入重量",style:{width:"100%"}},null,8,["value"])]))}}),S=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <InputNumber
      v-model:value="price"
      :min="0"
      prefix="¥"
      addon-after="元"
      placeholder="请输入价格"
      style="width: 100%;"
    />
    <InputNumber
      v-model:value="percent"
      :min="0"
      :max="100"
      addon-after="%"
      placeholder="请输入百分比"
      style="width: 100%;"
    />
    <InputNumber
      v-model:value="weight"
      :min="0"
      addon-before="重量"
      addon-after="kg"
      placeholder="请输入重量"
      style="width: 100%;"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from 'ant-design-hmfw'

const price = ref<number | null>(null)
const percent = ref<number | null>(null)
const weight = ref<number | null>(null)
<\/script>
`,V={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},M=y({__name:"InputNumberBasic",setup(b){const n=p(null);return(u,o)=>(f(),x("div",V,[l(r(i),{value:n.value,"onUpdate:value":o[0]||(o[0]=t=>n.value=t),placeholder:"请输入数字",style:{width:"100%"}},null,8,["value"]),l(r(i),{value:n.value,"onUpdate:value":o[1]||(o[1]=t=>n.value=t),disabled:"",placeholder:"禁用状态",style:{width:"100%"}},null,8,["value"]),e("p",null,"当前值："+w(n.value),1)]))}}),k=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <InputNumber v-model:value="value" placeholder="请输入数字" style="width: 100%;" />
    <InputNumber v-model:value="value" disabled placeholder="禁用状态" style="width: 100%;" />
    <p>当前值：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from 'ant-design-hmfw'

const value = ref<number | null>(null)
<\/script>
`,F={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},E=y({__name:"InputNumberFormatter",setup(b){const n=p(1e3),u=p(50),o=(v,m)=>{const[g,h]=`${v}`.split(".")||[],N=`${g}`.replace(/\B(?=(\d{3})+(?!\d))/g,",");return`$ ${h?`${N}.${h}`:`${N}`}`},t=v=>parseFloat(v.replace(/\$\s?|(,*)/g,"")),d=v=>`${v}%`,s=v=>parseFloat(v.replace("%",""));return(v,m)=>(f(),x("div",F,[e("div",null,[m[2]||(m[2]=e("p",{style:{"margin-bottom":"4px"}},"千分位格式化：",-1)),l(r(i),{value:n.value,"onUpdate:value":m[0]||(m[0]=g=>n.value=g),formatter:o,parser:t,style:{width:"100%"}},null,8,["value"])]),e("div",null,[m[3]||(m[3]=e("p",{style:{"margin-bottom":"4px"}},"百分比：",-1)),l(r(i),{value:u.value,"onUpdate:value":m[1]||(m[1]=g=>u.value=g),min:0,max:100,formatter:d,parser:s,style:{width:"100%"}},null,8,["value"])])]))}}),O=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <div>
      <p style="margin-bottom: 4px;">千分位格式化：</p>
      <InputNumber
        v-model:value="value1"
        :formatter="formatter1"
        :parser="parser1"
        style="width: 100%;"
      />
    </div>
    <div>
      <p style="margin-bottom: 4px;">百分比：</p>
      <InputNumber
        v-model:value="value2"
        :min="0"
        :max="100"
        :formatter="formatter2"
        :parser="parser2"
        style="width: 100%;"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from 'ant-design-hmfw'

const value1 = ref<number>(1000)
const value2 = ref<number>(50)

const formatter1 = (value: number, info: { userTyping: boolean; input: string }) => {
  const [start, end] = \`\${value}\`.split('.') || []
  const v = \`\${start}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')
  return \`$ \${end ? \`\${v}.\${end}\` : \`\${v}\`}\`
}

const parser1 = (value: string) => {
  return parseFloat(value.replace(/\\$\\s?|(,*)/g, ''))
}

const formatter2 = (value: number) => \`\${value}%\`
const parser2 = (value: string) => parseFloat(value.replace('%', ''))
<\/script>
`,A={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},D=y({__name:"InputNumberMinMax",setup(b){const n=p(5),u=p(.5);return(o,t)=>(f(),x("div",A,[e("div",null,[t[2]||(t[2]=e("p",{style:{"margin-bottom":"4px"}},"范围 1-10，步长 1：",-1)),l(r(i),{value:n.value,"onUpdate:value":t[0]||(t[0]=d=>n.value=d),min:1,max:10,step:1,style:{width:"100%"}},null,8,["value"])]),e("div",null,[t[3]||(t[3]=e("p",{style:{"margin-bottom":"4px"}},"范围 0-1，步长 0.1，精度 1：",-1)),l(r(i),{value:u.value,"onUpdate:value":t[1]||(t[1]=d=>u.value=d),min:0,max:1,step:.1,precision:1,style:{width:"100%"}},null,8,["value"])]),e("p",null,"value1: "+w(n.value)+"，value2: "+w(u.value),1)]))}}),C=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <div>
      <p style="margin-bottom: 4px;">范围 1-10，步长 1：</p>
      <InputNumber
        v-model:value="value1"
        :min="1"
        :max="10"
        :step="1"
        style="width: 100%;"
      />
    </div>
    <div>
      <p style="margin-bottom: 4px;">范围 0-1，步长 0.1，精度 1：</p>
      <InputNumber
        v-model:value="value2"
        :min="0"
        :max="1"
        :step="0.1"
        :precision="1"
        style="width: 100%;"
      />
    </div>
    <p>value1: {{ value1 }}，value2: {{ value2 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from 'ant-design-hmfw'

const value1 = ref<number>(5)
const value2 = ref<number>(0.5)
<\/script>
`,P={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},T=y({__name:"InputNumberMode",setup(b){const n=p(3),u=p(3);return(o,t)=>(f(),x("div",P,[e("div",null,[t[2]||(t[2]=e("p",{style:{"margin-bottom":"4px"}},"Input 模式（默认）：",-1)),l(r(i),{value:n.value,"onUpdate:value":t[0]||(t[0]=d=>n.value=d),min:1,max:10,style:{width:"100%"}},null,8,["value"])]),e("div",null,[t[3]||(t[3]=e("p",{style:{"margin-bottom":"4px"}},"Spinner 模式：",-1)),l(r(i),{value:u.value,"onUpdate:value":t[1]||(t[1]=d=>u.value=d),mode:"spinner",min:1,max:10,style:{width:"100%"}},null,8,["value"])])]))}}),R=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <div>
      <p style="margin-bottom: 4px;">Input 模式（默认）：</p>
      <InputNumber v-model:value="value1" :min="1" :max="10" style="width: 100%;" />
    </div>
    <div>
      <p style="margin-bottom: 4px;">Spinner 模式：</p>
      <InputNumber v-model:value="value2" mode="spinner" :min="1" :max="10" style="width: 100%;" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from 'ant-design-hmfw'

const value1 = ref<number>(3)
const value2 = ref<number>(3)
<\/script>
`,j={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},z=y({__name:"InputNumberSuffix",setup(b){const n=p(100),u=p(200),o=p(300);return(t,d)=>(f(),x("div",j,[e("div",null,[d[3]||(d[3]=e("p",{style:{"margin-bottom":"4px"}},"带前缀：",-1)),l(r(i),{value:n.value,"onUpdate:value":d[0]||(d[0]=s=>n.value=s),prefix:"¥",style:{width:"100%"}},null,8,["value"])]),e("div",null,[d[4]||(d[4]=e("p",{style:{"margin-bottom":"4px"}},"带后缀：",-1)),l(r(i),{value:u.value,"onUpdate:value":d[1]||(d[1]=s=>u.value=s),suffix:"RMB",style:{width:"100%"}},null,8,["value"])]),e("div",null,[d[5]||(d[5]=e("p",{style:{"margin-bottom":"4px"}},"前缀 + 后缀：",-1)),l(r(i),{value:o.value,"onUpdate:value":d[2]||(d[2]=s=>o.value=s),prefix:"¥",suffix:"元",style:{width:"100%"}},null,8,["value"])])]))}}),H=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <div>
      <p style="margin-bottom: 4px;">带前缀：</p>
      <InputNumber v-model:value="value1" prefix="¥" style="width: 100%;" />
    </div>
    <div>
      <p style="margin-bottom: 4px;">带后缀：</p>
      <InputNumber v-model:value="value2" suffix="RMB" style="width: 100%;" />
    </div>
    <div>
      <p style="margin-bottom: 4px;">前缀 + 后缀：</p>
      <InputNumber v-model:value="value3" prefix="¥" suffix="元" style="width: 100%;" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from 'ant-design-hmfw'

const value1 = ref<number>(100)
const value2 = ref<number>(200)
const value3 = ref<number>(300)
<\/script>
`,K={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},W=y({__name:"InputNumberVariant",setup(b){const n=p(100);return(u,o)=>(f(),x("div",K,[l(r(i),{value:n.value,"onUpdate:value":o[0]||(o[0]=t=>n.value=t),placeholder:"Outlined (默认)",style:{width:"100%"}},null,8,["value"]),l(r(i),{value:n.value,"onUpdate:value":o[1]||(o[1]=t=>n.value=t),variant:"filled",placeholder:"Filled",style:{width:"100%"}},null,8,["value"]),l(r(i),{value:n.value,"onUpdate:value":o[2]||(o[2]=t=>n.value=t),variant:"borderless",placeholder:"Borderless",style:{width:"100%"}},null,8,["value"]),l(r(i),{value:n.value,"onUpdate:value":o[3]||(o[3]=t=>n.value=t),variant:"underlined",placeholder:"Underlined",style:{width:"100%"}},null,8,["value"])]))}}),q=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <InputNumber v-model:value="value" placeholder="Outlined (默认)" style="width: 100%;" />
    <InputNumber v-model:value="value" variant="filled" placeholder="Filled" style="width: 100%;" />
    <InputNumber v-model:value="value" variant="borderless" placeholder="Borderless" style="width: 100%;" />
    <InputNumber v-model:value="value" variant="underlined" placeholder="Underlined" style="width: 100%;" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from 'ant-design-hmfw'

const value = ref<number>(100)
<\/script>
`,G={class:"markdown-body"},X={__name:"input-number",setup(b,{expose:n}){return n({frontmatter:{}}),(o,t)=>{const d=I("DemoBlock");return f(),x("div",G,[t[0]||(t[0]=e("h1",{id:"inputnumber-",tabindex:"-1"},"InputNumber 数字输入框",-1)),t[1]||(t[1]=e("p",null,"通过鼠标或键盘，输入范围内的数值。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("p",null,"当需要获取标准数值时。",-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"数字输入框。",-1)),l(d,{title:"基础用法",source:r(k)},{default:c(()=>[l(M)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"最大最小值",-1)),t[8]||(t[8]=e("p",null,[a("通过 "),e("code",null,"min"),a(" 和 "),e("code",null,"max"),a(" 限制输入范围，通过 "),e("code",null,"step"),a(" 设置步长。")],-1)),l(d,{title:"最大最小值",source:r(C)},{default:c(()=>[l(D)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-4",tabindex:"-1"},"前后缀",-1)),t[10]||(t[10]=e("p",null,"带有前缀或后缀的数字输入框。",-1)),l(d,{title:"前后缀",source:r(S)},{default:c(()=>[l(B)]),_:1},8,["source"]),t[11]||(t[11]=e("h3",{id:"-5",tabindex:"-1"},"前缀和后缀",-1)),t[12]||(t[12]=e("p",null,[a("使用 "),e("code",null,"prefix"),a(" 和 "),e("code",null,"suffix"),a(" 添加前缀和后缀。")],-1)),l(d,{title:"前缀和后缀",source:r(H)},{default:c(()=>[l(z)]),_:1},8,["source"]),t[13]||(t[13]=e("h3",{id:"-6",tabindex:"-1"},"变体",-1)),t[14]||(t[14]=e("p",null,[a("支持 "),e("code",null,"outlined"),a("、"),e("code",null,"filled"),a("、"),e("code",null,"borderless"),a("、"),e("code",null,"underlined"),a(" 四种变体。")],-1)),l(d,{title:"变体",source:r(q)},{default:c(()=>[l(W)]),_:1},8,["source"]),t[15]||(t[15]=e("h3",{id:"-7",tabindex:"-1"},"显示模式",-1)),t[16]||(t[16]=e("p",null,[a("支持 "),e("code",null,"input"),a(" 和 "),e("code",null,"spinner"),a(" 两种模式。")],-1)),l(d,{title:"显示模式",source:r(R)},{default:c(()=>[l(T)]),_:1},8,["source"]),t[17]||(t[17]=e("h3",{id:"-8",tabindex:"-1"},"格式化展示",-1)),t[18]||(t[18]=e("p",null,[a("通过 "),e("code",null,"formatter"),a(" 格式化数字，以展示具有具体含义的数据，往往需要配合 "),e("code",null,"parser"),a(" 一起使用。")],-1)),l(d,{title:"格式化展示",source:r(O)},{default:c(()=>[l(E)]),_:1},8,["source"]),t[19]||(t[19]=$('<h2 id="api" tabindex="-1">API</h2><h3 id="inputnumber-props" tabindex="-1">InputNumber Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>当前值</td><td><code>number | null</code></td><td>-</td></tr><tr><td>defaultValue</td><td>初始值</td><td><code>number</code></td><td>-</td></tr><tr><td>min</td><td>最小值</td><td><code>number</code></td><td><code>-Infinity</code></td></tr><tr><td>max</td><td>最大值</td><td><code>number</code></td><td><code>Infinity</code></td></tr><tr><td>step</td><td>每次改变步数，可以为小数</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>precision</td><td>数值精度</td><td><code>number</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>readOnly</td><td>只读</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>variant</td><td>变体</td><td><code>&#39;outlined&#39; | &#39;filled&#39; | &#39;borderless&#39; | &#39;underlined&#39;</code></td><td><code>&#39;outlined&#39;</code></td></tr><tr><td>mode</td><td>显示模式</td><td><code>&#39;input&#39; | &#39;spinner&#39;</code></td><td><code>&#39;input&#39;</code></td></tr><tr><td>prefix</td><td>带有前缀图标的 input</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>suffix</td><td>带有后缀图标的 input</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>addonBefore</td><td>带标签的 input，设置前置标签</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>addonAfter</td><td>带标签的 input，设置后置标签</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>controls</td><td>是否显示增减按钮，或自定义图标</td><td><code>boolean | { upIcon?: VNode | string; downIcon?: VNode | string }</code></td><td><code>true</code></td></tr><tr><td>keyboard</td><td>是否启用键盘快捷行为</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>placeholder</td><td>占位符</td><td><code>string</code></td><td>-</td></tr><tr><td>formatter</td><td>指定输入框展示值的格式</td><td><code>(value: number, info: { userTyping: boolean; input: string }) =&gt; string</code></td><td>-</td></tr><tr><td>parser</td><td>指定从 formatter 里转换回数字的方式</td><td><code>(value: string) =&gt; number</code></td><td>-</td></tr><tr><td>changeOnBlur</td><td>是否在失焦时触发 change</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>changeOnWheel</td><td>是否允许鼠标滚轮改变数值</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>decimalSeparator</td><td>小数点</td><td><code>string</code></td><td><code>&#39;.&#39;</code></td></tr><tr><td>stringMode</td><td>字符串模式，开启后支持高精度小数</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="inputnumber-events" tabindex="-1">InputNumber Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>变化回调</td><td><code>(value: number | null) =&gt; void</code></td></tr><tr><td>change</td><td>变化回调</td><td><code>(value: number | null) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>pressEnter</td><td>按下回车的回调</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr><tr><td>step</td><td>点击上下箭头的回调</td><td><code>(value: number, info: { offset: number; type: &#39;up&#39; | &#39;down&#39;; emitter: &#39;handler&#39; | &#39;keydown&#39; | &#39;wheel&#39; }) =&gt; void</code></td></tr></tbody></table><h3 id="inputnumber-methods" tabindex="-1">InputNumber Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td><code>(options?: { cursor?: &#39;start&#39; | &#39;end&#39; | &#39;all&#39;; preventScroll?: boolean }) =&gt; void</code></td></tr><tr><td>blur</td><td>移除焦点</td><td><code>() =&gt; void</code></td></tr><tr><td>nativeElement</td><td>获取原生 DOM 元素</td><td>-</td></tr></tbody></table>',7))])}}};export{X as default};
