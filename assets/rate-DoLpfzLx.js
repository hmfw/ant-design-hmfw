import{m as g,L as O,J,B as v,O as q,v as G,l as o,d as $,p as Q,y,i as R,I as s,f as e,H as k,E as W,P as C,k as c,j as X}from"./index-B2-fWtt3.js";import{c as j}from"./cls-S9IiI6wd.js";import{T as A}from"./Tooltip-ClGApa_e.js";function D(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!Q(a)}const m=g({name:"Rate",props:{value:Number,defaultValue:{type:Number,default:0},count:{type:Number,default:5},allowHalf:Boolean,allowClear:{type:Boolean,default:!0},disabled:Boolean,character:{type:[String,Function],default:"★"},tooltips:Array,size:String,keyboard:{type:Boolean,default:!0},autoFocus:Boolean},emits:["update:value","change","hoverChange","focus","blur","keydown"],setup(a,{slots:d,emit:r,expose:u}){const t=O("rate"),l=J(),p=v(),x=v(a.defaultValue??a.value??0),h=v(null),U=v(!1),E=$(()=>a.value!==void 0),S=$(()=>E.value?a.value:x.value),V=$(()=>a.size??l.value.componentSize);q(()=>a.value,n=>{n!==void 0&&(x.value=n)}),G(()=>{var n;a.autoFocus&&((n=p.value)==null||n.focus())}),u({focus:()=>{var n;return(n=p.value)==null?void 0:n.focus()},blur:()=>{var n;return(n=p.value)==null?void 0:n.blur()}});const z=n=>{if(a.disabled)return;let i=n;a.allowClear&&n===S.value&&(i=0),x.value=i,r("update:value",i),r("change",i)},B=(n,i)=>i?n+.5:n+1,H=(n,i)=>{z(B(n,i))},M=(n,i)=>{const f=B(n,i);h.value!==f&&(h.value=f,r("hoverChange",f))},F=()=>{h.value=null,r("hoverChange",void 0)},T=$(()=>h.value??S.value),K=n=>{const i=T.value,f=n+1,w=n+.5;return i>=f?"full":a.allowHalf&&i>=w?"half":"zero"},L=n=>{if(!a.keyboard||a.disabled)return;r("keydown",n);const{key:i}=n,f=S.value;if(i==="ArrowRight"||i==="ArrowUp"){n.preventDefault();const w=a.allowHalf?.5:1,b=Math.min(f+w,a.count);z(b)}else if(i==="ArrowLeft"||i==="ArrowDown"){n.preventDefault();const w=a.allowHalf?.5:1,b=Math.max(f-w,0);z(b)}},P=n=>typeof a.character=="function"?a.character({index:n,value:S.value}):d.character?d.character({index:n,value:S.value}):a.character,I=n=>{var N;const i=K(n),f=(N=a.tooltips)==null?void 0:N[n],w=P(n),b=o("li",{key:n,class:j(`${t}-star`,{[`${t}-star-full`]:i==="full",[`${t}-star-half`]:i==="half",[`${t}-star-zero`]:i==="zero"}),role:"radio","aria-checked":i!=="zero","aria-posinset":n+1,"aria-setsize":a.count},[a.allowHalf&&o("div",{class:`${t}-star-first`,onClick:()=>!a.disabled&&H(n,!0),onMousemove:()=>!a.disabled&&M(n,!0)},[w]),o("div",{class:`${t}-star-second`,onClick:()=>!a.disabled&&H(n,!1),onMousemove:()=>!a.disabled&&M(n,!1)},[w])]);return f?typeof f=="string"?o(A,{title:f},D(b)?b:{default:()=>[b]}):o(A,f,D(b)?b:{default:()=>[b]}):b};return()=>{const n=Array.from({length:a.count},(i,f)=>f);return o("ul",{ref:p,class:j(t,{[`${t}-disabled`]:a.disabled,[`${t}-small`]:V.value==="small",[`${t}-large`]:V.value==="large"}),onMouseleave:F,onFocus:()=>{U.value=!0,r("focus")},onBlur:()=>{U.value=!1,r("blur")},onKeydown:L,tabindex:a.disabled?-1:0,role:"radiogroup"},[n.map(I)])}}}),Y={style:{display:"flex","flex-direction":"column",gap:"16px"}},Z=g({__name:"RateBasic",setup(a){const d=v(3),r=v(2.5);return(u,t)=>(y(),R("div",Y,[o(s(m),{value:d.value,"onUpdate:value":t[0]||(t[0]=l=>d.value=l)},null,8,["value"]),o(s(m),{value:r.value,"onUpdate:value":t[1]||(t[1]=l=>r.value=l),disabled:""},null,8,["value"]),e("p",null,"评分："+k(d.value),1)]))}}),_=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Rate v-model:value="value" />
    <Rate v-model:value="value2" disabled />
    <p>评分：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value = ref(3)
