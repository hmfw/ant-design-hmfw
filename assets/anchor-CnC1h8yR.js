import{j as dn,p as un,d as b,u as K,k as U,l as X,c as p,a as y,m as B,r as w,n as Y,o as C,q as kn,e as i,b as S,f as t,i as G,_ as hn,w as x,h as fn,g as f}from"./index-Da5IF3ma.js";import{c as E}from"./cls-S9IiI6wd.js";const J=Symbol("AnchorContext");function gn(s){un(J,s)}function mn(){return dn(J,null)}const Q=b({name:"AnchorLink",props:{href:{type:String,required:!0},title:{type:String,required:!0},target:String,replace:Boolean,targetOffset:Number},setup(s,{slots:l}){const d=K("anchor"),n=mn();U(()=>{n==null||n.registerLink(s.href,s.targetOffset)}),X(()=>{n==null||n.unregisterLink(s.href)});const e=r=>{var _;if((_=n==null?void 0:n.onClick)==null||_.call(n,r,{title:s.title,href:s.href}),n==null||n.scrollTo(s.href,s.targetOffset),r.defaultPrevented)return;if(s.href.startsWith("http://")||s.href.startsWith("https://")){(s.replace??(n==null?void 0:n.replace))&&(r.preventDefault(),window.location.replace(s.href));return}r.preventDefault();const I=s.replace??(n==null?void 0:n.replace)?"replaceState":"pushState";window.history[I](null,"",s.href)},o=y(()=>(n==null?void 0:n.activeLink)===s.href),N=y(()=>{var r,k;return E(`${d}-link`,{[`${d}-link-active`]:o.value},(r=n==null?void 0:n.classNames)==null?void 0:r.link,o.value?(k=n==null?void 0:n.classNames)==null?void 0:k.linkActive:void 0)}),T=y(()=>{var r,k;return E(`${d}-link-title`,{[`${d}-link-title-active`]:o.value},(r=n==null?void 0:n.classNames)==null?void 0:r.title,o.value?(k=n==null?void 0:n.classNames)==null?void 0:k.titleActive:void 0)}),P=y(()=>{var r,k;return{...(r=n==null?void 0:n.styles)==null?void 0:r.link,...o.value?(k=n==null?void 0:n.styles)==null?void 0:k.linkActive:{}}}),q=y(()=>{var r,k;return{...(r=n==null?void 0:n.styles)==null?void 0:r.title,...o.value?(k=n==null?void 0:n.styles)==null?void 0:k.titleActive:{}}});return()=>{var r;return p("div",{class:N.value,style:P.value},[p("a",{class:T.value,style:q.value,href:s.href,title:s.title,target:s.target,onClick:e},[s.title]),(n==null?void 0:n.direction)!=="horizontal"?(r=l.default)==null?void 0:r.call(l):null])}}}),vn=b({name:"Anchor",props:{items:{type:Array,default:()=>[]},affix:{type:Boolean,default:!0},offsetTop:{type:Number,default:0},bounds:{type:Number,default:5},targetOffset:Number,direction:{type:String,default:"vertical"},replace:Boolean,getCurrentAnchor:Function,getContainer:Function,classNames:Object,styles:Object},emits:["change","click"],setup(s,{emit:l,slots:d}){const n=K("anchor"),e=w(null),o=w([]),N=w({}),T=w(),P=w(),q=w(!1);let r=null;const k=()=>s.getContainer?s.getContainer():window,H=a=>a===window?window.scrollY:a.scrollTop,I=(a,c)=>{if(!a.getClientRects().length)return 0;const u=a.getBoundingClientRect();return u.width||u.height?c===window?u.top-a.ownerDocument.documentElement.clientTop:u.top-c.getBoundingClientRect().top:u.top},_=(a,c)=>{o.value.includes(a)||(o.value=[...o.value,a]),c!==void 0&&(N.value[a]=c)},M=a=>{o.value=o.value.filter(c=>c!==a),delete N.value[a]},W=()=>{if(!T.value||!P.value)return;const a=T.value.querySelector(`.${n}-link-title-active`);if(a){const{style:c}=P.value,u=s.direction==="horizontal";c.top=u?"":`${a.offsetTop+a.clientHeight/2}px`,c.height=u?"":`${a.clientHeight}px`,c.left=u?`${a.offsetLeft}px`:"",c.width=u?`${a.clientWidth}px`:"",u&&a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}},Z=(a,c,u)=>{const g=[],O=k();return a.forEach(m=>{const v=/#([\S ]+)$/.exec(m);if(!v)return;const A=document.getElementById(v[1]);if(A){const R=N.value[m]??c,z=I(A,O);z<=R+u&&g.push({link:m,top:z})}}),g.length?g.reduce((v,A)=>A.top>v.top?A:v).link:""},D=a=>{if(e.value===a)return;const c=s.getCurrentAnchor?s.getCurrentAnchor(a):a;e.value=c,l("change",a)},$=()=>{if(q.value)return;const a=Z(o.value,s.targetOffset??s.offsetTop??0,s.bounds);D(a)},nn=(a,c)=>{const u=e.value;D(a);const g=/#([\S ]+)$/.exec(a);if(!g)return;const O=document.getElementById(g[1]);if(!O||q.value&&u===a)return;const m=k(),v=H(m),A=I(O,m);let R=v+A;const z=c??s.targetOffset??s.offsetTop??0;R-=z,q.value=!0;const pn=Date.now(),cn=450,V=()=>{const ln=Date.now()-pn,L=Math.min(ln/cn,1),rn=L<.5?2*L*L:-1+(4-2*L)*L,j=v+(R-v)*rn;m===window?window.scrollTo(0,j):m.scrollTop=j,L<1?r=requestAnimationFrame(V):q.value=!1};V()},tn=(a,c)=>{l("click",a,c)};gn({registerLink:_,unregisterLink:M,activeLink:e.value,scrollTo:nn,onClick:tn,direction:s.direction,replace:s.replace,classNames:s.classNames,styles:s.styles}),U(()=>{k().addEventListener("scroll",$),$()}),X(()=>{k().removeEventListener("scroll",$),r!==null&&cancelAnimationFrame(r)}),B(()=>s.items,()=>{$()},{deep:!0}),B(()=>o.value,()=>{$()}),B(()=>e.value,()=>{Y(()=>{W()})}),B(()=>s.getCurrentAnchor,()=>{s.getCurrentAnchor&&e.value&&D(s.getCurrentAnchor(e.value))}),B(()=>s.direction,()=>{Y(()=>{W()})});const F=a=>a.map(c=>p(Q,{key:c.key??c.href,href:c.href,title:c.title,target:c.target,targetOffset:c.targetOffset},{default:()=>{var u;return[s.direction==="vertical"&&((u=c.children)!=null&&u.length)?F(c.children):null]}})),sn=y(()=>{var a;return E(`${n}-wrapper`,{[`${n}-wrapper-horizontal`]:s.direction==="horizontal"},(a=s.classNames)==null?void 0:a.wrapper)}),an=y(()=>{var a;return E(n,{[`${n}-fixed`]:!s.affix},(a=s.classNames)==null?void 0:a.root)}),en=y(()=>{var a;return E(`${n}-ink`,{[`${n}-ink-visible`]:!!e.value},(a=s.classNames)==null?void 0:a.ink)}),on=y(()=>{var a;return{maxHeight:s.offsetTop?`calc(100vh - ${s.offsetTop}px)`:"100vh",...(a=s.styles)==null?void 0:a.wrapper}});return()=>{var a,c,u,g;return p("div",{ref:T,class:sn.value,style:on.value},[p("div",{class:an.value,style:(a=s.styles)==null?void 0:a.root},[p("span",{class:en.value,ref:P,style:(c=s.styles)==null?void 0:c.ink},null),(u=s.items)!=null&&u.length?F(s.items):(g=d.default)==null?void 0:g.call(d)])])}}}),h=vn;h.Link=Q;const xn=b({__name:"AnchorAffix",setup(s){const l=[{href:"#section-a",title:"章节 A"},{href:"#section-b",title:"章节 B"},{href:"#section-c",title:"章节 C"}],d=e=>{console.log("当前锚点:",e)},n=(e,o)=>{console.log("点击锚点:",o)};return(e,o)=>(C(),kn(i(h),{affix:"","offset-top":80,items:l,onChange:d,onClick:n}))}}),yn=`<template>
  <Anchor affix :offset-top="80" :items="items" @change="onChange" @click="onClick" />
</template>

<script setup lang="ts">
import { Anchor } from '@hmfw/ant-design'

const items = [
  { href: '#section-a', title: '章节 A' },
  { href: '#section-b', title: '章节 B' },
  { href: '#section-c', title: '章节 C' },
]

const onChange = (currentLink: string) => {
  console.log('当前锚点:', currentLink)
}

const onClick = (e: Event, link: { href: string; title: string }) => {
  console.log('点击锚点:', link)
}
<\/script>
`,bn={style:{display:"flex",gap:"24px"}},An=b({__name:"AnchorBasic",setup(s){const l=[{href:"#part-1",title:"第一部分"},{href:"#part-2",title:"第二部分"},{href:"#part-3",title:"第三部分",children:[{href:"#part-3-1",title:"第三部分-1"},{href:"#part-3-2",title:"第三部分-2"}]}];return(d,n)=>(C(),S("div",bn,[n[0]||(n[0]=t("div",{style:{flex:"1"}},[t("div",{id:"part-1",style:{height:"200px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"第一部分"),t("p",null,"这是第一部分的内容。")]),t("div",{id:"part-2",style:{height:"200px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"第二部分"),t("p",null,"这是第二部分的内容。")]),t("div",{id:"part-3",style:{height:"200px",background:"#fff7e6",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"第三部分"),t("p",null,"这是第三部分的内容。")])],-1)),p(i(h),{items:l,"offset-top":64,style:{width:"160px"}})]))}}),wn=`<template>
  <div style="display: flex; gap: 24px">
    <div style="flex: 1">
      <div id="part-1" style="height: 200px; background: #e6f4ff; padding: 16px; margin-bottom: 16px">
        <h3>第一部分</h3>
        <p>这是第一部分的内容。</p>
      </div>
      <div id="part-2" style="height: 200px; background: #f6ffed; padding: 16px; margin-bottom: 16px">
        <h3>第二部分</h3>
        <p>这是第二部分的内容。</p>
      </div>
      <div id="part-3" style="height: 200px; background: #fff7e6; padding: 16px; margin-bottom: 16px">
        <h3>第三部分</h3>
        <p>这是第三部分的内容。</p>
      </div>
    </div>
    <Anchor :items="items" :offset-top="64" style="width: 160px" />
  </div>
</template>

<script setup lang="ts">
import { Anchor } from '@hmfw/ant-design'

const items = [
  { href: '#part-1', title: '第一部分' },
  { href: '#part-2', title: '第二部分' },
  {
    href: '#part-3',
    title: '第三部分',
    children: [
      { href: '#part-3-1', title: '第三部分-1' },
      { href: '#part-3-2', title: '第三部分-2' },
    ],
  },
]
<\/script>
`,Cn={style:{display:"flex","flex-direction":"column",gap:"32px"}},qn=b({__name:"AnchorClassNames",setup(s){const l=w(),d=[{key:"1",href:"#anchor-demo-1",title:"锚点 1"},{key:"2",href:"#anchor-demo-2",title:"锚点 2"},{key:"3",href:"#anchor-demo-3",title:"锚点 3"}],n=()=>l.value||window;return(e,o)=>(C(),S("div",Cn,[t("div",null,[o[0]||(o[0]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器和墨水条：",-1)),p(i(h),{items:d,"class-names":{root:"custom-root",ink:"custom-ink"},"get-container":n})]),t("div",null,[o[1]||(o[1]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义链接项和激活状态：",-1)),p(i(h),{items:d,"class-names":{link:"custom-link",linkActive:"custom-link-active"},"get-container":n})]),t("div",null,[o[2]||(o[2]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义链接文本样式：",-1)),p(i(h),{items:d,"class-names":{title:"custom-title",titleActive:"custom-title-active"},"get-container":n})]),t("div",null,[o[3]||(o[3]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),p(i(h),{items:d,styles:{root:{background:"#f0f5ff",padding:"12px",borderRadius:"8px"},ink:{width:"4px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},title:{fontSize:"15px",fontWeight:500}},"get-container":n})]),t("div",null,[o[4]||(o[4]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合使用 classNames 和 styles：",-1)),p(i(h),{items:d,"class-names":{root:"combined-root",link:"combined-link",titleActive:"combined-title-active"},styles:{ink:{width:"3px"}},"get-container":n})]),t("div",{ref_key:"containerRef",ref:l,style:{height:"200px",overflow:"auto",border:"1px solid #d9d9d9","border-radius":"4px",padding:"16px"}},[...o[5]||(o[5]=[G('<h3 id="anchor-demo-1" data-v-630ddd40>锚点 1</h3><p style="height:100px;" data-v-630ddd40>这是第一个锚点的内容区域...</p><h3 id="anchor-demo-2" data-v-630ddd40>锚点 2</h3><p style="height:100px;" data-v-630ddd40>这是第二个锚点的内容区域...</p><h3 id="anchor-demo-3" data-v-630ddd40>锚点 3</h3><p style="height:100px;" data-v-630ddd40>这是第三个锚点的内容区域...</p>',6)])],512)]))}}),Ln=hn(qn,[["__scopeId","data-v-630ddd40"]]),Sn=`<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义根容器和墨水条 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器和墨水条：</div>
      <Anchor
        :items="items"
        :class-names="{
          root: 'custom-root',
          ink: 'custom-ink',
        }"
        :get-container="getContainer"
      />
    </div>

    <!-- 场景 2：自定义链接项和激活状态 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义链接项和激活状态：</div>
      <Anchor
        :items="items"
        :class-names="{
          link: 'custom-link',
          linkActive: 'custom-link-active',
        }"
        :get-container="getContainer"
      />
    </div>

    <!-- 场景 3：自定义链接文本样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义链接文本样式：</div>
      <Anchor
        :items="items"
        :class-names="{
          title: 'custom-title',
          titleActive: 'custom-title-active',
        }"
        :get-container="getContainer"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Anchor
        :items="items"
        :styles="{
          root: { background: '#f0f5ff', padding: '12px', borderRadius: '8px' },
          ink: { width: '4px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
          title: { fontSize: '15px', fontWeight: 500 },
        }"
        :get-container="getContainer"
      />
    </div>

    <!-- 场景 5：组合使用 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用 classNames 和 styles：</div>
      <Anchor
        :items="items"
        :class-names="{
          root: 'combined-root',
          link: 'combined-link',
          titleActive: 'combined-title-active',
        }"
        :styles="{
          ink: { width: '3px' },
        }"
        :get-container="getContainer"
      />
    </div>

    <!-- 滚动容器 -->
    <div
      ref="containerRef"
      style="height: 200px; overflow: auto; border: 1px solid #d9d9d9; border-radius: 4px; padding: 16px"
    >
      <h3 id="anchor-demo-1">锚点 1</h3>
      <p style="height: 100px">这是第一个锚点的内容区域...</p>
      <h3 id="anchor-demo-2">锚点 2</h3>
      <p style="height: 100px">这是第二个锚点的内容区域...</p>
      <h3 id="anchor-demo-3">锚点 3</h3>
      <p style="height: 100px">这是第三个锚点的内容区域...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Anchor } from '@hmfw/ant-design'
