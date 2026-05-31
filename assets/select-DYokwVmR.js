import{S as i}from"./Select-V1X2yJAT.js";import{m as b,y as p,i as v,l as o,I as s,f as e,H as g,B as u,E as x,P as h,k as c,j as S}from"./index-CsoOETlJ.js";import"./cls-S9IiI6wd.js";const y={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},w=b({__name:"SelectBasic",setup(m){const d=u(""),a=u(""),r=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Svelte（禁用）",value:"svelte",disabled:!0}];return(t,l)=>(p(),v("div",y,[o(s(i),{value:d.value,"onUpdate:value":l[0]||(l[0]=n=>d.value=n),options:r,placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),o(s(i),{value:a.value,"onUpdate:value":l[1]||(l[1]=n=>a.value=n),options:r,placeholder:"禁用状态",disabled:"",style:{width:"100%"}},null,8,["value"]),e("p",null,"选中："+g(d.value),1)]))}}),_=`<template>
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
`,V={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},B=b({__name:"SelectMultiple",setup(m){const d=u([]),a=u([]),r=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"},{label:"Solid",value:"solid"}];return(t,l)=>(p(),v("div",V,[o(s(i),{value:d.value,"onUpdate:value":l[0]||(l[0]=n=>d.value=n),options:r,mode:"multiple",placeholder:"请选择多个选项",style:{width:"100%"}},null,8,["value"]),o(s(i),{value:a.value,"onUpdate:value":l[1]||(l[1]=n=>a.value=n),options:r,mode:"multiple","max-tag-count":2,placeholder:"最多显示 2 个标签",style:{width:"100%"}},null,8,["value"]),e("p",null,"已选："+g(d.value),1)]))}}),O=`<template>
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
`,z={style:{"max-width":"300px"}},k=b({__name:"SelectSearch",setup(m){const d=u(""),a=[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"},{label:"杭州",value:"hangzhou"},{label:"成都",value:"chengdu"}],r=u(a),t=l=>{r.value=a.filter(n=>n.label.includes(l))};return(l,n)=>(p(),v("div",z,[o(s(i),{value:d.value,"onUpdate:value":n[0]||(n[0]=f=>d.value=f),options:r.value,"show-search":!0,placeholder:"请搜索并选择",style:{width:"100%"},onSearch:t},null,8,["value","options"])]))}}),$=`<template>
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
`,A={class:"markdown-body"},U={__name:"select",setup(m,{expose:d}){return d({frontmatter:{}}),(r,t)=>{const l=x("DemoBlock");return p(),v("div",A,[t[0]||(t[0]=e("h1",{id:"select-",tabindex:"-1"},"Select 选择器",-1)),t[1]||(t[1]=e("p",null,"下拉选择器。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。"),e("li",null,"当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。")],-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"基本使用。",-1)),o(l,{title:"基础用法",source:s(_)},{default:h(()=>[o(w)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"多选",-1)),t[8]||(t[8]=e("p",null,[c("通过 "),e("code",null,'mode="multiple"'),c(" 开启多选模式。")],-1)),o(l,{title:"多选",source:s(O)},{default:h(()=>[o(B)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-4",tabindex:"-1"},"搜索",-1)),t[10]||(t[10]=e("p",null,[c("通过 "),e("code",null,"show-search"),c(" 开启搜索功能。")],-1)),o(l,{title:"搜索",source:s($)},{default:h(()=>[o(k)]),_:1},8,["source"]),t[11]||(t[11]=S('<h2 id="api" tabindex="-1">API</h2><h3 id="select-props" tabindex="-1">Select Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定当前选中的条目</td><td><code>string | number | (string | number)[]</code></td><td>-</td></tr><tr><td>defaultValue</td><td>指定默认选中的条目</td><td><code>string | number | (string | number)[]</code></td><td>-</td></tr><tr><td>options</td><td>数据化配置选项内容</td><td><code>SelectOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>选择框默认文字</td><td><code>string</code></td><td>-</td></tr><tr><td>allowClear</td><td>支持清除</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>选择框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>mode</td><td>设置 Select 的模式为多选或标签</td><td><code>&#39;multiple&#39; | &#39;tags&#39;</code></td><td>-</td></tr><tr><td>showSearch</td><td>使单选模式可搜索</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>maxTagCount</td><td>最多显示多少个 tag，响应式模式会对性能产生损耗</td><td><code>number</code></td><td>-</td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>open</td><td>是否展开下拉菜单</td><td><code>boolean</code></td><td>-</td></tr><tr><td>loading</td><td>加载中状态</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="selectoption" tabindex="-1">SelectOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td><code>string | number</code></td></tr><tr><td>label</td><td>选项的标签</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用该选项</td><td><code>boolean</code></td></tr></tbody></table><h3 id="select-events" tabindex="-1">Select Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选中 option，或 input 的 value 变化时，调用此函数</td><td><code>(value: string | number | (string | number)[]) =&gt; void</code></td></tr><tr><td>change</td><td>选中 option，或 input 的 value 变化时，调用此函数</td><td><code>(value: string | number | (string | number)[], option: SelectOption | SelectOption[]) =&gt; void</code></td></tr><tr><td>search</td><td>文本框值变化时回调</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>focus</td><td>获得焦点时回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>clear</td><td>清除内容时回调</td><td><code>() =&gt; void</code></td></tr></tbody></table>',7))])}}};export{U as default};
