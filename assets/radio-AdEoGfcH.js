import{a as c,R as b,b as h}from"./index-DztaC8xV.js";import{d as R,o as k,b as g,c as e,e as s,w as l,g as i,f as t,A as x,r as u,_ as w,h as z,i as B}from"./index-Da5IF3ma.js";import"./cls-S9IiI6wd.js";const G={style:{display:"flex","flex-direction":"column",gap:"8px"}},N=R({__name:"RadioBasic",setup(y){const r=u(!1),m=u(!1),v=u(!0);return(o,d)=>(k(),g("div",G,[e(s(c),{checked:r.value,"onUpdate:checked":d[0]||(d[0]=a=>r.value=a)},{default:l(()=>[...d[3]||(d[3]=[i(" 单选框 ",-1)])]),_:1},8,["checked"]),e(s(c),{checked:m.value,"onUpdate:checked":d[1]||(d[1]=a=>m.value=a),disabled:""},{default:l(()=>[...d[4]||(d[4]=[i(" 禁用单选框 ",-1)])]),_:1},8,["checked"]),e(s(c),{checked:v.value,"onUpdate:checked":d[2]||(d[2]=a=>v.value=a),disabled:""},{default:l(()=>[...d[5]||(d[5]=[i(" 禁用选中 ",-1)])]),_:1},8,["checked"]),t("p",null,"checked: "+x(r.value),1)]))}}),q=`<template>
  <div style="display: flex; flex-direction: column; gap: 8px">
    <Radio v-model:checked="checked"> 单选框 </Radio>
    <Radio v-model:checked="checked2" disabled> 禁用单选框 </Radio>
    <Radio v-model:checked="checked3" disabled> 禁用选中 </Radio>
    <p>checked: {{ checked }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Radio } from '@hmfw/ant-design'

const checked = ref(false)
const checked2 = ref(false)
const checked3 = ref(true)
<\/script>
`,A={style:{display:"flex","flex-direction":"column",gap:"16px"}},S=R({__name:"RadioButton",setup(y){const r=u("middle"),m=u("middle"),v=u("large"),o=u("small"),d=u("middle"),a=[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}];return(f,n)=>(k(),g("div",A,[t("div",null,[n[5]||(n[5]=t("p",{style:{"margin-bottom":"8px"}},"outline 样式（默认）：",-1)),e(s(b),{value:r.value,"onUpdate:value":n[0]||(n[0]=p=>r.value=p),options:a,"option-type":"button","button-style":"outline"},null,8,["value"])]),t("div",null,[n[6]||(n[6]=t("p",{style:{"margin-bottom":"8px"}},"solid 样式：",-1)),e(s(b),{value:m.value,"onUpdate:value":n[1]||(n[1]=p=>m.value=p),options:a,"option-type":"button","button-style":"solid"},null,8,["value"])]),t("div",null,[n[7]||(n[7]=t("p",{style:{"margin-bottom":"8px"}},"大尺寸：",-1)),e(s(b),{value:v.value,"onUpdate:value":n[2]||(n[2]=p=>v.value=p),options:a,"option-type":"button",size:"large"},null,8,["value"])]),t("div",null,[n[8]||(n[8]=t("p",{style:{"margin-bottom":"8px"}},"小尺寸：",-1)),e(s(b),{value:o.value,"onUpdate:value":n[3]||(n[3]=p=>o.value=p),options:a,"option-type":"button",size:"small"},null,8,["value"])]),t("div",null,[n[9]||(n[9]=t("p",{style:{"margin-bottom":"8px"}},"禁用状态：",-1)),e(s(b),{value:d.value,"onUpdate:value":n[4]||(n[4]=p=>d.value=p),options:a,"option-type":"button",disabled:""},null,8,["value"])]),t("p",null,"选中："+x(r.value),1)]))}}),C=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 8px">outline 样式（默认）：</p>
      <RadioGroup v-model:value="size" :options="sizeOptions" option-type="button" button-style="outline" />
    </div>
    <div>
      <p style="margin-bottom: 8px">solid 样式：</p>
      <RadioGroup v-model:value="size2" :options="sizeOptions" option-type="button" button-style="solid" />
    </div>
    <div>
      <p style="margin-bottom: 8px">大尺寸：</p>
      <RadioGroup v-model:value="size3" :options="sizeOptions" option-type="button" size="large" />
    </div>
    <div>
      <p style="margin-bottom: 8px">小尺寸：</p>
      <RadioGroup v-model:value="size4" :options="sizeOptions" option-type="button" size="small" />
    </div>
    <div>
      <p style="margin-bottom: 8px">禁用状态：</p>
      <RadioGroup v-model:value="size5" :options="sizeOptions" option-type="button" disabled />
    </div>
    <p>选中：{{ size }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup } from '@hmfw/ant-design'

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
`,U={class:"demo-radio-classnames"},E={class:"demo-section"},O={class:"demo-section"},$={class:"demo-section"},P={class:"demo-section"},D={class:"demo-section"},M={class:"demo-section"},V=R({__name:"RadioClassNames",setup(y){const r=u(1),m=u(1),v=u(1),o=u(1),d=u(1),a=u(1);return(f,n)=>(k(),g("div",U,[t("section",E,[n[8]||(n[8]=t("h3",null,"1. 自定义根节点样式",-1)),e(s(b),{value:r.value,"onUpdate:value":n[0]||(n[0]=p=>r.value=p)},{default:l(()=>[e(s(c),{value:1,"class-names":{root:"custom-root"}},{default:l(()=>[...n[6]||(n[6]=[i(" 自定义根节点 A ",-1)])]),_:1}),e(s(c),{value:2,"class-names":{root:"custom-root"}},{default:l(()=>[...n[7]||(n[7]=[i(" 自定义根节点 B ",-1)])]),_:1})]),_:1},8,["value"])]),t("section",O,[n[11]||(n[11]=t("h3",null,"2. 自定义单选框样式",-1)),e(s(b),{value:m.value,"onUpdate:value":n[1]||(n[1]=p=>m.value=p)},{default:l(()=>[e(s(c),{value:1,"class-names":{radio:"custom-radio"}},{default:l(()=>[...n[9]||(n[9]=[i(" 方形单选框 A ",-1)])]),_:1}),e(s(c),{value:2,"class-names":{radio:"custom-radio"}},{default:l(()=>[...n[10]||(n[10]=[i(" 方形单选框 B ",-1)])]),_:1})]),_:1},8,["value"])]),t("section",$,[n[14]||(n[14]=t("h3",null,"3. 自定义内部选择图标",-1)),e(s(b),{value:v.value,"onUpdate:value":n[2]||(n[2]=p=>v.value=p)},{default:l(()=>[e(s(c),{value:1,"class-names":{inner:"custom-inner"}},{default:l(()=>[...n[12]||(n[12]=[i(" 心形选择 A ",-1)])]),_:1}),e(s(c),{value:2,"class-names":{inner:"custom-inner"}},{default:l(()=>[...n[13]||(n[13]=[i(" 心形选择 B ",-1)])]),_:1})]),_:1},8,["value"])]),t("section",P,[n[17]||(n[17]=t("h3",null,"4. 自定义文本标签样式",-1)),e(s(b),{value:o.value,"onUpdate:value":n[3]||(n[3]=p=>o.value=p)},{default:l(()=>[e(s(c),{value:1,"class-names":{label:"custom-label"}},{default:l(()=>[...n[15]||(n[15]=[i(" 渐变文字 A ",-1)])]),_:1}),e(s(c),{value:2,"class-names":{label:"custom-label"}},{default:l(()=>[...n[16]||(n[16]=[i(" 渐变文字 B ",-1)])]),_:1})]),_:1},8,["value"])]),t("section",D,[n[20]||(n[20]=t("h3",null,"5. 组合使用多个 classNames",-1)),e(s(b),{value:d.value,"onUpdate:value":n[4]||(n[4]=p=>d.value=p)},{default:l(()=>[e(s(c),{value:1,"class-names":{root:"combined-root",radio:"combined-radio",inner:"combined-inner",label:"combined-label"}},{default:l(()=>[...n[18]||(n[18]=[i(" 组合样式 A ",-1)])]),_:1}),e(s(c),{value:2,"class-names":{root:"combined-root",radio:"combined-radio",inner:"combined-inner",label:"combined-label"}},{default:l(()=>[...n[19]||(n[19]=[i(" 组合样式 B ",-1)])]),_:1})]),_:1},8,["value"])]),t("section",M,[n[23]||(n[23]=t("h3",null,"6. 使用 styles 动态样式",-1)),e(s(b),{value:a.value,"onUpdate:value":n[5]||(n[5]=p=>a.value=p)},{default:l(()=>[e(s(c),{value:1,styles:{root:{padding:"8px 16px",border:"2px solid #1890ff",borderRadius:"8px",marginBottom:"8px"},radio:{transform:"scale(1.2)"},label:{fontWeight:"bold",color:"#1890ff"}}},{default:l(()=>[...n[21]||(n[21]=[i(" 动态样式 A ",-1)])]),_:1}),e(s(c),{value:2,styles:{root:{padding:"8px 16px",border:"2px solid #52c41a",borderRadius:"8px"},radio:{transform:"scale(1.2)"},label:{fontWeight:"bold",color:"#52c41a"}}},{default:l(()=>[...n[22]||(n[22]=[i(" 动态样式 B ",-1)])]),_:1})]),_:1},8,["value"])])]))}}),W=w(V,[["__scopeId","data-v-c722d940"]]),I=`<template>
  <div class="demo-radio-classnames">
    <!-- 场景 1: 自定义根节点 -->
    <section class="demo-section">
      <h3>1. 自定义根节点样式</h3>
      <RadioGroup v-model:value="value1">
        <Radio :value="1" :class-names="{ root: 'custom-root' }"> 自定义根节点 A </Radio>
        <Radio :value="2" :class-names="{ root: 'custom-root' }"> 自定义根节点 B </Radio>
      </RadioGroup>
    </section>

    <!-- 场景 2: 自定义单选框 -->
    <section class="demo-section">
      <h3>2. 自定义单选框样式</h3>
      <RadioGroup v-model:value="value2">
        <Radio :value="1" :class-names="{ radio: 'custom-radio' }"> 方形单选框 A </Radio>
        <Radio :value="2" :class-names="{ radio: 'custom-radio' }"> 方形单选框 B </Radio>
      </RadioGroup>
    </section>

    <!-- 场景 3: 自定义内部选择图标 -->
    <section class="demo-section">
      <h3>3. 自定义内部选择图标</h3>
      <RadioGroup v-model:value="value3">
        <Radio :value="1" :class-names="{ inner: 'custom-inner' }"> 心形选择 A </Radio>
        <Radio :value="2" :class-names="{ inner: 'custom-inner' }"> 心形选择 B </Radio>
      </RadioGroup>
    </section>

    <!-- 场景 4: 自定义文本标签 -->
    <section class="demo-section">
      <h3>4. 自定义文本标签样式</h3>
      <RadioGroup v-model:value="value4">
        <Radio :value="1" :class-names="{ label: 'custom-label' }"> 渐变文字 A </Radio>
        <Radio :value="2" :class-names="{ label: 'custom-label' }"> 渐变文字 B </Radio>
      </RadioGroup>
    </section>

    <!-- 场景 5: 组合使用多个 classNames -->
    <section class="demo-section">
      <h3>5. 组合使用多个 classNames</h3>
      <RadioGroup v-model:value="value5">
        <Radio
          :value="1"
          :class-names="{
            root: 'combined-root',
            radio: 'combined-radio',
            inner: 'combined-inner',
            label: 'combined-label',
          }"
        >
          组合样式 A
        </Radio>
        <Radio
          :value="2"
          :class-names="{
            root: 'combined-root',
            radio: 'combined-radio',
            inner: 'combined-inner',
            label: 'combined-label',
          }"
        >
          组合样式 B
        </Radio>
      </RadioGroup>
    </section>

    <!-- 场景 6: 使用 styles prop -->
    <section class="demo-section">
      <h3>6. 使用 styles 动态样式</h3>
      <RadioGroup v-model:value="value6">
        <Radio
          :value="1"
          :styles="{
            root: { padding: '8px 16px', border: '2px solid #1890ff', borderRadius: '8px', marginBottom: '8px' },
            radio: { transform: 'scale(1.2)' },
            label: { fontWeight: 'bold', color: '#1890ff' },
          }"
        >
          动态样式 A
        </Radio>
        <Radio
          :value="2"
          :styles="{
            root: { padding: '8px 16px', border: '2px solid #52c41a', borderRadius: '8px' },
            radio: { transform: 'scale(1.2)' },
            label: { fontWeight: 'bold', color: '#52c41a' },
          }"
        >
          动态样式 B
        </Radio>
      </RadioGroup>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Radio, RadioGroup } from '@hmfw/ant-design'

