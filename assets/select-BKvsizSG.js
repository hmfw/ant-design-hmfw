import{S as u}from"./Select-QKM0s4Bn.js";import{o as f,A as v,k as g,n as l,K as d,h as t,J as k,E as r,_ as S,m as i,H as q,R as b,l as C}from"./index-GV1C9GBE.js";import"./cls-S9IiI6wd.js";import"./VirtualList-D1QzxV36.js";const V={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},_=f({__name:"SelectBasic",setup(h){const n=r(""),p=r(""),c=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Svelte（禁用）",value:"svelte",disabled:!0}];return(e,o)=>(v(),g("div",V,[l(d(u),{value:n.value,"onUpdate:value":o[0]||(o[0]=a=>n.value=a),options:c,placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),l(d(u),{value:p.value,"onUpdate:value":o[1]||(o[1]=a=>p.value=a),options:c,placeholder:"禁用状态",disabled:"",style:{width:"100%"}},null,8,["value"]),t("p",null,"选中："+k(n.value),1)]))}}),$=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <Select v-model:value="value" :options="options" placeholder="请选择" style="width: 100%" />
    <Select v-model:value="value2" :options="options" placeholder="禁用状态" disabled style="width: 100%" />
    <p>选中：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from 'ant-design-hmfw'

const value = ref<string>('')
const value2 = ref<string>('')

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte（禁用）', value: 'svelte', disabled: true },
]
<\/script>
`,N={class:"demo-select-classnames"},O={class:"demo-section"},R={class:"demo-section"},z={class:"demo-section"},U={class:"demo-section"},A={class:"demo-section"},L={class:"demo-section"},P={class:"demo-section"},T={class:"demo-section"},B=f({__name:"SelectClassNames",setup(h){const n=[{label:"苹果 🍎",value:"apple"},{label:"香蕉 🍌",value:"banana"},{label:"橙子 🍊",value:"orange"},{label:"草莓 🍓",value:"strawberry"},{label:"葡萄 🍇",value:"grape"}],p=r(void 0),c=r(void 0),e=r(void 0),o=r(void 0),a=r(void 0),x=r([]),w=r(void 0),y=r(void 0);return(vt,s)=>(v(),g("div",N,[t("section",O,[s[8]||(s[8]=t("h3",null,"1. 自定义根节点样式",-1)),l(d(u),{value:p.value,"onUpdate:value":s[0]||(s[0]=m=>p.value=m),options:n,"class-names":{root:"custom-root"},placeholder:"请选择",style:{width:"240px"}},null,8,["value"])]),t("section",R,[s[9]||(s[9]=t("h3",null,"2. 自定义选择器样式",-1)),l(d(u),{value:c.value,"onUpdate:value":s[1]||(s[1]=m=>c.value=m),options:n,"class-names":{selector:"custom-selector"},placeholder:"请选择",style:{width:"240px"}},null,8,["value"])]),t("section",z,[s[10]||(s[10]=t("h3",null,"3. 自定义占位符样式",-1)),l(d(u),{value:e.value,"onUpdate:value":s[2]||(s[2]=m=>e.value=m),options:n,"class-names":{placeholder:"custom-placeholder"},placeholder:"自定义占位符样式",style:{width:"240px"}},null,8,["value"])]),t("section",U,[s[11]||(s[11]=t("h3",null,"4. 自定义下拉面板样式",-1)),l(d(u),{value:o.value,"onUpdate:value":s[3]||(s[3]=m=>o.value=m),options:n,"class-names":{dropdown:"custom-dropdown"},placeholder:"点击查看下拉面板",style:{width:"240px"}},null,8,["value"])]),t("section",A,[s[12]||(s[12]=t("h3",null,"5. 自定义选项样式",-1)),l(d(u),{value:a.value,"onUpdate:value":s[4]||(s[4]=m=>a.value=m),options:n,"class-names":{option:"custom-option",optionLabel:"custom-option-label"},placeholder:"点击查看选项",style:{width:"240px"}},null,8,["value"])]),t("section",L,[s[13]||(s[13]=t("h3",null,"6. 多选模式自定义标签样式",-1)),l(d(u),{value:x.value,"onUpdate:value":s[5]||(s[5]=m=>x.value=m),options:n,mode:"multiple","class-names":{item:"custom-item"},placeholder:"多选",style:{width:"320px"}},null,8,["value"])]),t("section",P,[s[14]||(s[14]=t("h3",null,"7. 组合使用多个 classNames",-1)),l(d(u),{value:w.value,"onUpdate:value":s[6]||(s[6]=m=>w.value=m),options:n,"class-names":{root:"combined-root",selector:"combined-selector",arrow:"combined-arrow",dropdown:"combined-dropdown",option:"combined-option"},placeholder:"综合样式",style:{width:"280px"}},null,8,["value"])]),t("section",T,[s[15]||(s[15]=t("h3",null,"8. 使用 styles 动态样式",-1)),l(d(u),{value:y.value,"onUpdate:value":s[7]||(s[7]=m=>y.value=m),options:n,styles:{root:{borderRadius:"20px",overflow:"hidden"},selector:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none"},dropdown:{borderRadius:"12px",boxShadow:"0 8px 24px rgba(102, 126, 234, 0.3)"}},placeholder:"动态样式",style:{width:"280px"}},null,8,["value"])])]))}}),E=S(B,[["__scopeId","data-v-740c3eab"]]),M=`<template>
  <div class="demo-select-classnames">
    <!-- 场景 1: 自定义根节点 -->
    <section class="demo-section">
      <h3>1. 自定义根节点样式</h3>
      <Select
        v-model:value="value1"
        :options="options"
        :class-names="{ root: 'custom-root' }"
        placeholder="请选择"
        style="width: 240px"
      />
    </section>

    <!-- 场景 2: 自定义选择器 -->
    <section class="demo-section">
      <h3>2. 自定义选择器样式</h3>
      <Select
        v-model:value="value2"
        :options="options"
        :class-names="{ selector: 'custom-selector' }"
        placeholder="请选择"
        style="width: 240px"
      />
    </section>

    <!-- 场景 3: 自定义占位符 -->
    <section class="demo-section">
      <h3>3. 自定义占位符样式</h3>
      <Select
        v-model:value="value3"
        :options="options"
        :class-names="{ placeholder: 'custom-placeholder' }"
        placeholder="自定义占位符样式"
        style="width: 240px"
      />
    </section>

    <!-- 场景 4: 自定义下拉面板 -->
    <section class="demo-section">
      <h3>4. 自定义下拉面板样式</h3>
      <Select
        v-model:value="value4"
        :options="options"
        :class-names="{ dropdown: 'custom-dropdown' }"
        placeholder="点击查看下拉面板"
        style="width: 240px"
      />
    </section>

    <!-- 场景 5: 自定义选项 -->
    <section class="demo-section">
      <h3>5. 自定义选项样式</h3>
      <Select
        v-model:value="value5"
        :options="options"
        :class-names="{ option: 'custom-option', optionLabel: 'custom-option-label' }"
        placeholder="点击查看选项"
        style="width: 240px"
      />
    </section>

    <!-- 场景 6: 多选模式自定义标签 -->
    <section class="demo-section">
      <h3>6. 多选模式自定义标签样式</h3>
      <Select
        v-model:value="value6"
        :options="options"
        mode="multiple"
        :class-names="{ item: 'custom-item' }"
        placeholder="多选"
        style="width: 320px"
      />
    </section>

    <!-- 场景 7: 组合使用多个 classNames -->
    <section class="demo-section">
      <h3>7. 组合使用多个 classNames</h3>
      <Select
        v-model:value="value7"
        :options="options"
        :class-names="{
          root: 'combined-root',
          selector: 'combined-selector',
          arrow: 'combined-arrow',
          dropdown: 'combined-dropdown',
          option: 'combined-option',
        }"
        placeholder="综合样式"
        style="width: 280px"
      />
    </section>

    <!-- 场景 8: 使用 styles prop -->
    <section class="demo-section">
      <h3>8. 使用 styles 动态样式</h3>
      <Select
        v-model:value="value8"
        :options="options"
        :styles="{
          root: { borderRadius: '20px', overflow: 'hidden' },
          selector: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none' },
          dropdown: { borderRadius: '12px', boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)' },
        }"
        placeholder="动态样式"
        style="width: 280px"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '../../../components'

