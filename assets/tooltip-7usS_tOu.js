import{B as s}from"./Button-Dov5fw3V.js";import{T as a}from"./Tooltip-B2yh6S5Y.js";import{o as g,A as u,k as m,h as n,m as i,n as o,K as d,R as l,_ as h,i as T,J as b,E as x,f as y,v as B,F as _,G as w,H as C,l as L}from"./index-C69_RY61.js";import"./cls-S9IiI6wd.js";import"./Icon-Bvf6WoCy.js";import"./LoadingOutlined-De7mgAt0.js";const R={class:"demo-arrow-center"},k={class:"demo-row"},A={class:"demo-item"},$={class:"demo-item"},D={class:"demo-row",style:{"margin-top":"80px"}},O={class:"demo-item"},S={class:"demo-item"},z=g({__name:"TooltipArrowCenter",setup(c){return(r,e)=>(u(),m("div",R,[e[6]||(e[6]=n("p",null,[i("设置 "),n("code",null,"arrow.pointAtCenter"),i(" 可以让箭头始终指向触发元素的中心。")],-1)),n("div",k,[n("div",A,[e[1]||(e[1]=n("h4",null,"默认箭头位置",-1)),o(d(a),{title:"默认箭头跟随浮层边缘",placement:"topLeft"},{default:l(()=>[o(d(s),{style:{width:"200px"}},{default:l(()=>[...e[0]||(e[0]=[i("长按钮 - 默认箭头",-1)])]),_:1})]),_:1})]),n("div",$,[e[3]||(e[3]=n("h4",null,"箭头居中",-1)),o(d(a),{title:"箭头指向按钮中心",placement:"topLeft",arrow:{pointAtCenter:!0}},{default:l(()=>[o(d(s),{style:{width:"200px"}},{default:l(()=>[...e[2]||(e[2]=[i("长按钮 - 箭头居中",-1)])]),_:1})]),_:1})])]),n("div",D,[n("div",O,[o(d(a),{title:"bottomRight 默认",placement:"bottomRight"},{default:l(()=>[o(d(s),{style:{width:"200px"}},{default:l(()=>[...e[4]||(e[4]=[i("bottomRight - 默认",-1)])]),_:1})]),_:1})]),n("div",S,[o(d(a),{title:"bottomRight 居中",placement:"bottomRight",arrow:{pointAtCenter:!0}},{default:l(()=>[o(d(s),{style:{width:"200px"}},{default:l(()=>[...e[5]||(e[5]=[i("bottomRight - 居中",-1)])]),_:1})]),_:1})])])]))}}),N=h(z,[["__scopeId","data-v-fee5784d"]]),E=`<template>
  <div class="demo-arrow-center">
    <p>设置 <code>arrow.pointAtCenter</code> 可以让箭头始终指向触发元素的中心。</p>
    <div class="demo-row">
      <div class="demo-item">
        <h4>默认箭头位置</h4>
        <Tooltip title="默认箭头跟随浮层边缘" placement="topLeft">
          <Button style="width: 200px">长按钮 - 默认箭头</Button>
        </Tooltip>
      </div>
      <div class="demo-item">
        <h4>箭头居中</h4>
        <Tooltip title="箭头指向按钮中心" placement="topLeft" :arrow="{ pointAtCenter: true }">
          <Button style="width: 200px">长按钮 - 箭头居中</Button>
        </Tooltip>
      </div>
    </div>
    <div class="demo-row" style="margin-top: 80px">
      <div class="demo-item">
        <Tooltip title="bottomRight 默认" placement="bottomRight">
          <Button style="width: 200px">bottomRight - 默认</Button>
        </Tooltip>
      </div>
      <div class="demo-item">
        <Tooltip title="bottomRight 居中" placement="bottomRight" :arrow="{ pointAtCenter: true }">
          <Button style="width: 200px">bottomRight - 居中</Button>
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tooltip, Button } from 'ant-design-hmfw'
<\/script>

<style scoped>
.demo-arrow-center {
  padding: 20px;
}
.demo-row {
  display: flex;
  gap: 40px;
}
.demo-item {
  flex: 1;
}
.demo-item h4 {
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
}
</style>
`,H=g({__name:"TooltipBasic",setup(c){return(r,e)=>(u(),T(d(a),{title:"这是提示文字"},{default:l(()=>[o(d(s),null,{default:l(()=>[...e[0]||(e[0]=[i("鼠标移入",-1)])]),_:1})]),_:1}))}}),V=`<template>
  <Tooltip title="这是提示文字">
    <Button>鼠标移入</Button>
  </Tooltip>
</template>

<script setup lang="ts">
import { Tooltip, Button } from 'ant-design-hmfw'
<\/script>
`,F={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},I=g({__name:"TooltipCustomColor",setup(c){return(r,e)=>(u(),m("div",F,[o(d(a),{title:"粉色提示",color:"pink"},{default:l(()=>[o(d(s),null,{default:l(()=>[...e[0]||(e[0]=[i("粉色",-1)])]),_:1})]),_:1}),o(d(a),{title:"红色提示",color:"red"},{default:l(()=>[o(d(s),null,{default:l(()=>[...e[1]||(e[1]=[i("红色",-1)])]),_:1})]),_:1}),o(d(a),{title:"蓝色提示",color:"#1677ff"},{default:l(()=>[o(d(s),null,{default:l(()=>[...e[2]||(e[2]=[i("自定义蓝色",-1)])]),_:1})]),_:1}),o(d(a),{title:"绿色提示",color:"#52c41a"},{default:l(()=>[o(d(s),null,{default:l(()=>[...e[3]||(e[3]=[i("自定义绿色",-1)])]),_:1})]),_:1})]))}}),P=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Tooltip title="粉色提示" color="pink">
      <Button>粉色</Button>
    </Tooltip>
    <Tooltip title="红色提示" color="red">
      <Button>红色</Button>
    </Tooltip>
    <Tooltip title="蓝色提示" color="#1677ff">
      <Button>自定义蓝色</Button>
    </Tooltip>
    <Tooltip title="绿色提示" color="#52c41a">
      <Button>自定义绿色</Button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip, Button } from 'ant-design-hmfw'
