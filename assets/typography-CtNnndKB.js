import{S as g}from"./Space-DHvzouOq.js";import{k as p,I as T,j as d,c as x,n as k,w as y,e as b,M as n,G as a,i as o,B as S,g as P,h as B,d as u}from"./index-DvxRruME.js";import{c as h}from"./cls-S9IiI6wd.js";const i=p({name:"TypographyText",props:{type:{type:String,default:void 0},disabled:{type:Boolean,default:!1},mark:{type:Boolean,default:!1},code:{type:Boolean,default:!1},keyboard:{type:Boolean,default:!1},underline:{type:Boolean,default:!1},delete:{type:Boolean,default:!1},strong:{type:Boolean,default:!1},italic:{type:Boolean,default:!1}},setup(l,{slots:r}){const t=T("typography"),f=x(()=>{const e=l.type;return h(t,{[`${t}-${e}`]:!!e,[`${t}-disabled`]:l.disabled})});return()=>{var s;let e=(s=r.default)==null?void 0:s.call(r);return l.mark&&(e=d("mark",null,[e])),l.code&&(e=d("code",null,[e])),l.keyboard&&(e=d("kbd",null,[e])),l.underline&&(e=d("u",null,[e])),l.delete&&(e=d("del",null,[e])),l.strong&&(e=d("strong",null,[e])),l.italic&&(e=d("i",null,[e])),d("span",{class:f.value},[e])}}});function D(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!k(l)}const c=p({name:"TypographyTitle",props:{level:{type:Number,default:1},type:{type:String,default:void 0},disabled:{type:Boolean,default:!1},mark:{type:Boolean,default:!1},code:{type:Boolean,default:!1},underline:{type:Boolean,default:!1},delete:{type:Boolean,default:!1}},setup(l,{slots:r}){const t=T("typography"),f=x(()=>{const e=l.type;return h(t,`${t}-h${l.level}`,{[`${t}-${e}`]:!!e,[`${t}-disabled`]:l.disabled})});return()=>{var v;let e=(v=r.default)==null?void 0:v.call(r);l.mark&&(e=d("mark",null,[e])),l.code&&(e=d("code",null,[e])),l.underline&&(e=d("u",null,[e])),l.delete&&(e=d("del",null,[e]));const s=`h${l.level}`;return d(s,{class:f.value},D(e)?e:{default:()=>[e]})}}}),m=p({name:"TypographyParagraph",props:{type:{type:String,default:void 0},disabled:{type:Boolean,default:!1},mark:{type:Boolean,default:!1},code:{type:Boolean,default:!1},underline:{type:Boolean,default:!1},delete:{type:Boolean,default:!1},strong:{type:Boolean,default:!1}},setup(l,{slots:r}){const t=T("typography"),f=x(()=>{const e=l.type;return h(t,{[`${t}-${e}`]:!!e,[`${t}-disabled`]:l.disabled})});return()=>{var s;let e=(s=r.default)==null?void 0:s.call(r);return l.mark&&(e=d("mark",null,[e])),l.code&&(e=d("code",null,[e])),l.underline&&(e=d("u",null,[e])),l.delete&&(e=d("del",null,[e])),l.strong&&(e=d("strong",null,[e])),d("p",{class:f.value},[e])}}}),_=p({__name:"TypographyDecorations",setup(l){return(r,t)=>(y(),b(a(g),{direction:"vertical"},{default:n(()=>[d(a(i),{mark:""},{default:n(()=>[...t[0]||(t[0]=[o("标记文本",-1)])]),_:1}),d(a(i),{code:""},{default:n(()=>[...t[1]||(t[1]=[o("代码文本",-1)])]),_:1}),d(a(i),{keyboard:""},{default:n(()=>[...t[2]||(t[2]=[o("Ctrl",-1)])]),_:1}),d(a(i),{underline:""},{default:n(()=>[...t[3]||(t[3]=[o("下划线文本",-1)])]),_:1}),d(a(i),{delete:""},{default:n(()=>[...t[4]||(t[4]=[o("删除线文本",-1)])]),_:1}),d(a(i),{strong:""},{default:n(()=>[...t[5]||(t[5]=[o("加粗文本",-1)])]),_:1}),d(a(i),{italic:""},{default:n(()=>[...t[6]||(t[6]=[o("斜体文本",-1)])]),_:1})]),_:1}))}}),$=`<template>
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
`,w=p({__name:"TypographyParagraph",setup(l){return(r,t)=>(y(),b(a(g),{direction:"vertical",size:16},{default:n(()=>[d(a(m),null,{default:n(()=>[...t[0]||(t[0]=[o(" 这是一段普通的段落文本。Ant Design 是一套企业级 UI 设计语言和 React 组件库。 ",-1)])]),_:1}),d(a(m),{copyable:""},{default:n(()=>[...t[1]||(t[1]=[o(" 这段文本可以复制。点击右侧图标复制内容。 ",-1)])]),_:1}),d(a(m),{ellipsis:{rows:2}},{default:n(()=>[...t[2]||(t[2]=[o(" 这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。 这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。 这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。 ",-1)])]),_:1})]),_:1}))}}),A=`<template>
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
`,C=p({__name:"TypographyText",setup(l){return(r,t)=>(y(),b(a(g),{direction:"vertical"},{default:n(()=>[d(a(i),null,{default:n(()=>[...t[0]||(t[0]=[o("默认文本",-1)])]),_:1}),d(a(i),{type:"secondary"},{default:n(()=>[...t[1]||(t[1]=[o("次要文本",-1)])]),_:1}),d(a(i),{type:"success"},{default:n(()=>[...t[2]||(t[2]=[o("成功文本",-1)])]),_:1}),d(a(i),{type:"warning"},{default:n(()=>[...t[3]||(t[3]=[o("警告文本",-1)])]),_:1}),d(a(i),{type:"danger"},{default:n(()=>[...t[4]||(t[4]=[o("危险文本",-1)])]),_:1}),d(a(i),{disabled:""},{default:n(()=>[...t[5]||(t[5]=[o("禁用文本",-1)])]),_:1})]),_:1}))}}),N=`<template>
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
`,V=p({__name:"TypographyTitle",setup(l){return(r,t)=>(y(),b(a(g),{direction:"vertical",size:16},{default:n(()=>[d(a(c),{level:1},{default:n(()=>[...t[0]||(t[0]=[o("h1. Ant Design",-1)])]),_:1}),d(a(c),{level:2},{default:n(()=>[...t[1]||(t[1]=[o("h2. Ant Design",-1)])]),_:1}),d(a(c),{level:3},{default:n(()=>[...t[2]||(t[2]=[o("h3. Ant Design",-1)])]),_:1}),d(a(c),{level:4},{default:n(()=>[...t[3]||(t[3]=[o("h4. Ant Design",-1)])]),_:1}),d(a(c),{level:5},{default:n(()=>[...t[4]||(t[4]=[o("h5. Ant Design",-1)])]),_:1})]),_:1}))}}),j=`<template>
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
`,z={class:"markdown-body"},U={__name:"typography",setup(l,{expose:r}){return r({frontmatter:{}}),(f,e)=>{const s=S("DemoBlock");return y(),P("div",z,[e[0]||(e[0]=B('<h1 id="typography-" tabindex="-1">Typography 排版</h1><p>文本的基本格式。</p><h2 id="" tabindex="-1">何时使用</h2><ul><li>当需要展示标题、段落、列表内容时</li><li>当需要对文字进行强调、标记、删除线等操作时</li><li>当需要展示代码片段时</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">标题</h3><p>通过 <code>level</code> 属性设置标题级别。</p>',7)),d(s,{title:"标题",source:a(j)},{default:n(()=>[d(V)]),_:1},8,["source"]),e[1]||(e[1]=u("h3",{id:"-3",tabindex:"-1"},"文本类型",-1)),e[2]||(e[2]=u("p",null,[o("通过 "),u("code",null,"type"),o(" 属性设置文本类型。")],-1)),d(s,{title:"文本类型",source:a(N)},{default:n(()=>[d(C)]),_:1},8,["source"]),e[3]||(e[3]=u("h3",{id:"-4",tabindex:"-1"},"文本修饰",-1)),e[4]||(e[4]=u("p",null,"支持多种文本修饰样式。",-1)),d(s,{title:"文本修饰",source:a($)},{default:n(()=>[d(_)]),_:1},8,["source"]),e[5]||(e[5]=u("h3",{id:"-5",tabindex:"-1"},"段落",-1)),e[6]||(e[6]=u("p",null,"段落组件支持省略和复制功能。",-1)),d(s,{title:"段落",source:a(A)},{default:n(()=>[d(w)]),_:1},8,["source"]),e[7]||(e[7]=B('<h2 id="api" tabindex="-1">API</h2><h3 id="title-props" tabindex="-1">Title Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>level</td><td>标题级别</td><td><code>1 | 2 | 3 | 4 | 5</code></td><td><code>1</code></td></tr><tr><td>type</td><td>文本类型</td><td><code>&#39;default&#39; | &#39;secondary&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;danger&#39;</code></td><td><code>&#39;default&#39;</code></td></tr></tbody></table><h3 id="text-props" tabindex="-1">Text Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>文本类型</td><td><code>&#39;default&#39; | &#39;secondary&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;danger&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>disabled</td><td>禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>mark</td><td>标记样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>code</td><td>代码样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>keyboard</td><td>键盘样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>underline</td><td>下划线</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>delete</td><td>删除线</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>strong</td><td>加粗</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>italic</td><td>斜体</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>copyable</td><td>是否可复制</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>ellipsis</td><td>省略配置</td><td><code>boolean | { rows?: number }</code></td><td><code>false</code></td></tr></tbody></table><h3 id="paragraph-props" tabindex="-1">Paragraph Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>copyable</td><td>是否可复制</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>ellipsis</td><td>省略配置</td><td><code>boolean | { rows?: number }</code></td><td><code>false</code></td></tr></tbody></table>',7))])}}};export{U as default};
