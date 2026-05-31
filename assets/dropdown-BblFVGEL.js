import{B as w}from"./Button-D5N1epLo.js";import{m as C,L as W,B as L,O as V,v as Z,u as tt,l as e,T as et,F as nt,d as M,q as ot,r as dt,p as rt,y as N,i as H,I as d,P as r,k as u,g as A,E as lt,f as i,j as at}from"./index-BZxHTh1S.js";import{c as E}from"./cls-S9IiI6wd.js";import{M as ut}from"./Menu-C20rar5o.js";import{e as it}from"./icons-D7iQGqyN.js";import{I as z}from"./Icon-B8OCUOt-.js";import{S as U}from"./Space-nMQRznJ5.js";const X=C({name:"Dropdown",props:{menu:Object,trigger:{type:[String,Array],default:"hover"},placement:{type:String,default:"bottomLeft"},open:{type:Boolean,default:void 0},defaultOpen:Boolean,disabled:Boolean,arrow:{type:[Boolean,Object],default:!1},autoFocus:Boolean,overlayClassName:String,overlayStyle:Object,getPopupContainer:Function,autoAdjustOverflow:{type:Boolean,default:!0},destroyPopupOnHide:Boolean,destroyOnHidden:Boolean,mouseEnterDelay:{type:Number,default:.15},mouseLeaveDelay:{type:Number,default:.1},popupRender:Function,dropdownRender:Function,forceRender:Boolean,openClassName:String,rootClassName:String},emits:["update:open","openChange"],setup(t,{slots:l,emit:m}){const n=W("dropdown"),o=L(null),p=L(null),b=L(t.defaultOpen??!1),O=L({top:0,left:0});let D=null,v=null;const B=M(()=>t.open!==void 0),k=M(()=>B.value?t.open:b.value);V(()=>t.open,a=>{a!==void 0&&(b.value=a)});const R=M(()=>{const a=t.trigger;return Array.isArray(a)?a:[a]}),S=(a,s="trigger")=>{t.disabled||(b.value=a,m("update:open",a),m("openChange",a,{source:s}))},_=()=>{if(!o.value||!p.value)return;const a=o.value.getBoundingClientRect(),s=p.value.getBoundingClientRect(),c=window.scrollX,g=window.scrollY,y=t.placement;let x=0,h=0;const P=t.arrow?12:4;if(y.startsWith("bottom")?x=a.bottom+g+P:x=a.top+g-s.height-P,y.endsWith("Left")||y==="bottom"||y==="top"?h=a.left+c:y.endsWith("Right")?h=a.right+c-s.width:h=a.left+c+a.width/2-s.width/2,t.autoAdjustOverflow){const F=window.innerWidth,Q=window.innerHeight;h+s.width>F+c&&(h=F+c-s.width-8),h<c&&(h=c+8),x+s.height>Q+g&&(x=a.top+g-s.height-P),x<g&&(x=a.bottom+g+P)}O.value={top:x,left:h}};V(k,async a=>{a&&(await dt(),_())});const $=()=>{R.value.includes("hover")&&(v&&(clearTimeout(v),v=null),D=setTimeout(()=>S(!0,"trigger"),t.mouseEnterDelay*1e3))},T=()=>{R.value.includes("hover")&&(D&&(clearTimeout(D),D=null),v=setTimeout(()=>S(!1,"trigger"),t.mouseLeaveDelay*1e3))},Y=()=>{R.value.includes("click")&&S(!k.value,"trigger")},q=a=>{R.value.includes("contextMenu")&&(a.preventDefault(),S(!0,"trigger"))},j=a=>{var s,c;k.value&&((s=o.value)!=null&&s.contains(a.target)||(c=p.value)!=null&&c.contains(a.target)||S(!1,"trigger"))};Z(()=>{document.addEventListener("mousedown",j),window.addEventListener("resize",_),window.addEventListener("scroll",_,!0)}),tt(()=>{document.removeEventListener("mousedown",j),window.removeEventListener("resize",_),window.removeEventListener("scroll",_,!0),D&&clearTimeout(D),v&&clearTimeout(v)});const G=a=>{var s,c,g,y;(c=(s=t.menu)==null?void 0:s.onClick)==null||c.call(s,a),!((g=t.menu)!=null&&g.selectable&&((y=t.menu)!=null&&y.multiple))&&S(!1,"menu")},J=()=>{var c,g;if(!((c=t.menu)!=null&&c.items))return(g=l.overlay)==null?void 0:g.call(l);const a=e(ut,ot(t.menu,{mode:"vertical",selectable:t.menu.selectable??!1,onClick:G}),null),s=t.popupRender||t.dropdownRender;return s?s(a):a},K=()=>t.getPopupContainer&&o.value?t.getPopupContainer(o.value):document.body;return()=>{var y;const a=(y=l.default)==null?void 0:y.call(l)[0];if(!a)return null;const s=t.destroyOnHidden??t.destroyPopupOnHide??!1,c=k.value||!s||t.forceRender,g=E(t.openClassName&&k.value?t.openClassName:null);return e(nt,null,[e("div",{ref:o,class:g,style:{display:"inline-block"},onMouseenter:$,onMouseleave:T,onClick:Y,onContextmenu:q},[a]),c&&e(et,{to:K()},{default:()=>[e("div",{ref:p,class:E(n,t.overlayClassName,t.rootClassName,`${n}-placement-${t.placement}`,{[`${n}-hidden`]:!k.value,[`${n}-show-arrow`]:!!t.arrow}),style:{position:"absolute",top:`${O.value.top}px`,left:`${O.value.left}px`,...t.overlayStyle},onMouseenter:$,onMouseleave:T},[t.arrow&&e("div",{class:`${n}-arrow`},null),e("div",{class:`${n}-content`},[J()])])]})])}}});function I(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!rt(t)}const st=C({name:"DropdownButton",props:{type:{type:String,default:"default"},danger:Boolean,disabled:Boolean,loading:Boolean,icon:Object,onClick:Function,buttonsRender:Function,menu:Object,trigger:{type:[String,Array],default:"hover"},placement:{type:String,default:"bottomRight"},open:Boolean,arrow:[Boolean,Object],autoFocus:Boolean,overlayClassName:String,overlayStyle:Object,getPopupContainer:Function,mouseEnterDelay:Number,mouseLeaveDelay:Number,destroyPopupOnHide:Boolean,destroyOnHidden:Boolean},emits:["update:open","openChange","click"],setup(t,{slots:l,emit:m}){const n=W("dropdown-button"),o=p=>{var b;m("click",p),(b=t.onClick)==null||b.call(t,p)};return()=>{const p=e(w,{type:t.type,danger:t.danger,disabled:t.disabled,loading:t.loading,onClick:o},{default:()=>{var B;return[(B=l.default)==null?void 0:B.call(l)]}}),b=t.icon||e(z,{component:it},null),O=e(w,{type:t.type,danger:t.danger,disabled:t.disabled},I(b)?b:{default:()=>[b]}),[D,v]=t.buttonsRender?t.buttonsRender([p,O]):[p,O];return e("div",{class:E(n)},[D,e(X,{menu:t.menu,trigger:t.disabled?[]:t.trigger,placement:t.placement,open:t.open,arrow:t.arrow,autoFocus:t.autoFocus,overlayClassName:t.overlayClassName,overlayStyle:t.overlayStyle,getPopupContainer:t.getPopupContainer,mouseEnterDelay:t.mouseEnterDelay,mouseLeaveDelay:t.mouseLeaveDelay,destroyPopupOnHide:t.destroyPopupOnHide,destroyOnHidden:t.destroyOnHidden,"onUpdate:open":B=>m("update:open",B),onOpenChange:(B,k)=>m("openChange",B,k)},I(v)?v:{default:()=>[v]})])}}}),f=X;f.Button=st;const ct={style:{display:"flex",gap:"16px","align-items":"center"}},mt=C({__name:"DropdownArrow",setup(t){const l={items:[{key:"1",label:"Menu Item 1"},{key:"2",label:"Menu Item 2"},{key:"3",label:"Menu Item 3"}]};return(m,n)=>(N(),H("div",ct,[e(d(f),{menu:l,arrow:!0},{default:r(()=>[e(d(w),null,{default:r(()=>[...n[0]||(n[0]=[u("With Arrow",-1)])]),_:1})]),_:1}),e(d(f),{menu:l,arrow:{pointAtCenter:!0}},{default:r(()=>[e(d(w),null,{default:r(()=>[...n[1]||(n[1]=[u("Arrow Point at Center",-1)])]),_:1})]),_:1})]))}}),pt=`<template>
  <div style="display: flex; gap: 16px; align-items: center;">
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
`,ft=C({__name:"DropdownBasic",setup(t){const l={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"},{key:"3",label:"菜单项三"}],onClick:({key:m})=>{console.log("点击了:",m)}};return(m,n)=>(N(),A(d(f),{menu:l},{default:r(()=>[e(d(w),null,{default:r(()=>[n[0]||(n[0]=u(" 下拉菜单 ",-1)),e(d(z),{type:"down"})]),_:1})]),_:1}))}}),gt=`<template>
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
`,wt={style:{display:"flex",gap:"16px","flex-wrap":"wrap"}},yt=C({__name:"DropdownButton",setup(t){const l={items:[{key:"1",label:"Action 1"},{key:"2",label:"Action 2"},{key:"3",label:"Action 3"}]};return(m,n)=>(N(),H("div",wt,[e(d(f).Button,{menu:l},{default:r(()=>[...n[0]||(n[0]=[u(" Dropdown ",-1)])]),_:1}),e(d(f).Button,{menu:l,type:"primary"},{default:r(()=>[...n[1]||(n[1]=[u(" Primary ",-1)])]),_:1}),e(d(f).Button,{menu:l,danger:""},{default:r(()=>[...n[2]||(n[2]=[u(" Danger ",-1)])]),_:1}),e(d(f).Button,{menu:l,disabled:""},{default:r(()=>[...n[3]||(n[3]=[u(" Disabled ",-1)])]),_:1})]))}}),bt=`<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
    <Dropdown.Button :menu="menu">
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button :menu="menu" type="primary">
      Primary
    </Dropdown.Button>
    <Dropdown.Button :menu="menu" danger>
      Danger
    </Dropdown.Button>
    <Dropdown.Button :menu="menu" disabled>
      Disabled
    </Dropdown.Button>
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
`,vt=C({__name:"DropdownDanger",setup(t){const l={items:[{key:"edit",label:"编辑"},{key:"copy",label:"复制"},{type:"divider"},{key:"delete",label:"删除",danger:!0}],onClick:({key:m})=>{console.log("点击了:",m)}};return(m,n)=>(N(),A(d(f),{menu:l,trigger:"click"},{default:r(()=>[e(d(w),null,{default:r(()=>[...n[0]||(n[0]=[u("操作菜单",-1)])]),_:1})]),_:1}))}}),Dt=`<template>
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
`,Bt=C({__name:"DropdownPlacement",setup(t){const l={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"}]};return(m,n)=>(N(),A(d(U),{wrap:""},{default:r(()=>[e(d(f),{menu:l,placement:"bottomLeft"},{default:r(()=>[e(d(w),null,{default:r(()=>[...n[0]||(n[0]=[u("左下",-1)])]),_:1})]),_:1}),e(d(f),{menu:l,placement:"bottom"},{default:r(()=>[e(d(w),null,{default:r(()=>[...n[1]||(n[1]=[u("居中下",-1)])]),_:1})]),_:1}),e(d(f),{menu:l,placement:"bottomRight"},{default:r(()=>[e(d(w),null,{default:r(()=>[...n[2]||(n[2]=[u("右下",-1)])]),_:1})]),_:1}),e(d(f),{menu:l,placement:"topLeft"},{default:r(()=>[e(d(w),null,{default:r(()=>[...n[3]||(n[3]=[u("左上",-1)])]),_:1})]),_:1}),e(d(f),{menu:l,placement:"top"},{default:r(()=>[e(d(w),null,{default:r(()=>[...n[4]||(n[4]=[u("居中上",-1)])]),_:1})]),_:1}),e(d(f),{menu:l,placement:"topRight"},{default:r(()=>[e(d(w),null,{default:r(()=>[...n[5]||(n[5]=[u("右上",-1)])]),_:1})]),_:1})]),_:1}))}}),kt=`<template>
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
`,ht=C({__name:"DropdownTrigger",setup(t){const l={items:[{key:"1",label:"菜单项一"},{key:"2",label:"菜单项二"},{key:"3",label:"菜单项三"}]};return(m,n)=>(N(),A(d(U),null,{default:r(()=>[e(d(f),{menu:l,trigger:"hover"},{default:r(()=>[e(d(w),null,{default:r(()=>[...n[0]||(n[0]=[u("悬停触发",-1)])]),_:1})]),_:1}),e(d(f),{menu:l,trigger:"click"},{default:r(()=>[e(d(w),null,{default:r(()=>[...n[1]||(n[1]=[u("点击触发",-1)])]),_:1})]),_:1})]),_:1}))}}),Ct=`<template>
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
`,xt={class:"markdown-body"},At={__name:"dropdown",setup(t,{expose:l}){return l({frontmatter:{}}),(n,o)=>{const p=lt("DemoBlock");return N(),H("div",xt,[o[0]||(o[0]=i("h1",{id:"dropdown-",tabindex:"-1"},"Dropdown 下拉菜单",-1)),o[1]||(o[1]=i("p",null,"向下弹出的列表。",-1)),o[2]||(o[2]=i("h2",{id:"",tabindex:"-1"},"何时使用",-1)),o[3]||(o[3]=i("ul",null,[i("li",null,"当页面上的操作命令过多时，用此组件可以收纳操作元素"),i("li",null,"点击或移入触点，会出现一个下拉菜单，可从中选择操作项")],-1)),o[4]||(o[4]=i("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),o[5]||(o[5]=i("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),o[6]||(o[6]=i("p",null,"最简单的下拉菜单。",-1)),e(p,{title:"基础用法",source:d(gt)},{default:r(()=>[e(ft)]),_:1},8,["source"]),o[7]||(o[7]=i("h3",{id:"-3",tabindex:"-1"},"触发方式",-1)),o[8]||(o[8]=i("p",null,[u("通过 "),i("code",null,"trigger"),u(" 属性设置触发方式，支持 "),i("code",null,"hover"),u("、"),i("code",null,"click"),u(" 和 "),i("code",null,"contextMenu"),u("。")],-1)),e(p,{title:"触发方式",source:d(Ct)},{default:r(()=>[e(ht)]),_:1},8,["source"]),o[9]||(o[9]=i("h3",{id:"-4",tabindex:"-1"},"危险选项与分割线",-1)),o[10]||(o[10]=i("p",null,[u("通过 "),i("code",null,"danger"),u(" 属性标记危险操作，通过 "),i("code",null,"type: 'divider'"),u(" 添加分割线。")],-1)),e(p,{title:"危险选项与分割线",source:d(Dt)},{default:r(()=>[e(vt)]),_:1},8,["source"]),o[11]||(o[11]=i("h3",{id:"-5",tabindex:"-1"},"弹出位置",-1)),o[12]||(o[12]=i("p",null,[u("通过 "),i("code",null,"placement"),u(" 属性设置弹出位置。")],-1)),e(p,{title:"弹出位置",source:d(kt)},{default:r(()=>[e(Bt)]),_:1},8,["source"]),o[13]||(o[13]=i("h3",{id:"-6",tabindex:"-1"},"箭头",-1)),o[14]||(o[14]=i("p",null,[u("通过 "),i("code",null,"arrow"),u(" 属性显示箭头。")],-1)),e(p,{title:"箭头",source:d(pt)},{default:r(()=>[e(mt)]),_:1},8,["source"]),o[15]||(o[15]=i("h3",{id:"-7",tabindex:"-1"},"按钮式下拉菜单",-1)),o[16]||(o[16]=i("p",null,[u("使用 "),i("code",null,"Dropdown.Button"),u(" 组件，左边是按钮，右边是额外的相关功能菜单。")],-1)),e(p,{title:"按钮式下拉菜单",source:d(bt)},{default:r(()=>[e(yt)]),_:1},8,["source"]),o[17]||(o[17]=at('<h2 id="api" tabindex="-1">API</h2><h3 id="dropdown-props" tabindex="-1">Dropdown Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>menu</td><td>菜单配置项</td><td><code>MenuProps</code></td><td>-</td></tr><tr><td>trigger</td><td>触发方式</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;contextMenu&#39; | Array</code></td><td><code>&#39;hover&#39;</code></td></tr><tr><td>placement</td><td>弹出位置</td><td><code>&#39;top&#39; | &#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottom&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39;</code></td><td><code>&#39;bottomLeft&#39;</code></td></tr><tr><td>open</td><td>手动控制下拉框显示</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示下拉框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>arrow</td><td>下拉框箭头是否显示</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>false</code></td></tr><tr><td>autoFocus</td><td>打开后自动聚焦下拉框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>overlayClassName</td><td>下拉根元素的类名称</td><td><code>string</code></td><td>-</td></tr><tr><td>overlayStyle</td><td>下拉根元素的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>getPopupContainer</td><td>菜单渲染父节点</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td><code>() =&gt; document.body</code></td></tr><tr><td>autoAdjustOverflow</td><td>下拉框被遮挡时自动调整位置</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>destroyPopupOnHide</td><td>关闭后是否销毁 Dropdown（已废弃，请使用 destroyOnHidden）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnHidden</td><td>关闭后是否销毁 Dropdown</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入后延时多少才显示 Dropdown，单位：秒</td><td><code>number</code></td><td><code>0.15</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出后延时多少才隐藏 Dropdown，单位：秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>popupRender</td><td>自定义下拉框内容</td><td><code>(originNode: VNode) =&gt; VNode</code></td><td>-</td></tr><tr><td>dropdownRender</td><td>自定义下拉框内容（已废弃，请使用 popupRender）</td><td><code>(originNode: VNode) =&gt; VNode</code></td><td>-</td></tr><tr><td>forceRender</td><td>强制渲染 Dropdown</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>openClassName</td><td>菜单展开时给触发元素添加的类名</td><td><code>string</code></td><td>-</td></tr><tr><td>rootClassName</td><td>下拉根元素的类名称</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="dropdown-events" tabindex="-1">Dropdown Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>openChange</td><td>菜单显示状态改变时调用</td><td><code>(open: boolean, info: { source: &#39;trigger&#39; | &#39;menu&#39; }) =&gt; void</code></td></tr></tbody></table><h3 id="dropdown-slots" tabindex="-1">Dropdown Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发下拉的元素</td></tr><tr><td>overlay</td><td>自定义下拉内容（当不使用 menu 时）</td></tr></tbody></table><h3 id="dropdownbutton-props" tabindex="-1">Dropdown.Button Props</h3><p>继承 Dropdown 的所有属性，额外支持：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39; | &#39;dashed&#39; | &#39;link&#39; | &#39;text&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>danger</td><td>设置危险按钮</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>设置按钮载入状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>右侧的 icon</td><td><code>VNode</code></td><td><code>&lt;EllipsisOutlined /&gt;</code></td></tr><tr><td>buttonsRender</td><td>自定义按钮的渲染</td><td><code>(buttons: [VNode, VNode]) =&gt; [VNode, VNode]</code></td><td>-</td></tr></tbody></table><h3 id="dropdownbutton-events" tabindex="-1">Dropdown.Button Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击左侧按钮的回调</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>openChange</td><td>菜单显示状态改变时调用</td><td><code>(open: boolean, info: { source: &#39;trigger&#39; | &#39;menu&#39; }) =&gt; void</code></td></tr></tbody></table>',12))])}}};export{At as default};
