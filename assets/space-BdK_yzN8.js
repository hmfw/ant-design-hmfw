import{B as u}from"./Button-CtozVOI9.js";import{S as a}from"./Space-DHvzouOq.js";import{k as f,w as p,e as B,M as e,j as l,G as n,i as o,d as r,B as S,g as b,h as x}from"./index-DvxRruME.js";import{D as y}from"./Divider-DpqLym7x.js";import"./icons-CgCOAJDO.js";import"./cls-S9IiI6wd.js";const g=f({__name:"SpaceBasic",setup(s){return(i,t)=>(p(),B(n(a),null,{default:e(()=>[l(n(u),{type:"primary"},{default:e(()=>[...t[0]||(t[0]=[o("按钮一",-1)])]),_:1}),l(n(u),null,{default:e(()=>[...t[1]||(t[1]=[o("按钮二",-1)])]),_:1}),l(n(u),{type:"dashed"},{default:e(()=>[...t[2]||(t[2]=[o("按钮三",-1)])]),_:1})]),_:1}))}}),z=`<template>
  <Space>
    <Button type="primary">按钮一</Button>
    <Button>按钮二</Button>
    <Button type="dashed">按钮三</Button>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-hmfw'
<\/script>
`,k=f({__name:"SpaceSize",setup(s){return(i,t)=>(p(),B(n(a),{direction:"vertical",size:16},{default:e(()=>[l(n(a),{size:"small"},{default:e(()=>[l(n(u),null,{default:e(()=>[...t[0]||(t[0]=[o("small",-1)])]),_:1}),l(n(u),null,{default:e(()=>[...t[1]||(t[1]=[o("small",-1)])]),_:1}),l(n(u),null,{default:e(()=>[...t[2]||(t[2]=[o("small",-1)])]),_:1})]),_:1}),l(n(a),{size:"middle"},{default:e(()=>[l(n(u),null,{default:e(()=>[...t[3]||(t[3]=[o("middle",-1)])]),_:1}),l(n(u),null,{default:e(()=>[...t[4]||(t[4]=[o("middle",-1)])]),_:1}),l(n(u),null,{default:e(()=>[...t[5]||(t[5]=[o("middle",-1)])]),_:1})]),_:1}),l(n(a),{size:"large"},{default:e(()=>[l(n(u),null,{default:e(()=>[...t[6]||(t[6]=[o("large",-1)])]),_:1}),l(n(u),null,{default:e(()=>[...t[7]||(t[7]=[o("large",-1)])]),_:1}),l(n(u),null,{default:e(()=>[...t[8]||(t[8]=[o("large",-1)])]),_:1})]),_:1}),l(n(a),{size:32},{default:e(()=>[l(n(u),null,{default:e(()=>[...t[9]||(t[9]=[o("32px",-1)])]),_:1}),l(n(u),null,{default:e(()=>[...t[10]||(t[10]=[o("32px",-1)])]),_:1}),l(n(u),null,{default:e(()=>[...t[11]||(t[11]=[o("32px",-1)])]),_:1})]),_:1})]),_:1}))}}),v=`<template>
  <Space direction="vertical" :size="16">
    <Space size="small">
      <Button>small</Button>
      <Button>small</Button>
      <Button>small</Button>
    </Space>
    <Space size="middle">
      <Button>middle</Button>
      <Button>middle</Button>
      <Button>middle</Button>
    </Space>
    <Space size="large">
      <Button>large</Button>
      <Button>large</Button>
      <Button>large</Button>
    </Space>
    <Space :size="32">
      <Button>32px</Button>
      <Button>32px</Button>
      <Button>32px</Button>
    </Space>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-hmfw'
<\/script>
`,w=f({__name:"SpaceSplit",setup(s){return(i,t)=>(p(),B(n(a),null,{split:e(()=>[l(n(y),{type:"vertical"})]),default:e(()=>[t[0]||(t[0]=r("a",{href:"#"},"链接一",-1)),t[1]||(t[1]=r("a",{href:"#"},"链接二",-1)),t[2]||(t[2]=r("a",{href:"#"},"链接三",-1))]),_:1}))}}),D=`<template>
  <Space>
    <template #split>
      <Divider type="vertical" />
    </template>
    <a href="#">链接一</a>
    <a href="#">链接二</a>
    <a href="#">链接三</a>
  </Space>
</template>

<script setup lang="ts">
import { Space, Divider } from 'ant-design-hmfw'
<\/script>
`,V=f({__name:"SpaceVertical",setup(s){return(i,t)=>(p(),B(n(a),{direction:"vertical",style:{width:"100%"}},{default:e(()=>[l(n(u),{type:"primary",block:""},{default:e(()=>[...t[0]||(t[0]=[o("按钮一",-1)])]),_:1}),l(n(u),{block:""},{default:e(()=>[...t[1]||(t[1]=[o("按钮二",-1)])]),_:1}),l(n(u),{type:"dashed",block:""},{default:e(()=>[...t[2]||(t[2]=[o("按钮三",-1)])]),_:1})]),_:1}))}}),c=`<template>
  <Space direction="vertical" style="width: 100%">
    <Button type="primary" block>按钮一</Button>
    <Button block>按钮二</Button>
    <Button type="dashed" block>按钮三</Button>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-hmfw'
<\/script>
`,N={class:"markdown-body"},G={__name:"space",setup(s,{expose:i}){return i({frontmatter:{}}),(_,d)=>{const m=S("DemoBlock");return p(),b("div",N,[d[0]||(d[0]=r("h1",{id:"space-",tabindex:"-1"},"Space 间距",-1)),d[1]||(d[1]=r("p",null,"设置组件之间的间距。",-1)),d[2]||(d[2]=r("h2",{id:"",tabindex:"-1"},"何时使用",-1)),d[3]||(d[3]=r("ul",null,[r("li",null,"避免组件紧贴在一起，拉开统一的空间"),r("li",null,"适合行内元素的水平间距"),r("li",null,"可以设置各种水平对齐方式")],-1)),d[4]||(d[4]=r("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),d[5]||(d[5]=r("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),d[6]||(d[6]=r("p",null,"相邻组件水平间距。",-1)),l(m,{title:"基础用法",source:n(z)},{default:e(()=>[l(g)]),_:1},8,["source"]),d[7]||(d[7]=r("h3",{id:"-3",tabindex:"-1"},"垂直间距",-1)),d[8]||(d[8]=r("p",null,[o("通过 "),r("code",null,"direction"),o(" 属性设置垂直方向间距。")],-1)),l(m,{title:"垂直间距",source:n(c)},{default:e(()=>[l(V)]),_:1},8,["source"]),d[9]||(d[9]=r("h3",{id:"-4",tabindex:"-1"},"自定义大小",-1)),d[10]||(d[10]=r("p",null,[o("通过 "),r("code",null,"size"),o(" 属性设置间距大小，支持预设值和数字。")],-1)),l(m,{title:"自定义大小",source:n(v)},{default:e(()=>[l(k)]),_:1},8,["source"]),d[11]||(d[11]=r("h3",{id:"-5",tabindex:"-1"},"分隔符",-1)),d[12]||(d[12]=r("p",null,[o("通过 "),r("code",null,"split"),o(" 插槽设置分隔符。")],-1)),l(m,{title:"分隔符",source:n(D)},{default:e(()=>[l(w)]),_:1},8,["source"]),d[13]||(d[13]=x('<h2 id="api" tabindex="-1">API</h2><h3 id="space-props" tabindex="-1">Space Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>间距大小，数组形式表示 <code>[水平, 垂直]</code></td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39; | number | [number, number]</code></td><td><code>&#39;small&#39;</code></td></tr><tr><td>direction</td><td>间距方向</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>align</td><td>对齐方式</td><td><code>&#39;start&#39; | &#39;end&#39; | &#39;center&#39; | &#39;baseline&#39;</code></td><td>-</td></tr><tr><td>wrap</td><td>是否自动换行，仅水平方向有效</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="space-slots" tabindex="-1">Space Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>子元素内容</td></tr><tr><td>split</td><td>设置拆分</td></tr></tbody></table>',5))])}}};export{G as default};
