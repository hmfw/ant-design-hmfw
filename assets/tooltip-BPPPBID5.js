import{T as r}from"./Tooltip-PG5UIiDT.js";import{m as u,y as p,g as b,P as n,f as o,I as l,i as s,l as e,F as f,D as g,H as h,E as T,j as x}from"./index-3tP9IO2U.js";import"./cls-S9IiI6wd.js";const y=u({__name:"TooltipBasic",setup(a){return(i,d)=>(p(),b(l(r),{title:"这是提示文字"},{default:n(()=>[...d[0]||(d[0]=[o("button",null,"鼠标移入",-1)])]),_:1}))}}),v=`<template>
  <Tooltip title="这是提示文字">
    <button>鼠标移入</button>
  </Tooltip>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-hmfw'
<\/script>
`,w={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},_=u({__name:"TooltipCustomColor",setup(a){return(i,d)=>(p(),s("div",w,[e(l(r),{title:"粉色提示",color:"pink"},{default:n(()=>[...d[0]||(d[0]=[o("button",null,"粉色",-1)])]),_:1}),e(l(r),{title:"红色提示",color:"red"},{default:n(()=>[...d[1]||(d[1]=[o("button",null,"红色",-1)])]),_:1}),e(l(r),{title:"蓝色提示",color:"#1677ff"},{default:n(()=>[...d[2]||(d[2]=[o("button",null,"自定义蓝色",-1)])]),_:1}),e(l(r),{title:"绿色提示",color:"#52c41a"},{default:n(()=>[...d[3]||(d[3]=[o("button",null,"自定义绿色",-1)])]),_:1})]))}}),B=`<template>
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
`,k={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},C={style:{width:"100px"}},L=u({__name:"TooltipPlacement",setup(a){const i=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(d,m)=>(p(),s("div",k,[(p(),s(f,null,g(i,t=>e(l(r),{key:t,placement:t,title:"提示文字"},{default:n(()=>[o("button",C,h(t),1)]),_:2},1032,["placement"])),64))]))}}),D=`<template>
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
`,O={class:"markdown-body"},P={__name:"tooltip",setup(a,{expose:i}){return i({frontmatter:{}}),(m,t)=>{const c=T("DemoBlock");return p(),s("div",O,[t[0]||(t[0]=o("h1",{id:"tooltip-",tabindex:"-1"},"Tooltip 文字提示",-1)),t[1]||(t[1]=o("p",null,"简单的文字提示气泡框。",-1)),t[2]||(t[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=o("ul",null,[o("li",null,"鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作")],-1)),t[4]||(t[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=o("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=o("p",null,"最简单的用法。",-1)),e(c,{title:"基础用法",source:l(v)},{default:n(()=>[e(y)]),_:1},8,["source"]),t[7]||(t[7]=o("h3",{id:"-3",tabindex:"-1"},"十二个方向",-1)),t[8]||(t[8]=o("p",null,"位置有十二个方向。",-1)),e(c,{title:"十二个方向",source:l(D)},{default:n(()=>[e(L)]),_:1},8,["source"]),t[9]||(t[9]=o("h3",{id:"-4",tabindex:"-1"},"自定义颜色",-1)),t[10]||(t[10]=o("p",null,"自定义提示框颜色。",-1)),e(c,{title:"自定义颜色",source:l(B)},{default:n(()=>[e(_)]),_:1},8,["source"]),t[11]||(t[11]=x('<h2 id="api" tabindex="-1">API</h2><h3 id="tooltip-props" tabindex="-1">Tooltip Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>提示文字（空值时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>overlay</td><td><code>title</code> 的别名（AntD 旧版兼容）</td><td>同 <code>title</code></td><td>-</td></tr><tr><td>placement</td><td>气泡框位置，溢出视口时自动翻转</td><td><code>&#39;top&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottom&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;left&#39; | &#39;leftTop&#39; | &#39;leftBottom&#39; | &#39;right&#39; | &#39;rightTop&#39; | &#39;rightBottom&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>trigger</td><td>触发行为，可设单值或数组</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39; | &#39;contextMenu&#39;</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示（非受控）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>color</td><td>背景颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>arrow</td><td>是否显示箭头，可对象配置</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入后延时显示，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出后延时隐藏，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>disabled</td><td>禁用 tooltip</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>autoAdjustOverflow</td><td>浮层超出视口时自动翻转方向</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>自定义浮层 z-index</td><td><code>number</code></td><td><code>1070</code></td></tr><tr><td>destroyOnHidden</td><td>隐藏时销毁浮层 DOM</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyTooltipOnHide</td><td>同 <code>destroyOnHidden</code>（旧名，已弃用）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getPopupContainer</td><td>自定义浮层挂载容器（默认 <code>body</code>）</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td>-</td></tr></tbody></table><h3 id="tooltip-events" tabindex="-1">Tooltip Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>显示隐藏的回调（v-model）</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>浮层动画结束时触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="tooltip-slots" tabindex="-1">Tooltip Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发提示的元素</td></tr><tr><td>title</td><td>提示文字（与 <code>title</code> prop 二选一）</td></tr></tbody></table>',7))])}}};export{P as default};
