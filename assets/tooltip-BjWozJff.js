import{T as i}from"./Tooltip-CpUH3BuM.js";import{m,y as r,g as b,P as l,f as o,I as d,i as s,l as n,F as c,D as h,H as g,E as T,j as x}from"./index-tBZazAzX.js";import"./cls-S9IiI6wd.js";const y=m({__name:"TooltipBasic",setup(a){return(p,e)=>(r(),b(d(i),{title:"这是提示文字"},{default:l(()=>[...e[0]||(e[0]=[o("button",null,"鼠标移入",-1)])]),_:1}))}}),_=`<template>
  <Tooltip title="这是提示文字">
    <button>鼠标移入</button>
  </Tooltip>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-hmfw'
<\/script>
`,v={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},w=m({__name:"TooltipCustomColor",setup(a){return(p,e)=>(r(),s("div",v,[n(d(i),{title:"粉色提示",color:"pink"},{default:l(()=>[...e[0]||(e[0]=[o("button",null,"粉色",-1)])]),_:1}),n(d(i),{title:"红色提示",color:"red"},{default:l(()=>[...e[1]||(e[1]=[o("button",null,"红色",-1)])]),_:1}),n(d(i),{title:"蓝色提示",color:"#1677ff"},{default:l(()=>[...e[2]||(e[2]=[o("button",null,"自定义蓝色",-1)])]),_:1}),n(d(i),{title:"绿色提示",color:"#52c41a"},{default:l(()=>[...e[3]||(e[3]=[o("button",null,"自定义绿色",-1)])]),_:1})]))}}),B=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Tooltip title="粉色提示" color="pink">
      <button>粉色</button>
    </Tooltip>
    <Tooltip title="红色提示" color="red">
      <button>红色</button>
    </Tooltip>
    <Tooltip title="蓝色提示" color="#1677ff">
      <button>自定义蓝色</button>
    </Tooltip>
    <Tooltip title="绿色提示" color="#52c41a">
      <button>自定义绿色</button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-hmfw'
<\/script>
`,k={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},C={style:{width:"100px"}},L=m({__name:"TooltipPlacement",setup(a){const p=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(e,f)=>(r(),s("div",k,[(r(),s(c,null,h(p,t=>n(d(i),{key:t,placement:t,title:"提示文字"},{default:l(()=>[o("button",C,g(t),1)]),_:2},1032,["placement"])),64))]))}}),R=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Tooltip
      v-for="placement in placements"
      :key="placement"
      :placement="placement"
      title="提示文字"
    >
      <button style="width: 100px;">{{ placement }}</button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-hmfw'

const placements = [
  'topLeft', 'top', 'topRight',
  'leftTop', 'left', 'leftBottom',
  'rightTop', 'right', 'rightBottom',
  'bottomLeft', 'bottom', 'bottomRight',
]
<\/script>
`,S={class:"markdown-body"},E={__name:"tooltip",setup(a,{expose:p}){return p({frontmatter:{}}),(f,t)=>{const u=T("DemoBlock");return r(),s("div",S,[t[0]||(t[0]=o("h1",{id:"tooltip-",tabindex:"-1"},"Tooltip 文字提示",-1)),t[1]||(t[1]=o("p",null,"简单的文字提示气泡框。",-1)),t[2]||(t[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=o("ul",null,[o("li",null,"鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作")],-1)),t[4]||(t[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=o("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=o("p",null,"最简单的用法。",-1)),n(u,{title:"基础用法",source:d(_)},{default:l(()=>[n(y)]),_:1},8,["source"]),t[7]||(t[7]=o("h3",{id:"-3",tabindex:"-1"},"十二个方向",-1)),t[8]||(t[8]=o("p",null,"位置有十二个方向。",-1)),n(u,{title:"十二个方向",source:d(R)},{default:l(()=>[n(L)]),_:1},8,["source"]),t[9]||(t[9]=o("h3",{id:"-4",tabindex:"-1"},"自定义颜色",-1)),t[10]||(t[10]=o("p",null,"自定义提示框颜色。",-1)),n(u,{title:"自定义颜色",source:d(B)},{default:l(()=>[n(w)]),_:1},8,["source"]),t[11]||(t[11]=x('<h2 id="api" tabindex="-1">API</h2><h3 id="tooltip-props" tabindex="-1">Tooltip Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>提示文字</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>placement</td><td>气泡框位置</td><td><code>&#39;top&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottom&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;left&#39; | &#39;leftTop&#39; | &#39;leftBottom&#39; | &#39;right&#39; | &#39;rightTop&#39; | &#39;rightBottom&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>trigger</td><td>触发行为</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39;</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>color</td><td>背景颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>arrow</td><td>是否显示箭头</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="tooltip-events" tabindex="-1">Tooltip Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="tooltip-slots" tabindex="-1">Tooltip Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发提示的元素</td></tr><tr><td>title</td><td>提示文字</td></tr></tbody></table>',7))])}}};export{E as default};
