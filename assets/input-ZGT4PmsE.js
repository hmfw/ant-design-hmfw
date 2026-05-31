import{I as p,a as y,b as g,T as w}from"./Input-ClHj9Erp.js";import{m as x,y as c,i as v,l as d,I as l,B as u,f as n,H as I,E as S,P as f,j as k}from"./index-BZUMvgWw.js";import"./icons-ef0p77fA.js";import"./cls-S9IiI6wd.js";const U={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},N=x({__name:"InputAddon",setup(h){const o=u(""),r=u(""),a=u("");return(t,e)=>(c(),v("div",U,[d(l(p),{value:o.value,"onUpdate:value":e[0]||(e[0]=s=>o.value=s),placeholder:"请输入用户名",prefix:"👤"},null,8,["value"]),d(l(p),{value:r.value,"onUpdate:value":e[1]||(e[1]=s=>r.value=s),placeholder:"请输入金额",prefix:"¥",suffix:"元"},null,8,["value"]),d(l(p),{value:a.value,"onUpdate:value":e[2]||(e[2]=s=>a.value=s),placeholder:"支持清除","allow-clear":""},null,8,["value"])]))}}),P=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <Input v-model:value="value1" placeholder="请输入用户名" prefix="👤" />
    <Input v-model:value="value2" placeholder="请输入金额" prefix="¥" suffix="元" />
    <!-- addon-before/addon-after are deprecated, use Space.Compact instead -->
    <Input v-model:value="value4" placeholder="支持清除" allow-clear />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from 'ant-design-hmfw'

