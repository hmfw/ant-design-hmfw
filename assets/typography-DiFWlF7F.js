import{M as Z,x as tt,w as et,Q as nt,n,t as q,E as C,r as $,f as U,o as h,N as B,A as v,k as A,K as d,R as r,m as i,i as O,h as s,J as lt,H as ot,l as F}from"./index-Dewmb7_Q.js";import{c as X}from"./cls-S9IiI6wd.js";import{C as it}from"./CheckOutlined-C_V8HVwv.js";import{T as j}from"./Tooltip-BLYAAqh_.js";import{S as L}from"./Space-BxAy7a4l.js";function dt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!$(t)}const rt=()=>n("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",focusable:"false"},[n("path",{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"},null)]),N={type:{type:String,default:void 0},disabled:{type:Boolean,default:!1},mark:{type:Boolean,default:!1},code:{type:Boolean,default:!1},keyboard:{type:Boolean,default:!1},underline:{type:Boolean,default:!1},delete:{type:Boolean,default:!1},strong:{type:Boolean,default:!1},italic:{type:Boolean,default:!1},copyable:{type:[Boolean,Object],default:!1},ellipsis:{type:[Boolean,Object],default:!1}};function W(t){return t?t===!0?1:t.rows&&t.rows>0?t.rows:1:0}function D(t){return!t||t===!0?{}:t}function z(t,l,e){const f=W(l.ellipsis);return X(t,e,{[`${t}-${l.type}`]:!!l.type,[`${t}-disabled`]:l.disabled,[`${t}-ellipsis`]:f===1,[`${t}-ellipsis-multiple-line`]:f>1})}function V(t){const l=W(t.ellipsis);if(l>1)return{"-webkit-line-clamp":String(l)}}function R(t,l){let e=l;return t.code&&(e=n("code",null,[e])),t.mark&&(e=n("mark",null,[e])),t.keyboard&&(e=n("kbd",null,[e])),t.underline&&(e=n("u",null,[e])),t.delete&&(e=n("del",null,[e])),t.strong&&(e=n("strong",null,[e])),t.italic&&(e=n("i",null,[e])),e}function _(t){if(t==null||typeof t=="boolean")return"";if(typeof t=="string"||typeof t=="number")return String(t);if(Array.isArray(t))return t.map(_).join("");const l=t.children;return typeof l=="string"?l:Array.isArray(l)?l.map(_).join(""):""}async function at(t){var e;if(typeof navigator<"u"&&((e=navigator.clipboard)!=null&&e.writeText)){await navigator.clipboard.writeText(t);return}const l=document.createElement("textarea");l.value=t,l.style.position="fixed",l.style.opacity="0",document.body.appendChild(l),l.select();try{document.execCommand("copy")}finally{document.body.removeChild(l)}}function H(t){const l=C(!1),e=Z();let f;return{renderCopy:(p,g)=>{var P,J;if(!p.copyable)return null;const y=typeof p.copyable=="object"?p.copyable:{},u=e.value.Typography,T=Array.isArray(y.tooltips)?y.tooltips:null,x=T?T[0]:(u==null?void 0:u.copy)??"Copy",c=T?T[1]:(u==null?void 0:u.copied)??"Copied",a=((P=y.icon)==null?void 0:P[0])??n(rt,null,null),b=((J=y.icon)==null?void 0:J[1])??n(it,null,null),w=async K=>{var Q;K.stopPropagation();const Y=y.text??g();try{await at(Y),l.value=!0,(Q=y.onCopy)==null||Q.call(y,K),f&&clearTimeout(f),f=setTimeout(()=>{l.value=!1},3e3)}catch{}},S=n("button",{type:"button",class:X(`${t}-copy`,{[`${t}-copy-success`]:l.value}),"aria-label":l.value?c:x,title:l.value?c:x,onClick:w},[l.value?b:a]);return y.tooltips===!1?S:n(j,{title:l.value?c:x},dt(S)?S:{default:()=>[S]})}}}function M(t,l){const e=C(!1),f=U(()=>!!l.ellipsis),o=U(()=>D(l.ellipsis)),p=U(()=>W(l.ellipsis));let g=null,y=!1;const u=()=>{var b,w,S,P;if(!f.value){y&&(y=!1,e.value=!1,(w=(b=o.value).onEllipsis)==null||w.call(b,!1));return}const c=t.value;if(!c)return;let a=!1;p.value<=1?a=c.scrollWidth>c.clientWidth+1:a=c.scrollHeight>c.clientHeight+1,a!==y?(y=a,e.value=a,(P=(S=o.value).onEllipsis)==null||P.call(S,a)):e.value=a},T=()=>{if(x(),!f.value)return;const c=t.value;c&&(typeof ResizeObserver<"u"&&(g=new ResizeObserver(()=>u()),g.observe(c)),q(u))},x=()=>{g&&(g.disconnect(),g=null)};return tt(()=>T()),et(()=>x()),nt(()=>[f.value,p.value],()=>{T(),q(u)}),{isEllipsis:e,measure:u}}function I(t,l){return t===!1||t===void 0?null:t===!0?{title:l}:typeof t=="string"||typeof t=="number"?{title:t}:typeof t=="object"?{title:l,...t}:null}function st(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!$(t)}const m=h({name:"TypographyText",props:N,setup(t,{slots:l}){const e=B("typography"),{renderCopy:f}=H(e),o=C(null),{isEllipsis:p}=M(o,t);return()=>{var b;const g=(b=l.default)==null?void 0:b.call(l),y=R(t,g),u=_(g),T=f(t,()=>u),x=D(t.ellipsis),c=p.value?I(x.tooltip,u):null,a=n("span",{ref:o,class:z(e,t),style:V(t)},[y,T]);return c?n(j,c,st(a)?a:{default:()=>[a]}):a}}});function pt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!$(t)}const E=h({name:"TypographyTitle",props:{...N,level:{type:Number,default:1}},setup(t,{slots:l}){const e=B("typography"),{renderCopy:f}=H(e),o=C(null),{isEllipsis:p}=M(o,t);return()=>{var w;const g=(w=l.default)==null?void 0:w.call(l),y=R(t,g),u=_(g),T=f(t,()=>u),x=`h${t.level}`,c=D(t.ellipsis),a=p.value?I(c.tooltip,u):null,b=n(x,{ref:o,class:z(e,t,`${e}-h${t.level}`),style:V(t)},{default:()=>[y,T]});return a?n(j,a,pt(b)?b:{default:()=>[b]}):b}}});function ut(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!$(t)}const k=h({name:"TypographyParagraph",props:N,setup(t,{slots:l}){const e=B("typography"),{renderCopy:f}=H(e),o=C(null),{isEllipsis:p}=M(o,t);return()=>{var b;const g=(b=l.default)==null?void 0:b.call(l),y=R(t,g),u=_(g),T=f(t,()=>u),x=D(t.ellipsis),c=p.value?I(x.tooltip,u):null,a=n("p",{ref:o,class:z(e,t),style:V(t)},[y,T]);return c?n(j,c,ut(a)?a:{default:()=>[a]}):a}}});function ct(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!$(t)}const G=h({name:"TypographyLink",props:{...N,href:{type:String,default:void 0},target:{type:String,default:void 0}},setup(t,{slots:l}){const e=B("typography"),{renderCopy:f}=H(e),o=C(null),{isEllipsis:p}=M(o,t);return()=>{var b;const g=(b=l.default)==null?void 0:b.call(l),y=R(t,g),u=_(g),T=f(t,()=>u),x=D(t.ellipsis),c=p.value?I(x.tooltip,u):null,a=n("a",{ref:o,class:z(e,t,`${e}-link`),style:V(t),href:t.disabled?void 0:t.href,target:t.target,"aria-disabled":t.disabled||void 0},[y,T]);return c?n(j,c,ct(a)?a:{default:()=>[a]}):a}}}),ft=h({__name:"TypographyCopyable",setup(t){return(l,e)=>(v(),A("div",null,[n(d(k),{copyable:""},{default:r(()=>[...e[0]||(e[0]=[i(" 这段文字可以复制。 ",-1)])]),_:1}),n(d(k),{copyable:{text:"自定义复制内容"}},{default:r(()=>[...e[1]||(e[1]=[i(" 显示文字与复制内容不同。 ",-1)])]),_:1}),n(d(m),{copyable:""},{default:r(()=>[...e[2]||(e[2]=[i(" 行内可复制文本 ",-1)])]),_:1})]))}}),yt=`<template>
  <div>
    <Paragraph copyable> 这段文字可以复制。 </Paragraph>
    <Paragraph :copyable="{ text: '自定义复制内容' }"> 显示文字与复制内容不同。 </Paragraph>
    <Text copyable> 行内可复制文本 </Text>
  </div>
</template>

<script setup lang="ts">
import { Paragraph, Text } from 'ant-design-hmfw'
<\/script>
`,gt=h({__name:"TypographyDecorations",setup(t){return(l,e)=>(v(),O(d(L),{direction:"vertical"},{default:r(()=>[n(d(m),{mark:""},{default:r(()=>[...e[0]||(e[0]=[i(" 标记文本 ",-1)])]),_:1}),n(d(m),{code:""},{default:r(()=>[...e[1]||(e[1]=[i(" 代码文本 ",-1)])]),_:1}),n(d(m),{keyboard:""},{default:r(()=>[...e[2]||(e[2]=[i(" Ctrl ",-1)])]),_:1}),n(d(m),{underline:""},{default:r(()=>[...e[3]||(e[3]=[i(" 下划线文本 ",-1)])]),_:1}),n(d(m),{delete:""},{default:r(()=>[...e[4]||(e[4]=[i(" 删除线文本 ",-1)])]),_:1}),n(d(m),{strong:""},{default:r(()=>[...e[5]||(e[5]=[i(" 加粗文本 ",-1)])]),_:1}),n(d(m),{italic:""},{default:r(()=>[...e[6]||(e[6]=[i(" 斜体文本 ",-1)])]),_:1})]),_:1}))}}),bt=`<template>
  <Space direction="vertical">
    <Text mark> 标记文本 </Text>
    <Text code> 代码文本 </Text>
    <Text keyboard> Ctrl </Text>
    <Text underline> 下划线文本 </Text>
    <Text delete> 删除线文本 </Text>
    <Text strong> 加粗文本 </Text>
    <Text italic> 斜体文本 </Text>
  </Space>
</template>

<script setup lang="ts">
import { Text, Space } from 'ant-design-hmfw'
<\/script>
`,mt={style:{"max-width":"240px"}},Tt=h({__name:"TypographyEllipsis",setup(t){return(l,e)=>(v(),A("div",mt,[n(d(m),{ellipsis:""},{default:r(()=>[...e[0]||(e[0]=[i(" 这是一段很长的文本，超出容器宽度时会以省略号结尾，不会换行显示。 ",-1)])]),_:1})]))}}),xt=`<template>
  <div style="max-width: 240px">
    <Text ellipsis> 这是一段很长的文本，超出容器宽度时会以省略号结尾，不会换行显示。 </Text>
  </div>
</template>

<script setup lang="ts">
import { Text } from 'ant-design-hmfw'
<\/script>
`,ht={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"240px"}},vt={style:{"font-size":"12px",color:"#999"}},wt=h({__name:"TypographyEllipsisTooltip",setup(t){const l=C(!1);function e(f){l.value=f}return(f,o)=>(v(),A("div",ht,[n(d(m),{ellipsis:{tooltip:!0}},{default:r(()=>[...o[0]||(o[0]=[i(" 这是一段很长的文本，鼠标悬停时会通过 Tooltip 显示完整内容。 ",-1)])]),_:1}),n(d(m),{ellipsis:{tooltip:"自定义 Tooltip 文案"}},{default:r(()=>[...o[1]||(o[1]=[i(" 显示文字与 Tooltip 内容不同。 ",-1)])]),_:1}),n(d(k),{ellipsis:{rows:2,tooltip:{placement:"topLeft",color:"#1677ff"},onEllipsis:e}},{default:r(()=>[...o[2]||(o[2]=[i(" 多行省略时，可以传入完整的 Tooltip 配置（placement、color 等），并通过 onEllipsis 监听省略状态变化。 ",-1)])]),_:1},8,["ellipsis"]),s("div",vt,"省略状态: "+lt(l.value),1)]))}}),St=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px; max-width: 240px">
    <Text :ellipsis="{ tooltip: true }"> 这是一段很长的文本，鼠标悬停时会通过 Tooltip 显示完整内容。 </Text>
    <Text :ellipsis="{ tooltip: '自定义 Tooltip 文案' }"> 显示文字与 Tooltip 内容不同。 </Text>
    <Paragraph
      :ellipsis="{
        rows: 2,
        tooltip: { placement: 'topLeft', color: '#1677ff' },
        onEllipsis: handleEllipsis,
      }"
    >
      多行省略时，可以传入完整的 Tooltip 配置（placement、color 等），并通过 onEllipsis 监听省略状态变化。
    </Paragraph>
    <div style="font-size: 12px; color: #999">省略状态: {{ ellipsisState }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Text, Paragraph } from 'ant-design-hmfw'

const ellipsisState = ref<boolean>(false)
function handleEllipsis(v: boolean) {
  ellipsisState.value = v
}
<\/script>
`,Ct=h({__name:"TypographyLink",setup(t){return(l,e)=>(v(),A("div",null,[n(d(G),{href:"https://ant.design",target:"_blank"},{default:r(()=>[...e[0]||(e[0]=[i(" Ant Design 链接 ",-1)])]),_:1}),e[2]||(e[2]=s("br",null,null,-1)),n(d(G),{href:"https://ant.design",disabled:""},{default:r(()=>[...e[1]||(e[1]=[i(" 禁用链接 ",-1)])]),_:1})]))}}),kt=`<template>
  <div>
    <Link href="https://ant.design" target="_blank"> Ant Design 链接 </Link>
    <br />
    <Link href="https://ant.design" disabled> 禁用链接 </Link>
  </div>
</template>

<script setup lang="ts">
import { Link } from 'ant-design-hmfw'
<\/script>
`,_t=h({__name:"TypographyParagraph",setup(t){return(l,e)=>(v(),O(d(L),{direction:"vertical",size:16},{default:r(()=>[n(d(k),null,{default:r(()=>[...e[0]||(e[0]=[i(" 这是一段普通的段落文本。Ant Design 是一套企业级 UI 设计语言和 React 组件库。 ",-1)])]),_:1}),n(d(k),{copyable:""},{default:r(()=>[...e[1]||(e[1]=[i(" 这段文本可以复制。点击右侧图标复制内容。 ",-1)])]),_:1}),n(d(k),{ellipsis:{rows:2}},{default:r(()=>[...e[2]||(e[2]=[i(" 这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。 这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。 这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。 ",-1)])]),_:1})]),_:1}))}}),Pt=`<template>
  <Space direction="vertical" :size="16">
    <Paragraph> 这是一段普通的段落文本。Ant Design 是一套企业级 UI 设计语言和 React 组件库。 </Paragraph>

    <Paragraph copyable> 这段文本可以复制。点击右侧图标复制内容。 </Paragraph>

    <Paragraph :ellipsis="{ rows: 2 }">
      这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。
      这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。
      这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。
    </Paragraph>
  </Space>
</template>

<script setup lang="ts">
import { Paragraph, Space } from 'ant-design-hmfw'
<\/script>
`,Et=h({__name:"TypographyText",setup(t){return(l,e)=>(v(),O(d(L),{direction:"vertical"},{default:r(()=>[n(d(m),null,{default:r(()=>[...e[0]||(e[0]=[i("默认文本",-1)])]),_:1}),n(d(m),{type:"secondary"},{default:r(()=>[...e[1]||(e[1]=[i(" 次要文本 ",-1)])]),_:1}),n(d(m),{type:"success"},{default:r(()=>[...e[2]||(e[2]=[i(" 成功文本 ",-1)])]),_:1}),n(d(m),{type:"warning"},{default:r(()=>[...e[3]||(e[3]=[i(" 警告文本 ",-1)])]),_:1}),n(d(m),{type:"danger"},{default:r(()=>[...e[4]||(e[4]=[i(" 危险文本 ",-1)])]),_:1}),n(d(m),{disabled:""},{default:r(()=>[...e[5]||(e[5]=[i(" 禁用文本 ",-1)])]),_:1})]),_:1}))}}),$t=`<template>
  <Space direction="vertical">
    <Text>默认文本</Text>
    <Text type="secondary"> 次要文本 </Text>
    <Text type="success"> 成功文本 </Text>
    <Text type="warning"> 警告文本 </Text>
    <Text type="danger"> 危险文本 </Text>
    <Text disabled> 禁用文本 </Text>
  </Space>
</template>

<script setup lang="ts">
import { Text, Space } from 'ant-design-hmfw'
<\/script>
`,At=h({__name:"TypographyTitle",setup(t){return(l,e)=>(v(),O(d(L),{direction:"vertical",size:16},{default:r(()=>[n(d(E),{level:1},{default:r(()=>[...e[0]||(e[0]=[i(" h1. Ant Design ",-1)])]),_:1}),n(d(E),{level:2},{default:r(()=>[...e[1]||(e[1]=[i(" h2. Ant Design ",-1)])]),_:1}),n(d(E),{level:3},{default:r(()=>[...e[2]||(e[2]=[i(" h3. Ant Design ",-1)])]),_:1}),n(d(E),{level:4},{default:r(()=>[...e[3]||(e[3]=[i(" h4. Ant Design ",-1)])]),_:1}),n(d(E),{level:5},{default:r(()=>[...e[4]||(e[4]=[i(" h5. Ant Design ",-1)])]),_:1})]),_:1}))}}),jt=`<template>
  <Space direction="vertical" :size="16">
    <Title :level="1"> h1. Ant Design </Title>
    <Title :level="2"> h2. Ant Design </Title>
    <Title :level="3"> h3. Ant Design </Title>
    <Title :level="4"> h4. Ant Design </Title>
    <Title :level="5"> h5. Ant Design </Title>
  </Space>
</template>

<script setup lang="ts">
import { Title, Space } from 'ant-design-hmfw'
<\/script>
`,Dt={class:"markdown-body"},Vt={__name:"typography",setup(t,{expose:l}){return l({frontmatter:{}}),(f,o)=>{const p=ot("DemoBlock");return v(),A("div",Dt,[o[0]||(o[0]=F('<h1 id="typography-排版" tabindex="-1">Typography 排版</h1><p>文本的基本格式。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><ul><li>当需要展示标题、段落、列表内容时</li><li>当需要对文字进行强调、标记、删除线等操作时</li><li>当需要展示代码片段时</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="标题" tabindex="-1">标题</h3><p>通过 <code>level</code> 属性设置标题级别。</p>',7)),n(p,{title:"标题",source:d(jt)},{default:r(()=>[n(At)]),_:1},8,["source"]),o[1]||(o[1]=s("h3",{id:"文本类型",tabindex:"-1"},"文本类型",-1)),o[2]||(o[2]=s("p",null,[i("通过 "),s("code",null,"type"),i(" 属性设置文本类型。")],-1)),n(p,{title:"文本类型",source:d($t)},{default:r(()=>[n(Et)]),_:1},8,["source"]),o[3]||(o[3]=s("h3",{id:"文本修饰",tabindex:"-1"},"文本修饰",-1)),o[4]||(o[4]=s("p",null,"支持多种文本修饰样式。",-1)),n(p,{title:"文本修饰",source:d(bt)},{default:r(()=>[n(gt)]),_:1},8,["source"]),o[5]||(o[5]=s("h3",{id:"段落",tabindex:"-1"},"段落",-1)),o[6]||(o[6]=s("p",null,[i("段落组件以 "),s("code",null,"<p>"),i(" 渲染。")],-1)),n(p,{title:"段落",source:d(Pt)},{default:r(()=>[n(_t)]),_:1},8,["source"]),o[7]||(o[7]=s("h3",{id:"链接",tabindex:"-1"},"链接",-1)),o[8]||(o[8]=s("p",null,[i("使用 "),s("code",null,"Link"),i(" 渲染超链接，支持 "),s("code",null,"disabled"),i("。")],-1)),n(p,{title:"链接",source:d(kt)},{default:r(()=>[n(Ct)]),_:1},8,["source"]),o[9]||(o[9]=s("h3",{id:"可复制",tabindex:"-1"},"可复制",-1)),o[10]||(o[10]=s("p",null,[i("通过 "),s("code",null,"copyable"),i(" 添加复制按钮，对象形式可自定义复制内容与回调。")],-1)),n(p,{title:"可复制",source:d(yt)},{default:r(()=>[n(ft)]),_:1},8,["source"]),o[11]||(o[11]=s("h3",{id:"省略",tabindex:"-1"},"省略",-1)),o[12]||(o[12]=s("p",null,[i("通过 "),s("code",null,"ellipsis"),i(" 设置单行省略。")],-1)),n(p,{title:"省略",source:d(xt)},{default:r(()=>[n(Tt)]),_:1},8,["source"]),o[13]||(o[13]=s("h3",{id:"省略-tooltip-与回调",tabindex:"-1"},"省略 Tooltip 与回调",-1)),o[14]||(o[14]=s("p",null,[i("通过 "),s("code",null,"ellipsis.tooltip"),i(" 在省略时显示完整内容（支持自定义 Tooltip 配置），通过 "),s("code",null,"ellipsis.onEllipsis"),i(" 监听省略状态。")],-1)),n(p,{title:"省略 Tooltip 与回调",source:d(St)},{default:r(()=>[n(wt)]),_:1},8,["source"]),o[15]||(o[15]=F('<h2 id="api" tabindex="-1">API</h2><h3 id="通用-propstext--title--paragraph--link-共享" tabindex="-1">通用 Props（Text / Title / Paragraph / Link 共享）</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>文本类型</td><td><code>&#39;secondary&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;danger&#39;</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>mark</td><td>标记样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>code</td><td>代码样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>keyboard</td><td>键盘样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>underline</td><td>下划线</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>delete</td><td>删除线</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>strong</td><td>加粗</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>italic</td><td>斜体</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>copyable</td><td>是否可复制，对象形式 <code>{ text?, onCopy?, tooltips?, icon? }</code></td><td><code>boolean | CopyableConfig</code></td><td><code>false</code></td></tr><tr><td>ellipsis</td><td>单行省略；对象形式 <code>{ rows?, tooltip?, onEllipsis? }</code> 支持多行省略、悬停 Tooltip 与回调</td><td><code>boolean | EllipsisConfig</code></td><td><code>false</code></td></tr></tbody></table><h3 id="title-props" tabindex="-1">Title Props</h3><p>继承通用 Props，额外：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>level</td><td>标题级别</td><td><code>1 | 2 | 3 | 4 | 5</code></td><td><code>1</code></td></tr></tbody></table><h3 id="link-props" tabindex="-1">Link Props</h3><p>继承通用 Props，额外：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>href</td><td>链接地址</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>链接打开方式</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="copyableconfig" tabindex="-1">CopyableConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>自定义复制内容</td><td><code>string</code></td><td>节点文本</td></tr><tr><td>onCopy</td><td>复制回调</td><td><code>(e: MouseEvent) =&gt; void</code></td><td>-</td></tr><tr><td>tooltips</td><td>Tooltip 文案 <code>[复制前, 复制后]</code>，传 <code>false</code> 关闭 Tooltip</td><td><code>false | [string, string]</code></td><td>跟随 locale</td></tr><tr><td>icon</td><td>自定义图标 <code>[复制前, 复制后]</code></td><td><code>[VNode, VNode]</code></td><td>-</td></tr></tbody></table><h3 id="ellipsisconfig" tabindex="-1">EllipsisConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>rows</td><td>最多显示行数</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>tooltip</td><td>省略时显示 Tooltip：<code>true</code> 用纯文本，字符串/数字自定义文案，对象传入完整 <code>TooltipProps</code></td><td><code>boolean | string | number | TooltipProps</code></td><td>-</td></tr><tr><td>onEllipsis</td><td>省略状态变化回调</td><td><code>(ellipsis: boolean) =&gt; void</code></td><td>-</td></tr></tbody></table>',13))])}}};export{Vt as default};
