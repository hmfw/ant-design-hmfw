import{o as k,N as Y,n,E as W,f as v,A as f,k as y,K as o,h as e,R as m,m as u,_ as Z,H as tt,l as nt}from"./index-B9Ix0zQ8.js";import{a as st,C as et}from"./CloseCircleFilled-BM35gEFb.js";import{E as at}from"./ExclamationCircleFilled-D1Qor_SV.js";import{I as ot}from"./InfoCircleFilled-KhOcrXqz.js";import{C as lt}from"./CloseOutlined-wdRsSn_L.js";import{c as g}from"./cls-S9IiI6wd.js";import{B as ct}from"./Button-D9PdcFa1.js";import"./Icon-D0ODznex.js";import"./LoadingOutlined-aeZz6k73.js";const rt={success:et,info:ot,warning:at,error:st};function h(t){return Object.prototype.toString.call(t)==="[object Object]"}const c=k({name:"Alert",props:{type:{type:String,default:void 0},variant:{type:String,default:"outlined"},title:String,message:String,description:String,showIcon:{type:Boolean,default:void 0},closable:{type:[Boolean,Object],default:void 0},closeText:[String,Object,Array,Function],closeIcon:[String,Object,Array,Function],icon:[String,Object,Array,Function],banner:Boolean,action:[String,Object,Array,Function],role:{type:String,default:"alert"},classNames:Object,styles:Object},emits:["close","afterClose"],setup(t,{slots:a,emit:l}){const i=Y("alert"),s=W(!1),p=W(!1),H=v(()=>t.type!==void 0?t.type:t.banner?"warning":"info"),w=v(()=>t.banner&&t.showIcon===void 0?!0:!!t.showIcon),K=v(()=>t.title??t.message),L=v(()=>{const{closable:r,closeText:d,closeIcon:b}=t;return h(r)||d!=null&&d!==""?!0:typeof r=="boolean"?r:b!=null}),G=v(()=>{const{closable:r,closeText:d,closeIcon:b}=t;if(h(r)&&r.closeIcon!=null)return r.closeIcon;if(d!=null&&d!=="")return d;if(b!=null)return b;if(a.closeIcon)return a.closeIcon()}),J=v(()=>{const{closable:r}=t;return h(r)&&typeof r["aria-label"]=="string"?r["aria-label"]:"关闭"}),Q=r=>{p.value=!0,l("close",r),setTimeout(()=>{s.value=!0,l("afterClose")},300)};return()=>{var N,C,S,I,_,q,$,B,F,E,T,O,P,j,D,V,z,R,M;if(s.value)return null;const r=H.value,d=!!(t.description||a.description),b=rt[r],U=t.icon??((N=a.icon)==null?void 0:N.call(a))??n(b,null,null),X=G.value??n(lt,null,null),x=((C=a.message)==null?void 0:C.call(a))??((S=a.title)==null?void 0:S.call(a))??K.value,A=t.action??((I=a.action)==null?void 0:I.call(a));return n("div",{role:t.role,"aria-live":r==="error"||r==="warning"?"assertive":"polite","data-show":!s.value,class:g(i,`${i}-${r}`,`${i}-${t.variant}`,{[`${i}-with-description`]:d,[`${i}-banner`]:t.banner,[`${i}-closing`]:p.value,[`${i}-no-icon`]:!w.value},(_=t.classNames)==null?void 0:_.root),style:(q=t.styles)==null?void 0:q.root},[w.value&&n("span",{class:g(`${i}-icon`,($=t.classNames)==null?void 0:$.icon),style:(B=t.styles)==null?void 0:B.icon},[U]),n("div",{class:g(`${i}-section`,(F=t.classNames)==null?void 0:F.section),style:(E=t.styles)==null?void 0:E.section},[x!=null&&x!==""&&n("div",{class:g(`${i}-title`,(T=t.classNames)==null?void 0:T.title),style:(O=t.styles)==null?void 0:O.title},[x]),d&&n("div",{class:g(`${i}-description`,(P=t.classNames)==null?void 0:P.description),style:(j=t.styles)==null?void 0:j.description},[((D=a.description)==null?void 0:D.call(a))??t.description])]),A!=null&&n("div",{class:g(`${i}-actions`,(V=t.classNames)==null?void 0:V.actions),style:(z=t.styles)==null?void 0:z.actions},[A]),L.value&&n("button",{type:"button",tabindex:0,class:g(`${i}-close-icon`,(R=t.classNames)==null?void 0:R.closeIcon),style:(M=t.styles)==null?void 0:M.closeIcon,"aria-label":J.value,onClick:Q},[X])])}}}),it={style:{display:"flex","flex-direction":"column",gap:"12px"}},pt=k({__name:"AlertBanner",setup(t){return(a,l)=>(f(),y("div",it,[n(o(c),{banner:"",message:"顶部公告：banner 模式默认显示图标，类型默认为 warning。"}),n(o(c),{banner:"",type:"error",message:"错误公告"})]))}}),dt=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert banner message="顶部公告：banner 模式默认显示图标，类型默认为 warning。" />
    <Alert banner type="error" message="错误公告" />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'
