import{B as $}from"./Button-DijKNe_E.js";import{n as g,M as E,L as I,D as P,o as v,e as w,z as m,j as y,m as d,J as r,Q as i,g as t,h,I as C,F as V,E as F,G as H,l as p,k as R}from"./index-BIkAb7lZ.js";import{T as U}from"./Tooltip-B_1Hxmej.js";import"./icons-DLCoPw-s.js";import"./cls-S9IiI6wd.js";import"./Icon-DOjVoSFw.js";const c=g({name:"Popconfirm",inheritAttrs:!1,props:{title:[String,Number,Object,Function],description:[String,Number,Object,Function],icon:{type:[String,Number,Object,Function],default:"⚠"},okText:String,cancelText:String,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,showCancel:{type:Boolean,default:!0},trigger:{type:[String,Array],default:"click"},placement:{type:String,default:"top"},open:{type:Boolean,default:void 0},defaultOpen:Boolean,disabled:Boolean,arrow:{type:[Boolean,Object],default:!0},mouseEnterDelay:{type:Number,default:.1},mouseLeaveDelay:{type:Number,default:.1},autoAdjustOverflow:{type:Boolean,default:!0},zIndex:Number,destroyOnHidden:Boolean,destroyTooltipOnHide:Boolean,getPopupContainer:Function,overlayStyle:Object,overlayInnerStyle:Object},emits:["update:open","openChange","afterOpenChange","confirm","cancel"],setup(o,{slots:l,emit:e,attrs:u}){const n=E("popconfirm"),f=I(),a=P(o.defaultOpen??!1),k=w(()=>o.open!==void 0),N=w(()=>k.value?o.open:a.value),T=s=>{o.disabled&&s||(k.value||(a.value=s),e("update:open",s),e("openChange",s))},B=(s,x)=>{if(x)return x();if(typeof s=="function")return s();if(s!=null&&s!=="")return s},z=s=>{e("confirm",s),T(!1)},D=s=>{e("cancel",s),T(!1)},M=w(()=>{const s=o.title,x=o.description;return s!=null&&s!==""||x!=null&&x!==""||!!l.title||!!l.description});return()=>{const s=B(o.title,l.title),x=B(o.description,l.description),_=B(o.icon,l.icon),A=o.cancelText??f.value.Modal.cancelText,L=o.okText??f.value.Modal.okText,S=o.okType==="danger",j=S?"primary":o.okType,O=[v("div",{class:`${n}-message`},[_&&v("span",{class:`${n}-message-icon`},_),v("div",{class:`${n}-message-title`},s)])];return x&&O.push(v("div",{class:`${n}-description`},x)),O.push(v("div",{class:`${n}-buttons`},[o.showCancel&&v($,{size:"small",...o.cancelButtonProps,onClick:D},{default:()=>A}),v($,{size:"small",type:j,danger:S,...o.okButtonProps,onClick:z},{default:()=>L})])),v(U,{...u,customPrefixCls:n,arrow:o.arrow,placement:o.placement,trigger:o.trigger,open:N.value,defaultOpen:o.defaultOpen,mouseEnterDelay:o.mouseEnterDelay,mouseLeaveDelay:o.mouseLeaveDelay,disabled:o.disabled,autoAdjustOverflow:o.autoAdjustOverflow,zIndex:o.zIndex,destroyOnHidden:o.destroyOnHidden,destroyTooltipOnHide:o.destroyTooltipOnHide,getPopupContainer:o.getPopupContainer,popupStyle:o.overlayStyle,"onUpdate:open":b=>T(b),onAfterOpenChange:b=>e("afterOpenChange",b)},M.value&&!o.disabled?{default:()=>{var b;return(b=l.default)==null?void 0:b.call(l)},title:()=>O}:{default:()=>{var b;return(b=l.default)==null?void 0:b.call(l)}})}}}),W={style:{display:"flex",gap:"16px","align-items":"center"}},G=g({__name:"PopconfirmAsync",setup(o){const l=P(!1),e=P(!1);function u(){l.value=!0,setTimeout(()=>{console.log("提交成功"),l.value=!1},2e3)}function n(){e.value=!0,setTimeout(()=>{console.log("删除成功"),e.value=!1},2e3)}return(f,a)=>(m(),y("div",W,[d(r(c),{title:"确定要提交吗？",description:"提交后将发送到服务器","ok-text":"提交","cancel-text":"取消","ok-button-props":{loading:l.value},onConfirm:u},{default:i(()=>[...a[0]||(a[0]=[t("button",null,"异步提交",-1)])]),_:1},8,["ok-button-props"]),d(r(c),{title:"确定要执行吗？","ok-text":"确定","cancel-text":"取消","ok-button-props":{disabled:!0}},{default:i(()=>[...a[1]||(a[1]=[t("button",null,"确定按钮禁用",-1)])]),_:1}),d(r(c),{title:"确定要删除吗？","ok-type":"danger","ok-text":"强制删除","cancel-text":"取消","ok-button-props":{loading:e.value},"cancel-button-props":{disabled:e.value},onConfirm:n},{default:i(()=>[...a[2]||(a[2]=[t("button",null,"强制删除",-1)])]),_:1},8,["ok-button-props","cancel-button-props"])]))}}),J=`<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <!-- 异步确认 -->
    <Popconfirm
      title="确定要提交吗？"
      description="提交后将发送到服务器"
      ok-text="提交"
      cancel-text="取消"
      :ok-button-props="{ loading: loading1 }"
      @confirm="handleAsyncConfirm"
    >
      <button>异步提交</button>
    </Popconfirm>

    <!-- 禁用按钮 -->
    <Popconfirm
      title="确定要执行吗？"
      ok-text="确定"
      cancel-text="取消"
      :ok-button-props="{ disabled: true }"
    >
      <button>确定按钮禁用</button>
    </Popconfirm>

    <!-- 自定义按钮属性 -->
    <Popconfirm
      title="确定要删除吗？"
      ok-type="danger"
      ok-text="强制删除"
      cancel-text="取消"
      :ok-button-props="{ loading: loading2 }"
      :cancel-button-props="{ disabled: loading2 }"
      @confirm="handleForceDelete"
    >
      <button>强制删除</button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Popconfirm } from 'ant-design-hmfw'

const loading1 = ref(false)
const loading2 = ref(false)

function handleAsyncConfirm() {
  loading1.value = true
  // 模拟异步操作
  setTimeout(() => {
    console.log('提交成功')
    loading1.value = false
  }, 2000)
}

function handleForceDelete() {
  loading2.value = true
  // 模拟异步删除
  setTimeout(() => {
    console.log('删除成功')
    loading2.value = false
  }, 2000)
}
<\/script>
`,Q=g({__name:"PopconfirmBasic",setup(o){function l(){console.log("已确认删除")}function e(){console.log("已取消")}return(u,n)=>(m(),h(r(c),{title:"确定要删除吗？","ok-text":"确定","cancel-text":"取消",onConfirm:l,onCancel:e},{default:i(()=>[...n[0]||(n[0]=[t("button",null,"删除",-1)])]),_:1}))}}),q=`<template>
  <Popconfirm
    title="确定要删除吗？"
    ok-text="确定"
    cancel-text="取消"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <button>删除</button>
  </Popconfirm>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-hmfw'

function onConfirm() {
  console.log('已确认删除')
}

function onCancel() {
  console.log('已取消')
}
<\/script>
`,K={style:{display:"flex","flex-direction":"column",gap:"16px"}},X={style:{display:"flex",gap:"16px","align-items":"center"}},Y={style:{display:"flex",gap:"16px","align-items":"center"}},Z=["disabled"],tt={style:{display:"flex",gap:"16px","align-items":"center"}},nt=g({__name:"PopconfirmControlled",setup(o){const l=P(!1),e=P(!1);function u(){console.log("已确认"),l.value=!1}function n(){console.log("已取消"),l.value=!1}return(f,a)=>(m(),y("div",K,[t("div",X,[d(r(c),{open:l.value,"onUpdate:open":a[0]||(a[0]=k=>l.value=k),title:"确定要删除吗？","ok-text":"删除","cancel-text":"取消",onConfirm:u,onCancel:n},{default:i(()=>[...a[4]||(a[4]=[t("button",null,"受控显示",-1)])]),_:1},8,["open"]),t("button",{onClick:a[1]||(a[1]=k=>l.value=!l.value)},C(l.value?"关闭":"打开"),1),t("span",null,"当前状态: "+C(l.value?"显示":"隐藏"),1)]),t("div",Y,[d(r(c),{title:"确定要删除吗？","ok-text":"删除","cancel-text":"取消",disabled:e.value},{default:i(()=>[t("button",{disabled:e.value},C(e.value?"已禁用":"可点击"),9,Z)]),_:1},8,["disabled"]),t("button",{onClick:a[2]||(a[2]=k=>e.value=!e.value)}," 切换禁用状态 ")]),t("div",tt,[d(r(c),{title:"点击确定继续","ok-text":"确定","show-cancel":!1,onConfirm:a[3]||(a[3]=()=>console.log("已确定"))},{default:i(()=>[...a[5]||(a[5]=[t("button",null,"无取消按钮",-1)])]),_:1})])]))}}),et=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <!-- 受控模式 -->
    <div style="display: flex; gap: 16px; align-items: center;">
      <Popconfirm
        v-model:open="visible"
        title="确定要删除吗？"
        ok-text="删除"
        cancel-text="取消"
        @confirm="handleConfirm"
        @cancel="handleCancel"
      >
        <button>受控显示</button>
      </Popconfirm>
      <button @click="visible = !visible">
        {{ visible ? '关闭' : '打开' }}
      </button>
      <span>当前状态: {{ visible ? '显示' : '隐藏' }}</span>
    </div>

    <!-- 禁用状态 -->
    <div style="display: flex; gap: 16px; align-items: center;">
      <Popconfirm
        title="确定要删除吗？"
        ok-text="删除"
        cancel-text="取消"
        :disabled="disabled"
      >
        <button :disabled="disabled">{{ disabled ? '已禁用' : '可点击' }}</button>
      </Popconfirm>
      <button @click="disabled = !disabled">
        切换禁用状态
      </button>
    </div>

    <!-- 隐藏取消按钮 -->
    <div style="display: flex; gap: 16px; align-items: center;">
      <Popconfirm
        title="点击确定继续"
        ok-text="确定"
        :show-cancel="false"
        @confirm="() => console.log('已确定')"
      >
        <button>无取消按钮</button>
      </Popconfirm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Popconfirm } from 'ant-design-hmfw'

