import{M as Z,L as R,R as A}from"./icons-Buy98oKP.js";import{m as g,L as w,l as t,d as v,o as G,v as P,w as O,B as m,z as J,y as C,g as L,P as r,I as i,k as u,f as o,H as k,E as Q,i as X,j as q}from"./index-BQisgCTe.js";import{I as S}from"./Icon-BfLh2ono.js";import{c as _}from"./cls-S9IiI6wd.js";const I=Symbol("layout-sider"),y=g({name:"Layout",props:{hasSider:Boolean},setup(n,{slots:d}){const l=w("layout"),s=m(0);J(I,{addSider:()=>s.value++,removeSider:()=>s.value--});const e=v(()=>{const a=n.hasSider!==void 0?n.hasSider:s.value>0;return _(l,{[`${l}-has-sider`]:a})});return()=>{var a;return t("section",{class:e.value},[(a=d.default)==null?void 0:a.call(d)])}}}),B=g({name:"Header",setup(n,{slots:d}){const l=w("layout");return()=>{var s;return t("header",{class:`${l}-header`},[(s=d.default)==null?void 0:s.call(d)])}}}),Y=g({name:"Footer",setup(n,{slots:d}){const l=w("layout");return()=>{var s;return t("footer",{class:`${l}-footer`},[(s=d.default)==null?void 0:s.call(d)])}}}),T=g({name:"Content",setup(n,{slots:d}){const l=w("layout");return()=>{var s;return t("main",{class:`${l}-content`},[(s=d.default)==null?void 0:s.call(d)])}}}),ee={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px",xxxl:"1839.98px"},H=g({name:"Sider",props:{width:{type:[Number,String],default:200},collapsedWidth:{type:[Number,String],default:80},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,collapsible:Boolean,reverseArrow:Boolean,breakpoint:String,theme:{type:String,default:"dark"},trigger:{type:[Object,null],default:void 0},zeroWidthTriggerStyle:Object,onCollapse:Function,onBreakpoint:Function},emits:["collapse","update:collapsed","breakpoint"],setup(n,{slots:d,emit:l}){const e=`${w("layout")}-sider`,a=G(I,null);P(()=>a==null?void 0:a.addSider()),O(()=>a==null?void 0:a.removeSider());const f=m(n.defaultCollapsed??!1),$=m(!1),x=v(()=>n.collapsed!==void 0?n.collapsed:f.value),F=(p,c)=>{var b;n.collapsed===void 0&&(f.value=p),l("update:collapsed",p),l("collapse",p,c),(b=n.onCollapse)==null||b.call(n,p,c)},W=()=>{F(!x.value,"clickTrigger")};let h=null;const N=p=>{var b;const c=p.matches;$.value=c,l("breakpoint",c),(b=n.onBreakpoint)==null||b.call(n,c),x.value!==c&&F(c,"responsive")};P(()=>{if(n.breakpoint&&typeof window<"u"){const p=ee[n.breakpoint];h=window.matchMedia(`screen and (max-width: ${p})`),h.addEventListener("change",N),N(h)}}),O(()=>{h==null||h.removeEventListener("change",N)});const D=v(()=>x.value?n.collapsedWidth:n.width),V=p=>!Number.isNaN(Number.parseFloat(p))&&Number.isFinite(Number(p)),z=v(()=>{const p=D.value;return V(p)?`${p}px`:String(p)}),E=v(()=>Number.parseFloat(String(n.collapsedWidth||0))===0),j=v(()=>_(e,`${e}-${n.theme}`,{[`${e}-collapsed`]:x.value,[`${e}-has-trigger`]:n.collapsible&&n.trigger!==null&&!E.value,[`${e}-below`]:$.value,[`${e}-zero-width`]:Number.parseFloat(z.value)===0}));return()=>{var M;const p=z.value,c=E.value&&x.value?t("span",{onClick:W,class:_(`${e}-zero-width-trigger`,`${e}-zero-width-trigger-${n.reverseArrow?"right":"left"}`),style:n.zeroWidthTriggerStyle},[n.trigger!==void 0?n.trigger:t(S,{component:Z},null)]):null,b=()=>x.value?n.reverseArrow?t(S,{component:R},null):t(S,{component:A},null):n.reverseArrow?t(S,{component:A},null):t(S,{component:R},null),U=n.trigger!==null?c||t("div",{class:`${e}-trigger`,onClick:W,style:{width:p}},[n.trigger!==void 0?n.trigger:b()]):null,K={flex:`0 0 ${p}`,maxWidth:p,minWidth:p,width:p};return t("aside",{class:j.value,style:K},[t("div",{class:`${e}-children`},[(M=d.default)==null?void 0:M.call(d)]),n.collapsible||$.value&&c?U:null])}}}),te=g({__name:"LayoutBasic",setup(n){return(d,l)=>(C(),L(i(y),{style:{"min-height":"200px"}},{default:r(()=>[t(i(B),{style:{background:"#001529",color:"#fff",padding:"0 24px","line-height":"64px"}},{default:r(()=>[...l[0]||(l[0]=[u(" Header ",-1)])]),_:1}),t(i(T),{style:{padding:"24px",background:"#fff"}},{default:r(()=>[...l[1]||(l[1]=[u(" Content ",-1)])]),_:1}),t(i(Y),{style:{"text-align":"center",background:"#f5f5f5"}},{default:r(()=>[...l[2]||(l[2]=[u(" Footer ©2024 Created by ant-design-hmfw ",-1)])]),_:1})]),_:1}))}}),ne=`<template>
  <Layout style="min-height: 200px">
    <Header style="background: #001529; color: #fff; padding: 0 24px; line-height: 64px;">
      Header
    </Header>
    <Content style="padding: 24px; background: #fff;">
      Content
    </Content>
    <Footer style="text-align: center; background: #f5f5f5;">
      Footer ©2024 Created by ant-design-hmfw
    </Footer>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, Header, Content, Footer } from 'ant-design-hmfw'
