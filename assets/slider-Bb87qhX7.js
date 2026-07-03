import{d as M,u as bn,m as xn,c as p,r as b,a as un,o as E,b as V,f as t,A as q,e as r,_ as hn,h as yn,i as dn,w as P,g as h}from"./index-D624MvcT.js";import{c as w}from"./cls-S9IiI6wd.js";import{K as B}from"./event-CMqgYmge.js";const k=M({name:"Slider",props:{value:[Number,Array],defaultValue:[Number,Array],min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:Boolean,range:Boolean,vertical:Boolean,reverse:Boolean,marks:Object,tooltip:{type:Object},included:{type:Boolean,default:!0},dots:Boolean,keyboard:{type:Boolean,default:!0},classNames:Object,styles:Object},emits:["update:value","change","afterChange"],setup(n,{emit:u}){const s=bn("slider"),v=b(null),a=b(null),o=b(null),x=e=>Math.min(n.max,Math.max(n.min,e)),U=e=>{if(n.range){const l=Array.isArray(e)?e:[n.min,n.min],[c,d]=l,m=x(c),g=x(d);return[Math.min(m,g),Math.max(m,g)]}return x(typeof e=="number"?e:n.min)},rn=U(n.defaultValue??n.value??(n.range?[0,0]:0)),O=b(rn),mn=un(()=>n.value!==void 0),_=un(()=>{const e=mn.value?n.value:O.value;return U(e)});xn(()=>n.value,e=>{e!==void 0&&(O.value=U(e))});const kn=()=>n.marks?Object.keys(n.marks).map(Number).sort((e,l)=>e-l):[],L=e=>{if(n.step===null){const c=kn();return[n.min,...c,n.max].reduce((g,y)=>Math.abs(y-e)<Math.abs(g-e)?y:g)}const l=Math.round((e-n.min)/n.step);return x(n.min+l*n.step)},D=e=>(e-n.min)/(n.max-n.min)*100,W=e=>{if(!v.value)return 0;const l=v.value.getBoundingClientRect(),c="touches"in e?e.touches[0].clientX:e.clientX,d="touches"in e?e.touches[0].clientY:e.clientY;let m;return n.vertical?m=n.reverse?(d-l.top)/l.height:1-(d-l.top)/l.height:m=n.reverse?1-(c-l.left)/l.width:(c-l.left)/l.width,m=Math.max(0,Math.min(1,m)),L(n.min+m*(n.max-n.min))},S=e=>{const l=U(e);O.value=l,u("update:value",l),u("change",l)},vn=e=>{if(n.disabled)return;const l=W(e);if(n.range){const[c,d]=_.value,m=Math.abs(l-c),g=Math.abs(l-d);m<=g?S([l,d]):S([c,l])}else S(l)},A=e=>l=>{if(n.disabled)return;l.preventDefault(),a.value=e,o.value=e;const c=m=>{const g=W(m);if(n.range){const[y,T]=_.value;S(e==="start"?[Math.min(g,T),T]:[y,Math.max(g,y)])}else S(g)},d=()=>{a.value=null,o.value=null,u("afterChange",_.value),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",d),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",d)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",d),document.addEventListener("touchmove",c),document.addEventListener("touchend",d)},R=e=>{var l,c;return((l=n.tooltip)==null?void 0:l.formatter)===null?null:(c=n.tooltip)!=null&&c.formatter?n.tooltip.formatter(e):String(e)},j=e=>{var l;return((l=n.tooltip)==null?void 0:l.open)!==void 0?n.tooltip.open:o.value===e},z=e=>l=>{if(n.disabled||!n.keyboard)return;const c=n.range?e==="start"?_.value[0]:_.value[1]:_.value;let d=0;const m=n.step===null?1:n.step;switch(l.key){case B.ARROW_RIGHT:case B.ARROW_UP:d=m;break;case B.ARROW_LEFT:case B.ARROW_DOWN:d=-m;break;case B.HOME:d=n.min-c;break;case B.END:d=n.max-c;break;default:return}l.preventDefault();const g=L(c+d);if(n.range){const[y,T]=_.value;S(e==="start"?[Math.min(g,T),T]:[y,Math.max(g,y)])}else S(g)};return()=>{var F,K,Y,H,I,X,G,J,Q,Z,nn,an,tn,sn,en,ln;const e=_.value,l=n.range?e[0]:e,c=n.range?e[1]:e,d=D(l),m=D(c),g=n.vertical?n.included?{bottom:`${n.range?d:0}%`,height:`${n.range?m-d:m}%`}:{}:n.included?{left:`${n.range?d:0}%`,width:`${n.range?m-d:m}%`}:{},y=n.marks?Object.entries(n.marks).map(([i,f])=>({value:Number(i),label:typeof f=="string"?f:f.label,style:typeof f=="object"&&f.style?f.style:void 0})):[],T=[];if(n.dots&&n.step!==null&&n.step>0)for(let i=n.min;i<=n.max;i+=n.step)T.push(i);const gn=i=>{if(!n.disabled)if(n.range){const[f,N]=_.value,$=Math.abs(i-f),C=Math.abs(i-N);$<=C?S([i,N]):S([f,i])}else S(i)};return p("div",{class:w(s,{[`${s}-disabled`]:n.disabled,[`${s}-vertical`]:n.vertical,[`${s}-with-marks`]:y.length>0},(F=n.classNames)==null?void 0:F.root),style:(K=n.styles)==null?void 0:K.root},[p("div",{ref:v,class:w(`${s}-rail`,(Y=n.classNames)==null?void 0:Y.rail),style:(H=n.styles)==null?void 0:H.rail,onClick:vn},[p("div",{class:w(`${s}-track`,(I=n.classNames)==null?void 0:I.track),style:{...g,...(X=n.styles)==null?void 0:X.track}},null),y.map(({value:i})=>{var $,C;const f=D(i),N=n.vertical?{bottom:`${f}%`}:{left:`${f}%`};return p("span",{key:i,class:w(`${s}-dot`,{[`${s}-dot-active`]:n.range?i>=l&&i<=c:i<=c},($=n.classNames)==null?void 0:$.dot),style:{...N,...(C=n.styles)==null?void 0:C.dot}},null)}),T.map(i=>{var $,C;const f=D(i),N=n.vertical?{bottom:`${f}%`}:{left:`${f}%`};return p("span",{key:i,class:w(`${s}-dot`,{[`${s}-dot-active`]:n.range?i>=l&&i<=c:i<=c},($=n.classNames)==null?void 0:$.dot),style:{...N,...(C=n.styles)==null?void 0:C.dot}},null)}),n.range&&p("div",{class:w(`${s}-handle`,`${s}-handle-1`,{[`${s}-handle-dragging`]:a.value==="start"},(G=n.classNames)==null?void 0:G.handle),style:{...n.vertical?{bottom:`${d}%`}:{left:`${d}%`},...(J=n.styles)==null?void 0:J.handle},role:"slider","aria-label":"最小值","aria-orientation":n.vertical?"vertical":"horizontal","aria-valuemin":n.min,"aria-valuemax":c,"aria-valuenow":l,"aria-disabled":n.disabled,tabindex:n.disabled?-1:0,onMousedown:A("start"),onTouchstart:A("start"),onMouseenter:()=>{o.value="start"},onMouseleave:()=>{a.value!=="start"&&(o.value=null)},onKeydown:z("start")},[j("start")&&R(l)!==null&&p("div",{class:w(`${s}-tooltip`,(Q=n.classNames)==null?void 0:Q.tooltip),style:(Z=n.styles)==null?void 0:Z.tooltip},[R(l)])]),p("div",{class:w(`${s}-handle`,n.range?`${s}-handle-2`:"",{[`${s}-handle-dragging`]:a.value==="end"||!n.range&&a.value!==null},(nn=n.classNames)==null?void 0:nn.handle),style:{...n.vertical?{bottom:`${m}%`}:{left:`${m}%`},...(an=n.styles)==null?void 0:an.handle},role:"slider","aria-label":n.range?"最大值":"滑块","aria-orientation":n.vertical?"vertical":"horizontal","aria-valuemin":n.range?l:n.min,"aria-valuemax":n.max,"aria-valuenow":c,"aria-disabled":n.disabled,tabindex:n.disabled?-1:0,onMousedown:A((n.range,"end")),onTouchstart:A((n.range,"end")),onMouseenter:()=>{o.value="end"},onMouseleave:()=>{a.value!=="end"&&(o.value=null)},onKeydown:z(n.range?"end":"start")},[j("end")&&R(c)!==null&&p("div",{class:w(`${s}-tooltip`,(tn=n.classNames)==null?void 0:tn.tooltip),style:(sn=n.styles)==null?void 0:sn.tooltip},[R(c)])])]),y.length>0&&p("div",{class:w(`${s}-mark`,(en=n.classNames)==null?void 0:en.mark),style:(ln=n.styles)==null?void 0:ln.mark},[y.map(({value:i,label:f,style:N})=>{var pn,cn;const $=D(i),C=n.vertical?{bottom:`${$}%`}:{left:`${$}%`},on=N?{...C,...N}:C,fn=(pn=n.styles)!=null&&pn.markText?{...on,...n.styles.markText}:on;return p("span",{key:i,class:w(`${s}-mark-text`,{[`${s}-mark-text-active`]:n.range?i>=l&&i<=c:i<=c},(cn=n.classNames)==null?void 0:cn.markText),style:fn,onClick:()=>gn(i)},[f])})])])}}}),Sn={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},qn={style:{"margin-bottom":"8px"}},wn=M({__name:"SliderBasic",setup(n){const u=b(30),s=b(50);return(v,a)=>(E(),V("div",Sn,[t("div",null,[t("p",qn,"基础滑块："+q(u.value),1),p(r(k),{value:u.value,"onUpdate:value":a[0]||(a[0]=o=>u.value=o)},null,8,["value"])]),t("div",null,[a[2]||(a[2]=t("p",{style:{"margin-bottom":"8px"}},"禁用状态：",-1)),p(r(k),{value:s.value,"onUpdate:value":a[1]||(a[1]=o=>s.value=o),disabled:""},null,8,["value"])])]))}}),$n=`<template>
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
`,Cn={style:{display:"flex","flex-direction":"column",gap:"48px"}},_n=M({__name:"SliderClassNames",setup(n){return(u,s)=>(E(),V("div",Cn,[t("div",null,[s[0]||(s[0]=t("div",{style:{"margin-bottom":"16px",color:"#666"}},"自定义轨道与填充样式：",-1)),p(r(k),{"default-value":40,"class-names":{rail:"custom-rail",track:"custom-track"}})]),t("div",null,[s[1]||(s[1]=t("div",{style:{"margin-bottom":"16px",color:"#666"}},"自定义滑块手柄：",-1)),p(r(k),{"default-value":60,"class-names":{handle:"custom-handle"}})]),t("div",null,[s[2]||(s[2]=t("div",{style:{"margin-bottom":"16px",color:"#666"}},"自定义刻度标记样式：",-1)),p(r(k),{"default-value":50,marks:{0:"0°C",25:"25°C",50:"50°C",75:"75°C",100:"100°C"},"class-names":{mark:"custom-mark",markText:"custom-mark-text",dot:"custom-dot"},dots:""})]),t("div",null,[s[3]||(s[3]=t("div",{style:{"margin-bottom":"16px",color:"#666"}},"使用内联样式：",-1)),p(r(k),{"default-value":[20,80],range:"",styles:{rail:{background:"linear-gradient(to right, #e6f7ff, #bae7ff)",height:"8px"},track:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",height:"8px"},handle:{width:"20px",height:"20px",marginTop:"-6px",borderColor:"#667eea",borderWidth:"3px"}}})]),t("div",null,[s[4]||(s[4]=t("div",{style:{"margin-bottom":"16px",color:"#666"}},"自定义 Tooltip 样式：",-1)),p(r(k),{"default-value":70,tooltip:{open:!0,formatter:v=>`${v}%`},"class-names":{tooltip:"custom-tooltip"}},null,8,["tooltip"])])]))}}),Nn=hn(_n,[["__scopeId","data-v-9d0729a3"]]),Tn=`<template>
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
`,Mn={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},En={style:{"margin-bottom":"8px"}},Vn={style:{"margin-bottom":"8px"}},Pn=M({__name:"SliderDots",setup(n){const u=b(30),s=b([20,60]);return(v,a)=>(E(),V("div",Mn,[t("div",null,[t("p",En,"带刻度点："+q(u.value),1),p(r(k),{value:u.value,"onUpdate:value":a[0]||(a[0]=o=>u.value=o),dots:!0,step:10},null,8,["value"])]),t("div",null,[t("p",Vn,"范围选择 + 刻度点："+q(s.value),1),p(r(k),{value:s.value,"onUpdate:value":a[1]||(a[1]=o=>s.value=o),range:"",dots:!0,step:20},null,8,["value"])])]))}}),Bn=`<template>
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
`,Dn={style:{display:"flex","flex-direction":"column",gap:"40px",padding:"0 16px"}},Un={style:{"margin-bottom":"8px"}},An={style:{"margin-bottom":"8px"}},Rn=M({__name:"SliderMarks",setup(n){const u=b(37),s=b(0),v={0:"0°C",26:"26°C",37:"37°C",100:{label:"100°C",style:{color:"#f50"}}};return(a,o)=>(E(),V("div",Dn,[t("div",null,[t("p",Un,"带刻度标记："+q(u.value),1),p(r(k),{value:u.value,"onUpdate:value":o[0]||(o[0]=x=>u.value=x),marks:v},null,8,["value"])]),t("div",null,[t("p",An,"只能选择刻度点："+q(s.value),1),p(r(k),{value:s.value,"onUpdate:value":o[1]||(o[1]=x=>s.value=x),marks:v,step:null},null,8,["value"])])]))}}),On=`<template>
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
`,Ln={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},Wn={style:{"margin-bottom":"8px"}},jn={style:{"margin-bottom":"8px"}},zn=M({__name:"SliderRange",setup(n){const u=b([20,70]),s=b([20,60]);return(v,a)=>(E(),V("div",Ln,[t("div",null,[t("p",Wn,"范围选择："+q(u.value),1),p(r(k),{value:u.value,"onUpdate:value":a[0]||(a[0]=o=>u.value=o),range:""},null,8,["value"])]),t("div",null,[t("p",jn,"带步长的范围选择："+q(s.value),1),p(r(k),{value:s.value,"onUpdate:value":a[1]||(a[1]=o=>s.value=o),range:"",step:10},null,8,["value"])])]))}}),Fn=`<template>
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
`,Kn={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},Yn={style:{"margin-bottom":"8px"}},Hn={style:{"margin-bottom":"8px"}},In={style:{"margin-bottom":"8px"}},Xn=M({__name:"SliderTooltip",setup(n){const u=b(30),s=b(50),v=b(70);return(a,o)=>(E(),V("div",Kn,[t("div",null,[t("p",Yn,"自定义 Tooltip 格式："+q(u.value),1),p(r(k),{value:u.value,"onUpdate:value":o[0]||(o[0]=x=>u.value=x),tooltip:{formatter:x=>`${x}%`}},null,8,["value","tooltip"])]),t("div",null,[t("p",Hn,"隐藏 Tooltip："+q(s.value),1),p(r(k),{value:s.value,"onUpdate:value":o[1]||(o[1]=x=>s.value=x),tooltip:{formatter:null}},null,8,["value"])]),t("div",null,[t("p",In,"始终显示 Tooltip："+q(v.value),1),p(r(k),{value:v.value,"onUpdate:value":o[2]||(o[2]=x=>v.value=x),tooltip:{open:!0}},null,8,["value"])])]))}}),Gn=`<template>
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
`,Jn={style:{display:"flex",gap:"48px",padding:"0 16px"}},Qn={style:{height:"300px"}},Zn={style:{"margin-bottom":"8px"}},na={style:{height:"300px"}},aa={style:{"margin-bottom":"8px"}},ta=M({__name:"SliderVertical",setup(n){const u=b(30),s=b([20,50]);return(v,a)=>(E(),V("div",Jn,[t("div",Qn,[t("p",Zn,"垂直滑块："+q(u.value),1),p(r(k),{value:u.value,"onUpdate:value":a[0]||(a[0]=o=>u.value=o),vertical:""},null,8,["value"])]),t("div",na,[t("p",aa,"垂直范围选择："+q(s.value),1),p(r(k),{value:s.value,"onUpdate:value":a[1]||(a[1]=o=>s.value=o),vertical:"",range:"",step:10},null,8,["value"])])]))}}),sa=`<template>
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
`,ea={class:"markdown-body"},ca={__name:"slider",setup(n,{expose:u}){return u({frontmatter:{}}),(v,a)=>{const o=yn("DemoBlock");return E(),V("div",ea,[a[0]||(a[0]=dn('<h1 id="slider-滑动输入条" tabindex="-1">Slider 滑动输入条</h1><p>滑动型输入器，展示当前值和可选范围。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><ul><li>当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。</li><li>当用户需要自定义数值范围时。</li><li>适合于对数值不太精确的场景。</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="基础用法" tabindex="-1">基础用法</h3><p>基本滑动条。当 <code>range</code> 为 <code>true</code> 时，渲染为双滑块。</p>',7)),p(o,{title:"基础用法",source:r($n)},{default:P(()=>[p(wn)]),_:1},8,["source"]),a[1]||(a[1]=t("h3",{id:"范围选择",tabindex:"-1"},"范围选择",-1)),a[2]||(a[2]=t("p",null,[h("通过 "),t("code",null,"range"),h(" 属性开启范围选择。")],-1)),p(o,{title:"范围选择",source:r(Fn)},{default:P(()=>[p(zn)]),_:1},8,["source"]),a[3]||(a[3]=t("h3",{id:"刻度标记",tabindex:"-1"},"刻度标记",-1)),a[4]||(a[4]=t("p",null,[h("使用 "),t("code",null,"marks"),h(" 属性标注分段式滑块，使用 "),t("code",null,"step={null}"),h(" 时，Slider 的可选值仅有 marks 标出来的部分。")],-1)),p(o,{title:"刻度标记",source:r(On)},{default:P(()=>[p(Rn)]),_:1},8,["source"]),a[5]||(a[5]=t("h3",{id:"自定义-tooltip",tabindex:"-1"},"自定义 Tooltip",-1)),a[6]||(a[6]=t("p",null,[h("使用 "),t("code",null,"tooltip.formatter"),h(" 自定义 Tooltip 内容，设置为 "),t("code",null,"null"),h(" 可隐藏 Tooltip。使用 "),t("code",null,"tooltip.open"),h(" 控制 Tooltip 显示状态。")],-1)),p(o,{title:"自定义 Tooltip",source:r(Gn)},{default:P(()=>[p(Xn)]),_:1},8,["source"]),a[7]||(a[7]=t("h3",{id:"垂直方向",tabindex:"-1"},"垂直方向",-1)),a[8]||(a[8]=t("p",null,"垂直方向的 Slider。",-1)),p(o,{title:"垂直方向",source:r(sa)},{default:P(()=>[p(ta)]),_:1},8,["source"]),a[9]||(a[9]=t("h3",{id:"刻度点",tabindex:"-1"},"刻度点",-1)),a[10]||(a[10]=t("p",null,[h("通过 "),t("code",null,"dots"),h(" 属性显示刻度点。")],-1)),p(o,{title:"刻度点",source:r(Bn)},{default:P(()=>[p(Pn)]),_:1},8,["source"]),a[11]||(a[11]=t("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),a[12]||(a[12]=t("p",null,[h("通过 "),t("code",null,"classNames"),h(" / "),t("code",null,"styles"),h(" 对各子元素做细粒度样式控制。")],-1)),p(o,{title:"语义化 className 与 style",source:r(Tn)},{default:P(()=>[p(Nn)]),_:1},8,["source"]),a[13]||(a[13]=dn(`<h2 id="api" tabindex="-1">API</h2><h3 id="slider-props" tabindex="-1">Slider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>设置当前取值。当 <code>range</code> 为 false 时，使用 number，否则用 [number, number]</td><td><code>number | [number, number]</code></td><td>-</td></tr><tr><td>defaultValue</td><td>设置初始取值</td><td><code>number | [number, number]</code></td><td><code>0</code></td></tr><tr><td>min</td><td>最小值</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>max</td><td>最大值</td><td><code>number</code></td><td><code>100</code></td></tr><tr><td>step</td><td>步长，取值必须大于 0，并且可被 (max - min) 整除。当 <code>marks</code> 不为空对象时，可以设置 <code>step</code> 为 <code>null</code>，此时 Slider 的可选值仅有 marks 标出来的部分</td><td><code>number | null</code></td><td><code>1</code></td></tr><tr><td>disabled</td><td>值为 true 时，滑块为禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>vertical</td><td>值为 true 时，Slider 为垂直方向</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>reverse</td><td>反向坐标轴</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>range</td><td>双滑块模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>marks</td><td>刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式</td><td><code>Record&lt;number, string | { label: string; style?: CSSProperties }&gt;</code></td><td>-</td></tr><tr><td>included</td><td><code>marks</code> 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>dots</td><td>是否只能拖拽到刻度上</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>keyboard</td><td>支持使用键盘操作 handle</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>tooltip</td><td>Tooltip 相关配置</td><td><code>{ open?: boolean; formatter?: (value: number) =&gt; string | null }</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SliderClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SliderStyles</code></td><td>-</td></tr></tbody></table><h3 id="slider-events" tabindex="-1">Slider Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入</td><td><code>(value: number | [number, number]) =&gt; void</code></td></tr><tr><td>change</td><td>当 Slider 的值发生改变时触发</td><td><code>(value: number | [number, number]) =&gt; void</code></td></tr><tr><td>afterChange</td><td>与 mouseup 触发时机一致，把当前值作为参数传入</td><td><code>(value: number | [number, number]) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Slider 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义轨道与填充 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>
    <span class="token attr-name">:default-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>40<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      rail: &#39;my-rail&#39;,
      track: &#39;my-track&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义滑块手柄 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>
    <span class="token attr-name">:default-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>60<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      handle: &#39;my-handle&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义刻度标记 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>
    <span class="token attr-name">:default-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:marks</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ 0: &#39;0°C&#39;, 50: &#39;50°C&#39;, 100: &#39;100°C&#39; }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      markText: &#39;my-mark-text&#39;,
      dot: &#39;my-dot&#39;,
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">dots</span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-rail)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #f0f5ff<span class="token punctuation">,</span> #d6e4ff<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-track)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #1890ff 0%<span class="token punctuation">,</span> #096dd9 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-handle)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 3px solid #ffffff<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>102<span class="token punctuation">,</span> 126<span class="token punctuation">,</span> 234<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-handle:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-mark-text)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-dot)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #ffffff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义轨道高度与颜色 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>
    <span class="token attr-name">:default-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>40<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      rail: { background: &#39;#f0f0f0&#39;, height: &#39;8px&#39; },
      track: { background: &#39;#52c41a&#39;, height: &#39;8px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义滑块手柄 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>
    <span class="token attr-name">:default-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>60<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      handle: {
        width: &#39;20px&#39;,
        height: &#39;20px&#39;,
        borderColor: &#39;#722ed1&#39;,
        borderWidth: &#39;3px&#39;,
      },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用：范围选择 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>
    <span class="token attr-name">:default-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[20, 80]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">range</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      rail: { background: &#39;#e6f7ff&#39;, height: &#39;8px&#39; },
      track: { background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;, height: &#39;8px&#39; },
      handle: { borderColor: &#39;#667eea&#39;, borderWidth: &#39;3px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>范围选择模式 (<code>range={true}</code>) 下会渲染多个 <code>handle</code>，<code>classNames.handle</code> 和 <code>styles.handle</code> 会应用到所有手柄</li><li>修改 <code>rail</code> 或 <code>track</code> 的高度时，需同步调整 <code>handle</code> 的 <code>marginTop</code>，以保持垂直居中（默认轨道高度 4px，手柄高度 14px，<code>marginTop: -5px</code>）</li><li><code>tooltip</code> 样式仅在 Tooltip 显示时生效（hover/拖拽时或设置 <code>tooltip.open={true}</code> 时）</li><li>垂直模式下，<code>rail</code> 和 <code>track</code> 的宽度对应水平模式的高度</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Slider 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr></tbody></table><h2 id="键盘操作" tabindex="-1">键盘操作</h2><ul><li><code>←</code> / <code>↓</code>: 减小步长</li><li><code>→</code> / <code>↑</code>: 增加步长</li><li><code>Home</code>: 跳转到最小值</li><li><code>End</code>: 跳转到最大值</li></ul>`,25))])}}};export{ca as default};
