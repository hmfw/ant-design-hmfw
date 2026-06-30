import{S as l,b as k,d as h,a as v,c as f}from"./index-Dg_RCsYv.js";import{o as u,A as c,i as b,L as s,k as m,n as a,h as t,_ as y,Q as p,m as g,E as S,H as x,l as w}from"./index-CEDKhEzr.js";import{B as N}from"./Button-1ex4Sfix.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-hrD8In55.js";const q=u({__name:"SkeletonActive",setup(d){return(o,e)=>(c(),b(s(l),{active:""}))}}),C=`<template>
  <Skeleton active />
</template>

<script setup lang="ts">
import { Skeleton } from '@hmfw/ant-design'
<\/script>
`,B={style:{display:"flex","flex-direction":"column",gap:"16px"}},E=u({__name:"SkeletonAvatar",setup(d){return(o,e)=>(c(),m("div",B,[a(s(l).Avatar,{active:""}),a(s(l).Avatar,{active:"",size:"large"}),a(s(l).Avatar,{active:"",shape:"square"})]))}}),A=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Skeleton.Avatar active />
    <Skeleton.Avatar active size="large" />
    <Skeleton.Avatar active shape="square" />
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from '@hmfw/ant-design'
<\/script>
`,I=u({__name:"SkeletonBasic",setup(d){return(o,e)=>(c(),b(s(l)))}}),_=`<template>
  <Skeleton />
</template>

