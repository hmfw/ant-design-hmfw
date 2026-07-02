import{D as z}from"./index-C6IUJRQ0.js";import{d as k,u as K,c as o,F as U,s as I,v as O,B as X,o as g,q as B,e as l,b as V,f as s,_ as Y,A as G,r as J,w as m,h as Q,g as c,i as Z}from"./index-DpCWj_RH.js";import{c as d}from"./cls-S9IiI6wd.js";import{D as tt}from"./DownOutlined-BfyIF5yt.js";import{U as nt}from"./UserOutlined-CLL1fJiS.js";import{H as st}from"./HomeOutlined-Bi1YTwab.js";import{S as at}from"./Space-a2HJigIW.js";import"./index-DsyBsvbF.js";import"./Layout-CBNy-KCH.js";import"./MinusOutlined-CS9u7csd.js";import"./LeftOutlined-Dmhui-oM.js";import"./RightOutlined-B3rpRsMI.js";import"./event-CMqgYmge.js";import"./Trigger-BvJ5OT70.js";import"./Tooltip-CGkZ9PxR.js";import"./Button-Bf04Y6dy.js";import"./LoadingOutlined-BZTKujXV.js";function et(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!X(n)}const ot=(n,a)=>{if(a===void 0)return a;let e=(a||"").replace(/^\//,"");return Object.keys(n).forEach(p=>{e=e.replace(`:${p}`,n[p])}),e},pt=(n,a)=>{const{title:e}=n;if(e==null)return null;if(typeof e=="string"){const p=Object.keys(a).join("|");return e.replace(new RegExp(`:(${p})`,"g"),(t,r)=>a[r]||t)}return e},lt=n=>{const a={};return Object.keys(n).forEach(e=>{(e.startsWith("data-")||e.startsWith("aria-"))&&(a[e]=n[e])}),a},rt=(n,a)=>{const{items:e,...p}=n;return{...p,items:e==null?void 0:e.map(({key:t,title:r,label:b,path:x,...f},w)=>{let h=b??r;return x&&(h=O("a",{href:`${a??""}${x}`},h)),{...f,key:String(t??w),label:h}})}},i=k({name:"Breadcrumb",props:{items:Array,separator:{type:[String,Object],default:"/"},params:{type:Object,default:()=>({})},dropdownIcon:Object,itemRender:Function,classNames:Object,styles:Object},setup(n){const a=K("breadcrumb"),e=(p,t,r)=>{var y,E,L,j,A,q,D,$,N,T,P,S;if(t==null)return null;const{className:b,onClick:x,menu:f,dropdownProps:w,...h}=p,u={...lt(h),onClick:x},v=n.dropdownIcon??o(tt,{class:"hmfw-icon"},null);if(f&&f.items&&f.items.length>0){const R=rt(f,r),_=r!==void 0?o("a",I(u,{class:d(`${a}-link`,(y=n.classNames)==null?void 0:y.link,b),style:{...(E=n.styles)==null?void 0:E.link,...p.style},href:r}),[o("span",{class:d(`${a}-overlay-link`,(L=n.classNames)==null?void 0:L.overlayLink),style:(j=n.styles)==null?void 0:j.overlayLink},[t,v])]):o("span",I(u,{class:d(`${a}-link`,(A=n.classNames)==null?void 0:A.link,b),style:{...(q=n.styles)==null?void 0:q.link,...p.style}}),[o("span",{class:d(`${a}-overlay-link`,(D=n.classNames)==null?void 0:D.overlayLink),style:($=n.styles)==null?void 0:$.overlayLink},[t,v])]);return o(z,I({menu:R,trigger:["hover"]},w),et(_)?_:{default:()=>[_]})}return r!==void 0?o("a",I(u,{class:d(`${a}-link`,(N=n.classNames)==null?void 0:N.link,b),style:{...(T=n.styles)==null?void 0:T.link,...p.style},href:r}),[t]):o("span",I(u,{class:d(`${a}-link`,(P=n.classNames)==null?void 0:P.link,b),style:{...(S=n.styles)==null?void 0:S.link,...p.style}}),[t])};return()=>{var x,f,w,h;const p=n.items??[],t=[],r=p.filter(u=>!("type"in u&&u.type==="separator")),b=p.map((u,v)=>{var R,_,F,M,W,H;if("type"in u&&u.type==="separator"){const C=u;return o("li",{key:C.key??`separator-${v}`,class:d(`${a}-separator`,(R=n.classNames)==null?void 0:R.separator),style:(_=n.styles)==null?void 0:_.separator,"aria-hidden":"true"},[C.separator===""?C.separator:C.separator||n.separator])}const y=u,{path:E,key:L,className:j,style:A}=y,q=ot(n.params,E);q!==void 0&&t.push(q);const D=L??v,$=v===p.length-1,N=p[v+1],T=N&&"type"in N&&N.type==="separator";let{href:P}=y;t.length&&q!==void 0&&(P=`#/${t.join("/")}`);let S;if(n.itemRender)S=n.itemRender(y,n.params,r,[...t]);else{const C=pt(y,n.params);S=e(y,C,P)}return o(U,null,[o("li",{key:D,class:d(`${a}-item`,(F=n.classNames)==null?void 0:F.item,j),style:{...(M=n.styles)==null?void 0:M.item,...A},"aria-current":$?"page":void 0},[S]),!$&&!T&&o("li",{class:d(`${a}-separator`,(W=n.classNames)==null?void 0:W.separator),style:(H=n.styles)==null?void 0:H.separator,"aria-hidden":"true"},[n.separator])])});return o("nav",{class:d(a,(x=n.classNames)==null?void 0:x.root),style:(f=n.styles)==null?void 0:f.root,"aria-label":"breadcrumb"},[o("ol",{class:(w=n.classNames)==null?void 0:w.list,style:(h=n.styles)==null?void 0:h.list},[b])])}}}),ct=k({__name:"BreadcrumbBasic",setup(n){const a=[{title:"首页"},{title:"应用列表"},{title:"某应用"}];return(e,p)=>(g(),B(l(i),{items:a}))}}),it=`<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { Breadcrumb } from '@hmfw/ant-design'

const items = [{ title: '首页' }, { title: '应用列表' }, { title: '某应用' }]
<\/script>
`,ut={style:{display:"flex","flex-direction":"column",gap:"32px"}},dt=k({__name:"BreadcrumbClassNames",setup(n){return(a,e)=>(g(),V("div",ut,[s("div",null,[e[0]||(e[0]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器和列表样式：",-1)),o(l(i),{items:[{title:"首页",href:"#"},{title:"产品中心",href:"#"},{title:"详情"}],"class-names":{root:"custom-root",list:"custom-list"}})]),s("div",null,[e[1]||(e[1]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义面包屑项和链接：",-1)),o(l(i),{items:[{title:"首页",href:"#"},{title:"应用列表",href:"#"},{title:"应用详情"}],"class-names":{item:"custom-item",link:"custom-link"}})]),s("div",null,[e[2]||(e[2]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义分隔符样式：",-1)),o(l(i),{items:[{title:"首页",href:"#"},{title:"文档",href:"#"},{title:"组件",href:"#"},{title:"Breadcrumb"}],separator:">","class-names":{separator:"custom-separator"}})]),s("div",null,[e[3]||(e[3]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),o(l(i),{items:[{title:"首页",href:"#"},{title:"设置",href:"#"},{title:"个人信息"}],styles:{root:{padding:"12px 16px",background:"#f0f5ff",borderRadius:"8px"},link:{color:"#1677ff",fontWeight:500},separator:{color:"#d9d9d9",margin:"0 12px"}}})]),s("div",null,[e[4]||(e[4]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合使用（渐变背景 + 自定义间距）：",-1)),o(l(i),{items:[{title:"控制台",href:"#"},{title:"项目管理",href:"#"},{title:"项目 A",href:"#"},{title:"详细信息"}],"class-names":{root:"gradient-root",item:"gradient-item",link:"gradient-link"},styles:{separator:{margin:"0 16px"}}})])]))}}),mt=Y(dt,[["__scopeId","data-v-3a0db644"]]),kt=`<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义根容器和列表 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器和列表样式：</div>
      <Breadcrumb
        :items="[{ title: '首页', href: '#' }, { title: '产品中心', href: '#' }, { title: '详情' }]"
        :class-names="{
          root: 'custom-root',
          list: 'custom-list',
        }"
      />
    </div>

    <!-- 场景 2：自定义面包屑项和链接 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义面包屑项和链接：</div>
      <Breadcrumb
        :items="[{ title: '首页', href: '#' }, { title: '应用列表', href: '#' }, { title: '应用详情' }]"
        :class-names="{
          item: 'custom-item',
          link: 'custom-link',
        }"
      />
    </div>

    <!-- 场景 3：自定义分隔符 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义分隔符样式：</div>
      <Breadcrumb
        :items="[
          { title: '首页', href: '#' },
          { title: '文档', href: '#' },
          { title: '组件', href: '#' },
          { title: 'Breadcrumb' },
        ]"
        separator=">"
        :class-names="{
          separator: 'custom-separator',
        }"
      />
    </div>

    <!-- 场景 4：使用内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Breadcrumb
        :items="[{ title: '首页', href: '#' }, { title: '设置', href: '#' }, { title: '个人信息' }]"
        :styles="{
          root: { padding: '12px 16px', background: '#f0f5ff', borderRadius: '8px' },
          link: { color: '#1677ff', fontWeight: 500 },
          separator: { color: '#d9d9d9', margin: '0 12px' },
        }"
      />
    </div>

    <!-- 场景 5：组合使用 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用（渐变背景 + 自定义间距）：</div>
      <Breadcrumb
        :items="[
          { title: '控制台', href: '#' },
          { title: '项目管理', href: '#' },
          { title: '项目 A', href: '#' },
          { title: '详细信息' },
        ]"
        :class-names="{
          root: 'gradient-root',
          item: 'gradient-item',
          link: 'gradient-link',
        }"
        :styles="{
          separator: { margin: '0 16px' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Breadcrumb } from '@hmfw/ant-design'
