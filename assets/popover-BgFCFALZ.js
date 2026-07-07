import{B as f}from"./Button-D7tvIoj2.js";import{d as P,u as O,v as y,a as C,o as x,q as _,w as o,c as s,e,g as i,b as B,f as a,r as T,_ as D,F as I,z as F,A as $,h as z,i as E}from"./index-cgVI-orz.js";import{T as j}from"./Tooltip-tNt8hc2w.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-BnULcwLn.js";import"./Trigger-WY8NmOER.js";const A=P({name:"PopoverPurePanel",inheritAttrs:!1,props:{title:[String,Number,Object,Function],content:[String,Number,Object,Function],placement:{type:String,default:"top"},arrow:{type:[Boolean,Object],default:!0},color:String,overlayInnerStyle:Object,classNames:[Object,Function],styles:[Object,Function]},setup(t,{slots:p,attrs:l}){const d=O("popover"),n=C(()=>t.arrow!==!1),k=(m,c)=>typeof m=="function"?m():m!=null&&m!==""?m:c==null?void 0:c();return()=>{const m=u=>typeof u=="function"?u({props:t}):u,c=m(t.classNames)??{},g=m(t.styles)??{},b=k(t.title,p.title),v=k(t.content,p.content),q=b!=null&&b!=="",S=v!=null&&v!=="",h=[q&&y("div",{class:[`${d}-title`,c.title],style:g.title},b),S&&y("div",{class:[`${d}-inner-content`,c.content],style:g.content},v)].filter(Boolean),w=t.overlayInnerStyle?[y("div",{style:t.overlayInnerStyle},h)]:h,N={};return t.color&&(N["--tooltip-bg"]=t.color),y("div",{...l,class:[`${d}-pure`,d,`${d}-placement-${t.placement}`],style:N},[y("div",{class:`${d}-content`},[n.value&&y("div",{class:`${d}-arrow`}),y("div",{class:`${d}-inner`,role:"tooltip"},w)].filter(Boolean))])}}}),L=P({name:"Popover",inheritAttrs:!1,props:{title:[String,Number,Object,Function],content:[String,Number,Object,Function],placement:{type:String,default:"top"},trigger:{type:[String,Array],default:"hover"},open:{type:Boolean,default:void 0},defaultOpen:Boolean,arrow:{type:[Boolean,Object],default:!0},mouseEnterDelay:{type:Number,default:.1},mouseLeaveDelay:{type:Number,default:.1},disabled:Boolean,overlayStyle:Object,overlayInnerStyle:Object,autoAdjustOverflow:{type:Boolean,default:!0},zIndex:Number,destroyOnHidden:Boolean,destroyTooltipOnHide:Boolean,getPopupContainer:Function,color:String,classNames:[Object,Function],styles:[Object,Function]},emits:["update:open","openChange","afterOpenChange"],setup(t,{slots:p,emit:l,attrs:d}){const n=O("popover"),k=C(()=>{const c=t.title,g=t.content,b=c!=null&&c!==""||!!p.title,v=g!=null&&g!==""||!!p.content;return b||v}),m=(c,g)=>typeof c=="function"?c():c!=null&&c!==""?c:g==null?void 0:g();return()=>{const c=u=>typeof u=="function"?u({props:t}):u,g=c(t.classNames)??{},b=c(t.styles)??{},v=m(t.title,p.title),q=m(t.content,p.content),S=v!=null&&v!=="",h=q!=null&&q!=="",w=[S&&y("div",{class:[`${n}-title`,g.title],style:b.title},v),h&&y("div",{class:[`${n}-inner-content`,g.content],style:b.content},q)].filter(Boolean),N=k.value?t.overlayInnerStyle?y("div",{style:t.overlayInnerStyle},w):w:null;return y(j,{...d,customPrefixCls:n,placement:t.placement,trigger:t.trigger,open:t.open,defaultOpen:t.defaultOpen,arrow:t.arrow,mouseEnterDelay:t.mouseEnterDelay,mouseLeaveDelay:t.mouseLeaveDelay,disabled:t.disabled,autoAdjustOverflow:t.autoAdjustOverflow,zIndex:t.zIndex,destroyOnHidden:t.destroyOnHidden,destroyTooltipOnHide:t.destroyTooltipOnHide,getPopupContainer:t.getPopupContainer,color:t.color,popupStyle:t.overlayStyle,"onUpdate:open":u=>l("update:open",u),onOpenChange:u=>l("openChange",u),onAfterOpenChange:u=>l("afterOpenChange",u)},k.value?{default:()=>{var u;return(u=p.default)==null?void 0:u.call(p)},title:()=>N}:{default:()=>{var u;return(u=p.default)==null?void 0:u.call(p)}})}}}),r=L;r._InternalPanelDoNotUseOrYouWillBeFired=A;const H=P({__name:"PopoverBasic",setup(t){return(p,l)=>(x(),_(e(r),{title:"标题",content:"这是气泡卡片的内容"},{default:o(()=>[s(e(f),null,{default:o(()=>[...l[0]||(l[0]=[i("鼠标移入",-1)])]),_:1})]),_:1}))}}),R=`<template>
  <Popover title="标题" content="这是气泡卡片的内容">
    <Button>鼠标移入</Button>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, Button } from '@hmfw/ant-design'
<\/script>
`,V={style:{display:"flex","flex-direction":"column",gap:"20px"}},W=P({__name:"PopoverClassNames",setup(t){const p=T("动态标题"),l=()=>{p.value=p.value?"":"动态标题"};return(d,n)=>(x(),B("div",V,[a("div",null,[n[1]||(n[1]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义标题样式：",-1)),s(e(r),{title:"渐变标题",content:"这是一段内容，展示自定义标题的效果","class-names":{title:"custom-title"}},{default:o(()=>[s(e(f),null,{default:o(()=>[...n[0]||(n[0]=[i("渐变标题",-1)])]),_:1})]),_:1})]),a("div",null,[n[3]||(n[3]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义内容样式：",-1)),s(e(r),{title:"通知",content:"您有 3 条新消息未读","class-names":{content:"custom-content"}},{default:o(()=>[s(e(f),null,{default:o(()=>[...n[2]||(n[2]=[i("查看通知",-1)])]),_:1})]),_:1})]),a("div",null,[n[5]||(n[5]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"同时自定义标题和内容：",-1)),s(e(r),{title:"完整自定义",content:"标题和内容都应用了自定义样式","class-names":{title:"combined-title",content:"combined-content"}},{default:o(()=>[s(e(f),{type:"primary"},{default:o(()=>[...n[4]||(n[4]=[i("完整示例",-1)])]),_:1})]),_:1})]),a("div",null,[n[7]||(n[7]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式（styles）：",-1)),s(e(r),{title:"内联样式标题",content:"使用 styles 属性控制样式",styles:{title:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",padding:"12px 16px",fontWeight:"bold",borderRadius:"4px 4px 0 0"},content:{background:"#f0f5ff",padding:"16px",fontSize:"14px"}}},{default:o(()=>[s(e(f),null,{default:o(()=>[...n[6]||(n[6]=[i("内联样式",-1)])]),_:1})]),_:1})]),a("div",null,[n[10]||(n[10]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"函数形式动态计算样式：",-1)),s(e(r),{title:p.value,content:"根据 props 动态计算样式","class-names":k=>({title:k.props.title?"has-title":"no-title",content:"dynamic-content"})},{default:o(()=>[s(e(f),null,{default:o(()=>[...n[8]||(n[8]=[i("动态样式",-1)])]),_:1})]),_:1},8,["title","class-names"]),s(e(f),{style:{"margin-left":"8px"},size:"small",onClick:l},{default:o(()=>[...n[9]||(n[9]=[i(" 切换标题 ",-1)])]),_:1})]),a("div",null,[n[12]||(n[12]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"仅内容（无标题）：",-1)),s(e(r),{content:"这是一段没有标题的提示内容","class-names":{content:"content-only"}},{default:o(()=>[s(e(f),null,{default:o(()=>[...n[11]||(n[11]=[i("仅内容",-1)])]),_:1})]),_:1})])]))}}),U=D(W,[["__scopeId","data-v-e11c038f"]]),Y=`<template>
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
`,M={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},G=P({__name:"PopoverPlacement",setup(t){const p=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(l,d)=>(x(),B("div",M,[(x(),B(I,null,F(p,n=>s(e(r),{key:n,placement:n,title:"标题",content:"内容"},{default:o(()=>[s(e(f),null,{default:o(()=>[i($(n),1)]),_:2},1024)]),_:2},1032,["placement"])),64))]))}}),J=`<template>
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
`,K={style:{display:"flex",gap:"24px","flex-wrap":"wrap"}},Q=P({__name:"PopoverPurePanel",setup(t){return(p,l)=>(x(),B("div",K,[s(e(r)._InternalPanelDoNotUseOrYouWillBeFired,{title:"标题",content:"这是直接内联渲染的气泡卡片面板"}),s(e(r)._InternalPanelDoNotUseOrYouWillBeFired,{title:"仅标题",placement:"bottom"}),s(e(r)._InternalPanelDoNotUseOrYouWillBeFired,{content:"无箭头 + 自定义背景色",arrow:!1,color:"#1677ff",styles:{content:{color:"#fff"}}})]))}}),X=`<template>
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
`,Z={style:{display:"flex",gap:"8px"}},nn=P({__name:"PopoverTrigger",setup(t){return(p,l)=>(x(),B("div",Z,[s(e(r),{title:"悬停触发",content:"鼠标悬停时显示",trigger:"hover"},{default:o(()=>[s(e(f),null,{default:o(()=>[...l[0]||(l[0]=[i("悬停",-1)])]),_:1})]),_:1}),s(e(r),{title:"点击触发",content:"点击时显示",trigger:"click"},{default:o(()=>[s(e(f),null,{default:o(()=>[...l[1]||(l[1]=[i("点击",-1)])]),_:1})]),_:1}),s(e(r),{title:"聚焦触发",content:"聚焦时显示",trigger:"focus"},{default:o(()=>[s(e(f),null,{default:o(()=>[...l[2]||(l[2]=[i("聚焦",-1)])]),_:1})]),_:1})]))}}),tn=`<template>
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
`,sn={class:"markdown-body"},un={__name:"popover",setup(t,{expose:p}){return p({frontmatter:{}}),(d,n)=>{const k=z("DemoBlock");return x(),B("div",sn,[n[0]||(n[0]=a("h1",{id:"popover-气泡卡片",tabindex:"-1"},"Popover 气泡卡片",-1)),n[1]||(n[1]=a("p",null,"点击/鼠标移入元素，弹出气泡式的卡片浮层。",-1)),n[2]||(n[2]=a("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=a("ul",null,[a("li",null,"当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现"),a("li",null,"和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等")],-1)),n[4]||(n[4]=a("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=a("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=a("p",null,"最简单的用法，鼠标移入时显示。",-1)),s(k,{title:"基础用法",source:e(R)},{default:o(()=>[s(H)]),_:1},8,["source"]),n[7]||(n[7]=a("h3",{id:"触发方式",tabindex:"-1"},"触发方式",-1)),n[8]||(n[8]=a("p",null,"鼠标移入、聚集、点击。",-1)),s(k,{title:"触发方式",source:e(tn)},{default:o(()=>[s(nn)]),_:1},8,["source"]),n[9]||(n[9]=a("h3",{id:"十二个方向",tabindex:"-1"},"十二个方向",-1)),n[10]||(n[10]=a("p",null,"位置有十二个方向。",-1)),s(k,{title:"十二个方向",source:e(J)},{default:o(()=>[s(G)]),_:1},8,["source"]),n[11]||(n[11]=a("h3",{id:"纯展示面板",tabindex:"-1"},"纯展示面板",-1)),n[12]||(n[12]=a("p",null,[a("code",null,"Popover._InternalPanelDoNotUseOrYouWillBeFired"),i(" 是内部使用的纯展示面板，仅渲染气泡卡片的外观（标题 + 内容 + 箭头），不含触发与定位逻辑，可直接内联到页面中。常规业务请使用 "),a("code",null,"Popover"),i(" 本身。")],-1)),s(k,{title:"纯展示面板",source:e(X)},{default:o(()=>[s(Q)]),_:1},8,["source"]),n[13]||(n[13]=a("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[14]||(n[14]=a("p",null,[i("通过 "),a("code",null,"classNames"),i(" / "),a("code",null,"styles"),i(" 对标题和内容做细粒度样式控制，支持函数形式动态计算。")],-1)),s(k,{title:"语义化 className 与 style",source:e(Y)},{default:o(()=>[s(U)]),_:1},8,["source"]),n[15]||(n[15]=E(`<h2 id="api" tabindex="-1">API</h2><h3 id="popover-props" tabindex="-1">Popover Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>卡片标题（空值时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>content</td><td>卡片内容（与 title 同时为空时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>trigger</td><td>触发行为</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39; | &#39;contextMenu&#39;</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>placement</td><td>气泡框位置，溢出视口时自动翻转</td><td><code>&#39;top&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottom&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;left&#39; | &#39;leftTop&#39; | &#39;leftBottom&#39; | &#39;right&#39; | &#39;rightTop&#39; | &#39;rightBottom&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示（非受控）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>color</td><td>背景颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>arrow</td><td>是否显示箭头，可对象配置</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入后延时显示，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出后延时隐藏，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>disabled</td><td>禁用 popover</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>autoAdjustOverflow</td><td>浮层超出视口时自动翻转方向</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>自定义浮层 z-index</td><td><code>number</code></td><td><code>1070</code></td></tr><tr><td>destroyOnHidden</td><td>隐藏时销毁浮层 DOM</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getPopupContainer</td><td>自定义浮层挂载容器（默认 <code>body</code>）</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td>-</td></tr><tr><td>overlayStyle</td><td>卡片样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr><tr><td>overlayInnerStyle</td><td>卡片内层样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>{ title?, content? } | (info) =&gt; {...}</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>{ title?, content? } | (info) =&gt; {...}</code></td><td>-</td></tr></tbody></table><h3 id="popover-events" tabindex="-1">Popover Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>显示隐藏的回调（v-model）</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>浮层动画结束时触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="popover-slots" tabindex="-1">Popover Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发气泡卡片的元素</td></tr><tr><td>content</td><td>卡片内容（与 <code>content</code> prop 二选一）</td></tr><tr><td>title</td><td>卡片标题（与 <code>title</code> prop 二选一）</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对气泡卡片的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">PopoverClassNames</span> <span class="token punctuation">{</span>
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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类。</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义标题样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>提示标题<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>这是一段内容<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ title: &#39;my-popover-title&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>鼠标移入<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义内容样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>通知<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>您有新的消息<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ content: &#39;my-popover-content&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>点击查看<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>完整自定义<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>自定义标题和内容的样式<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      title: &#39;my-title&#39;,
      content: &#39;my-content&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>完整示例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 函数形式（动态计算） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span>
    <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamicTitle<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>根据 props 动态计算样式<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
      (info) =&gt; ({
        title: info.props.title ? &#39;has-title&#39; : &#39;no-title&#39;,
        content: &#39;dynamic-content&#39;,
      })
    <span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>动态样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Popover<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@hmfw/ant-design&#39;</span>

<span class="token keyword">const</span> dynamicTitle <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;动态标题&#39;</span><span class="token punctuation">)</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-popover-title)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 12px 16px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px 4px 0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-popover-content)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f0f5ff<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-title)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #722ed1<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 2px solid #722ed1<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-content)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.8<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.has-title)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #e6f7ff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.dynamic-content)</span> <span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式。</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制标题 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>提示标题<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>这是一段内容<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      title: {
        background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;,
        color: &#39;white&#39;,
        padding: &#39;12px 16px&#39;,
        fontWeight: &#39;bold&#39;,
      },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>鼠标移入<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 内联样式控制内容 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>通知<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>您有新的消息<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      content: {
        background: &#39;#f0f5ff&#39;,
        padding: &#39;16px&#39;,
        fontSize: &#39;14px&#39;,
      },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>点击查看<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>完整自定义<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>自定义标题和内容的样式<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
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
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>完整示例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 函数形式（动态计算） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span>
    <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamicTitle<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>根据 props 动态计算样式<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
      (info) =&gt; ({
        title: {
          background: info.props.title ? &#39;#e6f7ff&#39; : &#39;#f5f5f5&#39;,
        },
        content: {
          fontStyle: &#39;italic&#39;,
        },
      })
    <span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>动态样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>支持<strong>函数形式</strong>，可根据 <code>props</code> 动态计算样式：<code>(info: { props: PopoverProps }) =&gt; { ... }</code></li><li><code>title</code> 样式仅在 <code>title</code> prop 或 slot 存在时生效</li><li><code>content</code> 样式会应用到内容容器，不影响外层的 <code>.hmfw-popover-inner</code></li><li>浮层整体样式可通过 <code>overlayStyle</code> / <code>overlayInnerStyle</code> props 控制，<code>classNames</code> / <code>styles</code> 用于更细粒度的标题/内容控制</li><li>Popover 浮层通过 Teleport 挂载到 <code>body</code>（或自定义容器），所以 scoped 样式需要使用 <code>:deep()</code> 穿透</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Popover 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。</p>`,24))])}}};export{un as default};
