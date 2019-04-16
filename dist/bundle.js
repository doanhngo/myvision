!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=fabric},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o);function r(e){e.__eventListeners&&(e.__eventListeners["mouse:down"]=[],e.__eventListeners["mouse:over"]=[],e.__eventListeners["mouse:out"]=[],e.__eventListeners["mouse:move"]=[],e.__eventListeners["mouse:up"]=[],e.__eventListeners["object:moving"]=[])}const a={};function l(e,t){return{left:e.origX,top:e.origY,width:t.x-e.origX,height:t.y-e.origY,stroke:"rgba(255,0,0)",strokeWidth:2,fill:"rgba(255,0,0,0)",shapeName:"bndBoxTemp"}}function s(e,t){const n=document.getElementById("labelNamePopUp");n.style.display="block";const o=document.getElementById("canvas-wrapper").getBoundingClientRect(),i=o.top,r=o.left;n.style.top=`${t+i}px`,n.style.left=`${e+r}px`}function c(){document.getElementById("labelNamePopUp").style.display="none"}a.tempBndBoxProps=l,a.finalBndBoxProps={fill:"rgba(255,0,0,0)",shapeName:"bndBox",objectCaching:!1,selectable:!1};const u={};function f(e,t){return{radius:3.5,fill:"#ffffff",stroke:"#333333",strokeWidth:.5,left:t.x,top:t.y,selectable:!0,hasBorders:!1,hasControls:!1,originX:"center",originY:"center",shapeName:"tempPoint",pointId:e,objectCaching:!1}}function d(e){return{radius:3.5,fill:"#ffffff",stroke:"#333333",strokeWidth:.5,selectable:!0,shapeName:"tempPoint",pointId:e,lockMovementX:!1,lockMovementY:!1}}function g(e,t){return{radius:3.5,fill:"blue",stroke:"#333333",strokeWidth:.5,left:t.x,top:t.y,selectable:!0,hasBorders:!1,hasControls:!1,originX:"center",originY:"center",shapeName:"point",objectCaching:!1,pointId:e,perPixelTargetFind:!0}}function h(e,t){const n={radius:4,fill:"red",stroke:"#333333",strokeWidth:.5,selectable:!0,hasBorders:!1,hasControls:!1,originX:"center",originY:"center",shapeName:"point",objectCaching:!1,pointId:e,perPixelTargetFind:!0,lockMovementX:!0,lockMovementY:!0};return t&&(n.left=t.x,n.top=t.y),n}function p(e,t){const n={radius:4,fill:"green",stroke:"#333333",strokeWidth:.5,selectable:!0,hasBorders:!1,hasControls:!1,originX:"center",originY:"center",shapeName:"point",objectCaching:!1,pointId:e,perPixelTargetFind:!0,lockMovementX:!0,lockMovementY:!0};return t&&(n.left=t.x,n.top=t.y),n}u.newPolygon={stroke:"rgba(255,0,0)",strokeWidth:1.75,fill:"rgba(237, 237, 237, 0.01)",perPixelTargetFind:!0,hasBorders:!1,hasControls:!1,shapeName:"polygon",selectable:!1,evented:!0,objectCaching:!1,numberOfNullPolygonPoints:0},u.newTempPolygon={stroke:"#333333",strokeWidth:.8,fill:"#cccccc",opacity:.3,selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1,numberOfNullPolygonPoints:-3},u.newLine={strokeWidth:1.1,fill:"#999999",stroke:"#999999",class:"line",originX:"center",originY:"center",selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1},u.firstPoint={fill:"red",shapeName:"firstPoint",lockMovementX:!0,lockMovementY:!0},u.removablePoint={fill:"red",radius:4},u.defaultPoint={fill:"blue",radius:3.5},u.additionalPoint={fill:"green",radius:4},u.disabledButton={fill:"white",radius:3},u.newPoint=f,u.changeRemovablePointToTemp=d,u.existingPolygonPoint=g,u.removablePolygonPoint=h,u.initialAddPolygonPoint=p;let m=null,b=[],v=null,y=null;function w(e,t,n,o){!function(e,t,n,o){m=e,b=t,v=n,y=o}(e,t,n,o);const r=function(){const e=new i.a.Polygon([],y.newPolygon);return e.set({id:m.id,selectable:!0}),e}();v.add(r);const a=function(e){let t=0;const n=[];return e.forEach(e=>{const o=new i.a.Circle(y.existingPolygonPoint(t,e));v.add(o),b.push(o),n.push({x:o.left-1,y:o.top-1}),t+=1}),n}(function(){const e=m.calcTransformMatrix();return m.get("points").map(e=>new i.a.Point(e.x-m.pathOffset.x,e.y-m.pathOffset.y)).map(t=>i.a.util.transformPoint(t,e))}());return v.remove(m),(m=r).set("points",a),function(){const e=m._calcDimensions();m.set({left:e.left,top:e.top,height:e.height,width:e.width,pathOffset:{x:e.left+e.width/2,y:e.top+e.height/2}}),m.setCoords(),v.renderAll()}(),m}function x(e,t,n,o){let r=0;t.get("points").forEach(t=>{const a=new i.a.Circle(o(r,t));e.add(a),n.push(a),r+=1})}let P=null,k=null,N=[],j=!1;function C(){return j}function O(){x(P,k,N,u.initialAddPolygonPoint)}function A(){N=function(e){let t=0;const n=[];return e.forEachObject(e=>{"tempPoint"!==e.shapeName&&"firstPoint"!==e.shapeName||(e.set(u.removablePolygonPoint(t)),n.push(e),t+=1)}),n}(P)}function B(){var e,t;e=P,N=0!==(t=N).length?(t.forEach(t=>{e.remove(t)}),e.renderAll(),[]):t,j=!1}function M(){P.forEachObject(e=>{"bndBox"===e.shapeName?e.selectable=!0:(e.lockMovementX=!1,e.lockMovementY=!1),"point"===e.shapeName&&e.set(u.defaultPoint)})}function _(){k=w(k,N,P,u),j=!0}function E(e,t){P=e,k=t}function X(e){!function(e,t,n,o){if(t.points.length-t.numberOfNullPolygonPoints>3){if(0===Object.keys(t.points[o]).length){for(let e=o-1;e>-1;e-=1)if(0!==Object.keys(t.points[e]).length){t.points[t.points.length-1]=t.points[e],t.points[e]={};break}}else if(t.points.length-1===o){for(let e=o-1;e>-1;e-=1)if(0!==Object.keys(t.points[e]).length){t.points[o]=t.points[e],t.points[e]={};break}}else t.points[o]={};e.remove(n[o]),n[o]=null,t.numberOfNullPolygonPoints+=1,t.points.length-t.numberOfNullPolygonPoints>3&&console.log("need to signal restrictions"),e.renderAll()}}(P,k,N,e)}function Y(){P&&(P.preserveObjectStacking=!1)}function I(){P.preserveObjectStacking=!0}function W(e,t,n,o,i){E(e,t),e.discardActiveObject(),k.bringForward(),i?O():n?o?A():x(P,k,N,u.removablePolygonPoint):x(P,k,N,u.existingPolygonPoint),j=!0}function T(e,t){t?M():e.forEachObject(e=>{e.selectable=!0}),e.defaultCursor="default",e.hoverCursor="move",e.renderAll()}const L={};let R=!1,U=null,S=null,$=0;function H(e,t){U=e,S=t,R=!0}function F(){const e=document.getElementById("label-title").value;T(S),c(),U.set("id",$),$+=1,L[U[U.id]]=e,R=!1}function D(){return R}function z(e,t){e.discardActiveObject(),t||function(e){e.forEachObject(e=>{e.selectable=!1})}(e),e.defaultCursor="crosshair",e.hoverCursor="crosshair",e.renderAll()}let q=null,G=!1,J=!1;const K={};function Q(e){(q=e).backgroundImage&&(G=!0,z(q),q.discardActiveObject()),e.on("mouse:down",()=>{!function(){if(G){J=!0;const e=q.getPointer(q.e);K.origX=e.x,K.origY=e.y,K.rect=new i.a.Rect(a.tempBndBoxProps(K,e)),q.add(K.rect)}}()}),e.on("mouse:move",e=>{!function(e){if(!J)return;const t=q.getPointer(e.e);K.origX>t.x&&K.rect.set({left:Math.abs(t.x)}),K.origY>t.y&&K.rect.set({top:Math.abs(t.y)}),K.rect.set({width:Math.abs(K.origX-t.x)}),K.rect.set({height:Math.abs(K.origY-t.y)}),q.renderAll()}(e)}),e.on("mouse:up",e=>{!function(e){if(J){G=!1,J=!1,K.rect.setCoords(),K.rect.set(a.finalBndBoxProps),T(q);const t=q.getPointer(e.e);H(K.rect,q),s(t.x,t.y)}}(e)})}let V=!1,Z=!1;function ee(){return Z}function te(e){V=e}function ne(e){Z=e}let oe=null,ie=[],re=!0,ae=!1,le=0,se=null;function ce(){oe.remove(ae),ae=null}function ue(){return null!==ae}function fe(e){const t=oe.getPointer(e.e);(function(e){return!(!ae||se.x===e.x)})(t)||(e.target&&e.target.shapeName&&"firstPoint"===e.target.shapeName?function(e){const t=[];ie.forEach(e=>{t.push({x:e.left,y:e.top}),oe.remove(e)}),ce();const n=new i.a.Polygon(t,u.newPolygon);oe.add(n),ae=null,re=!1,H(n,oe),s(e.x,e.y)}(t):re&&function(e){const t=new i.a.Circle(u.newPoint(le,e));le+=1,0===ie.length&&t.set(u.firstPoint);let n=[e.x,e.y,e.x,e.y];if(ae){(n=ae.get("points")).push({x:e.x,y:e.y});const t=new i.a.Polygon(n,u.newTempPolygon);oe.remove(ae),oe.add(t),ae=t,oe.renderAll()}else{const t=[{x:e.x,y:e.y}],n=new i.a.Polygon(t,u.newTempPolygon);ae=n,oe.add(n)}ie.push(t),oe.add(t),oe.selection=!1}(t))}function de(){!function(){const e=ae.get("points"),t=[];e.forEach(e=>{Object.keys(e).length>0&&t.push({x:e.x,y:e.y})}),ae.set({points:t}),oe.renderAll();let n=0;const o=[];oe.forEachObject(e=>{"point"===e.shapeName&&(e.set(u.changeRemovablePointToTemp(n)),0===n&&e.set(u.firstPoint),n+=1,o.push(e))}),ie=o,le=n,oe.renderAll(),t[ie.length]={x:t[0].x,y:t[0].y},ae.set({points:t}),oe.renderAll(),z(oe,!0),oe.renderAll()}()}function ge(e,t){t?de():(re=!0,(oe=e).discardActiveObject(),z(oe)),e.on("mouse:down",e=>{(!e.target||e.target&&"tempPoint"!==e.target.shapeName)&&fe(e)}),e.on("object:moving",e=>{!function(e){if(ae){const t=e.target.getCenterPoint().x,n=e.target.getCenterPoint().y;ae.points[e.target.pointId]={x:t,y:n}}}(e)}),e.on("mouse:move",e=>{!function(e){if(ae){const t=oe.getPointer(e.e);se=t;const n=ae.get("points");n[ie.length]={x:t.x,y:t.y},ae.set({points:n})}oe.renderAll()}(e)}),e.on("mouse:over",t=>{t.target&&t.target.selectable?e.hoverCursor="move":e.hoverCursor="crosshair"})}function he(e){e.getActiveObject()?e.remove(e.getActiveObject()):function(){var e,t;e=P,(t=k)&&e.remove(t)}(),ne(!1)}function pe(e){!function(e){e.forEachObject(e=>{"point"===e.shapeName&&(e.set(u.disabledButton),e.selectable=!1)}),e.renderAll()}(e),e.defaultCursor="default",e.hoverCursor="default"}let me=!1,be=!1,ve=null,ye=!1;function we(e,t){var n,o;ye?(n=t,o=e.target,E(n,o),n.discardActiveObject(),_(),ve=e.target.id):_(),me=!1}function xe(){!function(e,t){const n=t._calcDimensions();t.set({left:n.left,top:n.top,height:n.height,width:n.width,pathOffset:{x:n.left+n.width/2,y:n.top+n.height/2}}),t.setCoords(),e.renderAll()}(P,k),be=!1}function Pe(){B(),ve=null}function ke(e,t){var n;me?we(e,t):ye?function(e,t){C()&&B(),W(t,e.target),ve=e.target.id}(e,t):be?xe():e.target&&"polygon"===e.target.shapeName?(n=N,P.discardActiveObject(),n.forEach(e=>{e&&e.bringForward()}),j=!0):!e.target&&C()&&Pe()}function Ne(e){e.target&&("polygon"===e.target.shapeName?(C()&&B(),me=!0):"point"===e.target.shapeName&&(!function(e){!function(e,t){const{left:n}=e.target,{top:o}=e.target,i=e.target;t.points[i.pointId]={x:n,y:o}}(e,k)}(e),be=!0))}function je(){ve=null}let Ce=null,Oe=!1,Ae=null;function Be(e){e.target&&"polygon"===e.target.shapeName&&Oe?(je(),function(e){C()&&B(),W(Ae,e.target,!1,!1,!0),Ce=e.target.id}(e),Ce=O(e.target)):(!e.target&&C()||e.target&&"bndBox"===e.target.shapeName)&&(B(),Ce=null)}function Me(e){Ae=e,e.on("mouse:down",e=>{!function(e){e.target&&(Y(),"polygon"===e.target.shapeName&&e.target.id!==Ce?Oe=!0:"point"===e.target.shapeName?pe(Ae):(I(),Oe=!1))}(e)}),e.on("mouse:over",()=>{}),e.on("mouse:up",e=>{Be(e)}),e.on("mouse:out",()=>{})}function _e(e){!function(e){e.forEachObject(e=>{"bndBox"===e.shapeName?e.selectable=!1:(e.lockMovementX=!0,e.lockMovementY=!0),"point"===e.shapeName&&e.set(u.additionalPoint)}),e.renderAll()}(e),e.defaultCursor="default",e.hoverCursor="default"}function Ee(e,t){t&&function(e){ve=e}(t),e.on("mouse:down",e=>{!function(e){e.target?(Y(),"bndBox"===e.target.shapeName&&C()?(Pe(),ye=!1):"polygon"===e.target.shapeName&&e.target.id!==ve?ye=!0:(I(),ye=!1)):ye=!1}(e)}),e.on("mouse:up",t=>{ke(t,e)}),e.on("object:moving",e=>{Ne(e)}),e.on("object:scaling",e=>{!function(e){if("bndBox"===e.target.shapeName){const t=e.target;t.width*=t.scaleX,t.height*=t.scaleY,t.scaleX=1,t.scaleY=1}}(e)}),e.on("mouse:over",t=>{!function(e,t){e.target&&"point"!==e.target.shapeName&&(e.target.set("fill","rgba(255,0,0,0.2)"),t.renderAll())}(t,e)}),e.on("mouse:out",t=>{t.target&&"point"!==t.target.shapeName&&("bndBox"===t.target.shapeName?function(e){e.target.set("fill","rgba(255,0,0,0")}(t):"polygon"===t.target.shapeName&&function(e){e.target.set("fill","rgba(255,0,0,0.01)")}(t),e.renderAll())})}function Xe(e){V||(r(e),T(e,ee()),Ee(e),ee()&&te(!1),te(!0))}function Ye(e){!function(e){e.forEachObject(e=>{"bndBox"===e.shapeName?e.selectable=!1:(e.lockMovementX=!0,e.lockMovementY=!0),"point"===e.shapeName&&e.set(u.removablePoint)}),e.renderAll()}(e),e.defaultCursor="default",e.hoverCursor="default"}let Ie=null,We=!1,Te=!1,Le=null;function Re(e){e.target&&"polygon"===e.target.shapeName&&We?(je(),function(e){C()&&(B(),Te=!0),W(Le,e.target,!0),Ie=e.target.id}(e)):(!e.target&&C()||e.target&&"bndBox"===e.target.shapeName)&&(B(),Ie=null)}function Ue(e){Le=e,e.on("mouse:down",e=>{!function(e){e.target&&(Y(),"polygon"===e.target.shapeName&&e.target.id!==Ie?We=!0:"point"===e.target.shapeName?X(e.target.pointId):I())}(e)}),e.on("mouse:over",e=>{!function(e){e.target&&"point"===e.target.shapeName&&(e.target.stroke="red",Le.renderAll())}(e)}),e.on("mouse:up",e=>{Re(e)}),e.on("mouse:out",e=>{!function(e){e.target&&"point"===e.target.shapeName&&(e.target.stroke="black",Le.renderAll())}(e)})}let Se=null;function $e(e){var t;t=e,ae.get("points").length-=1,W(Se=t,ae,!0,!0),e.on("mouse:down",e=>{!function(e){e.target&&"point"===e.target.shapeName&&X(e.target.pointId)}(e)}),e.on("mouse:over",e=>{!function(e){e.target&&"point"===e.target.shapeName&&(e.target.stroke="red",Se.renderAll())}(e)}),e.on("mouse:up",e=>{}),e.on("mouse:out",e=>{!function(e){e.target&&"point"===e.target.shapeName&&(e.target.stroke="black",Se.renderAll())}(e)})}function He(e){if(ue())ge(e,!0),te(!1);else{T(e,!0),Ee(e,Ie),te(!0)}}function Fe(e){ee()?(r(e),He(e),ee()):(r(e),function(e){const t=ue();t?$e(e):t||Ue(e)}(e),function(e){const t=ue();t?function(e){e.defaultCursor="default",e.hoverCursor="default",e.renderAll()}(e):t||Ye(e)}(e),te(!1),ne(!0))}const De={uploaded:!1,name:null},ze={};let qe=null;function Ge(e,t){t?function(e,t){qe.setWidth(t.width),qe.setHeight(t.height),i.a.Image.fromURL(e.src,e=>{qe.setBackgroundImage(e,qe.renderAll.bind(qe),{scaleX:qe.width/e.width,scaleY:qe.height/e.height})})}(e,t):function(e){qe.setWidth(e.width),qe.setHeight(e.height),qe.setBackgroundColor({source:e.src},()=>{qe.renderAll()})}(e)}function Je(e){const t={},n=ze.maximumCanvasWidth/e.width;return t.width=ze.maximumCanvasWidth,t.height=e.height*n,t}function Ke(){De.uploaded=!0;const e=this;if(ze.maximumCanvasHeight<e.height){let t=function(e){const t={},n=ze.maximumCanvasHeight/e.height;return t.height=ze.maximumCanvasHeight,t.width=e.width*n,t}(e);ze.maximumCanvasWidth<t.width&&(t=Je(t)),Ge(e,t)}else if(ze.maximumCanvasWidth<e.width){Ge(e,Je(e))}else Ge(e)}function Qe(e){const t=new Image;t.src=e.target.result,t.onload=Ke}function Ve(e){qe=e,ze.maximumCanvasHeight=window.innerHeight-54,ze.maximumCanvasWidth=window.innerWidth-110}function Ze(e){return function e(t){let n="";return Object.keys(t).forEach(o=>{"object"==typeof t[o]?n+=`<${o}>${e(t[o])}</${o}>`:n+=`<${o}>${t[o]}</${o}>`}),n}(e)}let et=null;function tt(e){const t=document.createElement("a"),n=new Blob([e],{type:"text/plain"});return t.setAttribute("href",window.URL.createObjectURL(n)),t.setAttribute("download",`${new RegExp("^([^.]+)").exec(De.name)[0]}.xml`),t.dataset.downloadurl=["text/plain",t.download,t.href].join(":"),t.draggable=!0,t.classList.add("dragout"),t}function nt(){tt(Ze(function(e,t){const n={};return n.annotations=function(e,t){return{folder:"Unknown",filename:t.name,path:"Unknown",source:{database:"Unknown"},size:{width:e.getWidth(),height:e.getHeight(),depth:1},segmented:0}}(e,t),n.annotations.object=function(e){let t={};return e.forEachObject(e=>{const n=e._objects[0],o=e._objects[1].text;t={name:o,pose:"Unspecified",truncated:1,difficult:0,bndbox:{xmin:n.left,ymin:n.top,xmax:n.left+n.width,ymax:n.top+n.height}}}),t}(e),n}(et,De))).click()}function ot(e){!function(e){if(e.files&&e.files[0]){const t=new FileReader;De.name=e.files[0].name,t.onload=Qe,t.readAsDataURL(e.files[0])}}(e)}let it=null;function rt(){var e;r(e=it),Q(e),te(!1),ne(!1)}function at(){var e;r(e=it),ge(e),te(!1),ne(!1)}function lt(){var e;r(e=it),Me(e),_e(e),te(!1),ne(!0)}function st(){he(it)}function ct(){Xe(it)}function ut(){Fe(it)}function ft(){it.backgroundImage&&nt()}function dt(e){ot(e)}function gt(){F(),ct()}function ht(){D()&&(c(),S.remove(U),R=!1)}function pt(){ie[0]&&(ie.forEach(e=>{oe.remove(e)}),ce(),ie=[],ae=null,le=0),ht(),B(),je(),ee()&&(M(),ne())}function mt(e){pt(),e&&e()}function bt(e){D()||e&&e()}!function(){const e=new i.a.Canvas("c",{selection:!1});i.a.Object.prototype.transparentCorners=!1,it=e,Ve(e),function(e){et=e}(e)}(),function(){window.createNewBndBox=mt.bind(this,rt),window.createNewPolygon=mt.bind(this,at),window.addPoints=bt.bind(this,lt),window.removePoint=bt.bind(this,ut),window.removeShape=mt.bind(this,st),window.downloadXML=mt.bind(this,ft),window.cancel=mt.bind(this,ct),window.uploadImage=function(e,t,n){pt(),t&&t(n)}.bind(this,this,dt)}(),window.labelShape=gt}]);