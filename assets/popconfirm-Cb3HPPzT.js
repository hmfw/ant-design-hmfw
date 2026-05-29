import{B as R}from"./Button-CNZPbvb9.js";import{k as P,I as W,H as A,L as E,t as F,s as X,j as n,T as Y,F as D,z as k,c as M,p as j,w as b,e as N,M as g,d as r,G as h,g as B,A as G,E as H,B as U,h as q}from"./index-BNHhPN23.js";import{c as J}from"./cls-S9IiI6wd.js";import"./icons-DuMoCl7A.js";const $=P({name:"Popconfirm",props:{title:String,description:String,okText:{type:String,default:void 0},cancelText:{type:String,default:void 0},okType:{type:String,default:"primary"},icon:{type:String,default:"⚠"},placement:{type:String,default:"top"},open:{type:Boolean,default:void 0},disabled:Boolean,showCancel:{type:Boolean,default:!0},mouseEnterDelay:{type:Number,default:.1},mouseLeaveDelay:{type:Number,default:.1}},emits:["update:open","openChange","confirm","cancel"],setup(o,{slots:i,emit:p}){const l=W("popconfirm"),t=A(),u=k(null),x=k(null),w=k(!1),T=k({top:0,left:0}),z=M(()=>o.open!==void 0),v=M(()=>z.value?o.open:w.value);E(()=>o.open,e=>{e!==void 0&&(w.value=e)});const y=e=>{o.disabled||(w.value=e,p("update:open",e),p("openChange",e))},I=()=>{if(!u.value||!x.value)return;const e=u.value.getBoundingClientRect(),d=x.value.getBoundingClientRect(),a=window.scrollX,s=window.scrollY,c=o.placement,C=8;let f=0,m=0;const L=e.left+e.width/2+a,S=e.top+e.height/2+s;c.startsWith("top")?(f=e.top+s-d.height-C,c==="top"?m=L-d.width/2:c==="topLeft"?m=e.left+a:m=e.right+a-d.width):c.startsWith("bottom")?(f=e.bottom+s+C,c==="bottom"?m=L-d.width/2:c==="bottomLeft"?m=e.left+a:m=e.right+a-d.width):c.startsWith("left")?(m=e.left+a-d.width-C,c==="left"?f=S-d.height/2:c==="leftTop"?f=e.top+s:f=e.bottom+s-d.height):(m=e.right+a+C,c==="right"?f=S-d.height/2:c==="rightTop"?f=e.top+s:f=e.bottom+s-d.height),T.value={top:f,left:m}};E(v,async e=>{e&&(await j(),I())});const _=e=>{var d,a;v.value&&((d=u.value)!=null&&d.contains(e.target)||(a=x.value)!=null&&a.contains(e.target)||y(!1))};F(()=>document.addEventListener("mousedown",_)),X(()=>document.removeEventListener("mousedown",_));const O=()=>{p("confirm"),y(!1)},V=()=>{p("cancel"),y(!1)};return()=>{var d;const e=(d=i.default)==null?void 0:d.call(i)[0];return e?n(D,null,[n("div",{ref:u,style:{display:"inline-block"},onClick:()=>y(!v.value)},[e]),n(Y,{to:"body"},{default:()=>{var a,s;return[n("div",{ref:x,class:J(l,`${l}-placement-${o.placement}`,{[`${l}-hidden`]:!v.value}),style:{position:"absolute",top:`${T.value.top}px`,left:`${T.value.left}px`,zIndex:"1070"}},[n("div",{class:`${l}-content`},[n("div",{class:`${l}-arrow`},null),n("div",{class:`${l}-inner`},[n("div",{class:`${l}-message`},[n("span",{class:`${l}-message-icon`},[o.icon]),n("div",{class:`${l}-message-title`},[((a=i.title)==null?void 0:a.call(i))??o.title])]),(o.description||i.description)&&n("div",{class:`${l}-description`},[((s=i.description)==null?void 0:s.call(i))??o.description]),n("div",{class:`${l}-buttons`},[o.showCancel&&n(R,{size:"small",onClick:V},{default:()=>o.cancelText??t.value.Modal.cancelText}),n(R,{size:"small",type:o.okType==="danger"?"primary":o.okType,danger:o.okType==="danger",onClick:O},{default:()=>o.okText??t.value.Modal.okText})])])])])]}})]):null}}}),K=P({__name:"PopconfirmBasic",setup(o){function i(){console.log("已确认删除")}function p(){console.log("已取消")}return(l,t)=>(b(),N(h($),{title:"确定要删除吗？","ok-text":"确定","cancel-text":"取消",onConfirm:i,onCancel:p},{default:g(()=>[...t[0]||(t[0]=[r("button",null,"删除",-1)])]),_:1}))}}),Q=`<template>
  <Popconfirm
    title="确定要删除吗？"
    ok-text="确定"
    cancel-text="取消"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <button>删除</button>
  </Popconfirm>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-hmfw'

function onConfirm() {
  console.log('已确认删除')
}

function onCancel() {
  console.log('已取消')
}
<\/script>
`,Z=P({__name:"PopconfirmCustomText",setup(o){function i(){console.log("已提交")}return(p,l)=>(b(),N(h($),{title:"确定要提交吗？",description:"提交后将无法修改，请确认信息无误。","ok-text":"提交","cancel-text":"再想想",onConfirm:i},{default:g(()=>[...l[0]||(l[0]=[r("button",null,"提交",-1)])]),_:1}))}}),tt=`<template>
  <Popconfirm
    title="确定要提交吗？"
    description="提交后将无法修改，请确认信息无误。"
    ok-text="提交"
    cancel-text="再想想"
    @confirm="onConfirm"
  >
    <button>提交</button>
  </Popconfirm>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-hmfw'

function onConfirm() {
  console.log('已提交')
}
<\/script>
`,et={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},nt=P({__name:"PopconfirmPlacement",setup(o){const i=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(p,l)=>(b(),B("div",et,[(b(),B(D,null,G(i,t=>n(h($),{key:t,placement:t,title:"确定要执行此操作吗？",onConfirm:()=>console.log(t)},{default:g(()=>[r("button",null,H(t),1)]),_:2},1032,["placement","onConfirm"])),64))]))}}),ot=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Popconfirm
      v-for="placement in placements"
      :key="placement"
      :placement="placement"
      title="确定要执行此操作吗？"
      @confirm="() => console.log(placement)"
    >
      <button>{{ placement }}</button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-hmfw'

