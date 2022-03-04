import { gameWindow, rand } from "./drawmap.js";
import { borders } from "./drawmap.js";
export var ghosts = [];

export function spawnGhosts() {
    var ghostBoard1 = document.createElement('div');
    ghostBoard1.id = 'ghost1';
    ghostBoard1.className = 'ghost';
    gameWindow.appendChild(ghostBoard1);
    ghostBoard1.style.gridColumnStart = 11;
    ghostBoard1.style.gridRowStart = 4;
    var ghost1 = {x:11, y:4, direction: ''};

    // var ghostBoard2 = document.createElement('div');
    // ghostBoard2.id = 'ghost2';
    //ghostBoard2.className = 'ghost';
    // gameWindow.appendChild(ghostBoard2);
    // ghostBoard2.style.gridColumnStart = 13;
    // ghostBoard2.style.gridRowStart = 4;
    // var ghost2 = {x:13, y:4, direction: ''};

    // var ghostBoard3 = document.createElement('div');
    // ghostBoard3.id = 'ghost3';
    //ghostBoard3.className = 'ghost';
    // gameWindow.appendChild(ghostBoard3);
    // ghostBoard3.style.gridColumnStart = 11;
    // ghostBoard3.style.gridRowStart = 6;
    // var ghost3 = {x:11, y:6, direction: ''};

    ghosts.push(ghost1);
};

export function updateGhosts() {

    for (let i=0;i<ghosts.length;i++) {

        switch (ghosts[i].direction) {

            case 'up':
                for (let j = 0; j < borders.length; j++) {
                    if (ghosts[i].x === borders[j].x && ghosts[i].y - 1 === borders[j].y) {
                        return;
                    }
                }
                ghosts[i].y -= 1;
                break;
            case 'down':
                for (let j = 0; j < borders.length; j++) {
                    if (ghosts[i].x === borders[j].x && ghosts[i].y + 1 === borders[j].y) {
                        return;
                    }
                }
                ghosts[i].y += 1;
                break;
            case 'left':
                for (let j = 0; j < borders.length; j++) {
                    if (ghosts[i].x - 1 === borders[j].x && ghosts[i].y === borders[j].y) {
                        return;
                    }
                }
                ghosts[i].x -= 1;
                break;
            case 'right':
                for (let j = 0; j < borders.length; j++) {
                    if (ghosts[i].x + 1 === borders[j].x && ghosts[i].y === borders[j].y) {
                        return;
                    }
                }
                ghosts[i].x += 1;
                break;
        }
    }
}

export function drawGhosts() {
    let ghostBoard = document.getElementsByClassName('ghost');
    for (let i=0;i<ghosts.length;i++) {
        ghostBoard[i].style.gridColumnStart = ghosts[i].x;
        ghostBoard[i].style.gridRowStart = ghosts[i].y;
    }
}

export function changeGhostDirection() {

    for (let i=0;i<ghosts.length;i++) {

        switch (rand(1, 4)) {

            case 1:
                ghosts[i].direction = 'up';
                break;          
            case 2:
                ghosts[i].direction = 'down';
                break;
            case 3:
                ghosts[i].direction = 'left';
                break; 
            case 4:
                ghosts[i].direction = 'right';
                break; 
        }
    }
}