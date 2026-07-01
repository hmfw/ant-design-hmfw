import{j as ct,p as pt,d as y,u as K,k as U,l as X,c as i,a as b,m as B,r as w,n as Y,o as C,q as ut,e as d,b as q,f as n,i as G,_ as ht,w as x,h as ft,g}from"./index-DZWA4HiS.js";import{c as E}from"./cls-S9IiI6wd.js";const J=Symbol("AnchorContext");function gt(e){pt(J,e)}function mt(){return ct(J,null)}const Q=y({name:"AnchorLink",props:{href:{type:String,required:!0},title:{type:String,required:!0},target:String,replace:Boolean,targetOffset:Number},setup(e,{slots:r}){const p=K("anchor"),t=mt();U(()=>{t==null||t.registerLink(e.href,e.targetOffset)}),X(()=>{t==null||t.unregisterLink(e.href)});const a=c=>{var _;if((_=t==null?void 0:t.onClick)==null||_.call(t,c,{title:e.title,href:e.href}),t==null||t.scrollTo(e.href,e.targetOffset),c.defaultPrevented)return;if(e.href.startsWith("http://")||e.href.startsWith("https://")){(e.replace??(t==null?void 0:t.replace))&&(c.preventDefault(),window.location.replace(e.href));return}c.preventDefault();const I=e.replace??(t==null?void 0:t.replace)?"replaceState":"pushState";window.history[I](null,"",e.href)},o=b(()=>(t==null?void 0:t.activeLink)===e.href),N=b(()=>{var c,h;return E(`${p}-link`,{[`${p}-link-active`]:o.value},(c=t==null?void 0:t.classNames)==null?void 0:c.link,o.value?(h=t==null?void 0:t.classNames)==null?void 0:h.linkActive:void 0)}),T=b(()=>{var c,h;return E(`${p}-link-title`,{[`${p}-link-title-active`]:o.value},(c=t==null?void 0:t.classNames)==null?void 0:c.title,o.value?(h=t==null?void 0:t.classNames)==null?void 0:h.titleActive:void 0)}),P=b(()=>{var c,h;return{...(c=t==null?void 0:t.styles)==null?void 0:c.link,...o.value?(h=t==null?void 0:t.styles)==null?void 0:h.linkActive:{}}}),L=b(()=>{var c,h;return{...(c=t==null?void 0:t.styles)==null?void 0:c.title,...o.value?(h=t==null?void 0:t.styles)==null?void 0:h.titleActive:{}}});return()=>{var c;return i("div",{class:N.value,style:P.value},[i("a",{class:T.value,style:L.value,href:e.href,title:e.title,target:e.target,onClick:a},[e.title]),(t==null?void 0:t.direction)!=="horizontal"?(c=r.default)==null?void 0:c.call(r):null])}}}),kt=y({name:"Anchor",props:{items:{type:Array,default:()=>[]},affix:{type:Boolean,default:!0},offsetTop:{type:Number,default:0},bounds:{type:Number,default:5},targetOffset:Number,direction:{type:String,default:"vertical"},replace:Boolean,getCurrentAnchor:Function,getContainer:Function,classNames:Object,styles:Object},emits:["change","click"],setup(e,{emit:r,slots:p}){const t=K("anchor"),a=w(null),o=w([]),N=w({}),T=w(),P=w(),L=w(!1);let c=null;const h=()=>e.getContainer?e.getContainer():window,H=s=>s===window?window.scrollY:s.scrollTop,I=(s,l)=>{if(!s.getClientRects().length)return 0;const u=s.getBoundingClientRect();return u.width||u.height?l===window?u.top-s.ownerDocument.documentElement.clientTop:u.top-l.getBoundingClientRect().top:u.top},_=(s,l)=>{o.value.includes(s)||(o.value=[...o.value,s]),l!==void 0&&(N.value[s]=l)},M=s=>{o.value=o.value.filter(l=>l!==s),delete N.value[s]},W=()=>{if(!T.value||!P.value)return;const s=T.value.querySelector(`.${t}-link-title-active`);if(s){const{style:l}=P.value,u=e.direction==="horizontal";l.top=u?"":`${s.offsetTop+s.clientHeight/2}px`,l.height=u?"":`${s.clientHeight}px`,l.left=u?`${s.offsetLeft}px`:"",l.width=u?`${s.clientWidth}px`:"",u&&s.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}},Z=(s,l,u)=>{const m=[],O=h();return s.forEach(k=>{const v=/#([\S ]+)$/.exec(k);if(!v)return;const A=document.getElementById(v[1]);if(A){const R=N.value[k]??l,z=I(A,O);z<=R+u&&m.push({link:k,top:z})}}),m.length?m.reduce((v,A)=>A.top>v.top?A:v).link:""},D=s=>{if(a.value===s)return;const l=e.getCurrentAnchor?e.getCurrentAnchor(s):s;a.value=l,r("change",s)},$=()=>{if(L.value)return;const s=Z(o.value,e.targetOffset??e.offsetTop??0,e.bounds);D(s)},tt=(s,l)=>{const u=a.value;D(s);const m=/#([\S ]+)$/.exec(s);if(!m)return;const O=document.getElementById(m[1]);if(!O||L.value&&u===s)return;const k=h(),v=H(k),A=I(O,k);let R=v+A;const z=l??e.targetOffset??e.offsetTop??0;R-=z,L.value=!0;const it=Date.now(),lt=450,V=()=>{const rt=Date.now()-it,S=Math.min(rt/lt,1),dt=S<.5?2*S*S:-1+(4-2*S)*S,j=v+(R-v)*dt;k===window?window.scrollTo(0,j):k.scrollTop=j,S<1?c=requestAnimationFrame(V):L.value=!1};V()},nt=(s,l)=>{r("click",s,l)};gt({registerLink:_,unregisterLink:M,activeLink:a.value,scrollTo:tt,onClick:nt,direction:e.direction,replace:e.replace,classNames:e.classNames,styles:e.styles}),U(()=>{h().addEventListener("scroll",$),$()}),X(()=>{h().removeEventListener("scroll",$),c!==null&&cancelAnimationFrame(c)}),B(()=>e.items,()=>{$()},{deep:!0}),B(()=>o.value,()=>{$()}),B(()=>a.value,()=>{Y(()=>{W()})}),B(()=>e.getCurrentAnchor,()=>{e.getCurrentAnchor&&a.value&&D(e.getCurrentAnchor(a.value))}),B(()=>e.direction,()=>{Y(()=>{W()})});const F=s=>s.map(l=>i(Q,{key:l.key??l.href,href:l.href,title:l.title,target:l.target,targetOffset:l.targetOffset},{default:()=>{var u;return[e.direction==="vertical"&&((u=l.children)!=null&&u.length)?F(l.children):null]}})),et=b(()=>{var s;return E(`${t}-wrapper`,{[`${t}-wrapper-horizontal`]:e.direction==="horizontal"},(s=e.classNames)==null?void 0:s.wrapper)}),st=b(()=>{var s;return E(t,{[`${t}-fixed`]:!e.affix},(s=e.classNames)==null?void 0:s.root)}),at=b(()=>{var s;return E(`${t}-ink`,{[`${t}-ink-visible`]:!!a.value},(s=e.classNames)==null?void 0:s.ink)}),ot=b(()=>{var s;return{maxHeight:e.offsetTop?`calc(100vh - ${e.offsetTop}px)`:"100vh",...(s=e.styles)==null?void 0:s.wrapper}});return()=>{var s,l,u,m;return i("div",{ref:T,class:et.value,style:ot.value},[i("div",{class:st.value,style:(s=e.styles)==null?void 0:s.root},[i("span",{class:at.value,ref:P,style:(l=e.styles)==null?void 0:l.ink},null),(u=e.items)!=null&&u.length?F(e.items):(m=p.default)==null?void 0:m.call(p)])])}}}),f=kt;f.Link=Q;const vt=y({__name:"AnchorAffix",setup(e){const r=[{href:"#section-a",title:"章节 A"},{href:"#section-b",title:"章节 B"},{href:"#section-c",title:"章节 C"}],p=a=>{console.log("当前锚点:",a)},t=(a,o)=>{console.log("点击锚点:",o)};return(a,o)=>(C(),ut(d(f),{affix:"","offset-top":80,items:r,onChange:p,onClick:t}))}}),xt=`<template>
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
`,bt={style:{display:"flex",gap:"24px"}},yt=y({__name:"AnchorBasic",setup(e){const r=[{href:"#part-1",title:"第一部分"},{href:"#part-2",title:"第二部分"},{href:"#part-3",title:"第三部分",children:[{href:"#part-3-1",title:"第三部分-1"},{href:"#part-3-2",title:"第三部分-2"}]}];return(p,t)=>(C(),q("div",bt,[t[0]||(t[0]=n("div",{style:{flex:"1"}},[n("div",{id:"part-1",style:{height:"200px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"第一部分"),n("p",null,"这是第一部分的内容。")]),n("div",{id:"part-2",style:{height:"200px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"第二部分"),n("p",null,"这是第二部分的内容。")]),n("div",{id:"part-3",style:{height:"200px",background:"#fff7e6",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"第三部分"),n("p",null,"这是第三部分的内容。")])],-1)),i(d(f),{items:r,"offset-top":64,style:{width:"160px"}})]))}}),At=`<template>
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
`,wt={style:{display:"flex","flex-direction":"column",gap:"32px"}},Ct=y({__name:"AnchorClassNames",setup(e){const r=w(),p=[{key:"1",href:"#anchor-demo-1",title:"锚点 1"},{key:"2",href:"#anchor-demo-2",title:"锚点 2"},{key:"3",href:"#anchor-demo-3",title:"锚点 3"}],t=()=>r.value||window;return(a,o)=>(C(),q("div",wt,[n("div",null,[o[0]||(o[0]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器和墨水条：",-1)),i(d(f),{items:p,"class-names":{root:"custom-root",ink:"custom-ink"},"get-container":t})]),n("div",null,[o[1]||(o[1]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义链接项和激活状态：",-1)),i(d(f),{items:p,"class-names":{link:"custom-link",linkActive:"custom-link-active"},"get-container":t})]),n("div",null,[o[2]||(o[2]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义链接文本样式：",-1)),i(d(f),{items:p,"class-names":{title:"custom-title",titleActive:"custom-title-active"},"get-container":t})]),n("div",null,[o[3]||(o[3]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),i(d(f),{items:p,styles:{root:{background:"#f0f5ff",padding:"12px",borderRadius:"8px"},ink:{width:"4px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},title:{fontSize:"15px",fontWeight:500}},"get-container":t})]),n("div",null,[o[4]||(o[4]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合使用 classNames 和 styles：",-1)),i(d(f),{items:p,"class-names":{root:"combined-root",link:"combined-link",titleActive:"combined-title-active"},styles:{ink:{width:"3px"}},"get-container":t})]),n("div",{ref_key:"containerRef",ref:r,style:{height:"200px",overflow:"auto",border:"1px solid #d9d9d9","border-radius":"4px",padding:"16px"}},[...o[5]||(o[5]=[G('<h3 id="anchor-demo-1" data-v-630ddd40>锚点 1</h3><p style="height:100px;" data-v-630ddd40>这是第一个锚点的内容区域...</p><h3 id="anchor-demo-2" data-v-630ddd40>锚点 2</h3><p style="height:100px;" data-v-630ddd40>这是第二个锚点的内容区域...</p><h3 id="anchor-demo-3" data-v-630ddd40>锚点 3</h3><p style="height:100px;" data-v-630ddd40>这是第三个锚点的内容区域...</p>',6)])],512)]))}}),Lt=ht(Ct,[["__scopeId","data-v-630ddd40"]]),St=`<template>
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
`,qt=y({__name:"AnchorHorizontal",setup(e){const r=[{href:"#h-part-1",title:"第一部分"},{href:"#h-part-2",title:"第二部分"},{href:"#h-part-3",title:"第三部分"}];return(p,t)=>(C(),q("div",null,[i(d(f),{direction:"horizontal",items:r,style:{"margin-bottom":"24px"}}),t[0]||(t[0]=n("div",{id:"h-part-1",style:{height:"160px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"第一部分")],-1)),t[1]||(t[1]=n("div",{id:"h-part-2",style:{height:"160px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"第二部分")],-1)),t[2]||(t[2]=n("div",{id:"h-part-3",style:{height:"160px",background:"#fff7e6",padding:"16px"}},[n("h3",null,"第三部分")],-1))]))}}),Nt=`<template>
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
`,Tt={style:{display:"flex",gap:"24px"}},Pt=y({__name:"AnchorLink",setup(e){const r=f.Link;return(p,t)=>(C(),q("div",Tt,[t[0]||(t[0]=n("div",{style:{flex:"1"}},[n("div",{id:"components-anchor-demo-basic",style:{height:"200px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"Basic demo"),n("p",null,"The simplest usage.")]),n("div",{id:"components-anchor-demo-static",style:{height:"200px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"Static Anchor"),n("p",null,"Do not change hash when scrolling.")]),n("div",{id:"API",style:{height:"200px",background:"#fff7e6",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"API"),n("p",null,"API documentation.")])],-1)),i(d(f),{"offset-top":64,style:{width:"200px"}},{default:x(()=>[i(d(r),{href:"#components-anchor-demo-basic",title:"Basic demo"}),i(d(r),{href:"#components-anchor-demo-static",title:"Static demo"}),i(d(r),{href:"#API",title:"API"},{default:x(()=>[i(d(r),{href:"#Anchor-Props",title:"Anchor Props"}),i(d(r),{href:"#Link-Props",title:"Link Props"})]),_:1})]),_:1})]))}}),$t=`<template>
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
`,Bt={style:{display:"flex",gap:"24px"}},Et=y({__name:"AnchorTargetOffset",setup(e){const r=f.Link;return(p,t)=>(C(),q("div",Bt,[t[0]||(t[0]=n("div",{style:{flex:"1"}},[n("div",{id:"target-1",style:{height:"200px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"Target 1"),n("p",null,"Content with custom target offset.")]),n("div",{id:"target-2",style:{height:"200px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"Target 2"),n("p",null,"Content with different target offset.")]),n("div",{id:"target-3",style:{height:"200px",background:"#fff7e6",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"Target 3"),n("p",null,"Content with default offset.")])],-1)),i(d(f),{"target-offset":100,style:{width:"200px"}},{default:x(()=>[i(d(r),{href:"#target-1",title:"Target 1 (offset 50)","target-offset":50}),i(d(r),{href:"#target-2",title:"Target 2 (offset 150)","target-offset":150}),i(d(r),{href:"#target-3",title:"Target 3 (default)"})]),_:1})]))}}),It=`<template>
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
`,_t={class:"markdown-body"},zt={__name:"anchor",setup(e,{expose:r}){return r({frontmatter:{}}),(t,a)=>{const o=ft("DemoBlock");return C(),q("div",_t,[a[0]||(a[0]=n("h1",{id:"anchor-锚点",tabindex:"-1"},"Anchor 锚点",-1)),a[1]||(a[1]=n("p",null,"用于跳转到页面指定位置。",-1)),a[2]||(a[2]=n("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),a[3]||(a[3]=n("ul",null,[n("li",null,"需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转时"),n("li",null,"需要固定在页面某个位置时")],-1)),a[4]||(a[4]=n("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),a[5]||(a[5]=n("h3",{id:"基础用法垂直",tabindex:"-1"},"基础用法（垂直）",-1)),a[6]||(a[6]=n("p",null,"最简单的用法，垂直方向展示锚点列表。",-1)),i(o,{title:"基础用法（垂直）",source:d(At)},{default:x(()=>[i(yt)]),_:1},8,["source"]),a[7]||(a[7]=n("h3",{id:"使用-anchorlink",tabindex:"-1"},"使用 Anchor.Link",-1)),a[8]||(a[8]=n("p",null,[g("使用 "),n("code",null,"Anchor.Link"),g(" 组件作为子组件。")],-1)),i(o,{title:"使用 Anchor.Link",source:d($t)},{default:x(()=>[i(Pt)]),_:1},8,["source"]),a[9]||(a[9]=n("h3",{id:"水平锚点",tabindex:"-1"},"水平锚点",-1)),a[10]||(a[10]=n("p",null,[g("通过 "),n("code",null,'direction="horizontal"'),g(" 设置水平方向锚点。")],-1)),i(o,{title:"水平锚点",source:d(Nt)},{default:x(()=>[i(qt)]),_:1},8,["source"]),a[11]||(a[11]=n("h3",{id:"自定义目标偏移",tabindex:"-1"},"自定义目标偏移",-1)),a[12]||(a[12]=n("p",null,[g("通过 "),n("code",null,"targetOffset"),g(" 设置全局偏移，或在 "),n("code",null,"Anchor.Link"),g(" 上设置单独偏移。")],-1)),i(o,{title:"自定义目标偏移",source:d(It)},{default:x(()=>[i(Et)]),_:1},8,["source"]),a[13]||(a[13]=n("h3",{id:"固定锚点",tabindex:"-1"},"固定锚点",-1)),a[14]||(a[14]=n("p",null,[g("通过 "),n("code",null,"affix"),g(" 属性让锚点固定在页面某个位置。")],-1)),i(o,{title:"固定锚点",source:d(xt)},{default:x(()=>[i(vt)]),_:1},8,["source"]),a[15]||(a[15]=n("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),a[16]||(a[16]=n("p",null,[g("通过 "),n("code",null,"classNames"),g(" / "),n("code",null,"styles"),g(" 对各子元素做细粒度样式控制。")],-1)),i(o,{title:"语义化 className 与 style",source:d(St)},{default:x(()=>[i(Lt)]),_:1},8,["source"]),a[17]||(a[17]=G(`<h2 id="api" tabindex="-1">API</h2><h3 id="anchor-props" tabindex="-1">Anchor Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>数据化配置选项内容</td><td><code>AnchorLinkItem[]</code></td><td><code>[]</code></td></tr><tr><td>affix</td><td>固定模式</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>offsetTop</td><td>距离窗口顶部达到指定偏移量后触发</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>targetOffset</td><td>滚动偏移量，影响锚点高亮判断</td><td><code>number</code></td><td><code>offsetTop</code></td></tr><tr><td>direction</td><td>锚点方向</td><td><code>&#39;vertical&#39; | &#39;horizontal&#39;</code></td><td><code>&#39;vertical&#39;</code></td></tr><tr><td>bounds</td><td>锚点区域边界</td><td><code>number</code></td><td><code>5</code></td></tr><tr><td>replace</td><td>是否替换浏览器历史记录</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getCurrentAnchor</td><td>自定义高亮的锚点</td><td><code>(activeLink: string) =&gt; string</code></td><td>-</td></tr><tr><td>getContainer</td><td>指定滚动的容器</td><td><code>() =&gt; HTMLElement | Window</code></td><td><code>() =&gt; window</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>AnchorClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>AnchorStyles</code></td><td>-</td></tr></tbody></table><h3 id="anchorlinkitem" tabindex="-1">AnchorLinkItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>href</td><td>锚点链接</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>文字内容</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>链接打开方式</td><td><code>string</code></td><td>-</td></tr><tr><td>targetOffset</td><td>该锚点的滚动偏移量</td><td><code>number</code></td><td>-</td></tr><tr><td>children</td><td>子节点</td><td><code>AnchorLinkItem[]</code></td><td>-</td></tr></tbody></table><h3 id="anchorlink-props" tabindex="-1">Anchor.Link Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>href</td><td>锚点链接</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>文字内容</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>链接打开方式</td><td><code>string</code></td><td>-</td></tr><tr><td>replace</td><td>是否替换浏览器历史记录</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>targetOffset</td><td>该锚点的滚动偏移量</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="anchor-events" tabindex="-1">Anchor Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>锚点改变时触发</td><td><code>(currentActiveLink: string) =&gt; void</code></td></tr><tr><td>click</td><td>点击锚点时触发</td><td><code>(e: MouseEvent, link: { title: string; href: string }) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对锚点组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义根容器和墨水条 --&gt;
  &lt;Anchor
    :items=&quot;items&quot;
    :class-names=&quot;{
      root: &#39;my-anchor-root&#39;,
      ink: &#39;my-anchor-ink&#39;,
    }&quot;
  /&gt;

  &lt;!-- 自定义链接项和激活状态 --&gt;
  &lt;Anchor
    :items=&quot;items&quot;
    :class-names=&quot;{
      link: &#39;my-anchor-link&#39;,
      linkActive: &#39;my-link-active&#39;,
      title: &#39;my-link-title&#39;,
      titleActive: &#39;my-title-active&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-anchor-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px;
  border-radius: 8px;
}

:deep(.my-anchor-ink) {
  background: white;
  width: 3px;
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
}

:deep(.my-anchor-link) {
  padding: 8px 12px;
  margin: 4px 0;
  border-radius: 6px;
  transition: all 0.3s;
}

:deep(.my-link-active) {
  background: linear-gradient(90deg, #e6f4ff 0%, transparent 100%);
  border-left: 3px solid #1677ff;
}

:deep(.my-title-active) {
  color: #1677ff;
  font-weight: 600;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制墨水条 --&gt;
  &lt;Anchor
    :items=&quot;items&quot;
    :styles=&quot;{
      ink: { width: &#39;4px&#39;, background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39; },
    }&quot;
  /&gt;

  &lt;!-- 自定义链接文本样式 --&gt;
  &lt;Anchor
    :items=&quot;items&quot;
    :styles=&quot;{
      title: { fontSize: &#39;15px&#39;, fontWeight: 500 },
      titleActive: { color: &#39;#52c41a&#39; },
    }&quot;
  /&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;Anchor
    :items=&quot;items&quot;
    :styles=&quot;{
      root: { background: &#39;#f0f5ff&#39;, padding: &#39;12px&#39;, borderRadius: &#39;8px&#39; },
      ink: { width: &#39;3px&#39; },
      link: { margin: &#39;6px 0&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>激活状态时，<code>classNames.linkActive</code> 与 <code>classNames.link</code> 会<strong>叠加</strong>应用在同一个 <code>&lt;div&gt;</code> 上</li><li>激活状态时，<code>styles.linkActive</code> 与 <code>styles.link</code> 会<strong>合并</strong>应用，<code>styles.linkActive</code> 优先</li><li>同样地，<code>classNames.titleActive</code> / <code>styles.titleActive</code> 会叠加/合并到激活的标题元素上</li><li><code>wrapper</code> 是最外层容器，用于控制整体布局；<code>root</code> 是内层锚点容器，包含墨水条和链接列表</li><li>水平锚点（<code>direction=&quot;horizontal&quot;</code>）和垂直锚点共享相同的 classNames/styles 结构</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Anchor 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-split</code></td><td>分割线颜色</td><td><code>rgba(5, 5, 5, 0.06)</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0, 0, 0, 0.88)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>标准字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-line-height</code></td><td>标准行高</td><td><code>1.5714285714285714</code></td></tr><tr><td><code>--hmfw-line-width-bold</code></td><td>粗线宽</td><td><code>2px</code></td></tr><tr><td><code>--hmfw-motion-duration-slow</code></td><td>慢速动画时长</td><td><code>0.3s</code></td></tr><tr><td><code>--hmfw-padding</code></td><td>标准内边距</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-padding-xxs</code></td><td>超小内边距</td><td><code>2px</code></td></tr></tbody></table>`,27))])}}};export{zt as default};
