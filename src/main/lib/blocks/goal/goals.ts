import { collisionBlock } from "../block/blocks";

export const goals: collisionBlock[] = [];

export function clearGoals(): void{
    goals.splice(0, goals.length);
}

export function newGoal(x: number, y: number, w: number, h: number): void {
    const newGoal = new collisionBlock(x, y, w, h, 'goal');
    goals.push(newGoal);
}

export function drawGoals(ctx: any, camera: any){
    ctx.fillStyle = 'limegreen';
    goals.forEach(goal => {
        ctx.fillRect(
            goal.x - camera.x,
            goal.y,
            goal.w,
            goal.h
        )
    });
}