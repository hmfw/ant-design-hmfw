import{o as m,N as B,n,f as C,q,x as M,y as A,E as y,B as G,A as h,i as T,R as r,K as a,m as p,h as t,J as b,k as D,H as Q,l as X}from"./index-BIs5wmTl.js";import{I as L}from"./Icon-Bx-OH41K.js";import{M as ee}from"./MinusOutlined-B_tPN58X.js";import{c as N}from"./cls-S9IiI6wd.js";import{L as P}from"./LeftOutlined-D8Aj_7HY.js";import{R as O}from"./RightOutlined-caiGX-HQ.js";import{B as Y}from"./Button-DXqNArqe.js";import"./LoadingOutlined-DBQWlWc3.js";const I=Symbol("layout-sider"),c=m({name:"Layout",props:{hasSider:Boolean},setup(o,{slots:d}){const l=B("layout"),s=y(0);G(I,{addSider:()=>s.value++,removeSider:()=>s.value--});const e=C(()=>{const i=o.hasSider!==void 0?o.hasSider:s.value>0;return N(l,{[`${l}-has-sider`]:i})});return()=>{var i;return n("section",{class:e.value},[(i=d.default)==null?void 0:i.call(d)])}}}),S=m({name:"Header",setup(o,{slots:d}){const l=B("layout");return()=>{var s;return n("header",{class:`${l}-header`},[(s=d.default)==null?void 0:s.call(d)])}}}),V=m({name:"Footer",setup(o,{slots:d}){const l=B("layout");return()=>{var s;return n("footer",{class:`${l}-footer`},[(s=d.default)==null?void 0:s.call(d)])}}}),w=m({name:"Content",setup(o,{slots:d}){const l=B("layout");return()=>{var s;return n("main",{class:`${l}-content`},[(s=d.default)==null?void 0:s.call(d)])}}}),te={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px",xxxl:"1839.98px"},H=m({name:"Sider",props:{width:{type:[Number,String],default:200},collapsedWidth:{type:[Number,String],default:80},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,collapsible:Boolean,reverseArrow:Boolean,breakpoint:String,theme:{type:String,default:"dark"},trigger:{type:[Object,null],default:void 0},zeroWidthTriggerStyle:Object,onCollapse:Function,onBreakpoint:Function},emits:["collapse","update:collapsed","breakpoint"],setup(o,{slots:d,emit:l}){const e=`${B("layout")}-sider`,i=q(I,null);M(()=>i==null?void 0:i.addSider()),A(()=>i==null?void 0:i.removeSider());const f=y(o.defaultCollapsed??!1),_=y(!1),v=C(()=>o.collapsed!==void 0?o.collapsed:f.value),F=(u,g)=>{var x;o.collapsed===void 0&&(f.value=u),l("update:collapsed",u),l("collapse",u,g),(x=o.onCollapse)==null||x.call(o,u,g)},W=()=>{F(!v.value,"clickTrigger")};let k=null;const $=u=>{var x;const g=u.matches;_.value=g,l("breakpoint",g),(x=o.onBreakpoint)==null||x.call(o,g),v.value!==g&&F(g,"responsive")};M(()=>{if(o.breakpoint&&typeof window<"u"){const u=te[o.breakpoint];k=window.matchMedia(`screen and (max-width: ${u})`),k.addEventListener("change",$),$(k)}}),A(()=>{k==null||k.removeEventListener("change",$)});const U=C(()=>v.value?o.collapsedWidth:o.width),j=u=>!Number.isNaN(Number.parseFloat(u))&&Number.isFinite(Number(u)),z=C(()=>{const u=U.value;return j(u)?`${u}px`:String(u)}),R=C(()=>Number.parseFloat(String(o.collapsedWidth||0))===0),K=C(()=>N(e,`${e}-${o.theme}`,{[`${e}-collapsed`]:v.value,[`${e}-has-trigger`]:o.collapsible&&o.trigger!==null&&!R.value,[`${e}-below`]:_.value,[`${e}-zero-width`]:Number.parseFloat(z.value)===0}));return()=>{var E;const u=z.value,g=R.value&&v.value?n("span",{onClick:W,class:N(`${e}-zero-width-trigger`,`${e}-zero-width-trigger-${o.reverseArrow?"right":"left"}`),style:o.zeroWidthTriggerStyle},[o.trigger!==void 0?o.trigger:n(L,{component:ee},null)]):null,x=()=>v.value?o.reverseArrow?n(L,{component:P},null):n(L,{component:O},null):o.reverseArrow?n(L,{component:O},null):n(L,{component:P},null),J=o.trigger!==null?g||n("div",{class:`${e}-trigger`,onClick:W,style:{width:u}},[o.trigger!==void 0?o.trigger:x()]):null,Z={flex:`0 0 ${u}`,maxWidth:u,minWidth:u,width:u};return n("aside",{class:K.value,style:Z},[n("div",{class:`${e}-children`},[(E=d.default)==null?void 0:E.call(d)]),o.collapsible||_.value&&g?J:null])}}}),ne=m({__name:"LayoutBasic",setup(o){return(d,l)=>(h(),T(a(c),{style:{"min-height":"200px"}},{default:r(()=>[n(a(S),{style:{background:"#001529",color:"#fff",padding:"0 24px","line-height":"64px"}},{default:r(()=>[...l[0]||(l[0]=[p(" Header ",-1)])]),_:1}),n(a(w),{style:{padding:"24px",background:"#fff"}},{default:r(()=>[...l[1]||(l[1]=[p(" Content ",-1)])]),_:1}),n(a(V),{style:{"text-align":"center",background:"#f5f5f5"}},{default:r(()=>[...l[2]||(l[2]=[p(" Footer ©2024 Created by ant-design-hmfw ",-1)])]),_:1})]),_:1}))}}),de=`<template>
  <Layout style="min-height: 200px">
    <Header style="background: #001529; color: #fff; padding: 0 24px; line-height: 64px"> Header </Header>
    <Content style="padding: 24px; background: #fff"> Content </Content>
    <Footer style="text-align: center; background: #f5f5f5"> Footer ©2024 Created by ant-design-hmfw </Footer>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, Header, Content, Footer } from 'ant-design-hmfw'
