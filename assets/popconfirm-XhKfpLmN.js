import{B as i}from"./Button-DewbofvJ.js";import{d as g,u as dn,C as mn,r as C,v,a as h,o as k,b as x,c as t,e as o,w as a,g as p,q as an,f as l,_ as fn,A as N,F as kn,z as gn,h as xn,i as yn}from"./index-D5KOSvVL.js";import{c as B}from"./cls-S9IiI6wd.js";import{T as bn}from"./Tooltip-CRKFe49x.js";import"./LoadingOutlined-BFlxA5_9.js";import"./Trigger-dtWeb9b0.js";const u=g({name:"Popconfirm",inheritAttrs:!1,props:{title:[String,Number,Object,Function],description:[String,Number,Object,Function],icon:{type:[String,Number,Object,Function],default:"⚠"},okText:String,cancelText:String,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,showCancel:{type:Boolean,default:!0},trigger:{type:[String,Array],default:"click"},placement:{type:String,default:"top"},open:{type:Boolean,default:void 0},defaultOpen:Boolean,disabled:Boolean,arrow:{type:[Boolean,Object],default:!0},mouseEnterDelay:{type:Number,default:.1},mouseLeaveDelay:{type:Number,default:.1},autoAdjustOverflow:{type:Boolean,default:!0},zIndex:Number,destroyOnHidden:Boolean,destroyTooltipOnHide:Boolean,getPopupContainer:Function,overlayStyle:Object,overlayInnerStyle:Object,classNames:Object,styles:Object},emits:["update:open","openChange","afterOpenChange","confirm","cancel"],setup(e,{slots:c,emit:n,attrs:m}){const s=dn("popconfirm"),f=mn(),r=C(e.defaultOpen??!1),P=h(()=>e.open!==void 0),on=h(()=>P.value?e.open:r.value),q=d=>{e.disabled&&d||(P.value||(r.value=d),n("update:open",d),n("openChange",d))},w=(d,y)=>{if(y)return y();if(typeof d=="function")return d();if(d!=null&&d!=="")return d},en=d=>{n("confirm",d),q(!1)},ln=d=>{n("cancel",d),q(!1)},pn=h(()=>{const d=e.title,y=e.description;return d!=null&&d!==""||y!=null&&y!==""||!!c.title||!!c.description});return()=>{var O,z,$,D,E,A,M,j,L,F,I,V,H,W,R,U,Y,G,J,K,Q,X,Z,nn,tn,sn;const d=w(e.title,c.title),y=w(e.description,c.description),_=w(e.icon,c.icon),cn=e.cancelText??f.value.Modal.cancelText,un=e.okText??f.value.Modal.okText,T=e.okType==="danger",rn=T?"primary":e.okType,S=[v("div",{class:B(`${s}-message`,(O=e.classNames)==null?void 0:O.message),style:(z=e.styles)==null?void 0:z.message},[_&&v("span",{class:B(`${s}-message-icon`,($=e.classNames)==null?void 0:$.icon),style:(D=e.styles)==null?void 0:D.icon},_),v("div",{class:B(`${s}-message-title`,(E=e.classNames)==null?void 0:E.title),style:(A=e.styles)==null?void 0:A.title},d)])];return y&&S.push(v("div",{class:B(`${s}-description`,(M=e.classNames)==null?void 0:M.description),style:(j=e.styles)==null?void 0:j.description},y)),S.push(v("div",{class:B(`${s}-buttons`,(L=e.classNames)==null?void 0:L.buttons),style:(F=e.styles)==null?void 0:F.buttons},[e.showCancel&&v(i,{size:"small",...e.cancelButtonProps,classNames:{...(I=e.cancelButtonProps)==null?void 0:I.classNames,root:B((H=(V=e.cancelButtonProps)==null?void 0:V.classNames)==null?void 0:H.root,(W=e.classNames)==null?void 0:W.cancelBtn)},styles:{...(R=e.cancelButtonProps)==null?void 0:R.styles,root:{...(Y=(U=e.cancelButtonProps)==null?void 0:U.styles)==null?void 0:Y.root,...(G=e.styles)==null?void 0:G.cancelBtn}},onClick:ln},{default:()=>cn}),v(i,{size:"small",type:rn,danger:T,...e.okButtonProps,classNames:{...(J=e.okButtonProps)==null?void 0:J.classNames,root:B((Q=(K=e.okButtonProps)==null?void 0:K.classNames)==null?void 0:Q.root,(X=e.classNames)==null?void 0:X.okBtn)},styles:{...(Z=e.okButtonProps)==null?void 0:Z.styles,root:{...(tn=(nn=e.okButtonProps)==null?void 0:nn.styles)==null?void 0:tn.root,...(sn=e.styles)==null?void 0:sn.okBtn}},onClick:en},{default:()=>un})])),v(bn,{...m,customPrefixCls:s,arrow:e.arrow,placement:e.placement,trigger:e.trigger,open:on.value,defaultOpen:e.defaultOpen,mouseEnterDelay:e.mouseEnterDelay,mouseLeaveDelay:e.mouseLeaveDelay,disabled:e.disabled,autoAdjustOverflow:e.autoAdjustOverflow,zIndex:e.zIndex,destroyOnHidden:e.destroyOnHidden,destroyTooltipOnHide:e.destroyTooltipOnHide,getPopupContainer:e.getPopupContainer,popupStyle:e.overlayStyle,"onUpdate:open":b=>q(b),onAfterOpenChange:b=>n("afterOpenChange",b)},pn.value&&!e.disabled?{default:()=>{var b;return(b=c.default)==null?void 0:b.call(c)},title:()=>S}:{default:()=>{var b;return(b=c.default)==null?void 0:b.call(c)}})}}}),vn={style:{display:"flex",gap:"16px","align-items":"center"}},Bn=g({__name:"PopconfirmAsync",setup(e){const c=C(!1),n=C(!1);function m(){c.value=!0,setTimeout(()=>{console.log("提交成功"),c.value=!1},2e3)}function s(){n.value=!0,setTimeout(()=>{console.log("删除成功"),n.value=!1},2e3)}return(f,r)=>(k(),x("div",vn,[t(o(u),{title:"确定要提交吗？",description:"提交后将发送到服务器","ok-text":"提交","cancel-text":"取消","ok-button-props":{loading:c.value},onConfirm:m},{default:a(()=>[t(o(i),null,{default:a(()=>[...r[0]||(r[0]=[p("异步提交",-1)])]),_:1})]),_:1},8,["ok-button-props"]),t(o(u),{title:"确定要执行吗？","ok-text":"确定","cancel-text":"取消","ok-button-props":{disabled:!0}},{default:a(()=>[t(o(i),null,{default:a(()=>[...r[1]||(r[1]=[p("确定按钮禁用",-1)])]),_:1})]),_:1}),t(o(u),{title:"确定要删除吗？","ok-type":"danger","ok-text":"强制删除","cancel-text":"取消","ok-button-props":{loading:n.value},"cancel-button-props":{disabled:n.value},onConfirm:s},{default:a(()=>[t(o(i),null,{default:a(()=>[...r[2]||(r[2]=[p("强制删除",-1)])]),_:1})]),_:1},8,["ok-button-props","cancel-button-props"])]))}}),Pn=`<template>
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
import { Popconfirm, Button } from '@hmfw/ant-design'

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
`,Cn=g({__name:"PopconfirmBasic",setup(e){function c(){console.log("已确认删除")}function n(){console.log("已取消")}return(m,s)=>(k(),an(o(u),{title:"确定要删除吗？","ok-text":"确定","cancel-text":"取消",onConfirm:c,onCancel:n},{default:a(()=>[t(o(i),null,{default:a(()=>[...s[0]||(s[0]=[p("删除",-1)])]),_:1})]),_:1}))}}),Nn=`<template>
  <Popconfirm title="确定要删除吗？" ok-text="确定" cancel-text="取消" @confirm="onConfirm" @cancel="onCancel">
    <Button>删除</Button>
  </Popconfirm>
</template>

<script setup lang="ts">
import { Popconfirm, Button } from '@hmfw/ant-design'

function onConfirm() {
  console.log('已确认删除')
}

function onCancel() {
  console.log('已取消')
}
<\/script>
`,qn={style:{display:"flex","flex-direction":"column",gap:"24px"}},wn=g({__name:"PopconfirmClassNames",setup(e){return(c,n)=>(k(),x("div",qn,[l("div",null,[n[1]||(n[1]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义消息容器与图标：",-1)),t(o(u),{title:"确定删除这条记录吗？",description:"此操作不可逆，请谨慎操作","class-names":{message:"custom-message",icon:"custom-icon"}},{default:a(()=>[t(o(i),{type:"primary"},{default:a(()=>[...n[0]||(n[0]=[p("删除记录",-1)])]),_:1})]),_:1})]),l("div",null,[n[3]||(n[3]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义标题与描述：",-1)),t(o(u),{title:"重要提示",description:"该操作将影响所有关联数据","class-names":{title:"custom-title",description:"custom-description"}},{default:a(()=>[t(o(i),{type:"default"},{default:a(()=>[...n[2]||(n[2]=[p("批量操作",-1)])]),_:1})]),_:1})]),l("div",null,[n[5]||(n[5]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义按钮组：",-1)),t(o(u),{title:"确定要提交吗？","class-names":{buttons:"custom-buttons",cancelBtn:"custom-cancel",okBtn:"custom-ok"}},{default:a(()=>[t(o(i),null,{default:a(()=>[...n[4]||(n[4]=[p("提交表单",-1)])]),_:1})]),_:1})]),l("div",null,[n[7]||(n[7]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),t(o(u),{title:"确认操作",description:"这是一个测试描述",styles:{message:{padding:"8px 0"},icon:{color:"#52c41a",fontSize:"18px"},title:{fontWeight:"bold",color:"#1677ff"},description:{fontStyle:"italic",color:"#8c8c8c"}}},{default:a(()=>[t(o(i),{type:"dashed"},{default:a(()=>[...n[6]||(n[6]=[p("样式演示",-1)])]),_:1})]),_:1})]),l("div",null,[n[9]||(n[9]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合自定义：",-1)),t(o(u),{title:"确认发布文章？",description:"发布后将立即对所有用户可见","class-names":{message:"gradient-message",buttons:"gradient-buttons"},styles:{icon:{fontSize:"20px"},okBtn:{minWidth:"80px"}}},{default:a(()=>[t(o(i),{type:"primary"},{default:a(()=>[...n[8]||(n[8]=[p("发布",-1)])]),_:1})]),_:1})])]))}}),Sn=fn(wn,[["__scopeId","data-v-72d9470c"]]),hn=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义消息容器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义消息容器与图标：</div>
      <Popconfirm
        title="确定删除这条记录吗？"
        description="此操作不可逆，请谨慎操作"
        :class-names="{
          message: 'custom-message',
          icon: 'custom-icon',
        }"
      >
        <Button type="primary">删除记录</Button>
      </Popconfirm>
    </div>

    <!-- 场景 2：自定义标题与描述样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义标题与描述：</div>
      <Popconfirm
        title="重要提示"
        description="该操作将影响所有关联数据"
        :class-names="{
          title: 'custom-title',
          description: 'custom-description',
        }"
      >
        <Button type="default">批量操作</Button>
      </Popconfirm>
    </div>

    <!-- 场景 3：自定义按钮组样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义按钮组：</div>
      <Popconfirm
        title="确定要提交吗？"
        :class-names="{
          buttons: 'custom-buttons',
          cancelBtn: 'custom-cancel',
          okBtn: 'custom-ok',
        }"
      >
        <Button>提交表单</Button>
      </Popconfirm>
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Popconfirm
        title="确认操作"
        description="这是一个测试描述"
        :styles="{
          message: { padding: '8px 0' },
          icon: { color: '#52c41a', fontSize: '18px' },
          title: { fontWeight: 'bold', color: '#1677ff' },
          description: { fontStyle: 'italic', color: '#8c8c8c' },
        }"
      >
        <Button type="dashed">样式演示</Button>
      </Popconfirm>
    </div>

    <!-- 场景 5：组合使用 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义：</div>
      <Popconfirm
        title="确认发布文章？"
        description="发布后将立即对所有用户可见"
        :class-names="{
          message: 'gradient-message',
          buttons: 'gradient-buttons',
        }"
        :styles="{
          icon: { fontSize: '20px' },
          okBtn: { minWidth: '80px' },
        }"
      >
        <Button type="primary">发布</Button>
      </Popconfirm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, Popconfirm } from '@hmfw/ant-design'
<\/script>

<style scoped>
/* 场景 1：消息容器与图标 */
:global(.custom-message) {
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  padding: 8px;
  border-radius: 6px;
  border-left: 3px solid #1677ff;
}

:global(.custom-icon) {
  color: #1677ff;
  font-size: 18px;
  transform: scale(1.2);
}

/* 场景 2：标题与描述 */
:global(.custom-title) {
  font-weight: 600;
  color: #d4380d;
  font-size: 15px;
}

:global(.custom-description) {
  background: #fff7e6;
  padding: 6px 8px;
  border-radius: 4px;
  color: #d46b08;
  border: 1px dashed #ffa940;
}

/* 场景 3：按钮组 */
:global(.custom-buttons) {
  gap: 12px;
  padding-top: 4px;
}

:global(.custom-cancel) {
  border-color: #d9d9d9;
  color: #595959;
  transition: all 0.3s;
}

:global(.custom-cancel:hover) {
  border-color: #ff4d4f;
  color: #ff4d4f;
}

:global(.custom-ok) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  border: none;
  box-shadow: 0 2px 4px rgba(82, 196, 26, 0.3);
  transition: all 0.3s;
}

