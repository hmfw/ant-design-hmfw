import{I as m,T as b,a as I,b as y}from"./Input-mleFEqbT.js";import{n as g,z as f,j as x,m as e,J as o,D as s,g as n,Q as v,l as S,I as w,i as N,_ as E,G as T,k as A}from"./index-BIkAb7lZ.js";import{S as C}from"./Space-CLLuvOfj.js";import"./cls-S9IiI6wd.js";import"./icons-DLCoPw-s.js";const P={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},V=g({__name:"InputAddon",setup(h){const a=s(""),u=s(""),r=s("");return(t,d)=>(f(),x("div",P,[e(o(m),{value:a.value,"onUpdate:value":d[0]||(d[0]=p=>a.value=p),placeholder:"请输入用户名",prefix:"👤"},null,8,["value"]),e(o(m),{value:u.value,"onUpdate:value":d[1]||(d[1]=p=>u.value=p),placeholder:"请输入金额",prefix:"¥",suffix:"元"},null,8,["value"]),e(o(m),{value:r.value,"onUpdate:value":d[2]||(d[2]=p=>r.value=p),placeholder:"支持清除","allow-clear":""},null,8,["value"])]))}}),k=`<template>
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
`,U={class:"input-advanced-demo"},W={key:0,style:{padding:"8px",background:"#f0f9ff","border-radius":"4px"}},$=g({__name:"InputAdvanced",setup(h){const a=s(""),u=s(""),r=s(""),t=s(""),d=s(0),p=c=>{!c.ctrlKey&&!c.metaKey&&!c.shiftKey&&d.value++};return(c,l)=>(f(),x("div",U,[l[6]||(l[6]=n("h4",null,"细粒度样式控制（classNames / styles）",-1)),e(o(C),{direction:"vertical",style:{width:"100%","max-width":"400px"}},{default:v(()=>[e(o(m),{value:a.value,"onUpdate:value":l[0]||(l[0]=i=>a.value=i),placeholder:"自定义样式的 Input",classNames:{affixWrapper:"custom-wrapper",input:"custom-input",prefix:"custom-prefix",suffix:"custom-suffix"},styles:{affixWrapper:{border:"2px solid #1890ff",borderRadius:"8px"},input:{color:"#1890ff",fontWeight:"bold"}},prefix:"🔍",suffix:"✨"},null,8,["value"]),e(o(m),{value:u.value,"onUpdate:value":l[1]||(l[1]=i=>u.value=i),placeholder:"带字符计数",maxLength:50,showCount:!0,classNames:{count:"custom-count"},styles:{count:{color:"#52c41a",fontWeight:"bold"}}},null,8,["value"])]),_:1}),l[7]||(l[7]=n("h4",{style:{"margin-top":"32px"}},"TextArea 按键事件",-1)),e(o(C),{direction:"vertical",style:{width:"100%","max-width":"400px"}},{default:v(()=>[e(o(b),{value:r.value,"onUpdate:value":l[2]||(l[2]=i=>r.value=i),placeholder:"按 Enter 键触发事件（可以用 Ctrl+Enter 换行）",rows:4,onPressEnter:p},null,8,["value"]),d.value>0?(f(),x("div",W,[n("span",null,[l[4]||(l[4]=S("Enter 键被按下了 ",-1)),n("strong",null,w(d.value),1),l[5]||(l[5]=S(" 次",-1))])])):N("",!0)]),_:1}),l[8]||(l[8]=n("h4",{style:{"margin-top":"32px"}},"TextArea 自定义样式",-1)),e(o(b),{value:t.value,"onUpdate:value":l[3]||(l[3]=i=>t.value=i),placeholder:"带样式的 TextArea",rows:3,showCount:!0,maxLength:200,classNames:{textarea:"custom-textarea",count:"custom-count"},styles:{textarea:{borderColor:"#722ed1",borderRadius:"8px"},count:{color:"#722ed1",fontSize:"14px"}}},null,8,["value"])]))}}),R=E($,[["__scopeId","data-v-39b5df4e"]]),z=`<template>
  <div class="input-advanced-demo">
    <h4>细粒度样式控制（classNames / styles）</h4>
    <Space direction="vertical" style="width: 100%; max-width: 400px">
      <Input
        v-model:value="value1"
        placeholder="自定义样式的 Input"
        :classNames="{
          affixWrapper: 'custom-wrapper',
          input: 'custom-input',
          prefix: 'custom-prefix',
          suffix: 'custom-suffix',
        }"
        :styles="{
          affixWrapper: { border: '2px solid #1890ff', borderRadius: '8px' },
          input: { color: '#1890ff', fontWeight: 'bold' },
        }"
        prefix="🔍"
        suffix="✨"
      />

      <Input
        v-model:value="value2"
        placeholder="带字符计数"
        :maxLength="50"
        :showCount="true"
        :classNames="{ count: 'custom-count' }"
        :styles="{ count: { color: '#52c41a', fontWeight: 'bold' } }"
      />
    </Space>

    <h4 style="margin-top: 32px">TextArea 按键事件</h4>
    <Space direction="vertical" style="width: 100%; max-width: 400px">
      <TextArea
        v-model:value="textareaValue"
        placeholder="按 Enter 键触发事件（可以用 Ctrl+Enter 换行）"
        :rows="4"
        @pressEnter="handlePressEnter"
      />
      <div v-if="pressEnterCount > 0" style="padding: 8px; background: #f0f9ff; border-radius: 4px">
        <span>Enter 键被按下了 <strong>{{ pressEnterCount }}</strong> 次</span>
      </div>
    </Space>

    <h4 style="margin-top: 32px">TextArea 自定义样式</h4>
    <TextArea
      v-model:value="styledTextareaValue"
      placeholder="带样式的 TextArea"
      :rows="3"
      :showCount="true"
      :maxLength="200"
      :classNames="{ textarea: 'custom-textarea', count: 'custom-count' }"
      :styles="{
        textarea: { borderColor: '#722ed1', borderRadius: '8px' },
        count: { color: '#722ed1', fontSize: '14px' },
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input, TextArea } from '../../../components/input'
import { Space } from '../../../components/space'

const value1 = ref('')
const value2 = ref('')
const textareaValue = ref('')
const styledTextareaValue = ref('')
const pressEnterCount = ref(0)

const handlePressEnter = (e: KeyboardEvent) => {
  if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
    pressEnterCount.value++
  }
}
<\/script>

<style scoped>
.input-advanced-demo h4 {
  margin-bottom: 16px;
  color: #262626;
}

.input-advanced-demo :deep(.custom-wrapper) {
  transition: all 0.3s;
}

.input-advanced-demo :deep(.custom-wrapper:hover) {
  box-shadow: 0 0 8px rgba(24, 144, 255, 0.3);
}

.input-advanced-demo :deep(.custom-input::placeholder) {
  color: #91caff;
}

.input-advanced-demo :deep(.custom-prefix),
.input-advanced-demo :deep(.custom-suffix) {
  font-size: 16px;
}

.input-advanced-demo :deep(.custom-count) {
  font-family: 'Monaco', 'Courier New', monospace;
}

.input-advanced-demo :deep(.custom-textarea) {
  font-family: 'Monaco', 'Courier New', monospace;
  line-height: 1.8;
}
</style>
`,B={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},K=g({__name:"InputBasic",setup(h){const a=s("");return(u,r)=>(f(),x("div",B,[e(o(m),{value:a.value,"onUpdate:value":r[0]||(r[0]=t=>a.value=t),placeholder:"请输入内容"},null,8,["value"]),e(o(m),{value:a.value,"onUpdate:value":r[1]||(r[1]=t=>a.value=t),placeholder:"禁用状态",disabled:""},null,8,["value"]),e(o(m),{value:a.value,"onUpdate:value":r[2]||(r[2]=t=>a.value=t),placeholder:"只读状态",readonly:""},null,8,["value"]),n("p",null,"当前值："+w(a.value),1)]))}}),L=`<template>
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
`,_={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},D=g({__name:"InputPassword",setup(h){const a=s(""),u=s("");return(r,t)=>(f(),x("div",_,[e(o(I),{value:a.value,"onUpdate:value":t[0]||(t[0]=d=>a.value=d),placeholder:"请输入密码"},null,8,["value"]),e(o(I),{value:u.value,"onUpdate:value":t[1]||(t[1]=d=>u.value=d),placeholder:"不可切换可见性","visibility-toggle":!1},null,8,["value"]),n("p",null,"密码："+w(a.value),1)]))}}),M=`<template>
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
`,F={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},j=g({__name:"InputSearch",setup(h){const a=s(""),u=s(""),r=s(""),t=s(!1),d=c=>{console.log("搜索：",c)},p=c=>{t.value=!0,setTimeout(()=>{t.value=!1,console.log("搜索完成：",c)},1500)};return(c,l)=>(f(),x("div",F,[e(o(y),{value:a.value,"onUpdate:value":l[0]||(l[0]=i=>a.value=i),placeholder:"请输入搜索内容",onSearch:d},null,8,["value"]),e(o(y),{value:u.value,"onUpdate:value":l[1]||(l[1]=i=>u.value=i),placeholder:"带按钮的搜索框","enter-button":"",onSearch:d},null,8,["value"]),e(o(y),{value:r.value,"onUpdate:value":l[2]||(l[2]=i=>r.value=i),placeholder:"加载中","enter-button":"",loading:t.value,onSearch:p},null,8,["value","loading"])]))}}),G=`<template>
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
`,J={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},Q=g({__name:"InputTextArea",setup(h){const a=s(""),u=s(""),r=s("");return(t,d)=>(f(),x("div",J,[e(o(b),{value:a.value,"onUpdate:value":d[0]||(d[0]=p=>a.value=p),placeholder:"固定行数",rows:4},null,8,["value"]),e(o(b),{value:u.value,"onUpdate:value":d[1]||(d[1]=p=>u.value=p),placeholder:"自适应高度","auto-size":{minRows:2,maxRows:6}},null,8,["value"]),e(o(b),{value:r.value,"onUpdate:value":d[2]||(d[2]=p=>r.value=p),placeholder:"显示字数",maxlength:100,"show-count":!0},null,8,["value"])]))}}),q=`<template>
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
`,H={class:"markdown-body"},et={__name:"input",setup(h,{expose:a}){return a({frontmatter:{}}),(r,t)=>{const d=T("DemoBlock");return f(),x("div",H,[t[0]||(t[0]=n("h1",{id:"input-",tabindex:"-1"},"Input 输入框",-1)),t[1]||(t[1]=n("p",null,"通过鼠标或键盘输入内容，是最基础的表单域的包装。",-1)),t[2]||(t[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"需要用户输入表单域内容时。"),n("li",null,"提供组合型输入框，带搜索的输入框，还可以进行大小选择。")],-1)),t[4]||(t[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=n("p",null,"基本使用。",-1)),e(d,{title:"基础用法",source:o(L)},{default:v(()=>[e(K)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"-3",tabindex:"-1"},"前缀/后缀",-1)),t[8]||(t[8]=n("p",null,"在输入框上添加前缀或后缀图标。",-1)),e(d,{title:"前缀/后缀",source:o(k)},{default:v(()=>[e(V)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"-4",tabindex:"-1"},"密码框",-1)),t[10]||(t[10]=n("p",null,"密码输入框，可切换密码可见性。",-1)),e(d,{title:"密码框",source:o(M)},{default:v(()=>[e(D)]),_:1},8,["source"]),t[11]||(t[11]=n("h3",{id:"-5",tabindex:"-1"},"文本域",-1)),t[12]||(t[12]=n("p",null,"用于多行输入。",-1)),e(d,{title:"文本域",source:o(q)},{default:v(()=>[e(Q)]),_:1},8,["source"]),t[13]||(t[13]=n("h3",{id:"-6",tabindex:"-1"},"搜索框",-1)),t[14]||(t[14]=n("p",null,"带有搜索按钮的输入框。",-1)),e(d,{title:"搜索框",source:o(G)},{default:v(()=>[e(j)]),_:1},8,["source"]),t[15]||(t[15]=n("h3",{id:"-7",tabindex:"-1"},"高级功能",-1)),t[16]||(t[16]=n("p",null,"展示细粒度样式控制（classNames / styles）和 TextArea 的 pressEnter 事件。",-1)),e(d,{title:"高级功能",source:o(z)},{default:v(()=>[e(R)]),_:1},8,["source"]),t[17]||(t[17]=A('<h2 id="api" tabindex="-1">API</h2><h3 id="input-props" tabindex="-1">Input Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>输入框内容</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>输入框默认内容</td><td><code>string</code></td><td>-</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>控件大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>maxlength</td><td>最大长度</td><td><code>number</code></td><td>-</td></tr><tr><td>showCount</td><td>是否展示字数，支持自定义格式化</td><td><code>boolean | { formatter: (info) =&gt; VNode | string }</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>可以点击清除图标删除内容，支持自定义清除图标</td><td><code>boolean | { clearIcon?: VNode; disabled?: boolean }</code></td><td><code>false</code></td></tr><tr><td>prefix</td><td>带有前缀图标的 input</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>suffix</td><td>带有后缀图标的 input</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>readonly</td><td>是否只读</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>id</td><td>输入框的 id</td><td><code>string</code></td><td>-</td></tr><tr><td>rootClassName</td><td>根节点的 className</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>细粒度样式类名</td><td><code>{ affixWrapper?: string; prefix?: string; suffix?: string; input?: string; count?: string }</code></td><td>-</td></tr><tr><td>styles</td><td>细粒度样式对象</td><td><code>{ affixWrapper?: CSSProperties; prefix?: CSSProperties; suffix?: CSSProperties; input?: CSSProperties; count?: CSSProperties }</code></td><td>-</td></tr></tbody></table><h3 id="inputpassword-props" tabindex="-1">InputPassword Props</h3><p>继承 Input 所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>visibilityToggle</td><td>是否显示切换按钮或者控制密码显隐</td><td><code>boolean | { visible?: boolean; onVisibleChange?: (visible: boolean) =&gt; void }</code></td><td><code>true</code></td></tr><tr><td>iconRender</td><td>自定义切换按钮</td><td><code>(visible: boolean) =&gt; VNode | string</code></td><td>-</td></tr><tr><td>action</td><td>切换按钮的触发方式</td><td><code>&#39;click&#39; | &#39;hover&#39;</code></td><td><code>&#39;click&#39;</code></td></tr></tbody></table><h3 id="textarea-props" tabindex="-1">TextArea Props</h3><p>继承 Input 所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>rows</td><td>输入框行数</td><td><code>number</code></td><td><code>4</code></td></tr><tr><td>autoSize</td><td>自适应内容高度，可设置为 true | false 或对象</td><td><code>boolean | { minRows?: number; maxRows?: number }</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>可以点击清除图标删除内容</td><td><code>boolean | { clearIcon?: VNode; disabled?: boolean }</code></td><td><code>false</code></td></tr><tr><td>showCount</td><td>是否展示字数，支持自定义格式化</td><td><code>boolean | { formatter: (info) =&gt; VNode | string }</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>细粒度样式类名</td><td><code>{ textarea?: string; count?: string }</code></td><td>-</td></tr><tr><td>styles</td><td>细粒度样式对象</td><td><code>{ textarea?: CSSProperties; count?: CSSProperties }</code></td><td>-</td></tr></tbody></table><h3 id="inputsearch-props" tabindex="-1">InputSearch Props</h3><p>继承 Input 所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>enterButton</td><td>是否有确认按钮，可设为按钮文字</td><td><code>boolean | string</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>搜索 loading</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>searchIcon</td><td>自定义搜索图标</td><td><code>string | VNode</code></td><td>-</td></tr></tbody></table><h3 id="input-events" tabindex="-1">Input Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>输入框内容变化时的回调</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>change</td><td>输入框内容变化时的回调</td><td><code>(event: Event) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>pressEnter</td><td>按下回车的回调</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清除按钮时的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="input-methods" tabindex="-1">Input Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td><code>(options?: { preventScroll?: boolean; cursor?: &#39;start&#39; | &#39;end&#39; | &#39;all&#39; }) =&gt; void</code></td></tr><tr><td>blur</td><td>移除焦点</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="inputsearch-events" tabindex="-1">InputSearch Events</h3><p>继承 Input 所有事件，额外支持：</p><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>search</td><td>点击搜索图标、清除图标，或按下回车键时的回调</td><td><code>(value: string, event: Event, info: { source: &#39;input&#39; | &#39;clear&#39; }) =&gt; void</code></td></tr></tbody></table>',19))])}}};export{et as default};
