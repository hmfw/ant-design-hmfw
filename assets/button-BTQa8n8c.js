import{B as l}from"./Button-4P7E4SUp.js";import{S as k}from"./SearchOutlined-C36BhIkG.js";import{C as x}from"./CheckOutlined-6CaY5mwu.js";import{C as B}from"./CloseOutlined-D06ut12I.js";import{d as m,o as u,b as c,f as p,c as n,e as s,w as o,g as a,_ as v,r as b,A as h,h as w,i as f}from"./index-Da5IF3ma.js";import{D as y}from"./DownloadOutlined-BkCnF_Rb.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-MZARQJkd.js";const _={style:{display:"flex","flex-direction":"column",gap:"16px"}},S={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},D={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},q={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},C={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},O=m({__name:"ButtonAutoInsertSpace",setup(r){return(d,t)=>(u(),c("div",_,[p("div",null,[t[4]||(t[4]=p("h4",{style:{margin:"0 0 8px 0","font-size":"14px",color:"rgba(0, 0, 0, 0.65)"}},"自动插入空格（默认开启）",-1)),p("div",S,[n(s(l),{type:"primary"},{default:o(()=>[...t[0]||(t[0]=[a("按钮",-1)])]),_:1}),n(s(l),null,{default:o(()=>[...t[1]||(t[1]=[a("确认",-1)])]),_:1}),n(s(l),{type:"dashed"},{default:o(()=>[...t[2]||(t[2]=[a("取消",-1)])]),_:1}),n(s(l),{type:"text"},{default:o(()=>[...t[3]||(t[3]=[a("删除",-1)])]),_:1})])]),p("div",null,[t[9]||(t[9]=p("h4",{style:{margin:"0 0 8px 0","font-size":"14px",color:"rgba(0, 0, 0, 0.65)"}},[a(" 禁用自动插入空格（"),p("code",null,':auto-insert-space="false"'),a("） ")],-1)),p("div",D,[n(s(l),{type:"primary","auto-insert-space":!1},{default:o(()=>[...t[5]||(t[5]=[a("按钮",-1)])]),_:1}),n(s(l),{"auto-insert-space":!1},{default:o(()=>[...t[6]||(t[6]=[a("确认",-1)])]),_:1}),n(s(l),{type:"dashed","auto-insert-space":!1},{default:o(()=>[...t[7]||(t[7]=[a("取消",-1)])]),_:1}),n(s(l),{type:"text","auto-insert-space":!1},{default:o(()=>[...t[8]||(t[8]=[a("删除",-1)])]),_:1})])]),p("div",null,[t[14]||(t[14]=p("h4",{style:{margin:"0 0 8px 0","font-size":"14px",color:"rgba(0, 0, 0, 0.65)"}},"非两个汉字（不插入空格）",-1)),p("div",q,[n(s(l),{type:"primary"},{default:o(()=>[...t[10]||(t[10]=[a("确认按钮",-1)])]),_:1}),n(s(l),null,{default:o(()=>[...t[11]||(t[11]=[a("一",-1)])]),_:1}),n(s(l),{type:"dashed"},{default:o(()=>[...t[12]||(t[12]=[a("OK",-1)])]),_:1}),n(s(l),{type:"text"},{default:o(()=>[...t[13]||(t[13]=[a("删除操作",-1)])]),_:1})])]),p("div",null,[t[18]||(t[18]=p("h4",{style:{margin:"0 0 8px 0","font-size":"14px",color:"rgba(0, 0, 0, 0.65)"}},"带图标时不插入空格",-1)),p("div",C,[n(s(l),{type:"primary",icon:s(k)},{default:o(()=>[...t[15]||(t[15]=[a("搜索",-1)])]),_:1},8,["icon"]),n(s(l),{icon:s(x)},{default:o(()=>[...t[16]||(t[16]=[a("确认",-1)])]),_:1},8,["icon"]),n(s(l),{type:"dashed",icon:s(B)},{default:o(()=>[...t[17]||(t[17]=[a("关闭",-1)])]),_:1},8,["icon"])])])]))}}),$=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <h4 style="margin: 0 0 8px 0; font-size: 14px; color: rgba(0, 0, 0, 0.65)">自动插入空格（默认开启）</h4>
      <div style="display: flex; gap: 8px; flex-wrap: wrap">
        <Button type="primary">按钮</Button>
        <Button>确认</Button>
        <Button type="dashed">取消</Button>
        <Button type="text">删除</Button>
      </div>
    </div>

    <div>
      <h4 style="margin: 0 0 8px 0; font-size: 14px; color: rgba(0, 0, 0, 0.65)">
        禁用自动插入空格（<code>:auto-insert-space="false"</code>）
      </h4>
      <div style="display: flex; gap: 8px; flex-wrap: wrap">
        <Button type="primary" :auto-insert-space="false">按钮</Button>
        <Button :auto-insert-space="false">确认</Button>
        <Button type="dashed" :auto-insert-space="false">取消</Button>
        <Button type="text" :auto-insert-space="false">删除</Button>
      </div>
    </div>

    <div>
      <h4 style="margin: 0 0 8px 0; font-size: 14px; color: rgba(0, 0, 0, 0.65)">非两个汉字（不插入空格）</h4>
      <div style="display: flex; gap: 8px; flex-wrap: wrap">
        <Button type="primary">确认按钮</Button>
        <Button>一</Button>
        <Button type="dashed">OK</Button>
        <Button type="text">删除操作</Button>
      </div>
    </div>

    <div>
      <h4 style="margin: 0 0 8px 0; font-size: 14px; color: rgba(0, 0, 0, 0.65)">带图标时不插入空格</h4>
      <div style="display: flex; gap: 8px; flex-wrap: wrap">
        <Button type="primary" :icon="SearchOutlined">搜索</Button>
        <Button :icon="CheckOutlined">确认</Button>
        <Button type="dashed" :icon="CloseOutlined">关闭</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchOutlined, CheckOutlined, CloseOutlined } from '@hmfw/icons'
