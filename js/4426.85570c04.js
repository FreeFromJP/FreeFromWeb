"use strict";(globalThis["webpackChunkFreeFromWeb"]=globalThis["webpackChunkFreeFromWeb"]||[]).push([[4426],{396:(e,t,s)=>{s.d(t,{Z:()=>a});var o=s(4520);const n=new Set,a=n;n.isBot=n.has.bind(n),n.add=e=>Set.prototype.add.call(n,(0,o.FX)(e)),n.add("npub1tsgw6pncspg4d5u778hk63s3pls70evs4czfsmx0fzap9xwt203qtkhtk4"),n.add("npub17stpezz4suqdywh33k9x8pht04l76a5sfrsjj7q3mnp5ap5937eqdt58d7"),n.add("npub1xe59lfgsdvduqwh8h65zahkc2hv02mzpmdxghhhcpx0puret9taqheapxc")},6401:(e,t,s)=>{s.d(t,{Z:()=>g});var o=s(9835),n=s(6970);const a={key:0,class:"list-placeholder"},r={key:1};function i(e,t,s,i,l,c){const d=(0,o.up)("q-spinner");return s.count?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",a,[s.loading?((0,o.wg)(),(0,o.j4)(d,{key:0,size:"sm"})):((0,o.wg)(),(0,o.iD)("p",r,(0,n.zw)(e.$t(s.label)),1))]))}const l={name:"ListPlaceholder",props:{count:{type:Number,default:0},loading:{type:Boolean,default:!1},label:{type:String,default:"Nothing here."}}};var c=s(1639),d=s(3940),u=s(9984),p=s.n(u);const h=(0,c.Z)(l,[["render",i],["__scopeId","data-v-fdc49960"]]),g=h;p()(l,"components",{QSpinner:d.Z})},9010:(e,t,s)=>{s.d(t,{Z:()=>p});var o=s(9835),n=s(6970);const a={key:0},r={class:"addon"};function i(e,t,s,i,l,c){const d=(0,o.up)("base-icon");return(0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)(["page-header",{dense:e.dense}])},[e.backButton?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"back-button",onClick:t[0]||(t[0]=t=>e.$router.go(-1))},[(0,o.Wm)(d,{icon:"back"})])):(0,o.kq)("",!0),(0,o._)("div",{class:(0,n.C_)({"profile-info":!!e.subline})},[(0,o.WI)(e.$slots,"default",{},(()=>[(0,o._)("h2",null,(0,n.zw)(e.$t(e.title||e.titleFromRoute()||"Home")),1),e.subline?((0,o.wg)(),(0,o.iD)("span",a,(0,n.zw)(e.subline),1)):(0,o.kq)("",!0)]))],2),(0,o._)("div",r,[(0,o.WI)(e.$slots,"addon")])],2)}var l=s(7664);const c=(0,o.aZ)({name:"PageHeader",components:{BaseIcon:l.Z},props:{title:{type:String,default:void 0},subline:{type:String,default:void 0},backButton:{type:Boolean,default:!1},logo:{type:Boolean,default:!1},dense:{type:Boolean,default:!1}},methods:{titleFromRoute(){const e=this.$route.name?.toLowerCase();return e?.charAt(0).toUpperCase()+e?.substring(1)}}});var d=s(1639);const u=(0,d.Z)(c,[["render",i]]),p=u},2051:(e,t,s)=>{s.d(t,{Z:()=>d});var o=s(9835);const n={class:"thread"};function a(e,t,s,a,r,i){const l=(0,o.up)("ListPost");return(0,o.wg)(),(0,o.iD)("div",n,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.filteredThread,((e,t)=>((0,o.wg)(),(0,o.j4)(l,{key:e.id,note:e,"connector-top":i.filteredThread.length>1&&t>0,"connector-bottom":i.filteredThread.length>1&&t<i.filteredThread.length-1||s.forceBottomConnector,actions:"",clickable:""},null,8,["note","connector-top","connector-bottom"])))),128))])}var r=s(2017);const i={name:"Thread",components:{ListPost:r.Z},props:{thread:{type:Array,required:!0},forceBottomConnector:{type:Boolean,default:!1}},computed:{filteredThread(){return this.thread.filter((e=>!!e))}}};var l=s(1639);const c=(0,l.Z)(i,[["render",a],["__scopeId","data-v-70ea85be"]]),d=c},4426:(e,t,s)=>{s.r(t),s.d(t,{default:()=>$});var o=s(9835),n=s(6970),a=s(1957);const r={class:"relative-position"},i={class:"searchbox-wrapper"},l={class:"searchbox-icon"},c={class:"searchbox-input"},d=["placeholder"],u={class:"post"};function p(e,t,s,p,h,g){const m=(0,o.up)("PageHeader"),f=(0,o.up)("BaseIcon"),b=(0,o.up)("q-form"),v=(0,o.up)("ListPlaceholder"),y=(0,o.up)("json-viewer");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(m,{"back-button":""}),(0,o._)("div",{class:(0,n.C_)(["searchbox",{focused:h.focused}])},[(0,o._)("div",i,[(0,o._)("div",l,[(0,o.Wm)(f,{icon:"search"})]),(0,o._)("div",c,[(0,o.Wm)(b,{onSubmit:(0,a.iM)(g.search,["stop"])},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>h.filters.search=e),ref:"input",type:"text",placeholder:e.$t("Search hashtag..."),onFocus:t[1]||(t[1]=(...e)=>g.toggleFocus&&g.toggleFocus(...e)),onBlur:t[2]||(t[2]=(...e)=>g.toggleFocus&&g.toggleFocus(...e)),onKeyup:[t[3]||(t[3]=(...e)=>g.search&&g.search(...e)),t[4]||(t[4]=(0,a.D2)((t=>e.$refs.input.blur()),["esc"]))]},null,40,d),[[a.nr,h.filters.search]])])),_:1},8,["onSubmit"])])])],2),(0,o.Wm)(v,{count:h.visible.length,loading:h.loading},null,8,["count","loading"]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(h.visible,(e=>((0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(y,{value:e,clickable:"",onClick:t[5]||(t[5]=(0,a.iM)((()=>{}),["stop"])),theme:"my-awesome-json-theme"},null,8,["value"])])))),256))])}var h=s(8803),g=s.n(h),m=s(5501),f=s(9715),b=s(8500),v=s(2051),y=s(6401),k=s(7664),w=(s(7175),s(5198)),Z=s(2929),B=s(3099),_=s(6166),q=(s(7498),s(2187)),C=s(396),D=s(2296),x=s(9010);const F=()=>{const e=(0,B.q)(),t=(0,_.D)(),s=t.getContacts(e.myPubkey);return s?.map((e=>e.pubkey)).concat(e.myPubkey)},P={name:"SearchBox",mixins:[Z.Z],components:{UserCard:w.Z,BaseIcon:k.Z,PageHeader:x.Z,ListPlaceholder:y.Z,PostRenderer:b.Z,UserAvatar:m.Z,UserName:f.Z,JsonViewer:g(),Thread:v.Z},setup(){return{app:(0,B.q)(),nostr:(0,_.D)()}},data(){return{visible:[],focused:!1,loading:!1,query:"",results:[],hideBots:!0,filters:{search:""}}},computed:{timestampOldest(){return this.results[this.results.length-1]?.[0]?.createdAt}},methods:{toggleFocus(){this.focused=!this.focused},filterNote(e,t){return!e.isReaction()&&(!e.isRepostOrTag()&&(!t||!e.relatedPubkeys().some(C.Z.isBot)))},datas(){let e=F();if(!e||!e.length)return[];let t=[];const s=(0,q.d)();for(const o of e)t=t.concat(s.postsByAuthor(o,q.i.CREATION_DATE_DESC));return t},async search(){if(this.filters.search){this.loading=!0;const e={kinds:[1],authors:this.app.myPubkey,"#t":[this.filters.search]},t=(this.timestampOldest||D.Z.now(),await this.nostr.fetch(e,{subId:"",timeout:3e3}));this.visible=t.slice(0,10),this.loading=!1}else this.results=[]}}};var T=s(1639),S=s(8326),z=s(9984),W=s.n(z);const I=(0,T.Z)(P,[["render",p]]),$=I;W()(P,"components",{QForm:S.Z})}}]);