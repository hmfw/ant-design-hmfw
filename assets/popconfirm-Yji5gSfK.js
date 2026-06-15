import{B as c}from"./Button-Cw7qEaQa.js";import{o as x,N as j,M as H,E as B,p as k,f as w,A as g,k as b,n,K as l,R as e,m as i,i as N,h as d,J as C,F as V,G as F,H as I,l as R}from"./index-C7r7ERgN.js";import{T as U}from"./Tooltip-BYigmGN0.js";import"./cls-S9IiI6wd.js";import"./Icon-Bn-1ylNX.js";import"./LoadingOutlined-CFTLq47r.js";const u=x({name:"Popconfirm",inheritAttrs:!1,props:{title:[String,Number,Object,Function],description:[String,Number,Object,Function],icon:{type:[String,Number,Object,Function],default:"⚠"},okText:String,cancelText:String,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,showCancel:{type:Boolean,default:!0},trigger:{type:[String,Array],default:"click"},placement:{type:String,default:"top"},open:{type:Boolean,default:void 0},defaultOpen:Boolean,disabled:Boolean,arrow:{type:[Boolean,Object],default:!0},mouseEnterDelay:{type:Number,default:.1},mouseLeaveDelay:{type:Number,default:.1},autoAdjustOverflow:{type:Boolean,default:!0},zIndex:Number,destroyOnHidden:Boolean,destroyTooltipOnHide:Boolean,getPopupContainer:Function,overlayStyle:Object,overlayInnerStyle:Object},emits:["update:open","openChange","afterOpenChange","confirm","cancel"],setup(r,{slots:a,emit:o,attrs:f}){const t=j("popconfirm"),m=H(),s=B(r.defaultOpen??!1),P=w(()=>r.open!==void 0),h=w(()=>P.value?r.open:s.value),_=p=>{r.disabled&&p||(P.value||(s.value=p),o("update:open",p),o("openChange",p))},T=(p,y)=>{if(y)return y();if(typeof p=="function")return p();if(p!=null&&p!=="")return p},z=p=>{o("confirm",p),_(!1)},D=p=>{o("cancel",p),_(!1)},A=w(()=>{const p=r.title,y=r.description;return p!=null&&p!==""||y!=null&&y!==""||!!a.title||!!a.description});return()=>{const p=T(r.title,a.title),y=T(r.description,a.description),S=T(r.icon,a.icon),M=r.cancelText??m.value.Modal.cancelText,L=r.okText??m.value.Modal.okText,$=r.okType==="danger",E=$?"primary":r.okType,O=[k("div",{class:`${t}-message`},[S&&k("span",{class:`${t}-message-icon`},S),k("div",{class:`${t}-message-title`},p)])];return y&&O.push(k("div",{class:`${t}-description`},y)),O.push(k("div",{class:`${t}-buttons`},[r.showCancel&&k(c,{size:"small",...r.cancelButtonProps,onClick:D},{default:()=>M}),k(c,{size:"small",type:E,danger:$,...r.okButtonProps,onClick:z},{default:()=>L})])),k(U,{...f,customPrefixCls:t,arrow:r.arrow,placement:r.placement,trigger:r.trigger,open:h.value,defaultOpen:r.defaultOpen,mouseEnterDelay:r.mouseEnterDelay,mouseLeaveDelay:r.mouseLeaveDelay,disabled:r.disabled,autoAdjustOverflow:r.autoAdjustOverflow,zIndex:r.zIndex,destroyOnHidden:r.destroyOnHidden,destroyTooltipOnHide:r.destroyTooltipOnHide,getPopupContainer:r.getPopupContainer,popupStyle:r.overlayStyle,"onUpdate:open":v=>_(v),onAfterOpenChange:v=>o("afterOpenChange",v)},A.value&&!r.disabled?{default:()=>{var v;return(v=a.default)==null?void 0:v.call(a)},title:()=>O}:{default:()=>{var v;return(v=a.default)==null?void 0:v.call(a)}})}}}),W={style:{display:"flex",gap:"16px","align-items":"center"}},G=x({__name:"PopconfirmAsync",setup(r){const a=B(!1),o=B(!1);function f(){a.value=!0,setTimeout(()=>{console.log("提交成功"),a.value=!1},2e3)}function t(){o.value=!0,setTimeout(()=>{console.log("删除成功"),o.value=!1},2e3)}return(m,s)=>(g(),b("div",W,[n(l(u),{title:"确定要提交吗？",description:"提交后将发送到服务器","ok-text":"提交","cancel-text":"取消","ok-button-props":{loading:a.value},onConfirm:f},{default:e(()=>[n(l(c),null,{default:e(()=>[...s[0]||(s[0]=[i("异步提交",-1)])]),_:1})]),_:1},8,["ok-button-props"]),n(l(u),{title:"确定要执行吗？","ok-text":"确定","cancel-text":"取消","ok-button-props":{disabled:!0}},{default:e(()=>[n(l(c),null,{default:e(()=>[...s[1]||(s[1]=[i("确定按钮禁用",-1)])]),_:1})]),_:1}),n(l(u),{title:"确定要删除吗？","ok-type":"danger","ok-text":"强制删除","cancel-text":"取消","ok-button-props":{loading:o.value},"cancel-button-props":{disabled:o.value},onConfirm:t},{default:e(()=>[n(l(c),null,{default:e(()=>[...s[2]||(s[2]=[i("强制删除",-1)])]),_:1})]),_:1},8,["ok-button-props","cancel-button-props"])]))}}),J=`<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <!-- 异步确认 -->
    <Popconfirm
      title="确定要提交吗？"
      description="提交后将发送到服务器"
      ok-text="提交"
      cancel-text="取消"
      :ok-button-props="{ loading: loading1 }"
      @confirm="handleAsyncConfirm"
    >
      <Button>异步提交</Button>
    </Popconfirm>

    <!-- 禁用按钮 -->
    <Popconfirm title="确定要执行吗？" ok-text="确定" cancel-text="取消" :ok-button-props="{ disabled: true }">
      <Button>确定按钮禁用</Button>
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
      <Button>强制删除</Button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Popconfirm, Button } from 'ant-design-hmfw'

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
`,K=x({__name:"PopconfirmBasic",setup(r){function a(){console.log("已确认删除")}function o(){console.log("已取消")}return(f,t)=>(g(),N(l(u),{title:"确定要删除吗？","ok-text":"确定","cancel-text":"取消",onConfirm:a,onCancel:o},{default:e(()=>[n(l(c),null,{default:e(()=>[...t[0]||(t[0]=[i("删除",-1)])]),_:1})]),_:1}))}}),q=`<template>
  <Popconfirm title="确定要删除吗？" ok-text="确定" cancel-text="取消" @confirm="onConfirm" @cancel="onCancel">
    <Button>删除</Button>
  </Popconfirm>
</template>

<script setup lang="ts">
import { Popconfirm, Button } from 'ant-design-hmfw'

function onConfirm() {
  console.log('已确认删除')
}

function onCancel() {
  console.log('已取消')
}
<\/script>
`,Q={style:{display:"flex","flex-direction":"column",gap:"16px"}},X={style:{display:"flex",gap:"16px","align-items":"center"}},Y={style:{display:"flex",gap:"16px","align-items":"center"}},Z={style:{display:"flex",gap:"16px","align-items":"center"}},tt=x({__name:"PopconfirmControlled",setup(r){const a=B(!1),o=B(!1);function f(){console.log("已确认"),a.value=!1}function t(){console.log("已取消"),a.value=!1}return(m,s)=>(g(),b("div",Q,[d("div",X,[n(l(u),{open:a.value,"onUpdate:open":s[0]||(s[0]=P=>a.value=P),title:"确定要删除吗？","ok-text":"删除","cancel-text":"取消",onConfirm:f,onCancel:t},{default:e(()=>[n(l(c),null,{default:e(()=>[...s[4]||(s[4]=[i("受控显示",-1)])]),_:1})]),_:1},8,["open"]),n(l(c),{onClick:s[1]||(s[1]=P=>a.value=!a.value)},{default:e(()=>[i(C(a.value?"关闭":"打开"),1)]),_:1}),d("span",null,"当前状态: "+C(a.value?"显示":"隐藏"),1)]),d("div",Y,[n(l(u),{title:"确定要删除吗？","ok-text":"删除","cancel-text":"取消",disabled:o.value},{default:e(()=>[n(l(c),{disabled:o.value},{default:e(()=>[i(C(o.value?"已禁用":"可点击"),1)]),_:1},8,["disabled"])]),_:1},8,["disabled"]),n(l(c),{onClick:s[2]||(s[2]=P=>o.value=!o.value)},{default:e(()=>[...s[5]||(s[5]=[i("切换禁用状态",-1)])]),_:1})]),d("div",Z,[n(l(u),{title:"点击确定继续","ok-text":"确定","show-cancel":!1,onConfirm:s[3]||(s[3]=()=>console.log("已确定"))},{default:e(()=>[n(l(c),null,{default:e(()=>[...s[6]||(s[6]=[i("无取消按钮",-1)])]),_:1})]),_:1})])]))}}),nt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <!-- 受控模式 -->
    <div style="display: flex; gap: 16px; align-items: center">
      <Popconfirm
        v-model:open="visible"
        title="确定要删除吗？"
        ok-text="删除"
        cancel-text="取消"
        @confirm="handleConfirm"
        @cancel="handleCancel"
      >
        <Button>受控显示</Button>
      </Popconfirm>
      <Button @click="visible = !visible">
        {{ visible ? '关闭' : '打开' }}
      </Button>
      <span>当前状态: {{ visible ? '显示' : '隐藏' }}</span>
    </div>

    <!-- 禁用状态 -->
    <div style="display: flex; gap: 16px; align-items: center">
      <Popconfirm title="确定要删除吗？" ok-text="删除" cancel-text="取消" :disabled="disabled">
        <Button :disabled="disabled">
          {{ disabled ? '已禁用' : '可点击' }}
        </Button>
      </Popconfirm>
      <Button @click="disabled = !disabled">切换禁用状态</Button>
    </div>

    <!-- 隐藏取消按钮 -->
    <div style="display: flex; gap: 16px; align-items: center">
      <Popconfirm title="点击确定继续" ok-text="确定" :show-cancel="false" @confirm="() => console.log('已确定')">
        <Button>无取消按钮</Button>
      </Popconfirm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Popconfirm, Button } from 'ant-design-hmfw'

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
`,et={style:{display:"flex",gap:"16px","align-items":"center"}},ot=x({__name:"PopconfirmCustom",setup(r){return(a,o)=>(g(),b("div",et,[n(l(u),{title:"自定义 z-index",description:"这个气泡框的 z-index 是 2000","z-index":2e3,"ok-text":"确定","cancel-text":"取消"},{default:e(()=>[n(l(c),null,{default:e(()=>[...o[0]||(o[0]=[i("自定义 z-index",-1)])]),_:1})]),_:1}),n(l(u),{title:"自定义样式",description:"这个气泡框使用了自定义样式","ok-text":"确定","cancel-text":"取消","overlay-style":{maxWidth:"400px"},"overlay-inner-style":{backgroundColor:"#f0f5ff",padding:"16px"}},{default:e(()=>[n(l(c),null,{default:e(()=>[...o[1]||(o[1]=[i("自定义样式",-1)])]),_:1})]),_:1}),n(l(u),{title:"无箭头气泡框","ok-text":"确定","cancel-text":"取消",arrow:!1},{default:e(()=>[n(l(c),null,{default:e(()=>[...o[2]||(o[2]=[i("隐藏箭头",-1)])]),_:1})]),_:1}),n(l(u),{title:"箭头指向中心","ok-text":"确定","cancel-text":"取消",arrow:{pointAtCenter:!0}},{default:e(()=>[n(l(c),null,{default:e(()=>[...o[3]||(o[3]=[i("箭头指向中心",-1)])]),_:1})]),_:1})]))}}),lt=`<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <!-- 自定义 z-index -->
    <Popconfirm
      title="自定义 z-index"
      description="这个气泡框的 z-index 是 2000"
      :z-index="2000"
      ok-text="确定"
      cancel-text="取消"
    >
      <Button>自定义 z-index</Button>
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
      <Button>自定义样式</Button>
    </Popconfirm>

    <!-- 隐藏箭头 -->
    <Popconfirm title="无箭头气泡框" ok-text="确定" cancel-text="取消" :arrow="false">
      <Button>隐藏箭头</Button>
    </Popconfirm>

    <!-- 箭头指向中心 -->
    <Popconfirm title="箭头指向中心" ok-text="确定" cancel-text="取消" :arrow="{ pointAtCenter: true }">
      <Button>箭头指向中心</Button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm, Button } from 'ant-design-hmfw'