const visible = ref(false)
const disabled = ref(false)

function handleConfirm() {
  console.log('已确认')
  visible.value = false
}

function handleCancel() {
  console.log('已取消')
  visible.value = false
}
<\/script>
`,ot={style:{display:"flex",gap:"16px","align-items":"center"}},lt=g({__name:"PopconfirmCustom",setup(o){return(l,e)=>(m(),y("div",ot,[d(r(c),{title:"自定义 z-index",description:"这个气泡框的 z-index 是 2000","z-index":2e3,"ok-text":"确定","cancel-text":"取消"},{default:i(()=>[...e[0]||(e[0]=[t("button",null,"自定义 z-index",-1)])]),_:1}),d(r(c),{title:"自定义样式",description:"这个气泡框使用了自定义样式","ok-text":"确定","cancel-text":"取消","overlay-style":{maxWidth:"400px"},"overlay-inner-style":{backgroundColor:"#f0f5ff",padding:"16px"}},{default:i(()=>[...e[1]||(e[1]=[t("button",null,"自定义样式",-1)])]),_:1}),d(r(c),{title:"无箭头气泡框","ok-text":"确定","cancel-text":"取消",arrow:!1},{default:i(()=>[...e[2]||(e[2]=[t("button",null,"隐藏箭头",-1)])]),_:1}),d(r(c),{title:"箭头指向中心","ok-text":"确定","cancel-text":"取消",arrow:{pointAtCenter:!0}},{default:i(()=>[...e[3]||(e[3]=[t("button",null,"箭头指向中心",-1)])]),_:1})]))}}),dt=`<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <!-- 自定义 z-index -->
    <Popconfirm
      title="自定义 z-index"
      description="这个气泡框的 z-index 是 2000"
      :z-index="2000"
      ok-text="确定"
      cancel-text="取消"
    >
      <button>自定义 z-index</button>
    </Popconfirm>

    <!-- 自定义样式 -->
    <Popconfirm
      title="自定义样式"
      description="这个气泡框使用了自定义样式"
      ok-text="确定"
      cancel-text="取消"
      :overlay-style="{ maxWidth: '400px' }"
      :overlay-inner-style="{ backgroundColor: '#f0f5ff', padding: '16px' }"
    >
      <button>自定义样式</button>
    </Popconfirm>

    <!-- 隐藏箭头 -->
    <Popconfirm
      title="无箭头气泡框"
      ok-text="确定"
      cancel-text="取消"
      :arrow="false"
    >
      <button>隐藏箭头</button>
    </Popconfirm>

    <!-- 箭头指向中心 -->
    <Popconfirm
      title="箭头指向中心"
      ok-text="确定"
      cancel-text="取消"
      :arrow="{ pointAtCenter: true }"
    >
      <button>箭头指向中心</button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-hmfw'
