(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~8a94c1f6"],{"1fde":function(t,e,n){"use strict";var a=n("366c"),i=n("1a5d"),o=n("c937"),r=n("5c76"),s=n("6247"),c=n("1d86"),u=n("9f38"),l=n("e2aa"),f=n("865c"),h=n("6804");function d(t){if(t=Object(i["a"])(t,i["a"].EMPTY_OBJECT),this._dates=void 0,this._samples=void 0,this._dateColumn=-1,this._xPoleWanderRadiansColumn=-1,this._yPoleWanderRadiansColumn=-1,this._ut1MinusUtcSecondsColumn=-1,this._xCelestialPoleOffsetRadiansColumn=-1,this._yCelestialPoleOffsetRadiansColumn=-1,this._taiMinusUtcSecondsColumn=-1,this._columnCount=0,this._lastIndex=-1,this._downloadPromise=void 0,this._dataError=void 0,this._addNewLeapSeconds=Object(i["a"])(t.addNewLeapSeconds,!0),Object(o["a"])(t.data))_(this,t.data);else if(Object(o["a"])(t.url)){const e=u["a"].createIfNeeded(t.url),n=this;this._downloadPromise=e.fetchJson().then((function(t){_(n,t)})).catch((function(){n._dataError=`An error occurred while retrieving the EOP data from the URL ${e.url}.`}))}else _(this,{columnNames:["dateIso8601","modifiedJulianDateUtc","xPoleWanderRadians","yPoleWanderRadians","ut1MinusUtcSeconds","lengthOfDayCorrectionSeconds","xCelestialPoleOffsetRadians","yCelestialPoleOffsetRadians","taiMinusUtcSeconds"],samples:[]})}function m(t,e){return s["a"].compare(t.julianDate,e)}function _(t,e){if(!Object(o["a"])(e.columnNames))return void(t._dataError="Error in loaded EOP data: The columnNames property is required.");if(!Object(o["a"])(e.samples))return void(t._dataError="Error in loaded EOP data: The samples property is required.");const n=e.columnNames.indexOf("modifiedJulianDateUtc"),i=e.columnNames.indexOf("xPoleWanderRadians"),r=e.columnNames.indexOf("yPoleWanderRadians"),u=e.columnNames.indexOf("ut1MinusUtcSeconds"),l=e.columnNames.indexOf("xCelestialPoleOffsetRadians"),d=e.columnNames.indexOf("yCelestialPoleOffsetRadians"),_=e.columnNames.indexOf("taiMinusUtcSeconds");if(n<0||i<0||r<0||u<0||l<0||d<0||_<0)return void(t._dataError="Error in loaded EOP data: The columnNames property must include modifiedJulianDateUtc, xPoleWanderRadians, yPoleWanderRadians, ut1MinusUtcSeconds, xCelestialPoleOffsetRadians, yCelestialPoleOffsetRadians, and taiMinusUtcSeconds columns");const p=t._samples=e.samples,O=t._dates=[];let y;t._dateColumn=n,t._xPoleWanderRadiansColumn=i,t._yPoleWanderRadiansColumn=r,t._ut1MinusUtcSecondsColumn=u,t._xCelestialPoleOffsetRadiansColumn=l,t._yCelestialPoleOffsetRadiansColumn=d,t._taiMinusUtcSecondsColumn=_,t._columnCount=e.columnNames.length,t._lastIndex=void 0;const g=t._addNewLeapSeconds;for(let P=0,x=p.length;P<x;P+=t._columnCount){const t=p[P+n],e=p[P+_],i=t+f["a"].MODIFIED_JULIAN_DATE_DIFFERENCE,r=new s["a"](i,e,h["a"].TAI);if(O.push(r),g){if(e!==y&&Object(o["a"])(y)){const t=s["a"].leapSeconds,n=Object(a["a"])(t,r,m);if(n<0){const a=new c["a"](r,e);t.splice(~n,0,a)}}y=e}}}function p(t,e,n,a,i){const o=n*a;i.xPoleWander=e[o+t._xPoleWanderRadiansColumn],i.yPoleWander=e[o+t._yPoleWanderRadiansColumn],i.xPoleOffset=e[o+t._xCelestialPoleOffsetRadiansColumn],i.yPoleOffset=e[o+t._yCelestialPoleOffsetRadiansColumn],i.ut1MinusUtc=e[o+t._ut1MinusUtcSecondsColumn]}function O(t,e,n){return e+t*(n-e)}function y(t,e,n,a,i,o,r){const c=t._columnCount;if(o>e.length-1)return r.xPoleWander=0,r.yPoleWander=0,r.xPoleOffset=0,r.yPoleOffset=0,r.ut1MinusUtc=0,r;const u=e[i],l=e[o];if(u.equals(l)||a.equals(u))return p(t,n,i,c,r),r;if(a.equals(l))return p(t,n,o,c,r),r;const f=s["a"].secondsDifference(a,u)/s["a"].secondsDifference(l,u),h=i*c,d=o*c;let m=n[h+t._ut1MinusUtcSecondsColumn],_=n[d+t._ut1MinusUtcSecondsColumn];const y=_-m;if(y>.5||y<-.5){const e=n[h+t._taiMinusUtcSecondsColumn],i=n[d+t._taiMinusUtcSecondsColumn];e!==i&&(l.equals(a)?m=_:_-=i-e)}return r.xPoleWander=O(f,n[h+t._xPoleWanderRadiansColumn],n[d+t._xPoleWanderRadiansColumn]),r.yPoleWander=O(f,n[h+t._yPoleWanderRadiansColumn],n[d+t._yPoleWanderRadiansColumn]),r.xPoleOffset=O(f,n[h+t._xCelestialPoleOffsetRadiansColumn],n[d+t._xCelestialPoleOffsetRadiansColumn]),r.yPoleOffset=O(f,n[h+t._yCelestialPoleOffsetRadiansColumn],n[d+t._yCelestialPoleOffsetRadiansColumn]),r.ut1MinusUtc=O(f,m,_),r}d.NONE=Object.freeze({getPromiseToLoad:function(){return Promise.resolve()},compute:function(t,e){return Object(o["a"])(e)?(e.xPoleWander=0,e.yPoleWander=0,e.xPoleOffset=0,e.yPoleOffset=0,e.ut1MinusUtc=0):e=new r["a"](0,0,0,0,0),e}}),d.prototype.getPromiseToLoad=function(){return Promise.resolve(this._downloadPromise)},d.prototype.compute=function(t,e){if(!Object(o["a"])(this._samples)){if(Object(o["a"])(this._dataError))throw new l["a"](this._dataError);return}if(Object(o["a"])(e)||(e=new r["a"](0,0,0,0,0)),0===this._samples.length)return e.xPoleWander=0,e.yPoleWander=0,e.xPoleOffset=0,e.yPoleOffset=0,e.ut1MinusUtc=0,e;const n=this._dates,i=this._lastIndex;let c=0,u=0;if(Object(o["a"])(i)){const a=n[i],r=n[i+1],l=s["a"].lessThanOrEquals(a,t),f=!Object(o["a"])(r),h=f||s["a"].greaterThanOrEquals(r,t);if(l&&h)return c=i,!f&&r.equals(t)&&++c,u=c+1,y(this,n,this._samples,t,c,u,e),e}let f=Object(a["a"])(n,t,s["a"].compare,this._dateColumn);return f>=0?(f<n.length-1&&n[f+1].equals(t)&&++f,c=f,u=f):(u=~f,c=u-1,c<0&&(c=0)),this._lastIndex=c,y(this,n,this._samples,t,c,u,e),e},e["a"]=d},"5bb6":function(t,e,n){"use strict";var a=n("b8b5"),i=n("ae9b"),o=n("c937");function r(t){i["a"].typeOf.object("options",t),i["a"].defined("options.comparator",t.comparator),Object(o["a"])(t.maximumLength)&&i["a"].typeOf.number.greaterThanOrEquals("options.maximumLength",t.maximumLength,0),this._comparator=t.comparator,this._maximumLength=t.maximumLength,this._array=Object(o["a"])(t.maximumLength)?new Array(t.maximumLength):[],this._length=0}function s(t,e,n){const a=t._array,i=a[e];a[e]=a[n],a[n]=i}function c(t,e,n){return t._comparator(t._array[e],t._array[n])<0}function u(t,e,n){return t._comparator(t._array[e],t._array[n])>0}function l(t,e){if(0===e)return;const n=Math.floor(a["a"].log2(e+1))%2===0,i=Math.floor((e-1)/2),o=c(t,e,i);o!==n&&(s(t,e,i),e=i);while(e>=3){const n=Math.floor((e-3)/4);if(c(t,e,n)!==o)break;s(t,e,n),e=n}}function f(t,e){const n=t._length,i=Math.floor(a["a"].log2(e+1))%2===0;let o;while((o=2*e+1)<n){let a=o;const r=o+1;if(r<n){c(t,r,a)===i&&(a=r);const e=2*o+1,s=Math.max(Math.min(n-e,4),0);for(let n=0;n<s;n++){const o=e+n;c(t,o,a)===i&&(a=o)}}if(c(t,a,e)===i&&(s(t,a,e),a!==o&&a!==r)){const e=Math.floor((a-1)/2);u(t,a,e)===i&&s(t,a,e)}e=a}}Object.defineProperties(r.prototype,{length:{get:function(){return this._length}},maximumLength:{get:function(){return this._maximumLength},set:function(t){if(Object(o["a"])(t)){i["a"].typeOf.number.greaterThanOrEquals("maximumLength",t,0);while(this._length>t)this.removeMinimum();this._array.length=t}this._maximumLength=t}},internalArray:{get:function(){return this._array}},comparator:{get:function(){return this._comparator}}}),r.prototype.clone=function(){const t=this._maximumLength,e=this._comparator,n=this._array,a=this._length,i=new r({comparator:e,maximumLength:t});i._length=a;for(let o=0;o<a;o++)i._array[o]=n[o];return i},r.prototype.reset=function(){this._length=0;const t=this._maximumLength;if(Object(o["a"])(t))for(let e=0;e<t;e++)this._array[e]=void 0;else this._array.length=0},r.prototype.resort=function(){const t=this._length;for(let e=0;e<t;e++)l(this,e)},r.prototype.insert=function(t){let e;const n=this._maximumLength;if(Object(o["a"])(n)){if(0===n)return;if(this._length===n){const n=this._array[0];if(this._comparator(t,n)<=0)return t;e=this.removeMinimum()}}const a=this._length;return this._array[a]=t,this._length++,l(this,a),e},r.prototype.removeMinimum=function(){const t=this._length;if(0===t)return;this._length--;const e=this._array[0];return t>=2&&(this._array[0]=this._array[t-1],f(this,0)),this._array[t-1]=void 0,e},r.prototype.removeMaximum=function(){const t=this._length;if(0===t)return;let e;if(this._length--,t<=2)e=this._array[t-1];else{const n=u(this,1,2)?1:2;e=this._array[n],this._array[n]=this._array[t-1],t>=4&&f(this,n)}return this._array[t-1]=void 0,e},r.prototype.getMinimum=function(){const t=this._length;if(0!==t)return this._array[0]},r.prototype.getMaximum=function(){const t=this._length;if(0!==t)return t<=2?this._array[t-1]:this._array[u(this,1,2)?1:2]}},"5c76":function(t,e,n){"use strict";function a(t,e,n,a,i){this.xPoleWander=t,this.yPoleWander=e,this.xPoleOffset=n,this.yPoleOffset=a,this.ut1MinusUtc=i}e["a"]=a},"7fd6":function(t,e,n){"use strict";var a=n("cbf0"),i=n("1a5d"),o=n("c937"),r=n("e2a6");function s(t,e){if(t=Object(i["a"])(t,0),e=Object(i["a"])(e,Number.MAX_VALUE),e<=t)throw new r["a"]("far distance must be greater than near distance.");this.value=new Float32Array([t,e])}Object.defineProperties(s.prototype,{componentDatatype:{get:function(){return a["a"].FLOAT}},componentsPerAttribute:{get:function(){return 2}},normalize:{get:function(){return!1}}}),s.fromDistanceDisplayCondition=function(t){if(!Object(o["a"])(t))throw new r["a"]("distanceDisplayCondition is required.");if(t.far<=t.near)throw new r["a"]("distanceDisplayCondition.far distance must be greater than distanceDisplayCondition.near distance.");return new s(t.near,t.far)},s.toValue=function(t,e){if(!Object(o["a"])(t))throw new r["a"]("distanceDisplayCondition is required.");return Object(o["a"])(e)?(e[0]=t.near,e[1]=t.far,e):new Float32Array([t.near,t.far])},e["a"]=s},"8c35":function(t,e,n){"use strict";var a=n("c937");function i(){this.head=void 0,this.tail=void 0,this._length=0}function o(t,e,n){this.item=t,this.previous=e,this.next=n}function r(t,e){Object(a["a"])(e.previous)&&Object(a["a"])(e.next)?(e.previous.next=e.next,e.next.previous=e.previous):Object(a["a"])(e.previous)?(e.previous.next=void 0,t.tail=e.previous):Object(a["a"])(e.next)?(e.next.previous=void 0,t.head=e.next):(t.head=void 0,t.tail=void 0),e.next=void 0,e.previous=void 0}Object.defineProperties(i.prototype,{length:{get:function(){return this._length}}}),i.prototype.add=function(t){const e=new o(t,this.tail,void 0);return Object(a["a"])(this.tail)?(this.tail.next=e,this.tail=e):(this.head=e,this.tail=e),++this._length,e},i.prototype.remove=function(t){Object(a["a"])(t)&&(r(this,t),--this._length)},i.prototype.splice=function(t,e){if(t===e)return;r(this,e);const n=t.next;t.next=e,this.tail===t?this.tail=e:n.previous=e,e.next=n,e.previous=t},e["a"]=i},aecc:function(t,e,n){"use strict";var a=n("1a5d"),i=n("c937"),o=n("e2a6");function r(t,e){t=Object(a["a"])(t,0),this._near=t,e=Object(a["a"])(e,Number.MAX_VALUE),this._far=e}Object.defineProperties(r.prototype,{near:{get:function(){return this._near},set:function(t){this._near=t}},far:{get:function(){return this._far},set:function(t){this._far=t}}}),r.packedLength=2,r.pack=function(t,e,n){if(!Object(i["a"])(t))throw new o["a"]("value is required");if(!Object(i["a"])(e))throw new o["a"]("array is required");return n=Object(a["a"])(n,0),e[n++]=t.near,e[n]=t.far,e},r.unpack=function(t,e,n){if(!Object(i["a"])(t))throw new o["a"]("array is required");return e=Object(a["a"])(e,0),Object(i["a"])(n)||(n=new r),n.near=t[e++],n.far=t[e],n},r.equals=function(t,e){return t===e||Object(i["a"])(t)&&Object(i["a"])(e)&&t.near===e.near&&t.far===e.far},r.clone=function(t,e){if(Object(i["a"])(t))return Object(i["a"])(e)||(e=new r),e.near=t.near,e.far=t.far,e},r.prototype.clone=function(t){return r.clone(this,t)},r.prototype.equals=function(t){return r.equals(this,t)},e["a"]=r},e2a6:function(t,e,n){"use strict";var a=n("c937");function i(t){let e;this.name="DeveloperError",this.message=t;try{throw new Error}catch(n){e=n.stack}this.stack=e}Object(a["a"])(Object.create)&&(i.prototype=Object.create(Error.prototype),i.prototype.constructor=i),i.prototype.toString=function(){let t=`${this.name}: ${this.message}`;return Object(a["a"])(this.stack)&&(t+="\n"+this.stack.toString()),t},i.throwInstantiationError=function(){throw new i("This function defines an interface and should not be called directly.")},e["a"]=i}}]);