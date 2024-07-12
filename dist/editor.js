(()=>{"use strict";var e={304:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tileSize=t.canvas=void 0;var i=o(806),l=o(971);o(912);var n=o(912);t.canvas=document.getElementById("canvas");var r=t.canvas.getContext("2d");r&&(r.imageSmoothingEnabled=!1);var c=document.getElementById("topBar");document.getElementById("canvasContainer"),t.tileSize=(innerHeight-c.clientHeight)/30,t.canvas.width=1e3*t.tileSize,t.canvas.height=30*t.tileSize,(0,n.initCursor)(t.canvas,r),(0,i.drawGrid)(r,t.tileSize,1e3,30),(0,l.initBlockSelection)()},971:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.cursorClick=t.initBlockSelection=t.selectedTool=t.selectedBlock=void 0;var i=o(489),l=o(806);t.selectedTool="blockPlacer";var n=document.getElementById("eraserBtn"),r=document.getElementById("penBtn");function c(e){e.className.includes("selectedTool")||(e.className+=e.className?" selectedTool":"selectedTool","blockPlacer"==t.selectedTool?r.classList.remove("selectedTool"):"eraser"==t.selectedTool&&n.classList.remove("selectedTool"))}t.initBlockSelection=function(){null==n||n.addEventListener("click",(function(){c(n),t.selectedTool="eraser"})),null==r||r.addEventListener("click",(function(){c(r),t.selectedTool="blockPlacer"}))},t.cursorClick=function(e,o,n){"blockPlacer"==t.selectedTool?(0,i.newBlock)(e,o,n,"brick"):"eraser"==t.selectedTool&&((0,i.removeBlock)(o,n),(0,l.redrawGird)(e,o,n))}},489:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.drawBlock=t.newBlock=t.removeBlock=void 0;var i=o(304);(new Image).src="./sprites/brick.png";var l=[],n=function(e,t,o,i,l){this.x=e,this.y=t,this.w=o,this.h=i,this.type=l};function r(e,t){for(var o=0;o<l.length;o++)l[o].x==e&&l[o].y==t&&l.splice(o,1)}function c(e,t,o,l){var n=new Image;n.src="./sprites/".concat(l,".png"),n.onload=function(){null==e||e.drawImage(n,t*i.tileSize,o*i.tileSize,i.tileSize,i.tileSize)}}t.removeBlock=r,t.newBlock=function(e,t,o,i){var a,s=new n(t,o,1,1,i),d=function(e,t){for(var o=0;o<l.length;o++)if(l[o].x==e&&l[o].y==t)return console.log("match!"),{taken:!0,takenBlock:l[o]};return{taken:!1}}(t,o);d.taken?d.taken&&(null===(a=d.takenBlock)||void 0===a?void 0:a.type)!=i&&(console.log("replace"),r(t,o),l.push(s),c(e,t,o,i)):(console.log("non att all"),l.push(s),c(e,t,o,i)),console.log(l)},t.drawBlock=c},806:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.redrawGird=t.drawGrid=void 0;var i=o(304),l=new Image;l.src="./sprites/grid.png",t.drawGrid=function(e,t,o,i){l.onload=function(){for(var n=0;n<i;n++)for(var r=0;r<o;r++)null==e||e.drawImage(l,r*t,n*t,t,t)}},t.redrawGird=function(e,t,o){null==e||e.clearRect(t*i.tileSize,o*i.tileSize,i.tileSize,i.tileSize),e.drawImage(l,t*i.tileSize,o*i.tileSize,i.tileSize,i.tileSize)}},912:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initCursor=t.cursor=t.Cursor=void 0;var i=o(304),l=o(971),n=function(e,t){this.x=e,this.y=t};t.Cursor=n,t.cursor=new n(0,0),t.initCursor=function(e,o){e.addEventListener("mousedown",(function(){(0,l.cursorClick)(o,t.cursor.x,t.cursor.y)})),e.addEventListener("mousemove",(function(o){var l,n,r=e.getBoundingClientRect(),c=(l=o.pageX-r.left,n=o.pageY-r.top,{x:Math.ceil(l/i.tileSize)-1,y:Math.ceil(n/i.tileSize)-1});t.cursor.x=c.x,t.cursor.y=c.y}))}}},t={};!function o(i){var l=t[i];if(void 0!==l)return l.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,o),n.exports}(304)})();