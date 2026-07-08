import{d as v,u as ln,x as cn,c as s,F as an,a as _,k as pn,l as dn,r as rn,o as q,q as B,e as p,b as E,f as o,_ as un,h as mn,w as z,g as M,i as kn}from"./index-BOp1Gurx.js";import{c as r}from"./cls-S9IiI6wd.js";function bn(n,a){let e=null;return function(...i){e!==null&&clearTimeout(e),e=setTimeout(()=>{n.apply(this,i),e=null},a)}}const gn={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function hn(){const n=rn(typeof window<"u"?window.innerWidth:0),e=bn(()=>{typeof window<"u"&&(n.value=window.innerWidth)},100);return pn(()=>{typeof window<"u"&&window.addEventListener("resize",e)}),dn(()=>{typeof window<"u"&&window.removeEventListener("resize",e)}),_(()=>({xs:n.value>=0,sm:n.value>=576,md:n.value>=768,lg:n.value>=992,xl:n.value>=1200,xxl:n.value>=1600}))}function A(n,a){if(!a)return;const e=["xxl","xl","lg","md","sm","xs"];for(const i of e)if(n[i]&&a[i]!==void 0)return a[i]}const fn=v({name:"Descriptions",props:{title:[String,Object],extra:[String,Object],bordered:Boolean,column:{type:[Number,Object],default:3},size:{type:String,default:"default"},layout:{type:String,default:"horizontal"},colon:{type:Boolean,default:!0},items:Array,labelStyle:Object,contentStyle:Object,classNames:Object,styles:Object},setup(n,{slots:a}){const e=ln("descriptions"),i=cn(),t=hn(),g=_(()=>{const u=t.value;return typeof n.column=="number"?n.column:A(u,n.column)??A(u,gn)??3}),O=_(()=>{var w;return n.items?n.items.map((l,c)=>({...l,key:c})):(((w=a.default)==null?void 0:w.call(a))||[]).filter(l=>l.type&&typeof l.type=="object").map((l,c)=>({...l.props||{},children:l.children,key:l.key??c}))}),h=_(()=>{const u=t.value;return O.value.map(w=>{const{span:l,...c}=w;if(l==="filled")return{...c,filled:!0,computedSpan:1};const m=typeof l=="number"?l:A(u,l)??1;return{...c,computedSpan:m}})}),en=_(()=>{const u=g.value,w=h.value,l=[];let c=[],m=0;for(const b of w){if(b.filled){const N=u-m;c.push({...b,computedSpan:N}),l.push(c),c=[],m=0;continue}const S=b.computedSpan??1,D=u-m;m+S>u&&c.length>0&&(l.push(c),c=[],m=0),m+S>u?(c.push({...b,computedSpan:D}),m=u):(c.push(b),m+=S),m>=u&&(l.push(c),c=[],m=0)}return c.length>0&&l.push(c),l.map(b=>{const S=b.reduce((D,N)=>D+(N.computedSpan??1),0);if(S<u&&b.length>0){const D=b[b.length-1],N=D.computedSpan??1;D.computedSpan=u-(S-N)}return b})}),on=_(()=>n.size==="medium"?"middle":n.size);return()=>{var m,b,S,D,N,W,T,V,j,R,G,F;const u=i.value.direction,w=on.value,l=x=>{const C={...n.labelStyle,...x.labelStyle};return s("span",{style:C},[x.label])},c=x=>{const C={...n.contentStyle,...x.contentStyle};return s("span",{style:C},[x.children])};return s("div",{class:r(e,{[`${e}-${w}`]:w!=="default",[`${e}-bordered`]:n.bordered,[`${e}-rtl`]:u==="rtl"},(m=n.classNames)==null?void 0:m.root),style:(b=n.styles)==null?void 0:b.root},[(n.title||n.extra||a.title||a.extra)&&s("div",{class:r(`${e}-header`,(S=n.classNames)==null?void 0:S.header),style:(D=n.styles)==null?void 0:D.header},[(n.title||a.title)&&s("div",{class:r(`${e}-title`,(N=n.classNames)==null?void 0:N.title),style:(W=n.styles)==null?void 0:W.title},[((T=a.title)==null?void 0:T.call(a))??n.title]),(n.extra||a.extra)&&s("div",{class:r(`${e}-extra`,(V=n.classNames)==null?void 0:V.extra),style:(j=n.styles)==null?void 0:j.extra},[((R=a.extra)==null?void 0:R.call(a))??n.extra])]),s("div",{class:r(`${e}-view`,(G=n.classNames)==null?void 0:G.view),style:(F=n.styles)==null?void 0:F.view},[s("table",null,[s("tbody",null,[en.value.map((x,C)=>{var U,L,Z,X,H,J,K,Q;return n.layout==="vertical"?s(an,null,[s("tr",{key:`label-${C}`,class:r(`${e}-row`,(U=n.classNames)==null?void 0:U.row),style:(L=n.styles)==null?void 0:L.row},[x.map((d,$)=>{var f,y;return s("th",{key:`label-${d.key??$}`,class:r(`${e}-item-label`,(f=n.classNames)==null?void 0:f.label),colspan:d.computedSpan??1,style:(y=n.styles)==null?void 0:y.label},[l(d)])})]),s("tr",{key:`content-${C}`,class:r(`${e}-row`,(Z=n.classNames)==null?void 0:Z.row),style:(X=n.styles)==null?void 0:X.row},[x.map((d,$)=>{var f,y;return s("td",{key:`content-${d.key??$}`,class:r(`${e}-item-content`,(f=n.classNames)==null?void 0:f.content),colspan:d.computedSpan??1,style:(y=n.styles)==null?void 0:y.content},[c(d)])})])]):n.bordered?s("tr",{key:C,class:r(`${e}-row`,(H=n.classNames)==null?void 0:H.row),style:(J=n.styles)==null?void 0:J.row},[x.map((d,$)=>{var f,y,I,P;return[s("th",{key:`label-${d.key??$}`,class:r(`${e}-item-label`,(f=n.classNames)==null?void 0:f.label),style:(y=n.styles)==null?void 0:y.label},[l(d)]),s("td",{key:`content-${d.key??$}`,class:r(`${e}-item-content`,(I=n.classNames)==null?void 0:I.content),colspan:(d.computedSpan??1)*2-1,style:(P=n.styles)==null?void 0:P.content},[c(d)])]})]):s("tr",{key:C,class:r(`${e}-row`,(K=n.classNames)==null?void 0:K.row),style:(Q=n.styles)==null?void 0:Q.row},[x.map((d,$)=>{var f,y,I,P,Y,nn,tn,sn;return s("td",{key:`item-${d.key??$}`,class:r(`${e}-item`,(f=n.classNames)==null?void 0:f.item),colspan:d.computedSpan??1,style:(y=n.styles)==null?void 0:y.item},[s("div",{class:r(`${e}-item-container`,(I=n.classNames)==null?void 0:I.itemContainer),style:(P=n.styles)==null?void 0:P.itemContainer},[d.label&&s("span",{class:r(`${e}-item-label`,{[`${e}-item-no-colon`]:!n.colon},(Y=n.classNames)==null?void 0:Y.label),style:(nn=n.styles)==null?void 0:nn.label},[l(d)]),s("span",{class:r(`${e}-item-content`,(tn=n.classNames)==null?void 0:tn.content),style:(sn=n.styles)==null?void 0:sn.content},[c(d)])])])})])})])])])])}}}),yn=v({name:"DescriptionsItem",props:{label:String,span:[Number,String,Object],labelStyle:Object,contentStyle:Object},setup(n,{slots:a}){return()=>{var e;return(e=a.default)==null?void 0:e.call(a)}}}),k=fn;k.Item=yn;const xn=v({__name:"DescriptionsBasic",setup(n){const a=[{label:"用户名",children:"Zhou Maomao"},{label:"手机号",children:"1810000000"},{label:"居住地",children:"杭州市"},{label:"备注",children:"学校"},{label:"联系地址",children:"浙江省杭州市西湖区古翠路",span:2}];return(e,i)=>(q(),B(p(k),{title:"用户信息",items:a}))}}),vn=`<template>
  <Descriptions title="用户信息" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from '@hmfw/ant-design'

const items = [
  { label: '用户名', children: 'Zhou Maomao' },
  { label: '手机号', children: '1810000000' },
  { label: '居住地', children: '杭州市' },
  { label: '备注', children: '学校' },
  { label: '联系地址', children: '浙江省杭州市西湖区古翠路', span: 2 },
]
<\/script>
`,wn=v({__name:"DescriptionsBordered",setup(n){const a=[{label:"产品",children:"Cloud Database"},{label:"计费方式",children:"预付费"},{label:"自动续费",children:"已开通"},{label:"订单时间",children:"2018-04-24 18:00:00"},{label:"使用时长",children:"2年"},{label:"到期时间",children:"2020-04-24 18:00:00"},{label:"配置信息",children:"2核 4GB 80GB SSD",span:3}];return(e,i)=>(q(),B(p(k),{title:"用户信息",bordered:"",items:a}))}}),Sn=`<template>
  <Descriptions title="用户信息" bordered :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from '@hmfw/ant-design'

const items = [
  { label: '产品', children: 'Cloud Database' },
  { label: '计费方式', children: '预付费' },
  { label: '自动续费', children: '已开通' },
  { label: '订单时间', children: '2018-04-24 18:00:00' },
  { label: '使用时长', children: '2年' },
  { label: '到期时间', children: '2020-04-24 18:00:00' },
  { label: '配置信息', children: '2核 4GB 80GB SSD', span: 3 },
]
<\/script>
`,Dn={style:{display:"flex","flex-direction":"column",gap:"32px"}},qn=v({__name:"DescriptionsClassNames",setup(n){const a=[{label:"姓名",children:"张三"},{label:"手机号",children:"138-0000-0000"},{label:"邮箱",children:"zhangsan@example.com"},{label:"住址",children:"浙江省杭州市西湖区某某路 123 号",span:2}],e=[{label:"产品名称",children:"Ant Design Vue"},{label:"版本号",children:"v4.0.0"},{label:"许可证",children:"MIT"},{label:"作者",children:"Ant Design Team"},{label:"仓库地址",children:"https://github.com/vueComponent/ant-design-vue",span:2}],i=[{label:"订单编号",children:"ORD20230615001"},{label:"下单时间",children:"2023-06-15 14:30:00"},{label:"订单状态",children:"已完成"}],t=[{label:"API 地址",children:"https://api.example.com"},{label:"超时时间",children:"30 秒"},{label:"重试次数",children:"3 次"}],g=[{label:"服务器",children:"Server-01"},{label:"状态",children:"运行中"},{label:"CPU 使用率",children:"45%"},{label:"内存使用率",children:"68%"},{label:"磁盘使用率",children:"52%"},{label:"网络流量",children:"125 MB/s"}];return(O,h)=>(q(),E("div",Dn,[o("div",null,[h[0]||(h[0]=o("div",{style:{"margin-bottom":"12px",color:"#666","font-size":"13px"}},"自定义标题和头部区域样式：",-1)),s(p(k),{title:"用户信息",extra:"更多操作",items:a,"class-names":{header:"custom-header",title:"custom-title",extra:"custom-extra"}})]),o("div",null,[h[1]||(h[1]=o("div",{style:{"margin-bottom":"12px",color:"#666","font-size":"13px"}},"自定义标签和内容区域样式：",-1)),s(p(k),{title:"产品信息",bordered:"",items:e,"class-names":{label:"custom-label",content:"custom-content"}})]),o("div",null,[h[2]||(h[2]=o("div",{style:{"margin-bottom":"12px",color:"#666","font-size":"13px"}},"垂直布局自定义行样式（hover 效果）：",-1)),s(p(k),{title:"订单详情",layout:"vertical",bordered:"",items:i,"class-names":{row:"custom-row",label:"custom-vertical-label"}})]),o("div",null,[h[3]||(h[3]=o("div",{style:{"margin-bottom":"12px",color:"#666","font-size":"13px"}},"使用 styles 内联样式：",-1)),s(p(k),{title:"配置信息",items:t,styles:{root:{border:"2px solid #1890ff",borderRadius:"12px",padding:"16px"},title:{fontSize:"18px",color:"#1890ff",fontWeight:600},label:{color:"#8c8c8c",fontWeight:500},content:{color:"#262626",fontWeight:600}}})]),o("div",null,[h[4]||(h[4]=o("div",{style:{"margin-bottom":"12px",color:"#666","font-size":"13px"}}," 组合使用 classNames 和 styles（渐变背景 + 自定义间距）： ",-1)),s(p(k),{title:"高级配置",extra:"编辑",items:g,"class-names":{root:"gradient-root",view:"gradient-view",label:"gradient-label",content:"gradient-content"},styles:{header:{padding:"16px 20px"},view:{padding:"16px 20px"}}})])]))}}),Nn=un(qn,[["__scopeId","data-v-d999964d"]]),Cn=`<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义标题和头部区域 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 13px">自定义标题和头部区域样式：</div>
      <Descriptions
        title="用户信息"
        extra="更多操作"
        :items="basicItems"
        :class-names="{
          header: 'custom-header',
          title: 'custom-title',
          extra: 'custom-extra',
        }"
      />
    </div>

    <!-- 场景 2：自定义标签和内容样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 13px">自定义标签和内容区域样式：</div>
      <Descriptions
        title="产品信息"
        bordered
        :items="productItems"
        :class-names="{
          label: 'custom-label',
          content: 'custom-content',
        }"
      />
    </div>

    <!-- 场景 3：垂直布局自定义行样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 13px">垂直布局自定义行样式（hover 效果）：</div>
      <Descriptions
        title="订单详情"
        layout="vertical"
        bordered
        :items="orderItems"
        :class-names="{
          row: 'custom-row',
          label: 'custom-vertical-label',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 13px">使用 styles 内联样式：</div>
      <Descriptions
        title="配置信息"
        :items="configItems"
        :styles="{
          root: { border: '2px solid #1890ff', borderRadius: '12px', padding: '16px' },
          title: { fontSize: '18px', color: '#1890ff', fontWeight: 600 },
          label: { color: '#8c8c8c', fontWeight: 500 },
          content: { color: '#262626', fontWeight: 600 },
        }"
      />
    </div>

    <!-- 场景 5：组合使用 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 13px">
        组合使用 classNames 和 styles（渐变背景 + 自定义间距）：
      </div>
      <Descriptions
        title="高级配置"
        extra="编辑"
        :items="advancedItems"
        :class-names="{
          root: 'gradient-root',
          view: 'gradient-view',
          label: 'gradient-label',
          content: 'gradient-content',
        }"
        :styles="{
          header: { padding: '16px 20px' },
          view: { padding: '16px 20px' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Descriptions } from '@hmfw/ant-design'

const basicItems = [
  { label: '姓名', children: '张三' },
  { label: '手机号', children: '138-0000-0000' },
  { label: '邮箱', children: 'zhangsan@example.com' },
  { label: '住址', children: '浙江省杭州市西湖区某某路 123 号', span: 2 },
]

const productItems = [
  { label: '产品名称', children: 'Ant Design Vue' },
  { label: '版本号', children: 'v4.0.0' },
  { label: '许可证', children: 'MIT' },
  { label: '作者', children: 'Ant Design Team' },
  { label: '仓库地址', children: 'https://github.com/vueComponent/ant-design-vue', span: 2 },
]

const orderItems = [
  { label: '订单编号', children: 'ORD20230615001' },
  { label: '下单时间', children: '2023-06-15 14:30:00' },
  { label: '订单状态', children: '已完成' },
]

const configItems = [
  { label: 'API 地址', children: 'https://api.example.com' },
  { label: '超时时间', children: '30 秒' },
  { label: '重试次数', children: '3 次' },
]

const advancedItems = [
  { label: '服务器', children: 'Server-01' },
  { label: '状态', children: '运行中' },
  { label: 'CPU 使用率', children: '45%' },
  { label: '内存使用率', children: '68%' },
  { label: '磁盘使用率', children: '52%' },
  { label: '网络流量', children: '125 MB/s' },
]
<\/script>

<style scoped>
/* 场景 1：自定义标题和头部 */
:deep(.custom-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px 20px;
  border-radius: 8px 8px 0 0;
}

:deep(.custom-title) {
  color: white;
  font-size: 18px;
  font-weight: 600;
}

:deep(.custom-extra) {
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: all 0.3s;
}

:deep(.custom-extra:hover) {
  color: white;
  transform: translateX(-2px);
}

/* 场景 2：自定义标签和内容 */
:deep(.custom-label) {
  background: #f0f5ff;
  color: #1890ff;
  font-weight: 600;
  position: relative;
}

:deep(.custom-label::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #1890ff;
}

:deep(.custom-content) {
  background: #fafafa;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 13px;
}

/* 场景 3：垂直布局行样式 */
:deep(.custom-row) {
  transition: all 0.3s;
}

:deep(.custom-row:hover) {
  background-color: #f0f5ff;
  transform: translateX(2px);
}

:deep(.custom-vertical-label) {
  color: #1890ff;
  font-weight: 500;
}

/* 场景 5：渐变背景 */
:deep(.gradient-root) {
  background: linear-gradient(135deg, #e0f7fa 0%, #f3e5f5 100%);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

:deep(.gradient-view) {
  background: rgba(255, 255, 255, 0.6);
}

:deep(.gradient-label) {
  color: #00838f;
  font-weight: 500;
}

:deep(.gradient-content) {
  color: #4a148c;
  font-weight: 600;
}
</style>
`,$n=v({__name:"DescriptionsFilled",setup(n){const a=[{label:"产品",children:"Cloud Database",span:2},{label:"计费",children:"预付费"},{label:"时间",children:"18:00:00"},{label:"金额",children:"$80.00",span:"filled"},{label:"折扣",children:"$20.00",span:"filled"},{label:"实付",children:"$60.00"}];return(e,i)=>(q(),B(p(k),{title:"Span 填充示例",column:3,items:a}))}}),zn=`<template>
  <Descriptions title="Span 填充示例" :column="3" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from '@hmfw/ant-design'

const items = [
  { label: '产品', children: 'Cloud Database', span: 2 },
  { label: '计费', children: '预付费' },
  { label: '时间', children: '18:00:00' },
  { label: '金额', children: '$80.00', span: 'filled' as const },
  { label: '折扣', children: '$20.00', span: 'filled' as const },
  { label: '实付', children: '$60.00' },
]
<\/script>
`,_n=v({__name:"DescriptionsResponsive",setup(n){const a=[{label:"产品",children:"Cloud Database"},{label:"计费",children:"预付费"},{label:"时间",children:"18:00:00"},{label:"金额",children:"$80.00"},{label:"折扣",children:"$20.00"},{label:"实付",children:"$60.00"}];return(e,i)=>(q(),B(p(k),{title:"响应式列数",column:{xs:1,sm:2,md:3},items:a}))}}),Bn=`<template>
  <Descriptions title="响应式列数" :column="{ xs: 1, sm: 2, md: 3 }" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from '@hmfw/ant-design'

const items = [
  { label: '产品', children: 'Cloud Database' },
  { label: '计费', children: '预付费' },
  { label: '时间', children: '18:00:00' },
  { label: '金额', children: '$80.00' },
  { label: '折扣', children: '$20.00' },
  { label: '实付', children: '$60.00' },
]
<\/script>
`,In=v({__name:"DescriptionsSizes",setup(n){const a=[{label:"产品",children:"Cloud Database"},{label:"计费",children:"预付费"},{label:"时间",children:"18:00:00"}];return(e,i)=>(q(),E(an,null,[s(p(k),{title:"尺寸示例",column:3,items:a}),i[0]||(i[0]=o("br",null,null,-1)),s(p(k),{title:"中等尺寸",size:"middle",column:3,items:a}),i[1]||(i[1]=o("br",null,null,-1)),s(p(k),{title:"小尺寸",size:"small",column:3,items:a})],64))}}),Pn=`<template>
  <Descriptions title="尺寸示例" :column="3" :items="items" />
  <br />
  <Descriptions title="中等尺寸" size="middle" :column="3" :items="items" />
  <br />
  <Descriptions title="小尺寸" size="small" :column="3" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from '@hmfw/ant-design'

const items = [
  { label: '产品', children: 'Cloud Database' },
  { label: '计费', children: '预付费' },
  { label: '时间', children: '18:00:00' },
]
<\/script>
`,Mn=v({__name:"DescriptionsVertical",setup(n){const a=[{label:"用户名",children:"Zhou Maomao"},{label:"手机号",children:"1810000000"},{label:"居住地",children:"杭州市"},{label:"联系地址",children:"浙江省杭州市西湖区古翠路"}];return(e,i)=>(q(),B(p(k),{title:"用户信息",layout:"vertical",items:a}))}}),An=`<template>
  <Descriptions title="用户信息" layout="vertical" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from '@hmfw/ant-design'

const items = [
  { label: '用户名', children: 'Zhou Maomao' },
  { label: '手机号', children: '1810000000' },
  { label: '居住地', children: '杭州市' },
  { label: '联系地址', children: '浙江省杭州市西湖区古翠路' },
]
<\/script>
`,En=v({__name:"DescriptionsVerticalBordered",setup(n){const a=[{label:"产品",children:"Cloud Database"},{label:"计费方式",children:"预付费"},{label:"自动续费",children:"已开通"},{label:"订单时间",children:"2018-04-24 18:00:00"},{label:"使用时长",children:"2年"},{label:"到期时间",children:"2020-04-24 18:00:00"},{label:"配置信息",children:"2核 4GB 80GB SSD",span:3}];return(e,i)=>(q(),B(p(k),{title:"用户信息",layout:"vertical",bordered:"",items:a}))}}),On=`<template>
  <Descriptions title="用户信息" layout="vertical" bordered :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from '@hmfw/ant-design'

const items = [
  { label: '产品', children: 'Cloud Database' },
  { label: '计费方式', children: '预付费' },
  { label: '自动续费', children: '已开通' },
  { label: '订单时间', children: '2018-04-24 18:00:00' },
  { label: '使用时长', children: '2年' },
  { label: '到期时间', children: '2020-04-24 18:00:00' },
  { label: '配置信息', children: '2核 4GB 80GB SSD', span: 3 },
]
<\/script>
`,Wn={class:"markdown-body"},jn={__name:"descriptions",setup(n,{expose:a}){return a({frontmatter:{}}),(i,t)=>{const g=mn("DemoBlock");return q(),E("div",Wn,[t[0]||(t[0]=o("h1",{id:"descriptions-描述列表",tabindex:"-1"},"Descriptions 描述列表",-1)),t[1]||(t[1]=o("p",null,"成组展示多个只读字段。",-1)),t[2]||(t[2]=o("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=o("ul",null,[o("li",null,"常见于详情页的信息展示")],-1)),t[4]||(t[4]=o("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=o("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=o("p",null,"简单的展示。",-1)),s(g,{title:"基础用法",source:p(vn)},{default:z(()=>[s(xn)]),_:1},8,["source"]),t[7]||(t[7]=o("h3",{id:"带边框",tabindex:"-1"},"带边框",-1)),t[8]||(t[8]=o("p",null,"带边框和背景颜色列表。",-1)),s(g,{title:"带边框",source:p(Sn)},{default:z(()=>[s(wn)]),_:1},8,["source"]),t[9]||(t[9]=o("h3",{id:"垂直布局",tabindex:"-1"},"垂直布局",-1)),t[10]||(t[10]=o("p",null,"垂直的列表。",-1)),s(g,{title:"垂直布局",source:p(An)},{default:z(()=>[s(Mn)]),_:1},8,["source"]),t[11]||(t[11]=o("h3",{id:"垂直布局带边框",tabindex:"-1"},"垂直布局带边框",-1)),t[12]||(t[12]=o("p",null,"垂直布局与边框模式的组合使用，确保列边框和行边框正确显示。",-1)),s(g,{title:"垂直布局带边框",source:p(On)},{default:z(()=>[s(En)]),_:1},8,["source"]),t[13]||(t[13]=o("h3",{id:"响应式列数",tabindex:"-1"},"响应式列数",-1)),t[14]||(t[14]=o("p",null,"支持响应式的列数配置，窗口大小变化时自动调整列数布局。",-1)),s(g,{title:"响应式列数",source:p(Bn)},{default:z(()=>[s(_n)]),_:1},8,["source"]),t[15]||(t[15]=o("h3",{id:"不同尺寸",tabindex:"-1"},"不同尺寸",-1)),t[16]||(t[16]=o("p",null,"支持 default、middle、small 三种尺寸。",-1)),s(g,{title:"不同尺寸",source:p(Pn)},{default:z(()=>[s(In)]),_:1},8,["source"]),t[17]||(t[17]=o("h3",{id:"span-填充",tabindex:"-1"},"Span 填充",-1)),t[18]||(t[18]=o("p",null,[M("使用 "),o("code",null,'span="filled"'),M(" 填充剩余列。")],-1)),s(g,{title:"Span 填充",source:p(zn)},{default:z(()=>[s($n)]),_:1},8,["source"]),t[19]||(t[19]=o("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[20]||(t[20]=o("p",null,[M("通过 "),o("code",null,"classNames"),M(" / "),o("code",null,"styles"),M(" 对各子元素做细粒度样式控制。")],-1)),s(g,{title:"语义化 className 与 style",source:p(Cn)},{default:z(()=>[s(Nn)]),_:1},8,["source"]),t[21]||(t[21]=kn(`<h2 id="api" tabindex="-1">API</h2><h3 id="descriptions-props" tabindex="-1">Descriptions Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>描述列表的标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>extra</td><td>描述列表的操作区域</td><td><code>string | VNode | slot</code></td><td>-</td></tr><tr><td>bordered</td><td>是否展示边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>column</td><td>一行的 DescriptionItems 数量,可以是响应式对象</td><td><code>number | Record&lt;Breakpoint, number&gt;</code></td><td><code>3</code></td></tr><tr><td>size</td><td>设置列表的大小</td><td><code>&#39;default&#39; | &#39;middle&#39; | &#39;small&#39; | &#39;medium&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>layout</td><td>描述布局</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>colon</td><td>配置 Descriptions.Item 的 colon 的默认值</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>items</td><td>描述列表的数据项</td><td><code>DescriptionsItem[]</code></td><td>-</td></tr><tr><td>labelStyle</td><td>自定义标签样式(全局)</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>contentStyle</td><td>自定义内容样式(全局)</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>DescriptionsClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>DescriptionsStyles</code></td><td>-</td></tr></tbody></table><h3 id="descriptionsitem" tabindex="-1">DescriptionsItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>内容的描述</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>内容</td><td><code>any</code></td><td>-</td></tr><tr><td>span</td><td>包含列的数量,可以是响应式对象或 ‘filled’</td><td><code>number | &#39;filled&#39; | Record&lt;Breakpoint, number&gt;</code></td><td><code>1</code></td></tr><tr><td>labelStyle</td><td>自定义标签样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>contentStyle</td><td>自定义内容样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="breakpoint" tabindex="-1">Breakpoint</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">Breakpoint</span> <span class="token operator">=</span> <span class="token string">&#39;xs&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;sm&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lg&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;xl&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;xxl&#39;</span>
</code></pre><p>响应式断点:</p><ul><li>xs: <code>&gt;= 0px</code></li><li>sm: <code>&gt;= 576px</code></li><li>md: <code>&gt;= 768px</code></li><li>lg: <code>&gt;= 992px</code></li><li>xl: <code>&gt;= 1200px</code></li><li>xxl: <code>&gt;= 1600px</code></li></ul><h2 id="功能特性" tabindex="-1">功能特性</h2><h3 id="垂直布局边框样式" tabindex="-1">垂直布局边框样式</h3><p>当 <code>layout=&quot;vertical&quot;</code> 与 <code>bordered</code> 同时启用时，组件会渲染为垂直分组的表格结构（label 与 content 分别独占一行）。 内置样式确保每一列之间存在垂直分隔线，同时保留行之间的水平分隔线，渲染效果与水平边框模式一致。</p><pre class="language-vue"><code>&lt;Descriptions title=&quot;用户信息&quot; layout=&quot;vertical&quot; bordered :items=&quot;items&quot; /&gt;
</code></pre><h3 id="响应式列数自动更新" tabindex="-1">响应式列数自动更新</h3><p><code>column</code> 属性支持传入响应式对象（按断点配置列数）。组件内部将 <code>useBreakpoint()</code> 实现为真正的响应式 composable：</p><ul><li>在 <code>onMounted</code> 中绑定 <code>window.resize</code> 事件监听</li><li>使用 <code>debounce</code> 防抖（100ms 延迟）优化 resize 性能，避免频繁重渲染</li><li>在 <code>onUnmounted</code> 中自动清理监听器</li></ul><p>当窗口大小跨越断点时，列数将自动重新计算并触发视图更新，无需用户手动刷新页面。</p><pre class="language-vue"><code>&lt;Descriptions :column=&quot;{ xs: 1, sm: 2, md: 3, lg: 4 }&quot; :items=&quot;items&quot; /&gt;
</code></pre><h3 id="debounce-工具函数" tabindex="-1">debounce 工具函数</h3><p>新增的 <code>debounce</code> 防抖工具函数位于 <code>components/_utils/function.ts</code>，作为内部工具供组件库使用。</p><table><thead><tr><th>函数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>debounce</td><td>在指定延迟后执行函数，延迟期间再次调用则重新计时</td><td><code>&lt;T&gt;(fn: T, delay: number) =&gt; (...args) =&gt; void</code></td></tr></tbody></table><p>参数说明:</p><ul><li><code>fn</code>: 需要防抖的目标函数</li><li><code>delay</code>: 延迟时间，单位毫秒</li></ul><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">DescriptionsClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根容器</span>
  header<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 头部容器</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标题</span>
  extra<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 右侧扩展</span>
  view<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 视图容器</span>
  row<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 表格行</span>
  item<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 项容器（水平无边框布局）</span>
  itemContainer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 项内部容器（水平无边框布局）</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标签</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内容</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">DescriptionsStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  header<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  title<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  extra<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  view<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  row<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  item<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemContainer<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  label<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  content<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-descriptions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-descriptions-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.header / styles.header 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-descriptions-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.title / styles.title 应用于此 --&gt;</span>
      标题
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-descriptions-extra<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.extra / styles.extra 应用于此 --&gt;</span>
      操作区域
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-descriptions-view<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.view / styles.view 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-descriptions-row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.row / styles.row 应用于此 --&gt;</span>

          <span class="token comment">&lt;!-- 垂直布局 / 有边框布局 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-descriptions-item-label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.label / styles.label 应用于此 --&gt;</span>
            标签
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-descriptions-item-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.content / styles.content 应用于此 --&gt;</span>
            内容
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>

          <span class="token comment">&lt;!-- 水平无边框布局 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-descriptions-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.item / styles.item 应用于此 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-descriptions-item-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token comment">&lt;!-- ↑ classNames.itemContainer / styles.itemContainer 应用于此 --&gt;</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-descriptions-item-label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!-- ↑ classNames.label / styles.label 应用于此 --&gt;</span>
                标签
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-descriptions-item-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!-- ↑ classNames.content / styles.content 应用于此 --&gt;</span>
                内容
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Descriptions</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>用户信息<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>编辑<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      header: &#39;custom-header&#39;,
      title: &#39;custom-title&#39;,
      label: &#39;custom-label&#39;,
      content: &#39;custom-content&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.custom-header)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 16px 20px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px 8px 0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-title)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-label)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f0f5ff<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-content)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fafafa<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Monaco&#39;</span><span class="token punctuation">,</span> monospace<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Descriptions</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>配置信息<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { border: &#39;2px solid #1890ff&#39;, borderRadius: &#39;12px&#39;, padding: &#39;16px&#39; },
      title: { fontSize: &#39;18px&#39;, color: &#39;#1890ff&#39;, fontWeight: 600 },
      label: { color: &#39;#8c8c8c&#39;, fontWeight: 500 },
      content: { color: &#39;#262626&#39;, fontWeight: 600 },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>item</code> 和 <code>itemContainer</code> 仅在水平无边框布局（<code>layout=&quot;horizontal&quot;</code> 且 <code>bordered={false}</code>）时生效</li><li>在垂直布局或有边框布局中，标签和内容分别使用 <code>&lt;th&gt;</code> 和 <code>&lt;td&gt;</code> 元素</li><li><code>header</code>、<code>title</code> 和 <code>extra</code> 仅在设置了 <code>title</code> 或 <code>extra</code> 属性时渲染</li><li><code>row</code> 应用于每一个表格行，可用于实现 hover 效果或斑马纹</li><li><code>label</code> 和 <code>content</code> 在所有布局模式下都会应用</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-text</code></td><td>主文本颜色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本颜色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框颜色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-fill-alter</code></td><td>备用填充色</td><td><code>rgba(0,0,0,0.02)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>标准字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-lg</code></td><td>大字号</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-line-height-base</code></td><td>标准行高</td><td><code>1.5714285714285714</code></td></tr><tr><td><code>--hmfw-line-height-lg</code></td><td>大行高</td><td><code>1.5</code></td></tr><tr><td><code>--hmfw-padding-xs</code></td><td>超小内边距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-padding-sm</code></td><td>小内边距</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-padding</code></td><td>标准内边距</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-padding-lg</code></td><td>大内边距</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-margin</code></td><td>标准外边距</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-margin-xs</code></td><td>超小外边距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大圆角</td><td><code>8px</code></td></tr></tbody></table>`,40))])}}};export{jn as default};