<\/script>
`,ut={style:{display:"flex","flex-direction":"column",gap:"24px"}},mt=k({__name:"AlertClassNames",setup(t){return(a,l)=>(f(),y("div",ut,[e("div",null,[l[0]||(l[0]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器与关闭按钮：",-1)),n(o(c),{type:"info",title:"系统通知",closable:"","class-names":{root:"demo-alert-root",closeIcon:"demo-alert-close"}})]),e("div",null,[l[1]||(l[1]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"定制图标、标题与描述：",-1)),n(o(c),{type:"success","show-icon":"",title:"部署成功",description:"新版本已平滑发布到生产环境，所有节点运行正常。","class-names":{icon:"demo-alert-icon",title:"demo-alert-title",description:"demo-alert-desc"}})]),e("div",null,[l[3]||(l[3]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"定制内容区与操作项：",-1)),n(o(c),{type:"warning","show-icon":"",title:"存储空间不足",description:"当前剩余空间已低于 10%，请及时清理。","class-names":{section:"demo-alert-section",actions:"demo-alert-actions"}},{action:m(()=>[n(o(ct),{size:"small",type:"primary"},{default:m(()=>[...l[2]||(l[2]=[u("立即清理",-1)])]),_:1})]),_:1})]),e("div",null,[l[4]||(l[4]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式（styles）：",-1)),n(o(c),{type:"error","show-icon":"",title:"请求失败",description:"服务暂时不可用，请稍后重试。",closable:"",styles:{root:{borderRadius:"10px",borderColor:"#ff7875"},title:{fontWeight:700,color:"#cf1322"},icon:{fontSize:"22px"},closeIcon:{color:"#cf1322"}}})]),e("div",null,[l[5]||(l[5]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"className 与 styles 叠加：",-1)),n(o(c),{type:"info","show-icon":"",title:"组合定制",description:"className 控制结构样式，styles 覆盖关键细节。","class-names":{root:"demo-alert-root",description:"demo-alert-desc"},styles:{title:{letterSpacing:"1px"}}})])]))}}),gt=Z(mt,[["__scopeId","data-v-3d7bcc0c"]]),kt=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器 + 关闭按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器与关闭按钮：</div>
      <Alert
        type="info"
        title="系统通知"
        closable
        :class-names="{ root: 'demo-alert-root', closeIcon: 'demo-alert-close' }"
      />
    </div>

    <!-- 场景 2：带描述，定制图标 / 标题 / 描述 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">定制图标、标题与描述：</div>
      <Alert
        type="success"
        show-icon
        title="部署成功"
        description="新版本已平滑发布到生产环境，所有节点运行正常。"
        :class-names="{
          icon: 'demo-alert-icon',
          title: 'demo-alert-title',
          description: 'demo-alert-desc',
        }"
      />
    </div>

    <!-- 场景 3：内容区与操作项 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">定制内容区与操作项：</div>
      <Alert
        type="warning"
        show-icon
        title="存储空间不足"
        description="当前剩余空间已低于 10%，请及时清理。"
        :class-names="{ section: 'demo-alert-section', actions: 'demo-alert-actions' }"
      >
        <template #action>
          <Button size="small" type="primary">立即清理</Button>
        </template>
      </Alert>
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式（styles）：</div>
      <Alert
        type="error"
        show-icon
        title="请求失败"
        description="服务暂时不可用，请稍后重试。"
        closable
        :styles="{
          root: { borderRadius: '10px', borderColor: '#ff7875' },
          title: { fontWeight: 700, color: '#cf1322' },
          icon: { fontSize: '22px' },
          closeIcon: { color: '#cf1322' },
        }"
      />
    </div>

    <!-- 场景 5：className 与 styles 叠加 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">className 与 styles 叠加：</div>
      <Alert
        type="info"
        show-icon
        title="组合定制"
        description="className 控制结构样式，styles 覆盖关键细节。"
        :class-names="{ root: 'demo-alert-root', description: 'demo-alert-desc' }"
        :styles="{ title: { letterSpacing: '1px' } }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Alert, Button } from 'ant-design-hmfw'
<\/script>

<style scoped>
:deep(.demo-alert-root) {
  background: #f0f5ff;
  border: 1px solid #adc6ff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
}

:deep(.demo-alert-root:hover) {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
}

:deep(.demo-alert-close) {
  color: #1677ff;
  transition: transform 0.3s;
}

:deep(.demo-alert-close:hover) {
  transform: rotate(90deg);
}

:deep(.demo-alert-icon) {
  transform: scale(1.1);
  transition: transform 0.3s;
}

:deep(.demo-alert-title) {
  background: linear-gradient(135deg, #389e0d, #52c41a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
}

:deep(.demo-alert-desc) {
  font-style: italic;
  color: #595959;
}

:deep(.demo-alert-section) {
  padding-left: 4px;
  border-left: 3px solid #faad14;
}

:deep(.demo-alert-actions) {
  display: flex;
  align-items: center;
}
</style>
`,ft={style:{display:"flex","flex-direction":"column",gap:"12px"}},yt=k({__name:"AlertClosable",setup(t){function a(){console.log("关闭警告")}return(l,i)=>(f(),y("div",ft,[n(o(c),{message:"警告提示",type:"warning",closable:"",onClose:a}),n(o(c),{message:"错误提示",description:"详细的错误描述信息。",type:"error",closable:""})]))}}),bt=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert message="警告提示" type="warning" closable @close="onClose" />
    <Alert message="错误提示" description="详细的错误描述信息。" type="error" closable />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'

