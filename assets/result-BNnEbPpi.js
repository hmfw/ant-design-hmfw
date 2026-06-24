import{B as c}from"./Button-D9PdcFa1.js";import{o as f,N as K,n,A as x,i as B,R as r,K as u,m,H as U,k as X,h as o,l as q}from"./index-B9Ix0zQ8.js";import{c as a}from"./cls-S9IiI6wd.js";import{W as J}from"./WarningFilled-CO-JAwse.js";import{E as L}from"./ExclamationCircleFilled-D1Qor_SV.js";import{a as M,C as Q}from"./CloseCircleFilled-BM35gEFb.js";import"./Icon-D0ODznex.js";import"./LoadingOutlined-aeZz6k73.js";const y={success:()=>n(Q,null,null),error:()=>n(M,null,null),info:()=>n(L,null,null),warning:()=>n(J,null,null)},Y=["404","403","500"],g=t=>()=>n("svg",{width:"252",height:"160",viewBox:"0 0 252 160",xmlns:"http://www.w3.org/2000/svg"},[n("ellipse",{cx:"126",cy:"140",rx:"110",ry:"14",fill:"#f5f5f5"},null),n("text",{x:"126",y:"96","font-size":"84","font-weight":"700",fill:"#bfbfbf","text-anchor":"middle","font-family":"sans-serif"},[t])]),Z={404:g("404"),403:g("403"),500:g("500")},R=f({name:"Result",props:{status:{type:String,default:"info"},title:String,subTitle:String,extra:[String,Object,Array,Function],icon:{type:[String,Object,Array,Function,Boolean],default:void 0},classNames:Object,styles:Object},setup(t,{slots:l}){const s=K("result");return()=>{var k,N,p,C,h,S,$,_,v,w,T,E,A,O,F,j,I,P,V,D,G,W;const i=t.status,e=Y.includes(i);let d=null;if(e){const b=Z[i];d=n("div",{class:a(`${s}-icon`,`${s}-image`,(k=t.classNames)==null?void 0:k.icon),style:(N=t.styles)==null?void 0:N.icon},[n(b,null,null)])}else if(l.icon)d=n("div",{class:a(`${s}-icon`,`${s}-icon-custom`,(p=t.classNames)==null?void 0:p.icon),style:(C=t.styles)==null?void 0:C.icon},[l.icon()]);else if(t.icon===!1)d=null;else if(t.icon!==void 0)d=n("div",{class:a(`${s}-icon`,`${s}-icon-custom`,(h=t.classNames)==null?void 0:h.icon),style:(S=t.styles)==null?void 0:S.icon},[t.icon]);else{const b=(($=y[i])==null?void 0:$.call(y))??null;d=n("div",{class:a(`${s}-icon`,(_=t.classNames)==null?void 0:_.icon),style:(v=t.styles)==null?void 0:v.icon},[b])}const z=((w=l.extra)==null?void 0:w.call(l))??t.extra,H=l.extra||t.extra!=null;return n("div",{class:a(s,`${s}-${i}`,(T=t.classNames)==null?void 0:T.root),style:(E=t.styles)==null?void 0:E.root},[d,(t.title||l.title)&&n("div",{class:a(`${s}-title`,(A=t.classNames)==null?void 0:A.title),style:(O=t.styles)==null?void 0:O.title},[((F=l.title)==null?void 0:F.call(l))??t.title]),(t.subTitle||l.subTitle)&&n("div",{class:a(`${s}-subtitle`,(j=t.classNames)==null?void 0:j.subtitle),style:(I=t.styles)==null?void 0:I.subtitle},[((P=l.subTitle)==null?void 0:P.call(l))??t.subTitle]),H&&n("div",{class:a(`${s}-extra`,(V=t.classNames)==null?void 0:V.extra),style:(D=t.styles)==null?void 0:D.extra},[z]),l.default&&n("div",{class:a(`${s}-body`,(G=t.classNames)==null?void 0:G.content),style:(W=t.styles)==null?void 0:W.content},[l.default()])])}}}),tt=f({__name:"Result404",setup(t){function l(){console.log("返回首页")}return(s,i)=>(x(),B(u(R),{status:"404",title:"404","sub-title":"抱歉，您访问的页面不存在。"},{extra:r(()=>[n(u(c),{onClick:l},{default:r(()=>[...i[0]||(i[0]=[m("返回首页",-1)])]),_:1})]),_:1}))}}),et=`<template>
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
`,nt=f({__name:"ResultError",setup(t){function l(){console.log("重试")}return(s,i)=>(x(),B(u(R),{status:"error",title:"提交失败","sub-title":"请检查并修改以下信息后，再重新提交。"},{extra:r(()=>[n(u(c),{onClick:l},{default:r(()=>[...i[0]||(i[0]=[m("再次提交",-1)])]),_:1})]),_:1}))}}),lt=`<template>
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
`,st=f({__name:"ResultSuccess",setup(t){function l(){console.log("查看订单")}function s(){console.log("再次购买")}return(i,e)=>(x(),B(u(R),{status:"success",title:"成功提交采购申请","sub-title":"订单号：2017182818828182881，云顾问正在对接中，请耐心等待。"},{extra:r(()=>[n(u(c),{onClick:l},{default:r(()=>[...e[0]||(e[0]=[m("查看订单",-1)])]),_:1}),n(u(c),{onClick:s},{default:r(()=>[...e[1]||(e[1]=[m("再次购买",-1)])]),_:1})]),_:1}))}}),it=`<template>
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
`,ot={class:"markdown-body"},bt={__name:"result",setup(t,{expose:l}){return l({frontmatter:{}}),(i,e)=>{const d=U("DemoBlock");return x(),X("div",ot,[e[0]||(e[0]=o("h1",{id:"result-结果",tabindex:"-1"},"Result 结果",-1)),e[1]||(e[1]=o("p",null,"用于反馈一系列操作任务的处理结果。",-1)),e[2]||(e[2]=o("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=o("ul",null,[o("li",null,"当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用")],-1)),e[4]||(e[4]=o("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=o("h3",{id:"成功结果",tabindex:"-1"},"成功结果",-1)),e[6]||(e[6]=o("p",null,"成功的结果。",-1)),n(d,{title:"成功结果",source:u(it)},{default:r(()=>[n(st)]),_:1},8,["source"]),e[7]||(e[7]=o("h3",{id:"错误结果",tabindex:"-1"},"错误结果",-1)),e[8]||(e[8]=o("p",null,"复杂的错误反馈。",-1)),n(d,{title:"错误结果",source:u(lt)},{default:r(()=>[n(nt)]),_:1},8,["source"]),e[9]||(e[9]=o("h3",{id:"404-页面",tabindex:"-1"},"404 页面",-1)),e[10]||(e[10]=o("p",null,"此页面不存在。",-1)),n(d,{title:"404 页面",source:u(et)},{default:r(()=>[n(tt)]),_:1},8,["source"]),e[11]||(e[11]=q('<h2 id="api" tabindex="-1">API</h2><h3 id="result-props" tabindex="-1">Result Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>status</td><td>结果的状态，决定图标和颜色；<code>404/403/500</code> 渲染为异常插画</td><td><code>&#39;success&#39; | &#39;error&#39; | &#39;warning&#39; | &#39;info&#39; | &#39;404&#39; | &#39;403&#39; | &#39;500&#39;</code></td><td><code>&#39;info&#39;</code></td></tr><tr><td>title</td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td>subTitle</td><td>副标题</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标字符；设为 <code>false</code> 时隐藏图标（异常状态插画不受影响）</td><td><code>string | false</code></td><td>-</td></tr><tr><td>extra</td><td>操作区内容（<code>extra</code> 插槽优先级更高）</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="result-slots" tabindex="-1">Result Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>自定义图标</td></tr><tr><td>title</td><td>自定义标题</td></tr><tr><td>subTitle</td><td>自定义副标题</td></tr><tr><td>extra</td><td>操作区</td></tr><tr><td>default</td><td>补充说明内容</td></tr></tbody></table><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Result 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。</p>',7))])}}};export{bt as default};
