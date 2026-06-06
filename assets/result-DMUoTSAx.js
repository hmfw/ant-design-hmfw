import{m as a,L as h,l as e,y as c,g as p,P as d,f as o,I as u,E as y,i as _,j as k}from"./index-Qxz1plB-.js";import{c as g}from"./cls-S9IiI6wd.js";const w={success:"✓",error:"✕",info:"ℹ",warning:"⚠"},B={success:"#52c41a",error:"#ff4d4f",info:"#1677ff",warning:"#faad14"},v=["404","403","500"],f=l=>()=>e("svg",{width:"252",height:"160",viewBox:"0 0 252 160",xmlns:"http://www.w3.org/2000/svg"},[e("ellipse",{cx:"126",cy:"140",rx:"110",ry:"14",fill:"#f5f5f5"},null),e("text",{x:"126",y:"96","font-size":"84","font-weight":"700",fill:"#bfbfbf","text-anchor":"middle","font-family":"sans-serif"},[l])]),S={404:f("404"),403:f("403"),500:f("500")},m=a({name:"Result",props:{status:{type:String,default:"info"},title:String,subTitle:String,icon:{type:[String,Boolean],default:void 0}},setup(l,{slots:n}){const s=h("result");return()=>{var b,x;const i=l.status,t=v.includes(i);let r=null;if(l.icon!==!1)if(n.icon)r=e("div",{class:`${s}-icon`},[n.icon()]);else if(t){const R=S[i];r=e("div",{class:g(`${s}-icon`,`${s}-image`)},[e(R,null,null)])}else r=e("div",{class:`${s}-icon`,style:{color:B[i]}},[l.icon??w[i]]);return e("div",{class:g(s,`${s}-${i}`)},[r,(l.title||n.title)&&e("div",{class:`${s}-title`},[((b=n.title)==null?void 0:b.call(n))??l.title]),(l.subTitle||n.subTitle)&&e("div",{class:`${s}-subtitle`},[((x=n.subTitle)==null?void 0:x.call(n))??l.subTitle]),n.extra&&e("div",{class:`${s}-extra`},[n.extra()]),n.default&&e("div",{class:`${s}-content`},[n.default()])])}}}),$=a({__name:"Result404",setup(l){function n(){console.log("返回首页")}return(s,i)=>(c(),p(u(m),{status:"404",title:"404","sub-title":"抱歉，您访问的页面不存在。"},{extra:d(()=>[o("button",{onClick:n},"返回首页")]),_:1}))}}),C=`<template>
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
`,T=a({__name:"ResultError",setup(l){function n(){console.log("重试")}return(s,i)=>(c(),p(u(m),{status:"error",title:"提交失败","sub-title":"请检查并修改以下信息后，再重新提交。"},{extra:d(()=>[o("button",{onClick:n},"再次提交")]),_:1}))}}),E=`<template>
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
`,A=a({__name:"ResultSuccess",setup(l){function n(){console.log("查看订单")}function s(){console.log("再次购买")}return(i,t)=>(c(),p(u(m),{status:"success",title:"成功提交采购申请","sub-title":"订单号：2017182818828182881，云顾问正在对接中，请耐心等待。"},{extra:d(()=>[o("button",{onClick:n},"查看订单"),o("button",{onClick:s},"再次购买")]),_:1}))}}),I=`<template>
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
`,N={class:"markdown-body"},G={__name:"result",setup(l,{expose:n}){return n({frontmatter:{}}),(i,t)=>{const r=y("DemoBlock");return c(),_("div",N,[t[0]||(t[0]=o("h1",{id:"result-",tabindex:"-1"},"Result 结果",-1)),t[1]||(t[1]=o("p",null,"用于反馈一系列操作任务的处理结果。",-1)),t[2]||(t[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=o("ul",null,[o("li",null,"当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用")],-1)),t[4]||(t[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=o("h3",{id:"-2",tabindex:"-1"},"成功结果",-1)),t[6]||(t[6]=o("p",null,"成功的结果。",-1)),e(r,{title:"成功结果",source:u(I)},{default:d(()=>[e(A)]),_:1},8,["source"]),t[7]||(t[7]=o("h3",{id:"-3",tabindex:"-1"},"错误结果",-1)),t[8]||(t[8]=o("p",null,"复杂的错误反馈。",-1)),e(r,{title:"错误结果",source:u(E)},{default:d(()=>[e(T)]),_:1},8,["source"]),t[9]||(t[9]=o("h3",{id:"404-",tabindex:"-1"},"404 页面",-1)),t[10]||(t[10]=o("p",null,"此页面不存在。",-1)),e(r,{title:"404 页面",source:u(C)},{default:d(()=>[e($)]),_:1},8,["source"]),t[11]||(t[11]=k('<h2 id="api" tabindex="-1">API</h2><h3 id="result-props" tabindex="-1">Result Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>status</td><td>结果的状态，决定图标和颜色；<code>404/403/500</code> 渲染为异常插画</td><td><code>&#39;success&#39; | &#39;error&#39; | &#39;warning&#39; | &#39;info&#39; | &#39;404&#39; | &#39;403&#39; | &#39;500&#39;</code></td><td><code>&#39;info&#39;</code></td></tr><tr><td>title</td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td>subTitle</td><td>副标题</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标字符；设为 <code>false</code> 时隐藏图标</td><td><code>string | false</code></td><td>-</td></tr></tbody></table><h3 id="result-slots" tabindex="-1">Result Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>自定义图标</td></tr><tr><td>title</td><td>自定义标题</td></tr><tr><td>subTitle</td><td>自定义副标题</td></tr><tr><td>extra</td><td>操作区</td></tr><tr><td>default</td><td>补充说明内容</td></tr></tbody></table>',5))])}}};export{G as default};
