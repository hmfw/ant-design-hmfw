import{o as S,O as G,E as u,P as M,n as a,f as A,F as nt,A as q,k as O,L as m,h as i,Q as C,_ as at,H as ot,l as H,m as $}from"./index-lneS_oZ6.js";import{c as w}from"./cls-S9IiI6wd.js";import{T as st}from"./Trigger-BYoaljTB.js";import{S as K}from"./SearchOutlined-BSqGHJWp.js";const lt=t=>t==="large"?"lg":t==="small"?"sm":"",h=S({name:"AutoComplete",inheritAttrs:!1,props:{value:String,defaultValue:{type:String,default:""},options:{type:Array,default:()=>[]},disabled:Boolean,placeholder:String,allowClear:{type:[Boolean,Object],default:!1},size:{type:String,default:"middle"},status:{type:String,default:""},filterOption:{type:[Boolean,Function],default:!0},backfill:Boolean,defaultActiveFirstOption:{type:Boolean,default:!0},notFoundContent:String,defaultOpen:Boolean,open:{type:Boolean,default:void 0},classNames:{type:Object},styles:{type:Object}},emits:["update:value","change","select","search","focus","blur","clear","openChange"],setup(t,{slots:r,emit:p,attrs:f,expose:n}){const l=G("auto-complete"),o=G("input"),g=u(t.value??t.defaultValue??""),y=u(t.defaultOpen??!1),v=u(-1),x=u(),b=A(()=>t.value!==void 0),s=A(()=>b.value?t.value:g.value),k=A(()=>t.open!==void 0?t.open:y.value);M(()=>t.value,e=>{e!==void 0&&(g.value=e)});const V=A(()=>{const e=s.value;return!e||t.filterOption===!1?t.options:typeof t.filterOption=="function"?t.options.filter(d=>t.filterOption(e,d)):t.options.filter(d=>d.value.toLowerCase().includes(e.toLowerCase())||(d.label??d.value).toLowerCase().includes(e.toLowerCase()))}),L=A(()=>V.value.length>0||!!t.notFoundContent),U=A(()=>V.value.findIndex(e=>!e.disabled)),X=()=>{v.value=t.defaultActiveFirstOption?U.value:-1};M(()=>V.value,e=>{k.value&&(v.value>=e.length&&(v.value=e.length-1),v.value<0&&t.defaultActiveFirstOption&&(v.value=U.value))});const N=e=>{y.value!==e&&(y.value=e,p("openChange",e))},B=e=>{g.value=e,p("update:value",e),p("change",e)},D=e=>{e.disabled||(B(e.value),p("select",e.value,e),N(!1))},Y=e=>{const d=e.target.value;B(d),p("search",d),!k.value&&L.value&&N(!0)},Q=e=>{var d;e.stopPropagation(),B(""),p("clear"),(d=x.value)==null||d.focus()},Z=e=>{if(!k.value){(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),L.value&&N(!0));return}const d=V.value;if(e.key==="ArrowDown"){e.preventDefault();let c=v.value+1;for(;c<d.length&&d[c].disabled;)c++;c<d.length&&(v.value=c,t.backfill&&B(d[c].value))}else if(e.key==="ArrowUp"){e.preventDefault();let c=v.value-1;for(;c>=0&&d[c].disabled;)c--;c>=0&&(v.value=c,t.backfill&&B(d[c].value))}else e.key==="Enter"?(e.preventDefault(),v.value>=0&&v.value<d.length&&D(d[v.value])):e.key==="Escape"&&N(!1)};n({focus:()=>{var e;return(e=x.value)==null?void 0:e.focus()},blur:()=>{var e;return(e=x.value)==null?void 0:e.blur()}});const tt=()=>typeof t.allowClear=="object"&&t.allowClear.clearIcon?t.allowClear.clearIcon:"✕",F=A(()=>lt(t.size)),et=()=>{var e,d;return a(nt,null,[V.value.length>0?V.value.map((c,z)=>{var R,E;return a("div",{key:c.value,class:w(`${l}-dropdown-item`,{[`${l}-dropdown-item-active`]:v.value===z,[`${l}-dropdown-item-disabled`]:c.disabled,[`${l}-dropdown-item-selected`]:c.value===s.value},(R=t.classNames)==null?void 0:R.option),style:(E=t.styles)==null?void 0:E.option,onMouseenter:()=>{c.disabled||(v.value=z)},onMousedown:_=>{_.preventDefault(),D(c)}},[c.label??c.value])}):a("div",{class:w(`${l}-dropdown-empty`,(e=t.classNames)==null?void 0:e.empty),style:(d=t.styles)==null?void 0:d.empty},[t.notFoundContent])])};return()=>{var e,d;return a(st,{open:k.value&&L.value,trigger:"click",placement:"bottomLeft",disabled:t.disabled,destroyOnHidden:!0,matchWidth:!0,popupClass:w(`${l}-dropdown`,(e=t.classNames)==null?void 0:e.dropdown),popupStyle:(d=t.styles)==null?void 0:d.dropdown,onOpenChange:c=>N(c)},{default:()=>{var c,z,R,E,_,T,I,J,W,j;return a("div",{class:w(l,`${o}-affix-wrapper`,F.value&&`${o}-affix-wrapper-${F.value}`,{[`${o}-affix-wrapper-disabled`]:t.disabled,[`${o}-affix-wrapper-status-error`]:t.status==="error",[`${o}-affix-wrapper-status-warning`]:t.status==="warning",[`${o}-affix-wrapper-focused`]:k.value},(c=t.classNames)==null?void 0:c.root),style:{...f.style,...(z=t.styles)==null?void 0:z.root}},[r.prefix&&a("span",{class:w(`${o}-prefix`,(R=t.classNames)==null?void 0:R.prefix),style:(E=t.styles)==null?void 0:E.prefix},[r.prefix()]),a("input",{ref:x,class:w(o,F.value&&`${o}-${F.value}`,(_=t.classNames)==null?void 0:_.input),style:(T=t.styles)==null?void 0:T.input,value:s.value,disabled:t.disabled,placeholder:t.placeholder,onInput:Y,onFocus:P=>{L.value&&N(!0),X(),p("focus",P)},onBlur:P=>p("blur",P),onKeydown:Z,autocomplete:"off"},null),!!t.allowClear&&s.value&&!t.disabled&&a("span",{class:w(`${o}-clear-icon`,(I=t.classNames)==null?void 0:I.clear),style:(J=t.styles)==null?void 0:J.clear,onMousedown:Q},[tt()]),r.suffix&&a("span",{class:w(`${o}-suffix`,(W=t.classNames)==null?void 0:W.suffix),style:(j=t.styles)==null?void 0:j.suffix},[r.suffix()])])},popup:et})}}}),pt={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},ut=S({__name:"AutoCompleteAdvanced",setup(t){const r=u(""),p=u(""),f=u("Vue"),n=u(""),l=u([{value:"Vue"},{value:"React"},{value:"Angular"}]),o=u([{value:"TypeScript"},{value:"JavaScript"},{value:"Python"}]),g=u([{value:"Vue"},{value:"React"},{value:"Angular"}]),y=u([{value:"Vue"},{value:"React"},{value:"Angular"}]),v=x=>{const b=["Vue","React","Angular"];y.value=b.filter(s=>s.toLowerCase().includes(x.toLowerCase())).map(s=>({value:s}))};return(x,b)=>(q(),O("div",pt,[a(m(h),{value:r.value,"onUpdate:value":b[0]||(b[0]=s=>r.value=s),options:l.value,placeholder:"默认高亮第一项","default-active-first-option":!0},null,8,["value","options"]),a(m(h),{value:p.value,"onUpdate:value":b[1]||(b[1]=s=>p.value=s),options:o.value,placeholder:"不高亮第一项","default-active-first-option":!1},null,8,["value","options"]),a(m(h),{value:f.value,"onUpdate:value":b[2]||(b[2]=s=>f.value=s),options:g.value,placeholder:"自定义清除图标","allow-clear":{clearIcon:"🗑️"}},null,8,["value","options"]),a(m(h),{value:n.value,"onUpdate:value":b[3]||(b[3]=s=>n.value=s),options:y.value,placeholder:"无匹配时显示提示","not-found-content":"无匹配结果",onSearch:v},null,8,["value","options"])]))}}),dt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <AutoComplete
      v-model:value="value1"
      :options="options1"
      placeholder="默认高亮第一项"
      :default-active-first-option="true"
    />
    <AutoComplete
      v-model:value="value2"
      :options="options2"
      placeholder="不高亮第一项"
      :default-active-first-option="false"
    />
    <AutoComplete
      v-model:value="value3"
      :options="options3"
      placeholder="自定义清除图标"
      :allow-clear="{ clearIcon: '🗑️' }"
    />
    <AutoComplete
      v-model:value="value4"
      :options="filteredOptions"
      placeholder="无匹配时显示提示"
      not-found-content="无匹配结果"
      @search="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from '@hmfw/ant-design'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('Vue')
