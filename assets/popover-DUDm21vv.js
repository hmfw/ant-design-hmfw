import{m as b,L as x,n as m,d as P,y as f,g as O,P as p,f as o,I as u,i as g,F as B,D as C,l as i,H as S,E as w,j as N}from"./index-Qxz1plB-.js";import{T}from"./Tooltip-CvQ21N0f.js";import"./cls-S9IiI6wd.js";const s=b({name:"Popover",inheritAttrs:!1,props:{title:[String,Number,Object,Function],content:[String,Number,Object,Function],placement:{type:String,default:"top"},trigger:{type:[String,Array],default:"hover"},open:{type:Boolean,default:void 0},defaultOpen:Boolean,arrow:{type:[Boolean,Object],default:!0},mouseEnterDelay:{type:Number,default:.1},mouseLeaveDelay:{type:Number,default:.1},disabled:Boolean,overlayStyle:Object,overlayInnerStyle:Object,autoAdjustOverflow:{type:Boolean,default:!0},zIndex:Number,destroyOnHidden:Boolean,destroyTooltipOnHide:Boolean,getPopupContainer:Function,color:String},emits:["update:open","openChange","afterOpenChange"],setup(e,{slots:d,emit:n,attrs:v}){const t=x("popover"),c=P(()=>{const r=e.title,a=e.content,y=r!=null&&r!==""||!!d.title,l=a!=null&&a!==""||!!d.content;return y||l}),h=(r,a)=>typeof r=="function"?r():r!=null&&r!==""?r:a==null?void 0:a();return()=>{const r=h(e.title,d.title),a=h(e.content,d.content),y=c.value?m("div",{class:`${t}-inner`,style:e.overlayInnerStyle},[r!=null&&r!==""&&m("div",{class:`${t}-title`},r),m("div",{class:`${t}-inner-content`},a)]):null;return m(T,{...v,customPrefixCls:t,placement:e.placement,trigger:e.trigger,open:e.open,defaultOpen:e.defaultOpen,arrow:e.arrow,mouseEnterDelay:e.mouseEnterDelay,mouseLeaveDelay:e.mouseLeaveDelay,disabled:e.disabled,autoAdjustOverflow:e.autoAdjustOverflow,zIndex:e.zIndex,destroyOnHidden:e.destroyOnHidden,destroyTooltipOnHide:e.destroyTooltipOnHide,getPopupContainer:e.getPopupContainer,color:e.color,popupStyle:e.overlayStyle,"onUpdate:open":l=>n("update:open",l),onOpenChange:l=>n("openChange",l),onAfterOpenChange:l=>n("afterOpenChange",l)},c.value?{default:()=>{var l;return(l=d.default)==null?void 0:l.call(d)},title:()=>y}:{default:()=>{var l;return(l=d.default)==null?void 0:l.call(d)}})}}}),_=b({__name:"PopoverBasic",setup(e){return(d,n)=>(f(),O(u(s),{title:"标题",content:"这是气泡卡片的内容"},{default:p(()=>[...n[0]||(n[0]=[o("button",null,"鼠标移入",-1)])]),_:1}))}}),L=`<template>
  <Popover title="标题" content="这是气泡卡片的内容">
    <button>鼠标移入</button>
  </Popover>
</template>

<script setup lang="ts">
import { Popover } from 'ant-design-hmfw'
<\/script>
`,D={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},H=b({__name:"PopoverPlacement",setup(e){const d=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(n,v)=>(f(),g("div",D,[(f(),g(B,null,C(d,t=>i(u(s),{key:t,placement:t,title:"标题",content:"内容"},{default:p(()=>[o("button",null,S(t),1)]),_:2},1032,["placement"])),64))]))}}),k=`<template>
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
`,j={style:{display:"flex",gap:"8px"}},A=b({__name:"PopoverTrigger",setup(e){return(d,n)=>(f(),g("div",j,[i(u(s),{title:"悬停触发",content:"鼠标悬停时显示",trigger:"hover"},{default:p(()=>[...n[0]||(n[0]=[o("button",null,"悬停",-1)])]),_:1}),i(u(s),{title:"点击触发",content:"点击时显示",trigger:"click"},{default:p(()=>[...n[1]||(n[1]=[o("button",null,"点击",-1)])]),_:1}),i(u(s),{title:"聚焦触发",content:"聚焦时显示",trigger:"focus"},{default:p(()=>[...n[2]||(n[2]=[o("button",null,"聚焦",-1)])]),_:1})]))}}),E=`<template>
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
`,I={class:"markdown-body"},z={__name:"popover",setup(e,{expose:d}){return d({frontmatter:{}}),(v,t)=>{const c=w("DemoBlock");return f(),g("div",I,[t[0]||(t[0]=o("h1",{id:"popover-",tabindex:"-1"},"Popover 气泡卡片",-1)),t[1]||(t[1]=o("p",null,"点击/鼠标移入元素，弹出气泡式的卡片浮层。",-1)),t[2]||(t[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=o("ul",null,[o("li",null,"当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现"),o("li",null,"和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等")],-1)),t[4]||(t[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=o("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=o("p",null,"最简单的用法，鼠标移入时显示。",-1)),i(c,{title:"基础用法",source:u(L)},{default:p(()=>[i(_)]),_:1},8,["source"]),t[7]||(t[7]=o("h3",{id:"-3",tabindex:"-1"},"触发方式",-1)),t[8]||(t[8]=o("p",null,"鼠标移入、聚集、点击。",-1)),i(c,{title:"触发方式",source:u(E)},{default:p(()=>[i(A)]),_:1},8,["source"]),t[9]||(t[9]=o("h3",{id:"-4",tabindex:"-1"},"十二个方向",-1)),t[10]||(t[10]=o("p",null,"位置有十二个方向。",-1)),i(c,{title:"十二个方向",source:u(k)},{default:p(()=>[i(H)]),_:1},8,["source"]),t[11]||(t[11]=N('<h2 id="api" tabindex="-1">API</h2><h3 id="popover-props" tabindex="-1">Popover Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>卡片标题（空值时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>content</td><td>卡片内容（与 title 同时为空时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>trigger</td><td>触发行为</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39; | &#39;contextMenu&#39;</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>placement</td><td>气泡框位置，溢出视口时自动翻转</td><td><code>&#39;top&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottom&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;left&#39; | &#39;leftTop&#39; | &#39;leftBottom&#39; | &#39;right&#39; | &#39;rightTop&#39; | &#39;rightBottom&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示（非受控）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>color</td><td>背景颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>arrow</td><td>是否显示箭头，可对象配置</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入后延时显示，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出后延时隐藏，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>disabled</td><td>禁用 popover</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>autoAdjustOverflow</td><td>浮层超出视口时自动翻转方向</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>自定义浮层 z-index</td><td><code>number</code></td><td><code>1070</code></td></tr><tr><td>destroyOnHidden</td><td>隐藏时销毁浮层 DOM</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getPopupContainer</td><td>自定义浮层挂载容器（默认 <code>body</code>）</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td>-</td></tr><tr><td>overlayStyle</td><td>卡片样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr><tr><td>overlayInnerStyle</td><td>卡片内层样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr></tbody></table><h3 id="popover-events" tabindex="-1">Popover Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>显示隐藏的回调（v-model）</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>浮层动画结束时触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="popover-slots" tabindex="-1">Popover Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发气泡卡片的元素</td></tr><tr><td>content</td><td>卡片内容（与 <code>content</code> prop 二选一）</td></tr><tr><td>title</td><td>卡片标题（与 <code>title</code> prop 二选一）</td></tr></tbody></table>',7))])}}};export{z as default};
