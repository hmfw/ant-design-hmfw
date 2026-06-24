import{S as y}from"./Space-D1_Couc4.js";import{o as g,N as F,n,f as m,A as s,i as u,R as f,K as l,h as e,k,F as w,G as S,J as _,H as h,l as v,m as p}from"./index-Y1x_vdlx.js";import{c as j}from"./cls-S9IiI6wd.js";const b={small:"8px",middle:"16px",large:"24px"};function B(t){if(t!==void 0)return typeof t=="number"?`${t}px`:t in b?b[t]:t}const r=g({name:"Flex",props:{vertical:Boolean,wrap:[Boolean,String],justify:String,align:String,flex:[String,Number],gap:[String,Number],component:{type:String,default:"div"}},setup(t,{slots:o}){const d=F("flex"),x=m(()=>{const a={};t.justify&&(a.justifyContent=t.justify),t.align&&(a.alignItems=t.align),t.flex!==void 0&&(a.flex=t.flex);const c=B(t.gap);return c&&(a.gap=c),t.wrap!==void 0&&(t.wrap===!0?a.flexWrap="wrap":t.wrap===!1?a.flexWrap="nowrap":a.flexWrap=t.wrap),a}),i=m(()=>j(d,{[`${d}-vertical`]:t.vertical}));return()=>{const a=t.component;return n(a,{class:i.value,style:x.value},{default:()=>{var c;return[(c=o.default)==null?void 0:c.call(o)]}})}}}),C=g({__name:"FlexBasic",setup(t){return(o,d)=>(s(),u(l(y),{direction:"vertical",style:{width:"100%"}},{default:f(()=>[n(l(r),{justify:"flex-start",align:"center",gap:"small"},{default:f(()=>[...d[0]||(d[0]=[e("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px"}},"item 1",-1),e("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px"}},"item 2",-1),e("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px"}},"item 3",-1)])]),_:1}),n(l(r),{justify:"center",align:"center",gap:"small"},{default:f(()=>[...d[1]||(d[1]=[e("div",{style:{background:"#52c41a",color:"#fff",padding:"8px 16px"}},"item 1",-1),e("div",{style:{background:"#52c41a",color:"#fff",padding:"8px 16px"}},"item 2",-1),e("div",{style:{background:"#52c41a",color:"#fff",padding:"8px 16px"}},"item 3",-1)])]),_:1}),n(l(r),{justify:"flex-end",align:"center",gap:"small"},{default:f(()=>[...d[2]||(d[2]=[e("div",{style:{background:"#faad14",color:"#fff",padding:"8px 16px"}},"item 1",-1),e("div",{style:{background:"#faad14",color:"#fff",padding:"8px 16px"}},"item 2",-1),e("div",{style:{background:"#faad14",color:"#fff",padding:"8px 16px"}},"item 3",-1)])]),_:1}),n(l(r),{justify:"space-between",align:"center"},{default:f(()=>[...d[3]||(d[3]=[e("div",{style:{background:"#ff4d4f",color:"#fff",padding:"8px 16px"}},"item 1",-1),e("div",{style:{background:"#ff4d4f",color:"#fff",padding:"8px 16px"}},"item 2",-1),e("div",{style:{background:"#ff4d4f",color:"#fff",padding:"8px 16px"}},"item 3",-1)])]),_:1})]),_:1}))}}),N=`<template>
  <Space direction="vertical" style="width: 100%">
    <Flex justify="flex-start" align="center" gap="small">
      <div style="background: #1677ff; color: #fff; padding: 8px 16px">item 1</div>
      <div style="background: #1677ff; color: #fff; padding: 8px 16px">item 2</div>
      <div style="background: #1677ff; color: #fff; padding: 8px 16px">item 3</div>
    </Flex>
    <Flex justify="center" align="center" gap="small">
      <div style="background: #52c41a; color: #fff; padding: 8px 16px">item 1</div>
      <div style="background: #52c41a; color: #fff; padding: 8px 16px">item 2</div>
      <div style="background: #52c41a; color: #fff; padding: 8px 16px">item 3</div>
    </Flex>
    <Flex justify="flex-end" align="center" gap="small">
      <div style="background: #faad14; color: #fff; padding: 8px 16px">item 1</div>
      <div style="background: #faad14; color: #fff; padding: 8px 16px">item 2</div>
      <div style="background: #faad14; color: #fff; padding: 8px 16px">item 3</div>
    </Flex>
    <Flex justify="space-between" align="center">
      <div style="background: #ff4d4f; color: #fff; padding: 8px 16px">item 1</div>
      <div style="background: #ff4d4f; color: #fff; padding: 8px 16px">item 2</div>
      <div style="background: #ff4d4f; color: #fff; padding: 8px 16px">item 3</div>
    </Flex>
  </Space>
</template>

<script setup lang="ts">
import { Flex, Space } from 'ant-design-hmfw'
<\/script>
`,V=g({__name:"FlexGap",setup(t){return(o,d)=>(s(),u(l(y),{direction:"vertical",style:{width:"100%"}},{default:f(()=>[d[4]||(d[4]=e("div",null,"small 间距",-1)),n(l(r),{gap:"small"},{default:f(()=>[...d[0]||(d[0]=[e("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),e("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),e("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1)])]),_:1}),d[5]||(d[5]=e("div",null,"middle 间距",-1)),n(l(r),{gap:"middle"},{default:f(()=>[...d[1]||(d[1]=[e("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),e("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),e("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1)])]),_:1}),d[6]||(d[6]=e("div",null,"large 间距",-1)),n(l(r),{gap:"large"},{default:f(()=>[...d[2]||(d[2]=[e("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),e("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),e("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1)])]),_:1}),d[7]||(d[7]=e("div",null,"自定义 32px 间距",-1)),n(l(r),{gap:32},{default:f(()=>[...d[3]||(d[3]=[e("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),e("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),e("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1)])]),_:1})]),_:1}))}}),$=`<template>
  <Space direction="vertical" style="width: 100%">
    <div>small 间距</div>
    <Flex gap="small">
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
    </Flex>
    <div>middle 间距</div>
    <Flex gap="middle">
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
    </Flex>
    <div>large 间距</div>
    <Flex gap="large">
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
    </Flex>
    <div>自定义 32px 间距</div>
    <Flex :gap="32">
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
    </Flex>
  </Space>
</template>

<script setup lang="ts">
import { Flex, Space } from 'ant-design-hmfw'
<\/script>
`,G=g({__name:"FlexVertical",setup(t){return(o,d)=>(s(),u(l(r),{vertical:"",gap:"small",style:{width:"200px"}},{default:f(()=>[...d[0]||(d[0]=[e("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px","text-align":"center"}},"item 1",-1),e("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px","text-align":"center"}},"item 2",-1),e("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px","text-align":"center"}},"item 3",-1)])]),_:1}))}}),P=`<template>
  <Flex vertical gap="small" style="width: 200px">
    <div style="background: #1677ff; color: #fff; padding: 8px 16px; text-align: center">item 1</div>
    <div style="background: #1677ff; color: #fff; padding: 8px 16px; text-align: center">item 2</div>
    <div style="background: #1677ff; color: #fff; padding: 8px 16px; text-align: center">item 3</div>
  </Flex>
</template>

<script setup lang="ts">
import { Flex } from 'ant-design-hmfw'
<\/script>
`,T=g({__name:"FlexWrap",setup(t){return(o,d)=>(s(),u(l(r),{wrap:"",gap:"small",style:{"max-width":"400px"}},{default:f(()=>[(s(),k(w,null,S(12,x=>e("div",{key:x,style:{background:"#1677ff",color:"#fff",padding:"8px 16px","border-radius":"4px"}}," item "+_(x),1)),64))]),_:1}))}}),W=`<template>
  <Flex wrap gap="small" style="max-width: 400px">
    <div v-for="i in 12" :key="i" style="background: #1677ff; color: #fff; padding: 8px 16px; border-radius: 4px">
      item {{ i }}
    </div>
  </Flex>
</template>

<script setup lang="ts">
import { Flex } from 'ant-design-hmfw'
<\/script>
`,A={class:"markdown-body"},H={__name:"flex",setup(t,{expose:o}){return o({frontmatter:{}}),(x,i)=>{const a=h("DemoBlock");return s(),k("div",A,[i[0]||(i[0]=v('<h1 id="flex-弹性布局" tabindex="-1">Flex 弹性布局</h1><p>弹性布局。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><ul><li>需要在水平或垂直方向上排列元素时</li><li>需要控制元素间距、对齐方式时</li><li>替代传统的 float 布局</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="基础水平排列" tabindex="-1">基础水平排列</h3><p>默认水平排列，通过 <code>justify</code> 和 <code>align</code> 控制对齐。</p>',7)),n(a,{title:"基础水平排列",source:l(N)},{default:f(()=>[n(C)]),_:1},8,["source"]),i[1]||(i[1]=e("h3",{id:"垂直排列",tabindex:"-1"},"垂直排列",-1)),i[2]||(i[2]=e("p",null,[p("通过 "),e("code",null,"vertical"),p(" 属性设置垂直方向排列。")],-1)),n(a,{title:"垂直排列",source:l(P)},{default:f(()=>[n(G)]),_:1},8,["source"]),i[3]||(i[3]=e("h3",{id:"间距设置",tabindex:"-1"},"间距设置",-1)),i[4]||(i[4]=e("p",null,[p("通过 "),e("code",null,"gap"),p(" 属性设置元素间距，支持预设值和数字。")],-1)),n(a,{title:"间距设置",source:l($)},{default:f(()=>[n(V)]),_:1},8,["source"]),i[5]||(i[5]=e("h3",{id:"自动换行",tabindex:"-1"},"自动换行",-1)),i[6]||(i[6]=e("p",null,[p("通过 "),e("code",null,"wrap"),p(" 属性允许子元素换行。")],-1)),n(a,{title:"自动换行",source:l(W)},{default:f(()=>[n(T)]),_:1},8,["source"]),i[7]||(i[7]=v('<h2 id="api" tabindex="-1">API</h2><h3 id="flex-props" tabindex="-1">Flex Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>vertical</td><td>是否垂直方向排列</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>wrap</td><td>是否自动换行</td><td><code>boolean | string</code></td><td><code>false</code></td></tr><tr><td>justify</td><td>主轴对齐方式，对应 <code>justify-content</code></td><td><code>&#39;flex-start&#39; | &#39;center&#39; | &#39;flex-end&#39; | &#39;space-between&#39; | &#39;space-around&#39; | &#39;space-evenly&#39; | &#39;start&#39; | &#39;end&#39; | ...</code></td><td>-</td></tr><tr><td>align</td><td>交叉轴对齐方式，对应 <code>align-items</code></td><td><code>&#39;flex-start&#39; | &#39;center&#39; | &#39;flex-end&#39; | &#39;stretch&#39; | &#39;baseline&#39; | &#39;start&#39; | &#39;end&#39; | ...</code></td><td>-</td></tr><tr><td>gap</td><td>子元素间距</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39; | number</code></td><td>-</td></tr><tr><td>flex</td><td>flex CSS 简写属性</td><td><code>string | number</code></td><td>-</td></tr><tr><td>component</td><td>自定义元素类型</td><td><code>string</code></td><td><code>&#39;div&#39;</code></td></tr></tbody></table><h3 id="flex-slots" tabindex="-1">Flex Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>子元素内容</td></tr></tbody></table><hr><p>Flex 是单元素透传组件，可直接使用原生 class 和 style attribute 进行样式定制。</p><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Flex 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。</p>',9))])}}};export{H as default};
