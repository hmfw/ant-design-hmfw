import{B as g}from"./Button-8FVAwvkd.js";import{m as B,L as Z,B as v,O as L,u as G,l as o,c as J,q as Q,T as W,d as k,y as S,i as $,F as h,I as c,P as u,k as f,f as l,H as X,E as Y,j as _}from"./index-Ct2ToimZ.js";import{d as tt}from"./icons-D8-2lOc_.js";import{S as et}from"./index-CnB4uYl3.js";import{c as z}from"./cls-S9IiI6wd.js";import{I as nt}from"./Icon-Dw17rLCZ.js";const dt='a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';function ot(e,d){var r;const i=document.activeElement,s=()=>Array.from(e.querySelectorAll(dt));(r=s()[0])==null||r.focus();const t=m=>{if(m.key!=="Tab")return;const a=s();if(!a.length)return;const p=a[0],b=a[a.length-1];m.shiftKey?document.activeElement===p&&(m.preventDefault(),b.focus()):document.activeElement===b&&(m.preventDefault(),p.focus())};return e.addEventListener("keydown",t),()=>{e.removeEventListener("keydown",t),d&&(i==null||i.focus())}}let C=0,F="";function lt(){typeof document>"u"||(C===0&&(F=document.body.style.overflow,document.body.style.overflow="hidden"),C+=1)}function P(){typeof document>"u"||(C=Math.max(0,C-1),C===0&&(document.body.style.overflow=F))}let rt=0;const E=378,at=736;function A(e,d){if(d){const i=d();if(i&&i.length)return i}if(!(e==null||e===""))return typeof e=="function"?e():e}function it(e){return typeof e=="number"?`${e}px`:e}const D=B({name:"Drawer",inheritAttrs:!1,props:{open:{type:Boolean,default:void 0},defaultOpen:Boolean,title:{type:[String,Number,Object,Function],default:void 0},placement:{type:String,default:"right"},size:{type:[String,Number],default:void 0},width:{type:[Number,String],default:E},height:{type:[Number,String],default:E},closable:{type:Boolean,default:!0},closeIcon:{type:Function,default:void 0},maskClosable:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},loading:Boolean,zIndex:{type:Number,default:1e3},destroyOnClose:Boolean,destroyOnHidden:{type:Boolean,default:void 0},forceRender:Boolean,focusTriggerAfterClose:{type:Boolean,default:!0},getContainer:{type:[String,Object,Function,Boolean],default:void 0},rootClassName:{type:String,default:void 0},rootStyle:{type:Object,default:void 0},bodyStyle:{type:Object,default:void 0},headerStyle:{type:Object,default:void 0},footerStyle:{type:Object,default:void 0},maskStyle:{type:Object,default:void 0}},emits:["update:open","close","afterOpenChange"],setup(e,{slots:d,emit:i,attrs:s}){const t=Z("drawer"),r=`${t}-title-${rt+=1}`,m=v(e.defaultOpen??!1),a=v(null);let p=null,b=!1;L(()=>e.open,n=>{n!==void 0&&(m.value=n)});const x=k(()=>e.open!==void 0?e.open:m.value);L(x,async n=>{n?(e.mask&&(lt(),b=!0),await Promise.resolve(),a.value&&(p=ot(a.value,e.focusTriggerAfterClose))):(p==null||p(),p=null,b&&(P(),b=!1)),setTimeout(()=>i("afterOpenChange",n),0)},{flush:"post"}),G(()=>{p==null||p(),p=null,b&&(P(),b=!1)});const O=n=>{e.open===void 0&&(m.value=!1),i("update:open",!1),i("close",n)},H=n=>{e.mask&&e.maskClosable&&O(n)},j=n=>{n.key==="Escape"&&e.keyboard&&x.value&&O(n)},T=k(()=>e.placement==="left"||e.placement==="right"),I=k(()=>{const{size:n}=e;return n==="large"?`${at}px`:n==="default"?`${E}px`:typeof n=="number"?`${n}px`:typeof n=="string"?/^\d+(\.\d+)?$/.test(n)?`${n}px`:n:it(T.value?e.width:e.height)}),M=k(()=>T.value?{width:I.value}:{height:I.value}),U=k(()=>{const n=e.getContainer;return n===!1?"body":typeof n=="function"?n():typeof n=="string"||n instanceof HTMLElement?n:"body"}),R=()=>e.closable?o("button",{type:"button",class:`${t}-close`,onClick:n=>O(n),"aria-label":"Close"},[o(nt,{component:e.closeIcon??tt},null)]):null,V=()=>{var N;const n=A(e.title,d.title),y=(N=d.extra)==null?void 0:N.call(d),w=n!=null&&n!=="";return!w&&!e.closable&&!y?null:o("div",{class:z(`${t}-header`,{[`${t}-header-close-only`]:e.closable&&!w&&!y}),style:e.headerStyle},[o("div",{class:`${t}-header-title`},[R(),w&&o("div",{id:r,class:`${t}-title`},[n])]),y&&o("div",{class:`${t}-extra`},[y])])},K=()=>{var y;const n=(y=d.footer)==null?void 0:y.call(d);return!n||Array.isArray(n)&&!n.length?null:o("div",{class:`${t}-footer`,style:e.footerStyle},[n])},q=()=>{var y;return e.loading?o(et,{active:!0,title:!1,paragraph:{rows:5},class:`${t}-body-skeleton`},null):(e.destroyOnHidden??e.destroyOnClose)&&!x.value?null:(y=d.default)==null?void 0:y.call(d)};return()=>{const n=A(e.title,d.title)!=null,y={zIndex:e.zIndex,...e.rootStyle},w=e.getContainer===!1;return o(W,{to:U.value,disabled:w},{default:()=>[o(J,{name:`hmfw-drawer-${e.placement}`,appear:!0},{default:()=>[(x.value||e.forceRender)&&o("div",{class:z(`${t}-root`,e.rootClassName,{[`${t}-no-mask`]:!e.mask}),style:{...y,display:x.value?"":"none"},onKeydown:j},[e.mask&&o("div",{class:`${t}-mask`,style:e.maskStyle,onClick:H},null),o("div",Q({ref:a,class:z(`${t}-content-wrapper`,`${t}-${e.placement}`),style:M.value,role:"dialog","aria-modal":"true","aria-labelledby":n?r:void 0},s),[o("div",{class:`${t}-content`},[V(),o("div",{class:`${t}-body`,style:e.bodyStyle},[q()]),K()])])])]})]})}}}),ut=B({__name:"DrawerBasic",setup(e){const d=v(!1);return(i,s)=>(S(),$(h,null,[o(c(g),{type:"primary",onClick:s[0]||(s[0]=t=>d.value=!0)},{default:u(()=>[...s[2]||(s[2]=[f("打开抽屉",-1)])]),_:1}),o(c(D),{open:d.value,"onUpdate:open":s[1]||(s[1]=t=>d.value=t),title:"基础抽屉"},{default:u(()=>[...s[3]||(s[3]=[l("p",null,"抽屉内容",-1),l("p",null,"抽屉内容",-1),l("p",null,"抽屉内容",-1)])]),_:1},8,["open"])],64))}}),st=`<template>
  <Button type="primary" @click="open = true">打开抽屉</Button>
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
import { Drawer, Button } from 'ant-design-hmfw'

const open = ref(false)
<\/script>
`,ft={style:{display:"flex",gap:"8px"}},ct={style:{"text-align":"right"}},pt=B({__name:"DrawerExtraFooter",setup(e){const d=v(!1),i=v("default");return(s,t)=>(S(),$(h,null,[l("div",ft,[o(c(g),{onClick:t[0]||(t[0]=r=>{d.value=!0,i.value="default"})},{default:u(()=>[...t[6]||(t[6]=[f("默认 378px",-1)])]),_:1}),o(c(g),{onClick:t[1]||(t[1]=r=>{d.value=!0,i.value="large"})},{default:u(()=>[...t[7]||(t[7]=[f("大号 736px",-1)])]),_:1})]),o(c(D),{open:d.value,"onUpdate:open":t[5]||(t[5]=r=>d.value=r),size:i.value,title:"尺寸"},{extra:u(()=>[o(c(g),{type:"primary",onClick:t[2]||(t[2]=r=>d.value=!1)},{default:u(()=>[...t[8]||(t[8]=[f("确定",-1)])]),_:1})]),footer:u(()=>[l("div",ct,[o(c(g),{style:{"margin-right":"8px"},onClick:t[3]||(t[3]=r=>d.value=!1)},{default:u(()=>[...t[9]||(t[9]=[f("取消",-1)])]),_:1}),o(c(g),{type:"primary",onClick:t[4]||(t[4]=r=>d.value=!1)},{default:u(()=>[...t[10]||(t[10]=[f("提交",-1)])]),_:1})])]),default:u(()=>[l("p",null,"当前尺寸："+X(i.value),1)]),_:1},8,["open","size"])],64))}}),mt=`<template>
  <div style="display: flex; gap: 8px;">
    <Button @click="open = true; size = 'default'">默认 378px</Button>
    <Button @click="open = true; size = 'large'">大号 736px</Button>
  </div>
  <Drawer
    v-model:open="open"
    :size="size"
    title="尺寸"
  >
    <template #extra>
      <Button type="primary" @click="open = false">确定</Button>
    </template>
    <p>当前尺寸：{{ size }}</p>
    <template #footer>
      <div style="text-align: right;">
        <Button style="margin-right: 8px;" @click="open = false">取消</Button>
        <Button type="primary" @click="open = false">提交</Button>
      </div>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, Button } from 'ant-design-hmfw'

const open = ref(false)
const size = ref<'default' | 'large'>('default')
<\/script>
`,yt=B({__name:"DrawerLoading",setup(e){const d=v(!1),i=v(!1);function s(){d.value=!0,i.value=!0,setTimeout(()=>{i.value=!1},2e3)}return(t,r)=>(S(),$(h,null,[o(c(g),{onClick:s},{default:u(()=>[...r[1]||(r[1]=[f("打开（加载中）",-1)])]),_:1}),o(c(D),{open:d.value,"onUpdate:open":r[0]||(r[0]=m=>d.value=m),title:"加载中",loading:i.value},{default:u(()=>[...r[2]||(r[2]=[l("p",null,"数据加载完成后的抽屉内容。",-1)])]),_:1},8,["open","loading"])],64))}}),gt=`<template>
  <Button @click="showLoading">打开（加载中）</Button>
  <Drawer
    v-model:open="open"
    title="加载中"
    :loading="loading"
  >
    <p>数据加载完成后的抽屉内容。</p>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, Button } from 'ant-design-hmfw'

const open = ref(false)
const loading = ref(false)

function showLoading() {
  open.value = true
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
<\/script>
`,vt={style:{display:"flex",gap:"8px"}},bt=B({__name:"DrawerPlacement",setup(e){const d=v(!1),i=v("right"),s=v("右侧"),t={top:"顶部",right:"右侧",bottom:"底部",left:"左侧"};function r(m){i.value=m,s.value=t[m],d.value=!0}return(m,a)=>(S(),$(h,null,[l("div",vt,[o(c(g),{onClick:a[0]||(a[0]=p=>r("top"))},{default:u(()=>[...a[5]||(a[5]=[f("上",-1)])]),_:1}),o(c(g),{onClick:a[1]||(a[1]=p=>r("right"))},{default:u(()=>[...a[6]||(a[6]=[f("右",-1)])]),_:1}),o(c(g),{onClick:a[2]||(a[2]=p=>r("bottom"))},{default:u(()=>[...a[7]||(a[7]=[f("下",-1)])]),_:1}),o(c(g),{onClick:a[3]||(a[3]=p=>r("left"))},{default:u(()=>[...a[8]||(a[8]=[f("左",-1)])]),_:1})]),o(c(D),{open:d.value,"onUpdate:open":a[4]||(a[4]=p=>d.value=p),placement:i.value,title:`从${s.value}滑出`},{default:u(()=>[...a[9]||(a[9]=[l("p",null,"抽屉内容",-1)])]),_:1},8,["open","placement","title"])],64))}}),xt=`<template>
  <div style="display: flex; gap: 8px;">
    <Button @click="show('top')">上</Button>
    <Button @click="show('right')">右</Button>
    <Button @click="show('bottom')">下</Button>
    <Button @click="show('left')">左</Button>
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
import { Drawer, Button } from 'ant-design-hmfw'

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
`,wt={class:"markdown-body"},Dt={__name:"drawer",setup(e,{expose:d}){return d({frontmatter:{}}),(s,t)=>{const r=Y("DemoBlock");return S(),$("div",wt,[t[0]||(t[0]=l("h1",{id:"drawer-",tabindex:"-1"},"Drawer 抽屉",-1)),t[1]||(t[1]=l("p",null,"屏幕边缘滑出的浮层面板。",-1)),t[2]||(t[2]=l("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=l("ul",null,[l("li",null,"当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出"),l("li",null,"当需要在当前任务流中插入临时任务，创建或预览附加内容时")],-1)),t[4]||(t[4]=l("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=l("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=l("p",null,"基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。",-1)),o(r,{title:"基础用法",source:c(st)},{default:u(()=>[o(ut)]),_:1},8,["source"]),t[7]||(t[7]=l("h3",{id:"-3",tabindex:"-1"},"四个方向",-1)),t[8]||(t[8]=l("p",null,"抽屉可以从上、右、下、左四个方向滑出。",-1)),o(r,{title:"四个方向",source:c(xt)},{default:u(()=>[o(bt)]),_:1},8,["source"]),t[9]||(t[9]=l("h3",{id:"-4",tabindex:"-1"},"额外操作与页脚",-1)),t[10]||(t[10]=l("p",null,[f("通过 "),l("code",null,"extra"),f(" 插槽在右上角放置操作区，"),l("code",null,"footer"),f(" 插槽放置页脚。"),l("code",null,"size"),f(" 可选 "),l("code",null,"default"),f("（378px）与 "),l("code",null,"large"),f("（736px）两种预设。")],-1)),o(r,{title:"额外操作与页脚",source:c(mt)},{default:u(()=>[o(pt)]),_:1},8,["source"]),t[11]||(t[11]=l("h3",{id:"-5",tabindex:"-1"},"加载中",-1)),t[12]||(t[12]=l("p",null,[f("通过 "),l("code",null,"loading"),f(" 在内容未就绪时展示骨架屏。")],-1)),o(r,{title:"加载中",source:c(gt)},{default:u(()=>[o(yt)]),_:1},8,["source"]),t[13]||(t[13]=_('<h2 id="api" tabindex="-1">API</h2><h3 id="drawer-props" tabindex="-1">Drawer Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open (v-model)</td><td>抽屉是否可见</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultOpen</td><td>非受控时的默认可见状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>标题</td><td><code>string | number | VNode | slot</code></td><td>-</td></tr><tr><td>placement</td><td>抽屉的方向</td><td><code>&#39;top&#39; | &#39;right&#39; | &#39;bottom&#39; | &#39;left&#39;</code></td><td><code>&#39;right&#39;</code></td></tr><tr><td>size</td><td>预设尺寸，<code>default</code> 为 378px、<code>large</code> 为 736px，也可传数字或字符串</td><td><code>&#39;default&#39; | &#39;large&#39; | number | string</code></td><td>-</td></tr><tr><td>width</td><td>宽度，placement 为 <code>left</code>/<code>right</code> 时生效（<code>size</code> 优先）</td><td><code>number | string</code></td><td><code>378</code></td></tr><tr><td>height</td><td>高度，placement 为 <code>top</code>/<code>bottom</code> 时生效（<code>size</code> 优先）</td><td><code>number | string</code></td><td><code>378</code></td></tr><tr><td>closable</td><td>是否显示关闭按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>closeIcon</td><td>自定义关闭图标</td><td><code>IconComponent</code></td><td>-</td></tr><tr><td>mask</td><td>是否展示遮罩</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>maskClosable</td><td>点击蒙层是否允许关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>keyboard</td><td>是否支持按 Esc 关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>loading</td><td>是否展示骨架屏</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>zIndex</td><td>设置 z-index</td><td><code>number</code></td><td><code>1000</code></td></tr><tr><td>destroyOnHidden</td><td>关闭时是否销毁抽屉内的子元素</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnClose</td><td><code>destroyOnHidden</code> 的旧称</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>forceRender</td><td>预渲染抽屉内的内容</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>focusTriggerAfterClose</td><td>关闭后是否将焦点返回触发元素</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>getContainer</td><td>挂载节点，<code>false</code> 时渲染在当前位置</td><td><code>string | HTMLElement | () =&gt; HTMLElement | false</code></td><td><code>body</code></td></tr><tr><td>rootClassName</td><td>根容器（含遮罩）的类名</td><td><code>string</code></td><td>-</td></tr><tr><td>rootStyle</td><td>根容器（含遮罩）的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>bodyStyle</td><td>抽屉内容部分的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>headerStyle</td><td>抽屉头部的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>footerStyle</td><td>抽屉页脚的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>maskStyle</td><td>遮罩的样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="drawer-slots" tabindex="-1">Drawer Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>抽屉主体内容</td></tr><tr><td>title</td><td>自定义标题</td></tr><tr><td>extra</td><td>右上角的操作区域</td></tr><tr><td>footer</td><td>抽屉的页脚</td></tr></tbody></table><h3 id="drawer-events" tabindex="-1">Drawer Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>可见状态变化时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>close</td><td>点击遮罩层、关闭按钮或按 Esc 时的回调</td><td><code>(e?: Event) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>切换抽屉时动画结束后的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table>',7))])}}};export{Dt as default};
