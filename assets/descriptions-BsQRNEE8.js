import{o as v,N as ot,L as ct,n as e,F as st,f as _,x as pt,y as it,E as dt,A as q,i as B,K as p,k as E,h as l,_ as rt,H as ut,R as z,m as M,l as mt}from"./index-X2tFbSxS.js";import{c as r}from"./cls-S9IiI6wd.js";function bt(t,s){let a=null;return function(...i){a!==null&&clearTimeout(a),a=setTimeout(()=>{t.apply(this,i),a=null},s)}}const kt={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function gt(){const t=dt(typeof window<"u"?window.innerWidth:0),a=bt(()=>{typeof window<"u"&&(t.value=window.innerWidth)},100);return pt(()=>{typeof window<"u"&&window.addEventListener("resize",a)}),it(()=>{typeof window<"u"&&window.removeEventListener("resize",a)}),_(()=>({xs:t.value>=0,sm:t.value>=576,md:t.value>=768,lg:t.value>=992,xl:t.value>=1200,xxl:t.value>=1600}))}function A(t,s){if(!s)return;const a=["xxl","xl","lg","md","sm","xs"];for(const i of a)if(t[i]&&s[i]!==void 0)return s[i]}const ht=v({name:"Descriptions",props:{title:[String,Object],extra:[String,Object],bordered:Boolean,column:{type:[Number,Object],default:3},size:{type:String,default:"default"},layout:{type:String,default:"horizontal"},colon:{type:Boolean,default:!0},items:Array,labelStyle:Object,contentStyle:Object,classNames:Object,styles:Object},setup(t,{slots:s}){const a=ot("descriptions"),i=ct(),n=gt(),g=_(()=>{const u=n.value;return typeof t.column=="number"?t.column:A(u,t.column)??A(u,kt)??3}),O=_(()=>{var w;return t.items?t.items.map((o,c)=>({...o,key:c})):(((w=s.default)==null?void 0:w.call(s))||[]).filter(o=>o.type&&typeof o.type=="object").map((o,c)=>({...o.props||{},children:o.children,key:o.key??c}))}),h=_(()=>{const u=n.value;return O.value.map(w=>{const{span:o,...c}=w;if(o==="filled")return{...c,filled:!0,computedSpan:1};const m=typeof o=="number"?o:A(u,o)??1;return{...c,computedSpan:m}})}),at=_(()=>{const u=g.value,w=h.value,o=[];let c=[],m=0;for(const k of w){if(k.filled){const N=u-m;c.push({...k,computedSpan:N}),o.push(c),c=[],m=0;continue}const S=k.computedSpan??1,D=u-m;m+S>u&&c.length>0&&(o.push(c),c=[],m=0),m+S>u?(c.push({...k,computedSpan:D}),m=u):(c.push(k),m+=S),m>=u&&(o.push(c),c=[],m=0)}return c.length>0&&o.push(c),o.map(k=>{const S=k.reduce((D,N)=>D+(N.computedSpan??1),0);if(S<u&&k.length>0){const D=k[k.length-1],N=D.computedSpan??1;D.computedSpan=u-(S-N)}return k})}),lt=_(()=>t.size==="medium"?"middle":t.size);return()=>{var m,k,S,D,N,W,T,V,j,R,G,F;const u=i.value.direction,w=lt.value,o=x=>{const C={...t.labelStyle,...x.labelStyle};return e("span",{style:C},[x.label])},c=x=>{const C={...t.contentStyle,...x.contentStyle};return e("span",{style:C},[x.children])};return e("div",{class:r(a,{[`${a}-${w}`]:w!=="default",[`${a}-bordered`]:t.bordered,[`${a}-rtl`]:u==="rtl"},(m=t.classNames)==null?void 0:m.root),style:(k=t.styles)==null?void 0:k.root},[(t.title||t.extra||s.title||s.extra)&&e("div",{class:r(`${a}-header`,(S=t.classNames)==null?void 0:S.header),style:(D=t.styles)==null?void 0:D.header},[(t.title||s.title)&&e("div",{class:r(`${a}-title`,(N=t.classNames)==null?void 0:N.title),style:(W=t.styles)==null?void 0:W.title},[((T=s.title)==null?void 0:T.call(s))??t.title]),(t.extra||s.extra)&&e("div",{class:r(`${a}-extra`,(V=t.classNames)==null?void 0:V.extra),style:(j=t.styles)==null?void 0:j.extra},[((R=s.extra)==null?void 0:R.call(s))??t.extra])]),e("div",{class:r(`${a}-view`,(G=t.classNames)==null?void 0:G.view),style:(F=t.styles)==null?void 0:F.view},[e("table",null,[e("tbody",null,[at.value.map((x,C)=>{var L,U,Z,X,H,K,J,Q;return t.layout==="vertical"?e(st,null,[e("tr",{key:`label-${C}`,class:r(`${a}-row`,(L=t.classNames)==null?void 0:L.row),style:(U=t.styles)==null?void 0:U.row},[x.map((d,$)=>{var f,y;return e("th",{key:`label-${d.key??$}`,class:r(`${a}-item-label`,(f=t.classNames)==null?void 0:f.label),colspan:d.computedSpan??1,style:(y=t.styles)==null?void 0:y.label},[o(d)])})]),e("tr",{key:`content-${C}`,class:r(`${a}-row`,(Z=t.classNames)==null?void 0:Z.row),style:(X=t.styles)==null?void 0:X.row},[x.map((d,$)=>{var f,y;return e("td",{key:`content-${d.key??$}`,class:r(`${a}-item-content`,(f=t.classNames)==null?void 0:f.content),colspan:d.computedSpan??1,style:(y=t.styles)==null?void 0:y.content},[c(d)])})])]):t.bordered?e("tr",{key:C,class:r(`${a}-row`,(H=t.classNames)==null?void 0:H.row),style:(K=t.styles)==null?void 0:K.row},[x.map((d,$)=>{var f,y,I,P;return[e("th",{key:`label-${d.key??$}`,class:r(`${a}-item-label`,(f=t.classNames)==null?void 0:f.label),style:(y=t.styles)==null?void 0:y.label},[o(d)]),e("td",{key:`content-${d.key??$}`,class:r(`${a}-item-content`,(I=t.classNames)==null?void 0:I.content),colspan:(d.computedSpan??1)*2-1,style:(P=t.styles)==null?void 0:P.content},[c(d)])]})]):e("tr",{key:C,class:r(`${a}-row`,(J=t.classNames)==null?void 0:J.row),style:(Q=t.styles)==null?void 0:Q.row},[x.map((d,$)=>{var f,y,I,P,Y,tt,nt,et;return e("td",{key:`item-${d.key??$}`,class:r(`${a}-item`,(f=t.classNames)==null?void 0:f.item),colspan:d.computedSpan??1,style:(y=t.styles)==null?void 0:y.item},[e("div",{class:r(`${a}-item-container`,(I=t.classNames)==null?void 0:I.itemContainer),style:(P=t.styles)==null?void 0:P.itemContainer},[d.label&&e("span",{class:r(`${a}-item-label`,{[`${a}-item-no-colon`]:!t.colon},(Y=t.classNames)==null?void 0:Y.label),style:(tt=t.styles)==null?void 0:tt.label},[o(d)]),e("span",{class:r(`${a}-item-content`,(nt=t.classNames)==null?void 0:nt.content),style:(et=t.styles)==null?void 0:et.content},[c(d)])])])})])})])])])])}}}),ft=v({name:"DescriptionsItem",props:{label:String,span:[Number,String,Object],labelStyle:Object,contentStyle:Object},setup(t,{slots:s}){return()=>{var a;return(a=s.default)==null?void 0:a.call(s)}}}),b=ht;b.Item=ft;const yt=v({__name:"DescriptionsBasic",setup(t){const s=[{label:"用户名",children:"Zhou Maomao"},{label:"手机号",children:"1810000000"},{label:"居住地",children:"杭州市"},{label:"备注",children:"学校"},{label:"联系地址",children:"浙江省杭州市西湖区古翠路",span:2}];return(a,i)=>(q(),B(p(b),{title:"用户信息",items:s}))}}),xt=`<template>
  <Descriptions title="用户信息" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '用户名', children: 'Zhou Maomao' },
  { label: '手机号', children: '1810000000' },
  { label: '居住地', children: '杭州市' },
  { label: '备注', children: '学校' },
  { label: '联系地址', children: '浙江省杭州市西湖区古翠路', span: 2 },
]
<\/script>
`,vt=v({__name:"DescriptionsBordered",setup(t){const s=[{label:"产品",children:"Cloud Database"},{label:"计费方式",children:"预付费"},{label:"自动续费",children:"已开通"},{label:"订单时间",children:"2018-04-24 18:00:00"},{label:"使用时长",children:"2年"},{label:"到期时间",children:"2020-04-24 18:00:00"},{label:"配置信息",children:"2核 4GB 80GB SSD",span:3}];return(a,i)=>(q(),B(p(b),{title:"用户信息",bordered:"",items:s}))}}),wt=`<template>
  <Descriptions title="用户信息" bordered :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

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
`,St={style:{display:"flex","flex-direction":"column",gap:"32px"}},Dt=v({__name:"DescriptionsClassNames",setup(t){const s=[{label:"姓名",children:"张三"},{label:"手机号",children:"138-0000-0000"},{label:"邮箱",children:"zhangsan@example.com"},{label:"住址",children:"浙江省杭州市西湖区某某路 123 号",span:2}],a=[{label:"产品名称",children:"Ant Design Vue"},{label:"版本号",children:"v4.0.0"},{label:"许可证",children:"MIT"},{label:"作者",children:"Ant Design Team"},{label:"仓库地址",children:"https://github.com/vueComponent/ant-design-vue",span:2}],i=[{label:"订单编号",children:"ORD20230615001"},{label:"下单时间",children:"2023-06-15 14:30:00"},{label:"订单状态",children:"已完成"}],n=[{label:"API 地址",children:"https://api.example.com"},{label:"超时时间",children:"30 秒"},{label:"重试次数",children:"3 次"}],g=[{label:"服务器",children:"Server-01"},{label:"状态",children:"运行中"},{label:"CPU 使用率",children:"45%"},{label:"内存使用率",children:"68%"},{label:"磁盘使用率",children:"52%"},{label:"网络流量",children:"125 MB/s"}];return(O,h)=>(q(),E("div",St,[l("div",null,[h[0]||(h[0]=l("div",{style:{"margin-bottom":"12px",color:"#666","font-size":"13px"}},"自定义标题和头部区域样式：",-1)),e(p(b),{title:"用户信息",extra:"更多操作",items:s,"class-names":{header:"custom-header",title:"custom-title",extra:"custom-extra"}})]),l("div",null,[h[1]||(h[1]=l("div",{style:{"margin-bottom":"12px",color:"#666","font-size":"13px"}},"自定义标签和内容区域样式：",-1)),e(p(b),{title:"产品信息",bordered:"",items:a,"class-names":{label:"custom-label",content:"custom-content"}})]),l("div",null,[h[2]||(h[2]=l("div",{style:{"margin-bottom":"12px",color:"#666","font-size":"13px"}},"垂直布局自定义行样式（hover 效果）：",-1)),e(p(b),{title:"订单详情",layout:"vertical",bordered:"",items:i,"class-names":{row:"custom-row",label:"custom-vertical-label"}})]),l("div",null,[h[3]||(h[3]=l("div",{style:{"margin-bottom":"12px",color:"#666","font-size":"13px"}},"使用 styles 内联样式：",-1)),e(p(b),{title:"配置信息",items:n,styles:{root:{border:"2px solid #1890ff",borderRadius:"12px",padding:"16px"},title:{fontSize:"18px",color:"#1890ff",fontWeight:600},label:{color:"#8c8c8c",fontWeight:500},content:{color:"#262626",fontWeight:600}}})]),l("div",null,[h[4]||(h[4]=l("div",{style:{"margin-bottom":"12px",color:"#666","font-size":"13px"}}," 组合使用 classNames 和 styles（渐变背景 + 自定义间距）： ",-1)),e(p(b),{title:"高级配置",extra:"编辑",items:g,"class-names":{root:"gradient-root",view:"gradient-view",label:"gradient-label",content:"gradient-content"},styles:{header:{padding:"16px 20px"},view:{padding:"16px 20px"}}})])]))}}),qt=rt(Dt,[["__scopeId","data-v-bf612d54"]]),Nt=`<template>
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
import { Descriptions } from 'ant-design-hmfw'

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
`,Ct=v({__name:"DescriptionsFilled",setup(t){const s=[{label:"产品",children:"Cloud Database",span:2},{label:"计费",children:"预付费"},{label:"时间",children:"18:00:00"},{label:"金额",children:"$80.00",span:"filled"},{label:"折扣",children:"$20.00",span:"filled"},{label:"实付",children:"$60.00"}];return(a,i)=>(q(),B(p(b),{title:"Span 填充示例",column:3,items:s}))}}),$t=`<template>
  <Descriptions title="Span 填充示例" :column="3" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '产品', children: 'Cloud Database', span: 2 },
  { label: '计费', children: '预付费' },
  { label: '时间', children: '18:00:00' },
  { label: '金额', children: '$80.00', span: 'filled' as const },
  { label: '折扣', children: '$20.00', span: 'filled' as const },
  { label: '实付', children: '$60.00' },
]
<\/script>
`,zt=v({__name:"DescriptionsResponsive",setup(t){const s=[{label:"产品",children:"Cloud Database"},{label:"计费",children:"预付费"},{label:"时间",children:"18:00:00"},{label:"金额",children:"$80.00"},{label:"折扣",children:"$20.00"},{label:"实付",children:"$60.00"}];return(a,i)=>(q(),B(p(b),{title:"响应式列数",column:{xs:1,sm:2,md:3},items:s}))}}),_t=`<template>
  <Descriptions title="响应式列数" :column="{ xs: 1, sm: 2, md: 3 }" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '产品', children: 'Cloud Database' },
  { label: '计费', children: '预付费' },
  { label: '时间', children: '18:00:00' },
  { label: '金额', children: '$80.00' },
  { label: '折扣', children: '$20.00' },
  { label: '实付', children: '$60.00' },
]
<\/script>
`,Bt=v({__name:"DescriptionsSizes",setup(t){const s=[{label:"产品",children:"Cloud Database"},{label:"计费",children:"预付费"},{label:"时间",children:"18:00:00"}];return(a,i)=>(q(),E(st,null,[e(p(b),{title:"尺寸示例",column:3,items:s}),i[0]||(i[0]=l("br",null,null,-1)),e(p(b),{title:"中等尺寸",size:"middle",column:3,items:s}),i[1]||(i[1]=l("br",null,null,-1)),e(p(b),{title:"小尺寸",size:"small",column:3,items:s})],64))}}),It=`<template>
  <Descriptions title="尺寸示例" :column="3" :items="items" />
  <br />
  <Descriptions title="中等尺寸" size="middle" :column="3" :items="items" />
  <br />
  <Descriptions title="小尺寸" size="small" :column="3" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '产品', children: 'Cloud Database' },
  { label: '计费', children: '预付费' },
  { label: '时间', children: '18:00:00' },
]
<\/script>
`,Pt=v({__name:"DescriptionsVertical",setup(t){const s=[{label:"用户名",children:"Zhou Maomao"},{label:"手机号",children:"1810000000"},{label:"居住地",children:"杭州市"},{label:"联系地址",children:"浙江省杭州市西湖区古翠路"}];return(a,i)=>(q(),B(p(b),{title:"用户信息",layout:"vertical",items:s}))}}),Mt=`<template>
  <Descriptions title="用户信息" layout="vertical" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '用户名', children: 'Zhou Maomao' },
  { label: '手机号', children: '1810000000' },
  { label: '居住地', children: '杭州市' },
  { label: '联系地址', children: '浙江省杭州市西湖区古翠路' },
]
<\/script>
`,At=v({__name:"DescriptionsVerticalBordered",setup(t){const s=[{label:"产品",children:"Cloud Database"},{label:"计费方式",children:"预付费"},{label:"自动续费",children:"已开通"},{label:"订单时间",children:"2018-04-24 18:00:00"},{label:"使用时长",children:"2年"},{label:"到期时间",children:"2020-04-24 18:00:00"},{label:"配置信息",children:"2核 4GB 80GB SSD",span:3}];return(a,i)=>(q(),B(p(b),{title:"用户信息",layout:"vertical",bordered:"",items:s}))}}),Et=`<template>
  <Descriptions title="用户信息" layout="vertical" bordered :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

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
`,Ot={class:"markdown-body"},Vt={__name:"descriptions",setup(t,{expose:s}){return s({frontmatter:{}}),(i,n)=>{const g=ut("DemoBlock");return q(),E("div",Ot,[n[0]||(n[0]=l("h1",{id:"descriptions-描述列表",tabindex:"-1"},"Descriptions 描述列表",-1)),n[1]||(n[1]=l("p",null,"成组展示多个只读字段。",-1)),n[2]||(n[2]=l("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=l("ul",null,[l("li",null,"常见于详情页的信息展示")],-1)),n[4]||(n[4]=l("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=l("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=l("p",null,"简单的展示。",-1)),e(g,{title:"基础用法",source:p(xt)},{default:z(()=>[e(yt)]),_:1},8,["source"]),n[7]||(n[7]=l("h3",{id:"带边框",tabindex:"-1"},"带边框",-1)),n[8]||(n[8]=l("p",null,"带边框和背景颜色列表。",-1)),e(g,{title:"带边框",source:p(wt)},{default:z(()=>[e(vt)]),_:1},8,["source"]),n[9]||(n[9]=l("h3",{id:"垂直布局",tabindex:"-1"},"垂直布局",-1)),n[10]||(n[10]=l("p",null,"垂直的列表。",-1)),e(g,{title:"垂直布局",source:p(Mt)},{default:z(()=>[e(Pt)]),_:1},8,["source"]),n[11]||(n[11]=l("h3",{id:"垂直布局带边框",tabindex:"-1"},"垂直布局带边框",-1)),n[12]||(n[12]=l("p",null,"垂直布局与边框模式的组合使用，确保列边框和行边框正确显示。",-1)),e(g,{title:"垂直布局带边框",source:p(Et)},{default:z(()=>[e(At)]),_:1},8,["source"]),n[13]||(n[13]=l("h3",{id:"响应式列数",tabindex:"-1"},"响应式列数",-1)),n[14]||(n[14]=l("p",null,"支持响应式的列数配置，窗口大小变化时自动调整列数布局。",-1)),e(g,{title:"响应式列数",source:p(_t)},{default:z(()=>[e(zt)]),_:1},8,["source"]),n[15]||(n[15]=l("h3",{id:"不同尺寸",tabindex:"-1"},"不同尺寸",-1)),n[16]||(n[16]=l("p",null,"支持 default、middle、small 三种尺寸。",-1)),e(g,{title:"不同尺寸",source:p(It)},{default:z(()=>[e(Bt)]),_:1},8,["source"]),n[17]||(n[17]=l("h3",{id:"span-填充",tabindex:"-1"},"Span 填充",-1)),n[18]||(n[18]=l("p",null,[M("使用 "),l("code",null,'span="filled"'),M(" 填充剩余列。")],-1)),e(g,{title:"Span 填充",source:p($t)},{default:z(()=>[e(Ct)]),_:1},8,["source"]),n[19]||(n[19]=l("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[20]||(n[20]=l("p",null,[M("通过 "),l("code",null,"classNames"),M(" / "),l("code",null,"styles"),M(" 对各子元素做细粒度样式控制。")],-1)),e(g,{title:"语义化 className 与 style",source:p(Nt)},{default:z(()=>[e(qt)]),_:1},8,["source"]),n[21]||(n[21]=mt(`<h2 id="api" tabindex="-1">API</h2><h3 id="descriptions-props" tabindex="-1">Descriptions Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>描述列表的标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>extra</td><td>描述列表的操作区域</td><td><code>string | VNode | slot</code></td><td>-</td></tr><tr><td>bordered</td><td>是否展示边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>column</td><td>一行的 DescriptionItems 数量,可以是响应式对象</td><td><code>number | Record&lt;Breakpoint, number&gt;</code></td><td><code>3</code></td></tr><tr><td>size</td><td>设置列表的大小</td><td><code>&#39;default&#39; | &#39;middle&#39; | &#39;small&#39; | &#39;medium&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>layout</td><td>描述布局</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>colon</td><td>配置 Descriptions.Item 的 colon 的默认值</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>items</td><td>描述列表的数据项</td><td><code>DescriptionsItem[]</code></td><td>-</td></tr><tr><td>labelStyle</td><td>自定义标签样式(全局)</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>contentStyle</td><td>自定义内容样式(全局)</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>DescriptionsClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>DescriptionsStyles</code></td><td>-</td></tr></tbody></table><h3 id="descriptionsitem" tabindex="-1">DescriptionsItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>内容的描述</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>内容</td><td><code>any</code></td><td>-</td></tr><tr><td>span</td><td>包含列的数量,可以是响应式对象或 ‘filled’</td><td><code>number | &#39;filled&#39; | Record&lt;Breakpoint, number&gt;</code></td><td><code>1</code></td></tr><tr><td>labelStyle</td><td>自定义标签样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>contentStyle</td><td>自定义内容样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="breakpoint" tabindex="-1">Breakpoint</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">Breakpoint</span> <span class="token operator">=</span> <span class="token string">&#39;xs&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;sm&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lg&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;xl&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;xxl&#39;</span>
</code></pre><p>响应式断点:</p><ul><li>xs: <code>&gt;= 0px</code></li><li>sm: <code>&gt;= 576px</code></li><li>md: <code>&gt;= 768px</code></li><li>lg: <code>&gt;= 992px</code></li><li>xl: <code>&gt;= 1200px</code></li><li>xxl: <code>&gt;= 1600px</code></li></ul><h2 id="功能特性" tabindex="-1">功能特性</h2><h3 id="垂直布局边框样式" tabindex="-1">垂直布局边框样式</h3><p>当 <code>layout=&quot;vertical&quot;</code> 与 <code>bordered</code> 同时启用时，组件会渲染为垂直分组的表格结构（label 与 content 分别独占一行）。 内置样式确保每一列之间存在垂直分隔线，同时保留行之间的水平分隔线，渲染效果与水平边框模式一致。</p><pre class="language-vue"><code class="language-vue">&lt;Descriptions title=&quot;用户信息&quot; layout=&quot;vertical&quot; bordered :items=&quot;items&quot; /&gt;
</code></pre><h3 id="响应式列数自动更新" tabindex="-1">响应式列数自动更新</h3><p><code>column</code> 属性支持传入响应式对象（按断点配置列数）。组件内部将 <code>useBreakpoint()</code> 实现为真正的响应式 composable：</p><ul><li>在 <code>onMounted</code> 中绑定 <code>window.resize</code> 事件监听</li><li>使用 <code>debounce</code> 防抖（100ms 延迟）优化 resize 性能，避免频繁重渲染</li><li>在 <code>onUnmounted</code> 中自动清理监听器</li></ul><p>当窗口大小跨越断点时，列数将自动重新计算并触发视图更新，无需用户手动刷新页面。</p><pre class="language-vue"><code class="language-vue">&lt;Descriptions :column=&quot;{ xs: 1, sm: 2, md: 3, lg: 4 }&quot; :items=&quot;items&quot; /&gt;
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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Descriptions
    title=&quot;用户信息&quot;
    extra=&quot;编辑&quot;
    :items=&quot;items&quot;
    :class-names=&quot;{
      header: &#39;custom-header&#39;,
      title: &#39;custom-title&#39;,
      label: &#39;custom-label&#39;,
      content: &#39;custom-content&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
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

:deep(.custom-label) {
  background: #f0f5ff;
  color: #1890ff;
  font-weight: 600;
}

:deep(.custom-content) {
  background: #fafafa;
  font-family: &#39;Monaco&#39;, monospace;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Descriptions
    title=&quot;配置信息&quot;
    :items=&quot;items&quot;
    :styles=&quot;{
      root: { border: &#39;2px solid #1890ff&#39;, borderRadius: &#39;12px&#39;, padding: &#39;16px&#39; },
      title: { fontSize: &#39;18px&#39;, color: &#39;#1890ff&#39;, fontWeight: 600 },
      label: { color: &#39;#8c8c8c&#39;, fontWeight: 500 },
      content: { color: &#39;#262626&#39;, fontWeight: 600 },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>item</code> 和 <code>itemContainer</code> 仅在水平无边框布局（<code>layout=&quot;horizontal&quot;</code> 且 <code>bordered={false}</code>）时生效</li><li>在垂直布局或有边框布局中，标签和内容分别使用 <code>&lt;th&gt;</code> 和 <code>&lt;td&gt;</code> 元素</li><li><code>header</code>、<code>title</code> 和 <code>extra</code> 仅在设置了 <code>title</code> 或 <code>extra</code> 属性时渲染</li><li><code>row</code> 应用于每一个表格行，可用于实现 hover 效果或斑马纹</li><li><code>label</code> 和 <code>content</code> 在所有布局模式下都会应用</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-text</code></td><td>主文本颜色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本颜色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框颜色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-fill-alter</code></td><td>备用填充色</td><td><code>rgba(0,0,0,0.02)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>标准字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-lg</code></td><td>大字号</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-line-height-base</code></td><td>标准行高</td><td><code>1.5714285714285714</code></td></tr><tr><td><code>--hmfw-line-height-lg</code></td><td>大行高</td><td><code>1.5</code></td></tr><tr><td><code>--hmfw-padding-xs</code></td><td>超小内边距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-padding-sm</code></td><td>小内边距</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-padding</code></td><td>标准内边距</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-padding-lg</code></td><td>大内边距</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-margin</code></td><td>标准外边距</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-margin-xs</code></td><td>超小外边距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大圆角</td><td><code>8px</code></td></tr></tbody></table>`,40))])}}};export{Vt as default};
