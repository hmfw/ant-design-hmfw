import{k as s,I as h,j as o,w as u,e as $,G as r,g as m,d,M as c,z as j,B as C,h as I}from"./index-BNHhPN23.js";import{c as p}from"./cls-S9IiI6wd.js";const v=s({name:"Skeleton",props:{active:Boolean,loading:{type:Boolean,default:!0},avatar:[Boolean,Object],title:{type:[Boolean,Object],default:!0},paragraph:{type:[Boolean,Object],default:!0},round:Boolean},setup(e,{slots:n}){const a=h("skeleton");return()=>{var x;if(!e.loading)return((x=n.default)==null?void 0:x.call(n))??null;const l=typeof e.avatar=="object"?e.avatar:{},t=typeof e.title=="object"?e.title:{},i=typeof e.paragraph=="object"?e.paragraph:{},b=!!e.avatar,B=e.title!==!1,w=e.paragraph!==!1,k=i.rows??3,z=Array.isArray(i.width)?i.width:Array(k).fill(i.width??"100%"),g=typeof l.size=="number"?l.size:l.size==="large"?40:l.size==="small"?24:32,_=l.shape??"circle";return o("div",{class:p(a,{[`${a}-with-avatar`]:b,[`${a}-active`]:e.active,[`${a}-round`]:e.round})},[b&&o("div",{class:`${a}-header`},[o("span",{class:p(`${a}-avatar`,`${a}-avatar-${_}`,{[`${a}-avatar-lg`]:l.size==="large",[`${a}-avatar-sm`]:l.size==="small"}),style:typeof l.size=="number"?{width:`${g}px`,height:`${g}px`}:{}},null)]),o("div",{class:`${a}-content`},[B&&o("h3",{class:`${a}-title`,style:{width:t.width??"38%"}},null),w&&o("ul",{class:`${a}-paragraph`},[Array.from({length:k}).map((T,S)=>o("li",{key:S,style:{width:z[S]??"100%"}},null))])])])}}}),f=s({name:"SkeletonButton",props:{active:Boolean,size:{type:String,default:"default"},shape:{type:String,default:"default"},block:Boolean},setup(e){const n=h("skeleton");return()=>o("span",{class:p(`${n}-button`,{[`${n}-button-${e.size}`]:e.size!=="default",[`${n}-active`]:e.active,[`${n}-button-circle`]:e.shape==="circle",[`${n}-button-round`]:e.shape==="round",[`${n}-block`]:e.block})},null)}}),y=s({name:"SkeletonInput",props:{active:Boolean,size:{type:String,default:"default"},block:Boolean},setup(e){const n=h("skeleton");return()=>o("span",{class:p(`${n}-input`,{[`${n}-input-${e.size}`]:e.size!=="default",[`${n}-active`]:e.active,[`${n}-block`]:e.block})},null)}}),P=s({__name:"SkeletonActive",setup(e){return(n,a)=>(u(),$(r(v),{active:""}))}}),A=`<template>
  <Skeleton active />
</template>

<script setup lang="ts">
import { Skeleton } from 'ant-design-hmfw'
<\/script>
`,N=s({__name:"SkeletonBasic",setup(e){return(n,a)=>(u(),$(r(v)))}}),O=`<template>
  <Skeleton />
</template>

<script setup lang="ts">
import { Skeleton } from 'ant-design-hmfw'
<\/script>
`,V={style:{display:"flex","flex-direction":"column",gap:"16px"}},W=s({__name:"SkeletonButtonInput",setup(e){return(n,a)=>(u(),m("div",V,[o(r(f),{active:""}),o(r(f),{active:"",size:"small"}),o(r(f),{active:"",shape:"round"}),o(r(y),{active:""}),o(r(y),{active:"",size:"small"})]))}}),D=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <SkeletonButton active />
    <SkeletonButton active size="small" />
    <SkeletonButton active shape="round" />
    <SkeletonInput active />
    <SkeletonInput active size="small" />
  </div>
</template>

