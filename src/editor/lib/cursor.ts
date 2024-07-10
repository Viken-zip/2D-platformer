import { canvas, tileSize } from "../editorApp";
import { newBlock } from "./blocks/blocks";

export class Cursor{
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
}

export let cursor: Cursor = new Cursor(0, 0);

export function initCursor(canvas: HTMLCanvasElement, ctx: any): void{
    canvas.addEventListener('mousedown', ()=>{
        newBlock(ctx, cursor.x, cursor.y, "brick");
    });

    canvas.addEventListener('mousemove', (e)=>{
        const rect = canvas.getBoundingClientRect();
        const newCursorPos = vectorToTileVector(
            e.pageX - rect.left,
            e.pageY - rect.top 
        );
        cursor.x = newCursorPos.x;
        cursor.y = newCursorPos.y;
        //console.log(cursor.x, cursor.y);
    });
}

function vectorToTileVector(x: number, y: number){
    const xPos = Math.ceil(x / tileSize) - 1;
    const yPos = Math.ceil(y / tileSize) - 1;
    return {x: xPos, y: yPos}
}