const value2 = ref(2.5)
<\/script>
`,tt={style:{display:"flex","flex-direction":"column",gap:"16px"}},et=g({__name:"RateCharacterFunction",setup(a){const d=v(3),r=v(2),u=({index:p})=>p+1,t=["😢","😟","😐","😊","😍"],l=({index:p})=>t[p];return(p,x)=>(y(),R("div",tt,[e("div",null,[x[2]||(x[2]=e("p",{style:{"margin-bottom":"4px"}},"使用数字索引：",-1)),o(s(m),{value:d.value,"onUpdate:value":x[0]||(x[0]=h=>d.value=h),character:u},null,8,["value"])]),e("div",null,[x[3]||(x[3]=e("p",{style:{"margin-bottom":"4px"}},"根据索引显示不同表情：",-1)),o(s(m),{value:r.value,"onUpdate:value":x[1]||(x[1]=h=>r.value=h),character:l},null,8,["value"])])]))}}),lt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin-bottom: 4px;">使用数字索引：</p>
      <Rate v-model:value="value1" :character="renderNumber" />
    </div>
    <div>
      <p style="margin-bottom: 4px;">根据索引显示不同表情：</p>
      <Rate v-model:value="value2" :character="renderEmoji" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'
import type { RateCharacterRenderContext } from 'ant-design-hmfw'

const value1 = ref(3)
const value2 = ref(2)

const renderNumber = ({ index }: RateCharacterRenderContext) => index + 1

const emojis = ['😢', '😟', '😐', '😊', '😍']
const renderEmoji = ({ index }: RateCharacterRenderContext) => emojis[index]
<\/script>
`,nt={style:{display:"flex","flex-direction":"column",gap:"16px"}},at=g({__name:"RateClear",setup(a){const d=v(3),r=v(3);return(u,t)=>(y(),R("div",nt,[e("div",null,[t[2]||(t[2]=e("p",{style:{"margin-bottom":"4px"}},"允许清除（默认）：",-1)),o(s(m),{value:d.value,"onUpdate:value":t[0]||(t[0]=l=>d.value=l)},null,8,["value"]),t[3]||(t[3]=e("p",{style:{"margin-top":"4px",color:"#666","font-size":"12px"}},"点击已选中的星星可清除评分",-1))]),e("div",null,[t[4]||(t[4]=e("p",{style:{"margin-bottom":"4px"}},"不允许清除：",-1)),o(s(m),{value:r.value,"onUpdate:value":t[1]||(t[1]=l=>r.value=l),"allow-clear":!1},null,8,["value"]),t[5]||(t[5]=e("p",{style:{"margin-top":"4px",color:"#666","font-size":"12px"}},"点击已选中的星星不会清除评分",-1))])]))}}),ot=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin-bottom: 4px;">允许清除（默认）：</p>
      <Rate v-model:value="value1" />
      <p style="margin-top: 4px; color: #666; font-size: 12px;">点击已选中的星星可清除评分</p>
    </div>
    <div>
      <p style="margin-bottom: 4px;">不允许清除：</p>
      <Rate v-model:value="value2" :allow-clear="false" />
      <p style="margin-top: 4px; color: #666; font-size: 12px;">点击已选中的星星不会清除评分</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value1 = ref(3)