<script setup lang="ts">
import { SkeletonButton, SkeletonInput } from 'ant-design-hmfw'
<\/script>
`,E=s({__name:"SkeletonWithChildren",setup(e){const n=j(!0);return(a,l)=>(u(),m("div",null,[d("button",{onClick:l[0]||(l[0]=t=>n.value=!n.value)},"切换加载状态"),o(r(v),{loading:n.value,active:"",avatar:""},{default:c(()=>[...l[1]||(l[1]=[d("div",{style:{display:"flex",gap:"12px","margin-top":"16px"}},[d("img",{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1",style:{width:"40px",height:"40px","border-radius":"50%"}}),d("div",null,[d("p",{style:{"font-weight":"bold"}},"用户名称"),d("p",null,"这是一段描述信息，用于展示骨架屏效果。")])],-1)])]),_:1},8,["loading"])]))}}),G=`<template>
  <div>
    <button @click="loading = !loading">切换加载状态</button>
    <Skeleton :loading="loading" active avatar>
      <div style="display: flex; gap: 12px; margin-top: 16px;">
        <img
          src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
          style="width: 40px; height: 40px; border-radius: 50%;"
        />
        <div>
          <p style="font-weight: bold;">用户名称</p>
          <p>这是一段描述信息，用于展示骨架屏效果。</p>
        </div>
      </div>
    </Skeleton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Skeleton } from 'ant-design-hmfw'

const loading = ref(true)
<\/script>
`,M={class:"markdown-body"},H={__name:"skeleton",setup(e,{expose:n}){return n({frontmatter:{}}),(l,t)=>{const i=C("DemoBlock");return u(),m("div",M,[t[0]||(t[0]=d("h1",{id:"skeleton-",tabindex:"-1"},"Skeleton 骨架屏",-1)),t[1]||(t[1]=d("p",null,"在需要等待加载内容的位置提供一个占位图形组合。",-1)),t[2]||(t[2]=d("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=d("ul",null,[d("li",null,"网络较慢，需要长时间等待加载处理的情况下"),d("li",null,"图文信息内容较多的列表/卡片中"),d("li",null,"只在第一次加载数据的时候使用")],-1)),t[4]||(t[4]=d("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=d("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=d("p",null,"最简单的占位效果。",-1)),o(i,{title:"基础用法",source:r(O)},{default:c(()=>[o(N)]),_:1},8,["source"]),t[7]||(t[7]=d("h3",{id:"-3",tabindex:"-1"},"动画效果",-1)),t[8]||(t[8]=d("p",null,"显示动画效果。",-1)),o(i,{title:"动画效果",source:r(A)},{default:c(()=>[o(P)]),_:1},8,["source"]),t[9]||(t[9]=d("h3",{id:"-4",tabindex:"-1"},"包含子组件",-1)),t[10]||(t[10]=d("p",null,"加载占位图包含子组件。",-1)),o(i,{title:"包含子组件",source:r(G)},{default:c(()=>[o(E)]),_:1},8,["source"]),t[11]||(t[11]=d("h3",{id:"-5",tabindex:"-1"},"按钮/输入框骨架",-1)),t[12]||(t[12]=d("p",null,"独立的按钮和输入框骨架。",-1)),o(i,{title:"按钮/输入框骨架",source:r(D)},{default:c(()=>[o(W)]),_:1},8,["source"]),t[13]||(t[13]=I('<h2 id="api" tabindex="-1">API</h2><h3 id="skeleton-props" tabindex="-1">Skeleton Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>avatar</td><td>是否显示头像占位图</td><td><code>boolean | object</code></td><td><code>false</code></td></tr><tr><td>paragraph</td><td>是否显示段落占位图</td><td><code>boolean | object</code></td><td><code>true</code></td></tr><tr><td>title</td><td>是否显示标题占位图</td><td><code>boolean | object</code></td><td><code>true</code></td></tr><tr><td>loading</td><td>为 true 时，显示占位图，反之则直接展示子组件</td><td><code>boolean</code></td><td>-</td></tr><tr><td>round</td><td>为 true 时，段落和标题显示圆角</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="skeletonbutton-props" tabindex="-1">SkeletonButton Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>大小</td><td><code>&#39;large&#39; | &#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>形状</td><td><code>&#39;default&#39; | &#39;circle&#39; | &#39;round&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>block</td><td>将按钮宽度调整为其父宽度</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="skeletoninput-props" tabindex="-1">SkeletonInput Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>大小</td><td><code>&#39;large&#39; | &#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>block</td><td>将输入框宽度调整为其父宽度</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',7))])}}};export{H as default};