<\/script>

<style scoped>
/* 场景 1：自定义根容器和列表 */
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 12px 20px;
  border-radius: 8px;
}

:deep(.custom-list) {
  display: flex;
  align-items: center;
}

:deep(.custom-root .hmfw-breadcrumb-item .hmfw-breadcrumb-link) {
  color: rgba(255, 255, 255, 0.85);
  transition: all 0.3s;
}

:deep(.custom-root .hmfw-breadcrumb-item .hmfw-breadcrumb-link:hover) {
  color: #ffffff;
}

:deep(.custom-root .hmfw-breadcrumb-separator) {
  color: rgba(255, 255, 255, 0.5);
}

/* 场景 2：自定义面包屑项和链接 */
:deep(.custom-item) {
  transition: all 0.3s;
}

:deep(.custom-item:hover) {
  transform: translateX(2px);
}

:deep(.custom-link) {
  color: #722ed1;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.3s;
}

:deep(.custom-link:hover) {
  background: #f9f0ff;
  color: #531dab;
}

/* 场景 3：自定义分隔符 */
:deep(.custom-separator) {
  color: #1677ff;
  font-weight: bold;
  font-size: 16px;
  margin: 0 12px;
}

/* 场景 5：组合使用 - 渐变背景 */
:deep(.gradient-root) {
  background: linear-gradient(to right, #52c41a, #389e0d);
  padding: 14px 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.3);
  transition: all 0.3s;
}