import { Button } from '@hmfw/ant-design'
<\/script>
`,N={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},z=m({__name:"ButtonBasic",setup(r){return(d,t)=>(u(),c("div",N,[n(s(l),{type:"primary"},{default:o(()=>[...t[0]||(t[0]=[a(" Primary Button ",-1)])]),_:1}),n(s(l),null,{default:o(()=>[...t[1]||(t[1]=[a("Default Button",-1)])]),_:1}),n(s(l),{type:"dashed"},{default:o(()=>[...t[2]||(t[2]=[a(" Dashed Button ",-1)])]),_:1}),n(s(l),{type:"text"},{default:o(()=>[...t[3]||(t[3]=[a(" Text Button ",-1)])]),_:1}),n(s(l),{type:"link"},{default:o(()=>[...t[4]||(t[4]=[a(" Link Button ",-1)])]),_:1})]))}}),L=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary"> Primary Button </Button>
    <Button>Default Button</Button>
    <Button type="dashed"> Dashed Button </Button>
    <Button type="text"> Text Button </Button>
    <Button type="link"> Link Button </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@hmfw/ant-design'
<\/script>
`,P={style:{display:"flex","flex-direction":"column",gap:"8px"}},T=m({__name:"ButtonBlock",setup(r){return(d,t)=>(u(),c("div",P,[n(s(l),{type:"primary",block:""},{default:o(()=>[...t[0]||(t[0]=[a(" Primary Block ",-1)])]),_:1}),n(s(l),{block:""},{default:o(()=>[...t[1]||(t[1]=[a(" Default Block ",-1)])]),_:1}),n(s(l),{type:"dashed",block:""},{default:o(()=>[...t[2]||(t[2]=[a(" Dashed Block ",-1)])]),_:1})]))}}),E=`<template>
  <div style="display: flex; flex-direction: column; gap: 8px">
    <Button type="primary" block> Primary Block </Button>
    <Button block> Default Block </Button>
    <Button type="dashed" block> Dashed Block </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@hmfw/ant-design'
<\/script>
`,I={style:{display:"flex",gap:"12px","flex-wrap":"wrap"}},G=m({__name:"ButtonClassNames",setup(r){return(d,t)=>(u(),c("div",I,[n(s(l),{type:"primary",icon:s(k),"class-names":{icon:"demo-tinted-icon"},styles:{icon:{color:"#fadb14"}}},{default:o(()=>[...t[0]||(t[0]=[a(" 自定义图标颜色 ",-1)])]),_:1},8,["icon"]),n(s(l),{icon:s(k),"icon-position":"end",styles:{root:{borderColor:"#722ed1",color:"#722ed1"}}},{default:o(()=>[...t[1]||(t[1]=[a(" 尾部图标 + 自定义边框 ",-1)])]),_:1},8,["icon"]),n(s(l),{loading:"","class-names":{loading:"demo-loading-emphasis"}},{default:o(()=>[...t[2]||(t[2]=[a(" 加载中 ",-1)])]),_:1})]))}}),A=v(G,[["__scopeId","data-v-5791455b"]]),M=`<template>
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
import { SearchOutlined } from '@hmfw/icons'
import { Button } from '@hmfw/ant-design'
<\/script>

<style scoped>
:deep(.demo-tinted-icon) {
  filter: drop-shadow(0 0 2px rgba(250, 219, 20, 0.6));
}
:deep(.demo-loading-emphasis) {
  font-size: 16px;
}
</style>
`,R={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},V=m({__name:"ButtonDanger",setup(r){return(d,t)=>(u(),c("div",R,[n(s(l),{type:"primary",danger:""},{default:o(()=>[...t[0]||(t[0]=[a(" Primary Danger ",-1)])]),_:1}),n(s(l),{danger:""},{default:o(()=>[...t[1]||(t[1]=[a(" Default Danger ",-1)])]),_:1}),n(s(l),{type:"text",danger:""},{default:o(()=>[...t[2]||(t[2]=[a(" Text Danger ",-1)])]),_:1}),n(s(l),{type:"link",danger:""},{default:o(()=>[...t[3]||(t[3]=[a(" Link Danger ",-1)])]),_:1})]))}}),F=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" danger> Primary Danger </Button>
    <Button danger> Default Danger </Button>
    <Button type="text" danger> Text Danger </Button>
    <Button type="link" danger> Link Danger </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@hmfw/ant-design'
