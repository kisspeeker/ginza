(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{488:function(t,e,r){var content=r(570);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(113).default)("33a15043",content,!0,{sourceMap:!1})},568:function(t,e,r){t.exports=r.p+"img/investors.5f9303c.jpg"},569:function(t,e,r){"use strict";var o=r(488);r.n(o).a},570:function(t,e,r){(e=r(112)(!1)).push([t.i,".investors-form[data-v-786ac5f6]{position:relative;flex:1;display:flex;justify-content:flex-end}.investors-form[data-v-786ac5f6] .form .input{border-color:#171717}.investors-form[data-v-786ac5f6] .form .input-placeholder{font-weight:300;letter-spacing:.025rem}.investors-form[data-v-786ac5f6] .form .submit-btn{width:auto;height:auto;text-transform:none}.form-container[data-v-786ac5f6]{position:relative;flex:0 1 auto;display:flex;flex-flow:column nowrap;margin-left:auto;min-width:63rem;padding:3rem calc((100vw - 100rem)/2) 3rem 8rem;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);background-color:hsla(0,0%,100%,.72);transition:background-color .3s ease}.isOpen .form-container[data-v-786ac5f6]{background-color:#fff}@media (min-width:1025px){.form-container[data-v-786ac5f6]{background-color:hsla(0,0%,100%,.35)}}@media (max-width:767px){.form-container[data-v-786ac5f6]{min-width:auto;padding:4rem 2rem}}.title-block[data-v-786ac5f6]{width:38rem;margin-top:10rem;margin-bottom:8rem}@media (max-width:767px){.title-block[data-v-786ac5f6]{margin-top:0;width:auto}}.title-block .description[data-v-786ac5f6]{margin-bottom:2rem;line-height:1.5}.form-content[data-v-786ac5f6]{width:32rem;flex:1;display:flex;flex-flow:column nowrap}@media (max-width:767px){.form-content[data-v-786ac5f6]{width:auto}}.image[data-v-786ac5f6]{position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}.result[data-v-786ac5f6]{display:flex;flex-flow:column nowrap;align-items:center;flex:1;text-align:center}@media (min-width:768px){.result[data-v-786ac5f6]{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;justify-content:center;max-width:32rem}}.result .result-title[data-v-786ac5f6]{margin-bottom:1.5rem}.result .result-link[data-v-786ac5f6]{padding-top:4rem;padding-bottom:4rem;margin-top:auto;transition:color .2s ease}.result .result-link[data-v-786ac5f6]:active{color:#b27a78}@media (min-width:1025px){.result .result-link[data-v-786ac5f6]:hover{color:#b27a78}}.result .result-description[data-v-786ac5f6]{margin-top:auto;margin-bottom:1.5rem}.result .result-icon[data-v-786ac5f6]{display:flex;justify-content:center;align-items:center;flex:0 0 auto;width:11rem;height:11rem;margin-top:auto;margin-bottom:4.5rem;padding:4rem;border-radius:50%;background:#b27a78;color:#fff}.result .icon[data-v-786ac5f6]{display:flex}.disclaimer[data-v-786ac5f6]{color:#696a68;letter-spacing:.02rem;margin-top:auto;line-height:1.5;padding-top:3rem}.disclaimer[data-v-786ac5f6] a{color:#b27a78;transition:color .2s ease}.disclaimer[data-v-786ac5f6] a:active{color:#a56461}@media (min-width:1025px){.disclaimer[data-v-786ac5f6] a:hover{color:#a56461}}",""]),t.exports=e},623:function(t,e,r){"use strict";var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("picture",{staticClass:"image"},[e("img",{attrs:{src:r(568),alt:""}})])}],n=(r(49),r(18),r(15),r(10),r(31),r(16)),c=r(73),l=r(62),d=r(36),m=r(465),f=r(493),v=r(484),h=r.n(v);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={name:"InvestorsForm",components:{ExternalLink:m.a,FormGenerator:f.a,iconCheck:h.a},props:{info:{type:Object,default:function(){return{}}}},data:function(){return{isLoading:!1,isShowResult:!1}},computed:O(O({},Object(c.c)({GET_SOCIAL:"GET_SOCIAL",GET_CURRENT_CITY:"localStorage/GET_CURRENT_CITY"})),{},{model:function(){return t=this.info,r=(e=t||{}).description,o=void 0===r?"":r,n=e.image,{description:o,image:void 0===n?"":n};var t,e,r,o,n}}),methods:{formSubmit:function(data){var t=this;if(!this.isLoading){this.isLoading=!0;var e={};for(var r in data)r&&(e[r]=data[r]);e.city=this.GET_CURRENT_CITY,l.a.post(d.l,e).then((function(e){var r=e.status;200!==r&&201!==r||(t.isShowResult=!0)})).catch((function(t){var e=(t||{}).response,r=void 0===e?{}:e;console.error(r,d.l)})).then((function(){t.isLoading=!1}))}}}},y=(r(569),r(35)),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"investors-form"},[t._m(0),t._v(" "),r("div",{staticClass:"form-container",class:{isShowResult:t.isShowResult,isLoading:t.isLoading}},[r("transition",{attrs:{mode:"out-in",name:"list-fade"}},[t.isShowResult?r("div",{key:"result",staticClass:"result"},[r("div",{staticClass:"result-icon"},[r("div",{staticClass:"icon"},[r("iconCheck")],1)]),t._v(" "),t.$t("investors.resultTitle")?r("h5",{staticClass:"result-title",domProps:{innerHTML:t._s(t.$t("investors.resultTitle"))}}):t._e(),t._v(" "),t.$t("investors.resultDescription")?r("p",{staticClass:"result-desc",domProps:{innerHTML:t._s(t.$t("investors.resultDescription"))}}):t._e(),t._v(" "),t.GET_SOCIAL.phone?r("a",{staticClass:"result-link",attrs:{href:"tel:"+t.GET_SOCIAL.phone},domProps:{innerHTML:t._s(t.GET_SOCIAL.phone)}}):t._e()]):r("div",{key:"form",staticClass:"form-content"},[r("div",{staticClass:"title-block"},[r("p",{staticClass:"description text--18",domProps:{innerHTML:t._s(t.$t("investors.description"))}}),t._v(" "),t.$t("investors.url")?r("ExternalLink",{staticClass:"link link--brown link--tdu",attrs:{to:t.$t("investors.url")},domProps:{innerHTML:t._s(t.$t("investors.linkLabel"))}}):t._e()],1),t._v(" "),r("FormGenerator",{attrs:{"btn-label":t.$t("investors.submit"),"btn-submit-class":"link link--brown link--tdu","is-loading":t.isLoading,info:t.$t("investors.fields")},on:{formSubmit:t.formSubmit}}),t._v(" "),t.$t("investors.disclaimer")?r("p",{staticClass:"disclaimer text--12",domProps:{innerHTML:t._s(t.$t("investors.disclaimer"))}}):t._e()],1)])],1)])}),o,!1,null,"786ac5f6",null);e.a=component.exports},868:function(t,e,r){"use strict";r.r(e);r(49),r(18),r(15),r(10),r(31);var o=r(16);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"MiddlewareInvestorsForm",components:{InvestorsForm:r(623).a},props:{data:{type:Object,default:function(){}}},computed:{model:function(){return c(c({mode:"",anchor:!1},this.data),this.data.properties||{})}}},d=r(35),component=Object(d.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("InvestorsForm",{class:this.model.mode,attrs:{info:this.model,"data-anchor":this.model.anchor}})}),[],!1,null,null,null);e.default=component.exports}}]);