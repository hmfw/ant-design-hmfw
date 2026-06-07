import{B as I}from"./Button-DaEKIrtr.js";import{S as q}from"./Space-CFOjp43A.js";import{p as Y}from"./icons-DrnBibzR.js";import{n as D,M as K,D as w,P as z,w as Z,v as _,o as l,T as R,e as x,s as tt,q as et,z as E,j as M,m as v,J as y,Q as T,l as S,G as dt,g as c,k as ot}from"./index-bv5A37HL.js";import{c as U}from"./cls-S9IiI6wd.js";import{I as nt}from"./Icon-K3gH4Ffy.js";function A(t){return t?typeof t=="function"?t():document.querySelector(t):null}function rt(t){if(!t)return null;const n=t.getBoundingClientRect();return{top:n.top+window.scrollY,left:n.left+window.scrollX,width:n.width,height:n.height}}function lt(t,n,d="bottom",p=12){if(!t||!n)return{top:100,left:100};const e=n.offsetWidth||300,a=n.offsetHeight||200,b=t.left+t.width/2,m=t.top+t.height/2;if(d.startsWith("bottom")){const i=t.top+t.height+p,s=d==="bottom"?b-e/2:d==="bottomLeft"?t.left:t.left+t.width-e;return{top:i,left:s}}if(d.startsWith("top")){const i=t.top-a-p,s=d==="top"?b-e/2:d==="topLeft"?t.left:t.left+t.width-e;return{top:i,left:s}}if(d.startsWith("right")){const i=t.left+t.width+p;return{top:d==="right"?m-a/2:d==="rightTop"?t.top:t.top+t.height-a,left:i}}if(d.startsWith("left")){const i=t.left-e-p;return{top:d==="left"?m-a/2:d==="leftTop"?t.top:t.top+t.height-a,left:i}}return{top:t.top+t.height+p,left:b-e/2}}function j(t){return t==null?null:typeof t=="function"?t():et(t)?t:String(t)}const L=D({name:"Tour",props:{open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:!1},current:{type:Number,default:void 0},defaultCurrent:{type:Number,default:0},steps:{type:Array,default:()=>[]},arrow:{type:[Boolean,Object],default:!0},placement:{type:String,default:void 0},mask:{type:[Boolean,Object],default:!0},type:{type:String,default:"default"},scrollIntoViewOptions:{type:[Boolean,Object],default:!0},zIndex:{type:Number,default:1001},gap:{type:Object,default:void 0},indicatorsRender:{type:Function,default:void 0},closeIcon:{type:[Object,Function,Boolean],default:void 0}},emits:["update:open","update:current","change","close","finish"],setup(t,{emit:n}){const d=K("tour"),p=w(t.defaultOpen),e=w(t.defaultCurrent),a=w(null),b=w({top:100,left:100}),m=w(null),i=x(()=>t.open!==void 0?t.open:p.value),s=x(()=>t.current!==void 0?t.current:e.value),r=x(()=>t.steps[s.value]??null),$=x(()=>t.steps.length),B=x(()=>{var h;const o=(h=r.value)==null?void 0:h.mask;return o!==void 0?o:t.mask}),H=x(()=>{var o;return((o=r.value)==null?void 0:o.type)??t.type});z(()=>t.open,o=>{o!==void 0&&(p.value=o)}),z(()=>t.current,o=>{o!==void 0&&(e.value=o)});async function G(){var g;const o=r.value?A(r.value.target):null;if(!o)return;const h=((g=r.value)==null?void 0:g.scrollIntoViewOptions)??t.scrollIntoViewOptions??!0;if(h){const O=typeof h=="boolean"?{block:"center",behavior:"smooth"}:h;o.scrollIntoView(O)}}async function C(){var h,g;await tt();const o=r.value?A(r.value.target):null;if(m.value=rt(o),a.value){const O=((h=r.value)==null?void 0:h.placement)??t.placement??"bottom",k=((g=t.gap)==null?void 0:g.offset)??12,V=typeof k=="number"?k:k[0];b.value=lt(m.value,a.value,O,V)}}z([i,s],async([o])=>{o&&(await G(),await C())},{immediate:!0}),Z(()=>{window.addEventListener("resize",C),window.addEventListener("scroll",C,!0)}),_(()=>{window.removeEventListener("resize",C),window.removeEventListener("scroll",C,!0)});function F(){p.value=!1,n("update:open",!1),n("close")}function N(o){e.value=o,n("update:current",o),n("change",o)}function J(){s.value>0&&N(s.value-1)}function Q(){s.value<$.value-1?N(s.value+1):(F(),n("finish"))}const X=()=>t.closeIcon===!1?null:t.closeIcon===void 0?l(nt,{component:Y}):typeof t.closeIcon=="function"?t.closeIcon():t.closeIcon;return()=>{var W;if(!i.value||!r.value)return null;const o=H.value==="primary",h=s.value===$.value-1,g=B.value!==!1,O=typeof B.value=="object"?B.value.style:void 0,k=typeof B.value=="object"?B.value.color:"rgba(0,0,0,0.45)",V=X();return l(R,{to:"body"},[l("div",{class:`${d}-root`,style:{zIndex:t.zIndex}},[g&&l("div",{class:`${d}-mask`,style:O},[m.value?l("svg",{class:`${d}-mask-svg`,width:"100%",height:"100%"},[l("defs",[l("mask",{id:"tour-mask"},[l("rect",{width:"100%",height:"100%",fill:"white"}),l("rect",{x:m.value.left-4,y:m.value.top-4,width:m.value.width+8,height:m.value.height+8,rx:((W=t.gap)==null?void 0:W.radius)??4,fill:"black"})])]),l("rect",{width:"100%",height:"100%",fill:k,mask:"url(#tour-mask)"})]):l("div",{class:`${d}-mask-fill`,style:{background:k}})]),l("div",{ref:a,class:U(`${d}-popover`,{[`${d}-popover-primary`]:o},r.value.className),style:{position:"absolute",top:`${b.value.top}px`,left:`${b.value.left}px`,zIndex:t.zIndex+1,...r.value.style}},[l("div",{class:`${d}-popover-inner`},[V!==null&&l("button",{type:"button",class:`${d}-close`,onClick:F,"aria-label":"Close"},[V]),r.value.cover&&l("div",{class:`${d}-cover`},[typeof r.value.cover=="string"?l("img",{src:r.value.cover,alt:""}):j(r.value.cover)]),r.value.title&&l("div",{class:`${d}-title`},[j(r.value.title)]),r.value.description&&l("div",{class:`${d}-description`},[j(r.value.description)]),l("div",{class:`${d}-footer`},[$.value>1&&l("div",{class:`${d}-indicators`},[t.indicatorsRender?t.indicatorsRender(s.value,$.value):t.steps.map((f,u)=>l("span",{key:u,class:U(`${d}-indicator`,{[`${d}-indicator-active`]:u===s.value}),onClick:()=>N(u)}))]),l("div",{class:`${d}-buttons`},[s.value>0&&l(I,{size:"small",type:"default",ghost:o,class:`${d}-prev-btn`,onClick:()=>{var f,u,P;(P=(u=(f=r.value)==null?void 0:f.prevButtonProps)==null?void 0:u.onClick)==null||P.call(u),J()},...r.value.prevButtonProps},{default:()=>{var f,u;return((u=(f=r.value)==null?void 0:f.prevButtonProps)==null?void 0:u.children)??"上一步"}}),l(I,{size:"small",type:o?"default":"primary",ghost:o,class:`${d}-next-btn`,onClick:()=>{var f,u,P;(P=(u=(f=r.value)==null?void 0:f.nextButtonProps)==null?void 0:u.onClick)==null||P.call(u),Q()},...r.value.nextButtonProps},{default:()=>{var f,u;return((u=(f=r.value)==null?void 0:f.nextButtonProps)==null?void 0:u.children)??(h?"完成":"下一步")}})])])])])])])}}}),it=D({__name:"TourBasic",setup(t){const n=w(!1),d=[{title:"第一步",description:"这是漫游引导的第一步，介绍页面的主要功能。"},{title:"第二步",description:"这是第二步，继续介绍其他功能。"},{title:"完成",description:"引导完成！现在你已经了解了所有功能。"}];return(p,e)=>(E(),M("div",null,[v(y(q),null,{default:T(()=>[v(y(I),{ref:"btnRef",type:"primary",onClick:e[0]||(e[0]=a=>n.value=!0)},{default:T(()=>[...e[3]||(e[3]=[S(" 开始引导 ",-1)])]),_:1},512)]),_:1}),v(y(L),{open:n.value,"onUpdate:open":e[1]||(e[1]=a=>n.value=a),steps:d,onFinish:e[2]||(e[2]=a=>n.value=!1)},null,8,["open"])]))}}),st=`<template>
  <div>
    <Space>
      <Button ref="btnRef" type="primary" @click="open = true"> 开始引导 </Button>
    </Space>
    <Tour v-model:open="open" :steps="steps" @finish="open = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tour, Button, Space } from 'ant-design-hmfw'
import type { TourStep } from 'ant-design-hmfw'

const open = ref(false)

const steps: TourStep[] = [
  {
    title: '第一步',
    description: '这是漫游引导的第一步，介绍页面的主要功能。',
  },
  {
    title: '第二步',
    description: '这是第二步，继续介绍其他功能。',
  },
  {
    title: '完成',
    description: '引导完成！现在你已经了解了所有功能。',
  },
]
<\/script>
`,ut=D({__name:"TourType",setup(t){const n=w(!1),d=w(!1),p=[{title:"默认样式",description:"这是默认样式的引导，白色背景。"},{title:"第二步",description:"继续介绍功能..."}],e=[{title:"主题样式",description:"这是主题样式的引导，蓝色背景。"},{title:"第二步",description:"继续介绍功能..."}];function a(){n.value=!0}function b(){d.value=!0}return(m,i)=>(E(),M("div",null,[v(y(q),null,{default:T(()=>[v(y(I),{type:"primary",onClick:a},{default:T(()=>[...i[4]||(i[4]=[S(" 默认样式 ",-1)])]),_:1}),v(y(I),{type:"primary",onClick:b},{default:T(()=>[...i[5]||(i[5]=[S(" 主题样式 ",-1)])]),_:1})]),_:1}),v(y(L),{open:n.value,"onUpdate:open":i[0]||(i[0]=s=>n.value=s),steps:p,onFinish:i[1]||(i[1]=s=>n.value=!1)},null,8,["open"]),v(y(L),{open:d.value,"onUpdate:open":i[2]||(i[2]=s=>d.value=s),type:"primary",steps:e,onFinish:i[3]||(i[3]=s=>d.value=!1)},null,8,["open"])]))}}),at=`<template>
  <div>
    <Space>
      <Button type="primary" @click="openDefault"> 默认样式 </Button>
      <Button type="primary" @click="openPrimary"> 主题样式 </Button>
    </Space>
    <Tour v-model:open="defaultOpen" :steps="defaultSteps" @finish="defaultOpen = false" />
    <Tour v-model:open="primaryOpen" type="primary" :steps="primarySteps" @finish="primaryOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tour, Button, Space } from 'ant-design-hmfw'
import type { TourStep } from 'ant-design-hmfw'

const defaultOpen = ref(false)
const primaryOpen = ref(false)

const defaultSteps: TourStep[] = [
  {
    title: '默认样式',
    description: '这是默认样式的引导，白色背景。',
  },
  {
    title: '第二步',
    description: '继续介绍功能...',
  },
]

const primarySteps: TourStep[] = [
  {
    title: '主题样式',
    description: '这是主题样式的引导，蓝色背景。',
  },
  {
    title: '第二步',
    description: '继续介绍功能...',
  },
]

function openDefault() {
  defaultOpen.value = true
}

function openPrimary() {
  primaryOpen.value = true
}
<\/script>
`,ct={class:"markdown-body"},bt={__name:"tour",setup(t,{expose:n}){return n({frontmatter:{}}),(p,e)=>{const a=dt("DemoBlock");return E(),M("div",ct,[e[0]||(e[0]=c("h1",{id:"tour-",tabindex:"-1"},"Tour 漫游引导",-1)),e[1]||(e[1]=c("p",null,"用于分步引导用户了解产品功能的组件。",-1)),e[2]||(e[2]=c("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=c("ul",null,[c("li",null,"新功能上线时，引导用户了解新功能"),c("li",null,"复杂操作流程，需要分步骤引导用户完成"),c("li",null,"对于特定的元素进行操作指引")],-1)),e[4]||(e[4]=c("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=c("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=c("p",null,"最简单的用法，无目标元素，居中展示。",-1)),v(a,{title:"基础用法",source:y(st)},{default:T(()=>[v(it)]),_:1},8,["source"]),e[7]||(e[7]=c("h3",{id:"-3",tabindex:"-1"},"不同类型",-1)),e[8]||(e[8]=c("p",null,[S("Tour 有两种类型："),c("code",null,"default"),S(" 和 "),c("code",null,"primary"),S("。")],-1)),v(a,{title:"不同类型",source:y(at)},{default:T(()=>[v(ut)]),_:1},8,["source"]),e[9]||(e[9]=ot('<h2 id="api" tabindex="-1">API</h2><h3 id="tour-props" tabindex="-1">Tour Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open (v-model)</td><td>是否显示</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>current (v-model)</td><td>当前步骤</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>steps</td><td>步骤配置</td><td><code>TourStep[]</code></td><td><code>[]</code></td></tr><tr><td>arrow</td><td>是否显示箭头</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>placement</td><td>引导卡片相对于目标元素的位置</td><td><code>TooltipPlacement</code></td><td><code>&#39;bottom&#39;</code></td></tr><tr><td>mask</td><td>是否显示遮罩</td><td><code>boolean | { style?: CSSProperties; color?: string }</code></td><td><code>true</code></td></tr><tr><td>type</td><td>类型，影响底色与文字颜色</td><td><code>&#39;default&#39; | &#39;primary&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>scrollIntoViewOptions</td><td>是否滚动到目标元素，支持传入滚动选项</td><td><code>boolean | ScrollIntoViewOptions</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>Tour 的 z-index</td><td><code>number</code></td><td><code>1001</code></td></tr><tr><td>gap</td><td>引导卡片与目标元素的距离和箭头偏移</td><td><code>{ offset?: number | [number, number]; radius?: number }</code></td><td><code>{ offset: 12, radius: 4 }</code></td></tr><tr><td>indicatorsRender</td><td>自定义指示器渲染</td><td><code>(current: number, total: number) =&gt; VNode</code></td><td>-</td></tr><tr><td>closeIcon</td><td>自定义关闭图标，设置为 <code>false</code> 时隐藏关闭按钮</td><td><code>VNode | (() =&gt; VNode) | false</code></td><td><code>&lt;CloseOutlined /&gt;</code></td></tr></tbody></table><h3 id="tourstep" tabindex="-1">TourStep</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string | VNode | (() =&gt; VNode)</code></td><td>-</td></tr><tr><td>description</td><td>描述</td><td><code>string | VNode | (() =&gt; VNode)</code></td><td>-</td></tr><tr><td>target</td><td>目标元素（CSS 选择器或返回元素的函数）</td><td><code>string | (() =&gt; HTMLElement | null)</code></td><td>-</td></tr><tr><td>placement</td><td>弹出位置</td><td><code>TooltipPlacement</code></td><td>-</td></tr><tr><td>cover</td><td>封面图片或自定义内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>type</td><td>类型，优先级高于 Tour 的 type</td><td><code>&#39;default&#39; | &#39;primary&#39;</code></td><td>-</td></tr><tr><td>mask</td><td>是否显示遮罩，优先级高于 Tour 的 mask</td><td><code>boolean | { style?: CSSProperties; color?: string }</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr><tr><td>nextButtonProps</td><td>下一步按钮的属性</td><td><code>TourButtonProps</code></td><td>-</td></tr><tr><td>prevButtonProps</td><td>上一步按钮的属性</td><td><code>TourButtonProps</code></td><td>-</td></tr><tr><td>scrollIntoViewOptions</td><td>是否滚动到目标元素</td><td><code>boolean | ScrollIntoViewOptions</code></td><td>-</td></tr></tbody></table><h3 id="tourbuttonprops" tabindex="-1">TourButtonProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>children</td><td>按钮文本</td><td><code>string | VNode</code></td></tr><tr><td>onClick</td><td>点击回调</td><td><code>() =&gt; void</code></td></tr><tr><td>…其他</td><td>Button 组件的其他属性</td><td><code>ButtonProps</code></td></tr></tbody></table><h3 id="tour-events" tabindex="-1">Tour Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>步骤改变时</td><td><code>(current: number) =&gt; void</code></td></tr><tr><td>close</td><td>关闭时</td><td><code>() =&gt; void</code></td></tr><tr><td>finish</td><td>完成时（最后一步点击下一步）</td><td><code>() =&gt; void</code></td></tr></tbody></table><h2 id="-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-elevated</code></td><td>卡片背景色</td><td><code>#fff</code></td></tr><tr><td><code>--hmfw-box-shadow-secondary</code></td><td>卡片阴影</td><td><code>0 6px 16px rgba(0, 0, 0, 0.08), ...</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色（primary 类型背景 &amp; 激活指示器）</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>标题文字颜色</td><td><code>rgba(0, 0, 0, 0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>描述文字颜色</td><td><code>rgba(0, 0, 0, 0.65)</code></td></tr><tr><td><code>--hmfw-color-text-tertiary</code></td><td>关闭图标颜色</td><td><code>rgba(0, 0, 0, 0.45)</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>卡片圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>按钮小圆角</td><td><code>4px</code></td></tr></tbody></table>',11))])}}};export{bt as default};
