import{d as O,b as z}from"./icons-B7DG7jjo.js";import{m as y,L as A,l as n,d as w,y as b,i as x,I as d,f as r,F as R,B as F,E as T,P,j as V}from"./index-B2-fWtt3.js";import{c as S}from"./cls-S9IiI6wd.js";import{I as D}from"./Icon-BgwCb1-e.js";function G(e){return!e||e<0?0:e>100?100:e}function I(e){return e==null?void 0:e.percent}function L(e,s,o){let c=-1,t=-1;if(s==="line"){const a=o==null?void 0:o.strokeWidth;typeof e=="string"||e===void 0?t=a||(e==="small"?6:8):typeof e=="number"?t=e:(c=e.width??-1,t=e.height??8)}else(s==="circle"||s==="dashboard")&&(typeof e=="string"||e===void 0?c=t=e==="small"?60:120:typeof e=="number"?c=t=e:c=t=e.width??e.height??120);return[c,t]}function E(e){const{from:s,to:o,direction:c="to right",...t}=e;if(Object.keys(t).length>0){const a=Object.entries(t).map(([m,k])=>({key:parseFloat(m.replace(/%/g,"")),value:k})).filter(m=>!isNaN(m.key)).sort((m,k)=>m.key-k.key).map(({key:m,value:k})=>`${k} ${m}%`).join(", ");return`linear-gradient(${c}, ${a})`}return`linear-gradient(${c}, ${s||"#1677ff"}, ${o||"#1677ff"})`}const l=y({name:"Progress",props:{percent:{type:Number,default:0},type:{type:String,default:"line"},status:String,showInfo:{type:Boolean,default:!0},strokeWidth:Number,strokeColor:[String,Object],trailColor:String,railColor:String,size:{type:[String,Number,Object],default:"default"},width:{type:Number,default:120},format:Function,strokeLinecap:{type:String,default:"round"},success:Object,steps:Number,gapDegree:Number,percentPosition:{type:Object,default:()=>({align:"end",type:"outer"})}},setup(e){const s=A("progress"),o=w(()=>e.railColor??e.trailColor),c=w(()=>{var i;return((i=e.percentPosition)==null?void 0:i.align)??"end"}),t=w(()=>{var i;return((i=e.percentPosition)==null?void 0:i.type)??"outer"}),a=w(()=>{if(e.status)return e.status;const i=I(e.success);return(i!==void 0?i:e.percent)>=100?"success":"normal"}),m=w(()=>{const i=I(e.success);if(e.format)return e.format(e.percent,i);if(t.value==="outer"&&!e.format){if(a.value==="exception")return e.type==="line"?n(D,{component:O},null):n(D,{component:O},null);if(a.value==="success")return e.type==="line"?n(D,{component:z},null):n(D,{component:z},null)}return`${e.percent}%`}),k=()=>{var _;const[i,p]=L(e.size,"line",{strokeWidth:e.strokeWidth}),u=e.strokeLinecap==="square"||e.strokeLinecap==="butt"?0:void 0,f={backgroundColor:o.value||void 0,borderRadius:u!==void 0?`${u}px`:void 0,height:`${p}px`},h=I(e.success);let g={width:`${G(e.percent)}%`,height:`${p}px`,borderRadius:u!==void 0?`${u}px`:void 0};e.strokeColor&&typeof e.strokeColor=="object"?g.background=E(e.strokeColor):g.background=e.strokeColor||void 0;const v=h!==void 0?{width:`${G(h)}%`,height:`${p}px`,borderRadius:u!==void 0?`${u}px`:void 0,backgroundColor:(_=e.success)==null?void 0:_.strokeColor}:null,$=e.showInfo&&n("span",{class:S(`${s}-indicator`,`${s}-indicator-${c.value}`,`${s}-indicator-${t.value}`)},[m.value]);return n("div",{class:S(`${s}-body`,{[`${s}-body-layout-bottom`]:c.value==="center"&&t.value==="outer"}),style:{width:i>0?`${i}px`:"100%"}},[n("div",{class:`${s}-rail`,style:f},[n("div",{class:`${s}-track`,style:g},[t.value==="inner"&&$]),v&&n("div",{class:S(`${s}-track`,`${s}-track-success`),style:v},null)]),t.value==="outer"&&$])},N=()=>{if(!e.steps)return null;const[i,p]=L(e.size,"line",{strokeWidth:e.strokeWidth,steps:e.steps}),u=i/e.steps,f=Math.round(e.steps*(e.percent/100)),h=Array.from({length:e.steps},(g,v)=>{const $=v<f;return n("div",{key:v,class:S(`${s}-steps-item`,{[`${s}-steps-item-active`]:$}),style:{width:`${u}px`,height:`${p}px`,backgroundColor:$?e.strokeColor||void 0:o.value||void 0}},null)}),C=e.showInfo&&n("span",{class:`${s}-indicator`},[m.value]);return n("div",{class:`${s}-steps-body`},[h,C])},M=()=>{var j;const[i]=L(e.size,e.type,{}),p=e.strokeWidth??Math.max(3/i*100,6),u=(i-p)/2,f=2*Math.PI*u,h=e.type==="dashboard",C=e.gapDegree!==void 0?e.gapDegree:h?75:0,g=f-C/360*f,v=I(e.success),$=G(e.percent),_=g*(1-$/100),W=v!==void 0?g*(1-G(v)/100):null,B=h?90+C/2:-90,q=e.showInfo&&n("div",{class:`${s}-indicator`},[m.value]);return n("div",{class:`${s}-body`,style:{width:`${i}px`,height:`${i}px`,fontSize:`${i*.15+6}px`}},[n("svg",{viewBox:`0 0 ${i} ${i}`,width:i,height:i},[n("circle",{class:`${s}-circle-rail`,cx:i/2,cy:i/2,r:u,stroke:o.value??"#f5f5f5","stroke-width":p,fill:"none"},null),n("circle",{class:`${s}-circle-path`,cx:i/2,cy:i/2,r:u,stroke:e.strokeColor??void 0,"stroke-width":p,fill:"none","stroke-dasharray":`${g}px ${f}px`,"stroke-dashoffset":`${_}px`,"stroke-linecap":e.strokeLinecap,transform:`rotate(${B} ${i/2} ${i/2})`},null),W!==null&&n("circle",{class:S(`${s}-circle-path`,`${s}-circle-path-success`),cx:i/2,cy:i/2,r:u,stroke:((j=e.success)==null?void 0:j.strokeColor)??"#52c41a","stroke-width":p,fill:"none","stroke-dasharray":`${g}px ${f}px`,"stroke-dashoffset":`${W}px`,"stroke-linecap":e.strokeLinecap,transform:`rotate(${B} ${i/2} ${i/2})`},null)]),q])};return()=>{const i=e.type==="line",p=i&&!e.steps;return n("div",{class:S(s,`${s}-status-${a.value}`,{[`${s}-${e.type==="dashboard"?"circle":e.type}`]:e.type!=="line",[`${s}-line`]:p,[`${s}-line-align-${c.value}`]:p,[`${s}-line-position-${t.value}`]:p,[`${s}-steps`]:!!e.steps,[`${s}-show-info`]:e.showInfo,[`${s}-small`]:e.size==="small"}),role:"progressbar","aria-valuenow":e.percent,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${e.percent}%`},[e.steps?N():i?k():M()])}}}),K={style:{display:"flex","flex-direction":"column",gap:"12px"}},H=y({__name:"ProgressBasic",setup(e){return(s,o)=>(b(),x("div",K,[n(d(l),{percent:30}),n(d(l),{percent:50,status:"active"}),n(d(l),{percent:70,status:"exception"}),n(d(l),{percent:100}),n(d(l),{percent:50,"show-info":!1})]))}}),J=`<template>
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
`,Q={style:{display:"flex",gap:"16px"}},U=y({__name:"ProgressCircle",setup(e){return(s,o)=>(b(),x("div",Q,[n(d(l),{type:"circle",percent:75}),n(d(l),{type:"circle",percent:70,status:"exception"}),n(d(l),{type:"circle",percent:100})]))}}),X=`<template>
  <div style="display: flex; gap: 16px;">
    <Progress type="circle" :percent="75" />
    <Progress type="circle" :percent="70" status="exception" />
    <Progress type="circle" :percent="100" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,Y={style:{display:"flex","flex-direction":"column",gap:"16px"}},Z=y({__name:"ProgressCustom",setup(e){return(s,o)=>(b(),x("div",Y,[r("div",null,[o[0]||(o[0]=r("div",{style:{"margin-bottom":"8px"}},"Custom Size (number)",-1)),n(d(l),{type:"circle",percent:75,size:80})]),r("div",null,[o[1]||(o[1]=r("div",{style:{"margin-bottom":"8px"}},"Small Size",-1)),n(d(l),{type:"circle",percent:75,size:"small"})]),r("div",null,[o[2]||(o[2]=r("div",{style:{"margin-bottom":"8px"}},"Custom Gap Degree",-1)),n(d(l),{type:"dashboard",percent:75,"gap-degree":30})]),r("div",null,[o[3]||(o[3]=r("div",{style:{"margin-bottom":"8px"}},"Square Linecap",-1)),n(d(l),{type:"circle",percent:75,"stroke-linecap":"square"})])]))}}),ee=`<template>
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
`,te={style:{display:"flex",gap:"16px"}},ne=y({__name:"ProgressDashboard",setup(e){return(s,o)=>(b(),x("div",te,[n(d(l),{type:"dashboard",percent:75}),n(d(l),{type:"dashboard",percent:75,"gap-degree":30})]))}}),se=`<template>
  <div style="display: flex; gap: 16px;">
    <Progress type="dashboard" :percent="75" />
    <Progress type="dashboard" :percent="75" :gap-degree="30" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
<\/script>
`,re=y({__name:"ProgressDynamic",setup(e){const s=F(0);function o(){s.value=Math.min(s.value+10,100)}function c(){s.value=Math.max(s.value-10,0)}return(t,a)=>(b(),x(R,null,[n(d(l),{percent:s.value},null,8,["percent"]),r("div",{style:{display:"flex",gap:"8px","margin-top":"12px"}},[r("button",{onClick:c},"-"),r("button",{onClick:o},"+")])],64))}}),oe=`<template>
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
`,ie={style:{display:"flex","flex-direction":"column",gap:"16px"}},de=y({__name:"ProgressGradient",setup(e){return(s,o)=>(b(),x("div",ie,[r("div",null,[o[0]||(o[0]=r("div",{style:{"margin-bottom":"8px"}},"Gradient (from-to)",-1)),n(d(l),{percent:60,"stroke-color":{from:"#108ee9",to:"#87d068"}})]),r("div",null,[o[1]||(o[1]=r("div",{style:{"margin-bottom":"8px"}},"Gradient (multi-stop)",-1)),n(d(l),{percent:80,"stroke-color":{"0%":"#108ee9","50%":"#87d068","100%":"#ffcb00"}})]),r("div",null,[o[2]||(o[2]=r("div",{style:{"margin-bottom":"8px"}},"Success Segment",-1)),n(d(l),{percent:60,success:{percent:30,strokeColor:"#52c41a"}})])]))}}),le=`<template>
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
`,ae={style:{display:"flex","flex-direction":"column",gap:"16px"}},ce=y({__name:"ProgressSteps",setup(e){return(s,o)=>(b(),x("div",ae,[r("div",null,[o[0]||(o[0]=r("div",{style:{"margin-bottom":"8px"}},"Steps Progress (5 steps)",-1)),n(d(l),{percent:50,steps:5})]),r("div",null,[o[1]||(o[1]=r("div",{style:{"margin-bottom":"8px"}},"Steps Progress (10 steps)",-1)),n(d(l),{percent:30,steps:10})]),r("div",null,[o[2]||(o[2]=r("div",{style:{"margin-bottom":"8px"}},"Small Steps",-1)),n(d(l),{percent:60,steps:5,size:"small"})]),r("div",null,[o[3]||(o[3]=r("div",{style:{"margin-bottom":"8px"}},"Steps with Custom Color",-1)),n(d(l),{percent:80,steps:5,"stroke-color":"#52c41a"})])]))}}),pe=`<template>
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
`,ue={class:"markdown-body"},ye={__name:"progress",setup(e,{expose:s}){return s({frontmatter:{}}),(c,t)=>{const a=T("DemoBlock");return b(),x("div",ue,[t[0]||(t[0]=r("h1",{id:"progress-",tabindex:"-1"},"Progress 进度条",-1)),t[1]||(t[1]=r("p",null,"展示操作的当前进度。",-1)),t[2]||(t[2]=r("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=r("ul",null,[r("li",null,"在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态"),r("li",null,"当操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时"),r("li",null,"当需要显示一个操作完成的百分比时")],-1)),t[4]||(t[4]=r("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=r("h3",{id:"-2",tabindex:"-1"},"进度条",-1)),t[6]||(t[6]=r("p",null,"标准的进度条。",-1)),n(a,{title:"进度条",source:d(J)},{default:P(()=>[n(H)]),_:1},8,["source"]),t[7]||(t[7]=r("h3",{id:"-3",tabindex:"-1"},"圆形进度",-1)),t[8]||(t[8]=r("p",null,"圆形进度条。",-1)),n(a,{title:"圆形进度",source:d(X)},{default:P(()=>[n(U)]),_:1},8,["source"]),t[9]||(t[9]=r("h3",{id:"-4",tabindex:"-1"},"仪表盘",-1)),t[10]||(t[10]=r("p",null,"仪表盘样式的进度条。",-1)),n(a,{title:"仪表盘",source:d(se)},{default:P(()=>[n(ne)]),_:1},8,["source"]),t[11]||(t[11]=r("h3",{id:"-5",tabindex:"-1"},"动态展示",-1)),t[12]||(t[12]=r("p",null,"会动的进度条才是好进度条。",-1)),n(a,{title:"动态展示",source:d(oe)},{default:P(()=>[n(re)]),_:1},8,["source"]),t[13]||(t[13]=r("h3",{id:"-6",tabindex:"-1"},"步骤进度条",-1)),t[14]||(t[14]=r("p",null,"步骤进度条。",-1)),n(a,{title:"步骤进度条",source:d(pe)},{default:P(()=>[n(ce)]),_:1},8,["source"]),t[15]||(t[15]=r("h3",{id:"-7",tabindex:"-1"},"渐变色",-1)),t[16]||(t[16]=r("p",null,"渐变色进度条和成功分段。",-1)),n(a,{title:"渐变色",source:d(le)},{default:P(()=>[n(de)]),_:1},8,["source"]),t[17]||(t[17]=r("h3",{id:"-8",tabindex:"-1"},"自定义",-1)),t[18]||(t[18]=r("p",null,"自定义尺寸、间隙角度和线帽样式。",-1)),n(a,{title:"自定义",source:d(ee)},{default:P(()=>[n(Z)]),_:1},8,["source"]),t[19]||(t[19]=V(`<h2 id="api" tabindex="-1">API</h2><h3 id="progress-props" tabindex="-1">Progress Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td><code>&#39;line&#39; | &#39;circle&#39; | &#39;dashboard&#39;</code></td><td><code>&#39;line&#39;</code></td></tr><tr><td>percent</td><td>百分比</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>status</td><td>状态</td><td><code>&#39;success&#39; | &#39;exception&#39; | &#39;normal&#39; | &#39;active&#39;</code></td><td>-</td></tr><tr><td>showInfo</td><td>是否显示进度数值或状态图标</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>strokeColor</td><td>进度条的色彩，支持渐变</td><td><code>string | ProgressGradient</code></td><td>-</td></tr><tr><td>railColor</td><td>未完成的分段的颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>trailColor</td><td>(已废弃) 使用 railColor 代替</td><td><code>string</code></td><td>-</td></tr><tr><td>strokeWidth</td><td>进度条线的宽度</td><td><code>number</code></td><td><code>6</code> (line), <code>6</code> (circle)</td></tr><tr><td>strokeLinecap</td><td>进度条端点形状</td><td><code>&#39;round&#39; | &#39;butt&#39; | &#39;square&#39;</code></td><td><code>&#39;round&#39;</code></td></tr><tr><td>size</td><td>进度条的尺寸</td><td><code>&#39;default&#39; | &#39;small&#39; | number | { width?: number; height?: number }</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>width</td><td>(已废弃) circle/dashboard 的画布宽度</td><td><code>number</code></td><td><code>120</code></td></tr><tr><td>format</td><td>内容的模板函数</td><td><code>(percent: number, successPercent?: number) =&gt; string</code></td><td>-</td></tr><tr><td>steps</td><td>进度条总共步数</td><td><code>number</code></td><td>-</td></tr><tr><td>success</td><td>成功进度条相关配置</td><td><code>{ percent?: number; strokeColor?: string }</code></td><td>-</td></tr><tr><td>gapDegree</td><td>圆形进度条缺口角度，dashboard 默认 75</td><td><code>number</code></td><td><code>0</code> (circle), <code>75</code> (dashboard)</td></tr><tr><td>percentPosition</td><td>进度文字位置</td><td><code>{ align?: &#39;start&#39; | &#39;center&#39; | &#39;end&#39;; type?: &#39;inner&#39; | &#39;outer&#39; }</code></td><td><code>{ align: &#39;end&#39;, type: &#39;outer&#39; }</code></td></tr></tbody></table><h3 id="progressgradient" tabindex="-1">ProgressGradient</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">ProgressGradient</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  direction<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>  <span class="token comment">// 渐变方向，如 &#39;to right&#39;</span>
  from<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>       <span class="token comment">// 起始颜色</span>
  to<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>         <span class="token comment">// 结束颜色</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>  <span class="token comment">// 多色渐变，如 &#39;0%&#39;: &#39;#108ee9&#39;, &#39;100%&#39;: &#39;#87d068&#39;</span>
<span class="token punctuation">}</span>
</code></pre>`,5))])}}};export{ye as default};
