(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25cea452"],{"0653":function(t,e,i){"use strict";i("68ef")},1146:function(t,e,i){},1325:function(t,e,i){"use strict";i.d(e,"b",function(){return s}),i.d(e,"a",function(){return l}),i.d(e,"d",function(){return o}),i.d(e,"c",function(){return c});var n=i("a142"),a=!1;if(!n["d"])try{var r={};Object.defineProperty(r,"passive",{get:function(){a=!0}}),window.addEventListener("test-passive",null,r)}catch(u){}function s(t,e,i,r){void 0===r&&(r=!1),n["d"]||t.addEventListener(e,i,!!a&&{capture:!1,passive:r})}function l(t,e,i){n["d"]||t.removeEventListener(e,i)}function o(t){t.stopPropagation()}function c(t,e){("boolean"!==typeof t.cancelable||t.cancelable)&&t.preventDefault(),e&&o(t)}},"34e9":function(t,e,i){"use strict";var n=i("2638"),a=i.n(n),r=i("a142"),s=i("ba31"),l=Object(r["g"])("cell-group"),o=l[0],c=l[1];function u(t,e,i,n){var r=t("div",a()([{class:[c(),{"van-hairline--top-bottom":e.border}]},Object(s["b"])(n,!0)]),[i["default"]&&i["default"]()]);return e.title?t("div",[t("div",{class:c("title")},[e.title]),r]):r}u.props={title:String,border:{type:Boolean,default:!0}},e["a"]=o(u)},5246:function(t,e,i){"use strict";i("68ef"),i("09fe"),i("8a0b")},"543e":function(t,e,i){"use strict";var n=i("2638"),a=i.n(n),r=i("a142"),s=i("6aa9"),l=i("ba31"),o=Object(r["g"])("loading"),c=o[0],u=o[1];function f(t,e){if("spinner"===e.type){for(var i=[],n=0;n<12;n++)i.push(t("i"));return i}return t("svg",{class:u("circular"),attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])}function d(t,e,i){if(i["default"]){var n=e.textSize&&{fontSize:Object(r["f"])(e.textSize)};return t("span",{class:u("text"),style:n},[i["default"]()])}}function h(t,e,i,n){var s=e.color,o=e.size,c=e.type,h={color:s};if(o){var p=Object(r["f"])(o);h.width=p,h.height=p}return t("div",a()([{class:u([c,{vertical:e.vertical}])},Object(l["b"])(n,!0)]),[t("span",{class:u("spinner",c),style:h},[f(t,e)]),d(t,e,i)])}h.props={size:[String,Number],textSize:[String,Number],vertical:Boolean,type:{type:String,default:"circular"},color:{type:String,default:s["b"]}},e["a"]=c(h)},"565f":function(t,e,i){"use strict";var n=i("2638"),a=i.n(n),r=i("c31d"),s=i("ad06"),l=i("7744"),o=i("dfaf"),c=i("1325"),u=i("a8c1"),f=i("a142");function d(){return!f["d"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var h=Object(f["g"])("field"),p=h[0],b=h[1];e["a"]=p({inheritAttrs:!1,props:Object(r["a"])({},o["a"],{error:Boolean,leftIcon:String,rightIcon:String,readonly:Boolean,clearable:Boolean,labelWidth:[String,Number],labelClass:null,labelAlign:String,inputAlign:String,autosize:[Boolean,Object],errorMessage:String,errorMessageAlign:String,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(f["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(r["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(f["f"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,n=this.$attrs.maxlength;return"number"===this.type&&Object(f["b"])(n)&&i.length>n&&(i=i.slice(0,n),t.value=i),i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),d()&&window.scrollTo(0,Object(u["b"])())},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(){this.$emit("click-left-icon")},onClickRightIcon:function(){this.$emit("click-right-icon")},onClear:function(t){Object(c["c"])(t),this.$emit("input",""),this.$emit("clear")},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf("."),n=e>=48&&e<=57||46===e&&i||45===e;n||Object(c["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(f["c"])(this.autosize)){var i=this.autosize,n=i.maxHeight,a=i.minHeight;n&&(e=Math.min(e,n)),a&&(e=Math.max(e,a))}e&&(t.style.height=e+"px")}},renderInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:b("control",this.inputAlign)},[e]);var i={ref:"input",class:b("control",this.inputAlign),domProps:{value:this.value},attrs:Object(r["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",a()([{},i])):t("input",a()([{attrs:{type:this.type}},i]))},renderLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:b("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(s["a"],{attrs:{name:this.leftIcon}})])},renderRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:b("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(s["a"],{attrs:{name:this.rightIcon}})])}},render:function(t){var e,i=this.slots,n=this.labelAlign,a={icon:this.renderLeftIcon};return i("label")&&(a.title=function(){return i("label")}),t(l["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[b("label",n),this.labelClass]},class:b((e={error:this.error,disabled:this.$attrs.disabled},e["label-"+n]=n,e["min-height"]="textarea"===this.type&&!this.autosize,e)),scopedSlots:a,on:{click:this.onClick}},[t("div",{class:b("body")},[this.renderInput(),this.showClear&&t(s["a"],{attrs:{name:"clear"},class:b("clear"),on:{touchstart:this.onClear}}),this.renderRightIcon(),i("button")&&t("div",{class:b("button")},[i("button")])]),this.errorMessage&&t("div",{class:b("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},"66b9":function(t,e,i){"use strict";i("68ef"),i("09fe")},"6aa9":function(t,e,i){"use strict";i.d(e,"e",function(){return n}),i.d(e,"a",function(){return a}),i.d(e,"d",function(){return r}),i.d(e,"b",function(){return s}),i.d(e,"c",function(){return l});var n="#f44",a="#1989fa",r="#07c160",s="#c9c9c9",l="#969799"},"6b41":function(t,e,i){"use strict";var n=i("2638"),a=i.n(n),r=i("a142"),s=i("ba31"),l=i("ad06"),o=Object(r["g"])("nav-bar"),c=o[0],u=o[1];function f(t,e,i,n){return t("div",a()([{class:[u({fixed:e.fixed}),{"van-hairline--bottom":e.border}],style:{zIndex:e.zIndex}},Object(s["b"])(n)]),[t("div",{class:u("left"),on:{click:n.listeners["click-left"]||r["e"]}},[i.left?i.left():[e.leftArrow&&t(l["a"],{class:u("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:u("text")},[e.leftText])]]),t("div",{class:[u("title"),"van-ellipsis"]},[i.title?i.title():e.title]),t("div",{class:u("right"),on:{click:n.listeners["click-right"]||r["e"]}},[i.right?i.right():e.rightText&&t("span",{class:u("text")},[e.rightText])])])}f.props={title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},e["a"]=c(f)},7379:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"idea"},[i("van-nav-bar",{attrs:{title:"意见反馈","left-text":"","left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft}}),i("van-cell-group",[i("van-field",{attrs:{clearable:"",label:"邮箱(选填)",placeholder:"请输入您的邮箱"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("van-field",{attrs:{clearable:"",label:"其他(选填)",placeholder:"其他联系方式（QQ或者手机）"},model:{value:t.other,callback:function(e){t.other=e},expression:"other"}}),i("van-field",{attrs:{label:"留言",type:"textarea",placeholder:"您的意见和反馈使我们前进的动力",rows:"1",autosize:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),i("div",{staticStyle:{height:"5vw"}}),i("van-uploader",{attrs:{multiple:""},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}}),i("p",[t._v("反馈截图")]),i("van-button",{staticStyle:{width:"80vw","margin-top":"3vw"},attrs:{type:"info"}},[t._v("提交")])],1)],1)},a=[],r=i("bd86"),s=(i("66b9"),i("b650")),l=(i("68ef"),i("09fe"),i("bcd3"),i("c31d")),o=i("a142");function c(t){return Array.isArray(t)?t:[t]}function u(t,e){return new Promise(function(i){var n=new FileReader;n.onload=function(t){i(t.target.result)},"dataUrl"===e?n.readAsDataURL(t):"text"===e&&n.readAsText(t)})}function f(t,e){return c(t).some(function(t){return t.size>e})}var d,h=i("ad06"),p=i("44bf"),b=Object(o["g"])("uploader"),v=b[0],g=b[1],m=v({inheritAttrs:!1,model:{prop:"fileList"},props:{fileList:Array,disabled:Boolean,uploadText:String,afterRead:Function,beforeRead:Function,previewSize:[Number,String],previewImage:{type:Boolean,default:!0},accept:{type:String,default:"image/*"},resultType:{type:String,default:"dataUrl"},maxSize:{type:Number,default:Number.MAX_VALUE},maxCount:{type:Number,default:Number.MAX_VALUE}},computed:{detail:function(){return{name:this.$attrs.name||""}}},methods:{onChange:function(t){var e=this,i=t.target.files;if(!this.disabled&&i.length)if(i=1===i.length?i[0]:[].slice.call(i),!this.beforeRead||this.beforeRead(i,this.detail)){var n=f(i,this.maxSize);if(Array.isArray(i)){var a=this.maxCount-this.fileList.length;i.length>a&&(i=i.slice(0,a)),Promise.all(i.map(function(t){return u(t,e.resultType)})).then(function(t){var a=i.map(function(e,i){return{file:e,content:t[i]}});e.onAfterRead(a,n)})}else u(i,this.resultType).then(function(t){e.onAfterRead({file:i,content:t},n)})}else this.resetInput()},onAfterRead:function(t,e){e?this.$emit("oversize",t,this.detail):(this.resetInput(),this.$emit("input",[].concat(this.fileList,c(t))),this.afterRead&&this.afterRead(t,this.detail))},onDelete:function(t,e){var i=this.fileList.slice(0);i.splice(e,1),this.$emit("input",i),this.$emit("delete",t)},resetInput:function(){this.$refs.input&&(this.$refs.input.value="")},renderPreview:function(){var t=this,e=this.$createElement;if(this.previewImage)return this.fileList.map(function(i,n){return e("div",{class:g("preview")},[e(p["a"],{attrs:{fit:"cover",src:i.content,width:t.previewSize,height:t.previewSize},class:g("preview-image")}),e(h["a"],{attrs:{name:"delete"},class:g("preview-delete"),on:{click:function(){t.onDelete(i,n)}}})])})},renderUpload:function(){var t=this.$createElement;if(!(this.fileList.length>=this.maxCount)){var e,i=this.slots(),n=t("input",{attrs:Object(l["a"])({},this.$attrs,{type:"file",accept:this.accept,disabled:this.disabled}),ref:"input",class:g("input"),on:{change:this.onChange}});if(i)return t("div",{class:g("input-wrapper")},[i,n]);if(this.previewSize){var a=Object(o["f"])(this.previewSize);e={width:a,height:a}}return t("div",{class:g("upload"),style:e},[t(h["a"],{attrs:{name:"plus"},class:g("upload-icon")}),this.uploadText&&t("span",{class:g("upload-text")},[this.uploadText]),n])}}},render:function(t){return t("div",{class:g()},[t("div",{class:g("wrapper")},[this.renderPreview(),this.renderUpload()])])}}),y=(i("0653"),i("34e9")),w=(i("be7f"),i("565f")),S=(i("7f7f"),i("5246"),i("6b41")),x={name:"idea",components:(d={},Object(r["a"])(d,S["a"].name,S["a"]),Object(r["a"])(d,w["a"].name,w["a"]),Object(r["a"])(d,y["a"].name,y["a"]),Object(r["a"])(d,m.name,m),Object(r["a"])(d,s["a"].name,s["a"]),d),data:function(){return{email:"",other:"",message:"",fileList:[]}},methods:{onClickLeft:function(){this.$router.go(-1)},afterRead:function(t){console.log(t)}}},k=x,O=(i("b0d5"),i("2877")),j=Object(O["a"])(k,n,a,!1,null,"60e0b975",null);e["default"]=j.exports},7744:function(t,e,i){"use strict";var n=i("c31d"),a=i("2638"),r=i.n(a),s=i("a142"),l=i("dfaf"),o=i("ba31"),c=i("48f4"),u=i("ad06"),f=Object(s["g"])("cell"),d=f[0],h=f[1];function p(t,e,i,n){var a=e.icon,l=e.size,f=e.title,d=e.label,p=e.value,b=e.isLink,v=e.arrowDirection,g=i.title||Object(s["b"])(f),m=i["default"]||Object(s["b"])(p),y=i.label||Object(s["b"])(d),w=y&&t("div",{class:[h("label"),e.labelClass]},[i.label?i.label():d]),S=g&&t("div",{class:[h("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[f]),w]),x=m&&t("div",{class:[h("value",{alone:!i.title&&!f}),e.valueClass]},[i["default"]?i["default"]():t("span",[p])]),k=i.icon?i.icon():a&&t(u["a"],{class:h("left-icon"),attrs:{name:a}}),O=i["right-icon"],j=O?O():b&&t(u["a"],{class:h("right-icon"),attrs:{name:v?"arrow-"+v:"arrow"}});function z(t){Object(o["a"])(n,"click",t),Object(c["a"])(n)}var $={center:e.center,required:e.required,borderless:!e.border,clickable:b||e.clickable};return l&&($[l]=l),t("div",r()([{class:h($),on:{click:z}},Object(o["b"])(n)]),[k,S,x,j,i.extra&&i.extra()])}p.props=Object(n["a"])({},l["a"],c["c"],{arrowDirection:String}),e["a"]=d(p)},"8a0b":function(t,e,i){},a8c1:function(t,e,i){"use strict";function n(t,e){void 0===e&&(e=window);var i=t;while(i&&"HTML"!==i.tagName&&"BODY"!==i.tagName&&1===i.nodeType&&i!==e){var n=window.getComputedStyle(i),a=n.overflowY;if("scroll"===a||"auto"===a)return i;i=i.parentNode}return e}function a(t){return"scrollTop"in t?t.scrollTop:t.pageYOffset}function r(t,e){"scrollTop"in t?t.scrollTop=e:t.scrollTo(t.scrollX,e)}function s(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function l(t){return(t===window?0:t.getBoundingClientRect().top)+a(window)}i.d(e,"c",function(){return n}),i.d(e,"d",function(){return a}),i.d(e,"e",function(){return r}),i.d(e,"b",function(){return s}),i.d(e,"a",function(){return l})},b0d5:function(t,e,i){"use strict";var n=i("c11a"),a=i.n(n);a.a},b650:function(t,e,i){"use strict";var n=i("c31d"),a=i("2638"),r=i.n(a),s=i("a142"),l=i("ba31"),o=i("48f4"),c=i("ad06"),u=i("543e"),f=Object(s["g"])("button"),d=f[0],h=f[1];function p(t,e,i,n){var a=e.tag,s=e.icon,f=e.type,d=e.disabled,p=e.loading,b=e.hairline,v=e.loadingText;function g(t){p||d||(Object(l["a"])(n,"click",t),Object(o["a"])(n))}function m(t){Object(l["a"])(n,"touchstart",t)}var y=[h([f,e.size,{disabled:d,hairline:b,block:e.block,plain:e.plain,round:e.round,square:e.square}]),{"van-hairline--surround":b}];function w(){var n,a=[];return p?a.push(t(u["a"],{class:h("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"default"===f?void 0:""}})):s&&a.push(t(c["a"],{attrs:{name:s},class:h("icon")})),n=p?v:i["default"]?i["default"]():e.text,n&&a.push(t("span",{class:h("text")},[n])),a}return t(a,r()([{class:y,attrs:{type:e.nativeType,disabled:d},on:{click:g,touchstart:m}},Object(l["b"])(n)]),[w()])}p.props=Object(n["a"])({},o["c"],{text:String,icon:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e["a"]=d(p)},bcd3:function(t,e,i){},be7f:function(t,e,i){"use strict";i("68ef"),i("09fe"),i("1146")},c11a:function(t,e,i){},dfaf:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[String,Number],value:[String,Number],label:[String,Number],border:{type:Boolean,default:!0}}}}]);
//# sourceMappingURL=chunk-25cea452.e7ddb310.js.map