const placements = [
  'topLeft', 'top', 'topRight',
  'leftTop', 'left', 'leftBottom',
  'rightTop', 'right', 'rightBottom',
  'bottomLeft', 'bottom', 'bottomRight',
]
<\/script>
`,it={class:"markdown-body"},ct={__name:"popconfirm",setup(o,{expose:i}){return i({frontmatter:{}}),(l,t)=>{const u=U("DemoBlock");return b(),B("div",it,[t[0]||(t[0]=r("h1",{id:"popconfirm-",tabindex:"-1"},"Popconfirm 气泡确认框",-1)),t[1]||(t[1]=r("p",null,"点击元素，弹出气泡式的确认框。",-1)),t[2]||(t[2]=r("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=r("ul",null,[r("li",null,"目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户"),r("li",null,"和 confirm 弹出的全屏居中模态对话框相比，交互形式更轻量")],-1)),t[4]||(t[4]=r("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=r("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=r("p",null,"最简单的用法。",-1)),n(u,{title:"基础用法",source:h(Q)},{default:g(()=>[n(K)]),_:1},8,["source"]),t[7]||(t[7]=r("h3",{id:"-3",tabindex:"-1"},"自定义按钮文字",-1)),t[8]||(t[8]=r("p",null,"自定义确认按钮和取消按钮的文字。",-1)),n(u,{title:"自定义按钮文字",source:h(tt)},{default:g(()=>[n(Z)]),_:1},8,["source"]),t[9]||(t[9]=r("h3",{id:"-4",tabindex:"-1"},"不同位置",-1)),t[10]||(t[10]=r("p",null,"位置有十二个方向。",-1)),n(u,{title:"不同位置",source:h(ot)},{default:g(()=>[n(nt)]),_:1},8,["source"]),t[11]||(t[11]=q('<h2 id="api" tabindex="-1">API</h2><h3 id="popconfirm-props" tabindex="-1">Popconfirm Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>确认框标题</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>确认框描述</td><td><code>string</code></td><td>-</td></tr><tr><td>okText</td><td>确认按钮文字</td><td><code>string</code></td><td><code>&#39;确定&#39;</code></td></tr><tr><td>cancelText</td><td>取消按钮文字</td><td><code>string</code></td><td><code>&#39;取消&#39;</code></td></tr><tr><td>okType</td><td>确认按钮类型</td><td><code>string</code></td><td><code>&#39;primary&#39;</code></td></tr><tr><td>placement</td><td>气泡框位置</td><td><code>&#39;top&#39; | &#39;left&#39; | &#39;right&#39; | &#39;bottom&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;leftTop&#39; | &#39;leftBottom&#39; | &#39;rightTop&#39; | &#39;rightBottom&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>disabled</td><td>点击 Popconfirm 子元素是否弹出气泡确认框</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="popconfirm-events" tabindex="-1">Popconfirm Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击确认的回调</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>cancel</td><td>点击取消的回调</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="popconfirm-slots" tabindex="-1">Popconfirm Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发气泡确认框的元素</td></tr></tbody></table>',7))])}}};export{ct as default};
