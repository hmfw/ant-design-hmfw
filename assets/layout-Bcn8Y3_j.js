import{a0 as J,S as E,a7 as R}from"./icons-DLCoPw-s.js";import{n as y,M as T,m as n,e as C,p as Q,w as O,x as P,D as m,A as Z,z as h,h as B,Q as a,J as r,l as u,g as t,I as b,j as D,G as X,k as q}from"./index-BIkAb7lZ.js";import{I as w}from"./Icon-DOjVoSFw.js";import{c as N}from"./cls-S9IiI6wd.js";const I=Symbol("layout-sider"),c=y({name:"Layout",props:{hasSider:Boolean},setup(d,{slots:o}){const l=T("layout"),s=m(0);Z(I,{addSider:()=>s.value++,removeSider:()=>s.value--});const e=C(()=>{const i=d.hasSider!==void 0?d.hasSider:s.value>0;return N(l,{[`${l}-has-sider`]:i})});return()=>{var i;return n("section",{class:e.value},[(i=o.default)==null?void 0:i.call(o)])}}}),S=y({name:"Header",setup(d,{slots:o}){const l=T("layout");return()=>{var s;return n("header",{class:`${l}-header`},[(s=o.default)==null?void 0:s.call(o)])}}}),Y=y({name:"Footer",setup(d,{slots:o}){const l=T("layout");return()=>{var s;return n("footer",{class:`${l}-footer`},[(s=o.default)==null?void 0:s.call(o)])}}}),L=y({name:"Content",setup(d,{slots:o}){const l=T("layout");return()=>{var s;return n("main",{class:`${l}-content`},[(s=o.default)==null?void 0:s.call(o)])}}}),ee={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px",xxxl:"1839.98px"},H=y({name:"Sider",props:{width:{type:[Number,String],default:200},collapsedWidth:{type:[Number,String],default:80},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,collapsible:Boolean,reverseArrow:Boolean,breakpoint:String,theme:{type:String,default:"dark"},trigger:{type:[Object,null],default:void 0},zeroWidthTriggerStyle:Object,onCollapse:Function,onBreakpoint:Function},emits:["collapse","update:collapsed","breakpoint"],setup(d,{slots:o,emit:l}){const e=`${T("layout")}-sider`,i=Q(I,null);O(()=>i==null?void 0:i.addSider()),P(()=>i==null?void 0:i.removeSider());const f=m(d.defaultCollapsed??!1),_=m(!1),v=C(()=>d.collapsed!==void 0?d.collapsed:f.value),F=(p,g)=>{var x;d.collapsed===void 0&&(f.value=p),l("update:collapsed",p),l("collapse",p,g),(x=d.onCollapse)==null||x.call(d,p,g)},W=()=>{F(!v.value,"clickTrigger")};let k=null;const $=p=>{var x;const g=p.matches;_.value=g,l("breakpoint",g),(x=d.onBreakpoint)==null||x.call(d,g),v.value!==g&&F(g,"responsive")};O(()=>{if(d.breakpoint&&typeof window<"u"){const p=ee[d.breakpoint];k=window.matchMedia(`screen and (max-width: ${p})`),k.addEventListener("change",$),$(k)}}),P(()=>{k==null||k.removeEventListener("change",$)});const V=C(()=>v.value?d.collapsedWidth:d.width),j=p=>!Number.isNaN(Number.parseFloat(p))&&Number.isFinite(Number(p)),z=C(()=>{const p=V.value;return j(p)?`${p}px`:String(p)}),M=C(()=>Number.parseFloat(String(d.collapsedWidth||0))===0),U=C(()=>N(e,`${e}-${d.theme}`,{[`${e}-collapsed`]:v.value,[`${e}-has-trigger`]:d.collapsible&&d.trigger!==null&&!M.value,[`${e}-below`]:_.value,[`${e}-zero-width`]:Number.parseFloat(z.value)===0}));return()=>{var A;const p=z.value,g=M.value&&v.value?n("span",{onClick:W,class:N(`${e}-zero-width-trigger`,`${e}-zero-width-trigger-${d.reverseArrow?"right":"left"}`),style:d.zeroWidthTriggerStyle},[d.trigger!==void 0?d.trigger:n(w,{component:J},null)]):null,x=()=>v.value?d.reverseArrow?n(w,{component:E},null):n(w,{component:R},null):d.reverseArrow?n(w,{component:R},null):n(w,{component:E},null),K=d.trigger!==null?g||n("div",{class:`${e}-trigger`,onClick:W,style:{width:p}},[d.trigger!==void 0?d.trigger:x()]):null,G={flex:`0 0 ${p}`,maxWidth:p,minWidth:p,width:p};return n("aside",{class:U.value,style:G},[n("div",{class:`${e}-children`},[(A=o.default)==null?void 0:A.call(o)]),d.collapsible||_.value&&g?K:null])}}}),te=y({__name:"LayoutBasic",setup(d){return(o,l)=>(h(),B(r(c),{style:{"min-height":"200px"}},{default:a(()=>[n(r(S),{style:{background:"#001529",color:"#fff",padding:"0 24px","line-height":"64px"}},{default:a(()=>[...l[0]||(l[0]=[u(" Header ",-1)])]),_:1}),n(r(L),{style:{padding:"24px",background:"#fff"}},{default:a(()=>[...l[1]||(l[1]=[u(" Content ",-1)])]),_:1}),n(r(Y),{style:{"text-align":"center",background:"#f5f5f5"}},{default:a(()=>[...l[2]||(l[2]=[u(" Footer ©2024 Created by ant-design-hmfw ",-1)])]),_:1})]),_:1}))}}),ne=`<template>
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
`,oe={style:{color:"#fff",padding:"16px","text-align":"center"}},de=y({__name:"LayoutCollapsible",setup(d){const o=m(!1),l=m("clickTrigger"),s=(e,i)=>{l.value=i,console.log("Collapsed:",e,"Type:",i)};return(e,i)=>(h(),B(r(c),{style:{"min-height":"400px"}},{default:a(()=>[n(r(H),{collapsed:o.value,"onUpdate:collapsed":i[0]||(i[0]=f=>o.value=f),collapsible:"",width:200,"collapsed-width":80,style:{background:"#001529"},onCollapse:s},{default:a(()=>[t("div",oe,b(o.value?"Menu":"Navigation Menu"),1)]),_:1},8,["collapsed"]),n(r(c),null,{default:a(()=>[n(r(S),{style:{background:"#fff",padding:"0 24px","border-bottom":"1px solid #f0f0f0","line-height":"64px"}},{default:a(()=>[...i[1]||(i[1]=[u(" Header ",-1)])]),_:1}),n(r(L),{style:{padding:"24px",background:"#f5f5f5"}},{default:a(()=>[t("p",null,"Current state: "+b(o.value?"Collapsed":"Expanded"),1),t("p",null,"Collapse type: "+b(l.value),1)]),_:1})]),_:1})]),_:1}))}}),le=`<template>
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
`,ae=y({__name:"LayoutCustomTrigger",setup(d){const o=m(!1);return(l,s)=>(h(),B(r(c),{style:{"min-height":"400px"}},{default:a(()=>[n(r(H),{trigger:null,collapsed:o.value,"onUpdate:collapsed":s[0]||(s[0]=e=>o.value=e),collapsible:"",style:{background:"#001529"}},{default:a(()=>[...s[2]||(s[2]=[t("div",{style:{color:"#fff",padding:"16px","text-align":"center"}}," Menu ",-1)])]),_:1},8,["collapsed"]),n(r(c),null,{default:a(()=>[n(r(S),{style:{background:"#fff",padding:"0 24px","line-height":"64px",display:"flex","align-items":"center"}},{default:a(()=>[t("button",{onClick:s[1]||(s[1]=e=>o.value=!o.value),style:{border:"none",background:"none",cursor:"pointer","font-size":"18px",padding:"8px"}},b(o.value?"☰":"✕"),1),s[3]||(s[3]=t("span",{style:{"margin-left":"16px"}},"Custom Trigger in Header",-1))]),_:1}),n(r(L),{style:{padding:"24px",background:"#f5f5f5"}},{default:a(()=>[...s[4]||(s[4]=[t("p",null,"This example shows how to use a custom trigger.",-1),t("p",null,[u("Set "),t("code",null,"trigger={null}"),u(" to hide the default trigger.")],-1)])]),_:1})]),_:1})]),_:1}))}}),re=`<template>
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
`,ie=y({__name:"LayoutResponsive",setup(d){const o=m(!1),l=m(!1),s=i=>{o.value=i,console.log("Breakpoint:",i)},e=(i,f)=>{l.value=i,console.log("Collapsed:",i,"Type:",f)};return(i,f)=>(h(),B(r(c),{style:{"min-height":"400px"}},{default:a(()=>[n(r(H),{breakpoint:"lg","collapsed-width":0,onBreakpoint:s,onCollapse:e,style:{background:"#001529"}},{default:a(()=>[...f[0]||(f[0]=[t("div",{style:{color:"#fff",padding:"16px"}},[t("div",{style:{"margin-bottom":"16px"}},"Navigation"),t("div",{style:{"font-size":"12px",opacity:"0.65"}}," Resize window to see responsive behavior ")],-1)])]),_:1}),n(r(c),null,{default:a(()=>[n(r(S),{style:{background:"#fff",padding:"0 24px","line-height":"64px"}},{default:a(()=>[...f[1]||(f[1]=[u(" Responsive Layout ",-1)])]),_:1}),n(r(L),{style:{padding:"24px",background:"#f5f5f5"}},{default:a(()=>[f[2]||(f[2]=t("p",null,"Breakpoint: lg (992px)",-1)),t("p",null,"Below breakpoint: "+b(o.value?"Yes":"No"),1),t("p",null,"Collapsed: "+b(l.value?"Yes":"No"),1)]),_:1})]),_:1})]),_:1}))}}),se=`<template>
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
`,pe=y({__name:"LayoutSider",setup(d){return(o,l)=>(h(),B(r(c),{style:{"min-height":"300px"}},{default:a(()=>[n(r(S),{style:{background:"#001529",color:"#fff",padding:"0 24px","line-height":"64px"}},{default:a(()=>[...l[0]||(l[0]=[u(" Header ",-1)])]),_:1}),n(r(c),null,{default:a(()=>[n(r(H),{width:200,style:{background:"#fff","border-right":"1px solid #f0f0f0"}},{default:a(()=>[...l[1]||(l[1]=[t("div",{style:{padding:"16px"}},"Sider",-1)])]),_:1}),n(r(L),{style:{padding:"24px",background:"#f5f5f5"}},{default:a(()=>[...l[2]||(l[2]=[u(" Content ",-1)])]),_:1})]),_:1}),n(r(Y),{style:{"text-align":"center",background:"#f5f5f5"}},{default:a(()=>[...l[3]||(l[3]=[u(" Footer ©2024 ",-1)])]),_:1})]),_:1}))}}),ue=`<template>
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
`,fe={style:{"margin-bottom":"16px"}},ge=y({__name:"LayoutTheme",setup(d){const o=m("dark"),l=()=>{o.value=o.value==="dark"?"light":"dark"};return(s,e)=>(h(),D("div",null,[t("div",fe,[t("button",{onClick:l,style:{padding:"8px 16px",cursor:"pointer",border:"1px solid #d9d9d9","border-radius":"4px",background:"#fff"}}," 切换主题 (当前: "+b(o.value==="dark"?"暗色":"亮色")+") ",1)]),n(r(c),{style:{"min-height":"400px"}},{default:a(()=>[n(r(H),{theme:o.value,collapsible:""},{default:a(()=>[...e[0]||(e[0]=[t("div",{style:{padding:"16px",color:"inherit"}},[t("div",{style:{"margin-bottom":"12px"}},"菜单项 1"),t("div",{style:{"margin-bottom":"12px"}},"菜单项 2"),t("div",{style:{"margin-bottom":"12px"}},"菜单项 3"),t("div",{style:{"margin-bottom":"12px"}},"菜单项 4")],-1)])]),_:1},8,["theme"]),n(r(c),null,{default:a(()=>[n(r(S),{style:{background:"#fff",padding:"0 24px","line-height":"64px","box-shadow":"0 1px 4px rgba(0,21,41,.08)"}},{default:a(()=>[...e[1]||(e[1]=[t("h2",{style:{margin:"0",color:"#000"}},"主题切换演示",-1)])]),_:1}),n(r(L),{style:{margin:"24px 16px",padding:"24px",background:"#fff"}},{default:a(()=>[...e[2]||(e[2]=[t("p",null,"侧边栏支持 light 和 dark 两种主题。",-1),t("p",null,"主题切换时，背景色、文字颜色和边框颜色会平滑过渡（0.3s），提供流畅的视觉体验。",-1),t("p",null,"宽度变化保持快速响应（0.2s），确保交互的即时反馈。",-1)])]),_:1})]),_:1})]),_:1})]))}}),ce=`<template>
  <div>
    <div style="margin-bottom: 16px">
      <button @click="toggleTheme" style="padding: 8px 16px; cursor: pointer; border: 1px solid #d9d9d9; border-radius: 4px; background: #fff;">
        切换主题 (当前: {{ theme === 'dark' ? '暗色' : '亮色' }})
      </button>
    </div>
    <Layout style="min-height: 400px">
      <Sider :theme="theme" collapsible>
        <div style="padding: 16px; color: inherit;">
          <div style="margin-bottom: 12px;">菜单项 1</div>
          <div style="margin-bottom: 12px;">菜单项 2</div>
          <div style="margin-bottom: 12px;">菜单项 3</div>
          <div style="margin-bottom: 12px;">菜单项 4</div>
        </div>
      </Sider>
      <Layout>
        <Header style="background: #fff; padding: 0 24px; line-height: 64px; box-shadow: 0 1px 4px rgba(0,21,41,.08);">
          <h2 style="margin: 0; color: #000;">主题切换演示</h2>
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
import { Layout, Header, Content, Sider } from '../../../components/layout'

const theme = ref<'light' | 'dark'>('dark')

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
<\/script>
`,ye={class:"markdown-body"},ve={__name:"layout",setup(d,{expose:o}){return o({frontmatter:{}}),(s,e)=>{const i=X("DemoBlock");return h(),D("div",ye,[e[0]||(e[0]=t("h1",{id:"layout-",tabindex:"-1"},"Layout 布局",-1)),e[1]||(e[1]=t("p",null,"协助进行页面级整体布局。",-1)),e[2]||(e[2]=t("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=t("ul",null,[t("li",null,"需要搭建页面整体结构时"),t("li",null,"需要侧边栏导航布局时"),t("li",null,"需要顶部导航 + 内容区布局时")],-1)),e[4]||(e[4]=t("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=t("h3",{id:"-2",tabindex:"-1"},"基础布局（上中下）",-1)),e[6]||(e[6]=t("p",null,"最基本的上中下布局。",-1)),n(i,{title:"基础布局（上中下）",source:r(ne)},{default:a(()=>[n(te)]),_:1},8,["source"]),e[7]||(e[7]=t("h3",{id:"-3",tabindex:"-1"},"带侧边栏",-1)),e[8]||(e[8]=t("p",null,"左侧边栏 + 右侧内容区布局。",-1)),n(i,{title:"带侧边栏",source:r(ue)},{default:a(()=>[n(pe)]),_:1},8,["source"]),e[9]||(e[9]=t("h3",{id:"-4",tabindex:"-1"},"可折叠侧边栏",-1)),e[10]||(e[10]=t("p",null,[u("通过 "),t("code",null,"collapsible"),u(" 属性开启侧边栏折叠功能，支持 "),t("code",null,"onCollapse"),u(" 事件监听折叠状态变化。")],-1)),n(i,{title:"可折叠侧边栏",source:r(le)},{default:a(()=>[n(de)]),_:1},8,["source"]),e[11]||(e[11]=t("h3",{id:"-5",tabindex:"-1"},"响应式布局",-1)),e[12]||(e[12]=t("p",null,[u("通过 "),t("code",null,"breakpoint"),u(" 属性设置响应式断点，当窗口宽度小于断点时自动折叠侧边栏。设置 "),t("code",null,"collapsedWidth={0}"),u(" 会显示特殊的浮动触发器。")],-1)),n(i,{title:"响应式布局",source:r(se)},{default:a(()=>[n(ie)]),_:1},8,["source"]),e[13]||(e[13]=t("h3",{id:"-6",tabindex:"-1"},"自定义触发器",-1)),e[14]||(e[14]=t("p",null,[u("设置 "),t("code",null,"trigger={null}"),u(" 隐藏默认触发器，可以在其他位置放置自定义触发器。")],-1)),n(i,{title:"自定义触发器",source:r(re)},{default:a(()=>[n(ae)]),_:1},8,["source"]),e[15]||(e[15]=t("h3",{id:"-7",tabindex:"-1"},"主题切换",-1)),e[16]||(e[16]=t("p",null,[u("侧边栏支持 "),t("code",null,"light"),u(" 和 "),t("code",null,"dark"),u(" 两种主题，主题切换时会有平滑的过渡动画。")],-1)),n(i,{title:"主题切换",source:r(ce)},{default:a(()=>[n(ge)]),_:1},8,["source"]),e[17]||(e[17]=q('<h2 id="api" tabindex="-1">API</h2><h3 id="layout-props" tabindex="-1">Layout Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>hasSider</td><td>表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="sider-props" tabindex="-1">Sider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>宽度</td><td><code>number | string</code></td><td><code>200</code></td></tr><tr><td>collapsible</td><td>是否可收起</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>collapsed(v-model)</td><td>当前收起状态</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultCollapsed</td><td>是否默认收起</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>collapsedWidth</td><td>收缩宽度，设置为 0 会出现特殊 trigger</td><td><code>number | string</code></td><td><code>80</code></td></tr><tr><td>breakpoint</td><td>触发响应式布局的断点</td><td><code>&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;xxl&#39; | &#39;xxxl&#39;</code></td><td>-</td></tr><tr><td>theme</td><td>主题颜色</td><td><code>&#39;light&#39; | &#39;dark&#39;</code></td><td><code>&#39;dark&#39;</code></td></tr><tr><td>trigger</td><td>自定义 trigger，设为 null 时隐藏 trigger</td><td><code>VNode | null</code></td><td>-</td></tr><tr><td>reverseArrow</td><td>翻转折叠提示箭头的方向</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>zeroWidthTriggerStyle</td><td>指定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="layout-slots" tabindex="-1">Layout Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>子元素内容</td></tr></tbody></table><h3 id="sider-events" tabindex="-1">Sider Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>collapse</td><td>展开/收起时触发</td><td><code>(collapsed: boolean, type: &#39;clickTrigger&#39; | &#39;responsive&#39;) =&gt; void</code></td></tr><tr><td>breakpoint</td><td>触发响应式布局断点时触发</td><td><code>(broken: boolean) =&gt; void</code></td></tr></tbody></table><h2 id="-8" tabindex="-1">组件说明</h2><p>Layout: 布局容器，其下可嵌套 <code>Header</code> <code>Sider</code> <code>Content</code> <code>Footer</code> 或 <code>Layout</code> 本身，可以放在任何父容器中。</p><p>Header: 顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p><p>Sider: 侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p><p>Content: 内容部分，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p><p>Footer: 底部布局，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p>',15))])}}};export{ve as default};