<\/script>
`,oe={style:{color:"#fff",padding:"16px","text-align":"center"}},de=g({__name:"LayoutCollapsible",setup(n){const d=m(!1),l=m("clickTrigger"),s=(e,a)=>{l.value=a,console.log("Collapsed:",e,"Type:",a)};return(e,a)=>(C(),L(i(y),{style:{"min-height":"400px"}},{default:r(()=>[t(i(H),{collapsed:d.value,"onUpdate:collapsed":a[0]||(a[0]=f=>d.value=f),collapsible:"",width:200,"collapsed-width":80,style:{background:"#001529"},onCollapse:s},{default:r(()=>[o("div",oe,k(d.value?"Menu":"Navigation Menu"),1)]),_:1},8,["collapsed"]),t(i(y),null,{default:r(()=>[t(i(B),{style:{background:"#fff",padding:"0 24px","border-bottom":"1px solid #f0f0f0","line-height":"64px"}},{default:r(()=>[...a[1]||(a[1]=[u(" Header ",-1)])]),_:1}),t(i(T),{style:{padding:"24px",background:"#f5f5f5"}},{default:r(()=>[o("p",null,"Current state: "+k(d.value?"Collapsed":"Expanded"),1),o("p",null,"Collapse type: "+k(l.value),1)]),_:1})]),_:1})]),_:1}))}}),le=`<template>
  <Layout style="min-height: 400px">
    <Sider
      v-model:collapsed="collapsed"
      collapsible
      :width="200"
      :collapsed-width="80"
      style="background: #001529;"
      @collapse="onCollapse"
    >
      <div style="color: #fff; padding: 16px; text-align: center;">
        {{ collapsed ? 'Menu' : 'Navigation Menu' }}
      </div>
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0 24px; border-bottom: 1px solid #f0f0f0; line-height: 64px;">
        Header
      </Header>
      <Content style="padding: 24px; background: #f5f5f5;">
        <p>Current state: {{ collapsed ? 'Collapsed' : 'Expanded' }}</p>
        <p>Collapse type: {{ collapseType }}</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider } from 'ant-design-hmfw'
import type { CollapseType } from 'ant-design-hmfw'

