import{k as d,I as g,j as s,w as c,e as f,M as l,d as e,G as u,B as R,g as k,h as _}from"./index-BNHhPN23.js";import{c as h}from"./cls-S9IiI6wd.js";const y={success:"✓",error:"✕",info:"ℹ",warning:"⚠",404:"404",403:"403",500:"500"},B={success:"#52c41a",error:"#ff4d4f",info:"#1677ff",warning:"#faad14",404:"#1677ff",403:"#faad14",500:"#ff4d4f"},p=d({name:"Result",props:{status:{type:String,default:"info"},title:String,subTitle:String,icon:String},setup(r,{slots:n}){const o=g("result");return()=>{var b,m,x;const i=r.status,t=((b=n.icon)==null?void 0:b.call(n))??r.icon??y[i],a=B[i];return s("div",{class:h(o,`${o}-${i}`)},[s("div",{class:`${o}-icon`,style:{color:a}},[t]),(r.title||n.title)&&s("div",{class:`${o}-title`},[((m=n.title)==null?void 0:m.call(n))??r.title]),(r.subTitle||n.subTitle)&&s("div",{class:`${o}-subtitle`},[((x=n.subTitle)==null?void 0:x.call(n))??r.subTitle]),n.extra&&s("div",{class:`${o}-extra`},[n.extra()]),n.default&&s("div",{class:`${o}-content`},[n.default()])])}}}),C=d({__name:"Result404",setup(r){function n(){console.log("返回首页")}return(o,i)=>(c(),f(u(p),{status:"404",title:"404","sub-title":"抱歉，您访问的页面不存在。"},{extra:l(()=>[e("button",{onClick:n},"返回首页")]),_:1}))}}),S=`<template>
  <Result
    status="404"
    title="404"
    sub-title="抱歉，您访问的页面不存在。"
  >
    <template #extra>
      <button @click="onBack">返回首页</button>
    </template>
  </Result>
</template>

<script setup lang="ts">
import { Result } from 'ant-design-hmfw'

function onBack() {
  console.log('返回首页')
}
<\/script>
`,$=d({__name:"ResultError",setup(r){function n(){console.log("重试")}return(o,i)=>(c(),f(u(p),{status:"error",title:"提交失败","sub-title":"请检查并修改以下信息后，再重新提交。"},{extra:l(()=>[e("button",{onClick:n},"再次提交")]),_:1}))}}),w=`<template>
  <Result
    status="error"
    title="提交失败"
    sub-title="请检查并修改以下信息后，再重新提交。"
  >
    <template #extra>
      <button @click="onRetry">再次提交</button>
    </template>
  </Result>
</template>

<script setup lang="ts">
import { Result } from 'ant-design-hmfw'

function onRetry() {
  console.log('重试')
}
<\/script>
`,v=d({__name:"ResultSuccess",setup(r){function n(){console.log("查看订单")}function o(){console.log("再次购买")}return(i,t)=>(c(),f(u(p),{status:"success",title:"成功提交采购申请","sub-title":"订单号：2017182818828182881，云顾问正在对接中，请耐心等待。"},{extra:l(()=>[e("button",{onClick:n},"查看订单"),e("button",{onClick:o},"再次购买")]),_:1}))}}),T=`<template>
  <Result
    status="success"
    title="成功提交采购申请"
    sub-title="订单号：2017182818828182881，云顾问正在对接中，请耐心等待。"
  >
    <template #extra>
      <button @click="onGoOrder">查看订单</button>
      <button @click="onBuyAgain">再次购买</button>
    </template>
  </Result>
</template>

<script setup lang="ts">
import { Result } from 'ant-design-hmfw'

function onGoOrder() {
  console.log('查看订单')
}

function onBuyAgain() {
  console.log('再次购买')
}
<\/script>
`,A={class:"markdown-body"},M={__name:"result",setup(r,{expose:n}){return n({frontmatter:{}}),(i,t)=>{const a=R("DemoBlock");return c(),k("div",A,[t[0]||(t[0]=e("h1",{id:"result-",tabindex:"-1"},"Result 结果",-1)),t[1]||(t[1]=e("p",null,"用于反馈一系列操作任务的处理结果。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用")],-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"成功结果",-1)),t[6]||(t[6]=e("p",null,"成功的结果。",-1)),s(a,{title:"成功结果",source:u(T)},{default:l(()=>[s(v)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"错误结果",-1)),t[8]||(t[8]=e("p",null,"复杂的错误反馈。",-1)),s(a,{title:"错误结果",source:u(w)},{default:l(()=>[s($)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"404-",tabindex:"-1"},"404 页面",-1)),t[10]||(t[10]=e("p",null,"此页面不存在。",-1)),s(a,{title:"404 页面",source:u(S)},{default:l(()=>[s(C)]),_:1},8,["source"]),t[11]||(t[11]=_('<h2 id="api" tabindex="-1">API</h2><h3 id="result-props" tabindex="-1">Result Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>status</td><td>结果的状态，决定图标和颜色</td><td><code>&#39;success&#39; | &#39;error&#39; | &#39;warning&#39; | &#39;info&#39; | &#39;404&#39; | &#39;403&#39; | &#39;500&#39;</code></td><td><code>&#39;info&#39;</code></td></tr><tr><td>title</td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td>subTitle</td><td>副标题</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="result-slots" tabindex="-1">Result Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>自定义图标</td></tr><tr><td>extra</td><td>操作区</td></tr></tbody></table>',5))])}}};export{M as default};
