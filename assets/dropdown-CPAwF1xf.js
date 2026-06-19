import{B as p}from"./Button-gfWTCpVz.js";import{D as l}from"./index-DYQh-rQD.js";import{o as g,A as u,k as w,n,K as o,R as e,m as a,i as b,h as d,_ as k,H as y,l as x}from"./index-CCJgYszN.js";import{I as h}from"./Icon-DcJqStDf.js";import{S as f}from"./Space-rH77RVRF.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-B3nSOEhR.js";import"./Menu-Cipx_uxc.js";import"./DownOutlined-R26cp9nY.js";const D={style:{display:"flex",gap:"16px","align-items":"center"}},B=g({__name:"DropdownArrow",setup(i){const r={items:[{key:"1",label:"Menu Item 1"},{key:"2",label:"Menu Item 2"},{key:"3",label:"Menu Item 3"}]};return(c,t)=>(u(),w("div",D,[n(o(l),{menu:r,arrow:!0},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[0]||(t[0]=[a("With Arrow",-1)])]),_:1})]),_:1}),n(o(l),{menu:r,arrow:{pointAtCenter:!0}},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[1]||(t[1]=[a("Arrow Point at Center",-1)])]),_:1})]),_:1})]))}}),v=`<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <Dropdown :menu="menu" :arrow="true">
      <Button>With Arrow</Button>
    </Dropdown>
    <Dropdown :menu="menu" :arrow="{ pointAtCenter: true }">
      <Button>Arrow Point at Center</Button>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { Dropdown, Button } from 'ant-design-hmfw'

const menu = {
  items: [
    { key: '1', label: 'Menu Item 1' },
    { key: '2', label: 'Menu Item 2' },
    { key: '3', label: 'Menu Item 3' },
  ],
}
<\/script>
`,N=g({__name:"DropdownBasic",setup(i){const r={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"},{key:"3",label:"菜单项三"}],onClick:({key:c})=>{console.log("点击了:",c)}};return(c,t)=>(u(),b(o(l),{menu:r},{default:e(()=>[n(o(p),null,{default:e(()=>[t[0]||(t[0]=a(" 下拉菜单 ",-1)),n(o(h),{type:"down"})]),_:1})]),_:1}))}}),_=`<template>
  <Dropdown :menu="menu">
    <Button>
      下拉菜单
      <Icon type="down" />
    </Button>
  </Dropdown>
</template>

<script setup lang="ts">
import { Dropdown, Button, Icon } from 'ant-design-hmfw'

const menu = {
  items: [
    { key: '1', label: '菜单项一' },
    { key: '2', label: '菜单项二' },
    { key: '3', label: '菜单项三' },
  ],
  onClick: ({ key }: { key: string }) => {
    console.log('点击了:', key)
  },
}
<\/script>
`,S={style:{display:"flex",gap:"16px","flex-wrap":"wrap"}},C=g({__name:"DropdownButton",setup(i){const r={items:[{key:"1",label:"Action 1"},{key:"2",label:"Action 2"},{key:"3",label:"Action 3"}]};return(c,t)=>(u(),w("div",S,[n(o(l).Button,{menu:r},{default:e(()=>[...t[0]||(t[0]=[a(" Dropdown ",-1)])]),_:1}),n(o(l).Button,{menu:r,type:"primary"},{default:e(()=>[...t[1]||(t[1]=[a(" Primary ",-1)])]),_:1}),n(o(l).Button,{menu:r,danger:""},{default:e(()=>[...t[2]||(t[2]=[a(" Danger ",-1)])]),_:1}),n(o(l).Button,{menu:r,disabled:""},{default:e(()=>[...t[3]||(t[3]=[a(" Disabled ",-1)])]),_:1})]))}}),A=`<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap">
    <Dropdown.Button :menu="menu"> Dropdown </Dropdown.Button>
    <Dropdown.Button :menu="menu" type="primary"> Primary </Dropdown.Button>
    <Dropdown.Button :menu="menu" danger> Danger </Dropdown.Button>
    <Dropdown.Button :menu="menu" disabled> Disabled </Dropdown.Button>
  </div>
</template>

<script setup lang="ts">
import { Dropdown } from 'ant-design-hmfw'

const menu = {
  items: [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
    { key: '3', label: 'Action 3' },
  ],
}
<\/script>
`,q={class:"demo-dropdown-classnames"},P={class:"demo-section"},E={class:"demo-section"},M={class:"demo-section"},R={class:"demo-section"},I={class:"demo-section"},V={class:"demo-section"},L=g({__name:"DropdownClassNames",setup(i){const r={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"},{key:"3",label:"菜单项三"}]};return(c,t)=>(u(),w("div",q,[d("section",P,[t[1]||(t[1]=d("h3",null,"1. 自定义触发器样式",-1)),n(o(l),{menu:r,"class-names":{trigger:"custom-trigger"}},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[0]||(t[0]=[a("自定义触发器",-1)])]),_:1})]),_:1})]),d("section",E,[t[3]||(t[3]=d("h3",null,"2. 自定义下拉浮层样式",-1)),n(o(l),{menu:r,"class-names":{dropdown:"custom-dropdown"}},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[2]||(t[2]=[a("自定义浮层",-1)])]),_:1})]),_:1})]),d("section",M,[t[5]||(t[5]=d("h3",null,"3. 自定义内容容器样式",-1)),n(o(l),{menu:r,"class-names":{content:"custom-content"}},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[4]||(t[4]=[a("自定义内容",-1)])]),_:1})]),_:1})]),d("section",R,[t[7]||(t[7]=d("h3",null,"4. 自定义箭头样式",-1)),n(o(l),{menu:r,arrow:!0,"class-names":{arrow:"custom-arrow"}},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[6]||(t[6]=[a("带箭头",-1)])]),_:1})]),_:1})]),d("section",I,[t[9]||(t[9]=d("h3",null,"5. 组合使用多个 classNames",-1)),n(o(l),{menu:r,arrow:!0,"class-names":{trigger:"combined-trigger",dropdown:"combined-dropdown",content:"combined-content",arrow:"combined-arrow"}},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[8]||(t[8]=[a("综合样式",-1)])]),_:1})]),_:1})]),d("section",V,[t[11]||(t[11]=d("h3",null,"6. 使用 styles 动态样式",-1)),n(o(l),{menu:r,styles:{dropdown:{borderRadius:"16px",overflow:"hidden",boxShadow:"0 8px 24px rgba(102, 126, 234, 0.3)"},content:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"4px"}}},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[10]||(t[10]=[a("动态样式",-1)])]),_:1})]),_:1})])]))}}),T=k(L,[["__scopeId","data-v-dc261cce"]]),$=`<template>
  <div class="demo-dropdown-classnames">
    <!-- 场景 1: 自定义触发器 -->
    <section class="demo-section">
      <h3>1. 自定义触发器样式</h3>
      <Dropdown :menu="menu" :class-names="{ trigger: 'custom-trigger' }">
        <Button>自定义触发器</Button>
      </Dropdown>
    </section>

    <!-- 场景 2: 自定义下拉浮层 -->
    <section class="demo-section">
      <h3>2. 自定义下拉浮层样式</h3>
      <Dropdown :menu="menu" :class-names="{ dropdown: 'custom-dropdown' }">
        <Button>自定义浮层</Button>
      </Dropdown>
    </section>

    <!-- 场景 3: 自定义内容容器 -->
    <section class="demo-section">
      <h3>3. 自定义内容容器样式</h3>
      <Dropdown :menu="menu" :class-names="{ content: 'custom-content' }">
        <Button>自定义内容</Button>
      </Dropdown>
    </section>

    <!-- 场景 4: 自定义箭头 -->
    <section class="demo-section">
      <h3>4. 自定义箭头样式</h3>
      <Dropdown :menu="menu" :arrow="true" :class-names="{ arrow: 'custom-arrow' }">
        <Button>带箭头</Button>
      </Dropdown>
    </section>

    <!-- 场景 5: 组合使用多个 classNames -->
    <section class="demo-section">
      <h3>5. 组合使用多个 classNames</h3>
      <Dropdown
        :menu="menu"
        :arrow="true"
        :class-names="{
          trigger: 'combined-trigger',
          dropdown: 'combined-dropdown',
          content: 'combined-content',
          arrow: 'combined-arrow',
        }"
      >
        <Button>综合样式</Button>
      </Dropdown>
    </section>

    <!-- 场景 6: 使用 styles prop -->
    <section class="demo-section">
      <h3>6. 使用 styles 动态样式</h3>
      <Dropdown
        :menu="menu"
        :styles="{
          dropdown: { borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)' },
          content: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '4px' },
        }"
      >
        <Button>动态样式</Button>
      </Dropdown>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Dropdown, Button } from 'ant-design-hmfw'

