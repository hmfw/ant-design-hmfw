import{S as m}from"./Space-_NefwuBe.js";import{d as x,u as F,c as t,a as v,o as s,q as g,w as n,f as d,e as i,b as k,F as w,B as S,s as h,h as j,i as b,g as r}from"./index-dV6GQSVR.js";import{c as C}from"./cls-S9IiI6wd.js";const y={small:"var(--hmfw-padding-xs)",middle:"var(--hmfw-padding)",large:"var(--hmfw-padding-lg)"};function P(l){if(l!==void 0)return typeof l=="number"?`${l}px`:l in y?y[l]:l}const a=x({name:"Flex",props:{vertical:Boolean,wrap:[Boolean,String],justify:String,align:String,flex:[String,Number],gap:[String,Number],component:{type:String,default:"div"}},setup(l,{slots:o}){const e=F("flex"),c=v(()=>{const p={};l.justify&&(p.justifyContent=l.justify),l.align&&(p.alignItems=l.align),l.flex!==void 0&&(p.flex=l.flex);const u=P(l.gap);return u&&(p.gap=u),l.wrap!==void 0&&(l.wrap===!0?p.flexWrap="wrap":l.wrap===!1?p.flexWrap="nowrap":p.flexWrap=l.wrap),p}),f=v(()=>C(e,{[`${e}-vertical`]:l.vertical}));return()=>{const p=l.component;return t(p,{class:f.value,style:c.value},{default:()=>{var u;return[(u=o.default)==null?void 0:u.call(o)]}})}}}),q=x({__name:"FlexAlign",setup(l){return(o,e)=>(s(),g(i(m),{direction:"vertical",style:{width:"100%"}},{default:n(()=>[e[5]||(e[5]=d("div",null,'align="flex-start"',-1)),t(i(a),{align:"flex-start",gap:"small",style:{height:"80px",background:"#f5f5f5",padding:"8px"}},{default:n(()=>[...e[0]||(e[0]=[d("div",{style:{background:"#1677ff",color:"#fff",padding:"4px 8px"}},"item 1",-1),d("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px"}},"item 2",-1),d("div",{style:{background:"#1677ff",color:"#fff",padding:"16px 32px"}},"item 3",-1)])]),_:1}),e[6]||(e[6]=d("div",null,'align="center"',-1)),t(i(a),{align:"center",gap:"small",style:{height:"80px",background:"#f5f5f5",padding:"8px"}},{default:n(()=>[...e[1]||(e[1]=[d("div",{style:{background:"#52c41a",color:"#fff",padding:"4px 8px"}},"item 1",-1),d("div",{style:{background:"#52c41a",color:"#fff",padding:"8px 16px"}},"item 2",-1),d("div",{style:{background:"#52c41a",color:"#fff",padding:"16px 32px"}},"item 3",-1)])]),_:1}),e[7]||(e[7]=d("div",null,'align="flex-end"',-1)),t(i(a),{align:"flex-end",gap:"small",style:{height:"80px",background:"#f5f5f5",padding:"8px"}},{default:n(()=>[...e[2]||(e[2]=[d("div",{style:{background:"#faad14",color:"#fff",padding:"4px 8px"}},"item 1",-1),d("div",{style:{background:"#faad14",color:"#fff",padding:"8px 16px"}},"item 2",-1),d("div",{style:{background:"#faad14",color:"#fff",padding:"16px 32px"}},"item 3",-1)])]),_:1}),e[8]||(e[8]=d("div",null,'align="baseline"',-1)),t(i(a),{align:"baseline",gap:"small",style:{height:"80px",background:"#f5f5f5",padding:"8px"}},{default:n(()=>[...e[3]||(e[3]=[d("div",{style:{background:"#ff4d4f",color:"#fff",padding:"8px 16px","font-size":"12px"}},"small",-1),d("div",{style:{background:"#ff4d4f",color:"#fff",padding:"8px 16px","font-size":"16px"}},"medium",-1),d("div",{style:{background:"#ff4d4f",color:"#fff",padding:"8px 16px","font-size":"20px"}},"large",-1)])]),_:1}),e[9]||(e[9]=d("div",null,'align="stretch"',-1)),t(i(a),{align:"stretch",gap:"small",style:{height:"80px",background:"#f5f5f5",padding:"8px"}},{default:n(()=>[...e[4]||(e[4]=[d("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px"}},"item 1",-1),d("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px"}},"item 2",-1),d("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px"}},"item 3",-1)])]),_:1})]),_:1}))}}),B=`<template>
  <Space direction="vertical" style="width: 100%">
    <div>align="flex-start"</div>
    <Flex align="flex-start" gap="small" style="height: 80px; background: #f5f5f5; padding: 8px">
      <div style="background: #1677ff; color: #fff; padding: 4px 8px">item 1</div>
      <div style="background: #1677ff; color: #fff; padding: 8px 16px">item 2</div>
      <div style="background: #1677ff; color: #fff; padding: 16px 32px">item 3</div>
    </Flex>

    <div>align="center"</div>
    <Flex align="center" gap="small" style="height: 80px; background: #f5f5f5; padding: 8px">
      <div style="background: #52c41a; color: #fff; padding: 4px 8px">item 1</div>
      <div style="background: #52c41a; color: #fff; padding: 8px 16px">item 2</div>
      <div style="background: #52c41a; color: #fff; padding: 16px 32px">item 3</div>
    </Flex>

    <div>align="flex-end"</div>
    <Flex align="flex-end" gap="small" style="height: 80px; background: #f5f5f5; padding: 8px">
      <div style="background: #faad14; color: #fff; padding: 4px 8px">item 1</div>
      <div style="background: #faad14; color: #fff; padding: 8px 16px">item 2</div>
      <div style="background: #faad14; color: #fff; padding: 16px 32px">item 3</div>
    </Flex>

    <div>align="baseline"</div>
    <Flex align="baseline" gap="small" style="height: 80px; background: #f5f5f5; padding: 8px">
      <div style="background: #ff4d4f; color: #fff; padding: 8px 16px; font-size: 12px">small</div>
      <div style="background: #ff4d4f; color: #fff; padding: 8px 16px; font-size: 16px">medium</div>
      <div style="background: #ff4d4f; color: #fff; padding: 8px 16px; font-size: 20px">large</div>
    </Flex>

    <div>align="stretch"</div>
    <Flex align="stretch" gap="small" style="height: 80px; background: #f5f5f5; padding: 8px">
      <div style="background: #1677ff; color: #fff; padding: 8px 16px">item 1</div>
      <div style="background: #1677ff; color: #fff; padding: 8px 16px">item 2</div>
      <div style="background: #1677ff; color: #fff; padding: 8px 16px">item 3</div>
    </Flex>
  </Space>
</template>

<script setup lang="ts">
import { Flex, Space } from '@hmfw/ant-design'
<\/script>
`,T=x({__name:"FlexBasic",setup(l){return(o,e)=>(s(),g(i(m),{direction:"vertical",style:{width:"100%"}},{default:n(()=>[t(i(a),{justify:"flex-start",align:"center",gap:"small"},{default:n(()=>[...e[0]||(e[0]=[d("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px"}},"item 1",-1),d("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px"}},"item 2",-1),d("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px"}},"item 3",-1)])]),_:1}),t(i(a),{justify:"center",align:"center",gap:"small"},{default:n(()=>[...e[1]||(e[1]=[d("div",{style:{background:"#52c41a",color:"#fff",padding:"8px 16px"}},"item 1",-1),d("div",{style:{background:"#52c41a",color:"#fff",padding:"8px 16px"}},"item 2",-1),d("div",{style:{background:"#52c41a",color:"#fff",padding:"8px 16px"}},"item 3",-1)])]),_:1}),t(i(a),{justify:"flex-end",align:"center",gap:"small"},{default:n(()=>[...e[2]||(e[2]=[d("div",{style:{background:"#faad14",color:"#fff",padding:"8px 16px"}},"item 1",-1),d("div",{style:{background:"#faad14",color:"#fff",padding:"8px 16px"}},"item 2",-1),d("div",{style:{background:"#faad14",color:"#fff",padding:"8px 16px"}},"item 3",-1)])]),_:1}),t(i(a),{justify:"space-between",align:"center"},{default:n(()=>[...e[3]||(e[3]=[d("div",{style:{background:"#ff4d4f",color:"#fff",padding:"8px 16px"}},"item 1",-1),d("div",{style:{background:"#ff4d4f",color:"#fff",padding:"8px 16px"}},"item 2",-1),d("div",{style:{background:"#ff4d4f",color:"#fff",padding:"8px 16px"}},"item 3",-1)])]),_:1})]),_:1}))}}),$=`<template>
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
import { Flex, Space } from '@hmfw/ant-design'
<\/script>
`,A=x({__name:"FlexComponent",setup(l){return(o,e)=>(s(),g(i(m),{direction:"vertical",style:{width:"100%"}},{default:n(()=>[d("div",null,[e[1]||(e[1]=d("p",null,"默认 div 标签",-1)),t(i(a),{gap:"small"},{default:n(()=>[...e[0]||(e[0]=[d("span",{style:{background:"#e6f4ff",padding:"8px"}},"item 1",-1),d("span",{style:{background:"#e6f4ff",padding:"8px"}},"item 2",-1)])]),_:1})]),d("div",null,[e[3]||(e[3]=d("p",null,'component="section"',-1)),t(i(a),{component:"section",gap:"small"},{default:n(()=>[...e[2]||(e[2]=[d("span",{style:{background:"#f6ffed",padding:"8px"}},"item 1",-1),d("span",{style:{background:"#f6ffed",padding:"8px"}},"item 2",-1)])]),_:1})]),d("div",null,[e[6]||(e[6]=d("p",null,'component="nav" — 语义化导航',-1)),t(i(a),{component:"nav",justify:"space-between",gap:"small",style:{background:"#fafafa",padding:"12px"}},{default:n(()=>[e[5]||(e[5]=d("span",null,"Logo",-1)),t(i(a),{component:"ul",gap:"small",style:{"list-style":"none",margin:"0",padding:"0"}},{default:n(()=>[...e[4]||(e[4]=[d("li",null,[d("a",{href:"#"},"Home")],-1),d("li",null,[d("a",{href:"#"},"About")],-1),d("li",null,[d("a",{href:"#"},"Contact")],-1)])]),_:1})]),_:1})]),d("div",null,[e[8]||(e[8]=d("p",null,'component="footer" — 语义化页脚',-1)),t(i(a),{component:"footer",justify:"center",gap:"large",style:{background:"#001529",color:"#fff",padding:"16px"}},{default:n(()=>[...e[7]||(e[7]=[d("span",null,"© 2024",-1),d("span",null,"Privacy Policy",-1),d("span",null,"Terms of Service",-1)])]),_:1})])]),_:1}))}}),z=`<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <p>默认 div 标签</p>
      <Flex gap="small">
        <span style="background: #e6f4ff; padding: 8px">item 1</span>
        <span style="background: #e6f4ff; padding: 8px">item 2</span>
      </Flex>
    </div>

    <div>
      <p>component="section"</p>
      <Flex component="section" gap="small">
        <span style="background: #f6ffed; padding: 8px">item 1</span>
        <span style="background: #f6ffed; padding: 8px">item 2</span>
      </Flex>
    </div>

    <div>
      <p>component="nav" — 语义化导航</p>
      <Flex component="nav" justify="space-between" gap="small" style="background: #fafafa; padding: 12px">
        <span>Logo</span>
        <Flex component="ul" gap="small" style="list-style: none; margin: 0; padding: 0">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </Flex>
      </Flex>
    </div>

    <div>
      <p>component="footer" — 语义化页脚</p>
      <Flex component="footer" justify="center" gap="large" style="background: #001529; color: #fff; padding: 16px">
        <span>© 2024</span>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </Flex>
    </div>
  </Space>
</template>

<script setup lang="ts">
import { Flex, Space } from '@hmfw/ant-design'
<\/script>
`,L=x({__name:"FlexGap",setup(l){return(o,e)=>(s(),g(i(m),{direction:"vertical",style:{width:"100%"}},{default:n(()=>[e[4]||(e[4]=d("div",null,"small 间距",-1)),t(i(a),{gap:"small"},{default:n(()=>[...e[0]||(e[0]=[d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1)])]),_:1}),e[5]||(e[5]=d("div",null,"middle 间距",-1)),t(i(a),{gap:"middle"},{default:n(()=>[...e[1]||(e[1]=[d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1)])]),_:1}),e[6]||(e[6]=d("div",null,"large 间距",-1)),t(i(a),{gap:"large"},{default:n(()=>[...e[2]||(e[2]=[d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1)])]),_:1}),e[7]||(e[7]=d("div",null,"自定义 32px 间距",-1)),t(i(a),{gap:32},{default:n(()=>[...e[3]||(e[3]=[d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1),d("div",{style:{background:"#e6f4ff",border:"1px solid #91caff",padding:"8px 16px"}},"item",-1)])]),_:1})]),_:1}))}}),N=`<template>
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
import { Flex, Space } from '@hmfw/ant-design'
<\/script>
`,V=x({__name:"FlexVertical",setup(l){return(o,e)=>(s(),g(i(a),{vertical:"",gap:"small",style:{width:"200px"}},{default:n(()=>[...e[0]||(e[0]=[d("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px","text-align":"center"}},"item 1",-1),d("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px","text-align":"center"}},"item 2",-1),d("div",{style:{background:"#1677ff",color:"#fff",padding:"8px 16px","text-align":"center"}},"item 3",-1)])]),_:1}))}}),G=`<template>
  <Flex vertical gap="small" style="width: 200px">
    <div style="background: #1677ff; color: #fff; padding: 8px 16px; text-align: center">item 1</div>
    <div style="background: #1677ff; color: #fff; padding: 8px 16px; text-align: center">item 2</div>
    <div style="background: #1677ff; color: #fff; padding: 8px 16px; text-align: center">item 3</div>
  </Flex>
</template>

<script setup lang="ts">
import { Flex } from '@hmfw/ant-design'
<\/script>
`,W=x({__name:"FlexWrap",setup(l){return(o,e)=>(s(),g(i(a),{wrap:"",gap:"small",style:{"max-width":"400px"}},{default:n(()=>[(s(),k(w,null,S(12,c=>d("div",{key:c,style:{background:"#1677ff",color:"#fff",padding:"8px 16px","border-radius":"4px"}}," item "+h(c),1)),64))]),_:1}))}}),D=`<template>
  <Flex wrap gap="small" style="max-width: 400px">
    <div v-for="i in 12" :key="i" style="background: #1677ff; color: #fff; padding: 8px 16px; border-radius: 4px">
      item {{ i }}
    </div>
  </Flex>
</template>

<script setup lang="ts">
import { Flex } from '@hmfw/ant-design'
<\/script>
`,H={class:"markdown-body"},E={__name:"flex",setup(l,{expose:o}){return o({frontmatter:{}}),(c,f)=>{const p=j("DemoBlock");return s(),k("div",H,[f[0]||(f[0]=b('<h1 id="flex-弹性布局" tabindex="-1">Flex 弹性布局</h1><p>弹性布局。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><ul><li>需要在水平或垂直方向上排列元素时</li><li>需要控制元素间距、对齐方式时</li><li>替代传统的 float 布局</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="基础水平排列" tabindex="-1">基础水平排列</h3><p>默认水平排列，通过 <code>justify</code> 和 <code>align</code> 控制对齐。</p>',7)),t(p,{title:"基础水平排列",source:i($)},{default:n(()=>[t(T)]),_:1},8,["source"]),f[1]||(f[1]=d("h3",{id:"垂直排列",tabindex:"-1"},"垂直排列",-1)),f[2]||(f[2]=d("p",null,[r("通过 "),d("code",null,"vertical"),r(" 属性设置垂直方向排列。")],-1)),t(p,{title:"垂直排列",source:i(G)},{default:n(()=>[t(V)]),_:1},8,["source"]),f[3]||(f[3]=d("h3",{id:"交叉轴对齐",tabindex:"-1"},"交叉轴对齐",-1)),f[4]||(f[4]=d("p",null,[r("通过 "),d("code",null,"align"),r(" 属性控制子元素在交叉轴上的对齐方式。")],-1)),t(p,{title:"交叉轴对齐",source:i(B)},{default:n(()=>[t(q)]),_:1},8,["source"]),f[5]||(f[5]=d("h3",{id:"间距设置",tabindex:"-1"},"间距设置",-1)),f[6]||(f[6]=d("p",null,[r("通过 "),d("code",null,"gap"),r(" 属性设置元素间距，支持预设值和数字。")],-1)),t(p,{title:"间距设置",source:i(N)},{default:n(()=>[t(L)]),_:1},8,["source"]),f[7]||(f[7]=d("h3",{id:"自动换行",tabindex:"-1"},"自动换行",-1)),f[8]||(f[8]=d("p",null,[r("通过 "),d("code",null,"wrap"),r(" 属性允许子元素换行。")],-1)),t(p,{title:"自动换行",source:i(D)},{default:n(()=>[t(W)]),_:1},8,["source"]),f[9]||(f[9]=d("h3",{id:"自定义元素标签",tabindex:"-1"},"自定义元素标签",-1)),f[10]||(f[10]=d("p",null,[r("通过 "),d("code",null,"component"),r(" 属性设置渲染的 HTML 标签，支持语义化 HTML。")],-1)),t(p,{title:"自定义元素标签",source:i(z)},{default:n(()=>[t(A)]),_:1},8,["source"]),f[11]||(f[11]=b(`<h2 id="api" tabindex="-1">API</h2><h3 id="flex-props" tabindex="-1">Flex Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>vertical</td><td>是否垂直方向排列</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>wrap</td><td>是否自动换行</td><td><code>boolean | string</code></td><td><code>false</code></td></tr><tr><td>justify</td><td>主轴对齐方式，对应 <code>justify-content</code></td><td><code>&#39;flex-start&#39; | &#39;center&#39; | &#39;flex-end&#39; | &#39;space-between&#39; | &#39;space-around&#39; | &#39;space-evenly&#39; | &#39;start&#39; | &#39;end&#39; | ...</code></td><td>-</td></tr><tr><td>align</td><td>交叉轴对齐方式，对应 <code>align-items</code></td><td><code>&#39;flex-start&#39; | &#39;center&#39; | &#39;flex-end&#39; | &#39;stretch&#39; | &#39;baseline&#39; | &#39;start&#39; | &#39;end&#39; | ...</code></td><td>-</td></tr><tr><td>gap</td><td>子元素间距</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39; | number</code></td><td>-</td></tr><tr><td>flex</td><td>flex CSS 简写属性</td><td><code>string | number</code></td><td>-</td></tr><tr><td>component</td><td>自定义元素类型</td><td><code>string</code></td><td><code>&#39;div&#39;</code></td></tr></tbody></table><h3 id="flex-slots" tabindex="-1">Flex Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>子元素内容</td></tr></tbody></table><hr><p>Flex 是单元素透传组件，可直接使用原生 class 和 style attribute 进行样式定制。</p><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Flex 组件通过以下 Design Token 控制 gap 预设间距，可通过 <code>ConfigProvider</code> 的 <code>theme</code> 属性全局覆盖：</p><table><thead><tr><th>Token</th><th>默认值</th><th>gap 预设</th><th>用途</th></tr></thead><tbody><tr><td><code>--hmfw-padding-xs</code></td><td><code>8px</code></td><td><code>gap=&quot;small&quot;</code></td><td>小间距</td></tr><tr><td><code>--hmfw-padding</code></td><td><code>16px</code></td><td><code>gap=&quot;middle&quot;</code></td><td>中间距</td></tr><tr><td><code>--hmfw-padding-lg</code></td><td><code>24px</code></td><td><code>gap=&quot;large&quot;</code></td><td>大间距</td></tr></tbody></table><p>自定义示例：</p><pre class="language-vue"><code>&lt;ConfigProvider :theme=&quot;{ paddingXS: 12, padding: 20, paddingLG: 32 }&quot;&gt;
  &lt;Flex gap=&quot;middle&quot;&gt;...&lt;/Flex&gt;
&lt;/ConfigProvider&gt;
</code></pre>`,12))])}}};export{E as default};
