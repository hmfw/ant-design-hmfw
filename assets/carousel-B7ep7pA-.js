import{B as wn}from"./Button-D7tvIoj2.js";import{d as _,u as Mn,r as E,k as Dn,y as Rn,m as U,c as e,F as b,a as m,n as Sn,o as u,q as O,w as c,f as n,e as d,b as f,z as w,A as S,_ as V,h as En,g as k,i as zn}from"./index-cgVI-orz.js";import{c as $}from"./cls-S9IiI6wd.js";import{L as In}from"./LeftOutlined-Bpw_AXza.js";import{R as Ln}from"./RightOutlined-CAi0GUia.js";import"./LoadingOutlined-BnULcwLn.js";const g=_({name:"Carousel",props:{autoplay:{type:[Boolean,Object],default:!1},autoplaySpeed:{type:Number,default:3e3},dots:{type:[Boolean,Object],default:!0},dotPosition:String,dotPlacement:String,effect:{type:String,default:"scrollx"},fade:Boolean,infinite:{type:Boolean,default:!0},speed:{type:Number,default:500},easing:{type:String,default:"ease"},initialSlide:{type:Number,default:0},arrows:{type:Boolean,default:!1},prevArrow:Object,nextArrow:Object,waitForAnimate:{type:Boolean,default:!1},adaptiveHeight:{type:Boolean,default:!1},slidesToShow:{type:Number,default:1},slidesToScroll:{type:Number,default:1},centerMode:{type:Boolean,default:!1},centerPadding:{type:String,default:"50px"},rootClassName:String,classNames:Object,styles:Object},emits:["beforeChange","afterChange"],setup(s,{slots:h,emit:a,expose:o}){const t=Mn("carousel"),p=E(s.initialSlide),N=E(!1),Cn=E(),z=E(),I=E(void 0);let L=null,q=null;const T=m(()=>{var v;return(((v=h.default)==null?void 0:v.call(h))??[]).flatMap(r=>Array.isArray(r.children)?r.children:[r])}),l=m(()=>T.value.length),Nn=m(()=>{if(!s.infinite||l.value===0||x.value)return T.value;const i=T.value.slice(0),v=T.value.slice(0);return[...i,...T.value,...v]}),W=m(()=>!s.infinite||x.value?p.value:p.value+l.value),j=m(()=>100/s.slidesToShow),X=m(()=>{if(l.value===0)return 0;const i=Math.max(0,l.value-s.slidesToShow);return Math.floor(i/s.slidesToScroll)+1}),H=m(()=>Math.floor(p.value/s.slidesToScroll)),J=m(()=>{const i=s.dotPlacement??s.dotPosition??"bottom";return i==="left"?"start":i==="right"?"end":i}),Y=m(()=>{const i=J.value;return i==="start"||i==="end"}),qn=m(()=>s.slidesToShow>1?"scrollx":s.fade?"fade":s.effect),x=m(()=>qn.value==="fade"),An=m(()=>!!s.dots),$n=m(()=>typeof s.dots=="object"&&s.dots.className?s.dots.className:""),_n=m(()=>!!s.autoplay),K=m(()=>!!(typeof s.autoplay=="object"&&s.autoplay.dotDuration));function G(){if(!s.adaptiveHeight||Y.value||!z.value){I.value=void 0;return}Sn(()=>{if(!z.value)return;const v=z.value.querySelectorAll(`.${t}-slide`)[p.value];v&&(I.value=v.offsetHeight)})}function B(i,v=!1){if(l.value===0||!v&&s.waitForAnimate&&N.value)return;let r=i;if(s.infinite)x.value&&(r=(i%l.value+l.value)%l.value);else{const P=Math.max(0,l.value-s.slidesToShow);r=Math.max(0,Math.min(i,P))}r!==p.value&&(a("beforeChange",p.value,r),v?(s.infinite&&!x.value||s.infinite&&x.value?p.value=(r%l.value+l.value)%l.value:p.value=r,a("afterChange",p.value)):(q&&(clearTimeout(q),q=null),N.value=!0,p.value=r,q=setTimeout(()=>{if(s.infinite&&!x.value){const P=(r%l.value+l.value)%l.value;if(P!==r){N.value=!1,Sn(()=>{p.value=P,a("afterChange",p.value)}),q=null;return}}s.infinite&&x.value&&(p.value=(r%l.value+l.value)%l.value),N.value=!1,a("afterChange",p.value),q=null},s.speed)))}function F(i,v=!1){const r=i*s.slidesToScroll;B(r,v)}const Pn=()=>B(p.value-s.slidesToScroll),Tn=()=>B(p.value+s.slidesToScroll),Q=()=>F(H.value-1),Z=()=>F(H.value+1);function nn(){!_n.value||l.value<=s.slidesToShow||(L=setInterval(()=>B(p.value+s.slidesToScroll),s.autoplaySpeed))}function sn(){L&&(clearInterval(L),L=null),q&&(clearTimeout(q),q=null)}Dn(()=>{if(l.value>0&&s.initialSlide>0){const i=s.infinite?s.initialSlide%l.value:Math.min(s.initialSlide,l.value-1);p.value=i}G(),nn()}),Rn(sn),U(()=>s.autoplay,i=>{i?nn():sn()}),U(p,()=>{G()}),U(()=>s.adaptiveHeight,()=>{G()}),o({goTo:B,next:Tn,prev:Pn,goToPage:F,nextPage:Z,prevPage:Q});const Bn=m(()=>{const i=J.value;return i==="start"?"left":i==="end"?"right":i});return()=>{var r,P,tn,an,en,on,ln,pn,cn,dn,rn,un,kn,gn,mn,fn,vn,hn;if(l.value===0)return e("div",{class:$(t,s.rootClassName,(r=s.classNames)==null?void 0:r.root),style:(P=s.styles)==null?void 0:P.root},null);const i=`${s.speed/1e3}s`,v=K.value?{"--carousel-dot-duration":`${s.autoplaySpeed}ms`}:{};return e("div",{class:$(t,s.rootClassName,(tn=s.classNames)==null?void 0:tn.root,{[`${t}-vertical`]:Y.value,[`${t}-fade`]:x.value}),style:{...v,...(an=s.styles)==null?void 0:an.root},role:"region","aria-roledescription":"carousel","aria-label":"Carousel"},[e("div",{ref:Cn,class:$(`${t}-list`,(en=s.classNames)==null?void 0:en.list),style:{...s.centerMode?{padding:`0 ${s.centerPadding}`}:{},...s.adaptiveHeight&&I.value!==void 0?{height:`${I.value}px`,transition:N.value?`height ${i} ${s.easing}`:"none"}:{},...(on=s.styles)==null?void 0:on.list}},[e("div",{ref:z,class:$(`${t}-track`,(ln=s.classNames)==null?void 0:ln.track),style:{...x.value?{}:{transform:Y.value?`translateY(-${W.value*j.value}%)`:`translateX(-${W.value*j.value}%)`,transition:N.value?`transform ${i} ${s.easing}`:"none"},...(pn=s.styles)==null?void 0:pn.track}},[Nn.value.map((yn,A)=>{var D,R,bn,xn;let C=A;const M=s.infinite&&!x.value;M&&(C=A-l.value,C=(C%l.value+l.value)%l.value);const y=C===p.value;return e("div",{key:M?`slide-${C}-${A}`:A,class:$(`${t}-slide`,(D=s.classNames)==null?void 0:D.slide,{[`${t}-slide-active`]:y},y&&((R=s.classNames)==null?void 0:R.slideActive)),style:{...x.value?{opacity:y?1:0,transform:"translate3d(0, 0, 0)",transition:`opacity ${i} ${s.easing}`,position:y?"relative":"absolute",inset:y?"auto":"0",contentVisibility:"auto"}:{flex:`0 0 ${j.value}%`,width:`${j.value}%`,contentVisibility:"auto"},...(bn=s.styles)==null?void 0:bn.slide,...y&&((xn=s.styles)==null?void 0:xn.slideActive)},role:"group","aria-roledescription":"slide","aria-label":`${C+1} / ${l.value}`,"aria-hidden":!y},[yn])})])]),s.arrows&&l.value>s.slidesToShow&&e(b,null,[s.prevArrow??e(wn,{class:$(`${t}-arrow`,`${t}-arrow-left`,(cn=s.classNames)==null?void 0:cn.arrow,(dn=s.classNames)==null?void 0:dn.arrowLeft),style:{...(rn=s.styles)==null?void 0:rn.arrow,...(un=s.styles)==null?void 0:un.arrowLeft},type:"text",icon:In,onClick:Q,disabled:s.waitForAnimate&&N.value,"aria-label":"Previous page"},null),s.nextArrow??e(wn,{class:$(`${t}-arrow`,`${t}-arrow-right`,(kn=s.classNames)==null?void 0:kn.arrow,(gn=s.classNames)==null?void 0:gn.arrowRight),style:{...(mn=s.styles)==null?void 0:mn.arrow,...(fn=s.styles)==null?void 0:fn.arrowRight},type:"text",icon:Ln,onClick:Z,disabled:s.waitForAnimate&&N.value,"aria-label":"Next page"},null)]),An.value&&X.value>1&&e("ul",{class:$(`${t}-dots`,`${t}-dots-${Bn.value}`,$n.value,(vn=s.classNames)==null?void 0:vn.dots,{[`${t}-dots-progress`]:K.value,[`${t}-dots-disabled`]:s.waitForAnimate&&N.value}),style:(hn=s.styles)==null?void 0:hn.dots},[Array.from({length:X.value}).map((yn,A)=>{var M,y,D,R;const C=A===H.value;return e("li",{key:A,class:$((M=s.classNames)==null?void 0:M.dot,{[`${t}-dot-active`]:C},C&&((y=s.classNames)==null?void 0:y.dotActive)),style:{...(D=s.styles)==null?void 0:D.dot,...C&&((R=s.styles)==null?void 0:R.dotActive)},onClick:()=>F(A)},[e("button",{"aria-label":`Go to page ${A+1}`},null)])})])])}}}),jn=_({__name:"CarouselArrows",setup(s){return(h,a)=>(u(),O(d(g),{arrows:""},{default:c(()=>[...a[0]||(a[0]=[n("div",{class:"carousel-item",style:{background:"#364d79",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 1 ",-1),n("div",{class:"carousel-item",style:{background:"#7dbcea",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 2 ",-1),n("div",{class:"carousel-item",style:{background:"#00a0e9",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 3 ",-1),n("div",{class:"carousel-item",style:{background:"#1890ff",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 4 ",-1)])]),_:1}))}}),Fn=`<template>
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
`,On=_({__name:"CarouselBasic",setup(s){return(h,a)=>(u(),O(d(g),{style:{height:"160px",background:"#364d79","border-radius":"4px",overflow:"hidden"}},{default:c(()=>[(u(),f(b,null,w(4,o=>n("div",{key:o,style:{height:"160px",display:"flex","align-items":"center","justify-content":"center",color:"#fff","font-size":"24px"}},S(o),1)),64))]),_:1}))}}),Vn=`<template>
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
`,Hn={class:"carousel-center-demo"},Yn={class:"slide-content"},Gn={class:"slide-content large"},Un=_({__name:"CarouselCenter",setup(s){return(h,a)=>(u(),f("div",Hn,[a[0]||(a[0]=n("h4",null,"居中模式（centerMode）",-1)),e(d(g),{"slides-to-show":3,"center-mode":!0,"center-padding":"10%",arrows:""},{default:c(()=>[(u(),f(b,null,w(7,o=>n("div",{key:o,class:"slide-item"},[n("div",Yn,S(o),1)])),64))]),_:1}),a[1]||(a[1]=n("h4",{style:{"margin-top":"32px"}},"居中模式 - 自定义 padding",-1)),e(d(g),{"slides-to-show":1,"center-mode":!0,"center-padding":"15%",arrows:""},{default:c(()=>[(u(),f(b,null,w(5,o=>n("div",{key:o,class:"slide-item"},[n("div",Gn,"Slide "+S(o),1)])),64))]),_:1})]))}}),Wn=V(Un,[["__scopeId","data-v-d46beaee"]]),Xn=`<template>
  <div class="carousel-center-demo">
    <h4>居中模式（centerMode）</h4>
    <Carousel :slides-to-show="3" :center-mode="true" center-padding="10%" arrows>
      <div v-for="i in 7" :key="i" class="slide-item">
        <div class="slide-content">{{ i }}</div>
      </div>
    </Carousel>

    <h4 style="margin-top: 32px">居中模式 - 自定义 padding</h4>
    <Carousel :slides-to-show="1" :center-mode="true" center-padding="15%" arrows>
      <div v-for="i in 5" :key="i" class="slide-item">
        <div class="slide-content large">Slide {{ i }}</div>
      </div>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from '@hmfw/ant-design'
<\/script>

<style scoped>
.carousel-center-demo h4 {
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.88);
}

.slide-item {
  padding: 0 8px;
}

.slide-content {
  height: 160px;
  line-height: 160px;
  text-align: center;
  background: #364d79;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.3s;
}

.slide-content.large {
  height: 200px;
  line-height: 200px;
  font-size: 32px;
}

:deep(.hmfw-carousel-slide-active) .slide-content {
  background: #1677ff;
  transform: scale(1.05);
}
</style>
`,Jn={style:{display:"flex","flex-direction":"column",gap:"24px"}},Kn=_({__name:"CarouselClassNames",setup(s){return(h,a)=>(u(),f("div",Jn,[n("div",null,[a[1]||(a[1]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器圆角与阴影：",-1)),e(d(g),{"class-names":{root:"custom-root"}},{default:c(()=>[...a[0]||(a[0]=[n("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}},[n("h3",null,"Slide 1")],-1),n("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"}},[n("h3",null,"Slide 2")],-1),n("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"}},[n("h3",null,"Slide 3")],-1)])]),_:1})]),n("div",null,[a[3]||(a[3]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义指示器：圆形 dots 与渐变色：",-1)),e(d(g),{"class-names":{dots:"custom-dots",dot:"custom-dot",dotActive:"custom-dot-active"}},{default:c(()=>[...a[2]||(a[2]=[n("div",{class:"demo-slide",style:{background:"linear-gradient(to right, #f857a6, #ff5858)"}},[n("h3",null,"Slide 1")],-1),n("div",{class:"demo-slide",style:{background:"linear-gradient(to right, #a8edea, #fed6e3)"}},[n("h3",null,"Slide 2")],-1),n("div",{class:"demo-slide",style:{background:"linear-gradient(to right, #ffecd2, #fcb69f)"}},[n("h3",null,"Slide 3")],-1)])]),_:1})]),n("div",null,[a[5]||(a[5]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义箭头：渐变背景与圆形：",-1)),e(d(g),{arrows:"","class-names":{arrow:"custom-arrow",arrowLeft:"custom-arrow-left",arrowRight:"custom-arrow-right"}},{default:c(()=>[...a[4]||(a[4]=[n("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}},[n("h3",null,"Slide 1")],-1),n("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)"}},[n("h3",null,"Slide 2")],-1),n("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #30cfd0 0%, #330867 100%)"}},[n("h3",null,"Slide 3")],-1)])]),_:1})]),n("div",null,[a[7]||(a[7]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义幻灯片缩放与激活态边框：",-1)),e(d(g),{"class-names":{list:"custom-list",slide:"custom-slide",slideActive:"custom-slide-active"}},{default:c(()=>[...a[6]||(a[6]=[n("div",{class:"demo-slide",style:{background:"linear-gradient(to right, #6a11cb, #2575fc)"}},[n("h3",null,"Slide 1")],-1),n("div",{class:"demo-slide",style:{background:"linear-gradient(to right, #ff6a00, #ee0979)"}},[n("h3",null,"Slide 2")],-1),n("div",{class:"demo-slide",style:{background:"linear-gradient(to right, #00c9ff, #92fe9d)"}},[n("h3",null,"Slide 3")],-1)])]),_:1})]),n("div",null,[a[9]||(a[9]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用 styles 内联样式控制：",-1)),e(d(g),{arrows:"",styles:{root:{borderRadius:"16px",overflow:"hidden"},dots:{bottom:"20px"},dot:{opacity:.8},arrow:{background:"rgba(255,255,255,0.9)",color:"#1677ff"}}},{default:c(()=>[...a[8]||(a[8]=[n("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}},[n("h3",null,"Slide 1")],-1),n("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"}},[n("h3",null,"Slide 2")],-1),n("div",{class:"demo-slide",style:{background:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"}},[n("h3",null,"Slide 3")],-1)])]),_:1})])]))}}),Qn=V(Kn,[["__scopeId","data-v-f007851c"]]),Zn=`<template>
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
`,ns=_({__name:"CarouselFade",setup(s){return(h,a)=>(u(),O(d(g),{effect:"fade",style:{height:"160px",background:"#364d79","border-radius":"4px",overflow:"hidden"}},{default:c(()=>[(u(),f(b,null,w(4,o=>n("div",{key:o,style:{height:"160px",display:"flex","align-items":"center","justify-content":"center",color:"#fff","font-size":"24px"}},S(o),1)),64))]),_:1}))}}),ss=`<template>
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
`,ts={class:"carousel-infinite-demo"},as={class:"slide-content"},es={class:"slide-content"},os={class:"slide-content small"},ls={class:"slide-content"},ps=_({__name:"CarouselInfinite",setup(s){return(h,a)=>(u(),f("div",ts,[a[0]||(a[0]=n("h4",null,"无限循环 - 单项显示（原有行为）",-1)),e(d(g),{infinite:"",arrows:""},{default:c(()=>[(u(),f(b,null,w(5,o=>n("div",{key:o,class:"slide-item"},[n("div",as,S(o),1)])),64))]),_:1}),a[1]||(a[1]=n("h4",{style:{"margin-top":"32px"}},"无限循环 - 多项显示（无缝循环）",-1)),a[2]||(a[2]=n("p",{style:{color:"#666","margin-bottom":"16px","font-size":"14px"}},"使用克隆节点实现无缝循环，参考 Swiper 的实现方式",-1)),e(d(g),{"slides-to-show":3,infinite:!0,arrows:""},{default:c(()=>[(u(),f(b,null,w(6,o=>n("div",{key:o,class:"slide-item"},[n("div",es,"Slide "+S(o),1)])),64))]),_:1}),a[3]||(a[3]=n("h4",{style:{"margin-top":"32px"}},"无限循环 - 自动播放",-1)),e(d(g),{"slides-to-show":4,infinite:!0,autoplay:!0,"autoplay-speed":2e3,arrows:""},{default:c(()=>[(u(),f(b,null,w(8,o=>n("div",{key:o,class:"slide-item"},[n("div",os,S(o),1)])),64))]),_:1}),a[4]||(a[4]=n("h4",{style:{"margin-top":"32px"}},"无限循环 - 居中模式",-1)),e(d(g),{"slides-to-show":3,infinite:!0,"center-mode":!0,"center-padding":"15%",arrows:""},{default:c(()=>[(u(),f(b,null,w(7,o=>n("div",{key:o,class:"slide-item"},[n("div",ls,S(o),1)])),64))]),_:1})]))}}),is=V(ps,[["__scopeId","data-v-27ddf6e2"]]),cs=`<template>
  <div class="carousel-infinite-demo">
    <h4>无限循环 - 单项显示（原有行为）</h4>
    <Carousel infinite arrows>
      <div v-for="i in 5" :key="i" class="slide-item">
        <div class="slide-content">{{ i }}</div>
      </div>
    </Carousel>

    <h4 style="margin-top: 32px">无限循环 - 多项显示（无缝循环）</h4>
    <p style="color: #666; margin-bottom: 16px; font-size: 14px">使用克隆节点实现无缝循环，参考 Swiper 的实现方式</p>
    <Carousel :slides-to-show="3" :infinite="true" arrows>
      <div v-for="i in 6" :key="i" class="slide-item">
        <div class="slide-content">Slide {{ i }}</div>
      </div>
    </Carousel>

    <h4 style="margin-top: 32px">无限循环 - 自动播放</h4>
    <Carousel :slides-to-show="4" :infinite="true" :autoplay="true" :autoplay-speed="2000" arrows>
      <div v-for="i in 8" :key="i" class="slide-item">
        <div class="slide-content small">{{ i }}</div>
      </div>
    </Carousel>

    <h4 style="margin-top: 32px">无限循环 - 居中模式</h4>
    <Carousel :slides-to-show="3" :infinite="true" :center-mode="true" center-padding="15%" arrows>
      <div v-for="i in 7" :key="i" class="slide-item">
        <div class="slide-content">{{ i }}</div>
      </div>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from '@hmfw/ant-design'
<\/script>

<style scoped>
.carousel-infinite-demo h4 {
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.88);
}

.slide-item {
  padding: 0 8px;
}

.slide-content {
  height: 160px;
  line-height: 160px;
  text-align: center;
  background: #364d79;
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.3s;
}

.slide-content.small {
  height: 120px;
  line-height: 120px;
  font-size: 24px;
}

:deep(.hmfw-carousel-slide-active) .slide-content {
  background: #1677ff;
}
</style>
`,ds={class:"carousel-multiple-demo"},rs={class:"slide-content"},us={class:"slide-content"},ks={class:"slide-content"},gs=_({__name:"CarouselMultiple",setup(s){return(h,a)=>(u(),f("div",ds,[a[0]||(a[0]=n("h4",null,"一次显示 3 个（slidesToShow: 3）",-1)),e(d(g),{"slides-to-show":3,arrows:""},{default:c(()=>[(u(),f(b,null,w(9,o=>n("div",{key:o,class:"slide-item"},[n("div",rs,S(o),1)])),64))]),_:1}),a[1]||(a[1]=n("h4",{style:{"margin-top":"32px"}},"一次显示 3 个，每次滚动 3 个",-1)),e(d(g),{"slides-to-show":3,"slides-to-scroll":3,arrows:""},{default:c(()=>[(u(),f(b,null,w(9,o=>n("div",{key:o,class:"slide-item"},[n("div",us,S(o),1)])),64))]),_:1}),a[2]||(a[2]=n("h4",{style:{"margin-top":"32px"}},"一次显示 4 个，每次滚动 2 个",-1)),e(d(g),{"slides-to-show":4,"slides-to-scroll":2,arrows:""},{default:c(()=>[(u(),f(b,null,w(12,o=>n("div",{key:o,class:"slide-item"},[n("div",ks,S(o),1)])),64))]),_:1})]))}}),ms=V(gs,[["__scopeId","data-v-01dcf493"]]),fs=`<template>
  <div class="carousel-multiple-demo">
    <h4>一次显示 3 个（slidesToShow: 3）</h4>
    <Carousel :slides-to-show="3" arrows>
      <div v-for="i in 9" :key="i" class="slide-item">
        <div class="slide-content">{{ i }}</div>
      </div>
    </Carousel>

    <h4 style="margin-top: 32px">一次显示 3 个，每次滚动 3 个</h4>
    <Carousel :slides-to-show="3" :slides-to-scroll="3" arrows>
      <div v-for="i in 9" :key="i" class="slide-item">
        <div class="slide-content">{{ i }}</div>
      </div>
    </Carousel>

    <h4 style="margin-top: 32px">一次显示 4 个，每次滚动 2 个</h4>
    <Carousel :slides-to-show="4" :slides-to-scroll="2" arrows>
      <div v-for="i in 12" :key="i" class="slide-item">
        <div class="slide-content">{{ i }}</div>
      </div>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from '@hmfw/ant-design'
<\/script>

<style scoped>
.carousel-multiple-demo h4 {
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.88);
}

.slide-item {
  padding: 0 8px;
}

.slide-content {
  height: 160px;
  line-height: 160px;
  text-align: center;
  background: #364d79;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  border-radius: 4px;
}
</style>
`,vs=_({__name:"CarouselProgress",setup(s){return(h,a)=>(u(),O(d(g),{autoplay:{dotDuration:!0},"autoplay-speed":2e3},{default:c(()=>[...a[0]||(a[0]=[n("div",{class:"carousel-item",style:{background:"#364d79",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 1 ",-1),n("div",{class:"carousel-item",style:{background:"#7dbcea",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 2 ",-1),n("div",{class:"carousel-item",style:{background:"#00a0e9",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 3 ",-1),n("div",{class:"carousel-item",style:{background:"#1890ff",color:"#fff",height:"160px","line-height":"160px","text-align":"center"}}," Slide 4 ",-1)])]),_:1}))}}),hs=`<template>
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
`,ys={class:"markdown-body"},qs={__name:"carousel",setup(s,{expose:h}){return h({frontmatter:{}}),(o,t)=>{const p=En("DemoBlock");return u(),f("div",ys,[t[0]||(t[0]=n("h1",{id:"carousel-走马灯",tabindex:"-1"},"Carousel 走马灯",-1)),t[1]||(t[1]=n("p",null,"旋转播放的幻灯片。",-1)),t[2]||(t[2]=n("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"当有一组平级的内容，需要轮播展示时"),n("li",null,"常用于图片或卡片轮播")],-1)),t[4]||(t[4]=n("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=n("p",null,"默认 scrollx 滚动效果，底部显示 dots。",-1)),e(p,{title:"基础用法",source:d(Vn)},{default:c(()=>[e(On)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"渐显效果",tabindex:"-1"},"渐显效果",-1)),t[8]||(t[8]=n("p",null,"切换 effect 为 fade，使用渐显过渡。",-1)),e(p,{title:"渐显效果",source:d(ss)},{default:c(()=>[e(ns)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"切换箭头",tabindex:"-1"},"切换箭头",-1)),t[10]||(t[10]=n("p",null,[k("设置 "),n("code",null,"arrows"),k(" 为 "),n("code",null,"true"),k(" 显示切换箭头。")],-1)),e(p,{title:"切换箭头",source:d(Fn)},{default:c(()=>[e(jn)]),_:1},8,["source"]),t[11]||(t[11]=n("h3",{id:"自动播放进度条",tabindex:"-1"},"自动播放进度条",-1)),t[12]||(t[12]=n("p",null,[k("设置 "),n("code",null,"autoplay.dotDuration"),k(" 为 "),n("code",null,"true"),k("，指示点将显示进度条动画。")],-1)),e(p,{title:"自动播放进度条",source:d(hs)},{default:c(()=>[e(vs)]),_:1},8,["source"]),t[13]||(t[13]=n("h3",{id:"多项显示",tabindex:"-1"},"多项显示",-1)),t[14]||(t[14]=n("p",null,[k("设置 "),n("code",null,"slidesToShow"),k(" 一次显示多个 slides，"),n("code",null,"slidesToScroll"),k(" 控制每次滚动的数量。")],-1)),e(p,{title:"多项显示",source:d(fs)},{default:c(()=>[e(ms)]),_:1},8,["source"]),t[15]||(t[15]=n("h3",{id:"居中模式",tabindex:"-1"},"居中模式",-1)),t[16]||(t[16]=n("p",null,[k("设置 "),n("code",null,"centerMode"),k(" 为 "),n("code",null,"true"),k("，当前激活的 slide 将居中显示，两侧露出部分其他 slides。")],-1)),e(p,{title:"居中模式",source:d(Xn)},{default:c(()=>[e(Wn)]),_:1},8,["source"]),t[17]||(t[17]=n("h3",{id:"无限循环",tabindex:"-1"},"无限循环",-1)),t[18]||(t[18]=n("p",null,[k("设置 "),n("code",null,"infinite"),k(" 为 "),n("code",null,"true"),k(" 开启无限循环。使用克隆节点策略实现无缝循环（参考 Swiper loop 模块）。")],-1)),e(p,{title:"无限循环",source:d(cs)},{default:c(()=>[e(is)]),_:1},8,["source"]),t[19]||(t[19]=n("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[20]||(t[20]=n("p",null,[k("通过 "),n("code",null,"classNames"),k(" / "),n("code",null,"styles"),k(" 对各子元素做细粒度样式控制。")],-1)),e(p,{title:"语义化 className 与 style",source:d(Zn)},{default:c(()=>[e(Qn)]),_:1},8,["source"]),t[21]||(t[21]=zn(`<h2 id="api" tabindex="-1">API</h2><h3 id="carousel-props" tabindex="-1">Carousel Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>版本</th></tr></thead><tbody><tr><td>autoplay</td><td>是否自动切换，可指定 <code>autoplay.dotDuration</code> 显示进度条</td><td><code>boolean | { dotDuration?: boolean }</code></td><td><code>false</code></td><td>dotDuration: v0.2.0</td></tr><tr><td>autoplaySpeed</td><td>自动切换间隔（ms）</td><td><code>number</code></td><td><code>3000</code></td><td>-</td></tr><tr><td>arrows</td><td>是否显示切换箭头</td><td><code>boolean</code></td><td><code>false</code></td><td>v0.2.0</td></tr><tr><td>dots</td><td>是否显示指示点，可指定 <code>className</code> 自定义 class</td><td><code>boolean | { className?: string }</code></td><td><code>true</code></td><td>对象形式: v0.2.0</td></tr><tr><td>dotPosition</td><td>指示点位置（已废弃，推荐使用 <code>dotPlacement</code>）</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;left&#39; | &#39;right&#39;</code></td><td><code>&#39;bottom&#39;</code></td><td>-</td></tr><tr><td>dotPlacement</td><td>指示点位置，<code>start</code>/<code>end</code> 替代 <code>left</code>/<code>right</code>，支持 RTL</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;bottom&#39;</code></td><td>v0.2.0</td></tr><tr><td>effect</td><td>切换效果</td><td><code>&#39;scrollx&#39; | &#39;fade&#39;</code></td><td><code>&#39;scrollx&#39;</code></td><td>-</td></tr><tr><td>fade</td><td>是否使用渐显过渡（优先级高于 <code>effect</code>）</td><td><code>boolean</code></td><td>-</td><td>v0.2.0</td></tr><tr><td>infinite</td><td>是否无限循环</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td></tr><tr><td>speed</td><td>动画时长（ms）</td><td><code>number</code></td><td><code>500</code></td><td>v0.2.0</td></tr><tr><td>easing</td><td>过渡缓动函数</td><td><code>string</code></td><td><code>&#39;ease&#39;</code></td><td>v0.2.0</td></tr><tr><td>initialSlide</td><td>初始 slide 索引</td><td><code>number</code></td><td><code>0</code></td><td>v0.2.0</td></tr><tr><td>waitForAnimate</td><td>切换时是否等待动画完成</td><td><code>boolean</code></td><td><code>false</code></td><td>v0.2.0</td></tr><tr><td>prevArrow</td><td>自定义前进箭头</td><td><code>VNode</code></td><td>-</td><td>v0.2.0</td></tr><tr><td>nextArrow</td><td>自定义后退箭头</td><td><code>VNode</code></td><td>-</td><td>v0.2.0</td></tr><tr><td>adaptiveHeight</td><td>根据当前 slide 自动调整高度</td><td><code>boolean</code></td><td><code>false</code></td><td>v0.7.0</td></tr><tr><td>slidesToShow</td><td>一次显示几个 slides</td><td><code>number</code></td><td><code>1</code></td><td>v0.7.0</td></tr><tr><td>slidesToScroll</td><td>一次滚动几个 slides</td><td><code>number</code></td><td><code>1</code></td><td>v0.7.0</td></tr><tr><td>centerMode</td><td>居中模式：当前 slide 居中，两侧露出部分 slide</td><td><code>boolean</code></td><td><code>false</code></td><td>v0.7.0</td></tr><tr><td>centerPadding</td><td>居中模式下两侧的 padding（可以是 px 或 %）</td><td><code>string</code></td><td><code>&#39;50px&#39;</code></td><td>v0.7.0</td></tr><tr><td>rootClassName</td><td>根元素 class</td><td><code>string</code></td><td>-</td><td>v0.2.0</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CarouselClassNames</code></td><td>-</td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CarouselStyles</code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="carousel-events" tabindex="-1">Carousel Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>beforeChange</td><td>切换前回调</td><td><code>(from: number, to: number) =&gt; void</code></td></tr><tr><td>afterChange</td><td>切换后回调</td><td><code>(current: number) =&gt; void</code></td></tr></tbody></table><h3 id="carousel-ref-方法" tabindex="-1">Carousel Ref 方法</h3><p>通过 <code>ref</code> 可调用组件方法：</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>goTo</td><td>跳转到指定 slide</td><td><code>(slideNumber: number, dontAnimate?: boolean) =&gt; void</code></td></tr><tr><td>next</td><td>切换到下一张</td><td><code>() =&gt; void</code></td></tr><tr><td>prev</td><td>切换到上一张</td><td><code>() =&gt; void</code></td></tr><tr><td>goToPage</td><td>跳转到指定页</td><td><code>(pageNumber: number, dontAnimate?: boolean) =&gt; void</code></td></tr><tr><td>nextPage</td><td>切换到下一页</td><td><code>() =&gt; void</code></td></tr><tr><td>prevPage</td><td>切换到上一页</td><td><code>() =&gt; void</code></td></tr></tbody></table><h2 id="可访问性" tabindex="-1">可访问性</h2><ul><li>容器具有 <code>role=&quot;region&quot;</code> 和 <code>aria-roledescription=&quot;carousel&quot;</code></li><li>每个 slide 具有 <code>role=&quot;group&quot;</code> 和 <code>aria-label=&quot;N / 总数&quot;</code></li><li>箭头按钮具有 <code>aria-label=&quot;Previous/Next slide&quot;</code></li><li>指示点按钮具有 <code>aria-label=&quot;Go to slide N&quot;</code></li></ul><h2 id="注意" tabindex="-1">注意</h2><ul><li>当前实现为轻量级原生版本，不依赖 react-slick</li><li>不支持高级特性：拖拽滑动、响应式断点、懒加载等</li><li><strong>多项显示</strong>（<code>slidesToShow &gt; 1</code>）时会自动禁用 fade 效果</li><li><strong>居中模式</strong>（<code>centerMode</code>）需要设置合适的 <code>centerPadding</code> 以获得最佳视觉效果</li><li><strong>无限循环</strong>（<code>infinite</code>）实现原理： <ul><li>采用 <strong>Swiper loop 模块</strong>的克隆节点策略</li><li>渲染 3 组 slides：<code>[原数组] + [原数组] + [原数组]</code></li><li>初始定位在中间组，动画滚动到克隆区域后瞬间重置</li><li><strong>循环方向</strong>：next 按钮始终往左滑，prev 按钮始终往右滑，无论是否跨越边界</li><li><strong>Dots 数量</strong>：多项显示时，dots 数量 = 可滚动的页面数，而非 slides 总数 <ul><li>例如：6 个 slides，<code>slidesToShow=3</code>，<code>slidesToScroll=1</code> → 4 个 dots（页面：1-2-3, 2-3-4, 3-4-5, 4-5-6）</li></ul></li></ul></li><li>需要高级能力时，建议直接集成第三方轮播库</li></ul><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对走马灯的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义指示器样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ dots: &#39;my-dots&#39;, dotActive: &#39;my-active-dot&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Slide 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Slide 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Slide 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义箭头样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span>
    <span class="token attr-name">arrows</span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      arrow: &#39;my-arrow&#39;,
      arrowLeft: &#39;my-arrow-left&#39;,
      arrowRight: &#39;my-arrow-right&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Slide 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Slide 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义幻灯片与激活态 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      slide: &#39;my-slide&#39;,
      slideActive: &#39;my-active-slide&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Slide 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Slide 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-dots)</span> <span class="token punctuation">{</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-active-dot button)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-arrow)</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50% <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 48px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 48px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-arrow:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-slide)</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.7<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-active-slide)</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.05<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制根容器 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { borderRadius: &#39;16px&#39;, overflow: &#39;hidden&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Slide 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Slide 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义指示器位置与样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      dots: { bottom: &#39;24px&#39; },
      dot: { opacity: 0.8 },
      dotActive: { transform: &#39;scale(1.5)&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Slide 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Slide 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用多个节点样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span>
    <span class="token attr-name">arrows</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { boxShadow: &#39;0 4px 12px rgba(0,0,0,0.15)&#39; },
      arrow: { background: &#39;rgba(255,255,255,0.9)&#39;, color: &#39;#1677ff&#39; },
      slide: { padding: &#39;8px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Slide 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Slide 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>slideActive</code> / <code>dotActive</code> / <code>arrowLeft</code> / <code>arrowRight</code> 会与对应的基础 className（<code>slide</code> / <code>dot</code> / <code>arrow</code>）<strong>叠加</strong>应用</li><li><code>styles.slideActive</code> / <code>styles.dotActive</code> 会与 <code>styles.slide</code> / <code>styles.dot</code> <strong>合并</strong>，激活态样式优先</li><li>箭头按钮基于 Button 组件实现，<code>classNames.arrow</code> 会应用到 Button 的根节点</li><li>指示器按钮的样式通过 <code>classNames.dot</code> 应用到 <code>&lt;li&gt;</code> 元素，实际按钮在其内部</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Carousel 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。</p>`,29))])}}};export{qs as default};
