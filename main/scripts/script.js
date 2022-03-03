var gameTimer = 0;

import { gameWindow } from './drawmap.js';
import {drawBorders} from './drawmap.js'
import {borders} from './drawmap.js'
import {player} from './player_movement.js'
import {rand} from './drawmap.js'
import {spawnPlayer} from './player_movement.js'



drawBorders();
spawnPlayer();