//this isnt a block so to say, its just for showing blank space

const gridSprite = new Image();
gridSprite.src = './sprites/grid.png';

export function drawGrid(ctx: any, tileSize: number, width: number, height: number): void{
    gridSprite.onload = () => {
        for(let h = 0; h < height; h++){
            for(let w = 0; w < width; w++){
                ctx?.drawImage(
                    gridSprite,
                    w * tileSize, 
                    h * tileSize,
                    tileSize, 
                    tileSize
                );
                
            }
        }
    }
}