const menu = {
  items: [
    { key: '1', label: '菜单项一' },
    { key: '2', label: '菜单项二' },
    { key: '3', label: '菜单项三' },
  ],
}
<\/script>

<style scoped>
.demo-dropdown-classnames {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-section {
  padding: 16px;
  background: #fafafa;
  border-radius: 8px;
}

.demo-section h3 {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #666;
}

/* 场景 1: 自定义触发器（trigger 是普通容器，可用 :deep 也可全局） */
:deep(.custom-trigger) {
  padding: 4px;
  border: 2px dashed #722ed1;
  border-radius: 8px;
}
</style>

<!-- 全局样式：dropdown 浮层 Teleport 到 body，需用全局样式 -->
<style>
/* 场景 2: 自定义下拉浮层 */
.custom-dropdown {
  border: 2px solid #722ed1 !important;
  border-radius: 12px !important;
  box-shadow: 0 8px 24px rgba(114, 46, 209, 0.2) !important;
}

/* 场景 3: 自定义内容容器 */
.custom-content {
  background: #f9f0ff !important;
  border-radius: 8px !important;
  padding: 4px !important;
}

/* 场景 4: 自定义箭头 */
.custom-arrow {
  background: #722ed1 !important;
  width: 12px !important;
  height: 12px !important;
}

/* 场景 5: 组合样式 */
.combined-dropdown {
  border-radius: 14px !important;
  box-shadow: 0 8px 24px rgba(19, 194, 194, 0.25) !important;
}

.combined-content {
  background: linear-gradient(135deg, #e6fffb 0%, #b5f5ec 100%) !important;
  border-radius: 10px !important;
  padding: 4px !important;
}

.combined-arrow {
  background: #13c2c2 !important;
}

.combined-content .hmfw-menu-item {
  border-radius: 6px;
  transition: all 0.2s ease;
}

.combined-content .hmfw-menu-item:hover {
  background: rgba(19, 194, 194, 0.15) !important;
}
</style>
`,O=g({__name:"DropdownDanger",setup(i){const r={items:[{key:"edit",label:"编辑"},{key:"copy",label:"复制"},{type:"divider"},{key:"delete",label:"删除",danger:!0}],onClick:({key:c})=>{console.log("点击了:",c)}};return(c,t)=>(u(),b(o(l),{menu:r,trigger:"click"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[0]||(t[0]=[a("操作菜单",-1)])]),_:1})]),_:1}))}}),H=`<template>
  <Dropdown :menu="menu" trigger="click">
    <Button>操作菜单</Button>
  </Dropdown>
</template>

<script setup lang="ts">
import { Dropdown, Button } from 'ant-design-hmfw'

const menu = {
  items: [
    { key: 'edit', label: '编辑' },
    { key: 'copy', label: '复制' },
    { type: 'divider' },
    { key: 'delete', label: '删除', danger: true },
  ],
  onClick: ({ key }: { key: string }) => {
    console.log('点击了:', key)
  },
}
<\/script>
`,z=g({__name:"DropdownPlacement",setup(i){const r={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"}]};return(c,t)=>(u(),b(o(f),{wrap:""},{default:e(()=>[n(o(l),{menu:r,placement:"bottomLeft"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[0]||(t[0]=[a("左下",-1)])]),_:1})]),_:1}),n(o(l),{menu:r,placement:"bottom"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[1]||(t[1]=[a("居中下",-1)])]),_:1})]),_:1}),n(o(l),{menu:r,placement:"bottomRight"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[2]||(t[2]=[a("右下",-1)])]),_:1})]),_:1}),n(o(l),{menu:r,placement:"topLeft"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[3]||(t[3]=[a("左上",-1)])]),_:1})]),_:1}),n(o(l),{menu:r,placement:"top"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[4]||(t[4]=[a("居中上",-1)])]),_:1})]),_:1}),n(o(l),{menu:r,placement:"topRight"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[5]||(t[5]=[a("右上",-1)])]),_:1})]),_:1})]),_:1}))}}),F=`<template>
  <Space wrap>
    <Dropdown :menu="menu" placement="bottomLeft">
      <Button>左下</Button>
    </Dropdown>
    <Dropdown :menu="menu" placement="bottom">
      <Button>居中下</Button>
    </Dropdown>
    <Dropdown :menu="menu" placement="bottomRight">
      <Button>右下</Button>
    </Dropdown>
    <Dropdown :menu="menu" placement="topLeft">
      <Button>左上</Button>
    </Dropdown>
    <Dropdown :menu="menu" placement="top">
      <Button>居中上</Button>
    </Dropdown>
    <Dropdown :menu="menu" placement="topRight">
      <Button>右上</Button>
    </Dropdown>
  </Space>
</template>

<script setup lang="ts">
import { Dropdown, Button, Space } from 'ant-design-hmfw'

const menu = {
  items: [
    { key: '1', label: '菜单项一' },
    { key: '2', label: '菜单项二' },
  ],
}
<\/script>
`,W=g({__name:"DropdownTrigger",setup(i){const r={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"},{key:"3",label:"菜单项三"}]};return(c,t)=>(u(),b(o(f),null,{default:e(()=>[n(o(l),{menu:r,trigger:"hover"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[0]||(t[0]=[a("悬停触发",-1)])]),_:1})]),_:1}),n(o(l),{menu:r,trigger:"click"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[1]||(t[1]=[a("点击触发",-1)])]),_:1})]),_:1})]),_:1}))}}),j=`<template>
  <Space>
    <Dropdown :menu="menu" trigger="hover">
      <Button>悬停触发</Button>
    </Dropdown>
    <Dropdown :menu="menu" trigger="click">
      <Button>点击触发</Button>
    </Dropdown>
  </Space>
</template>

<script setup lang="ts">
import { Dropdown, Button, Space } from 'ant-design-hmfw'

const menu = {
  items: [
    { key: '1', label: '菜单项一' },
    { key: '2', label: '菜单项二' },
    { key: '3', label: '菜单项三' },
  ],
}
<\/script>
`,K={class:"markdown-body"},ot={__name:"dropdown",setup(i,{expose:r}){return r({frontmatter:{}}),(t,s)=>{const m=y("DemoBlock");return u(),w("div",K,[s[0]||(s[0]=d("h1",{id:"dropdown-下拉菜单",tabindex:"-1"},"Dropdown 下拉菜单",-1)),s[1]||(s[1]=d("p",null,"向下弹出的列表。",-1)),s[2]||(s[2]=d("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),s[3]||(s[3]=d("ul",null,[d("li",null,"当页面上的操作命令过多时，用此组件可以收纳操作元素"),d("li",null,"点击或移入触点，会出现一个下拉菜单，可从中选择操作项")],-1)),s[4]||(s[4]=d("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),s[5]||(s[5]=d("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),s[6]||(s[6]=d("p",null,"最简单的下拉菜单。",-1)),n(m,{title:"基础用法",source:o(_)},{default:e(()=>[n(N)]),_:1},8,["source"]),s[7]||(s[7]=d("h3",{id:"触发方式",tabindex:"-1"},"触发方式",-1)),s[8]||(s[8]=d("p",null,[a("通过 "),d("code",null,"trigger"),a(" 属性设置触发方式，支持 "),d("code",null,"hover"),a("、"),d("code",null,"click"),a(" 和 "),d("code",null,"contextMenu"),a("。")],-1)),n(m,{title:"触发方式",source:o(j)},{default:e(()=>[n(W)]),_:1},8,["source"]),s[9]||(s[9]=d("h3",{id:"危险选项与分割线",tabindex:"-1"},"危险选项与分割线",-1)),s[10]||(s[10]=d("p",null,[a("通过 "),d("code",null,"danger"),a(" 属性标记危险操作，通过 "),d("code",null,"type: 'divider'"),a(" 添加分割线。")],-1)),n(m,{title:"危险选项与分割线",source:o(H)},{default:e(()=>[n(O)]),_:1},8,["source"]),s[11]||(s[11]=d("h3",{id:"弹出位置",tabindex:"-1"},"弹出位置",-1)),s[12]||(s[12]=d("p",null,[a("通过 "),d("code",null,"placement"),a(" 属性设置弹出位置。")],-1)),n(m,{title:"弹出位置",source:o(F)},{default:e(()=>[n(z)]),_:1},8,["source"]),s[13]||(s[13]=d("h3",{id:"箭头",tabindex:"-1"},"箭头",-1)),s[14]||(s[14]=d("p",null,[a("通过 "),d("code",null,"arrow"),a(" 属性显示箭头。")],-1)),n(m,{title:"箭头",source:o(v)},{default:e(()=>[n(B)]),_:1},8,["source"]),s[15]||(s[15]=d("h3",{id:"按钮式下拉菜单",tabindex:"-1"},"按钮式下拉菜单",-1)),s[16]||(s[16]=d("p",null,[a("使用 "),d("code",null,"Dropdown.Button"),a(" 组件，左边是按钮，右边是额外的相关功能菜单。")],-1)),n(m,{title:"按钮式下拉菜单",source:o(A)},{default:e(()=>[n(C)]),_:1},8,["source"]),s[17]||(s[17]=d("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),s[18]||(s[18]=d("p",null,[a("通过 "),d("code",null,"classNames"),a(" / "),d("code",null,"styles"),a(" 对各子元素做细粒度样式控制。")],-1)),n(m,{title:"语义化 className 与 style",source:o($)},{default:e(()=>[n(T)]),_:1},8,["source"]),s[19]||(s[19]=x(`<h2 id="api" tabindex="-1">API</h2><h3 id="dropdown-props" tabindex="-1">Dropdown Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>menu</td><td>菜单配置项</td><td><code>MenuProps</code></td><td>-</td></tr><tr><td>trigger</td><td>触发方式</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;contextMenu&#39; | Array</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>placement</td><td>弹出位置</td><td><code>&#39;top&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottom&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39;</code></td><td><code>&#39;bottomLeft&#39;</code></td></tr><tr><td>open</td><td>手动控制下拉框显示</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示下拉框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>arrow</td><td>下拉框箭头是否显示</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>false</code></td></tr><tr><td>autoFocus</td><td>打开后自动聚焦下拉框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>overlayClassName</td><td>下拉根元素的类名称</td><td><code>string</code></td><td>-</td></tr><tr><td>overlayStyle</td><td>下拉根元素的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>getPopupContainer</td><td>菜单渲染父节点</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td><code>() =&gt; document.body</code></td></tr><tr><td>autoAdjustOverflow</td><td>下拉框被遮挡时自动调整位置</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>destroyPopupOnHide</td><td>关闭后是否销毁 Dropdown（已废弃，请使用 destroyOnHidden）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnHidden</td><td>关闭后是否销毁 Dropdown</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入后延时多少才显示 Dropdown，单位：秒</td><td><code>number</code></td><td><code>0.15</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出后延时多少才隐藏 Dropdown，单位：秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>popupRender</td><td>自定义下拉框内容</td><td><code>(originNode: VNode) =&gt; VNode</code></td><td>-</td></tr><tr><td>dropdownRender</td><td>自定义下拉框内容（已废弃，请使用 popupRender）</td><td><code>(originNode: VNode) =&gt; VNode</code></td><td>-</td></tr><tr><td>forceRender</td><td>强制渲染 Dropdown</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>openClassName</td><td>菜单展开时给触发元素添加的类名</td><td><code>string</code></td><td>-</td></tr><tr><td>rootClassName</td><td>下拉根元素的类名称</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化 className，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>DropdownClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>DropdownStyles</code></td><td>-</td></tr></tbody></table><h3 id="dropdown-events" tabindex="-1">Dropdown Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>openChange</td><td>菜单显示状态改变时调用</td><td><code>(open: boolean, info: { source: &#39;trigger&#39; | &#39;menu&#39; }) =&gt; void</code></td></tr></tbody></table><h3 id="dropdown-slots" tabindex="-1">Dropdown Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发下拉的元素</td></tr><tr><td>overlay</td><td>自定义下拉内容（当不使用 menu 时）</td></tr></tbody></table><h3 id="dropdownbutton-props" tabindex="-1">Dropdown.Button Props</h3><p>继承 Dropdown 的所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39; | &#39;dashed&#39; | &#39;link&#39; | &#39;text&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>danger</td><td>设置危险按钮</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>设置按钮载入状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>右侧的 icon</td><td><code>VNode</code></td><td><code>&lt;EllipsisOutlined /&gt;</code></td></tr><tr><td>buttonsRender</td><td>自定义按钮的渲染</td><td><code>(buttons: [VNode, VNode]) =&gt; [VNode, VNode]</code></td><td>-</td></tr></tbody></table><h3 id="dropdownbutton-events" tabindex="-1">Dropdown.Button Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击左侧按钮的回调</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>openChange</td><td>菜单显示状态改变时调用</td><td><code>(open: boolean, info: { source: &#39;trigger&#39; | &#39;menu&#39; }) =&gt; void</code></td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对Dropdown的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">DropdownClassNames</span> <span class="token punctuation">{</span>
  trigger<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 触发器容器 div（包裹 default slot）</span>
  dropdown<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 下拉浮层根节点 div.hmfw-dropdown</span>
  arrow<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 箭头 div.hmfw-dropdown-arrow（需开启 arrow）</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 浮层内容容器 div.hmfw-dropdown-content</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">DropdownStyles</span> <span class="token punctuation">{</span>
  trigger<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 触发器容器 div</span>
  dropdown<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 下拉浮层根节点 div.hmfw-dropdown</span>
  arrow<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 箭头 div.hmfw-dropdown-arrow</span>
  content<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 浮层内容容器 div.hmfw-dropdown-content</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom-trigger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>触发元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- ↑ classNames.trigger / styles.trigger 应用于此 --&gt;</span>

<span class="token comment">&lt;!-- Teleport 到 body --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-dropdown<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.dropdown / styles.dropdown 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-dropdown-arrow<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.arrow / styles.arrow 应用于此（需开启 arrow） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-dropdown-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.content / styles.content 应用于此 --&gt;</span>
    <span class="token comment">&lt;!-- 菜单内容（由 menu prop 或 overlay slot 提供） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Dropdown
    :menu=&quot;menu&quot;
    :arrow=&quot;true&quot;
    :classNames=&quot;{
      trigger: &#39;my-trigger&#39;,
      dropdown: &#39;my-dropdown&#39;,
      content: &#39;my-content&#39;,
      arrow: &#39;my-arrow&#39;,
    }&quot;
  &gt;
    &lt;Button&gt;下拉菜单&lt;/Button&gt;
  &lt;/Dropdown&gt;
&lt;/template&gt;

&lt;style&gt;
/* 全局样式（非 scoped）：dropdown/content/arrow 需要全局样式 */
.my-dropdown {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.my-content {
  border-radius: 8px;
}

.my-arrow {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}
&lt;/style&gt;

&lt;style scoped&gt;
/* trigger 可以使用 scoped 样式 */
:deep(.my-trigger) {
  display: inline-block;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Dropdown
    :menu=&quot;menu&quot;
    :styles=&quot;{
      dropdown: { borderRadius: &#39;16px&#39; },
      content: { background: &#39;#667eea&#39;, padding: &#39;4px&#39; },
    }&quot;
  &gt;
    &lt;Button&gt;动态样式&lt;/Button&gt;
  &lt;/Dropdown&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>dropdown</code>、<code>content</code>、<code>arrow</code> 通过 <code>Teleport</code> 渲染到 body（或 <code>getPopupContainer</code> 指定的容器），其样式必须使用<strong>全局样式</strong>（非 scoped）</li><li><code>arrow</code> 仅在开启 <code>arrow</code> 属性时渲染</li><li>菜单项（menu/item）由 <code>menu</code> prop 传入的 <a href="/components/menu">Menu</a> 组件控制，请使用 Menu 的语义化 API 定制</li><li><code>classNames.trigger</code> 与组件的 <code>class</code> attr、<code>openClassName</code> 会合并应用到触发器容器</li><li><code>styles.dropdown</code> 会与 <code>overlayStyle</code> 合并；<code>styles.trigger</code> 会与组件的 <code>style</code> attr 合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-elevated</code></td><td>浮层背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-error-bg</code></td><td>错误色背景</td><td><code>#fff2f0</code></td></tr><tr><td><code>--hmfw-color-error-hover</code></td><td>错误色悬停态</td><td><code>#ff7875</code></td></tr><tr><td><code>--hmfw-color-split</code></td><td>分割线颜色</td><td><code>rgba(5, 5, 5, 0.06)</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-control-item-bg-hover</code></td><td>控件项悬停背景色</td><td><code>rgba(0, 0, 0, 0.04)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-control-height-sm</code></td><td>小号控件高度</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-margin-xs</code></td><td>超小外边距</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-margin-xxs</code></td><td>超超小外边距</td><td><code>2px</code></td></tr><tr><td><code>--hmfw-padding-sm</code></td><td>小号内边距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-padding-xs</code></td><td>超小内边距</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-padding-xxs</code></td><td>超超小内边距</td><td><code>2px</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>小号圆角</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-box-shadow-secondary</code></td><td>次级阴影</td><td><code>0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>缓入缓出曲线</td><td><code>cubic-bezier(0.645, 0.045, 0.355, 1)</code></td></tr><tr><td><code>--hmfw-z-index-popup</code></td><td>弹出层层级</td><td><code>1050</code></td></tr></tbody></table>`,26))])}}};export{ot as default};
