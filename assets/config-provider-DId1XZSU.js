import{k as u,w as p,g as m,F as v,d as t,G as r,O as x,j as n,C as g,M as i,E as C,z as y,r as b,c as h,e as P,B as S,h as k}from"./index-DvxRruME.js";const z={locale:"en-US",common:{confirm:"Confirm",cancel:"Cancel",ok:"OK",close:"Close",loading:"Loading",noData:"No data",search:"Search",reset:"Reset",submit:"Submit",expand:"Expand",collapse:"Collapse",selectAll:"Select all",clearAll:"Clear all"},Button:{loading:"Loading"},Input:{placeholder:"Please input",clearTitle:"Clear"},Select:{placeholder:"Please select",notFoundContent:"Not found",loading:"Loading"},DatePicker:{placeholder:"Select date",yearPlaceholder:"Select year",monthPlaceholder:"Select month",rangePlaceholder:["Start date","End date"],today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",previousMonth:"Previous month",nextMonth:"Next month",previousYear:"Last year",nextYear:"Next year",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century",weekdays:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},TimePicker:{placeholder:"Select time"},Pagination:{itemsPerPage:"/ page",jumpTo:"Go to",jumpToConfirm:"confirm",page:"",prevPage:"Previous page",nextPage:"Next page",prevFive:"Previous 5 pages",nextFive:"Next 5 pages",totalItems:a=>`Total ${a} items`},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"}},N={style:{display:"flex",gap:"12px","margin-bottom":"16px"}},T=u({__name:"ConfigProviderLocale",setup(a){const o=y(x);return(s,d)=>(p(),m(v,null,[t("div",N,[t("button",{onClick:d[0]||(d[0]=e=>o.value=r(x))},"中文"),t("button",{onClick:d[1]||(d[1]=e=>o.value=r(z))},"English")]),n(r(g),{locale:o.value},{default:i(()=>[t("p",null,"当前语言："+C(o.value.locale),1)]),_:1},8,["locale"])],64))}}),w=`<template>
  <div style="display: flex; gap: 12px; margin-bottom: 16px;">
    <button @click="locale = zhCN">中文</button>
    <button @click="locale = enUS">English</button>
  </div>
  <ConfigProvider :locale="locale">
    <p>当前语言：{{ locale.locale }}</p>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ConfigProvider, zhCN, enUS } from 'ant-design-hmfw'

const locale = ref(zhCN)
<\/script>
`,M={style:{display:"flex",gap:"12px","margin-bottom":"16px"}},R={style:{display:"flex","flex-direction":"column",gap:"12px"}},_=u({__name:"ConfigProviderSize",setup(a){const o=y("middle"),s={small:"24px",middle:"32px",large:"40px"},d=h(()=>({height:s[o.value],padding:"0 8px",border:"1px solid #d9d9d9",borderRadius:"6px"})),e=h(()=>({height:s[o.value],padding:"0 16px",border:"1px solid #d9d9d9",borderRadius:"6px",cursor:"pointer"}));return(c,l)=>(p(),m(v,null,[t("div",M,[t("button",{onClick:l[0]||(l[0]=f=>o.value="small")},"小"),t("button",{onClick:l[1]||(l[1]=f=>o.value="middle")},"中"),t("button",{onClick:l[2]||(l[2]=f=>o.value="large")},"大")]),n(r(g),{"component-size":o.value},{default:i(()=>[t("div",R,[t("input",{style:b(d.value),placeholder:"输入框"},null,4),t("button",{style:b(e.value)},"按钮",4)])]),_:1},8,["component-size"])],64))}}),D=`<template>
  <div style="display: flex; gap: 12px; margin-bottom: 16px;">
    <button @click="size = 'small'">小</button>
    <button @click="size = 'middle'">中</button>
    <button @click="size = 'large'">大</button>
  </div>
  <ConfigProvider :component-size="size">
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <input :style="inputStyle" placeholder="输入框" />
      <button :style="btnStyle">按钮</button>
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ConfigProvider } from 'ant-design-hmfw'

const size = ref<'small' | 'middle' | 'large'>('middle')

const heightMap = { small: '24px', middle: '32px', large: '40px' }

const inputStyle = computed(() => ({
  height: heightMap[size.value],
  padding: '0 8px',
  border: '1px solid #d9d9d9',
  borderRadius: '6px',
}))

