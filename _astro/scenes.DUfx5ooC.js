/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ps="300 es";class bn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const fe=[];for(let s=0;s<256;s++)fe[s]=(s<16?"0":"")+s.toString(16);const cr=Math.PI/180,Vr=180/Math.PI;function Ve(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fe[s&255]+fe[s>>8&255]+fe[s>>16&255]+fe[s>>24&255]+"-"+fe[t&255]+fe[t>>8&255]+"-"+fe[t>>16&15|64]+fe[t>>24&255]+"-"+fe[e&63|128]+fe[e>>8&255]+"-"+fe[e>>16&255]+fe[e>>24&255]+fe[n&255]+fe[n>>8&255]+fe[n>>16&255]+fe[n>>24&255]).toUpperCase()}function Me(s,t,e){return Math.max(t,Math.min(e,s))}function eo(s,t){return(s%t+t)%t}function hr(s,t,e){return(1-e)*s+e*t}function ms(s){return(s&s-1)===0&&s!==0}function no(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function io(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class ${constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}$.prototype.isVector2=!0;class pe{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=i[0],y=i[3],m=i[6],p=i[1],b=i[4],E=i[7],T=i[2],_=i[5],C=i[8];return r[0]=a*x+o*p+l*T,r[3]=a*y+o*b+l*_,r[6]=a*m+o*E+l*C,r[1]=c*x+u*p+h*T,r[4]=c*y+u*b+h*_,r[7]=c*m+u*E+h*C,r[2]=d*x+f*p+g*T,r[5]=d*y+f*b+g*_,r[8]=d*m+f*E+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=e*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(i*c-u*n)*x,t[2]=(o*n-i*a)*x,t[3]=d*x,t[4]=(u*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=e*r+n*l,i[3]=e*a+n*c,i[6]=e*o+n*u,i[1]=-n*r+e*l,i[4]=-n*a+e*c,i[7]=-n*o+e*u,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}pe.prototype.isMatrix3=!0;let An;class Zn{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{An===void 0&&(An=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),An.width=t.width,An.height=t.height;const n=An.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=An}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}}let ro=0;class me extends bn{constructor(t=me.DEFAULT_IMAGE,e=me.DEFAULT_MAPPING,n=1001,i=1001,r=1006,a=1008,o=1023,l=1009,c=1,u=3e3){super(),Object.defineProperty(this,"id",{value:ro++}),this.uuid=Ve(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Ve()),!e&&t.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ur(i[a].image)):r.push(ur(i[a]))}else r=ur(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&this.version++}}me.DEFAULT_IMAGE=void 0;me.DEFAULT_MAPPING=300;me.prototype.isTexture=!0;function ur(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Zn.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Yt{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],y=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-y)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+y)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,E=(f+1)/2,T=(m+1)/2,_=(u+d)/4,C=(h+x)/4,D=(g+y)/4;return b>E&&b>T?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=_/n,r=C/n):E>T?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=_/i,r=D/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=C/r,i=D/r),this.set(n,i,r,e),this}let p=Math.sqrt((y-g)*(y-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(p)<.001&&(p=1),this.x=(y-g)/p,this.y=(h-x)/p,this.z=(d-u)/p,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}Yt.prototype.isVector4=!0;class vn extends bn{constructor(t,e,n){super(),this.width=t,this.height=e,this.depth=1,this.scissor=new Yt(0,0,t,e),this.scissorTest=!1,this.viewport=new Yt(0,0,t,e),n=n||{},this.texture=new me(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(t){t.image={width:this.width,height:this.height,depth:this.depth},this.texture=t}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}vn.prototype.isWebGLRenderTarget=!0;class so extends vn{constructor(t,e,n){super(t,e,n),this.samples=4}copy(t){return super.copy.call(this,t),this.samples=t.samples,this}}so.prototype.isWebGLMultisampleRenderTarget=!0;class _e{constructor(t=0,e=0,n=0,i=1){this._x=t,this._y=e,this._z=n,this._w=i}static slerp(t,e,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,i)}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let y=1-o;const m=l*d+c*f+u*g+h*x,p=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const T=Math.sqrt(b),_=Math.atan2(T,m*p);y=Math.sin(y*_)/T,o=Math.sin(o*_)/T}const E=o*p;if(l=l*y+d*E,c=c*y+f*E,u=u*y+g*E,h=h*y+x*E,y===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-o*f,t[e+2]=c*g+u*f+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){this.copy(t).slerp(e,n)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}_e.prototype.isQuaternion=!0;class M{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(gs.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gs.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*i-o*n,u=l*n+o*e-r*i,h=l*i+r*n-a*e,d=-r*e-a*n-o*i;return this.x=c*l+d*-r+u*-o-h*-a,this.y=u*l+d*-a+h*-r-c*-o,this.z=h*l+d*-o+c*-a-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dr.copy(this).projectOnVector(t),this.sub(dr)}reflect(t){return this.sub(dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}M.prototype.isVector3=!0;const dr=new M,gs=new _e;class Ce{constructor(t=new M(1/0,1/0,1/0),e=new M(-1/0,-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],h=t[l+1],d=t[l+2];u<e&&(e=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(e,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),h=t.getY(l),d=t.getZ(l);u<e&&(e=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(e,n,i),this.max.set(r,a,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t){return this.makeEmpty(),this.expandByObject(t)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return t===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),t=new M),this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return t===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),t=new M),this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t){t.updateWorldMatrix(!1,!1);const e=t.geometry;e!==void 0&&(e.boundingBox===null&&e.computeBoundingBox(),fr.copy(e.boundingBox),fr.applyMatrix4(t.matrixWorld),this.union(fr));const n=t.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),e=new M),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ei),bi.subVectors(this.max,ei),Ln.subVectors(t.a,ei),Cn.subVectors(t.b,ei),Rn.subVectors(t.c,ei),Ke.subVectors(Cn,Ln),tn.subVectors(Rn,Cn),gn.subVectors(Ln,Rn);let e=[0,-Ke.z,Ke.y,0,-tn.z,tn.y,0,-gn.z,gn.y,Ke.z,0,-Ke.x,tn.z,0,-tn.x,gn.z,0,-gn.x,-Ke.y,Ke.x,0,-tn.y,tn.x,0,-gn.y,gn.x,0];return!pr(e,Ln,Cn,Rn,bi)||(e=[1,0,0,0,1,0,0,0,1],!pr(e,Ln,Cn,Rn,bi))?!1:(Si.crossVectors(Ke,tn),e=[Si.x,Si.y,Si.z],pr(e,Ln,Cn,Rn,bi))}clampPoint(t,e){return e===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),e=new M),e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return ti.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return t===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ye[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ye[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ye[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ye[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ye[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ye[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ye[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ye[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ye),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}Ce.prototype.isBox3=!0;const Ye=[new M,new M,new M,new M,new M,new M,new M,new M],ti=new M,fr=new Ce,Ln=new M,Cn=new M,Rn=new M,Ke=new M,tn=new M,gn=new M,ei=new M,bi=new M,Si=new M,xn=new M;function pr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){xn.fromArray(s,r);const o=i.x*Math.abs(xn.x)+i.y*Math.abs(xn.y)+i.z*Math.abs(xn.z),l=t.dot(xn),c=e.dot(xn),u=n.dot(xn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ao=new Ce,xs=new M,mr=new M,gr=new M;class jn{constructor(t=new M,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ao.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),e=new M),e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return t===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),t=new Ce),this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){gr.subVectors(t,this.center);const e=gr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(gr.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return mr.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(xs.copy(t.center).add(mr)),this.expandByPoint(xs.copy(t.center).sub(mr)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ze=new M,xr=new M,Ei=new M,en=new M,vr=new M,Ti=new M,_r=new M;class Sn{constructor(t=new M,e=new M(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e===void 0&&(console.warn("THREE.Ray: .at() target is now required"),e=new M),e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ze)),this}closestPointToPoint(t,e){e===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),e=new M),e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ze.copy(this.direction).multiplyScalar(e).add(this.origin),Ze.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){xr.copy(t).add(e).multiplyScalar(.5),Ei.copy(e).sub(t).normalize(),en.copy(this.origin).sub(xr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ei),o=en.dot(this.direction),l=-en.dot(Ei),c=en.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Ei).multiplyScalar(d).add(xr),f}intersectSphere(t,e){Ze.subVectors(t.center,this.origin);const n=Ze.dot(this.direction),i=Ze.dot(Ze)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ze)!==null}intersectTriangle(t,e,n,i,r){vr.subVectors(e,t),Ti.subVectors(n,t),_r.crossVectors(vr,Ti);let a=this.direction.dot(_r),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;en.subVectors(this.origin,t);const l=o*this.direction.dot(Ti.crossVectors(en,Ti));if(l<0)return null;const c=o*this.direction.dot(vr.cross(en));if(c<0||l+c>a)return null;const u=-o*en.dot(_r);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,r,a,o,l,c,u,h,d,f,g,x,y){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Pn.setFromMatrixColumn(t,0).length(),r=1/Pn.setFromMatrixColumn(t,1).length(),a=1/Pn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,f=a*h,g=o*u,x=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,x=c*h;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,x=c*h;e[0]=d-x*o,e[4]=-a*h,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,f=a*h,g=o*u,x=o*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*h,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=x-d*h,e[8]=g*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-x*h}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+x,e[5]=a*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=o*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oo,t,lo)}lookAt(t,e,n){const i=this.elements;return Se.subVectors(t,e),Se.lengthSq()===0&&(Se.z=1),Se.normalize(),nn.crossVectors(n,Se),nn.lengthSq()===0&&(Math.abs(n.z)===1?Se.x+=1e-4:Se.z+=1e-4,Se.normalize(),nn.crossVectors(n,Se)),nn.normalize(),Ai.crossVectors(Se,nn),i[0]=nn.x,i[4]=Ai.x,i[8]=Se.x,i[1]=nn.y,i[5]=Ai.y,i[9]=Se.y,i[2]=nn.z,i[6]=Ai.z,i[10]=Se.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],y=n[10],m=n[14],p=n[3],b=n[7],E=n[11],T=n[15],_=i[0],C=i[4],D=i[8],N=i[12],B=i[1],O=i[5],F=i[9],A=i[13],P=i[2],I=i[6],R=i[10],Y=i[14],it=i[3],Q=i[7],ot=i[11],et=i[15];return r[0]=a*_+o*B+l*P+c*it,r[4]=a*C+o*O+l*I+c*Q,r[8]=a*D+o*F+l*R+c*ot,r[12]=a*N+o*A+l*Y+c*et,r[1]=u*_+h*B+d*P+f*it,r[5]=u*C+h*O+d*I+f*Q,r[9]=u*D+h*F+d*R+f*ot,r[13]=u*N+h*A+d*Y+f*et,r[2]=g*_+x*B+y*P+m*it,r[6]=g*C+x*O+y*I+m*Q,r[10]=g*D+x*F+y*R+m*ot,r[14]=g*N+x*A+y*Y+m*et,r[3]=p*_+b*B+E*P+T*it,r[7]=p*C+b*O+E*I+T*Q,r[11]=p*D+b*F+E*R+T*ot,r[15]=p*N+b*A+E*Y+T*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],x=t[7],y=t[11],m=t[15];return g*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*f-n*l*f)+x*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*u-r*l*u)+y*(+e*c*h-e*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+m*(-i*o*u-e*l*h+e*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],x=t[13],y=t[14],m=t[15],p=h*y*c-x*d*c+x*l*f-o*y*f-h*l*m+o*d*m,b=g*d*c-u*y*c-g*l*f+a*y*f+u*l*m-a*d*m,E=u*x*c-g*h*c+g*o*f-a*x*f-u*o*m+a*h*m,T=g*h*l-u*x*l-g*o*d+a*x*d+u*o*y-a*h*y,_=e*p+n*b+i*E+r*T;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/_;return t[0]=p*C,t[1]=(x*d*r-h*y*r-x*i*f+n*y*f+h*i*m-n*d*m)*C,t[2]=(o*y*r-x*l*r+x*i*c-n*y*c-o*i*m+n*l*m)*C,t[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*f-n*l*f)*C,t[4]=b*C,t[5]=(u*y*r-g*d*r+g*i*f-e*y*f-u*i*m+e*d*m)*C,t[6]=(g*l*r-a*y*r-g*i*c+e*y*c+a*i*m-e*l*m)*C,t[7]=(a*d*r-u*l*r+u*i*c-e*d*c-a*i*f+e*l*f)*C,t[8]=E*C,t[9]=(g*h*r-u*x*r-g*n*f+e*x*f+u*n*m-e*h*m)*C,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*m+e*o*m)*C,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*f-e*o*f)*C,t[12]=T*C,t[13]=(u*x*i-g*h*i+g*n*d-e*x*d-u*n*y+e*h*y)*C,t[14]=(g*o*i-a*x*i-g*n*l+e*x*l+a*n*y-e*o*y)*C,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n){return this.set(1,e,n,0,t,1,n,0,t,e,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,x=a*u,y=a*h,m=o*h,p=l*c,b=l*u,E=l*h,T=n.x,_=n.y,C=n.z;return i[0]=(1-(x+m))*T,i[1]=(f+E)*T,i[2]=(g-b)*T,i[3]=0,i[4]=(f-E)*_,i[5]=(1-(d+m))*_,i[6]=(y+p)*_,i[7]=0,i[8]=(g+b)*C,i[9]=(y-p)*C,i[10]=(1-(d+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Pn.set(i[0],i[1],i[2]).length();const a=Pn.set(i[4],i[5],i[6]).length(),o=Pn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],De.copy(this);const c=1/r,u=1/a,h=1/o;return De.elements[0]*=c,De.elements[1]*=c,De.elements[2]*=c,De.elements[4]*=u,De.elements[5]*=u,De.elements[6]*=u,De.elements[8]*=h,De.elements[9]*=h,De.elements[10]*=h,e.setFromRotationMatrix(De),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),d=-(a+r)/(a-r),f=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,r,a){const o=this.elements,l=1/(e-t),c=1/(n-i),u=1/(a-r),h=(e+t)*l,d=(n+i)*c,f=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}Et.prototype.isMatrix4=!0;const Pn=new M,De=new Et,oo=new M(0,0,0),lo=new M(1,1,1),nn=new M,Ai=new M,Se=new M,vs=new Et,_s=new _e;class Jn{constructor(t=0,e=0,n=0,i=Jn.DefaultOrder){this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e,n){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e=e||this._order,e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vs.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vs,e,n)}setFromVector3(t,e){return this.set(t.x,t.y,t.z,e||this._order)}reorder(t){return _s.setFromEuler(this),this.setFromQuaternion(_s,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}toVector3(t){return t?t.set(this._x,this._y,this._z):new M(this._x,this._y,this._z)}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}Jn.prototype.isEuler=!0;Jn.DefaultOrder="XYZ";Jn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class fa{constructor(){this.mask=1}set(t){this.mask=1<<t|0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}}let co=0;const ys=new M,Dn=new _e,je=new Et,Li=new M,ni=new M,ho=new M,uo=new _e,ws=new M(1,0,0),Ms=new M(0,1,0),bs=new M(0,0,1),fo={type:"added"},Ss={type:"removed"};class qt extends bn{constructor(){super(),Object.defineProperty(this,"id",{value:co++}),this.uuid=Ve(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DefaultUp.clone();const t=new M,e=new Jn,n=new _e,i=new M(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Et},normalMatrix:{value:new pe}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=qt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dn.setFromAxisAngle(t,e),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(t,e){return Dn.setFromAxisAngle(t,e),this.quaternion.premultiply(Dn),this}rotateX(t){return this.rotateOnAxis(ws,t)}rotateY(t){return this.rotateOnAxis(Ms,t)}rotateZ(t){return this.rotateOnAxis(bs,t)}translateOnAxis(t,e){return ys.copy(t).applyQuaternion(this.quaternion),this.position.add(ys.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ws,t)}translateY(t){return this.translateOnAxis(Ms,t)}translateZ(t){return this.translateOnAxis(bs,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Li.copy(t):Li.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?je.lookAt(ni,Li,this.up):je.lookAt(Li,ni,this.up),this.quaternion.setFromRotationMatrix(je),i&&(je.extractRotation(i.matrixWorld),Dn.setFromRotationMatrix(je),this.quaternion.premultiply(Dn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(fo)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ss)),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Ss)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),je.multiply(t.parent.matrixWorld)),t.applyMatrix4(je),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getWorldPosition(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new M),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new _e),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ni,t,ho),t}getWorldScale(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new M),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ni,uo,t),t}getWorldDirection(t){t===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new M),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}qt.DefaultUp=new M(0,1,0);qt.DefaultMatrixAutoUpdate=!0;qt.prototype.isObject3D=!0;const yr=new M,po=new M,mo=new pe;class He{constructor(t=new M(1,0,0),e=0){this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=yr.subVectors(n,e).cross(po.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),e=new M),e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){e===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),e=new M);const n=t.delta(yr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),t=new M),t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mo.getNormalMatrix(t),i=this.coplanarPoint(yr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}He.prototype.isPlane=!0;const Fe=new M,Je=new M,wr=new M,$e=new M,Fn=new M,In=new M,Es=new M,Mr=new M,br=new M,Sr=new M;class le{constructor(t=new M,e=new M,n=new M){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new M),i.subVectors(n,e),Fe.subVectors(t,e),i.cross(Fe);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Fe.subVectors(i,e),Je.subVectors(n,e),wr.subVectors(t,e);const a=Fe.dot(Fe),o=Fe.dot(Je),l=Fe.dot(wr),c=Je.dot(Je),u=Je.dot(wr),h=a*c-o*o;if(r===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),r=new M),h===0)return r.set(-2,-1,-1);const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$e),$e.x>=0&&$e.y>=0&&$e.x+$e.y<=1}static getUV(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,$e),l.set(0,0),l.addScaledVector(r,$e.x),l.addScaledVector(a,$e.y),l.addScaledVector(o,$e.z),l}static isFrontFacing(t,e,n,i){return Fe.subVectors(n,e),Je.subVectors(t,e),Fe.cross(Je).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fe.subVectors(this.c,this.b),Je.subVectors(this.a,this.b),Fe.cross(Je).length()*.5}getMidpoint(t){return t===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),t=new M),t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return le.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),t=new He),t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return le.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return le.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return le.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return le.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){e===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),e=new M);const n=this.a,i=this.b,r=this.c;let a,o;Fn.subVectors(i,n),In.subVectors(r,n),Mr.subVectors(t,n);const l=Fn.dot(Mr),c=In.dot(Mr);if(l<=0&&c<=0)return e.copy(n);br.subVectors(t,i);const u=Fn.dot(br),h=In.dot(br);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Fn,a);Sr.subVectors(t,r);const f=Fn.dot(Sr),g=In.dot(Sr);if(g>=0&&f<=g)return e.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(In,o);const y=u*g-f*h;if(y<=0&&h-u>=0&&f-g>=0)return Es.subVectors(r,i),o=(h-u)/(h-u+(f-g)),e.copy(i).addScaledVector(Es,o);const m=1/(y+x+d);return a=x*m,o=d*m,e.copy(n).addScaledVector(Fn,a).addScaledVector(In,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let go=0;function ue(){Object.defineProperty(this,"id",{value:go++}),this.uuid=Ve(),this.name="",this.type="Material",this.fog=!0,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}ue.prototype=Object.assign(Object.create(bn.prototype),{constructor:ue,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(s){if(s!==void 0)for(const t in s){const e=s[t];if(e===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=e===1;continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(e):n&&n.isVector3&&e&&e.isVector3?n.copy(e):this[t]=e}},toJSON:function(s){const t=s===void 0||typeof s=="string";t&&(s={textures:{},images:{}});const e={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.color&&this.color.isColor&&(e.color=this.color.getHex()),this.roughness!==void 0&&(e.roughness=this.roughness),this.metalness!==void 0&&(e.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(e.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(e.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(e.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(e.specular=this.specular.getHex()),this.shininess!==void 0&&(e.shininess=this.shininess),this.clearcoat!==void 0&&(e.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(e.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(e.clearcoatMap=this.clearcoatMap.toJSON(s).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(e.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(s).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(e.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(s).uuid,e.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(e.map=this.map.toJSON(s).uuid),this.matcap&&this.matcap.isTexture&&(e.matcap=this.matcap.toJSON(s).uuid),this.alphaMap&&this.alphaMap.isTexture&&(e.alphaMap=this.alphaMap.toJSON(s).uuid),this.lightMap&&this.lightMap.isTexture&&(e.lightMap=this.lightMap.toJSON(s).uuid,e.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(e.aoMap=this.aoMap.toJSON(s).uuid,e.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(e.bumpMap=this.bumpMap.toJSON(s).uuid,e.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(e.normalMap=this.normalMap.toJSON(s).uuid,e.normalMapType=this.normalMapType,e.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(e.displacementMap=this.displacementMap.toJSON(s).uuid,e.displacementScale=this.displacementScale,e.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(e.roughnessMap=this.roughnessMap.toJSON(s).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(e.metalnessMap=this.metalnessMap.toJSON(s).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(e.emissiveMap=this.emissiveMap.toJSON(s).uuid),this.specularMap&&this.specularMap.isTexture&&(e.specularMap=this.specularMap.toJSON(s).uuid),this.envMap&&this.envMap.isTexture&&(e.envMap=this.envMap.toJSON(s).uuid,this.combine!==void 0&&(e.combine=this.combine)),this.envMapIntensity!==void 0&&(e.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(e.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(e.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(e.gradientMap=this.gradientMap.toJSON(s).uuid),this.size!==void 0&&(e.size=this.size),this.shadowSide!==null&&(e.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(e.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(e.blending=this.blending),this.side!==0&&(e.side=this.side),this.vertexColors&&(e.vertexColors=!0),this.opacity<1&&(e.opacity=this.opacity),this.transparent===!0&&(e.transparent=this.transparent),e.depthFunc=this.depthFunc,e.depthTest=this.depthTest,e.depthWrite=this.depthWrite,e.colorWrite=this.colorWrite,e.stencilWrite=this.stencilWrite,e.stencilWriteMask=this.stencilWriteMask,e.stencilFunc=this.stencilFunc,e.stencilRef=this.stencilRef,e.stencilFuncMask=this.stencilFuncMask,e.stencilFail=this.stencilFail,e.stencilZFail=this.stencilZFail,e.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(e.rotation=this.rotation),this.polygonOffset===!0&&(e.polygonOffset=!0),this.polygonOffsetFactor!==0&&(e.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(e.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(e.linewidth=this.linewidth),this.dashSize!==void 0&&(e.dashSize=this.dashSize),this.gapSize!==void 0&&(e.gapSize=this.gapSize),this.scale!==void 0&&(e.scale=this.scale),this.dithering===!0&&(e.dithering=!0),this.alphaTest>0&&(e.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(e.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(e.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(e.wireframe=this.wireframe),this.wireframeLinewidth>1&&(e.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(e.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(e.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(e.morphTargets=!0),this.morphNormals===!0&&(e.morphNormals=!0),this.skinning===!0&&(e.skinning=!0),this.flatShading===!0&&(e.flatShading=this.flatShading),this.visible===!1&&(e.visible=!1),this.toneMapped===!1&&(e.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(e.userData=this.userData);function n(i){const r=[];for(const a in i){const o=i[a];delete o.metadata,r.push(o)}return r}if(t){const i=n(s.textures),r=n(s.images);i.length>0&&(e.textures=i),r.length>0&&(e.images=r)}return e},clone:function(){return new this.constructor().copy(this)},copy:function(s){this.name=s.name,this.fog=s.fog,this.blending=s.blending,this.side=s.side,this.vertexColors=s.vertexColors,this.opacity=s.opacity,this.transparent=s.transparent,this.blendSrc=s.blendSrc,this.blendDst=s.blendDst,this.blendEquation=s.blendEquation,this.blendSrcAlpha=s.blendSrcAlpha,this.blendDstAlpha=s.blendDstAlpha,this.blendEquationAlpha=s.blendEquationAlpha,this.depthFunc=s.depthFunc,this.depthTest=s.depthTest,this.depthWrite=s.depthWrite,this.stencilWriteMask=s.stencilWriteMask,this.stencilFunc=s.stencilFunc,this.stencilRef=s.stencilRef,this.stencilFuncMask=s.stencilFuncMask,this.stencilFail=s.stencilFail,this.stencilZFail=s.stencilZFail,this.stencilZPass=s.stencilZPass,this.stencilWrite=s.stencilWrite;const t=s.clippingPlanes;let e=null;if(t!==null){const n=t.length;e=new Array(n);for(let i=0;i!==n;++i)e[i]=t[i].clone()}return this.clippingPlanes=e,this.clipIntersection=s.clipIntersection,this.clipShadows=s.clipShadows,this.shadowSide=s.shadowSide,this.colorWrite=s.colorWrite,this.precision=s.precision,this.polygonOffset=s.polygonOffset,this.polygonOffsetFactor=s.polygonOffsetFactor,this.polygonOffsetUnits=s.polygonOffsetUnits,this.dithering=s.dithering,this.alphaTest=s.alphaTest,this.alphaToCoverage=s.alphaToCoverage,this.premultipliedAlpha=s.premultipliedAlpha,this.visible=s.visible,this.toneMapped=s.toneMapped,this.userData=JSON.parse(JSON.stringify(s.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(ue.prototype,"needsUpdate",{set:function(s){s===!0&&this.version++}});const pa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ie={h:0,s:0,l:0},Ci={h:0,s:0,l:0};function Er(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function Tr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ar(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}class dt{constructor(t,e,n){return e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this}setRGB(t,e,n){return this.r=t,this.g=e,this.b=n,this}setHSL(t,e,n){if(t=eo(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,r=2*n-i;this.r=Er(r,i,t+1/3),this.g=Er(r,i,t),this.b=Er(r,i,t-1/3)}return this}setStyle(t){function e(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let i;const r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,e(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,e(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return e(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this}setColorName(t){const e=pa[t.toLowerCase()];return e!==void 0?this.setHex(e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copyGammaToLinear(t,e=2){return this.r=Math.pow(t.r,e),this.g=Math.pow(t.g,e),this.b=Math.pow(t.b,e),this}copyLinearToGamma(t,e=2){const n=e>0?1/e:1;return this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this}convertGammaToLinear(t){return this.copyGammaToLinear(this,t),this}convertLinearToGamma(t){return this.copyLinearToGamma(this,t),this}copySRGBToLinear(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(t){t===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),t={h:0,s:0,l:0});const e=this.r,n=this.g,i=this.b,r=Math.max(e,n,i),a=Math.min(e,n,i);let o,l;const c=(a+r)/2;if(a===r)o=0,l=0;else{const u=r-a;switch(l=c<=.5?u/(r+a):u/(2-r-a),r){case e:o=(n-i)/u+(n<i?6:0);break;case n:o=(i-e)/u+2;break;case i:o=(e-n)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(t,e,n){return this.getHSL(Ie),Ie.h+=t,Ie.s+=e,Ie.l+=n,this.setHSL(Ie.h,Ie.s,Ie.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ie),t.getHSL(Ci);const n=hr(Ie.h,Ci.h,e),i=hr(Ie.s,Ci.s,e),r=hr(Ie.l,Ci.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}dt.NAMES=pa;dt.prototype.isColor=!0;dt.prototype.r=1;dt.prototype.g=1;dt.prototype.b=1;class wn extends ue{constructor(t){super(),this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this}}wn.prototype.isMeshBasicMaterial=!0;const te=new M,Ri=new $;class ce{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new dt),e[n++]=a.r,e[n++]=a.g,e[n++]=a.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new $),e[n++]=a.x,e[n++]=a.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new M),e[n++]=a.x,e[n++]=a.y,e[n++]=a.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Yt),e[n++]=a.x,e[n++]=a.y,e[n++]=a.z,e[n++]=a.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ri.fromBufferAttribute(this,e),Ri.applyMatrix3(t),this.setXY(e,Ri.x,Ri.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.applyMatrix3(t),this.setXYZ(e,te.x,te.y,te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)te.x=this.getX(e),te.y=this.getY(e),te.z=this.getZ(e),te.applyMatrix4(t),this.setXYZ(e,te.x,te.y,te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)te.x=this.getX(e),te.y=this.getY(e),te.z=this.getZ(e),te.applyNormalMatrix(t),this.setXYZ(e,te.x,te.y,te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)te.x=this.getX(e),te.y=this.getY(e),te.z=this.getZ(e),te.transformDirection(t),this.setXYZ(e,te.x,te.y,te.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}ce.prototype.isBufferAttribute=!0;class ma extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ga extends ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xo extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}xo.prototype.isFloat16BufferAttribute=!0;class Pt extends ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}function xa(s){if(s.length===0)return-1/0;let t=s[0];for(let e=1,n=s.length;e<n;++e)s[e]>t&&(t=s[e]);return t}let vo=0;const Oe=new Et,Lr=new qt,Nn=new M,Ee=new Ce,ii=new Ce,he=new M;class Bt extends bn{constructor(){super(),Object.defineProperty(this,"id",{value:vo++}),this.uuid=Ve(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xa(t)>65535?ga:ma)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new pe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,n){return Oe.makeTranslation(t,e,n),this.applyMatrix4(Oe),this}scale(t,e,n){return Oe.makeScale(t,e,n),this.applyMatrix4(Oe),this}lookAt(t){return Lr.lookAt(t),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nn).negate(),this.translate(Nn.x,Nn.y,Nn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ce);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ee.setFromBufferAttribute(r),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,Ee.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,Ee.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(Ee.min),this.boundingBox.expandByPoint(Ee.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(t){const n=this.boundingSphere.center;if(Ee.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ii.setFromBufferAttribute(o),this.morphTargetsRelative?(he.addVectors(Ee.min,ii.min),Ee.expandByPoint(he),he.addVectors(Ee.max,ii.max),Ee.expandByPoint(he)):(Ee.expandByPoint(ii.min),Ee.expandByPoint(ii.max))}Ee.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)he.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(he));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)he.fromBufferAttribute(o,c),l&&(Nn.fromBufferAttribute(t,c),he.add(Nn)),i=Math.max(i,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;e.tangent===void 0&&this.setAttribute("tangent",new ce(new Float32Array(4*o),4));const l=e.tangent.array,c=[],u=[];for(let B=0;B<o;B++)c[B]=new M,u[B]=new M;const h=new M,d=new M,f=new M,g=new $,x=new $,y=new $,m=new M,p=new M;function b(B,O,F){h.fromArray(i,B*3),d.fromArray(i,O*3),f.fromArray(i,F*3),g.fromArray(a,B*2),x.fromArray(a,O*2),y.fromArray(a,F*2),d.sub(h),f.sub(h),x.sub(g),y.sub(g);const A=1/(x.x*y.y-y.x*x.y);isFinite(A)&&(m.copy(d).multiplyScalar(y.y).addScaledVector(f,-x.y).multiplyScalar(A),p.copy(f).multiplyScalar(x.x).addScaledVector(d,-y.x).multiplyScalar(A),c[B].add(m),c[O].add(m),c[F].add(m),u[B].add(p),u[O].add(p),u[F].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let B=0,O=E.length;B<O;++B){const F=E[B],A=F.start,P=F.count;for(let I=A,R=A+P;I<R;I+=3)b(n[I+0],n[I+1],n[I+2])}const T=new M,_=new M,C=new M,D=new M;function N(B){C.fromArray(r,B*3),D.copy(C);const O=c[B];T.copy(O),T.sub(C.multiplyScalar(C.dot(O))).normalize(),_.crossVectors(D,O);const A=_.dot(u[B])<0?-1:1;l[B*4]=T.x,l[B*4+1]=T.y,l[B*4+2]=T.z,l[B*4+3]=A}for(let B=0,O=E.length;B<O;++B){const F=E[B],A=F.start,P=F.count;for(let I=A,R=A+P;I<R;I+=3)N(n[I+0]),N(n[I+1]),N(n[I+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new M,r=new M,a=new M,o=new M,l=new M,c=new M,u=new M,h=new M;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),y=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,y),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const a=n[i].array,o=t.attributes[i],l=o.array,c=o.itemSize*e,u=Math.min(l.length,a.length-c);for(let h=0,d=c;h<u;h++,d++)a[d]=l[h]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let x=0,y=l.length;x<y;x++){f=l[x]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new ce(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Bt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new Bt().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}Bt.prototype.isBufferGeometry=!0;const Ts=new Et,Bn=new Sn,Cr=new jn,rn=new M,sn=new M,an=new M,Rr=new M,Pr=new M,Dr=new M,Pi=new M,Di=new M,Fi=new M,Ii=new $,Ni=new $,Bi=new $,Fr=new M,zi=new M;class Rt extends qt{constructor(t=new Bt,e=new wn){super(),this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),t.ray.intersectsSphere(Cr)===!1)||(Ts.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(Ts),n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,f=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){const m=f[x],p=i[m.materialIndex],b=Math.max(m.start,g.start),E=Math.min(m.start+m.count,g.start+g.count);for(let T=b,_=E;T<_;T+=3){const C=o.getX(T),D=o.getX(T+1),N=o.getX(T+2);a=Ui(this,p,t,Bn,l,c,u,h,d,C,D,N),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const x=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let m=x,p=y;m<p;m+=3){const b=o.getX(m),E=o.getX(m+1),T=o.getX(m+2);a=Ui(this,i,t,Bn,l,c,u,h,d,b,E,T),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){const m=f[x],p=i[m.materialIndex],b=Math.max(m.start,g.start),E=Math.min(m.start+m.count,g.start+g.count);for(let T=b,_=E;T<_;T+=3){const C=T,D=T+1,N=T+2;a=Ui(this,p,t,Bn,l,c,u,h,d,C,D,N),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const x=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=x,p=y;m<p;m+=3){const b=m,E=m+1,T=m+2;a=Ui(this,i,t,Bn,l,c,u,h,d,b,E,T),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Rt.prototype.isMesh=!0;function _o(s,t,e,n,i,r,a,o){let l;if(t.side===1?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side!==2,o),l===null)return null;zi.copy(o),zi.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(zi);return c<e.near||c>e.far?null:{distance:c,point:zi.clone(),object:s}}function Ui(s,t,e,n,i,r,a,o,l,c,u,h){rn.fromBufferAttribute(i,c),sn.fromBufferAttribute(i,u),an.fromBufferAttribute(i,h);const d=s.morphTargetInfluences;if(t.morphTargets&&r&&d){Pi.set(0,0,0),Di.set(0,0,0),Fi.set(0,0,0);for(let g=0,x=r.length;g<x;g++){const y=d[g],m=r[g];y!==0&&(Rr.fromBufferAttribute(m,c),Pr.fromBufferAttribute(m,u),Dr.fromBufferAttribute(m,h),a?(Pi.addScaledVector(Rr,y),Di.addScaledVector(Pr,y),Fi.addScaledVector(Dr,y)):(Pi.addScaledVector(Rr.sub(rn),y),Di.addScaledVector(Pr.sub(sn),y),Fi.addScaledVector(Dr.sub(an),y)))}rn.add(Pi),sn.add(Di),an.add(Fi)}s.isSkinnedMesh&&t.skinning&&(s.boneTransform(c,rn),s.boneTransform(u,sn),s.boneTransform(h,an));const f=_o(s,t,e,n,rn,sn,an,Fr);if(f){o&&(Ii.fromBufferAttribute(o,c),Ni.fromBufferAttribute(o,u),Bi.fromBufferAttribute(o,h),f.uv=le.getUV(Fr,rn,sn,an,Ii,Ni,Bi,new $)),l&&(Ii.fromBufferAttribute(l,c),Ni.fromBufferAttribute(l,u),Bi.fromBufferAttribute(l,h),f.uv2=le.getUV(Fr,rn,sn,an,Ii,Ni,Bi,new $));const g={a:c,b:u,c:h,normal:new M,materialIndex:0};le.getNormal(rn,sn,an,g.normal),f.face=g}return f}class Ue extends Bt{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(h,2));function g(x,y,m,p,b,E,T,_,C,D,N){const B=E/C,O=T/D,F=E/2,A=T/2,P=_/2,I=C+1,R=D+1;let Y=0,it=0;const Q=new M;for(let ot=0;ot<R;ot++){const et=ot*O-A;for(let pt=0;pt<I;pt++){const wt=pt*B-F;Q[x]=wt*p,Q[y]=et*b,Q[m]=P,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[y]=0,Q[m]=_>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(pt/C),h.push(1-ot/D),Y+=1}}for(let ot=0;ot<D;ot++)for(let et=0;et<C;et++){const pt=d+et+I*ot,wt=d+et+I*(ot+1),W=d+(et+1)+I*(ot+1),kt=d+(et+1)+I*ot;l.push(pt,wt,kt),l.push(wt,W,kt),it+=6}o.addGroup(f,it,N),f+=it,d+=Y}}}function qn(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function xe(s){const t={};for(let e=0;e<s.length;e++){const n=qn(s[e]);for(const i in n)t[i]=n[i]}return t}const yo={clone:qn,merge:xe};var wo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends ue{constructor(t){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=wo,this.fragmentShader=Mo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qn(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}Mn.prototype.isShaderMaterial=!0;class $r extends qt{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){t===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new M),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}$r.prototype.isCamera=!0;class Te extends $r{constructor(t=50,e=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}Te.prototype.isPerspectiveCamera=!0;const zn=90,Un=1;class Qr extends qt{constructor(t,e,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Te(zn,Un,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new M(1,0,0)),this.add(i);const r=new Te(zn,Un,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new M(-1,0,0)),this.add(r);const a=new Te(zn,Un,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new M(0,1,0)),this.add(a);const o=new Te(zn,Un,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new M(0,-1,0)),this.add(o);const l=new Te(zn,Un,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new M(0,0,1)),this.add(l);const c=new Te(zn,Un,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new M(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,u=t.xr.enabled,h=t.getRenderTarget();t.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=d,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.xr.enabled=u}}class nr extends me{constructor(t,e,n,i,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:301,o=o!==void 0?o:1022,super(t,e,n,i,r,a,o,l,c,u),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}nr.prototype.isCubeTexture=!0;class va extends vn{constructor(t,e,n){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=n),super(t,t,e),e=e||{},this.texture=new nr(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.format=1023,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ue(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:qn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const a=new Rt(i,r),o=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Qr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}va.prototype.isWebGLCubeRenderTarget=!0;class _a extends me{constructor(t,e,n,i,r,a,o,l,c,u,h,d){super(null,a,o,l,c,u,i,r,h,d),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=c!==void 0?c:1003,this.minFilter=u!==void 0?u:1003,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}_a.prototype.isDataTexture=!0;const Gn=new jn,Gi=new M;class ir{constructor(t=new He,e=new He,n=new He,i=new He,r=new He,a=new He){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],f=n[9],g=n[10],x=n[11],y=n[12],m=n[13],p=n[14],b=n[15];return e[0].setComponents(o-i,h-l,x-d,b-y).normalize(),e[1].setComponents(o+i,h+l,x+d,b+y).normalize(),e[2].setComponents(o+r,h+c,x+f,b+m).normalize(),e[3].setComponents(o-r,h-c,x-f,b-m).normalize(),e[4].setComponents(o-a,h-u,x-g,b-p).normalize(),e[5].setComponents(o+a,h+u,x+g,b+p).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Gi.x=i.normal.x>0?t.max.x:t.min.x,Gi.y=i.normal.y>0?t.max.y:t.min.y,Gi.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Gi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ya(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function bo(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=s.createBuffer();s.bindBuffer(u,f),s.bufferData(u,h,d),c.onUploadCallback();let g=5126;return h instanceof Float32Array?g=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?e?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:h instanceof Int16Array?g=5122:h instanceof Uint32Array?g=5125:h instanceof Int32Array?g=5124:h instanceof Int8Array?g=5120:h instanceof Uint8Array&&(g=5121),{buffer:f,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,f=u.updateRange;s.bindBuffer(h,c),f.count===-1?s.bufferSubData(h,0,d):(e?s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class wa extends Bt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,d=e/l,f=[],g=[],x=[],y=[];for(let m=0;m<u;m++){const p=m*d-a;for(let b=0;b<c;b++){const E=b*h-r;g.push(E,-p,0),x.push(0,0,1),y.push(b/o),y.push(1-m/l)}}for(let m=0;m<l;m++)for(let p=0;p<o;p++){const b=p+c*m,E=p+c*(m+1),T=p+1+c*(m+1),_=p+1+c*m;f.push(b,E,_),f.push(E,T,_)}this.setIndex(f),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(x,3)),this.setAttribute("uv",new Pt(y,2))}}var So=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Eo=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,To=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Ao=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Lo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Co="vec3 transformed = vec3( position );",Ro=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Po=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Do=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fo=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Io=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,No=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bo=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zo=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Go=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Oo=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ho=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ko=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vo=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wo=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Xo=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zo="gl_FragColor = linearToOutputTexel( gl_FragColor );",jo=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Jo=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$o=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qo=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ko=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,el=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,nl=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,il=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,al=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,ol=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ll=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,cl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,hl=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,ul=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dl=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,fl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pl=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,ml=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,gl=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xl=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vl=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,_l=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,yl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ml=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bl=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sl=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,El=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Al=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ll=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Pl=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Dl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,Fl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Il=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nl=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Bl=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,zl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ul=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Gl=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ol=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ql=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xl=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Yl=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zl=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,jl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$l=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Ql=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kl=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ec=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ic=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rc=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,sc=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,ac=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,oc=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,lc=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,cc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,hc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,dc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fc=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mc=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xc=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vc=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_c=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bc=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sc=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ec=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tc=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ac=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lc=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rc=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dc=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ic=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nc=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bc=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Uc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oc=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hc=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,kc=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Wc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const Gt={alphamap_fragment:So,alphamap_pars_fragment:Eo,alphatest_fragment:To,aomap_fragment:Ao,aomap_pars_fragment:Lo,begin_vertex:Co,beginnormal_vertex:Ro,bsdfs:Po,bumpmap_pars_fragment:Do,clipping_planes_fragment:Fo,clipping_planes_pars_fragment:Io,clipping_planes_pars_vertex:No,clipping_planes_vertex:Bo,color_fragment:zo,color_pars_fragment:Uo,color_pars_vertex:Go,color_vertex:Oo,common:Ho,cube_uv_reflection_fragment:ko,defaultnormal_vertex:Vo,displacementmap_pars_vertex:Wo,displacementmap_vertex:qo,emissivemap_fragment:Xo,emissivemap_pars_fragment:Yo,encodings_fragment:Zo,encodings_pars_fragment:jo,envmap_fragment:Jo,envmap_common_pars_fragment:$o,envmap_pars_fragment:Qo,envmap_pars_vertex:Ko,envmap_physical_pars_fragment:hl,envmap_vertex:tl,fog_vertex:el,fog_pars_vertex:nl,fog_fragment:il,fog_pars_fragment:rl,gradientmap_pars_fragment:sl,lightmap_fragment:al,lightmap_pars_fragment:ol,lights_lambert_vertex:ll,lights_pars_begin:cl,lights_toon_fragment:ul,lights_toon_pars_fragment:dl,lights_phong_fragment:fl,lights_phong_pars_fragment:pl,lights_physical_fragment:ml,lights_physical_pars_fragment:gl,lights_fragment_begin:xl,lights_fragment_maps:vl,lights_fragment_end:_l,logdepthbuf_fragment:yl,logdepthbuf_pars_fragment:wl,logdepthbuf_pars_vertex:Ml,logdepthbuf_vertex:bl,map_fragment:Sl,map_pars_fragment:El,map_particle_fragment:Tl,map_particle_pars_fragment:Al,metalnessmap_fragment:Ll,metalnessmap_pars_fragment:Cl,morphnormal_vertex:Rl,morphtarget_pars_vertex:Pl,morphtarget_vertex:Dl,normal_fragment_begin:Fl,normal_fragment_maps:Il,normalmap_pars_fragment:Nl,clearcoat_normal_fragment_begin:Bl,clearcoat_normal_fragment_maps:zl,clearcoat_pars_fragment:Ul,packing:Gl,premultiplied_alpha_fragment:Ol,project_vertex:Hl,dithering_fragment:kl,dithering_pars_fragment:Vl,roughnessmap_fragment:Wl,roughnessmap_pars_fragment:ql,shadowmap_pars_fragment:Xl,shadowmap_pars_vertex:Yl,shadowmap_vertex:Zl,shadowmask_pars_fragment:jl,skinbase_vertex:Jl,skinning_pars_vertex:$l,skinning_vertex:Ql,skinnormal_vertex:Kl,specularmap_fragment:tc,specularmap_pars_fragment:ec,tonemapping_fragment:nc,tonemapping_pars_fragment:ic,transmissionmap_fragment:rc,transmissionmap_pars_fragment:sc,uv_pars_fragment:ac,uv_pars_vertex:oc,uv_vertex:lc,uv2_pars_fragment:cc,uv2_pars_vertex:hc,uv2_vertex:uc,worldpos_vertex:dc,background_frag:fc,background_vert:pc,cube_frag:mc,cube_vert:gc,depth_frag:xc,depth_vert:vc,distanceRGBA_frag:_c,distanceRGBA_vert:yc,equirect_frag:wc,equirect_vert:Mc,linedashed_frag:bc,linedashed_vert:Sc,meshbasic_frag:Ec,meshbasic_vert:Tc,meshlambert_frag:Ac,meshlambert_vert:Lc,meshmatcap_frag:Cc,meshmatcap_vert:Rc,meshtoon_frag:Pc,meshtoon_vert:Dc,meshphong_frag:Fc,meshphong_vert:Ic,meshphysical_frag:Nc,meshphysical_vert:Bc,normal_frag:zc,normal_vert:Uc,points_frag:Gc,points_vert:Oc,shadow_frag:Hc,shadow_vert:kc,sprite_frag:Vc,sprite_vert:Wc},ht={common:{diffuse:{value:new dt(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new pe},uv2Transform:{value:new pe},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new pe}},sprite:{diffuse:{value:new dt(15658734)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new pe}}},ke={basic:{uniforms:xe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:xe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.fog,ht.lights,{emissive:{value:new dt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:xe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:xe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:xe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new dt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:xe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:xe([ht.points,ht.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:xe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:xe([ht.common,ht.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:xe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.normal_vert,fragmentShader:Gt.normal_frag},sprite:{uniforms:xe([ht.sprite,ht.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},cube:{uniforms:xe([ht.envmap,{opacity:{value:1}}]),vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:xe([ht.common,ht.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:xe([ht.lights,ht.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};ke.physical={uniforms:xe([ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new $(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new dt(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};function qc(s,t,e,n,i){const r=new dt(0);let a=0,o,l,c=null,u=0,h=null;function d(g,x,y,m){let p=x.isScene===!0?x.background:null;p&&p.isTexture&&(p=t.get(p));const b=s.xr,E=b.getSession&&b.getSession();E&&E.environmentBlendMode==="additive"&&(p=null),p===null?f(r,a):p&&p.isColor&&(f(p,1),m=!0),(s.autoClear||m)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),p&&(p.isCubeTexture||p.mapping===306)?(l===void 0&&(l=new Rt(new Ue(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:qn(ke.cube.uniforms),vertexShader:ke.cube.vertexShader,fragmentShader:ke.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,_,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(c!==p||u!==p.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,c=p,u=p.version,h=s.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(o===void 0&&(o=new Rt(new wa(2,2),new Mn({name:"BackgroundMaterial",uniforms:qn(ke.background.uniforms),vertexShader:ke.background.vertexShader,fragmentShader:ke.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),o.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||u!==p.version||h!==s.toneMapping)&&(o.material.needsUpdate=!0,c=p,u=p.version,h=s.toneMapping),g.unshift(o,o.geometry,o.material,0,0,null))}function f(g,x){e.buffers.color.setClear(g.r,g.g,g.b,x,i)}return{getClearColor:function(){return r},setClearColor:function(g,x=1){r.set(g),a=x,f(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,f(r,a)},render:d}}function Xc(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=x(null);let c=l;function u(A,P,I,R,Y){let it=!1;if(a){const Q=g(R,I,P);c!==Q&&(c=Q,d(c.object)),it=y(R,Y),it&&m(R,Y)}else{const Q=P.wireframe===!0;(c.geometry!==R.id||c.program!==I.id||c.wireframe!==Q)&&(c.geometry=R.id,c.program=I.id,c.wireframe=Q,it=!0)}A.isInstancedMesh===!0&&(it=!0),Y!==null&&e.update(Y,34963),it&&(C(A,P,I,R),Y!==null&&s.bindBuffer(34963,e.get(Y).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(A){return n.isWebGL2?s.bindVertexArray(A):r.bindVertexArrayOES(A)}function f(A){return n.isWebGL2?s.deleteVertexArray(A):r.deleteVertexArrayOES(A)}function g(A,P,I){const R=I.wireframe===!0;let Y=o[A.id];Y===void 0&&(Y={},o[A.id]=Y);let it=Y[P.id];it===void 0&&(it={},Y[P.id]=it);let Q=it[R];return Q===void 0&&(Q=x(h()),it[R]=Q),Q}function x(A){const P=[],I=[],R=[];for(let Y=0;Y<i;Y++)P[Y]=0,I[Y]=0,R[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:R,object:A,attributes:{},index:null}}function y(A,P){const I=c.attributes,R=A.attributes;let Y=0;for(const it in R){const Q=I[it],ot=R[it];if(Q===void 0||Q.attribute!==ot||Q.data!==ot.data)return!0;Y++}return c.attributesNum!==Y||c.index!==P}function m(A,P){const I={},R=A.attributes;let Y=0;for(const it in R){const Q=R[it],ot={};ot.attribute=Q,Q.data&&(ot.data=Q.data),I[it]=ot,Y++}c.attributes=I,c.attributesNum=Y,c.index=P}function p(){const A=c.newAttributes;for(let P=0,I=A.length;P<I;P++)A[P]=0}function b(A){E(A,0)}function E(A,P){const I=c.newAttributes,R=c.enabledAttributes,Y=c.attributeDivisors;I[A]=1,R[A]===0&&(s.enableVertexAttribArray(A),R[A]=1),Y[A]!==P&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,P),Y[A]=P)}function T(){const A=c.newAttributes,P=c.enabledAttributes;for(let I=0,R=P.length;I<R;I++)P[I]!==A[I]&&(s.disableVertexAttribArray(I),P[I]=0)}function _(A,P,I,R,Y,it){n.isWebGL2===!0&&(I===5124||I===5125)?s.vertexAttribIPointer(A,P,I,Y,it):s.vertexAttribPointer(A,P,I,R,Y,it)}function C(A,P,I,R){if(n.isWebGL2===!1&&(A.isInstancedMesh||R.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;p();const Y=R.attributes,it=I.getAttributes(),Q=P.defaultAttributeValues;for(const ot in it){const et=it[ot];if(et>=0){const pt=Y[ot];if(pt!==void 0){const wt=pt.normalized,W=pt.itemSize,kt=e.get(pt);if(kt===void 0)continue;const Lt=kt.buffer,Mt=kt.type,yt=kt.bytesPerElement;if(pt.isInterleavedBufferAttribute){const Ot=pt.data,Ct=Ot.stride,Ft=pt.offset;Ot&&Ot.isInstancedInterleavedBuffer?(E(et,Ot.meshPerAttribute),R._maxInstanceCount===void 0&&(R._maxInstanceCount=Ot.meshPerAttribute*Ot.count)):b(et),s.bindBuffer(34962,Lt),_(et,W,Mt,wt,Ct*yt,Ft*yt)}else pt.isInstancedBufferAttribute?(E(et,pt.meshPerAttribute),R._maxInstanceCount===void 0&&(R._maxInstanceCount=pt.meshPerAttribute*pt.count)):b(et),s.bindBuffer(34962,Lt),_(et,W,Mt,wt,0,0)}else if(ot==="instanceMatrix"){const wt=e.get(A.instanceMatrix);if(wt===void 0)continue;const W=wt.buffer,kt=wt.type;E(et+0,1),E(et+1,1),E(et+2,1),E(et+3,1),s.bindBuffer(34962,W),s.vertexAttribPointer(et+0,4,kt,!1,64,0),s.vertexAttribPointer(et+1,4,kt,!1,64,16),s.vertexAttribPointer(et+2,4,kt,!1,64,32),s.vertexAttribPointer(et+3,4,kt,!1,64,48)}else if(ot==="instanceColor"){const wt=e.get(A.instanceColor);if(wt===void 0)continue;const W=wt.buffer,kt=wt.type;E(et,1),s.bindBuffer(34962,W),s.vertexAttribPointer(et,3,kt,!1,12,0)}else if(Q!==void 0){const wt=Q[ot];if(wt!==void 0)switch(wt.length){case 2:s.vertexAttrib2fv(et,wt);break;case 3:s.vertexAttrib3fv(et,wt);break;case 4:s.vertexAttrib4fv(et,wt);break;default:s.vertexAttrib1fv(et,wt)}}}}T()}function D(){O();for(const A in o){const P=o[A];for(const I in P){const R=P[I];for(const Y in R)f(R[Y].object),delete R[Y];delete P[I]}delete o[A]}}function N(A){if(o[A.id]===void 0)return;const P=o[A.id];for(const I in P){const R=P[I];for(const Y in R)f(R[Y].object),delete R[Y];delete P[I]}delete o[A.id]}function B(A){for(const P in o){const I=o[P];if(I[A.id]===void 0)continue;const R=I[A.id];for(const Y in R)f(R[Y].object),delete R[Y];delete I[A.id]}}function O(){F(),c!==l&&(c=l,d(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:O,resetDefaultState:F,dispose:D,releaseStatesOfGeometry:N,releaseStatesOfProgram:B,initAttributes:p,enableAttribute:b,disableUnusedAttributes:T}}function Yc(s,t,e,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,c,u,h),e.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Zc(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(_){if(_==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=e.logarithmicDepthBuffer===!0,u=s.getParameter(34930),h=s.getParameter(35660),d=s.getParameter(3379),f=s.getParameter(34076),g=s.getParameter(34921),x=s.getParameter(36347),y=s.getParameter(36348),m=s.getParameter(36349),p=h>0,b=a||t.has("OES_texture_float"),E=p&&b,T=a?s.getParameter(36183):0;return{isWebGL2:a,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:m,vertexTextures:p,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:T}}function jc(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new He,o=new pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){const g=h.length!==0||d||n!==0||i;return i=d,e=u(h,f,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,y=h.clipShadows,m=s.get(h);if(!i||g===null||g.length===0||r&&!y)r?u(null):c();else{const p=r?0:n,b=p*4;let E=m.clippingState||null;l.value=E,E=u(g,d,b,f);for(let T=0;T!==b;++T)E[T]=e[T];m.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let y=null;if(x!==0){if(y=l.value,g!==!0||y===null){const m=f+x*4,p=d.matrixWorldInverse;o.getNormalMatrix(p),(y===null||y.length<m)&&(y=new Float32Array(m));for(let b=0,E=f;b!==x;++b,E+=4)a.copy(h[b]).applyMatrix4(p,o),a.normal.toArray(y,E),y[E+3]=a.constant}l.value=y,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,y}}function Jc(s){let t=new WeakMap;function e(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=s.getRenderTarget(),u=new va(l.height/2);return u.fromEquirectangularTexture(s,a),t.set(a,u),s.setRenderTarget(c),a.addEventListener("dispose",i),e(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}function $c(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Qc(s,t,e,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],34962);const f=h.morphAttributes;for(const g in f){const x=f[g];for(let y=0,m=x.length;y<m;y++)t.update(x[y],34962)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(f!==null){const p=f.array;x=f.version;for(let b=0,E=p.length;b<E;b+=3){const T=p[b+0],_=p[b+1],C=p[b+2];d.push(T,_,_,C,C,T)}}else{const p=g.array;x=g.version;for(let b=0,E=p.length/3-1;b<E;b+=3){const T=b+0,_=b+1,C=b+2;d.push(T,_,_,C,C,T)}}const y=new(xa(d)>65535?ga:ma)(d,1);y.version=x;const m=r.get(h);m&&t.remove(m),r.set(h,y)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Kc(s,t,e,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,f){s.drawElements(r,f,o,d*l),e.update(f,r,1)}function h(d,f,g){if(g===0)return;let x,y;if(i)x=s,y="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](r,f,o,d*l,g),e.update(f,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function th(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case 4:e.triangles+=o*(r/3);break;case 1:e.lines+=o*(r/2);break;case 3:e.lines+=o*(r-1);break;case 2:e.lines+=o*r;break;case 0:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function eh(s,t){return s[0]-t[0]}function nh(s,t){return Math.abs(t[1])-Math.abs(s[1])}function ih(s){const t={},e=new Float32Array(8),n=[];for(let r=0;r<8;r++)n[r]=[r,0];function i(r,a,o,l){const c=r.morphTargetInfluences,u=c===void 0?0:c.length;let h=t[a.id];if(h===void 0){h=[];for(let y=0;y<u;y++)h[y]=[y,0];t[a.id]=h}for(let y=0;y<u;y++){const m=h[y];m[0]=y,m[1]=c[y]}h.sort(nh);for(let y=0;y<8;y++)y<u&&h[y][1]?(n[y][0]=h[y][0],n[y][1]=h[y][1]):(n[y][0]=Number.MAX_SAFE_INTEGER,n[y][1]=0);n.sort(eh);const d=o.morphTargets&&a.morphAttributes.position,f=o.morphNormals&&a.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const m=n[y],p=m[0],b=m[1];p!==Number.MAX_SAFE_INTEGER&&b?(d&&a.getAttribute("morphTarget"+y)!==d[p]&&a.setAttribute("morphTarget"+y,d[p]),f&&a.getAttribute("morphNormal"+y)!==f[p]&&a.setAttribute("morphNormal"+y,f[p]),e[y]=b,g+=b):(d&&a.hasAttribute("morphTarget"+y)===!0&&a.deleteAttribute("morphTarget"+y),f&&a.hasAttribute("morphNormal"+y)===!0&&a.deleteAttribute("morphNormal"+y),e[y]=0)}const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",e)}return{update:i}}function rh(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);return i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Ma extends me{constructor(t=null,e=1,n=1,i=1){super(null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Ma.prototype.isDataTexture2DArray=!0;class ba extends me{constructor(t=null,e=1,n=1,i=1){super(null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}ba.prototype.isDataTexture3D=!0;const Sa=new me,sh=new Ma,ah=new ba,Ea=new nr,As=[],Ls=[],Cs=new Float32Array(16),Rs=new Float32Array(9),Ps=new Float32Array(4);function $n(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=As[i];if(r===void 0&&(r=new Float32Array(i),As[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ta(s,t){let e=Ls[t];e===void 0&&(e=new Int32Array(t),Ls[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function oh(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function lh(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),ve(e,t)}}function ch(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),ve(e,t)}}function hh(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),ve(e,t)}}function uh(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;Ps.set(n),s.uniformMatrix2fv(this.addr,!1,Ps),ve(e,n)}}function dh(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;Rs.set(n),s.uniformMatrix3fv(this.addr,!1,Rs),ve(e,n)}}function fh(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;Cs.set(n),s.uniformMatrix4fv(this.addr,!1,Cs),ve(e,n)}}function ph(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function mh(s,t){const e=this.cache;ye(e,t)||(s.uniform2iv(this.addr,t),ve(e,t))}function gh(s,t){const e=this.cache;ye(e,t)||(s.uniform3iv(this.addr,t),ve(e,t))}function xh(s,t){const e=this.cache;ye(e,t)||(s.uniform4iv(this.addr,t),ve(e,t))}function vh(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function _h(s,t){const e=this.cache;ye(e,t)||(s.uniform2uiv(this.addr,t),ve(e,t))}function yh(s,t){const e=this.cache;ye(e,t)||(s.uniform3uiv(this.addr,t),ve(e,t))}function wh(s,t){const e=this.cache;ye(e,t)||(s.uniform4uiv(this.addr,t),ve(e,t))}function Mh(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.safeSetTexture2D(t||Sa,i)}function bh(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ah,i)}function Sh(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.safeSetTextureCube(t||Ea,i)}function Eh(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||sh,i)}function Th(s){switch(s){case 5126:return oh;case 35664:return lh;case 35665:return ch;case 35666:return hh;case 35674:return uh;case 35675:return dh;case 35676:return fh;case 5124:case 35670:return ph;case 35667:case 35671:return mh;case 35668:case 35672:return gh;case 35669:case 35673:return xh;case 5125:return vh;case 36294:return _h;case 36295:return yh;case 36296:return wh;case 35678:case 36198:case 36298:case 36306:case 35682:return Mh;case 35679:case 36299:case 36307:return bh;case 35680:case 36300:case 36308:case 36293:return Sh;case 36289:case 36303:case 36311:case 36292:return Eh}}function Ah(s,t){s.uniform1fv(this.addr,t)}function Lh(s,t){const e=$n(t,this.size,2);s.uniform2fv(this.addr,e)}function Ch(s,t){const e=$n(t,this.size,3);s.uniform3fv(this.addr,e)}function Rh(s,t){const e=$n(t,this.size,4);s.uniform4fv(this.addr,e)}function Ph(s,t){const e=$n(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Dh(s,t){const e=$n(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Fh(s,t){const e=$n(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ih(s,t){s.uniform1iv(this.addr,t)}function Nh(s,t){s.uniform2iv(this.addr,t)}function Bh(s,t){s.uniform3iv(this.addr,t)}function zh(s,t){s.uniform4iv(this.addr,t)}function Uh(s,t){s.uniform1uiv(this.addr,t)}function Gh(s,t){s.uniform2uiv(this.addr,t)}function Oh(s,t){s.uniform3uiv(this.addr,t)}function Hh(s,t){s.uniform4uiv(this.addr,t)}function kh(s,t,e){const n=t.length,i=Ta(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.safeSetTexture2D(t[r]||Sa,i[r])}function Vh(s,t,e){const n=t.length,i=Ta(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.safeSetTextureCube(t[r]||Ea,i[r])}function Wh(s){switch(s){case 5126:return Ah;case 35664:return Lh;case 35665:return Ch;case 35666:return Rh;case 35674:return Ph;case 35675:return Dh;case 35676:return Fh;case 5124:case 35670:return Ih;case 35667:case 35671:return Nh;case 35668:case 35672:return Bh;case 35669:case 35673:return zh;case 5125:return Uh;case 36294:return Gh;case 36295:return Oh;case 36296:return Hh;case 35678:case 36198:case 36298:case 36306:case 35682:return kh;case 35680:case 36300:case 36308:case 36293:return Vh}}function qh(s,t,e){this.id=s,this.addr=e,this.cache=[],this.setValue=Th(t.type)}function Aa(s,t,e){this.id=s,this.addr=e,this.cache=[],this.size=t.size,this.setValue=Wh(t.type)}Aa.prototype.updateCache=function(s){const t=this.cache;s instanceof Float32Array&&t.length!==s.length&&(this.cache=new Float32Array(s.length)),ve(t,s)};function La(s){this.id=s,this.seq=[],this.map={}}La.prototype.setValue=function(s,t,e){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const a=n[i];a.setValue(s,t[a.id],e)}};const Ir=/(\w+)(\])?(\[|\.)?/g;function Ds(s,t){s.seq.push(t),s.map[t.id]=t}function Xh(s,t,e){const n=s.name,i=n.length;for(Ir.lastIndex=0;;){const r=Ir.exec(n),a=Ir.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ds(e,c===void 0?new qh(o,s,t):new Aa(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new La(o),Ds(e,h)),e=h}}}function cn(s,t){this.seq=[],this.map={};const e=s.getProgramParameter(t,35718);for(let n=0;n<e;++n){const i=s.getActiveUniform(t,n),r=s.getUniformLocation(t,i.name);Xh(i,r,this)}}cn.prototype.setValue=function(s,t,e,n){const i=this.map[t];i!==void 0&&i.setValue(s,e,n)};cn.prototype.setOptional=function(s,t,e){const n=t[e];n!==void 0&&this.setValue(s,e,n)};cn.upload=function(s,t,e,n){for(let i=0,r=t.length;i!==r;++i){const a=t[i],o=e[a.id];o.needsUpdate!==!1&&a.setValue(s,o.value,n)}};cn.seqWithValue=function(s,t){const e=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in t&&e.push(r)}return e};function Fs(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let Yh=0;function Zh(s){const t=s.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function Ca(s){switch(s){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Is(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=s.getShaderSource(t);return"THREE.WebGLShader: gl.getShaderInfoLog() "+e+`
`+i+Zh(r)}function ri(s,t){const e=Ca(t);return"vec4 "+s+"( vec4 value ) { return "+e[0]+"ToLinear"+e[1]+"; }"}function jh(s,t){const e=Ca(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Jh(s,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="OptimizedCineon";break;case 4:e="ACESFilmic";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $h(s){return[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hi).join(`
`)}function Qh(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kh(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const a=s.getActiveAttrib(t,i).name;e[a]=s.getAttribLocation(t,a)}return e}function hi(s){return s!==""}function Ns(s,t){return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bs(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tu=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wr(s){return s.replace(tu,eu)}function eu(s,t){const e=Gt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Wr(e)}const nu=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,iu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zs(s){return s.replace(iu,Ra).replace(nu,ru)}function ru(s,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ra(s,t,e,n)}function Ra(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Us(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function su(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function au(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:case 307:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ou(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case 302:case 307:t="ENVMAP_MODE_REFRACTION";break}return t}function lu(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function cu(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=su(e),c=au(e),u=ou(e),h=lu(e),d=s.gammaFactor>0?s.gammaFactor:1,f=e.isWebGL2?"":$h(e),g=Qh(r),x=i.createProgram();let y,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=[g].filter(hi).join(`
`),y.length>0&&(y+=`
`),m=[f,g].filter(hi).join(`
`),m.length>0&&(m+=`
`)):(y=[Us(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+e.maxBones,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hi).join(`
`),m=[f,Us(e),"#define SHADER_NAME "+e.shaderName,g,e.alphaTest?"#define ALPHATEST "+e.alphaTest+(e.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.sheen?"#define USE_SHEEN":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Gt.tonemapping_pars_fragment:"",e.toneMapping!==0?Jh("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",Gt.encodings_pars_fragment,e.map?ri("mapTexelToLinear",e.mapEncoding):"",e.matcap?ri("matcapTexelToLinear",e.matcapEncoding):"",e.envMap?ri("envMapTexelToLinear",e.envMapEncoding):"",e.emissiveMap?ri("emissiveMapTexelToLinear",e.emissiveMapEncoding):"",e.lightMap?ri("lightMapTexelToLinear",e.lightMapEncoding):"",jh("linearToOutputTexel",e.outputEncoding),e.depthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hi).join(`
`)),a=Wr(a),a=Ns(a,e),a=Bs(a,e),o=Wr(o),o=Ns(o,e),o=Bs(o,e),a=zs(a),o=zs(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===ps?"":"out highp vec4 pc_fragColor;",e.glslVersion===ps?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=p+y+a,E=p+m+o,T=Fs(i,35633,b),_=Fs(i,35632,E);if(i.attachShader(x,T),i.attachShader(x,_),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),s.debug.checkShaderErrors){const N=i.getProgramInfoLog(x).trim(),B=i.getShaderInfoLog(T).trim(),O=i.getShaderInfoLog(_).trim();let F=!0,A=!0;if(i.getProgramParameter(x,35714)===!1){F=!1;const P=Is(i,T,"vertex"),I=Is(i,_,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(x,35715),"gl.getProgramInfoLog",N,P,I)}else N!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",N):(B===""||O==="")&&(A=!1);A&&(this.diagnostics={runnable:F,programLog:N,vertexShader:{log:B,prefix:y},fragmentShader:{log:O,prefix:m}})}i.deleteShader(T),i.deleteShader(_);let C;this.getUniforms=function(){return C===void 0&&(C=new cn(i,x)),C};let D;return this.getAttributes=function(){return D===void 0&&(D=Kh(i,x)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.name=e.shaderName,this.id=Yh++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=_,this}function hu(s,t,e,n,i,r){const a=[],o=n.isWebGL2,l=n.logarithmicDepthBuffer,c=n.floatVertexTextures,u=n.maxVertexUniforms,h=n.vertexTextures;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},g=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function x(_){const D=_.skeleton.bones;if(c)return 1024;{const B=Math.floor((u-20)/4),O=Math.min(B,D.length);return O<D.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+D.length+" bones. This GPU supports "+O+"."),0):O}}function y(_){let C;return _&&_.isTexture?C=_.encoding:_&&_.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),C=_.texture.encoding):C=3e3,C}function m(_,C,D,N,B){const O=N.fog,F=_.isMeshStandardMaterial?N.environment:null,A=t.get(_.envMap||F),P=f[_.type],I=B.isSkinnedMesh?x(B):0;_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let R,Y;if(P){const ot=ke[P];R=ot.vertexShader,Y=ot.fragmentShader}else R=_.vertexShader,Y=_.fragmentShader;const it=s.getRenderTarget();return{isWebGL2:o,shaderID:P,shaderName:_.type,vertexShader:R,fragmentShader:Y,defines:_.defines,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,instancing:B.isInstancedMesh===!0,instancingColor:B.isInstancedMesh===!0&&B.instanceColor!==null,supportsVertexTextures:h,outputEncoding:it!==null?y(it.texture):s.outputEncoding,map:!!_.map,mapEncoding:y(_.map),matcap:!!_.matcap,matcapEncoding:y(_.matcap),envMap:!!A,envMapMode:A&&A.mapping,envMapEncoding:y(A),envMapCubeUV:!!A&&(A.mapping===306||A.mapping===307),lightMap:!!_.lightMap,lightMapEncoding:y(_.lightMap),aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,emissiveMapEncoding:y(_.emissiveMap),bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===1,tangentSpaceNormalMap:_.normalMapType===0,clearcoatMap:!!_.clearcoatMap,clearcoatRoughnessMap:!!_.clearcoatRoughnessMap,clearcoatNormalMap:!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,alphaMap:!!_.alphaMap,gradientMap:!!_.gradientMap,sheen:!!_.sheen,transmissionMap:!!_.transmissionMap,combine:_.combine,vertexTangents:_.normalMap&&_.vertexTangents,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&B.geometry&&B.geometry.attributes.color&&B.geometry.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.transmissionMap)&&!!_.displacementMap,fog:!!O,useFog:_.fog,fogExp2:O&&O.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:l,skinning:_.skinning&&I>0,maxBones:I,useVertexTexture:c,morphTargets:_.morphTargets,morphNormals:_.morphNormals,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:_.toneMapped?s.toneMapping:0,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,alphaTest:_.alphaTest,doubleSided:_.side===2,flipSided:_.side===1,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:o||e.has("EXT_frag_depth"),rendererExtensionDrawBuffers:o||e.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:o||e.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.fragmentShader),C.push(_.vertexShader)),_.defines!==void 0)for(const D in _.defines)C.push(D),C.push(_.defines[D]);if(_.isRawShaderMaterial===!1){for(let D=0;D<g.length;D++)C.push(_[g[D]]);C.push(s.outputEncoding),C.push(s.gammaFactor)}return C.push(_.customProgramCacheKey),C.join()}function b(_){const C=f[_.type];let D;if(C){const N=ke[C];D=yo.clone(N.uniforms)}else D=_.uniforms;return D}function E(_,C){let D;for(let N=0,B=a.length;N<B;N++){const O=a[N];if(O.cacheKey===C){D=O,++D.usedTimes;break}}return D===void 0&&(D=new cu(s,C,_,i),a.push(D)),D}function T(_){if(--_.usedTimes===0){const C=a.indexOf(_);a[C]=a[a.length-1],a.pop(),_.destroy()}}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:E,releaseProgram:T,programs:a}}function uu(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function du(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.program!==t.program?s.program.id-t.program.id:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function fu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Gs(s){const t=[];let e=0;const n=[],i=[],r={id:-1};function a(){e=0,n.length=0,i.length=0}function o(d,f,g,x,y,m){let p=t[e];const b=s.get(g);return p===void 0?(p={id:d.id,object:d,geometry:f,material:g,program:b.program||r,groupOrder:x,renderOrder:d.renderOrder,z:y,group:m},t[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=g,p.program=b.program||r,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function l(d,f,g,x,y,m){const p=o(d,f,g,x,y,m);(g.transparent===!0?i:n).push(p)}function c(d,f,g,x,y,m){const p=o(d,f,g,x,y,m);(g.transparent===!0?i:n).unshift(p)}function u(d,f){n.length>1&&n.sort(d||du),i.length>1&&i.sort(f||fu)}function h(){for(let d=e,f=t.length;d<f;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.program=null,g.group=null}}return{opaque:n,transparent:i,init:a,push:l,unshift:c,finish:h,sort:u}}function pu(s){let t=new WeakMap;function e(i,r){let a;return t.has(i)===!1?(a=new Gs(s),t.set(i,[a])):r>=t.get(i).length?(a=new Gs(s),t.get(i).push(a)):a=t.get(i)[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function mu(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new M,color:new dt};break;case"SpotLight":e={position:new M,direction:new M,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new M,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new M,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new M,halfWidth:new M,halfHeight:new M};break}return s[t.id]=e,e}}}function gu(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let xu=0;function vu(s,t){return(t.castShadow?1:0)-(s.castShadow?1:0)}function _u(s,t){const e=new mu,n=gu(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new M);const r=new M,a=new Et,o=new Et;function l(u){let h=0,d=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let g=0,x=0,y=0,m=0,p=0,b=0,E=0,T=0;u.sort(vu);for(let C=0,D=u.length;C<D;C++){const N=u[C],B=N.color,O=N.intensity,F=N.distance,A=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=B.r*O,d+=B.g*O,f+=B.b*O;else if(N.isLightProbe)for(let P=0;P<9;P++)i.probe[P].addScaledVector(N.sh.coefficients[P],O);else if(N.isDirectionalLight){const P=e.get(N);if(P.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const I=N.shadow,R=n.get(N);R.shadowBias=I.bias,R.shadowNormalBias=I.normalBias,R.shadowRadius=I.radius,R.shadowMapSize=I.mapSize,i.directionalShadow[g]=R,i.directionalShadowMap[g]=A,i.directionalShadowMatrix[g]=N.shadow.matrix,b++}i.directional[g]=P,g++}else if(N.isSpotLight){const P=e.get(N);if(P.position.setFromMatrixPosition(N.matrixWorld),P.color.copy(B).multiplyScalar(O),P.distance=F,P.coneCos=Math.cos(N.angle),P.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),P.decay=N.decay,N.castShadow){const I=N.shadow,R=n.get(N);R.shadowBias=I.bias,R.shadowNormalBias=I.normalBias,R.shadowRadius=I.radius,R.shadowMapSize=I.mapSize,i.spotShadow[y]=R,i.spotShadowMap[y]=A,i.spotShadowMatrix[y]=N.shadow.matrix,T++}i.spot[y]=P,y++}else if(N.isRectAreaLight){const P=e.get(N);P.color.copy(B).multiplyScalar(O),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=P,m++}else if(N.isPointLight){const P=e.get(N);if(P.color.copy(N.color).multiplyScalar(N.intensity),P.distance=N.distance,P.decay=N.decay,N.castShadow){const I=N.shadow,R=n.get(N);R.shadowBias=I.bias,R.shadowNormalBias=I.normalBias,R.shadowRadius=I.radius,R.shadowMapSize=I.mapSize,R.shadowCameraNear=I.camera.near,R.shadowCameraFar=I.camera.far,i.pointShadow[x]=R,i.pointShadowMap[x]=A,i.pointShadowMatrix[x]=N.shadow.matrix,E++}i.point[x]=P,x++}else if(N.isHemisphereLight){const P=e.get(N);P.skyColor.copy(N.color).multiplyScalar(O),P.groundColor.copy(N.groundColor).multiplyScalar(O),i.hemi[p]=P,p++}}m>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const _=i.hash;(_.directionalLength!==g||_.pointLength!==x||_.spotLength!==y||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==b||_.numPointShadows!==E||_.numSpotShadows!==T)&&(i.directional.length=g,i.spot.length=y,i.rectArea.length=m,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotShadowMatrix.length=T,_.directionalLength=g,_.pointLength=x,_.spotLength=y,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=b,_.numPointShadows=E,_.numSpotShadows=T,i.version=xu++)}function c(u,h){let d=0,f=0,g=0,x=0,y=0;const m=h.matrixWorldInverse;for(let p=0,b=u.length;p<b;p++){const E=u[p];if(E.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),d++}else if(E.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),g++}else if(E.isRectAreaLight){const T=i.rectArea[x];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),o.identity(),a.copy(E.matrixWorld),a.premultiply(m),o.extractRotation(a),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const T=i.hemi[y];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(m),T.direction.normalize(),y++}}}return{setup:l,setupView:c,state:i}}function Os(s,t){const e=new _u(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(){e.setup(n)}function c(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function yu(s,t){let e=new WeakMap;function n(r,a=0){let o;return e.has(r)===!1?(o=new Os(s,t),e.set(r,[o])):a>=e.get(r).length?(o=new Os(s,t),e.get(r).push(o)):o=e.get(r)[a],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class Pa extends ue{constructor(t){super(),this.type="MeshDepthMaterial",this.depthPacking=3200,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}Pa.prototype.isMeshDepthMaterial=!0;class Da extends ue{constructor(t){super(),this.type="MeshDistanceMaterial",this.referencePosition=new M,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}Da.prototype.isMeshDistanceMaterial=!0;var wu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Mu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Fa(s,t,e){let n=new ir;const i=new $,r=new $,a=new Yt,o=[],l=[],c={},u=e.maxTextureSize,h={0:1,1:0,2:2},d=new Mn({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:Mu,fragmentShader:wu}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Rt(g,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(_,C,D){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||_.length===0)return;const N=s.getRenderTarget(),B=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),F=s.state;F.setBlending(0),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let A=0,P=_.length;A<P;A++){const I=_[A],R=I.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const Y=R.getFrameExtents();if(i.multiply(Y),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Y.x),i.x=r.x*Y.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Y.y),i.y=r.y*Y.y,R.mapSize.y=r.y)),R.map===null&&!R.isPointLightShadow&&this.type===3){const Q={minFilter:1006,magFilter:1006,format:1023};R.map=new vn(i.x,i.y,Q),R.map.texture.name=I.name+".shadowMap",R.mapPass=new vn(i.x,i.y,Q),R.camera.updateProjectionMatrix()}if(R.map===null){const Q={minFilter:1003,magFilter:1003,format:1023};R.map=new vn(i.x,i.y,Q),R.map.texture.name=I.name+".shadowMap",R.camera.updateProjectionMatrix()}s.setRenderTarget(R.map),s.clear();const it=R.getViewportCount();for(let Q=0;Q<it;Q++){const ot=R.getViewport(Q);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),F.viewport(a),R.updateMatrices(I,Q),n=R.getFrustum(),T(C,D,R.camera,I,this.type)}!R.isPointLightShadow&&this.type===3&&m(R,D),R.needsUpdate=!1}y.needsUpdate=!1,s.setRenderTarget(N,B,O)};function m(_,C){const D=t.update(x);d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,s.setRenderTarget(_.mapPass),s.clear(),s.renderBufferDirect(C,null,D,d,x,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,s.setRenderTarget(_.map),s.clear(),s.renderBufferDirect(C,null,D,f,x,null)}function p(_,C,D){const N=_<<0|C<<1|D<<2;let B=o[N];return B===void 0&&(B=new Pa({depthPacking:3201,morphTargets:_,skinning:C}),o[N]=B),B}function b(_,C,D){const N=_<<0|C<<1|D<<2;let B=l[N];return B===void 0&&(B=new Da({morphTargets:_,skinning:C}),l[N]=B),B}function E(_,C,D,N,B,O,F){let A=null,P=p,I=_.customDepthMaterial;if(N.isPointLight===!0&&(P=b,I=_.customDistanceMaterial),I===void 0){let R=!1;D.morphTargets===!0&&(R=C.morphAttributes&&C.morphAttributes.position&&C.morphAttributes.position.length>0);let Y=!1;_.isSkinnedMesh===!0&&(D.skinning===!0?Y=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",_));const it=_.isInstancedMesh===!0;A=P(R,Y,it)}else A=I;if(s.localClippingEnabled&&D.clipShadows===!0&&D.clippingPlanes.length!==0){const R=A.uuid,Y=D.uuid;let it=c[R];it===void 0&&(it={},c[R]=it);let Q=it[Y];Q===void 0&&(Q=A.clone(),it[Y]=Q),A=Q}return A.visible=D.visible,A.wireframe=D.wireframe,F===3?A.side=D.shadowSide!==null?D.shadowSide:D.side:A.side=D.shadowSide!==null?D.shadowSide:h[D.side],A.clipShadows=D.clipShadows,A.clippingPlanes=D.clippingPlanes,A.clipIntersection=D.clipIntersection,A.wireframeLinewidth=D.wireframeLinewidth,A.linewidth=D.linewidth,N.isPointLight===!0&&A.isMeshDistanceMaterial===!0&&(A.referencePosition.setFromMatrixPosition(N.matrixWorld),A.nearDistance=B,A.farDistance=O),A}function T(_,C,D,N,B){if(_.visible===!1)return;if(_.layers.test(C.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&B===3)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,_.matrixWorld);const A=t.update(_),P=_.material;if(Array.isArray(P)){const I=A.groups;for(let R=0,Y=I.length;R<Y;R++){const it=I[R],Q=P[it.materialIndex];if(Q&&Q.visible){const ot=E(_,A,Q,N,D.near,D.far,B);s.renderBufferDirect(D,null,A,ot,_,it)}}}else if(P.visible){const I=E(_,A,P,N,D.near,D.far,B);s.renderBufferDirect(D,null,A,I,_,null)}}const F=_.children;for(let A=0,P=F.length;A<P;A++)T(F[A],C,D,N,B)}}function bu(s,t,e){const n=e.isWebGL2;function i(){let L=!1;const tt=new Yt;let st=null;const mt=new Yt(0,0,0,0);return{setMask:function(Z){st!==Z&&!L&&(s.colorMask(Z,Z,Z,Z),st=Z)},setLocked:function(Z){L=Z},setClear:function(Z,St,zt,Qt,de){de===!0&&(Z*=Qt,St*=Qt,zt*=Qt),tt.set(Z,St,zt,Qt),mt.equals(tt)===!1&&(s.clearColor(Z,St,zt,Qt),mt.copy(tt))},reset:function(){L=!1,st=null,mt.set(-1,0,0,0)}}}function r(){let L=!1,tt=null,st=null,mt=null;return{setTest:function(Z){Z?pt(2929):wt(2929)},setMask:function(Z){tt!==Z&&!L&&(s.depthMask(Z),tt=Z)},setFunc:function(Z){if(st!==Z){if(Z)switch(Z){case 0:s.depthFunc(512);break;case 1:s.depthFunc(519);break;case 2:s.depthFunc(513);break;case 3:s.depthFunc(515);break;case 4:s.depthFunc(514);break;case 5:s.depthFunc(518);break;case 6:s.depthFunc(516);break;case 7:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);st=Z}},setLocked:function(Z){L=Z},setClear:function(Z){mt!==Z&&(s.clearDepth(Z),mt=Z)},reset:function(){L=!1,tt=null,st=null,mt=null}}}function a(){let L=!1,tt=null,st=null,mt=null,Z=null,St=null,zt=null,Qt=null,de=null;return{setTest:function(Vt){L||(Vt?pt(2960):wt(2960))},setMask:function(Vt){tt!==Vt&&!L&&(s.stencilMask(Vt),tt=Vt)},setFunc:function(Vt,we,jt){(st!==Vt||mt!==we||Z!==jt)&&(s.stencilFunc(Vt,we,jt),st=Vt,mt=we,Z=jt)},setOp:function(Vt,we,jt){(St!==Vt||zt!==we||Qt!==jt)&&(s.stencilOp(Vt,we,jt),St=Vt,zt=we,Qt=jt)},setLocked:function(Vt){L=Vt},setClear:function(Vt){de!==Vt&&(s.clearStencil(Vt),de=Vt)},reset:function(){L=!1,tt=null,st=null,mt=null,Z=null,St=null,zt=null,Qt=null,de=null}}}const o=new i,l=new r,c=new a;let u={},h=null,d={},f=null,g=!1,x=null,y=null,m=null,p=null,b=null,E=null,T=null,_=!1,C=null,D=null,N=null,B=null,O=null;const F=s.getParameter(35661);let A=!1,P=0;const I=s.getParameter(7938);I.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(I)[1]),A=P>=1):I.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),A=P>=2);let R=null,Y={};const it=new Yt(0,0,s.canvas.width,s.canvas.height),Q=new Yt(0,0,s.canvas.width,s.canvas.height);function ot(L,tt,st){const mt=new Uint8Array(4),Z=s.createTexture();s.bindTexture(L,Z),s.texParameteri(L,10241,9728),s.texParameteri(L,10240,9728);for(let St=0;St<st;St++)s.texImage2D(tt+St,0,6408,1,1,0,6408,5121,mt);return Z}const et={};et[3553]=ot(3553,3553,1),et[34067]=ot(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pt(2929),l.setFunc(3),Ft(!1),J(1),pt(2884),Ot(0);function pt(L){u[L]!==!0&&(s.enable(L),u[L]=!0)}function wt(L){u[L]!==!1&&(s.disable(L),u[L]=!1)}function W(L){L!==h&&(s.bindFramebuffer(36160,L),h=L)}function kt(L,tt){tt===null&&h!==null&&(tt=h),d[L]!==tt&&(s.bindFramebuffer(L,tt),d[L]=tt,n&&(L===36009&&(d[36160]=tt),L===36160&&(d[36009]=tt)))}function Lt(L){return f!==L?(s.useProgram(L),f=L,!0):!1}const Mt={100:32774,101:32778,102:32779};if(n)Mt[103]=32775,Mt[104]=32776;else{const L=t.get("EXT_blend_minmax");L!==null&&(Mt[103]=L.MIN_EXT,Mt[104]=L.MAX_EXT)}const yt={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function Ot(L,tt,st,mt,Z,St,zt,Qt){if(L===0){g===!0&&(wt(3042),g=!1);return}if(g===!1&&(pt(3042),g=!0),L!==5){if(L!==x||Qt!==_){if((y!==100||b!==100)&&(s.blendEquation(32774),y=100,b=100),Qt)switch(L){case 1:s.blendFuncSeparate(1,771,1,771);break;case 2:s.blendFunc(1,1);break;case 3:s.blendFuncSeparate(0,0,769,771);break;case 4:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case 1:s.blendFuncSeparate(770,771,1,771);break;case 2:s.blendFunc(770,1);break;case 3:s.blendFunc(0,769);break;case 4:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,p=null,E=null,T=null,x=L,_=Qt}return}Z=Z||tt,St=St||st,zt=zt||mt,(tt!==y||Z!==b)&&(s.blendEquationSeparate(Mt[tt],Mt[Z]),y=tt,b=Z),(st!==m||mt!==p||St!==E||zt!==T)&&(s.blendFuncSeparate(yt[st],yt[mt],yt[St],yt[zt]),m=st,p=mt,E=St,T=zt),x=L,_=null}function Ct(L,tt){L.side===2?wt(2884):pt(2884);let st=L.side===1;tt&&(st=!st),Ft(st),L.blending===1&&L.transparent===!1?Ot(0):Ot(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const mt=L.stencilWrite;c.setTest(mt),mt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),nt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pt(32926):wt(32926)}function Ft(L){C!==L&&(L?s.frontFace(2304):s.frontFace(2305),C=L)}function J(L){L!==0?(pt(2884),L!==D&&(L===1?s.cullFace(1029):L===2?s.cullFace(1028):s.cullFace(1032))):wt(2884),D=L}function K(L){L!==N&&(A&&s.lineWidth(L),N=L)}function nt(L,tt,st){L?(pt(32823),(B!==tt||O!==st)&&(s.polygonOffset(tt,st),B=tt,O=st)):wt(32823)}function ft(L){L?pt(3089):wt(3089)}function lt(L){L===void 0&&(L=33984+F-1),R!==L&&(s.activeTexture(L),R=L)}function S(L,tt){R===null&&lt();let st=Y[R];st===void 0&&(st={type:void 0,texture:void 0},Y[R]=st),(st.type!==L||st.texture!==tt)&&(s.bindTexture(L,tt||et[L]),st.type=L,st.texture=tt)}function w(){const L=Y[R];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(L){it.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),it.copy(L))}function It(L){Q.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Q.copy(L))}function vt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},R=null,Y={},h=null,d={},f=null,g=!1,x=null,y=null,m=null,p=null,b=null,E=null,T=null,_=!1,C=null,D=null,N=null,B=null,O=null,it.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:pt,disable:wt,bindFramebuffer:kt,bindXRFramebuffer:W,useProgram:Lt,setBlending:Ot,setMaterial:Ct,setFlipSided:Ft,setCullFace:J,setLineWidth:K,setPolygonOffset:nt,setScissorTest:ft,activeTexture:lt,bindTexture:S,unbindTexture:w,compressedTexImage2D:q,texImage2D:X,texImage3D:rt,scissor:ut,viewport:It,reset:vt}}function Su(s,t,e,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=new WeakMap;let f,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,w){return g?new OffscreenCanvas(S,w):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function y(S,w,q,X){let rt=1;if((S.width>X||S.height>X)&&(rt=X/Math.max(S.width,S.height)),rt<1||w===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ut=w?io:Math.floor,It=ut(rt*S.width),vt=ut(rt*S.height);f===void 0&&(f=x(It,vt));const L=q?x(It,vt):f;return L.width=It,L.height=vt,L.getContext("2d").drawImage(S,0,0,It,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+It+"x"+vt+")."),L}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return ms(S.width)&&ms(S.height)}function p(S){return o?!1:S.wrapS!==1001||S.wrapT!==1001||S.minFilter!==1003&&S.minFilter!==1006}function b(S,w){return S.generateMipmaps&&w&&S.minFilter!==1003&&S.minFilter!==1006}function E(S,w,q,X){s.generateMipmap(S);const rt=n.get(w);rt.__maxMipLevel=Math.log2(Math.max(q,X))}function T(S,w,q){if(o===!1)return w;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let X=w;return w===6403&&(q===5126&&(X=33326),q===5131&&(X=33325),q===5121&&(X=33321)),w===6407&&(q===5126&&(X=34837),q===5131&&(X=34843),q===5121&&(X=32849)),w===6408&&(q===5126&&(X=34836),q===5131&&(X=34842),q===5121&&(X=32856)),(X===33325||X===33326||X===34842||X===34836)&&t.get("EXT_color_buffer_float"),X}function _(S){return S===1003||S===1004||S===1005?9728:9729}function C(S){const w=S.target;w.removeEventListener("dispose",C),N(w),w.isVideoTexture&&d.delete(w),a.memory.textures--}function D(S){const w=S.target;w.removeEventListener("dispose",D),B(w),a.memory.textures--}function N(S){const w=n.get(S);w.__webglInit!==void 0&&(s.deleteTexture(w.__webglTexture),n.remove(S))}function B(S){const w=S.texture,q=n.get(S),X=n.get(w);if(S){if(X.__webglTexture!==void 0&&s.deleteTexture(X.__webglTexture),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++)s.deleteFramebuffer(q.__webglFramebuffer[rt]),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[rt]);else s.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer&&s.deleteRenderbuffer(q.__webglColorRenderbuffer),q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer);n.remove(w),n.remove(S)}}let O=0;function F(){O=0}function A(){const S=O;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),O+=1,S}function P(S,w){const q=n.get(S);if(S.isVideoTexture&&J(S),S.version>0&&q.__version!==S.version){const X=S.image;if(X===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(q,S,w);return}}e.activeTexture(33984+w),e.bindTexture(3553,q.__webglTexture)}function I(S,w){const q=n.get(S);if(S.version>0&&q.__version!==S.version){pt(q,S,w);return}e.activeTexture(33984+w),e.bindTexture(35866,q.__webglTexture)}function R(S,w){const q=n.get(S);if(S.version>0&&q.__version!==S.version){pt(q,S,w);return}e.activeTexture(33984+w),e.bindTexture(32879,q.__webglTexture)}function Y(S,w){const q=n.get(S);if(S.version>0&&q.__version!==S.version){wt(q,S,w);return}e.activeTexture(33984+w),e.bindTexture(34067,q.__webglTexture)}const it={1e3:10497,1001:33071,1002:33648},Q={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function ot(S,w,q){if(q?(s.texParameteri(S,10242,it[w.wrapS]),s.texParameteri(S,10243,it[w.wrapT]),(S===32879||S===35866)&&s.texParameteri(S,32882,it[w.wrapR]),s.texParameteri(S,10240,Q[w.magFilter]),s.texParameteri(S,10241,Q[w.minFilter])):(s.texParameteri(S,10242,33071),s.texParameteri(S,10243,33071),(S===32879||S===35866)&&s.texParameteri(S,32882,33071),(w.wrapS!==1001||w.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,10240,_(w.magFilter)),s.texParameteri(S,10241,_(w.minFilter)),w.minFilter!==1003&&w.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const X=t.get("EXT_texture_filter_anisotropic");if(w.type===1015&&t.has("OES_texture_float_linear")===!1||o===!1&&w.type===1016&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(S,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function et(S,w){S.__webglInit===void 0&&(S.__webglInit=!0,w.addEventListener("dispose",C),S.__webglTexture=s.createTexture(),a.memory.textures++)}function pt(S,w,q){let X=3553;w.isDataTexture2DArray&&(X=35866),w.isDataTexture3D&&(X=32879),et(S,w),e.activeTexture(33984+q),e.bindTexture(X,S.__webglTexture),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const rt=p(w)&&m(w.image)===!1,ut=y(w.image,rt,!1,u),It=m(ut)||o,vt=r.convert(w.format);let L=r.convert(w.type),tt=T(w.internalFormat,vt,L);ot(X,w,It);let st;const mt=w.mipmaps;if(w.isDepthTexture)tt=6402,o?w.type===1015?tt=36012:w.type===1014?tt=33190:w.type===1020?tt=35056:tt=33189:w.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===1026&&tt===6402&&w.type!==1012&&w.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=1012,L=r.convert(w.type)),w.format===1027&&tt===6402&&(tt=34041,w.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=1020,L=r.convert(w.type))),e.texImage2D(3553,0,tt,ut.width,ut.height,0,vt,L,null);else if(w.isDataTexture)if(mt.length>0&&It){for(let Z=0,St=mt.length;Z<St;Z++)st=mt[Z],e.texImage2D(3553,Z,tt,st.width,st.height,0,vt,L,st.data);w.generateMipmaps=!1,S.__maxMipLevel=mt.length-1}else e.texImage2D(3553,0,tt,ut.width,ut.height,0,vt,L,ut.data),S.__maxMipLevel=0;else if(w.isCompressedTexture){for(let Z=0,St=mt.length;Z<St;Z++)st=mt[Z],w.format!==1023&&w.format!==1022?vt!==null?e.compressedTexImage2D(3553,Z,tt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):e.texImage2D(3553,Z,tt,st.width,st.height,0,vt,L,st.data);S.__maxMipLevel=mt.length-1}else if(w.isDataTexture2DArray)e.texImage3D(35866,0,tt,ut.width,ut.height,ut.depth,0,vt,L,ut.data),S.__maxMipLevel=0;else if(w.isDataTexture3D)e.texImage3D(32879,0,tt,ut.width,ut.height,ut.depth,0,vt,L,ut.data),S.__maxMipLevel=0;else if(mt.length>0&&It){for(let Z=0,St=mt.length;Z<St;Z++)st=mt[Z],e.texImage2D(3553,Z,tt,vt,L,st);w.generateMipmaps=!1,S.__maxMipLevel=mt.length-1}else e.texImage2D(3553,0,tt,vt,L,ut),S.__maxMipLevel=0;b(w,It)&&E(X,w,ut.width,ut.height),S.__version=w.version,w.onUpdate&&w.onUpdate(w)}function wt(S,w,q){if(w.image.length!==6)return;et(S,w),e.activeTexture(33984+q),e.bindTexture(34067,S.__webglTexture),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const X=w&&(w.isCompressedTexture||w.image[0].isCompressedTexture),rt=w.image[0]&&w.image[0].isDataTexture,ut=[];for(let Z=0;Z<6;Z++)!X&&!rt?ut[Z]=y(w.image[Z],!1,!0,c):ut[Z]=rt?w.image[Z].image:w.image[Z];const It=ut[0],vt=m(It)||o,L=r.convert(w.format),tt=r.convert(w.type),st=T(w.internalFormat,L,tt);ot(34067,w,vt);let mt;if(X){for(let Z=0;Z<6;Z++){mt=ut[Z].mipmaps;for(let St=0;St<mt.length;St++){const zt=mt[St];w.format!==1023&&w.format!==1022?L!==null?e.compressedTexImage2D(34069+Z,St,st,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):e.texImage2D(34069+Z,St,st,zt.width,zt.height,0,L,tt,zt.data)}}S.__maxMipLevel=mt.length-1}else{mt=w.mipmaps;for(let Z=0;Z<6;Z++)if(rt){e.texImage2D(34069+Z,0,st,ut[Z].width,ut[Z].height,0,L,tt,ut[Z].data);for(let St=0;St<mt.length;St++){const Qt=mt[St].image[Z].image;e.texImage2D(34069+Z,St+1,st,Qt.width,Qt.height,0,L,tt,Qt.data)}}else{e.texImage2D(34069+Z,0,st,L,tt,ut[Z]);for(let St=0;St<mt.length;St++){const zt=mt[St];e.texImage2D(34069+Z,St+1,st,L,tt,zt.image[Z])}}S.__maxMipLevel=mt.length}b(w,vt)&&E(34067,w,It.width,It.height),S.__version=w.version,w.onUpdate&&w.onUpdate(w)}function W(S,w,q,X){const rt=w.texture,ut=r.convert(rt.format),It=r.convert(rt.type),vt=T(rt.internalFormat,ut,It);X===32879||X===35866?e.texImage3D(X,0,vt,w.width,w.height,w.depth,0,ut,It,null):e.texImage2D(X,0,vt,w.width,w.height,0,ut,It,null),e.bindFramebuffer(36160,S),s.framebufferTexture2D(36160,q,X,n.get(rt).__webglTexture,0),e.bindFramebuffer(36160,null)}function kt(S,w,q){if(s.bindRenderbuffer(36161,S),w.depthBuffer&&!w.stencilBuffer){let X=33189;if(q){const rt=w.depthTexture;rt&&rt.isDepthTexture&&(rt.type===1015?X=36012:rt.type===1014&&(X=33190));const ut=Ft(w);s.renderbufferStorageMultisample(36161,ut,X,w.width,w.height)}else s.renderbufferStorage(36161,X,w.width,w.height);s.framebufferRenderbuffer(36160,36096,36161,S)}else if(w.depthBuffer&&w.stencilBuffer){if(q){const X=Ft(w);s.renderbufferStorageMultisample(36161,X,35056,w.width,w.height)}else s.renderbufferStorage(36161,34041,w.width,w.height);s.framebufferRenderbuffer(36160,33306,36161,S)}else{const X=w.texture,rt=r.convert(X.format),ut=r.convert(X.type),It=T(X.internalFormat,rt,ut);if(q){const vt=Ft(w);s.renderbufferStorageMultisample(36161,vt,It,w.width,w.height)}else s.renderbufferStorage(36161,It,w.width,w.height)}s.bindRenderbuffer(36161,null)}function Lt(S,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,S),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),P(w.depthTexture,0);const X=n.get(w.depthTexture).__webglTexture;if(w.depthTexture.format===1026)s.framebufferTexture2D(36160,36096,3553,X,0);else if(w.depthTexture.format===1027)s.framebufferTexture2D(36160,33306,3553,X,0);else throw new Error("Unknown depthTexture format")}function Mt(S){const w=n.get(S),q=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Lt(w.__webglFramebuffer,S)}else if(q){w.__webglDepthbuffer=[];for(let X=0;X<6;X++)e.bindFramebuffer(36160,w.__webglFramebuffer[X]),w.__webglDepthbuffer[X]=s.createRenderbuffer(),kt(w.__webglDepthbuffer[X],S,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),kt(w.__webglDepthbuffer,S,!1);e.bindFramebuffer(36160,null)}function yt(S){const w=S.texture,q=n.get(S),X=n.get(w);S.addEventListener("dispose",D),X.__webglTexture=s.createTexture(),X.__version=w.version,a.memory.textures++;const rt=S.isWebGLCubeRenderTarget===!0,ut=S.isWebGLMultisampleRenderTarget===!0,It=w.isDataTexture3D||w.isDataTexture2DArray,vt=m(S)||o;if(o&&w.format===1022&&(w.type===1015||w.type===1016)&&(w.format=1023,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),rt){q.__webglFramebuffer=[];for(let L=0;L<6;L++)q.__webglFramebuffer[L]=s.createFramebuffer()}else if(q.__webglFramebuffer=s.createFramebuffer(),ut)if(o){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,q.__webglColorRenderbuffer);const L=r.convert(w.format),tt=r.convert(w.type),st=T(w.internalFormat,L,tt),mt=Ft(S);s.renderbufferStorageMultisample(36161,mt,st,S.width,S.height),e.bindFramebuffer(36160,q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,q.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),S.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),kt(q.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(rt){e.bindTexture(34067,X.__webglTexture),ot(34067,w,vt);for(let L=0;L<6;L++)W(q.__webglFramebuffer[L],S,36064,34069+L);b(w,vt)&&E(34067,w,S.width,S.height),e.bindTexture(34067,null)}else{let L=3553;It&&(o?L=w.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),e.bindTexture(L,X.__webglTexture),ot(L,w,vt),W(q.__webglFramebuffer,S,36064,L),b(w,vt)&&E(3553,w,S.width,S.height),e.bindTexture(3553,null)}S.depthBuffer&&Mt(S)}function Ot(S){const w=S.texture,q=m(S)||o;if(b(w,q)){const X=S.isWebGLCubeRenderTarget?34067:3553,rt=n.get(w).__webglTexture;e.bindTexture(X,rt),E(X,w,S.width,S.height),e.bindTexture(X,null)}}function Ct(S){if(S.isWebGLMultisampleRenderTarget)if(o){const w=S.width,q=S.height;let X=16384;S.depthBuffer&&(X|=256),S.stencilBuffer&&(X|=1024);const rt=n.get(S);e.bindFramebuffer(36008,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,rt.__webglFramebuffer),s.blitFramebuffer(0,0,w,q,0,0,w,q,X,9728),e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,rt.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Ft(S){return o&&S.isWebGLMultisampleRenderTarget?Math.min(h,S.samples):0}function J(S){const w=a.render.frame;d.get(S)!==w&&(d.set(S,w),S.update())}let K=!1,nt=!1;function ft(S,w){S&&S.isWebGLRenderTarget&&(K===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),K=!0),S=S.texture),P(S,w)}function lt(S,w){S&&S.isWebGLCubeRenderTarget&&(nt===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),nt=!0),S=S.texture),Y(S,w)}this.allocateTextureUnit=A,this.resetTextureUnits=F,this.setTexture2D=P,this.setTexture2DArray=I,this.setTexture3D=R,this.setTextureCube=Y,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Ct,this.safeSetTexture2D=ft,this.safeSetTextureCube=lt}function Eu(s,t,e){const n=e.isWebGL2;function i(r){let a;if(r===1009)return 5121;if(r===1017)return 32819;if(r===1018)return 32820;if(r===1019)return 33635;if(r===1010)return 5120;if(r===1011)return 5122;if(r===1012)return 5123;if(r===1013)return 5124;if(r===1014)return 5125;if(r===1015)return 5126;if(r===1016)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===1021)return 6406;if(r===1022)return 6407;if(r===1023)return 6408;if(r===1024)return 6409;if(r===1025)return 6410;if(r===1026)return 6402;if(r===1027)return 34041;if(r===1028)return 6403;if(r===1029)return 36244;if(r===1030)return 33319;if(r===1031)return 33320;if(r===1032)return 36248;if(r===1033)return 36249;if(r===33776||r===33777||r===33778||r===33779)if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===35840||r===35841||r===35842||r===35843)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===36196)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===37492||r===37496)&&(a=t.get("WEBGL_compressed_texture_etc"),a!==null)){if(r===37492)return a.COMPRESSED_RGB8_ETC2;if(r===37496)return a.COMPRESSED_RGBA8_ETC2_EAC}if(r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821||r===37840||r===37841||r===37842||r===37843||r===37844||r===37845||r===37846||r===37847||r===37848||r===37849||r===37850||r===37851||r===37852||r===37853)return a=t.get("WEBGL_compressed_texture_astc"),a!==null?r:null;if(r===36492)return a=t.get("EXT_texture_compression_bptc"),a!==null?r:null;if(r===1020)return n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class Ia extends Te{constructor(t=[]){super(),this.cameras=t}}Ia.prototype.isArrayCamera=!0;class Ae extends qt{constructor(){super(),this.type="Group"}}Ae.prototype.isGroup=!0;const Tu={type:"move"};class Nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(o!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tu))),c&&t.hand){a=!0;for(const x of t.hand.values()){const y=e.getJointPose(x,n);if(c.joints[x.jointName]===void 0){const p=new Ae;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[x.jointName]=p,c.add(p)}const m=c.joints[x.jointName];y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=y.radius),m.visible=y!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class Au extends bn{constructor(t,e){super();const n=this,i=t.state;let r=null,a=1,o=null,l="local-floor",c=null;const u=[],h=new Map,d=new Te;d.layers.enable(1),d.viewport=new Yt;const f=new Te;f.layers.enable(2),f.viewport=new Yt;const g=[d,f],x=new Ia;x.layers.enable(1),x.layers.enable(2);let y=null,m=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let A=u[F];return A===void 0&&(A=new Nr,u[F]=A),A.getTargetRaySpace()},this.getControllerGrip=function(F){let A=u[F];return A===void 0&&(A=new Nr,u[F]=A),A.getGripSpace()},this.getHand=function(F){let A=u[F];return A===void 0&&(A=new Nr,u[F]=A),A.getHandSpace()};function p(F){const A=h.get(F.inputSource);A&&A.dispatchEvent({type:F.type,data:F.inputSource})}function b(){h.forEach(function(F,A){F.disconnect(A)}),h.clear(),y=null,m=null,i.bindXRFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),O.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){l=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){r.addEventListener("select",p),r.addEventListener("selectstart",p),r.addEventListener("selectend",p),r.addEventListener("squeeze",p),r.addEventListener("squeezestart",p),r.addEventListener("squeezeend",p),r.addEventListener("end",b),r.addEventListener("inputsourceschange",E);const A=e.getContextAttributes();A.xrCompatible!==!0&&await e.makeXRCompatible();const P={antialias:A.antialias,alpha:A.alpha,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a},I=new XRWebGLLayer(r,e,P);r.updateRenderState({baseLayer:I}),o=await r.requestReferenceSpace(l),O.setContext(r),O.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function E(F){const A=r.inputSources;for(let P=0;P<u.length;P++)h.set(A[P],u[P]);for(let P=0;P<F.removed.length;P++){const I=F.removed[P],R=h.get(I);R&&(R.dispatchEvent({type:"disconnected",data:I}),h.delete(I))}for(let P=0;P<F.added.length;P++){const I=F.added[P],R=h.get(I);R&&R.dispatchEvent({type:"connected",data:I})}}const T=new M,_=new M;function C(F,A,P){T.setFromMatrixPosition(A.matrixWorld),_.setFromMatrixPosition(P.matrixWorld);const I=T.distanceTo(_),R=A.projectionMatrix.elements,Y=P.projectionMatrix.elements,it=R[14]/(R[10]-1),Q=R[14]/(R[10]+1),ot=(R[9]+1)/R[5],et=(R[9]-1)/R[5],pt=(R[8]-1)/R[0],wt=(Y[8]+1)/Y[0],W=it*pt,kt=it*wt,Lt=I/(-pt+wt),Mt=Lt*-pt;A.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Mt),F.translateZ(Lt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const yt=it+Lt,Ot=Q+Lt,Ct=W-Mt,Ft=kt+(I-Mt),J=ot*Q/Ot*yt,K=et*Q/Ot*yt;F.projectionMatrix.makePerspective(Ct,Ft,J,K,yt,Ot)}function D(F,A){A===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(A.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.getCamera=function(F){x.near=f.near=d.near=F.near,x.far=f.far=d.far=F.far,(y!==x.near||m!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,m=x.far);const A=F.parent,P=x.cameras;D(x,A);for(let R=0;R<P.length;R++)D(P[R],A);F.matrixWorld.copy(x.matrixWorld),F.matrix.copy(x.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const I=F.children;for(let R=0,Y=I.length;R<Y;R++)I[R].updateMatrixWorld(!0);return P.length===2?C(x,d,f):x.projectionMatrix.copy(d.projectionMatrix),x};let N=null;function B(F,A){if(c=A.getViewerPose(o),c!==null){const I=c.views,R=r.renderState.baseLayer;i.bindXRFramebuffer(R.framebuffer);let Y=!1;I.length!==x.cameras.length&&(x.cameras.length=0,Y=!0);for(let it=0;it<I.length;it++){const Q=I[it],ot=R.getViewport(Q),et=g[it];et.matrix.fromArray(Q.transform.matrix),et.projectionMatrix.fromArray(Q.projectionMatrix),et.viewport.set(ot.x,ot.y,ot.width,ot.height),it===0&&x.matrix.copy(et.matrix),Y===!0&&x.cameras.push(et)}}const P=r.inputSources;for(let I=0;I<u.length;I++){const R=u[I],Y=P[I];R.update(Y,A,o)}N&&N(F,A)}const O=new ya;O.setAnimationLoop(B),this.setAnimationLoop=function(F){N=F},this.dispose=function(){}}}function Lu(s){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function e(m,p,b,E){p.isMeshBasicMaterial?n(m,p):p.isMeshLambertMaterial?(n(m,p),l(m,p)):p.isMeshToonMaterial?(n(m,p),u(m,p)):p.isMeshPhongMaterial?(n(m,p),c(m,p)):p.isMeshStandardMaterial?(n(m,p),p.isMeshPhysicalMaterial?d(m,p):h(m,p)):p.isMeshMatcapMaterial?(n(m,p),f(m,p)):p.isMeshDepthMaterial?(n(m,p),g(m,p)):p.isMeshDistanceMaterial?(n(m,p),x(m,p)):p.isMeshNormalMaterial?(n(m,p),y(m,p)):p.isLineBasicMaterial?(i(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?a(m,p,b,E):p.isSpriteMaterial?o(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.specularMap&&(m.specularMap.value=p.specularMap);const b=s.get(p).envMap;if(b){m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b._needsFlipEnvMap?-1:1,m.reflectivity.value=p.reflectivity,m.refractionRatio.value=p.refractionRatio;const _=s.get(b).__maxMipLevel;_!==void 0&&(m.maxMipLevel.value=_)}p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let E;p.map?E=p.map:p.specularMap?E=p.specularMap:p.displacementMap?E=p.displacementMap:p.normalMap?E=p.normalMap:p.bumpMap?E=p.bumpMap:p.roughnessMap?E=p.roughnessMap:p.metalnessMap?E=p.metalnessMap:p.alphaMap?E=p.alphaMap:p.emissiveMap?E=p.emissiveMap:p.clearcoatMap?E=p.clearcoatMap:p.clearcoatNormalMap?E=p.clearcoatNormalMap:p.clearcoatRoughnessMap&&(E=p.clearcoatRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uvTransform.value.copy(E.matrix));let T;p.aoMap?T=p.aoMap:p.lightMap&&(T=p.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uv2Transform.value.copy(T.matrix))}function i(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap);let T;p.map?T=p.map:p.alphaMap&&(T=p.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uvTransform.value.copy(T.matrix))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function l(m,p){p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),s.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p){h(m,p),m.reflectivity.value=p.reflectivity,m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.sheen&&m.sheen.value.copy(p.sheen),p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===1&&m.clearcoatNormalScale.value.negate()),m.transmission.value=p.transmission,p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function g(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function x(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}function y(m,p){p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:e}}function Cu(){const s=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return s.style.display="block",s}function Zt(s){s=s||{};const t=s.canvas!==void 0?s.canvas:Cu(),e=s.context!==void 0?s.context:null,n=s.alpha!==void 0?s.alpha:!1,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,a=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,l=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",u=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h=null,d=null;const f=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const x=this;let y=!1,m=0,p=0,b=null,E=-1,T=null;const _=new Yt,C=new Yt;let D=null,N=t.width,B=t.height,O=1,F=null,A=null;const P=new Yt(0,0,N,B),I=new Yt(0,0,N,B);let R=!1;const Y=new ir;let it=!1,Q=!1;const ot=new Et,et=new M,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function wt(){return b===null?O:1}let W=e;function kt(v,G){for(let z=0;z<v.length;z++){const V=v[z],ct=t.getContext(V,G);if(ct!==null)return ct}return null}try{const v={alpha:n,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if(t.addEventListener("webglcontextlost",St,!1),t.addEventListener("webglcontextrestored",zt,!1),W===null){const G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),W=kt(G,v),W===null)throw kt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Lt,Mt,yt,Ot,Ct,Ft,J,K,nt,ft,lt,S,w,q,X,rt,ut,It,vt,L,tt,st;function mt(){Lt=new $c(W),Mt=new Zc(W,Lt,s),Lt.init(Mt),tt=new Eu(W,Lt,Mt),yt=new bu(W,Lt,Mt),Ot=new th,Ct=new uu,Ft=new Su(W,Lt,yt,Ct,Mt,tt,Ot),J=new Jc(x),K=new bo(W,Mt),st=new Xc(W,Lt,K,Mt),nt=new Qc(W,K,Ot,st),ft=new rh(W,nt,K,Ot),It=new ih(W),X=new jc(Ct),lt=new hu(x,J,Lt,Mt,st,X),S=new Lu(Ct),w=new pu(Ct),q=new yu(Lt,Mt),ut=new qc(x,J,yt,ft,o),rt=new Fa(x,ft,Mt),vt=new Yc(W,Lt,Ot,Mt),L=new Kc(W,Lt,Ot,Mt),Ot.programs=lt.programs,x.capabilities=Mt,x.extensions=Lt,x.properties=Ct,x.renderLists=w,x.shadowMap=rt,x.state=yt,x.info=Ot}mt();const Z=new Au(x,W);this.xr=Z,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const v=Lt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Lt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(v){v!==void 0&&(O=v,this.setSize(N,B,!1))},this.getSize=function(v){return v===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),v=new $),v.set(N,B)},this.setSize=function(v,G,z){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=v,B=G,t.width=Math.floor(v*O),t.height=Math.floor(G*O),z!==!1&&(t.style.width=v+"px",t.style.height=G+"px"),this.setViewport(0,0,v,G)},this.getDrawingBufferSize=function(v){return v===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),v=new $),v.set(N*O,B*O).floor()},this.setDrawingBufferSize=function(v,G,z){N=v,B=G,O=z,t.width=Math.floor(v*z),t.height=Math.floor(G*z),this.setViewport(0,0,v,G)},this.getCurrentViewport=function(v){return v===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),v=new Yt),v.copy(_)},this.getViewport=function(v){return v.copy(P)},this.setViewport=function(v,G,z,V){v.isVector4?P.set(v.x,v.y,v.z,v.w):P.set(v,G,z,V),yt.viewport(_.copy(P).multiplyScalar(O).floor())},this.getScissor=function(v){return v.copy(I)},this.setScissor=function(v,G,z,V){v.isVector4?I.set(v.x,v.y,v.z,v.w):I.set(v,G,z,V),yt.scissor(C.copy(I).multiplyScalar(O).floor())},this.getScissorTest=function(){return R},this.setScissorTest=function(v){yt.setScissorTest(R=v)},this.setOpaqueSort=function(v){F=v},this.setTransparentSort=function(v){A=v},this.getClearColor=function(v){return v===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),v=new dt),v.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(v,G,z){let V=0;(v===void 0||v)&&(V|=16384),(G===void 0||G)&&(V|=256),(z===void 0||z)&&(V|=1024),W.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",zt,!1),w.dispose(),q.dispose(),Ct.dispose(),J.dispose(),ft.dispose(),st.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Re),Z.removeEventListener("sessionend",Xe),ne.stop()};function St(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const v=Ot.autoReset,G=rt.enabled,z=rt.autoUpdate,V=rt.needsUpdate,ct=rt.type;mt(),Ot.autoReset=v,rt.enabled=G,rt.autoUpdate=z,rt.needsUpdate=V,rt.type=ct}function Qt(v){const G=v.target;G.removeEventListener("dispose",Qt),de(G)}function de(v){Vt(v),Ct.remove(v)}function Vt(v){const G=Ct.get(v).programs;G!==void 0&&G.forEach(function(z){lt.releaseProgram(z)})}function we(v,G){v.render(function(z){x.renderBufferImmediate(z,G)})}this.renderBufferImmediate=function(v,G){st.initAttributes();const z=Ct.get(v);v.hasPositions&&!z.position&&(z.position=W.createBuffer()),v.hasNormals&&!z.normal&&(z.normal=W.createBuffer()),v.hasUvs&&!z.uv&&(z.uv=W.createBuffer()),v.hasColors&&!z.color&&(z.color=W.createBuffer());const V=G.getAttributes();v.hasPositions&&(W.bindBuffer(34962,z.position),W.bufferData(34962,v.positionArray,35048),st.enableAttribute(V.position),W.vertexAttribPointer(V.position,3,5126,!1,0,0)),v.hasNormals&&(W.bindBuffer(34962,z.normal),W.bufferData(34962,v.normalArray,35048),st.enableAttribute(V.normal),W.vertexAttribPointer(V.normal,3,5126,!1,0,0)),v.hasUvs&&(W.bindBuffer(34962,z.uv),W.bufferData(34962,v.uvArray,35048),st.enableAttribute(V.uv),W.vertexAttribPointer(V.uv,2,5126,!1,0,0)),v.hasColors&&(W.bindBuffer(34962,z.color),W.bufferData(34962,v.colorArray,35048),st.enableAttribute(V.color),W.vertexAttribPointer(V.color,3,5126,!1,0,0)),st.disableUnusedAttributes(),W.drawArrays(4,0,v.count),v.count=0},this.renderBufferDirect=function(v,G,z,V,ct,Ut){G===null&&(G=pt);const _t=ct.isMesh&&ct.matrixWorld.determinant()<0,At=gt(v,G,V,ct);yt.setMaterial(V,_t);let Wt=z.index;const Tt=z.attributes.position;if(Wt===null){if(Tt===void 0||Tt.count===0)return}else if(Wt.count===0)return;let Ht=1;V.wireframe===!0&&(Wt=nt.getWireframeAttribute(z),Ht=2),(V.morphTargets||V.morphNormals)&&It.update(ct,z,V,At),st.setup(ct,V,At,z,Wt);let U,j=vt;Wt!==null&&(U=K.get(Wt),j=L,j.setIndex(U));const bt=Wt!==null?Wt.count:Tt.count,Nt=z.drawRange.start*Ht,oe=z.drawRange.count*Ht,Kt=Ut!==null?Ut.start*Ht:0,be=Ut!==null?Ut.count*Ht:1/0,Jt=Math.max(Nt,Kt),Tn=Math.min(bt,Nt+oe,Kt+be)-1,$t=Math.max(0,Tn-Jt+1);if($t!==0){if(ct.isMesh)V.wireframe===!0?(yt.setLineWidth(V.wireframeLinewidth*wt()),j.setMode(1)):j.setMode(4);else if(ct.isLine){let ge=V.linewidth;ge===void 0&&(ge=1),yt.setLineWidth(ge*wt()),ct.isLineSegments?j.setMode(1):ct.isLineLoop?j.setMode(2):j.setMode(3)}else ct.isPoints?j.setMode(0):ct.isSprite&&j.setMode(4);if(ct.isInstancedMesh)j.renderInstances(Jt,$t,ct.count);else if(z.isInstancedBufferGeometry){const ge=Math.min(z.instanceCount,z._maxInstanceCount);j.renderInstances(Jt,$t,ge)}else j.render(Jt,$t)}},this.compile=function(v,G){d=q.get(v),d.init(),v.traverseVisible(function(z){z.isLight&&z.layers.test(G.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(),v.traverse(function(z){const V=z.material;if(V)if(Array.isArray(V))for(let ct=0;ct<V.length;ct++){const Ut=V[ct];k(Ut,v,z)}else k(V,v,z)})};let jt=null;function mn(v){jt&&jt(v)}function Re(){ne.stop()}function Xe(){ne.start()}const ne=new ya;ne.setAnimationLoop(mn),typeof window<"u"&&ne.setContext(window),this.setAnimationLoop=function(v){jt=v,Z.setAnimationLoop(v),v===null?ne.stop():ne.start()},Z.addEventListener("sessionstart",Re),Z.addEventListener("sessionend",Xe),this.render=function(v,G){let z,V;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),z=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),V=arguments[3]),G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;v.autoUpdate===!0&&v.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(G=Z.getCamera(G)),v.isScene===!0&&v.onBeforeRender(x,v,G,z||b),d=q.get(v,g.length),d.init(),g.push(d),ot.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Y.setFromProjectionMatrix(ot),Q=this.localClippingEnabled,it=X.init(this.clippingPlanes,Q,G),h=w.get(v,f.length),h.init(),f.push(h),Pe(v,G,0,x.sortObjects),h.finish(),x.sortObjects===!0&&h.sort(F,A),it===!0&&X.beginShadows();const ct=d.state.shadowsArray;rt.render(ct,v,G),d.setupLights(),d.setupLightsView(G),it===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),z!==void 0&&this.setRenderTarget(z),ut.render(h,v,G,V);const Ut=h.opaque,_t=h.transparent;Ut.length>0&&Qe(Ut,v,G),_t.length>0&&Qe(_t,v,G),b!==null&&(Ft.updateRenderTargetMipmap(b),Ft.updateMultisampleRenderTarget(b)),v.isScene===!0&&v.onAfterRender(x,v,G),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1),st.resetDefaultState(),E=-1,T=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function Pe(v,G,z,V){if(v.visible===!1)return;if(v.layers.test(G.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(G);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Y.intersectsSprite(v)){V&&et.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ot);const _t=ft.update(v),At=v.material;At.visible&&h.push(v,_t,At,z,et.z,null)}}else if(v.isImmediateRenderObject)V&&et.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ot),h.push(v,null,v.material,z,et.z,null);else if((v.isMesh||v.isLine||v.isPoints)&&(v.isSkinnedMesh&&v.skeleton.frame!==Ot.render.frame&&(v.skeleton.update(),v.skeleton.frame=Ot.render.frame),!v.frustumCulled||Y.intersectsObject(v))){V&&et.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ot);const _t=ft.update(v),At=v.material;if(Array.isArray(At)){const Wt=_t.groups;for(let Tt=0,Ht=Wt.length;Tt<Ht;Tt++){const U=Wt[Tt],j=At[U.materialIndex];j&&j.visible&&h.push(v,_t,j,z,et.z,U)}}else At.visible&&h.push(v,_t,At,z,et.z,null)}}const Ut=v.children;for(let _t=0,At=Ut.length;_t<At;_t++)Pe(Ut[_t],G,z,V)}function Qe(v,G,z){const V=G.isScene===!0?G.overrideMaterial:null;for(let ct=0,Ut=v.length;ct<Ut;ct++){const _t=v[ct],At=_t.object,Wt=_t.geometry,Tt=V===null?_t.material:V,Ht=_t.group;if(z.isArrayCamera){const U=z.cameras;for(let j=0,bt=U.length;j<bt;j++){const Nt=U[j];At.layers.test(Nt.layers)&&(yt.viewport(_.copy(Nt.viewport)),d.setupLightsView(Nt),H(At,G,Nt,Wt,Tt,Ht))}}else H(At,G,z,Wt,Tt,Ht)}}function H(v,G,z,V,ct,Ut){if(v.onBeforeRender(x,G,z,V,ct,Ut),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),v.isImmediateRenderObject){const _t=gt(z,G,ct,v);yt.setMaterial(ct),st.reset(),we(v,_t)}else x.renderBufferDirect(z,G,V,ct,v,Ut);v.onAfterRender(x,G,z,V,ct,Ut)}function k(v,G,z){G.isScene!==!0&&(G=pt);const V=Ct.get(v),ct=d.state.lights,Ut=d.state.shadowsArray,_t=ct.state.version,At=lt.getParameters(v,ct.state,Ut,G,z),Wt=lt.getProgramCacheKey(At);let Tt=V.programs;V.environment=v.isMeshStandardMaterial?G.environment:null,V.fog=G.fog,V.envMap=J.get(v.envMap||V.environment),Tt===void 0&&(v.addEventListener("dispose",Qt),Tt=new Map,V.programs=Tt);let Ht=Tt.get(Wt);if(Ht!==void 0){if(V.currentProgram===Ht&&V.lightsStateVersion===_t)return at(v,At),Ht}else At.uniforms=lt.getUniforms(v),v.onBuild(At,x),v.onBeforeCompile(At,x),Ht=lt.acquireProgram(At,Wt),Tt.set(Wt,Ht),V.uniforms=At.uniforms;const U=V.uniforms;(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(U.clippingPlanes=X.uniform),at(v,At),V.needsLights=Dt(v),V.lightsStateVersion=_t,V.needsLights&&(U.ambientLightColor.value=ct.state.ambient,U.lightProbe.value=ct.state.probe,U.directionalLights.value=ct.state.directional,U.directionalLightShadows.value=ct.state.directionalShadow,U.spotLights.value=ct.state.spot,U.spotLightShadows.value=ct.state.spotShadow,U.rectAreaLights.value=ct.state.rectArea,U.ltc_1.value=ct.state.rectAreaLTC1,U.ltc_2.value=ct.state.rectAreaLTC2,U.pointLights.value=ct.state.point,U.pointLightShadows.value=ct.state.pointShadow,U.hemisphereLights.value=ct.state.hemi,U.directionalShadowMap.value=ct.state.directionalShadowMap,U.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,U.spotShadowMap.value=ct.state.spotShadowMap,U.spotShadowMatrix.value=ct.state.spotShadowMatrix,U.pointShadowMap.value=ct.state.pointShadowMap,U.pointShadowMatrix.value=ct.state.pointShadowMatrix);const j=Ht.getUniforms(),bt=cn.seqWithValue(j.seq,U);return V.currentProgram=Ht,V.uniformsList=bt,Ht}function at(v,G){const z=Ct.get(v);z.outputEncoding=G.outputEncoding,z.instancing=G.instancing,z.numClippingPlanes=G.numClippingPlanes,z.numIntersection=G.numClipIntersection,z.vertexAlphas=G.vertexAlphas}function gt(v,G,z,V){G.isScene!==!0&&(G=pt),Ft.resetTextureUnits();const ct=G.fog,Ut=z.isMeshStandardMaterial?G.environment:null,_t=b===null?x.outputEncoding:b.texture.encoding,At=J.get(z.envMap||Ut),Wt=z.vertexColors===!0&&V.geometry&&V.geometry.attributes.color&&V.geometry.attributes.color.itemSize===4,Tt=Ct.get(z),Ht=d.state.lights;if(it===!0&&(Q===!0||v!==T)){const Jt=v===T&&z.id===E;X.setState(z,v,Jt)}let U=!1;z.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Ht.state.version||Tt.outputEncoding!==_t||V.isInstancedMesh&&Tt.instancing===!1||!V.isInstancedMesh&&Tt.instancing===!0||Tt.envMap!==At||z.fog&&Tt.fog!==ct||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==X.numPlanes||Tt.numIntersection!==X.numIntersection)||Tt.vertexAlphas!==Wt)&&(U=!0):(U=!0,Tt.__version=z.version);let j=Tt.currentProgram;U===!0&&(j=k(z,G,V));let bt=!1,Nt=!1,oe=!1;const Kt=j.getUniforms(),be=Tt.uniforms;if(yt.useProgram(j.program)&&(bt=!0,Nt=!0,oe=!0),z.id!==E&&(E=z.id,Nt=!0),bt||T!==v){if(Kt.setValue(W,"projectionMatrix",v.projectionMatrix),Mt.logarithmicDepthBuffer&&Kt.setValue(W,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),T!==v&&(T=v,Nt=!0,oe=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Jt=Kt.map.cameraPosition;Jt!==void 0&&Jt.setValue(W,et.setFromMatrixPosition(v.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Kt.setValue(W,"isOrthographic",v.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||z.skinning)&&Kt.setValue(W,"viewMatrix",v.matrixWorldInverse)}if(z.skinning){Kt.setOptional(W,V,"bindMatrix"),Kt.setOptional(W,V,"bindMatrixInverse");const Jt=V.skeleton;if(Jt){const Tn=Jt.bones;if(Mt.floatVertexTextures){if(Jt.boneTexture===null){let $t=Math.sqrt(Tn.length*4);$t=no($t),$t=Math.max($t,4);const ge=new Float32Array($t*$t*4);ge.set(Jt.boneMatrices);const Ge=new _a(ge,$t,$t,1023,1015);Jt.boneMatrices=ge,Jt.boneTexture=Ge,Jt.boneTextureSize=$t}Kt.setValue(W,"boneTexture",Jt.boneTexture,Ft),Kt.setValue(W,"boneTextureSize",Jt.boneTextureSize)}else Kt.setOptional(W,Jt,"boneMatrices")}}return(Nt||Tt.receiveShadow!==V.receiveShadow)&&(Tt.receiveShadow=V.receiveShadow,Kt.setValue(W,"receiveShadow",V.receiveShadow)),Nt&&(Kt.setValue(W,"toneMappingExposure",x.toneMappingExposure),Tt.needsLights&&xt(be,oe),ct&&z.fog&&S.refreshFogUniforms(be,ct),S.refreshMaterialUniforms(be,z,O,B),cn.upload(W,Tt.uniformsList,be,Ft)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(cn.upload(W,Tt.uniformsList,be,Ft),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Kt.setValue(W,"center",V.center),Kt.setValue(W,"modelViewMatrix",V.modelViewMatrix),Kt.setValue(W,"normalMatrix",V.normalMatrix),Kt.setValue(W,"modelMatrix",V.matrixWorld),j}function xt(v,G){v.ambientLightColor.needsUpdate=G,v.lightProbe.needsUpdate=G,v.directionalLights.needsUpdate=G,v.directionalLightShadows.needsUpdate=G,v.pointLights.needsUpdate=G,v.pointLightShadows.needsUpdate=G,v.spotLights.needsUpdate=G,v.spotLightShadows.needsUpdate=G,v.rectAreaLights.needsUpdate=G,v.hemisphereLights.needsUpdate=G}function Dt(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return b},this.setRenderTarget=function(v,G=0,z=0){b=v,m=G,p=z,v&&Ct.get(v).__webglFramebuffer===void 0&&Ft.setupRenderTarget(v);let V=null,ct=!1,Ut=!1;if(v){const _t=v.texture;(_t.isDataTexture3D||_t.isDataTexture2DArray)&&(Ut=!0);const At=Ct.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(V=At[G],ct=!0):v.isWebGLMultisampleRenderTarget?V=Ct.get(v).__webglMultisampledFramebuffer:V=At,_.copy(v.viewport),C.copy(v.scissor),D=v.scissorTest}else _.copy(P).multiplyScalar(O).floor(),C.copy(I).multiplyScalar(O).floor(),D=R;if(yt.bindFramebuffer(36160,V),yt.viewport(_),yt.scissor(C),yt.setScissorTest(D),ct){const _t=Ct.get(v.texture);W.framebufferTexture2D(36160,36064,34069+G,_t.__webglTexture,z)}else if(Ut){const _t=Ct.get(v.texture),At=G||0;W.framebufferTextureLayer(36160,36064,_t.__webglTexture,z||0,At)}},this.readRenderTargetPixels=function(v,G,z,V,ct,Ut,_t){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Ct.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_t!==void 0&&(At=At[_t]),At){yt.bindFramebuffer(36160,At);try{const Wt=v.texture,Tt=Wt.format,Ht=Wt.type;if(Tt!==1023&&tt.convert(Tt)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const U=Ht===1016&&(Lt.has("EXT_color_buffer_half_float")||Mt.isWebGL2&&Lt.has("EXT_color_buffer_float"));if(Ht!==1009&&tt.convert(Ht)!==W.getParameter(35738)&&!(Ht===1015&&(Mt.isWebGL2||Lt.has("OES_texture_float")||Lt.has("WEBGL_color_buffer_float")))&&!U){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W.checkFramebufferStatus(36160)===36053?G>=0&&G<=v.width-V&&z>=0&&z<=v.height-ct&&W.readPixels(G,z,V,ct,tt.convert(Tt),tt.convert(Ht),Ut):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Wt=b!==null?Ct.get(b).__webglFramebuffer:null;yt.bindFramebuffer(36160,Wt)}}},this.copyFramebufferToTexture=function(v,G,z=0){const V=Math.pow(2,-z),ct=Math.floor(G.image.width*V),Ut=Math.floor(G.image.height*V),_t=tt.convert(G.format);Ft.setTexture2D(G,0),W.copyTexImage2D(3553,z,_t,v.x,v.y,ct,Ut,0),yt.unbindTexture()},this.copyTextureToTexture=function(v,G,z,V=0){const ct=G.image.width,Ut=G.image.height,_t=tt.convert(z.format),At=tt.convert(z.type);Ft.setTexture2D(z,0),W.pixelStorei(37440,z.flipY),W.pixelStorei(37441,z.premultiplyAlpha),W.pixelStorei(3317,z.unpackAlignment),G.isDataTexture?W.texSubImage2D(3553,V,v.x,v.y,ct,Ut,_t,At,G.image.data):G.isCompressedTexture?W.compressedTexSubImage2D(3553,V,v.x,v.y,G.mipmaps[0].width,G.mipmaps[0].height,_t,G.mipmaps[0].data):W.texSubImage2D(3553,V,v.x,v.y,_t,At,G.image),V===0&&z.generateMipmaps&&W.generateMipmap(3553),yt.unbindTexture()},this.copyTextureToTexture3D=function(v,G,z,V,ct=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const{width:Ut,height:_t,data:At}=z.image,Wt=tt.convert(V.format),Tt=tt.convert(V.type);let Ht;if(V.isDataTexture3D)Ft.setTexture3D(V,0),Ht=32879;else if(V.isDataTexture2DArray)Ft.setTexture2DArray(V,0),Ht=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,V.flipY),W.pixelStorei(37441,V.premultiplyAlpha),W.pixelStorei(3317,V.unpackAlignment);const U=W.getParameter(3314),j=W.getParameter(32878),bt=W.getParameter(3316),Nt=W.getParameter(3315),oe=W.getParameter(32877);W.pixelStorei(3314,Ut),W.pixelStorei(32878,_t),W.pixelStorei(3316,v.min.x),W.pixelStorei(3315,v.min.y),W.pixelStorei(32877,v.min.z),W.texSubImage3D(Ht,ct,G.x,G.y,G.z,v.max.x-v.min.x+1,v.max.y-v.min.y+1,v.max.z-v.min.z+1,Wt,Tt,At),W.pixelStorei(3314,U),W.pixelStorei(32878,j),W.pixelStorei(3316,bt),W.pixelStorei(3315,Nt),W.pixelStorei(32877,oe),ct===0&&V.generateMipmaps&&W.generateMipmap(Ht),yt.unbindTexture()},this.initTexture=function(v){Ft.setTexture2D(v,0),yt.unbindTexture()},this.resetState=function(){m=0,p=0,b=null,yt.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ru extends Zt{}Ru.prototype.isWebGL1Renderer=!0;class _n extends qt{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.background!==null&&(e.object.background=this.background.toJSON(t)),this.environment!==null&&(e.object.environment=this.environment.toJSON(t)),this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}_n.prototype.isScene=!0;class En{constructor(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ve(),this.onUploadCallback=function(){}}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ve()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new En(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ve()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}En.prototype.isInterleavedBuffer=!0;const se=new M;class fi{constructor(t,e,n,i){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)se.x=this.getX(e),se.y=this.getY(e),se.z=this.getZ(e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.x=this.getX(e),se.y=this.getY(e),se.z=this.getZ(e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.x=this.getX(e),se.y=this.getY(e),se.z=this.getZ(e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}setX(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){return this.data.array[t*this.data.stride+this.offset]}getY(t){return this.data.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data.stride+this.offset+3]}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new fi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}fi.prototype.isInterleavedBufferAttribute=!0;class Na extends ue{constructor(t){super(),this.type="SpriteMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this}}Na.prototype.isSpriteMaterial=!0;let On;const si=new M,Hn=new M,kn=new M,Vn=new $,ai=new $,Ba=new Et,Oi=new M,oi=new M,Hi=new M,Hs=new $,Br=new $,ks=new $;class Pu extends qt{constructor(t){if(super(),this.type="Sprite",On===void 0){On=new Bt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new En(e,5);On.setIndex([0,1,2,0,2,3]),On.setAttribute("position",new fi(n,3,0,!1)),On.setAttribute("uv",new fi(n,2,3,!1))}this.geometry=On,this.material=t!==void 0?t:new Na,this.center=new $(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hn.setFromMatrixScale(this.matrixWorld),Ba.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),kn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hn.multiplyScalar(-kn.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;ki(Oi.set(-.5,-.5,0),kn,a,Hn,i,r),ki(oi.set(.5,-.5,0),kn,a,Hn,i,r),ki(Hi.set(.5,.5,0),kn,a,Hn,i,r),Hs.set(0,0),Br.set(1,0),ks.set(1,1);let o=t.ray.intersectTriangle(Oi,oi,Hi,!1,si);if(o===null&&(ki(oi.set(-.5,.5,0),kn,a,Hn,i,r),Br.set(0,1),o=t.ray.intersectTriangle(Oi,Hi,oi,!1,si),o===null))return;const l=t.ray.origin.distanceTo(si);l<t.near||l>t.far||e.push({distance:l,point:si.clone(),uv:le.getUV(si,Oi,oi,Hi,Hs,Br,ks,new $),face:null,object:this})}copy(t){return super.copy(t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}Pu.prototype.isSprite=!0;function ki(s,t,e,n,i,r){Vn.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ai.x=r*Vn.x-i*Vn.y,ai.y=i*Vn.x+r*Vn.y):ai.copy(Vn),s.copy(t),s.x+=ai.x,s.y+=ai.y,s.applyMatrix4(Ba)}const Vs=new M,Ws=new Yt,qs=new Yt,Du=new M,Xs=new Et;class za extends Rt{constructor(t,e){super(t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Et,this.bindMatrixInverse=new Et}copy(t){return super.copy(t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Yt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const n=this.skeleton,i=this.geometry;Ws.fromBufferAttribute(i.attributes.skinIndex,t),qs.fromBufferAttribute(i.attributes.skinWeight,t),Vs.fromBufferAttribute(i.attributes.position,t).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=qs.getComponent(r);if(a!==0){const o=Ws.getComponent(r);Xs.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Du.copy(Vs).applyMatrix4(Xs),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}za.prototype.isSkinnedMesh=!0;class Fu extends qt{constructor(){super(),this.type="Bone"}}Fu.prototype.isBone=!0;const Ys=new Et,Zs=new Et,Vi=[],li=new Rt;class Ua extends Rt{constructor(t,e,n){super(t,e),this.instanceMatrix=new ce(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(t){return super.copy(t),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(li.geometry=this.geometry,li.material=this.material,li.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Ys),Zs.multiplyMatrices(n,Ys),li.matrixWorld=Zs,li.raycast(t,Vi);for(let a=0,o=Vi.length;a<o;a++){const l=Vi[a];l.instanceId=r,l.object=this,e.push(l)}Vi.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ce(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Ua.prototype.isInstancedMesh=!0;class un extends ue{constructor(t){super(),this.type="LineBasicMaterial",this.color=new dt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this}}un.prototype.isLineBasicMaterial=!0;const js=new M,Js=new M,$s=new Et,zr=new Sn,Wi=new jn;class pi extends qt{constructor(t=new Bt,e=new un){super(),this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)js.fromBufferAttribute(e,i-1),Js.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=js.distanceTo(Js);t.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(i),Wi.radius+=r,t.ray.intersectsSphere(Wi)===!1)return;$s.copy(i).invert(),zr.copy(t.ray).applyMatrix4($s);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new M,u=new M,h=new M,d=new M,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,y=n.attributes.position;if(g!==null){const m=Math.max(0,a.start),p=Math.min(g.count,a.start+a.count);for(let b=m,E=p-1;b<E;b+=f){const T=g.getX(b),_=g.getX(b+1);if(c.fromBufferAttribute(y,T),u.fromBufferAttribute(y,_),zr.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(d);D<t.near||D>t.far||e.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),p=Math.min(y.count,a.start+a.count);for(let b=m,E=p-1;b<E;b+=f){if(c.fromBufferAttribute(y,b),u.fromBufferAttribute(y,b+1),zr.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const _=t.ray.origin.distanceTo(d);_<t.near||_>t.far||e.push({distance:_,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}pi.prototype.isLine=!0;const Qs=new M,Ks=new M;class rr extends pi{constructor(t,e){super(t,e),this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Qs.fromBufferAttribute(e,i),Ks.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qs.distanceTo(Ks);t.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}rr.prototype.isLineSegments=!0;class Iu extends pi{constructor(t,e){super(t,e),this.type="LineLoop"}}Iu.prototype.isLineLoop=!0;class Kr extends ue{constructor(t){super(),this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this}}Kr.prototype.isPointsMaterial=!0;const ta=new Et,qr=new Sn,qi=new jn,Xi=new M;class Ga extends qt{constructor(t=new Bt,e=new Kr){super(),this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(i),qi.radius+=r,t.ray.intersectsSphere(qi)===!1)return;ta.copy(i).invert(),qr.copy(t.ray).applyMatrix4(ta);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){const y=c.getX(g);Xi.fromBufferAttribute(h,y),ea(Xi,y,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,x=f;g<x;g++)Xi.fromBufferAttribute(h,g),ea(Xi,g,l,i,t,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Ga.prototype.isPoints=!0;function ea(s,t,e,n,i,r,a){const o=qr.distanceSqToPoint(s);if(o<e){const l=new M;qr.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Nu extends me{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.format=o!==void 0?o:1022,this.minFilter=a!==void 0?a:1006,this.magFilter=r!==void 0?r:1006,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,t.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Nu.prototype.isVideoTexture=!0;class Bu extends me{constructor(t,e,n,i,r,a,o,l,c,u,h,d){super(null,a,o,l,c,u,i,r,h,d),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}Bu.prototype.isCompressedTexture=!0;class zu extends me{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.needsUpdate=!0}}zu.prototype.isCanvasTexture=!0;class Uu extends me{constructor(t,e,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:1026,u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===1026&&(n=1012),n===void 0&&u===1027&&(n=1020),super(null,i,r,a,o,l,u,n,c),this.image={width:t,height:e},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1}}Uu.prototype.isDepthTexture=!0;class Oa extends Bt{constructor(t=1,e=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new M,u=new $;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(o,3)),this.setAttribute("uv",new Pt(l,2))}}class Be extends Bt{constructor(t=1,e=1,n=1,i=8,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const x=[],y=n/2;let m=0;p(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Pt(h,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(f,2));function p(){const E=new M,T=new M;let _=0;const C=(e-t)/n;for(let D=0;D<=r;D++){const N=[],B=D/r,O=B*(e-t)+t;for(let F=0;F<=i;F++){const A=F/i,P=A*l+o,I=Math.sin(P),R=Math.cos(P);T.x=O*I,T.y=-B*n+y,T.z=O*R,h.push(T.x,T.y,T.z),E.set(I,C,R).normalize(),d.push(E.x,E.y,E.z),f.push(A,1-B),N.push(g++)}x.push(N)}for(let D=0;D<i;D++)for(let N=0;N<r;N++){const B=x[N][D],O=x[N+1][D],F=x[N+1][D+1],A=x[N][D+1];u.push(B,O,A),u.push(O,F,A),_+=6}c.addGroup(m,_,0),m+=_}function b(E){const T=g,_=new $,C=new M;let D=0;const N=E===!0?t:e,B=E===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,y*B,0),d.push(0,B,0),f.push(.5,.5),g++;const O=g;for(let F=0;F<=i;F++){const P=F/i*l+o,I=Math.cos(P),R=Math.sin(P);C.x=N*R,C.y=y*B,C.z=N*I,h.push(C.x,C.y,C.z),d.push(0,B,0),_.x=I*.5+.5,_.y=R*.5*B+.5,f.push(_.x,_.y),g++}for(let F=0;F<i;F++){const A=T+F,P=O+F;E===!0?u.push(P,P+1,A):u.push(P+1,P,A),D+=3}c.addGroup(m,D,E===!0?1:2),m+=D}}}class Gu extends Be{constructor(t=1,e=1,n=8,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}}class Ou extends Bt{constructor(t,e,n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(r.slice(),3)),this.setAttribute("uv",new Pt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(p){const b=new M,E=new M,T=new M;for(let _=0;_<e.length;_+=3)f(e[_+0],b),f(e[_+1],E),f(e[_+2],T),l(b,E,T,p)}function l(p,b,E,T){const _=T+1,C=[];for(let D=0;D<=_;D++){C[D]=[];const N=p.clone().lerp(E,D/_),B=b.clone().lerp(E,D/_),O=_-D;for(let F=0;F<=O;F++)F===0&&D===_?C[D][F]=N:C[D][F]=N.clone().lerp(B,F/O)}for(let D=0;D<_;D++)for(let N=0;N<2*(_-D)-1;N++){const B=Math.floor(N/2);N%2===0?(d(C[D][B+1]),d(C[D+1][B]),d(C[D][B])):(d(C[D][B+1]),d(C[D+1][B+1]),d(C[D+1][B]))}}function c(p){const b=new M;for(let E=0;E<r.length;E+=3)b.x=r[E+0],b.y=r[E+1],b.z=r[E+2],b.normalize().multiplyScalar(p),r[E+0]=b.x,r[E+1]=b.y,r[E+2]=b.z}function u(){const p=new M;for(let b=0;b<r.length;b+=3){p.x=r[b+0],p.y=r[b+1],p.z=r[b+2];const E=y(p)/2/Math.PI+.5,T=m(p)/Math.PI+.5;a.push(E,1-T)}g(),h()}function h(){for(let p=0;p<a.length;p+=6){const b=a[p+0],E=a[p+2],T=a[p+4],_=Math.max(b,E,T),C=Math.min(b,E,T);_>.9&&C<.1&&(b<.2&&(a[p+0]+=1),E<.2&&(a[p+2]+=1),T<.2&&(a[p+4]+=1))}}function d(p){r.push(p.x,p.y,p.z)}function f(p,b){const E=p*3;b.x=t[E+0],b.y=t[E+1],b.z=t[E+2]}function g(){const p=new M,b=new M,E=new M,T=new M,_=new $,C=new $,D=new $;for(let N=0,B=0;N<r.length;N+=9,B+=6){p.set(r[N+0],r[N+1],r[N+2]),b.set(r[N+3],r[N+4],r[N+5]),E.set(r[N+6],r[N+7],r[N+8]),_.set(a[B+0],a[B+1]),C.set(a[B+2],a[B+3]),D.set(a[B+4],a[B+5]),T.copy(p).add(b).add(E).divideScalar(3);const O=y(T);x(_,B+0,p,O),x(C,B+2,b,O),x(D,B+4,E,O)}}function x(p,b,E,T){T<0&&p.x===1&&(a[b]=p.x-1),E.x===0&&E.z===0&&(a[b]=T/2/Math.PI+.5)}function y(p){return Math.atan2(p.z,-p.x)}function m(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}}const Hu={triangulate:function(s,t,e){e=e||2;const n=t&&t.length,i=n?t[0]*e:s.length;let r=Ha(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,d,f;if(n&&(r=Xu(s,t,r,e)),s.length>80*e){o=c=s[0],l=u=s[1];for(let g=e;g<i;g+=e)h=s[g],d=s[g+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-o,u-l),f=f!==0?1/f:0}return mi(r,a,e,o,l,f),a}};function Ha(s,t,e,n,i){let r,a;if(i===id(s,t,e,n)>0)for(r=t;r<e;r+=n)a=na(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=na(r,s[r],s[r+1],a);return a&&sr(a,a.next)&&(xi(a),a=a.next),a}function dn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(sr(e,e.next)||re(e.prev,e,e.next)===0)){if(xi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function mi(s,t,e,n,i,r,a){if(!s)return;!a&&r&&$u(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Vu(s,n,i,r):ku(s)){t.push(l.i/e),t.push(s.i/e),t.push(c.i/e),xi(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Wu(dn(s),t,e),mi(s,t,e,n,i,r,2)):a===2&&qu(s,t,e,n,i,r):mi(dn(s),t,e,n,i,r,1);break}}}function ku(s){const t=s.prev,e=s,n=s.next;if(re(t,e,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(Wn(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&re(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Vu(s,t,e,n){const i=s.prev,r=s,a=s.next;if(re(i,r,a)>=0)return!1;const o=i.x<r.x?i.x<a.x?i.x:a.x:r.x<a.x?r.x:a.x,l=i.y<r.y?i.y<a.y?i.y:a.y:r.y<a.y?r.y:a.y,c=i.x>r.x?i.x>a.x?i.x:a.x:r.x>a.x?r.x:a.x,u=i.y>r.y?i.y>a.y?i.y:a.y:r.y>a.y?r.y:a.y,h=Xr(o,l,t,e,n),d=Xr(c,u,t,e,n);let f=s.prevZ,g=s.nextZ;for(;f&&f.z>=h&&g&&g.z<=d;){if(f!==s.prev&&f!==s.next&&Wn(i.x,i.y,r.x,r.y,a.x,a.y,f.x,f.y)&&re(f.prev,f,f.next)>=0||(f=f.prevZ,g!==s.prev&&g!==s.next&&Wn(i.x,i.y,r.x,r.y,a.x,a.y,g.x,g.y)&&re(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=h;){if(f!==s.prev&&f!==s.next&&Wn(i.x,i.y,r.x,r.y,a.x,a.y,f.x,f.y)&&re(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=d;){if(g!==s.prev&&g!==s.next&&Wn(i.x,i.y,r.x,r.y,a.x,a.y,g.x,g.y)&&re(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Wu(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!sr(i,r)&&ka(i,n,n.next,r)&&gi(i,r)&&gi(r,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(r.i/e),xi(n),xi(n.next),n=s=r),n=n.next}while(n!==s);return dn(n)}function qu(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&td(a,o)){let l=Va(a,o);a=dn(a,a.next),l=dn(l,l.next),mi(a,t,e,n,i,r),mi(l,t,e,n,i,r);return}o=o.next}a=a.next}while(a!==s)}function Xu(s,t,e,n){const i=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Ha(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Ku(c));for(i.sort(Yu),r=0;r<i.length;r++)Zu(i[r],e),e=dn(e,e.next);return e}function Yu(s,t){return s.x-t.x}function Zu(s,t){if(t=ju(s,t),t){const e=Va(t,s);dn(t,t.next),dn(e,e.next)}}function ju(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r){if(r=d,d===n){if(i===e.y)return e;if(i===e.next.y)return e.next}a=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!a)return null;if(n===r)return a;const o=a,l=a.x,c=a.y;let u=1/0,h;e=a;do n>=e.x&&e.x>=l&&n!==e.x&&Wn(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)&&(h=Math.abs(i-e.y)/(n-e.x),gi(e,s)&&(h<u||h===u&&(e.x>a.x||e.x===a.x&&Ju(a,e)))&&(a=e,u=h)),e=e.next;while(e!==o);return a}function Ju(s,t){return re(s.prev,s,t.prev)<0&&re(t.next,s,s.next)<0}function $u(s,t,e,n){let i=s;do i.z===null&&(i.z=Xr(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Qu(i)}function Qu(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function Xr(s,t,e,n,i){return s=32767*(s-e)*i,t=32767*(t-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Ku(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Wn(s,t,e,n,i,r,a,o){return(i-a)*(t-o)-(s-a)*(r-o)>=0&&(s-a)*(n-o)-(e-a)*(t-o)>=0&&(e-a)*(r-o)-(i-a)*(n-o)>=0}function td(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!ed(s,t)&&(gi(s,t)&&gi(t,s)&&nd(s,t)&&(re(s.prev,s,t.prev)||re(s,t.prev,t))||sr(s,t)&&re(s.prev,s,s.next)>0&&re(t.prev,t,t.next)>0)}function re(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function sr(s,t){return s.x===t.x&&s.y===t.y}function ka(s,t,e,n){const i=Zi(re(s,t,e)),r=Zi(re(s,t,n)),a=Zi(re(e,n,s)),o=Zi(re(e,n,t));return!!(i!==r&&a!==o||i===0&&Yi(s,e,t)||r===0&&Yi(s,n,t)||a===0&&Yi(e,s,n)||o===0&&Yi(e,t,n))}function Yi(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Zi(s){return s>0?1:s<0?-1:0}function ed(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&ka(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function gi(s,t){return re(s.prev,s,s.next)<0?re(s,t,s.next)>=0&&re(s,s.prev,t)>=0:re(s,t,s.prev)<0||re(s,s.next,t)<0}function nd(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Va(s,t){const e=new Yr(s.i,s.x,s.y),n=new Yr(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function na(s,t,e,n){const i=new Yr(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Yr(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function id(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class hn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return hn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];ia(t),ra(n,t);let a=t.length;e.forEach(ia);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,ra(n,e[l]);const o=Hu.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function ia(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ra(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class yi extends Bt{constructor(t,e){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Pt(i,3)),this.setAttribute("uv",new Pt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1;let h=e.depth!==void 0?e.depth:100,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:6,g=e.bevelSize!==void 0?e.bevelSize:f-2,x=e.bevelOffset!==void 0?e.bevelOffset:0,y=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,p=e.UVGenerator!==void 0?e.UVGenerator:rd;e.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=e.amount);let b,E=!1,T,_,C,D;m&&(b=m.getSpacedPoints(u),E=!0,d=!1,T=m.computeFrenetFrames(u,!1),_=new M,C=new M,D=new M),d||(y=0,f=0,g=0,x=0);const N=o.extractPoints(c);let B=N.shape;const O=N.holes;if(!hn.isClockWise(B)){B=B.reverse();for(let J=0,K=O.length;J<K;J++){const nt=O[J];hn.isClockWise(nt)&&(O[J]=nt.reverse())}}const A=hn.triangulateShape(B,O),P=B;for(let J=0,K=O.length;J<K;J++){const nt=O[J];B=B.concat(nt)}function I(J,K,nt){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().multiplyScalar(nt).add(J)}const R=B.length,Y=A.length;function it(J,K,nt){let ft,lt,S;const w=J.x-K.x,q=J.y-K.y,X=nt.x-J.x,rt=nt.y-J.y,ut=w*w+q*q,It=w*rt-q*X;if(Math.abs(It)>Number.EPSILON){const vt=Math.sqrt(ut),L=Math.sqrt(X*X+rt*rt),tt=K.x-q/vt,st=K.y+w/vt,mt=nt.x-rt/L,Z=nt.y+X/L,St=((mt-tt)*rt-(Z-st)*X)/(w*rt-q*X);ft=tt+w*St-J.x,lt=st+q*St-J.y;const zt=ft*ft+lt*lt;if(zt<=2)return new $(ft,lt);S=Math.sqrt(zt/2)}else{let vt=!1;w>Number.EPSILON?X>Number.EPSILON&&(vt=!0):w<-Number.EPSILON?X<-Number.EPSILON&&(vt=!0):Math.sign(q)===Math.sign(rt)&&(vt=!0),vt?(ft=-q,lt=w,S=Math.sqrt(ut)):(ft=w,lt=q,S=Math.sqrt(ut/2))}return new $(ft/S,lt/S)}const Q=[];for(let J=0,K=P.length,nt=K-1,ft=J+1;J<K;J++,nt++,ft++)nt===K&&(nt=0),ft===K&&(ft=0),Q[J]=it(P[J],P[nt],P[ft]);const ot=[];let et,pt=Q.concat();for(let J=0,K=O.length;J<K;J++){const nt=O[J];et=[];for(let ft=0,lt=nt.length,S=lt-1,w=ft+1;ft<lt;ft++,S++,w++)S===lt&&(S=0),w===lt&&(w=0),et[ft]=it(nt[ft],nt[S],nt[w]);ot.push(et),pt=pt.concat(et)}for(let J=0;J<y;J++){const K=J/y,nt=f*Math.cos(K*Math.PI/2),ft=g*Math.sin(K*Math.PI/2)+x;for(let lt=0,S=P.length;lt<S;lt++){const w=I(P[lt],Q[lt],ft);Mt(w.x,w.y,-nt)}for(let lt=0,S=O.length;lt<S;lt++){const w=O[lt];et=ot[lt];for(let q=0,X=w.length;q<X;q++){const rt=I(w[q],et[q],ft);Mt(rt.x,rt.y,-nt)}}}const wt=g+x;for(let J=0;J<R;J++){const K=d?I(B[J],pt[J],wt):B[J];E?(C.copy(T.normals[0]).multiplyScalar(K.x),_.copy(T.binormals[0]).multiplyScalar(K.y),D.copy(b[0]).add(C).add(_),Mt(D.x,D.y,D.z)):Mt(K.x,K.y,0)}for(let J=1;J<=u;J++)for(let K=0;K<R;K++){const nt=d?I(B[K],pt[K],wt):B[K];E?(C.copy(T.normals[J]).multiplyScalar(nt.x),_.copy(T.binormals[J]).multiplyScalar(nt.y),D.copy(b[J]).add(C).add(_),Mt(D.x,D.y,D.z)):Mt(nt.x,nt.y,h/u*J)}for(let J=y-1;J>=0;J--){const K=J/y,nt=f*Math.cos(K*Math.PI/2),ft=g*Math.sin(K*Math.PI/2)+x;for(let lt=0,S=P.length;lt<S;lt++){const w=I(P[lt],Q[lt],ft);Mt(w.x,w.y,h+nt)}for(let lt=0,S=O.length;lt<S;lt++){const w=O[lt];et=ot[lt];for(let q=0,X=w.length;q<X;q++){const rt=I(w[q],et[q],ft);E?Mt(rt.x,rt.y+b[u-1].y,b[u-1].x+nt):Mt(rt.x,rt.y,h+nt)}}}W(),kt();function W(){const J=i.length/3;if(d){let K=0,nt=R*K;for(let ft=0;ft<Y;ft++){const lt=A[ft];yt(lt[2]+nt,lt[1]+nt,lt[0]+nt)}K=u+y*2,nt=R*K;for(let ft=0;ft<Y;ft++){const lt=A[ft];yt(lt[0]+nt,lt[1]+nt,lt[2]+nt)}}else{for(let K=0;K<Y;K++){const nt=A[K];yt(nt[2],nt[1],nt[0])}for(let K=0;K<Y;K++){const nt=A[K];yt(nt[0]+R*u,nt[1]+R*u,nt[2]+R*u)}}n.addGroup(J,i.length/3-J,0)}function kt(){const J=i.length/3;let K=0;Lt(P,K),K+=P.length;for(let nt=0,ft=O.length;nt<ft;nt++){const lt=O[nt];Lt(lt,K),K+=lt.length}n.addGroup(J,i.length/3-J,1)}function Lt(J,K){let nt=J.length;for(;--nt>=0;){const ft=nt;let lt=nt-1;lt<0&&(lt=J.length-1);for(let S=0,w=u+y*2;S<w;S++){const q=R*S,X=R*(S+1),rt=K+ft+q,ut=K+lt+q,It=K+lt+X,vt=K+ft+X;Ot(rt,ut,It,vt)}}}function Mt(J,K,nt){l.push(J),l.push(K),l.push(nt)}function yt(J,K,nt){Ct(J),Ct(K),Ct(nt);const ft=i.length/3,lt=p.generateTopUV(n,i,ft-3,ft-2,ft-1);Ft(lt[0]),Ft(lt[1]),Ft(lt[2])}function Ot(J,K,nt,ft){Ct(J),Ct(K),Ct(ft),Ct(K),Ct(nt),Ct(ft);const lt=i.length/3,S=p.generateSideWallUV(n,i,lt-6,lt-3,lt-2,lt-1);Ft(S[0]),Ft(S[1]),Ft(S[3]),Ft(S[1]),Ft(S[2]),Ft(S[3])}function Ct(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function Ft(J){r.push(J.x),r.push(J.y)}}}toJSON(){const t=Bt.prototype.toJSON.call(this),e=this.parameters.shapes,n=this.parameters.options;return sd(e,n,t)}}const rd={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new $(r,a),new $(o,l),new $(c,u)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],x=t[r*3],y=t[r*3+1],m=t[r*3+2];return Math.abs(o-u)<.01?[new $(a,1-l),new $(c,1-h),new $(d,1-g),new $(x,1-m)]:[new $(o,1-l),new $(u,1-h),new $(f,1-g),new $(y,1-m)]}};function sd(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ad extends Ou{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}}class sa extends Bt{constructor(t,e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Me(i,0,Math.PI*2);const r=[],a=[],o=[],l=1/e,c=new M,u=new $;for(let h=0;h<=e;h++){const d=n+h*l*i,f=Math.sin(d),g=Math.cos(d);for(let x=0;x<=t.length-1;x++)c.x=t[x].x*f,c.y=t[x].y,c.z=t[x].x*g,a.push(c.x,c.y,c.z),u.x=h/e,u.y=x/(t.length-1),o.push(u.x,u.y)}for(let h=0;h<e;h++)for(let d=0;d<t.length-1;d++){const f=d+h*t.length,g=f,x=f+t.length,y=f+t.length+1,m=f+1;r.push(g,x,m),r.push(x,y,m)}if(this.setIndex(r),this.setAttribute("position",new Pt(a,3)),this.setAttribute("uv",new Pt(o,2)),this.computeVertexNormals(),i===Math.PI*2){const h=this.attributes.normal.array,d=new M,f=new M,g=new M,x=e*t.length*3;for(let y=0,m=0;y<t.length;y++,m+=3)d.x=h[m+0],d.y=h[m+1],d.z=h[m+2],f.x=h[x+m+0],f.y=h[x+m+1],f.z=h[x+m+2],g.addVectors(d,f).normalize(),h[m+0]=h[x+m+0]=g.x,h[m+1]=h[x+m+1]=g.y,h[m+2]=h[x+m+2]=g.z}}}class od extends Bt{constructor(t,e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Pt(i,3)),this.setAttribute("normal",new Pt(r,3)),this.setAttribute("uv",new Pt(a,2));function c(u){const h=i.length/3,d=u.extractPoints(e);let f=d.shape;const g=d.holes;hn.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,m=g.length;y<m;y++){const p=g[y];hn.isClockWise(p)===!0&&(g[y]=p.reverse())}const x=hn.triangulateShape(f,g);for(let y=0,m=g.length;y<m;y++){const p=g[y];f=f.concat(p)}for(let y=0,m=f.length;y<m;y++){const p=f[y];i.push(p.x,p.y,0),r.push(0,0,1),a.push(p.x,p.y)}for(let y=0,m=x.length;y<m;y++){const p=x[y],b=p[0]+h,E=p[1]+h,T=p[2]+h;n.push(b,E,T),l+=3}}}toJSON(){const t=Bt.prototype.toJSON.call(this),e=this.parameters.shapes;return ld(e,t)}}function ld(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class ze extends Bt{constructor(t=1,e=8,n=6,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new M,d=new M,f=[],g=[],x=[],y=[];for(let m=0;m<=n;m++){const p=[],b=m/n;let E=0;m==0&&a==0?E=.5/e:m==n&&l==Math.PI&&(E=-.5/e);for(let T=0;T<=e;T++){const _=T/e;h.x=-t*Math.cos(i+_*r)*Math.sin(a+b*o),h.y=t*Math.cos(a+b*o),h.z=t*Math.sin(i+_*r)*Math.sin(a+b*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),y.push(_+E,1-b),p.push(c++)}u.push(p)}for(let m=0;m<n;m++)for(let p=0;p<e;p++){const b=u[m][p+1],E=u[m][p],T=u[m+1][p],_=u[m+1][p+1];(m!==0||a>0)&&f.push(b,E,_),(m!==n-1||l<Math.PI)&&f.push(E,T,_)}this.setIndex(f),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(x,3)),this.setAttribute("uv",new Pt(y,2))}}class Zr extends Bt{constructor(t,e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new M,l=new M,c=new $;let u=new M;const h=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Pt(h,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(f,2));function x(){for(let b=0;b<e;b++)y(b);y(r===!1?e:0),p(),m()}function y(b){u=t.getPointAt(b/e,u);const E=a.normals[b],T=a.binormals[b];for(let _=0;_<=i;_++){const C=_/i*Math.PI*2,D=Math.sin(C),N=-Math.cos(C);l.x=N*E.x+D*T.x,l.y=N*E.y+D*T.y,l.z=N*E.z+D*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=e;b++)for(let E=1;E<=i;E++){const T=(i+1)*(b-1)+(E-1),_=(i+1)*b+(E-1),C=(i+1)*b+E,D=(i+1)*(b-1)+E;g.push(T,_,D),g.push(_,C,D)}}function p(){for(let b=0;b<=e;b++)for(let E=0;E<=i;E++)c.x=b/e,c.y=E/i,f.push(c.x,c.y)}}toJSON(){const t=Bt.prototype.toJSON.call(this);return t.path=this.parameters.path.toJSON(),t}}class cd extends ue{constructor(t){super(),this.type="ShadowMaterial",this.color=new dt(0),this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this}}cd.prototype.isShadowMaterial=!0;class hd extends Mn{constructor(t){super(t),this.type="RawShaderMaterial"}}hd.prototype.isRawShaderMaterial=!0;class ae extends ue{constructor(t){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.flatShading=t.flatShading,this.vertexTangents=t.vertexTangents,this}}ae.prototype.isMeshStandardMaterial=!0;class ud extends ae{constructor(t){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=Me(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new dt).copy(t.sheen):this.sheen=null,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this}}ud.prototype.isMeshPhysicalMaterial=!0;class dd extends ue{constructor(t){super(),this.type="MeshPhongMaterial",this.color=new dt(16777215),this.specular=new dt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.flatShading=t.flatShading,this}}dd.prototype.isMeshPhongMaterial=!0;class fd extends ue{constructor(t){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new dt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this}}fd.prototype.isMeshToonMaterial=!0;class pd extends ue{constructor(t){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.flatShading=t.flatShading,this}}pd.prototype.isMeshNormalMaterial=!0;class md extends ue{constructor(t){super(),this.type="MeshLambertMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this}}md.prototype.isMeshLambertMaterial=!0;class gd extends ue{constructor(t){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new dt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.flatShading=t.flatShading,this}}gd.prototype.isMeshMatcapMaterial=!0;class xd extends un{constructor(t){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}xd.prototype.isLineDashedMaterial=!0;const ie={arraySlice:function(s,t,e){return ie.isTypedArray(s)?new s.constructor(s.subarray(t,e!==void 0?e:s.length)):s.slice(t,e)},convertArray:function(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n},sortedArray:function(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i},flattenJSON:function(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)},subclip:function(s,t,e,n,i=30){const r=s.clone();r.name=t;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*i;if(!(g<e||g>=n)){h.push(c.times[f]);for(let x=0;x<u;++x)d.push(c.values[f*u+x])}}h.length!==0&&(c.times=ie.convertArray(h,c.times.constructor),c.values=ie.convertArray(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r},makeClipAdditive:function(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let a=0;a<i;++a){const o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const g=o.times.length-1;let x;if(r<=o.times[0]){const m=u,p=h-u;x=ie.arraySlice(o.values,m,p)}else if(r>=o.times[g]){const m=g*h+u,p=m+h-u;x=ie.arraySlice(o.values,m,p)}else{const m=o.createInterpolant(),p=u,b=h-u;m.evaluate(r),x=ie.arraySlice(m.resultBuffer,p,b)}l==="quaternion"&&new _e().fromArray(x).normalize().conjugate().toArray(x);const y=c.times.length;for(let m=0;m<y;++m){const p=m*f+d;if(l==="quaternion")_e.multiplyQuaternionsFlat(c.values,p,x,0,c.values,p);else{const b=f-d*2;for(let E=0;E<b;++E)c.values[p+E]-=x[E]}}}return s.blendMode=2501,s}};class fn{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}fn.prototype.beforeStart_=fn.prototype.copySampleValue_;fn.prototype.afterEnd_=fn.prototype.copySampleValue_;class vd extends fn{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,o=2*e-n;break;case 2402:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=t,l=2*n-e;break;case 2402:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,y=x*g,m=-d*y+2*d*x-d*g,p=(1+d)*y+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*y+(1.5+f)*x+.5*g,E=f*y-f*x;for(let T=0;T!==o;++T)r[T]=m*a[u+T]+p*a[c+T]+b*a[l+T]+E*a[h+T];return r}}class Wa extends fn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(i-e),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class _d extends fn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class qe{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ie.convertArray(e,this.TimeBufferType),this.values=ie.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ie.convertArray(t.times,Array),values:ie.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _d(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vd(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=ie.arraySlice(n,r,a),this.values=ie.arraySlice(this.values,r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&ie.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=ie.arraySlice(this.times),e=ie.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===2302,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(i)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const x=e[h+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=ie.arraySlice(t,0,a),this.values=ie.arraySlice(e,0,a*n)):(this.times=t,this.values=e),this}clone(){const t=ie.arraySlice(this.times,0),e=ie.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}qe.prototype.TimeBufferType=Float32Array;qe.prototype.ValueBufferType=Float32Array;qe.prototype.DefaultInterpolation=2301;class Qn extends qe{}Qn.prototype.ValueTypeName="bool";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=2300;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;class qa extends qe{}qa.prototype.ValueTypeName="color";class Qi extends qe{}Qi.prototype.ValueTypeName="number";class yd extends fn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let u=c+o;c!==u;c+=4)_e.slerpFlat(r,0,a,c-o,a,c,l);return r}}class wi extends qe{InterpolantFactoryMethodLinear(t){return new yd(this.times,this.values,this.getValueSize(),t)}}wi.prototype.ValueTypeName="quaternion";wi.prototype.DefaultInterpolation=2301;wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Kn extends qe{}Kn.prototype.ValueTypeName="string";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=2300;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;class Ki extends qe{}Ki.prototype.ValueTypeName="vector";class aa{constructor(t,e=-1,n,i=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Ve(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Md(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(qe.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=ie.getKeyframeOrder(l);l=ie.sortedArray(l,1,u),c=ie.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Qi(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,x){if(f.length!==0){const y=[],m=[];ie.flattenJSON(f,y,m,g),y.length!==0&&x.push(new h(d,y,m))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const y=[],m=[];for(let p=0;p!==d[g].morphTargets.length;++p){const b=d[g];y.push(b.time),m.push(b.morphTarget===x?1:0)}i.push(new Qi(".morphTargetInfluence["+x+"]",y,m))}l=f.length*a}else{const f=".bones["+e[h].name+"]";n(Ki,f+".position",d,"pos",i),n(wi,f+".quaternion",d,"rot",i),n(Ki,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function wd(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qi;case"vector":case"vector2":case"vector3":case"vector4":return Ki;case"color":return qa;case"quaternion":return wi;case"bool":case"boolean":return Qn;case"string":return Kn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Md(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=wd(s.type);if(s.times===void 0){const e=[],n=[];ie.flattenJSON(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Xn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class bd{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Sd=new bd;class pn{constructor(t){this.manager=t!==void 0?t:Sd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const Ne={};class Ed extends pn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Xn.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;if(Ne[t]!==void 0){Ne[t].push({onLoad:e,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,l=t.match(o);let c;if(l){const u=l[1],h=!!l[2];let d=l[3];d=decodeURIComponent(d),h&&(d=atob(d));try{let f;const g=(this.responseType||"").toLowerCase();switch(g){case"arraybuffer":case"blob":const x=new Uint8Array(d.length);for(let m=0;m<d.length;m++)x[m]=d.charCodeAt(m);g==="blob"?f=new Blob([x.buffer],{type:u}):f=x.buffer;break;case"document":f=new DOMParser().parseFromString(d,u);break;case"json":f=JSON.parse(d);break;default:f=d;break}setTimeout(function(){e&&e(f),r.manager.itemEnd(t)},0)}catch(f){setTimeout(function(){i&&i(f),r.manager.itemError(t),r.manager.itemEnd(t)},0)}}else{Ne[t]=[],Ne[t].push({onLoad:e,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",t,!0),c.addEventListener("load",function(u){const h=this.response,d=Ne[t];if(delete Ne[t],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Xn.add(t,h);for(let f=0,g=d.length;f<g;f++){const x=d[f];x.onLoad&&x.onLoad(h)}r.manager.itemEnd(t)}else{for(let f=0,g=d.length;f<g;f++){const x=d[f];x.onError&&x.onError(u)}r.manager.itemError(t),r.manager.itemEnd(t)}},!1),c.addEventListener("progress",function(u){const h=Ne[t];for(let d=0,f=h.length;d<f;d++){const g=h[d];g.onProgress&&g.onProgress(u)}},!1),c.addEventListener("error",function(u){const h=Ne[t];delete Ne[t];for(let d=0,f=h.length;d<f;d++){const g=h[d];g.onError&&g.onError(u)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),c.addEventListener("abort",function(u){const h=Ne[t];delete Ne[t];for(let d=0,f=h.length;d<f;d++){const g=h[d];g.onError&&g.onError(u)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const u in this.requestHeader)c.setRequestHeader(u,this.requestHeader[u]);c.send(null)}return r.manager.itemStart(t),c}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Xa extends pn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Xn.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),Xn.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Td extends pn{constructor(t){super(t)}load(t,e,n,i){const r=new nr,a=new Xa(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class Ad extends pn{constructor(t){super(t)}load(t,e,n,i){const r=new me,a=new Xa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o;const l=t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0;r.format=l?1022:1023,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Le{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new $:new M);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new M,i=[],r=[],a=[],o=new M,l=new Et;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new M),i[f].normalize()}r[0]=new M,a[0]=new M;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Me(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Me(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ar extends Le{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new $,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}ar.prototype.isEllipseCurve=!0;class Ya extends ar{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.type="ArcCurve"}}Ya.prototype.isArcCurve=!0;function ts(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const ji=new M,Ur=new ts,Gr=new ts,Or=new ts;class Yn extends Le{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new M){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(ji.subVectors(i[0],i[1]).add(i[0]),c=ji);const h=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(ji.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=ji),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),y<1e-4&&(y=x),Ur.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,y),Gr.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,y),Or.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,y)}else this.curveType==="catmullrom"&&(Ur.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Gr.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Or.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Ur.calc(l),Gr.calc(l),Or.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new M().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}Yn.prototype.isCatmullRomCurve3=!0;function oa(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Ld(s,t){const e=1-s;return e*e*t}function Cd(s,t){return 2*(1-s)*s*t}function Rd(s,t){return s*s*t}function ui(s,t,e,n){return Ld(s,t)+Cd(s,e)+Rd(s,n)}function Pd(s,t){const e=1-s;return e*e*e*t}function Dd(s,t){const e=1-s;return 3*e*e*s*t}function Fd(s,t){return 3*(1-s)*s*s*t}function Id(s,t){return s*s*s*t}function di(s,t,e,n,i){return Pd(s,t)+Dd(s,e)+Fd(s,n)+Id(s,i)}class es extends Le{constructor(t=new $,e=new $,n=new $,i=new $){super(),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new $){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(di(t,i.x,r.x,a.x,o.x),di(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}es.prototype.isCubicBezierCurve=!0;class Za extends Le{constructor(t=new M,e=new M,n=new M,i=new M){super(),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new M){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(di(t,i.x,r.x,a.x,o.x),di(t,i.y,r.y,a.y,o.y),di(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}Za.prototype.isCubicBezierCurve3=!0;class or extends Le{constructor(t=new $,e=new $){super(),this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new $;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}or.prototype.isLineCurve=!0;class Nd extends Le{constructor(t=new M,e=new M){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=t,this.v2=e}getPoint(t,e=new M){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ns extends Le{constructor(t=new $,e=new $,n=new $){super(),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ui(t,i.x,r.x,a.x),ui(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}ns.prototype.isQuadraticBezierCurve=!0;class ja extends Le{constructor(t=new M,e=new M,n=new M){super(),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new M){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ui(t,i.x,r.x,a.x),ui(t,i.y,r.y,a.y),ui(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}ja.prototype.isQuadraticBezierCurve3=!0;class is extends Le{constructor(t=[]){super(),this.type="SplineCurve",this.points=t}getPoint(t,e=new $){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(oa(o,l.x,c.x,u.x,h.x),oa(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new $().fromArray(i))}return this}}is.prototype.isSplineCurve=!0;var Bd=Object.freeze({__proto__:null,ArcCurve:Ya,CatmullRomCurve3:Yn,CubicBezierCurve:es,CubicBezierCurve3:Za,EllipseCurve:ar,LineCurve:or,LineCurve3:Nd,QuadraticBezierCurve:ns,QuadraticBezierCurve3:ja,SplineCurve:is});class zd extends Le{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new or(e,t))}getPoint(t){const e=t*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=e){const r=n[i]-e,a=this.curves[i],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l)}i++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a&&a.isEllipseCurve?t*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Bd[i.type]().fromJSON(i))}return this}}class jr extends zd{constructor(t){super(),this.type="Path",this.currentPoint=new $,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new or(this.currentPoint.clone(),new $(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new ns(this.currentPoint.clone(),new $(t,e),new $(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new es(this.currentPoint.clone(),new $(t,e),new $(n,i),new $(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new is(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new ar(t,e,n,i,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class lr extends jr{constructor(t){super(t),this.uuid=Ve(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new jr().fromJSON(i))}return this}}class We extends qt{constructor(t,e=1){super(),this.type="Light",this.color=new dt(t),this.intensity=e}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}We.prototype.isLight=!0;class vi extends We{constructor(t,e,n){super(t,n),this.type="HemisphereLight",this.position.copy(qt.DefaultUp),this.updateMatrix(),this.groundColor=new dt(e)}copy(t){return We.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}vi.prototype.isHemisphereLight=!0;const la=new Et,ca=new M,ha=new M;class rs{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ca.setFromMatrixPosition(t.matrixWorld),e.position.copy(ca),ha.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ha),e.updateMatrixWorld(),la.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ja extends rs{constructor(){super(new Te(50,1,.5,500)),this.focus=1}updateMatrices(t){const e=this.camera,n=Vr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}Ja.prototype.isSpotLightShadow=!0;class Ud extends We{constructor(t,e,n=0,i=Math.PI/3,r=0,a=1){super(t,e),this.type="SpotLight",this.position.copy(qt.DefaultUp),this.updateMatrix(),this.target=new qt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.shadow=new Ja}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}Ud.prototype.isSpotLight=!0;const ua=new Et,ci=new M,Hr=new M;class $a extends rs{constructor(){super(new Te(90,1,.5,500)),this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new Yt(2,1,1,1),new Yt(0,1,1,1),new Yt(3,1,1,1),new Yt(1,1,1,1),new Yt(3,0,1,1),new Yt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ci.setFromMatrixPosition(t.matrixWorld),n.position.copy(ci),Hr.copy(n.position),Hr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Hr),n.updateMatrixWorld(),i.makeTranslation(-ci.x,-ci.y,-ci.z),ua.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua)}}$a.prototype.isPointLightShadow=!0;class Gd extends We{constructor(t,e,n=0,i=1){super(t,e),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $a}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}Gd.prototype.isPointLight=!0;class Mi extends $r{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}Mi.prototype.isOrthographicCamera=!0;class Qa extends rs{constructor(){super(new Mi(-5,5,5,-5,.5,500))}}Qa.prototype.isDirectionalLightShadow=!0;class _i extends We{constructor(t,e){super(t,e),this.type="DirectionalLight",this.position.copy(qt.DefaultUp),this.updateMatrix(),this.target=new qt,this.shadow=new Qa}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}_i.prototype.isDirectionalLight=!0;class Od extends We{constructor(t,e){super(t,e),this.type="AmbientLight"}}Od.prototype.isAmbientLight=!0;class Hd extends We{constructor(t,e,n=10,i=10){super(t,e),this.type="RectAreaLight",this.width=n,this.height=i}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}Hd.prototype.isRectAreaLight=!0;class Ka{constructor(){this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new M)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}Ka.prototype.isSphericalHarmonics3=!0;class ss extends We{constructor(t=new Ka,e=1){super(void 0,e),this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}ss.prototype.isLightProbe=!0;class kd{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}}class Vd extends Bt{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}Vd.prototype.isInstancedBufferGeometry=!0;class Wd extends ce{constructor(t,e,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(t,e,n),this.meshPerAttribute=i||1}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}Wd.prototype.isInstancedBufferAttribute=!0;class qd extends pn{constructor(t){super(t),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Xn.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Xn.add(t,l),e&&e(l),r.manager.itemEnd(t)}).catch(function(l){i&&i(l),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}}qd.prototype.isImageBitmapLoader=!0;let Ji;const Xd={getContext:function(){return Ji===void 0&&(Ji=new(window.AudioContext||window.webkitAudioContext)),Ji},setContext:function(s){Ji=s}};class Yd extends pn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new Ed(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{const l=o.slice(0);Xd.getContext().decodeAudioData(l,function(u){e(u)})}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}}class Zd extends ss{constructor(t,e,n=1){super(void 0,n);const i=new dt().set(t),r=new dt().set(e),a=new M(i.r,i.g,i.b),o=new M(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}Zd.prototype.isHemisphereLightProbe=!0;class jd extends ss{constructor(t,e=1){super(void 0,e);const n=new dt().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}jd.prototype.isAmbientLightProbe=!0;class Jd extends qt{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class $d{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){_e.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const a=this._workIndex*r;_e.multiplyQuaternionsFlat(t,a,t,e,t,n),_e.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const as="\\[\\]\\.:\\/",Qd=new RegExp("["+as+"]","g"),os="[^"+as+"]",Kd="[^"+as.replace("\\.","")+"]",tf=/((?:WC+[\/:])*)/.source.replace("WC",os),ef=/(WCOD+)?/.source.replace("WCOD",Kd),nf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",os),rf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",os),sf=new RegExp("^"+tf+ef+nf+rf+"$"),af=["material","materials","bones"];class of{constructor(t,e,n){const i=n||Xt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Xt{constructor(t,e,n){this.path=e,this.parsedPath=n||Xt.parseTrackName(e),this.node=Xt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Xt.Composite(t,e,n):new Xt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qd,"")}static parseTrackName(t){const e=sf.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);af.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.node[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=Xt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Xt.Composite=of;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class lf{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,a=r.length,o=new Array(a),l={endingStart:2400,endingEnd:2400};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;if(l<0||n===0)return;this._startTime=null,e=n*l}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case 2501:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case 2500:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const a=n===2202;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=2401,i.endingEnd=2401):(t?i.endingStart=this.zeroSlopeAtStart?2401:2400:i.endingStart=2402,e?i.endingEnd=this.zeroSlopeAtEnd?2401:2400:i.endingEnd=2402)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}}class cf extends bn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=i[h],f=d.name;let g=u[f];if(g!==void 0)a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const x=e&&e._propertyBindings[h].binding.parsedPath;g=new $d(Xt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=t._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),t._byClipCacheIndex=null;const h=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Wa(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let a=typeof t=="string"?aa.findByName(i,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=2500),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new lf(this,a,e,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?aa.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}cf.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class hf extends En{constructor(t,e,n=1){super(t,e),this.meshPerAttribute=n||1}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}hf.prototype.isInstancedInterleavedBuffer=!0;class uf{constructor(t,e,n=0,i=1/0){this.ray=new Sn(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!1,n=[]){return Jr(t,this,n,e),n.sort(da),n}intersectObjects(t,e=!1,n=[]){for(let i=0,r=t.length;i<r;i++)Jr(t[i],this,n,e);return n.sort(da),n}}function da(s,t){return s.distance-t.distance}function Jr(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Jr(i[r],t,e,!0)}}class df extends qt{constructor(t){super(),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}df.prototype.isImmediateRenderObject=!0;const on=new M,$i=new Et,kr=new Et;class ff extends rr{constructor(t){const e=to(t),n=new Bt,i=[],r=[],a=new dt(0,0,1),o=new dt(0,1,0);for(let c=0;c<e.length;c++){const u=e[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Pt(i,3)),n.setAttribute("color",new Pt(r,3));const l=new un({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");kr.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){const o=e[r];o.parent&&o.parent.isBone&&($i.multiplyMatrices(kr,o.matrixWorld),on.setFromMatrixPosition($i),i.setXYZ(a,on.x,on.y,on.z),$i.multiplyMatrices(kr,o.parent.matrixWorld),on.setFromMatrixPosition($i),i.setXYZ(a+1,on.x,on.y,on.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}function to(s){const t=[];s&&s.isBone&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,to(s.children[e]));return t}class pf extends rr{constructor(t=10,e=10,n=4473924,i=8947848){n=new dt(n),i=new dt(i);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,f=0,g=-o;d<=e;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const x=d===r?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const u=new Bt;u.setAttribute("position",new Pt(l,3)),u.setAttribute("color",new Pt(c,3));const h=new un({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}const mf=new Float32Array(1);new Int32Array(mf.buffer);const gf=new wn({side:1,depthWrite:!1,depthTest:!1});new Rt(new Ue,gf);Le.create=function(s,t){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(Le.prototype),s.prototype.constructor=s,s.prototype.getPoint=t,s};jr.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};pf.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};ff.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};pn.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),kd.extractUrlBase(s)};pn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Ce.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};Ce.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ce.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Ce.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};Ce.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};jn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ir.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};pe.prototype.flattenToArrayOffset=function(s,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,t)};pe.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};pe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};pe.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};pe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};pe.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};Et.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};Et.prototype.flattenToArrayOffset=function(s,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,t)};Et.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new M().setFromMatrixColumn(this,3)};Et.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};Et.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Et.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Et.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Et.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Et.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};Et.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Et.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Et.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Et.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Et.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Et.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Et.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Et.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Et.prototype.makeFrustum=function(s,t,e,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,t,n,e,i,r)};Et.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};He.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};_e.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};_e.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Sn.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Sn.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};Sn.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};le.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};le.prototype.barycoordFromPoint=function(s,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,t)};le.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};le.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};le.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};le.barycoordFromPoint=function(s,t,e,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),le.getBarycoord(s,t,e,n,i)};le.normal=function(s,t,e,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),le.getNormal(s,t,e,n)};lr.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};lr.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new yi(this,s)};lr.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new od(this,s)};$.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)};$.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};$.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};M.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};M.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};M.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};M.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};M.prototype.getColumnFromMatrix=function(s,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,s)};M.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};M.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)};M.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};M.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Yt.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)};Yt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};qt.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};qt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};qt.prototype.translate=function(s,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,s)};qt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};qt.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(qt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Rt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Rt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});za.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Te.prototype.setLens=function(s,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(s)};Object.defineProperties(We.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties(ce.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===35048},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(35048)}}});ce.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?35048:35044),this};ce.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},ce.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Bt.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};Bt.prototype.addAttribute=function(s,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new ce(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(s,t)};Bt.prototype.addDrawCall=function(s,t,e){e!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,t)};Bt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Bt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Bt.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};Bt.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Bt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});En.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?35048:35044),this};En.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};yi.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};yi.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};yi.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};_n.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(ue.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new dt}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===1}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}}});Object.defineProperties(Mn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});Zt.prototype.clearTarget=function(s,t,e,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(t,e,n)};Zt.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};Zt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Zt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Zt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Zt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Zt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Zt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Zt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Zt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Zt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Zt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Zt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Zt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Zt.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};Zt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Zt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Zt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Zt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Zt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Zt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Zt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Zt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Zt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Zt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Zt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?3001:3e3}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Fa.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(vn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});Jd.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new Yd().load(s,function(n){t.setBuffer(n)}),this};Qr.prototype.updateCubeMap=function(s,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,t)};Qr.prototype.clear=function(s,t,e,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,t,e,n)};Zn.crossOrigin=void 0;Zn.loadTexture=function(s,t,e,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Ad;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,e,void 0,n);return t&&(r.mapping=t),r};Zn.loadTextureCube=function(s,t,e,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Td;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,e,void 0,n);return t&&(r.mapping=t),r};Zn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Zn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"128"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="128");const xf=document.documentElement,vf=matchMedia("(prefers-color-scheme: dark)"),yn=matchMedia("(prefers-reduced-motion: reduce)").matches,ee=s=>document.getElementById(s),tr=()=>{const s=xf.getAttribute("data-theme");return s?s==="dark":vf.matches},ls=s=>document.addEventListener("portfolio:theme",s),_f=(s,t)=>document.dispatchEvent(new CustomEvent("portfolio:open-case",{detail:{id:s,from:t}})),yf=s=>ee(s)?.scrollIntoView({behavior:yn?"auto":"smooth",block:"start"});function wf(s,t,e){const n=new lr,i=-s/2,r=-t/2;return n.moveTo(i+e,r),n.lineTo(i+s-e,r),n.quadraticCurveTo(i+s,r,i+s,r+e),n.lineTo(i+s,r+t-e),n.quadraticCurveTo(i+s,r+t,i+s-e,r+t),n.lineTo(i+e,r+t),n.quadraticCurveTo(i,r+t,i,r+t-e),n.lineTo(i,r+e),n.quadraticCurveTo(i,r,i+e,r),n}function ln(s,t,e,n,i){const r=Math.min(.05,e*.3),a=new yi(wf(s,t,n),{depth:e,bevelEnabled:!0,bevelThickness:r,bevelSize:.05,bevelSegments:2,curveSegments:8});a.rotateX(-Math.PI/2);const o=new Rt(a,i);return o.castShadow=!0,o.receiveShadow=!0,o}const er=(s,t={})=>new ae({color:s,roughness:.85,metalness:0,...t});function cs(s){try{const t=new Zt({canvas:s,antialias:!0,alpha:!0,powerPreference:"low-power"});return t.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),t.shadowMap.enabled=!0,t.shadowMap.type=2,t}catch{return null}}function hs(s,t,e){s.position.set(e.x+40*Math.cos(t.el)*Math.sin(t.az),e.y+40*Math.sin(t.el),e.z+40*Math.cos(t.el)*Math.cos(t.az)),s.lookAt(e)}function us(s,t,e,n,i){const r=t/e,a=Math.max(n,i/r);s.left=-a*r/2,s.right=a*r/2,s.top=a/2,s.bottom=-a/2,s.updateProjectionMatrix()}function ds(s,t,e,n){let i=null;s.addEventListener("pointerdown",a=>{a.target.closest("button")||(i={x:a.clientX,y:a.clientY,az:t.taz,el:t.tel,moved:!1},s.setPointerCapture(a.pointerId),s.classList.add("drag"))}),s.addEventListener("pointermove",a=>{if(!i)return;const o=a.clientX-i.x,l=a.clientY-i.y;Math.abs(o)+Math.abs(l)>3&&(i.moved=!0),t.taz=i.az-o*.008,t.tel=Math.max(n.minEl,Math.min(n.maxEl,i.el+l*.005)),t.interact=performance.now(),e()});const r=()=>{i&&(t.lastDragMoved=i.moved,i=null,s.classList.remove("drag"))};s.addEventListener("pointerup",r),s.addEventListener("pointercancel",r),s.setAttribute("tabindex","0"),s.addEventListener("keydown",a=>{const o=a.key;if(o==="ArrowLeft")t.taz+=.2;else if(o==="ArrowRight")t.taz-=.2;else if(o==="ArrowUp")t.tel=Math.min(n.maxEl,t.tel+.08);else if(o==="ArrowDown")t.tel=Math.max(n.minEl,t.tel-.08);else return;a.preventDefault(),t.interact=performance.now(),e()})}function fs(s,{update:t,render:e,isRunning:n=()=>!0,margin:i="0px"}){let r=0,a=0,o=!1;const l=u=>{const h=Math.max(0,Math.min(.05,(u-a)/1e3));a=u,t(h),e(),r=requestAnimationFrame(l)},c=()=>{const u=!yn&&n()&&o&&!document.hidden;u&&!r?(a=performance.now(),r=requestAnimationFrame(l)):!u&&r&&(cancelAnimationFrame(r),r=0)};return new IntersectionObserver(u=>{o=u[0].isIntersecting,c()},{rootMargin:i}).observe(s),document.addEventListener("visibilitychange",c),{sync:c,active:()=>r!==0}}function Mf(){const s=ee("cover"),t=ee("c3d"),e=cs(t);if(!e){ee("nogl").style.display="grid";return}const n=new _n,i=new Mi(-10,10,5,-5,.1,200),r=new M(.2,.7,.2),a={az:.72,el:.52,taz:.72,tel:.52,interact:0},o=new vi(16777215,9080732,.75);n.add(o);const l=new _i(16777215,.85);l.position.set(-6,14,8),l.castShadow=!0,l.shadow.mapSize.set(1024,1024),Object.assign(l.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:1,far:40}),l.shadow.bias=-6e-4,n.add(l);const c={light:{base:14935788,lake:9356776,bronze:13208410,silver:13028308,gold:14858318,src:4144966,ring:5987286,plate:16053493,bar:4144966,fc:5987286,anom:15026253,layer:14540279,grid:5987286,bot:16777215,eye:1579035,mtn:9213352,snow:16777215,needle:16053493,cloud:16777215,tree:6263920,trunk:9071183,hemi:.8,sun:.85},dark:{base:1908519,lake:2975111,bronze:11104319,silver:9212834,gold:13213758,src:11842749,ring:9409016,plate:2566450,bar:13948120,fc:9409016,anom:16737129,layer:2829389,grid:9409016,bot:15000807,eye:592139,mtn:5002086,snow:14146790,needle:12830674,cloud:11450054,tree:4157008,trunk:7033665,hemi:.55,sun:.75}},u=["base","lake","bronze","silver","gold","src","ring","plate","bar","anom","layer","bot","eye","snow","needle","cloud","tree","trunk"],h={};u.forEach(H=>{h[H]=er(16777215)}),Object.assign(h.lake,{roughness:.25,metalness:.1}),Object.assign(h.gold,{roughness:.55,metalness:.25}),h.tree.flatShading=!0,h.snow.flatShading=!0,Object.assign(h.cloud,{transparent:!0,opacity:.9,depthWrite:!1}),h.rainier=new ae({vertexColors:!0,flatShading:!0,roughness:.95}),h.fc=new ae({color:16777215,transparent:!0,opacity:.55,roughness:.6}),h.band=new ae({color:16777215,transparent:!0,opacity:.16,roughness:.6,depthWrite:!1}),h.grid=new un({color:16777215,transparent:!0,opacity:.5}),h.antenna=new ae({color:16777215,emissive:0}),h.shadowBlob=new wn({color:0,transparent:!0,opacity:.12,depthWrite:!1});const d=[],f=(H,k,at,gt,xt)=>(H.traverse(Dt=>{Dt.isMesh&&(Dt.userData.key=k)}),H.userData={key:k,label:at,sub:gt,action:xt},d.push(H),H),g=ln(13,9,.5,.7,h.base);g.position.y=-.55,n.add(g);const x=f(ln(3.4,2.6,.06,.9,h.lake),"lake","The lake(house)","Where it all lands");x.position.set(-4.3,0,2.4),n.add(x);const y=new Ae;for(let H=0;H<3;H++){const k=new Rt(new Be(.42,.42,.3,28),H===1?h.ring:h.src);k.position.y=.15+H*.42,k.castShadow=!0,y.add(k)}const m=new Rt(new ze(.12,16,12),h.antenna);m.position.y=1.42,y.add(m),y.position.set(-5.3,0,-1.4),n.add(f(y,"src","Event streams","Near-real-time ingestion, the Bloom and Entain work","bloom")),[{k:"bronze",x:-2.9,h:.45,l:"Bronze, raw",s:"Landed as-is, replayable"},{k:"silver",x:-.35,h:.85,l:"Silver, cleaned",s:"Deduped and conformed with dbt"},{k:"gold",x:2.2,h:1.25,l:"Gold, curated",s:"Partitioned tables and KPIs"}].forEach(H=>{const k=ln(2.3,2.3,H.h,.25,h[H.k]);k.position.set(H.x,0,-1.4),n.add(f(k,H.k,H.l,H.s,"p990"))});const p=ln(2,1.6,.1,.2,h.layer);p.position.set(-.7,0,2.35),n.add(f(p,"layer","KPI semantic layer","What the agent queries instead of raw tables","msft"));const b=[];for(let H=0;H<=4;H++){const k=-1.6+H*.45;b.push(k,.2,1.65,k,.2,3.05)}for(let H=0;H<=3;H++){const k=1.7+H*.45;b.push(-1.6,.2,k,.2,.2,k)}const E=new Bt;E.setAttribute("position",new Pt(b,3)),n.add(new rr(E,h.grid));const T=new Ae;T.add(ln(4,1.4,.12,.2,h.plate));let _=null;[52,55,58,54,57,40,60,62,63,64,66,65].forEach((H,k)=>{const at=.35+(H-36)/30*1.5,gt=-1.65+k*.3,xt=new Rt(new Ue(.2,at,.2),k===5?h.anom:k<8?h.bar:h.fc);if(xt.position.set(gt,.17+at/2,0),xt.castShadow=!0,T.add(xt),k>=8){const Dt=k-7,v=new Rt(new Ue(.24,at+.18*Dt+.2*Dt,.24),h.band);v.position.set(gt,.17+at/2,0),T.add(v)}k===5&&(_=xt)}),T.position.set(3.1,0,2.4),n.add(f(T,"chart","Forecast, 12 months","Actuals solid, forecast translucent with 80/95% bands","msft")),f(_,"anom","Anomaly, 3.1σ low","Flagged and sent to the agent for a root-cause draft","msft");const C=new Ae,D=new Rt(new ze(.34,28,20),h.bot);D.scale.set(1.15,.95,1),D.castShadow=!0,C.add(D),[-.12,.12].forEach(H=>{const k=new Rt(new ze(.055,12,10),h.eye);k.position.set(H,.04,.31),C.add(k)});const N=new Rt(new Be(.018,.018,.22,8),h.eye);N.position.y=.4,C.add(N);const B=new Rt(new ze(.07,12,10),h.antenna);B.position.y=.53,C.add(B);const O=new Rt(new Oa(.36,24),h.shadowBlob);O.rotation.x=-Math.PI/2,O.position.set(-.7,.22,2.35),n.add(O),C.position.set(-.7,1.15,2.35),n.add(f(C,"bot","KPI agent","An LLM agent that answers questions through the semantic layer","msft"));const F=3.45,A=[[.2,.17,.3],[.95,.2,.26],[1.7,.15,.34],[2.45,.18,.24],[3.2,.2,.32],[3.9,.16,.28],[4.6,.19,.3],[5.3,.17,.25],[5.9,.15,.22]],P=(H,k)=>{const at=Math.abs(H-k)%(Math.PI*2);return at>Math.PI?Math.PI*2-at:at},I=H=>A.reduce((k,[at,gt])=>Math.max(k,Math.exp(-Math.pow(P(H,at)/gt,2))),0),R=H=>A.reduce((k,[at,gt,xt])=>k-xt*Math.exp(-Math.pow(P(H,at)/gt,2)),.58),Y=new Be(.34,1.6,F,48,22);Y.translate(0,F/2,0);{const H=Y.attributes.position;for(let k=0;k<H.count;k++){const at=H.getX(k),gt=H.getZ(k),xt=Math.min(1,H.getY(k)/F);if(Math.hypot(at,gt)<1e-6){xt>.5&&H.setY(k,F-.07);continue}const Dt=Math.atan2(gt,at),v=1+(.1*(1-I(Dt))+.05*Math.sin(3*Dt+.8))*(1-xt*.6),G=(.34+1.26*Math.pow(1-xt,1.5))*v;H.setXYZ(k,Math.cos(Dt)*G,H.getY(k)+Math.sin(4*Dt+xt*9)*.04*(1-xt),Math.sin(Dt)*G)}Y.computeVertexNormals()}const it=new Pt(new Float32Array(Y.attributes.position.count*3),3);Y.setAttribute("color",it);const Q=new dt,ot=new dt,et=H=>{const k=Y.attributes.position;for(let at=0;at<k.count;at++){const gt=Math.min(1,k.getY(at)/F),xt=Math.atan2(k.getZ(at),k.getX(at));gt>=R(xt)?ot.setHex(H.snow):ot.setHex(H.mtn).multiplyScalar(.8).lerp(Q.setHex(H.snow),gt*.15),it.setXYZ(at,ot.r,ot.g,ot.b)}it.needsUpdate=!0},pt=new Rt(Y,h.rainier);pt.castShadow=!0,pt.receiveShadow=!0,pt.position.set(4.9,0,-2.9),[[.9,.2,.2,.07],[-.9,.16,.18,.04],[2.5,.2,.17,.035]].forEach(([H,k,at,gt])=>{const xt=new Rt(new ze(at,8,6),h.snow);xt.scale.y=.6,xt.position.set(Math.cos(H)*k,F+gt-.04,Math.sin(H)*k),xt.castShadow=!0,pt.add(xt)}),n.add(f(pt,"rainier","Mt. Rainier","Sets the mood of the day just by showing up","off"));const wt=[{r:1.15,y:1.05,s:1.15,sp:.12,a:.4},{r:.95,y:1.65,s:1,sp:-.1,a:2.5},{r:.78,y:2.25,s:.85,sp:.09,a:4.5}].map(H=>{const k=new Ae;return[[0,0,0,.34],[.36,-.03,.06,.26],[-.34,-.04,-.05,.25],[.12,.08,-.12,.24],[.66,-.07,0,.17],[-.62,-.07,.04,.16]].forEach(([at,gt,xt,Dt])=>{const v=new Rt(new ad(Dt,2),h.cloud);v.position.set(at,gt,xt),k.add(v)}),k.scale.set(H.s*1.3,H.s*.6,H.s),k.userData=H,n.add(k),k}),W=new Ae,kt=2.5/605,Lt=(H,k,at)=>{const gt=new Rt(H,k);return gt.position.y=at||0,gt.castShadow=!0,W.add(gt),gt},Mt=373*kt;for(let H=0;H<3;H++){const k=H*Math.PI*2/3+Math.PI/6,at=[0,.12,.3,.5,.7,.85,1].map(gt=>{const xt=.05+(51*kt-.05)*Math.pow(1-gt,1.7);return new M(Math.cos(k)*xt,gt*Mt,Math.sin(k)*xt)});Lt(new Zr(new Yn(at),20,.017,6,!1),h.needle)}Lt(new Be(.03,.04,Mt,10),h.needle,Mt/2);const yt=[[.055,Mt-.04],[.07,Mt+.02],[.09,1.7],[.115,1.85],[.13,1.93]].map(([H,k])=>new $(H,k)),Ot=[[.13,1.93],[.22,1.985],[.285,2.03],[.285,2.09],[.25,2.105],[.17,2.135],[.08,2.165],[.02,2.175]].map(([H,k])=>new $(H,k));Lt(new sa(yt,16),h.needle),Lt(new sa(Ot,32),h.needle),Lt(new Be(.288,.288,.05,32,1,!0),h.eye,2.06),Lt(new Be(.292,.292,.016,32),h.gold,2.035),Lt(new Be(.288,.288,.012,32),h.gold,2.092),Lt(new Be(.008,.02,.33,8),h.needle,2.33);const Ct=new Rt(new ze(.04,12,10),h.antenna);Ct.position.y=2.5,W.add(Ct),W.position.set(-5.9,0,-2.6),n.add(f(W,"needle","Space Needle","Seattle, where it all gets built")),[[-5.7,2.9],[-2.2,3.6],[-5.8,.6],[.9,3.75],[5.8,3.6],[5.9,-.4],[3.6,-3.9],[-3.6,-3.6]].forEach((H,k)=>{const at=new Ae,gt=new Rt(new Be(.06,.07,.25,6),h.trunk);gt.position.y=.12,at.add(gt);const xt=.8+k*37%5*.08,Dt=new Rt(new Gu(.3*xt,.75*xt,6),h.tree);Dt.position.y=.25+.375*xt,Dt.castShadow=!0,at.add(Dt),at.position.set(H[0],0,H[1]),n.add(at)});const Ft=new Yn([[-5.3,1.62,-1.4],[-4.5,1.25,-1.4],[-3.8,.62,-1.4],[-2.1,.62,-1.4],[-1.62,1.25,-1.4],[-1.15,1.02,-1.4],[.5,1.02,-1.4],[.95,1.62,-1.4],[1.35,1.42,-1.4],[3.1,1.42,-1.4],[3.7,1.35,-.4],[3.45,.9,.95],[3.1,.5,1.75]].map(H=>new M(...H)),!1,"centripetal"),J=36,K=new Ua(new Ue(.12,.12,.12),new ae({roughness:.5}),J);K.castShadow=!0,n.add(K);const nt=new qt;let ft={};const lt=H=>H<.3?ft.bronze:H<.55?ft.silver:H<.8?ft.gold:ft.fc;let S=0,w=0;const q=()=>{const H=tr(),k=H?c.dark:c.light;u.forEach(at=>h[at].color.setHex(k[at])),et(k),h.fc.color.setHex(k.fc),h.band.color.setHex(k.fc),h.grid.color.setHex(k.grid),h.cloud.emissive.setHex(k.cloud),h.cloud.emissiveIntensity=H?.22:.18,h.antenna.color.setHex(k.ring),h.antenna.emissive.setHex(k.ring),h.antenna.emissiveIntensity=.35,h.shadowBlob.opacity=H?.35:.12,o.intensity=k.hemi,l.intensity=k.sun,o.groundColor.setHex(H?2237484:9080732),ft={bronze:new dt(k.bronze),silver:new dt(k.silver),gold:new dt(k.gold),fc:new dt(k.fc)},Re()};ls(q);const X=ee("tip3d"),rt=ee("bubble"),ut=new uf,It=new $,vt=new Map;let L=null;function tt(H){L!==H&&(L&&L.traverse(k=>{k.isMesh&&vt.has(k)&&(k.material!==vt.get(k)&&k.material.dispose(),k.material=vt.get(k))}),L=H,H&&H.traverse(k=>{if(k.isMesh&&k.material?.isMeshStandardMaterial){vt.has(k)||vt.set(k,k.material);const at=k.material.clone();at.emissive=new dt(tr()?2763322:2368570),at.emissiveIntensity=1,k.material=at}}),Re())}const st=H=>{for(;H&&!H.userData?.label;)H=H.parent;return H};function mt(H,k,at){if(!H){X.classList.remove("on");return}X.innerHTML=`<b>${H.userData.label}</b><span>${H.userData.sub}</span>`,X.classList.add("on");const gt=X.offsetWidth,xt=X.offsetHeight;X.style.transform=`translate(${Math.round(Math.min(S-gt-8,Math.max(8,k+14)))}px,${Math.round(Math.max(8,at-xt-12))}px)`}const Z=(H,k)=>{if(!H?.userData.action)return;const at=H.userData.action;at==="off"?yf("off"):ee(`role-${at}`)?document.dispatchEvent(new CustomEvent("portfolio:show-role",{detail:at})):_f(at,k)};s.addEventListener("pointermove",H=>{if(H.pointerType!=="mouse"||s.classList.contains("drag"))return;const k=s.getBoundingClientRect(),at=H.clientX-k.left,gt=H.clientY-k.top;It.set(at/S*2-1,-(gt/w)*2+1),ut.setFromCamera(It,i);const xt=ut.intersectObjects(d,!0),Dt=xt.length?st(xt[0].object):null;tt(Dt),mt(Dt,at,gt),s.style.cursor=Dt?.userData.action?"pointer":""}),s.addEventListener("pointerleave",()=>{tt(null),mt(null)}),s.addEventListener("click",()=>{if(a.lastDragMoved){a.lastDragMoved=!1;return}Z(L,s)});const St=H=>H==="anom"?_:d.find(k=>k.userData.key===H);document.querySelectorAll("#legend .lg").forEach(H=>{const k=H.dataset.key,at=()=>{const xt=St(k);if(!xt)return;tt(xt);const Dt=new M;xt.getWorldPosition(Dt),Dt.y+=1,Dt.project(i),mt(xt,(Dt.x+1)/2*S,(1-Dt.y)/2*w),H.setAttribute("aria-pressed","true")},gt=()=>{tt(null),mt(null),H.setAttribute("aria-pressed","false")};H.addEventListener("mouseenter",at),H.addEventListener("focus",at),H.addEventListener("mouseleave",gt),H.addEventListener("blur",gt),H.addEventListener("click",()=>Z(St(k),H))});const zt=["Next 12 months of forecast are in.","February came in 3.1σ low. Flagging it.","Pulling context from the KPI layer...","Root-cause draft is ready for review."];let Qt=0;rt.textContent=zt[0];let de=!yn;yn||setInterval(()=>{de&&(rt.classList.add("fade"),setTimeout(()=>{Qt=(Qt+1)%zt.length,rt.textContent=zt[Qt],rt.classList.remove("fade")},260))},3600);const Vt=new M,we=()=>{Vt.set(C.position.x,C.position.y+.62,C.position.z).project(i);const H=Math.min(S-rt.offsetWidth-8,Math.max(8,(Vt.x+1)/2*S+6));rt.style.transform=`translate(${Math.round(H)}px,${Math.round((1-Vt.y)/2*w-rt.offsetHeight)}px)`};let jt=0;function mn(H){jt+=H,!yn&&performance.now()-a.interact>2600&&(a.taz+=Math.sin(jt*.25)*9e-4),a.az+=(a.taz-a.az)*.12,a.el+=(a.tel-a.el)*.12;for(let gt=0;gt<J;gt++){const xt=(gt/J+jt*.045)%1,Dt=xt<.03?xt/.03:xt>.95?(1-xt)/.05:1;nt.position.copy(Ft.getPointAt(xt)),nt.rotation.set(jt*1.3+gt,jt+gt*.5,0),nt.scale.setScalar(Math.max(.001,Dt)),nt.updateMatrix(),K.setMatrixAt(gt,nt.matrix),K.setColorAt(gt,lt(xt))}K.instanceMatrix.needsUpdate=!0,K.instanceColor&&(K.instanceColor.needsUpdate=!0);const k=.5+.5*Math.sin(jt*4);_.scale.x=_.scale.z=1+k*.25;const at=Math.sin(jt*2)*.08;C.position.y=1.15+at,C.rotation.y=a.az-.35+Math.sin(jt*.7)*.25,O.scale.setScalar(1-at*.8),B.scale.setScalar(1+k*.3),m.scale.setScalar(1+.3*Math.sin(jt*6)),Ct.scale.setScalar(1+.3*Math.sin(jt*3+1)),wt.forEach((gt,xt)=>{const Dt=gt.userData,v=Dt.a+jt*Dt.sp;gt.position.set(pt.position.x+Math.cos(v)*Dt.r,Dt.y+Math.sin(jt*.8+xt*2)*.06,pt.position.z+Math.sin(v)*Dt.r)})}function Re(){S&&(hs(i,a,r),e.render(n,i),we())}function Xe(){const H=s.getBoundingClientRect();H.width<10||(S=H.width,w=H.height,e.setSize(S,w,!1),us(i,S,w,9.7,16.2),Re())}const ne=fs(s,{update:mn,render:Re,isRunning:()=>de});ds(s,a,()=>{ne.active()||(a.az=a.taz,a.el=a.tel,Re())},{minEl:.22,maxEl:1});const Pe=ee("pause3d"),Qe=()=>{Pe.textContent=de?"Pause":"Play",Pe.setAttribute("aria-pressed",String(!de))};Pe.addEventListener("click",()=>{de=!de,Qe(),ne.sync()}),Qe(),ee("reset3d").addEventListener("click",()=>{a.taz=.72,a.tel=.52,ne.active()||(a.az=a.taz,a.el=a.tel,Re())}),t.addEventListener("webglcontextlost",H=>H.preventDefault()),t.addEventListener("webglcontextrestored",()=>{q(),ne.sync()}),q(),mn(0),Xe(),new ResizeObserver(Xe).observe(s),ne.sync()}function bf(){const s=ee("xp-stage"),t=cs(ee("c3d-xp"));if(!t)return;const e=new _n,n=new Mi(-3,3,3,-3,.1,100),i=new M(0,1.15,0),r={az:.78,el:.5,taz:.78,tel:.5,interact:0},a=new vi(16777215,9080732,.85);e.add(a);const o=new _i(16777215,.8);o.position.set(-4,10,6),o.castShadow=!0,o.shadow.mapSize.set(512,512),Object.assign(o.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:1,far:30}),e.add(o);const l=["entain","bloom","p990","msft"],c=[],u=l.map((O,F)=>{const A=er(16777215);c.push(A);const P=ln(2.5,2.5,.24,.34,A);return P.userData={k:O,base:F*.7,lift:0},P.position.y=F*.7,e.add(P),P}),h=er(16777215),d=new Rt(new Be(.03,.03,2.6,10),h);d.position.y=1.25,e.add(d);const f=new ae({color:16777215,emissive:0}),g=Array.from({length:9},(O,F)=>{const A=new Rt(new ze(.05,10,8),f);return e.add(A),{m:A,o:F/9}}),x=new wn({color:0,transparent:!0,opacity:.08,depthWrite:!1}),y=new Rt(new Oa(2.3,40),x);y.rotation.x=-Math.PI/2,y.position.y=-.03,e.add(y);let m="msft",p=0,b=0;const E=()=>{const O=tr(),F=O?[2763571,3158331,3618885,4079438]:[15000807,14474466,13816539,13158611],A=O?9409016:5987286;u.forEach((P,I)=>{const R=P.userData.k===m;c[I].color.setHex(R?A:F[I]),c[I].emissive.setHex(R?O?1776704:1710672:0)}),h.color.setHex(O?5395035:10592682),f.color.setHex(A),f.emissive.setHex(A),f.emissiveIntensity=.45,x.opacity=O?.3:.08,a.intensity=O?.6:.85,C()};ls(E);let T=0;function _(O){T+=O,!yn&&performance.now()-r.interact>2600&&(r.taz+=O*.18),r.az+=(r.taz-r.az)*.12,r.el+=(r.tel-r.el)*.12,u.forEach(F=>{const A=F.userData.base+F.userData.lift;F.position.y+=(A-F.position.y)*.14}),g.forEach(F=>{F.m.position.y=(T*.22+F.o)%1*2.5})}function C(){p&&(hs(n,r,i),t.render(e,n))}function D(){const O=s.getBoundingClientRect();O.width<10||(p=O.width,b=O.height,t.setSize(p,b,!1),us(n,p,b,4.3,4.7),C())}const N=fs(s,{update:_,render:C,margin:"80px"}),B=O=>{m=O,u.forEach(F=>{F.userData.lift=F.userData.k===O?.3:0}),E(),N.active()||(u.forEach(F=>{F.position.y=F.userData.base+F.userData.lift}),C())};document.addEventListener("portfolio:xp",O=>B(O.detail)),ds(s,r,()=>{N.active()||(r.az=r.taz,r.el=r.tel,C())},{minEl:.2,maxEl:1.1}),B("msft"),_(0),D(),new ResizeObserver(D).observe(s),N.sync()}function Sf(){const s=ee("stage"),t=cs(ee("c3d2"));if(!t)return;const e=ee("hud"),n=ee("hud-ctl"),i=new Mi(-6,6,3,-3,.1,200),r={az:.6,el:.62,taz:.6,tel:.62,interact:0},a=new dt,o=er(14935788),l=U=>{const j=new vi(16777215,9080732,.8);U.add(j);const bt=new _i(16777215,.8);return bt.position.set(-5,12,6),bt.castShadow=!0,bt.shadow.mapSize.set(1024,1024),Object.assign(bt.shadow.camera,{left:-8,right:8,top:8,bottom:-8}),U.add(bt),{h:j,d:bt}},c=new _n,u=l(c),h=(U,j)=>1.5*Math.exp(-((U-.6)**2+(j+.5)**2)/4.2)+.32*Math.sin(1.3*U+.7)*Math.cos(1.1*j)+.14*Math.sin(3.1*U)*Math.sin(2.7*j+1)+.05*Math.sin(7*U+2*j),d=new wa(8,8,72,72);d.rotateX(-Math.PI/2);const f=d.attributes.position,g=[],x=new dt(6263920),y=new dt(9211770),m=new dt(15921906);for(let U=0;U<f.count;U++){const j=h(f.getX(U),f.getZ(U));f.setY(U,j);const bt=Math.max(0,Math.min(1,(j+.3)/1.9));bt<.55?a.copy(x).lerp(y,bt/.55):a.copy(y).lerp(m,(bt-.55)/.45),g.push(a.r,a.g,a.b)}d.setAttribute("color",new Pt(g,3)),d.computeVertexNormals();const p=new Rt(d,new ae({vertexColors:!0,flatShading:!0,roughness:.95}));p.receiveShadow=!0,p.castShadow=!0,c.add(p);const b=ln(8.1,8.1,.35,.3,o);b.position.y=-.75,c.add(b);const E=[];for(let U=0;U<=60;U++){const j=U/60,bt=-3.2+3.9*j+.55*Math.sin(j*7),Nt=3.1-3.7*j+.45*Math.cos(j*6);E.push(new M(bt,h(bt,Nt)+.07,Nt))}const T=new Yn(E),_=new Rt(new Zr(T,240,.045,8,!1),new ae({color:16739133,roughness:.4,emissive:5904896,emissiveIntensity:.4}));_.castShadow=!0,c.add(_);const C=new Rt(new ze(.11,16,12),new ae({color:16777215}));C.castShadow=!0,c.add(C);const D=8.4,N=U=>Math.round(180+(U+.3)/1.9*1100),B=Array.from({length:81},(U,j)=>N(T.getPointAt(j/80).y-.07)),O=Math.min(...B),F=Math.max(...B),A=[0];for(let U=1;U<B.length;U++)A.push(A[U-1]+Math.max(0,B[U]-B[U-1]));const P=U=>U/80*176+2,I=U=>32-(U-O)/(F-O||1)*28,R=B.map((U,j)=>`${j?"L":"M"}${P(j).toFixed(1)},${I(U).toFixed(1)}`).join(" "),Y=new _n,it=l(Y),Q=ln(9.2,6.2,.25,.5,o);Q.position.y=-.3,Q.receiveShadow=!0,Y.add(Q);const ot=new Yn([[-3.6,1.6],[-1.2,2.2],[.6,1.4],[1.6,2.3],[3.4,2.1],[3.9,.4],[2.6,-.6],[3.3,-2],[1.4,-2.4],[-.4,-1.2],[-2.2,-2.3],[-3.8,-1.4],[-4,.2]].map(U=>new M(U[0],.02,U[1])),!0,"centripetal"),et=420,pt=.13,wt=Array.from({length:et},(U,j)=>ot.getTangentAt(j/et)),W=wt.map((U,j)=>wt[(j-6+et)%et].angleTo(wt[(j+6)%et])),kt=W.map((U,j)=>{let bt=0;for(let Nt=-10;Nt<=10;Nt++)bt+=W[(j+Nt+et)%et];return bt/21}),Lt=Math.min(...kt),Mt=Math.max(...kt),yt=kt.map(U=>Math.pow(1-(U-Lt)/(Mt-Lt||1),1.6)),Ot=new dt(15026253),Ct=new dt(16098596),Ft=new dt(5987286),J=[],K=[],nt=[];for(let U=0;U<et;U++){const j=ot.getPointAt(U/et),bt=wt[U],Nt=-bt.z,oe=bt.x;J.push(j.x+Nt*pt,.06,j.z+oe*pt,j.x-Nt*pt,.06,j.z-oe*pt);const Kt=yt[U];Kt<.5?a.copy(Ot).lerp(Ct,Kt/.5):a.copy(Ct).lerp(Ft,(Kt-.5)/.5),K.push(a.r,a.g,a.b,a.r,a.g,a.b);const be=U*2,Jt=(U+1)%et*2;nt.push(be,Jt,be+1,be+1,Jt,Jt+1)}const ft=new Bt;ft.setAttribute("position",new Pt(J,3)),ft.setAttribute("color",new Pt(K,3)),ft.setIndex(nt),ft.computeVertexNormals(),Y.add(new Rt(ft,new wn({vertexColors:!0,side:2})));const lt=new Rt(new Zr(ot,420,.2,4,!0),new ae({color:2763569,roughness:.9}));lt.scale.y=.08,lt.position.y=.03,lt.receiveShadow=!0,Y.add(lt);const S=ot.getPointAt(0),w=new Rt(new Ue(.06,.02,.46),new ae({color:16777215}));w.position.set(S.x,.08,S.z),w.rotation.y=Math.atan2(wt[0].x,wt[0].z)+Math.PI/2,Y.add(w);const q=new Ae,X=new Rt(new Ue(.42,.09,.16),new ae({color:16053493,roughness:.4}));X.position.y=.12,X.castShadow=!0,q.add(X);const rt=new Rt(new Ue(.06,.05,.24),new ae({color:1579035}));rt.position.set(-.2,.18,0),q.add(rt),Y.add(q);const ut=new _n,It={h:new vi(8952319,657938,.35)};ut.add(It.h),It.d=new _i(16777215,1.15),It.d.position.set(-8,3,6),ut.add(It.d);const vt=new ze(1.5,64,40),L=vt.attributes.position,tt=[],st=new dt(2973594),mt=new dt(5212763),Z=new dt(12098410),St=new dt(15593461);for(let U=0;U<L.count;U++){const j=L.getX(U)/1.5,bt=L.getY(U)/1.5,Nt=L.getZ(U)/1.5,oe=Math.sin(3.1*j+1.7*bt)*Math.cos(2.3*Nt-.6)+.55*Math.sin(5.7*bt+2.2*Nt)+.3*Math.sin(9.1*j-4.3*Nt);Math.abs(bt)>.86?a.copy(St):oe>.45?a.copy(mt).lerp(Z,Math.max(0,Math.min(1,(oe-.9)*1.5))):a.copy(st).lerp(new dt(3897528),Math.max(0,oe+.3)*.5),tt.push(a.r,a.g,a.b)}vt.setAttribute("color",new Pt(tt,3));const zt=new Rt(vt,new ae({vertexColors:!0,roughness:.8}));zt.rotation.z=.41,ut.add(zt);const Qt=new Rt(new ze(1.6,48,32),new wn({color:9409016,transparent:!0,opacity:.12,side:1}));ut.add(Qt);const de=new Rt(new ze(.3,24,16),new ae({color:13224399,roughness:1,flatShading:!0}));ut.add(de);const Vt=new Ae;Vt.add(new Rt(new Ue(.2,.12,.12),new ae({color:16053493,metalness:.3,roughness:.4}))),[-1,1].forEach(U=>{const j=new Rt(new Ue(.03,.015,.46),new ae({color:5987286,metalness:.2,roughness:.3,emissive:1381706}));j.position.z=U*.3,Vt.add(j)}),ut.add(Vt);const we=51.6*Math.PI/180,jt=2.15,mn=(U,j)=>{const bt=Math.cos(U)*jt,Nt=Math.sin(U)*jt;return j.set(bt,Nt*Math.sin(we),Nt*Math.cos(we))},Re=Array.from({length:129},(U,j)=>mn(j/128*Math.PI*2,new M));ut.add(new pi(new Bt().setFromPoints(Re),new un({color:9409016,transparent:!0,opacity:.35})));const Xe=60,ne=new Float32Array(Xe*3),Pe=new Bt;Pe.setAttribute("position",new ce(ne,3)),ut.add(new pi(Pe,new un({color:16739151})));const Qe=[];for(let U=0;U<500;U++){const j=Math.random()*2-1,bt=Math.random()*Math.PI*2,Nt=16+Math.random()*6,oe=Math.sqrt(1-j*j);Qe.push(Nt*oe*Math.cos(bt),Nt*j,Nt*oe*Math.sin(bt))}const H=new Bt;H.setAttribute("position",new Pt(Qe,3)),ut.add(new Ga(H,new Kr({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.8})));const k={trail:{sc:c,target:new M(0,.4,0),minH:8.4,minW:12.4,fig:"Fig. 2, placeholder terrain"},lap:{sc:Y,target:new M(0,.4,0),minH:6.8,minW:11.8,fig:"Fig. 3, placeholder circuit"},orbit:{sc:ut,target:new M(0,0,0),minH:6.6,minW:8.6,fig:"Fig. 4, illustrative orbit"}};let at="trail",gt=0,xt=0,Dt=0;const v={golden:!1,drs:!1,lapU:0,lapT:0,best:null,last:null,warp:1,satA:0,orbits:0,simMin:0,trailFill:0},G=(U,j,bt)=>`<span class="hud-k">${U}<b id="${bt}">${j}</b></span>`,z=(U,j,bt)=>`<button type="button" id="${U}" aria-pressed="${bt}">${j}</button>`,V=U=>U==null?"--":`${Math.floor(U/60)}:${(U%60).toFixed(1).padStart(4,"0")}`;function ct(){s.classList.toggle("space",at==="orbit"),at==="trail"?(e.innerHTML=`<div class="hud-row">${G("dist","0.0 km","h-dist")}${G("elev","-- m","h-elev")}${G("gain","+0 m","h-gain")}</div>
        <div class="hud-prof"><svg viewBox="0 0 180 34" aria-hidden="true"><path class="pa" d="${R} L178,34 L2,34 Z"/><path class="pl" d="${R}"/><circle class="pd" id="h-dot" r="3" cx="2" cy="${I(B[0]).toFixed(1)}"/></svg></div>`,n.innerHTML=z("c-golden","Golden hour",v.golden),ee("c-golden").addEventListener("click",U=>{v.golden=!v.golden,U.currentTarget.setAttribute("aria-pressed",String(v.golden)),Ut(),Wt()})):at==="lap"?(e.innerHTML=`<div class="hud-row">${G("speed","-- km/h","h-spd")}${G("lap","0:00.0","h-lap")}${G("last",V(v.last),"h-last")}${G("best",V(v.best),"h-best")}</div>`,n.innerHTML=z("c-drs","DRS",v.drs)+z("c-reset","Reset lap",!1),ee("c-drs").addEventListener("click",U=>{v.drs=!v.drs,U.currentTarget.setAttribute("aria-pressed",String(v.drs))}),ee("c-reset").addEventListener("click",()=>{v.lapU=0,v.lapT=0,Wt()})):(e.innerHTML=`<div class="hud-row">${G("period","~92 min","h-per")}${G("orbits","0","h-orb")}${G("T+","0 min","h-t")}${G("incl.","51.6°","h-inc")}</div>`,n.innerHTML=[1,10,60].map(U=>z(`c-w${U}`,`${U}×`,v.warp===U)).join(""),[1,10,60].forEach(U=>ee(`c-w${U}`).addEventListener("click",()=>{v.warp=U,[1,10,60].forEach(j=>ee(`c-w${j}`).setAttribute("aria-pressed",String(j===U)))})))}function Ut(){const U=tr();[u,it].forEach(j=>{j.h.intensity=U?.55:.8,j.h.groundColor.setHex(U?2237484:9080732)}),v.golden?(u.d.color.setHex(16757611),u.d.intensity=1.05,u.d.position.set(-9,3.5,4),u.h.color.setHex(16767408),u.h.intensity=U?.45:.6):(u.d.color.setHex(16777215),u.d.intensity=.8,u.d.position.set(-5,12,6),u.h.color.setHex(16777215)),o.color.setHex(U?1908519:14935788)}ls(()=>{Ut(),Wt()});const _t=(U,j)=>{const bt=ee(U);bt&&bt.textContent!==j&&(bt.textContent=j)};function At(U){Dt+=U,!yn&&performance.now()-r.interact>2600&&(r.taz+=U*(at==="orbit"?.06:.12)),r.az+=(r.taz-r.az)*.12,r.el+=(r.tel-r.el)*.12;const j=Dt*.06%1,bt=T.getPointAt(j);C.position.set(bt.x,bt.y+.08,bt.z);const Nt=Math.floor(v.lapU*et)%et,oe=yt[Nt]>.7,Kt=(85+245*yt[Nt])*(v.drs&&oe?1.12:1),be=v.lapU;v.lapU=(v.lapU+U*(Kt/330)*.105)%1,v.lapT+=U*6.5,v.lapU<be&&(v.last=v.lapT,v.best=v.best==null?v.lapT:Math.min(v.best,v.lapT),v.lapT=0,at==="lap"&&(_t("h-last",V(v.last)),_t("h-best",V(v.best)),ee("hud").classList.add("flash"),setTimeout(()=>ee("hud")?.classList.remove("flash"),600)));const Jt=ot.getPointAt(v.lapU),Tn=ot.getTangentAt(v.lapU);if(q.position.set(Jt.x,0,Jt.z),q.rotation.y=Math.atan2(-Tn.z,Tn.x),at==="orbit"){const $t=U*(Math.PI*2/24)*v.warp;v.satA+=$t,v.simMin+=$t/(Math.PI*2)*92,v.satA>=Math.PI*2&&(v.satA-=Math.PI*2,v.orbits++),mn(v.satA,Vt.position),Vt.lookAt(0,0,0),zt.rotation.y+=U*.02*v.warp;const ge=Dt*.05;de.position.set(Math.cos(ge)*4.6,.6,Math.sin(ge)*4.6);for(let Ge=Xe-1;Ge>0;Ge--)ne[Ge*3]=ne[(Ge-1)*3],ne[Ge*3+1]=ne[(Ge-1)*3+1],ne[Ge*3+2]=ne[(Ge-1)*3+2];ne[0]=Vt.position.x,ne[1]=Vt.position.y,ne[2]=Vt.position.z,v.trailFill=Math.min(Xe,v.trailFill+1),Pe.setDrawRange(0,v.trailFill),Pe.attributes.position.needsUpdate=!0}if(at==="trail"){const $t=Math.min(80,Math.round(j*80));_t("h-dist",`${(j*D).toFixed(1)} km`),_t("h-elev",`${B[$t]} m`),_t("h-gain",`+${Math.round(A[$t])} m`);const ge=ee("h-dot");ge&&(ge.setAttribute("cx",P($t).toFixed(1)),ge.setAttribute("cy",I(B[$t]).toFixed(1)))}else if(at==="lap")_t("h-spd",`${Math.round(Kt)} km/h`),_t("h-lap",V(v.lapT));else{_t("h-orb",String(v.orbits));const $t=Math.floor(v.simMin);_t("h-t",$t>=60?`${Math.floor($t/60)} h ${$t%60} m`:`${$t} min`)}}function Wt(){gt&&(hs(i,r,k[at].target),t.render(k[at].sc,i))}function Tt(){const U=s.getBoundingClientRect();U.width<10||(gt=U.width,xt=U.height,t.setSize(gt,xt,!1),us(i,gt,xt,k[at].minH,k[at].minW),Wt())}const Ht=fs(s,{update:At,render:Wt,margin:"100px"});ds(s,r,()=>{Ht.active()||(r.az=r.taz,r.el=r.tel,Wt())},{minEl:.15,maxEl:1.1}),document.querySelectorAll("#off .seg button").forEach(U=>U.addEventListener("click",()=>{at=U.dataset.scene,document.querySelectorAll("#off .seg button").forEach(j=>j.setAttribute("aria-pressed",String(j===U))),ee("stage-fig").textContent=k[at].fig,at==="orbit"?(r.tel=.35,v.trailFill=0):r.tel<.4&&(r.tel=.62),ct(),At(0),Tt()})),Ut(),ct(),At(0),Tt(),new ResizeObserver(Tt).observe(s),Ht.sync()}function Ef(){Mf(),bf(),Sf()}export{Ef as init};