<\/script>
`,oe={style:{color:"#fff",padding:"16px","text-align":"center"}},le=m({__name:"LayoutCollapsible",setup(o){const d=y(!1),l=y("clickTrigger"),s=(e,i)=>{l.value=i,console.log("Collapsed:",e,"Type:",i)};return(e,i)=>(h(),T(a(c),{style:{"min-height":"400px"}},{default:r(()=>[n(a(H),{collapsed:d.value,"onUpdate:collapsed":i[0]||(i[0]=f=>d.value=f),collapsible:"",width:200,"collapsed-width":80,style:{background:"#001529"},onCollapse:s},{default:r(()=>[t("div",oe,b(d.value?"Menu":"Navigation Menu"),1)]),_:1},8,["collapsed"]),n(a(c),null,{default:r(()=>[n(a(S),{style:{background:"#fff",padding:"0 24px","border-bottom":"1px solid #f0f0f0","line-height":"64px"}},{default:r(()=>[...i[1]||(i[1]=[p(" Header ",-1)])]),_:1}),n(a(w),{style:{padding:"24px",background:"#f5f5f5"}},{default:r(()=>[t("p",null,"Current state: "+b(d.value?"Collapsed":"Expanded"),1),t("p",null,"Collapse type: "+b(l.value),1)]),_:1})]),_:1})]),_:1}))}}),re=`<template>
  <Layout style="min-height: 400px">
    <Sider
      v-model:collapsed="collapsed"
      collapsible
      :width="200"
      :collapsed-width="80"
      style="background: #001529"
      @collapse="onCollapse"
    >
      <div style="color: #fff; padding: 16px; text-align: center">
        {{ collapsed ? 'Menu' : 'Navigation Menu' }}
      </div>
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0 24px; border-bottom: 1px solid #f0f0f0; line-height: 64px">
        Header
      </Header>
      <Content style="padding: 24px; background: #f5f5f5">
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
`,ae=m({__name:"LayoutCustomTrigger",setup(o){const d=y(!1);return(l,s)=>(h(),T(a(c),{style:{"min-height":"400px"}},{default:r(()=>[n(a(H),{collapsed:d.value,"onUpdate:collapsed":s[0]||(s[0]=e=>d.value=e),trigger:null,collapsible:"",style:{background:"#001529"}},{default:r(()=>[...s[2]||(s[2]=[t("div",{style:{color:"#fff",padding:"16px","text-align":"center"}},"Menu",-1)])]),_:1},8,["collapsed"]),n(a(c),null,{default:r(()=>[n(a(S),{style:{background:"#fff",padding:"0 24px","line-height":"64px",display:"flex","align-items":"center"}},{default:r(()=>[n(a(Y),{style:{border:"none",background:"none",cursor:"pointer","font-size":"18px",padding:"8px"},onClick:s[1]||(s[1]=e=>d.value=!d.value)},{default:r(()=>[p(b(d.value?"☰":"✕"),1)]),_:1}),s[3]||(s[3]=t("span",{style:{"margin-left":"16px"}},"Custom Trigger in Header",-1))]),_:1}),n(a(w),{style:{padding:"24px",background:"#f5f5f5"}},{default:r(()=>[...s[4]||(s[4]=[t("p",null,"This example shows how to use a custom trigger.",-1),t("p",null,[p("Set "),t("code",null,"trigger={null}"),p(" to hide the default trigger.")],-1)])]),_:1})]),_:1})]),_:1}))}}),ie=`<template>
  <Layout style="min-height: 400px">
    <Sider v-model:collapsed="collapsed" :trigger="null" collapsible style="background: #001529">
      <div style="color: #fff; padding: 16px; text-align: center">Menu</div>
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0 24px; line-height: 64px; display: flex; align-items: center">
        <Button
          style="border: none; background: none; cursor: pointer; font-size: 18px; padding: 8px"
          @click="collapsed = !collapsed"
        >
          {{ collapsed ? '☰' : '✕' }}
        </Button>
        <span style="margin-left: 16px">Custom Trigger in Header</span>
      </Header>
      <Content style="padding: 24px; background: #f5f5f5">
        <p>This example shows how to use a custom trigger.</p>
        <p>Set <code>trigger={null}</code> to hide the default trigger.</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider, Button } from 'ant-design-hmfw'

