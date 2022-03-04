export var player = {
    x: 0,
    y: 0,
    score: 0,
    instance: false,
    direction: ''
}


import { cherries, dots, gameWindow } from "./drawmap.js";
import { rand } from "./drawmap.js";
import { borders } from "./drawmap.js";

export function spawnPlayer() {
    while (!player.instance) {
        var playerBoard = document.createElement('div');
        playerBoard.id = 'player';
        gameWindow.appendChild(playerBoard);
        playerBoard.style.gridRow = rand(1, 10);
        playerBoard.style.gridColumn = rand(1, 20);
        player.x = Number(playerBoard.style.gridColumnStart);
        player.y = Number(playerBoard.style.gridRowStart);
        player.instance = true;
    }

    for (let i = 0; i < borders.length; i++) {
        if (player.x === borders[i].x && player.y === borders[i].y) {
            player.instance = false;
            document.getElementById('player').remove();
            spawnPlayer();
        }
    }

    if (player.x === 11 || player.x === 12 || player.x === 13) {
        if (player.y === 4 || player.y === 5 || player.y === 6) {
            player.instance = false;
            document.getElementById('player').remove();
            spawnPlayer();
        }
    }
}

export function changeDirection(direction) {
    player.direction = direction;
}

export function updatePlayer() {

    switch (player.direction) {
        case 'up':
            for (let i = 0; i < borders.length; i++) {
                if (player.x === borders[i].x && player.y - 1 === borders[i].y) {
                    return;
                }
            }
            player.y -= 1;
            break;
        case 'down':
            for (let i = 0; i < borders.length; i++) {
                if (player.x === borders[i].x && player.y + 1 === borders[i].y) {
                    return;
                }
            }
            player.y += 1;
            break;
        case 'left':
            for (let i = 0; i < borders.length; i++) {
                if (player.x - 1 === borders[i].x && player.y === borders[i].y) {
                    return;
                }
            }
            player.x -= 1;
            break;
        case 'right':
            for (let i = 0; i < borders.length; i++) {
                if (player.x + 1 === borders[i].x && player.y === borders[i].y) {
                    return;
                }
            }
            player.x += 1;
            break;
    }
}

export function drawPlayer() {
    var playerBoard = document.getElementById('player');
    playerBoard.style.gridRow = player.y;
    playerBoard.style.gridColumn = player.x;
}

let dot = document.getElementsByClassName('dot');
let cherryBoard = document.getElementsByClassName('cherry');

export function detectCollision() {

    function removeDot(index, boardObj, obj) {
        obj.splice(index, 1);
        boardObj[index].parentNode.removeChild(boardObj[index]);
    };

    for (let i = 0; i < dots.length; i++) {
        if (player.x === dots[i].x && player.y === dots[i].y && player.direction != '') {
            removeDot(i, dot, dots);
            updateScore(10);
            return;
        }
    }

    for (let i=0;i<cherries.length;i++) {
        if (player.x === cherries[i].x && player.y === cherries[i].y && player.direction != '') {
            removeDot(i, cherryBoard, cherries);
            updateScore(50);
            return;
        }
    }
}

export function updateScore(num) {
    let scoreBoard = document.getElementById('score');
    player.score += num;
    scoreBoard.innerText = `Score: ${player.score}`;
}