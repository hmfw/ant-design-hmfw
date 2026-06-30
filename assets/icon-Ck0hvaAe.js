import{S as b}from"./Space-DIK7Q-ya.js";import{iJ as V,j7 as F,jb as $,j9 as P,j8 as G}from"./utils-CdFquu3p.js";import{C as N}from"./CheckOutlined-Qt4S3Z0X.js";import{C as j}from"./CloseOutlined-Cyc9QAx7.js";import{D as W}from"./DeleteOutlined-CZoLGXFP.js";import{D as T}from"./DownOutlined-Ct3Sxh2i.js";import{E as Q}from"./EditOutlined-BvJk4emg.js";import{E as Z}from"./EyeOutlined-DbpJqG0M.js";import{H as O}from"./HomeOutlined-BLUdvd1Z.js";import{I as J}from"./RocketOutlined-Bh__N93b.js";import{L as K}from"./LeftOutlined-DbjhzKe4.js";import{L as A}from"./LoadingOutlined-DqorBNRC.js";import{M as X}from"./MinusOutlined-C7E0X_-_.js";import{P as Y}from"./PlusOutlined-6j0h-j0J.js";import{R as nn}from"./RightOutlined-DQVUS5Tj.js";import{S as tn}from"./SearchOutlined-DXnml86D.js";import{S as H}from"./SettingOutlined-DSo70pD5.js";import{U as sn}from"./UpOutlined-QDH1pVXY.js";import{U as h}from"./UserOutlined-DdbPmEiT.js";import{o as y,A as l,i as v,S as m,n,L as t,k as p,h as a,U as an,Q as en,F as C,G as _,u as I,K as x,j as q,I as on,m as r,E as S,f as L,_ as ln,H as cn,l as pn}from"./index-8XlzfTv5.js";import"./cls-S9IiI6wd.js";import"./AppleOutlined-DqzHeeen.js";import"./TeamOutlined-Cx42dCxn.js";import"./PictureOutlined-Bwc8z81x.js";import"./CaretRightFilled-B0RWJu1e.js";import"./CloseCircleFilled-BGcOiTRa.js";import"./CloseCircleOutlined-DF8v0sUH.js";import"./CopyOutlined-JuFvafwA.js";import"./DownloadOutlined-D7S0wgYX.js";import"./ExclamationCircleFilled-DDGeIVID.js";import"./UploadOutlined-WuNz7lBA.js";import"./InfoCircleFilled-HaNasUQq.js";import"./ZoomOutOutlined-Cf2QoEez.js";import"./WarningFilled-BzLCwxcO.js";const un=y({__name:"IconBasic",setup(w){return(u,d)=>(l(),v(t(b),{size:16,wrap:""},{default:m(()=>[n(t(tn),{class:"hmfw-icon"}),n(t(j),{class:"hmfw-icon"}),n(t(N),{class:"hmfw-icon"}),n(t(V),{class:"hmfw-icon"}),n(t(J),{class:"hmfw-icon"}),n(t(A),{class:"hmfw-icon"}),n(t(sn),{class:"hmfw-icon"}),n(t(T),{class:"hmfw-icon"}),n(t(K),{class:"hmfw-icon"}),n(t(nn),{class:"hmfw-icon"}),n(t(Y),{class:"hmfw-icon"}),n(t(X),{class:"hmfw-icon"}),n(t(Q),{class:"hmfw-icon"}),n(t(W),{class:"hmfw-icon"}),n(t(Z),{class:"hmfw-icon"}),n(t(O),{class:"hmfw-icon"}),n(t(h),{class:"hmfw-icon"}),n(t(H),{class:"hmfw-icon"})]),_:1}))}}),dn=`<template>
  <Space :size="16" wrap>
    <SearchOutlined class="hmfw-icon" />
    <CloseOutlined class="hmfw-icon" />
    <CheckOutlined class="hmfw-icon" />
    <WarningOutlined class="hmfw-icon" />
    <InfoCircleOutlined class="hmfw-icon" />
    <LoadingOutlined class="hmfw-icon" />
    <UpOutlined class="hmfw-icon" />
    <DownOutlined class="hmfw-icon" />
    <LeftOutlined class="hmfw-icon" />
    <RightOutlined class="hmfw-icon" />
    <PlusOutlined class="hmfw-icon" />
    <MinusOutlined class="hmfw-icon" />
    <EditOutlined class="hmfw-icon" />
    <DeleteOutlined class="hmfw-icon" />
    <EyeOutlined class="hmfw-icon" />
    <HomeOutlined class="hmfw-icon" />
    <UserOutlined class="hmfw-icon" />
    <SettingOutlined class="hmfw-icon" />
  </Space>
</template>

<script setup lang="ts">
import {
  Space,
  SearchOutlined,
  CloseOutlined,
  CheckOutlined,
  WarningOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
  UpOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  PlusOutlined,
  MinusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
} from '@hmfw/ant-design'
<\/script>
`,rn={class:"icon-browser"},mn={class:"search-wrapper"},fn={class:"category-tabs"},kn=["onClick"],On={key:0,class:"icon-stats"},hn={class:"stats-text"},wn={class:"style-switch"},gn=["onClick"],xn={key:1,class:"icon-groups"},yn={class:"group-title"},vn={class:"icon-list"},Cn=["onClick"],_n={class:"icon-label"},Sn={key:0,class:"copied-badge"},bn={key:2,class:"empty-state"},zn=y({__name:"IconBrowser",setup(w){const u=S(""),d=S("all"),g=S(""),s=S("all"),k=[{value:"all",label:"全部"},{value:"outlined",label:"线形"},{value:"filled",label:"实底"}],R=L(()=>["all",...F()]),D=i=>s.value==="filled"?i.filter(e=>e.name.endsWith("-filled")):s.value==="outlined"?i.filter(e=>!e.name.endsWith("-filled")):i,U=L(()=>{const i={};let e=[];if(u.value.trim())return{"Search Results":D($(u.value))};d.value!=="all"?e=P(d.value):e=G(),e=D(e),e.forEach(c=>{i[c.category]||(i[c.category]=[]),i[c.category].push(c)});const o={};return F().forEach(c=>{i[c]&&(o[c]=i[c])}),o}),z=L(()=>Object.values(U.value).reduce((i,e)=>i+e.length,0)),M=i=>{const o=i.name.split("-").map(B=>B.charAt(0).toUpperCase()+B.slice(1)).join(""),c=i.name.includes("filled")?"Filled":"Outlined",E=`<${o.replace(/filled$/i,"")+c} class="hmfw-icon" />`;navigator.clipboard.writeText(E).then(()=>{g.value=i.name,setTimeout(()=>{g.value=""},2e3)})};return(i,e)=>(l(),p("div",rn,[a("div",mn,[an(a("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>u.value=o),type:"text",placeholder:"在此搜索图标，点击图标可复制代码",class:"search-input"},null,512),[[en,u.value]])]),a("div",fn,[(l(!0),p(C,null,_(R.value,o=>(l(),p("button",{key:o,class:I(["category-tab",{active:d.value===o}]),onClick:c=>d.value=o},x(o==="all"?"全部图标":o),11,kn))),128))]),z.value>0?(l(),p("div",On,[a("span",hn,"共 "+x(z.value)+" 个图标",1),a("div",wn,[(l(),p(C,null,_(k,o=>a("button",{key:o.value,class:I(["style-switch__item",{active:s.value===o.value}]),onClick:c=>s.value=o.value},x(o.label),11,gn)),64))])])):q("",!0),z.value>0?(l(),p("div",xn,[(l(!0),p(C,null,_(U.value,(o,c)=>(l(),p("div",{key:c,class:"icon-group"},[a("h4",yn,x(c),1),a("ul",vn,[(l(!0),p(C,null,_(o,f=>(l(),p("li",{key:f.name,class:I(["icon-item",{copied:g.value===f.name}]),onClick:E=>M(f)},[(l(),v(on(f.component),{class:"hmfw-icon icon-svg"})),a("span",_n,x(f.name),1),g.value===f.name?(l(),p("span",Sn,[...e[1]||(e[1]=[a("svg",{viewBox:"64 64 896 896",width:"1em",height:"1em",fill:"currentColor"},[a("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"})],-1),r(" Copied! ",-1)])])):q("",!0)],10,Cn))),128))])]))),128))])):(l(),p("div",bn,[...e[2]||(e[2]=[a("svg",{viewBox:"64 64 896 896",width:"64",height:"64",fill:"currentColor",opacity:"0.3"},[a("path",{d:"M893.6 693.2L730.4 530c-9.4-9.4-24.6-9.4-33.9 0l-63.7 63.7-96.6-96.6L762.9 270.4c1.8-1.9 3.3-4 4.5-6.2l86.8-158.8c2.8-5.1.9-11.5-4.2-14.3-5.1-2.8-11.5-.9-14.3 4.2L749 253.9c-1.2 2.2-2.7 4.3-4.5 6.2L518.2 486.4 282 250.2c-9.4-9.4-24.6-9.4-33.9 0L64.4 433.9c-9.4 9.4-9.4 24.6 0 33.9l464.6 464.6c9.4 9.4 24.6 9.4 33.9 0l330.7-330.8c9.4-9.4 9.4-24.6 0-33.9z"})],-1),a("p",{class:"empty-text"},"未找到相关图标",-1)])]))]))}}),In=ln(zn,[["__scopeId","data-v-bef2e745"]]),Ln=y({__name:"IconColor",setup(w){return(u,d)=>(l(),v(t(b),{size:16},{default:m(()=>[n(t(h),{class:"hmfw-icon",style:{"font-size":"24px",color:"#1677ff"}}),n(t(h),{class:"hmfw-icon",style:{"font-size":"24px",color:"#52c41a"}}),n(t(h),{class:"hmfw-icon",style:{"font-size":"24px",color:"#faad14"}}),n(t(h),{class:"hmfw-icon",style:{"font-size":"24px",color:"#ff4d4f"}}),n(t(h),{class:"hmfw-icon",style:{"font-size":"24px",color:"#722ed1"}})]),_:1}))}}),Dn=`<template>
  <Space :size="16">
    <UserOutlined class="hmfw-icon" style="font-size: 24px; color: #1677ff" />
    <UserOutlined class="hmfw-icon" style="font-size: 24px; color: #52c41a" />
    <UserOutlined class="hmfw-icon" style="font-size: 24px; color: #faad14" />
    <UserOutlined class="hmfw-icon" style="font-size: 24px; color: #ff4d4f" />
    <UserOutlined class="hmfw-icon" style="font-size: 24px; color: #722ed1" />
  </Space>
</template>

<script setup lang="ts">
import { Space, UserOutlined } from '@hmfw/ant-design'
<\/script>
`,Un=y({__name:"IconSize",setup(w){return(u,d)=>(l(),v(t(b),{size:16,align:"center"},{default:m(()=>[n(t(O),{class:"hmfw-icon",style:{"font-size":"12px"}}),n(t(O),{class:"hmfw-icon",style:{"font-size":"16px"}}),n(t(O),{class:"hmfw-icon",style:{"font-size":"24px"}}),n(t(O),{class:"hmfw-icon",style:{"font-size":"32px"}}),n(t(O),{class:"hmfw-icon",style:{"font-size":"48px"}})]),_:1}))}}),En=`<template>
  <Space :size="16" align="center">
    <HomeOutlined class="hmfw-icon" style="font-size: 12px" />
    <HomeOutlined class="hmfw-icon" style="font-size: 16px" />
    <HomeOutlined class="hmfw-icon" style="font-size: 24px" />
    <HomeOutlined class="hmfw-icon" style="font-size: 32px" />
    <HomeOutlined class="hmfw-icon" style="font-size: 48px" />
  </Space>
</template>

<script setup lang="ts">
import { Space, HomeOutlined } from '@hmfw/ant-design'
<\/script>
`,Bn=y({__name:"IconSpin",setup(w){return(u,d)=>(l(),v(t(b),{size:16},{default:m(()=>[n(t(A),{class:"hmfw-icon-spin",style:{"font-size":"24px"}}),n(t(H),{class:"hmfw-icon-spin",style:{"font-size":"24px"}})]),_:1}))}}),Fn=`<template>
  <Space :size="16">
    <LoadingOutlined class="hmfw-icon-spin" style="font-size: 24px" />
    <SettingOutlined class="hmfw-icon-spin" style="font-size: 24px" />
  </Space>
</template>

<script setup lang="ts">
import { Space, LoadingOutlined, SettingOutlined } from '@hmfw/ant-design'
<\/script>
`,qn={class:"markdown-body"},Ot={__name:"icon",setup(w,{expose:u}){return u({frontmatter:{}}),(g,s)=>{const k=cn("DemoBlock");return l(),p("div",qn,[s[0]||(s[0]=a("h1",{id:"icon-图标",tabindex:"-1"},"Icon 图标",-1)),s[1]||(s[1]=a("p",null,"语义化的矢量图形，用于展示常用的操作和状态。",-1)),s[2]||(s[2]=a("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),s[3]||(s[3]=a("ul",null,[a("li",null,"需要展示操作图标时"),a("li",null,"需要展示状态图标时"),a("li",null,"需要展示品牌图标时")],-1)),s[4]||(s[4]=a("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),s[5]||(s[5]=a("h3",{id:"图标浏览器",tabindex:"-1"},"图标浏览器",-1)),s[6]||(s[6]=a("p",null,"浏览所有内置图标，支持搜索和分类过滤。点击图标可复制代码。",-1)),n(In),s[7]||(s[7]=a("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),s[8]||(s[8]=a("p",null,"展示内置的图标类型。",-1)),n(k,{title:"基础用法",source:t(dn)},{default:m(()=>[n(un)]),_:1},8,["source"]),s[9]||(s[9]=a("h3",{id:"图标尺寸",tabindex:"-1"},"图标尺寸",-1)),s[10]||(s[10]=a("p",null,[r("通过 "),a("code",null,'style="font-size: Npx"'),r(" 控制图标大小（图标使用 "),a("code",null,"1em"),r(" 跟随字体大小）。")],-1)),n(k,{title:"图标尺寸",source:t(En)},{default:m(()=>[n(Un)]),_:1},8,["source"]),s[11]||(s[11]=a("h3",{id:"图标颜色",tabindex:"-1"},"图标颜色",-1)),s[12]||(s[12]=a("p",null,[r("通过 "),a("code",null,'style="color: #xxx"'),r(" 控制图标颜色（图标使用 "),a("code",null,"currentColor"),r(" 继承文字颜色）。")],-1)),n(k,{title:"图标颜色",source:t(Dn)},{default:m(()=>[n(Ln)]),_:1},8,["source"]),s[13]||(s[13]=a("h3",{id:"旋转动画",tabindex:"-1"},"旋转动画",-1)),s[14]||(s[14]=a("p",null,[r("通过 "),a("code",null,"spin"),r(" 属性让图标旋转。")],-1)),n(k,{title:"旋转动画",source:t(Fn)},{default:m(()=>[n(Bn)]),_:1},8,["source"]),s[15]||(s[15]=pn(`<h2 id="api" tabindex="-1">API</h2><h3 id="icon-props" tabindex="-1">Icon Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>component</td><td>图标组件（SVG 函数式组件）</td><td><code>IconComponent</code></td><td>-</td></tr><tr><td>spin</td><td>是否旋转</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>rotate</td><td>旋转角度（deg）</td><td><code>number</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式（可用于设置 <code>font-size</code>、<code>color</code>）</td><td><code>string | CSSProperties</code></td><td>-</td></tr><tr><td>class</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="内置图标" tabindex="-1">内置图标</h3><p>图标库已同步 Ant Design v6，提供 <strong>681 个高质量图标</strong>（447 个 Outlined + 234 个 Filled），覆盖反馈、操作、方向、导航、文件、编辑、品牌等全部分类。</p><p>完整列表请通过上方「图标浏览器」查看，或导入后直接使用，例如：</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span>
  <span class="token comment">// 反馈</span>
  CheckOutlined<span class="token punctuation">,</span>
  WarningOutlined<span class="token punctuation">,</span>
  InfoCircleOutlined<span class="token punctuation">,</span>
  LoadingOutlined<span class="token punctuation">,</span>
  CheckCircleFilled<span class="token punctuation">,</span>
  CloseCircleFilled<span class="token punctuation">,</span>
  ExclamationCircleFilled<span class="token punctuation">,</span>
  InfoCircleFilled<span class="token punctuation">,</span>
  QuestionCircleOutlined<span class="token punctuation">,</span>

  <span class="token comment">// 操作</span>
  SearchOutlined<span class="token punctuation">,</span>
  PlusOutlined<span class="token punctuation">,</span>
  MinusOutlined<span class="token punctuation">,</span>
  EditOutlined<span class="token punctuation">,</span>
  DeleteOutlined<span class="token punctuation">,</span>
  EyeOutlined<span class="token punctuation">,</span>
  SettingOutlined<span class="token punctuation">,</span>
  CopyOutlined<span class="token punctuation">,</span>
  ReloadOutlined<span class="token punctuation">,</span>
  SyncOutlined<span class="token punctuation">,</span>
  SaveOutlined<span class="token punctuation">,</span>
  ShareAltOutlined<span class="token punctuation">,</span>
  DownloadOutlined<span class="token punctuation">,</span>
  FilterOutlined<span class="token punctuation">,</span>

  <span class="token comment">// 方向</span>
  UpOutlined<span class="token punctuation">,</span>
  DownOutlined<span class="token punctuation">,</span>
  LeftOutlined<span class="token punctuation">,</span>
  RightOutlined<span class="token punctuation">,</span>
  ArrowUpOutlined<span class="token punctuation">,</span>
  ArrowDownOutlined<span class="token punctuation">,</span>
  ArrowLeftOutlined<span class="token punctuation">,</span>
  ArrowRightOutlined<span class="token punctuation">,</span>
  CaretUpOutlined<span class="token punctuation">,</span>
  CaretDownOutlined<span class="token punctuation">,</span>
  CaretLeftOutlined<span class="token punctuation">,</span>
  CaretRightOutlined<span class="token punctuation">,</span>
  DoubleLeftOutlined<span class="token punctuation">,</span>
  DoubleRightOutlined<span class="token punctuation">,</span>
  SwapOutlined<span class="token punctuation">,</span>
  FullscreenOutlined<span class="token punctuation">,</span>
  FullscreenExitOutlined<span class="token punctuation">,</span>
  ZoomInOutlined<span class="token punctuation">,</span>
  ZoomOutOutlined<span class="token punctuation">,</span>
  RotateLeftOutlined<span class="token punctuation">,</span>
  RotateRightOutlined<span class="token punctuation">,</span>

  <span class="token comment">// 导航</span>
  HomeOutlined<span class="token punctuation">,</span>
  MenuOutlined<span class="token punctuation">,</span>
  BarsOutlined<span class="token punctuation">,</span>
  EllipsisOutlined<span class="token punctuation">,</span>
  LoginOutlined<span class="token punctuation">,</span>
  LogoutOutlined<span class="token punctuation">,</span>
  GlobalOutlined<span class="token punctuation">,</span>

  <span class="token comment">// 通用</span>
  UserOutlined<span class="token punctuation">,</span>
  BellOutlined<span class="token punctuation">,</span>
  BellFilled<span class="token punctuation">,</span>
  StarOutlined<span class="token punctuation">,</span>
  StarFilled<span class="token punctuation">,</span>
  HeartOutlined<span class="token punctuation">,</span>
  HeartFilled<span class="token punctuation">,</span>
  LockOutlined<span class="token punctuation">,</span>
  UnlockOutlined<span class="token punctuation">,</span>
  CloudOutlined<span class="token punctuation">,</span>
  LinkOutlined<span class="token punctuation">,</span>
  MessageOutlined<span class="token punctuation">,</span>
  MailOutlined<span class="token punctuation">,</span>
  PhoneOutlined<span class="token punctuation">,</span>
  CalendarOutlined<span class="token punctuation">,</span>
  ClockCircleOutlined<span class="token punctuation">,</span>

  <span class="token comment">// 文件</span>
  FolderOutlined<span class="token punctuation">,</span>
  FolderOpenOutlined<span class="token punctuation">,</span>
  FileOutlined<span class="token punctuation">,</span>
  PictureOutlined<span class="token punctuation">,</span>
  VideoCameraOutlined<span class="token punctuation">,</span>

  <span class="token comment">// 品牌</span>
  AndroidOutlined<span class="token punctuation">,</span>
  AppleOutlined<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@hmfw/ant-design&#39;</span>
</code></pre><h3 id="自定义图标" tabindex="-1">自定义图标</h3><h4 id="方案一内联函数式组件" tabindex="-1">方案一：内联函数式组件</h4><p>实现 <code>IconComponent</code> 类型（<code>FunctionalComponent&lt;SVGAttributes&gt;</code>）即可传入任意 SVG 图标：</p><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> IconComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@hmfw/ant-design&#39;</span>

<span class="token keyword">const</span> MyIcon<span class="token operator">:</span> <span class="token function-variable function">IconComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 24 24<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1em<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1em<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentColor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>
</code></pre><pre class="language-vue"><code class="language-vue">&lt;MyIcon class=&quot;hmfw-icon&quot; /&gt;
</code></pre><h4 id="方案二脚本批量生成" tabindex="-1">方案二：脚本批量生成</h4><p>如果你有大量自定义 SVG（品牌 Logo、业务图标），推荐通过脚本批量生成图标组件文件。 仓库 <code>scripts/examples/build-custom-icons.ts</code> 提供了完整的脚本示例，使用方法见 <code>scripts/examples/README.md</code>。</p><p>简要流程：</p><ol><li>复制 <code>scripts/examples/build-custom-icons.ts</code> 到你的项目并改写顶部配置</li><li>把 SVG 文件（kebab-case 命名）放入 <code>SVG_DIR</code></li><li>运行 <code>npx tsx scripts/build-my-icons.ts</code>，生成的图标组件可直接 <code>import</code> 使用</li></ol>`,16))])}}};export{Ot as default};