const collapsed = ref(false)
<\/script>
`,se=m({__name:"LayoutResponsive",setup(o){const d=y(!1),l=y(!1),s=i=>{d.value=i,console.log("Breakpoint:",i)},e=(i,f)=>{l.value=i,console.log("Collapsed:",i,"Type:",f)};return(i,f)=>(h(),T(a(c),{style:{"min-height":"400px"}},{default:r(()=>[n(a(H),{breakpoint:"lg","collapsed-width":0,style:{background:"#001529"},onBreakpoint:s,onCollapse:e},{default:r(()=>[...f[0]||(f[0]=[t("div",{style:{color:"#fff",padding:"16px"}},[t("div",{style:{"margin-bottom":"16px"}},"Navigation"),t("div",{style:{"font-size":"12px",opacity:"0.65"}},"Resize window to see responsive behavior")],-1)])]),_:1}),n(a(c),null,{default:r(()=>[n(a(S),{style:{background:"#fff",padding:"0 24px","line-height":"64px"}},{default:r(()=>[...f[1]||(f[1]=[p(" Responsive Layout ",-1)])]),_:1}),n(a(w),{style:{padding:"24px",background:"#f5f5f5"}},{default:r(()=>[f[2]||(f[2]=t("p",null,"Breakpoint: lg (992px)",-1)),t("p",null,"Below breakpoint: "+b(d.value?"Yes":"No"),1),t("p",null,"Collapsed: "+b(l.value?"Yes":"No"),1)]),_:1})]),_:1})]),_:1}))}}),pe=`<template>
  <Layout style="min-height: 400px">
    <Sider
      breakpoint="lg"
      :collapsed-width="0"
      style="background: #001529"
      @breakpoint="onBreakpoint"
      @collapse="onCollapse"
    >
      <div style="color: #fff; padding: 16px">
        <div style="margin-bottom: 16px">Navigation</div>
        <div style="font-size: 12px; opacity: 0.65">Resize window to see responsive behavior</div>
      </div>
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0 24px; line-height: 64px"> Responsive Layout </Header>
      <Content style="padding: 24px; background: #f5f5f5">
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
`,ue=m({__name:"LayoutSider",setup(o){return(d,l)=>(h(),T(a(c),{style:{"min-height":"300px"}},{default:r(()=>[n(a(S),{style:{background:"#001529",color:"#fff",padding:"0 24px","line-height":"64px"}},{default:r(()=>[...l[0]||(l[0]=[p(" Header ",-1)])]),_:1}),n(a(c),null,{default:r(()=>[n(a(H),{width:200,style:{background:"#fff","border-right":"1px solid #f0f0f0"}},{default:r(()=>[...l[1]||(l[1]=[t("div",{style:{padding:"16px"}},"Sider",-1)])]),_:1}),n(a(w),{style:{padding:"24px",background:"#f5f5f5"}},{default:r(()=>[...l[2]||(l[2]=[p(" Content ",-1)])]),_:1})]),_:1}),n(a(V),{style:{"text-align":"center",background:"#f5f5f5"}},{default:r(()=>[...l[3]||(l[3]=[p(" Footer ©2024 ",-1)])]),_:1})]),_:1}))}}),fe=`<template>
  <Layout style="min-height: 300px">
    <Header style="background: #001529; color: #fff; padding: 0 24px; line-height: 64px"> Header </Header>
    <Layout>
      <Sider :width="200" style="background: #fff; border-right: 1px solid #f0f0f0">
        <div style="padding: 16px">Sider</div>
      </Sider>
      <Content style="padding: 24px; background: #f5f5f5"> Content </Content>
    </Layout>
    <Footer style="text-align: center; background: #f5f5f5"> Footer ©2024 </Footer>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, Header, Content, Footer, Sider } from 'ant-design-hmfw'