const value2 = ref(3)
<\/script>
`,dt={style:{display:"flex","flex-direction":"column",gap:"16px"}},rt=g({__name:"RateCustom",setup(a){const d=v(3),r=v(4),u=v(2);return(t,l)=>(y(),R("div",dt,[e("div",null,[l[3]||(l[3]=e("p",{style:{"margin-bottom":"4px"}},"使用表情：",-1)),o(s(m),{value:d.value,"onUpdate:value":l[0]||(l[0]=p=>d.value=p),character:"😊"},null,8,["value"])]),e("div",null,[l[4]||(l[4]=e("p",{style:{"margin-bottom":"4px"}},"使用文字：",-1)),o(s(m),{value:r.value,"onUpdate:value":l[1]||(l[1]=p=>r.value=p),character:"好"},null,8,["value"])]),e("div",null,[l[5]||(l[5]=e("p",{style:{"margin-bottom":"4px"}},"使用字母：",-1)),o(s(m),{value:u.value,"onUpdate:value":l[2]||(l[2]=p=>u.value=p),character:"A"},null,8,["value"])])]))}}),ut=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin-bottom: 4px;">使用表情：</p>
      <Rate v-model:value="value1" character="😊" />
    </div>
    <div>
      <p style="margin-bottom: 4px;">使用文字：</p>
      <Rate v-model:value="value2" character="好" />
    </div>
    <div>
      <p style="margin-bottom: 4px;">使用字母：</p>
      <Rate v-model:value="value3" character="A" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value1 = ref(3)
const value2 = ref(4)
const value3 = ref(2)
<\/script>
`,st={style:{display:"flex","flex-direction":"column",gap:"16px"}},it=g({__name:"RateHalfStar",setup(a){const d=v(2.5),r=v(3.5);return(u,t)=>(y(),R("div",st,[o(s(m),{value:d.value,"onUpdate:value":t[0]||(t[0]=l=>d.value=l),"allow-half":""},null,8,["value"]),o(s(m),{value:r.value,"onUpdate:value":t[1]||(t[1]=l=>r.value=l),"allow-half":"",disabled:""},null,8,["value"]),e("p",null,"评分："+k(d.value),1)]))}}),vt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Rate v-model:value="value" allow-half />
    <Rate v-model:value="value2" allow-half disabled />
    <p>评分：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value = ref(2.5)
