(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~46007741"],{1494:function(e,t,n){"use strict";var a=n("cedf");const i={UNSIGNED_BYTE:a["a"].UNSIGNED_BYTE,UNSIGNED_SHORT:a["a"].UNSIGNED_SHORT,UNSIGNED_INT:a["a"].UNSIGNED_INT,FLOAT:a["a"].FLOAT,HALF_FLOAT:a["a"].HALF_FLOAT_OES,UNSIGNED_INT_24_8:a["a"].UNSIGNED_INT_24_8,UNSIGNED_SHORT_4_4_4_4:a["a"].UNSIGNED_SHORT_4_4_4_4,UNSIGNED_SHORT_5_5_5_1:a["a"].UNSIGNED_SHORT_5_5_5_1,UNSIGNED_SHORT_5_6_5:a["a"].UNSIGNED_SHORT_5_6_5,toWebGLConstant:function(e,t){switch(e){case i.UNSIGNED_BYTE:return a["a"].UNSIGNED_BYTE;case i.UNSIGNED_SHORT:return a["a"].UNSIGNED_SHORT;case i.UNSIGNED_INT:return a["a"].UNSIGNED_INT;case i.FLOAT:return a["a"].FLOAT;case i.HALF_FLOAT:return t.webgl2?a["a"].HALF_FLOAT:a["a"].HALF_FLOAT_OES;case i.UNSIGNED_INT_24_8:return a["a"].UNSIGNED_INT_24_8;case i.UNSIGNED_SHORT_4_4_4_4:return a["a"].UNSIGNED_SHORT_4_4_4_4;case i.UNSIGNED_SHORT_5_5_5_1:return a["a"].UNSIGNED_SHORT_5_5_5_1;case i.UNSIGNED_SHORT_5_6_5:return i.UNSIGNED_SHORT_5_6_5}},isPacked:function(e){return e===i.UNSIGNED_INT_24_8||e===i.UNSIGNED_SHORT_4_4_4_4||e===i.UNSIGNED_SHORT_5_5_5_1||e===i.UNSIGNED_SHORT_5_6_5},sizeInBytes:function(e){switch(e){case i.UNSIGNED_BYTE:return 1;case i.UNSIGNED_SHORT:case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:case i.HALF_FLOAT:return 2;case i.UNSIGNED_INT:case i.FLOAT:case i.UNSIGNED_INT_24_8:return 4}},validate:function(e){return e===i.UNSIGNED_BYTE||e===i.UNSIGNED_SHORT||e===i.UNSIGNED_INT||e===i.FLOAT||e===i.HALF_FLOAT||e===i.UNSIGNED_INT_24_8||e===i.UNSIGNED_SHORT_4_4_4_4||e===i.UNSIGNED_SHORT_5_5_5_1||e===i.UNSIGNED_SHORT_5_6_5}};t["a"]=Object.freeze(i)},2992:function(e,t,n){"use strict";function a(e){this.context=e,this.framebuffer=void 0,this.blendingEnabled=void 0,this.scissorTest=void 0,this.viewport=void 0}t["a"]=a},"45f0":function(e,t,n){"use strict";var a=n("ae9b"),i=n("1a5d"),r=n("c937"),o=n("21b7"),s=n("e2a6"),c=n("b18b");function l(e){e=Object(i["a"])(e,i["a"].EMPTY_OBJECT);const t=e.context,n=e.width,o=e.height;a["a"].defined("options.context",t),a["a"].defined("options.width",n),a["a"].defined("options.height",o),this._width=n,this._height=o;const l=e.colorRenderbuffers,f=e.colorTextures;if(Object(r["a"])(l)!==Object(r["a"])(f))throw new s["a"]("Both color renderbuffer and texture attachments must be provided.");const u=e.depthStencilRenderbuffer,d=e.depthStencilTexture;if(Object(r["a"])(u)!==Object(r["a"])(d))throw new s["a"]("Both depth-stencil renderbuffer and texture attachments must be provided.");this._renderFramebuffer=new c["a"]({context:t,colorRenderbuffers:l,depthStencilRenderbuffer:u,destroyAttachments:e.destroyAttachments}),this._colorFramebuffer=new c["a"]({context:t,colorTextures:f,depthStencilTexture:d,destroyAttachments:e.destroyAttachments})}l.prototype.getRenderFramebuffer=function(){return this._renderFramebuffer},l.prototype.getColorFramebuffer=function(){return this._colorFramebuffer},l.prototype.blitFramebuffers=function(e,t){this._renderFramebuffer.bindRead(),this._colorFramebuffer.bindDraw();const n=e._gl;let a=0;this._colorFramebuffer._colorTextures.length>0&&(a|=n.COLOR_BUFFER_BIT),Object(r["a"])(this._colorFramebuffer.depthStencilTexture)&&(a|=n.DEPTH_BUFFER_BIT|(t?n.STENCIL_BUFFER_BIT:0)),n.blitFramebuffer(0,0,this._width,this._height,0,0,this._width,this._height,a,n.NEAREST),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null)},l.prototype.isDestroyed=function(){return!1},l.prototype.destroy=function(){return this._renderFramebuffer.destroy(),this._colorFramebuffer.destroy(),Object(o["a"])(this)},t["a"]=l},5027:function(e,t,n){"use strict";var a=n("6af0"),i=n("4051"),r=n("1a5d"),o=n("c937"),s=n("e2a6"),c=n("cedf"),l=n("f59e"),f=n("2341"),u=n("2105");function d(e){return e===c["a"].FUNC_ADD||e===c["a"].FUNC_SUBTRACT||e===c["a"].FUNC_REVERSE_SUBTRACT||e===c["a"].MIN||e===c["a"].MAX}function h(e){return e===c["a"].ZERO||e===c["a"].ONE||e===c["a"].SRC_COLOR||e===c["a"].ONE_MINUS_SRC_COLOR||e===c["a"].DST_COLOR||e===c["a"].ONE_MINUS_DST_COLOR||e===c["a"].SRC_ALPHA||e===c["a"].ONE_MINUS_SRC_ALPHA||e===c["a"].DST_ALPHA||e===c["a"].ONE_MINUS_DST_ALPHA||e===c["a"].CONSTANT_COLOR||e===c["a"].ONE_MINUS_CONSTANT_COLOR||e===c["a"].CONSTANT_ALPHA||e===c["a"].ONE_MINUS_CONSTANT_ALPHA||e===c["a"].SRC_ALPHA_SATURATE}function b(e){return e===c["a"].FRONT||e===c["a"].BACK||e===c["a"].FRONT_AND_BACK}function _(e){return e===c["a"].NEVER||e===c["a"].LESS||e===c["a"].EQUAL||e===c["a"].LEQUAL||e===c["a"].GREATER||e===c["a"].NOTEQUAL||e===c["a"].GEQUAL||e===c["a"].ALWAYS}function O(e){return e===c["a"].NEVER||e===c["a"].LESS||e===c["a"].EQUAL||e===c["a"].LEQUAL||e===c["a"].GREATER||e===c["a"].NOTEQUAL||e===c["a"].GEQUAL||e===c["a"].ALWAYS}function T(e){return e===c["a"].ZERO||e===c["a"].KEEP||e===c["a"].REPLACE||e===c["a"].INCR||e===c["a"].DECR||e===c["a"].INVERT||e===c["a"].INCR_WRAP||e===c["a"].DECR_WRAP}function E(e){const t=Object(r["a"])(e,r["a"].EMPTY_OBJECT),n=Object(r["a"])(t.cull,r["a"].EMPTY_OBJECT),u=Object(r["a"])(t.polygonOffset,r["a"].EMPTY_OBJECT),E=Object(r["a"])(t.scissorTest,r["a"].EMPTY_OBJECT),p=Object(r["a"])(E.rectangle,r["a"].EMPTY_OBJECT),S=Object(r["a"])(t.depthRange,r["a"].EMPTY_OBJECT),g=Object(r["a"])(t.depthTest,r["a"].EMPTY_OBJECT),N=Object(r["a"])(t.colorMask,r["a"].EMPTY_OBJECT),R=Object(r["a"])(t.blending,r["a"].EMPTY_OBJECT),A=Object(r["a"])(R.color,r["a"].EMPTY_OBJECT),F=Object(r["a"])(t.stencilTest,r["a"].EMPTY_OBJECT),w=Object(r["a"])(F.frontOperation,r["a"].EMPTY_OBJECT),I=Object(r["a"])(F.backOperation,r["a"].EMPTY_OBJECT),m=Object(r["a"])(t.sampleCoverage,r["a"].EMPTY_OBJECT),C=t.viewport;if(this.frontFace=Object(r["a"])(t.frontFace,l["a"].COUNTER_CLOCKWISE),this.cull={enabled:Object(r["a"])(n.enabled,!1),face:Object(r["a"])(n.face,c["a"].BACK)},this.lineWidth=Object(r["a"])(t.lineWidth,1),this.polygonOffset={enabled:Object(r["a"])(u.enabled,!1),factor:Object(r["a"])(u.factor,0),units:Object(r["a"])(u.units,0)},this.scissorTest={enabled:Object(r["a"])(E.enabled,!1),rectangle:a["a"].clone(p)},this.depthRange={near:Object(r["a"])(S.near,0),far:Object(r["a"])(S.far,1)},this.depthTest={enabled:Object(r["a"])(g.enabled,!1),func:Object(r["a"])(g.func,c["a"].LESS)},this.colorMask={red:Object(r["a"])(N.red,!0),green:Object(r["a"])(N.green,!0),blue:Object(r["a"])(N.blue,!0),alpha:Object(r["a"])(N.alpha,!0)},this.depthMask=Object(r["a"])(t.depthMask,!0),this.stencilMask=Object(r["a"])(t.stencilMask,-1),this.blending={enabled:Object(r["a"])(R.enabled,!1),color:new i["a"](Object(r["a"])(A.red,0),Object(r["a"])(A.green,0),Object(r["a"])(A.blue,0),Object(r["a"])(A.alpha,0)),equationRgb:Object(r["a"])(R.equationRgb,c["a"].FUNC_ADD),equationAlpha:Object(r["a"])(R.equationAlpha,c["a"].FUNC_ADD),functionSourceRgb:Object(r["a"])(R.functionSourceRgb,c["a"].ONE),functionSourceAlpha:Object(r["a"])(R.functionSourceAlpha,c["a"].ONE),functionDestinationRgb:Object(r["a"])(R.functionDestinationRgb,c["a"].ZERO),functionDestinationAlpha:Object(r["a"])(R.functionDestinationAlpha,c["a"].ZERO)},this.stencilTest={enabled:Object(r["a"])(F.enabled,!1),frontFunction:Object(r["a"])(F.frontFunction,c["a"].ALWAYS),backFunction:Object(r["a"])(F.backFunction,c["a"].ALWAYS),reference:Object(r["a"])(F.reference,0),mask:Object(r["a"])(F.mask,-1),frontOperation:{fail:Object(r["a"])(w.fail,c["a"].KEEP),zFail:Object(r["a"])(w.zFail,c["a"].KEEP),zPass:Object(r["a"])(w.zPass,c["a"].KEEP)},backOperation:{fail:Object(r["a"])(I.fail,c["a"].KEEP),zFail:Object(r["a"])(I.zFail,c["a"].KEEP),zPass:Object(r["a"])(I.zPass,c["a"].KEEP)}},this.sampleCoverage={enabled:Object(r["a"])(m.enabled,!1),value:Object(r["a"])(m.value,1),invert:Object(r["a"])(m.invert,!1)},this.viewport=Object(o["a"])(C)?new a["a"](C.x,C.y,C.width,C.height):void 0,this.lineWidth<f["a"].minimumAliasedLineWidth||this.lineWidth>f["a"].maximumAliasedLineWidth)throw new s["a"]("renderState.lineWidth is out of range.  Check minimumAliasedLineWidth and maximumAliasedLineWidth.");if(!l["a"].validate(this.frontFace))throw new s["a"]("Invalid renderState.frontFace.");if(!b(this.cull.face))throw new s["a"]("Invalid renderState.cull.face.");if(this.scissorTest.rectangle.width<0||this.scissorTest.rectangle.height<0)throw new s["a"]("renderState.scissorTest.rectangle.width and renderState.scissorTest.rectangle.height must be greater than or equal to zero.");if(this.depthRange.near>this.depthRange.far)throw new s["a"]("renderState.depthRange.near can not be greater than renderState.depthRange.far.");if(this.depthRange.near<0)throw new s["a"]("renderState.depthRange.near must be greater than or equal to zero.");if(this.depthRange.far>1)throw new s["a"]("renderState.depthRange.far must be less than or equal to one.");if(!_(this.depthTest.func))throw new s["a"]("Invalid renderState.depthTest.func.");if(this.blending.color.red<0||this.blending.color.red>1||this.blending.color.green<0||this.blending.color.green>1||this.blending.color.blue<0||this.blending.color.blue>1||this.blending.color.alpha<0||this.blending.color.alpha>1)throw new s["a"]("renderState.blending.color components must be greater than or equal to zero and less than or equal to one.");if(!d(this.blending.equationRgb))throw new s["a"]("Invalid renderState.blending.equationRgb.");if(!d(this.blending.equationAlpha))throw new s["a"]("Invalid renderState.blending.equationAlpha.");if(!h(this.blending.functionSourceRgb))throw new s["a"]("Invalid renderState.blending.functionSourceRgb.");if(!h(this.blending.functionSourceAlpha))throw new s["a"]("Invalid renderState.blending.functionSourceAlpha.");if(!h(this.blending.functionDestinationRgb))throw new s["a"]("Invalid renderState.blending.functionDestinationRgb.");if(!h(this.blending.functionDestinationAlpha))throw new s["a"]("Invalid renderState.blending.functionDestinationAlpha.");if(!O(this.stencilTest.frontFunction))throw new s["a"]("Invalid renderState.stencilTest.frontFunction.");if(!O(this.stencilTest.backFunction))throw new s["a"]("Invalid renderState.stencilTest.backFunction.");if(!T(this.stencilTest.frontOperation.fail))throw new s["a"]("Invalid renderState.stencilTest.frontOperation.fail.");if(!T(this.stencilTest.frontOperation.zFail))throw new s["a"]("Invalid renderState.stencilTest.frontOperation.zFail.");if(!T(this.stencilTest.frontOperation.zPass))throw new s["a"]("Invalid renderState.stencilTest.frontOperation.zPass.");if(!T(this.stencilTest.backOperation.fail))throw new s["a"]("Invalid renderState.stencilTest.backOperation.fail.");if(!T(this.stencilTest.backOperation.zFail))throw new s["a"]("Invalid renderState.stencilTest.backOperation.zFail.");if(!T(this.stencilTest.backOperation.zPass))throw new s["a"]("Invalid renderState.stencilTest.backOperation.zPass.");if(Object(o["a"])(this.viewport)){if(this.viewport.width<0)throw new s["a"]("renderState.viewport.width must be greater than or equal to zero.");if(this.viewport.height<0)throw new s["a"]("renderState.viewport.height must be greater than or equal to zero.");if(this.viewport.width>f["a"].maximumViewportWidth)throw new s["a"](`renderState.viewport.width must be less than or equal to the maximum viewport width (${f["a"].maximumViewportWidth.toString()}).  Check maximumViewportWidth.`);if(this.viewport.height>f["a"].maximumViewportHeight)throw new s["a"](`renderState.viewport.height must be less than or equal to the maximum viewport height (${f["a"].maximumViewportHeight.toString()}).  Check maximumViewportHeight.`)}this.id=0,this._applyFunctions=[]}let p=0,S={};function g(e,t,n){n?e.enable(t):e.disable(t)}function N(e,t){e.frontFace(t.frontFace)}function R(e,t){const n=t.cull,a=n.enabled;g(e,e.CULL_FACE,a),a&&e.cullFace(n.face)}function A(e,t){e.lineWidth(t.lineWidth)}function F(e,t){const n=t.polygonOffset,a=n.enabled;g(e,e.POLYGON_OFFSET_FILL,a),a&&e.polygonOffset(n.factor,n.units)}function w(e,t,n){const a=t.scissorTest,i=Object(o["a"])(n.scissorTest)?n.scissorTest.enabled:a.enabled;if(g(e,e.SCISSOR_TEST,i),i){const t=Object(o["a"])(n.scissorTest)?n.scissorTest.rectangle:a.rectangle;e.scissor(t.x,t.y,t.width,t.height)}}function I(e,t){const n=t.depthRange;e.depthRange(n.near,n.far)}function m(e,t){const n=t.depthTest,a=n.enabled;g(e,e.DEPTH_TEST,a),a&&e.depthFunc(n.func)}function C(e,t){const n=t.colorMask;e.colorMask(n.red,n.green,n.blue,n.alpha)}function D(e,t){e.depthMask(t.depthMask)}function j(e,t){e.stencilMask(t.stencilMask)}function v(e,t){e.blendColor(t.red,t.green,t.blue,t.alpha)}function L(e,t,n){const a=t.blending,i=Object(o["a"])(n.blendingEnabled)?n.blendingEnabled:a.enabled;g(e,e.BLEND,i),i&&(v(e,a.color),e.blendEquationSeparate(a.equationRgb,a.equationAlpha),e.blendFuncSeparate(a.functionSourceRgb,a.functionDestinationRgb,a.functionSourceAlpha,a.functionDestinationAlpha))}function U(e,t){const n=t.stencilTest,a=n.enabled;if(g(e,e.STENCIL_TEST,a),a){const t=n.frontFunction,a=n.backFunction,i=n.reference,r=n.mask;e.stencilFunc(t,i,r),e.stencilFuncSeparate(e.BACK,a,i,r),e.stencilFuncSeparate(e.FRONT,t,i,r);const o=n.frontOperation,s=o.fail,c=o.zFail,l=o.zPass;e.stencilOpSeparate(e.FRONT,s,c,l);const f=n.backOperation,u=f.fail,d=f.zFail,h=f.zPass;e.stencilOpSeparate(e.BACK,u,d,h)}}function k(e,t){const n=t.sampleCoverage,a=n.enabled;g(e,e.SAMPLE_COVERAGE,a),a&&e.sampleCoverage(n.value,n.invert)}E.fromCache=function(e){const t=JSON.stringify(e);let n=S[t];if(Object(o["a"])(n))return++n.referenceCount,n.state;let a=new E(e);const i=JSON.stringify(a);return n=S[i],Object(o["a"])(n)||(a.id=p++,a=Object(u["a"])(a),n={referenceCount:0,state:a},S[i]=n),++n.referenceCount,S[t]={referenceCount:1,state:n.state},n.state},E.removeFromCache=function(e){const t=new E(e),n=JSON.stringify(t),a=S[n],i=JSON.stringify(e),r=S[i];Object(o["a"])(r)&&(--r.referenceCount,0===r.referenceCount&&(delete S[i],Object(o["a"])(a)&&--a.referenceCount)),Object(o["a"])(a)&&0===a.referenceCount&&delete S[n]},E.getCache=function(){return S},E.clearCache=function(){S={}};const G=new a["a"];function B(e,t,n){let a=Object(r["a"])(t.viewport,n.viewport);Object(o["a"])(a)||(a=G,a.width=n.context.drawingBufferWidth,a.height=n.context.drawingBufferHeight),n.context.uniformState.viewport=a,e.viewport(a.x,a.y,a.width,a.height)}function M(e,t){const n=[];return e.frontFace!==t.frontFace&&n.push(N),e.cull.enabled===t.cull.enabled&&e.cull.face===t.cull.face||n.push(R),e.lineWidth!==t.lineWidth&&n.push(A),e.polygonOffset.enabled===t.polygonOffset.enabled&&e.polygonOffset.factor===t.polygonOffset.factor&&e.polygonOffset.units===t.polygonOffset.units||n.push(F),e.depthRange.near===t.depthRange.near&&e.depthRange.far===t.depthRange.far||n.push(I),e.depthTest.enabled===t.depthTest.enabled&&e.depthTest.func===t.depthTest.func||n.push(m),e.colorMask.red===t.colorMask.red&&e.colorMask.green===t.colorMask.green&&e.colorMask.blue===t.colorMask.blue&&e.colorMask.alpha===t.colorMask.alpha||n.push(C),e.depthMask!==t.depthMask&&n.push(D),e.stencilMask!==t.stencilMask&&n.push(j),e.stencilTest.enabled===t.stencilTest.enabled&&e.stencilTest.frontFunction===t.stencilTest.frontFunction&&e.stencilTest.backFunction===t.stencilTest.backFunction&&e.stencilTest.reference===t.stencilTest.reference&&e.stencilTest.mask===t.stencilTest.mask&&e.stencilTest.frontOperation.fail===t.stencilTest.frontOperation.fail&&e.stencilTest.frontOperation.zFail===t.stencilTest.frontOperation.zFail&&e.stencilTest.backOperation.fail===t.stencilTest.backOperation.fail&&e.stencilTest.backOperation.zFail===t.stencilTest.backOperation.zFail&&e.stencilTest.backOperation.zPass===t.stencilTest.backOperation.zPass||n.push(U),e.sampleCoverage.enabled===t.sampleCoverage.enabled&&e.sampleCoverage.value===t.sampleCoverage.value&&e.sampleCoverage.invert===t.sampleCoverage.invert||n.push(k),n}E.apply=function(e,t,n){N(e,t),R(e,t),A(e,t),F(e,t),I(e,t),m(e,t),C(e,t),D(e,t),j(e,t),U(e,t),k(e,t),w(e,t,n),L(e,t,n),B(e,t,n)},E.partialApply=function(e,t,n,a,i,r){if(t!==n){let a=n._applyFunctions[t.id];Object(o["a"])(a)||(a=M(t,n),n._applyFunctions[t.id]=a);const i=a.length;for(let t=0;t<i;++t)a[t](e,n)}const s=Object(o["a"])(a.scissorTest)?a.scissorTest:t.scissorTest,c=Object(o["a"])(i.scissorTest)?i.scissorTest:n.scissorTest;(s!==c||r)&&w(e,n,i);const l=Object(o["a"])(a.blendingEnabled)?a.blendingEnabled:t.blending.enabled,f=Object(o["a"])(i.blendingEnabled)?i.blendingEnabled:n.blending.enabled;(l!==f||f&&t.blending!==n.blending)&&L(e,n,i),t===n&&a===i&&a.context===i.context||B(e,n,i)},E.getState=function(e){if(!Object(o["a"])(e))throw new s["a"]("renderState is required.");return{frontFace:e.frontFace,cull:{enabled:e.cull.enabled,face:e.cull.face},lineWidth:e.lineWidth,polygonOffset:{enabled:e.polygonOffset.enabled,factor:e.polygonOffset.factor,units:e.polygonOffset.units},scissorTest:{enabled:e.scissorTest.enabled,rectangle:a["a"].clone(e.scissorTest.rectangle)},depthRange:{near:e.depthRange.near,far:e.depthRange.far},depthTest:{enabled:e.depthTest.enabled,func:e.depthTest.func},colorMask:{red:e.colorMask.red,green:e.colorMask.green,blue:e.colorMask.blue,alpha:e.colorMask.alpha},depthMask:e.depthMask,stencilMask:e.stencilMask,blending:{enabled:e.blending.enabled,color:i["a"].clone(e.blending.color),equationRgb:e.blending.equationRgb,equationAlpha:e.blending.equationAlpha,functionSourceRgb:e.blending.functionSourceRgb,functionSourceAlpha:e.blending.functionSourceAlpha,functionDestinationRgb:e.blending.functionDestinationRgb,functionDestinationAlpha:e.blending.functionDestinationAlpha},stencilTest:{enabled:e.stencilTest.enabled,frontFunction:e.stencilTest.frontFunction,backFunction:e.stencilTest.backFunction,reference:e.stencilTest.reference,mask:e.stencilTest.mask,frontOperation:{fail:e.stencilTest.frontOperation.fail,zFail:e.stencilTest.frontOperation.zFail,zPass:e.stencilTest.frontOperation.zPass},backOperation:{fail:e.stencilTest.backOperation.fail,zFail:e.stencilTest.backOperation.zFail,zPass:e.stencilTest.backOperation.zPass}},sampleCoverage:{enabled:e.sampleCoverage.enabled,value:e.sampleCoverage.value,invert:e.sampleCoverage.invert},viewport:Object(o["a"])(e.viewport)?a["a"].clone(e.viewport):void 0}},t["a"]=E},"51f2":function(e,t,n){"use strict";const a={ENVIRONMENT:0,COMPUTE:1,GLOBE:2,TERRAIN_CLASSIFICATION:3,CESIUM_3D_TILE:4,CESIUM_3D_TILE_CLASSIFICATION:5,CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW:6,OPAQUE:7,TRANSLUCENT:8,OVERLAY:9,NUMBER_OF_PASSES:10};t["a"]=Object.freeze(a)},"932f":function(e,t,n){"use strict";var a=n("ae9b"),i=n("1a5d"),r=n("c937"),o=n("21b7"),s=n("e2a6"),c=n("2341"),l=n("acf9");function f(e){e=Object(i["a"])(e,i["a"].EMPTY_OBJECT),a["a"].defined("options.context",e.context);const t=e.context,n=t._gl,o=c["a"].maximumRenderbufferSize,f=Object(i["a"])(e.format,l["a"].RGBA4),u=Object(r["a"])(e.width)?e.width:n.drawingBufferWidth,d=Object(r["a"])(e.height)?e.height:n.drawingBufferHeight,h=Object(i["a"])(e.numSamples,1);if(!l["a"].validate(f))throw new s["a"]("Invalid format.");if(a["a"].typeOf.number.greaterThan("width",u,0),u>o)throw new s["a"](`Width must be less than or equal to the maximum renderbuffer size (${o}).  Check maximumRenderbufferSize.`);if(a["a"].typeOf.number.greaterThan("height",d,0),d>o)throw new s["a"](`Height must be less than or equal to the maximum renderbuffer size (${o}).  Check maximumRenderbufferSize.`);this._gl=n,this._format=f,this._width=u,this._height=d,this._renderbuffer=this._gl.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,this._renderbuffer),h>1?n.renderbufferStorageMultisample(n.RENDERBUFFER,h,f,u,d):n.renderbufferStorage(n.RENDERBUFFER,f,u,d),n.bindRenderbuffer(n.RENDERBUFFER,null)}Object.defineProperties(f.prototype,{format:{get:function(){return this._format}},width:{get:function(){return this._width}},height:{get:function(){return this._height}}}),f.prototype._getRenderbuffer=function(){return this._renderbuffer},f.prototype.isDestroyed=function(){return!1},f.prototype.destroy=function(){return this._gl.deleteRenderbuffer(this._renderbuffer),Object(o["a"])(this)},t["a"]=f},"999a":function(e,t,n){"use strict";var a=n("cedf");const i={DONT_CARE:a["a"].DONT_CARE,FASTEST:a["a"].FASTEST,NICEST:a["a"].NICEST,validate:function(e){return e===i.DONT_CARE||e===i.FASTEST||e===i.NICEST}};t["a"]=Object.freeze(i)},acf9:function(e,t,n){"use strict";var a=n("cedf");const i={RGBA4:a["a"].RGBA4,RGBA8:a["a"].RGBA8,RGBA16F:a["a"].RGBA16F,RGBA32F:a["a"].RGBA32F,RGB5_A1:a["a"].RGB5_A1,RGB565:a["a"].RGB565,DEPTH_COMPONENT16:a["a"].DEPTH_COMPONENT16,STENCIL_INDEX8:a["a"].STENCIL_INDEX8,DEPTH_STENCIL:a["a"].DEPTH_STENCIL,DEPTH24_STENCIL8:a["a"].DEPTH24_STENCIL8,validate:function(e){return e===i.RGBA4||e===i.RGBA8||e===i.RGBA16F||e===i.RGBA32F||e===i.RGB5_A1||e===i.RGB565||e===i.DEPTH_COMPONENT16||e===i.STENCIL_INDEX8||e===i.DEPTH_STENCIL||e===i.DEPTH24_STENCIL8},getColorFormat:function(e){return e===a["a"].FLOAT?i.RGBA32F:e===a["a"].HALF_FLOAT_OES?i.RGBA16F:i.RGBA8}};t["a"]=Object.freeze(i)}}]);