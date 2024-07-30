import { collisionBlock } from "../block/blocks";

export const goals: collisionBlock[] = [];

const goalSprite = new Image();
export function initGoal(): void{
    goalSprite.src = './sprites/goal_flag.png';
}

export function clearGoals(): void{
    goals.splice(0, goals.length);
}

export function newGoal(x: number, y: number, w: number, h: number): void {
    const newGoal = new collisionBlock(x, y, w, h, 'goal');
    goals.push(newGoal);
}

export function drawGoals(ctx: any, camera: any){
    //wth there will only be one goal att each levels! oh well ill let it
    goals.forEach(goal => {
        ctx?.drawImage(
            goalSprite,
            goal.x - camera.x,
            goal.y,
            goal.w,
            goal.h
        );
    });
}