import type { AnchorLinkItem } from '@hmfw/ant-design'

const containerRef = ref<HTMLElement>()

const items: AnchorLinkItem[] = [
  { key: '1', href: '#anchor-demo-1', title: '锚点 1' },
  { key: '2', href: '#anchor-demo-2', title: '锚点 2' },
  { key: '3', href: '#anchor-demo-3', title: '锚点 3' },
]

const getContainer = () => containerRef.value || window
<\/script>

<style scoped>
/* 场景 1：自定义根容器和墨水条 */
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px;
  border-radius: 8px;
}

:deep(.custom-root .hmfw-anchor-link-title) {
  color: white;
}

:deep(.custom-ink) {
  background: white;
  width: 3px;
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
}

/* 场景 2：自定义链接项和激活状态 */
:deep(.custom-link) {
  padding: 8px 12px;
  margin: 4px 0;
  border-radius: 6px;
  transition: all 0.3s;
}

:deep(.custom-link:hover) {
  background: rgba(22, 119, 255, 0.06);
  transform: translateX(4px);
}

:deep(.custom-link-active) {
  background: linear-gradient(90deg, #e6f4ff 0%, transparent 100%);
  border-left: 3px solid #1677ff;
  padding-left: 9px;
}

/* 场景 3：自定义链接文本样式 */
:deep(.custom-title) {
  font-weight: 500;
  color: #595959;
  transition: all 0.3s;
  display: inline-block;
}

:deep(.custom-title:hover) {
  color: #1677ff;
  transform: scale(1.05);
}

:deep(.custom-title-active) {
  color: #1677ff;
  font-weight: 600;
  text-shadow: 0 0 1px rgba(22, 119, 255, 0.3);
}

/* 场景 5：组合使用 */
:deep(.combined-root) {
  border: 2px solid #f0f0f0;
  border-radius: 12px;
  padding: 16px;
  background: #fafafa;
  transition: all 0.3s;
}

:deep(.combined-root:hover) {
  border-color: #1677ff;
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.15);
}

