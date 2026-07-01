import{o as y,O as X,M as Y,E as c,P as Z,x as _,n as l,f as q,r as tt,A as x,k as h,L as u,h as n,K as F,_ as nt,H as at,Q as w,m as k,l as et}from"./index-ON6sqzpw.js";import{c as U}from"./cls-S9IiI6wd.js";import{T as K}from"./Tooltip-IZkyL-qe.js";import"./Trigger-DNeGWijK.js";function L(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!tt(a)}const m=y({name:"Rate",props:{value:Number,defaultValue:{type:Number,default:0},count:{type:Number,default:5},allowHalf:Boolean,allowClear:{type:Boolean,default:!0},disabled:Boolean,character:{type:[String,Function],default:"★"},tooltips:Array,size:String,keyboard:{type:Boolean,default:!0},autoFocus:Boolean,classNames:Object,styles:Object},emits:["update:value","change","hoverChange","focus","blur","keydown"],setup(a,{slots:o,emit:r,expose:p}){const t=X("rate"),e=Y(),f=c(),d=c(a.defaultValue??a.value??0),g=c(null),A=c(!1),O=q(()=>a.value!==void 0),N=q(()=>O.value?a.value:d.value),E=q(()=>a.size??e.value.componentSize),$=q(()=>e.value.direction==="rtl");Z(()=>a.value,s=>{s!==void 0&&(d.value=s)}),_(()=>{var s;a.autoFocus&&((s=f.value)==null||s.focus())}),p({focus:()=>{var s;return(s=f.value)==null?void 0:s.focus()},blur:()=>{var s;return(s=f.value)==null?void 0:s.blur()}});const C=s=>{if(a.disabled)return;let i=s;a.allowClear&&s===N.value&&(i=0),d.value=i,r("update:value",i),r("change",i)},B=(s,i)=>i?s+.5:s+1,H=(s,i)=>{C(B(s,i))},V=(s,i)=>{const v=B(s,i);g.value!==v&&(g.value=v,r("hoverChange",v))},I=()=>{g.value=null,r("hoverChange",void 0)},Q=q(()=>g.value??N.value),G=s=>{const i=Q.value,v=s+1,b=s+.5;return i>=v?"full":a.allowHalf&&i>=b?"half":"zero"},J=s=>{if(!a.keyboard||a.disabled)return;r("keydown",s);const{key:i}=s,v=N.value,b=a.allowHalf?.5:1,S=$.value?["ArrowLeft","ArrowUp"]:["ArrowRight","ArrowUp"],z=$.value?["ArrowRight","ArrowDown"]:["ArrowLeft","ArrowDown"];if(S.includes(i)){s.preventDefault();const R=Math.min(v+b,a.count);R!==v&&C(R)}else if(z.includes(i)){s.preventDefault();const R=Math.max(v-b,0);R!==v&&C(R)}else i==="Home"?(s.preventDefault(),v!==0&&C(0)):i==="End"&&(s.preventDefault(),v!==a.count&&C(a.count))},D=(s,i)=>{const v={index:s,value:N.value,isHalf:i};return typeof a.character=="function"?a.character(v):o.character?o.character(v):a.character},W=s=>{var S,z,R,M,j,P,T;const i=G(s),v=(S=a.tooltips)==null?void 0:S[s],b=l("li",{key:s,class:U(`${t}-star`,{[`${t}-star-full`]:i==="full",[`${t}-star-half`]:i==="half",[`${t}-star-zero`]:i==="zero"},(z=a.classNames)==null?void 0:z.star),style:(R=a.styles)==null?void 0:R.star,role:"radio","aria-checked":i!=="zero","aria-posinset":s+1,"aria-setsize":a.count},[a.allowHalf&&l("div",{class:U(`${t}-star-first`,(M=a.classNames)==null?void 0:M.starFirst),style:(j=a.styles)==null?void 0:j.starFirst,onClick:()=>!a.disabled&&H(s,!0),onMousemove:()=>!a.disabled&&V(s,!0)},[D(s,!0)]),l("div",{class:U(`${t}-star-second`,(P=a.classNames)==null?void 0:P.starSecond),style:(T=a.styles)==null?void 0:T.starSecond,onClick:()=>!a.disabled&&H(s,!1),onMousemove:()=>!a.disabled&&V(s,!1)},[D(s,!1)])]);return v?typeof v=="string"?l(K,{title:v},L(b)?b:{default:()=>[b]}):l(K,v,L(b)?b:{default:()=>[b]}):b};return()=>{var i,v;const s=Array.from({length:a.count},(b,S)=>S);return l("ul",{ref:f,class:U(t,{[`${t}-disabled`]:a.disabled,[`${t}-small`]:E.value==="small",[`${t}-large`]:E.value==="large",[`${t}-rtl`]:$.value},(i=a.classNames)==null?void 0:i.root),style:(v=a.styles)==null?void 0:v.root,onMouseleave:I,onFocus:()=>{A.value=!0,r("focus")},onBlur:()=>{A.value=!1,r("blur")},onKeydown:J,tabindex:a.disabled?-1:0,role:"radiogroup",dir:$.value?"rtl":void 0,"aria-disabled":a.disabled||void 0},[s.map(W)])}}}),st={style:{display:"flex","flex-direction":"column",gap:"16px"}},lt=y({__name:"RateBasic",setup(a){const o=c(3),r=c(2.5);return(p,t)=>(x(),h("div",st,[l(u(m),{value:o.value,"onUpdate:value":t[0]||(t[0]=e=>o.value=e)},null,8,["value"]),l(u(m),{value:r.value,"onUpdate:value":t[1]||(t[1]=e=>r.value=e),disabled:""},null,8,["value"]),n("p",null,"评分："+F(o.value),1)]))}}),ot=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Rate v-model:value="value" />
    <Rate v-model:value="value2" disabled />
    <p>评分：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value = ref(3)