const value4 = ref('')

const options1 = ref([{ value: 'Vue' }, { value: 'React' }, { value: 'Angular' }])

const options2 = ref([{ value: 'TypeScript' }, { value: 'JavaScript' }, { value: 'Python' }])

const options3 = ref([{ value: 'Vue' }, { value: 'React' }, { value: 'Angular' }])

const filteredOptions = ref([{ value: 'Vue' }, { value: 'React' }, { value: 'Angular' }])

const handleSearch = (searchText: string) => {
  const allOptions = ['Vue', 'React', 'Angular']
  filteredOptions.value = allOptions
    .filter((item) => item.toLowerCase().includes(searchText.toLowerCase()))
    .map((item) => ({ value: item }))
}
<\/script>
`,ct={style:{width:"300px"}},rt=S({__name:"AutoCompleteBasic",setup(t){const r=u(""),p=u([{value:"Vue"},{value:"React"},{value:"Angular"},{value:"Svelte"}]),f=n=>{const l=["Vue","React","Angular","Svelte","Solid"];p.value=l.filter(o=>o.toLowerCase().includes(n.toLowerCase())).map(o=>({value:o}))};return(n,l)=>(q(),O("div",ct,[a(m(h),{value:r.value,"onUpdate:value":l[0]||(l[0]=o=>r.value=o),options:p.value,placeholder:"请输入内容",onSearch:f},null,8,["value","options"])]))}}),it=`<template>
  <div style="width: 300px">
    <AutoComplete v-model:value="value" :options="options" placeholder="请输入内容" @search="handleSearch" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from '@hmfw/ant-design'