:deep(.gradient-root:hover) {
  box-shadow: 0 6px 16px rgba(82, 196, 26, 0.4);
  transform: translateY(-2px);
}

:deep(.gradient-item) {
  display: flex;
  align-items: center;
}

:deep(.gradient-link) {
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 6px;
  transition: all 0.3s;
}

:deep(.gradient-link:hover) {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

:deep(.gradient-root .hmfw-breadcrumb-separator) {
  color: rgba(255, 255, 255, 0.6);
}
</style>
`,gt={style:{"margin-top":"8px",color:"#666"}},ft=k({__name:"BreadcrumbClick",setup(n){const a=J("无"),e=[{title:"首页",onClick:()=>{a.value="首页"}},{title:"应用列表",onClick:()=>{a.value="应用列表"}},{title:"某应用"}];return(p,t)=>(g(),V(U,null,[o(l(i),{items:e}),s("p",gt,"点击了："+G(a.value),1)],64))}}),bt=`<template>
  <Breadcrumb :items="items" />
  <p style="margin-top: 8px; color: #666">点击了：{{ clicked }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Breadcrumb } from '@hmfw/ant-design'

const clicked = ref('无')

const items = [
  {
    title: '首页',
    onClick: () => {
      clicked.value = '首页'
    },
  },
  {
    title: '应用列表',
    onClick: () => {
      clicked.value = '应用列表'
    },
  },
  { title: '某应用' },
]
<\/script>
`,ht=k({__name:"BreadcrumbIcon",setup(n){const a=[{title:O(st,{class:"hmfw-icon"}),href:"/"},{title:O("span",{},[O(nt,{class:"hmfw-icon"}),O("span",{style:{marginLeft:"4px"}},"用户列表")]),href:"/users"},{title:"用户详情"}];return(e,p)=>(g(),B(l(i),{items:a}))}}),yt=`<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { HomeOutlined, UserOutlined } from '@hmfw/icons'
import { Breadcrumb } from '@hmfw/ant-design'

const items = [
  {
    title: h(HomeOutlined, { class: 'hmfw-icon' }),
    href: '/',
  },
  {
    title: h('span', {}, [
      h(UserOutlined, { class: 'hmfw-icon' }),
      h('span', { style: { marginLeft: '4px' } }, '用户列表'),
    ]),
    href: '/users',
  },
  {
    title: '用户详情',
  },
]
<\/script>
`,xt=k({__name:"BreadcrumbLink",setup(n){const a=[{title:"首页",href:"/"},{title:"应用列表",href:"/apps"},{title:"某应用"}];return(e,p)=>(g(),B(l(i),{items:a}))}}),vt=`<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { Breadcrumb } from '@hmfw/ant-design'

const items = [{ title: '首页', href: '/' }, { title: '应用列表', href: '/apps' }, { title: '某应用' }]
<\/script>
`,Bt=k({__name:"BreadcrumbParams",setup(n){const a={id:"123"},e=[{title:"用户管理",href:"/users"},{title:"用户 :id"}];return(p,t)=>(g(),B(l(i),{items:e,params:a}))}}),wt=`<template>
  <Breadcrumb :items="items" :params="params" />
</template>

<script setup lang="ts">
import { Breadcrumb } from '@hmfw/ant-design'

const params = { id: '123' }

const items = [{ title: '用户管理', href: '/users' }, { title: '用户 :id' }]
<\/script>
`,qt=k({__name:"BreadcrumbPath",setup(n){const a=[{path:"home",title:"首页"},{path:"user",title:"用户"},{path:"profile",title:"个人资料"}];return(e,p)=>(g(),B(l(i),{items:a}))}}),Nt=`<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { Breadcrumb } from '@hmfw/ant-design'

const items = [
  { path: 'home', title: '首页' },
  { path: 'user', title: '用户' },
  { path: 'profile', title: '个人资料' },
]
<\/script>
`,St=k({__name:"BreadcrumbSeparator",setup(n){const a=[{title:"首页",href:"/"},{title:"一级菜单",href:"/level1"},{title:"二级菜单"}];return(e,p)=>(g(),B(l(at),{direction:"vertical"},{default:m(()=>[o(l(i),{items:a,separator:">"}),o(l(i),{items:a,separator:"/"}),o(l(i),{items:a,separator:"|"})]),_:1}))}}),_t=`<template>
  <Space direction="vertical">
    <Breadcrumb :items="items" separator=">" />
    <Breadcrumb :items="items" separator="/" />
    <Breadcrumb :items="items" separator="|" />
  </Space>
</template>

<script setup lang="ts">
import { Breadcrumb, Space } from '@hmfw/ant-design'

const items = [{ title: '首页', href: '/' }, { title: '一级菜单', href: '/level1' }, { title: '二级菜单' }]
<\/script>
`,Ct=k({__name:"BreadcrumbSeparatorType",setup(n){const a=[{title:"位置"},{type:"separator",separator:":"},{title:"应用中心",href:"/app"},{type:"separator"},{title:"应用列表",href:"/app/list"},{type:"separator"},{title:"某应用"}];return(e,p)=>(g(),B(l(i),{items:a,separator:""}))}}),$t=`<template>
  <Breadcrumb :items="items" separator="" />
</template>

<script setup lang="ts">
import { Breadcrumb } from '@hmfw/ant-design'

const items = [
  { title: '位置' },
  { type: 'separator', separator: ':' },
  { title: '应用中心', href: '/app' },
  { type: 'separator' },
  { title: '应用列表', href: '/app/list' },
  { type: 'separator' },
  { title: '某应用' },
]
<\/script>
`,Pt={class:"markdown-body"},Xt={__name:"breadcrumb",setup(n,{expose:a}){return a({frontmatter:{}}),(p,t)=>{const r=Q("DemoBlock");return g(),V("div",Pt,[t[0]||(t[0]=s("h1",{id:"breadcrumb-面包屑",tabindex:"-1"},"Breadcrumb 面包屑",-1)),t[1]||(t[1]=s("p",null,"显示当前页面在系统层级结构中的位置，并能向上返回。",-1)),t[2]||(t[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=s("ul",null,[s("li",null,"当系统拥有超过两级以上的层级结构时"),s("li",null,"当需要告知用户当前位置时"),s("li",null,"当需要向上导航的功能时")],-1)),t[4]||(t[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=s("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=s("p",null,"最简单的用法。",-1)),o(r,{title:"基础用法",source:l(it)},{default:m(()=>[o(ct)]),_:1},8,["source"]),t[7]||(t[7]=s("h3",{id:"带链接",tabindex:"-1"},"带链接",-1)),t[8]||(t[8]=s("p",null,[c("通过 "),s("code",null,"href"),c(" 属性设置链接。")],-1)),o(r,{title:"带链接",source:l(vt)},{default:m(()=>[o(xt)]),_:1},8,["source"]),t[9]||(t[9]=s("h3",{id:"自定义分隔符",tabindex:"-1"},"自定义分隔符",-1)),t[10]||(t[10]=s("p",null,[c("通过 "),s("code",null,"separator"),c(" 属性自定义分隔符。")],-1)),o(r,{title:"自定义分隔符",source:l(_t)},{default:m(()=>[o(St)]),_:1},8,["source"]),t[11]||(t[11]=s("h3",{id:"带图标",tabindex:"-1"},"带图标",-1)),t[12]||(t[12]=s("p",null,[c("可以在 "),s("code",null,"title"),c(" 中使用图标。")],-1)),o(r,{title:"带图标",source:l(yt)},{default:m(()=>[o(ht)]),_:1},8,["source"]),t[13]||(t[13]=s("h3",{id:"带点击事件",tabindex:"-1"},"带点击事件",-1)),t[14]||(t[14]=s("p",null,[c("通过 "),s("code",null,"onClick"),c(" 处理面包屑点击。")],-1)),o(r,{title:"带点击事件",source:l(bt)},{default:m(()=>[o(ft)]),_:1},8,["source"]),t[15]||(t[15]=s("h3",{id:"参数替换",tabindex:"-1"},"参数替换",-1)),t[16]||(t[16]=s("p",null,[c("通过 "),s("code",null,"params"),c(" 属性替换路径中的参数。")],-1)),o(r,{title:"参数替换",source:l(wt)},{default:m(()=>[o(Bt)]),_:1},8,["source"]),t[17]||(t[17]=s("h3",{id:"分隔符类型",tabindex:"-1"},"分隔符类型",-1)),t[18]||(t[18]=s("p",null,[c("可以在 "),s("code",null,"items"),c(" 中使用 "),s("code",null,"type: 'separator'"),c(" 来自定义每个分隔符。")],-1)),o(r,{title:"分隔符类型",source:l($t)},{default:m(()=>[o(Ct)]),_:1},8,["source"]),t[19]||(t[19]=s("h3",{id:"路径拼接",tabindex:"-1"},"路径拼接",-1)),t[20]||(t[20]=s("p",null,[c("使用 "),s("code",null,"path"),c(" 属性自动拼接路径。")],-1)),o(r,{title:"路径拼接",source:l(Nt)},{default:m(()=>[o(qt)]),_:1},8,["source"]),t[21]||(t[21]=s("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[22]||(t[22]=s("p",null,[c("通过 "),s("code",null,"classNames"),c(" / "),s("code",null,"styles"),c(" 对各子元素做细粒度样式控制。")],-1)),o(r,{title:"语义化 className 与 style",source:l(kt)},{default:m(()=>[o(mt)]),_:1},8,["source"]),t[23]||(t[23]=Z(`<h2 id="api" tabindex="-1">API</h2><h3 id="breadcrumb-props" tabindex="-1">Breadcrumb Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>路由栈信息</td><td><code>ItemType[]</code></td><td><code>[]</code></td></tr><tr><td>separator</td><td>分隔符</td><td><code>string | VNode</code></td><td><code>&#39;/&#39;</code></td></tr><tr><td>params</td><td>路径参数</td><td><code>Record&lt;string, any&gt;</code></td><td><code>{}</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>BreadcrumbClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>BreadcrumbStyles</code></td><td>-</td></tr></tbody></table><h3 id="itemtype" tabindex="-1">ItemType</h3><p>面包屑项或分隔符。</p><p><strong>BreadcrumbItemType:</strong></p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string | number</code></td><td>-</td></tr><tr><td>title</td><td>名称</td><td><code>string | number | VNode</code></td><td>-</td></tr><tr><td>href</td><td>链接地址</td><td><code>string</code></td><td>-</td></tr><tr><td>path</td><td>路径（会自动拼接前面的路径）</td><td><code>string</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>onClick</td><td>点击事件</td><td><code>(e: MouseEvent) =&gt; void</code></td><td>-</td></tr><tr><td>data-*</td><td>自定义数据属性</td><td><code>any</code></td><td>-</td></tr><tr><td>aria-*</td><td>ARIA 无障碍属性</td><td><code>any</code></td><td>-</td></tr></tbody></table><p><strong>BreadcrumbSeparatorType:</strong></p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型（必须为 ‘separator’）</td><td><code>&#39;separator&#39;</code></td><td>-</td></tr><tr><td>separator</td><td>分隔符内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>key</td><td>唯一标识</td><td><code>string | number</code></td><td>-</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对面包屑的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">BreadcrumbClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 nav.hmfw-breadcrumb</span>
  list<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 列表容器 ol</span>
  item<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 面包屑项 li.hmfw-breadcrumb-item</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 链接/文本 a.hmfw-breadcrumb-link 或 span.hmfw-breadcrumb-link</span>
  separator<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 分隔符 li.hmfw-breadcrumb-separator</span>
  overlayLink<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 带下拉菜单的链接内容 span.hmfw-breadcrumb-overlay-link</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">BreadcrumbStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  list<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  item<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  link<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  separator<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  overlayLink<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-breadcrumb<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.list / styles.list 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-breadcrumb-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.item / styles.item 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-breadcrumb-link<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.link / styles.link 应用于此 --&gt;</span>
        首页
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-breadcrumb-separator<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.separator / styles.separator 应用于此 --&gt;</span>
      /
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-breadcrumb-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-breadcrumb-link<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.link / styles.link 应用于此 --&gt;</span>
        当前页
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 带下拉菜单的情况 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-breadcrumb-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-breadcrumb-overlay-link<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.overlayLink / styles.overlayLink 应用于此 --&gt;</span>
    菜单项
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义根容器和列表 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{ title: &#39;首页&#39;, href: &#39;#&#39; }, { title: &#39;产品&#39;, href: &#39;#&#39; }, { title: &#39;详情&#39; }]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ root: &#39;custom-root&#39;, list: &#39;custom-list&#39; }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义面包屑项和链接 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{ title: &#39;首页&#39;, href: &#39;#&#39; }, { title: &#39;应用列表&#39;, href: &#39;#&#39; }, { title: &#39;详情&#39; }]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ item: &#39;custom-item&#39;, link: &#39;custom-link&#39; }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义分隔符 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{ title: &#39;首页&#39;, href: &#39;#&#39; }, { title: &#39;文档&#39; }]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&gt;<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ separator: &#39;custom-separator&#39; }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.custom-root)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 12px 20px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-root .hmfw-breadcrumb-link)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.85<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-item:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-link)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #722ed1<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 4px 8px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-link:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f9f0ff<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #531dab<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-separator)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #1677ff<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{ title: &#39;首页&#39;, href: &#39;#&#39; }, { title: &#39;设置&#39;, href: &#39;#&#39; }, { title: &#39;个人信息&#39; }]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { padding: &#39;12px 16px&#39;, background: &#39;#f0f5ff&#39;, borderRadius: &#39;8px&#39; },
      link: { color: &#39;#1677ff&#39;, fontWeight: 500 },
      separator: { color: &#39;#d9d9d9&#39;, margin: &#39;0 12px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[{ title: &#39;控制台&#39;, href: &#39;#&#39; }, { title: &#39;项目管理&#39;, href: &#39;#&#39; }, { title: &#39;详情&#39; }]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ root: &#39;gradient-bg&#39; }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      separator: { margin: &#39;0 16px&#39; },
      item: { display: &#39;flex&#39;, alignItems: &#39;center&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>classNames.link</code> 同时应用于链接元素（<code>&lt;a&gt;</code>）和文本元素（<code>&lt;span&gt;</code>）</li><li><code>classNames.separator</code> 应用于分隔符容器（<code>&lt;li&gt;</code>），分隔符内容在其内部</li><li><code>classNames.overlayLink</code> 仅在面包屑项配置了 <code>menu</code> 属性时生效</li><li>各语义化类名会与组件内置类名（如 <code>.hmfw-breadcrumb-item</code>）合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Breadcrumb 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次级文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次级填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>小号圆角</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-margin-xs</code></td><td>超小号外边距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr></tbody></table>`,27))])}}};export{Xt as default};