<\/script>
`,it=g({__name:"PopconfirmCustomText",setup(o){function l(){console.log("已提交")}return(e,u)=>(m(),h(r(c),{title:"确定要提交吗？",description:"提交后将无法修改，请确认信息无误。","ok-text":"提交","cancel-text":"再想想",onConfirm:l},{default:i(()=>[...u[0]||(u[0]=[t("button",null,"提交",-1)])]),_:1}))}}),rt=`<template>
  <Popconfirm
    title="确定要提交吗？"
    description="提交后将无法修改，请确认信息无误。"
    ok-text="提交"
    cancel-text="再想想"
    @confirm="onConfirm"
  >
    <button>提交</button>
  </Popconfirm>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-hmfw'

function onConfirm() {
  console.log('已提交')
}
<\/script>
`,ct={style:{display:"flex",gap:"16px","align-items":"center"}},at=g({__name:"PopconfirmDanger",setup(o){function l(){console.log("已确认操作")}return(e,u)=>(m(),y("div",ct,[d(r(c),{title:"确定要删除吗？",description:"删除后数据将无法恢复","ok-type":"danger","ok-text":"删除","cancel-text":"取消",onConfirm:l},{default:i(()=>[...u[0]||(u[0]=[t("button",null,"删除（danger）",-1)])]),_:1}),d(r(c),{title:"确定要保存吗？","ok-type":"primary","ok-text":"保存","cancel-text":"取消",onConfirm:l},{default:i(()=>[...u[1]||(u[1]=[t("button",null,"保存（primary）",-1)])]),_:1}),d(r(c),{title:"确定要继续吗？","ok-type":"default","ok-text":"继续","cancel-text":"取消",onConfirm:l},{default:i(()=>[...u[2]||(u[2]=[t("button",null,"继续（default）",-1)])]),_:1})]))}}),st=`<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <!-- 危险操作 - 使用 danger 简写 -->
    <Popconfirm
      title="确定要删除吗？"
      description="删除后数据将无法恢复"
      ok-type="danger"
      ok-text="删除"
      cancel-text="取消"
      @confirm="onConfirm"
    >
      <button>删除（danger）</button>
    </Popconfirm>

    <!-- 普通主题 -->
    <Popconfirm
      title="确定要保存吗？"
      ok-type="primary"
      ok-text="保存"
      cancel-text="取消"
      @confirm="onConfirm"
    >
      <button>保存（primary）</button>
    </Popconfirm>

    <!-- 默认主题 -->
    <Popconfirm
      title="确定要继续吗？"
      ok-type="default"
      ok-text="继续"
      cancel-text="取消"
      @confirm="onConfirm"
    >
      <button>继续（default）</button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-hmfw'

