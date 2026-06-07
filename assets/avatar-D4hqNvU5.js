import{A as r,a as c}from"./Avatar-B5FiJ8xt.js";import{n as m,z as l,j as p,m as e,J as a,Q as s,l as n,G as A,g as o,k as g}from"./index-BIkAb7lZ.js";import"./cls-S9IiI6wd.js";const f={style:{display:"flex",gap:"16px","align-items":"center"}},x=m({__name:"AvatarBasic",setup(u){return(i,d)=>(l(),p("div",f,[e(a(r),{size:64,src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}),e(a(r),{size:64},{default:s(()=>[...d[0]||(d[0]=[n("U",-1)])]),_:1}),e(a(r),{size:64,style:{"background-color":"#87d068"}},{default:s(()=>[...d[1]||(d[1]=[n("USER",-1)])]),_:1})]))}}),b=`<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <Avatar :size="64" src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
    <Avatar :size="64">U</Avatar>
    <Avatar :size="64" style="background-color: #87d068;">USER</Avatar>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from 'ant-design-hmfw'
<\/script>
`,y={style:{display:"flex","flex-direction":"column",gap:"16px"}},z=m({__name:"AvatarGroupDemo",setup(u){return(i,d)=>(l(),p("div",y,[e(a(c),{"max-count":3},{default:s(()=>[e(a(r),{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}),e(a(r),{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=2"}),e(a(r),{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=3"}),e(a(r),{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=4"}),e(a(r),{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=5"})]),_:1}),e(a(c),{size:"large",shape:"square"},{default:s(()=>[e(a(r),{style:{background:"#f56a00"}},{default:s(()=>[...d[0]||(d[0]=[n("A",-1)])]),_:1}),e(a(r),{style:{background:"#1677ff"}},{default:s(()=>[...d[1]||(d[1]=[n("B",-1)])]),_:1}),e(a(r),{style:{background:"#87d068"}},{default:s(()=>[...d[2]||(d[2]=[n("C",-1)])]),_:1})]),_:1})]))}}),h=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <AvatarGroup :max-count="3">
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=5" />
    </AvatarGroup>

    <!-- size/shape 在 Group 上设置后自动下发给子 Avatar -->
    <AvatarGroup size="large" shape="square">
      <Avatar style="background:#f56a00">A</Avatar>
      <Avatar style="background:#1677ff">B</Avatar>
      <Avatar style="background:#87d068">C</Avatar>
    </AvatarGroup>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarGroup } from 'ant-design-hmfw'
<\/script>
`,S={style:{display:"flex",gap:"16px","align-items":"center"}},k=m({__name:"AvatarSize",setup(u){return(i,d)=>(l(),p("div",S,[e(a(r),{size:"small"},{default:s(()=>[...d[0]||(d[0]=[n("S",-1)])]),_:1}),e(a(r),null,{default:s(()=>[...d[1]||(d[1]=[n("M",-1)])]),_:1}),e(a(r),{size:"large"},{default:s(()=>[...d[2]||(d[2]=[n("L",-1)])]),_:1}),e(a(r),{size:64},{default:s(()=>[...d[3]||(d[3]=[n("64",-1)])]),_:1})]))}}),_=`<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <Avatar size="small">S</Avatar>
    <Avatar>M</Avatar>
    <Avatar size="large">L</Avatar>
    <Avatar :size="64">64</Avatar>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from 'ant-design-hmfw'
<\/script>
`,G={class:"markdown-body"},q={__name:"avatar",setup(u,{expose:i}){return i({frontmatter:{}}),(B,t)=>{const v=A("DemoBlock");return l(),p("div",G,[t[0]||(t[0]=o("h1",{id:"avatar-",tabindex:"-1"},"Avatar 头像",-1)),t[1]||(t[1]=o("p",null,"用来代表用户或事物，支持图片、图标或字符展示。",-1)),t[2]||(t[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=o("ul",null,[o("li",null,"需要展示用户头像或事物图标时"),o("li",null,"需要展示一组用户或事物时")],-1)),t[4]||(t[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=o("h3",{id:"-2",tabindex:"-1"},"基本用法",-1)),t[6]||(t[6]=o("p",null,"支持三种类型：图片、图标和字符。",-1)),e(v,{title:"基本用法",source:a(b)},{default:s(()=>[e(x)]),_:1},8,["source"]),t[7]||(t[7]=o("h3",{id:"-3",tabindex:"-1"},"不同尺寸",-1)),t[8]||(t[8]=o("p",null,"支持三种预设尺寸和自定义尺寸。",-1)),e(v,{title:"不同尺寸",source:a(_)},{default:s(()=>[e(k)]),_:1},8,["source"]),t[9]||(t[9]=o("h3",{id:"-4",tabindex:"-1"},"头像组",-1)),t[10]||(t[10]=o("p",null,"使用 AvatarGroup 可以展示一组头像。",-1)),e(v,{title:"头像组",source:a(h)},{default:s(()=>[e(z)]),_:1},8,["source"]),t[11]||(t[11]=g('<h2 id="api" tabindex="-1">API</h2><h3 id="avatar-props" tabindex="-1">Avatar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>头像大小</td><td><code>number | &#39;small&#39; | &#39;default&#39; | &#39;large&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>头像形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr><tr><td>src</td><td>图片地址</td><td><code>string</code></td><td>-</td></tr><tr><td>srcSet</td><td>图片响应式资源地址</td><td><code>string</code></td><td>-</td></tr><tr><td>alt</td><td>图片无法显示时的替代文本</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标组件</td><td><code>Component</code></td><td>-</td></tr><tr><td>draggable</td><td>图片是否允许拖拽</td><td><code>boolean | &#39;true&#39; | &#39;false&#39;</code></td><td>-</td></tr><tr><td>crossOrigin</td><td>CORS 属性设置</td><td><code>&#39;&#39; | &#39;anonymous&#39; | &#39;use-credentials&#39;</code></td><td>-</td></tr><tr><td>gap</td><td>字符类型距离左右两侧边界单位像素</td><td><code>number</code></td><td><code>4</code></td></tr></tbody></table><h3 id="avatargroup-props" tabindex="-1">AvatarGroup Props</h3><p>设置后会自动下发 <code>size</code>/<code>shape</code> 给子 Avatar（子 Avatar 显式设置可覆盖）。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>maxCount</td><td>最多显示的头像数量</td><td><code>number</code></td><td>-</td></tr><tr><td>maxStyle</td><td>多余头像样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>size</td><td>头像大小（下发给子 Avatar）</td><td><code>number | &#39;small&#39; | &#39;default&#39; | &#39;large&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>头像形状（下发给子 Avatar）</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr></tbody></table>',6))])}}};export{q as default};
