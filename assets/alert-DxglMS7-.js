import{d as g,u as Y,c as t,r as W,a as v,o as f,b as y,e as o,f as a,w as m,g as u,_ as Z,h as nn,i as tn}from"./index-Bp9Mx9oa.js";import{C as sn}from"./CloseCircleFilled-C5Je1nk1.js";import{C as an}from"./CheckCircleFilled-DzakXISP.js";import{C as en}from"./CloseOutlined-BMEuOJeF.js";import{E as on}from"./ExclamationCircleFilled-DQcMbuCK.js";import{I as ln}from"./InfoCircleFilled-DJx17DM_.js";import{c as k}from"./cls-S9IiI6wd.js";import{B as cn}from"./Button-CY4VMw04.js";import"./LoadingOutlined-2GKosndT.js";const pn={success:an,info:ln,warning:on,error:sn};function h(n){return Object.prototype.toString.call(n)==="[object Object]"}const c=g({name:"Alert",props:{type:{type:String,default:void 0},variant:{type:String,default:"outlined"},title:String,message:String,description:String,showIcon:{type:Boolean,default:void 0},closable:{type:[Boolean,Object],default:void 0},closeText:[String,Object,Array,Function],closeIcon:[String,Object,Array,Function],icon:[String,Object,Array,Function],banner:Boolean,action:[String,Object,Array,Function],role:{type:String,default:"alert"},classNames:Object,styles:Object},emits:["close","afterClose"],setup(n,{slots:e,emit:l}){const i=Y("alert"),s=W(!1),r=W(!1),L=v(()=>n.type!==void 0?n.type:n.banner?"warning":"info"),w=v(()=>n.banner&&n.showIcon===void 0?!0:!!n.showIcon),G=v(()=>n.title??n.message),H=v(()=>{const{closable:p,closeText:d,closeIcon:b}=n;return h(p)||d!=null&&d!==""?!0:typeof p=="boolean"?p:b!=null}),J=v(()=>{const{closable:p,closeText:d,closeIcon:b}=n;if(h(p)&&p.closeIcon!=null)return p.closeIcon;if(d!=null&&d!=="")return d;if(b!=null)return b;if(e.closeIcon)return e.closeIcon()}),K=v(()=>{const{closable:p}=n;return h(p)&&typeof p["aria-label"]=="string"?p["aria-label"]:"关闭"}),Q=p=>{r.value=!0,l("close",p),setTimeout(()=>{s.value=!0,l("afterClose")},300)};return()=>{var N,C,S,q,I,_,$,B,F,E,T,O,P,j,D,V,z,M,R;if(s.value)return null;const p=L.value,d=!!(n.description||e.description),b=pn[p],U=n.icon??((N=e.icon)==null?void 0:N.call(e))??t(b,null,null),X=J.value??t(en,null,null),x=((C=e.message)==null?void 0:C.call(e))??((S=e.title)==null?void 0:S.call(e))??G.value,A=n.action??((q=e.action)==null?void 0:q.call(e));return t("div",{role:n.role,"aria-live":p==="error"||p==="warning"?"assertive":"polite","data-show":!s.value,class:k(i,`${i}-${p}`,`${i}-${n.variant}`,{[`${i}-with-description`]:d,[`${i}-banner`]:n.banner,[`${i}-closing`]:r.value,[`${i}-no-icon`]:!w.value},(I=n.classNames)==null?void 0:I.root),style:(_=n.styles)==null?void 0:_.root},[w.value&&t("span",{class:k(`${i}-icon`,($=n.classNames)==null?void 0:$.icon),style:(B=n.styles)==null?void 0:B.icon},[U]),t("div",{class:k(`${i}-section`,(F=n.classNames)==null?void 0:F.section),style:(E=n.styles)==null?void 0:E.section},[x!=null&&x!==""&&t("div",{class:k(`${i}-title`,(T=n.classNames)==null?void 0:T.title),style:(O=n.styles)==null?void 0:O.title},[x]),d&&t("div",{class:k(`${i}-description`,(P=n.classNames)==null?void 0:P.description),style:(j=n.styles)==null?void 0:j.description},[((D=e.description)==null?void 0:D.call(e))??n.description])]),A!=null&&t("div",{class:k(`${i}-actions`,(V=n.classNames)==null?void 0:V.actions),style:(z=n.styles)==null?void 0:z.actions},[A]),H.value&&t("button",{type:"button",tabindex:0,class:k(`${i}-close-icon`,(M=n.classNames)==null?void 0:M.closeIcon),style:(R=n.styles)==null?void 0:R.closeIcon,"aria-label":K.value,onClick:Q},[X])])}}}),rn={style:{display:"flex","flex-direction":"column",gap:"12px"}},dn=g({__name:"AlertBanner",setup(n){return(e,l)=>(f(),y("div",rn,[t(o(c),{banner:"",message:"顶部公告：banner 模式默认显示图标，类型默认为 warning。"}),t(o(c),{banner:"",type:"error",message:"错误公告"})]))}}),un=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert banner message="顶部公告：banner 模式默认显示图标，类型默认为 warning。" />
    <Alert banner type="error" message="错误公告" />
  </div>