const options = [
  { label: '苹果 🍎', value: 'apple' },
  { label: '香蕉 🍌', value: 'banana' },
  { label: '橙子 🍊', value: 'orange' },
  { label: '草莓 🍓', value: 'strawberry' },
  { label: '葡萄 🍇', value: 'grape' },
]

const value1 = ref(undefined)
const value2 = ref(undefined)
const value3 = ref(undefined)
const value4 = ref(undefined)
const value5 = ref(undefined)
const value6 = ref([])
const value7 = ref(undefined)
const value8 = ref(undefined)
<\/script>

<style scoped>
.demo-select-classnames {
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
  border: 2px solid #722ed1;
  border-radius: 8px;
  transition: all 0.3s ease;
}

:deep(.custom-root:hover) {
  box-shadow: 0 0 0 4px rgba(114, 46, 209, 0.15);
}

/* 场景 2: 自定义选择器 */
:deep(.custom-selector) {
  background: linear-gradient(135deg, #fa8bff 0%, #2bd2ff 52%, #2bff88 90%) !important;
  color: white !important;
  border: none !important;
}

:deep(.custom-selector .hmfw-select-selection-placeholder) {
  color: rgba(255, 255, 255, 0.85);
}

/* 场景 3: 自定义占位符 */
:deep(.custom-placeholder) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-style: italic;
}