const collapsed = ref(false)
const collapseType = ref<CollapseType>('clickTrigger')

const onCollapse = (value: boolean, type: CollapseType) => {
  collapseType.value = type
  console.log('Collapsed:', value, 'Type:', type)
}
<\/script>
`,ae=g({__name:"LayoutCustomTrigger",setup(n){const d=m(!1);return(l,s)=>(C(),L(i(y),{style:{"min-height":"400px"}},{default:r(()=>[t(i(H),{trigger:null,collapsed:d.value,"onUpdate:collapsed":s[0]||(s[0]=e=>d.value=e),collapsible:"",style:{background:"#001529"}},{default:r(()=>[...s[2]||(s[2]=[o("div",{style:{color:"#fff",padding:"16px","text-align":"center"}}," Menu ",-1)])]),_:1},8,["collapsed"]),t(i(y),null,{default:r(()=>[t(i(B),{style:{background:"#fff",padding:"0 24px","line-height":"64px",display:"flex","align-items":"center"}},{default:r(()=>[o("button",{onClick:s[1]||(s[1]=e=>d.value=!d.value),style:{border:"none",background:"none",cursor:"pointer","font-size":"18px",padding:"8px"}},k(d.value?"☰":"✕"),1),s[3]||(s[3]=o("span",{style:{"margin-left":"16px"}},"Custom Trigger in Header",-1))]),_:1}),t(i(T),{style:{padding:"24px",background:"#f5f5f5"}},{default:r(()=>[...s[4]||(s[4]=[o("p",null,"This example shows how to use a custom trigger.",-1),o("p",null,[u("Set "),o("code",null,"trigger={null}"),u(" to hide the default trigger.")],-1)])]),_:1})]),_:1})]),_:1}))}}),re=`<template>
  <Layout style="min-height: 400px">
    <Sider
      :trigger="null"
      v-model:collapsed="collapsed"
      collapsible
      style="background: #001529;"
    >
      <div style="color: #fff; padding: 16px; text-align: center;">
        Menu
      </div>
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0 24px; line-height: 64px; display: flex; align-items: center;">
        <button
          @click="collapsed = !collapsed"
          style="border: none; background: none; cursor: pointer; font-size: 18px; padding: 8px;"
        >
          {{ collapsed ? '☰' : '✕' }}
        </button>
        <span style="margin-left: 16px;">Custom Trigger in Header</span>
      </Header>
      <Content style="padding: 24px; background: #f5f5f5;">
        <p>This example shows how to use a custom trigger.</p>
        <p>Set <code>trigger={null}</code> to hide the default trigger.</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider } from 'ant-design-hmfw'

const collapsed = ref(false)
<\/script>
`,ie=g({__name:"LayoutResponsive",setup(n){const d=m(!1),l=m(!1),s=a=>{d.value=a,console.log("Breakpoint:",a)},e=(a,f)=>{l.value=a,console.log("Collapsed:",a,"Type:",f)};return(a,f)=>(C(),L(i(y),{style:{"min-height":"400px"}},{default:r(()=>[t(i(H),{breakpoint:"lg","collapsed-width":0,onBreakpoint:s,onCollapse:e,style:{background:"#001529"}},{default:r(()=>[...f[0]||(f[0]=[o("div",{style:{color:"#fff",padding:"16px"}},[o("div",{style:{"margin-bottom":"16px"}},"Navigation"),o("div",{style:{"font-size":"12px",opacity:"0.65"}}," Resize window to see responsive behavior ")],-1)])]),_:1}),t(i(y),null,{default:r(()=>[t(i(B),{style:{background:"#fff",padding:"0 24px","line-height":"64px"}},{default:r(()=>[...f[1]||(f[1]=[u(" Responsive Layout ",-1)])]),_:1}),t(i(T),{style:{padding:"24px",background:"#f5f5f5"}},{default:r(()=>[f[2]||(f[2]=o("p",null,"Breakpoint: lg (992px)",-1)),o("p",null,"Below breakpoint: "+k(d.value?"Yes":"No"),1),o("p",null,"Collapsed: "+k(l.value?"Yes":"No"),1)]),_:1})]),_:1})]),_:1}))}}),se=`<template>
  <Layout style="min-height: 400px">
    <Sider
      breakpoint="lg"
      :collapsed-width="0"
      @breakpoint="onBreakpoint"
      @collapse="onCollapse"
      style="background: #001529;"
    >
      <div style="color: #fff; padding: 16px;">
        <div style="margin-bottom: 16px;">Navigation</div>
        <div style="font-size: 12px; opacity: 0.65;">
          Resize window to see responsive behavior
        </div>
      </div>
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0 24px; line-height: 64px;">
        Responsive Layout
      </Header>
      <Content style="padding: 24px; background: #f5f5f5;">
        <p>Breakpoint: lg (992px)</p>
        <p>Below breakpoint: {{ isBelowBreakpoint ? 'Yes' : 'No' }}</p>
        <p>Collapsed: {{ isCollapsed ? 'Yes' : 'No' }}</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider } from 'ant-design-hmfw'
