import{E as l,P as f}from"./Empty-DTvX08rG.js";import{m as a,y as s,g as u,P as r,f as e,I as n,E as _,i as y,l as o,k as c,j as b}from"./index-tBZazAzX.js";import"./cls-S9IiI6wd.js";const S=a({__name:"EmptyAction",setup(i){function d(){console.log("创建")}return(p,E)=>(s(),u(n(l),{description:"暂无数据"},{default:r(()=>[e("button",{onClick:d},"立即创建")]),_:1}))}}),g=`<template>
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
`,x=a({__name:"EmptyBasic",setup(i){return(d,p)=>(s(),u(n(l)))}}),P=`<template>
  <Empty />
</template>

<script setup lang="ts">
import { Empty } from 'ant-design-hmfw'
<\/script>
`,I=a({__name:"EmptyCustomDescription",setup(i){return(d,p)=>(s(),u(n(l),{description:"暂无数据，请稍后再试"}))}}),h=`<template>
  <Empty description="暂无数据，请稍后再试" />
</template>

<script setup lang="ts">
import { Empty } from 'ant-design-hmfw'
<\/script>
`,D=a({__name:"EmptySimple",setup(i){return(d,p)=>(s(),u(n(l),{image:n(f),description:"简约空状态"},null,8,["image"]))}}),M=`<template>
  <Empty :image="PRESENTED_IMAGE_SIMPLE" description="简约空状态" />
</template>

<script setup lang="ts">
import { Empty, PRESENTED_IMAGE_SIMPLE } from 'ant-design-hmfw'
<\/script>
`,A={class:"markdown-body"},B={__name:"empty",setup(i,{expose:d}){return d({frontmatter:{}}),(E,t)=>{const m=_("DemoBlock");return s(),y("div",A,[t[0]||(t[0]=e("h1",{id:"empty-",tabindex:"-1"},"Empty 空状态",-1)),t[1]||(t[1]=e("p",null,"空状态时的展示占位图。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"当目前没有数据时，用于显式的用户提示"),e("li",null,"初始化场景时的引导创建流程")],-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"简单的空状态展示。",-1)),o(m,{title:"基础用法",source:n(P)},{default:r(()=>[o(x)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"自定义描述",-1)),t[8]||(t[8]=e("p",null,"自定义描述文字。",-1)),o(m,{title:"自定义描述",source:n(h)},{default:r(()=>[o(I)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-4",tabindex:"-1"},"底部操作",-1)),t[10]||(t[10]=e("p",null,"带有操作按钮的空状态。",-1)),o(m,{title:"底部操作",source:n(g)},{default:r(()=>[o(S)]),_:1},8,["source"]),t[11]||(t[11]=e("h3",{id:"-5",tabindex:"-1"},"简约模式",-1)),t[12]||(t[12]=e("p",null,[c("通过 "),e("code",null,'image="simple"'),c("（或 "),e("code",null,"PRESENTED_IMAGE_SIMPLE"),c("）使用更紧凑的简约空状态。")],-1)),o(m,{title:"简约模式",source:n(M)},{default:r(()=>[o(D)]),_:1},8,["source"]),t[13]||(t[13]=b('<h2 id="api" tabindex="-1">API</h2><h3 id="empty-props" tabindex="-1">Empty Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>description</td><td>自定义描述内容，为 <code>false</code> 时不显示</td><td><code>string | false</code></td><td><code>&#39;暂无数据&#39;</code></td></tr><tr><td>image</td><td>显示图片：图片地址字符串，或预设标识 <code>&#39;default&#39;</code> / <code>&#39;simple&#39;</code>，为 <code>false</code> 时不显示</td><td><code>string | false</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>imageStyle</td><td>图片样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><p>预设常量：<code>PRESENTED_IMAGE_DEFAULT</code>（<code>&#39;default&#39;</code>）、<code>PRESENTED_IMAGE_SIMPLE</code>（<code>&#39;simple&#39;</code>）。</p><h3 id="empty-slots" tabindex="-1">Empty Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>底部内容</td></tr><tr><td>description</td><td>自定义描述内容</td></tr><tr><td>image</td><td>自定义图片</td></tr></tbody></table>',6))])}}};export{B as default};
