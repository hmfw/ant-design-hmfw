import{S as en}from"./Space-BxpGTspH.js";import{o as E,N as wn,q as Bn,Q as fn,w as un,n as t,m as V,E as W,f as m,F as zn,c as Zn,T as Tn,t as _n,r as Un,B as $n,A as O,i as on,R as C,K as c,k as xn,h as f,_ as Wn,H as On,l as kn}from"./index-Dxep-jrR.js";import{c as g}from"./cls-S9IiI6wd.js";import{I as q}from"./Icon-DATzad6v.js";import{Z as In,S as hn,R as Fn,a as Mn,b as Ln}from"./ZoomOutOutlined-I3AuU5g8.js";import{L as Jn}from"./LeftOutlined-B1PhMOsW.js";import{R as An}from"./RightOutlined-sqtcDwlp.js";import{K as gn}from"./event-CZUxRbwU.js";import{C as Dn}from"./CloseOutlined-Cg7mwYr0.js";import{B as Yn}from"./Button-Dr1TfEzc.js";import"./LoadingOutlined-CKq07YS5.js";let sn=0,jn="";function Gn(){typeof document>"u"||(sn===0&&(jn=document.body.style.overflow,document.body.style.overflow="hidden"),sn+=1)}function yn(){typeof document>"u"||(sn=Math.max(0,sn-1),sn===0&&(document.body.style.overflow=jn))}function bn(n){return n==null?null:typeof n=="function"?n():n}function vn(n){return typeof n=="boolean"?n?{}:null:n??{}}function Cn(n){let e=bn(n.cover),p;Un(n.mask)?e||(e=n.mask):p=n.mask;let o=!0,k=!0;return typeof p=="boolean"?o=p:p&&typeof p=="object"&&(p.enabled!==void 0&&(o=p.enabled),p.closable!==void 0&&(k=p.closable)),{enabled:o,closable:k,coverNode:e}}const dn=()=>({x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1}),Pn=Symbol("PreviewGroup"),Nn=E({name:"ImagePreview",props:{prefixCls:{type:String,required:!0},src:{type:String,default:""},alt:String,config:{type:Object,default:()=>({})},visible:{type:Boolean,default:!1},onClose:{type:Function,required:!0},onPrev:Function,onNext:Function,hasPrev:Boolean,hasNext:Boolean,current:Number,total:Number,countRender:Function,classNames:Object,styles:Object},setup(n){const s=W(dn()),e=W(!1),p=m(()=>n.config.scaleStep??.5),o=m(()=>n.config.minScale??1),k=m(()=>n.config.maxScale??50),N=m(()=>n.config.movable!==!1),x=a=>{var d,b;(b=(d=n.config).onTransform)==null||b.call(d,{transform:{...s.value},action:a})},y=()=>{s.value=dn(),x("reset")};fn(()=>n.visible,a=>{a?(s.value=dn(),Gn()):yn()}),fn(()=>n.src,()=>{e.value=!0,s.value=dn(),_n(()=>{e.value=!1})});const S=(a,d)=>{s.value={...s.value,scale:Math.min(Math.max(a,o.value),k.value)},x(d)},w=()=>S(s.value.scale*(1+p.value),"zoomIn"),P=()=>S(s.value.scale/(1+p.value),"zoomOut"),B=()=>{s.value={...s.value,rotate:s.value.rotate-90},x("rotateLeft")},Z=()=>{s.value={...s.value,rotate:s.value.rotate+90},x("rotateRight")},F=()=>{s.value={...s.value,flipX:!s.value.flipX},x("flipX")},T=()=>{s.value={...s.value,flipY:!s.value.flipY},x("flipY")},_=a=>{var d,b;n.visible&&(a.key===gn.ESCAPE?n.onClose():a.key===gn.ARROW_LEFT&&n.hasPrev?(d=n.onPrev)==null||d.call(n):a.key===gn.ARROW_RIGHT&&n.hasNext&&((b=n.onNext)==null||b.call(n)))};typeof window<"u"&&(window.addEventListener("keydown",_),un(()=>window.removeEventListener("keydown",_))),un(()=>{n.visible&&yn()});const l=a=>{a.preventDefault(),a.deltaY<0?w():P(),x("wheel")};let i=!1,R=0,z=0,ln=0,r=0;const v=a=>{N.value&&(a.preventDefault(),i=!0,R=a.clientX,z=a.clientY,ln=s.value.x,r=s.value.y,window.addEventListener("mousemove",I),window.addEventListener("mouseup",j))},I=a=>{i&&(s.value={...s.value,x:ln+(a.clientX-R),y:r+(a.clientY-z)})},j=()=>{i&&(i=!1,window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",j),x("move"))};un(()=>{window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",j)});const U=()=>{s.value.scale!==1?y():S(2,"doubleClick")},M=m(()=>Cn(n.config)),L=a=>{a.target===a.currentTarget&&M.value.closable&&n.onClose()},u=`${n.prefixCls}-preview`,pn=()=>{const a=n.config.closeIcon;return a===!1?null:a?bn(a):t(q,{component:Dn},null)},cn=m(()=>{const a=s.value,d=a.scale*(a.flipX?-1:1),b=a.scale*(a.flipY?-1:1);return{transform:`translate3d(${a.x}px, ${a.y}px, 0) scale3d(${d}, ${b}, 1) rotate(${a.rotate}deg)`,transition:i||e.value?"none":"transform 0.3s",willChange:"transform",cursor:N.value?"grab":"default"}}),J=m(()=>({url:n.src,alt:n.alt})),Sn=a=>{var d,b;a<0?(d=n.onPrev)==null||d.call(n):a>0&&((b=n.onNext)==null||b.call(n))},Rn={onFlipY:T,onFlipX:F,onRotateLeft:B,onRotateRight:Z,onZoomOut:P,onZoomIn:w,onReset:y,onClose:n.onClose,onActive:Sn},qn=()=>{var a,d,b,$,A,D,Y,G,X,H,K,Q,nn,tn;return t("div",{class:g(`${u}-operations`,(a=n.classNames)==null?void 0:a.operations),style:(d=n.styles)==null?void 0:d.operations,onClick:rn=>rn.stopPropagation()},[t("button",{class:g(`${u}-op-btn`,(b=n.classNames)==null?void 0:b.operationBtn),style:($=n.styles)==null?void 0:$.operationBtn,onClick:F,title:"左右翻转"},[t(q,{component:hn},null)]),t("button",{class:g(`${u}-op-btn`,(A=n.classNames)==null?void 0:A.operationBtn),style:(D=n.styles)==null?void 0:D.operationBtn,onClick:T,title:"上下翻转"},[t(q,{component:hn,rotate:90},null)]),t("button",{class:g(`${u}-op-btn`,(Y=n.classNames)==null?void 0:Y.operationBtn),style:(G=n.styles)==null?void 0:G.operationBtn,onClick:B,title:"向左旋转"},[t(q,{component:Fn},null)]),t("button",{class:g(`${u}-op-btn`,(X=n.classNames)==null?void 0:X.operationBtn),style:(H=n.styles)==null?void 0:H.operationBtn,onClick:Z,title:"向右旋转"},[t(q,{component:Mn},null)]),t("button",{class:g(`${u}-op-btn`,{[`${u}-op-btn-disabled`]:s.value.scale<=o.value},(K=n.classNames)==null?void 0:K.operationBtn),style:(Q=n.styles)==null?void 0:Q.operationBtn,onClick:P,title:"缩小"},[t(q,{component:Ln},null)]),t("button",{class:g(`${u}-op-btn`,{[`${u}-op-btn-disabled`]:s.value.scale>=k.value},(nn=n.classNames)==null?void 0:nn.operationBtn),style:(tn=n.styles)==null?void 0:tn.operationBtn,onClick:w,title:"放大"},[t(q,{component:In},null)])])},Vn=()=>{const a=qn(),d=n.config.toolbarRender??n.config.actionsRender;return d?d(a,{transform:{...s.value},current:n.current,total:n.total,image:J.value,actions:Rn}):a},En=()=>{var d,b;const a=t("img",{src:n.src,alt:n.alt,class:g(`${u}-img`,(d=n.classNames)==null?void 0:d.previewImg),style:[cn.value,(b=n.styles)==null?void 0:b.previewImg],draggable:!1,onMousedown:v,onDblclick:U,onClick:$=>$.stopPropagation()},null);return n.config.imageRender?n.config.imageRender(a,{transform:{...s.value},current:n.current,total:n.total,image:J.value}):a};return()=>{const a=n.total!=null&&n.total>1;return t(Tn,{to:"body"},{default:()=>[t(Zn,{name:`${u}-fade`},{default:()=>{var d,b,$,A,D,Y,G,X,H,K,Q,nn,tn,rn;return[n.visible&&t("div",{class:g(`${u}-root`,(d=n.classNames)==null?void 0:d.preview),style:[n.config.zIndex!=null?{zIndex:n.config.zIndex}:void 0,(b=n.styles)==null?void 0:b.preview],onClick:L},[t("div",{class:g(`${u}-mask`,{[`${u}-mask-hidden`]:!M.value.enabled},($=n.classNames)==null?void 0:$.previewMask),style:(A=n.styles)==null?void 0:A.previewMask},null),t("button",{class:g(`${u}-close`,(D=n.classNames)==null?void 0:D.closeBtn),style:(Y=n.styles)==null?void 0:Y.closeBtn,onClick:n.onClose,title:"关闭"},[pn()]),t("div",{class:g(`${u}-wrap`,(G=n.classNames)==null?void 0:G.previewWrap),style:(X=n.styles)==null?void 0:X.previewWrap,onClick:L,onWheel:l},[En()]),Vn(),a&&t("div",{class:g(`${u}-count`,(H=n.classNames)==null?void 0:H.count),style:(K=n.styles)==null?void 0:K.count},[n.countRender?n.countRender((n.current??0)+1,n.total):`${(n.current??0)+1} / ${n.total}`]),n.hasPrev&&t("button",{class:g(`${u}-switch`,`${u}-switch-left`,(Q=n.classNames)==null?void 0:Q.switchBtn),style:(nn=n.styles)==null?void 0:nn.switchBtn,onClick:mn=>{var an;mn.stopPropagation(),(an=n.onPrev)==null||an.call(n)}},[t(q,{component:Jn},null)]),n.hasNext&&t("button",{class:g(`${u}-switch`,`${u}-switch-right`,(tn=n.classNames)==null?void 0:tn.switchBtn),style:(rn=n.styles)==null?void 0:rn.switchBtn,onClick:mn=>{var an;mn.stopPropagation(),(an=n.onNext)==null||an.call(n)}},[t(q,{component:An},null)])])]}})]})}}}),h=E({name:"Image",inheritAttrs:!1,props:{src:String,alt:String,width:[Number,String],height:[Number,String],preview:{type:[Boolean,Object],default:!0},fallback:String,placeholder:{type:[Boolean,Object,Function],default:!1},rootClassName:String,classNames:Object,styles:Object,onError:Function},setup(n,{attrs:s}){const e=wn("image"),p=W("loading"),o=W(!1),k=Bn(Pn,null);fn(()=>n.src,()=>{p.value="loading"});const N=()=>{p.value="loaded"},x=r=>{var v;p.value="error",(v=n.onError)==null||v.call(n,r)},y=m(()=>vn(k?k.preview():n.preview)),S=m(()=>y.value!==null&&p.value!=="error"),w=m(()=>{var r,v;return((r=y.value)==null?void 0:r.open)??((v=y.value)==null?void 0:v.visible)}),P=m(()=>w.value!==void 0),B=m(()=>P.value?!!w.value:o.value),Z=r=>{var I,j;const v=y.value;v&&((I=v.onOpenChange)==null||I.call(v,r),(j=v.onVisibleChange)==null||j.call(v,r,!r))},F=r=>{P.value||(o.value=r),Z(r)},T=()=>{var r;return{url:((r=y.value)==null?void 0:r.src)??n.src??"",alt:n.alt,width:n.width,height:n.height}},_=()=>{S.value&&(k?k.open(T):F(!0))};if(k){const r=k.register(T);un(r)}const l=m(()=>({width:typeof n.width=="number"?`${n.width}px`:n.width,height:typeof n.height=="number"?`${n.height}px`:n.height})),i=m(()=>p.value==="error"&&n.fallback?n.fallback:n.src),R=m(()=>{var r;return((r=y.value)==null?void 0:r.src)??n.src??""}),z=m(()=>y.value?Cn(y.value):null),ln=()=>{var v,I,j,U;const r=n.placeholder;return r?r===!0?t("div",{class:g(`${e}-placeholder`,(v=n.classNames)==null?void 0:v.placeholder),style:(I=n.styles)==null?void 0:I.placeholder},null):t("div",{class:g(`${e}-placeholder`,(j=n.classNames)==null?void 0:j.placeholder),style:(U=n.styles)==null?void 0:U.placeholder},[bn(r)]):null};return()=>{var r,v,I,j,U,M,L,u,pn,cn,J;return t("div",{class:g(e,n.rootClassName,s.class,{[`${e}-preview`]:S.value,[`${e}-error`]:p.value==="error"&&!n.fallback},(r=n.classNames)==null?void 0:r.root),style:[l.value,s.style,(v=n.styles)==null?void 0:v.root]},[p.value==="loading"&&ln(),p.value==="error"&&!n.fallback?t("div",{class:g(`${e}-error-placeholder`,(I=n.classNames)==null?void 0:I.error),style:(j=n.styles)==null?void 0:j.error},[t("span",null,[V("图片加载失败")])]):t("img",{src:i.value,alt:n.alt,class:g(`${e}-img`,(U=n.classNames)==null?void 0:U.img),style:(M=n.styles)==null?void 0:M.img,onLoad:N,onError:x,onClick:_},null),S.value&&p.value==="loaded"&&((L=z.value)==null?void 0:L.enabled)&&t("div",{class:g(`${e}-mask`,(u=n.classNames)==null?void 0:u.mask),style:(pn=n.styles)==null?void 0:pn.mask,onClick:_},[z.value.coverNode??t("span",{class:g(`${e}-mask-info`,(cn=n.classNames)==null?void 0:cn.maskInfo),style:(J=n.styles)==null?void 0:J.maskInfo},[t(q,{component:In},null),V(" "),t("span",null,[V("预览")])])]),!k&&y.value&&t(Nn,{prefixCls:e,src:R.value,alt:n.alt,config:y.value,visible:B.value,onClose:()=>F(!1),classNames:n.classNames,styles:n.styles},null)])}}}),Xn=E({name:"PreviewGroup",props:{preview:{type:[Boolean,Object],default:!0},items:{type:Array,default:void 0},current:Number,onChange:Function},setup(n,{slots:s}){const e=wn("image"),p=W([]),o=W(0),k=W(!1),N=m(()=>vn(n.preview)),x=m(()=>{var l,i;return((l=N.value)==null?void 0:l.open)??((i=N.value)==null?void 0:i.visible)}),y=m(()=>x.value!==void 0?!!x.value:k.value),S=m(()=>n.current),w=m(()=>S.value!==void 0?S.value:o.value),P=m(()=>n.items?n.items.map(l=>typeof l=="string"?{url:l}:l):p.value.map(l=>l())),B=l=>{var R;const i=w.value;n.current===void 0&&(o.value=l),l!==i&&((R=n.onChange)==null||R.call(n,l,i))},Z=l=>{var R,z;x.value===void 0&&(k.value=l);const i=N.value;i&&((R=i.onOpenChange)==null||R.call(i,l),(z=i.onVisibleChange)==null||z.call(i,l,!l))};$n(Pn,{preview:()=>n.preview,register(l){return p.value.push(l),()=>{const i=p.value.indexOf(l);i>=0&&p.value.splice(i,1)}},open(l){const i=p.value.indexOf(l);B(i>=0?i:0),Z(!0)}});const T=m(()=>{var l;return((l=P.value[w.value])==null?void 0:l.url)??""}),_=m(()=>{var l;return(l=P.value[w.value])==null?void 0:l.alt});return()=>{var l;return t(zn,null,[(l=s.default)==null?void 0:l.call(s),N.value&&t(Nn,{prefixCls:e,src:T.value,alt:_.value,config:N.value,visible:y.value,current:w.value,total:P.value.length,hasPrev:w.value>0,hasNext:w.value<P.value.length-1,onPrev:()=>B(w.value-1),onNext:()=>B(w.value+1),onClose:()=>Z(!1),classNames:void 0,styles:void 0},null)])}}}),Hn=E({__name:"ImageBasic",setup(n){return(s,e)=>(O(),on(c(en),{wrap:""},{default:C(()=>[t(c(h),{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:"200"}),t(c(h),{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:"200",preview:!1}),t(c(h),{src:"error.jpg",width:"200",fallback:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"})]),_:1}))}}),Kn=`<template>
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
`,Qn={style:{display:"flex","flex-direction":"column",gap:"32px"}},nt={style:{display:"flex",gap:"16px"}},tt=E({__name:"ImageClassNames",setup(n){return(s,e)=>(O(),xn("div",Qn,[f("div",null,[e[0]||(e[0]=f("div",{style:{"margin-bottom":"12px",color:"#666"}},"自定义根容器与图片样式：",-1)),t(c(h),{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:"200",preview:!1,"class-names":{root:"custom-root",img:"custom-img"}})]),f("div",null,[e[1]||(e[1]=f("div",{style:{"margin-bottom":"12px",color:"#666"}},"自定义 hover 遮罩与遮罩文本：",-1)),t(c(h),{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:"200","class-names":{mask:"custom-mask",maskInfo:"custom-mask-info"}})]),f("div",null,[e[2]||(e[2]=f("div",{style:{"margin-bottom":"12px",color:"#666"}},"自定义预览弹层样式（点击图片预览）：",-1)),t(c(h),{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:"200","class-names":{preview:"custom-preview",previewMask:"custom-preview-mask",operations:"custom-operations",operationBtn:"custom-operation-btn"}})]),f("div",null,[e[3]||(e[3]=f("div",{style:{"margin-bottom":"12px",color:"#666"}},"自定义占位与错误状态：",-1)),f("div",nt,[t(c(h),{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:"200",placeholder:!0,"class-names":{placeholder:"custom-placeholder"}}),t(c(h),{src:"invalid-url",width:"200","class-names":{error:"custom-error"}})])]),f("div",null,[e[4]||(e[4]=f("div",{style:{"margin-bottom":"12px",color:"#666"}},"使用内联样式对象：",-1)),t(c(h),{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:"200",styles:{root:{borderRadius:"16px",overflow:"hidden",boxShadow:"0 4px 12px rgba(0,0,0,0.15)"},img:{transition:"transform 0.3s"}}})])]))}}),at=Wn(tt,[["__scopeId","data-v-b1c18aad"]]),st=`<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义根容器与图片 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">自定义根容器与图片样式：</div>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        width="200"
        :preview="false"
        :class-names="{
          root: 'custom-root',
          img: 'custom-img',
        }"
      />
    </div>

    <!-- 场景 2：自定义 hover 遮罩 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">自定义 hover 遮罩与遮罩文本：</div>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        width="200"
        :class-names="{
          mask: 'custom-mask',
          maskInfo: 'custom-mask-info',
        }"
      />
    </div>

    <!-- 场景 3：自定义预览弹层 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">自定义预览弹层样式（点击图片预览）：</div>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        width="200"
        :class-names="{
          preview: 'custom-preview',
          previewMask: 'custom-preview-mask',
          operations: 'custom-operations',
          operationBtn: 'custom-operation-btn',
        }"
      />
    </div>

    <!-- 场景 4：自定义占位与错误状态 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">自定义占位与错误状态：</div>
      <div style="display: flex; gap: 16px">
        <Image
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          width="200"
          :placeholder="true"
          :class-names="{
            placeholder: 'custom-placeholder',
          }"
        />
        <Image
          src="invalid-url"
          width="200"
          :class-names="{
            error: 'custom-error',
          }"
        />
      </div>
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">使用内联样式对象：</div>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        width="200"
        :styles="{
          root: {
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
          img: {
            transition: 'transform 0.3s',
          },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Image } from 'ant-design-hmfw'
<\/script>

<style scoped>
/* 场景 1：根容器与图片 */
:deep(.custom-root) {
  border: 3px solid transparent;
  border-radius: 12px;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  overflow: hidden;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

:deep(.custom-img) {
  transition: transform 0.5s ease;
}

:deep(.custom-root:hover .custom-img) {
  transform: scale(1.05);
}

/* 场景 2：hover 遮罩 */
:deep(.custom-mask) {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%);
  backdrop-filter: blur(4px);
}

:deep(.custom-mask-info) {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* 场景 3：预览弹层（使用 :global() 因为预览挂载到 body） */
:global(.custom-preview) {
  background: rgba(0, 0, 0, 0.92);
}

:global(.custom-preview-mask) {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
}

:global(.custom-operations) {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 8px 16px;
}

:global(.custom-operation-btn) {
  color: #fff;
  transition: all 0.3s;
}

:global(.custom-operation-btn:hover) {
  transform: scale(1.2);
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
}

/* 场景 4：占位与错误 */
:deep(.custom-placeholder) {
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f7ff 100%);
  border: 2px dashed #91d5ff;
}

:deep(.custom-error) {
  background: linear-gradient(135deg, #fff2e8 0%, #ffece0 100%);
  border: 2px dashed #ffbb96;
}

:deep(.custom-error .hmfw-image-error-icon) {
  color: #ff7a45;
  font-size: 32px;
}
</style>
`,et=E({__name:"ImageCustomPreview",setup(n){return(s,e)=>(O(),on(c(en),{wrap:""},{default:C(()=>[t(c(h),{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:"200",preview:{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",minScale:.5,maxScale:10,scaleStep:.2}}),t(c(h),{src:"https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",width:"200",preview:{mask:{enabled:!1}}}),t(c(h),{src:"https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",width:"200",preview:{closeIcon:!1}})]),_:1}))}}),ot=`<template>
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
`,lt=E({__name:"ImagePlaceholder",setup(n){return(s,e)=>(O(),on(c(en),{direction:"vertical",size:16},{default:C(()=>[t(c(en),{wrap:""},{default:C(()=>[t(c(h),{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:"200",placeholder:""}),t(c(h),{src:"https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",width:"200",placeholder:""}),t(c(h),{src:"https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",width:"200",placeholder:""})]),_:1}),e[0]||(e[0]=f("p",{style:{color:"#999","font-size":"14px"}},"大图加载时显示占位动画",-1))]),_:1}))}}),pt=`<template>
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
`,ct=E({__name:"ImagePreviewGroup",setup(n){return(s,e)=>(O(),on(c(Xn),null,{default:C(()=>[t(c(en),null,{default:C(()=>[t(c(h),{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:"200"}),t(c(h),{src:"https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",width:"200"}),t(c(h),{src:"https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",width:"200"})]),_:1})]),_:1}))}}),rt=`<template>
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
`,it=E({__name:"ImageToolbarRender",setup(n){function s(p,o){return t("div",{style:"display:flex;flex-direction:column;align-items:center;gap:8px"},[p,t("div",{style:"display:flex;gap:12px;color:#fff;font-size:13px;align-items:center"},[t("span",null,[V("缩放 "),Math.round(o.transform.scale*100),V("%")]),t(Yn,{onClick:o.actions.onReset,style:"padding:2px 10px;border:none;border-radius:4px;background:rgba(255,255,255,.2);color:#fff;cursor:pointer"},{default:()=>[V("重置")]})])])}function e(p,o){return t("div",{style:"padding:8px;border-radius:8px;background:rgba(255,255,255,.08)"},[p])}return(p,o)=>(O(),on(c(h),{src:"https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",width:"200",preview:{toolbarRender:s,imageRender:e}},null,8,["preview"]))}}),dt=`<template>
  <Image
    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
    width="200"
    :preview="{ toolbarRender, imageRender }"
  />
</template>

<script setup lang="tsx">
import { Image, Button } from 'ant-design-hmfw'
import type { VNode } from 'vue'
import type { ToolbarRenderInfoType, ImageRenderInfoType } from 'ant-design-hmfw'

// 自定义工具栏：保留原始操作栏，并在其下方追加缩放比例与“重置”按钮
function toolbarRender(originalNode: VNode, info: ToolbarRenderInfoType) {
  return (
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
      {originalNode}
      <div style="display:flex;gap:12px;color:#fff;font-size:13px;align-items:center">
        <span>缩放 {Math.round(info.transform.scale * 100)}%</span>
        <Button
          onClick={info.actions.onReset}
          style="padding:2px 10px;border:none;border-radius:4px;background:rgba(255,255,255,.2);color:#fff;cursor:pointer"
        >
          重置
        </Button>
      </div>
    </div>
  )
}

// 自定义预览内容：给图片加一个圆角边框包裹
function imageRender(originalNode: VNode, _info: ImageRenderInfoType) {
  return <div style="padding:8px;border-radius:8px;background:rgba(255,255,255,.08)">{originalNode}</div>
}
<\/script>
`,ut={class:"markdown-body"},jt={__name:"image",setup(n,{expose:s}){return s({frontmatter:{}}),(p,o)=>{const k=On("DemoBlock");return O(),xn("div",ut,[o[0]||(o[0]=kn('<h1 id="image-图片" tabindex="-1">Image 图片</h1><p>可预览的图片。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><ul><li>需要展示图片时</li><li>加载大图时显示 loading 占位或加载失败容错处理</li><li>需要预览图片，支持缩放、旋转、翻转等操作时</li><li>多张图片需要组合预览（上一张/下一张）时</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="基础用法" tabindex="-1">基础用法</h3><p>单张图片预览，支持 fallback 回退图片。第二张禁用预览，第三张加载失败时显示 fallback。</p>',7)),t(k,{title:"基础用法",source:c(Kn)},{default:C(()=>[t(Hn)]),_:1},8,["source"]),o[1]||(o[1]=f("h3",{id:"图片组预览",tabindex:"-1"},"图片组预览",-1)),o[2]||(o[2]=f("p",null,"多张图片共享一个预览弹层，支持键盘左右键切换、Esc 关闭。",-1)),t(k,{title:"图片组预览",source:c(rt)},{default:C(()=>[t(ct)]),_:1},8,["source"]),o[3]||(o[3]=f("h3",{id:"渐进式加载",tabindex:"-1"},"渐进式加载",-1)),o[4]||(o[4]=f("p",null,"大图加载时显示占位骨架，提升用户体验。",-1)),t(k,{title:"渐进式加载",source:c(pt)},{default:C(()=>[t(lt)]),_:1},8,["source"]),o[5]||(o[5]=f("h3",{id:"自定义预览",tabindex:"-1"},"自定义预览",-1)),o[6]||(o[6]=f("p",null,"自定义预览图地址、缩放范围、关闭图标等。",-1)),t(k,{title:"自定义预览",source:c(ot)},{default:C(()=>[t(et)]),_:1},8,["source"]),o[7]||(o[7]=kn('<h3 id="自定义工具栏与预览内容" tabindex="-1">自定义工具栏与预览内容</h3><p>通过 <code>toolbarRender</code> 自定义底部工具栏，<code>imageRender</code> 自定义预览内容容器。两者的 <code>info</code> 都会回传 <code>transform</code>、<code>current</code>、<code>total</code>、<code>image</code> 等信息。</p>',2)),t(k,{title:"自定义工具栏与预览内容",source:c(dt)},{default:C(()=>[t(it)]),_:1},8,["source"]),o[8]||(o[8]=f("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),o[9]||(o[9]=f("p",null,[V("通过 "),f("code",null,"classNames"),V(" / "),f("code",null,"styles"),V(" 对各子元素做细粒度样式控制。")],-1)),t(k,{title:"语义化 className 与 style",source:c(st)},{default:C(()=>[t(at)]),_:1},8,["source"]),o[10]||(o[10]=kn(`<h2 id="api" tabindex="-1">API</h2><h3 id="image-props" tabindex="-1">Image Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>src</td><td>图片地址</td><td><code>string</code></td><td>-</td></tr><tr><td>alt</td><td>图片描述</td><td><code>string</code></td><td>-</td></tr><tr><td>width</td><td>宽度</td><td><code>number | string</code></td><td>-</td></tr><tr><td>height</td><td>高度</td><td><code>number | string</code></td><td>-</td></tr><tr><td>preview</td><td>预览配置，<code>false</code> 时禁用</td><td><code>boolean | PreviewConfig</code></td><td><code>true</code></td></tr><tr><td>fallback</td><td>加载失败时的替代图片地址</td><td><code>string</code></td><td>-</td></tr><tr><td>placeholder</td><td>加载占位：<code>true</code> 显示骨架动画，或自定义 VNode</td><td><code>boolean | VNode | (() =&gt; VNode)</code></td><td><code>false</code></td></tr><tr><td>rootClassName</td><td>根节点 class</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ImageClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ImageStyles</code></td><td>-</td></tr><tr><td>onError</td><td>加载失败回调</td><td><code>(e: Event) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="previewconfig" tabindex="-1">PreviewConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open</td><td>受控：是否打开预览</td><td><code>boolean</code></td><td>-</td></tr><tr><td>onOpenChange</td><td>预览开关变化回调</td><td><code>(open: boolean) =&gt; void</code></td><td>-</td></tr><tr><td>src</td><td>自定义预览图片地址（与 thumb 不同）</td><td><code>string</code></td><td>-</td></tr><tr><td>closeIcon</td><td>自定义关闭图标，<code>false</code> 隐藏</td><td><code>VNode | (() =&gt; VNode) | false</code></td><td><code>&lt;CloseOutlined /&gt;</code></td></tr><tr><td>cover</td><td>自定义 hover 遮罩内容</td><td><code>VNode | (() =&gt; VNode)</code></td><td>-</td></tr><tr><td>mask</td><td>遮罩配置：<code>false</code> 隐藏遮罩，对象形式可配置可点击性</td><td><code>boolean | MaskType</code></td><td><code>true</code></td></tr><tr><td>scaleStep</td><td>缩放每步倍率（1 + scaleStep）</td><td><code>number</code></td><td><code>0.5</code></td></tr><tr><td>minScale</td><td>最小缩放</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>maxScale</td><td>最大缩放</td><td><code>number</code></td><td><code>50</code></td></tr><tr><td>movable</td><td>是否可拖拽移动</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>getContainer</td><td>预览挂载容器；<code>false</code> 时原地渲染</td><td><code>string | HTMLElement | (() =&gt; HTMLElement) | false</code></td><td><code>document.body</code></td></tr><tr><td>zIndex</td><td>预览根节点 z-index</td><td><code>number</code></td><td><code>1080</code></td></tr><tr><td>onTransform</td><td>预览 transform 变化回调</td><td><code>(info: { transform: TransformType; action: TransformAction }) =&gt; void</code></td><td>-</td></tr><tr><td>imageRender</td><td>自定义预览内容渲染</td><td><code>(originalNode: VNode, info: ImageRenderInfoType) =&gt; VNode</code></td><td>-</td></tr><tr><td>toolbarRender</td><td>自定义底部工具栏渲染（参考 AntD v6）</td><td><code>(originalNode: VNode, info: ToolbarRenderInfoType) =&gt; VNode</code></td><td>-</td></tr><tr><td><s>actionsRender</s></td><td>已废弃，请使用 <code>toolbarRender</code></td><td><code>(originalNode: VNode, info: ToolbarRenderInfoType) =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="imagerenderinfotype--toolbarrenderinfotype" tabindex="-1">ImageRenderInfoType / ToolbarRenderInfoType</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">ImageRenderInfoType</span> <span class="token punctuation">{</span>
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
</code></pre><h3 id="预览操作" tabindex="-1">预览操作</h3><table><thead><tr><th>操作</th><th>说明</th><th>快捷键</th></tr></thead><tbody><tr><td>左右翻转</td><td>水平翻转图片</td><td>-</td></tr><tr><td>上下翻转</td><td>垂直翻转图片</td><td>-</td></tr><tr><td>向左/右旋转</td><td>旋转 90°</td><td>-</td></tr><tr><td>放大/缩小</td><td>缩放图片</td><td>滚轮</td></tr><tr><td>上一张/下一张</td><td>切换图片（PreviewGroup）</td><td>← / →</td></tr><tr><td>关闭</td><td>关闭预览</td><td>Esc</td></tr><tr><td>重置</td><td>双击图片重置/放大</td><td>-</td></tr><tr><td>拖拽移动</td><td>按住图片拖动</td><td>-</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">ImageClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 图片根容器</span>
  img<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// img 元素</span>
  mask<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// hover 遮罩层</span>
  maskInfo<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 遮罩内容（预览文本）</span>
  preview<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 预览弹层根容器</span>
  previewMask<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 预览遮罩层</span>
  previewWrap<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 预览图片包裹容器</span>
  previewImg<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 预览图片元素</span>
  operations<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 预览操作栏</span>
  operationBtn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 预览操作按钮</span>
  closeBtn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 预览关闭按钮</span>
  switchBtn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 预览切换按钮（左右箭头）</span>
  count<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 预览图片计数</span>
  placeholder<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 加载占位容器</span>
  error<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 错误占位容器</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ImageStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  img<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  mask<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  maskInfo<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  preview<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  previewMask<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  previewWrap<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  previewImg<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  operations<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  operationBtn<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  closeBtn<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  switchBtn<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  count<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  placeholder<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  error<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 图片主体 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image-img<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.img / styles.img 应用于此 --&gt;</span>

  <span class="token comment">&lt;!-- hover 遮罩（preview !== false 时） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image-mask<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.mask / styles.mask 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image-mask-info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.maskInfo / styles.maskInfo 应用于此 --&gt;</span>
      预览
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 加载占位状态 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image hmfw-image-placeholder<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image-placeholder-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.placeholder / styles.placeholder 应用于此 --&gt;</span>
    骨架动画或自定义内容
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 错误状态 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image hmfw-image-error<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image-error-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.error / styles.error 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image-error-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>图标<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 预览弹层（挂载到 body 或 getContainer 指定容器） --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image-preview<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.preview / styles.preview 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image-preview-mask<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.previewMask / styles.previewMask 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image-preview-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.previewWrap / styles.previewWrap 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image-preview-img<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.previewImg / styles.previewImg 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image-preview-operations<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.operations / styles.operations 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image-preview-operation-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.operationBtn / styles.operationBtn 应用于此 --&gt;</span>
      翻转/旋转/缩放等
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image-preview-close-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.closeBtn / styles.closeBtn 应用于此 --&gt;</span>
    关闭
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- PreviewGroup 场景 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image-preview-switch-btn hmfw-image-preview-switch-left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.switchBtn / styles.switchBtn 应用于此 --&gt;</span>
    左箭头
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image-preview-switch-btn hmfw-image-preview-switch-right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.switchBtn / styles.switchBtn 应用于此 --&gt;</span>
    右箭头
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-image-preview-count<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.count / styles.count 应用于此 --&gt;</span>
    1 / 3
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义 hover 遮罩 --&gt;
  &lt;Image
    src=&quot;https://example.com/image.jpg&quot;
    :class-names=&quot;{
      mask: &#39;my-mask&#39;,
      maskInfo: &#39;my-mask-info&#39;,
    }&quot;
  /&gt;

  &lt;!-- 自定义预览弹层（注意使用 :global() 因为预览挂载到 body） --&gt;
  &lt;Image
    src=&quot;https://example.com/image.jpg&quot;
    :class-names=&quot;{
      preview: &#39;my-preview&#39;,
      operations: &#39;my-operations&#39;,
      operationBtn: &#39;my-btn&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-mask) {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%);
  backdrop-filter: blur(4px);
}

:deep(.my-mask-info) {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* 预览弹层需要使用 :global() */
:global(.my-preview) {
  background: rgba(0, 0, 0, 0.92);
}

:global(.my-operations) {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
  backdrop-filter: blur(10px);
  border-radius: 24px;
}

:global(.my-btn:hover) {
  transform: scale(1.2);
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义图片容器 --&gt;
  &lt;Image
    src=&quot;https://example.com/image.jpg&quot;
    :styles=&quot;{
      root: { borderRadius: &#39;16px&#39;, overflow: &#39;hidden&#39; },
      img: { transition: &#39;transform 0.3s&#39; },
    }&quot;
  /&gt;

  &lt;!-- 自定义预览操作栏 --&gt;
  &lt;Image
    src=&quot;https://example.com/image.jpg&quot;
    :styles=&quot;{
      operations: { background: &#39;rgba(0, 0, 0, 0.8)&#39;, borderRadius: &#39;12px&#39; },
      operationBtn: { fontSize: &#39;20px&#39;, color: &#39;#fff&#39; },
    }&quot;
  /&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;Image
    src=&quot;https://example.com/image.jpg&quot;
    :styles=&quot;{
      root: { border: &#39;2px solid #1677ff&#39; },
      mask: { background: &#39;rgba(22, 119, 255, 0.7)&#39; },
      maskInfo: { fontSize: &#39;18px&#39;, fontWeight: &#39;bold&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>预览弹层（<code>preview</code>、<code>previewMask</code>、<code>previewWrap</code>、<code>previewImg</code>、<code>operations</code>、<code>operationBtn</code>、<code>closeBtn</code>、<code>switchBtn</code>、<code>count</code>）默认挂载到 <code>document.body</code>，需要使用 <code>:global()</code> 选择器</li><li>如果通过 <code>preview.getContainer</code> 指定了容器，则预览相关样式的作用域取决于该容器位置</li><li><code>placeholder</code> 和 <code>error</code> 仅在对应状态时渲染</li><li>PreviewGroup 场景下，<code>switchBtn</code> 和 <code>count</code> 才会显示</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Image 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-fill-quaternary</code></td><td>四级填充色</td><td><code>rgba(0,0,0,0.02)</code></td></tr><tr><td><code>--hmfw-color-fill-tertiary</code></td><td>三级填充色</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-color-text-quaternary</code></td><td>四级文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-z-index-popup</code></td><td>弹层层级</td><td><code>1080</code></td></tr></tbody></table>`,37))])}}};export{jt as default};