/* 场景 6: 自定义多选标签 */
:deep(.custom-item) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  border-radius: 12px !important;
  border: none !important;
  padding: 2px 12px !important;
}

/* 场景 7: 组合样式 */
:deep(.combined-root) {
  border: 2px dashed #fa541c;
  border-radius: 12px;
}

:deep(.combined-selector) {
  background: #fff7e6 !important;
  border: none !important;
}

:deep(.combined-arrow) {
  color: #fa541c !important;
}
</style>

<!-- 全局样式：用于 Teleport 到 body 的 dropdown -->
<style>
/* 场景 4: 自定义下拉面板 */
.custom-dropdown {
  border: 2px solid #fa541c !important;
  border-radius: 12px !important;
  box-shadow: 0 8px 24px rgba(250, 84, 28, 0.2) !important;
  padding: 4px !important;
}

/* 场景 5: 自定义选项 */
.custom-option {
  border-radius: 6px !important;
  margin: 2px 0 !important;
  transition: all 0.2s ease !important;
}

.custom-option:hover {
  transform: translateX(4px);
}

.custom-option-label {
  font-weight: 500 !important;
  color: #389e0d !important;
}

/* 场景 7 - 组合样式 dropdown 部分 */
.combined-dropdown {
  background: linear-gradient(135deg, #fff7e6 0%, #fff1b8 100%) !important;
  border-radius: 12px !important;
  border: 2px solid #fa541c !important;
}

.combined-option {
  border-radius: 6px !important;
  margin: 2px 0 !important;
  color: #d4380d !important;
}

.combined-option:hover {
  background: rgba(250, 84, 28, 0.1) !important;
}
</style>
`,I={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},j=f({__name:"SelectLabelInValue",setup(h){const n=r(null),p=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"}],c=(e,o)=>{console.log("change:",e,o)};return(e,o)=>(v(),g("div",I,[l(d(u),{value:n.value,"onUpdate:value":o[0]||(o[0]=a=>n.value=a),options:p,"label-in-value":"",placeholder:"选择一个选项",style:{width:"100%"},onChange:c},null,8,["value"]),t("p",null,"选中值："+k(JSON.stringify(n.value)),1)]))}}),D=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <Select
      v-model:value="value"
      :options="options"
      label-in-value
      placeholder="选择一个选项"
      style="width: 100%"
      @change="handleChange"
    />
    <p>选中值：{{ JSON.stringify(value) }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from 'ant-design-hmfw'

const value = ref<any>(null)

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
]

const handleChange = (val: any, option: any) => {
  console.log('change:', val, option)
}
<\/script>
`,G={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},F=f({__name:"SelectMaxCount",setup(h){const n=r([]),p=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"},{label:"Solid",value:"solid"}];return(c,e)=>(v(),g("div",G,[l(d(u),{value:n.value,"onUpdate:value":e[0]||(e[0]=o=>n.value=o),options:p,mode:"multiple","max-count":3,placeholder:"最多选择 3 个",style:{width:"100%"}},null,8,["value"]),t("p",null,"已选："+k(n.value),1)]))}}),H=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <Select
      v-model:value="value"
      :options="options"
      mode="multiple"
      :max-count="3"
      placeholder="最多选择 3 个"
      style="width: 100%"
    />
    <p>已选：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from 'ant-design-hmfw'

const value = ref<string[]>([])

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid', value: 'solid' },
]
<\/script>
`,J={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},K=f({__name:"SelectMultiple",setup(h){const n=r([]),p=r([]),c=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"},{label:"Solid",value:"solid"}];return(e,o)=>(v(),g("div",J,[l(d(u),{value:n.value,"onUpdate:value":o[0]||(o[0]=a=>n.value=a),options:c,mode:"multiple",placeholder:"请选择多个选项",style:{width:"100%"}},null,8,["value"]),l(d(u),{value:p.value,"onUpdate:value":o[1]||(o[1]=a=>p.value=a),options:c,mode:"multiple","max-tag-count":2,placeholder:"最多显示 2 个标签",style:{width:"100%"}},null,8,["value"]),t("p",null,"已选："+k(n.value),1)]))}}),W=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <Select
      v-model:value="selected"
      :options="options"
      mode="multiple"
      placeholder="请选择多个选项"
      style="width: 100%"
    />
    <Select
      v-model:value="selected2"
      :options="options"
      mode="multiple"
      :max-tag-count="2"
      placeholder="最多显示 2 个标签"
      style="width: 100%"
    />
    <p>已选：{{ selected }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from 'ant-design-hmfw'

const selected = ref<string[]>([])
const selected2 = ref<string[]>([])

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid', value: 'solid' },
]
<\/script>
`,X={style:{"max-width":"400px"}},Q=f({__name:"SelectOptGroup",setup(h){const n=r(""),p=[{label:"浙江",options:[{label:"杭州",value:"hangzhou"},{label:"宁波",value:"ningbo"},{label:"温州",value:"wenzhou"}]},{label:"江苏",options:[{label:"南京",value:"nanjing"},{label:"苏州",value:"suzhou"},{label:"镇江",value:"zhenjiang"}]}];return(c,e)=>(v(),g("div",X,[l(d(u),{value:n.value,"onUpdate:value":e[0]||(e[0]=o=>n.value=o),options:p,placeholder:"选择城市",style:{width:"100%"}},null,8,["value"])]))}}),Y=`<template>
  <div style="max-width: 400px">
    <Select v-model:value="value" :options="options" placeholder="选择城市" style="width: 100%" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from 'ant-design-hmfw'

const value = ref<string>('')

const options = [
  {
    label: '浙江',
    options: [
      { label: '杭州', value: 'hangzhou' },
      { label: '宁波', value: 'ningbo' },
      { label: '温州', value: 'wenzhou' },
    ],
  },
  {
    label: '江苏',
    options: [
      { label: '南京', value: 'nanjing' },
      { label: '苏州', value: 'suzhou' },
      { label: '镇江', value: 'zhenjiang' },
    ],
  },
]
<\/script>
`,Z={style:{"max-width":"300px"}},tt=f({__name:"SelectSearch",setup(h){const n=r(""),p=[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"},{label:"杭州",value:"hangzhou"},{label:"成都",value:"chengdu"}],c=r(p),e=o=>{c.value=p.filter(a=>a.label.includes(o))};return(o,a)=>(v(),g("div",Z,[l(d(u),{value:n.value,"onUpdate:value":a[0]||(a[0]=x=>n.value=x),options:c.value,"show-search":!0,placeholder:"请搜索并选择",style:{width:"100%"},onSearch:e},null,8,["value","options"])]))}}),et=`<template>
  <div style="max-width: 300px">
    <Select
      v-model:value="value"
      :options="options"
      :show-search="true"
      placeholder="请搜索并选择"
      style="width: 100%"
      @search="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from 'ant-design-hmfw'

const value = ref('')

const allOptions = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
  { label: '杭州', value: 'hangzhou' },
  { label: '成都', value: 'chengdu' },
]

const options = ref(allOptions)

const handleSearch = (searchText: string) => {
  options.value = allOptions.filter((item) => item.label.includes(searchText))
}
<\/script>
`,nt={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},ot=f({__name:"SelectTags",setup(h){const n=r([]),p=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"}];return(c,e)=>(v(),g("div",nt,[l(d(u),{value:n.value,"onUpdate:value":e[0]||(e[0]=o=>n.value=o),options:p,mode:"tags","token-separators":[","],placeholder:"输入标签，用逗号分隔",style:{width:"100%"}},null,8,["value"]),t("p",null,"已选："+k(n.value),1)]))}}),at=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <Select
      v-model:value="value"
      :options="options"
      mode="tags"
      :token-separators="[',']"
      placeholder="输入标签，用逗号分隔"
      style="width: 100%"
    />
    <p>已选：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from 'ant-design-hmfw'

const value = ref<string[]>([])

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
]
<\/script>
`,lt={class:"select-virtual-demo"},st={style:{display:"flex",gap:"16px","margin-bottom":"24px"}},dt={style:{flex:"1"}},pt={style:{"margin-top":"8px","font-size":"12px",color:"#8c8c8c"}},ct={style:{flex:"1"}},rt=f({__name:"SelectVirtual",setup(h){const n=r(),p=r(),c=Array.from({length:1e4},(o,a)=>({label:`选项 ${a+1} - ${Math.random().toString(36).substring(7)}`,value:`option-${a+1}`})),e=c.slice(0,100);return(o,a)=>(v(),g("div",lt,[a[5]||(a[5]=t("h4",null,"虚拟滚动（10,000 个选项）",-1)),a[6]||(a[6]=t("p",{style:{"margin-bottom":"16px",color:"#666"}},"使用虚拟滚动技术，即使有 10,000 个选项也能流畅交互",-1)),t("div",st,[t("div",dt,[a[2]||(a[2]=t("h5",{style:{"margin-bottom":"8px"}},"启用虚拟滚动 ✅",-1)),l(d(u),{value:n.value,"onUpdate:value":a[0]||(a[0]=x=>n.value=x),options:d(c),placeholder:"选择一个选项","show-search":"",style:{width:"100%"},virtual:"","list-height":256,"list-item-height":32},null,8,["value","options"]),t("div",pt,"已选择："+k(n.value||"未选择"),1)]),t("div",ct,[a[3]||(a[3]=t("h5",{style:{"margin-bottom":"8px"}},"普通模式（对比）",-1)),l(d(u),{value:p.value,"onUpdate:value":a[1]||(a[1]=x=>p.value=x),options:d(e),placeholder:"选择一个选项","show-search":"",style:{width:"100%"}},null,8,["value","options"]),a[4]||(a[4]=t("div",{style:{"margin-top":"8px","font-size":"12px",color:"#8c8c8c"}},"仅 100 个选项用于对比",-1))])]),a[7]||(a[7]=t("div",{style:{padding:"12px",background:"#f5f5f5","border-radius":"4px"}},[t("strong",null,"性能对比："),t("ul",{style:{margin:"8px 0","padding-left":"20px"}},[t("li",null,[t("strong",null,"虚拟滚动模式："),i("10,000 个选项，只渲染可见的 8-10 项，流畅无卡顿")]),t("li",null,[t("strong",null,"普通模式："),i("超过 1,000 个选项会明显卡顿，10,000 个会导致浏览器卡死")])]),t("div",{style:{"margin-top":"8px",color:"#1890ff"}},[i("💡 建议：当选项超过 100 个时启用 "),t("code",null,"virtual"),i(" 属性")])],-1))]))}}),it=S(rt,[["__scopeId","data-v-d7f10b23"]]),ut=`<template>
  <div class="select-virtual-demo">
    <h4>虚拟滚动（10,000 个选项）</h4>
    <p style="margin-bottom: 16px; color: #666">使用虚拟滚动技术，即使有 10,000 个选项也能流畅交互</p>

    <div style="display: flex; gap: 16px; margin-bottom: 24px">
      <div style="flex: 1">
        <h5 style="margin-bottom: 8px">启用虚拟滚动 ✅</h5>
        <Select
          v-model:value="value1"
          :options="options"
          placeholder="选择一个选项"
          show-search
          style="width: 100%"
          virtual
          :list-height="256"
          :list-item-height="32"
        />
        <div style="margin-top: 8px; font-size: 12px; color: #8c8c8c">已选择：{{ value1 || '未选择' }}</div>
      </div>

      <div style="flex: 1">
        <h5 style="margin-bottom: 8px">普通模式（对比）</h5>
        <Select
          v-model:value="value2"
          :options="smallOptions"
          placeholder="选择一个选项"
          show-search
          style="width: 100%"
        />
        <div style="margin-top: 8px; font-size: 12px; color: #8c8c8c">仅 100 个选项用于对比</div>
      </div>
    </div>

    <div style="padding: 12px; background: #f5f5f5; border-radius: 4px">
      <strong>性能对比：</strong>
      <ul style="margin: 8px 0; padding-left: 20px">
        <li><strong>虚拟滚动模式：</strong>10,000 个选项，只渲染可见的 8-10 项，流畅无卡顿</li>
        <li><strong>普通模式：</strong>超过 1,000 个选项会明显卡顿，10,000 个会导致浏览器卡死</li>
      </ul>
      <div style="margin-top: 8px; color: #1890ff">💡 建议：当选项超过 100 个时启用 <code>virtual</code> 属性</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '../../../components'

const value1 = ref<string>()
const value2 = ref<string>()

// 生成 10,000 个选项
const options = Array.from({ length: 10000 }, (_, i) => ({
  label: \`选项 \${i + 1} - \${Math.random().toString(36).substring(7)}\`,
  value: \`option-\${i + 1}\`,
}))

// 生成 100 个选项用于对比
const smallOptions = options.slice(0, 100)
<\/script>

<style scoped>
.select-virtual-demo h4 {
  margin-bottom: 8px;
  color: #262626;
}

.select-virtual-demo h5 {
  font-weight: 600;
  color: #262626;
}

.select-virtual-demo code {
  padding: 2px 6px;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  font-family: 'Courier New', monospace;
}
</style>
`,mt={class:"markdown-body"},xt={__name:"select",setup(h,{expose:n}){return n({frontmatter:{}}),(c,e)=>{const o=q("DemoBlock");return v(),g("div",mt,[e[0]||(e[0]=t("h1",{id:"select-",tabindex:"-1"},"Select 选择器",-1)),e[1]||(e[1]=t("p",null,"下拉选择器。",-1)),e[2]||(e[2]=t("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=t("ul",null,[t("li",null,"弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。"),t("li",null,"当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。")],-1)),e[4]||(e[4]=t("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=t("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=t("p",null,"基本使用。",-1)),l(o,{title:"基础用法",source:d($)},{default:b(()=>[l(_)]),_:1},8,["source"]),e[7]||(e[7]=t("h3",{id:"-3",tabindex:"-1"},"多选",-1)),e[8]||(e[8]=t("p",null,[i("通过 "),t("code",null,'mode="multiple"'),i(" 开启多选模式。")],-1)),l(o,{title:"多选",source:d(W)},{default:b(()=>[l(K)]),_:1},8,["source"]),e[9]||(e[9]=t("h3",{id:"-4",tabindex:"-1"},"搜索",-1)),e[10]||(e[10]=t("p",null,[i("通过 "),t("code",null,"show-search"),i(" 开启搜索功能。")],-1)),l(o,{title:"搜索",source:d(et)},{default:b(()=>[l(tt)]),_:1},8,["source"]),e[11]||(e[11]=t("h3",{id:"-5",tabindex:"-1"},"标签模式",-1)),e[12]||(e[12]=t("p",null,[i("通过 "),t("code",null,'mode="tags"'),i(" 开启标签模式，可以自由输入标签。配合 "),t("code",null,"token-separators"),i(" 可以自动分词。")],-1)),l(o,{title:"标签模式",source:d(at)},{default:b(()=>[l(ot)]),_:1},8,["source"]),e[13]||(e[13]=t("h3",{id:"-6",tabindex:"-1"},"获取选项对象",-1)),e[14]||(e[14]=t("p",null,[i("通过 "),t("code",null,"label-in-value"),i(" 可以获取选项的完整对象（包含 value 和 label）。")],-1)),l(o,{title:"获取选项对象",source:d(D)},{default:b(()=>[l(j)]),_:1},8,["source"]),e[15]||(e[15]=t("h3",{id:"-7",tabindex:"-1"},"选项分组",-1)),e[16]||(e[16]=t("p",null,[i("使用 "),t("code",null,"options"),i(" 的嵌套结构实现选项分组。")],-1)),l(o,{title:"选项分组",source:d(Y)},{default:b(()=>[l(Q)]),_:1},8,["source"]),e[17]||(e[17]=t("h3",{id:"-8",tabindex:"-1"},"限制选择数量",-1)),e[18]||(e[18]=t("p",null,[i("通过 "),t("code",null,"max-count"),i(" 限制多选模式下的最大选择数量。")],-1)),l(o,{title:"限制选择数量",source:d(H)},{default:b(()=>[l(F)]),_:1},8,["source"]),e[19]||(e[19]=t("h3",{id:"-9",tabindex:"-1"},"虚拟滚动",-1)),e[20]||(e[20]=t("p",null,[i("使用 "),t("code",null,"virtual"),i(" 属性开启虚拟滚动，适用于大数据量场景（推荐选项数超过 100 时使用）。")],-1)),l(o,{title:"虚拟滚动",source:d(ut)},{default:b(()=>[l(it)]),_:1},8,["source"]),e[21]||(e[21]=C(`<h2 id="api" tabindex="-1">API</h2><h3 id="select-props" tabindex="-1">Select Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定当前选中的条目</td><td><code>string | number | (string | number)[] | LabeledValue | LabeledValue[]</code></td><td>-</td></tr><tr><td>defaultValue</td><td>指定默认选中的条目</td><td><code>string | number | (string | number)[] | LabeledValue | LabeledValue[]</code></td><td>-</td></tr><tr><td>options</td><td>数据化配置选项内容，支持嵌套（OptGroup）</td><td><code>SelectOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>选择框默认文字</td><td><code>string</code></td><td>-</td></tr><tr><td>allowClear</td><td>支持清除</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>选择框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>mode</td><td>设置 Select 的模式为多选或标签</td><td><code>&#39;multiple&#39; | &#39;tags&#39;</code></td><td>-</td></tr><tr><td>showSearch</td><td>使单选模式可搜索</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>maxTagCount</td><td>最多显示多少个 tag</td><td><code>number</code></td><td>-</td></tr><tr><td>maxCount</td><td>最多选择多少个选项（multiple/tags 模式）</td><td><code>number</code></td><td>-</td></tr><tr><td>maxTagPlaceholder</td><td>隐藏 tag 时显示的内容</td><td><code>string | ((omittedValues) =&gt; string)</code></td><td>-</td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>open</td><td>是否展开下拉菜单</td><td><code>boolean</code></td><td>-</td></tr><tr><td>loading</td><td>加载中状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>labelInValue</td><td>是否把每个选项的 label 包装到 value 中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>tokenSeparators</td><td>自动分词的分隔符（tags 模式）</td><td><code>string[]</code></td><td>-</td></tr><tr><td>filterOption</td><td>是否根据输入项进行筛选</td><td><code>boolean | ((input: string, option: SelectOption) =&gt; boolean)</code></td><td><code>true</code></td></tr><tr><td>notFoundContent</td><td>当下拉列表为空时显示的内容</td><td><code>string</code></td><td>-</td></tr><tr><td>dropdownMatchSelectWidth</td><td>下拉菜单和选择器同宽</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>autoClearSearchValue</td><td>选中后是否清空搜索框（multiple/tags 模式）</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>optionRender</td><td>自定义下拉选项渲染</td><td><code>(option: SelectOption, info: { index: number }) =&gt; VNode</code></td><td>-</td></tr><tr><td>labelRender</td><td>自定义选中项渲染</td><td><code>(props: LabeledValue) =&gt; VNode</code></td><td>-</td></tr><tr><td>tagRender</td><td>自定义 tag 渲染（multiple/tags 模式）</td><td><code>(props: { label, value, closable, onClose }) =&gt; VNode</code></td><td>-</td></tr><tr><td>fieldNames</td><td>自定义字段名</td><td><code>{ label?: string; value?: string; options?: string }</code></td><td><code>{ label: &#39;label&#39;, value: &#39;value&#39;, options: &#39;options&#39; }</code></td></tr><tr><td>virtual</td><td>启用虚拟滚动（推荐选项数 &gt; 100 时使用）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>listHeight</td><td>下拉列表高度（启用虚拟滚动时）</td><td><code>number</code></td><td><code>256</code></td></tr><tr><td>listItemHeight</td><td>下拉列表每项高度（启用虚拟滚动时）</td><td><code>number</code></td><td><code>32</code></td></tr><tr><td>classNames</td><td>语义化 className（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname">详见下方</a>）</td><td><code>SelectClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 style（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-style">详见下方</a>）</td><td><code>SelectStyles</code></td><td>-</td></tr></tbody></table><h3 id="selectoption" tabindex="-1">SelectOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td><code>string | number</code></td></tr><tr><td>label</td><td>选项的标签</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用该选项</td><td><code>boolean</code></td></tr><tr><td>title</td><td>选项的 title 属性</td><td><code>string</code></td></tr><tr><td>options</td><td>子选项（用于 OptGroup）</td><td><code>SelectOption[]</code></td></tr></tbody></table><h3 id="labeledvalue" tabindex="-1">LabeledValue</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td><code>string | number</code></td></tr><tr><td>label</td><td>选项的标签</td><td><code>string</code></td></tr><tr><td>key</td><td>选项的 key</td><td><code>string</code></td></tr></tbody></table><h3 id="select-events" tabindex="-1">Select Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选中 option，或 input 的 value 变化时，调用此函数</td><td><code>(value: SelectValue) =&gt; void</code></td></tr><tr><td>change</td><td>选中 option，或 input 的 value 变化时，调用此函数</td><td><code>(value: SelectValue, option: SelectOption | SelectOption[]) =&gt; void</code></td></tr><tr><td>search</td><td>文本框值变化时回调</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>select</td><td>选中选项时回调</td><td><code>(value: string | number, option: SelectOption) =&gt; void</code></td></tr><tr><td>deselect</td><td>取消选中选项时回调</td><td><code>(value: string | number) =&gt; void</code></td></tr><tr><td>focus</td><td>获得焦点时回调</td><td><code>() =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时回调</td><td><code>() =&gt; void</code></td></tr><tr><td>clear</td><td>清除内容时回调</td><td><code>() =&gt; void</code></td></tr><tr><td>dropdownVisibleChange</td><td>下拉菜单显示/隐藏时回调</td><td><code>(visible: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="select-methods" tabindex="-1">Select Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td>-</td></tr><tr><td>blur</td><td>失去焦点</td><td>-</td></tr></tbody></table><h2 id="-classname" tabindex="-1">语义化 className</h2><p>通过 <code>classNames</code> 属性可以自定义 Select 各部分的 className。</p><h3 id="selectclassnames" tabindex="-1">SelectClassNames</h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>版本</th></tr></thead><tbody><tr><td>root</td><td>根节点 <code>div.hmfw-select</code></td><td><code>string</code></td><td>-</td></tr><tr><td>selector</td><td>选择器容器 <code>div.hmfw-select-selector</code></td><td><code>string</code></td><td>-</td></tr><tr><td>item</td><td>已选项 <code>span.hmfw-select-selection-item</code>（多选模式下为标签）</td><td><code>string</code></td><td>-</td></tr><tr><td>placeholder</td><td>占位符 <code>span.hmfw-select-selection-placeholder</code></td><td><code>string</code></td><td>-</td></tr><tr><td>arrow</td><td>后缀箭头容器 <code>div.hmfw-select-arrow</code></td><td><code>string</code></td><td>-</td></tr><tr><td>clear</td><td>清除按钮 <code>span.hmfw-select-clear</code></td><td><code>string</code></td><td>-</td></tr><tr><td>dropdown</td><td>下拉面板 <code>div.hmfw-select-dropdown</code></td><td><code>string</code></td><td>-</td></tr><tr><td>option</td><td>选项 <code>div.hmfw-select-item-option</code></td><td><code>string</code></td><td>-</td></tr><tr><td>optionLabel</td><td>选项内容 <code>div.hmfw-select-item-option-content</code></td><td><code>string</code></td><td>-</td></tr><tr><td>optionState</td><td>选项选中状态图标 <code>span.hmfw-select-item-option-state</code></td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="dom-" tabindex="-1">DOM 结构</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- root --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-selector<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- selector --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-selection-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>已选项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- item --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-selection-placeholder<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>占位符<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- placeholder --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-arrow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>▾<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- arrow --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-clear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>×<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- clear --&gt;</span>
  <span class="token comment">&lt;!-- Teleport 到 body --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-dropdown<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- dropdown --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-item-option<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- option --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-item-option-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>选项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- optionLabel --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-item-option-state<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>✓<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- optionState --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="-10" tabindex="-1">使用示例</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Select
    :options=&quot;options&quot;
    :classNames=&quot;{
      root: &#39;my-select-root&#39;,
      selector: &#39;my-select-selector&#39;,
      dropdown: &#39;my-select-dropdown&#39;,
      option: &#39;my-select-option&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><p><strong>注意事项：</strong></p><ul><li><code>dropdown</code> 通过 <code>Teleport to=&quot;body&quot;</code> 渲染，因此其样式必须使用<strong>全局样式</strong>（非 scoped），或在 scoped 中使用 <code>:deep()</code> 仍无效，需要单独的 <code>&lt;style&gt;</code> 块</li><li><code>clear</code> 仅在 <code>allowClear</code> 启用且有选中值时显示</li><li><code>placeholder</code> 仅在无选中值时显示</li><li><code>item</code> 在多选模式下对应每个标签</li></ul><h2 id="-style" tabindex="-1">语义化 style</h2><p>通过 <code>styles</code> 属性可以自定义 Select 各部分的 style。</p><h3 id="selectstyles" tabindex="-1">SelectStyles</h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>版本</th></tr></thead><tbody><tr><td>root</td><td>根节点 <code>div.hmfw-select</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>selector</td><td>选择器容器 <code>div.hmfw-select-selector</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>item</td><td>已选项 <code>span.hmfw-select-selection-item</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>placeholder</td><td>占位符 <code>span.hmfw-select-selection-placeholder</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>arrow</td><td>后缀箭头容器 <code>div.hmfw-select-arrow</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>clear</td><td>清除按钮 <code>span.hmfw-select-clear</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>dropdown</td><td>下拉面板 <code>div.hmfw-select-dropdown</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>option</td><td>选项 <code>div.hmfw-select-item-option</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>optionLabel</td><td>选项内容 <code>div.hmfw-select-item-option-content</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>optionState</td><td>选项选中状态图标 <code>span.hmfw-select-item-option-state</code></td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="-11" tabindex="-1">使用示例</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Select
    :options=&quot;options&quot;
    :styles=&quot;{
      root: { borderRadius: &#39;20px&#39; },
      selector: { background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39; },
      dropdown: { borderRadius: &#39;12px&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="-classname--style" tabindex="-1">语义化 className 与 style</h3>`,28)),l(o,{title:"语义化 className 与 style",source:d(M)},{default:b(()=>[l(E)]),_:1},8,["source"])])}}};export{xt as default};
