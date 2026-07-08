import{B as l}from"./Button-Ddb1eo4r.js";import{T as c}from"./Tooltip-Ds-UX-n_.js";import{d as k,o as u,b as r,f as n,g as p,c as s,e as o,w as e,_ as v,q as x,A as y,r as b,a as T,J as h,F as w,z as B,h as C,i as _}from"./index-BOp1Gurx.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-DpyU4f5h.js";import"./Trigger-BSBv38Hy.js";const q={class:"demo-arrow-center"},S={class:"demo-row"},N={class:"demo-item"},R={class:"demo-item"},L={class:"demo-row",style:{"margin-top":"80px"}},A={class:"demo-item"},z={class:"demo-item"},E=k({__name:"TooltipArrowCenter",setup(m){return(i,t)=>(u(),r("div",q,[t[6]||(t[6]=n("p",null,[p("设置 "),n("code",null,"arrow.pointAtCenter"),p(" 可以让箭头始终指向触发元素的中心。")],-1)),n("div",S,[n("div",N,[t[1]||(t[1]=n("h4",null,"默认箭头位置",-1)),s(o(c),{title:"默认箭头跟随浮层边缘",placement:"topLeft"},{default:e(()=>[s(o(l),{style:{width:"200px"}},{default:e(()=>[...t[0]||(t[0]=[p("长按钮 - 默认箭头",-1)])]),_:1})]),_:1})]),n("div",R,[t[3]||(t[3]=n("h4",null,"箭头居中",-1)),s(o(c),{title:"箭头指向按钮中心",placement:"topLeft",arrow:{pointAtCenter:!0}},{default:e(()=>[s(o(l),{style:{width:"200px"}},{default:e(()=>[...t[2]||(t[2]=[p("长按钮 - 箭头居中",-1)])]),_:1})]),_:1})])]),n("div",L,[n("div",A,[s(o(c),{title:"bottomRight 默认",placement:"bottomRight"},{default:e(()=>[s(o(l),{style:{width:"200px"}},{default:e(()=>[...t[4]||(t[4]=[p("bottomRight - 默认",-1)])]),_:1})]),_:1})]),n("div",z,[s(o(c),{title:"bottomRight 居中",placement:"bottomRight",arrow:{pointAtCenter:!0}},{default:e(()=>[s(o(l),{style:{width:"200px"}},{default:e(()=>[...t[5]||(t[5]=[p("bottomRight - 居中",-1)])]),_:1})]),_:1})])])]))}}),$=v(E,[["__scopeId","data-v-d5bd4d90"]]),D=`<template>
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
import { Tooltip, Button } from '@hmfw/ant-design'
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
`,O=k({__name:"TooltipBasic",setup(m){return(i,t)=>(u(),x(o(c),{title:"这是提示文字"},{default:e(()=>[s(o(l),null,{default:e(()=>[...t[0]||(t[0]=[p("鼠标移入",-1)])]),_:1})]),_:1}))}}),P=`<template>
  <Tooltip title="这是提示文字">
    <Button>鼠标移入</Button>
  </Tooltip>
</template>

<script setup lang="ts">
import { Tooltip, Button } from '@hmfw/ant-design'
<\/script>
`,F={style:{display:"flex","flex-direction":"column",gap:"24px"}},I=k({__name:"TooltipClassNames",setup(m){return(i,t)=>(u(),r("div",F,[n("div",null,[t[1]||(t[1]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器渐变背景：",-1)),s(o(c),{title:"自定义渐变提示","class-names":{root:"custom-root"}},{default:e(()=>[s(o(l),{type:"primary"},{default:e(()=>[...t[0]||(t[0]=[p("悬停查看渐变效果",-1)])]),_:1})]),_:1})]),n("div",null,[t[3]||(t[3]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义内容区域样式：",-1)),s(o(c),{title:"大号字体提示内容","class-names":{inner:"custom-inner"}},{default:e(()=>[s(o(l),null,{default:e(()=>[...t[2]||(t[2]=[p("悬停查看大号字体",-1)])]),_:1})]),_:1})]),n("div",null,[t[5]||(t[5]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义箭头颜色：",-1)),s(o(c),{title:"绿色箭头提示","class-names":{arrow:"custom-arrow"}},{default:e(()=>[s(o(l),{type:"default"},{default:e(()=>[...t[4]||(t[4]=[p("悬停查看绿色箭头",-1)])]),_:1})]),_:1})]),n("div",null,[t[7]||(t[7]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合自定义多个节点：",-1)),s(o(c),{title:"完整自定义样式","class-names":{root:"custom-combined-root",content:"custom-combined-content",inner:"custom-combined-inner",arrow:"custom-combined-arrow"}},{default:e(()=>[s(o(l),{type:"primary"},{default:e(()=>[...t[6]||(t[6]=[p("悬停查看组合效果",-1)])]),_:1})]),_:1})]),n("div",null,[t[9]||(t[9]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式控制：",-1)),s(o(c),{title:"内联样式控制",styles:{root:{filter:"drop-shadow(0 4px 12px rgba(102, 126, 234, 0.4))"},inner:{fontSize:"16px",padding:"12px 16px",borderRadius:"8px"}}},{default:e(()=>[s(o(l),null,{default:e(()=>[...t[8]||(t[8]=[p("悬停查看内联样式",-1)])]),_:1})]),_:1})]),n("div",null,[t[11]||(t[11]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"混合使用 classNames 和 styles：",-1)),s(o(c),{title:"混合样式控制","class-names":{root:"custom-hover",inner:"custom-inner"},styles:{inner:{fontWeight:"600"}}},{default:e(()=>[s(o(l),{type:"dashed"},{default:e(()=>[...t[10]||(t[10]=[p("悬停查看混合效果",-1)])]),_:1})]),_:1})])]))}}),H=v(I,[["__scopeId","data-v-0b19dee2"]]),V=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器渐变背景：</div>
      <Tooltip title="自定义渐变提示" :class-names="{ root: 'custom-root' }">
        <Button type="primary">悬停查看渐变效果</Button>
      </Tooltip>
    </div>

    <!-- 场景 2：自定义内容区域样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义内容区域样式：</div>
      <Tooltip title="大号字体提示内容" :class-names="{ inner: 'custom-inner' }">
        <Button>悬停查看大号字体</Button>
      </Tooltip>
    </div>

    <!-- 场景 3：自定义箭头样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义箭头颜色：</div>
      <Tooltip title="绿色箭头提示" :class-names="{ arrow: 'custom-arrow' }">
        <Button type="default">悬停查看绿色箭头</Button>
      </Tooltip>
    </div>

    <!-- 场景 4：组合使用多个 classNames -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义多个节点：</div>
      <Tooltip
        title="完整自定义样式"
        :class-names="{
          root: 'custom-combined-root',
          content: 'custom-combined-content',
          inner: 'custom-combined-inner',
          arrow: 'custom-combined-arrow',
        }"
      >
        <Button type="primary">悬停查看组合效果</Button>
      </Tooltip>
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式控制：</div>
      <Tooltip
        title="内联样式控制"
        :styles="{
          root: { filter: 'drop-shadow(0 4px 12px rgba(102, 126, 234, 0.4))' },
          inner: { fontSize: '16px', padding: '12px 16px', borderRadius: '8px' },
        }"
      >
        <Button>悬停查看内联样式</Button>
      </Tooltip>
    </div>

    <!-- 场景 6：classNames 与 styles 混合使用 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">混合使用 classNames 和 styles：</div>
      <Tooltip
        title="混合样式控制"
        :class-names="{ root: 'custom-hover', inner: 'custom-inner' }"
        :styles="{ inner: { fontWeight: '600' } }"
      >
        <Button type="dashed">悬停查看混合效果</Button>
      </Tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tooltip, Button } from '@hmfw/ant-design'
<\/script>

<style scoped>
/* Tooltip 是弹层组件，挂载到 body，需要使用 :global() */
:global(.custom-root) {
  filter: drop-shadow(0 4px 12px rgba(102, 126, 234, 0.6));
}

:global(.custom-root .hmfw-tooltip-inner) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
}

:global(.custom-root .hmfw-tooltip-arrow::before) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

:global(.custom-inner) {
  font-size: 16px;
  font-weight: 500;
  padding: 10px 14px;
}

:global(.custom-arrow::before) {
  background-color: #52c41a !important;
}

/* 组合自定义 */
:global(.custom-combined-root) {
  animation: tooltipFadeIn 0.3s ease;
}

@keyframes tooltipFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

:global(.custom-combined-content) {
  border-radius: 12px;
  overflow: hidden;
}

:global(.custom-combined-inner) {
  background: linear-gradient(to right, #ff6b6b, #ee5a6f);
  padding: 12px 16px;
  font-size: 15px;
}

:global(.custom-combined-arrow::before) {
  background: linear-gradient(to right, #ff6b6b, #ee5a6f);
}

/* Hover 效果 */
:global(.custom-hover) {
  transition: all 0.3s ease;
}

:global(.custom-hover:not(.hmfw-tooltip-hidden)) {
  animation: tooltipBounce 0.3s ease;
}

@keyframes tooltipBounce {
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
`,M={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},W=k({__name:"TooltipCustomColor",setup(m){return(i,t)=>(u(),r("div",M,[s(o(c),{title:"粉色提示",color:"pink"},{default:e(()=>[s(o(l),null,{default:e(()=>[...t[0]||(t[0]=[p("粉色",-1)])]),_:1})]),_:1}),s(o(c),{title:"红色提示",color:"red"},{default:e(()=>[s(o(l),null,{default:e(()=>[...t[1]||(t[1]=[p("红色",-1)])]),_:1})]),_:1}),s(o(c),{title:"蓝色提示",color:"#1677ff"},{default:e(()=>[s(o(l),null,{default:e(()=>[...t[2]||(t[2]=[p("自定义蓝色",-1)])]),_:1})]),_:1}),s(o(c),{title:"绿色提示",color:"#52c41a"},{default:e(()=>[s(o(l),null,{default:e(()=>[...t[3]||(t[3]=[p("自定义绿色",-1)])]),_:1})]),_:1})]))}}),j=`<template>
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
import { Tooltip, Button } from '@hmfw/ant-design'
<\/script>
`,J={class:"demo-dynamic-content"},G={style:{display:"flex",gap:"20px","margin-top":"20px"}},K=k({__name:"TooltipDynamicContent",setup(m){const i=b(!1),t=b(!1),f=T(()=>t.value?"这是一段很长的提示文字，用于演示当内容动态变化时，浮层位置会自动重新计算，确保不会溢出视口边界，提供更好的用户体验。":"短提示"),a=()=>{t.value=!t.value};return(d,g)=>(u(),r("div",J,[g[1]||(g[1]=n("p",null,"当浮层内容动态变化时，Tooltip 会通过 ResizeObserver 自动重新计算位置，确保浮层不会溢出视口。",-1)),n("div",G,[s(o(c),{title:f.value,placement:"top",open:i.value},{default:e(()=>[s(o(l),{onClick:g[0]||(g[0]=et=>i.value=!i.value)},{default:e(()=>[p(y(i.value?"关闭":"打开")+"提示",1)]),_:1})]),_:1},8,["title","open"]),s(o(l),{onClick:a},{default:e(()=>[p(y(t.value?"切换为短内容":"切换为长内容"),1)]),_:1})]),g[2]||(g[2]=n("p",{style:{"margin-top":"20px",color:"#666","font-size":"12px"}},"提示：打开浮层后切换内容长度，浮层位置会自动调整",-1))]))}}),Q=v(K,[["__scopeId","data-v-1da4fabc"]]),U=`<template>
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
import { Tooltip, Button } from '@hmfw/ant-design'

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
`,X={class:"demo-fresh"},Y=k({__name:"TooltipFresh",setup(m){const i=b(0),t=b(0),f=()=>{i.value=i.value===0?100:0,t.value++};return(a,d)=>(u(),r("div",X,[d[2]||(d[2]=n("p",null,"fresh 属性用于强制重新计算浮层位置，适用于触发元素位置动态变化的场景。",-1)),n("div",{class:"moving-container",style:h({marginLeft:i.value+"px"})},[s(o(c),{title:"我会跟随按钮移动",fresh:t.value},{default:e(()=>[s(o(l),null,{default:e(()=>[...d[0]||(d[0]=[p("悬停查看提示",-1)])]),_:1})]),_:1},8,["fresh"])],4),s(o(l),{style:{"margin-top":"20px"},onClick:f},{default:e(()=>[...d[1]||(d[1]=[p("移动按钮",-1)])]),_:1})]))}}),Z=v(Y,[["__scopeId","data-v-089714a8"]]),tt=`<template>
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
import { Tooltip, Button } from '@hmfw/ant-design'

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
`,nt={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},st=k({__name:"TooltipPlacement",setup(m){const i=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(t,f)=>(u(),r("div",nt,[(u(),r(w,null,B(i,a=>s(o(c),{key:a,placement:a,title:"提示文字"},{default:e(()=>[s(o(l),{style:{width:"100px"}},{default:e(()=>[p(y(a),1)]),_:2},1024)]),_:2},1032,["placement"])),64))]))}}),at=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Tooltip v-for="placement in placements" :key="placement" :placement="placement" title="提示文字">
      <Button style="width: 100px">
        {{ placement }}
      </Button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip, Button } from '@hmfw/ant-design'

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
`,ot={class:"markdown-body"},rt={__name:"tooltip",setup(m,{expose:i}){return i({frontmatter:{}}),(f,a)=>{const d=C("DemoBlock");return u(),r("div",ot,[a[0]||(a[0]=n("h1",{id:"tooltip-文字提示",tabindex:"-1"},"Tooltip 文字提示",-1)),a[1]||(a[1]=n("p",null,"简单的文字提示气泡框。",-1)),a[2]||(a[2]=n("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),a[3]||(a[3]=n("ul",null,[n("li",null,"鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作")],-1)),a[4]||(a[4]=n("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),a[5]||(a[5]=n("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),a[6]||(a[6]=n("p",null,"最简单的用法。",-1)),s(d,{title:"基础用法",source:o(P)},{default:e(()=>[s(O)]),_:1},8,["source"]),a[7]||(a[7]=n("h3",{id:"十二个方向",tabindex:"-1"},"十二个方向",-1)),a[8]||(a[8]=n("p",null,"位置有十二个方向。",-1)),s(d,{title:"十二个方向",source:o(at)},{default:e(()=>[s(st)]),_:1},8,["source"]),a[9]||(a[9]=n("h3",{id:"自定义颜色",tabindex:"-1"},"自定义颜色",-1)),a[10]||(a[10]=n("p",null,"自定义提示框颜色。",-1)),s(d,{title:"自定义颜色",source:o(j)},{default:e(()=>[s(W)]),_:1},8,["source"]),a[11]||(a[11]=n("h3",{id:"箭头居中",tabindex:"-1"},"箭头居中",-1)),a[12]||(a[12]=n("p",null,[p("设置 "),n("code",null,"arrow.pointAtCenter"),p(" 可以让箭头始终指向触发元素的中心。")],-1)),s(d,{title:"箭头居中",source:o(D)},{default:e(()=>[s($)]),_:1},8,["source"]),a[13]||(a[13]=n("h3",{id:"强制重新计算位置",tabindex:"-1"},"强制重新计算位置",-1)),a[14]||(a[14]=n("p",null,[p("使用 "),n("code",null,"fresh"),p(" 属性可以强制重新计算浮层位置，适用于触发元素位置动态变化的场景。")],-1)),s(d,{title:"强制重新计算位置",source:o(tt)},{default:e(()=>[s(Z)]),_:1},8,["source"]),a[15]||(a[15]=n("h3",{id:"动态内容自适应",tabindex:"-1"},"动态内容自适应",-1)),a[16]||(a[16]=n("p",null,"当浮层内容动态变化时，Tooltip 会自动重新计算位置，确保浮层不会溢出视口。",-1)),s(d,{title:"动态内容自适应",source:o(U)},{default:e(()=>[s(Q)]),_:1},8,["source"]),a[17]||(a[17]=n("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),a[18]||(a[18]=n("p",null,[p("通过 "),n("code",null,"classNames"),p(" / "),n("code",null,"styles"),p(" 对各子元素做细粒度样式控制。")],-1)),s(d,{title:"语义化 className 与 style",source:o(V)},{default:e(()=>[s(H)]),_:1},8,["source"]),a[19]||(a[19]=_(`<h2 id="api" tabindex="-1">API</h2><h3 id="tooltip-props" tabindex="-1">Tooltip Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>提示文字（空值时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>overlay</td><td><code>title</code> 的别名（AntD 旧版兼容）</td><td>同 <code>title</code></td><td>-</td></tr><tr><td>placement</td><td>气泡框位置，溢出视口时自动翻转</td><td><code>&#39;top&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottom&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;left&#39; | &#39;leftTop&#39; | &#39;leftBottom&#39; | &#39;right&#39; | &#39;rightTop&#39; | &#39;rightBottom&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>trigger</td><td>触发行为，可设单值或数组</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39; | &#39;contextMenu&#39;</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示（非受控）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>color</td><td>背景颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>arrow</td><td>是否显示箭头，可对象配置 <code>{ pointAtCenter?: boolean }</code> 使箭头指向元素中心</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入后延时显示，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出后延时隐藏，单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>disabled</td><td>禁用 tooltip</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>fresh</td><td>强制重新计算浮层位置（变化时触发重新定位）</td><td><code>number | string</code></td><td>-</td></tr><tr><td>autoAdjustOverflow</td><td>浮层超出视口时自动翻转方向</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>自定义浮层 z-index</td><td><code>number</code></td><td><code>1070</code></td></tr><tr><td>destroyOnHidden</td><td>隐藏时销毁浮层 DOM</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyTooltipOnHide</td><td>同 <code>destroyOnHidden</code>（旧名，已弃用）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getPopupContainer</td><td>自定义浮层挂载容器（默认 <code>body</code>）</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TooltipClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TooltipStyles</code></td><td>-</td></tr></tbody></table><h3 id="tooltip-events" tabindex="-1">Tooltip Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>显示隐藏的回调（v-model）</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>浮层动画结束时触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="tooltip-slots" tabindex="-1">Tooltip Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发提示的元素</td></tr><tr><td>title</td><td>提示文字（与 <code>title</code> prop 二选一）</td></tr></tbody></table><h2 id="特性说明" tabindex="-1">特性说明</h2><h3 id="自动定位更新" tabindex="-1">自动定位更新</h3><p>Tooltip 使用 ResizeObserver 监听浮层内容尺寸变化，当内容动态变化时会自动重新计算位置，确保浮层不会溢出视口边界。</p><h3 id="箭头居中-1" tabindex="-1">箭头居中</h3><p>设置 <code>arrow: { pointAtCenter: true }</code> 可以让箭头始终指向触发元素的中心位置，而不是跟随浮层边缘。这在触发元素较宽或使用 <code>topLeft</code>、<code>bottomRight</code> 等偏移位置时特别有用。</p><h3 id="强制重新定位" tabindex="-1">强制重新定位</h3><p>通过改变 <code>fresh</code> 属性的值（通常使用递增的数字），可以强制 Tooltip 重新计算浮层位置。这在触发元素位置动态变化（如动画、拖拽）时很有用。</p><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Tooltip 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">TooltipClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 最外层弹层容器</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内容包裹层</span>
  arrow<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 箭头元素（当 arrow 为 true 时渲染）</span>
  inner<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内部内容区域</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TooltipStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  content<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  arrow<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  inner<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tooltip hmfw-tooltip-placement-top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tooltip-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.content / styles.content 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tooltip-arrow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.arrow / styles.arrow 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tooltip-inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.inner / styles.inner 应用于此 --&gt;</span>
      提示文字内容
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义内容区域样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>大号字体提示<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ inner: &#39;custom-inner&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>悬停查看<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义箭头样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>自定义箭头<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ arrow: &#39;custom-arrow&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>自定义箭头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>完整自定义<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;custom-root&#39;,
      inner: &#39;custom-inner&#39;,
      arrow: &#39;custom-arrow&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>组合样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">/* Tooltip 是弹层组件，挂载到 body 外，需使用 :global() */</span>
<span class="token selector">:global(.custom-inner)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 12px 16px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:global(.custom-arrow::before)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #52c41a <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:global(.custom-root)</span> <span class="token punctuation">{</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>0 4px 12px <span class="token function">rgba</span><span class="token punctuation">(</span>102<span class="token punctuation">,</span> 126<span class="token punctuation">,</span> 234<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制内容区域 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>内联样式<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      inner: { fontSize: &#39;16px&#39;, padding: &#39;12px 16px&#39;, borderRadius: &#39;8px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>内联样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义根容器阴影 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>自定义阴影<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { filter: &#39;drop-shadow(0 4px 12px rgba(102, 126, 234, 0.4))&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>自定义阴影<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>组合样式<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { zIndex: &#39;2000&#39; },
      inner: { fontSize: &#39;15px&#39;, fontWeight: &#39;600&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>组合样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>Tooltip 是弹层组件，默认挂载到 <code>body</code>，因此在 <code>&lt;style scoped&gt;</code> 中需使用 <code>:global()</code> 选择器</li><li><code>arrow</code> 节点仅在 <code>arrow</code> prop 不为 <code>false</code> 时渲染</li><li>自定义 <code>root</code> 样式会与内置的位置类（如 <code>.hmfw-tooltip-placement-top</code>）和状态类（如 <code>.hmfw-tooltip-hidden</code>）合并</li><li>如果使用 <code>getPopupContainer</code> 自定义了挂载容器，需确保该容器的样式上下文支持你的自定义类</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Tooltip 组件目前未直接消费 Design Token，样式以硬编码方式实现。背景色通过 <code>color</code> prop 或 CSS 变量 <code>--tooltip-bg</code> 控制（默认 <code>rgba(0, 0, 0, 0.85)</code>）。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量或 <code>classNames</code>/<code>styles</code> 实现。</p>`,31))])}}};export{rt as default};
