(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{297:function(t,e,o){"use strict";var n=o(3),r=o(1);var l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return r.default.extend({name:"proxyable",model:{prop:t,event:e},props:Object(n.a)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(n.a)({},t,(function(t){this.internalLazyValue=t}))})}();e.a=l},317:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},344:function(t,e,o){t.exports=o.p+"img/3c8a959.png"},357:function(t,e,o){var content=o(611);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("04c45638",content,!0,{sourceMap:!1})},358:function(t,e){},608:function(t,e,o){t.exports=o.p+"img/b915cad.svg"},609:function(t,e,o){"use strict";o(83)("sub",(function(t){return function(){return t(this,"sub","","")}}))},610:function(t,e,o){"use strict";var n=o(357);o.n(n).a},611:function(t,e,o){var n=o(23),r=o(317),l=o(344);e=n(!1);var c=r(l);e.push([t.i,".theme--light.v-icon[data-v-fe9f2c38]{color:#d6adff}[data-v-fe9f2c38]::-webkit-input-placeholder{color:#aa56ff!important}[data-v-fe9f2c38]::-moz-placeholder{color:#aa56ff!important}[data-v-fe9f2c38]:-ms-input-placeholder{color:#aa56ff!important}[data-v-fe9f2c38]::-ms-input-placeholder{color:#aa56ff!important}[data-v-fe9f2c38]::placeholder{color:#aa56ff!important}.bg[data-v-fe9f2c38]{width:100%;height:100%;position:fixed;background:url("+c+");background-size:cover;background-position:50%}[data-v-fe9f2c38] .v-dialog{background:#fff;text-align:center}.v-card__title[data-v-fe9f2c38]{-webkit-box-pack:center;justify-content:center}.v-form[data-v-fe9f2c38]{width:100%}.v-input__slot[data-v-fe9f2c38]:before{border-color:#c58aff!important}.v-text-field>.v-input__control>.v-input__slot[data-v-fe9f2c38]:after{border-color:#fff!important}.primary--text[data-v-fe9f2c38],.v-label[data-v-fe9f2c38]{color:#c58aff!important}.primary--text[data-v-fe9f2c38]{caret-color:#c58aff!important}.container-spinner[data-v-fe9f2c38],.flex[data-v-fe9f2c38]{z-index:2}.flex[data-v-fe9f2c38]{-webkit-animation:intro .3s backwards;animation:intro .3s backwards;-webkit-animation-delay:.35s;animation-delay:.35s}.layout[data-v-fe9f2c38]{background:#60c!important}.bg-symbol[data-v-fe9f2c38]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.bg-symbol img[data-v-fe9f2c38]{width:40%}.hide-form[data-v-fe9f2c38]{-webkit-animation:down .3s forwards;animation:down .3s forwards}.error-form[data-v-fe9f2c38]{-webkit-animation:nono .3s,intro paused;animation:nono .3s,intro paused}.theme--light.v-text-field>.v-input__control>.v-input__slot[data-v-fe9f2c38]:before{border-color:#c58aff}.theme--light.v-input:not(.v-input--is-disabled) input[data-v-fe9f2c38],.theme--light.v-input:not(.v-input--is-disabled) textarea[data-v-fe9f2c38],.theme--light.v-label[data-v-fe9f2c38]{color:#c58aff}[data-v-fe9f2c38] .v-dialog{background-color:#fff}[data-v-fe9f2c38] .v-card__title+.v-card__text{text-align:center}",""]),t.exports=e},612:function(t,e,o){"use strict";var n=o(358),r=o.n(n);e.default=r.a},752:function(t,e,o){"use strict";o.r(e);o(609),o(53),o(54),o(6),o(17),o(29);var n,r=o(4),l=o(104),c={data:function(){return{status:!0,loading:!0,dialog:!1,dialogMessage:"",showPass:!1,title:"Entrar",email:"",emailRules:[function(t){return!!t||"Digite o e-mail"},function(t){return/.+@.+\..+/.test(t)||"E-mail inválido"}],password:"",passwordRules:[function(t){return!!t||"Digite a senha"},function(t){return t&&t.length>=6||"A senha deve ter no mínimo 6 caracteres"}]}},mounted:function(){openFB.init({appId:"1584605795055838"}),this.loginSocialReturn()},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Entre no aplicativo da New School - Levamos educação de qualidade na linguagem da quebrada para as periferias do Brasil, através da tecnologia e da curadoria de conteúdos baseados nas habilidades do futuro."}]}},methods:{submit:function(){var t=this;event.preventDefault(),this.$refs.form.validate()?(this.animateForm(!0),l.a.login(this.email,this.password).then((function(){$nuxt._router.push("/loading/login")})).catch((function(e){setTimeout((function(){t.dialogMessage="Usuário ou senha incorretos!",t.dialog=!0,t.loading=!1}),500),console.error(e)}))):this.animateForm(!1)},head:function(){return{title:this.title}},animateForm:function(t){var e=this;t?(this.$refs.flex.classList.add("hide-form"),document.querySelector("html").style.overflow="hidden",setTimeout((function(){e.loading=!0}),300)):(this.$refs.flex.classList.add("error-form"),setTimeout((function(){e.$refs.flex.classList.remove("error-form")}),500))},loginSocialReturn:(n=Object(r.a)(regeneratorRuntime.mark((function t(){var e,o,n,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.$auth.loggedIn){t.next=3;break}return this.loading=!1,t.abrupt("return");case 3:if(e=this.$auth.strategy.name,t.prev=4,"facebook"!==e){t.next=11;break}return o=this.getFacebookCredentials(),t.next=9,l.a.loginFacebook(o);case 9:t.next=15;break;case 11:if("google"!==e){t.next=15;break}return n=this.getGoogleCredentials(),t.next=15,l.a.loginGoogle(n);case 15:$nuxt._router.push("/loading/login"),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(4),setTimeout((function(){r.dialogMessage="Falha ao realizar login utilizando "+e+".",r.dialog=!0,r.loading=!1}),500),console.error(t.t0);case 22:case"end":return t.stop()}}),t,this,[[4,18]])}))),function(){return n.apply(this,arguments)}),loginSocial:function(t){this.loading=!0;try{openFB.login((function(t){"connected"===t.status?alert("Facebook login succeeded, got access token: "+t.authResponse.accessToken):alert("Facebook login failed: "+t.error)}),{scope:"email"})}catch(t){alert(t)}},getFacebookCredentials:function(){return{id:this.$store.state.auth.user.id,email:this.$store.state.auth.user.email,name:this.$store.state.auth.user.name,birthday:this.$store.state.auth.user.birthday}},getGoogleCredentials:function(){return{email:this.$store.state.auth.user.email,email_verified:this.$store.state.auth.user.email_verified.toString(),family_name:this.$store.state.auth.user.family_name,given_name:this.$store.state.auth.user.given_name,locale:this.$store.state.auth.user.locale,name:this.$store.state.auth.user.name,picture:this.$store.state.auth.user.picture,sub:this.$store.state.auth.user.sub}}}},f=(o(610),o(39)),d=o(612),v=o(43),m=o.n(v),h=o(272),k=o(293),x=o(728),_=o(412),w=o(732),y=o(311),$=o(729),C=o(267),V=o(305),F=o(117),z=o(730),E=o(308),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("div",{staticClass:"bg"}),t._v(" "),t.loading?n("div",[n("div",{staticClass:"container-spinner"},[n("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#fff"}})],1)]):n("v-flex",{ref:"flex",attrs:{role:"main",xs10:"",sm8:"",md4:""}},[n("div",{staticClass:"bg-symbol"},[n("img",{attrs:{src:o(608),alt:"New Schoool logo"}})]),t._v(" "),n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}}),t._v(" "),n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{dark:"",color:"#fff",rules:t.emailRules,label:"Email","data-vv-name":"email",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-text-field",{attrs:{dark:"",color:"#fff",rules:t.passwordRules,label:"Senha","data-vv-name":"password",type:t.showPass?"text":"password","append-icon":t.showPass?"mdi-eye-off":"mdi-eye",required:""},on:{"click:append":function(){return t.showPass=!t.showPass},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{staticClass:"btn-block btn-primary btn-white",attrs:{role:"button","aria-haspopup":"true","aria-expanded":"false",depressed:"",large:""},on:{click:t.submit}},[t._v("Entrar")])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{staticClass:"btn-transparent",attrs:{dark:"",block:"",depressed:"",large:"",to:"/cadastro"}},[t._v("Cadastrar")])],1),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){return t.loginSocial("facebook")}}},[n("v-icon",{attrs:{dark:"",left:""}},[t._v("mdi-facebook")]),t._v("Entrar com Facebook\n          ")],1)],1),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){return t.loginSocial("google")}}},[n("v-icon",{attrs:{dark:"",left:""}},[t._v("mdi-google-glass")]),t._v("Entrar com Google\n          ")],1)],1),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-btn",{attrs:{text:"",small:"",color:"#fff",to:"/esqueci-minha-senha"}},[t._v("Esqueceu sua senha?")])],1)],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card-title",{staticClass:"headline"},[t._v("Ops!")]),t._v(" "),n("v-card-text",[t._v(t._s(t.dialogMessage))]),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Ok")])],1)],1)}),[],!1,null,"fe9f2c38",null);"function"==typeof d.default&&Object(d.default)(component);e.default=component.exports;m()(component,{VBtn:h.a,VCardText:k.c,VCardTitle:k.d,VCol:x.a,VContainer:_.a,VDialog:w.a,VFlex:y.a,VForm:$.a,VIcon:C.a,VLayout:V.a,VProgressCircular:F.a,VRow:z.a,VTextField:E.a})}}]);