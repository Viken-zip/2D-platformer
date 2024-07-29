import { keys, keyStates } from "./keys"
import { collisionBlock, blocks } from "./blocks/block/blocks";
import { collisionX, collisionY } from "./collision";
import { MurriSprite, getImage, updateAnimation } from "./animation";
import { blockSize, camera, endCurrentLevel } from "../app";
import { goals } from "./blocks/goal/goals";

/** @type {CanvasRenderingContext2D} */

export const catSize: number = innerHeight/32;
const objects = [blocks, goals];

export class cat {
    posX: number;
    posY: number; 
    w: number;
    h: number;
    speed: number;

    constructor(posY: number, posX: number, w: number, h: number, speed: number){
        this.posY = posY;
        this.posX = posX;
        this.w = w;
        this.h = h;
        this.speed = speed;
    }
}

let gravity: number = 1;
//let fallSpeed: number = 0;
const jumpPower: number = innerHeight/50;
const maxGravity: number = innerHeight/70;
const maxSpeed: number = innerHeight/100;

let onGround: boolean = false;

let vy: number = 0;
let vx: number = 0;

let murriStartPoint = {x: 0, y: 0};

export const Murri: cat = new cat(600, 700, catSize, catSize, 1);

export function drawCat(ctx: any): void{
    const Values = getImage();
    ctx?.drawImage(
        MurriSprite,
        Values[0],
        Values[1],
        Values[2],
        Values[2],
        Murri.posX - camera.x,
        Murri.posY,
        Murri.w,
        Murri.h
    );

    //console.log(Murri);
}

export function moveCat(canvas: any): void{
    if( keyStates['d'] ){ if(vx < maxSpeed){vx += Murri.speed / 6} }
    else{
        vx = vx > 0.01 ? vx / 1.2 : vx;
    }

    if( keyStates['a'] ){ if(vx > -maxSpeed){vx -= Murri.speed / 6} }
    else{
        vx = vx < -0.01 ? vx / 1.2 : vx;
    }
    
    if(vx < 0.01 && vx > -0.01){ vx = 0 }
    
    if( keyStates['w'] ){
        if(onGround){
            onGround = false;
            vy -= jumpPower;
        }
    }

    /*if(vx > 0 || vx < 0 || vy > 0 || vy < 0){
        idleTime = 0;
    }*/

    if(gravity <= maxGravity){
        vy += maxGravity/16;
    }

    collisionX(vx, Murri, objects, collisionx);
    collisionY(vy, Murri, objects, collisiony);

    //console.log(vx);
    updateAnimation(vx, vy);


    if(Murri.posY+catSize > canvas.height ||
        Murri.posX+catSize > canvas.width ||
        Murri.posX < 0
    ){
        //put murri on level start point
        Murri.posX = murriStartPoint.x;
        Murri.posY = murriStartPoint.y;
    }
}

export function setStartPoint(x: number, y: number){
    murriStartPoint.x = x;
    murriStartPoint.y = y;
}

function collisiony(tile: any, cat: cat): void{
    if(tile.y > cat.posY){
        onGround = true;
    }
    vy = 0;

    if(tile.type == 'goal'){
        console.log('goal');
        endCurrentLevel();
    }
}

function collisionx(tile: any, cat: cat): void {
    vx = 0;

    if(tile.type == 'goal'){
        console.log('goal');
        endCurrentLevel();
    }
}