import{D as X}from"./index-Bia_oMEf.js";import{o as k,N as J,n as a,F as M,s as j,r as Y,A as f,i as x,K as r,k as T,h as s,_ as G,J as Q,E as Z,p as A,R as m,H as tt,m as c,l as nt}from"./index-Dxep-jrR.js";import{c as u}from"./cls-S9IiI6wd.js";import{I as D}from"./Icon-DATzad6v.js";import{D as K}from"./DownOutlined-BZcGPxnB.js";import{U as st}from"./UserOutlined-DbONkOw7.js";import{H as et}from"./HomeOutlined-DODSCaSH.js";import{S as at}from"./Space-BxpGTspH.js";import"./Menu-C12rIRmD.js";import"./Button-Dr1TfEzc.js";import"./LoadingOutlined-CKq07YS5.js";function ot(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!Y(n)}const rt=(n,e)=>{if(e===void 0)return e;let o=(e||"").replace(/^\//,"");return Object.keys(n).forEach(l=>{o=o.replace(`:${l}`,n[l])}),o},lt=(n,e)=>{const{title:o}=n;if(o==null)return null;if(typeof o=="string"){const l=Object.keys(e).join("|");return o.replace(new RegExp(`:(${l})`,"g"),(t,p)=>e[p]||t)}return o},pt=n=>{const e={};return Object.keys(n).forEach(o=>{(o.startsWith("data-")||o.startsWith("aria-"))&&(e[o]=n[o])}),e},i=k({name:"Breadcrumb",props:{items:Array,separator:{type:[String,Object],default:"/"},params:{type:Object,default:()=>({})},itemRender:Function,classNames:Object,styles:Object},setup(n){const e=J("breadcrumb"),o=(l,t,p)=>{var d,y,g,$,I,P,O,B,E,S,w,L;if(t==null)return null;const{className:v,onClick:_,menu:b,...C}=l,h={...pt(C),onClick:_};if(b&&b.items&&b.items.length>0){const N=p!==void 0?a("a",j(h,{class:u(`${e}-link`,(d=n.classNames)==null?void 0:d.link,v),style:{...(y=n.styles)==null?void 0:y.link,...l.style},href:p}),[a("span",{class:u(`${e}-overlay-link`,(g=n.classNames)==null?void 0:g.overlayLink),style:($=n.styles)==null?void 0:$.overlayLink},[t,a(D,{component:K,style:"margin-left: 4px; font-size: 10px;"},null)])]):a("span",j(h,{class:u(`${e}-link`,(I=n.classNames)==null?void 0:I.link,v),style:{...(P=n.styles)==null?void 0:P.link,...l.style}}),[a("span",{class:u(`${e}-overlay-link`,(O=n.classNames)==null?void 0:O.overlayLink),style:(B=n.styles)==null?void 0:B.overlayLink},[t,a(D,{component:K,style:"margin-left: 4px; font-size: 10px;"},null)])]);return a(X,{menu:b,trigger:["hover"]},ot(N)?N:{default:()=>[N]})}return p!==void 0?a("a",j(h,{class:u(`${e}-link`,(E=n.classNames)==null?void 0:E.link,v),style:{...(S=n.styles)==null?void 0:S.link,...l.style},href:p}),[t]):a("span",j(h,{class:u(`${e}-link`,(w=n.classNames)==null?void 0:w.link,v),style:{...(L=n.styles)==null?void 0:L.link,...l.style}}),[t])};return()=>{var _,b,C,h;const l=n.items??[],t=[],p=l.filter(d=>!("type"in d&&d.type==="separator")),v=l.map((d,y)=>{var V,F,H,W,z,U;if("type"in d&&d.type==="separator"){const q=d;return a("li",{key:q.key??`separator-${y}`,class:u(`${e}-separator`,(V=n.classNames)==null?void 0:V.separator),style:(F=n.styles)==null?void 0:F.separator,"aria-hidden":"true"},[q.separator===""?q.separator:q.separator||n.separator])}const g=d,{path:$,key:I,className:P,style:O}=g,B=rt(n.params,$);B!==void 0&&t.push(B);const E=I??y,S=y===l.length-1,w=l[y+1],L=w&&"type"in w&&w.type==="separator";let{href:N}=g;t.length&&B!==void 0&&(N=`#/${t.join("/")}`);let R;if(n.itemRender)R=n.itemRender(g,n.params,p,[...t]);else{const q=lt(g,n.params);R=o(g,q,N)}return a(M,null,[a("li",{key:E,class:u(`${e}-item`,(H=n.classNames)==null?void 0:H.item,P),style:{...(W=n.styles)==null?void 0:W.item,...O},"aria-current":S?"page":void 0},[R]),!S&&!L&&a("li",{class:u(`${e}-separator`,(z=n.classNames)==null?void 0:z.separator),style:(U=n.styles)==null?void 0:U.separator,"aria-hidden":"true"},[n.separator])])});return a("nav",{class:u(e,(_=n.classNames)==null?void 0:_.root),style:(b=n.styles)==null?void 0:b.root,"aria-label":"breadcrumb"},[a("ol",{class:(C=n.classNames)==null?void 0:C.list,style:(h=n.styles)==null?void 0:h.list},[v])])}}}),ct=k({__name:"BreadcrumbBasic",setup(n){const e=[{title:"首页"},{title:"应用列表"},{title:"某应用"}];return(o,l)=>(f(),x(r(i),{items:e}))}}),it=`<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const items = [{ title: '首页' }, { title: '应用列表' }, { title: '某应用' }]
<\/script>
`,dt={style:{display:"flex","flex-direction":"column",gap:"32px"}},ut=k({__name:"BreadcrumbClassNames",setup(n){return(e,o)=>(f(),T("div",dt,[s("div",null,[o[0]||(o[0]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器和列表样式：",-1)),a(r(i),{items:[{title:"首页",href:"#"},{title:"产品中心",href:"#"},{title:"详情"}],"class-names":{root:"custom-root",list:"custom-list"}})]),s("div",null,[o[1]||(o[1]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义面包屑项和链接：",-1)),a(r(i),{items:[{title:"首页",href:"#"},{title:"应用列表",href:"#"},{title:"应用详情"}],"class-names":{item:"custom-item",link:"custom-link"}})]),s("div",null,[o[2]||(o[2]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义分隔符样式：",-1)),a(r(i),{items:[{title:"首页",href:"#"},{title:"文档",href:"#"},{title:"组件",href:"#"},{title:"Breadcrumb"}],separator:">","class-names":{separator:"custom-separator"}})]),s("div",null,[o[3]||(o[3]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),a(r(i),{items:[{title:"首页",href:"#"},{title:"设置",href:"#"},{title:"个人信息"}],styles:{root:{padding:"12px 16px",background:"#f0f5ff",borderRadius:"8px"},link:{color:"#1677ff",fontWeight:500},separator:{color:"#d9d9d9",margin:"0 12px"}}})]),s("div",null,[o[4]||(o[4]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合使用（渐变背景 + 自定义间距）：",-1)),a(r(i),{items:[{title:"控制台",href:"#"},{title:"项目管理",href:"#"},{title:"项目 A",href:"#"},{title:"详细信息"}],"class-names":{root:"gradient-root",item:"gradient-item",link:"gradient-link"},styles:{separator:{margin:"0 16px"}}})])]))}}),mt=G(ut,[["__scopeId","data-v-cd0c2a52"]]),kt=`<template>
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
import { Breadcrumb } from 'ant-design-hmfw'
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
`,ft={style:{"margin-top":"8px",color:"#666"}},gt=k({__name:"BreadcrumbClick",setup(n){const e=Z("无"),o=[{title:"首页",onClick:()=>{e.value="首页"}},{title:"应用列表",onClick:()=>{e.value="应用列表"}},{title:"某应用"}];return(l,t)=>(f(),T(M,null,[a(r(i),{items:o}),s("p",ft,"点击了："+Q(e.value),1)],64))}}),bt=`<template>
  <Breadcrumb :items="items" />
  <p style="margin-top: 8px; color: #666">点击了：{{ clicked }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Breadcrumb } from 'ant-design-hmfw'

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
`,ht=k({__name:"BreadcrumbIcon",setup(n){const e=[{title:A(D,{component:et}),href:"/"},{title:A("span",{},[A(D,{component:st}),A("span",{style:{marginLeft:"4px"}},"用户列表")]),href:"/users"},{title:"用户详情"}];return(o,l)=>(f(),x(r(i),{items:e}))}}),yt=`<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Breadcrumb, Icon, HomeOutlined, UserOutlined } from 'ant-design-hmfw'

const items = [
  {
    title: h(Icon, { component: HomeOutlined }),
    href: '/',
  },
  {
    title: h('span', {}, [
      h(Icon, { component: UserOutlined }),
      h('span', { style: { marginLeft: '4px' } }, '用户列表'),
    ]),
    href: '/users',
  },
  {
    title: '用户详情',
  },
]
<\/script>
`,xt=k({__name:"BreadcrumbLink",setup(n){const e=[{title:"首页",href:"/"},{title:"应用列表",href:"/apps"},{title:"某应用"}];return(o,l)=>(f(),x(r(i),{items:e}))}}),vt=`<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const items = [{ title: '首页', href: '/' }, { title: '应用列表', href: '/apps' }, { title: '某应用' }]
<\/script>
`,Bt=k({__name:"BreadcrumbParams",setup(n){const e={id:"123"},o=[{title:"用户管理",href:"/users"},{title:"用户 :id"}];return(l,t)=>(f(),x(r(i),{items:o,params:e}))}}),wt=`<template>
  <Breadcrumb :items="items" :params="params" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const params = { id: '123' }

const items = [{ title: '用户管理', href: '/users' }, { title: '用户 :id' }]
<\/script>
`,Nt=k({__name:"BreadcrumbPath",setup(n){const e=[{path:"home",title:"首页"},{path:"user",title:"用户"},{path:"profile",title:"个人资料"}];return(o,l)=>(f(),x(r(i),{items:e}))}}),qt=`<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const items = [
  { path: 'home', title: '首页' },
  { path: 'user', title: '用户' },
  { path: 'profile', title: '个人资料' },
]
<\/script>
`,St=k({__name:"BreadcrumbSeparator",setup(n){const e=[{title:"首页",href:"/"},{title:"一级菜单",href:"/level1"},{title:"二级菜单"}];return(o,l)=>(f(),x(r(at),{direction:"vertical"},{default:m(()=>[a(r(i),{items:e,separator:">"}),a(r(i),{items:e,separator:"/"}),a(r(i),{items:e,separator:"|"})]),_:1}))}}),_t=`<template>
  <Space direction="vertical">
    <Breadcrumb :items="items" separator=">" />
    <Breadcrumb :items="items" separator="/" />
    <Breadcrumb :items="items" separator="|" />
  </Space>
</template>

<script setup lang="ts">
import { Breadcrumb, Space } from 'ant-design-hmfw'

const items = [{ title: '首页', href: '/' }, { title: '一级菜单', href: '/level1' }, { title: '二级菜单' }]
<\/script>
`,Ct=k({__name:"BreadcrumbSeparatorType",setup(n){const e=[{title:"位置"},{type:"separator",separator:":"},{title:"应用中心",href:"/app"},{type:"separator"},{title:"应用列表",href:"/app/list"},{type:"separator"},{title:"某应用"}];return(o,l)=>(f(),x(r(i),{items:e,separator:""}))}}),$t=`<template>
  <Breadcrumb :items="items" separator="" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

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
`,It={class:"markdown-body"},Ht={__name:"breadcrumb",setup(n,{expose:e}){return e({frontmatter:{}}),(l,t)=>{const p=tt("DemoBlock");return f(),T("div",It,[t[0]||(t[0]=s("h1",{id:"breadcrumb-面包屑",tabindex:"-1"},"Breadcrumb 面包屑",-1)),t[1]||(t[1]=s("p",null,"显示当前页面在系统层级结构中的位置，并能向上返回。",-1)),t[2]||(t[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=s("ul",null,[s("li",null,"当系统拥有超过两级以上的层级结构时"),s("li",null,"当需要告知用户当前位置时"),s("li",null,"当需要向上导航的功能时")],-1)),t[4]||(t[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=s("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=s("p",null,"最简单的用法。",-1)),a(p,{title:"基础用法",source:r(it)},{default:m(()=>[a(ct)]),_:1},8,["source"]),t[7]||(t[7]=s("h3",{id:"带链接",tabindex:"-1"},"带链接",-1)),t[8]||(t[8]=s("p",null,[c("通过 "),s("code",null,"href"),c(" 属性设置链接。")],-1)),a(p,{title:"带链接",source:r(vt)},{default:m(()=>[a(xt)]),_:1},8,["source"]),t[9]||(t[9]=s("h3",{id:"自定义分隔符",tabindex:"-1"},"自定义分隔符",-1)),t[10]||(t[10]=s("p",null,[c("通过 "),s("code",null,"separator"),c(" 属性自定义分隔符。")],-1)),a(p,{title:"自定义分隔符",source:r(_t)},{default:m(()=>[a(St)]),_:1},8,["source"]),t[11]||(t[11]=s("h3",{id:"带图标",tabindex:"-1"},"带图标",-1)),t[12]||(t[12]=s("p",null,[c("可以在 "),s("code",null,"title"),c(" 中使用图标。")],-1)),a(p,{title:"带图标",source:r(yt)},{default:m(()=>[a(ht)]),_:1},8,["source"]),t[13]||(t[13]=s("h3",{id:"带点击事件",tabindex:"-1"},"带点击事件",-1)),t[14]||(t[14]=s("p",null,[c("通过 "),s("code",null,"onClick"),c(" 处理面包屑点击。")],-1)),a(p,{title:"带点击事件",source:r(bt)},{default:m(()=>[a(gt)]),_:1},8,["source"]),t[15]||(t[15]=s("h3",{id:"参数替换",tabindex:"-1"},"参数替换",-1)),t[16]||(t[16]=s("p",null,[c("通过 "),s("code",null,"params"),c(" 属性替换路径中的参数。")],-1)),a(p,{title:"参数替换",source:r(wt)},{default:m(()=>[a(Bt)]),_:1},8,["source"]),t[17]||(t[17]=s("h3",{id:"分隔符类型",tabindex:"-1"},"分隔符类型",-1)),t[18]||(t[18]=s("p",null,[c("可以在 "),s("code",null,"items"),c(" 中使用 "),s("code",null,"type: 'separator'"),c(" 来自定义每个分隔符。")],-1)),a(p,{title:"分隔符类型",source:r($t)},{default:m(()=>[a(Ct)]),_:1},8,["source"]),t[19]||(t[19]=s("h3",{id:"路径拼接",tabindex:"-1"},"路径拼接",-1)),t[20]||(t[20]=s("p",null,[c("使用 "),s("code",null,"path"),c(" 属性自动拼接路径。")],-1)),a(p,{title:"路径拼接",source:r(qt)},{default:m(()=>[a(Nt)]),_:1},8,["source"]),t[21]||(t[21]=s("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[22]||(t[22]=s("p",null,[c("通过 "),s("code",null,"classNames"),c(" / "),s("code",null,"styles"),c(" 对各子元素做细粒度样式控制。")],-1)),a(p,{title:"语义化 className 与 style",source:r(kt)},{default:m(()=>[a(mt)]),_:1},8,["source"]),t[23]||(t[23]=nt(`<h2 id="api" tabindex="-1">API</h2><h3 id="breadcrumb-props" tabindex="-1">Breadcrumb Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>路由栈信息</td><td><code>ItemType[]</code></td><td><code>[]</code></td></tr><tr><td>separator</td><td>分隔符</td><td><code>string | VNode</code></td><td><code>&#39;/&#39;</code></td></tr><tr><td>params</td><td>路径参数</td><td><code>Record&lt;string, any&gt;</code></td><td><code>{}</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>BreadcrumbClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>BreadcrumbStyles</code></td><td>-</td></tr></tbody></table><h3 id="itemtype" tabindex="-1">ItemType</h3><p>面包屑项或分隔符。</p><p><strong>BreadcrumbItemType:</strong></p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string | number</code></td><td>-</td></tr><tr><td>title</td><td>名称</td><td><code>string | number | VNode</code></td><td>-</td></tr><tr><td>href</td><td>链接地址</td><td><code>string</code></td><td>-</td></tr><tr><td>path</td><td>路径（会自动拼接前面的路径）</td><td><code>string</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>onClick</td><td>点击事件</td><td><code>(e: MouseEvent) =&gt; void</code></td><td>-</td></tr><tr><td>data-*</td><td>自定义数据属性</td><td><code>any</code></td><td>-</td></tr><tr><td>aria-*</td><td>ARIA 无障碍属性</td><td><code>any</code></td><td>-</td></tr></tbody></table><p><strong>BreadcrumbSeparatorType:</strong></p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型（必须为 ‘separator’）</td><td><code>&#39;separator&#39;</code></td><td>-</td></tr><tr><td>separator</td><td>分隔符内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>key</td><td>唯一标识</td><td><code>string | number</code></td><td>-</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对面包屑的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义根容器和列表 --&gt;
  &lt;Breadcrumb
    :items=&quot;[{ title: &#39;首页&#39;, href: &#39;#&#39; }, { title: &#39;产品&#39;, href: &#39;#&#39; }, { title: &#39;详情&#39; }]&quot;
    :class-names=&quot;{ root: &#39;custom-root&#39;, list: &#39;custom-list&#39; }&quot;
  /&gt;

  &lt;!-- 自定义面包屑项和链接 --&gt;
  &lt;Breadcrumb
    :items=&quot;[{ title: &#39;首页&#39;, href: &#39;#&#39; }, { title: &#39;应用列表&#39;, href: &#39;#&#39; }, { title: &#39;详情&#39; }]&quot;
    :class-names=&quot;{ item: &#39;custom-item&#39;, link: &#39;custom-link&#39; }&quot;
  /&gt;

  &lt;!-- 自定义分隔符 --&gt;
  &lt;Breadcrumb
    :items=&quot;[{ title: &#39;首页&#39;, href: &#39;#&#39; }, { title: &#39;文档&#39; }]&quot;
    separator=&quot;&gt;&quot;
    :class-names=&quot;{ separator: &#39;custom-separator&#39; }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 12px 20px;
  border-radius: 8px;
}

:deep(.custom-root .hmfw-breadcrumb-link) {
  color: rgba(255, 255, 255, 0.85);
}

:deep(.custom-item:hover) {
  transform: translateX(2px);
  transition: all 0.3s;
}

:deep(.custom-link) {
  color: #722ed1;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 4px;
}

:deep(.custom-link:hover) {
  background: #f9f0ff;
  color: #531dab;
}

:deep(.custom-separator) {
  color: #1677ff;
  font-weight: bold;
  margin: 0 12px;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制 --&gt;
  &lt;Breadcrumb
    :items=&quot;[{ title: &#39;首页&#39;, href: &#39;#&#39; }, { title: &#39;设置&#39;, href: &#39;#&#39; }, { title: &#39;个人信息&#39; }]&quot;
    :styles=&quot;{
      root: { padding: &#39;12px 16px&#39;, background: &#39;#f0f5ff&#39;, borderRadius: &#39;8px&#39; },
      link: { color: &#39;#1677ff&#39;, fontWeight: 500 },
      separator: { color: &#39;#d9d9d9&#39;, margin: &#39;0 12px&#39; },
    }&quot;
  /&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;Breadcrumb
    :items=&quot;[{ title: &#39;控制台&#39;, href: &#39;#&#39; }, { title: &#39;项目管理&#39;, href: &#39;#&#39; }, { title: &#39;详情&#39; }]&quot;
    :class-names=&quot;{ root: &#39;gradient-bg&#39; }&quot;
    :styles=&quot;{
      separator: { margin: &#39;0 16px&#39; },
      item: { display: &#39;flex&#39;, alignItems: &#39;center&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>classNames.link</code> 同时应用于链接元素（<code>&lt;a&gt;</code>）和文本元素（<code>&lt;span&gt;</code>）</li><li><code>classNames.separator</code> 应用于分隔符容器（<code>&lt;li&gt;</code>），分隔符内容在其内部</li><li><code>classNames.overlayLink</code> 仅在面包屑项配置了 <code>menu</code> 属性时生效</li><li>各语义化类名会与组件内置类名（如 <code>.hmfw-breadcrumb-item</code>）合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Breadcrumb 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次级文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次级填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>小号圆角</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-margin-xs</code></td><td>超小号外边距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr></tbody></table>`,27))])}}};export{Ht as default};
