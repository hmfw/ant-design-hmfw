import{m as B,L as G,B as m,O as J,l as k,d as x,y as N,g as I,I as g,i as U,F as Q,f as y,H as R,E as W,P as E,j as X}from"./index-CsoOETlJ.js";import{c as D}from"./cls-S9IiI6wd.js";const L=B({name:"Tree",props:{treeData:{type:Array,default:()=>[]},expandedKeys:Array,defaultExpandedKeys:{type:Array,default:()=>[]},defaultExpandAll:Boolean,selectedKeys:Array,defaultSelectedKeys:{type:Array,default:()=>[]},checkedKeys:Array,defaultCheckedKeys:{type:Array,default:()=>[]},checkable:Boolean,checkStrictly:Boolean,multiple:Boolean,selectable:{type:Boolean,default:!0},disabled:Boolean,showLine:Boolean,showIcon:Boolean,blockNode:Boolean,indent:{type:Number,default:24},fieldNames:Object},emits:["update:expandedKeys","update:selectedKeys","update:checkedKeys","expand","select","check"],setup(t,{emit:c}){const d=G("tree"),b=x(()=>{var e;return((e=t.fieldNames)==null?void 0:e.key)??"key"}),l=x(()=>{var e;return((e=t.fieldNames)==null?void 0:e.title)??"title"}),r=x(()=>{var e;return((e=t.fieldNames)==null?void 0:e.children)??"children"}),i=e=>e[b.value],M=e=>e[l.value],v=e=>e[r.value],S=e=>e.flatMap(a=>[i(a),...S(v(a)??[])]),C=m(t.defaultExpandAll?S(t.treeData):[...t.defaultExpandedKeys]),_=m([...t.defaultSelectedKeys]),j=m([...t.defaultCheckedKeys]),K=x(()=>t.expandedKeys??C.value),$=x(()=>t.selectedKeys??_.value),p=x(()=>t.checkedKeys??j.value);J(()=>t.treeData,()=>{t.defaultExpandAll&&(C.value=S(t.treeData))});const F=(e,a=0,n=null,s="0")=>e.flatMap((u,h)=>{const f=i(u),o=v(u),w=`${s}-${h}`,T=[{node:u,level:a,parentKey:n,hasChildren:!!(o!=null&&o.length),pos:w}];return o!=null&&o.length&&K.value.includes(f)&&T.push(...F(o,a+1,f,w)),T}),V=x(()=>F(t.treeData)),A=e=>e.flatMap(a=>{const n=v(a);return[i(a),...A(n??[])]}),P=(e,a,n=[])=>{for(const s of a){const u=v(s);if(i(s)===e)return n;if(u!=null&&u.length){const h=P(e,u,[...n,i(s)]);if(h.length>n.length)return h}}return n},O=e=>{const a=K.value.includes(e)?K.value.filter(n=>n!==e):[...K.value,e];C.value=a,c("update:expandedKeys",a),c("expand",a,{expanded:!K.value.includes(e),node:e})},H=(e,a)=>{if(!t.selectable||a.disabled||t.disabled)return;let n;t.multiple?n=$.value.includes(e)?$.value.filter(s=>s!==e):[...$.value,e]:n=$.value[0]===e?[]:[e],_.value=n,c("update:selectedKeys",n),c("select",n,{selected:n.includes(e),node:a})},q=(e,a)=>{if(a.disableCheckbox||a.disabled||t.disabled)return;const n=p.value.includes(e);let s;if(t.checkStrictly)s=n?p.value.filter(u=>u!==e):[...p.value,e];else{const u=v(a),h=A(u??[]);if(n){s=p.value.filter(o=>o!==e&&!h.includes(o));const f=P(e,t.treeData);s=s.filter(o=>!f.includes(o))}else s=[...new Set([...p.value,e,...h])]}j.value=s,c("update:checkedKeys",s),c("check",s,{checked:!n,node:a})};return()=>k("div",{class:D(d,{[`${d}-show-line`]:t.showLine,[`${d}-block-node`]:t.blockNode,[`${d}-disabled`]:t.disabled}),role:"tree","aria-multiselectable":t.multiple||void 0},[V.value.map(({node:e,level:a,hasChildren:n})=>{const s=i(e),u=M(e),h=K.value.includes(s),f=$.value.includes(s),o=p.value.includes(s),w=v(e),T=!o&&!t.checkStrictly&&!!(w&&A(w).some(z=>p.value.includes(z)));return k("div",{key:s,class:D(`${d}-treenode`,{[`${d}-treenode-selected`]:f,[`${d}-treenode-disabled`]:e.disabled||t.disabled,[`${d}-treenode-leaf`]:!n}),role:"treeitem","aria-level":a+1,"aria-expanded":n?h:void 0,"aria-selected":t.selectable?f:void 0,"aria-checked":t.checkable?o:void 0,"aria-disabled":e.disabled||t.disabled||void 0,style:{paddingLeft:`${a*t.indent}px`}},[k("span",{class:D(`${d}-switcher`,{[`${d}-switcher_open`]:n&&h,[`${d}-switcher_close`]:n&&!h,[`${d}-switcher-noop`]:!n}),onClick:()=>n&&O(s)},[n?h?"▾":"▸":null]),t.checkable&&k("span",{class:D(`${d}-checkbox`,{[`${d}-checkbox-checked`]:o,[`${d}-checkbox-indeterminate`]:T,[`${d}-checkbox-disabled`]:e.disableCheckbox||e.disabled||t.disabled}),onClick:()=>q(s,e)},[k("span",{class:`${d}-checkbox-inner`},null)]),k("span",{class:D(`${d}-node-content-wrapper`,{[`${d}-node-content-wrapper-normal`]:!n,[`${d}-node-selected`]:f}),onClick:()=>H(s,e)},[k("span",{class:`${d}-title`},[u])])])})])}}),Y=B({__name:"TreeBasic",setup(t){const c=m(["0-0","0-0-0"]),d=m([]),b=[{title:"父节点 1",key:"0-0",children:[{title:"父节点 1-0",key:"0-0-0",children:[{title:"叶子节点",key:"0-0-0-0"},{title:"叶子节点",key:"0-0-0-1"}]},{title:"父节点 1-1",key:"0-0-1",children:[{title:"叶子节点",key:"0-0-1-0"}]}]}];return(l,r)=>(N(),I(g(L),{"tree-data":b,"expanded-keys":c.value,"onUpdate:expandedKeys":r[0]||(r[0]=i=>c.value=i),"selected-keys":d.value,"onUpdate:selectedKeys":r[1]||(r[1]=i=>d.value=i)},null,8,["expanded-keys","selected-keys"]))}}),Z=`<template>
  <Tree
    :tree-data="treeData"
    v-model:expanded-keys="expandedKeys"
    v-model:selected-keys="selectedKeys"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree } from 'ant-design-hmfw'

const expandedKeys = ref(['0-0', '0-0-0'])
const selectedKeys = ref<string[]>([])

const treeData = [
  {
    title: '父节点 1',
    key: '0-0',
    children: [
      {
        title: '父节点 1-0',
        key: '0-0-0',
        children: [
          { title: '叶子节点', key: '0-0-0-0' },
          { title: '叶子节点', key: '0-0-0-1' },
        ],
      },
      {
        title: '父节点 1-1',
        key: '0-0-1',
        children: [
          { title: '叶子节点', key: '0-0-1-0' },
        ],
      },
    ],
  },
]
<\/script>
`,ee=B({__name:"TreeCheckable",setup(t){const c=m(["0-0"]),d=m([]),b=[{title:"父节点 1",key:"0-0",children:[{title:"子节点 1-1",key:"0-0-0"},{title:"子节点 1-2",key:"0-0-1"}]},{title:"父节点 2",key:"0-1",children:[{title:"子节点 2-1",key:"0-1-0"}]}];return(l,r)=>(N(),U(Q,null,[k(g(L),{checkable:"","tree-data":b,"checked-keys":d.value,"onUpdate:checkedKeys":r[0]||(r[0]=i=>d.value=i),"expanded-keys":c.value,"onUpdate:expandedKeys":r[1]||(r[1]=i=>c.value=i)},null,8,["checked-keys","expanded-keys"]),y("p",null,"已勾选："+R(d.value.join(", ")),1)],64))}}),te=`<template>
  <Tree
    checkable
    :tree-data="treeData"
    v-model:checked-keys="checkedKeys"
    v-model:expanded-keys="expandedKeys"
  />
  <p>已勾选：{{ checkedKeys.join(', ') }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree } from 'ant-design-hmfw'

const expandedKeys = ref(['0-0'])
const checkedKeys = ref<string[]>([])

const treeData = [
  {
    title: '父节点 1',
    key: '0-0',
    children: [
      { title: '子节点 1-1', key: '0-0-0' },
      { title: '子节点 1-2', key: '0-0-1' },
    ],
  },
  {
    title: '父节点 2',
    key: '0-1',
    children: [
      { title: '子节点 2-1', key: '0-1-0' },
    ],
  },
]
<\/script>
`,de=B({__name:"TreeShowLine",setup(t){const c=[{title:"父节点",key:"0-0",children:[{title:"子节点 1",key:"0-0-0"},{title:"子节点 2",key:"0-0-1"},{title:"子节点 3",key:"0-0-2"}]}];return(d,b)=>(N(),I(g(L),{"show-line":"","tree-data":c,"default-expand-all":!0}))}}),ne=`<template>
  <Tree
    show-line
    :tree-data="treeData"
    :default-expand-all="true"
  />
</template>

<script setup lang="ts">
import { Tree } from 'ant-design-hmfw'

const treeData = [
  {
    title: '父节点',
    key: '0-0',
    children: [
      { title: '子节点 1', key: '0-0-0' },
      { title: '子节点 2', key: '0-0-1' },
      { title: '子节点 3', key: '0-0-2' },
    ],
  },
]
<\/script>
`,le={class:"markdown-body"},ce={__name:"tree",setup(t,{expose:c}){return c({frontmatter:{}}),(b,l)=>{const r=W("DemoBlock");return N(),U("div",le,[l[0]||(l[0]=y("h1",{id:"tree-",tabindex:"-1"},"Tree 树形控件",-1)),l[1]||(l[1]=y("p",null,"多层次的结构列表。",-1)),l[2]||(l[2]=y("h2",{id:"",tabindex:"-1"},"何时使用",-1)),l[3]||(l[3]=y("ul",null,[y("li",null,"文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构"),y("li",null,"使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能")],-1)),l[4]||(l[4]=y("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),l[5]||(l[5]=y("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),l[6]||(l[6]=y("p",null,"最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。",-1)),k(r,{title:"基础用法",source:g(Z)},{default:E(()=>[k(Y)]),_:1},8,["source"]),l[7]||(l[7]=y("h3",{id:"-3",tabindex:"-1"},"可勾选",-1)),l[8]||(l[8]=y("p",null,"使用 checkable 属性可以节点前添加 Checkbox 复选框。",-1)),k(r,{title:"可勾选",source:g(te)},{default:E(()=>[k(ee)]),_:1},8,["source"]),l[9]||(l[9]=y("h3",{id:"-4",tabindex:"-1"},"显示连接线",-1)),l[10]||(l[10]=y("p",null,"使用 showLine 属性可以显示连接线。",-1)),k(r,{title:"显示连接线",source:g(ne)},{default:E(()=>[k(de)]),_:1},8,["source"]),l[11]||(l[11]=X('<h2 id="api" tabindex="-1">API</h2><h3 id="tree-props" tabindex="-1">Tree Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>treeData</td><td>treeNodes 数据</td><td><code>TreeDataNode[]</code></td><td>-</td></tr><tr><td>expandedKeys (v-model)</td><td>展开指定的树节点</td><td><code>string[]</code></td><td>-</td></tr><tr><td>defaultExpandedKeys</td><td>默认展开指定的树节点</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td>defaultExpandAll</td><td>默认展开所有树节点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>selectedKeys (v-model)</td><td>设置选中的树节点</td><td><code>string[]</code></td><td>-</td></tr><tr><td>checkedKeys (v-model)</td><td>选中复选框的树节点</td><td><code>string[]</code></td><td>-</td></tr><tr><td>checkable</td><td>节点前添加 Checkbox 复选框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>multiple</td><td>支持点选多个节点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>selectable</td><td>是否可选中</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>disabled</td><td>将树禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showLine</td><td>是否展示连接线</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>blockNode</td><td>是否节点占据一行</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>fieldNames</td><td>自定义节点 title、key、children 的字段</td><td><code>{ title?: string, key?: string, children?: string }</code></td><td>-</td></tr></tbody></table><h3 id="treedatanode" tabindex="-1">TreeDataNode</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>节点唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>子节点</td><td><code>TreeDataNode[]</code></td><td>-</td></tr><tr><td>disabled</td><td>禁掉响应</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disableCheckbox</td><td>禁掉 checkbox</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>isLeaf</td><td>设置为叶子节点</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="tree-events" tabindex="-1">Tree Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:expandedKeys</td><td>展开/收起节点时触发</td><td><code>(keys: string[]) =&gt; void</code></td></tr><tr><td>update:selectedKeys</td><td>点击树节点触发</td><td><code>(keys: string[]) =&gt; void</code></td></tr><tr><td>update:checkedKeys</td><td>点击复选框触发</td><td><code>(keys: string[]) =&gt; void</code></td></tr><tr><td>expand</td><td>展开/收起节点时触发</td><td><code>(expandedKeys: string[], info: object) =&gt; void</code></td></tr><tr><td>select</td><td>点击树节点触发</td><td><code>(selectedKeys: string[], info: object) =&gt; void</code></td></tr><tr><td>check</td><td>点击复选框触发</td><td><code>(checkedKeys: string[], info: object) =&gt; void</code></td></tr></tbody></table>',7))])}}};export{ce as default};
