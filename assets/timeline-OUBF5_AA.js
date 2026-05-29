import{k as m,I as b,j as i,w as a,e as g,G as l,B as T,g as x,d,M as h,h as $}from"./index-BNHhPN23.js";import{c as p}from"./cls-S9IiI6wd.js";const f=m({name:"Timeline",props:{pending:[Boolean,String],pendingDot:String,reverse:Boolean,mode:{type:String,default:"left"},items:Array},setup(n){const e=b("timeline");return()=>{let o=[...n.items??[]];return n.pending&&o.push({children:typeof n.pending=="string"?n.pending:void 0,dot:n.pendingDot??"...",pending:!0,color:"gray"}),n.reverse&&(o=o.reverse()),i("ul",{class:p(e,{[`${e}-pending`]:!!n.pending,[`${e}-reverse`]:n.reverse,[`${e}-${n.mode}`]:n.mode!=="left"})},[o.map((r,t)=>{const s=t===o.length-1,c=r.color??"blue",u=!["blue","red","green","gray"].includes(c);return i("li",{key:t,class:p(`${e}-item`,{[`${e}-item-last`]:s,[`${e}-item-pending`]:!!r.pending})},[r.label&&i("div",{class:`${e}-item-label`},[r.label]),i("div",{class:`${e}-item-tail`},null),i("div",{class:p(`${e}-item-head`,{[`${e}-item-head-${c}`]:!u,[`${e}-item-head-custom`]:!!r.dot||u}),style:u?{borderColor:c,color:c}:{}},[r.dot??""]),i("div",{class:`${e}-item-content`},[r.children])])})])}}}),y=m({__name:"TimelineAlternate",setup(n){const e=[{children:"创建服务现场 2015-09-01"},{children:"初步排除网络异常 2015-09-01",position:"right"},{children:"技术测试异常 2015-09-01"},{children:"网络异常正在修复 2015-09-01",position:"right"}];return(o,r)=>(a(),g(l(f),{mode:"alternate",items:e}))}}),C=`<template>
  <Timeline mode="alternate" :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const items = [
  { children: '创建服务现场 2015-09-01' },
  { children: '初步排除网络异常 2015-09-01', position: 'right' },
  { children: '技术测试异常 2015-09-01' },
  { children: '网络异常正在修复 2015-09-01', position: 'right' },
]
<\/script>
`,_=m({__name:"TimelineBasic",setup(n){const e=[{children:"创建服务现场 2015-09-01"},{children:"初步排除网络异常 2015-09-01"},{children:"技术测试异常 2015-09-01"},{children:"网络异常正在修复 2015-09-01"}];return(o,r)=>(a(),g(l(f),{items:e}))}}),v=`<template>
  <Timeline :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const items = [
  { children: '创建服务现场 2015-09-01' },
  { children: '初步排除网络异常 2015-09-01' },
  { children: '技术测试异常 2015-09-01' },
  { children: '网络异常正在修复 2015-09-01' },
]
<\/script>
`,B=m({__name:"TimelineCustomColor",setup(n){const e=[{children:"成功事件",color:"green"},{children:"失败事件",color:"red"},{children:"警告事件",color:"gray"},{children:"自定义颜色",color:"#00CCFF"}];return(o,r)=>(a(),g(l(f),{items:e}))}}),k=`<template>
  <Timeline :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const items = [
  { children: '成功事件', color: 'green' },
  { children: '失败事件', color: 'red' },
  { children: '警告事件', color: 'gray' },
  { children: '自定义颜色', color: '#00CCFF' },
]
<\/script>
`,S={class:"markdown-body"},A={__name:"timeline",setup(n,{expose:e}){return e({frontmatter:{}}),(r,t)=>{const s=T("DemoBlock");return a(),x("div",S,[t[0]||(t[0]=d("h1",{id:"timeline-",tabindex:"-1"},"Timeline 时间轴",-1)),t[1]||(t[1]=d("p",null,"垂直展示的时间流信息。",-1)),t[2]||(t[2]=d("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=d("ul",null,[d("li",null,"当有一系列信息需按时间排列时"),d("li",null,"需要有一条时间轴进行视觉上的串联时")],-1)),t[4]||(t[4]=d("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=d("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=d("p",null,"基本的时间轴。",-1)),i(s,{title:"基础用法",source:l(v)},{default:h(()=>[i(_)]),_:1},8,["source"]),t[7]||(t[7]=d("h3",{id:"-3",tabindex:"-1"},"交替展示",-1)),t[8]||(t[8]=d("p",null,"内容在时间轴两侧交替出现。",-1)),i(s,{title:"交替展示",source:l(C)},{default:h(()=>[i(y)]),_:1},8,["source"]),t[9]||(t[9]=d("h3",{id:"-4",tabindex:"-1"},"自定义颜色",-1)),t[10]||(t[10]=d("p",null,"可以设置为 red、green、blue、gray，或者自定义颜色。",-1)),i(s,{title:"自定义颜色",source:l(k)},{default:h(()=>[i(B)]),_:1},8,["source"]),t[11]||(t[11]=$('<h2 id="api" tabindex="-1">API</h2><h3 id="timeline-props" tabindex="-1">Timeline Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>选项配置</td><td><code>TimelineItem[]</code></td><td>-</td></tr><tr><td>pending</td><td>指定最后一个幽灵节点是否存在或内容</td><td><code>boolean | string</code></td><td><code>false</code></td></tr><tr><td>pendingDot</td><td>当最后一个幽灵节点存在时，指定其时间图点</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>reverse</td><td>节点排序</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>mode</td><td>通过设置 mode 可以改变时间轴和内容的相对位置</td><td><code>&#39;left&#39; | &#39;alternate&#39; | &#39;right&#39;</code></td><td><code>&#39;left&#39;</code></td></tr></tbody></table><h3 id="timelineitem" tabindex="-1">TimelineItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>设置标签</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>内容</td><td><code>string</code></td><td>-</td></tr><tr><td>color</td><td>指定圆圈颜色</td><td><code>&#39;blue&#39; | &#39;red&#39; | &#39;green&#39; | &#39;gray&#39; | string</code></td><td><code>&#39;blue&#39;</code></td></tr><tr><td>dot</td><td>自定义时间轴点</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>position</td><td>自定义节点位置</td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td>-</td></tr></tbody></table>',5))])}}};export{A as default};
