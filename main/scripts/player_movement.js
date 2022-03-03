export var player = {
    x:0,
    y:0,
    score: 0,
    instance: false,
    direction: ''
}

import { gameWindow } from "./drawmap.js";
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