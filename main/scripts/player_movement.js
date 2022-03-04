export var player = {
    x:0,
    y:0,
    score: 0,
    instance: false,
    direction: ''
}

export var isHitWall = false;

import { dots, gameWindow } from "./drawmap.js";
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

    for (let i=0;i<borders.length;i++) {
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
            for (let i=0;i<borders.length;i++) {
                if (player.x === borders[i].x && player.y - 1 === borders[i].y) {
                    return;
                }
            }
            detectCollision();
            player.y -= 1;
            break;
        case 'down':
            for (let i=0;i<borders.length;i++) {
                if (player.x === borders[i].x && player.y + 1 === borders[i].y) {
                    return;
                }
            }
            detectCollision();
            player.y += 1;
            break;
        case 'left':
            for (let i=0;i<borders.length;i++) {
                if (player.x - 1 === borders[i].x && player.y === borders[i].y) {
                    return;
                }
            }
            detectCollision();
            player.x -= 1;
            break;
        case 'right':
            for (let i=0;i<borders.length;i++) {
                if (player.x + 1 === borders[i].x && player.y === borders[i].y) {
                    return;
                }
            }
            detectCollision();
            player.x += 1;
            break;
    }
}

export function drawPlayer() {
    var playerBoard = document.getElementById('player');
    playerBoard.style.gridRow = player.y;
    playerBoard.style.gridColumn = player.x;
}

let scoreBoard = document.getElementById('score');

export function detectCollision() {
    for (let i=0;i<dots.length;i++) {
        if (player.x === dots[i].x && player.y === dots[i].y) {
            let dot = document.getElementsByClassName('dot');
            dots.splice(i, 1);
            dot[i].remove();
            player.score += 3;
            scoreBoard.innerText = `Score: ${player.score}`
        } else {
            continue;
        }
    }
}