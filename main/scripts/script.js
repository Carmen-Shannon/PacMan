var gameTimer = 0;

import { drawCherries, drawDots, gameWindow, setWall } from './drawmap.js';
import {drawBorders} from './drawmap.js'
import {borders} from './drawmap.js'
import {detectCollision, drawPlayer, player, updatePlayer} from './player_movement.js'
import {rand} from './drawmap.js'
import {spawnPlayer} from './player_movement.js'
import {changeDirection} from './player_movement.js'
import { changeGhostDirection, drawGhosts, spawnGhosts, updateGhosts, ghosts } from './ghosts.js';

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
    updateGhosts();
    drawGhosts();
    setTimeout(main, 240);
}

drawBorders();
drawDots();
drawCherries();
spawnPlayer();
spawnGhosts();
setWall();
setInterval(changeGhostDirection, 1500);
main();