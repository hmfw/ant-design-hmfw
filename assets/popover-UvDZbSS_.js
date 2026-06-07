import{n as h,M as w,o as f,e as C,z as P,h as D,Q as b,g as o,J as u,j as x,F as I,E as F,m as i,I as j,G as T,l as _,k as $}from"./index-i0jnWELi.js";import{T as L}from"./Tooltip-Ct65oJdk.js";import"./cls-S9IiI6wd.js";const k=h({name:"PopoverPurePanel",inheritAttrs:!1,props:{title:[String,Number,Object,Function],content:[String,Number,Object,Function],placement:{type:String,default:"top"},arrow:{type:[Boolean,Object],default:!0},color:String,overlayInnerStyle:Object,classNames:[Object,Function],styles:[Object,Function]},setup(t,{slots:n,attrs:l}){const c=w("popover"),e=C(()=>t.arrow!==!1),m=(s,d)=>typeof s=="function"?s():s!=null&&s!==""?s:d==null?void 0:d();return()=>{const s=r=>typeof r=="function"?r({props:t}):r,d=s(t.classNames)??{},a=s(t.styles)??{},g=m(t.title,n.title),p=m(t.content,n.content),v=g!=null&&g!=="",S=p!=null&&p!=="",O=[v&&f("div",{class:[`${c}-title`,d.title],style:a.title},g),S&&f("div",{class:[`${c}-inner-content`,d.content],style:a.content},p)].filter(Boolean),N=t.overlayInnerStyle?[f("div",{style:t.overlayInnerStyle},O)]:O,B={};return t.color&&(B["--tooltip-bg"]=t.color),f("div",{...l,class:[`${c}-pure`,c,`${c}-placement-${t.placement}`],style:B},[f("div",{class:`${c}-content`},[e.value&&f("div",{class:`${c}-arrow`}),f("div",{class:`${c}-inner`,role:"tooltip"},N)].filter(Boolean))])}}}),V=h({name:"Popover",inheritAttrs:!1,props:{title:[String,Number,Object,Function],content:[String,Number,Object,Function],placement:{type:String,default:"top"},trigger:{type:[String,Array],default:"hover"},open:{type:Boolean,default:void 0},defaultOpen:Boolean,arrow:{type:[Boolean,Object],default:!0},mouseEnterDelay:{type:Number,default:.1},mouseLeaveDelay:{type:Number,default:.1},disabled:Boolean,overlayStyle:Object,overlayInnerStyle:Object,autoAdjustOverflow:{type:Boolean,default:!0},zIndex:Number,destroyOnHidden:Boolean,destroyTooltipOnHide:Boolean,getPopupContainer:Function,color:String,classNames:[Object,Function],styles:[Object,Function]},emits:["update:open","openChange","afterOpenChange"],setup(t,{slots:n,emit:l,attrs:c}){const e=w("popover"),m=C(()=>{const d=t.title,a=t.content,g=d!=null&&d!==""||!!n.title,p=a!=null&&a!==""||!!n.content;return g||p}),s=(d,a)=>typeof d=="function"?d():d!=null&&d!==""?d:a==null?void 0:a();return()=>{const d=r=>typeof r=="function"?r({props:t}):r,a=d(t.classNames)??{},g=d(t.styles)??{},p=s(t.title,n.title),v=s(t.content,n.content),S=p!=null&&p!=="",O=v!=null&&v!=="",N=[S&&f("div",{class:[`${e}-title`,a.title],style:g.title},p),O&&f("div",{class:[`${e}-inner-content`,a.content],style:g.content},v)].filter(Boolean),B=m.value?t.overlayInnerStyle?f("div",{style:t.overlayInnerStyle},N):N:null;return f(L,{...c,customPrefixCls:e,placement:t.placement,trigger:t.trigger,open:t.open,defaultOpen:t.defaultOpen,arrow:t.arrow,mouseEnterDelay:t.mouseEnterDelay,mouseLeaveDelay:t.mouseLeaveDelay,disabled:t.disabled,autoAdjustOverflow:t.autoAdjustOverflow,zIndex:t.zIndex,destroyOnHidden:t.destroyOnHidden,destroyTooltipOnHide:t.destroyTooltipOnHide,getPopupContainer:t.getPopupContainer,color:t.color,popupStyle:t.overlayStyle,"onUpdate:open":r=>l("update:open",r),onOpenChange:r=>l("openChange",r),onAfterOpenChange:r=>l("afterOpenChange",r)},m.value?{default:()=>{var r;return(r=n.default)==null?void 0:r.call(n)},title:()=>B}:{default:()=>{var r;return(r=n.default)==null?void 0:r.call(n)}})}}}),y=V;y._InternalPanelDoNotUseOrYouWillBeFired=k;const A=h({__name:"PopoverBasic",setup(t){return(n,l)=>(P(),D(u(y),{title:"标题",content:"这是气泡卡片的内容"},{default:b(()=>[...l[0]||(l[0]=[o("button",null,"鼠标移入",-1)])]),_:1}))}}),H=`<template>
  <Popover title="标题" content="这是气泡卡片的内容">
    <button>鼠标移入</button>
  </Popover>
</template>

<script setup lang="ts">
import { Popover } from 'ant-design-hmfw'
<\/script>
`,E={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},U=h({__name:"PopoverPlacement",setup(t){const n=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(l,c)=>(P(),x("div",E,[(P(),x(I,null,F(n,e=>i(u(y),{key:e,placement:e,title:"标题",content:"内容"},{default:b(()=>[o("button",null,j(e),1)]),_:2},1032,["placement"])),64))]))}}),R=`<template>
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
`,W={style:{display:"flex",gap:"24px","flex-wrap":"wrap"}},Y=h({__name:"PopoverPurePanel",setup(t){return(n,l)=>(P(),x("div",W,[i(u(y)._InternalPanelDoNotUseOrYouWillBeFired,{title:"标题",content:"这是直接内联渲染的气泡卡片面板"}),i(u(y)._InternalPanelDoNotUseOrYouWillBeFired,{title:"仅标题",placement:"bottom"}),i(u(y)._InternalPanelDoNotUseOrYouWillBeFired,{content:"无箭头 + 自定义背景色",arrow:!1,color:"#1677ff",styles:{content:{color:"#fff"}}})]))}}),M=`<template>
  <div style="display: flex; gap: 24px; flex-wrap: wrap;">
    <Popover._InternalPanelDoNotUseOrYouWillBeFired
      title="标题"
      content="这是直接内联渲染的气泡卡片面板"
    />
    <Popover._InternalPanelDoNotUseOrYouWillBeFired
      title="仅标题"
      placement="bottom"
    />
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
`,z={style:{display:"flex",gap:"8px"}},G=h({__name:"PopoverTrigger",setup(t){return(n,l)=>(P(),x("div",z,[i(u(y),{title:"悬停触发",content:"鼠标悬停时显示",trigger:"hover"},{default:b(()=>[...l[0]||(l[0]=[o("button",null,"悬停",-1)])]),_:1}),i(u(y),{title:"点击触发",content:"点击时显示",trigger:"click"},{default:b(()=>[...l[1]||(l[1]=[o("button",null,"点击",-1)])]),_:1}),i(u(y),{title:"聚焦触发",content:"聚焦时显示",trigger:"focus"},{default:b(()=>[...l[2]||(l[2]=[o("button",null,"聚焦",-1)])]),_:1})]))}}),J=`<template>
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
`,Q={class:"markdown-body"},Z={__name:"popover",setup(t,{expose:n}){return n({frontmatter:{}}),(c,e)=>{const m=T("DemoBlock");return P(),x("div",Q,[e[0]||(e[0]=o("h1",{id:"popover-",tabindex:"-1"},"Popover 气泡卡片",-1)),e[1]||(e[1]=o("p",null,"点击/鼠标移入元素，弹出气泡式的卡片浮层。",-1)),e[2]||(e[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=o("ul",null,[o("li",null,"当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现"),o("li",null,"和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等")],-1)),e[4]||(e[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=o("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=o("p",null,"最简单的用法，鼠标移入时显示。",-1)),i(m,{title:"基础用法",source:u(H)},{default:b(()=>[i(A)]),_:1},8,["source"]),e[7]||(e[7]=o("h3",{id:"-3",tabindex:"-1"},"触发方式",-1)),e[8]||(e[8]=o("p",null,"鼠标移入、聚集、点击。",-1)),i(m,{title:"触发方式",source:u(J)},{default:b(()=>[i(G)]),_:1},8,["source"]),e[9]||(e[9]=o("h3",{id:"-4",tabindex:"-1"},"十二个方向",-1)),e[10]||(e[10]=o("p",null,"位置有十二个方向。",-1)),i(m,{title:"十二个方向",source:u(R)},{default:b(()=>[i(U)]),_:1},8,["source"]),e[11]||(e[11]=o("h3",{id:"-5",tabindex:"-1"},"纯展示面板",-1)),e[12]||(e[12]=o("p",null,[o("code",null,"Popover._InternalPanelDoNotUseOrYouWillBeFired"),_(" 是内部使用的纯展示面板，仅渲染气泡卡片的外观（标题 + 内容 + 箭头），不含触发与定位逻辑，可直接内联到页面中。常规业务请使用 "),o("code",null,"Popover"),_(" 本身。")],-1)),i(m,{title:"纯展示面板",source:u(M)},{default:b(()=>[i(Y)]),_:1},8,["source"]),e[13]||(e[13]=$('<h2 id="api" tabindex="-1">API</h2><h3 id="popover-props" tabindex="-1">Popover Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>卡片标题（空值时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>content</td><td>卡片内容（与 title 同时为空时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>trigger</td><td>触发行为</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39; | &#39;contextMenu&#39;</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>placement</td><td>气泡框位置，溢出视口时自动翻转</td><td><code>&#39;top&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottom&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;left&#39; | &#39;leftTop&#39; | &#39;leftBottom&#39; | &#39;right&#39; | &#39;rightTop&#39; | &#39;rightBottom&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示（非受控）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>color</td><td>背景颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>arrow</td><td>是否显示箭头，可对象配置</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入后延时显示，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出后延时隐藏，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>disabled</td><td>禁用 popover</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>autoAdjustOverflow</td><td>浮层超出视口时自动翻转方向</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>自定义浮层 z-index</td><td><code>number</code></td><td><code>1070</code></td></tr><tr><td>destroyOnHidden</td><td>隐藏时销毁浮层 DOM</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getPopupContainer</td><td>自定义浮层挂载容器（默认 <code>body</code>）</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td>-</td></tr><tr><td>overlayStyle</td><td>卡片样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr><tr><td>overlayInnerStyle</td><td>卡片内层样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化 DOM 的 className（支持 <code>title</code> / <code>content</code>），可传函数</td><td><code>{ title?, content? } | (info) =&gt; {...}</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 DOM 的内联样式（支持 <code>title</code> / <code>content</code>），可传函数</td><td><code>{ title?, content? } | (info) =&gt; {...}</code></td><td>-</td></tr></tbody></table><h3 id="popover-events" tabindex="-1">Popover Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>显示隐藏的回调（v-model）</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>浮层动画结束时触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="popover-slots" tabindex="-1">Popover Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发气泡卡片的元素</td></tr><tr><td>content</td><td>卡片内容（与 <code>content</code> prop 二选一）</td></tr><tr><td>title</td><td>卡片标题（与 <code>title</code> prop 二选一）</td></tr></tbody></table>',7))])}}};export{Z as default};
