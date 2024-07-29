import { blockType, newBlock, removeBlock } from "./blocks/blocks";
import { redrawGird } from "./blocks/grids";

type buildTools = "eraser" | "blockPlacer";

const blocksTypes: blockType[] = ['brick', 'white_brick', 'goal_flag', 'spawn'];

export let selectedBlock: blockType = 'brick';
export let selectedTool: buildTools = 'blockPlacer';

const eraserBtn = <HTMLButtonElement>document.getElementById('eraserBtn');
const penBtn = <HTMLButtonElement>document.getElementById('penBtn');

const changeBlockLeft = <HTMLButtonElement>document.getElementById('changeBlockLeft');
const changeBlockRight = <HTMLButtonElement>document.getElementById('changeBlockRight');
const selectedBlockImg = <HTMLImageElement>document.getElementById('selectedBlock');

export function initBlockSelection(): void{
    eraserBtn?.addEventListener('click', ()=>{
        selected(eraserBtn);
        selectedTool = 'eraser'
    });

    penBtn?.addEventListener('click', () => {
        selected(penBtn);
        selectedTool = 'blockPlacer';
    });

    changeBlockLeft?.addEventListener('click', ()=>{
        const index = blocksTypes.indexOf(selectedBlock);
        console.log(index)
        if(index-1 >= 0){
            selectedBlock = blocksTypes[index-1];
        } else { selectedBlock = blocksTypes[blocksTypes.length-1] }
        selectedBlockImg.src = `./sprites/${selectedBlock}.png`;
    });

    changeBlockRight?.addEventListener('click', ()=>{
        const index = blocksTypes.indexOf(selectedBlock);
        if(blocksTypes.length-1 >= index+1){
            selectedBlock = blocksTypes[index+1];
        } else { selectedBlock = blocksTypes[0] }
        selectedBlockImg.src = `./sprites/${selectedBlock}.png`;
    });
}

export function cursorClick(ctx: any, x: number, y: number): void{
    if(selectedTool == 'blockPlacer'){
        newBlock(ctx, x, y, selectedBlock);
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