function onConfirm() {
  console.log('已确认操作')
}
<\/script>
`,ut={style:{display:"flex",gap:"16px"}},pt=g({__name:"PopconfirmIcon",setup(o){return(l,e)=>(m(),y("div",ut,[d(r(c),{title:"确定要删除吗？",icon:"🗑️","ok-text":"删除","cancel-text":"取消"},{default:i(()=>[...e[0]||(e[0]=[t("button",null,"自定义图标",-1)])]),_:1}),d(r(c),{title:"确定要继续吗？","ok-text":"继续","cancel-text":"取消"},{icon:i(()=>[...e[1]||(e[1]=[t("span",{style:{color:"#1890ff","font-size":"16px"}},"ℹ️",-1)])]),default:i(()=>[e[2]||(e[2]=t("button",null,"插槽图标",-1))]),_:1}),d(r(c),{title:"确定要提交吗？",icon:"","ok-text":"提交","cancel-text":"取消"},{default:i(()=>[...e[3]||(e[3]=[t("button",null,"无图标",-1)])]),_:1})]))}}),ft=`<template>
  <div style="display: flex; gap: 16px;">
    <!-- 自定义图标 -->
    <Popconfirm
      title="确定要删除吗？"
      icon="🗑️"
      ok-text="删除"
      cancel-text="取消"
    >
      <button>自定义图标</button>
    </Popconfirm>

    <!-- 使用插槽自定义图标 -->
    <Popconfirm
      title="确定要继续吗？"
      ok-text="继续"
      cancel-text="取消"
    >
      <template #icon>
        <span style="color: #1890ff; font-size: 16px;">ℹ️</span>
      </template>
      <button>插槽图标</button>
    </Popconfirm>

    <!-- 无图标 -->
    <Popconfirm
      title="确定要提交吗？"
      :icon="''"
      ok-text="提交"
      cancel-text="取消"
    >
      <button>无图标</button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-hmfw'
