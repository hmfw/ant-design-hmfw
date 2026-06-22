import{I as i,T as h,a as q,b}from"./Input-DUyE3heX.js";import{o as k,A as v,k as x,n as a,K as s,E as d,h as e,R as f,m as y,J as w,j as N,_ as C,H as A,l as E}from"./index-X2tFbSxS.js";import{S}from"./Space-Bktr5yjC.js";import{C as T}from"./CloseCircleOutlined-Dp8uLZGr.js";import{S as I}from"./SearchOutlined-kq83buNV.js";import{U as P}from"./UserOutlined-jH9nhEg4.js";import"./cls-S9IiI6wd.js";import"./CloseOutlined-CLskzqDI.js";import"./EyeOutlined-BXDLLdEz.js";import"./LoadingOutlined-BeJ6caQM.js";import"./Icon-CTmWlmQC.js";const U={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},W=k({__name:"InputAddon",setup(g){const l=d(""),u=d(""),r=d("");return(t,o)=>(v(),x("div",U,[a(s(i),{value:l.value,"onUpdate:value":o[0]||(o[0]=c=>l.value=c),placeholder:"请输入用户名",prefix:"👤"},null,8,["value"]),a(s(i),{value:u.value,"onUpdate:value":o[1]||(o[1]=c=>u.value=c),placeholder:"请输入金额",prefix:"¥",suffix:"元"},null,8,["value"]),a(s(i),{value:r.value,"onUpdate:value":o[2]||(o[2]=c=>r.value=c),placeholder:"支持清除","allow-clear":""},null,8,["value"])]))}}),V=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
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
`,z={class:"input-advanced-demo"},B={key:0,style:{padding:"8px",background:"#f0f9ff","border-radius":"4px"}},O=k({__name:"InputAdvanced",setup(g){const l=d(""),u=d(""),r=d(""),t=d(""),o=d(0),c=m=>{!m.ctrlKey&&!m.metaKey&&!m.shiftKey&&o.value++};return(m,n)=>(v(),x("div",z,[n[6]||(n[6]=e("h4",null,"细粒度样式控制（classNames / styles）",-1)),a(s(S),{direction:"vertical",style:{width:"100%","max-width":"400px"}},{default:f(()=>[a(s(i),{value:l.value,"onUpdate:value":n[0]||(n[0]=p=>l.value=p),placeholder:"自定义样式的 Input","class-names":{affixWrapper:"custom-wrapper",input:"custom-input",prefix:"custom-prefix",suffix:"custom-suffix"},styles:{affixWrapper:{border:"2px solid #1890ff",borderRadius:"8px"},input:{color:"#1890ff",fontWeight:"bold"}},prefix:"🔍",suffix:"✨"},null,8,["value"]),a(s(i),{value:u.value,"onUpdate:value":n[1]||(n[1]=p=>u.value=p),placeholder:"带字符计数","max-length":50,"show-count":!0,"class-names":{count:"custom-count"},styles:{count:{color:"#52c41a",fontWeight:"bold"}}},null,8,["value"])]),_:1}),n[7]||(n[7]=e("h4",{style:{"margin-top":"32px"}},"TextArea 按键事件",-1)),a(s(S),{direction:"vertical",style:{width:"100%","max-width":"400px"}},{default:f(()=>[a(s(h),{value:r.value,"onUpdate:value":n[2]||(n[2]=p=>r.value=p),placeholder:"按 Enter 键触发事件（可以用 Ctrl+Enter 换行）",rows:4,onPressEnter:c},null,8,["value"]),o.value>0?(v(),x("div",B,[e("span",null,[n[4]||(n[4]=y("Enter 键被按下了 ",-1)),e("strong",null,w(o.value),1),n[5]||(n[5]=y(" 次",-1))])])):N("",!0)]),_:1}),n[8]||(n[8]=e("h4",{style:{"margin-top":"32px"}},"TextArea 自定义样式",-1)),a(s(h),{value:t.value,"onUpdate:value":n[3]||(n[3]=p=>t.value=p),placeholder:"带样式的 TextArea",rows:3,"show-count":!0,"max-length":200,"class-names":{textarea:"custom-textarea",count:"custom-count"},styles:{textarea:{borderColor:"#722ed1",borderRadius:"8px"},count:{color:"#722ed1",fontSize:"14px"}}},null,8,["value"])]))}}),R=C(O,[["__scopeId","data-v-ce729177"]]),$=`<template>
  <div class="input-advanced-demo">
    <h4>细粒度样式控制（classNames / styles）</h4>
    <Space direction="vertical" style="width: 100%; max-width: 400px">
      <Input
        v-model:value="value1"
        placeholder="自定义样式的 Input"
        :class-names="{
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
        :max-length="50"
        :show-count="true"
        :class-names="{ count: 'custom-count' }"
        :styles="{ count: { color: '#52c41a', fontWeight: 'bold' } }"
      />
    </Space>

    <h4 style="margin-top: 32px">TextArea 按键事件</h4>
    <Space direction="vertical" style="width: 100%; max-width: 400px">
      <TextArea
        v-model:value="textareaValue"
        placeholder="按 Enter 键触发事件（可以用 Ctrl+Enter 换行）"
        :rows="4"
        @press-enter="handlePressEnter"
      />
      <div v-if="pressEnterCount > 0" style="padding: 8px; background: #f0f9ff; border-radius: 4px">
        <span
          >Enter 键被按下了 <strong>{{ pressEnterCount }}</strong> 次</span
        >
      </div>
    </Space>

    <h4 style="margin-top: 32px">TextArea 自定义样式</h4>
    <TextArea
      v-model:value="styledTextareaValue"
      placeholder="带样式的 TextArea"
      :rows="3"
      :show-count="true"
      :max-length="200"
      :class-names="{ textarea: 'custom-textarea', count: 'custom-count' }"
      :styles="{
        textarea: { borderColor: '#722ed1', borderRadius: '8px' },
        count: { color: '#722ed1', fontSize: '14px' },
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input, TextArea } from 'ant-design-hmfw'
import { Space } from 'ant-design-hmfw'

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
`,D={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},K=k({__name:"InputBasic",setup(g){const l=d("");return(u,r)=>(v(),x("div",D,[a(s(i),{value:l.value,"onUpdate:value":r[0]||(r[0]=t=>l.value=t),placeholder:"请输入内容"},null,8,["value"]),a(s(i),{value:l.value,"onUpdate:value":r[1]||(r[1]=t=>l.value=t),placeholder:"禁用状态",disabled:""},null,8,["value"]),a(s(i),{value:l.value,"onUpdate:value":r[2]||(r[2]=t=>l.value=t),placeholder:"只读状态",readonly:""},null,8,["value"]),e("p",null,"当前值："+w(l.value),1)]))}}),F=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
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
`,M={style:{display:"flex","flex-direction":"column",gap:"20px"}},L=k({__name:"InputClassNames",setup(g){const l=d(""),u=d(""),r=d(""),t=d(""),o=d(""),c=d("");return(m,n)=>(v(),x("div",M,[e("div",null,[n[6]||(n[6]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义前缀和后缀图标样式：",-1)),a(s(i),{value:l.value,"onUpdate:value":n[0]||(n[0]=p=>l.value=p),placeholder:"搜索内容",prefix:s(I),suffix:s(T),"class-names":{prefix:"custom-prefix",suffix:"custom-suffix"},style:{width:"300px"}},null,8,["value","prefix","suffix"])]),e("div",null,[n[7]||(n[7]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义输入框样式：",-1)),a(s(i),{value:u.value,"onUpdate:value":n[1]||(n[1]=p=>u.value=p),placeholder:"特殊样式输入框","class-names":{input:"custom-input"},style:{width:"300px"}},null,8,["value"])]),e("div",null,[n[8]||(n[8]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义外层容器样式：",-1)),a(s(i),{value:r.value,"onUpdate:value":n[2]||(n[2]=p=>r.value=p),placeholder:"渐变边框",prefix:s(P),"class-names":{affixWrapper:"custom-wrapper"},style:{width:"300px"}},null,8,["value","prefix"])]),e("div",null,[n[9]||(n[9]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义字数统计样式：",-1)),a(s(i),{value:t.value,"onUpdate:value":n[3]||(n[3]=p=>t.value=p),placeholder:"最多 50 字","max-length":50,"show-count":"","class-names":{count:"custom-count"},style:{width:"300px"}},null,8,["value"])]),e("div",null,[n[10]||(n[10]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式（styles）：",-1)),a(s(i),{value:o.value,"onUpdate:value":n[4]||(n[4]=p=>o.value=p),placeholder:"内联样式控制",prefix:s(I),styles:{affixWrapper:{borderColor:"#722ed1",borderRadius:"8px"},prefix:{color:"#722ed1",fontSize:"16px"},input:{fontWeight:"500"}},style:{width:"300px"}},null,8,["value","prefix"])]),e("div",null,[n[11]||(n[11]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"TextArea 自定义样式：",-1)),a(s(h),{value:c.value,"onUpdate:value":n[5]||(n[5]=p=>c.value=p),placeholder:"多行文本输入",rows:4,"max-length":200,"show-count":"","class-names":{textarea:"custom-textarea",count:"custom-textarea-count"},style:{width:"400px"}},null,8,["value"])])]))}}),j=C(L,[["__scopeId","data-v-689dde6e"]]),H=`<template>
  <div style="display: flex; flex-direction: column; gap: 20px">
    <!-- 自定义前缀/后缀样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义前缀和后缀图标样式：</div>
      <Input
        v-model:value="value1"
        placeholder="搜索内容"
        :prefix="SearchOutlined"
        :suffix="CloseCircleOutlined"
        :class-names="{
          prefix: 'custom-prefix',
          suffix: 'custom-suffix',
        }"
        style="width: 300px"
      />
    </div>

    <!-- 自定义输入框本身 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义输入框样式：</div>
      <Input
        v-model:value="value2"
        placeholder="特殊样式输入框"
        :class-names="{ input: 'custom-input' }"
        style="width: 300px"
      />
    </div>

    <!-- 自定义外层容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义外层容器样式：</div>
      <Input
        v-model:value="value3"
        placeholder="渐变边框"
        :prefix="UserOutlined"
        :class-names="{ affixWrapper: 'custom-wrapper' }"
        style="width: 300px"
      />
    </div>

    <!-- 自定义字数统计 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义字数统计样式：</div>
      <Input
        v-model:value="value4"
        placeholder="最多 50 字"
        :max-length="50"
        show-count
        :class-names="{ count: 'custom-count' }"
        style="width: 300px"
      />
    </div>

    <!-- 组合使用 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式（styles）：</div>
      <Input
        v-model:value="value5"
        placeholder="内联样式控制"
        :prefix="SearchOutlined"
        :styles="{
          affixWrapper: { borderColor: '#722ed1', borderRadius: '8px' },
          prefix: { color: '#722ed1', fontSize: '16px' },
          input: { fontWeight: '500' },
        }"
        style="width: 300px"
      />
    </div>

    <!-- TextArea 自定义 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">TextArea 自定义样式：</div>
      <TextArea
        v-model:value="textarea"
        placeholder="多行文本输入"
        :rows="4"
        :max-length="200"
        show-count
        :class-names="{
          textarea: 'custom-textarea',
          count: 'custom-textarea-count',
        }"
        style="width: 400px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input, TextArea, SearchOutlined, UserOutlined, CloseCircleOutlined } from 'ant-design-hmfw'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const textarea = ref('')
<\/script>

<style scoped>
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
  color: #ff4d4f;
  cursor: pointer;
  transition: all 0.3s;
}

:deep(.custom-suffix:hover) {
  color: #ff7875;
}

:deep(.custom-input) {
  background: linear-gradient(to right, #ffffff, #f5f5ff);
  font-weight: 500;
  color: #333;
}

:deep(.custom-wrapper) {
  border: 2px solid transparent;
  border-radius: 8px;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  transition: all 0.3s;
}

:deep(.custom-wrapper:hover) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

:deep(.custom-count) {
  color: #ff4d4f;
  font-weight: bold;
  font-size: 13px;
}

:deep(.custom-textarea) {
  background: #f0f5ff;
  font-family: 'SF Mono', 'Monaco', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.8;
  border-radius: 8px;
}

:deep(.custom-textarea-count) {
  font-size: 12px;
  color: #8c8c8c;
  font-style: italic;
}
</style>
`,J={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},G=k({__name:"InputPassword",setup(g){const l=d(""),u=d("");return(r,t)=>(v(),x("div",J,[a(s(q),{value:l.value,"onUpdate:value":t[0]||(t[0]=o=>l.value=o),placeholder:"请输入密码"},null,8,["value"]),a(s(q),{value:u.value,"onUpdate:value":t[1]||(t[1]=o=>u.value=o),placeholder:"不可切换可见性","visibility-toggle":!1},null,8,["value"]),e("p",null,"密码："+w(l.value),1)]))}}),Q=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <InputPassword v-model:value="password" placeholder="请输入密码" />
    <InputPassword v-model:value="password2" placeholder="不可切换可见性" :visibility-toggle="false" />
    <p>密码：{{ password }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputPassword } from 'ant-design-hmfw'

const password = ref('')
const password2 = ref('')
<\/script>
`,X={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},Y=k({__name:"InputSearch",setup(g){const l=d(""),u=d(""),r=d(""),t=d(!1),o=m=>{console.log("搜索：",m)},c=m=>{t.value=!0,setTimeout(()=>{t.value=!1,console.log("搜索完成：",m)},1500)};return(m,n)=>(v(),x("div",X,[a(s(b),{value:l.value,"onUpdate:value":n[0]||(n[0]=p=>l.value=p),placeholder:"请输入搜索内容",onSearch:o},null,8,["value"]),a(s(b),{value:u.value,"onUpdate:value":n[1]||(n[1]=p=>u.value=p),placeholder:"带按钮的搜索框","enter-button":"",onSearch:o},null,8,["value"]),a(s(b),{value:r.value,"onUpdate:value":n[2]||(n[2]=p=>r.value=p),placeholder:"加载中","enter-button":"",loading:t.value,onSearch:c},null,8,["value","loading"])]))}}),Z=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <InputSearch v-model:value="keyword" placeholder="请输入搜索内容" @search="handleSearch" />
    <InputSearch v-model:value="keyword2" placeholder="带按钮的搜索框" enter-button @search="handleSearch" />
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
`,_={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},tt=k({__name:"InputTextArea",setup(g){const l=d(""),u=d(""),r=d("");return(t,o)=>(v(),x("div",_,[a(s(h),{value:l.value,"onUpdate:value":o[0]||(o[0]=c=>l.value=c),placeholder:"固定行数",rows:4},null,8,["value"]),a(s(h),{value:u.value,"onUpdate:value":o[1]||(o[1]=c=>u.value=c),placeholder:"自适应高度","auto-size":{minRows:2,maxRows:6}},null,8,["value"]),a(s(h),{value:r.value,"onUpdate:value":o[2]||(o[2]=c=>r.value=c),placeholder:"显示字数",maxlength:100,"show-count":!0},null,8,["value"])]))}}),nt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <TextArea v-model:value="text1" placeholder="固定行数" :rows="4" />
    <TextArea v-model:value="text2" placeholder="自适应高度" :auto-size="{ minRows: 2, maxRows: 6 }" />
    <TextArea v-model:value="text3" placeholder="显示字数" :maxlength="100" :show-count="true" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextArea } from 'ant-design-hmfw'

const text1 = ref('')
const text2 = ref('')
const text3 = ref('')
<\/script>
`,et={class:"markdown-body"},ft={__name:"input",setup(g,{expose:l}){return l({frontmatter:{}}),(r,t)=>{const o=A("DemoBlock");return v(),x("div",et,[t[0]||(t[0]=e("h1",{id:"input-输入框",tabindex:"-1"},"Input 输入框",-1)),t[1]||(t[1]=e("p",null,"通过鼠标或键盘输入内容，是最基础的表单域的包装。",-1)),t[2]||(t[2]=e("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"需要用户输入表单域内容时。"),e("li",null,"提供组合型输入框，带搜索的输入框，还可以进行大小选择。")],-1)),t[4]||(t[4]=e("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"基本使用。",-1)),a(o,{title:"基础用法",source:s(F)},{default:f(()=>[a(K)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"前缀后缀",tabindex:"-1"},"前缀/后缀",-1)),t[8]||(t[8]=e("p",null,"在输入框上添加前缀或后缀图标。",-1)),a(o,{title:"前缀/后缀",source:s(V)},{default:f(()=>[a(W)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"密码框",tabindex:"-1"},"密码框",-1)),t[10]||(t[10]=e("p",null,"密码输入框，可切换密码可见性。",-1)),a(o,{title:"密码框",source:s(Q)},{default:f(()=>[a(G)]),_:1},8,["source"]),t[11]||(t[11]=e("h3",{id:"文本域",tabindex:"-1"},"文本域",-1)),t[12]||(t[12]=e("p",null,"用于多行输入。",-1)),a(o,{title:"文本域",source:s(nt)},{default:f(()=>[a(tt)]),_:1},8,["source"]),t[13]||(t[13]=e("h3",{id:"搜索框",tabindex:"-1"},"搜索框",-1)),t[14]||(t[14]=e("p",null,"带有搜索按钮的输入框。",-1)),a(o,{title:"搜索框",source:s(Z)},{default:f(()=>[a(Y)]),_:1},8,["source"]),t[15]||(t[15]=e("h3",{id:"高级功能",tabindex:"-1"},"高级功能",-1)),t[16]||(t[16]=e("p",null,"展示细粒度样式控制（classNames / styles）和 TextArea 的 pressEnter 事件。",-1)),a(o,{title:"高级功能",source:s($)},{default:f(()=>[a(R)]),_:1},8,["source"]),t[17]||(t[17]=e("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[18]||(t[18]=e("p",null,[y("通过 "),e("code",null,"classNames"),y(" / "),e("code",null,"styles"),y(" 对前缀、后缀、输入框、字数统计等子元素做细粒度样式控制。")],-1)),a(o,{title:"语义化 className 与 style",source:s(H)},{default:f(()=>[a(j)]),_:1},8,["source"]),t[19]||(t[19]=E(`<h2 id="api" tabindex="-1">API</h2><h3 id="input-props" tabindex="-1">Input Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>输入框内容</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>输入框默认内容</td><td><code>string</code></td><td>-</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>控件大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>maxlength</td><td>最大长度</td><td><code>number</code></td><td>-</td></tr><tr><td>showCount</td><td>是否展示字数，支持自定义格式化</td><td><code>boolean | { formatter: (info) =&gt; VNode | string }</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>可以点击清除图标删除内容，支持自定义清除图标</td><td><code>boolean | { clearIcon?: VNode; disabled?: boolean }</code></td><td><code>false</code></td></tr><tr><td>prefix</td><td>带有前缀图标的 input</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>suffix</td><td>带有后缀图标的 input</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>readonly</td><td>是否只读</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>id</td><td>输入框的 id</td><td><code>string</code></td><td>-</td></tr><tr><td>rootClassName</td><td>根节点的 className</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>{ affixWrapper?: string; prefix?: string; suffix?: string; input?: string; count?: string }</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>{ affixWrapper?: CSSProperties; prefix?: CSSProperties; suffix?: CSSProperties; input?: CSSProperties; count?: CSSProperties }</code></td><td>-</td></tr></tbody></table><h3 id="inputpassword-props" tabindex="-1">InputPassword Props</h3><p>继承 Input 所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>visibilityToggle</td><td>是否显示切换按钮或者控制密码显隐</td><td><code>boolean | { visible?: boolean; onVisibleChange?: (visible: boolean) =&gt; void }</code></td><td><code>true</code></td></tr><tr><td>iconRender</td><td>自定义切换按钮</td><td><code>(visible: boolean) =&gt; VNode | string</code></td><td>-</td></tr><tr><td>action</td><td>切换按钮的触发方式</td><td><code>&#39;click&#39; | &#39;hover&#39;</code></td><td><code>&#39;click&#39;</code></td></tr></tbody></table><h3 id="textarea-props" tabindex="-1">TextArea Props</h3><p>继承 Input 所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>rows</td><td>输入框行数</td><td><code>number</code></td><td><code>4</code></td></tr><tr><td>autoSize</td><td>自适应内容高度，可设置为 true | false 或对象</td><td><code>boolean | { minRows?: number; maxRows?: number }</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>可以点击清除图标删除内容</td><td><code>boolean | { clearIcon?: VNode; disabled?: boolean }</code></td><td><code>false</code></td></tr><tr><td>showCount</td><td>是否展示字数，支持自定义格式化</td><td><code>boolean | { formatter: (info) =&gt; VNode | string }</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>{ textarea?: string; count?: string }</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>{ textarea?: CSSProperties; count?: CSSProperties }</code></td><td>-</td></tr></tbody></table><h3 id="inputsearch-props" tabindex="-1">InputSearch Props</h3><p>继承 Input 所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>enterButton</td><td>是否有确认按钮，可设为按钮文字</td><td><code>boolean | string</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>搜索 loading</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>searchIcon</td><td>自定义搜索图标</td><td><code>string | VNode</code></td><td>-</td></tr></tbody></table><h3 id="input-events" tabindex="-1">Input Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>输入框内容变化时的回调</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>change</td><td>输入框内容变化时的回调</td><td><code>(event: Event) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>pressEnter</td><td>按下回车的回调</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清除按钮时的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="input-methods" tabindex="-1">Input Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td><code>(options?: { preventScroll?: boolean; cursor?: &#39;start&#39; | &#39;end&#39; | &#39;all&#39; }) =&gt; void</code></td></tr><tr><td>blur</td><td>移除焦点</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="inputsearch-events" tabindex="-1">InputSearch Events</h3><p>继承 Input 所有事件，额外支持：</p><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>search</td><td>点击搜索图标、清除图标，或按下回车键时的回调</td><td><code>(value: string, event: Event, info: { source: &#39;input&#39; | &#39;clear&#39; }) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对输入框的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><p><strong>Input 类型</strong></p><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">InputClassNames</span> <span class="token punctuation">{</span>
  affixWrapper<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 带前后缀时的外层容器</span>
  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 前缀容器</span>
  suffix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 后缀容器</span>
  input<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 输入框元素本身</span>
  count<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 字数统计容器</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">InputStyles</span> <span class="token punctuation">{</span>
  affixWrapper<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 带前后缀时的外层容器</span>
  prefix<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 前缀容器</span>
  suffix<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 后缀容器</span>
  input<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 输入框元素本身</span>
  count<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 字数统计容器</span>
<span class="token punctuation">}</span>
</code></pre><p><strong>TextArea 类型</strong></p><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">TextAreaClassNames</span> <span class="token punctuation">{</span>
  textarea<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 文本域元素本身</span>
  count<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 字数统计容器</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TextAreaStyles</span> <span class="token punctuation">{</span>
  textarea<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 文本域元素</span>
  count<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 字数统计容器</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><p><strong>Input - 普通输入框（无前后缀）</strong></p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- ↑ classNames.input / styles.input 应用于此 --&gt;</span>
</code></pre><p><strong>Input - 带前缀/后缀的输入框</strong></p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input-affix-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.affixWrapper / styles.affixWrapper 应用于此 --&gt;</span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input-prefix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.prefix / styles.prefix 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>搜索图标<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.input / styles.input 应用于此 --&gt;</span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input-suffix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.suffix / styles.suffix 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>清除图标<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><p><strong>Input - 带字数统计的输入框</strong></p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input-affix-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input-show-count-suffix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.count / styles.count 应用于此 --&gt;</span>
    10 / 100
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><p><strong>TextArea - DOM 结构</strong></p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input hmfw-input-textarea<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.textarea / styles.textarea 应用于此 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 带字数统计时 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input-textarea-show-count<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input hmfw-input-textarea<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-input-show-count-suffix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.count / styles.count 应用于此 --&gt;</span>
    50 / 200
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义前缀/后缀样式 --&gt;
  &lt;Input
    v-model:value=&quot;value1&quot;
    placeholder=&quot;搜索&quot;
    :prefix=&quot;SearchOutlined&quot;
    :class-names=&quot;{
      prefix: &#39;my-prefix&#39;,
      suffix: &#39;my-suffix&#39;,
    }&quot;
  /&gt;

  &lt;!-- 自定义输入框本身样式 --&gt;
  &lt;Input v-model:value=&quot;value2&quot; :class-names=&quot;{ input: &#39;my-input&#39; }&quot; /&gt;

  &lt;!-- 自定义外层容器 --&gt;
  &lt;Input v-model:value=&quot;value3&quot; :prefix=&quot;UserOutlined&quot; :class-names=&quot;{ affixWrapper: &#39;my-wrapper&#39; }&quot; /&gt;

  &lt;!-- 自定义字数统计样式 --&gt;
  &lt;Input v-model:value=&quot;value4&quot; :max-length=&quot;100&quot; show-count :class-names=&quot;{ count: &#39;my-count&#39; }&quot; /&gt;

  &lt;!-- TextArea 自定义 --&gt;
  &lt;TextArea
    v-model:value=&quot;textarea&quot;
    :rows=&quot;4&quot;
    show-count
    :class-names=&quot;{
      textarea: &#39;my-textarea&#39;,
      count: &#39;my-textarea-count&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-prefix) {
  color: #1890ff;
  font-size: 16px;
}

:deep(.my-suffix) {
  color: #52c41a;
}

:deep(.my-input) {
  background: linear-gradient(to right, #ffffff, #f5f5f5);
  font-weight: 500;
}

:deep(.my-wrapper) {
  border: 2px solid #722ed1;
  border-radius: 8px;
}

:deep(.my-count) {
  color: #ff4d4f;
  font-weight: bold;
}

:deep(.my-textarea) {
  background: #f0f5ff;
  font-family: &#39;Courier New&#39;, monospace;
}

:deep(.my-textarea-count) {
  font-size: 12px;
  color: #8c8c8c;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制前缀/后缀 --&gt;
  &lt;Input
    v-model:value=&quot;value1&quot;
    :prefix=&quot;SearchOutlined&quot;
    :styles=&quot;{
      prefix: { color: &#39;#1890ff&#39;, fontSize: &#39;16px&#39; },
      suffix: { color: &#39;#52c41a&#39; },
    }&quot;
  /&gt;

  &lt;!-- 自定义输入框样式 --&gt;
  &lt;Input
    v-model:value=&quot;value2&quot;
    :styles=&quot;{
      input: {
        background: &#39;linear-gradient(to right, #ffffff, #f5f5f5)&#39;,
        fontWeight: &#39;500&#39;,
      },
    }&quot;
  /&gt;

  &lt;!-- 自定义外层容器 --&gt;
  &lt;Input
    v-model:value=&quot;value3&quot;
    :prefix=&quot;UserOutlined&quot;
    :styles=&quot;{
      affixWrapper: {
        border: &#39;2px solid #722ed1&#39;,
        borderRadius: &#39;8px&#39;,
      },
    }&quot;
  /&gt;

  &lt;!-- 自定义字数统计 --&gt;
  &lt;Input
    v-model:value=&quot;value4&quot;
    :max-length=&quot;100&quot;
    show-count
    :styles=&quot;{
      count: { color: &#39;#ff4d4f&#39;, fontWeight: &#39;bold&#39; },
    }&quot;
  /&gt;

  &lt;!-- TextArea 自定义 --&gt;
  &lt;TextArea
    v-model:value=&quot;textarea&quot;
    :rows=&quot;4&quot;
    show-count
    :styles=&quot;{
      textarea: {
        background: &#39;#f0f5ff&#39;,
        fontFamily: &#39;Courier New, monospace&#39;,
      },
      count: { fontSize: &#39;12px&#39;, color: &#39;#8c8c8c&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>affixWrapper</code> 仅在有 <code>prefix</code> / <code>suffix</code> / <code>allowClear</code> / <code>showCount</code> 时才会渲染</li><li><code>input</code> 样式会应用到实际的 <code>&lt;input&gt;</code> 元素，不受外层容器影响</li><li>TextArea 的 <code>textarea</code> 对应 <code>&lt;textarea&gt;</code> 元素，<code>count</code> 对应字数统计的 <code>&lt;span&gt;</code></li><li>当同时设置 <code>rootClassName</code> 和 <code>classNames.affixWrapper</code> 时，<code>rootClassName</code> 应用于最外层容器</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Input 组件使用以下设计 Token，可通过 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-text-placeholder</code></td><td>占位符文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告状态色</td><td><code>#faad14</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-bg-container-disabled</code></td><td>禁用容器背景色</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>小号圆角</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr></tbody></table>`,45))])}}};export{ft as default};