const value1 = ref(1)
const value2 = ref(1)
const value3 = ref(1)
const value4 = ref(1)
const value5 = ref(1)
const value6 = ref(1)
<\/script>

<style scoped>
.demo-radio-classnames {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-section {
  padding: 16px;
  background: #fafafa;
  border-radius: 8px;
}

.demo-section h3 {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #666;
}

/* 场景 1: 自定义根节点 */
:deep(.custom-root) {
  padding: 12px 16px;
  background: linear-gradient(135deg, #fa8bff 0%, #2bd2ff 52%, #2bff88 90%);
  border-radius: 8px;
  color: white;
  transition: all 0.3s ease;
  margin-bottom: 8px;
}

:deep(.custom-root:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(250, 139, 255, 0.4);
}

/* 场景 2: 自定义单选框为方形 */
:deep(.custom-radio),
:deep(.custom-radio .hmfw-radio-inner) {
  border-radius: 4px !important;
}

:deep(.custom-radio) {
  border: 2px solid #13c2c2;
}

:deep(.hmfw-radio-checked.custom-radio .hmfw-radio-inner::after) {
  border-radius: 2px !important;
}

/* 场景 3: 自定义内部选择图标为心形 */
:deep(.custom-inner::after) {
  content: '♥';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  color: #eb2f96;
  font-size: 12px;
  border: none !important;
  background: transparent !important;
  transition: transform 0.3s ease;
}

:deep(.hmfw-radio-checked .custom-inner::after) {
  transform: translate(-50%, -50%) scale(1);
}

/* 场景 4: 渐变文字标签 */
:deep(.custom-label) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 16px;
}

/* 场景 5: 组合样式 */
:deep(.combined-root) {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border: 2px dashed #722ed1;
  border-radius: 6px;
  background: #f9f0ff;
  transition: all 0.3s ease;
  margin-bottom: 8px;
}

:deep(.combined-root:hover) {
  border-color: #9254de;
  background: #efdbff;
}

:deep(.combined-radio) {
  border: 2px solid #722ed1;
}

:deep(.combined-inner) {
  background: #722ed1 !important;
}

:deep(.hmfw-radio-checked .combined-inner::after) {
  background-color: white !important;
}

:deep(.combined-label) {
  color: #531dab;
  font-weight: 500;
}
</style>
`,T={style:{display:"flex","flex-direction":"column",gap:"16px"}},F=R({__name:"RadioGroup",setup(y){const r=u("a"),m=u("b"),v=[{label:"选项 A",value:"a"},{label:"选项 B",value:"b"},{label:"选项 C",value:"c"},{label:"禁用选项",value:"d",disabled:!0}];return(o,d)=>(k(),g("div",T,[t("div",null,[d[2]||(d[2]=t("p",{style:{"margin-bottom":"8px"}},"水平排列：",-1)),e(s(b),{value:r.value,"onUpdate:value":d[0]||(d[0]=a=>r.value=a),options:v},null,8,["value"])]),t("div",null,[d[3]||(d[3]=t("p",{style:{"margin-bottom":"8px"}},"垂直排列：",-1)),e(s(b),{value:m.value,"onUpdate:value":d[1]||(d[1]=a=>m.value=a),options:v,direction:"vertical"},null,8,["value"])]),t("p",null,"value1: "+x(r.value)+"，value2: "+x(m.value),1)]))}}),Y=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 8px">水平排列：</p>
      <RadioGroup v-model:value="value1" :options="options" />
    </div>
    <div>
      <p style="margin-bottom: 8px">垂直排列：</p>
      <RadioGroup v-model:value="value2" :options="options" direction="vertical" />
    </div>
    <p>value1: {{ value1 }}，value2: {{ value2 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup } from '@hmfw/ant-design'

const value1 = ref('a')
const value2 = ref('b')

const options = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' },
  { label: '禁用选项', value: 'd', disabled: true },
]
<\/script>
`,j={style:{display:"flex","flex-direction":"column",gap:"16px"}},H={style:{display:"flex",gap:"16px","align-items":"center"}},J=R({__name:"RadioIdBinding",setup(y){const r=u("a"),m=u(!1),v=u("middle"),o=u("light");return(d,a)=>(k(),g("div",j,[t("div",null,[a[7]||(a[7]=t("p",{style:{"margin-bottom":"8px"}},"id 属性自动绑定到原生 input：",-1)),e(s(b),{value:r.value,"onUpdate:value":a[0]||(a[0]=f=>r.value=f)},{default:l(()=>[e(s(c),{id:"radio-a",value:"a"},{default:l(()=>[...a[4]||(a[4]=[i(' 选项 A（id="radio-a"） ',-1)])]),_:1}),e(s(c),{id:"radio-b",value:"b"},{default:l(()=>[...a[5]||(a[5]=[i(' 选项 B（id="radio-b"） ',-1)])]),_:1}),e(s(c),{id:"radio-c",value:"c"},{default:l(()=>[...a[6]||(a[6]=[i(' 选项 C（id="radio-c"） ',-1)])]),_:1})]),_:1},8,["value"])]),t("div",null,[a[9]||(a[9]=t("p",{style:{"margin-bottom":"8px"}},"通过 label[for] 配合使用：",-1)),t("div",H,[e(s(c),{id:"payment-alipay",checked:m.value,"onUpdate:checked":a[1]||(a[1]=f=>m.value=f),value:"alipay"},null,8,["checked"]),a[8]||(a[8]=t("label",{for:"payment-alipay",style:{cursor:"pointer","user-select":"none"}}," 支付宝支付 ",-1))])]),t("div",null,[a[10]||(a[10]=t("p",{style:{"margin-bottom":"8px"}},"RadioGroup 中的 id：",-1)),e(s(b),{value:v.value,"onUpdate:value":a[2]||(a[2]=f=>v.value=f),options:[{label:"大",value:"large",id:"size-large"},{label:"中",value:"middle",id:"size-middle"},{label:"小",value:"small",id:"size-small"}]},null,8,["value"])]),t("div",null,[a[14]||(a[14]=t("p",{style:{"margin-bottom":"8px"}},"RadioButton 中的 id：",-1)),e(s(b),{value:o.value,"onUpdate:value":a[3]||(a[3]=f=>o.value=f),"option-type":"button"},{default:l(()=>[e(s(h),{id:"theme-light",value:"light"},{default:l(()=>[...a[11]||(a[11]=[i(" 浅色 ",-1)])]),_:1}),e(s(h),{id:"theme-dark",value:"dark"},{default:l(()=>[...a[12]||(a[12]=[i(" 深色 ",-1)])]),_:1}),e(s(h),{id:"theme-auto",value:"auto"},{default:l(()=>[...a[13]||(a[13]=[i(" 自动 ",-1)])]),_:1})]),_:1},8,["value"])]),t("div",null,[t("p",null,"状态："+x({selectedOption:r.value,paymentMethod:m.value,size:v.value,theme:o.value}),1)]),a[15]||(a[15]=t("div",null,[t("p",{style:{"margin-bottom":"8px"}},"用例说明："),t("ul",{style:{margin:"0","padding-left":"20px"}},[t("li",null,'id 属性自动绑定到原生 <input type="radio"> 元素'),t("li",null,'可以配合 <label for="..."> 实现点击文本选中单选框'),t("li",null,"在 RadioGroup 的 options 中也可以指定 id"),t("li",null,"RadioButton 同样支持 id 属性")])],-1))]))}}),K=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 8px">id 属性自动绑定到原生 input：</p>
      <RadioGroup v-model:value="selectedOption">
        <Radio id="radio-a" value="a"> 选项 A（id="radio-a"） </Radio>
        <Radio id="radio-b" value="b"> 选项 B（id="radio-b"） </Radio>
        <Radio id="radio-c" value="c"> 选项 C（id="radio-c"） </Radio>
      </RadioGroup>
    </div>
    <div>
      <p style="margin-bottom: 8px">通过 label[for] 配合使用：</p>
      <div style="display: flex; gap: 16px; align-items: center">
        <Radio id="payment-alipay" v-model:checked="paymentMethod" value="alipay" />
        <label for="payment-alipay" style="cursor: pointer; user-select: none"> 支付宝支付 </label>
      </div>
    </div>
    <div>
      <p style="margin-bottom: 8px">RadioGroup 中的 id：</p>
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
      <p style="margin-bottom: 8px">RadioButton 中的 id：</p>
      <RadioGroup v-model:value="theme" option-type="button">
        <RadioButton id="theme-light" value="light"> 浅色 </RadioButton>
        <RadioButton id="theme-dark" value="dark"> 深色 </RadioButton>
        <RadioButton id="theme-auto" value="auto"> 自动 </RadioButton>
      </RadioGroup>
    </div>
    <div>
      <p>状态：{{ { selectedOption, paymentMethod, size, theme } }}</p>
    </div>
    <div>
      <p style="margin-bottom: 8px">用例说明：</p>
      <ul style="margin: 0; padding-left: 20px">
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
import { RadioGroup, Radio, RadioButton } from '@hmfw/ant-design'

const selectedOption = ref('a')
const paymentMethod = ref(false)
const size = ref('middle')
const theme = ref('light')
<\/script>
`,L={class:"markdown-body"},_={__name:"radio",setup(y,{expose:r}){return r({frontmatter:{}}),(v,o)=>{const d=z("DemoBlock");return k(),g("div",L,[o[0]||(o[0]=t("h1",{id:"radio-单选框",tabindex:"-1"},"Radio 单选框",-1)),o[1]||(o[1]=t("p",null,"单选框。",-1)),o[2]||(o[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),o[3]||(o[3]=t("ul",null,[t("li",null,"用于在多个备选项中选中单个状态。"),t("li",null,"和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。")],-1)),o[4]||(o[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),o[5]||(o[5]=t("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),o[6]||(o[6]=t("p",null,"最简单的用法。",-1)),e(d,{title:"基础用法",source:s(q)},{default:l(()=>[e(N)]),_:1},8,["source"]),o[7]||(o[7]=t("h3",{id:"radiogroup",tabindex:"-1"},"RadioGroup",-1)),o[8]||(o[8]=t("p",null,"一组互斥的 Radio 配合使用。",-1)),e(d,{title:"RadioGroup",source:s(Y)},{default:l(()=>[e(F)]),_:1},8,["source"]),o[9]||(o[9]=t("h3",{id:"按钮样式",tabindex:"-1"},"按钮样式",-1)),o[10]||(o[10]=t("p",null,"按钮样式的单选组合。",-1)),e(d,{title:"按钮样式",source:s(C)},{default:l(()=>[e(S)]),_:1},8,["source"]),o[11]||(o[11]=t("h3",{id:"id-属性绑定",tabindex:"-1"},"id 属性绑定",-1)),o[12]||(o[12]=t("p",null,"id 属性会自动绑定到原生 input 元素，方便配合 label 使用。",-1)),e(d,{title:"id 属性",source:s(K)},{default:l(()=>[e(J)]),_:1},8,["source"]),o[13]||(o[13]=t("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),o[14]||(o[14]=t("p",null,[i("通过 "),t("code",null,"classNames"),i(" / "),t("code",null,"styles"),i(" 对各子元素做细粒度样式控制。")],-1)),e(d,{title:"语义化 className 与 style",source:s(I)},{default:l(()=>[e(W)]),_:1},8,["source"]),o[15]||(o[15]=B(`<h2 id="api" tabindex="-1">API</h2><h3 id="radio-props" tabindex="-1">Radio Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>禁用 Radio</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>value</td><td>根据 value 进行比较，判断是否选中</td><td><code>string | number</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化 className（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">详见下方</a>）</td><td><code>RadioClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 style（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">详见下方</a>）</td><td><code>RadioStyles</code></td><td>-</td></tr></tbody></table><h3 id="radiogroup-props" tabindex="-1">RadioGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>用于设置当前选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>options</td><td>以配置形式设置子元素</td><td><code>Array&lt;{ label: string; value: string | number; disabled?: boolean }&gt;</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>禁选所有子单选器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>direction</td><td>排列方向</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>optionType</td><td>用于设置 Radio options 类型</td><td><code>&#39;default&#39; | &#39;button&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>buttonStyle</td><td>RadioButton 的风格样式，目前有描边和填色两种风格</td><td><code>&#39;outline&#39; | &#39;solid&#39;</code></td><td><code>&#39;outline&#39;</code></td></tr><tr><td>size</td><td>大小，只对按钮样式生效</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr></tbody></table><h3 id="radio-events" tabindex="-1">Radio Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(event: Event) =&gt; void</code></td></tr></tbody></table><h3 id="radiogroup-events" tabindex="-1">RadioGroup Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr><tr><td>change</td><td>选项变化时的回调函数</td><td><code>(event: Event) =&gt; void</code></td></tr></tbody></table><h3 id="radio-slots" tabindex="-1">Radio Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>Radio 的内容</td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对Radio的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">RadioClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 label.hmfw-radio-wrapper</span>
  radio<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单选框容器 span.hmfw-radio</span>
  input<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 原生 input 元素 input.hmfw-radio-input</span>
  inner<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 视觉圆形选择框 span.hmfw-radio-inner</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 文本标签 span.hmfw-radio-label</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">RadioStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 根节点 label.hmfw-radio-wrapper</span>
  radio<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 单选框容器 span.hmfw-radio</span>
  input<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 原生 input 元素 input.hmfw-radio-input</span>
  inner<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 视觉圆形选择框 span.hmfw-radio-inner</span>
  label<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 文本标签 span.hmfw-radio-label</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-radio-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-radio<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.radio / styles.radio 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-radio-input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.input / styles.input 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-radio-inner<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.inner / styles.inner 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-radio-label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.label / styles.label 应用于此，可选 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span>
    <span class="token attr-name">:classNames</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;my-radio-root&#39;,
      radio: &#39;my-radio-box&#39;,
      inner: &#39;my-radio-inner&#39;,
      label: &#39;my-radio-label&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    自定义样式
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-radio-root)</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 8px 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-radio-inner)</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-radio-label)</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { padding: &#39;8px 16px&#39;, border: &#39;2px solid #1890ff&#39; },
      radio: { transform: &#39;scale(1.2)&#39; },
      label: { fontWeight: &#39;bold&#39;, color: &#39;#1890ff&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    动态样式
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>label</code> 的 className 仅在有文本内容（即 default slot 有内容）时生效</li><li><code>input</code> 元素是原生 <code>&lt;input type=&quot;radio&quot;&gt;</code>，通常隐藏不可见</li><li><code>inner</code> 是视觉上的圆形选择框，可以完全自定义其外观（方形、心形等）</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-bg-container-disabled</code></td><td>禁用容器背景色</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次级填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-active</code></td><td>主题色激活态</td><td><code>#0958d9</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-light-solid</code></td><td>亮色实心文本</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-lg</code></td><td>大号字号</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-control-height</code></td><td>控件高度</td><td><code>32px</code></td></tr><tr><td><code>--hmfw-control-height-lg</code></td><td>大号控件高度</td><td><code>40px</code></td></tr><tr><td><code>--hmfw-control-height-sm</code></td><td>小号控件高度</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>小号圆角</td><td><code>4px</code></td></tr></tbody></table>`,25))])}}};export{_ as default};