:global(.custom-ok:hover) {
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.5);
  transform: translateY(-1px);
}

/* 场景 5：渐变主题 */
:global(.gradient-message) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 12px;
  border-radius: 8px;
}

:global(.gradient-message .hmfw-popconfirm-message-icon) {
  color: #fff;
  font-size: 20px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

:global(.gradient-message .hmfw-popconfirm-message-title) {
  color: #fff;
  font-weight: 600;
}

:global(.gradient-message + .hmfw-popconfirm-description) {
  color: rgba(255, 255, 255, 0.9);
  padding-left: 0;
  margin-top: 8px;
}

:global(.gradient-buttons) {
  margin-top: 12px;
}
</style>
`,_n={style:{display:"flex","flex-direction":"column",gap:"16px"}},Tn={style:{display:"flex",gap:"16px","align-items":"center"}},On={style:{display:"flex",gap:"16px","align-items":"center"}},zn={style:{display:"flex",gap:"16px","align-items":"center"}},$n=g({__name:"PopconfirmControlled",setup(e){const c=C(!1),n=C(!1);function m(){console.log("已确认"),c.value=!1}function s(){console.log("已取消"),c.value=!1}return(f,r)=>(k(),x("div",_n,[l("div",Tn,[t(o(u),{open:c.value,"onUpdate:open":r[0]||(r[0]=P=>c.value=P),title:"确定要删除吗？","ok-text":"删除","cancel-text":"取消",onConfirm:m,onCancel:s},{default:a(()=>[t(o(i),null,{default:a(()=>[...r[4]||(r[4]=[p("受控显示",-1)])]),_:1})]),_:1},8,["open"]),t(o(i),{onClick:r[1]||(r[1]=P=>c.value=!c.value)},{default:a(()=>[p(N(c.value?"关闭":"打开"),1)]),_:1}),l("span",null,"当前状态: "+N(c.value?"显示":"隐藏"),1)]),l("div",On,[t(o(u),{title:"确定要删除吗？","ok-text":"删除","cancel-text":"取消",disabled:n.value},{default:a(()=>[t(o(i),{disabled:n.value},{default:a(()=>[p(N(n.value?"已禁用":"可点击"),1)]),_:1},8,["disabled"])]),_:1},8,["disabled"]),t(o(i),{onClick:r[2]||(r[2]=P=>n.value=!n.value)},{default:a(()=>[...r[5]||(r[5]=[p("切换禁用状态",-1)])]),_:1})]),l("div",zn,[t(o(u),{title:"点击确定继续","ok-text":"确定","show-cancel":!1,onConfirm:r[3]||(r[3]=()=>console.log("已确定"))},{default:a(()=>[t(o(i),null,{default:a(()=>[...r[6]||(r[6]=[p("无取消按钮",-1)])]),_:1})]),_:1})])]))}}),Dn=`<template>
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
import { Popconfirm, Button } from '@hmfw/ant-design'

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
`,En={style:{display:"flex",gap:"16px","align-items":"center"}},An=g({__name:"PopconfirmCustom",setup(e){return(c,n)=>(k(),x("div",En,[t(o(u),{title:"自定义 z-index",description:"这个气泡框的 z-index 是 2000","z-index":2e3,"ok-text":"确定","cancel-text":"取消"},{default:a(()=>[t(o(i),null,{default:a(()=>[...n[0]||(n[0]=[p("自定义 z-index",-1)])]),_:1})]),_:1}),t(o(u),{title:"自定义样式",description:"这个气泡框使用了自定义样式","ok-text":"确定","cancel-text":"取消","overlay-style":{maxWidth:"400px"},"overlay-inner-style":{backgroundColor:"#f0f5ff",padding:"16px"}},{default:a(()=>[t(o(i),null,{default:a(()=>[...n[1]||(n[1]=[p("自定义样式",-1)])]),_:1})]),_:1}),t(o(u),{title:"无箭头气泡框","ok-text":"确定","cancel-text":"取消",arrow:!1},{default:a(()=>[t(o(i),null,{default:a(()=>[...n[2]||(n[2]=[p("隐藏箭头",-1)])]),_:1})]),_:1}),t(o(u),{title:"箭头指向中心","ok-text":"确定","cancel-text":"取消",arrow:{pointAtCenter:!0}},{default:a(()=>[t(o(i),null,{default:a(()=>[...n[3]||(n[3]=[p("箭头指向中心",-1)])]),_:1})]),_:1})]))}}),Mn=`<template>
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
import { Popconfirm, Button } from '@hmfw/ant-design'
<\/script>
`,jn=g({__name:"PopconfirmCustomText",setup(e){function c(){console.log("已提交")}return(n,m)=>(k(),an(o(u),{title:"确定要提交吗？",description:"提交后将无法修改，请确认信息无误。","ok-text":"提交","cancel-text":"再想想",onConfirm:c},{default:a(()=>[t(o(i),null,{default:a(()=>[...m[0]||(m[0]=[p("提交",-1)])]),_:1})]),_:1}))}}),Ln=`<template>
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
import { Popconfirm, Button } from '@hmfw/ant-design'

function onConfirm() {
  console.log('已提交')
}
<\/script>
`,Fn={style:{display:"flex",gap:"16px","align-items":"center"}},In=g({__name:"PopconfirmDanger",setup(e){function c(){console.log("已确认操作")}return(n,m)=>(k(),x("div",Fn,[t(o(u),{title:"确定要删除吗？",description:"删除后数据将无法恢复","ok-type":"danger","ok-text":"删除","cancel-text":"取消",onConfirm:c},{default:a(()=>[t(o(i),null,{default:a(()=>[...m[0]||(m[0]=[p("删除（danger）",-1)])]),_:1})]),_:1}),t(o(u),{title:"确定要保存吗？","ok-type":"primary","ok-text":"保存","cancel-text":"取消",onConfirm:c},{default:a(()=>[t(o(i),null,{default:a(()=>[...m[1]||(m[1]=[p("保存（primary）",-1)])]),_:1})]),_:1}),t(o(u),{title:"确定要继续吗？","ok-type":"default","ok-text":"继续","cancel-text":"取消",onConfirm:c},{default:a(()=>[t(o(i),null,{default:a(()=>[...m[2]||(m[2]=[p("继续（default）",-1)])]),_:1})]),_:1})]))}}),Vn=`<template>
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
import { Popconfirm, Button } from '@hmfw/ant-design'

function onConfirm() {
  console.log('已确认操作')
}
<\/script>
`,Hn={style:{display:"flex",gap:"16px"}},Wn=g({__name:"PopconfirmIcon",setup(e){return(c,n)=>(k(),x("div",Hn,[t(o(u),{title:"确定要删除吗？",icon:"🗑️","ok-text":"删除","cancel-text":"取消"},{default:a(()=>[t(o(i),null,{default:a(()=>[...n[0]||(n[0]=[p("自定义图标",-1)])]),_:1})]),_:1}),t(o(u),{title:"确定要继续吗？","ok-text":"继续","cancel-text":"取消"},{icon:a(()=>[...n[1]||(n[1]=[l("span",{style:{color:"#1890ff","font-size":"16px"}},"ℹ️",-1)])]),default:a(()=>[t(o(i),null,{default:a(()=>[...n[2]||(n[2]=[p("插槽图标",-1)])]),_:1})]),_:1}),t(o(u),{title:"确定要提交吗？",icon:"","ok-text":"提交","cancel-text":"取消"},{default:a(()=>[t(o(i),null,{default:a(()=>[...n[3]||(n[3]=[p("无图标",-1)])]),_:1})]),_:1})]))}}),Rn=`<template>
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
import { Popconfirm, Button } from '@hmfw/ant-design'
<\/script>
`,Un={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},Yn=g({__name:"PopconfirmPlacement",setup(e){const c=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(n,m)=>(k(),x("div",Un,[(k(),x(kn,null,gn(c,s=>t(o(u),{key:s,placement:s,title:"确定要执行此操作吗？",onConfirm:()=>console.log(s)},{default:a(()=>[t(o(i),null,{default:a(()=>[p(N(s),1)]),_:2},1024)]),_:2},1032,["placement","onConfirm"])),64))]))}}),Gn=`<template>
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
import { Popconfirm, Button } from '@hmfw/ant-design'

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
`,Jn={style:{display:"flex",gap:"16px","align-items":"center"}},Kn=g({__name:"PopconfirmTrigger",setup(e){return(c,n)=>(k(),x("div",Jn,[t(o(u),{title:"确定要删除吗？",trigger:"hover","ok-text":"删除","cancel-text":"取消",onConfirm:n[0]||(n[0]=()=>console.log("hover 确认"))},{default:a(()=>[t(o(i),null,{default:a(()=>[...n[4]||(n[4]=[p("鼠标悬停触发",-1)])]),_:1})]),_:1}),t(o(u),{title:"确定要删除吗？",trigger:"click","ok-text":"删除","cancel-text":"取消",onConfirm:n[1]||(n[1]=()=>console.log("click 确认"))},{default:a(()=>[t(o(i),null,{default:a(()=>[...n[5]||(n[5]=[p("点击触发",-1)])]),_:1})]),_:1}),t(o(u),{title:"确定要删除吗？",trigger:"focus","ok-text":"删除","cancel-text":"取消",onConfirm:n[2]||(n[2]=()=>console.log("focus 确认"))},{default:a(()=>[t(o(i),null,{default:a(()=>[...n[6]||(n[6]=[p("聚焦触发",-1)])]),_:1})]),_:1}),t(o(u),{title:"确定要删除吗？",trigger:"contextMenu","ok-text":"删除","cancel-text":"取消",onConfirm:n[3]||(n[3]=()=>console.log("contextMenu 确认"))},{default:a(()=>[t(o(i),null,{default:a(()=>[...n[7]||(n[7]=[p("右键触发",-1)])]),_:1})]),_:1})]))}}),Qn=`<template>
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
import { Popconfirm, Button } from '@hmfw/ant-design'
<\/script>
`,Xn={class:"markdown-body"},et={__name:"popconfirm",setup(e,{expose:c}){return c({frontmatter:{}}),(m,s)=>{const f=xn("DemoBlock");return k(),x("div",Xn,[s[0]||(s[0]=l("h1",{id:"popconfirm-气泡确认框",tabindex:"-1"},"Popconfirm 气泡确认框",-1)),s[1]||(s[1]=l("p",null,"点击元素，弹出气泡式的确认框。",-1)),s[2]||(s[2]=l("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),s[3]||(s[3]=l("ul",null,[l("li",null,"目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户"),l("li",null,"和 confirm 弹出的全屏居中模态对话框相比，交互形式更轻量")],-1)),s[4]||(s[4]=l("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),s[5]||(s[5]=l("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),s[6]||(s[6]=l("p",null,"最简单的用法。",-1)),t(f,{title:"基础用法",source:o(Nn)},{default:a(()=>[t(Cn)]),_:1},8,["source"]),s[7]||(s[7]=l("h3",{id:"自定义按钮文字",tabindex:"-1"},"自定义按钮文字",-1)),s[8]||(s[8]=l("p",null,"自定义确认按钮和取消按钮的文字。",-1)),t(f,{title:"自定义按钮文字",source:o(Ln)},{default:a(()=>[t(jn)]),_:1},8,["source"]),s[9]||(s[9]=l("h3",{id:"不同位置",tabindex:"-1"},"不同位置",-1)),s[10]||(s[10]=l("p",null,"位置有十二个方向。",-1)),t(f,{title:"不同位置",source:o(Gn)},{default:a(()=>[t(Yn)]),_:1},8,["source"]),s[11]||(s[11]=l("h3",{id:"自定义图标",tabindex:"-1"},"自定义图标",-1)),s[12]||(s[12]=l("p",null,[p("可以通过 "),l("code",null,"icon"),p(" 属性或插槽自定义图标，也可以设置为空字符串隐藏图标。")],-1)),t(f,{title:"自定义图标",source:o(Rn)},{default:a(()=>[t(Wn)]),_:1},8,["source"]),s[13]||(s[13]=l("h3",{id:"按钮类型",tabindex:"-1"},"按钮类型",-1)),s[14]||(s[14]=l("p",null,[p("使用 "),l("code",null,"okType"),p(" 设置确认按钮的类型。"),l("code",null,"danger"),p(" 是 "),l("code",null,"primary + danger"),p(" 的简写形式。")],-1)),t(f,{title:"按钮类型",source:o(Vn)},{default:a(()=>[t(In)]),_:1},8,["source"]),s[15]||(s[15]=l("h3",{id:"异步关闭",tabindex:"-1"},"异步关闭",-1)),s[16]||(s[16]=l("p",null,[p("通过 "),l("code",null,"okButtonProps"),p(" 和 "),l("code",null,"cancelButtonProps"),p(" 可以控制按钮的 loading 状态，实现异步确认。")],-1)),t(f,{title:"异步关闭",source:o(Pn)},{default:a(()=>[t(Bn)]),_:1},8,["source"]),s[17]||(s[17]=l("h3",{id:"受控模式",tabindex:"-1"},"受控模式",-1)),s[18]||(s[18]=l("p",null,[p("使用 "),l("code",null,"v-model:open"),p(" 控制气泡框的显示隐藏，可以通过 "),l("code",null,"disabled"),p(" 禁用，也可以隐藏取消按钮。")],-1)),t(f,{title:"受控模式",source:o(Dn)},{default:a(()=>[t($n)]),_:1},8,["source"]),s[19]||(s[19]=l("h3",{id:"触发方式",tabindex:"-1"},"触发方式",-1)),s[20]||(s[20]=l("p",null,[p("通过 "),l("code",null,"trigger"),p(" 设置触发行为，支持 "),l("code",null,"hover"),p("、"),l("code",null,"click"),p("、"),l("code",null,"focus"),p("、"),l("code",null,"contextMenu"),p("。")],-1)),t(f,{title:"触发方式",source:o(Qn)},{default:a(()=>[t(Kn)]),_:1},8,["source"]),s[21]||(s[21]=l("h3",{id:"自定义配置",tabindex:"-1"},"自定义配置",-1)),s[22]||(s[22]=l("p",null,"可以自定义 z-index、样式、箭头等配置。",-1)),t(f,{title:"自定义配置",source:o(Mn)},{default:a(()=>[t(An)]),_:1},8,["source"]),s[23]||(s[23]=l("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),s[24]||(s[24]=l("p",null,[p("通过 "),l("code",null,"classNames"),p(" / "),l("code",null,"styles"),p(" 对各子元素做细粒度样式控制。")],-1)),t(f,{title:"语义化 className 与 style",source:o(hn)},{default:a(()=>[t(Sn)]),_:1},8,["source"]),s[25]||(s[25]=yn(`<h2 id="api" tabindex="-1">API</h2><h3 id="popconfirm-props" tabindex="-1">Popconfirm Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>确认框标题（空值时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>description</td><td>确认框描述</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>icon</td><td>提示图标，slot 优先级高于 prop</td><td><code>string | VNode | () =&gt; VNode | slot</code></td><td><code>&#39;⚠&#39;</code></td></tr><tr><td>okText</td><td>确认按钮文字</td><td><code>string</code></td><td>locale 默认值</td></tr><tr><td>cancelText</td><td>取消按钮文字</td><td><code>string</code></td><td>locale 默认值</td></tr><tr><td>okType</td><td>确认按钮类型，<code>&#39;danger&#39;</code> 是 <code>primary + danger</code> 的简写</td><td><code>ButtonType | &#39;danger&#39;</code></td><td><code>&#39;primary&#39;</code></td></tr><tr><td>okButtonProps</td><td>确认按钮的额外 props（loading/disabled 等）</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>cancelButtonProps</td><td>取消按钮的额外 props</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>showCancel</td><td>是否显示取消按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>trigger</td><td>触发行为，可设单值或数组</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39; | &#39;contextMenu&#39;</code></td><td><code>&#39;click&#39;</code></td></tr><tr><td>placement</td><td>气泡框位置，溢出视口时自动翻转</td><td>12 个方向（同 Tooltip）</td><td><code>&#39;top&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示（非受控）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>禁用，禁用时点击触发器不会弹出</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>arrow</td><td>是否显示箭头，可对象配置</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入延时显示（trigger=hover），单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出延时隐藏（trigger=hover），单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>autoAdjustOverflow</td><td>浮层超出视口时自动翻转方向</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>自定义浮层 z-index</td><td><code>number</code></td><td><code>1070</code></td></tr><tr><td>destroyOnHidden</td><td>隐藏时销毁浮层 DOM</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getPopupContainer</td><td>自定义浮层挂载容器（默认 <code>body</code>）</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td>-</td></tr><tr><td>overlayStyle</td><td>卡片外层样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr><tr><td>overlayInnerStyle</td><td>卡片内层样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>PopconfirmClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>PopconfirmStyles</code></td><td>-</td></tr></tbody></table><h3 id="popconfirm-events" tabindex="-1">Popconfirm Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击确认的回调（携带 MouseEvent）</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>cancel</td><td>点击取消的回调（携带 MouseEvent）</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>update:open</td><td>显示隐藏的回调（v-model）</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>浮层动画结束时触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="popconfirm-slots" tabindex="-1">Popconfirm Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发气泡确认框的元素</td></tr><tr><td>title</td><td>标题（与 <code>title</code> prop 二选一，slot 优先）</td></tr><tr><td>description</td><td>描述（与 <code>description</code> prop 二选一，slot 优先）</td></tr><tr><td>icon</td><td>图标（与 <code>icon</code> prop 二选一，slot 优先）</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对气泡确认框的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">PopconfirmClassNames</span> <span class="token punctuation">{</span>
  message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 消息容器 div.hmfw-popconfirm-message</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 图标容器 span.hmfw-popconfirm-message-icon</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标题容器 div.hmfw-popconfirm-message-title</span>
  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 描述文本 div.hmfw-popconfirm-description</span>
  buttons<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 按钮组容器 div.hmfw-popconfirm-buttons</span>
  cancelBtn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 取消按钮</span>
  okBtn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 确定按钮</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PopconfirmStyles</span> <span class="token punctuation">{</span>
  message<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  icon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  title<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  description<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  buttons<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  cancelBtn<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  okBtn<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- Popconfirm 浮层内部结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-popconfirm-inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-popconfirm-message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.message / styles.message 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-popconfirm-message-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.icon / styles.icon 应用于此 --&gt;</span>
      ⚠
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-popconfirm-message-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.title / styles.title 应用于此 --&gt;</span>
      确定删除吗？
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-popconfirm-description<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.description / styles.description 应用于此 --&gt;</span>
    此操作不可逆
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-popconfirm-buttons<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.buttons / styles.buttons 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.cancelBtn / styles.cancelBtn 通过 Button 的 classNames.root / styles.root 应用 --&gt;</span>
      取消
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-button hmfw-button-primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.okBtn / styles.okBtn 通过 Button 的 classNames.root / styles.root 应用 --&gt;</span>
      确定
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义消息容器与图标 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popconfirm</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>确定删除这条记录吗？<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>此操作不可逆，请谨慎操作<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      message: &#39;custom-message&#39;,
      icon: &#39;custom-icon&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>删除记录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popconfirm</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义按钮样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popconfirm</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>确定要提交吗？<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      cancelBtn: &#39;custom-cancel&#39;,
      okBtn: &#39;custom-ok&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>提交表单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popconfirm</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:global(.custom-message)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #f0f5ff 0%<span class="token punctuation">,</span> #e6f4ff 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> 3px solid #1677ff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:global(.custom-icon)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #1677ff<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:global(.custom-cancel:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #ff4d4f<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ff4d4f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:global(.custom-ok)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #52c41a 0%<span class="token punctuation">,</span> #389e0d 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 4px <span class="token function">rgba</span><span class="token punctuation">(</span>82<span class="token punctuation">,</span> 196<span class="token punctuation">,</span> 26<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制各部分 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popconfirm</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>确认操作<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>这是一个测试描述<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      message: { padding: &#39;8px 0&#39; },
      icon: { color: &#39;#52c41a&#39;, fontSize: &#39;18px&#39; },
      title: { fontWeight: &#39;bold&#39;, color: &#39;#1677ff&#39; },
      description: { fontStyle: &#39;italic&#39;, color: &#39;#8c8c8c&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dashed<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>样式演示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popconfirm</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义按钮尺寸 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popconfirm</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>确认发布？<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      okBtn: { minWidth: &#39;80px&#39;, fontWeight: &#39;bold&#39; },
      cancelBtn: { color: &#39;#8c8c8c&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>发布<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popconfirm</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>cancelBtn</code> 和 <code>okBtn</code> 通过 Button 组件的 <code>classNames.root</code> 和 <code>styles.root</code> 实现样式传递</li><li>如需更细粒度控制按钮内部（如图标），可通过 <code>okButtonProps.classNames</code> 和 <code>cancelButtonProps.classNames</code> 传递完整的 Button classNames</li><li>Popconfirm 浮层挂载在 <code>body</code> 外，样式需使用 <code>:global()</code> 而非 <code>:deep()</code></li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Popconfirm 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。</p>`,24))])}}};export{et as default};
