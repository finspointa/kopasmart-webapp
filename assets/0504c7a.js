(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{579:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return h}));var r=n(580),o=n(0),l=Object(o.i)("v-card__actions"),c=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),h=Object(o.i)("v-card__title");r.a},580:function(e,t,n){"use strict";n(10),n(8),n(9),n(13),n(14);var r=n(1),o=(n(18),n(581),n(189)),l=n(188),c=n(52),d=n(6);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=l.a.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),n=t.tag,data=t.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},581:function(e,t,n){var content=n(582);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("e23b7040",content,!0,{sourceMap:!1})},582:function(e,t,n){var r=n(15)(!1);r.push([e.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),e.exports=r},630:function(e,t,n){var content=n(631);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("50788f08",content,!0,{sourceMap:!1})},631:function(e,t,n){var r=n(15)(!1);r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),e.exports=r},675:function(e,t,n){"use strict";n.r(t);n(23);var r={data:function(){return{valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],messageRules:[function(e){return!!e||"Message is required"},function(e){return e&&e.length<30||"Message must be greater than 30 texts to be valid"}],addressCheck:[],select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1,lazy:!1,countries:["Tanzania","Kenya","Uganda","Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],errorMessages:"",address:null,city:null,state:null,zip:null,country:null,message:null,formHasErrors:!1}},head:function(){return{title:"Contact Us"}},methods:{validate:function(){this.$refs.form.validate()&&(this.snackbar=!0)},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},submit:function(){}},computed:{form:function(){return{name:this.name,address:this.address,city:this.city,state:this.state,zip:this.zip,country:this.country}}}},o=n(58),l=n(67),c=n.n(l),d=n(567),h=(n(10),n(8),n(13),n(14),n(1)),v=(n(44),n(9),n(68),n(51),n(32),n(630),n(555)),m=n(88),f=n(39),x=n(0);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(h.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var I=_(_({},v.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),S=v.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:v.a.options.props.menuProps.type,default:function(){return I}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return _(_({},v.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(x.r)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch=e,this.$emit("update:search-input",e)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=v.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),_(_({},I),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=v.a.options.computed.listData.call(this);return data.props=_(_({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;e!==t&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===x.x.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===x.x.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==x.x.backspace&&e!==x.x.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,v.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=m.a.options.methods.genInput.call(this);return input.data=Object(f.a)(input.data,{attrs:{"aria-activedescendant":Object(x.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(x.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=v.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?v.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[x.x.home,x.x.end].includes(t)||v.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){v.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){v.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){v.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null==(t=e.clipboardData)||t.setData("text/plain",o),null==(n=e.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}}),w=n(192),k=n(580),C=n(579),O=n(568),D=n(171),M=n(143),P=n(87),j=n(577),T=n(572),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"app"},[n("v-container",{attrs:{fluid:""}},[n("v-card",{ref:"form",attrs:{flat:"",outlined:""}},[n("v-card-text",[n("v-text-field",{ref:"name",attrs:{rules:[function(){return!!e.name||"This field is required"}],"error-messages":e.errorMessages,label:"Full Name",placeholder:"John Doe",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("v-text-field",{ref:"email",attrs:{rules:e.emailRules,label:"E-mail",placeholder:"youremaill@example.com",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.emailRules,label:"Message",placeholder:" Lorem ipsum dolor sit de amet ... ",required:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),n("v-text-field",{ref:"address",attrs:{rules:[function(){return!!e.address||"This field is required"},function(){return!!e.address&&e.address.length<=25||"Address must be less than 25 characters"},e.addressCheck],label:"Address Line",placeholder:"Snowy Rock Pl",counter:"25",required:""},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),e._v(" "),n("v-text-field",{ref:"city",attrs:{rules:[function(){return!!e.city||"This field is required"},e.addressCheck],label:"City",placeholder:"El Paso",required:""},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}),e._v(" "),n("v-text-field",{ref:"state",attrs:{rules:[function(){return!!e.state||"This field is required"}],label:"State/Province/Region",required:"",placeholder:"TX"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}),e._v(" "),n("v-text-field",{ref:"zip",attrs:{rules:[function(){return!!e.zip||"This field is required"}],label:"ZIP / Postal Code",required:"",placeholder:"79938"},model:{value:e.zip,callback:function(t){e.zip=t},expression:"zip"}}),e._v(" "),n("v-autocomplete",{ref:"country",attrs:{rules:[function(){return!!e.country||"This field is required"}],items:e.countries,label:"Country",placeholder:"Select...",required:""},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}})],1),e._v(" "),n("v-divider",{staticClass:"mt-12"}),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:""}},[e._v("Cancel")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-slide-x-reverse-transition",[e.formHasErrors?n("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({staticClass:"my-0",attrs:{icon:""},on:{click:e.resetForm}},r),[n("v-icon",[e._v("mdi-refresh")])],1)]}}],null,!1,2723666325)},[e._v(" "),n("span",[e._v("Refresh form")])]):e._e()],1),e._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VApp:d.a,VAutocomplete:S,VBtn:w.a,VCard:k.a,VCardActions:C.a,VCardText:C.c,VContainer:O.a,VDivider:D.a,VIcon:M.a,VSlideXReverseTransition:P.e,VSpacer:j.a,VTextField:m.a,VTooltip:T.a})}}]);