import{B as A}from"./Button-CtozVOI9.js";import{k as F,I as H,j as o,F as J,z as L,c as z,i as f,w as x,e as B,M as b,G as U,d as u,g as N,f as G,B as K,h as V}from"./index-DvxRruME.js";import{c as k}from"./cls-S9IiI6wd.js";import"./icons-CgCOAJDO.js";let X=0;function Q(){return`__upload_${Date.now()}_${X++}`}function Y(t){return t?t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(1)} KB`:`${(t/1024/1024).toFixed(1)} MB`:""}const _=F({name:"Upload",props:{accept:String,action:{type:String,default:""},directory:Boolean,disabled:Boolean,fileList:Array,listType:{type:String,default:"text"},maxCount:Number,multiple:Boolean,name:{type:String,default:"file"},showUploadList:{type:Boolean,default:!0},beforeUpload:Function,customRequest:Function,headers:Object,data:Object,withCredentials:Boolean,openFileDialogOnClick:{type:Boolean,default:!0},method:{type:String,default:"post"}},emits:["update:fileList","change","remove","preview","download"],setup(t,{slots:d,emit:s}){const n=H("upload"),l=L(),i=L([]),a=L(!1),p=z(()=>t.fileList??i.value),y=e=>{i.value=e,s("update:fileList",e)},C=e=>{const r=Q(),g={uid:r,name:e.name,size:e.size,type:e.type,status:"uploading",percent:0,originFileObj:e},$=[...p.value,g];t.maxCount&&$.length>t.maxCount&&$.splice(0,$.length-t.maxCount),y($),s("change",{file:g,fileList:$});const j=c=>{const h=p.value.map(v=>v.uid===r?{...v,status:"done",response:c,percent:100}:v);y(h),s("change",{file:{...g,status:"done",percent:100},fileList:h})},P=(c,h)=>{const v=p.value.map(R=>R.uid===r?{...R,status:"error",error:c,response:h}:R);y(v),s("change",{file:{...g,status:"error"},fileList:v})},O=c=>{const h=p.value.map(v=>v.uid===r?{...v,percent:c.percent}:v);y(h)};if(t.customRequest){t.customRequest({action:t.action??"",data:t.data,file:e,filename:t.name,headers:t.headers,withCredentials:t.withCredentials,onSuccess:j,onError:P,onProgress:O});return}if(!t.action){setTimeout(()=>j({}),500);return}const m=new XMLHttpRequest,T=new FormData;t.data&&Object.entries(t.data).forEach(([c,h])=>T.append(c,h)),T.append(t.name??"file",e),m.upload.onprogress=c=>{c.lengthComputable&&O({percent:Math.round(c.loaded/c.total*100)})},m.onload=()=>{m.status>=200&&m.status<300?j(m.response):P(new Error(`HTTP ${m.status}`))},m.onerror=()=>P(new Error("Network error")),t.withCredentials&&(m.withCredentials=!0),t.headers&&Object.entries(t.headers).forEach(([c,h])=>m.setRequestHeader(c,h)),m.open(t.method??"post",t.action??""),m.send(T)},w=async e=>{for(const r of e)t.beforeUpload&&await t.beforeUpload(r,e)===!1||C(r)},W=e=>{const r=Array.from(e.target.files??[]);w(r),l.value&&(l.value.value="")},S=e=>{var g;if(e.preventDefault(),a.value=!1,t.disabled)return;const r=Array.from(((g=e.dataTransfer)==null?void 0:g.files)??[]);w(r)},E=e=>{const r=p.value.filter(g=>g.uid!==e.uid);y(r),s("remove",e),s("change",{file:{...e,status:"removed"},fileList:r})},q=()=>{var e;!t.disabled&&t.openFileDialogOnClick&&((e=l.value)==null||e.click())},D=z(()=>t.listType==="picture-card"||t.listType==="picture-circle"),I=()=>!t.showUploadList||p.value.length===0?null:o("div",{class:`${n}-list ${n}-list-${t.listType}`},[p.value.map(e=>o("div",{key:e.uid,class:k(`${n}-list-item`,{[`${n}-list-item-${e.status}`]:!!e.status})},[(t.listType==="picture"||D.value)&&e.thumbUrl&&o("div",{class:`${n}-list-item-thumbnail`},[o("img",{src:e.thumbUrl,alt:e.name},null)]),D.value?o("div",{class:`${n}-list-item-card`},[e.thumbUrl?o("img",{src:e.thumbUrl,alt:e.name},null):o("span",{class:`${n}-list-item-icon`},[f("📄")]),e.status==="uploading"&&o("div",{class:`${n}-list-item-progress`},[o("div",{class:`${n}-list-item-progress-bar`,style:{width:`${e.percent??0}%`}},null)]),o("div",{class:`${n}-list-item-card-actions`},[e.url&&o("button",{class:`${n}-list-item-action`,onClick:()=>s("preview",e)},[f("👁")]),o("button",{class:`${n}-list-item-action`,onClick:()=>E(e)},[f("🗑")])])]):o("div",{class:`${n}-list-item-info`},[o("span",{class:`${n}-list-item-icon`},[e.status==="error"?"❌":e.status==="done"?"✅":"📄"]),o("span",{class:`${n}-list-item-name`},[e.name]),o("span",{class:`${n}-list-item-size`},[Y(e.size)]),e.status==="uploading"&&o("div",{class:`${n}-list-item-progress`},[o("div",{class:`${n}-list-item-progress-bar`,style:{width:`${e.percent??0}%`}},null)]),o("button",{class:`${n}-list-item-action ${n}-list-item-remove`,onClick:()=>E(e)},[f("✕")])])]))]),Z=z(()=>t.maxCount?p.value.length<t.maxCount:!0),M=()=>D.value?Z.value?o("div",{class:k(`${n}-select`,`${n}-select-${t.listType}`,{[`${n}-disabled`]:t.disabled}),onClick:q,onDragover:e=>{e.preventDefault(),a.value=!0},onDragleave:()=>{a.value=!1},onDrop:S},[d.default?d.default():o("div",{class:`${n}-select-btn`},[o("span",{class:`${n}-select-icon`},[f("+")]),o("span",{class:`${n}-select-text`},[f("上传")])])]):null:o("div",{class:k(`${n}-select`,{[`${n}-disabled`]:t.disabled,[`${n}-drag`]:a.value}),onClick:q,onDragover:e=>{e.preventDefault(),a.value=!0},onDragleave:()=>{a.value=!1},onDrop:S},[d.default?d.default():null]);return()=>o("div",{class:k(n,{[`${n}-picture-card-wrapper`]:t.listType==="picture-card",[`${n}-picture-circle-wrapper`]:t.listType==="picture-circle"})},[o("input",{ref:l,type:"file",accept:t.accept,multiple:t.multiple,style:{display:"none"},onChange:W,webkitdirectory:t.directory||void 0},null),D.value?o("div",{class:`${n}-list-${t.listType}-wrapper`},[I(),M()]):o(J,null,[M(),I()])])}}),tt=F({__name:"UploadBasic",setup(t){const d=L([]),s=n=>{n.file.status==="done"?console.log(`${n.file.name} 上传成功`):n.file.status==="error"&&console.log(`${n.file.name} 上传失败`),d.value=n.fileList};return(n,l)=>(x(),B(U(_),{"file-list":d.value,"onUpdate:fileList":l[0]||(l[0]=i=>d.value=i),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",multiple:!0,onChange:s},{default:b(()=>[o(U(A),null,{default:b(()=>[...l[1]||(l[1]=[f("点击上传",-1)])]),_:1})]),_:1},8,["file-list"]))}}),et=`<template>
  <Upload
    v-model:file-list="fileList"
    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
    :multiple="true"
    @change="handleChange"
  >
    <Button>点击上传</Button>
  </Upload>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload, Button } from 'ant-design-hmfw'
