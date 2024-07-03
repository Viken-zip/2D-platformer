import { callback } from "../app";
import { cat } from "./cat";
import { collisionBlock } from "./blocks/block/blocks";

export function collisionY(vy: number, cat: cat, collisionObjects: any, collisionCallback: callback){
    cat.posY += vy;
    for(let i = 0; i < collisionObjects.length; i++){
        for(let k = 0; k < collisionObjects[i].length; k++){
            const tile = collisionObjects[i][k];
            if( collide(cat, tile) ){
                cat.posY = vy < 0 ? tile.y + tile.h : tile.y - cat.h;
                collisionCallback(tile, cat);
            }
        }
    }
}

export function collisionX(vx: number, cat: cat, collisionObjects: any, collisionCallback: callback){
    cat.posX += vx;
    for(let i = 0; i < collisionObjects.length; i++){
        for(let k = 0; k < collisionObjects[i].length; k++){
            const tile = collisionObjects[i][k];
            if( collide(cat, tile) ){
                cat.posX = vx < 0 ? tile.x + tile.w : tile.x - cat.w;
                collisionCallback(tile, cat);
            }
        }
    }
}

function collide(cat: cat, tile: any): boolean{
    
    return(
        cat.posX < tile.x + tile.w &&
        cat.posX + cat.w > tile.x &&
        cat.posY < tile.y + tile.h &&
        cat.posY + cat.h > tile.y
    );
}