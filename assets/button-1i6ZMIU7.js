import{B as a}from"./Button-dLk1ExkL.js";import{n as m,z as p,j as u,m as n,J as e,Q as l,l as o,_ as b,g as i,D as x,I as _,G as v,k as c}from"./index-DBrYVvYd.js";import{ab as f,m as k,p as D,v as B}from"./icons-CTzpiRs0.js";import"./cls-S9IiI6wd.js";import"./Icon-CiCvy_Uq.js";const h={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},w=m({__name:"ButtonBasic",setup(y){return(s,t)=>(p(),u("div",h,[n(e(a),{type:"primary"},{default:l(()=>[...t[0]||(t[0]=[o(" Primary Button ",-1)])]),_:1}),n(e(a),null,{default:l(()=>[...t[1]||(t[1]=[o("Default Button",-1)])]),_:1}),n(e(a),{type:"dashed"},{default:l(()=>[...t[2]||(t[2]=[o(" Dashed Button ",-1)])]),_:1}),n(e(a),{type:"text"},{default:l(()=>[...t[3]||(t[3]=[o(" Text Button ",-1)])]),_:1}),n(e(a),{type:"link"},{default:l(()=>[...t[4]||(t[4]=[o(" Link Button ",-1)])]),_:1})]))}}),S=`<template>
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
`,C={style:{display:"flex","flex-direction":"column",gap:"8px"}},$=m({__name:"ButtonBlock",setup(y){return(s,t)=>(p(),u("div",C,[n(e(a),{type:"primary",block:""},{default:l(()=>[...t[0]||(t[0]=[o(" Primary Block ",-1)])]),_:1}),n(e(a),{block:""},{default:l(()=>[...t[1]||(t[1]=[o(" Default Block ",-1)])]),_:1}),n(e(a),{type:"dashed",block:""},{default:l(()=>[...t[2]||(t[2]=[o(" Dashed Block ",-1)])]),_:1})]))}}),L=`<template>
  <div style="display: flex; flex-direction: column; gap: 8px">
    <Button type="primary" block> Primary Block </Button>
    <Button block> Default Block </Button>
    <Button type="dashed" block> Dashed Block </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
<\/script>
`,O={style:{display:"flex",gap:"12px","flex-wrap":"wrap"}},P=m({__name:"ButtonClassNames",setup(y){return(s,t)=>(p(),u("div",O,[n(e(a),{type:"primary",icon:e(f),"class-names":{icon:"demo-tinted-icon"},styles:{icon:{color:"#fadb14"}}},{default:l(()=>[...t[0]||(t[0]=[o(" 自定义图标颜色 ",-1)])]),_:1},8,["icon"]),n(e(a),{icon:e(f),"icon-position":"end",styles:{root:{borderColor:"#722ed1",color:"#722ed1"}}},{default:l(()=>[...t[1]||(t[1]=[o(" 尾部图标 + 自定义边框 ",-1)])]),_:1},8,["icon"]),n(e(a),{loading:"","class-names":{loading:"demo-loading-emphasis"}},{default:l(()=>[...t[2]||(t[2]=[o(" 加载中 ",-1)])]),_:1})]))}}),z=b(P,[["__scopeId","data-v-679ab21f"]]),G=`<template>
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
`,N={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},T=m({__name:"ButtonDanger",setup(y){return(s,t)=>(p(),u("div",N,[n(e(a),{type:"primary",danger:""},{default:l(()=>[...t[0]||(t[0]=[o(" Primary Danger ",-1)])]),_:1}),n(e(a),{danger:""},{default:l(()=>[...t[1]||(t[1]=[o(" Default Danger ",-1)])]),_:1}),n(e(a),{type:"text",danger:""},{default:l(()=>[...t[2]||(t[2]=[o(" Text Danger ",-1)])]),_:1}),n(e(a),{type:"link",danger:""},{default:l(()=>[...t[3]||(t[3]=[o(" Link Danger ",-1)])]),_:1})]))}}),I=`<template>
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
`,V={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},A=m({__name:"ButtonDisabled",setup(y){return(s,t)=>(p(),u("div",V,[n(e(a),{type:"primary",disabled:""},{default:l(()=>[...t[0]||(t[0]=[o(" Primary Disabled ",-1)])]),_:1}),n(e(a),{disabled:""},{default:l(()=>[...t[1]||(t[1]=[o(" Default Disabled ",-1)])]),_:1}),n(e(a),{type:"dashed",disabled:""},{default:l(()=>[...t[2]||(t[2]=[o(" Dashed Disabled ",-1)])]),_:1}),n(e(a),{type:"text",disabled:""},{default:l(()=>[...t[3]||(t[3]=[o(" Text Disabled ",-1)])]),_:1}),n(e(a),{type:"link",disabled:""},{default:l(()=>[...t[4]||(t[4]=[o(" Link Disabled ",-1)])]),_:1})]))}}),E=`<template>
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
`,M={style:{padding:"16px",background:"#1677ff"}},H={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},R=m({__name:"ButtonGhost",setup(y){return(s,t)=>(p(),u("div",M,[i("div",H,[n(e(a),{type:"primary",ghost:""},{default:l(()=>[...t[0]||(t[0]=[o(" Primary Ghost ",-1)])]),_:1}),n(e(a),{ghost:""},{default:l(()=>[...t[1]||(t[1]=[o(" Default Ghost ",-1)])]),_:1}),n(e(a),{type:"dashed",ghost:""},{default:l(()=>[...t[2]||(t[2]=[o(" Dashed Ghost ",-1)])]),_:1})])]))}}),j=`<template>
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
`,J={style:{display:"flex","flex-direction":"column",gap:"16px"}},Q={style:{display:"flex",gap:"8px"}},q={style:{display:"flex",gap:"8px"}},F=m({__name:"ButtonHref",setup(y){return(s,t)=>(p(),u("div",J,[i("div",Q,[n(e(a),{type:"primary",href:"https://ant.design",target:"_blank"},{default:l(()=>[...t[0]||(t[0]=[o(" Link Button ",-1)])]),_:1}),n(e(a),{type:"link",href:"https://ant.design",target:"_blank"},{default:l(()=>[...t[1]||(t[1]=[o(" Link Type ",-1)])]),_:1})]),i("div",q,[n(e(a),{type:"primary",href:"https://ant.design",disabled:""},{default:l(()=>[...t[2]||(t[2]=[o(" Disabled Link ",-1)])]),_:1})])]))}}),K=`<template>
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
import { Button } from '../../../components'
<\/script>
`,U={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},W=m({__name:"ButtonIcon",setup(y){return(s,t)=>(p(),u("div",U,[n(e(a),{type:"primary",icon:e(f)},{default:l(()=>[...t[0]||(t[0]=[o(" Search ",-1)])]),_:1},8,["icon"]),n(e(a),{type:"primary",icon:e(f)},null,8,["icon"]),n(e(a),{type:"primary",icon:e(k)},{default:l(()=>[...t[1]||(t[1]=[o(" Confirm ",-1)])]),_:1},8,["icon"]),n(e(a),{type:"dashed",icon:e(D)},{default:l(()=>[...t[2]||(t[2]=[o(" Cancel ",-1)])]),_:1},8,["icon"])]))}}),X=`<template>
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
`,Y={style:{display:"flex","flex-direction":"column",gap:"16px"}},Z={style:{display:"flex",gap:"8px"}},tt={style:{display:"flex",gap:"8px"}},nt=m({__name:"ButtonIconPosition",setup(y){return(s,t)=>(p(),u("div",Y,[i("div",Z,[n(e(a),{type:"primary",icon:e(f)},{default:l(()=>[...t[0]||(t[0]=[o(" Search ",-1)])]),_:1},8,["icon"]),n(e(a),{type:"primary",icon:e(f),"icon-position":"end"},{default:l(()=>[...t[1]||(t[1]=[o(" Search ",-1)])]),_:1},8,["icon"])]),i("div",tt,[n(e(a),{type:"default",icon:e(B)},{default:l(()=>[...t[2]||(t[2]=[o(" Download ",-1)])]),_:1},8,["icon"]),n(e(a),{type:"default",icon:e(B),"icon-position":"end"},{default:l(()=>[...t[3]||(t[3]=[o(" Download ",-1)])]),_:1},8,["icon"])])]))}}),et=`<template>
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
import { Button } from '../../../components'
import { SearchOutlined, DownloadOutlined } from '../../../components/icon/icons'
<\/script>
`,ot={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},dt=m({__name:"ButtonLoading",setup(y){const s=x(!1),t=()=>{s.value=!0,setTimeout(()=>{s.value=!1},2e3)};return(g,d)=>(p(),u("div",ot,[n(e(a),{type:"primary",loading:""},{default:l(()=>[...d[0]||(d[0]=[o(" Loading ",-1)])]),_:1}),n(e(a),{type:"primary",size:"small",loading:""},{default:l(()=>[...d[1]||(d[1]=[o(" Loading ",-1)])]),_:1}),n(e(a),{type:"primary",loading:s.value,onClick:t},{default:l(()=>[...d[2]||(d[2]=[o(" Click me! ",-1)])]),_:1},8,["loading"])]))}}),lt=`<template>
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
`,it={style:{display:"flex","flex-direction":"column",gap:"16px"}},at={style:{display:"flex",gap:"8px"}},st=m({__name:"ButtonLoadingDelay",setup(y){const s=x(!1),t=()=>{console.log("Button clicked")},g=()=>{s.value=!s.value};return(d,r)=>(p(),u("div",it,[i("div",at,[n(e(a),{type:"primary",loading:{delay:500},onClick:t},{default:l(()=>[...r[0]||(r[0]=[o(" Click me (500ms delay) ",-1)])]),_:1}),n(e(a),{type:"primary",loading:s.value,onClick:g},{default:l(()=>[o(_(s.value?"Loading...":"Click to load"),1)]),_:1},8,["loading"])])]))}}),rt=`<template>
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
import { Button } from '../../../components'

const loading = ref(false)

const handleClick = () => {
  console.log('Button clicked')
}

const toggleLoading = () => {
  loading.value = !loading.value
}
<\/script>
`,pt={style:{display:"flex",gap:"8px","align-items":"center"}},ut=m({__name:"ButtonShape",setup(y){return(s,t)=>(p(),u("div",pt,[n(e(a),{type:"primary",shape:"circle",icon:e(f)},null,8,["icon"]),n(e(a),{type:"primary",shape:"circle"},{default:l(()=>[...t[0]||(t[0]=[o(" A ",-1)])]),_:1}),n(e(a),{type:"primary",shape:"round"},{default:l(()=>[...t[1]||(t[1]=[o(" Round ",-1)])]),_:1}),n(e(a),{type:"primary"},{default:l(()=>[...t[2]||(t[2]=[o(" Default ",-1)])]),_:1})]))}}),yt=`<template>
  <div style="display: flex; gap: 8px; align-items: center">
    <Button type="primary" shape="circle" :icon="SearchOutlined" />
    <Button type="primary" shape="circle"> A </Button>
    <Button type="primary" shape="round"> Round </Button>
    <Button type="primary"> Default </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '../../../components'
import { SearchOutlined } from '../../../components/icon/icons'
<\/script>
`,mt={style:{display:"flex",gap:"8px","align-items":"center"}},ft=m({__name:"ButtonSize",setup(y){return(s,t)=>(p(),u("div",mt,[n(e(a),{type:"primary",size:"large"},{default:l(()=>[...t[0]||(t[0]=[o(" Large ",-1)])]),_:1}),n(e(a),{type:"primary"},{default:l(()=>[...t[1]||(t[1]=[o(" Middle ",-1)])]),_:1}),n(e(a),{type:"primary",size:"small"},{default:l(()=>[...t[2]||(t[2]=[o(" Small ",-1)])]),_:1})]))}}),gt=`<template>
  <div style="display: flex; gap: 8px; align-items: center">
    <Button type="primary" size="large"> Large </Button>
    <Button type="primary"> Middle </Button>
    <Button type="primary" size="small"> Small </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
<\/script>
`,ct={class:"markdown-body"},kt={__name:"button",setup(y,{expose:s}){return s({frontmatter:{}}),(g,d)=>{const r=v("DemoBlock");return p(),u("div",ct,[d[0]||(d[0]=c('<h1 id="button-" tabindex="-1">Button 按钮</h1><p>按钮用于开始一个即时操作。</p><h2 id="" tabindex="-1">何时使用</h2><p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p><p>在 ant-design-hmfw 中我们提供了五种按钮。</p><ul><li>主按钮：用于主行动点，一个操作区域只能有一个主按钮。</li><li>默认按钮：用于没有主次之分的一组行动点。</li><li>虚线按钮：常用于添加操作。</li><li>文本按钮：用于最次级的行动点。</li><li>链接按钮：一般用于链接，即导航至某位置。</li></ul><p>以及四种状态属性与上面配合使用。</p><ul><li>危险：删除/移动/修改权限等危险操作，一般需要二次确认。</li><li>禁用：行动点不可用的时候，一般需要文案解释。</li><li>加载中：用于异步操作等待反馈的时候，也可以避免多次提交。</li><li>Ghost：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">按钮类型</h3><p>按钮有五种类型：主按钮、默认按钮、虚线按钮、文本按钮和链接按钮。</p>',11)),n(r,{title:"按钮类型",source:e(S)},{default:l(()=>[n(w)]),_:1},8,["source"]),d[1]||(d[1]=i("h3",{id:"-3",tabindex:"-1"},"按钮尺寸",-1)),d[2]||(d[2]=i("p",null,"按钮有大、中、小三种尺寸。",-1)),d[3]||(d[3]=i("p",null,[o("通过设置 "),i("code",null,"size"),o(" 为 "),i("code",null,"large"),o(),i("code",null,"small"),o(" 分别把按钮设为大、小尺寸。若不设置 "),i("code",null,"size"),o("，则尺寸为中。")],-1)),n(r,{title:"按钮尺寸",source:e(gt)},{default:l(()=>[n(ft)]),_:1},8,["source"]),d[4]||(d[4]=i("h3",{id:"-4",tabindex:"-1"},"禁用状态",-1)),d[5]||(d[5]=i("p",null,[o("添加 "),i("code",null,"disabled"),o(" 属性即可让按钮处于不可用状态，同时按钮样式也会改变。")],-1)),n(r,{title:"禁用状态",source:e(E)},{default:l(()=>[n(A)]),_:1},8,["source"]),d[6]||(d[6]=i("h3",{id:"-5",tabindex:"-1"},"加载状态",-1)),d[7]||(d[7]=i("p",null,[o("添加 "),i("code",null,"loading"),o(" 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。")],-1)),n(r,{title:"加载状态",source:e(lt)},{default:l(()=>[n(dt)]),_:1},8,["source"]),d[8]||(d[8]=i("h3",{id:"-6",tabindex:"-1"},"危险按钮",-1)),d[9]||(d[9]=i("p",null,"危险按钮用于删除/移动/修改权限等危险操作。",-1)),n(r,{title:"危险按钮",source:e(I)},{default:l(()=>[n(T)]),_:1},8,["source"]),d[10]||(d[10]=i("h3",{id:"block-",tabindex:"-1"},"Block 按钮",-1)),d[11]||(d[11]=i("p",null,[i("code",null,"block"),o(" 属性将使按钮适合其父宽度。")],-1)),n(r,{title:"Block 按钮",source:e(L)},{default:l(()=>[n($)]),_:1},8,["source"]),d[12]||(d[12]=i("h3",{id:"ghost-",tabindex:"-1"},"Ghost 按钮",-1)),d[13]||(d[13]=i("p",null,"幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。",-1)),n(r,{title:"Ghost 按钮",source:e(j)},{default:l(()=>[n(R)]),_:1},8,["source"]),d[14]||(d[14]=i("h3",{id:"-7",tabindex:"-1"},"图标按钮",-1)),d[15]||(d[15]=i("p",null,[o("当需要在 Button 内嵌入 Icon 时，可以设置 "),i("code",null,"icon"),o(" 属性。")],-1)),n(r,{title:"图标按钮",source:e(X)},{default:l(()=>[n(W)]),_:1},8,["source"]),d[16]||(d[16]=i("h3",{id:"-8",tabindex:"-1"},"按钮形状",-1)),d[17]||(d[17]=i("p",null,"按钮有多种形状：默认、圆形、圆角。",-1)),n(r,{title:"按钮形状",source:e(yt)},{default:l(()=>[n(ut)]),_:1},8,["source"]),d[18]||(d[18]=i("h3",{id:"-9",tabindex:"-1"},"图标位置",-1)),d[19]||(d[19]=i("p",null,[o("可以通过 "),i("code",null,"iconPosition"),o(" 属性设置图标在按钮中的位置。")],-1)),n(r,{title:"图标位置",source:e(et)},{default:l(()=>[n(nt)]),_:1},8,["source"]),d[20]||(d[20]=i("h3",{id:"-10",tabindex:"-1"},"链接按钮",-1)),d[21]||(d[21]=i("p",null,[o("设置 "),i("code",null,"href"),o(" 属性后，按钮将渲染为 "),i("code",null,"<a>"),o(" 标签。")],-1)),n(r,{title:"链接按钮",source:e(K)},{default:l(()=>[n(F)]),_:1},8,["source"]),d[22]||(d[22]=i("h3",{id:"-11",tabindex:"-1"},"延迟加载",-1)),d[23]||(d[23]=i("p",null,[o("通过设置 "),i("code",null,"loading"),o(" 为对象并指定 "),i("code",null,"delay"),o(" 属性，可以延迟显示加载状态。")],-1)),n(r,{title:"延迟加载",source:e(rt)},{default:l(()=>[n(st)]),_:1},8,["source"]),d[24]||(d[24]=i("h3",{id:"-classname--style",tabindex:"-1"},"语义化 className 与 style",-1)),d[25]||(d[25]=i("p",null,[o("通过 "),i("code",null,"classNames"),o(" / "),i("code",null,"styles"),o(" 对 root、icon、loading 等子元素做细粒度样式控制。")],-1)),n(r,{title:"语义化 className 与 style",source:e(G)},{default:l(()=>[n(z)]),_:1},8,["source"]),d[26]||(d[26]=c('<h2 id="api" tabindex="-1">API</h2><h3 id="button-props" tabindex="-1">Button Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>设置按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39; | &#39;dashed&#39; | &#39;text&#39; | &#39;link&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>size</td><td>设置按钮大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>shape</td><td>设置按钮形状</td><td><code>&#39;default&#39; | &#39;circle&#39; | &#39;round&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>htmlType</td><td>设置 button 原生的 type 值</td><td><code>&#39;submit&#39; | &#39;button&#39; | &#39;reset&#39;</code></td><td><code>&#39;button&#39;</code></td></tr><tr><td>loading</td><td>设置按钮载入状态</td><td><code>boolean | { delay?: number }</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>设置按钮失效状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>danger</td><td>设置危险按钮</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>block</td><td>将按钮宽度调整为其父宽度的选项</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>ghost</td><td>幽灵属性，使按钮背景透明</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>设置按钮的图标组件</td><td><code>IconComponent</code></td><td>-</td></tr><tr><td>iconPosition</td><td>设置图标位置</td><td><code>&#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;start&#39;</code></td></tr><tr><td>href</td><td>点击跳转的地址，指定此属性后按钮渲染为 a 标签</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>相当于 a 标签的 target 属性，href 存在时生效</td><td><code>string</code></td><td>-</td></tr><tr><td>autoInsertSpace</td><td>是否在两个汉字之间插入空格</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>classNames</td><td>语义化结构 className（细粒度控制图标、loading 等子元素）</td><td><code>{ root?: string; icon?: string; loading?: string }</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style</td><td><code>{ root?: CSSProperties; icon?: CSSProperties; loading?: CSSProperties }</code></td><td>-</td></tr></tbody></table><h3 id="button-events" tabindex="-1">Button Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时的回调</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="button-slots" tabindex="-1">Button Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>按钮内容</td></tr></tbody></table>',7))])}}};export{kt as default};