<\/script>
`,M={class:"demo-dynamic-content"},j={style:{display:"flex",gap:"20px","margin-top":"20px"}},G=g({__name:"TooltipDynamicContent",setup(c){const r=x(!1),e=x(!1),v=y(()=>e.value?"这是一段很长的提示文字，用于演示当内容动态变化时，浮层位置会自动重新计算，确保不会溢出视口边界，提供更好的用户体验。":"短提示"),t=()=>{e.value=!e.value};return(p,f)=>(u(),m("div",M,[f[1]||(f[1]=n("p",null,"当浮层内容动态变化时，Tooltip 会通过 ResizeObserver 自动重新计算位置，确保浮层不会溢出视口。",-1)),n("div",j,[o(d(a),{title:v.value,placement:"top",open:r.value},{default:l(()=>[o(d(s),{onClick:f[0]||(f[0]=ot=>r.value=!r.value)},{default:l(()=>[i(b(r.value?"关闭":"打开")+"提示",1)]),_:1})]),_:1},8,["title","open"]),o(d(s),{onClick:t},{default:l(()=>[i(b(e.value?"切换为短内容":"切换为长内容"),1)]),_:1})]),f[2]||(f[2]=n("p",{style:{"margin-top":"20px",color:"#666","font-size":"12px"}},"提示：打开浮层后切换内容长度，浮层位置会自动调整",-1))]))}}),J=h(G,[["__scopeId","data-v-22696618"]]),K=`<template>
  <div class="demo-dynamic-content">
    <p>当浮层内容动态变化时，Tooltip 会通过 ResizeObserver 自动重新计算位置，确保浮层不会溢出视口。</p>

    <div style="display: flex; gap: 20px; margin-top: 20px">
      <Tooltip :title="tooltipContent" placement="top" :open="open">
        <Button @click="open = !open">{{ open ? '关闭' : '打开' }}提示</Button>
      </Tooltip>

      <Button @click="toggleContent">
        {{ isLongContent ? '切换为短内容' : '切换为长内容' }}
      </Button>
    </div>

    <p style="margin-top: 20px; color: #666; font-size: 12px">提示：打开浮层后切换内容长度，浮层位置会自动调整</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Tooltip, Button } from 'ant-design-hmfw'

const open = ref(false)
const isLongContent = ref(false)

