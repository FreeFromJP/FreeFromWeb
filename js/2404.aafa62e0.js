"use strict";(globalThis["webpackChunkFreeFromWeb"]=globalThis["webpackChunkFreeFromWeb"]||[]).push([[2404],{2542:(t,e,o)=>{o.r(e),o.d(e,{default:()=>at});var s=o(9835),r=o(1957),n=o(6970);const a=t=>((0,s.dD)("data-v-c2ba6e94"),t=t(),(0,s.Cn)(),t),i={class:"kind-checkbox ListRawbox"},l={class:"kind-checkbox-item ListRaw"},c=a((()=>(0,s._)("text",{class:"kind-checkbox-text"}," RAW ",-1))),d={ref:"ancestors"},h={key:1,style:{"padding-left":"1.5rem"}},u={key:0},p=a((()=>(0,s._)("div",{style:{"min-height":"80vh"}},null,-1)));function m(t,e,o,a,m,g){const w=(0,s.up)("PageHeader"),f=(0,s.up)("q-btn"),k=(0,s.up)("Thread",!0),v=(0,s.up)("HeroPost"),b=(0,s.up)("q-spinner"),_=(0,s.up)("q-item"),T=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(T,{ref:"page"},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{title:t.$t("thread"),"back-button":""},null,8,["title"]),(0,s._)("div",i,[(0,s._)("div",l,[t.raw?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(f,{key:0,color:"primary",round:"",outline:"",size:"xs",onClick:e[0]||(e[0]=(0,r.iM)((e=>t.ToggleRaw()),["stop"])),class:"kind-checkbox-btn"})),t.raw?((0,s.wg)(),(0,s.j4)(f,{key:1,color:"primary",round:"",size:"xs",onClick:e[1]||(e[1]=(0,r.iM)((e=>t.ToggleRaw()),["stop"])),icon:"done"})):(0,s.kq)("",!0),c])]),(0,s._)("div",d,[t.ancestors?.length?((0,s.wg)(),(0,s.j4)(k,{key:0,thread:t.ancestors,"force-bottom-connector":"",class:"ancestors",raw:t.raw},null,8,["thread","raw"])):(0,s.kq)("",!0)],512),(0,s.Wm)(_,{ref:"main",class:"no-padding column"},{default:(0,s.w5)((()=>[t.note?.id?((0,s.wg)(),(0,s.j4)(v,{key:0,note:t.note,connector:t.ancestors?.length>0,raw:t.raw},null,8,["note","connector","raw"])):((0,s.wg)(),(0,s.iD)("div",h,[(0,s.Wm)(b,{size:"sm",style:{"margin-right":"0.5rem"}}),(0,s.Uk)(" "+(0,n.zw)(t.$t("Loading...")),1)]))])),_:1},512),t.children?.length?((0,s.wg)(),(0,s.iD)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.children,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e[0].id},[(0,s.Wm)(k,{thread:e,raw:t.raw},null,8,["thread","raw"])])))),128))])):(0,s.kq)("",!0),p])),_:1},512)}o(9665);var g=o(9010),w=o(2141);const f=t=>((0,s.dD)("data-v-72e705f2"),t=t(),(0,s.Cn)(),t),k={class:"post"},v={class:"post-author"},b={class:"post-author-avatar"},_={class:"connector-top"},T={key:0,class:"connector-line"},y={class:"post-author-name"},A={class:"post-content"},I={class:"post-content-header"},C={key:0,class:"in-reply-to"},q={class:"post-content-body"},D={class:"post-content-footer"},R={class:"created-at"},P=f((()=>(0,s._)("span",null,"·",-1))),S={class:"post-content-actions"},Z={key:0,class:"post-reply"};function x(t,e,o,a,i,l){const c=(0,s.up)("UserAvatar"),d=(0,s.up)("UserName"),h=(0,s.up)("PostRenderer"),u=(0,s.up)("q-btn"),p=(0,s.up)("json-viewer"),m=(0,s.up)("PostActions"),g=(0,s.up)("PostEditor");return(0,s.wg)(),(0,s.iD)("div",k,[(0,s._)("div",v,[(0,s._)("div",b,[(0,s._)("div",_,[o.connector?((0,s.wg)(),(0,s.iD)("div",T)):(0,s.kq)("",!0)]),(0,s.Wm)(c,{pubkey:o.note.author,clickable:""},null,8,["pubkey"])]),(0,s._)("div",y,[(0,s.Wm)(d,{pubkey:o.note.author,clickable:"","two-line":"","show-verified":""},null,8,["pubkey"])])]),(0,s._)("div",A,[(0,s._)("div",I,[o.note.hasAncestor()?((0,s.wg)(),(0,s.iD)("p",C,[(0,s.Uk)((0,n.zw)(t.$t("Replying to"))+" ",1),(0,s._)("a",{onClick:e[0]||(e[0]=(0,r.iM)((e=>t.goToProfile(l.ancestor?.author)),["stop"]))},[l.ancestor?.author?((0,s.wg)(),(0,s.j4)(d,{key:0,pubkey:l.ancestor?.author},null,8,["pubkey"])):(0,s.kq)("",!0)])])):(0,s.kq)("",!0)]),(0,s._)("div",q,[(0,s._)("p",null,[(0,s.Wm)(h,{note:o.note},null,8,["note"])])]),(0,s._)("div",D,[(0,s._)("p",R,[(0,s._)("span",null,(0,n.zw)(l.formatTime(o.note.createdAt)),1),P,(0,s._)("span",null,(0,n.zw)(l.formatDate(o.note.createdAt)),1)]),a.formState.opendata?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(u,{key:0,color:"primary",size:"sm",onClick:e[1]||(e[1]=(0,r.iM)((t=>l.openToggle()),["stop"])),label:"raw data",class:"qbtn-style","icon-right":"arrow_drop_down"})),a.formState.opendata?((0,s.wg)(),(0,s.j4)(u,{key:1,color:"primary",size:"sm",onClick:e[2]||(e[2]=(0,r.iM)((t=>l.openToggle()),["stop"])),label:"raw data",class:"qbtn-style","icon-right":"arrow_drop_up"})):(0,s.kq)("",!0),a.formState.opendata?((0,s.wg)(),(0,s.j4)(p,{key:2,value:o.note,clickable:"",onClick:e[3]||(e[3]=(0,r.iM)((()=>{}),["stop"])),theme:"my-awesome-json-theme"},null,8,["value"])):(0,s.kq)("",!0),(0,s._)("div",S,[(0,s.Wm)(m,{note:o.note,flavor:"hero",onComment:e[4]||(e[4]=e=>t.$refs.editor.focus())},null,8,["note"])])])]),a.app.isSignedIn?((0,s.wg)(),(0,s.iD)("div",Z,[(0,s.Wm)(g,{ancestor:o.note,ref:"editor",compact:"",placeholder:t.$t("Post your reply")},null,8,["ancestor","placeholder"])])):(0,s.kq)("",!0)])}var z=o(499),E=o(8803),L=o.n(E),j=o(9715),N=o(5501),O=o(8500),$=o(4995),W=o(6166),M=o(3099),H=o(2929),U=o(2296),F=o(8993);const Q={name:"HeroPost",mixins:[H.Z],components:{PostActions:F.Z,UserName:j.Z,UserAvatar:N.Z,PostEditor:$.Z,PostRenderer:O.Z,JsonViewer:L()},props:{note:{type:Object,required:!0},connector:{type:Boolean,default:!1},raw:Boolean},setup(t){const e=(0,z.qj)({opendata:!1});return(0,s.YP)((()=>t.raw),(t=>{e.opendata=t})),{app:(0,M.q)(),nostr:(0,W.D)(),formState:e}},computed:{ancestor(){return this.note.hasAncestor()?this.nostr.getNote(this.note.ancestor()):null}},data(){return{}},methods:{formatDate:U.Z.formatDate,formatTime:U.Z.formatTime,openToggle(){this.formState.opendata=!this.formState.opendata}}};var B=o(1639),Y=o(8879),J=o(9984),K=o.n(J);const V=(0,B.Z)(Q,[["render",x],["__scopeId","data-v-72e705f2"]]),X=V;K()(Q,"components",{QBtn:Y.Z});var G=o(2187),tt=o(4520);const et=(0,s.aZ)({name:"ThreadPage",components:{HeroPost:X,Thread:w.Z,PageHeader:g.Z},setup(){return{nostr:(0,W.D)()}},data(){return{subId:null,resizeObserver:null,raw:!1}},computed:{noteId(){return(0,tt.FX)(this.$route.params.id)},note(){if(this.noteId)return this.nostr.getNote(this.noteId)},noteLoaded(){return this.noteId&&this.note?.id===this.noteId},rootId(){if(this.noteLoaded)return this.note.hasAncestor()?this.note.root():this.note.id},root(){if(this.rootId)return this.nostr.getNote(this.rootId)},rootLoaded(){if(this.noteLoaded)return this.root?.id===this.rootId},ancestors(){if(!this.noteLoaded)return;const t=this.allAncestors(this.note);return t.length>0&&t[0].id!==this.rootId&&console.error(`Invalid thread structure: expected root ${this.rootId} but found ${t[0].id}`),this.collectPredecessors(t,this.note)},children(){if(!this.noteLoaded)return;const t=this.note.hasAncestor()?this.nostr.getNote(this.note.ancestor()):null;return this.collectChildren(this.note,t)}},methods:{ToggleRaw(){this.raw=!this.raw},startStream(){this.rootId&&(this.stream=this.nostr.streamThread(this.rootId))},closeStream(){this.stream&&(this.stream.close(),this.stream=null)},collectPredecessors(t,e){if(!t||!t.length)return[];const o=t.pop(),s=this.nostr.getRepliesTo(o.id,G.i.CREATION_DATE_ASC),r=s.findIndex((t=>t.id===e.id)),n=[o].concat(s.slice(0,r));return this.collectPredecessors(t,o).concat(n)},collectChildren(t,e){const o=[];if(e){const s=this.nostr.getRepliesTo(e.id,G.i.CREATION_DATE_ASC),r=s.findIndex((e=>e.id===t.id)),n=s.slice(r+1);n.length&&o.push(n)}const s=this.nostr.getRepliesTo(t.id,G.i.CREATION_DATE_DESC);for(const r of s)o.push(this.unrollLongest(r));return o},unrollLinear(t){const e=[t];let o=this.nostr.getRepliesTo(t.id,G.i.CREATION_DATE_ASC);while(1===o.length)e.push(o[0]),t=o[0],o=this.nostr.getRepliesTo(t.id,G.i.CREATION_DATE_ASC);return e},unrollLongest(t){let e=[],o=this.nostr.getRepliesTo(t.id,G.i.CREATION_DATE_ASC);for(const r of o)e.push(this.unrollLongest(r));let s=[];for(const r of e)r.length>=s.length&&(s=r);return[t].concat(s)},allAncestors(t){if(!t.hasAncestor())return[];const e=this.nostr.getNote(t.ancestor());return e?this.allAncestors(e).concat([e]):(console.error(`Couldn't fetch ancestor ${t.ancestor()}`),[])},scrollToMain(){const t=this.$refs.main?.$el;if(!t)return;const e=this.$q.screen.xs?61:78,o=Math.max(t.offsetTop-e,0);window.scrollTo(0,o)}},watch:{root(){this.rootLoaded&&this.startStream()}},mounted(){this.startStream(),this.resizeObserver=new ResizeObserver(this.scrollToMain.bind(this)),this.resizeObserver.observe(this.$refs.ancestors),setTimeout((()=>this.resizeObserver.disconnect()),2e3)},unmounted(){this.closeStream(),this.resizeObserver.disconnect()}});var ot=o(9885),st=o(490),rt=o(3940);const nt=(0,B.Z)(et,[["render",m],["__scopeId","data-v-c2ba6e94"]]),at=nt;K()(et,"components",{QPage:ot.Z,QBtn:Y.Z,QItem:st.Z,QSpinner:rt.Z})}}]);