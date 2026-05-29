import{k as m,I as C,t as E,s as N,j as r,i as $,z as M,w as b,g as f,d as c,G as l,M as h,B as S,h as x}from"./index-DvxRruME.js";const y=m({name:"BackTop",props:{visibilityHeight:{type:Number,default:400},target:Function,duration:{type:Number,default:450},right:{type:Number,default:100},bottom:{type:Number,default:50}},emits:["click"],setup(o,{slots:d,emit:a}){const i=C("back-top"),e=M(!1),s=()=>o.target?o.target():window,p=()=>{const t=s(),u=t===window?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop;e.value=u>=o.visibilityHeight},v=()=>{const t=s(),u=Date.now(),B=t===window?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop,w=n=>n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1,g=()=>{const n=Date.now()-u,k=Math.min(n/o.duration,1),_=w(k),T=B*(1-_);t===window?window.scrollTo(0,T):t.scrollTop=T,k<1&&requestAnimationFrame(g)};requestAnimationFrame(g),a("click")};return E(()=>{s().addEventListener("scroll",p),p()}),N(()=>{s().removeEventListener("scroll",p)}),()=>{var t;return e.value?r("div",{class:i,style:{right:`${o.right}px`,bottom:`${o.bottom}px`},onClick:v},[((t=d.default)==null?void 0:t.call(d))??r("div",{class:`${i}-content`},[$("↑")])]):null}}}),D={style:{height:"1000px",background:"linear-gradient(to bottom, #fff, #f0f0f0)"}},q=m({__name:"BackTopBasic",setup(o){return(d,a)=>(b(),f("div",D,[a[0]||(a[0]=c("p",null,"向下滚动页面，右下角会出现回到顶部按钮。",-1)),r(l(y))]))}}),H=`<template>
  <div style="height: 1000px; background: linear-gradient(to bottom, #fff, #f0f0f0);">
    <p>向下滚动页面，右下角会出现回到顶部按钮。</p>
    <BackTop />
  </div>
</template>

<script setup lang="ts">
import { BackTop } from 'ant-design-hmfw'
<\/script>
`,V={style:{height:"1000px"}},j=m({__name:"BackTopCustom",setup(o){function d(){console.log("回到顶部")}return(a,i)=>(b(),f("div",V,[i[1]||(i[1]=c("p",null,"向下滚动页面，右下角会出现自定义的回到顶部按钮。",-1)),r(l(y),{"visibility-height":200,onClick:d},{default:h(()=>[...i[0]||(i[0]=[c("div",{style:{width:"40px",height:"40px",background:"#1677ff","border-radius":"50%",display:"flex","align-items":"center","justify-content":"center",color:"white","font-size":"18px"}},"↑",-1)])]),_:1})]))}}),z=`<template>
  <div style="height: 1000px;">
    <p>向下滚动页面，右下角会出现自定义的回到顶部按钮。</p>
    <BackTop :visibility-height="200" @click="onBackTop">
      <div style="
        width: 40px;
        height: 40px;
        background: #1677ff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 18px;
      ">↑</div>
    </BackTop>
  </div>
</template>

<script setup lang="ts">
import { BackTop } from 'ant-design-hmfw'

function onBackTop() {
  console.log('回到顶部')
}
<\/script>
`,A={class:"markdown-body"},I={__name:"back-top",setup(o,{expose:d}){return d({frontmatter:{}}),(i,e)=>{const s=S("DemoBlock");return b(),f("div",A,[e[0]||(e[0]=x('<h1 id="backtop-" tabindex="-1">BackTop 回到顶部</h1><p>返回页面顶部的操作按钮。</p><h2 id="" tabindex="-1">何时使用</h2><ul><li>当页面内容区域比较长时</li><li>当用户需要频繁返回顶部查看相关内容时</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基础用法</h3><p>滚动页面后，右下角会出现回到顶部按钮。</p><blockquote><p>注意：需要滚动页面才能看到按钮出现。默认当页面滚动超过 400px 时显示。</p></blockquote>',8)),r(s,{title:"基础用法",source:l(H)},{default:h(()=>[r(q)]),_:1},8,["source"]),e[1]||(e[1]=c("h3",{id:"-3",tabindex:"-1"},"自定义内容",-1)),e[2]||(e[2]=c("p",null,"可以自定义回到顶部按钮的样式。",-1)),r(s,{title:"自定义内容",source:l(z)},{default:h(()=>[r(j)]),_:1},8,["source"]),e[3]||(e[3]=x('<h2 id="api" tabindex="-1">API</h2><h3 id="backtop-props" tabindex="-1">BackTop Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>visibilityHeight</td><td>滚动高度达到此参数值才出现 BackTop</td><td><code>number</code></td><td><code>400</code></td></tr><tr><td>target</td><td>设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数</td><td><code>() =&gt; HTMLElement</code></td><td><code>() =&gt; window</code></td></tr><tr><td>duration</td><td>回到顶部所需时间（ms）</td><td><code>number</code></td><td><code>450</code></td></tr></tbody></table><h3 id="backtop-events" tabindex="-1">BackTop Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮的回调函数</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="backtop-slots" tabindex="-1">BackTop Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义内容</td></tr></tbody></table>',7))])}}};export{I as default};
