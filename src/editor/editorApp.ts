import { drawGrid } from "./lib/blocks/grids";
import { initBlockSelection } from "./lib/blockSelection";
import './lib/cursor';
import './lib/menu';
import { initCursor } from "./lib/cursor";
import { initJsonMenu } from "./lib/jsonMenu";

export const canvas = <HTMLCanvasElement>document.getElementById('canvas');
const ctx = canvas.getContext('2d');
if(ctx){ ctx.imageSmoothingEnabled = false; }

const topBarDiv = <HTMLDivElement>document.getElementById('topBar');
const canvasContainerDiv = <HTMLDivElement> document.getElementById('canvasContainer');
export const tileSize: number = (innerHeight - topBarDiv.clientHeight) /30;

canvas.width = tileSize*1000;
canvas.height = tileSize*30;

function init(): void{
    initJsonMenu();
    initCursor(canvas, ctx);
    drawGrid(ctx, tileSize, 1000, 30);
    initBlockSelection();
}
init();

