"use strict";(globalThis["webpackChunkFreeFromWeb"]=globalThis["webpackChunkFreeFromWeb"]||[]).push([[8551],{2038:(e,t,o)=>{o.r(t),o.d(t,{default:()=>X});var s=o(9835),a=o(6970),n=o(1957);const l=e=>((0,s.dD)("data-v-83c1ce76"),e=e(),(0,s.Cn)(),e),i={class:"profile-header"},r={class:"profile-header-content"},u={class:"username"},c={class:"about"},d={class:"followers"},p={class:"actions"},h={class:"profile-tabs"},m={class:"kind-checkbox ListRawbox"},b={class:"kind-checkbox-item ListRaw"},g=l((()=>(0,s._)("text",{class:"kind-checkbox-text"}," RAW ",-1)));function w(e,t,o,l,w,k){const f=(0,s.up)("PageHeader"),y=(0,s.up)("UserAvatar"),v=(0,s.up)("UserName"),_=(0,s.up)("FollowButton"),T=(0,s.up)("BaseIcon"),W=(0,s.up)("q-tooltip"),Z=(0,s.up)("q-icon"),$=(0,s.up)("q-tab"),F=(0,s.up)("q-tabs"),P=(0,s.up)("q-btn"),q=(0,s.up)("ListPost"),R=(0,s.up)("AsyncLoadLink"),C=(0,s.up)("q-tab-panel"),x=(0,s.up)("Thread"),M=(0,s.up)("ListPlaceholder"),L=(0,s.up)("q-tab-panels"),N=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(N,{class:"profile"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{"back-button":""}),(0,s._)("div",i,[(0,s.Wm)(y,{pubkey:e.pubkey,class:"profile-header-avatar"},null,8,["pubkey"]),(0,s._)("div",r,[(0,s._)("p",u,[(0,s.Wm)(v,{pubkey:e.pubkey,"two-line":"",header:"","show-verified":""},null,8,["pubkey"]),(0,s.Wm)(_,{pubkey:e.pubkey},null,8,["pubkey"])]),(0,s._)("p",c,(0,a.zw)(e.profile?.about),1),(0,s._)("p",d,[(0,s._)("a",{onClick:t[0]||(t[0]=t=>e.goToFollowers("following"))},[(0,s._)("strong",null,(0,a.zw)(e.contacts?.length||0),1),(0,s.Uk)(" "+(0,a.zw)(e.$t("Following")),1)]),(0,s._)("a",{onClick:t[1]||(t[1]=t=>e.goToFollowers("followers"))},[(0,s._)("strong",null,(0,a.zw)(e.followers?.length?`${e.followers?.length}+`:0),1),(0,s.Uk)(" "+(0,a.zw)(e.$t("Followers")),1)])]),(0,s._)("p",p,[(0,s._)("a",{onClick:t[2]||(t[2]=(...t)=>e.goToConversation&&e.goToConversation(...t))},[(0,s.Wm)(T,{icon:"messages"}),(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.$t("Send private message")),1)])),_:1})]),(0,s._)("a",{onClick:t[3]||(t[3]=t=>e.copyUserId(e.pubkey))},[(0,s.Wm)(Z,{name:"content_copy",size:"sm"}),(0,s.Wm)(W,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.$t("Copy UserID")),1)])),_:1})])])])]),(0,s._)("div",h,[(0,s.Wm)(F,{modelValue:e.activeTab,"onUpdate:modelValue":t[4]||(t[4]=t=>e.activeTab=t),outline:"",align:"justify","indicator-color":"primary",breakpoint:0},{default:(0,s.w5)((()=>[(0,s.Wm)($,{name:"posts",label:e.$t("Posts")},null,8,["label"]),(0,s.Wm)($,{name:"replies",label:e.$t("Replies")},null,8,["label"]),(0,s.Wm)($,{name:"reactions",label:e.$t("Reactions")},null,8,["label"]),(0,s.Wm)($,{name:"relays",label:e.$t("Relays")},null,8,["label"])])),_:1},8,["modelValue"])]),(0,s._)("div",m,[(0,s._)("div",b,[e.raw?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(P,{key:0,color:"primary",round:"",outline:"",size:"xs",onClick:t[5]||(t[5]=(0,n.iM)((t=>e.ToggleRaw()),["stop"])),class:"kind-checkbox-btn"})),e.raw?((0,s.wg)(),(0,s.j4)(P,{key:1,color:"primary",round:"",size:"xs",onClick:t[6]||(t[6]=(0,n.iM)((t=>e.ToggleRaw()),["stop"])),icon:"done"})):(0,s.kq)("",!0),g])]),(0,s.Wm)(L,{modelValue:e.activeTab,"onUpdate:modelValue":t[7]||(t[7]=t=>e.activeTab=t),class:"profile-tab-panels",animated:""},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{name:"posts",class:"no-padding"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.posts,((t,o)=>((0,s.wg)(),(0,s.iD)(s.HY,null,[e.defer(o)?((0,s.wg)(),(0,s.j4)(q,{key:t.id,note:t,clickable:"",actions:"",raw:e.raw},null,8,["note","raw"])):(0,s.kq)("",!0)],64)))),256)),(0,s.Wm)(R,{"load-fn":e.loadMorePosts,"has-items":!!e.posts?.length},null,8,["load-fn","has-items"])])),_:1}),(0,s.Wm)(C,{name:"replies",class:"no-padding"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.replies,((t,o)=>((0,s.wg)(),(0,s.iD)(s.HY,null,[e.defer(o)?((0,s.wg)(),(0,s.j4)(x,{key:t[1].id,thread:t,raw:e.raw},null,8,["thread","raw"])):(0,s.kq)("",!0)],64)))),256)),(0,s.Wm)(R,{"load-fn":e.loadMorePosts,"has-items":!!e.replies?.length},null,8,["load-fn","has-items"])])),_:1}),(0,s.Wm)(C,{name:"reactions",class:"no-padding"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.reactions,((t,o)=>((0,s.wg)(),(0,s.iD)(s.HY,null,[e.defer(o)?((0,s.wg)(),(0,s.j4)(x,{key:t[1].id,thread:t,raw:e.raw},null,8,["thread","raw"])):(0,s.kq)("",!0)],64)))),256)),(0,s.Wm)(R,{"load-fn":e.loadMoreReactions,"has-items":!!e.reactions?.length},null,8,["load-fn","has-items"])])),_:1}),(0,s.Wm)(C,{name:"relays",class:"no-padding"},{default:(0,s.w5)((()=>[(0,s.Wm)(M,{count:0})])),_:1})])),_:1},8,["modelValue"])])),_:1})}o(9665);var k=o(4586),f=o(5501),y=o(9715),v=o(6101),_=o(2141),T=o(6401),W=o(7328),Z=o(7664);const $={key:1};function F(e,t,o,n,l,i){const r=(0,s.up)("q-spinner");return(0,s.wg)(),(0,s.iD)("div",{ref:"link",class:"async-load-link",onClick:t[0]||(t[0]=(...t)=>e.load&&e.load(...t))},[e.loading?((0,s.wg)(),(0,s.j4)(r,{key:0,size:"sm"})):((0,s.wg)(),(0,s.iD)("span",$,[(0,s.Uk)((0,a.zw)(e.$t(e.noMore?e.prefixNoMore:e.hasItems?"":e.prefix))+" ",1),(0,s._)("a",null,(0,a.zw)(e.$t(e.noMore?e.labelNoMore:e.label)),1)]))],512)}const P=(0,s.aZ)({name:"AsyncLoadLink",emits:["loading","loaded"],props:{loadFn:{type:Function,required:!0},label:{type:String,default:"Load more"},labelNoMore:{type:String,default:"Try again?"},prefix:{type:String,default:"Nothing here."},prefixNoMore:{type:String,default:"Nothing found."},hasItems:{type:Boolean,default:!1},autoload:{type:Boolean,default:!1}},data(){return{loading:!1,noMore:!1,observer:null}},methods:{async load(){if(this.loading)return;this.loading=!0,this.$emit("loading");const e=await this.loadFn();this.noMore=!e||!e.length,this.loading=!1,this.$emit("loaded",e)}},mounted(){this.autoload&&(this.observer=new IntersectionObserver(this.load.bind(this),{root:null,threshold:.5}),this.observer.observe(this.$refs.button))},unmounted(){this.observer&&this.observer.disconnect()}});var q=o(1639),R=o(3940),C=o(9984),x=o.n(C);const M=(0,q.Z)(P,[["render",F],["__scopeId","data-v-92dd1492"]]),L=M;x()(P,"components",{QSpinner:R.Z});var N=o(3099),U=o(6166),z=o(4520),A=o(9944),I=o(7498),j=o(2296);const B=(0,s.aZ)({name:"Profile",components:{PageHeader:k.Z,UserAvatar:f.Z,UserName:y.Z,BaseIcon:Z.Z,FollowButton:W.Z,Thread:_.Z,ListPlaceholder:T.Z,ListPost:v.Z,AsyncLoadLink:L},mixins:[(0,A.Z)()],setup(){return{app:(0,N.q)(),nostr:(0,U.D)()}},data(){return{activeScreen:"posts",activeTab:this.$route.params.tab||"posts",loadingNotes:!0,loadingReactions:!0,raw:!1}},computed:{pubkey(){return(0,z.FX)(this.$route.params.pubkey)},profile(){return this.nostr.getProfile(this.pubkey)},notes(){return this.nostr.getPostsByAuthor(this.pubkey)},posts(){return console.log("this.notes---------------",this.notes),this.notes?.filter((e=>!e.hasAncestor()))},replies(){return this.notes?.filter((e=>e.hasAncestor())).map((e=>[this.nostr.getNote(e.ancestor()),e])).slice(0,50)},reactions(){return this.nostr.getReactionsByAuthor(this.pubkey).map((e=>[this.nostr.getNote(e.ancestor()),e])).slice(0,50)},relays(){return[]},contacts(){return this.nostr.getContacts(this.pubkey)},followers(){return this.nostr.getFollowers(this.pubkey)},lightningLink(){const e=this.profile?.lud06||this.profile?.lud16;return e?`lightning:${e}`:null}},methods:{ToggleRaw(){this.raw=!this.raw},loadMorePosts(){const e=this.notes?.[this.notes.length-1]?.created_at||j.Z.now();return this.nostr.fetch({kinds:[I.nS.NOTE],authors:[this.pubkey],until:e,limit:100})},loadMoreReactions(){const e=this.reactions?.[this.reactions.length-1]?.created_at||j.Z.now();return this.nostr.fetch({kinds:[I.nS.REACTION],authors:[this.pubkey],until:e,limit:100})},goToFollowers(e="following"){this.$router.push({name:"followers",params:{pubkey:(0,z.jm)(this.pubkey,"npub"),tab:e}})},goToConversation(){this.$router.push({name:"conversation",params:{pubkey:(0,z.jm)(this.pubkey,"npub")}})},async copyUserId(e){const t=(0,z.jm)(this.pubkey,"npub");await navigator.clipboard.writeText(t).then((()=>{this.$q.notify({message:"Replication Success",color:"positive",timeout:1e3,position:"top"})}))}},watch:{activeTab(){this.$router.replace({params:{tab:this.activeTab}})}},mounted(){this.nostr.fetchPostsByAuthor(this.pubkey,50).then((()=>this.loadingNotes=!1)),this.nostr.fetchReactionsByAuthor(this.pubkey,50).then((()=>this.loadingReactions=!1)),this.nostr.fetchFollowers(this.pubkey,1e3),this.stream=this.nostr.streamFullProfile(this.pubkey)},unmounted(){this.stream&&this.nostr.cancelStream(this.stream)}});var D=o(9885),S=o(6858),Q=o(2857),H=o(2230),V=o(900),Y=o(8879),K=o(4016),O=o(4106);const E=(0,q.Z)(B,[["render",w],["__scopeId","data-v-83c1ce76"]]),X=E;x()(B,"components",{QPage:D.Z,QTooltip:S.Z,QIcon:Q.Z,QTabs:H.Z,QTab:V.Z,QBtn:Y.Z,QTabPanels:K.Z,QTabPanel:O.Z})}}]);