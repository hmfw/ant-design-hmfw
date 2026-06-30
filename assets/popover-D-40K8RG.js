import{B as v}from"./Button-C1GEWIg_.js";import{o as P,O,p as k,f as C,A as x,i as _,S as a,n as e,L as s,m as i,k as h,h as o,E as T,_ as D,F as I,G as F,K as E,H as $,l as j}from"./index-8XlzfTv5.js";import{T as z}from"./Tooltip-DzhyL8cd.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-DqorBNRC.js";import"./Trigger-B5otcy1E.js";const A=P({name:"PopoverPurePanel",inheritAttrs:!1,props:{title:[String,Number,Object,Function],content:[String,Number,Object,Function],placement:{type:String,default:"top"},arrow:{type:[Boolean,Object],default:!0},color:String,overlayInnerStyle:Object,classNames:[Object,Function],styles:[Object,Function]},setup(n,{slots:l,attrs:p}){const u=O("popover"),t=C(()=>n.arrow!==!1),g=(f,d)=>typeof f=="function"?f():f!=null&&f!==""?f:d==null?void 0:d();return()=>{const f=r=>typeof r=="function"?r({props:n}):r,d=f(n.classNames)??{},m=f(n.styles)??{},b=g(n.title,l.title),y=g(n.content,l.content),B=b!=null&&b!=="",S=y!=null&&y!=="",q=[B&&k("div",{class:[`${u}-title`,d.title],style:m.title},b),S&&k("div",{class:[`${u}-inner-content`,d.content],style:m.content},y)].filter(Boolean),N=n.overlayInnerStyle?[k("div",{style:n.overlayInnerStyle},q)]:q,w={};return n.color&&(w["--tooltip-bg"]=n.color),k("div",{...p,class:[`${u}-pure`,u,`${u}-placement-${n.placement}`],style:w},[k("div",{class:`${u}-content`},[t.value&&k("div",{class:`${u}-arrow`}),k("div",{class:`${u}-inner`,role:"tooltip"},N)].filter(Boolean))])}}}),L=P({name:"Popover",inheritAttrs:!1,props:{title:[String,Number,Object,Function],content:[String,Number,Object,Function],placement:{type:String,default:"top"},trigger:{type:[String,Array],default:"hover"},open:{type:Boolean,default:void 0},defaultOpen:Boolean,arrow:{type:[Boolean,Object],default:!0},mouseEnterDelay:{type:Number,default:.1},mouseLeaveDelay:{type:Number,default:.1},disabled:Boolean,overlayStyle:Object,overlayInnerStyle:Object,autoAdjustOverflow:{type:Boolean,default:!0},zIndex:Number,destroyOnHidden:Boolean,destroyTooltipOnHide:Boolean,getPopupContainer:Function,color:String,classNames:[Object,Function],styles:[Object,Function]},emits:["update:open","openChange","afterOpenChange"],setup(n,{slots:l,emit:p,attrs:u}){const t=O("popover"),g=C(()=>{const d=n.title,m=n.content,b=d!=null&&d!==""||!!l.title,y=m!=null&&m!==""||!!l.content;return b||y}),f=(d,m)=>typeof d=="function"?d():d!=null&&d!==""?d:m==null?void 0:m();return()=>{const d=r=>typeof r=="function"?r({props:n}):r,m=d(n.classNames)??{},b=d(n.styles)??{},y=f(n.title,l.title),B=f(n.content,l.content),S=y!=null&&y!=="",q=B!=null&&B!=="",N=[S&&k("div",{class:[`${t}-title`,m.title],style:b.title},y),q&&k("div",{class:[`${t}-inner-content`,m.content],style:b.content},B)].filter(Boolean),w=g.value?n.overlayInnerStyle?k("div",{style:n.overlayInnerStyle},N):N:null;return k(z,{...u,customPrefixCls:t,placement:n.placement,trigger:n.trigger,open:n.open,defaultOpen:n.defaultOpen,arrow:n.arrow,mouseEnterDelay:n.mouseEnterDelay,mouseLeaveDelay:n.mouseLeaveDelay,disabled:n.disabled,autoAdjustOverflow:n.autoAdjustOverflow,zIndex:n.zIndex,destroyOnHidden:n.destroyOnHidden,destroyTooltipOnHide:n.destroyTooltipOnHide,getPopupContainer:n.getPopupContainer,color:n.color,popupStyle:n.overlayStyle,"onUpdate:open":r=>p("update:open",r),onOpenChange:r=>p("openChange",r),onAfterOpenChange:r=>p("afterOpenChange",r)},g.value?{default:()=>{var r;return(r=l.default)==null?void 0:r.call(l)},title:()=>w}:{default:()=>{var r;return(r=l.default)==null?void 0:r.call(l)}})}}}),c=L;c._InternalPanelDoNotUseOrYouWillBeFired=A;const H=P({__name:"PopoverBasic",setup(n){return(l,p)=>(x(),_(s(c),{title:"标题",content:"这是气泡卡片的内容"},{default:a(()=>[e(s(v),null,{default:a(()=>[...p[0]||(p[0]=[i("鼠标移入",-1)])]),_:1})]),_:1}))}}),R=`<template>
  <Popover title="标题" content="这是气泡卡片的内容">
    <Button>鼠标移入</Button>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, Button } from '@hmfw/ant-design'
<\/script>
`,V={style:{display:"flex","flex-direction":"column",gap:"20px"}},W=P({__name:"PopoverClassNames",setup(n){const l=T("动态标题"),p=()=>{l.value=l.value?"":"动态标题"};return(u,t)=>(x(),h("div",V,[o("div",null,[t[1]||(t[1]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义标题样式：",-1)),e(s(c),{title:"渐变标题",content:"这是一段内容，展示自定义标题的效果","class-names":{title:"custom-title"}},{default:a(()=>[e(s(v),null,{default:a(()=>[...t[0]||(t[0]=[i("渐变标题",-1)])]),_:1})]),_:1})]),o("div",null,[t[3]||(t[3]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义内容样式：",-1)),e(s(c),{title:"通知",content:"您有 3 条新消息未读","class-names":{content:"custom-content"}},{default:a(()=>[e(s(v),null,{default:a(()=>[...t[2]||(t[2]=[i("查看通知",-1)])]),_:1})]),_:1})]),o("div",null,[t[5]||(t[5]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"同时自定义标题和内容：",-1)),e(s(c),{title:"完整自定义",content:"标题和内容都应用了自定义样式","class-names":{title:"combined-title",content:"combined-content"}},{default:a(()=>[e(s(v),{type:"primary"},{default:a(()=>[...t[4]||(t[4]=[i("完整示例",-1)])]),_:1})]),_:1})]),o("div",null,[t[7]||(t[7]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式（styles）：",-1)),e(s(c),{title:"内联样式标题",content:"使用 styles 属性控制样式",styles:{title:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",padding:"12px 16px",fontWeight:"bold",borderRadius:"4px 4px 0 0"},content:{background:"#f0f5ff",padding:"16px",fontSize:"14px"}}},{default:a(()=>[e(s(v),null,{default:a(()=>[...t[6]||(t[6]=[i("内联样式",-1)])]),_:1})]),_:1})]),o("div",null,[t[10]||(t[10]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"函数形式动态计算样式：",-1)),e(s(c),{title:l.value,content:"根据 props 动态计算样式","class-names":g=>({title:g.props.title?"has-title":"no-title",content:"dynamic-content"})},{default:a(()=>[e(s(v),null,{default:a(()=>[...t[8]||(t[8]=[i("动态样式",-1)])]),_:1})]),_:1},8,["title","class-names"]),e(s(v),{style:{"margin-left":"8px"},size:"small",onClick:p},{default:a(()=>[...t[9]||(t[9]=[i(" 切换标题 ",-1)])]),_:1})]),o("div",null,[t[12]||(t[12]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"仅内容（无标题）：",-1)),e(s(c),{content:"这是一段没有标题的提示内容","class-names":{content:"content-only"}},{default:a(()=>[e(s(v),null,{default:a(()=>[...t[11]||(t[11]=[i("仅内容",-1)])]),_:1})]),_:1})])]))}}),U=D(W,[["__scopeId","data-v-e11c038f"]]),Y=`<template>
  <div style="display: flex; flex-direction: column; gap: 20px">
    <!-- 自定义标题样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义标题样式：</div>
      <Popover title="渐变标题" content="这是一段内容，展示自定义标题的效果" :class-names="{ title: 'custom-title' }">
        <Button>渐变标题</Button>
      </Popover>
    </div>

    <!-- 自定义内容样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义内容样式：</div>
      <Popover title="通知" content="您有 3 条新消息未读" :class-names="{ content: 'custom-content' }">
        <Button>查看通知</Button>
      </Popover>
    </div>

    <!-- 组合使用 classNames -->
    <div>
      <div style="margin-bottom: 8px; color: #666">同时自定义标题和内容：</div>
      <Popover
        title="完整自定义"
        content="标题和内容都应用了自定义样式"
        :class-names="{
          title: 'combined-title',
          content: 'combined-content',
        }"
      >
        <Button type="primary">完整示例</Button>
      </Popover>
    </div>

    <!-- 使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式（styles）：</div>
      <Popover
        title="内联样式标题"
        content="使用 styles 属性控制样式"
        :styles="{
          title: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '12px 16px',
            fontWeight: 'bold',
            borderRadius: '4px 4px 0 0',
          },
          content: {
            background: '#f0f5ff',
            padding: '16px',
            fontSize: '14px',
          },
        }"
      >
        <Button>内联样式</Button>
      </Popover>
    </div>

    <!-- 函数形式（动态计算） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">函数形式动态计算样式：</div>
      <Popover
        :title="dynamicTitle"
        content="根据 props 动态计算样式"
        :class-names="
          (info) => ({
            title: info.props.title ? 'has-title' : 'no-title',
            content: 'dynamic-content',
          })
        "
      >
        <Button>动态样式</Button>
      </Popover>
      <Button style="margin-left: 8px" size="small" @click="toggleTitle"> 切换标题 </Button>
    </div>

    <!-- 无标题场景 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">仅内容（无标题）：</div>
      <Popover content="这是一段没有标题的提示内容" :class-names="{ content: 'content-only' }">
        <Button>仅内容</Button>
      </Popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Popover, Button } from '@hmfw/ant-design'

const dynamicTitle = ref('动态标题')

const toggleTitle = () => {
  dynamicTitle.value = dynamicTitle.value ? '' : '动态标题'
}
<\/script>

<style scoped>
:deep(.custom-title) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 16px;
  font-weight: bold;
  border-radius: 4px 4px 0 0;
  margin: -12px -16px 8px;
}

:deep(.custom-content) {
  background: #f0f5ff;
  padding: 16px;
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  border-radius: 4px;
}

:deep(.combined-title) {
  color: #722ed1;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 2px solid #722ed1;
  padding-bottom: 8px;
  margin-bottom: 12px;
}

:deep(.combined-content) {
  color: #1890ff;
  line-height: 1.8;
  font-size: 13px;
}

:deep(.has-title) {
  background: #e6f7ff;
  padding: 8px 12px;
  border-radius: 4px;
  margin: -8px -12px 8px;
}

:deep(.no-title) {
  /* 无标题时不应用样式 */
}

:deep(.dynamic-content) {
  font-style: italic;
  color: #595959;
}

:deep(.content-only) {
  background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(253, 203, 110, 0.3);
}
</style>
`,M={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},G=P({__name:"PopoverPlacement",setup(n){const l=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(p,u)=>(x(),h("div",M,[(x(),h(I,null,F(l,t=>e(s(c),{key:t,placement:t,title:"标题",content:"内容"},{default:a(()=>[e(s(v),null,{default:a(()=>[i(E(t),1)]),_:2},1024)]),_:2},1032,["placement"])),64))]))}}),K=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Popover v-for="placement in placements" :key="placement" :placement="placement" title="标题" content="内容">
      <Button>{{ placement }}</Button>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover, Button } from '@hmfw/ant-design'

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
`,J={style:{display:"flex",gap:"24px","flex-wrap":"wrap"}},Q=P({__name:"PopoverPurePanel",setup(n){return(l,p)=>(x(),h("div",J,[e(s(c)._InternalPanelDoNotUseOrYouWillBeFired,{title:"标题",content:"这是直接内联渲染的气泡卡片面板"}),e(s(c)._InternalPanelDoNotUseOrYouWillBeFired,{title:"仅标题",placement:"bottom"}),e(s(c)._InternalPanelDoNotUseOrYouWillBeFired,{content:"无箭头 + 自定义背景色",arrow:!1,color:"#1677ff",styles:{content:{color:"#fff"}}})]))}}),X=`<template>
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
import { Popover } from '@hmfw/ant-design'
<\/script>
`,Z={style:{display:"flex",gap:"8px"}},tt=P({__name:"PopoverTrigger",setup(n){return(l,p)=>(x(),h("div",Z,[e(s(c),{title:"悬停触发",content:"鼠标悬停时显示",trigger:"hover"},{default:a(()=>[e(s(v),null,{default:a(()=>[...p[0]||(p[0]=[i("悬停",-1)])]),_:1})]),_:1}),e(s(c),{title:"点击触发",content:"点击时显示",trigger:"click"},{default:a(()=>[e(s(v),null,{default:a(()=>[...p[1]||(p[1]=[i("点击",-1)])]),_:1})]),_:1}),e(s(c),{title:"聚焦触发",content:"聚焦时显示",trigger:"focus"},{default:a(()=>[e(s(v),null,{default:a(()=>[...p[2]||(p[2]=[i("聚焦",-1)])]),_:1})]),_:1})]))}}),nt=`<template>
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
import { Popover, Button } from '@hmfw/ant-design'
<\/script>
`,et={class:"markdown-body"},rt={__name:"popover",setup(n,{expose:l}){return l({frontmatter:{}}),(u,t)=>{const g=$("DemoBlock");return x(),h("div",et,[t[0]||(t[0]=o("h1",{id:"popover-气泡卡片",tabindex:"-1"},"Popover 气泡卡片",-1)),t[1]||(t[1]=o("p",null,"点击/鼠标移入元素，弹出气泡式的卡片浮层。",-1)),t[2]||(t[2]=o("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=o("ul",null,[o("li",null,"当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现"),o("li",null,"和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等")],-1)),t[4]||(t[4]=o("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=o("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=o("p",null,"最简单的用法，鼠标移入时显示。",-1)),e(g,{title:"基础用法",source:s(R)},{default:a(()=>[e(H)]),_:1},8,["source"]),t[7]||(t[7]=o("h3",{id:"触发方式",tabindex:"-1"},"触发方式",-1)),t[8]||(t[8]=o("p",null,"鼠标移入、聚集、点击。",-1)),e(g,{title:"触发方式",source:s(nt)},{default:a(()=>[e(tt)]),_:1},8,["source"]),t[9]||(t[9]=o("h3",{id:"十二个方向",tabindex:"-1"},"十二个方向",-1)),t[10]||(t[10]=o("p",null,"位置有十二个方向。",-1)),e(g,{title:"十二个方向",source:s(K)},{default:a(()=>[e(G)]),_:1},8,["source"]),t[11]||(t[11]=o("h3",{id:"纯展示面板",tabindex:"-1"},"纯展示面板",-1)),t[12]||(t[12]=o("p",null,[o("code",null,"Popover._InternalPanelDoNotUseOrYouWillBeFired"),i(" 是内部使用的纯展示面板，仅渲染气泡卡片的外观（标题 + 内容 + 箭头），不含触发与定位逻辑，可直接内联到页面中。常规业务请使用 "),o("code",null,"Popover"),i(" 本身。")],-1)),e(g,{title:"纯展示面板",source:s(X)},{default:a(()=>[e(Q)]),_:1},8,["source"]),t[13]||(t[13]=o("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[14]||(t[14]=o("p",null,[i("通过 "),o("code",null,"classNames"),i(" / "),o("code",null,"styles"),i(" 对标题和内容做细粒度样式控制，支持函数形式动态计算。")],-1)),e(g,{title:"语义化 className 与 style",source:s(Y)},{default:a(()=>[e(U)]),_:1},8,["source"]),t[15]||(t[15]=j(`<h2 id="api" tabindex="-1">API</h2><h3 id="popover-props" tabindex="-1">Popover Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>卡片标题（空值时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>content</td><td>卡片内容（与 title 同时为空时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>trigger</td><td>触发行为</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39; | &#39;contextMenu&#39;</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>placement</td><td>气泡框位置，溢出视口时自动翻转</td><td><code>&#39;top&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottom&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;left&#39; | &#39;leftTop&#39; | &#39;leftBottom&#39; | &#39;right&#39; | &#39;rightTop&#39; | &#39;rightBottom&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示（非受控）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>color</td><td>背景颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>arrow</td><td>是否显示箭头，可对象配置</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入后延时显示，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出后延时隐藏，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>disabled</td><td>禁用 popover</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>autoAdjustOverflow</td><td>浮层超出视口时自动翻转方向</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>自定义浮层 z-index</td><td><code>number</code></td><td><code>1070</code></td></tr><tr><td>destroyOnHidden</td><td>隐藏时销毁浮层 DOM</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getPopupContainer</td><td>自定义浮层挂载容器（默认 <code>body</code>）</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td>-</td></tr><tr><td>overlayStyle</td><td>卡片样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr><tr><td>overlayInnerStyle</td><td>卡片内层样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>{ title?, content? } | (info) =&gt; {...}</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>{ title?, content? } | (info) =&gt; {...}</code></td><td>-</td></tr></tbody></table><h3 id="popover-events" tabindex="-1">Popover Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>显示隐藏的回调（v-model）</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>浮层动画结束时触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="popover-slots" tabindex="-1">Popover Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发气泡卡片的元素</td></tr><tr><td>content</td><td>卡片内容（与 <code>content</code> prop 二选一）</td></tr><tr><td>title</td><td>卡片标题（与 <code>title</code> prop 二选一）</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对气泡卡片的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">PopoverClassNames</span> <span class="token punctuation">{</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标题区域</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内容区域</span>
<span class="token punctuation">}</span>