<\/script>
`,ge={style:{"margin-bottom":"16px"}},ce=m({__name:"LayoutTheme",setup(o){const d=y("dark"),l=()=>{d.value=d.value==="dark"?"light":"dark"};return(s,e)=>(h(),D("div",null,[t("div",ge,[n(a(Y),{style:{padding:"8px 16px",cursor:"pointer",border:"1px solid #d9d9d9","border-radius":"4px",background:"#fff"},onClick:l},{default:r(()=>[p(" 切换主题 (当前: "+b(d.value==="dark"?"暗色":"亮色")+") ",1)]),_:1})]),n(a(c),{style:{"min-height":"400px"}},{default:r(()=>[n(a(H),{theme:d.value,collapsible:""},{default:r(()=>[...e[0]||(e[0]=[t("div",{style:{padding:"16px",color:"inherit"}},[t("div",{style:{"margin-bottom":"12px"}},"菜单项 1"),t("div",{style:{"margin-bottom":"12px"}},"菜单项 2"),t("div",{style:{"margin-bottom":"12px"}},"菜单项 3"),t("div",{style:{"margin-bottom":"12px"}},"菜单项 4")],-1)])]),_:1},8,["theme"]),n(a(c),null,{default:r(()=>[n(a(S),{style:{background:"#fff",padding:"0 24px","line-height":"64px","box-shadow":"0 1px 4px rgba(0, 21, 41, 0.08)"}},{default:r(()=>[...e[1]||(e[1]=[t("h2",{style:{margin:"0",color:"#000"}},"主题切换演示",-1)])]),_:1}),n(a(w),{style:{margin:"24px 16px",padding:"24px",background:"#fff"}},{default:r(()=>[...e[2]||(e[2]=[t("p",null,"侧边栏支持 light 和 dark 两种主题。",-1),t("p",null,"主题切换时，背景色、文字颜色和边框颜色会平滑过渡（0.3s），提供流畅的视觉体验。",-1),t("p",null,"宽度变化保持快速响应（0.2s），确保交互的即时反馈。",-1)])]),_:1})]),_:1})]),_:1})]))}}),me=`<template>
  <div>
    <div style="margin-bottom: 16px">
      <Button
        style="padding: 8px 16px; cursor: pointer; border: 1px solid #d9d9d9; border-radius: 4px; background: #fff"
        @click="toggleTheme"
      >
        切换主题 (当前: {{ theme === 'dark' ? '暗色' : '亮色' }})
      </Button>
    </div>
    <Layout style="min-height: 400px">
      <Sider :theme="theme" collapsible>
        <div style="padding: 16px; color: inherit">
          <div style="margin-bottom: 12px">菜单项 1</div>
          <div style="margin-bottom: 12px">菜单项 2</div>
          <div style="margin-bottom: 12px">菜单项 3</div>
          <div style="margin-bottom: 12px">菜单项 4</div>
        </div>
      </Sider>
      <Layout>
        <Header
          style="background: #fff; padding: 0 24px; line-height: 64px; box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08)"
        >
          <h2 style="margin: 0; color: #000">主题切换演示</h2>
        </Header>
        <Content style="margin: 24px 16px; padding: 24px; background: #fff">
          <p>侧边栏支持 light 和 dark 两种主题。</p>
          <p>主题切换时，背景色、文字颜色和边框颜色会平滑过渡（0.3s），提供流畅的视觉体验。</p>
          <p>宽度变化保持快速响应（0.2s），确保交互的即时反馈。</p>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider } from 'ant-design-hmfw'
