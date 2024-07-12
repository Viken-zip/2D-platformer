
type buildTools = "eraser" | "blockPlacer";

export let selectedBlock: string;
export let selectedTool: buildTools = 'blockPlacer';

const eraserBtn = <HTMLButtonElement>document.getElementById('eraserBtn');
const penBtn = <HTMLButtonElement>document.getElementById('penBtn');

export function initBlockSelection(){
    eraserBtn?.addEventListener('click', ()=>{
        selected(eraserBtn);
        selectedTool = 'eraser'
    });

    penBtn?.addEventListener('click', () => {
        selected(penBtn);
        selectedTool = 'blockPlacer';
    });
}

function selected(button: HTMLButtonElement){
    if( !(button.className.includes('selectedTool')) ){
        button.className += button.className ? ' selectedTool' : 'selectedTool';
        removeLastSelected();
    }
}

function removeLastSelected(){
    if(selectedTool == 'blockPlacer'){
        penBtn.classList.remove('selectedTool');
    } else if (selectedTool == 'eraser'){
        eraserBtn.classList.remove('selectedTool');
    }
};