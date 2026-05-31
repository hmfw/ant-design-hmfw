import{B as a}from"./Button-D5N1epLo.js";import{S as s}from"./Space-nMQRznJ5.js";import{m as f,y as p,g as S,P as e,l as d,I as n,k as r,f as o,i as c,F as b,D as x,H as g,_ as y,E as z,j as k}from"./index-BZxHTh1S.js";import{D as v}from"./Divider-CD-taMNB.js";import"./icons-D7iQGqyN.js";import"./Icon-B8OCUOt-.js";import"./cls-S9IiI6wd.js";const _=f({__name:"SpaceBasic",setup(i){return(u,t)=>(p(),S(n(s),null,{default:e(()=>[d(n(a),{type:"primary"},{default:e(()=>[...t[0]||(t[0]=[r("按钮一",-1)])]),_:1}),d(n(a),null,{default:e(()=>[...t[1]||(t[1]=[r("按钮二",-1)])]),_:1}),d(n(a),{type:"dashed"},{default:e(()=>[...t[2]||(t[2]=[r("按钮三",-1)])]),_:1})]),_:1}))}}),w=`<template>
  <Space>
    <Button type="primary">按钮一</Button>
    <Button>按钮二</Button>
    <Button type="dashed">按钮三</Button>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-hmfw'
<\/script>
`,D=f({__name:"SpaceSize",setup(i){return(u,t)=>(p(),S(n(s),{direction:"vertical",size:16},{default:e(()=>[d(n(s),{size:"small"},{default:e(()=>[d(n(a),null,{default:e(()=>[...t[0]||(t[0]=[r("small",-1)])]),_:1}),d(n(a),null,{default:e(()=>[...t[1]||(t[1]=[r("small",-1)])]),_:1}),d(n(a),null,{default:e(()=>[...t[2]||(t[2]=[r("small",-1)])]),_:1})]),_:1}),d(n(s),{size:"middle"},{default:e(()=>[d(n(a),null,{default:e(()=>[...t[3]||(t[3]=[r("middle",-1)])]),_:1}),d(n(a),null,{default:e(()=>[...t[4]||(t[4]=[r("middle",-1)])]),_:1}),d(n(a),null,{default:e(()=>[...t[5]||(t[5]=[r("middle",-1)])]),_:1})]),_:1}),d(n(s),{size:"large"},{default:e(()=>[d(n(a),null,{default:e(()=>[...t[6]||(t[6]=[r("large",-1)])]),_:1}),d(n(a),null,{default:e(()=>[...t[7]||(t[7]=[r("large",-1)])]),_:1}),d(n(a),null,{default:e(()=>[...t[8]||(t[8]=[r("large",-1)])]),_:1})]),_:1}),d(n(s),{size:32},{default:e(()=>[d(n(a),null,{default:e(()=>[...t[9]||(t[9]=[r("32px",-1)])]),_:1}),d(n(a),null,{default:e(()=>[...t[10]||(t[10]=[r("32px",-1)])]),_:1}),d(n(a),null,{default:e(()=>[...t[11]||(t[11]=[r("32px",-1)])]),_:1})]),_:1})]),_:1}))}}),V=`<template>
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
`,N=f({__name:"SpaceSplit",setup(i){return(u,t)=>(p(),S(n(s),null,{split:e(()=>[d(n(v),{type:"vertical"})]),default:e(()=>[t[0]||(t[0]=o("a",{href:"#"},"链接一",-1)),t[1]||(t[1]=o("a",{href:"#"},"链接二",-1)),t[2]||(t[2]=o("a",{href:"#"},"链接三",-1))]),_:1}))}}),$=`<template>
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
`,C=f({__name:"SpaceVertical",setup(i){return(u,t)=>(p(),S(n(s),{direction:"vertical",style:{width:"100%"}},{default:e(()=>[d(n(a),{type:"primary",block:""},{default:e(()=>[...t[0]||(t[0]=[r("按钮一",-1)])]),_:1}),d(n(a),{block:""},{default:e(()=>[...t[1]||(t[1]=[r("按钮二",-1)])]),_:1}),d(n(a),{type:"dashed",block:""},{default:e(()=>[...t[2]||(t[2]=[r("按钮三",-1)])]),_:1})]),_:1}))}}),I=`<template>
  <Space direction="vertical" style="width: 100%">
    <Button type="primary" block>按钮一</Button>
    <Button block>按钮二</Button>
    <Button type="dashed" block>按钮三</Button>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-hmfw'
<\/script>
`,P=f({__name:"SpaceWrap",setup(i){return(u,t)=>(p(),S(n(s),{size:[8,16],wrap:""},{default:e(()=>[(p(),c(b,null,x(20,B=>o("button",{key:B,class:"demo-btn"},"按钮 "+g(B),1)),64))]),_:1}))}}),W=y(P,[["__scopeId","data-v-89f5033e"]]),q=`<template>
  <Space :size="[8, 16]" wrap>
    <button v-for="n in 20" :key="n" class="demo-btn">按钮 {{ n }}</button>
  </Space>
</template>

<script setup lang="ts">
import { Space } from 'ant-design-hmfw'
<\/script>

<style scoped>
.demo-btn {
  padding: 4px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
}
</style>
`,E={class:"markdown-body"},J={__name:"space",setup(i,{expose:u}){return u({frontmatter:{}}),(B,l)=>{const m=z("DemoBlock");return p(),c("div",E,[l[0]||(l[0]=o("h1",{id:"space-",tabindex:"-1"},"Space 间距",-1)),l[1]||(l[1]=o("p",null,"设置组件之间的间距。",-1)),l[2]||(l[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),l[3]||(l[3]=o("ul",null,[o("li",null,"避免组件紧贴在一起，拉开统一的空间"),o("li",null,"适合行内元素的水平间距"),o("li",null,"可以设置各种水平对齐方式")],-1)),l[4]||(l[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),l[5]||(l[5]=o("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),l[6]||(l[6]=o("p",null,"相邻组件水平间距。",-1)),d(m,{title:"基础用法",source:n(w)},{default:e(()=>[d(_)]),_:1},8,["source"]),l[7]||(l[7]=o("h3",{id:"-3",tabindex:"-1"},"垂直间距",-1)),l[8]||(l[8]=o("p",null,[r("通过 "),o("code",null,"direction"),r(" 属性设置垂直方向间距。")],-1)),d(m,{title:"垂直间距",source:n(I)},{default:e(()=>[d(C)]),_:1},8,["source"]),l[9]||(l[9]=o("h3",{id:"-4",tabindex:"-1"},"自定义大小",-1)),l[10]||(l[10]=o("p",null,[r("通过 "),o("code",null,"size"),r(" 属性设置间距大小，支持预设值和数字。")],-1)),d(m,{title:"自定义大小",source:n(V)},{default:e(()=>[d(D)]),_:1},8,["source"]),l[11]||(l[11]=o("h3",{id:"-5",tabindex:"-1"},"分隔符",-1)),l[12]||(l[12]=o("p",null,[r("通过 "),o("code",null,"separator"),r("（或别名 "),o("code",null,"split"),r("）属性设置分隔符。")],-1)),d(m,{title:"分隔符",source:n($)},{default:e(()=>[d(N)]),_:1},8,["source"]),l[13]||(l[13]=o("h3",{id:"-6",tabindex:"-1"},"自动换行",-1)),l[14]||(l[14]=o("p",null,[r("通过 "),o("code",null,"wrap"),r(" 属性允许子元素换行，换行后行间距由 "),o("code",null,"size"),r(" 的垂直分量控制。")],-1)),d(m,{title:"自动换行",source:n(q)},{default:e(()=>[d(W)]),_:1},8,["source"]),l[15]||(l[15]=k('<h2 id="api" tabindex="-1">API</h2><h3 id="space-props" tabindex="-1">Space Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>间距大小，数组形式表示 <code>[水平, 垂直]</code></td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39; | number | [number, number]</code></td><td><code>&#39;small&#39;</code></td></tr><tr><td>direction</td><td>间距方向</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>vertical</td><td><code>direction=&quot;vertical&quot;</code> 的简写</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>align</td><td>对齐方式</td><td><code>&#39;start&#39; | &#39;end&#39; | &#39;center&#39; | &#39;baseline&#39;</code></td><td>-</td></tr><tr><td>wrap</td><td>是否自动换行，仅水平方向有效</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>separator</td><td>设置分隔符</td><td><code>VNode | string</code></td><td>-</td></tr><tr><td>split</td><td><code>separator</code> 的别名（已废弃，请使用 <code>separator</code>）</td><td><code>VNode | string</code></td><td>-</td></tr></tbody></table><h3 id="space-slots" tabindex="-1">Space Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>子元素内容</td></tr></tbody></table>',5))])}}};export{J as default};
