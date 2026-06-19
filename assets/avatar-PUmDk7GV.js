import{A as a,a as c}from"./Avatar-dax3nkKo.js";import{o as v,A as l,k as p,n as e,K as d,R as n,m as i,h as s,H as x,l as g}from"./index-Dewmb7_Q.js";import{U as f}from"./UserOutlined-DtVzehlz.js";import"./cls-S9IiI6wd.js";const A={style:{display:"flex",gap:"16px","align-items":"center"}},b=v({__name:"AvatarBasic",setup(m){return(o,r)=>(l(),p("div",A,[e(d(a),{size:64,src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}),e(d(a),{size:64},{default:n(()=>[...r[0]||(r[0]=[i(" U ",-1)])]),_:1}),e(d(a),{size:64,style:{"background-color":"#87d068"}},{default:n(()=>[...r[1]||(r[1]=[i(" USER ",-1)])]),_:1})]))}}),y=`<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <Avatar :size="64" src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
    <Avatar :size="64"> U </Avatar>
    <Avatar :size="64" style="background-color: #87d068"> USER </Avatar>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from 'ant-design-hmfw'
<\/script>
`,z={style:{display:"flex","flex-direction":"column",gap:"16px"}},h=v({__name:"AvatarGroupDemo",setup(m){return(o,r)=>(l(),p("div",z,[e(d(c),{"max-count":3},{default:n(()=>[e(d(a),{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}),e(d(a),{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=2"}),e(d(a),{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=3"}),e(d(a),{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=4"}),e(d(a),{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=5"})]),_:1}),e(d(c),{size:"large",shape:"square"},{default:n(()=>[e(d(a),{style:{background:"#f56a00"}},{default:n(()=>[...r[0]||(r[0]=[i(" A ",-1)])]),_:1}),e(d(a),{style:{background:"#1677ff"}},{default:n(()=>[...r[1]||(r[1]=[i(" B ",-1)])]),_:1}),e(d(a),{style:{background:"#87d068"}},{default:n(()=>[...r[2]||(r[2]=[i(" C ",-1)])]),_:1})]),_:1})]))}}),_=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <AvatarGroup :max-count="3">
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=5" />
    </AvatarGroup>

    <!-- size/shape 在 Group 上设置后自动下发给子 Avatar -->
    <AvatarGroup size="large" shape="square">
      <Avatar style="background: #f56a00"> A </Avatar>
      <Avatar style="background: #1677ff"> B </Avatar>
      <Avatar style="background: #87d068"> C </Avatar>
    </AvatarGroup>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarGroup } from 'ant-design-hmfw'
<\/script>
`,S={style:{display:"flex",gap:"16px","align-items":"center"}},k=v({__name:"AvatarResponsive",setup(m){return(o,r)=>(l(),p("div",S,[e(d(a),{size:{xs:24,sm:32,md:40,lg:64,xl:80,xxl:100}},{default:n(()=>[...r[0]||(r[0]=[i(" 响应式 ",-1)])]),_:1}),e(d(a),{size:{xs:24,sm:32,md:40,lg:64,xl:80,xxl:100},icon:d(f)},null,8,["icon"]),r[1]||(r[1]=s("div",{style:{color:"#999","font-size":"12px"}},"调整浏览器窗口宽度查看头像尺寸变化",-1))]))}}),w=`<script setup lang="ts">
import { Avatar } from 'ant-design-hmfw'
import { UserOutlined } from 'ant-design-hmfw'
<\/script>

<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <Avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">
      <template #default> 响应式 </template>
    </Avatar>
    <Avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }" :icon="UserOutlined" />
    <div style="color: #999; font-size: 12px">调整浏览器窗口宽度查看头像尺寸变化</div>
  </div>
</template>
`,G={style:{display:"flex",gap:"16px","align-items":"center"}},B=v({__name:"AvatarSize",setup(m){return(o,r)=>(l(),p("div",G,[e(d(a),{size:"small"},{default:n(()=>[...r[0]||(r[0]=[i(" S ",-1)])]),_:1}),e(d(a),null,{default:n(()=>[...r[1]||(r[1]=[i("M",-1)])]),_:1}),e(d(a),{size:"large"},{default:n(()=>[...r[2]||(r[2]=[i(" L ",-1)])]),_:1}),e(d(a),{size:64},{default:n(()=>[...r[3]||(r[3]=[i(" 64 ",-1)])]),_:1})]))}}),C=`<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <Avatar size="small"> S </Avatar>
    <Avatar>M</Avatar>
    <Avatar size="large"> L </Avatar>
    <Avatar :size="64"> 64 </Avatar>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from 'ant-design-hmfw'
