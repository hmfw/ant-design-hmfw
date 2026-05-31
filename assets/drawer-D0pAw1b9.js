import{m as b,L as $,B as p,O as h,l as r,c as C,k as D,T as B,d as g,y as v,i as w,F as x,f as o,I as f,P as m,E,j as O}from"./index-BZxHTh1S.js";import{c as S}from"./cls-S9IiI6wd.js";const T='a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';function N(e){var t;const d=document.activeElement,u=()=>Array.from(e.querySelectorAll(T));(t=u()[0])==null||t.focus();const n=a=>{if(a.key!=="Tab")return;const i=u();if(!i.length)return;const l=i[0],s=i[i.length-1];a.shiftKey?document.activeElement===l&&(a.preventDefault(),s.focus()):document.activeElement===s&&(a.preventDefault(),l.focus())};return e.addEventListener("keydown",n),()=>{e.removeEventListener("keydown",n),d==null||d.focus()}}const y=b({name:"Drawer",props:{open:{type:Boolean,default:void 0},defaultOpen:Boolean,title:String,placement:{type:String,default:"right"},width:{type:[Number,String],default:378},height:{type:[Number,String],default:378},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},zIndex:{type:Number,default:1e3},destroyOnClose:Boolean},emits:["update:open","close"],setup(e,{slots:d,emit:u}){const n=$("drawer"),t=p(e.defaultOpen??!1),a=p(null);let i=null;h(()=>e.open,c=>{c!==void 0&&(t.value=c)});const l=g(()=>e.open!==void 0?e.open:t.value);h(l,async c=>{c?(await Promise.resolve(),a.value&&(i=N(a.value))):(i==null||i(),i=null)});const s=()=>{t.value=!1,u("update:open",!1),u("close")},k=g(()=>e.placement==="left"||e.placement==="right"?{width:typeof e.width=="number"?`${e.width}px`:e.width}:{height:typeof e.height=="number"?`${e.height}px`:e.height});return()=>r(B,{to:"body"},{default:()=>[r(C,{name:`hmfw-drawer-${e.placement}`},{default:()=>{var c;return l.value&&r("div",{class:`${n}-root`,style:{zIndex:e.zIndex}},[e.mask&&r("div",{class:`${n}-mask`,onClick:()=>e.maskClosable&&s()},null),r("div",{ref:a,class:S(`${n}-content-wrapper`,`${n}-${e.placement}`),style:k.value,role:"dialog","aria-modal":"true","aria-labelledby":e.title?`${n}-title`:void 0},[r("div",{class:`${n}-content`},[r("div",{class:`${n}-header`},[e.title&&r("div",{id:`${n}-title`,class:`${n}-title`},[e.title]),e.closable&&r("button",{class:`${n}-close`,onClick:s,"aria-label":"Close"},[D("×")])]),r("div",{class:`${n}-body`},[(!e.destroyOnClose||l.value)&&((c=d.default)==null?void 0:c.call(d))]),d.footer&&r("div",{class:`${n}-footer`},[d.footer()])])])])}})]})}}),P=b({__name:"DrawerBasic",setup(e){const d=p(!1);return(u,n)=>(v(),w(x,null,[o("button",{onClick:n[0]||(n[0]=t=>d.value=!0)},"打开抽屉"),r(f(y),{open:d.value,"onUpdate:open":n[1]||(n[1]=t=>d.value=t),title:"基础抽屉"},{default:m(()=>[...n[2]||(n[2]=[o("p",null,"抽屉内容",-1),o("p",null,"抽屉内容",-1),o("p",null,"抽屉内容",-1)])]),_:1},8,["open"])],64))}}),V=`<template>
  <button @click="open = true">打开抽屉</button>
  <Drawer
    v-model:open="open"
    title="基础抽屉"
  >
    <p>抽屉内容</p>
    <p>抽屉内容</p>
    <p>抽屉内容</p>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer } from 'ant-design-hmfw'

const open = ref(false)
<\/script>
`,I={style:{display:"flex",gap:"8px"}},z=b({__name:"DrawerPlacement",setup(e){const d=p(!1),u=p("right"),n=p("右侧"),t={top:"顶部",right:"右侧",bottom:"底部",left:"左侧"};function a(i){u.value=i,n.value=t[i],d.value=!0}return(i,l)=>(v(),w(x,null,[o("div",I,[o("button",{onClick:l[0]||(l[0]=s=>a("top"))},"上"),o("button",{onClick:l[1]||(l[1]=s=>a("right"))},"右"),o("button",{onClick:l[2]||(l[2]=s=>a("bottom"))},"下"),o("button",{onClick:l[3]||(l[3]=s=>a("left"))},"左")]),r(f(y),{open:d.value,"onUpdate:open":l[4]||(l[4]=s=>d.value=s),placement:u.value,title:`从${n.value}滑出`},{default:m(()=>[...l[5]||(l[5]=[o("p",null,"抽屉内容",-1)])]),_:1},8,["open","placement","title"])],64))}}),A=`<template>
  <div style="display: flex; gap: 8px;">
    <button @click="show('top')">上</button>
    <button @click="show('right')">右</button>
    <button @click="show('bottom')">下</button>
    <button @click="show('left')">左</button>
  </div>
  <Drawer
    v-model:open="open"
    :placement="placement"
    :title="\`从\${placementText}滑出\`"
  >
    <p>抽屉内容</p>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer } from 'ant-design-hmfw'

const open = ref(false)
const placement = ref<'top' | 'right' | 'bottom' | 'left'>('right')
const placementText = ref('右侧')

const textMap: Record<string, string> = {
  top: '顶部',
  right: '右侧',
  bottom: '底部',
  left: '左侧',
}

function show(dir: 'top' | 'right' | 'bottom' | 'left') {
  placement.value = dir
  placementText.value = textMap[dir]
  open.value = true
}
<\/script>
`,F={class:"markdown-body"},U={__name:"drawer",setup(e,{expose:d}){return d({frontmatter:{}}),(n,t)=>{const a=E("DemoBlock");return v(),w("div",F,[t[0]||(t[0]=o("h1",{id:"drawer-",tabindex:"-1"},"Drawer 抽屉",-1)),t[1]||(t[1]=o("p",null,"屏幕边缘滑出的浮层面板。",-1)),t[2]||(t[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=o("ul",null,[o("li",null,"当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出"),o("li",null,"当需要在当前任务流中插入临时任务，创建或预览附加内容时")],-1)),t[4]||(t[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=o("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=o("p",null,"基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。",-1)),r(a,{title:"基础用法",source:f(V)},{default:m(()=>[r(P)]),_:1},8,["source"]),t[7]||(t[7]=o("h3",{id:"-3",tabindex:"-1"},"四个方向",-1)),t[8]||(t[8]=o("p",null,"抽屉可以从上、右、下、左四个方向滑出。",-1)),r(a,{title:"四个方向",source:f(A)},{default:m(()=>[r(z)]),_:1},8,["source"]),t[9]||(t[9]=O('<h2 id="api" tabindex="-1">API</h2><h3 id="drawer-props" tabindex="-1">Drawer Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open (v-model)</td><td>抽屉是否可见</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>标题</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>placement</td><td>抽屉的方向</td><td><code>&#39;top&#39; | &#39;right&#39; | &#39;bottom&#39; | &#39;left&#39;</code></td><td><code>&#39;right&#39;</code></td></tr><tr><td>width</td><td>宽度</td><td><code>number | string</code></td><td><code>378</code></td></tr><tr><td>height</td><td>高度，在 placement 为 top 或 bottom 时使用</td><td><code>number | string</code></td><td><code>378</code></td></tr><tr><td>closable</td><td>是否显示左上角的关闭按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>mask</td><td>是否展示遮罩</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>maskClosable</td><td>点击蒙层是否允许关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>footer</td><td>抽屉的页脚</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>extra</td><td>抽屉右上角的操作区域</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>destroyOnClose</td><td>关闭时销毁 Drawer 里的子元素</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="drawer-events" tabindex="-1">Drawer Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>可见状态变化时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>close</td><td>点击遮罩层或右上角叉或取消按钮的回调</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>切换抽屉时动画结束后的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table>',5))])}}};export{U as default};