const value2 = ref(3.5)
<\/script>
`,pt={style:{display:"flex","flex-direction":"column",gap:"16px"}},mt={style:{"margin-top":"8px"}},ft=g({__name:"RateKeyboard",setup(a){const d=v(3),r=v(2);return(u,t)=>(y(),R("div",pt,[e("div",null,[t[2]||(t[2]=e("p",{style:{"margin-bottom":"4px"}},"使用键盘方向键调整评分（聚焦后按 ← → 或 ↑ ↓）：",-1)),o(s(m),{value:d.value,"onUpdate:value":t[0]||(t[0]=l=>d.value=l),keyboard:!0},null,8,["value"]),e("p",mt,"当前评分："+k(d.value),1)]),e("div",null,[t[3]||(t[3]=e("p",{style:{"margin-bottom":"4px"}},"禁用键盘操作：",-1)),o(s(m),{value:r.value,"onUpdate:value":t[1]||(t[1]=l=>r.value=l),keyboard:!1},null,8,["value"])])]))}}),ct=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin-bottom: 4px;">使用键盘方向键调整评分（聚焦后按 ← → 或 ↑ ↓）：</p>
      <Rate v-model:value="value" :keyboard="true" />
      <p style="margin-top: 8px;">当前评分：{{ value }}</p>
    </div>
    <div>
      <p style="margin-bottom: 4px;">禁用键盘操作：</p>
      <Rate v-model:value="value2" :keyboard="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value = ref(3)
const value2 = ref(2)
<\/script>
`,xt={style:{display:"flex","flex-direction":"column",gap:"16px"}},bt=g({__name:"RateSize",setup(a){const d=v(3);return(r,u)=>(y(),R("div",xt,[e("div",null,[u[3]||(u[3]=e("p",{style:{"margin-bottom":"4px"}},"Large:",-1)),o(s(m),{value:d.value,"onUpdate:value":u[0]||(u[0]=t=>d.value=t),size:"large"},null,8,["value"])]),e("div",null,[u[4]||(u[4]=e("p",{style:{"margin-bottom":"4px"}},"Middle (default):",-1)),o(s(m),{value:d.value,"onUpdate:value":u[1]||(u[1]=t=>d.value=t)},null,8,["value"])]),e("div",null,[u[5]||(u[5]=e("p",{style:{"margin-bottom":"4px"}},"Small:",-1)),o(s(m),{value:d.value,"onUpdate:value":u[2]||(u[2]=t=>d.value=t),size:"small"},null,8,["value"])])]))}}),gt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin-bottom: 4px;">Large:</p>
      <Rate v-model:value="value" size="large" />
    </div>
    <div>
      <p style="margin-bottom: 4px;">Middle (default):</p>
      <Rate v-model:value="value" />
    </div>
    <div>
      <p style="margin-bottom: 4px;">Small:</p>
      <Rate v-model:value="value" size="small" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value = ref(3)
