"use strict";(globalThis["webpackChunkFreeFromWeb"]=globalThis["webpackChunkFreeFromWeb"]||[]).push([[2469],{3368:(e,s,t)=>{t.r(s),t.d(s,{default:()=>S});var o=t(9835),r=t(6970),c=t(1957);const n={class:"relative-position"},a={class:"searchbox-wrapper"},i={class:"searchbox-icon"},l={class:"searchbox-input"},u=["placeholder"];function h(e,s,t,h,d,p){const g=(0,o.up)("PageHeader"),f=(0,o.up)("BaseIcon"),m=(0,o.up)("q-form"),b=(0,o.up)("ListPlaceholder"),v=(0,o.up)("Thread");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(g,{"back-button":""}),(0,o._)("div",{class:(0,r.C_)(["searchbox",{focused:d.focused}])},[(0,o._)("div",a,[(0,o._)("div",i,[(0,o.Wm)(f,{icon:"search"})]),(0,o._)("div",l,[(0,o.Wm)(m,{onSubmit:(0,c.iM)(p.search,["stop"])},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>d.filters.search=e),ref:"input",type:"text",placeholder:e.$t("Search hashtag..."),onFocus:s[1]||(s[1]=(...e)=>p.toggleFocus&&p.toggleFocus(...e)),onBlur:s[2]||(s[2]=(...e)=>p.toggleFocus&&p.toggleFocus(...e)),onKeyup:[s[3]||(s[3]=(...e)=>p.search&&p.search(...e)),s[4]||(s[4]=(0,c.D2)((s=>e.$refs.input.blur()),["esc"]))]},null,40,u),[[c.nr,d.filters.search]])])),_:1},8,["onSubmit"])])])],2),(0,o.Wm)(b,{count:d.visible.length,loading:d.loading},null,8,["count","loading"]),(0,o.Wm)(v,{thread:d.visible,"force-bottom-connector":"",class:"ancestors"},null,8,["thread"])])}t(9665);var d=t(8803),p=t.n(d),g=t(5501),f=t(9715),m=t(8500),b=t(6401),v=t(7664),Z=(t(7175),t(5198)),y=t(2929),A=t(3099),F=t(6166),_=(t(7498),t(2187)),C=t(396),P=(t(2296),t(9010)),T=t(4520),k=t(384);const x=()=>{const e=(0,A.q)(),s=(0,F.D)(),t=s.getContacts(e.myPubkey);return t?.map((e=>e.pubkey)).concat(e.myPubkey)},w={name:"SearchBox",mixins:[y.Z],components:{UserCard:Z.Z,BaseIcon:v.Z,PageHeader:P.Z,ListPlaceholder:b.Z,PostRenderer:m.Z,UserAvatar:g.Z,UserName:f.Z,JsonViewer:p(),Thread:k.Z},setup(){return{app:(0,A.q)(),nostr:(0,F.D)()}},data(){return{visible:[],focused:!1,loading:!1,query:"",results:[],hideBots:!0,filters:{search:""}}},computed:{timestampOldest(){return this.results[this.results.length-1]?.[0]?.createdAt}},methods:{toggleFocus(){this.focused=!this.focused},filterNote(e,s){return!e.isReaction()&&(!e.isRepostOrTag()&&(!s||!e.relatedPubkeys().some(C.Z.isBot)))},datas(){let e=x();if(!e||!e.length)return[];let s=[];const t=(0,_.d)();for(const o of e)s=s.concat(t.postsByAuthor(o,_.i.CREATION_DATE_DESC));return s},allAncestors(e){if(!e.hasAncestor())return[];const s=this.nostr.getNote(e.ancestor());return s?this.allAncestors(s).concat([s]):(console.error(`Couldn't fetch ancestor ${e.ancestor()}`),[])},collectPredecessors(e,s){if(!e||!e.length)return[];const t=e.pop(),o=this.nostr.getRepliesTo(t.id,_.i.CREATION_DATE_ASC),r=o.findIndex((e=>e.id===s.id)),c=[t].concat(o.slice(0,r));return this.collectPredecessors(e,t).concat(c)},async search(){if(this.filters.search){this.visible=[],this.loading=!0;var e=this.filters.search;const s=e.match(/note[a-zA-Z0-9]{59,60}/gi);if(s){const e=(0,T.FX)(s[0]),t=this.nostr.getNote(e);console.log("ancestors=+++++++++++++++",t),this.visible.push(t)}else{const s=this.nostr.getNote(e);this.visible.push(s)}this.loading=!1}else this.results=[]}}};var B=t(1639),D=t(8326),N=t(9984),W=t.n(N);const R=(0,B.Z)(w,[["render",h]]),S=R;W()(w,"components",{QForm:D.Z})}}]);