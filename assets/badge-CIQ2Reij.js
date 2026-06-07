import{B as r}from"./index-BFAihb8D.js";import{n as g,z as a,j as l,m as n,J as o,Q as s,g as d,_ as x,G as c,l as b,k as f}from"./index-bv5A37HL.js";import"./cls-S9IiI6wd.js";const m={style:{display:"flex",gap:"24px"}},B=g({__name:"BadgeBasic",setup(p){return(i,e)=>(a(),l("div",m,[n(o(r),{count:5},{default:s(()=>[...e[0]||(e[0]=[d("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1}),n(o(r),{count:0,"show-zero":""},{default:s(()=>[...e[1]||(e[1]=[d("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1}),n(o(r),{count:99},{default:s(()=>[...e[2]||(e[2]=[d("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1}),n(o(r),{count:100},{default:s(()=>[...e[3]||(e[3]=[d("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1})]))}}),h=`<template>
  <div style="display: flex; gap: 24px">
    <Badge :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <Badge :count="0" show-zero>
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <Badge :count="99">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <Badge :count="100">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
  </div>
</template>

<script setup lang="ts">
import { Badge } from 'ant-design-hmfw'
<\/script>
`,v={style:{display:"flex",gap:"24px"}},y=g({__name:"BadgeCustomColor",setup(p){return(i,e)=>(a(),l("div",v,[n(o(r),{color:"#f50",count:5},{default:s(()=>[...e[0]||(e[0]=[d("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1}),n(o(r),{color:"#2db7f5",count:5},{default:s(()=>[...e[1]||(e[1]=[d("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1}),n(o(r),{color:"#87d068",count:5},{default:s(()=>[...e[2]||(e[2]=[d("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1})]))}}),w=`<template>
  <div style="display: flex; gap: 24px">
    <Badge color="#f50" :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <Badge color="#2db7f5" :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <Badge color="#87d068" :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
  </div>
</template>

<script setup lang="ts">
import { Badge } from 'ant-design-hmfw'
<\/script>
`,_={style:{display:"flex",gap:"32px","flex-wrap":"wrap"}},k=g({__name:"BadgeRibbon",setup(p){return(i,e)=>(a(),l("div",_,[n(o(r).Ribbon,{text:"Hippies"},{default:s(()=>[...e[0]||(e[0]=[d("div",{class:"ribbon-card"},"缎带在右侧（默认）",-1)])]),_:1}),n(o(r).Ribbon,{text:"Pies",color:"green",placement:"start"},{default:s(()=>[...e[1]||(e[1]=[d("div",{class:"ribbon-card"},"缎带在左侧 + 预设色",-1)])]),_:1}),n(o(r).Ribbon,{text:"Custom",color:"#2db7f5"},{default:s(()=>[...e[2]||(e[2]=[d("div",{class:"ribbon-card"},"自定义颜色",-1)])]),_:1})]))}}),R=x(k,[["__scopeId","data-v-59f1f767"]]),C=`<template>
  <div style="display: flex; gap: 32px; flex-wrap: wrap">
    <Badge.Ribbon text="Hippies">
      <div class="ribbon-card">缎带在右侧（默认）</div>
    </Badge.Ribbon>

    <Badge.Ribbon text="Pies" color="green" placement="start">
      <div class="ribbon-card">缎带在左侧 + 预设色</div>
    </Badge.Ribbon>

    <Badge.Ribbon text="Custom" color="#2db7f5">
      <div class="ribbon-card">自定义颜色</div>
    </Badge.Ribbon>
  </div>
</template>

<script setup lang="ts">
import { Badge } from 'ant-design-hmfw'
<\/script>

<style scoped>
.ribbon-card {
  width: 180px;
  height: 64px;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 6px;
}
</style>
`,$={style:{display:"flex","flex-direction":"column",gap:"16px"}},S=g({__name:"BadgeStatus",setup(p){return(i,e)=>(a(),l("div",$,[n(o(r),{status:"success",text:"成功"}),n(o(r),{status:"error",text:"错误"}),n(o(r),{status:"default",text:"默认"}),n(o(r),{status:"processing",text:"进行中"}),n(o(r),{status:"warning",text:"警告"})]))}}),P=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
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
`,z={class:"markdown-body"},I={__name:"badge",setup(p,{expose:i}){return i({frontmatter:{}}),(N,t)=>{const u=c("DemoBlock");return a(),l("div",z,[t[0]||(t[0]=d("h1",{id:"badge-",tabindex:"-1"},"Badge 徽标数",-1)),t[1]||(t[1]=d("p",null,"图标右上角的圆形徽标数字。",-1)),t[2]||(t[2]=d("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=d("ul",null,[d("li",null,"当需要在图标或文字旁边展示数字或状态时"),d("li",null,"用于消息提醒、待办事项等场景")],-1)),t[4]||(t[4]=d("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=d("h3",{id:"-2",tabindex:"-1"},"基本用法",-1)),t[6]||(t[6]=d("p",null,"简单的徽章展示，当 count 为 0 时，默认不显示。",-1)),n(u,{title:"基本用法",source:o(h)},{default:s(()=>[n(B)]),_:1},8,["source"]),t[7]||(t[7]=d("h3",{id:"-3",tabindex:"-1"},"状态点",-1)),t[8]||(t[8]=d("p",null,"用于表示状态的小圆点。",-1)),n(u,{title:"状态点",source:o(P)},{default:s(()=>[n(S)]),_:1},8,["source"]),t[9]||(t[9]=d("h3",{id:"-4",tabindex:"-1"},"自定义颜色",-1)),t[10]||(t[10]=d("p",null,"可以自定义徽标的颜色。",-1)),n(u,{title:"自定义颜色",source:o(w)},{default:s(()=>[n(y)]),_:1},8,["source"]),t[11]||(t[11]=d("h3",{id:"-5",tabindex:"-1"},"缎带",-1)),t[12]||(t[12]=d("p",null,[b("使用 "),d("code",null,"Badge.Ribbon"),b(" 展示缎带样式标记。")],-1)),n(u,{title:"缎带",source:o(C)},{default:s(()=>[n(R)]),_:1},8,["source"]),t[13]||(t[13]=f('<h2 id="api" tabindex="-1">API</h2><h3 id="badge-props" tabindex="-1">Badge Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>count</td><td>展示的数字</td><td><code>number | string</code></td><td>-</td></tr><tr><td>dot</td><td>不展示数字，只有一个小红点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>overflowCount</td><td>展示封顶的数字值</td><td><code>number</code></td><td><code>99</code></td></tr><tr><td>showZero</td><td>当数值为 0 时，是否展示 Badge</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>status</td><td>设置 Badge 为状态点</td><td><code>&#39;success&#39; | &#39;processing&#39; | &#39;default&#39; | &#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>color</td><td>自定义小圆点的颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>offset</td><td>设置状态点的位置偏移</td><td><code>[number, number]</code></td><td>-</td></tr><tr><td>size</td><td>徽标大小</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>text</td><td>在设置了 status 的前提下有效，设置状态点的文本</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>鼠标悬停时的提示文字</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="badgeribbon-props" tabindex="-1">Badge.Ribbon Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>缎带内容</td><td><code>string</code></td><td>-</td></tr><tr><td>color</td><td>缎带颜色（预设色或自定义色值）</td><td><code>string</code></td><td>-</td></tr><tr><td>placement</td><td>缎带位置</td><td><code>&#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;end&#39;</code></td></tr></tbody></table>',5))])}}};export{I as default};
