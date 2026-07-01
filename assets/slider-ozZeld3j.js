import{o as E,O as ft,P as bt,n as d,E as b,f as it,A as M,k as V,h as e,K as $,L as p,_ as xt,H as ht,l as ut,Q as P,m as h}from"./index-ON6sqzpw.js";import{c as w}from"./cls-S9IiI6wd.js";import{K as B}from"./event-CMqgYmge.js";const v=E({name:"Slider",props:{value:[Number,Array],defaultValue:[Number,Array],min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:Boolean,range:Boolean,vertical:Boolean,reverse:Boolean,marks:Object,tooltip:{type:Object},included:{type:Boolean,default:!0},dots:Boolean,keyboard:{type:Boolean,default:!0},classNames:Object,styles:Object},emits:["update:value","change","afterChange"],setup(t,{emit:i}){const a=ft("slider"),g=b(null),n=b(null),o=b(null),x=s=>Math.min(t.max,Math.max(t.min,s)),U=s=>{if(t.range){const l=Array.isArray(s)?s:[t.min,t.min],[r,c]=l,m=x(r),k=x(c);return[Math.min(m,k),Math.max(m,k)]}return x(typeof s=="number"?s:t.min)},ct=U(t.defaultValue??t.value??(t.range?[0,0]:0)),R=b(ct),pt=it(()=>t.value!==void 0),q=it(()=>{const s=pt.value?t.value:R.value;return U(s)});bt(()=>t.value,s=>{s!==void 0&&(R.value=U(s))});const mt=()=>t.marks?Object.keys(t.marks).map(Number).sort((s,l)=>s-l):[],L=s=>{if(t.step===null){const r=mt();return[t.min,...r,t.max].reduce((k,y)=>Math.abs(y-s)<Math.abs(k-s)?y:k)}const l=Math.round((s-t.min)/t.step);return x(t.min+l*t.step)},D=s=>(s-t.min)/(t.max-t.min)*100,W=s=>{if(!g.value)return 0;const l=g.value.getBoundingClientRect(),r="touches"in s?s.touches[0].clientX:s.clientX,c="touches"in s?s.touches[0].clientY:s.clientY;let m;return t.vertical?m=t.reverse?(c-l.top)/l.height:1-(c-l.top)/l.height:m=t.reverse?1-(r-l.left)/l.width:(r-l.left)/l.width,m=Math.max(0,Math.min(1,m)),L(t.min+m*(t.max-t.min))},S=s=>{const l=U(s);R.value=l,i("update:value",l),i("change",l)},vt=s=>{if(t.disabled)return;const l=W(s);if(t.range){const[r,c]=q.value,m=Math.abs(l-r),k=Math.abs(l-c);m<=k?S([l,c]):S([r,l])}else S(l)},A=s=>l=>{if(t.disabled)return;l.preventDefault(),n.value=s,o.value=s;const r=m=>{const k=W(m);if(t.range){const[y,T]=q.value;S(s==="start"?[Math.min(k,T),T]:[y,Math.max(k,y)])}else S(k)},c=()=>{n.value=null,o.value=null,i("afterChange",q.value),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",c),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",c)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",c),document.addEventListener("touchmove",r),document.addEventListener("touchend",c)},O=s=>{var l,r;return((l=t.tooltip)==null?void 0:l.formatter)===null?null:(r=t.tooltip)!=null&&r.formatter?t.tooltip.formatter(s):String(s)},j=s=>{var l;return((l=t.tooltip)==null?void 0:l.open)!==void 0?t.tooltip.open:o.value===s},z=s=>l=>{if(t.disabled||!t.keyboard)return;const r=t.range?s==="start"?q.value[0]:q.value[1]:q.value;let c=0;const m=t.step===null?1:t.step;switch(l.key){case B.ARROW_RIGHT:case B.ARROW_UP:c=m;break;case B.ARROW_LEFT:case B.ARROW_DOWN:c=-m;break;case B.HOME:c=t.min-r;break;case B.END:c=t.max-r;break;default:return}l.preventDefault();const k=L(r+c);if(t.range){const[y,T]=q.value;S(s==="start"?[Math.min(k,T),T]:[y,Math.max(k,y)])}else S(k)};return()=>{var K,F,H,Y,I,X,G,Q,J,Z,tt,nt,et,at,st,lt;const s=q.value,l=t.range?s[0]:s,r=t.range?s[1]:s,c=D(l),m=D(r),k=t.vertical?t.included?{bottom:`${t.range?c:0}%`,height:`${t.range?m-c:m}%`}:{}:t.included?{left:`${t.range?c:0}%`,width:`${t.range?m-c:m}%`}:{},y=t.marks?Object.entries(t.marks).map(([u,f])=>({value:Number(u),label:typeof f=="string"?f:f.label,style:typeof f=="object"&&f.style?f.style:void 0})):[],T=[];if(t.dots&&t.step!==null&&t.step>0)for(let u=t.min;u<=t.max;u+=t.step)T.push(u);const gt=u=>{if(!t.disabled)if(t.range){const[f,N]=q.value,C=Math.abs(u-f),_=Math.abs(u-N);C<=_?S([u,N]):S([f,u])}else S(u)};return d("div",{class:w(a,{[`${a}-disabled`]:t.disabled,[`${a}-vertical`]:t.vertical,[`${a}-with-marks`]:y.length>0},(K=t.classNames)==null?void 0:K.root),style:(F=t.styles)==null?void 0:F.root},[d("div",{ref:g,class:w(`${a}-rail`,(H=t.classNames)==null?void 0:H.rail),style:(Y=t.styles)==null?void 0:Y.rail,onClick:vt},[d("div",{class:w(`${a}-track`,(I=t.classNames)==null?void 0:I.track),style:{...k,...(X=t.styles)==null?void 0:X.track}},null),y.map(({value:u})=>{var C,_;const f=D(u),N=t.vertical?{bottom:`${f}%`}:{left:`${f}%`};return d("span",{key:u,class:w(`${a}-dot`,{[`${a}-dot-active`]:t.range?u>=l&&u<=r:u<=r},(C=t.classNames)==null?void 0:C.dot),style:{...N,...(_=t.styles)==null?void 0:_.dot}},null)}),T.map(u=>{var C,_;const f=D(u),N=t.vertical?{bottom:`${f}%`}:{left:`${f}%`};return d("span",{key:u,class:w(`${a}-dot`,{[`${a}-dot-active`]:t.range?u>=l&&u<=r:u<=r},(C=t.classNames)==null?void 0:C.dot),style:{...N,...(_=t.styles)==null?void 0:_.dot}},null)}),t.range&&d("div",{class:w(`${a}-handle`,`${a}-handle-1`,{[`${a}-handle-dragging`]:n.value==="start"},(G=t.classNames)==null?void 0:G.handle),style:{...t.vertical?{bottom:`${c}%`}:{left:`${c}%`},...(Q=t.styles)==null?void 0:Q.handle},role:"slider","aria-label":"最小值","aria-orientation":t.vertical?"vertical":"horizontal","aria-valuemin":t.min,"aria-valuemax":r,"aria-valuenow":l,"aria-disabled":t.disabled,tabindex:t.disabled?-1:0,onMousedown:A("start"),onTouchstart:A("start"),onMouseenter:()=>{o.value="start"},onMouseleave:()=>{n.value!=="start"&&(o.value=null)},onKeydown:z("start")},[j("start")&&O(l)!==null&&d("div",{class:w(`${a}-tooltip`,(J=t.classNames)==null?void 0:J.tooltip),style:(Z=t.styles)==null?void 0:Z.tooltip},[O(l)])]),d("div",{class:w(`${a}-handle`,t.range?`${a}-handle-2`:"",{[`${a}-handle-dragging`]:n.value==="end"||!t.range&&n.value!==null},(tt=t.classNames)==null?void 0:tt.handle),style:{...t.vertical?{bottom:`${m}%`}:{left:`${m}%`},...(nt=t.styles)==null?void 0:nt.handle},role:"slider","aria-label":t.range?"最大值":"滑块","aria-orientation":t.vertical?"vertical":"horizontal","aria-valuemin":t.range?l:t.min,"aria-valuemax":t.max,"aria-valuenow":r,"aria-disabled":t.disabled,tabindex:t.disabled?-1:0,onMousedown:A((t.range,"end")),onTouchstart:A((t.range,"end")),onMouseenter:()=>{o.value="end"},onMouseleave:()=>{n.value!=="end"&&(o.value=null)},onKeydown:z(t.range?"end":"start")},[j("end")&&O(r)!==null&&d("div",{class:w(`${a}-tooltip`,(et=t.classNames)==null?void 0:et.tooltip),style:(at=t.styles)==null?void 0:at.tooltip},[O(r)])])]),y.length>0&&d("div",{class:w(`${a}-mark`,(st=t.classNames)==null?void 0:st.mark),style:(lt=t.styles)==null?void 0:lt.mark},[y.map(({value:u,label:f,style:N})=>{var dt,rt;const C=D(u),_=t.vertical?{bottom:`${C}%`}:{left:`${C}%`},ot=N?{..._,...N}:_,kt=(dt=t.styles)!=null&&dt.markText?{...ot,...t.styles.markText}:ot;return d("span",{key:u,class:w(`${a}-mark-text`,{[`${a}-mark-text-active`]:t.range?u>=l&&u<=r:u<=r},(rt=t.classNames)==null?void 0:rt.markText),style:kt,onClick:()=>gt(u)},[f])})])])}}}),yt={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},St={style:{"margin-bottom":"8px"}},$t=E({__name:"SliderBasic",setup(t){const i=b(30),a=b(50);return(g,n)=>(M(),V("div",yt,[e("div",null,[e("p",St,"基础滑块："+$(i.value),1),d(p(v),{value:i.value,"onUpdate:value":n[0]||(n[0]=o=>i.value=o)},null,8,["value"])]),e("div",null,[n[2]||(n[2]=e("p",{style:{"margin-bottom":"8px"}},"禁用状态：",-1)),d(p(v),{value:a.value,"onUpdate:value":n[1]||(n[1]=o=>a.value=o),disabled:""},null,8,["value"])])]))}}),wt=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px; padding: 0 16px">
    <div>
      <p style="margin-bottom: 8px">基础滑块：{{ value1 }}</p>
      <Slider v-model:value="value1" />
    </div>
    <div>
      <p style="margin-bottom: 8px">禁用状态：</p>
      <Slider v-model:value="value2" disabled />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@hmfw/ant-design'

const value1 = ref(30)
const value2 = ref(50)
<\/script>
`,Ct={style:{display:"flex","flex-direction":"column",gap:"48px"}},_t=E({__name:"SliderClassNames",setup(t){return(i,a)=>(M(),V("div",Ct,[e("div",null,[a[0]||(a[0]=e("div",{style:{"margin-bottom":"16px",color:"#666"}},"自定义轨道与填充样式：",-1)),d(p(v),{"default-value":40,"class-names":{rail:"custom-rail",track:"custom-track"}})]),e("div",null,[a[1]||(a[1]=e("div",{style:{"margin-bottom":"16px",color:"#666"}},"自定义滑块手柄：",-1)),d(p(v),{"default-value":60,"class-names":{handle:"custom-handle"}})]),e("div",null,[a[2]||(a[2]=e("div",{style:{"margin-bottom":"16px",color:"#666"}},"自定义刻度标记样式：",-1)),d(p(v),{"default-value":50,marks:{0:"0°C",25:"25°C",50:"50°C",75:"75°C",100:"100°C"},"class-names":{mark:"custom-mark",markText:"custom-mark-text",dot:"custom-dot"},dots:""})]),e("div",null,[a[3]||(a[3]=e("div",{style:{"margin-bottom":"16px",color:"#666"}},"使用内联样式：",-1)),d(p(v),{"default-value":[20,80],range:"",styles:{rail:{background:"linear-gradient(to right, #e6f7ff, #bae7ff)",height:"8px"},track:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",height:"8px"},handle:{width:"20px",height:"20px",marginTop:"-6px",borderColor:"#667eea",borderWidth:"3px"}}})]),e("div",null,[a[4]||(a[4]=e("div",{style:{"margin-bottom":"16px",color:"#666"}},"自定义 Tooltip 样式：",-1)),d(p(v),{"default-value":70,tooltip:{open:!0,formatter:g=>`${g}%`},"class-names":{tooltip:"custom-tooltip"}},null,8,["tooltip"])])]))}}),qt=xt(_t,[["__scopeId","data-v-9d0729a3"]]),Nt=`<template>
  <div style="display: flex; flex-direction: column; gap: 48px">
    <!-- 场景 1：自定义轨道与填充 -->
    <div>
      <div style="margin-bottom: 16px; color: #666">自定义轨道与填充样式：</div>
      <Slider
        :default-value="40"
        :class-names="{
          rail: 'custom-rail',
          track: 'custom-track',
        }"
      />
    </div>

    <!-- 场景 2：自定义滑块手柄 -->
    <div>
      <div style="margin-bottom: 16px; color: #666">自定义滑块手柄：</div>
      <Slider
        :default-value="60"
        :class-names="{
          handle: 'custom-handle',
        }"
      />
    </div>

    <!-- 场景 3：自定义刻度标记 -->
    <div>
      <div style="margin-bottom: 16px; color: #666">自定义刻度标记样式：</div>
      <Slider
        :default-value="50"
        :marks="{ 0: '0°C', 25: '25°C', 50: '50°C', 75: '75°C', 100: '100°C' }"
        :class-names="{
          mark: 'custom-mark',
          markText: 'custom-mark-text',
          dot: 'custom-dot',
        }"
        dots
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 16px; color: #666">使用内联样式：</div>
      <Slider
        :default-value="[20, 80]"
        range
        :styles="{
          rail: { background: 'linear-gradient(to right, #e6f7ff, #bae7ff)', height: '8px' },
          track: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', height: '8px' },
          handle: { width: '20px', height: '20px', marginTop: '-6px', borderColor: '#667eea', borderWidth: '3px' },
        }"
      />
    </div>

    <!-- 场景 5：自定义 Tooltip -->
    <div>
      <div style="margin-bottom: 16px; color: #666">自定义 Tooltip 样式：</div>
      <Slider
        :default-value="70"
        :tooltip="{ open: true, formatter: (val) => \`\${val}%\` }"
        :class-names="{
          tooltip: 'custom-tooltip',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Slider } from '@hmfw/ant-design'
