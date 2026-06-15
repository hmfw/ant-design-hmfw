import{B as c}from"./Button-Cw7qEaQa.js";import{o as m,N as v,n as e,A as p,i as B,R as d,K as u,m as f,H as w,k as S,h as r,l as T}from"./index-C7r7ERgN.js";import{c as a}from"./cls-S9IiI6wd.js";import{W as E}from"./WarningFilled-BZ-Wu7b6.js";import{E as A}from"./ExclamationCircleFilled-BDZvHzJ_.js";import{a as N,C as F}from"./CloseCircleFilled-D8GUAtQ3.js";import"./Icon-Bn-1ylNX.js";import"./LoadingOutlined-CFTLq47r.js";const b={success:()=>e(F,null,null),error:()=>e(N,null,null),info:()=>e(A,null,null),warning:()=>e(E,null,null)},O=["404","403","500"],g=o=>()=>e("svg",{width:"252",height:"160",viewBox:"0 0 252 160",xmlns:"http://www.w3.org/2000/svg"},[e("ellipse",{cx:"126",cy:"140",rx:"110",ry:"14",fill:"#f5f5f5"},null),e("text",{x:"126",y:"96","font-size":"84","font-weight":"700",fill:"#bfbfbf","text-anchor":"middle","font-family":"sans-serif"},[o])]),I={404:g("404"),403:g("403"),500:g("500")},R=m({name:"Result",props:{status:{type:String,default:"info"},title:String,subTitle:String,extra:[String,Object,Array,Function],icon:{type:[String,Object,Array,Function,Boolean],default:void 0}},setup(o,{slots:n}){const l=v("result");return()=>{var k,y,C,$;const i=o.status,t=O.includes(i);let s=null;if(t){const x=I[i];s=e("div",{class:a(`${l}-icon`,`${l}-image`)},[e(x,null,null)])}else if(n.icon)s=e("div",{class:a(`${l}-icon`,`${l}-icon-custom`)},[n.icon()]);else if(o.icon===!1)s=null;else if(o.icon!==void 0)s=e("div",{class:a(`${l}-icon`,`${l}-icon-custom`)},[o.icon]);else{const x=((k=b[i])==null?void 0:k.call(b))??null;s=e("div",{class:`${l}-icon`},[x])}const _=((y=n.extra)==null?void 0:y.call(n))??o.extra,h=n.extra||o.extra!=null;return e("div",{class:a(l,`${l}-${i}`)},[s,(o.title||n.title)&&e("div",{class:`${l}-title`},[((C=n.title)==null?void 0:C.call(n))??o.title]),(o.subTitle||n.subTitle)&&e("div",{class:`${l}-subtitle`},[(($=n.subTitle)==null?void 0:$.call(n))??o.subTitle]),h&&e("div",{class:`${l}-extra`},[_]),n.default&&e("div",{class:`${l}-body`},[n.default()])])}}}),P=m({__name:"Result404",setup(o){function n(){console.log("返回首页")}return(l,i)=>(p(),B(u(R),{status:"404",title:"404","sub-title":"抱歉，您访问的页面不存在。"},{extra:d(()=>[e(u(c),{onClick:n},{default:d(()=>[...i[0]||(i[0]=[f("返回首页",-1)])]),_:1})]),_:1}))}}),V=`<template>
  <Result status="404" title="404" sub-title="抱歉，您访问的页面不存在。">
    <template #extra>
      <Button @click="onBack">返回首页</Button>
    </template>
  </Result>
</template>

<script setup lang="ts">
import { Result, Button } from 'ant-design-hmfw'

function onBack() {
  console.log('返回首页')
}
<\/script>
`,G=m({__name:"ResultError",setup(o){function n(){console.log("重试")}return(l,i)=>(p(),B(u(R),{status:"error",title:"提交失败","sub-title":"请检查并修改以下信息后，再重新提交。"},{extra:d(()=>[e(u(c),{onClick:n},{default:d(()=>[...i[0]||(i[0]=[f("再次提交",-1)])]),_:1})]),_:1}))}}),j=`<template>
  <Result status="error" title="提交失败" sub-title="请检查并修改以下信息后，再重新提交。">
    <template #extra>
      <Button @click="onRetry">再次提交</Button>
    </template>
  </Result>
</template>

<script setup lang="ts">
import { Result, Button } from 'ant-design-hmfw'

function onRetry() {
  console.log('重试')
}
<\/script>
`,D=m({__name:"ResultSuccess",setup(o){function n(){console.log("查看订单")}function l(){console.log("再次购买")}return(i,t)=>(p(),B(u(R),{status:"success",title:"成功提交采购申请","sub-title":"订单号：2017182818828182881，云顾问正在对接中，请耐心等待。"},{extra:d(()=>[e(u(c),{onClick:n},{default:d(()=>[...t[0]||(t[0]=[f("查看订单",-1)])]),_:1}),e(u(c),{onClick:l},{default:d(()=>[...t[1]||(t[1]=[f("再次购买",-1)])]),_:1})]),_:1}))}}),W=`<template>
  <Result
    status="success"
    title="成功提交采购申请"
    sub-title="订单号：2017182818828182881，云顾问正在对接中，请耐心等待。"
  >
    <template #extra>
      <Button @click="onGoOrder">查看订单</Button>
      <Button @click="onBuyAgain">再次购买</Button>
    </template>
  </Result>
</template>

<script setup lang="ts">
import { Result, Button } from 'ant-design-hmfw'

function onGoOrder() {
  console.log('查看订单')
}

function onBuyAgain() {
  console.log('再次购买')
}
<\/script>
`,z={class:"markdown-body"},Q={__name:"result",setup(o,{expose:n}){return n({frontmatter:{}}),(i,t)=>{const s=w("DemoBlock");return p(),S("div",z,[t[0]||(t[0]=r("h1",{id:"result-",tabindex:"-1"},"Result 结果",-1)),t[1]||(t[1]=r("p",null,"用于反馈一系列操作任务的处理结果。",-1)),t[2]||(t[2]=r("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=r("ul",null,[r("li",null,"当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用")],-1)),t[4]||(t[4]=r("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=r("h3",{id:"-2",tabindex:"-1"},"成功结果",-1)),t[6]||(t[6]=r("p",null,"成功的结果。",-1)),e(s,{title:"成功结果",source:u(W)},{default:d(()=>[e(D)]),_:1},8,["source"]),t[7]||(t[7]=r("h3",{id:"-3",tabindex:"-1"},"错误结果",-1)),t[8]||(t[8]=r("p",null,"复杂的错误反馈。",-1)),e(s,{title:"错误结果",source:u(j)},{default:d(()=>[e(G)]),_:1},8,["source"]),t[9]||(t[9]=r("h3",{id:"404-",tabindex:"-1"},"404 页面",-1)),t[10]||(t[10]=r("p",null,"此页面不存在。",-1)),e(s,{title:"404 页面",source:u(V)},{default:d(()=>[e(P)]),_:1},8,["source"]),t[11]||(t[11]=T('<h2 id="api" tabindex="-1">API</h2><h3 id="result-props" tabindex="-1">Result Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>status</td><td>结果的状态，决定图标和颜色；<code>404/403/500</code> 渲染为异常插画</td><td><code>&#39;success&#39; | &#39;error&#39; | &#39;warning&#39; | &#39;info&#39; | &#39;404&#39; | &#39;403&#39; | &#39;500&#39;</code></td><td><code>&#39;info&#39;</code></td></tr><tr><td>title</td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td>subTitle</td><td>副标题</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标字符；设为 <code>false</code> 时隐藏图标（异常状态插画不受影响）</td><td><code>string | false</code></td><td>-</td></tr><tr><td>extra</td><td>操作区内容（<code>extra</code> 插槽优先级更高）</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="result-slots" tabindex="-1">Result Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>自定义图标</td></tr><tr><td>title</td><td>自定义标题</td></tr><tr><td>subTitle</td><td>自定义副标题</td></tr><tr><td>extra</td><td>操作区</td></tr><tr><td>default</td><td>补充说明内容</td></tr></tbody></table>',5))])}}};export{Q as default};
