var gameTimer = 0;

import { gameWindow } from './drawmap.js';
import {drawBorders} from './drawmap.js'
import {borders} from './drawmap.js'
import {drawPlayer, player, updatePlayer} from './player_movement.js'
import {rand} from './drawmap.js'
import {spawnPlayer} from './player_movement.js'
import {changeDirection} from './player_movement.js'

document.onkeydown = function (key) {
    switch (key.key) {
        case 'w':
            changeDirection('up');
            break;
        case 'a':
            changeDirection('left');
            break;
        case 's':
            changeDirection('down');
            break;
        case 'd':
            changeDirection('right');
            break;
        case ' ':
            console.log(player.x, player.y);
            break;
    }
}

function main() {
    updatePlayer();
    drawPlayer();
    setTimeout(main, 60);
}

drawBorders();
spawnPlayer();
main();