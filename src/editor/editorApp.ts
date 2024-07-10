import { drawGrid } from "./lib/blocks/grids";
import './lib/cursor';
import { initCursor } from "./lib/cursor";

export const canvas = <HTMLCanvasElement>document.getElementById('canvas');
const ctx = canvas.getContext('2d');
if(ctx){ ctx.imageSmoothingEnabled = false; }

const topBarDiv = <HTMLDivElement>document.getElementById('topBar');
const canvasContainerDiv = <HTMLDivElement> document.getElementById('canvasContainer');
export const tileSize: number = (innerHeight - topBarDiv.clientHeight) /30;

canvas.width = tileSize*1000;
canvas.height = tileSize*30;

function init(): void{
    initCursor(canvas, ctx);
    drawGrid(ctx, tileSize, 1000, 30);
}
init();

