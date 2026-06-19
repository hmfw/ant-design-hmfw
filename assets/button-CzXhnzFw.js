import{B as l}from"./Button-Bkc4rV1H.js";import{o as m,A as r,k as u,n,K as s,R as e,m as a,_ as x,h as d,E as B,J as b,H as h,l as y}from"./index-DVYL9B-3.js";import{S as g}from"./SearchOutlined-BZE5lNvc.js";import{C as w}from"./CheckOutlined-HfOow00M.js";import{C as v}from"./CloseOutlined-CekazxGM.js";import{D as k}from"./DownloadOutlined-4npEPGL4.js";import"./cls-S9IiI6wd.js";import"./Icon-DOBD7t4S.js";import"./LoadingOutlined-Cfvvdn-g.js";const _={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},S=m({__name:"ButtonBasic",setup(c){return(p,t)=>(r(),u("div",_,[n(s(l),{type:"primary"},{default:e(()=>[...t[0]||(t[0]=[a(" Primary Button ",-1)])]),_:1}),n(s(l),null,{default:e(()=>[...t[1]||(t[1]=[a("Default Button",-1)])]),_:1}),n(s(l),{type:"dashed"},{default:e(()=>[...t[2]||(t[2]=[a(" Dashed Button ",-1)])]),_:1}),n(s(l),{type:"text"},{default:e(()=>[...t[3]||(t[3]=[a(" Text Button ",-1)])]),_:1}),n(s(l),{type:"link"},{default:e(()=>[...t[4]||(t[4]=[a(" Link Button ",-1)])]),_:1})]))}}),D=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary"> Primary Button </Button>
    <Button>Default Button</Button>
    <Button type="dashed"> Dashed Button </Button>
    <Button type="text"> Text Button </Button>
    <Button type="link"> Link Button </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
<\/script>
`,C={style:{display:"flex","flex-direction":"column",gap:"8px"}},q=m({__name:"ButtonBlock",setup(c){return(p,t)=>(r(),u("div",C,[n(s(l),{type:"primary",block:""},{default:e(()=>[...t[0]||(t[0]=[a(" Primary Block ",-1)])]),_:1}),n(s(l),{block:""},{default:e(()=>[...t[1]||(t[1]=[a(" Default Block ",-1)])]),_:1}),n(s(l),{type:"dashed",block:""},{default:e(()=>[...t[2]||(t[2]=[a(" Dashed Block ",-1)])]),_:1})]))}}),$=`<template>
  <div style="display: flex; flex-direction: column; gap: 8px">
    <Button type="primary" block> Primary Block </Button>
    <Button block> Default Block </Button>
    <Button type="dashed" block> Dashed Block </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
<\/script>
`,N={style:{display:"flex",gap:"12px","flex-wrap":"wrap"}},L=m({__name:"ButtonClassNames",setup(c){return(p,t)=>(r(),u("div",N,[n(s(l),{type:"primary",icon:s(g),"class-names":{icon:"demo-tinted-icon"},styles:{icon:{color:"#fadb14"}}},{default:e(()=>[...t[0]||(t[0]=[a(" 自定义图标颜色 ",-1)])]),_:1},8,["icon"]),n(s(l),{icon:s(g),"icon-position":"end",styles:{root:{borderColor:"#722ed1",color:"#722ed1"}}},{default:e(()=>[...t[1]||(t[1]=[a(" 尾部图标 + 自定义边框 ",-1)])]),_:1},8,["icon"]),n(s(l),{loading:"","class-names":{loading:"demo-loading-emphasis"}},{default:e(()=>[...t[2]||(t[2]=[a(" 加载中 ",-1)])]),_:1})]))}}),O=x(L,[["__scopeId","data-v-679ab21f"]]),P=`<template>
  <div style="display: flex; gap: 12px; flex-wrap: wrap">
    <Button
      type="primary"
      :icon="SearchOutlined"
      :class-names="{ icon: 'demo-tinted-icon' }"
      :styles="{ icon: { color: '#fadb14' } }"
    >
      自定义图标颜色
    </Button>

    <Button :icon="SearchOutlined" icon-position="end" :styles="{ root: { borderColor: '#722ed1', color: '#722ed1' } }">
      尾部图标 + 自定义边框
    </Button>

    <Button loading :class-names="{ loading: 'demo-loading-emphasis' }"> 加载中 </Button>
  </div>
