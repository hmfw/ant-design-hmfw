import{B as W}from"./Button-BO3Wom0-.js";import{m as F,L as dt,B as D,l as o,F as lt,d as w,k as m,q as at,y as x,g as _,P as h,I as b,f,i as Z,h as it,E as rt,j as H}from"./index-Qxz1plB-.js";import{c as C}from"./cls-S9IiI6wd.js";import"./icons-CwohsDOf.js";import"./Icon-BOXWN2fu.js";let st=0;function ct(){return`__upload_${Date.now()}_${st++}`}function ut(e){return e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/1024/1024).toFixed(1)} MB`:""}async function pt(e,l){return typeof e=="function"?await e(l):e??""}async function ft(e,l){return typeof e=="function"?await e(l)??{}:e??{}}const P=F({name:"Upload",props:{accept:String,action:[String,Function],directory:Boolean,disabled:Boolean,fileList:Array,defaultFileList:Array,listType:{type:String,default:"text"},type:{type:String,default:"select"},maxCount:Number,multiple:Boolean,name:{type:String,default:"file"},showUploadList:{type:[Boolean,Object],default:!0},beforeUpload:Function,customRequest:Function,headers:Object,data:[Object,Function],withCredentials:Boolean,openFileDialogOnClick:{type:Boolean,default:!0},method:{type:String,default:"post"},onRemove:Function},emits:["update:fileList","change","remove","preview","download","drop"],setup(e,{slots:l,emit:r}){const n=dt("upload"),d=D(),a=D(e.defaultFileList??[]),u=D(0),$=w(()=>u.value>0),g=w(()=>e.fileList??a.value),U=t=>{a.value=t,r("update:fileList",t)},k=t=>{const i=new XMLHttpRequest,s=new FormData;t.data&&Object.entries(t.data).forEach(([c,p])=>s.append(c,p)),s.append(t.filename??"file",t.file),i.upload.onprogress=c=>{c.lengthComputable&&t.onProgress({percent:Math.round(c.loaded/c.total*100)})},i.onload=()=>{i.status>=200&&i.status<300?t.onSuccess(i.response,t.file):t.onError(new Error(`HTTP ${i.status}`))},i.onerror=()=>t.onError(new Error("Network error")),t.withCredentials&&(i.withCredentials=!0),t.headers&&Object.entries(t.headers).forEach(([c,p])=>i.setRequestHeader(c,p)),i.open(e.method??"post",t.action),i.send(s)},K=async t=>{const i=ct(),s={uid:i,name:t.name,size:t.size,type:t.type,status:"uploading",percent:0,originFileObj:t},c=[...g.value,s];e.maxCount===1?c.splice(0,c.length-1):e.maxCount&&c.length>e.maxCount&&c.splice(e.maxCount),U(c),r("change",{file:s,fileList:c});const p=y=>{const L=g.value.map(v=>v.uid===i?{...v,status:"done",response:y,percent:100}:v);U(L),r("change",{file:{...s,status:"done",percent:100,response:y},fileList:L})},et=(y,L)=>{const v=g.value.map(j=>j.uid===i?{...j,status:"error",error:y,response:L}:j);U(v),r("change",{file:{...s,status:"error",error:y,response:L},fileList:v})},nt=y=>{const L=g.value.map(v=>v.uid===i?{...v,percent:y.percent}:v);U(L),r("change",{file:{...s,percent:y.percent},fileList:L,event:y})},V=await pt(e.action,t),ot=await ft(e.data,s),N={action:V,data:ot,file:t,filename:e.name,headers:e.headers,withCredentials:e.withCredentials,onSuccess:p,onError:et,onProgress:nt};if(e.customRequest){e.customRequest(N,{defaultRequest:k});return}if(!V){setTimeout(()=>p({}),500);return}k(N)},q=async t=>{for(const i of t){let s=i;if(e.beforeUpload){const c=e.beforeUpload(i,t),p=await Promise.resolve(c);if(p===!1)continue;p instanceof File?s=p:p instanceof Blob&&(s=new File([p],i.name,{type:p.type||i.type}))}await K(s)}},X=t=>{const i=Array.from(t.target.files??[]);q(i),d.value&&(d.value.value="")},T=t=>{t.preventDefault(),u.value+=1},E=t=>{t.preventDefault(),u.value=Math.max(0,u.value-1)},S=t=>{t.preventDefault()},z=t=>{var s;if(t.preventDefault(),u.value=0,r("drop",t),e.disabled)return;const i=Array.from(((s=t.dataTransfer)==null?void 0:s.files)??[]);q(i)},I=async t=>{if((e.onRemove?await Promise.resolve(e.onRemove(t)):!0)===!1)return;const s=g.value.filter(c=>c.uid!==t.uid);U(s),r("remove",t),r("change",{file:{...t,status:"removed"},fileList:s})},R=()=>{var t;!e.disabled&&e.openFileDialogOnClick&&((t=d.value)==null||t.click())},B=w(()=>e.listType==="picture-card"||e.listType==="picture-circle"),G=w(()=>e.type==="drag"),Q=w(()=>e.showUploadList!==!1),O=w(()=>typeof e.showUploadList=="object"?e.showUploadList.showRemoveIcon!==!1:!0),Y=w(()=>typeof e.showUploadList=="object"?e.showUploadList.showPreviewIcon!==!1:!0),A=()=>!Q.value||g.value.length===0?null:o("div",{class:`${n}-list ${n}-list-${e.listType}`},[g.value.map(t=>o("div",{key:t.uid,class:C(`${n}-list-item`,{[`${n}-list-item-${t.status}`]:!!t.status})},[(e.listType==="picture"||B.value)&&t.thumbUrl&&o("div",{class:`${n}-list-item-thumbnail`},[o("img",{src:t.thumbUrl,alt:t.name},null)]),B.value?o("div",{class:`${n}-list-item-card`},[t.thumbUrl?o("img",{src:t.thumbUrl,alt:t.name},null):o("span",{class:`${n}-list-item-icon`},[m("📄")]),t.status==="uploading"&&o("div",{class:`${n}-list-item-progress`},[o("div",{class:`${n}-list-item-progress-bar`,style:{width:`${t.percent??0}%`}},null)]),o("div",{class:`${n}-list-item-card-actions`},[t.url&&Y.value&&o("button",{class:`${n}-list-item-action`,onClick:()=>r("preview",t)},[m("👁")]),O.value&&o("button",{class:`${n}-list-item-action`,onClick:()=>I(t)},[m("🗑")])])]):o("div",{class:`${n}-list-item-info`},[o("span",{class:`${n}-list-item-icon`},[t.status==="error"?"❌":t.status==="done"?"✅":"📄"]),o("span",{class:`${n}-list-item-name`},[t.name]),o("span",{class:`${n}-list-item-size`},[ut(t.size)]),t.status==="uploading"&&o("div",{class:`${n}-list-item-progress`},[o("div",{class:`${n}-list-item-progress-bar`,style:{width:`${t.percent??0}%`}},null)]),O.value&&o("button",{class:`${n}-list-item-action ${n}-list-item-remove`,onClick:()=>I(t)},[m("✕")])])]))]),tt=w(()=>e.maxCount?g.value.length<e.maxCount:!0),M=()=>{var t;return B.value?tt.value?o("div",{class:C(`${n}-select`,`${n}-select-${e.listType}`,{[`${n}-disabled`]:e.disabled}),onClick:R,onDragenter:T,onDragover:S,onDragleave:E,onDrop:z},[l.default?l.default():o("div",{class:`${n}-select-btn`},[o("span",{class:`${n}-select-icon`},[m("+")]),o("span",{class:`${n}-select-text`},[m("上传")])])]):null:G.value?o("div",{class:C(`${n}-drag`,{[`${n}-drag-uploading`]:g.value.some(i=>i.status==="uploading"),[`${n}-drag-hover`]:$.value,[`${n}-disabled`]:e.disabled}),onClick:R,onDragenter:T,onDragover:S,onDragleave:E,onDrop:z},[o("div",{class:`${n}-drag-container`},[(t=l.default)==null?void 0:t.call(l)])]):o("div",{class:C(`${n}-select`,{[`${n}-disabled`]:e.disabled}),onClick:R},[l.default?l.default():null])};return()=>o("div",{class:C(n,{[`${n}-picture-card-wrapper`]:e.listType==="picture-card",[`${n}-picture-circle-wrapper`]:e.listType==="picture-circle"})},[o("input",{ref:d,type:"file",accept:e.accept,multiple:e.multiple,style:{display:"none"},onChange:X,webkitdirectory:e.directory||void 0},null),B.value?o("div",{class:`${n}-list-${e.listType}-wrapper`},[A(),M()]):o(lt,null,[M(),A()])])}}),J=F({name:"UploadDragger",inheritAttrs:!1,setup(e,{slots:l,attrs:r}){return()=>o(P,at(r,{type:"drag"}),{default:()=>{var n;return(n=l.default)==null?void 0:n.call(l)}})}});P.Dragger=J;const mt=F({__name:"UploadBasic",setup(e){const l=D([]),r=n=>{n.file.status==="done"?console.log(`${n.file.name} 上传成功`):n.file.status==="error"&&console.log(`${n.file.name} 上传失败`),l.value=n.fileList};return(n,d)=>(x(),_(b(P),{"file-list":l.value,"onUpdate:fileList":d[0]||(d[0]=a=>l.value=a),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",multiple:!0,onChange:r},{default:h(()=>[o(b(W),null,{default:h(()=>[...d[1]||(d[1]=[m("点击上传",-1)])]),_:1})]),_:1},8,["file-list"]))}}),gt=`<template>
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
`,vt=F({__name:"UploadCustom",setup(e){const l=D([]),r=a=>a.type.startsWith("image/")?a.size/1024/1024<2?!0:(console.error("图片大小不能超过 2MB！"),!1):(console.error("只能上传图片文件！"),!1),n=({file:a,onSuccess:u,onError:$,onProgress:g})=>{let U=0;const k=setInterval(()=>{U+=20,g({percent:U}),U>=100&&(clearInterval(k),u({url:URL.createObjectURL(a)}))},200)},d=a=>{l.value=a.fileList};return(a,u)=>(x(),_(b(P),{"file-list":l.value,"onUpdate:fileList":u[0]||(u[0]=$=>l.value=$),"custom-request":n,"before-upload":r,accept:".jpg,.jpeg,.png,.gif",onChange:d},{default:h(()=>[o(b(W),null,{default:h(()=>[...u[1]||(u[1]=[m("选择图片",-1)])]),_:1})]),_:1},8,["file-list"]))}}),ht=`<template>
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
`,bt=F({__name:"UploadDragger",setup(e){const l=D([]),r=d=>{console.log("文件状态：",d.file.status),l.value=d.fileList},n=d=>{var a;console.log("拖拽文件：",(a=d.dataTransfer)==null?void 0:a.files)};return(d,a)=>(x(),_(b(J),{"file-list":l.value,"onUpdate:fileList":a[0]||(a[0]=u=>l.value=u),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",multiple:!0,onChange:r,onDrop:n},{default:h(()=>[...a[1]||(a[1]=[f("div",{style:{padding:"32px","text-align":"center"}},[f("p",{style:{"font-size":"48px","margin-bottom":"8px"}},"📥"),f("p",{style:{"font-size":"16px","margin-bottom":"4px"}},"点击或拖拽文件到此区域上传"),f("p",{style:{color:"#999","font-size":"14px"}},"支持单个或批量上传，严禁上传公司数据或其他违禁文件")],-1)])]),_:1},8,["file-list"]))}}),Ut=`<template>
  <UploadDragger
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
  </UploadDragger>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UploadDragger } from 'ant-design-hmfw'
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
`,yt={key:0},Lt=F({__name:"UploadPictureCard",setup(e){const l=D([{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]),r=d=>{console.log("预览：",d.url||d.thumbUrl)},n=d=>{l.value=d.fileList};return(d,a)=>(x(),_(b(P),{"file-list":l.value,"onUpdate:fileList":a[0]||(a[0]=u=>l.value=u),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188","list-type":"picture-card","max-count":8,onPreview:r,onChange:n},{default:h(()=>[l.value.length<8?(x(),Z("div",yt,[...a[1]||(a[1]=[f("div",null,"+ 上传",-1)])])):it("",!0)]),_:1},8,["file-list"]))}}),wt=`<template>
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
`,Dt={class:"markdown-body"},kt={__name:"upload",setup(e,{expose:l}){return l({frontmatter:{}}),(n,d)=>{const a=rt("DemoBlock");return x(),Z("div",Dt,[d[0]||(d[0]=H('<h1 id="upload-" tabindex="-1">Upload 上传</h1><p>文件选择上传和拖拽上传控件。</p><h2 id="" tabindex="-1">何时使用</h2><p>上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。</p><ul><li>当需要上传一个或一些文件时。</li><li>当需要展现上传的进度时。</li><li>当需要使用拖拽交互时。</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">点击上传</h3><p>经典款式，用户点击按钮弹出文件选择框。</p>',8)),o(a,{title:"点击上传",source:b(gt)},{default:h(()=>[o(mt)]),_:1},8,["source"]),d[1]||(d[1]=f("h3",{id:"-3",tabindex:"-1"},"图片卡片",-1)),d[2]||(d[2]=f("p",null,[m("使用 "),f("code",null,'list-type="picture-card"'),m(" 展示图片卡片样式。")],-1)),o(a,{title:"图片卡片",source:b(wt)},{default:h(()=>[o(Lt)]),_:1},8,["source"]),d[3]||(d[3]=f("h3",{id:"-4",tabindex:"-1"},"拖拽上传",-1)),d[4]||(d[4]=f("p",null,"可以把文件拖入指定区域，完成上传，同样支持点击上传。",-1)),o(a,{title:"拖拽上传",source:b(Ut)},{default:h(()=>[o(bt)]),_:1},8,["source"]),d[5]||(d[5]=f("h3",{id:"-5",tabindex:"-1"},"自定义上传",-1)),d[6]||(d[6]=f("p",null,[m("通过 "),f("code",null,"custom-request"),m(" 覆盖默认的上传行为，实现自定义上传逻辑。")],-1)),o(a,{title:"自定义上传",source:b(ht)},{default:h(()=>[o(vt)]),_:1},8,["source"]),d[7]||(d[7]=H(`<h2 id="api" tabindex="-1">API</h2><h3 id="upload-props" tabindex="-1">Upload Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>fileList(v-model)</td><td>已经上传的文件列表（受控）</td><td><code>UploadFile[]</code></td><td>-</td></tr><tr><td>defaultFileList</td><td>默认已经上传的文件列表（非受控）</td><td><code>UploadFile[]</code></td><td>-</td></tr><tr><td>accept</td><td>接受上传的文件类型，详见 input accept Attribute</td><td><code>string</code></td><td>-</td></tr><tr><td>action</td><td>上传的地址，支持函数返回字符串或 Promise</td><td><code>string | ((file: File) =&gt; string | Promise&lt;string&gt;)</code></td><td>-</td></tr><tr><td>data</td><td>上传所需额外参数，支持函数返回对象或 Promise</td><td><code>object | ((file: UploadFile) =&gt; object | Promise&lt;object&gt;)</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>listType</td><td>上传列表的内建样式</td><td><code>&#39;text&#39; | &#39;picture&#39; | &#39;picture-card&#39; | &#39;picture-circle&#39;</code></td><td><code>&#39;text&#39;</code></td></tr><tr><td>type</td><td>触发器类型，<code>drag</code> 即拖拽上传区域</td><td><code>&#39;select&#39; | &#39;drag&#39;</code></td><td><code>&#39;select&#39;</code></td></tr><tr><td>maxCount</td><td>限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件</td><td><code>number</code></td><td>-</td></tr><tr><td>multiple</td><td>是否支持多选文件</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>发到后台的文件参数名</td><td><code>string</code></td><td><code>&#39;file&#39;</code></td></tr><tr><td>showUploadList</td><td>是否展示文件列表，可对象配置</td><td><code>boolean | { showRemoveIcon?: boolean; showPreviewIcon?: boolean }</code></td><td><code>true</code></td></tr><tr><td>beforeUpload</td><td>上传文件之前的钩子，返回 <code>false</code> 取消，返回 <code>File/Blob</code> 替换上传目标</td><td><code>(file: File, fileList: File[]) =&gt; boolean | File | Blob | Promise&lt;...&gt;</code></td><td>-</td></tr><tr><td>customRequest</td><td>覆盖默认上传行为；第二参数 <code>{ defaultRequest }</code> 可回退默认实现</td><td><code>(options, info?: { defaultRequest }) =&gt; void</code></td><td>-</td></tr><tr><td>onRemove</td><td>删除文件的拦截钩子，返回 <code>false</code> 阻止删除</td><td><code>(file: UploadFile) =&gt; boolean | Promise&lt;boolean&gt;</code></td><td>-</td></tr><tr><td>openFileDialogOnClick</td><td>点击触发器是否弹出文件选择框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>method</td><td>上传请求 HTTP 方法</td><td><code>string</code></td><td><code>&#39;post&#39;</code></td></tr></tbody></table><h3 id="uploadfile" tabindex="-1">UploadFile</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>uid</td><td>文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突</td><td><code>string</code></td></tr><tr><td>name</td><td>文件名</td><td><code>string</code></td></tr><tr><td>size</td><td>文件大小（字节）</td><td><code>number</code></td></tr><tr><td>type</td><td>文件类型</td><td><code>string</code></td></tr><tr><td>status</td><td>上传状态</td><td><code>&#39;uploading&#39; | &#39;done&#39; | &#39;error&#39; | &#39;removed&#39;</code></td></tr><tr><td>percent</td><td>上传进度</td><td><code>number</code></td></tr><tr><td>url</td><td>下载链接额外的 html 属性</td><td><code>string</code></td></tr><tr><td>thumbUrl</td><td>缩略图地址</td><td><code>string</code></td></tr></tbody></table><h3 id="upload-events" tabindex="-1">Upload Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:fileList</td><td>文件列表变化时的回调</td><td><code>(fileList: UploadFile[]) =&gt; void</code></td></tr><tr><td>change</td><td>上传文件改变时的状态。进度变化时 <code>event</code> 字段携带 <code>{ percent }</code></td><td><code>(info: { file: UploadFile; fileList: UploadFile[]; event?: { percent: number } }) =&gt; void</code></td></tr><tr><td>remove</td><td>点击移除文件后触发（被 <code>onRemove</code> 拦截 false 时不触发）</td><td><code>(file: UploadFile) =&gt; void</code></td></tr><tr><td>preview</td><td>点击文件链接或预览图标时的回调</td><td><code>(file: UploadFile) =&gt; void</code></td></tr><tr><td>drop</td><td>文件拖拽到上传区域释放时触发</td><td><code>(event: DragEvent) =&gt; void</code></td></tr></tbody></table><h3 id="upload-slots" tabindex="-1">Upload Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发上传的控件，通常为按钮或图标</td></tr></tbody></table><h2 id="uploaddragger" tabindex="-1">Upload.Dragger</h2><p><code>&lt;UploadDragger&gt;</code> 是 <code>&lt;Upload type=&quot;drag&quot;&gt;</code> 的便捷别名，等同于 AntD 的 <code>Upload.Dragger</code>。也可通过 <code>Upload.Dragger</code> 访问。</p><pre class="language-vue"><code class="language-vue">&lt;UploadDragger v-model:file-list=&quot;fileList&quot; action=&quot;/api/upload&quot;&gt;
  ...
&lt;/UploadDragger&gt;
</code></pre>`,12))])}}};export{kt as default};
