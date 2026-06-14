import{B as f}from"./Button-mNkoEchB.js";import{E as s,P as y}from"./Empty-DNoevUMX.js";import{o as c,A as m,i as g,R as p,n,K as d,m as r,k as E,h as e,J as h,v as x,E as _,H as b,l as S}from"./index-B09KCCs0.js";import"./icons-n88SZ_u-.js";import"./cls-S9IiI6wd.js";import"./Icon-BGDem5mI.js";const k=c({__name:"EmptyAction",setup(a){function i(){console.log("创建")}return(l,o)=>(m(),g(d(s),{description:"暂无数据"},{default:p(()=>[n(d(f),{onClick:i},{default:p(()=>[...o[0]||(o[0]=[r("立即创建",-1)])]),_:1})]),_:1}))}}),v=`<template>
  <Empty description="暂无数据">
    <Button @click="onCreate">立即创建</Button>
  </Empty>
</template>

<script setup lang="ts">
import { Empty, Button } from 'ant-design-hmfw'

function onCreate() {
  console.log('创建')
}
<\/script>
`,w=c({__name:"EmptyBasic",setup(a){return(i,l)=>(m(),g(d(s)))}}),B=`<template>
  <Empty />
</template>

<script setup lang="ts">
import { Empty } from 'ant-design-hmfw'
<\/script>
`,P=c({__name:"EmptyCustomDescription",setup(a){return(i,l)=>(m(),g(d(s),{description:"暂无数据，请稍后再试"}))}}),D=`<template>
  <Empty description="暂无数据，请稍后再试" />
</template>

<script setup lang="ts">
import { Empty } from 'ant-design-hmfw'
<\/script>
`,I=["data-theme"],C={style:{"margin-left":"12px"}},A=["data-theme"],M=c({__name:"EmptyDark",setup(a){const i=_("dark");return(l,o)=>(m(),E("div",null,[o[4]||(o[4]=e("p",{style:{"margin-bottom":"12px"}},"切换主题预览插画配色（暗黑模式下默认插画自动适配深色背景）：",-1)),e("div",{"data-theme":i.value,style:{"margin-bottom":"12px"}},[n(d(f),{onClick:o[0]||(o[0]=t=>i.value="light")},{default:p(()=>[...o[2]||(o[2]=[r("浅色",-1)])]),_:1}),n(d(f),{onClick:o[1]||(o[1]=t=>i.value="dark")},{default:p(()=>[...o[3]||(o[3]=[r("暗黑",-1)])]),_:1}),e("span",C,"当前："+h(i.value),1)],8,I),e("div",{"data-theme":i.value,style:x({padding:"24px",borderRadius:"8px",background:i.value==="dark"?"#141414":"#ffffff",color:i.value==="dark"?"rgba(255,255,255,0.65)":"inherit"})},[n(d(s),{description:"暗黑模式下的空状态"})],12,A)]))}}),N=`<template>
  <div>
    <p style="margin-bottom: 12px">切换主题预览插画配色（暗黑模式下默认插画自动适配深色背景）：</p>
    <div :data-theme="theme" style="margin-bottom: 12px">
      <Button @click="theme = 'light'">浅色</Button>
      <Button @click="theme = 'dark'">暗黑</Button>
      <span style="margin-left: 12px">当前：{{ theme }}</span>
    </div>
    <div
      :data-theme="theme"
      :style="{
        padding: '24px',
        borderRadius: '8px',
        background: theme === 'dark' ? '#141414' : '#ffffff',
        color: theme === 'dark' ? 'rgba(255,255,255,0.65)' : 'inherit',
      }"
    >
      <Empty description="暗黑模式下的空状态" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Empty, Button } from 'ant-design-hmfw'

// 通过祖先元素的 data-theme="dark" / data-theme="light" 切换插画配色
// 也可使用 .hmfw-theme-dark / .hmfw-theme-light 类，或直接跟随系统配色
const theme = ref<'light' | 'dark'>('dark')
<\/script>
`,$={style:{display:"flex",gap:"32px","align-items":"flex-end","flex-wrap":"wrap"}},R=c({__name:"EmptyImageSize",setup(a){return(i,l)=>(m(),E("div",$,[n(d(s),{"image-width":48,"image-height":32,description:"小尺寸"}),n(d(s),{description:"默认尺寸"}),n(d(s),{"image-width":160,"image-height":100,description:"大尺寸"}),n(d(s),{"image-style":{height:"64px"},description:"imageStyle 控制"})]))}}),T=`<template>
  <div style="display: flex; gap: 32px; align-items: flex-end; flex-wrap: wrap">
    <Empty :image-width="48" :image-height="32" description="小尺寸" />
    <Empty description="默认尺寸" />
    <Empty :image-width="160" :image-height="100" description="大尺寸" />
    <Empty :image-style="{ height: '64px' }" description="imageStyle 控制" />
  </div>
</template>

<script setup lang="ts">
import { Empty } from 'ant-design-hmfw'
<\/script>
`,G=c({__name:"EmptySimple",setup(a){return(i,l)=>(m(),g(d(s),{image:d(y),description:"简约空状态"},null,8,["image"]))}}),L=`<template>
  <Empty :image="PRESENTED_IMAGE_SIMPLE" description="简约空状态" />
</template>

<script setup lang="ts">
import { Empty, PRESENTED_IMAGE_SIMPLE } from 'ant-design-hmfw'
<\/script>
`,H={class:"markdown-body"},U={__name:"empty",setup(a,{expose:i}){return i({frontmatter:{}}),(o,t)=>{const u=b("DemoBlock");return m(),E("div",H,[t[0]||(t[0]=e("h1",{id:"empty-",tabindex:"-1"},"Empty 空状态",-1)),t[1]||(t[1]=e("p",null,"空状态时的展示占位图。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"当目前没有数据时，用于显式的用户提示"),e("li",null,"初始化场景时的引导创建流程")],-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"简单的空状态展示。",-1)),n(u,{title:"基础用法",source:d(B)},{default:p(()=>[n(w)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"自定义描述",-1)),t[8]||(t[8]=e("p",null,"自定义描述文字。",-1)),n(u,{title:"自定义描述",source:d(D)},{default:p(()=>[n(P)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-4",tabindex:"-1"},"底部操作",-1)),t[10]||(t[10]=e("p",null,"带有操作按钮的空状态。",-1)),n(u,{title:"底部操作",source:d(v)},{default:p(()=>[n(k)]),_:1},8,["source"]),t[11]||(t[11]=e("h3",{id:"-5",tabindex:"-1"},"简约模式",-1)),t[12]||(t[12]=e("p",null,[r("通过 "),e("code",null,'image="simple"'),r("（或 "),e("code",null,"PRESENTED_IMAGE_SIMPLE"),r("）使用更紧凑的简约空状态。")],-1)),n(u,{title:"简约模式",source:d(L)},{default:p(()=>[n(G)]),_:1},8,["source"]),t[13]||(t[13]=e("h3",{id:"-6",tabindex:"-1"},"自定义图片尺寸",-1)),t[14]||(t[14]=e("p",null,[r("通过 "),e("code",null,"imageWidth"),r(" / "),e("code",null,"imageHeight"),r("（数字按 px 处理，也可传带单位字符串）或 "),e("code",null,"imageStyle"),r(" 控制默认插画的尺寸。")],-1)),n(u,{title:"自定义图片尺寸",source:d(T)},{default:p(()=>[n(R)]),_:1},8,["source"]),t[15]||(t[15]=e("h3",{id:"-7",tabindex:"-1"},"暗黑模式",-1)),t[16]||(t[16]=e("p",null,[r("默认插画的配色通过 CSS 变量驱动，会自动跟随系统配色（"),e("code",null,"prefers-color-scheme: dark"),r("）。也可在祖先元素上设置 "),e("code",null,'data-theme="dark"'),r("（或 "),e("code",null,".hmfw-theme-dark"),r(" 类）强制使用暗色插画。")],-1)),n(u,{title:"暗黑模式",source:d(N)},{default:p(()=>[n(M)]),_:1},8,["source"]),t[17]||(t[17]=S('<h2 id="api" tabindex="-1">API</h2><h3 id="empty-props" tabindex="-1">Empty Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>description</td><td>自定义描述内容，为 <code>false</code> 时不显示</td><td><code>string | false</code></td><td><code>&#39;暂无数据&#39;</code></td></tr><tr><td>image</td><td>显示图片：图片地址字符串，或预设标识 <code>&#39;default&#39;</code> / <code>&#39;simple&#39;</code>，为 <code>false</code> 时不显示</td><td><code>string | false</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>imageStyle</td><td>图片样式（优先级高于 imageWidth/imageHeight）</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>imageWidth</td><td>图片宽度，数字按 px 处理，亦可传带单位字符串</td><td><code>number | string</code></td><td>-</td></tr><tr><td>imageHeight</td><td>图片高度，数字按 px 处理，亦可传带单位字符串</td><td><code>number | string</code></td><td>-</td></tr></tbody></table><p>预设常量：<code>PRESENTED_IMAGE_DEFAULT</code>（<code>&#39;default&#39;</code>）、<code>PRESENTED_IMAGE_SIMPLE</code>（<code>&#39;simple&#39;</code>）。</p><h3 id="empty-slots" tabindex="-1">Empty Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>底部内容</td></tr><tr><td>description</td><td>自定义描述内容</td></tr><tr><td>image</td><td>自定义图片</td></tr></tbody></table>',6))])}}};export{U as default};
