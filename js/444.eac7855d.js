"use strict";(globalThis["webpackChunkFreeFromWeb"]=globalThis["webpackChunkFreeFromWeb"]||[]).push([[444],{8826:(e,t,o)=>{o.r(t),o.d(t,{default:()=>$e});var s=o(9835),n=o(1957),i=o(6970);const a=e=>((0,s.dD)("data-v-12aae8ef"),e=e(),(0,s.Cn)(),e),l={class:"Traffic-page"},r={class:"kind-checkbox"},c={class:"kind-checkbox-item"},d={key:2,class:"kind-checkbox-text"},p=["onUpdate:modelValue"],u={key:0,class:"following"},h={class:"following-wrapper"},k={class:"following-header"},y=a((()=>(0,s._)("h3",null,"Profile List",-1))),m={class:"following-body"},g={key:1,class:"kind-checkbox ListRawbox"},b={class:"kind-checkbox-item ListRaw"},w=a((()=>(0,s._)("text",{class:"kind-checkbox-text"}," RAW ",-1))),f={class:"post"},v={key:0,class:"post-author"};function q(e,t,o,a,q,C){const _=(0,s.up)("PageHeader"),x=(0,s.up)("q-btn"),T=(0,s.up)("SearchBox"),D=(0,s.up)("UserCard"),P=(0,s.up)("UserAvatar"),Z=(0,s.up)("UserName"),B=(0,s.up)("json-viewer"),M=(0,s.up)("Thread"),U=(0,s.up)("ListPlaceholder");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(_,{"back-button":""}),(0,s._)("div",l,[(0,s._)("div",r,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(q.kindlist,((e,t)=>((0,s.wg)(),(0,s.iD)("div",c,[e.check?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(x,{key:0,color:"primary",round:"",outline:"",size:"xs",onClick:(0,n.iM)((o=>C.pushKind(e.type,t)),["stop"]),class:"kind-checkbox-btn"},null,8,["onClick"])),e.check?((0,s.wg)(),(0,s.j4)(x,{key:1,color:"primary",round:"",size:"xs",onClick:(0,n.iM)((o=>C.delKind(e.type,t)),["stop"]),icon:"done"},null,8,["onClick"])):(0,s.kq)("",!0),e.name?((0,s.wg)(),(0,s.iD)("text",d,(0,i.zw)(e.name)+"="+(0,i.zw)(e.type),1)):(0,s.kq)("",!0),e.name?(0,s.kq)("",!0):(0,s.wy)(((0,s.wg)(),(0,s.iD)("input",{key:3,placeholder:"自定义输入","onUpdate:modelValue":t=>e.type=t,class:"zdyinput"},null,8,p)),[[n.nr,e.type]]),e.name?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(x,{key:4,color:"primary",round:"",size:"xs",onClick:(0,n.iM)((e=>C.removekindlist(t)),["stop"]),icon:"remove"},null,8,["onClick"]))])))),256)),(0,s.Wm)(x,{color:"primary",round:"",size:"xs",onClick:t[0]||(t[0]=(0,n.iM)((e=>C.addkindlist()),["stop"])),icon:"add"})]),(0,s.Wm)(T),(0,s.Wm)(x,{color:"primary",size:"md",onClick:t[1]||(t[1]=(0,n.iM)((e=>C.getProfile()),["stop"])),label:"Search",disabled:q.kinds.length<1,class:"qbtn-style"},null,8,["disabled"]),a.app.isSignedIn&&C.contacts?.length?((0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",h,[(0,s._)("div",k,[q.Expansion?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(x,{key:0,color:"primary",size:"sm",onClick:t[2]||(t[2]=(0,n.iM)((e=>C.openToggle()),["stop"])),label:"Expansion",class:"qbtn-header-style","icon-right":"arrow_drop_down",outline:"",rounded:""})),q.Expansion?((0,s.wg)(),(0,s.j4)(x,{key:1,color:"primary",size:"sm",onClick:t[3]||(t[3]=(0,n.iM)((e=>C.openToggle()),["stop"])),label:"Put away",class:"qbtn-header-style","icon-right":"arrow_drop_up",outline:"",rounded:""})):(0,s.kq)("",!0),y]),(0,s.wy)((0,s._)("div",m,[((0,s.wg)(),(0,s.j4)(D,{key:a.app.myPubkey,pubkey:a.app.myPubkey,class:"following-body-item",clickable:""},null,8,["pubkey"])),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(C.contacts,(e=>((0,s.wg)(),(0,s.j4)(D,{key:e.pubkey,pubkey:e.pubkey,class:"following-body-item",clickable:""},null,8,["pubkey"])))),128))],512),[[n.F8,q.Expansion]])])])):(0,s.kq)("",!0),q.visible.length?((0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("div",b,[q.raw?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(x,{key:0,color:"primary",round:"",outline:"",size:"xs",onClick:t[4]||(t[4]=(0,n.iM)((e=>C.ToggleRaw()),["stop"])),class:"kind-checkbox-btn"})),q.raw?((0,s.wg)(),(0,s.j4)(x,{key:1,color:"primary",round:"",size:"xs",onClick:t[5]||(t[5]=(0,n.iM)((e=>C.ToggleRaw()),["stop"])),icon:"done"})):(0,s.kq)("",!0),w])])):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(q.notelist,(e=>((0,s.wg)(),(0,s.iD)("div",f,[e.author?((0,s.wg)(),(0,s.iD)("div",v,[(0,s.Wm)(P,{pubkey:e.author,clickable:"",onClick:t[6]||(t[6]=(0,n.iM)((()=>{}),["stop"]))},null,8,["pubkey"]),(0,s.Uk)("   "),(0,s.Wm)(Z,{pubkey:e.author,clickable:"",onClick:t[7]||(t[7]=(0,n.iM)((()=>{}),["stop"]))},null,8,["pubkey"]),(0,s.Uk)("   ")])):(0,s.kq)("",!0),(0,s.Wm)(B,{value:e,clickable:"",onClick:t[8]||(t[8]=(0,n.iM)((()=>{}),["stop"])),theme:"my-awesome-json-theme"},null,8,["value"])])))),256)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(q.visible,(e=>((0,s.wg)(),(0,s.j4)(M,{key:e[0].id,thread:e,raw:q.raw,ref_for:!0,ref:"Threadref",class:"full-width"},null,8,["thread","raw"])))),128)),(0,s.Wm)(U,{count:q.visible.length,loading:q.loading},null,8,["count","loading"])])],64)}o(9665);var C=o(3027),_=o(5501),x=o(9715),T=o(8803),D=o.n(T),P=o(6401);const Z={class:"user-card"};function B(e,t,o,i,a,l){const r=(0,s.up)("q-btn"),c=(0,s.up)("UserAvatar"),d=(0,s.up)("UserName");return(0,s.wg)(),(0,s.iD)("div",Z,[a.check?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(r,{key:0,color:"primary",round:"",outline:"",size:"xs",onClick:t[0]||(t[0]=(0,n.iM)((e=>l.getpubkeyToggle(o.pubkey)),["stop"]))})),a.check?((0,s.wg)(),(0,s.j4)(r,{key:1,color:"primary",round:"",size:"xs",onClick:t[1]||(t[1]=(0,n.iM)((e=>l.Toggle(o.pubkey)),["stop"])),icon:"done"})):(0,s.kq)("",!0),(0,s.Wm)(c,{pubkey:o.pubkey,clickable:o.clickable},null,8,["pubkey","clickable"]),(0,s.Wm)(d,{pubkey:o.pubkey,clickable:o.clickable,class:"username","two-line":"","show-verified":""},null,8,["pubkey","clickable"])])}var M=o(7328);const U={name:"UserCard",components:{FollowButton:M.Z,UserName:x.Z,UserAvatar:_.Z},props:{pubkey:{type:String,required:!0},clickable:{type:Boolean,default:!1},followButton:{type:Boolean,default:!1}},data(){return{check:!1}},methods:{getpubkeyToggle(e){console.log("pubkey----",e),this.check=!0,this.$parent.getchildpub(e)},Toggle(e){this.check=!1,this.$parent.delchildpub(e)}}};var j=o(1639),A=o(8879),S=o(9984),R=o.n(S);const L=(0,j.Z)(U,[["render",B],["__scopeId","data-v-3b74a8bc"]]),N=L;R()(U,"components",{QBtn:A.Z});var W=o(6166),z=o(3099),F=o(2187),$=o(2929);const E={class:"relative-position"},I={class:"searchbox-wrapper"},K={class:"searchbox-icon"},H={class:"searchbox-input"},Y=["placeholder"],O={key:0,class:"searchbox-results"},V={key:0,class:"query-example"},Q=(0,s._)("b",null,"npub…",-1),J=(0,s._)("b",null,"[user]@domain",-1),G=(0,s._)("b",null,"name",-1);function X(e,t,o,a,l,r){const c=(0,s.up)("BaseIcon"),d=(0,s.up)("q-form"),p=(0,s.up)("UserCard");return(0,s.wg)(),(0,s.iD)("div",E,[(0,s._)("div",{class:(0,i.C_)(["searchbox",{focused:l.focused}])},[(0,s._)("div",I,[(0,s._)("div",K,[(0,s.Wm)(c,{icon:"search"})]),(0,s._)("div",H,[(0,s.Wm)(d,{onSubmit:(0,n.iM)(r.search,["stop"])},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.query=e),ref:"input",type:"text",placeholder:e.$t("Search profiles"),onFocus:t[1]||(t[1]=(...e)=>r.toggleFocus&&r.toggleFocus(...e)),onBlur:t[2]||(t[2]=(...e)=>r.toggleFocus&&r.toggleFocus(...e)),onKeyup:[t[3]||(t[3]=(...e)=>r.search&&r.search(...e)),t[4]||(t[4]=(0,n.D2)((t=>e.$refs.input.blur()),["esc"]))]},null,40,Y),[[n.nr,l.query]])])),_:1},8,["onSubmit"])])])],2),(0,s.Wm)(n.uT,{name:"fade"},{default:(0,s.w5)((()=>[l.focused?((0,s.wg)(),(0,s.iD)("div",O,[l.results.length?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",V,[Q,(0,s.Uk)(" or "),J,(0,s.Uk)(" or "),G])),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.results,(t=>((0,s.wg)(),(0,s.j4)(p,{key:t,pubkey:t,class:"searchbox-results-item",clickable:"",onMousedown:o=>e.goToProfile(t)},null,8,["pubkey","onMousedown"])))),128))])):(0,s.kq)("",!0)])),_:1})])}var ee=o(7664),te=o(7175),oe=o(5198);const se={name:"SearchBox",mixins:[$.Z],components:{UserCard:oe.Z,BaseIcon:ee.Z},setup(){return{provider:new te.Z}},data(){return{focused:!1,query:"",results:[]}},methods:{toggleFocus(){this.focused=!this.focused},getpub(e){this.$parent.Searchchildpub(e)},async search(){this.query?this.results=(await this.provider.queryProfiles(this.query)).slice(0,200):this.results=[]}}};var ne=o(8326);const ie=(0,j.Z)(se,[["render",X]]),ae=ie;R()(se,"components",{QForm:ne.Z});var le=o(4586),re=o(4520),ce=(o(7498),o(2296));const de={class:"thread"};function pe(e,t,o,n,i,a){const l=(0,s.up)("ListPost");return(0,s.wg)(),(0,s.iD)("div",de,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.filteredThread,((e,t)=>((0,s.wg)(),(0,s.j4)(l,{key:e.id,note:e,"connector-top":a.filteredThread.length>1&&t>0,"connector-bottom":a.filteredThread.length>1&&t<a.filteredThread.length-1||o.forceBottomConnector,raw:o.raw,actions:"",clickable:"",ref_for:!0,ref:"ListPost"},null,8,["note","connector-top","connector-bottom","raw"])))),128))])}const ue=e=>((0,s.dD)("data-v-3155ae2d"),e=e(),(0,s.Cn)(),e),he={class:"post-author"},ke={class:"connector-top"},ye={key:0,class:"connector-line"},me={class:"connector-bottom"},ge={key:0,class:"connector-line"},be={class:"post-content"},we={class:"post-content-header"},fe={class:"author-line"},ve=ue((()=>(0,s._)("span",null,"·",-1))),qe={class:"created-at"},Ce={key:0,class:"in-reply-to"},_e={class:"post-content-body"};function xe(e,t,o,a,l,r){const c=(0,s.up)("UserAvatar"),d=(0,s.up)("UserName"),p=(0,s.up)("PostRenderer"),u=(0,s.up)("q-btn"),h=(0,s.up)("json-viewer");return(0,s.wg)(),(0,s.iD)("div",{class:(0,i.C_)(["post",{clickable:o.clickable,myPubkeybg:a.app.myPubkey==o.note.author}]),onClick:t[6]||(t[6]=(0,n.iM)((t=>o.clickable&&e.goToThread(o.note.id)),["stop"]))},[(0,s._)("div",he,[(0,s._)("div",ke,[o.connectorTop?((0,s.wg)(),(0,s.iD)("div",ye)):(0,s.kq)("",!0)]),(0,s.Wm)(c,{pubkey:o.note.author,clickable:"",onClick:t[0]||(t[0]=(0,n.iM)((()=>{}),["stop"]))},null,8,["pubkey"]),(0,s._)("div",me,[o.connectorBottom?((0,s.wg)(),(0,s.iD)("div",ge)):(0,s.kq)("",!0)])]),(0,s._)("div",be,[(0,s._)("div",we,[(0,s._)("p",fe,[(0,s.Wm)(d,{pubkey:o.note.author,clickable:"","show-verified":"",onClick:t[1]||(t[1]=(0,n.iM)((()=>{}),["stop"]))},null,8,["pubkey"]),ve,(0,s._)("span",qe,(0,i.zw)(r.createdAt),1)]),o.note.hasAncestor()?((0,s.wg)(),(0,s.iD)("p",Ce,[(0,s.Uk)((0,i.zw)(e.$t("Replying to"))+" ",1),(0,s._)("a",{onClick:t[2]||(t[2]=(0,n.iM)((t=>e.goToProfile(r.ancestor?.author)),["stop"]))},[r.ancestor?.author?((0,s.wg)(),(0,s.j4)(d,{key:0,pubkey:r.ancestor?.author},null,8,["pubkey"])):(0,s.kq)("",!0)])])):(0,s.kq)("",!0)]),(0,s._)("div",_e,[(0,s.Wm)(p,{note:o.note},null,8,["note"])]),a.formState.opendata?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(u,{key:0,color:"primary",size:"sm",onClick:t[3]||(t[3]=(0,n.iM)((e=>r.openToggle()),["stop"])),label:"raw data",class:"qbtn-style","icon-right":"arrow_drop_down"})),a.formState.opendata?((0,s.wg)(),(0,s.j4)(u,{key:1,color:"primary",size:"sm",onClick:t[4]||(t[4]=(0,n.iM)((e=>r.openToggle()),["stop"])),label:"raw data",class:"qbtn-style","icon-right":"arrow_drop_up"})):(0,s.kq)("",!0),a.formState.opendata?((0,s.wg)(),(0,s.j4)(h,{key:2,value:o.note,clickable:"",onClick:t[5]||(t[5]=(0,n.iM)((()=>{}),["stop"])),theme:"my-awesome-json-theme"},null,8,["value"])):(0,s.kq)("",!0)])],2)}var Te=o(499),De=o(5820),Pe=o(8993),Ze=o(1153);const Be={name:"ListPost",mixins:[$.Z],components:{PostActions:Pe.Z,UserAvatar:_.Z,UserName:x.Z,PostRenderer:De.Z,JsonViewer:D()},props:{note:{type:Object,required:!0},connectorTop:{type:Boolean,default:!1},connectorBottom:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},actions:{type:Boolean,default:!1},raw:Boolean},setup(e){const t=(0,Te.qj)({opendata:!1});return(0,s.YP)((()=>e.raw),(e=>{console.log("newProps.raw--------",e),t.opendata=e})),{app:(0,z.q)(),nostr:(0,W.D)(),formState:t}},data(){return{refreshCounter:0,refreshTimer:null,metadataDialog:!1,noteStr:"",CopyStr:""}},computed:{ancestor(){return this.note.hasAncestor()?this.nostr.getNote(this.note.ancestor()):null},showActions(){return this.actions&&this.note.canReply()},createdAt(){return this.refreshCounter,this.formatPostDate(this.note.createdAt)}},methods:{openToggle(){this.formState.opendata=!this.formState.opendata},formatPostDate(e){const t=this.$q.screen.lt.md?"short":"long";return ce.Z.formatFromNow(e,t)},info(){this.metadataDialog=!0,console.log("str----",this.note.id);let e=(0,re.Sk)(this.nostr.getNote(this.note.id)),t=JSON.stringify(this.nostr.getNote(this.note.id));console.log("str----",this.nostr.getNote(this.note.id)),this.noteStr=e,this.CopyStr=t},async copystr(e){e&&(console.log("str----",e),await navigator.clipboard.writeText(e).then((()=>{this.$q.notify({message:"Replication Success",color:"positive",timeout:1e3,position:"top"})})))},async del(){const e=Ze.Z["delete"](this.note,this.app.myPubkey).build();e.id=this.note.id,console.log("event--------------------",e),await this.app.signEvent(e)&&(await this.nostr.publish(e)||this.$q.notify({message:$t("Failed to publish reaction"),color:"negative"}))},async copyNoteId(){const e=(0,re.jm)(this.note.id,"note");await navigator.clipboard.writeText(e).then((()=>{this.$q.notify({message:"Replication Success",color:"positive",timeout:1e3,position:"top"})}))},async copyUserId(){const e=(0,re.jm)(this.note.author,"npub");await navigator.clipboard.writeText(e).then((()=>{this.$q.notify({message:"Replication Success",color:"positive",timeout:1e3,position:"top"})}))}},mounted(){const e=ce.Z.now()-this.note.createdAt>=3600?3600:60;this.refreshTimer=setInterval((()=>this.refreshCounter++),1e3*e)},unmounted(){clearInterval(this.refreshTimer)}},Me=(0,j.Z)(Be,[["render",xe],["__scopeId","data-v-3155ae2d"]]),Ue=Me;R()(Be,"components",{QBtn:A.Z});const je={name:"Thread",components:{ListPost:Ue},props:{thread:{type:Array,required:!0},forceBottomConnector:{type:Boolean,default:!1},raw:Boolean},setup(e){(0,s.YP)((()=>e.raw),(e=>{}))},computed:{filteredThread(){return this.thread.filter((e=>!!e))}}},Ae=(0,j.Z)(je,[["render",pe],["__scopeId","data-v-51f7054e"]]),Se=Ae,Re=(e,t)=>t[0].createdAt-e[0].createdAt,Le=e=>t=>(t.createdAt>e&&(t.createdAt=e),t),Ne=()=>(new Date).getTime()/1e3,We=25,ze={name:"FollowingBox",components:{UserCard:N,SearchBox:ae,PageHeader:le.Z,Thread:Se,ListPlaceholder:P.Z,JsonViewer:D(),UserAvatar:_.Z,UserName:x.Z,AsyncLoadButton:C.Z},mixins:[$.Z],data(){return{visible:[],hideBots:!1,pubkeyList:[],recentlyLoaded:!0,newer:[],older:[],loading:!1,Expansion:!1,kinds:[],notelist:[],kindlist:[{name:"Metadata",type:0,check:!1},{name:"Text",type:1,check:!1},{name:"RecommendRelay",type:2,check:!1},{name:"Contacts",type:3,check:!1},{name:"EncryptedDirectMessage",type:4,check:!1},{name:"EventDeletion",type:5,check:!1},{name:"Reposts",type:6,check:!1},{name:"Reaction",type:7,check:!1},{name:"Badge Award",type:8,check:!1},{name:"ChannelCreation",type:40,check:!1},{name:"ChannelMetadata",type:41,check:!1},{name:"ChannelMessage",type:42,check:!1},{name:"ChannelHideMessage",type:43,check:!1},{name:"ChannelMuteUser",type:44,check:!1},{name:"Report",type:1984,check:!1},{name:"ZapRequest",type:9734,check:!1},{name:"Zap",type:9735,check:!1},{name:"RelayList",type:10002,check:!1},{name:"ClientAuth",type:22242,check:!1},{name:"Article",type:30023,check:!1}],raw:!1}},setup(){return{app:(0,z.q)(),nostr:(0,W.D)()}},computed:{numUnreads(){return this.recentlyLoaded?0:this.newer.length},pubkey(){return this.app.myPubkey},contacts(){return this.nostr.getContacts(this.pubkey)?.slice(0,20)}},methods:{removekindlist(e){let t=this.kindlist;t.splice(e,1)},addkindlist(){const e={name:"",type:"",check:!1};this.kindlist.push(e)},formatPostDate(e){const t=this.$q.screen.lt.md?"short":"long";return ce.Z.formatFromNow(e,t)},ToggleRaw(){this.raw=!this.raw},pushKind(e,t){0===e||e?(this.kindlist[t].check=!0,this.kinds.push(e)):this.$q.notify({message:"No Kinds",color:"negative"})},delKind(e,t){if(0===e||e){this.kindlist[t].check=!1;const o=this.kinds;o.forEach(((t,s)=>{t==e&&(o.splice(s,1),this.kinds=o)}))}else this.$q.notify({message:"No Kinds",color:"negative"})},openToggle(){this.Expansion=!this.Expansion},getchildpub(e){this.pubkeyList.push(e)},delchildpub(e){const t=this.pubkeyList;t.forEach(((o,s)=>{o==e&&(t.splice(s,1),this.pubkeyList=t)}))},Searchchildpub(e){this.pubkeyList=[],this.pubkeyList.push(e),this.kinds?this.getProfile():this.$q.notify({message:"No Kinds",color:"negative"})},filterNote(e,t){return!e.isReaction()&&!e.isRepostOrTag()},ensureBech32(e,t){return(0,re.iY)(e)?e:(0,re.jm)(e,t)},filters(){console.log("kindskindskindskindskinds-----filters",this.kinds);let e=this.pubkeyList,t=this.kinds;return e&&e.length||(e=[]),e&&e.length?{kinds:t,authors:e}:(console.log("走这里"),{kinds:t})},followingdata(){let e=this.pubkeyList;if(!e||!e.length)return[];let t=[];const o=(0,F.d)();for(const s of e)t=t.concat(o.postsByAuthor(s,F.i.CREATION_DATE_DESC));return t},loadOlder(){console.log("loadOlder-*-*-*------*-*-*-*-*-*-*-*-*---*-")},loadNewer(){console.log("loadOlder-*-*-*------*-*-*-*-*-*-*-*-*---*-")},empty(){this.visible=""},reload(){this.loading=!0,this.getProfile()},async getProfile(){this.visible=[],this.notelist=[],this.loading=!0;const e=this.filters(),t=this.kinds;if(console.log("构造的filter为-----------------",e),1===t.length&&1==t[0])this.stream=this.nostr.stream(e,{subId:"",timeout:3e3}),this.stream.on("init",(e=>{const t=e.filter((e=>this.filterNote(e,this.hideBots))).map(Le(Ne())).map((e=>[e])).sort(Re).filter(((e,t,o)=>!t||e[0].id!==o[t-1][0].id));this.visible=t.slice(0,We),this.loading=!1})),e.authors?(console.log("选取了指定人员执行动态拉取"),this.stream.on("update",(e=>{this.getProfile()}))):console.log("未指定对象，不进行动态加载");else{const t=await this.nostr.fetch(e,{subId:""});console.log("选取了指定人员执行动态拉取",t),this.notelist=t.slice(0,We),this.loading=!1,this.stream=this.nostr.stream(e,{subId:""}),e.authors?(console.log("选取了指定人员执行动态拉取"),this.stream.on("update",(e=>{this.getProfile()}))):console.log("未指定对象，不进行动态加载")}}}},Fe=(0,j.Z)(ze,[["render",q],["__scopeId","data-v-12aae8ef"]]),$e=Fe;R()(ze,"components",{QBtn:A.Z})}}]);