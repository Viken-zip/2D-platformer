import { collisionX, collisionY } from "./lib/collision";
import { cat, Murri, moveCat, drawCat } from "./lib/cat"
import { collisionBlock, collisionBlocks, drawBlocks } from "./lib/blocks";
import { createBlocks } from "./lib/blocks";

const canvas = <HTMLCanvasElement> document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let gameOn: boolean = true;

const canvasContainerDiv = <HTMLDivElement> document.getElementById('canvasContainer');
canvas.width = canvasContainerDiv.offsetWidth;
canvas.height = canvasContainerDiv.offsetHeight;

const maxCamX: number = 1000;
export const blockSize: number = innerHeight/30;
export const camera: {x: number, y: number} = {
    x: 0,
    y: 0
}

export type callback = (block: collisionBlock, cat: cat) => void;

function init(){
    if(ctx){ ctx.imageSmoothingEnabled = false; }
    createBlocks(canvas);
    moveCat();
    drawCat(ctx);
    drawBlocks(ctx, camera);
}
init();

setInterval((): void=>{
    if(gameOn){
        
        camera.x = Math.max(0, Murri.posX - canvas.width/2);
        camera.x = Math.min(camera.x, maxCamX * blockSize + blockSize - canvas.width);

        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        moveCat();
        drawCat(ctx);
        drawBlocks(ctx, camera);
    }
}, 1000/60);