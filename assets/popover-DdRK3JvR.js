import{k as _,I as X,z as k,L as A,t as Y,s as z,j as n,T as G,F as I,c as $,p as U,w,e as q,M as m,d as l,G as g,g as C,A as H,E as J,B as K,h as Q}from"./index-BNHhPN23.js";import{c as Z}from"./cls-S9IiI6wd.js";const P=_({name:"Popover",props:{title:String,content:String,placement:{type:String,default:"top"},trigger:{type:[String,Array],default:"hover"},open:{type:Boolean,default:void 0},defaultOpen:Boolean,arrow:{type:Boolean,default:!0},mouseEnterDelay:{type:Number,default:.1},mouseLeaveDelay:{type:Number,default:.1},disabled:Boolean,overlayStyle:Object,overlayInnerStyle:Object},emits:["update:open","openChange"],setup(o,{slots:r,emit:a}){const u=X("popover"),e=k(null),v=k(null),L=k(o.defaultOpen??!1),S=k({top:0,left:0});let h=null,b=null;const N=$(()=>o.open!==void 0),B=$(()=>N.value?o.open:L.value);A(()=>o.open,t=>{t!==void 0&&(L.value=t)});const y=$(()=>{const t=o.trigger;return Array.isArray(t)?t:[t]}),x=t=>{o.disabled||(L.value=t,a("update:open",t),a("openChange",t))},F=()=>{if(!e.value||!v.value)return;const t=e.value.getBoundingClientRect(),i=v.value.getBoundingClientRect(),s=window.scrollX,p=window.scrollY,d=o.placement;let c=0,f=0;const T=8,D=t.left+t.width/2+s,O=t.top+t.height/2+p;d.startsWith("top")?(c=t.top+p-i.height-T,d==="top"?f=D-i.width/2:d==="topLeft"?f=t.left+s:f=t.right+s-i.width):d.startsWith("bottom")?(c=t.bottom+p+T,d==="bottom"?f=D-i.width/2:d==="bottomLeft"?f=t.left+s:f=t.right+s-i.width):d.startsWith("left")?(f=t.left+s-i.width-T,d==="left"?c=O-i.height/2:d==="leftTop"?c=t.top+p:c=t.bottom+p-i.height):d.startsWith("right")&&(f=t.right+s+T,d==="right"?c=O-i.height/2:d==="rightTop"?c=t.top+p:c=t.bottom+p-i.height),S.value={top:c,left:f}};A(B,async t=>{t&&(await U(),F())});const R=()=>{y.value.includes("hover")&&(b&&(clearTimeout(b),b=null),h=setTimeout(()=>x(!0),o.mouseEnterDelay*1e3))},E=()=>{y.value.includes("hover")&&(h&&(clearTimeout(h),h=null),b=setTimeout(()=>x(!1),o.mouseLeaveDelay*1e3))},W=()=>{y.value.includes("click")&&x(!B.value)},j=()=>{y.value.includes("focus")&&x(!0)},V=()=>{y.value.includes("focus")&&x(!1)},M=t=>{var i,s;B.value&&((i=e.value)!=null&&i.contains(t.target)||(s=v.value)!=null&&s.contains(t.target)||y.value.includes("click")&&x(!1))};return Y(()=>document.addEventListener("click",M)),z(()=>{document.removeEventListener("click",M),h&&clearTimeout(h),b&&clearTimeout(b)}),()=>{var s;const t=(s=r.default)==null?void 0:s.call(r)[0];if(!t)return null;const i={position:"absolute",top:`${S.value.top}px`,left:`${S.value.left}px`,zIndex:"1070",...o.overlayStyle};return n(I,null,[n("div",{ref:e,style:{display:"inline-block"},onMouseenter:R,onMouseleave:E,onClick:W,onFocus:j,onBlur:V},[t]),n(G,{to:"body"},{default:()=>{var p,d;return[n("div",{ref:v,class:Z(u,`${u}-placement-${o.placement}`,{[`${u}-hidden`]:!B.value}),style:i,onMouseenter:R,onMouseleave:E},[n("div",{class:`${u}-content`},[o.arrow&&n("div",{class:`${u}-arrow`},null),n("div",{class:`${u}-inner`,style:o.overlayInnerStyle},[(o.title||r.title)&&n("div",{class:`${u}-title`},[((p=r.title)==null?void 0:p.call(r))??o.title]),n("div",{class:`${u}-inner-content`},[((d=r.content)==null?void 0:d.call(r))??o.content])])])])]}})])}}}),tt=_({__name:"PopoverBasic",setup(o){return(r,a)=>(w(),q(g(P),{title:"标题",content:"这是气泡卡片的内容"},{default:m(()=>[...a[0]||(a[0]=[l("button",null,"鼠标移入",-1)])]),_:1}))}}),et=`<template>
  <Popover title="标题" content="这是气泡卡片的内容">
    <button>鼠标移入</button>
  </Popover>
</template>

<script setup lang="ts">
import { Popover } from 'ant-design-hmfw'
<\/script>
`,ot={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},nt=_({__name:"PopoverPlacement",setup(o){const r=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(a,u)=>(w(),C("div",ot,[(w(),C(I,null,H(r,e=>n(g(P),{key:e,placement:e,title:"标题",content:"内容"},{default:m(()=>[l("button",null,J(e),1)]),_:2},1032,["placement"])),64))]))}}),lt=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Popover
      v-for="placement in placements"
      :key="placement"
      :placement="placement"
      title="标题"
      content="内容"
    >
      <button>{{ placement }}</button>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover } from 'ant-design-hmfw'

