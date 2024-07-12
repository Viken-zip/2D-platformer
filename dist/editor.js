(()=>{"use strict";var e={304:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.tileSize=o.canvas=void 0;var n=t(806),l=t(971);t(912);var i=t(912);o.canvas=document.getElementById("canvas");var c=o.canvas.getContext("2d");c&&(c.imageSmoothingEnabled=!1);var r=document.getElementById("topBar");document.getElementById("canvasContainer"),o.tileSize=(innerHeight-r.clientHeight)/30,o.canvas.width=1e3*o.tileSize,o.canvas.height=30*o.tileSize,(0,i.initCursor)(o.canvas,c),(0,n.drawGrid)(c,o.tileSize,1e3,30),(0,l.initBlockSelection)()},971:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.initBlockSelection=o.selectedTool=o.selectedBlock=void 0,o.selectedTool="blockPlacer";var t=document.getElementById("eraserBtn"),n=document.getElementById("penBtn");function l(e){e.className.includes("selectedTool")||(e.className+=e.className?" selectedTool":"selectedTool","blockPlacer"==o.selectedTool?n.classList.remove("selectedTool"):"eraser"==o.selectedTool&&t.classList.remove("selectedTool"))}o.initBlockSelection=function(){null==t||t.addEventListener("click",(function(){l(t),o.selectedTool="eraser",console.log(o.selectedTool)})),null==n||n.addEventListener("click",(function(){l(n),o.selectedTool="blockPlacer",console.log(o.selectedTool)}))}},489:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.drawBlock=o.newBlock=o.removeBlock=void 0;var n=t(304);(new Image).src="./sprites/brick.png";var l=[],i=function(e,o,t,n,l){this.x=e,this.y=o,this.w=t,this.h=n,this.type=l};function c(e,o){for(var t=0;t<l.length;t++)l[t].x==e&&l[t].y==o&&l.splice(t,1)}function r(e,o,t,l){var i=new Image;i.src="./sprites/".concat(l,".png"),i.onload=function(){null==e||e.drawImage(i,o*n.tileSize,t*n.tileSize,n.tileSize,n.tileSize)}}o.removeBlock=c,o.newBlock=function(e,o,t,n){var a,s=new i(o,t,1,1,n),d=function(e,o){for(var t=0;t<l.length;t++)if(l[t].x==e&&l[t].y==o)return console.log("match!"),{taken:!0,takenBlock:l[t]};return{taken:!1}}(o,t);d.taken?d.taken&&(null===(a=d.takenBlock)||void 0===a?void 0:a.type)!=n&&(console.log("replace"),c(o,t),l.push(s),r(e,o,t,n)):(console.log("non att all"),l.push(s),r(e,o,t,n)),console.log(l)},o.drawBlock=r},806:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.drawGrid=void 0;var t=new Image;t.src="./sprites/grid.png",o.drawGrid=function(e,o,n,l){t.onload=function(){for(var i=0;i<l;i++)for(var c=0;c<n;c++)null==e||e.drawImage(t,c*o,i*o,o,o)}}},912:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.initCursor=o.cursor=o.Cursor=void 0;var n=t(304),l=t(489),i=function(e,o){this.x=e,this.y=o};o.Cursor=i,o.cursor=new i(0,0),o.initCursor=function(e,t){e.addEventListener("mousedown",(function(){(0,l.newBlock)(t,o.cursor.x,o.cursor.y,"brick")})),e.addEventListener("mousemove",(function(t){var l,i,c=e.getBoundingClientRect(),r=(l=t.pageX-c.left,i=t.pageY-c.top,{x:Math.ceil(l/n.tileSize)-1,y:Math.ceil(i/n.tileSize)-1});o.cursor.x=r.x,o.cursor.y=r.y}))}}},o={};!function t(n){var l=o[n];if(void 0!==l)return l.exports;var i=o[n]={exports:{}};return e[n](i,i.exports,t),i.exports}(304)})();