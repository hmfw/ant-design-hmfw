import{o as C,N as q,Q as Z,n as i,E as b,f as H,A as T,k as w,h as d,J as _,K as m,H as ee,l as Y,R as E,m as $}from"./index-B09KCCs0.js";import{c as B}from"./cls-S9IiI6wd.js";import{K as R}from"./event-CZUxRbwU.js";const h=C({name:"Slider",props:{value:[Number,Array],defaultValue:[Number,Array],min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:Boolean,range:Boolean,vertical:Boolean,reverse:Boolean,marks:Object,tooltip:{type:Object},included:{type:Boolean,default:!0},dots:Boolean,keyboard:{type:Boolean,default:!0}},emits:["update:value","change","afterChange"],setup(e,{emit:s}){const l=q("slider"),x=b(null),t=b(null),o=b(null),p=n=>Math.min(e.max,Math.max(e.min,n)),N=n=>{if(e.range){const a=Array.isArray(n)?n:[e.min,e.min],[r,c]=a,v=p(r),f=p(c);return[Math.min(v,f),Math.max(v,f)]}return p(typeof n=="number"?n:e.min)},F=N(e.defaultValue??e.value??(e.range?[0,0]:0)),L=b(F),X=H(()=>e.value!==void 0),k=H(()=>{const n=X.value?e.value:L.value;return N(n)});Z(()=>e.value,n=>{n!==void 0&&(L.value=N(n))});const I=()=>e.marks?Object.keys(e.marks).map(Number).sort((n,a)=>n-a):[],K=n=>{if(e.step===null){const r=I();return[e.min,...r,e.max].reduce((f,y)=>Math.abs(y-n)<Math.abs(f-n)?y:f)}const a=Math.round((n-e.min)/e.step);return p(e.min+a*e.step)},U=n=>(n-e.min)/(e.max-e.min)*100,j=n=>{if(!x.value)return 0;const a=x.value.getBoundingClientRect(),r="touches"in n?n.touches[0].clientX:n.clientX,c="touches"in n?n.touches[0].clientY:n.clientY;let v;return e.vertical?v=e.reverse?(c-a.top)/a.height:1-(c-a.top)/a.height:v=e.reverse?1-(r-a.left)/a.width:(r-a.left)/a.width,v=Math.max(0,Math.min(1,v)),K(e.min+v*(e.max-e.min))},S=n=>{const a=N(n);L.value=a,s("update:value",a),s("change",a)},G=n=>{if(e.disabled)return;const a=j(n);if(e.range){const[r,c]=k.value,v=Math.abs(a-r),f=Math.abs(a-c);v<=f?S([a,c]):S([r,a])}else S(a)},P=n=>a=>{if(e.disabled)return;a.preventDefault(),t.value=n,o.value=n;const r=v=>{const f=j(v);if(e.range){const[y,V]=k.value;S(n==="start"?[Math.min(f,V),V]:[y,Math.max(f,y)])}else S(f)},c=()=>{t.value=null,o.value=null,s("afterChange",k.value),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",c),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",c)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",c),document.addEventListener("touchmove",r),document.addEventListener("touchend",c)},D=n=>{var a,r;return((a=e.tooltip)==null?void 0:a.formatter)===null?null:(r=e.tooltip)!=null&&r.formatter?e.tooltip.formatter(n):String(n)},z=n=>{var a;return((a=e.tooltip)==null?void 0:a.open)!==void 0?e.tooltip.open:o.value===n},W=n=>a=>{if(e.disabled||!e.keyboard)return;const r=e.range?n==="start"?k.value[0]:k.value[1]:k.value;let c=0;const v=e.step===null?1:e.step;switch(a.key){case R.ARROW_RIGHT:case R.ARROW_UP:c=v;break;case R.ARROW_LEFT:case R.ARROW_DOWN:c=-v;break;case R.HOME:c=e.min-r;break;case R.END:c=e.max-r;break;default:return}a.preventDefault();const f=K(r+c);if(e.range){const[y,V]=k.value;S(n==="start"?[Math.min(f,V),V]:[y,Math.max(f,y)])}else S(f)};return()=>{const n=k.value,a=e.range?n[0]:n,r=e.range?n[1]:n,c=U(a),v=U(r),f=e.vertical?e.included?{bottom:`${e.range?c:0}%`,height:`${e.range?v-c:v}%`}:{}:e.included?{left:`${e.range?c:0}%`,width:`${e.range?v-c:v}%`}:{},y=e.marks?Object.entries(e.marks).map(([u,g])=>({value:Number(u),label:typeof g=="string"?g:g.label,style:typeof g=="object"&&g.style?g.style:void 0})):[],V=[];if(e.dots&&e.step!==null&&e.step>0)for(let u=e.min;u<=e.max;u+=e.step)V.push(u);const J=u=>{if(!e.disabled)if(e.range){const[g,M]=k.value,A=Math.abs(u-g),O=Math.abs(u-M);A<=O?S([u,M]):S([g,u])}else S(u)};return i("div",{class:B(l,{[`${l}-disabled`]:e.disabled,[`${l}-vertical`]:e.vertical,[`${l}-with-marks`]:y.length>0})},[i("div",{ref:x,class:`${l}-rail`,onClick:G},[i("div",{class:`${l}-track`,style:f},null),y.map(({value:u})=>{const g=U(u),M=e.vertical?{bottom:`${g}%`}:{left:`${g}%`};return i("span",{key:u,class:B(`${l}-dot`,{[`${l}-dot-active`]:e.range?u>=a&&u<=r:u<=r}),style:M},null)}),V.map(u=>{const g=U(u),M=e.vertical?{bottom:`${g}%`}:{left:`${g}%`};return i("span",{key:u,class:B(`${l}-dot`,{[`${l}-dot-active`]:e.range?u>=a&&u<=r:u<=r}),style:M},null)}),e.range&&i("div",{class:B(`${l}-handle`,`${l}-handle-1`,{[`${l}-handle-dragging`]:t.value==="start"}),style:e.vertical?{bottom:`${c}%`}:{left:`${c}%`},role:"slider","aria-label":"最小值","aria-orientation":e.vertical?"vertical":"horizontal","aria-valuemin":e.min,"aria-valuemax":r,"aria-valuenow":a,"aria-disabled":e.disabled,tabindex:e.disabled?-1:0,onMousedown:P("start"),onTouchstart:P("start"),onMouseenter:()=>{o.value="start"},onMouseleave:()=>{t.value!=="start"&&(o.value=null)},onKeydown:W("start")},[z("start")&&D(a)!==null&&i("div",{class:`${l}-tooltip`},[D(a)])]),i("div",{class:B(`${l}-handle`,e.range?`${l}-handle-2`:"",{[`${l}-handle-dragging`]:t.value==="end"||!e.range&&t.value!==null}),style:e.vertical?{bottom:`${v}%`}:{left:`${v}%`},role:"slider","aria-label":e.range?"最大值":"滑块","aria-orientation":e.vertical?"vertical":"horizontal","aria-valuemin":e.range?a:e.min,"aria-valuemax":e.max,"aria-valuenow":r,"aria-disabled":e.disabled,tabindex:e.disabled?-1:0,onMousedown:P((e.range,"end")),onTouchstart:P((e.range,"end")),onMouseenter:()=>{o.value="end"},onMouseleave:()=>{t.value!=="end"&&(o.value=null)},onKeydown:W(e.range?"end":"start")},[z("end")&&D(r)!==null&&i("div",{class:`${l}-tooltip`},[D(r)])])]),y.length>0&&i("div",{class:`${l}-mark`},[y.map(({value:u,label:g,style:M})=>{const A=U(u),O=e.vertical?{bottom:`${A}%`}:{left:`${A}%`},Q=M?{...O,...M}:O;return i("span",{key:u,class:B(`${l}-mark-text`,{[`${l}-mark-text-active`]:e.range?u>=a&&u<=r:u<=r}),style:Q,onClick:()=>J(u)},[g])})])])}}}),te={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},ne={style:{"margin-bottom":"8px"}},le=C({__name:"SliderBasic",setup(e){const s=b(30),l=b(50);return(x,t)=>(T(),w("div",te,[d("div",null,[d("p",ne,"基础滑块："+_(s.value),1),i(m(h),{value:s.value,"onUpdate:value":t[0]||(t[0]=o=>s.value=o)},null,8,["value"])]),d("div",null,[t[2]||(t[2]=d("p",{style:{"margin-bottom":"8px"}},"禁用状态：",-1)),i(m(h),{value:l.value,"onUpdate:value":t[1]||(t[1]=o=>l.value=o),disabled:""},null,8,["value"])])]))}}),ae=`<template>
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
import { Slider } from 'ant-design-hmfw'

const value1 = ref(30)
const value2 = ref(50)
<\/script>
`,de={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},oe={style:{"margin-bottom":"8px"}},ie={style:{"margin-bottom":"8px"}},re=C({__name:"SliderDots",setup(e){const s=b(30),l=b([20,60]);return(x,t)=>(T(),w("div",de,[d("div",null,[d("p",oe,"带刻度点："+_(s.value),1),i(m(h),{value:s.value,"onUpdate:value":t[0]||(t[0]=o=>s.value=o),dots:!0,step:10},null,8,["value"])]),d("div",null,[d("p",ie,"范围选择 + 刻度点："+_(l.value),1),i(m(h),{value:l.value,"onUpdate:value":t[1]||(t[1]=o=>l.value=o),range:"",dots:!0,step:20},null,8,["value"])])]))}}),ue=`<template>
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
import { Slider } from 'ant-design-hmfw'

const value1 = ref(30)
const value2 = ref<[number, number]>([20, 60])
<\/script>
`,se={style:{display:"flex","flex-direction":"column",gap:"40px",padding:"0 16px"}},ce={style:{"margin-bottom":"8px"}},ve={style:{"margin-bottom":"8px"}},me=C({__name:"SliderMarks",setup(e){const s=b(37),l=b(0),x={0:"0°C",26:"26°C",37:"37°C",100:{label:"100°C",style:{color:"#f50"}}};return(t,o)=>(T(),w("div",se,[d("div",null,[d("p",ce,"带刻度标记："+_(s.value),1),i(m(h),{value:s.value,"onUpdate:value":o[0]||(o[0]=p=>s.value=p),marks:x},null,8,["value"])]),d("div",null,[d("p",ve,"只能选择刻度点："+_(l.value),1),i(m(h),{value:l.value,"onUpdate:value":o[1]||(o[1]=p=>l.value=p),marks:x,step:null},null,8,["value"])])]))}}),fe=`<template>
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
import { Slider } from 'ant-design-hmfw'

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
`,ge={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},be={style:{"margin-bottom":"8px"}},pe={style:{"margin-bottom":"8px"}},xe=C({__name:"SliderRange",setup(e){const s=b([20,70]),l=b([20,60]);return(x,t)=>(T(),w("div",ge,[d("div",null,[d("p",be,"范围选择："+_(s.value),1),i(m(h),{value:s.value,"onUpdate:value":t[0]||(t[0]=o=>s.value=o),range:""},null,8,["value"])]),d("div",null,[d("p",pe,"带步长的范围选择："+_(l.value),1),i(m(h),{value:l.value,"onUpdate:value":t[1]||(t[1]=o=>l.value=o),range:"",step:10},null,8,["value"])])]))}}),ye=`<template>
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
import { Slider } from 'ant-design-hmfw'

const rangeValue = ref<[number, number]>([20, 70])
const rangeValue2 = ref<[number, number]>([20, 60])
<\/script>
`,he={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},Se={style:{"margin-bottom":"8px"}},_e={style:{"margin-bottom":"8px"}},$e={style:{"margin-bottom":"8px"}},ke=C({__name:"SliderTooltip",setup(e){const s=b(30),l=b(50),x=b(70);return(t,o)=>(T(),w("div",he,[d("div",null,[d("p",Se,"自定义 Tooltip 格式："+_(s.value),1),i(m(h),{value:s.value,"onUpdate:value":o[0]||(o[0]=p=>s.value=p),tooltip:{formatter:p=>`${p}%`}},null,8,["value","tooltip"])]),d("div",null,[d("p",_e,"隐藏 Tooltip："+_(l.value),1),i(m(h),{value:l.value,"onUpdate:value":o[1]||(o[1]=p=>l.value=p),tooltip:{formatter:null}},null,8,["value"])]),d("div",null,[d("p",$e,"始终显示 Tooltip："+_(x.value),1),i(m(h),{value:x.value,"onUpdate:value":o[2]||(o[2]=p=>x.value=p),tooltip:{open:!0}},null,8,["value"])])]))}}),Me=`<template>
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
import { Slider } from 'ant-design-hmfw'

const value1 = ref(30)
const value2 = ref(50)
const value3 = ref(70)
<\/script>
`,Ve={style:{display:"flex",gap:"48px",padding:"0 16px"}},Ce={style:{height:"300px"}},Te={style:{"margin-bottom":"8px"}},we={style:{height:"300px"}},Ee={style:{"margin-bottom":"8px"}},Be=C({__name:"SliderVertical",setup(e){const s=b(30),l=b([20,50]);return(x,t)=>(T(),w("div",Ve,[d("div",Ce,[d("p",Te,"垂直滑块："+_(s.value),1),i(m(h),{value:s.value,"onUpdate:value":t[0]||(t[0]=o=>s.value=o),vertical:""},null,8,["value"])]),d("div",we,[d("p",Ee,"垂直范围选择："+_(l.value),1),i(m(h),{value:l.value,"onUpdate:value":t[1]||(t[1]=o=>l.value=o),vertical:"",range:"",step:10},null,8,["value"])])]))}}),Re=`<template>
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
import { Slider } from 'ant-design-hmfw'

const value1 = ref(30)
const value2 = ref<[number, number]>([20, 50])
<\/script>
`,Ue={class:"markdown-body"},Ae={__name:"slider",setup(e,{expose:s}){return s({frontmatter:{}}),(x,t)=>{const o=ee("DemoBlock");return T(),w("div",Ue,[t[0]||(t[0]=Y('<h1 id="slider-" tabindex="-1">Slider 滑动输入条</h1><p>滑动型输入器，展示当前值和可选范围。</p><h2 id="" tabindex="-1">何时使用</h2><ul><li>当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。</li><li>当用户需要自定义数值范围时。</li><li>适合于对数值不太精确的场景。</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基础用法</h3><p>基本滑动条。当 <code>range</code> 为 <code>true</code> 时，渲染为双滑块。</p>',7)),i(o,{title:"基础用法",source:m(ae)},{default:E(()=>[i(le)]),_:1},8,["source"]),t[1]||(t[1]=d("h3",{id:"-3",tabindex:"-1"},"范围选择",-1)),t[2]||(t[2]=d("p",null,[$("通过 "),d("code",null,"range"),$(" 属性开启范围选择。")],-1)),i(o,{title:"范围选择",source:m(ye)},{default:E(()=>[i(xe)]),_:1},8,["source"]),t[3]||(t[3]=d("h3",{id:"-4",tabindex:"-1"},"刻度标记",-1)),t[4]||(t[4]=d("p",null,[$("使用 "),d("code",null,"marks"),$(" 属性标注分段式滑块，使用 "),d("code",null,"step={null}"),$(" 时，Slider 的可选值仅有 marks 标出来的部分。")],-1)),i(o,{title:"刻度标记",source:m(fe)},{default:E(()=>[i(me)]),_:1},8,["source"]),t[5]||(t[5]=d("h3",{id:"-tooltip",tabindex:"-1"},"自定义 Tooltip",-1)),t[6]||(t[6]=d("p",null,[$("使用 "),d("code",null,"tooltip.formatter"),$(" 自定义 Tooltip 内容，设置为 "),d("code",null,"null"),$(" 可隐藏 Tooltip。使用 "),d("code",null,"tooltip.open"),$(" 控制 Tooltip 显示状态。")],-1)),i(o,{title:"自定义 Tooltip",source:m(Me)},{default:E(()=>[i(ke)]),_:1},8,["source"]),t[7]||(t[7]=d("h3",{id:"-5",tabindex:"-1"},"垂直方向",-1)),t[8]||(t[8]=d("p",null,"垂直方向的 Slider。",-1)),i(o,{title:"垂直方向",source:m(Re)},{default:E(()=>[i(Be)]),_:1},8,["source"]),t[9]||(t[9]=d("h3",{id:"-6",tabindex:"-1"},"刻度点",-1)),t[10]||(t[10]=d("p",null,[$("通过 "),d("code",null,"dots"),$(" 属性显示刻度点。")],-1)),i(o,{title:"刻度点",source:m(ue)},{default:E(()=>[i(re)]),_:1},8,["source"]),t[11]||(t[11]=Y('<h2 id="api" tabindex="-1">API</h2><h3 id="slider-props" tabindex="-1">Slider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>设置当前取值。当 <code>range</code> 为 false 时，使用 number，否则用 [number, number]</td><td><code>number | [number, number]</code></td><td>-</td></tr><tr><td>defaultValue</td><td>设置初始取值</td><td><code>number | [number, number]</code></td><td><code>0</code></td></tr><tr><td>min</td><td>最小值</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>max</td><td>最大值</td><td><code>number</code></td><td><code>100</code></td></tr><tr><td>step</td><td>步长，取值必须大于 0，并且可被 (max - min) 整除。当 <code>marks</code> 不为空对象时，可以设置 <code>step</code> 为 <code>null</code>，此时 Slider 的可选值仅有 marks 标出来的部分</td><td><code>number | null</code></td><td><code>1</code></td></tr><tr><td>disabled</td><td>值为 true 时，滑块为禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>vertical</td><td>值为 true 时，Slider 为垂直方向</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>reverse</td><td>反向坐标轴</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>range</td><td>双滑块模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>marks</td><td>刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式</td><td><code>Record&lt;number, string | { label: string; style?: CSSProperties }&gt;</code></td><td>-</td></tr><tr><td>included</td><td><code>marks</code> 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>dots</td><td>是否只能拖拽到刻度上</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>keyboard</td><td>支持使用键盘操作 handle</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>tooltip</td><td>Tooltip 相关配置</td><td><code>{ open?: boolean; formatter?: (value: number) =&gt; string | null }</code></td><td>-</td></tr></tbody></table><h3 id="slider-events" tabindex="-1">Slider Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入</td><td><code>(value: number | [number, number]) =&gt; void</code></td></tr><tr><td>change</td><td>当 Slider 的值发生改变时触发</td><td><code>(value: number | [number, number]) =&gt; void</code></td></tr><tr><td>afterChange</td><td>与 mouseup 触发时机一致，把当前值作为参数传入</td><td><code>(value: number | [number, number]) =&gt; void</code></td></tr></tbody></table><h2 id="-7" tabindex="-1">键盘操作</h2><ul><li><code>←</code> / <code>↓</code>: 减小步长</li><li><code>→</code> / <code>↑</code>: 增加步长</li><li><code>Home</code>: 跳转到最小值</li><li><code>End</code>: 跳转到最大值</li></ul>',7))])}}};export{Ae as default};