<\/script>
`,H={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},K=m({__name:"ButtonDisabled",setup(r){return(d,t)=>(u(),c("div",H,[n(s(l),{type:"primary",disabled:""},{default:o(()=>[...t[0]||(t[0]=[a(" Primary Disabled ",-1)])]),_:1}),n(s(l),{disabled:""},{default:o(()=>[...t[1]||(t[1]=[a(" Default Disabled ",-1)])]),_:1}),n(s(l),{type:"dashed",disabled:""},{default:o(()=>[...t[2]||(t[2]=[a(" Dashed Disabled ",-1)])]),_:1}),n(s(l),{type:"text",disabled:""},{default:o(()=>[...t[3]||(t[3]=[a(" Text Disabled ",-1)])]),_:1}),n(s(l),{type:"link",disabled:""},{default:o(()=>[...t[4]||(t[4]=[a(" Link Disabled ",-1)])]),_:1})]))}}),U=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" disabled> Primary Disabled </Button>
    <Button disabled> Default Disabled </Button>
    <Button type="dashed" disabled> Dashed Disabled </Button>
    <Button type="text" disabled> Text Disabled </Button>
    <Button type="link" disabled> Link Disabled </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@hmfw/ant-design'
<\/script>
`,j={style:{padding:"16px",background:"#1677ff"}},J={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},Q=m({__name:"ButtonGhost",setup(r){return(d,t)=>(u(),c("div",j,[p("div",J,[n(s(l),{type:"primary",ghost:""},{default:o(()=>[...t[0]||(t[0]=[a(" Primary Ghost ",-1)])]),_:1}),n(s(l),{ghost:""},{default:o(()=>[...t[1]||(t[1]=[a(" Default Ghost ",-1)])]),_:1}),n(s(l),{type:"dashed",ghost:""},{default:o(()=>[...t[2]||(t[2]=[a(" Dashed Ghost ",-1)])]),_:1})])]))}}),W=`<template>
  <div style="padding: 16px; background: #1677ff">
    <div style="display: flex; gap: 8px; flex-wrap: wrap">
      <Button type="primary" ghost> Primary Ghost </Button>
      <Button ghost> Default Ghost </Button>
      <Button type="dashed" ghost> Dashed Ghost </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@hmfw/ant-design'
<\/script>
`,X={style:{display:"flex","flex-direction":"column",gap:"16px"}},Y={style:{display:"flex",gap:"8px"}},Z={style:{display:"flex",gap:"8px"}},tt=m({__name:"ButtonHref",setup(r){return(d,t)=>(u(),c("div",X,[p("div",Y,[n(s(l),{type:"primary",href:"https://ant.design",target:"_blank"},{default:o(()=>[...t[0]||(t[0]=[a(" Link Button ",-1)])]),_:1}),n(s(l),{type:"link",href:"https://ant.design",target:"_blank"},{default:o(()=>[...t[1]||(t[1]=[a(" Link Type ",-1)])]),_:1})]),p("div",Z,[n(s(l),{type:"primary",href:"https://ant.design",disabled:""},{default:o(()=>[...t[2]||(t[2]=[a(" Disabled Link ",-1)])]),_:1})])]))}}),nt=`<template>
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
import { Button } from '@hmfw/ant-design'
<\/script>
`,st={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},at=m({__name:"ButtonIcon",setup(r){return(d,t)=>(u(),c("div",st,[n(s(l),{type:"primary",icon:s(k)},{default:o(()=>[...t[0]||(t[0]=[a(" Search ",-1)])]),_:1},8,["icon"]),n(s(l),{type:"primary",icon:s(k)},null,8,["icon"]),n(s(l),{type:"primary",icon:s(x)},{default:o(()=>[...t[1]||(t[1]=[a(" Confirm ",-1)])]),_:1},8,["icon"]),n(s(l),{type:"dashed",icon:s(B)},{default:o(()=>[...t[2]||(t[2]=[a(" Cancel ",-1)])]),_:1},8,["icon"])]))}}),ot=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" :icon="SearchOutlined"> Search </Button>
    <Button type="primary" :icon="SearchOutlined" />
    <Button type="primary" :icon="CheckOutlined"> Confirm </Button>
    <Button type="dashed" :icon="CloseOutlined"> Cancel </Button>
  </div>
