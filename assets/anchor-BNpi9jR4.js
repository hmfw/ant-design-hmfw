import{o as ct,z as st,m as b,L as j,v as Y,w as K,l as d,d as k,O as B,B as w,r as W,y as C,g as ht,I as s,i as I,f as t,P as m,E as ft,k as g,j as pt}from"./index-BQisgCTe.js";import{c as _}from"./cls-S9IiI6wd.js";const U=Symbol("AnchorContext");function ut(n){st(U,n)}function gt(){return ct(U,null)}const G=b({name:"AnchorLink",props:{href:{type:String,required:!0},title:{type:String,required:!0},target:String,replace:Boolean,targetOffset:Number},setup(n,{slots:a}){const h=j("anchor"),e=gt();Y(()=>{e==null||e.registerLink(n.href,n.targetOffset)}),K(()=>{e==null||e.unregisterLink(n.href)});const r=f=>{var E;if(f.currentTarget,(E=e==null?void 0:e.onClick)==null||E.call(e,f,{title:n.title,href:n.href}),e==null||e.scrollTo(n.href,n.targetOffset),f.defaultPrevented)return;if(n.href.startsWith("http://")||n.href.startsWith("https://")){(n.replace??(e==null?void 0:e.replace))&&(f.preventDefault(),window.location.replace(n.href));return}f.preventDefault();const A=n.replace??(e==null?void 0:e.replace)?"replaceState":"pushState";window.history[A](null,"",n.href)},l=k(()=>(e==null?void 0:e.activeLink)===n.href),T=k(()=>_(`${h}-link`,{[`${h}-link-active`]:l.value})),S=k(()=>_(`${h}-link-title`,{[`${h}-link-title-active`]:l.value}));return()=>{var f;return d("div",{class:T.value},[d("a",{class:S.value,href:n.href,title:n.title,target:n.target,onClick:r},[n.title]),(e==null?void 0:e.direction)!=="horizontal"?(f=a.default)==null?void 0:f.call(a):null])}}}),mt=b({name:"Anchor",props:{items:{type:Array,default:()=>[]},affix:{type:Boolean,default:!0},offsetTop:{type:Number,default:0},bounds:{type:Number,default:5},targetOffset:Number,direction:{type:String,default:"vertical"},replace:Boolean,getCurrentAnchor:Function,getContainer:Function},emits:["change","click"],setup(n,{emit:a,slots:h}){const e=j("anchor"),r=w(null),l=w([]),T=w({}),S=w(),f=w(),$=w(!1);let O=null;const A=()=>n.getContainer?n.getContainer():window,E=o=>o===window?window.scrollY:o.scrollTop,R=(o,i)=>{if(!o.getClientRects().length)return 0;const c=o.getBoundingClientRect();return c.width||c.height?i===window?c.top-o.ownerDocument.documentElement.clientTop:c.top-i.getBoundingClientRect().top:c.top},J=(o,i)=>{l.value.includes(o)||(l.value=[...l.value,o]),i!==void 0&&(T.value[o]=i)},Q=o=>{l.value=l.value.filter(i=>i!==o),delete T.value[o]},M=()=>{if(!S.value||!f.value)return;const o=S.value.querySelector(`.${e}-link-title-active`);if(o){const{style:i}=f.value,c=n.direction==="horizontal";i.top=c?"":`${o.offsetTop+o.clientHeight/2}px`,i.height=c?"":`${o.clientHeight}px`,i.left=c?`${o.offsetLeft}px`:"",i.width=c?`${o.clientWidth}px`:"",c&&o.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}},X=(o,i,c)=>{const y=[],z=A();return o.forEach(p=>{const u=/#([\S ]+)$/.exec(p);if(!u)return;const x=document.getElementById(u[1]);if(x){const D=T.value[p]??i,N=R(x,z);N<=D+c&&y.push({link:p,top:N})}}),y.length?y.reduce((u,x)=>x.top>u.top?x:u).link:""},H=o=>{if(r.value===o)return;const i=n.getCurrentAnchor?n.getCurrentAnchor(o):o;r.value=i,a("change",o)},P=()=>{if($.value)return;const o=X(l.value,n.targetOffset??n.offsetTop??0,n.bounds);H(o)},Z=(o,i)=>{const c=r.value;H(o);const y=/#([\S ]+)$/.exec(o);if(!y)return;const z=document.getElementById(y[1]);if(!z||$.value&&c===o)return;const p=A(),u=E(p),x=R(z,p);let D=u+x;const N=i??n.targetOffset??n.offsetTop??0;D-=N,$.value=!0;const it=Date.now(),dt=450,q=()=>{const at=Date.now()-it,L=Math.min(at/dt,1),lt=L<.5?2*L*L:-1+(4-2*L)*L,F=u+(D-u)*lt;p===window?window.scrollTo(0,F):p.scrollTop=F,L<1?O=requestAnimationFrame(q):$.value=!1};q()},tt=(o,i)=>{a("click",o,i)};ut({registerLink:J,unregisterLink:Q,activeLink:r.value,scrollTo:Z,onClick:tt,direction:n.direction,replace:n.replace}),Y(()=>{A().addEventListener("scroll",P),P()}),K(()=>{A().removeEventListener("scroll",P),O!==null&&cancelAnimationFrame(O)}),B(()=>n.items,()=>{P()},{deep:!0}),B(()=>l.value,()=>{P()}),B(()=>r.value,()=>{W(()=>{M()})}),B(()=>n.getCurrentAnchor,()=>{n.getCurrentAnchor&&r.value&&H(n.getCurrentAnchor(r.value))}),B(()=>n.direction,()=>{W(()=>{M()})});const V=o=>o.map(i=>d(G,{key:i.key??i.href,href:i.href,title:i.title,target:i.target,targetOffset:i.targetOffset},{default:()=>{var c;return[n.direction==="vertical"&&((c=i.children)!=null&&c.length)?V(i.children):null]}})),et=k(()=>_(`${e}-wrapper`,{[`${e}-wrapper-horizontal`]:n.direction==="horizontal"})),nt=k(()=>_(e,{[`${e}-fixed`]:!n.affix})),rt=k(()=>_(`${e}-ink`,{[`${e}-ink-visible`]:!!r.value})),ot=k(()=>({maxHeight:n.offsetTop?`calc(100vh - ${n.offsetTop}px)`:"100vh"}));return()=>{var o,i;return d("div",{ref:S,class:et.value,style:ot.value},[d("div",{class:nt.value},[d("span",{class:rt.value,ref:f},null),(o=n.items)!=null&&o.length?V(n.items):(i=h.default)==null?void 0:i.call(h)])])}}}),v=mt;v.Link=G;const vt=b({__name:"AnchorAffix",setup(n){const a=[{href:"#section-a",title:"章节 A"},{href:"#section-b",title:"章节 B"},{href:"#section-c",title:"章节 C"}],h=r=>{console.log("当前锚点:",r)},e=(r,l)=>{console.log("点击锚点:",l)};return(r,l)=>(C(),ht(s(v),{affix:"","offset-top":80,items:a,onChange:h,onClick:e}))}}),xt=`<template>
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
`,kt={style:{display:"flex",gap:"24px"}},bt=b({__name:"AnchorBasic",setup(n){const a=[{href:"#part-1",title:"第一部分"},{href:"#part-2",title:"第二部分"},{href:"#part-3",title:"第三部分",children:[{href:"#part-3-1",title:"第三部分-1"},{href:"#part-3-2",title:"第三部分-2"}]}];return(h,e)=>(C(),I("div",kt,[e[0]||(e[0]=t("div",{style:{flex:"1"}},[t("div",{id:"part-1",style:{height:"200px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"第一部分"),t("p",null,"这是第一部分的内容。")]),t("div",{id:"part-2",style:{height:"200px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"第二部分"),t("p",null,"这是第二部分的内容。")]),t("div",{id:"part-3",style:{height:"200px",background:"#fff7e6",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"第三部分"),t("p",null,"这是第三部分的内容。")])],-1)),d(s(v),{items:a,"offset-top":64,style:{width:"160px"}})]))}}),At=`<template>
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
`,yt=b({__name:"AnchorHorizontal",setup(n){const a=[{href:"#h-part-1",title:"第一部分"},{href:"#h-part-2",title:"第二部分"},{href:"#h-part-3",title:"第三部分"}];return(h,e)=>(C(),I("div",null,[d(s(v),{direction:"horizontal",items:a,style:{"margin-bottom":"24px"}}),e[0]||(e[0]=t("div",{id:"h-part-1",style:{height:"160px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"第一部分")],-1)),e[1]||(e[1]=t("div",{id:"h-part-2",style:{height:"160px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"第二部分")],-1)),e[2]||(e[2]=t("div",{id:"h-part-3",style:{height:"160px",background:"#fff7e6",padding:"16px"}},[t("h3",null,"第三部分")],-1))]))}}),Lt=`<template>
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
`,wt={style:{display:"flex",gap:"24px"}},Ct=b({__name:"AnchorLink",setup(n){const a=v.Link;return(h,e)=>(C(),I("div",wt,[e[0]||(e[0]=t("div",{style:{flex:"1"}},[t("div",{id:"components-anchor-demo-basic",style:{height:"200px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"Basic demo"),t("p",null,"The simplest usage.")]),t("div",{id:"components-anchor-demo-static",style:{height:"200px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"Static Anchor"),t("p",null,"Do not change hash when scrolling.")]),t("div",{id:"API",style:{height:"200px",background:"#fff7e6",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"API"),t("p",null,"API documentation.")])],-1)),d(s(v),{"offset-top":64,style:{width:"200px"}},{default:m(()=>[d(s(a),{href:"#components-anchor-demo-basic",title:"Basic demo"}),d(s(a),{href:"#components-anchor-demo-static",title:"Static demo"}),d(s(a),{href:"#API",title:"API"},{default:m(()=>[d(s(a),{href:"#Anchor-Props",title:"Anchor Props"}),d(s(a),{href:"#Link-Props",title:"Link Props"})]),_:1})]),_:1})]))}}),Tt=`<template>
  <div style="display: flex; gap: 24px;">
    <div style="flex: 1;">
      <div id="components-anchor-demo-basic" style="height: 200px; background: #e6f4ff; padding: 16px; margin-bottom: 16px;">
        <h3>Basic demo</h3>
        <p>The simplest usage.</p>
      </div>
      <div id="components-anchor-demo-static" style="height: 200px; background: #f6ffed; padding: 16px; margin-bottom: 16px;">
        <h3>Static Anchor</h3>
        <p>Do not change hash when scrolling.</p>
      </div>
      <div id="API" style="height: 200px; background: #fff7e6; padding: 16px; margin-bottom: 16px;">
        <h3>API</h3>
        <p>API documentation.</p>
      </div>
    </div>
    <Anchor :offset-top="64" style="width: 200px;">
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
import { Anchor } from 'ant-design-hmfw'

const AnchorLink = Anchor.Link
<\/script>
`,St={style:{display:"flex",gap:"24px"}},$t=b({__name:"AnchorTargetOffset",setup(n){const a=v.Link;return(h,e)=>(C(),I("div",St,[e[0]||(e[0]=t("div",{style:{flex:"1"}},[t("div",{id:"target-1",style:{height:"200px",background:"#e6f4ff",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"Target 1"),t("p",null,"Content with custom target offset.")]),t("div",{id:"target-2",style:{height:"200px",background:"#f6ffed",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"Target 2"),t("p",null,"Content with different target offset.")]),t("div",{id:"target-3",style:{height:"200px",background:"#fff7e6",padding:"16px","margin-bottom":"16px"}},[t("h3",null,"Target 3"),t("p",null,"Content with default offset.")])],-1)),d(s(v),{"target-offset":100,style:{width:"200px"}},{default:m(()=>[d(s(a),{href:"#target-1",title:"Target 1 (offset 50)","target-offset":50}),d(s(a),{href:"#target-2",title:"Target 2 (offset 150)","target-offset":150}),d(s(a),{href:"#target-3",title:"Target 3 (default)"})]),_:1})]))}}),Pt=`<template>
  <div style="display: flex; gap: 24px;">
    <div style="flex: 1;">
      <div id="target-1" style="height: 200px; background: #e6f4ff; padding: 16px; margin-bottom: 16px;">
        <h3>Target 1</h3>
        <p>Content with custom target offset.</p>
      </div>
      <div id="target-2" style="height: 200px; background: #f6ffed; padding: 16px; margin-bottom: 16px;">
        <h3>Target 2</h3>
        <p>Content with different target offset.</p>
      </div>
      <div id="target-3" style="height: 200px; background: #fff7e6; padding: 16px; margin-bottom: 16px;">
        <h3>Target 3</h3>
        <p>Content with default offset.</p>
      </div>
    </div>
    <Anchor :target-offset="100" style="width: 200px;">
      <AnchorLink href="#target-1" title="Target 1 (offset 50)" :target-offset="50" />
      <AnchorLink href="#target-2" title="Target 2 (offset 150)" :target-offset="150" />
      <AnchorLink href="#target-3" title="Target 3 (default)" />
    </Anchor>
  </div>
</template>

<script setup lang="ts">
import { Anchor } from 'ant-design-hmfw'

const AnchorLink = Anchor.Link
<\/script>
`,Bt={class:"markdown-body"},Ot={__name:"anchor",setup(n,{expose:a}){return a({frontmatter:{}}),(e,r)=>{const l=ft("DemoBlock");return C(),I("div",Bt,[r[0]||(r[0]=t("h1",{id:"anchor-",tabindex:"-1"},"Anchor 锚点",-1)),r[1]||(r[1]=t("p",null,"用于跳转到页面指定位置。",-1)),r[2]||(r[2]=t("h2",{id:"",tabindex:"-1"},"何时使用",-1)),r[3]||(r[3]=t("ul",null,[t("li",null,"需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转时"),t("li",null,"需要固定在页面某个位置时")],-1)),r[4]||(r[4]=t("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),r[5]||(r[5]=t("h3",{id:"-2",tabindex:"-1"},"基础用法（垂直）",-1)),r[6]||(r[6]=t("p",null,"最简单的用法，垂直方向展示锚点列表。",-1)),d(l,{title:"基础用法（垂直）",source:s(At)},{default:m(()=>[d(bt)]),_:1},8,["source"]),r[7]||(r[7]=t("h3",{id:"-anchorlink",tabindex:"-1"},"使用 Anchor.Link",-1)),r[8]||(r[8]=t("p",null,[g("使用 "),t("code",null,"Anchor.Link"),g(" 组件作为子组件。")],-1)),d(l,{title:"使用 Anchor.Link",source:s(Tt)},{default:m(()=>[d(Ct)]),_:1},8,["source"]),r[9]||(r[9]=t("h3",{id:"-3",tabindex:"-1"},"水平锚点",-1)),r[10]||(r[10]=t("p",null,[g("通过 "),t("code",null,'direction="horizontal"'),g(" 设置水平方向锚点。")],-1)),d(l,{title:"水平锚点",source:s(Lt)},{default:m(()=>[d(yt)]),_:1},8,["source"]),r[11]||(r[11]=t("h3",{id:"-4",tabindex:"-1"},"自定义目标偏移",-1)),r[12]||(r[12]=t("p",null,[g("通过 "),t("code",null,"targetOffset"),g(" 设置全局偏移，或在 "),t("code",null,"Anchor.Link"),g(" 上设置单独偏移。")],-1)),d(l,{title:"自定义目标偏移",source:s(Pt)},{default:m(()=>[d($t)]),_:1},8,["source"]),r[13]||(r[13]=t("h3",{id:"-5",tabindex:"-1"},"固定锚点",-1)),r[14]||(r[14]=t("p",null,[g("通过 "),t("code",null,"affix"),g(" 属性让锚点固定在页面某个位置。")],-1)),d(l,{title:"固定锚点",source:s(xt)},{default:m(()=>[d(vt)]),_:1},8,["source"]),r[15]||(r[15]=pt('<h2 id="api" tabindex="-1">API</h2><h3 id="anchor-props" tabindex="-1">Anchor Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>数据化配置选项内容</td><td><code>AnchorLinkItem[]</code></td><td><code>[]</code></td></tr><tr><td>affix</td><td>固定模式</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>offsetTop</td><td>距离窗口顶部达到指定偏移量后触发</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>targetOffset</td><td>滚动偏移量，影响锚点高亮判断</td><td><code>number</code></td><td><code>offsetTop</code></td></tr><tr><td>direction</td><td>锚点方向</td><td><code>&#39;vertical&#39; | &#39;horizontal&#39;</code></td><td><code>&#39;vertical&#39;</code></td></tr><tr><td>bounds</td><td>锚点区域边界</td><td><code>number</code></td><td><code>5</code></td></tr><tr><td>replace</td><td>是否替换浏览器历史记录</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getCurrentAnchor</td><td>自定义高亮的锚点</td><td><code>(activeLink: string) =&gt; string</code></td><td>-</td></tr><tr><td>getContainer</td><td>指定滚动的容器</td><td><code>() =&gt; HTMLElement | Window</code></td><td><code>() =&gt; window</code></td></tr></tbody></table><h3 id="anchorlinkitem" tabindex="-1">AnchorLinkItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>href</td><td>锚点链接</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>文字内容</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>链接打开方式</td><td><code>string</code></td><td>-</td></tr><tr><td>targetOffset</td><td>该锚点的滚动偏移量</td><td><code>number</code></td><td>-</td></tr><tr><td>children</td><td>子节点</td><td><code>AnchorLinkItem[]</code></td><td>-</td></tr></tbody></table><h3 id="anchorlink-props" tabindex="-1">Anchor.Link Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>href</td><td>锚点链接</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>文字内容</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>链接打开方式</td><td><code>string</code></td><td>-</td></tr><tr><td>replace</td><td>是否替换浏览器历史记录</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>targetOffset</td><td>该锚点的滚动偏移量</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="anchor-events" tabindex="-1">Anchor Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>锚点改变时触发</td><td><code>(currentActiveLink: string) =&gt; void</code></td></tr><tr><td>click</td><td>点击锚点时触发</td><td><code>(e: MouseEvent, link: { title: string; href: string }) =&gt; void</code></td></tr></tbody></table>',9))])}}};export{Ot as default};
