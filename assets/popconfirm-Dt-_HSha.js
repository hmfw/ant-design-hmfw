import{B as T}from"./Button-xmgYL1_u.js";import{m as g,L as H,K as M,B as A,n as i,d as x,y as m,g as w,P as p,f as n,I as f,i as v,F as V,D as $,l as s,H as I,E as z,j as F}from"./index-3tP9IO2U.js";import{T as R}from"./Tooltip-PG5UIiDT.js";import"./icons-DjAiWXKu.js";import"./Icon-Cuh3Bp-R.js";import"./cls-S9IiI6wd.js";const C=g({name:"Popconfirm",inheritAttrs:!1,props:{title:[String,Number,Object,Function],description:[String,Number,Object,Function],icon:{type:[String,Number,Object,Function],default:"⚠"},okText:String,cancelText:String,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,showCancel:{type:Boolean,default:!0},trigger:{type:[String,Array],default:"click"},placement:{type:String,default:"top"},open:{type:Boolean,default:void 0},defaultOpen:Boolean,disabled:Boolean,arrow:{type:[Boolean,Object],default:!0},mouseEnterDelay:{type:Number,default:.1},mouseLeaveDelay:{type:Number,default:.1},autoAdjustOverflow:{type:Boolean,default:!0},zIndex:Number,destroyOnHidden:Boolean,destroyTooltipOnHide:Boolean,getPopupContainer:Function,overlayStyle:Object,overlayInnerStyle:Object},emits:["update:open","openChange","afterOpenChange","confirm","cancel"],setup(e,{slots:d,emit:r,attrs:a}){const t=H("popconfirm"),u=M(),P=A(e.defaultOpen??!1),O=x(()=>e.open!==void 0),N=x(()=>O.value?e.open:P.value),b=o=>{e.disabled&&o||(O.value||(P.value=o),r("update:open",o),r("openChange",o))},y=(o,l)=>{if(l)return l();if(typeof o=="function")return o();if(o!=null&&o!=="")return o},S=o=>{r("confirm",o),b(!1)},_=o=>{r("cancel",o),b(!1)},L=x(()=>{const o=e.title,l=e.description;return o!=null&&o!==""||l!=null&&l!==""||!!d.title||!!d.description});return()=>{const o=y(e.title,d.title),l=y(e.description,d.description),B=y(e.icon,d.icon),D=e.cancelText??u.value.Modal.cancelText,j=e.okText??u.value.Modal.okText,k=e.okType==="danger",E=k?"primary":e.okType,h=[i("div",{class:`${t}-message`},[B&&i("span",{class:`${t}-message-icon`},B),i("div",{class:`${t}-message-title`},o)])];return l&&h.push(i("div",{class:`${t}-description`},l)),h.push(i("div",{class:`${t}-buttons`},[e.showCancel&&i(T,{size:"small",...e.cancelButtonProps,onClick:_},{default:()=>D}),i(T,{size:"small",type:E,danger:k,...e.okButtonProps,onClick:S},{default:()=>j})])),i(R,{...a,customPrefixCls:t,arrow:e.arrow,placement:e.placement,trigger:e.trigger,open:N.value,defaultOpen:e.defaultOpen,mouseEnterDelay:e.mouseEnterDelay,mouseLeaveDelay:e.mouseLeaveDelay,disabled:e.disabled,autoAdjustOverflow:e.autoAdjustOverflow,zIndex:e.zIndex,destroyOnHidden:e.destroyOnHidden,destroyTooltipOnHide:e.destroyTooltipOnHide,getPopupContainer:e.getPopupContainer,popupStyle:e.overlayStyle,"onUpdate:open":c=>b(c),onAfterOpenChange:c=>r("afterOpenChange",c)},L.value&&!e.disabled?{default:()=>{var c;return(c=d.default)==null?void 0:c.call(d)},title:()=>h}:{default:()=>{var c;return(c=d.default)==null?void 0:c.call(d)}})}}}),K=g({__name:"PopconfirmBasic",setup(e){function d(){console.log("已确认删除")}function r(){console.log("已取消")}return(a,t)=>(m(),w(f(C),{title:"确定要删除吗？","ok-text":"确定","cancel-text":"取消",onConfirm:d,onCancel:r},{default:p(()=>[...t[0]||(t[0]=[n("button",null,"删除",-1)])]),_:1}))}}),U=`<template>
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
`,q=g({__name:"PopconfirmCustomText",setup(e){function d(){console.log("已提交")}return(r,a)=>(m(),w(f(C),{title:"确定要提交吗？",description:"提交后将无法修改，请确认信息无误。","ok-text":"提交","cancel-text":"再想想",onConfirm:d},{default:p(()=>[...a[0]||(a[0]=[n("button",null,"提交",-1)])]),_:1}))}}),G=`<template>
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
`,J={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},Q=g({__name:"PopconfirmPlacement",setup(e){const d=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(r,a)=>(m(),v("div",J,[(m(),v(V,null,$(d,t=>s(f(C),{key:t,placement:t,title:"确定要执行此操作吗？",onConfirm:()=>console.log(t)},{default:p(()=>[n("button",null,I(t),1)]),_:2},1032,["placement","onConfirm"])),64))]))}}),W=`<template>
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
`,X={class:"markdown-body"},nt={__name:"popconfirm",setup(e,{expose:d}){return d({frontmatter:{}}),(a,t)=>{const u=z("DemoBlock");return m(),v("div",X,[t[0]||(t[0]=n("h1",{id:"popconfirm-",tabindex:"-1"},"Popconfirm 气泡确认框",-1)),t[1]||(t[1]=n("p",null,"点击元素，弹出气泡式的确认框。",-1)),t[2]||(t[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户"),n("li",null,"和 confirm 弹出的全屏居中模态对话框相比，交互形式更轻量")],-1)),t[4]||(t[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=n("p",null,"最简单的用法。",-1)),s(u,{title:"基础用法",source:f(U)},{default:p(()=>[s(K)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"-3",tabindex:"-1"},"自定义按钮文字",-1)),t[8]||(t[8]=n("p",null,"自定义确认按钮和取消按钮的文字。",-1)),s(u,{title:"自定义按钮文字",source:f(G)},{default:p(()=>[s(q)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"-4",tabindex:"-1"},"不同位置",-1)),t[10]||(t[10]=n("p",null,"位置有十二个方向。",-1)),s(u,{title:"不同位置",source:f(W)},{default:p(()=>[s(Q)]),_:1},8,["source"]),t[11]||(t[11]=F('<h2 id="api" tabindex="-1">API</h2><h3 id="popconfirm-props" tabindex="-1">Popconfirm Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>确认框标题（空值时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>description</td><td>确认框描述</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>icon</td><td>提示图标，slot 优先级高于 prop</td><td><code>string | VNode | () =&gt; VNode | slot</code></td><td><code>&#39;⚠&#39;</code></td></tr><tr><td>okText</td><td>确认按钮文字</td><td><code>string</code></td><td>locale 默认值</td></tr><tr><td>cancelText</td><td>取消按钮文字</td><td><code>string</code></td><td>locale 默认值</td></tr><tr><td>okType</td><td>确认按钮类型，<code>&#39;danger&#39;</code> 是 <code>primary + danger</code> 的简写</td><td><code>ButtonType | &#39;danger&#39;</code></td><td><code>&#39;primary&#39;</code></td></tr><tr><td>okButtonProps</td><td>确认按钮的额外 props（loading/disabled 等）</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>cancelButtonProps</td><td>取消按钮的额外 props</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>showCancel</td><td>是否显示取消按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>trigger</td><td>触发行为，可设单值或数组</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39; | &#39;contextMenu&#39;</code></td><td><code>&#39;click&#39;</code></td></tr><tr><td>placement</td><td>气泡框位置，溢出视口时自动翻转</td><td>12 个方向（同 Tooltip）</td><td><code>&#39;top&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示（非受控）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>禁用，禁用时点击触发器不会弹出</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>arrow</td><td>是否显示箭头，可对象配置</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入延时显示（trigger=hover），单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出延时隐藏（trigger=hover），单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>autoAdjustOverflow</td><td>浮层超出视口时自动翻转方向</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>自定义浮层 z-index</td><td><code>number</code></td><td><code>1070</code></td></tr><tr><td>destroyOnHidden</td><td>隐藏时销毁浮层 DOM</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getPopupContainer</td><td>自定义浮层挂载容器（默认 <code>body</code>）</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td>-</td></tr><tr><td>overlayStyle</td><td>卡片外层样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr><tr><td>overlayInnerStyle</td><td>卡片内层样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr></tbody></table><h3 id="popconfirm-events" tabindex="-1">Popconfirm Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击确认的回调（携带 MouseEvent）</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>cancel</td><td>点击取消的回调（携带 MouseEvent）</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>update:open</td><td>显示隐藏的回调（v-model）</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>浮层动画结束时触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="popconfirm-slots" tabindex="-1">Popconfirm Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发气泡确认框的元素</td></tr><tr><td>title</td><td>标题（与 <code>title</code> prop 二选一，slot 优先）</td></tr><tr><td>description</td><td>描述（与 <code>description</code> prop 二选一，slot 优先）</td></tr><tr><td>icon</td><td>图标（与 <code>icon</code> prop 二选一，slot 优先）</td></tr></tbody></table>',7))])}}};export{nt as default};
