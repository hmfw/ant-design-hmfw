import{m as s,L as b,l as a,J as q,k as N,y as f,g as A,I as l,i as k,P as h,f as o,B as C,E as j,j as T}from"./index-BZUMvgWw.js";import{c as u}from"./cls-S9IiI6wd.js";function V(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function W(e,t){return!e&&t?"38%":e&&t?"50%":"100%"}function H(e,t){return!e&&t?3:2}const L=s({name:"Skeleton",props:{active:Boolean,loading:{type:Boolean,default:!0},avatar:[Boolean,Object],title:{type:[Boolean,Object],default:!0},paragraph:{type:[Boolean,Object],default:!0},round:Boolean},setup(e,{slots:t}){const n=b("skeleton");return()=>{var B;if(!e.loading)return((B=t.default)==null?void 0:B.call(t))??null;const r=!!e.avatar,d=e.title!==!1,c=e.paragraph!==!1,P=typeof e.avatar=="object"?e.avatar:{},p={...V(d,c),...P},S=(typeof e.title=="object"?e.title:{}).width??W(r,c),g=typeof e.paragraph=="object"?e.paragraph:{},v=g.rows??H(r,d);let m;Array.isArray(g.width)?m=g.width:g.width!==void 0?(m=Array(v).fill("100%"),m[v-1]=g.width):(m=Array(v).fill("100%"),v>1&&(!r||!d)&&(m[v-1]="61%"));const w=typeof p.size=="number"?p.size:p.size==="large"?40:p.size==="small"?24:32,I=p.shape??"circle";return a("div",{class:u(n,{[`${n}-with-avatar`]:r,[`${n}-active`]:e.active,[`${n}-round`]:e.round})},[r&&a("div",{class:`${n}-header`},[a("span",{class:u(`${n}-avatar`,`${n}-avatar-${I}`,{[`${n}-avatar-lg`]:p.size==="large",[`${n}-avatar-sm`]:p.size==="small"}),style:typeof p.size=="number"?{width:`${w}px`,height:`${w}px`}:{}},null)]),a("div",{class:`${n}-section`},[d&&a("h3",{class:`${n}-title`,style:{width:typeof S=="number"?`${S}px`:S}},null),c&&a("ul",{class:`${n}-paragraph`},[Array.from({length:v}).map((lt,_)=>{const y=m[_]??"100%";return a("li",{key:_,style:{width:typeof y=="number"?`${y}px`:y}},null)})])])])}}});function z(e){const t=q();if(e&&e!=="default")return e;const n=t.value.componentSize;return n==="middle"?"default":n}const x=s({name:"SkeletonButton",props:{active:Boolean,size:{type:String,default:"default"},shape:{type:String,default:"default"},block:Boolean},setup(e){const t=b("skeleton"),n=z(e.size);return()=>a("div",{class:u(`${t}`,`${t}-element`,{[`${t}-active`]:e.active,[`${t}-block`]:e.block})},[a("span",{class:u(`${t}-button`,{[`${t}-button-lg`]:n==="large",[`${t}-button-sm`]:n==="small",[`${t}-button-circle`]:e.shape==="circle",[`${t}-button-round`]:e.shape==="round"})},null)])}}),$=s({name:"SkeletonInput",props:{active:Boolean,size:{type:String,default:"default"},block:Boolean},setup(e){const t=b("skeleton"),n=z(e.size);return()=>a("div",{class:u(`${t}`,`${t}-element`,{[`${t}-active`]:e.active,[`${t}-block`]:e.block})},[a("span",{class:u(`${t}-input`,{[`${t}-input-lg`]:n==="large",[`${t}-input-sm`]:n==="small"})},null)])}}),O=s({name:"SkeletonAvatar",props:{active:Boolean,size:{type:[String,Number],default:"default"},shape:{type:String,default:"circle"}},setup(e){const t=b("skeleton"),n=z(typeof e.size=="string"?e.size:void 0),r=typeof e.size=="number"?e.size:n;return()=>{const d=typeof e.size=="number"?{width:`${e.size}px`,height:`${e.size}px`,lineHeight:`${e.size}px`}:{};return a("div",{class:u(`${t}`,`${t}-element`,{[`${t}-active`]:e.active})},[a("span",{class:u(`${t}-avatar`,{[`${t}-avatar-lg`]:r==="large",[`${t}-avatar-sm`]:r==="small",[`${t}-avatar-circle`]:e.shape==="circle",[`${t}-avatar-square`]:e.shape==="square"}),style:d},null)])}}}),D=s({name:"SkeletonImage",props:{active:Boolean},setup(e){const t=b("skeleton");return()=>a("div",{class:u(`${t}`,`${t}-element`,{[`${t}-active`]:e.active})},[a("div",{class:`${t}-image`},[a("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",class:`${t}-image-svg`},[a("title",null,[N("Image placeholder")]),a("path",{d:"M365.7 329.1q0 45.8-32 77.7t-77.7 32-77.7-32-32-77.7 32-77.6 77.7-32 77.7 32 32 77.6M951 548.6v256H146.3V694.9L329 512l91.5 91.4L713 311zm54.8-402.3H91.4q-7.4 0-12.8 5.4T73 164.6v694.8q0 7.5 5.5 12.9t12.8 5.4h914.3q7.5 0 12.9-5.4t5.4-12.9V164.6q0-7.5-5.4-12.9t-12.9-5.4m91.4 18.3v694.8q0 37.8-26.8 64.6t-64.6 26.9H91.4q-37.7 0-64.6-26.9T0 859.4V164.6q0-37.8 26.8-64.6T91.4 73h914.3q37.8 0 64.6 26.9t26.8 64.6",class:`${t}-image-path`},null)])])])}}),E=s({name:"SkeletonNode",props:{active:Boolean},setup(e,{slots:t}){const n=b("skeleton");return()=>{var r;return a("div",{class:u(`${n}`,`${n}-element`,{[`${n}-active`]:e.active})},[a("div",{class:`${n}-node`},[(r=t.default)==null?void 0:r.call(t)])])}}}),i=L;i.Button=x;i.Input=$;i.Avatar=O;i.Image=D;i.Node=E;const M=s({__name:"SkeletonActive",setup(e){return(t,n)=>(f(),A(l(i),{active:""}))}}),J=`<template>
  <Skeleton active />
</template>

<script setup lang="ts">
import { Skeleton } from 'ant-design-hmfw'
<\/script>
`,R={style:{display:"flex","flex-direction":"column",gap:"16px"}},F=s({__name:"SkeletonAvatar",setup(e){return(t,n)=>(f(),k("div",R,[a(l(i).Avatar,{active:""}),a(l(i).Avatar,{active:"",size:"large"}),a(l(i).Avatar,{active:"",shape:"square"})]))}}),G=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Skeleton.Avatar active />
    <Skeleton.Avatar active size="large" />
    <Skeleton.Avatar active shape="square" />
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from 'ant-design-hmfw'
<\/script>
`,K=s({__name:"SkeletonBasic",setup(e){return(t,n)=>(f(),A(l(i)))}}),Q=`<template>
  <Skeleton />
