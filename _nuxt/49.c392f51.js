(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{475:function(e,t,r){"use strict";r(49),r(18),r(15),r(10),r(31);var n=r(16),o=r(73);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={methods:d(d({},Object(o.d)({SET_POPUP_CONTENT:"popup/SET_POPUP_CONTENT",SET_POPUP_TYPE:"popup/SET_POPUP_TYPE",OPEN_POPUP:"popup/OPEN_POPUP"})),{},{openPopup:function(e){var content=e.content,t=e.type;this.SET_POPUP_TYPE(t),this.SET_POPUP_CONTENT(content),this.OPEN_POPUP()}})}},495:function(e,t,r){"use strict";r(49),r(18),r(15),r(10),r(31),r(114);var n=r(29),o=r(16),c=r(157),d=r(73);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={data:function(){return{oldScroll:0,activeLink:1,sections:[]}},computed:f(f({},Object(d.c)({GET_MQ:"mediaQuery/GET_MQ"})),{},{stickyAnchors:function(){return[]}}),created:function(){var e=this;this.$nextTick((function(){e.init(),e.initEvents()}))},destroyed:function(){this.destroy()},methods:{scrollSpy:function(){var e=this;this.sections.forEach((function(t){Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)>=t.position&&e.setActiveLink(t.id)}))},scrollToSection:function(e){var t=this;this.setSizes();var r="object"===Object(n.a)(e)?e.id:e;this.$nextTick((function(){var e=t.sections.find((function(section){return section.id===r}));e&&e.element.scrollIntoView({block:"start",behavior:"smooth"})}))},scrollToActiveLink:function(){if(Array.isArray(this.$refs.stickyMenuItems)&&this.$refs.stickyMenuWrapper){var e=this.$refs.stickyMenuItems.find((function(e){return e.classList.contains("isActive")}));e&&this.$refs.stickyMenuWrapper.scrollTo({left:e.offsetLeft-75,behavior:"smooth"})}},setActiveLink:function(e){this.activeLink=e,this.activeType=e},setSizes:function(){var e=this;this.sections=[],this.stickyAnchors.forEach((function(t){var section=document.querySelector('[data-anchor="'.concat(t.href,'"]'));if(section){var r=section.getBoundingClientRect().top+window.scrollY,n="desktop"===e.GET_MQ?0:-80;e.sections.push({id:t.id,position:r+n,name:t.href,element:section})}}))},initEvents:function(){var e=this;this.scrollEvent=Object(c.b)(50,(function(){return e.scrollSpy()})),window.addEventListener("scroll",this.scrollEvent,!0)},init:function(){this.setSizes(),this.scrollSpy()},removeEvents:function(){window.removeEventListener("scroll",this.scrollEvent,!1),window.removeEventListener("resize",this.resizeEvent,!1)},destroy:function(){this.removeEvents()}}}},615:function(e,t,r){var content=r(824);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(113).default)("041e2379",content,!0,{sourceMap:!1})},823:function(e,t,r){"use strict";var n=r(615);r.n(n).a},824:function(e,t,r){(t=r(112)(!1)).push([e.i,".subheader[data-v-16c9547d]{position:sticky;position:-webkit-sticky;top:8.1rem;z-index:9;overflow:hidden}@media (min-width:768px) and (max-width:1024px){.subheader[data-v-16c9547d]{top:8.1rem;height:4.6rem;left:0;right:0;border-bottom:1px solid #d9d9d6}}@media (max-width:767px){.subheader[data-v-16c9547d]{top:6.2rem;left:0;right:0;height:4rem;border-bottom:1px solid #d9d9d6}}.subheader.isScrolled .subheader-link[data-v-16c9547d]{color:#5f6368}.subheader .subheader-top[data-v-16c9547d]{position:relative;display:flex;padding:1rem 0;border-bottom:1px solid #d9d9d6;width:100%;overflow-x:auto;justify-content:center;-webkit-overflow-scrolling:touch;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);background-color:hsla(0,0%,100%,.72);transition:background-color .3s ease}.isOpen .subheader .subheader-top[data-v-16c9547d]{background-color:#fff}@media (max-width:767px){.subheader .subheader-top[data-v-16c9547d]{padding-bottom:2rem}}.subheader .subheader-link[data-v-16c9547d]{color:#d9d9d6;line-height:1.4;margin:0 1.5rem;white-space:nowrap;transition:color .2s ease}@media (min-width:1025px){.subheader .subheader-link[data-v-16c9547d]{margin:0 3rem}}.subheader .subheader-link.isActive[data-v-16c9547d],.subheader .subheader-link[data-v-16c9547d]:active{color:#171717}@media (min-width:1025px){.subheader .subheader-link[data-v-16c9547d]:hover{color:#171717}}",""]),e.exports=t},859:function(e,t,r){"use strict";r.r(t);r(49),r(18),r(15),r(10),r(31);var n=r(16),o=r(73),c=r(495),d=r(475);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={components:{},mixins:[c.a,d.a],props:{info:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:f(f({},Object(o.c)({GET_HEADER_STATUS:"header/GET_HEADER_STATUS"})),{},{model:function(){return e=this.info,t=e.type,r=void 0===t?"":t,n=e.values,o=void 0===n?[]:n,c=e.popup,d=void 0===c?{}:c,{type:r,values:(o||[]).map((function(e){var t=e.url,r=void 0===t?"":t,n=e.linkLabel,o=void 0===n?"":n,c=e.isPopupLink;return{url:r,linkLabel:o,isPopupLink:void 0!==c&&c}})),popup:d};var e,t,r,n,o,c,d},stickyAnchors:function(){return this.model.values.map((function(e){return{href:e.url,id:e.url}}))}}),mounted:function(){this.activeLink=(this.model.values[0]||{}).url},methods:{toAnchor:function(e){this.activeLink=e,this.scrollToSection(e)}}},v=(r(823),r(35));function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={name:"MiddlewareSubheader",components:{Subheader:Object(v.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"subheader",class:{isScrolled:e.GET_HEADER_STATUS}},[r("div",{ref:"stickyMenuWrapper",staticClass:"subheader-top"},e._l(e.model.values,(function(link){return r("button",{key:link.url,ref:"stickyMenuItems",refInFor:!0,staticClass:"subheader-link text--18",class:{isActive:!link.isPopupLink&&e.activeLink===link.url},attrs:{type:"button"},domProps:{innerHTML:e._s(link.linkLabel)},on:{click:function(t){link.isPopupLink?e.openPopup(e.model.popup):e.toAnchor(link.url)}}})})),0)])}),[],!1,null,"16c9547d",null).exports},props:{data:{type:Object,default:function(){}}},computed:{model:function(){return m(m(m({mode:"",anchor:!1},this.data),this.data.properties||{}),this.$t("subheader.services"))}}},P=Object(v.a)(y,(function(){var e=this.$createElement;return(this._self._c||e)("Subheader",{class:this.model.mode,attrs:{info:this.model,"data-anchor":this.model.anchor}})}),[],!1,null,null,null);t.default=P.exports}}]);