<\/script>
`,mt={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},gt=g({__name:"PopconfirmPlacement",setup(o){const l=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(e,u)=>(m(),y("div",mt,[(m(),y(V,null,F(l,n=>d(r(c),{key:n,placement:n,title:"确定要执行此操作吗？",onConfirm:()=>console.log(n)},{default:i(()=>[t("button",null,C(n),1)]),_:2},1032,["placement","onConfirm"])),64))]))}}),xt=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Popconfirm
      v-for="placement in placements"
      :key="placement"
      :placement="placement"
      title="确定要执行此操作吗？"
      @confirm="() => console.log(placement)"
    >
      <button>{{ placement }}</button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-hmfw'

const placements = [
  'topLeft', 'top', 'topRight',
  'leftTop', 'left', 'leftBottom',
  'rightTop', 'right', 'rightBottom',
  'bottomLeft', 'bottom', 'bottomRight',
]
<\/script>
`,bt={style:{display:"flex",gap:"16px","align-items":"center"}},yt=g({__name:"PopconfirmTrigger",setup(o){return(l,e)=>(m(),y("div",bt,[d(r(c),{title:"确定要删除吗？",trigger:"hover","ok-text":"删除","cancel-text":"取消",onConfirm:e[0]||(e[0]=()=>console.log("hover 确认"))},{default:i(()=>[...e[4]||(e[4]=[t("button",null,"鼠标悬停触发",-1)])]),_:1}),d(r(c),{title:"确定要删除吗？",trigger:"click","ok-text":"删除","cancel-text":"取消",onConfirm:e[1]||(e[1]=()=>console.log("click 确认"))},{default:i(()=>[...e[5]||(e[5]=[t("button",null,"点击触发",-1)])]),_:1}),d(r(c),{title:"确定要删除吗？",trigger:"focus","ok-text":"删除","cancel-text":"取消",onConfirm:e[2]||(e[2]=()=>console.log("focus 确认"))},{default:i(()=>[...e[6]||(e[6]=[t("button",null,"聚焦触发",-1)])]),_:1}),d(r(c),{title:"确定要删除吗？",trigger:"contextMenu","ok-text":"删除","cancel-text":"取消",onConfirm:e[3]||(e[3]=()=>console.log("contextMenu 确认"))},{default:i(()=>[...e[7]||(e[7]=[t("button",null,"右键触发",-1)])]),_:1})]))}}),vt=`<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <!-- hover 触发 -->
    <Popconfirm
      title="确定要删除吗？"
      trigger="hover"
      ok-text="删除"
      cancel-text="取消"
      @confirm="() => console.log('hover 确认')"
    >
      <button>鼠标悬停触发</button>
    </Popconfirm>

    <!-- click 触发（默认） -->
    <Popconfirm
      title="确定要删除吗？"
      trigger="click"
      ok-text="删除"
      cancel-text="取消"
      @confirm="() => console.log('click 确认')"
    >
      <button>点击触发</button>
    </Popconfirm>

    <!-- focus 触发 -->
    <Popconfirm
      title="确定要删除吗？"
      trigger="focus"
      ok-text="删除"
      cancel-text="取消"
      @confirm="() => console.log('focus 确认')"
    >
      <button>聚焦触发</button>
    </Popconfirm>

    <!-- contextMenu 触发 -->
    <Popconfirm
      title="确定要删除吗？"
      trigger="contextMenu"
      ok-text="删除"
      cancel-text="取消"
      @confirm="() => console.log('contextMenu 确认')"
    >
      <button>右键触发</button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-hmfw'
<\/script>
`,kt={class:"markdown-body"},_t={__name:"popconfirm",setup(o,{expose:l}){return l({frontmatter:{}}),(u,n)=>{const f=H("DemoBlock");return m(),y("div",kt,[n[0]||(n[0]=t("h1",{id:"popconfirm-",tabindex:"-1"},"Popconfirm 气泡确认框",-1)),n[1]||(n[1]=t("p",null,"点击元素，弹出气泡式的确认框。",-1)),n[2]||(n[2]=t("h2",{id:"",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=t("ul",null,[t("li",null,"目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户"),t("li",null,"和 confirm 弹出的全屏居中模态对话框相比，交互形式更轻量")],-1)),n[4]||(n[4]=t("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=t("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=t("p",null,"最简单的用法。",-1)),d(f,{title:"基础用法",source:r(q)},{default:i(()=>[d(Q)]),_:1},8,["source"]),n[7]||(n[7]=t("h3",{id:"-3",tabindex:"-1"},"自定义按钮文字",-1)),n[8]||(n[8]=t("p",null,"自定义确认按钮和取消按钮的文字。",-1)),d(f,{title:"自定义按钮文字",source:r(rt)},{default:i(()=>[d(it)]),_:1},8,["source"]),n[9]||(n[9]=t("h3",{id:"-4",tabindex:"-1"},"不同位置",-1)),n[10]||(n[10]=t("p",null,"位置有十二个方向。",-1)),d(f,{title:"不同位置",source:r(xt)},{default:i(()=>[d(gt)]),_:1},8,["source"]),n[11]||(n[11]=t("h3",{id:"-5",tabindex:"-1"},"自定义图标",-1)),n[12]||(n[12]=t("p",null,[p("可以通过 "),t("code",null,"icon"),p(" 属性或插槽自定义图标，也可以设置为空字符串隐藏图标。")],-1)),d(f,{title:"自定义图标",source:r(ft)},{default:i(()=>[d(pt)]),_:1},8,["source"]),n[13]||(n[13]=t("h3",{id:"-6",tabindex:"-1"},"按钮类型",-1)),n[14]||(n[14]=t("p",null,[p("使用 "),t("code",null,"okType"),p(" 设置确认按钮的类型。"),t("code",null,"danger"),p(" 是 "),t("code",null,"primary + danger"),p(" 的简写形式。")],-1)),d(f,{title:"按钮类型",source:r(st)},{default:i(()=>[d(at)]),_:1},8,["source"]),n[15]||(n[15]=t("h3",{id:"-7",tabindex:"-1"},"异步关闭",-1)),n[16]||(n[16]=t("p",null,[p("通过 "),t("code",null,"okButtonProps"),p(" 和 "),t("code",null,"cancelButtonProps"),p(" 可以控制按钮的 loading 状态，实现异步确认。")],-1)),d(f,{title:"异步关闭",source:r(J)},{default:i(()=>[d(G)]),_:1},8,["source"]),n[17]||(n[17]=t("h3",{id:"-8",tabindex:"-1"},"受控模式",-1)),n[18]||(n[18]=t("p",null,[p("使用 "),t("code",null,"v-model:open"),p(" 控制气泡框的显示隐藏，可以通过 "),t("code",null,"disabled"),p(" 禁用，也可以隐藏取消按钮。")],-1)),d(f,{title:"受控模式",source:r(et)},{default:i(()=>[d(nt)]),_:1},8,["source"]),n[19]||(n[19]=t("h3",{id:"-9",tabindex:"-1"},"触发方式",-1)),n[20]||(n[20]=t("p",null,[p("通过 "),t("code",null,"trigger"),p(" 设置触发行为，支持 "),t("code",null,"hover"),p("、"),t("code",null,"click"),p("、"),t("code",null,"focus"),p("、"),t("code",null,"contextMenu"),p("。")],-1)),d(f,{title:"触发方式",source:r(vt)},{default:i(()=>[d(yt)]),_:1},8,["source"]),n[21]||(n[21]=t("h3",{id:"-10",tabindex:"-1"},"自定义配置",-1)),n[22]||(n[22]=t("p",null,"可以自定义 z-index、样式、箭头等配置。",-1)),d(f,{title:"自定义配置",source:r(dt)},{default:i(()=>[d(lt)]),_:1},8,["source"]),n[23]||(n[23]=R('<h2 id="api" tabindex="-1">API</h2><h3 id="popconfirm-props" tabindex="-1">Popconfirm Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>确认框标题（空值时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>description</td><td>确认框描述</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>icon</td><td>提示图标，slot 优先级高于 prop</td><td><code>string | VNode | () =&gt; VNode | slot</code></td><td><code>&#39;⚠&#39;</code></td></tr><tr><td>okText</td><td>确认按钮文字</td><td><code>string</code></td><td>locale 默认值</td></tr><tr><td>cancelText</td><td>取消按钮文字</td><td><code>string</code></td><td>locale 默认值</td></tr><tr><td>okType</td><td>确认按钮类型，<code>&#39;danger&#39;</code> 是 <code>primary + danger</code> 的简写</td><td><code>ButtonType | &#39;danger&#39;</code></td><td><code>&#39;primary&#39;</code></td></tr><tr><td>okButtonProps</td><td>确认按钮的额外 props（loading/disabled 等）</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>cancelButtonProps</td><td>取消按钮的额外 props</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>showCancel</td><td>是否显示取消按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>trigger</td><td>触发行为，可设单值或数组</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39; | &#39;contextMenu&#39;</code></td><td><code>&#39;click&#39;</code></td></tr><tr><td>placement</td><td>气泡框位置，溢出视口时自动翻转</td><td>12 个方向（同 Tooltip）</td><td><code>&#39;top&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示（非受控）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>禁用，禁用时点击触发器不会弹出</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>arrow</td><td>是否显示箭头，可对象配置</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入延时显示（trigger=hover），单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出延时隐藏（trigger=hover），单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>autoAdjustOverflow</td><td>浮层超出视口时自动翻转方向</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>自定义浮层 z-index</td><td><code>number</code></td><td><code>1070</code></td></tr><tr><td>destroyOnHidden</td><td>隐藏时销毁浮层 DOM</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getPopupContainer</td><td>自定义浮层挂载容器（默认 <code>body</code>）</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td>-</td></tr><tr><td>overlayStyle</td><td>卡片外层样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr><tr><td>overlayInnerStyle</td><td>卡片内层样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr></tbody></table><h3 id="popconfirm-events" tabindex="-1">Popconfirm Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击确认的回调（携带 MouseEvent）</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>cancel</td><td>点击取消的回调（携带 MouseEvent）</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>update:open</td><td>显示隐藏的回调（v-model）</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>浮层动画结束时触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="popconfirm-slots" tabindex="-1">Popconfirm Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发气泡确认框的元素</td></tr><tr><td>title</td><td>标题（与 <code>title</code> prop 二选一，slot 优先）</td></tr><tr><td>description</td><td>描述（与 <code>description</code> prop 二选一，slot 优先）</td></tr><tr><td>icon</td><td>图标（与 <code>icon</code> prop 二选一，slot 优先）</td></tr></tbody></table>',7))])}}};export{_t as default};
