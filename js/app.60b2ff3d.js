(function(e){function t(t){for(var r,s,u=t[0],c=t[1],o=t[2],d=0,p=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/test-blackwall/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";n("85ec")},"0ca5":function(e,t,n){"use strict";n("cd46")},"24b9":function(e,t,n){},6991:function(e,t,n){"use strict";n("24b9")},"74ce":function(e,t,n){"use strict";n("c980")},"76ff":function(e,t,n){e.exports=n.p+"img/words.354886b8.png"},"85ec":function(e,t,n){},a767:function(e,t,n){e.exports=n.p+"img/words-ru.a2eebe0b.png"},c2fb:function(e,t,n){},c980:function(e,t,n){},ca1f:function(e,t,n){"use strict";n("c2fb")},cd46:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r,i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.screen===e.Screens.Hello?n("HelloWindow",{on:{start:e.onStart}}):e.screen===e.Screens.Win?n("WinWindow",{attrs:{prevSteps:e.prevSteps,steps:e.steps},on:{reset:e.onReset}}):e.screen===e.Screens.Game?[n("div",{staticClass:"tip-area"},[n("strong",[e._v("Цель")]),n("img",{attrs:{src:e.targetImg,width:"100%",height:"200px",alt:""}})]),n("button",{on:{click:e.onReset}},[e._v("Заново")]),n("div",{staticClass:"steps-display"},[e._v(" Время: "+e._s(e.animatedNumber)+" "+e._s(e.pluSecondsWord)+" ")]),n("div",{staticClass:"steps-display"},[e._v(" Шаги: "+e._s(e.steps)+" ")]),e.isGameReadyToShow?n("GridComponent",{ref:"grid",attrs:{gridType:e.currentGridType},on:{incrementSteps:e.onIncrementSteps,win:e.onWin}}):e._e()]:e.screen===e.Screens.Lose?n("div",[n("div",[e._v(" К сожалению время закончилось! :( ")]),n("button",{on:{click:e.onReset}},[e._v("Заново")])]):e._e()],2)},s=[],u=(n("b680"),n("d3b7"),n("25f0"),n("d4ec")),c=n("bee2"),o=n("262e"),l=n("2caf"),d=n("9ab4"),p=n("60a3"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition-group",{staticClass:"grid",attrs:{name:"grid-animation",tag:"div"}},e._l(e.grid.tags,(function(t,r){return n("TagButton",{key:t.id,staticClass:"grid__tag-button",attrs:{type:t.type},on:{click:function(t){return e.tryMoveTagByKey(r)}}},[e._v(" "+e._s(t.label)+" ")])})),1)},v=[],b=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:["tag-button",{"tag-button_empty":e.type===e.EmptyType}],attrs:{disabled:e.type===e.EmptyType},on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)}),g=[],h=n("e1bd");(function(e){e[e["Filled"]=0]="Filled",e[e["Empty"]=1]="Empty"})(r||(r={}));var m=function e(t){var n=t.label,i=t.type,a=t.value;Object(u["a"])(this,e),this.label=n||"",this.value=a,this.type=i||r.Filled,this.id=Object(h["a"])(3)},y=function(e){Object(o["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(u["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n,[{key:"EmptyType",get:function(){return r.Empty}}]),n}(p["e"]);Object(d["a"])([Object(p["c"])({type:[String,Number],required:!0})],y.prototype,"type",void 0),y=Object(d["a"])([Object(p["a"])({})],y);var O,j=y,T=j,_=(n("74ce"),n("2877")),w=Object(_["a"])(T,b,g,!1,null,"27035bd0",null),k=w.exports,G=(n("99af"),n("c740"),n("d81d"),n("a434"),n("ac1f"),n("1276"),n("2909")),S=n("71d3"),W=n("32e8"),x=function(){function e(t){Object(u["a"])(this,e),this._tags=[],this.gridSize=t||4}return Object(c["a"])(e,[{key:"getEmptyTagIndex",value:function(){return this._tags.findIndex((function(e){return e.type===r.Empty}))}},{key:"isTagsNear",value:function(e,t,n){return e+1===t||e-1===t||e+n===t||e-n===t}},{key:"tryMoveTagByTagIndex",value:function(e){var t=this.getEmptyTagIndex(),n=this.isTagsNear(e,t,this.gridSize);if(n){var r=this._tags[e],i=this._tags[t],a=Object(G["a"])(this._tags);a.splice(e,1,i),a.splice(t,1,r),this._tags=a}return n}},{key:"tags",get:function(){return this._tags}},{key:"tagValues",get:function(){return this._tags.map((function(e){return e.value}))}}]),e}(),N=function(e){Object(o["a"])(n,e);var t=Object(l["a"])(n);function n(e){var r;return Object(u["a"])(this,n),r=t.call(this,e),r.winTagValues=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0],r._tags=r.getGridTags(),r}return Object(c["a"])(n,[{key:"getGridTags",value:function(){for(var e=[],t=1;t<=15;t++)e.push(new m({label:t.toString(),value:t}));return e.push(new m({type:r.Empty,value:0})),Object(S["a"])(e)}},{key:"checkWin",value:function(){return Object(W["a"])(this.tagValues,this.winTagValues)}}]),n}(x),C=function(e){Object(o["a"])(n,e);var t=Object(l["a"])(n);function n(e){var r;return Object(u["a"])(this,n),r=t.call(this,e),r.defaultTagLabels="RATEYOURMINDPAL",r.winTagValues=[].concat(Object(G["a"])(r.defaultTagLabels.split("")),[0]),r._tags=r.getGridTags(),r}return Object(c["a"])(n,[{key:"getGridTags",value:function(){for(var e=[],t=0;t<15;t++){var n,i,a,s;e.push(new m({label:null!==(n=null===(i=this.defaultTagLabels)||void 0===i?void 0:i[t])&&void 0!==n?n:"",value:null!==(a=null===(s=this.defaultTagLabels)||void 0===s?void 0:s[t])&&void 0!==a?a:""}))}return e.push(new m({type:r.Empty,value:0})),Object(S["a"])(e)}},{key:"checkWin",value:function(){return Object(W["a"])(this.tagValues,this.winTagValues)}}]),n}(x),E=function(e){Object(o["a"])(n,e);var t=Object(l["a"])(n);function n(e){var r;return Object(u["a"])(this,n),r=t.call(this,e),r.defaultTagLabels="СЛОНСПИТСТОЯАВЫ",r.winTagValues=[].concat(Object(G["a"])(r.defaultTagLabels.split("")),[0]),r._tags=r.getGridTags(),r}return Object(c["a"])(n,[{key:"getGridTags",value:function(){for(var e=[],t=0;t<15;t++){var n,i,a,s;e.push(new m({label:null!==(n=null===(i=this.defaultTagLabels)||void 0===i?void 0:i[t])&&void 0!==n?n:"",value:null!==(a=null===(s=this.defaultTagLabels)||void 0===s?void 0:s[t])&&void 0!==a?a:""}))}return e.push(new m({type:r.Empty,value:0})),Object(S["a"])(e)}},{key:"checkWin",value:function(){return Object(W["a"])(this.tagValues,this.winTagValues)}}]),n}(x);(function(e){e[e["NumberGrid"]=0]="NumberGrid",e[e["WordGrid"]=1]="WordGrid",e[e["WordRuGrid"]=2]="WordRuGrid"})(O||(O={}));var M=function(e){Object(o["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(u["a"])(this,n),e=t.apply(this,arguments),e.grid=e.createGrid(),e}return Object(c["a"])(n,[{key:"createGrid",value:function(){switch(this.gridType){case O.NumberGrid:return new N;case O.WordGrid:return new C;case O.WordRuGrid:return new E;default:return new N}}},{key:"tryMoveTagByKey",value:function(e){var t=this.grid.tryMoveTagByTagIndex(e);if(t){var n=this.grid.checkWin();this.$emit("incrementSteps"),n&&this.$emit("win")}}}]),n}(p["e"]);Object(d["a"])([Object(p["c"])({type:[String,Number],required:!0})],M.prototype,"gridType",void 0),M=Object(d["a"])([Object(p["a"])({components:{TagButton:k}})],M);var I=M,L=I,R=(n("0ca5"),Object(_["a"])(L,f,v,!1,null,"19cf3023",null)),$=R.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"win-window"},[e._v(" Победа, было сделано "+e._s(e.steps)+" "+e._s(e.pluClicksWord)+"! "),e.prevSteps?[e._v(e._s(e.compareText))]:e._e(),n("button",{staticClass:"win-window__button",on:{click:function(t){return e.$emit("reset")}}},[e._v(" Заново ")])],2)},V=[],H=n("9610"),B=n.n(H),F=function(e){Object(o["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(u["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n,[{key:"pluClicksWord",get:function(){return B()(this.steps,"клик","клика","кликов")}},{key:"compareText",get:function(){var e=this.steps-this.prevSteps;if(0===e)return"Как и в прошлый раз!";var t=e>0?"больше":"меньше";return"Это на ".concat(Math.abs(e)," ").concat(t," чем в прошлый раз.")}}]),n}(p["e"]);Object(d["a"])([Object(p["c"])({type:Number,default:0})],F.prototype,"steps",void 0),Object(d["a"])([Object(p["c"])({type:Number,default:0})],F.prototype,"prevSteps",void 0),F=Object(d["a"])([Object(p["a"])({})],F);var q=F,z=q,A=(n("ca1f"),Object(_["a"])(z,P,V,!1,null,"1d951f34",null)),D=A.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"win-window"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("p",{staticClass:"win-window__text"},[e._v("Привет! Выбери режим игры:")]),n("div",{staticClass:"win-window__radio-area"},e._l(e.gameModes,(function(t){return n("label",{key:t.value},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.pickedGameMode,expression:"pickedGameMode"}],attrs:{type:"radio",name:"gameMode"},domProps:{value:t.value,checked:e._q(e.pickedGameMode,t.value)},on:{change:function(n){e.pickedGameMode=t.value}}}),e._v(" "+e._s(t.title)+" ")])})),0),e._m(0)])])},K=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"win-window__button",attrs:{type:"submit"}},[e._v("Начать")])])}],U=function(e){Object(o["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(u["a"])(this,n),e=t.apply(this,arguments),e.pickedGameMode=O.NumberGrid,e}return Object(c["a"])(n,[{key:"onSubmit",value:function(){return{gridType:this.pickedGameMode}}},{key:"gameModes",get:function(){return[{title:"Цифры",value:O.NumberGrid},{title:"Русские слова",value:O.WordRuGrid},{title:"Английские слова",value:O.WordGrid}]}}]),n}(p["e"]);Object(d["a"])([Object(p["b"])("start")],U.prototype,"onSubmit",null),U=Object(d["a"])([Object(p["a"])({})],U);var Y,Q=U,X=Q,Z=(n("6991"),Object(_["a"])(X,J,K,!1,null,"2eecf216",null)),ee=Z.exports,te=n("2eb5"),ne=n("cffa");(function(e){e[e["Win"]=0]="Win",e[e["Hello"]=1]="Hello",e[e["Game"]=2]="Game",e[e["Lose"]=3]="Lose"})(Y||(Y={}));var re=200,ie=function(e){Object(o["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;return Object(u["a"])(this,r),e=t.apply(this,arguments),e.steps=0,e.screen=Y.Hello,e.prevSteps=0,e.currentGridType=O.NumberGrid,e.timer=e.startTimer(),e.currentTime=re,e.tweenedNumber=e.currentTime,e}return Object(c["a"])(r,[{key:"startTimer",value:function(){var e=this;return setInterval((function(){e.currentTime--}),1e3)}},{key:"resetTimer",value:function(){this.timer=this.startTimer(),this.currentTime=re,this.tweenedNumber=this.currentTime}},{key:"stopTimer",value:function(){clearTimeout(this.timer)}},{key:"mounted",value:function(){this.stopTimer(),this.loadSettings()}},{key:"onCurrentTimeChanged",value:function(e){0===e?(this.stopTimer(),this.screen=Y.Lose):ne["a"].to(this.$data,{duration:.5,tweenedNumber:e})}},{key:"loadSettings",value:function(){var e=localStorage.getItem("prevSteps");e&&(this.prevSteps=parseInt(e,10))}},{key:"onIncrementSteps",value:function(){this.steps+=1}},{key:"onWin",value:function(){this.stopTimer(),this.screen=Y.Win,this.setPrevSteps(this.steps)}},{key:"onStart",value:function(e){this.currentGridType=(null===e||void 0===e?void 0:e.gridType)||O.NumberGrid,this.screen=Y.Game,this.resetTimer()}},{key:"setPrevSteps",value:function(e){this.prevSteps=e,localStorage.setItem("prevSteps",e.toString())}},{key:"onReset",value:function(){var e=this;this.stopTimer(),this.steps=0,this.$nextTick((function(){e.screen=Y.Hello}))}},{key:"animatedNumber",get:function(){return this.tweenedNumber.toFixed(0)}},{key:"pluSecondsWord",get:function(){return B()(this.currentTime,"секунда","секунды","секунд")}},{key:"isGameReadyToShow",get:function(){return!Object(te["a"])(this.currentGridType)}},{key:"Screens",get:function(){return Y}},{key:"targetImg",get:function(){switch(this.currentGridType){case O.NumberGrid:return n("df0f");case O.WordGrid:return n("76ff");case O.WordRuGrid:return n("a767")}}}]),r}(p["e"]);Object(d["a"])([Object(p["d"])()],ie.prototype,"grid",void 0),Object(d["a"])([Object(p["f"])("currentTime")],ie.prototype,"onCurrentTimeChanged",null),ie=Object(d["a"])([Object(p["a"])({components:{GridComponent:$,WinWindow:D,HelloWindow:ee}})],ie);var ae=ie,se=ae,ue=(n("034f"),Object(_["a"])(se,a,s,!1,null,null,null)),ce=ue.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(ce)}}).$mount("#app")},df0f:function(e,t,n){e.exports=n.p+"img/numbers.37aee17a.png"}});
//# sourceMappingURL=app.60b2ff3d.js.map