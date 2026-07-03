import{B as l}from"./Button-CXEC-hI-.js";import{D as r}from"./index-SUU7sEoT.js";import{d as k,o as u,b as g,c as n,e as o,w as s,g as d,q as w,f as e,_ as f,h as y,i as x}from"./index-DCNtHlH3.js";import{D as h}from"./DownOutlined-NqsBDvU3.js";import{S as b}from"./Space-D9xDm6ES.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-DsitE8co.js";import"./index-Dn0hQIbK.js";import"./Layout-c_x3VVSg.js";import"./MinusOutlined-BYeGRY94.js";import"./LeftOutlined-CNcBTSRE.js";import"./RightOutlined-kHRbqwBr.js";import"./event-CMqgYmge.js";import"./Trigger-Dn9I4W9t.js";import"./Tooltip-C2Y-Kzi_.js";const D={style:{display:"flex",gap:"16px","align-items":"center"}},B=k({__name:"DropdownArrow",setup(i){const p={items:[{key:"1",label:"Menu Item 1"},{key:"2",label:"Menu Item 2"},{key:"3",label:"Menu Item 3"}]};return(c,t)=>(u(),g("div",D,[n(o(r),{menu:p,arrow:!0},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[0]||(t[0]=[d("With Arrow",-1)])]),_:1})]),_:1}),n(o(r),{menu:p,arrow:{pointAtCenter:!0}},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[1]||(t[1]=[d("Arrow Point at Center",-1)])]),_:1})]),_:1})]))}}),v=`<template>
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
import { Dropdown, Button } from '@hmfw/ant-design'

const menu = {
  items: [
    { key: '1', label: 'Menu Item 1' },
    { key: '2', label: 'Menu Item 2' },
    { key: '3', label: 'Menu Item 3' },
  ],
}
<\/script>
`,N=k({__name:"DropdownBasic",setup(i){const p={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"},{key:"3",label:"菜单项三"}],onClick:({key:c})=>{console.log("点击了:",c)}};return(c,t)=>(u(),w(o(r),{menu:p},{default:s(()=>[n(o(l),null,{default:s(()=>[t[0]||(t[0]=d(" 下拉菜单 ",-1)),n(o(h),{class:"hmfw-icon"})]),_:1})]),_:1}))}}),_=`<template>
  <Dropdown :menu="menu">
    <Button>
      下拉菜单
      <DownOutlined class="hmfw-icon" />
    </Button>
  </Dropdown>
</template>

<script setup lang="ts">
import { DownOutlined } from '@hmfw/icons'
import { Dropdown, Button } from '@hmfw/ant-design'

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
`,S={style:{display:"flex",gap:"16px","flex-wrap":"wrap"}},C=k({__name:"DropdownButton",setup(i){const p={items:[{key:"1",label:"Action 1"},{key:"2",label:"Action 2"},{key:"3",label:"Action 3"}]};return(c,t)=>(u(),g("div",S,[n(o(r).Button,{menu:p},{default:s(()=>[...t[0]||(t[0]=[d(" Dropdown ",-1)])]),_:1}),n(o(r).Button,{menu:p,type:"primary"},{default:s(()=>[...t[1]||(t[1]=[d(" Primary ",-1)])]),_:1}),n(o(r).Button,{menu:p,danger:""},{default:s(()=>[...t[2]||(t[2]=[d(" Danger ",-1)])]),_:1}),n(o(r).Button,{menu:p,disabled:""},{default:s(()=>[...t[3]||(t[3]=[d(" Disabled ",-1)])]),_:1})]))}}),q=`<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap">
    <Dropdown.Button :menu="menu"> Dropdown </Dropdown.Button>
    <Dropdown.Button :menu="menu" type="primary"> Primary </Dropdown.Button>
    <Dropdown.Button :menu="menu" danger> Danger </Dropdown.Button>
    <Dropdown.Button :menu="menu" disabled> Disabled </Dropdown.Button>
  </div>
</template>

<script setup lang="ts">
import { Dropdown } from '@hmfw/ant-design'

const menu = {
  items: [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
    { key: '3', label: 'Action 3' },
  ],
}
<\/script>
`,A={class:"demo-dropdown-classnames"},P={class:"demo-section"},E={class:"demo-section"},M={class:"demo-section"},R={class:"demo-section"},V={class:"demo-section"},L={class:"demo-section"},O=k({__name:"DropdownClassNames",setup(i){const p={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"},{key:"3",label:"菜单项三"}]};return(c,t)=>(u(),g("div",A,[e("section",P,[t[1]||(t[1]=e("h3",null,"1. 自定义触发器样式",-1)),n(o(r),{menu:p,"class-names":{trigger:"custom-trigger"}},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[0]||(t[0]=[d("自定义触发器",-1)])]),_:1})]),_:1})]),e("section",E,[t[3]||(t[3]=e("h3",null,"2. 自定义下拉浮层样式",-1)),n(o(r),{menu:p,"class-names":{dropdown:"custom-dropdown"}},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[2]||(t[2]=[d("自定义浮层",-1)])]),_:1})]),_:1})]),e("section",M,[t[5]||(t[5]=e("h3",null,"3. 自定义内容容器样式",-1)),n(o(r),{menu:p,"class-names":{content:"custom-content"}},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[4]||(t[4]=[d("自定义内容",-1)])]),_:1})]),_:1})]),e("section",R,[t[7]||(t[7]=e("h3",null,"4. 自定义箭头样式",-1)),n(o(r),{menu:p,arrow:!0,"class-names":{arrow:"custom-arrow"}},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[6]||(t[6]=[d("带箭头",-1)])]),_:1})]),_:1})]),e("section",V,[t[9]||(t[9]=e("h3",null,"5. 组合使用多个 classNames",-1)),n(o(r),{menu:p,arrow:!0,"class-names":{trigger:"combined-trigger",dropdown:"combined-dropdown",content:"combined-content",arrow:"combined-arrow"}},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[8]||(t[8]=[d("综合样式",-1)])]),_:1})]),_:1})]),e("section",L,[t[11]||(t[11]=e("h3",null,"6. 使用 styles 动态样式",-1)),n(o(r),{menu:p,styles:{dropdown:{borderRadius:"16px",overflow:"hidden",boxShadow:"0 8px 24px rgba(102, 126, 234, 0.3)"},content:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"4px"}}},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[10]||(t[10]=[d("动态样式",-1)])]),_:1})]),_:1})])]))}}),T=f(O,[["__scopeId","data-v-688503dc"]]),$=`<template>
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
import { Dropdown, Button } from '@hmfw/ant-design'

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
`,I=k({__name:"DropdownDanger",setup(i){const p={items:[{key:"edit",label:"编辑"},{key:"copy",label:"复制"},{type:"divider"},{key:"delete",label:"删除",danger:!0}],onClick:({key:c})=>{console.log("点击了:",c)}};return(c,t)=>(u(),w(o(r),{menu:p,trigger:"click"},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[0]||(t[0]=[d("操作菜单",-1)])]),_:1})]),_:1}))}}),H=`<template>
  <Dropdown :menu="menu" trigger="click">
    <Button>操作菜单</Button>
  </Dropdown>
</template>

<script setup lang="ts">
import { Dropdown, Button } from '@hmfw/ant-design'

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
`,z=k({__name:"DropdownPlacement",setup(i){const p={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"}]};return(c,t)=>(u(),w(o(b),{wrap:""},{default:s(()=>[n(o(r),{menu:p,placement:"bottomLeft"},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[0]||(t[0]=[d("左下",-1)])]),_:1})]),_:1}),n(o(r),{menu:p,placement:"bottom"},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[1]||(t[1]=[d("居中下",-1)])]),_:1})]),_:1}),n(o(r),{menu:p,placement:"bottomRight"},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[2]||(t[2]=[d("右下",-1)])]),_:1})]),_:1}),n(o(r),{menu:p,placement:"topLeft"},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[3]||(t[3]=[d("左上",-1)])]),_:1})]),_:1}),n(o(r),{menu:p,placement:"top"},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[4]||(t[4]=[d("居中上",-1)])]),_:1})]),_:1}),n(o(r),{menu:p,placement:"topRight"},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[5]||(t[5]=[d("右上",-1)])]),_:1})]),_:1})]),_:1}))}}),F=`<template>
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
import { Dropdown, Button, Space } from '@hmfw/ant-design'

const menu = {
  items: [
    { key: '1', label: '菜单项一' },
    { key: '2', label: '菜单项二' },
  ],
}
<\/script>
`,W=k({__name:"DropdownTrigger",setup(i){const p={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"},{key:"3",label:"菜单项三"}]};return(c,t)=>(u(),w(o(b),null,{default:s(()=>[n(o(r),{menu:p,trigger:"hover"},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[0]||(t[0]=[d("悬停触发",-1)])]),_:1})]),_:1}),n(o(r),{menu:p,trigger:"click"},{default:s(()=>[n(o(l),null,{default:s(()=>[...t[1]||(t[1]=[d("点击触发",-1)])]),_:1})]),_:1})]),_:1}))}}),j=`<template>
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
import { Dropdown, Button, Space } from '@hmfw/ant-design'

const menu = {
  items: [
    { key: '1', label: '菜单项一' },
    { key: '2', label: '菜单项二' },
    { key: '3', label: '菜单项三' },
  ],
}
<\/script>
`,G={class:"markdown-body"},rt={__name:"dropdown",setup(i,{expose:p}){return p({frontmatter:{}}),(t,a)=>{const m=y("DemoBlock");return u(),g("div",G,[a[0]||(a[0]=e("h1",{id:"dropdown-下拉菜单",tabindex:"-1"},"Dropdown 下拉菜单",-1)),a[1]||(a[1]=e("p",null,"向下弹出的列表。",-1)),a[2]||(a[2]=e("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),a[3]||(a[3]=e("ul",null,[e("li",null,"当页面上的操作命令过多时，用此组件可以收纳操作元素"),e("li",null,"点击或移入触点，会出现一个下拉菜单，可从中选择操作项")],-1)),a[4]||(a[4]=e("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),a[5]||(a[5]=e("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),a[6]||(a[6]=e("p",null,"最简单的下拉菜单。",-1)),n(m,{title:"基础用法",source:o(_)},{default:s(()=>[n(N)]),_:1},8,["source"]),a[7]||(a[7]=e("h3",{id:"触发方式",tabindex:"-1"},"触发方式",-1)),a[8]||(a[8]=e("p",null,[d("通过 "),e("code",null,"trigger"),d(" 属性设置触发方式，支持 "),e("code",null,"hover"),d("、"),e("code",null,"click"),d(" 和 "),e("code",null,"contextMenu"),d("。")],-1)),n(m,{title:"触发方式",source:o(j)},{default:s(()=>[n(W)]),_:1},8,["source"]),a[9]||(a[9]=e("h3",{id:"危险选项与分割线",tabindex:"-1"},"危险选项与分割线",-1)),a[10]||(a[10]=e("p",null,[d("通过 "),e("code",null,"danger"),d(" 属性标记危险操作，通过 "),e("code",null,"type: 'divider'"),d(" 添加分割线。")],-1)),n(m,{title:"危险选项与分割线",source:o(H)},{default:s(()=>[n(I)]),_:1},8,["source"]),a[11]||(a[11]=e("h3",{id:"弹出位置",tabindex:"-1"},"弹出位置",-1)),a[12]||(a[12]=e("p",null,[d("通过 "),e("code",null,"placement"),d(" 属性设置弹出位置。")],-1)),n(m,{title:"弹出位置",source:o(F)},{default:s(()=>[n(z)]),_:1},8,["source"]),a[13]||(a[13]=e("h3",{id:"箭头",tabindex:"-1"},"箭头",-1)),a[14]||(a[14]=e("p",null,[d("通过 "),e("code",null,"arrow"),d(" 属性显示箭头。")],-1)),n(m,{title:"箭头",source:o(v)},{default:s(()=>[n(B)]),_:1},8,["source"]),a[15]||(a[15]=e("h3",{id:"按钮式下拉菜单",tabindex:"-1"},"按钮式下拉菜单",-1)),a[16]||(a[16]=e("p",null,[d("使用 "),e("code",null,"Dropdown.Button"),d(" 组件，左边是按钮，右边是额外的相关功能菜单。")],-1)),n(m,{title:"按钮式下拉菜单",source:o(q)},{default:s(()=>[n(C)]),_:1},8,["source"]),a[17]||(a[17]=e("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),a[18]||(a[18]=e("p",null,[d("通过 "),e("code",null,"classNames"),d(" / "),e("code",null,"styles"),d(" 对各子元素做细粒度样式控制。")],-1)),n(m,{title:"语义化 className 与 style",source:o($)},{default:s(()=>[n(T)]),_:1},8,["source"]),a[19]||(a[19]=x(`<h2 id="api" tabindex="-1">API</h2><h3 id="dropdown-props" tabindex="-1">Dropdown Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>menu</td><td>菜单配置项</td><td><code>MenuProps</code></td><td>-</td></tr><tr><td>trigger</td><td>触发方式</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;contextMenu&#39; | Array</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>placement</td><td>弹出位置</td><td><code>&#39;top&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottom&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39;</code></td><td><code>&#39;bottomLeft&#39;</code></td></tr><tr><td>open</td><td>手动控制下拉框显示</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示下拉框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>arrow</td><td>下拉框箭头是否显示</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>false</code></td></tr><tr><td>autoFocus</td><td>打开后自动聚焦下拉框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>overlayClassName</td><td>下拉根元素的类名称</td><td><code>string</code></td><td>-</td></tr><tr><td>overlayStyle</td><td>下拉根元素的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>getPopupContainer</td><td>菜单渲染父节点</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td><code>() =&gt; document.body</code></td></tr><tr><td>autoAdjustOverflow</td><td>下拉框被遮挡时自动调整位置</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>destroyPopupOnHide</td><td>关闭后是否销毁 Dropdown（已废弃，请使用 destroyOnHidden）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnHidden</td><td>关闭后是否销毁 Dropdown</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入后延时多少才显示 Dropdown，单位：秒</td><td><code>number</code></td><td><code>0.15</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出后延时多少才隐藏 Dropdown，单位：秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>popupRender</td><td>自定义下拉框内容</td><td><code>(originNode: VNode) =&gt; VNode</code></td><td>-</td></tr><tr><td>dropdownRender</td><td>自定义下拉框内容（已废弃，请使用 popupRender）</td><td><code>(originNode: VNode) =&gt; VNode</code></td><td>-</td></tr><tr><td>forceRender</td><td>强制渲染 Dropdown</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>openClassName</td><td>菜单展开时给触发元素添加的类名</td><td><code>string</code></td><td>-</td></tr><tr><td>rootClassName</td><td>下拉根元素的类名称</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化 className，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>DropdownClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>DropdownStyles</code></td><td>-</td></tr></tbody></table><h3 id="dropdown-events" tabindex="-1">Dropdown Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>openChange</td><td>菜单显示状态改变时调用</td><td><code>(open: boolean, info: { source: &#39;trigger&#39; | &#39;menu&#39; }) =&gt; void</code></td></tr></tbody></table><h3 id="dropdown-slots" tabindex="-1">Dropdown Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发下拉的元素</td></tr><tr><td>overlay</td><td>自定义下拉内容（当不使用 menu 时）</td></tr></tbody></table><h3 id="dropdownbutton-props" tabindex="-1">Dropdown.Button Props</h3><p>继承 Dropdown 的所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39; | &#39;dashed&#39; | &#39;link&#39; | &#39;text&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>danger</td><td>设置危险按钮</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>设置按钮载入状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>右侧的 icon</td><td><code>VNode</code></td><td><code>&lt;EllipsisOutlined /&gt;</code></td></tr><tr><td>buttonsRender</td><td>自定义按钮的渲染</td><td><code>(buttons: [VNode, VNode]) =&gt; [VNode, VNode]</code></td><td>-</td></tr></tbody></table><h3 id="dropdownbutton-events" tabindex="-1">Dropdown.Button Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击左侧按钮的回调</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>openChange</td><td>菜单显示状态改变时调用</td><td><code>(open: boolean, info: { source: &#39;trigger&#39; | &#39;menu&#39; }) =&gt; void</code></td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对Dropdown的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span>
    <span class="token attr-name">:menu</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:arrow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:classNames</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      trigger: &#39;my-trigger&#39;,
      dropdown: &#39;my-dropdown&#39;,
      content: &#39;my-content&#39;,
      arrow: &#39;my-arrow&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>下拉菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">/* 全局样式（非 scoped）：dropdown/content/arrow 需要全局样式 */</span>
<span class="token selector">.my-dropdown</span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 4px 12px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.my-content</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.my-arrow</span> <span class="token punctuation">{</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>0 2px 4px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">/* trigger 可以使用 scoped 样式 */</span>
<span class="token selector">:deep(.my-trigger)</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span>
    <span class="token attr-name">:menu</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      dropdown: { borderRadius: &#39;16px&#39; },
      content: { background: &#39;#667eea&#39;, padding: &#39;4px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>动态样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>dropdown</code>、<code>content</code>、<code>arrow</code> 通过 <code>Teleport</code> 渲染到 body（或 <code>getPopupContainer</code> 指定的容器），其样式必须使用<strong>全局样式</strong>（非 scoped）</li><li><code>arrow</code> 仅在开启 <code>arrow</code> 属性时渲染</li><li>菜单项（menu/item）由 <code>menu</code> prop 传入的 <a href="/components/menu">Menu</a> 组件控制，请使用 Menu 的语义化 API 定制</li><li><code>classNames.trigger</code> 与组件的 <code>class</code> attr、<code>openClassName</code> 会合并应用到触发器容器</li><li><code>styles.dropdown</code> 会与 <code>overlayStyle</code> 合并；<code>styles.trigger</code> 会与组件的 <code>style</code> attr 合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-elevated</code></td><td>浮层背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-error-bg</code></td><td>错误色背景</td><td><code>#fff2f0</code></td></tr><tr><td><code>--hmfw-color-error-hover</code></td><td>错误色悬停态</td><td><code>#ff7875</code></td></tr><tr><td><code>--hmfw-color-split</code></td><td>分割线颜色</td><td><code>rgba(5, 5, 5, 0.06)</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-control-item-bg-hover</code></td><td>控件项悬停背景色</td><td><code>rgba(0, 0, 0, 0.04)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-control-height-sm</code></td><td>小号控件高度</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-margin-xs</code></td><td>超小外边距</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-margin-xxs</code></td><td>超超小外边距</td><td><code>2px</code></td></tr><tr><td><code>--hmfw-padding-sm</code></td><td>小号内边距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-padding-xs</code></td><td>超小内边距</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-padding-xxs</code></td><td>超超小内边距</td><td><code>2px</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>小号圆角</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-box-shadow-secondary</code></td><td>次级阴影</td><td><code>0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>缓入缓出曲线</td><td><code>cubic-bezier(0.645, 0.045, 0.355, 1)</code></td></tr><tr><td><code>--hmfw-z-index-popup</code></td><td>弹出层层级</td><td><code>1050</code></td></tr></tbody></table>`,26))])}}};export{rt as default};