</template>

<script setup lang="ts">
import { Alert } from '@hmfw/ant-design'
<\/script>
`,mn={style:{display:"flex","flex-direction":"column",gap:"24px"}},kn=g({__name:"AlertClassNames",setup(n){return(e,l)=>(f(),y("div",mn,[a("div",null,[l[0]||(l[0]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器与关闭按钮：",-1)),t(o(c),{type:"info",title:"系统通知",closable:"","class-names":{root:"demo-alert-root",closeIcon:"demo-alert-close"}})]),a("div",null,[l[1]||(l[1]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"定制图标、标题与描述：",-1)),t(o(c),{type:"success","show-icon":"",title:"部署成功",description:"新版本已平滑发布到生产环境，所有节点运行正常。","class-names":{icon:"demo-alert-icon",title:"demo-alert-title",description:"demo-alert-desc"}})]),a("div",null,[l[3]||(l[3]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"定制内容区与操作项：",-1)),t(o(c),{type:"warning","show-icon":"",title:"存储空间不足",description:"当前剩余空间已低于 10%，请及时清理。","class-names":{section:"demo-alert-section",actions:"demo-alert-actions"}},{action:m(()=>[t(o(cn),{size:"small",type:"primary"},{default:m(()=>[...l[2]||(l[2]=[u("立即清理",-1)])]),_:1})]),_:1})]),a("div",null,[l[4]||(l[4]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式（styles）：",-1)),t(o(c),{type:"error","show-icon":"",title:"请求失败",description:"服务暂时不可用，请稍后重试。",closable:"",styles:{root:{borderRadius:"10px",borderColor:"#ff7875"},title:{fontWeight:700,color:"#cf1322"},icon:{fontSize:"22px"},closeIcon:{color:"#cf1322"}}})]),a("div",null,[l[5]||(l[5]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"className 与 styles 叠加：",-1)),t(o(c),{type:"info","show-icon":"",title:"组合定制",description:"className 控制结构样式，styles 覆盖关键细节。","class-names":{root:"demo-alert-root",description:"demo-alert-desc"},styles:{title:{letterSpacing:"1px"}}})])]))}}),gn=Z(kn,[["__scopeId","data-v-3b277d5d"]]),fn=`<template>
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
import { Alert, Button } from '@hmfw/ant-design'
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
`,yn={style:{display:"flex","flex-direction":"column",gap:"12px"}},bn=g({__name:"AlertClosable",setup(n){function e(){console.log("关闭警告")}return(l,i)=>(f(),y("div",yn,[t(o(c),{message:"警告提示",type:"warning",closable:"",onClose:e}),t(o(c),{message:"错误提示",description:"详细的错误描述信息。",type:"error",closable:""})]))}}),vn=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert message="警告提示" type="warning" closable @close="onClose" />
    <Alert message="错误提示" description="详细的错误描述信息。" type="error" closable />
  </div>
</template>

<script setup lang="ts">
import { Alert } from '@hmfw/ant-design'

function onClose() {
  console.log('关闭警告')
}
<\/script>
`,xn={style:{display:"flex","flex-direction":"column",gap:"12px"}},hn=g({__name:"AlertDescription",setup(n){return(e,l)=>(f(),y("div",xn,[t(o(c),{message:"成功提示",description:"详细的成功描述和对此次成功的说明。",type:"success","show-icon":""}),t(o(c),{message:"错误提示",description:"详细的错误描述和对此次错误的说明。",type:"error","show-icon":""})]))}}),wn=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert message="成功提示" description="详细的成功描述和对此次成功的说明。" type="success" show-icon />
    <Alert message="错误提示" description="详细的错误描述和对此次错误的说明。" type="error" show-icon />
  </div>
