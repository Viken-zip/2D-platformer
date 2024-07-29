import { collisionX, collisionY } from "./lib/collision";
import { cat, Murri, moveCat, drawCat } from "./lib/cat"
import { clearBlocks, collisionBlock, drawBlocks, initBlocks, newBlock } from "./lib/blocks/block/blocks";
import { clearGoals, drawGoals, newGoal } from "./lib/blocks/goal/goals";
import "./lib/menu";
import { buildLevel } from "./lib/levelBuilder";
import { openLevelMenu } from "./lib/menu";

const canvas = <HTMLCanvasElement> document.getElementById('canvas');
const ctx = canvas.getContext('2d');
if(ctx){ ctx.imageSmoothingEnabled = false; }

let gameOn: boolean = true;

const canvasContainerDiv = <HTMLDivElement> document.getElementById('canvasContainer');
canvas.width = canvasContainerDiv.offsetWidth;
canvas.height = canvasContainerDiv.offsetHeight;
canvas.style.display = 'none';

const maxCamX: number = 1000;
export const blockSize: number = innerHeight/30;
export const camera: {x: number, y: number} = {
    x: 0,
    y: 0
}

export type callback = (block: collisionBlock, cat: cat) => void;

function init(){
    newBlock(0, 29*blockSize, 40*blockSize, blockSize, 'brick');
    newGoal(35*blockSize, 28*blockSize, blockSize, blockSize)

    if(ctx){ ctx.imageSmoothingEnabled = false; }
    //createBlocks(canvas);
    moveCat(canvas);
    drawCat(ctx);
    drawBlocks(ctx, camera);
    drawGoals(ctx, camera);
}
//init();

initBlocks(); 
function gameLoop(){
    if(gameOn){
        
        camera.x = Math.max(0, Murri.posX - canvas.width/2);
        camera.x = Math.min(camera.x, maxCamX * blockSize + blockSize - canvas.width);

        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        moveCat(canvas);
        drawCat(ctx);
        drawBlocks(ctx, camera);
        drawGoals(ctx, camera);
    }
};

let gameInterval: any;
export function startLevel(level: any): void {
    buildLevel(level);
    canvas.style.display = 'block';
    gameInterval = setInterval(gameLoop, 1000/60);
}

export function endCurrentLevel(): void {
    canvas.style.display = 'none';
    clearGoals();
    clearBlocks();
    clearInterval(gameInterval);
    openLevelMenu();
}