<span class="token comment">// 支持函数形式，动态计算</span>
<span class="token keyword">type</span> <span class="token class-name">PopoverClassNamesProp</span> <span class="token operator">=</span> PopoverClassNames <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>info<span class="token operator">:</span> <span class="token punctuation">{</span> props<span class="token operator">:</span> PopoverProps <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> PopoverClassNames<span class="token punctuation">)</span>

<span class="token keyword">interface</span> <span class="token class-name">PopoverStyles</span> <span class="token punctuation">{</span>
  title<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token comment">// 标题区域</span>
  content<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token comment">// 内容区域</span>
<span class="token punctuation">}</span>

<span class="token comment">// 支持函数形式，动态计算</span>
<span class="token keyword">type</span> <span class="token class-name">PopoverStylesProp</span> <span class="token operator">=</span> PopoverStyles <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>info<span class="token operator">:</span> <span class="token punctuation">{</span> props<span class="token operator">:</span> PopoverProps <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> PopoverStyles<span class="token punctuation">)</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 浮层容器（Teleport 到 body） --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-popover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-popover-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-popover-arrow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-popover-inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- 标题区域（当 title 存在时） --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-popover-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.title / styles.title 应用于此 --&gt;</span>
        标题文字
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

      <span class="token comment">&lt;!-- 内容区域 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-popover-inner-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.content / styles.content 应用于此 --&gt;</span>
        内容文字
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类。</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义标题样式 --&gt;
  &lt;Popover title=&quot;提示标题&quot; content=&quot;这是一段内容&quot; :class-names=&quot;{ title: &#39;my-popover-title&#39; }&quot;&gt;
    &lt;Button&gt;鼠标移入&lt;/Button&gt;
  &lt;/Popover&gt;

  &lt;!-- 自定义内容样式 --&gt;
  &lt;Popover title=&quot;通知&quot; content=&quot;您有新的消息&quot; :class-names=&quot;{ content: &#39;my-popover-content&#39; }&quot;&gt;
    &lt;Button&gt;点击查看&lt;/Button&gt;
  &lt;/Popover&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;Popover
    title=&quot;完整自定义&quot;
    content=&quot;自定义标题和内容的样式&quot;
    :class-names=&quot;{
      title: &#39;my-title&#39;,
      content: &#39;my-content&#39;,
    }&quot;
  &gt;
    &lt;Button&gt;完整示例&lt;/Button&gt;
  &lt;/Popover&gt;

  &lt;!-- 函数形式（动态计算） --&gt;
  &lt;Popover
    :title=&quot;dynamicTitle&quot;
    content=&quot;根据 props 动态计算样式&quot;
    :class-names=&quot;
      (info) =&gt; ({
        title: info.props.title ? &#39;has-title&#39; : &#39;no-title&#39;,
        content: &#39;dynamic-content&#39;,
      })
    &quot;
  &gt;
    &lt;Button&gt;动态样式&lt;/Button&gt;
  &lt;/Popover&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
import { Popover, Button } from &#39;@hmfw/ant-design&#39;

const dynamicTitle = ref(&#39;动态标题&#39;)
&lt;/script&gt;

&lt;style scoped&gt;
:deep(.my-popover-title) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 16px;
  font-weight: bold;
  border-radius: 4px 4px 0 0;
}

:deep(.my-popover-content) {
  background: #f0f5ff;
  padding: 16px;
  font-size: 14px;
  color: #333;
}

:deep(.my-title) {
  color: #722ed1;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 2px solid #722ed1;
  padding-bottom: 8px;
}

:deep(.my-content) {
  color: #1890ff;
  line-height: 1.8;
}

:deep(.has-title) {
  background: #e6f7ff;
}

:deep(.dynamic-content) {
  font-style: italic;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式。</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制标题 --&gt;
  &lt;Popover
    title=&quot;提示标题&quot;
    content=&quot;这是一段内容&quot;
    :styles=&quot;{
      title: {
        background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;,
        color: &#39;white&#39;,
        padding: &#39;12px 16px&#39;,
        fontWeight: &#39;bold&#39;,
      },
    }&quot;
  &gt;
    &lt;Button&gt;鼠标移入&lt;/Button&gt;
  &lt;/Popover&gt;

  &lt;!-- 内联样式控制内容 --&gt;
  &lt;Popover
    title=&quot;通知&quot;
    content=&quot;您有新的消息&quot;
    :styles=&quot;{
      content: {
        background: &#39;#f0f5ff&#39;,
        padding: &#39;16px&#39;,
        fontSize: &#39;14px&#39;,
      },
    }&quot;
  &gt;
    &lt;Button&gt;点击查看&lt;/Button&gt;
  &lt;/Popover&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;Popover
    title=&quot;完整自定义&quot;
    content=&quot;自定义标题和内容的样式&quot;
    :styles=&quot;{
      title: {
        color: &#39;#722ed1&#39;,
        fontSize: &#39;16px&#39;,
        fontWeight: &#39;600&#39;,
        borderBottom: &#39;2px solid #722ed1&#39;,
        paddingBottom: &#39;8px&#39;,
      },
      content: {
        color: &#39;#1890ff&#39;,
        lineHeight: &#39;1.8&#39;,
      },
    }&quot;
  &gt;
    &lt;Button&gt;完整示例&lt;/Button&gt;
  &lt;/Popover&gt;

  &lt;!-- 函数形式（动态计算） --&gt;
  &lt;Popover
    :title=&quot;dynamicTitle&quot;
    content=&quot;根据 props 动态计算样式&quot;
    :styles=&quot;
      (info) =&gt; ({
        title: {
          background: info.props.title ? &#39;#e6f7ff&#39; : &#39;#f5f5f5&#39;,
        },
        content: {
          fontStyle: &#39;italic&#39;,
        },
      })
    &quot;
  &gt;
    &lt;Button&gt;动态样式&lt;/Button&gt;
  &lt;/Popover&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>支持<strong>函数形式</strong>，可根据 <code>props</code> 动态计算样式：<code>(info: { props: PopoverProps }) =&gt; { ... }</code></li><li><code>title</code> 样式仅在 <code>title</code> prop 或 slot 存在时生效</li><li><code>content</code> 样式会应用到内容容器，不影响外层的 <code>.hmfw-popover-inner</code></li><li>浮层整体样式可通过 <code>overlayStyle</code> / <code>overlayInnerStyle</code> props 控制，<code>classNames</code> / <code>styles</code> 用于更细粒度的标题/内容控制</li><li>Popover 浮层通过 Teleport 挂载到 <code>body</code>（或自定义容器），所以 scoped 样式需要使用 <code>:deep()</code> 穿透</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Popover 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。</p>`,24))])}}};export{rt as default};