const value = ref('')
const options = ref([{ value: 'Vue' }, { value: 'React' }, { value: 'Angular' }, { value: 'Svelte' }])

const handleSearch = (searchText: string) => {
  const allOptions = ['Vue', 'React', 'Angular', 'Svelte', 'Solid']
  options.value = allOptions
    .filter((item) => item.toLowerCase().includes(searchText.toLowerCase()))
    .map((item) => ({ value: item }))
}
<\/script>
`,mt={style:{display:"flex","flex-direction":"column",gap:"24px"}},vt=S({__name:"AutoCompleteClassNames",setup(t){const r=u(""),p=u(""),f=u(""),n=u(""),l=u(""),o=[{value:"Vue 3"},{value:"React"},{value:"Angular"},{value:"Svelte"}],g=[{value:"Beijing"},{value:"Shanghai"},{value:"Guangzhou"},{value:"Shenzhen"}],y=[{value:"🍎 Apple",label:"🍎 Apple"},{value:"🍌 Banana",label:"🍌 Banana"},{value:"🍊 Orange",label:"🍊 Orange"},{value:"🍇 Grape",label:"🍇 Grape"}],v=[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"}],x=[{value:"Design System"},{value:"Component Library"},{value:"UI Framework"}];return(b,s)=>(q(),O("div",mt,[i("div",null,[s[5]||(s[5]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义输入框容器样式：",-1)),a(m(h),{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=k=>r.value=k),options:o,placeholder:"输入内容搜索...","class-names":{root:"custom-root"}},null,8,["modelValue"])]),i("div",null,[s[6]||(s[6]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义前后缀与清除按钮：",-1)),a(m(h),{modelValue:p.value,"onUpdate:modelValue":s[1]||(s[1]=k=>p.value=k),options:g,placeholder:"搜索...","allow-clear":"","class-names":{prefix:"custom-prefix",suffix:"custom-suffix",clear:"custom-clear"}},{prefix:C(()=>[a(m(K))]),_:1},8,["modelValue"])]),i("div",null,[s[7]||(s[7]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义下拉面板与选项：",-1)),a(m(h),{modelValue:f.value,"onUpdate:modelValue":s[2]||(s[2]=k=>f.value=k),options:y,placeholder:"选择水果...","class-names":{dropdown:"custom-dropdown",option:"custom-option"}},null,8,["modelValue"])]),i("div",null,[s[8]||(s[8]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),a(m(h),{modelValue:n.value,"onUpdate:modelValue":s[3]||(s[3]=k=>n.value=k),options:v,placeholder:"动态样式...","allow-clear":"",styles:{root:{borderRadius:"20px",borderColor:"#722ed1"},input:{color:"#722ed1",fontWeight:"bold"},clear:{color:"#eb2f96"}}},null,8,["modelValue"])]),i("div",null,[s[9]||(s[9]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合使用 classNames 和 styles：",-1)),a(m(h),{modelValue:l.value,"onUpdate:modelValue":s[4]||(s[4]=k=>l.value=k),options:x,placeholder:"组合样式定制...","allow-clear":"","class-names":{root:"custom-combined-root",dropdown:"custom-combined-dropdown"},styles:{input:{fontSize:"16px"}}},{prefix:C(()=>[a(m(K))]),_:1},8,["modelValue"])])]))}}),ft=at(vt,[["__scopeId","data-v-a2dba500"]]),gt=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义输入框容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义输入框容器样式：</div>
      <AutoComplete
        v-model="value1"
        :options="options1"
        placeholder="输入内容搜索..."
        :class-names="{ root: 'custom-root' }"
      />
    </div>

    <!-- 场景 2：自定义前后缀与清除按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义前后缀与清除按钮：</div>
      <AutoComplete
        v-model="value2"
        :options="options2"
        placeholder="搜索..."
        allow-clear
        :class-names="{
          prefix: 'custom-prefix',
          suffix: 'custom-suffix',
          clear: 'custom-clear',
        }"
      >
        <template #prefix>
          <SearchOutlined />
        </template>
      </AutoComplete>
    </div>

    <!-- 场景 3：自定义下拉面板与选项 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义下拉面板与选项：</div>
      <AutoComplete
        v-model="value3"
        :options="options3"
        placeholder="选择水果..."
        :class-names="{
          dropdown: 'custom-dropdown',
          option: 'custom-option',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <AutoComplete
        v-model="value4"
        :options="options4"
        placeholder="动态样式..."
        allow-clear
        :styles="{
          root: { borderRadius: '20px', borderColor: '#722ed1' },
          input: { color: '#722ed1', fontWeight: 'bold' },
          clear: { color: '#eb2f96' },
        }"
      />
    </div>

    <!-- 场景 5：组合使用 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用 classNames 和 styles：</div>
      <AutoComplete
        v-model="value5"
        :options="options5"
        placeholder="组合样式定制..."
        allow-clear
        :class-names="{
          root: 'custom-combined-root',
          dropdown: 'custom-combined-dropdown',
        }"
        :styles="{
          input: { fontSize: '16px' },
        }"
      >
        <template #prefix>
          <SearchOutlined />
        </template>
      </AutoComplete>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete, SearchOutlined } from '@hmfw/ant-design'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')

const options1 = [{ value: 'Vue 3' }, { value: 'React' }, { value: 'Angular' }, { value: 'Svelte' }]

const options2 = [{ value: 'Beijing' }, { value: 'Shanghai' }, { value: 'Guangzhou' }, { value: 'Shenzhen' }]

const options3 = [
  { value: '🍎 Apple', label: '🍎 Apple' },
  { value: '🍌 Banana', label: '🍌 Banana' },
  { value: '🍊 Orange', label: '🍊 Orange' },
  { value: '🍇 Grape', label: '🍇 Grape' },
]

const options4 = [{ value: 'Option 1' }, { value: 'Option 2' }, { value: 'Option 3' }]

const options5 = [{ value: 'Design System' }, { value: 'Component Library' }, { value: 'UI Framework' }]
<\/script>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
  transform: translateY(-2px);
}

:deep(.custom-root input) {
  color: white;
  font-weight: 500;
}

:deep(.custom-root input::placeholder) {
  color: rgba(255, 255, 255, 0.7);
}

:deep(.custom-prefix) {
  color: #1890ff;
  font-size: 18px;
  transition: all 0.3s;
}

:deep(.custom-prefix:hover) {
  color: #40a9ff;
  transform: scale(1.1);
}

:deep(.custom-suffix) {
  color: #52c41a;
}

:deep(.custom-clear) {
  color: #ff4d4f;
  transition: all 0.3s;
}

:deep(.custom-clear:hover) {
  color: #ff7875;
  transform: rotate(90deg);
}

:global(.custom-dropdown) {
  background: linear-gradient(to bottom, #f0f5ff 0%, #ffffff 100%);
  border: 2px solid #1890ff;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(24, 144, 255, 0.2);
}

:global(.custom-option) {
  font-weight: 500;
  transition: all 0.3s;
}

:global(.custom-option:hover) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  transform: translateX(4px);
}

:deep(.custom-combined-root) {
  border: 2px solid #52c41a;
  border-radius: 12px;
  transition: all 0.3s;
}

:deep(.custom-combined-root:hover) {
  border-color: #73d13d;
  box-shadow: 0 2px 8px rgba(82, 196, 26, 0.3);
}

:global(.custom-combined-dropdown) {
  background: #f6ffed;
  border: 2px solid #b7eb8f;
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.15);
}
</style>
`,kt={style:{width:"300px"}},ht=S({__name:"AutoCompleteCustom",setup(t){const r=u(""),p=u([{value:"vue",label:"Vue - 渐进式 JavaScript 框架"},{value:"react",label:"React - 用于构建用户界面的 JavaScript 库"},{value:"angular",label:"Angular - 现代 Web 开发平台"}]),f=n=>{const l=[{value:"vue",label:"Vue - 渐进式 JavaScript 框架"},{value:"react",label:"React - 用于构建用户界面的 JavaScript 库"},{value:"angular",label:"Angular - 现代 Web 开发平台"}];p.value=l.filter(o=>o.value.toLowerCase().includes(n.toLowerCase()))};return(n,l)=>(q(),O("div",kt,[a(m(h),{value:r.value,"onUpdate:value":l[0]||(l[0]=o=>r.value=o),options:p.value,placeholder:"请输入内容",onSearch:f},null,8,["value","options"])]))}}),bt=`<template>
  <div style="width: 300px">
    <AutoComplete v-model:value="value" :options="options" placeholder="请输入内容" @search="handleSearch" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from '@hmfw/ant-design'

const value = ref('')
const options = ref([
  { value: 'vue', label: 'Vue - 渐进式 JavaScript 框架' },
  { value: 'react', label: 'React - 用于构建用户界面的 JavaScript 库' },
  { value: 'angular', label: 'Angular - 现代 Web 开发平台' },
])

const handleSearch = (searchText: string) => {
  const allOptions = [
    { value: 'vue', label: 'Vue - 渐进式 JavaScript 框架' },
    { value: 'react', label: 'React - 用于构建用户界面的 JavaScript 库' },
    { value: 'angular', label: 'Angular - 现代 Web 开发平台' },
  ]
  options.value = allOptions.filter((item) => item.value.toLowerCase().includes(searchText.toLowerCase()))
}
<\/script>
`,xt={style:{width:"300px"}},yt=S({__name:"AutoCompleteEmail",setup(t){const r=u(""),p=u([]),f=["@gmail.com","@qq.com","@163.com","@outlook.com","@hotmail.com"],n=l=>{if(!l||l.includes("@")){p.value=[];return}p.value=f.map(o=>({value:l+o}))};return(l,o)=>(q(),O("div",xt,[a(m(h),{value:r.value,"onUpdate:value":o[0]||(o[0]=g=>r.value=g),options:p.value,placeholder:"请输入邮箱",onSearch:n},null,8,["value","options"])]))}}),wt=`<template>
  <div style="width: 300px">
    <AutoComplete v-model:value="email" :options="emailOptions" placeholder="请输入邮箱" @search="handleEmailSearch" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from '@hmfw/ant-design'

const email = ref('')
const emailOptions = ref<Array<{ value: string }>>([])

const emailSuffixes = ['@gmail.com', '@qq.com', '@163.com', '@outlook.com', '@hotmail.com']

const handleEmailSearch = (searchText: string) => {
  if (!searchText || searchText.includes('@')) {
    emailOptions.value = []
    return
  }

  emailOptions.value = emailSuffixes.map((suffix) => ({
    value: searchText + suffix,
  }))
}
<\/script>
`,Ct={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},At=S({__name:"AutoCompleteSize",setup(t){const r=u(""),p=u(""),f=u(""),n=u([{value:"Vue"},{value:"React"},{value:"Angular"}]);return(l,o)=>(q(),O("div",Ct,[a(m(h),{value:r.value,"onUpdate:value":o[0]||(o[0]=g=>r.value=g),options:n.value,size:"large",placeholder:"Large size"},null,8,["value","options"]),a(m(h),{value:p.value,"onUpdate:value":o[1]||(o[1]=g=>p.value=g),options:n.value,placeholder:"Default size"},null,8,["value","options"]),a(m(h),{value:f.value,"onUpdate:value":o[2]||(o[2]=g=>f.value=g),options:n.value,size:"small",placeholder:"Small size"},null,8,["value","options"])]))}}),St=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <AutoComplete v-model:value="value1" :options="options" size="large" placeholder="Large size" />
    <AutoComplete v-model:value="value2" :options="options" placeholder="Default size" />
    <AutoComplete v-model:value="value3" :options="options" size="small" placeholder="Small size" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from '@hmfw/ant-design'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const options = ref([{ value: 'Vue' }, { value: 'React' }, { value: 'Angular' }])
