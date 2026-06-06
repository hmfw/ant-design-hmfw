import{c as yt,d as vt,C as bt,b as xt}from"./icons-CwohsDOf.js";import{m as A,L as ht,J as kt,l as r,q as Pt,d as h,p as $t,y as _,i as I,I as i,f as n,F as wt,B as St,E as Ct,P as L,k as F,j as Nt}from"./index-Qxz1plB-.js";import{c as S}from"./cls-S9IiI6wd.js";import{T as At}from"./Tooltip-CvQ21N0f.js";import{I as H}from"./Icon-BOXWN2fu.js";function D(t){return!t||t<0?0:t>100?100:t}function K({success:t}){if(t&&"percent"in t)return t.percent}function et(t,l,e){let c=-1,s=-1;if(l==="step"){const a=e.steps,p=e.strokeWidth;typeof t=="string"||typeof t>"u"?(c=t==="small"?2:14,s=p??8):typeof t=="number"?[c,s]=[t,t]:Array.isArray(t)?(c=t[0]??14,s=t[1]??8):(c=t.width??14,s=t.height??8),c*=a}else if(l==="line"){const a=e==null?void 0:e.strokeWidth;typeof t=="string"||typeof t>"u"?s=a||(t==="small"?6:8):typeof t=="number"?[c,s]=[t,t]:Array.isArray(t)?(c=t[0]??-1,s=t[1]??8):(c=t.width??-1,s=t.height??8)}else if(typeof t=="string"||typeof t>"u")[c,s]=t==="small"?[60,60]:[120,120];else if(typeof t=="number")[c,s]=[t,t];else if(Array.isArray(t)){const a=t[0]??t[1]??120;[c,s]=[a,a]}else{const a=t.width??t.height??120;[c,s]=[a,a]}return[c,s]}function _t(t,l=!1){const{from:e,to:c,direction:s=l?"to left":"to right",...a}=t,p=Object.entries(a).filter(([,m])=>typeof m=="string");if(p.length>0){const m=p.map(([b,M])=>({key:parseFloat(String(b).replace(/%/g,"")),value:M})).filter(b=>!isNaN(b.key)).sort((b,M)=>b.key-M.key).map(({key:b,value:M})=>`${M} ${b}%`).join(", ");return`linear-gradient(${s}, ${m})`}return`linear-gradient(${s}, ${e||"#1677ff"}, ${c||"#1677ff"})`}function It(t){if(!t)return!1;let l=0,e=0,c=0;const s=t.trim();if(s.startsWith("#")){let p=s.slice(1);if(p.length===3&&(p=p.split("").map(m=>m+m).join("")),p.length>=6)l=parseInt(p.slice(0,2),16),e=parseInt(p.slice(2,4),16),c=parseInt(p.slice(4,6),16);else return!1}else{const p=s.match(/rgba?\(([^)]+)\)/i);if(!p)return!1;const m=p[1].split(",").map(b=>parseFloat(b.trim()));if(m.length<3||m.some(b=>isNaN(b)))return!1;[l,e,c]=m}return(l*299+e*587+c*114)/1e3>=178}function Lt(t){if(!t)return;if(typeof t=="string")return t;if(Array.isArray(t))return t[0];if("from"in t&&typeof t.from=="string")return t.from;const l=Object.entries(t).filter(([e,c])=>e!=="direction"&&typeof c=="string");if(l.length>0)return l[0][1]}const Gt="#52c41a";function Ot(t){return(t==null?void 0:t.strokeColor)||Gt}function jt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!$t(t)}const Mt=["normal","exception","active","success"],d=A({name:"Progress",inheritAttrs:!1,props:{prefixCls:String,rootClassName:String,classNames:Object,styles:Object,percent:{type:Number,default:0},type:{type:String,default:"line"},status:String,showInfo:{type:Boolean,default:!0},strokeWidth:Number,strokeColor:[String,Array,Object],trailColor:String,railColor:String,width:Number,size:{type:[String,Number,Object,Array],default:"medium"},format:Function,strokeLinecap:{type:String,default:"round"},success:Object,steps:[Number,Object],gapDegree:Number,gapPlacement:String,gapPosition:String,percentPosition:{type:Object,default:()=>({})},rounding:Function},setup(t,{attrs:l}){const e=ht("progress"),c=kt(),s=h(()=>c.value.direction==="rtl"),a=h(()=>t.railColor??t.trailColor),p=h(()=>{var o;return((o=t.percentPosition)==null?void 0:o.align)??"end"}),m=h(()=>{var o;return((o=t.percentPosition)==null?void 0:o.type)??"outer"}),b=h(()=>Array.isArray(t.strokeColor)?t.strokeColor[0]:t.strokeColor),M=h(()=>{const o=Lt(t.strokeColor);return It(o)}),Q=h(()=>{const o=K(t),y=o!==void 0?o:t.percent;return Number.parseInt(String(y??0),10)}),R=h(()=>!Mt.includes(t.status)&&Q.value>=100?"success":t.status||"normal"),X=h(()=>t.size==="medium"?"default":t.size),V=h(()=>t.type==="line"),z=h(()=>V.value&&!t.steps),Y=()=>{var f,v;if(!t.showInfo)return null;const o=K(t),y=V.value&&M.value&&m.value==="inner";let u=null;m.value==="inner"||t.format||R.value!=="exception"&&R.value!=="success"?u=(t.format??(x=>`${x}%`))(D(t.percent),D(o)):R.value==="exception"?u=V.value?r(H,{component:yt},null):r(H,{component:vt},null):R.value==="success"&&(u=V.value?r(H,{component:bt},null):r(H,{component:xt},null));const $=S(`${e}-indicator`,{[`${e}-indicator-bright`]:y,[`${e}-indicator-${p.value}`]:z.value,[`${e}-indicator-${m.value}`]:z.value},(f=t.classNames)==null?void 0:f.indicator),k=typeof u=="string"||typeof u=="number"?String(u):void 0;return r("span",{class:$,style:(v=t.styles)==null?void 0:v.indicator,title:k},[u])},ut=()=>{var G,W,C,O,N,q,E,T,B;const[o,y]=et(X.value,"line",{strokeWidth:t.strokeWidth}),u=t.strokeLinecap==="square"||t.strokeLinecap==="butt"?0:void 0,$={backgroundColor:a.value||void 0,borderRadius:u!==void 0?`${u}px`:void 0,height:`${y}px`,...(G=t.styles)==null?void 0:G.rail},k=K(t),v={width:`${D(t.percent)}%`,height:`${y}px`,borderRadius:u!==void 0?`${u}px`:void 0},g=b.value;g&&typeof g!="string"?v.background=_t(g,s.value):typeof g=="string"&&(v.background=g),Object.assign(v,((W=t.styles)==null?void 0:W.track)||{});const x=k!==void 0?{width:`${D(k)}%`,height:`${y}px`,borderRadius:u!==void 0?`${u}px`:void 0,backgroundColor:(C=t.success)==null?void 0:C.strokeColor,...(O=t.styles)==null?void 0:O.track}:null,P=Y(),w=`${e}-track`;return r("div",{class:S(`${e}-body`,(N=t.classNames)==null?void 0:N.body,{[`${e}-body-layout-bottom`]:p.value==="center"&&m.value==="outer"}),style:{width:o>0?`${o}px`:"100%",...(q=t.styles)==null?void 0:q.body}},[r("div",{class:S(`${e}-rail`,(E=t.classNames)==null?void 0:E.rail),style:$},[r("div",{class:S(w,(T=t.classNames)==null?void 0:T.track),style:v},[m.value==="inner"&&P]),x&&r("div",{class:S(w,`${w}-success`,(B=t.classNames)==null?void 0:B.track),style:x},null)]),m.value==="outer"&&P])},Z=h(()=>t.steps?typeof t.steps=="number"?t.steps:t.steps.count:0),nt=h(()=>{if(!(!t.steps||typeof t.steps=="number"))return t.steps.gap}),mt=()=>{var P,w,G,W;const o=Z.value;if(!o)return null;const y=t.strokeWidth??8,[u,$]=et(X.value,"step",{steps:o,strokeWidth:y}),k=u/o,v=(t.rounding??Math.round)(o*(D(t.percent)/100)),g=[];for(let C=0;C<o;C++){const O=C<=v-1,N=Array.isArray(t.strokeColor)?t.strokeColor[C]:typeof t.strokeColor=="string"?t.strokeColor:void 0;g.push(r("div",{key:C,class:S(`${e}-steps-item`,{[`${e}-steps-item-active`]:O},(P=t.classNames)==null?void 0:P.track),style:{backgroundColor:O?N:a.value,width:`${k}px`,height:`${$}px`,...(w=t.styles)==null?void 0:w.track}},null))}const x={...(G=t.styles)==null?void 0:G.body};return nt.value!==void 0&&(x.gap=`${nt.value}px`),r("div",{class:S(`${e}-steps-body`,(W=t.classNames)==null?void 0:W.body),style:x},[g,Y()])},st=h(()=>{const o=t.size==="medium"&&t.width!==void 0?t.width:X.value,[y]=et(o,t.type==="dashboard"?"dashboard":"circle");return y}),gt=()=>{var ot,it,lt,dt,at,ct,pt;const o=st.value,y=Math.max(3/o*100,6),u=Math.min(y,Math.max(o/2-1,1)),$=t.strokeWidth??u,k=Math.max((o-$)/2,.5),f=2*Math.PI*k,v=t.type==="dashboard",g=t.gapDegree!==void 0?t.gapDegree:v?75:0,x=t.gapPlacement??t.gapPosition??(v?"bottom":void 0);let P=-90;x==="bottom"?P=90+g/2:x==="top"?P=-90+g/2:x==="start"||x==="left"?P=180+g/2-(s.value?180:0):(x==="end"||x==="right")&&(P=(s.value?180:0)+g/2);const w=f-g/360*f,G=K(t),W=D(t.percent),C=w*(1-W/100),O=G!==void 0?w*(1-D(G)/100):null,N=b.value,q=!!(N&&typeof N!="string"),E=`${e}-${Math.random()*1e6|0}-${o}`;let T;q?T=`url(#${E})`:typeof N=="string"&&(T=N);const B=t.showInfo&&Y(),rt=o<=20,ft=S(`${e}-body`,{[`${e}-circle-gradient`]:q},(ot=t.classNames)==null?void 0:ot.body),J=r("div",{class:ft,style:{width:`${o}px`,height:`${o}px`,fontSize:`${o*.15+6}px`,...(it=t.styles)==null?void 0:it.body}},[r("svg",{viewBox:`0 0 ${o} ${o}`,width:o,height:o},[q&&r("defs",null,[r("linearGradient",{id:E,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},[Object.entries(N).filter(([j,tt])=>j!=="direction"&&typeof tt=="string").map(([j,tt])=>{let U;return j==="from"?U="0%":j==="to"?U="100%":U=String(j).endsWith("%")?String(j):`${j}%`,r("stop",{key:j,offset:U,"stop-color":tt},null)})])]),r("circle",{class:S(`${e}-circle-rail`,(lt=t.classNames)==null?void 0:lt.rail),cx:o/2,cy:o/2,r:k,stroke:a.value??"#f5f5f5","stroke-width":$,fill:"none","stroke-dasharray":`${w}px ${f}px`,transform:`rotate(${P} ${o/2} ${o/2})`,style:(dt=t.styles)==null?void 0:dt.rail},null),r("circle",{class:S(`${e}-circle-path`,(at=t.classNames)==null?void 0:at.track),cx:o/2,cy:o/2,r:k,stroke:T,"stroke-width":$,fill:"none","stroke-dasharray":`${w}px ${f}px`,"stroke-dashoffset":`${C}px`,"stroke-linecap":t.strokeLinecap,transform:`rotate(${P} ${o/2} ${o/2})`,style:(ct=t.styles)==null?void 0:ct.track},null),O!==null&&r("circle",{class:S(`${e}-circle-path`,`${e}-circle-path-success`,(pt=t.classNames)==null?void 0:pt.track),cx:o/2,cy:o/2,r:k,stroke:Ot(t.success),"stroke-width":$,fill:"none","stroke-dasharray":`${w}px ${f}px`,"stroke-dashoffset":`${O}px`,"stroke-linecap":t.strokeLinecap,transform:`rotate(${P} ${o/2} ${o/2})`},null)]),!rt&&B]);return rt&&B?r(At,{title:B},jt(J)?J:{default:()=>[J]}):J};return()=>{var v,g;const o=t.type==="circle"&&st.value<=20,y=S(e,`${e}-status-${R.value}`,{[`${e}-${t.type==="dashboard"?"circle":t.type}`]:t.type!=="line",[`${e}-inline-circle`]:o,[`${e}-line`]:z.value,[`${e}-line-align-${p.value}`]:z.value,[`${e}-line-position-${m.value}`]:z.value,[`${e}-steps`]:!!Z.value,[`${e}-show-info`]:t.showInfo,[`${e}-small`]:t.size==="small",[`${e}-rtl`]:s.value},t.rootClassName,(v=t.classNames)==null?void 0:v.root,l.class),$=l["aria-label"]??`${Q.value}%`,k=l["aria-labelledby"],f={...l};return delete f["aria-label"],delete f["aria-labelledby"],delete f.class,delete f.style,r("div",Pt(f,{class:y,style:{...((g=t.styles)==null?void 0:g.root)||{},...l.style||{}},role:"progressbar","aria-valuenow":Q.value,"aria-valuemin":0,"aria-valuemax":100,"aria-label":$,"aria-labelledby":k}),[Z.value?mt():V.value?ut():gt()])}}}),Wt={style:{display:"flex","flex-direction":"column",gap:"12px"}},Dt=A({__name:"ProgressBasic",setup(t){return(l,e)=>(_(),I("div",Wt,[r(i(d),{percent:30}),r(i(d),{percent:50,status:"active"}),r(i(d),{percent:70,status:"exception"}),r(i(d),{percent:100}),r(i(d),{percent:50,"show-info":!1})]))}}),qt=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
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
`,Tt={style:{display:"flex",gap:"16px"}},Bt=A({__name:"ProgressCircle",setup(t){return(l,e)=>(_(),I("div",Tt,[r(i(d),{type:"circle",percent:75}),r(i(d),{type:"circle",percent:70,status:"exception"}),r(i(d),{type:"circle",percent:100})]))}}),Ft=`<template>
  <div style="display: flex; gap: 16px;">
    <Progress type="circle" :percent="75" />
    <Progress type="circle" :percent="70" status="exception" />
    <Progress type="circle" :percent="100" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,Rt={style:{display:"flex","flex-direction":"column",gap:"16px"}},Vt=A({__name:"ProgressCustom",setup(t){return(l,e)=>(_(),I("div",Rt,[n("div",null,[e[0]||(e[0]=n("div",{style:{"margin-bottom":"8px"}},"Custom Size (number)",-1)),r(i(d),{type:"circle",percent:75,size:80})]),n("div",null,[e[1]||(e[1]=n("div",{style:{"margin-bottom":"8px"}},"Small Size",-1)),r(i(d),{type:"circle",percent:75,size:"small"})]),n("div",null,[e[2]||(e[2]=n("div",{style:{"margin-bottom":"8px"}},"Custom Gap Degree",-1)),r(i(d),{type:"dashboard",percent:75,"gap-degree":30})]),n("div",null,[e[3]||(e[3]=n("div",{style:{"margin-bottom":"8px"}},"Square Linecap",-1)),r(i(d),{type:"circle",percent:75,"stroke-linecap":"square"})])]))}}),zt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <div style="margin-bottom: 8px;">Custom Size (number)</div>
      <Progress type="circle" :percent="75" :size="80" />
    </div>
    <div>
      <div style="margin-bottom: 8px;">Small Size</div>
      <Progress type="circle" :percent="75" size="small" />
    </div>
    <div>
      <div style="margin-bottom: 8px;">Custom Gap Degree</div>
      <Progress type="dashboard" :percent="75" :gap-degree="30" />
    </div>
    <div>
      <div style="margin-bottom: 8px;">Square Linecap</div>
      <Progress type="circle" :percent="75" stroke-linecap="square" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,Et={style:{display:"flex",gap:"16px"}},Jt=A({__name:"ProgressDashboard",setup(t){return(l,e)=>(_(),I("div",Et,[r(i(d),{type:"dashboard",percent:75}),r(i(d),{type:"dashboard",percent:75,"gap-degree":30})]))}}),Ut=`<template>
  <div style="display: flex; gap: 16px;">
    <Progress type="dashboard" :percent="75" />
    <Progress type="dashboard" :percent="75" :gap-degree="30" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,Ht=A({__name:"ProgressDynamic",setup(t){const l=St(0);function e(){l.value=Math.min(l.value+10,100)}function c(){l.value=Math.max(l.value-10,0)}return(s,a)=>(_(),I(wt,null,[r(i(d),{percent:l.value},null,8,["percent"]),n("div",{style:{display:"flex",gap:"8px","margin-top":"12px"}},[n("button",{onClick:c},"-"),n("button",{onClick:e},"+")])],64))}}),Kt=`<template>
  <Progress :percent="percent" />
  <div style="display: flex; gap: 8px; margin-top: 12px;">
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
`,Qt={style:{display:"flex","flex-direction":"column",gap:"16px"}},Xt=A({__name:"ProgressGapPlacement",setup(t){return(l,e)=>(_(),I("div",Qt,[n("div",null,[e[0]||(e[0]=n("span",{style:{display:"inline-block",width:"180px"}},"默认（gapPlacement=bottom）",-1)),r(i(d),{type:"dashboard",percent:75,width:80})]),n("div",null,[e[1]||(e[1]=n("span",{style:{display:"inline-block",width:"180px"}},"gapPlacement=top",-1)),r(i(d),{type:"dashboard",percent:75,width:80,"gap-placement":"top"})]),n("div",null,[e[2]||(e[2]=n("span",{style:{display:"inline-block",width:"180px"}},"gapPlacement=start",-1)),r(i(d),{type:"dashboard",percent:75,width:80,"gap-placement":"start"})]),n("div",null,[e[3]||(e[3]=n("span",{style:{display:"inline-block",width:"180px"}},"gapPlacement=end",-1)),r(i(d),{type:"dashboard",percent:75,width:80,"gap-placement":"end"})])]))}}),Yt=`<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <span style="display: inline-block; width: 180px;">默认（gapPlacement=bottom）</span>
      <Progress type="dashboard" :percent="75" :width="80" />
    </div>
    <div>
      <span style="display: inline-block; width: 180px;">gapPlacement=top</span>
      <Progress type="dashboard" :percent="75" :width="80" gap-placement="top" />
    </div>
    <div>
      <span style="display: inline-block; width: 180px;">gapPlacement=start</span>
      <Progress type="dashboard" :percent="75" :width="80" gap-placement="start" />
    </div>
    <div>
      <span style="display: inline-block; width: 180px;">gapPlacement=end</span>
      <Progress type="dashboard" :percent="75" :width="80" gap-placement="end" />
    </div>
  </div>