</template>

<script setup lang="ts">
import { Alert } from '@hmfw/ant-design'
<\/script>
`,An={style:{display:"flex","flex-direction":"column",gap:"12px"}},Nn=g({__name:"AlertTypes",setup(n){return(e,l)=>(f(),y("div",An,[t(o(c),{message:"成功提示",type:"success"}),t(o(c),{message:"消息提示",type:"info"}),t(o(c),{message:"警告提示",type:"warning"}),t(o(c),{message:"错误提示",type:"error"})]))}}),Cn=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert message="成功提示" type="success" />
    <Alert message="消息提示" type="info" />
    <Alert message="警告提示" type="warning" />
    <Alert message="错误提示" type="error" />
  </div>
</template>

<script setup lang="ts">
import { Alert } from '@hmfw/ant-design'
<\/script>
`,Sn={style:{display:"flex","flex-direction":"column",gap:"12px"}},qn=g({__name:"AlertVariant",setup(n){return(e,l)=>(f(),y("div",Sn,[t(o(c),{type:"success",variant:"filled",message:"Filled 填充样式","show-icon":""}),t(o(c),{type:"info",variant:"filled",message:"Filled 填充样式","show-icon":""}),t(o(c),{type:"warning",variant:"filled",message:"Filled 填充样式","show-icon":""}),t(o(c),{type:"error",variant:"filled",message:"Filled 填充样式","show-icon":""})]))}}),In=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert type="success" variant="filled" message="Filled 填充样式" show-icon />
    <Alert type="info" variant="filled" message="Filled 填充样式" show-icon />
    <Alert type="warning" variant="filled" message="Filled 填充样式" show-icon />
    <Alert type="error" variant="filled" message="Filled 填充样式" show-icon />
  </div>
</template>