<\/script>
`,dt=x({__name:"PopconfirmCustomText",setup(r){function a(){console.log("已提交")}return(o,f)=>(g(),N(l(u),{title:"确定要提交吗？",description:"提交后将无法修改，请确认信息无误。","ok-text":"提交","cancel-text":"再想想",onConfirm:a},{default:e(()=>[n(l(c),null,{default:e(()=>[...f[0]||(f[0]=[i("提交",-1)])]),_:1})]),_:1}))}}),it=`<template>
  <Popconfirm
    title="确定要提交吗？"
    description="提交后将无法修改，请确认信息无误。"
    ok-text="提交"
    cancel-text="再想想"
    @confirm="onConfirm"
  >
    <Button>提交</Button>
  </Popconfirm>
</template>

<script setup lang="ts">
import { Popconfirm, Button } from 'ant-design-hmfw'

function onConfirm() {
  console.log('已提交')
}
<\/script>
`,rt={style:{display:"flex",gap:"16px","align-items":"center"}},at=x({__name:"PopconfirmDanger",setup(r){function a(){console.log("已确认操作")}return(o,f)=>(g(),b("div",rt,[n(l(u),{title:"确定要删除吗？",description:"删除后数据将无法恢复","ok-type":"danger","ok-text":"删除","cancel-text":"取消",onConfirm:a},{default:e(()=>[n(l(c),null,{default:e(()=>[...f[0]||(f[0]=[i("删除（danger）",-1)])]),_:1})]),_:1}),n(l(u),{title:"确定要保存吗？","ok-type":"primary","ok-text":"保存","cancel-text":"取消",onConfirm:a},{default:e(()=>[n(l(c),null,{default:e(()=>[...f[1]||(f[1]=[i("保存（primary）",-1)])]),_:1})]),_:1}),n(l(u),{title:"确定要继续吗？","ok-type":"default","ok-text":"继续","cancel-text":"取消",onConfirm:a},{default:e(()=>[n(l(c),null,{default:e(()=>[...f[2]||(f[2]=[i("继续（default）",-1)])]),_:1})]),_:1})]))}}),ct=`<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <!-- 危险操作 - 使用 danger 简写 -->
    <Popconfirm
      title="确定要删除吗？"
      description="删除后数据将无法恢复"
      ok-type="danger"
      ok-text="删除"
      cancel-text="取消"
      @confirm="onConfirm"
    >
      <Button>删除（danger）</Button>
    </Popconfirm>

    <!-- 普通主题 -->
    <Popconfirm title="确定要保存吗？" ok-type="primary" ok-text="保存" cancel-text="取消" @confirm="onConfirm">
      <Button>保存（primary）</Button>
    </Popconfirm>

    <!-- 默认主题 -->
    <Popconfirm title="确定要继续吗？" ok-type="default" ok-text="继续" cancel-text="取消" @confirm="onConfirm">
      <Button>继续（default）</Button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm, Button } from 'ant-design-hmfw'

