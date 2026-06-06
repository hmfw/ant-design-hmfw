import{C as l,a as c}from"./index-CYXNZiC2.js";import{m,y as s,g as C,P as n,f as d,I as o,l as e,k as a,B as b,E as x,i as g,j as y}from"./index-Qxz1plB-.js";import"./cls-S9IiI6wd.js";const h=m({__name:"CardBasic",setup(p){return(i,r)=>(s(),C(o(l),{title:"卡片标题",style:{width:"300px"}},{default:n(()=>[...r[0]||(r[0]=[d("p",null,"卡片内容",-1),d("p",null,"卡片内容",-1),d("p",null,"卡片内容",-1)])]),_:1}))}}),G=`<template>
  <Card title="卡片标题" style="width: 300px;">
    <p>卡片内容</p>
    <p>卡片内容</p>
    <p>卡片内容</p>
  </Card>
</template>

<script setup lang="ts">
import { Card } from 'ant-design-hmfw'
<\/script>
`,w=m({__name:"CardCover",setup(p){return(i,r)=>(s(),C(o(l),{style:{width:"300px"}},{cover:n(()=>[...r[0]||(r[0]=[d("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",style:{width:"100%"}},null,-1)])]),default:n(()=>[e(o(c),{title:"卡片标题",description:"这是卡片的描述信息"})]),_:1}))}}),_=`<template>
  <Card style="width: 300px;">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        style="width: 100%;"
      />
    </template>
    <CardMeta
      title="卡片标题"
      description="这是卡片的描述信息"
    />
  </Card>
</template>

<script setup lang="ts">
import { Card, CardMeta } from 'ant-design-hmfw'
<\/script>
`,v=m({__name:"CardGrid",setup(p){return(i,r)=>(s(),C(o(l),{title:"网格卡片"},{default:n(()=>[e(o(l).Grid,null,{default:n(()=>[...r[0]||(r[0]=[a("内容 1",-1)])]),_:1}),e(o(l).Grid,null,{default:n(()=>[...r[1]||(r[1]=[a("内容 2",-1)])]),_:1}),e(o(l).Grid,null,{default:n(()=>[...r[2]||(r[2]=[a("内容 3",-1)])]),_:1}),e(o(l).Grid,null,{default:n(()=>[...r[3]||(r[3]=[a("内容 4",-1)])]),_:1}),e(o(l).Grid,null,{default:n(()=>[...r[4]||(r[4]=[a("内容 5",-1)])]),_:1}),e(o(l).Grid,null,{default:n(()=>[...r[5]||(r[5]=[a("内容 6",-1)])]),_:1})]),_:1}))}}),S=`<template>
  <Card title="网格卡片">
    <Card.Grid>内容 1</Card.Grid>
    <Card.Grid>内容 2</Card.Grid>
    <Card.Grid>内容 3</Card.Grid>
    <Card.Grid>内容 4</Card.Grid>
    <Card.Grid>内容 5</Card.Grid>
    <Card.Grid>内容 6</Card.Grid>
  </Card>
</template>

<script setup lang="ts">
import { Card } from 'ant-design-hmfw'
<\/script>
`,B=m({__name:"CardInner",setup(p){return(i,r)=>(s(),C(o(l),{type:"inner",title:"内部卡片"},{default:n(()=>[...r[0]||(r[0]=[d("p",null,'type="inner" 用于卡片内部嵌套展示。',-1)])]),_:1}))}}),k=`<template>
  <Card type="inner" title="内部卡片">
    <p>type="inner" 用于卡片内部嵌套展示。</p>
  </Card>
</template>

<script setup lang="ts">
import { Card } from 'ant-design-hmfw'
<\/script>
`,P=m({__name:"CardLoading",setup(p){const i=b(!0);return(r,f)=>(s(),C(o(l),{title:"卡片标题",loading:i.value,style:{width:"300px"}},{default:n(()=>[...f[0]||(f[0]=[d("p",null,"卡片内容",-1),d("p",null,"卡片内容",-1)])]),_:1},8,["loading"]))}}),$=`<template>
  <Card title="卡片标题" :loading="loading" style="width: 300px;">
    <p>卡片内容</p>
    <p>卡片内容</p>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card } from 'ant-design-hmfw'

const loading = ref(true)
<\/script>
`,q={class:"markdown-body"},N={__name:"card",setup(p,{expose:i}){return i({frontmatter:{}}),(f,t)=>{const u=x("DemoBlock");return s(),g("div",q,[t[0]||(t[0]=d("h1",{id:"card-",tabindex:"-1"},"Card 卡片",-1)),t[1]||(t[1]=d("p",null,"通用卡片容器。",-1)),t[2]||(t[2]=d("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=d("ul",null,[d("li",null,"最基础的卡片容器，可承载文字、列表、图片、段落等内容"),d("li",null,"常用于后台概览页面")],-1)),t[4]||(t[4]=d("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=d("h3",{id:"-2",tabindex:"-1"},"基础卡片",-1)),t[6]||(t[6]=d("p",null,"包含标题、内容、操作区域。",-1)),e(u,{title:"基础卡片",source:o(G)},{default:n(()=>[e(h)]),_:1},8,["source"]),t[7]||(t[7]=d("h3",{id:"-3",tabindex:"-1"},"带封面",-1)),t[8]||(t[8]=d("p",null,"可以配合 cover 插槽展示封面图片。",-1)),e(u,{title:"带封面",source:o(_)},{default:n(()=>[e(w)]),_:1},8,["source"]),t[9]||(t[9]=d("h3",{id:"-4",tabindex:"-1"},"加载中",-1)),t[10]||(t[10]=d("p",null,"数据读入前会有文本块样式。",-1)),e(u,{title:"加载中",source:o($)},{default:n(()=>[e(P)]),_:1},8,["source"]),t[11]||(t[11]=d("h3",{id:"-5",tabindex:"-1"},"网格卡片",-1)),t[12]||(t[12]=d("p",null,[a("通过 "),d("code",null,"Card.Grid"),a(" 在卡片内部划分等宽网格。")],-1)),e(u,{title:"网格卡片",source:o(S)},{default:n(()=>[e(v)]),_:1},8,["source"]),t[13]||(t[13]=d("h3",{id:"-6",tabindex:"-1"},"内部卡片",-1)),t[14]||(t[14]=d("p",null,[a("通过 "),d("code",null,'type="inner"'),a(" 用于卡片内部嵌套展示。")],-1)),e(u,{title:"内部卡片",source:o(k)},{default:n(()=>[e(B)]),_:1},8,["source"]),t[15]||(t[15]=y('<h2 id="api" tabindex="-1">API</h2><h3 id="card-props" tabindex="-1">Card Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>卡片标题</td><td><code>string</code></td><td>-</td></tr><tr><td>extra</td><td>卡片右上角的操作区域</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>bordered</td><td>是否有边框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>variant</td><td>边框变体（优先于 <code>bordered</code>）</td><td><code>&#39;borderless&#39; | &#39;outlined&#39;</code></td><td>-</td></tr><tr><td>type</td><td>卡片类型，可设为 <code>inner</code></td><td><code>&#39;inner&#39;</code></td><td>-</td></tr><tr><td>loading</td><td>当卡片内容还在加载中时，可以用 loading 展示一个占位</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>卡片的尺寸</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>hoverable</td><td>鼠标移过时可浮起</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>bodyStyle</td><td>内容区域自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>headStyle</td><td>标题区域自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="card-slots" tabindex="-1">Card Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>卡片内容</td></tr><tr><td>title</td><td>卡片标题</td></tr><tr><td>extra</td><td>卡片右上角的操作区域</td></tr><tr><td>cover</td><td>卡片封面</td></tr><tr><td>actions</td><td>卡片操作组</td></tr></tbody></table><h3 id="cardgrid-props" tabindex="-1">Card.Grid Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>hoverable</td><td>鼠标移过时可浮起</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="cardmeta-props" tabindex="-1">CardMeta Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题内容</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>描述内容</td><td><code>string</code></td><td>-</td></tr><tr><td>avatar</td><td>头像/图标</td><td><code>string | slot</code></td><td>-</td></tr></tbody></table>',9))])}}};export{N as default};
