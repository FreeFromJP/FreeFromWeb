"use strict";(globalThis["webpackChunkFreeFromWeb"]=globalThis["webpackChunkFreeFromWeb"]||[]).push([[7437],{3393:(e,t,o)=>{o.r(t),o.d(t,{default:()=>at});var s=o(9835),n=o(1957),i=o(6970);const a=e=>((0,s.dD)("data-v-76c152fc"),e=e(),(0,s.Cn)(),e),l={class:"Traffic-page"},r={class:"kind-checkbox"},c={class:"kind-checkbox-item"},d={key:2,class:"kind-checkbox-text"},u=["onUpdate:modelValue"],p={class:"kind-checkbox"},h={class:"kind-checkbox-item"},m=a((()=>(0,s._)("text",{class:"kind-checkbox-text"}," LIMT: ",-1))),k={class:"kind-checkbox boxstyle"},y={class:"kind-checkbox-time"},g=a((()=>(0,s._)("text",{class:"kind-checkbox-text",style:{float:"left"}}," SINCE: ",-1))),b={class:"row items-center justify-end"},w={class:"row items-center justify-end"},f={class:"kind-checkbox-time"},v=a((()=>(0,s._)("text",{class:"kind-checkbox-text",style:{float:"left"}}," UNTIL: ",-1))),_={class:"row items-center justify-end"},x={class:"row items-center justify-end"},C={class:"kind-checkbox boxstyle"},q=a((()=>(0,s._)("text",{class:"kind-checkbox-text"}," JSON text: ",-1))),D={key:0,class:"following"},M={class:"following-wrapper"},T={class:"following-header"},S=a((()=>(0,s._)("h3",null,"Profile List",-1))),Z={class:"following-body"},W={key:1,class:"kind-checkbox ListRawbox"},j={class:"kind-checkbox-item ListRaw"},B=a((()=>(0,s._)("text",{class:"kind-checkbox-text"}," RAW ",-1))),P={class:"post"},U={key:0,class:"post-author"};function I(e,t,o,a,I,V){const A=(0,s.up)("PageHeader"),L=(0,s.up)("q-btn"),E=(0,s.up)("q-date"),Y=(0,s.up)("q-popup-proxy"),N=(0,s.up)("q-icon"),R=(0,s.up)("q-time"),F=(0,s.up)("q-input"),J=(0,s.up)("vue-json-editor"),z=(0,s.up)("SearchBox"),H=(0,s.up)("UserCard"),$=(0,s.up)("UserAvatar"),K=(0,s.up)("UserName"),Q=(0,s.up)("json-viewer"),O=(0,s.up)("Thread"),X=(0,s.up)("ListPlaceholder"),G=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(A,{"back-button":""}),(0,s._)("div",l,[(0,s._)("div",r,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(I.kindlist,((e,t)=>((0,s.wg)(),(0,s.iD)("div",c,[e.check?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(L,{key:0,color:"primary",round:"",outline:"",size:"xs",onClick:(0,n.iM)((o=>V.pushKind(e.type,t)),["stop"]),class:"kind-checkbox-btn"},null,8,["onClick"])),e.check?((0,s.wg)(),(0,s.j4)(L,{key:1,color:"primary",round:"",size:"xs",onClick:(0,n.iM)((o=>V.delKind(e.type,t)),["stop"]),icon:"done"},null,8,["onClick"])):(0,s.kq)("",!0),e.name?((0,s.wg)(),(0,s.iD)("text",d,(0,i.zw)(e.name)+"="+(0,i.zw)(e.type),1)):(0,s.kq)("",!0),e.name?(0,s.kq)("",!0):(0,s.wy)(((0,s.wg)(),(0,s.iD)("input",{key:3,type:"number",placeholder:"自定义输入","onUpdate:modelValue":t=>e.type=t,class:"zdyinput"},null,8,u)),[[n.nr,e.type]]),e.name?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(L,{key:4,color:"primary",round:"",size:"xs",onClick:(0,n.iM)((e=>V.removekindlist(t)),["stop"]),icon:"remove"},null,8,["onClick"]))])))),256)),(0,s.Wm)(L,{color:"primary",round:"",size:"xs",onClick:t[0]||(t[0]=(0,n.iM)((e=>V.addkindlist()),["stop"])),icon:"add"})]),(0,s._)("div",p,[(0,s._)("div",h,[m,(0,s.wy)((0,s._)("input",{placeholder:"输入LIMT","onUpdate:modelValue":t[1]||(t[1]=e=>I.MAXVISIBLE=e),class:"zdyinput"},null,512),[[n.nr,I.MAXVISIBLE]])])]),(0,s._)("div",k,[(0,s._)("div",y,[g,(0,s.Wm)(F,{filled:"",modelValue:I.since,"onUpdate:modelValue":t[4]||(t[4]=e=>I.since=e),style:{width:"30%",float:"left"}},{prepend:(0,s.w5)((()=>[(0,s.Wm)(N,{name:"event",class:"cursor-pointer"},{default:(0,s.w5)((()=>[(0,s.Wm)(Y,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{modelValue:I.since,"onUpdate:modelValue":t[2]||(t[2]=e=>I.since=e),mask:"YYYY-MM-DD HH:mm:ss"},{default:(0,s.w5)((()=>[(0,s._)("div",b,[(0,s.wy)((0,s.Wm)(L,{label:"Close",color:"primary",flat:""},null,512),[[G]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),append:(0,s.w5)((()=>[(0,s.Wm)(N,{name:"access_time",class:"cursor-pointer"},{default:(0,s.w5)((()=>[(0,s.Wm)(Y,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,s.w5)((()=>[(0,s.Wm)(R,{modelValue:I.since,"onUpdate:modelValue":t[3]||(t[3]=e=>I.since=e),mask:"YYYY-MM-DD HH:mm:ss",format24h:"","with-seconds":""},{default:(0,s.w5)((()=>[(0,s._)("div",w,[(0,s.wy)((0,s.Wm)(L,{label:"Close",color:"primary",flat:""},null,512),[[G]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,s._)("div",f,[v,(0,s.Wm)(F,{filled:"",modelValue:I.date,"onUpdate:modelValue":t[7]||(t[7]=e=>I.date=e),style:{width:"30%",float:"left"}},{prepend:(0,s.w5)((()=>[(0,s.Wm)(N,{name:"event",class:"cursor-pointer"},{default:(0,s.w5)((()=>[(0,s.Wm)(Y,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{modelValue:I.date,"onUpdate:modelValue":t[5]||(t[5]=e=>I.date=e),mask:"YYYY-MM-DD HH:mm:ss"},{default:(0,s.w5)((()=>[(0,s._)("div",_,[(0,s.wy)((0,s.Wm)(L,{label:"Close",color:"primary",flat:""},null,512),[[G]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),append:(0,s.w5)((()=>[(0,s.Wm)(N,{name:"access_time",class:"cursor-pointer"},{default:(0,s.w5)((()=>[(0,s.Wm)(Y,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,s.w5)((()=>[(0,s.Wm)(R,{modelValue:I.date,"onUpdate:modelValue":t[6]||(t[6]=e=>I.date=e),mask:"YYYY-MM-DD HH:mm:ss",format24h:"","with-seconds":""},{default:(0,s.w5)((()=>[(0,s._)("div",x,[(0,s.wy)((0,s.Wm)(L,{label:"Close",color:"primary",flat:""},null,512),[[G]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])]),(0,s._)("div",C,[q,(0,s.Wm)(J,{modelValue:I.jsonContent,"onUpdate:modelValue":t[8]||(t[8]=e=>I.jsonContent=e),mode:"code",expandedOnStart:"true",onJsonChange:V.onJsonChange,onJsonSave:V.onJsonSave,onHasError:V.onError},null,8,["modelValue","onJsonChange","onJsonSave","onHasError"]),(0,s.Wm)(L,{color:"primary",size:"md",onClick:t[9]||(t[9]=(0,n.iM)((e=>V.checkJson()),["stop"])),label:"Json Search",class:"qbtn-style-json",disable:!I.hasJsonFlag},null,8,["disable"])]),(0,s.Wm)(z),(0,s.Wm)(L,{color:"primary",size:"md",onClick:t[10]||(t[10]=(0,n.iM)((e=>V.getProfile()),["stop"])),label:"Search",disabled:I.kinds.length<1,class:"qbtn-style"},null,8,["disabled"]),a.app.isSignedIn&&V.contacts?.length?((0,s.wg)(),(0,s.iD)("div",D,[(0,s._)("div",M,[(0,s._)("div",T,[I.Expansion?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(L,{key:0,color:"primary",size:"sm",onClick:t[11]||(t[11]=(0,n.iM)((e=>V.openToggle()),["stop"])),label:"Expansion",class:"qbtn-header-style","icon-right":"arrow_drop_down",outline:"",rounded:""})),I.Expansion?((0,s.wg)(),(0,s.j4)(L,{key:1,color:"primary",size:"sm",onClick:t[12]||(t[12]=(0,n.iM)((e=>V.openToggle()),["stop"])),label:"Put away",class:"qbtn-header-style","icon-right":"arrow_drop_up",outline:"",rounded:""})):(0,s.kq)("",!0),S]),(0,s.wy)((0,s._)("div",Z,[((0,s.wg)(),(0,s.j4)(H,{key:a.app.myPubkey,pubkey:a.app.myPubkey,class:"following-body-item",clickable:""},null,8,["pubkey"])),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(V.contacts,(e=>((0,s.wg)(),(0,s.j4)(H,{key:e.pubkey,pubkey:e.pubkey,class:"following-body-item",clickable:""},null,8,["pubkey"])))),128))],512),[[n.F8,I.Expansion]])])])):(0,s.kq)("",!0),I.visible.length?((0,s.wg)(),(0,s.iD)("div",W,[(0,s._)("div",j,[I.raw?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(L,{key:0,color:"primary",round:"",outline:"",size:"xs",onClick:t[13]||(t[13]=(0,n.iM)((e=>V.ToggleRaw()),["stop"])),class:"kind-checkbox-btn"})),I.raw?((0,s.wg)(),(0,s.j4)(L,{key:1,color:"primary",round:"",size:"xs",onClick:t[14]||(t[14]=(0,n.iM)((e=>V.ToggleRaw()),["stop"])),icon:"done"})):(0,s.kq)("",!0),B])])):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(I.notelist,(e=>((0,s.wg)(),(0,s.iD)("div",P,[e.author?((0,s.wg)(),(0,s.iD)("div",U,[(0,s.Wm)($,{pubkey:e.author,clickable:"",onClick:t[15]||(t[15]=(0,n.iM)((()=>{}),["stop"]))},null,8,["pubkey"]),(0,s.Uk)("   "),(0,s.Wm)(K,{pubkey:e.author,clickable:"",onClick:t[16]||(t[16]=(0,n.iM)((()=>{}),["stop"]))},null,8,["pubkey"]),(0,s.Uk)("   ")])):(0,s.kq)("",!0),(0,s.Wm)(Q,{value:e,clickable:"",onClick:t[17]||(t[17]=(0,n.iM)((()=>{}),["stop"])),theme:"my-awesome-json-theme"},null,8,["value"])])))),256)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(I.visible,(e=>((0,s.wg)(),(0,s.j4)(O,{key:e[0].id,thread:e,raw:I.raw,ref_for:!0,ref:"Threadref",class:"full-width"},null,8,["thread","raw"])))),128)),(0,s.Wm)(X,{count:I.visible.length,loading:I.loading},null,8,["count","loading"])])],64)}o(9665);var V=o(7403),A=o(8120),L=o(8354),E=o(8803),Y=o.n(E),N=o(6290),R=o(597);const F={class:"user-card"};function J(e,t,o,i,a,l){const r=(0,s.up)("q-btn"),c=(0,s.up)("UserAvatar"),d=(0,s.up)("UserName");return(0,s.wg)(),(0,s.iD)("div",F,[a.check?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(r,{key:0,color:"primary",round:"",outline:"",size:"xs",onClick:t[0]||(t[0]=(0,n.iM)((e=>l.getpubkeyToggle(o.pubkey)),["stop"]))})),a.check?((0,s.wg)(),(0,s.j4)(r,{key:1,color:"primary",round:"",size:"xs",onClick:t[1]||(t[1]=(0,n.iM)((e=>l.Toggle(o.pubkey)),["stop"])),icon:"done"})):(0,s.kq)("",!0),(0,s.Wm)(c,{pubkey:o.pubkey,clickable:o.clickable},null,8,["pubkey","clickable"]),(0,s.Wm)(d,{pubkey:o.pubkey,clickable:o.clickable,class:"username","two-line":"","show-verified":""},null,8,["pubkey","clickable"])])}var z=o(764);const H={name:"UserCard",components:{FollowButton:z.Z,UserName:L.Z,UserAvatar:A.Z},props:{pubkey:{type:String,required:!0},clickable:{type:Boolean,default:!1},followButton:{type:Boolean,default:!1}},data(){return{check:!1}},methods:{getpubkeyToggle(e){this.check=!0,this.$parent.getchildpub(e)},Toggle(e){this.check=!1,this.$parent.delchildpub(e)}}};var $=o(1639),K=o(8879),Q=o(9984),O=o.n(Q);const X=(0,$.Z)(H,[["render",J],["__scopeId","data-v-178ca21a"]]),G=X;O()(H,"components",{QBtn:K.Z});var ee=o(8039),te=o(3099),oe=o(5547),se=o(2929);const ne={class:"relative-position"},ie={class:"searchbox-wrapper"},ae={class:"searchbox-icon"},le={class:"searchbox-input"},re=["placeholder"],ce={key:0,class:"searchbox-results"},de={key:0,class:"query-example"},ue=(0,s._)("b",null,"npub…",-1),pe=(0,s._)("b",null,"[user]@domain",-1),he=(0,s._)("b",null,"name",-1);function me(e,t,o,a,l,r){const c=(0,s.up)("BaseIcon"),d=(0,s.up)("q-form"),u=(0,s.up)("UserCard");return(0,s.wg)(),(0,s.iD)("div",ne,[(0,s._)("div",{class:(0,i.C_)(["searchbox",{focused:l.focused}])},[(0,s._)("div",ie,[(0,s._)("div",ae,[(0,s.Wm)(c,{icon:"search"})]),(0,s._)("div",le,[(0,s.Wm)(d,{onSubmit:(0,n.iM)(r.search,["stop"])},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.query=e),ref:"input",type:"text",placeholder:e.$t("Search profiles"),onFocus:t[1]||(t[1]=(...e)=>r.toggleFocus&&r.toggleFocus(...e)),onBlur:t[2]||(t[2]=(...e)=>r.toggleFocus&&r.toggleFocus(...e)),onKeyup:[t[3]||(t[3]=(...e)=>r.search&&r.search(...e)),t[4]||(t[4]=(0,n.D2)((t=>e.$refs.input.blur()),["esc"]))]},null,40,re),[[n.nr,l.query]])])),_:1},8,["onSubmit"])])])],2),(0,s.Wm)(n.uT,{name:"fade"},{default:(0,s.w5)((()=>[l.focused?((0,s.wg)(),(0,s.iD)("div",ce,[l.results.length?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",de,[ue,(0,s.Uk)(" or "),pe,(0,s.Uk)(" or "),he])),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.results,(t=>((0,s.wg)(),(0,s.j4)(u,{key:t,pubkey:t,class:"searchbox-results-item",clickable:"",onMousedown:o=>e.goToProfile(t)},null,8,["pubkey","onMousedown"])))),128))])):(0,s.kq)("",!0)])),_:1})])}var ke=o(5253),ye=o(7175),ge=o(9730);const be={name:"SearchBox",mixins:[se.Z],components:{UserCard:ge.Z,BaseIcon:ke.Z},setup(){return{provider:new ye.Z}},data(){return{focused:!1,query:"",results:[]}},methods:{toggleFocus(){this.focused=!this.focused},getpub(e){this.$parent.Searchchildpub(e)},async search(){this.query?this.results=(await this.provider.queryProfiles(this.query)).slice(0,200):this.results=[]}}};var we=o(8326);const fe=(0,$.Z)(be,[["render",me]]),ve=fe;O()(be,"components",{QForm:we.Z});var _e=o(9684),xe=o(4520),Ce=(o(7498),o(2296));const qe={class:"thread"};function De(e,t,o,n,i,a){const l=(0,s.up)("ListPost");return(0,s.wg)(),(0,s.iD)("div",qe,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.filteredThread,((e,t)=>((0,s.wg)(),(0,s.j4)(l,{key:e.id,note:e,"connector-top":a.filteredThread.length>1&&t>0,"connector-bottom":a.filteredThread.length>1&&t<a.filteredThread.length-1||o.forceBottomConnector,raw:o.raw,actions:"",clickable:"",ref_for:!0,ref:"ListPost"},null,8,["note","connector-top","connector-bottom","raw"])))),128))])}const Me=e=>((0,s.dD)("data-v-6c0a7a1f"),e=e(),(0,s.Cn)(),e),Te={class:"post-author"},Se={class:"connector-top"},Ze={key:0,class:"connector-line"},We={class:"connector-bottom"},je={key:0,class:"connector-line"},Be={class:"post-content"},Pe={class:"post-content-header"},Ue={class:"author-line"},Ie=Me((()=>(0,s._)("span",null,"·",-1))),Ve={class:"created-at"},Ae={key:0,class:"in-reply-to"},Le={class:"post-content-body"};function Ee(e,t,o,a,l,r){const c=(0,s.up)("UserAvatar"),d=(0,s.up)("UserName"),u=(0,s.up)("PostRenderer"),p=(0,s.up)("q-btn"),h=(0,s.up)("json-viewer");return(0,s.wg)(),(0,s.iD)("div",{class:(0,i.C_)(["post",{clickable:o.clickable,myPubkeybg:a.app.myPubkey==o.note.author}]),onClick:t[6]||(t[6]=(0,n.iM)((t=>o.clickable&&e.goToThread(o.note.id)),["stop"]))},[(0,s._)("div",Te,[(0,s._)("div",Se,[o.connectorTop?((0,s.wg)(),(0,s.iD)("div",Ze)):(0,s.kq)("",!0)]),(0,s.Wm)(c,{pubkey:o.note.author,clickable:"",onClick:t[0]||(t[0]=(0,n.iM)((()=>{}),["stop"]))},null,8,["pubkey"]),(0,s._)("div",We,[o.connectorBottom?((0,s.wg)(),(0,s.iD)("div",je)):(0,s.kq)("",!0)])]),(0,s._)("div",Be,[(0,s._)("div",Pe,[(0,s._)("p",Ue,[(0,s.Wm)(d,{pubkey:o.note.author,clickable:"","show-verified":"",onClick:t[1]||(t[1]=(0,n.iM)((()=>{}),["stop"]))},null,8,["pubkey"]),Ie,(0,s._)("span",Ve,(0,i.zw)(r.createdAt),1)]),o.note.hasAncestor()?((0,s.wg)(),(0,s.iD)("p",Ae,[(0,s.Uk)((0,i.zw)(e.$t("Replying to"))+" ",1),(0,s._)("a",{onClick:t[2]||(t[2]=(0,n.iM)((t=>e.goToProfile(r.ancestor?.author)),["stop"]))},[r.ancestor?.author?((0,s.wg)(),(0,s.j4)(d,{key:0,pubkey:r.ancestor?.author},null,8,["pubkey"])):(0,s.kq)("",!0)])])):(0,s.kq)("",!0)]),(0,s._)("div",Le,[(0,s.Wm)(u,{note:o.note},null,8,["note"])]),a.formState.opendata?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(p,{key:0,color:"primary",size:"sm",onClick:t[3]||(t[3]=(0,n.iM)((e=>r.openToggle()),["stop"])),label:"raw data",class:"qbtn-style","icon-right":"arrow_drop_down"})),a.formState.opendata?((0,s.wg)(),(0,s.j4)(p,{key:1,color:"primary",size:"sm",onClick:t[4]||(t[4]=(0,n.iM)((e=>r.openToggle()),["stop"])),label:"raw data",class:"qbtn-style","icon-right":"arrow_drop_up"})):(0,s.kq)("",!0),a.formState.opendata?((0,s.wg)(),(0,s.j4)(h,{key:2,value:o.note,clickable:"",onClick:t[5]||(t[5]=(0,n.iM)((()=>{}),["stop"])),theme:"my-awesome-json-theme"},null,8,["value"])):(0,s.kq)("",!0)])],2)}var Ye=o(499),Ne=o(9049),Re=o(1744),Fe=o(1153);const Je={name:"ListPost",mixins:[se.Z],components:{PostActions:Re.Z,UserAvatar:A.Z,UserName:L.Z,PostRenderer:Ne.Z,JsonViewer:Y()},props:{note:{type:Object,required:!0},connectorTop:{type:Boolean,default:!1},connectorBottom:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},actions:{type:Boolean,default:!1},raw:Boolean},setup(e){const t=(0,Ye.qj)({opendata:!1});return(0,s.YP)((()=>e.raw),(e=>{t.opendata=e})),{app:(0,te.q)(),nostr:(0,ee.D)(),formState:t}},data(){return{refreshCounter:0,refreshTimer:null,metadataDialog:!1,noteStr:"",CopyStr:""}},computed:{ancestor(){return this.note.hasAncestor()?this.nostr.getNote(this.note.ancestor()):null},showActions(){return this.actions&&this.note.canReply()},createdAt(){return this.refreshCounter,this.formatPostDate(this.note.createdAt)}},methods:{openToggle(){this.formState.opendata=!this.formState.opendata},formatPostDate(e){const t=this.$q.screen.lt.md?"short":"long";return Ce.Z.formatFromNow(e,t)},info(){this.metadataDialog=!0;let e=(0,xe.Sk)(this.nostr.getNote(this.note.id)),t=JSON.stringify(this.nostr.getNote(this.note.id));this.noteStr=e,this.CopyStr=t},async copystr(e){e&&await navigator.clipboard.writeText(e).then((()=>{this.$q.notify({message:"Replication Success",color:"positive",timeout:1e3,position:"top"})}))},async del(){const e=Fe.Z.delete(this.note,this.app.myPubkey).build();e.id=this.note.id,await this.app.signEvent(e)&&(await this.nostr.publish(e)||this.$q.notify({message:$t("Failed to publish reaction"),color:"negative"}))},async copyNoteId(){const e=(0,xe.jm)(this.note.id,"note");await navigator.clipboard.writeText(e).then((()=>{this.$q.notify({message:"Replication Success",color:"positive",timeout:1e3,position:"top"})}))},async copyUserId(){const e=(0,xe.jm)(this.note.author,"npub");await navigator.clipboard.writeText(e).then((()=>{this.$q.notify({message:"Replication Success",color:"positive",timeout:1e3,position:"top"})}))}},mounted(){const e=Ce.Z.now()-this.note.createdAt>=3600?3600:60;this.refreshTimer=setInterval((()=>this.refreshCounter++),1e3*e)},unmounted(){clearInterval(this.refreshTimer)}},ze=(0,$.Z)(Je,[["render",Ee],["__scopeId","data-v-6c0a7a1f"]]),He=ze;O()(Je,"components",{QBtn:K.Z});const $e={name:"Thread",components:{ListPost:He},props:{thread:{type:Array,required:!0},forceBottomConnector:{type:Boolean,default:!1},raw:Boolean},setup(e){(0,s.YP)((()=>e.raw),(e=>{}))},computed:{filteredThread(){return this.thread.filter((e=>!!e))}}},Ke=(0,$.Z)($e,[["render",De],["__scopeId","data-v-51f7054e"]]),Qe=Ke,Oe=(e,t)=>t[0].createdAt-e[0].createdAt,Xe={name:"FollowingBox",components:{UserCard:G,SearchBox:ve,PageHeader:_e.Z,Thread:Qe,ListPlaceholder:R.Z,JsonViewer:Y(),UserAvatar:A.Z,UserName:L.Z,AsyncLoadButton:V.Z,vueJsonEditor:N.Z},mixins:[se.Z],data(){return{jsonContent:null,hasJsonFlag:!1,visible:[],hideBots:!1,pubkeyList:[],recentlyLoaded:!0,newer:[],older:[],loading:!1,Expansion:!1,kinds:[],notelist:[],MAXVISIBLE:25,date:void 0,since:void 0,kindlist:[{name:"Metadata",type:0,check:!1},{name:"Text",type:1,check:!1},{name:"RecommendRelay",type:2,check:!1},{name:"Contacts",type:3,check:!1},{name:"EncryptedDirectMessage",type:4,check:!1},{name:"EventDeletion",type:5,check:!1},{name:"Reposts",type:6,check:!1},{name:"Reaction",type:7,check:!1},{name:"Badge Award",type:8,check:!1},{name:"ChannelCreation",type:40,check:!1},{name:"ChannelMetadata",type:41,check:!1},{name:"ChannelMessage",type:42,check:!1},{name:"ChannelHideMessage",type:43,check:!1},{name:"ChannelMuteUser",type:44,check:!1},{name:"Report",type:1984,check:!1},{name:"ZapRequest",type:9734,check:!1},{name:"Zap",type:9735,check:!1},{name:"RelayList",type:10002,check:!1},{name:"ClientAuth",type:22242,check:!1},{name:"Article",type:30023,check:!1},{name:"Definition",type:30009,check:!1},{name:"Profile Badge",type:30008,check:!1}],raw:!1}},setup(){return{app:(0,te.q)(),nostr:(0,ee.D)()}},mounted(){},computed:{numUnreads(){return this.recentlyLoaded?0:this.newer.length},pubkey(){return this.app.myPubkey},contacts(){return this.nostr.getContacts(this.pubkey)}},unmounted(){this.stream&&this.stream.close()},methods:{onJsonChange(e){this.onJsonSave(e)},onJsonSave(e){this.jsonContent=e,this.hasJsonFlag=!0},onError(e){this.hasJsonFlag=!1},async checkJson(){this.notelist=[],this.loading=!0;const e=this.jsonContent,t=await this.nostr.fetch(e,{subId:""});this.notelist=t.slice(0,100),this.loading=!1},removekindlist(e){let t=this.kindlist;t.splice(e,1)},addkindlist(){const e={name:"",type:"",check:!1};this.kindlist.push(e)},formatPostDate(e){const t=this.$q.screen.lt.md?"short":"long";return Ce.Z.formatFromNow(e,t)},ToggleRaw(){this.raw=!this.raw},pushKind(e,t){0===e||e?(this.kindlist[t].check=!0,this.kinds.push(e)):this.$q.notify({message:"No Kinds",color:"negative"})},delKind(e,t){if(0===e||e){this.kindlist[t].check=!1;const o=this.kinds;o.forEach(((t,s)=>{t==e&&(o.splice(s,1),this.kinds=o)}))}else this.$q.notify({message:"No Kinds",color:"negative"})},openToggle(){this.Expansion=!this.Expansion},getchildpub(e){this.pubkeyList.push(e)},delchildpub(e){const t=this.pubkeyList;t.forEach(((o,s)=>{o==e&&(t.splice(s,1),this.pubkeyList=t)}))},Searchchildpub(e){this.pubkeyList=[],this.pubkeyList.push(e),this.kinds?this.getProfile():this.$q.notify({message:"No Kinds",color:"negative"})},filterNote(e,t){return!e.isReaction()&&!e.isRepostOrTag()},ensureBech32(e,t){return(0,xe.iY)(e)?e:(0,xe.jm)(e,t)},filters(){let e=this.pubkeyList,t=this.kinds;if(this.MAXVISIBLE<=0&&this.$q.notify({message:"No Limit",color:"negative"}),this.date)var o=Date.parse(new Date(this.date))/1e3;else o="";if(this.since)var s=Date.parse(new Date(this.since))/1e3;else s="";return e&&e.length||(e=[]),e&&e.length?{kinds:t,authors:e,limit:this.MAXVISIBLE,until:o,since:s}:{kinds:t,limit:this.MAXVISIBLE,until:o,since:s}},followingdata(){let e=this.pubkeyList;if(!e||!e.length)return[];let t=[];const o=(0,oe.d)();for(const s of e)t=t.concat(o.postsByAuthor(s,oe.i.CREATION_DATE_DESC));return t},loadOlder(){},loadNewer(){},empty(){this.visible=""},reload(){this.loading=!0,this.getProfile()},async getProfile(){this.visible=[],this.notelist=[],this.loading=!0;const e=this.filters(),t=this.kinds;if(1===t.length&&1==t[0]){const t=await this.nostr.fetch(e,{subId:""}),o=t.filter((e=>this.filterNote(e,this.hideBots))).map((e=>[e])).sort(Oe).filter(((e,t,o)=>!t||e[0].id!==o[t-1][0].id));this.visible=o.slice(0,100),this.loading=!1,this.stream=this.nostr.stream(e,{subId:""}),e.authors&&this.stream.on("update",(e=>{this.getProfile()}))}else{const t=await this.nostr.fetch(e,{subId:""});this.notelist=t.slice(0,100),this.loading=!1,this.stream=this.nostr.stream(e,{subId:""}),e.authors&&this.stream.on("update",(e=>{this.getProfile()}))}}}};var Ge=o(9687),et=o(2857),tt=o(2765),ot=o(4351),st=o(6880),nt=o(2146);const it=(0,$.Z)(Xe,[["render",I],["__scopeId","data-v-76c152fc"]]),at=it;O()(Xe,"components",{QBtn:K.Z,QInput:Ge.Z,QIcon:et.Z,QPopupProxy:tt.Z,QDate:ot.Z,QTime:st.Z}),O()(Xe,"directives",{ClosePopup:nt.Z})}}]);