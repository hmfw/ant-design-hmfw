import{S}from"./Space-D9xDm6ES.js";import{S as P}from"./SearchOutlined-Cy9NaxPj.js";import{C as $}from"./CheckOutlined-BU3XmVCm.js";import{C as N}from"./CloseOutlined-DKz4fbxu.js";import{D as G}from"./DeleteOutlined-CSymSIOQ.js";import{D as W}from"./DownOutlined-NqsBDvU3.js";import{E as T}from"./EditOutlined-pImlnW06.js";import{E as j,I as Q}from"./Input-DmcsXCn8.js";import{H as h}from"./HomeOutlined-B-1Z3Jb0.js";import{I as Z}from"./RocketOutlined-C_plvFBg.js";import{L as K}from"./LeftOutlined-CNcBTSRE.js";import{L as R}from"./LoadingOutlined-DsitE8co.js";import{M as J}from"./MinusOutlined-BYeGRY94.js";import{P as X}from"./PlusOutlined-BQGIX6nm.js";import{R as Y}from"./RightOutlined-kHRbqwBr.js";import{S as H}from"./SettingOutlined-CyV0uG73.js";import{U as nn}from"./UpOutlined-CoW4zDpA.js";import{U as O}from"./UserOutlined-CikfPcWP.js";import{W as sn,g as q,s as tn,a as an,b as en}from"./utils-CvdzTccN.js";import{d as x,o as l,q as _,w as m,c as n,e as s,b as i,f as t,F as v,z as C,M as z,A as y,K as E,N as on,g as r,r as b,a as L,_ as ln,h as cn,i as F}from"./index-DCNtHlH3.js";import"./cls-S9IiI6wd.js";import"./AppleOutlined-CPpJKSwl.js";import"./TeamOutlined-DlmLwhcp.js";import"./PictureOutlined-C4fUAbO9.js";import"./CalendarOutlined-CI1GDkl_.js";import"./CaretRightFilled-jNpaNYCi.js";import"./CheckCircleFilled-LzcZ7u0z.js";import"./ClockCircleOutlined-DOklSiZ8.js";import"./CloseCircleFilled-C78DeZ8j.js";import"./CloseCircleOutlined-CYugxoN-.js";import"./CopyOutlined-CGnrA4cy.js";import"./DownloadOutlined-adzdDZGW.js";import"./ExclamationCircleFilled-CbFCQTZ3.js";import"./UploadOutlined-Cyq1INsD.js";import"./InfoCircleFilled-CKVuERda.js";import"./ZoomOutOutlined-Caq2pkGR.js";import"./WarningFilled-C5IU831L.js";const pn=x({__name:"IconBasic",setup(w){return(u,d)=>(l(),_(s(S),{size:16,wrap:""},{default:m(()=>[n(s(P),{class:"hmfw-icon"}),n(s(N),{class:"hmfw-icon"}),n(s($),{class:"hmfw-icon"}),n(s(sn),{class:"hmfw-icon"}),n(s(Z),{class:"hmfw-icon"}),n(s(R),{class:"hmfw-icon"}),n(s(nn),{class:"hmfw-icon"}),n(s(W),{class:"hmfw-icon"}),n(s(K),{class:"hmfw-icon"}),n(s(Y),{class:"hmfw-icon"}),n(s(X),{class:"hmfw-icon"}),n(s(J),{class:"hmfw-icon"}),n(s(T),{class:"hmfw-icon"}),n(s(G),{class:"hmfw-icon"}),n(s(j),{class:"hmfw-icon"}),n(s(h),{class:"hmfw-icon"}),n(s(O),{class:"hmfw-icon"}),n(s(H),{class:"hmfw-icon"})]),_:1}))}}),un=`<template>
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
import { Space } from '@hmfw/ant-design'
import {
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
} from '@hmfw/icons'
<\/script>
`,dn={class:"icon-browser"},rn={class:"search-wrapper"},mn={class:"category-tabs"},kn=["onClick"],fn={key:0,class:"icon-stats"},hn={class:"stats-text"},On={class:"style-switch"},wn=["onClick"],gn={key:1,class:"icon-groups"},yn={class:"group-title"},xn={class:"icon-list"},_n=["onClick"],vn={class:"icon-label"},Cn={key:0,class:"copied-badge"},bn={key:2,class:"empty-state"},Sn=x({__name:"IconBrowser",setup(w){const u=b(""),d=b("all"),g=b(""),a=b("all"),f=[{value:"all",label:"全部"},{value:"outlined",label:"线形"},{value:"filled",label:"实底"}],M=L(()=>["all",...q()]),D=c=>a.value==="filled"?c.filter(e=>e.name.endsWith("-filled")):a.value==="outlined"?c.filter(e=>!e.name.endsWith("-filled")):c,U=L(()=>{const c={};let e=[];if(u.value.trim())return{"Search Results":D(tn(u.value))};d.value!=="all"?e=an(d.value):e=en(),e=D(e),e.forEach(p=>{c[p.category]||(c[p.category]=[]),c[p.category].push(p)});const o={};return q().forEach(p=>{c[p]&&(o[p]=c[p])}),o}),I=L(()=>Object.values(U.value).reduce((c,e)=>c+e.length,0)),V=c=>{const o=c.name.split("-").map(B=>B.charAt(0).toUpperCase()+B.slice(1)).join(""),p=c.name.includes("filled")?"Filled":"Outlined",A=`<${o.replace(/filled$/i,"")+p} class="hmfw-icon" />`;navigator.clipboard.writeText(A).then(()=>{g.value=c.name,setTimeout(()=>{g.value=""},2e3)})};return(c,e)=>(l(),i("div",dn,[t("div",rn,[n(s(Q),{value:u.value,"onUpdate:value":e[0]||(e[0]=o=>u.value=o),placeholder:"在此搜索图标，点击图标可复制代码",class:"search-input"},null,8,["value"])]),t("div",mn,[(l(!0),i(v,null,C(M.value,o=>(l(),i("button",{key:o,class:z(["category-tab",{active:d.value===o}]),onClick:p=>d.value=o},y(o==="all"?"全部图标":o),11,kn))),128))]),I.value>0?(l(),i("div",fn,[t("span",hn,"共 "+y(I.value)+" 个图标",1),t("div",On,[(l(),i(v,null,C(f,o=>t("button",{key:o.value,class:z(["style-switch__item",{active:a.value===o.value}]),onClick:p=>a.value=o.value},y(o.label),11,wn)),64))])])):E("",!0),I.value>0?(l(),i("div",gn,[(l(!0),i(v,null,C(U.value,(o,p)=>(l(),i("div",{key:p,class:"icon-group"},[t("h4",yn,y(p),1),t("ul",xn,[(l(!0),i(v,null,C(o,k=>(l(),i("li",{key:k.name,class:z(["icon-item",{copied:g.value===k.name}]),onClick:A=>V(k)},[(l(),_(on(k.component),{class:"hmfw-icon icon-svg"})),t("span",vn,y(k.name),1),g.value===k.name?(l(),i("span",Cn,[...e[1]||(e[1]=[t("svg",{viewBox:"64 64 896 896",width:"1em",height:"1em",fill:"currentColor"},[t("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"})],-1),r(" Copied! ",-1)])])):E("",!0)],10,_n))),128))])]))),128))])):(l(),i("div",bn,[...e[2]||(e[2]=[t("svg",{viewBox:"64 64 896 896",width:"64",height:"64",fill:"currentColor",opacity:"0.3"},[t("path",{d:"M893.6 693.2L730.4 530c-9.4-9.4-24.6-9.4-33.9 0l-63.7 63.7-96.6-96.6L762.9 270.4c1.8-1.9 3.3-4 4.5-6.2l86.8-158.8c2.8-5.1.9-11.5-4.2-14.3-5.1-2.8-11.5-.9-14.3 4.2L749 253.9c-1.2 2.2-2.7 4.3-4.5 6.2L518.2 486.4 282 250.2c-9.4-9.4-24.6-9.4-33.9 0L64.4 433.9c-9.4 9.4-9.4 24.6 0 33.9l464.6 464.6c9.4 9.4 24.6 9.4 33.9 0l330.7-330.8c9.4-9.4 9.4-24.6 0-33.9z"})],-1),t("p",{class:"empty-text"},"未找到相关图标",-1)])]))]))}}),In=ln(Sn,[["__scopeId","data-v-f2a8bdbd"]]),zn=x({__name:"IconColor",setup(w){return(u,d)=>(l(),_(s(S),{size:16},{default:m(()=>[n(s(O),{class:"hmfw-icon",style:{"font-size":"24px",color:"#1677ff"}}),n(s(O),{class:"hmfw-icon",style:{"font-size":"24px",color:"#52c41a"}}),n(s(O),{class:"hmfw-icon",style:{"font-size":"24px",color:"#faad14"}}),n(s(O),{class:"hmfw-icon",style:{"font-size":"24px",color:"#ff4d4f"}}),n(s(O),{class:"hmfw-icon",style:{"font-size":"24px",color:"#722ed1"}})]),_:1}))}}),Ln=`<template>
  <Space :size="16">
    <UserOutlined class="hmfw-icon" style="font-size: 24px; color: #1677ff" />
    <UserOutlined class="hmfw-icon" style="font-size: 24px; color: #52c41a" />
    <UserOutlined class="hmfw-icon" style="font-size: 24px; color: #faad14" />
    <UserOutlined class="hmfw-icon" style="font-size: 24px; color: #ff4d4f" />
    <UserOutlined class="hmfw-icon" style="font-size: 24px; color: #722ed1" />
  </Space>
</template>

<script setup lang="ts">
import { UserOutlined } from '@hmfw/icons'
import { Space } from '@hmfw/ant-design'
<\/script>
`,Dn=x({__name:"IconSize",setup(w){return(u,d)=>(l(),_(s(S),{size:16,align:"center"},{default:m(()=>[n(s(h),{class:"hmfw-icon",style:{"font-size":"12px"}}),n(s(h),{class:"hmfw-icon",style:{"font-size":"16px"}}),n(s(h),{class:"hmfw-icon",style:{"font-size":"24px"}}),n(s(h),{class:"hmfw-icon",style:{"font-size":"32px"}}),n(s(h),{class:"hmfw-icon",style:{"font-size":"48px"}})]),_:1}))}}),Un=`<template>
  <Space :size="16" align="center">
    <HomeOutlined class="hmfw-icon" style="font-size: 12px" />
    <HomeOutlined class="hmfw-icon" style="font-size: 16px" />
    <HomeOutlined class="hmfw-icon" style="font-size: 24px" />
    <HomeOutlined class="hmfw-icon" style="font-size: 32px" />
    <HomeOutlined class="hmfw-icon" style="font-size: 48px" />
  </Space>
</template>

<script setup lang="ts">
import { HomeOutlined } from '@hmfw/icons'
import { Space } from '@hmfw/ant-design'
<\/script>
`,An=x({__name:"IconSpin",setup(w){return(u,d)=>(l(),_(s(S),{size:16},{default:m(()=>[n(s(R),{class:"hmfw-icon-spin",style:{"font-size":"24px"}}),n(s(H),{class:"hmfw-icon-spin",style:{"font-size":"24px"}})]),_:1}))}}),Bn=`<template>
  <Space :size="16">
    <LoadingOutlined class="hmfw-icon-spin" style="font-size: 24px" />
    <SettingOutlined class="hmfw-icon-spin" style="font-size: 24px" />
  </Space>
</template>

<script setup lang="ts">
import { LoadingOutlined, SettingOutlined } from '@hmfw/icons'
import { Space } from '@hmfw/ant-design'
<\/script>
`,qn={class:"markdown-body"},ws={__name:"icon",setup(w,{expose:u}){return u({frontmatter:{}}),(g,a)=>{const f=cn("DemoBlock");return l(),i("div",qn,[a[0]||(a[0]=F(`<h1 id="icon-图标" tabindex="-1">Icon 图标</h1><p>语义化的矢量图形，用于展示常用的操作和状态。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><ul><li>需要展示操作图标时</li><li>需要展示状态图标时</li><li>需要展示品牌图标时</li></ul><h2 id="安装" tabindex="-1">安装</h2><p>图标已独立为 npm 包，需要单独安装：</p><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> @hmfw/icons
<span class="token comment"># 或</span>
<span class="token function">pnpm</span> <span class="token function">add</span> @hmfw/icons
<span class="token comment"># 或</span>
<span class="token function">yarn</span> <span class="token function">add</span> @hmfw/icons
</code></pre><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="图标浏览器" tabindex="-1">图标浏览器</h3><p>浏览所有内置图标，支持搜索和分类过滤。点击图标可复制代码。</p>`,10)),n(In),a[1]||(a[1]=t("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),a[2]||(a[2]=t("p",null,"展示内置的图标类型。",-1)),n(f,{title:"基础用法",source:s(un)},{default:m(()=>[n(pn)]),_:1},8,["source"]),a[3]||(a[3]=t("h3",{id:"图标尺寸",tabindex:"-1"},"图标尺寸",-1)),a[4]||(a[4]=t("p",null,[r("通过 "),t("code",null,'style="font-size: Npx"'),r(" 控制图标大小（图标使用 "),t("code",null,"1em"),r(" 跟随字体大小）。")],-1)),n(f,{title:"图标尺寸",source:s(Un)},{default:m(()=>[n(Dn)]),_:1},8,["source"]),a[5]||(a[5]=t("h3",{id:"图标颜色",tabindex:"-1"},"图标颜色",-1)),a[6]||(a[6]=t("p",null,[r("通过 "),t("code",null,'style="color: #xxx"'),r(" 控制图标颜色（图标使用 "),t("code",null,"currentColor"),r(" 继承文字颜色）。")],-1)),n(f,{title:"图标颜色",source:s(Ln)},{default:m(()=>[n(zn)]),_:1},8,["source"]),a[7]||(a[7]=t("h3",{id:"旋转动画",tabindex:"-1"},"旋转动画",-1)),a[8]||(a[8]=t("p",null,[r("通过 "),t("code",null,"spin"),r(" 属性让图标旋转。")],-1)),n(f,{title:"旋转动画",source:s(Bn)},{default:m(()=>[n(An)]),_:1},8,["source"]),a[9]||(a[9]=F(`<h2 id="api" tabindex="-1">API</h2><h3 id="icon-props" tabindex="-1">Icon Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>component</td><td>图标组件（SVG 函数式组件）</td><td><code>IconComponent</code></td><td>-</td></tr><tr><td>spin</td><td>是否旋转</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>rotate</td><td>旋转角度（deg）</td><td><code>number</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式（可用于设置 <code>font-size</code>、<code>color</code>）</td><td><code>string | CSSProperties</code></td><td>-</td></tr><tr><td>class</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="内置图标" tabindex="-1">内置图标</h3><p>图标库已同步 Ant Design v6，提供 <strong>681 个高质量图标</strong>（447 个 Outlined + 234 个 Filled），覆盖反馈、操作、方向、导航、文件、编辑、品牌等全部分类。</p><p>完整列表请通过上方「图标浏览器」查看，或导入后直接使用，例如：</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@hmfw/icons&#39;</span>
</code></pre><h3 id="图标搜索-api" tabindex="-1">图标搜索 API</h3><p><code>@hmfw/icons</code> 提供了强大的图标搜索和分类功能：</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> searchIcons<span class="token punctuation">,</span> getIconsByCategory<span class="token punctuation">,</span> getAllCategories<span class="token punctuation">,</span> getAllIcons <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@hmfw/icons&#39;</span>

<span class="token comment">// 搜索图标（支持中英文）</span>
<span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token function">searchIcons</span><span class="token punctuation">(</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 按分类获取图标</span>
<span class="token keyword">const</span> editIcons <span class="token operator">=</span> <span class="token function">getIconsByCategory</span><span class="token punctuation">(</span><span class="token string">&#39;编辑操作&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 获取所有分类</span>
<span class="token keyword">const</span> categories <span class="token operator">=</span> <span class="token function">getAllCategories</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 获取所有图标</span>
<span class="token keyword">const</span> allIcons <span class="token operator">=</span> <span class="token function">getAllIcons</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><h3 id="自定义图标" tabindex="-1">自定义图标</h3><h4 id="方案一内联函数式组件" tabindex="-1">方案一：内联函数式组件</h4><p>实现 <code>IconComponent</code> 类型（<code>FunctionalComponent&lt;SVGAttributes&gt;</code>）即可传入任意 SVG 图标：</p><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> IconComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@hmfw/icons&#39;</span>

<span class="token keyword">const</span> MyIcon<span class="token operator">:</span> <span class="token function-variable function">IconComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 24 24<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1em<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1em<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentColor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>
</code></pre><pre class="language-vue"><code>&lt;MyIcon class=&quot;hmfw-icon&quot; /&gt;
</code></pre><h4 id="方案二脚本批量生成" tabindex="-1">方案二：脚本批量生成</h4><p>如果你有大量自定义 SVG（品牌 Logo、业务图标），推荐通过脚本批量生成图标组件文件。 仓库 <code>scripts/examples/build-custom-icons.ts</code> 提供了完整的脚本示例，使用方法见 <code>scripts/examples/README.md</code>。</p><p>简要流程：</p><ol><li>复制 <code>scripts/examples/build-custom-icons.ts</code> 到你的项目并改写顶部配置</li><li>把 SVG 文件（kebab-case 命名）放入 <code>SVG_DIR</code></li><li>运行 <code>npx tsx scripts/build-my-icons.ts</code>，生成的图标组件可直接 <code>import</code> 使用</li></ol>`,19))])}}};export{ws as default};
