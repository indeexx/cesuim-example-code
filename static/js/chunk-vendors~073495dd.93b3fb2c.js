(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~073495dd"],{d7a5:function(t,i,e){"use strict";var o=e("1924"),s=e("dde0"),n=e("1a5d"),a=e("c937"),r=e("21b7"),l=e("e107"),d=e("de6f"),p=e("d767"),c=e("722e"),u=e("eb88"),h=e("6f7c"),m=e("f9d8"),y=e("46bd");function b(t){t=Object(n["a"])(t,n["a"].EMPTY_OBJECT);let i=t.textureUrl;Object(a["a"])(i)||(i=Object(o["a"])("Assets/Textures/moonSmall.jpg")),this.show=Object(n["a"])(t.show,!0),this.textureUrl=i,this._ellipsoid=Object(n["a"])(t.ellipsoid,l["a"].MOON),this.onlySunLighting=Object(n["a"])(t.onlySunLighting,!0),this._ellipsoidPrimitive=new m["a"]({radii:this.ellipsoid.radii,material:y["a"].fromType(y["a"].ImageType),depthTestEnabled:!1,_owner:this}),this._ellipsoidPrimitive.material.translucent=!1,this._axes=new d["a"]}Object.defineProperties(b.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}});const f=new p["a"],w=new p["a"],g=new s["a"],O=[];b.prototype.update=function(t){if(!this.show)return;const i=this._ellipsoidPrimitive;i.material.uniforms.image=this.textureUrl,i.onlySunLighting=this.onlySunLighting;const e=t.time;Object(a["a"])(h["a"].computeIcrfToFixedMatrix(e,f))||h["a"].computeTemeToPseudoFixedMatrix(e,f);const o=this._axes.evaluate(e,w);p["a"].transpose(o,o),p["a"].multiply(f,o,o);const s=u["a"].computeMoonPositionInEarthInertialFrame(e,g);p["a"].multiplyByVector(f,s,s),c["a"].fromRotationTranslation(o,s,i.modelMatrix);const n=t.commandList;return t.commandList=O,O.length=0,i.update(t),t.commandList=n,1===O.length?O[0]:void 0},b.prototype.isDestroyed=function(){return!1},b.prototype.destroy=function(){return this._ellipsoidPrimitive=this._ellipsoidPrimitive&&this._ellipsoidPrimitive.destroy(),Object(r["a"])(this)},i["a"]=b}}]);