<script setup lang="ts">
import { Skeleton } from '@hmfw/ant-design'
<\/script>
`,P={style:{display:"flex","flex-direction":"column",gap:"16px"}},z=u({__name:"SkeletonButtonInput",setup(d){return(o,e)=>(c(),m("div",P,[a(s(k),{active:""}),a(s(k),{active:"",size:"small"}),a(s(k),{active:"",shape:"round"}),a(s(h),{active:""}),a(s(h),{active:"",size:"small"})]))}}),D=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <SkeletonButton active />
    <SkeletonButton active size="small" />
    <SkeletonButton active shape="round" />
    <SkeletonInput active />
    <SkeletonInput active size="small" />
  </div>
</template>

<script setup lang="ts">
import { SkeletonButton, SkeletonInput } from '@hmfw/ant-design'
<\/script>
`,F={style:{display:"flex","flex-direction":"column",gap:"32px"}},R={style:{display:"flex",gap:"12px","align-items":"center"}},$={style:{display:"flex","flex-direction":"column",gap:"12px"}},T={style:{display:"flex",gap:"16px","align-items":"center"}},V=u({__name:"SkeletonClassNames",setup(d){return(o,e)=>(c(),m("div",F,[t("div",null,[e[0]||(e[0]=t("div",{style:{"margin-bottom":"12px",color:"#666","font-weight":"500"}},"主组件：自定义头部与段落样式",-1)),a(s(l),{avatar:"",paragraph:{rows:3},active:"","class-names":{root:"custom-skeleton-root",header:"custom-header",avatar:"custom-avatar",section:"custom-section",title:"custom-title",paragraph:"custom-paragraph",row:"custom-row"}})]),t("div",null,[e[1]||(e[1]=t("div",{style:{"margin-bottom":"12px",color:"#666","font-weight":"500"}},"主组件：使用内联样式",-1)),a(s(l),{avatar:"",paragraph:{rows:2},active:"",styles:{root:{padding:"16px",backgroundColor:"#fafafa",borderRadius:"8px"},avatar:{borderRadius:"12px"},title:{height:"20px",backgroundColor:"#1890ff20"},row:{height:"14px",backgroundColor:"#52c41a20"}}})]),t("div",null,[e[2]||(e[2]=t("div",{style:{"margin-bottom":"12px",color:"#666","font-weight":"500"}},"SkeletonButton：自定义按钮骨架",-1)),t("div",R,[a(s(k),{active:"",size:"large","class-names":{root:"custom-button-root",button:"custom-button"}}),a(s(k),{active:"",shape:"round",styles:{button:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}}}),a(s(k),{active:"",shape:"circle","class-names":{button:"custom-button-circle"}})])]),t("div",null,[e[3]||(e[3]=t("div",{style:{"margin-bottom":"12px",color:"#666","font-weight":"500"}},"SkeletonInput：自定义输入框骨架",-1)),t("div",$,[a(s(h),{active:"",size:"large",block:"","class-names":{input:"custom-input"}}),a(s(h),{active:"",styles:{input:{backgroundColor:"#ff4d4f20",borderRadius:"6px"}}})])]),t("div",null,[e[4]||(e[4]=t("div",{style:{"margin-bottom":"12px",color:"#666","font-weight":"500"}},"SkeletonAvatar 与 SkeletonImage：组合样式",-1)),t("div",T,[a(s(v),{active:"",size:64,"class-names":{avatar:"custom-large-avatar"}}),a(s(f),{active:"","class-names":{image:"custom-image",svg:"custom-svg",path:"custom-path"}}),a(s(v),{active:"",shape:"square",size:"large",styles:{avatar:{borderRadius:"16px",background:"linear-gradient(135deg, #ffd89b 0%, #19547b 100%)"}}})])])]))}}),j=y(V,[["__scopeId","data-v-ff37a614"]]),G=`<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：主组件基础样式定制 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">主组件：自定义头部与段落样式</div>
      <Skeleton
        avatar
        :paragraph="{ rows: 3 }"
        active
        :class-names="{
          root: 'custom-skeleton-root',
          header: 'custom-header',
          avatar: 'custom-avatar',
          section: 'custom-section',
          title: 'custom-title',
          paragraph: 'custom-paragraph',
          row: 'custom-row',
        }"
      />
    </div>

    <!-- 场景 2：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">主组件：使用内联样式</div>
      <Skeleton
        avatar
        :paragraph="{ rows: 2 }"
        active
        :styles="{
          root: { padding: '16px', backgroundColor: '#fafafa', borderRadius: '8px' },
          avatar: { borderRadius: '12px' },
          title: { height: '20px', backgroundColor: '#1890ff20' },
          row: { height: '14px', backgroundColor: '#52c41a20' },
        }"
      />
    </div>

    <!-- 场景 3：SkeletonButton 样式定制 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">SkeletonButton：自定义按钮骨架</div>
      <div style="display: flex; gap: 12px; align-items: center">
        <SkeletonButton
          active
          size="large"
          :class-names="{
            root: 'custom-button-root',
            button: 'custom-button',
          }"
        />
        <SkeletonButton
          active
          shape="round"
          :styles="{
            button: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
          }"
        />
        <SkeletonButton active shape="circle" :class-names="{ button: 'custom-button-circle' }" />
      </div>
    </div>

    <!-- 场景 4：SkeletonInput 样式定制 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">SkeletonInput：自定义输入框骨架</div>
      <div style="display: flex; flex-direction: column; gap: 12px">
        <SkeletonInput active size="large" block :class-names="{ input: 'custom-input' }" />
        <SkeletonInput
          active
          :styles="{
            input: { backgroundColor: '#ff4d4f20', borderRadius: '6px' },
          }"
        />
      </div>
    </div>

    <!-- 场景 5：SkeletonAvatar + SkeletonImage 组合 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">SkeletonAvatar 与 SkeletonImage：组合样式</div>
      <div style="display: flex; gap: 16px; align-items: center">
        <SkeletonAvatar active :size="64" :class-names="{ avatar: 'custom-large-avatar' }" />
        <SkeletonImage
          active
          :class-names="{
            image: 'custom-image',
            svg: 'custom-svg',
            path: 'custom-path',
          }"
        />
        <SkeletonAvatar
          active
          shape="square"
          size="large"
          :styles="{
            avatar: { borderRadius: '16px', background: 'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)' },
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Skeleton, SkeletonButton, SkeletonInput, SkeletonAvatar, SkeletonImage } from '@hmfw/ant-design'
<\/script>

<style scoped>
/* 主组件样式 */
:deep(.custom-skeleton-root) {
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 12px;
  border: 2px solid #667eea30;
}

:deep(.custom-header) {
  padding-right: 24px;
}

:deep(.custom-avatar) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  border: 3px solid #ffffff;
}

:deep(.custom-section) {
  padding-left: 8px;
}

:deep(.custom-title) {
  height: 22px !important;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%) !important;
  border-radius: 8px;
  opacity: 0.3;
}

:deep(.custom-paragraph) {
  margin-top: 16px;
}

:deep(.custom-row) {
  height: 18px !important;
  background: linear-gradient(90deg, #52c41a 0%, #389e0d 100%) !important;
  border-radius: 6px;
  opacity: 0.25;
  transition: opacity 0.3s;
}

:deep(.custom-row:hover) {
  opacity: 0.4;
}

/* SkeletonButton 样式 */
:deep(.custom-button-root) {
  display: inline-flex;
  align-items: center;
}

:deep(.custom-button) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
  transition: all 0.3s;
}

:deep(.custom-button:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
}

:deep(.custom-button-circle) {
  background: linear-gradient(135deg, #ff4d4f 0%, #cf1322 100%);
  box-shadow: 0 2px 8px rgba(255, 77, 79, 0.3);
}

/* SkeletonInput 样式 */
:deep(.custom-input) {
  background: linear-gradient(135deg, #52c41a15 0%, #389e0d15 100%);
  border: 2px solid #52c41a;
  border-radius: 8px;
  box-shadow: inset 0 2px 4px rgba(82, 196, 26, 0.1);
}

/* SkeletonAvatar 样式 */
:deep(.custom-large-avatar) {
  background: linear-gradient(135deg, #722ed1 0%, #531dab 100%);
  box-shadow: 0 4px 16px rgba(114, 46, 209, 0.4);
  border: 4px solid #ffffff;
  transition: all 0.3s;
}

:deep(.custom-large-avatar:hover) {
  transform: scale(1.05);
}

/* SkeletonImage 样式 */
:deep(.custom-image) {
  background: linear-gradient(135deg, #faad14 0%, #d48806 100%);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(250, 173, 20, 0.3);
  padding: 12px;
}

:deep(.custom-svg) {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

:deep(.custom-path) {
  fill: #ffffff;
  opacity: 0.8;
}
</style>
`,W={style:{display:"flex",gap:"16px"}},H=u({__name:"SkeletonImageNode",setup(d){return(o,e)=>(c(),m("div",W,[a(s(l).Image,{active:""}),a(s(l).Node,{active:""},{default:p(()=>[...e[0]||(e[0]=[t("div",{style:{width:"96px",height:"96px",display:"flex","align-items":"center","justify-content":"center",color:"#bfbfbf"}}," Node ",-1)])]),_:1})]))}}),L=`<template>
  <div style="display: flex; gap: 16px">
    <Skeleton.Image active />
    <Skeleton.Node active>
      <div
        style="width: 96px; height: 96px; display: flex; align-items: center; justify-content: center; color: #bfbfbf"
      >
        Node
      </div>
    </Skeleton.Node>
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from '@hmfw/ant-design'
<\/script>
`,M=u({__name:"SkeletonWithChildren",setup(d){const o=S(!0);return(e,r)=>(c(),m("div",null,[a(s(N),{onClick:r[0]||(r[0]=n=>o.value=!o.value)},{default:p(()=>[...r[1]||(r[1]=[g("切换加载状态",-1)])]),_:1}),a(s(l),{loading:o.value,active:"",avatar:""},{default:p(()=>[...r[2]||(r[2]=[t("div",{style:{display:"flex",gap:"12px","margin-top":"16px"}},[t("img",{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1",style:{width:"40px",height:"40px","border-radius":"50%"}}),t("div",null,[t("p",{style:{"font-weight":"bold"}},"用户名称"),t("p",null,"这是一段描述信息，用于展示骨架屏效果。")])],-1)])]),_:1},8,["loading"])]))}}),O=`<template>
  <div>
    <Button @click="loading = !loading">切换加载状态</Button>
    <Skeleton :loading="loading" active avatar>
      <div style="display: flex; gap: 12px; margin-top: 16px">
        <img
          src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
          style="width: 40px; height: 40px; border-radius: 50%"
        />
        <div>
          <p style="font-weight: bold">用户名称</p>
          <p>这是一段描述信息，用于展示骨架屏效果。</p>
        </div>
      </div>
    </Skeleton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Skeleton, Button } from '@hmfw/ant-design'

const loading = ref(true)
<\/script>
`,Q={class:"markdown-body"},Z={__name:"skeleton",setup(d,{expose:o}){return o({frontmatter:{}}),(r,n)=>{const i=x("DemoBlock");return c(),m("div",Q,[n[0]||(n[0]=t("h1",{id:"skeleton-骨架屏",tabindex:"-1"},"Skeleton 骨架屏",-1)),n[1]||(n[1]=t("p",null,"在需要等待加载内容的位置提供一个占位图形组合。",-1)),n[2]||(n[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=t("ul",null,[t("li",null,"网络较慢，需要长时间等待加载处理的情况下"),t("li",null,"图文信息内容较多的列表/卡片中"),t("li",null,"只在第一次加载数据的时候使用")],-1)),n[4]||(n[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=t("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=t("p",null,"最简单的占位效果。",-1)),a(i,{title:"基础用法",source:s(_)},{default:p(()=>[a(I)]),_:1},8,["source"]),n[7]||(n[7]=t("h3",{id:"动画效果",tabindex:"-1"},"动画效果",-1)),n[8]||(n[8]=t("p",null,"显示动画效果。",-1)),a(i,{title:"动画效果",source:s(C)},{default:p(()=>[a(q)]),_:1},8,["source"]),n[9]||(n[9]=t("h3",{id:"包含子组件",tabindex:"-1"},"包含子组件",-1)),n[10]||(n[10]=t("p",null,"加载占位图包含子组件。",-1)),a(i,{title:"包含子组件",source:s(O)},{default:p(()=>[a(M)]),_:1},8,["source"]),n[11]||(n[11]=t("h3",{id:"按钮输入框骨架",tabindex:"-1"},"按钮/输入框骨架",-1)),n[12]||(n[12]=t("p",null,"独立的按钮和输入框骨架。",-1)),a(i,{title:"按钮/输入框骨架",source:s(D)},{default:p(()=>[a(z)]),_:1},8,["source"]),n[13]||(n[13]=t("h3",{id:"头像骨架",tabindex:"-1"},"头像骨架",-1)),n[14]||(n[14]=t("p",null,"独立的头像骨架。",-1)),a(i,{title:"头像骨架",source:s(A)},{default:p(()=>[a(E)]),_:1},8,["source"]),n[15]||(n[15]=t("h3",{id:"图片节点骨架",tabindex:"-1"},"图片/节点骨架",-1)),n[16]||(n[16]=t("p",null,"独立的图片和自定义节点骨架。",-1)),a(i,{title:"图片/节点骨架",source:s(L)},{default:p(()=>[a(H)]),_:1},8,["source"]),n[17]||(n[17]=t("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[18]||(n[18]=t("p",null,[g("通过 "),t("code",null,"classNames"),g(" / "),t("code",null,"styles"),g(" 对主组件及各子组件的元素做细粒度样式控制。")],-1)),a(i,{title:"语义化 className 与 style",source:s(G)},{default:p(()=>[a(j)]),_:1},8,["source"]),n[19]||(n[19]=w(`<h2 id="api" tabindex="-1">API</h2><h3 id="skeleton-props" tabindex="-1">Skeleton Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>avatar</td><td>是否显示头像占位图</td><td><code>boolean | SkeletonAvatarProps</code></td><td><code>false</code></td></tr><tr><td>paragraph</td><td>是否显示段落占位图</td><td><code>boolean | SkeletonParagraphProps</code></td><td><code>true</code></td></tr><tr><td>title</td><td>是否显示标题占位图</td><td><code>boolean | SkeletonTitleProps</code></td><td><code>true</code></td></tr><tr><td>loading</td><td>为 true 时，显示占位图，反之则直接展示子组件</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>round</td><td>为 true 时，段落和标题显示圆角</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SkeletonClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SkeletonStyles</code></td><td>-</td></tr></tbody></table><h3 id="skeletonavatarprops" tabindex="-1">SkeletonAvatarProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>大小</td><td><code>&#39;large&#39; | &#39;default&#39; | &#39;small&#39; | number</code></td><td><code>&#39;large&#39;</code></td></tr><tr><td>shape</td><td>形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr></tbody></table><h3 id="skeletontitleprops" tabindex="-1">SkeletonTitleProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>标题宽度</td><td><code>string | number</code></td><td>-</td></tr></tbody></table><h3 id="skeletonparagraphprops" tabindex="-1">SkeletonParagraphProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>rows</td><td>段落行数</td><td><code>number</code></td><td><code>3</code> (无头像时) / <code>2</code> (有头像时)</td></tr><tr><td>width</td><td>段落宽度，可传数组分别指定每行宽度</td><td><code>string | number | Array&lt;string | number&gt;</code></td><td>-</td></tr></tbody></table><h3 id="skeletonbutton-props" tabindex="-1">Skeleton.Button Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>大小</td><td><code>&#39;large&#39; | &#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>形状</td><td><code>&#39;default&#39; | &#39;circle&#39; | &#39;round&#39; | &#39;square&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>block</td><td>将按钮宽度调整为其父宽度</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SkeletonButtonClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SkeletonButtonStyles</code></td><td>-</td></tr></tbody></table><h3 id="skeletoninput-props" tabindex="-1">Skeleton.Input Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>大小</td><td><code>&#39;large&#39; | &#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>block</td><td>将输入框宽度调整为其父宽度</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SkeletonInputClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SkeletonInputStyles</code></td><td>-</td></tr></tbody></table><h3 id="skeletonavatar-props" tabindex="-1">Skeleton.Avatar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>大小</td><td><code>&#39;large&#39; | &#39;default&#39; | &#39;small&#39; | number</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SkeletonAvatarClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SkeletonAvatarStyles</code></td><td>-</td></tr></tbody></table><h3 id="skeletonimage-props" tabindex="-1">Skeleton.Image Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SkeletonImageClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SkeletonImageStyles</code></td><td>-</td></tr></tbody></table><h3 id="skeletonnode-props" tabindex="-1">Skeleton.Node Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>是否展示动画效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>nodeStyle</td><td>作用于内部占位节点的内联样式（常用于设定占位尺寸）</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SkeletonNodeClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SkeletonNodeStyles</code></td><td>-</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Skeleton 主组件及其子组件（Button/Input/Avatar/Image/Node）的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// Skeleton 主组件</span>
<span class="token keyword">interface</span> <span class="token class-name">SkeletonClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点</span>
  header<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 头部区域（包含 avatar）</span>
  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// Avatar 元素</span>
  section<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内容区域</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标题元素</span>
  paragraph<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 段落容器</span>
  row<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 段落行项</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SkeletonStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  header<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  avatar<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  section<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  title<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  paragraph<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  row<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>

<span class="token comment">// SkeletonButton</span>
<span class="token keyword">interface</span> <span class="token class-name">SkeletonButtonClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点</span>
  button<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// Button 元素</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SkeletonButtonStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  button<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>

<span class="token comment">// SkeletonInput</span>
<span class="token keyword">interface</span> <span class="token class-name">SkeletonInputClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点</span>
  input<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// Input 元素</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SkeletonInputStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  input<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>

<span class="token comment">// SkeletonAvatar</span>
<span class="token keyword">interface</span> <span class="token class-name">SkeletonAvatarClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点</span>
  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// Avatar 元素</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SkeletonAvatarStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  avatar<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>

<span class="token comment">// SkeletonImage</span>
<span class="token keyword">interface</span> <span class="token class-name">SkeletonImageClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点</span>
  image<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// Image 容器</span>
  svg<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// SVG 图标</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// SVG 路径</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SkeletonImageStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  image<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  svg<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  path<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>

<span class="token comment">// SkeletonNode</span>
<span class="token keyword">interface</span> <span class="token class-name">SkeletonNodeClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点</span>
  node<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// Node 容器</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SkeletonNodeStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  node<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- Skeleton 主组件 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.header / styles.header 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton-avatar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.avatar / styles.avatar 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton-section<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.section / styles.section 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.title / styles.title 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton-paragraph<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.paragraph / styles.paragraph 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!-- ↑ classNames.row / styles.row 应用于此 --&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!-- ↑ classNames.row / styles.row 应用于此 --&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- SkeletonButton --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton hmfw-skeleton-element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton-button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.button / styles.button 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- SkeletonInput --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton hmfw-skeleton-element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton-input<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.input / styles.input 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- SkeletonAvatar --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton hmfw-skeleton-element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton-avatar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.avatar / styles.avatar 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- SkeletonImage --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton hmfw-skeleton-element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton-image<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.image / styles.image 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton-image-svg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.svg / styles.svg 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton-image-path<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.path / styles.path 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- SkeletonNode --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton hmfw-skeleton-element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-skeleton-node<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.node / styles.node 应用于此 --&gt;</span>
    <span class="token comment">&lt;!-- 插槽内容 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- Skeleton 主组件 --&gt;
  &lt;Skeleton
    avatar
    :paragraph=&quot;{ rows: 3 }&quot;
    :class-names=&quot;{
      root: &#39;my-skeleton&#39;,
      avatar: &#39;my-avatar&#39;,
      title: &#39;my-title&#39;,
      row: &#39;my-row&#39;,
    }&quot;
  /&gt;

  &lt;!-- SkeletonButton --&gt;
  &lt;SkeletonButton
    active
    :class-names=&quot;{
      button: &#39;my-button&#39;,
    }&quot;
  /&gt;

  &lt;!-- SkeletonImage --&gt;
  &lt;SkeletonImage
    active
    :class-names=&quot;{
      image: &#39;my-image&#39;,
      path: &#39;my-path&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-skeleton) {
  padding: 16px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 8px;
}

:deep(.my-avatar) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

:deep(.my-title) {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  opacity: 0.3;
}

:deep(.my-row) {
  background: linear-gradient(90deg, #52c41a 0%, #389e0d 100%);
  opacity: 0.25;
}

:deep(.my-button) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  border-radius: 8px;
}

:deep(.my-image) {
  background: linear-gradient(135deg, #faad14 0%, #d48806 100%);
  border-radius: 12px;
}

:deep(.my-path) {
  fill: #ffffff;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- Skeleton 主组件 --&gt;
  &lt;Skeleton
    avatar
    :paragraph=&quot;{ rows: 2 }&quot;
    :styles=&quot;{
      root: { padding: &#39;16px&#39;, backgroundColor: &#39;#fafafa&#39;, borderRadius: &#39;8px&#39; },
      avatar: { borderRadius: &#39;12px&#39; },
      title: { height: &#39;20px&#39;, backgroundColor: &#39;#1890ff20&#39; },
      row: { backgroundColor: &#39;#52c41a20&#39; },
    }&quot;
  /&gt;

  &lt;!-- SkeletonButton --&gt;
  &lt;SkeletonButton
    :styles=&quot;{
      button: { background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39; },
    }&quot;
  /&gt;

  &lt;!-- SkeletonInput --&gt;
  &lt;SkeletonInput
    block
    :styles=&quot;{
      input: { backgroundColor: &#39;#ff4d4f20&#39;, borderRadius: &#39;6px&#39; },
    }&quot;
  /&gt;

  &lt;!-- SkeletonAvatar --&gt;
  &lt;SkeletonAvatar
    :size=&quot;64&quot;
    :styles=&quot;{
      avatar: { borderRadius: &#39;16px&#39;, background: &#39;linear-gradient(135deg, #722ed1 0%, #531dab 100%)&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>Skeleton 主组件与子组件（Button/Input/Avatar/Image/Node）各自独立拥有 <code>classNames</code> 和 <code>styles</code> props</li><li>主组件的 <code>classNames.row</code> 会应用于段落的每一行 <code>&lt;li&gt;</code> 元素</li><li>子组件的 <code>root</code> key 对应 <code>.hmfw-skeleton.hmfw-skeleton-element</code> 根节点</li><li>SkeletonImage 的 <code>path</code> key 可用于自定义占位图标的填充色</li><li>动画效果由 <code>.hmfw-skeleton-active</code> 类控制，<code>classNames</code> 不会覆盖动画行为</li><li>响应 <code>prefers-reduced-motion</code> 和 <code>prefers-color-scheme: dark</code> 的样式由组件内置处理</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Skeleton 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-skeleton-color-base</code></td><td>骨架基础色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-skeleton-color-highlight</code></td><td>动画高亮色</td><td><code>rgba(0,0,0,0.15)</code></td></tr><tr><td><code>--hmfw-color-fill</code></td><td>填充色</td><td><code>rgba(0,0,0,0.15)</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次级填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>小号圆角</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-control-height</code></td><td>标准控件高度</td><td><code>32px</code></td></tr><tr><td><code>--hmfw-control-height-lg</code></td><td>大号控件高度</td><td><code>40px</code></td></tr><tr><td><code>--hmfw-control-height-sm</code></td><td>小号控件高度</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-control-height-xs</code></td><td>超小控件高度</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-padding</code></td><td>标准内边距</td><td><code>12px</code> (sizeStep × 3)</td></tr><tr><td><code>--hmfw-margin-sm</code></td><td>小号外边距</td><td><code>8px</code> (sizeStep × 2)</td></tr></tbody></table>`,37))])}}};export{Z as default};
