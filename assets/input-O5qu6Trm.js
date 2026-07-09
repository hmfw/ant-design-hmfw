import{I as m,T as f,a as I,b as q}from"./Input-DUzAlUds.js";import{d as y,o as x,b as g,c as a,e,r as c,f as s,w as v,g as b,s as S,L as E,_ as N,h as U,i as P}from"./index-dV6GQSVR.js";import{S as C}from"./Space-_NefwuBe.js";import{C as W}from"./CloseCircleOutlined-CavMSfnz.js";import{S as A}from"./SearchOutlined-BKBlx0Sk.js";import{U as V}from"./UserOutlined-DXsWTX4a.js";import"./cls-S9IiI6wd.js";import"./CloseOutlined-BMlVguv3.js";import"./EyeOutlined-BNwT4t4u.js";import"./LoadingOutlined-CdSjzm5S.js";const z={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},$=y({__name:"InputAddon",setup(h){const l=c(""),r=c(""),u=c("");return(n,p)=>(x(),g("div",z,[a(e(m),{value:l.value,"onUpdate:value":p[0]||(p[0]=i=>l.value=i),placeholder:"请输入用户名",prefix:"👤"},null,8,["value"]),a(e(m),{value:r.value,"onUpdate:value":p[1]||(p[1]=i=>r.value=i),placeholder:"请输入金额",prefix:"¥",suffix:"元"},null,8,["value"]),a(e(m),{value:u.value,"onUpdate:value":p[2]||(p[2]=i=>u.value=i),placeholder:"支持清除","allow-clear":""},null,8,["value"])]))}}),B=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <Input v-model:value="value1" placeholder="请输入用户名" prefix="👤" />
    <Input v-model:value="value2" placeholder="请输入金额" prefix="¥" suffix="元" />
    <!-- addon-before/addon-after are deprecated, use Space.Compact instead -->
    <Input v-model:value="value4" placeholder="支持清除" allow-clear />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@hmfw/ant-design'