const placements = [
  'topLeft', 'top', 'topRight',
  'leftTop', 'left', 'leftBottom',
  'rightTop', 'right', 'rightBottom',
  'bottomLeft', 'bottom', 'bottomRight',
]
<\/script>
`,rt={style:{display:"flex",gap:"8px"}},it=_({__name:"PopoverTrigger",setup(o){return(r,a)=>(w(),C("div",rt,[n(g(P),{title:"悬停触发",content:"鼠标悬停时显示",trigger:"hover"},{default:m(()=>[...a[0]||(a[0]=[l("button",null,"悬停",-1)])]),_:1}),n(g(P),{title:"点击触发",content:"点击时显示",trigger:"click"},{default:m(()=>[...a[1]||(a[1]=[l("button",null,"点击",-1)])]),_:1}),n(g(P),{title:"聚焦触发",content:"聚焦时显示",trigger:"focus"},{default:m(()=>[...a[2]||(a[2]=[l("button",null,"聚焦",-1)])]),_:1})]))}}),dt=`<template>
  <div style="display: flex; gap: 8px;">
    <Popover title="悬停触发" content="鼠标悬停时显示" trigger="hover">
      <button>悬停</button>
    </Popover>
    <Popover title="点击触发" content="点击时显示" trigger="click">
      <button>点击</button>
    </Popover>
    <Popover title="聚焦触发" content="聚焦时显示" trigger="focus">
      <button>聚焦</button>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover } from 'ant-design-hmfw'
<\/script>
`,at={class:"markdown-body"},pt={__name:"popover",setup(o,{expose:r}){return r({frontmatter:{}}),(u,e)=>{const v=K("DemoBlock");return w(),C("div",at,[e[0]||(e[0]=l("h1",{id:"popover-",tabindex:"-1"},"Popover 气泡卡片",-1)),e[1]||(e[1]=l("p",null,"点击/鼠标移入元素，弹出气泡式的卡片浮层。",-1)),e[2]||(e[2]=l("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=l("ul",null,[l("li",null,"当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现"),l("li",null,"和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等")],-1)),e[4]||(e[4]=l("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=l("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=l("p",null,"最简单的用法，鼠标移入时显示。",-1)),n(v,{title:"基础用法",source:g(et)},{default:m(()=>[n(tt)]),_:1},8,["source"]),e[7]||(e[7]=l("h3",{id:"-3",tabindex:"-1"},"触发方式",-1)),e[8]||(e[8]=l("p",null,"鼠标移入、聚集、点击。",-1)),n(v,{title:"触发方式",source:g(dt)},{default:m(()=>[n(it)]),_:1},8,["source"]),e[9]||(e[9]=l("h3",{id:"-4",tabindex:"-1"},"十二个方向",-1)),e[10]||(e[10]=l("p",null,"位置有十二个方向。",-1)),n(v,{title:"十二个方向",source:g(lt)},{default:m(()=>[n(nt)]),_:1},8,["source"]),e[11]||(e[11]=Q('<h2 id="api" tabindex="-1">API</h2><h3 id="popover-props" tabindex="-1">Popover Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>卡片标题</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>content</td><td>卡片内容</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>trigger</td><td>触发行为</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39;</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>placement</td><td>气泡框位置</td><td><code>&#39;top&#39; | &#39;left&#39; | &#39;right&#39; | &#39;bottom&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;leftTop&#39; | &#39;leftBottom&#39; | &#39;rightTop&#39; | &#39;rightBottom&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>color</td><td>背景颜色</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="popover-events" tabindex="-1">Popover Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="popover-slots" tabindex="-1">Popover Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发气泡卡片的元素</td></tr><tr><td>content</td><td>卡片内容</td></tr><tr><td>title</td><td>卡片标题</td></tr></tbody></table>',7))])}}};export{pt as default};
