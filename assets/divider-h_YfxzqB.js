import{D as n}from"./Divider-DpqLym7x.js";import{k as v,w as p,g as a,d as i,j as d,G as r,M as l,i as o,B as f,h as D}from"./index-DvxRruME.js";import"./cls-S9IiI6wd.js";const b=v({__name:"DividerBasic",setup(m){return(s,t)=>(p(),a("div",null,[t[0]||(t[0]=i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)),d(r(n)),t[1]||(t[1]=i("p",null,"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",-1)),d(r(n),{dashed:""}),t[2]||(t[2]=i("p",null,"Ut enim ad minim veniam, quis nostrud exercitation ullamco.",-1))]))}}),x=`<template>
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <Divider />
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Divider dashed />
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</template>

<script setup lang="ts">
import { Divider } from 'ant-design-hmfw'
<\/script>
`,g=v({__name:"DividerVertical",setup(m){return(s,t)=>(p(),a("div",null,[t[0]||(t[0]=i("a",{href:"#"},"链接一",-1)),d(r(n),{type:"vertical"}),t[1]||(t[1]=i("a",{href:"#"},"链接二",-1)),d(r(n),{type:"vertical"}),t[2]||(t[2]=i("a",{href:"#"},"链接三",-1))]))}}),L=`<template>
  <div>
    <a href="#">链接一</a>
    <Divider type="vertical" />
    <a href="#">链接二</a>
    <Divider type="vertical" />
    <a href="#">链接三</a>
  </div>
</template>

<script setup lang="ts">
import { Divider } from 'ant-design-hmfw'
<\/script>
`,y=v({__name:"DividerWithText",setup(m){return(s,t)=>(p(),a("div",null,[t[4]||(t[4]=i("p",null,"Lorem ipsum dolor sit amet.",-1)),d(r(n),null,{default:l(()=>[...t[0]||(t[0]=[o("居中文字",-1)])]),_:1}),t[5]||(t[5]=i("p",null,"Lorem ipsum dolor sit amet.",-1)),d(r(n),{orientation:"left"},{default:l(()=>[...t[1]||(t[1]=[o("左对齐",-1)])]),_:1}),t[6]||(t[6]=i("p",null,"Lorem ipsum dolor sit amet.",-1)),d(r(n),{orientation:"right"},{default:l(()=>[...t[2]||(t[2]=[o("右对齐",-1)])]),_:1}),t[7]||(t[7]=i("p",null,"Lorem ipsum dolor sit amet.",-1)),d(r(n),{orientation:"left",plain:""},{default:l(()=>[...t[3]||(t[3]=[o("朴素文字",-1)])]),_:1}),t[8]||(t[8]=i("p",null,"Lorem ipsum dolor sit amet.",-1))]))}}),B=`<template>
  <div>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider>居中文字</Divider>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider orientation="left">左对齐</Divider>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider orientation="right">右对齐</Divider>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider orientation="left" plain>朴素文字</Divider>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</template>

<script setup lang="ts">
import { Divider } from 'ant-design-hmfw'
<\/script>
`,S={class:"markdown-body"},N={__name:"divider",setup(m,{expose:s}){return s({frontmatter:{}}),(k,e)=>{const u=f("DemoBlock");return p(),a("div",S,[e[0]||(e[0]=i("h1",{id:"divider-",tabindex:"-1"},"Divider 分割线",-1)),e[1]||(e[1]=i("p",null,"区隔内容的分割线。",-1)),e[2]||(e[2]=i("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=i("ul",null,[i("li",null,"对不同章节的文本段落进行分割"),i("li",null,"对行内文字/链接进行分割，例如表格的操作列")],-1)),e[4]||(e[4]=i("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=i("h3",{id:"-2",tabindex:"-1"},"水平分割线",-1)),e[6]||(e[6]=i("p",null,"默认为水平分割线，可在中间加入文字。",-1)),d(u,{title:"水平分割线",source:r(x)},{default:l(()=>[d(b)]),_:1},8,["source"]),e[7]||(e[7]=i("h3",{id:"-3",tabindex:"-1"},"带文字的分割线",-1)),e[8]||(e[8]=i("p",null,[o("通过 "),i("code",null,"orientation"),o(" 属性设置文字位置。")],-1)),d(u,{title:"带文字的分割线",source:r(B)},{default:l(()=>[d(y)]),_:1},8,["source"]),e[9]||(e[9]=i("h3",{id:"-4",tabindex:"-1"},"垂直分割线",-1)),e[10]||(e[10]=i("p",null,[o("使用 "),i("code",null,'type="vertical"'),o(" 设置为行内的垂直分割线。")],-1)),d(u,{title:"垂直分割线",source:r(L)},{default:l(()=>[d(g)]),_:1},8,["source"]),e[11]||(e[11]=D('<h2 id="api" tabindex="-1">API</h2><h3 id="divider-props" tabindex="-1">Divider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>水平还是垂直类型</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>orientation</td><td>分割线标题的位置</td><td><code>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</code></td><td><code>&#39;center&#39;</code></td></tr><tr><td>dashed</td><td>是否虚线</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>plain</td><td>文字是否显示为普通正文样式</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="divider-slots" tabindex="-1">Divider Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>嵌入分割线中的内容</td></tr></tbody></table>',5))])}}};export{N as default};
