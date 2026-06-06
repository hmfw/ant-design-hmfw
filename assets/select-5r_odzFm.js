import{S as c}from"./Select-BPRclDG4.js";import{m as h,y as p,i as v,l as n,I as a,f as e,H as g,B as i,E as f,P as m,k as s,j as S}from"./index-B2-fWtt3.js";import"./cls-S9IiI6wd.js";const y={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},w=h({__name:"SelectBasic",setup(b){const d=i(""),o=i(""),u=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Svelte（禁用）",value:"svelte",disabled:!0}];return(t,l)=>(p(),v("div",y,[n(a(c),{value:d.value,"onUpdate:value":l[0]||(l[0]=r=>d.value=r),options:u,placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),n(a(c),{value:o.value,"onUpdate:value":l[1]||(l[1]=r=>o.value=r),options:u,placeholder:"禁用状态",disabled:"",style:{width:"100%"}},null,8,["value"]),e("p",null,"选中："+g(d.value),1)]))}}),V=`<template>
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
`,_={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},O=h({__name:"SelectLabelInValue",setup(b){const d=i(null),o=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"}],u=(t,l)=>{console.log("change:",t,l)};return(t,l)=>(p(),v("div",_,[n(a(c),{value:d.value,"onUpdate:value":l[0]||(l[0]=r=>d.value=r),options:o,"label-in-value":"",placeholder:"选择一个选项",style:{width:"100%"},onChange:u},null,8,["value"]),e("p",null,"选中值："+g(JSON.stringify(d.value)),1)]))}}),C=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <Select
      v-model:value="value"
      :options="options"
      label-in-value
      placeholder="选择一个选项"
      style="width: 100%;"
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
`,z={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},R=h({__name:"SelectMaxCount",setup(b){const d=i([]),o=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"},{label:"Solid",value:"solid"}];return(u,t)=>(p(),v("div",z,[n(a(c),{value:d.value,"onUpdate:value":t[0]||(t[0]=l=>d.value=l),options:o,mode:"multiple","max-count":3,placeholder:"最多选择 3 个",style:{width:"100%"}},null,8,["value"]),e("p",null,"已选："+g(d.value),1)]))}}),$=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <Select
      v-model:value="value"
      :options="options"
      mode="multiple"
      :max-count="3"
      placeholder="最多选择 3 个"
      style="width: 100%;"
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
`,k={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},A=h({__name:"SelectMultiple",setup(b){const d=i([]),o=i([]),u=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"},{label:"Solid",value:"solid"}];return(t,l)=>(p(),v("div",k,[n(a(c),{value:d.value,"onUpdate:value":l[0]||(l[0]=r=>d.value=r),options:u,mode:"multiple",placeholder:"请选择多个选项",style:{width:"100%"}},null,8,["value"]),n(a(c),{value:o.value,"onUpdate:value":l[1]||(l[1]=r=>o.value=r),options:u,mode:"multiple","max-tag-count":2,placeholder:"最多显示 2 个标签",style:{width:"100%"}},null,8,["value"]),e("p",null,"已选："+g(d.value),1)]))}}),N=`<template>
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
`,U={style:{"max-width":"400px"}},B=h({__name:"SelectOptGroup",setup(b){const d=i(""),o=[{label:"浙江",options:[{label:"杭州",value:"hangzhou"},{label:"宁波",value:"ningbo"},{label:"温州",value:"wenzhou"}]},{label:"江苏",options:[{label:"南京",value:"nanjing"},{label:"苏州",value:"suzhou"},{label:"镇江",value:"zhenjiang"}]}];return(u,t)=>(p(),v("div",U,[n(a(c),{value:d.value,"onUpdate:value":t[0]||(t[0]=l=>d.value=l),options:o,placeholder:"选择城市",style:{width:"100%"}},null,8,["value"])]))}}),L=`<template>
  <div style="max-width: 400px;">
    <Select
      v-model:value="value"
      :options="options"
      placeholder="选择城市"
      style="width: 100%;"
    />
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
`,j={style:{"max-width":"300px"}},T=h({__name:"SelectSearch",setup(b){const d=i(""),o=[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"},{label:"杭州",value:"hangzhou"},{label:"成都",value:"chengdu"}],u=i(o),t=l=>{u.value=o.filter(r=>r.label.includes(l))};return(l,r)=>(p(),v("div",j,[n(a(c),{value:d.value,"onUpdate:value":r[0]||(r[0]=x=>d.value=x),options:u.value,"show-search":!0,placeholder:"请搜索并选择",style:{width:"100%"},onSearch:t},null,8,["value","options"])]))}}),M=`<template>
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
`,I={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},G=h({__name:"SelectTags",setup(b){const d=i([]),o=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"}];return(u,t)=>(p(),v("div",I,[n(a(c),{value:d.value,"onUpdate:value":t[0]||(t[0]=l=>d.value=l),options:o,mode:"tags","token-separators":[","],placeholder:"输入标签，用逗号分隔",style:{width:"100%"}},null,8,["value"]),e("p",null,"已选："+g(d.value),1)]))}}),P=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <Select
      v-model:value="value"
      :options="options"
      mode="tags"
      :token-separators="[',']"
      placeholder="输入标签，用逗号分隔"
      style="width: 100%;"
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
`,D={class:"markdown-body"},H={__name:"select",setup(b,{expose:d}){return d({frontmatter:{}}),(u,t)=>{const l=f("DemoBlock");return p(),v("div",D,[t[0]||(t[0]=e("h1",{id:"select-",tabindex:"-1"},"Select 选择器",-1)),t[1]||(t[1]=e("p",null,"下拉选择器。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。"),e("li",null,"当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。")],-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"基本使用。",-1)),n(l,{title:"基础用法",source:a(V)},{default:m(()=>[n(w)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"多选",-1)),t[8]||(t[8]=e("p",null,[s("通过 "),e("code",null,'mode="multiple"'),s(" 开启多选模式。")],-1)),n(l,{title:"多选",source:a(N)},{default:m(()=>[n(A)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-4",tabindex:"-1"},"搜索",-1)),t[10]||(t[10]=e("p",null,[s("通过 "),e("code",null,"show-search"),s(" 开启搜索功能。")],-1)),n(l,{title:"搜索",source:a(M)},{default:m(()=>[n(T)]),_:1},8,["source"]),t[11]||(t[11]=e("h3",{id:"-5",tabindex:"-1"},"标签模式",-1)),t[12]||(t[12]=e("p",null,[s("通过 "),e("code",null,'mode="tags"'),s(" 开启标签模式，可以自由输入标签。配合 "),e("code",null,"token-separators"),s(" 可以自动分词。")],-1)),n(l,{title:"标签模式",source:a(P)},{default:m(()=>[n(G)]),_:1},8,["source"]),t[13]||(t[13]=e("h3",{id:"-6",tabindex:"-1"},"获取选项对象",-1)),t[14]||(t[14]=e("p",null,[s("通过 "),e("code",null,"label-in-value"),s(" 可以获取选项的完整对象（包含 value 和 label）。")],-1)),n(l,{title:"获取选项对象",source:a(C)},{default:m(()=>[n(O)]),_:1},8,["source"]),t[15]||(t[15]=e("h3",{id:"-7",tabindex:"-1"},"选项分组",-1)),t[16]||(t[16]=e("p",null,[s("使用 "),e("code",null,"options"),s(" 的嵌套结构实现选项分组。")],-1)),n(l,{title:"选项分组",source:a(L)},{default:m(()=>[n(B)]),_:1},8,["source"]),t[17]||(t[17]=e("h3",{id:"-8",tabindex:"-1"},"限制选择数量",-1)),t[18]||(t[18]=e("p",null,[s("通过 "),e("code",null,"max-count"),s(" 限制多选模式下的最大选择数量。")],-1)),n(l,{title:"限制选择数量",source:a($)},{default:m(()=>[n(R)]),_:1},8,["source"]),t[19]||(t[19]=S('<h2 id="api" tabindex="-1">API</h2><h3 id="select-props" tabindex="-1">Select Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定当前选中的条目</td><td><code>string | number | (string | number)[] | LabeledValue | LabeledValue[]</code></td><td>-</td></tr><tr><td>defaultValue</td><td>指定默认选中的条目</td><td><code>string | number | (string | number)[] | LabeledValue | LabeledValue[]</code></td><td>-</td></tr><tr><td>options</td><td>数据化配置选项内容，支持嵌套（OptGroup）</td><td><code>SelectOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>选择框默认文字</td><td><code>string</code></td><td>-</td></tr><tr><td>allowClear</td><td>支持清除</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>选择框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>mode</td><td>设置 Select 的模式为多选或标签</td><td><code>&#39;multiple&#39; | &#39;tags&#39;</code></td><td>-</td></tr><tr><td>showSearch</td><td>使单选模式可搜索</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>maxTagCount</td><td>最多显示多少个 tag</td><td><code>number</code></td><td>-</td></tr><tr><td>maxCount</td><td>最多选择多少个选项（multiple/tags 模式）</td><td><code>number</code></td><td>-</td></tr><tr><td>maxTagPlaceholder</td><td>隐藏 tag 时显示的内容</td><td><code>string | ((omittedValues) =&gt; string)</code></td><td>-</td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>open</td><td>是否展开下拉菜单</td><td><code>boolean</code></td><td>-</td></tr><tr><td>loading</td><td>加载中状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>labelInValue</td><td>是否把每个选项的 label 包装到 value 中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>tokenSeparators</td><td>自动分词的分隔符（tags 模式）</td><td><code>string[]</code></td><td>-</td></tr><tr><td>filterOption</td><td>是否根据输入项进行筛选</td><td><code>boolean | ((input: string, option: SelectOption) =&gt; boolean)</code></td><td><code>true</code></td></tr><tr><td>notFoundContent</td><td>当下拉列表为空时显示的内容</td><td><code>string</code></td><td>-</td></tr><tr><td>dropdownMatchSelectWidth</td><td>下拉菜单和选择器同宽</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>autoClearSearchValue</td><td>选中后是否清空搜索框（multiple/tags 模式）</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>optionRender</td><td>自定义下拉选项渲染</td><td><code>(option: SelectOption, info: { index: number }) =&gt; VNode</code></td><td>-</td></tr><tr><td>labelRender</td><td>自定义选中项渲染</td><td><code>(props: LabeledValue) =&gt; VNode</code></td><td>-</td></tr><tr><td>tagRender</td><td>自定义 tag 渲染（multiple/tags 模式）</td><td><code>(props: { label, value, closable, onClose }) =&gt; VNode</code></td><td>-</td></tr><tr><td>fieldNames</td><td>自定义字段名</td><td><code>{ label?: string; value?: string; options?: string }</code></td><td><code>{ label: &#39;label&#39;, value: &#39;value&#39;, options: &#39;options&#39; }</code></td></tr></tbody></table><h3 id="selectoption" tabindex="-1">SelectOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td><code>string | number</code></td></tr><tr><td>label</td><td>选项的标签</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用该选项</td><td><code>boolean</code></td></tr><tr><td>title</td><td>选项的 title 属性</td><td><code>string</code></td></tr><tr><td>options</td><td>子选项（用于 OptGroup）</td><td><code>SelectOption[]</code></td></tr></tbody></table><h3 id="labeledvalue" tabindex="-1">LabeledValue</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td><code>string | number</code></td></tr><tr><td>label</td><td>选项的标签</td><td><code>string</code></td></tr><tr><td>key</td><td>选项的 key</td><td><code>string</code></td></tr></tbody></table><h3 id="select-events" tabindex="-1">Select Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选中 option，或 input 的 value 变化时，调用此函数</td><td><code>(value: SelectValue) =&gt; void</code></td></tr><tr><td>change</td><td>选中 option，或 input 的 value 变化时，调用此函数</td><td><code>(value: SelectValue, option: SelectOption | SelectOption[]) =&gt; void</code></td></tr><tr><td>search</td><td>文本框值变化时回调</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>select</td><td>选中选项时回调</td><td><code>(value: string | number, option: SelectOption) =&gt; void</code></td></tr><tr><td>deselect</td><td>取消选中选项时回调</td><td><code>(value: string | number) =&gt; void</code></td></tr><tr><td>focus</td><td>获得焦点时回调</td><td><code>() =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时回调</td><td><code>() =&gt; void</code></td></tr><tr><td>clear</td><td>清除内容时回调</td><td><code>() =&gt; void</code></td></tr><tr><td>dropdownVisibleChange</td><td>下拉菜单显示/隐藏时回调</td><td><code>(visible: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="select-methods" tabindex="-1">Select Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td>-</td></tr><tr><td>blur</td><td>失去焦点</td><td>-</td></tr></tbody></table>',11))])}}};export{H as default};
