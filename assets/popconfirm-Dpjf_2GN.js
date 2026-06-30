import{B as d}from"./Button-1ex4Sfix.js";import{o as k,O as rt,N as ut,E as C,p as v,f as _,A as g,k as x,n,L as s,Q as e,m as i,i as et,h as l,_ as mt,K as N,F as ft,G as gt,H as kt,l as xt}from"./index-CEDKhEzr.js";import{c as B}from"./cls-S9IiI6wd.js";import{T as yt}from"./Tooltip-BXoivmFY.js";import"./LoadingOutlined-hrD8In55.js";import"./Trigger-C6BCQff1.js";const p=k({name:"Popconfirm",inheritAttrs:!1,props:{title:[String,Number,Object,Function],description:[String,Number,Object,Function],icon:{type:[String,Number,Object,Function],default:"⚠"},okText:String,cancelText:String,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,showCancel:{type:Boolean,default:!0},trigger:{type:[String,Array],default:"click"},placement:{type:String,default:"top"},open:{type:Boolean,default:void 0},defaultOpen:Boolean,disabled:Boolean,arrow:{type:[Boolean,Object],default:!0},mouseEnterDelay:{type:Number,default:.1},mouseLeaveDelay:{type:Number,default:.1},autoAdjustOverflow:{type:Boolean,default:!0},zIndex:Number,destroyOnHidden:Boolean,destroyTooltipOnHide:Boolean,getPopupContainer:Function,overlayStyle:Object,overlayInnerStyle:Object,classNames:Object,styles:Object},emits:["update:open","openChange","afterOpenChange","confirm","cancel"],setup(a,{slots:c,emit:t,attrs:m}){const o=rt("popconfirm"),f=ut(),r=C(a.defaultOpen??!1),P=_(()=>a.open!==void 0),st=_(()=>P.value?a.open:r.value),w=u=>{a.disabled&&u||(P.value||(r.value=u),t("update:open",u),t("openChange",u))},S=(u,y)=>{if(y)return y();if(typeof u=="function")return u();if(u!=null&&u!=="")return u},at=u=>{t("confirm",u),w(!1)},lt=u=>{t("cancel",u),w(!1)},it=_(()=>{const u=a.title,y=a.description;return u!=null&&u!==""||y!=null&&y!==""||!!c.title||!!c.description});return()=>{var O,z,$,E,D,A,M,L,j,F,H,I,V,W,R,U,G,K,Q,Y,J,X,Z,tt,nt,ot;const u=S(a.title,c.title),y=S(a.description,c.description),q=S(a.icon,c.icon),ct=a.cancelText??f.value.Modal.cancelText,dt=a.okText??f.value.Modal.okText,T=a.okType==="danger",pt=T?"primary":a.okType,h=[v("div",{class:B(`${o}-message`,(O=a.classNames)==null?void 0:O.message),style:(z=a.styles)==null?void 0:z.message},[q&&v("span",{class:B(`${o}-message-icon`,($=a.classNames)==null?void 0:$.icon),style:(E=a.styles)==null?void 0:E.icon},q),v("div",{class:B(`${o}-message-title`,(D=a.classNames)==null?void 0:D.title),style:(A=a.styles)==null?void 0:A.title},u)])];return y&&h.push(v("div",{class:B(`${o}-description`,(M=a.classNames)==null?void 0:M.description),style:(L=a.styles)==null?void 0:L.description},y)),h.push(v("div",{class:B(`${o}-buttons`,(j=a.classNames)==null?void 0:j.buttons),style:(F=a.styles)==null?void 0:F.buttons},[a.showCancel&&v(d,{size:"small",...a.cancelButtonProps,classNames:{...(H=a.cancelButtonProps)==null?void 0:H.classNames,root:B((V=(I=a.cancelButtonProps)==null?void 0:I.classNames)==null?void 0:V.root,(W=a.classNames)==null?void 0:W.cancelBtn)},styles:{...(R=a.cancelButtonProps)==null?void 0:R.styles,root:{...(G=(U=a.cancelButtonProps)==null?void 0:U.styles)==null?void 0:G.root,...(K=a.styles)==null?void 0:K.cancelBtn}},onClick:lt},{default:()=>ct}),v(d,{size:"small",type:pt,danger:T,...a.okButtonProps,classNames:{...(Q=a.okButtonProps)==null?void 0:Q.classNames,root:B((J=(Y=a.okButtonProps)==null?void 0:Y.classNames)==null?void 0:J.root,(X=a.classNames)==null?void 0:X.okBtn)},styles:{...(Z=a.okButtonProps)==null?void 0:Z.styles,root:{...(nt=(tt=a.okButtonProps)==null?void 0:tt.styles)==null?void 0:nt.root,...(ot=a.styles)==null?void 0:ot.okBtn}},onClick:at},{default:()=>dt})])),v(yt,{...m,customPrefixCls:o,arrow:a.arrow,placement:a.placement,trigger:a.trigger,open:st.value,defaultOpen:a.defaultOpen,mouseEnterDelay:a.mouseEnterDelay,mouseLeaveDelay:a.mouseLeaveDelay,disabled:a.disabled,autoAdjustOverflow:a.autoAdjustOverflow,zIndex:a.zIndex,destroyOnHidden:a.destroyOnHidden,destroyTooltipOnHide:a.destroyTooltipOnHide,getPopupContainer:a.getPopupContainer,popupStyle:a.overlayStyle,"onUpdate:open":b=>w(b),onAfterOpenChange:b=>t("afterOpenChange",b)},it.value&&!a.disabled?{default:()=>{var b;return(b=c.default)==null?void 0:b.call(c)},title:()=>h}:{default:()=>{var b;return(b=c.default)==null?void 0:b.call(c)}})}}}),bt={style:{display:"flex",gap:"16px","align-items":"center"}},vt=k({__name:"PopconfirmAsync",setup(a){const c=C(!1),t=C(!1);function m(){c.value=!0,setTimeout(()=>{console.log("提交成功"),c.value=!1},2e3)}function o(){t.value=!0,setTimeout(()=>{console.log("删除成功"),t.value=!1},2e3)}return(f,r)=>(g(),x("div",bt,[n(s(p),{title:"确定要提交吗？",description:"提交后将发送到服务器","ok-text":"提交","cancel-text":"取消","ok-button-props":{loading:c.value},onConfirm:m},{default:e(()=>[n(s(d),null,{default:e(()=>[...r[0]||(r[0]=[i("异步提交",-1)])]),_:1})]),_:1},8,["ok-button-props"]),n(s(p),{title:"确定要执行吗？","ok-text":"确定","cancel-text":"取消","ok-button-props":{disabled:!0}},{default:e(()=>[n(s(d),null,{default:e(()=>[...r[1]||(r[1]=[i("确定按钮禁用",-1)])]),_:1})]),_:1}),n(s(p),{title:"确定要删除吗？","ok-type":"danger","ok-text":"强制删除","cancel-text":"取消","ok-button-props":{loading:t.value},"cancel-button-props":{disabled:t.value},onConfirm:o},{default:e(()=>[n(s(d),null,{default:e(()=>[...r[2]||(r[2]=[i("强制删除",-1)])]),_:1})]),_:1},8,["ok-button-props","cancel-button-props"])]))}}),Bt=`<template>
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
`,Pt=k({__name:"PopconfirmBasic",setup(a){function c(){console.log("已确认删除")}function t(){console.log("已取消")}return(m,o)=>(g(),et(s(p),{title:"确定要删除吗？","ok-text":"确定","cancel-text":"取消",onConfirm:c,onCancel:t},{default:e(()=>[n(s(d),null,{default:e(()=>[...o[0]||(o[0]=[i("删除",-1)])]),_:1})]),_:1}))}}),Ct=`<template>
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
`,Nt={style:{display:"flex","flex-direction":"column",gap:"24px"}},wt=k({__name:"PopconfirmClassNames",setup(a){return(c,t)=>(g(),x("div",Nt,[l("div",null,[t[1]||(t[1]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义消息容器与图标：",-1)),n(s(p),{title:"确定删除这条记录吗？",description:"此操作不可逆，请谨慎操作","class-names":{message:"custom-message",icon:"custom-icon"}},{default:e(()=>[n(s(d),{type:"primary"},{default:e(()=>[...t[0]||(t[0]=[i("删除记录",-1)])]),_:1})]),_:1})]),l("div",null,[t[3]||(t[3]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义标题与描述：",-1)),n(s(p),{title:"重要提示",description:"该操作将影响所有关联数据","class-names":{title:"custom-title",description:"custom-description"}},{default:e(()=>[n(s(d),{type:"default"},{default:e(()=>[...t[2]||(t[2]=[i("批量操作",-1)])]),_:1})]),_:1})]),l("div",null,[t[5]||(t[5]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义按钮组：",-1)),n(s(p),{title:"确定要提交吗？","class-names":{buttons:"custom-buttons",cancelBtn:"custom-cancel",okBtn:"custom-ok"}},{default:e(()=>[n(s(d),null,{default:e(()=>[...t[4]||(t[4]=[i("提交表单",-1)])]),_:1})]),_:1})]),l("div",null,[t[7]||(t[7]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),n(s(p),{title:"确认操作",description:"这是一个测试描述",styles:{message:{padding:"8px 0"},icon:{color:"#52c41a",fontSize:"18px"},title:{fontWeight:"bold",color:"#1677ff"},description:{fontStyle:"italic",color:"#8c8c8c"}}},{default:e(()=>[n(s(d),{type:"dashed"},{default:e(()=>[...t[6]||(t[6]=[i("样式演示",-1)])]),_:1})]),_:1})]),l("div",null,[t[9]||(t[9]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合自定义：",-1)),n(s(p),{title:"确认发布文章？",description:"发布后将立即对所有用户可见","class-names":{message:"gradient-message",buttons:"gradient-buttons"},styles:{icon:{fontSize:"20px"},okBtn:{minWidth:"80px"}}},{default:e(()=>[n(s(d),{type:"primary"},{default:e(()=>[...t[8]||(t[8]=[i("发布",-1)])]),_:1})]),_:1})])]))}}),St=mt(wt,[["__scopeId","data-v-72d9470c"]]),ht=`<template>
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
`,_t={style:{display:"flex","flex-direction":"column",gap:"16px"}},qt={style:{display:"flex",gap:"16px","align-items":"center"}},Tt={style:{display:"flex",gap:"16px","align-items":"center"}},Ot={style:{display:"flex",gap:"16px","align-items":"center"}},zt=k({__name:"PopconfirmControlled",setup(a){const c=C(!1),t=C(!1);function m(){console.log("已确认"),c.value=!1}function o(){console.log("已取消"),c.value=!1}return(f,r)=>(g(),x("div",_t,[l("div",qt,[n(s(p),{open:c.value,"onUpdate:open":r[0]||(r[0]=P=>c.value=P),title:"确定要删除吗？","ok-text":"删除","cancel-text":"取消",onConfirm:m,onCancel:o},{default:e(()=>[n(s(d),null,{default:e(()=>[...r[4]||(r[4]=[i("受控显示",-1)])]),_:1})]),_:1},8,["open"]),n(s(d),{onClick:r[1]||(r[1]=P=>c.value=!c.value)},{default:e(()=>[i(N(c.value?"关闭":"打开"),1)]),_:1}),l("span",null,"当前状态: "+N(c.value?"显示":"隐藏"),1)]),l("div",Tt,[n(s(p),{title:"确定要删除吗？","ok-text":"删除","cancel-text":"取消",disabled:t.value},{default:e(()=>[n(s(d),{disabled:t.value},{default:e(()=>[i(N(t.value?"已禁用":"可点击"),1)]),_:1},8,["disabled"])]),_:1},8,["disabled"]),n(s(d),{onClick:r[2]||(r[2]=P=>t.value=!t.value)},{default:e(()=>[...r[5]||(r[5]=[i("切换禁用状态",-1)])]),_:1})]),l("div",Ot,[n(s(p),{title:"点击确定继续","ok-text":"确定","show-cancel":!1,onConfirm:r[3]||(r[3]=()=>console.log("已确定"))},{default:e(()=>[n(s(d),null,{default:e(()=>[...r[6]||(r[6]=[i("无取消按钮",-1)])]),_:1})]),_:1})])]))}}),$t=`<template>
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
`,Et={style:{display:"flex",gap:"16px","align-items":"center"}},Dt=k({__name:"PopconfirmCustom",setup(a){return(c,t)=>(g(),x("div",Et,[n(s(p),{title:"自定义 z-index",description:"这个气泡框的 z-index 是 2000","z-index":2e3,"ok-text":"确定","cancel-text":"取消"},{default:e(()=>[n(s(d),null,{default:e(()=>[...t[0]||(t[0]=[i("自定义 z-index",-1)])]),_:1})]),_:1}),n(s(p),{title:"自定义样式",description:"这个气泡框使用了自定义样式","ok-text":"确定","cancel-text":"取消","overlay-style":{maxWidth:"400px"},"overlay-inner-style":{backgroundColor:"#f0f5ff",padding:"16px"}},{default:e(()=>[n(s(d),null,{default:e(()=>[...t[1]||(t[1]=[i("自定义样式",-1)])]),_:1})]),_:1}),n(s(p),{title:"无箭头气泡框","ok-text":"确定","cancel-text":"取消",arrow:!1},{default:e(()=>[n(s(d),null,{default:e(()=>[...t[2]||(t[2]=[i("隐藏箭头",-1)])]),_:1})]),_:1}),n(s(p),{title:"箭头指向中心","ok-text":"确定","cancel-text":"取消",arrow:{pointAtCenter:!0}},{default:e(()=>[n(s(d),null,{default:e(()=>[...t[3]||(t[3]=[i("箭头指向中心",-1)])]),_:1})]),_:1})]))}}),At=`<template>
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
`,Mt=k({__name:"PopconfirmCustomText",setup(a){function c(){console.log("已提交")}return(t,m)=>(g(),et(s(p),{title:"确定要提交吗？",description:"提交后将无法修改，请确认信息无误。","ok-text":"提交","cancel-text":"再想想",onConfirm:c},{default:e(()=>[n(s(d),null,{default:e(()=>[...m[0]||(m[0]=[i("提交",-1)])]),_:1})]),_:1}))}}),Lt=`<template>
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
`,jt={style:{display:"flex",gap:"16px","align-items":"center"}},Ft=k({__name:"PopconfirmDanger",setup(a){function c(){console.log("已确认操作")}return(t,m)=>(g(),x("div",jt,[n(s(p),{title:"确定要删除吗？",description:"删除后数据将无法恢复","ok-type":"danger","ok-text":"删除","cancel-text":"取消",onConfirm:c},{default:e(()=>[n(s(d),null,{default:e(()=>[...m[0]||(m[0]=[i("删除（danger）",-1)])]),_:1})]),_:1}),n(s(p),{title:"确定要保存吗？","ok-type":"primary","ok-text":"保存","cancel-text":"取消",onConfirm:c},{default:e(()=>[n(s(d),null,{default:e(()=>[...m[1]||(m[1]=[i("保存（primary）",-1)])]),_:1})]),_:1}),n(s(p),{title:"确定要继续吗？","ok-type":"default","ok-text":"继续","cancel-text":"取消",onConfirm:c},{default:e(()=>[n(s(d),null,{default:e(()=>[...m[2]||(m[2]=[i("继续（default）",-1)])]),_:1})]),_:1})]))}}),Ht=`<template>
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
`,It={style:{display:"flex",gap:"16px"}},Vt=k({__name:"PopconfirmIcon",setup(a){return(c,t)=>(g(),x("div",It,[n(s(p),{title:"确定要删除吗？",icon:"🗑️","ok-text":"删除","cancel-text":"取消"},{default:e(()=>[n(s(d),null,{default:e(()=>[...t[0]||(t[0]=[i("自定义图标",-1)])]),_:1})]),_:1}),n(s(p),{title:"确定要继续吗？","ok-text":"继续","cancel-text":"取消"},{icon:e(()=>[...t[1]||(t[1]=[l("span",{style:{color:"#1890ff","font-size":"16px"}},"ℹ️",-1)])]),default:e(()=>[n(s(d),null,{default:e(()=>[...t[2]||(t[2]=[i("插槽图标",-1)])]),_:1})]),_:1}),n(s(p),{title:"确定要提交吗？",icon:"","ok-text":"提交","cancel-text":"取消"},{default:e(()=>[n(s(d),null,{default:e(()=>[...t[3]||(t[3]=[i("无图标",-1)])]),_:1})]),_:1})]))}}),Wt=`<template>
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
`,Rt={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},Ut=k({__name:"PopconfirmPlacement",setup(a){const c=["topLeft","top","topRight","leftTop","left","leftBottom","rightTop","right","rightBottom","bottomLeft","bottom","bottomRight"];return(t,m)=>(g(),x("div",Rt,[(g(),x(ft,null,gt(c,o=>n(s(p),{key:o,placement:o,title:"确定要执行此操作吗？",onConfirm:()=>console.log(o)},{default:e(()=>[n(s(d),null,{default:e(()=>[i(N(o),1)]),_:2},1024)]),_:2},1032,["placement","onConfirm"])),64))]))}}),Gt=`<template>
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
`,Kt={style:{display:"flex",gap:"16px","align-items":"center"}},Qt=k({__name:"PopconfirmTrigger",setup(a){return(c,t)=>(g(),x("div",Kt,[n(s(p),{title:"确定要删除吗？",trigger:"hover","ok-text":"删除","cancel-text":"取消",onConfirm:t[0]||(t[0]=()=>console.log("hover 确认"))},{default:e(()=>[n(s(d),null,{default:e(()=>[...t[4]||(t[4]=[i("鼠标悬停触发",-1)])]),_:1})]),_:1}),n(s(p),{title:"确定要删除吗？",trigger:"click","ok-text":"删除","cancel-text":"取消",onConfirm:t[1]||(t[1]=()=>console.log("click 确认"))},{default:e(()=>[n(s(d),null,{default:e(()=>[...t[5]||(t[5]=[i("点击触发",-1)])]),_:1})]),_:1}),n(s(p),{title:"确定要删除吗？",trigger:"focus","ok-text":"删除","cancel-text":"取消",onConfirm:t[2]||(t[2]=()=>console.log("focus 确认"))},{default:e(()=>[n(s(d),null,{default:e(()=>[...t[6]||(t[6]=[i("聚焦触发",-1)])]),_:1})]),_:1}),n(s(p),{title:"确定要删除吗？",trigger:"contextMenu","ok-text":"删除","cancel-text":"取消",onConfirm:t[3]||(t[3]=()=>console.log("contextMenu 确认"))},{default:e(()=>[n(s(d),null,{default:e(()=>[...t[7]||(t[7]=[i("右键触发",-1)])]),_:1})]),_:1})]))}}),Yt=`<template>
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
`,Jt={class:"markdown-body"},sn={__name:"popconfirm",setup(a,{expose:c}){return c({frontmatter:{}}),(m,o)=>{const f=kt("DemoBlock");return g(),x("div",Jt,[o[0]||(o[0]=l("h1",{id:"popconfirm-气泡确认框",tabindex:"-1"},"Popconfirm 气泡确认框",-1)),o[1]||(o[1]=l("p",null,"点击元素，弹出气泡式的确认框。",-1)),o[2]||(o[2]=l("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),o[3]||(o[3]=l("ul",null,[l("li",null,"目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户"),l("li",null,"和 confirm 弹出的全屏居中模态对话框相比，交互形式更轻量")],-1)),o[4]||(o[4]=l("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),o[5]||(o[5]=l("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),o[6]||(o[6]=l("p",null,"最简单的用法。",-1)),n(f,{title:"基础用法",source:s(Ct)},{default:e(()=>[n(Pt)]),_:1},8,["source"]),o[7]||(o[7]=l("h3",{id:"自定义按钮文字",tabindex:"-1"},"自定义按钮文字",-1)),o[8]||(o[8]=l("p",null,"自定义确认按钮和取消按钮的文字。",-1)),n(f,{title:"自定义按钮文字",source:s(Lt)},{default:e(()=>[n(Mt)]),_:1},8,["source"]),o[9]||(o[9]=l("h3",{id:"不同位置",tabindex:"-1"},"不同位置",-1)),o[10]||(o[10]=l("p",null,"位置有十二个方向。",-1)),n(f,{title:"不同位置",source:s(Gt)},{default:e(()=>[n(Ut)]),_:1},8,["source"]),o[11]||(o[11]=l("h3",{id:"自定义图标",tabindex:"-1"},"自定义图标",-1)),o[12]||(o[12]=l("p",null,[i("可以通过 "),l("code",null,"icon"),i(" 属性或插槽自定义图标，也可以设置为空字符串隐藏图标。")],-1)),n(f,{title:"自定义图标",source:s(Wt)},{default:e(()=>[n(Vt)]),_:1},8,["source"]),o[13]||(o[13]=l("h3",{id:"按钮类型",tabindex:"-1"},"按钮类型",-1)),o[14]||(o[14]=l("p",null,[i("使用 "),l("code",null,"okType"),i(" 设置确认按钮的类型。"),l("code",null,"danger"),i(" 是 "),l("code",null,"primary + danger"),i(" 的简写形式。")],-1)),n(f,{title:"按钮类型",source:s(Ht)},{default:e(()=>[n(Ft)]),_:1},8,["source"]),o[15]||(o[15]=l("h3",{id:"异步关闭",tabindex:"-1"},"异步关闭",-1)),o[16]||(o[16]=l("p",null,[i("通过 "),l("code",null,"okButtonProps"),i(" 和 "),l("code",null,"cancelButtonProps"),i(" 可以控制按钮的 loading 状态，实现异步确认。")],-1)),n(f,{title:"异步关闭",source:s(Bt)},{default:e(()=>[n(vt)]),_:1},8,["source"]),o[17]||(o[17]=l("h3",{id:"受控模式",tabindex:"-1"},"受控模式",-1)),o[18]||(o[18]=l("p",null,[i("使用 "),l("code",null,"v-model:open"),i(" 控制气泡框的显示隐藏，可以通过 "),l("code",null,"disabled"),i(" 禁用，也可以隐藏取消按钮。")],-1)),n(f,{title:"受控模式",source:s($t)},{default:e(()=>[n(zt)]),_:1},8,["source"]),o[19]||(o[19]=l("h3",{id:"触发方式",tabindex:"-1"},"触发方式",-1)),o[20]||(o[20]=l("p",null,[i("通过 "),l("code",null,"trigger"),i(" 设置触发行为，支持 "),l("code",null,"hover"),i("、"),l("code",null,"click"),i("、"),l("code",null,"focus"),i("、"),l("code",null,"contextMenu"),i("。")],-1)),n(f,{title:"触发方式",source:s(Yt)},{default:e(()=>[n(Qt)]),_:1},8,["source"]),o[21]||(o[21]=l("h3",{id:"自定义配置",tabindex:"-1"},"自定义配置",-1)),o[22]||(o[22]=l("p",null,"可以自定义 z-index、样式、箭头等配置。",-1)),n(f,{title:"自定义配置",source:s(At)},{default:e(()=>[n(Dt)]),_:1},8,["source"]),o[23]||(o[23]=l("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),o[24]||(o[24]=l("p",null,[i("通过 "),l("code",null,"classNames"),i(" / "),l("code",null,"styles"),i(" 对各子元素做细粒度样式控制。")],-1)),n(f,{title:"语义化 className 与 style",source:s(ht)},{default:e(()=>[n(St)]),_:1},8,["source"]),o[25]||(o[25]=xt(`<h2 id="api" tabindex="-1">API</h2><h3 id="popconfirm-props" tabindex="-1">Popconfirm Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>确认框标题（空值时不渲染浮层）</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>description</td><td>确认框描述</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>icon</td><td>提示图标，slot 优先级高于 prop</td><td><code>string | VNode | () =&gt; VNode | slot</code></td><td><code>&#39;⚠&#39;</code></td></tr><tr><td>okText</td><td>确认按钮文字</td><td><code>string</code></td><td>locale 默认值</td></tr><tr><td>cancelText</td><td>取消按钮文字</td><td><code>string</code></td><td>locale 默认值</td></tr><tr><td>okType</td><td>确认按钮类型，<code>&#39;danger&#39;</code> 是 <code>primary + danger</code> 的简写</td><td><code>ButtonType | &#39;danger&#39;</code></td><td><code>&#39;primary&#39;</code></td></tr><tr><td>okButtonProps</td><td>确认按钮的额外 props（loading/disabled 等）</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>cancelButtonProps</td><td>取消按钮的额外 props</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>showCancel</td><td>是否显示取消按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>trigger</td><td>触发行为，可设单值或数组</td><td><code>&#39;hover&#39; | &#39;click&#39; | &#39;focus&#39; | &#39;contextMenu&#39;</code></td><td><code>&#39;click&#39;</code></td></tr><tr><td>placement</td><td>气泡框位置，溢出视口时自动翻转</td><td>12 个方向（同 Tooltip）</td><td><code>&#39;top&#39;</code></td></tr><tr><td>open (v-model)</td><td>用于手动控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否显示（非受控）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>禁用，禁用时点击触发器不会弹出</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>arrow</td><td>是否显示箭头，可对象配置</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入延时显示（trigger=hover），单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出延时隐藏（trigger=hover），单位秒</td><td><code>number</code></td><td><code>0.1</code></td></tr><tr><td>autoAdjustOverflow</td><td>浮层超出视口时自动翻转方向</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>自定义浮层 z-index</td><td><code>number</code></td><td><code>1070</code></td></tr><tr><td>destroyOnHidden</td><td>隐藏时销毁浮层 DOM</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>getPopupContainer</td><td>自定义浮层挂载容器（默认 <code>body</code>）</td><td><code>(triggerNode: HTMLElement) =&gt; HTMLElement</code></td><td>-</td></tr><tr><td>overlayStyle</td><td>卡片外层样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr><tr><td>overlayInnerStyle</td><td>卡片内层样式</td><td><code>Record&lt;string, string&gt;</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>PopconfirmClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>PopconfirmStyles</code></td><td>-</td></tr></tbody></table><h3 id="popconfirm-events" tabindex="-1">Popconfirm Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击确认的回调（携带 MouseEvent）</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>cancel</td><td>点击取消的回调（携带 MouseEvent）</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>update:open</td><td>显示隐藏的回调（v-model）</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>openChange</td><td>显示隐藏的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>浮层动画结束时触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="popconfirm-slots" tabindex="-1">Popconfirm Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发气泡确认框的元素</td></tr><tr><td>title</td><td>标题（与 <code>title</code> prop 二选一，slot 优先）</td></tr><tr><td>description</td><td>描述（与 <code>description</code> prop 二选一，slot 优先）</td></tr><tr><td>icon</td><td>图标（与 <code>icon</code> prop 二选一，slot 优先）</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对气泡确认框的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义消息容器与图标 --&gt;
  &lt;Popconfirm
    title=&quot;确定删除这条记录吗？&quot;
    description=&quot;此操作不可逆，请谨慎操作&quot;
    :class-names=&quot;{
      message: &#39;custom-message&#39;,
      icon: &#39;custom-icon&#39;,
    }&quot;
  &gt;
    &lt;Button type=&quot;primary&quot;&gt;删除记录&lt;/Button&gt;
  &lt;/Popconfirm&gt;

  &lt;!-- 自定义按钮样式 --&gt;
  &lt;Popconfirm
    title=&quot;确定要提交吗？&quot;
    :class-names=&quot;{
      cancelBtn: &#39;custom-cancel&#39;,
      okBtn: &#39;custom-ok&#39;,
    }&quot;
  &gt;
    &lt;Button&gt;提交表单&lt;/Button&gt;
  &lt;/Popconfirm&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:global(.custom-message) {
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  padding: 8px;
  border-radius: 6px;
  border-left: 3px solid #1677ff;
}

:global(.custom-icon) {
  color: #1677ff;
  font-size: 18px;
}

:global(.custom-cancel:hover) {
  border-color: #ff4d4f;
  color: #ff4d4f;
}

:global(.custom-ok) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  border: none;
  box-shadow: 0 2px 4px rgba(82, 196, 26, 0.3);
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制各部分 --&gt;
  &lt;Popconfirm
    title=&quot;确认操作&quot;
    description=&quot;这是一个测试描述&quot;
    :styles=&quot;{
      message: { padding: &#39;8px 0&#39; },
      icon: { color: &#39;#52c41a&#39;, fontSize: &#39;18px&#39; },
      title: { fontWeight: &#39;bold&#39;, color: &#39;#1677ff&#39; },
      description: { fontStyle: &#39;italic&#39;, color: &#39;#8c8c8c&#39; },
    }&quot;
  &gt;
    &lt;Button type=&quot;dashed&quot;&gt;样式演示&lt;/Button&gt;
  &lt;/Popconfirm&gt;

  &lt;!-- 自定义按钮尺寸 --&gt;
  &lt;Popconfirm
    title=&quot;确认发布？&quot;
    :styles=&quot;{
      okBtn: { minWidth: &#39;80px&#39;, fontWeight: &#39;bold&#39; },
      cancelBtn: { color: &#39;#8c8c8c&#39; },
    }&quot;
  &gt;
    &lt;Button type=&quot;primary&quot;&gt;发布&lt;/Button&gt;
  &lt;/Popconfirm&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>cancelBtn</code> 和 <code>okBtn</code> 通过 Button 组件的 <code>classNames.root</code> 和 <code>styles.root</code> 实现样式传递</li><li>如需更细粒度控制按钮内部（如图标），可通过 <code>okButtonProps.classNames</code> 和 <code>cancelButtonProps.classNames</code> 传递完整的 Button classNames</li><li>Popconfirm 浮层挂载在 <code>body</code> 外，样式需使用 <code>:global()</code> 而非 <code>:deep()</code></li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Popconfirm 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。</p>`,24))])}}};export{sn as default};
