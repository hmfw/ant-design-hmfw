import{I as a}from"./InputNumber-96CdvivF.js";import{k as x,w as m,g as v,j as l,G as o,z as i,d as e,E as f,B as y,M as b,i as s,h as g}from"./index-BNHhPN23.js";import"./cls-S9IiI6wd.js";const h={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},w=x({__name:"InputNumberAddon",setup(c){const d=i(null),u=i(null),r=i(null);return(t,n)=>(m(),v("div",h,[l(o(a),{value:d.value,"onUpdate:value":n[0]||(n[0]=p=>d.value=p),min:0,prefix:"¥","addon-after":"元",placeholder:"请输入价格",style:{width:"100%"}},null,8,["value"]),l(o(a),{value:u.value,"onUpdate:value":n[1]||(n[1]=p=>u.value=p),min:0,max:100,"addon-after":"%",placeholder:"请输入百分比",style:{width:"100%"}},null,8,["value"]),l(o(a),{value:r.value,"onUpdate:value":n[2]||(n[2]=p=>r.value=p),min:0,"addon-before":"重量","addon-after":"kg",placeholder:"请输入重量",style:{width:"100%"}},null,8,["value"])]))}}),N=`<template>
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
`,I={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},k=x({__name:"InputNumberBasic",setup(c){const d=i(null);return(u,r)=>(m(),v("div",I,[l(o(a),{value:d.value,"onUpdate:value":r[0]||(r[0]=t=>d.value=t),placeholder:"请输入数字",style:{width:"100%"}},null,8,["value"]),l(o(a),{value:d.value,"onUpdate:value":r[1]||(r[1]=t=>d.value=t),disabled:"",placeholder:"禁用状态",style:{width:"100%"}},null,8,["value"]),e("p",null,"当前值："+f(d.value),1)]))}}),B=`<template>
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
`,V={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},E=x({__name:"InputNumberMinMax",setup(c){const d=i(5),u=i(.5);return(r,t)=>(m(),v("div",V,[e("div",null,[t[2]||(t[2]=e("p",{style:{"margin-bottom":"4px"}},"范围 1-10，步长 1：",-1)),l(o(a),{value:d.value,"onUpdate:value":t[0]||(t[0]=n=>d.value=n),min:1,max:10,step:1,style:{width:"100%"}},null,8,["value"])]),e("div",null,[t[3]||(t[3]=e("p",{style:{"margin-bottom":"4px"}},"范围 0-1，步长 0.1，精度 1：",-1)),l(o(a),{value:u.value,"onUpdate:value":t[1]||(t[1]=n=>u.value=n),min:0,max:1,step:.1,precision:1,style:{width:"100%"}},null,8,["value"])]),e("p",null,"value1: "+f(d.value)+"，value2: "+f(u.value),1)]))}}),U=`<template>
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
`,$={class:"markdown-body"},C={__name:"input-number",setup(c,{expose:d}){return d({frontmatter:{}}),(r,t)=>{const n=y("DemoBlock");return m(),v("div",$,[t[0]||(t[0]=e("h1",{id:"inputnumber-",tabindex:"-1"},"InputNumber 数字输入框",-1)),t[1]||(t[1]=e("p",null,"通过鼠标或键盘，输入范围内的数值。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("p",null,"当需要获取标准数值时。",-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"数字输入框。",-1)),l(n,{title:"基础用法",source:o(B)},{default:b(()=>[l(k)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"最大最小值",-1)),t[8]||(t[8]=e("p",null,[s("通过 "),e("code",null,"min"),s(" 和 "),e("code",null,"max"),s(" 限制输入范围，通过 "),e("code",null,"step"),s(" 设置步长。")],-1)),l(n,{title:"最大最小值",source:o(U)},{default:b(()=>[l(E)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-4",tabindex:"-1"},"前后缀",-1)),t[10]||(t[10]=e("p",null,"带有前缀或后缀的数字输入框。",-1)),l(n,{title:"前后缀",source:o(N)},{default:b(()=>[l(w)]),_:1},8,["source"]),t[11]||(t[11]=g('<h2 id="api" tabindex="-1">API</h2><h3 id="inputnumber-props" tabindex="-1">InputNumber Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>当前值</td><td><code>number | null</code></td><td>-</td></tr><tr><td>defaultValue</td><td>初始值</td><td><code>number</code></td><td>-</td></tr><tr><td>min</td><td>最小值</td><td><code>number</code></td><td><code>-Infinity</code></td></tr><tr><td>max</td><td>最大值</td><td><code>number</code></td><td><code>Infinity</code></td></tr><tr><td>step</td><td>每次改变步数，可以为小数</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>precision</td><td>数值精度</td><td><code>number</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>prefix</td><td>带有前缀图标的 input</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>addonBefore</td><td>带标签的 input，设置前置标签</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>addonAfter</td><td>带标签的 input，设置后置标签</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>controls</td><td>是否显示增减按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>keyboard</td><td>是否启用键盘快捷行为</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>placeholder</td><td>占位符</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="inputnumber-events" tabindex="-1">InputNumber Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>变化回调</td><td><code>(value: number | null) =&gt; void</code></td></tr><tr><td>change</td><td>变化回调</td><td><code>(value: number | null) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>pressEnter</td><td>按下回车的回调</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr><tr><td>step</td><td>点击上下箭头的回调</td><td><code>(value: number, info: { offset: number; type: &#39;up&#39; | &#39;down&#39; }) =&gt; void</code></td></tr></tbody></table>',5))])}}};export{C as default};
