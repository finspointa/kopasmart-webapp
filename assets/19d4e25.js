(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{701:function(e,t,n){var content=n(702);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("2065bca8",content,!0,{sourceMap:!1})},702:function(e,t,n){var r=n(16)(!1);r.push([e.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),e.exports=r},705:function(e,t,n){"use strict";var r=n(1),l=(n(40),n(61),n(190),n(7),n(9),n(50),n(73),n(10),n(8),n(13),n(14),n(5)),o=n(100),c=n(118);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(l.a)(o.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},709:function(e,t,n){var content=n(718);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("6ed9f1f3",content,!0,{sourceMap:!1})},710:function(e,t,n){"use strict";var r=n(29),l=n(1),o=(n(21),n(74),n(50),n(40),n(61),n(73),n(10),n(8),n(7),n(13),n(9),n(14),n(701),n(664)),c=n(115),d=n(101),v=n(157),m=n(256),h=n(253),f=n(252),_=n(45),x=n(124),y=n(5),w=n(12),k=n(0);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function $(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C=Object(y.a)(c.a,d.a,v.a,m.a,h.a,f.a,_.a);t.a=C.extend({name:"v-dialog",directives:{ClickOutside:x.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(l.a)(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(l.a)(e,"v-dialog--active",this.isActive),Object(l.a)(e,"v-dialog--persistent",this.persistent),Object(l.a)(e,"v-dialog--fullscreen",this.fullscreen),Object(l.a)(e,"v-dialog--scrollable",this.scrollable),Object(l.a)(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(t=this.previousActiveElement)||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w.e)("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):m.a.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){e.previousActiveElement=document.activeElement,e.$refs.content.focus(),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===k.x.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),l=Object(r.a)(n).find((function(e){return!e.hasAttribute("disabled")}));l&&l.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(o.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:$({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=$($({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(k.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(k.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},717:function(e,t,n){"use strict";n(709)},718:function(e,t,n){var r=n(16)(!1);r.push([e.i,"pa-sm-2[data-v-9d85d87e]{text-align:center}",""]),e.exports=r},742:function(e,t,n){"use strict";n.r(t);n(80),n(36),n(33);var r=n(262),l=n(263),o=n(254),c={layout:null!=localStorage.getItem("qAccessToken")?"default":"home",components:{Logo:r.default,VuetifyLogo:l.default,DatatableComponent:o.default},data:function(){return{valid:!0,title:"Home",dense:!1,dark:!1,dialog:!1,advanced:!1,name:null,interest_methods:["FLAT","STRAIGHT","REDUCING_BALANCE"],amortization_methods:["EQUAL_INSTALLMENT","EQUAL_PRINCIPAL"],datarequired:!0,ttInterest:"",ttBalance:"",loan_terms:[{name:"Days",value:1},{name:"Weeks",value:7},{name:"Months",value:30},{name:"Year",value:366}],iterest_methods:[{name:"Flat",value:1},{name:"Reducing Balance",value:2},{name:"Straight Method",value:3}],amortizations:["Equal Installment","Equal principal"],headers:[{text:this.$t("label.heading.Day"),align:"left",sortable:!1,value:"days"},{text:this.$t("label.heading.Paid Date"),value:"paiddate"},{text:this.$t("label.heading.Principal"),value:"loanamount"},{text:this.$t("label.heading.Principal due"),value:"principaldue"},{text:this.$t("label.heading.Interest"),value:"interest",filterable:!1},{text:this.$t("label.heading.Interrest"),value:"interrest",filterable:!1},{text:this.$t("label.heading.Loan Balance"),value:"loanbalance"},{text:this.$t("label.heading.Total"),value:"total",filterable:!1}],repayments:[],method:{},value_frequency:{},value_loan_amount:"",value_interest_rate:"",value_loan_term:"",value_interest_free_period:"",value_num_of_repayments:"",value_repayments_freq:"",value_amortization:"",value_interest_moratorium:"",value_principal_moratorium:"",value_loan_term_unit:{},value_repayment_freq_unit:{},loading:!1,search:"",valueRules:[function(e){return!!e||"Value is required"},function(e){return e&&e.length<=1||"Value must be less than 2 characters"}],nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],numberRules:[function(e){return!!e||"Invalid value"}]}},head:function(){return{title:"Calculator"}},methods:{calculate:function(){var e=this;this.$refs.form.validate()&&(this.datarequired=!1,this.loading=!0,this.$nextTick((function(){var t=[],n=e.value_interest_rate/100;if(1==e.method.value){var r=e.value_loan_amount*n*e.value_loan_term;e.ttInterest=r,e.ttBalance=parseInt(e.value_loan_amount)+parseInt(r);for(var l=parseInt(e.value_loan_amount)+parseInt(r),i=0;i<e.value_num_of_repayments;i++){var o=new Object;o.days=1+i,o.paiddate=e.getNextWeekDay((i+1)*e.value_repayments_freq*e.value_frequency.value).toLocaleString().split(" ")[0],o.principaldue=e.value_loan_amount/e.value_num_of_repayments,o.loanamount=e.value_loan_amount,o.interest=r/e.value_num_of_repayments,o.total=o.principaldue+o.interest,l-=o.principaldue+o.interest,o.loanbalance=l,t.push(o)}}else e.method.value;e.repayments=t})),this.loading=!1)},displayAdvanceOptions:function(){this.advanced=!this.advanced},clear:function(){this.$refs.form.reset()},cancel:function(){this.datarequired=!0},getNextWeekDay:function(i){var e=new Date(Date.now());return new Date(e.getTime()+1*parseInt(i)*24*60*60*1e3)},saveRepaymentSchedule:function(){var data={name:this.name||new Date(Date.now()),amount:this.value_loan_amount,interest_rate:this.value_interest_rate,interest_method:this.interest_methods[this.method.value-1],loan_term:this.value_loan_term,loan_term_unit:this.getSelectedTerm(this.value_loan_term_unit),repaid_every:this.value_repayments_freq,repaid_every_unit:this.getSelectedTerm(this.value_frequency),number_of_repayments:this.value_num_of_repayments,amortization:"EQUAL_INSTALLMENT",interest_moratorium:parseInt(this.value_interest_moratorium)||0,principal_moratorium:parseInt(this.value_principal_moratorium)||0,interest_free_period:parseInt(this.value_interest_free_period)||0};this.$refs.forms.validate()&&this.$store.dispatch("saveSchedule",data)},getSelectedTerm:function(i){switch(i.value){case 1:return"D";case 7:return"W";case 30:return"M";case 366:return"Y"}}},computed:{isLoggedIn:function(){return null!=localStorage.getItem("qAccessToken")}}},d=(n(717),n(24)),v=n(31),m=n.n(v),h=n(680),f=n(145),_=n(243),x=n(59),y=n(691),w=n(681),k=n(710),O=n(682),$=n(705),C=n(684),A=n(692),j=n(181),I=n(690),S=n(116),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"app"},[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-card",{staticClass:"mx-auto"},[e.datarequired?n("v-container",{attrs:{fluid:""}},[n("p",{staticClass:"subtitle-2 text-center font-weight-black"},[e._v(e._s(e.$t("label.heading.loanrepaymentschedulecalculator")))]),e._v(" "),n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{type:"number",label:e.$t("label.heading.Loan Amount"),dense:"",min:"0",required:"",counter:4,rules:e.numberRules},model:{value:e.value_loan_amount,callback:function(t){e.value_loan_amount=t},expression:"value_loan_amount"}})],1),e._v(" "),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{type:"number",label:e.$t("label.heading.Interest Rate"),dense:"",required:"",min:"0",rules:e.numberRules},model:{value:e.value_interest_rate,callback:function(t){e.value_interest_rate=t},expression:"value_interest_rate"}})],1),e._v(" "),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:e.iterest_methods,"item-text":"name","item-value":"value",rules:[function(e){return!!e||"Item is required"}],label:e.$t("label.heading.Interest Method"),required:"","persistent-hint":"","return-object":"",dense:""},model:{value:e.method,callback:function(t){e.method=t},expression:"method"}})],1),e._v(" "),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{type:"number",label:e.$t("label.heading.Loan Terms"),dense:"",required:"",min:"0",rules:e.numberRules},model:{value:e.value_loan_term,callback:function(t){e.value_loan_term=t},expression:"value_loan_term"}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-select",{attrs:{items:e.loan_terms,rules:[function(e){return!!e||"Item is required"}],"item-value":"value","item-text":"name",label:e.$t("label.heading.Units"),dense:"","persistent-hint":"","return-object":""},model:{value:e.value_loan_term_unit,callback:function(t){e.value_loan_term_unit=t},expression:"value_loan_term_unit"}})],1),e._v(" "),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{type:"number",label:e.$t("label.heading.Number of Repayments"),dense:"",required:"",min:"0",rules:e.numberRules},model:{value:e.value_num_of_repayments,callback:function(t){e.value_num_of_repayments=t},expression:"value_num_of_repayments"}})],1),e._v(" "),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{type:"number",label:e.$t("label.heading.Repayment Frequency"),dense:"",min:"0"},model:{value:e.value_repayments_freq,callback:function(t){e.value_repayments_freq=t},expression:"value_repayments_freq"}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-select",{attrs:{items:e.loan_terms,"item-text":"name","item-value":"value",label:e.$t("label.heading.Units"),rules:[function(e){return!!e||"Item is required"}],dense:"",required:"","persistent-hint":"","return-object":""},model:{value:e.value_frequency,callback:function(t){e.value_frequency=t},expression:"value_frequency"}})],1),e._v(" "),e.advanced?n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:e.amortizations,label:e.$t("label.heading.Amortization"),dense:""},model:{value:e.value_amortization,callback:function(t){e.value_amortization=t},expression:"value_amortization"}})],1):e._e(),e._v(" "),e.advanced?n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{type:"number",label:e.$t("label.heading.Interest Moratorium"),dense:"",min:"0"},model:{value:e.value_interest_moratorium,callback:function(t){e.value_interest_moratorium=t},expression:"value_interest_moratorium"}})],1):e._e(),e._v(" "),e.advanced?n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{type:"number",label:e.$t("label.heading.Principal Moratorium"),dense:"",min:"0"},model:{value:e.value_principal_moratorium,callback:function(t){e.value_principal_moratorium=t},expression:"value_principal_moratorium"}})],1):e._e(),e._v(" "),e.advanced?n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{type:"number",label:e.$t("label.heading.Interest Free Period"),dense:"",min:"0"},model:{value:e.value_interest_free_period,callback:function(t){e.value_interest_free_period=t},expression:"value_interest_free_period"}})],1):e._e(),e._v(" "),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}}),e._v(" "),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",small:"",color:"primary"},on:{click:e.displayAdvanceOptions}},[e._v(e._s(e.advanced?e.$t("label.text.SHOWLESS"):e.$t("label.text.ADVANCED")))])],1)],1)],1):n("v-container",[n("v-card-title",[e._v("\n                "+e._s(e.$t("label.heading.repaymentschedule"))+"\n                "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:e.$t("label.heading.Search"),"hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),n("datatable-component",{staticClass:"elevation-0",attrs:{headers:e.headers,repayments:e.repayments,"items-per-page":5,search:e.search,amount:e.value_loan_amount,ttInterest:e.ttInterest,ttBalance:e.ttBalance,dense:e.dense,dark:e.dark,"multi-sort":"",loading:e.loading,"loading-text":"Loading... Please wait"}})],1),e._v(" "),n("v-row",[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}}),e._v(" "),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[e._v("\n                   \n                "),e.datarequired?n("v-btn",{attrs:{color:"success",small:"",outlined:"",depressed:"",disabled:!e.valid},on:{click:e.calculate}},[e._v(e._s(e.$t("label.button.btncalculate")))]):e._e(),e._v(" \n                "),e.datarequired?n("v-btn",{attrs:{color:"secondary",outlined:"",small:"",depressed:""},on:{click:e.clear}},[e._v(e._s(e.$t("label.button.btnclear")))]):e._e(),e._v(" \n                "),e.datarequired?e._e():n("v-btn",{attrs:{color:"error",small:"",depressed:""},on:{click:e.cancel}},[e._v(e._s(e.$t("label.button.btnback")))]),e._v(" \n                "),e.isLoggedIn?n("div",[e.datarequired?e._e():n("v-btn",{staticClass:"error lighten-1 white--text",staticStyle:{"text-transform":"capitalize"},attrs:{small:""},on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[e._v(e._s(e.$t("label.button.btnsave")))]),e._v(" \n                  "),n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-form",{ref:"forms",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-card",[n("v-card-title",{staticClass:"headline error white--text"},[e._v(e._s(e.$t("label.message.Do you Agree"))+"?")]),e._v(" "),n("v-card-text",{staticClass:"mt-1 pt-1"},[e._v(e._s(e.$t("label.message.saveschedule")))]),e._v(" "),n("v-text-field",{staticClass:"ma-2",attrs:{filled:"",counter:10,required:"",label:e.$t("label.heading.Repayment Schedule Name"),placeholder:"e.g Bank ABC "},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{staticStyle:{"text-transform":"capitalize"},attrs:{color:"green darken-1",outlined:"",small:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n                          "+e._s(e.$t("label.button.btnNo"))+"\n                          \n                          ")]),e._v(" "),n("v-btn",{staticClass:"warning darken-1 white--text",staticStyle:{"text-transform":"capitalize"},attrs:{small:"",outlined:"",rules:e.nameRules,disabled:!e.valid},on:{click:e.saveRepaymentSchedule}},[e._v("   "+e._s(e.$t("label.button.btnSave")))])],1)],1)],1)],1)],1):e._e(),e._v(" "),n("v-btn",{staticClass:"info lighten-1",attrs:{small:"",depressed:"",to:"/"}},[e._v(e._s(e.$t("label.button.btnhome")))])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"9d85d87e",null);t.default=component.exports;m()(component,{VApp:h.a,VBtn:f.a,VCard:_.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VCol:y.a,VContainer:w.a,VDialog:k.a,VFlex:O.a,VForm:$.a,VLayout:C.a,VRow:A.a,VSelect:j.a,VSpacer:I.a,VTextField:S.a})}}]);