export let collisionBlocks: collisionBlock[] = [];

export class collisionBlock { 
    posX: number;
    posY: number; 
    w: number;
    h: number;
    type: string;

    constructor(posY: number, posX: number, w: number, h: number){
        this.posY = posY;
        this.posX = posX;
        this.w = w;
        this.h = h;
        this.type = "Block";
    }
}

export function createBlocks(canvas: HTMLCanvasElement): void{
    newBlock(canvas.height - 10, 0, canvas.width, 10);
    newBlock(0, -10, 10, canvas.height);
    //new collisionBlock(0, canvas.width, 10, canvas.height)
    
}

export function newBlock(x: number, y: number, w: number, h: number){
    const newBlock = new collisionBlock(x, y, w, h);
    collisionBlocks.push(newBlock);
}

export function drawBlocks(ctx: any, camera: any): void{
    collisionBlocks.forEach(block => {
        ctx?.fillRect(
            block.posX - camera.x,
            block.posY,
            block.w,
            block.h
        );
    });
}