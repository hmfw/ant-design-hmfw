import{S as y}from"./Space-Di9klTqF.js";import{o as g,N as F,n,f as m,A as s,i as u,R as f,K as l,h as d,k,F as w,G as S,J as _,H as j,l as v,m as p}from"./index-GV1C9GBE.js";import{c as h}from"./cls-S9IiI6wd.js";const b={small:"8px",middle:"16px",large:"24px"};function B(t){if(t!==void 0)return typeof t=="number"?`${t}px`:t in b?b[t]:t}const r=g({name:"Flex",props:{vertical:Boolean,wrap:[Boolean,String],justify:String,align:String,flex:[String,Number],gap:[String,Number],component:{type:String,default:"div"}},setup(t,{slots:o}){const e=F("flex"),x=m(()=>{const a={};t.justify&&(a.justifyContent=t.justify),t.align&&(a.alignItems=t.align),t.flex!==void 0&&(a.flex=t.flex);const c=B(t.gap);return c&&(a.gap=c),t.wrap!==void 0&&(t.wrap===!0?a.flexWrap="wrap":t.wrap===!1?a.flexWrap="nowrap":a.flexWrap=t.wrap),a}),i=m(()=>h(e,{[`${e}-vertical`]:t.vertical}));return()=>{const a=t.component;return n(a,{class:i.value,style:x.value},{default:()=>{var c;return[(c=o.default)==null?void 0:c.call(o)]}})}}}),C=g({__name:"FlexBasic",setup(t){return(o,e)=>(s(),u(l(y),{direction:"vertical",style:{width:"100%"}},{default:f(()=>[n(l(r),{justify:"flex-start",align:"center",gap:"small"},{default:f(()=>[...e[0]||(e[0]=[d("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px"}},"item 1",-1),d("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px"}},"item 2",-1),d("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px"}},"item 3",-1)])]),_:1}),n(l(r),{justify:"center",align:"center",gap:"small"},{default:f(()=>[...e[1]||(e[1]=[d("div",{style:{background:"#52c41a",color:"#fff",padding:"8px 16px"}},"item 1",-1),d("div",{style:{background:"#52c41a",color:"#fff",padding:"8px 16px"}},"item 2",-1),d("div",{style:{background:"#52c41a",color:"#fff",padding:"8px 16px"}},"item 3",-1)])]),_:1}),n(l(r),{justify:"flex-end",align:"center",gap:"small"},{default:f(()=>[...e[2]||(e[2]=[d("div",{style:{background:"#faad14",color:"#fff",padding:"8px 16px"}},"item 1",-1),d("div",{style:{background:"#faad14",color:"#fff",padding:"8px 16px"}},"item 2",-1),d("div",{style:{background:"#faad14",color:"#fff",padding:"8px 16px"}},"item 3",-1)])]),_:1}),n(l(r),{justify:"space-between",align:"center"},{default:f(()=>[...e[3]||(e[3]=[d("div",{style:{background:"#ff4d4f",color:"#fff",padding:"8px 16px"}},"item 1",-1),d("div",{style:{background:"#ff4d4f",color:"#fff",padding:"8px 16px"}},"item 2",-1),d("div",{style:{background:"#ff4d4f",color:"#fff",padding:"8px 16px"}},"item 3",-1)])]),_:1})]),_:1}))}}),N=`<template>
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
`,V=g({__name:"FlexGap",setup(t){return(o,e)=>(s(),u(l(y),{direction:"vertical",style:{width:"100%"}},{default:f(()=>[e[4]||(e[4]=d("div",null,"small 间距",-1)),n(l(r),{gap:"small"},{default:f(()=>[...e[0]||(e[0]=[d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1)])]),_:1}),e[5]||(e[5]=d("div",null,"middle 间距",-1)),n(l(r),{gap:"middle"},{default:f(()=>[...e[1]||(e[1]=[d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1)])]),_:1}),e[6]||(e[6]=d("div",null,"large 间距",-1)),n(l(r),{gap:"large"},{default:f(()=>[...e[2]||(e[2]=[d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1)])]),_:1}),e[7]||(e[7]=d("div",null,"自定义 32px 间距",-1)),n(l(r),{gap:32},{default:f(()=>[...e[3]||(e[3]=[d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1)])]),_:1})]),_:1}))}}),$=`<template>
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
`,G=g({__name:"FlexVertical",setup(t){return(o,e)=>(s(),u(l(r),{vertical:"",gap:"small",style:{width:"200px"}},{default:f(()=>[...e[0]||(e[0]=[d("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px","text-align":"center"}},"item 1",-1),d("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px","text-align":"center"}},"item 2",-1),d("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px","text-align":"center"}},"item 3",-1)])]),_:1}))}}),P=`<template>
  <Flex vertical gap="small" style="width: 200px">
    <div style="background: #1677ff; color: #fff; padding: 8px 16px; text-align: center">item 1</div>
    <div style="background: #1677ff; color: #fff; padding: 8px 16px; text-align: center">item 2</div>
    <div style="background: #1677ff; color: #fff; padding: 8px 16px; text-align: center">item 3</div>
  </Flex>
</template>

<script setup lang="ts">
import { Flex } from 'ant-design-hmfw'
<\/script>
`,W=g({__name:"FlexWrap",setup(t){return(o,e)=>(s(),u(l(r),{wrap:"",gap:"small",style:{"max-width":"400px"}},{default:f(()=>[(s(),k(w,null,S(12,x=>d("div",{key:x,style:{background:"#1677ff",color:"#fff",padding:"8px 16px","border-radius":"4px"}}," item "+_(x),1)),64))]),_:1}))}}),A=`<template>
  <Flex wrap gap="small" style="max-width: 400px">
    <div v-for="i in 12" :key="i" style="background: #1677ff; color: #fff; padding: 8px 16px; border-radius: 4px">
      item {{ i }}
    </div>
  </Flex>
</template>

<script setup lang="ts">
import { Flex } from 'ant-design-hmfw'
<\/script>
`,D={class:"markdown-body"},H={__name:"flex",setup(t,{expose:o}){return o({frontmatter:{}}),(x,i)=>{const a=j("DemoBlock");return s(),k("div",D,[i[0]||(i[0]=v('<h1 id="flex-" tabindex="-1">Flex 弹性布局</h1><p>弹性布局。</p><h2 id="" tabindex="-1">何时使用</h2><ul><li>需要在水平或垂直方向上排列元素时</li><li>需要控制元素间距、对齐方式时</li><li>替代传统的 float 布局</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基础水平排列</h3><p>默认水平排列，通过 <code>justify</code> 和 <code>align</code> 控制对齐。</p>',7)),n(a,{title:"基础水平排列",source:l(N)},{default:f(()=>[n(C)]),_:1},8,["source"]),i[1]||(i[1]=d("h3",{id:"-3",tabindex:"-1"},"垂直排列",-1)),i[2]||(i[2]=d("p",null,[p("通过 "),d("code",null,"vertical"),p(" 属性设置垂直方向排列。")],-1)),n(a,{title:"垂直排列",source:l(P)},{default:f(()=>[n(G)]),_:1},8,["source"]),i[3]||(i[3]=d("h3",{id:"-4",tabindex:"-1"},"间距设置",-1)),i[4]||(i[4]=d("p",null,[p("通过 "),d("code",null,"gap"),p(" 属性设置元素间距，支持预设值和数字。")],-1)),n(a,{title:"间距设置",source:l($)},{default:f(()=>[n(V)]),_:1},8,["source"]),i[5]||(i[5]=d("h3",{id:"-5",tabindex:"-1"},"自动换行",-1)),i[6]||(i[6]=d("p",null,[p("通过 "),d("code",null,"wrap"),p(" 属性允许子元素换行。")],-1)),n(a,{title:"自动换行",source:l(A)},{default:f(()=>[n(W)]),_:1},8,["source"]),i[7]||(i[7]=v('<h2 id="api" tabindex="-1">API</h2><h3 id="flex-props" tabindex="-1">Flex Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>vertical</td><td>是否垂直方向排列</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>wrap</td><td>是否自动换行</td><td><code>boolean | string</code></td><td><code>false</code></td></tr><tr><td>justify</td><td>主轴对齐方式，对应 <code>justify-content</code></td><td><code>&#39;flex-start&#39; | &#39;center&#39; | &#39;flex-end&#39; | &#39;space-between&#39; | &#39;space-around&#39; | &#39;space-evenly&#39; | &#39;start&#39; | &#39;end&#39; | ...</code></td><td>-</td></tr><tr><td>align</td><td>交叉轴对齐方式，对应 <code>align-items</code></td><td><code>&#39;flex-start&#39; | &#39;center&#39; | &#39;flex-end&#39; | &#39;stretch&#39; | &#39;baseline&#39; | &#39;start&#39; | &#39;end&#39; | ...</code></td><td>-</td></tr><tr><td>gap</td><td>子元素间距</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39; | number</code></td><td>-</td></tr><tr><td>flex</td><td>flex CSS 简写属性</td><td><code>string | number</code></td><td>-</td></tr><tr><td>component</td><td>自定义元素类型</td><td><code>string</code></td><td><code>&#39;div&#39;</code></td></tr></tbody></table><h3 id="flex-slots" tabindex="-1">Flex Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>子元素内容</td></tr></tbody></table>',5))])}}};export{H as default};
