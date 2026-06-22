import{S as Ts}from"./Space-Bktr5yjC.js";import{o as $,N as Rs,E as g,Q as Cs,x as Is,w as Xs,n as o,T as As,m as C,t as Us,f as R,A as E,i as ws,R as B,K as v,h as i,J as Ds,k as Ss,_ as Vs,H as Fs,l as Os}from"./index-X2tFbSxS.js";import{c as m}from"./cls-S9IiI6wd.js";function Gs(s){const l=s.replace("#",""),t=l.length===3?l.split("").map(n=>n+n).join(""):l,r=parseInt(t,16);return{r:r>>16&255,g:r>>8&255,b:r&255}}function Ys({r:s,g:l,b:t}){return"#"+[s,l,t].map(r=>r.toString(16).padStart(2,"0")).join("")}function zs({r:s,g:l,b:t}){const r=s/255,n=l/255,p=t/255,d=Math.max(r,n,p),k=Math.min(r,n,p),a=d-k;let c=0;a!==0&&(d===r?c=(n-p)/a%6:d===n?c=(p-r)/a+2:c=(r-n)/a+4,c=Math.round(c*60),c<0&&(c+=360));const f=d===0?0:Math.round(a/d*100),y=Math.round(d*100);return{h:c,s:f,b:y}}function js({h:s,s:l,b:t}){const r=l/100,n=t/100,p=n*r,d=p*(1-Math.abs(s/60%2-1)),k=n-p;let a=0,c=0,f=0;return s<60?(a=p,c=d):s<120?(a=d,c=p):s<180?(c=p,f=d):s<240?(c=d,f=p):s<300?(a=d,f=p):(a=p,f=d),{r:Math.round((a+k)*255),g:Math.round((c+k)*255),b:Math.round((f+k)*255)}}function Ws(s){return Ys(js(s))}function N(s){return zs(Gs(s))}function P(s){return/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(s)}const I="#1677ff",x=$({name:"ColorPicker",props:{value:String,defaultValue:{type:String,default:I},format:{type:String,default:"hex"},disabled:Boolean,size:{type:String,default:"middle"},showText:Boolean,allowClear:Boolean,presets:{type:Array,default:()=>[]},classNames:Object,styles:Object},emits:["update:value","change","clear","openChange"],setup(s,{emit:l}){const t=Rs("color-picker"),r=g(null),n=g(null),p=g(!1),d=g({top:0,left:0}),k=g(s.value??s.defaultValue??I);Cs(()=>s.value,e=>{e!==void 0&&(k.value=e)});const a=g(N(P(k.value)?k.value:I)),c=g(k.value);Cs(k,e=>{P(e)&&(a.value=N(e),c.value=e)});function f(e){a.value=e;const u=Ws(e);k.value=u,c.value=u,l("update:value",u),l("change",u)}const y=g(null),M=g(!1);function X(e){if(!y.value)return;const u=y.value.getBoundingClientRect(),b="touches"in e?e.touches[0].clientX:e.clientX,w="touches"in e?e.touches[0].clientY:e.clientY,S=Math.max(0,Math.min(100,(b-u.left)/u.width*100)),q=Math.max(0,Math.min(100,(1-(w-u.top)/u.height)*100));f({...a.value,s:Math.round(S),b:Math.round(q)})}function qs(e){M.value=!0,X(e)}function A(e){M.value&&X(e)}function U(){M.value=!1}const L=g(null),H=g(!1);function D(e){if(!L.value)return;const u=L.value.getBoundingClientRect(),b=Math.max(0,Math.min(360,(e.clientX-u.left)/u.width*360));f({...a.value,h:Math.round(b)})}function Ns(e){H.value=!0,D(e)}function V(e){H.value&&D(e)}function F(){H.value=!1}Is(()=>{document.addEventListener("mousemove",A),document.addEventListener("mouseup",U),document.addEventListener("mousemove",V),document.addEventListener("mouseup",F),document.addEventListener("mousedown",O)}),Xs(()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",U),document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",F),document.removeEventListener("mousedown",O)});function O(e){var u,b;p.value&&((u=r.value)!=null&&u.contains(e.target)||(b=n.value)!=null&&b.contains(e.target)||(p.value=!1,l("openChange",!1)))}async function Ps(){s.disabled||(p.value=!p.value,l("openChange",p.value),p.value&&(await Us(),Bs()))}function Bs(){if(!r.value)return;const e=r.value.getBoundingClientRect();d.value={top:e.bottom+window.scrollY+4,left:e.left+window.scrollX}}const $s=R(()=>({left:`${a.value.s}%`,top:`${100-a.value.b}%`})),Es=R(()=>({left:`${a.value.h/360*100}%`})),Ms=R(()=>({background:`hsl(${a.value.h}, 100%, 50%)`}));function Ls(e){const u=e.target.value;c.value=u,P(u)&&(k.value=u,a.value=N(u),l("update:value",u),l("change",u))}function Hs(){k.value="",c.value="",l("update:value",void 0),l("clear")}return()=>{var e,u,b,w,S,q,G,Y;return o("div",{class:m(t,`${t}-${s.size}`,{[`${t}-disabled`]:s.disabled},(e=s.classNames)==null?void 0:e.root),style:(u=s.styles)==null?void 0:u.root},[o("div",{ref:r,class:m(`${t}-trigger`,{[`${t}-trigger-open`]:p.value},(b=s.classNames)==null?void 0:b.trigger),style:(w=s.styles)==null?void 0:w.trigger,onClick:Ps,role:"button","aria-haspopup":"true","aria-expanded":p.value},[o("div",{class:m(`${t}-color-block`,(S=s.classNames)==null?void 0:S.colorBlock),style:{background:k.value||"transparent",...(q=s.styles)==null?void 0:q.colorBlock}},null),s.showText&&o("span",{class:m(`${t}-text`,(G=s.classNames)==null?void 0:G.text),style:(Y=s.styles)==null?void 0:Y.text},[k.value||"—"])]),p.value&&o(As,{to:"body"},{default:()=>{var z,j,W,J,K,Q,Z,_,ss,ns,as,ts,es,os,ls,ps,cs,rs,us,is,ds,ks;return[o("div",{ref:n,class:m(`${t}-panel`,(z=s.classNames)==null?void 0:z.panel),style:{position:"absolute",top:`${d.value.top}px`,left:`${d.value.left}px`,zIndex:1050,...(j=s.styles)==null?void 0:j.panel}},[o("div",{ref:y,class:m(`${t}-sb`,(W=s.classNames)==null?void 0:W.saturation),style:{...Ms.value,...(J=s.styles)==null?void 0:J.saturation},onMousedown:qs},[o("div",{class:`${t}-sb-white`},null),o("div",{class:`${t}-sb-black`},null),o("div",{class:m(`${t}-sb-cursor`,(K=s.classNames)==null?void 0:K.saturationCursor),style:{...$s.value,...(Q=s.styles)==null?void 0:Q.saturationCursor}},null)]),o("div",{class:`${t}-sliders`},[o("div",{ref:L,class:m(`${t}-hue`,(Z=s.classNames)==null?void 0:Z.hueSlider),style:(_=s.styles)==null?void 0:_.hueSlider,onMousedown:Ns},[o("div",{class:m(`${t}-hue-cursor`,(ss=s.classNames)==null?void 0:ss.hueCursor),style:{...Es.value,...(ns=s.styles)==null?void 0:ns.hueCursor}},null)])]),o("div",{class:m(`${t}-input-container`,(as=s.classNames)==null?void 0:as.inputContainer),style:(ts=s.styles)==null?void 0:ts.inputContainer},[o("div",{class:m(`${t}-preview`,(es=s.classNames)==null?void 0:es.preview),style:{background:k.value,...(os=s.styles)==null?void 0:os.preview}},null),o("input",{class:m(`${t}-hex-input`,(ls=s.classNames)==null?void 0:ls.hexInput),style:(ps=s.styles)==null?void 0:ps.hexInput,value:c.value,onInput:Ls,maxlength:7,spellcheck:!1},null),o("span",{class:m(`${t}-format-label`,(cs=s.classNames)==null?void 0:cs.formatLabel),style:(rs=s.styles)==null?void 0:rs.formatLabel},[C("HEX")])]),s.presets.length>0&&o("div",{class:m(`${t}-presets`,(us=s.classNames)==null?void 0:us.presets),style:(is=s.styles)==null?void 0:is.presets},[s.presets.map(T=>{var ms,gs,vs,fs,bs,hs;return o("div",{key:T.label,class:m(`${t}-preset-group`,(ms=s.classNames)==null?void 0:ms.presetGroup),style:(gs=s.styles)==null?void 0:gs.presetGroup},[o("div",{class:m(`${t}-preset-label`,(vs=s.classNames)==null?void 0:vs.presetLabel),style:(fs=s.styles)==null?void 0:fs.presetLabel},[T.label]),o("div",{class:m(`${t}-preset-colors`,(bs=s.classNames)==null?void 0:bs.presetColors),style:(hs=s.styles)==null?void 0:hs.presetColors},[T.colors.map(h=>{var xs,ys;return o("div",{key:h,class:m(`${t}-preset-color`,{[`${t}-preset-color-active`]:h===k.value},(xs=s.classNames)==null?void 0:xs.presetColor),style:{background:h,...(ys=s.styles)==null?void 0:ys.presetColor},onClick:()=>{k.value=h,c.value=h,P(h)&&(a.value=N(h)),l("update:value",h),l("change",h)}},null)})])])})]),s.allowClear&&o("div",{class:m(`${t}-clear-btn`,(ds=s.classNames)==null?void 0:ds.clearBtn),style:(ks=s.styles)==null?void 0:ks.clearBtn,onClick:Hs},[C("清除")])])]}})])}}}),Js=$({__name:"ColorPickerBasic",setup(s){const l=g("#1677ff");return(t,r)=>(E(),ws(v(Ts),{wrap:"",align:"center"},{default:B(()=>[o(v(x),{value:l.value,"onUpdate:value":r[0]||(r[0]=n=>l.value=n),"show-text":""},null,8,["value"]),i("span",null,"当前颜色："+Ds(l.value),1)]),_:1}))}}),Ks=`<template>
  <Space wrap align="center">
    <ColorPicker v-model:value="color" show-text />
    <span>当前颜色：{{ color }}</span>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorPicker, Space } from 'ant-design-hmfw'

const color = ref('#1677ff')
<\/script>
`,Qs={style:{display:"flex","flex-direction":"column",gap:"24px"}},Zs=$({__name:"ColorPickerClassNames",setup(s){const l=g("#1677ff"),t=g("#52c41a"),r=g("#722ed1"),n=g("#fa8c16"),p=g("#eb2f96"),d=[{label:"推荐色",colors:["#1677ff","#52c41a","#faad14","#f5222d","#722ed1"]},{label:"最近使用",colors:["#fa8c16","#13c2c2","#eb2f96","#2f54eb","#a0d911"]}];return(k,a)=>(E(),Ss("div",Qs,[i("div",null,[a[5]||(a[5]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义触发器：",-1)),o(v(x),{value:l.value,"onUpdate:value":a[0]||(a[0]=c=>l.value=c),"show-text":"","class-names":{trigger:"custom-trigger",colorBlock:"custom-color-block",text:"custom-text"}},null,8,["value"])]),i("div",null,[a[6]||(a[6]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义面板：",-1)),o(v(x),{value:t.value,"onUpdate:value":a[1]||(a[1]=c=>t.value=c),"class-names":{panel:"custom-panel",saturation:"custom-saturation",hueSlider:"custom-hue-slider"}},null,8,["value"])]),i("div",null,[a[7]||(a[7]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义预设颜色：",-1)),o(v(x),{value:r.value,"onUpdate:value":a[2]||(a[2]=c=>r.value=c),presets:d,"class-names":{presetLabel:"custom-preset-label",presetColor:"custom-preset-color"}},null,8,["value"])]),i("div",null,[a[8]||(a[8]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),o(v(x),{value:n.value,"onUpdate:value":a[3]||(a[3]=c=>n.value=c),"show-text":"",styles:{trigger:{borderRadius:"12px",padding:"6px 12px",border:"2px solid #722ed1"},colorBlock:{borderRadius:"8px",width:"32px",height:"32px"},text:{color:"#722ed1",fontWeight:"500",marginLeft:"8px"}}},null,8,["value"])]),i("div",null,[a[9]||(a[9]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合使用：",-1)),o(v(x),{value:p.value,"onUpdate:value":a[4]||(a[4]=c=>p.value=c),"allow-clear":"",presets:d,"class-names":{panel:"combined-panel",clearBtn:"combined-clear-btn"},styles:{saturationCursor:{width:"24px",height:"24px",border:"3px solid white"},hueCursor:{width:"20px",height:"20px"}}},null,8,["value"])])]))}}),_s=Vs(Zs,[["__scopeId","data-v-8029c21e"]]),sn=`<template>
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
import { ColorPicker } from 'ant-design-hmfw'

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
`,nn=$({__name:"ColorPickerPresets",setup(s){const l=g("#1677ff"),t=[{label:"推荐",colors:["#1677ff","#52c41a","#faad14","#ff4d4f","#722ed1","#13c2c2"]}];return(r,n)=>(E(),ws(v(x),{value:l.value,"onUpdate:value":n[0]||(n[0]=p=>l.value=p),"show-text":"",presets:t},null,8,["value"]))}}),an=`<template>
  <ColorPicker v-model:value="color" show-text :presets="presets" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorPicker } from 'ant-design-hmfw'

const color = ref('#1677ff')

const presets = [
  {
    label: '推荐',
    colors: ['#1677ff', '#52c41a', '#faad14', '#ff4d4f', '#722ed1', '#13c2c2'],
  },
]
<\/script>
`,tn={class:"markdown-body"},pn={__name:"color-picker",setup(s,{expose:l}){return l({frontmatter:{}}),(r,n)=>{const p=Fs("DemoBlock");return E(),Ss("div",tn,[n[0]||(n[0]=i("h1",{id:"colorpicker-颜色选择器",tabindex:"-1"},"ColorPicker 颜色选择器",-1)),n[1]||(n[1]=i("p",null,"提供颜色选取的组件。",-1)),n[2]||(n[2]=i("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=i("ul",null,[i("li",null,"需要用户选择颜色时，如主题配置、图表颜色等")],-1)),n[4]||(n[4]=i("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=i("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=i("p",null,"点击色块打开颜色面板，支持拖拽选色和 HEX 输入。",-1)),o(p,{title:"基础用法",source:v(Ks)},{default:B(()=>[o(Js)]),_:1},8,["source"]),n[7]||(n[7]=i("h3",{id:"预设颜色",tabindex:"-1"},"预设颜色",-1)),n[8]||(n[8]=i("p",null,"通过 presets 提供预设颜色快速选择。",-1)),o(p,{title:"预设颜色",source:v(an)},{default:B(()=>[o(nn)]),_:1},8,["source"]),n[9]||(n[9]=i("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[10]||(n[10]=i("p",null,[C("通过 "),i("code",null,"classNames"),C(" / "),i("code",null,"styles"),C(" 对各子元素做细粒度样式控制。")],-1)),o(p,{title:"语义化 className 与 style",source:v(sn)},{default:B(()=>[o(_s)]),_:1},8,["source"]),n[11]||(n[11]=Os(`<h2 id="api" tabindex="-1">API</h2><h3 id="colorpicker-props" tabindex="-1">ColorPicker Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value (v-model)</td><td>颜色值（HEX 格式）</td><td><code>string</code></td><td><code>&#39;#1677ff&#39;</code></td></tr><tr><td>defaultValue</td><td>默认颜色值</td><td><code>string</code></td><td><code>&#39;#1677ff&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>尺寸</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>showText</td><td>是否显示颜色文本</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>是否允许清除</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>presets</td><td>预设颜色组</td><td><code>Array&lt;{ label: string; colors: string[] }&gt;</code></td><td><code>[]</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ColorPickerClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ColorPickerStyles</code></td><td>-</td></tr></tbody></table><h3 id="colorpicker-events" tabindex="-1">ColorPicker Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>颜色变化时</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>clear</td><td>清除时</td><td><code>() =&gt; void</code></td></tr><tr><td>openChange</td><td>面板显示/隐藏时</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对颜色选择器的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义触发器样式 --&gt;
  &lt;ColorPicker
    v-model:value=&quot;color&quot;
    show-text
    :class-names=&quot;{
      trigger: &#39;my-trigger&#39;,
      colorBlock: &#39;my-color-block&#39;,
    }&quot;
  /&gt;

  &lt;!-- 自定义面板样式 --&gt;
  &lt;ColorPicker
    v-model:value=&quot;color&quot;
    :class-names=&quot;{
      panel: &#39;my-panel&#39;,
      saturation: &#39;my-saturation&#39;,
      hueSlider: &#39;my-hue-slider&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:global(.my-trigger) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
}

:global(.my-color-block) {
  border: 2px solid white;
  border-radius: 6px;
}

:global(.my-panel) {
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

:global(.my-saturation) {
  border-radius: 8px;
}

:global(.my-hue-slider) {
  border-radius: 6px;
  height: 14px;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义触发器 --&gt;
  &lt;ColorPicker
    v-model:value=&quot;color&quot;
    show-text
    :styles=&quot;{
      trigger: { borderRadius: &#39;12px&#39;, padding: &#39;6px 12px&#39;, border: &#39;2px solid #722ed1&#39; },
      colorBlock: { borderRadius: &#39;8px&#39;, width: &#39;32px&#39;, height: &#39;32px&#39; },
      text: { color: &#39;#722ed1&#39;, fontWeight: &#39;500&#39;, marginLeft: &#39;8px&#39; },
    }&quot;
  /&gt;

  &lt;!-- 自定义光标样式 --&gt;
  &lt;ColorPicker
    v-model:value=&quot;color&quot;
    :styles=&quot;{
      saturationCursor: { width: &#39;24px&#39;, height: &#39;24px&#39;, border: &#39;3px solid white&#39; },
      hueCursor: { width: &#39;20px&#39;, height: &#39;20px&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>弹出面板通过 <code>Teleport</code> 挂载到 <code>body</code>，样式定制需使用 <code>:global()</code> 而非 <code>:deep()</code></li><li><code>classNames.saturationCursor</code> 和 <code>classNames.hueCursor</code> 用于自定义选色器光标的外观</li><li>预设颜色的 <code>presetColor</code> 在选中时会自动添加 <code>hmfw-color-picker-preset-color-active</code> 类名</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>ColorPicker 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr></tbody></table>`,23))])}}};export{pn as default};
