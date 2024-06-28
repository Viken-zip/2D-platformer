(()=>{"use strict";var e={859:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.camera=void 0;var i=t(324),n=t(340),s=t(340),r=document.getElementById("canvas"),a=r.getContext("2d"),c=document.getElementById("canvasContainer");r.width=c.offsetWidth,r.height=c.offsetHeight,o.camera={x:0,y:0},a&&(a.imageSmoothingEnabled=!1),(0,s.createBlocks)(r),(0,i.moveCat)(),(0,i.drawCat)(a),(0,n.drawBlocks)(a,o.camera),setInterval((function(){o.camera.x=Math.max(0,i.Murri.posX-r.width/2),o.camera.x=Math.min(o.camera.x,25025-r.width),null==a||a.clearRect(0,0,r.width,r.height),(0,i.moveCat)(),(0,i.drawCat)(a),(0,n.drawBlocks)(a,o.camera)}),1e3/60)},322:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.getImage=o.updateAnimation=o.MurriSprite=void 0,o.MurriSprite=new Image,o.MurriSprite.src="./sprites/big_murri_sprite.png";var t=0,i=0,n=0,s=0,r=!1,a=!0;o.updateAnimation=function(e,o){e>0?a=!0:e<0&&(a=!1),n/20==1&&(i<7&&!r?i++:i=0,n=0),n++,function(e,o){Math.abs(e)>0?(t=a?4:5,s=0):(s++,t=s>=240?a?0:1:a?2:3),Math.abs(o)>0?(r=!0,i=o>0?7:4,t=a?6:7):r=!1}(e,o)},o.getImage=function(){return[100*i,100*t,100]}},340:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.drawBlocks=o.newBlock=o.createBlocks=o.collisionBlock=o.collisionBlocks=void 0,o.collisionBlocks=[];var t=function(e,o,t,i){this.posY=e,this.posX=o,this.w=t,this.h=i,this.type="Block"};function i(e,i,n,s){var r=new t(e,i,n,s);o.collisionBlocks.push(r)}o.collisionBlock=t,o.createBlocks=function(e){i(e.height-10,0,e.width,10),i(0,-10,10,e.height)},o.newBlock=i,o.drawBlocks=function(e,t){o.collisionBlocks.forEach((function(o){null==e||e.fillRect(o.posX-t.x,o.posY,o.w,o.h)}))}},324:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.moveCat=o.drawCat=o.Murri=o.cat=void 0;var i=t(74),n=t(340),s=t(988),r=t(322),a=t(859),c=function(e,o,t,i,n){this.posY=e,this.posX=o,this.w=t,this.h=i,this.speed=n};o.cat=c;var l=!1,u=0,d=0;function p(e,o){e.posY>o.posY&&(l=!0),u=0}function h(e,o){d=0}o.Murri=new c(50,50,100,100,1),o.drawCat=function(e){var t=(0,r.getImage)();null==e||e.drawImage(r.MurriSprite,t[0],t[1],t[2],t[2],o.Murri.posX-a.camera.x,o.Murri.posY,o.Murri.w,o.Murri.h)},o.moveCat=function(){i.keyStates.d?d<10&&(d+=o.Murri.speed/6):d=d>.01?d/1.2:d,i.keyStates.a?d>-10&&(d-=o.Murri.speed/6):d=d<-.01?d/1.2:d,d<.01&&d>-.01&&(d=0),i.keyStates.w&&l&&(l=!1,u-=25),u+=1.25,(0,s.collisionX)(d,o.Murri,n.collisionBlocks,h),(0,s.collisionY)(u,o.Murri,n.collisionBlocks,p),(0,r.updateAnimation)(d,u)}},988:(e,o)=>{function t(e,o){return e.posX<o.posX+o.w&&e.posX+e.w>o.posX&&e.posY<o.posY+o.h&&e.posY+e.h>o.posY}Object.defineProperty(o,"__esModule",{value:!0}),o.collisionX=o.collisionY=void 0,o.collisionY=function(e,o,i,n){o.posY+=e,i.forEach((function(i){t(o,i)&&(o.posY=e<0?i.posY+i.h:i.posY-o.h,n(i,o))}))},o.collisionX=function(e,o,i,n){o.posX+=e,i.forEach((function(i){t(o,i)&&(o.posX=e<0?i.posX+i.w:i.posX-o.w,n(i,o))}))}},74:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.keyStates=o.keys=void 0,o.keys=["a","w","d","s"],o.keyStates={},o.keys.forEach((function(e){o.keyStates[e]=!1})),window.addEventListener("keydown",(function(e){o.keys.forEach((function(t){e.key===t&&(o.keyStates[t]=!0)}))})),window.addEventListener("keyup",(function(e){o.keys.forEach((function(t){e.key===t&&(o.keyStates[t]=!1)}))}))}},o={};!function t(i){var n=o[i];if(void 0!==n)return n.exports;var s=o[i]={exports:{}};return e[i](s,s.exports,t),s.exports}(859)})();