import{k as c,I as f,j as r,c as C,w as p,e as u,M as o,d as n,G as l,z as y,B as $,g as w,h as S}from"./index-BNHhPN23.js";import{c as B}from"./cls-S9IiI6wd.js";const m=c({name:"Card",props:{title:String,bordered:{type:Boolean,default:!0},hoverable:Boolean,loading:Boolean,size:{type:String,default:"default"},bodyStyle:Object,headStyle:Object},setup(a,{slots:t}){const e=f("card"),i=C(()=>B(e,{[`${e}-bordered`]:a.bordered,[`${e}-hoverable`]:a.hoverable,[`${e}-loading`]:a.loading,[`${e}-small`]:a.size==="small"}));return()=>{var b;const d=a.title||t.title||t.extra,s=t.cover&&r("div",{class:`${e}-cover`},[t.cover()]),h=d&&r("div",{class:`${e}-head`,style:a.headStyle},[r("div",{class:`${e}-head-wrapper`},[(a.title||t.title)&&r("div",{class:`${e}-head-title`},[t.title?t.title():a.title]),t.extra&&r("div",{class:`${e}-extra`},[t.extra()])])]),g=r("div",{class:`${e}-body`,style:a.bodyStyle},[a.loading?r("div",{class:`${e}-loading-content`},[[1,2,3].map(v=>r("div",{key:v,class:`${e}-loading-block`},null))]):(b=t.default)==null?void 0:b.call(t)]),x=t.actions&&r("ul",{class:`${e}-actions`},[t.actions()]);return r("div",{class:i.value},[s,h,g,x])}}}),_=c({name:"CardMeta",props:{title:String,description:String},setup(a,{slots:t}){const i=`${f("card")}-meta`;return()=>r("div",{class:i},[t.avatar&&r("div",{class:`${i}-avatar`},[t.avatar()]),r("div",{class:`${i}-detail`},[(a.title||t.title)&&r("div",{class:`${i}-title`},[t.title?t.title():a.title]),(a.description||t.description)&&r("div",{class:`${i}-description`},[t.description?t.description():a.description])])])}}),k=c({__name:"CardBasic",setup(a){return(t,e)=>(p(),u(l(m),{title:"卡片标题",style:{width:"300px"}},{default:o(()=>[...e[0]||(e[0]=[n("p",null,"卡片内容",-1),n("p",null,"卡片内容",-1),n("p",null,"卡片内容",-1)])]),_:1}))}}),N=`<template>
  <Card title="卡片标题" style="width: 300px;">
    <p>卡片内容</p>
    <p>卡片内容</p>
    <p>卡片内容</p>
  </Card>
</template>

<script setup lang="ts">
import { Card } from 'ant-design-hmfw'
<\/script>
`,z=c({__name:"CardCover",setup(a){return(t,e)=>(p(),u(l(m),{style:{width:"300px"}},{cover:o(()=>[...e[0]||(e[0]=[n("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",style:{width:"100%"}},null,-1)])]),default:o(()=>[r(l(_),{title:"卡片标题",description:"这是卡片的描述信息"})]),_:1}))}}),M=`<template>
  <Card style="width: 300px;">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        style="width: 100%;"
      />
    </template>
    <CardMeta
      title="卡片标题"
      description="这是卡片的描述信息"
    />
  </Card>
</template>

<script setup lang="ts">
import { Card, CardMeta } from 'ant-design-hmfw'
<\/script>
`,P=c({__name:"CardLoading",setup(a){const t=y(!0);return(e,i)=>(p(),u(l(m),{title:"卡片标题",loading:t.value,style:{width:"300px"}},{default:o(()=>[...i[0]||(i[0]=[n("p",null,"卡片内容",-1),n("p",null,"卡片内容",-1)])]),_:1},8,["loading"]))}}),j=`<template>
  <Card title="卡片标题" :loading="loading" style="width: 300px;">
    <p>卡片内容</p>
    <p>卡片内容</p>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card } from 'ant-design-hmfw'

const loading = ref(true)
<\/script>
`,q={class:"markdown-body"},E={__name:"card",setup(a,{expose:t}){return t({frontmatter:{}}),(i,d)=>{const s=$("DemoBlock");return p(),w("div",q,[d[0]||(d[0]=n("h1",{id:"card-",tabindex:"-1"},"Card 卡片",-1)),d[1]||(d[1]=n("p",null,"通用卡片容器。",-1)),d[2]||(d[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),d[3]||(d[3]=n("ul",null,[n("li",null,"最基础的卡片容器，可承载文字、列表、图片、段落等内容"),n("li",null,"常用于后台概览页面")],-1)),d[4]||(d[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),d[5]||(d[5]=n("h3",{id:"-2",tabindex:"-1"},"基础卡片",-1)),d[6]||(d[6]=n("p",null,"包含标题、内容、操作区域。",-1)),r(s,{title:"基础卡片",source:l(N)},{default:o(()=>[r(k)]),_:1},8,["source"]),d[7]||(d[7]=n("h3",{id:"-3",tabindex:"-1"},"带封面",-1)),d[8]||(d[8]=n("p",null,"可以配合 cover 插槽展示封面图片。",-1)),r(s,{title:"带封面",source:l(M)},{default:o(()=>[r(z)]),_:1},8,["source"]),d[9]||(d[9]=n("h3",{id:"-4",tabindex:"-1"},"加载中",-1)),d[10]||(d[10]=n("p",null,"数据读入前会有文本块样式。",-1)),r(s,{title:"加载中",source:l(j)},{default:o(()=>[r(P)]),_:1},8,["source"]),d[11]||(d[11]=S('<h2 id="api" tabindex="-1">API</h2><h3 id="card-props" tabindex="-1">Card Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>卡片标题</td><td><code>string</code></td><td>-</td></tr><tr><td>extra</td><td>卡片右上角的操作区域</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>bordered</td><td>是否有边框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>loading</td><td>当卡片内容还在加载中时，可以用 loading 展示一个占位</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>卡片的尺寸</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>hoverable</td><td>鼠标移过时可浮起</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>bodyStyle</td><td>内容区域自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="card-slots" tabindex="-1">Card Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>卡片内容</td></tr><tr><td>title</td><td>卡片标题</td></tr><tr><td>extra</td><td>卡片右上角的操作区域</td></tr><tr><td>cover</td><td>卡片封面</td></tr><tr><td>actions</td><td>卡片操作组</td></tr></tbody></table><h3 id="cardmeta-props" tabindex="-1">CardMeta Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题内容</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>描述内容</td><td><code>string</code></td><td>-</td></tr><tr><td>avatar</td><td>头像/图标</td><td><code>string | slot</code></td><td>-</td></tr></tbody></table>',7))])}}};export{E as default};
