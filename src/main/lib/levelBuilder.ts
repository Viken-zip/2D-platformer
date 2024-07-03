import { blockSize } from "../app";
import { collisionBlock, newBlock } from "./blocks/block/blocks";
import { newGoal } from "./blocks/goal/goals";
import { Murri } from "./cat";

export function buildLevel(level: any): void{
    const levelBuild: any = level.levelBuild;

    levelBuild.goal.forEach((goal: collisionBlock) => {
        newGoal(goal.x*blockSize, goal.y*blockSize, goal.w*blockSize, goal.h*blockSize);
    });

    levelBuild.blocks.forEach((block: collisionBlock) => {
        newBlock(block.x*blockSize, block.y*blockSize, block.w*blockSize, block.h*blockSize);
    });

    Murri.posX = levelBuild.startPoint.x,
    Murri.posY = levelBuild.startPoint.y;
}