const tooltipContent = computed(() => {
  return isLongContent.value
    ? '这是一段很长的提示文字，用于演示当内容动态变化时，浮层位置会自动重新计算，确保不会溢出视口边界，提供更好的用户体验。'
    : '短提示'
})

const toggleContent = () => {
  isLongContent.value = !isLongContent.value
}
<\/script>

<style scoped>
.demo-dynamic-content {
  padding: 20px;
}
</style>
`,q={class:"demo-fresh"},Q=g({__name:"TooltipFresh",setup(c){const r=x(0),e=x(0),v=()=>{r.value=r.value===0?100:0,e.value++};return(t,p)=>(u(),m("div",q,[p[2]||(p[2]=n("p",null,"fresh 属性用于强制重新计算浮层位置，适用于触发元素位置动态变化的场景。",-1)),n("div",{class:"moving-container",style:B({marginLeft:r.value+"px"})},[o(d(a),{title:"我会跟随按钮移动",fresh:e.value},{default:l(()=>[o(d(s),null,{default:l(()=>[...p[0]||(p[0]=[i("悬停查看提示",-1)])]),_:1})]),_:1},8,["fresh"])],4),o(d(s),{style:{"margin-top":"20px"},onClick:v},{default:l(()=>[...p[1]||(p[1]=[i("移动按钮",-1)])]),_:1})]))}}),U=h(Q,[["__scopeId","data-v-320802b3"]]),W=`<template>
  <div class="demo-fresh">
    <p>fresh 属性用于强制重新计算浮层位置，适用于触发元素位置动态变化的场景。</p>
    <div class="moving-container" :style="{ marginLeft: offset + 'px' }">
      <Tooltip title="我会跟随按钮移动" :fresh="fresh">
        <Button>悬停查看提示</Button>
      </Tooltip>
    </div>
    <Button style="margin-top: 20px" @click="moveButton">移动按钮</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tooltip, Button } from 'ant-design-hmfw'

const offset = ref(0)
const fresh = ref(0)

const moveButton = () => {
  offset.value = offset.value === 0 ? 100 : 0
  // 触发 fresh 变化，强制重新计算位置
  fresh.value++
}
<\/script>

