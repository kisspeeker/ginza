(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{605:function(e,t,r){var content=r(803);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(113).default)("f06531ac",content,!0,{sourceMap:!1})},802:function(e,t,r){"use strict";var o=r(605);r.n(o).a},803:function(e,t,r){(t=r(112)(!1)).push([e.i,".services-head .services-slider[data-v-20871c49]{padding:0 4rem}.services-head .image[data-v-20871c49]{display:flex;width:100%;height:46rem;margin-top:6rem}@media (max-width:767px){.services-head .image[data-v-20871c49]{max-width:calc(100% + 4rem);width:calc(100% + 4rem);margin:4rem -2rem 0;height:36rem}}.services-head .image img[data-v-20871c49]{-o-object-fit:cover;object-fit:cover}.services-head .title[data-v-20871c49]{text-align:center}.services-head .tag[data-v-20871c49]{text-align:center;color:#696a68;letter-spacing:.1rem}.services-head .label[data-v-20871c49]{margin-top:.5rem;font-size:1rem;line-height:1.25;text-align:center;color:#696a68;letter-spacing:.2rem}.services-head .description[data-v-20871c49]{margin:6rem auto 0;max-width:46rem}@media (max-width:767px){.services-head .description[data-v-20871c49]{margin-top:4rem}}",""]),e.exports=t},851:function(e,t,r){"use strict";r.r(t);r(49),r(18),r(15),r(10),r(31);var o=r(16),n=r(462),c=r(637),l={components:{Section:n.a,SliderFeatures:c.default},props:{info:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{model:function(){return e=this.info,t=e.tag,r=void 0===t?"":t,o=e.label,label=void 0===o?"":o,n=e.title,title=void 0===n?"":n,c=e.description,l=void 0===c?"":c,d=e.image,image=void 0===d?"":d,m=e.values,{tag:r,label:label,title:title,description:l,image:image,values:void 0===m?[]:m};var e,t,r,o,label,n,title,c,l,d,image,m}},mounted:function(){},methods:{}},d=(r(802),r(35));function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"MiddlewareServicesHead",components:{ServicesHead:Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Section",{staticClass:"section--full services-head"},[r("Section",{staticClass:"section--min section--no-p"},[e.model.tag?r("h5",{staticClass:"tag text--12 ttu regular",domProps:{innerHTML:e._s(e.model.tag)}}):e._e(),e._v(" "),e.model.title?r("h2",{staticClass:"title title--h2",domProps:{innerHTML:e._s(e.model.title)}}):e._e(),e._v(" "),e.model.label?r("div",{staticClass:"label text--12 ttu regular",domProps:{innerHTML:e._s(e.model.label)}}):e._e()]),e._v(" "),e.model.image?r("Section",{staticClass:"section--min section--no-p"},[r("picture",{staticClass:"image"},[r("app-image",{attrs:{src:e.model.image,alt:""}})],1)]):e._e(),e._v(" "),e.model.values&&e.model.values.length?r("SliderFeatures",{attrs:{data:{modeSlider:"section--min",values:e.model.values}}}):e._e(),e._v(" "),r("Section",{staticClass:"section--min section--no-p"},[e.model.description?r("p",{staticClass:"description",domProps:{innerHTML:e._s(e.model.description)}}):e._e()])],1)}),[],!1,null,"20871c49",null).exports},props:{data:{type:Object,default:function(){}}},computed:{model:function(){return v(v({mode:"",anchor:!1},this.data),this.data.properties||{})}}},f=Object(d.a)(h,(function(){var e=this.$createElement;return(this._self._c||e)("ServicesHead",{class:this.model.mode,attrs:{info:this.model,"data-anchor":this.model.anchor}})}),[],!1,null,null,null);t.default=f.exports}}]);