</template>
`,Zt={style:{display:"flex","flex-direction":"column",gap:"16px"}},te=A({__name:"ProgressGradient",setup(t){return(l,e)=>(_(),I("div",Zt,[n("div",null,[e[0]||(e[0]=n("div",{style:{"margin-bottom":"8px"}},"Gradient (from-to)",-1)),r(i(d),{percent:60,"stroke-color":{from:"#108ee9",to:"#87d068"}})]),n("div",null,[e[1]||(e[1]=n("div",{style:{"margin-bottom":"8px"}},"Gradient (multi-stop)",-1)),r(i(d),{percent:80,"stroke-color":{"0%":"#108ee9","50%":"#87d068","100%":"#ffcb00"}})]),n("div",null,[e[2]||(e[2]=n("div",{style:{"margin-bottom":"8px"}},"Success Segment",-1)),r(i(d),{percent:60,success:{percent:30,strokeColor:"#52c41a"}})])]))}}),ee=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <div style="margin-bottom: 8px;">Gradient (from-to)</div>
      <Progress :percent="60" :stroke-color="{ from: '#108ee9', to: '#87d068' }" />
    </div>
    <div>
      <div style="margin-bottom: 8px;">Gradient (multi-stop)</div>
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
      <div style="margin-bottom: 8px;">Success Segment</div>
      <Progress :percent="60" :success="{ percent: 30, strokeColor: '#52c41a' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,ne={style:{display:"flex","flex-direction":"column",gap:"16px"}},se=A({__name:"ProgressSteps",setup(t){return(l,e)=>(_(),I("div",ne,[n("div",null,[e[0]||(e[0]=n("div",{style:{"margin-bottom":"8px"}},"Steps Progress (5 steps)",-1)),r(i(d),{percent:50,steps:5})]),n("div",null,[e[1]||(e[1]=n("div",{style:{"margin-bottom":"8px"}},"Steps Progress (10 steps)",-1)),r(i(d),{percent:30,steps:10})]),n("div",null,[e[2]||(e[2]=n("div",{style:{"margin-bottom":"8px"}},"Small Steps",-1)),r(i(d),{percent:60,steps:5,size:"small"})]),n("div",null,[e[3]||(e[3]=n("div",{style:{"margin-bottom":"8px"}},"Steps with Custom Color",-1)),r(i(d),{percent:80,steps:5,"stroke-color":"#52c41a"})])]))}}),re=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <div style="margin-bottom: 8px;">Steps Progress (5 steps)</div>
      <Progress :percent="50" :steps="5" />
    </div>
    <div>
      <div style="margin-bottom: 8px;">Steps Progress (10 steps)</div>
      <Progress :percent="30" :steps="10" />
    </div>
    <div>
      <div style="margin-bottom: 8px;">Small Steps</div>
      <Progress :percent="60" :steps="5" size="small" />
    </div>
    <div>
      <div style="margin-bottom: 8px;">Steps with Custom Color</div>
      <Progress :percent="80" :steps="5" stroke-color="#52c41a" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,oe={style:{display:"flex","flex-direction":"column",gap:"16px"}},ie=A({__name:"ProgressV6",setup(t){return(l,e)=>(_(),I("div",oe,[n("div",null,[e[0]||(e[0]=n("span",{style:{display:"inline-block",width:"200px"}},"size=[200, 12]（数组）",-1)),r(i(d),{percent:60,size:[200,12]})]),n("div",null,[e[1]||(e[1]=n("span",{style:{display:"inline-block",width:"200px"}},"size={width:300, height:10}",-1)),r(i(d),{percent:40,size:{width:300,height:10}})]),n("div",null,[e[2]||(e[2]=n("span",{style:{display:"inline-block",width:"200px"}},"size=14（小圆形 + Tooltip）",-1)),r(i(d),{type:"circle",percent:60,size:14})]),n("div",null,[e[3]||(e[3]=n("span",{style:{display:"inline-block",width:"200px"}},"steps={count:6, gap:8}",-1)),r(i(d),{percent:50,steps:{count:6,gap:8}})]),n("div",null,[e[4]||(e[4]=n("span",{style:{display:"inline-block",width:"200px"}},"strokeColor 数组（每段不同色）",-1)),r(i(d),{percent:60,steps:5,"stroke-color":["#f5222d","#fa8c16","#fadb14","#52c41a","#1677ff"]})]),n("div",null,[e[5]||(e[5]=n("span",{style:{display:"inline-block",width:"200px"}},"rounding=Math.ceil",-1)),r(i(d),{percent:41,steps:5,rounding:Math.ceil},null,8,["rounding"])])]))}}),le=`<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <span style="display: inline-block; width: 200px;">size=[200, 12]（数组）</span>
      <Progress :percent="60" :size="[200, 12]" />
    </div>
    <div>
      <span style="display: inline-block; width: 200px;">size={width:300, height:10}</span>
      <Progress :percent="40" :size="{ width: 300, height: 10 }" />
    </div>
    <div>
      <span style="display: inline-block; width: 200px;">size=14（小圆形 + Tooltip）</span>
      <Progress type="circle" :percent="60" :size="14" />
    </div>
    <div>
      <span style="display: inline-block; width: 200px;">steps={count:6, gap:8}</span>
      <Progress :percent="50" :steps="{ count: 6, gap: 8 }" />
    </div>
    <div>
      <span style="display: inline-block; width: 200px;">strokeColor 数组（每段不同色）</span>
      <Progress :percent="60" :steps="5" :stroke-color="['#f5222d', '#fa8c16', '#fadb14', '#52c41a', '#1677ff']" />
    </div>
    <div>
      <span style="display: inline-block; width: 200px;">rounding=Math.ceil</span>
      <Progress :percent="41" :steps="5" :rounding="Math.ceil" />
    </div>
  </div>
