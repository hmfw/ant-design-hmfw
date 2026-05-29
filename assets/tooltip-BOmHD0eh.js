import{k as $,I as H,z as _,L as I,t as j,s as G,j as l,T as U,F as N,c as M,p as q,w as B,e as J,M as f,d as n,G as m,g as L,A as K,E as Q,B as Z,h as tt}from"./index-BNHhPN23.js";import{c as et}from"./cls-S9IiI6wd.js";let ot=0;const w=$({name:"Tooltip",props:{title:String,placement:{type:String,default:"top"},trigger:{type:[String,Array],default:"hover"},open:{type:Boolean,default:void 0},defaultOpen:Boolean,color:String,arrow:{type:Boolean,default:!0},mouseEnterDelay:{type:Number,default:.1},mouseLeaveDelay:{type:Number,default:.1},disabled:Boolean,destroyTooltipOnHide:Boolean},emits:["update:open","openChange"],setup(o,{slots:s,emit:i}){const h=H("tooltip"),e=`tooltip-${++ot}`,g=_(null),C=_(null),R=_(o.defaultOpen??!1),S=_({top:0,left:0});let T=null,y=null;const F=M(()=>o.open!==void 0),x=M(()=>F.value?o.open:R.value);I(()=>o.open,t=>{t!==void 0&&(R.value=t)});const b=M(()=>{const t=o.trigger;return Array.isArray(t)?t:[t]}),v=t=>{o.disabled||(R.value=t,i("update:open",t),i("openChange",t))},W=()=>{if(!g.value||!C.value)return;const t=g.value.getBoundingClientRect(),d=C.value.getBoundingClientRect(),a=window.scrollX,p=window.scrollY,r=o.placement;let u=0,c=0;const k=8,P=t.left+t.width/2+a,A=t.top+t.height/2+p;r.startsWith("top")?(u=t.top+p-d.height-k,r==="top"?c=P-d.width/2:r==="topLeft"?c=t.left+a:c=t.right+a-d.width):r.startsWith("bottom")?(u=t.bottom+p+k,r==="bottom"?c=P-d.width/2:r==="bottomLeft"?c=t.left+a:c=t.right+a-d.width):r.startsWith("left")?(c=t.left+a-d.width-k,r==="left"?u=A-d.height/2:r==="leftTop"?u=t.top+p:u=t.bottom+p-d.height):r.startsWith("right")&&(c=t.right+a+k,r==="right"?u=A-d.height/2:r==="rightTop"?u=t.top+p:u=t.bottom+p-d.height),S.value={top:u,left:c}};I(x,async t=>{t&&(await q(),W())});const D=()=>{b.value.includes("hover")&&(y&&(clearTimeout(y),y=null),T=setTimeout(()=>v(!0),o.mouseEnterDelay*1e3))},E=()=>{b.value.includes("hover")&&(T&&(clearTimeout(T),T=null),y=setTimeout(()=>v(!1),o.mouseLeaveDelay*1e3))},V=()=>{b.value.includes("click")&&v(!x.value)},X=()=>{b.value.includes("focus")&&v(!0)},Y=()=>{b.value.includes("focus")&&v(!1)},z=t=>{b.value.includes("contextMenu")&&(t.preventDefault(),v(!0))},O=t=>{var d,a;x.value&&((d=g.value)!=null&&d.contains(t.target)||(a=C.value)!=null&&a.contains(t.target)||b.value.includes("click")&&v(!1))};return j(()=>document.addEventListener("click",O)),G(()=>{document.removeEventListener("click",O),T&&clearTimeout(T),y&&clearTimeout(y)}),()=>{var r,u;const t=(r=s.default)==null?void 0:r.call(s)[0];if(!t)return null;const d=o.title??((u=s.title)==null?void 0:u.call(s)),a={position:"absolute",top:`${S.value.top}px`,left:`${S.value.left}px`,zIndex:"1070"};o.color&&(a["--tooltip-bg"]=o.color);const p=x.value||!o.destroyTooltipOnHide;return l(N,null,[l("div",{ref:g,style:{display:"inline-block"},"aria-describedby":x.value?e:void 0,onMouseenter:D,onMouseleave:E,onClick:V,onFocus:X,onBlur:Y,onContextmenu:z},[t]),p&&l(U,{to:"body"},{default:()=>[l("div",{ref:C,id:e,role:"tooltip",class:et(h,`${h}-placement-${o.placement}`,{[`${h}-hidden`]:!x.value}),style:a,onMouseenter:D,onMouseleave:E},[l("div",{class:`${h}-content`},[o.arrow&&l("div",{class:`${h}-arrow`},null),l("div",{class:`${h}-inner`},[d])])])]})])}}}),nt=$({__name:"TooltipBasic",setup(o){return(s,i)=>(B(),J(m(w),{title:"这是提示文字"},{default:f(()=>[...i[0]||(i[0]=[n("button",null,"鼠标移入",-1)])]),_:1}))}}),lt=`<template>
  <Tooltip title="这是提示文字">
    <button>鼠标移入</button>
  </Tooltip>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-hmfw'
<\/script>
`,it={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},dt=$({__name:"TooltipCustomColor",setup(o){return(s,i)=>(B(),L("div",it,[l(m(w),{title:"粉色提示",color:"pink"},{default:f(()=>[...i[0]||(i[0]=[n("button",null,"粉色",-1)])]),_:1}),l(m(w),{title:"红色提示",color:"red"},{default:f(()=>[...i[1]||(i[1]=[n("button",null,"红色",-1)])]),_:1}),l(m(w),{title:"蓝色提示",color:"#1677ff"},{default:f(()=>[...i[2]||(i[2]=[n("button",null,"自定义蓝色",-1)])]),_:1}),l(m(w),{title:"绿色提示",color:"#52c41a"},{default:f(()=>[...i[3]||(i[3]=[n("button",null,"自定义绿色",-1)])]),_:1})]))}}),rt=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Tooltip title="粉色提示" color="pink">
      <button>粉色</button>
    </Tooltip>
    <Tooltip title="红色提示" color="red">
      <button>红色</button>
    </Tooltip>
    <Tooltip title="蓝色提示" color="#1677ff">
      <button>自定义蓝色</button>
    </Tooltip>
    <Tooltip title="绿色提示" color="#52c41a">
      <button>自定义绿色</button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-hmfw'
