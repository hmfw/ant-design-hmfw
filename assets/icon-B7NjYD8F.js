import{S as N,d as H,b as L,W as E,l as $,m as q,U as A,e as M,L as V,R as P,P as Q,M as R,E as T,D as W,h as j,H as y,r as v,p as B}from"./icons-B7DG7jjo.js";import{S as I}from"./Space-DM35qXYa.js";import{I as s}from"./Icon-BgwCb1-e.js";import{m as O,y as l,g as b,P as m,l as t,I as n,i as p,f as e,Q as C,N as F,M as G,F as w,D as z,H as x,k as d,h as _,s as Y,B as S,d as U,_ as J,E as K,j as X}from"./index-B2-fWtt3.js";import{g as Z,s as nn,b as tn,a as en}from"./utils-DEyIOBKN.js";import"./cls-S9IiI6wd.js";const on=O({__name:"IconBasic",setup(k){return(i,r)=>(l(),b(n(I),{size:16,wrap:""},{default:m(()=>[t(n(s),{component:n(N)},null,8,["component"]),t(n(s),{component:n(H)},null,8,["component"]),t(n(s),{component:n(L)},null,8,["component"]),t(n(s),{component:n(E)},null,8,["component"]),t(n(s),{component:n($)},null,8,["component"]),t(n(s),{component:n(q)},null,8,["component"]),t(n(s),{component:n(A)},null,8,["component"]),t(n(s),{component:n(M)},null,8,["component"]),t(n(s),{component:n(V)},null,8,["component"]),t(n(s),{component:n(P)},null,8,["component"]),t(n(s),{component:n(Q)},null,8,["component"]),t(n(s),{component:n(R)},null,8,["component"]),t(n(s),{component:n(T)},null,8,["component"]),t(n(s),{component:n(W)},null,8,["component"]),t(n(s),{component:n(j)},null,8,["component"]),t(n(s),{component:n(y)},null,8,["component"]),t(n(s),{component:n(v)},null,8,["component"]),t(n(s),{component:n(B)},null,8,["component"])]),_:1}))}}),sn=`<template>
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
`,an={class:"icon-browser"},cn={class:"controls"},ln={class:"search-box"},pn={class:"category-filter"},dn=["value"],rn={class:"stats"},un={key:0,class:"search-term"},mn={class:"icon-grid"},fn=["onClick"],gn={class:"icon-display"},xn={class:"icon-name"},yn={class:"icon-category"},vn={class:"icon-keywords"},kn={key:0,class:"copied-indicator"},hn={key:0,class:"empty-state"},On=O({__name:"IconBrowser",setup(k){const i=S(""),r=S("all"),h=S(""),o=U(()=>["all",...Z()]),u=U(()=>{let f=[];return i.value.trim()?f=nn(i.value):r.value!=="all"?f=tn(r.value):f=en(),f}),D=f=>{const c=f.split("-").map(g=>g.charAt(0).toUpperCase()+g.slice(1)).join("")+"Outlined",a=`import { ${c} } from 'ant-design-hmfw'

<Icon :component="${c}" />`;navigator.clipboard.writeText(a).then(()=>{h.value=f,setTimeout(()=>{h.value=""},2e3)})};return(f,c)=>(l(),p("div",an,[e("div",cn,[e("div",ln,[C(e("input",{"onUpdate:modelValue":c[0]||(c[0]=a=>i.value=a),type:"text",placeholder:"搜索图标... (如: home, search, arrow)",class:"search-input"},null,512),[[F,i.value]]),c[2]||(c[2]=e("span",{class:"search-icon"},"🔍",-1))]),e("div",pn,[c[3]||(c[3]=e("label",null,"分类：",-1)),C(e("select",{"onUpdate:modelValue":c[1]||(c[1]=a=>r.value=a),class:"category-select"},[(l(!0),p(w,null,z(o.value,a=>(l(),p("option",{key:a,value:a},x(a==="all"?"全部":a),9,dn))),128))],512),[[G,r.value]])])]),e("div",rn,[c[4]||(c[4]=d(" 找到 ",-1)),e("strong",null,x(u.value.length),1),c[5]||(c[5]=d(" 个图标 ",-1)),i.value?(l(),p("span",un,' 搜索: "'+x(i.value)+'" ',1)):_("",!0)]),e("div",mn,[(l(!0),p(w,null,z(u.value,a=>(l(),p("div",{key:a.name,class:Y(["icon-card",{copied:h.value===a.name}]),onClick:g=>D(a.name)},[e("div",gn,[t(n(s),{component:a.component,style:{fontSize:"32px"}},null,8,["component"])]),e("div",xn,x(a.name),1),e("div",yn,x(a.category),1),e("div",vn,[(l(!0),p(w,null,z(a.keywords.slice(0,3),g=>(l(),p("span",{key:g,class:"keyword-tag"},x(g),1))),128))]),h.value===a.name?(l(),p("div",kn," ✓ 已复制 ")):_("",!0)],10,fn))),128))]),u.value.length===0?(l(),p("div",hn,[...c[6]||(c[6]=[e("div",{class:"empty-icon"},"🔍",-1),e("div",{class:"empty-text"},"未找到匹配的图标",-1),e("div",{class:"empty-hint"},"尝试其他关键词或选择不同的分类",-1)])])):_("",!0)]))}}),In=J(On,[["__scopeId","data-v-8035b003"]]),bn=`<script setup lang="ts">
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
`,wn=O({__name:"IconColor",setup(k){return(i,r)=>(l(),b(n(I),{size:16},{default:m(()=>[t(n(s),{component:n(v),style:{"font-size":"24px",color:"#1677ff"}},null,8,["component"]),t(n(s),{component:n(v),style:{"font-size":"24px",color:"#52c41a"}},null,8,["component"]),t(n(s),{component:n(v),style:{"font-size":"24px",color:"#faad14"}},null,8,["component"]),t(n(s),{component:n(v),style:{"font-size":"24px",color:"#ff4d4f"}},null,8,["component"]),t(n(s),{component:n(v),style:{"font-size":"24px",color:"#722ed1"}},null,8,["component"])]),_:1}))}}),zn=`<template>
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
`,_n=O({__name:"IconSize",setup(k){return(i,r)=>(l(),b(n(I),{size:16,align:"center"},{default:m(()=>[t(n(s),{component:n(y),style:{"font-size":"12px"}},null,8,["component"]),t(n(s),{component:n(y),style:{"font-size":"16px"}},null,8,["component"]),t(n(s),{component:n(y),style:{"font-size":"24px"}},null,8,["component"]),t(n(s),{component:n(y),style:{"font-size":"32px"}},null,8,["component"]),t(n(s),{component:n(y),style:{"font-size":"48px"}},null,8,["component"])]),_:1}))}}),Sn=`<template>
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
`,Cn=O({__name:"IconSpin",setup(k){return(i,r)=>(l(),b(n(I),{size:16},{default:m(()=>[t(n(s),{component:n(q),style:{"font-size":"24px"},spin:""},null,8,["component"]),t(n(s),{component:n(B),style:{"font-size":"24px"},spin:""},null,8,["component"])]),_:1}))}}),Un=`<template>
  <Space :size="16">
    <Icon :component="LoadingOutlined" style="font-size: 24px" spin />
    <Icon :component="SettingOutlined" style="font-size: 24px" spin />
  </Space>
</template>

<script setup lang="ts">
import { Icon, Space, LoadingOutlined, SettingOutlined } from 'ant-design-hmfw'
<\/script>
`,qn={class:"markdown-body"},$n={__name:"icon",setup(k,{expose:i}){return i({frontmatter:{}}),(h,o)=>{const u=K("DemoBlock");return l(),p("div",qn,[o[0]||(o[0]=e("h1",{id:"icon-",tabindex:"-1"},"Icon 图标",-1)),o[1]||(o[1]=e("p",null,"语义化的矢量图形，用于展示常用的操作和状态。",-1)),o[2]||(o[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),o[3]||(o[3]=e("ul",null,[e("li",null,"需要展示操作图标时"),e("li",null,"需要展示状态图标时"),e("li",null,"需要展示品牌图标时")],-1)),o[4]||(o[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),o[5]||(o[5]=e("h3",{id:"-2",tabindex:"-1"},"图标浏览器",-1)),o[6]||(o[6]=e("p",null,"浏览所有内置图标，支持搜索和分类过滤。点击图标可复制代码。",-1)),t(u,{title:"图标浏览器",source:n(bn)},{default:m(()=>[t(In)]),_:1},8,["source"]),o[7]||(o[7]=e("h3",{id:"-3",tabindex:"-1"},"基础用法",-1)),o[8]||(o[8]=e("p",null,"展示内置的图标类型。",-1)),t(u,{title:"基础用法",source:n(sn)},{default:m(()=>[t(on)]),_:1},8,["source"]),o[9]||(o[9]=e("h3",{id:"-4",tabindex:"-1"},"图标尺寸",-1)),o[10]||(o[10]=e("p",null,[d("通过 "),e("code",null,'style="font-size: Npx"'),d(" 控制图标大小（图标使用 "),e("code",null,"1em"),d(" 跟随字体大小）。")],-1)),t(u,{title:"图标尺寸",source:n(Sn)},{default:m(()=>[t(_n)]),_:1},8,["source"]),o[11]||(o[11]=e("h3",{id:"-5",tabindex:"-1"},"图标颜色",-1)),o[12]||(o[12]=e("p",null,[d("通过 "),e("code",null,'style="color: #xxx"'),d(" 控制图标颜色（图标使用 "),e("code",null,"currentColor"),d(" 继承文字颜色）。")],-1)),t(u,{title:"图标颜色",source:n(zn)},{default:m(()=>[t(wn)]),_:1},8,["source"]),o[13]||(o[13]=e("h3",{id:"-6",tabindex:"-1"},"旋转动画",-1)),o[14]||(o[14]=e("p",null,[d("通过 "),e("code",null,"spin"),d(" 属性让图标旋转。")],-1)),t(u,{title:"旋转动画",source:n(Un)},{default:m(()=>[t(Cn)]),_:1},8,["source"]),o[15]||(o[15]=X(`<h2 id="api" tabindex="-1">API</h2><h3 id="icon-props" tabindex="-1">Icon Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>component</td><td>图标组件（SVG 函数式组件）</td><td><code>IconComponent</code></td><td>-</td></tr><tr><td>spin</td><td>是否旋转</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>rotate</td><td>旋转角度（deg）</td><td><code>number</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式（可用于设置 <code>font-size</code>、<code>color</code>）</td><td><code>string | CSSProperties</code></td><td>-</td></tr><tr><td>class</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="-7" tabindex="-1">内置图标</h3><table><thead><tr><th>导出名</th><th>说明</th></tr></thead><tbody><tr><td><code>SearchOutlined</code></td><td>搜索</td></tr><tr><td><code>CloseOutlined</code></td><td>关闭</td></tr><tr><td><code>CheckOutlined</code></td><td>勾选</td></tr><tr><td><code>WarningOutlined</code></td><td>警告</td></tr><tr><td><code>InfoCircleOutlined</code></td><td>信息</td></tr><tr><td><code>LoadingOutlined</code></td><td>加载中</td></tr><tr><td><code>UpOutlined</code></td><td>向上</td></tr><tr><td><code>DownOutlined</code></td><td>向下</td></tr><tr><td><code>LeftOutlined</code></td><td>向左</td></tr><tr><td><code>RightOutlined</code></td><td>向右</td></tr><tr><td><code>PlusOutlined</code></td><td>加号</td></tr><tr><td><code>MinusOutlined</code></td><td>减号</td></tr><tr><td><code>EditOutlined</code></td><td>编辑</td></tr><tr><td><code>DeleteOutlined</code></td><td>删除</td></tr><tr><td><code>EyeOutlined</code></td><td>查看</td></tr><tr><td><code>HomeOutlined</code></td><td>首页</td></tr><tr><td><code>UserOutlined</code></td><td>用户</td></tr><tr><td><code>SettingOutlined</code></td><td>设置</td></tr></tbody></table><h3 id="-8" tabindex="-1">自定义图标</h3><p>实现 <code>IconComponent</code> 类型（<code>FunctionalComponent&lt;SVGAttributes&gt;</code>）即可传入任意 SVG 图标：</p><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> IconComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-hmfw&#39;</span>

<span class="token keyword">const</span> MyIcon<span class="token operator">:</span> <span class="token function-variable function">IconComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 24 24<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1em<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1em<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentColor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>
</code></pre><pre class="language-vue"><code class="language-vue">&lt;Icon :component=&quot;MyIcon&quot; /&gt;
</code></pre>`,9))])}}};export{$n as default};