import type { CollapseType } from 'ant-design-hmfw'

const isBelowBreakpoint = ref(false)
const isCollapsed = ref(false)

const onBreakpoint = (broken: boolean) => {
  isBelowBreakpoint.value = broken
  console.log('Breakpoint:', broken)
}

const onCollapse = (collapsed: boolean, type: CollapseType) => {
  isCollapsed.value = collapsed
  console.log('Collapsed:', collapsed, 'Type:', type)
}
<\/script>
`,pe=g({__name:"LayoutSider",setup(n){return(d,l)=>(C(),L(i(y),{style:{"min-height":"300px"}},{default:r(()=>[t(i(B),{style:{background:"#001529",color:"#fff",padding:"0 24px","line-height":"64px"}},{default:r(()=>[...l[0]||(l[0]=[u(" Header ",-1)])]),_:1}),t(i(y),null,{default:r(()=>[t(i(H),{width:200,style:{background:"#fff","border-right":"1px solid #f0f0f0"}},{default:r(()=>[...l[1]||(l[1]=[o("div",{style:{padding:"16px"}},"Sider",-1)])]),_:1}),t(i(T),{style:{padding:"24px",background:"#f5f5f5"}},{default:r(()=>[...l[2]||(l[2]=[u(" Content ",-1)])]),_:1})]),_:1}),t(i(Y),{style:{"text-align":"center",background:"#f5f5f5"}},{default:r(()=>[...l[3]||(l[3]=[u(" Footer ©2024 ",-1)])]),_:1})]),_:1}))}}),ue=`<template>
  <Layout style="min-height: 300px">
    <Header style="background: #001529; color: #fff; padding: 0 24px; line-height: 64px;">
      Header
    </Header>
    <Layout>
      <Sider :width="200" style="background: #fff; border-right: 1px solid #f0f0f0;">
        <div style="padding: 16px;">Sider</div>
      </Sider>
      <Content style="padding: 24px; background: #f5f5f5;">
        Content
      </Content>
    </Layout>
    <Footer style="text-align: center; background: #f5f5f5;">
      Footer ©2024
    </Footer>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, Header, Content, Footer, Sider } from 'ant-design-hmfw'
