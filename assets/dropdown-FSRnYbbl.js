import{B as f}from"./Button-CNZPbvb9.js";import{I as X}from"./icons-DuMoCl7A.js";import{k as D,I as Y,L as E,t as z,s as G,j as n,T as U,F as q,z as _,c as R,p as J,w as B,e as M,M as l,G as d,i as u,B as K,g as Q,d as a,h as Z}from"./index-BNHhPN23.js";import{c as N}from"./cls-S9IiI6wd.js";import{S as O}from"./Space-CWm16sbO.js";const b=D({name:"Dropdown",props:{menu:Object,trigger:{type:[String,Array],default:"hover"},placement:{type:String,default:"bottomLeft"},open:{type:Boolean,default:void 0},disabled:Boolean,destroyPopupOnHide:Boolean,arrow:Boolean,mouseEnterDelay:{type:Number,default:.15},mouseLeaveDelay:{type:Number,default:.1}},emits:["update:open","openChange"],setup(s,{slots:r,emit:g}){const o=Y("dropdown"),t=_(null),c=_(null),S=_(!1),L=_({top:0,left:0});let y=null,w=null;const A=R(()=>s.open!==void 0),h=R(()=>A.value?s.open:S.value);E(()=>s.open,e=>{e!==void 0&&(S.value=e)});const C=R(()=>{const e=s.trigger;return Array.isArray(e)?e:[e]}),k=e=>{s.disabled||(S.value=e,g("update:open",e),g("openChange",e))},V=()=>{if(!t.value||!c.value)return;const e=t.value.getBoundingClientRect(),i=window.scrollX,p=window.scrollY,m=s.placement;let v=0,x=0;const P=4;m.startsWith("bottom")?v=e.bottom+p+P:v=e.top+p-c.value.getBoundingClientRect().height-P,m.endsWith("Left")||m==="bottom"||m==="top"?x=e.left+i:m.endsWith("Right")?x=e.right+i-c.value.getBoundingClientRect().width:x=e.left+i+e.width/2-c.value.getBoundingClientRect().width/2,L.value={top:v,left:x}};E(h,async e=>{e&&(await J(),V())});const T=()=>{C.value.includes("hover")&&(w&&(clearTimeout(w),w=null),y=setTimeout(()=>k(!0),s.mouseEnterDelay*1e3))},$=()=>{C.value.includes("hover")&&(y&&(clearTimeout(y),y=null),w=setTimeout(()=>k(!1),s.mouseLeaveDelay*1e3))},W=()=>{C.value.includes("click")&&k(!h.value)},j=e=>{C.value.includes("contextMenu")&&(e.preventDefault(),k(!0))},I=e=>{var i,p;h.value&&((i=t.value)!=null&&i.contains(e.target)||(p=c.value)!=null&&p.contains(e.target)||k(!1))};z(()=>document.addEventListener("mousedown",I)),G(()=>{document.removeEventListener("mousedown",I),y&&clearTimeout(y),w&&clearTimeout(w)});const F=e=>{var i,p,m;e.disabled||((i=e.onClick)==null||i.call(e),(m=(p=s.menu)==null?void 0:p.onClick)==null||m.call(p,{key:e.key}),k(!1))},H=e=>e.map(i=>i.type==="divider"?n("li",{key:i.key,class:`${o}-menu-divider`,role:"separator"},null):n("li",{key:i.key,class:N(`${o}-menu-item`,{[`${o}-menu-item-disabled`]:!!i.disabled,[`${o}-menu-item-danger`]:!!i.danger}),role:"menuitem",onClick:()=>F(i)},[i.icon&&n("span",{class:`${o}-menu-item-icon`},[i.icon]),i.label]));return()=>{var p;const e=(p=r.default)==null?void 0:p.call(r)[0];if(!e)return null;const i=h.value||!s.destroyPopupOnHide;return n(q,null,[n("div",{ref:t,style:{display:"inline-block"},onMouseenter:T,onMouseleave:$,onClick:W,onContextmenu:j},[e]),i&&n(U,{to:"body"},{default:()=>{var m,v;return[n("div",{ref:c,class:N(o,{[`${o}-hidden`]:!h.value}),style:{position:"absolute",top:`${L.value.top}px`,left:`${L.value.left}px`},onMouseenter:T,onMouseleave:$},[((m=r.overlay)==null?void 0:m.call(r))??n("ul",{class:`${o}-menu`,role:"menu"},[H(((v=s.menu)==null?void 0:v.items)??[])])])]}})])}}}),tt=D({__name:"DropdownBasic",setup(s){const r=[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"},{key:"3",label:"菜单项三"}],g=({key:o})=>{console.log("点击了:",o)};return(o,t)=>(B(),M(d(b),{items:r,onClick:g},{default:l(()=>[n(d(f),null,{default:l(()=>[t[0]||(t[0]=u(" 下拉菜单 ",-1)),n(d(X),{type:"down"})]),_:1})]),_:1}))}}),et=`<template>
  <Dropdown :items="items" @click="onMenuClick">
    <Button>
      下拉菜单
      <Icon type="down" />
    </Button>
  </Dropdown>
</template>

<script setup lang="ts">
import { Dropdown, Button, Icon } from 'ant-design-hmfw'

const items = [
  { key: '1', label: '菜单项一' },
  { key: '2', label: '菜单项二' },
  { key: '3', label: '菜单项三' },
]

const onMenuClick = ({ key }: { key: string }) => {
  console.log('点击了:', key)
}
<\/script>
`,nt=D({__name:"DropdownDanger",setup(s){const r=[{key:"edit",label:"编辑"},{key:"copy",label:"复制"},{type:"divider"},{key:"delete",label:"删除",danger:!0}],g=({key:o})=>{console.log("点击了:",o)};return(o,t)=>(B(),M(d(b),{items:r,trigger:"click",onClick:g},{default:l(()=>[n(d(f),null,{default:l(()=>[...t[0]||(t[0]=[u("操作菜单",-1)])]),_:1})]),_:1}))}}),ot=`<template>
  <Dropdown :items="items" trigger="click" @click="onMenuClick">
    <Button>操作菜单</Button>
  </Dropdown>
</template>

<script setup lang="ts">
import { Dropdown, Button } from 'ant-design-hmfw'

const items = [
  { key: 'edit', label: '编辑' },
  { key: 'copy', label: '复制' },
  { type: 'divider' },
  { key: 'delete', label: '删除', danger: true },
]

const onMenuClick = ({ key }: { key: string }) => {
  console.log('点击了:', key)
}
<\/script>
`,dt=D({__name:"DropdownPlacement",setup(s){const r=[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"}];return(g,o)=>(B(),M(d(O),{wrap:""},{default:l(()=>[n(d(b),{items:r,placement:"bottomLeft"},{default:l(()=>[n(d(f),null,{default:l(()=>[...o[0]||(o[0]=[u("左下",-1)])]),_:1})]),_:1}),n(d(b),{items:r,placement:"bottomCenter"},{default:l(()=>[n(d(f),null,{default:l(()=>[...o[1]||(o[1]=[u("居中下",-1)])]),_:1})]),_:1}),n(d(b),{items:r,placement:"bottomRight"},{default:l(()=>[n(d(f),null,{default:l(()=>[...o[2]||(o[2]=[u("右下",-1)])]),_:1})]),_:1}),n(d(b),{items:r,placement:"topLeft"},{default:l(()=>[n(d(f),null,{default:l(()=>[...o[3]||(o[3]=[u("左上",-1)])]),_:1})]),_:1}),n(d(b),{items:r,placement:"topCenter"},{default:l(()=>[n(d(f),null,{default:l(()=>[...o[4]||(o[4]=[u("居中上",-1)])]),_:1})]),_:1}),n(d(b),{items:r,placement:"topRight"},{default:l(()=>[n(d(f),null,{default:l(()=>[...o[5]||(o[5]=[u("右上",-1)])]),_:1})]),_:1})]),_:1}))}}),lt=`<template>
  <Space wrap>
    <Dropdown :items="items" placement="bottomLeft">
      <Button>左下</Button>
    </Dropdown>
    <Dropdown :items="items" placement="bottomCenter">
      <Button>居中下</Button>
    </Dropdown>
    <Dropdown :items="items" placement="bottomRight">
      <Button>右下</Button>
    </Dropdown>
    <Dropdown :items="items" placement="topLeft">
      <Button>左上</Button>
    </Dropdown>
    <Dropdown :items="items" placement="topCenter">
      <Button>居中上</Button>
    </Dropdown>
    <Dropdown :items="items" placement="topRight">
      <Button>右上</Button>
    </Dropdown>
  </Space>
</template>

<script setup lang="ts">
import { Dropdown, Button, Space } from 'ant-design-hmfw'

const items = [
  { key: '1', label: '菜单项一' },
  { key: '2', label: '菜单项二' },
]
<\/script>
`,rt=D({__name:"DropdownTrigger",setup(s){const r=[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"},{key:"3",label:"菜单项三"}];return(g,o)=>(B(),M(d(O),null,{default:l(()=>[n(d(b),{items:r,trigger:"hover"},{default:l(()=>[n(d(f),null,{default:l(()=>[...o[0]||(o[0]=[u("悬停触发",-1)])]),_:1})]),_:1}),n(d(b),{items:r,trigger:"click"},{default:l(()=>[n(d(f),null,{default:l(()=>[...o[1]||(o[1]=[u("点击触发",-1)])]),_:1})]),_:1})]),_:1}))}}),it=`<template>
  <Space>
    <Dropdown :items="items" trigger="hover">
      <Button>悬停触发</Button>
    </Dropdown>
    <Dropdown :items="items" trigger="click">
      <Button>点击触发</Button>
    </Dropdown>
  </Space>
</template>

<script setup lang="ts">
import { Dropdown, Button, Space } from 'ant-design-hmfw'

const items = [
  { key: '1', label: '菜单项一' },
  { key: '2', label: '菜单项二' },
  { key: '3', label: '菜单项三' },
]
<\/script>
`,at={class:"markdown-body"},ft={__name:"dropdown",setup(s,{expose:r}){return r({frontmatter:{}}),(o,t)=>{const c=K("DemoBlock");return B(),Q("div",at,[t[0]||(t[0]=a("h1",{id:"dropdown-",tabindex:"-1"},"Dropdown 下拉菜单",-1)),t[1]||(t[1]=a("p",null,"向下弹出的列表。",-1)),t[2]||(t[2]=a("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=a("ul",null,[a("li",null,"当页面上的操作命令过多时，用此组件可以收纳操作元素"),a("li",null,"点击或移入触点，会出现一个下拉菜单，可从中选择操作项")],-1)),t[4]||(t[4]=a("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=a("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=a("p",null,"最简单的下拉菜单。",-1)),n(c,{title:"基础用法",source:d(et)},{default:l(()=>[n(tt)]),_:1},8,["source"]),t[7]||(t[7]=a("h3",{id:"-3",tabindex:"-1"},"触发方式",-1)),t[8]||(t[8]=a("p",null,[u("通过 "),a("code",null,"trigger"),u(" 属性设置触发方式，支持 "),a("code",null,"hover"),u(" 和 "),a("code",null,"click"),u("。")],-1)),n(c,{title:"触发方式",source:d(it)},{default:l(()=>[n(rt)]),_:1},8,["source"]),t[9]||(t[9]=a("h3",{id:"-4",tabindex:"-1"},"危险选项与分割线",-1)),t[10]||(t[10]=a("p",null,[u("通过 "),a("code",null,"danger"),u(" 属性标记危险操作，通过 "),a("code",null,"type: 'divider'"),u(" 添加分割线。")],-1)),n(c,{title:"危险选项与分割线",source:d(ot)},{default:l(()=>[n(nt)]),_:1},8,["source"]),t[11]||(t[11]=a("h3",{id:"-5",tabindex:"-1"},"弹出位置",-1)),t[12]||(t[12]=a("p",null,[u("通过 "),a("code",null,"placement"),u(" 属性设置弹出位置。")],-1)),n(c,{title:"弹出位置",source:d(lt)},{default:l(()=>[n(dt)]),_:1},8,["source"]),t[13]||(t[13]=Z('<h2 id="api" tabindex="-1">API</h2><h3 id="dropdown-props" tabindex="-1">Dropdown Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>菜单配置项</td><td><code>DropdownItem[]</code></td><td><code>[]</code></td></tr><tr><td>trigger</td><td>触发方式</td><td><code>&#39;hover&#39; | &#39;click&#39;</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>placement</td><td>弹出位置</td><td><code>&#39;bottomLeft&#39; | &#39;bottomCenter&#39; | &#39;bottomRight&#39; | &#39;topLeft&#39; | &#39;topCenter&#39; | &#39;topRight&#39;</code></td><td><code>&#39;bottomLeft&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="dropdownitem" tabindex="-1">DropdownItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>菜单项标题</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>danger</td><td>是否危险样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>type</td><td>菜单项类型，<code>&#39;divider&#39;</code> 为分割线</td><td><code>&#39;divider&#39;</code></td><td>-</td></tr></tbody></table><h3 id="dropdown-events" tabindex="-1">Dropdown Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击菜单项时触发</td><td><code>({ key: string }) =&gt; void</code></td></tr></tbody></table><h3 id="dropdown-slots" tabindex="-1">Dropdown Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发下拉的元素</td></tr></tbody></table>',9))])}}};export{ft as default};