</template>
`,de={class:"markdown-body"},ge={__name:"progress",setup(t,{expose:l}){return l({frontmatter:{}}),(c,s)=>{const a=Ct("DemoBlock");return _(),I("div",de,[s[0]||(s[0]=n("h1",{id:"progress-",tabindex:"-1"},"Progress 进度条",-1)),s[1]||(s[1]=n("p",null,"展示操作的当前进度。",-1)),s[2]||(s[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),s[3]||(s[3]=n("ul",null,[n("li",null,"在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态"),n("li",null,"当操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时"),n("li",null,"当需要显示一个操作完成的百分比时")],-1)),s[4]||(s[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),s[5]||(s[5]=n("h3",{id:"-2",tabindex:"-1"},"进度条",-1)),s[6]||(s[6]=n("p",null,"标准的进度条。",-1)),r(a,{title:"进度条",source:i(qt)},{default:L(()=>[r(Dt)]),_:1},8,["source"]),s[7]||(s[7]=n("h3",{id:"-3",tabindex:"-1"},"圆形进度",-1)),s[8]||(s[8]=n("p",null,"圆形进度条。",-1)),r(a,{title:"圆形进度",source:i(Ft)},{default:L(()=>[r(Bt)]),_:1},8,["source"]),s[9]||(s[9]=n("h3",{id:"-4",tabindex:"-1"},"仪表盘",-1)),s[10]||(s[10]=n("p",null,"仪表盘样式的进度条。",-1)),r(a,{title:"仪表盘",source:i(Ut)},{default:L(()=>[r(Jt)]),_:1},8,["source"]),s[11]||(s[11]=n("h3",{id:"-5",tabindex:"-1"},"动态展示",-1)),s[12]||(s[12]=n("p",null,"会动的进度条才是好进度条。",-1)),r(a,{title:"动态展示",source:i(Kt)},{default:L(()=>[r(Ht)]),_:1},8,["source"]),s[13]||(s[13]=n("h3",{id:"-6",tabindex:"-1"},"步骤进度条",-1)),s[14]||(s[14]=n("p",null,"步骤进度条。",-1)),r(a,{title:"步骤进度条",source:i(re)},{default:L(()=>[r(se)]),_:1},8,["source"]),s[15]||(s[15]=n("h3",{id:"-7",tabindex:"-1"},"渐变色",-1)),s[16]||(s[16]=n("p",null,"渐变色进度条和成功分段。",-1)),r(a,{title:"渐变色",source:i(ee)},{default:L(()=>[r(te)]),_:1},8,["source"]),s[17]||(s[17]=n("h3",{id:"-8",tabindex:"-1"},"自定义",-1)),s[18]||(s[18]=n("p",null,"自定义尺寸、间隙角度和线帽样式。",-1)),r(a,{title:"自定义",source:i(zt)},{default:L(()=>[r(Vt)]),_:1},8,["source"]),s[19]||(s[19]=n("h3",{id:"-9",tabindex:"-1"},"仪表盘缺口位置",-1)),s[20]||(s[20]=n("p",null,[F("通过 "),n("code",null,"gapPlacement"),F(" 控制仪表盘缺口位置（v6 替代 "),n("code",null,"gapPosition"),F("）。")],-1)),r(a,{title:"仪表盘缺口位置",source:i(Yt)},{default:L(()=>[r(Xt)]),_:1},8,["source"]),s[21]||(s[21]=n("h3",{id:"v6-",tabindex:"-1"},"v6 新特性",-1)),s[22]||(s[22]=n("p",null,[n("code",null,"size"),F(" 数组形式、"),n("code",null,"steps"),F(" 对象形式、"),n("code",null,"rounding"),F(" 自定义舍入、小圆形（≤20px）自动套 Tooltip 等。")],-1)),r(a,{title:"v6 新特性",source:i(le)},{default:L(()=>[r(ie)]),_:1},8,["source"]),s[23]||(s[23]=Nt(`<h2 id="api" tabindex="-1">API</h2><h3 id="progress-props" tabindex="-1">Progress Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td><code>&#39;line&#39; | &#39;circle&#39; | &#39;dashboard&#39;</code></td><td><code>&#39;line&#39;</code></td></tr><tr><td>percent</td><td>百分比</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>status</td><td>状态</td><td><code>&#39;success&#39; | &#39;exception&#39; | &#39;normal&#39; | &#39;active&#39;</code></td><td>-</td></tr><tr><td>showInfo</td><td>是否显示进度数值或状态图标</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>strokeColor</td><td>进度条色彩，支持字符串 / 数组 / 渐变对象</td><td><code>string | string[] | ProgressGradient</code></td><td>-</td></tr><tr><td>railColor</td><td>未完成分段颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>trailColor</td><td>(已废弃) 使用 <code>railColor</code> 代替</td><td><code>string</code></td><td>-</td></tr><tr><td>strokeWidth</td><td>进度条线宽度</td><td><code>number</code></td><td><code>8</code> (line), 自适应 (circle)</td></tr><tr><td>strokeLinecap</td><td>进度条端点形状</td><td><code>&#39;round&#39; | &#39;butt&#39; | &#39;square&#39;</code></td><td><code>&#39;round&#39;</code></td></tr><tr><td>size</td><td>进度条尺寸</td><td><code>&#39;small&#39; | &#39;medium&#39; | &#39;default&#39; | number | [number, number] | { width?, height? }</code></td><td><code>&#39;medium&#39;</code></td></tr><tr><td>width</td><td>(已废弃) circle/dashboard 画布宽度，使用 <code>size</code> 代替</td><td><code>number</code></td><td><code>120</code></td></tr><tr><td>format</td><td>内容模板函数，可返回 VNode</td><td><code>(percent?: number, successPercent?: number) =&gt; VNode | string | number | null</code></td><td>-</td></tr><tr><td>steps</td><td>步骤进度条；对象形式可指定段间距</td><td><code>number | { count: number; gap: number }</code></td><td>-</td></tr><tr><td>success</td><td>成功进度条配置</td><td><code>{ percent?: number; strokeColor?: string }</code></td><td>-</td></tr><tr><td>gapDegree</td><td>圆形进度条缺口角度，dashboard 默认 75</td><td><code>number</code></td><td><code>0</code> (circle), <code>75</code> (dashboard)</td></tr><tr><td>gapPlacement</td><td>仪表盘缺口位置（v6 新 API）</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;bottom&#39;</code> (dashboard)</td></tr><tr><td>gapPosition</td><td>(已废弃) 使用 <code>gapPlacement</code> 代替</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;left&#39; | &#39;right&#39;</code></td><td>-</td></tr><tr><td>percentPosition</td><td>进度文字位置</td><td><code>{ align?: &#39;start&#39; | &#39;center&#39; | &#39;end&#39;; type?: &#39;inner&#39; | &#39;outer&#39; }</code></td><td><code>{ align: &#39;end&#39;, type: &#39;outer&#39; }</code></td></tr><tr><td>rounding</td><td>步骤进度条已激活段数舍入函数</td><td><code>(step: number) =&gt; number</code></td><td><code>Math.round</code></td></tr><tr><td>rootClassName</td><td>根元素类名</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化类名（root/body/rail/track/indicator）</td><td><code>ProgressClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化样式（root/body/rail/track/indicator）</td><td><code>ProgressStyles</code></td><td>-</td></tr></tbody></table><h3 id="progressgradient" tabindex="-1">ProgressGradient</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">ProgressGradient</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  direction<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>  <span class="token comment">// 渐变方向，如 &#39;to right&#39;</span>
  from<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>       <span class="token comment">// 起始颜色</span>
  to<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>         <span class="token comment">// 结束颜色</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>  <span class="token comment">// 多色渐变，如 &#39;0%&#39;: &#39;#108ee9&#39;, &#39;100%&#39;: &#39;#87d068&#39;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="-10" tabindex="-1">注意事项</h3><ul><li><code>size</code> 默认值由 v5 的 <code>&#39;default&#39;</code> 改为 v6 的 <code>&#39;medium&#39;</code>，二者行为等价；<code>&#39;default&#39;</code> 会保留兼容。</li><li>圆形 <code>strokeColor</code> 渐变通过 <code>&lt;linearGradient&gt;</code> 实现，支持 <code>from/to</code> 与 <code>0%/50%/100%</code> 等百分比 stop。</li><li>圆形 <code>size &lt;= 20</code> 时自动添加 <code>inline-circle</code> class，并将 indicator 包入 <code>Tooltip</code> 显示（小圆形容纳不下文字）。</li><li><code>aria-label</code> 默认为 <code>&quot;\${percent}%&quot;</code>，可通过 attr 透传覆盖。</li><li>RTL 由 <code>ConfigProvider direction=&quot;rtl&quot;</code> 触发，渐变方向自动反转、根元素加 <code>rtl</code> class。</li></ul>`,7))])}}};export{ge as default};
