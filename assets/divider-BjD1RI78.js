import{D as o}from"./Divider-Ck4qARju.js";import{m as v,y as p,i as a,f as i,l as e,I as n,P as l,k as r,E as f,j as D}from"./index-Ct2ToimZ.js";import"./cls-S9IiI6wd.js";const g=v({__name:"DividerBasic",setup(m){return(s,t)=>(p(),a("div",null,[t[0]||(t[0]=i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)),e(n(o)),t[1]||(t[1]=i("p",null,"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",-1)),e(n(o),{dashed:""}),t[2]||(t[2]=i("p",null,"Ut enim ad minim veniam, quis nostrud exercitation ullamco.",-1))]))}}),b=`<template>
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
`,x=v({__name:"DividerSize",setup(m){return(s,t)=>(p(),a("div",null,[t[0]||(t[0]=i("p",null,"Small",-1)),e(n(o),{size:"small"}),t[1]||(t[1]=i("p",null,"Middle",-1)),e(n(o),{size:"middle"}),t[2]||(t[2]=i("p",null,"Large（默认）",-1)),e(n(o),{size:"large"}),t[3]||(t[3]=i("p",null,"底部内容",-1))]))}}),L=`<template>
  <div>
    <p>Small</p>
    <Divider size="small" />
    <p>Middle</p>
    <Divider size="middle" />
    <p>Large（默认）</p>
    <Divider size="large" />
    <p>底部内容</p>
  </div>
</template>

<script setup lang="ts">
import { Divider } from 'ant-design-hmfw'
<\/script>
`,S=v({__name:"DividerVariant",setup(m){return(s,t)=>(p(),a("div",null,[t[3]||(t[3]=i("p",null,"Lorem ipsum dolor sit amet.",-1)),e(n(o),{variant:"solid"},{default:l(()=>[...t[0]||(t[0]=[r("实线 Solid",-1)])]),_:1}),t[4]||(t[4]=i("p",null,"Lorem ipsum dolor sit amet.",-1)),e(n(o),{variant:"dashed"},{default:l(()=>[...t[1]||(t[1]=[r("虚线 Dashed",-1)])]),_:1}),t[5]||(t[5]=i("p",null,"Lorem ipsum dolor sit amet.",-1)),e(n(o),{variant:"dotted"},{default:l(()=>[...t[2]||(t[2]=[r("点线 Dotted",-1)])]),_:1}),t[6]||(t[6]=i("p",null,"Lorem ipsum dolor sit amet.",-1))]))}}),y=`<template>
  <div>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider variant="solid">实线 Solid</Divider>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider variant="dashed">虚线 Dashed</Divider>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider variant="dotted">点线 Dotted</Divider>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</template>

<script setup lang="ts">
import { Divider } from 'ant-design-hmfw'
<\/script>
`,z=v({__name:"DividerVertical",setup(m){return(s,t)=>(p(),a("div",null,[t[0]||(t[0]=i("a",{href:"#"},"链接一",-1)),e(n(o),{type:"vertical"}),t[1]||(t[1]=i("a",{href:"#"},"链接二",-1)),e(n(o),{type:"vertical"}),t[2]||(t[2]=i("a",{href:"#"},"链接三",-1))]))}}),V=`<template>
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
`,w=v({__name:"DividerWithText",setup(m){return(s,t)=>(p(),a("div",null,[t[4]||(t[4]=i("p",null,"Lorem ipsum dolor sit amet.",-1)),e(n(o),null,{default:l(()=>[...t[0]||(t[0]=[r("居中文字",-1)])]),_:1}),t[5]||(t[5]=i("p",null,"Lorem ipsum dolor sit amet.",-1)),e(n(o),{orientation:"left"},{default:l(()=>[...t[1]||(t[1]=[r("左对齐",-1)])]),_:1}),t[6]||(t[6]=i("p",null,"Lorem ipsum dolor sit amet.",-1)),e(n(o),{orientation:"right"},{default:l(()=>[...t[2]||(t[2]=[r("右对齐",-1)])]),_:1}),t[7]||(t[7]=i("p",null,"Lorem ipsum dolor sit amet.",-1)),e(n(o),{orientation:"left",plain:""},{default:l(()=>[...t[3]||(t[3]=[r("朴素文字",-1)])]),_:1}),t[8]||(t[8]=i("p",null,"Lorem ipsum dolor sit amet.",-1))]))}}),B=`<template>
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
`,k={class:"markdown-body"},M={__name:"divider",setup(m,{expose:s}){return s({frontmatter:{}}),(q,d)=>{const u=f("DemoBlock");return p(),a("div",k,[d[0]||(d[0]=i("h1",{id:"divider-",tabindex:"-1"},"Divider 分割线",-1)),d[1]||(d[1]=i("p",null,"区隔内容的分割线。",-1)),d[2]||(d[2]=i("h2",{id:"",tabindex:"-1"},"何时使用",-1)),d[3]||(d[3]=i("ul",null,[i("li",null,"对不同章节的文本段落进行分割"),i("li",null,"对行内文字/链接进行分割，例如表格的操作列")],-1)),d[4]||(d[4]=i("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),d[5]||(d[5]=i("h3",{id:"-2",tabindex:"-1"},"水平分割线",-1)),d[6]||(d[6]=i("p",null,"默认为水平分割线，可在中间加入文字。",-1)),e(u,{title:"水平分割线",source:n(b)},{default:l(()=>[e(g)]),_:1},8,["source"]),d[7]||(d[7]=i("h3",{id:"-3",tabindex:"-1"},"带文字的分割线",-1)),d[8]||(d[8]=i("p",null,[r("通过 "),i("code",null,"orientation"),r(" 属性设置文字位置。")],-1)),e(u,{title:"带文字的分割线",source:n(B)},{default:l(()=>[e(w)]),_:1},8,["source"]),d[9]||(d[9]=i("h3",{id:"-4",tabindex:"-1"},"垂直分割线",-1)),d[10]||(d[10]=i("p",null,[r("使用 "),i("code",null,'type="vertical"'),r(" 设置为行内的垂直分割线。")],-1)),e(u,{title:"垂直分割线",source:n(V)},{default:l(()=>[e(z)]),_:1},8,["source"]),d[11]||(d[11]=i("h3",{id:"-5",tabindex:"-1"},"分割线样式",-1)),d[12]||(d[12]=i("p",null,[r("通过 "),i("code",null,"variant"),r(" 设置分割线为实线、虚线或点线。"),i("code",null,"dashed"),r(" 为 "),i("code",null,'variant="dashed"'),r(" 的简写。")],-1)),e(u,{title:"分割线样式",source:n(y)},{default:l(()=>[e(S)]),_:1},8,["source"]),d[13]||(d[13]=i("h3",{id:"-6",tabindex:"-1"},"不同间距",-1)),d[14]||(d[14]=i("p",null,[r("通过 "),i("code",null,"size"),r(" 设置水平分割线的上下间距，可选 "),i("code",null,"small"),r("、"),i("code",null,"middle"),r("、"),i("code",null,"large"),r("（默认）。")],-1)),e(u,{title:"不同间距",source:n(L)},{default:l(()=>[e(x)]),_:1},8,["source"]),d[15]||(d[15]=D('<h2 id="api" tabindex="-1">API</h2><h3 id="divider-props" tabindex="-1">Divider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>水平还是垂直类型</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>orientation</td><td>分割线标题的位置</td><td><code>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</code></td><td><code>&#39;center&#39;</code></td></tr><tr><td>orientationMargin</td><td>标题和最近 left/right 边框之间的距离，去除分割线，同时 <code>orientation</code> 必须为 <code>left</code> 或 <code>right</code></td><td><code>string | number</code></td><td>-</td></tr><tr><td>dashed</td><td>是否虚线，等价于 <code>variant=&quot;dashed&quot;</code></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>variant</td><td>分割线样式，优先级高于 <code>dashed</code></td><td><code>&#39;solid&#39; | &#39;dashed&#39; | &#39;dotted&#39;</code></td><td><code>&#39;solid&#39;</code></td></tr><tr><td>plain</td><td>文字是否显示为普通正文样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>分割线间距大小（仅水平分割线生效）</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;large&#39;</code></td></tr></tbody></table><h3 id="divider-slots" tabindex="-1">Divider Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>嵌入分割线中的内容</td></tr></tbody></table>',5))])}}};export{M as default};