function onClose() {
  console.log('关闭警告')
}
<\/script>
`,vt={style:{display:"flex","flex-direction":"column",gap:"12px"}},xt=k({__name:"AlertDescription",setup(t){return(a,l)=>(f(),y("div",vt,[n(o(c),{message:"成功提示",description:"详细的成功描述和对此次成功的说明。",type:"success","show-icon":""}),n(o(c),{message:"错误提示",description:"详细的错误描述和对此次错误的说明。",type:"error","show-icon":""})]))}}),ht=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert message="成功提示" description="详细的成功描述和对此次成功的说明。" type="success" show-icon />
    <Alert message="错误提示" description="详细的错误描述和对此次错误的说明。" type="error" show-icon />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'
<\/script>
`,wt={style:{display:"flex","flex-direction":"column",gap:"12px"}},At=k({__name:"AlertTypes",setup(t){return(a,l)=>(f(),y("div",wt,[n(o(c),{message:"成功提示",type:"success"}),n(o(c),{message:"消息提示",type:"info"}),n(o(c),{message:"警告提示",type:"warning"}),n(o(c),{message:"错误提示",type:"error"})]))}}),Nt=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert message="成功提示" type="success" />
    <Alert message="消息提示" type="info" />
    <Alert message="警告提示" type="warning" />
    <Alert message="错误提示" type="error" />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'
