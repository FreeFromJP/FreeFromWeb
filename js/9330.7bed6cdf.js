"use strict";(globalThis["webpackChunkFreeFromWeb"]=globalThis["webpackChunkFreeFromWeb"]||[]).push([[9330],{550:(e,s,t)=>{t.r(s),t.d(s,{default:()=>U});var o=t(9835),n=t(6970),r=t(1957);const i={class:"relative-position"},l={class:"searchbox-wrapper"},c={class:"searchbox-icon"},a={class:"searchbox-input"},u={key:0,class:"searchbox-results"},h={key:0,class:"query-example"},d=(0,o._)("b",null,"npub",-1),p=(0,o._)("b",null,"eventID",-1);function b(e,s,t,b,g,f){const m=(0,o.up)("PageHeader"),v=(0,o.up)("BaseIcon"),k=(0,o.up)("q-form"),y=(0,o.up)("UserCard"),w=(0,o.up)("Thread"),Z=(0,o.up)("json-viewer"),_=(0,o.up)("ListPlaceholder");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(m,{"back-button":""}),(0,o._)("div",{class:(0,n.C_)(["searchbox",{focused:g.focused}])},[(0,o._)("div",l,[(0,o._)("div",c,[(0,o.Wm)(v,{icon:"search"})]),(0,o._)("div",a,[(0,o.Wm)(k,{onSubmit:(0,r.iM)(f.search,["stop"])},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>g.filters.search=e),ref:"input",type:"text",placeholder:"Search eventID or npub",onFocus:s[1]||(s[1]=(...e)=>f.toggleFocus&&f.toggleFocus(...e)),onBlur:s[2]||(s[2]=(...e)=>f.toggleFocus&&f.toggleFocus(...e)),onKeyup:[s[3]||(s[3]=(...e)=>f.search&&f.search(...e)),s[4]||(s[4]=(0,r.D2)((s=>e.$refs.input.blur()),["esc"]))]},null,544),[[r.nr,g.filters.search]])])),_:1},8,["onSubmit"])])])],2),(0,o.Wm)(r.uT,{name:"fade"},{default:(0,o.w5)((()=>[g.focusednpub?((0,o.wg)(),(0,o.iD)("div",u,[g.results.length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",h,[d,(0,o.Uk)(" or "),p])),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(g.results,(s=>((0,o.wg)(),(0,o.j4)(y,{key:s,pubkey:s,class:"searchbox-results-item",clickable:"",onMousedown:t=>e.goToProfile(s)},null,8,["pubkey","onMousedown"])))),128))])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(w,{thread:g.visible,"force-bottom-connector":"",class:"ancestors"},null,8,["thread"]),g.jsonnote.length>0?((0,o.wg)(),(0,o.j4)(Z,{key:0,value:g.jsonnote,clickable:"",onClick:s[5]||(s[5]=(0,r.iM)((()=>{}),["stop"])),theme:"my-awesome-json-theme"},null,8,["value"])):(0,o.kq)("",!0),(0,o.Wm)(_,{count:g.visible.length||g.jsonnote.length,loading:g.loading},null,8,["count","loading"])])}t(9665);var g=t(8803),f=t.n(g),m=t(5501),v=t(9715),k=t(1925),y=t(6401),w=t(7664),Z=t(7175),_=t(5198),A=t(2929),j=t(3099),C=t(8039),D=(t(7498),t(5547)),F=t(396),P=(t(2296),t(4586)),T=t(4520),x=t(2141);const q=()=>{const e=(0,j.q)(),s=(0,C.D)(),t=s.getContacts(e.myPubkey);return t?.map((e=>e.pubkey)).concat(e.myPubkey)},W={name:"SearchBox",mixins:[A.Z],components:{UserCard:_.Z,BaseIcon:w.Z,PageHeader:P.Z,ListPlaceholder:y.Z,PostRenderer:k.Z,UserAvatar:m.Z,UserName:v.Z,JsonViewer:f(),Thread:x.Z},setup(){return{app:(0,j.q)(),nostr:(0,C.D)(),provider:new Z.Z}},data(){return{visible:[],focused:!1,focusednpub:!1,loading:!1,query:"",results:[],hideBots:!0,jsonnote:[],filters:{search:""}}},computed:{timestampOldest(){return this.results[this.results.length-1]?.[0]?.createdAt}},methods:{toggleFocus(){this.focused=!this.focused},filterNote(e,s){return!e.isReaction()&&(!e.isRepostOrTag()&&(!s||!e.relatedPubkeys().some(F.Z.isBot)))},datas(){let e=q();if(!e||!e.length)return[];let s=[];const t=(0,D.d)();for(const o of e)s=s.concat(t.postsByAuthor(o,D.i.CREATION_DATE_DESC));return s},allAncestors(e){if(!e.hasAncestor())return[];const s=this.nostr.getNote(e.ancestor());return s?this.allAncestors(s).concat([s]):(console.error(`Couldn't fetch ancestor ${e.ancestor()}`),[])},collectPredecessors(e,s){if(!e||!e.length)return[];const t=e.pop(),o=this.nostr.getRepliesTo(t.id,D.i.CREATION_DATE_ASC),n=o.findIndex((e=>e.id===s.id)),r=[t].concat(o.slice(0,n));return this.collectPredecessors(e,t).concat(r)},async search(){if(this.filters.search){this.visible=[],this.loading=!0;var e=this.filters.search;const s=e.match(/note[a-zA-Z0-9]{59,60}/gi),t=e.match(/npub[a-zA-Z0-9]{59,60}/gi);if(s){this.visible=[],this.jsonnote=[];const e=(0,T.FX)(s[0]),t=this.nostr.getNote(e);this.visible.push(t)}else if(t)this.focusednpub=!0,this.results=(await this.provider.queryProfiles(this.filters.search)).slice(0,200);else{const s={ids:[e]},t=await this.nostr.fetch(s);t?(this.visible=[],this.jsonnote=[],1==t[0].kind?this.visible=t:this.jsonnote=t):(this.visible=[],this.jsonnote=[])}this.loading=!1}else this.focusednpub=!1,this.results=[]}}};var B=t(1639),I=t(8326),N=t(9984),R=t.n(N);const S=(0,B.Z)(W,[["render",b]]),U=S;R()(W,"components",{QForm:I.Z})}}]);