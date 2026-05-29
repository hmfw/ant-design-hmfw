import{I as i,a as y,b,T as w}from"./Input-B_0mAZAo.js";import{k as g,w as c,g as h,j as e,G as l,z as u,d as o,E as I,B as S,M as x,h as k}from"./index-BNHhPN23.js";import"./cls-S9IiI6wd.js";const U={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},A=g({__name:"InputAddon",setup(m){const d=u(""),s=u(""),a=u(""),t=u("");return(n,r)=>(c(),h("div",U,[e(l(i),{value:d.value,"onUpdate:value":r[0]||(r[0]=p=>d.value=p),placeholder:"请输入用户名",prefix:"👤"},null,8,["value"]),e(l(i),{value:s.value,"onUpdate:value":r[1]||(r[1]=p=>s.value=p),placeholder:"请输入金额",prefix:"¥",suffix:"元"},null,8,["value"]),e(l(i),{value:a.value,"onUpdate:value":r[2]||(r[2]=p=>a.value=p),placeholder:"带前置/后置标签","addon-before":"http://","addon-after":".com"},null,8,["value"]),e(l(i),{value:t.value,"onUpdate:value":r[3]||(r[3]=p=>t.value=p),placeholder:"支持清除","allow-clear":""},null,8,["value"])]))}}),P=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <Input v-model:value="value1" placeholder="请输入用户名" prefix="👤" />
    <Input v-model:value="value2" placeholder="请输入金额" prefix="¥" suffix="元" />
    <Input v-model:value="value3" placeholder="带前置/后置标签" addon-before="http://" addon-after=".com" />
    <Input v-model:value="value4" placeholder="支持清除" allow-clear />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from 'ant-design-hmfw'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
<\/script>
`,T={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},B=g({__name:"InputBasic",setup(m){const d=u("");return(s,a)=>(c(),h("div",T,[e(l(i),{value:d.value,"onUpdate:value":a[0]||(a[0]=t=>d.value=t),placeholder:"请输入内容"},null,8,["value"]),e(l(i),{value:d.value,"onUpdate:value":a[1]||(a[1]=t=>d.value=t),placeholder:"禁用状态",disabled:""},null,8,["value"]),e(l(i),{value:d.value,"onUpdate:value":a[2]||(a[2]=t=>d.value=t),placeholder:"只读状态",readonly:""},null,8,["value"]),o("p",null,"当前值："+I(d.value),1)]))}}),E=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <Input v-model:value="value" placeholder="请输入内容" />
    <Input v-model:value="value" placeholder="禁用状态" disabled />
    <Input v-model:value="value" placeholder="只读状态" readonly />
    <p>当前值：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from 'ant-design-hmfw'

const value = ref('')
<\/script>
`,$={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},V=g({__name:"InputPassword",setup(m){const d=u(""),s=u("");return(a,t)=>(c(),h("div",$,[e(l(y),{value:d.value,"onUpdate:value":t[0]||(t[0]=n=>d.value=n),placeholder:"请输入密码"},null,8,["value"]),e(l(y),{value:s.value,"onUpdate:value":t[1]||(t[1]=n=>s.value=n),placeholder:"不可切换可见性","visibility-toggle":!1},null,8,["value"]),o("p",null,"密码："+I(d.value),1)]))}}),N=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <InputPassword v-model:value="password" placeholder="请输入密码" />
    <InputPassword
      v-model:value="password2"
      placeholder="不可切换可见性"
      :visibility-toggle="false"
    />
    <p>密码：{{ password }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputPassword } from 'ant-design-hmfw'

const password = ref('')
const password2 = ref('')
<\/script>
`,R={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},z=g({__name:"InputSearch",setup(m){const d=u(""),s=u(""),a=u(""),t=u(!1),n=p=>{console.log("搜索：",p)},r=p=>{t.value=!0,setTimeout(()=>{t.value=!1,console.log("搜索完成：",p)},1500)};return(p,v)=>(c(),h("div",R,[e(l(b),{value:d.value,"onUpdate:value":v[0]||(v[0]=f=>d.value=f),placeholder:"请输入搜索内容",onSearch:n},null,8,["value"]),e(l(b),{value:s.value,"onUpdate:value":v[1]||(v[1]=f=>s.value=f),placeholder:"带按钮的搜索框","enter-button":"",onSearch:n},null,8,["value"]),e(l(b),{value:a.value,"onUpdate:value":v[2]||(v[2]=f=>a.value=f),placeholder:"加载中","enter-button":"",loading:t.value,onSearch:r},null,8,["value","loading"])]))}}),C=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <InputSearch
      v-model:value="keyword"
      placeholder="请输入搜索内容"
      @search="handleSearch"
    />
    <InputSearch
      v-model:value="keyword2"
      placeholder="带按钮的搜索框"
      enter-button
      @search="handleSearch"
    />
    <InputSearch
      v-model:value="keyword3"
      placeholder="加载中"
      enter-button
      :loading="loading"
      @search="handleSearchWithLoading"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputSearch } from 'ant-design-hmfw'

const keyword = ref('')
const keyword2 = ref('')
const keyword3 = ref('')
const loading = ref(false)

const handleSearch = (value: string) => {
  console.log('搜索：', value)
}

const handleSearchWithLoading = (value: string) => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    console.log('搜索完成：', value)
  }, 1500)
}
<\/script>
`,_={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},D=g({__name:"InputTextArea",setup(m){const d=u(""),s=u(""),a=u("");return(t,n)=>(c(),h("div",_,[e(l(w),{value:d.value,"onUpdate:value":n[0]||(n[0]=r=>d.value=r),placeholder:"固定行数",rows:4},null,8,["value"]),e(l(w),{value:s.value,"onUpdate:value":n[1]||(n[1]=r=>s.value=r),placeholder:"自适应高度","auto-size":{minRows:2,maxRows:6}},null,8,["value"]),e(l(w),{value:a.value,"onUpdate:value":n[2]||(n[2]=r=>a.value=r),placeholder:"显示字数",maxlength:100,"show-count":!0},null,8,["value"])]))}}),L=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <TextArea
      v-model:value="text1"
      placeholder="固定行数"
      :rows="4"
    />
    <TextArea
      v-model:value="text2"
      placeholder="自适应高度"
      :auto-size="{ minRows: 2, maxRows: 6 }"
    />
    <TextArea
      v-model:value="text3"
      placeholder="显示字数"
      :maxlength="100"
      :show-count="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextArea } from 'ant-design-hmfw'

