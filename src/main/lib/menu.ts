import { startLevel } from '../app';

const defaultLevels: string[] = [
    'level1',
    'level2',
    'level3',
    //'editorMade' //only fore testing new things
];

const levels: any = [];
const gameCover = <HTMLDivElement>document.getElementById('gameCover');

defaultLevels.forEach(level => {
    levels.push(require(`./levels/${level}.json`));
});

const selectLevelBtn = <HTMLButtonElement>document.getElementById('selectLevelBtn');
selectLevelBtn?.addEventListener('click', ()=>{
    openLevelMenu();
    for(const level in levels){ // debuging console loging levels json's
        console.log(levels[level]);
    }
});

const editorLevelBtn = <HTMLButtonElement>document.getElementById('editorLevelBtn');
editorLevelBtn?.addEventListener('click', ()=>{
    window.location.href = 'levelEditor.html';
})

const levelMenu = <HTMLDivElement>document.getElementById('levelMenu');
export function openLevelMenu(): void {
    selectLevelBtn.style.display = 'none';
    levelMenu.style.display = 'flex';
    gameCover.style.display = 'flex';
}

initShowLevels();
function initShowLevels(): void{
    for(const level in levels){
        const levelElement = document.createElement('div');
        levelElement.classList.add('level');

        levelElement.innerHTML = `
            <span class="levelImg" >image</span>
            <button class="levelPlayBtn" >play</button>
            <span class="levelDescription" >${levels[level].description}</span>
            <span class="levelMadeBy" >level made by ${levels[level].madeBy} </span>
        `;

        const playBtn = levelElement.querySelector('.levelPlayBtn');
        playBtn?.addEventListener('click', ()=>{
            console.log('starts level: ' + levels[level].description);
            gameCover.style.display = 'none';
            startLevel(levels[level]);
        });

        levelMenu.appendChild(levelElement);
    }
}