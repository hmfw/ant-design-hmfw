import{o as L,N as vt,L as bt,n as r,s as xt,f as h,r as kt,A as I,k as O,K as i,h as n,F as ht,R as S,m as G,E as Pt,H as $t,l as wt}from"./index-C7r7ERgN.js";import{c as C}from"./cls-S9IiI6wd.js";import{T as Ct}from"./Tooltip-BYigmGN0.js";import{a as St,C as Nt}from"./CloseCircleFilled-D8GUAtQ3.js";import{I as U}from"./Icon-Bn-1ylNX.js";import{C as At}from"./CloseOutlined-BOy0Oguu.js";import{C as Lt}from"./CheckOutlined-C0PDqckz.js";import{B as ct}from"./Button-Cw7qEaQa.js";import"./LoadingOutlined-CFTLq47r.js";function D(t){return!t||t<0?0:t>100?100:t}function H({success:t}){if(t&&"percent"in t)return t.percent}function Y(t,l,e){let p=-1,s=-1;if(l==="step"){const a=e.steps,c=e.strokeWidth;typeof t=="string"||typeof t>"u"?(p=t==="small"?2:14,s=c??8):typeof t=="number"?[p,s]=[t,t]:Array.isArray(t)?(p=t[0]??14,s=t[1]??8):(p=t.width??14,s=t.height??8),p*=a}else if(l==="line"){const a=e==null?void 0:e.strokeWidth;typeof t=="string"||typeof t>"u"?s=a||(t==="small"?6:8):typeof t=="number"?[p,s]=[t,t]:Array.isArray(t)?(p=t[0]??-1,s=t[1]??8):(p=t.width??-1,s=t.height??8)}else if(typeof t=="string"||typeof t>"u")[p,s]=t==="small"?[60,60]:[120,120];else if(typeof t=="number")[p,s]=[t,t];else if(Array.isArray(t)){const a=t[0]??t[1]??120;[p,s]=[a,a]}else{const a=t.width??t.height??120;[p,s]=[a,a]}return[p,s]}function It(t,l=!1){const{from:e,to:p,direction:s=l?"to left":"to right",...a}=t,c=Object.entries(a).filter(([,u])=>typeof u=="string");if(c.length>0){const u=c.map(([m,_])=>({key:parseFloat(String(m).replace(/%/g,"")),value:_})).filter(m=>!isNaN(m.key)).sort((m,_)=>m.key-_.key).map(({key:m,value:_})=>`${_} ${m}%`).join(", ");return`linear-gradient(${s}, ${u})`}return`linear-gradient(${s}, ${e||"#1677ff"}, ${p||"#1677ff"})`}function Ot(t){if(!t)return!1;let l=0,e=0,p=0;const s=t.trim();if(s.startsWith("#")){let c=s.slice(1);if(c.length===3&&(c=c.split("").map(u=>u+u).join("")),c.length>=6)l=parseInt(c.slice(0,2),16),e=parseInt(c.slice(2,4),16),p=parseInt(c.slice(4,6),16);else return!1}else{const c=s.match(/rgba?\(([^)]+)\)/i);if(!c)return!1;const u=c[1].split(",").map(m=>parseFloat(m.trim()));if(u.length<3||u.some(m=>isNaN(m)))return!1;[l,e,p]=u}return(l*299+e*587+p*114)/1e3>=178}function _t(t){if(!t)return;if(typeof t=="string")return t;if(Array.isArray(t))return t[0];if("from"in t&&typeof t.from=="string")return t.from;const l=Object.entries(t).filter(([e,p])=>e!=="direction"&&typeof p=="string");if(l.length>0)return l[0][1]}function Bt(t){const{from:l,to:e,direction:p,...s}=t,a=Object.entries(s).filter(([,c])=>typeof c=="string");return a.length>0?a.map(([c,u])=>({offsetNum:parseFloat(String(c).replace(/%/g,"")),color:u})).filter(c=>!isNaN(c.offsetNum)).sort((c,u)=>c.offsetNum-u.offsetNum).map(({offsetNum:c,color:u})=>({offset:`${c}%`,color:u})):[{offset:"0%",color:l||"#1677ff"},{offset:"100%",color:e||"#1677ff"}]}const jt="#52c41a";function Gt(t){return(t==null?void 0:t.strokeColor)||jt}let Tt=0;function Dt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!kt(t)}const Mt=["normal","exception","active","success"],d=L({name:"Progress",inheritAttrs:!1,props:{prefixCls:String,rootClassName:String,classNames:Object,styles:Object,percent:{type:Number,default:0},type:{type:String,default:"line"},status:String,showInfo:{type:Boolean,default:!0},strokeWidth:Number,strokeColor:[String,Array,Object],trailColor:String,railColor:String,width:Number,size:{type:[String,Number,Object,Array],default:"medium"},format:Function,strokeLinecap:{type:String,default:"round"},success:Object,steps:[Number,Object],gapDegree:Number,gapPlacement:String,gapPosition:String,percentPosition:{type:Object,default:()=>({})},rounding:Function},setup(t,{attrs:l}){const e=vt("progress"),p=bt(),s=h(()=>p.value.direction==="rtl"),a=Tt++,c=h(()=>t.railColor??t.trailColor),u=h(()=>{var o;return((o=t.percentPosition)==null?void 0:o.align)??"end"}),m=h(()=>{var o;return((o=t.percentPosition)==null?void 0:o.type)??"outer"}),_=h(()=>Array.isArray(t.strokeColor)?t.strokeColor[0]:t.strokeColor),pt=h(()=>{const o=_t(t.strokeColor);return Ot(o)}),K=h(()=>{const o=H(t),v=o!==void 0?o:t.percent;return Number.parseInt(String(v??0),10)}),R=h(()=>!Mt.includes(t.status)&&K.value>=100?"success":t.status||"normal"),J=h(()=>t.size==="medium"?"default":t.size),F=h(()=>t.type==="line"),V=h(()=>F.value&&!t.steps),Q=()=>{var y,b;if(!t.showInfo)return null;const o=H(t),v=F.value&&pt.value&&m.value==="inner";let f=null;m.value==="inner"||t.format||R.value!=="exception"&&R.value!=="success"?f=(t.format??(x=>`${x}%`))(D(t.percent),D(o)):R.value==="exception"?f=F.value?r(U,{component:St},null):r(U,{component:At},null):R.value==="success"&&(f=F.value?r(U,{component:Nt},null):r(U,{component:Lt},null));const $=C(`${e}-indicator`,{[`${e}-indicator-bright`]:v,[`${e}-indicator-${u.value}`]:V.value,[`${e}-indicator-${m.value}`]:V.value},(y=t.classNames)==null?void 0:y.indicator),P=typeof f=="string"||typeof f=="number"?String(f):void 0;return r("span",{class:$,style:(b=t.styles)==null?void 0:b.indicator,title:P},[f])},ut=()=>{var B,T,N,j,A,M,z,W,q;const[o,v]=Y(J.value,"line",{strokeWidth:t.strokeWidth}),f=t.strokeLinecap==="square"||t.strokeLinecap==="butt"?0:void 0,$={backgroundColor:c.value||void 0,borderRadius:f!==void 0?`${f}px`:void 0,height:`${v}px`,...(B=t.styles)==null?void 0:B.rail},P=H(t),b={width:`${D(t.percent)}%`,height:`${v}px`,borderRadius:f!==void 0?`${f}px`:void 0},g=_.value;g&&typeof g!="string"?b.background=It(g,s.value):typeof g=="string"&&(b.background=g),Object.assign(b,((T=t.styles)==null?void 0:T.track)||{});const x=P!==void 0?{width:`${D(P)}%`,height:`${v}px`,borderRadius:f!==void 0?`${f}px`:void 0,backgroundColor:(N=t.success)==null?void 0:N.strokeColor,...(j=t.styles)==null?void 0:j.track}:null,k=Q(),w=`${e}-track`;return r("div",{class:C(`${e}-body`,(A=t.classNames)==null?void 0:A.body,{[`${e}-body-layout-bottom`]:u.value==="center"&&m.value==="outer"}),style:{width:o>0?`${o}px`:"100%",...(M=t.styles)==null?void 0:M.body}},[r("div",{class:C(`${e}-rail`,(z=t.classNames)==null?void 0:z.rail),style:$},[r("div",{class:C(w,(W=t.classNames)==null?void 0:W.track),style:b},[m.value==="inner"&&k]),x&&r("div",{class:C(w,`${w}-success`,(q=t.classNames)==null?void 0:q.track),style:x},null)]),m.value==="outer"&&k])},X=h(()=>t.steps?typeof t.steps=="number"?t.steps:t.steps.count:0),Z=h(()=>{if(!(!t.steps||typeof t.steps=="number"))return t.steps.gap}),mt=()=>{var k,w,B,T;const o=X.value;if(!o)return null;const v=t.strokeWidth??8,[f,$]=Y(J.value,"step",{steps:o,strokeWidth:v}),P=f/o,b=(t.rounding??Math.round)(o*(D(t.percent)/100)),g=[];for(let N=0;N<o;N++){const j=N<=b-1,A=Array.isArray(t.strokeColor)?t.strokeColor[N]:typeof t.strokeColor=="string"?t.strokeColor:void 0;g.push(r("div",{key:N,class:C(`${e}-steps-item`,{[`${e}-steps-item-active`]:j},(k=t.classNames)==null?void 0:k.track),style:{backgroundColor:j?A:c.value,width:`${P}px`,height:`${$}px`,...(w=t.styles)==null?void 0:w.track}},null))}const x={...(B=t.styles)==null?void 0:B.body};return Z.value!==void 0&&(x.gap=`${Z.value}px`),r("div",{class:C(`${e}-steps-body`,(T=t.classNames)==null?void 0:T.body),style:x},[g,Q()])},tt=h(()=>{const o=t.size==="medium"&&t.width!==void 0?t.width:J.value,[v]=Y(o,t.type==="dashboard"?"dashboard":"circle");return v}),ft=()=>{var nt,st,rt,ot,it,dt,lt;const o=tt.value,v=Math.max(3/o*100,6),f=Math.min(v,Math.max(o/2-1,1)),$=t.strokeWidth??f,P=Math.max((o-$)/2,.5),y=2*Math.PI*P,b=t.type==="dashboard",g=t.gapDegree!==void 0?t.gapDegree:b?75:0,x=t.gapPlacement??t.gapPosition??(b?"bottom":void 0);let k=-90;x==="bottom"?k=90+g/2:x==="top"?k=-90+g/2:x==="start"||x==="left"?k=180+g/2-(s.value?180:0):(x==="end"||x==="right")&&(k=(s.value?180:0)+g/2);const w=y-g/360*y,B=H(t),T=D(t.percent),N=w*(1-T/100),j=B!==void 0?w*(1-D(B)/100):null,A=_.value,M=!!(A&&typeof A!="string"),z=`${e}-gradient-${a}-${o}`;let W;M?W=`url(#${z})`:typeof A=="string"&&(W=A);const q=t.showInfo&&Q(),et=o<=20,gt=C(`${e}-body`,{[`${e}-circle-gradient`]:M},(nt=t.classNames)==null?void 0:nt.body),E=r("div",{class:gt,style:{width:`${o}px`,height:`${o}px`,fontSize:`${o*.15+6}px`,...(st=t.styles)==null?void 0:st.body}},[r("svg",{viewBox:`0 0 ${o} ${o}`,width:o,height:o},[M&&r("defs",null,[r("linearGradient",{id:z,gradientUnits:"userSpaceOnUse",x1:s.value?o:0,y1:o/2,x2:s.value?0:o,y2:o/2,gradientTransform:`rotate(${-k} ${o/2} ${o/2})`},[Bt(A).map(({offset:at,color:yt})=>r("stop",{key:at,offset:at,"stop-color":yt},null))])]),r("circle",{class:C(`${e}-circle-rail`,(rt=t.classNames)==null?void 0:rt.rail),cx:o/2,cy:o/2,r:P,stroke:c.value??"#f5f5f5","stroke-width":$,fill:"none","stroke-dasharray":`${w}px ${y}px`,transform:`rotate(${k} ${o/2} ${o/2})`,style:(ot=t.styles)==null?void 0:ot.rail},null),r("circle",{class:C(`${e}-circle-path`,(it=t.classNames)==null?void 0:it.track),cx:o/2,cy:o/2,r:P,stroke:W,"stroke-width":$,fill:"none","stroke-dasharray":`${w}px ${y}px`,"stroke-dashoffset":`${N}px`,"stroke-linecap":t.strokeLinecap,transform:`rotate(${k} ${o/2} ${o/2})`,style:(dt=t.styles)==null?void 0:dt.track},null),j!==null&&r("circle",{class:C(`${e}-circle-path`,`${e}-circle-path-success`,(lt=t.classNames)==null?void 0:lt.track),cx:o/2,cy:o/2,r:P,stroke:Gt(t.success),"stroke-width":$,fill:"none","stroke-dasharray":`${w}px ${y}px`,"stroke-dashoffset":`${j}px`,"stroke-linecap":t.strokeLinecap,transform:`rotate(${k} ${o/2} ${o/2})`},null)]),!et&&q]);return et&&q?r(Ct,{title:q},Dt(E)?E:{default:()=>[E]}):E};return()=>{var b,g;const o=t.type==="circle"&&tt.value<=20,v=C(e,`${e}-status-${R.value}`,{[`${e}-${t.type==="dashboard"?"circle":t.type}`]:t.type!=="line",[`${e}-inline-circle`]:o,[`${e}-line`]:V.value,[`${e}-line-align-${u.value}`]:V.value,[`${e}-line-position-${m.value}`]:V.value,[`${e}-steps`]:!!X.value,[`${e}-show-info`]:t.showInfo,[`${e}-small`]:t.size==="small",[`${e}-rtl`]:s.value},t.rootClassName,(b=t.classNames)==null?void 0:b.root,l.class),$=l["aria-label"]??`${K.value}%`,P=l["aria-labelledby"],y={...l};return delete y["aria-label"],delete y["aria-labelledby"],delete y.class,delete y.style,r("div",xt(y,{class:v,style:{...((g=t.styles)==null?void 0:g.root)||{},...l.style||{}},role:"progressbar","aria-valuenow":K.value,"aria-valuemin":0,"aria-valuemax":100,"aria-label":$,"aria-labelledby":P}),[X.value?mt():F.value?ut():ft()])}}}),Wt={style:{display:"flex","flex-direction":"column",gap:"12px"}},qt=L({__name:"ProgressBasic",setup(t){return(l,e)=>(I(),O("div",Wt,[r(i(d),{percent:30}),r(i(d),{percent:50,status:"active"}),r(i(d),{percent:70,status:"exception"}),r(i(d),{percent:100}),r(i(d),{percent:50,"show-info":!1})]))}}),Rt=`<template>
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
`,Ft={style:{display:"flex",gap:"16px"}},Vt=L({__name:"ProgressCircle",setup(t){return(l,e)=>(I(),O("div",Ft,[r(i(d),{type:"circle",percent:75}),r(i(d),{type:"circle",percent:70,status:"exception"}),r(i(d),{type:"circle",percent:100})]))}}),zt=`<template>
  <div style="display: flex; gap: 16px">
    <Progress type="circle" :percent="75" />
    <Progress type="circle" :percent="70" status="exception" />
    <Progress type="circle" :percent="100" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,Et={style:{display:"flex","flex-direction":"column",gap:"16px"}},Ut=L({__name:"ProgressCustom",setup(t){return(l,e)=>(I(),O("div",Et,[n("div",null,[e[0]||(e[0]=n("div",{style:{"margin-bottom":"8px"}},"Custom Size (number)",-1)),r(i(d),{type:"circle",percent:75,size:80})]),n("div",null,[e[1]||(e[1]=n("div",{style:{"margin-bottom":"8px"}},"Small Size",-1)),r(i(d),{type:"circle",percent:75,size:"small"})]),n("div",null,[e[2]||(e[2]=n("div",{style:{"margin-bottom":"8px"}},"Custom Gap Degree",-1)),r(i(d),{type:"dashboard",percent:75,"gap-degree":30})]),n("div",null,[e[3]||(e[3]=n("div",{style:{"margin-bottom":"8px"}},"Square Linecap",-1)),r(i(d),{type:"circle",percent:75,"stroke-linecap":"square"})])]))}}),Ht=`<template>
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
`,Kt={style:{display:"flex",gap:"16px"}},Jt=L({__name:"ProgressDashboard",setup(t){return(l,e)=>(I(),O("div",Kt,[r(i(d),{type:"dashboard",percent:75}),r(i(d),{type:"dashboard",percent:75,"gap-degree":30})]))}}),Qt=`<template>
  <div style="display: flex; gap: 16px">
    <Progress type="dashboard" :percent="75" />
    <Progress type="dashboard" :percent="75" :gap-degree="30" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,Xt={style:{display:"flex",gap:"8px","margin-top":"12px"}},Yt=L({__name:"ProgressDynamic",setup(t){const l=Pt(0);function e(){l.value=Math.min(l.value+10,100)}function p(){l.value=Math.max(l.value-10,0)}return(s,a)=>(I(),O(ht,null,[r(i(d),{percent:l.value},null,8,["percent"]),n("div",Xt,[r(i(ct),{onClick:p},{default:S(()=>[...a[0]||(a[0]=[G("-",-1)])]),_:1}),r(i(ct),{onClick:e},{default:S(()=>[...a[1]||(a[1]=[G("+",-1)])]),_:1})])],64))}}),Zt=`<template>
  <Progress :percent="percent" />
  <div style="display: flex; gap: 8px; margin-top: 12px">
    <Button @click="decline">-</Button>
    <Button @click="increase">+</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Progress, Button } from 'ant-design-hmfw'

const percent = ref(0)

function increase() {
  percent.value = Math.min(percent.value + 10, 100)
}

function decline() {
  percent.value = Math.max(percent.value - 10, 0)
}
<\/script>
`,te={style:{display:"flex","flex-direction":"column",gap:"16px"}},ee=L({__name:"ProgressGapPlacement",setup(t){return(l,e)=>(I(),O("div",te,[n("div",null,[e[0]||(e[0]=n("span",{style:{display:"inline-block",width:"180px"}},"默认（gapPlacement=bottom）",-1)),r(i(d),{type:"dashboard",percent:75,width:80})]),n("div",null,[e[1]||(e[1]=n("span",{style:{display:"inline-block",width:"180px"}},"gapPlacement=top",-1)),r(i(d),{type:"dashboard",percent:75,width:80,"gap-placement":"top"})]),n("div",null,[e[2]||(e[2]=n("span",{style:{display:"inline-block",width:"180px"}},"gapPlacement=start",-1)),r(i(d),{type:"dashboard",percent:75,width:80,"gap-placement":"start"})]),n("div",null,[e[3]||(e[3]=n("span",{style:{display:"inline-block",width:"180px"}},"gapPlacement=end",-1)),r(i(d),{type:"dashboard",percent:75,width:80,"gap-placement":"end"})])]))}}),ne=`<script setup lang="ts">
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
`,se={style:{display:"flex","flex-direction":"column",gap:"16px"}},re={style:{display:"flex",gap:"24px"}},oe=L({__name:"ProgressGradient",setup(t){return(l,e)=>(I(),O("div",se,[n("div",null,[e[0]||(e[0]=n("div",{style:{"margin-bottom":"8px"}},"线形渐变（from-to）",-1)),r(i(d),{percent:60,"stroke-color":{from:"#108ee9",to:"#87d068"}})]),n("div",null,[e[1]||(e[1]=n("div",{style:{"margin-bottom":"8px"}},"线形渐变（多色 stop）",-1)),r(i(d),{percent:80,"stroke-color":{"0%":"#108ee9","50%":"#87d068","100%":"#ffcb00"}})]),n("div",null,[e[2]||(e[2]=n("div",{style:{"margin-bottom":"8px"}},"成功分段 success.percent",-1)),r(i(d),{percent:60,success:{percent:30,strokeColor:"#52c41a"}})]),n("div",null,[e[3]||(e[3]=n("div",{style:{"margin-bottom":"8px"}},"圆形 / 仪表盘渐变",-1)),n("div",re,[r(i(d),{type:"circle",percent:70,"stroke-color":{"0%":"#108ee9","100%":"#87d068"}}),r(i(d),{type:"dashboard",percent:70,"stroke-color":{"0%":"#108ee9","100%":"#87d068"}}),r(i(d),{type:"circle",percent:90,"stroke-color":{from:"#1677ff",to:"#ff4d4f"}})])])]))}}),ie=`<template>
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
`,de={style:{display:"flex","flex-direction":"column",gap:"16px"}},le=L({__name:"ProgressSteps",setup(t){return(l,e)=>(I(),O("div",de,[n("div",null,[e[0]||(e[0]=n("div",{style:{"margin-bottom":"8px"}},"Steps Progress (5 steps)",-1)),r(i(d),{percent:50,steps:5})]),n("div",null,[e[1]||(e[1]=n("div",{style:{"margin-bottom":"8px"}},"Steps Progress (10 steps)",-1)),r(i(d),{percent:30,steps:10})]),n("div",null,[e[2]||(e[2]=n("div",{style:{"margin-bottom":"8px"}},"Small Steps",-1)),r(i(d),{percent:60,steps:5,size:"small"})]),n("div",null,[e[3]||(e[3]=n("div",{style:{"margin-bottom":"8px"}},"Steps with Custom Color",-1)),r(i(d),{percent:80,steps:5,"stroke-color":"#52c41a"})]),n("div",null,[e[4]||(e[4]=n("div",{style:{"margin-bottom":"8px"}},"对象形式 steps（指定段数与间距）",-1)),r(i(d),{percent:50,steps:{count:4,gap:12}})]),n("div",null,[e[5]||(e[5]=n("div",{style:{"margin-bottom":"8px"}},"分段渐变色（数组）",-1)),r(i(d),{percent:60,steps:5,"stroke-color":["#f5222d","#fa8c16","#fadb14","#52c41a","#1677ff"]})])]))}}),ae=`<template>
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
`,ce={style:{display:"flex","flex-direction":"column",gap:"16px"}},pe=L({__name:"ProgressV6",setup(t){return(l,e)=>(I(),O("div",ce,[n("div",null,[e[0]||(e[0]=n("span",{style:{display:"inline-block",width:"200px"}},"size=[200, 12]（数组）",-1)),r(i(d),{percent:60,size:[200,12]})]),n("div",null,[e[1]||(e[1]=n("span",{style:{display:"inline-block",width:"200px"}},"size={width:300, height:10}",-1)),r(i(d),{percent:40,size:{width:300,height:10}})]),n("div",null,[e[2]||(e[2]=n("span",{style:{display:"inline-block",width:"200px"}},"size=14（小圆形 + Tooltip）",-1)),r(i(d),{type:"circle",percent:60,size:14})]),n("div",null,[e[3]||(e[3]=n("span",{style:{display:"inline-block",width:"200px"}},"steps={count:6, gap:8}",-1)),r(i(d),{percent:50,steps:{count:6,gap:8}})]),n("div",null,[e[4]||(e[4]=n("span",{style:{display:"inline-block",width:"200px"}},"strokeColor 数组（每段不同色）",-1)),r(i(d),{percent:60,steps:5,"stroke-color":["#f5222d","#fa8c16","#fadb14","#52c41a","#1677ff"]})]),n("div",null,[e[5]||(e[5]=n("span",{style:{display:"inline-block",width:"200px"}},"rounding=Math.ceil",-1)),r(i(d),{percent:41,steps:5,rounding:Math.ceil},null,8,["rounding"])])]))}}),ue=`<script setup lang="ts">
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
`,me={class:"markdown-body"},$e={__name:"progress",setup(t,{expose:l}){return l({frontmatter:{}}),(p,s)=>{const a=$t("DemoBlock");return I(),O("div",me,[s[0]||(s[0]=n("h1",{id:"progress-",tabindex:"-1"},"Progress 进度条",-1)),s[1]||(s[1]=n("p",null,"展示操作的当前进度。",-1)),s[2]||(s[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),s[3]||(s[3]=n("ul",null,[n("li",null,"在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态"),n("li",null,"当操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时"),n("li",null,"当需要显示一个操作完成的百分比时")],-1)),s[4]||(s[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),s[5]||(s[5]=n("h3",{id:"-2",tabindex:"-1"},"进度条",-1)),s[6]||(s[6]=n("p",null,"标准的进度条。",-1)),r(a,{title:"进度条",source:i(Rt)},{default:S(()=>[r(qt)]),_:1},8,["source"]),s[7]||(s[7]=n("h3",{id:"-3",tabindex:"-1"},"圆形进度",-1)),s[8]||(s[8]=n("p",null,"圆形进度条。",-1)),r(a,{title:"圆形进度",source:i(zt)},{default:S(()=>[r(Vt)]),_:1},8,["source"]),s[9]||(s[9]=n("h3",{id:"-4",tabindex:"-1"},"仪表盘",-1)),s[10]||(s[10]=n("p",null,"仪表盘样式的进度条。",-1)),r(a,{title:"仪表盘",source:i(Qt)},{default:S(()=>[r(Jt)]),_:1},8,["source"]),s[11]||(s[11]=n("h3",{id:"-5",tabindex:"-1"},"动态展示",-1)),s[12]||(s[12]=n("p",null,"会动的进度条才是好进度条。",-1)),r(a,{title:"动态展示",source:i(Zt)},{default:S(()=>[r(Yt)]),_:1},8,["source"]),s[13]||(s[13]=n("h3",{id:"-6",tabindex:"-1"},"步骤进度条",-1)),s[14]||(s[14]=n("p",null,"步骤进度条。",-1)),r(a,{title:"步骤进度条",source:i(ae)},{default:S(()=>[r(le)]),_:1},8,["source"]),s[15]||(s[15]=n("h3",{id:"-7",tabindex:"-1"},"渐变色",-1)),s[16]||(s[16]=n("p",null,"渐变色进度条、成功分段，以及圆形 / 仪表盘渐变。圆形与仪表盘的渐变在屏幕空间内始终保持水平方向，不受缺口旋转影响。",-1)),r(a,{title:"渐变色",source:i(ie)},{default:S(()=>[r(oe)]),_:1},8,["source"]),s[17]||(s[17]=n("h3",{id:"-8",tabindex:"-1"},"自定义",-1)),s[18]||(s[18]=n("p",null,"自定义尺寸、间隙角度和线帽样式。",-1)),r(a,{title:"自定义",source:i(Ht)},{default:S(()=>[r(Ut)]),_:1},8,["source"]),s[19]||(s[19]=n("h3",{id:"-9",tabindex:"-1"},"仪表盘缺口位置",-1)),s[20]||(s[20]=n("p",null,[G("通过 "),n("code",null,"gapPlacement"),G(" 控制仪表盘缺口位置（v6 替代 "),n("code",null,"gapPosition"),G("）。")],-1)),r(a,{title:"仪表盘缺口位置",source:i(ne)},{default:S(()=>[r(ee)]),_:1},8,["source"]),s[21]||(s[21]=n("h3",{id:"v6-",tabindex:"-1"},"v6 新特性",-1)),s[22]||(s[22]=n("p",null,[n("code",null,"size"),G(" 数组形式、"),n("code",null,"steps"),G(" 对象形式、"),n("code",null,"rounding"),G(" 自定义舍入、小圆形（≤20px）自动套 Tooltip 等。")],-1)),r(a,{title:"v6 新特性",source:i(ue)},{default:S(()=>[r(pe)]),_:1},8,["source"]),s[23]||(s[23]=wt(`<h2 id="api" tabindex="-1">API</h2><h3 id="progress-props" tabindex="-1">Progress Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td><code>&#39;line&#39; | &#39;circle&#39; | &#39;dashboard&#39;</code></td><td><code>&#39;line&#39;</code></td></tr><tr><td>percent</td><td>百分比</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>status</td><td>状态</td><td><code>&#39;success&#39; | &#39;exception&#39; | &#39;normal&#39; | &#39;active&#39;</code></td><td>-</td></tr><tr><td>showInfo</td><td>是否显示进度数值或状态图标</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>strokeColor</td><td>进度条色彩，支持字符串 / 数组 / 渐变对象</td><td><code>string | string[] | ProgressGradient</code></td><td>-</td></tr><tr><td>railColor</td><td>未完成分段颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>trailColor</td><td>(已废弃) 使用 <code>railColor</code> 代替</td><td><code>string</code></td><td>-</td></tr><tr><td>strokeWidth</td><td>进度条线宽度</td><td><code>number</code></td><td><code>8</code> (line), 自适应 (circle)</td></tr><tr><td>strokeLinecap</td><td>进度条端点形状</td><td><code>&#39;round&#39; | &#39;butt&#39; | &#39;square&#39;</code></td><td><code>&#39;round&#39;</code></td></tr><tr><td>size</td><td>进度条尺寸</td><td><code>&#39;small&#39; | &#39;medium&#39; | &#39;default&#39; | number | [number, number] | { width?, height? }</code></td><td><code>&#39;medium&#39;</code></td></tr><tr><td>width</td><td>(已废弃) circle/dashboard 画布宽度，使用 <code>size</code> 代替</td><td><code>number</code></td><td><code>120</code></td></tr><tr><td>format</td><td>内容模板函数，可返回 VNode</td><td><code>(percent?: number, successPercent?: number) =&gt; VNode | string | number | null</code></td><td>-</td></tr><tr><td>steps</td><td>步骤进度条；对象形式可指定段间距</td><td><code>number | { count: number; gap: number }</code></td><td>-</td></tr><tr><td>success</td><td>成功进度条配置</td><td><code>{ percent?: number; strokeColor?: string }</code></td><td>-</td></tr><tr><td>gapDegree</td><td>圆形进度条缺口角度，dashboard 默认 75</td><td><code>number</code></td><td><code>0</code> (circle), <code>75</code> (dashboard)</td></tr><tr><td>gapPlacement</td><td>仪表盘缺口位置（v6 新 API）</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;bottom&#39;</code> (dashboard)</td></tr><tr><td>gapPosition</td><td>(已废弃) 使用 <code>gapPlacement</code> 代替</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;left&#39; | &#39;right&#39;</code></td><td>-</td></tr><tr><td>percentPosition</td><td>进度文字位置</td><td><code>{ align?: &#39;start&#39; | &#39;center&#39; | &#39;end&#39;; type?: &#39;inner&#39; | &#39;outer&#39; }</code></td><td><code>{ align: &#39;end&#39;, type: &#39;outer&#39; }</code></td></tr><tr><td>rounding</td><td>步骤进度条已激活段数舍入函数</td><td><code>(step: number) =&gt; number</code></td><td><code>Math.round</code></td></tr><tr><td>rootClassName</td><td>根元素类名</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化类名（root/body/rail/track/indicator）</td><td><code>ProgressClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化样式（root/body/rail/track/indicator）</td><td><code>ProgressStyles</code></td><td>-</td></tr></tbody></table><h3 id="progressgradient" tabindex="-1">ProgressGradient</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">ProgressGradient</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  direction<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 渐变方向，如 &#39;to right&#39;</span>
  from<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 起始颜色</span>
  to<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 结束颜色</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token comment">// 多色渐变，如 &#39;0%&#39;: &#39;#108ee9&#39;, &#39;100%&#39;: &#39;#87d068&#39;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="-10" tabindex="-1">注意事项</h3><ul><li><code>size</code> 默认值由 v5 的 <code>&#39;default&#39;</code> 改为 v6 的 <code>&#39;medium&#39;</code>，二者行为等价；<code>&#39;default&#39;</code> 会保留兼容。</li><li>圆形 <code>strokeColor</code> 渐变通过 <code>&lt;linearGradient&gt;</code> 实现，支持 <code>from/to</code> 与 <code>0%/50%/100%</code> 等百分比 stop；百分比 stop 会按数值升序排序。圆形/仪表盘使用 <code>userSpaceOnUse</code> + <code>gradientTransform</code> 抵消缺口旋转，渐变方向在屏幕空间内保持水平（RTL 下自动反向）。</li><li>圆形 <code>size &lt;= 20</code> 时自动添加 <code>inline-circle</code> class，并将 indicator 包入 <code>Tooltip</code> 显示（小圆形容纳不下文字）。</li><li><code>aria-label</code> 默认为 <code>&quot;\${percent}%&quot;</code>，可通过 attr 透传覆盖。</li><li>RTL 由 <code>ConfigProvider direction=&quot;rtl&quot;</code> 触发，渐变方向自动反转、根元素加 <code>rtl</code> class。</li></ul>`,7))])}}};export{$e as default};