import { Button } from 'ant-design-hmfw'

const theme = ref<'light' | 'dark'>('dark')

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
<\/script>
`,ye={class:"markdown-body"},Le={__name:"layout",setup(o,{expose:d}){return d({frontmatter:{}}),(s,e)=>{const i=Q("DemoBlock");return h(),D("div",ye,[e[0]||(e[0]=t("h1",{id:"layout-布局",tabindex:"-1"},"Layout 布局",-1)),e[1]||(e[1]=t("p",null,"协助进行页面级整体布局。",-1)),e[2]||(e[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=t("ul",null,[t("li",null,"需要搭建页面整体结构时"),t("li",null,"需要侧边栏导航布局时"),t("li",null,"需要顶部导航 + 内容区布局时")],-1)),e[4]||(e[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=t("h3",{id:"基础布局上中下",tabindex:"-1"},"基础布局（上中下）",-1)),e[6]||(e[6]=t("p",null,"最基本的上中下布局。",-1)),n(i,{title:"基础布局（上中下）",source:a(de)},{default:r(()=>[n(ne)]),_:1},8,["source"]),e[7]||(e[7]=t("h3",{id:"带侧边栏",tabindex:"-1"},"带侧边栏",-1)),e[8]||(e[8]=t("p",null,"左侧边栏 + 右侧内容区布局。",-1)),n(i,{title:"带侧边栏",source:a(fe)},{default:r(()=>[n(ue)]),_:1},8,["source"]),e[9]||(e[9]=t("h3",{id:"可折叠侧边栏",tabindex:"-1"},"可折叠侧边栏",-1)),e[10]||(e[10]=t("p",null,[p("通过 "),t("code",null,"collapsible"),p(" 属性开启侧边栏折叠功能，支持 "),t("code",null,"onCollapse"),p(" 事件监听折叠状态变化。")],-1)),n(i,{title:"可折叠侧边栏",source:a(re)},{default:r(()=>[n(le)]),_:1},8,["source"]),e[11]||(e[11]=t("h3",{id:"响应式布局",tabindex:"-1"},"响应式布局",-1)),e[12]||(e[12]=t("p",null,[p("通过 "),t("code",null,"breakpoint"),p(" 属性设置响应式断点，当窗口宽度小于断点时自动折叠侧边栏。设置 "),t("code",null,"collapsedWidth={0}"),p(" 会显示特殊的浮动触发器。")],-1)),n(i,{title:"响应式布局",source:a(pe)},{default:r(()=>[n(se)]),_:1},8,["source"]),e[13]||(e[13]=t("h3",{id:"自定义触发器",tabindex:"-1"},"自定义触发器",-1)),e[14]||(e[14]=t("p",null,[p("设置 "),t("code",null,"trigger={null}"),p(" 隐藏默认触发器，可以在其他位置放置自定义触发器。")],-1)),n(i,{title:"自定义触发器",source:a(ie)},{default:r(()=>[n(ae)]),_:1},8,["source"]),e[15]||(e[15]=t("h3",{id:"主题切换",tabindex:"-1"},"主题切换",-1)),e[16]||(e[16]=t("p",null,[p("侧边栏支持 "),t("code",null,"light"),p(" 和 "),t("code",null,"dark"),p(" 两种主题，主题切换时会有平滑的过渡动画。")],-1)),n(i,{title:"主题切换",source:a(me)},{default:r(()=>[n(ce)]),_:1},8,["source"]),e[17]||(e[17]=X('<h2 id="api" tabindex="-1">API</h2><h3 id="layout-props" tabindex="-1">Layout Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>hasSider</td><td>表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="sider-props" tabindex="-1">Sider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>宽度</td><td><code>number | string</code></td><td><code>200</code></td></tr><tr><td>collapsible</td><td>是否可收起</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>collapsed(v-model)</td><td>当前收起状态</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultCollapsed</td><td>是否默认收起</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>collapsedWidth</td><td>收缩宽度，设置为 0 会出现特殊 trigger</td><td><code>number | string</code></td><td><code>80</code></td></tr><tr><td>breakpoint</td><td>触发响应式布局的断点</td><td><code>&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;xxl&#39; | &#39;xxxl&#39;</code></td><td>-</td></tr><tr><td>theme</td><td>主题颜色</td><td><code>&#39;light&#39; | &#39;dark&#39;</code></td><td><code>&#39;dark&#39;</code></td></tr><tr><td>trigger</td><td>自定义 trigger，设为 null 时隐藏 trigger</td><td><code>VNode | null</code></td><td>-</td></tr><tr><td>reverseArrow</td><td>翻转折叠提示箭头的方向</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>zeroWidthTriggerStyle</td><td>指定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="layout-slots" tabindex="-1">Layout Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>子元素内容</td></tr></tbody></table><h3 id="sider-events" tabindex="-1">Sider Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>collapse</td><td>展开/收起时触发</td><td><code>(collapsed: boolean, type: &#39;clickTrigger&#39; | &#39;responsive&#39;) =&gt; void</code></td></tr><tr><td>breakpoint</td><td>触发响应式布局断点时触发</td><td><code>(broken: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="sider-slots" tabindex="-1">Sider Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>侧边栏内容</td></tr><tr><td>trigger</td><td>自定义折叠触发器</td></tr></tbody></table><h2 id="组件说明" tabindex="-1">组件说明</h2><p>Layout: 布局容器，其下可嵌套 <code>Header</code> <code>Sider</code> <code>Content</code> <code>Footer</code> 或 <code>Layout</code> 本身，可以放在任何父容器中。</p><p>Header: 顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p><p>Sider: 侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p><p>Content: 内容部分，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p><p>Footer: 底部布局，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p><p>Layout 系列组件（Layout/Header/Footer/Content/Sider）多为单元素透传组件，可直接使用原生 class 和 style attribute 进行样式定制。Sider 的 trigger 元素如需自定义样式，请使用 trigger slot 完全替换。</p><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Layout 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-header</code></td><td>Header 背景色</td><td><code>#001529</code></td></tr><tr><td><code>--hmfw-color-bg-layout</code></td><td>Layout 背景色</td><td><code>#f5f5f5</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-light-solid</code></td><td>浅色文本（白色）</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr></tbody></table>',21))])}}};export{Le as default};