</template>

<script setup lang="ts">
import { Button, SearchOutlined } from 'ant-design-hmfw'
<\/script>

<style scoped>
:deep(.demo-tinted-icon) {
  filter: drop-shadow(0 0 2px rgba(250, 219, 20, 0.6));
}
:deep(.demo-loading-emphasis) {
  font-size: 16px;
}
</style>
`,z={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},T=m({__name:"ButtonDanger",setup(c){return(p,t)=>(r(),u("div",z,[n(s(l),{type:"primary",danger:""},{default:e(()=>[...t[0]||(t[0]=[a(" Primary Danger ",-1)])]),_:1}),n(s(l),{danger:""},{default:e(()=>[...t[1]||(t[1]=[a(" Default Danger ",-1)])]),_:1}),n(s(l),{type:"text",danger:""},{default:e(()=>[...t[2]||(t[2]=[a(" Text Danger ",-1)])]),_:1}),n(s(l),{type:"link",danger:""},{default:e(()=>[...t[3]||(t[3]=[a(" Link Danger ",-1)])]),_:1})]))}}),E=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" danger> Primary Danger </Button>
    <Button danger> Default Danger </Button>
    <Button type="text" danger> Text Danger </Button>
    <Button type="link" danger> Link Danger </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
<\/script>
`,G={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},I=m({__name:"ButtonDisabled",setup(c){return(p,t)=>(r(),u("div",G,[n(s(l),{type:"primary",disabled:""},{default:e(()=>[...t[0]||(t[0]=[a(" Primary Disabled ",-1)])]),_:1}),n(s(l),{disabled:""},{default:e(()=>[...t[1]||(t[1]=[a(" Default Disabled ",-1)])]),_:1}),n(s(l),{type:"dashed",disabled:""},{default:e(()=>[...t[2]||(t[2]=[a(" Dashed Disabled ",-1)])]),_:1}),n(s(l),{type:"text",disabled:""},{default:e(()=>[...t[3]||(t[3]=[a(" Text Disabled ",-1)])]),_:1}),n(s(l),{type:"link",disabled:""},{default:e(()=>[...t[4]||(t[4]=[a(" Link Disabled ",-1)])]),_:1})]))}}),A=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" disabled> Primary Disabled </Button>
    <Button disabled> Default Disabled </Button>
    <Button type="dashed" disabled> Dashed Disabled </Button>
    <Button type="text" disabled> Text Disabled </Button>
    <Button type="link" disabled> Link Disabled </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
<\/script>
`,M={style:{padding:"16px",background:"#1677ff"}},R={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},V=m({__name:"ButtonGhost",setup(c){return(p,t)=>(r(),u("div",M,[d("div",R,[n(s(l),{type:"primary",ghost:""},{default:e(()=>[...t[0]||(t[0]=[a(" Primary Ghost ",-1)])]),_:1}),n(s(l),{ghost:""},{default:e(()=>[...t[1]||(t[1]=[a(" Default Ghost ",-1)])]),_:1}),n(s(l),{type:"dashed",ghost:""},{default:e(()=>[...t[2]||(t[2]=[a(" Dashed Ghost ",-1)])]),_:1})])]))}}),F=`<template>
  <div style="padding: 16px; background: #1677ff">
    <div style="display: flex; gap: 8px; flex-wrap: wrap">
      <Button type="primary" ghost> Primary Ghost </Button>
      <Button ghost> Default Ghost </Button>
      <Button type="dashed" ghost> Dashed Ghost </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
