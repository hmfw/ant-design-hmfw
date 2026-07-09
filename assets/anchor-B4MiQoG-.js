import{j as gn,p as fn,d as k,u as X,k as J,l as Q,c as o,a as A,m as I,r as L,n as U,t as F,o as v,q as mn,e as l,b,i as $,f as n,_ as kn,w as m,g as u,s as xn,h as vn}from"./index-dV6GQSVR.js";import{c as B}from"./cls-S9IiI6wd.js";const Z=Symbol("AnchorContext");function bn(s){fn(Z,s)}function yn(){return gn(Z,null)}const nn=k({name:"AnchorLink",props:{href:{type:String,required:!0},title:{type:String,required:!0},target:String,replace:Boolean,targetOffset:Number},setup(s,{slots:p}){const c=X("anchor"),t=yn();J(()=>{t==null||t.registerLink(s.href,s.targetOffset)}),Q(()=>{t==null||t.unregisterLink(s.href)});const e=d=>{var R;if((R=t==null?void 0:t.onClick)==null||R.call(t,d,{title:s.title,href:s.href}),t==null||t.scrollTo(s.href,s.targetOffset),d.defaultPrevented)return;if(s.href.startsWith("http://")||s.href.startsWith("https://")){(s.replace??(t==null?void 0:t.replace.value))&&(d.preventDefault(),window.location.replace(s.href));return}d.preventDefault();const E=s.replace??(t==null?void 0:t.replace.value)?"replaceState":"pushState";window.history[E](null,"",s.href)},i=A(()=>(t==null?void 0:t.activeLink.value)===s.href),y=A(()=>{var d,f;return B(`${c}-link`,{[`${c}-link-active`]:i.value},(d=t==null?void 0:t.classNames.value)==null?void 0:d.link,i.value?(f=t==null?void 0:t.classNames.value)==null?void 0:f.linkActive:void 0)}),_=A(()=>{var d,f;return B(`${c}-link-title`,{[`${c}-link-title-active`]:i.value},(d=t==null?void 0:t.classNames.value)==null?void 0:d.title,i.value?(f=t==null?void 0:t.classNames.value)==null?void 0:f.titleActive:void 0)}),z=A(()=>{var d,f;return{...(d=t==null?void 0:t.styles.value)==null?void 0:d.link,...i.value?(f=t==null?void 0:t.styles.value)==null?void 0:f.linkActive:{}}}),N=A(()=>{var d,f;return{...(d=t==null?void 0:t.styles.value)==null?void 0:d.title,...i.value?(f=t==null?void 0:t.styles.value)==null?void 0:f.titleActive:{}}});return()=>{var d;return o("div",{class:y.value,style:z.value},[o("a",{class:_.value,style:N.value,href:s.href,title:s.title,target:s.target,onClick:e},[s.title]),(t==null?void 0:t.direction.value)!=="horizontal"?(d=p.default)==null?void 0:d.call(p):null])}}}),An=k({name:"Anchor",props:{items:{type:Array,default:()=>[]},affix:{type:Boolean,default:!0},offsetTop:{type:Number,default:0},bounds:{type:Number,default:5},direction:{type:String,default:"vertical"},replace:Boolean,getCurrentAnchor:Function,getContainer:Function,classNames:Object,styles:Object},emits:["change","click"],setup(s,{emit:p,slots:c}){const t=X("anchor"),e=L(null),i=L([]),y=L({}),_=L(),z=L(),N=L(!1);let d=null,f,T=null;const E=()=>s.getContainer?s.getContainer():window,R=a=>a===window?window.scrollY:a.scrollTop,W=(a,r)=>{if(!a.getClientRects().length)return 0;const g=a.getBoundingClientRect();return g.width||g.height?r===window?g.top-a.ownerDocument.documentElement.clientTop:g.top-r.getBoundingClientRect().top:g.top},tn=(a,r)=>{i.value.includes(a)||(i.value=[...i.value,a]),r!==void 0&&(y.value[a]=r)},en=a=>{i.value=i.value.filter(r=>r!==a),delete y.value[a]},G=()=>{var r;if(!_.value||!z.value)return;const a=_.value.querySelector(`.${t}-link-title-active`);if(a){const{style:g}=z.value,x=s.direction==="horizontal";if(g.top=x?"":`${a.offsetTop+a.clientHeight/2}px`,g.height=x?"":`${a.clientHeight}px`,g.left=x?`${a.offsetLeft}px`:"",g.width=x?`${a.clientWidth}px`:"",x){const S=(r=_.value)==null?void 0:r.querySelector(`.${t}`);S&&S.scrollTo({left:a.offsetLeft,behavior:"smooth"})}}},sn=(a,r,g)=>{const x=[],S=E();return a.forEach(w=>{const C=/#(.+)$/.exec(w);if(!C)return;const q=document.getElementById(C[1]);if(q){const H=y.value[w]??r,M=W(q,S);M<=H+g&&x.push({link:w,top:M})}}),x.length?x.reduce((C,q)=>q.top>C.top?q:C).link:""},j=a=>{if(e.value===a)return;const r=s.getCurrentAnchor?s.getCurrentAnchor(a):a;e.value=r,p("change",a)},O=()=>{if(N.value)return;const a=sn(i.value,s.offsetTop??0,s.bounds);j(a)},D=()=>{T===null&&(T=requestAnimationFrame(()=>{T=null,O()}))};bn({registerLink:tn,unregisterLink:en,activeLink:e,scrollTo:(a,r)=>{const g=e.value;j(a);const x=/#(.+)$/.exec(a);if(!x)return;const S=document.getElementById(x[1]);if(!S||N.value&&g===a)return;d!==null&&(cancelAnimationFrame(d),d=null);const w=E(),C=R(w),q=W(S,w);let H=C+q;const M=r??s.offsetTop??0;H-=M,N.value=!0;const cn=Date.now(),dn=450,Y=()=>{const un=Date.now()-cn,P=Math.min(un/dn,1),hn=P<.5?2*P*P:-1+(4-2*P)*P,K=C+(H-C)*hn;w===window?window.scrollTo(0,K):w.scrollTop=K,P<1?d=requestAnimationFrame(Y):N.value=!1};Y()},onClick:(a,r)=>{p("click",a,r)},direction:F(s,"direction"),replace:F(s,"replace"),classNames:F(s,"classNames"),styles:F(s,"styles")}),J(()=>{f=E(),f.addEventListener("scroll",D),window.addEventListener("resize",D),O()}),Q(()=>{f.removeEventListener("scroll",D),window.removeEventListener("resize",D),d!==null&&cancelAnimationFrame(d),T!==null&&cancelAnimationFrame(T)}),I(()=>s.items,()=>{O()},{deep:!0}),I(()=>i.value,()=>{O()}),I(()=>e.value,()=>{U(()=>{G()})}),I(()=>s.getCurrentAnchor,()=>{s.getCurrentAnchor&&e.value&&j(s.getCurrentAnchor(e.value))}),I(()=>s.direction,()=>{U(()=>{G()})});const V=a=>a.map(r=>o(nn,{key:r.key??r.href,href:r.href,title:r.title,target:r.target,targetOffset:r.targetOffset},{default:()=>{var g;return[s.direction==="vertical"&&((g=r.children)!=null&&g.length)?V(r.children):null]}})),an=A(()=>{var a;return(a=s.items)!=null&&a.length?V(s.items):null}),on=A(()=>{var a;return B(`${t}-wrapper`,{[`${t}-wrapper-horizontal`]:s.direction==="horizontal"},(a=s.classNames)==null?void 0:a.wrapper)}),pn=A(()=>{var a;return B(t,{[`${t}-fixed`]:!s.affix},(a=s.classNames)==null?void 0:a.root)}),ln=A(()=>{var a;return B(`${t}-ink`,{[`${t}-ink-visible`]:!!e.value},(a=s.classNames)==null?void 0:a.ink)}),rn=A(()=>{var a;return{maxHeight:s.offsetTop?`calc(100vh - ${s.offsetTop}px)`:"100vh",...(a=s.styles)==null?void 0:a.wrapper}});return()=>{var a,r,g;return o("div",{ref:_,class:on.value,style:rn.value},[o("div",{class:pn.value,style:(a=s.styles)==null?void 0:a.root},[o("span",{class:ln.value,ref:z,style:(r=s.styles)==null?void 0:r.ink},null),an.value??((g=c.default)==null?void 0:g.call(c))])])}}}),h=An;h.Link=nn;const wn=k({__name:"AnchorAffix",setup(s){const p=[{href:"#section-a",title:"章节 A"},{href:"#section-b",title:"章节 B"},{href:"#section-c",title:"章节 C"}],c=e=>{console.log("当前锚点:",e)},t=(e,i)=>{console.log("点击锚点:",i)};return(e,i)=>(v(),mn(l(h),{affix:"","offset-top":80,items:p,onChange:c,onClick:t}))}}),Cn=`<template>
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
`,Ln={style:{display:"flex",gap:"24px"}},Sn=k({__name:"AnchorBasic",setup(s){const p=[{href:"#part-1",title:"第一部分"},{href:"#part-2",title:"第二部分"},{href:"#part-3",title:"第三部分",children:[{href:"#part-3-1",title:"第三部分-1"},{href:"#part-3-2",title:"第三部分-2"}]}];return(c,t)=>(v(),b("div",Ln,[t[0]||(t[0]=$('<div style="flex:1;"><div id="part-1" style="height:200px;background:#e6f4ff;padding:16px;margin-bottom:16px;"><h3>第一部分</h3><p>这是第一部分的内容。</p></div><div id="part-2" style="height:200px;background:#f6ffed;padding:16px;margin-bottom:16px;"><h3>第二部分</h3><p>这是第二部分的内容。</p></div><div id="part-3" style="height:100px;background:#fff7e6;padding:16px;margin-bottom:16px;"><h3>第三部分</h3><p>这是第三部分的内容。</p></div><div id="part-3-1" style="height:100px;background:#fff2e8;padding:16px;margin-bottom:8px;margin-left:16px;"><h4>第三部分-1</h4><p>第三部分的第一个子章节。</p></div><div id="part-3-2" style="height:100px;background:#fff2e8;padding:16px;margin-bottom:16px;margin-left:16px;"><h4>第三部分-2</h4><p>第三部分的第二个子章节。</p></div></div>',1)),o(l(h),{items:p,"offset-top":64,style:{width:"160px"}})]))}}),qn=`<template>
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
      <div id="part-3" style="height: 100px; background: #fff7e6; padding: 16px; margin-bottom: 16px">
        <h3>第三部分</h3>
        <p>这是第三部分的内容。</p>
      </div>
      <div
        id="part-3-1"
        style="height: 100px; background: #fff2e8; padding: 16px; margin-bottom: 8px; margin-left: 16px"
      >
        <h4>第三部分-1</h4>
        <p>第三部分的第一个子章节。</p>
      </div>
      <div
        id="part-3-2"
        style="height: 100px; background: #fff2e8; padding: 16px; margin-bottom: 16px; margin-left: 16px"
      >
        <h4>第三部分-2</h4>
        <p>第三部分的第二个子章节。</p>
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
`,_n={style:{display:"flex",gap:"24px"}},Nn={style:{display:"flex","flex-direction":"column",gap:"16px"}},Tn=k({__name:"AnchorBounds",setup(s){const p=[{href:"#bounds-1",title:"第一部分"},{href:"#bounds-2",title:"第二部分"},{href:"#bounds-3",title:"第三部分"}];return(c,t)=>(v(),b("div",_n,[t[2]||(t[2]=n("div",{style:{flex:"1"}},[n("div",{id:"bounds-1",style:{height:"200px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"第一部分"),n("p",null,"调整 bounds 值会影响锚点高亮的判定边界。较小的 bounds 值需要更精确的滚动位置。")]),n("div",{id:"bounds-2",style:{height:"200px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"第二部分")]),n("div",{id:"bounds-3",style:{height:"200px",background:"#fff7e6",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"第三部分")])],-1)),n("div",Nn,[n("div",null,[t[0]||(t[0]=n("div",{style:{"margin-bottom":"4px","font-size":"12px",color:"#999"}},"bounds = 5 (默认)",-1)),o(l(h),{items:p,bounds:5,style:{width:"160px"}})]),n("div",null,[t[1]||(t[1]=n("div",{style:{"margin-bottom":"4px","font-size":"12px",color:"#999"}},"bounds = 50",-1)),o(l(h),{items:p,bounds:50,style:{width:"160px"}})])])]))}}),Pn=`<template>
  <div style="display: flex; gap: 24px">
    <div style="flex: 1">
      <div id="bounds-1" style="height: 200px; background: #e6f4ff; padding: 16px; margin-bottom: 16px">
        <h3>第一部分</h3>
        <p>调整 bounds 值会影响锚点高亮的判定边界。较小的 bounds 值需要更精确的滚动位置。</p>
      </div>
      <div id="bounds-2" style="height: 200px; background: #f6ffed; padding: 16px; margin-bottom: 16px">
        <h3>第二部分</h3>
      </div>
      <div id="bounds-3" style="height: 200px; background: #fff7e6; padding: 16px; margin-bottom: 16px">
        <h3>第三部分</h3>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 16px">
      <div>
        <div style="margin-bottom: 4px; font-size: 12px; color: #999">bounds = 5 (默认)</div>
        <Anchor :items="items" :bounds="5" style="width: 160px" />
      </div>
      <div>
        <div style="margin-bottom: 4px; font-size: 12px; color: #999">bounds = 50</div>
        <Anchor :items="items" :bounds="50" style="width: 160px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Anchor } from '@hmfw/ant-design'

const items = [
  { href: '#bounds-1', title: '第一部分' },
  { href: '#bounds-2', title: '第二部分' },
  { href: '#bounds-3', title: '第三部分' },
]
<\/script>
`,$n={style:{display:"flex","flex-direction":"column",gap:"32px"}},zn=k({__name:"AnchorClassNames",setup(s){const p=L(),c=[{key:"1",href:"#anchor-demo-1",title:"锚点 1"},{key:"2",href:"#anchor-demo-2",title:"锚点 2"},{key:"3",href:"#anchor-demo-3",title:"锚点 3"}],t=()=>p.value||window;return(e,i)=>(v(),b("div",$n,[n("div",null,[i[0]||(i[0]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器和墨水条：",-1)),o(l(h),{items:c,"class-names":{root:"custom-root",ink:"custom-ink"},"get-container":t})]),n("div",null,[i[1]||(i[1]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义链接项和激活状态：",-1)),o(l(h),{items:c,"class-names":{link:"custom-link",linkActive:"custom-link-active"},"get-container":t})]),n("div",null,[i[2]||(i[2]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义链接文本样式：",-1)),o(l(h),{items:c,"class-names":{title:"custom-title",titleActive:"custom-title-active"},"get-container":t})]),n("div",null,[i[3]||(i[3]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),o(l(h),{items:c,styles:{root:{background:"#f0f5ff",padding:"12px",borderRadius:"8px"},ink:{width:"4px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},title:{fontSize:"15px",fontWeight:500}},"get-container":t})]),n("div",null,[i[4]||(i[4]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合使用 classNames 和 styles：",-1)),o(l(h),{items:c,"class-names":{root:"combined-root",link:"combined-link",titleActive:"combined-title-active"},styles:{ink:{width:"3px"}},"get-container":t})]),n("div",{ref_key:"containerRef",ref:p,style:{height:"200px",overflow:"auto",border:"1px solid #d9d9d9","border-radius":"4px",padding:"16px"}},[...i[5]||(i[5]=[$('<h3 id="anchor-demo-1" data-v-630ddd40>锚点 1</h3><p style="height:100px;" data-v-630ddd40>这是第一个锚点的内容区域...</p><h3 id="anchor-demo-2" data-v-630ddd40>锚点 2</h3><p style="height:100px;" data-v-630ddd40>这是第二个锚点的内容区域...</p><h3 id="anchor-demo-3" data-v-630ddd40>锚点 3</h3><p style="height:100px;" data-v-630ddd40>这是第三个锚点的内容区域...</p>',6)])],512)]))}}),En=kn(zn,[["__scopeId","data-v-630ddd40"]]),In=`<template>
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
`,Bn={style:{display:"flex","flex-direction":"column",gap:"16px"}},Rn=k({__name:"AnchorExternalLink",setup(s){const p=h.Link,c=[{key:"github",href:"https://github.com/hmfw/ant-design-hmfw",title:"GitHub 仓库",target:"_blank"},{key:"npm",href:"https://www.npmjs.com/package/@hmfw/ant-design",title:"npm 包",target:"_blank"}];return(t,e)=>(v(),b("div",null,[e[2]||(e[2]=n("p",{style:{color:"#666","margin-bottom":"16px"}}," 锚点支持外部链接（http/https），点击时可通过 replace 属性控制是否替换当前页面。 ",-1)),n("div",Bn,[n("div",null,[e[0]||(e[0]=n("div",{style:{"margin-bottom":"4px","font-size":"12px",color:"#999"}},'支持跳转到外部链接（target="_blank"）',-1)),o(l(h),{items:c,style:{width:"200px",border:"1px solid #f0f0f0","border-radius":"4px",padding:"8px"}})]),n("div",null,[e[1]||(e[1]=n("div",{style:{"margin-bottom":"4px","font-size":"12px",color:"#999"}},"使用 Anchor.Link 设置 target 和外部链接",-1)),o(l(h),{style:{width:"200px",border:"1px solid #f0f0f0","border-radius":"4px",padding:"8px"}},{default:m(()=>[o(l(p),{href:"https://github.com/hmfw/ant-design-hmfw",title:"GitHub 仓库",target:"_blank"}),o(l(p),{href:"https://www.npmjs.com/package/@hmfw/ant-design",title:"npm 包",target:"_blank"}),o(l(p),{href:"#internal-demo",title:"内部锚点"})]),_:1})])]),e[3]||(e[3]=n("div",{id:"internal-demo",style:{height:"120px",background:"#e6f4ff",padding:"16px","margin-top":"16px","border-radius":"4px"}},[n("h3",null,"内部锚点目标"),n("p",null,"这个是内部锚点的目标区域")],-1))]))}}),On=`<template>
  <div>
    <p style="color: #666; margin-bottom: 16px">
      锚点支持外部链接（http/https），点击时可通过 replace 属性控制是否替换当前页面。
    </p>
    <div style="display: flex; flex-direction: column; gap: 16px">
      <div>
        <div style="margin-bottom: 4px; font-size: 12px; color: #999">支持跳转到外部链接（target="_blank"）</div>
        <Anchor
          :items="externalItems"
          style="width: 200px; border: 1px solid #f0f0f0; border-radius: 4px; padding: 8px"
        />
      </div>
      <div>
        <div style="margin-bottom: 4px; font-size: 12px; color: #999">使用 Anchor.Link 设置 target 和外部链接</div>
        <Anchor style="width: 200px; border: 1px solid #f0f0f0; border-radius: 4px; padding: 8px">
          <AnchorLink href="https://github.com/hmfw/ant-design-hmfw" title="GitHub 仓库" target="_blank" />
          <AnchorLink href="https://www.npmjs.com/package/@hmfw/ant-design" title="npm 包" target="_blank" />
          <AnchorLink href="#internal-demo" title="内部锚点" />
        </Anchor>
      </div>
    </div>
    <div
      id="internal-demo"
      style="height: 120px; background: #e6f4ff; padding: 16px; margin-top: 16px; border-radius: 4px"
    >
      <h3>内部锚点目标</h3>
      <p>这个是内部锚点的目标区域</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Anchor } from '@hmfw/ant-design'
import type { AnchorLinkItem } from '@hmfw/ant-design'

const AnchorLink = Anchor.Link

const externalItems: AnchorLinkItem[] = [
  { key: 'github', href: 'https://github.com/hmfw/ant-design-hmfw', title: 'GitHub 仓库', target: '_blank' },
  { key: 'npm', href: 'https://www.npmjs.com/package/@hmfw/ant-design', title: 'npm 包', target: '_blank' },
]
<\/script>
`,Dn={style:{display:"flex",gap:"24px"}},Hn={style:{flex:"1"}},Mn=k({__name:"AnchorGetContainer",setup(s){const p=L(),c=[{href:"#gc-intro",title:"介绍"},{href:"#gc-usage",title:"使用方法"},{href:"#gc-api",title:"API 文档"}],t=()=>p.value||window;return(e,i)=>(v(),b("div",Dn,[n("div",Hn,[n("div",{ref_key:"containerRef",ref:p,style:{height:"300px",overflow:"auto",border:"1px solid #d9d9d9","border-radius":"4px",padding:"16px"}},[...i[0]||(i[0]=[$('<h3 id="gc-intro">介绍</h3><p style="height:120px;"> 使用 getContainer 可以指定自定义滚动容器，锚点的滚动监听和激活状态将在该容器内计算。 </p><h3 id="gc-usage">使用方法</h3><p style="height:120px;">通过 getContainer 返回指定的 DOM 元素，锚点将监听该元素的滚动事件。</p><h3 id="gc-api">API 文档</h3><p style="height:120px;">getContainer 接受一个函数，返回 HTMLElement 或 Window 对象。</p>',6)])],512)]),o(l(h),{items:c,"get-container":t,style:{width:"160px"}})]))}}),Fn=`<template>
  <div style="display: flex; gap: 24px">
    <div style="flex: 1">
      <div
        ref="containerRef"
        style="height: 300px; overflow: auto; border: 1px solid #d9d9d9; border-radius: 4px; padding: 16px"
      >
        <h3 id="gc-intro">介绍</h3>
        <p style="height: 120px">
          使用 getContainer 可以指定自定义滚动容器，锚点的滚动监听和激活状态将在该容器内计算。
        </p>
        <h3 id="gc-usage">使用方法</h3>
        <p style="height: 120px">通过 getContainer 返回指定的 DOM 元素，锚点将监听该元素的滚动事件。</p>
        <h3 id="gc-api">API 文档</h3>
        <p style="height: 120px">getContainer 接受一个函数，返回 HTMLElement 或 Window 对象。</p>
      </div>
    </div>
    <Anchor :items="items" :get-container="getContainer" style="width: 160px" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Anchor } from '@hmfw/ant-design'

const containerRef = ref<HTMLElement>()

const items = [
  { href: '#gc-intro', title: '介绍' },
  { href: '#gc-usage', title: '使用方法' },
  { href: '#gc-api', title: 'API 文档' },
]

const getContainer = () => containerRef.value || window
<\/script>
`,Wn={style:{display:"flex",gap:"24px"}},jn={style:{"font-size":"12px",color:"#999","margin-bottom":"8px"}},Gn=k({__name:"AnchorGetCurrentAnchor",setup(s){const p=L(""),c=[{href:"#custom-a",title:"区域 A"},{href:"#custom-b",title:"区域 B"},{href:"#custom-c",title:"区域 C"}],t=i=>i,e=i=>{p.value=i};return(i,y)=>(v(),b("div",Wn,[y[1]||(y[1]=n("div",{style:{flex:"1"}},[n("div",{id:"custom-a",style:{height:"200px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"区域 A")]),n("div",{id:"custom-b",style:{height:"200px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"区域 B")]),n("div",{id:"custom-c",style:{height:"200px",background:"#fff7e6",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"区域 C")])],-1)),n("div",null,[n("p",jn,[y[0]||(y[0]=u(" getCurrentAnchor 自定义高亮逻辑。当前激活：",-1)),n("strong",null,xn(p.value),1)]),o(l(h),{items:c,"get-current-anchor":t,style:{width:"200px"},onChange:e})])]))}}),Vn=`<template>
  <div style="display: flex; gap: 24px">
    <div style="flex: 1">
      <div id="custom-a" style="height: 200px; background: #e6f4ff; padding: 16px; margin-bottom: 16px">
        <h3>区域 A</h3>
      </div>
      <div id="custom-b" style="height: 200px; background: #f6ffed; padding: 16px; margin-bottom: 16px">
        <h3>区域 B</h3>
      </div>
      <div id="custom-c" style="height: 200px; background: #fff7e6; padding: 16px; margin-bottom: 16px">
        <h3>区域 C</h3>
      </div>
    </div>
    <div>
      <p style="font-size: 12px; color: #999; margin-bottom: 8px">
        getCurrentAnchor 自定义高亮逻辑。当前激活：<strong>{{ currentActive }}</strong>
      </p>
      <Anchor :items="items" :get-current-anchor="getCurrentAnchor" style="width: 200px" @change="onChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Anchor } from '@hmfw/ant-design'

const currentActive = ref('')

const items = [
  { href: '#custom-a', title: '区域 A' },
  { href: '#custom-b', title: '区域 B' },
  { href: '#custom-c', title: '区域 C' },
]

const getCurrentAnchor = (activeLink: string) => {
  // 自定义高亮逻辑：可以在这里对激活链接做转换处理
  // 例如添加前缀、映射到其他链接等
  return activeLink
}

const onChange = (link: string) => {
  currentActive.value = link
}
<\/script>
`,Yn=k({__name:"AnchorHorizontal",setup(s){const p=[{href:"#h-part-1",title:"第一部分"},{href:"#h-part-2",title:"第二部分"},{href:"#h-part-3",title:"第三部分"}];return(c,t)=>(v(),b("div",null,[o(l(h),{direction:"horizontal",items:p,"offset-top":64,style:{"margin-bottom":"24px"}}),t[0]||(t[0]=n("div",{id:"h-part-1",style:{height:"160px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"第一部分")],-1)),t[1]||(t[1]=n("div",{id:"h-part-2",style:{height:"160px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"第二部分")],-1)),t[2]||(t[2]=n("div",{id:"h-part-3",style:{height:"160px",background:"#fff7e6",padding:"16px"}},[n("h3",null,"第三部分")],-1))]))}}),Kn=`<template>
  <div>
    <Anchor direction="horizontal" :items="items" :offset-top="64" style="margin-bottom: 24px" />
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
`,Un={style:{display:"flex",gap:"24px"}},Xn=k({__name:"AnchorLink",setup(s){const p=h.Link;return(c,t)=>(v(),b("div",Un,[t[0]||(t[0]=$('<div style="flex:1;"><div id="components-anchor-demo-basic" style="height:200px;background:#e6f4ff;padding:16px;margin-bottom:16px;"><h3>Basic demo</h3><p>The simplest usage.</p></div><div id="components-anchor-demo-static" style="height:200px;background:#f6ffed;padding:16px;margin-bottom:16px;"><h3>Static Anchor</h3><p>Do not change hash when scrolling.</p></div><div id="API" style="background:#fff7e6;padding:16px;margin-bottom:16px;"><h3>API</h3><p>API documentation.</p><div id="Anchor-Props" style="background:#fff2e8;padding:12px;margin:8px 0 8px 16px;border-radius:4px;"><h4>Anchor Props</h4><p>Anchor 组件的属性配置。</p></div><div id="Link-Props" style="background:#fff2e8;padding:12px;margin:8px 0 8px 16px;border-radius:4px;"><h4>Link Props</h4><p>Anchor.Link 组件的属性配置。</p></div></div></div>',1)),o(l(h),{"offset-top":64,style:{width:"200px"}},{default:m(()=>[o(l(p),{href:"#components-anchor-demo-basic",title:"Basic demo"}),o(l(p),{href:"#components-anchor-demo-static",title:"Static demo"}),o(l(p),{href:"#API",title:"API"},{default:m(()=>[o(l(p),{href:"#Anchor-Props",title:"Anchor Props"}),o(l(p),{href:"#Link-Props",title:"Link Props"})]),_:1})]),_:1})]))}}),Jn=`<template>
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
      <div id="API" style="background: #fff7e6; padding: 16px; margin-bottom: 16px">
        <h3>API</h3>
        <p>API documentation.</p>
        <div id="Anchor-Props" style="background: #fff2e8; padding: 12px; margin: 8px 0 8px 16px; border-radius: 4px">
          <h4>Anchor Props</h4>
          <p>Anchor 组件的属性配置。</p>
        </div>
        <div id="Link-Props" style="background: #fff2e8; padding: 12px; margin: 8px 0 8px 16px; border-radius: 4px">
          <h4>Link Props</h4>
          <p>Anchor.Link 组件的属性配置。</p>
        </div>
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
`,Qn={style:{display:"flex",gap:"24px"}},Zn={style:{display:"flex","flex-direction":"column",gap:"16px"}},nt=k({__name:"AnchorReplace",setup(s){const p=[{href:"#r-section-1",title:"章节 1"},{href:"#r-section-2",title:"章节 2"},{href:"#r-section-3",title:"章节 3"}];return(c,t)=>(v(),b("div",Qn,[t[2]||(t[2]=$('<div style="flex:1;"><h3>replace 属性控制浏览器历史记录行为</h3><p style="color:#666;margin-bottom:16px;"> 点击锚点时观察浏览器地址栏：replace=false 使用 pushState（添加历史记录），replace=true 使用 replaceState（替换当前记录）。 </p><div id="r-section-1" style="height:200px;background:#e6f4ff;padding:16px;margin-bottom:16px;"><h3>章节 1</h3></div><div id="r-section-2" style="height:200px;background:#f6ffed;padding:16px;margin-bottom:16px;"><h3>章节 2</h3></div><div id="r-section-3" style="height:200px;background:#fff7e6;padding:16px;margin-bottom:16px;"><h3>章节 3</h3></div></div>',1)),n("div",Zn,[n("div",null,[t[0]||(t[0]=n("div",{style:{"margin-bottom":"4px","font-size":"12px",color:"#999"}},"replace=false (默认 pushState)",-1)),o(l(h),{items:p,style:{width:"160px"}})]),n("div",null,[t[1]||(t[1]=n("div",{style:{"margin-bottom":"4px","font-size":"12px",color:"#999"}},"replace=true (使用 replaceState)",-1)),o(l(h),{items:p,replace:!0,style:{width:"160px"}})])])]))}}),tt=`<template>
  <div style="display: flex; gap: 24px">
    <div style="flex: 1">
      <h3>replace 属性控制浏览器历史记录行为</h3>
      <p style="color: #666; margin-bottom: 16px">
        点击锚点时观察浏览器地址栏：replace=false 使用 pushState（添加历史记录），replace=true 使用
        replaceState（替换当前记录）。
      </p>
      <div id="r-section-1" style="height: 200px; background: #e6f4ff; padding: 16px; margin-bottom: 16px">
        <h3>章节 1</h3>
      </div>
      <div id="r-section-2" style="height: 200px; background: #f6ffed; padding: 16px; margin-bottom: 16px">
        <h3>章节 2</h3>
      </div>
      <div id="r-section-3" style="height: 200px; background: #fff7e6; padding: 16px; margin-bottom: 16px">
        <h3>章节 3</h3>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 16px">
      <div>
        <div style="margin-bottom: 4px; font-size: 12px; color: #999">replace=false (默认 pushState)</div>
        <Anchor :items="items" style="width: 160px" />
      </div>
      <div>
        <div style="margin-bottom: 4px; font-size: 12px; color: #999">replace=true (使用 replaceState)</div>
        <Anchor :items="items" :replace="true" style="width: 160px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Anchor } from '@hmfw/ant-design'

const items = [
  { href: '#r-section-1', title: '章节 1' },
  { href: '#r-section-2', title: '章节 2' },
  { href: '#r-section-3', title: '章节 3' },
]
<\/script>
`,et={style:{display:"flex",gap:"24px"}},st=k({__name:"AnchorTargetOffset",setup(s){const p=h.Link;return(c,t)=>(v(),b("div",et,[t[0]||(t[0]=n("div",{style:{flex:"1"}},[n("div",{id:"target-1",style:{height:"200px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"Target 1"),n("p",null,"Content with custom target offset.")]),n("div",{id:"target-2",style:{height:"200px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"Target 2"),n("p",null,"Content with different target offset.")]),n("div",{id:"target-3",style:{height:"200px",background:"#fff7e6",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"Target 3"),n("p",null,"Content with default offset.")])],-1)),o(l(h),{"offset-top":64,style:{width:"200px"}},{default:m(()=>[o(l(p),{href:"#target-1",title:"Target 1 (offset 0)","target-offset":0}),o(l(p),{href:"#target-2",title:"Target 2 (offset 150)","target-offset":150}),o(l(p),{href:"#target-3",title:"Target 3 (default)"})]),_:1})]))}}),at=`<template>
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
    <Anchor :offset-top="64" style="width: 200px">
      <AnchorLink href="#target-1" title="Target 1 (offset 0)" :target-offset="0" />
      <AnchorLink href="#target-2" title="Target 2 (offset 150)" :target-offset="150" />
      <AnchorLink href="#target-3" title="Target 3 (default)" />
    </Anchor>
  </div>
</template>

<script setup lang="ts">
import { Anchor } from '@hmfw/ant-design'

const AnchorLink = Anchor.Link
<\/script>
`,ot={class:"markdown-body"},ct={__name:"anchor",setup(s,{expose:p}){return p({frontmatter:{}}),(t,e)=>{const i=vn("DemoBlock");return v(),b("div",ot,[e[0]||(e[0]=n("h1",{id:"anchor-锚点",tabindex:"-1"},"Anchor 锚点",-1)),e[1]||(e[1]=n("p",null,"用于跳转到页面指定位置。",-1)),e[2]||(e[2]=n("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=n("ul",null,[n("li",null,"需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转时"),n("li",null,"需要固定在页面某个位置时")],-1)),e[4]||(e[4]=n("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=n("h3",{id:"基础用法垂直",tabindex:"-1"},"基础用法（垂直）",-1)),e[6]||(e[6]=n("p",null,"最简单的用法，垂直方向展示锚点列表。",-1)),o(i,{title:"基础用法（垂直）",source:l(qn)},{default:m(()=>[o(Sn)]),_:1},8,["source"]),e[7]||(e[7]=n("h3",{id:"使用-anchorlink",tabindex:"-1"},"使用 Anchor.Link",-1)),e[8]||(e[8]=n("p",null,[u("使用 "),n("code",null,"Anchor.Link"),u(" 组件作为子组件。")],-1)),o(i,{title:"使用 Anchor.Link",source:l(Jn)},{default:m(()=>[o(Xn)]),_:1},8,["source"]),e[9]||(e[9]=n("h3",{id:"水平锚点",tabindex:"-1"},"水平锚点",-1)),e[10]||(e[10]=n("p",null,[u("通过 "),n("code",null,'direction="horizontal"'),u(" 设置水平方向锚点。")],-1)),o(i,{title:"水平锚点",source:l(Kn)},{default:m(()=>[o(Yn)]),_:1},8,["source"]),e[11]||(e[11]=n("h3",{id:"自定义目标偏移",tabindex:"-1"},"自定义目标偏移",-1)),e[12]||(e[12]=n("p",null,[u("通过 "),n("code",null,"targetOffset"),u(" 设置全局偏移，或在 "),n("code",null,"Anchor.Link"),u(" 上设置单独偏移。")],-1)),o(i,{title:"自定义目标偏移",source:l(at)},{default:m(()=>[o(st)]),_:1},8,["source"]),e[13]||(e[13]=n("h3",{id:"固定锚点",tabindex:"-1"},"固定锚点",-1)),e[14]||(e[14]=n("p",null,[u("通过 "),n("code",null,"affix"),u(" 属性让锚点固定在页面某个位置。")],-1)),o(i,{title:"固定锚点",source:l(Cn)},{default:m(()=>[o(wn)]),_:1},8,["source"]),e[15]||(e[15]=n("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),e[16]||(e[16]=n("p",null,[u("通过 "),n("code",null,"classNames"),u(" / "),n("code",null,"styles"),u(" 对各子元素做细粒度样式控制。")],-1)),o(i,{title:"语义化 className 与 style",source:l(In)},{default:m(()=>[o(En)]),_:1},8,["source"]),e[17]||(e[17]=n("h3",{id:"自定义边界",tabindex:"-1"},"自定义边界",-1)),e[18]||(e[18]=n("p",null,[u("通过 "),n("code",null,"bounds"),u(" 属性调整锚点高亮的判定边界值，影响激活状态切换的灵敏度。")],-1)),o(i,{title:"自定义边界",source:l(Pn)},{default:m(()=>[o(Tn)]),_:1},8,["source"]),e[19]||(e[19]=n("h3",{id:"替换历史记录",tabindex:"-1"},"替换历史记录",-1)),e[20]||(e[20]=n("p",null,[u("通过 "),n("code",null,"replace"),u(" 属性控制点击锚点时是添加新历史记录（"),n("code",null,"pushState"),u("）还是替换当前记录（"),n("code",null,"replaceState"),u("）。")],-1)),o(i,{title:"替换历史记录",source:l(tt)},{default:m(()=>[o(nt)]),_:1},8,["source"]),e[21]||(e[21]=n("h3",{id:"自定义高亮锚点",tabindex:"-1"},"自定义高亮锚点",-1)),e[22]||(e[22]=n("p",null,[u("通过 "),n("code",null,"getCurrentAnchor"),u(" 自定义激活锚点的判定逻辑。")],-1)),o(i,{title:"自定义高亮锚点",source:l(Vn)},{default:m(()=>[o(Gn)]),_:1},8,["source"]),e[23]||(e[23]=n("h3",{id:"自定义滚动容器",tabindex:"-1"},"自定义滚动容器",-1)),e[24]||(e[24]=n("p",null,[u("通过 "),n("code",null,"getContainer"),u(" 指定滚动的目标容器，适用于锚点与内容区域不在同一滚动上下文中的场景。")],-1)),o(i,{title:"自定义滚动容器",source:l(Fn)},{default:m(()=>[o(Mn)]),_:1},8,["source"]),e[25]||(e[25]=n("h3",{id:"外部链接",tabindex:"-1"},"外部链接",-1)),e[26]||(e[26]=n("p",null,[u("锚点支持外部链接（http/https），可配合 "),n("code",null,"target"),u(" 属性在新窗口中打开。")],-1)),o(i,{title:"外部链接",source:l(On)},{default:m(()=>[o(Rn)]),_:1},8,["source"]),e[27]||(e[27]=$(`<h2 id="api" tabindex="-1">API</h2><h3 id="anchor-props" tabindex="-1">Anchor Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>数据化配置选项内容</td><td><code>AnchorLinkItem[]</code></td><td><code>[]</code></td></tr><tr><td>affix</td><td>固定模式</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>offsetTop</td><td>距离窗口顶部达到指定偏移量后触发，影响滚动定位、高亮判定和 wrapper 高度</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>direction</td><td>锚点方向</td><td><code>&#39;vertical&#39; | &#39;horizontal&#39;</code></td><td><code>&#39;vertical&#39;</code></td></tr><tr><td>bounds</td><td>锚点区域边界</td><td><code>number</code></td><td><code>5</code></td></tr><tr><td>replace</td><td>是否替换浏览器历史记录</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getCurrentAnchor</td><td>自定义高亮的锚点</td><td><code>(activeLink: string) =&gt; string</code></td><td>-</td></tr><tr><td>getContainer</td><td>指定滚动的容器</td><td><code>() =&gt; HTMLElement | Window</code></td><td><code>() =&gt; window</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>AnchorClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>AnchorStyles</code></td><td>-</td></tr></tbody></table><h3 id="anchorlinkitem" tabindex="-1">AnchorLinkItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>href</td><td>锚点链接</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>文字内容</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>链接打开方式</td><td><code>string</code></td><td>-</td></tr><tr><td>targetOffset</td><td>该锚点的滚动偏移量</td><td><code>number</code></td><td>-</td></tr><tr><td>children</td><td>子节点</td><td><code>AnchorLinkItem[]</code></td><td>-</td></tr></tbody></table><h3 id="anchorlink-props" tabindex="-1">Anchor.Link Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>href</td><td>锚点链接</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>文字内容</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>链接打开方式</td><td><code>string</code></td><td>-</td></tr><tr><td>replace</td><td>是否替换浏览器历史记录</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>targetOffset</td><td>该锚点的滚动偏移量</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="anchor-events" tabindex="-1">Anchor Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>锚点改变时触发</td><td><code>(currentActiveLink: string) =&gt; void</code></td></tr><tr><td>click</td><td>点击锚点时触发</td><td><code>(e: MouseEvent, link: { title: string; href: string }) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对锚点组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>激活状态时，<code>classNames.linkActive</code> 与 <code>classNames.link</code> 会<strong>叠加</strong>应用在同一个 <code>&lt;div&gt;</code> 上</li><li>激活状态时，<code>styles.linkActive</code> 与 <code>styles.link</code> 会<strong>合并</strong>应用，<code>styles.linkActive</code> 优先</li><li>同样地，<code>classNames.titleActive</code> / <code>styles.titleActive</code> 会叠加/合并到激活的标题元素上</li><li><code>wrapper</code> 是最外层容器，用于控制整体布局；<code>root</code> 是内层锚点容器，包含墨水条和链接列表</li><li>水平锚点（<code>direction=&quot;horizontal&quot;</code>）和垂直锚点共享相同的 classNames/styles 结构</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Anchor 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-split</code></td><td>分割线颜色</td><td><code>rgba(5, 5, 5, 0.06)</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0, 0, 0, 0.88)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>标准字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-line-height</code></td><td>标准行高</td><td><code>1.5714285714285714</code></td></tr><tr><td><code>--hmfw-line-width-bold</code></td><td>粗线宽</td><td><code>2px</code></td></tr><tr><td><code>--hmfw-motion-duration-slow</code></td><td>慢速动画时长</td><td><code>0.3s</code></td></tr><tr><td><code>--hmfw-padding</code></td><td>标准内边距</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-padding-xxs</code></td><td>超小内边距</td><td><code>2px</code></td></tr></tbody></table>`,27))])}}};export{ct as default};