import type { UploadFile } from 'ant-design-hmfw'

const fileList = ref<UploadFile[]>([])

const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
  if (info.file.status === 'done') {
    console.log(\`\${info.file.name} 上传成功\`)
  } else if (info.file.status === 'error') {
    console.log(\`\${info.file.name} 上传失败\`)
  }
  fileList.value = info.fileList
}
<\/script>
`,nt=F({__name:"UploadCustom",setup(t){const d=L([]),s=i=>i.type.startsWith("image/")?i.size/1024/1024<2?!0:(console.error("图片大小不能超过 2MB！"),!1):(console.error("只能上传图片文件！"),!1),n=({file:i,onSuccess:a,onError:p,onProgress:y})=>{let C=0;const w=setInterval(()=>{C+=20,y({percent:C}),C>=100&&(clearInterval(w),a({url:URL.createObjectURL(i)}))},200)},l=i=>{d.value=i.fileList};return(i,a)=>(x(),B(U(_),{"file-list":d.value,"onUpdate:fileList":a[0]||(a[0]=p=>d.value=p),"custom-request":n,"before-upload":s,accept:".jpg,.jpeg,.png,.gif",onChange:l},{default:b(()=>[o(U(A),null,{default:b(()=>[...a[1]||(a[1]=[f("选择图片",-1)])]),_:1})]),_:1},8,["file-list"]))}}),lt=`<template>
  <Upload
    v-model:file-list="fileList"
    :custom-request="customRequest"
    :before-upload="beforeUpload"
    accept=".jpg,.jpeg,.png,.gif"
    @change="handleChange"
  >
    <Button>选择图片</Button>
  </Upload>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload, Button } from 'ant-design-hmfw'
import type { UploadFile } from 'ant-design-hmfw'

const fileList = ref<UploadFile[]>([])

const beforeUpload = (file: File) => {
  const isImage = file.type.startsWith('image/')
  if (!isImage) {
    console.error('只能上传图片文件！')
    return false
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    console.error('图片大小不能超过 2MB！')
    return false
  }
  return true
}

const customRequest = ({ file, onSuccess, onError, onProgress }: any) => {
  // 模拟上传进度
  let percent = 0
  const timer = setInterval(() => {
    percent += 20
    onProgress({ percent })
    if (percent >= 100) {
      clearInterval(timer)
      onSuccess({ url: URL.createObjectURL(file) })
    }
  }, 200)
}

const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
  fileList.value = info.fileList
}
<\/script>
`,ot=F({__name:"UploadDragger",setup(t){const d=L([]),s=l=>{console.log("文件状态：",l.file.status),d.value=l.fileList},n=l=>{var i;console.log("拖拽文件：",(i=l.dataTransfer)==null?void 0:i.files)};return(l,i)=>(x(),B(U(_).Dragger,{"file-list":d.value,"onUpdate:fileList":i[0]||(i[0]=a=>d.value=a),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",multiple:!0,onChange:s,onDrop:n},{default:b(()=>[...i[1]||(i[1]=[u("div",{style:{padding:"32px","text-align":"center"}},[u("p",{style:{"font-size":"48px","margin-bottom":"8px"}},"📥"),u("p",{style:{"font-size":"16px","margin-bottom":"4px"}},"点击或拖拽文件到此区域上传"),u("p",{style:{color:"#999","font-size":"14px"}},"支持单个或批量上传，严禁上传公司数据或其他违禁文件")],-1)])]),_:1},8,["file-list"]))}}),it=`<template>
  <Upload.Dragger
    v-model:file-list="fileList"
    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
    :multiple="true"
    @change="handleChange"
    @drop="handleDrop"
  >
    <div style="padding: 32px; text-align: center;">
      <p style="font-size: 48px; margin-bottom: 8px;">📥</p>
      <p style="font-size: 16px; margin-bottom: 4px;">点击或拖拽文件到此区域上传</p>
      <p style="color: #999; font-size: 14px;">支持单个或批量上传，严禁上传公司数据或其他违禁文件</p>
    </div>
  </Upload.Dragger>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload } from 'ant-design-hmfw'
import type { UploadFile } from 'ant-design-hmfw'

const fileList = ref<UploadFile[]>([])

const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
  console.log('文件状态：', info.file.status)
  fileList.value = info.fileList
}

const handleDrop = (event: DragEvent) => {
  console.log('拖拽文件：', event.dataTransfer?.files)
}
<\/script>
`,dt={key:0},at=F({__name:"UploadPictureCard",setup(t){const d=L([{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]),s=l=>{console.log("预览：",l.url||l.thumbUrl)},n=l=>{d.value=l.fileList};return(l,i)=>(x(),B(U(_),{"file-list":d.value,"onUpdate:fileList":i[0]||(i[0]=a=>d.value=a),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188","list-type":"picture-card","max-count":8,onPreview:s,onChange:n},{default:b(()=>[d.value.length<8?(x(),N("div",dt,[...i[1]||(i[1]=[u("div",null,"+ 上传",-1)])])):G("",!0)]),_:1},8,["file-list"]))}}),st=`<template>
  <Upload
    v-model:file-list="fileList"
    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
    list-type="picture-card"
    :max-count="8"
    @preview="handlePreview"
    @change="handleChange"
  >
    <div v-if="fileList.length < 8">
      <div>+ 上传</div>
    </div>
  </Upload>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload } from 'ant-design-hmfw'
import type { UploadFile } from 'ant-design-hmfw'

const fileList = ref<UploadFile[]>([
  {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
])

const handlePreview = (file: UploadFile) => {
  console.log('预览：', file.url || file.thumbUrl)
}

const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
  fileList.value = info.fileList
}
<\/script>
`,rt={class:"markdown-body"},mt={__name:"upload",setup(t,{expose:d}){return d({frontmatter:{}}),(n,l)=>{const i=K("DemoBlock");return x(),N("div",rt,[l[0]||(l[0]=V('<h1 id="upload-" tabindex="-1">Upload 上传</h1><p>文件选择上传和拖拽上传控件。</p><h2 id="" tabindex="-1">何时使用</h2><p>上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。</p><ul><li>当需要上传一个或一些文件时。</li><li>当需要展现上传的进度时。</li><li>当需要使用拖拽交互时。</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">点击上传</h3><p>经典款式，用户点击按钮弹出文件选择框。</p>',8)),o(i,{title:"点击上传",source:U(et)},{default:b(()=>[o(tt)]),_:1},8,["source"]),l[1]||(l[1]=u("h3",{id:"-3",tabindex:"-1"},"图片卡片",-1)),l[2]||(l[2]=u("p",null,[f("使用 "),u("code",null,'list-type="picture-card"'),f(" 展示图片卡片样式。")],-1)),o(i,{title:"图片卡片",source:U(st)},{default:b(()=>[o(at)]),_:1},8,["source"]),l[3]||(l[3]=u("h3",{id:"-4",tabindex:"-1"},"拖拽上传",-1)),l[4]||(l[4]=u("p",null,"可以把文件拖入指定区域，完成上传，同样支持点击上传。",-1)),o(i,{title:"拖拽上传",source:U(it)},{default:b(()=>[o(ot)]),_:1},8,["source"]),l[5]||(l[5]=u("h3",{id:"-5",tabindex:"-1"},"自定义上传",-1)),l[6]||(l[6]=u("p",null,[f("通过 "),u("code",null,"custom-request"),f(" 覆盖默认的上传行为，实现自定义上传逻辑。")],-1)),o(i,{title:"自定义上传",source:U(lt)},{default:b(()=>[o(nt)]),_:1},8,["source"]),l[7]||(l[7]=V('<h2 id="api" tabindex="-1">API</h2><h3 id="upload-props" tabindex="-1">Upload Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>fileList(v-model)</td><td>已经上传的文件列表（受控）</td><td><code>UploadFile[]</code></td><td>-</td></tr><tr><td>accept</td><td>接受上传的文件类型，详见 input accept Attribute</td><td><code>string</code></td><td>-</td></tr><tr><td>action</td><td>上传的地址</td><td><code>string | ((file: File) =&gt; Promise&lt;string&gt;)</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>listType</td><td>上传列表的内建样式</td><td><code>&#39;text&#39; | &#39;picture&#39; | &#39;picture-card&#39; | &#39;picture-circle&#39;</code></td><td><code>&#39;text&#39;</code></td></tr><tr><td>maxCount</td><td>限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件</td><td><code>number</code></td><td>-</td></tr><tr><td>multiple</td><td>是否支持多选文件，<code>ie10+</code> 支持。开启后按住 ctrl 可选择多个文件</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>发到后台的文件参数名</td><td><code>string</code></td><td><code>&#39;file&#39;</code></td></tr><tr><td>showUploadList</td><td>是否展示文件列表</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>beforeUpload</td><td>上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传</td><td><code>(file: File, fileList: File[]) =&gt; boolean | Promise&lt;File | boolean&gt;</code></td><td>-</td></tr><tr><td>customRequest</td><td>通过覆盖默认的上传行为，可以自定义自己的上传实现</td><td><code>(options: UploadRequestOption) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="uploadfile" tabindex="-1">UploadFile</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>uid</td><td>文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突</td><td><code>string</code></td></tr><tr><td>name</td><td>文件名</td><td><code>string</code></td></tr><tr><td>size</td><td>文件大小（字节）</td><td><code>number</code></td></tr><tr><td>type</td><td>文件类型</td><td><code>string</code></td></tr><tr><td>status</td><td>上传状态</td><td><code>&#39;uploading&#39; | &#39;done&#39; | &#39;error&#39; | &#39;removed&#39;</code></td></tr><tr><td>percent</td><td>上传进度</td><td><code>number</code></td></tr><tr><td>url</td><td>下载链接额外的 html 属性</td><td><code>string</code></td></tr><tr><td>thumbUrl</td><td>缩略图地址</td><td><code>string</code></td></tr></tbody></table><h3 id="upload-events" tabindex="-1">Upload Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:fileList</td><td>文件列表变化时的回调</td><td><code>(fileList: UploadFile[]) =&gt; void</code></td></tr><tr><td>change</td><td>上传文件改变时的状态，详见 change</td><td><code>(info: { file: UploadFile; fileList: UploadFile[] }) =&gt; void</code></td></tr><tr><td>remove</td><td>点击移除文件时的回调，返回值为 false 时不移除</td><td><code>(file: UploadFile) =&gt; boolean | Promise&lt;boolean&gt;</code></td></tr><tr><td>preview</td><td>点击文件链接或预览图标时的回调</td><td><code>(file: UploadFile) =&gt; void</code></td></tr><tr><td>drop</td><td>拖拽文件进入上传区域时执行的回调（仅 Dragger 模式）</td><td><code>(event: DragEvent) =&gt; void</code></td></tr></tbody></table><h3 id="upload-slots" tabindex="-1">Upload Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发上传的控件，通常为按钮或图标</td></tr></tbody></table>',9))])}}};export{mt as default};