const value1 = ref('')
const value2 = ref('')
const value4 = ref('')
<\/script>
`,V={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},T=x({__name:"InputBasic",setup(h){const o=u("");return(r,a)=>(c(),v("div",V,[d(l(p),{value:o.value,"onUpdate:value":a[0]||(a[0]=t=>o.value=t),placeholder:"请输入内容"},null,8,["value"]),d(l(p),{value:o.value,"onUpdate:value":a[1]||(a[1]=t=>o.value=t),placeholder:"禁用状态",disabled:""},null,8,["value"]),d(l(p),{value:o.value,"onUpdate:value":a[2]||(a[2]=t=>o.value=t),placeholder:"只读状态",readonly:""},null,8,["value"]),n("p",null,"当前值："+I(o.value),1)]))}}),A=`<template>
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
`,C={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},E=x({__name:"InputPassword",setup(h){const o=u(""),r=u("");return(a,t)=>(c(),v("div",C,[d(l(y),{value:o.value,"onUpdate:value":t[0]||(t[0]=e=>o.value=e),placeholder:"请输入密码"},null,8,["value"]),d(l(y),{value:r.value,"onUpdate:value":t[1]||(t[1]=e=>r.value=e),placeholder:"不可切换可见性","visibility-toggle":!1},null,8,["value"]),n("p",null,"密码："+I(o.value),1)]))}}),$=`<template>
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
`,B={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},R=x({__name:"InputSearch",setup(h){const o=u(""),r=u(""),a=u(""),t=u(!1),e=b=>{console.log("搜索：",b)},s=b=>{t.value=!0,setTimeout(()=>{t.value=!1,console.log("搜索完成：",b)},1500)};return(b,i)=>(c(),v("div",B,[d(l(g),{value:o.value,"onUpdate:value":i[0]||(i[0]=m=>o.value=m),placeholder:"请输入搜索内容",onSearch:e},null,8,["value"]),d(l(g),{value:r.value,"onUpdate:value":i[1]||(i[1]=m=>r.value=m),placeholder:"带按钮的搜索框","enter-button":"",onSearch:e},null,8,["value"]),d(l(g),{value:a.value,"onUpdate:value":i[2]||(i[2]=m=>a.value=m),placeholder:"加载中","enter-button":"",loading:t.value,onSearch:s},null,8,["value","loading"])]))}}),_=`<template>
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
`,z={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},D=x({__name:"InputTextArea",setup(h){const o=u(""),r=u(""),a=u("");return(t,e)=>(c(),v("div",z,[d(l(w),{value:o.value,"onUpdate:value":e[0]||(e[0]=s=>o.value=s),placeholder:"固定行数",rows:4},null,8,["value"]),d(l(w),{value:r.value,"onUpdate:value":e[1]||(e[1]=s=>r.value=s),placeholder:"自适应高度","auto-size":{minRows:2,maxRows:6}},null,8,["value"]),d(l(w),{value:a.value,"onUpdate:value":e[2]||(e[2]=s=>a.value=s),placeholder:"显示字数",maxlength:100,"show-count":!0},null,8,["value"])]))}}),L=`<template>
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
`,W={class:"markdown-body"},M={__name:"input",setup(h,{expose:o}){return o({frontmatter:{}}),(a,t)=>{const e=S("DemoBlock");return c(),v("div",W,[t[0]||(t[0]=n("h1",{id:"input-",tabindex:"-1"},"Input 输入框",-1)),t[1]||(t[1]=n("p",null,"通过鼠标或键盘输入内容，是最基础的表单域的包装。",-1)),t[2]||(t[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"需要用户输入表单域内容时。"),n("li",null,"提供组合型输入框，带搜索的输入框，还可以进行大小选择。")],-1)),t[4]||(t[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=n("p",null,"基本使用。",-1)),d(e,{title:"基础用法",source:l(A)},{default:f(()=>[d(T)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"-3",tabindex:"-1"},"前缀/后缀",-1)),t[8]||(t[8]=n("p",null,"在输入框上添加前缀或后缀图标。",-1)),d(e,{title:"前缀/后缀",source:l(P)},{default:f(()=>[d(N)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"-4",tabindex:"-1"},"密码框",-1)),t[10]||(t[10]=n("p",null,"密码输入框，可切换密码可见性。",-1)),d(e,{title:"密码框",source:l($)},{default:f(()=>[d(E)]),_:1},8,["source"]),t[11]||(t[11]=n("h3",{id:"-5",tabindex:"-1"},"文本域",-1)),t[12]||(t[12]=n("p",null,"用于多行输入。",-1)),d(e,{title:"文本域",source:l(L)},{default:f(()=>[d(D)]),_:1},8,["source"]),t[13]||(t[13]=n("h3",{id:"-6",tabindex:"-1"},"搜索框",-1)),t[14]||(t[14]=n("p",null,"带有搜索按钮的输入框。",-1)),d(e,{title:"搜索框",source:l(_)},{default:f(()=>[d(R)]),_:1},8,["source"]),t[15]||(t[15]=k('<h2 id="api" tabindex="-1">API</h2><h3 id="input-props" tabindex="-1">Input Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>输入框内容</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>输入框默认内容</td><td><code>string</code></td><td>-</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>控件大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>maxlength</td><td>最大长度</td><td><code>number</code></td><td>-</td></tr><tr><td>showCount</td><td>是否展示字数，支持自定义格式化</td><td><code>boolean | { formatter: (info) =&gt; VNode | string }</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>可以点击清除图标删除内容，支持自定义清除图标</td><td><code>boolean | { clearIcon?: VNode; disabled?: boolean }</code></td><td><code>false</code></td></tr><tr><td>prefix</td><td>带有前缀图标的 input</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>suffix</td><td>带有后缀图标的 input</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>readonly</td><td>是否只读</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>id</td><td>输入框的 id</td><td><code>string</code></td><td>-</td></tr><tr><td>rootClassName</td><td>根节点的 className</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="inputpassword-props" tabindex="-1">InputPassword Props</h3><p>继承 Input 所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>visibilityToggle</td><td>是否显示切换按钮或者控制密码显隐</td><td><code>boolean | { visible?: boolean; onVisibleChange?: (visible: boolean) =&gt; void }</code></td><td><code>true</code></td></tr><tr><td>iconRender</td><td>自定义切换按钮</td><td><code>(visible: boolean) =&gt; VNode | string</code></td><td>-</td></tr><tr><td>action</td><td>切换按钮的触发方式</td><td><code>&#39;click&#39; | &#39;hover&#39;</code></td><td><code>&#39;click&#39;</code></td></tr></tbody></table><h3 id="textarea-props" tabindex="-1">TextArea Props</h3><p>继承 Input 所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>rows</td><td>输入框行数</td><td><code>number</code></td><td><code>4</code></td></tr><tr><td>autoSize</td><td>自适应内容高度，可设置为 true | false 或对象</td><td><code>boolean | { minRows?: number; maxRows?: number }</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>可以点击清除图标删除内容</td><td><code>boolean | { clearIcon?: VNode; disabled?: boolean }</code></td><td><code>false</code></td></tr><tr><td>showCount</td><td>是否展示字数，支持自定义格式化</td><td><code>boolean | { formatter: (info) =&gt; VNode | string }</code></td><td><code>false</code></td></tr></tbody></table><h3 id="inputsearch-props" tabindex="-1">InputSearch Props</h3><p>继承 Input 所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>enterButton</td><td>是否有确认按钮，可设为按钮文字</td><td><code>boolean | string</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>搜索 loading</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>searchIcon</td><td>自定义搜索图标</td><td><code>string | VNode</code></td><td>-</td></tr></tbody></table><h3 id="input-events" tabindex="-1">Input Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>输入框内容变化时的回调</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>change</td><td>输入框内容变化时的回调</td><td><code>(event: Event) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>pressEnter</td><td>按下回车的回调</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清除按钮时的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="input-methods" tabindex="-1">Input Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td><code>(options?: { preventScroll?: boolean; cursor?: &#39;start&#39; | &#39;end&#39; | &#39;all&#39; }) =&gt; void</code></td></tr><tr><td>blur</td><td>移除焦点</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="inputsearch-events" tabindex="-1">InputSearch Events</h3><p>继承 Input 所有事件，额外支持：</p><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>search</td><td>点击搜索图标、清除图标，或按下回车键时的回调</td><td><code>(value: string, event: Event, info: { source: &#39;input&#39; | &#39;clear&#39; }) =&gt; void</code></td></tr></tbody></table>',19))])}}};export{M as default};