:deep(.combined-link) {
  margin: 6px 0;
  padding: 6px 12px;
  border-radius: 8px;
}

:deep(.combined-title-active) {
  background: linear-gradient(135deg, #1677ff 0%, #52c41a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}
</style>
`,Nn=b({__name:"AnchorHorizontal",setup(s){const l=[{href:"#h-part-1",title:"第一部分"},{href:"#h-part-2",title:"第二部分"},{href:"#h-part-3",title:"第三部分"}];return(d,n)=>(C(),S("div",null,[p(i(h),{direction:"horizontal",items:l,style:{"margin-bottom":"24px"}}),n[0]||(n[0]=t("div",{id:"h-part-1",style:{height:"160px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"第一部分")],-1)),n[1]||(n[1]=t("div",{id:"h-part-2",style:{height:"160px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"第二部分")],-1)),n[2]||(n[2]=t("div",{id:"h-part-3",style:{height:"160px",background:"#fff7e6",padding:"16px"}},[t("h3",null,"第三部分")],-1))]))}}),Tn=`<template>
  <div>
    <Anchor direction="horizontal" :items="items" style="margin-bottom: 24px" />
    <div id="h-part-1" style="height: 160px; background: #e6f4ff; padding: 16px; margin-bottom: 16px">
      <h3>第一部分</h3>
    </div>
    <div id="h-part-2" style="height: 160px; background: #f6ffed; padding: 16px; margin-bottom: 16px">
      <h3>第二部分</h3>
    </div>
    <div id="h-part-3" style="height: 160px; background: #fff7e6; padding: 16px">
      <h3>第三部分</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Anchor } from '@hmfw/ant-design'

const items = [
  { href: '#h-part-1', title: '第一部分' },
  { href: '#h-part-2', title: '第二部分' },
  { href: '#h-part-3', title: '第三部分' },
]
<\/script>
`,Pn={style:{display:"flex",gap:"24px"}},$n=b({__name:"AnchorLink",setup(s){const l=h.Link;return(d,n)=>(C(),S("div",Pn,[n[0]||(n[0]=t("div",{style:{flex:"1"}},[t("div",{id:"components-anchor-demo-basic",style:{height:"200px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"Basic demo"),t("p",null,"The simplest usage.")]),t("div",{id:"components-anchor-demo-static",style:{height:"200px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"Static Anchor"),t("p",null,"Do not change hash when scrolling.")]),t("div",{id:"API",style:{height:"200px",background:"#fff7e6",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"API"),t("p",null,"API documentation.")])],-1)),p(i(h),{"offset-top":64,style:{width:"200px"}},{default:x(()=>[p(i(l),{href:"#components-anchor-demo-basic",title:"Basic demo"}),p(i(l),{href:"#components-anchor-demo-static",title:"Static demo"}),p(i(l),{href:"#API",title:"API"},{default:x(()=>[p(i(l),{href:"#Anchor-Props",title:"Anchor Props"}),p(i(l),{href:"#Link-Props",title:"Link Props"})]),_:1})]),_:1})]))}}),Bn=`<template>
  <div style="display: flex; gap: 24px">
    <div style="flex: 1">
      <div
        id="components-anchor-demo-basic"
        style="height: 200px; background: #e6f4ff; padding: 16px; margin-bottom: 16px"
      >
        <h3>Basic demo</h3>
        <p>The simplest usage.</p>
      </div>
      <div
        id="components-anchor-demo-static"
        style="height: 200px; background: #f6ffed; padding: 16px; margin-bottom: 16px"
      >
        <h3>Static Anchor</h3>
        <p>Do not change hash when scrolling.</p>
      </div>
      <div id="API" style="height: 200px; background: #fff7e6; padding: 16px; margin-bottom: 16px">
        <h3>API</h3>
        <p>API documentation.</p>
      </div>
    </div>
    <Anchor :offset-top="64" style="width: 200px">
      <AnchorLink href="#components-anchor-demo-basic" title="Basic demo" />
      <AnchorLink href="#components-anchor-demo-static" title="Static demo" />
      <AnchorLink href="#API" title="API">
        <AnchorLink href="#Anchor-Props" title="Anchor Props" />
        <AnchorLink href="#Link-Props" title="Link Props" />
      </AnchorLink>
    </Anchor>
  </div>
</template>

<script setup lang="ts">
import { Anchor } from '@hmfw/ant-design'

const AnchorLink = Anchor.Link
<\/script>
`,En={style:{display:"flex",gap:"24px"}},In=b({__name:"AnchorTargetOffset",setup(s){const l=h.Link;return(d,n)=>(C(),S("div",En,[n[0]||(n[0]=t("div",{style:{flex:"1"}},[t("div",{id:"target-1",style:{height:"200px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"Target 1"),t("p",null,"Content with custom target offset.")]),t("div",{id:"target-2",style:{height:"200px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"Target 2"),t("p",null,"Content with different target offset.")]),t("div",{id:"target-3",style:{height:"200px",background:"#fff7e6",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"Target 3"),t("p",null,"Content with default offset.")])],-1)),p(i(h),{"target-offset":100,style:{width:"200px"}},{default:x(()=>[p(i(l),{href:"#target-1",title:"Target 1 (offset 50)","target-offset":50}),p(i(l),{href:"#target-2",title:"Target 2 (offset 150)","target-offset":150}),p(i(l),{href:"#target-3",title:"Target 3 (default)"})]),_:1})]))}}),_n=`<template>
  <div style="display: flex; gap: 24px">
    <div style="flex: 1">
      <div id="target-1" style="height: 200px; background: #e6f4ff; padding: 16px; margin-bottom: 16px">
        <h3>Target 1</h3>
        <p>Content with custom target offset.</p>
      </div>
      <div id="target-2" style="height: 200px; background: #f6ffed; padding: 16px; margin-bottom: 16px">
        <h3>Target 2</h3>
        <p>Content with different target offset.</p>
      </div>
      <div id="target-3" style="height: 200px; background: #fff7e6; padding: 16px; margin-bottom: 16px">
        <h3>Target 3</h3>
        <p>Content with default offset.</p>
      </div>
    </div>
    <Anchor :target-offset="100" style="width: 200px">
      <AnchorLink href="#target-1" title="Target 1 (offset 50)" :target-offset="50" />
      <AnchorLink href="#target-2" title="Target 2 (offset 150)" :target-offset="150" />
      <AnchorLink href="#target-3" title="Target 3 (default)" />
    </Anchor>
  </div>
</template>

<script setup lang="ts">
import { Anchor } from '@hmfw/ant-design'

const AnchorLink = Anchor.Link
<\/script>
`,On={class:"markdown-body"},Dn={__name:"anchor",setup(s,{expose:l}){return l({frontmatter:{}}),(n,e)=>{const o=fn("DemoBlock");return C(),S("div",On,[e[0]||(e[0]=t("h1",{id:"anchor-锚点",tabindex:"-1"},"Anchor 锚点",-1)),e[1]||(e[1]=t("p",null,"用于跳转到页面指定位置。",-1)),e[2]||(e[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=t("ul",null,[t("li",null,"需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转时"),t("li",null,"需要固定在页面某个位置时")],-1)),e[4]||(e[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=t("h3",{id:"基础用法垂直",tabindex:"-1"},"基础用法（垂直）",-1)),e[6]||(e[6]=t("p",null,"最简单的用法，垂直方向展示锚点列表。",-1)),p(o,{title:"基础用法（垂直）",source:i(wn)},{default:x(()=>[p(An)]),_:1},8,["source"]),e[7]||(e[7]=t("h3",{id:"使用-anchorlink",tabindex:"-1"},"使用 Anchor.Link",-1)),e[8]||(e[8]=t("p",null,[f("使用 "),t("code",null,"Anchor.Link"),f(" 组件作为子组件。")],-1)),p(o,{title:"使用 Anchor.Link",source:i(Bn)},{default:x(()=>[p($n)]),_:1},8,["source"]),e[9]||(e[9]=t("h3",{id:"水平锚点",tabindex:"-1"},"水平锚点",-1)),e[10]||(e[10]=t("p",null,[f("通过 "),t("code",null,'direction="horizontal"'),f(" 设置水平方向锚点。")],-1)),p(o,{title:"水平锚点",source:i(Tn)},{default:x(()=>[p(Nn)]),_:1},8,["source"]),e[11]||(e[11]=t("h3",{id:"自定义目标偏移",tabindex:"-1"},"自定义目标偏移",-1)),e[12]||(e[12]=t("p",null,[f("通过 "),t("code",null,"targetOffset"),f(" 设置全局偏移，或在 "),t("code",null,"Anchor.Link"),f(" 上设置单独偏移。")],-1)),p(o,{title:"自定义目标偏移",source:i(_n)},{default:x(()=>[p(In)]),_:1},8,["source"]),e[13]||(e[13]=t("h3",{id:"固定锚点",tabindex:"-1"},"固定锚点",-1)),e[14]||(e[14]=t("p",null,[f("通过 "),t("code",null,"affix"),f(" 属性让锚点固定在页面某个位置。")],-1)),p(o,{title:"固定锚点",source:i(yn)},{default:x(()=>[p(xn)]),_:1},8,["source"]),e[15]||(e[15]=t("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),e[16]||(e[16]=t("p",null,[f("通过 "),t("code",null,"classNames"),f(" / "),t("code",null,"styles"),f(" 对各子元素做细粒度样式控制。")],-1)),p(o,{title:"语义化 className 与 style",source:i(Sn)},{default:x(()=>[p(Ln)]),_:1},8,["source"]),e[17]||(e[17]=G(`<h2 id="api" tabindex="-1">API</h2><h3 id="anchor-props" tabindex="-1">Anchor Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>数据化配置选项内容</td><td><code>AnchorLinkItem[]</code></td><td><code>[]</code></td></tr><tr><td>affix</td><td>固定模式</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>offsetTop</td><td>距离窗口顶部达到指定偏移量后触发</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>targetOffset</td><td>滚动偏移量，影响锚点高亮判断</td><td><code>number</code></td><td><code>offsetTop</code></td></tr><tr><td>direction</td><td>锚点方向</td><td><code>&#39;vertical&#39; | &#39;horizontal&#39;</code></td><td><code>&#39;vertical&#39;</code></td></tr><tr><td>bounds</td><td>锚点区域边界</td><td><code>number</code></td><td><code>5</code></td></tr><tr><td>replace</td><td>是否替换浏览器历史记录</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getCurrentAnchor</td><td>自定义高亮的锚点</td><td><code>(activeLink: string) =&gt; string</code></td><td>-</td></tr><tr><td>getContainer</td><td>指定滚动的容器</td><td><code>() =&gt; HTMLElement | Window</code></td><td><code>() =&gt; window</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>AnchorClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>AnchorStyles</code></td><td>-</td></tr></tbody></table><h3 id="anchorlinkitem" tabindex="-1">AnchorLinkItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>href</td><td>锚点链接</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>文字内容</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>链接打开方式</td><td><code>string</code></td><td>-</td></tr><tr><td>targetOffset</td><td>该锚点的滚动偏移量</td><td><code>number</code></td><td>-</td></tr><tr><td>children</td><td>子节点</td><td><code>AnchorLinkItem[]</code></td><td>-</td></tr></tbody></table><h3 id="anchorlink-props" tabindex="-1">Anchor.Link Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>href</td><td>锚点链接</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>文字内容</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>链接打开方式</td><td><code>string</code></td><td>-</td></tr><tr><td>replace</td><td>是否替换浏览器历史记录</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>targetOffset</td><td>该锚点的滚动偏移量</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="anchor-events" tabindex="-1">Anchor Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>锚点改变时触发</td><td><code>(currentActiveLink: string) =&gt; void</code></td></tr><tr><td>click</td><td>点击锚点时触发</td><td><code>(e: MouseEvent, link: { title: string; href: string }) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对锚点组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">AnchorClassNames</span> <span class="token punctuation">{</span>
  wrapper<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 外层滚动容器（Anchor 组件的最外层 div）</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 锚点根容器（包含 ink 和链接的内层容器）</span>
  ink<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 指示器滑块（当前激活项的视觉指示器）</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 链接项容器（每个 AnchorLink 的 div 包裹层）</span>
  linkActive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 激活状态的链接项（当前激活的链接项额外样式）</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 链接文本（a 标签）</span>
  titleActive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 激活状态的链接文本（当前激活的链接文本额外样式）</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AnchorStyles</span> <span class="token punctuation">{</span>
  wrapper<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  ink<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  link<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  linkActive<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  title<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  titleActive<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 垂直锚点结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-anchor-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.wrapper / styles.wrapper 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-anchor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-anchor-ink<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.ink / styles.ink 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-anchor-link<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.link / styles.link 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-anchor-link-title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#section-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.title / styles.title 应用于此 --&gt;</span>
        锚点标题
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-anchor-link hmfw-anchor-link-active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.link + classNames.linkActive 叠加应用 --&gt;</span>
      <span class="token comment">&lt;!-- ↑ styles.link + styles.linkActive 合并应用 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-anchor-link-title hmfw-anchor-link-title-active<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#section-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.title + classNames.titleActive 叠加应用 --&gt;</span>
        <span class="token comment">&lt;!-- ↑ styles.title + styles.titleActive 合并应用 --&gt;</span>
        当前激活锚点
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义根容器和墨水条 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Anchor</span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;my-anchor-root&#39;,
      ink: &#39;my-anchor-ink&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义链接项和激活状态 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Anchor</span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      link: &#39;my-anchor-link&#39;,
      linkActive: &#39;my-link-active&#39;,
      title: &#39;my-link-title&#39;,
      titleActive: &#39;my-title-active&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-anchor-root)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-anchor-ink)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 8px <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-anchor-link)</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 8px 12px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 4px 0<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-link-active)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span> #e6f4ff 0%<span class="token punctuation">,</span> transparent 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> 3px solid #1677ff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-title-active)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #1677ff<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制墨水条 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Anchor</span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      ink: { width: &#39;4px&#39;, background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义链接文本样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Anchor</span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      title: { fontSize: &#39;15px&#39;, fontWeight: 500 },
      titleActive: { color: &#39;#52c41a&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Anchor</span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { background: &#39;#f0f5ff&#39;, padding: &#39;12px&#39;, borderRadius: &#39;8px&#39; },
      ink: { width: &#39;3px&#39; },
      link: { margin: &#39;6px 0&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>激活状态时，<code>classNames.linkActive</code> 与 <code>classNames.link</code> 会<strong>叠加</strong>应用在同一个 <code>&lt;div&gt;</code> 上</li><li>激活状态时，<code>styles.linkActive</code> 与 <code>styles.link</code> 会<strong>合并</strong>应用，<code>styles.linkActive</code> 优先</li><li>同样地，<code>classNames.titleActive</code> / <code>styles.titleActive</code> 会叠加/合并到激活的标题元素上</li><li><code>wrapper</code> 是最外层容器，用于控制整体布局；<code>root</code> 是内层锚点容器，包含墨水条和链接列表</li><li>水平锚点（<code>direction=&quot;horizontal&quot;</code>）和垂直锚点共享相同的 classNames/styles 结构</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Anchor 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-split</code></td><td>分割线颜色</td><td><code>rgba(5, 5, 5, 0.06)</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0, 0, 0, 0.88)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>标准字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-line-height</code></td><td>标准行高</td><td><code>1.5714285714285714</code></td></tr><tr><td><code>--hmfw-line-width-bold</code></td><td>粗线宽</td><td><code>2px</code></td></tr><tr><td><code>--hmfw-motion-duration-slow</code></td><td>慢速动画时长</td><td><code>0.3s</code></td></tr><tr><td><code>--hmfw-padding</code></td><td>标准内边距</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-padding-xxs</code></td><td>超小内边距</td><td><code>2px</code></td></tr></tbody></table>`,27))])}}};export{Dn as default};
