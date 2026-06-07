import{o as ye,p as ve,l as be,m as xe}from"./icons-DrnBibzR.js";import{n as A,M as ke,K as he,m as r,r as Pe,e as h,q as $e,z as L,j as I,J as i,g as n,F as we,D as Se,G as Ce,Q as O,l as B,k as Ne}from"./index-bv5A37HL.js";import{c as S}from"./cls-S9IiI6wd.js";import{T as Ae}from"./Tooltip-BZ8tYCf1.js";import{I as U}from"./Icon-K3gH4Ffy.js";function M(e){return!e||e<0?0:e>100?100:e}function J({success:e}){if(e&&"percent"in e)return e.percent}function Y(e,l,t){let p=-1,s=-1;if(l==="step"){const c=t.steps,a=t.strokeWidth;typeof e=="string"||typeof e>"u"?(p=e==="small"?2:14,s=a??8):typeof e=="number"?[p,s]=[e,e]:Array.isArray(e)?(p=e[0]??14,s=e[1]??8):(p=e.width??14,s=e.height??8),p*=c}else if(l==="line"){const c=t==null?void 0:t.strokeWidth;typeof e=="string"||typeof e>"u"?s=c||(e==="small"?6:8):typeof e=="number"?[p,s]=[e,e]:Array.isArray(e)?(p=e[0]??-1,s=e[1]??8):(p=e.width??-1,s=e.height??8)}else if(typeof e=="string"||typeof e>"u")[p,s]=e==="small"?[60,60]:[120,120];else if(typeof e=="number")[p,s]=[e,e];else if(Array.isArray(e)){const c=e[0]??e[1]??120;[p,s]=[c,c]}else{const c=e.width??e.height??120;[p,s]=[c,c]}return[p,s]}function Le(e,l=!1){const{from:t,to:p,direction:s=l?"to left":"to right",...c}=e,a=Object.entries(c).filter(([,u])=>typeof u=="string");if(a.length>0){const u=a.map(([m,_])=>({key:parseFloat(String(m).replace(/%/g,"")),value:_})).filter(m=>!isNaN(m.key)).sort((m,_)=>m.key-_.key).map(({key:m,value:_})=>`${_} ${m}%`).join(", ");return`linear-gradient(${s}, ${u})`}return`linear-gradient(${s}, ${t||"#1677ff"}, ${p||"#1677ff"})`}function Ie(e){if(!e)return!1;let l=0,t=0,p=0;const s=e.trim();if(s.startsWith("#")){let a=s.slice(1);if(a.length===3&&(a=a.split("").map(u=>u+u).join("")),a.length>=6)l=parseInt(a.slice(0,2),16),t=parseInt(a.slice(2,4),16),p=parseInt(a.slice(4,6),16);else return!1}else{const a=s.match(/rgba?\(([^)]+)\)/i);if(!a)return!1;const u=a[1].split(",").map(m=>parseFloat(m.trim()));if(u.length<3||u.some(m=>isNaN(m)))return!1;[l,t,p]=u}return(l*299+t*587+p*114)/1e3>=178}function Oe(e){if(!e)return;if(typeof e=="string")return e;if(Array.isArray(e))return e[0];if("from"in e&&typeof e.from=="string")return e.from;const l=Object.entries(e).filter(([t,p])=>t!=="direction"&&typeof p=="string");if(l.length>0)return l[0][1]}function _e(e){const{from:l,to:t,direction:p,...s}=e,c=Object.entries(s).filter(([,a])=>typeof a=="string");return c.length>0?c.map(([a,u])=>({offsetNum:parseFloat(String(a).replace(/%/g,"")),color:u})).filter(a=>!isNaN(a.offsetNum)).sort((a,u)=>a.offsetNum-u.offsetNum).map(({offsetNum:a,color:u})=>({offset:`${a}%`,color:u})):[{offset:"0%",color:l||"#1677ff"},{offset:"100%",color:t||"#1677ff"}]}const je="#52c41a";function Ge(e){return(e==null?void 0:e.strokeColor)||je}let De=0;function Me(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!$e(e)}const Te=["normal","exception","active","success"],d=A({name:"Progress",inheritAttrs:!1,props:{prefixCls:String,rootClassName:String,classNames:Object,styles:Object,percent:{type:Number,default:0},type:{type:String,default:"line"},status:String,showInfo:{type:Boolean,default:!0},strokeWidth:Number,strokeColor:[String,Array,Object],trailColor:String,railColor:String,width:Number,size:{type:[String,Number,Object,Array],default:"medium"},format:Function,strokeLinecap:{type:String,default:"round"},success:Object,steps:[Number,Object],gapDegree:Number,gapPlacement:String,gapPosition:String,percentPosition:{type:Object,default:()=>({})},rounding:Function},setup(e,{attrs:l}){const t=ke("progress"),p=he(),s=h(()=>p.value.direction==="rtl"),c=De++,a=h(()=>e.railColor??e.trailColor),u=h(()=>{var o;return((o=e.percentPosition)==null?void 0:o.align)??"end"}),m=h(()=>{var o;return((o=e.percentPosition)==null?void 0:o.type)??"outer"}),_=h(()=>Array.isArray(e.strokeColor)?e.strokeColor[0]:e.strokeColor),ce=h(()=>{const o=Oe(e.strokeColor);return Ie(o)}),K=h(()=>{const o=J(e),v=o!==void 0?o:e.percent;return Number.parseInt(String(v??0),10)}),F=h(()=>!Te.includes(e.status)&&K.value>=100?"success":e.status||"normal"),Q=h(()=>e.size==="medium"?"default":e.size),R=h(()=>e.type==="line"),V=h(()=>R.value&&!e.steps),H=()=>{var y,b;if(!e.showInfo)return null;const o=J(e),v=R.value&&ce.value&&m.value==="inner";let f=null;m.value==="inner"||e.format||F.value!=="exception"&&F.value!=="success"?f=(e.format??(x=>`${x}%`))(M(e.percent),M(o)):F.value==="exception"?f=R.value?r(U,{component:ye},null):r(U,{component:ve},null):F.value==="success"&&(f=R.value?r(U,{component:be},null):r(U,{component:xe},null));const $=S(`${t}-indicator`,{[`${t}-indicator-bright`]:v,[`${t}-indicator-${u.value}`]:V.value,[`${t}-indicator-${m.value}`]:V.value},(y=e.classNames)==null?void 0:y.indicator),P=typeof f=="string"||typeof f=="number"?String(f):void 0;return r("span",{class:$,style:(b=e.styles)==null?void 0:b.indicator,title:P},[f])},pe=()=>{var j,D,C,G,N,T,z,W,q;const[o,v]=Y(Q.value,"line",{strokeWidth:e.strokeWidth}),f=e.strokeLinecap==="square"||e.strokeLinecap==="butt"?0:void 0,$={backgroundColor:a.value||void 0,borderRadius:f!==void 0?`${f}px`:void 0,height:`${v}px`,...(j=e.styles)==null?void 0:j.rail},P=J(e),b={width:`${M(e.percent)}%`,height:`${v}px`,borderRadius:f!==void 0?`${f}px`:void 0},g=_.value;g&&typeof g!="string"?b.background=Le(g,s.value):typeof g=="string"&&(b.background=g),Object.assign(b,((D=e.styles)==null?void 0:D.track)||{});const x=P!==void 0?{width:`${M(P)}%`,height:`${v}px`,borderRadius:f!==void 0?`${f}px`:void 0,backgroundColor:(C=e.success)==null?void 0:C.strokeColor,...(G=e.styles)==null?void 0:G.track}:null,k=H(),w=`${t}-track`;return r("div",{class:S(`${t}-body`,(N=e.classNames)==null?void 0:N.body,{[`${t}-body-layout-bottom`]:u.value==="center"&&m.value==="outer"}),style:{width:o>0?`${o}px`:"100%",...(T=e.styles)==null?void 0:T.body}},[r("div",{class:S(`${t}-rail`,(z=e.classNames)==null?void 0:z.rail),style:$},[r("div",{class:S(w,(W=e.classNames)==null?void 0:W.track),style:b},[m.value==="inner"&&k]),x&&r("div",{class:S(w,`${w}-success`,(q=e.classNames)==null?void 0:q.track),style:x},null)]),m.value==="outer"&&k])},X=h(()=>e.steps?typeof e.steps=="number"?e.steps:e.steps.count:0),Z=h(()=>{if(!(!e.steps||typeof e.steps=="number"))return e.steps.gap}),ue=()=>{var k,w,j,D;const o=X.value;if(!o)return null;const v=e.strokeWidth??8,[f,$]=Y(Q.value,"step",{steps:o,strokeWidth:v}),P=f/o,b=(e.rounding??Math.round)(o*(M(e.percent)/100)),g=[];for(let C=0;C<o;C++){const G=C<=b-1,N=Array.isArray(e.strokeColor)?e.strokeColor[C]:typeof e.strokeColor=="string"?e.strokeColor:void 0;g.push(r("div",{key:C,class:S(`${t}-steps-item`,{[`${t}-steps-item-active`]:G},(k=e.classNames)==null?void 0:k.track),style:{backgroundColor:G?N:a.value,width:`${P}px`,height:`${$}px`,...(w=e.styles)==null?void 0:w.track}},null))}const x={...(j=e.styles)==null?void 0:j.body};return Z.value!==void 0&&(x.gap=`${Z.value}px`),r("div",{class:S(`${t}-steps-body`,(D=e.classNames)==null?void 0:D.body),style:x},[g,H()])},ee=h(()=>{const o=e.size==="medium"&&e.width!==void 0?e.width:Q.value,[v]=Y(o,e.type==="dashboard"?"dashboard":"circle");return v}),me=()=>{var ne,se,re,oe,ie,de,le;const o=ee.value,v=Math.max(3/o*100,6),f=Math.min(v,Math.max(o/2-1,1)),$=e.strokeWidth??f,P=Math.max((o-$)/2,.5),y=2*Math.PI*P,b=e.type==="dashboard",g=e.gapDegree!==void 0?e.gapDegree:b?75:0,x=e.gapPlacement??e.gapPosition??(b?"bottom":void 0);let k=-90;x==="bottom"?k=90+g/2:x==="top"?k=-90+g/2:x==="start"||x==="left"?k=180+g/2-(s.value?180:0):(x==="end"||x==="right")&&(k=(s.value?180:0)+g/2);const w=y-g/360*y,j=J(e),D=M(e.percent),C=w*(1-D/100),G=j!==void 0?w*(1-M(j)/100):null,N=_.value,T=!!(N&&typeof N!="string"),z=`${t}-gradient-${c}-${o}`;let W;T?W=`url(#${z})`:typeof N=="string"&&(W=N);const q=e.showInfo&&H(),te=o<=20,fe=S(`${t}-body`,{[`${t}-circle-gradient`]:T},(ne=e.classNames)==null?void 0:ne.body),E=r("div",{class:fe,style:{width:`${o}px`,height:`${o}px`,fontSize:`${o*.15+6}px`,...(se=e.styles)==null?void 0:se.body}},[r("svg",{viewBox:`0 0 ${o} ${o}`,width:o,height:o},[T&&r("defs",null,[r("linearGradient",{id:z,gradientUnits:"userSpaceOnUse",x1:s.value?o:0,y1:o/2,x2:s.value?0:o,y2:o/2,gradientTransform:`rotate(${-k} ${o/2} ${o/2})`},[_e(N).map(({offset:ae,color:ge})=>r("stop",{key:ae,offset:ae,"stop-color":ge},null))])]),r("circle",{class:S(`${t}-circle-rail`,(re=e.classNames)==null?void 0:re.rail),cx:o/2,cy:o/2,r:P,stroke:a.value??"#f5f5f5","stroke-width":$,fill:"none","stroke-dasharray":`${w}px ${y}px`,transform:`rotate(${k} ${o/2} ${o/2})`,style:(oe=e.styles)==null?void 0:oe.rail},null),r("circle",{class:S(`${t}-circle-path`,(ie=e.classNames)==null?void 0:ie.track),cx:o/2,cy:o/2,r:P,stroke:W,"stroke-width":$,fill:"none","stroke-dasharray":`${w}px ${y}px`,"stroke-dashoffset":`${C}px`,"stroke-linecap":e.strokeLinecap,transform:`rotate(${k} ${o/2} ${o/2})`,style:(de=e.styles)==null?void 0:de.track},null),G!==null&&r("circle",{class:S(`${t}-circle-path`,`${t}-circle-path-success`,(le=e.classNames)==null?void 0:le.track),cx:o/2,cy:o/2,r:P,stroke:Ge(e.success),"stroke-width":$,fill:"none","stroke-dasharray":`${w}px ${y}px`,"stroke-dashoffset":`${G}px`,"stroke-linecap":e.strokeLinecap,transform:`rotate(${k} ${o/2} ${o/2})`},null)]),!te&&q]);return te&&q?r(Ae,{title:q},Me(E)?E:{default:()=>[E]}):E};return()=>{var b,g;const o=e.type==="circle"&&ee.value<=20,v=S(t,`${t}-status-${F.value}`,{[`${t}-${e.type==="dashboard"?"circle":e.type}`]:e.type!=="line",[`${t}-inline-circle`]:o,[`${t}-line`]:V.value,[`${t}-line-align-${u.value}`]:V.value,[`${t}-line-position-${m.value}`]:V.value,[`${t}-steps`]:!!X.value,[`${t}-show-info`]:e.showInfo,[`${t}-small`]:e.size==="small",[`${t}-rtl`]:s.value},e.rootClassName,(b=e.classNames)==null?void 0:b.root,l.class),$=l["aria-label"]??`${K.value}%`,P=l["aria-labelledby"],y={...l};return delete y["aria-label"],delete y["aria-labelledby"],delete y.class,delete y.style,r("div",Pe(y,{class:v,style:{...((g=e.styles)==null?void 0:g.root)||{},...l.style||{}},role:"progressbar","aria-valuenow":K.value,"aria-valuemin":0,"aria-valuemax":100,"aria-label":$,"aria-labelledby":P}),[X.value?ue():R.value?pe():me()])}}}),We={style:{display:"flex","flex-direction":"column",gap:"12px"}},qe=A({__name:"ProgressBasic",setup(e){return(l,t)=>(L(),I("div",We,[r(i(d),{percent:30}),r(i(d),{percent:50,status:"active"}),r(i(d),{percent:70,status:"exception"}),r(i(d),{percent:100}),r(i(d),{percent:50,"show-info":!1})]))}}),Be=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Progress :percent="30" />
    <Progress :percent="50" status="active" />
    <Progress :percent="70" status="exception" />
    <Progress :percent="100" />
    <Progress :percent="50" :show-info="false" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,Fe={style:{display:"flex",gap:"16px"}},Re=A({__name:"ProgressCircle",setup(e){return(l,t)=>(L(),I("div",Fe,[r(i(d),{type:"circle",percent:75}),r(i(d),{type:"circle",percent:70,status:"exception"}),r(i(d),{type:"circle",percent:100})]))}}),Ve=`<template>
  <div style="display: flex; gap: 16px">
    <Progress type="circle" :percent="75" />
    <Progress type="circle" :percent="70" status="exception" />
    <Progress type="circle" :percent="100" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,ze={style:{display:"flex","flex-direction":"column",gap:"16px"}},Ee=A({__name:"ProgressCustom",setup(e){return(l,t)=>(L(),I("div",ze,[n("div",null,[t[0]||(t[0]=n("div",{style:{"margin-bottom":"8px"}},"Custom Size (number)",-1)),r(i(d),{type:"circle",percent:75,size:80})]),n("div",null,[t[1]||(t[1]=n("div",{style:{"margin-bottom":"8px"}},"Small Size",-1)),r(i(d),{type:"circle",percent:75,size:"small"})]),n("div",null,[t[2]||(t[2]=n("div",{style:{"margin-bottom":"8px"}},"Custom Gap Degree",-1)),r(i(d),{type:"dashboard",percent:75,"gap-degree":30})]),n("div",null,[t[3]||(t[3]=n("div",{style:{"margin-bottom":"8px"}},"Square Linecap",-1)),r(i(d),{type:"circle",percent:75,"stroke-linecap":"square"})])]))}}),Ue=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <div style="margin-bottom: 8px">Custom Size (number)</div>
      <Progress type="circle" :percent="75" :size="80" />
    </div>
    <div>
      <div style="margin-bottom: 8px">Small Size</div>
      <Progress type="circle" :percent="75" size="small" />
    </div>
    <div>
      <div style="margin-bottom: 8px">Custom Gap Degree</div>
      <Progress type="dashboard" :percent="75" :gap-degree="30" />
    </div>
    <div>
      <div style="margin-bottom: 8px">Square Linecap</div>
      <Progress type="circle" :percent="75" stroke-linecap="square" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,Je={style:{display:"flex",gap:"16px"}},Ke=A({__name:"ProgressDashboard",setup(e){return(l,t)=>(L(),I("div",Je,[r(i(d),{type:"dashboard",percent:75}),r(i(d),{type:"dashboard",percent:75,"gap-degree":30})]))}}),Qe=`<template>
  <div style="display: flex; gap: 16px">
    <Progress type="dashboard" :percent="75" />
    <Progress type="dashboard" :percent="75" :gap-degree="30" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,He=A({__name:"ProgressDynamic",setup(e){const l=Se(0);function t(){l.value=Math.min(l.value+10,100)}function p(){l.value=Math.max(l.value-10,0)}return(s,c)=>(L(),I(we,null,[r(i(d),{percent:l.value},null,8,["percent"]),n("div",{style:{display:"flex",gap:"8px","margin-top":"12px"}},[n("button",{onClick:p},"-"),n("button",{onClick:t},"+")])],64))}}),Xe=`<template>
  <Progress :percent="percent" />
  <div style="display: flex; gap: 8px; margin-top: 12px">
    <button @click="decline">-</button>
    <button @click="increase">+</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Progress } from 'ant-design-hmfw'

const percent = ref(0)

function increase() {
  percent.value = Math.min(percent.value + 10, 100)
}

function decline() {
  percent.value = Math.max(percent.value - 10, 0)
}
<\/script>
`,Ye={style:{display:"flex","flex-direction":"column",gap:"16px"}},Ze=A({__name:"ProgressGapPlacement",setup(e){return(l,t)=>(L(),I("div",Ye,[n("div",null,[t[0]||(t[0]=n("span",{style:{display:"inline-block",width:"180px"}},"默认（gapPlacement=bottom）",-1)),r(i(d),{type:"dashboard",percent:75,width:80})]),n("div",null,[t[1]||(t[1]=n("span",{style:{display:"inline-block",width:"180px"}},"gapPlacement=top",-1)),r(i(d),{type:"dashboard",percent:75,width:80,"gap-placement":"top"})]),n("div",null,[t[2]||(t[2]=n("span",{style:{display:"inline-block",width:"180px"}},"gapPlacement=start",-1)),r(i(d),{type:"dashboard",percent:75,width:80,"gap-placement":"start"})]),n("div",null,[t[3]||(t[3]=n("span",{style:{display:"inline-block",width:"180px"}},"gapPlacement=end",-1)),r(i(d),{type:"dashboard",percent:75,width:80,"gap-placement":"end"})])]))}}),et=`<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <span style="display: inline-block; width: 180px">默认（gapPlacement=bottom）</span>
      <Progress type="dashboard" :percent="75" :width="80" />
    </div>
    <div>
      <span style="display: inline-block; width: 180px">gapPlacement=top</span>
      <Progress type="dashboard" :percent="75" :width="80" gap-placement="top" />
    </div>
    <div>
      <span style="display: inline-block; width: 180px">gapPlacement=start</span>
      <Progress type="dashboard" :percent="75" :width="80" gap-placement="start" />
    </div>
    <div>
      <span style="display: inline-block; width: 180px">gapPlacement=end</span>
      <Progress type="dashboard" :percent="75" :width="80" gap-placement="end" />
    </div>
  </div>
</template>
`,tt={style:{display:"flex","flex-direction":"column",gap:"16px"}},nt={style:{display:"flex",gap:"24px"}},st=A({__name:"ProgressGradient",setup(e){return(l,t)=>(L(),I("div",tt,[n("div",null,[t[0]||(t[0]=n("div",{style:{"margin-bottom":"8px"}},"线形渐变（from-to）",-1)),r(i(d),{percent:60,"stroke-color":{from:"#108ee9",to:"#87d068"}})]),n("div",null,[t[1]||(t[1]=n("div",{style:{"margin-bottom":"8px"}},"线形渐变（多色 stop）",-1)),r(i(d),{percent:80,"stroke-color":{"0%":"#108ee9","50%":"#87d068","100%":"#ffcb00"}})]),n("div",null,[t[2]||(t[2]=n("div",{style:{"margin-bottom":"8px"}},"成功分段 success.percent",-1)),r(i(d),{percent:60,success:{percent:30,strokeColor:"#52c41a"}})]),n("div",null,[t[3]||(t[3]=n("div",{style:{"margin-bottom":"8px"}},"圆形 / 仪表盘渐变",-1)),n("div",nt,[r(i(d),{type:"circle",percent:70,"stroke-color":{"0%":"#108ee9","100%":"#87d068"}}),r(i(d),{type:"dashboard",percent:70,"stroke-color":{"0%":"#108ee9","100%":"#87d068"}}),r(i(d),{type:"circle",percent:90,"stroke-color":{from:"#1677ff",to:"#ff4d4f"}})])])]))}}),rt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <div style="margin-bottom: 8px">线形渐变（from-to）</div>
      <Progress :percent="60" :stroke-color="{ from: '#108ee9', to: '#87d068' }" />
    </div>
    <div>
      <div style="margin-bottom: 8px">线形渐变（多色 stop）</div>
      <Progress
        :percent="80"
        :stroke-color="{
          '0%': '#108ee9',
          '50%': '#87d068',
          '100%': '#ffcb00',
        }"
      />
    </div>
    <div>
      <div style="margin-bottom: 8px">成功分段 success.percent</div>
      <Progress :percent="60" :success="{ percent: 30, strokeColor: '#52c41a' }" />
    </div>
    <div>
      <div style="margin-bottom: 8px">圆形 / 仪表盘渐变</div>
      <div style="display: flex; gap: 24px">
        <Progress type="circle" :percent="70" :stroke-color="{ '0%': '#108ee9', '100%': '#87d068' }" />
        <Progress type="dashboard" :percent="70" :stroke-color="{ '0%': '#108ee9', '100%': '#87d068' }" />
        <Progress type="circle" :percent="90" :stroke-color="{ from: '#1677ff', to: '#ff4d4f' }" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,ot={style:{display:"flex","flex-direction":"column",gap:"16px"}},it=A({__name:"ProgressSteps",setup(e){return(l,t)=>(L(),I("div",ot,[n("div",null,[t[0]||(t[0]=n("div",{style:{"margin-bottom":"8px"}},"Steps Progress (5 steps)",-1)),r(i(d),{percent:50,steps:5})]),n("div",null,[t[1]||(t[1]=n("div",{style:{"margin-bottom":"8px"}},"Steps Progress (10 steps)",-1)),r(i(d),{percent:30,steps:10})]),n("div",null,[t[2]||(t[2]=n("div",{style:{"margin-bottom":"8px"}},"Small Steps",-1)),r(i(d),{percent:60,steps:5,size:"small"})]),n("div",null,[t[3]||(t[3]=n("div",{style:{"margin-bottom":"8px"}},"Steps with Custom Color",-1)),r(i(d),{percent:80,steps:5,"stroke-color":"#52c41a"})]),n("div",null,[t[4]||(t[4]=n("div",{style:{"margin-bottom":"8px"}},"对象形式 steps（指定段数与间距）",-1)),r(i(d),{percent:50,steps:{count:4,gap:12}})]),n("div",null,[t[5]||(t[5]=n("div",{style:{"margin-bottom":"8px"}},"分段渐变色（数组）",-1)),r(i(d),{percent:60,steps:5,"stroke-color":["#f5222d","#fa8c16","#fadb14","#52c41a","#1677ff"]})])]))}}),dt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <div style="margin-bottom: 8px">Steps Progress (5 steps)</div>
      <Progress :percent="50" :steps="5" />
    </div>
    <div>
      <div style="margin-bottom: 8px">Steps Progress (10 steps)</div>
      <Progress :percent="30" :steps="10" />
    </div>
    <div>
      <div style="margin-bottom: 8px">Small Steps</div>
      <Progress :percent="60" :steps="5" size="small" />
    </div>
    <div>
      <div style="margin-bottom: 8px">Steps with Custom Color</div>
      <Progress :percent="80" :steps="5" stroke-color="#52c41a" />
    </div>
    <div>
      <div style="margin-bottom: 8px">对象形式 steps（指定段数与间距）</div>
      <Progress :percent="50" :steps="{ count: 4, gap: 12 }" />
    </div>
    <div>
      <div style="margin-bottom: 8px">分段渐变色（数组）</div>
      <Progress :percent="60" :steps="5" :stroke-color="['#f5222d', '#fa8c16', '#fadb14', '#52c41a', '#1677ff']" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,lt={style:{display:"flex","flex-direction":"column",gap:"16px"}},at=A({__name:"ProgressV6",setup(e){return(l,t)=>(L(),I("div",lt,[n("div",null,[t[0]||(t[0]=n("span",{style:{display:"inline-block",width:"200px"}},"size=[200, 12]（数组）",-1)),r(i(d),{percent:60,size:[200,12]})]),n("div",null,[t[1]||(t[1]=n("span",{style:{display:"inline-block",width:"200px"}},"size={width:300, height:10}",-1)),r(i(d),{percent:40,size:{width:300,height:10}})]),n("div",null,[t[2]||(t[2]=n("span",{style:{display:"inline-block",width:"200px"}},"size=14（小圆形 + Tooltip）",-1)),r(i(d),{type:"circle",percent:60,size:14})]),n("div",null,[t[3]||(t[3]=n("span",{style:{display:"inline-block",width:"200px"}},"steps={count:6, gap:8}",-1)),r(i(d),{percent:50,steps:{count:6,gap:8}})]),n("div",null,[t[4]||(t[4]=n("span",{style:{display:"inline-block",width:"200px"}},"strokeColor 数组（每段不同色）",-1)),r(i(d),{percent:60,steps:5,"stroke-color":["#f5222d","#fa8c16","#fadb14","#52c41a","#1677ff"]})]),n("div",null,[t[5]||(t[5]=n("span",{style:{display:"inline-block",width:"200px"}},"rounding=Math.ceil",-1)),r(i(d),{percent:41,steps:5,rounding:Math.ceil},null,8,["rounding"])])]))}}),ct=`<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <span style="display: inline-block; width: 200px">size=[200, 12]（数组）</span>
      <Progress :percent="60" :size="[200, 12]" />
    </div>
    <div>
      <span style="display: inline-block; width: 200px">size={width:300, height:10}</span>
      <Progress :percent="40" :size="{ width: 300, height: 10 }" />
    </div>
    <div>
      <span style="display: inline-block; width: 200px">size=14（小圆形 + Tooltip）</span>
      <Progress type="circle" :percent="60" :size="14" />
    </div>
    <div>
      <span style="display: inline-block; width: 200px">steps={count:6, gap:8}</span>
      <Progress :percent="50" :steps="{ count: 6, gap: 8 }" />
    </div>
    <div>
      <span style="display: inline-block; width: 200px">strokeColor 数组（每段不同色）</span>
      <Progress :percent="60" :steps="5" :stroke-color="['#f5222d', '#fa8c16', '#fadb14', '#52c41a', '#1677ff']" />
    </div>
    <div>
      <span style="display: inline-block; width: 200px">rounding=Math.ceil</span>
      <Progress :percent="41" :steps="5" :rounding="Math.ceil" />
    </div>
  </div>
</template>
`,pt={class:"markdown-body"},vt={__name:"progress",setup(e,{expose:l}){return l({frontmatter:{}}),(p,s)=>{const c=Ce("DemoBlock");return L(),I("div",pt,[s[0]||(s[0]=n("h1",{id:"progress-",tabindex:"-1"},"Progress 进度条",-1)),s[1]||(s[1]=n("p",null,"展示操作的当前进度。",-1)),s[2]||(s[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),s[3]||(s[3]=n("ul",null,[n("li",null,"在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态"),n("li",null,"当操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时"),n("li",null,"当需要显示一个操作完成的百分比时")],-1)),s[4]||(s[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),s[5]||(s[5]=n("h3",{id:"-2",tabindex:"-1"},"进度条",-1)),s[6]||(s[6]=n("p",null,"标准的进度条。",-1)),r(c,{title:"进度条",source:i(Be)},{default:O(()=>[r(qe)]),_:1},8,["source"]),s[7]||(s[7]=n("h3",{id:"-3",tabindex:"-1"},"圆形进度",-1)),s[8]||(s[8]=n("p",null,"圆形进度条。",-1)),r(c,{title:"圆形进度",source:i(Ve)},{default:O(()=>[r(Re)]),_:1},8,["source"]),s[9]||(s[9]=n("h3",{id:"-4",tabindex:"-1"},"仪表盘",-1)),s[10]||(s[10]=n("p",null,"仪表盘样式的进度条。",-1)),r(c,{title:"仪表盘",source:i(Qe)},{default:O(()=>[r(Ke)]),_:1},8,["source"]),s[11]||(s[11]=n("h3",{id:"-5",tabindex:"-1"},"动态展示",-1)),s[12]||(s[12]=n("p",null,"会动的进度条才是好进度条。",-1)),r(c,{title:"动态展示",source:i(Xe)},{default:O(()=>[r(He)]),_:1},8,["source"]),s[13]||(s[13]=n("h3",{id:"-6",tabindex:"-1"},"步骤进度条",-1)),s[14]||(s[14]=n("p",null,"步骤进度条。",-1)),r(c,{title:"步骤进度条",source:i(dt)},{default:O(()=>[r(it)]),_:1},8,["source"]),s[15]||(s[15]=n("h3",{id:"-7",tabindex:"-1"},"渐变色",-1)),s[16]||(s[16]=n("p",null,"渐变色进度条、成功分段，以及圆形 / 仪表盘渐变。圆形与仪表盘的渐变在屏幕空间内始终保持水平方向，不受缺口旋转影响。",-1)),r(c,{title:"渐变色",source:i(rt)},{default:O(()=>[r(st)]),_:1},8,["source"]),s[17]||(s[17]=n("h3",{id:"-8",tabindex:"-1"},"自定义",-1)),s[18]||(s[18]=n("p",null,"自定义尺寸、间隙角度和线帽样式。",-1)),r(c,{title:"自定义",source:i(Ue)},{default:O(()=>[r(Ee)]),_:1},8,["source"]),s[19]||(s[19]=n("h3",{id:"-9",tabindex:"-1"},"仪表盘缺口位置",-1)),s[20]||(s[20]=n("p",null,[B("通过 "),n("code",null,"gapPlacement"),B(" 控制仪表盘缺口位置（v6 替代 "),n("code",null,"gapPosition"),B("）。")],-1)),r(c,{title:"仪表盘缺口位置",source:i(et)},{default:O(()=>[r(Ze)]),_:1},8,["source"]),s[21]||(s[21]=n("h3",{id:"v6-",tabindex:"-1"},"v6 新特性",-1)),s[22]||(s[22]=n("p",null,[n("code",null,"size"),B(" 数组形式、"),n("code",null,"steps"),B(" 对象形式、"),n("code",null,"rounding"),B(" 自定义舍入、小圆形（≤20px）自动套 Tooltip 等。")],-1)),r(c,{title:"v6 新特性",source:i(ct)},{default:O(()=>[r(at)]),_:1},8,["source"]),s[23]||(s[23]=Ne(`<h2 id="api" tabindex="-1">API</h2><h3 id="progress-props" tabindex="-1">Progress Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td><code>&#39;line&#39; | &#39;circle&#39; | &#39;dashboard&#39;</code></td><td><code>&#39;line&#39;</code></td></tr><tr><td>percent</td><td>百分比</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>status</td><td>状态</td><td><code>&#39;success&#39; | &#39;exception&#39; | &#39;normal&#39; | &#39;active&#39;</code></td><td>-</td></tr><tr><td>showInfo</td><td>是否显示进度数值或状态图标</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>strokeColor</td><td>进度条色彩，支持字符串 / 数组 / 渐变对象</td><td><code>string | string[] | ProgressGradient</code></td><td>-</td></tr><tr><td>railColor</td><td>未完成分段颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>trailColor</td><td>(已废弃) 使用 <code>railColor</code> 代替</td><td><code>string</code></td><td>-</td></tr><tr><td>strokeWidth</td><td>进度条线宽度</td><td><code>number</code></td><td><code>8</code> (line), 自适应 (circle)</td></tr><tr><td>strokeLinecap</td><td>进度条端点形状</td><td><code>&#39;round&#39; | &#39;butt&#39; | &#39;square&#39;</code></td><td><code>&#39;round&#39;</code></td></tr><tr><td>size</td><td>进度条尺寸</td><td><code>&#39;small&#39; | &#39;medium&#39; | &#39;default&#39; | number | [number, number] | { width?, height? }</code></td><td><code>&#39;medium&#39;</code></td></tr><tr><td>width</td><td>(已废弃) circle/dashboard 画布宽度，使用 <code>size</code> 代替</td><td><code>number</code></td><td><code>120</code></td></tr><tr><td>format</td><td>内容模板函数，可返回 VNode</td><td><code>(percent?: number, successPercent?: number) =&gt; VNode | string | number | null</code></td><td>-</td></tr><tr><td>steps</td><td>步骤进度条；对象形式可指定段间距</td><td><code>number | { count: number; gap: number }</code></td><td>-</td></tr><tr><td>success</td><td>成功进度条配置</td><td><code>{ percent?: number; strokeColor?: string }</code></td><td>-</td></tr><tr><td>gapDegree</td><td>圆形进度条缺口角度，dashboard 默认 75</td><td><code>number</code></td><td><code>0</code> (circle), <code>75</code> (dashboard)</td></tr><tr><td>gapPlacement</td><td>仪表盘缺口位置（v6 新 API）</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;bottom&#39;</code> (dashboard)</td></tr><tr><td>gapPosition</td><td>(已废弃) 使用 <code>gapPlacement</code> 代替</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;left&#39; | &#39;right&#39;</code></td><td>-</td></tr><tr><td>percentPosition</td><td>进度文字位置</td><td><code>{ align?: &#39;start&#39; | &#39;center&#39; | &#39;end&#39;; type?: &#39;inner&#39; | &#39;outer&#39; }</code></td><td><code>{ align: &#39;end&#39;, type: &#39;outer&#39; }</code></td></tr><tr><td>rounding</td><td>步骤进度条已激活段数舍入函数</td><td><code>(step: number) =&gt; number</code></td><td><code>Math.round</code></td></tr><tr><td>rootClassName</td><td>根元素类名</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化类名（root/body/rail/track/indicator）</td><td><code>ProgressClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化样式（root/body/rail/track/indicator）</td><td><code>ProgressStyles</code></td><td>-</td></tr></tbody></table><h3 id="progressgradient" tabindex="-1">ProgressGradient</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">ProgressGradient</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  direction<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 渐变方向，如 &#39;to right&#39;</span>
  from<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 起始颜色</span>
  to<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 结束颜色</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token comment">// 多色渐变，如 &#39;0%&#39;: &#39;#108ee9&#39;, &#39;100%&#39;: &#39;#87d068&#39;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="-10" tabindex="-1">注意事项</h3><ul><li><code>size</code> 默认值由 v5 的 <code>&#39;default&#39;</code> 改为 v6 的 <code>&#39;medium&#39;</code>，二者行为等价；<code>&#39;default&#39;</code> 会保留兼容。</li><li>圆形 <code>strokeColor</code> 渐变通过 <code>&lt;linearGradient&gt;</code> 实现，支持 <code>from/to</code> 与 <code>0%/50%/100%</code> 等百分比 stop；百分比 stop 会按数值升序排序。圆形/仪表盘使用 <code>userSpaceOnUse</code> + <code>gradientTransform</code> 抵消缺口旋转，渐变方向在屏幕空间内保持水平（RTL 下自动反向）。</li><li>圆形 <code>size &lt;= 20</code> 时自动添加 <code>inline-circle</code> class，并将 indicator 包入 <code>Tooltip</code> 显示（小圆形容纳不下文字）。</li><li><code>aria-label</code> 默认为 <code>&quot;\${percent}%&quot;</code>，可通过 attr 透传覆盖。</li><li>RTL 由 <code>ConfigProvider direction=&quot;rtl&quot;</code> 触发，渐变方向自动反转、根元素加 <code>rtl</code> class。</li></ul>`,7))])}}};export{vt as default};