<\/script>
`,qt={class:"markdown-body"},Bt={__name:"auto-complete",setup(t,{expose:r}){return r({frontmatter:{}}),(f,n)=>{const l=ot("DemoBlock");return q(),O("div",qt,[n[0]||(n[0]=H('<h1 id="autocomplete-自动完成" tabindex="-1">AutoComplete 自动完成</h1><p>输入框自动完成功能。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><p>需要自动完成时。</p><ul><li>需要一个输入框而不是选择器。</li><li>需要输入建议/辅助提示。</li></ul><p>和 Select 的区别是：</p><ul><li>AutoComplete 是一个带提示的文本输入框，用户可以自由输入，关键词是辅助输入。</li><li>Select 是在限定的可选项中进行选择，关键词是选择。</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="基础用法" tabindex="-1">基础用法</h3><p>基本使用，通过 <code>options</code> 设置自动完成的数据源。</p>',10)),a(l,{title:"基础用法",source:m(it)},{default:C(()=>[a(rt)]),_:1},8,["source"]),n[1]||(n[1]=i("h3",{id:"自定义选项",tabindex:"-1"},"自定义选项",-1)),n[2]||(n[2]=i("p",null,[$("通过 "),i("code",null,"options"),$(" 的 "),i("code",null,"label"),$(" 属性自定义选项内容。")],-1)),a(l,{title:"自定义选项",source:m(bt)},{default:C(()=>[a(ht)]),_:1},8,["source"]),n[3]||(n[3]=i("h3",{id:"邮箱补全",tabindex:"-1"},"邮箱补全",-1)),n[4]||(n[4]=i("p",null,"邮箱输入自动补全示例。",-1)),a(l,{title:"邮箱补全",source:m(wt)},{default:C(()=>[a(yt)]),_:1},8,["source"]),n[5]||(n[5]=i("h3",{id:"不同尺寸",tabindex:"-1"},"不同尺寸",-1)),n[6]||(n[6]=i("p",null,"三种大小的输入框，大的用在表单中，中的为默认。",-1)),a(l,{title:"不同尺寸",source:m(St)},{default:C(()=>[a(At)]),_:1},8,["source"]),n[7]||(n[7]=i("h3",{id:"高级特性",tabindex:"-1"},"高级特性",-1)),n[8]||(n[8]=i("p",null,"演示 defaultActiveFirstOption、notFoundContent 和自定义清除图标。",-1)),a(l,{title:"高级特性",source:m(dt)},{default:C(()=>[a(ut)]),_:1},8,["source"]),n[9]||(n[9]=i("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[10]||(n[10]=i("p",null,[$("通过 "),i("code",null,"classNames"),$(" / "),i("code",null,"styles"),$(" 对各子元素做细粒度样式控制。")],-1)),a(l,{title:"语义化 className 与 style",source:m(gt)},{default:C(()=>[a(ft)]),_:1},8,["source"]),n[11]||(n[11]=H(`<h2 id="api" tabindex="-1">API</h2><h3 id="autocomplete-props" tabindex="-1">AutoComplete Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定当前选中的条目</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>指定默认选中的条目</td><td><code>string</code></td><td>-</td></tr><tr><td>options</td><td>数据源</td><td><code>AutoCompleteOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td>-</td></tr><tr><td>allowClear</td><td>支持清除，可传入对象自定义清除图标</td><td><code>boolean | { clearIcon?: VNodeChild }</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>filterOption</td><td>是否根据输入项进行筛选。当其为一个函数时，会接收 <code>inputValue</code> <code>option</code> 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false</td><td><code>boolean | ((inputValue: string, option: AutoCompleteOption) =&gt; boolean)</code></td><td><code>true</code></td></tr><tr><td>backfill</td><td>使用键盘选择选项的时候把选中项回填到输入框中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultActiveFirstOption</td><td>是否默认高亮第一个选项</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>defaultOpen</td><td>默认是否展开下拉菜单</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>open</td><td>是否展开下拉菜单（受控）</td><td><code>boolean</code></td><td>-</td></tr><tr><td>notFoundContent</td><td>当下拉列表为空时显示的内容</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>AutoCompleteClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>AutoCompleteStyles</code></td><td>-</td></tr></tbody></table><h3 id="autocompleteoption" tabindex="-1">AutoCompleteOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td><code>string</code></td></tr><tr><td>label</td><td>选项的标签，若不设置则默认与 value 相同</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用该选项</td><td><code>boolean</code></td></tr></tbody></table><h3 id="autocomplete-events" tabindex="-1">AutoComplete Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选中 option，或 input 的 value 变化时，调用此函数</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>change</td><td>选中 option，或 input 的 value 变化时，调用此函数</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>select</td><td>被选中时调用，参数为选中项的 value 值</td><td><code>(value: string, option: AutoCompleteOption) =&gt; void</code></td></tr><tr><td>search</td><td>搜索补全项的时候调用</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>focus</td><td>获得焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清除按钮时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>openChange</td><td>下拉框展开/收起时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="autocomplete-methods" tabindex="-1">AutoComplete Methods</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>focus()</td><td>获取焦点</td></tr><tr><td>blur()</td><td>失去焦点</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 AutoComplete 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">AutoCompleteClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点（输入框容器）</span>
  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 前缀容器</span>
  input<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 输入框</span>
  clear<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 清除图标</span>
  suffix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 后缀容器</span>
  dropdown<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 下拉面板</span>
  option<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选项</span>
  empty<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 空状态内容</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AutoCompleteStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  prefix<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  input<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  clear<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  suffix<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  dropdown<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  option<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  empty<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 输入框容器 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-auto-complete<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-auto-complete-prefix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.prefix / styles.prefix 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prefix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-auto-complete-input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.input / styles.input 应用于此 --&gt;</span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-auto-complete-clear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.clear / styles.clear 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CloseCircleFilled</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-auto-complete-suffix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.suffix / styles.suffix 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>suffix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 下拉面板（挂载到 body） --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-auto-complete-dropdown<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.dropdown / styles.dropdown 应用于此 --&gt;</span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-auto-complete-option<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.option / styles.option 应用于此 --&gt;</span>
    选项内容
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-auto-complete-empty<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.empty / styles.empty 应用于此 --&gt;</span>
    暂无数据
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义输入框容器 --&gt;
  &lt;AutoComplete v-model=&quot;value&quot; :options=&quot;options&quot; :class-names=&quot;{ root: &#39;my-input-wrapper&#39; }&quot; /&gt;

  &lt;!-- 自定义下拉面板与选项 --&gt;
  &lt;AutoComplete
    v-model=&quot;value&quot;
    :options=&quot;options&quot;
    :class-names=&quot;{
      dropdown: &#39;my-dropdown&#39;,
      option: &#39;my-option&#39;,
    }&quot;
  /&gt;

  &lt;!-- 自定义清除按钮 --&gt;
  &lt;AutoComplete v-model=&quot;value&quot; :options=&quot;options&quot; allow-clear :class-names=&quot;{ clear: &#39;my-clear-icon&#39; }&quot; /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-input-wrapper) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

:deep(.my-input-wrapper:hover) {
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
  transform: translateY(-2px);
}

:global(.my-dropdown) {
  background: linear-gradient(to bottom, #f0f5ff 0%, #ffffff 100%);
  border: 2px solid #1890ff;
  box-shadow: 0 4px 16px rgba(24, 144, 255, 0.2);
}

:global(.my-option:hover) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  transform: translateX(4px);
}

:deep(.my-clear-icon) {
  color: #ff4d4f;
  transition: transform 0.3s;
}

:deep(.my-clear-icon:hover) {
  transform: rotate(90deg);
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制输入框 --&gt;
  &lt;AutoComplete
    v-model=&quot;value&quot;
    :options=&quot;options&quot;
    :styles=&quot;{
      root: { borderRadius: &#39;20px&#39;, borderColor: &#39;#722ed1&#39; },
      input: { color: &#39;#722ed1&#39;, fontWeight: &#39;bold&#39; },
    }&quot;
  /&gt;

  &lt;!-- 自定义清除按钮颜色 --&gt;
  &lt;AutoComplete
    v-model=&quot;value&quot;
    :options=&quot;options&quot;
    allow-clear
    :styles=&quot;{
      clear: { color: &#39;#eb2f96&#39;, fontSize: &#39;16px&#39; },
    }&quot;
  /&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;AutoComplete
    v-model=&quot;value&quot;
    :options=&quot;options&quot;
    :styles=&quot;{
      root: { borderColor: &#39;#52c41a&#39; },
      input: { fontSize: &#39;16px&#39; },
      dropdown: { background: &#39;#f6ffed&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>下拉面板（<code>dropdown</code>、<code>option</code>、<code>empty</code>）挂载到 <code>body</code> 之外，样式定义时需要使用 <code>:global()</code> 而非 <code>:deep()</code></li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-auto-complete-disabled</code>）合并</li><li>自定义 <code>dropdown</code> 样式时，注意与全局主题的协调性</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>AutoComplete 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-text-hover</code></td><td>文本悬停背景</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg</code></td><td>主题背景色</td><td><code>#e6f4ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg-hover</code></td><td>主题背景悬停</td><td><code>#bae0ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr></tbody></table>`,27))])}}};export{Bt as default};
