import { blockSize } from "../app";
import { collisionBlock, newBlock } from "./blocks/block/blocks";
import { goals, newGoal } from "./blocks/goal/goals";
import { Murri, setStartPoint } from "./cat";

export function buildLevel(level: any): void{
    const levelBuild: any = level.levelBuild;

    /*levelBuild.goal.forEach((goal: collisionBlock) => {
        newGoal(goal.x*blockSize, goal.y*blockSize, goal.w*blockSize, goal.h*blockSize);
    });*/
    newGoal(levelBuild.goal.x*blockSize, levelBuild.goal.y*blockSize, blockSize, blockSize);

    levelBuild.blocks.forEach((block: collisionBlock) => {
        newBlock(block.x*blockSize, block.y*blockSize, blockSize, blockSize, block.type);
    });

    Murri.posX = levelBuild.startPoint.x*blockSize,
    Murri.posY = levelBuild.startPoint.y*blockSize;

    setStartPoint(levelBuild.startPoint.x*blockSize, levelBuild.startPoint.y*blockSize);
}