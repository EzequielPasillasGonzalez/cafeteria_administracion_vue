"use strict";(self["webpackChunkcafeteria_administracion_vue"]=self["webpackChunkcafeteria_administracion_vue"]||[]).push([[256],{1256:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});e(3248);var i=e(4108),o=e(9096),s=e(656);const a={class:"navbar bg-primary"},r=(0,i.QD)("img",{src:s,alt:"Vue Logo",class:"d-inline-block align-text-top mx-2",height:"24"},null,-1),c={class:"d-flex"};function u(n,t,e,s,u,l){return(0,i.Wz)(),(0,i.An)("nav",a,[(0,i.QD)("a",{class:"navbar-brand text-white pointer",onClick:t[0]||(t[0]=t=>n.$router.push({name:"home"}))},[r,(0,i.mY)(" Panel de Administración | "+(0,o.WA)(n.usuario.nombre),1)]),(0,i.QD)("div",c,[n.isLoading?((0,i.Wz)(),(0,i.An)("button",{key:0,class:"btn btn-outline-info mx-2",onClick:t[1]||(t[1]=(...n)=>l.gotToSign&&l.gotToSign(...n))},[(0,i.QD)("i",{class:(0,o.WN)(u.iconSignIn)},null,2)])):((0,i.Wz)(),(0,i.An)("button",{key:1,class:"btn btn-outline-info mx-2",onClick:t[2]||(t[2]=(...n)=>l.gotToCloseSign&&l.gotToCloseSign(...n))},[(0,i.QD)("i",{class:(0,o.WN)(u.iconSignOut)},null,2)]))])])}var l=e(7192),g=e(8656),d=e.n(g),h={data(){return{iconSignIn:"fas fa-sign-in-alt",iconSignOut:"fas fa-sign-out-alt"}},methods:{gotToSign(){this.$router.push({name:"login"})},gotToCloseSign(){d().fire({title:"¿Estas seguro que deseas cerrar la sesión?",text:"",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si"}).then((n=>{n.isConfirmed&&(this.closeSession(),d().fire("Se cerró la sesión con éxito","","success"),this.$router.push({name:"home"}))}))},...(0,l.ae)("authStore",["setUserStorage","closeSession"])},computed:{...(0,l.ys)("authStore",{usuario:"usuario",isLoading:"isLoading"})},created(){this.setUserStorage()},watch:{isLoading(){this.setUserStorage()}}},f=e(4100);const m=(0,f.c)(h,[["render",u]]);var S=m}}]);
//# sourceMappingURL=256.3c69cced.js.map