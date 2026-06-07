import{B as x}from"./Button-dLk1ExkL.js";import{n as B,M as C,o as m,e as D,z as h,h as I,Q as c,m as d,J as a,l as b,j as O,F,E as j,I as T,G as $,g as i,k as L}from"./index-DBrYVvYd.js";import{T as k}from"./Tooltip-naksvY3s.js";import"./icons-CTzpiRs0.js";import"./cls-S9IiI6wd.js";import"./Icon-CiCvy_Uq.js";const V=B({name:"PopoverPurePanel",inheritAttrs:!1,props:{title:[String,Number,Object,Function],content:[String,Number,Object,Function],placement:{type:String,default:"top"},arrow:{type:[Boolean,Object],default:!0},color:String,overlayInnerStyle:Object,classNames:[Object,Function],styles:[Object,Function]},setup(t,{slots:o,attrs:l}){const u=C("popover"),e=D(()=>t.arrow!==!1),g=(p,n)=>typeof p=="function"?p():p!=null&&p!==""?p:n==null?void 0:n();return()=>{const p=r=>typeof r=="function"?r({props:t}):r,n=p(t.classNames)??{},s=p(t.styles)??{},y=g(t.title,o.title),f=g(t.content,o.content),P=y!=null&&y!=="",w=f!=null&&f!=="",N=[P&&m("div",{class:[`${u}-title`,n.title],style:s.title},y),w&&m("div",{class:[`${u}-inner-content`,n.content],style:s.content},f)].filter(Boolean),_=t.overlayInnerStyle?[m("div",{style:t.overlayInnerStyle},N)]:N,S={};return t.color&&(S["--tooltip-bg"]=t.color),m("div",{...l,class:[`${u}-pure`,u,`${u}-placement-${t.placement}`],style:S},[m("div",{class:`${u}-content`},[e.value&&m("div",{class:`${u}-arrow`}),m("div",{class:`${u}-inner`,role:"tooltip"},_)].filter(Boolean))])}}}),A=B({name:"Popover",inheritAttrs:!1,props:{title:[String,Number,Object,Function],content:[String,Number,Object,Function],placement:{type:String,default:"top"},trigger:{type:[String,Array],default:"hover"},open:{type:Boolean,default:void 0},defaultOpen:Boolean,arrow:{type:[Boolean,Object],default:!0},mouseEnterDelay:{type:Number,default:.1},mouseLeaveDelay:{type:Number,default:.1},disabled:Boolean,overlayStyle:Object,overlayInnerStyle:Object,autoAdjustOverflow:{type:Boolean,default:!0},zIndex:Number,destroyOnHidden:Boolean,destroyTooltipOnHide:Boolean,getPopupContainer:Function,color:String,classNames:[Object,Function],styles:[Object,Function]},emits:["update:open","openChange","afterOpenChange"],setup(t,{slots:o,emit:l,attrs:u}){const e=C("popover"),g=D(()=>{const n=t.title,s=t.content,y=n!=null&&n!==""||!!o.title,f=s!=null&&s!==""||!!o.content;return y||f}),p=(n,s)=>typeof n=="function"?n():n!=null&&n!==""?n:s==null?void 0:s();return()=>{const n=r=>typeof r=="function"?r({props:t}):r,s=n(t.classNames)??{},y=n(t.styles)??{},f=p(t.title,o.title),P=p(t.content,o.content),w=f!=null&&f!=="",N=P!=null&&P!=="",_=[w&&m("div",{class:[`${e}-title`,s.title],style:y.title},f),N&&m("div",{class:[`${e}-inner-content`,s.content],style:y.content},P)].filter(Boolean),S=g.value?t.overlayInnerStyle?m("div",{style:t.overlayInnerStyle},_):_:null;return m(k,{...u,customPrefixCls:e,placement:t.placement,trigger:t.trigger,open:t.open,defaultOpen:t.defaultOpen,arrow:t.arrow,mouseEnterDelay:t.mouseEnterDelay,mouseLeaveDelay:t.mouseLeaveDelay,disabled:t.disabled,autoAdjustOverflow:t.autoAdjustOverflow,zIndex:t.zIndex,destroyOnHidden:t.destroyOnHidden,destroyTooltipOnHide:t.destroyTooltipOnHide,getPopupContainer:t.getPopupContainer,color:t.color,popupStyle:t.overlayStyle,"onUpdate:open":r=>l("update:open",r),onOpenChange:r=>l("openChange",r),onAfterOpenChange:r=>l("afterOpenChange",r)},g.value?{default:()=>{var r;return(r=o.default)==null?void 0:r.call(o)},title:()=>S}:{default:()=>{var r;return(r=o.default)==null?void 0:r.call(o)}})}}}),v=A;v._InternalPanelDoNotUseOrYouWillBeFired=V;const H=B({__name:"PopoverBasic",setup(t){return(o,l)=>(h(),I(a(v),{title:"标题",content:"这是气泡卡片的内容"},{default:c(()=>[d(a(x),null,{default:c(()=>[...l[0]||(l[0]=[b("鼠标移入",-1)])]),_:1})]),_:1}))}}),E=`<template>
  <Popover title="标题" content="这是气泡卡片的内容">
    <Button>鼠标移入</Button>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, Button } from 'ant-design-hmfw'
<\/script>
`,U={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},R=B({__name:"PopoverPlacement",setup(t){const o=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(l,u)=>(h(),O("div",U,[(h(),O(F,null,j(o,e=>d(a(v),{key:e,placement:e,title:"标题",content:"内容"},{default:c(()=>[d(a(x),null,{default:c(()=>[b(T(e),1)]),_:2},1024)]),_:2},1032,["placement"])),64))]))}}),W=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Popover v-for="placement in placements" :key="placement" :placement="placement" title="标题" content="内容">
      <Button>{{ placement }}</Button>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover, Button } from 'ant-design-hmfw'