<\/script>
`,Ct={style:{display:"flex","flex-direction":"column",gap:"12px"}},St=k({__name:"AlertVariant",setup(t){return(a,l)=>(f(),y("div",Ct,[n(o(c),{type:"success",variant:"filled",message:"Filled 填充样式","show-icon":""}),n(o(c),{type:"info",variant:"filled",message:"Filled 填充样式","show-icon":""}),n(o(c),{type:"warning",variant:"filled",message:"Filled 填充样式","show-icon":""}),n(o(c),{type:"error",variant:"filled",message:"Filled 填充样式","show-icon":""})]))}}),It=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert type="success" variant="filled" message="Filled 填充样式" show-icon />
    <Alert type="info" variant="filled" message="Filled 填充样式" show-icon />
    <Alert type="warning" variant="filled" message="Filled 填充样式" show-icon />
    <Alert type="error" variant="filled" message="Filled 填充样式" show-icon />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'
<\/script>
`,_t={class:"markdown-body"},Dt={__name:"alert",setup(t,{expose:a}){return a({frontmatter:{}}),(i,s)=>{const p=tt("DemoBlock");return f(),y("div",_t,[s[0]||(s[0]=e("h1",{id:"alert-警告提示",tabindex:"-1"},"Alert 警告提示",-1)),s[1]||(s[1]=e("p",null,"警告提示，展现需要关注的信息。",-1)),s[2]||(s[2]=e("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),s[3]||(s[3]=e("ul",null,[e("li",null,"当某个页面需要向用户显示警告的信息时"),e("li",null,"非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭")],-1)),s[4]||(s[4]=e("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),s[5]||(s[5]=e("h3",{id:"四种类型",tabindex:"-1"},"四种类型",-1)),s[6]||(s[6]=e("p",null,"共有四种样式 success、info、warning、error。",-1)),n(p,{title:"四种类型",source:o(Nt)},{default:m(()=>[n(At)]),_:1},8,["source"]),s[7]||(s[7]=e("h3",{id:"带描述",tabindex:"-1"},"带描述",-1)),s[8]||(s[8]=e("p",null,"含有辅助性文字介绍的警告提示。",-1)),n(p,{title:"带描述",source:o(ht)},{default:m(()=>[n(xt)]),_:1},8,["source"]),s[9]||(s[9]=e("h3",{id:"可关闭",tabindex:"-1"},"可关闭",-1)),s[10]||(s[10]=e("p",null,"显示关闭按钮，点击可关闭警告提示。",-1)),n(p,{title:"可关闭",source:o(bt)},{default:m(()=>[n(yt)]),_:1},8,["source"]),s[11]||(s[11]=e("h3",{id:"填充样式",tabindex:"-1"},"填充样式",-1)),s[12]||(s[12]=e("p",null,[u("通过 "),e("code",null,'variant="filled"'),u(" 使用更强的背景填充。")],-1)),n(p,{title:"填充样式",source:o(It)},{default:m(()=>[n(St)]),_:1},8,["source"]),s[13]||(s[13]=e("h3",{id:"顶部公告",tabindex:"-1"},"顶部公告",-1)),s[14]||(s[14]=e("p",null,[u("通过 "),e("code",null,"banner"),u(" 用作顶部公告，默认显示图标且类型为 warning。")],-1)),n(p,{title:"顶部公告",source:o(dt)},{default:m(()=>[n(pt)]),_:1},8,["source"]),s[15]||(s[15]=e("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),s[16]||(s[16]=e("p",null,[u("通过 "),e("code",null,"classNames"),u(" / "),e("code",null,"styles"),u(" 对 root、icon、section、title、description、actions、closeIcon 等子元素做细粒度样式控制。")],-1)),n(p,{title:"语义化 className 与 style",source:o(kt)},{default:m(()=>[n(gt)]),_:1},8,["source"]),s[17]||(s[17]=nt(`<h2 id="api" tabindex="-1">API</h2><h3 id="alert-props" tabindex="-1">Alert Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>指定警告提示的样式</td><td><code>&#39;success&#39; | &#39;info&#39; | &#39;warning&#39; | &#39;error&#39;</code></td><td><code>&#39;info&#39;</code>（banner 模式为 <code>&#39;warning&#39;</code>）</td></tr><tr><td>variant</td><td>样式变体</td><td><code>&#39;outlined&#39; | &#39;filled&#39;</code></td><td><code>&#39;outlined&#39;</code></td></tr><tr><td>title</td><td>警告提示内容</td><td><code>string</code></td><td>-</td></tr><tr><td>message</td><td><code>title</code> 的别名（已废弃，请使用 <code>title</code>）</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>警告提示的辅助性文字介绍</td><td><code>string</code></td><td>-</td></tr><tr><td>showIcon</td><td>是否显示辅助图标（banner 模式默认 <code>true</code>）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>自定义图标（<code>showIcon</code> 为 <code>true</code> 时有效）</td><td><code>VNode | slot</code></td><td>-</td></tr><tr><td>closable</td><td>是否显示关闭按钮，可传对象自定义图标与无障碍标签</td><td><code>boolean | { closeIcon?, &#39;aria-label&#39;? }</code></td><td><code>false</code></td></tr><tr><td>closeIcon</td><td>自定义关闭按钮图标</td><td><code>VNode | slot</code></td><td>-</td></tr><tr><td>closeText</td><td>自定义关闭按钮文字（已废弃，请使用 <code>closeIcon</code>）</td><td><code>string</code></td><td>-</td></tr><tr><td>action</td><td>自定义操作项</td><td><code>VNode | slot</code></td><td>-</td></tr><tr><td>role</td><td>根节点 <code>role</code> 属性</td><td><code>string</code></td><td><code>&#39;alert&#39;</code></td></tr><tr><td>banner</td><td>是否用作顶部公告</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>AlertClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>AlertStyles</code></td><td>-</td></tr></tbody></table><h3 id="alert-slots" tabindex="-1">Alert Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>title / message</td><td>标题内容</td></tr><tr><td>description</td><td>辅助性文字介绍</td></tr><tr><td>icon</td><td>自定义图标</td></tr><tr><td>closeIcon</td><td>自定义关闭按钮</td></tr><tr><td>action</td><td>自定义操作项</td></tr></tbody></table><h3 id="alert-events" tabindex="-1">Alert Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>关闭时触发的回调函数</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>afterClose</td><td>关闭动画结束后触发的回调函数</td><td><code>() =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对警告提示的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">AlertClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 警告提示根容器</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 状态图标容器</span>
  section<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标题与描述的内容区</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标题文本</span>
  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 辅助描述文本</span>
  actions<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 自定义操作项容器</span>
  closeIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 关闭按钮</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AlertStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  icon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  section<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  title<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  description<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  actions<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  closeIcon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-alert hmfw-alert-info hmfw-alert-outlined<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-alert-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.icon / styles.icon 应用于此（showIcon 为 true 时渲染） --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-alert-section<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.section / styles.section 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-alert-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.title / styles.title 应用于此 --&gt;</span>
      标题文本
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-alert-description<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.description / styles.description 应用于此（有 description 时渲染） --&gt;</span>
      辅助描述文本
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-alert-actions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.actions / styles.actions 应用于此（有 action 时渲染） --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>操作<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-alert-close-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.closeIcon / styles.closeIcon 应用于此（closable 时渲染） --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Alert type=&quot;info&quot; title=&quot;系统通知&quot; closable :class-names=&quot;{ root: &#39;my-alert-root&#39;, closeIcon: &#39;my-alert-close&#39; }&quot; /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-alert-root) {
  background: #f0f5ff;
  border: 1px solid #adc6ff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

:deep(.my-alert-close:hover) {
  transform: rotate(90deg);
  transition: transform 0.3s;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Alert
    type=&quot;error&quot;
    show-icon
    title=&quot;请求失败&quot;
    description=&quot;服务暂时不可用，请稍后重试。&quot;
    closable
    :styles=&quot;{
      root: { borderRadius: &#39;10px&#39;, borderColor: &#39;#ff7875&#39; },
      title: { fontWeight: 700, color: &#39;#cf1322&#39; },
      icon: { fontSize: &#39;22px&#39; },
      closeIcon: { color: &#39;#cf1322&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>classNames.icon</code> 仅在 <code>showIcon</code> 为 <code>true</code>（或 banner 模式默认开启）时生效</li><li><code>classNames.description</code> 仅在传入 <code>description</code> 时生效，无描述时该节点不渲染</li><li><code>classNames.actions</code> 仅在传入 <code>action</code> 时生效</li><li><code>classNames.closeIcon</code> 仅在 <code>closable</code> 为真值时生效</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-alert-error</code>、<code>.hmfw-alert-banner</code>）合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Alert 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。</p>`,24))])}}};export{Dt as default};
