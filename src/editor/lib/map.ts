import { BlockInterface, blocks, blockType, oneBlocks } from "./blocks/blocks"

export let map = {
    startPoint: { x: 0, y: 0},
    goal: { x: 0, y: 0 },
    blocks: [] as BlockInterface[]
}

export function buildMap(){
    for(let i = 0; i < blocks.length; i++){
        if(blocks[i].type == 'spawn'){
            map.startPoint.x = blocks[i].x;
            map.startPoint.y = blocks[i].y;
        } else if (blocks[i].type == 'goal_flag'){
            map.goal.x = blocks[i].x;
            map.goal.y = blocks[i].y;
        } else {
            const newBlock: BlockInterface = { x: blocks[i].x, y: blocks[i].y, type: blocks[i].type }
            map.blocks.push(newBlock);
        }
    }
    
}