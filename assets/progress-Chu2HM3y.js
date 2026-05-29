import{k as c,I as k,j as r,i as b,c as y,w as u,g as p,G as d,F as _,d as o,z as w,B as C,M as f,h as S}from"./index-DvxRruME.js";import{c as $}from"./cls-S9IiI6wd.js";const i=c({name:"Progress",props:{percent:{type:Number,default:0},type:{type:String,default:"line"},status:String,showInfo:{type:Boolean,default:!0},strokeWidth:Number,strokeColor:String,trailColor:String,size:{type:String,default:"default"},width:{type:Number,default:120},format:Function},setup(e){const n=k("progress"),a=y(()=>e.status?e.status:e.percent>=100?"success":"normal"),l=y(()=>e.format?e.format(e.percent):a.value==="exception"?"✕":a.value==="success"?"✓":`${e.percent}%`);return()=>{if(e.type==="circle"||e.type==="dashboard"){const s=e.width,m=e.strokeWidth??6,g=(s-m)/2,x=2*Math.PI*g,h=e.type==="dashboard",v=x-(h?(h?75:0)/360*x:0),P=v*(1-e.percent/100);return r("div",{class:$(n,`${n}-circle`,`${n}-status-${a.value}`),role:"progressbar","aria-valuenow":e.percent,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${e.percent}%`},[b("            "),r("div",{class:`${n}-inner`,style:{width:`${s}px`,height:`${s}px`}},[r("svg",{viewBox:`0 0 ${s} ${s}`,width:s,height:s},[r("circle",{class:`${n}-circle-trail`,cx:s/2,cy:s/2,r:g,stroke:e.trailColor??"#f5f5f5","stroke-width":m,fill:"none"},null),r("circle",{class:`${n}-circle-path`,cx:s/2,cy:s/2,r:g,stroke:e.strokeColor??(a.value==="exception"?"#ff4d4f":a.value==="success"?"#52c41a":"#1677ff"),"stroke-width":m,fill:"none","stroke-dasharray":`${v}px ${x}px`,"stroke-dashoffset":`${P}px`,"stroke-linecap":"round",transform:`rotate(${h?217.5:-90} ${s/2} ${s/2})`},null)]),e.showInfo&&r("div",{class:`${n}-text`},[l.value])])])}const t=e.strokeWidth??(e.size==="small"?6:8);return r("div",{class:$(n,`${n}-line`,`${n}-status-${a.value}`,{[`${n}-small`]:e.size==="small"}),role:"progressbar","aria-valuenow":e.percent,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${e.percent}%`},[b("          "),r("div",{class:`${n}-outer`},[r("div",{class:`${n}-inner`,style:{height:`${t}px`,background:e.trailColor}},[r("div",{class:`${n}-bg`,style:{width:`${e.percent}%`,height:`${t}px`,background:e.strokeColor,borderRadius:`${t}px`}},null)])]),e.showInfo&&r("span",{class:`${n}-text`},[l.value])])}}}),B={style:{display:"flex","flex-direction":"column",gap:"12px"}},D=c({__name:"ProgressBasic",setup(e){return(n,a)=>(u(),p("div",B,[r(d(i),{percent:30}),r(d(i),{percent:50,status:"active"}),r(d(i),{percent:70,status:"exception"}),r(d(i),{percent:100}),r(d(i),{percent:50,"show-info":!1})]))}}),I=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <Progress :percent="30" />
    <Progress :percent="50" status="active" />
    <Progress :percent="70" status="exception" />
    <Progress :percent="100" />
    <Progress :percent="50" :show-info="false" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,N={style:{display:"flex",gap:"16px"}},z=c({__name:"ProgressCircle",setup(e){return(n,a)=>(u(),p("div",N,[r(d(i),{type:"circle",percent:75}),r(d(i),{type:"circle",percent:70,status:"exception"}),r(d(i),{type:"circle",percent:100})]))}}),M=`<template>
  <div style="display: flex; gap: 16px;">
    <Progress type="circle" :percent="75" />
    <Progress type="circle" :percent="70" status="exception" />
    <Progress type="circle" :percent="100" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,W={style:{display:"flex",gap:"16px"}},V=c({__name:"ProgressDashboard",setup(e){return(n,a)=>(u(),p("div",W,[r(d(i),{type:"dashboard",percent:75}),r(d(i),{type:"dashboard",percent:75,"gap-degree":30})]))}}),F=`<template>
  <div style="display: flex; gap: 16px;">
    <Progress type="dashboard" :percent="75" />
    <Progress type="dashboard" :percent="75" :gap-degree="30" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,j=c({__name:"ProgressDynamic",setup(e){const n=w(0);function a(){n.value=Math.min(n.value+10,100)}function l(){n.value=Math.max(n.value-10,0)}return(t,s)=>(u(),p(_,null,[r(d(i),{percent:n.value},null,8,["percent"]),o("div",{style:{display:"flex",gap:"8px","margin-top":"12px"}},[o("button",{onClick:l},"-"),o("button",{onClick:a},"+")])],64))}}),A=`<template>
  <Progress :percent="percent" />
  <div style="display: flex; gap: 8px; margin-top: 12px;">
    <button @click="decline">-</button>
    <button @click="increase">+</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Progress } from 'ant-design-hmfw'

const percent = ref(0)

function increase() {
  percent.value = Math.min(percent.value + 10, 100)
}

function decline() {
  percent.value = Math.max(percent.value - 10, 0)
}
<\/script>
`,T={class:"markdown-body"},R={__name:"progress",setup(e,{expose:n}){return n({frontmatter:{}}),(l,t)=>{const s=C("DemoBlock");return u(),p("div",T,[t[0]||(t[0]=o("h1",{id:"progress-",tabindex:"-1"},"Progress 进度条",-1)),t[1]||(t[1]=o("p",null,"展示操作的当前进度。",-1)),t[2]||(t[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=o("ul",null,[o("li",null,"在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态"),o("li",null,"当操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时"),o("li",null,"当需要显示一个操作完成的百分比时")],-1)),t[4]||(t[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=o("h3",{id:"-2",tabindex:"-1"},"进度条",-1)),t[6]||(t[6]=o("p",null,"标准的进度条。",-1)),r(s,{title:"进度条",source:d(I)},{default:f(()=>[r(D)]),_:1},8,["source"]),t[7]||(t[7]=o("h3",{id:"-3",tabindex:"-1"},"圆形进度",-1)),t[8]||(t[8]=o("p",null,"圆形进度条。",-1)),r(s,{title:"圆形进度",source:d(M)},{default:f(()=>[r(z)]),_:1},8,["source"]),t[9]||(t[9]=o("h3",{id:"-4",tabindex:"-1"},"仪表盘",-1)),t[10]||(t[10]=o("p",null,"仪表盘样式的进度条。",-1)),r(s,{title:"仪表盘",source:d(F)},{default:f(()=>[r(V)]),_:1},8,["source"]),t[11]||(t[11]=o("h3",{id:"-5",tabindex:"-1"},"动态展示",-1)),t[12]||(t[12]=o("p",null,"会动的进度条才是好进度条。",-1)),r(s,{title:"动态展示",source:d(A)},{default:f(()=>[r(j)]),_:1},8,["source"]),t[13]||(t[13]=S('<h2 id="api" tabindex="-1">API</h2><h3 id="progress-props" tabindex="-1">Progress Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td><code>&#39;line&#39; | &#39;circle&#39; | &#39;dashboard&#39;</code></td><td><code>&#39;line&#39;</code></td></tr><tr><td>percent</td><td>百分比</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>status</td><td>状态</td><td><code>&#39;success&#39; | &#39;exception&#39; | &#39;normal&#39; | &#39;active&#39;</code></td><td>-</td></tr><tr><td>showInfo</td><td>是否显示进度数值或状态图标</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>strokeColor</td><td>进度条的色彩</td><td><code>string | object</code></td><td>-</td></tr><tr><td>trailColor</td><td>未完成的分段的颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>strokeWidth</td><td>进度条线的宽度</td><td><code>number</code></td><td><code>6</code></td></tr><tr><td>size</td><td>进度条的尺寸</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>format</td><td>内容的模板函数</td><td><code>(percent: number) =&gt; string</code></td><td>-</td></tr><tr><td>steps</td><td>进度条总共步数</td><td><code>number</code></td><td>-</td></tr></tbody></table>',3))])}}};export{R as default};
