import{k as f,I as v,j as n,c as x,w as p,g as b,G as s,M as a,d as o,B as w,h as k}from"./index-BNHhPN23.js";import{c}from"./cls-S9IiI6wd.js";const $=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"],r=f({name:"Badge",props:{count:[Number,String],dot:Boolean,showZero:Boolean,overflowCount:{type:Number,default:99},status:String,color:String,text:String,size:{type:String,default:"default"},offset:{type:Array},title:String},setup(t,{slots:l}){const e=v("badge"),g=x(()=>typeof t.count=="number"&&t.count>t.overflowCount?`${t.overflowCount}+`:t.count),d=x(()=>{if(t.dot||t.status)return!1;const u=t.count;return u==null||typeof u=="number"&&u===0&&!t.showZero}),i=x(()=>t.color?$.includes(t.color):!1),h=x(()=>{const u={};return t.offset&&(u.marginTop=`${t.offset[1]}px`,u.right=`${-t.offset[0]}px`),t.color&&!i.value&&(u.background=t.color),u});return()=>{if(t.status||t.color&&!l.default){const y=c(`${e}-status-dot`,t.status&&`${e}-status-${t.status}`,t.color&&i.value&&`${e}-color-${t.color}`),B=t.color&&!i.value?{background:t.color}:{};return n("span",{class:c(e,`${e}-status`)},[n("span",{class:y,style:B},null),t.text&&n("span",{class:`${e}-status-text`},[t.text])])}const u=c(`${e}-count`,{[`${e}-count-sm`]:t.size==="small",[`${e}-dot`]:t.dot,[`${e}-count-show-zero`]:t.showZero,[`${e}-multiple-words`]:typeof g.value=="string"&&g.value.length>1}),m=!d.value&&n("sup",{class:u,style:h.value,title:t.title??String(t.count??"")},[!t.dot&&g.value]);return l.default?n("span",{class:c(e,`${e}-not-a-wrapper`)},[l.default(),m]):n("span",{class:c(e)},[m])}}}),C={style:{display:"flex",gap:"24px"}},S=f({__name:"BadgeBasic",setup(t){return(l,e)=>(p(),b("div",C,[n(s(r),{count:5},{default:a(()=>[...e[0]||(e[0]=[o("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1}),n(s(r),{count:0,"show-zero":""},{default:a(()=>[...e[1]||(e[1]=[o("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1}),n(s(r),{count:99},{default:a(()=>[...e[2]||(e[2]=[o("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1}),n(s(r),{count:100},{default:a(()=>[...e[3]||(e[3]=[o("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1})]))}}),_=`<template>
  <div style="display: flex; gap: 24px;">
    <Badge :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px;" />
    </Badge>
    <Badge :count="0" show-zero>
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px;" />
    </Badge>
    <Badge :count="99">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px;" />
    </Badge>
    <Badge :count="100">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px;" />
    </Badge>
  </div>
</template>

<script setup lang="ts">
import { Badge } from 'ant-design-hmfw'
<\/script>
`,z={style:{display:"flex",gap:"24px"}},N=f({__name:"BadgeCustomColor",setup(t){return(l,e)=>(p(),b("div",z,[n(s(r),{color:"#f50",count:5},{default:a(()=>[...e[0]||(e[0]=[o("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1}),n(s(r),{color:"#2db7f5",count:5},{default:a(()=>[...e[1]||(e[1]=[o("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1}),n(s(r),{color:"#87d068",count:5},{default:a(()=>[...e[2]||(e[2]=[o("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1})]))}}),P=`<template>
  <div style="display: flex; gap: 24px;">
    <Badge color="#f50" :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px;" />
    </Badge>
    <Badge color="#2db7f5" :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px;" />
    </Badge>
    <Badge color="#87d068" :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px;" />
    </Badge>
  </div>
</template>

<script setup lang="ts">
import { Badge } from 'ant-design-hmfw'
<\/script>
`,Z={style:{display:"flex","flex-direction":"column",gap:"16px"}},E=f({__name:"BadgeStatus",setup(t){return(l,e)=>(p(),b("div",Z,[n(s(r),{status:"success",text:"成功"}),n(s(r),{status:"error",text:"错误"}),n(s(r),{status:"default",text:"默认"}),n(s(r),{status:"processing",text:"进行中"}),n(s(r),{status:"warning",text:"警告"})]))}}),V=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Badge status="success" text="成功" />
    <Badge status="error" text="错误" />
    <Badge status="default" text="默认" />
    <Badge status="processing" text="进行中" />
    <Badge status="warning" text="警告" />
  </div>
</template>

<script setup lang="ts">
import { Badge } from 'ant-design-hmfw'
<\/script>
`,A={class:"markdown-body"},O={__name:"badge",setup(t,{expose:l}){return l({frontmatter:{}}),(g,d)=>{const i=w("DemoBlock");return p(),b("div",A,[d[0]||(d[0]=o("h1",{id:"badge-",tabindex:"-1"},"Badge 徽标数",-1)),d[1]||(d[1]=o("p",null,"图标右上角的圆形徽标数字。",-1)),d[2]||(d[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),d[3]||(d[3]=o("ul",null,[o("li",null,"当需要在图标或文字旁边展示数字或状态时"),o("li",null,"用于消息提醒、待办事项等场景")],-1)),d[4]||(d[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),d[5]||(d[5]=o("h3",{id:"-2",tabindex:"-1"},"基本用法",-1)),d[6]||(d[6]=o("p",null,"简单的徽章展示，当 count 为 0 时，默认不显示。",-1)),n(i,{title:"基本用法",source:s(_)},{default:a(()=>[n(S)]),_:1},8,["source"]),d[7]||(d[7]=o("h3",{id:"-3",tabindex:"-1"},"状态点",-1)),d[8]||(d[8]=o("p",null,"用于表示状态的小圆点。",-1)),n(i,{title:"状态点",source:s(V)},{default:a(()=>[n(E)]),_:1},8,["source"]),d[9]||(d[9]=o("h3",{id:"-4",tabindex:"-1"},"自定义颜色",-1)),d[10]||(d[10]=o("p",null,"可以自定义徽标的颜色。",-1)),n(i,{title:"自定义颜色",source:s(P)},{default:a(()=>[n(N)]),_:1},8,["source"]),d[11]||(d[11]=k('<h2 id="api" tabindex="-1">API</h2><h3 id="badge-props" tabindex="-1">Badge Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>count</td><td>展示的数字</td><td><code>number</code></td><td>-</td></tr><tr><td>dot</td><td>不展示数字，只有一个小红点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>overflowCount</td><td>展示封顶的数字值</td><td><code>number</code></td><td><code>99</code></td></tr><tr><td>showZero</td><td>当数值为 0 时，是否展示 Badge</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>status</td><td>设置 Badge 为状态点</td><td><code>&#39;success&#39; | &#39;processing&#39; | &#39;default&#39; | &#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>color</td><td>自定义小圆点的颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>offset</td><td>设置状态点的位置偏移</td><td><code>[number, number]</code></td><td>-</td></tr><tr><td>size</td><td>徽标大小</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>text</td><td>在设置了 status 的前提下有效，设置状态点的文本</td><td><code>string</code></td><td>-</td></tr></tbody></table>',3))])}}};export{O as default};