<\/script>
`,fe={class:"markdown-body"},be={__name:"layout",setup(n,{expose:d}){return d({frontmatter:{}}),(s,e)=>{const a=Q("DemoBlock");return C(),X("div",fe,[e[0]||(e[0]=o("h1",{id:"layout-",tabindex:"-1"},"Layout 布局",-1)),e[1]||(e[1]=o("p",null,"协助进行页面级整体布局。",-1)),e[2]||(e[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=o("ul",null,[o("li",null,"需要搭建页面整体结构时"),o("li",null,"需要侧边栏导航布局时"),o("li",null,"需要顶部导航 + 内容区布局时")],-1)),e[4]||(e[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=o("h3",{id:"-2",tabindex:"-1"},"基础布局（上中下）",-1)),e[6]||(e[6]=o("p",null,"最基本的上中下布局。",-1)),t(a,{title:"基础布局（上中下）",source:i(ne)},{default:r(()=>[t(te)]),_:1},8,["source"]),e[7]||(e[7]=o("h3",{id:"-3",tabindex:"-1"},"带侧边栏",-1)),e[8]||(e[8]=o("p",null,"左侧边栏 + 右侧内容区布局。",-1)),t(a,{title:"带侧边栏",source:i(ue)},{default:r(()=>[t(pe)]),_:1},8,["source"]),e[9]||(e[9]=o("h3",{id:"-4",tabindex:"-1"},"可折叠侧边栏",-1)),e[10]||(e[10]=o("p",null,[u("通过 "),o("code",null,"collapsible"),u(" 属性开启侧边栏折叠功能，支持 "),o("code",null,"onCollapse"),u(" 事件监听折叠状态变化。")],-1)),t(a,{title:"可折叠侧边栏",source:i(le)},{default:r(()=>[t(de)]),_:1},8,["source"]),e[11]||(e[11]=o("h3",{id:"-5",tabindex:"-1"},"响应式布局",-1)),e[12]||(e[12]=o("p",null,[u("通过 "),o("code",null,"breakpoint"),u(" 属性设置响应式断点，当窗口宽度小于断点时自动折叠侧边栏。设置 "),o("code",null,"collapsedWidth={0}"),u(" 会显示特殊的浮动触发器。")],-1)),t(a,{title:"响应式布局",source:i(se)},{default:r(()=>[t(ie)]),_:1},8,["source"]),e[13]||(e[13]=o("h3",{id:"-6",tabindex:"-1"},"自定义触发器",-1)),e[14]||(e[14]=o("p",null,[u("设置 "),o("code",null,"trigger={null}"),u(" 隐藏默认触发器，可以在其他位置放置自定义触发器。")],-1)),t(a,{title:"自定义触发器",source:i(re)},{default:r(()=>[t(ae)]),_:1},8,["source"]),e[15]||(e[15]=q('<h2 id="api" tabindex="-1">API</h2><h3 id="layout-props" tabindex="-1">Layout Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>hasSider</td><td>表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="sider-props" tabindex="-1">Sider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>宽度</td><td><code>number | string</code></td><td><code>200</code></td></tr><tr><td>collapsible</td><td>是否可收起</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>collapsed(v-model)</td><td>当前收起状态</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultCollapsed</td><td>是否默认收起</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>collapsedWidth</td><td>收缩宽度，设置为 0 会出现特殊 trigger</td><td><code>number | string</code></td><td><code>80</code></td></tr><tr><td>breakpoint</td><td>触发响应式布局的断点</td><td><code>&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;xxl&#39; | &#39;xxxl&#39;</code></td><td>-</td></tr><tr><td>theme</td><td>主题颜色</td><td><code>&#39;light&#39; | &#39;dark&#39;</code></td><td><code>&#39;dark&#39;</code></td></tr><tr><td>trigger</td><td>自定义 trigger，设为 null 时隐藏 trigger</td><td><code>VNode | null</code></td><td>-</td></tr><tr><td>reverseArrow</td><td>翻转折叠提示箭头的方向</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>zeroWidthTriggerStyle</td><td>指定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="layout-slots" tabindex="-1">Layout Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>子元素内容</td></tr></tbody></table><h3 id="sider-events" tabindex="-1">Sider Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>collapse</td><td>展开/收起时触发</td><td><code>(collapsed: boolean, type: &#39;clickTrigger&#39; | &#39;responsive&#39;) =&gt; void</code></td></tr><tr><td>breakpoint</td><td>触发响应式布局断点时触发</td><td><code>(broken: boolean) =&gt; void</code></td></tr></tbody></table><h2 id="-7" tabindex="-1">组件说明</h2><p>Layout: 布局容器，其下可嵌套 <code>Header</code> <code>Sider</code> <code>Content</code> <code>Footer</code> 或 <code>Layout</code> 本身，可以放在任何父容器中。</p><p>Header: 顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p><p>Sider: 侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p><p>Content: 内容部分，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p><p>Footer: 底部布局，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p>',15))])}}};export{be as default};
