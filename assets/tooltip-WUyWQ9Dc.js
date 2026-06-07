import{T as p}from"./Tooltip-BZ8tYCf1.js";import{n as f,z as s,j as a,g as t,l as c,m as n,J as d,Q as l,_ as x,h,I as v,D as g,e as T,u as y,F as w,E as _,G as C,k as L}from"./index-bv5A37HL.js";import"./cls-S9IiI6wd.js";const R={class:"demo-arrow-center"},k={class:"demo-row"},B={class:"demo-item"},A={class:"demo-item"},$={class:"demo-row",style:{"margin-top":"80px"}},D={class:"demo-item"},z={class:"demo-item"},O=f({__name:"TooltipArrowCenter",setup(m){return(i,e)=>(s(),a("div",R,[e[6]||(e[6]=t("p",null,[c("设置 "),t("code",null,"arrow.pointAtCenter"),c(" 可以让箭头始终指向触发元素的中心。")],-1)),t("div",k,[t("div",B,[e[1]||(e[1]=t("h4",null,"默认箭头位置",-1)),n(d(p),{title:"默认箭头跟随浮层边缘",placement:"topLeft"},{default:l(()=>[...e[0]||(e[0]=[t("button",{style:{width:"200px"}},"长按钮 - 默认箭头",-1)])]),_:1})]),t("div",A,[e[3]||(e[3]=t("h4",null,"箭头居中",-1)),n(d(p),{title:"箭头指向按钮中心",placement:"topLeft",arrow:{pointAtCenter:!0}},{default:l(()=>[...e[2]||(e[2]=[t("button",{style:{width:"200px"}},"长按钮 - 箭头居中",-1)])]),_:1})])]),t("div",$,[t("div",D,[n(d(p),{title:"bottomRight 默认",placement:"bottomRight"},{default:l(()=>[...e[4]||(e[4]=[t("button",{style:{width:"200px"}},"bottomRight - 默认",-1)])]),_:1})]),t("div",z,[n(d(p),{title:"bottomRight 居中",placement:"bottomRight",arrow:{pointAtCenter:!0}},{default:l(()=>[...e[5]||(e[5]=[t("button",{style:{width:"200px"}},"bottomRight - 居中",-1)])]),_:1})])])]))}}),S=x(O,[["__scopeId","data-v-e09df195"]]),N=`<template>
  <div class="demo-arrow-center">
    <p>设置 <code>arrow.pointAtCenter</code> 可以让箭头始终指向触发元素的中心。</p>
    <div class="demo-row">
      <div class="demo-item">
        <h4>默认箭头位置</h4>
        <Tooltip title="默认箭头跟随浮层边缘" placement="topLeft">
          <button style="width: 200px">长按钮 - 默认箭头</button>
        </Tooltip>
      </div>
      <div class="demo-item">
        <h4>箭头居中</h4>
        <Tooltip title="箭头指向按钮中心" placement="topLeft" :arrow="{ pointAtCenter: true }">
          <button style="width: 200px">长按钮 - 箭头居中</button>
        </Tooltip>
      </div>
    </div>
    <div class="demo-row" style="margin-top: 80px">
      <div class="demo-item">
        <Tooltip title="bottomRight 默认" placement="bottomRight">
          <button style="width: 200px">bottomRight - 默认</button>
        </Tooltip>
      </div>
      <div class="demo-item">
        <Tooltip title="bottomRight 居中" placement="bottomRight" :arrow="{ pointAtCenter: true }">
          <button style="width: 200px">bottomRight - 居中</button>
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-hmfw'
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
`,E=f({__name:"TooltipBasic",setup(m){return(i,e)=>(s(),h(d(p),{title:"这是提示文字"},{default:l(()=>[...e[0]||(e[0]=[t("button",null,"鼠标移入",-1)])]),_:1}))}}),I=`<template>
  <Tooltip title="这是提示文字">
    <button>鼠标移入</button>
  </Tooltip>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-hmfw'
<\/script>
`,V={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},F=f({__name:"TooltipCustomColor",setup(m){return(i,e)=>(s(),a("div",V,[n(d(p),{title:"粉色提示",color:"pink"},{default:l(()=>[...e[0]||(e[0]=[t("button",null,"粉色",-1)])]),_:1}),n(d(p),{title:"红色提示",color:"red"},{default:l(()=>[...e[1]||(e[1]=[t("button",null,"红色",-1)])]),_:1}),n(d(p),{title:"蓝色提示",color:"#1677ff"},{default:l(()=>[...e[2]||(e[2]=[t("button",null,"自定义蓝色",-1)])]),_:1}),n(d(p),{title:"绿色提示",color:"#52c41a"},{default:l(()=>[...e[3]||(e[3]=[t("button",null,"自定义绿色",-1)])]),_:1})]))}}),H=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
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
`,P={class:"demo-dynamic-content"},M={style:{display:"flex",gap:"20px","margin-top":"20px"}},j=f({__name:"TooltipDynamicContent",setup(m){const i=g(!1),e=g(!1),b=T(()=>e.value?"这是一段很长的提示文字，用于演示当内容动态变化时，浮层位置会自动重新计算，确保不会溢出视口边界，提供更好的用户体验。":"短提示"),o=()=>{e.value=!e.value};return(r,u)=>(s(),a("div",P,[u[1]||(u[1]=t("p",null,"当浮层内容动态变化时，Tooltip 会通过 ResizeObserver 自动重新计算位置，确保浮层不会溢出视口。",-1)),t("div",M,[n(d(p),{title:b.value,placement:"top",open:i.value},{default:l(()=>[t("button",{onClick:u[0]||(u[0]=ot=>i.value=!i.value)},v(i.value?"关闭":"打开")+"提示",1)]),_:1},8,["title","open"]),t("button",{onClick:o},v(e.value?"切换为短内容":"切换为长内容"),1)]),u[2]||(u[2]=t("p",{style:{"margin-top":"20px",color:"#666","font-size":"12px"}},"提示：打开浮层后切换内容长度，浮层位置会自动调整",-1))]))}}),G=x(j,[["__scopeId","data-v-52a5bf78"]]),J=`<template>
  <div class="demo-dynamic-content">
    <p>当浮层内容动态变化时，Tooltip 会通过 ResizeObserver 自动重新计算位置，确保浮层不会溢出视口。</p>

    <div style="display: flex; gap: 20px; margin-top: 20px">
      <Tooltip :title="tooltipContent" placement="top" :open="open">
        <button @click="open = !open">{{ open ? '关闭' : '打开' }}提示</button>
      </Tooltip>

      <button @click="toggleContent">
        {{ isLongContent ? '切换为短内容' : '切换为长内容' }}
      </button>
    </div>

    <p style="margin-top: 20px; color: #666; font-size: 12px">提示：打开浮层后切换内容长度，浮层位置会自动调整</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Tooltip } from 'ant-design-hmfw'

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
`,Q={class:"demo-fresh"},q=f({__name:"TooltipFresh",setup(m){const i=g(0),e=g(0),b=()=>{i.value=i.value===0?100:0,e.value++};return(o,r)=>(s(),a("div",Q,[r[1]||(r[1]=t("p",null,"fresh 属性用于强制重新计算浮层位置，适用于触发元素位置动态变化的场景。",-1)),t("div",{class:"moving-container",style:y({marginLeft:i.value+"px"})},[n(d(p),{title:"我会跟随按钮移动",fresh:e.value},{default:l(()=>[...r[0]||(r[0]=[t("button",null,"悬停查看提示",-1)])]),_:1},8,["fresh"])],4),t("button",{style:{"margin-top":"20px"},onClick:b},"移动按钮")]))}}),K=x(q,[["__scopeId","data-v-f46b610f"]]),U=`<template>
  <div class="demo-fresh">
    <p>fresh 属性用于强制重新计算浮层位置，适用于触发元素位置动态变化的场景。</p>
    <div class="moving-container" :style="{ marginLeft: offset + 'px' }">
      <Tooltip title="我会跟随按钮移动" :fresh="fresh">
        <button>悬停查看提示</button>
      </Tooltip>
    </div>
    <button style="margin-top: 20px" @click="moveButton">移动按钮</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tooltip } from 'ant-design-hmfw'

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
`,W={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},X={style:{width:"100px"}},Y=f({__name:"TooltipPlacement",setup(m){const i=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(e,b)=>(s(),a("div",W,[(s(),a(w,null,_(i,o=>n(d(p),{key:o,placement:o,title:"提示文字"},{default:l(()=>[t("button",X,v(o),1)]),_:2},1032,["placement"])),64))]))}}),Z=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Tooltip v-for="placement in placements" :key="placement" :placement="placement" title="提示文字">
      <button style="width: 100px">
        {{ placement }}
      </button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-hmfw'

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
`,tt={class:"markdown-body"},lt={__name:"tooltip",setup(m,{expose:i}){return i({frontmatter:{}}),(b,o)=>{const r=C("DemoBlock");return s(),a("div",tt,[o[0]||(o[0]=t("h1",{id:"tooltip-",tabindex:"-1"},"Tooltip 文字提示",-1)),o[1]||(o[1]=t("p",null,"简单的文字提示气泡框。",-1)),o[2]||(o[2]=t("h2",{id:"",tabindex:"-1"},"何时使用",-1)),o[3]||(o[3]=t("ul",null,[t("li",null,"鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作")],-1)),o[4]||(o[4]=t("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),o[5]||(o[5]=t("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),o[6]||(o[6]=t("p",null,"最简单的用法。",-1)),n(r,{title:"基础用法",source:d(I)},{default:l(()=>[n(E)]),_:1},8,["source"]),o[7]||(o[7]=t("h3",{id:"-3",tabindex:"-1"},"十二个方向",-1)),o[8]||(o[8]=t("p",null,"位置有十二个方向。",-1)),n(r,{title:"十二个方向",source:d(Z)},{default:l(()=>[n(Y)]),_:1},8,["source"]),o[9]||(o[9]=t("h3",{id:"-4",tabindex:"-1"},"自定义颜色",-1)),o[10]||(o[10]=t("p",null,"自定义提示框颜色。",-1)),n(r,{title:"自定义颜色",source:d(H)},{default:l(()=>[n(F)]),_:1},8,["source"]),o[11]||(o[11]=t("h3",{id:"-5",tabindex:"-1"},"箭头居中",-1)),o[12]||(o[12]=t("p",null,[c("设置 "),t("code",null,"arrow.pointAtCenter"),c(" 可以让箭头始终指向触发元素的中心。")],-1)),n(r,{title:"箭头居中",source:d(N)},{default:l(()=>[n(S)]),_:1},8,["source"]),o[13]||(o[13]=t("h3",{id:"-6",tabindex:"-1"},"强制重新计算位置",-1)),o[14]||(o[14]=t("p",null,[c("使用 "),t("code",null,"fresh"),c(" 属性可以强制重新计算浮层位置，适用于触发元素位置动态变化的场景。")],-1)),n(r,{title:"强制重新计算位置",source:d(U)},{default:l(()=>[n(K)]),_:1},8,["source"]),o[15]||(o[15]=t("h3",{id:"-7",tabindex:"-1"},"动态内容自适应",-1)),o[16]||(o[16]=t("p",null,"当浮层内容动态变化时，Tooltip 会自动重新计算位置，确保浮层不会溢出视口。",-1)),n(r,{title:"动态内容自适应",source:d(J)},{default:l(()=>[n(G)]),_:1},8,["source"]),o[17]||(o[17]=L('<h2 id="api" tabindex="-1">API</h2><h3 id="tooltip-props" tabindex="-1">Tooltip Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>提示文字（空值时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>overlay</td><td><code>title</code> 的别名（AntD 旧版兼容）</td><td>同 <code>title</code></td><td>-</td></tr><tr><td>placement</td><td>气泡框位置，溢出视口时自动翻转</td><td><code>&#39;top&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottom&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;left&#39; | &#39;leftTop&#39; | &#39;leftBottom&#39; | &#39;right&#39; | &#39;rightTop&#39; | &#39;rightBottom&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>trigger</td><td>触发行为，可设单值或数组</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39; | &#39;contextMenu&#39;</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示（非受控）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>color</td><td>背景颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>arrow</td><td>是否显示箭头，可对象配置 <code>{ pointAtCenter?: boolean }</code> 使箭头指向元素中心</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入后延时显示，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出后延时隐藏，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>disabled</td><td>禁用 tooltip</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>fresh</td><td>强制重新计算浮层位置（变化时触发重新定位）</td><td><code>number | string</code></td><td>-</td></tr><tr><td>autoAdjustOverflow</td><td>浮层超出视口时自动翻转方向</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>自定义浮层 z-index</td><td><code>number</code></td><td><code>1070</code></td></tr><tr><td>destroyOnHidden</td><td>隐藏时销毁浮层 DOM</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyTooltipOnHide</td><td>同 <code>destroyOnHidden</code>（旧名，已弃用）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getPopupContainer</td><td>自定义浮层挂载容器（默认 <code>body</code>）</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td>-</td></tr></tbody></table><h3 id="tooltip-events" tabindex="-1">Tooltip Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>显示隐藏的回调（v-model）</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>浮层动画结束时触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="tooltip-slots" tabindex="-1">Tooltip Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发提示的元素</td></tr><tr><td>title</td><td>提示文字（与 <code>title</code> prop 二选一）</td></tr></tbody></table><h2 id="-8" tabindex="-1">特性说明</h2><h3 id="-9" tabindex="-1">自动定位更新</h3><p>Tooltip 使用 ResizeObserver 监听浮层内容尺寸变化，当内容动态变化时会自动重新计算位置，确保浮层不会溢出视口边界。</p><h3 id="-10" tabindex="-1">箭头居中</h3><p>设置 <code>arrow: { pointAtCenter: true }</code> 可以让箭头始终指向触发元素的中心位置，而不是跟随浮层边缘。这在触发元素较宽或使用 <code>topLeft</code>、<code>bottomRight</code> 等偏移位置时特别有用。</p><h3 id="-11" tabindex="-1">强制重新定位</h3><p>通过改变 <code>fresh</code> 属性的值（通常使用递增的数字），可以强制 Tooltip 重新计算浮层位置。这在触发元素位置动态变化（如动画、拖拽）时很有用。</p>',14))])}}};export{lt as default};
