import { blockSize } from "../../../app";

export let blocks: collisionBlock[] = [];

export class collisionBlock { 
    x: number;
    y: number; 
    w: number;
    h: number;
    type: string;

    constructor(x: number, y: number, w: number, h: number, type: string){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.type = type;
    }
}

export function clearBlocks(): void {
    blocks.splice(0, blocks.length);
}

/*export function createBlocks(canvas: HTMLCanvasElement): void{
    newBlock(0, 29*blockSize, 40*blockSize, blockSize);
    //new collisionBlock(0, canvas.width, 10, canvas.height)
    
}*/

export function newBlock(x: number, y: number, w: number, h: number): void{
    const newBlock = new collisionBlock(x, y, w, h, 'block');
    blocks.push(newBlock);
}

export function drawBlocks(ctx: any, camera: any): void{
    ctx.fillStyle = 'black';
    blocks.forEach(block => {
        ctx.fillRect(
            block.x - camera.x,
            block.y,
            block.w,
            block.h
        );
    });
}