const value2 = ref(2.5)
<\/script>
`,rt={style:{display:"flex","flex-direction":"column",gap:"16px"}},dt=y({__name:"RateCharacterFunction",setup(a){const o=c(3),r=c(2),p=({index:f})=>f+1,t=["😢","😟","😐","😊","😍"],e=({index:f})=>t[f];return(f,d)=>(x(),h("div",rt,[n("div",null,[d[2]||(d[2]=n("p",{style:{"margin-bottom":"4px"}},"使用数字索引：",-1)),l(u(m),{value:o.value,"onUpdate:value":d[0]||(d[0]=g=>o.value=g),character:p},null,8,["value"])]),n("div",null,[d[3]||(d[3]=n("p",{style:{"margin-bottom":"4px"}},"根据索引显示不同表情：",-1)),l(u(m),{value:r.value,"onUpdate:value":d[1]||(d[1]=g=>r.value=g),character:e},null,8,["value"])])]))}}),ut=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 4px">使用数字索引：</p>
      <Rate v-model:value="value1" :character="renderNumber" />
    </div>
    <div>
      <p style="margin-bottom: 4px">根据索引显示不同表情：</p>
      <Rate v-model:value="value2" :character="renderEmoji" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'
import type { RateCharacterRenderContext } from '@hmfw/ant-design'

const value1 = ref(3)
const value2 = ref(2)

const renderNumber = ({ index }: RateCharacterRenderContext) => index + 1

const emojis = ['😢', '😟', '😐', '😊', '😍']
const renderEmoji = ({ index }: RateCharacterRenderContext) => emojis[index]
<\/script>
`,pt={style:{display:"flex","flex-direction":"column",gap:"24px"}},it=y({__name:"RateClassNames",setup(a){const o=c(3),r=c(2.5),p=c(4),t=c(3),e=c(4);return(f,d)=>(x(),h("div",pt,[n("div",null,[d[5]||(d[5]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义星星颜色（渐变效果）：",-1)),l(u(m),{value:o.value,"onUpdate:value":d[0]||(d[0]=g=>o.value=g),"class-names":{star:"gradient-star"}},null,8,["value"])]),n("div",null,[d[6]||(d[6]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"半星前后部分不同颜色：",-1)),l(u(m),{value:r.value,"onUpdate:value":d[1]||(d[1]=g=>r.value=g),"allow-half":"","class-names":{starFirst:"star-first-custom",starSecond:"star-second-custom"}},null,8,["value"])]),n("div",null,[d[7]||(d[7]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"容器背景 + 星星放大效果：",-1)),l(u(m),{value:p.value,"onUpdate:value":d[2]||(d[2]=g=>p.value=g),"class-names":{root:"custom-root",star:"custom-star"}},null,8,["value"])]),n("div",null,[d[8]||(d[8]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式控制尺寸：",-1)),l(u(m),{value:t.value,"onUpdate:value":d[3]||(d[3]=g=>t.value=g),styles:{root:{gap:"12px"},star:{fontSize:"32px"}}},null,8,["value"])]),n("div",null,[d[9]||(d[9]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"高亮激活星星（阴影 + 缩放）：",-1)),l(u(m),{value:e.value,"onUpdate:value":d[4]||(d[4]=g=>e.value=g),"class-names":{star:"highlight-star"}},null,8,["value"])])]))}}),ct=nt(it,[["__scopeId","data-v-3902ef82"]]),vt=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义星星颜色 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义星星颜色（渐变效果）：</div>
      <Rate v-model:value="value1" :class-names="{ star: 'gradient-star' }" />
    </div>

    <!-- 场景 2：半星样式定制 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">半星前后部分不同颜色：</div>
      <Rate
        v-model:value="value2"
        allow-half
        :class-names="{
          starFirst: 'star-first-custom',
          starSecond: 'star-second-custom',
        }"
      />
    </div>

    <!-- 场景 3：容器与星星组合定制 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">容器背景 + 星星放大效果：</div>
      <Rate
        v-model:value="value3"
        :class-names="{
          root: 'custom-root',
          star: 'custom-star',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式控制尺寸：</div>
      <Rate
        v-model:value="value4"
        :styles="{
          root: { gap: '12px' },
          star: { fontSize: '32px' },
        }"
      />
    </div>

    <!-- 场景 5：组合样式 - 高亮激活星星 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">高亮激活星星（阴影 + 缩放）：</div>
      <Rate v-model:value="value5" :class-names="{ star: 'highlight-star' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value1 = ref(3)
