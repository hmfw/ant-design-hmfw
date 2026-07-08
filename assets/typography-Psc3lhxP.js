import{C as at,k as et,y as ot,m as pt,c as s,n as Z,r as w,B as A,a as W,d as T,u as j,o as S,b as P,f as c,e as p,w as l,g as o,_ as lt,q as O,A as _,h as ct,i as tt}from"./index-ChNLT6yU.js";import{c as D}from"./cls-S9IiI6wd.js";import{C as it}from"./CopyOutlined-B3DQ8bzx.js";import{C as rt}from"./CheckOutlined-BEzBikom.js";import{T as B}from"./Tooltip-dvVnn5TX.js";import{S as L}from"./Space-Du5Caf2u.js";import{B as nt}from"./Button-fvFGDJsA.js";import"./Trigger-D8zctwaG.js";import"./LoadingOutlined-BhI5fn5Z.js";function ut(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!A(n)}const z={type:{type:String,default:void 0},disabled:{type:Boolean,default:!1},mark:{type:Boolean,default:!1},code:{type:Boolean,default:!1},keyboard:{type:Boolean,default:!1},underline:{type:Boolean,default:!1},delete:{type:Boolean,default:!1},strong:{type:Boolean,default:!1},italic:{type:Boolean,default:!1},copyable:{type:[Boolean,Object],default:!1},ellipsis:{type:[Boolean,Object],default:!1}};function G(n){return n?n===!0?1:n.rows&&n.rows>0?n.rows:1:0}function $(n){return!n||n===!0?{}:n}function V(n,a,t){const d=G(a.ellipsis);return D(n,t,{[`${n}-${a.type}`]:!!a.type,[`${n}-disabled`]:a.disabled,[`${n}-ellipsis`]:d===1,[`${n}-ellipsis-multiple-line`]:d>1})}function I(n){const a=G(n.ellipsis);if(a>1)return{"-webkit-line-clamp":String(a)}}function R(n,a){let t=a;return n.code&&(t=s("code",null,[t])),n.mark&&(t=s("mark",null,[t])),n.keyboard&&(t=s("kbd",null,[t])),n.underline&&(t=s("u",null,[t])),n.delete&&(t=s("del",null,[t])),n.strong&&(t=s("strong",null,[t])),n.italic&&(t=s("i",null,[t])),t}function q(n){if(n==null||typeof n=="boolean")return"";if(typeof n=="string"||typeof n=="number")return String(n);if(Array.isArray(n))return n.map(q).join("");const a=n.children;return typeof a=="string"?a:Array.isArray(a)?a.map(q).join(""):""}async function dt(n){var t;if(typeof navigator<"u"&&((t=navigator.clipboard)!=null&&t.writeText)){await navigator.clipboard.writeText(n);return}const a=document.createElement("textarea");a.value=n,a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.select();try{document.execCommand("copy")}finally{document.body.removeChild(a)}}function F(n){const a=w(!1),t=at();let d;return{renderCopy:(i,g)=>{var E,Y,J,K;if(!i.copyable)return null;const r=typeof i.copyable=="object"?i.copyable:{},k=t.value.Typography,x=Array.isArray(r.tooltips)?r.tooltips:null,v=x?x[0]:(k==null?void 0:k.copy)??"Copy",y=x?x[1]:(k==null?void 0:k.copied)??"Copied",u=((E=r.icon)==null?void 0:E[0])??s(it,null,null),b=((Y=r.icon)==null?void 0:Y[1])??s(rt,null,null),h=async Q=>{var X;Q.stopPropagation();const st=r.text??g();try{await dt(st),a.value=!0,(X=r.onCopy)==null||X.call(r,Q),d&&clearTimeout(d),d=setTimeout(()=>{a.value=!1},3e3)}catch{}},f=s("button",{type:"button",class:D(`${n}-copy`,(J=i.classNames)==null?void 0:J.copy,{[`${n}-copy-success`]:a.value}),style:(K=i.styles)==null?void 0:K.copy,"aria-label":a.value?y:v,title:a.value?y:v,onClick:h},[a.value?b:u]);return r.tooltips===!1?f:s(B,{title:a.value?y:v},ut(f)?f:{default:()=>[f]})}}}function U(n,a){const t=w(!1),d=W(()=>!!a.ellipsis),e=W(()=>$(a.ellipsis)),i=W(()=>G(a.ellipsis));let g=null,r=!1;const k=()=>{var b,h,f,E;if(!d.value){r&&(r=!1,t.value=!1,(h=(b=e.value).onEllipsis)==null||h.call(b,!1));return}const y=n.value;if(!y)return;let u=!1;i.value<=1?u=y.scrollWidth>y.clientWidth+1:u=y.scrollHeight>y.clientHeight+1,u!==r?(r=u,t.value=u,(E=(f=e.value).onEllipsis)==null||E.call(f,u)):t.value=u},x=()=>{if(v(),!d.value){Z(k);return}const y=n.value;y&&(typeof ResizeObserver<"u"&&(g=new ResizeObserver(()=>k()),g.observe(y)),Z(k))},v=()=>{g&&(g.disconnect(),g=null)};return et(()=>x()),ot(()=>v()),pt(()=>[d.value,i.value],()=>{x()}),{isEllipsis:t,measure:k}}function H(n,a){return n===!1||n===void 0?null:n===!0?{title:a}:typeof n=="string"||typeof n=="number"?{title:n}:typeof n=="object"?{title:a,...n}:null}function kt(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!A(n)}const m=T({name:"TypographyText",props:{...z,classNames:{type:Object,default:void 0},styles:{type:Object,default:void 0}},setup(n,{slots:a}){const t=j("typography"),{renderCopy:d}=F(t),e=w(null),{isEllipsis:i}=U(e,n);return()=>{var b,h,f;const g=(b=a.default)==null?void 0:b.call(a),r=R(n,g),k=q(g),x=d(n,()=>k),v=$(n.ellipsis),y=i.value?H(v.tooltip,k):null,u=s("span",{ref:e,class:D(V(t,n),(h=n.classNames)==null?void 0:h.root),style:{...I(n),...(f=n.styles)==null?void 0:f.root}},[r,x]);return y?s(B,y,kt(u)?u:{default:()=>[u]}):u}}});function gt(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!A(n)}const N=T({name:"TypographyTitle",props:{...z,level:{type:Number,default:1},classNames:{type:Object,default:void 0},styles:{type:Object,default:void 0}},setup(n,{slots:a}){const t=j("typography"),{renderCopy:d}=F(t),e=w(null),{isEllipsis:i}=U(e,n);return()=>{var h,f,E;const g=(h=a.default)==null?void 0:h.call(a),r=R(n,g),k=q(g),x=d(n,()=>k),v=`h${n.level}`,y=$(n.ellipsis),u=i.value?H(y.tooltip,k):null,b=s(v,{ref:e,class:D(V(t,n,`${t}-h${n.level}`),(f=n.classNames)==null?void 0:f.root),style:{...I(n),...(E=n.styles)==null?void 0:E.root}},{default:()=>[r,x]});return u?s(B,u,gt(b)?b:{default:()=>[b]}):b}}});function yt(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!A(n)}const C=T({name:"TypographyParagraph",props:{...z,classNames:{type:Object,default:void 0},styles:{type:Object,default:void 0}},setup(n,{slots:a}){const t=j("typography"),{renderCopy:d}=F(t),e=w(null),{isEllipsis:i}=U(e,n);return()=>{var b,h,f;const g=(b=a.default)==null?void 0:b.call(a),r=R(n,g),k=q(g),x=d(n,()=>k),v=$(n.ellipsis),y=i.value?H(v.tooltip,k):null,u=s("p",{ref:e,class:D(V(t,n),(h=n.classNames)==null?void 0:h.root),style:{...I(n),...(f=n.styles)==null?void 0:f.root}},[r,x]);return y?s(B,y,yt(u)?u:{default:()=>[u]}):u}}});function ft(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!A(n)}const M=T({name:"TypographyLink",props:{...z,href:{type:String,default:void 0},target:{type:String,default:void 0},classNames:{type:Object,default:void 0},styles:{type:Object,default:void 0}},setup(n,{slots:a}){const t=j("typography"),{renderCopy:d}=F(t),e=w(null),{isEllipsis:i}=U(e,n);return()=>{var b,h,f;const g=(b=a.default)==null?void 0:b.call(a),r=R(n,g),k=q(g),x=d(n,()=>k),v=$(n.ellipsis),y=i.value?H(v.tooltip,k):null,u=s("a",{ref:e,class:D(V(t,n,`${t}-link`),(h=n.classNames)==null?void 0:h.root),style:{...I(n),...(f=n.styles)==null?void 0:f.root},href:n.disabled?void 0:n.href,target:n.target,"aria-disabled":n.disabled||void 0},[r,x]);return y?s(B,y,ft(u)?u:{default:()=>[u]}):u}}}),mt={style:{display:"flex","flex-direction":"column",gap:"32px"}},bt=T({__name:"TypographyClassNames",setup(n){return(a,t)=>(S(),P("div",mt,[c("div",null,[t[1]||(t[1]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"Text 自定义根节点样式：",-1)),s(p(m),{"class-names":{root:"custom-text-root"}},{default:l(()=>[...t[0]||(t[0]=[o(" 渐变文字效果 ",-1)])]),_:1})]),c("div",null,[t[3]||(t[3]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"Title 自定义复制按钮：",-1)),s(p(N),{level:3,copyable:"","class-names":{copy:"custom-copy-btn"}},{default:l(()=>[...t[2]||(t[2]=[o(" 可复制的标题 ",-1)])]),_:1})]),c("div",null,[t[5]||(t[5]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"Paragraph 组合 classNames：",-1)),s(p(C),{copyable:"","class-names":{root:"custom-paragraph",copy:"custom-paragraph-copy"}},{default:l(()=>[...t[4]||(t[4]=[o(" 这是一段带有自定义样式的段落文字，同时复制按钮也应用了自定义样式。点击右侧按钮即可复制全部内容。 ",-1)])]),_:1})]),c("div",null,[t[7]||(t[7]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"Link 使用内联样式：",-1)),s(p(M),{href:"https://github.com",target:"_blank",styles:{root:{fontSize:"16px",fontWeight:600,textDecoration:"underline",textDecorationColor:"#52c41a",textDecorationThickness:"2px"}}},{default:l(()=>[...t[6]||(t[6]=[o(" GitHub 官网 ",-1)])]),_:1})]),c("div",null,[t[9]||(t[9]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合使用 classNames 和 styles：",-1)),s(p(m),{copyable:"","class-names":{root:"combined-text"},styles:{copy:{fontSize:"18px",color:"#faad14"}}},{default:l(()=>[...t[8]||(t[8]=[o(" classNames 控制文字，styles 控制按钮 ",-1)])]),_:1})])]))}}),ht=lt(bt,[["__scopeId","data-v-84a48b3e"]]),xt=`<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：Text 自定义根节点 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">Text 自定义根节点样式：</div>
      <Text :class-names="{ root: 'custom-text-root' }"> 渐变文字效果 </Text>
    </div>

    <!-- 场景 2：Title 自定义复制按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">Title 自定义复制按钮：</div>
      <Title :level="3" copyable :class-names="{ copy: 'custom-copy-btn' }"> 可复制的标题 </Title>
    </div>

    <!-- 场景 3：Paragraph 组合样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">Paragraph 组合 classNames：</div>
      <Paragraph copyable :class-names="{ root: 'custom-paragraph', copy: 'custom-paragraph-copy' }">
        这是一段带有自定义样式的段落文字，同时复制按钮也应用了自定义样式。点击右侧按钮即可复制全部内容。
      </Paragraph>
    </div>

    <!-- 场景 4：Link 使用 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">Link 使用内联样式：</div>
      <Link
        href="https://github.com"
        target="_blank"
        :styles="{
          root: {
            fontSize: '16px',
            fontWeight: 600,
            textDecoration: 'underline',
            textDecorationColor: '#52c41a',
            textDecorationThickness: '2px',
          },
        }"
      >
        GitHub 官网
      </Link>
    </div>

    <!-- 场景 5：Text 组合 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用 classNames 和 styles：</div>
      <Text
        copyable
        :class-names="{ root: 'combined-text' }"
        :styles="{ copy: { fontSize: '18px', color: '#faad14' } }"
      >
        classNames 控制文字，styles 控制按钮
      </Text>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Text, Title, Paragraph, Link } from '@hmfw/ant-design'
<\/script>

<style scoped>
:deep(.custom-text-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.3s;
}

:deep(.custom-text-root:hover) {
  letter-spacing: 1px;
}

:deep(.custom-copy-btn) {
  padding: 4px 8px;
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white !important;
  border-radius: 4px;
  transition: all 0.3s;
}

:deep(.custom-copy-btn:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
}

:deep(.custom-paragraph) {
  padding: 16px;
  background: linear-gradient(to right, #f0f5ff, #fff);
  border-left: 4px solid #1677ff;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.75);
  transition: all 0.3s;
}

:deep(.custom-paragraph:hover) {
  background: linear-gradient(to right, #e6f4ff, #fff);
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.15);
}

:deep(.custom-paragraph-copy) {
  font-size: 16px;
  color: #52c41a;
  transition: all 0.3s;
}

:deep(.custom-paragraph-copy:hover) {
  transform: scale(1.2);
}

:deep(.combined-text) {
  padding: 8px 12px;
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  color: #389e0d;
}
</style>
`,vt=T({__name:"TypographyCopyable",setup(n){return(a,t)=>(S(),P("div",null,[s(p(C),{copyable:""},{default:l(()=>[...t[0]||(t[0]=[o(" 这段文字可以复制。 ",-1)])]),_:1}),s(p(C),{copyable:{text:"自定义复制内容"}},{default:l(()=>[...t[1]||(t[1]=[o(" 显示文字与复制内容不同。 ",-1)])]),_:1}),s(p(m),{copyable:""},{default:l(()=>[...t[2]||(t[2]=[o(" 行内可复制文本 ",-1)])]),_:1})]))}}),Tt=`<template>
  <div>
    <Paragraph copyable> 这段文字可以复制。 </Paragraph>
    <Paragraph :copyable="{ text: '自定义复制内容' }"> 显示文字与复制内容不同。 </Paragraph>
    <Text copyable> 行内可复制文本 </Text>
  </div>
</template>

<script setup lang="ts">
import { Paragraph, Text } from '@hmfw/ant-design'
<\/script>
`,wt=T({__name:"TypographyDecorations",setup(n){return(a,t)=>(S(),O(p(L),{direction:"vertical"},{default:l(()=>[s(p(m),{mark:""},{default:l(()=>[...t[0]||(t[0]=[o(" 标记文本 ",-1)])]),_:1}),s(p(m),{code:""},{default:l(()=>[...t[1]||(t[1]=[o(" 代码文本 ",-1)])]),_:1}),s(p(m),{keyboard:""},{default:l(()=>[...t[2]||(t[2]=[o(" Ctrl ",-1)])]),_:1}),s(p(m),{underline:""},{default:l(()=>[...t[3]||(t[3]=[o(" 下划线文本 ",-1)])]),_:1}),s(p(m),{delete:""},{default:l(()=>[...t[4]||(t[4]=[o(" 删除线文本 ",-1)])]),_:1}),s(p(m),{strong:""},{default:l(()=>[...t[5]||(t[5]=[o(" 加粗文本 ",-1)])]),_:1}),s(p(m),{italic:""},{default:l(()=>[...t[6]||(t[6]=[o(" 斜体文本 ",-1)])]),_:1})]),_:1}))}}),St=`<template>
  <Space direction="vertical">
    <Text mark> 标记文本 </Text>
    <Text code> 代码文本 </Text>
    <Text keyboard> Ctrl </Text>
    <Text underline> 下划线文本 </Text>
    <Text delete> 删除线文本 </Text>
    <Text strong> 加粗文本 </Text>
    <Text italic> 斜体文本 </Text>
  </Space>
</template>

<script setup lang="ts">
import { Text, Space } from '@hmfw/ant-design'
<\/script>
`,Et={style:{"max-width":"240px"}},Ct=T({__name:"TypographyEllipsis",setup(n){return(a,t)=>(S(),P("div",Et,[s(p(m),{ellipsis:""},{default:l(()=>[...t[0]||(t[0]=[o(" Ant Design 是一套企业级 UI 设计语言和 Vue 组件库，主张高效、确定、自然、生长四大设计价值观，致力于提升用户和设计者的体验。 ",-1)])]),_:1})]))}}),Pt=`<template>
  <div style="max-width: 240px">
    <Text ellipsis>
      Ant Design 是一套企业级 UI 设计语言和 Vue
      组件库，主张高效、确定、自然、生长四大设计价值观，致力于提升用户和设计者的体验。
    </Text>
  </div>
</template>

<script setup lang="ts">
import { Text } from '@hmfw/ant-design'
<\/script>
`,Nt={style:{"max-width":"320px",display:"flex","flex-direction":"column",gap:"12px"}},qt={id:"ellipsis-state",style:{"font-size":"12px",color:"#999"}},Dt={id:"callback-log",style:{"font-size":"12px",color:"#666"}},_t=T({__name:"TypographyEllipsisDynamic",setup(n){const a=w(!0),t=w(2),d=w(!1),e=w([]);function i(g){d.value=g,e.value.push(g?"截断":"恢复")}return(g,r)=>(S(),P("div",Nt,[s(p(L),null,{default:l(()=>[s(p(nt),{id:"toggle-ellipsis",onClick:r[0]||(r[0]=k=>a.value=!a.value)},{default:l(()=>[o(_(a.value?"关闭省略":"开启省略"),1)]),_:1}),s(p(nt),{id:"change-rows",onClick:r[1]||(r[1]=k=>t.value=t.value===2?3:2)},{default:l(()=>[o(" 切换行数 ("+_(t.value)+") ",1)]),_:1})]),_:1}),s(p(C),{ellipsis:a.value?{rows:t.value,tooltip:!0,onEllipsis:i}:!1},{default:l(()=>[...r[2]||(r[2]=[o(" 这是一段用于测试动态省略切换的长文本内容。当省略功能启用时，文本超出容器的部分会被截断，并通过 Tooltip 展示完整内容。关闭省略后，文本将完整显示。通过下方状态可以验证 onEllipsis 回调是否正确触发，以及行数切换时 ResizeObserver 是否正确重建。 ",-1)])]),_:1},8,["ellipsis"]),c("div",qt,"省略状态: "+_(d.value?"已截断":"未截断"),1),c("div",Dt,"回调记录: "+_(e.value.join(", ")||"无"),1)]))}}),At=`<template>
  <div style="max-width: 320px; display: flex; flex-direction: column; gap: 12px">
    <Space>
      <Button id="toggle-ellipsis" @click="enabled = !enabled">
        {{ enabled ? '关闭省略' : '开启省略' }}
      </Button>
      <Button id="change-rows" @click="rows = rows === 2 ? 3 : 2"> 切换行数 ({{ rows }}) </Button>
    </Space>
    <Paragraph :ellipsis="enabled ? { rows, tooltip: true, onEllipsis: onEllipsis } : false">
      这是一段用于测试动态省略切换的长文本内容。当省略功能启用时，文本超出容器的部分会被截断，并通过 Tooltip
      展示完整内容。关闭省略后，文本将完整显示。通过下方状态可以验证 onEllipsis 回调是否正确触发，以及行数切换时
      ResizeObserver 是否正确重建。
    </Paragraph>
    <div id="ellipsis-state" style="font-size: 12px; color: #999">省略状态: {{ isEllipsis ? '已截断' : '未截断' }}</div>
    <div id="callback-log" style="font-size: 12px; color: #666">回调记录: {{ callbackLog.join(', ') || '无' }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Paragraph, Space } from '@hmfw/ant-design'

const enabled = ref(true)
const rows = ref(2)
const isEllipsis = ref(false)
const callbackLog = ref<string[]>([])

function onEllipsis(v: boolean) {
  isEllipsis.value = v
  callbackLog.value.push(v ? '截断' : '恢复')
}
<\/script>
`,Bt={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"240px"}},Lt={style:{"font-size":"12px",color:"#999"}},$t=T({__name:"TypographyEllipsisTooltip",setup(n){const a=w(!1);function t(d){a.value=d}return(d,e)=>(S(),P("div",Bt,[s(p(m),{ellipsis:{tooltip:!0}},{default:l(()=>[...e[0]||(e[0]=[o(" 这是一段超出容器宽度的长文本，鼠标悬停时会通过 Tooltip 显示完整内容，方便用户查看被省略的部分。 ",-1)])]),_:1}),s(p(m),{ellipsis:{tooltip:"自定义 Tooltip 文案"}},{default:l(()=>[...e[1]||(e[1]=[o(" 显示的文字会被省略，但悬停时 Tooltip 展示的内容与之不同。 ",-1)])]),_:1}),s(p(C),{ellipsis:{rows:2,tooltip:{placement:"topLeft",color:"#1677ff"},onEllipsis:t}},{default:l(()=>[...e[2]||(e[2]=[o(" 多行省略时，可以传入完整的 Tooltip 配置（placement、color 等），并通过 onEllipsis 监听省略状态的变化，从而在文本被截断时做出相应的交互处理。 ",-1)])]),_:1},8,["ellipsis"]),c("div",Lt,"省略状态: "+_(a.value),1)]))}}),jt=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px; max-width: 240px">
    <Text :ellipsis="{ tooltip: true }">
      这是一段超出容器宽度的长文本，鼠标悬停时会通过 Tooltip 显示完整内容，方便用户查看被省略的部分。
    </Text>
    <Text :ellipsis="{ tooltip: '自定义 Tooltip 文案' }">
      显示的文字会被省略，但悬停时 Tooltip 展示的内容与之不同。
    </Text>
    <Paragraph
      :ellipsis="{
        rows: 2,
        tooltip: { placement: 'topLeft', color: '#1677ff' },
        onEllipsis: handleEllipsis,
      }"
    >
      多行省略时，可以传入完整的 Tooltip 配置（placement、color 等），并通过 onEllipsis
      监听省略状态的变化，从而在文本被截断时做出相应的交互处理。
    </Paragraph>
    <div style="font-size: 12px; color: #999">省略状态: {{ ellipsisState }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Text, Paragraph } from '@hmfw/ant-design'

const ellipsisState = ref<boolean>(false)
function handleEllipsis(v: boolean) {
  ellipsisState.value = v
}
<\/script>
`,Ot=T({__name:"TypographyLink",setup(n){return(a,t)=>(S(),P("div",null,[s(p(M),{href:"https://ant.design",target:"_blank"},{default:l(()=>[...t[0]||(t[0]=[o(" Ant Design 链接 ",-1)])]),_:1}),t[2]||(t[2]=c("br",null,null,-1)),s(p(M),{href:"https://ant.design",disabled:""},{default:l(()=>[...t[1]||(t[1]=[o(" 禁用链接 ",-1)])]),_:1})]))}}),zt=`<template>
  <div>
    <Link href="https://ant.design" target="_blank"> Ant Design 链接 </Link>
    <br />
    <Link href="https://ant.design" disabled> 禁用链接 </Link>
  </div>
</template>

<script setup lang="ts">
import { Link } from '@hmfw/ant-design'
<\/script>
`,Vt=T({__name:"TypographyParagraph",setup(n){return(a,t)=>(S(),O(p(L),{direction:"vertical",size:16},{default:l(()=>[s(p(C),null,{default:l(()=>[...t[0]||(t[0]=[o(" 这是一段普通的段落文本。Ant Design 是一套企业级 UI 设计语言和 Vue 组件库。 ",-1)])]),_:1}),s(p(C),{copyable:""},{default:l(()=>[...t[1]||(t[1]=[o(" 这段文本可以复制。点击右侧图标复制内容。 ",-1)])]),_:1}),s(p(C),{ellipsis:{rows:2}},{default:l(()=>[...t[2]||(t[2]=[o(" Ant Design 是一套致力于提升「用户」和「设计者」使用体验的企业级 UI 设计语言。它源自蚂蚁集团中后台产品的交互语言和视觉风格，秉承高效、确定、自然、生长的设计价值观，沉淀出一套完整的设计原则与组件规范。我们相信，好的设计不仅要美观，更要在真实业务场景中经得起推敲，帮助设计者与开发者高效协作、降低沟通成本，最终交付确定、流畅且令人愉悦的产品体验。当段落内容超过指定行数时，会自动以省略号结尾，超出部分将被隐藏。 ",-1)])]),_:1})]),_:1}))}}),It=`<template>
  <Space direction="vertical" :size="16">
    <Paragraph> 这是一段普通的段落文本。Ant Design 是一套企业级 UI 设计语言和 Vue 组件库。 </Paragraph>

    <Paragraph copyable> 这段文本可以复制。点击右侧图标复制内容。 </Paragraph>

    <Paragraph :ellipsis="{ rows: 2 }">
      Ant Design 是一套致力于提升「用户」和「设计者」使用体验的企业级 UI
      设计语言。它源自蚂蚁集团中后台产品的交互语言和视觉风格，秉承高效、确定、自然、生长的设计价值观，沉淀出一套完整的设计原则与组件规范。我们相信，好的设计不仅要美观，更要在真实业务场景中经得起推敲，帮助设计者与开发者高效协作、降低沟通成本，最终交付确定、流畅且令人愉悦的产品体验。当段落内容超过指定行数时，会自动以省略号结尾，超出部分将被隐藏。
    </Paragraph>
  </Space>
</template>

<script setup lang="ts">
import { Paragraph, Space } from '@hmfw/ant-design'
<\/script>
`,Rt=T({__name:"TypographyText",setup(n){return(a,t)=>(S(),O(p(L),{direction:"vertical"},{default:l(()=>[s(p(m),null,{default:l(()=>[...t[0]||(t[0]=[o("默认文本",-1)])]),_:1}),s(p(m),{type:"secondary"},{default:l(()=>[...t[1]||(t[1]=[o(" 次要文本 ",-1)])]),_:1}),s(p(m),{type:"success"},{default:l(()=>[...t[2]||(t[2]=[o(" 成功文本 ",-1)])]),_:1}),s(p(m),{type:"warning"},{default:l(()=>[...t[3]||(t[3]=[o(" 警告文本 ",-1)])]),_:1}),s(p(m),{type:"danger"},{default:l(()=>[...t[4]||(t[4]=[o(" 危险文本 ",-1)])]),_:1}),s(p(m),{disabled:""},{default:l(()=>[...t[5]||(t[5]=[o(" 禁用文本 ",-1)])]),_:1})]),_:1}))}}),Ft=`<template>
  <Space direction="vertical">
    <Text>默认文本</Text>
    <Text type="secondary"> 次要文本 </Text>
    <Text type="success"> 成功文本 </Text>
    <Text type="warning"> 警告文本 </Text>
    <Text type="danger"> 危险文本 </Text>
    <Text disabled> 禁用文本 </Text>
  </Space>
</template>

<script setup lang="ts">
import { Text, Space } from '@hmfw/ant-design'
<\/script>
`,Ut=T({__name:"TypographyTitle",setup(n){return(a,t)=>(S(),O(p(L),{direction:"vertical",size:16},{default:l(()=>[s(p(N),{level:1},{default:l(()=>[...t[0]||(t[0]=[o(" h1. Ant Design ",-1)])]),_:1}),s(p(N),{level:2},{default:l(()=>[...t[1]||(t[1]=[o(" h2. Ant Design ",-1)])]),_:1}),s(p(N),{level:3},{default:l(()=>[...t[2]||(t[2]=[o(" h3. Ant Design ",-1)])]),_:1}),s(p(N),{level:4},{default:l(()=>[...t[3]||(t[3]=[o(" h4. Ant Design ",-1)])]),_:1}),s(p(N),{level:5},{default:l(()=>[...t[4]||(t[4]=[o(" h5. Ant Design ",-1)])]),_:1})]),_:1}))}}),Ht=`<template>
  <Space direction="vertical" :size="16">
    <Title :level="1"> h1. Ant Design </Title>
    <Title :level="2"> h2. Ant Design </Title>
    <Title :level="3"> h3. Ant Design </Title>
    <Title :level="4"> h4. Ant Design </Title>
    <Title :level="5"> h5. Ant Design </Title>
  </Space>
</template>

<script setup lang="ts">
import { Title, Space } from '@hmfw/ant-design'
<\/script>
`,Wt={class:"markdown-body"},nn={__name:"typography",setup(n,{expose:a}){return a({frontmatter:{}}),(d,e)=>{const i=ct("DemoBlock");return S(),P("div",Wt,[e[0]||(e[0]=tt('<h1 id="typography-排版" tabindex="-1">Typography 排版</h1><p>文本的基本格式。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><ul><li>当需要展示标题、段落、列表内容时</li><li>当需要对文字进行强调、标记、删除线等操作时</li><li>当需要展示代码片段时</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="标题" tabindex="-1">标题</h3><p>通过 <code>level</code> 属性设置标题级别。</p>',7)),s(i,{title:"标题",source:p(Ht)},{default:l(()=>[s(Ut)]),_:1},8,["source"]),e[1]||(e[1]=c("h3",{id:"文本类型",tabindex:"-1"},"文本类型",-1)),e[2]||(e[2]=c("p",null,[o("通过 "),c("code",null,"type"),o(" 属性设置文本类型。")],-1)),s(i,{title:"文本类型",source:p(Ft)},{default:l(()=>[s(Rt)]),_:1},8,["source"]),e[3]||(e[3]=c("h3",{id:"文本修饰",tabindex:"-1"},"文本修饰",-1)),e[4]||(e[4]=c("p",null,"支持多种文本修饰样式。",-1)),s(i,{title:"文本修饰",source:p(St)},{default:l(()=>[s(wt)]),_:1},8,["source"]),e[5]||(e[5]=c("h3",{id:"段落",tabindex:"-1"},"段落",-1)),e[6]||(e[6]=c("p",null,[o("段落组件以 "),c("code",null,"<p>"),o(" 渲染。")],-1)),s(i,{title:"段落",source:p(It)},{default:l(()=>[s(Vt)]),_:1},8,["source"]),e[7]||(e[7]=c("h3",{id:"链接",tabindex:"-1"},"链接",-1)),e[8]||(e[8]=c("p",null,[o("使用 "),c("code",null,"Link"),o(" 渲染超链接，支持 "),c("code",null,"disabled"),o("。")],-1)),s(i,{title:"链接",source:p(zt)},{default:l(()=>[s(Ot)]),_:1},8,["source"]),e[9]||(e[9]=c("h3",{id:"可复制",tabindex:"-1"},"可复制",-1)),e[10]||(e[10]=c("p",null,[o("通过 "),c("code",null,"copyable"),o(" 添加复制按钮，对象形式可自定义复制内容与回调。")],-1)),s(i,{title:"可复制",source:p(Tt)},{default:l(()=>[s(vt)]),_:1},8,["source"]),e[11]||(e[11]=c("h3",{id:"省略",tabindex:"-1"},"省略",-1)),e[12]||(e[12]=c("p",null,[o("通过 "),c("code",null,"ellipsis"),o(" 设置单行省略。")],-1)),s(i,{title:"省略",source:p(Pt)},{default:l(()=>[s(Ct)]),_:1},8,["source"]),e[13]||(e[13]=c("h3",{id:"省略-tooltip-与回调",tabindex:"-1"},"省略 Tooltip 与回调",-1)),e[14]||(e[14]=c("p",null,[o("通过 "),c("code",null,"ellipsis.tooltip"),o(" 在省略时显示完整内容（支持自定义 Tooltip 配置），通过 "),c("code",null,"ellipsis.onEllipsis"),o(" 监听省略状态。")],-1)),s(i,{title:"省略 Tooltip 与回调",source:p(jt)},{default:l(()=>[s($t)]),_:1},8,["source"]),e[15]||(e[15]=c("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),e[16]||(e[16]=c("p",null,[o("通过 "),c("code",null,"classNames"),o(" / "),c("code",null,"styles"),o(" 对各子元素做细粒度样式控制。")],-1)),s(i,{title:"语义化 className 与 style",source:p(xt)},{default:l(()=>[s(ht)]),_:1},8,["source"]),e[17]||(e[17]=c("h3",{id:"动态省略切换",tabindex:"-1"},"动态省略切换",-1)),e[18]||(e[18]=c("p",null,[o("动态切换 "),c("code",null,"ellipsis"),o(" 的开启/关闭以及行数，验证 ResizeObserver 在 prop 变化时正确重建。")],-1)),s(i,{title:"动态省略切换",source:p(At)},{default:l(()=>[s(_t)]),_:1},8,["source"]),e[19]||(e[19]=tt(`<h2 id="api" tabindex="-1">API</h2><h3 id="通用-propstext--title--paragraph--link-共享" tabindex="-1">通用 Props（Text / Title / Paragraph / Link 共享）</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>文本类型</td><td><code>&#39;secondary&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;danger&#39;</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>mark</td><td>标记样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>code</td><td>代码样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>keyboard</td><td>键盘样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>underline</td><td>下划线</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>delete</td><td>删除线</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>strong</td><td>加粗</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>italic</td><td>斜体</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>copyable</td><td>是否可复制，对象形式 <code>{ text?, onCopy?, tooltips?, icon? }</code></td><td><code>boolean | CopyableConfig</code></td><td><code>false</code></td></tr><tr><td>ellipsis</td><td>单行省略；对象形式 <code>{ rows?, tooltip?, onEllipsis? }</code> 支持多行省略、悬停 Tooltip 与回调</td><td><code>boolean | EllipsisConfig</code></td><td><code>false</code></td></tr></tbody></table><h3 id="text-props" tabindex="-1">Text Props</h3><p>继承通用 Props，额外：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TextClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TextStyles</code></td><td>-</td></tr></tbody></table><h3 id="title-props" tabindex="-1">Title Props</h3><p>继承通用 Props，额外：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>level</td><td>标题级别</td><td><code>1 | 2 | 3 | 4 | 5</code></td><td><code>1</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TitleClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TitleStyles</code></td><td>-</td></tr></tbody></table><h3 id="paragraph-props" tabindex="-1">Paragraph Props</h3><p>继承通用 Props，额外：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ParagraphClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ParagraphStyles</code></td><td>-</td></tr></tbody></table><h3 id="link-props" tabindex="-1">Link Props</h3><p>继承通用 Props，额外：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>href</td><td>链接地址</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>链接打开方式</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>LinkClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>LinkStyles</code></td><td>-</td></tr></tbody></table><h3 id="copyableconfig" tabindex="-1">CopyableConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>自定义复制内容</td><td><code>string</code></td><td>节点文本</td></tr><tr><td>onCopy</td><td>复制回调</td><td><code>(e: MouseEvent) =&gt; void</code></td><td>-</td></tr><tr><td>tooltips</td><td>Tooltip 文案 <code>[复制前, 复制后]</code>，传 <code>false</code> 关闭 Tooltip</td><td><code>false | [string, string]</code></td><td>跟随 locale</td></tr><tr><td>icon</td><td>自定义图标 <code>[复制前, 复制后]</code></td><td><code>[VNode, VNode]</code></td><td>-</td></tr></tbody></table><h3 id="ellipsisconfig" tabindex="-1">EllipsisConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>rows</td><td>最多显示行数</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>tooltip</td><td>省略时显示 Tooltip：<code>true</code> 用纯文本，字符串/数字自定义文案，对象传入完整 <code>TooltipProps</code></td><td><code>boolean | string | number | TooltipProps</code></td><td>-</td></tr><tr><td>onEllipsis</td><td>省略状态变化回调</td><td><code>(ellipsis: boolean) =&gt; void</code></td><td>-</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Typography 组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// Text</span>
<span class="token keyword">interface</span> <span class="token class-name">TextClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 span.hmfw-typography</span>
  copy<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 复制按钮 button.hmfw-typography-copy</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TextStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  copy<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>

<span class="token comment">// Title</span>
<span class="token keyword">interface</span> <span class="token class-name">TitleClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 h1-h5.hmfw-typography</span>
  copy<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 复制按钮 button.hmfw-typography-copy</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TitleStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  copy<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>

<span class="token comment">// Paragraph</span>
<span class="token keyword">interface</span> <span class="token class-name">ParagraphClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 p.hmfw-typography</span>
  copy<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 复制按钮 button.hmfw-typography-copy</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ParagraphStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  copy<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>

<span class="token comment">// Link</span>
<span class="token keyword">interface</span> <span class="token class-name">LinkClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 a.hmfw-typography-link</span>
  copy<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 复制按钮 button.hmfw-typography-copy</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">LinkStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  copy<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- Text --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-typography<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  文本内容
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-typography-copy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.copy / styles.copy 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Title --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-typography hmfw-typography-h1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  标题内容
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-typography-copy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.copy / styles.copy 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Paragraph --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-typography<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  段落内容
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-typography-copy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.copy / styles.copy 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Link --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-typography-link<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  链接内容
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-typography-copy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.copy / styles.copy 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Text 自定义根节点 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ root: &#39;custom-text&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 渐变文字效果 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- Title 自定义复制按钮 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Title</span> <span class="token attr-name">:level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">copyable</span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ copy: &#39;custom-copy-btn&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 可复制的标题 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Title</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- Paragraph 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Paragraph</span> <span class="token attr-name">copyable</span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ root: &#39;custom-paragraph&#39;, copy: &#39;custom-copy&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    这是一段自定义样式的段落。
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Paragraph</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.custom-text)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">-webkit-text-fill-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-copy-btn)</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 4px 8px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #1890ff 0%<span class="token punctuation">,</span> #096dd9 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-copy-btn:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 4px 12px <span class="token function">rgba</span><span class="token punctuation">(</span>24<span class="token punctuation">,</span> 144<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-paragraph)</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #f0f5ff<span class="token punctuation">,</span> #fff<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> 4px solid #1677ff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制文字 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: {
        fontSize: &#39;18px&#39;,
        fontWeight: 600,
        color: &#39;#722ed1&#39;,
      },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    紫色加粗文字
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 内联样式控制复制按钮 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Paragraph</span>
    <span class="token attr-name">copyable</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      copy: { fontSize: &#39;18px&#39;, color: &#39;#faad14&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    自定义复制按钮样式
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Paragraph</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span>
    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://github.com<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: {
        fontSize: &#39;16px&#39;,
        textDecoration: &#39;underline&#39;,
        textDecorationColor: &#39;#52c41a&#39;,
        textDecorationThickness: &#39;2px&#39;,
      },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    GitHub 官网
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>copy</code> 仅在 <code>copyable</code> 为 <code>true</code> 时渲染，否则该 key 不生效</li><li>Text、Title、Paragraph、Link 各自有独立的 ClassNames/Styles 接口，类型不通用</li><li>四个子组件的语义化 API keys 完全相同（<code>root</code> 和 <code>copy</code>），但应用的 DOM 元素不同（Text 是 <code>&lt;span&gt;</code>，Title 是 <code>&lt;h1-h5&gt;</code>，Paragraph 是 <code>&lt;p&gt;</code>，Link 是 <code>&lt;a&gt;</code>）</li><li>使用 <code>background-clip: text</code> 实现渐变文字时，需要配合 <code>-webkit-text-fill-color: transparent</code> 和 <code>-webkit-background-clip: text</code></li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Typography 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。</p>`,36))])}}};export{nn as default};
