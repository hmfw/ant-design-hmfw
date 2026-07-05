import{I as d}from"./InputNumber-Dp7eGCV-.js";import{d as b,o as k,b as v,c as e,e as o,f as t,A as y,r as i,_ as N,h as q,w as g,g as r,i as I}from"./index-Bp9Mx9oa.js";import"./cls-S9IiI6wd.js";const S={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},$=b({__name:"InputNumberBasic",setup(f){const p=i(null);return(u,c)=>(k(),v("div",S,[e(o(d),{value:p.value,"onUpdate:value":c[0]||(c[0]=n=>p.value=n),placeholder:"请输入数字",style:{width:"100%"}},null,8,["value"]),e(o(d),{value:p.value,"onUpdate:value":c[1]||(c[1]=n=>p.value=n),disabled:"",placeholder:"禁用状态",style:{width:"100%"}},null,8,["value"]),t("p",null,"当前值："+y(p.value),1)]))}}),C=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <InputNumber v-model:value="value" placeholder="请输入数字" style="width: 100%" />
    <InputNumber v-model:value="value" disabled placeholder="禁用状态" style="width: 100%" />
    <p>当前值：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@hmfw/ant-design'

const value = ref<number | null>(null)
<\/script>
`,U={style:{display:"flex","flex-direction":"column",gap:"24px"}},B=b({__name:"InputNumberClassNames",setup(f){const p=i(50),u=i(50),c=i(100),n=i(1e3),a=i(50);return(m,s)=>(k(),v("div",U,[t("div",null,[s[5]||(s[5]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器样式：",-1)),e(o(d),{value:p.value,"onUpdate:value":s[0]||(s[0]=l=>p.value=l),min:0,max:100,"class-names":{root:"custom-root"}},null,8,["value"])]),t("div",null,[s[6]||(s[6]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义输入框与操作按钮：",-1)),e(o(d),{value:u.value,"onUpdate:value":s[1]||(s[1]=l=>u.value=l),min:0,max:100,"class-names":{input:"custom-input",handlerWrap:"custom-handler-wrap",handlerUp:"custom-handler-up",handlerDown:"custom-handler-down"}},null,8,["value"])]),t("div",null,[s[7]||(s[7]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义前后缀：",-1)),e(o(d),{value:c.value,"onUpdate:value":s[2]||(s[2]=l=>c.value=l),prefix:"¥",suffix:"元",min:0,max:1e4,"class-names":{prefix:"custom-prefix",suffix:"custom-suffix"}},null,8,["value"])]),t("div",null,[s[8]||(s[8]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义 addon 分组：",-1)),e(o(d),{value:n.value,"onUpdate:value":s[3]||(s[3]=l=>n.value=l),"addon-before":"价格","addon-after":"元",min:0,max:1e4,"class-names":{groupWrapper:"custom-group-wrapper",addonBefore:"custom-addon-before",addonAfter:"custom-addon-after"}},null,8,["value"])]),t("div",null,[s[9]||(s[9]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),e(o(d),{value:a.value,"onUpdate:value":s[4]||(s[4]=l=>a.value=l),min:0,max:100,styles:{root:{borderColor:"#722ed1",borderWidth:"2px"},input:{color:"#722ed1",fontWeight:"bold"},handlerWrap:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}}},null,8,["value"])])]))}}),W=N(B,[["__scopeId","data-v-a79ee802"]]),D=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器样式：</div>
      <InputNumber v-model:value="value1" :min="0" :max="100" :class-names="{ root: 'custom-root' }" />
    </div>

    <!-- 场景 2：自定义输入框和操作按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义输入框与操作按钮：</div>
      <InputNumber
        v-model:value="value2"
        :min="0"
        :max="100"
        :class-names="{
          input: 'custom-input',
          handlerWrap: 'custom-handler-wrap',
          handlerUp: 'custom-handler-up',
          handlerDown: 'custom-handler-down',
        }"
      />
    </div>

    <!-- 场景 3：带前后缀的自定义样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义前后缀：</div>
      <InputNumber
        v-model:value="value3"
        prefix="¥"
        suffix="元"
        :min="0"
        :max="10000"
        :class-names="{
          prefix: 'custom-prefix',
          suffix: 'custom-suffix',
        }"
      />
    </div>

    <!-- 场景 4：带 addon 的组合样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义 addon 分组：</div>
      <InputNumber
        v-model:value="value4"
        addon-before="价格"
        addon-after="元"
        :min="0"
        :max="10000"
        :class-names="{
          groupWrapper: 'custom-group-wrapper',
          addonBefore: 'custom-addon-before',
          addonAfter: 'custom-addon-after',
        }"
      />
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <InputNumber
        v-model:value="value5"
        :min="0"
        :max="100"
        :styles="{
          root: { borderColor: '#722ed1', borderWidth: '2px' },
          input: { color: '#722ed1', fontWeight: 'bold' },
          handlerWrap: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@hmfw/ant-design'

const value1 = ref(50)
const value2 = ref(50)
const value3 = ref(100)
const value4 = ref(1000)
const value5 = ref(50)
<\/script>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:deep(.custom-root .hmfw-input-number-input) {
  color: white;
  background: transparent;
}

:deep(.custom-root .hmfw-input-number-handler-wrap) {
  background: rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
}

:deep(.custom-root .hmfw-input-number-handler) {
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

:deep(.custom-root .hmfw-input-number-handler:hover) {
  background: rgba(255, 255, 255, 0.1);
}

:deep(.custom-input) {
  font-family: 'Courier New', monospace;
  font-size: 16px;
  font-weight: bold;
  color: #1890ff;
  text-align: center;
}

:deep(.custom-handler-wrap) {
  background: linear-gradient(180deg, #f0f5ff 0%, #e6f7ff 100%);
}

:deep(.custom-handler-up) {
  color: #52c41a;
  transition: all 0.3s;
}

:deep(.custom-handler-up:hover) {
  color: #73d13d;
  transform: scale(1.2);
}

:deep(.custom-handler-down) {
  color: #ff4d4f;
  transition: all 0.3s;
}

:deep(.custom-handler-down:hover) {
  color: #ff7875;
  transform: scale(1.2);
}

:deep(.custom-prefix) {
  color: #52c41a;
  font-weight: bold;
  font-size: 16px;
  background: #f6ffed;
  padding: 0 8px;
  margin-right: 4px;
  border-radius: 4px;
}

:deep(.custom-suffix) {
  color: #1890ff;
  font-weight: bold;
  font-size: 12px;
  background: #e6f7ff;
  padding: 0 8px;
  margin-left: 4px;
  border-radius: 4px;
}

:deep(.custom-group-wrapper) {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.3s;
}

:deep(.custom-group-wrapper:hover) {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

:deep(.custom-addon-before) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  font-weight: bold;
  border: none;
}

:deep(.custom-addon-after) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  color: white;
  font-weight: bold;
  border: none;
}
</style>
`,E={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},M=b({__name:"InputNumberFormatter",setup(f){const p=i(1e3),u=i(50),c=(s,l)=>{const[x,h]=`${s}`.split(".")||[],w=`${x}`.replace(/\B(?=(\d{3})+(?!\d))/g,",");return`$ ${h?`${w}.${h}`:`${w}`}`},n=s=>parseFloat(s.replace(/\$\s?|(,*)/g,"")),a=s=>`${s}%`,m=s=>parseFloat(s.replace("%",""));return(s,l)=>(k(),v("div",E,[t("div",null,[l[2]||(l[2]=t("p",{style:{"margin-bottom":"4px"}},"千分位格式化：",-1)),e(o(d),{value:p.value,"onUpdate:value":l[0]||(l[0]=x=>p.value=x),formatter:c,parser:n,style:{width:"100%"}},null,8,["value"])]),t("div",null,[l[3]||(l[3]=t("p",{style:{"margin-bottom":"4px"}},"百分比：",-1)),e(o(d),{value:u.value,"onUpdate:value":l[1]||(l[1]=x=>u.value=x),min:0,max:100,formatter:a,parser:m,style:{width:"100%"}},null,8,["value"])])]))}}),P=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">千分位格式化：</p>
      <InputNumber v-model:value="value1" :formatter="formatter1" :parser="parser1" style="width: 100%" />
    </div>
    <div>
      <p style="margin-bottom: 4px">百分比：</p>
      <InputNumber
        v-model:value="value2"
        :min="0"
        :max="100"
        :formatter="formatter2"
        :parser="parser2"
        style="width: 100%"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@hmfw/ant-design'