<\/script>
`,H={style:{display:"flex","flex-direction":"column",gap:"16px"}},J={style:{display:"flex",gap:"8px"}},K={style:{display:"flex",gap:"8px"}},U=m({__name:"ButtonHref",setup(c){return(p,t)=>(r(),u("div",H,[d("div",J,[n(s(l),{type:"primary",href:"https://ant.design",target:"_blank"},{default:e(()=>[...t[0]||(t[0]=[a(" Link Button ",-1)])]),_:1}),n(s(l),{type:"link",href:"https://ant.design",target:"_blank"},{default:e(()=>[...t[1]||(t[1]=[a(" Link Type ",-1)])]),_:1})]),d("div",K,[n(s(l),{type:"primary",href:"https://ant.design",disabled:""},{default:e(()=>[...t[2]||(t[2]=[a(" Disabled Link ",-1)])]),_:1})])]))}}),j=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div style="display: flex; gap: 8px">
      <Button type="primary" href="https://ant.design" target="_blank"> Link Button </Button>
      <Button type="link" href="https://ant.design" target="_blank"> Link Type </Button>
    </div>
    <div style="display: flex; gap: 8px">
      <Button type="primary" href="https://ant.design" disabled> Disabled Link </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
<\/script>
`,Q={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},W=m({__name:"ButtonIcon",setup(c){return(p,t)=>(r(),u("div",Q,[n(s(l),{type:"primary",icon:s(g)},{default:e(()=>[...t[0]||(t[0]=[a(" Search ",-1)])]),_:1},8,["icon"]),n(s(l),{type:"primary",icon:s(g)},null,8,["icon"]),n(s(l),{type:"primary",icon:s(w)},{default:e(()=>[...t[1]||(t[1]=[a(" Confirm ",-1)])]),_:1},8,["icon"]),n(s(l),{type:"dashed",icon:s(v)},{default:e(()=>[...t[2]||(t[2]=[a(" Cancel ",-1)])]),_:1},8,["icon"])]))}}),X=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" :icon="SearchOutlined"> Search </Button>
    <Button type="primary" :icon="SearchOutlined" />
    <Button type="primary" :icon="CheckOutlined"> Confirm </Button>
    <Button type="dashed" :icon="CloseOutlined"> Cancel </Button>
  </div>
</template>

<script setup lang="ts">
import { Button, SearchOutlined, CheckOutlined, CloseOutlined } from 'ant-design-hmfw'
<\/script>
`,Y={style:{display:"flex","flex-direction":"column",gap:"16px"}},Z={style:{display:"flex",gap:"8px"}},tt={style:{display:"flex",gap:"8px"}},nt=m({__name:"ButtonIconPosition",setup(c){return(p,t)=>(r(),u("div",Y,[d("div",Z,[n(s(l),{type:"primary",icon:s(g)},{default:e(()=>[...t[0]||(t[0]=[a(" Search ",-1)])]),_:1},8,["icon"]),n(s(l),{type:"primary",icon:s(g),"icon-position":"end"},{default:e(()=>[...t[1]||(t[1]=[a(" Search ",-1)])]),_:1},8,["icon"])]),d("div",tt,[n(s(l),{type:"default",icon:s(k)},{default:e(()=>[...t[2]||(t[2]=[a(" Download ",-1)])]),_:1},8,["icon"]),n(s(l),{type:"default",icon:s(k),"icon-position":"end"},{default:e(()=>[...t[3]||(t[3]=[a(" Download ",-1)])]),_:1},8,["icon"])])]))}}),st=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div style="display: flex; gap: 8px">
      <Button type="primary" :icon="SearchOutlined"> Search </Button>
      <Button type="primary" :icon="SearchOutlined" icon-position="end"> Search </Button>
    </div>
    <div style="display: flex; gap: 8px">
      <Button type="default" :icon="DownloadOutlined"> Download </Button>
      <Button type="default" :icon="DownloadOutlined" icon-position="end"> Download </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
import { SearchOutlined, DownloadOutlined } from 'ant-design-hmfw'
<\/script>
`,at={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},ot=m({__name:"ButtonLoading",setup(c){const p=B(!1),t=()=>{p.value=!0,setTimeout(()=>{p.value=!1},2e3)};return(f,o)=>(r(),u("div",at,[n(s(l),{type:"primary",loading:""},{default:e(()=>[...o[0]||(o[0]=[a(" Loading ",-1)])]),_:1}),n(s(l),{type:"primary",size:"small",loading:""},{default:e(()=>[...o[1]||(o[1]=[a(" Loading ",-1)])]),_:1}),n(s(l),{type:"primary",loading:p.value,onClick:t},{default:e(()=>[...o[2]||(o[2]=[a(" Click me! ",-1)])]),_:1},8,["loading"])]))}}),et=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" loading> Loading </Button>
    <Button type="primary" size="small" loading> Loading </Button>
    <Button type="primary" :loading="loading" @click="handleClick"> Click me! </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'ant-design-hmfw'

