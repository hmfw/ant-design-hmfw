import{B as pt}from"./Button-BJ4qjE3i.js";import{d as S,u as yt,r as P,k as xt,y as wt,m as O,c as e,F as V,a as u,n as St,o as w,q as _,w as i,f as t,e as r,b as E,z as ut,A as gt,_ as Ct,h as Nt,g as f,i as qt}from"./index-DZWA4HiS.js";import{c as k}from"./cls-S9IiI6wd.js";import{L as At}from"./LeftOutlined-D1RAhMdi.js";import{R as $t}from"./RightOutlined-DxQZ7HNk.js";import"./LoadingOutlined-_M72e6LV.js";const v=S({name:"Carousel",props:{autoplay:{type:[Boolean,Object],default:!1},autoplaySpeed:{type:Number,default:3e3},dots:{type:[Boolean,Object],default:!0},dotPosition:String,dotPlacement:String,effect:{type:String,default:"scrollx"},fade:Boolean,infinite:{type:Boolean,default:!0},speed:{type:Number,default:500},easing:{type:String,default:"ease"},initialSlide:{type:Number,default:0},arrows:{type:Boolean,default:!1},prevArrow:Object,nextArrow:Object,waitForAnimate:{type:Boolean,default:!1},adaptiveHeight:{type:Boolean,default:!1},rootClassName:String,classNames:Object,styles:Object},emits:["beforeChange","afterChange"],setup(n,{slots:g,emit:s,expose:h}){const a=yt("carousel"),l=P(n.initialSlide),b=P(!1),mt=P(),B=P(),D=P(void 0);let R=null,y=null;const L=u(()=>{var m;return(((m=g.default)==null?void 0:m.call(g))??[]).flatMap(d=>Array.isArray(d.children)?d.children:[d])}),c=u(()=>L.value.length),z=u(()=>{const o=n.dotPlacement??n.dotPosition??"bottom";return o==="left"?"start":o==="right"?"end":o}),j=u(()=>{const o=z.value;return o==="start"||o==="end"}),ft=u(()=>n.fade?"fade":n.effect),F=u(()=>ft.value==="fade"),kt=u(()=>!!n.dots),vt=u(()=>typeof n.dots=="object"&&n.dots.className?n.dots.className:""),ht=u(()=>!!n.autoplay),H=u(()=>!!(typeof n.autoplay=="object"&&n.autoplay.dotDuration));function T(){if(!n.adaptiveHeight||j.value||!B.value){D.value=void 0;return}St(()=>{if(!B.value)return;const m=B.value.querySelectorAll(`.${a}-slide`)[l.value];m&&(D.value=m.offsetHeight)})}function C(o,m=!1){if(c.value===0||!m&&n.waitForAnimate&&b.value)return;let d=o;n.infinite?d=(o%c.value+c.value)%c.value:d=Math.max(0,Math.min(o,c.value-1)),d!==l.value&&(s("beforeChange",l.value,d),m?(l.value=d,s("afterChange",d)):(y&&(clearTimeout(y),y=null),b.value=!0,l.value=d,y=setTimeout(()=>{b.value=!1,s("afterChange",d),y=null},n.speed)))}const M=()=>C(l.value-1),I=()=>C(l.value+1);function Y(){!ht.value||c.value<=1||(R=setInterval(()=>C(l.value+1),n.autoplaySpeed))}function G(){R&&(clearInterval(R),R=null),y&&(clearTimeout(y),y=null)}xt(()=>{if(c.value>0&&n.initialSlide>0){const o=n.infinite?n.initialSlide%c.value:Math.min(n.initialSlide,c.value-1);l.value=o}T(),Y()}),wt(G),O(()=>n.autoplay,o=>{o?Y():G()}),O(l,()=>{T()}),O(()=>n.adaptiveHeight,()=>{T()}),h({goTo:C,next:I,prev:M});const bt=u(()=>{const o=z.value;return o==="start"?"left":o==="end"?"right":o});return()=>{var d,U,X,J,K,Q,W,Z,tt,nt,at,st,et,ot,lt,dt,it,rt;if(c.value===0)return e("div",{class:k(a,n.rootClassName,(d=n.classNames)==null?void 0:d.root),style:(U=n.styles)==null?void 0:U.root},null);const o=`${n.speed/1e3}s`,m=H.value?{"--carousel-dot-duration":`${n.autoplaySpeed}ms`}:{};return e("div",{class:k(a,n.rootClassName,(X=n.classNames)==null?void 0:X.root,{[`${a}-vertical`]:j.value,[`${a}-fade`]:F.value}),style:{...m,...(J=n.styles)==null?void 0:J.root},role:"region","aria-roledescription":"carousel","aria-label":"Carousel"},[e("div",{ref:mt,class:k(`${a}-list`,(K=n.classNames)==null?void 0:K.list),style:{...n.adaptiveHeight&&D.value!==void 0?{height:`${D.value}px`,transition:b.value?`height ${o} ${n.easing}`:"none"}:{},...(Q=n.styles)==null?void 0:Q.list}},[e("div",{ref:B,class:k(`${a}-track`,(W=n.classNames)==null?void 0:W.track),style:{...F.value?{}:{transform:j.value?`translateY(-${l.value*100}%)`:`translateX(-${l.value*100}%)`,transition:b.value?`transform ${o} ${n.easing}`:"none"},...(Z=n.styles)==null?void 0:Z.track}},[L.value.map((ct,x)=>{var N,q,A,$;const p=x===l.value;return e("div",{key:x,class:k(`${a}-slide`,(N=n.classNames)==null?void 0:N.slide,{[`${a}-slide-active`]:p},p&&((q=n.classNames)==null?void 0:q.slideActive)),style:{...F.value?{opacity:p?1:0,transform:"translate3d(0, 0, 0)",transition:`opacity ${o} ${n.easing}`,position:p?"relative":"absolute",inset:p?"auto":"0",contentVisibility:"auto"}:{contentVisibility:"auto"},...(A=n.styles)==null?void 0:A.slide,...p&&(($=n.styles)==null?void 0:$.slideActive)},role:"group","aria-roledescription":"slide","aria-label":`${x+1} / ${c.value}`,"aria-hidden":!p},[ct])})])]),n.arrows&&c.value>1&&e(V,null,[n.prevArrow??e(pt,{class:k(`${a}-arrow`,`${a}-arrow-left`,(tt=n.classNames)==null?void 0:tt.arrow,(nt=n.classNames)==null?void 0:nt.arrowLeft),style:{...(at=n.styles)==null?void 0:at.arrow,...(st=n.styles)==null?void 0:st.arrowLeft},type:"text",icon:At,onClick:M,disabled:n.waitForAnimate&&b.value,"aria-label":"Previous slide"},null),n.nextArrow??e(pt,{class:k(`${a}-arrow`,`${a}-arrow-right`,(et=n.classNames)==null?void 0:et.arrow,(ot=n.classNames)==null?void 0:ot.arrowRight),style:{...(lt=n.styles)==null?void 0:lt.arrow,...(dt=n.styles)==null?void 0:dt.arrowRight},type:"text",icon:$t,onClick:I,disabled:n.waitForAnimate&&b.value,"aria-label":"Next slide"},null)]),kt.value&&c.value>1&&e("ul",{class:k(`${a}-dots`,`${a}-dots-${bt.value}`,vt.value,(it=n.classNames)==null?void 0:it.dots,{[`${a}-dots-progress`]:H.value,[`${a}-dots-disabled`]:n.waitForAnimate&&b.value}),style:(rt=n.styles)==null?void 0:rt.dots},[L.value.map((ct,x)=>{var N,q,A,$;const p=x===l.value;return e("li",{key:x,class:k((N=n.classNames)==null?void 0:N.dot,{[`${a}-dot-active`]:p},p&&((q=n.classNames)==null?void 0:q.dotActive)),style:{...(A=n.styles)==null?void 0:A.dot,...p&&(($=n.styles)==null?void 0:$.dotActive)},onClick:()=>C(x)},[e("button",{"aria-label":`Go to slide ${x+1}`},null)])})])])}}}),Pt=S({__name:"CarouselArrows",setup(n){return(g,s)=>(w(),_(r(v),{arrows:""},{default:i(()=>[...s[0]||(s[0]=[t("div",{class:"carousel-item",style:{background:"#364d79",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 1 ",-1),t("div",{class:"carousel-item",style:{background:"#7dbcea",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 2 ",-1),t("div",{class:"carousel-item",style:{background:"#00a0e9",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 3 ",-1),t("div",{class:"carousel-item",style:{background:"#1890ff",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 4 ",-1)])]),_:1}))}}),Bt=`<template>
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
import { Carousel } from '@hmfw/ant-design'
<\/script>
`,Dt=S({__name:"CarouselBasic",setup(n){return(g,s)=>(w(),_(r(v),{style:{height:"160px",background:"#364d79","border-radius":"4px",overflow:"hidden"}},{default:i(()=>[(w(),E(V,null,ut(4,h=>t("div",{key:h,style:{height:"160px",display:"flex","align-items":"center","justify-content":"center",color:"#fff","font-size":"24px"}},gt(h),1)),64))]),_:1}))}}),Rt=`<template>
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
import { Carousel } from '@hmfw/ant-design'
<\/script>
`,_t={style:{display:"flex","flex-direction":"column",gap:"24px"}},Et=S({__name:"CarouselClassNames",setup(n){return(g,s)=>(w(),E("div",_t,[t("div",null,[s[1]||(s[1]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器圆角与阴影：",-1)),e(r(v),{"class-names":{root:"custom-root"}},{default:i(()=>[...s[0]||(s[0]=[t("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}},[t("h3",null,"Slide 1")],-1),t("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"}},[t("h3",null,"Slide 2")],-1),t("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"}},[t("h3",null,"Slide 3")],-1)])]),_:1})]),t("div",null,[s[3]||(s[3]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义指示器：圆形 dots 与渐变色：",-1)),e(r(v),{"class-names":{dots:"custom-dots",dot:"custom-dot",dotActive:"custom-dot-active"}},{default:i(()=>[...s[2]||(s[2]=[t("div",{class:"demo-slide",style:{background:"linear-gradient(to right, #f857a6, #ff5858)"}},[t("h3",null,"Slide 1")],-1),t("div",{class:"demo-slide",style:{background:"linear-gradient(to right, #a8edea, #fed6e3)"}},[t("h3",null,"Slide 2")],-1),t("div",{class:"demo-slide",style:{background:"linear-gradient(to right, #ffecd2, #fcb69f)"}},[t("h3",null,"Slide 3")],-1)])]),_:1})]),t("div",null,[s[5]||(s[5]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义箭头：渐变背景与圆形：",-1)),e(r(v),{arrows:"","class-names":{arrow:"custom-arrow",arrowLeft:"custom-arrow-left",arrowRight:"custom-arrow-right"}},{default:i(()=>[...s[4]||(s[4]=[t("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}},[t("h3",null,"Slide 1")],-1),t("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)"}},[t("h3",null,"Slide 2")],-1),t("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #30cfd0 0%, #330867 100%)"}},[t("h3",null,"Slide 3")],-1)])]),_:1})]),t("div",null,[s[7]||(s[7]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义幻灯片缩放与激活态边框：",-1)),e(r(v),{"class-names":{list:"custom-list",slide:"custom-slide",slideActive:"custom-slide-active"}},{default:i(()=>[...s[6]||(s[6]=[t("div",{class:"demo-slide",style:{background:"linear-gradient(to right, #6a11cb, #2575fc)"}},[t("h3",null,"Slide 1")],-1),t("div",{class:"demo-slide",style:{background:"linear-gradient(to right, #ff6a00, #ee0979)"}},[t("h3",null,"Slide 2")],-1),t("div",{class:"demo-slide",style:{background:"linear-gradient(to right, #00c9ff, #92fe9d)"}},[t("h3",null,"Slide 3")],-1)])]),_:1})]),t("div",null,[s[9]||(s[9]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用 styles 内联样式控制：",-1)),e(r(v),{arrows:"",styles:{root:{borderRadius:"16px",overflow:"hidden"},dots:{bottom:"20px"},dot:{opacity:.8},arrow:{background:"rgba(255,255,255,0.9)",color:"#1677ff"}}},{default:i(()=>[...s[8]||(s[8]=[t("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}},[t("h3",null,"Slide 1")],-1),t("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"}},[t("h3",null,"Slide 2")],-1),t("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"}},[t("h3",null,"Slide 3")],-1)])]),_:1})])]))}}),Lt=Ct(Et,[["__scopeId","data-v-f007851c"]]),jt=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器圆角与阴影：</div>
      <Carousel :class-names="{ root: 'custom-root' }">
        <div class="demo-slide" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
          <h3>Slide 1</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
          <h3>Slide 2</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)">
          <h3>Slide 3</h3>
        </div>
      </Carousel>
    </div>

    <!-- 场景 2：自定义指示器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义指示器：圆形 dots 与渐变色：</div>
      <Carousel :class-names="{ dots: 'custom-dots', dot: 'custom-dot', dotActive: 'custom-dot-active' }">
        <div class="demo-slide" style="background: linear-gradient(to right, #f857a6, #ff5858)">
          <h3>Slide 1</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(to right, #a8edea, #fed6e3)">
          <h3>Slide 2</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(to right, #ffecd2, #fcb69f)">
          <h3>Slide 3</h3>
        </div>
      </Carousel>
    </div>

    <!-- 场景 3：自定义箭头样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义箭头：渐变背景与圆形：</div>
      <Carousel
        arrows
        :class-names="{
          arrow: 'custom-arrow',
          arrowLeft: 'custom-arrow-left',
          arrowRight: 'custom-arrow-right',
        }"
      >
        <div class="demo-slide" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
          <h3>Slide 1</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%)">
          <h3>Slide 2</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(135deg, #30cfd0 0%, #330867 100%)">
          <h3>Slide 3</h3>
        </div>
      </Carousel>
    </div>

    <!-- 场景 4：自定义幻灯片与激活状态 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义幻灯片缩放与激活态边框：</div>
      <Carousel
        :class-names="{
          list: 'custom-list',
          slide: 'custom-slide',
          slideActive: 'custom-slide-active',
        }"
      >
        <div class="demo-slide" style="background: linear-gradient(to right, #6a11cb, #2575fc)">
          <h3>Slide 1</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(to right, #ff6a00, #ee0979)">
          <h3>Slide 2</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(to right, #00c9ff, #92fe9d)">
          <h3>Slide 3</h3>
        </div>
      </Carousel>
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用 styles 内联样式控制：</div>
      <Carousel
        arrows
        :styles="{
          root: { borderRadius: '16px', overflow: 'hidden' },
          dots: { bottom: '20px' },
          dot: { opacity: 0.8 },
          arrow: { background: 'rgba(255,255,255,0.9)', color: '#1677ff' },
        }"
      >
        <div class="demo-slide" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
          <h3>Slide 1</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
          <h3>Slide 2</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)">
          <h3>Slide 3</h3>
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from '@hmfw/ant-design'
<\/script>

<style scoped>
.demo-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: white;
  font-size: 24px;
}

.demo-slide h3 {
  margin: 0;
}

/* 场景 1：自定义根容器 */
:deep(.custom-root) {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s;
}

:deep(.custom-root:hover) {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

/* 场景 2：自定义指示器 */
:deep(.custom-dots) {
  gap: 10px;
  bottom: 16px;
}

:deep(.custom-dot button) {
  width: 12px !important;
  height: 12px !important;
  border-radius: 50% !important;
  background: rgba(255, 255, 255, 0.4) !important;
  transition: all 0.3s !important;
}

:deep(.custom-dot:hover button) {
  background: rgba(255, 255, 255, 0.7) !important;
  transform: scale(1.2);
}

:deep(.custom-dot-active button) {
  width: 12px !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  transform: scale(1.4);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.5);
}

/* 场景 3：自定义箭头 */
:deep(.custom-arrow) {
  width: 48px !important;
  height: 48px !important;
  border-radius: 50% !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  opacity: 0.9 !important;
  transition: all 0.3s !important;
  font-size: 24px !important;
}

:deep(.custom-arrow:hover) {
  opacity: 1 !important;
  transform: translateY(-50%) scale(1.1) !important;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:deep(.custom-arrow-left) {
  left: 16px;
}

:deep(.custom-arrow-right) {
  right: 16px;
}

/* 场景 4：自定义幻灯片 */
:deep(.custom-list) {
  padding: 8px;
}

:deep(.custom-slide) {
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
  opacity: 0.7;
  transform: scale(0.95);
}

:deep(.custom-slide-active) {
  opacity: 1;
  transform: scale(1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}
</style>
`,Ft=S({__name:"CarouselFade",setup(n){return(g,s)=>(w(),_(r(v),{effect:"fade",style:{height:"160px",background:"#364d79","border-radius":"4px",overflow:"hidden"}},{default:i(()=>[(w(),E(V,null,ut(4,h=>t("div",{key:h,style:{height:"160px",display:"flex","align-items":"center","justify-content":"center",color:"#fff","font-size":"24px"}},gt(h),1)),64))]),_:1}))}}),Tt=`<template>
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
import { Carousel } from '@hmfw/ant-design'
<\/script>
`,Ot=S({__name:"CarouselProgress",setup(n){return(g,s)=>(w(),_(r(v),{autoplay:{dotDuration:!0},"autoplay-speed":2e3},{default:i(()=>[...s[0]||(s[0]=[t("div",{class:"carousel-item",style:{background:"#364d79",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 1 ",-1),t("div",{class:"carousel-item",style:{background:"#7dbcea",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 2 ",-1),t("div",{class:"carousel-item",style:{background:"#00a0e9",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 3 ",-1),t("div",{class:"carousel-item",style:{background:"#1890ff",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 4 ",-1)])]),_:1}))}}),Vt=`<template>
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
import { Carousel } from '@hmfw/ant-design'
<\/script>
`,zt={class:"markdown-body"},Xt={__name:"carousel",setup(n,{expose:g}){return g({frontmatter:{}}),(h,a)=>{const l=Nt("DemoBlock");return w(),E("div",zt,[a[0]||(a[0]=t("h1",{id:"carousel-走马灯",tabindex:"-1"},"Carousel 走马灯",-1)),a[1]||(a[1]=t("p",null,"旋转播放的幻灯片。",-1)),a[2]||(a[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),a[3]||(a[3]=t("ul",null,[t("li",null,"当有一组平级的内容，需要轮播展示时"),t("li",null,"常用于图片或卡片轮播")],-1)),a[4]||(a[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),a[5]||(a[5]=t("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),a[6]||(a[6]=t("p",null,"默认 scrollx 滚动效果，底部显示 dots。",-1)),e(l,{title:"基础用法",source:r(Rt)},{default:i(()=>[e(Dt)]),_:1},8,["source"]),a[7]||(a[7]=t("h3",{id:"渐显效果",tabindex:"-1"},"渐显效果",-1)),a[8]||(a[8]=t("p",null,"切换 effect 为 fade，使用渐显过渡。",-1)),e(l,{title:"渐显效果",source:r(Tt)},{default:i(()=>[e(Ft)]),_:1},8,["source"]),a[9]||(a[9]=t("h3",{id:"切换箭头",tabindex:"-1"},"切换箭头",-1)),a[10]||(a[10]=t("p",null,[f("设置 "),t("code",null,"arrows"),f(" 为 "),t("code",null,"true"),f(" 显示切换箭头。")],-1)),e(l,{title:"切换箭头",source:r(Bt)},{default:i(()=>[e(Pt)]),_:1},8,["source"]),a[11]||(a[11]=t("h3",{id:"自动播放进度条",tabindex:"-1"},"自动播放进度条",-1)),a[12]||(a[12]=t("p",null,[f("设置 "),t("code",null,"autoplay.dotDuration"),f(" 为 "),t("code",null,"true"),f("，指示点将显示进度条动画。")],-1)),e(l,{title:"自动播放进度条",source:r(Vt)},{default:i(()=>[e(Ot)]),_:1},8,["source"]),a[13]||(a[13]=t("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),a[14]||(a[14]=t("p",null,[f("通过 "),t("code",null,"classNames"),f(" / "),t("code",null,"styles"),f(" 对各子元素做细粒度样式控制。")],-1)),e(l,{title:"语义化 className 与 style",source:r(jt)},{default:i(()=>[e(Lt)]),_:1},8,["source"]),a[15]||(a[15]=qt(`<h2 id="api" tabindex="-1">API</h2><h3 id="carousel-props" tabindex="-1">Carousel Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>版本</th></tr></thead><tbody><tr><td>autoplay</td><td>是否自动切换，可指定 <code>autoplay.dotDuration</code> 显示进度条</td><td><code>boolean | { dotDuration?: boolean }</code></td><td><code>false</code></td><td>dotDuration: v0.2.0</td></tr><tr><td>autoplaySpeed</td><td>自动切换间隔（ms）</td><td><code>number</code></td><td><code>3000</code></td><td>-</td></tr><tr><td>arrows</td><td>是否显示切换箭头</td><td><code>boolean</code></td><td><code>false</code></td><td>v0.2.0</td></tr><tr><td>dots</td><td>是否显示指示点，可指定 <code>className</code> 自定义 class</td><td><code>boolean | { className?: string }</code></td><td><code>true</code></td><td>对象形式: v0.2.0</td></tr><tr><td>dotPosition</td><td>指示点位置（已废弃，推荐使用 <code>dotPlacement</code>）</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;left&#39; | &#39;right&#39;</code></td><td><code>&#39;bottom&#39;</code></td><td>-</td></tr><tr><td>dotPlacement</td><td>指示点位置，<code>start</code>/<code>end</code> 替代 <code>left</code>/<code>right</code>，支持 RTL</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;bottom&#39;</code></td><td>v0.2.0</td></tr><tr><td>effect</td><td>切换效果</td><td><code>&#39;scrollx&#39; | &#39;fade&#39;</code></td><td><code>&#39;scrollx&#39;</code></td><td>-</td></tr><tr><td>fade</td><td>是否使用渐显过渡（优先级高于 <code>effect</code>）</td><td><code>boolean</code></td><td>-</td><td>v0.2.0</td></tr><tr><td>infinite</td><td>是否无限循环</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td></tr><tr><td>speed</td><td>动画时长（ms）</td><td><code>number</code></td><td><code>500</code></td><td>v0.2.0</td></tr><tr><td>easing</td><td>过渡缓动函数</td><td><code>string</code></td><td><code>&#39;ease&#39;</code></td><td>v0.2.0</td></tr><tr><td>initialSlide</td><td>初始 slide 索引</td><td><code>number</code></td><td><code>0</code></td><td>v0.2.0</td></tr><tr><td>waitForAnimate</td><td>切换时是否等待动画完成</td><td><code>boolean</code></td><td><code>false</code></td><td>v0.2.0</td></tr><tr><td>prevArrow</td><td>自定义前进箭头</td><td><code>VNode</code></td><td>-</td><td>v0.2.0</td></tr><tr><td>nextArrow</td><td>自定义后退箭头</td><td><code>VNode</code></td><td>-</td><td>v0.2.0</td></tr><tr><td>rootClassName</td><td>根元素 class</td><td><code>string</code></td><td>-</td><td>v0.2.0</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CarouselClassNames</code></td><td>-</td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CarouselStyles</code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="carousel-events" tabindex="-1">Carousel Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>beforeChange</td><td>切换前回调</td><td><code>(from: number, to: number) =&gt; void</code></td></tr><tr><td>afterChange</td><td>切换后回调</td><td><code>(current: number) =&gt; void</code></td></tr></tbody></table><h3 id="carousel-ref-方法" tabindex="-1">Carousel Ref 方法</h3><p>通过 <code>ref</code> 可调用组件方法：</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>goTo</td><td>跳转到指定索引</td><td><code>(slideNumber: number, dontAnimate?: boolean) =&gt; void</code></td></tr><tr><td>next</td><td>切换到下一张</td><td><code>() =&gt; void</code></td></tr><tr><td>prev</td><td>切换到上一张</td><td><code>() =&gt; void</code></td></tr></tbody></table><h2 id="可访问性" tabindex="-1">可访问性</h2><ul><li>容器具有 <code>role=&quot;region&quot;</code> 和 <code>aria-roledescription=&quot;carousel&quot;</code></li><li>每个 slide 具有 <code>role=&quot;group&quot;</code> 和 <code>aria-label=&quot;N / 总数&quot;</code></li><li>箭头按钮具有 <code>aria-label=&quot;Previous/Next slide&quot;</code></li><li>指示点按钮具有 <code>aria-label=&quot;Go to slide N&quot;</code></li></ul><h2 id="注意" tabindex="-1">注意</h2><ul><li>当前实现为轻量级原生版本，不依赖 react-slick</li><li>不支持高级特性：拖拽滑动、响应式断点、多列轮播、居中模式、懒加载等</li><li>需要这些高级能力时，建议直接集成第三方轮播库</li></ul><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对走马灯的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">CarouselClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根元素</span>
  list<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 可视区域容器</span>
  track<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 滑动轨道</span>
  slide<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个幻灯片</span>
  slideActive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 当前激活的幻灯片</span>
  arrow<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 箭头按钮（左右共用）</span>
  arrowLeft<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 左箭头</span>
  arrowRight<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 右箭头</span>
  dots<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 指示器容器</span>
  dot<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个指示器</span>
  dotActive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 当前激活的指示器</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CarouselStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  list<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  track<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  slide<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  slideActive<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  arrow<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  arrowLeft<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  arrowRight<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  dots<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  dot<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  dotActive<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-carousel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-carousel-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.list / styles.list 应用于此 --&gt;</span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-carousel-track<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.track / styles.track 应用于此 --&gt;</span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-carousel-slide<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.slide / styles.slide 应用于此 --&gt;</span>
        <span class="token comment">&lt;!-- 幻灯片内容 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-carousel-slide hmfw-carousel-slide-active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.slide + classNames.slideActive 叠加应用 --&gt;</span>
        <span class="token comment">&lt;!-- ↑ styles.slide + styles.slideActive 合并应用 --&gt;</span>
        <span class="token comment">&lt;!-- 当前激活的幻灯片内容 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 箭头（当 arrows=true 时） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-carousel-arrow hmfw-carousel-arrow-left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.arrow + classNames.arrowLeft 叠加应用 --&gt;</span>
    <span class="token comment">&lt;!-- ↑ styles.arrow + styles.arrowLeft 合并应用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-carousel-arrow hmfw-carousel-arrow-right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.arrow + classNames.arrowRight 叠加应用 --&gt;</span>
    <span class="token comment">&lt;!-- ↑ styles.arrow + styles.arrowRight 合并应用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 指示器容器 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-carousel-dots<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.dots / styles.dots 应用于此 --&gt;</span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-carousel-dot<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.dot / styles.dot 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-carousel-dot hmfw-carousel-dot-active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.dot + classNames.dotActive 叠加应用 --&gt;</span>
      <span class="token comment">&lt;!-- ↑ styles.dot + styles.dotActive 合并应用 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义指示器样式 --&gt;
  &lt;Carousel :class-names=&quot;{ dots: &#39;my-dots&#39;, dotActive: &#39;my-active-dot&#39; }&quot;&gt;
    &lt;div&gt;Slide 1&lt;/div&gt;
    &lt;div&gt;Slide 2&lt;/div&gt;
    &lt;div&gt;Slide 3&lt;/div&gt;
  &lt;/Carousel&gt;

  &lt;!-- 自定义箭头样式 --&gt;
  &lt;Carousel
    arrows
    :class-names=&quot;{
      arrow: &#39;my-arrow&#39;,
      arrowLeft: &#39;my-arrow-left&#39;,
      arrowRight: &#39;my-arrow-right&#39;,
    }&quot;
  &gt;
    &lt;div&gt;Slide 1&lt;/div&gt;
    &lt;div&gt;Slide 2&lt;/div&gt;
  &lt;/Carousel&gt;

  &lt;!-- 自定义幻灯片与激活态 --&gt;
  &lt;Carousel
    :class-names=&quot;{
      slide: &#39;my-slide&#39;,
      slideActive: &#39;my-active-slide&#39;,
    }&quot;
  &gt;
    &lt;div&gt;Slide 1&lt;/div&gt;
    &lt;div&gt;Slide 2&lt;/div&gt;
  &lt;/Carousel&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-dots) {
  gap: 12px;
  bottom: 20px;
}

:deep(.my-active-dot button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  border-radius: 50%;
  transform: scale(1.3);
}

:deep(.my-arrow) {
  border-radius: 50% !important;
  width: 48px !important;
  height: 48px !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
}

:deep(.my-arrow:hover) {
  transform: translateY(-50%) scale(1.1) !important;
}

:deep(.my-slide) {
  transition: all 0.3s;
  opacity: 0.7;
}

:deep(.my-active-slide) {
  opacity: 1;
  transform: scale(1.05);
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制根容器 --&gt;
  &lt;Carousel
    :styles=&quot;{
      root: { borderRadius: &#39;16px&#39;, overflow: &#39;hidden&#39; },
    }&quot;
  &gt;
    &lt;div&gt;Slide 1&lt;/div&gt;
    &lt;div&gt;Slide 2&lt;/div&gt;
  &lt;/Carousel&gt;

  &lt;!-- 自定义指示器位置与样式 --&gt;
  &lt;Carousel
    :styles=&quot;{
      dots: { bottom: &#39;24px&#39; },
      dot: { opacity: 0.8 },
      dotActive: { transform: &#39;scale(1.5)&#39; },
    }&quot;
  &gt;
    &lt;div&gt;Slide 1&lt;/div&gt;
    &lt;div&gt;Slide 2&lt;/div&gt;
  &lt;/Carousel&gt;

  &lt;!-- 组合使用多个节点样式 --&gt;
  &lt;Carousel
    arrows
    :styles=&quot;{
      root: { boxShadow: &#39;0 4px 12px rgba(0,0,0,0.15)&#39; },
      arrow: { background: &#39;rgba(255,255,255,0.9)&#39;, color: &#39;#1677ff&#39; },
      slide: { padding: &#39;8px&#39; },
    }&quot;
  &gt;
    &lt;div&gt;Slide 1&lt;/div&gt;
    &lt;div&gt;Slide 2&lt;/div&gt;
  &lt;/Carousel&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>slideActive</code> / <code>dotActive</code> / <code>arrowLeft</code> / <code>arrowRight</code> 会与对应的基础 className（<code>slide</code> / <code>dot</code> / <code>arrow</code>）<strong>叠加</strong>应用</li><li><code>styles.slideActive</code> / <code>styles.dotActive</code> 会与 <code>styles.slide</code> / <code>styles.dot</code> <strong>合并</strong>，激活态样式优先</li><li>箭头按钮基于 Button 组件实现，<code>classNames.arrow</code> 会应用到 Button 的根节点</li><li>指示器按钮的样式通过 <code>classNames.dot</code> 应用到 <code>&lt;li&gt;</code> 元素，实际按钮在其内部</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Carousel 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。</p>`,29))])}}};export{Xt as default};
