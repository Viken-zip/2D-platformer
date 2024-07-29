import { blockSize } from "../../../app";

export let blocks: collisionBlock[] = [];
export type blockType = "brick" | "white_brick";

const brickSprite = new Image();
const whiteBrickSprite = new Image();
export function initBlocks(): void{
    brickSprite.src = './sprites/brick.png';
    whiteBrickSprite.src = './sprites/white_brick.png';
}

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

// w and h is actualy not in use anymore!
export function newBlock(x: number, y: number, w: number, h: number, type: string): void{
    const newBlock = new collisionBlock(x, y, w, h, type);
    blocks.push(newBlock);
}

export function drawBlocks(ctx: any, camera: any): void{
    blocks.forEach(block => {
        if(block.type == 'brick'){
            ctx?.drawImage(
                brickSprite,
                block.x - camera.x,
                block.y,
                blockSize,
                blockSize
            );
            console.log('wha');
        } else if (block.type == 'white_brick'){
            ctx?.drawImage(
                whiteBrickSprite,
                block.x - camera.x,
                block.y,
                blockSize,
                blockSize
            );
        }
    });
}