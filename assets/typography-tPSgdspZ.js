import{c as L}from"./cls-S9IiI6wd.js";import{b as V}from"./icons-DjAiWXKu.js";import{l as n,B as E,m as y,L as h,y as g,i as v,I as a,P as o,k as r,g as k,f as i,E as j,j as $}from"./index-3tP9IO2U.js";import{S as w}from"./Space-DPRtpJHD.js";const H=()=>n("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",focusable:"false"},[n("path",{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"},null)]),C={type:{type:String,default:void 0},disabled:{type:Boolean,default:!1},mark:{type:Boolean,default:!1},code:{type:Boolean,default:!1},keyboard:{type:Boolean,default:!1},underline:{type:Boolean,default:!1},delete:{type:Boolean,default:!1},strong:{type:Boolean,default:!1},italic:{type:Boolean,default:!1},copyable:{type:[Boolean,Object],default:!1},ellipsis:{type:[Boolean,Object],default:!1}};function N(e){return e?e===!0?1:e.rows&&e.rows>0?e.rows:1:0}function S(e,d,t){const u=N(d.ellipsis);return L(e,t,{[`${e}-${d.type}`]:!!d.type,[`${e}-disabled`]:d.disabled,[`${e}-ellipsis`]:u===1,[`${e}-ellipsis-multiple-line`]:u>1})}function P(e){const d=N(e.ellipsis);if(d>1)return{"-webkit-line-clamp":String(d)}}function _(e,d){let t=d;return e.code&&(t=n("code",null,[t])),e.mark&&(t=n("mark",null,[t])),e.keyboard&&(t=n("kbd",null,[t])),e.underline&&(t=n("u",null,[t])),e.delete&&(t=n("del",null,[t])),e.strong&&(t=n("strong",null,[t])),e.italic&&(t=n("i",null,[t])),t}function m(e){if(e==null||typeof e=="boolean")return"";if(typeof e=="string"||typeof e=="number")return String(e);if(Array.isArray(e))return e.map(m).join("");const d=e.children;return typeof d=="string"?d:Array.isArray(d)?d.map(m).join(""):""}async function I(e){var t;if(typeof navigator<"u"&&((t=navigator.clipboard)!=null&&t.writeText)){await navigator.clipboard.writeText(e);return}const d=document.createElement("textarea");d.value=e,d.style.position="fixed",d.style.opacity="0",document.body.appendChild(d),d.select();try{document.execCommand("copy")}finally{document.body.removeChild(d)}}function A(e){const d=E(!1);let t;return{renderCopy:(l,s)=>{if(!l.copyable)return null;const c=typeof l.copyable=="object"?l.copyable:{},f=async b=>{var D;b.stopPropagation();const z=c.text??s();try{await I(z),d.value=!0,(D=c.onCopy)==null||D.call(c,b),t&&clearTimeout(t),t=setTimeout(()=>{d.value=!1},3e3)}catch{}};return n("button",{type:"button",class:L(`${e}-copy`,{[`${e}-copy-success`]:d.value}),"aria-label":d.value?"Copied":"Copy",onClick:f},[d.value?n(V,null,null):n(H,null,null)])}}}const p=y({name:"TypographyText",props:C,setup(e,{slots:d}){const t=h("typography"),{renderCopy:u}=A(t);return()=>{var f;const l=(f=d.default)==null?void 0:f.call(d),s=_(e,l),c=u(e,()=>m(l));return n("span",{class:S(t,e),style:P(e)},[s,c])}}}),T=y({name:"TypographyTitle",props:{...C,level:{type:Number,default:1}},setup(e,{slots:d}){const t=h("typography"),{renderCopy:u}=A(t);return()=>{var b;const l=(b=d.default)==null?void 0:b.call(d),s=_(e,l),c=u(e,()=>m(l)),f=`h${e.level}`;return n(f,{class:S(t,e,`${t}-h${e.level}`),style:P(e)},{default:()=>[s,c]})}}}),x=y({name:"TypographyParagraph",props:C,setup(e,{slots:d}){const t=h("typography"),{renderCopy:u}=A(t);return()=>{var f;const l=(f=d.default)==null?void 0:f.call(d),s=_(e,l),c=u(e,()=>m(l));return n("p",{class:S(t,e),style:P(e)},[s,c])}}}),B=y({name:"TypographyLink",props:{...C,href:{type:String,default:void 0},target:{type:String,default:void 0}},setup(e,{slots:d}){const t=h("typography"),{renderCopy:u}=A(t);return()=>{var f;const l=(f=d.default)==null?void 0:f.call(d),s=_(e,l),c=u(e,()=>m(l));return n("a",{class:S(t,e,`${t}-link`),style:P(e),href:e.disabled?void 0:e.href,target:e.target,"aria-disabled":e.disabled||void 0},[s,c])}}}),M=y({__name:"TypographyCopyable",setup(e){return(d,t)=>(g(),v("div",null,[n(a(x),{copyable:""},{default:o(()=>[...t[0]||(t[0]=[r("这段文字可以复制。",-1)])]),_:1}),n(a(x),{copyable:{text:"自定义复制内容"}},{default:o(()=>[...t[1]||(t[1]=[r("显示文字与复制内容不同。",-1)])]),_:1}),n(a(p),{copyable:""},{default:o(()=>[...t[2]||(t[2]=[r("行内可复制文本",-1)])]),_:1})]))}}),O=`<template>
  <div>
    <Paragraph copyable>这段文字可以复制。</Paragraph>
    <Paragraph :copyable="{ text: '自定义复制内容' }">显示文字与复制内容不同。</Paragraph>
    <Text copyable>行内可复制文本</Text>
  </div>
</template>

<script setup lang="ts">
import { Paragraph, Text } from 'ant-design-hmfw'
<\/script>
`,R=y({__name:"TypographyDecorations",setup(e){return(d,t)=>(g(),k(a(w),{direction:"vertical"},{default:o(()=>[n(a(p),{mark:""},{default:o(()=>[...t[0]||(t[0]=[r("标记文本",-1)])]),_:1}),n(a(p),{code:""},{default:o(()=>[...t[1]||(t[1]=[r("代码文本",-1)])]),_:1}),n(a(p),{keyboard:""},{default:o(()=>[...t[2]||(t[2]=[r("Ctrl",-1)])]),_:1}),n(a(p),{underline:""},{default:o(()=>[...t[3]||(t[3]=[r("下划线文本",-1)])]),_:1}),n(a(p),{delete:""},{default:o(()=>[...t[4]||(t[4]=[r("删除线文本",-1)])]),_:1}),n(a(p),{strong:""},{default:o(()=>[...t[5]||(t[5]=[r("加粗文本",-1)])]),_:1}),n(a(p),{italic:""},{default:o(()=>[...t[6]||(t[6]=[r("斜体文本",-1)])]),_:1})]),_:1}))}}),U=`<template>
  <Space direction="vertical">
    <Text mark>标记文本</Text>
    <Text code>代码文本</Text>
    <Text keyboard>Ctrl</Text>
    <Text underline>下划线文本</Text>
    <Text delete>删除线文本</Text>
    <Text strong>加粗文本</Text>
    <Text italic>斜体文本</Text>
  </Space>
</template>

<script setup lang="ts">
import { Text, Space } from 'ant-design-hmfw'
<\/script>
`,q={style:{"max-width":"240px"}},F=y({__name:"TypographyEllipsis",setup(e){return(d,t)=>(g(),v("div",q,[n(a(p),{ellipsis:""},{default:o(()=>[...t[0]||(t[0]=[r("这是一段很长的文本，超出容器宽度时会以省略号结尾，不会换行显示。",-1)])]),_:1})]))}}),G=`<template>
  <div style="max-width: 240px">
    <Text ellipsis>这是一段很长的文本，超出容器宽度时会以省略号结尾，不会换行显示。</Text>
  </div>
</template>

<script setup lang="ts">
import { Text } from 'ant-design-hmfw'
<\/script>
`,J=y({__name:"TypographyLink",setup(e){return(d,t)=>(g(),v("div",null,[n(a(B),{href:"https://ant.design",target:"_blank"},{default:o(()=>[...t[0]||(t[0]=[r("Ant Design 链接",-1)])]),_:1}),t[2]||(t[2]=i("br",null,null,-1)),n(a(B),{href:"https://ant.design",disabled:""},{default:o(()=>[...t[1]||(t[1]=[r("禁用链接",-1)])]),_:1})]))}}),K=`<template>
  <div>
    <Link href="https://ant.design" target="_blank">Ant Design 链接</Link>
    <br />
    <Link href="https://ant.design" disabled>禁用链接</Link>
  </div>
</template>

<script setup lang="ts">
import { Link } from 'ant-design-hmfw'
<\/script>
`,Q=y({__name:"TypographyParagraph",setup(e){return(d,t)=>(g(),k(a(w),{direction:"vertical",size:16},{default:o(()=>[n(a(x),null,{default:o(()=>[...t[0]||(t[0]=[r(" 这是一段普通的段落文本。Ant Design 是一套企业级 UI 设计语言和 React 组件库。 ",-1)])]),_:1}),n(a(x),{copyable:""},{default:o(()=>[...t[1]||(t[1]=[r(" 这段文本可以复制。点击右侧图标复制内容。 ",-1)])]),_:1}),n(a(x),{ellipsis:{rows:2}},{default:o(()=>[...t[2]||(t[2]=[r(" 这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。 这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。 这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。 ",-1)])]),_:1})]),_:1}))}}),W=`<template>
  <Space direction="vertical" :size="16">
    <Paragraph>
      这是一段普通的段落文本。Ant Design 是一套企业级 UI 设计语言和 React 组件库。
    </Paragraph>

    <Paragraph copyable>
      这段文本可以复制。点击右侧图标复制内容。
    </Paragraph>

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
`,X=y({__name:"TypographyText",setup(e){return(d,t)=>(g(),k(a(w),{direction:"vertical"},{default:o(()=>[n(a(p),null,{default:o(()=>[...t[0]||(t[0]=[r("默认文本",-1)])]),_:1}),n(a(p),{type:"secondary"},{default:o(()=>[...t[1]||(t[1]=[r("次要文本",-1)])]),_:1}),n(a(p),{type:"success"},{default:o(()=>[...t[2]||(t[2]=[r("成功文本",-1)])]),_:1}),n(a(p),{type:"warning"},{default:o(()=>[...t[3]||(t[3]=[r("警告文本",-1)])]),_:1}),n(a(p),{type:"danger"},{default:o(()=>[...t[4]||(t[4]=[r("危险文本",-1)])]),_:1}),n(a(p),{disabled:""},{default:o(()=>[...t[5]||(t[5]=[r("禁用文本",-1)])]),_:1})]),_:1}))}}),Y=`<template>
  <Space direction="vertical">
    <Text>默认文本</Text>
    <Text type="secondary">次要文本</Text>
    <Text type="success">成功文本</Text>
    <Text type="warning">警告文本</Text>
    <Text type="danger">危险文本</Text>
    <Text disabled>禁用文本</Text>
  </Space>
</template>

<script setup lang="ts">
import { Text, Space } from 'ant-design-hmfw'
<\/script>
`,Z=y({__name:"TypographyTitle",setup(e){return(d,t)=>(g(),k(a(w),{direction:"vertical",size:16},{default:o(()=>[n(a(T),{level:1},{default:o(()=>[...t[0]||(t[0]=[r("h1. Ant Design",-1)])]),_:1}),n(a(T),{level:2},{default:o(()=>[...t[1]||(t[1]=[r("h2. Ant Design",-1)])]),_:1}),n(a(T),{level:3},{default:o(()=>[...t[2]||(t[2]=[r("h3. Ant Design",-1)])]),_:1}),n(a(T),{level:4},{default:o(()=>[...t[3]||(t[3]=[r("h4. Ant Design",-1)])]),_:1}),n(a(T),{level:5},{default:o(()=>[...t[4]||(t[4]=[r("h5. Ant Design",-1)])]),_:1})]),_:1}))}}),tt=`<template>
  <Space direction="vertical" :size="16">
    <Title :level="1">h1. Ant Design</Title>
    <Title :level="2">h2. Ant Design</Title>
    <Title :level="3">h3. Ant Design</Title>
    <Title :level="4">h4. Ant Design</Title>
    <Title :level="5">h5. Ant Design</Title>
  </Space>
</template>

<script setup lang="ts">
import { Title, Space } from 'ant-design-hmfw'
<\/script>
`,et={class:"markdown-body"},at={__name:"typography",setup(e,{expose:d}){return d({frontmatter:{}}),(u,l)=>{const s=j("DemoBlock");return g(),v("div",et,[l[0]||(l[0]=$('<h1 id="typography-" tabindex="-1">Typography 排版</h1><p>文本的基本格式。</p><h2 id="" tabindex="-1">何时使用</h2><ul><li>当需要展示标题、段落、列表内容时</li><li>当需要对文字进行强调、标记、删除线等操作时</li><li>当需要展示代码片段时</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">标题</h3><p>通过 <code>level</code> 属性设置标题级别。</p>',7)),n(s,{title:"标题",source:a(tt)},{default:o(()=>[n(Z)]),_:1},8,["source"]),l[1]||(l[1]=i("h3",{id:"-3",tabindex:"-1"},"文本类型",-1)),l[2]||(l[2]=i("p",null,[r("通过 "),i("code",null,"type"),r(" 属性设置文本类型。")],-1)),n(s,{title:"文本类型",source:a(Y)},{default:o(()=>[n(X)]),_:1},8,["source"]),l[3]||(l[3]=i("h3",{id:"-4",tabindex:"-1"},"文本修饰",-1)),l[4]||(l[4]=i("p",null,"支持多种文本修饰样式。",-1)),n(s,{title:"文本修饰",source:a(U)},{default:o(()=>[n(R)]),_:1},8,["source"]),l[5]||(l[5]=i("h3",{id:"-5",tabindex:"-1"},"段落",-1)),l[6]||(l[6]=i("p",null,[r("段落组件以 "),i("code",null,"<p>"),r(" 渲染。")],-1)),n(s,{title:"段落",source:a(W)},{default:o(()=>[n(Q)]),_:1},8,["source"]),l[7]||(l[7]=i("h3",{id:"-6",tabindex:"-1"},"链接",-1)),l[8]||(l[8]=i("p",null,[r("使用 "),i("code",null,"Link"),r(" 渲染超链接，支持 "),i("code",null,"disabled"),r("。")],-1)),n(s,{title:"链接",source:a(K)},{default:o(()=>[n(J)]),_:1},8,["source"]),l[9]||(l[9]=i("h3",{id:"-7",tabindex:"-1"},"可复制",-1)),l[10]||(l[10]=i("p",null,[r("通过 "),i("code",null,"copyable"),r(" 添加复制按钮，对象形式可自定义复制内容与回调。")],-1)),n(s,{title:"可复制",source:a(O)},{default:o(()=>[n(M)]),_:1},8,["source"]),l[11]||(l[11]=i("h3",{id:"-8",tabindex:"-1"},"省略",-1)),l[12]||(l[12]=i("p",null,[r("通过 "),i("code",null,"ellipsis"),r(" 设置单行省略。")],-1)),n(s,{title:"省略",source:a(G)},{default:o(()=>[n(F)]),_:1},8,["source"]),l[13]||(l[13]=$('<h2 id="api" tabindex="-1">API</h2><h3 id="-propstext--title--paragraph--link-" tabindex="-1">通用 Props（Text / Title / Paragraph / Link 共享）</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>文本类型</td><td><code>&#39;secondary&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;danger&#39;</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>mark</td><td>标记样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>code</td><td>代码样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>keyboard</td><td>键盘样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>underline</td><td>下划线</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>delete</td><td>删除线</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>strong</td><td>加粗</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>italic</td><td>斜体</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>copyable</td><td>是否可复制，对象形式 <code>{ text?, onCopy? }</code></td><td><code>boolean | CopyableConfig</code></td><td><code>false</code></td></tr><tr><td>ellipsis</td><td>单行省略</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="title-props" tabindex="-1">Title Props</h3><p>继承通用 Props，额外：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>level</td><td>标题级别</td><td><code>1 | 2 | 3 | 4 | 5</code></td><td><code>1</code></td></tr></tbody></table><h3 id="link-props" tabindex="-1">Link Props</h3><p>继承通用 Props，额外：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>href</td><td>链接地址</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>链接打开方式</td><td><code>string</code></td><td>-</td></tr></tbody></table>',9))])}}};export{at as default};
