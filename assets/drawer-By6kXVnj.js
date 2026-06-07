import{B as g}from"./Button-BxE2sJbo.js";import{n as S,M as J,D as v,P as A,v as Q,m as o,c as X,r as Y,T as _,e as w,z as B,j as h,F as $,J as c,Q as s,l as f,g as r,I as tt,G as et,k as nt}from"./index-i0jnWELi.js";import{p as dt}from"./icons-DkTSuFEr.js";import{S as ot}from"./index-fkmUQj8S.js";import{c as O}from"./cls-S9IiI6wd.js";import{I as rt}from"./Icon-D9pw0Su_.js";class lt{constructor(){this.drawers=new Map,this.uidCounter=0}register(){const n=++this.uidCounter,u=this.drawers.size;return this.drawers.set(n,u),n}unregister(n){this.drawers.delete(n)}getZIndex(n,i){const u=this.drawers.get(n)??0;return i+u*2}get size(){return this.drawers.size}}const E=new lt,at='a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';function it(e,n){var l;const i=document.activeElement,u=()=>Array.from(e.querySelectorAll(at));(l=u()[0])==null||l.focus();const t=m=>{if(m.key!=="Tab")return;const a=u();if(!a.length)return;const p=a[0],b=a[a.length-1];m.shiftKey?document.activeElement===p&&(m.preventDefault(),b.focus()):document.activeElement===b&&(m.preventDefault(),p.focus())};return e.addEventListener("keydown",t),()=>{e.removeEventListener("keydown",t),n&&(i==null||i.focus())}}let C=0,j="";function ut(){typeof document>"u"||(C===0&&(j=document.body.style.overflow,document.body.style.overflow="hidden"),C+=1)}function M(){typeof document>"u"||(C=Math.max(0,C-1),C===0&&(document.body.style.overflow=j))}let st=0;const I=378,ft=736;function F(e,n){if(n){const i=n();if(i&&i.length)return i}if(!(e==null||e===""))return typeof e=="function"?e():e}function ct(e){return typeof e=="number"?`${e}px`:e}const D=S({name:"Drawer",inheritAttrs:!1,props:{open:{type:Boolean,default:void 0},defaultOpen:Boolean,title:{type:[String,Number,Object,Function],default:void 0},placement:{type:String,default:"right"},size:{type:[String,Number],default:void 0},width:{type:[Number,String],default:I},height:{type:[Number,String],default:I},closable:{type:Boolean,default:!0},closeIcon:{type:Function,default:void 0},maskClosable:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},loading:Boolean,zIndex:{type:Number,default:1e3},destroyOnClose:Boolean,destroyOnHidden:{type:Boolean,default:void 0},forceRender:Boolean,focusTriggerAfterClose:{type:Boolean,default:!0},getContainer:{type:[String,Object,Function,Boolean],default:void 0},rootClassName:{type:String,default:void 0},rootStyle:{type:Object,default:void 0},bodyStyle:{type:Object,default:void 0},headerStyle:{type:Object,default:void 0},footerStyle:{type:Object,default:void 0},maskStyle:{type:Object,default:void 0},contentWrapperStyle:{type:Object,default:void 0}},emits:["update:open","close","afterOpenChange"],setup(e,{slots:n,emit:i,attrs:u}){const t=J("drawer"),l=`${t}-title-${st+=1}`,m=v(e.defaultOpen??!1),a=v(null);let p=null,b=!1;const T=E.register(),H=w(()=>E.getZIndex(T,e.zIndex));A(()=>e.open,d=>{d!==void 0&&(m.value=d)});const x=w(()=>e.open!==void 0?e.open:m.value);A(x,async d=>{d?(e.mask&&(ut(),b=!0),await Promise.resolve(),a.value&&(p=it(a.value,e.focusTriggerAfterClose))):(p==null||p(),p=null,b&&(M(),b=!1)),setTimeout(()=>i("afterOpenChange",d),0)},{flush:"post"}),Q(()=>{p==null||p(),p=null,b&&(M(),b=!1),E.unregister(T)});const z=d=>{e.open===void 0&&(m.value=!1),i("update:open",!1),i("close",d)},U=d=>{e.mask&&e.maskClosable&&z(d)},R=d=>{d.key==="Escape"&&e.keyboard&&x.value&&z(d)},N=w(()=>e.placement==="left"||e.placement==="right"),L=w(()=>{const{size:d}=e;return d==="large"?`${ft}px`:d==="default"?`${I}px`:typeof d=="number"?`${d}px`:typeof d=="string"?/^\d+(\.\d+)?$/.test(d)?`${d}px`:d:ct(N.value?e.width:e.height)}),V=w(()=>N.value?{width:L.value}:{height:L.value}),Z=w(()=>{const d=e.getContainer;return d===!1?"body":typeof d=="function"?d():typeof d=="string"||d instanceof HTMLElement?d:"body"}),K=()=>e.closable?o("button",{type:"button",class:`${t}-close`,onClick:d=>z(d),"aria-label":"Close"},[o(rt,{component:e.closeIcon??dt},null)]):null,W=()=>{var P;const d=F(e.title,n.title),y=(P=n.extra)==null?void 0:P.call(n),k=d!=null&&d!=="";return!k&&!e.closable&&!y?null:o("div",{class:O(`${t}-header`,{[`${t}-header-close-only`]:e.closable&&!k&&!y}),style:e.headerStyle},[o("div",{class:`${t}-header-title`},[K(),k&&o("div",{id:l,class:`${t}-title`},[d])]),y&&o("div",{class:`${t}-extra`},[y])])},G=()=>{var y;const d=(y=n.footer)==null?void 0:y.call(n);return!d||Array.isArray(d)&&!d.length?null:o("div",{class:`${t}-footer`,style:e.footerStyle},[d])},q=()=>{var y;return e.loading?o(ot,{active:!0,title:!1,paragraph:{rows:5},class:`${t}-body-skeleton`},null):(e.destroyOnHidden??e.destroyOnClose)&&!x.value?null:(y=n.default)==null?void 0:y.call(n)};return()=>{const d=F(e.title,n.title)!=null,y={zIndex:H.value,...e.rootStyle},k=e.getContainer===!1;return o(_,{to:Z.value,disabled:k},{default:()=>[o(X,{name:`hmfw-drawer-${e.placement}`,appear:!0},{default:()=>[(x.value||e.forceRender)&&o("div",{class:O(`${t}-root`,e.rootClassName,{[`${t}-no-mask`]:!e.mask}),style:{...y,display:x.value?"":"none"},onKeydown:R},[e.mask&&o("div",{class:`${t}-mask`,style:e.maskStyle,onClick:U},null),o("div",Y({ref:a,class:O(`${t}-content-wrapper`,`${t}-${e.placement}`),style:{...V.value,...e.contentWrapperStyle},role:"dialog","aria-modal":"true","aria-labelledby":d?l:void 0},u),[o("div",{class:`${t}-content`},[W(),o("div",{class:`${t}-body`,style:e.bodyStyle},[q()]),G()])])])]})]})}}}),pt=S({__name:"DrawerBasic",setup(e){const n=v(!1);return(i,u)=>(B(),h($,null,[o(c(g),{type:"primary",onClick:u[0]||(u[0]=t=>n.value=!0)},{default:s(()=>[...u[2]||(u[2]=[f("打开抽屉",-1)])]),_:1}),o(c(D),{open:n.value,"onUpdate:open":u[1]||(u[1]=t=>n.value=t),title:"基础抽屉"},{default:s(()=>[...u[3]||(u[3]=[r("p",null,"抽屉内容",-1),r("p",null,"抽屉内容",-1),r("p",null,"抽屉内容",-1)])]),_:1},8,["open"])],64))}}),mt=`<template>
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
`,yt={style:{display:"flex",gap:"8px"}},gt={style:{"text-align":"right"}},vt=S({__name:"DrawerExtraFooter",setup(e){const n=v(!1),i=v("default");return(u,t)=>(B(),h($,null,[r("div",yt,[o(c(g),{onClick:t[0]||(t[0]=l=>{n.value=!0,i.value="default"})},{default:s(()=>[...t[6]||(t[6]=[f("默认 378px",-1)])]),_:1}),o(c(g),{onClick:t[1]||(t[1]=l=>{n.value=!0,i.value="large"})},{default:s(()=>[...t[7]||(t[7]=[f("大号 736px",-1)])]),_:1})]),o(c(D),{open:n.value,"onUpdate:open":t[5]||(t[5]=l=>n.value=l),size:i.value,title:"尺寸"},{extra:s(()=>[o(c(g),{type:"primary",onClick:t[2]||(t[2]=l=>n.value=!1)},{default:s(()=>[...t[8]||(t[8]=[f("确定",-1)])]),_:1})]),footer:s(()=>[r("div",gt,[o(c(g),{style:{"margin-right":"8px"},onClick:t[3]||(t[3]=l=>n.value=!1)},{default:s(()=>[...t[9]||(t[9]=[f("取消",-1)])]),_:1}),o(c(g),{type:"primary",onClick:t[4]||(t[4]=l=>n.value=!1)},{default:s(()=>[...t[10]||(t[10]=[f("提交",-1)])]),_:1})])]),default:s(()=>[r("p",null,"当前尺寸："+tt(i.value),1)]),_:1},8,["open","size"])],64))}}),bt=`<template>
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
`,wt=S({__name:"DrawerLoading",setup(e){const n=v(!1),i=v(!1);function u(){n.value=!0,i.value=!0,setTimeout(()=>{i.value=!1},2e3)}return(t,l)=>(B(),h($,null,[o(c(g),{onClick:u},{default:s(()=>[...l[1]||(l[1]=[f("打开（加载中）",-1)])]),_:1}),o(c(D),{open:n.value,"onUpdate:open":l[0]||(l[0]=m=>n.value=m),title:"加载中",loading:i.value},{default:s(()=>[...l[2]||(l[2]=[r("p",null,"数据加载完成后的抽屉内容。",-1)])]),_:1},8,["open","loading"])],64))}}),xt=`<template>
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
`,kt={style:{display:"flex",gap:"8px"}},Ct=S({__name:"DrawerPlacement",setup(e){const n=v(!1),i=v("right"),u=v("右侧"),t={top:"顶部",right:"右侧",bottom:"底部",left:"左侧"};function l(m){i.value=m,u.value=t[m],n.value=!0}return(m,a)=>(B(),h($,null,[r("div",kt,[o(c(g),{onClick:a[0]||(a[0]=p=>l("top"))},{default:s(()=>[...a[5]||(a[5]=[f("上",-1)])]),_:1}),o(c(g),{onClick:a[1]||(a[1]=p=>l("right"))},{default:s(()=>[...a[6]||(a[6]=[f("右",-1)])]),_:1}),o(c(g),{onClick:a[2]||(a[2]=p=>l("bottom"))},{default:s(()=>[...a[7]||(a[7]=[f("下",-1)])]),_:1}),o(c(g),{onClick:a[3]||(a[3]=p=>l("left"))},{default:s(()=>[...a[8]||(a[8]=[f("左",-1)])]),_:1})]),o(c(D),{open:n.value,"onUpdate:open":a[4]||(a[4]=p=>n.value=p),placement:i.value,title:`从${u.value}滑出`},{default:s(()=>[...a[9]||(a[9]=[r("p",null,"抽屉内容",-1)])]),_:1},8,["open","placement","title"])],64))}}),St=`<template>
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
`,Bt={class:"markdown-body"},It={__name:"drawer",setup(e,{expose:n}){return n({frontmatter:{}}),(u,t)=>{const l=et("DemoBlock");return B(),h("div",Bt,[t[0]||(t[0]=r("h1",{id:"drawer-",tabindex:"-1"},"Drawer 抽屉",-1)),t[1]||(t[1]=r("p",null,"屏幕边缘滑出的浮层面板。",-1)),t[2]||(t[2]=r("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=r("ul",null,[r("li",null,"当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出"),r("li",null,"当需要在当前任务流中插入临时任务，创建或预览附加内容时")],-1)),t[4]||(t[4]=r("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=r("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=r("p",null,"基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。",-1)),o(l,{title:"基础用法",source:c(mt)},{default:s(()=>[o(pt)]),_:1},8,["source"]),t[7]||(t[7]=r("h3",{id:"-3",tabindex:"-1"},"四个方向",-1)),t[8]||(t[8]=r("p",null,"抽屉可以从上、右、下、左四个方向滑出。",-1)),o(l,{title:"四个方向",source:c(St)},{default:s(()=>[o(Ct)]),_:1},8,["source"]),t[9]||(t[9]=r("h3",{id:"-4",tabindex:"-1"},"额外操作与页脚",-1)),t[10]||(t[10]=r("p",null,[f("通过 "),r("code",null,"extra"),f(" 插槽在右上角放置操作区，"),r("code",null,"footer"),f(" 插槽放置页脚。"),r("code",null,"size"),f(" 可选 "),r("code",null,"default"),f("（378px）与 "),r("code",null,"large"),f("（736px）两种预设。")],-1)),o(l,{title:"额外操作与页脚",source:c(bt)},{default:s(()=>[o(vt)]),_:1},8,["source"]),t[11]||(t[11]=r("h3",{id:"-5",tabindex:"-1"},"加载中",-1)),t[12]||(t[12]=r("p",null,[f("通过 "),r("code",null,"loading"),f(" 在内容未就绪时展示骨架屏。")],-1)),o(l,{title:"加载中",source:c(xt)},{default:s(()=>[o(wt)]),_:1},8,["source"]),t[13]||(t[13]=nt('<h2 id="api" tabindex="-1">API</h2><h3 id="drawer-props" tabindex="-1">Drawer Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open (v-model)</td><td>抽屉是否可见</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultOpen</td><td>非受控时的默认可见状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>标题</td><td><code>string | number | VNode | slot</code></td><td>-</td></tr><tr><td>placement</td><td>抽屉的方向</td><td><code>&#39;top&#39; | &#39;right&#39; | &#39;bottom&#39; | &#39;left&#39;</code></td><td><code>&#39;right&#39;</code></td></tr><tr><td>size</td><td>预设尺寸，<code>default</code> 为 378px、<code>large</code> 为 736px，也可传数字或字符串</td><td><code>&#39;default&#39; | &#39;large&#39; | number | string</code></td><td>-</td></tr><tr><td>width</td><td>宽度，placement 为 <code>left</code>/<code>right</code> 时生效（<code>size</code> 优先）</td><td><code>number | string</code></td><td><code>378</code></td></tr><tr><td>height</td><td>高度，placement 为 <code>top</code>/<code>bottom</code> 时生效（<code>size</code> 优先）</td><td><code>number | string</code></td><td><code>378</code></td></tr><tr><td>closable</td><td>是否显示关闭按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>closeIcon</td><td>自定义关闭图标</td><td><code>IconComponent</code></td><td>-</td></tr><tr><td>mask</td><td>是否展示遮罩</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>maskClosable</td><td>点击蒙层是否允许关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>keyboard</td><td>是否支持按 Esc 关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>loading</td><td>是否展示骨架屏</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>zIndex</td><td>设置 z-index</td><td><code>number</code></td><td><code>1000</code></td></tr><tr><td>destroyOnHidden</td><td>关闭时是否销毁抽屉内的子元素</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnClose</td><td><code>destroyOnHidden</code> 的旧称</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>forceRender</td><td>预渲染抽屉内的内容</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>focusTriggerAfterClose</td><td>关闭后是否将焦点返回触发元素</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>getContainer</td><td>挂载节点，<code>false</code> 时渲染在当前位置</td><td><code>string | HTMLElement | () =&gt; HTMLElement | false</code></td><td><code>body</code></td></tr><tr><td>rootClassName</td><td>根容器（含遮罩）的类名</td><td><code>string</code></td><td>-</td></tr><tr><td>rootStyle</td><td>根容器（含遮罩）的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>contentWrapperStyle</td><td>抽屉内容包裹层的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>bodyStyle</td><td>抽屉内容部分的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>headerStyle</td><td>抽屉头部的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>footerStyle</td><td>抽屉页脚的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>maskStyle</td><td>遮罩的样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="drawer-slots" tabindex="-1">Drawer Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>抽屉主体内容</td></tr><tr><td>title</td><td>自定义标题</td></tr><tr><td>extra</td><td>右上角的操作区域</td></tr><tr><td>footer</td><td>抽屉的页脚</td></tr></tbody></table><h3 id="drawer-events" tabindex="-1">Drawer Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>可见状态变化时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>close</td><td>点击遮罩层、关闭按钮或按 Esc 时的回调</td><td><code>(e?: Event) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>切换抽屉时动画结束后的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table>',7))])}}};export{It as default};
