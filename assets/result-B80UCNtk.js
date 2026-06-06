import{m as a,L as w,l as n,y as c,g as p,P as d,f as l,I as u,E as B,i as S,j as v}from"./index-BQisgCTe.js";import{c as y}from"./cls-S9IiI6wd.js";import{W as $,g as E,c as T,C as N}from"./icons-Buy98oKP.js";const m={success:()=>n(N,null,null),error:()=>n(T,null,null),info:()=>n(E,null,null),warning:()=>n($,null,null)},A=["404","403","500"],b=o=>()=>n("svg",{width:"252",height:"160",viewBox:"0 0 252 160",xmlns:"http://www.w3.org/2000/svg"},[n("ellipse",{cx:"126",cy:"140",rx:"110",ry:"14",fill:"#f5f5f5"},null),n("text",{x:"126",y:"96","font-size":"84","font-weight":"700",fill:"#bfbfbf","text-anchor":"middle","font-family":"sans-serif"},[o])]),I={404:b("404"),403:b("403"),500:b("500")},x=a({name:"Result",props:{status:{type:String,default:"info"},title:String,subTitle:String,extra:String,icon:{type:[String,Boolean],default:void 0}},setup(o,{slots:e}){const i=w("result");return()=>{var g,R,h,k;const r=o.status,t=A.includes(r);let s=null;if(t){const f=I[r];s=n("div",{class:y(`${i}-icon`,`${i}-image`)},[n(f,null,null)])}else if(e.icon)s=n("div",{class:`${i}-icon`},[e.icon()]);else if(o.icon===!1)s=null;else{const f=((g=m[r])==null?void 0:g.call(m))??null;s=n("div",{class:`${i}-icon`},[o.icon??f])}const _=((R=e.extra)==null?void 0:R.call(e))??o.extra,C=e.extra||o.extra;return n("div",{class:y(i,`${i}-${r}`)},[s,(o.title||e.title)&&n("div",{class:`${i}-title`},[((h=e.title)==null?void 0:h.call(e))??o.title]),(o.subTitle||e.subTitle)&&n("div",{class:`${i}-subtitle`},[((k=e.subTitle)==null?void 0:k.call(e))??o.subTitle]),C&&n("div",{class:`${i}-extra`},[_]),e.default&&n("div",{class:`${i}-body`},[e.default()])])}}}),P=a({__name:"Result404",setup(o){function e(){console.log("返回首页")}return(i,r)=>(c(),p(u(x),{status:"404",title:"404","sub-title":"抱歉，您访问的页面不存在。"},{extra:d(()=>[l("button",{onClick:e},"返回首页")]),_:1}))}}),F=`<template>
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
`,O=a({__name:"ResultError",setup(o){function e(){console.log("重试")}return(i,r)=>(c(),p(u(x),{status:"error",title:"提交失败","sub-title":"请检查并修改以下信息后，再重新提交。"},{extra:d(()=>[l("button",{onClick:e},"再次提交")]),_:1}))}}),G=`<template>
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
`,V=a({__name:"ResultSuccess",setup(o){function e(){console.log("查看订单")}function i(){console.log("再次购买")}return(r,t)=>(c(),p(u(x),{status:"success",title:"成功提交采购申请","sub-title":"订单号：2017182818828182881，云顾问正在对接中，请耐心等待。"},{extra:d(()=>[l("button",{onClick:e},"查看订单"),l("button",{onClick:i},"再次购买")]),_:1}))}}),D=`<template>
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
`,W={class:"markdown-body"},U={__name:"result",setup(o,{expose:e}){return e({frontmatter:{}}),(r,t)=>{const s=B("DemoBlock");return c(),S("div",W,[t[0]||(t[0]=l("h1",{id:"result-",tabindex:"-1"},"Result 结果",-1)),t[1]||(t[1]=l("p",null,"用于反馈一系列操作任务的处理结果。",-1)),t[2]||(t[2]=l("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=l("ul",null,[l("li",null,"当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用")],-1)),t[4]||(t[4]=l("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=l("h3",{id:"-2",tabindex:"-1"},"成功结果",-1)),t[6]||(t[6]=l("p",null,"成功的结果。",-1)),n(s,{title:"成功结果",source:u(D)},{default:d(()=>[n(V)]),_:1},8,["source"]),t[7]||(t[7]=l("h3",{id:"-3",tabindex:"-1"},"错误结果",-1)),t[8]||(t[8]=l("p",null,"复杂的错误反馈。",-1)),n(s,{title:"错误结果",source:u(G)},{default:d(()=>[n(O)]),_:1},8,["source"]),t[9]||(t[9]=l("h3",{id:"404-",tabindex:"-1"},"404 页面",-1)),t[10]||(t[10]=l("p",null,"此页面不存在。",-1)),n(s,{title:"404 页面",source:u(F)},{default:d(()=>[n(P)]),_:1},8,["source"]),t[11]||(t[11]=v('<h2 id="api" tabindex="-1">API</h2><h3 id="result-props" tabindex="-1">Result Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>status</td><td>结果的状态，决定图标和颜色；<code>404/403/500</code> 渲染为异常插画</td><td><code>&#39;success&#39; | &#39;error&#39; | &#39;warning&#39; | &#39;info&#39; | &#39;404&#39; | &#39;403&#39; | &#39;500&#39;</code></td><td><code>&#39;info&#39;</code></td></tr><tr><td>title</td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td>subTitle</td><td>副标题</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标字符；设为 <code>false</code> 时隐藏图标（异常状态插画不受影响）</td><td><code>string | false</code></td><td>-</td></tr><tr><td>extra</td><td>操作区内容（<code>extra</code> 插槽优先级更高）</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="result-slots" tabindex="-1">Result Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>自定义图标</td></tr><tr><td>title</td><td>自定义标题</td></tr><tr><td>subTitle</td><td>自定义副标题</td></tr><tr><td>extra</td><td>操作区</td></tr><tr><td>default</td><td>补充说明内容</td></tr></tbody></table>',5))])}}};export{U as default};
