import{S as Cs}from"./Space-B4HZ9MPx.js";import{d as H,u as ws,r as m,m as is,k as qs,y as Ss,c as p,g as B,a as U,o as T,q as ks,w as L,e as b,f as i,A as Ns,b as ds,_ as Ps,h as Bs,i as $s}from"./index-Bp9Mx9oa.js";import{c as d}from"./cls-S9IiI6wd.js";import{T as Es}from"./Trigger-BibV-SUH.js";function Ms(s){const l=s.replace("#",""),a=l.length===3?l.split("").map(n=>n+n).join(""):l,k=parseInt(a,16);return{r:k>>16&255,g:k>>8&255,b:k&255}}function Ls({r:s,g:l,b:a}){return"#"+[s,l,a].map(k=>k.toString(16).padStart(2,"0")).join("")}function Hs({r:s,g:l,b:a}){const k=s/255,n=l/255,t=a/255,r=Math.max(k,n,t),g=Math.min(k,n,t),e=r-g;let c=0;e!==0&&(r===k?c=(n-t)/e%6:r===n?c=(t-k)/e+2:c=(k-n)/e+4,c=Math.round(c*60),c<0&&(c+=360));const v=r===0?0:Math.round(e/r*100),$=Math.round(r*100);return{h:c,s:v,b:$}}function Ts({h:s,s:l,b:a}){const k=l/100,n=a/100,t=n*k,r=t*(1-Math.abs(s/60%2-1)),g=n-t;let e=0,c=0,v=0;return s<60?(e=t,c=r):s<120?(e=r,c=t):s<180?(c=t,v=r):s<240?(c=r,v=t):s<300?(e=r,v=t):(e=t,v=r),{r:Math.round((e+g)*255),g:Math.round((c+g)*255),b:Math.round((v+g)*255)}}function Rs(s){return Ls(Ts(s))}function E(s){return Hs(Ms(s))}function M(s){return/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(s)}const X="#1677ff",w=H({name:"ColorPicker",props:{value:String,defaultValue:{type:String,default:X},format:{type:String,default:"hex"},disabled:Boolean,size:{type:String,default:"middle"},showText:Boolean,allowClear:Boolean,presets:{type:Array,default:()=>[]},classNames:Object,styles:Object},emits:["update:value","change","clear","openChange"],setup(s,{emit:l}){const a=ws("color-picker"),k=m(null),n=m(!1),t=m(s.value??s.defaultValue??X);is(()=>s.value,o=>{o!==void 0&&(t.value=o)});const r=m(E(M(t.value)?t.value:X)),g=m(t.value);is(t,o=>{M(o)&&(r.value=E(o),g.value=o)});function e(o){r.value=o;const u=Rs(o);t.value=u,g.value=u,l("update:value",u),l("change",u)}const c=m(null),v=m(!1);function $(o){if(!c.value)return;const u=c.value.getBoundingClientRect(),h="touches"in o?o.touches[0].clientX:o.clientX,y="touches"in o?o.touches[0].clientY:o.clientY,f=Math.max(0,Math.min(100,(h-u.left)/u.width*100)),C=Math.max(0,Math.min(100,(1-(y-u.top)/u.height)*100));e({...r.value,s:Math.round(f),b:Math.round(C)})}function ms(o){v.value=!0,$(o)}function D(o){v.value&&$(o)}function V(){v.value=!1}const R=m(null),I=m(!1);function F(o){if(!R.value)return;const u=R.value.getBoundingClientRect(),h=Math.max(0,Math.min(360,(o.clientX-u.left)/u.width*360));e({...r.value,h:Math.round(h)})}function gs(o){I.value=!0,F(o)}function O(o){I.value&&F(o)}function G(){I.value=!1}qs(()=>{document.addEventListener("mousemove",D),document.addEventListener("mouseup",V),document.addEventListener("mousemove",O),document.addEventListener("mouseup",G)}),Ss(()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",V),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",G)});const vs=U(()=>({left:`${r.value.s}%`,top:`${100-r.value.b}%`})),fs=U(()=>({left:`${r.value.h/360*100}%`})),bs=U(()=>({background:`hsl(${r.value.h}, 100%, 50%)`}));function hs(o){const u=o.target.value;g.value=u,M(u)&&(t.value=u,r.value=E(u),l("update:value",u),l("change",u))}function xs(){t.value="",g.value="",l("update:value",void 0),l("clear")}const ys=()=>{var o,u,h,y,f,C,q,S,N,P,Y,j,z,W,J,K,Q,Z,_,ss,ns,as;return p("div",{ref:k,class:d(`${a}-panel`,(o=s.classNames)==null?void 0:o.panel),style:(u=s.styles)==null?void 0:u.panel},[p("div",{ref:c,class:d(`${a}-sb`,(h=s.classNames)==null?void 0:h.saturation),style:{...bs.value,...(y=s.styles)==null?void 0:y.saturation},onMousedown:ms},[p("div",{class:`${a}-sb-white`},null),p("div",{class:`${a}-sb-black`},null),p("div",{class:d(`${a}-sb-cursor`,(f=s.classNames)==null?void 0:f.saturationCursor),style:{...vs.value,...(C=s.styles)==null?void 0:C.saturationCursor}},null)]),p("div",{class:`${a}-sliders`},[p("div",{ref:R,class:d(`${a}-hue`,(q=s.classNames)==null?void 0:q.hueSlider),style:(S=s.styles)==null?void 0:S.hueSlider,onMousedown:gs},[p("div",{class:d(`${a}-hue-cursor`,(N=s.classNames)==null?void 0:N.hueCursor),style:{...fs.value,...(P=s.styles)==null?void 0:P.hueCursor}},null)])]),p("div",{class:d(`${a}-input-container`,(Y=s.classNames)==null?void 0:Y.inputContainer),style:(j=s.styles)==null?void 0:j.inputContainer},[p("div",{class:d(`${a}-preview`,(z=s.classNames)==null?void 0:z.preview),style:{background:t.value,...(W=s.styles)==null?void 0:W.preview}},null),p("input",{class:d(`${a}-hex-input`,(J=s.classNames)==null?void 0:J.hexInput),style:(K=s.styles)==null?void 0:K.hexInput,value:g.value,onInput:hs,maxlength:7,spellcheck:!1},null),p("span",{class:d(`${a}-format-label`,(Q=s.classNames)==null?void 0:Q.formatLabel),style:(Z=s.styles)==null?void 0:Z.formatLabel},[B("HEX")])]),s.presets.length>0&&p("div",{class:d(`${a}-presets`,(_=s.classNames)==null?void 0:_.presets),style:(ss=s.styles)==null?void 0:ss.presets},[s.presets.map(A=>{var ts,es,os,ps,ls,cs;return p("div",{key:A.label,class:d(`${a}-preset-group`,(ts=s.classNames)==null?void 0:ts.presetGroup),style:(es=s.styles)==null?void 0:es.presetGroup},[p("div",{class:d(`${a}-preset-label`,(os=s.classNames)==null?void 0:os.presetLabel),style:(ps=s.styles)==null?void 0:ps.presetLabel},[A.label]),p("div",{class:d(`${a}-preset-colors`,(ls=s.classNames)==null?void 0:ls.presetColors),style:(cs=s.styles)==null?void 0:cs.presetColors},[A.colors.map(x=>{var rs,us;return p("div",{key:x,class:d(`${a}-preset-color`,{[`${a}-preset-color-active`]:x===t.value},(rs=s.classNames)==null?void 0:rs.presetColor),style:{background:x,...(us=s.styles)==null?void 0:us.presetColor},onClick:()=>{t.value=x,g.value=x,M(x)&&(r.value=E(x)),l("update:value",x),l("change",x)}},null)})])])})]),s.allowClear&&p("div",{class:d(`${a}-clear-btn`,(ns=s.classNames)==null?void 0:ns.clearBtn),style:(as=s.styles)==null?void 0:as.clearBtn,onClick:xs},[B("清除")])])};return()=>{var o,u,h,y;return p(Es,{open:n.value,trigger:"click",placement:"bottomLeft",disabled:s.disabled,destroyOnHidden:!0,triggerClass:d(a,`${a}-${s.size}`,{[`${a}-disabled`]:s.disabled},(o=s.classNames)==null?void 0:o.root),triggerStyle:(u=s.styles)==null?void 0:u.root,popupClass:d(`${a}-panel`,(h=s.classNames)==null?void 0:h.panel),popupStyle:(y=s.styles)==null?void 0:y.panel,onOpenChange:f=>{n.value=f,l("openChange",f)}},{default:()=>{var f,C,q,S,N,P;return p("div",{class:d(`${a}-trigger`,{[`${a}-trigger-open`]:n.value},(f=s.classNames)==null?void 0:f.trigger),style:(C=s.styles)==null?void 0:C.trigger,role:"button","aria-haspopup":"true","aria-expanded":n.value},[p("div",{class:d(`${a}-color-block`,(q=s.classNames)==null?void 0:q.colorBlock),style:{background:t.value||"transparent",...(S=s.styles)==null?void 0:S.colorBlock}},null),s.showText&&p("span",{class:d(`${a}-text`,(N=s.classNames)==null?void 0:N.text),style:(P=s.styles)==null?void 0:P.text},[t.value||"—"])])},popup:({placement:f})=>ys()})}}}),Is=H({__name:"ColorPickerBasic",setup(s){const l=m("#1677ff");return(a,k)=>(T(),ks(b(Cs),{wrap:"",align:"center"},{default:L(()=>[p(b(w),{value:l.value,"onUpdate:value":k[0]||(k[0]=n=>l.value=n),"show-text":""},null,8,["value"]),i("span",null,"当前颜色："+Ns(l.value),1)]),_:1}))}}),As=`<template>
  <Space wrap align="center">
    <ColorPicker v-model:value="color" show-text />
    <span>当前颜色：{{ color }}</span>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorPicker, Space } from '@hmfw/ant-design'

const color = ref('#1677ff')
<\/script>
`,Us={style:{display:"flex","flex-direction":"column",gap:"24px"}},Xs=H({__name:"ColorPickerClassNames",setup(s){const l=m("#1677ff"),a=m("#52c41a"),k=m("#722ed1"),n=m("#fa8c16"),t=m("#eb2f96"),r=[{label:"推荐色",colors:["#1677ff","#52c41a","#faad14","#f5222d","#722ed1"]},{label:"最近使用",colors:["#fa8c16","#13c2c2","#eb2f96","#2f54eb","#a0d911"]}];return(g,e)=>(T(),ds("div",Us,[i("div",null,[e[5]||(e[5]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义触发器：",-1)),p(b(w),{value:l.value,"onUpdate:value":e[0]||(e[0]=c=>l.value=c),"show-text":"","class-names":{trigger:"custom-trigger",colorBlock:"custom-color-block",text:"custom-text"}},null,8,["value"])]),i("div",null,[e[6]||(e[6]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义面板：",-1)),p(b(w),{value:a.value,"onUpdate:value":e[1]||(e[1]=c=>a.value=c),"class-names":{panel:"custom-panel",saturation:"custom-saturation",hueSlider:"custom-hue-slider"}},null,8,["value"])]),i("div",null,[e[7]||(e[7]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义预设颜色：",-1)),p(b(w),{value:k.value,"onUpdate:value":e[2]||(e[2]=c=>k.value=c),presets:r,"class-names":{presetLabel:"custom-preset-label",presetColor:"custom-preset-color"}},null,8,["value"])]),i("div",null,[e[8]||(e[8]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),p(b(w),{value:n.value,"onUpdate:value":e[3]||(e[3]=c=>n.value=c),"show-text":"",styles:{trigger:{borderRadius:"12px",padding:"6px 12px",border:"2px solid #722ed1"},colorBlock:{borderRadius:"8px",width:"32px",height:"32px"},text:{color:"#722ed1",fontWeight:"500",marginLeft:"8px"}}},null,8,["value"])]),i("div",null,[e[9]||(e[9]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合使用：",-1)),p(b(w),{value:t.value,"onUpdate:value":e[4]||(e[4]=c=>t.value=c),"allow-clear":"",presets:r,"class-names":{panel:"combined-panel",clearBtn:"combined-clear-btn"},styles:{saturationCursor:{width:"24px",height:"24px",border:"3px solid white"},hueCursor:{width:"20px",height:"20px"}}},null,8,["value"])])]))}}),Ds=Ps(Xs,[["__scopeId","data-v-c08002d0"]]),Vs=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义触发器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义触发器：</div>
      <ColorPicker
        v-model:value="color1"
        show-text
        :class-names="{ trigger: 'custom-trigger', colorBlock: 'custom-color-block', text: 'custom-text' }"
      />
    </div>

    <!-- 场景 2：自定义面板样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义面板：</div>
      <ColorPicker
        v-model:value="color2"
        :class-names="{
          panel: 'custom-panel',
          saturation: 'custom-saturation',
          hueSlider: 'custom-hue-slider',
        }"
      />
    </div>

    <!-- 场景 3：自定义预设颜色样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义预设颜色：</div>
      <ColorPicker
        v-model:value="color3"
        :presets="presets"
        :class-names="{
          presetLabel: 'custom-preset-label',
          presetColor: 'custom-preset-color',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <ColorPicker
        v-model:value="color4"
        show-text
        :styles="{
          trigger: { borderRadius: '12px', padding: '6px 12px', border: '2px solid #722ed1' },
          colorBlock: { borderRadius: '8px', width: '32px', height: '32px' },
          text: { color: '#722ed1', fontWeight: '500', marginLeft: '8px' },
        }"
      />
    </div>

    <!-- 场景 5：组合使用 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用：</div>
      <ColorPicker
        v-model:value="color5"
        allow-clear
        :presets="presets"
        :class-names="{
          panel: 'combined-panel',
          clearBtn: 'combined-clear-btn',
        }"
        :styles="{
          saturationCursor: { width: '24px', height: '24px', border: '3px solid white' },
          hueCursor: { width: '20px', height: '20px' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorPicker } from '@hmfw/ant-design'

const color1 = ref('#1677ff')
const color2 = ref('#52c41a')
const color3 = ref('#722ed1')
const color4 = ref('#fa8c16')
const color5 = ref('#eb2f96')

const presets = [
  {
    label: '推荐色',
    colors: ['#1677ff', '#52c41a', '#faad14', '#f5222d', '#722ed1'],
  },
  {
    label: '最近使用',
    colors: ['#fa8c16', '#13c2c2', '#eb2f96', '#2f54eb', '#a0d911'],
  },
]
<\/script>

<style scoped>
:global(.custom-trigger) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s;
}

:global(.custom-trigger:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:global(.custom-color-block) {
  border: 2px solid white;
  border-radius: 6px;
}

:global(.custom-text) {
  color: white;
  font-weight: 500;
  margin-left: 8px;
}

:global(.custom-panel) {
  border-radius: 12px;
  padding: 16px;
  background: linear-gradient(135deg, #f6f8fb 0%, #ffffff 100%);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

:global(.custom-saturation) {
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}

:global(.custom-hue-slider) {
  border-radius: 6px;
  height: 14px;
}

:global(.custom-preset-label) {
  color: #722ed1;
  font-weight: 600;
  font-size: 13px;
}

:global(.custom-preset-color) {
  border-radius: 6px;
  transition: all 0.3s;
}

:global(.custom-preset-color:hover) {
  transform: scale(1.15);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

:global(.combined-panel) {
  border: 2px solid #1677ff;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(22, 119, 255, 0.2);
}

:global(.combined-clear-btn) {
  background: linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%);
  color: white;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.3s;
}

:global(.combined-clear-btn:hover) {
  background: linear-gradient(135deg, #ff7875 0%, #ffa39e 100%);
  transform: translateY(-1px);
}
</style>
`,Fs=H({__name:"ColorPickerPresets",setup(s){const l=m("#1677ff"),a=[{label:"推荐",colors:["#1677ff","#52c41a","#faad14","#ff4d4f","#722ed1","#13c2c2"]}];return(k,n)=>(T(),ks(b(w),{value:l.value,"onUpdate:value":n[0]||(n[0]=t=>l.value=t),"show-text":"",presets:a},null,8,["value"]))}}),Os=`<template>
  <ColorPicker v-model:value="color" show-text :presets="presets" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorPicker } from '@hmfw/ant-design'

const color = ref('#1677ff')

const presets = [
  {
    label: '推荐',
    colors: ['#1677ff', '#52c41a', '#faad14', '#ff4d4f', '#722ed1', '#13c2c2'],
  },
]
<\/script>
`,Gs={class:"markdown-body"},Js={__name:"color-picker",setup(s,{expose:l}){return l({frontmatter:{}}),(k,n)=>{const t=Bs("DemoBlock");return T(),ds("div",Gs,[n[0]||(n[0]=i("h1",{id:"colorpicker-颜色选择器",tabindex:"-1"},"ColorPicker 颜色选择器",-1)),n[1]||(n[1]=i("p",null,"提供颜色选取的组件。",-1)),n[2]||(n[2]=i("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=i("ul",null,[i("li",null,"需要用户选择颜色时，如主题配置、图表颜色等")],-1)),n[4]||(n[4]=i("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=i("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=i("p",null,"点击色块打开颜色面板，支持拖拽选色和 HEX 输入。",-1)),p(t,{title:"基础用法",source:b(As)},{default:L(()=>[p(Is)]),_:1},8,["source"]),n[7]||(n[7]=i("h3",{id:"预设颜色",tabindex:"-1"},"预设颜色",-1)),n[8]||(n[8]=i("p",null,"通过 presets 提供预设颜色快速选择。",-1)),p(t,{title:"预设颜色",source:b(Os)},{default:L(()=>[p(Fs)]),_:1},8,["source"]),n[9]||(n[9]=i("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[10]||(n[10]=i("p",null,[B("通过 "),i("code",null,"classNames"),B(" / "),i("code",null,"styles"),B(" 对各子元素做细粒度样式控制。")],-1)),p(t,{title:"语义化 className 与 style",source:b(Vs)},{default:L(()=>[p(Ds)]),_:1},8,["source"]),n[11]||(n[11]=$s(`<h2 id="api" tabindex="-1">API</h2><h3 id="colorpicker-props" tabindex="-1">ColorPicker Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value (v-model)</td><td>颜色值（HEX 格式）</td><td><code>string</code></td><td><code>&#39;#1677ff&#39;</code></td></tr><tr><td>defaultValue</td><td>默认颜色值</td><td><code>string</code></td><td><code>&#39;#1677ff&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>尺寸</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>showText</td><td>是否显示颜色文本</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>是否允许清除</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>presets</td><td>预设颜色组</td><td><code>Array&lt;{ label: string; colors: string[] }&gt;</code></td><td><code>[]</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ColorPickerClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ColorPickerStyles</code></td><td>-</td></tr></tbody></table><h3 id="colorpicker-events" tabindex="-1">ColorPicker Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>颜色变化时</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>clear</td><td>清除时</td><td><code>() =&gt; void</code></td></tr><tr><td>openChange</td><td>面板显示/隐藏时</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对颜色选择器的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">ColorPickerClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根容器</span>
  trigger<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 触发器按钮</span>
  colorBlock<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 触发器内的色块预览</span>
  text<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 触发器内的文本</span>
  panel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 弹出面板容器</span>
  saturation<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 饱和度/亮度选择器区域</span>
  saturationCursor<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 饱和度/亮度选择器的光标</span>
  hueSlider<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 色相滑块容器</span>
  hueCursor<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 色相滑块光标</span>
  inputContainer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 输入容器</span>
  preview<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 输入容器内的预览色块</span>
  hexInput<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// HEX 输入框</span>
  formatLabel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 格式标签（HEX）</span>
  presets<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 预设颜色区域</span>
  presetGroup<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 预设颜色组</span>
  presetLabel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 预设颜色组标签</span>
  presetColors<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 预设颜色列表</span>
  presetColor<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个预设颜色块</span>
  clearBtn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 清除按钮</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ColorPickerStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  trigger<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  colorBlock<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  text<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  panel<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  saturation<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  saturationCursor<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  hueSlider<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  hueCursor<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  inputContainer<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  preview<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  hexInput<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  formatLabel<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  presets<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  presetGroup<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  presetLabel<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  presetColors<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  presetColor<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  clearBtn<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-trigger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.trigger / styles.trigger 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-color-block<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background</span><span class="token punctuation">:</span> #1677ff</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.colorBlock / styles.colorBlock 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.text / styles.text 应用于此 --&gt;</span>
      #1677ff
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 弹出面板（Teleport 到 body） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-panel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.panel / styles.panel 应用于此 --&gt;</span>

    <span class="token comment">&lt;!-- 饱和度/亮度选择器 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-sb<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.saturation / styles.saturation 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-sb-cursor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.saturationCursor / styles.saturationCursor 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 色相滑块 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-hue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.hueSlider / styles.hueSlider 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-hue-cursor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.hueCursor / styles.hueCursor 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- HEX 输入 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-input-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.inputContainer / styles.inputContainer 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-preview<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.preview / styles.preview 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-hex-input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.hexInput / styles.hexInput 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-format-label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>HEX<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.formatLabel / styles.formatLabel 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 预设颜色 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-presets<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.presets / styles.presets 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-preset-group<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.presetGroup / styles.presetGroup 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-preset-label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>推荐色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.presetLabel / styles.presetLabel 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-preset-colors<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.presetColors / styles.presetColors 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-preset-color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.presetColor / styles.presetColor 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 清除按钮 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-color-picker-clear-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.clearBtn / styles.clearBtn 应用于此 --&gt;</span>
      清除
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义触发器样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">show-text</span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      trigger: &#39;my-trigger&#39;,
      colorBlock: &#39;my-color-block&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义面板样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      panel: &#39;my-panel&#39;,
      saturation: &#39;my-saturation&#39;,
      hueSlider: &#39;my-hue-slider&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:global(.my-trigger)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 8px 16px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:global(.my-color-block)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid white<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:global(.my-panel)</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 8px 24px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:global(.my-saturation)</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:global(.my-hue-slider)</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义触发器 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">show-text</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      trigger: { borderRadius: &#39;12px&#39;, padding: &#39;6px 12px&#39;, border: &#39;2px solid #722ed1&#39; },
      colorBlock: { borderRadius: &#39;8px&#39;, width: &#39;32px&#39;, height: &#39;32px&#39; },
      text: { color: &#39;#722ed1&#39;, fontWeight: &#39;500&#39;, marginLeft: &#39;8px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义光标样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      saturationCursor: { width: &#39;24px&#39;, height: &#39;24px&#39;, border: &#39;3px solid white&#39; },
      hueCursor: { width: &#39;20px&#39;, height: &#39;20px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>弹出面板通过 <code>Teleport</code> 挂载到 <code>body</code>，样式定制需使用 <code>:global()</code> 而非 <code>:deep()</code></li><li><code>classNames.saturationCursor</code> 和 <code>classNames.hueCursor</code> 用于自定义选色器光标的外观</li><li>预设颜色的 <code>presetColor</code> 在选中时会自动添加 <code>hmfw-color-picker-preset-color-active</code> 类名</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>ColorPicker 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr></tbody></table>`,23))])}}};export{Js as default};
