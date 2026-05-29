import{k as B,I as H,H as X,z as h,L as Y,t as q,s as J,j as n,F as R,i as b,T as K,c as w,p as Q,w as O,g as T,G as g,d as i,E,B as Z,M as _,h as ee}from"./index-BNHhPN23.js";import{c as M}from"./cls-S9IiI6wd.js";const $=B({name:"Select",props:{value:[String,Number,Array],defaultValue:[String,Number,Array],options:{type:Array,default:()=>[]},mode:String,size:{type:String,default:"middle"},status:String,placeholder:{type:String,default:void 0},disabled:Boolean,loading:Boolean,allowClear:Boolean,showSearch:Boolean,filterOption:{type:[Boolean,Function],default:!0},notFoundContent:{type:String,default:void 0},maxTagCount:Number,open:{type:Boolean,default:void 0},dropdownMatchSelectWidth:{type:Boolean,default:!0}},emits:["update:value","change","search","select","deselect","clear","dropdownVisibleChange"],setup(t,{emit:d}){const l=H("select"),v=X(),a=h(null),u=h(null),r=h(null),f=w(()=>t.mode==="multiple"||t.mode==="tags"),S=h((e=>e??(f.value?[]:void 0))(t.defaultValue??t.value)),k=h(!1),c=h(""),y=h({top:0,left:0,width:0}),L=w(()=>t.value!==void 0),N=w(()=>L.value?t.value:S.value);Y(()=>t.value,e=>{e!==void 0&&(S.value=e)});const x=w(()=>t.open!==void 0?t.open:k.value),m=w(()=>{const e=N.value;return e==null?[]:Array.isArray(e)?e:[e]}),D=w(()=>{if(!c.value||!t.showSearch)return t.options;const e=c.value.toLowerCase();return t.options.filter(o=>typeof t.filterOption=="function"?t.filterOption(e,o):t.filterOption===!1?!0:o.label.toLowerCase().includes(e))}),z=w(()=>m.value.map(e=>{const o=t.options.find(p=>p.value===e);return(o==null?void 0:o.label)??String(e)})),P=()=>{if(!a.value)return;const e=a.value.getBoundingClientRect();y.value={top:e.bottom+window.scrollY+4,left:e.left+window.scrollX,width:e.width}},U=async()=>{var e;t.disabled||(k.value=!0,d("dropdownVisibleChange",!0),await Q(),P(),t.showSearch&&((e=r.value)==null||e.focus()))},A=()=>{k.value=!1,c.value="",d("dropdownVisibleChange",!1)},I=e=>{if(!e.disabled)if(f.value){const o=[...m.value],p=o.indexOf(e.value);p>=0?(o.splice(p,1),d("deselect",e.value)):(o.push(e.value),d("select",e.value)),S.value=o,d("update:value",o),d("change",o),c.value=""}else S.value=e.value,d("update:value",e.value),d("change",e.value),d("select",e.value),A()},j=(e,o)=>{o.stopPropagation();const p=m.value.filter(C=>C!==e);S.value=p,d("update:value",p),d("change",p),d("deselect",e)},W=e=>{e.stopPropagation();const o=f.value?[]:void 0;S.value=o,d("update:value",o),d("change",o),d("clear")},F=e=>{var o,p;x.value&&((o=a.value)!=null&&o.contains(e.target)||(p=u.value)!=null&&p.contains(e.target)||A())};return q(()=>document.addEventListener("mousedown",F)),J(()=>document.removeEventListener("mousedown",F)),()=>{const e=m.value.length>0,o=t.allowClear&&e&&!t.disabled,p=f.value?t.maxTagCount!==void 0?z.value.slice(0,t.maxTagCount):z.value:[],C=f.value&&t.maxTagCount!==void 0?Math.max(0,m.value.length-t.maxTagCount):0;return n("div",{class:M(l,`${l}-${t.size}`,{[`${l}-open`]:x.value,[`${l}-disabled`]:t.disabled,[`${l}-loading`]:t.loading,[`${l}-multiple`]:f.value,[`${l}-status-${t.status}`]:!!t.status,[`${l}-allow-clear`]:t.allowClear})},[n("div",{ref:a,class:`${l}-selector`,role:"combobox","aria-expanded":x.value,"aria-haspopup":"listbox","aria-disabled":t.disabled||void 0,onClick:x.value?A:U},[f.value?n(R,null,[p.map((s,V)=>n("span",{key:m.value[V],class:`${l}-selection-item`},[n("span",{class:`${l}-selection-item-content`},[s]),n("span",{class:`${l}-selection-item-remove`,onClick:G=>j(m.value[V],G)},[b("×")])])),C>0&&n("span",{class:`${l}-selection-item`},[b("+"),C]),t.showSearch&&n("input",{ref:r,class:`${l}-selection-search-input`,value:c.value,onInput:s=>{c.value=s.target.value,d("search",c.value)},style:{width:`${Math.max(4,c.value.length+1)}ch`}},null),!e&&!c.value&&n("span",{class:`${l}-selection-placeholder`},[t.placeholder??v.value.Select.placeholder])]):n(R,null,[e&&!c.value?n("span",{class:`${l}-selection-item`},[z.value[0]]):!c.value&&n("span",{class:`${l}-selection-placeholder`},[t.placeholder??v.value.Select.placeholder]),t.showSearch&&x.value&&n("input",{ref:r,class:`${l}-selection-search-input`,value:c.value,onInput:s=>{c.value=s.target.value,d("search",c.value)}},null)])]),n("div",{class:`${l}-arrow`},[t.loading?n("span",{class:`${l}-loading-icon`},[b("⟳")]):n("span",{class:M(`${l}-suffix`,{[`${l}-suffix-open`]:x.value})},[b("▾")])]),o&&n("span",{class:`${l}-clear`,onClick:W},[b("×")]),x.value&&n(K,{to:"body"},{default:()=>[n("div",{ref:u,class:`${l}-dropdown`,role:"listbox","aria-multiselectable":f.value||void 0,style:{position:"absolute",top:`${y.value.top}px`,left:`${y.value.left}px`,width:t.dropdownMatchSelectWidth?`${y.value.width}px`:"auto",minWidth:`${y.value.width}px`,zIndex:"1050"}},[D.value.length===0?n("div",{class:`${l}-item-empty`},[t.notFoundContent??v.value.Select.notFoundContent]):D.value.map(s=>n("div",{key:s.value,class:M(`${l}-item`,`${l}-item-option`,{[`${l}-item-option-selected`]:m.value.includes(s.value),[`${l}-item-option-disabled`]:s.disabled,[`${l}-item-option-active`]:!s.disabled}),role:"option","aria-selected":m.value.includes(s.value),"aria-disabled":s.disabled||void 0,title:s.title??s.label,onMousedown:V=>V.preventDefault(),onClick:()=>I(s)},[n("div",{class:`${l}-item-option-content`},[s.label]),m.value.includes(s.value)&&n("span",{class:`${l}-item-option-state`},[b("✓")])]))])]})])}}}),te={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},le=B({__name:"SelectBasic",setup(t){const d=h(""),l=h(""),v=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Svelte（禁用）",value:"svelte",disabled:!0}];return(a,u)=>(O(),T("div",te,[n(g($),{value:d.value,"onUpdate:value":u[0]||(u[0]=r=>d.value=r),options:v,placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),n(g($),{value:l.value,"onUpdate:value":u[1]||(u[1]=r=>l.value=r),options:v,placeholder:"禁用状态",disabled:"",style:{width:"100%"}},null,8,["value"]),i("p",null,"选中："+E(d.value),1)]))}}),ne=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <Select
      v-model:value="value"
      :options="options"
      placeholder="请选择"
      style="width: 100%;"
    />
    <Select
      v-model:value="value2"
      :options="options"
      placeholder="禁用状态"
      disabled
      style="width: 100%;"
    />
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
`,ae={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},de=B({__name:"SelectMultiple",setup(t){const d=h([]),l=h([]),v=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"},{label:"Solid",value:"solid"}];return(a,u)=>(O(),T("div",ae,[n(g($),{value:d.value,"onUpdate:value":u[0]||(u[0]=r=>d.value=r),options:v,mode:"multiple",placeholder:"请选择多个选项",style:{width:"100%"}},null,8,["value"]),n(g($),{value:l.value,"onUpdate:value":u[1]||(u[1]=r=>l.value=r),options:v,mode:"multiple","max-tag-count":2,placeholder:"最多显示 2 个标签",style:{width:"100%"}},null,8,["value"]),i("p",null,"已选："+E(d.value),1)]))}}),oe=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <Select
      v-model:value="selected"
      :options="options"
      mode="multiple"
      placeholder="请选择多个选项"
      style="width: 100%;"
    />
    <Select
      v-model:value="selected2"
      :options="options"
      mode="multiple"
      :max-tag-count="2"
      placeholder="最多显示 2 个标签"
      style="width: 100%;"
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
`,ue={style:{"max-width":"300px"}},se=B({__name:"SelectSearch",setup(t){const d=h(""),l=[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"},{label:"杭州",value:"hangzhou"},{label:"成都",value:"chengdu"}],v=h(l),a=u=>{v.value=l.filter(r=>r.label.includes(u))};return(u,r)=>(O(),T("div",ue,[n(g($),{value:d.value,"onUpdate:value":r[0]||(r[0]=f=>d.value=f),options:v.value,"show-search":!0,placeholder:"请搜索并选择",style:{width:"100%"},onSearch:a},null,8,["value","options"])]))}}),ie=`<template>
  <div style="max-width: 300px;">
    <Select
      v-model:value="value"
      :options="options"
      :show-search="true"
      placeholder="请搜索并选择"
      style="width: 100%;"
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
  options.value = allOptions.filter(item =>
    item.label.includes(searchText)
  )
}
<\/script>
`,re={class:"markdown-body"},he={__name:"select",setup(t,{expose:d}){return d({frontmatter:{}}),(v,a)=>{const u=Z("DemoBlock");return O(),T("div",re,[a[0]||(a[0]=i("h1",{id:"select-",tabindex:"-1"},"Select 选择器",-1)),a[1]||(a[1]=i("p",null,"下拉选择器。",-1)),a[2]||(a[2]=i("h2",{id:"",tabindex:"-1"},"何时使用",-1)),a[3]||(a[3]=i("ul",null,[i("li",null,"弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。"),i("li",null,"当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。")],-1)),a[4]||(a[4]=i("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),a[5]||(a[5]=i("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),a[6]||(a[6]=i("p",null,"基本使用。",-1)),n(u,{title:"基础用法",source:g(ne)},{default:_(()=>[n(le)]),_:1},8,["source"]),a[7]||(a[7]=i("h3",{id:"-3",tabindex:"-1"},"多选",-1)),a[8]||(a[8]=i("p",null,[b("通过 "),i("code",null,'mode="multiple"'),b(" 开启多选模式。")],-1)),n(u,{title:"多选",source:g(oe)},{default:_(()=>[n(de)]),_:1},8,["source"]),a[9]||(a[9]=i("h3",{id:"-4",tabindex:"-1"},"搜索",-1)),a[10]||(a[10]=i("p",null,[b("通过 "),i("code",null,"show-search"),b(" 开启搜索功能。")],-1)),n(u,{title:"搜索",source:g(ie)},{default:_(()=>[n(se)]),_:1},8,["source"]),a[11]||(a[11]=ee('<h2 id="api" tabindex="-1">API</h2><h3 id="select-props" tabindex="-1">Select Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定当前选中的条目</td><td><code>string | number | (string | number)[]</code></td><td>-</td></tr><tr><td>defaultValue</td><td>指定默认选中的条目</td><td><code>string | number | (string | number)[]</code></td><td>-</td></tr><tr><td>options</td><td>数据化配置选项内容</td><td><code>SelectOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>选择框默认文字</td><td><code>string</code></td><td>-</td></tr><tr><td>allowClear</td><td>支持清除</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>选择框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>mode</td><td>设置 Select 的模式为多选或标签</td><td><code>&#39;multiple&#39; | &#39;tags&#39;</code></td><td>-</td></tr><tr><td>showSearch</td><td>使单选模式可搜索</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>maxTagCount</td><td>最多显示多少个 tag，响应式模式会对性能产生损耗</td><td><code>number</code></td><td>-</td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>open</td><td>是否展开下拉菜单</td><td><code>boolean</code></td><td>-</td></tr><tr><td>loading</td><td>加载中状态</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="selectoption" tabindex="-1">SelectOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td><code>string | number</code></td></tr><tr><td>label</td><td>选项的标签</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用该选项</td><td><code>boolean</code></td></tr></tbody></table><h3 id="select-events" tabindex="-1">Select Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选中 option，或 input 的 value 变化时，调用此函数</td><td><code>(value: string | number | (string | number)[]) =&gt; void</code></td></tr><tr><td>change</td><td>选中 option，或 input 的 value 变化时，调用此函数</td><td><code>(value: string | number | (string | number)[], option: SelectOption | SelectOption[]) =&gt; void</code></td></tr><tr><td>search</td><td>文本框值变化时回调</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>focus</td><td>获得焦点时回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>clear</td><td>清除内容时回调</td><td><code>() =&gt; void</code></td></tr></tbody></table>',7))])}}};export{he as default};