const placements = [
  'topLeft',
  'top',
  'topRight',
  'leftTop',
  'left',
  'leftBottom',
  'rightTop',
  'right',
  'rightBottom',
  'bottomLeft',
  'bottom',
  'bottomRight',
]
<\/script>
`,Y={style:{display:"flex",gap:"24px","flex-wrap":"wrap"}},M=B({__name:"PopoverPurePanel",setup(t){return(o,l)=>(h(),O("div",Y,[d(a(v)._InternalPanelDoNotUseOrYouWillBeFired,{title:"标题",content:"这是直接内联渲染的气泡卡片面板"}),d(a(v)._InternalPanelDoNotUseOrYouWillBeFired,{title:"仅标题",placement:"bottom"}),d(a(v)._InternalPanelDoNotUseOrYouWillBeFired,{content:"无箭头 + 自定义背景色",arrow:!1,color:"#1677ff",styles:{content:{color:"#fff"}}})]))}}),z=`<template>
  <div style="display: flex; gap: 24px; flex-wrap: wrap">
    <Popover._InternalPanelDoNotUseOrYouWillBeFired title="标题" content="这是直接内联渲染的气泡卡片面板" />
    <Popover._InternalPanelDoNotUseOrYouWillBeFired title="仅标题" placement="bottom" />
    <Popover._InternalPanelDoNotUseOrYouWillBeFired
      content="无箭头 + 自定义背景色"
      :arrow="false"
      color="#1677ff"
      :styles="{ content: { color: '#fff' } }"
    />
  </div>
</template>

<script setup lang="ts">
import { Popover } from 'ant-design-hmfw'
<\/script>
`,G={style:{display:"flex",gap:"8px"}},J=B({__name:"PopoverTrigger",setup(t){return(o,l)=>(h(),O("div",G,[d(a(v),{title:"悬停触发",content:"鼠标悬停时显示",trigger:"hover"},{default:c(()=>[d(a(x),null,{default:c(()=>[...l[0]||(l[0]=[b("悬停",-1)])]),_:1})]),_:1}),d(a(v),{title:"点击触发",content:"点击时显示",trigger:"click"},{default:c(()=>[d(a(x),null,{default:c(()=>[...l[1]||(l[1]=[b("点击",-1)])]),_:1})]),_:1}),d(a(v),{title:"聚焦触发",content:"聚焦时显示",trigger:"focus"},{default:c(()=>[d(a(x),null,{default:c(()=>[...l[2]||(l[2]=[b("聚焦",-1)])]),_:1})]),_:1})]))}}),Q=`<template>
  <div style="display: flex; gap: 8px">
    <Popover title="悬停触发" content="鼠标悬停时显示" trigger="hover">
      <Button>悬停</Button>
    </Popover>
    <Popover title="点击触发" content="点击时显示" trigger="click">
      <Button>点击</Button>
    </Popover>
    <Popover title="聚焦触发" content="聚焦时显示" trigger="focus">
      <Button>聚焦</Button>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover, Button } from 'ant-design-hmfw'
