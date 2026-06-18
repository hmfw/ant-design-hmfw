import{S as I}from"./Space-Q7SAsP7p.js";import{I as s}from"./Icon-B3Sy0DYw.js";import{S as B}from"./SearchOutlined-CB5lqf3j.js";import{C as q}from"./CloseOutlined-IFElrYRj.js";import{C as E}from"./CheckOutlined-CUmF_27O.js";import{iX as F,jl as R,jp as H,jn as V,jm as M}from"./utils-VSd4M4w0.js";import{I as N,E as P}from"./InfoCircleOutlined-DI5uvwQZ.js";import{L as D}from"./LoadingOutlined-D4bpgc9j.js";import{U as $}from"./UpOutlined-WMhYm-4q.js";import{D as j}from"./DownOutlined-CDkzdvy5.js";import{L as G}from"./LeftOutlined-4DgjoKfH.js";import{R as Q}from"./RightOutlined-Dj0MXUzR.js";import{P as T}from"./PlusOutlined-DxN3R3DG.js";import{M as W}from"./MinusOutlined-PaXvPsln.js";import{D as Y}from"./DeleteOutlined-q0Duyry0.js";import{E as Z}from"./EyeOutlined-C-4cl64m.js";import{H as x}from"./HomeOutlined-ilJuhf0S.js";import{U as O}from"./UserOutlined-DlsmcKEg.js";import{S as L}from"./SettingOutlined-BvPqnYB_.js";import{o as h,A as l,i as b,R as m,n as t,K as n,k as i,h as e,S as _,P as J,O as K,F as w,G as C,J as g,m as u,j as S,u as X,E as z,f as U,_ as nn,H as tn,l as en}from"./index-DJdGgqDu.js";import"./cls-S9IiI6wd.js";import"./AppleOutlined-DEQHr0TQ.js";import"./PictureOutlined-DfwiRpNV.js";import"./CloseCircleFilled-DwuEqd_1.js";import"./CloseCircleOutlined-D9gAqxc5.js";import"./DownloadOutlined-8vRULAy3.js";import"./ExclamationCircleFilled-BHpRoHQB.js";import"./InfoCircleFilled-Ca97aSXN.js";import"./ZoomOutOutlined-DJ_kibHv.js";import"./WarningFilled-C6CJv73F.js";const on=h({__name:"IconBasic",setup(y){return(c,r)=>(l(),b(n(I),{size:16,wrap:""},{default:m(()=>[t(n(s),{component:n(B)},null,8,["component"]),t(n(s),{component:n(q)},null,8,["component"]),t(n(s),{component:n(E)},null,8,["component"]),t(n(s),{component:n(F)},null,8,["component"]),t(n(s),{component:n(N)},null,8,["component"]),t(n(s),{component:n(D)},null,8,["component"]),t(n(s),{component:n($)},null,8,["component"]),t(n(s),{component:n(j)},null,8,["component"]),t(n(s),{component:n(G)},null,8,["component"]),t(n(s),{component:n(Q)},null,8,["component"]),t(n(s),{component:n(T)},null,8,["component"]),t(n(s),{component:n(W)},null,8,["component"]),t(n(s),{component:n(P)},null,8,["component"]),t(n(s),{component:n(Y)},null,8,["component"]),t(n(s),{component:n(Z)},null,8,["component"]),t(n(s),{component:n(x)},null,8,["component"]),t(n(s),{component:n(O)},null,8,["component"]),t(n(s),{component:n(L)},null,8,["component"])]),_:1}))}}),sn=`<template>
  <Space :size="16" wrap>
    <Icon :component="SearchOutlined" />
    <Icon :component="CloseOutlined" />
    <Icon :component="CheckOutlined" />
    <Icon :component="WarningOutlined" />
    <Icon :component="InfoCircleOutlined" />
    <Icon :component="LoadingOutlined" />
    <Icon :component="UpOutlined" />
    <Icon :component="DownOutlined" />
    <Icon :component="LeftOutlined" />
    <Icon :component="RightOutlined" />
    <Icon :component="PlusOutlined" />
    <Icon :component="MinusOutlined" />
    <Icon :component="EditOutlined" />
    <Icon :component="DeleteOutlined" />
    <Icon :component="EyeOutlined" />
    <Icon :component="HomeOutlined" />
    <Icon :component="UserOutlined" />
    <Icon :component="SettingOutlined" />
  </Space>
</template>

<script setup lang="ts">
import {
  Icon,
  Space,
  SearchOutlined,
  CloseOutlined,
  CheckOutlined,
  WarningOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
  UpOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  PlusOutlined,
  MinusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
} from 'ant-design-hmfw'
<\/script>
`,an={class:"icon-browser"},pn={class:"controls"},ln={class:"search-box"},cn={class:"category-filter"},un=["value"],rn={class:"stats"},dn={key:0,class:"search-term"},mn={class:"icon-grid"},kn=["onClick"],fn={class:"icon-display"},gn={class:"icon-name"},xn={class:"icon-category"},On={class:"icon-keywords"},yn={key:0,class:"copied-indicator"},vn={key:0,class:"empty-state"},hn=h({__name:"IconBrowser",setup(y){const c=z(""),r=z("all"),v=z(""),o=U(()=>["all",...R()]),d=U(()=>{let k=[];return c.value.trim()?k=H(c.value):r.value!=="all"?k=V(r.value):k=M(),k}),A=k=>{const p=k.split("-").map(f=>f.charAt(0).toUpperCase()+f.slice(1)).join("")+"Outlined",a=`import { ${p} } from 'ant-design-hmfw'

<Icon :component="${p}" />`;navigator.clipboard.writeText(a).then(()=>{v.value=k,setTimeout(()=>{v.value=""},2e3)})};return(k,p)=>(l(),i("div",an,[e("div",pn,[e("div",ln,[_(e("input",{"onUpdate:modelValue":p[0]||(p[0]=a=>c.value=a),type:"text",placeholder:"搜索图标... (如: home, search, arrow)",class:"search-input"},null,512),[[J,c.value]]),p[2]||(p[2]=e("span",{class:"search-icon"},"🔍",-1))]),e("div",cn,[p[3]||(p[3]=e("label",null,"分类：",-1)),_(e("select",{"onUpdate:modelValue":p[1]||(p[1]=a=>r.value=a),class:"category-select"},[(l(!0),i(w,null,C(o.value,a=>(l(),i("option",{key:a,value:a},g(a==="all"?"全部":a),9,un))),128))],512),[[K,r.value]])])]),e("div",rn,[p[4]||(p[4]=u(" 找到 ",-1)),e("strong",null,g(d.value.length),1),p[5]||(p[5]=u(" 个图标 ",-1)),c.value?(l(),i("span",dn,' 搜索: "'+g(c.value)+'" ',1)):S("",!0)]),e("div",mn,[(l(!0),i(w,null,C(d.value,a=>(l(),i("div",{key:a.name,class:X(["icon-card",{copied:v.value===a.name}]),onClick:f=>A(a.name)},[e("div",fn,[t(n(s),{component:a.component,style:{fontSize:"32px"}},null,8,["component"])]),e("div",gn,g(a.name),1),e("div",xn,g(a.category),1),e("div",On,[(l(!0),i(w,null,C(a.keywords.slice(0,3),f=>(l(),i("span",{key:f,class:"keyword-tag"},g(f),1))),128))]),v.value===a.name?(l(),i("div",yn,"✓ 已复制")):S("",!0)],10,kn))),128))]),d.value.length===0?(l(),i("div",vn,[...p[6]||(p[6]=[e("div",{class:"empty-icon"},"🔍",-1),e("div",{class:"empty-text"},"未找到匹配的图标",-1),e("div",{class:"empty-hint"},"尝试其他关键词或选择不同的分类",-1)])])):S("",!0)]))}}),In=nn(hn,[["__scopeId","data-v-5b3249cd"]]),bn=`<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon, searchIcons, getIconsByCategory, getAllCategories, getAllIcons } from 'ant-design-hmfw'
import type { IconSearchResult } from 'ant-design-hmfw'

const searchQuery = ref('')
const selectedCategory = ref('all')
const copiedIcon = ref('')

const categories = computed(() => ['all', ...getAllCategories()])

const filteredIcons = computed(() => {
  let results: IconSearchResult[] = []

  if (searchQuery.value.trim()) {
    // 搜索模式
    results = searchIcons(searchQuery.value)
  } else if (selectedCategory.value !== 'all') {
    // 分类过滤模式
    results = getIconsByCategory(selectedCategory.value)
  } else {
    // 显示所有图标
    results = getAllIcons()
  }

  return results
})

const copyCode = (iconName: string) => {
  const componentName =
    iconName
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'Outlined'

  const code = \`import { \${componentName} } from 'ant-design-hmfw'\\n\\n<Icon :component="\${componentName}" />\`

  navigator.clipboard.writeText(code).then(() => {
    copiedIcon.value = iconName
    setTimeout(() => {
      copiedIcon.value = ''
    }, 2000)
  })
}
<\/script>

<template>
  <div class="icon-browser">
    <!-- 搜索和过滤栏 -->
    <div class="controls">
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索图标... (如: home, search, arrow)"
          class="search-input"
        />
        <span class="search-icon">🔍</span>
      </div>

      <div class="category-filter">
        <label>分类：</label>
        <select v-model="selectedCategory" class="category-select">
          <option v-for="category in categories" :key="category" :value="category">
            {{ category === 'all' ? '全部' : category }}
          </option>
        </select>
      </div>
    </div>

    <!-- 结果统计 -->
    <div class="stats">
      找到 <strong>{{ filteredIcons.length }}</strong> 个图标
      <span v-if="searchQuery" class="search-term"> 搜索: "{{ searchQuery }}" </span>
    </div>

    <!-- 图标网格 -->
    <div class="icon-grid">
      <div
        v-for="icon in filteredIcons"
        :key="icon.name"
        class="icon-card"
        :class="{ copied: copiedIcon === icon.name }"
        @click="copyCode(icon.name)"
      >
        <div class="icon-display">
          <Icon :component="icon.component" :style="{ fontSize: '32px' }" />
        </div>
        <div class="icon-name">
          {{ icon.name }}
        </div>
        <div class="icon-category">
          {{ icon.category }}
        </div>
        <div class="icon-keywords">
          <span v-for="keyword in icon.keywords.slice(0, 3)" :key="keyword" class="keyword-tag">
            {{ keyword }}
          </span>
        </div>
        <div v-if="copiedIcon === icon.name" class="copied-indicator">✓ 已复制</div>
      </div>
    </div>

    <!-- 空状态 -->
    <div v-if="filteredIcons.length === 0" class="empty-state">
      <div class="empty-icon">🔍</div>
      <div class="empty-text">未找到匹配的图标</div>
      <div class="empty-hint">尝试其他关键词或选择不同的分类</div>
    </div>
  </div>
</template>

<style scoped>
.icon-browser {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.controls {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.search-box {
  position: relative;
  flex: 1;
  min-width: 300px;
}

.search-input {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
}

.search-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  opacity: 0.5;
}

.category-filter {
  display: flex;
  align-items: center;
  gap: 8px;
}

.category-select {
  padding: 8px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.category-select:hover {
  border-color: #1890ff;
}

.stats {
  margin-bottom: 16px;
  color: #666;
  font-size: 14px;
}

.search-term {
  color: #1890ff;
  margin-left: 8px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.icon-card {
  position: relative;
  padding: 20px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  background: #fff;
}

.icon-card:hover {
  border-color: #1890ff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.icon-card.copied {
  border-color: #52c41a;
  background: #f6ffed;
}

.icon-display {
  margin-bottom: 12px;
  color: #333;
}

.icon-name {
  font-size: 13px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}

.icon-category {
  font-size: 11px;
  color: #999;
  margin-bottom: 8px;
  text-transform: capitalize;
}

.icon-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
  min-height: 20px;
}

.keyword-tag {
  font-size: 10px;
  padding: 2px 6px;
  background: #f0f0f0;
  border-radius: 4px;
  color: #666;
}

.copied-indicator {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 12px;
  color: #52c41a;
  font-weight: 500;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.empty-text {
  font-size: 16px;
  margin-bottom: 8px;
  color: #666;
}

.empty-hint {
  font-size: 14px;
}
</style>
`,wn=h({__name:"IconColor",setup(y){return(c,r)=>(l(),b(n(I),{size:16},{default:m(()=>[t(n(s),{component:n(O),style:{"font-size":"24px",color:"#1677ff"}},null,8,["component"]),t(n(s),{component:n(O),style:{"font-size":"24px",color:"#52c41a"}},null,8,["component"]),t(n(s),{component:n(O),style:{"font-size":"24px",color:"#faad14"}},null,8,["component"]),t(n(s),{component:n(O),style:{"font-size":"24px",color:"#ff4d4f"}},null,8,["component"]),t(n(s),{component:n(O),style:{"font-size":"24px",color:"#722ed1"}},null,8,["component"])]),_:1}))}}),Cn=`<template>
  <Space :size="16">
    <Icon :component="UserOutlined" style="font-size: 24px; color: #1677ff" />
    <Icon :component="UserOutlined" style="font-size: 24px; color: #52c41a" />
    <Icon :component="UserOutlined" style="font-size: 24px; color: #faad14" />
    <Icon :component="UserOutlined" style="font-size: 24px; color: #ff4d4f" />
    <Icon :component="UserOutlined" style="font-size: 24px; color: #722ed1" />
  </Space>
</template>

<script setup lang="ts">
import { Icon, Space, UserOutlined } from 'ant-design-hmfw'
<\/script>
`,Sn=h({__name:"IconSize",setup(y){return(c,r)=>(l(),b(n(I),{size:16,align:"center"},{default:m(()=>[t(n(s),{component:n(x),style:{"font-size":"12px"}},null,8,["component"]),t(n(s),{component:n(x),style:{"font-size":"16px"}},null,8,["component"]),t(n(s),{component:n(x),style:{"font-size":"24px"}},null,8,["component"]),t(n(s),{component:n(x),style:{"font-size":"32px"}},null,8,["component"]),t(n(s),{component:n(x),style:{"font-size":"48px"}},null,8,["component"])]),_:1}))}}),zn=`<template>
  <Space :size="16" align="center">
    <Icon :component="HomeOutlined" style="font-size: 12px" />
    <Icon :component="HomeOutlined" style="font-size: 16px" />
    <Icon :component="HomeOutlined" style="font-size: 24px" />
    <Icon :component="HomeOutlined" style="font-size: 32px" />
    <Icon :component="HomeOutlined" style="font-size: 48px" />
  </Space>
</template>

<script setup lang="ts">
import { Icon, Space, HomeOutlined } from 'ant-design-hmfw'
<\/script>
`,_n=h({__name:"IconSpin",setup(y){return(c,r)=>(l(),b(n(I),{size:16},{default:m(()=>[t(n(s),{component:n(D),style:{"font-size":"24px"},spin:""},null,8,["component"]),t(n(s),{component:n(L),style:{"font-size":"24px"},spin:""},null,8,["component"])]),_:1}))}}),Un=`<template>
  <Space :size="16">
    <Icon :component="LoadingOutlined" style="font-size: 24px" spin />
    <Icon :component="SettingOutlined" style="font-size: 24px" spin />
  </Space>
</template>

<script setup lang="ts">
import { Icon, Space, LoadingOutlined, SettingOutlined } from 'ant-design-hmfw'
<\/script>
`,Dn={class:"markdown-body"},lt={__name:"icon",setup(y,{expose:c}){return c({frontmatter:{}}),(v,o)=>{const d=tn("DemoBlock");return l(),i("div",Dn,[o[0]||(o[0]=e("h1",{id:"icon-图标",tabindex:"-1"},"Icon 图标",-1)),o[1]||(o[1]=e("p",null,"语义化的矢量图形，用于展示常用的操作和状态。",-1)),o[2]||(o[2]=e("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),o[3]||(o[3]=e("ul",null,[e("li",null,"需要展示操作图标时"),e("li",null,"需要展示状态图标时"),e("li",null,"需要展示品牌图标时")],-1)),o[4]||(o[4]=e("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),o[5]||(o[5]=e("h3",{id:"图标浏览器",tabindex:"-1"},"图标浏览器",-1)),o[6]||(o[6]=e("p",null,"浏览所有内置图标，支持搜索和分类过滤。点击图标可复制代码。",-1)),t(d,{title:"图标浏览器",source:n(bn)},{default:m(()=>[t(In)]),_:1},8,["source"]),o[7]||(o[7]=e("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),o[8]||(o[8]=e("p",null,"展示内置的图标类型。",-1)),t(d,{title:"基础用法",source:n(sn)},{default:m(()=>[t(on)]),_:1},8,["source"]),o[9]||(o[9]=e("h3",{id:"图标尺寸",tabindex:"-1"},"图标尺寸",-1)),o[10]||(o[10]=e("p",null,[u("通过 "),e("code",null,'style="font-size: Npx"'),u(" 控制图标大小（图标使用 "),e("code",null,"1em"),u(" 跟随字体大小）。")],-1)),t(d,{title:"图标尺寸",source:n(zn)},{default:m(()=>[t(Sn)]),_:1},8,["source"]),o[11]||(o[11]=e("h3",{id:"图标颜色",tabindex:"-1"},"图标颜色",-1)),o[12]||(o[12]=e("p",null,[u("通过 "),e("code",null,'style="color: #xxx"'),u(" 控制图标颜色（图标使用 "),e("code",null,"currentColor"),u(" 继承文字颜色）。")],-1)),t(d,{title:"图标颜色",source:n(Cn)},{default:m(()=>[t(wn)]),_:1},8,["source"]),o[13]||(o[13]=e("h3",{id:"旋转动画",tabindex:"-1"},"旋转动画",-1)),o[14]||(o[14]=e("p",null,[u("通过 "),e("code",null,"spin"),u(" 属性让图标旋转。")],-1)),t(d,{title:"旋转动画",source:n(Un)},{default:m(()=>[t(_n)]),_:1},8,["source"]),o[15]||(o[15]=en(`<h2 id="api" tabindex="-1">API</h2><h3 id="icon-props" tabindex="-1">Icon Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>component</td><td>图标组件（SVG 函数式组件）</td><td><code>IconComponent</code></td><td>-</td></tr><tr><td>spin</td><td>是否旋转</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>rotate</td><td>旋转角度（deg）</td><td><code>number</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式（可用于设置 <code>font-size</code>、<code>color</code>）</td><td><code>string | CSSProperties</code></td><td>-</td></tr><tr><td>class</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="内置图标" tabindex="-1">内置图标</h3><p>图标库已同步 Ant Design v6，提供 <strong>681 个高质量图标</strong>（447 个 Outlined + 234 个 Filled），覆盖反馈、操作、方向、导航、文件、编辑、品牌等全部分类。</p><p>完整列表请通过上方「图标浏览器」查看，或导入后直接使用，例如：</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span>
  <span class="token comment">// 反馈</span>
  CheckOutlined<span class="token punctuation">,</span>
  WarningOutlined<span class="token punctuation">,</span>
  InfoCircleOutlined<span class="token punctuation">,</span>
  LoadingOutlined<span class="token punctuation">,</span>
  CheckCircleFilled<span class="token punctuation">,</span>
  CloseCircleFilled<span class="token punctuation">,</span>
  ExclamationCircleFilled<span class="token punctuation">,</span>
  InfoCircleFilled<span class="token punctuation">,</span>
  QuestionCircleOutlined<span class="token punctuation">,</span>

  <span class="token comment">// 操作</span>
  SearchOutlined<span class="token punctuation">,</span>
  PlusOutlined<span class="token punctuation">,</span>
  MinusOutlined<span class="token punctuation">,</span>
  EditOutlined<span class="token punctuation">,</span>
  DeleteOutlined<span class="token punctuation">,</span>
  EyeOutlined<span class="token punctuation">,</span>
  SettingOutlined<span class="token punctuation">,</span>
  CopyOutlined<span class="token punctuation">,</span>
  ReloadOutlined<span class="token punctuation">,</span>
  SyncOutlined<span class="token punctuation">,</span>
  SaveOutlined<span class="token punctuation">,</span>
  ShareAltOutlined<span class="token punctuation">,</span>
  DownloadOutlined<span class="token punctuation">,</span>
  FilterOutlined<span class="token punctuation">,</span>

  <span class="token comment">// 方向</span>
  UpOutlined<span class="token punctuation">,</span>
  DownOutlined<span class="token punctuation">,</span>
  LeftOutlined<span class="token punctuation">,</span>
  RightOutlined<span class="token punctuation">,</span>
  ArrowUpOutlined<span class="token punctuation">,</span>
  ArrowDownOutlined<span class="token punctuation">,</span>
  ArrowLeftOutlined<span class="token punctuation">,</span>
  ArrowRightOutlined<span class="token punctuation">,</span>
  CaretUpOutlined<span class="token punctuation">,</span>
  CaretDownOutlined<span class="token punctuation">,</span>
  CaretLeftOutlined<span class="token punctuation">,</span>
  CaretRightOutlined<span class="token punctuation">,</span>
  DoubleLeftOutlined<span class="token punctuation">,</span>
  DoubleRightOutlined<span class="token punctuation">,</span>
  SwapOutlined<span class="token punctuation">,</span>
  FullscreenOutlined<span class="token punctuation">,</span>
  FullscreenExitOutlined<span class="token punctuation">,</span>
  ZoomInOutlined<span class="token punctuation">,</span>
  ZoomOutOutlined<span class="token punctuation">,</span>
  RotateLeftOutlined<span class="token punctuation">,</span>
  RotateRightOutlined<span class="token punctuation">,</span>

  <span class="token comment">// 导航</span>
  HomeOutlined<span class="token punctuation">,</span>
  MenuOutlined<span class="token punctuation">,</span>
  BarsOutlined<span class="token punctuation">,</span>
  EllipsisOutlined<span class="token punctuation">,</span>
  LoginOutlined<span class="token punctuation">,</span>
  LogoutOutlined<span class="token punctuation">,</span>
  GlobalOutlined<span class="token punctuation">,</span>

  <span class="token comment">// 通用</span>
  UserOutlined<span class="token punctuation">,</span>
  BellOutlined<span class="token punctuation">,</span>
  BellFilled<span class="token punctuation">,</span>
  StarOutlined<span class="token punctuation">,</span>
  StarFilled<span class="token punctuation">,</span>
  HeartOutlined<span class="token punctuation">,</span>
  HeartFilled<span class="token punctuation">,</span>
  LockOutlined<span class="token punctuation">,</span>
  UnlockOutlined<span class="token punctuation">,</span>
  CloudOutlined<span class="token punctuation">,</span>
  LinkOutlined<span class="token punctuation">,</span>
  MessageOutlined<span class="token punctuation">,</span>
  MailOutlined<span class="token punctuation">,</span>
  PhoneOutlined<span class="token punctuation">,</span>
  CalendarOutlined<span class="token punctuation">,</span>
  ClockCircleOutlined<span class="token punctuation">,</span>

  <span class="token comment">// 文件</span>
  FolderOutlined<span class="token punctuation">,</span>
  FolderOpenOutlined<span class="token punctuation">,</span>
  FileOutlined<span class="token punctuation">,</span>
  PictureOutlined<span class="token punctuation">,</span>
  VideoCameraOutlined<span class="token punctuation">,</span>

  <span class="token comment">// 品牌</span>
  AndroidOutlined<span class="token punctuation">,</span>
  AppleOutlined<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-hmfw&#39;</span>
</code></pre><h3 id="自定义图标" tabindex="-1">自定义图标</h3><h4 id="方案一内联函数式组件" tabindex="-1">方案一：内联函数式组件</h4><p>实现 <code>IconComponent</code> 类型（<code>FunctionalComponent&lt;SVGAttributes&gt;</code>）即可传入任意 SVG 图标：</p><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> IconComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-hmfw&#39;</span>

<span class="token keyword">const</span> MyIcon<span class="token operator">:</span> <span class="token function-variable function">IconComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 24 24<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1em<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1em<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentColor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>
</code></pre><pre class="language-vue"><code class="language-vue">&lt;Icon :component=&quot;MyIcon&quot; /&gt;
</code></pre><h4 id="方案二脚本批量生成" tabindex="-1">方案二：脚本批量生成</h4><p>如果你有大量自定义 SVG（品牌 Logo、业务图标），推荐通过脚本批量生成图标组件文件。 仓库 <code>scripts/examples/build-custom-icons.ts</code> 提供了完整的脚本示例，使用方法见 <code>scripts/examples/README.md</code>。</p><p>简要流程：</p><ol><li>复制 <code>scripts/examples/build-custom-icons.ts</code> 到你的项目并改写顶部配置</li><li>把 SVG 文件（kebab-case 命名）放入 <code>SVG_DIR</code></li><li>运行 <code>npx tsx scripts/build-my-icons.ts</code>，生成的图标组件可直接 <code>import</code> 使用</li></ol>`,16))])}}};export{lt as default};