const value1 = ref('')
const value2 = ref('')
const value4 = ref('')
<\/script>
`,O={class:"input-advanced-demo"},R={key:0,style:{padding:"8px",background:"#f0f9ff","border-radius":"4px"}},F=y({__name:"InputAdvanced",setup(h){const l=c(""),r=c(""),u=c(""),n=c(""),p=c(0),i=k=>{!k.ctrlKey&&!k.metaKey&&!k.shiftKey&&p.value++};return(k,t)=>(x(),g("div",O,[t[6]||(t[6]=s("h4",null,"细粒度样式控制（classNames / styles）",-1)),a(e(C),{direction:"vertical",style:{width:"100%","max-width":"400px"}},{default:v(()=>[a(e(m),{value:l.value,"onUpdate:value":t[0]||(t[0]=o=>l.value=o),placeholder:"自定义样式的 Input","class-names":{affixWrapper:"custom-wrapper",input:"custom-input",prefix:"custom-prefix",suffix:"custom-suffix"},styles:{affixWrapper:{border:"2px solid #1890ff",borderRadius:"8px"},input:{color:"#1890ff",fontWeight:"bold"}},prefix:"🔍",suffix:"✨"},null,8,["value"]),a(e(m),{value:r.value,"onUpdate:value":t[1]||(t[1]=o=>r.value=o),placeholder:"带字符计数","max-length":50,"show-count":!0,"class-names":{count:"custom-count"},styles:{count:{color:"#52c41a",fontWeight:"bold"}}},null,8,["value"])]),_:1}),t[7]||(t[7]=s("h4",{style:{"margin-top":"32px"}},"TextArea 按键事件",-1)),a(e(C),{direction:"vertical",style:{width:"100%","max-width":"400px"}},{default:v(()=>[a(e(f),{value:u.value,"onUpdate:value":t[2]||(t[2]=o=>u.value=o),placeholder:"按 Enter 键触发事件（可以用 Ctrl+Enter 换行）",rows:4,onPressEnter:i},null,8,["value"]),p.value>0?(x(),g("div",R,[s("span",null,[t[4]||(t[4]=b("Enter 键被按下了 ",-1)),s("strong",null,S(p.value),1),t[5]||(t[5]=b(" 次",-1))])])):E("",!0)]),_:1}),t[8]||(t[8]=s("h4",{style:{"margin-top":"32px"}},"TextArea 自定义样式",-1)),a(e(f),{value:n.value,"onUpdate:value":t[3]||(t[3]=o=>n.value=o),placeholder:"带样式的 TextArea",rows:3,"show-count":!0,"max-length":200,"class-names":{textarea:"custom-textarea",count:"custom-count"},styles:{textarea:{borderColor:"#722ed1",borderRadius:"8px"},count:{color:"#722ed1",fontSize:"14px"}}},null,8,["value"])]))}}),L=N(F,[["__scopeId","data-v-d7a03139"]]),D=`<template>
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
import { Input, TextArea } from '@hmfw/ant-design'
import { Space } from '@hmfw/ant-design'

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
`,K={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},M=y({__name:"InputBasic",setup(h){const l=c("");return(r,u)=>(x(),g("div",K,[a(e(m),{value:l.value,"onUpdate:value":u[0]||(u[0]=n=>l.value=n),placeholder:"请输入内容"},null,8,["value"]),a(e(m),{value:l.value,"onUpdate:value":u[1]||(u[1]=n=>l.value=n),placeholder:"禁用状态",disabled:""},null,8,["value"]),a(e(m),{value:l.value,"onUpdate:value":u[2]||(u[2]=n=>l.value=n),placeholder:"只读状态",readonly:""},null,8,["value"]),s("p",null,"当前值："+S(l.value),1)]))}}),j=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <Input v-model:value="value" placeholder="请输入内容" />
    <Input v-model:value="value" placeholder="禁用状态" disabled />
    <Input v-model:value="value" placeholder="只读状态" readonly />
    <p>当前值：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@hmfw/ant-design'

const value = ref('')
<\/script>
`,G={style:{display:"flex","flex-direction":"column",gap:"20px"}},H=y({__name:"InputClassNames",setup(h){const l=c(""),r=c(""),u=c(""),n=c(""),p=c(""),i=c("");return(k,t)=>(x(),g("div",G,[s("div",null,[t[6]||(t[6]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义前缀和后缀图标样式：",-1)),a(e(m),{value:l.value,"onUpdate:value":t[0]||(t[0]=o=>l.value=o),placeholder:"搜索内容",prefix:e(A),suffix:e(W),"class-names":{prefix:"custom-prefix",suffix:"custom-suffix"},style:{width:"300px"}},null,8,["value","prefix","suffix"])]),s("div",null,[t[7]||(t[7]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义输入框样式：",-1)),a(e(m),{value:r.value,"onUpdate:value":t[1]||(t[1]=o=>r.value=o),placeholder:"特殊样式输入框","class-names":{input:"custom-input"},style:{width:"300px"}},null,8,["value"])]),s("div",null,[t[8]||(t[8]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义外层容器样式：",-1)),a(e(m),{value:u.value,"onUpdate:value":t[2]||(t[2]=o=>u.value=o),placeholder:"渐变边框",prefix:e(V),"class-names":{affixWrapper:"custom-wrapper"},style:{width:"300px"}},null,8,["value","prefix"])]),s("div",null,[t[9]||(t[9]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义字数统计样式：",-1)),a(e(m),{value:n.value,"onUpdate:value":t[3]||(t[3]=o=>n.value=o),placeholder:"最多 50 字","max-length":50,"show-count":"","class-names":{count:"custom-count"},style:{width:"300px"}},null,8,["value"])]),s("div",null,[t[10]||(t[10]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式（styles）：",-1)),a(e(m),{value:p.value,"onUpdate:value":t[4]||(t[4]=o=>p.value=o),placeholder:"内联样式控制",prefix:e(A),styles:{affixWrapper:{borderColor:"#722ed1",borderRadius:"8px"},prefix:{color:"#722ed1",fontSize:"16px"},input:{fontWeight:"500"}},style:{width:"300px"}},null,8,["value","prefix"])]),s("div",null,[t[11]||(t[11]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"TextArea 自定义样式：",-1)),a(e(f),{value:i.value,"onUpdate:value":t[5]||(t[5]=o=>i.value=o),placeholder:"多行文本输入",rows:4,"max-length":200,"show-count":"","class-names":{textarea:"custom-textarea",count:"custom-textarea-count"},style:{width:"400px"}},null,8,["value"])])]))}}),J=N(H,[["__scopeId","data-v-8d264f36"]]),Q=`<template>
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
import { SearchOutlined, UserOutlined, CloseCircleOutlined } from '@hmfw/icons'
import { Input, TextArea } from '@hmfw/ant-design'

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
`,X={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},Y=y({__name:"InputPassword",setup(h){const l=c(""),r=c("");return(u,n)=>(x(),g("div",X,[a(e(I),{value:l.value,"onUpdate:value":n[0]||(n[0]=p=>l.value=p),placeholder:"请输入密码"},null,8,["value"]),a(e(I),{value:r.value,"onUpdate:value":n[1]||(n[1]=p=>r.value=p),placeholder:"不可切换可见性","visibility-toggle":!1},null,8,["value"]),s("p",null,"密码："+S(l.value),1)]))}}),Z=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <InputPassword v-model:value="password" placeholder="请输入密码" />
    <InputPassword v-model:value="password2" placeholder="不可切换可见性" :visibility-toggle="false" />
    <p>密码：{{ password }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputPassword } from '@hmfw/ant-design'

const password = ref('')
const password2 = ref('')
<\/script>
`,_={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"400px"}},nn=y({__name:"InputSearch",setup(h){const l=c(""),r=c(""),u=c(""),n=c(!1),p=k=>{console.log("搜索：",k)},i=k=>{n.value=!0,setTimeout(()=>{n.value=!1,console.log("搜索完成：",k)},1500)};return(k,t)=>(x(),g("div",_,[a(e(q),{value:l.value,"onUpdate:value":t[0]||(t[0]=o=>l.value=o),placeholder:"请输入搜索内容",onSearch:p},null,8,["value"]),a(e(q),{value:r.value,"onUpdate:value":t[1]||(t[1]=o=>r.value=o),placeholder:"带按钮的搜索框","enter-button":"",onSearch:p},null,8,["value"]),a(e(q),{value:u.value,"onUpdate:value":t[2]||(t[2]=o=>u.value=o),placeholder:"加载中","enter-button":"",loading:n.value,onSearch:i},null,8,["value","loading"])]))}}),tn=`<template>
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
import { InputSearch } from '@hmfw/ant-design'

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
`,an={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"600px"}},sn=y({__name:"InputTextArea",setup(h){const l=c(""),r=c(""),u=c(`第一行
第二行
第三行`),n=c(""),p=c("测试"),i=c(""),k=c("");return(t,o)=>(x(),g("div",an,[a(e(f),{value:l.value,"onUpdate:value":o[0]||(o[0]=d=>l.value=d),placeholder:"基础文本域，固定 4 行",rows:4},null,8,["value"]),a(e(f),{value:r.value,"onUpdate:value":o[1]||(o[1]=d=>r.value=d),placeholder:"自适应高度（内容变化时自动调整）","auto-size":""},null,8,["value"]),a(e(f),{value:u.value,"onUpdate:value":o[2]||(o[2]=d=>u.value=d),placeholder:"限制高度：最少 2 行，最多 6 行","auto-size":{minRows:2,maxRows:6}},null,8,["value"]),a(e(f),{value:n.value,"onUpdate:value":o[3]||(o[3]=d=>n.value=d),placeholder:"显示字符计数",maxlength:100,"show-count":""},null,8,["value"]),a(e(f),{value:p.value,"onUpdate:value":o[4]||(o[4]=d=>p.value=d),placeholder:"按字节计数（中文算2字符，最多20字节）",count:{show:!0,max:20,strategy:d=>d.split("").reduce((w,T)=>w+(T.charCodeAt(0)>255?2:1),0)}},null,8,["value","count"]),a(e(f),{value:i.value,"onUpdate:value":o[5]||(o[5]=d=>i.value=d),placeholder:"自定义计数显示格式",count:{show:!0,max:50,showFormatter:({count:d,maxLength:w})=>`已输入 ${d} / ${w} 字符`}},null,8,["value","count"]),a(e(f),{value:k.value,"onUpdate:value":o[6]||(o[6]=d=>k.value=d),placeholder:"组合功能：自适应高度 + 字符计数 + 清除按钮","auto-size":"","show-count":"","allow-clear":"",maxlength:200},null,8,["value"])]))}}),en=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px">
    <!-- 基础用法 -->
    <TextArea v-model:value="text1" placeholder="基础文本域，固定 4 行" :rows="4" />

    <!-- 自适应高度 -->
    <TextArea v-model:value="text2" placeholder="自适应高度（内容变化时自动调整）" auto-size />

    <!-- 限制行数范围 -->
    <TextArea
      v-model:value="text3"
      placeholder="限制高度：最少 2 行，最多 6 行"
      :auto-size="{ minRows: 2, maxRows: 6 }"
    />

    <!-- 显示字符计数 -->
    <TextArea v-model:value="text4" placeholder="显示字符计数" :maxlength="100" show-count />

    <!-- 自定义计数策略：按字节数（中文算2个字符） -->
    <TextArea
      v-model:value="text5"
      placeholder="按字节计数（中文算2字符，最多20字节）"
      :count="{
        show: true,
        max: 20,
        strategy: (txt) => {
          return txt.split('').reduce((len, char) => {
            return len + (char.charCodeAt(0) > 255 ? 2 : 1)
          }, 0)
        },
      }"
    />

    <!-- 自定义显示格式 -->
    <TextArea
      v-model:value="text6"
      placeholder="自定义计数显示格式"
      :count="{
        show: true,
        max: 50,
        showFormatter: ({ count, maxLength }) => \`已输入 \${count} / \${maxLength} 字符\`,
      }"
    />

    <!-- 组合功能：自适应高度 + 计数 + 清除按钮 -->
    <TextArea
      v-model:value="text7"
      placeholder="组合功能：自适应高度 + 字符计数 + 清除按钮"
      auto-size
      show-count
      allow-clear
      :maxlength="200"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextArea } from '@hmfw/ant-design'

const text1 = ref('')
const text2 = ref('')
const text3 = ref('第一行\\n第二行\\n第三行')
const text4 = ref('')
const text5 = ref('测试')
const text6 = ref('')
const text7 = ref('')
<\/script>
`,on={class:"markdown-body"},xn={__name:"input",setup(h,{expose:l}){return l({frontmatter:{}}),(u,n)=>{const p=U("DemoBlock");return x(),g("div",on,[n[0]||(n[0]=s("h1",{id:"input-输入框",tabindex:"-1"},"Input 输入框",-1)),n[1]||(n[1]=s("p",null,"通过鼠标或键盘输入内容，是最基础的表单域的包装。",-1)),n[2]||(n[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=s("ul",null,[s("li",null,"需要用户输入表单域内容时。"),s("li",null,"提供组合型输入框，带搜索的输入框，还可以进行大小选择。")],-1)),n[4]||(n[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=s("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=s("p",null,"基本使用。",-1)),a(p,{title:"基础用法",source:e(j)},{default:v(()=>[a(M)]),_:1},8,["source"]),n[7]||(n[7]=s("h3",{id:"前缀后缀",tabindex:"-1"},"前缀/后缀",-1)),n[8]||(n[8]=s("p",null,"在输入框上添加前缀或后缀图标。",-1)),a(p,{title:"前缀/后缀",source:e(B)},{default:v(()=>[a($)]),_:1},8,["source"]),n[9]||(n[9]=s("h3",{id:"密码框",tabindex:"-1"},"密码框",-1)),n[10]||(n[10]=s("p",null,"密码输入框，可切换密码可见性。",-1)),a(p,{title:"密码框",source:e(Z)},{default:v(()=>[a(Y)]),_:1},8,["source"]),n[11]||(n[11]=s("h3",{id:"文本域",tabindex:"-1"},"文本域",-1)),n[12]||(n[12]=s("p",null,"用于多行输入。",-1)),a(p,{title:"文本域",source:e(en)},{default:v(()=>[a(sn)]),_:1},8,["source"]),n[13]||(n[13]=s("h3",{id:"搜索框",tabindex:"-1"},"搜索框",-1)),n[14]||(n[14]=s("p",null,"带有搜索按钮的输入框。",-1)),a(p,{title:"搜索框",source:e(tn)},{default:v(()=>[a(nn)]),_:1},8,["source"]),n[15]||(n[15]=s("h3",{id:"高级功能",tabindex:"-1"},"高级功能",-1)),n[16]||(n[16]=s("p",null,"展示细粒度样式控制（classNames / styles）和 TextArea 的 pressEnter 事件。",-1)),a(p,{title:"高级功能",source:e(D)},{default:v(()=>[a(L)]),_:1},8,["source"]),n[17]||(n[17]=s("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[18]||(n[18]=s("p",null,[b("通过 "),s("code",null,"classNames"),b(" / "),s("code",null,"styles"),b(" 对前缀、后缀、输入框、字数统计等子元素做细粒度样式控制。")],-1)),a(p,{title:"语义化 className 与 style",source:e(Q)},{default:v(()=>[a(J)]),_:1},8,["source"]),n[19]||(n[19]=P(`<h2 id="api" tabindex="-1">API</h2><h3 id="input-props" tabindex="-1">Input Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>输入框内容</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>输入框默认内容</td><td><code>string</code></td><td>-</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>控件大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>maxlength</td><td>最大长度</td><td><code>number</code></td><td>-</td></tr><tr><td>showCount</td><td>是否展示字数，支持自定义格式化</td><td><code>boolean | { formatter: (info) =&gt; VNode | string }</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>可以点击清除图标删除内容，支持自定义清除图标</td><td><code>boolean | { clearIcon?: VNode; disabled?: boolean }</code></td><td><code>false</code></td></tr><tr><td>prefix</td><td>带有前缀图标的 input</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>suffix</td><td>带有后缀图标的 input</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>readonly</td><td>是否只读</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>id</td><td>输入框的 id</td><td><code>string</code></td><td>-</td></tr><tr><td>rootClassName</td><td>根节点的 className</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>{ affixWrapper?: string; prefix?: string; suffix?: string; input?: string; count?: string }</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>{ affixWrapper?: CSSProperties; prefix?: CSSProperties; suffix?: CSSProperties; input?: CSSProperties; count?: CSSProperties }</code></td><td>-</td></tr></tbody></table><h3 id="inputpassword-props" tabindex="-1">InputPassword Props</h3><p>继承 Input 所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>visibilityToggle</td><td>是否显示切换按钮或者控制密码显隐</td><td><code>boolean | { visible?: boolean; onVisibleChange?: (visible: boolean) =&gt; void }</code></td><td><code>true</code></td></tr><tr><td>iconRender</td><td>自定义切换按钮</td><td><code>(visible: boolean) =&gt; VNode | string</code></td><td>-</td></tr><tr><td>action</td><td>切换按钮的触发方式</td><td><code>&#39;click&#39; | &#39;hover&#39;</code></td><td><code>&#39;click&#39;</code></td></tr></tbody></table><h3 id="textarea-props" tabindex="-1">TextArea Props</h3><p>继承 Input 所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>rows</td><td>输入框行数</td><td><code>number</code></td><td><code>4</code></td></tr><tr><td>autoSize</td><td>自适应内容高度，可设置为 true | false 或对象：<code>{ minRows, maxRows }</code></td><td><code>boolean | { minRows?: number; maxRows?: number }</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>可以点击清除图标删除内容</td><td><code>boolean | { clearIcon?: VNode; disabled?: boolean }</code></td><td><code>false</code></td></tr><tr><td>showCount</td><td>是否展示字数，支持自定义格式化</td><td><code>boolean | { formatter: (info) =&gt; VNode | string }</code></td><td><code>false</code></td></tr><tr><td>count</td><td>高级计数配置，支持自定义计数策略和格式，见下方说明</td><td><code>CountConfig</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>{ textarea?: string; count?: string }</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>{ textarea?: CSSProperties; count?: CSSProperties }</code></td><td>-</td></tr></tbody></table><p><strong>CountConfig 类型：</strong></p><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">CountConfig</span> <span class="token punctuation">{</span>
  <span class="token comment">// 是否显示计数</span>
  show<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>args<span class="token operator">:</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> maxLength<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> VNode <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
  <span class="token comment">// 最大值限制（超出会自动截断并显示红色）</span>
  max<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token comment">// 自定义计数策略（默认为字符数）</span>
  strategy<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span>
  <span class="token comment">// 自定义显示格式</span>
  showFormatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>args<span class="token operator">:</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> maxLength<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> VNode <span class="token operator">|</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><p><strong>count 使用示例：</strong></p><pre class="language-vue"><code>&lt;!-- 按字节数计数（中文算2字符） --&gt;
&lt;TextArea
  :count=&quot;{
    show: true,
    max: 20,
    strategy: (txt) =&gt; txt.split(&#39;&#39;).reduce((len, char) =&gt; len + (char.charCodeAt(0) &gt; 255 ? 2 : 1), 0),
  }&quot;
/&gt;

&lt;!-- 自定义显示格式 --&gt;
&lt;TextArea
  :count=&quot;{
    show: true,
    max: 100,
    showFormatter: ({ count, maxLength }) =&gt; \`已输入 \${count}/\${maxLength} 字\`,
  }&quot;
/&gt;
</code></pre><h3 id="inputsearch-props" tabindex="-1">InputSearch Props</h3><p>继承 Input 所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>enterButton</td><td>是否有确认按钮，可设为按钮文字</td><td><code>boolean | string</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>搜索 loading</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>searchIcon</td><td>自定义搜索图标</td><td><code>string | VNode</code></td><td>-</td></tr></tbody></table><h3 id="input-events" tabindex="-1">Input Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>输入框内容变化时的回调</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>change</td><td>输入框内容变化时的回调</td><td><code>(event: Event) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>pressEnter</td><td>按下回车的回调</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清除按钮时的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="input-methods" tabindex="-1">Input Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td><code>(options?: { preventScroll?: boolean; cursor?: &#39;start&#39; | &#39;end&#39; | &#39;all&#39; }) =&gt; void</code></td></tr><tr><td>blur</td><td>移除焦点</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="inputsearch-events" tabindex="-1">InputSearch Events</h3><p>继承 Input 所有事件，额外支持：</p><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>search</td><td>点击搜索图标、清除图标，或按下回车键时的回调</td><td><code>(value: string, event: Event, info: { source: &#39;input&#39; | &#39;clear&#39; }) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对输入框的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><p><strong>Input 类型</strong></p><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义前缀/后缀样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value1<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>搜索<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SearchOutlined<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      prefix: &#39;my-prefix&#39;,
      suffix: &#39;my-suffix&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义输入框本身样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ input: &#39;my-input&#39; }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义外层容器 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UserOutlined<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ affixWrapper: &#39;my-wrapper&#39; }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义字数统计样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:max-length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">show-count</span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ count: &#39;my-count&#39; }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- TextArea 自定义 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextArea</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>textarea<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">show-count</span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      textarea: &#39;my-textarea&#39;,
      count: &#39;my-textarea-count&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-prefix)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-suffix)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #52c41a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-input)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #ffffff<span class="token punctuation">,</span> #f5f5f5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-wrapper)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #722ed1<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-count)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ff4d4f<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-textarea)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f0f5ff<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Courier New&#39;</span><span class="token punctuation">,</span> monospace<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-textarea-count)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #8c8c8c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制前缀/后缀 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value1<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SearchOutlined<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      prefix: { color: &#39;#1890ff&#39;, fontSize: &#39;16px&#39; },
      suffix: { color: &#39;#52c41a&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义输入框样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value2<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      input: {
        background: &#39;linear-gradient(to right, #ffffff, #f5f5f5)&#39;,
        fontWeight: &#39;500&#39;,
      },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义外层容器 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value3<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UserOutlined<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      affixWrapper: {
        border: &#39;2px solid #722ed1&#39;,
        borderRadius: &#39;8px&#39;,
      },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义字数统计 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value4<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:max-length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">show-count</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      count: { color: &#39;#ff4d4f&#39;, fontWeight: &#39;bold&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- TextArea 自定义 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextArea</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>textarea<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">show-count</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      textarea: {
        background: &#39;#f0f5ff&#39;,
        fontFamily: &#39;Courier New, monospace&#39;,
      },
      count: { fontSize: &#39;12px&#39;, color: &#39;#8c8c8c&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>affixWrapper</code> 仅在有 <code>prefix</code> / <code>suffix</code> / <code>allowClear</code> / <code>showCount</code> 时才会渲染</li><li><code>input</code> 样式会应用到实际的 <code>&lt;input&gt;</code> 元素，不受外层容器影响</li><li>TextArea 的 <code>textarea</code> 对应 <code>&lt;textarea&gt;</code> 元素，<code>count</code> 对应字数统计的 <code>&lt;span&gt;</code></li><li>当同时设置 <code>rootClassName</code> 和 <code>classNames.affixWrapper</code> 时，<code>rootClassName</code> 应用于最外层容器</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Input 组件使用以下设计 Token，可通过 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-text-placeholder</code></td><td>占位符文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告状态色</td><td><code>#faad14</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-bg-container-disabled</code></td><td>禁用容器背景色</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>小号圆角</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr></tbody></table>`,49))])}}};export{xn as default};