<\/script>
`,q={class:"markdown-body"},nt={__name:"popover",setup(t,{expose:o}){return o({frontmatter:{}}),(u,e)=>{const g=$("DemoBlock");return h(),O("div",q,[e[0]||(e[0]=i("h1",{id:"popover-",tabindex:"-1"},"Popover 气泡卡片",-1)),e[1]||(e[1]=i("p",null,"点击/鼠标移入元素，弹出气泡式的卡片浮层。",-1)),e[2]||(e[2]=i("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=i("ul",null,[i("li",null,"当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现"),i("li",null,"和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等")],-1)),e[4]||(e[4]=i("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=i("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=i("p",null,"最简单的用法，鼠标移入时显示。",-1)),d(g,{title:"基础用法",source:a(E)},{default:c(()=>[d(H)]),_:1},8,["source"]),e[7]||(e[7]=i("h3",{id:"-3",tabindex:"-1"},"触发方式",-1)),e[8]||(e[8]=i("p",null,"鼠标移入、聚集、点击。",-1)),d(g,{title:"触发方式",source:a(Q)},{default:c(()=>[d(J)]),_:1},8,["source"]),e[9]||(e[9]=i("h3",{id:"-4",tabindex:"-1"},"十二个方向",-1)),e[10]||(e[10]=i("p",null,"位置有十二个方向。",-1)),d(g,{title:"十二个方向",source:a(W)},{default:c(()=>[d(R)]),_:1},8,["source"]),e[11]||(e[11]=i("h3",{id:"-5",tabindex:"-1"},"纯展示面板",-1)),e[12]||(e[12]=i("p",null,[i("code",null,"Popover._InternalPanelDoNotUseOrYouWillBeFired"),b(" 是内部使用的纯展示面板，仅渲染气泡卡片的外观（标题 + 内容 + 箭头），不含触发与定位逻辑，可直接内联到页面中。常规业务请使用 "),i("code",null,"Popover"),b(" 本身。")],-1)),d(g,{title:"纯展示面板",source:a(z)},{default:c(()=>[d(M)]),_:1},8,["source"]),e[13]||(e[13]=L('<h2 id="api" tabindex="-1">API</h2><h3 id="popover-props" tabindex="-1">Popover Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>卡片标题（空值时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>content</td><td>卡片内容（与 title 同时为空时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>trigger</td><td>触发行为</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39; | &#39;contextMenu&#39;</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>placement</td><td>气泡框位置，溢出视口时自动翻转</td><td><code>&#39;top&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottom&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;left&#39; | &#39;leftTop&#39; | &#39;leftBottom&#39; | &#39;right&#39; | &#39;rightTop&#39; | &#39;rightBottom&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示（非受控）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>color</td><td>背景颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>arrow</td><td>是否显示箭头，可对象配置</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入后延时显示，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出后延时隐藏，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>disabled</td><td>禁用 popover</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>autoAdjustOverflow</td><td>浮层超出视口时自动翻转方向</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>自定义浮层 z-index</td><td><code>number</code></td><td><code>1070</code></td></tr><tr><td>destroyOnHidden</td><td>隐藏时销毁浮层 DOM</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getPopupContainer</td><td>自定义浮层挂载容器（默认 <code>body</code>）</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td>-</td></tr><tr><td>overlayStyle</td><td>卡片样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr><tr><td>overlayInnerStyle</td><td>卡片内层样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化 DOM 的 className（支持 <code>title</code> / <code>content</code>），可传函数</td><td><code>{ title?, content? } | (info) =&gt; {...}</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 DOM 的内联样式（支持 <code>title</code> / <code>content</code>），可传函数</td><td><code>{ title?, content? } | (info) =&gt; {...}</code></td><td>-</td></tr></tbody></table><h3 id="popover-events" tabindex="-1">Popover Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>显示隐藏的回调（v-model）</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>浮层动画结束时触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="popover-slots" tabindex="-1">Popover Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发气泡卡片的元素</td></tr><tr><td>content</td><td>卡片内容（与 <code>content</code> prop 二选一）</td></tr><tr><td>title</td><td>卡片标题（与 <code>title</code> prop 二选一）</td></tr></tbody></table>',7))])}}};export{nt as default};