</template>

<script setup lang="ts">
import { SearchOutlined, CheckOutlined, CloseOutlined } from '@hmfw/icons'
import { Button } from '@hmfw/ant-design'
<\/script>
`,et={style:{display:"flex","flex-direction":"column",gap:"16px"}},pt={style:{display:"flex",gap:"8px"}},lt={style:{display:"flex",gap:"8px"}},dt=m({__name:"ButtonIconPosition",setup(r){return(d,t)=>(u(),c("div",et,[p("div",pt,[n(s(l),{type:"primary",icon:s(k)},{default:o(()=>[...t[0]||(t[0]=[a(" Search ",-1)])]),_:1},8,["icon"]),n(s(l),{type:"primary",icon:s(k),"icon-position":"end"},{default:o(()=>[...t[1]||(t[1]=[a(" Search ",-1)])]),_:1},8,["icon"])]),p("div",lt,[n(s(l),{type:"default",icon:s(y)},{default:o(()=>[...t[2]||(t[2]=[a(" Download ",-1)])]),_:1},8,["icon"]),n(s(l),{type:"default",icon:s(y),"icon-position":"end"},{default:o(()=>[...t[3]||(t[3]=[a(" Download ",-1)])]),_:1},8,["icon"])])]))}}),it=`<template>
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
import { Button } from '@hmfw/ant-design'
import { SearchOutlined, DownloadOutlined } from '@hmfw/icons'
<\/script>
`,ut={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},ct=m({__name:"ButtonLoading",setup(r){const d=b(!1),t=()=>{d.value=!0,setTimeout(()=>{d.value=!1},2e3)};return(g,e)=>(u(),c("div",ut,[n(s(l),{type:"primary",loading:""},{default:o(()=>[...e[0]||(e[0]=[a(" Loading ",-1)])]),_:1}),n(s(l),{type:"primary",size:"small",loading:""},{default:o(()=>[...e[1]||(e[1]=[a(" Loading ",-1)])]),_:1}),n(s(l),{type:"primary",loading:d.value,onClick:t},{default:o(()=>[...e[2]||(e[2]=[a(" Click me! ",-1)])]),_:1},8,["loading"])]))}}),rt=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" loading> Loading </Button>
    <Button type="primary" size="small" loading> Loading </Button>
    <Button type="primary" :loading="loading" @click="handleClick"> Click me! </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@hmfw/ant-design'

const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
<\/script>
`,mt={style:{display:"flex","flex-direction":"column",gap:"16px"}},kt={style:{display:"flex",gap:"8px"}},gt=m({__name:"ButtonLoadingDelay",setup(r){const d=b(!1),t=()=>{console.log("Button clicked")},g=()=>{d.value=!d.value};return(e,i)=>(u(),c("div",mt,[p("div",kt,[n(s(l),{type:"primary",loading:{delay:500},onClick:t},{default:o(()=>[...i[0]||(i[0]=[a(" Click me (500ms delay) ",-1)])]),_:1}),n(s(l),{type:"primary",loading:d.value,onClick:g},{default:o(()=>[a(h(d.value?"Loading...":"Click to load"),1)]),_:1},8,["loading"])])]))}}),ft=`<template>
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
import { Button } from '@hmfw/ant-design'

const loading = ref(false)

const handleClick = () => {
  console.log('Button clicked')
}

const toggleLoading = () => {
  loading.value = !loading.value
}
<\/script>
`,yt={style:{display:"flex",gap:"8px","align-items":"center"}},xt=m({__name:"ButtonShape",setup(r){return(d,t)=>(u(),c("div",yt,[n(s(l),{type:"primary",shape:"circle",icon:s(k)},null,8,["icon"]),n(s(l),{type:"primary",shape:"circle"},{default:o(()=>[...t[0]||(t[0]=[a(" A ",-1)])]),_:1}),n(s(l),{type:"primary",shape:"round"},{default:o(()=>[...t[1]||(t[1]=[a(" Round ",-1)])]),_:1}),n(s(l),{type:"primary"},{default:o(()=>[...t[2]||(t[2]=[a(" Default ",-1)])]),_:1})]))}}),Bt=`<template>
  <div style="display: flex; gap: 8px; align-items: center">
    <Button type="primary" shape="circle" :icon="SearchOutlined" />
    <Button type="primary" shape="circle"> A </Button>
    <Button type="primary" shape="round"> Round </Button>
    <Button type="primary"> Default </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@hmfw/ant-design'
import { SearchOutlined } from '@hmfw/icons'
<\/script>
`,bt={style:{display:"flex",gap:"8px","align-items":"center"}},vt=m({__name:"ButtonSize",setup(r){return(d,t)=>(u(),c("div",bt,[n(s(l),{type:"primary",size:"large"},{default:o(()=>[...t[0]||(t[0]=[a(" Large ",-1)])]),_:1}),n(s(l),{type:"primary"},{default:o(()=>[...t[1]||(t[1]=[a(" Middle ",-1)])]),_:1}),n(s(l),{type:"primary",size:"small"},{default:o(()=>[...t[2]||(t[2]=[a(" Small ",-1)])]),_:1})]))}}),ht=`<template>
  <div style="display: flex; gap: 8px; align-items: center">
    <Button type="primary" size="large"> Large </Button>
    <Button type="primary"> Middle </Button>
    <Button type="primary" size="small"> Small </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@hmfw/ant-design'
<\/script>
`,wt={class:"markdown-body"},zt={__name:"button",setup(r,{expose:d}){return d({frontmatter:{}}),(g,e)=>{const i=w("DemoBlock");return u(),c("div",wt,[e[0]||(e[0]=f('<h1 id="button-按钮" tabindex="-1">Button 按钮</h1><p>按钮用于开始一个即时操作。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p><p>在 @hmfw/ant-design 中我们提供了五种按钮。</p><ul><li>主按钮：用于主行动点，一个操作区域只能有一个主按钮。</li><li>默认按钮：用于没有主次之分的一组行动点。</li><li>虚线按钮：常用于添加操作。</li><li>文本按钮：用于最次级的行动点。</li><li>链接按钮：一般用于链接，即导航至某位置。</li></ul><p>以及四种状态属性与上面配合使用。</p><ul><li>危险：删除/移动/修改权限等危险操作，一般需要二次确认。</li><li>禁用：行动点不可用的时候，一般需要文案解释。</li><li>加载中：用于异步操作等待反馈的时候，也可以避免多次提交。</li><li>Ghost：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="按钮类型" tabindex="-1">按钮类型</h3><p>按钮有五种类型：主按钮、默认按钮、虚线按钮、文本按钮和链接按钮。</p>',11)),n(i,{title:"按钮类型",source:s(L)},{default:o(()=>[n(z)]),_:1},8,["source"]),e[1]||(e[1]=p("h3",{id:"按钮尺寸",tabindex:"-1"},"按钮尺寸",-1)),e[2]||(e[2]=p("p",null,"按钮有大、中、小三种尺寸。",-1)),e[3]||(e[3]=p("p",null,[a("通过设置 "),p("code",null,"size"),a(" 为 "),p("code",null,"large"),a(),p("code",null,"small"),a(" 分别把按钮设为大、小尺寸。若不设置 "),p("code",null,"size"),a("，则尺寸为中。")],-1)),n(i,{title:"按钮尺寸",source:s(ht)},{default:o(()=>[n(vt)]),_:1},8,["source"]),e[4]||(e[4]=p("h3",{id:"禁用状态",tabindex:"-1"},"禁用状态",-1)),e[5]||(e[5]=p("p",null,[a("添加 "),p("code",null,"disabled"),a(" 属性即可让按钮处于不可用状态，同时按钮样式也会改变。")],-1)),n(i,{title:"禁用状态",source:s(U)},{default:o(()=>[n(K)]),_:1},8,["source"]),e[6]||(e[6]=p("h3",{id:"加载状态",tabindex:"-1"},"加载状态",-1)),e[7]||(e[7]=p("p",null,[a("添加 "),p("code",null,"loading"),a(" 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。")],-1)),n(i,{title:"加载状态",source:s(rt)},{default:o(()=>[n(ct)]),_:1},8,["source"]),e[8]||(e[8]=p("h3",{id:"危险按钮",tabindex:"-1"},"危险按钮",-1)),e[9]||(e[9]=p("p",null,"危险按钮用于删除/移动/修改权限等危险操作。",-1)),n(i,{title:"危险按钮",source:s(F)},{default:o(()=>[n(V)]),_:1},8,["source"]),e[10]||(e[10]=p("h3",{id:"block-按钮",tabindex:"-1"},"Block 按钮",-1)),e[11]||(e[11]=p("p",null,[p("code",null,"block"),a(" 属性将使按钮适合其父宽度。")],-1)),n(i,{title:"Block 按钮",source:s(E)},{default:o(()=>[n(T)]),_:1},8,["source"]),e[12]||(e[12]=p("h3",{id:"ghost-按钮",tabindex:"-1"},"Ghost 按钮",-1)),e[13]||(e[13]=p("p",null,"幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。",-1)),n(i,{title:"Ghost 按钮",source:s(W)},{default:o(()=>[n(Q)]),_:1},8,["source"]),e[14]||(e[14]=p("h3",{id:"图标按钮",tabindex:"-1"},"图标按钮",-1)),e[15]||(e[15]=p("p",null,[a("当需要在 Button 内嵌入 Icon 时，可以设置 "),p("code",null,"icon"),a(" 属性。")],-1)),n(i,{title:"图标按钮",source:s(ot)},{default:o(()=>[n(at)]),_:1},8,["source"]),e[16]||(e[16]=p("h3",{id:"按钮形状",tabindex:"-1"},"按钮形状",-1)),e[17]||(e[17]=p("p",null,"按钮有多种形状：默认、圆形、圆角。",-1)),n(i,{title:"按钮形状",source:s(Bt)},{default:o(()=>[n(xt)]),_:1},8,["source"]),e[18]||(e[18]=p("h3",{id:"图标位置",tabindex:"-1"},"图标位置",-1)),e[19]||(e[19]=p("p",null,[a("可以通过 "),p("code",null,"iconPosition"),a(" 属性设置图标在按钮中的位置。")],-1)),n(i,{title:"图标位置",source:s(it)},{default:o(()=>[n(dt)]),_:1},8,["source"]),e[20]||(e[20]=p("h3",{id:"链接按钮",tabindex:"-1"},"链接按钮",-1)),e[21]||(e[21]=p("p",null,[a("设置 "),p("code",null,"href"),a(" 属性后，按钮将渲染为 "),p("code",null,"<a>"),a(" 标签。")],-1)),n(i,{title:"链接按钮",source:s(nt)},{default:o(()=>[n(tt)]),_:1},8,["source"]),e[22]||(e[22]=p("h3",{id:"延迟加载",tabindex:"-1"},"延迟加载",-1)),e[23]||(e[23]=p("p",null,[a("通过设置 "),p("code",null,"loading"),a(" 为对象并指定 "),p("code",null,"delay"),a(" 属性，可以延迟显示加载状态。")],-1)),n(i,{title:"延迟加载",source:s(ft)},{default:o(()=>[n(gt)]),_:1},8,["source"]),e[24]||(e[24]=p("h3",{id:"两个汉字间距",tabindex:"-1"},"两个汉字间距",-1)),e[25]||(e[25]=p("p",null,[a("按钮内只有两个汉字时，默认会自动在两个汉字之间插入一个空格，使其更美观。可以通过设置 "),p("code",null,"autoInsertSpace"),a(" 为 "),p("code",null,"false"),a(" 来禁用此行为。")],-1)),n(i,{title:"两个汉字间距",source:s($)},{default:o(()=>[n(O)]),_:1},8,["source"]),e[26]||(e[26]=p("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),e[27]||(e[27]=p("p",null,[a("通过 "),p("code",null,"classNames"),a(" / "),p("code",null,"styles"),a(" 对 root、icon、loading 等子元素做细粒度样式控制。")],-1)),n(i,{title:"语义化 className 与 style",source:s(M)},{default:o(()=>[n(A)]),_:1},8,["source"]),e[28]||(e[28]=f(`<h2 id="api" tabindex="-1">API</h2><h3 id="button-props" tabindex="-1">Button Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>设置按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39; | &#39;dashed&#39; | &#39;text&#39; | &#39;link&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>size</td><td>设置按钮大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>shape</td><td>设置按钮形状</td><td><code>&#39;default&#39; | &#39;circle&#39; | &#39;round&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>htmlType</td><td>设置 button 原生的 type 值</td><td><code>&#39;submit&#39; | &#39;button&#39; | &#39;reset&#39;</code></td><td><code>&#39;button&#39;</code></td></tr><tr><td>loading</td><td>设置按钮载入状态</td><td><code>boolean | { delay?: number }</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>设置按钮失效状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>danger</td><td>设置危险按钮</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>block</td><td>将按钮宽度调整为其父宽度的选项</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>ghost</td><td>幽灵属性，使按钮背景透明</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>设置按钮的图标组件</td><td><code>IconComponent</code></td><td>-</td></tr><tr><td>iconPosition</td><td>设置图标位置</td><td><code>&#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;start&#39;</code></td></tr><tr><td>href</td><td>点击跳转的地址，指定此属性后按钮渲染为 a 标签</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>相当于 a 标签的 target 属性，href 存在时生效</td><td><code>string</code></td><td>-</td></tr><tr><td>autoInsertSpace</td><td>是否在两个汉字之间插入空格</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ButtonClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ButtonStyles</code></td><td>-</td></tr></tbody></table><h3 id="button-events" tabindex="-1">Button Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时的回调</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="button-slots" tabindex="-1">Button Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>按钮内容</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对按钮的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义图标样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SearchOutlined<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ icon: &#39;my-icon-wrapper&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 搜索 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义加载动画 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">loading</span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ loading: &#39;my-loading-emphasis&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 加载中 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义根节点样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ root: &#39;my-button-root&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 自定义按钮 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-icon-wrapper)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fadb14<span class="token punctuation">;</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>0 0 2px <span class="token function">rgba</span><span class="token punctuation">(</span>250<span class="token punctuation">,</span> 219<span class="token punctuation">,</span> 20<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-loading-emphasis)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-button-root)</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制图标 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SearchOutlined<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      icon: { color: &#39;#fadb14&#39;, fontSize: &#39;18px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    搜索
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义边框颜色 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
    <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SearchOutlined<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">icon-position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>end<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { borderColor: &#39;#722ed1&#39;, color: &#39;#722ed1&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    尾部图标
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>
    <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SearchOutlined<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { borderRadius: &#39;16px&#39; },
      icon: { fontSize: &#39;20px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    组合样式
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>加载状态时，<code>classNames.loading</code> 与 <code>classNames.icon</code> 会<strong>叠加</strong>应用在同一个 <code>&lt;span&gt;</code> 上</li><li>加载状态时，<code>styles.loading</code> 与 <code>styles.icon</code> 会<strong>合并</strong>应用，<code>styles.loading</code> 优先</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-button-loading</code>）合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Button 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-error-hover</code></td><td>错误色悬停态</td><td><code>#ff7875</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次级填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-fill-tertiary</code></td><td>三级填充色</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-color-link</code></td><td>链接色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-link-active</code></td><td>链接激活色</td><td><code>#0958d9</code></td></tr><tr><td><code>--hmfw-color-link-hover</code></td><td>链接悬停色</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-active</code></td><td>主题色激活态</td><td><code>#0958d9</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-white</code></td><td>纯白色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-font-family</code></td><td>字体族</td><td><code>-apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, ...</code></td></tr><tr><td><code>--hmfw-font-size</code></td><td>标准字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-lg</code></td><td>大号字号</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-font-size-sm</code></td><td>小号字号</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-line-height</code></td><td>标准行高</td><td><code>1.5714285714285714</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>小号圆角</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-box-shadow</code></td><td>基础阴影</td><td><code>0 1px 2px 0 rgba(0,0,0,0.03), 0 1px 6px -1px rgba(0,0,0,0.02), ...</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>缓入缓出曲线</td><td><code>cubic-bezier(0.645, 0.045, 0.355, 1)</code></td></tr></tbody></table>`,25))])}}};export{zt as default};
