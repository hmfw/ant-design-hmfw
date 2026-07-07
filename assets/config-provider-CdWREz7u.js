import{B as i}from"./Button-D7tvIoj2.js";import{d as u,o as p,b as f,F as x,f as o,c as n,e as r,G as v,w as l,g as a,H as g,A as h,r as y,q as C,h as b,i as P}from"./index-cgVI-orz.js";import{I as S}from"./Input-D_nx9wMp.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-BnULcwLn.js";import"./CloseOutlined-H_Tga8k8.js";import"./EyeOutlined-DUMo4AyN.js";import"./SearchOutlined-D1bsU5bV.js";const k={locale:"en-US",common:{confirm:"Confirm",cancel:"Cancel",ok:"OK",close:"Close",loading:"Loading",noData:"No data",search:"Search",reset:"Reset",submit:"Submit",expand:"Expand",collapse:"Collapse",selectAll:"Select all",clearAll:"Clear all"},Button:{loading:"Loading"},Input:{placeholder:"Please input",clearTitle:"Clear"},Select:{placeholder:"Please select",notFoundContent:"Not found",loading:"Loading"},DatePicker:{placeholder:"Select date",yearPlaceholder:"Select year",monthPlaceholder:"Select month",rangePlaceholder:["Start date","End date"],today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",previousMonth:"Previous month",nextMonth:"Next month",previousYear:"Last year",nextYear:"Next year",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century",weekdays:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},TimePicker:{placeholder:"Select time"},Pagination:{itemsPerPage:"/ page",jumpTo:"Go to",jumpToConfirm:"confirm",page:"",prevPage:"Previous page",nextPage:"Next page",prevFive:"Previous 5 pages",nextFive:"Next 5 pages",totalItems:s=>`Total ${s} items`},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Transfer:{searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectAll:"Select all data",deselectAll:"Deselect all data",selectCurrent:"Select current page",selectInvert:"Invert current page",removeAll:"Remove all data",removeCurrent:"Remove current page",notFoundContent:"The list is empty"},Typography:{copy:"Copy",copied:"Copied",expand:"Expand",collapse:"Collapse"},Calendar:{month:"Month",year:"Year",today:"Today",selectDate:"Select date",selectMonth:"Select month"}},T={style:{display:"flex",gap:"12px","margin-bottom":"16px"}},B=u({__name:"ConfigProviderLocale",setup(s){const d=y(v);return(c,e)=>(p(),f(x,null,[o("div",T,[n(r(i),{onClick:e[0]||(e[0]=t=>d.value=r(v))},{default:l(()=>[...e[2]||(e[2]=[a("中文",-1)])]),_:1}),n(r(i),{onClick:e[1]||(e[1]=t=>d.value=r(k))},{default:l(()=>[...e[3]||(e[3]=[a("English",-1)])]),_:1})]),n(r(g),{locale:d.value},{default:l(()=>[o("p",null,"当前语言："+h(d.value.locale),1)]),_:1},8,["locale"])],64))}}),N=`<template>
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
`,w={style:{display:"flex",gap:"12px","margin-bottom":"16px"}},z={style:{display:"flex","flex-direction":"column",gap:"12px"}},D=u({__name:"ConfigProviderSize",setup(s){const d=y("middle");return(c,e)=>(p(),f(x,null,[o("div",w,[n(r(i),{onClick:e[0]||(e[0]=t=>d.value="small")},{default:l(()=>[...e[3]||(e[3]=[a("小",-1)])]),_:1}),n(r(i),{onClick:e[1]||(e[1]=t=>d.value="middle")},{default:l(()=>[...e[4]||(e[4]=[a("中",-1)])]),_:1}),n(r(i),{onClick:e[2]||(e[2]=t=>d.value="large")},{default:l(()=>[...e[5]||(e[5]=[a("大",-1)])]),_:1})]),n(r(g),{"component-size":d.value},{default:l(()=>[o("div",z,[n(r(S),{placeholder:"输入框"}),n(r(i),null,{default:l(()=>[...e[6]||(e[6]=[a("按钮",-1)])]),_:1})])]),_:1},8,["component-size"])],64))}}),A=`<template>
  <div style="display: flex; gap: 12px; margin-bottom: 16px">
    <Button @click="size = 'small'">小</Button>
    <Button @click="size = 'middle'">中</Button>
    <Button @click="size = 'large'">大</Button>
  </div>
  <ConfigProvider :component-size="size">
    <div style="display: flex; flex-direction: column; gap: 12px">
      <Input placeholder="输入框" />
      <Button>按钮</Button>
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ConfigProvider, Button, Input } from '@hmfw/ant-design'

const size = ref<'small' | 'middle' | 'large'>('middle')
<\/script>
`,F={style:{display:"flex","flex-direction":"column",gap:"12px"}},$=u({__name:"ConfigProviderTheme",setup(s){const d={token:{colorPrimary:"#00b96b",borderRadius:2}};return(c,e)=>(p(),C(r(g),{theme:d},{default:l(()=>[o("div",F,[n(r(i),{style:{background:"var(--hmfw-color-primary)",color:"white",border:"none",padding:"8px 16px","border-radius":"6px",cursor:"pointer"}},{default:l(()=>[...e[0]||(e[0]=[a(" 主色按钮 ",-1)])]),_:1}),e[1]||(e[1]=o("p",{style:{color:"var(--hmfw-color-primary)"}},"主色文字",-1))])]),_:1}))}}),E=`<template>
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
`,I={class:"markdown-body"},Y={__name:"config-provider",setup(s,{expose:d}){return d({frontmatter:{}}),(e,t)=>{const m=b("DemoBlock");return p(),f("div",I,[t[0]||(t[0]=o("h1",{id:"configprovider-全局配置",tabindex:"-1"},"ConfigProvider 全局配置",-1)),t[1]||(t[1]=o("p",null,"为组件提供统一的全局化配置。",-1)),t[2]||(t[2]=o("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=o("ul",null,[o("li",null,"需要统一配置组件库的主题、国际化、组件尺寸等全局属性时"),o("li",null,"在应用根组件处包裹，影响所有子组件")],-1)),t[4]||(t[4]=o("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=o("h3",{id:"主题配置",tabindex:"-1"},"主题配置",-1)),t[6]||(t[6]=o("p",null,"通过 theme 属性配置全局主题色。",-1)),n(m,{title:"主题配置",source:r(E)},{default:l(()=>[n($)]),_:1},8,["source"]),t[7]||(t[7]=o("h3",{id:"国际化",tabindex:"-1"},"国际化",-1)),t[8]||(t[8]=o("p",null,"通过 locale 属性配置国际化语言。",-1)),n(m,{title:"国际化",source:r(N)},{default:l(()=>[n(B)]),_:1},8,["source"]),t[9]||(t[9]=o("h3",{id:"全局尺寸",tabindex:"-1"},"全局尺寸",-1)),t[10]||(t[10]=o("p",null,"通过 componentSize 属性统一配置组件尺寸。",-1)),n(m,{title:"全局尺寸",source:r(A)},{default:l(()=>[n(D)]),_:1},8,["source"]),t[11]||(t[11]=P('<h2 id="api" tabindex="-1">API</h2><h3 id="configprovider-props" tabindex="-1">ConfigProvider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>theme</td><td>设置主题，包括主色等 Design Token</td><td><code>{ token?: { colorPrimary?: string, borderRadius?: number, ... } }</code></td><td>-</td></tr><tr><td>locale</td><td>语言包配置</td><td><code>zhCN | enUS</code></td><td><code>zhCN</code></td></tr><tr><td>prefixCls</td><td>设置统一样式前缀</td><td><code>string</code></td><td><code>&#39;hmfw&#39;</code></td></tr><tr><td>componentSize</td><td>设置 antd 组件大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>direction</td><td>设置布局方向</td><td><code>&#39;ltr&#39; | &#39;rtl&#39;</code></td><td><code>&#39;ltr&#39;</code></td></tr></tbody></table><h3 id="theme-token常用" tabindex="-1">Theme Token（常用）</h3><table><thead><tr><th>Token</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>colorPrimary</td><td>品牌主色</td><td><code>string</code></td><td><code>&#39;#1677ff&#39;</code></td></tr><tr><td>colorSuccess</td><td>成功色</td><td><code>string</code></td><td><code>&#39;#52c41a&#39;</code></td></tr><tr><td>colorWarning</td><td>警告色</td><td><code>string</code></td><td><code>&#39;#faad14&#39;</code></td></tr><tr><td>colorError</td><td>错误色</td><td><code>string</code></td><td><code>&#39;#ff4d4f&#39;</code></td></tr><tr><td>borderRadius</td><td>基础圆角</td><td><code>number</code></td><td><code>6</code></td></tr><tr><td>fontSize</td><td>基础字号</td><td><code>number</code></td><td><code>14</code></td></tr></tbody></table><h3 id="国际化语言包" tabindex="-1">国际化语言包</h3><table><thead><tr><th>语言包</th><th>说明</th></tr></thead><tbody><tr><td><code>zhCN</code></td><td>简体中文</td></tr><tr><td><code>enUS</code></td><td>英文</td></tr></tbody></table>',7))])}}};export{Y as default};
