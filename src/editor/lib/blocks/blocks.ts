import { tileSize } from "../../editorApp";

type blockType = "brick"

const brickSprite = new Image();
brickSprite.src = './sprites/brick.png';

let blocks: Block[] = [];
class Block {
    x: number;
    y: number;
    w: number;
    h: number;
    type: blockType;

    constructor(x: number, y: number, w: number, h: number, type: blockType){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.type = type;
    }
}

export function removeBlock(x: number, y: number): void{
    for(let i = 0; i < blocks.length; i++){
        if ( blocks[i].x == x && blocks[i].y == y ){
            blocks.splice(i, 1)
        }
    }
}

export function newBlock(ctx: any, x: number, y: number, type: blockType): void{
    const newBlock = new Block(x, y, 1, 1, type);

    const taken = blockExist(x, y);
    if(!taken.taken){
        console.log('non att all')
        blocks.push(newBlock);
        drawBlock(ctx, x, y, type);
    } else if ( taken.taken && !(taken.takenBlock?.type == type) ){
        console.log('replace')
        removeBlock(x, y);

        blocks.push(newBlock);
        drawBlock(ctx, x, y, type);
    }

    console.log(blocks);
}

export function drawBlock(ctx: any, x: number, y: number, type: blockType): void{
    const blockImg = new Image();
    blockImg.src = `./sprites/${type}.png`;
    blockImg.onload = () => {
        ctx?.drawImage(
            blockImg,
            x*tileSize,
            y*tileSize,
            tileSize,
            tileSize
        );
    }
}

function blockExist(x: number, y: number){
    for(let i = 0; i < blocks.length; i++){
        console.log(i);
        if ( blocks[i].x == x && blocks[i].y == y ){
            console.log('match!')
            return { taken: true, takenBlock: blocks[i] }
        }
    }
    return { taken: false }
}