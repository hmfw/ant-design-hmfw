import{B as a}from"./Button-CLD9HWRg.js";import{o as g,A as m,k as f,F as C,h as t,n,L as r,W as h,S as i,m as s,a as x,K as P,E as S,v as y,f as b,i as k,H as T,l as B}from"./index-7wnt1Cyk.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-VcPrAqG4.js";const N={locale:"en-US",common:{confirm:"Confirm",cancel:"Cancel",ok:"OK",close:"Close",loading:"Loading",noData:"No data",search:"Search",reset:"Reset",submit:"Submit",expand:"Expand",collapse:"Collapse",selectAll:"Select all",clearAll:"Clear all"},Button:{loading:"Loading"},Input:{placeholder:"Please input",clearTitle:"Clear"},Select:{placeholder:"Please select",notFoundContent:"Not found",loading:"Loading"},DatePicker:{placeholder:"Select date",yearPlaceholder:"Select year",monthPlaceholder:"Select month",rangePlaceholder:["Start date","End date"],today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",previousMonth:"Previous month",nextMonth:"Next month",previousYear:"Last year",nextYear:"Next year",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century",weekdays:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},TimePicker:{placeholder:"Select time"},Pagination:{itemsPerPage:"/ page",jumpTo:"Go to",jumpToConfirm:"confirm",page:"",prevPage:"Previous page",nextPage:"Next page",prevFive:"Previous 5 pages",nextFive:"Next 5 pages",totalItems:p=>`Total ${p} items`},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Transfer:{searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectAll:"Select all data",deselectAll:"Deselect all data",selectCurrent:"Select current page",selectInvert:"Invert current page",removeAll:"Remove all data",removeCurrent:"Remove current page",notFoundContent:"The list is empty"},Typography:{copy:"Copy",copied:"Copied",expand:"Expand",collapse:"Collapse"},Calendar:{month:"Month",year:"Year",today:"Today",selectDate:"Select date",selectMonth:"Select month"}},z={style:{display:"flex",gap:"12px","margin-bottom":"16px"}},w=g({__name:"ConfigProviderLocale",setup(p){const d=S(h);return(c,o)=>(m(),f(C,null,[t("div",z,[n(r(a),{onClick:o[0]||(o[0]=e=>d.value=r(h))},{default:i(()=>[...o[2]||(o[2]=[s("中文",-1)])]),_:1}),n(r(a),{onClick:o[1]||(o[1]=e=>d.value=r(N))},{default:i(()=>[...o[3]||(o[3]=[s("English",-1)])]),_:1})]),n(r(x),{locale:d.value},{default:i(()=>[t("p",null,"当前语言："+P(d.value.locale),1)]),_:1},8,["locale"])],64))}}),R=`<template>
  <div style="display: flex; gap: 12px; margin-bottom: 16px">
    <Button @click="locale = zhCN">中文</Button>
    <Button @click="locale = enUS">English</Button>
  </div>
  <ConfigProvider :locale="locale">
    <p>当前语言：{{ locale.locale }}</p>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ConfigProvider, Button, zhCN, enUS } from '@hmfw/ant-design'

const locale = ref(zhCN)
<\/script>
`,D={style:{display:"flex",gap:"12px","margin-bottom":"16px"}},M={style:{display:"flex","flex-direction":"column",gap:"12px"}},A=g({__name:"ConfigProviderSize",setup(p){const d=S("middle"),c={small:"24px",middle:"32px",large:"40px"},o=b(()=>({height:c[d.value],padding:"0 8px",border:"1px solid #d9d9d9",borderRadius:"6px"})),e=b(()=>({height:c[d.value],padding:"0 16px",border:"1px solid #d9d9d9",borderRadius:"6px",cursor:"pointer"}));return(u,l)=>(m(),f(C,null,[t("div",D,[n(r(a),{onClick:l[0]||(l[0]=v=>d.value="small")},{default:i(()=>[...l[3]||(l[3]=[s("小",-1)])]),_:1}),n(r(a),{onClick:l[1]||(l[1]=v=>d.value="middle")},{default:i(()=>[...l[4]||(l[4]=[s("中",-1)])]),_:1}),n(r(a),{onClick:l[2]||(l[2]=v=>d.value="large")},{default:i(()=>[...l[5]||(l[5]=[s("大",-1)])]),_:1})]),n(r(x),{"component-size":d.value},{default:i(()=>[t("div",M,[t("input",{style:y(o.value),placeholder:"输入框"},null,4),n(r(a),{style:y(e.value)},{default:i(()=>[...l[6]||(l[6]=[s("按钮",-1)])]),_:1},8,["style"])])]),_:1},8,["component-size"])],64))}}),E=`<template>
  <div style="display: flex; gap: 12px; margin-bottom: 16px">
    <Button @click="size = 'small'">小</Button>
    <Button @click="size = 'middle'">中</Button>
    <Button @click="size = 'large'">大</Button>
  </div>
  <ConfigProvider :component-size="size">
    <div style="display: flex; flex-direction: column; gap: 12px">
      <input :style="inputStyle" placeholder="输入框" />
      <Button :style="btnStyle">按钮</Button>
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ConfigProvider, Button } from '@hmfw/ant-design'

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
`,F={style:{display:"flex","flex-direction":"column",gap:"12px"}},$=g({__name:"ConfigProviderTheme",setup(p){const d={token:{colorPrimary:"#00b96b",borderRadius:2}};return(c,o)=>(m(),k(r(x),{theme:d},{default:i(()=>[t("div",F,[n(r(a),{style:{background:"var(--hmfw-color-primary)",color:"white",border:"none",padding:"8px 16px","border-radius":"6px",cursor:"pointer"}},{default:i(()=>[...o[0]||(o[0]=[s(" 主色按钮 ",-1)])]),_:1}),o[1]||(o[1]=t("p",{style:{color:"var(--hmfw-color-primary)"}},"主色文字",-1))])]),_:1}))}}),U=`<template>
  <ConfigProvider :theme="theme">
    <div style="display: flex; flex-direction: column; gap: 12px">
      <Button
        style="
          background: var(--hmfw-color-primary);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
        "
      >
        主色按钮
      </Button>
      <p style="color: var(--hmfw-color-primary)">主色文字</p>
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider, Button } from '@hmfw/ant-design'

const theme = {
  token: {
    colorPrimary: '#00b96b',
    borderRadius: 2,
  },
}
<\/script>
`,L={class:"markdown-body"},V={__name:"config-provider",setup(p,{expose:d}){return d({frontmatter:{}}),(o,e)=>{const u=T("DemoBlock");return m(),f("div",L,[e[0]||(e[0]=t("h1",{id:"configprovider-全局配置",tabindex:"-1"},"ConfigProvider 全局配置",-1)),e[1]||(e[1]=t("p",null,"为组件提供统一的全局化配置。",-1)),e[2]||(e[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=t("ul",null,[t("li",null,"需要统一配置组件库的主题、国际化、组件尺寸等全局属性时"),t("li",null,"在应用根组件处包裹，影响所有子组件")],-1)),e[4]||(e[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=t("h3",{id:"主题配置",tabindex:"-1"},"主题配置",-1)),e[6]||(e[6]=t("p",null,"通过 theme 属性配置全局主题色。",-1)),n(u,{title:"主题配置",source:r(U)},{default:i(()=>[n($)]),_:1},8,["source"]),e[7]||(e[7]=t("h3",{id:"国际化",tabindex:"-1"},"国际化",-1)),e[8]||(e[8]=t("p",null,"通过 locale 属性配置国际化语言。",-1)),n(u,{title:"国际化",source:r(R)},{default:i(()=>[n(w)]),_:1},8,["source"]),e[9]||(e[9]=t("h3",{id:"全局尺寸",tabindex:"-1"},"全局尺寸",-1)),e[10]||(e[10]=t("p",null,"通过 componentSize 属性统一配置组件尺寸。",-1)),n(u,{title:"全局尺寸",source:r(E)},{default:i(()=>[n(A)]),_:1},8,["source"]),e[11]||(e[11]=B('<h2 id="api" tabindex="-1">API</h2><h3 id="configprovider-props" tabindex="-1">ConfigProvider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>theme</td><td>设置主题，包括主色等 Design Token</td><td><code>{ token?: { colorPrimary?: string, borderRadius?: number, ... } }</code></td><td>-</td></tr><tr><td>locale</td><td>语言包配置</td><td><code>zhCN | enUS</code></td><td><code>zhCN</code></td></tr><tr><td>prefixCls</td><td>设置统一样式前缀</td><td><code>string</code></td><td><code>&#39;hmfw&#39;</code></td></tr><tr><td>componentSize</td><td>设置 antd 组件大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>direction</td><td>设置布局方向</td><td><code>&#39;ltr&#39; | &#39;rtl&#39;</code></td><td><code>&#39;ltr&#39;</code></td></tr></tbody></table><h3 id="theme-token常用" tabindex="-1">Theme Token（常用）</h3><table><thead><tr><th>Token</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>colorPrimary</td><td>品牌主色</td><td><code>string</code></td><td><code>&#39;#1677ff&#39;</code></td></tr><tr><td>colorSuccess</td><td>成功色</td><td><code>string</code></td><td><code>&#39;#52c41a&#39;</code></td></tr><tr><td>colorWarning</td><td>警告色</td><td><code>string</code></td><td><code>&#39;#faad14&#39;</code></td></tr><tr><td>colorError</td><td>错误色</td><td><code>string</code></td><td><code>&#39;#ff4d4f&#39;</code></td></tr><tr><td>borderRadius</td><td>基础圆角</td><td><code>number</code></td><td><code>6</code></td></tr><tr><td>fontSize</td><td>基础字号</td><td><code>number</code></td><td><code>14</code></td></tr></tbody></table><h3 id="国际化语言包" tabindex="-1">国际化语言包</h3><table><thead><tr><th>语言包</th><th>说明</th></tr></thead><tbody><tr><td><code>zhCN</code></td><td>简体中文</td></tr><tr><td><code>enUS</code></td><td>英文</td></tr></tbody></table>',7))])}}};export{V as default};