function onConfirm() {
  console.log('已确认操作')
}
<\/script>
`,st={style:{display:"flex",gap:"16px"}},ut=x({__name:"PopconfirmIcon",setup(r){return(a,o)=>(g(),b("div",st,[n(l(u),{title:"确定要删除吗？",icon:"🗑️","ok-text":"删除","cancel-text":"取消"},{default:e(()=>[n(l(c),null,{default:e(()=>[...o[0]||(o[0]=[i("自定义图标",-1)])]),_:1})]),_:1}),n(l(u),{title:"确定要继续吗？","ok-text":"继续","cancel-text":"取消"},{icon:e(()=>[...o[1]||(o[1]=[d("span",{style:{color:"#1890ff","font-size":"16px"}},"ℹ️",-1)])]),default:e(()=>[n(l(c),null,{default:e(()=>[...o[2]||(o[2]=[i("插槽图标",-1)])]),_:1})]),_:1}),n(l(u),{title:"确定要提交吗？",icon:"","ok-text":"提交","cancel-text":"取消"},{default:e(()=>[n(l(c),null,{default:e(()=>[...o[3]||(o[3]=[i("无图标",-1)])]),_:1})]),_:1})]))}}),pt=`<template>
  <div style="display: flex; gap: 16px">
    <!-- 自定义图标 -->
    <Popconfirm title="确定要删除吗？" icon="🗑️" ok-text="删除" cancel-text="取消">
      <Button>自定义图标</Button>
    </Popconfirm>

    <!-- 使用插槽自定义图标 -->
    <Popconfirm title="确定要继续吗？" ok-text="继续" cancel-text="取消">
      <template #icon>
        <span style="color: #1890ff; font-size: 16px">ℹ️</span>
      </template>
      <Button>插槽图标</Button>
    </Popconfirm>

    <!-- 无图标 -->
    <Popconfirm title="确定要提交吗？" :icon="''" ok-text="提交" cancel-text="取消">
      <Button>无图标</Button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm, Button } from 'ant-design-hmfw'
