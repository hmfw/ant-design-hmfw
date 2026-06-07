import{S as W}from"./Space-CFOjp43A.js";import{n as S,M as at,p as bt,P as J,v as A,m as e,l as F,D as N,e as i,F as kt,c as ht,T as wt,s as yt,q as xt,A as It,z as U,h as M,Q as x,J as p,g as _,G as jt,j as Ct,k as X}from"./index-bv5A37HL.js";import{ao as ot,S as Rt,a7 as Pt,p as Vt,ag as et,a8 as St,a9 as Et,ap as zt}from"./icons-DrnBibzR.js";import{I as R}from"./Icon-K3gH4Ffy.js";import{c as D}from"./cls-S9IiI6wd.js";import{K as G}from"./event-CZUxRbwU.js";let L=0,st="";function Tt(){typeof document>"u"||(L===0&&(st=document.body.style.overflow,document.body.style.overflow="hidden"),L+=1)}function nt(){typeof document>"u"||(L=Math.max(0,L-1),L===0&&(document.body.style.overflow=st))}function q(t){return t==null?null:typeof t=="function"?t():t}function H(t){return typeof t=="boolean"?t?{}:null:t??{}}function lt(t){let r=q(t.cover),l;xt(t.mask)?r||(r=t.mask):l=t.mask;let o=!0,u=!0;return typeof l=="boolean"?o=l:l&&typeof l=="object"&&(l.enabled!==void 0&&(o=l.enabled),l.closable!==void 0&&(u=l.closable)),{enabled:o,closable:u,coverNode:r}}const Y=()=>({x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1}),rt=Symbol("PreviewGroup"),ct=S({name:"ImagePreview",props:{prefixCls:{type:String,required:!0},src:{type:String,default:""},alt:String,config:{type:Object,default:()=>({})},visible:{type:Boolean,default:!1},onClose:{type:Function,required:!0},onPrev:Function,onNext:Function,hasPrev:Boolean,hasNext:Boolean,current:Number,total:Number,countRender:Function},setup(t){const a=N(Y()),r=N(!1),l=i(()=>t.config.scaleStep??.5),o=i(()=>t.config.minScale??1),u=i(()=>t.config.maxScale??50),I=i(()=>t.config.movable!==!1),h=n=>{var f,g;(g=(f=t.config).onTransform)==null||g.call(f,{transform:{...a.value},action:n})},v=()=>{a.value=Y(),h("reset")};J(()=>t.visible,n=>{n?(a.value=Y(),Tt()):nt()}),J(()=>t.src,()=>{r.value=!0,a.value=Y(),yt(()=>{r.value=!1})});const j=(n,f)=>{a.value={...a.value,scale:Math.min(Math.max(n,o.value),u.value)},h(f)},b=()=>j(a.value.scale*(1+l.value),"zoomIn"),y=()=>j(a.value.scale/(1+l.value),"zoomOut"),P=()=>{a.value={...a.value,rotate:a.value.rotate-90},h("rotateLeft")},E=()=>{a.value={...a.value,rotate:a.value.rotate+90},h("rotateRight")},$=()=>{a.value={...a.value,flipX:!a.value.flipX},h("flipX")},z=()=>{a.value={...a.value,flipY:!a.value.flipY},h("flipY")},T=n=>{var f,g;t.visible&&(n.key===G.ESCAPE?t.onClose():n.key===G.ARROW_LEFT&&t.hasPrev?(f=t.onPrev)==null||f.call(t):n.key===G.ARROW_RIGHT&&t.hasNext&&((g=t.onNext)==null||g.call(t)))};typeof window<"u"&&(window.addEventListener("keydown",T),A(()=>window.removeEventListener("keydown",T))),A(()=>{t.visible&&nt()});const s=n=>{n.preventDefault(),n.deltaY<0?b():y(),h("wheel")};let d=!1,C=0,V=0,B=0,c=0;const k=n=>{I.value&&(n.preventDefault(),d=!0,C=n.clientX,V=n.clientY,B=a.value.x,c=a.value.y,window.addEventListener("mousemove",Z),window.addEventListener("mouseup",O))},Z=n=>{d&&(a.value={...a.value,x:B+(n.clientX-C),y:c+(n.clientY-V)})},O=()=>{d&&(d=!1,window.removeEventListener("mousemove",Z),window.removeEventListener("mouseup",O),h("move"))};A(()=>{window.removeEventListener("mousemove",Z),window.removeEventListener("mouseup",O)});const dt=()=>{a.value.scale!==1?v():j(2,"doubleClick")},K=i(()=>lt(t.config)),Q=n=>{n.target===n.currentTarget&&K.value.closable&&t.onClose()},m=`${t.prefixCls}-preview`,it=()=>{const n=t.config.closeIcon;return n===!1?null:n?q(n):e(R,{component:Vt},null)},pt=i(()=>{const n=a.value,f=n.scale*(n.flipX?-1:1),g=n.scale*(n.flipY?-1:1);return{transform:`translate3d(${n.x}px, ${n.y}px, 0) scale3d(${f}, ${g}, 1) rotate(${n.rotate}deg)`,transition:d||r.value?"none":"transform 0.3s",willChange:"transform",cursor:I.value?"grab":"default"}}),tt=i(()=>({url:t.src,alt:t.alt})),ut=n=>{var f,g;n<0?(f=t.onPrev)==null||f.call(t):n>0&&((g=t.onNext)==null||g.call(t))},ft={onFlipY:z,onFlipX:$,onRotateLeft:P,onRotateRight:E,onZoomOut:y,onZoomIn:b,onReset:v,onClose:t.onClose,onActive:ut},mt=()=>e("div",{class:`${m}-operations`,onClick:n=>n.stopPropagation()},[e("button",{class:`${m}-op-btn`,onClick:$,title:"左右翻转"},[e(R,{component:et},null)]),e("button",{class:`${m}-op-btn`,onClick:z,title:"上下翻转"},[e(R,{component:et,rotate:90},null)]),e("button",{class:`${m}-op-btn`,onClick:P,title:"向左旋转"},[e(R,{component:St},null)]),e("button",{class:`${m}-op-btn`,onClick:E,title:"向右旋转"},[e(R,{component:Et},null)]),e("button",{class:D(`${m}-op-btn`,{[`${m}-op-btn-disabled`]:a.value.scale<=o.value}),onClick:y,title:"缩小"},[e(R,{component:zt},null)]),e("button",{class:D(`${m}-op-btn`,{[`${m}-op-btn-disabled`]:a.value.scale>=u.value}),onClick:b,title:"放大"},[e(R,{component:ot},null)])]),gt=()=>{const n=mt(),f=t.config.toolbarRender??t.config.actionsRender;return f?f(n,{transform:{...a.value},current:t.current,total:t.total,image:tt.value,actions:ft}):n},vt=()=>{const n=e("img",{src:t.src,alt:t.alt,class:`${m}-img`,style:pt.value,draggable:!1,onMousedown:k,onDblclick:dt,onClick:f=>f.stopPropagation()},null);return t.config.imageRender?t.config.imageRender(n,{transform:{...a.value},current:t.current,total:t.total,image:tt.value}):n};return()=>{const n=t.total!=null&&t.total>1;return e(wt,{to:"body"},{default:()=>[e(ht,{name:`${m}-fade`},{default:()=>[t.visible&&e("div",{class:`${m}-root`,style:t.config.zIndex!=null?{zIndex:t.config.zIndex}:void 0,onClick:Q},[e("div",{class:D(`${m}-mask`,{[`${m}-mask-hidden`]:!K.value.enabled})},null),e("button",{class:`${m}-close`,onClick:t.onClose,title:"关闭"},[it()]),e("div",{class:`${m}-wrap`,onClick:Q,onWheel:s},[vt()]),gt(),n&&e("div",{class:`${m}-count`},[t.countRender?t.countRender((t.current??0)+1,t.total):`${(t.current??0)+1} / ${t.total}`]),t.hasPrev&&e("button",{class:`${m}-switch ${m}-switch-left`,onClick:f=>{var g;f.stopPropagation(),(g=t.onPrev)==null||g.call(t)}},[e(R,{component:Rt},null)]),t.hasNext&&e("button",{class:`${m}-switch ${m}-switch-right`,onClick:f=>{var g;f.stopPropagation(),(g=t.onNext)==null||g.call(t)}},[e(R,{component:Pt},null)])])]})]})}}}),w=S({name:"Image",inheritAttrs:!1,props:{src:String,alt:String,width:[Number,String],height:[Number,String],preview:{type:[Boolean,Object],default:!0},fallback:String,placeholder:{type:[Boolean,Object,Function],default:!1},rootClassName:String,onError:Function},setup(t,{attrs:a}){const r=at("image"),l=N("loading"),o=N(!1),u=bt(rt,null);J(()=>t.src,()=>{l.value="loading"});const I=()=>{l.value="loaded"},h=c=>{var k;l.value="error",(k=t.onError)==null||k.call(t,c)},v=i(()=>H(u?u.preview():t.preview)),j=i(()=>v.value!==null&&l.value!=="error"),b=i(()=>{var c,k;return((c=v.value)==null?void 0:c.open)??((k=v.value)==null?void 0:k.visible)}),y=i(()=>b.value!==void 0),P=i(()=>y.value?!!b.value:o.value),E=c=>{var Z,O;const k=v.value;k&&((Z=k.onOpenChange)==null||Z.call(k,c),(O=k.onVisibleChange)==null||O.call(k,c,!c))},$=c=>{y.value||(o.value=c),E(c)},z=()=>{var c;return{url:((c=v.value)==null?void 0:c.src)??t.src??"",alt:t.alt,width:t.width,height:t.height}},T=()=>{j.value&&(u?u.open(z):$(!0))};if(u){const c=u.register(z);A(c)}const s=i(()=>({width:typeof t.width=="number"?`${t.width}px`:t.width,height:typeof t.height=="number"?`${t.height}px`:t.height})),d=i(()=>l.value==="error"&&t.fallback?t.fallback:t.src),C=i(()=>{var c;return((c=v.value)==null?void 0:c.src)??t.src??""}),V=i(()=>v.value?lt(v.value):null),B=()=>{const c=t.placeholder;return c?c===!0?e("div",{class:`${r}-placeholder`},null):e("div",{class:`${r}-placeholder`},[q(c)]):null};return()=>{var c;return e("div",{class:D(r,t.rootClassName,a.class,{[`${r}-preview`]:j.value,[`${r}-error`]:l.value==="error"&&!t.fallback}),style:[s.value,a.style]},[l.value==="loading"&&B(),l.value==="error"&&!t.fallback?e("div",{class:`${r}-error-placeholder`},[e("span",null,[F("图片加载失败")])]):e("img",{src:d.value,alt:t.alt,class:`${r}-img`,onLoad:I,onError:h,onClick:T},null),j.value&&l.value==="loaded"&&((c=V.value)==null?void 0:c.enabled)&&e("div",{class:`${r}-mask`,onClick:T},[V.value.coverNode??e("span",{class:`${r}-mask-info`},[e(R,{component:ot},null),F(" "),e("span",null,[F("预览")])])]),!u&&v.value&&e(ct,{prefixCls:r,src:C.value,alt:t.alt,config:v.value,visible:P.value,onClose:()=>$(!1)},null)])}}}),_t=S({name:"PreviewGroup",props:{preview:{type:[Boolean,Object],default:!0},items:{type:Array,default:void 0},current:Number,onChange:Function},setup(t,{slots:a}){const r=at("image"),l=N([]),o=N(0),u=N(!1),I=i(()=>H(t.preview)),h=i(()=>{var s,d;return((s=I.value)==null?void 0:s.open)??((d=I.value)==null?void 0:d.visible)}),v=i(()=>h.value!==void 0?!!h.value:u.value),j=i(()=>t.current),b=i(()=>j.value!==void 0?j.value:o.value),y=i(()=>t.items?t.items.map(s=>typeof s=="string"?{url:s}:s):l.value.map(s=>s())),P=s=>{var C;const d=b.value;t.current===void 0&&(o.value=s),s!==d&&((C=t.onChange)==null||C.call(t,s,d))},E=s=>{var C,V;h.value===void 0&&(u.value=s);const d=I.value;d&&((C=d.onOpenChange)==null||C.call(d,s),(V=d.onVisibleChange)==null||V.call(d,s,!s))};It(rt,{preview:()=>t.preview,register(s){return l.value.push(s),()=>{const d=l.value.indexOf(s);d>=0&&l.value.splice(d,1)}},open(s){const d=l.value.indexOf(s);P(d>=0?d:0),E(!0)}});const z=i(()=>{var s;return((s=y.value[b.value])==null?void 0:s.url)??""}),T=i(()=>{var s;return(s=y.value[b.value])==null?void 0:s.alt});return()=>{var s;return e(kt,null,[(s=a.default)==null?void 0:s.call(a),I.value&&e(ct,{prefixCls:r,src:z.value,alt:T.value,config:I.value,visible:v.value,current:b.value,total:y.value.length,hasPrev:b.value>0,hasNext:b.value<y.value.length-1,onPrev:()=>P(b.value-1),onNext:()=>P(b.value+1),onClose:()=>E(!1)},null)])}}}),Nt=S({__name:"ImageBasic",setup(t){return(a,r)=>(U(),M(p(W),{wrap:""},{default:x(()=>[e(p(w),{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:"200"}),e(p(w),{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:"200",preview:!1}),e(p(w),{src:"error.jpg",width:"200",fallback:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"})]),_:1}))}}),$t=`<template>
  <Space wrap>
    <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width="200" />
    <Image
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      width="200"
      :preview="false"
    />
    <Image
      src="error.jpg"
      width="200"
      fallback="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  </Space>
</template>

<script setup lang="ts">
import { Image, Space } from 'ant-design-hmfw'
<\/script>
`,Zt=S({__name:"ImageCustomPreview",setup(t){return(a,r)=>(U(),M(p(W),{wrap:""},{default:x(()=>[e(p(w),{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:"200",preview:{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",minScale:.5,maxScale:10,scaleStep:.2}}),e(p(w),{src:"https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",width:"200",preview:{mask:{enabled:!1}}}),e(p(w),{src:"https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",width:"200",preview:{closeIcon:!1}})]),_:1}))}}),Ot=`<template>
  <Space wrap>
    <Image
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      width="200"
      :preview="{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        minScale: 0.5,
        maxScale: 10,
        scaleStep: 0.2,
      }"
    />
    <Image
      src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
      width="200"
      :preview="{ mask: { enabled: false } }"
    />
    <Image
      src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
      width="200"
      :preview="{ closeIcon: false }"
    />
  </Space>
</template>

<script setup lang="ts">
import { Image, Space } from 'ant-design-hmfw'
<\/script>
`,Ft=S({__name:"ImagePlaceholder",setup(t){return(a,r)=>(U(),M(p(W),{direction:"vertical",size:16},{default:x(()=>[e(p(W),{wrap:""},{default:x(()=>[e(p(w),{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:"200",placeholder:""}),e(p(w),{src:"https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",width:"200",placeholder:""}),e(p(w),{src:"https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",width:"200",placeholder:""})]),_:1}),r[0]||(r[0]=_("p",{style:{color:"#999","font-size":"14px"}},"大图加载时显示占位动画",-1))]),_:1}))}}),Ut=`<template>
  <Space direction="vertical" :size="16">
    <Space wrap>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        width="200"
        placeholder
      />
      <Image
        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        width="200"
        placeholder
      />
      <Image
        src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
        width="200"
        placeholder
      />
    </Space>
    <p style="color: #999; font-size: 14px">大图加载时显示占位动画</p>
  </Space>
</template>

<script setup lang="ts">
import { Image, Space } from 'ant-design-hmfw'
<\/script>
`,Lt=S({__name:"ImagePreviewGroup",setup(t){return(a,r)=>(U(),M(p(_t),null,{default:x(()=>[e(p(W),null,{default:x(()=>[e(p(w),{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:"200"}),e(p(w),{src:"https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",width:"200"}),e(p(w),{src:"https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",width:"200"})]),_:1})]),_:1}))}}),Wt=`<template>
  <PreviewGroup>
    <Space>
      <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width="200" />
      <Image
        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        width="200"
      />
      <Image
        src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
        width="200"
      />
    </Space>
  </PreviewGroup>
</template>

<script setup lang="ts">
import { Image, PreviewGroup, Space } from 'ant-design-hmfw'
<\/script>
`,Mt=S({__name:"ImageToolbarRender",setup(t){function a(l,o){return e("div",{style:"display:flex;flex-direction:column;align-items:center;gap:8px"},[l,e("div",{style:"display:flex;gap:12px;color:#fff;font-size:13px;align-items:center"},[e("span",null,[F("缩放 "),Math.round(o.transform.scale*100),F("%")]),e("button",{onClick:o.actions.onReset,style:"padding:2px 10px;border:none;border-radius:4px;background:rgba(255,255,255,.2);color:#fff;cursor:pointer"},[F("重置")])])])}function r(l,o){return e("div",{style:"padding:8px;border-radius:8px;background:rgba(255,255,255,.08)"},[l])}return(l,o)=>(U(),M(p(w),{src:"https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",width:"200",preview:{toolbarRender:a,imageRender:r}},null,8,["preview"]))}}),Bt=`<template>
  <Image
    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
    width="200"
    :preview="{ toolbarRender, imageRender }"
  />
</template>

<script setup lang="tsx">
import { Image } from 'ant-design-hmfw'
import type { VNode } from 'vue'
import type { ToolbarRenderInfoType, ImageRenderInfoType } from 'ant-design-hmfw'

// 自定义工具栏：保留原始操作栏，并在其下方追加缩放比例与“重置”按钮
function toolbarRender(originalNode: VNode, info: ToolbarRenderInfoType) {
  return (
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
      {originalNode}
      <div style="display:flex;gap:12px;color:#fff;font-size:13px;align-items:center">
        <span>缩放 {Math.round(info.transform.scale * 100)}%</span>
        <button
          onClick={info.actions.onReset}
          style="padding:2px 10px;border:none;border-radius:4px;background:rgba(255,255,255,.2);color:#fff;cursor:pointer"
        >
          重置
        </button>
      </div>
    </div>
  )
}

// 自定义预览内容：给图片加一个圆角边框包裹
function imageRender(originalNode: VNode, _info: ImageRenderInfoType) {
  return <div style="padding:8px;border-radius:8px;background:rgba(255,255,255,.08)">{originalNode}</div>
}
<\/script>
`,Yt={class:"markdown-body"},qt={__name:"image",setup(t,{expose:a}){return a({frontmatter:{}}),(l,o)=>{const u=jt("DemoBlock");return U(),Ct("div",Yt,[o[0]||(o[0]=X('<h1 id="image-" tabindex="-1">Image 图片</h1><p>可预览的图片。</p><h2 id="" tabindex="-1">何时使用</h2><ul><li>需要展示图片时</li><li>加载大图时显示 loading 占位或加载失败容错处理</li><li>需要预览图片，支持缩放、旋转、翻转等操作时</li><li>多张图片需要组合预览（上一张/下一张）时</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基础用法</h3><p>单张图片预览，支持 fallback 回退图片。第二张禁用预览，第三张加载失败时显示 fallback。</p>',7)),e(u,{title:"基础用法",source:p($t)},{default:x(()=>[e(Nt)]),_:1},8,["source"]),o[1]||(o[1]=_("h3",{id:"-3",tabindex:"-1"},"图片组预览",-1)),o[2]||(o[2]=_("p",null,"多张图片共享一个预览弹层，支持键盘左右键切换、Esc 关闭。",-1)),e(u,{title:"图片组预览",source:p(Wt)},{default:x(()=>[e(Lt)]),_:1},8,["source"]),o[3]||(o[3]=_("h3",{id:"-4",tabindex:"-1"},"渐进式加载",-1)),o[4]||(o[4]=_("p",null,"大图加载时显示占位骨架，提升用户体验。",-1)),e(u,{title:"渐进式加载",source:p(Ut)},{default:x(()=>[e(Ft)]),_:1},8,["source"]),o[5]||(o[5]=_("h3",{id:"-5",tabindex:"-1"},"自定义预览",-1)),o[6]||(o[6]=_("p",null,"自定义预览图地址、缩放范围、关闭图标等。",-1)),e(u,{title:"自定义预览",source:p(Ot)},{default:x(()=>[e(Zt)]),_:1},8,["source"]),o[7]||(o[7]=X('<h3 id="-6" tabindex="-1">自定义工具栏与预览内容</h3><p>通过 <code>toolbarRender</code> 自定义底部工具栏，<code>imageRender</code> 自定义预览内容容器。两者的 <code>info</code> 都会回传 <code>transform</code>、<code>current</code>、<code>total</code>、<code>image</code> 等信息。</p>',2)),e(u,{title:"自定义工具栏与预览内容",source:p(Bt)},{default:x(()=>[e(Mt)]),_:1},8,["source"]),o[8]||(o[8]=X(`<h2 id="api" tabindex="-1">API</h2><h3 id="image-props" tabindex="-1">Image Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>src</td><td>图片地址</td><td><code>string</code></td><td>-</td></tr><tr><td>alt</td><td>图片描述</td><td><code>string</code></td><td>-</td></tr><tr><td>width</td><td>宽度</td><td><code>number | string</code></td><td>-</td></tr><tr><td>height</td><td>高度</td><td><code>number | string</code></td><td>-</td></tr><tr><td>preview</td><td>预览配置，<code>false</code> 时禁用</td><td><code>boolean | PreviewConfig</code></td><td><code>true</code></td></tr><tr><td>fallback</td><td>加载失败时的替代图片地址</td><td><code>string</code></td><td>-</td></tr><tr><td>placeholder</td><td>加载占位：<code>true</code> 显示骨架动画，或自定义 VNode</td><td><code>boolean | VNode | (() =&gt; VNode)</code></td><td><code>false</code></td></tr><tr><td>rootClassName</td><td>根节点 class</td><td><code>string</code></td><td>-</td></tr><tr><td>onError</td><td>加载失败回调</td><td><code>(e: Event) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="previewconfig" tabindex="-1">PreviewConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open</td><td>受控：是否打开预览</td><td><code>boolean</code></td><td>-</td></tr><tr><td>onOpenChange</td><td>预览开关变化回调</td><td><code>(open: boolean) =&gt; void</code></td><td>-</td></tr><tr><td>src</td><td>自定义预览图片地址（与 thumb 不同）</td><td><code>string</code></td><td>-</td></tr><tr><td>closeIcon</td><td>自定义关闭图标，<code>false</code> 隐藏</td><td><code>VNode | (() =&gt; VNode) | false</code></td><td><code>&lt;CloseOutlined /&gt;</code></td></tr><tr><td>cover</td><td>自定义 hover 遮罩内容</td><td><code>VNode | (() =&gt; VNode)</code></td><td>-</td></tr><tr><td>mask</td><td>遮罩配置：<code>false</code> 隐藏遮罩，对象形式可配置可点击性</td><td><code>boolean | MaskType</code></td><td><code>true</code></td></tr><tr><td>scaleStep</td><td>缩放每步倍率（1 + scaleStep）</td><td><code>number</code></td><td><code>0.5</code></td></tr><tr><td>minScale</td><td>最小缩放</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>maxScale</td><td>最大缩放</td><td><code>number</code></td><td><code>50</code></td></tr><tr><td>movable</td><td>是否可拖拽移动</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>getContainer</td><td>预览挂载容器；<code>false</code> 时原地渲染</td><td><code>string | HTMLElement | (() =&gt; HTMLElement) | false</code></td><td><code>document.body</code></td></tr><tr><td>zIndex</td><td>预览根节点 z-index</td><td><code>number</code></td><td><code>1080</code></td></tr><tr><td>onTransform</td><td>预览 transform 变化回调</td><td><code>(info: { transform: TransformType; action: TransformAction }) =&gt; void</code></td><td>-</td></tr><tr><td>imageRender</td><td>自定义预览内容渲染</td><td><code>(originalNode: VNode, info: ImageRenderInfoType) =&gt; VNode</code></td><td>-</td></tr><tr><td>toolbarRender</td><td>自定义底部工具栏渲染（参考 AntD v6）</td><td><code>(originalNode: VNode, info: ToolbarRenderInfoType) =&gt; VNode</code></td><td>-</td></tr><tr><td><s>actionsRender</s></td><td>已废弃，请使用 <code>toolbarRender</code></td><td><code>(originalNode: VNode, info: ToolbarRenderInfoType) =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="imagerenderinfotype--toolbarrenderinfotype" tabindex="-1">ImageRenderInfoType / ToolbarRenderInfoType</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">ImageRenderInfoType</span> <span class="token punctuation">{</span>
  transform<span class="token operator">:</span> TransformType
  current<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 当前索引（PreviewGroup）</span>
  total<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 图片总数（PreviewGroup）</span>
  image<span class="token operator">:</span> ImgInfo <span class="token comment">// 当前预览图片信息</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ToolbarRenderInfoType</span> <span class="token punctuation">{</span>
  transform<span class="token operator">:</span> TransformType
  current<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  total<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  image<span class="token operator">:</span> ImgInfo
  actions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">onFlipY</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
    <span class="token function-variable function">onFlipX</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
    <span class="token function-variable function">onRotateLeft</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
    <span class="token function-variable function">onRotateRight</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
    <span class="token function-variable function">onZoomOut</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
    <span class="token function-variable function">onZoomIn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
    <span class="token function-variable function">onReset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
    <span class="token function-variable function">onClose</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
    onActive<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>offset<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token comment">// -1 上一张 / 1 下一张</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="masktype" tabindex="-1">MaskType</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>enabled</td><td>是否启用遮罩（hover 提示层）</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>closable</td><td>点击遮罩是否可关闭预览</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="previewgroup-props" tabindex="-1">PreviewGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>preview</td><td>预览配置，<code>false</code> 时禁用</td><td><code>boolean | PreviewConfig</code></td><td><code>true</code></td></tr><tr><td>items</td><td>预览图片项（无子组件时用）</td><td><code>(string | ImgInfo)[]</code></td><td>-</td></tr><tr><td>current</td><td>受控：当前预览索引</td><td><code>number</code></td><td>-</td></tr><tr><td>onChange</td><td>切换预览图片回调</td><td><code>(current: number, prevCurrent: number) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="transformtype" tabindex="-1">TransformType</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">TransformType</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 平移 X</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 平移 Y</span>
  rotate<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 旋转角度</span>
  scale<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 缩放倍数</span>
  flipX<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">// 水平翻转</span>
  flipY<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">// 垂直翻转</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="transformaction" tabindex="-1">TransformAction</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">type</span> <span class="token class-name">TransformAction</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&#39;flipY&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;flipX&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;rotateLeft&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;rotateRight&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;zoomIn&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;zoomOut&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;reset&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;close&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;prev&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;next&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;wheel&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;doubleClick&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;move&#39;</span>
</code></pre><h3 id="imginfo" tabindex="-1">ImgInfo</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">ImgInfo</span> <span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span>
  alt<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>
  height<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="-7" tabindex="-1">预览操作</h3><table><thead><tr><th>操作</th><th>说明</th><th>快捷键</th></tr></thead><tbody><tr><td>左右翻转</td><td>水平翻转图片</td><td>-</td></tr><tr><td>上下翻转</td><td>垂直翻转图片</td><td>-</td></tr><tr><td>向左/右旋转</td><td>旋转 90°</td><td>-</td></tr><tr><td>放大/缩小</td><td>缩放图片</td><td>滚轮</td></tr><tr><td>上一张/下一张</td><td>切换图片（PreviewGroup）</td><td>← / →</td></tr><tr><td>关闭</td><td>关闭预览</td><td>Esc</td></tr><tr><td>重置</td><td>双击图片重置/放大</td><td>-</td></tr><tr><td>拖拽移动</td><td>按住图片拖动</td><td>-</td></tr></tbody></table>`,19))])}}};export{qt as default};
