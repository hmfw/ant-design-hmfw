import{d as N,u as vn,x as bn,c as e,s as xn,a as P,B as hn,o as B,b as A,e as o,f as s,w as b,g as w,r as dn,_ as Pn,F as wn,h as $n,i as Sn}from"./index-DpCWj_RH.js";import{c as q}from"./cls-S9IiI6wd.js";import{T as Cn}from"./Tooltip-CGkZ9PxR.js";import{C as qn}from"./CloseCircleFilled-CIh3C0a9.js";import{C as Nn}from"./CheckCircleFilled-zrPf0dUY.js";import{C as Bn}from"./CheckOutlined-nejK-OxX.js";import{C as An}from"./CloseOutlined-BtOkW6a2.js";import{B as V}from"./Button-Bf04Y6dy.js";import"./Trigger-BvJ5OT70.js";import"./LoadingOutlined-BZTKujXV.js";function D(n){return!n||n<0?0:n>100?100:n}function H({success:n}){if(n&&"percent"in n)return n.percent}function Y(n,c,t){let d=-1,a=-1;if(c==="step"){const i=t.steps,l=t.strokeWidth;typeof n=="string"||typeof n>"u"?(d=n==="small"?2:14,a=l??8):typeof n=="number"?[d,a]=[n,n]:Array.isArray(n)?(d=n[0]??14,a=n[1]??8):(d=n.width??14,a=n.height??8),d*=i}else if(c==="line"){const i=t==null?void 0:t.strokeWidth;typeof n=="string"||typeof n>"u"?a=i||(n==="small"?6:8):typeof n=="number"?[d,a]=[n,n]:Array.isArray(n)?(d=n[0]??-1,a=n[1]??8):(d=n.width??-1,a=n.height??8)}else if(typeof n=="string"||typeof n>"u")[d,a]=n==="small"?[60,60]:[120,120];else if(typeof n=="number")[d,a]=[n,n];else if(Array.isArray(n)){const i=n[0]??n[1]??120;[d,a]=[i,i]}else{const i=n.width??n.height??120;[d,a]=[i,i]}return[d,a]}function zn(n,c=!1){const{from:t,to:d,direction:a=c?"to left":"to right",...i}=n,l=Object.entries(i).filter(([,u])=>typeof u=="string");if(l.length>0){const u=l.map(([m,O])=>({key:parseFloat(String(m).replace(/%/g,"")),value:O})).filter(m=>!isNaN(m.key)).sort((m,O)=>m.key-O.key).map(({key:m,value:O})=>`${O} ${m}%`).join(", ");return`linear-gradient(${a}, ${u})`}return`linear-gradient(${a}, ${t||"#1677ff"}, ${d||"#1677ff"})`}function Ln(n){if(!n)return!1;let c=0,t=0,d=0;const a=n.trim();if(a.startsWith("#")){let l=a.slice(1);if(l.length===3&&(l=l.split("").map(u=>u+u).join("")),l.length>=6)c=parseInt(l.slice(0,2),16),t=parseInt(l.slice(2,4),16),d=parseInt(l.slice(4,6),16);else return!1}else{const l=a.match(/rgba?\(([^)]+)\)/i);if(!l)return!1;const u=l[1].split(",").map(m=>parseFloat(m.trim()));if(u.length<3||u.some(m=>isNaN(m)))return!1;[c,t,d]=u}return(c*299+t*587+d*114)/1e3>=178}function On(n){if(!n)return;if(typeof n=="string")return n;if(Array.isArray(n))return n[0];if("from"in n&&typeof n.from=="string")return n.from;const c=Object.entries(n).filter(([t,d])=>t!=="direction"&&typeof d=="string");if(c.length>0)return c[0][1]}function Mn(n){const{from:c,to:t,direction:d,...a}=n,i=Object.entries(a).filter(([,l])=>typeof l=="string");return i.length>0?i.map(([l,u])=>({offsetNum:parseFloat(String(l).replace(/%/g,"")),color:u})).filter(l=>!isNaN(l.offsetNum)).sort((l,u)=>l.offsetNum-u.offsetNum).map(({offsetNum:l,color:u})=>({offset:`${l}%`,color:u})):[{offset:"0%",color:c||"#1677ff"},{offset:"100%",color:t||"#1677ff"}]}const Wn="#52c41a";function In(n){return(n==null?void 0:n.strokeColor)||Wn}let Dn=0;function Gn(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!hn(n)}const Tn=["normal","exception","active","success"],r=N({name:"Progress",inheritAttrs:!1,props:{prefixCls:String,rootClassName:String,classNames:Object,styles:Object,percent:{type:Number,default:0},type:{type:String,default:"line"},status:String,showInfo:{type:Boolean,default:!0},strokeWidth:Number,strokeColor:[String,Array,Object],trailColor:String,railColor:String,width:Number,size:{type:[String,Number,Object,Array],default:"medium"},format:Function,strokeLinecap:{type:String,default:"round"},success:Object,steps:[Number,Object],gapDegree:Number,gapPlacement:String,gapPosition:String,percentPosition:{type:Object,default:()=>({})},rounding:Function},setup(n,{attrs:c}){const t=vn("progress"),d=bn(),a=P(()=>d.value.direction==="rtl"),i=Dn++,l=P(()=>n.railColor??n.trailColor),u=P(()=>{var p;return((p=n.percentPosition)==null?void 0:p.align)??"end"}),m=P(()=>{var p;return((p=n.percentPosition)==null?void 0:p.type)??"outer"}),O=P(()=>Array.isArray(n.strokeColor)?n.strokeColor[0]:n.strokeColor),un=P(()=>{const p=On(n.strokeColor);return Ln(p)}),J=P(()=>{const p=H(n),y=p!==void 0?p:n.percent;return Number.parseInt(String(y??0),10)}),E=P(()=>!Tn.includes(n.status)&&J.value>=100?"success":n.status||"normal"),K=P(()=>n.size==="medium"?"default":n.size),_=P(()=>n.type==="line"),F=P(()=>_.value&&!n.steps),Q=()=>{var f,v;if(!n.showInfo)return null;const p=H(n),y=_.value&&un.value&&m.value==="inner";let g=null;m.value==="inner"||n.format||E.value!=="exception"&&E.value!=="success"?g=(n.format??(x=>`${x}%`))(D(n.percent),D(p)):E.value==="exception"?g=_.value?e(qn,{class:"hmfw-icon"},null):e(An,{class:"hmfw-icon"},null):E.value==="success"&&(g=_.value?e(Nn,{class:"hmfw-icon"},null):e(Bn,{class:"hmfw-icon"},null));const S=q(`${t}-indicator`,{[`${t}-indicator-bright`]:y,[`${t}-indicator-${u.value}`]:F.value,[`${t}-indicator-${m.value}`]:F.value},(f=n.classNames)==null?void 0:f.indicator),$=typeof g=="string"||typeof g=="number"?String(g):void 0;return e("span",{class:S,style:(v=n.styles)==null?void 0:v.indicator,title:$},[g])},mn=()=>{var M,I,z,W,L,G,R,T,j;const[p,y]=Y(K.value,"line",{strokeWidth:n.strokeWidth}),g=n.strokeLinecap==="square"||n.strokeLinecap==="butt"?0:void 0,S={backgroundColor:l.value||void 0,borderRadius:g!==void 0?`${g}px`:void 0,height:`${y}px`,...(M=n.styles)==null?void 0:M.rail},$=H(n),v={width:`${D(n.percent)}%`,height:`${y}px`,borderRadius:g!==void 0?`${g}px`:void 0},k=O.value;k&&typeof k!="string"?v.background=zn(k,a.value):typeof k=="string"&&(v.background=k),Object.assign(v,((I=n.styles)==null?void 0:I.track)||{});const x=$!==void 0?{width:`${D($)}%`,height:`${y}px`,borderRadius:g!==void 0?`${g}px`:void 0,backgroundColor:(z=n.success)==null?void 0:z.strokeColor,...(W=n.styles)==null?void 0:W.track}:null,h=Q(),C=`${t}-track`;return e("div",{class:q(`${t}-body`,(L=n.classNames)==null?void 0:L.body,{[`${t}-body-layout-bottom`]:u.value==="center"&&m.value==="outer"}),style:{width:p>0?`${p}px`:"100%",...(G=n.styles)==null?void 0:G.body}},[e("div",{class:q(`${t}-rail`,(R=n.classNames)==null?void 0:R.rail),style:S},[e("div",{class:q(C,(T=n.classNames)==null?void 0:T.track),style:v},[m.value==="inner"&&h]),x&&e("div",{class:q(C,`${C}-success`,(j=n.classNames)==null?void 0:j.track),style:x},null)]),m.value==="outer"&&h])},X=P(()=>n.steps?typeof n.steps=="number"?n.steps:n.steps.count:0),Z=P(()=>{if(!(!n.steps||typeof n.steps=="number"))return n.steps.gap}),gn=()=>{var h,C,M,I;const p=X.value;if(!p)return null;const y=n.strokeWidth??8,[g,S]=Y(K.value,"step",{steps:p,strokeWidth:y}),$=g/p,v=(n.rounding??Math.round)(p*(D(n.percent)/100)),k=[];for(let z=0;z<p;z++){const W=z<=v-1,L=Array.isArray(n.strokeColor)?n.strokeColor[z]:typeof n.strokeColor=="string"?n.strokeColor:void 0;k.push(e("div",{key:z,class:q(`${t}-steps-item`,{[`${t}-steps-item-active`]:W},(h=n.classNames)==null?void 0:h.track),style:{backgroundColor:W?L:l.value,width:`${$}px`,height:`${S}px`,...(C=n.styles)==null?void 0:C.track}},null))}const x={...(M=n.styles)==null?void 0:M.body};return Z.value!==void 0&&(x.gap=`${Z.value}px`),e("div",{class:q(`${t}-steps-body`,(I=n.classNames)==null?void 0:I.body),style:x},[k,Q()])},nn=P(()=>{const p=n.size==="medium"&&n.width!==void 0?n.width:K.value,[y]=Y(p,n.type==="dashboard"?"dashboard":"circle");return y}),kn=()=>{var sn,en,an,on,pn,ln,rn;const p=nn.value,y=Math.max(3/p*100,6),g=Math.min(y,Math.max(p/2-1,1)),S=n.strokeWidth??g,$=Math.max((p-S)/2,.5),f=2*Math.PI*$,v=n.type==="dashboard",k=n.gapDegree!==void 0?n.gapDegree:v?75:0,x=n.gapPlacement??n.gapPosition??(v?"bottom":void 0);let h=-90;x==="bottom"?h=90+k/2:x==="top"?h=-90+k/2:x==="start"||x==="left"?h=180+k/2-(a.value?180:0):(x==="end"||x==="right")&&(h=(a.value?180:0)+k/2);const C=f-k/360*f,M=H(n),I=D(n.percent),z=C*(1-I/100),W=M!==void 0?C*(1-D(M)/100):null,L=O.value,G=!!(L&&typeof L!="string"),R=`${t}-gradient-${i}-${p}`;let T;G?T=`url(#${R})`:typeof L=="string"&&(T=L);const j=n.showInfo&&Q(),tn=p<=20,fn=q(`${t}-body`,{[`${t}-circle-gradient`]:G},(sn=n.classNames)==null?void 0:sn.body),U=e("div",{class:fn,style:{width:`${p}px`,height:`${p}px`,fontSize:`${p*.15+6}px`,...(en=n.styles)==null?void 0:en.body}},[e("svg",{viewBox:`0 0 ${p} ${p}`,width:p,height:p},[G&&e("defs",null,[e("linearGradient",{id:R,gradientUnits:"userSpaceOnUse",x1:a.value?p:0,y1:p/2,x2:a.value?0:p,y2:p/2,gradientTransform:`rotate(${-h} ${p/2} ${p/2})`},[Mn(L).map(({offset:cn,color:yn})=>e("stop",{key:cn,offset:cn,"stop-color":yn},null))])]),e("circle",{class:q(`${t}-circle-rail`,(an=n.classNames)==null?void 0:an.rail),cx:p/2,cy:p/2,r:$,stroke:l.value??"#f5f5f5","stroke-width":S,fill:"none","stroke-dasharray":`${C}px ${f}px`,transform:`rotate(${h} ${p/2} ${p/2})`,style:(on=n.styles)==null?void 0:on.rail},null),e("circle",{class:q(`${t}-circle-path`,(pn=n.classNames)==null?void 0:pn.track),cx:p/2,cy:p/2,r:$,stroke:T,"stroke-width":S,fill:"none","stroke-dasharray":`${C}px ${f}px`,"stroke-dashoffset":`${z}px`,"stroke-linecap":n.strokeLinecap,transform:`rotate(${h} ${p/2} ${p/2})`,style:(ln=n.styles)==null?void 0:ln.track},null),W!==null&&e("circle",{class:q(`${t}-circle-path`,`${t}-circle-path-success`,(rn=n.classNames)==null?void 0:rn.track),cx:p/2,cy:p/2,r:$,stroke:In(n.success),"stroke-width":S,fill:"none","stroke-dasharray":`${C}px ${f}px`,"stroke-dashoffset":`${W}px`,"stroke-linecap":n.strokeLinecap,transform:`rotate(${h} ${p/2} ${p/2})`},null)]),!tn&&j]);return tn&&j?e(Cn,{title:j},Gn(U)?U:{default:()=>[U]}):U};return()=>{var v,k;const p=n.type==="circle"&&nn.value<=20,y=q(t,`${t}-status-${E.value}`,{[`${t}-${n.type==="dashboard"?"circle":n.type}`]:n.type!=="line",[`${t}-inline-circle`]:p,[`${t}-line`]:F.value,[`${t}-line-align-${u.value}`]:F.value,[`${t}-line-position-${m.value}`]:F.value,[`${t}-steps`]:!!X.value,[`${t}-show-info`]:n.showInfo,[`${t}-small`]:n.size==="small",[`${t}-rtl`]:a.value},n.rootClassName,(v=n.classNames)==null?void 0:v.root,c.class),S=c["aria-label"]??`${J.value}%`,$=c["aria-labelledby"],f={...c};return delete f["aria-label"],delete f["aria-labelledby"],delete f.class,delete f.style,e("div",xn(f,{class:y,style:{...((k=n.styles)==null?void 0:k.root)||{},...c.style||{}},role:"progressbar","aria-valuenow":J.value,"aria-valuemin":0,"aria-valuemax":100,"aria-label":S,"aria-labelledby":$}),[X.value?gn():_.value?mn():kn()])}}}),jn={style:{display:"flex","flex-direction":"column",gap:"12px"}},En=N({__name:"ProgressBasic",setup(n){return(c,t)=>(B(),A("div",jn,[e(o(r),{percent:30}),e(o(r),{percent:50,status:"active"}),e(o(r),{percent:70,status:"exception"}),e(o(r),{percent:100}),e(o(r),{percent:50,"show-info":!1})]))}}),_n=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Progress :percent="30" />
    <Progress :percent="50" status="active" />
    <Progress :percent="70" status="exception" />
    <Progress :percent="100" />
    <Progress :percent="50" :show-info="false" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from '@hmfw/ant-design'