<\/script>

<style scoped>
/* 自定义轨道 */
:deep(.custom-rail) {
  background: linear-gradient(to right, #f0f5ff, #d6e4ff);
  height: 6px;
}

/* 自定义填充 */
:deep(.custom-track) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  height: 6px;
  transition: all 0.3s;
}

/* 自定义滑块手柄 */
:deep(.custom-handle) {
  width: 24px;
  height: 24px;
  margin-top: -9px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 3px solid #ffffff;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
  transition: all 0.3s;
}

:deep(.custom-handle:hover) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.6);
  transform: scale(1.1);
}

:deep(.custom-handle:active) {
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.8);
  transform: scale(0.95);
}

/* 自定义刻度标签容器 */
:deep(.custom-mark) {
  margin-top: 4px;
}

/* 自定义刻度文本 */
:deep(.custom-mark-text) {
  color: #1890ff;
  font-weight: 600;
  font-size: 13px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* 自定义刻度点 */
:deep(.custom-dot) {
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 50%;
  background: #1890ff;
  border: 2px solid #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

/* 自定义 Tooltip */
:deep(.custom-tooltip) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  padding: 6px 12px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}
</style>
`,Tt={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},Et={style:{"margin-bottom":"8px"}},Mt={style:{"margin-bottom":"8px"}},Vt=E({__name:"SliderDots",setup(t){const i=b(30),a=b([20,60]);return(g,n)=>(M(),V("div",Tt,[e("div",null,[e("p",Et,"带刻度点："+$(i.value),1),d(p(v),{value:i.value,"onUpdate:value":n[0]||(n[0]=o=>i.value=o),dots:!0,step:10},null,8,["value"])]),e("div",null,[e("p",Mt,"范围选择 + 刻度点："+$(a.value),1),d(p(v),{value:a.value,"onUpdate:value":n[1]||(n[1]=o=>a.value=o),range:"",dots:!0,step:20},null,8,["value"])])]))}}),Pt=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px; padding: 0 16px">
    <div>
      <p style="margin-bottom: 8px">带刻度点：{{ value1 }}</p>
      <Slider v-model:value="value1" :dots="true" :step="10" />
    </div>
    <div>
      <p style="margin-bottom: 8px">范围选择 + 刻度点：{{ value2 }}</p>
      <Slider v-model:value="value2" range :dots="true" :step="20" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@hmfw/ant-design'

const value1 = ref(30)
const value2 = ref<[number, number]>([20, 60])
<\/script>
`,Bt={style:{display:"flex","flex-direction":"column",gap:"40px",padding:"0 16px"}},Dt={style:{"margin-bottom":"8px"}},Ut={style:{"margin-bottom":"8px"}},At=E({__name:"SliderMarks",setup(t){const i=b(37),a=b(0),g={0:"0°C",26:"26°C",37:"37°C",100:{label:"100°C",style:{color:"#f50"}}};return(n,o)=>(M(),V("div",Bt,[e("div",null,[e("p",Dt,"带刻度标记："+$(i.value),1),d(p(v),{value:i.value,"onUpdate:value":o[0]||(o[0]=x=>i.value=x),marks:g},null,8,["value"])]),e("div",null,[e("p",Ut,"只能选择刻度点："+$(a.value),1),d(p(v),{value:a.value,"onUpdate:value":o[1]||(o[1]=x=>a.value=x),marks:g,step:null},null,8,["value"])])]))}}),Ot=`<template>
  <div style="display: flex; flex-direction: column; gap: 40px; padding: 0 16px">
    <div>
      <p style="margin-bottom: 8px">带刻度标记：{{ value1 }}</p>
      <Slider v-model:value="value1" :marks="marks" />
    </div>
    <div>
      <p style="margin-bottom: 8px">只能选择刻度点：{{ value2 }}</p>
      <Slider v-model:value="value2" :marks="marks" :step="null" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@hmfw/ant-design'

const value1 = ref(37)
const value2 = ref(0)

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    label: '100°C',
    style: { color: '#f50' },
  },
}
<\/script>
`,Rt={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},Lt={style:{"margin-bottom":"8px"}},Wt={style:{"margin-bottom":"8px"}},jt=E({__name:"SliderRange",setup(t){const i=b([20,70]),a=b([20,60]);return(g,n)=>(M(),V("div",Rt,[e("div",null,[e("p",Lt,"范围选择："+$(i.value),1),d(p(v),{value:i.value,"onUpdate:value":n[0]||(n[0]=o=>i.value=o),range:""},null,8,["value"])]),e("div",null,[e("p",Wt,"带步长的范围选择："+$(a.value),1),d(p(v),{value:a.value,"onUpdate:value":n[1]||(n[1]=o=>a.value=o),range:"",step:10},null,8,["value"])])]))}}),zt=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px; padding: 0 16px">
    <div>
      <p style="margin-bottom: 8px">范围选择：{{ rangeValue }}</p>
      <Slider v-model:value="rangeValue" range />
    </div>
    <div>
      <p style="margin-bottom: 8px">带步长的范围选择：{{ rangeValue2 }}</p>
      <Slider v-model:value="rangeValue2" range :step="10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@hmfw/ant-design'

const rangeValue = ref<[number, number]>([20, 70])
const rangeValue2 = ref<[number, number]>([20, 60])
<\/script>
`,Kt={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},Ft={style:{"margin-bottom":"8px"}},Ht={style:{"margin-bottom":"8px"}},Yt={style:{"margin-bottom":"8px"}},It=E({__name:"SliderTooltip",setup(t){const i=b(30),a=b(50),g=b(70);return(n,o)=>(M(),V("div",Kt,[e("div",null,[e("p",Ft,"自定义 Tooltip 格式："+$(i.value),1),d(p(v),{value:i.value,"onUpdate:value":o[0]||(o[0]=x=>i.value=x),tooltip:{formatter:x=>`${x}%`}},null,8,["value","tooltip"])]),e("div",null,[e("p",Ht,"隐藏 Tooltip："+$(a.value),1),d(p(v),{value:a.value,"onUpdate:value":o[1]||(o[1]=x=>a.value=x),tooltip:{formatter:null}},null,8,["value"])]),e("div",null,[e("p",Yt,"始终显示 Tooltip："+$(g.value),1),d(p(v),{value:g.value,"onUpdate:value":o[2]||(o[2]=x=>g.value=x),tooltip:{open:!0}},null,8,["value"])])]))}}),Xt=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px; padding: 0 16px">
    <div>
      <p style="margin-bottom: 8px">自定义 Tooltip 格式：{{ value1 }}</p>
      <Slider v-model:value="value1" :tooltip="{ formatter: (v) => \`\${v}%\` }" />
    </div>
    <div>
      <p style="margin-bottom: 8px">隐藏 Tooltip：{{ value2 }}</p>
      <Slider v-model:value="value2" :tooltip="{ formatter: null }" />
    </div>
    <div>
      <p style="margin-bottom: 8px">始终显示 Tooltip：{{ value3 }}</p>
      <Slider v-model:value="value3" :tooltip="{ open: true }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@hmfw/ant-design'

const value1 = ref(30)
const value2 = ref(50)
const value3 = ref(70)
<\/script>
`,Gt={style:{display:"flex",gap:"48px",padding:"0 16px"}},Qt={style:{height:"300px"}},Jt={style:{"margin-bottom":"8px"}},Zt={style:{height:"300px"}},tn={style:{"margin-bottom":"8px"}},nn=E({__name:"SliderVertical",setup(t){const i=b(30),a=b([20,50]);return(g,n)=>(M(),V("div",Gt,[e("div",Qt,[e("p",Jt,"垂直滑块："+$(i.value),1),d(p(v),{value:i.value,"onUpdate:value":n[0]||(n[0]=o=>i.value=o),vertical:""},null,8,["value"])]),e("div",Zt,[e("p",tn,"垂直范围选择："+$(a.value),1),d(p(v),{value:a.value,"onUpdate:value":n[1]||(n[1]=o=>a.value=o),vertical:"",range:"",step:10},null,8,["value"])])]))}}),en=`<template>
  <div style="display: flex; gap: 48px; padding: 0 16px">
    <div style="height: 300px">
      <p style="margin-bottom: 8px">垂直滑块：{{ value1 }}</p>
      <Slider v-model:value="value1" vertical />
    </div>
    <div style="height: 300px">
      <p style="margin-bottom: 8px">垂直范围选择：{{ value2 }}</p>
      <Slider v-model:value="value2" vertical range :step="10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@hmfw/ant-design'

const value1 = ref(30)
const value2 = ref<[number, number]>([20, 50])
<\/script>
`,an={class:"markdown-body"},dn={__name:"slider",setup(t,{expose:i}){return i({frontmatter:{}}),(g,n)=>{const o=ht("DemoBlock");return M(),V("div",an,[n[0]||(n[0]=ut('<h1 id="slider-滑动输入条" tabindex="-1">Slider 滑动输入条</h1><p>滑动型输入器，展示当前值和可选范围。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><ul><li>当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。</li><li>当用户需要自定义数值范围时。</li><li>适合于对数值不太精确的场景。</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="基础用法" tabindex="-1">基础用法</h3><p>基本滑动条。当 <code>range</code> 为 <code>true</code> 时，渲染为双滑块。</p>',7)),d(o,{title:"基础用法",source:p(wt)},{default:P(()=>[d($t)]),_:1},8,["source"]),n[1]||(n[1]=e("h3",{id:"范围选择",tabindex:"-1"},"范围选择",-1)),n[2]||(n[2]=e("p",null,[h("通过 "),e("code",null,"range"),h(" 属性开启范围选择。")],-1)),d(o,{title:"范围选择",source:p(zt)},{default:P(()=>[d(jt)]),_:1},8,["source"]),n[3]||(n[3]=e("h3",{id:"刻度标记",tabindex:"-1"},"刻度标记",-1)),n[4]||(n[4]=e("p",null,[h("使用 "),e("code",null,"marks"),h(" 属性标注分段式滑块，使用 "),e("code",null,"step={null}"),h(" 时，Slider 的可选值仅有 marks 标出来的部分。")],-1)),d(o,{title:"刻度标记",source:p(Ot)},{default:P(()=>[d(At)]),_:1},8,["source"]),n[5]||(n[5]=e("h3",{id:"自定义-tooltip",tabindex:"-1"},"自定义 Tooltip",-1)),n[6]||(n[6]=e("p",null,[h("使用 "),e("code",null,"tooltip.formatter"),h(" 自定义 Tooltip 内容，设置为 "),e("code",null,"null"),h(" 可隐藏 Tooltip。使用 "),e("code",null,"tooltip.open"),h(" 控制 Tooltip 显示状态。")],-1)),d(o,{title:"自定义 Tooltip",source:p(Xt)},{default:P(()=>[d(It)]),_:1},8,["source"]),n[7]||(n[7]=e("h3",{id:"垂直方向",tabindex:"-1"},"垂直方向",-1)),n[8]||(n[8]=e("p",null,"垂直方向的 Slider。",-1)),d(o,{title:"垂直方向",source:p(en)},{default:P(()=>[d(nn)]),_:1},8,["source"]),n[9]||(n[9]=e("h3",{id:"刻度点",tabindex:"-1"},"刻度点",-1)),n[10]||(n[10]=e("p",null,[h("通过 "),e("code",null,"dots"),h(" 属性显示刻度点。")],-1)),d(o,{title:"刻度点",source:p(Pt)},{default:P(()=>[d(Vt)]),_:1},8,["source"]),n[11]||(n[11]=e("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[12]||(n[12]=e("p",null,[h("通过 "),e("code",null,"classNames"),h(" / "),e("code",null,"styles"),h(" 对各子元素做细粒度样式控制。")],-1)),d(o,{title:"语义化 className 与 style",source:p(Nt)},{default:P(()=>[d(qt)]),_:1},8,["source"]),n[13]||(n[13]=ut(`<h2 id="api" tabindex="-1">API</h2><h3 id="slider-props" tabindex="-1">Slider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>设置当前取值。当 <code>range</code> 为 false 时，使用 number，否则用 [number, number]</td><td><code>number | [number, number]</code></td><td>-</td></tr><tr><td>defaultValue</td><td>设置初始取值</td><td><code>number | [number, number]</code></td><td><code>0</code></td></tr><tr><td>min</td><td>最小值</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>max</td><td>最大值</td><td><code>number</code></td><td><code>100</code></td></tr><tr><td>step</td><td>步长，取值必须大于 0，并且可被 (max - min) 整除。当 <code>marks</code> 不为空对象时，可以设置 <code>step</code> 为 <code>null</code>，此时 Slider 的可选值仅有 marks 标出来的部分</td><td><code>number | null</code></td><td><code>1</code></td></tr><tr><td>disabled</td><td>值为 true 时，滑块为禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>vertical</td><td>值为 true 时，Slider 为垂直方向</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>reverse</td><td>反向坐标轴</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>range</td><td>双滑块模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>marks</td><td>刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式</td><td><code>Record&lt;number, string | { label: string; style?: CSSProperties }&gt;</code></td><td>-</td></tr><tr><td>included</td><td><code>marks</code> 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>dots</td><td>是否只能拖拽到刻度上</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>keyboard</td><td>支持使用键盘操作 handle</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>tooltip</td><td>Tooltip 相关配置</td><td><code>{ open?: boolean; formatter?: (value: number) =&gt; string | null }</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SliderClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SliderStyles</code></td><td>-</td></tr></tbody></table><h3 id="slider-events" tabindex="-1">Slider Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入</td><td><code>(value: number | [number, number]) =&gt; void</code></td></tr><tr><td>change</td><td>当 Slider 的值发生改变时触发</td><td><code>(value: number | [number, number]) =&gt; void</code></td></tr><tr><td>afterChange</td><td>与 mouseup 触发时机一致，把当前值作为参数传入</td><td><code>(value: number | [number, number]) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Slider 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">SliderClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 div.hmfw-slider</span>
  rail<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 轨道容器 div.hmfw-slider-rail</span>
  track<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 已选区间填充 div.hmfw-slider-track</span>
  handle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 滑块手柄 div.hmfw-slider-handle</span>
  dot<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 刻度点 span.hmfw-slider-dot</span>
  mark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 刻度标签容器 div.hmfw-slider-mark</span>
  markText<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个刻度文本 span.hmfw-slider-mark-text</span>
  tooltip<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 手柄提示框 div.hmfw-slider-tooltip</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SliderStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  rail<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  track<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  handle<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  dot<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  mark<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  markText<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  tooltip<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-slider<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-slider-rail<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.rail / styles.rail 应用于此（轨道背景） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-slider-track<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.track / styles.track 应用于此（已选区间填充） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-slider-handle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.handle / styles.handle 应用于此（滑块手柄） --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-slider-tooltip<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.tooltip / styles.tooltip 应用于此（手柄提示框） --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 当设置 marks 时 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-slider-mark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.mark / styles.mark 应用于此（刻度标签容器） --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-slider-mark-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.markText / styles.markText 应用于此（单个刻度文本） --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 当设置 dots 时 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-slider-dot<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.dot / styles.dot 应用于此（刻度点） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义轨道与填充 --&gt;
  &lt;Slider
    :default-value=&quot;40&quot;
    :class-names=&quot;{
      rail: &#39;my-rail&#39;,
      track: &#39;my-track&#39;,
    }&quot;
  /&gt;

  &lt;!-- 自定义滑块手柄 --&gt;
  &lt;Slider
    :default-value=&quot;60&quot;
    :class-names=&quot;{
      handle: &#39;my-handle&#39;,
    }&quot;
  /&gt;

  &lt;!-- 自定义刻度标记 --&gt;
  &lt;Slider
    :default-value=&quot;50&quot;
    :marks=&quot;{ 0: &#39;0°C&#39;, 50: &#39;50°C&#39;, 100: &#39;100°C&#39; }&quot;
    :class-names=&quot;{
      markText: &#39;my-mark-text&#39;,
      dot: &#39;my-dot&#39;,
    }&quot;
    dots
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-rail) {
  background: linear-gradient(to right, #f0f5ff, #d6e4ff);
  height: 6px;
}

:deep(.my-track) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  height: 6px;
}

:deep(.my-handle) {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 3px solid #ffffff;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
}

:deep(.my-handle:hover) {
  transform: scale(1.1);
}

:deep(.my-mark-text) {
  color: #1890ff;
  font-weight: 600;
}

:deep(.my-dot) {
  background: #1890ff;
  border: 2px solid #ffffff;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义轨道高度与颜色 --&gt;
  &lt;Slider
    :default-value=&quot;40&quot;
    :styles=&quot;{
      rail: { background: &#39;#f0f0f0&#39;, height: &#39;8px&#39; },
      track: { background: &#39;#52c41a&#39;, height: &#39;8px&#39; },
    }&quot;
  /&gt;

  &lt;!-- 自定义滑块手柄 --&gt;
  &lt;Slider
    :default-value=&quot;60&quot;
    :styles=&quot;{
      handle: {
        width: &#39;20px&#39;,
        height: &#39;20px&#39;,
        borderColor: &#39;#722ed1&#39;,
        borderWidth: &#39;3px&#39;,
      },
    }&quot;
  /&gt;

  &lt;!-- 组合使用：范围选择 --&gt;
  &lt;Slider
    :default-value=&quot;[20, 80]&quot;
    range
    :styles=&quot;{
      rail: { background: &#39;#e6f7ff&#39;, height: &#39;8px&#39; },
      track: { background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;, height: &#39;8px&#39; },
      handle: { borderColor: &#39;#667eea&#39;, borderWidth: &#39;3px&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>范围选择模式 (<code>range={true}</code>) 下会渲染多个 <code>handle</code>，<code>classNames.handle</code> 和 <code>styles.handle</code> 会应用到所有手柄</li><li>修改 <code>rail</code> 或 <code>track</code> 的高度时，需同步调整 <code>handle</code> 的 <code>marginTop</code>，以保持垂直居中（默认轨道高度 4px，手柄高度 14px，<code>marginTop: -5px</code>）</li><li><code>tooltip</code> 样式仅在 Tooltip 显示时生效（hover/拖拽时或设置 <code>tooltip.open={true}</code> 时）</li><li>垂直模式下，<code>rail</code> 和 <code>track</code> 的宽度对应水平模式的高度</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Slider 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr></tbody></table><h2 id="键盘操作" tabindex="-1">键盘操作</h2><ul><li><code>←</code> / <code>↓</code>: 减小步长</li><li><code>→</code> / <code>↑</code>: 增加步长</li><li><code>Home</code>: 跳转到最小值</li><li><code>End</code>: 跳转到最大值</li></ul>`,25))])}}};export{dn as default};
