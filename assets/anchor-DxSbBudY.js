import{k as v,I as E,t as F,u as N,L as T,j as a,z as y,w as b,e as R,G as f,g as C,d as n,B as V,M as A,i as x,h as q}from"./index-DvxRruME.js";import{c as z}from"./cls-S9IiI6wd.js";const w=v({name:"Anchor",props:{items:{type:Array,default:()=>[]},affix:{type:Boolean,default:!0},offsetTop:{type:Number,default:0},bounds:{type:Number,default:5},targetOffset:Number,direction:{type:String,default:"vertical"},replace:Boolean,getCurrentAnchor:Function,getContainer:Function},emits:["change","click"],setup(o,{emit:c}){const l=E("anchor"),e=y(""),t=y({top:"0px",height:"0px",opacity:"0"}),s=y();let u=0;const g=()=>o.getContainer?o.getContainer():window,I=()=>{const i=g();return i===window?window.scrollY:i.scrollTop},B=i=>i.flatMap(r=>[r,...B(r.children??[])]),k=()=>{if(!s.value||o.direction==="horizontal")return;const i=s.value.querySelector(`a[href="${e.value}"]`);if(!i){t.value={top:"0px",height:"0px",opacity:"0"};return}const r=s.value.getBoundingClientRect(),d=i.getBoundingClientRect();t.value={top:`${d.top-r.top}px`,height:`${d.height}px`,opacity:"1"}},m=()=>{if(o.getCurrentAnchor){const p=o.getCurrentAnchor();p!==e.value&&(e.value=p,c("change",p),k());return}const i=I(),r=o.targetOffset??o.offsetTop??0,d=B(o.items??[]);let h="";for(const p of d){const _=p.href.replace(/^#/,""),L=document.getElementById(_);if(!L)continue;L.getBoundingClientRect().top+i-(g()===window?0:g().getBoundingClientRect().top)<=i+r+o.bounds&&(h=p.href)}h!==e.value&&(e.value=h,c("change",h),cancelAnimationFrame(u),u=requestAnimationFrame(k))},S=(i,r)=>{if(c("click",i,r),o.replace){i.preventDefault();const d=r.href.replace(/^#/,""),h=document.getElementById(d);h&&(h.scrollIntoView({behavior:"smooth",block:"start"}),e.value=r.href,c("change",r.href),cancelAnimationFrame(u),u=requestAnimationFrame(k))}};F(()=>{g().addEventListener("scroll",m),m()}),N(()=>{g().removeEventListener("scroll",m),cancelAnimationFrame(u)}),T(()=>o.items,()=>{m()},{deep:!0});const $=(i,r=0)=>i.map(d=>{var h;return a("div",{key:d.key??d.href,class:`${l}-link`},[a("a",{href:d.href,class:z(`${l}-link-title`,{[`${l}-link-title-active`]:e.value===d.href}),style:{paddingLeft:r>0?`${r*12}px`:void 0},onClick:p=>S(p,d)},[d.title]),(h=d.children)!=null&&h.length?$(d.children,r+1):null])});return()=>a("div",{ref:s,class:z(l,{[`${l}-affix`]:o.affix,[`${l}-horizontal`]:o.direction==="horizontal"})},[o.direction==="vertical"&&a("span",{class:`${l}-ink`},[a("span",{class:`${l}-ink-ball`,style:t.value},null)]),a("div",{class:`${l}-wrapper`},[$(o.items??[])])])}}),D=v({__name:"AnchorAffix",setup(o){const c=[{href:"#section-a",title:"章节 A"},{href:"#section-b",title:"章节 B"},{href:"#section-c",title:"章节 C"}],l=t=>{console.log("当前锚点:",t)},e=(t,s)=>{console.log("点击锚点:",s)};return(t,s)=>(b(),R(f(w),{affix:"","offset-top":80,items:c,onChange:l,onClick:e}))}}),M=`<template>
  <Anchor
    affix
    :offset-top="80"
    :items="items"
    @change="onChange"
    @click="onClick"
  />
</template>

<script setup lang="ts">
import { Anchor } from 'ant-design-hmfw'

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
`,P={style:{display:"flex",gap:"24px"}},H=v({__name:"AnchorBasic",setup(o){const c=[{href:"#part-1",title:"第一部分"},{href:"#part-2",title:"第二部分"},{href:"#part-3",title:"第三部分",children:[{href:"#part-3-1",title:"第三部分-1"},{href:"#part-3-2",title:"第三部分-2"}]}];return(l,e)=>(b(),C("div",P,[e[0]||(e[0]=n("div",{style:{flex:"1"}},[n("div",{id:"part-1",style:{height:"200px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"第一部分"),n("p",null,"这是第一部分的内容。")]),n("div",{id:"part-2",style:{height:"200px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"第二部分"),n("p",null,"这是第二部分的内容。")]),n("div",{id:"part-3",style:{height:"200px",background:"#fff7e6",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"第三部分"),n("p",null,"这是第三部分的内容。")])],-1)),a(f(w),{items:c,"offset-top":64,style:{width:"160px"}})]))}}),O=`<template>
  <div style="display: flex; gap: 24px;">
    <div style="flex: 1;">
      <div id="part-1" style="height: 200px; background: #e6f4ff; padding: 16px; margin-bottom: 16px;">
        <h3>第一部分</h3>
        <p>这是第一部分的内容。</p>
      </div>
      <div id="part-2" style="height: 200px; background: #f6ffed; padding: 16px; margin-bottom: 16px;">
        <h3>第二部分</h3>
        <p>这是第二部分的内容。</p>
      </div>
      <div id="part-3" style="height: 200px; background: #fff7e6; padding: 16px; margin-bottom: 16px;">
        <h3>第三部分</h3>
        <p>这是第三部分的内容。</p>
      </div>
    </div>
    <Anchor
      :items="items"
      :offset-top="64"
      style="width: 160px;"
    />
  </div>
</template>

<script setup lang="ts">
import { Anchor } from 'ant-design-hmfw'

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
`,j=v({__name:"AnchorHorizontal",setup(o){const c=[{href:"#h-part-1",title:"第一部分"},{href:"#h-part-2",title:"第二部分"},{href:"#h-part-3",title:"第三部分"}];return(l,e)=>(b(),C("div",null,[a(f(w),{direction:"horizontal",items:c,style:{"margin-bottom":"24px"}}),e[0]||(e[0]=n("div",{id:"h-part-1",style:{height:"160px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"第一部分")],-1)),e[1]||(e[1]=n("div",{id:"h-part-2",style:{height:"160px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[n("h3",null,"第二部分")],-1)),e[2]||(e[2]=n("div",{id:"h-part-3",style:{height:"160px",background:"#fff7e6",padding:"16px"}},[n("h3",null,"第三部分")],-1))]))}}),G=`<template>
  <div>
    <Anchor
      direction="horizontal"
      :items="items"
      style="margin-bottom: 24px;"
    />
    <div id="h-part-1" style="height: 160px; background: #e6f4ff; padding: 16px; margin-bottom: 16px;">
      <h3>第一部分</h3>
    </div>
    <div id="h-part-2" style="height: 160px; background: #f6ffed; padding: 16px; margin-bottom: 16px;">
      <h3>第二部分</h3>
    </div>
    <div id="h-part-3" style="height: 160px; background: #fff7e6; padding: 16px;">
      <h3>第三部分</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Anchor } from 'ant-design-hmfw'

const items = [
  { href: '#h-part-1', title: '第一部分' },
  { href: '#h-part-2', title: '第二部分' },
  { href: '#h-part-3', title: '第三部分' },
]
<\/script>
`,U={class:"markdown-body"},W={__name:"anchor",setup(o,{expose:c}){return c({frontmatter:{}}),(e,t)=>{const s=V("DemoBlock");return b(),C("div",U,[t[0]||(t[0]=n("h1",{id:"anchor-",tabindex:"-1"},"Anchor 锚点",-1)),t[1]||(t[1]=n("p",null,"用于跳转到页面指定位置。",-1)),t[2]||(t[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转时"),n("li",null,"需要固定在页面某个位置时")],-1)),t[4]||(t[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"-2",tabindex:"-1"},"基础用法（垂直）",-1)),t[6]||(t[6]=n("p",null,"最简单的用法，垂直方向展示锚点列表。",-1)),a(s,{title:"基础用法（垂直）",source:f(O)},{default:A(()=>[a(H)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"-3",tabindex:"-1"},"水平锚点",-1)),t[8]||(t[8]=n("p",null,[x("通过 "),n("code",null,'direction="horizontal"'),x(" 设置水平方向锚点。")],-1)),a(s,{title:"水平锚点",source:f(G)},{default:A(()=>[a(j)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"-4",tabindex:"-1"},"固定锚点",-1)),t[10]||(t[10]=n("p",null,[x("通过 "),n("code",null,"affix"),x(" 属性让锚点固定在页面某个位置。")],-1)),a(s,{title:"固定锚点",source:f(M)},{default:A(()=>[a(D)]),_:1},8,["source"]),t[11]||(t[11]=q('<h2 id="api" tabindex="-1">API</h2><h3 id="anchor-props" tabindex="-1">Anchor Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>数据化配置选项内容</td><td><code>AnchorLinkItem[]</code></td><td><code>[]</code></td></tr><tr><td>affix</td><td>固定模式</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>offsetTop</td><td>距离窗口顶部达到指定偏移量后触发</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>direction</td><td>锚点方向</td><td><code>&#39;vertical&#39; | &#39;horizontal&#39;</code></td><td><code>&#39;vertical&#39;</code></td></tr><tr><td>bounds</td><td>锚点区域边界</td><td><code>number</code></td><td><code>5</code></td></tr></tbody></table><h3 id="anchorlinkitem" tabindex="-1">AnchorLinkItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>href</td><td>锚点链接</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>文字内容</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>子节点</td><td><code>AnchorLinkItem[]</code></td><td>-</td></tr></tbody></table><h3 id="anchor-events" tabindex="-1">Anchor Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>锚点改变时触发</td><td><code>(currentActiveLink: string) =&gt; void</code></td></tr><tr><td>click</td><td>点击锚点时触发</td><td><code>(e: Event, link: AnchorLinkItem) =&gt; void</code></td></tr></tbody></table>',7))])}}};export{W as default};