<\/script>
`,yt={style:{"margin-top":"8px"}},Rt=g({__name:"RateTooltip",setup(a){const d=v(0),r=["极差","差","一般","好","极好"],u=t=>{console.log("悬停：",r[t-1])};return(t,l)=>(y(),R("div",null,[o(s(m),{value:d.value,"onUpdate:value":l[0]||(l[0]=p=>d.value=p),tooltips:r,onHoverChange:u},null,8,["value"]),e("p",yt," 当前："+k(r[d.value-1]||"未评分"),1)]))}}),ht=`<template>
  <div>
    <Rate
      v-model:value="value"
      :tooltips="tooltips"
      @hover-change="handleHoverChange"
    />
    <p style="margin-top: 8px;">
      当前：{{ tooltips[value - 1] || '未评分' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value = ref(0)
const tooltips = ['极差', '差', '一般', '好', '极好']

const handleHoverChange = (hoverValue: number) => {
  console.log('悬停：', tooltips[hoverValue - 1])
}
<\/script>
`,wt={class:"markdown-body"},kt={__name:"rate",setup(a,{expose:d}){return d({frontmatter:{}}),(u,t)=>{const l=W("DemoBlock");return y(),R("div",wt,[t[0]||(t[0]=e("h1",{id:"rate-",tabindex:"-1"},"Rate 评分",-1)),t[1]||(t[1]=e("p",null,"评分组件。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"对评价进行展示。"),e("li",null,"对事物进行快速的评级操作。")],-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"最简单的用法。",-1)),o(l,{title:"基础用法",source:s(_)},{default:C(()=>[o(Z)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"半星",-1)),t[8]||(t[8]=e("p",null,[c("通过 "),e("code",null,"allow-half"),c(" 属性支持选择半星。")],-1)),o(l,{title:"半星",source:s(vt)},{default:C(()=>[o(it)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-4",tabindex:"-1"},"自定义字符",-1)),t[10]||(t[10]=e("p",null,"可以将星星替换为其他字符，比如字母、数字、汉字等。",-1)),o(l,{title:"自定义字符",source:s(ut)},{default:C(()=>[o(rt)]),_:1},8,["source"]),t[11]||(t[11]=e("h3",{id:"-5",tabindex:"-1"},"提示信息",-1)),t[12]||(t[12]=e("p",null,[c("通过 "),e("code",null,"tooltips"),c(" 属性为每个星星设置提示信息。")],-1)),o(l,{title:"提示信息",source:s(ht)},{default:C(()=>[o(Rt)]),_:1},8,["source"]),t[13]||(t[13]=e("h3",{id:"-6",tabindex:"-1"},"尺寸",-1)),t[14]||(t[14]=e("p",null,[c("通过 "),e("code",null,"size"),c(" 属性设置评分组件的尺寸，支持 "),e("code",null,"small"),c("、"),e("code",null,"middle"),c("（默认）、"),e("code",null,"large"),c(" 三种尺寸。")],-1)),o(l,{title:"尺寸",source:s(gt)},{default:C(()=>[o(bt)]),_:1},8,["source"]),t[15]||(t[15]=e("h3",{id:"-7",tabindex:"-1"},"清除评分",-1)),t[16]||(t[16]=e("p",null,[c("通过 "),e("code",null,"allow-clear"),c(" 属性控制是否允许清除评分。")],-1)),o(l,{title:"清除评分",source:s(ot)},{default:C(()=>[o(at)]),_:1},8,["source"]),t[17]||(t[17]=e("h3",{id:"-8",tabindex:"-1"},"自定义字符函数",-1)),t[18]||(t[18]=e("p",null,[e("code",null,"character"),c(" 属性支持传入函数，可以根据索引动态渲染不同的字符。")],-1)),o(l,{title:"自定义字符函数",source:s(lt)},{default:C(()=>[o(et)]),_:1},8,["source"]),t[19]||(t[19]=e("h3",{id:"-9",tabindex:"-1"},"键盘操作",-1)),t[20]||(t[20]=e("p",null,[c("通过 "),e("code",null,"keyboard"),c(" 属性控制是否支持键盘操作（方向键调整评分）。")],-1)),o(l,{title:"键盘操作",source:s(ct)},{default:C(()=>[o(ft)]),_:1},8,["source"]),t[21]||(t[21]=X('<h2 id="api" tabindex="-1">API</h2><h3 id="rate-props" tabindex="-1">Rate Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>当前数，受控值</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认值</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>count</td><td>star 总数</td><td><code>number</code></td><td><code>5</code></td></tr><tr><td>allowHalf</td><td>是否允许半选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>是否允许再次点击后清除</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>disabled</td><td>只读，无法进行交互</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>character</td><td>自定义字符</td><td><code>string | ((ctx: RateCharacterRenderContext) =&gt; any)</code></td><td><code>&#39;★&#39;</code></td></tr><tr><td>tooltips</td><td>自定义每项的提示信息</td><td><code>(string | TooltipProps)[]</code></td><td>-</td></tr><tr><td>size</td><td>组件尺寸</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>keyboard</td><td>是否支持键盘操作</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>autoFocus</td><td>自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="rate-events" tabindex="-1">Rate Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选择时的回调</td><td><code>(value: number) =&gt; void</code></td></tr><tr><td>change</td><td>选择时的回调</td><td><code>(value: number) =&gt; void</code></td></tr><tr><td>hoverChange</td><td>鼠标经过时数值变化的回调</td><td><code>(value: number | undefined) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>keydown</td><td>键盘按下时的回调</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr></tbody></table><h3 id="rate-methods" tabindex="-1">Rate Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td>-</td></tr><tr><td>blur</td><td>失去焦点</td><td>-</td></tr></tbody></table><h3 id="ratecharacterrendercontext" tabindex="-1">RateCharacterRenderContext</h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>index</td><td>当前星星的索引（从 0 开始）</td><td><code>number</code></td></tr><tr><td>value</td><td>当前评分值</td><td><code>number</code></td></tr></tbody></table>',9))])}}};export{kt as default};
