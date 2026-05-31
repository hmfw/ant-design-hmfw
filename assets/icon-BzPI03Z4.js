import{I as L,S as D,b as H,C as N,W as j,f as M,g as B,U as $,c as V,L as P,R as Q,P as R,M as T,E as W,D as F,e as G,H as h,i as w,h as A}from"./icons-ef0p77fA.js";import{S as I}from"./Space-ddxr_8jW.js";import{I as s}from"./Icon-BOmCTdv5.js";import{m as O,y as u,g as b,P as x,l as e,I as n,i as g,f as o,Q as q,N as Y,M as J,F as z,D as _,H as v,k as y,h as S,s as K,B as U,d as E,_ as X,E as Z,j as nn}from"./index-BZUMvgWw.js";import"./cls-S9IiI6wd.js";const C={loading:{keywords:["spinner","spin","waiting","progress"],category:"feedback",tags:["animation"]},close:{keywords:["x","cancel","exit","dismiss","remove"],category:"action"},check:{keywords:["tick","done","success","confirm","ok"],category:"feedback"},down:{keywords:["arrow","dropdown","expand","collapse"],category:"direction"},up:{keywords:["arrow","collapse","expand"],category:"direction"},left:{keywords:["arrow","back","previous"],category:"direction"},right:{keywords:["arrow","forward","next"],category:"direction"},search:{keywords:["find","magnifier","lookup","query"],category:"action"},plus:{keywords:["add","create","new","increase"],category:"action"},minus:{keywords:["subtract","remove","decrease","reduce"],category:"action"},warning:{keywords:["alert","caution","danger","exclamation"],category:"feedback"},"info-circle":{keywords:["information","help","about","details"],category:"feedback"},edit:{keywords:["pencil","modify","update","write"],category:"editor"},delete:{keywords:["trash","remove","bin","discard"],category:"action"},eye:{keywords:["view","show","visible","preview"],category:"action"},home:{keywords:["house","homepage","main","dashboard"],category:"navigation"},user:{keywords:["person","profile","account","avatar"],category:"general"},setting:{keywords:["config","preferences","options","gear"],category:"action"}};function tn(p){const a=p.toLowerCase().trim(),r=[];return Object.entries(C).forEach(([d,t])=>{let c=0;if(d.toLowerCase().includes(a)&&(c+=10),t.keywords.forEach(f=>{f.toLowerCase()===a?c+=5:f.toLowerCase().includes(a)&&(c+=3)}),t.category.toLowerCase().includes(a)&&(c+=2),t.tags&&t.tags.forEach(f=>{f.toLowerCase().includes(a)&&(c+=2)}),c>0){const f=d.split("-").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join("")+"Outlined",m=L[f];m&&r.push({name:d,component:m,category:t.category,keywords:t.keywords,score:c})}}),r.sort((d,t)=>t.score-d.score)}function en(p){const a=p.toLowerCase(),r=[];return Object.entries(C).forEach(([d,t])=>{if(t.category.toLowerCase()===a){const c=d.split("-").map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join("")+"Outlined",f=L[c];f&&r.push({name:d,component:f,category:t.category,keywords:t.keywords,score:0})}}),r}function on(){const p=new Set;return Object.values(C).forEach(a=>{p.add(a.category)}),Array.from(p).sort()}function sn(){const p=[];return Object.entries(C).forEach(([a,r])=>{const d=a.split("-").map(c=>c.charAt(0).toUpperCase()+c.slice(1)).join("")+"Outlined",t=L[d];t&&p.push({name:a,component:t,category:r.category,keywords:r.keywords,score:0})}),p}const an=O({__name:"IconBasic",setup(p){return(a,r)=>(u(),b(n(I),{size:16,wrap:""},{default:x(()=>[e(n(s),{component:n(D)},null,8,["component"]),e(n(s),{component:n(H)},null,8,["component"]),e(n(s),{component:n(N)},null,8,["component"]),e(n(s),{component:n(j)},null,8,["component"]),e(n(s),{component:n(M)},null,8,["component"]),e(n(s),{component:n(B)},null,8,["component"]),e(n(s),{component:n($)},null,8,["component"]),e(n(s),{component:n(V)},null,8,["component"]),e(n(s),{component:n(P)},null,8,["component"]),e(n(s),{component:n(Q)},null,8,["component"]),e(n(s),{component:n(R)},null,8,["component"]),e(n(s),{component:n(T)},null,8,["component"]),e(n(s),{component:n(W)},null,8,["component"]),e(n(s),{component:n(F)},null,8,["component"]),e(n(s),{component:n(G)},null,8,["component"]),e(n(s),{component:n(h)},null,8,["component"]),e(n(s),{component:n(w)},null,8,["component"]),e(n(s),{component:n(A)},null,8,["component"])]),_:1}))}}),cn=`<template>
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
  Icon, Space,
  SearchOutlined, CloseOutlined, CheckOutlined, WarningOutlined, InfoCircleOutlined,
  LoadingOutlined, UpOutlined, DownOutlined, LeftOutlined, RightOutlined,
  PlusOutlined, MinusOutlined, EditOutlined, DeleteOutlined, EyeOutlined,
  HomeOutlined, UserOutlined, SettingOutlined,
} from 'ant-design-hmfw'
<\/script>
`,ln={class:"icon-browser"},rn={class:"controls"},dn={class:"search-box"},pn={class:"category-filter"},un=["value"],mn={class:"stats"},fn={key:0,class:"search-term"},gn={class:"icon-grid"},yn=["onClick"],xn={class:"icon-display"},kn={class:"icon-name"},vn={class:"icon-category"},hn={class:"icon-keywords"},wn={key:0,class:"copied-indicator"},On={key:0,class:"empty-state"},In=O({__name:"IconBrowser",setup(p){const a=U(""),r=U("all"),d=U(""),t=E(()=>["all",...on()]),c=E(()=>{let m=[];return a.value.trim()?m=tn(a.value):r.value!=="all"?m=en(r.value):m=sn(),m}),f=m=>{const i=m.split("-").map(k=>k.charAt(0).toUpperCase()+k.slice(1)).join("")+"Outlined",l=`import { ${i} } from 'ant-design-hmfw'

<Icon :component="${i}" />`;navigator.clipboard.writeText(l).then(()=>{d.value=m,setTimeout(()=>{d.value=""},2e3)})};return(m,i)=>(u(),g("div",ln,[o("div",rn,[o("div",dn,[q(o("input",{"onUpdate:modelValue":i[0]||(i[0]=l=>a.value=l),type:"text",placeholder:"搜索图标... (如: home, search, arrow)",class:"search-input"},null,512),[[Y,a.value]]),i[2]||(i[2]=o("span",{class:"search-icon"},"🔍",-1))]),o("div",pn,[i[3]||(i[3]=o("label",null,"分类：",-1)),q(o("select",{"onUpdate:modelValue":i[1]||(i[1]=l=>r.value=l),class:"category-select"},[(u(!0),g(z,null,_(t.value,l=>(u(),g("option",{key:l,value:l},v(l==="all"?"全部":l),9,un))),128))],512),[[J,r.value]])])]),o("div",mn,[i[4]||(i[4]=y(" 找到 ",-1)),o("strong",null,v(c.value.length),1),i[5]||(i[5]=y(" 个图标 ",-1)),a.value?(u(),g("span",fn,' 搜索: "'+v(a.value)+'" ',1)):S("",!0)]),o("div",gn,[(u(!0),g(z,null,_(c.value,l=>(u(),g("div",{key:l.name,class:K(["icon-card",{copied:d.value===l.name}]),onClick:k=>f(l.name)},[o("div",xn,[e(n(s),{component:l.component,style:{fontSize:"32px"}},null,8,["component"])]),o("div",kn,v(l.name),1),o("div",vn,v(l.category),1),o("div",hn,[(u(!0),g(z,null,_(l.keywords.slice(0,3),k=>(u(),g("span",{key:k,class:"keyword-tag"},v(k),1))),128))]),d.value===l.name?(u(),g("div",wn," ✓ 已复制 ")):S("",!0)],10,yn))),128))]),c.value.length===0?(u(),g("div",On,[...i[6]||(i[6]=[o("div",{class:"empty-icon"},"🔍",-1),o("div",{class:"empty-text"},"未找到匹配的图标",-1),o("div",{class:"empty-hint"},"尝试其他关键词或选择不同的分类",-1)])])):S("",!0)]))}}),bn=X(In,[["__scopeId","data-v-8035b003"]]),Cn=`<script setup lang="ts">
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
  const componentName = iconName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
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
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category === 'all' ? '全部' : category }}
          </option>
        </select>
      </div>
    </div>

    <!-- 结果统计 -->
    <div class="stats">
      找到 <strong>{{ filteredIcons.length }}</strong> 个图标
      <span v-if="searchQuery" class="search-term">
        搜索: "{{ searchQuery }}"
      </span>
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
        <div class="icon-name">{{ icon.name }}</div>
        <div class="icon-category">{{ icon.category }}</div>
        <div class="icon-keywords">
          <span
            v-for="keyword in icon.keywords.slice(0, 3)"
            :key="keyword"
            class="keyword-tag"
          >
            {{ keyword }}
          </span>
        </div>
        <div v-if="copiedIcon === icon.name" class="copied-indicator">
          ✓ 已复制
        </div>
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
`,zn=O({__name:"IconColor",setup(p){return(a,r)=>(u(),b(n(I),{size:16},{default:x(()=>[e(n(s),{component:n(w),style:{"font-size":"24px",color:"#1677ff"}},null,8,["component"]),e(n(s),{component:n(w),style:{"font-size":"24px",color:"#52c41a"}},null,8,["component"]),e(n(s),{component:n(w),style:{"font-size":"24px",color:"#faad14"}},null,8,["component"]),e(n(s),{component:n(w),style:{"font-size":"24px",color:"#ff4d4f"}},null,8,["component"]),e(n(s),{component:n(w),style:{"font-size":"24px",color:"#722ed1"}},null,8,["component"])]),_:1}))}}),_n=`<template>
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
`,Sn=O({__name:"IconSize",setup(p){return(a,r)=>(u(),b(n(I),{size:16,align:"center"},{default:x(()=>[e(n(s),{component:n(h),style:{"font-size":"12px"}},null,8,["component"]),e(n(s),{component:n(h),style:{"font-size":"16px"}},null,8,["component"]),e(n(s),{component:n(h),style:{"font-size":"24px"}},null,8,["component"]),e(n(s),{component:n(h),style:{"font-size":"32px"}},null,8,["component"]),e(n(s),{component:n(h),style:{"font-size":"48px"}},null,8,["component"])]),_:1}))}}),Un=`<template>
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
`,Ln=O({__name:"IconSpin",setup(p){return(a,r)=>(u(),b(n(I),{size:16},{default:x(()=>[e(n(s),{component:n(B),style:{"font-size":"24px"},spin:""},null,8,["component"]),e(n(s),{component:n(A),style:{"font-size":"24px"},spin:""},null,8,["component"])]),_:1}))}}),qn=`<template>
  <Space :size="16">
    <Icon :component="LoadingOutlined" style="font-size: 24px" spin />
    <Icon :component="SettingOutlined" style="font-size: 24px" spin />
  </Space>
</template>

<script setup lang="ts">
import { Icon, Space, LoadingOutlined, SettingOutlined } from 'ant-design-hmfw'
<\/script>
`,En={class:"markdown-body"},jn={__name:"icon",setup(p,{expose:a}){return a({frontmatter:{}}),(d,t)=>{const c=Z("DemoBlock");return u(),g("div",En,[t[0]||(t[0]=o("h1",{id:"icon-",tabindex:"-1"},"Icon 图标",-1)),t[1]||(t[1]=o("p",null,"语义化的矢量图形，用于展示常用的操作和状态。",-1)),t[2]||(t[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=o("ul",null,[o("li",null,"需要展示操作图标时"),o("li",null,"需要展示状态图标时"),o("li",null,"需要展示品牌图标时")],-1)),t[4]||(t[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=o("h3",{id:"-2",tabindex:"-1"},"图标浏览器",-1)),t[6]||(t[6]=o("p",null,"浏览所有内置图标，支持搜索和分类过滤。点击图标可复制代码。",-1)),e(c,{title:"图标浏览器",source:n(Cn)},{default:x(()=>[e(bn)]),_:1},8,["source"]),t[7]||(t[7]=o("h3",{id:"-3",tabindex:"-1"},"基础用法",-1)),t[8]||(t[8]=o("p",null,"展示内置的图标类型。",-1)),e(c,{title:"基础用法",source:n(cn)},{default:x(()=>[e(an)]),_:1},8,["source"]),t[9]||(t[9]=o("h3",{id:"-4",tabindex:"-1"},"图标尺寸",-1)),t[10]||(t[10]=o("p",null,[y("通过 "),o("code",null,'style="font-size: Npx"'),y(" 控制图标大小（图标使用 "),o("code",null,"1em"),y(" 跟随字体大小）。")],-1)),e(c,{title:"图标尺寸",source:n(Un)},{default:x(()=>[e(Sn)]),_:1},8,["source"]),t[11]||(t[11]=o("h3",{id:"-5",tabindex:"-1"},"图标颜色",-1)),t[12]||(t[12]=o("p",null,[y("通过 "),o("code",null,'style="color: #xxx"'),y(" 控制图标颜色（图标使用 "),o("code",null,"currentColor"),y(" 继承文字颜色）。")],-1)),e(c,{title:"图标颜色",source:n(_n)},{default:x(()=>[e(zn)]),_:1},8,["source"]),t[13]||(t[13]=o("h3",{id:"-6",tabindex:"-1"},"旋转动画",-1)),t[14]||(t[14]=o("p",null,[y("通过 "),o("code",null,"spin"),y(" 属性让图标旋转。")],-1)),e(c,{title:"旋转动画",source:n(qn)},{default:x(()=>[e(Ln)]),_:1},8,["source"]),t[15]||(t[15]=nn(`<h2 id="api" tabindex="-1">API</h2><h3 id="icon-props" tabindex="-1">Icon Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>component</td><td>图标组件（SVG 函数式组件）</td><td><code>IconComponent</code></td><td>-</td></tr><tr><td>spin</td><td>是否旋转</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>rotate</td><td>旋转角度（deg）</td><td><code>number</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式（可用于设置 <code>font-size</code>、<code>color</code>）</td><td><code>string | CSSProperties</code></td><td>-</td></tr><tr><td>class</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="-7" tabindex="-1">内置图标</h3><table><thead><tr><th>导出名</th><th>说明</th></tr></thead><tbody><tr><td><code>SearchOutlined</code></td><td>搜索</td></tr><tr><td><code>CloseOutlined</code></td><td>关闭</td></tr><tr><td><code>CheckOutlined</code></td><td>勾选</td></tr><tr><td><code>WarningOutlined</code></td><td>警告</td></tr><tr><td><code>InfoCircleOutlined</code></td><td>信息</td></tr><tr><td><code>LoadingOutlined</code></td><td>加载中</td></tr><tr><td><code>UpOutlined</code></td><td>向上</td></tr><tr><td><code>DownOutlined</code></td><td>向下</td></tr><tr><td><code>LeftOutlined</code></td><td>向左</td></tr><tr><td><code>RightOutlined</code></td><td>向右</td></tr><tr><td><code>PlusOutlined</code></td><td>加号</td></tr><tr><td><code>MinusOutlined</code></td><td>减号</td></tr><tr><td><code>EditOutlined</code></td><td>编辑</td></tr><tr><td><code>DeleteOutlined</code></td><td>删除</td></tr><tr><td><code>EyeOutlined</code></td><td>查看</td></tr><tr><td><code>HomeOutlined</code></td><td>首页</td></tr><tr><td><code>UserOutlined</code></td><td>用户</td></tr><tr><td><code>SettingOutlined</code></td><td>设置</td></tr></tbody></table><h3 id="-8" tabindex="-1">自定义图标</h3><p>实现 <code>IconComponent</code> 类型（<code>FunctionalComponent&lt;SVGAttributes&gt;</code>）即可传入任意 SVG 图标：</p><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> IconComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-hmfw&#39;</span>

<span class="token keyword">const</span> MyIcon<span class="token operator">:</span> <span class="token function-variable function">IconComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 24 24<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1em<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1em<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentColor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>
</code></pre><pre class="language-vue"><code class="language-vue">&lt;Icon :component=&quot;MyIcon&quot; /&gt;
</code></pre>`,9))])}}};export{jn as default};