<script setup lang="ts">
import { Alert } from '@hmfw/ant-design'
<\/script>
`,_n={class:"markdown-body"},Vn={__name:"alert",setup(n,{expose:e}){return e({frontmatter:{}}),(i,s)=>{const r=nn("DemoBlock");return f(),y("div",_n,[s[0]||(s[0]=a("h1",{id:"alert-警告提示",tabindex:"-1"},"Alert 警告提示",-1)),s[1]||(s[1]=a("p",null,"警告提示，展现需要关注的信息。",-1)),s[2]||(s[2]=a("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),s[3]||(s[3]=a("ul",null,[a("li",null,"当某个页面需要向用户显示警告的信息时"),a("li",null,"非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭")],-1)),s[4]||(s[4]=a("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),s[5]||(s[5]=a("h3",{id:"四种类型",tabindex:"-1"},"四种类型",-1)),s[6]||(s[6]=a("p",null,"共有四种样式 success、info、warning、error。",-1)),t(r,{title:"四种类型",source:o(Cn)},{default:m(()=>[t(Nn)]),_:1},8,["source"]),s[7]||(s[7]=a("h3",{id:"带描述",tabindex:"-1"},"带描述",-1)),s[8]||(s[8]=a("p",null,"含有辅助性文字介绍的警告提示。",-1)),t(r,{title:"带描述",source:o(wn)},{default:m(()=>[t(hn)]),_:1},8,["source"]),s[9]||(s[9]=a("h3",{id:"可关闭",tabindex:"-1"},"可关闭",-1)),s[10]||(s[10]=a("p",null,"显示关闭按钮，点击可关闭警告提示。",-1)),t(r,{title:"可关闭",source:o(vn)},{default:m(()=>[t(bn)]),_:1},8,["source"]),s[11]||(s[11]=a("h3",{id:"填充样式",tabindex:"-1"},"填充样式",-1)),s[12]||(s[12]=a("p",null,[u("通过 "),a("code",null,'variant="filled"'),u(" 使用更强的背景填充。")],-1)),t(r,{title:"填充样式",source:o(In)},{default:m(()=>[t(qn)]),_:1},8,["source"]),s[13]||(s[13]=a("h3",{id:"顶部公告",tabindex:"-1"},"顶部公告",-1)),s[14]||(s[14]=a("p",null,[u("通过 "),a("code",null,"banner"),u(" 用作顶部公告，默认显示图标且类型为 warning。")],-1)),t(r,{title:"顶部公告",source:o(un)},{default:m(()=>[t(dn)]),_:1},8,["source"]),s[15]||(s[15]=a("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),s[16]||(s[16]=a("p",null,[u("通过 "),a("code",null,"classNames"),u(" / "),a("code",null,"styles"),u(" 对 root、icon、section、title、description、actions、closeIcon 等子元素做细粒度样式控制。")],-1)),t(r,{title:"语义化 className 与 style",source:o(fn)},{default:m(()=>[t(gn)]),_:1},8,["source"]),s[17]||(s[17]=tn(`<h2 id="api" tabindex="-1">API</h2><h3 id="alert-props" tabindex="-1">Alert Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>指定警告提示的样式</td><td><code>&#39;success&#39; | &#39;info&#39; | &#39;warning&#39; | &#39;error&#39;</code></td><td><code>&#39;info&#39;</code>（banner 模式为 <code>&#39;warning&#39;</code>）</td></tr><tr><td>variant</td><td>样式变体</td><td><code>&#39;outlined&#39; | &#39;filled&#39;</code></td><td><code>&#39;outlined&#39;</code></td></tr><tr><td>title</td><td>警告提示内容</td><td><code>string</code></td><td>-</td></tr><tr><td>message</td><td><code>title</code> 的别名（已废弃，请使用 <code>title</code>）</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>警告提示的辅助性文字介绍</td><td><code>string</code></td><td>-</td></tr><tr><td>showIcon</td><td>是否显示辅助图标（banner 模式默认 <code>true</code>）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>自定义图标（<code>showIcon</code> 为 <code>true</code> 时有效）</td><td><code>VNode | slot</code></td><td>-</td></tr><tr><td>closable</td><td>是否显示关闭按钮，可传对象自定义图标与无障碍标签</td><td><code>boolean | { closeIcon?, &#39;aria-label&#39;? }</code></td><td><code>false</code></td></tr><tr><td>closeIcon</td><td>自定义关闭按钮图标</td><td><code>VNode | slot</code></td><td>-</td></tr><tr><td>closeText</td><td>自定义关闭按钮文字（已废弃，请使用 <code>closeIcon</code>）</td><td><code>string</code></td><td>-</td></tr><tr><td>action</td><td>自定义操作项</td><td><code>VNode | slot</code></td><td>-</td></tr><tr><td>role</td><td>根节点 <code>role</code> 属性</td><td><code>string</code></td><td><code>&#39;alert&#39;</code></td></tr><tr><td>banner</td><td>是否用作顶部公告</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>AlertClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>AlertStyles</code></td><td>-</td></tr></tbody></table><h3 id="alert-slots" tabindex="-1">Alert Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>title / message</td><td>标题内容</td></tr><tr><td>description</td><td>辅助性文字介绍</td></tr><tr><td>icon</td><td>自定义图标</td></tr><tr><td>closeIcon</td><td>自定义关闭按钮</td></tr><tr><td>action</td><td>自定义操作项</td></tr></tbody></table><h3 id="alert-events" tabindex="-1">Alert Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>关闭时触发的回调函数</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>afterClose</td><td>关闭动画结束后触发的回调函数</td><td><code>() =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对警告提示的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>系统通知<span class="token punctuation">&quot;</span></span> <span class="token attr-name">closable</span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ root: &#39;my-alert-root&#39;, closeIcon: &#39;my-alert-close&#39; }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-alert-root)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f0f5ff<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #adc6ff<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.08<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-alert-close:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">show-icon</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请求失败<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>服务暂时不可用，请稍后重试。<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">closable</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { borderRadius: &#39;10px&#39;, borderColor: &#39;#ff7875&#39; },
      title: { fontWeight: 700, color: &#39;#cf1322&#39; },
      icon: { fontSize: &#39;22px&#39; },
      closeIcon: { color: &#39;#cf1322&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>classNames.icon</code> 仅在 <code>showIcon</code> 为 <code>true</code>（或 banner 模式默认开启）时生效</li><li><code>classNames.description</code> 仅在传入 <code>description</code> 时生效，无描述时该节点不渲染</li><li><code>classNames.actions</code> 仅在传入 <code>action</code> 时生效</li><li><code>classNames.closeIcon</code> 仅在 <code>closable</code> 为真值时生效</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-alert-error</code>、<code>.hmfw-alert-banner</code>）合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Alert 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。</p>`,24))])}}};export{Vn as default};
