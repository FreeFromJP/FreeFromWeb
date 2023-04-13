"use strict";(globalThis["webpackChunkFreeFromWeb"]=globalThis["webpackChunkFreeFromWeb"]||[]).push([[1093],{2621:(e,s,t)=>{t.r(s),t.d(s,{default:()=>J});var n=t(9835),o=t(6970);const a=e=>((0,n.dD)("data-v-14495e0a"),e=e(),(0,n.Cn)(),e),i={ref:"conversation",class:"conversation"},r=a((()=>(0,n._)("div",{class:"pusher"},null,-1))),c={key:0,class:"placeholder"},u={class:"conversation-reply"};function l(e,s,t,a,l,p){const h=(0,n.up)("UserCard"),d=(0,n.up)("PageHeader"),m=(0,n.up)("ChatMessage"),g=(0,n.up)("UserName"),b=(0,n.up)("MessageEditor");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(d,{"back-button":"",dense:""},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{pubkey:p.counterparty,class:"conversation-header",clickable:""},null,8,["pubkey"])])),_:1}),(0,n._)("div",i,[r,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(p.conversation,(e=>((0,n.wg)(),(0,n.j4)(m,{key:e.id,message:e},null,8,["message"])))),128)),p.conversation?.length?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",c,[p.counterparty!==a.app.myPubkey?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Uk)((0,o.zw)(e.$t("This is the beginning of your message history with"))+" ",1),(0,n.Wm)(g,{pubkey:p.counterparty,clickable:""},null,8,["pubkey"]),(0,n.Uk)(". ")],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Uk)(" Keep private notes by sending messages to yourself. ")],64))]))],512),(0,n._)("div",u,[(0,n.Wm)(b,{recipient:p.counterparty,placeholder:e.$t(p.placeholder),onPublish:p.onPublish,autofocus:""},null,8,["recipient","placeholder","onPublish"])])],64)}var p=t(8803),h=t.n(p),d=t(4586),m=t(5198);const g={class:"message-editor"},b={class:"inline-controls"},y={class:"inline-controls-item"},k={class:"controls"},v={class:"controls-submit"};function f(e,s,t,o,a,i){const r=(0,n.up)("AutoSizeTextarea"),c=(0,n.up)("BaseIcon"),u=(0,n.up)("EmojiPicker"),l=(0,n.up)("q-menu"),p=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.iD)("div",g,[(0,n._)("div",{class:"input-section",onClick:s[1]||(s[1]=s=>e.$refs.textarea.focus())},[(0,n.Wm)(r,{modelValue:a.content,"onUpdate:modelValue":s[0]||(s[0]=e=>a.content=e),ref:"textarea",placeholder:t.placeholder,disabled:a.publishing,rows:1,onSubmit:i.publishMessage,"submit-on-enter":""},null,8,["modelValue","placeholder","disabled","onSubmit"]),(0,n._)("div",b,[(0,n._)("div",y,[(0,n.Wm)(c,{icon:"emoji"}),(0,n.Wm)(l,{ref:"menuEmojiPicker"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{onSelect:i.onEmojiSelected},null,8,["onSelect"])])),_:1},512)])])]),(0,n._)("div",k,[(0,n._)("div",v,[(0,n.Wm)(p,{icon:"send",loading:a.publishing,disable:!i.hasContent(),color:"primary",onClick:i.publishMessage,round:""},null,8,["loading","disable","onClick"])])])])}var w=t(7664),Z=t(2056),C=t(3942),M=t(3099),P=t(6166),_=t(1153),T=t(5155);const $={name:"MessageEditor",components:{AutoSizeTextarea:C.Z,BaseIcon:w.Z,EmojiPicker:Z.Z},props:{recipient:{type:String,required:!0},placeholder:{type:String,default:"Message"},autofocus:{type:Boolean,default:!1}},emits:["publish"],data(){return{content:"",publishing:!1}},setup(){return{app:(0,M.q)(),nostr:(0,P.D)()}},methods:{hasContent(){return this.content.trim().length>0},onEmojiSelected(e){e.native&&(this.$refs.menuEmojiPicker.hide(),this.$refs.textarea.insertText(e.native))},focus(){this.$refs.textarea.focus()},reset(){this.content=""},async publishMessage(){this.publishing=!0;const e=await this.app.encryptMessage(this.recipient,this.content);if(!e)return;const s=_.Z.message(this.app.myPubkey,this.recipient,e).build();await this.app.signEvent(s)&&(await this.nostr.publish(s)?(this.reset(),this.$nextTick(this.focus.bind(this)),this.$emit("publish",s)):this.$q.notify({message:(0,T.$t)("Failed to send message"),color:"negative"}),this.publishing=!1)}},mounted(){this.autofocus&&this.$nextTick(this.focus.bind(this))}};var E=t(1639),S=t(6362),W=t(8879),j=t(2857),q=t(9984),x=t.n(q);const A=(0,E.Z)($,[["render",f],["__scopeId","data-v-771d760f"]]),B=A;x()($,"components",{QMenu:S.Z,QBtn:W.Z,QIcon:j.Z});var D=t(9715);function U(e,s,t,o,a,i){const r=(0,n.up)("EncryptedMessage"),c=(0,n.up)("q-chat-message");return(0,n.wg)(),(0,n.j4)(c,{sent:i.sent,"bg-color":i.sent?"grey-2":"pink-2",stamp:i.createdAt,class:"chat-message"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{message:t.message,"click-to-decrypt":""},null,8,["message"])])),_:1},8,["sent","bg-color","stamp"])}var z=t(9367),F=t(2296);const H={name:"ChatMessage",components:{EncryptedMessage:z.Z},props:{message:{type:Object,required:!0}},setup(){return{app:(0,M.q)()}},computed:{sent(){return this.message.author===this.app.myPubkey},createdAt(){return F.Z.formatFromNowLong(this.message.created_at)}}};var I=t(4813);const O=(0,E.Z)(H,[["render",U]]),Q=O;x()(H,"components",{QChatMessage:I.Z});var R=t(3413),V=t(4520);const Y={name:"Conversation",components:{ChatMessage:Q,UserName:D.Z,MessageEditor:B,PageHeader:d.Z,UserCard:m.Z,JsonViewer:h()},data(){return{opendata:!1}},setup(){return{app:(0,M.q)(),messages:(0,R.G)()}},computed:{counterparty(){return(0,V.FX)(this.$route.params.pubkey)},conversation(){if(this.app.isSignedIn)return this.messages.getConversation(this.app.myPubkey,this.counterparty)},placeholder(){return this.app.myPubkey===this.counterparty?"Jot something down":"Message"}},methods:{openToggle(){this.opendata=!this.opendata},onPublish(){this.markAsRead(),this.scrollToBottom()},markAsRead(){this.app.isSignedIn&&this.counterparty&&this.messages.markAsRead(this.app.myPubkey,this.counterparty)},scrollToBottom(){this.$nextTick((()=>window.scrollTo(0,document.body.scrollHeight)))}},mounted(){this.markAsRead(),this.resizeObserver=new ResizeObserver(this.scrollToBottom.bind(this)),this.resizeObserver.observe(this.$refs.conversation)},unmounted(){this.resizeObserver.disconnect()}},N=(0,E.Z)(Y,[["render",l],["__scopeId","data-v-14495e0a"]]),J=N;x()(Y,"components",{QBtn:W.Z})}}]);