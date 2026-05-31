import{S as r,a as m,b}from"./index-BkJtdKZ_.js";import{m as c,y as i,g as f,I as o,i as h,l as d,P as a,f as e,B as v,E as k,j as g}from"./index-3tP9IO2U.js";import"./cls-S9IiI6wd.js";const x=c({__name:"SkeletonActive",setup(s){return(n,l)=>(i(),f(o(r),{active:""}))}}),S=`<template>
  <Skeleton active />
</template>

<script setup lang="ts">
import { Skeleton } from 'ant-design-hmfw'
<\/script>
`,y={style:{display:"flex","flex-direction":"column",gap:"16px"}},_=c({__name:"SkeletonAvatar",setup(s){return(n,l)=>(i(),h("div",y,[d(o(r).Avatar,{active:""}),d(o(r).Avatar,{active:"",size:"large"}),d(o(r).Avatar,{active:"",shape:"square"})]))}}),w=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Skeleton.Avatar active />
    <Skeleton.Avatar active size="large" />
    <Skeleton.Avatar active shape="square" />
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from 'ant-design-hmfw'
<\/script>
`,B=c({__name:"SkeletonBasic",setup(s){return(n,l)=>(i(),f(o(r)))}}),P=`<template>
  <Skeleton />
</template>

<script setup lang="ts">
import { Skeleton } from 'ant-design-hmfw'
<\/script>
`,A={style:{display:"flex","flex-direction":"column",gap:"16px"}},I=c({__name:"SkeletonButtonInput",setup(s){return(n,l)=>(i(),h("div",A,[d(o(m),{active:""}),d(o(m),{active:"",size:"small"}),d(o(m),{active:"",shape:"round"}),d(o(b),{active:""}),d(o(b),{active:"",size:"small"})]))}}),N=`<template>
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
`,z={style:{display:"flex",gap:"16px"}},$=c({__name:"SkeletonImageNode",setup(s){return(n,l)=>(i(),h("div",z,[d(o(r).Image,{active:""}),d(o(r).Node,{active:""},{default:a(()=>[...l[0]||(l[0]=[e("div",{style:{width:"96px",height:"96px",display:"flex","align-items":"center","justify-content":"center",color:"#bfbfbf"}}," Node ",-1)])]),_:1})]))}}),C=`<template>
  <div style="display: flex; gap: 16px;">
    <Skeleton.Image active />
    <Skeleton.Node active>
      <div style="width: 96px; height: 96px; display: flex; align-items: center; justify-content: center; color: #bfbfbf;">
        Node
      </div>
    </Skeleton.Node>
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from 'ant-design-hmfw'
<\/script>
`,q=c({__name:"SkeletonWithChildren",setup(s){const n=v(!0);return(l,u)=>(i(),h("div",null,[e("button",{onClick:u[0]||(u[0]=t=>n.value=!n.value)},"切换加载状态"),d(o(r),{loading:n.value,active:"",avatar:""},{default:a(()=>[...u[1]||(u[1]=[e("div",{style:{display:"flex",gap:"12px","margin-top":"16px"}},[e("img",{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1",style:{width:"40px",height:"40px","border-radius":"50%"}}),e("div",null,[e("p",{style:{"font-weight":"bold"}},"用户名称"),e("p",null,"这是一段描述信息，用于展示骨架屏效果。")])],-1)])]),_:1},8,["loading"])]))}}),j=`<template>
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
`,V={class:"markdown-body"},W={__name:"skeleton",setup(s,{expose:n}){return n({frontmatter:{}}),(u,t)=>{const p=k("DemoBlock");return i(),h("div",V,[t[0]||(t[0]=e("h1",{id:"skeleton-",tabindex:"-1"},"Skeleton 骨架屏",-1)),t[1]||(t[1]=e("p",null,"在需要等待加载内容的位置提供一个占位图形组合。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"网络较慢，需要长时间等待加载处理的情况下"),e("li",null,"图文信息内容较多的列表/卡片中"),e("li",null,"只在第一次加载数据的时候使用")],-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"最简单的占位效果。",-1)),d(p,{title:"基础用法",source:o(P)},{default:a(()=>[d(B)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"动画效果",-1)),t[8]||(t[8]=e("p",null,"显示动画效果。",-1)),d(p,{title:"动画效果",source:o(S)},{default:a(()=>[d(x)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-4",tabindex:"-1"},"包含子组件",-1)),t[10]||(t[10]=e("p",null,"加载占位图包含子组件。",-1)),d(p,{title:"包含子组件",source:o(j)},{default:a(()=>[d(q)]),_:1},8,["source"]),t[11]||(t[11]=e("h3",{id:"-5",tabindex:"-1"},"按钮/输入框骨架",-1)),t[12]||(t[12]=e("p",null,"独立的按钮和输入框骨架。",-1)),d(p,{title:"按钮/输入框骨架",source:o(N)},{default:a(()=>[d(I)]),_:1},8,["source"]),t[13]||(t[13]=e("h3",{id:"-6",tabindex:"-1"},"头像骨架",-1)),t[14]||(t[14]=e("p",null,"独立的头像骨架。",-1)),d(p,{title:"头像骨架",source:o(w)},{default:a(()=>[d(_)]),_:1},8,["source"]),t[15]||(t[15]=e("h3",{id:"-7",tabindex:"-1"},"图片/节点骨架",-1)),t[16]||(t[16]=e("p",null,"独立的图片和自定义节点骨架。",-1)),d(p,{title:"图片/节点骨架",source:o(C)},{default:a(()=>[d($)]),_:1},8,["source"]),t[17]||(t[17]=g('<h2 id="api" tabindex="-1">API</h2><h3 id="skeleton-props" tabindex="-1">Skeleton Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>avatar</td><td>是否显示头像占位图</td><td><code>boolean | SkeletonAvatarProps</code></td><td><code>false</code></td></tr><tr><td>paragraph</td><td>是否显示段落占位图</td><td><code>boolean | SkeletonParagraphProps</code></td><td><code>true</code></td></tr><tr><td>title</td><td>是否显示标题占位图</td><td><code>boolean | SkeletonTitleProps</code></td><td><code>true</code></td></tr><tr><td>loading</td><td>为 true 时，显示占位图，反之则直接展示子组件</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>round</td><td>为 true 时，段落和标题显示圆角</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="skeletonavatarprops" tabindex="-1">SkeletonAvatarProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>大小</td><td><code>&#39;large&#39; | &#39;default&#39; | &#39;small&#39; | number</code></td><td><code>&#39;large&#39;</code></td></tr><tr><td>shape</td><td>形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr></tbody></table><h3 id="skeletontitleprops" tabindex="-1">SkeletonTitleProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>标题宽度</td><td><code>string | number</code></td><td>-</td></tr></tbody></table><h3 id="skeletonparagraphprops" tabindex="-1">SkeletonParagraphProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>rows</td><td>段落行数</td><td><code>number</code></td><td><code>3</code> (无头像时) / <code>2</code> (有头像时)</td></tr><tr><td>width</td><td>段落宽度，可传数组分别指定每行宽度</td><td><code>string | number | Array&lt;string | number&gt;</code></td><td>-</td></tr></tbody></table><h3 id="skeletonbutton-props" tabindex="-1">Skeleton.Button Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>大小</td><td><code>&#39;large&#39; | &#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>形状</td><td><code>&#39;default&#39; | &#39;circle&#39; | &#39;round&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>block</td><td>将按钮宽度调整为其父宽度</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="skeletoninput-props" tabindex="-1">Skeleton.Input Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>大小</td><td><code>&#39;large&#39; | &#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>block</td><td>将输入框宽度调整为其父宽度</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="skeletonavatar-props" tabindex="-1">Skeleton.Avatar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>大小</td><td><code>&#39;large&#39; | &#39;default&#39; | &#39;small&#39; | number</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr></tbody></table><h3 id="skeletonimage-props" tabindex="-1">Skeleton.Image Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="skeletonnode-props" tabindex="-1">Skeleton.Node Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',19))])}}};export{W as default};
