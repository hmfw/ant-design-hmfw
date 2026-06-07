import{n as y,K as D,M as E,D as v,w as H,v as F,m as a,c as N,e as L,z as p,j as m,g as s,F as k,E as T,I as w,J as u,Q as x,G as M,k as _}from"./index-DBrYVvYd.js";import{aj as I}from"./icons-CTzpiRs0.js";import{I as $}from"./Icon-CiCvy_Uq.js";import{c as q}from"./cls-S9IiI6wd.js";function A(t){let n=null;const d=function(...o){n===null&&(n=requestAnimationFrame(()=>{t.apply(this,o),n=null}))};return d.cancel=()=>{n!==null&&(cancelAnimationFrame(n),n=null)},d}function S(t){return typeof window>"u"||!t?0:t===window||t.window===t?t.pageYOffset:t instanceof Document?t.documentElement.scrollTop:t instanceof HTMLElement?t.scrollTop:0}function z(t,n,d,o){const e=d-n;return t/=o/2,t<1?e/2*t*t*t+n:(t-=2,e/2*(t*t*t+2)+n)}function O(t,n={}){const{getContainer:d=()=>window,duration:o=450,callback:e}=n,i=d(),b=S(i),f=Date.now();let c;const h=()=>{const g=Date.now()-f,r=z(g>o?o:g,b,t,o);i===window||i.window===i?i.scrollTo(window.pageXOffset,r):i instanceof Document?i.documentElement.scrollTop=r:i instanceof HTMLElement&&(i.scrollTop=r),g<o?c=requestAnimationFrame(h):e&&e()};return c=requestAnimationFrame(h),()=>{cancelAnimationFrame(c)}}const B=y({name:"BackTop",props:{visibilityHeight:{type:Number,default:400},target:Function,duration:{type:Number,default:450},className:String,rootClassName:String,style:[String,Object],prefixCls:String},emits:["click"],setup(t,{slots:n,emit:d}){const o=D(),e=t.prefixCls||E("back-top"),i=v(t.visibilityHeight===0),b=v(),f=()=>{var r;return((r=b.value)==null?void 0:r.ownerDocument)||window},c=A(r=>{const l=S(r.target);i.value=l>=t.visibilityHeight}),h=r=>{const l=t.target||f;O(0,{getContainer:l,duration:t.duration}),d("click",r)};H(()=>{const l=(t.target||f)();c({target:l}),l==null||l.addEventListener("scroll",c)}),F(()=>{const l=(t.target||f)();c.cancel(),l==null||l.removeEventListener("scroll",c)});const C=L(()=>q(e,{[`${e}-rtl`]:o.value.direction==="rtl"},t.className,t.rootClassName)),g=()=>a("div",{class:`${e}-content`},[a("div",{class:`${e}-icon`},[a($,{component:I},null)])]);return()=>a("div",{ref:b,class:C.value,style:t.style,onClick:h},[a(N,{name:"hmfw-fade"},{default:()=>{var r;return[i.value&&(((r=n.default)==null?void 0:r.call(n))||g())]}})])}}),R={style:{height:"1500px",padding:"20px",background:"linear-gradient(to bottom, #fff, #f0f0f0)"}},j=y({__name:"BackTopBasic",setup(t){return(n,d)=>(p(),m("div",R,[d[0]||(d[0]=s("p",{style:{"margin-bottom":"20px"}},"向下滚动页面，右下角会出现回到顶部按钮。",-1)),d[1]||(d[1]=s("p",{style:{"margin-bottom":"20px"}},"默认当页面滚动超过 400px 时显示。",-1)),(p(),m(k,null,T(50,o=>s("div",{key:o,style:{"margin-bottom":"10px"}},"内容行 "+w(o),1)),64)),a(u(B))]))}}),P=`<template>
  <div style="height: 1500px; padding: 20px; background: linear-gradient(to bottom, #fff, #f0f0f0)">
    <p style="margin-bottom: 20px">向下滚动页面，右下角会出现回到顶部按钮。</p>
    <p style="margin-bottom: 20px">默认当页面滚动超过 400px 时显示。</p>
    <div v-for="i in 50" :key="i" style="margin-bottom: 10px">内容行 {{ i }}</div>
    <BackTop />
  </div>
</template>

<script setup lang="ts">
import { BackTop } from 'ant-design-hmfw'
<\/script>
`,V={style:{height:"1500px",padding:"20px"}},G=y({__name:"BackTopCustom",setup(t){function n(){console.log("回到顶部")}return(d,o)=>(p(),m("div",V,[o[1]||(o[1]=s("p",{style:{"margin-bottom":"20px"}},"向下滚动页面，右下角会出现自定义的回到顶部按钮。",-1)),o[2]||(o[2]=s("p",{style:{"margin-bottom":"20px"}},"此示例设置 visibilityHeight 为 200px，并自定义了按钮样式。",-1)),(p(),m(k,null,T(50,e=>s("div",{key:e,style:{"margin-bottom":"10px"}},"内容行 "+w(e),1)),64)),a(u(B),{"visibility-height":200,onClick:n},{default:x(()=>[...o[0]||(o[0]=[s("div",{style:{width:"50px",height:"50px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)","border-radius":"50%",display:"flex","align-items":"center","justify-content":"center",color:"white","font-size":"20px","font-weight":"bold","box-shadow":"0 4px 12px rgba(0, 0, 0, 0.15)",transition:"all 0.3s"}}," ↑ ",-1)])]),_:1})]))}}),U=`<template>
  <div style="height: 1500px; padding: 20px">
    <p style="margin-bottom: 20px">向下滚动页面，右下角会出现自定义的回到顶部按钮。</p>
    <p style="margin-bottom: 20px">此示例设置 visibilityHeight 为 200px，并自定义了按钮样式。</p>
    <div v-for="i in 50" :key="i" style="margin-bottom: 10px">内容行 {{ i }}</div>
    <BackTop :visibility-height="200" @click="onBackTop">
      <div
        style="
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          font-weight: bold;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s;
        "
      >
        ↑
      </div>
    </BackTop>
  </div>
</template>

<script setup lang="ts">
import { BackTop } from 'ant-design-hmfw'

function onBackTop() {
  console.log('回到顶部')
}
<\/script>
`,J=y({__name:"BackTopTarget",setup(t){const n=v(),d=()=>n.value;return(o,e)=>(p(),m("div",null,[e[0]||(e[0]=s("p",{style:{"margin-bottom":"20px"}},"在指定容器内滚动时显示回到顶部按钮。",-1)),s("div",{ref_key:"containerRef",ref:n,style:{height:"400px","overflow-y":"auto",border:"1px solid #d9d9d9","border-radius":"4px",padding:"20px",position:"relative"}},[(p(),m(k,null,T(100,i=>s("div",{key:i,style:{"margin-bottom":"10px"}},"容器内容行 "+w(i),1)),64)),a(u(B),{target:d,"visibility-height":100})],512)]))}}),K=`<template>
  <div>
    <p style="margin-bottom: 20px">在指定容器内滚动时显示回到顶部按钮。</p>
    <div
      ref="containerRef"
      style="
        height: 400px;
        overflow-y: auto;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 20px;
        position: relative;
      "
    >
      <div v-for="i in 100" :key="i" style="margin-bottom: 10px">容器内容行 {{ i }}</div>
      <BackTop :target="getContainer" :visibility-height="100" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BackTop } from 'ant-design-hmfw'

const containerRef = ref<HTMLElement>()

const getContainer = () => containerRef.value!
<\/script>
`,Q={class:"markdown-body"},tt={__name:"back-top",setup(t,{expose:n}){return n({frontmatter:{}}),(o,e)=>{const i=M("DemoBlock");return p(),m("div",Q,[e[0]||(e[0]=_('<h1 id="backtop-" tabindex="-1">BackTop 回到顶部</h1><p>返回页面顶部的操作按钮。</p><blockquote><p><strong>已废弃</strong>: 此组件已被 FloatButton.BackTop 替代，但仍保持兼容性支持。</p></blockquote><h2 id="" tabindex="-1">何时使用</h2><ul><li>当页面内容区域比较长时</li><li>当用户需要频繁返回顶部查看相关内容时</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基础用法</h3><p>滚动页面后，右下角会出现回到顶部按钮。</p><blockquote><p>注意：需要滚动页面才能看到按钮出现。默认当页面滚动超过 400px 时显示。</p></blockquote>',9)),a(i,{title:"基础用法",source:u(P)},{default:x(()=>[a(j)]),_:1},8,["source"]),e[1]||(e[1]=s("h3",{id:"-3",tabindex:"-1"},"自定义内容",-1)),e[2]||(e[2]=s("p",null,"可以自定义回到顶部按钮的样式。",-1)),a(i,{title:"自定义内容",source:u(U)},{default:x(()=>[a(G)]),_:1},8,["source"]),e[3]||(e[3]=s("h3",{id:"-4",tabindex:"-1"},"指定容器",-1)),e[4]||(e[4]=s("p",null,"在指定容器内滚动时显示回到顶部按钮。",-1)),a(i,{title:"指定容器",source:u(K)},{default:x(()=>[a(J)]),_:1},8,["source"]),e[5]||(e[5]=_('<h2 id="api" tabindex="-1">API</h2><h3 id="backtop-props" tabindex="-1">BackTop Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>visibilityHeight</td><td>滚动高度达到此参数值才出现 BackTop</td><td><code>number</code></td><td><code>400</code></td></tr><tr><td>target</td><td>设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数</td><td><code>() =&gt; HTMLElement | Window | Document</code></td><td><code>() =&gt; window</code></td></tr><tr><td>duration</td><td>回到顶部所需时间（ms）</td><td><code>number</code></td><td><code>450</code></td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr><tr><td>rootClassName</td><td>根节点类名</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>prefixCls</td><td>自定义前缀</td><td><code>string</code></td><td><code>&#39;hmfw&#39;</code></td></tr></tbody></table><h3 id="backtop-events" tabindex="-1">BackTop Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮的回调函数</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="backtop-slots" tabindex="-1">BackTop Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义内容，默认为向上箭头图标</td></tr></tbody></table><h2 id="-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>controlHeightLG</td><td>按钮尺寸</td><td><code>40px</code></td></tr><tr><td>colorTextDescription</td><td>背景颜色</td><td><code>rgba(0, 0, 0, 0.45)</code></td></tr><tr><td>colorText</td><td>悬停背景颜色</td><td><code>rgba(0, 0, 0, 0.85)</code></td></tr><tr><td>colorTextLightSolid</td><td>图标颜色</td><td><code>#fff</code></td></tr><tr><td>fontSizeHeading3</td><td>图标字体大小</td><td><code>24px</code></td></tr><tr><td>motionDurationMid</td><td>动画时长</td><td><code>0.2s</code></td></tr><tr><td>zIndexBase</td><td>基础 z-index</td><td><code>0</code></td></tr></tbody></table>',9))])}}};export{tt as default};
