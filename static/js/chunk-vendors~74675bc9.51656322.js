(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~74675bc9"],{"19e9":function(e,t,a){"use strict";var n=a("dde0"),r=a("c937"),i=a("e2a6");const o={solve:function(e,t,a,o){if(!Object(r["a"])(e)||!(e instanceof Array))throw new i["a"]("The array lower is required.");if(!Object(r["a"])(t)||!(t instanceof Array))throw new i["a"]("The array diagonal is required.");if(!Object(r["a"])(a)||!(a instanceof Array))throw new i["a"]("The array upper is required.");if(!Object(r["a"])(o)||!(o instanceof Array))throw new i["a"]("The array right is required.");if(t.length!==o.length)throw new i["a"]("diagonal and right must have the same lengths.");if(e.length!==a.length)throw new i["a"]("lower and upper must have the same lengths.");if(e.length!==t.length-1)throw new i["a"]("lower and upper must be one less than the length of diagonal.");const s=new Array(a.length),c=new Array(o.length),l=new Array(o.length);let u,h;for(u=0;u<c.length;u++)c[u]=new n["a"],l[u]=new n["a"];for(s[0]=a[0]/t[0],c[0]=n["a"].multiplyByScalar(o[0],1/t[0],c[0]),u=1;u<s.length;++u)h=1/(t[u]-s[u-1]*e[u-1]),s[u]=a[u]*h,c[u]=n["a"].subtract(o[u],n["a"].multiplyByScalar(c[u-1],e[u-1],c[u]),c[u]),c[u]=n["a"].multiplyByScalar(c[u],h,c[u]);for(h=1/(t[u]-s[u-1]*e[u-1]),c[u]=n["a"].subtract(o[u],n["a"].multiplyByScalar(c[u-1],e[u-1],c[u]),c[u]),c[u]=n["a"].multiplyByScalar(c[u],h,c[u]),l[l.length-1]=c[c.length-1],u=l.length-2;u>=0;--u)l[u]=n["a"].subtract(c[u],n["a"].multiplyByScalar(l[u+1],s[u],l[u]),l[u]);return l}};t["a"]=o},"2fdd":function(e,t,a){"use strict";var n=a("02f9"),r=a("c937"),i=a("e2a6");const o={};let s={};function c(e){const t=new n["a"](e);t.normalize();let a=t.authority();if(0!==a.length){if(t.authority(a),-1!==a.indexOf("@")){const e=a.split("@");a=e[1]}if(-1===a.indexOf(":")){let e=t.scheme();if(0===e.length&&(e=window.location.protocol,e=e.substring(0,e.length-1)),"http"===e)a+=":80";else{if("https"!==e)return;a+=":443"}}return a}}o.add=function(e,t){if(!Object(r["a"])(e))throw new i["a"]("host is required.");if(!Object(r["a"])(t)||t<=0)throw new i["a"]("port is required to be greater than 0.");const a=`${e.toLowerCase()}:${t}`;Object(r["a"])(s[a])||(s[a]=!0)},o.remove=function(e,t){if(!Object(r["a"])(e))throw new i["a"]("host is required.");if(!Object(r["a"])(t)||t<=0)throw new i["a"]("port is required to be greater than 0.");const a=`${e.toLowerCase()}:${t}`;Object(r["a"])(s[a])&&delete s[a]},o.contains=function(e){if(!Object(r["a"])(e))throw new i["a"]("url is required.");const t=c(e);return!(!Object(r["a"])(t)||!Object(r["a"])(s[t]))},o.clear=function(){s={}},t["a"]=o},"386a":function(e,t,a){"use strict";var n=a("dde0"),r=a("1a5d"),i=a("c937"),o=a("1b9c");const s=new n["a"](1,1,1),c=n["a"].ZERO,l=o["a"].IDENTITY;function u(e,t,a){this.translation=n["a"].clone(Object(r["a"])(e,c)),this.rotation=o["a"].clone(Object(r["a"])(t,l)),this.scale=n["a"].clone(Object(r["a"])(a,s))}u.prototype.equals=function(e){return this===e||Object(i["a"])(e)&&n["a"].equals(this.translation,e.translation)&&o["a"].equals(this.rotation,e.rotation)&&n["a"].equals(this.scale,e.scale)},t["a"]=u},"6f7c":function(e,t,a){"use strict";var n=a("85b2"),r=a("dde0"),i=a("6b82"),o=a("8d54"),s=a("ae9b"),c=a("1a5d"),l=a("c937"),u=a("e2a6"),h=a("1fde"),d=a("5c76"),m=a("e107"),w=a("d0db"),f=a("6acf"),p=a("5b85"),g=a("6247"),b=a("b8b5"),y=a("d767"),O=a("722e"),T=a("1b9c"),x=a("865c");const j={},E={up:{south:"east",north:"west",west:"south",east:"north"},down:{south:"west",north:"east",west:"north",east:"south"},south:{up:"west",down:"east",west:"down",east:"up"},north:{up:"east",down:"west",west:"up",east:"down"},west:{up:"north",down:"south",north:"down",south:"up"},east:{up:"south",down:"north",north:"up",south:"down"}},S={north:[-1,0,0],east:[0,1,0],up:[0,0,1],south:[1,0,0],west:[0,-1,0],down:[0,0,-1]},_={},v={east:new r["a"],north:new r["a"],up:new r["a"],west:new r["a"],south:new r["a"],down:new r["a"]};let P=new r["a"],F=new r["a"],q=new r["a"];j.localFrameToFixedFrameGenerator=function(e,t){if(!E.hasOwnProperty(e)||!E[e].hasOwnProperty(t))throw new u["a"]("firstAxis and secondAxis must be east, north, up, west, south or down.");const a=E[e][t];let n;const i=e+t;return Object(l["a"])(_[i])?n=_[i]:(n=function(n,i,o){if(!Object(l["a"])(n))throw new u["a"]("origin is required.");if(Object(l["a"])(o)||(o=new O["a"]),r["a"].equalsEpsilon(n,r["a"].ZERO,b["a"].EPSILON14))r["a"].unpack(S[e],0,P),r["a"].unpack(S[t],0,F),r["a"].unpack(S[a],0,q);else if(b["a"].equalsEpsilon(n.x,0,b["a"].EPSILON14)&&b["a"].equalsEpsilon(n.y,0,b["a"].EPSILON14)){const i=b["a"].sign(n.z);r["a"].unpack(S[e],0,P),"east"!==e&&"west"!==e&&r["a"].multiplyByScalar(P,i,P),r["a"].unpack(S[t],0,F),"east"!==t&&"west"!==t&&r["a"].multiplyByScalar(F,i,F),r["a"].unpack(S[a],0,q),"east"!==a&&"west"!==a&&r["a"].multiplyByScalar(q,i,q)}else{i=Object(c["a"])(i,m["a"].WGS84),i.geodeticSurfaceNormal(n,v.up);const o=v.up,s=v.east;s.x=-n.y,s.y=n.x,s.z=0,r["a"].normalize(s,v.east),r["a"].cross(o,s,v.north),r["a"].multiplyByScalar(v.up,-1,v.down),r["a"].multiplyByScalar(v.east,-1,v.west),r["a"].multiplyByScalar(v.north,-1,v.south),P=v[e],F=v[t],q=v[a]}return o[0]=P.x,o[1]=P.y,o[2]=P.z,o[3]=0,o[4]=F.x,o[5]=F.y,o[6]=F.z,o[7]=0,o[8]=q.x,o[9]=q.y,o[10]=q.z,o[11]=0,o[12]=n.x,o[13]=n.y,o[14]=n.z,o[15]=1,o},_[i]=n),n},j.eastNorthUpToFixedFrame=j.localFrameToFixedFrameGenerator("east","north"),j.northEastDownToFixedFrame=j.localFrameToFixedFrameGenerator("north","east"),j.northUpEastToFixedFrame=j.localFrameToFixedFrameGenerator("north","up"),j.northWestUpToFixedFrame=j.localFrameToFixedFrameGenerator("north","west");const R=new T["a"],M=new r["a"](1,1,1),N=new O["a"];j.headingPitchRollToFixedFrame=function(e,t,a,n,i){s["a"].typeOf.object("HeadingPitchRoll",t),n=Object(c["a"])(n,j.eastNorthUpToFixedFrame);const o=T["a"].fromHeadingPitchRoll(t,R),l=O["a"].fromTranslationQuaternionRotationScale(r["a"].ZERO,o,M,N);return i=n(e,a,i),O["a"].multiply(i,l,i)};const A=new O["a"],D=new y["a"];j.headingPitchRollQuaternion=function(e,t,a,n,r){s["a"].typeOf.object("HeadingPitchRoll",t);const i=j.headingPitchRollToFixedFrame(e,t,a,n,A),o=O["a"].getMatrix3(i,D);return T["a"].fromRotationMatrix(o,r)};const I=new r["a"](1,1,1),L=new r["a"],B=new O["a"],z=new O["a"],G=new y["a"],C=new T["a"];j.fixedFrameToHeadingPitchRoll=function(e,t,a,n){s["a"].defined("transform",e),t=Object(c["a"])(t,m["a"].WGS84),a=Object(c["a"])(a,j.eastNorthUpToFixedFrame),Object(l["a"])(n)||(n=new w["a"]);const i=O["a"].getTranslation(e,L);if(r["a"].equals(i,r["a"].ZERO))return n.heading=0,n.pitch=0,n.roll=0,n;let o=O["a"].inverseTransformation(a(i,t,B),B),u=O["a"].setScale(e,I,z);u=O["a"].setTranslation(u,r["a"].ZERO,u),o=O["a"].multiply(o,u,o);let h=T["a"].fromRotationMatrix(O["a"].getMatrix3(o,G),C);return h=T["a"].normalize(h,h),w["a"].fromQuaternion(h,n)};const W=24110.54841,U=8640184.812866,Y=.093104,k=-62e-7,H=11772758384668e-32,Z=72921158553e-15,X=b["a"].TWO_PI/86400;let $=new g["a"];j.computeTemeToPseudoFixedMatrix=function(e,t){if(!Object(l["a"])(e))throw new u["a"]("date is required.");$=g["a"].addSeconds(e,-g["a"].computeTaiMinusUtc(e),$);const a=$.dayNumber,n=$.secondsOfDay;let r;const i=a-2451545;r=n>=43200?(i+.5)/x["a"].DAYS_PER_JULIAN_CENTURY:(i-.5)/x["a"].DAYS_PER_JULIAN_CENTURY;const o=W+r*(U+r*(Y+r*k)),s=o*X%b["a"].TWO_PI,c=Z+H*(a-2451545.5),h=(n+.5*x["a"].SECONDS_PER_DAY)%x["a"].SECONDS_PER_DAY,d=s+c*h,m=Math.cos(d),w=Math.sin(d);return Object(l["a"])(t)?(t[0]=m,t[1]=-w,t[2]=0,t[3]=w,t[4]=m,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t):new y["a"](m,w,0,-w,m,0,0,0,1)},j.iau2006XysData=new f["a"],j.earthOrientationParameters=h["a"].NONE;const J=32.184,V=2451545;j.preloadIcrfFixed=function(e){const t=e.start.dayNumber,a=e.start.secondsOfDay+J,n=e.stop.dayNumber,r=e.stop.secondsOfDay+J,i=j.iau2006XysData.preload(t,a,n,r),o=j.earthOrientationParameters.getPromiseToLoad();return Promise.all([i,o])},j.computeIcrfToFixedMatrix=function(e,t){if(!Object(l["a"])(e))throw new u["a"]("date is required.");Object(l["a"])(t)||(t=new y["a"]);const a=j.computeFixedToIcrfMatrix(e,t);if(Object(l["a"])(a))return y["a"].transpose(a,t)};const Q=new p["a"](0,0,0),K=new d["a"](0,0,0,0,0,0),ee=new y["a"],te=new y["a"];j.computeFixedToIcrfMatrix=function(e,t){if(!Object(l["a"])(e))throw new u["a"]("date is required.");Object(l["a"])(t)||(t=new y["a"]);const a=j.earthOrientationParameters.compute(e,K);if(!Object(l["a"])(a))return;const n=e.dayNumber,r=e.secondsOfDay+J,i=j.iau2006XysData.computeXysRadians(n,r,Q);if(!Object(l["a"])(i))return;const o=i.x+a.xPoleOffset,s=i.y+a.yPoleOffset,c=1/(1+Math.sqrt(1-o*o-s*s)),h=ee;h[0]=1-c*o*o,h[3]=-c*o*s,h[6]=o,h[1]=-c*o*s,h[4]=1-c*s*s,h[7]=s,h[2]=-o,h[5]=-s,h[8]=1-c*(o*o+s*s);const d=y["a"].fromRotationZ(-i.s,te),m=y["a"].multiply(h,d,ee),w=e.dayNumber,f=e.secondsOfDay-g["a"].computeTaiMinusUtc(e)+a.ut1MinusUtc,p=w-2451545,O=f/x["a"].SECONDS_PER_DAY;let T=.779057273264+O+.00273781191135448*(p+O);T=T%1*b["a"].TWO_PI;const E=y["a"].fromRotationZ(T,te),S=y["a"].multiply(m,E,ee),_=Math.cos(a.xPoleWander),v=Math.cos(a.yPoleWander),P=Math.sin(a.xPoleWander),F=Math.sin(a.yPoleWander);let q=n-V+r/x["a"].SECONDS_PER_DAY;q/=36525;const R=-47e-6*q*b["a"].RADIANS_PER_DEGREE/3600,M=Math.cos(R),N=Math.sin(R),A=te;return A[0]=_*M,A[1]=_*N,A[2]=P,A[3]=-v*N+F*P*M,A[4]=v*M+F*P*N,A[5]=-F*_,A[6]=-F*N-v*P*M,A[7]=F*M-v*P*N,A[8]=v*_,y["a"].multiply(S,A,t)};const ae=new i["a"];j.pointToWindowCoordinates=function(e,t,a,n){return n=j.pointToGLWindowCoordinates(e,t,a,n),n.y=2*t[5]-n.y,n},j.pointToGLWindowCoordinates=function(e,t,a,r){if(!Object(l["a"])(e))throw new u["a"]("modelViewProjectionMatrix is required.");if(!Object(l["a"])(t))throw new u["a"]("viewportTransformation is required.");if(!Object(l["a"])(a))throw new u["a"]("point is required.");Object(l["a"])(r)||(r=new n["a"]);const o=ae;return O["a"].multiplyByVector(e,i["a"].fromElements(a.x,a.y,a.z,1,o),o),i["a"].multiplyByScalar(o,1/o.w,o),O["a"].multiplyByVector(t,o,o),n["a"].fromCartesian4(o,r)};const ne=new r["a"],re=new r["a"],ie=new r["a"];j.rotationMatrixFromPositionVelocity=function(e,t,a,n){if(!Object(l["a"])(e))throw new u["a"]("position is required.");if(!Object(l["a"])(t))throw new u["a"]("velocity is required.");const i=Object(c["a"])(a,m["a"].WGS84).geodeticSurfaceNormal(e,ne);let o=r["a"].cross(t,i,re);r["a"].equalsEpsilon(o,r["a"].ZERO,b["a"].EPSILON6)&&(o=r["a"].clone(r["a"].UNIT_X,o));const s=r["a"].cross(o,t,ie);return r["a"].normalize(s,s),r["a"].cross(t,s,o),r["a"].negate(o,o),r["a"].normalize(o,o),Object(l["a"])(n)||(n=new y["a"]),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=o.x,n[4]=o.y,n[5]=o.z,n[6]=s.x,n[7]=s.y,n[8]=s.z,n};const oe=new O["a"](0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1),se=new o["a"],ce=new r["a"],le=new r["a"],ue=new y["a"],he=new O["a"],de=new O["a"];j.basisTo2D=function(e,t,a){if(!Object(l["a"])(e))throw new u["a"]("projection is required.");if(!Object(l["a"])(t))throw new u["a"]("matrix is required.");if(!Object(l["a"])(a))throw new u["a"]("result is required.");const n=O["a"].getTranslation(t,le),i=e.ellipsoid,o=i.cartesianToCartographic(n,se),s=e.project(o,ce);r["a"].fromElements(s.z,s.x,s.y,s);const c=j.eastNorthUpToFixedFrame(n,i,he),h=O["a"].inverseTransformation(c,de),d=O["a"].getMatrix3(t,ue),m=O["a"].multiplyByMatrix3(h,d,a);return O["a"].multiply(oe,m,a),O["a"].setTranslation(a,s,a),a},j.wgs84To2DModelMatrix=function(e,t,a){if(!Object(l["a"])(e))throw new u["a"]("projection is required.");if(!Object(l["a"])(t))throw new u["a"]("center is required.");if(!Object(l["a"])(a))throw new u["a"]("result is required.");const n=e.ellipsoid,i=j.eastNorthUpToFixedFrame(t,n,he),o=O["a"].inverseTransformation(i,de),s=n.cartesianToCartographic(t,se),c=e.project(s,ce);r["a"].fromElements(c.z,c.x,c.y,c);const h=O["a"].fromTranslation(c,he);return O["a"].multiply(oe,o,a),O["a"].multiply(h,a,a),a},t["a"]=j},"9a62":function(e,t,a){"use strict";var n=a("1a5d"),r=a("c937"),i=a("e2a6");const o={calculateACMR:function(e){e=Object(n["a"])(e,n["a"].EMPTY_OBJECT);const t=e.indices;let a=e.maximumIndex;const o=Object(n["a"])(e.cacheSize,24);if(!Object(r["a"])(t))throw new i["a"]("indices is required.");const s=t.length;if(s<3||s%3!==0)throw new i["a"]("indices length must be a multiple of three.");if(a<=0)throw new i["a"]("maximumIndex must be greater than zero.");if(o<3)throw new i["a"]("cacheSize must be greater than two.");if(!Object(r["a"])(a)){a=0;let e=0,n=t[e];while(e<s)n>a&&(a=n),++e,n=t[e]}const c=[];for(let n=0;n<a+1;n++)c[n]=0;let l=o+1;for(let n=0;n<s;++n)l-c[t[n]]>o&&(c[t[n]]=l,++l);return(l-o+1)/(s/3)},tipsify:function(e){e=Object(n["a"])(e,n["a"].EMPTY_OBJECT);const t=e.indices,a=e.maximumIndex,o=Object(n["a"])(e.cacheSize,24);let s;function c(e,t,a,n){while(t.length>=1){const a=t[t.length-1];if(t.splice(t.length-1,1),e[a].numLiveTriangles>0)return a}while(s<n){if(e[s].numLiveTriangles>0)return++s,s-1;++s}return-1}function l(e,t,a,n,r,i,o){let s,l=-1,u=-1,h=0;while(h<a.length){const e=a[h];n[e].numLiveTriangles&&(s=0,r-n[e].timeStamp+2*n[e].numLiveTriangles<=t&&(s=r-n[e].timeStamp),(s>u||-1===u)&&(u=s,l=e)),++h}return-1===l?c(n,i,e,o):l}if(!Object(r["a"])(t))throw new i["a"]("indices is required.");const u=t.length;if(u<3||u%3!==0)throw new i["a"]("indices length must be a multiple of three.");if(a<=0)throw new i["a"]("maximumIndex must be greater than zero.");if(o<3)throw new i["a"]("cacheSize must be greater than two.");let h=0,d=0,m=t[d];const w=u;if(Object(r["a"])(a))h=a+1;else{while(d<w)m>h&&(h=m),++d,m=t[d];if(-1===h)return 0;++h}const f=[];let p;for(p=0;p<h;p++)f[p]={numLiveTriangles:0,timeStamp:0,vertexTriangles:[]};d=0;let g=0;while(d<w)f[t[d]].vertexTriangles.push(g),++f[t[d]].numLiveTriangles,f[t[d+1]].vertexTriangles.push(g),++f[t[d+1]].numLiveTriangles,f[t[d+2]].vertexTriangles.push(g),++f[t[d+2]].numLiveTriangles,++g,d+=3;let b=0,y=o+1;s=1;let O=[];const T=[];let x,j,E=0;const S=[],_=u/3,v=[];for(p=0;p<_;p++)v[p]=!1;let P,F;while(-1!==b){O=[],j=f[b],F=j.vertexTriangles.length;for(let e=0;e<F;++e)if(g=j.vertexTriangles[e],!v[g]){v[g]=!0,d=g+g+g;for(let e=0;e<3;++e)P=t[d],O.push(P),T.push(P),S[E]=P,++E,x=f[P],--x.numLiveTriangles,y-x.timeStamp>o&&(x.timeStamp=y,++y),++d}b=l(t,o,O,f,y,T,h)}return S}};t["a"]=o},bfe1:function(e,t,a){"use strict";var n=a("3736"),r=a("1a5d"),i=a("61ad"),o=a("c937"),s=a("e2a6"),c=a("e107"),l=a("f7b5"),u=a("2dd3"),h=a("b9eb"),d=a("b869"),m=a("b8b5"),w=a("4a63"),f=a("9f38"),p=a("5df2"),g=a("3242");function b(e,t){this.rectangle=e,this.maxLevel=t}function y(e){if(e=Object(r["a"])(e,r["a"].EMPTY_OBJECT),!Object(o["a"])(e.url))throw new s["a"]("options.url is required.");const t=f["a"].createIfNeeded(e.url);this._resource=t,this._errorEvent=new l["a"],this._ready=!1,this._readyPromise=Object(i["a"])(),this._terrainDataStructure={heightScale:.001,heightOffset:-1e3,elementsPerHeight:3,stride:4,elementMultiplier:256,isBigEndian:!0,lowestEncodedHeight:0,highestEncodedHeight:16777215};let a=e.credit;"string"===typeof a&&(a=new n["a"](a)),this._credit=a,this._tilingScheme=void 0,this._rectangles=[];const h=this;let d;const y=Object(r["a"])(e.ellipsoid,c["a"].WGS84);function O(e){const t=e.getElementsByTagName("SRS")[0].textContent;if("EPSG:4326"!==t)return void T(`SRS ${t} is not supported.`);h._tilingScheme=new u["a"]({ellipsoid:y});const a=e.getElementsByTagName("TileFormat")[0];h._heightmapWidth=parseInt(a.getAttribute("width"),10),h._heightmapHeight=parseInt(a.getAttribute("height"),10),h._levelZeroMaximumGeometricError=p["a"].getEstimatedLevelZeroGeometricErrorForAHeightmap(y,Math.min(h._heightmapWidth,h._heightmapHeight),h._tilingScheme.getNumberOfXTilesAtLevel(0));const n=e.getElementsByTagName("DataExtent");for(let r=0;r<n.length;++r){const e=n[r],t=m["a"].toRadians(parseFloat(e.getAttribute("minx"))),a=m["a"].toRadians(parseFloat(e.getAttribute("miny"))),i=m["a"].toRadians(parseFloat(e.getAttribute("maxx"))),o=m["a"].toRadians(parseFloat(e.getAttribute("maxy"))),s=parseInt(e.getAttribute("maxlevel"),10);h._rectangles.push(new b(new w["a"](t,a,i,o),s))}h._ready=!0,h._readyPromise.resolve(!0)}function T(e){const t=Object(r["a"])(e,`An error occurred while accessing ${h._resource.url}.`);d=g["a"].handleError(d,h,h._errorEvent,t,void 0,void 0,void 0,x)}function x(){h._resource.fetchXML().then(O).catch(T)}x()}Object.defineProperties(y.prototype,{errorEvent:{get:function(){return this._errorEvent}},credit:{get:function(){return this._credit}},tilingScheme:{get:function(){if(!this.ready)throw new s["a"]("requestTileGeometry must not be called before ready returns true.");return this._tilingScheme}},ready:{get:function(){return this._ready}},readyPromise:{get:function(){return this._readyPromise.promise}},hasWaterMask:{get:function(){return!1}},hasVertexNormals:{get:function(){return!1}},availability:{get:function(){}}}),y.prototype.requestTileGeometry=function(e,t,a,n){if(!this.ready)throw new s["a"]("requestTileGeometry must not be called before ready returns true.");const r=this._tilingScheme.getNumberOfYTilesAtLevel(a),i=this._resource.getDerivedResource({url:`${a}/${e}/${r-t-1}.tif`,queryParameters:{cesium:!0},request:n}),c=i.fetchImage({preferImageBitmap:!0});if(!Object(o["a"])(c))return;const l=this;return Promise.resolve(c).then((function(n){return new d["a"]({buffer:Object(h["a"])(n),width:l._heightmapWidth,height:l._heightmapHeight,childTileMask:T(l,e,t,a),structure:l._terrainDataStructure})}))},y.prototype.getLevelMaximumGeometricError=function(e){if(!this.ready)throw new s["a"]("requestTileGeometry must not be called before ready returns true.");return this._levelZeroMaximumGeometricError/(1<<e)};const O=new w["a"];function T(e,t,a,n){const r=e._tilingScheme,i=e._rectangles,s=r.tileXYToRectangle(t,a,n);let c=0;for(let l=0;l<i.length&&15!==c;++l){const e=i[l];if(e.maxLevel<=n)continue;const u=e.rectangle,h=w["a"].intersection(u,s,O);Object(o["a"])(h)&&(x(r,u,2*t,2*a,n+1)&&(c|=4),x(r,u,2*t+1,2*a,n+1)&&(c|=8),x(r,u,2*t,2*a+1,n+1)&&(c|=1),x(r,u,2*t+1,2*a+1,n+1)&&(c|=2))}return c}function x(e,t,a,n,r){const i=e.tileXYToRectangle(a,n,r);return Object(o["a"])(w["a"].intersection(i,t,O))}y.prototype.getTileDataAvailable=function(e,t,a){},y.prototype.loadTileDataAvailability=function(e,t,a){}}}]);