const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
<\/script>
`,dt={style:{display:"flex","flex-direction":"column",gap:"16px"}},lt={style:{display:"flex",gap:"8px"}},pt=m({__name:"ButtonLoadingDelay",setup(c){const p=B(!1),t=()=>{console.log("Button clicked")},f=()=>{p.value=!p.value};return(o,i)=>(r(),u("div",dt,[d("div",lt,[n(s(l),{type:"primary",loading:{delay:500},onClick:t},{default:e(()=>[...i[0]||(i[0]=[a(" Click me (500ms delay) ",-1)])]),_:1}),n(s(l),{type:"primary",loading:p.value,onClick:f},{default:e(()=>[a(b(p.value?"Loading...":"Click to load"),1)]),_:1},8,["loading"])])]))}}),it=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div style="display: flex; gap: 8px">
      <Button type="primary" :loading="{ delay: 500 }" @click="handleClick"> Click me (500ms delay) </Button>
      <Button type="primary" :loading="loading" @click="toggleLoading">
        {{ loading ? 'Loading...' : 'Click to load' }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'ant-design-hmfw'

const loading = ref(false)

const handleClick = () => {
  console.log('Button clicked')
}

const toggleLoading = () => {
  loading.value = !loading.value
}
<\/script>
`,rt={style:{display:"flex",gap:"8px","align-items":"center"}},ut=m({__name:"ButtonShape",setup(c){return(p,t)=>(r(),u("div",rt,[n(s(l),{type:"primary",shape:"circle",icon:s(g)},null,8,["icon"]),n(s(l),{type:"primary",shape:"circle"},{default:e(()=>[...t[0]||(t[0]=[a(" A ",-1)])]),_:1}),n(s(l),{type:"primary",shape:"round"},{default:e(()=>[...t[1]||(t[1]=[a(" Round ",-1)])]),_:1}),n(s(l),{type:"primary"},{default:e(()=>[...t[2]||(t[2]=[a(" Default ",-1)])]),_:1})]))}}),ct=`<template>
  <div style="display: flex; gap: 8px; align-items: center">
    <Button type="primary" shape="circle" :icon="SearchOutlined" />
    <Button type="primary" shape="circle"> A </Button>
    <Button type="primary" shape="round"> Round </Button>
    <Button type="primary"> Default </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
import { SearchOutlined } from 'ant-design-hmfw'
<\/script>
`,mt={style:{display:"flex",gap:"8px","align-items":"center"}},gt=m({__name:"ButtonSize",setup(c){return(p,t)=>(r(),u("div",mt,[n(s(l),{type:"primary",size:"large"},{default:e(()=>[...t[0]||(t[0]=[a(" Large ",-1)])]),_:1}),n(s(l),{type:"primary"},{default:e(()=>[...t[1]||(t[1]=[a(" Middle ",-1)])]),_:1}),n(s(l),{type:"primary",size:"small"},{default:e(()=>[...t[2]||(t[2]=[a(" Small ",-1)])]),_:1})]))}}),ft=`<template>
  <div style="display: flex; gap: 8px; align-items: center">
    <Button type="primary" size="large"> Large </Button>
    <Button type="primary"> Middle </Button>
    <Button type="primary" size="small"> Small </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
<\/script>
`,yt={class:"markdown-body"},Dt={__name:"button",setup(c,{expose:p}){return p({frontmatter:{}}),(f,o)=>{const i=h("DemoBlock");return r(),u("div",yt,[o[0]||(o[0]=y('<h1 id="button-按钮" tabindex="-1">Button 按钮</h1><p>按钮用于开始一个即时操作。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p><p>在 ant-design-hmfw 中我们提供了五种按钮。</p><ul><li>主按钮：用于主行动点，一个操作区域只能有一个主按钮。</li><li>默认按钮：用于没有主次之分的一组行动点。</li><li>虚线按钮：常用于添加操作。</li><li>文本按钮：用于最次级的行动点。</li><li>链接按钮：一般用于链接，即导航至某位置。</li></ul><p>以及四种状态属性与上面配合使用。</p><ul><li>危险：删除/移动/修改权限等危险操作，一般需要二次确认。</li><li>禁用：行动点不可用的时候，一般需要文案解释。</li><li>加载中：用于异步操作等待反馈的时候，也可以避免多次提交。</li><li>Ghost：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="按钮类型" tabindex="-1">按钮类型</h3><p>按钮有五种类型：主按钮、默认按钮、虚线按钮、文本按钮和链接按钮。</p>',11)),n(i,{title:"按钮类型",source:s(D)},{default:e(()=>[n(S)]),_:1},8,["source"]),o[1]||(o[1]=d("h3",{id:"按钮尺寸",tabindex:"-1"},"按钮尺寸",-1)),o[2]||(o[2]=d("p",null,"按钮有大、中、小三种尺寸。",-1)),o[3]||(o[3]=d("p",null,[a("通过设置 "),d("code",null,"size"),a(" 为 "),d("code",null,"large"),a(),d("code",null,"small"),a(" 分别把按钮设为大、小尺寸。若不设置 "),d("code",null,"size"),a("，则尺寸为中。")],-1)),n(i,{title:"按钮尺寸",source:s(ft)},{default:e(()=>[n(gt)]),_:1},8,["source"]),o[4]||(o[4]=d("h3",{id:"禁用状态",tabindex:"-1"},"禁用状态",-1)),o[5]||(o[5]=d("p",null,[a("添加 "),d("code",null,"disabled"),a(" 属性即可让按钮处于不可用状态，同时按钮样式也会改变。")],-1)),n(i,{title:"禁用状态",source:s(A)},{default:e(()=>[n(I)]),_:1},8,["source"]),o[6]||(o[6]=d("h3",{id:"加载状态",tabindex:"-1"},"加载状态",-1)),o[7]||(o[7]=d("p",null,[a("添加 "),d("code",null,"loading"),a(" 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。")],-1)),n(i,{title:"加载状态",source:s(et)},{default:e(()=>[n(ot)]),_:1},8,["source"]),o[8]||(o[8]=d("h3",{id:"危险按钮",tabindex:"-1"},"危险按钮",-1)),o[9]||(o[9]=d("p",null,"危险按钮用于删除/移动/修改权限等危险操作。",-1)),n(i,{title:"危险按钮",source:s(E)},{default:e(()=>[n(T)]),_:1},8,["source"]),o[10]||(o[10]=d("h3",{id:"block-按钮",tabindex:"-1"},"Block 按钮",-1)),o[11]||(o[11]=d("p",null,[d("code",null,"block"),a(" 属性将使按钮适合其父宽度。")],-1)),n(i,{title:"Block 按钮",source:s($)},{default:e(()=>[n(q)]),_:1},8,["source"]),o[12]||(o[12]=d("h3",{id:"ghost-按钮",tabindex:"-1"},"Ghost 按钮",-1)),o[13]||(o[13]=d("p",null,"幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。",-1)),n(i,{title:"Ghost 按钮",source:s(F)},{default:e(()=>[n(V)]),_:1},8,["source"]),o[14]||(o[14]=d("h3",{id:"图标按钮",tabindex:"-1"},"图标按钮",-1)),o[15]||(o[15]=d("p",null,[a("当需要在 Button 内嵌入 Icon 时，可以设置 "),d("code",null,"icon"),a(" 属性。")],-1)),n(i,{title:"图标按钮",source:s(X)},{default:e(()=>[n(W)]),_:1},8,["source"]),o[16]||(o[16]=d("h3",{id:"按钮形状",tabindex:"-1"},"按钮形状",-1)),o[17]||(o[17]=d("p",null,"按钮有多种形状：默认、圆形、圆角。",-1)),n(i,{title:"按钮形状",source:s(ct)},{default:e(()=>[n(ut)]),_:1},8,["source"]),o[18]||(o[18]=d("h3",{id:"图标位置",tabindex:"-1"},"图标位置",-1)),o[19]||(o[19]=d("p",null,[a("可以通过 "),d("code",null,"iconPosition"),a(" 属性设置图标在按钮中的位置。")],-1)),n(i,{title:"图标位置",source:s(st)},{default:e(()=>[n(nt)]),_:1},8,["source"]),o[20]||(o[20]=d("h3",{id:"链接按钮",tabindex:"-1"},"链接按钮",-1)),o[21]||(o[21]=d("p",null,[a("设置 "),d("code",null,"href"),a(" 属性后，按钮将渲染为 "),d("code",null,"<a>"),a(" 标签。")],-1)),n(i,{title:"链接按钮",source:s(j)},{default:e(()=>[n(U)]),_:1},8,["source"]),o[22]||(o[22]=d("h3",{id:"延迟加载",tabindex:"-1"},"延迟加载",-1)),o[23]||(o[23]=d("p",null,[a("通过设置 "),d("code",null,"loading"),a(" 为对象并指定 "),d("code",null,"delay"),a(" 属性，可以延迟显示加载状态。")],-1)),n(i,{title:"延迟加载",source:s(it)},{default:e(()=>[n(pt)]),_:1},8,["source"]),o[24]||(o[24]=d("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),o[25]||(o[25]=d("p",null,[a("通过 "),d("code",null,"classNames"),a(" / "),d("code",null,"styles"),a(" 对 root、icon、loading 等子元素做细粒度样式控制。")],-1)),n(i,{title:"语义化 className 与 style",source:s(P)},{default:e(()=>[n(O)]),_:1},8,["source"]),o[26]||(o[26]=y(`<h2 id="api" tabindex="-1">API</h2><h3 id="button-props" tabindex="-1">Button Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>设置按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39; | &#39;dashed&#39; | &#39;text&#39; | &#39;link&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>size</td><td>设置按钮大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>shape</td><td>设置按钮形状</td><td><code>&#39;default&#39; | &#39;circle&#39; | &#39;round&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>htmlType</td><td>设置 button 原生的 type 值</td><td><code>&#39;submit&#39; | &#39;button&#39; | &#39;reset&#39;</code></td><td><code>&#39;button&#39;</code></td></tr><tr><td>loading</td><td>设置按钮载入状态</td><td><code>boolean | { delay?: number }</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>设置按钮失效状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>danger</td><td>设置危险按钮</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>block</td><td>将按钮宽度调整为其父宽度的选项</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>ghost</td><td>幽灵属性，使按钮背景透明</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>设置按钮的图标组件</td><td><code>IconComponent</code></td><td>-</td></tr><tr><td>iconPosition</td><td>设置图标位置</td><td><code>&#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;start&#39;</code></td></tr><tr><td>href</td><td>点击跳转的地址，指定此属性后按钮渲染为 a 标签</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>相当于 a 标签的 target 属性，href 存在时生效</td><td><code>string</code></td><td>-</td></tr><tr><td>autoInsertSpace</td><td>是否在两个汉字之间插入空格</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ButtonClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ButtonStyles</code></td><td>-</td></tr></tbody></table><h3 id="button-events" tabindex="-1">Button Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时的回调</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="button-slots" tabindex="-1">Button Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>按钮内容</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对按钮的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">ButtonClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 按钮根节点（&lt;button&gt; 或 &lt;a&gt;）</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 图标容器</span>
  loading<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 加载状态图标容器（与 icon 叠加）</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ButtonStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  icon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  loading<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 基础按钮 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-button hmfw-button-default hmfw-button-middle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>按钮文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 带图标按钮 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-button hmfw-button-primary hmfw-button-middle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-button-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.icon / styles.icon 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>搜索<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 加载状态 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-button hmfw-button-primary hmfw-button-middle hmfw-button-loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-button-icon hmfw-button-loading-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.icon + classNames.loading 叠加应用 --&gt;</span>
    <span class="token comment">&lt;!-- ↑ styles.icon + styles.loading 合并应用 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-icon hmfw-icon-spin<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>提交中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义图标样式 --&gt;
  &lt;Button type=&quot;primary&quot; :icon=&quot;SearchOutlined&quot; :class-names=&quot;{ icon: &#39;my-icon-wrapper&#39; }&quot;&gt; 搜索 &lt;/Button&gt;

  &lt;!-- 自定义加载动画 --&gt;
  &lt;Button loading :class-names=&quot;{ loading: &#39;my-loading-emphasis&#39; }&quot;&gt; 加载中 &lt;/Button&gt;

  &lt;!-- 自定义根节点样式 --&gt;
  &lt;Button :class-names=&quot;{ root: &#39;my-button-root&#39; }&quot;&gt; 自定义按钮 &lt;/Button&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-icon-wrapper) {
  color: #fadb14;
  filter: drop-shadow(0 0 2px rgba(250, 219, 20, 0.6));
}

:deep(.my-loading-emphasis) {
  font-size: 16px;
}

:deep(.my-button-root) {
  border-radius: 16px;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制图标 --&gt;
  &lt;Button
    type=&quot;primary&quot;
    :icon=&quot;SearchOutlined&quot;
    :styles=&quot;{
      icon: { color: &#39;#fadb14&#39;, fontSize: &#39;18px&#39; },
    }&quot;
  &gt;
    搜索
  &lt;/Button&gt;

  &lt;!-- 自定义边框颜色 --&gt;
  &lt;Button
    :icon=&quot;SearchOutlined&quot;
    icon-position=&quot;end&quot;
    :styles=&quot;{
      root: { borderColor: &#39;#722ed1&#39;, color: &#39;#722ed1&#39; },
    }&quot;
  &gt;
    尾部图标
  &lt;/Button&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;Button
    :icon=&quot;SearchOutlined&quot;
    :styles=&quot;{
      root: { borderRadius: &#39;16px&#39; },
      icon: { fontSize: &#39;20px&#39; },
    }&quot;
  &gt;
    组合样式
  &lt;/Button&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>加载状态时，<code>classNames.loading</code> 与 <code>classNames.icon</code> 会<strong>叠加</strong>应用在同一个 <code>&lt;span&gt;</code> 上</li><li>加载状态时，<code>styles.loading</code> 与 <code>styles.icon</code> 会<strong>合并</strong>应用，<code>styles.loading</code> 优先</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-button-loading</code>）合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Button 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-error-hover</code></td><td>错误色悬停态</td><td><code>#ff7875</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次级填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-fill-tertiary</code></td><td>三级填充色</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-color-link</code></td><td>链接色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-link-active</code></td><td>链接激活色</td><td><code>#0958d9</code></td></tr><tr><td><code>--hmfw-color-link-hover</code></td><td>链接悬停色</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-active</code></td><td>主题色激活态</td><td><code>#0958d9</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-white</code></td><td>纯白色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-font-family</code></td><td>字体族</td><td><code>-apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, ...</code></td></tr><tr><td><code>--hmfw-font-size</code></td><td>标准字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-lg</code></td><td>大号字号</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-font-size-sm</code></td><td>小号字号</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-line-height</code></td><td>标准行高</td><td><code>1.5714285714285714</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>小号圆角</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-box-shadow</code></td><td>基础阴影</td><td><code>0 1px 2px 0 rgba(0,0,0,0.03), 0 1px 6px -1px rgba(0,0,0,0.02), ...</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>缓入缓出曲线</td><td><code>cubic-bezier(0.645, 0.045, 0.355, 1)</code></td></tr></tbody></table>`,25))])}}};export{Dt as default};
