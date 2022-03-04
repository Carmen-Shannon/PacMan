var gameTimer = 0;

import { drawCherries, drawDots, gameWindow } from './drawmap.js';
import {drawBorders} from './drawmap.js'
import {borders} from './drawmap.js'
import {detectCollision, drawPlayer, player, updatePlayer} from './player_movement.js'
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
            drawDots();
            break;
    }
}

function main() {
    updatePlayer();
    detectCollision();
    drawPlayer();
    setTimeout(main, 240);
}

drawBorders();
drawDots();
drawCherries();
spawnPlayer();
main();