<\/script>
`,ft={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},mt=x({__name:"PopconfirmPlacement",setup(r){const a=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(o,f)=>(g(),b("div",ft,[(g(),b(V,null,F(a,t=>n(l(u),{key:t,placement:t,title:"确定要执行此操作吗？",onConfirm:()=>console.log(t)},{default:e(()=>[n(l(c),null,{default:e(()=>[i(C(t),1)]),_:2},1024)]),_:2},1032,["placement","onConfirm"])),64))]))}}),gt=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Popconfirm
      v-for="placement in placements"
      :key="placement"
      :placement="placement"
      title="确定要执行此操作吗？"
      @confirm="() => console.log(placement)"
    >
      <Button>{{ placement }}</Button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm, Button } from 'ant-design-hmfw'

const placements = [
  'topLeft',
  'top',
  'topRight',
  'leftTop',
  'left',
  'leftBottom',
  'rightTop',
  'right',
  'rightBottom',
  'bottomLeft',
  'bottom',
  'bottomRight',
]
<\/script>
`,xt={style:{display:"flex",gap:"16px","align-items":"center"}},yt=x({__name:"PopconfirmTrigger",setup(r){return(a,o)=>(g(),b("div",xt,[n(l(u),{title:"确定要删除吗？",trigger:"hover","ok-text":"删除","cancel-text":"取消",onConfirm:o[0]||(o[0]=()=>console.log("hover 确认"))},{default:e(()=>[n(l(c),null,{default:e(()=>[...o[4]||(o[4]=[i("鼠标悬停触发",-1)])]),_:1})]),_:1}),n(l(u),{title:"确定要删除吗？",trigger:"click","ok-text":"删除","cancel-text":"取消",onConfirm:o[1]||(o[1]=()=>console.log("click 确认"))},{default:e(()=>[n(l(c),null,{default:e(()=>[...o[5]||(o[5]=[i("点击触发",-1)])]),_:1})]),_:1}),n(l(u),{title:"确定要删除吗？",trigger:"focus","ok-text":"删除","cancel-text":"取消",onConfirm:o[2]||(o[2]=()=>console.log("focus 确认"))},{default:e(()=>[n(l(c),null,{default:e(()=>[...o[6]||(o[6]=[i("聚焦触发",-1)])]),_:1})]),_:1}),n(l(u),{title:"确定要删除吗？",trigger:"contextMenu","ok-text":"删除","cancel-text":"取消",onConfirm:o[3]||(o[3]=()=>console.log("contextMenu 确认"))},{default:e(()=>[n(l(c),null,{default:e(()=>[...o[7]||(o[7]=[i("右键触发",-1)])]),_:1})]),_:1})]))}}),vt=`<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <!-- hover 触发 -->
    <Popconfirm
      title="确定要删除吗？"
      trigger="hover"
      ok-text="删除"
      cancel-text="取消"
      @confirm="() => console.log('hover 确认')"
    >
      <Button>鼠标悬停触发</Button>
    </Popconfirm>

    <!-- click 触发（默认） -->
    <Popconfirm
      title="确定要删除吗？"
      trigger="click"
      ok-text="删除"
      cancel-text="取消"
      @confirm="() => console.log('click 确认')"
    >
      <Button>点击触发</Button>
    </Popconfirm>

    <!-- focus 触发 -->
    <Popconfirm
      title="确定要删除吗？"
      trigger="focus"
      ok-text="删除"
      cancel-text="取消"
      @confirm="() => console.log('focus 确认')"
    >
      <Button>聚焦触发</Button>
    </Popconfirm>

    <!-- contextMenu 触发 -->
    <Popconfirm
      title="确定要删除吗？"
      trigger="contextMenu"
      ok-text="删除"
      cancel-text="取消"
      @confirm="() => console.log('contextMenu 确认')"
    >
      <Button>右键触发</Button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm, Button } from 'ant-design-hmfw'
<\/script>
`,bt={class:"markdown-body"},Ot={__name:"popconfirm",setup(r,{expose:a}){return a({frontmatter:{}}),(f,t)=>{const m=I("DemoBlock");return g(),b("div",bt,[t[0]||(t[0]=d("h1",{id:"popconfirm-",tabindex:"-1"},"Popconfirm 气泡确认框",-1)),t[1]||(t[1]=d("p",null,"点击元素，弹出气泡式的确认框。",-1)),t[2]||(t[2]=d("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=d("ul",null,[d("li",null,"目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户"),d("li",null,"和 confirm 弹出的全屏居中模态对话框相比，交互形式更轻量")],-1)),t[4]||(t[4]=d("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=d("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=d("p",null,"最简单的用法。",-1)),n(m,{title:"基础用法",source:l(q)},{default:e(()=>[n(K)]),_:1},8,["source"]),t[7]||(t[7]=d("h3",{id:"-3",tabindex:"-1"},"自定义按钮文字",-1)),t[8]||(t[8]=d("p",null,"自定义确认按钮和取消按钮的文字。",-1)),n(m,{title:"自定义按钮文字",source:l(it)},{default:e(()=>[n(dt)]),_:1},8,["source"]),t[9]||(t[9]=d("h3",{id:"-4",tabindex:"-1"},"不同位置",-1)),t[10]||(t[10]=d("p",null,"位置有十二个方向。",-1)),n(m,{title:"不同位置",source:l(gt)},{default:e(()=>[n(mt)]),_:1},8,["source"]),t[11]||(t[11]=d("h3",{id:"-5",tabindex:"-1"},"自定义图标",-1)),t[12]||(t[12]=d("p",null,[i("可以通过 "),d("code",null,"icon"),i(" 属性或插槽自定义图标，也可以设置为空字符串隐藏图标。")],-1)),n(m,{title:"自定义图标",source:l(pt)},{default:e(()=>[n(ut)]),_:1},8,["source"]),t[13]||(t[13]=d("h3",{id:"-6",tabindex:"-1"},"按钮类型",-1)),t[14]||(t[14]=d("p",null,[i("使用 "),d("code",null,"okType"),i(" 设置确认按钮的类型。"),d("code",null,"danger"),i(" 是 "),d("code",null,"primary + danger"),i(" 的简写形式。")],-1)),n(m,{title:"按钮类型",source:l(ct)},{default:e(()=>[n(at)]),_:1},8,["source"]),t[15]||(t[15]=d("h3",{id:"-7",tabindex:"-1"},"异步关闭",-1)),t[16]||(t[16]=d("p",null,[i("通过 "),d("code",null,"okButtonProps"),i(" 和 "),d("code",null,"cancelButtonProps"),i(" 可以控制按钮的 loading 状态，实现异步确认。")],-1)),n(m,{title:"异步关闭",source:l(J)},{default:e(()=>[n(G)]),_:1},8,["source"]),t[17]||(t[17]=d("h3",{id:"-8",tabindex:"-1"},"受控模式",-1)),t[18]||(t[18]=d("p",null,[i("使用 "),d("code",null,"v-model:open"),i(" 控制气泡框的显示隐藏，可以通过 "),d("code",null,"disabled"),i(" 禁用，也可以隐藏取消按钮。")],-1)),n(m,{title:"受控模式",source:l(nt)},{default:e(()=>[n(tt)]),_:1},8,["source"]),t[19]||(t[19]=d("h3",{id:"-9",tabindex:"-1"},"触发方式",-1)),t[20]||(t[20]=d("p",null,[i("通过 "),d("code",null,"trigger"),i(" 设置触发行为，支持 "),d("code",null,"hover"),i("、"),d("code",null,"click"),i("、"),d("code",null,"focus"),i("、"),d("code",null,"contextMenu"),i("。")],-1)),n(m,{title:"触发方式",source:l(vt)},{default:e(()=>[n(yt)]),_:1},8,["source"]),t[21]||(t[21]=d("h3",{id:"-10",tabindex:"-1"},"自定义配置",-1)),t[22]||(t[22]=d("p",null,"可以自定义 z-index、样式、箭头等配置。",-1)),n(m,{title:"自定义配置",source:l(lt)},{default:e(()=>[n(ot)]),_:1},8,["source"]),t[23]||(t[23]=R('<h2 id="api" tabindex="-1">API</h2><h3 id="popconfirm-props" tabindex="-1">Popconfirm Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>确认框标题（空值时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>description</td><td>确认框描述</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>icon</td><td>提示图标，slot 优先级高于 prop</td><td><code>string | VNode | () =&gt; VNode | slot</code></td><td><code>&#39;⚠&#39;</code></td></tr><tr><td>okText</td><td>确认按钮文字</td><td><code>string</code></td><td>locale 默认值</td></tr><tr><td>cancelText</td><td>取消按钮文字</td><td><code>string</code></td><td>locale 默认值</td></tr><tr><td>okType</td><td>确认按钮类型，<code>&#39;danger&#39;</code> 是 <code>primary + danger</code> 的简写</td><td><code>ButtonType | &#39;danger&#39;</code></td><td><code>&#39;primary&#39;</code></td></tr><tr><td>okButtonProps</td><td>确认按钮的额外 props（loading/disabled 等）</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>cancelButtonProps</td><td>取消按钮的额外 props</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>showCancel</td><td>是否显示取消按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>trigger</td><td>触发行为，可设单值或数组</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39; | &#39;contextMenu&#39;</code></td><td><code>&#39;click&#39;</code></td></tr><tr><td>placement</td><td>气泡框位置，溢出视口时自动翻转</td><td>12 个方向（同 Tooltip）</td><td><code>&#39;top&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示（非受控）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>禁用，禁用时点击触发器不会弹出</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>arrow</td><td>是否显示箭头，可对象配置</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入延时显示（trigger=hover），单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出延时隐藏（trigger=hover），单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>autoAdjustOverflow</td><td>浮层超出视口时自动翻转方向</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>自定义浮层 z-index</td><td><code>number</code></td><td><code>1070</code></td></tr><tr><td>destroyOnHidden</td><td>隐藏时销毁浮层 DOM</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getPopupContainer</td><td>自定义浮层挂载容器（默认 <code>body</code>）</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td>-</td></tr><tr><td>overlayStyle</td><td>卡片外层样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr><tr><td>overlayInnerStyle</td><td>卡片内层样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr></tbody></table><h3 id="popconfirm-events" tabindex="-1">Popconfirm Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击确认的回调（携带 MouseEvent）</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>cancel</td><td>点击取消的回调（携带 MouseEvent）</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>update:open</td><td>显示隐藏的回调（v-model）</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>浮层动画结束时触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="popconfirm-slots" tabindex="-1">Popconfirm Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发气泡确认框的元素</td></tr><tr><td>title</td><td>标题（与 <code>title</code> prop 二选一，slot 优先）</td></tr><tr><td>description</td><td>描述（与 <code>description</code> prop 二选一，slot 优先）</td></tr><tr><td>icon</td><td>图标（与 <code>icon</code> prop 二选一，slot 优先）</td></tr></tbody></table>',7))])}}};export{Ot as default};
