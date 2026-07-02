import{d as b,u as X,x as Y,r as i,m as Z,k as _,c as o,a as C,B as nn,o as x,b as h,e as c,f as t,A as F,_ as tn,h as an,w,g,i as sn}from"./index-DpCWj_RH.js";import{c as U}from"./cls-S9IiI6wd.js";import{T as K}from"./Tooltip-CGkZ9PxR.js";import"./Trigger-BvJ5OT70.js";function L(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!nn(a)}const m=b({name:"Rate",props:{value:Number,defaultValue:{type:Number,default:0},count:{type:Number,default:5},allowHalf:Boolean,allowClear:{type:Boolean,default:!0},disabled:Boolean,character:{type:[String,Function],default:"★"},tooltips:Array,size:String,keyboard:{type:Boolean,default:!0},autoFocus:Boolean,classNames:Object,styles:Object},emits:["update:value","change","hoverChange","focus","blur","keydown"],setup(a,{slots:l,emit:p,expose:r}){const n=X("rate"),s=Y(),k=i(),u=i(a.defaultValue??a.value??0),f=i(null),A=i(!1),O=C(()=>a.value!==void 0),N=C(()=>O.value?a.value:u.value),B=C(()=>a.size??s.value.componentSize),$=C(()=>s.value.direction==="rtl");Z(()=>a.value,e=>{e!==void 0&&(u.value=e)}),_(()=>{var e;a.autoFocus&&((e=k.value)==null||e.focus())}),r({focus:()=>{var e;return(e=k.value)==null?void 0:e.focus()},blur:()=>{var e;return(e=k.value)==null?void 0:e.blur()}});const q=e=>{if(a.disabled)return;let d=e;a.allowClear&&e===N.value&&(d=0),u.value=d,p("update:value",d),p("change",d)},E=(e,d)=>d?e+.5:e+1,V=(e,d)=>{q(E(e,d))},H=(e,d)=>{const v=E(e,d);f.value!==v&&(f.value=v,p("hoverChange",v))},I=()=>{f.value=null,p("hoverChange",void 0)},G=C(()=>f.value??N.value),J=e=>{const d=G.value,v=e+1,y=e+.5;return d>=v?"full":a.allowHalf&&d>=y?"half":"zero"},Q=e=>{if(!a.keyboard||a.disabled)return;p("keydown",e);const{key:d}=e,v=N.value,y=a.allowHalf?.5:1,S=$.value?["ArrowLeft","ArrowUp"]:["ArrowRight","ArrowUp"],z=$.value?["ArrowRight","ArrowDown"]:["ArrowLeft","ArrowDown"];if(S.includes(d)){e.preventDefault();const R=Math.min(v+y,a.count);R!==v&&q(R)}else if(z.includes(d)){e.preventDefault();const R=Math.max(v-y,0);R!==v&&q(R)}else d==="Home"?(e.preventDefault(),v!==0&&q(0)):d==="End"&&(e.preventDefault(),v!==a.count&&q(a.count))},D=(e,d)=>{const v={index:e,value:N.value,isHalf:d};return typeof a.character=="function"?a.character(v):l.character?l.character(v):a.character},W=e=>{var S,z,R,M,j,P,T;const d=J(e),v=(S=a.tooltips)==null?void 0:S[e],y=o("li",{key:e,class:U(`${n}-star`,{[`${n}-star-full`]:d==="full",[`${n}-star-half`]:d==="half",[`${n}-star-zero`]:d==="zero"},(z=a.classNames)==null?void 0:z.star),style:(R=a.styles)==null?void 0:R.star,role:"radio","aria-checked":d!=="zero","aria-posinset":e+1,"aria-setsize":a.count},[a.allowHalf&&o("div",{class:U(`${n}-star-first`,(M=a.classNames)==null?void 0:M.starFirst),style:(j=a.styles)==null?void 0:j.starFirst,onClick:()=>!a.disabled&&V(e,!0),onMousemove:()=>!a.disabled&&H(e,!0)},[D(e,!0)]),o("div",{class:U(`${n}-star-second`,(P=a.classNames)==null?void 0:P.starSecond),style:(T=a.styles)==null?void 0:T.starSecond,onClick:()=>!a.disabled&&V(e,!1),onMousemove:()=>!a.disabled&&H(e,!1)},[D(e,!1)])]);return v?typeof v=="string"?o(K,{title:v},L(y)?y:{default:()=>[y]}):o(K,v,L(y)?y:{default:()=>[y]}):y};return()=>{var d,v;const e=Array.from({length:a.count},(y,S)=>S);return o("ul",{ref:k,class:U(n,{[`${n}-disabled`]:a.disabled,[`${n}-small`]:B.value==="small",[`${n}-large`]:B.value==="large",[`${n}-rtl`]:$.value},(d=a.classNames)==null?void 0:d.root),style:(v=a.styles)==null?void 0:v.root,onMouseleave:I,onFocus:()=>{A.value=!0,p("focus")},onBlur:()=>{A.value=!1,p("blur")},onKeydown:Q,tabindex:a.disabled?-1:0,role:"radiogroup",dir:$.value?"rtl":void 0,"aria-disabled":a.disabled||void 0},[e.map(W)])}}}),en={style:{display:"flex","flex-direction":"column",gap:"16px"}},on=b({__name:"RateBasic",setup(a){const l=i(3),p=i(2.5);return(r,n)=>(x(),h("div",en,[o(c(m),{value:l.value,"onUpdate:value":n[0]||(n[0]=s=>l.value=s)},null,8,["value"]),o(c(m),{value:p.value,"onUpdate:value":n[1]||(n[1]=s=>p.value=s),disabled:""},null,8,["value"]),t("p",null,"评分："+F(l.value),1)]))}}),ln=`<template>
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
`,pn={style:{display:"flex","flex-direction":"column",gap:"16px"}},un=b({__name:"RateCharacterFunction",setup(a){const l=i(3),p=i(2),r=({index:k})=>k+1,n=["😢","😟","😐","😊","😍"],s=({index:k})=>n[k];return(k,u)=>(x(),h("div",pn,[t("div",null,[u[2]||(u[2]=t("p",{style:{"margin-bottom":"4px"}},"使用数字索引：",-1)),o(c(m),{value:l.value,"onUpdate:value":u[0]||(u[0]=f=>l.value=f),character:r},null,8,["value"])]),t("div",null,[u[3]||(u[3]=t("p",{style:{"margin-bottom":"4px"}},"根据索引显示不同表情：",-1)),o(c(m),{value:p.value,"onUpdate:value":u[1]||(u[1]=f=>p.value=f),character:s},null,8,["value"])])]))}}),cn=`<template>
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
`,rn={style:{display:"flex","flex-direction":"column",gap:"24px"}},dn=b({__name:"RateClassNames",setup(a){const l=i(3),p=i(2.5),r=i(4),n=i(3),s=i(4);return(k,u)=>(x(),h("div",rn,[t("div",null,[u[5]||(u[5]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义星星颜色（渐变效果）：",-1)),o(c(m),{value:l.value,"onUpdate:value":u[0]||(u[0]=f=>l.value=f),"class-names":{star:"gradient-star"}},null,8,["value"])]),t("div",null,[u[6]||(u[6]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"半星前后部分不同颜色：",-1)),o(c(m),{value:p.value,"onUpdate:value":u[1]||(u[1]=f=>p.value=f),"allow-half":"","class-names":{starFirst:"star-first-custom",starSecond:"star-second-custom"}},null,8,["value"])]),t("div",null,[u[7]||(u[7]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"容器背景 + 星星放大效果：",-1)),o(c(m),{value:r.value,"onUpdate:value":u[2]||(u[2]=f=>r.value=f),"class-names":{root:"custom-root",star:"custom-star"}},null,8,["value"])]),t("div",null,[u[8]||(u[8]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式控制尺寸：",-1)),o(c(m),{value:n.value,"onUpdate:value":u[3]||(u[3]=f=>n.value=f),styles:{root:{gap:"12px"},star:{fontSize:"32px"}}},null,8,["value"])]),t("div",null,[u[9]||(u[9]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"高亮激活星星（阴影 + 缩放）：",-1)),o(c(m),{value:s.value,"onUpdate:value":u[4]||(u[4]=f=>s.value=f),"class-names":{star:"highlight-star"}},null,8,["value"])])]))}}),vn=tn(dn,[["__scopeId","data-v-3902ef82"]]),mn=`<template>
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
`,kn={style:{display:"flex","flex-direction":"column",gap:"16px"}},fn=b({__name:"RateClear",setup(a){const l=i(3),p=i(3);return(r,n)=>(x(),h("div",kn,[t("div",null,[n[2]||(n[2]=t("p",{style:{"margin-bottom":"4px"}},"允许清除（默认）：",-1)),o(c(m),{value:l.value,"onUpdate:value":n[0]||(n[0]=s=>l.value=s)},null,8,["value"]),n[3]||(n[3]=t("p",{style:{"margin-top":"4px",color:"#666","font-size":"12px"}},"点击已选中的星星可清除评分",-1))]),t("div",null,[n[4]||(n[4]=t("p",{style:{"margin-bottom":"4px"}},"不允许清除：",-1)),o(c(m),{value:p.value,"onUpdate:value":n[1]||(n[1]=s=>p.value=s),"allow-clear":!1},null,8,["value"]),n[5]||(n[5]=t("p",{style:{"margin-top":"4px",color:"#666","font-size":"12px"}},"点击已选中的星星不会清除评分",-1))])]))}}),gn=`<template>
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
`,yn={style:{display:"flex","flex-direction":"column",gap:"16px"}},bn=b({__name:"RateCustom",setup(a){const l=i(3),p=i(4),r=i(2);return(n,s)=>(x(),h("div",yn,[t("div",null,[s[3]||(s[3]=t("p",{style:{"margin-bottom":"4px"}},"使用表情：",-1)),o(c(m),{value:l.value,"onUpdate:value":s[0]||(s[0]=k=>l.value=k),character:"😊"},null,8,["value"])]),t("div",null,[s[4]||(s[4]=t("p",{style:{"margin-bottom":"4px"}},"使用文字：",-1)),o(c(m),{value:p.value,"onUpdate:value":s[1]||(s[1]=k=>p.value=k),character:"好"},null,8,["value"])]),t("div",null,[s[5]||(s[5]=t("p",{style:{"margin-bottom":"4px"}},"使用字母：",-1)),o(c(m),{value:r.value,"onUpdate:value":s[2]||(s[2]=k=>r.value=k),character:"A"},null,8,["value"])])]))}}),xn=`<template>
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
`,hn={style:{display:"flex","flex-direction":"column",gap:"16px"}},wn=b({__name:"RateHalfStar",setup(a){const l=i(2.5),p=i(3.5);return(r,n)=>(x(),h("div",hn,[o(c(m),{value:l.value,"onUpdate:value":n[0]||(n[0]=s=>l.value=s),"allow-half":""},null,8,["value"]),o(c(m),{value:p.value,"onUpdate:value":n[1]||(n[1]=s=>p.value=s),"allow-half":"",disabled:""},null,8,["value"]),t("p",null,"评分："+F(l.value),1)]))}}),Rn=`<template>
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
`,Sn={style:{display:"flex","flex-direction":"column",gap:"16px"}},qn={style:{"margin-top":"8px"}},Cn=b({__name:"RateKeyboard",setup(a){const l=i(3),p=i(2);return(r,n)=>(x(),h("div",Sn,[t("div",null,[n[2]||(n[2]=t("p",{style:{"margin-bottom":"4px"}},"使用键盘方向键调整评分（聚焦后按 ← → 或 ↑ ↓）：",-1)),o(c(m),{value:l.value,"onUpdate:value":n[0]||(n[0]=s=>l.value=s),keyboard:!0},null,8,["value"]),t("p",qn,"当前评分："+F(l.value),1)]),t("div",null,[n[3]||(n[3]=t("p",{style:{"margin-bottom":"4px"}},"禁用键盘操作：",-1)),o(c(m),{value:p.value,"onUpdate:value":n[1]||(n[1]=s=>p.value=s),keyboard:!1},null,8,["value"])])]))}}),Nn=`<template>
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
`,$n={style:{display:"flex","flex-direction":"column",gap:"16px"}},zn=b({__name:"RateSize",setup(a){const l=i(3);return(p,r)=>(x(),h("div",$n,[t("div",null,[r[3]||(r[3]=t("p",{style:{"margin-bottom":"4px"}},"Large:",-1)),o(c(m),{value:l.value,"onUpdate:value":r[0]||(r[0]=n=>l.value=n),size:"large"},null,8,["value"])]),t("div",null,[r[4]||(r[4]=t("p",{style:{"margin-bottom":"4px"}},"Middle (default):",-1)),o(c(m),{value:l.value,"onUpdate:value":r[1]||(r[1]=n=>l.value=n)},null,8,["value"])]),t("div",null,[r[5]||(r[5]=t("p",{style:{"margin-bottom":"4px"}},"Small:",-1)),o(c(m),{value:l.value,"onUpdate:value":r[2]||(r[2]=n=>l.value=n),size:"small"},null,8,["value"])])]))}}),Un=`<template>
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
`,Fn={style:{"margin-top":"8px"}},An=b({__name:"RateTooltip",setup(a){const l=i(0),p=["极差","差","一般","好","极好"],r=n=>{console.log("悬停：",p[n-1])};return(n,s)=>(x(),h("div",null,[o(c(m),{value:l.value,"onUpdate:value":s[0]||(s[0]=k=>l.value=k),tooltips:p,onHoverChange:r},null,8,["value"]),t("p",Fn,"当前："+F(p[l.value-1]||"未评分"),1)]))}}),Bn=`<template>
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
`,En={class:"markdown-body"},jn={__name:"rate",setup(a,{expose:l}){return l({frontmatter:{}}),(r,n)=>{const s=an("DemoBlock");return x(),h("div",En,[n[0]||(n[0]=t("h1",{id:"rate-评分",tabindex:"-1"},"Rate 评分",-1)),n[1]||(n[1]=t("p",null,"评分组件。",-1)),n[2]||(n[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=t("ul",null,[t("li",null,"对评价进行展示。"),t("li",null,"对事物进行快速的评级操作。")],-1)),n[4]||(n[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=t("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=t("p",null,"最简单的用法。",-1)),o(s,{title:"基础用法",source:c(ln)},{default:w(()=>[o(on)]),_:1},8,["source"]),n[7]||(n[7]=t("h3",{id:"半星",tabindex:"-1"},"半星",-1)),n[8]||(n[8]=t("p",null,[g("通过 "),t("code",null,"allow-half"),g(" 属性支持选择半星。")],-1)),o(s,{title:"半星",source:c(Rn)},{default:w(()=>[o(wn)]),_:1},8,["source"]),n[9]||(n[9]=t("h3",{id:"自定义字符",tabindex:"-1"},"自定义字符",-1)),n[10]||(n[10]=t("p",null,"可以将星星替换为其他字符，比如字母、数字、汉字等。",-1)),o(s,{title:"自定义字符",source:c(xn)},{default:w(()=>[o(bn)]),_:1},8,["source"]),n[11]||(n[11]=t("h3",{id:"提示信息",tabindex:"-1"},"提示信息",-1)),n[12]||(n[12]=t("p",null,[g("通过 "),t("code",null,"tooltips"),g(" 属性为每个星星设置提示信息。")],-1)),o(s,{title:"提示信息",source:c(Bn)},{default:w(()=>[o(An)]),_:1},8,["source"]),n[13]||(n[13]=t("h3",{id:"尺寸",tabindex:"-1"},"尺寸",-1)),n[14]||(n[14]=t("p",null,[g("通过 "),t("code",null,"size"),g(" 属性设置评分组件的尺寸，支持 "),t("code",null,"small"),g("、"),t("code",null,"middle"),g("（默认）、"),t("code",null,"large"),g(" 三种尺寸。")],-1)),o(s,{title:"尺寸",source:c(Un)},{default:w(()=>[o(zn)]),_:1},8,["source"]),n[15]||(n[15]=t("h3",{id:"清除评分",tabindex:"-1"},"清除评分",-1)),n[16]||(n[16]=t("p",null,[g("通过 "),t("code",null,"allow-clear"),g(" 属性控制是否允许清除评分。")],-1)),o(s,{title:"清除评分",source:c(gn)},{default:w(()=>[o(fn)]),_:1},8,["source"]),n[17]||(n[17]=t("h3",{id:"自定义字符函数",tabindex:"-1"},"自定义字符函数",-1)),n[18]||(n[18]=t("p",null,[t("code",null,"character"),g(" 属性支持传入函数，可以根据索引动态渲染不同的字符。")],-1)),o(s,{title:"自定义字符函数",source:c(cn)},{default:w(()=>[o(un)]),_:1},8,["source"]),n[19]||(n[19]=t("h3",{id:"键盘操作",tabindex:"-1"},"键盘操作",-1)),n[20]||(n[20]=t("p",null,[g("通过 "),t("code",null,"keyboard"),g(" 属性控制是否支持键盘操作（方向键调整评分）。")],-1)),o(s,{title:"键盘操作",source:c(Nn)},{default:w(()=>[o(Cn)]),_:1},8,["source"]),n[21]||(n[21]=t("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[22]||(n[22]=t("p",null,[g("通过 "),t("code",null,"classNames"),g(" / "),t("code",null,"styles"),g(" 对各子元素做细粒度样式控制。")],-1)),o(s,{title:"语义化 className 与 style",source:c(mn)},{default:w(()=>[o(vn)]),_:1},8,["source"]),n[23]||(n[23]=sn(`<h2 id="api" tabindex="-1">API</h2><h3 id="rate-props" tabindex="-1">Rate Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>当前数，受控值</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认值</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>count</td><td>star 总数</td><td><code>number</code></td><td><code>5</code></td></tr><tr><td>allowHalf</td><td>是否允许半选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>是否允许再次点击后清除</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>disabled</td><td>只读，无法进行交互</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>character</td><td>自定义字符</td><td><code>string | ((ctx: RateCharacterRenderContext) =&gt; any)</code></td><td><code>&#39;★&#39;</code></td></tr><tr><td>tooltips</td><td>自定义每项的提示信息</td><td><code>(string | TooltipProps)[]</code></td><td>-</td></tr><tr><td>size</td><td>组件尺寸</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>keyboard</td><td>是否支持键盘操作</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>autoFocus</td><td>自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>RateClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>RateStyles</code></td><td>-</td></tr></tbody></table><h3 id="rate-events" tabindex="-1">Rate Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选择时的回调</td><td><code>(value: number) =&gt; void</code></td></tr><tr><td>change</td><td>选择时的回调</td><td><code>(value: number) =&gt; void</code></td></tr><tr><td>hoverChange</td><td>鼠标经过时数值变化的回调</td><td><code>(value: number | undefined) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>keydown</td><td>键盘按下时的回调</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr></tbody></table><h3 id="rate-methods" tabindex="-1">Rate Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td>-</td></tr><tr><td>blur</td><td>失去焦点</td><td>-</td></tr></tbody></table><h3 id="ratecharacterrendercontext" tabindex="-1">RateCharacterRenderContext</h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>index</td><td>当前星星的索引（从 0 开始）</td><td><code>number</code></td></tr><tr><td>value</td><td>当前评分值</td><td><code>number</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对评分组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义星星颜色 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rating<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ star: &#39;gradient-star&#39; }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 半星不同颜色 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rating<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">allow-half</span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      starFirst: &#39;star-first-custom&#39;,
      starSecond: &#39;star-second-custom&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 容器与星星组合定制 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rating<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;custom-root&#39;,
      star: &#39;custom-star&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.gradient-star)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">-webkit-text-fill-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.gradient-star:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.15<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>0 0 8px <span class="token function">rgba</span><span class="token punctuation">(</span>102<span class="token punctuation">,</span> 126<span class="token punctuation">,</span> 234<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.star-first-custom)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ff6b6b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.star-second-custom)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ffd93d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-root)</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 12px 16px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #f6f8fb 0%<span class="token punctuation">,</span> #e9ecef 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-star:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>15deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制尺寸 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rating<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { gap: &#39;12px&#39; },
      star: { fontSize: &#39;32px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义颜色 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rating<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      star: { color: &#39;#ff4d4f&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 半星样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rating<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">allow-half</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      starFirst: { color: &#39;#ff6b6b&#39; },
      starSecond: { color: &#39;#ffd93d&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>classNames.star</code> 会应用到所有星星项，包括已选中、半选、未选中状态</li><li>在 <code>allowHalf</code> 模式下，每个星星包含 <code>starFirst</code> 和 <code>starSecond</code> 两个部分</li><li><code>starFirst</code> 仅在 <code>allowHalf</code> 为 <code>true</code> 时渲染，用于实现半星效果</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-rate-disabled</code>）合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Rate 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次级填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告色（星星）</td><td><code>#faad14</code></td></tr><tr><td><code>--hmfw-control-height</code></td><td>标准控件高度</td><td><code>32px</code></td></tr><tr><td><code>--hmfw-control-height-lg</code></td><td>大号控件高度</td><td><code>40px</code></td></tr><tr><td><code>--hmfw-control-height-sm</code></td><td>小号控件高度</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-margin-xs</code></td><td>超小间距</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>缓入缓出曲线</td><td><code>cubic-bezier(0.645, 0.045, 0.355, 1)</code></td></tr></tbody></table>`,27))])}}};export{jn as default};