const btnStyle = computed(() => ({
  height: heightMap[size.value],
  padding: '0 16px',
  border: '1px solid #d9d9d9',
  borderRadius: '6px',
  cursor: 'pointer',
}))
<\/script>
`,E=u({__name:"ConfigProviderTheme",setup(a){const o={token:{colorPrimary:"#00b96b",borderRadius:2}};return(s,d)=>(p(),P(r(g),{theme:o},{default:i(()=>[...d[0]||(d[0]=[t("div",{style:{display:"flex","flex-direction":"column",gap:"12px"}},[t("button",{style:{background:"var(--hmfw-color-primary)",color:"white",border:"none",padding:"8px 16px","border-radius":"6px",cursor:"pointer"}}," 主色按钮 "),t("p",{style:{color:"var(--hmfw-color-primary)"}},"主色文字")],-1)])]),_:1}))}}),F=`<template>
  <ConfigProvider :theme="theme">
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <button style="background: var(--hmfw-color-primary); color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
        主色按钮
      </button>
      <p style="color: var(--hmfw-color-primary);">主色文字</p>
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-hmfw'

const theme = {
  token: {
    colorPrimary: '#00b96b',
    borderRadius: 2,
  },
}
<\/script>
`,$={class:"markdown-body"},U={__name:"config-provider",setup(a,{expose:o}){return o({frontmatter:{}}),(d,e)=>{const c=S("DemoBlock");return p(),m("div",$,[e[0]||(e[0]=t("h1",{id:"configprovider-",tabindex:"-1"},"ConfigProvider 全局配置",-1)),e[1]||(e[1]=t("p",null,"为组件提供统一的全局化配置。",-1)),e[2]||(e[2]=t("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=t("ul",null,[t("li",null,"需要统一配置组件库的主题、国际化、组件尺寸等全局属性时"),t("li",null,"在应用根组件处包裹，影响所有子组件")],-1)),e[4]||(e[4]=t("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=t("h3",{id:"-2",tabindex:"-1"},"主题配置",-1)),e[6]||(e[6]=t("p",null,"通过 theme 属性配置全局主题色。",-1)),n(c,{title:"主题配置",source:r(F)},{default:i(()=>[n(E)]),_:1},8,["source"]),e[7]||(e[7]=t("h3",{id:"-3",tabindex:"-1"},"国际化",-1)),e[8]||(e[8]=t("p",null,"通过 locale 属性配置国际化语言。",-1)),n(c,{title:"国际化",source:r(w)},{default:i(()=>[n(T)]),_:1},8,["source"]),e[9]||(e[9]=t("h3",{id:"-4",tabindex:"-1"},"全局尺寸",-1)),e[10]||(e[10]=t("p",null,"通过 componentSize 属性统一配置组件尺寸。",-1)),n(c,{title:"全局尺寸",source:r(D)},{default:i(()=>[n(_)]),_:1},8,["source"]),e[11]||(e[11]=k('<h2 id="api" tabindex="-1">API</h2><h3 id="configprovider-props" tabindex="-1">ConfigProvider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>theme</td><td>设置主题，包括主色等 Design Token</td><td><code>{ token?: { colorPrimary?: string, borderRadius?: number, ... } }</code></td><td>-</td></tr><tr><td>locale</td><td>语言包配置</td><td><code>zhCN | enUS</code></td><td><code>zhCN</code></td></tr><tr><td>prefixCls</td><td>设置统一样式前缀</td><td><code>string</code></td><td><code>&#39;hmfw&#39;</code></td></tr><tr><td>componentSize</td><td>设置 antd 组件大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>direction</td><td>设置布局方向</td><td><code>&#39;ltr&#39; | &#39;rtl&#39;</code></td><td><code>&#39;ltr&#39;</code></td></tr></tbody></table><h3 id="theme-token" tabindex="-1">Theme Token（常用）</h3><table><thead><tr><th>Token</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>colorPrimary</td><td>品牌主色</td><td><code>string</code></td><td><code>&#39;#1677ff&#39;</code></td></tr><tr><td>colorSuccess</td><td>成功色</td><td><code>string</code></td><td><code>&#39;#52c41a&#39;</code></td></tr><tr><td>colorWarning</td><td>警告色</td><td><code>string</code></td><td><code>&#39;#faad14&#39;</code></td></tr><tr><td>colorError</td><td>错误色</td><td><code>string</code></td><td><code>&#39;#ff4d4f&#39;</code></td></tr><tr><td>borderRadius</td><td>基础圆角</td><td><code>number</code></td><td><code>6</code></td></tr><tr><td>fontSize</td><td>基础字号</td><td><code>number</code></td><td><code>14</code></td></tr></tbody></table><h3 id="-5" tabindex="-1">国际化语言包</h3><table><thead><tr><th>语言包</th><th>说明</th></tr></thead><tbody><tr><td><code>zhCN</code></td><td>简体中文</td></tr><tr><td><code>enUS</code></td><td>英文</td></tr></tbody></table>',7))])}}};export{U as default};