<\/script>
`,U={class:"markdown-body"},D={__name:"avatar",setup(m,{expose:o}){return o({frontmatter:{}}),($,t)=>{const u=x("DemoBlock");return l(),p("div",U,[t[0]||(t[0]=s("h1",{id:"avatar-头像",tabindex:"-1"},"Avatar 头像",-1)),t[1]||(t[1]=s("p",null,"用来代表用户或事物，支持图片、图标或字符展示。",-1)),t[2]||(t[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=s("ul",null,[s("li",null,"需要展示用户头像或事物图标时"),s("li",null,"需要展示一组用户或事物时")],-1)),t[4]||(t[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=s("h3",{id:"基本用法",tabindex:"-1"},"基本用法",-1)),t[6]||(t[6]=s("p",null,"支持三种类型：图片、图标和字符。",-1)),e(u,{title:"基本用法",source:d(y)},{default:n(()=>[e(b)]),_:1},8,["source"]),t[7]||(t[7]=s("h3",{id:"不同尺寸",tabindex:"-1"},"不同尺寸",-1)),t[8]||(t[8]=s("p",null,"支持三种预设尺寸和自定义尺寸。",-1)),e(u,{title:"不同尺寸",source:d(C)},{default:n(()=>[e(B)]),_:1},8,["source"]),t[9]||(t[9]=s("h3",{id:"响应式尺寸",tabindex:"-1"},"响应式尺寸",-1)),t[10]||(t[10]=s("p",null,"支持响应式尺寸配置，根据屏幕断点自动调整头像大小。",-1)),e(u,{title:"响应式尺寸",source:d(w)},{default:n(()=>[e(k)]),_:1},8,["source"]),t[11]||(t[11]=s("h3",{id:"头像组",tabindex:"-1"},"头像组",-1)),t[12]||(t[12]=s("p",null,"使用 AvatarGroup 可以展示一组头像。",-1)),e(u,{title:"头像组",source:d(_)},{default:n(()=>[e(h)]),_:1},8,["source"]),t[13]||(t[13]=g('<h2 id="api" tabindex="-1">API</h2><h3 id="avatar-props" tabindex="-1">Avatar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>头像大小，支持响应式配置</td><td><code>number | &#39;small&#39; | &#39;default&#39; | &#39;large&#39; | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>头像形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr><tr><td>src</td><td>图片地址</td><td><code>string</code></td><td>-</td></tr><tr><td>srcSet</td><td>图片响应式资源地址</td><td><code>string</code></td><td>-</td></tr><tr><td>alt</td><td>图片无法显示时的替代文本</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标组件</td><td><code>Component</code></td><td>-</td></tr><tr><td>draggable</td><td>图片是否允许拖拽</td><td><code>boolean | &#39;true&#39; | &#39;false&#39;</code></td><td>-</td></tr><tr><td>crossOrigin</td><td>CORS 属性设置</td><td><code>&#39;&#39; | &#39;anonymous&#39; | &#39;use-credentials&#39;</code></td><td>-</td></tr><tr><td>referrerPolicy</td><td>referrer 策略</td><td><code>&#39;no-referrer&#39; | &#39;no-referrer-when-downgrade&#39; | &#39;origin&#39; | &#39;origin-when-cross-origin&#39; | &#39;same-origin&#39; | &#39;strict-origin&#39; | &#39;strict-origin-when-cross-origin&#39; | &#39;unsafe-url&#39;</code></td><td>-</td></tr><tr><td>gap</td><td>字符类型距离左右两侧边界单位像素</td><td><code>number</code></td><td><code>4</code></td></tr></tbody></table><h3 id="avatargroup-props" tabindex="-1">AvatarGroup Props</h3><p>设置后会自动下发 <code>size</code>/<code>shape</code> 给子 Avatar（子 Avatar 显式设置可覆盖）。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>maxCount</td><td>最多显示的头像数量</td><td><code>number</code></td><td>-</td></tr><tr><td>maxStyle</td><td>多余头像样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>size</td><td>头像大小（下发给子 Avatar），支持响应式配置</td><td><code>number | &#39;small&#39; | &#39;default&#39; | &#39;large&#39; | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>头像形状（下发给子 Avatar）</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr></tbody></table>',6))])}}};export{D as default};
