import{m as C,L as J,O as Q,l as i,B as p,d as H,y as T,i as w,f as n,H as _,I as m,E as Z,j as Y,P as E,k as $}from"./index-Qxz1plB-.js";import{c as B}from"./cls-S9IiI6wd.js";import{K as U}from"./event-CZUxRbwU.js";const h=C({name:"Slider",props:{value:[Number,Array],defaultValue:[Number,Array],min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:Boolean,range:Boolean,vertical:Boolean,reverse:Boolean,marks:Object,tooltip:{type:Object},included:{type:Boolean,default:!0},dots:Boolean,keyboard:{type:Boolean,default:!0}},emits:["update:value","change","afterChange"],setup(e,{emit:s}){const l=J("slider"),g=p(null),t=p(null),a=p(null),x=e.defaultValue??e.value??(e.range?[0,0]:0),L=p(x),z=H(()=>e.value!==void 0),k=H(()=>z.value?e.value:L.value);Q(()=>e.value,d=>{d!==void 0&&(L.value=d)});const F=d=>Math.min(e.max,Math.max(e.min,d)),I=()=>e.marks?Object.keys(e.marks).map(Number).sort((d,o)=>d-o):[],A=d=>{if(e.step===null){const r=I();return[e.min,...r,e.max].reduce((b,y)=>Math.abs(y-d)<Math.abs(b-d)?y:b)}const o=Math.round((d-e.min)/e.step);return F(e.min+o*e.step)},P=d=>(d-e.min)/(e.max-e.min)*100,j=d=>{if(!g.value)return 0;const o=g.value.getBoundingClientRect(),r="touches"in d?d.touches[0].clientX:d.clientX,c="touches"in d?d.touches[0].clientY:d.clientY;let v;return e.vertical?v=e.reverse?(c-o.top)/o.height:1-(c-o.top)/o.height:v=e.reverse?1-(r-o.left)/o.width:(r-o.left)/o.width,v=Math.max(0,Math.min(1,v)),A(e.min+v*(e.max-e.min))},S=d=>{L.value=d,s("update:value",d),s("change",d)},X=d=>{if(e.disabled)return;const o=j(d);if(e.range){const[r,c]=k.value,v=Math.abs(o-r),b=Math.abs(o-c);v<=b?S([o,c]):S([r,o])}else S(o)},R=d=>o=>{if(e.disabled)return;o.preventDefault(),t.value=d,a.value=d;const r=v=>{const b=j(v);if(e.range){const[y,M]=k.value;S(d==="start"?[Math.min(b,M),M]:[y,Math.max(b,y)])}else S(b)},c=()=>{t.value=null,a.value=null,s("afterChange",k.value),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",c),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",c)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",c),document.addEventListener("touchmove",r),document.addEventListener("touchend",c)},N=d=>{var o,r;return((o=e.tooltip)==null?void 0:o.formatter)===null?null:(r=e.tooltip)!=null&&r.formatter?e.tooltip.formatter(d):String(d)},K=d=>{var o;return((o=e.tooltip)==null?void 0:o.open)!==void 0?e.tooltip.open:a.value===d},W=d=>o=>{if(e.disabled||!e.keyboard)return;const r=e.range?d==="start"?k.value[0]:k.value[1]:k.value;let c=0;const v=e.step===null?1:e.step;switch(o.key){case U.ARROW_RIGHT:case U.ARROW_UP:c=v;break;case U.ARROW_LEFT:case U.ARROW_DOWN:c=-v;break;case U.HOME:c=e.min-r;break;case U.END:c=e.max-r;break;default:return}o.preventDefault();const b=A(r+c);if(e.range){const[y,M]=k.value;S(d==="start"?[Math.min(b,M),M]:[y,Math.max(b,y)])}else S(b)};return()=>{const d=k.value,o=e.range?d[0]:d,r=e.range?d[1]:d,c=P(o),v=P(r),b=e.vertical?e.included?{bottom:`${e.range?c:0}%`,height:`${e.range?v-c:v}%`}:{}:e.included?{left:`${e.range?c:0}%`,width:`${e.range?v-c:v}%`}:{},y=e.marks?Object.entries(e.marks).map(([u,f])=>({value:Number(u),label:typeof f=="string"?f:f.label,style:typeof f=="object"&&f.style?f.style:void 0})):[],M=[];if(e.dots&&e.step!==null&&e.step>0)for(let u=e.min;u<=e.max;u+=e.step)M.push(u);const G=u=>{if(!e.disabled)if(e.range){const[f,V]=k.value,D=Math.abs(u-f),O=Math.abs(u-V);D<=O?S([u,V]):S([f,u])}else S(u)};return i("div",{class:B(l,{[`${l}-disabled`]:e.disabled,[`${l}-vertical`]:e.vertical,[`${l}-with-marks`]:y.length>0})},[i("div",{ref:g,class:`${l}-rail`,onClick:X},[i("div",{class:`${l}-track`,style:b},null),y.map(({value:u})=>{const f=P(u),V=e.vertical?{bottom:`${f}%`}:{left:`${f}%`};return i("span",{key:u,class:B(`${l}-dot`,{[`${l}-dot-active`]:e.range?u>=o&&u<=r:u<=r}),style:V},null)}),M.map(u=>{const f=P(u),V=e.vertical?{bottom:`${f}%`}:{left:`${f}%`};return i("span",{key:u,class:B(`${l}-dot`,{[`${l}-dot-active`]:e.range?u>=o&&u<=r:u<=r}),style:V},null)}),e.range&&i("div",{class:B(`${l}-handle`,`${l}-handle-1`,{[`${l}-handle-dragging`]:t.value==="start"}),style:e.vertical?{bottom:`${c}%`}:{left:`${c}%`},role:"slider","aria-label":"最小值","aria-orientation":e.vertical?"vertical":"horizontal","aria-valuemin":e.min,"aria-valuemax":r,"aria-valuenow":o,"aria-disabled":e.disabled,tabindex:e.disabled?-1:0,onMousedown:R("start"),onTouchstart:R("start"),onMouseenter:()=>{a.value="start"},onMouseleave:()=>{t.value!=="start"&&(a.value=null)},onKeydown:W("start")},[K("start")&&N(o)!==null&&i("div",{class:`${l}-tooltip`},[N(o)])]),i("div",{class:B(`${l}-handle`,e.range?`${l}-handle-2`:"",{[`${l}-handle-dragging`]:t.value==="end"||!e.range&&t.value!==null}),style:e.vertical?{bottom:`${v}%`}:{left:`${v}%`},role:"slider","aria-label":e.range?"最大值":"滑块","aria-orientation":e.vertical?"vertical":"horizontal","aria-valuemin":e.range?o:e.min,"aria-valuemax":e.max,"aria-valuenow":r,"aria-disabled":e.disabled,tabindex:e.disabled?-1:0,onMousedown:R((e.range,"end")),onTouchstart:R((e.range,"end")),onMouseenter:()=>{a.value="end"},onMouseleave:()=>{t.value!=="end"&&(a.value=null)},onKeydown:W(e.range?"end":"start")},[K("end")&&N(r)!==null&&i("div",{class:`${l}-tooltip`},[N(r)])])]),y.length>0&&i("div",{class:`${l}-mark`},[y.map(({value:u,label:f,style:V})=>{const D=P(u),O=e.vertical?{bottom:`${D}%`}:{left:`${D}%`},q=V?{...O,...V}:O;return i("span",{key:u,class:B(`${l}-mark-text`,{[`${l}-mark-text-active`]:e.range?u>=o&&u<=r:u<=r}),style:q,onClick:()=>G(u)},[f])})])])}}}),ee={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},te={style:{"margin-bottom":"8px"}},le=C({__name:"SliderBasic",setup(e){const s=p(30),l=p(50);return(g,t)=>(T(),w("div",ee,[n("div",null,[n("p",te,"基础滑块："+_(s.value),1),i(m(h),{value:s.value,"onUpdate:value":t[0]||(t[0]=a=>s.value=a)},null,8,["value"])]),n("div",null,[t[2]||(t[2]=n("p",{style:{"margin-bottom":"8px"}},"禁用状态：",-1)),i(m(h),{value:l.value,"onUpdate:value":t[1]||(t[1]=a=>l.value=a),disabled:""},null,8,["value"])])]))}}),ne=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px; padding: 0 16px;">
    <div>
      <p style="margin-bottom: 8px;">基础滑块：{{ value1 }}</p>
      <Slider v-model:value="value1" />
    </div>
    <div>
      <p style="margin-bottom: 8px;">禁用状态：</p>
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
`,ae={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},de={style:{"margin-bottom":"8px"}},oe={style:{"margin-bottom":"8px"}},ie=C({__name:"SliderDots",setup(e){const s=p(30),l=p([20,60]);return(g,t)=>(T(),w("div",ae,[n("div",null,[n("p",de,"带刻度点："+_(s.value),1),i(m(h),{value:s.value,"onUpdate:value":t[0]||(t[0]=a=>s.value=a),dots:!0,step:10},null,8,["value"])]),n("div",null,[n("p",oe,"范围选择 + 刻度点："+_(l.value),1),i(m(h),{value:l.value,"onUpdate:value":t[1]||(t[1]=a=>l.value=a),range:"",dots:!0,step:20},null,8,["value"])])]))}}),re=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px; padding: 0 16px;">
    <div>
      <p style="margin-bottom: 8px;">带刻度点：{{ value1 }}</p>
      <Slider v-model:value="value1" :dots="true" :step="10" />
    </div>
    <div>
      <p style="margin-bottom: 8px;">范围选择 + 刻度点：{{ value2 }}</p>
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
`,ue={style:{display:"flex","flex-direction":"column",gap:"40px",padding:"0 16px"}},se={style:{"margin-bottom":"8px"}},ce={style:{"margin-bottom":"8px"}},ve=C({__name:"SliderMarks",setup(e){const s=p(37),l=p(0),g={0:"0°C",26:"26°C",37:"37°C",100:{label:"100°C",style:{color:"#f50"}}};return(t,a)=>(T(),w("div",ue,[n("div",null,[n("p",se,"带刻度标记："+_(s.value),1),i(m(h),{value:s.value,"onUpdate:value":a[0]||(a[0]=x=>s.value=x),marks:g},null,8,["value"])]),n("div",null,[n("p",ce,"只能选择刻度点："+_(l.value),1),i(m(h),{value:l.value,"onUpdate:value":a[1]||(a[1]=x=>l.value=x),marks:g,step:null},null,8,["value"])])]))}}),me=`<template>
  <div style="display: flex; flex-direction: column; gap: 40px; padding: 0 16px;">
    <div>
      <p style="margin-bottom: 8px;">带刻度标记：{{ value1 }}</p>
      <Slider v-model:value="value1" :marks="marks" />
    </div>
    <div>
      <p style="margin-bottom: 8px;">只能选择刻度点：{{ value2 }}</p>
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
`,fe={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},pe={style:{"margin-bottom":"8px"}},ge={style:{"margin-bottom":"8px"}},be=C({__name:"SliderRange",setup(e){const s=p([20,70]),l=p([20,60]);return(g,t)=>(T(),w("div",fe,[n("div",null,[n("p",pe,"范围选择："+_(s.value),1),i(m(h),{value:s.value,"onUpdate:value":t[0]||(t[0]=a=>s.value=a),range:""},null,8,["value"])]),n("div",null,[n("p",ge,"带步长的范围选择："+_(l.value),1),i(m(h),{value:l.value,"onUpdate:value":t[1]||(t[1]=a=>l.value=a),range:"",step:10},null,8,["value"])])]))}}),xe=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px; padding: 0 16px;">
    <div>
      <p style="margin-bottom: 8px;">范围选择：{{ rangeValue }}</p>
      <Slider v-model:value="rangeValue" range />
    </div>
    <div>
      <p style="margin-bottom: 8px;">带步长的范围选择：{{ rangeValue2 }}</p>
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
`,ye={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},he={style:{"margin-bottom":"8px"}},Se={style:{"margin-bottom":"8px"}},_e={style:{"margin-bottom":"8px"}},$e=C({__name:"SliderTooltip",setup(e){const s=p(30),l=p(50),g=p(70);return(t,a)=>(T(),w("div",ye,[n("div",null,[n("p",he,"自定义 Tooltip 格式："+_(s.value),1),i(m(h),{value:s.value,"onUpdate:value":a[0]||(a[0]=x=>s.value=x),tooltip:{formatter:x=>`${x}%`}},null,8,["value","tooltip"])]),n("div",null,[n("p",Se,"隐藏 Tooltip："+_(l.value),1),i(m(h),{value:l.value,"onUpdate:value":a[1]||(a[1]=x=>l.value=x),tooltip:{formatter:null}},null,8,["value"])]),n("div",null,[n("p",_e,"始终显示 Tooltip："+_(g.value),1),i(m(h),{value:g.value,"onUpdate:value":a[2]||(a[2]=x=>g.value=x),tooltip:{open:!0}},null,8,["value"])])]))}}),ke=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px; padding: 0 16px;">
    <div>
      <p style="margin-bottom: 8px;">自定义 Tooltip 格式：{{ value1 }}</p>
      <Slider v-model:value="value1" :tooltip="{ formatter: (v) => \`\${v}%\` }" />
    </div>
    <div>
      <p style="margin-bottom: 8px;">隐藏 Tooltip：{{ value2 }}</p>
      <Slider v-model:value="value2" :tooltip="{ formatter: null }" />
    </div>
    <div>
      <p style="margin-bottom: 8px;">始终显示 Tooltip：{{ value3 }}</p>
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
`,Ve={style:{display:"flex",gap:"48px",padding:"0 16px"}},Me={style:{height:"300px"}},Ce={style:{"margin-bottom":"8px"}},Te={style:{height:"300px"}},we={style:{"margin-bottom":"8px"}},Ee=C({__name:"SliderVertical",setup(e){const s=p(30),l=p([20,50]);return(g,t)=>(T(),w("div",Ve,[n("div",Me,[n("p",Ce,"垂直滑块："+_(s.value),1),i(m(h),{value:s.value,"onUpdate:value":t[0]||(t[0]=a=>s.value=a),vertical:""},null,8,["value"])]),n("div",Te,[n("p",we,"垂直范围选择："+_(l.value),1),i(m(h),{value:l.value,"onUpdate:value":t[1]||(t[1]=a=>l.value=a),vertical:"",range:"",step:10},null,8,["value"])])]))}}),Be=`<template>
  <div style="display: flex; gap: 48px; padding: 0 16px;">
    <div style="height: 300px;">
      <p style="margin-bottom: 8px;">垂直滑块：{{ value1 }}</p>
      <Slider v-model:value="value1" vertical />
    </div>
    <div style="height: 300px;">
      <p style="margin-bottom: 8px;">垂直范围选择：{{ value2 }}</p>
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
`,Ue={class:"markdown-body"},De={__name:"slider",setup(e,{expose:s}){return s({frontmatter:{}}),(g,t)=>{const a=Z("DemoBlock");return T(),w("div",Ue,[t[0]||(t[0]=Y('<h1 id="slider-" tabindex="-1">Slider 滑动输入条</h1><p>滑动型输入器，展示当前值和可选范围。</p><h2 id="" tabindex="-1">何时使用</h2><ul><li>当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。</li><li>当用户需要自定义数值范围时。</li><li>适合于对数值不太精确的场景。</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基础用法</h3><p>基本滑动条。当 <code>range</code> 为 <code>true</code> 时，渲染为双滑块。</p>',7)),i(a,{title:"基础用法",source:m(ne)},{default:E(()=>[i(le)]),_:1},8,["source"]),t[1]||(t[1]=n("h3",{id:"-3",tabindex:"-1"},"范围选择",-1)),t[2]||(t[2]=n("p",null,[$("通过 "),n("code",null,"range"),$(" 属性开启范围选择。")],-1)),i(a,{title:"范围选择",source:m(xe)},{default:E(()=>[i(be)]),_:1},8,["source"]),t[3]||(t[3]=n("h3",{id:"-4",tabindex:"-1"},"刻度标记",-1)),t[4]||(t[4]=n("p",null,[$("使用 "),n("code",null,"marks"),$(" 属性标注分段式滑块，使用 "),n("code",null,"step={null}"),$(" 时，Slider 的可选值仅有 marks 标出来的部分。")],-1)),i(a,{title:"刻度标记",source:m(me)},{default:E(()=>[i(ve)]),_:1},8,["source"]),t[5]||(t[5]=n("h3",{id:"-tooltip",tabindex:"-1"},"自定义 Tooltip",-1)),t[6]||(t[6]=n("p",null,[$("使用 "),n("code",null,"tooltip.formatter"),$(" 自定义 Tooltip 内容，设置为 "),n("code",null,"null"),$(" 可隐藏 Tooltip。使用 "),n("code",null,"tooltip.open"),$(" 控制 Tooltip 显示状态。")],-1)),i(a,{title:"自定义 Tooltip",source:m(ke)},{default:E(()=>[i($e)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"-5",tabindex:"-1"},"垂直方向",-1)),t[8]||(t[8]=n("p",null,"垂直方向的 Slider。",-1)),i(a,{title:"垂直方向",source:m(Be)},{default:E(()=>[i(Ee)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"-6",tabindex:"-1"},"刻度点",-1)),t[10]||(t[10]=n("p",null,[$("通过 "),n("code",null,"dots"),$(" 属性显示刻度点。")],-1)),i(a,{title:"刻度点",source:m(re)},{default:E(()=>[i(ie)]),_:1},8,["source"]),t[11]||(t[11]=Y('<h2 id="api" tabindex="-1">API</h2><h3 id="slider-props" tabindex="-1">Slider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>设置当前取值。当 <code>range</code> 为 false 时，使用 number，否则用 [number, number]</td><td><code>number | [number, number]</code></td><td>-</td></tr><tr><td>defaultValue</td><td>设置初始取值</td><td><code>number | [number, number]</code></td><td><code>0</code></td></tr><tr><td>min</td><td>最小值</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>max</td><td>最大值</td><td><code>number</code></td><td><code>100</code></td></tr><tr><td>step</td><td>步长，取值必须大于 0，并且可被 (max - min) 整除。当 <code>marks</code> 不为空对象时，可以设置 <code>step</code> 为 <code>null</code>，此时 Slider 的可选值仅有 marks 标出来的部分</td><td><code>number | null</code></td><td><code>1</code></td></tr><tr><td>disabled</td><td>值为 true 时，滑块为禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>vertical</td><td>值为 true 时，Slider 为垂直方向</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>reverse</td><td>反向坐标轴</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>range</td><td>双滑块模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>marks</td><td>刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式</td><td><code>Record&lt;number, string | { label: string; style?: CSSProperties }&gt;</code></td><td>-</td></tr><tr><td>included</td><td><code>marks</code> 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>dots</td><td>是否只能拖拽到刻度上</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>keyboard</td><td>支持使用键盘操作 handle</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>tooltip</td><td>Tooltip 相关配置</td><td><code>{ open?: boolean; formatter?: (value: number) =&gt; string | null }</code></td><td>-</td></tr></tbody></table><h3 id="slider-events" tabindex="-1">Slider Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入</td><td><code>(value: number | [number, number]) =&gt; void</code></td></tr><tr><td>change</td><td>当 Slider 的值发生改变时触发</td><td><code>(value: number | [number, number]) =&gt; void</code></td></tr><tr><td>afterChange</td><td>与 mouseup 触发时机一致，把当前值作为参数传入</td><td><code>(value: number | [number, number]) =&gt; void</code></td></tr></tbody></table><h2 id="-7" tabindex="-1">键盘操作</h2><ul><li><code>←</code> / <code>↓</code>: 减小步长</li><li><code>→</code> / <code>↑</code>: 增加步长</li><li><code>Home</code>: 跳转到最小值</li><li><code>End</code>: 跳转到最大值</li></ul>',7))])}}};export{De as default};
