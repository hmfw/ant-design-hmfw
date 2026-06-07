import{E as r,P as E}from"./Empty-T8wXMoWh.js";import{n as c,z as a,h as g,Q as p,g as e,J as d,j as f,I as h,m as n,u as y,D as x,G as _,l as o,k as b}from"./index-bv5A37HL.js";import"./cls-S9IiI6wd.js";const S=c({__name:"EmptyAction",setup(m){function i(){console.log("创建")}return(l,s)=>(a(),g(d(r),{description:"暂无数据"},{default:p(()=>[e("button",{onClick:i},"立即创建")]),_:1}))}}),k=`<template>
  <Empty description="暂无数据">
    <button @click="onCreate">立即创建</button>
  </Empty>
</template>

<script setup lang="ts">
import { Empty } from 'ant-design-hmfw'

function onCreate() {
  console.log('创建')
}
<\/script>
`,v=c({__name:"EmptyBasic",setup(m){return(i,l)=>(a(),g(d(r)))}}),w=`<template>
  <Empty />
</template>

<script setup lang="ts">
import { Empty } from 'ant-design-hmfw'
<\/script>
`,D=c({__name:"EmptyCustomDescription",setup(m){return(i,l)=>(a(),g(d(r),{description:"暂无数据，请稍后再试"}))}}),I=`<template>
  <Empty description="暂无数据，请稍后再试" />
</template>

<script setup lang="ts">
import { Empty } from 'ant-design-hmfw'
<\/script>
`,P=["data-theme"],C={style:{"margin-left":"12px"}},M=["data-theme"],A=c({__name:"EmptyDark",setup(m){const i=x("dark");return(l,s)=>(a(),f("div",null,[s[2]||(s[2]=e("p",{style:{"margin-bottom":"12px"}},"切换主题预览插画配色（暗黑模式下默认插画自动适配深色背景）：",-1)),e("div",{"data-theme":i.value,style:{"margin-bottom":"12px"}},[e("button",{onClick:s[0]||(s[0]=t=>i.value="light")},"浅色"),e("button",{onClick:s[1]||(s[1]=t=>i.value="dark")},"暗黑"),e("span",C,"当前："+h(i.value),1)],8,P),e("div",{"data-theme":i.value,style:y({padding:"24px",borderRadius:"8px",background:i.value==="dark"?"#141414":"#ffffff",color:i.value==="dark"?"rgba(255,255,255,0.65)":"inherit"})},[n(d(r),{description:"暗黑模式下的空状态"})],12,M)]))}}),N=`<template>
  <div>
    <p style="margin-bottom: 12px">切换主题预览插画配色（暗黑模式下默认插画自动适配深色背景）：</p>
    <div :data-theme="theme" style="margin-bottom: 12px">
      <button @click="theme = 'light'">浅色</button>
      <button @click="theme = 'dark'">暗黑</button>
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
import { Empty } from 'ant-design-hmfw'

// 通过祖先元素的 data-theme="dark" / data-theme="light" 切换插画配色
// 也可使用 .hmfw-theme-dark / .hmfw-theme-light 类，或直接跟随系统配色
const theme = ref<'light' | 'dark'>('dark')
<\/script>
`,$={style:{display:"flex",gap:"32px","align-items":"flex-end","flex-wrap":"wrap"}},B=c({__name:"EmptyImageSize",setup(m){return(i,l)=>(a(),f("div",$,[n(d(r),{"image-width":48,"image-height":32,description:"小尺寸"}),n(d(r),{description:"默认尺寸"}),n(d(r),{"image-width":160,"image-height":100,description:"大尺寸"}),n(d(r),{"image-style":{height:"64px"},description:"imageStyle 控制"})]))}}),R=`<template>
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
`,T=c({__name:"EmptySimple",setup(m){return(i,l)=>(a(),g(d(r),{image:d(E),description:"简约空状态"},null,8,["image"]))}}),G=`<template>
  <Empty :image="PRESENTED_IMAGE_SIMPLE" description="简约空状态" />
</template>

<script setup lang="ts">
import { Empty, PRESENTED_IMAGE_SIMPLE } from 'ant-design-hmfw'
<\/script>
`,L={class:"markdown-body"},W={__name:"empty",setup(m,{expose:i}){return i({frontmatter:{}}),(s,t)=>{const u=_("DemoBlock");return a(),f("div",L,[t[0]||(t[0]=e("h1",{id:"empty-",tabindex:"-1"},"Empty 空状态",-1)),t[1]||(t[1]=e("p",null,"空状态时的展示占位图。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"当目前没有数据时，用于显式的用户提示"),e("li",null,"初始化场景时的引导创建流程")],-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"简单的空状态展示。",-1)),n(u,{title:"基础用法",source:d(w)},{default:p(()=>[n(v)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"自定义描述",-1)),t[8]||(t[8]=e("p",null,"自定义描述文字。",-1)),n(u,{title:"自定义描述",source:d(I)},{default:p(()=>[n(D)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-4",tabindex:"-1"},"底部操作",-1)),t[10]||(t[10]=e("p",null,"带有操作按钮的空状态。",-1)),n(u,{title:"底部操作",source:d(k)},{default:p(()=>[n(S)]),_:1},8,["source"]),t[11]||(t[11]=e("h3",{id:"-5",tabindex:"-1"},"简约模式",-1)),t[12]||(t[12]=e("p",null,[o("通过 "),e("code",null,'image="simple"'),o("（或 "),e("code",null,"PRESENTED_IMAGE_SIMPLE"),o("）使用更紧凑的简约空状态。")],-1)),n(u,{title:"简约模式",source:d(G)},{default:p(()=>[n(T)]),_:1},8,["source"]),t[13]||(t[13]=e("h3",{id:"-6",tabindex:"-1"},"自定义图片尺寸",-1)),t[14]||(t[14]=e("p",null,[o("通过 "),e("code",null,"imageWidth"),o(" / "),e("code",null,"imageHeight"),o("（数字按 px 处理，也可传带单位字符串）或 "),e("code",null,"imageStyle"),o(" 控制默认插画的尺寸。")],-1)),n(u,{title:"自定义图片尺寸",source:d(R)},{default:p(()=>[n(B)]),_:1},8,["source"]),t[15]||(t[15]=e("h3",{id:"-7",tabindex:"-1"},"暗黑模式",-1)),t[16]||(t[16]=e("p",null,[o("默认插画的配色通过 CSS 变量驱动，会自动跟随系统配色（"),e("code",null,"prefers-color-scheme: dark"),o("）。也可在祖先元素上设置 "),e("code",null,'data-theme="dark"'),o("（或 "),e("code",null,".hmfw-theme-dark"),o(" 类）强制使用暗色插画。")],-1)),n(u,{title:"暗黑模式",source:d(N)},{default:p(()=>[n(A)]),_:1},8,["source"]),t[17]||(t[17]=b('<h2 id="api" tabindex="-1">API</h2><h3 id="empty-props" tabindex="-1">Empty Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>description</td><td>自定义描述内容，为 <code>false</code> 时不显示</td><td><code>string | false</code></td><td><code>&#39;暂无数据&#39;</code></td></tr><tr><td>image</td><td>显示图片：图片地址字符串，或预设标识 <code>&#39;default&#39;</code> / <code>&#39;simple&#39;</code>，为 <code>false</code> 时不显示</td><td><code>string | false</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>imageStyle</td><td>图片样式（优先级高于 imageWidth/imageHeight）</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>imageWidth</td><td>图片宽度，数字按 px 处理，亦可传带单位字符串</td><td><code>number | string</code></td><td>-</td></tr><tr><td>imageHeight</td><td>图片高度，数字按 px 处理，亦可传带单位字符串</td><td><code>number | string</code></td><td>-</td></tr></tbody></table><p>预设常量：<code>PRESENTED_IMAGE_DEFAULT</code>（<code>&#39;default&#39;</code>）、<code>PRESENTED_IMAGE_SIMPLE</code>（<code>&#39;simple&#39;</code>）。</p><h3 id="empty-slots" tabindex="-1">Empty Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>底部内容</td></tr><tr><td>description</td><td>自定义描述内容</td></tr><tr><td>image</td><td>自定义图片</td></tr></tbody></table>',6))])}}};export{W as default};
