(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~c5295435"],{"29cc":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var i=a("1a5d");function o(e){e=Object(i["a"])(e,i["a"].EMPTY_OBJECT),this.webp=Object(i["a"])(e.webp,!1),this.basis=Object(i["a"])(e.basis,!1)}},"2ee1":function(e,t,a){"use strict";var i=a("cf26"),o=a("366c"),r=a("8656"),s=a("85b2"),n=a("dde0"),h=a("6b82"),c=a("8d54"),u=a("c937"),d=a("e2a6"),l=a("b869"),f=a("b8b5"),g=a("22d6"),m=a("a5ef"),w=a("4a63"),T=a("30e6"),x=a("325c"),b=a("8d18"),_=a("5be5"),p=a("761d"),S=a("b911");function y(e){this.tile=e,this.frameLastUpdated=void 0,this.westMeshes=[],this.westTiles=[],this.southMeshes=[],this.southTiles=[],this.eastMeshes=[],this.eastTiles=[],this.northMeshes=[],this.northTiles=[],this.southwestMesh=void 0,this.southwestTile=void 0,this.southeastMesh=void 0,this.southeastTile=void 0,this.northwestMesh=void 0,this.northwestTile=void 0,this.northeastMesh=void 0,this.northeastTile=void 0,this.changedThisFrame=!0,this.visitedFrame=void 0,this.enqueuedFrame=void 0,this.mesh=void 0,this.vertexArray=void 0,this.waterMaskTexture=void 0,this.waterMaskTranslationAndScale=new h["a"]}y.prototype.update=function(e,t,a){this.changedThisFrame&&(q(e,t,this.tile,a),this.changedThisFrame=!1)},y.prototype.destroy=function(e){this._destroyVertexArray(e),Object(u["a"])(this.waterMaskTexture)&&(--this.waterMaskTexture.referenceCount,0===this.waterMaskTexture.referenceCount&&this.waterMaskTexture.destroy(),this.waterMaskTexture=void 0)},y.prototype._destroyVertexArray=function(e){Object(u["a"])(this.vertexArray)&&(Object(u["a"])(e)?e.push(this.vertexArray):p["a"]._freeVertexArray(this.vertexArray),this.vertexArray=void 0)};const O=new m["a"];function E(e,t,a,i,o,r,s,n,h){if(void 0===i)return;let c=i;while(c&&(c._lastSelectionResultFrame!==o||S["a"].wasKicked(c._lastSelectionResult)||S["a"].originalResult(c._lastSelectionResult)===S["a"].CULLED)){if(s)return;const e=c.parent;if(r>=b["a"].NORTHWEST&&void 0!==e)switch(r){case b["a"].NORTHWEST:c=c===e.northwestChild?e:void 0;break;case b["a"].NORTHEAST:c=c===e.northeastChild?e:void 0;break;case b["a"].SOUTHWEST:c=c===e.southwestChild?e:void 0;break;case b["a"].SOUTHEAST:c=c===e.southeastChild?e:void 0;break}else c=e}if(void 0!==c)if(c._lastSelectionResult!==S["a"].RENDERED){if(S["a"].originalResult(i._lastSelectionResult)!==S["a"].CULLED)switch(r){case b["a"].WEST:E(e,t,a,i.northwestChild,o,r,!0,n,h),E(e,t,a,i.southwestChild,o,r,!0,n,h);break;case b["a"].EAST:E(e,t,a,i.southeastChild,o,r,!0,n,h),E(e,t,a,i.northeastChild,o,r,!0,n,h);break;case b["a"].SOUTH:E(e,t,a,i.southwestChild,o,r,!0,n,h),E(e,t,a,i.southeastChild,o,r,!0,n,h);break;case b["a"].NORTH:E(e,t,a,i.northeastChild,o,r,!0,n,h),E(e,t,a,i.northwestChild,o,r,!0,n,h);break;case b["a"].NORTHWEST:E(e,t,a,i.northwestChild,o,r,!0,n,h);break;case b["a"].NORTHEAST:E(e,t,a,i.northeastChild,o,r,!0,n,h);break;case b["a"].SOUTHWEST:E(e,t,a,i.southwestChild,o,r,!0,n,h);break;case b["a"].SOUTHEAST:E(e,t,a,i.southeastChild,o,r,!0,n,h);break;default:throw new d["a"]("Invalid edge")}}else{if(Object(u["a"])(c.data.vertexArray))return;M(e,t,a,c,r,o,n,h)}}function M(e,t,a,i,o,r,s,n){const h=i.data;if(void 0===h.fill)h.fill=new y(i);else if(h.fill.visitedFrame===r)return;h.fill.enqueuedFrame!==r&&(h.fill.enqueuedFrame=r,h.fill.changedThisFrame=!1,s.enqueue(i)),v(e,t,a,i,o,n)}function v(e,t,a,i,o,r){const s=i.data.fill;let n;const h=a.data.fill;let c,d,l,g,m,w;switch(Object(u["a"])(h)?(h.visitedFrame=t.frameNumber,h.changedThisFrame&&(q(e,t,a,r),h.changedThisFrame=!1),n=a.data.fill.mesh):n=a.data.mesh,o){case b["a"].WEST:c=s.westMeshes,d=s.westTiles;break;case b["a"].SOUTH:c=s.southMeshes,d=s.southTiles;break;case b["a"].EAST:c=s.eastMeshes,d=s.eastTiles;break;case b["a"].NORTH:c=s.northMeshes,d=s.northTiles;break;case b["a"].NORTHWEST:return s.changedThisFrame=s.changedThisFrame||s.northwestMesh!==n,s.northwestMesh=n,void(s.northwestTile=a);case b["a"].NORTHEAST:return s.changedThisFrame=s.changedThisFrame||s.northeastMesh!==n,s.northeastMesh=n,void(s.northeastTile=a);case b["a"].SOUTHWEST:return s.changedThisFrame=s.changedThisFrame||s.southwestMesh!==n,s.southwestMesh=n,void(s.southwestTile=a);case b["a"].SOUTHEAST:return s.changedThisFrame=s.changedThisFrame||s.southeastMesh!==n,s.southeastMesh=n,void(s.southeastTile=a)}if(a.level<=i.level)return s.changedThisFrame=s.changedThisFrame||c[0]!==n||1!==c.length,c[0]=n,d[0]=a,c.length=1,void(d.length=1);const T=a.rectangle;let x;const _=i.rectangle;switch(o){case b["a"].WEST:for(x=(_.north-_.south)*f["a"].EPSILON5,l=0;l<d.length;++l)if(m=d[l],w=m.rectangle,f["a"].greaterThan(T.north,w.south,x))break;for(g=l;g<d.length;++g)if(m=d[g],w=m.rectangle,f["a"].greaterThanOrEquals(T.south,w.north,x))break;break;case b["a"].SOUTH:for(x=(_.east-_.west)*f["a"].EPSILON5,l=0;l<d.length;++l)if(m=d[l],w=m.rectangle,f["a"].lessThan(T.west,w.east,x))break;for(g=l;g<d.length;++g)if(m=d[g],w=m.rectangle,f["a"].lessThanOrEquals(T.east,w.west,x))break;break;case b["a"].EAST:for(x=(_.north-_.south)*f["a"].EPSILON5,l=0;l<d.length;++l)if(m=d[l],w=m.rectangle,f["a"].lessThan(T.south,w.north,x))break;for(g=l;g<d.length;++g)if(m=d[g],w=m.rectangle,f["a"].lessThanOrEquals(T.north,w.south,x))break;break;case b["a"].NORTH:for(x=(_.east-_.west)*f["a"].EPSILON5,l=0;l<d.length;++l)if(m=d[l],w=m.rectangle,f["a"].greaterThan(T.east,w.west,x))break;for(g=l;g<d.length;++g)if(m=d[g],w=m.rectangle,f["a"].greaterThanOrEquals(T.west,w.east,x))break;break}g-l===1?(s.changedThisFrame=s.changedThisFrame||c[l]!==n,c[l]=n,d[l]=a):(s.changedThisFrame=!0,c.splice(l,g-l,n),d.splice(l,g-l,a))}y.updateFillTiles=function(e,t,a,i){const o=e._quadtree,r=o._levelZeroTiles,s=o._lastSelectionFrameNumber,n=O;n.clear();for(let c=0;c<t.length;++c){const e=t[c];Object(u["a"])(e.data.vertexArray)&&n.enqueue(t[c])}let h=n.dequeue();while(void 0!==h){const t=h.findTileToWest(r),o=h.findTileToSouth(r),c=h.findTileToEast(r),u=h.findTileToNorth(r);E(e,a,h,t,s,b["a"].EAST,!1,n,i),E(e,a,h,o,s,b["a"].NORTH,!1,n,i),E(e,a,h,c,s,b["a"].WEST,!1,n,i),E(e,a,h,u,s,b["a"].SOUTH,!1,n,i);const d=t.findTileToNorth(r),l=t.findTileToSouth(r),f=c.findTileToNorth(r),g=c.findTileToSouth(r);E(e,a,h,d,s,b["a"].SOUTHEAST,!1,n,i),E(e,a,h,f,s,b["a"].SOUTHWEST,!1,n,i),E(e,a,h,l,s,b["a"].NORTHEAST,!1,n,i),E(e,a,h,g,s,b["a"].NORTHWEST,!1,n,i),h=n.dequeue()}};const N=new c["a"],A=new c["a"],C=new n["a"],I=new n["a"],R=new s["a"],H=new s["a"],L=new s["a"];function j(){this.height=0,this.encodedNormal=new s["a"]}function W(e,t,a,i,o,r,s,n,h){if(Object(u["a"])(o))return o;let c;if(Object(u["a"])(r)&&Object(u["a"])(s))c=.5*(r.height+s.height);else if(Object(u["a"])(r))c=r.height;else if(Object(u["a"])(s))c=s.height;else if(Object(u["a"])(n))c=n.height;else{const t=e.tile.data,a=t.tileBoundingRegion;let i=0,o=0;Object(u["a"])(a)&&(i=a.minimumHeight,o=a.maximumHeight),c=.5*(i+o)}return ee(e,t,a,i,c,h),h}const F={minimumHeight:0,maximumHeight:0},P=new n["a"],k=new j,U=new j,D=new j,B=new j,z="undefined"!==typeof Uint8Array?new Uint8Array(81):void 0,V={tilingScheme:void 0,x:0,y:0,level:0,exaggeration:1,exaggerationRelativeHeight:0};function q(e,t,a,o){p["a"].initialize(a,e.terrainProvider,e._imageryLayers);const n=a.data,h=n.fill,c=a.rectangle,d=t.terrainExaggeration,f=t.terrainExaggerationRelativeHeight,m=1!==d,S=a.tilingScheme.ellipsoid;let y=te(h,S,0,1,h.northwestTile,h.northwestMesh,h.northTiles,h.northMeshes,h.westTiles,h.westMeshes,D),O=te(h,S,0,0,h.southwestTile,h.southwestMesh,h.westTiles,h.westMeshes,h.southTiles,h.southMeshes,k),E=te(h,S,1,0,h.southeastTile,h.southeastMesh,h.southTiles,h.southMeshes,h.eastTiles,h.eastMeshes,U),M=te(h,S,1,1,h.northeastTile,h.northeastMesh,h.eastTiles,h.eastMeshes,h.northTiles,h.northMeshes,B);y=W(h,S,0,1,y,O,M,E,D),O=W(h,S,0,0,O,y,E,M,k),E=W(h,S,1,1,E,O,M,y,U),M=W(h,S,1,1,M,E,y,O,B);const v=O.height,C=E.height,H=y.height,j=M.height;let q=Math.min(v,C,H,j),Y=Math.max(v,C,H,j);const J=.5*(q+Y);let Z,X;const K=e.getLevelMaximumGeometricError(a.level),Q=S.maximumRadius-K;let $=4*Math.acos(Q/S.maximumRadius);if($*=1.5,c.width>$&&Y-q<=K){const e=new l["a"]({width:9,height:9,buffer:z,structure:{heightOffset:Y}}),t=V;t.tilingScheme=a.tilingScheme,t.x=a.x,t.y=a.y,t.level=a.level,t.exaggeration=d,t.exaggerationRelativeHeight=f,h.mesh=e._createMeshSync(t)}else{const t=m,o=w["a"].center(c,A);o.height=J;const n=S.cartographicToCartesian(o,P),u=new T["a"](n,void 0,void 0,void 0,void 0,!0,!0,t,d,f);let l,p=5;for(l=h.westMeshes,Z=0,X=l.length;Z<X;++Z)p+=l[Z].eastIndicesNorthToSouth.length;for(l=h.southMeshes,Z=0,X=l.length;Z<X;++Z)p+=l[Z].northIndicesWestToEast.length;for(l=h.eastMeshes,Z=0,X=l.length;Z<X;++Z)p+=l[Z].westIndicesSouthToNorth.length;for(l=h.northMeshes,Z=0,X=l.length;Z<X;++Z)p+=l[Z].southIndicesEastToWest.length;const v=F;v.minimumHeight=q,v.maximumHeight=Y;const C=u.stride;let H=new Float32Array(p*C),j=0;const W=j;j=G(S,c,u,H,j,0,1,y.height,y.encodedNormal,1,v),j=ie(h,S,u,H,j,h.westTiles,h.westMeshes,b["a"].EAST,v);const k=j;j=G(S,c,u,H,j,0,0,O.height,O.encodedNormal,0,v),j=ie(h,S,u,H,j,h.southTiles,h.southMeshes,b["a"].NORTH,v);const U=j;j=G(S,c,u,H,j,1,0,E.height,E.encodedNormal,0,v),j=ie(h,S,u,H,j,h.eastTiles,h.eastMeshes,b["a"].WEST,v);const D=j;j=G(S,c,u,H,j,1,1,M.height,M.encodedNormal,1,v),j=ie(h,S,u,H,j,h.northTiles,h.northMeshes,b["a"].SOUTH,v),q=v.minimumHeight,Y=v.maximumHeight;const B=g["a"].fromRectangle(c,q,Y,a.tilingScheme.ellipsoid),z=_["a"].geodeticLatitudeToMercatorAngle(c.south),V=1/(_["a"].geodeticLatitudeToMercatorAngle(c.north)-z),K=(_["a"].geodeticLatitudeToMercatorAngle(o.latitude)-z)*V,Q=S.geodeticSurfaceNormalCartographic(N,I),$=i["a"].octEncode(Q,R),ee=j;u.encode(H,j*C,B.center,s["a"].fromElements(.5,.5,L),J,$,K,Q),++j;const te=j,ae=te<256?1:2,oe=3*(te-1),re=oe*ae,se=(H.length-te*C)*Float32Array.BYTES_PER_ELEMENT;let ne;if(se>=re){const e=te*C*Float32Array.BYTES_PER_ELEMENT;ne=te<256?new Uint8Array(H.buffer,e,oe):new Uint16Array(H.buffer,e,oe)}else ne=te<256?new Uint8Array(oe):new Uint16Array(oe);H=new Float32Array(H.buffer,0,te*C);let he=0;for(Z=0;Z<te-2;++Z)ne[he++]=ee,ne[he++]=Z,ne[he++]=Z+1;ne[he++]=ee,ne[he++]=Z,ne[he++]=0;const ue=[];for(Z=k;Z>=W;--Z)ue.push(Z);const de=[];for(Z=U;Z>=k;--Z)de.push(Z);const le=[];for(Z=D;Z>=U;--Z)le.push(Z);const fe=[];for(fe.push(0),Z=ee-1;Z>=D;--Z)fe.push(Z);h.mesh=new x["a"](u.center,H,ne,oe,te,q,Y,r["a"].fromOrientedBoundingBox(B),ce(e,B.center,c,q,Y),u.stride,B,u,ue,de,le,fe)}const ee=t.context;h._destroyVertexArray(o),h.vertexArray=p["a"]._createVertexArrayForMesh(ee,h.mesh),n.processImagery(a,e.terrainProvider,t,!0);const ae=h.waterMaskTexture;if(h.waterMaskTexture=void 0,e.terrainProvider.hasWaterMask){const e=n._findAncestorTileWithTerrainData(a);Object(u["a"])(e)&&Object(u["a"])(e.data.waterMaskTexture)&&(h.waterMaskTexture=e.data.waterMaskTexture,++h.waterMaskTexture.referenceCount,n._computeWaterMaskTranslationAndScale(a,e,h.waterMaskTranslationAndScale))}Object(u["a"])(ae)&&(--ae.referenceCount,0===ae.referenceCount&&ae.destroy())}function G(e,t,a,i,o,r,s,n,h,c,u){const d=N;d.longitude=f["a"].lerp(t.west,t.east,r),d.latitude=f["a"].lerp(t.south,t.north,s),d.height=n;const l=e.cartographicToCartesian(d,C);let g;a.hasGeodeticSurfaceNormals&&(g=e.geodeticSurfaceNormal(l,I));const m=H;return m.x=r,m.y=s,a.encode(i,o*a.stride,l,m,n,h,c,g),u.minimumHeight=Math.min(u.minimumHeight,n),u.maximumHeight=Math.max(u.maximumHeight,n),o+1}const Y=new w["a"];function J(e,t,a,i){let o=e.rectangle;const r=t.rectangle;0===t.x&&1===a.x&&e.x===e.tilingScheme.getNumberOfXTilesAtLevel(e.level)-1?(o=w["a"].clone(e.rectangle,Y),o.west-=f["a"].TWO_PI,o.east-=f["a"].TWO_PI):0===e.x&&0===a.x&&t.x===t.tilingScheme.getNumberOfXTilesAtLevel(t.level)-1&&(o=w["a"].clone(e.rectangle,Y),o.west+=f["a"].TWO_PI,o.east+=f["a"].TWO_PI);const s=o.east-o.west,n=(r.west-o.west)/s,h=(r.east-o.west)/s,c=o.north-o.south,u=(r.south-o.south)/c,d=(r.north-o.south)/c;let l=(a.x-n)/(h-n),g=(a.y-u)/(d-u);return Math.abs(l)<Math.EPSILON5?l=0:Math.abs(l-1)<Math.EPSILON5&&(l=1),Math.abs(g)<Math.EPSILON5?g=0:Math.abs(g-1)<Math.EPSILON5&&(g=1),i.x=l,i.y=g,i}const Z=new s["a"];function X(e,t,a,i,o){const r=e.encoding,s=e.vertices;if(o.height=r.decodeHeight(s,t),r.hasVertexNormals)r.getOctEncodedNormal(s,t,o.encodedNormal);else{const e=o.encodedNormal;e.x=0,e.y=0}}const K=new s["a"],Q=new n["a"];function $(e,t,a,o,r,s,h,c,u,d){const l=o.encoding,g=o.vertices,m=J(t,a,l.decodeTextureCoordinates(g,r,L),L),w=J(t,a,l.decodeTextureCoordinates(g,s,H),H);let T;T=u?(h-m.x)/(w.x-m.x):(c-m.y)/(w.y-m.y);const x=l.decodeHeight(g,r),b=l.decodeHeight(g,s),_=a.rectangle;let p;if(N.longitude=f["a"].lerp(_.west,_.east,h),N.latitude=f["a"].lerp(_.south,_.north,c),d.height=N.height=f["a"].lerp(x,b,T),l.hasVertexNormals){const e=l.getOctEncodedNormal(g,r,Z),t=l.getOctEncodedNormal(g,s,K),a=i["a"].octDecode(e.x,e.y,C),o=i["a"].octDecode(t.x,t.y,Q);p=n["a"].lerp(a,o,T,C),n["a"].normalize(p,p),i["a"].octEncode(p,d.encodedNormal)}else p=e.geodeticSurfaceNormalCartographic(N,C),i["a"].octEncode(p,d.encodedNormal)}function ee(e,t,a,o,r,s){s.height=r;const n=t.geodeticSurfaceNormalCartographic(N,C);i["a"].octEncode(n,s.encodedNormal)}function te(e,t,a,i,o,r,s,n,h,c,d){const l=ne(e,t,n,s,!1,a,i,d)||ne(e,t,c,h,!0,a,i,d);if(l)return d;let f,g;return se(o,r)?(f=0===a?0===i?r.eastIndicesNorthToSouth[0]:r.southIndicesEastToWest[0]:0===i?r.northIndicesWestToEast[0]:r.westIndicesSouthToNorth[0],X(r,f,a,i,d),d):(g=0===a?0===i?ae(e.westMeshes,e.westTiles,b["a"].EAST,e.southMeshes,e.southTiles,b["a"].NORTH,a,i):ae(e.northMeshes,e.northTiles,b["a"].SOUTH,e.westMeshes,e.westTiles,b["a"].EAST,a,i):0===i?ae(e.southMeshes,e.southTiles,b["a"].NORTH,e.eastMeshes,e.eastTiles,b["a"].WEST,a,i):ae(e.eastMeshes,e.eastTiles,b["a"].WEST,e.northMeshes,e.northTiles,b["a"].SOUTH,a,i),Object(u["a"])(g)?(ee(e,t,a,i,g,d),d):void 0)}function ae(e,t,a,i,o,r,s,n){const h=re(e,t,!1,a,s,n),c=re(i,o,!0,r,s,n);return Object(u["a"])(h)&&Object(u["a"])(c)?.5*(h+c):Object(u["a"])(h)?h:c}function ie(e,t,a,i,o,r,s,n,h){for(let c=0;c<r.length;++c)o=oe(e,t,a,i,o,r[c],s[c],n,h);return o}function oe(e,t,a,i,o,r,s,n,h){let c=r.rectangle;n===b["a"].EAST&&0===e.tile.x?(c=w["a"].clone(r.rectangle,Y),c.west-=f["a"].TWO_PI,c.east-=f["a"].TWO_PI):n===b["a"].WEST&&0===r.x&&(c=w["a"].clone(r.rectangle,Y),c.west+=f["a"].TWO_PI,c.east+=f["a"].TWO_PI);const u=e.tile.rectangle;let d,l,g,m;switch(o>0&&(a.decodeTextureCoordinates(i,o-1,L),d=L.x,l=L.y),n){case b["a"].WEST:g=s.westIndicesSouthToNorth,m=!1;break;case b["a"].NORTH:g=s.northIndicesWestToEast,m=!0;break;case b["a"].EAST:g=s.eastIndicesNorthToSouth,m=!1;break;case b["a"].SOUTH:g=s.southIndicesEastToWest,m=!0;break}const T=r,x=e.tile,p=s.encoding,S=s.vertices,y=a.stride;let O,E;p.hasWebMercatorT&&(O=_["a"].geodeticLatitudeToMercatorAngle(u.south),E=1/(_["a"].geodeticLatitudeToMercatorAngle(u.north)-O));for(let w=0;w<g.length;++w){const e=g[w],r=p.decodeTextureCoordinates(S,e,L);J(T,x,r,r);const s=r.x,n=r.y,c=m?s:n;if(c<0||c>1)continue;if(Math.abs(s-d)<f["a"].EPSILON5&&Math.abs(n-l)<f["a"].EPSILON5)continue;const b=Math.abs(s)<f["a"].EPSILON5||Math.abs(s-1)<f["a"].EPSILON5,M=Math.abs(n)<f["a"].EPSILON5||Math.abs(n-1)<f["a"].EPSILON5;if(b&&M)continue;const v=p.decodePosition(S,e,C),N=p.decodeHeight(S,e);let A;p.hasVertexNormals?A=p.getOctEncodedNormal(S,e,R):(A=R,A.x=0,A.y=0);let H,j=n;if(p.hasWebMercatorT){const e=f["a"].lerp(u.south,u.north,n);j=(_["a"].geodeticLatitudeToMercatorAngle(e)-O)*E}a.hasGeodeticSurfaceNormals&&(H=t.geodeticSurfaceNormal(v,I)),a.encode(i,o*y,v,r,N,A,j,H),h.minimumHeight=Math.min(h.minimumHeight,N),h.maximumHeight=Math.max(h.maximumHeight,N),++o}return o}function re(e,t,a,i,o,r){let s,n,h;a?(s=0,n=e.length,h=1):(s=e.length-1,n=-1,h=-1);for(let c=s;c!==n;c+=h){const o=e[c],r=t[c];if(!se(r,o))continue;let s;switch(i){case b["a"].WEST:s=o.westIndicesSouthToNorth;break;case b["a"].SOUTH:s=o.southIndicesEastToWest;break;case b["a"].EAST:s=o.eastIndicesNorthToSouth;break;case b["a"].NORTH:s=o.northIndicesWestToEast;break}const n=s[a?0:s.length-1];if(Object(u["a"])(n))return o.encoding.decodeHeight(o.vertices,n)}}function se(e,t){return Object(u["a"])(t)&&(!Object(u["a"])(e.data.fill)||!e.data.fill.changedThisFrame)}function ne(e,t,a,i,r,s,n,h){let c,u,d,l,f;const g=i[r?0:a.length-1],m=a[r?0:a.length-1];if(se(g,m)&&(0===s?0===n?(c=r?m.northIndicesWestToEast:m.eastIndicesNorthToSouth,u=r,d=r):(c=r?m.eastIndicesNorthToSouth:m.southIndicesEastToWest,u=!r,d=!1):0===n?(c=r?m.westIndicesSouthToNorth:m.northIndicesWestToEast,u=!r,d=!0):(c=r?m.southIndicesEastToWest:m.westIndicesSouthToNorth,u=r,d=!r),c.length>0)){l=r?0:c.length-1,f=c[l],m.encoding.decodeTextureCoordinates(m.vertices,f,L);const a=J(g,e.tile,L,L);if(a.x===s&&a.y===n)return X(m,f,s,n,h),!0;if(l=Object(o["a"])(c,u?s:n,(function(t,a){m.encoding.decodeTextureCoordinates(m.vertices,t,L);const i=J(g,e.tile,L,L);return d?u?i.x-s:i.y-n:u?s-i.x:n-i.y})),!(l<0))return X(m,c[l],s,n,h),!0;if(l=~l,l>0&&l<c.length)return $(t,g,e.tile,m,c[l-1],c[l],s,n,u,h),!0}return!1}const he=[new n["a"],new n["a"],new n["a"],new n["a"]];function ce(e,t,a,i,o,r){const s=e.quadtree._occluders.ellipsoid,h=s.ellipsoid,c=he;return n["a"].fromRadians(a.west,a.south,o,h,c[0]),n["a"].fromRadians(a.east,a.south,o,h,c[1]),n["a"].fromRadians(a.west,a.north,o,h,c[2]),n["a"].fromRadians(a.east,a.north,o,h,c[3]),s.computeHorizonCullingPointPossiblyUnderEllipsoid(t,c,i,r)}t["a"]=y},3639:function(e,t,a){"use strict";var i=a("4051"),o=a("1a5d");function r(e){e=Object(o["a"])(e,o["a"].EMPTY_OBJECT),this.color=i["a"].clone(Object(o["a"])(e.color,i["a"].WHITE)),this.intensity=Object(o["a"])(e.intensity,2)}t["a"]=r},"4ab5":function(e,t,a){"use strict";var i=a("6af0"),o=a("85b2"),r=a("0b4a"),s=a("1a5d"),n=a("c937"),h=a("21b7"),c=a("e2a6"),u=a("0238"),d=a("9f38"),l=a("e2aa"),f=a("b18b"),g=a("1a75");function m(e,t,a,i,r){this.bottomLeft=Object(s["a"])(e,o["a"].ZERO),this.topRight=Object(s["a"])(t,o["a"].ZERO),this.childNode1=a,this.childNode2=i,this.imageIndex=r}const w=new o["a"](16,16);function T(e){e=Object(s["a"])(e,s["a"].EMPTY_OBJECT);const t=Object(s["a"])(e.borderWidthInPixels,1),a=Object(s["a"])(e.initialSize,w);if(!Object(n["a"])(e.context))throw new c["a"]("context is required.");if(t<0)throw new c["a"]("borderWidthInPixels must be greater than or equal to zero.");if(a.x<1||a.y<1)throw new c["a"]("initialSize must be greater than zero.");this._context=e.context,this._pixelFormat=Object(s["a"])(e.pixelFormat,u["a"].RGBA),this._borderWidthInPixels=t,this._textureCoordinates=[],this._guid=Object(r["a"])(),this._idHash={},this._initialSize=a,this._root=void 0}function x(e,t){const a=e._context,i=e.numberOfImages,r=2,s=e._borderWidthInPixels;if(i>0){const i=e._texture.width,h=e._texture.height,c=r*(i+t.width+s),u=r*(h+t.height+s),d=i/c,l=h/u,w=new m(new o["a"](i+s,s),new o["a"](c,h)),T=new m(new o["a"],new o["a"](c,h),e._root,w),x=new m(new o["a"](s,h+s),new o["a"](c,u)),b=new m(new o["a"],new o["a"](c,u),T,x);for(let t=0;t<e._textureCoordinates.length;t++){const a=e._textureCoordinates[t];Object(n["a"])(a)&&(a.x*=d,a.y*=l,a.width*=d,a.height*=l)}const _=new g["a"]({context:e._context,width:c,height:u,pixelFormat:e._pixelFormat}),p=new f["a"]({context:a,colorTextures:[e._texture],destroyAttachments:!1});p._bind(),_.copyFromFramebuffer(0,0,0,0,c,u),p._unBind(),p.destroy(),e._texture=e._texture&&e._texture.destroy(),e._texture=_,e._root=b}else{let a=r*(t.width+2*s),i=r*(t.height+2*s);a<e._initialSize.x&&(a=e._initialSize.x),i<e._initialSize.y&&(i=e._initialSize.y),e._texture=e._texture&&e._texture.destroy(),e._texture=new g["a"]({context:e._context,width:a,height:i,pixelFormat:e._pixelFormat}),e._root=new m(new o["a"](s,s),new o["a"](a,i))}}function b(e,t,a){if(Object(n["a"])(t)){if(!Object(n["a"])(t.childNode1)&&!Object(n["a"])(t.childNode2)){if(Object(n["a"])(t.imageIndex))return;const i=t.topRight.x-t.bottomLeft.x,r=t.topRight.y-t.bottomLeft.y,s=i-a.width,h=r-a.height;if(s<0||h<0)return;if(0===s&&0===h)return t;if(s>h){t.childNode1=new m(new o["a"](t.bottomLeft.x,t.bottomLeft.y),new o["a"](t.bottomLeft.x+a.width,t.topRight.y));const i=t.bottomLeft.x+a.width+e._borderWidthInPixels;i<t.topRight.x&&(t.childNode2=new m(new o["a"](i,t.bottomLeft.y),new o["a"](t.topRight.x,t.topRight.y)))}else{t.childNode1=new m(new o["a"](t.bottomLeft.x,t.bottomLeft.y),new o["a"](t.topRight.x,t.bottomLeft.y+a.height));const i=t.bottomLeft.y+a.height+e._borderWidthInPixels;i<t.topRight.y&&(t.childNode2=new m(new o["a"](t.bottomLeft.x,i),new o["a"](t.topRight.x,t.topRight.y)))}return b(e,t.childNode1,a)}return b(e,t.childNode1,a)||b(e,t.childNode2,a)}}function _(e,t,a){const o=b(e,e._root,t);if(Object(n["a"])(o)){o.imageIndex=a;const r=e._texture.width,s=e._texture.height,n=o.topRight.x-o.bottomLeft.x,h=o.topRight.y-o.bottomLeft.y,c=o.bottomLeft.x/r,u=o.bottomLeft.y/s,d=n/r,l=h/s;e._textureCoordinates[a]=new i["a"](c,u,d,l),e._texture.copyFrom({source:t,xOffset:o.bottomLeft.x,yOffset:o.bottomLeft.y})}else x(e,t),_(e,t,a);e._guid=Object(r["a"])()}function p(e,t){if(!Object(n["a"])(e)||e.isDestroyed())return-1;const a=e.numberOfImages;return _(e,t,a),a}Object.defineProperties(T.prototype,{borderWidthInPixels:{get:function(){return this._borderWidthInPixels}},textureCoordinates:{get:function(){return this._textureCoordinates}},texture:{get:function(){return Object(n["a"])(this._texture)||(this._texture=new g["a"]({context:this._context,width:this._initialSize.x,height:this._initialSize.y,pixelFormat:this._pixelFormat})),this._texture}},numberOfImages:{get:function(){return this._textureCoordinates.length}},guid:{get:function(){return this._guid}}}),T.prototype.addImageSync=function(e,t){if(!Object(n["a"])(e))throw new c["a"]("id is required.");if(!Object(n["a"])(t))throw new c["a"]("image is required.");let a=this._idHash[e];return Object(n["a"])(a)||(a=p(this,t),this._idHash[e]=Promise.resolve(a)),a},T.prototype.addImage=function(e,t){if(!Object(n["a"])(e))throw new c["a"]("id is required.");if(!Object(n["a"])(t))throw new c["a"]("image is required.");let a=this._idHash[e];if(Object(n["a"])(a))return a;if("function"===typeof t){if(t=t(e),!Object(n["a"])(t))throw new c["a"]("image is required.")}else if("string"===typeof t||t instanceof d["a"]){const e=d["a"].createIfNeeded(t);t=e.fetchImage()}const i=this;return a=Promise.resolve(t).then((function(e){return p(i,e)})),this._idHash[e]=a,a},T.prototype.addSubRegion=function(e,t){if(!Object(n["a"])(e))throw new c["a"]("id is required.");if(!Object(n["a"])(t))throw new c["a"]("subRegion is required.");const a=this._idHash[e];if(!Object(n["a"])(a))throw new l["a"](`image with id "${e}" not found in the atlas.`);const o=this;return Promise.resolve(a).then((function(e){if(-1===e)return-1;const a=o._texture.width,s=o._texture.height,n=o.numberOfImages,h=o._textureCoordinates[e],c=h.x+t.x/a,u=h.y+t.y/s,d=t.width/a,l=t.height/s;return o._textureCoordinates.push(new i["a"](c,u,d,l)),o._guid=Object(r["a"])(),n}))},T.prototype.isDestroyed=function(){return!1},T.prototype.destroy=function(){return this._texture=this._texture&&this._texture.destroy(),Object(h["a"])(this)},t["a"]=T},6752:function(e,t,a){"use strict";var i=a("8656"),o=a("85b2"),r=a("dde0"),s=a("6b82"),n=a("cbf0"),h=a("c937"),c=a("21b7"),u=a("2642"),d=a("b8b5"),l=a("722e"),f=a("0238"),g=a("82ba"),m=a("6f54"),w=a("6ba7"),T=a("f4c7"),x=a("d5cf"),b=a("1494"),_=a("5027"),p=a("8f7d"),S=a("1a75"),y=a("dc15"),O=a("0e29"),E=a("5ff8"),M=a("b125"),v=a("da23"),N=a("dc6c"),A=a("6a98");function C(){this.show=!0,this._drawCommand=new x["a"]({primitiveType:g["a"].TRIANGLES,boundingVolume:new i["a"],owner:this}),this._commands={drawCommand:this._drawCommand,computeCommand:void 0},this._boundingVolume=new i["a"],this._boundingVolume2D=new i["a"],this._texture=void 0,this._drawingBufferWidth=void 0,this._drawingBufferHeight=void 0,this._radiusTS=void 0,this._size=void 0,this.glowFactor=1,this._glowFactorDirty=!1,this._useHdr=void 0;const e=this;this._uniformMap={u_texture:function(){return e._texture},u_size:function(){return e._size}}}Object.defineProperties(C.prototype,{glowFactor:{get:function(){return this._glowFactor},set:function(e){e=Math.max(e,0),this._glowFactor=e,this._glowFactorDirty=!0}}});const I=new o["a"],R=new o["a"],H=new s["a"],L=new s["a"];C.prototype.update=function(e,t,a){if(!this.show)return;const s=e.mode;if(s===N["a"].SCENE2D||s===N["a"].MORPHING)return;if(!e.passes.render)return;const c=e.context,g=t.viewport.width,x=t.viewport.height;if(!Object(h["a"])(this._texture)||g!==this._drawingBufferWidth||x!==this._drawingBufferHeight||this._glowFactorDirty||a!==this._useHdr){this._texture=this._texture&&this._texture.destroy(),this._drawingBufferWidth=g,this._drawingBufferHeight=x,this._glowFactorDirty=!1,this._useHdr=a;let e=Math.max(g,x);e=Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))-2),e=Math.max(1,e);const t=a?c.halfFloatingPointTexture?b["a"].HALF_FLOAT:b["a"].FLOAT:b["a"].UNSIGNED_BYTE;this._texture=new S["a"]({context:c,width:e,height:e,pixelFormat:f["a"].RGBA,pixelDatatype:t}),this._glowLengthTS=5*this._glowFactor,this._radiusTS=1/(1+2*this._glowLengthTS)*.5;const i=this,o={u_radiusTS:function(){return i._radiusTS}};this._commands.computeCommand=new T["a"]({fragmentShaderSource:E["a"],outputTexture:this._texture,uniformMap:o,persists:!1,owner:this,postExecute:function(){i._commands.computeCommand=void 0}})}const C=this._drawCommand;if(!Object(h["a"])(C.vertexArray)){const e={direction:0},t=new Uint8Array(8);t[0]=0,t[1]=0,t[2]=255,t[3]=0,t[4]=255,t[5]=255,t[6]=0,t[7]=255;const a=m["a"].createVertexBuffer({context:c,typedArray:t,usage:w["a"].STATIC_DRAW}),i=[{index:e.direction,vertexBuffer:a,componentsPerAttribute:2,normalize:!0,componentDatatype:n["a"].UNSIGNED_BYTE}],o=m["a"].createIndexBuffer({context:c,typedArray:new Uint16Array([0,1,2,0,2,3]),usage:w["a"].STATIC_DRAW,indexDatatype:u["a"].UNSIGNED_SHORT});C.vertexArray=new y["a"]({context:c,attributes:i,indexBuffer:o}),C.shaderProgram=p["a"].fromCache({context:c,vertexShaderSource:M["a"],fragmentShaderSource:O["a"],attributeLocations:e}),C.renderState=_["a"].fromCache({blending:v["a"].ALPHA_BLEND}),C.uniformMap=this._uniformMap}const j=c.uniformState.sunPositionWC,W=c.uniformState.sunPositionColumbusView,F=this._boundingVolume,P=this._boundingVolume2D;r["a"].clone(j,F.center),P.center.x=W.z,P.center.y=W.x,P.center.z=W.y,F.radius=d["a"].SOLAR_RADIUS+d["a"].SOLAR_RADIUS*this._glowLengthTS,P.radius=F.radius,s===N["a"].SCENE3D?i["a"].clone(F,C.boundingVolume):s===N["a"].COLUMBUS_VIEW&&i["a"].clone(P,C.boundingVolume);const k=A["a"].computeActualWgs84Position(e,j,L),U=r["a"].magnitude(r["a"].subtract(k,e.camera.position,L)),D=c.uniformState.projection,B=H;B.x=0,B.y=0,B.z=-U,B.w=1;const z=l["a"].multiplyByVector(D,B,L),V=A["a"].clipToGLWindowCoordinates(t.viewport,z,I);B.x=d["a"].SOLAR_RADIUS;const q=l["a"].multiplyByVector(D,B,L),G=A["a"].clipToGLWindowCoordinates(t.viewport,q,R);return this._size=o["a"].magnitude(o["a"].subtract(G,V,L)),this._size=2*this._size*(1+2*this._glowLengthTS),this._size=Math.ceil(this._size),this._commands},C.prototype.isDestroyed=function(){return!1},C.prototype.destroy=function(){const e=this._drawCommand;return e.vertexArray=e.vertexArray&&e.vertexArray.destroy(),e.shaderProgram=e.shaderProgram&&e.shaderProgram.destroy(),this._texture=this._texture&&this._texture.destroy(),Object(c["a"])(this)},t["a"]=C},c017:function(e,t,a){"use strict";var i=a("6af0"),o=a("85b2"),r=a("6b82"),s=a("c937"),n=a("21b7"),h=a("b8b5"),c=a("722e"),u=a("6f7c"),d=a("ce55"),l=a("872d"),f=a("4077"),g=a("b54e"),m=a("e964"),w=a("9a7e"),T=a("788d"),x=a("c8d0"),b=a("c767");function _(){this._sceneFramebuffer=new b["a"];const e=.125,t=new Array(6);t[0]=new m["a"]({fragmentShader:g["a"],textureScale:e,forcePowerOfTwo:!0,sampleMode:T["a"].LINEAR});const a=t[1]=new m["a"]({fragmentShader:l["a"],uniforms:{avgLuminance:.5,threshold:.25,offset:.1},textureScale:e,forcePowerOfTwo:!0}),i=this;this._delta=1,this._sigma=2,this._blurStep=new o["a"],t[2]=new m["a"]({fragmentShader:f["a"],uniforms:{step:function(){return i._blurStep.x=i._blurStep.y=1/a.outputTexture.width,i._blurStep},delta:function(){return i._delta},sigma:function(){return i._sigma},direction:0},textureScale:e,forcePowerOfTwo:!0}),t[3]=new m["a"]({fragmentShader:f["a"],uniforms:{step:function(){return i._blurStep.x=i._blurStep.y=1/a.outputTexture.width,i._blurStep},delta:function(){return i._delta},sigma:function(){return i._sigma},direction:1},textureScale:e,forcePowerOfTwo:!0}),t[4]=new m["a"]({fragmentShader:g["a"],sampleMode:T["a"].LINEAR}),this._uCenter=new o["a"],this._uRadius=void 0,t[5]=new m["a"]({fragmentShader:d["a"],uniforms:{center:function(){return i._uCenter},radius:function(){return i._uRadius},colorTexture2:function(){return i._sceneFramebuffer.framebuffer.getColorTexture(0)}}}),this._stages=new w["a"]({stages:t});const r=new x["a"](this),s=t.length;for(let o=0;o<s;++o)t[o]._textureCache=r;this._textureCache=r,this.length=t.length}_.prototype.get=function(e){return this._stages.get(e)},_.prototype.getStageByName=function(e){const t=this._stages.length;for(let a=0;a<t;++a){const t=this._stages.get(a);if(t.name===e)return t}};const p=new r["a"],S=new o["a"],y=new o["a"],O=new c["a"];function E(e,t,a){const r=t.uniformState,s=r.sunPositionWC,n=r.view,d=r.viewProjection,l=r.projection;let f=c["a"].computeViewportTransformation(a,0,1,O);const g=c["a"].multiplyByPoint(n,s,p);let m=u["a"].pointToGLWindowCoordinates(d,f,s,S);g.x+=h["a"].SOLAR_RADIUS;const w=u["a"].pointToGLWindowCoordinates(l,f,g,g),T=30*o["a"].magnitude(o["a"].subtract(w,m,w))*2,x=y;x.x=T,x.y=T,e._uCenter=o["a"].clone(m,e._uCenter),e._uRadius=.15*Math.max(x.x,x.y);const b=t.drawingBufferWidth,_=t.drawingBufferHeight,E=e._stages,M=E.get(0),v=M.outputTexture.width,N=M.outputTexture.height,A=new i["a"];A.width=v,A.height=N,f=c["a"].computeViewportTransformation(A,0,1,O),m=u["a"].pointToGLWindowCoordinates(d,f,s,S),x.x*=v/b,x.y*=N/_;const C=M.scissorRectangle;C.x=Math.max(m.x-.5*x.x,0),C.y=Math.max(m.y-.5*x.y,0),C.width=Math.min(x.x,b),C.height=Math.min(x.y,_);for(let o=1;o<4;++o)i["a"].clone(C,E.get(o).scissorRectangle)}_.prototype.clear=function(e,t,a){this._sceneFramebuffer.clear(e,t,a),this._textureCache.clear(e)},_.prototype.update=function(e){const t=e.context,a=e.viewport,i=this._sceneFramebuffer;i.update(t,a);const o=i.framebuffer;return this._textureCache.update(t),this._stages.update(t,!1),E(this,t,a),o},_.prototype.execute=function(e){const t=this._sceneFramebuffer.framebuffer.getColorTexture(0),a=this._stages,i=a.length;a.get(0).execute(e,t);for(let o=1;o<i;++o)a.get(o).execute(e,a.get(o-1).outputTexture)},_.prototype.copy=function(e,t){if(!Object(s["a"])(this._copyColorCommand)){const t=this;this._copyColorCommand=e.createViewportQuadCommand(g["a"],{uniformMap:{colorTexture:function(){return t._stages.get(t._stages.length-1).outputTexture}},owner:this})}this._copyColorCommand.framebuffer=t,this._copyColorCommand.execute(e)},_.prototype.isDestroyed=function(){return!1},_.prototype.destroy=function(){return this._textureCache.destroy(),this._stages.destroy(),Object(n["a"])(this)},t["a"]=_},e9e8:function(e,t,a){"use strict";const i={FAILED:0,UNLOADED:1,RECEIVING:2,RECEIVED:3,TRANSFORMING:4,TRANSFORMED:5,READY:6};t["a"]=Object.freeze(i)}}]);