import{S as b}from"./Space-BU3Kkzda.js";import{I as o}from"./Icon-BHSpInk3.js";import{iO as P,jc as q,jg as $,je as G,jd as N}from"./utils-DlM5LTVG.js";import{C as j}from"./CheckOutlined-B4OFpyur.js";import{C as W}from"./CloseOutlined-gVBUVFC5.js";import{D as T}from"./DeleteOutlined-Cq7N7hv8.js";import{D as Q}from"./DownOutlined-Bsf8QJFP.js";import{I as Z,E as J}from"./RocketOutlined-Bbw5pbsL.js";import{E as K}from"./EyeOutlined-CjdSCucN.js";import{H as g}from"./HomeOutlined-BvuDG0cV.js";import{L as X}from"./LeftOutlined-CxfW8o1V.js";import{L as A}from"./LoadingOutlined-8a6xi408.js";import{M as Y}from"./MinusOutlined-Qflvmcuw.js";import{P as nn}from"./PlusOutlined-D58cAMxE.js";import{R as tn}from"./RightOutlined-Cp50ZD2I.js";import{S as en}from"./SearchOutlined-Dj1YeEev.js";import{S as H}from"./SettingOutlined-C6fkWfhc.js";import{U as sn}from"./UpOutlined-BfHPSdS_.js";import{U as x}from"./UserOutlined-C43NTMxM.js";import{o as v,A as p,i as w,R as k,n as t,K as n,k as u,h as s,S as on,P as an,F as C,G as _,u as L,J as y,j as R,m,E as S,f as D,_ as ln,H as pn,l as cn}from"./index-0wAKNcUB.js";import"./cls-S9IiI6wd.js";import"./AppleOutlined-CK3yTuTK.js";import"./PictureOutlined-BoRrA-kD.js";import"./CaretRightFilled-i_lzqIdT.js";import"./CloseCircleFilled-BIj7yUU4.js";import"./CloseCircleOutlined-uCyLiZEa.js";import"./CopyOutlined-CAnl88SA.js";import"./DownloadOutlined-CnFu_K8R.js";import"./ExclamationCircleFilled-DosVehwb.js";import"./UploadOutlined-Bvd2JpxW.js";import"./InfoCircleFilled-Nq65k7U0.js";import"./ZoomOutOutlined-Bj76IcAh.js";import"./WarningFilled-D_7xh7lo.js";const un=v({__name:"IconBasic",setup(h){return(d,r)=>(p(),w(n(b),{size:16,wrap:""},{default:k(()=>[t(n(o),{component:n(en)},null,8,["component"]),t(n(o),{component:n(W)},null,8,["component"]),t(n(o),{component:n(j)},null,8,["component"]),t(n(o),{component:n(P)},null,8,["component"]),t(n(o),{component:n(Z)},null,8,["component"]),t(n(o),{component:n(A)},null,8,["component"]),t(n(o),{component:n(sn)},null,8,["component"]),t(n(o),{component:n(Q)},null,8,["component"]),t(n(o),{component:n(X)},null,8,["component"]),t(n(o),{component:n(tn)},null,8,["component"]),t(n(o),{component:n(nn)},null,8,["component"]),t(n(o),{component:n(Y)},null,8,["component"]),t(n(o),{component:n(J)},null,8,["component"]),t(n(o),{component:n(T)},null,8,["component"]),t(n(o),{component:n(K)},null,8,["component"]),t(n(o),{component:n(g)},null,8,["component"]),t(n(o),{component:n(x)},null,8,["component"]),t(n(o),{component:n(H)},null,8,["component"])]),_:1}))}}),dn=`<template>
  <Space :size="16" wrap>
    <Icon :component="SearchOutlined" />
    <Icon :component="CloseOutlined" />
    <Icon :component="CheckOutlined" />
    <Icon :component="WarningOutlined" />
    <Icon :component="InfoCircleOutlined" />
    <Icon :component="LoadingOutlined" />
    <Icon :component="UpOutlined" />
    <Icon :component="DownOutlined" />
    <Icon :component="LeftOutlined" />
    <Icon :component="RightOutlined" />
    <Icon :component="PlusOutlined" />
    <Icon :component="MinusOutlined" />
    <Icon :component="EditOutlined" />
    <Icon :component="DeleteOutlined" />
    <Icon :component="EyeOutlined" />
    <Icon :component="HomeOutlined" />
    <Icon :component="UserOutlined" />
    <Icon :component="SettingOutlined" />
  </Space>
</template>

<script setup lang="ts">
import {
  Icon,
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
} from 'ant-design-hmfw'
<\/script>
`,rn={class:"icon-browser"},mn={class:"search-wrapper"},kn={class:"category-tabs"},On=["onClick"],fn={key:0,class:"icon-stats"},gn={class:"stats-text"},xn={class:"style-switch"},hn=["onClick"],In={key:1,class:"icon-groups"},yn={class:"group-title"},vn={class:"icon-list"},Cn=["onClick"],_n={class:"icon-label"},Sn={key:0,class:"copied-badge"},bn={key:2,class:"empty-state"},wn=v({__name:"IconBrowser",setup(h){const d=S(""),r=S("all"),I=S(""),e=S("all"),f=[{value:"all",label:"全部"},{value:"outlined",label:"线形"},{value:"filled",label:"实底"}],M=D(()=>["all",...q()]),U=c=>e.value==="filled"?c.filter(a=>a.name.endsWith("-filled")):e.value==="outlined"?c.filter(a=>!a.name.endsWith("-filled")):c,E=D(()=>{const c={};let a=[];if(d.value.trim())return{"Search Results":U($(d.value))};r.value!=="all"?a=G(r.value):a=N(),a=U(a),a.forEach(i=>{c[i.category]||(c[i.category]=[]),c[i.category].push(i)});const l={};return q().forEach(i=>{c[i]&&(l[i]=c[i])}),l}),z=D(()=>Object.values(E.value).reduce((c,a)=>c+a.length,0)),V=c=>{const l=c.name.split("-").map(F=>F.charAt(0).toUpperCase()+F.slice(1)).join(""),i=c.name.includes("filled")?"Filled":"Outlined",B=`<Icon :component="${l.replace(/filled$/i,"")+i}" />`;navigator.clipboard.writeText(B).then(()=>{I.value=c.name,setTimeout(()=>{I.value=""},2e3)})};return(c,a)=>(p(),u("div",rn,[s("div",mn,[on(s("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>d.value=l),type:"text",placeholder:"在此搜索图标，点击图标可复制代码",class:"search-input"},null,512),[[an,d.value]])]),s("div",kn,[(p(!0),u(C,null,_(M.value,l=>(p(),u("button",{key:l,class:L(["category-tab",{active:r.value===l}]),onClick:i=>r.value=l},y(l==="all"?"全部图标":l),11,On))),128))]),z.value>0?(p(),u("div",fn,[s("span",gn,"共 "+y(z.value)+" 个图标",1),s("div",xn,[(p(),u(C,null,_(f,l=>s("button",{key:l.value,class:L(["style-switch__item",{active:e.value===l.value}]),onClick:i=>e.value=l.value},y(l.label),11,hn)),64))])])):R("",!0),z.value>0?(p(),u("div",In,[(p(!0),u(C,null,_(E.value,(l,i)=>(p(),u("div",{key:i,class:"icon-group"},[s("h4",yn,y(i),1),s("ul",vn,[(p(!0),u(C,null,_(l,O=>(p(),u("li",{key:O.name,class:L(["icon-item",{copied:I.value===O.name}]),onClick:B=>V(O)},[t(n(o),{component:O.component,class:"icon-svg"},null,8,["component"]),s("span",_n,y(O.name),1),I.value===O.name?(p(),u("span",Sn,[...a[1]||(a[1]=[s("svg",{viewBox:"64 64 896 896",width:"1em",height:"1em",fill:"currentColor"},[s("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"})],-1),m(" Copied! ",-1)])])):R("",!0)],10,Cn))),128))])]))),128))])):(p(),u("div",bn,[...a[2]||(a[2]=[s("svg",{viewBox:"64 64 896 896",width:"64",height:"64",fill:"currentColor",opacity:"0.3"},[s("path",{d:"M893.6 693.2L730.4 530c-9.4-9.4-24.6-9.4-33.9 0l-63.7 63.7-96.6-96.6L762.9 270.4c1.8-1.9 3.3-4 4.5-6.2l86.8-158.8c2.8-5.1.9-11.5-4.2-14.3-5.1-2.8-11.5-.9-14.3 4.2L749 253.9c-1.2 2.2-2.7 4.3-4.5 6.2L518.2 486.4 282 250.2c-9.4-9.4-24.6-9.4-33.9 0L64.4 433.9c-9.4 9.4-9.4 24.6 0 33.9l464.6 464.6c9.4 9.4 24.6 9.4 33.9 0l330.7-330.8c9.4-9.4 9.4-24.6 0-33.9z"})],-1),s("p",{class:"empty-text"},"未找到相关图标",-1)])]))]))}}),zn=ln(wn,[["__scopeId","data-v-6dd1d407"]]),Ln=v({__name:"IconColor",setup(h){return(d,r)=>(p(),w(n(b),{size:16},{default:k(()=>[t(n(o),{component:n(x),style:{"font-size":"24px",color:"#1677ff"}},null,8,["component"]),t(n(o),{component:n(x),style:{"font-size":"24px",color:"#52c41a"}},null,8,["component"]),t(n(o),{component:n(x),style:{"font-size":"24px",color:"#faad14"}},null,8,["component"]),t(n(o),{component:n(x),style:{"font-size":"24px",color:"#ff4d4f"}},null,8,["component"]),t(n(o),{component:n(x),style:{"font-size":"24px",color:"#722ed1"}},null,8,["component"])]),_:1}))}}),Dn=`<template>
  <Space :size="16">
    <Icon :component="UserOutlined" style="font-size: 24px; color: #1677ff" />
    <Icon :component="UserOutlined" style="font-size: 24px; color: #52c41a" />
    <Icon :component="UserOutlined" style="font-size: 24px; color: #faad14" />
    <Icon :component="UserOutlined" style="font-size: 24px; color: #ff4d4f" />
    <Icon :component="UserOutlined" style="font-size: 24px; color: #722ed1" />
  </Space>
</template>

<script setup lang="ts">
import { Icon, Space, UserOutlined } from 'ant-design-hmfw'
<\/script>
`,Un=v({__name:"IconSize",setup(h){return(d,r)=>(p(),w(n(b),{size:16,align:"center"},{default:k(()=>[t(n(o),{component:n(g),style:{"font-size":"12px"}},null,8,["component"]),t(n(o),{component:n(g),style:{"font-size":"16px"}},null,8,["component"]),t(n(o),{component:n(g),style:{"font-size":"24px"}},null,8,["component"]),t(n(o),{component:n(g),style:{"font-size":"32px"}},null,8,["component"]),t(n(o),{component:n(g),style:{"font-size":"48px"}},null,8,["component"])]),_:1}))}}),En=`<template>
  <Space :size="16" align="center">
    <Icon :component="HomeOutlined" style="font-size: 12px" />
    <Icon :component="HomeOutlined" style="font-size: 16px" />
    <Icon :component="HomeOutlined" style="font-size: 24px" />
    <Icon :component="HomeOutlined" style="font-size: 32px" />
    <Icon :component="HomeOutlined" style="font-size: 48px" />
  </Space>
</template>

<script setup lang="ts">
import { Icon, Space, HomeOutlined } from 'ant-design-hmfw'
<\/script>
`,Bn=v({__name:"IconSpin",setup(h){return(d,r)=>(p(),w(n(b),{size:16},{default:k(()=>[t(n(o),{component:n(A),style:{"font-size":"24px"},spin:""},null,8,["component"]),t(n(o),{component:n(H),style:{"font-size":"24px"},spin:""},null,8,["component"])]),_:1}))}}),Fn=`<template>
  <Space :size="16">
    <Icon :component="LoadingOutlined" style="font-size: 24px" spin />
    <Icon :component="SettingOutlined" style="font-size: 24px" spin />
  </Space>
</template>

<script setup lang="ts">
import { Icon, Space, LoadingOutlined, SettingOutlined } from 'ant-design-hmfw'
<\/script>
`,qn={class:"markdown-body"},Ot={__name:"icon",setup(h,{expose:d}){return d({frontmatter:{}}),(I,e)=>{const f=pn("DemoBlock");return p(),u("div",qn,[e[0]||(e[0]=s("h1",{id:"icon-图标",tabindex:"-1"},"Icon 图标",-1)),e[1]||(e[1]=s("p",null,"语义化的矢量图形，用于展示常用的操作和状态。",-1)),e[2]||(e[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=s("ul",null,[s("li",null,"需要展示操作图标时"),s("li",null,"需要展示状态图标时"),s("li",null,"需要展示品牌图标时")],-1)),e[4]||(e[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=s("h3",{id:"图标浏览器",tabindex:"-1"},"图标浏览器",-1)),e[6]||(e[6]=s("p",null,"浏览所有内置图标，支持搜索和分类过滤。点击图标可复制代码。",-1)),t(zn),e[7]||(e[7]=s("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),e[8]||(e[8]=s("p",null,"展示内置的图标类型。",-1)),t(f,{title:"基础用法",source:n(dn)},{default:k(()=>[t(un)]),_:1},8,["source"]),e[9]||(e[9]=s("h3",{id:"图标尺寸",tabindex:"-1"},"图标尺寸",-1)),e[10]||(e[10]=s("p",null,[m("通过 "),s("code",null,'style="font-size: Npx"'),m(" 控制图标大小（图标使用 "),s("code",null,"1em"),m(" 跟随字体大小）。")],-1)),t(f,{title:"图标尺寸",source:n(En)},{default:k(()=>[t(Un)]),_:1},8,["source"]),e[11]||(e[11]=s("h3",{id:"图标颜色",tabindex:"-1"},"图标颜色",-1)),e[12]||(e[12]=s("p",null,[m("通过 "),s("code",null,'style="color: #xxx"'),m(" 控制图标颜色（图标使用 "),s("code",null,"currentColor"),m(" 继承文字颜色）。")],-1)),t(f,{title:"图标颜色",source:n(Dn)},{default:k(()=>[t(Ln)]),_:1},8,["source"]),e[13]||(e[13]=s("h3",{id:"旋转动画",tabindex:"-1"},"旋转动画",-1)),e[14]||(e[14]=s("p",null,[m("通过 "),s("code",null,"spin"),m(" 属性让图标旋转。")],-1)),t(f,{title:"旋转动画",source:n(Fn)},{default:k(()=>[t(Bn)]),_:1},8,["source"]),e[15]||(e[15]=cn(`<h2 id="api" tabindex="-1">API</h2><h3 id="icon-props" tabindex="-1">Icon Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>component</td><td>图标组件（SVG 函数式组件）</td><td><code>IconComponent</code></td><td>-</td></tr><tr><td>spin</td><td>是否旋转</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>rotate</td><td>旋转角度（deg）</td><td><code>number</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式（可用于设置 <code>font-size</code>、<code>color</code>）</td><td><code>string | CSSProperties</code></td><td>-</td></tr><tr><td>class</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="内置图标" tabindex="-1">内置图标</h3><p>图标库已同步 Ant Design v6，提供 <strong>681 个高质量图标</strong>（447 个 Outlined + 234 个 Filled），覆盖反馈、操作、方向、导航、文件、编辑、品牌等全部分类。</p><p>完整列表请通过上方「图标浏览器」查看，或导入后直接使用，例如：</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-hmfw&#39;</span>
</code></pre><h3 id="自定义图标" tabindex="-1">自定义图标</h3><h4 id="方案一内联函数式组件" tabindex="-1">方案一：内联函数式组件</h4><p>实现 <code>IconComponent</code> 类型（<code>FunctionalComponent&lt;SVGAttributes&gt;</code>）即可传入任意 SVG 图标：</p><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> IconComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-hmfw&#39;</span>

<span class="token keyword">const</span> MyIcon<span class="token operator">:</span> <span class="token function-variable function">IconComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 24 24<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1em<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1em<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentColor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>
</code></pre><pre class="language-vue"><code class="language-vue">&lt;Icon :component=&quot;MyIcon&quot; /&gt;
</code></pre><h4 id="方案二脚本批量生成" tabindex="-1">方案二：脚本批量生成</h4><p>如果你有大量自定义 SVG（品牌 Logo、业务图标），推荐通过脚本批量生成图标组件文件。 仓库 <code>scripts/examples/build-custom-icons.ts</code> 提供了完整的脚本示例，使用方法见 <code>scripts/examples/README.md</code>。</p><p>简要流程：</p><ol><li>复制 <code>scripts/examples/build-custom-icons.ts</code> 到你的项目并改写顶部配置</li><li>把 SVG 文件（kebab-case 命名）放入 <code>SVG_DIR</code></li><li>运行 <code>npx tsx scripts/build-my-icons.ts</code>，生成的图标组件可直接 <code>import</code> 使用</li></ol>`,16))])}}};export{Ot as default};
