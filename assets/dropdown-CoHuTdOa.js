import{B as p}from"./Button-DSSb4voj.js";import{D as l}from"./index-dIxoZKWY.js";import{o as g,A as c,k as w,n,K as o,R as e,m as r,i as b,h as d,_ as y,H as k,l as D}from"./index-GV1C9GBE.js";import{I as h}from"./Icon-m2YBXu_N.js";import{S as f}from"./Space-Di9klTqF.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-Bntwy_Yd.js";import"./Menu-BYDkYbHy.js";import"./DownOutlined-ZO2MOa6J.js";const x={style:{display:"flex",gap:"16px","align-items":"center"}},B=g({__name:"DropdownArrow",setup(i){const a={items:[{key:"1",label:"Menu Item 1"},{key:"2",label:"Menu Item 2"},{key:"3",label:"Menu Item 3"}]};return(u,t)=>(c(),w("div",x,[n(o(l),{menu:a,arrow:!0},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[0]||(t[0]=[r("With Arrow",-1)])]),_:1})]),_:1}),n(o(l),{menu:a,arrow:{pointAtCenter:!0}},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[1]||(t[1]=[r("Arrow Point at Center",-1)])]),_:1})]),_:1})]))}}),v=`<template>
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
`,_=g({__name:"DropdownBasic",setup(i){const a={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"},{key:"3",label:"菜单项三"}],onClick:({key:u})=>{console.log("点击了:",u)}};return(u,t)=>(c(),b(o(l),{menu:a},{default:e(()=>[n(o(p),null,{default:e(()=>[t[0]||(t[0]=r(" 下拉菜单 ",-1)),n(o(h),{type:"down"})]),_:1})]),_:1}))}}),N=`<template>
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
`,S={style:{display:"flex",gap:"16px","flex-wrap":"wrap"}},C=g({__name:"DropdownButton",setup(i){const a={items:[{key:"1",label:"Action 1"},{key:"2",label:"Action 2"},{key:"3",label:"Action 3"}]};return(u,t)=>(c(),w("div",S,[n(o(l).Button,{menu:a},{default:e(()=>[...t[0]||(t[0]=[r(" Dropdown ",-1)])]),_:1}),n(o(l).Button,{menu:a,type:"primary"},{default:e(()=>[...t[1]||(t[1]=[r(" Primary ",-1)])]),_:1}),n(o(l).Button,{menu:a,danger:""},{default:e(()=>[...t[2]||(t[2]=[r(" Danger ",-1)])]),_:1}),n(o(l).Button,{menu:a,disabled:""},{default:e(()=>[...t[3]||(t[3]=[r(" Disabled ",-1)])]),_:1})]))}}),A=`<template>
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
`,q={class:"demo-dropdown-classnames"},P={class:"demo-section"},M={class:"demo-section"},R={class:"demo-section"},E={class:"demo-section"},I={class:"demo-section"},V={class:"demo-section"},L=g({__name:"DropdownClassNames",setup(i){const a={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"},{key:"3",label:"菜单项三"}]};return(u,t)=>(c(),w("div",q,[d("section",P,[t[1]||(t[1]=d("h3",null,"1. 自定义触发器样式",-1)),n(o(l),{menu:a,"class-names":{trigger:"custom-trigger"}},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[0]||(t[0]=[r("自定义触发器",-1)])]),_:1})]),_:1})]),d("section",M,[t[3]||(t[3]=d("h3",null,"2. 自定义下拉浮层样式",-1)),n(o(l),{menu:a,"class-names":{dropdown:"custom-dropdown"}},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[2]||(t[2]=[r("自定义浮层",-1)])]),_:1})]),_:1})]),d("section",R,[t[5]||(t[5]=d("h3",null,"3. 自定义内容容器样式",-1)),n(o(l),{menu:a,"class-names":{content:"custom-content"}},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[4]||(t[4]=[r("自定义内容",-1)])]),_:1})]),_:1})]),d("section",E,[t[7]||(t[7]=d("h3",null,"4. 自定义箭头样式",-1)),n(o(l),{menu:a,arrow:!0,"class-names":{arrow:"custom-arrow"}},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[6]||(t[6]=[r("带箭头",-1)])]),_:1})]),_:1})]),d("section",I,[t[9]||(t[9]=d("h3",null,"5. 组合使用多个 classNames",-1)),n(o(l),{menu:a,arrow:!0,"class-names":{trigger:"combined-trigger",dropdown:"combined-dropdown",content:"combined-content",arrow:"combined-arrow"}},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[8]||(t[8]=[r("综合样式",-1)])]),_:1})]),_:1})]),d("section",V,[t[11]||(t[11]=d("h3",null,"6. 使用 styles 动态样式",-1)),n(o(l),{menu:a,styles:{dropdown:{borderRadius:"16px",overflow:"hidden",boxShadow:"0 8px 24px rgba(102, 126, 234, 0.3)"},content:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"4px"}}},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[10]||(t[10]=[r("动态样式",-1)])]),_:1})]),_:1})])]))}}),$=y(L,[["__scopeId","data-v-e5e9c3f2"]]),T=`<template>
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
import { Dropdown, Button } from '../../../components'

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
`,O=g({__name:"DropdownDanger",setup(i){const a={items:[{key:"edit",label:"编辑"},{key:"copy",label:"复制"},{type:"divider"},{key:"delete",label:"删除",danger:!0}],onClick:({key:u})=>{console.log("点击了:",u)}};return(u,t)=>(c(),b(o(l),{menu:a,trigger:"click"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[0]||(t[0]=[r("操作菜单",-1)])]),_:1})]),_:1}))}}),H=`<template>
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
`,F=g({__name:"DropdownPlacement",setup(i){const a={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"}]};return(u,t)=>(c(),b(o(f),{wrap:""},{default:e(()=>[n(o(l),{menu:a,placement:"bottomLeft"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[0]||(t[0]=[r("左下",-1)])]),_:1})]),_:1}),n(o(l),{menu:a,placement:"bottom"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[1]||(t[1]=[r("居中下",-1)])]),_:1})]),_:1}),n(o(l),{menu:a,placement:"bottomRight"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[2]||(t[2]=[r("右下",-1)])]),_:1})]),_:1}),n(o(l),{menu:a,placement:"topLeft"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[3]||(t[3]=[r("左上",-1)])]),_:1})]),_:1}),n(o(l),{menu:a,placement:"top"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[4]||(t[4]=[r("居中上",-1)])]),_:1})]),_:1}),n(o(l),{menu:a,placement:"topRight"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[5]||(t[5]=[r("右上",-1)])]),_:1})]),_:1})]),_:1}))}}),W=`<template>
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
`,j=g({__name:"DropdownTrigger",setup(i){const a={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"},{key:"3",label:"菜单项三"}]};return(u,t)=>(c(),b(o(f),null,{default:e(()=>[n(o(l),{menu:a,trigger:"hover"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[0]||(t[0]=[r("悬停触发",-1)])]),_:1})]),_:1}),n(o(l),{menu:a,trigger:"click"},{default:e(()=>[n(o(p),null,{default:e(()=>[...t[1]||(t[1]=[r("点击触发",-1)])]),_:1})]),_:1})]),_:1}))}}),z=`<template>
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
`,K={class:"markdown-body"},ot={__name:"dropdown",setup(i,{expose:a}){return a({frontmatter:{}}),(t,s)=>{const m=k("DemoBlock");return c(),w("div",K,[s[0]||(s[0]=d("h1",{id:"dropdown-",tabindex:"-1"},"Dropdown 下拉菜单",-1)),s[1]||(s[1]=d("p",null,"向下弹出的列表。",-1)),s[2]||(s[2]=d("h2",{id:"",tabindex:"-1"},"何时使用",-1)),s[3]||(s[3]=d("ul",null,[d("li",null,"当页面上的操作命令过多时，用此组件可以收纳操作元素"),d("li",null,"点击或移入触点，会出现一个下拉菜单，可从中选择操作项")],-1)),s[4]||(s[4]=d("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),s[5]||(s[5]=d("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),s[6]||(s[6]=d("p",null,"最简单的下拉菜单。",-1)),n(m,{title:"基础用法",source:o(N)},{default:e(()=>[n(_)]),_:1},8,["source"]),s[7]||(s[7]=d("h3",{id:"-3",tabindex:"-1"},"触发方式",-1)),s[8]||(s[8]=d("p",null,[r("通过 "),d("code",null,"trigger"),r(" 属性设置触发方式，支持 "),d("code",null,"hover"),r("、"),d("code",null,"click"),r(" 和 "),d("code",null,"contextMenu"),r("。")],-1)),n(m,{title:"触发方式",source:o(z)},{default:e(()=>[n(j)]),_:1},8,["source"]),s[9]||(s[9]=d("h3",{id:"-4",tabindex:"-1"},"危险选项与分割线",-1)),s[10]||(s[10]=d("p",null,[r("通过 "),d("code",null,"danger"),r(" 属性标记危险操作，通过 "),d("code",null,"type: 'divider'"),r(" 添加分割线。")],-1)),n(m,{title:"危险选项与分割线",source:o(H)},{default:e(()=>[n(O)]),_:1},8,["source"]),s[11]||(s[11]=d("h3",{id:"-5",tabindex:"-1"},"弹出位置",-1)),s[12]||(s[12]=d("p",null,[r("通过 "),d("code",null,"placement"),r(" 属性设置弹出位置。")],-1)),n(m,{title:"弹出位置",source:o(W)},{default:e(()=>[n(F)]),_:1},8,["source"]),s[13]||(s[13]=d("h3",{id:"-6",tabindex:"-1"},"箭头",-1)),s[14]||(s[14]=d("p",null,[r("通过 "),d("code",null,"arrow"),r(" 属性显示箭头。")],-1)),n(m,{title:"箭头",source:o(v)},{default:e(()=>[n(B)]),_:1},8,["source"]),s[15]||(s[15]=d("h3",{id:"-7",tabindex:"-1"},"按钮式下拉菜单",-1)),s[16]||(s[16]=d("p",null,[r("使用 "),d("code",null,"Dropdown.Button"),r(" 组件，左边是按钮，右边是额外的相关功能菜单。")],-1)),n(m,{title:"按钮式下拉菜单",source:o(A)},{default:e(()=>[n(C)]),_:1},8,["source"]),s[17]||(s[17]=D(`<h2 id="api" tabindex="-1">API</h2><h3 id="dropdown-props" tabindex="-1">Dropdown Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>menu</td><td>菜单配置项</td><td><code>MenuProps</code></td><td>-</td></tr><tr><td>trigger</td><td>触发方式</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;contextMenu&#39; | Array</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>placement</td><td>弹出位置</td><td><code>&#39;top&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottom&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39;</code></td><td><code>&#39;bottomLeft&#39;</code></td></tr><tr><td>open</td><td>手动控制下拉框显示</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示下拉框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>arrow</td><td>下拉框箭头是否显示</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>false</code></td></tr><tr><td>autoFocus</td><td>打开后自动聚焦下拉框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>overlayClassName</td><td>下拉根元素的类名称</td><td><code>string</code></td><td>-</td></tr><tr><td>overlayStyle</td><td>下拉根元素的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>getPopupContainer</td><td>菜单渲染父节点</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td><code>() =&gt; document.body</code></td></tr><tr><td>autoAdjustOverflow</td><td>下拉框被遮挡时自动调整位置</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>destroyPopupOnHide</td><td>关闭后是否销毁 Dropdown（已废弃，请使用 destroyOnHidden）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnHidden</td><td>关闭后是否销毁 Dropdown</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入后延时多少才显示 Dropdown，单位：秒</td><td><code>number</code></td><td><code>0.15</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出后延时多少才隐藏 Dropdown，单位：秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>popupRender</td><td>自定义下拉框内容</td><td><code>(originNode: VNode) =&gt; VNode</code></td><td>-</td></tr><tr><td>dropdownRender</td><td>自定义下拉框内容（已废弃，请使用 popupRender）</td><td><code>(originNode: VNode) =&gt; VNode</code></td><td>-</td></tr><tr><td>forceRender</td><td>强制渲染 Dropdown</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>openClassName</td><td>菜单展开时给触发元素添加的类名</td><td><code>string</code></td><td>-</td></tr><tr><td>rootClassName</td><td>下拉根元素的类名称</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化 className（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname">详见下方</a>）</td><td><code>DropdownClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 style（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-style">详见下方</a>）</td><td><code>DropdownStyles</code></td><td>-</td></tr></tbody></table><h3 id="dropdown-events" tabindex="-1">Dropdown Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>openChange</td><td>菜单显示状态改变时调用</td><td><code>(open: boolean, info: { source: &#39;trigger&#39; | &#39;menu&#39; }) =&gt; void</code></td></tr></tbody></table><h3 id="dropdown-slots" tabindex="-1">Dropdown Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发下拉的元素</td></tr><tr><td>overlay</td><td>自定义下拉内容（当不使用 menu 时）</td></tr></tbody></table><h3 id="dropdownbutton-props" tabindex="-1">Dropdown.Button Props</h3><p>继承 Dropdown 的所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39; | &#39;dashed&#39; | &#39;link&#39; | &#39;text&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>danger</td><td>设置危险按钮</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>设置按钮载入状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>右侧的 icon</td><td><code>VNode</code></td><td><code>&lt;EllipsisOutlined /&gt;</code></td></tr><tr><td>buttonsRender</td><td>自定义按钮的渲染</td><td><code>(buttons: [VNode, VNode]) =&gt; [VNode, VNode]</code></td><td>-</td></tr></tbody></table><h3 id="dropdownbutton-events" tabindex="-1">Dropdown.Button Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击左侧按钮的回调</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>openChange</td><td>菜单显示状态改变时调用</td><td><code>(open: boolean, info: { source: &#39;trigger&#39; | &#39;menu&#39; }) =&gt; void</code></td></tr></tbody></table><h2 id="-classname" tabindex="-1">语义化 className</h2><p>通过 <code>classNames</code> 属性可以自定义 Dropdown 各部分的 className。</p><h3 id="dropdownclassnames" tabindex="-1">DropdownClassNames</h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>版本</th></tr></thead><tbody><tr><td>trigger</td><td>触发器容器 <code>div</code>（包裹 default slot）</td><td><code>string</code></td><td>-</td></tr><tr><td>dropdown</td><td>下拉浮层根节点 <code>div.hmfw-dropdown</code></td><td><code>string</code></td><td>-</td></tr><tr><td>arrow</td><td>箭头 <code>div.hmfw-dropdown-arrow</code>（需开启 arrow）</td><td><code>string</code></td><td>-</td></tr><tr><td>content</td><td>浮层内容容器 <code>div.hmfw-dropdown-content</code></td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="dom-" tabindex="-1">DOM 结构</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom-trigger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>触发元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- trigger --&gt;</span>

<span class="token comment">&lt;!-- Teleport 到 body --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-dropdown<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- dropdown --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-dropdown-arrow<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- arrow，需开启 arrow --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-dropdown-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- content --&gt;</span>
    <span class="token comment">&lt;!-- 菜单内容（由 menu prop 或 overlay slot 提供） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="-8" tabindex="-1">使用示例</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
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
</code></pre><p><strong>注意事项：</strong></p><ul><li><code>dropdown</code>、<code>content</code>、<code>arrow</code> 通过 <code>Teleport</code> 渲染到 body（或 <code>getPopupContainer</code> 指定的容器），其样式必须使用<strong>全局样式</strong>（非 scoped）</li><li><code>arrow</code> 仅在开启 <code>arrow</code> 属性时渲染</li><li>菜单项（menu/item）由 <code>menu</code> prop 传入的 <a href="/components/menu">Menu</a> 组件控制，请使用 Menu 的语义化 API 定制</li><li><code>classNames.trigger</code> 与组件的 <code>class</code> attr、<code>openClassName</code> 会合并应用到触发器容器</li></ul><h2 id="-style" tabindex="-1">语义化 style</h2><p>通过 <code>styles</code> 属性可以自定义 Dropdown 各部分的 style。</p><h3 id="dropdownstyles" tabindex="-1">DropdownStyles</h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>版本</th></tr></thead><tbody><tr><td>trigger</td><td>触发器容器 <code>div</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>dropdown</td><td>下拉浮层根节点 <code>div.hmfw-dropdown</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>arrow</td><td>箭头 <code>div.hmfw-dropdown-arrow</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>content</td><td>浮层内容容器 <code>div.hmfw-dropdown-content</code></td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="-9" tabindex="-1">使用示例</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
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
</code></pre><p><strong>说明：</strong> <code>styles.dropdown</code> 会与 <code>overlayStyle</code> 合并；<code>styles.trigger</code> 会与组件的 <code>style</code> attr 合并。</p><h3 id="-classname--style" tabindex="-1">语义化 className 与 style</h3>`,30)),n(m,{title:"语义化 className 与 style",source:o(T)},{default:e(()=>[n($)]),_:1},8,["source"])])}}};export{ot as default};