const value1 = ref<number>(1000)
const value2 = ref<number>(50)

const formatter1 = (value: number, _info: { userTyping: boolean; input: string }) => {
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
`,F={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},V=b({__name:"InputNumberMinMax",setup(f){const p=i(5),u=i(.5);return(c,n)=>(k(),v("div",F,[t("div",null,[n[2]||(n[2]=t("p",{style:{"margin-bottom":"4px"}},"范围 1-10，步长 1：",-1)),e(o(d),{value:p.value,"onUpdate:value":n[0]||(n[0]=a=>p.value=a),min:1,max:10,step:1,style:{width:"100%"}},null,8,["value"])]),t("div",null,[n[3]||(n[3]=t("p",{style:{"margin-bottom":"4px"}},"范围 0-1，步长 0.1，精度 1：",-1)),e(o(d),{value:u.value,"onUpdate:value":n[1]||(n[1]=a=>u.value=a),min:0,max:1,step:.1,precision:1,style:{width:"100%"}},null,8,["value"])]),t("p",null,"value1: "+y(p.value)+"，value2: "+y(u.value),1)]))}}),A=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">范围 1-10，步长 1：</p>
      <InputNumber v-model:value="value1" :min="1" :max="10" :step="1" style="width: 100%" />
    </div>
    <div>
      <p style="margin-bottom: 4px">范围 0-1，步长 0.1，精度 1：</p>
      <InputNumber v-model:value="value2" :min="0" :max="1" :step="0.1" :precision="1" style="width: 100%" />
    </div>
    <p>value1: {{ value1 }}，value2: {{ value2 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@hmfw/ant-design'

const value1 = ref<number>(5)
const value2 = ref<number>(0.5)
<\/script>
`,T={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},O=b({__name:"InputNumberMode",setup(f){const p=i(3),u=i(3);return(c,n)=>(k(),v("div",T,[t("div",null,[n[2]||(n[2]=t("p",{style:{"margin-bottom":"4px"}},"Input 模式（默认）：",-1)),e(o(d),{value:p.value,"onUpdate:value":n[0]||(n[0]=a=>p.value=a),min:1,max:10,style:{width:"100%"}},null,8,["value"])]),t("div",null,[n[3]||(n[3]=t("p",{style:{"margin-bottom":"4px"}},"Spinner 模式：",-1)),e(o(d),{value:u.value,"onUpdate:value":n[1]||(n[1]=a=>u.value=a),mode:"spinner",min:1,max:10,style:{width:"100%"}},null,8,["value"])])]))}}),z=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">Input 模式（默认）：</p>
      <InputNumber v-model:value="value1" :min="1" :max="10" style="width: 100%" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Spinner 模式：</p>
      <InputNumber v-model:value="value2" mode="spinner" :min="1" :max="10" style="width: 100%" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@hmfw/ant-design'

const value1 = ref<number>(3)
const value2 = ref<number>(3)
<\/script>
`,R={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},K=b({__name:"InputNumberSuffix",setup(f){const p=i(100),u=i(200),c=i(300);return(n,a)=>(k(),v("div",R,[t("div",null,[a[3]||(a[3]=t("p",{style:{"margin-bottom":"4px"}},"带前缀：",-1)),e(o(d),{value:p.value,"onUpdate:value":a[0]||(a[0]=m=>p.value=m),prefix:"¥",style:{width:"100%"}},null,8,["value"])]),t("div",null,[a[4]||(a[4]=t("p",{style:{"margin-bottom":"4px"}},"带后缀：",-1)),e(o(d),{value:u.value,"onUpdate:value":a[1]||(a[1]=m=>u.value=m),suffix:"RMB",style:{width:"100%"}},null,8,["value"])]),t("div",null,[a[5]||(a[5]=t("p",{style:{"margin-bottom":"4px"}},"前缀 + 后缀：",-1)),e(o(d),{value:c.value,"onUpdate:value":a[2]||(a[2]=m=>c.value=m),prefix:"¥",suffix:"元",style:{width:"100%"}},null,8,["value"])])]))}}),Y=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">带前缀：</p>
      <InputNumber v-model:value="value1" prefix="¥" style="width: 100%" />
    </div>
    <div>
      <p style="margin-bottom: 4px">带后缀：</p>
      <InputNumber v-model:value="value2" suffix="RMB" style="width: 100%" />
    </div>
    <div>
      <p style="margin-bottom: 4px">前缀 + 后缀：</p>
      <InputNumber v-model:value="value3" prefix="¥" suffix="元" style="width: 100%" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@hmfw/ant-design'

const value1 = ref<number>(100)
const value2 = ref<number>(200)
const value3 = ref<number>(300)
<\/script>
`,j={class:"markdown-body"},L={__name:"input-number",setup(f,{expose:p}){return p({frontmatter:{}}),(c,n)=>{const a=q("DemoBlock");return k(),v("div",j,[n[0]||(n[0]=t("h1",{id:"inputnumber-数字输入框",tabindex:"-1"},"InputNumber 数字输入框",-1)),n[1]||(n[1]=t("p",null,"通过鼠标或键盘，输入范围内的数值。",-1)),n[2]||(n[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=t("p",null,"当需要获取标准数值时。",-1)),n[4]||(n[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=t("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=t("p",null,"数字输入框。",-1)),e(a,{title:"基础用法",source:o(C)},{default:g(()=>[e($)]),_:1},8,["source"]),n[7]||(n[7]=t("h3",{id:"最大最小值",tabindex:"-1"},"最大最小值",-1)),n[8]||(n[8]=t("p",null,[r("通过 "),t("code",null,"min"),r(" 和 "),t("code",null,"max"),r(" 限制输入范围，通过 "),t("code",null,"step"),r(" 设置步长。")],-1)),e(a,{title:"最大最小值",source:o(A)},{default:g(()=>[e(V)]),_:1},8,["source"]),n[9]||(n[9]=t("h3",{id:"前缀和后缀",tabindex:"-1"},"前缀和后缀",-1)),n[10]||(n[10]=t("p",null,[r("使用 "),t("code",null,"prefix"),r(" 和 "),t("code",null,"suffix"),r(" 添加前缀和后缀。")],-1)),e(a,{title:"前缀和后缀",source:o(Y)},{default:g(()=>[e(K)]),_:1},8,["source"]),n[11]||(n[11]=t("h3",{id:"显示模式",tabindex:"-1"},"显示模式",-1)),n[12]||(n[12]=t("p",null,[r("支持 "),t("code",null,"input"),r(" 和 "),t("code",null,"spinner"),r(" 两种模式。")],-1)),e(a,{title:"显示模式",source:o(z)},{default:g(()=>[e(O)]),_:1},8,["source"]),n[13]||(n[13]=t("h3",{id:"格式化展示",tabindex:"-1"},"格式化展示",-1)),n[14]||(n[14]=t("p",null,[r("通过 "),t("code",null,"formatter"),r(" 格式化数字，以展示具有具体含义的数据，往往需要配合 "),t("code",null,"parser"),r(" 一起使用。")],-1)),e(a,{title:"格式化展示",source:o(P)},{default:g(()=>[e(M)]),_:1},8,["source"]),n[15]||(n[15]=t("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[16]||(n[16]=t("p",null,[r("通过 "),t("code",null,"classNames"),r(" / "),t("code",null,"styles"),r(" 对各子元素做细粒度样式控制。")],-1)),e(a,{title:"语义化 className 与 style",source:o(D)},{default:g(()=>[e(W)]),_:1},8,["source"]),n[17]||(n[17]=I(`<h2 id="api" tabindex="-1">API</h2><h3 id="inputnumber-props" tabindex="-1">InputNumber Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>当前值</td><td><code>number | null</code></td><td>-</td></tr><tr><td>defaultValue</td><td>初始值</td><td><code>number</code></td><td>-</td></tr><tr><td>min</td><td>最小值</td><td><code>number</code></td><td><code>-Infinity</code></td></tr><tr><td>max</td><td>最大值</td><td><code>number</code></td><td><code>Infinity</code></td></tr><tr><td>step</td><td>每次改变步数，可以为小数</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>precision</td><td>数值精度</td><td><code>number</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>readOnly</td><td>只读</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>mode</td><td>显示模式</td><td><code>&#39;input&#39; | &#39;spinner&#39;</code></td><td><code>&#39;input&#39;</code></td></tr><tr><td>prefix</td><td>前缀图标或文本</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>suffix</td><td>后缀图标或文本</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>controls</td><td>是否显示增减按钮，或自定义图标</td><td><code>boolean | { upIcon?: VNode | string; downIcon?: VNode | string }</code></td><td><code>true</code></td></tr><tr><td>keyboard</td><td>是否启用键盘快捷行为</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>placeholder</td><td>占位符</td><td><code>string</code></td><td>-</td></tr><tr><td>formatter</td><td>指定输入框展示值的格式</td><td><code>(value: number, info: { userTyping: boolean; input: string }) =&gt; string</code></td><td>-</td></tr><tr><td>parser</td><td>指定从 formatter 里转换回数字的方式</td><td><code>(value: string) =&gt; number</code></td><td>-</td></tr><tr><td>changeOnBlur</td><td>是否在失焦时触发 change</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>changeOnWheel</td><td>是否允许鼠标滚轮改变数值</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>decimalSeparator</td><td>小数点</td><td><code>string</code></td><td><code>&#39;.&#39;</code></td></tr><tr><td>stringMode</td><td>字符串模式，开启后支持高精度小数</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>InputNumberClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>InputNumberStyles</code></td><td>-</td></tr></tbody></table><h3 id="inputnumber-events" tabindex="-1">InputNumber Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>变化回调</td><td><code>(value: number | null) =&gt; void</code></td></tr><tr><td>change</td><td>变化回调</td><td><code>(value: number | null) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>pressEnter</td><td>按下回车的回调</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr><tr><td>step</td><td>点击上下箭头的回调</td><td><code>(value: number, info: { offset: number; type: &#39;up&#39; | &#39;down&#39;; emitter: &#39;handler&#39; | &#39;keydown&#39; | &#39;wheel&#39; }) =&gt; void</code></td></tr></tbody></table><h3 id="inputnumber-methods" tabindex="-1">InputNumber Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td><code>(options?: { cursor?: &#39;start&#39; | &#39;end&#39; | &#39;all&#39;; preventScroll?: boolean }) =&gt; void</code></td></tr><tr><td>blur</td><td>移除焦点</td><td><code>() =&gt; void</code></td></tr><tr><td>nativeElement</td><td>获取原生 DOM 元素</td><td>-</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 InputNumber 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">InputNumberClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 div.hmfw-input-number</span>
  input<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 输入框 input.hmfw-input-number-input</span>
  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 前缀 span.hmfw-input-number-prefix</span>
  suffix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 后缀 span.hmfw-input-number-suffix</span>
  handlerWrap<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 操作按钮容器 div.hmfw-input-number-handler-wrap</span>
  handlerUp<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 增加按钮 span.hmfw-input-number-handler-up</span>
  handlerDown<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 减少按钮 span.hmfw-input-number-handler-down</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">InputNumberStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  input<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  prefix<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  suffix<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  handlerWrap<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  handlerUp<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  handlerDown<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 基础结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input-number<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input-number-prefix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.prefix / styles.prefix 应用于此 --&gt;</span>
    ¥
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input-number-input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.input / styles.input 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input-number-suffix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.suffix / styles.suffix 应用于此 --&gt;</span>
    元
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input-number-handler-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.handlerWrap / styles.handlerWrap 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input-number-handler-up<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.handlerUp / styles.handlerUp 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input-number-handler-down<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.handlerDown / styles.handlerDown 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义根容器 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ root: &#39;custom-root&#39; }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义输入框和操作按钮 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      input: &#39;custom-input&#39;,
      handlerUp: &#39;custom-handler-up&#39;,
      handlerDown: &#39;custom-handler-down&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义前后缀 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>¥<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">suffix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>元<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      prefix: &#39;custom-prefix&#39;,
      suffix: &#39;custom-suffix&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.custom-root)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-input)</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Courier New&#39;</span><span class="token punctuation">,</span> monospace<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-handler-up)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #52c41a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-handler-down)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ff4d4f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-prefix)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #52c41a<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f6ffed<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 8px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-suffix)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #e6f7ff<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 8px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { borderColor: &#39;#722ed1&#39;, borderWidth: &#39;2px&#39; },
      input: { color: &#39;#722ed1&#39;, fontWeight: &#39;bold&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义操作按钮容器 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      handlerWrap: { background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39; },
      handlerUp: { color: &#39;#52c41a&#39; },
      handlerDown: { color: &#39;#ff4d4f&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-input-number-disabled</code>、<code>.hmfw-input-number-focused</code>）合并</li><li><code>handlerUp</code> 和 <code>handlerDown</code> 分别对应增加和减少按钮，可单独定制样式</li><li><code>prefix</code> 和 <code>suffix</code> 仅在对应 props 有值时渲染</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>InputNumber 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr></tbody></table>`,25))])}}};export{L as default};
