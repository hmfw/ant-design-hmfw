import{E as l}from"./Empty-vYQdLy9t.js";import{k as a,w as s,e as u,M as r,d as e,G as o,B as y,g as f,j as n,h as b}from"./index-BNHhPN23.js";import"./cls-S9IiI6wd.js";const E=a({__name:"EmptyAction",setup(i){function d(){console.log("创建")}return(p,c)=>(s(),u(o(l),{description:"暂无数据"},{default:r(()=>[e("button",{onClick:d},"立即创建")]),_:1}))}}),x=`<template>
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
`,_=a({__name:"EmptyBasic",setup(i){return(d,p)=>(s(),u(o(l)))}}),g=`<template>
  <Empty />
</template>

<script setup lang="ts">
import { Empty } from 'ant-design-hmfw'
<\/script>
`,h=a({__name:"EmptyCustomDescription",setup(i){return(d,p)=>(s(),u(o(l),{description:"暂无数据，请稍后再试"}))}}),C=`<template>
  <Empty description="暂无数据，请稍后再试" />
</template>

<script setup lang="ts">
import { Empty } from 'ant-design-hmfw'
<\/script>
`,k={class:"markdown-body"},D={__name:"empty",setup(i,{expose:d}){return d({frontmatter:{}}),(c,t)=>{const m=y("DemoBlock");return s(),f("div",k,[t[0]||(t[0]=e("h1",{id:"empty-",tabindex:"-1"},"Empty 空状态",-1)),t[1]||(t[1]=e("p",null,"空状态时的展示占位图。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"当目前没有数据时，用于显式的用户提示"),e("li",null,"初始化场景时的引导创建流程")],-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"简单的空状态展示。",-1)),n(m,{title:"基础用法",source:o(g)},{default:r(()=>[n(_)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"自定义描述",-1)),t[8]||(t[8]=e("p",null,"自定义描述文字。",-1)),n(m,{title:"自定义描述",source:o(C)},{default:r(()=>[n(h)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-4",tabindex:"-1"},"底部操作",-1)),t[10]||(t[10]=e("p",null,"带有操作按钮的空状态。",-1)),n(m,{title:"底部操作",source:o(x)},{default:r(()=>[n(E)]),_:1},8,["source"]),t[11]||(t[11]=b('<h2 id="api" tabindex="-1">API</h2><h3 id="empty-props" tabindex="-1">Empty Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>description</td><td>自定义描述内容</td><td><code>string</code></td><td><code>&#39;暂无数据&#39;</code></td></tr><tr><td>image</td><td>设置显示图片，为 string 时表示自定义图片地址</td><td><code>string</code></td><td>-</td></tr><tr><td>imageStyle</td><td>图片样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="empty-slots" tabindex="-1">Empty Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>底部内容</td></tr><tr><td>description</td><td>自定义描述内容</td></tr><tr><td>image</td><td>自定义图片</td></tr></tbody></table>',5))])}}};export{D as default};
