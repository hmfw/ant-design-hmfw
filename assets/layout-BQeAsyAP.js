import{H as y,C as x,F as k,a as s,S as h}from"./Layout-DnYKci-Q.js";import{d as b,o as g,q as v,w as n,c as d,e as o,g as a,f as t,s as f,r as m,b as C,h as L,i as S}from"./index-dV6GQSVR.js";import{B as w}from"./Button-CbNYWpGi.js";import{a as H,M as B}from"./MenuUnfoldOutlined-B6LC6AzO.js";import"./MinusOutlined-CrwSzt8c.js";import"./LeftOutlined-BuM7EJkK.js";import"./RightOutlined-BrW4FxGI.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-CdSjzm5S.js";const T=b({__name:"LayoutBasic",setup(c){return(l,i)=>(g(),v(o(s),{style:{"min-height":"200px"}},{default:n(()=>[d(o(y),null,{default:n(()=>[...i[0]||(i[0]=[a(" Header ",-1)])]),_:1}),d(o(x),{style:{margin:"24px 16px 0",padding:"24px",background:"#fff","min-height":"200px"}},{default:n(()=>[...i[1]||(i[1]=[a(" Content ",-1)])]),_:1}),d(o(k),{style:{"text-align":"center"}},{default:n(()=>[...i[2]||(i[2]=[a(" Footer ©2026 Created by hmfw ",-1)])]),_:1})]),_:1}))}}),_=`<template>
  <Layout style="min-height: 200px">
    <Header> Header </Header>
    <Content style="margin: 24px 16px 0; padding: 24px; background: #fff; min-height: 200px"> Content </Content>
    <Footer style="text-align: center"> Footer ©2026 Created by hmfw </Footer>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, Header, Content, Footer } from '@hmfw/ant-design'
<\/script>
`,F={style:{color:"#fff",padding:"16px","text-align":"center"}},N=b({__name:"LayoutCollapsible",setup(c){const l=m(!1),i=m("clickTrigger"),r=(e,p)=>{i.value=p,console.log("Collapsed:",e,"Type:",p)};return(e,p)=>(g(),v(o(s),{style:{"min-height":"400px"}},{default:n(()=>[d(o(h),{collapsed:l.value,"onUpdate:collapsed":p[0]||(p[0]=u=>l.value=u),collapsible:"",width:200,"collapsed-width":80,onCollapse:r},{default:n(()=>[t("div",F,f(l.value?"Menu":"Navigation Menu"),1)]),_:1},8,["collapsed"]),d(o(s),null,{default:n(()=>[d(o(y),{style:{padding:"0 24px","border-bottom":"1px solid #f0f0f0",background:"#1677ff"}},{default:n(()=>[...p[1]||(p[1]=[a(" Header ",-1)])]),_:1}),d(o(x),{style:{margin:"24px 16px",padding:"24px",background:"#fff"}},{default:n(()=>[t("p",null,"Current state: "+f(l.value?"Collapsed":"Expanded"),1),t("p",null,"Collapse type: "+f(i.value),1)]),_:1})]),_:1})]),_:1}))}}),M=`<template>
  <Layout style="min-height: 400px">
    <Sider v-model:collapsed="collapsed" collapsible :width="200" :collapsed-width="80" @collapse="onCollapse">
      <div style="color: #fff; padding: 16px; text-align: center">
        {{ collapsed ? 'Menu' : 'Navigation Menu' }}
      </div>
    </Sider>
    <Layout>
      <Header style="padding: 0 24px; border-bottom: 1px solid #f0f0f0; background: #1677ff"> Header </Header>
      <Content style="margin: 24px 16px; padding: 24px; background: #fff">
        <p>Current state: {{ collapsed ? 'Collapsed' : 'Expanded' }}</p>
        <p>Collapse type: {{ collapseType }}</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider } from '@hmfw/ant-design'
import type { CollapseType } from '@hmfw/ant-design'

const collapsed = ref(false)
const collapseType = ref<CollapseType>('clickTrigger')

const onCollapse = (value: boolean, type: CollapseType) => {
  collapseType.value = type
  console.log('Collapsed:', value, 'Type:', type)
}
<\/script>
`,$=b({__name:"LayoutCustomTrigger",setup(c){const l=m(!1);return(i,r)=>(g(),v(o(s),{style:{"min-height":"400px"}},{default:n(()=>[d(o(h),{collapsed:l.value,"onUpdate:collapsed":r[0]||(r[0]=e=>l.value=e),trigger:null,collapsible:""},{default:n(()=>[...r[2]||(r[2]=[t("div",{style:{color:"#fff",padding:"16px","text-align":"center"}},"Menu",-1)])]),_:1},8,["collapsed"]),d(o(s),null,{default:n(()=>[d(o(y),{style:{background:"#fff",padding:"0 24px",display:"flex","align-items":"center"}},{default:n(()=>[d(o(w),{type:"primary",shape:"round",icon:l.value?o(H):o(B),onClick:r[1]||(r[1]=e=>l.value=!l.value)},null,8,["icon"]),r[3]||(r[3]=t("span",{style:{"margin-left":"16px",color:"#333"}},"Custom Trigger in Header",-1))]),_:1}),d(o(x),{style:{margin:"24px 16px",padding:"24px",background:"#fff"}},{default:n(()=>[...r[4]||(r[4]=[t("p",null,"This example shows how to use a custom trigger.",-1),t("p",null,[a("Set "),t("code",null,"trigger={null}"),a(" to hide the default trigger.")],-1)])]),_:1})]),_:1})]),_:1}))}}),A=`<template>
  <Layout style="min-height: 400px">
    <Sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div style="color: #fff; padding: 16px; text-align: center">Menu</div>
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0 24px; display: flex; align-items: center">
        <Button
          type="primary"
          shape="round"
          :icon="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined"
          @click="collapsed = !collapsed"
        ></Button>
        <span style="margin-left: 16px; color: #333">Custom Trigger in Header</span>
      </Header>
      <Content style="margin: 24px 16px; padding: 24px; background: #fff">
        <p>This example shows how to use a custom trigger.</p>
        <p>Set <code>trigger={null}</code> to hide the default trigger.</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider, Button } from '@hmfw/ant-design'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@hmfw/icons'
// <MenuFoldOutlined class="hmfw-icon" />
// <MenuUnfoldOutlined class="hmfw-icon" />
const collapsed = ref(false)
<\/script>
`,O=b({__name:"LayoutResponsive",setup(c){const l=m(!1),i=m(!1),r=p=>{l.value=p,console.log("Breakpoint:",p)},e=(p,u)=>{i.value=p,console.log("Collapsed:",p,"Type:",u)};return(p,u)=>(g(),v(o(s),{style:{"min-height":"400px"}},{default:n(()=>[d(o(h),{breakpoint:"lg","collapsed-width":0,onBreakpoint:r,onCollapse:e},{default:n(()=>[...u[0]||(u[0]=[t("div",{style:{color:"#fff",padding:"16px"}},[t("div",{style:{"margin-bottom":"16px"}},"Navigation"),t("div",{style:{"font-size":"12px",opacity:"0.65"}},"Resize window to see responsive behavior")],-1)])]),_:1}),d(o(s),null,{default:n(()=>[d(o(y),{style:{background:"#1677ff",padding:"0 24px"}},{default:n(()=>[...u[1]||(u[1]=[a(" Responsive Layout ",-1)])]),_:1}),d(o(x),{style:{margin:"24px 16px",padding:"24px",background:"#fff"}},{default:n(()=>[u[2]||(u[2]=t("p",null,"Breakpoint: lg (992px)",-1)),t("p",null,"Below breakpoint: "+f(l.value?"Yes":"No"),1),t("p",null,"Collapsed: "+f(i.value?"Yes":"No"),1)]),_:1})]),_:1})]),_:1}))}}),R=`<template>
  <Layout style="min-height: 400px">
    <Sider breakpoint="lg" :collapsed-width="0" @breakpoint="onBreakpoint" @collapse="onCollapse">
      <div style="color: #fff; padding: 16px">
        <div style="margin-bottom: 16px">Navigation</div>
        <div style="font-size: 12px; opacity: 0.65">Resize window to see responsive behavior</div>
      </div>
    </Sider>
    <Layout>
      <Header style="background: #1677ff; padding: 0 24px"> Responsive Layout </Header>
      <Content style="margin: 24px 16px; padding: 24px; background: #fff">
        <p>Breakpoint: lg (992px)</p>
        <p>Below breakpoint: {{ isBelowBreakpoint ? 'Yes' : 'No' }}</p>
        <p>Collapsed: {{ isCollapsed ? 'Yes' : 'No' }}</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider } from '@hmfw/ant-design'
import type { CollapseType } from '@hmfw/ant-design'

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
`,V={style:{color:"#fff",padding:"16px","text-align":"center"}},U={style:{"margin-top":"16px",color:"#666"}},z=b({__name:"LayoutReverseArrow",setup(c){const l=m(!1);return(i,r)=>(g(),v(o(s),{style:{"min-height":"300px"}},{default:n(()=>[d(o(h),{collapsed:l.value,"onUpdate:collapsed":r[0]||(r[0]=e=>l.value=e),collapsible:"","reverse-arrow":!0,width:200,"collapsed-width":80},{default:n(()=>[t("div",V,f(l.value?"←":"→")+" Sidebar",1)]),_:1},8,["collapsed"]),d(o(s),null,{default:n(()=>[d(o(y),{style:{background:"#1677ff",padding:"0 24px","border-bottom":"1px solid #f0f0f0"}},{default:n(()=>[...r[1]||(r[1]=[a(" reverseArrow ",-1)])]),_:1}),d(o(x),{style:{margin:"24px 16px",padding:"24px",background:"#fff"}},{default:n(()=>[r[2]||(r[2]=t("p",null,[t("code",null,"reverseArrow"),a(" 为 "),t("code",null,"true"),a(" 时，箭头方向会被翻转。")],-1)),r[3]||(r[3]=t("p",null,"展开状态：显示右箭头 → 点击后向右侧收起",-1)),r[4]||(r[4]=t("p",null,"折叠状态：显示左箭头 ← 点击后向左侧展开",-1)),t("p",U,"当前状态："+f(l.value?"已折叠":"已展开"),1)]),_:1})]),_:1})]),_:1}))}}),P=`<template>
  <Layout style="min-height: 300px">
    <Sider v-model:collapsed="collapsed" collapsible :reverse-arrow="true" :width="200" :collapsed-width="80">
      <div style="color: #fff; padding: 16px; text-align: center">{{ collapsed ? '←' : '→' }} Sidebar</div>
    </Sider>
    <Layout>
      <Header style="background: #1677ff; padding: 0 24px; border-bottom: 1px solid #f0f0f0"> reverseArrow </Header>
      <Content style="margin: 24px 16px; padding: 24px; background: #fff">
        <p><code>reverseArrow</code> 为 <code>true</code> 时，箭头方向会被翻转。</p>
        <p>展开状态：显示右箭头 → 点击后向右侧收起</p>
        <p>折叠状态：显示左箭头 ← 点击后向左侧展开</p>
        <p style="margin-top: 16px; color: #666">当前状态：{{ collapsed ? '已折叠' : '已展开' }}</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider } from '@hmfw/ant-design'

const collapsed = ref(false)
<\/script>
`,D=b({__name:"LayoutSider",setup(c){return(l,i)=>(g(),v(o(s),{style:{"min-height":"300px"}},{default:n(()=>[d(o(y),{style:{background:"#1677ff"}},{default:n(()=>[...i[0]||(i[0]=[a(" Header ",-1)])]),_:1}),d(o(s),null,{default:n(()=>[d(o(h),{width:200},{default:n(()=>[...i[1]||(i[1]=[t("div",{style:{padding:"16px"}},"Sider",-1)])]),_:1}),d(o(x),{style:{margin:"24px 16px",padding:"24px",background:"#fff"}},{default:n(()=>[...i[2]||(i[2]=[a(" Content ",-1)])]),_:1})]),_:1}),d(o(k),{style:{"text-align":"center"}},{default:n(()=>[...i[3]||(i[3]=[a(" Footer ©2024 ",-1)])]),_:1})]),_:1}))}}),E=`<template>
  <Layout style="min-height: 300px">
    <Header style="background: #1677ff"> Header </Header>
    <Layout>
      <Sider :width="200">
        <div style="padding: 16px">Sider</div>
      </Sider>
      <Content style="margin: 24px 16px; padding: 24px; background: #fff"> Content </Content>
    </Layout>
    <Footer style="text-align: center"> Footer ©2024 </Footer>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, Header, Content, Footer, Sider } from '@hmfw/ant-design'
<\/script>
`,W={style:{"margin-bottom":"16px"}},Y=b({__name:"LayoutTheme",setup(c){const l=m("dark"),i=()=>{l.value=l.value==="dark"?"light":"dark"};return(r,e)=>(g(),C("div",null,[t("div",W,[d(o(w),{onClick:i},{default:n(()=>[a(" 切换主题 (当前: "+f(l.value==="dark"?"暗色":"亮色")+") ",1)]),_:1})]),d(o(s),{style:{"min-height":"400px"}},{default:n(()=>[d(o(h),{theme:l.value,collapsible:""},{default:n(()=>[...e[0]||(e[0]=[t("div",{style:{padding:"16px",color:"inherit"}},[t("div",{style:{"margin-bottom":"12px"}},"菜单项 1"),t("div",{style:{"margin-bottom":"12px"}},"菜单项 2"),t("div",{style:{"margin-bottom":"12px"}},"菜单项 3"),t("div",{style:{"margin-bottom":"12px"}},"菜单项 4")],-1)])]),_:1},8,["theme"]),d(o(s),null,{default:n(()=>[d(o(y),{style:{background:"#fff",padding:"0 24px","box-shadow":"0 1px 4px rgba(0, 21, 41, 0.08)"}},{default:n(()=>[...e[1]||(e[1]=[t("h2",{style:{margin:"0",color:"#000"}},"主题切换演示",-1)])]),_:1}),d(o(x),{style:{margin:"24px 16px",padding:"24px",background:"#fff"}},{default:n(()=>[...e[2]||(e[2]=[t("p",null,"侧边栏支持 light 和 dark 两种主题。",-1),t("p",null,"主题切换时，背景色、文字颜色和边框颜色会平滑过渡（0.3s），提供流畅的视觉体验。",-1),t("p",null,"宽度变化保持快速响应（0.2s），确保交互的即时反馈。",-1)])]),_:1})]),_:1})]),_:1})]))}}),q=`<template>
  <div>
    <div style="margin-bottom: 16px">
      <Button @click="toggleTheme"> 切换主题 (当前: {{ theme === 'dark' ? '暗色' : '亮色' }}) </Button>
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
        <Header style="background: #fff; padding: 0 24px; box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08)">
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
import { Layout, Header, Content, Sider } from '@hmfw/ant-design'
import { Button } from '@hmfw/ant-design'

const theme = ref<'light' | 'dark'>('dark')

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
<\/script>
`,I={class:"markdown-body"},ot={__name:"layout",setup(c,{expose:l}){return l({frontmatter:{}}),(r,e)=>{const p=L("DemoBlock");return g(),C("div",I,[e[0]||(e[0]=t("h1",{id:"layout-布局",tabindex:"-1"},"Layout 布局",-1)),e[1]||(e[1]=t("p",null,"协助进行页面级整体布局。",-1)),e[2]||(e[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=t("ul",null,[t("li",null,"需要搭建页面整体结构时"),t("li",null,"需要侧边栏导航布局时"),t("li",null,"需要顶部导航 + 内容区布局时")],-1)),e[4]||(e[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=t("h3",{id:"基础布局上中下",tabindex:"-1"},"基础布局（上中下）",-1)),e[6]||(e[6]=t("p",null,"最基本的上中下布局。",-1)),d(p,{title:"基础布局（上中下）",source:o(_)},{default:n(()=>[d(T)]),_:1},8,["source"]),e[7]||(e[7]=t("h3",{id:"带侧边栏",tabindex:"-1"},"带侧边栏",-1)),e[8]||(e[8]=t("p",null,"左侧边栏 + 右侧内容区布局。",-1)),d(p,{title:"带侧边栏",source:o(E)},{default:n(()=>[d(D)]),_:1},8,["source"]),e[9]||(e[9]=t("h3",{id:"可折叠侧边栏",tabindex:"-1"},"可折叠侧边栏",-1)),e[10]||(e[10]=t("p",null,[a("通过 "),t("code",null,"collapsible"),a(" 属性开启侧边栏折叠功能，支持 "),t("code",null,"onCollapse"),a(" 事件监听折叠状态变化。")],-1)),d(p,{title:"可折叠侧边栏",source:o(M)},{default:n(()=>[d(N)]),_:1},8,["source"]),e[11]||(e[11]=t("h3",{id:"响应式布局",tabindex:"-1"},"响应式布局",-1)),e[12]||(e[12]=t("p",null,[a("通过 "),t("code",null,"breakpoint"),a(" 属性设置响应式断点，当窗口宽度小于断点时自动折叠侧边栏。设置 "),t("code",null,"collapsedWidth={0}"),a(" 会显示特殊的浮动触发器。")],-1)),d(p,{title:"响应式布局",source:o(R)},{default:n(()=>[d(O)]),_:1},8,["source"]),e[13]||(e[13]=t("h3",{id:"自定义触发器",tabindex:"-1"},"自定义触发器",-1)),e[14]||(e[14]=t("p",null,[a("设置 "),t("code",null,"trigger={null}"),a(" 隐藏默认触发器，可以在其他位置放置自定义触发器。")],-1)),d(p,{title:"自定义触发器",source:o(A)},{default:n(()=>[d($)]),_:1},8,["source"]),e[15]||(e[15]=t("h3",{id:"翻转箭头",tabindex:"-1"},"翻转箭头",-1)),e[16]||(e[16]=t("p",null,[a("通过 "),t("code",null,"reverseArrow"),a(" 属性翻转折叠箭头的方向。")],-1)),d(p,{title:"翻转箭头",source:o(P)},{default:n(()=>[d(z)]),_:1},8,["source"]),e[17]||(e[17]=t("h3",{id:"主题切换",tabindex:"-1"},"主题切换",-1)),e[18]||(e[18]=t("p",null,[a("侧边栏支持 "),t("code",null,"light"),a(" 和 "),t("code",null,"dark"),a(" 两种主题，主题切换时会有平滑的过渡动画。")],-1)),d(p,{title:"主题切换",source:o(q)},{default:n(()=>[d(Y)]),_:1},8,["source"]),e[19]||(e[19]=S('<h2 id="api" tabindex="-1">API</h2><h3 id="layout-props" tabindex="-1">Layout Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>hasSider</td><td>表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="sider-props" tabindex="-1">Sider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>宽度</td><td><code>number | string</code></td><td><code>200</code></td></tr><tr><td>collapsible</td><td>是否可收起</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>collapsed(v-model)</td><td>当前收起状态</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultCollapsed</td><td>是否默认收起</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>collapsedWidth</td><td>收缩宽度，设置为 0 会出现特殊 trigger</td><td><code>number | string</code></td><td><code>80</code></td></tr><tr><td>breakpoint</td><td>触发响应式布局的断点</td><td><code>&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;xxl&#39; | &#39;xxxl&#39;</code></td><td>-</td></tr><tr><td>theme</td><td>主题颜色</td><td><code>&#39;light&#39; | &#39;dark&#39;</code></td><td><code>&#39;dark&#39;</code></td></tr><tr><td>trigger</td><td>自定义 trigger，设为 null 时隐藏 trigger。<strong>注意：<code>trigger</code> 为 VNode prop 而非 slot</strong>，需通过 <code>h()</code> 或 JSX 传入</td><td><code>VNode | null</code></td><td>-</td></tr><tr><td>reverseArrow</td><td>翻转折叠提示箭头的方向</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>zeroWidthTriggerStyle</td><td>指定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="layout-slots" tabindex="-1">Layout Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>子元素内容</td></tr></tbody></table><h3 id="sider-events" tabindex="-1">Sider Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>collapse</td><td>展开/收起时触发</td><td><code>(collapsed: boolean, type: &#39;clickTrigger&#39; | &#39;responsive&#39;) =&gt; void</code></td></tr><tr><td>breakpoint</td><td>触发响应式布局断点时触发</td><td><code>(broken: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="sider-slots" tabindex="-1">Sider Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>侧边栏内容</td></tr></tbody></table><blockquote><p><strong>注意</strong>：Sider 的自定义触发器通过 <code>trigger</code> prop（VNode）传入，而非 slot。参见上方 Sider Props 表格。</p></blockquote><h2 id="组件说明" tabindex="-1">组件说明</h2><p>Layout: 布局容器，其下可嵌套 <code>Header</code> <code>Sider</code> <code>Content</code> <code>Footer</code> 或 <code>Layout</code> 本身，可以放在任何父容器中。</p><p>Header: 顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p><p>Sider: 侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p><p>Content: 内容部分，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p><p>Footer: 底部布局，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p><p>Layout 系列组件（Layout/Header/Footer/Content/Sider）多为单元素透传组件，可直接使用原生 class 和 style attribute 进行样式定制。Sider 的 trigger 元素如需自定义样式，可通过 <code>trigger</code> prop 传入自定义 VNode，或设为 <code>null</code> 隐藏后自行实现。</p><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Layout 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-header</code></td><td>Header 背景色</td><td><code>#001529</code></td></tr><tr><td><code>--hmfw-color-bg-layout</code></td><td>Layout 背景色</td><td><code>#f5f5f5</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-light-solid</code></td><td>浅色文本（白色）</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr></tbody></table>',22))])}}};export{ot as default};
