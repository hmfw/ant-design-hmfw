import{S as u}from"./Select-BK5TX-Ik.js";import{d as h,o as v,b as g,c as o,e as p,f as n,A as x,r as i,_ as S,g as c,h as q,w as b,i as N}from"./index-BOp1Gurx.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-DpyU4f5h.js";import"./DownOutlined-P5RWco7A.js";import"./Trigger-BSBv38Hy.js";import"./VirtualList-BzM3Xf6X.js";const C={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},V=h({__name:"SelectBasic",setup(k){const e=i(""),d=i(""),r=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Svelte（禁用）",value:"svelte",disabled:!0}];return(t,a)=>(v(),g("div",C,[o(p(u),{value:e.value,"onUpdate:value":a[0]||(a[0]=s=>e.value=s),options:r,placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),o(p(u),{value:d.value,"onUpdate:value":a[1]||(a[1]=s=>d.value=s),options:r,placeholder:"禁用状态",disabled:"",style:{width:"100%"}},null,8,["value"]),n("p",null,"选中："+x(e.value),1)]))}}),_=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <Select v-model:value="value" :options="options" placeholder="请选择" style="width: 100%" />
    <Select v-model:value="value2" :options="options" placeholder="禁用状态" disabled style="width: 100%" />
    <p>选中：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '@hmfw/ant-design'

const value = ref<string>('')
const value2 = ref<string>('')

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte（禁用）', value: 'svelte', disabled: true },
]
<\/script>
`,$={class:"demo-select-classnames"},O={class:"demo-section"},z={class:"demo-section"},R={class:"demo-section"},U={class:"demo-section"},A={class:"demo-section"},L={class:"demo-section"},P={class:"demo-section"},T={class:"demo-section"},E=h({__name:"SelectClassNames",setup(k){const e=[{label:"苹果 🍎",value:"apple"},{label:"香蕉 🍌",value:"banana"},{label:"橙子 🍊",value:"orange"},{label:"草莓 🍓",value:"strawberry"},{label:"葡萄 🍇",value:"grape"}],d=i(void 0),r=i(void 0),t=i(void 0),a=i(void 0),s=i(void 0),f=i([]),y=i(void 0),w=i(void 0);return(gn,l)=>(v(),g("div",$,[n("section",O,[l[8]||(l[8]=n("h3",null,"1. 自定义根节点样式",-1)),o(p(u),{value:d.value,"onUpdate:value":l[0]||(l[0]=m=>d.value=m),options:e,"class-names":{root:"custom-root"},placeholder:"请选择",style:{width:"240px"}},null,8,["value"])]),n("section",z,[l[9]||(l[9]=n("h3",null,"2. 自定义选择器样式",-1)),o(p(u),{value:r.value,"onUpdate:value":l[1]||(l[1]=m=>r.value=m),options:e,"class-names":{selector:"custom-selector"},placeholder:"请选择",style:{width:"240px"}},null,8,["value"])]),n("section",R,[l[10]||(l[10]=n("h3",null,"3. 自定义占位符样式",-1)),o(p(u),{value:t.value,"onUpdate:value":l[2]||(l[2]=m=>t.value=m),options:e,"class-names":{placeholder:"custom-placeholder"},placeholder:"自定义占位符样式",style:{width:"240px"}},null,8,["value"])]),n("section",U,[l[11]||(l[11]=n("h3",null,"4. 自定义下拉面板样式",-1)),o(p(u),{value:a.value,"onUpdate:value":l[3]||(l[3]=m=>a.value=m),options:e,"class-names":{dropdown:"custom-dropdown"},placeholder:"点击查看下拉面板",style:{width:"240px"}},null,8,["value"])]),n("section",A,[l[12]||(l[12]=n("h3",null,"5. 自定义选项样式",-1)),o(p(u),{value:s.value,"onUpdate:value":l[4]||(l[4]=m=>s.value=m),options:e,"class-names":{option:"custom-option",optionLabel:"custom-option-label"},placeholder:"点击查看选项",style:{width:"240px"}},null,8,["value"])]),n("section",L,[l[13]||(l[13]=n("h3",null,"6. 多选模式自定义标签样式",-1)),o(p(u),{value:f.value,"onUpdate:value":l[5]||(l[5]=m=>f.value=m),options:e,mode:"multiple","class-names":{item:"custom-item"},placeholder:"多选",style:{width:"320px"}},null,8,["value"])]),n("section",P,[l[14]||(l[14]=n("h3",null,"7. 组合使用多个 classNames",-1)),o(p(u),{value:y.value,"onUpdate:value":l[6]||(l[6]=m=>y.value=m),options:e,"class-names":{root:"combined-root",selector:"combined-selector",arrow:"combined-arrow",dropdown:"combined-dropdown",option:"combined-option"},placeholder:"综合样式",style:{width:"280px"}},null,8,["value"])]),n("section",T,[l[15]||(l[15]=n("h3",null,"8. 使用 styles 动态样式",-1)),o(p(u),{value:w.value,"onUpdate:value":l[7]||(l[7]=m=>w.value=m),options:e,styles:{root:{borderRadius:"20px",overflow:"hidden"},selector:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none"},dropdown:{borderRadius:"12px",boxShadow:"0 8px 24px rgba(102, 126, 234, 0.3)"}},placeholder:"动态样式",style:{width:"280px"}},null,8,["value"])])]))}}),B=S(E,[["__scopeId","data-v-92fef446"]]),M=`<template>
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
import { Select } from '@hmfw/ant-design'

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
`,I={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},j=h({__name:"SelectLabelInValue",setup(k){const e=i(null),d=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"}],r=(t,a)=>{console.log("change:",t,a)};return(t,a)=>(v(),g("div",I,[o(p(u),{value:e.value,"onUpdate:value":a[0]||(a[0]=s=>e.value=s),options:d,"label-in-value":"",placeholder:"选择一个选项",style:{width:"100%"},onChange:r},null,8,["value"]),n("p",null,"选中值："+x(JSON.stringify(e.value)),1)]))}}),D=`<template>
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
import { Select } from '@hmfw/ant-design'

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
`,G={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},F=h({__name:"SelectMaxCount",setup(k){const e=i([]),d=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"},{label:"Solid",value:"solid"}];return(r,t)=>(v(),g("div",G,[o(p(u),{value:e.value,"onUpdate:value":t[0]||(t[0]=a=>e.value=a),options:d,mode:"multiple","max-count":3,placeholder:"最多选择 3 个",style:{width:"100%"}},null,8,["value"]),n("p",null,"已选："+x(e.value),1)]))}}),H=`<template>
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
import { Select } from '@hmfw/ant-design'

const value = ref<string[]>([])

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid', value: 'solid' },
]
<\/script>
`,J={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},W=h({__name:"SelectMultiple",setup(k){const e=i([]),d=i([]),r=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"},{label:"Solid",value:"solid"}];return(t,a)=>(v(),g("div",J,[o(p(u),{value:e.value,"onUpdate:value":a[0]||(a[0]=s=>e.value=s),options:r,mode:"multiple",placeholder:"请选择多个选项",style:{width:"100%"}},null,8,["value"]),o(p(u),{value:d.value,"onUpdate:value":a[1]||(a[1]=s=>d.value=s),options:r,mode:"multiple","max-tag-count":2,placeholder:"最多显示 2 个标签",style:{width:"100%"}},null,8,["value"]),n("p",null,"已选："+x(e.value),1)]))}}),X=`<template>
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
import { Select } from '@hmfw/ant-design'

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
`,K={style:{"max-width":"400px"}},Q=h({__name:"SelectOptGroup",setup(k){const e=i(""),d=[{label:"浙江",options:[{label:"杭州",value:"hangzhou"},{label:"宁波",value:"ningbo"},{label:"温州",value:"wenzhou"}]},{label:"江苏",options:[{label:"南京",value:"nanjing"},{label:"苏州",value:"suzhou"},{label:"镇江",value:"zhenjiang"}]}];return(r,t)=>(v(),g("div",K,[o(p(u),{value:e.value,"onUpdate:value":t[0]||(t[0]=a=>e.value=a),options:d,placeholder:"选择城市",style:{width:"100%"}},null,8,["value"])]))}}),Y=`<template>
  <div style="max-width: 400px">
    <Select v-model:value="value" :options="options" placeholder="选择城市" style="width: 100%" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '@hmfw/ant-design'

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
`,Z={style:{"max-width":"300px"}},nn=h({__name:"SelectSearch",setup(k){const e=i(""),d=[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"},{label:"杭州",value:"hangzhou"},{label:"成都",value:"chengdu"}],r=i(d),t=a=>{r.value=d.filter(s=>s.label.includes(a))};return(a,s)=>(v(),g("div",Z,[o(p(u),{value:e.value,"onUpdate:value":s[0]||(s[0]=f=>e.value=f),options:r.value,"show-search":!0,placeholder:"请搜索并选择",style:{width:"100%"},onSearch:t},null,8,["value","options"])]))}}),tn=`<template>
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
import { Select } from '@hmfw/ant-design'

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
`,en={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},an=h({__name:"SelectTags",setup(k){const e=i([]),d=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"}];return(r,t)=>(v(),g("div",en,[o(p(u),{value:e.value,"onUpdate:value":t[0]||(t[0]=a=>e.value=a),options:d,mode:"tags","token-separators":[","],placeholder:"输入标签，用逗号分隔",style:{width:"100%"}},null,8,["value"]),n("p",null,"已选："+x(e.value),1)]))}}),sn=`<template>
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
import { Select } from '@hmfw/ant-design'

const value = ref<string[]>([])

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
]
<\/script>
`,on={class:"select-virtual-demo"},ln={style:{display:"flex",gap:"16px","margin-bottom":"24px"}},pn={style:{flex:"1"}},dn={style:{"margin-top":"8px","font-size":"12px",color:"#8c8c8c"}},cn={style:{flex:"1"}},rn=h({__name:"SelectVirtual",setup(k){const e=i(),d=i(),r=Array.from({length:1e4},(a,s)=>({label:`选项 ${s+1} - ${Math.random().toString(36).substring(7)}`,value:`option-${s+1}`})),t=r.slice(0,100);return(a,s)=>(v(),g("div",on,[s[5]||(s[5]=n("h4",null,"虚拟滚动（10,000 个选项）",-1)),s[6]||(s[6]=n("p",{style:{"margin-bottom":"16px",color:"#666"}},"使用虚拟滚动技术，即使有 10,000 个选项也能流畅交互",-1)),n("div",ln,[n("div",pn,[s[2]||(s[2]=n("h5",{style:{"margin-bottom":"8px"}},"启用虚拟滚动 ✅",-1)),o(p(u),{value:e.value,"onUpdate:value":s[0]||(s[0]=f=>e.value=f),options:p(r),placeholder:"选择一个选项","show-search":"",style:{width:"100%"},virtual:"","list-height":256,"list-item-height":32},null,8,["value","options"]),n("div",dn,"已选择："+x(e.value||"未选择"),1)]),n("div",cn,[s[3]||(s[3]=n("h5",{style:{"margin-bottom":"8px"}},"普通模式（对比）",-1)),o(p(u),{value:d.value,"onUpdate:value":s[1]||(s[1]=f=>d.value=f),options:p(t),placeholder:"选择一个选项","show-search":"",style:{width:"100%"}},null,8,["value","options"]),s[4]||(s[4]=n("div",{style:{"margin-top":"8px","font-size":"12px",color:"#8c8c8c"}},"仅 100 个选项用于对比",-1))])]),s[7]||(s[7]=n("div",{style:{padding:"12px",background:"#f5f5f5","border-radius":"4px"}},[n("strong",null,"性能对比："),n("ul",{style:{margin:"8px 0","padding-left":"20px"}},[n("li",null,[n("strong",null,"虚拟滚动模式："),c("10,000 个选项，只渲染可见的 8-10 项，流畅无卡顿")]),n("li",null,[n("strong",null,"普通模式："),c("超过 1,000 个选项会明显卡顿，10,000 个会导致浏览器卡死")])]),n("div",{style:{"margin-top":"8px",color:"#1890ff"}},[c("💡 建议：当选项超过 100 个时启用 "),n("code",null,"virtual"),c(" 属性")])],-1))]))}}),un=S(rn,[["__scopeId","data-v-6769f550"]]),mn=`<template>
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
import { Select } from '@hmfw/ant-design'

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
`,vn={class:"markdown-body"},Sn={__name:"select",setup(k,{expose:e}){return e({frontmatter:{}}),(r,t)=>{const a=q("DemoBlock");return v(),g("div",vn,[t[0]||(t[0]=n("h1",{id:"select-选择器",tabindex:"-1"},"Select 选择器",-1)),t[1]||(t[1]=n("p",null,"下拉选择器。",-1)),t[2]||(t[2]=n("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。"),n("li",null,"当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。")],-1)),t[4]||(t[4]=n("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=n("p",null,"基本使用。",-1)),o(a,{title:"基础用法",source:p(_)},{default:b(()=>[o(V)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"多选",tabindex:"-1"},"多选",-1)),t[8]||(t[8]=n("p",null,[c("通过 "),n("code",null,'mode="multiple"'),c(" 开启多选模式。")],-1)),o(a,{title:"多选",source:p(X)},{default:b(()=>[o(W)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"搜索",tabindex:"-1"},"搜索",-1)),t[10]||(t[10]=n("p",null,[c("通过 "),n("code",null,"show-search"),c(" 开启搜索功能。")],-1)),o(a,{title:"搜索",source:p(tn)},{default:b(()=>[o(nn)]),_:1},8,["source"]),t[11]||(t[11]=n("h3",{id:"标签模式",tabindex:"-1"},"标签模式",-1)),t[12]||(t[12]=n("p",null,[c("通过 "),n("code",null,'mode="tags"'),c(" 开启标签模式，可以自由输入标签。配合 "),n("code",null,"token-separators"),c(" 可以自动分词。")],-1)),o(a,{title:"标签模式",source:p(sn)},{default:b(()=>[o(an)]),_:1},8,["source"]),t[13]||(t[13]=n("h3",{id:"获取选项对象",tabindex:"-1"},"获取选项对象",-1)),t[14]||(t[14]=n("p",null,[c("通过 "),n("code",null,"label-in-value"),c(" 可以获取选项的完整对象（包含 value 和 label）。")],-1)),o(a,{title:"获取选项对象",source:p(D)},{default:b(()=>[o(j)]),_:1},8,["source"]),t[15]||(t[15]=n("h3",{id:"选项分组",tabindex:"-1"},"选项分组",-1)),t[16]||(t[16]=n("p",null,[c("使用 "),n("code",null,"options"),c(" 的嵌套结构实现选项分组。")],-1)),o(a,{title:"选项分组",source:p(Y)},{default:b(()=>[o(Q)]),_:1},8,["source"]),t[17]||(t[17]=n("h3",{id:"限制选择数量",tabindex:"-1"},"限制选择数量",-1)),t[18]||(t[18]=n("p",null,[c("通过 "),n("code",null,"max-count"),c(" 限制多选模式下的最大选择数量。")],-1)),o(a,{title:"限制选择数量",source:p(H)},{default:b(()=>[o(F)]),_:1},8,["source"]),t[19]||(t[19]=n("h3",{id:"虚拟滚动",tabindex:"-1"},"虚拟滚动",-1)),t[20]||(t[20]=n("p",null,[c("使用 "),n("code",null,"virtual"),c(" 属性开启虚拟滚动，适用于大数据量场景（推荐选项数超过 100 时使用）。")],-1)),o(a,{title:"虚拟滚动",source:p(mn)},{default:b(()=>[o(un)]),_:1},8,["source"]),t[21]||(t[21]=n("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[22]||(t[22]=n("p",null,[c("通过 "),n("code",null,"classNames"),c(" / "),n("code",null,"styles"),c(" 对各子元素做细粒度样式控制。")],-1)),o(a,{title:"语义化 className 与 style",source:p(M)},{default:b(()=>[o(B)]),_:1},8,["source"]),t[23]||(t[23]=N(`<h2 id="api" tabindex="-1">API</h2><h3 id="select-props" tabindex="-1">Select Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定当前选中的条目</td><td><code>string | number | (string | number)[] | LabeledValue | LabeledValue[]</code></td><td>-</td></tr><tr><td>defaultValue</td><td>指定默认选中的条目</td><td><code>string | number | (string | number)[] | LabeledValue | LabeledValue[]</code></td><td>-</td></tr><tr><td>options</td><td>数据化配置选项内容，支持嵌套（OptGroup）</td><td><code>SelectOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>选择框默认文字</td><td><code>string</code></td><td>-</td></tr><tr><td>allowClear</td><td>支持清除</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>选择框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>mode</td><td>设置 Select 的模式为多选或标签</td><td><code>&#39;multiple&#39; | &#39;tags&#39;</code></td><td>-</td></tr><tr><td>showSearch</td><td>使单选模式可搜索</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>maxTagCount</td><td>最多显示多少个 tag</td><td><code>number</code></td><td>-</td></tr><tr><td>maxCount</td><td>最多选择多少个选项（multiple/tags 模式）</td><td><code>number</code></td><td>-</td></tr><tr><td>maxTagPlaceholder</td><td>隐藏 tag 时显示的内容</td><td><code>string | ((omittedValues) =&gt; string)</code></td><td>-</td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>open</td><td>是否展开下拉菜单</td><td><code>boolean</code></td><td>-</td></tr><tr><td>loading</td><td>加载中状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>labelInValue</td><td>是否把每个选项的 label 包装到 value 中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>tokenSeparators</td><td>自动分词的分隔符（tags 模式）</td><td><code>string[]</code></td><td>-</td></tr><tr><td>filterOption</td><td>是否根据输入项进行筛选</td><td><code>boolean | ((input: string, option: SelectOption) =&gt; boolean)</code></td><td><code>true</code></td></tr><tr><td>notFoundContent</td><td>当下拉列表为空时显示的内容</td><td><code>string</code></td><td>-</td></tr><tr><td>dropdownMatchSelectWidth</td><td>下拉菜单和选择器同宽</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>autoClearSearchValue</td><td>选中后是否清空搜索框（multiple/tags 模式）</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>optionRender</td><td>自定义下拉选项渲染</td><td><code>(option: SelectOption, info: { index: number }) =&gt; VNode</code></td><td>-</td></tr><tr><td>labelRender</td><td>自定义选中项渲染</td><td><code>(props: LabeledValue) =&gt; VNode</code></td><td>-</td></tr><tr><td>tagRender</td><td>自定义 tag 渲染（multiple/tags 模式）</td><td><code>(props: { label, value, closable, onClose }) =&gt; VNode</code></td><td>-</td></tr><tr><td>fieldNames</td><td>自定义字段名</td><td><code>{ label?: string; value?: string; options?: string }</code></td><td><code>{ label: &#39;label&#39;, value: &#39;value&#39;, options: &#39;options&#39; }</code></td></tr><tr><td>virtual</td><td>启用虚拟滚动（推荐选项数 &gt; 100 时使用）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>listHeight</td><td>下拉列表高度（启用虚拟滚动时）</td><td><code>number</code></td><td><code>256</code></td></tr><tr><td>listItemHeight</td><td>下拉列表每项高度（启用虚拟滚动时）</td><td><code>number</code></td><td><code>32</code></td></tr><tr><td>classNames</td><td>语义化 className 与 style（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">详见下方</a>）</td><td><code>SelectClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 className 与 style（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">详见下方</a>）</td><td><code>SelectStyles</code></td><td>-</td></tr></tbody></table><h3 id="selectoption" tabindex="-1">SelectOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td><code>string | number</code></td></tr><tr><td>label</td><td>选项的标签</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用该选项</td><td><code>boolean</code></td></tr><tr><td>title</td><td>选项的 title 属性</td><td><code>string</code></td></tr><tr><td>options</td><td>子选项（用于 OptGroup）</td><td><code>SelectOption[]</code></td></tr></tbody></table><h3 id="labeledvalue" tabindex="-1">LabeledValue</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td><code>string | number</code></td></tr><tr><td>label</td><td>选项的标签</td><td><code>string</code></td></tr><tr><td>key</td><td>选项的 key</td><td><code>string</code></td></tr></tbody></table><h3 id="select-events" tabindex="-1">Select Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选中 option，或 input 的 value 变化时，调用此函数</td><td><code>(value: SelectValue) =&gt; void</code></td></tr><tr><td>change</td><td>选中 option，或 input 的 value 变化时，调用此函数</td><td><code>(value: SelectValue, option: SelectOption | SelectOption[]) =&gt; void</code></td></tr><tr><td>search</td><td>文本框值变化时回调</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>select</td><td>选中选项时回调</td><td><code>(value: string | number, option: SelectOption) =&gt; void</code></td></tr><tr><td>deselect</td><td>取消选中选项时回调</td><td><code>(value: string | number) =&gt; void</code></td></tr><tr><td>focus</td><td>获得焦点时回调</td><td><code>() =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时回调</td><td><code>() =&gt; void</code></td></tr><tr><td>clear</td><td>清除内容时回调</td><td><code>() =&gt; void</code></td></tr><tr><td>dropdownVisibleChange</td><td>下拉菜单显示/隐藏时回调</td><td><code>(visible: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="select-methods" tabindex="-1">Select Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td>-</td></tr><tr><td>blur</td><td>失去焦点</td><td>-</td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对Select的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">SelectClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 \`div.hmfw-select\`</span>
  selector<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选择器容器 \`div.hmfw-select-selector\`</span>
  item<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 已选项 \`span.hmfw-select-selection-item\`（多选模式下为标签）</span>
  placeholder<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 占位符 \`span.hmfw-select-selection-placeholder\`</span>
  arrow<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 后缀箭头容器 \`div.hmfw-select-arrow\`</span>
  clear<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 清除按钮 \`span.hmfw-select-clear\`</span>
  dropdown<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 下拉面板 \`div.hmfw-select-dropdown\`</span>
  option<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选项 \`div.hmfw-select-item-option\`</span>
  optionLabel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选项内容 \`div.hmfw-select-item-option-content\`</span>
  optionState<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选项选中状态图标 \`span.hmfw-select-item-option-state\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SelectStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 根节点 \`div.hmfw-select\`</span>
  selector<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 选择器容器 \`div.hmfw-select-selector\`</span>
  item<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 已选项 \`span.hmfw-select-selection-item\`</span>
  placeholder<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 占位符 \`span.hmfw-select-selection-placeholder\`</span>
  arrow<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 后缀箭头容器 \`div.hmfw-select-arrow\`</span>
  clear<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 清除按钮 \`span.hmfw-select-clear\`</span>
  dropdown<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 下拉面板 \`div.hmfw-select-dropdown\`</span>
  option<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 选项 \`div.hmfw-select-item-option\`</span>
  optionLabel<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 选项内容 \`div.hmfw-select-item-option-content\`</span>
  optionState<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 选项选中状态图标 \`span.hmfw-select-item-option-state\`</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-selector<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.selector / styles.selector 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-selection-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>已选项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.item / styles.item 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-selection-placeholder<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>占位符<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.placeholder / styles.placeholder 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-arrow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>▾<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.arrow / styles.arrow 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-clear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>×<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.clear / styles.clear 应用于此 --&gt;</span>
  <span class="token comment">&lt;!-- Teleport 到 body --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-dropdown<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.dropdown / styles.dropdown 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-item-option<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.option / styles.option 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-item-option-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>选项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.optionLabel / styles.optionLabel 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-select-item-option-state<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>✓<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.optionState / styles.optionState 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:classNames</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;my-select-root&#39;,
      selector: &#39;my-select-selector&#39;,
      dropdown: &#39;my-select-dropdown&#39;,
      option: &#39;my-select-option&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">/* dropdown 通过 Teleport 渲染，必须使用全局样式 */</span>
<span class="token selector">.my-select-dropdown</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 6px 16px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.12<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-select-root)</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #722ed1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-select-selector)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-select-option)</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { borderRadius: &#39;20px&#39; },
      selector: { background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39; },
      dropdown: { borderRadius: &#39;12px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>dropdown</code> 通过 <code>Teleport to=&quot;body&quot;</code> 渲染，因此其样式必须使用<strong>全局样式</strong>（非 scoped），或在 scoped 中使用 <code>:deep()</code> 仍无效，需要单独的 <code>&lt;style&gt;</code> 块</li><li><code>clear</code> 仅在 <code>allowClear</code> 启用且有选中值时显示</li><li><code>placeholder</code> 仅在无选中值时显示</li><li><code>item</code> 在多选模式下对应每个标签</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr></tbody></table>`,27))])}}};export{Sn as default};
