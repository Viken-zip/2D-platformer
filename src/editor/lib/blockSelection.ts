import { newBlock, removeBlock } from "./blocks/blocks";
import { redrawGird } from "./blocks/grids";

type buildTools = "eraser" | "blockPlacer";


export let selectedBlock: string;
export let selectedTool: buildTools = 'blockPlacer';

const eraserBtn = <HTMLButtonElement>document.getElementById('eraserBtn');
const penBtn = <HTMLButtonElement>document.getElementById('penBtn');

export function initBlockSelection(): void{
    eraserBtn?.addEventListener('click', ()=>{
        selected(eraserBtn);
        selectedTool = 'eraser'
    });

    penBtn?.addEventListener('click', () => {
        selected(penBtn);
        selectedTool = 'blockPlacer';
    });
}

export function cursorClick(ctx: any, x: number, y: number): void{
    if(selectedTool == 'blockPlacer'){
        newBlock(ctx, x, y, 'brick');
    } else if ( selectedTool == 'eraser' ){
        removeBlock(x, y);
        redrawGird(ctx, x, y);
    }
}

function selected(button: HTMLButtonElement): void{
    if( !(button.className.includes('selectedTool')) ){
        button.className += button.className ? ' selectedTool' : 'selectedTool';
        removeLastSelected();
    }
}

function removeLastSelected(): void{
    if(selectedTool == 'blockPlacer'){
        penBtn.classList.remove('selectedTool');
    } else if (selectedTool == 'eraser'){
        eraserBtn.classList.remove('selectedTool');
    }
};