<style scoped>
.demo-fresh {
  padding: 20px;
}
.moving-container {
  transition: margin-left 0.3s;
  display: inline-block;
}
</style>
`,X={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},Y=g({__name:"TooltipPlacement",setup(c){const r=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(e,v)=>(u(),m("div",X,[(u(),m(_,null,w(r,t=>o(d(a),{key:t,placement:t,title:"提示文字"},{default:l(()=>[o(d(s),{style:{width:"100px"}},{default:l(()=>[i(b(t),1)]),_:2},1024)]),_:2},1032,["placement"])),64))]))}}),Z=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Tooltip v-for="placement in placements" :key="placement" :placement="placement" title="提示文字">
      <Button style="width: 100px">
        {{ placement }}
      </Button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip, Button } from 'ant-design-hmfw'

const placements = [
  'topLeft',
  'top',
  'topRight',
  'leftTop',
  'left',
  'leftBottom',
  'rightTop',
  'right',
  'rightBottom',
  'bottomLeft',
  'bottom',
  'bottomRight',
]
<\/script>
`,tt={class:"markdown-body"},pt={__name:"tooltip",setup(c,{expose:r}){return r({frontmatter:{}}),(v,t)=>{const p=C("DemoBlock");return u(),m("div",tt,[t[0]||(t[0]=n("h1",{id:"tooltip-文字提示",tabindex:"-1"},"Tooltip 文字提示",-1)),t[1]||(t[1]=n("p",null,"简单的文字提示气泡框。",-1)),t[2]||(t[2]=n("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作")],-1)),t[4]||(t[4]=n("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=n("p",null,"最简单的用法。",-1)),o(p,{title:"基础用法",source:d(V)},{default:l(()=>[o(H)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"十二个方向",tabindex:"-1"},"十二个方向",-1)),t[8]||(t[8]=n("p",null,"位置有十二个方向。",-1)),o(p,{title:"十二个方向",source:d(Z)},{default:l(()=>[o(Y)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"自定义颜色",tabindex:"-1"},"自定义颜色",-1)),t[10]||(t[10]=n("p",null,"自定义提示框颜色。",-1)),o(p,{title:"自定义颜色",source:d(P)},{default:l(()=>[o(I)]),_:1},8,["source"]),t[11]||(t[11]=n("h3",{id:"箭头居中",tabindex:"-1"},"箭头居中",-1)),t[12]||(t[12]=n("p",null,[i("设置 "),n("code",null,"arrow.pointAtCenter"),i(" 可以让箭头始终指向触发元素的中心。")],-1)),o(p,{title:"箭头居中",source:d(E)},{default:l(()=>[o(N)]),_:1},8,["source"]),t[13]||(t[13]=n("h3",{id:"强制重新计算位置",tabindex:"-1"},"强制重新计算位置",-1)),t[14]||(t[14]=n("p",null,[i("使用 "),n("code",null,"fresh"),i(" 属性可以强制重新计算浮层位置，适用于触发元素位置动态变化的场景。")],-1)),o(p,{title:"强制重新计算位置",source:d(W)},{default:l(()=>[o(U)]),_:1},8,["source"]),t[15]||(t[15]=n("h3",{id:"动态内容自适应",tabindex:"-1"},"动态内容自适应",-1)),t[16]||(t[16]=n("p",null,"当浮层内容动态变化时，Tooltip 会自动重新计算位置，确保浮层不会溢出视口。",-1)),o(p,{title:"动态内容自适应",source:d(K)},{default:l(()=>[o(J)]),_:1},8,["source"]),t[17]||(t[17]=L('<h2 id="api" tabindex="-1">API</h2><h3 id="tooltip-props" tabindex="-1">Tooltip Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>提示文字（空值时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>overlay</td><td><code>title</code> 的别名（AntD 旧版兼容）</td><td>同 <code>title</code></td><td>-</td></tr><tr><td>placement</td><td>气泡框位置，溢出视口时自动翻转</td><td><code>&#39;top&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottom&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;left&#39; | &#39;leftTop&#39; | &#39;leftBottom&#39; | &#39;right&#39; | &#39;rightTop&#39; | &#39;rightBottom&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>trigger</td><td>触发行为，可设单值或数组</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39; | &#39;contextMenu&#39;</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示（非受控）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>color</td><td>背景颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>arrow</td><td>是否显示箭头，可对象配置 <code>{ pointAtCenter?: boolean }</code> 使箭头指向元素中心</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入后延时显示，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出后延时隐藏，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>disabled</td><td>禁用 tooltip</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>fresh</td><td>强制重新计算浮层位置（变化时触发重新定位）</td><td><code>number | string</code></td><td>-</td></tr><tr><td>autoAdjustOverflow</td><td>浮层超出视口时自动翻转方向</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>自定义浮层 z-index</td><td><code>number</code></td><td><code>1070</code></td></tr><tr><td>destroyOnHidden</td><td>隐藏时销毁浮层 DOM</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyTooltipOnHide</td><td>同 <code>destroyOnHidden</code>（旧名，已弃用）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getPopupContainer</td><td>自定义浮层挂载容器（默认 <code>body</code>）</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td>-</td></tr></tbody></table><h3 id="tooltip-events" tabindex="-1">Tooltip Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>显示隐藏的回调（v-model）</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>浮层动画结束时触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="tooltip-slots" tabindex="-1">Tooltip Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发提示的元素</td></tr><tr><td>title</td><td>提示文字（与 <code>title</code> prop 二选一）</td></tr></tbody></table><h2 id="特性说明" tabindex="-1">特性说明</h2><h3 id="自动定位更新" tabindex="-1">自动定位更新</h3><p>Tooltip 使用 ResizeObserver 监听浮层内容尺寸变化，当内容动态变化时会自动重新计算位置，确保浮层不会溢出视口边界。</p><h3 id="箭头居中-1" tabindex="-1">箭头居中</h3><p>设置 <code>arrow: { pointAtCenter: true }</code> 可以让箭头始终指向触发元素的中心位置，而不是跟随浮层边缘。这在触发元素较宽或使用 <code>topLeft</code>、<code>bottomRight</code> 等偏移位置时特别有用。</p><h3 id="强制重新定位" tabindex="-1">强制重新定位</h3><p>通过改变 <code>fresh</code> 属性的值（通常使用递增的数字），可以强制 Tooltip 重新计算浮层位置。这在触发元素位置动态变化（如动画、拖拽）时很有用。</p>',14))])}}};export{pt as default};
