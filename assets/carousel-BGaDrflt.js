import{B as I}from"./Button-DaEKIrtr.js";import{n as k,M as K,D as S,w as W,v as Z,P as j,m as a,F,e as u,s as tt,z as b,h as A,Q as m,g as d,J as p,j as T,E as R,I as G,G as et,l as y,k as dt}from"./index-bv5A37HL.js";import{c as x}from"./cls-S9IiI6wd.js";import{S as ot,a7 as lt}from"./icons-DrnBibzR.js";import"./Icon-K3gH4Ffy.js";const _=k({name:"Carousel",props:{autoplay:{type:[Boolean,Object],default:!1},autoplaySpeed:{type:Number,default:3e3},dots:{type:[Boolean,Object],default:!0},dotPosition:String,dotPlacement:String,effect:{type:String,default:"scrollx"},fade:Boolean,infinite:{type:Boolean,default:!0},speed:{type:Number,default:500},easing:{type:String,default:"ease"},initialSlide:{type:Number,default:0},arrows:{type:Boolean,default:!1},prevArrow:Object,nextArrow:Object,waitForAnimate:{type:Boolean,default:!1},adaptiveHeight:{type:Boolean,default:!1},rootClassName:String},emits:["beforeChange","afterChange"],setup(e,{slots:f,emit:s,expose:v}){const t=K("carousel"),o=S(e.initialSlide),h=S(!1),L=S(),w=S(),$=S(void 0);let N=null,g=null;const B=u(()=>{var c;return(((c=f.default)==null?void 0:c.call(f))??[]).flatMap(n=>Array.isArray(n.children)?n.children:[n])}),i=u(()=>B.value.length),V=u(()=>{const l=e.dotPlacement??e.dotPosition??"bottom";return l==="left"?"start":l==="right"?"end":l}),P=u(()=>{const l=V.value;return l==="start"||l==="end"}),J=u(()=>e.fade?"fade":e.effect),D=u(()=>J.value==="fade"),Q=u(()=>!!e.dots),U=u(()=>typeof e.dots=="object"&&e.dots.className?e.dots.className:""),X=u(()=>!!e.autoplay),H=u(()=>!!(typeof e.autoplay=="object"&&e.autoplay.dotDuration));function q(){if(!e.adaptiveHeight||P.value||!w.value){$.value=void 0;return}tt(()=>{if(!w.value)return;const c=w.value.querySelectorAll(`.${t}-slide`)[o.value];c&&($.value=c.offsetHeight)})}function C(l,c=!1){if(i.value===0||!c&&e.waitForAnimate&&h.value)return;let n=l;e.infinite?n=(l%i.value+i.value)%i.value:n=Math.max(0,Math.min(l,i.value-1)),n!==o.value&&(s("beforeChange",o.value,n),c?(o.value=n,s("afterChange",n)):(g&&(clearTimeout(g),g=null),h.value=!0,o.value=n,g=setTimeout(()=>{h.value=!1,s("afterChange",n),g=null},e.speed)))}const M=()=>C(o.value-1),O=()=>C(o.value+1);function z(){!X.value||i.value<=1||(N=setInterval(()=>C(o.value+1),e.autoplaySpeed))}function E(){N&&(clearInterval(N),N=null),g&&(clearTimeout(g),g=null)}W(()=>{if(i.value>0&&e.initialSlide>0){const l=e.infinite?e.initialSlide%i.value:Math.min(e.initialSlide,i.value-1);o.value=l}q(),z()}),Z(E),j(()=>e.autoplay,l=>{l?z():E()}),j(o,()=>{q()}),j(()=>e.adaptiveHeight,()=>{q()}),v({goTo:C,next:O,prev:M});const Y=u(()=>{const l=V.value;return l==="start"?"left":l==="end"?"right":l});return()=>{if(i.value===0)return a("div",{class:x(t,e.rootClassName)},null);const l=`${e.speed/1e3}s`,c=H.value?{"--carousel-dot-duration":`${e.autoplaySpeed}ms`}:{};return a("div",{class:x(t,e.rootClassName,{[`${t}-vertical`]:P.value,[`${t}-fade`]:D.value}),style:c,role:"region","aria-roledescription":"carousel","aria-label":"Carousel"},[a("div",{ref:L,class:`${t}-list`,style:e.adaptiveHeight&&$.value!==void 0?{height:`${$.value}px`,transition:h.value?`height ${l} ${e.easing}`:"none"}:{}},[a("div",{ref:w,class:`${t}-track`,style:D.value?{}:{transform:P.value?`translateY(-${o.value*100}%)`:`translateX(-${o.value*100}%)`,transition:h.value?`transform ${l} ${e.easing}`:"none"}},[B.value.map((n,r)=>a("div",{key:r,class:x(`${t}-slide`,{[`${t}-slide-active`]:r===o.value}),style:D.value?{opacity:r===o.value?1:0,transform:"translate3d(0, 0, 0)",transition:`opacity ${l} ${e.easing}`,position:r===o.value?"relative":"absolute",inset:r===o.value?"auto":"0",contentVisibility:(r===o.value,"auto")}:{contentVisibility:(r===o.value,"auto")},role:"group","aria-roledescription":"slide","aria-label":`${r+1} / ${i.value}`,"aria-hidden":r!==o.value},[n]))])]),e.arrows&&i.value>1&&a(F,null,[e.prevArrow??a(I,{class:x(`${t}-arrow`,`${t}-arrow-left`),type:"text",icon:ot,onClick:M,disabled:e.waitForAnimate&&h.value,"aria-label":"Previous slide"},null),e.nextArrow??a(I,{class:x(`${t}-arrow`,`${t}-arrow-right`),type:"text",icon:lt,onClick:O,disabled:e.waitForAnimate&&h.value,"aria-label":"Next slide"},null)]),Q.value&&i.value>1&&a("ul",{class:x(`${t}-dots`,`${t}-dots-${Y.value}`,U.value,{[`${t}-dots-progress`]:H.value,[`${t}-dots-disabled`]:e.waitForAnimate&&h.value})},[B.value.map((n,r)=>a("li",{key:r,class:x({[`${t}-dot-active`]:r===o.value}),onClick:()=>C(r)},[a("button",{"aria-label":`Go to slide ${r+1}`},null)]))])])}}}),at=k({__name:"CarouselArrows",setup(e){return(f,s)=>(b(),A(p(_),{arrows:""},{default:m(()=>[...s[0]||(s[0]=[d("div",{class:"carousel-item",style:{background:"#364d79",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 1 ",-1),d("div",{class:"carousel-item",style:{background:"#7dbcea",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 2 ",-1),d("div",{class:"carousel-item",style:{background:"#00a0e9",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 3 ",-1),d("div",{class:"carousel-item",style:{background:"#1890ff",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 4 ",-1)])]),_:1}))}}),nt=`<template>
  <Carousel arrows>
    <div
      class="carousel-item"
      style="background: #364d79; color: #fff; height: 160px; line-height: 160px; text-align: center"
    >
      Slide 1
    </div>
    <div
      class="carousel-item"
      style="background: #7dbcea; color: #fff; height: 160px; line-height: 160px; text-align: center"
    >
      Slide 2
    </div>
    <div
      class="carousel-item"
      style="background: #00a0e9; color: #fff; height: 160px; line-height: 160px; text-align: center"
    >
      Slide 3
    </div>
    <div
      class="carousel-item"
      style="background: #1890ff; color: #fff; height: 160px; line-height: 160px; text-align: center"
    >
      Slide 4
    </div>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel } from '../../../components'
<\/script>
`,rt=k({__name:"CarouselBasic",setup(e){return(f,s)=>(b(),A(p(_),{style:{height:"160px",background:"#364d79","border-radius":"4px",overflow:"hidden"}},{default:m(()=>[(b(),T(F,null,R(4,v=>d("div",{key:v,style:{height:"160px",display:"flex","align-items":"center","justify-content":"center",color:"#fff","font-size":"24px"}},G(v),1)),64))]),_:1}))}}),it=`<template>
  <Carousel style="height: 160px; background: #364d79; border-radius: 4px; overflow: hidden">
    <div
      v-for="n in 4"
      :key="n"
      style="height: 160px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 24px"
    >
      {{ n }}
    </div>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel } from 'ant-design-hmfw'
<\/script>
`,st=k({__name:"CarouselFade",setup(e){return(f,s)=>(b(),A(p(_),{effect:"fade",style:{height:"160px",background:"#364d79","border-radius":"4px",overflow:"hidden"}},{default:m(()=>[(b(),T(F,null,R(4,v=>d("div",{key:v,style:{height:"160px",display:"flex","align-items":"center","justify-content":"center",color:"#fff","font-size":"24px"}},G(v),1)),64))]),_:1}))}}),ut=`<template>
  <Carousel effect="fade" style="height: 160px; background: #364d79; border-radius: 4px; overflow: hidden">
    <div
      v-for="n in 4"
      :key="n"
      style="height: 160px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 24px"
    >
      {{ n }}
    </div>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel } from 'ant-design-hmfw'
<\/script>
`,ct=k({__name:"CarouselProgress",setup(e){return(f,s)=>(b(),A(p(_),{autoplay:{dotDuration:!0},"autoplay-speed":2e3},{default:m(()=>[...s[0]||(s[0]=[d("div",{class:"carousel-item",style:{background:"#364d79",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 1 ",-1),d("div",{class:"carousel-item",style:{background:"#7dbcea",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 2 ",-1),d("div",{class:"carousel-item",style:{background:"#00a0e9",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 3 ",-1),d("div",{class:"carousel-item",style:{background:"#1890ff",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 4 ",-1)])]),_:1}))}}),ft=`<template>
  <Carousel :autoplay="{ dotDuration: true }" :autoplay-speed="2000">
    <div
      class="carousel-item"
      style="background: #364d79; color: #fff; height: 160px; line-height: 160px; text-align: center"
    >
      Slide 1
    </div>
    <div
      class="carousel-item"
      style="background: #7dbcea; color: #fff; height: 160px; line-height: 160px; text-align: center"
    >
      Slide 2
    </div>
    <div
      class="carousel-item"
      style="background: #00a0e9; color: #fff; height: 160px; line-height: 160px; text-align: center"
    >
      Slide 3
    </div>
    <div
      class="carousel-item"
      style="background: #1890ff; color: #fff; height: 160px; line-height: 160px; text-align: center"
    >
      Slide 4
    </div>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel } from '../../../components'
<\/script>
`,vt={class:"markdown-body"},bt={__name:"carousel",setup(e,{expose:f}){return f({frontmatter:{}}),(v,t)=>{const o=et("DemoBlock");return b(),T("div",vt,[t[0]||(t[0]=d("h1",{id:"carousel-",tabindex:"-1"},"Carousel 走马灯",-1)),t[1]||(t[1]=d("p",null,"旋转播放的幻灯片。",-1)),t[2]||(t[2]=d("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=d("ul",null,[d("li",null,"当有一组平级的内容，需要轮播展示时"),d("li",null,"常用于图片或卡片轮播")],-1)),t[4]||(t[4]=d("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=d("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=d("p",null,"默认 scrollx 滚动效果，底部显示 dots。",-1)),a(o,{title:"基础用法",source:p(it)},{default:m(()=>[a(rt)]),_:1},8,["source"]),t[7]||(t[7]=d("h3",{id:"-3",tabindex:"-1"},"渐显效果",-1)),t[8]||(t[8]=d("p",null,"切换 effect 为 fade，使用渐显过渡。",-1)),a(o,{title:"渐显效果",source:p(ut)},{default:m(()=>[a(st)]),_:1},8,["source"]),t[9]||(t[9]=d("h3",{id:"-4",tabindex:"-1"},"切换箭头",-1)),t[10]||(t[10]=d("p",null,[y("设置 "),d("code",null,"arrows"),y(" 为 "),d("code",null,"true"),y(" 显示切换箭头。")],-1)),a(o,{title:"切换箭头",source:p(nt)},{default:m(()=>[a(at)]),_:1},8,["source"]),t[11]||(t[11]=d("h3",{id:"-5",tabindex:"-1"},"自动播放进度条",-1)),t[12]||(t[12]=d("p",null,[y("设置 "),d("code",null,"autoplay.dotDuration"),y(" 为 "),d("code",null,"true"),y("，指示点将显示进度条动画。")],-1)),a(o,{title:"自动播放进度条",source:p(ft)},{default:m(()=>[a(ct)]),_:1},8,["source"]),t[13]||(t[13]=dt('<h2 id="api" tabindex="-1">API</h2><h3 id="carousel-props" tabindex="-1">Carousel Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>版本</th></tr></thead><tbody><tr><td>autoplay</td><td>是否自动切换，可指定 <code>autoplay.dotDuration</code> 显示进度条</td><td><code>boolean | { dotDuration?: boolean }</code></td><td><code>false</code></td><td>dotDuration: v0.2.0</td></tr><tr><td>autoplaySpeed</td><td>自动切换间隔（ms）</td><td><code>number</code></td><td><code>3000</code></td><td>-</td></tr><tr><td>arrows</td><td>是否显示切换箭头</td><td><code>boolean</code></td><td><code>false</code></td><td>v0.2.0</td></tr><tr><td>dots</td><td>是否显示指示点，可指定 <code>className</code> 自定义 class</td><td><code>boolean | { className?: string }</code></td><td><code>true</code></td><td>对象形式: v0.2.0</td></tr><tr><td>dotPosition</td><td>指示点位置（已废弃，推荐使用 <code>dotPlacement</code>）</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;left&#39; | &#39;right&#39;</code></td><td><code>&#39;bottom&#39;</code></td><td>-</td></tr><tr><td>dotPlacement</td><td>指示点位置，<code>start</code>/<code>end</code> 替代 <code>left</code>/<code>right</code>，支持 RTL</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;bottom&#39;</code></td><td>v0.2.0</td></tr><tr><td>effect</td><td>切换效果</td><td><code>&#39;scrollx&#39; | &#39;fade&#39;</code></td><td><code>&#39;scrollx&#39;</code></td><td>-</td></tr><tr><td>fade</td><td>是否使用渐显过渡（优先级高于 <code>effect</code>）</td><td><code>boolean</code></td><td>-</td><td>v0.2.0</td></tr><tr><td>infinite</td><td>是否无限循环</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td></tr><tr><td>speed</td><td>动画时长（ms）</td><td><code>number</code></td><td><code>500</code></td><td>v0.2.0</td></tr><tr><td>easing</td><td>过渡缓动函数</td><td><code>string</code></td><td><code>&#39;ease&#39;</code></td><td>v0.2.0</td></tr><tr><td>initialSlide</td><td>初始 slide 索引</td><td><code>number</code></td><td><code>0</code></td><td>v0.2.0</td></tr><tr><td>waitForAnimate</td><td>切换时是否等待动画完成</td><td><code>boolean</code></td><td><code>false</code></td><td>v0.2.0</td></tr><tr><td>prevArrow</td><td>自定义前进箭头</td><td><code>VNode</code></td><td>-</td><td>v0.2.0</td></tr><tr><td>nextArrow</td><td>自定义后退箭头</td><td><code>VNode</code></td><td>-</td><td>v0.2.0</td></tr><tr><td>rootClassName</td><td>根元素 class</td><td><code>string</code></td><td>-</td><td>v0.2.0</td></tr></tbody></table><h3 id="carousel-events" tabindex="-1">Carousel Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>beforeChange</td><td>切换前回调</td><td><code>(from: number, to: number) =&gt; void</code></td></tr><tr><td>afterChange</td><td>切换后回调</td><td><code>(current: number) =&gt; void</code></td></tr></tbody></table><h3 id="carousel-ref-" tabindex="-1">Carousel Ref 方法</h3><p>通过 <code>ref</code> 可调用组件方法：</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>goTo</td><td>跳转到指定索引</td><td><code>(slideNumber: number, dontAnimate?: boolean) =&gt; void</code></td></tr><tr><td>next</td><td>切换到下一张</td><td><code>() =&gt; void</code></td></tr><tr><td>prev</td><td>切换到上一张</td><td><code>() =&gt; void</code></td></tr></tbody></table><h2 id="-6" tabindex="-1">可访问性</h2><ul><li>容器具有 <code>role=&quot;region&quot;</code> 和 <code>aria-roledescription=&quot;carousel&quot;</code></li><li>每个 slide 具有 <code>role=&quot;group&quot;</code> 和 <code>aria-label=&quot;N / 总数&quot;</code></li><li>箭头按钮具有 <code>aria-label=&quot;Previous/Next slide&quot;</code></li><li>指示点按钮具有 <code>aria-label=&quot;Go to slide N&quot;</code></li></ul><h2 id="-7" tabindex="-1">注意</h2><ul><li>当前实现为轻量级原生版本，不依赖 react-slick</li><li>不支持高级特性：拖拽滑动、响应式断点、多列轮播、居中模式、懒加载等</li><li>需要这些高级能力时，建议直接集成第三方轮播库</li></ul>',12))])}}};export{bt as default};
