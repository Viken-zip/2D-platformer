import { drawGrid } from "./lib/blocks/grids";

console.log('level editor script');

const canvas = <HTMLCanvasElement>document.getElementById('canvas');
const ctx = canvas.getContext('2d');
if(ctx){ ctx.imageSmoothingEnabled = false; }

const canvasContainerDiv = <HTMLDivElement> document.getElementById('canvasContainer');
const tileSize: number = innerHeight/30;

canvas.width = tileSize*1000;
canvas.height = tileSize*30;

function init(): void{
    drawGrid(ctx, tileSize, 1000, 30);
}
init();

