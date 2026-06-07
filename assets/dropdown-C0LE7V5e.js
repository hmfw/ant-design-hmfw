import{B as a}from"./Button-dLk1ExkL.js";import{D as p}from"./index-De6_Plia.js";import{n as b,z as s,j as f,m as t,J as d,Q as n,l as r,h as w,G as y,g as l,k as D}from"./index-DBrYVvYd.js";import{I as k}from"./Icon-CiCvy_Uq.js";import{S as g}from"./Space-Dz5A7DSP.js";import"./icons-CTzpiRs0.js";import"./cls-S9IiI6wd.js";import"./Menu-DmbPpS6q.js";const B={style:{display:"flex",gap:"16px","align-items":"center"}},x=b({__name:"DropdownArrow",setup(m){const u={items:[{key:"1",label:"Menu Item 1"},{key:"2",label:"Menu Item 2"},{key:"3",label:"Menu Item 3"}]};return(i,e)=>(s(),f("div",B,[t(d(p),{menu:u,arrow:!0},{default:n(()=>[t(d(a),null,{default:n(()=>[...e[0]||(e[0]=[r("With Arrow",-1)])]),_:1})]),_:1}),t(d(p),{menu:u,arrow:{pointAtCenter:!0}},{default:n(()=>[t(d(a),null,{default:n(()=>[...e[1]||(e[1]=[r("Arrow Point at Center",-1)])]),_:1})]),_:1})]))}}),_=`<template>
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
`,v=b({__name:"DropdownBasic",setup(m){const u={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"},{key:"3",label:"菜单项三"}],onClick:({key:i})=>{console.log("点击了:",i)}};return(i,e)=>(s(),w(d(p),{menu:u},{default:n(()=>[t(d(a),null,{default:n(()=>[e[0]||(e[0]=r(" 下拉菜单 ",-1)),t(d(k),{type:"down"})]),_:1})]),_:1}))}}),h=`<template>
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
`,C={style:{display:"flex",gap:"16px","flex-wrap":"wrap"}},N=b({__name:"DropdownButton",setup(m){const u={items:[{key:"1",label:"Action 1"},{key:"2",label:"Action 2"},{key:"3",label:"Action 3"}]};return(i,e)=>(s(),f("div",C,[t(d(p).Button,{menu:u},{default:n(()=>[...e[0]||(e[0]=[r(" Dropdown ",-1)])]),_:1}),t(d(p).Button,{menu:u,type:"primary"},{default:n(()=>[...e[1]||(e[1]=[r(" Primary ",-1)])]),_:1}),t(d(p).Button,{menu:u,danger:""},{default:n(()=>[...e[2]||(e[2]=[r(" Danger ",-1)])]),_:1}),t(d(p).Button,{menu:u,disabled:""},{default:n(()=>[...e[3]||(e[3]=[r(" Disabled ",-1)])]),_:1})]))}}),S=`<template>
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
`,A=b({__name:"DropdownDanger",setup(m){const u={items:[{key:"edit",label:"编辑"},{key:"copy",label:"复制"},{type:"divider"},{key:"delete",label:"删除",danger:!0}],onClick:({key:i})=>{console.log("点击了:",i)}};return(i,e)=>(s(),w(d(p),{menu:u,trigger:"click"},{default:n(()=>[t(d(a),null,{default:n(()=>[...e[0]||(e[0]=[r("操作菜单",-1)])]),_:1})]),_:1}))}}),P=`<template>
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
`,V=b({__name:"DropdownPlacement",setup(m){const u={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"}]};return(i,e)=>(s(),w(d(g),{wrap:""},{default:n(()=>[t(d(p),{menu:u,placement:"bottomLeft"},{default:n(()=>[t(d(a),null,{default:n(()=>[...e[0]||(e[0]=[r("左下",-1)])]),_:1})]),_:1}),t(d(p),{menu:u,placement:"bottom"},{default:n(()=>[t(d(a),null,{default:n(()=>[...e[1]||(e[1]=[r("居中下",-1)])]),_:1})]),_:1}),t(d(p),{menu:u,placement:"bottomRight"},{default:n(()=>[t(d(a),null,{default:n(()=>[...e[2]||(e[2]=[r("右下",-1)])]),_:1})]),_:1}),t(d(p),{menu:u,placement:"topLeft"},{default:n(()=>[t(d(a),null,{default:n(()=>[...e[3]||(e[3]=[r("左上",-1)])]),_:1})]),_:1}),t(d(p),{menu:u,placement:"top"},{default:n(()=>[t(d(a),null,{default:n(()=>[...e[4]||(e[4]=[r("居中上",-1)])]),_:1})]),_:1}),t(d(p),{menu:u,placement:"topRight"},{default:n(()=>[t(d(a),null,{default:n(()=>[...e[5]||(e[5]=[r("右上",-1)])]),_:1})]),_:1})]),_:1}))}}),M=`<template>
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
`,I=b({__name:"DropdownTrigger",setup(m){const u={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"},{key:"3",label:"菜单项三"}]};return(i,e)=>(s(),w(d(g),null,{default:n(()=>[t(d(p),{menu:u,trigger:"hover"},{default:n(()=>[t(d(a),null,{default:n(()=>[...e[0]||(e[0]=[r("悬停触发",-1)])]),_:1})]),_:1}),t(d(p),{menu:u,trigger:"click"},{default:n(()=>[t(d(a),null,{default:n(()=>[...e[1]||(e[1]=[r("点击触发",-1)])]),_:1})]),_:1})]),_:1}))}}),R=`<template>
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
`,L={class:"markdown-body"},F={__name:"dropdown",setup(m,{expose:u}){return u({frontmatter:{}}),(e,o)=>{const c=y("DemoBlock");return s(),f("div",L,[o[0]||(o[0]=l("h1",{id:"dropdown-",tabindex:"-1"},"Dropdown 下拉菜单",-1)),o[1]||(o[1]=l("p",null,"向下弹出的列表。",-1)),o[2]||(o[2]=l("h2",{id:"",tabindex:"-1"},"何时使用",-1)),o[3]||(o[3]=l("ul",null,[l("li",null,"当页面上的操作命令过多时，用此组件可以收纳操作元素"),l("li",null,"点击或移入触点，会出现一个下拉菜单，可从中选择操作项")],-1)),o[4]||(o[4]=l("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),o[5]||(o[5]=l("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),o[6]||(o[6]=l("p",null,"最简单的下拉菜单。",-1)),t(c,{title:"基础用法",source:d(h)},{default:n(()=>[t(v)]),_:1},8,["source"]),o[7]||(o[7]=l("h3",{id:"-3",tabindex:"-1"},"触发方式",-1)),o[8]||(o[8]=l("p",null,[r("通过 "),l("code",null,"trigger"),r(" 属性设置触发方式，支持 "),l("code",null,"hover"),r("、"),l("code",null,"click"),r(" 和 "),l("code",null,"contextMenu"),r("。")],-1)),t(c,{title:"触发方式",source:d(R)},{default:n(()=>[t(I)]),_:1},8,["source"]),o[9]||(o[9]=l("h3",{id:"-4",tabindex:"-1"},"危险选项与分割线",-1)),o[10]||(o[10]=l("p",null,[r("通过 "),l("code",null,"danger"),r(" 属性标记危险操作，通过 "),l("code",null,"type: 'divider'"),r(" 添加分割线。")],-1)),t(c,{title:"危险选项与分割线",source:d(P)},{default:n(()=>[t(A)]),_:1},8,["source"]),o[11]||(o[11]=l("h3",{id:"-5",tabindex:"-1"},"弹出位置",-1)),o[12]||(o[12]=l("p",null,[r("通过 "),l("code",null,"placement"),r(" 属性设置弹出位置。")],-1)),t(c,{title:"弹出位置",source:d(M)},{default:n(()=>[t(V)]),_:1},8,["source"]),o[13]||(o[13]=l("h3",{id:"-6",tabindex:"-1"},"箭头",-1)),o[14]||(o[14]=l("p",null,[r("通过 "),l("code",null,"arrow"),r(" 属性显示箭头。")],-1)),t(c,{title:"箭头",source:d(_)},{default:n(()=>[t(x)]),_:1},8,["source"]),o[15]||(o[15]=l("h3",{id:"-7",tabindex:"-1"},"按钮式下拉菜单",-1)),o[16]||(o[16]=l("p",null,[r("使用 "),l("code",null,"Dropdown.Button"),r(" 组件，左边是按钮，右边是额外的相关功能菜单。")],-1)),t(c,{title:"按钮式下拉菜单",source:d(S)},{default:n(()=>[t(N)]),_:1},8,["source"]),o[17]||(o[17]=D('<h2 id="api" tabindex="-1">API</h2><h3 id="dropdown-props" tabindex="-1">Dropdown Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>menu</td><td>菜单配置项</td><td><code>MenuProps</code></td><td>-</td></tr><tr><td>trigger</td><td>触发方式</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;contextMenu&#39; | Array</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>placement</td><td>弹出位置</td><td><code>&#39;top&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottom&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39;</code></td><td><code>&#39;bottomLeft&#39;</code></td></tr><tr><td>open</td><td>手动控制下拉框显示</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示下拉框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>arrow</td><td>下拉框箭头是否显示</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>false</code></td></tr><tr><td>autoFocus</td><td>打开后自动聚焦下拉框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>overlayClassName</td><td>下拉根元素的类名称</td><td><code>string</code></td><td>-</td></tr><tr><td>overlayStyle</td><td>下拉根元素的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>getPopupContainer</td><td>菜单渲染父节点</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td><code>() =&gt; document.body</code></td></tr><tr><td>autoAdjustOverflow</td><td>下拉框被遮挡时自动调整位置</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>destroyPopupOnHide</td><td>关闭后是否销毁 Dropdown（已废弃，请使用 destroyOnHidden）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnHidden</td><td>关闭后是否销毁 Dropdown</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入后延时多少才显示 Dropdown，单位：秒</td><td><code>number</code></td><td><code>0.15</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出后延时多少才隐藏 Dropdown，单位：秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>popupRender</td><td>自定义下拉框内容</td><td><code>(originNode: VNode) =&gt; VNode</code></td><td>-</td></tr><tr><td>dropdownRender</td><td>自定义下拉框内容（已废弃，请使用 popupRender）</td><td><code>(originNode: VNode) =&gt; VNode</code></td><td>-</td></tr><tr><td>forceRender</td><td>强制渲染 Dropdown</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>openClassName</td><td>菜单展开时给触发元素添加的类名</td><td><code>string</code></td><td>-</td></tr><tr><td>rootClassName</td><td>下拉根元素的类名称</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="dropdown-events" tabindex="-1">Dropdown Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>openChange</td><td>菜单显示状态改变时调用</td><td><code>(open: boolean, info: { source: &#39;trigger&#39; | &#39;menu&#39; }) =&gt; void</code></td></tr></tbody></table><h3 id="dropdown-slots" tabindex="-1">Dropdown Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发下拉的元素</td></tr><tr><td>overlay</td><td>自定义下拉内容（当不使用 menu 时）</td></tr></tbody></table><h3 id="dropdownbutton-props" tabindex="-1">Dropdown.Button Props</h3><p>继承 Dropdown 的所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39; | &#39;dashed&#39; | &#39;link&#39; | &#39;text&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>danger</td><td>设置危险按钮</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>设置按钮载入状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>右侧的 icon</td><td><code>VNode</code></td><td><code>&lt;EllipsisOutlined /&gt;</code></td></tr><tr><td>buttonsRender</td><td>自定义按钮的渲染</td><td><code>(buttons: [VNode, VNode]) =&gt; [VNode, VNode]</code></td><td>-</td></tr></tbody></table><h3 id="dropdownbutton-events" tabindex="-1">Dropdown.Button Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击左侧按钮的回调</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>openChange</td><td>菜单显示状态改变时调用</td><td><code>(open: boolean, info: { source: &#39;trigger&#39; | &#39;menu&#39; }) =&gt; void</code></td></tr></tbody></table>',12))])}}};export{F as default};