<\/script>
`,Fn={style:{display:"flex",gap:"16px"}},Rn=N({__name:"ProgressCircle",setup(n){return(c,t)=>(B(),A("div",Fn,[e(o(r),{type:"circle",percent:75}),e(o(r),{type:"circle",percent:70,status:"exception"}),e(o(r),{type:"circle",percent:100})]))}}),Vn=`<template>
  <div style="display: flex; gap: 16px">
    <Progress type="circle" :percent="75" />
    <Progress type="circle" :percent="70" status="exception" />
    <Progress type="circle" :percent="100" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from '@hmfw/ant-design'
<\/script>
`,Un={style:{display:"flex","flex-direction":"column",gap:"24px"}},Hn={style:{display:"flex",gap:"32px","align-items":"center"}},Jn={style:{"margin-top":"12px",display:"flex",gap:"8px"}},Kn=N({__name:"ProgressClassNames",setup(n){const c=dn(50),t=()=>{c.value=Math.min(100,c.value+10)},d=()=>{c.value=Math.max(0,c.value-10)},a=()=>{c.value=50};return(i,l)=>(B(),A("div",Un,[s("div",null,[l[0]||(l[0]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义轨道和进度条：",-1)),e(o(r),{percent:60,"class-names":{rail:"custom-rail",track:"custom-track"}})]),s("div",null,[l[1]||(l[1]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义百分比指示器：",-1)),e(o(r),{percent:75,"class-names":{indicator:"custom-indicator"}})]),s("div",null,[l[2]||(l[2]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义容器样式：",-1)),e(o(r),{percent:80,"class-names":{root:"custom-root",body:"custom-body"}})]),s("div",null,[l[3]||(l[3]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"完整自定义（组合使用）：",-1)),e(o(r),{percent:90,"class-names":{root:"complete-root",rail:"complete-rail",track:"complete-track",indicator:"complete-indicator"}})]),s("div",null,[l[4]||(l[4]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式（styles）：",-1)),e(o(r),{percent:65,styles:{rail:{background:"#f0f0f0",height:"12px",borderRadius:"6px"},track:{background:"linear-gradient(to right, #1890ff, #52c41a)",height:"12px"},indicator:{fontSize:"16px",fontWeight:"bold",color:"#722ed1"}}})]),s("div",null,[l[5]||(l[5]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"圆形进度条自定义：",-1)),s("div",Hn,[e(o(r),{type:"circle",percent:70,"class-names":{body:"circle-body",indicator:"circle-indicator"}}),e(o(r),{type:"circle",percent:85,styles:{body:{filter:"drop-shadow(0 4px 12px rgba(24, 144, 255, 0.4))"},indicator:{fontSize:"24px",fontWeight:"600",color:"#1890ff"}}})])]),s("div",null,[l[6]||(l[6]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"仪表盘进度条：",-1)),e(o(r),{type:"dashboard",percent:80,"class-names":{body:"dashboard-body",indicator:"dashboard-indicator"}})]),s("div",null,[l[10]||(l[10]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"动态进度（点击按钮改变）：",-1)),e(o(r),{percent:c.value,"class-names":{track:"dynamic-track",indicator:"dynamic-indicator"}},null,8,["percent"]),s("div",Jn,[e(o(V),{size:"small",onClick:d},{default:b(()=>[...l[7]||(l[7]=[w("-10%",-1)])]),_:1}),e(o(V),{size:"small",onClick:t},{default:b(()=>[...l[8]||(l[8]=[w("+10%",-1)])]),_:1}),e(o(V),{size:"small",onClick:a},{default:b(()=>[...l[9]||(l[9]=[w("重置",-1)])]),_:1})])])]))}}),Qn=Pn(Kn,[["__scopeId","data-v-fd3f05ee"]]),Xn=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 自定义轨道样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义轨道和进度条：</div>
      <Progress
        :percent="60"
        :class-names="{
          rail: 'custom-rail',
          track: 'custom-track',
        }"
      />
    </div>

    <!-- 自定义指示器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义百分比指示器：</div>
      <Progress :percent="75" :class-names="{ indicator: 'custom-indicator' }" />
    </div>

    <!-- 自定义根容器和主体 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义容器样式：</div>
      <Progress
        :percent="80"
        :class-names="{
          root: 'custom-root',
          body: 'custom-body',
        }"
      />
    </div>

    <!-- 完整自定义 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">完整自定义（组合使用）：</div>
      <Progress
        :percent="90"
        :class-names="{
          root: 'complete-root',
          rail: 'complete-rail',
          track: 'complete-track',
          indicator: 'complete-indicator',
        }"
      />
    </div>

    <!-- 使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式（styles）：</div>
      <Progress
        :percent="65"
        :styles="{
          rail: { background: '#f0f0f0', height: '12px', borderRadius: '6px' },
          track: { background: 'linear-gradient(to right, #1890ff, #52c41a)', height: '12px' },
          indicator: { fontSize: '16px', fontWeight: 'bold', color: '#722ed1' },
        }"
      />
    </div>

    <!-- 圆形进度条自定义 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">圆形进度条自定义：</div>
      <div style="display: flex; gap: 32px; align-items: center">
        <Progress
          type="circle"
          :percent="70"
          :class-names="{
            body: 'circle-body',
            indicator: 'circle-indicator',
          }"
        />

        <Progress
          type="circle"
          :percent="85"
          :styles="{
            body: { filter: 'drop-shadow(0 4px 12px rgba(24, 144, 255, 0.4))' },
            indicator: { fontSize: '24px', fontWeight: '600', color: '#1890ff' },
          }"
        />
      </div>
    </div>

    <!-- 仪表盘样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">仪表盘进度条：</div>
      <Progress
        type="dashboard"
        :percent="80"
        :class-names="{
          body: 'dashboard-body',
          indicator: 'dashboard-indicator',
        }"
      />
    </div>

    <!-- 动态示例 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">动态进度（点击按钮改变）：</div>
      <Progress
        :percent="dynamicPercent"
        :class-names="{
          track: 'dynamic-track',
          indicator: 'dynamic-indicator',
        }"
      />
      <div style="margin-top: 12px; display: flex; gap: 8px">
        <Button size="small" @click="decrease">-10%</Button>
        <Button size="small" @click="increase">+10%</Button>
        <Button size="small" @click="reset">重置</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Progress, Button } from '@hmfw/ant-design'

const dynamicPercent = ref(50)

const increase = () => {
  dynamicPercent.value = Math.min(100, dynamicPercent.value + 10)
}

const decrease = () => {
  dynamicPercent.value = Math.max(0, dynamicPercent.value - 10)
}

const reset = () => {
  dynamicPercent.value = 50
}
<\/script>

<style scoped>
:deep(.custom-rail) {
  background: linear-gradient(to right, #f0f0f0, #e0e0e0);
  height: 10px;
  border-radius: 5px;
}

:deep(.custom-track) {
  background: linear-gradient(to right, #1890ff, #52c41a);
  height: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(24, 144, 255, 0.3);
}

:deep(.custom-indicator) {
  font-weight: bold;
  color: #722ed1;
  font-size: 16px;
}

:deep(.custom-root) {
  background: #fafafa;
  padding: 12px;
  border-radius: 8px;
}

:deep(.custom-body) {
  opacity: 0.9;
}

:deep(.complete-root) {
  background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
  padding: 16px;
  border-radius: 12px;
  border: 2px solid #667eea30;
}

:deep(.complete-rail) {
  background: #e8e8e8;
  height: 14px;
  border-radius: 7px;
}

:deep(.complete-track) {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  height: 14px;
  border-radius: 7px;
  position: relative;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.2);
  }
  100% {
    filter: brightness(1);
  }
}

:deep(.complete-indicator) {
  font-size: 18px;
  font-weight: 700;
  color: #667eea;
  text-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
}

:deep(.circle-body) {
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15));
  transform: scale(1.05);
}

:deep(.circle-indicator) {
  font-size: 20px;
  font-weight: 600;
  color: #52c41a;
}

:deep(.dashboard-body) {
  filter: drop-shadow(0 4px 12px rgba(250, 140, 22, 0.3));
}

:deep(.dashboard-indicator) {
  font-size: 24px;
  font-weight: 700;
  color: #fa8c16;
}

:deep(.dynamic-track) {
  transition: all 0.5s ease;
  background: linear-gradient(to right, #722ed1, #eb2f96);
}

:deep(.dynamic-indicator) {
  transition: all 0.5s ease;
  font-weight: 600;
  color: #722ed1;
}
</style>
`,Yn={style:{display:"flex","flex-direction":"column",gap:"16px"}},Zn=N({__name:"ProgressCustom",setup(n){return(c,t)=>(B(),A("div",Yn,[s("div",null,[t[0]||(t[0]=s("div",{style:{"margin-bottom":"8px"}},"Custom Size (number)",-1)),e(o(r),{type:"circle",percent:75,size:80})]),s("div",null,[t[1]||(t[1]=s("div",{style:{"margin-bottom":"8px"}},"Small Size",-1)),e(o(r),{type:"circle",percent:75,size:"small"})]),s("div",null,[t[2]||(t[2]=s("div",{style:{"margin-bottom":"8px"}},"Custom Gap Degree",-1)),e(o(r),{type:"dashboard",percent:75,"gap-degree":30})]),s("div",null,[t[3]||(t[3]=s("div",{style:{"margin-bottom":"8px"}},"Square Linecap",-1)),e(o(r),{type:"circle",percent:75,"stroke-linecap":"square"})])]))}}),nt=`<template>
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
import { Progress } from '@hmfw/ant-design'
<\/script>
`,tt={style:{display:"flex",gap:"16px"}},st=N({__name:"ProgressDashboard",setup(n){return(c,t)=>(B(),A("div",tt,[e(o(r),{type:"dashboard",percent:75}),e(o(r),{type:"dashboard",percent:75,"gap-degree":30})]))}}),et=`<template>
  <div style="display: flex; gap: 16px">
    <Progress type="dashboard" :percent="75" />
    <Progress type="dashboard" :percent="75" :gap-degree="30" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from '@hmfw/ant-design'
<\/script>
`,at={style:{display:"flex",gap:"8px","margin-top":"12px"}},ot=N({__name:"ProgressDynamic",setup(n){const c=dn(0);function t(){c.value=Math.min(c.value+10,100)}function d(){c.value=Math.max(c.value-10,0)}return(a,i)=>(B(),A(wn,null,[e(o(r),{percent:c.value},null,8,["percent"]),s("div",at,[e(o(V),{onClick:d},{default:b(()=>[...i[0]||(i[0]=[w("-",-1)])]),_:1}),e(o(V),{onClick:t},{default:b(()=>[...i[1]||(i[1]=[w("+",-1)])]),_:1})])],64))}}),pt=`<template>
  <Progress :percent="percent" />
  <div style="display: flex; gap: 8px; margin-top: 12px">
    <Button @click="decline">-</Button>
    <Button @click="increase">+</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Progress, Button } from '@hmfw/ant-design'

const percent = ref(0)

function increase() {
  percent.value = Math.min(percent.value + 10, 100)
}

function decline() {
  percent.value = Math.max(percent.value - 10, 0)
}
<\/script>
`,lt={style:{display:"flex","flex-direction":"column",gap:"16px"}},rt=N({__name:"ProgressGapPlacement",setup(n){return(c,t)=>(B(),A("div",lt,[s("div",null,[t[0]||(t[0]=s("span",{style:{display:"inline-block",width:"180px"}},"默认（gapPlacement=bottom）",-1)),e(o(r),{type:"dashboard",percent:75,width:80})]),s("div",null,[t[1]||(t[1]=s("span",{style:{display:"inline-block",width:"180px"}},"gapPlacement=top",-1)),e(o(r),{type:"dashboard",percent:75,width:80,"gap-placement":"top"})]),s("div",null,[t[2]||(t[2]=s("span",{style:{display:"inline-block",width:"180px"}},"gapPlacement=start",-1)),e(o(r),{type:"dashboard",percent:75,width:80,"gap-placement":"start"})]),s("div",null,[t[3]||(t[3]=s("span",{style:{display:"inline-block",width:"180px"}},"gapPlacement=end",-1)),e(o(r),{type:"dashboard",percent:75,width:80,"gap-placement":"end"})])]))}}),ct=`<script setup lang="ts">
import { Progress } from '@hmfw/ant-design'
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
`,it={style:{display:"flex","flex-direction":"column",gap:"16px"}},dt={style:{display:"flex",gap:"24px"}},ut=N({__name:"ProgressGradient",setup(n){return(c,t)=>(B(),A("div",it,[s("div",null,[t[0]||(t[0]=s("div",{style:{"margin-bottom":"8px"}},"线形渐变（from-to）",-1)),e(o(r),{percent:60,"stroke-color":{from:"#108ee9",to:"#87d068"}})]),s("div",null,[t[1]||(t[1]=s("div",{style:{"margin-bottom":"8px"}},"线形渐变（多色 stop）",-1)),e(o(r),{percent:80,"stroke-color":{"0%":"#108ee9","50%":"#87d068","100%":"#ffcb00"}})]),s("div",null,[t[2]||(t[2]=s("div",{style:{"margin-bottom":"8px"}},"成功分段 success.percent",-1)),e(o(r),{percent:60,success:{percent:30,strokeColor:"#52c41a"}})]),s("div",null,[t[3]||(t[3]=s("div",{style:{"margin-bottom":"8px"}},"圆形 / 仪表盘渐变",-1)),s("div",dt,[e(o(r),{type:"circle",percent:70,"stroke-color":{"0%":"#108ee9","100%":"#87d068"}}),e(o(r),{type:"dashboard",percent:70,"stroke-color":{"0%":"#108ee9","100%":"#87d068"}}),e(o(r),{type:"circle",percent:90,"stroke-color":{from:"#1677ff",to:"#ff4d4f"}})])])]))}}),mt=`<template>
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
import { Progress } from '@hmfw/ant-design'
<\/script>
`,gt={style:{display:"flex","flex-direction":"column",gap:"16px"}},kt=N({__name:"ProgressSteps",setup(n){return(c,t)=>(B(),A("div",gt,[s("div",null,[t[0]||(t[0]=s("div",{style:{"margin-bottom":"8px"}},"Steps Progress (5 steps)",-1)),e(o(r),{percent:50,steps:5})]),s("div",null,[t[1]||(t[1]=s("div",{style:{"margin-bottom":"8px"}},"Steps Progress (10 steps)",-1)),e(o(r),{percent:30,steps:10})]),s("div",null,[t[2]||(t[2]=s("div",{style:{"margin-bottom":"8px"}},"Small Steps",-1)),e(o(r),{percent:60,steps:5,size:"small"})]),s("div",null,[t[3]||(t[3]=s("div",{style:{"margin-bottom":"8px"}},"Steps with Custom Color",-1)),e(o(r),{percent:80,steps:5,"stroke-color":"#52c41a"})]),s("div",null,[t[4]||(t[4]=s("div",{style:{"margin-bottom":"8px"}},"对象形式 steps（指定段数与间距）",-1)),e(o(r),{percent:50,steps:{count:4,gap:12}})]),s("div",null,[t[5]||(t[5]=s("div",{style:{"margin-bottom":"8px"}},"分段渐变色（数组）",-1)),e(o(r),{percent:60,steps:5,"stroke-color":["#f5222d","#fa8c16","#fadb14","#52c41a","#1677ff"]})])]))}}),ft=`<template>
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
import { Progress } from '@hmfw/ant-design'
<\/script>
`,yt={style:{display:"flex","flex-direction":"column",gap:"16px"}},vt=N({__name:"ProgressV6",setup(n){return(c,t)=>(B(),A("div",yt,[s("div",null,[t[0]||(t[0]=s("span",{style:{display:"inline-block",width:"200px"}},"size=[200, 12]（数组）",-1)),e(o(r),{percent:60,size:[200,12]})]),s("div",null,[t[1]||(t[1]=s("span",{style:{display:"inline-block",width:"200px"}},"size={width:300, height:10}",-1)),e(o(r),{percent:40,size:{width:300,height:10}})]),s("div",null,[t[2]||(t[2]=s("span",{style:{display:"inline-block",width:"200px"}},"size=14（小圆形 + Tooltip）",-1)),e(o(r),{type:"circle",percent:60,size:14})]),s("div",null,[t[3]||(t[3]=s("span",{style:{display:"inline-block",width:"200px"}},"steps={count:6, gap:8}",-1)),e(o(r),{percent:50,steps:{count:6,gap:8}})]),s("div",null,[t[4]||(t[4]=s("span",{style:{display:"inline-block",width:"200px"}},"strokeColor 数组（每段不同色）",-1)),e(o(r),{percent:60,steps:5,"stroke-color":["#f5222d","#fa8c16","#fadb14","#52c41a","#1677ff"]})]),s("div",null,[t[5]||(t[5]=s("span",{style:{display:"inline-block",width:"200px"}},"rounding=Math.ceil",-1)),e(o(r),{percent:41,steps:5,rounding:Math.ceil},null,8,["rounding"])])]))}}),bt=`<script setup lang="ts">
import { Progress } from '@hmfw/ant-design'
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
`,xt={class:"markdown-body"},zt={__name:"progress",setup(n,{expose:c}){return c({frontmatter:{}}),(d,a)=>{const i=$n("DemoBlock");return B(),A("div",xt,[a[0]||(a[0]=s("h1",{id:"progress-进度条",tabindex:"-1"},"Progress 进度条",-1)),a[1]||(a[1]=s("p",null,"展示操作的当前进度。",-1)),a[2]||(a[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),a[3]||(a[3]=s("ul",null,[s("li",null,"在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态"),s("li",null,"当操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时"),s("li",null,"当需要显示一个操作完成的百分比时")],-1)),a[4]||(a[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),a[5]||(a[5]=s("h3",{id:"进度条",tabindex:"-1"},"进度条",-1)),a[6]||(a[6]=s("p",null,"标准的进度条。",-1)),e(i,{title:"进度条",source:o(_n)},{default:b(()=>[e(En)]),_:1},8,["source"]),a[7]||(a[7]=s("h3",{id:"圆形进度",tabindex:"-1"},"圆形进度",-1)),a[8]||(a[8]=s("p",null,"圆形进度条。",-1)),e(i,{title:"圆形进度",source:o(Vn)},{default:b(()=>[e(Rn)]),_:1},8,["source"]),a[9]||(a[9]=s("h3",{id:"仪表盘",tabindex:"-1"},"仪表盘",-1)),a[10]||(a[10]=s("p",null,"仪表盘样式的进度条。",-1)),e(i,{title:"仪表盘",source:o(et)},{default:b(()=>[e(st)]),_:1},8,["source"]),a[11]||(a[11]=s("h3",{id:"动态展示",tabindex:"-1"},"动态展示",-1)),a[12]||(a[12]=s("p",null,"会动的进度条才是好进度条。",-1)),e(i,{title:"动态展示",source:o(pt)},{default:b(()=>[e(ot)]),_:1},8,["source"]),a[13]||(a[13]=s("h3",{id:"步骤进度条",tabindex:"-1"},"步骤进度条",-1)),a[14]||(a[14]=s("p",null,"步骤进度条。",-1)),e(i,{title:"步骤进度条",source:o(ft)},{default:b(()=>[e(kt)]),_:1},8,["source"]),a[15]||(a[15]=s("h3",{id:"渐变色",tabindex:"-1"},"渐变色",-1)),a[16]||(a[16]=s("p",null,"渐变色进度条、成功分段，以及圆形 / 仪表盘渐变。圆形与仪表盘的渐变在屏幕空间内始终保持水平方向，不受缺口旋转影响。",-1)),e(i,{title:"渐变色",source:o(mt)},{default:b(()=>[e(ut)]),_:1},8,["source"]),a[17]||(a[17]=s("h3",{id:"自定义",tabindex:"-1"},"自定义",-1)),a[18]||(a[18]=s("p",null,"自定义尺寸、间隙角度和线帽样式。",-1)),e(i,{title:"自定义",source:o(nt)},{default:b(()=>[e(Zn)]),_:1},8,["source"]),a[19]||(a[19]=s("h3",{id:"仪表盘缺口位置",tabindex:"-1"},"仪表盘缺口位置",-1)),a[20]||(a[20]=s("p",null,[w("通过 "),s("code",null,"gapPlacement"),w(" 控制仪表盘缺口位置（v6 替代 "),s("code",null,"gapPosition"),w("）。")],-1)),e(i,{title:"仪表盘缺口位置",source:o(ct)},{default:b(()=>[e(rt)]),_:1},8,["source"]),a[21]||(a[21]=s("h3",{id:"v6-新特性",tabindex:"-1"},"v6 新特性",-1)),a[22]||(a[22]=s("p",null,[s("code",null,"size"),w(" 数组形式、"),s("code",null,"steps"),w(" 对象形式、"),s("code",null,"rounding"),w(" 自定义舍入、小圆形（≤20px）自动套 Tooltip 等。")],-1)),e(i,{title:"v6 新特性",source:o(bt)},{default:b(()=>[e(vt)]),_:1},8,["source"]),a[23]||(a[23]=s("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),a[24]||(a[24]=s("p",null,[w("通过 "),s("code",null,"classNames"),w(" / "),s("code",null,"styles"),w(" 对轨道、进度条、指示器等子元素做细粒度样式控制，支持线形、圆形、仪表盘三种类型。")],-1)),e(i,{title:"语义化 className 与 style",source:o(Xn)},{default:b(()=>[e(Qn)]),_:1},8,["source"]),a[25]||(a[25]=Sn(`<h2 id="api" tabindex="-1">API</h2><h3 id="progress-props" tabindex="-1">Progress Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td><code>&#39;line&#39; | &#39;circle&#39; | &#39;dashboard&#39;</code></td><td><code>&#39;line&#39;</code></td></tr><tr><td>percent</td><td>百分比</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>status</td><td>状态</td><td><code>&#39;success&#39; | &#39;exception&#39; | &#39;normal&#39; | &#39;active&#39;</code></td><td>-</td></tr><tr><td>showInfo</td><td>是否显示进度数值或状态图标</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>strokeColor</td><td>进度条色彩，支持字符串 / 数组 / 渐变对象</td><td><code>string | string[] | ProgressGradient</code></td><td>-</td></tr><tr><td>railColor</td><td>未完成分段颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>trailColor</td><td>(已废弃) 使用 <code>railColor</code> 代替</td><td><code>string</code></td><td>-</td></tr><tr><td>strokeWidth</td><td>进度条线宽度</td><td><code>number</code></td><td><code>8</code> (line), 自适应 (circle)</td></tr><tr><td>strokeLinecap</td><td>进度条端点形状</td><td><code>&#39;round&#39; | &#39;butt&#39; | &#39;square&#39;</code></td><td><code>&#39;round&#39;</code></td></tr><tr><td>size</td><td>进度条尺寸</td><td><code>&#39;small&#39; | &#39;medium&#39; | &#39;default&#39; | number | [number, number] | { width?, height? }</code></td><td><code>&#39;medium&#39;</code></td></tr><tr><td>width</td><td>(已废弃) circle/dashboard 画布宽度，使用 <code>size</code> 代替</td><td><code>number</code></td><td><code>120</code></td></tr><tr><td>format</td><td>内容模板函数，可返回 VNode</td><td><code>(percent?: number, successPercent?: number) =&gt; VNode | string | number | null</code></td><td>-</td></tr><tr><td>steps</td><td>步骤进度条；对象形式可指定段间距</td><td><code>number | { count: number; gap: number }</code></td><td>-</td></tr><tr><td>success</td><td>成功进度条配置</td><td><code>{ percent?: number; strokeColor?: string }</code></td><td>-</td></tr><tr><td>gapDegree</td><td>圆形进度条缺口角度，dashboard 默认 75</td><td><code>number</code></td><td><code>0</code> (circle), <code>75</code> (dashboard)</td></tr><tr><td>gapPlacement</td><td>仪表盘缺口位置（v6 新 API）</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;bottom&#39;</code> (dashboard)</td></tr><tr><td>gapPosition</td><td>(已废弃) 使用 <code>gapPlacement</code> 代替</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;left&#39; | &#39;right&#39;</code></td><td>-</td></tr><tr><td>percentPosition</td><td>进度文字位置</td><td><code>{ align?: &#39;start&#39; | &#39;center&#39; | &#39;end&#39;; type?: &#39;inner&#39; | &#39;outer&#39; }</code></td><td><code>{ align: &#39;end&#39;, type: &#39;outer&#39; }</code></td></tr><tr><td>rounding</td><td>步骤进度条已激活段数舍入函数</td><td><code>(step: number) =&gt; number</code></td><td><code>Math.round</code></td></tr><tr><td>rootClassName</td><td>根元素类名</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ProgressClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ProgressStyles</code></td><td>-</td></tr></tbody></table><h3 id="progressgradient" tabindex="-1">ProgressGradient</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">ProgressGradient</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  direction<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 渐变方向，如 &#39;to right&#39;</span>
  from<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 起始颜色</span>
  to<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 结束颜色</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token comment">// 多色渐变，如 &#39;0%&#39;: &#39;#108ee9&#39;, &#39;100%&#39;: &#39;#87d068&#39;</span>
<span class="token punctuation">}</span>
</code></pre><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对进度条的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">ProgressClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 进度条根容器</span>
  body<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 进度条主体容器</span>
  rail<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 背景轨道（未完成部分）</span>
  track<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 已完成轨道</span>
  indicator<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 百分比文本</span>
<span class="token punctuation">}</span>

<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">ProgressStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 进度条根容器</span>
  body<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 进度条主体容器</span>
  rail<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 背景轨道</span>
  track<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 已完成轨道</span>
  indicator<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 百分比文本</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><p><strong>线形进度条 (type=“line”)</strong></p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-progress hmfw-progress-line<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-progress-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.body / styles.body 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-progress-rail<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.rail / styles.rail 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-progress-track<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 50%</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.track / styles.track 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-progress-indicator<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>50%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.indicator / styles.indicator 应用于此 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><p><strong>圆形进度条 (type=“circle” 或 “dashboard”)</strong></p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-progress hmfw-progress-circle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-progress-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.body / styles.body 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>-50 -50 100 100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-progress-rail<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.rail / styles.rail 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-progress-track<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.track / styles.track 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-progress-indicator<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>50%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.indicator / styles.indicator 应用于此 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义轨道样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span>
    <span class="token attr-name">:percent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>60<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      rail: &#39;my-rail&#39;,
      track: &#39;my-track&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义百分比文本 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span> <span class="token attr-name">:percent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>75<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ indicator: &#39;my-indicator&#39; }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 圆形进度条自定义 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circle<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:percent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>80<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      body: &#39;my-circle-body&#39;,
      indicator: &#39;my-circle-text&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-rail)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #f0f0f0<span class="token punctuation">,</span> #e0e0e0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-track)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #1890ff<span class="token punctuation">,</span> #52c41a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-indicator)</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #722ed1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-circle-body)</span> <span class="token punctuation">{</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>0 2px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-circle-text)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制颜色 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span>
    <span class="token attr-name">:percent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>60<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      rail: { background: &#39;#f0f0f0&#39; },
      track: { background: &#39;linear-gradient(to right, #1890ff, #52c41a)&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义指示器样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span>
    <span class="token attr-name">:percent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>75<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      indicator: {
        fontSize: &#39;18px&#39;,
        fontWeight: &#39;bold&#39;,
        color: &#39;#ff4d4f&#39;,
      },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 圆形进度条容器样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Progress</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circle<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:percent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>80<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      body: { filter: &#39;drop-shadow(0 4px 12px rgba(24, 144, 255, 0.3))&#39; },
      indicator: { fontSize: &#39;24px&#39;, color: &#39;#1890ff&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>对于 <code>strokeColor</code> / <code>railColor</code> 等 props，建议优先使用组件提供的属性；<code>styles.track</code> / <code>styles.rail</code> 适合做细微调整</li><li>圆形进度条的 <code>rail</code> / <code>track</code> 对应 SVG <code>&lt;circle&gt;</code> 元素，部分 CSS 属性（如 <code>stroke</code>）需使用 SVG 属性</li></ul><hr><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-success</code></td><td>成功状态色</td><td><code>#52c41a</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-white</code></td><td>纯白色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次级填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-sm</code></td><td>小号字号</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-padding-xxs</code></td><td>超超小内边距</td><td><code>2px</code></td></tr><tr><td><code>--hmfw-margin-xxs</code></td><td>超超小外边距</td><td><code>2px</code></td></tr><tr><td><code>--hmfw-margin-xs</code></td><td>超小外边距</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-motion-duration-slow</code></td><td>慢速动画时长</td><td><code>0.3s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>缓入缓出曲线</td><td><code>cubic-bezier(0.645, 0.045, 0.355, 1)</code></td></tr></tbody></table><hr><h3 id="注意事项-1" tabindex="-1">注意事项</h3><ul><li><code>size</code> 默认值由 v5 的 <code>&#39;default&#39;</code> 改为 v6 的 <code>&#39;medium&#39;</code>，二者行为等价；<code>&#39;default&#39;</code> 会保留兼容。</li><li>圆形 <code>strokeColor</code> 渐变通过 <code>&lt;linearGradient&gt;</code> 实现，支持 <code>from/to</code> 与 <code>0%/50%/100%</code> 等百分比 stop；百分比 stop 会按数值升序排序。圆形/仪表盘使用 <code>userSpaceOnUse</code> + <code>gradientTransform</code> 抵消缺口旋转，渐变方向在屏幕空间内保持水平（RTL 下自动反向）。</li><li>圆形 <code>size &lt;= 20</code> 时自动添加 <code>inline-circle</code> class，并将 indicator 包入 <code>Tooltip</code> 显示（小圆形容纳不下文字）。</li><li><code>aria-label</code> 默认为 <code>&quot;\${percent}%&quot;</code>，可通过 attr 透传覆盖。</li><li>RTL 由 <code>ConfigProvider direction=&quot;rtl&quot;</code> 触发，渐变方向自动反转、根元素加 <code>rtl</code> class。</li></ul>`,27))])}}};export{zt as default};
