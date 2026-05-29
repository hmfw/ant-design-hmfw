import{k as f,I as x,j as n,c as y,m as V,t as H,u as B,z as S,x as M,w as h,e as L,M as r,G as i,i as p,d as a,E as F,B as U,g as j,h as z}from"./index-DvxRruME.js";import{c as N}from"./cls-S9IiI6wd.js";const E=Symbol("layout-sider"),m=f({name:"Layout",props:{hasSider:Boolean},setup(o,{slots:d}){const e=x("layout"),l=S(0);M(E,{addSider:()=>l.value++,removeSider:()=>l.value--});const t=y(()=>N(e,{[`${e}-has-sider`]:o.hasSider??l.value>0}));return()=>{var s;return n("section",{class:t.value},[(s=d.default)==null?void 0:s.call(d)])}}}),w=f({name:"Header",setup(o,{slots:d}){const e=x("layout");return()=>{var l;return n("header",{class:`${e}-header`},[(l=d.default)==null?void 0:l.call(d)])}}}),W=f({name:"Footer",setup(o,{slots:d}){const e=x("layout");return()=>{var l;return n("footer",{class:`${e}-footer`},[(l=d.default)==null?void 0:l.call(d)])}}}),_=f({name:"Content",setup(o,{slots:d}){const e=x("layout");return()=>{var l;return n("main",{class:`${e}-content`},[(l=d.default)==null?void 0:l.call(d)])}}}),K={xs:480,sm:576,md:768,lg:992,xl:1200,xxl:1600},P=f({name:"Sider",props:{width:{type:[Number,String],default:200},collapsedWidth:{type:[Number,String],default:80},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,collapsible:Boolean,reverseArrow:Boolean,breakpoint:String,theme:{type:String,default:"dark"},trigger:{type:Boolean,default:void 0}},emits:["collapse","update:collapsed","breakpoint"],setup(o,{slots:d,emit:e}){const t=`${x("layout")}-sider`,s=V(E,null);H(()=>s==null?void 0:s.addSider()),B(()=>s==null?void 0:s.removeSider());const v=S(o.defaultCollapsed??!1),c=y(()=>o.collapsed!==void 0?o.collapsed:v.value),T=()=>{const u=!c.value;v.value=u,e("update:collapsed",u),e("collapse",u,"clickTrigger")};let g=null;const k=u=>{const b=!u.matches;v.value=b,e("breakpoint",b),e("collapse",b,"responsive")};H(()=>{if(o.breakpoint&&typeof window<"u"){const u=K[o.breakpoint];g=window.matchMedia(`(min-width: ${u}px)`),g.addEventListener("change",k),k(g)}}),B(()=>{g==null||g.removeEventListener("change",k)});const C=y(()=>c.value?o.collapsedWidth:o.width),A=y(()=>o.trigger!==void 0?o.trigger:o.collapsible),D=y(()=>Number(o.collapsedWidth)===0),I=y(()=>N(t,`${t}-${o.theme}`,{[`${t}-collapsed`]:c.value,[`${t}-zero-width`]:c.value&&D.value}));return()=>{var $;const u=typeof C.value=="number"?`${C.value}px`:C.value,b=A.value&&n("div",{class:`${t}-trigger`,onClick:T,style:{width:u}},[d.trigger?d.trigger({collapsed:c.value}):n("span",{class:`${t}-trigger-icon`},[(o.reverseArrow,c.value?"›":"‹")])]);return n("aside",{class:I.value,style:{flex:`0 0 ${u}`,maxWidth:u,minWidth:u,width:u}},[n("div",{class:`${t}-children`},[($=d.default)==null?void 0:$.call(d)]),b])}}}),O=f({__name:"LayoutBasic",setup(o){return(d,e)=>(h(),L(i(m),{style:{"min-height":"200px"}},{default:r(()=>[n(i(w),{style:{background:"#001529",color:"#fff",padding:"0 24px","line-height":"64px"}},{default:r(()=>[...e[0]||(e[0]=[p(" Header ",-1)])]),_:1}),n(i(_),{style:{padding:"24px",background:"#fff"}},{default:r(()=>[...e[1]||(e[1]=[p(" Content ",-1)])]),_:1}),n(i(W),{style:{"text-align":"center",background:"#f5f5f5"}},{default:r(()=>[...e[2]||(e[2]=[p(" Footer ©2024 Created by ant-design-hmfw ",-1)])]),_:1})]),_:1}))}}),R=`<template>
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
`,Y={style:{color:"#fff",padding:"16px","text-align":"center"}},G=f({__name:"LayoutCollapsible",setup(o){const d=S(!1);return(e,l)=>(h(),L(i(m),{style:{"min-height":"300px"}},{default:r(()=>[n(i(P),{collapsed:d.value,"onUpdate:collapsed":l[0]||(l[0]=t=>d.value=t),collapsible:"",width:200,"collapsed-width":64,style:{background:"#001529"}},{default:r(()=>[a("div",Y,F(d.value?"收":"导航菜单"),1)]),_:1},8,["collapsed"]),n(i(m),null,{default:r(()=>[n(i(w),{style:{background:"#fff",padding:"0 24px","border-bottom":"1px solid #f0f0f0","line-height":"64px"}},{default:r(()=>[...l[1]||(l[1]=[p(" Header ",-1)])]),_:1}),n(i(_),{style:{padding:"24px",background:"#f5f5f5"}},{default:r(()=>[a("p",null,"当前状态："+F(d.value?"已折叠":"已展开"),1)]),_:1})]),_:1})]),_:1}))}}),Z=`<template>
  <Layout style="min-height: 300px">
    <Sider
      v-model:collapsed="collapsed"
      collapsible
      :width="200"
      :collapsed-width="64"
      style="background: #001529;"
    >
      <div style="color: #fff; padding: 16px; text-align: center;">
        {{ collapsed ? '收' : '导航菜单' }}
      </div>
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0 24px; border-bottom: 1px solid #f0f0f0; line-height: 64px;">
        Header
      </Header>
      <Content style="padding: 24px; background: #f5f5f5;">
        <p>当前状态：{{ collapsed ? '已折叠' : '已展开' }}</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider } from 'ant-design-hmfw'

const collapsed = ref(false)
<\/script>
`,J=f({__name:"LayoutSider",setup(o){return(d,e)=>(h(),L(i(m),{style:{"min-height":"300px"}},{default:r(()=>[n(i(w),{style:{background:"#001529",color:"#fff",padding:"0 24px","line-height":"64px"}},{default:r(()=>[...e[0]||(e[0]=[p(" Header ",-1)])]),_:1}),n(i(m),null,{default:r(()=>[n(i(P),{width:200,style:{background:"#fff","border-right":"1px solid #f0f0f0"}},{default:r(()=>[...e[1]||(e[1]=[a("div",{style:{padding:"16px"}},"Sider",-1)])]),_:1}),n(i(_),{style:{padding:"24px",background:"#f5f5f5"}},{default:r(()=>[...e[2]||(e[2]=[p(" Content ",-1)])]),_:1})]),_:1}),n(i(W),{style:{"text-align":"center",background:"#f5f5f5"}},{default:r(()=>[...e[3]||(e[3]=[p(" Footer ©2024 ",-1)])]),_:1})]),_:1}))}}),Q=`<template>
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
`,X={class:"markdown-body"},et={__name:"layout",setup(o,{expose:d}){return d({frontmatter:{}}),(l,t)=>{const s=U("DemoBlock");return h(),j("div",X,[t[0]||(t[0]=a("h1",{id:"layout-",tabindex:"-1"},"Layout 布局",-1)),t[1]||(t[1]=a("p",null,"协助进行页面级整体布局。",-1)),t[2]||(t[2]=a("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=a("ul",null,[a("li",null,"需要搭建页面整体结构时"),a("li",null,"需要侧边栏导航布局时"),a("li",null,"需要顶部导航 + 内容区布局时")],-1)),t[4]||(t[4]=a("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=a("h3",{id:"-2",tabindex:"-1"},"基础布局（上中下）",-1)),t[6]||(t[6]=a("p",null,"最基本的上中下布局。",-1)),n(s,{title:"基础布局（上中下）",source:i(R)},{default:r(()=>[n(O)]),_:1},8,["source"]),t[7]||(t[7]=a("h3",{id:"-3",tabindex:"-1"},"带侧边栏",-1)),t[8]||(t[8]=a("p",null,"左侧边栏 + 右侧内容区布局。",-1)),n(s,{title:"带侧边栏",source:i(Q)},{default:r(()=>[n(J)]),_:1},8,["source"]),t[9]||(t[9]=a("h3",{id:"-4",tabindex:"-1"},"可折叠侧边栏",-1)),t[10]||(t[10]=a("p",null,[p("通过 "),a("code",null,"collapsible"),p(" 属性开启侧边栏折叠功能。")],-1)),n(s,{title:"可折叠侧边栏",source:i(Z)},{default:r(()=>[n(G)]),_:1},8,["source"]),t[11]||(t[11]=z('<h2 id="api" tabindex="-1">API</h2><h3 id="layout-props" tabindex="-1">Layout Props</h3><p>Layout、Header、Footer、Content 均为容器组件，无特殊 Props，通过 slot 传入内容。</p><h3 id="sider-props" tabindex="-1">Sider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>宽度</td><td><code>number | string</code></td><td><code>200</code></td></tr><tr><td>collapsible</td><td>是否可收起</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>collapsed</td><td>当前收起状态（v-model）</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultCollapsed</td><td>是否默认收起</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>collapsedWidth</td><td>收缩宽度，设置为 0 会出现特殊 trigger</td><td><code>number</code></td><td><code>80</code></td></tr><tr><td>breakpoint</td><td>触发响应式布局的断点</td><td><code>&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;xxl&#39;</code></td><td>-</td></tr><tr><td>trigger</td><td>自定义 trigger，设为 null 时隐藏 trigger</td><td><code>string | null</code></td><td>-</td></tr></tbody></table><h3 id="layout-slots" tabindex="-1">Layout Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>子元素内容</td></tr></tbody></table><h3 id="sider-events" tabindex="-1">Sider Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>collapse</td><td>展开/收起时触发</td><td><code>(collapsed: boolean, type: &#39;clickTrigger&#39; | &#39;responsive&#39;) =&gt; void</code></td></tr><tr><td>breakpoint</td><td>触发响应式布局断点时触发</td><td><code>(broken: boolean) =&gt; void</code></td></tr></tbody></table>',9))])}}};export{et as default};