const value2 = ref(2.5)
const value3 = ref(4)
const value4 = ref(3)
const value5 = ref(4)
<\/script>

<style scoped>
/* 场景 1：渐变星星 */
:deep(.gradient-star) {
  color: transparent;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s;
}

:deep(.gradient-star:hover) {
  transform: scale(1.15);
  filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.6));
}

/* 场景 2：半星不同颜色 */
:deep(.star-first-custom) {
  color: #ff6b6b;
}

:deep(.star-second-custom) {
  color: #ffd93d;
}

/* 场景 3：容器与星星组合 */
:deep(.custom-root) {
  padding: 12px 16px;
  background: linear-gradient(135deg, #f6f8fb 0%, #e9ecef 100%);
  border-radius: 8px;
  border: 2px solid #dee2e6;
}

:deep(.custom-star) {
  transition: all 0.3s;
}

:deep(.custom-star:hover) {
  transform: scale(1.2) rotate(15deg);
}

/* 场景 5：高亮激活星星 */
:deep(.highlight-star.hmfw-rate-star-full) {
  color: #faad14;
  filter: drop-shadow(0 0 8px rgba(250, 173, 20, 0.8));
  transform: scale(1.1);
  transition: all 0.3s;
}

:deep(.highlight-star.hmfw-rate-star-half .hmfw-rate-star-first) {
  color: #faad14;
  filter: drop-shadow(0 0 8px rgba(250, 173, 20, 0.8));
}

:deep(.highlight-star:hover) {
  transform: scale(1.2);
}
</style>
`,mt={style:{display:"flex","flex-direction":"column",gap:"16px"}},ft=y({__name:"RateClear",setup(a){const o=c(3),r=c(3);return(p,t)=>(x(),h("div",mt,[n("div",null,[t[2]||(t[2]=n("p",{style:{"margin-bottom":"4px"}},"允许清除（默认）：",-1)),l(u(m),{value:o.value,"onUpdate:value":t[0]||(t[0]=e=>o.value=e)},null,8,["value"]),t[3]||(t[3]=n("p",{style:{"margin-top":"4px",color:"#666","font-size":"12px"}},"点击已选中的星星可清除评分",-1))]),n("div",null,[t[4]||(t[4]=n("p",{style:{"margin-bottom":"4px"}},"不允许清除：",-1)),l(u(m),{value:r.value,"onUpdate:value":t[1]||(t[1]=e=>r.value=e),"allow-clear":!1},null,8,["value"]),t[5]||(t[5]=n("p",{style:{"margin-top":"4px",color:"#666","font-size":"12px"}},"点击已选中的星星不会清除评分",-1))])]))}}),gt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 4px">允许清除（默认）：</p>
      <Rate v-model:value="value1" />
      <p style="margin-top: 4px; color: #666; font-size: 12px">点击已选中的星星可清除评分</p>
    </div>
    <div>
      <p style="margin-bottom: 4px">不允许清除：</p>
      <Rate v-model:value="value2" :allow-clear="false" />
      <p style="margin-top: 4px; color: #666; font-size: 12px">点击已选中的星星不会清除评分</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value1 = ref(3)
const value2 = ref(3)
<\/script>
`,kt={style:{display:"flex","flex-direction":"column",gap:"16px"}},bt=y({__name:"RateCustom",setup(a){const o=c(3),r=c(4),p=c(2);return(t,e)=>(x(),h("div",kt,[n("div",null,[e[3]||(e[3]=n("p",{style:{"margin-bottom":"4px"}},"使用表情：",-1)),l(u(m),{value:o.value,"onUpdate:value":e[0]||(e[0]=f=>o.value=f),character:"😊"},null,8,["value"])]),n("div",null,[e[4]||(e[4]=n("p",{style:{"margin-bottom":"4px"}},"使用文字：",-1)),l(u(m),{value:r.value,"onUpdate:value":e[1]||(e[1]=f=>r.value=f),character:"好"},null,8,["value"])]),n("div",null,[e[5]||(e[5]=n("p",{style:{"margin-bottom":"4px"}},"使用字母：",-1)),l(u(m),{value:p.value,"onUpdate:value":e[2]||(e[2]=f=>p.value=f),character:"A"},null,8,["value"])])]))}}),yt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 4px">使用表情：</p>
      <Rate v-model:value="value1" character="😊" />
    </div>
    <div>
      <p style="margin-bottom: 4px">使用文字：</p>
      <Rate v-model:value="value2" character="好" />
    </div>
    <div>
      <p style="margin-bottom: 4px">使用字母：</p>
      <Rate v-model:value="value3" character="A" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value1 = ref(3)
const value2 = ref(4)
const value3 = ref(2)
<\/script>
`,xt={style:{display:"flex","flex-direction":"column",gap:"16px"}},ht=y({__name:"RateHalfStar",setup(a){const o=c(2.5),r=c(3.5);return(p,t)=>(x(),h("div",xt,[l(u(m),{value:o.value,"onUpdate:value":t[0]||(t[0]=e=>o.value=e),"allow-half":""},null,8,["value"]),l(u(m),{value:r.value,"onUpdate:value":t[1]||(t[1]=e=>r.value=e),"allow-half":"",disabled:""},null,8,["value"]),n("p",null,"评分："+F(o.value),1)]))}}),wt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Rate v-model:value="value" allow-half />
    <Rate v-model:value="value2" allow-half disabled />
    <p>评分：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value = ref(2.5)
const value2 = ref(3.5)
<\/script>
`,Rt={style:{display:"flex","flex-direction":"column",gap:"16px"}},St={style:{"margin-top":"8px"}},Ct=y({__name:"RateKeyboard",setup(a){const o=c(3),r=c(2);return(p,t)=>(x(),h("div",Rt,[n("div",null,[t[2]||(t[2]=n("p",{style:{"margin-bottom":"4px"}},"使用键盘方向键调整评分（聚焦后按 ← → 或 ↑ ↓）：",-1)),l(u(m),{value:o.value,"onUpdate:value":t[0]||(t[0]=e=>o.value=e),keyboard:!0},null,8,["value"]),n("p",St,"当前评分："+F(o.value),1)]),n("div",null,[t[3]||(t[3]=n("p",{style:{"margin-bottom":"4px"}},"禁用键盘操作：",-1)),l(u(m),{value:r.value,"onUpdate:value":t[1]||(t[1]=e=>r.value=e),keyboard:!1},null,8,["value"])])]))}}),qt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 4px">使用键盘方向键调整评分（聚焦后按 ← → 或 ↑ ↓）：</p>
      <Rate v-model:value="value" :keyboard="true" />
      <p style="margin-top: 8px">当前评分：{{ value }}</p>
    </div>
    <div>
      <p style="margin-bottom: 4px">禁用键盘操作：</p>
      <Rate v-model:value="value2" :keyboard="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value = ref(3)
const value2 = ref(2)
<\/script>
`,Nt={style:{display:"flex","flex-direction":"column",gap:"16px"}},$t=y({__name:"RateSize",setup(a){const o=c(3);return(r,p)=>(x(),h("div",Nt,[n("div",null,[p[3]||(p[3]=n("p",{style:{"margin-bottom":"4px"}},"Large:",-1)),l(u(m),{value:o.value,"onUpdate:value":p[0]||(p[0]=t=>o.value=t),size:"large"},null,8,["value"])]),n("div",null,[p[4]||(p[4]=n("p",{style:{"margin-bottom":"4px"}},"Middle (default):",-1)),l(u(m),{value:o.value,"onUpdate:value":p[1]||(p[1]=t=>o.value=t)},null,8,["value"])]),n("div",null,[p[5]||(p[5]=n("p",{style:{"margin-bottom":"4px"}},"Small:",-1)),l(u(m),{value:o.value,"onUpdate:value":p[2]||(p[2]=t=>o.value=t),size:"small"},null,8,["value"])])]))}}),zt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 4px">Large:</p>
      <Rate v-model:value="value" size="large" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Middle (default):</p>
      <Rate v-model:value="value" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Small:</p>
      <Rate v-model:value="value" size="small" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value = ref(3)
<\/script>
`,Ut={style:{"margin-top":"8px"}},Ft=y({__name:"RateTooltip",setup(a){const o=c(0),r=["极差","差","一般","好","极好"],p=t=>{console.log("悬停：",r[t-1])};return(t,e)=>(x(),h("div",null,[l(u(m),{value:o.value,"onUpdate:value":e[0]||(e[0]=f=>o.value=f),tooltips:r,onHoverChange:p},null,8,["value"]),n("p",Ut,"当前："+F(r[o.value-1]||"未评分"),1)]))}}),At=`<template>
  <div>
    <Rate v-model:value="value" :tooltips="tooltips" @hover-change="handleHoverChange" />
    <p style="margin-top: 8px">当前：{{ tooltips[value - 1] || '未评分' }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value = ref(0)
const tooltips = ['极差', '差', '一般', '好', '极好']

const handleHoverChange = (hoverValue: number) => {
  console.log('悬停：', tooltips[hoverValue - 1])
}
<\/script>
`,Et={class:"markdown-body"},Mt={__name:"rate",setup(a,{expose:o}){return o({frontmatter:{}}),(p,t)=>{const e=at("DemoBlock");return x(),h("div",Et,[t[0]||(t[0]=n("h1",{id:"rate-评分",tabindex:"-1"},"Rate 评分",-1)),t[1]||(t[1]=n("p",null,"评分组件。",-1)),t[2]||(t[2]=n("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"对评价进行展示。"),n("li",null,"对事物进行快速的评级操作。")],-1)),t[4]||(t[4]=n("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=n("p",null,"最简单的用法。",-1)),l(e,{title:"基础用法",source:u(ot)},{default:w(()=>[l(lt)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"半星",tabindex:"-1"},"半星",-1)),t[8]||(t[8]=n("p",null,[k("通过 "),n("code",null,"allow-half"),k(" 属性支持选择半星。")],-1)),l(e,{title:"半星",source:u(wt)},{default:w(()=>[l(ht)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"自定义字符",tabindex:"-1"},"自定义字符",-1)),t[10]||(t[10]=n("p",null,"可以将星星替换为其他字符，比如字母、数字、汉字等。",-1)),l(e,{title:"自定义字符",source:u(yt)},{default:w(()=>[l(bt)]),_:1},8,["source"]),t[11]||(t[11]=n("h3",{id:"提示信息",tabindex:"-1"},"提示信息",-1)),t[12]||(t[12]=n("p",null,[k("通过 "),n("code",null,"tooltips"),k(" 属性为每个星星设置提示信息。")],-1)),l(e,{title:"提示信息",source:u(At)},{default:w(()=>[l(Ft)]),_:1},8,["source"]),t[13]||(t[13]=n("h3",{id:"尺寸",tabindex:"-1"},"尺寸",-1)),t[14]||(t[14]=n("p",null,[k("通过 "),n("code",null,"size"),k(" 属性设置评分组件的尺寸，支持 "),n("code",null,"small"),k("、"),n("code",null,"middle"),k("（默认）、"),n("code",null,"large"),k(" 三种尺寸。")],-1)),l(e,{title:"尺寸",source:u(zt)},{default:w(()=>[l($t)]),_:1},8,["source"]),t[15]||(t[15]=n("h3",{id:"清除评分",tabindex:"-1"},"清除评分",-1)),t[16]||(t[16]=n("p",null,[k("通过 "),n("code",null,"allow-clear"),k(" 属性控制是否允许清除评分。")],-1)),l(e,{title:"清除评分",source:u(gt)},{default:w(()=>[l(ft)]),_:1},8,["source"]),t[17]||(t[17]=n("h3",{id:"自定义字符函数",tabindex:"-1"},"自定义字符函数",-1)),t[18]||(t[18]=n("p",null,[n("code",null,"character"),k(" 属性支持传入函数，可以根据索引动态渲染不同的字符。")],-1)),l(e,{title:"自定义字符函数",source:u(ut)},{default:w(()=>[l(dt)]),_:1},8,["source"]),t[19]||(t[19]=n("h3",{id:"键盘操作",tabindex:"-1"},"键盘操作",-1)),t[20]||(t[20]=n("p",null,[k("通过 "),n("code",null,"keyboard"),k(" 属性控制是否支持键盘操作（方向键调整评分）。")],-1)),l(e,{title:"键盘操作",source:u(qt)},{default:w(()=>[l(Ct)]),_:1},8,["source"]),t[21]||(t[21]=n("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[22]||(t[22]=n("p",null,[k("通过 "),n("code",null,"classNames"),k(" / "),n("code",null,"styles"),k(" 对各子元素做细粒度样式控制。")],-1)),l(e,{title:"语义化 className 与 style",source:u(vt)},{default:w(()=>[l(ct)]),_:1},8,["source"]),t[23]||(t[23]=et(`<h2 id="api" tabindex="-1">API</h2><h3 id="rate-props" tabindex="-1">Rate Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>当前数，受控值</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认值</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>count</td><td>star 总数</td><td><code>number</code></td><td><code>5</code></td></tr><tr><td>allowHalf</td><td>是否允许半选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>是否允许再次点击后清除</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>disabled</td><td>只读，无法进行交互</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>character</td><td>自定义字符</td><td><code>string | ((ctx: RateCharacterRenderContext) =&gt; any)</code></td><td><code>&#39;★&#39;</code></td></tr><tr><td>tooltips</td><td>自定义每项的提示信息</td><td><code>(string | TooltipProps)[]</code></td><td>-</td></tr><tr><td>size</td><td>组件尺寸</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>keyboard</td><td>是否支持键盘操作</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>autoFocus</td><td>自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>RateClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>RateStyles</code></td><td>-</td></tr></tbody></table><h3 id="rate-events" tabindex="-1">Rate Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选择时的回调</td><td><code>(value: number) =&gt; void</code></td></tr><tr><td>change</td><td>选择时的回调</td><td><code>(value: number) =&gt; void</code></td></tr><tr><td>hoverChange</td><td>鼠标经过时数值变化的回调</td><td><code>(value: number | undefined) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>keydown</td><td>键盘按下时的回调</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr></tbody></table><h3 id="rate-methods" tabindex="-1">Rate Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td>-</td></tr><tr><td>blur</td><td>失去焦点</td><td>-</td></tr></tbody></table><h3 id="ratecharacterrendercontext" tabindex="-1">RateCharacterRenderContext</h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>index</td><td>当前星星的索引（从 0 开始）</td><td><code>number</code></td></tr><tr><td>value</td><td>当前评分值</td><td><code>number</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对评分组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">RateClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根容器 ul.hmfw-rate</span>
  star<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 星星项 li.hmfw-rate-star</span>
  starFirst<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 半星前半部分 div.hmfw-rate-star-first</span>
  starSecond<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 星星后半部分 div.hmfw-rate-star-second</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">RateStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  star<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  starFirst<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  starSecond<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 基础评分 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-rate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-rate-star hmfw-rate-star-full<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.star / styles.star 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-rate-star-second<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.starSecond / styles.starSecond 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>★<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 其他星星... --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 半星模式 (allowHalf) --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-rate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-rate-star hmfw-rate-star-half<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.star / styles.star 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-rate-star-first<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.starFirst / styles.starFirst 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>★<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-rate-star-second<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.starSecond / styles.starSecond 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>★<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 其他星星... --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义星星颜色 --&gt;
  &lt;Rate v-model:value=&quot;rating&quot; :class-names=&quot;{ star: &#39;gradient-star&#39; }&quot; /&gt;

  &lt;!-- 半星不同颜色 --&gt;
  &lt;Rate
    v-model:value=&quot;rating&quot;
    allow-half
    :class-names=&quot;{
      starFirst: &#39;star-first-custom&#39;,
      starSecond: &#39;star-second-custom&#39;,
    }&quot;
  /&gt;

  &lt;!-- 容器与星星组合定制 --&gt;
  &lt;Rate
    v-model:value=&quot;rating&quot;
    :class-names=&quot;{
      root: &#39;custom-root&#39;,
      star: &#39;custom-star&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.gradient-star) {
  color: transparent;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s;
}

:deep(.gradient-star:hover) {
  transform: scale(1.15);
  filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.6));
}

:deep(.star-first-custom) {
  color: #ff6b6b;
}

:deep(.star-second-custom) {
  color: #ffd93d;
}

:deep(.custom-root) {
  padding: 12px 16px;
  background: linear-gradient(135deg, #f6f8fb 0%, #e9ecef 100%);
  border-radius: 8px;
}

:deep(.custom-star:hover) {
  transform: scale(1.2) rotate(15deg);
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制尺寸 --&gt;
  &lt;Rate
    v-model:value=&quot;rating&quot;
    :styles=&quot;{
      root: { gap: &#39;12px&#39; },
      star: { fontSize: &#39;32px&#39; },
    }&quot;
  /&gt;

  &lt;!-- 自定义颜色 --&gt;
  &lt;Rate
    v-model:value=&quot;rating&quot;
    :styles=&quot;{
      star: { color: &#39;#ff4d4f&#39; },
    }&quot;
  /&gt;

  &lt;!-- 半星样式 --&gt;
  &lt;Rate
    v-model:value=&quot;rating&quot;
    allow-half
    :styles=&quot;{
      starFirst: { color: &#39;#ff6b6b&#39; },
      starSecond: { color: &#39;#ffd93d&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>classNames.star</code> 会应用到所有星星项，包括已选中、半选、未选中状态</li><li>在 <code>allowHalf</code> 模式下，每个星星包含 <code>starFirst</code> 和 <code>starSecond</code> 两个部分</li><li><code>starFirst</code> 仅在 <code>allowHalf</code> 为 <code>true</code> 时渲染，用于实现半星效果</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-rate-disabled</code>）合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Rate 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次级填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告色（星星）</td><td><code>#faad14</code></td></tr><tr><td><code>--hmfw-control-height</code></td><td>标准控件高度</td><td><code>32px</code></td></tr><tr><td><code>--hmfw-control-height-lg</code></td><td>大号控件高度</td><td><code>40px</code></td></tr><tr><td><code>--hmfw-control-height-sm</code></td><td>小号控件高度</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-margin-xs</code></td><td>超小间距</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>缓入缓出曲线</td><td><code>cubic-bezier(0.645, 0.045, 0.355, 1)</code></td></tr></tbody></table>`,27))])}}};export{Mt as default};