const text1 = ref('')
const text2 = ref('')
const text3 = ref('')
<\/script>
`,W={class:"markdown-body"},K={__name:"input",setup(m,{expose:d}){return d({frontmatter:{}}),(a,t)=>{const n=S("DemoBlock");return c(),h("div",W,[t[0]||(t[0]=o("h1",{id:"input-",tabindex:"-1"},"Input 输入框",-1)),t[1]||(t[1]=o("p",null,"通过鼠标或键盘输入内容，是最基础的表单域的包装。",-1)),t[2]||(t[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=o("ul",null,[o("li",null,"需要用户输入表单域内容时。"),o("li",null,"提供组合型输入框，带搜索的输入框，还可以进行大小选择。")],-1)),t[4]||(t[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=o("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=o("p",null,"基本使用。",-1)),e(n,{title:"基础用法",source:l(E)},{default:x(()=>[e(B)]),_:1},8,["source"]),t[7]||(t[7]=o("h3",{id:"-3",tabindex:"-1"},"前缀/后缀",-1)),t[8]||(t[8]=o("p",null,"在输入框上添加前缀或后缀图标。",-1)),e(n,{title:"前缀/后缀",source:l(P)},{default:x(()=>[e(A)]),_:1},8,["source"]),t[9]||(t[9]=o("h3",{id:"-4",tabindex:"-1"},"密码框",-1)),t[10]||(t[10]=o("p",null,"密码输入框，可切换密码可见性。",-1)),e(n,{title:"密码框",source:l(N)},{default:x(()=>[e(V)]),_:1},8,["source"]),t[11]||(t[11]=o("h3",{id:"-5",tabindex:"-1"},"文本域",-1)),t[12]||(t[12]=o("p",null,"用于多行输入。",-1)),e(n,{title:"文本域",source:l(L)},{default:x(()=>[e(D)]),_:1},8,["source"]),t[13]||(t[13]=o("h3",{id:"-6",tabindex:"-1"},"搜索框",-1)),t[14]||(t[14]=o("p",null,"带有搜索按钮的输入框。",-1)),e(n,{title:"搜索框",source:l(C)},{default:x(()=>[e(z)]),_:1},8,["source"]),t[15]||(t[15]=k('<h2 id="api" tabindex="-1">API</h2><h3 id="input-props" tabindex="-1">Input Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>输入框内容</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>输入框默认内容</td><td><code>string</code></td><td>-</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>控件大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>maxlength</td><td>最大长度</td><td><code>number</code></td><td>-</td></tr><tr><td>showCount</td><td>是否展示字数</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>可以点击清除图标删除内容</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>prefix</td><td>带有前缀图标的 input</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>suffix</td><td>带有后缀图标的 input</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>addonBefore</td><td>带标签的 input，设置前置标签</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>addonAfter</td><td>带标签的 input，设置后置标签</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>readonly</td><td>是否只读</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="inputpassword-props" tabindex="-1">InputPassword Props</h3><p>继承 Input 所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>visibilityToggle</td><td>是否显示切换按钮或者控制密码显隐</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="textarea-props" tabindex="-1">TextArea Props</h3><p>继承 Input 所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>rows</td><td>输入框行数</td><td><code>number</code></td><td><code>3</code></td></tr><tr><td>autoSize</td><td>自适应内容高度，可设置为 true | false 或对象</td><td><code>boolean | { minRows?: number; maxRows?: number }</code></td><td><code>false</code></td></tr></tbody></table><h3 id="inputsearch-props" tabindex="-1">InputSearch Props</h3><p>继承 Input 所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>enterButton</td><td>是否有确认按钮，可设为按钮文字</td><td><code>boolean | string</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>搜索 loading</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="input-events" tabindex="-1">Input Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>输入框内容变化时的回调</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>change</td><td>输入框内容变化时的回调</td><td><code>(event: Event) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>pressEnter</td><td>按下回车的回调</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清除按钮时的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="inputsearch-events" tabindex="-1">InputSearch Events</h3><p>继承 Input 所有事件，额外支持：</p><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>search</td><td>点击搜索图标、清除图标，或按下回车键时的回调</td><td><code>(value: string, event: Event) =&gt; void</code></td></tr></tbody></table>',17))])}}};export{K as default};