</template>

<script setup lang="ts">
import { Skeleton } from 'ant-design-hmfw'
<\/script>
`,U={style:{display:"flex","flex-direction":"column",gap:"16px"}},X=s({__name:"SkeletonButtonInput",setup(e){return(t,n)=>(f(),k("div",U,[a(l(x),{active:""}),a(l(x),{active:"",size:"small"}),a(l(x),{active:"",shape:"round"}),a(l($),{active:""}),a(l($),{active:"",size:"small"})]))}}),Y=`<template>
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
`,Z={style:{display:"flex",gap:"16px"}},tt=s({__name:"SkeletonImageNode",setup(e){return(t,n)=>(f(),k("div",Z,[a(l(i).Image,{active:""}),a(l(i).Node,{active:""},{default:h(()=>[...n[0]||(n[0]=[o("div",{style:{width:"96px",height:"96px",display:"flex","align-items":"center","justify-content":"center",color:"#bfbfbf"}}," Node ",-1)])]),_:1})]))}}),et=`<template>
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
`,dt=s({__name:"SkeletonWithChildren",setup(e){const t=C(!0);return(n,r)=>(f(),k("div",null,[o("button",{onClick:r[0]||(r[0]=d=>t.value=!t.value)},"切换加载状态"),a(l(i),{loading:t.value,active:"",avatar:""},{default:h(()=>[...r[1]||(r[1]=[o("div",{style:{display:"flex",gap:"12px","margin-top":"16px"}},[o("img",{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1",style:{width:"40px",height:"40px","border-radius":"50%"}}),o("div",null,[o("p",{style:{"font-weight":"bold"}},"用户名称"),o("p",null,"这是一段描述信息，用于展示骨架屏效果。")])],-1)])]),_:1},8,["loading"])]))}}),at=`<template>
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
`,nt={class:"markdown-body"},st={__name:"skeleton",setup(e,{expose:t}){return t({frontmatter:{}}),(r,d)=>{const c=j("DemoBlock");return f(),k("div",nt,[d[0]||(d[0]=o("h1",{id:"skeleton-",tabindex:"-1"},"Skeleton 骨架屏",-1)),d[1]||(d[1]=o("p",null,"在需要等待加载内容的位置提供一个占位图形组合。",-1)),d[2]||(d[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),d[3]||(d[3]=o("ul",null,[o("li",null,"网络较慢，需要长时间等待加载处理的情况下"),o("li",null,"图文信息内容较多的列表/卡片中"),o("li",null,"只在第一次加载数据的时候使用")],-1)),d[4]||(d[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),d[5]||(d[5]=o("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),d[6]||(d[6]=o("p",null,"最简单的占位效果。",-1)),a(c,{title:"基础用法",source:l(Q)},{default:h(()=>[a(K)]),_:1},8,["source"]),d[7]||(d[7]=o("h3",{id:"-3",tabindex:"-1"},"动画效果",-1)),d[8]||(d[8]=o("p",null,"显示动画效果。",-1)),a(c,{title:"动画效果",source:l(J)},{default:h(()=>[a(M)]),_:1},8,["source"]),d[9]||(d[9]=o("h3",{id:"-4",tabindex:"-1"},"包含子组件",-1)),d[10]||(d[10]=o("p",null,"加载占位图包含子组件。",-1)),a(c,{title:"包含子组件",source:l(at)},{default:h(()=>[a(dt)]),_:1},8,["source"]),d[11]||(d[11]=o("h3",{id:"-5",tabindex:"-1"},"按钮/输入框骨架",-1)),d[12]||(d[12]=o("p",null,"独立的按钮和输入框骨架。",-1)),a(c,{title:"按钮/输入框骨架",source:l(Y)},{default:h(()=>[a(X)]),_:1},8,["source"]),d[13]||(d[13]=o("h3",{id:"-6",tabindex:"-1"},"头像骨架",-1)),d[14]||(d[14]=o("p",null,"独立的头像骨架。",-1)),a(c,{title:"头像骨架",source:l(G)},{default:h(()=>[a(F)]),_:1},8,["source"]),d[15]||(d[15]=o("h3",{id:"-7",tabindex:"-1"},"图片/节点骨架",-1)),d[16]||(d[16]=o("p",null,"独立的图片和自定义节点骨架。",-1)),a(c,{title:"图片/节点骨架",source:l(et)},{default:h(()=>[a(tt)]),_:1},8,["source"]),d[17]||(d[17]=T('<h2 id="api" tabindex="-1">API</h2><h3 id="skeleton-props" tabindex="-1">Skeleton Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>avatar</td><td>是否显示头像占位图</td><td><code>boolean | SkeletonAvatarProps</code></td><td><code>false</code></td></tr><tr><td>paragraph</td><td>是否显示段落占位图</td><td><code>boolean | SkeletonParagraphProps</code></td><td><code>true</code></td></tr><tr><td>title</td><td>是否显示标题占位图</td><td><code>boolean | SkeletonTitleProps</code></td><td><code>true</code></td></tr><tr><td>loading</td><td>为 true 时，显示占位图，反之则直接展示子组件</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>round</td><td>为 true 时，段落和标题显示圆角</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="skeletonavatarprops" tabindex="-1">SkeletonAvatarProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>大小</td><td><code>&#39;large&#39; | &#39;default&#39; | &#39;small&#39; | number</code></td><td><code>&#39;large&#39;</code></td></tr><tr><td>shape</td><td>形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr></tbody></table><h3 id="skeletontitleprops" tabindex="-1">SkeletonTitleProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>标题宽度</td><td><code>string | number</code></td><td>-</td></tr></tbody></table><h3 id="skeletonparagraphprops" tabindex="-1">SkeletonParagraphProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>rows</td><td>段落行数</td><td><code>number</code></td><td><code>3</code> (无头像时) / <code>2</code> (有头像时)</td></tr><tr><td>width</td><td>段落宽度，可传数组分别指定每行宽度</td><td><code>string | number | Array&lt;string | number&gt;</code></td><td>-</td></tr></tbody></table><h3 id="skeletonbutton-props" tabindex="-1">Skeleton.Button Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>大小</td><td><code>&#39;large&#39; | &#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>形状</td><td><code>&#39;default&#39; | &#39;circle&#39; | &#39;round&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>block</td><td>将按钮宽度调整为其父宽度</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="skeletoninput-props" tabindex="-1">Skeleton.Input Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>大小</td><td><code>&#39;large&#39; | &#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>block</td><td>将输入框宽度调整为其父宽度</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="skeletonavatar-props" tabindex="-1">Skeleton.Avatar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>大小</td><td><code>&#39;large&#39; | &#39;default&#39; | &#39;small&#39; | number</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr></tbody></table><h3 id="skeletonimage-props" tabindex="-1">Skeleton.Image Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="skeletonnode-props" tabindex="-1">Skeleton.Node Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',19))])}}};export{st as default};
