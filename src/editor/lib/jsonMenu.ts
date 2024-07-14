import { buildMap, map } from "./map";

const DownloadBtn = <HTMLButtonElement>document.getElementById('DownloadBtn');
const jsonSlideContainer = <HTMLDivElement>document.getElementById('jsonSlideContainer');
const jsonTextArea = <HTMLTextAreaElement>document.getElementById('jsonTextArea');

let jsonSlideOpen: boolean = false;

export function initJsonMenu(){
    DownloadBtn.addEventListener('click', ()=>{
        jsonSlideContainer.style.right = jsonSlideOpen ? '-400px' : '0px';
        jsonSlideOpen = !jsonSlideOpen;
        if(jsonSlideOpen){
            buildMap();
            showMap();
        }
    });
}

export function showMap(){
    const mapJson = JSON.stringify(map, null, 2);
    jsonTextArea.innerHTML = mapJson;
    jsonTextArea.select();
    navigator.clipboard.writeText(jsonTextArea.innerHTML);
}