<\/script>
`,at={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},st={style:{width:"100px"}},ut=$({__name:"TooltipPlacement",setup(o){const s=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(i,h)=>(B(),L("div",at,[(B(),L(N,null,K(s,e=>l(m(w),{key:e,placement:e,title:"提示文字"},{default:f(()=>[n("button",st,Q(e),1)]),_:2},1032,["placement"])),64))]))}}),pt=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Tooltip
      v-for="placement in placements"
      :key="placement"
      :placement="placement"
      title="提示文字"
    >
      <button style="width: 100px;">{{ placement }}</button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-hmfw'

const placements = [
  'topLeft', 'top', 'topRight',
  'leftTop', 'left', 'leftBottom',
  'rightTop', 'right', 'rightBottom',
  'bottomLeft', 'bottom', 'bottomRight',
]
<\/script>
`,ct={class:"markdown-body"},ht={__name:"tooltip",setup(o,{expose:s}){return s({frontmatter:{}}),(h,e)=>{const g=Z("DemoBlock");return B(),L("div",ct,[e[0]||(e[0]=n("h1",{id:"tooltip-",tabindex:"-1"},"Tooltip 文字提示",-1)),e[1]||(e[1]=n("p",null,"简单的文字提示气泡框。",-1)),e[2]||(e[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=n("ul",null,[n("li",null,"鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作")],-1)),e[4]||(e[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=n("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=n("p",null,"最简单的用法。",-1)),l(g,{title:"基础用法",source:m(lt)},{default:f(()=>[l(nt)]),_:1},8,["source"]),e[7]||(e[7]=n("h3",{id:"-3",tabindex:"-1"},"十二个方向",-1)),e[8]||(e[8]=n("p",null,"位置有十二个方向。",-1)),l(g,{title:"十二个方向",source:m(pt)},{default:f(()=>[l(ut)]),_:1},8,["source"]),e[9]||(e[9]=n("h3",{id:"-4",tabindex:"-1"},"自定义颜色",-1)),e[10]||(e[10]=n("p",null,"自定义提示框颜色。",-1)),l(g,{title:"自定义颜色",source:m(rt)},{default:f(()=>[l(dt)]),_:1},8,["source"]),e[11]||(e[11]=tt('<h2 id="api" tabindex="-1">API</h2><h3 id="tooltip-props" tabindex="-1">Tooltip Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>提示文字</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>placement</td><td>气泡框位置</td><td><code>&#39;top&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottom&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;left&#39; | &#39;leftTop&#39; | &#39;leftBottom&#39; | &#39;right&#39; | &#39;rightTop&#39; | &#39;rightBottom&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>trigger</td><td>触发行为</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39;</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>color</td><td>背景颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>arrow</td><td>是否显示箭头</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="tooltip-events" tabindex="-1">Tooltip Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="tooltip-slots" tabindex="-1">Tooltip Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发提示的元素</td></tr><tr><td>title</td><td>提示文字</td></tr></tbody></table>',7))])}}};export{ht as default};
