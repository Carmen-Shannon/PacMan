export var borders = [];
export var gameWindow = document.getElementsByClassName('gamewindow')[0];
export var dots = [];
export var cherries = [];

export function drawBorders() {
    var gameWindow = document.getElementsByClassName('gamewindow')[0];
    for (let i=0;i<10;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridRow = i + 1;
        wall.style.gridColumn = 1;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    
    for (let i=0;i<10;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridRow = i + 1;
        wall.style.gridColumn = 20;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    
    for (let i=0;i<20;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = i + 1;
        wall.style.gridRow = 1;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    
    for (let i=0;i<20;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = i + 1;
        wall.style.gridRow = 10;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }

    for (let i=0;i<5;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 10;
        wall.style.gridRow = 3 + i;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    for (let i=0;i<5;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 14;
        wall.style.gridRow = 3 + i;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    for (let i=0;i<3;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 11 + i;
        wall.style.gridRow = 3;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    for (let i=0;i<2;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 11 + i;
        wall.style.gridRow = 7;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    for (let i=0;i<6;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 3 + i;
        wall.style.gridRow = 7;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    for (let i=0;i<2;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 7 + i;
        wall.style.gridRow = 6;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    for (let i=0;i<6;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 3 + i;
        wall.style.gridRow = 9;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    for (let i=0;i<3;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 16 + i;
        wall.style.gridRow = 9;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    for (let i=0;i<3;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 16;
        wall.style.gridRow = 5 + i;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    for (let i=0;i<3;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 18;
        wall.style.gridRow = 5 + i;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    for (let i=0;i<3;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 16 + i;
        wall.style.gridRow = 3;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    for (let i=0;i<5;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 10 + i;
        wall.style.gridRow = 9;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    for (let i=0;i<2;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 3 + i;
        wall.style.gridRow = 6;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    for (let i=0;i<3;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 3 + i;
        wall.style.gridRow = 4;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    for (let i=0;i<3;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 3 + i;
        wall.style.gridRow = 3;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    for (let i=0;i<2;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 7 + i;
        wall.style.gridRow = 4;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }
    for (let i=0;i<2;i++) {
        var wall = document.createElement('div');
        wall.className = 'wall'
        gameWindow.appendChild(wall)
        wall.style.gridColumn = 7 + i;
        wall.style.gridRow = 3;
        var border = {x:Number(wall.style.gridColumnStart), y:Number(wall.style.gridRowStart)};
        borders.push(border);
    }

    var wallToggle = document.createElement('div');
    wallToggle.id = 'walltoggle'
    gameWindow.appendChild(wallToggle)
    wallToggle.style.gridColumn = 13;
    wallToggle.style.gridRow = 7;
    var border = {x:Number(wallToggle.style.gridColumnStart), y:Number(wallToggle.style.gridRowStart)};
    borders.push(border);
}

export function rand(start, end) {
    let newArr = [];
    for (let i=start;i<=end;i++) {
        newArr.push(i);
    }

    let randPick = newArr[Math.floor(Math.random() * newArr.length)];
    return randPick;
}

export function drawCherries() {

    let cornerPoints = [
        {x: 2, y: 2},
        {x: 19, y: 2},
        {x: 2, y: 9},
        {x: 9, y: 9},
        {x: 15, y: 9},
        {x: 19, y: 9},
    ];
    
    for (let i=0;i<cornerPoints.length;i++) {
        let cherryBoard = document.createElement('div');
        cherryBoard.className = 'cherry';
        gameWindow.appendChild(cherryBoard);
        cherryBoard.style.gridRowStart = cornerPoints[i].y;
        cherryBoard.style.gridColumnStart = cornerPoints[i].x;
        let cherry = cornerPoints[i];
        cherries.push(cherry);
    }
}

export function drawDots() {

    let badPoints = [
        {x: 2, y: 2},
        {x: 19, y: 2},
        {x: 2, y: 9},
        {x: 9, y: 9},
        {x: 15, y: 9},
        {x: 19, y: 9},
        {x: 11, y: 4},
        {x: 11, y: 5},
        {x: 11, y: 6},
        {x: 12, y: 4},
        {x: 12, y: 5},
        {x: 12, y: 6},
        {x: 13, y: 4},
        {x: 13, y: 5},
        {x: 13, y: 6},
    ];
    let coordArr = [];
    let dotCount = 204 - borders.length - badPoints.length - dots.length;
    let dotsOnBoard = document.getElementsByClassName('dot');
    
    while (dotCount != 0) {
        var dotBoard = document.createElement('div');
        dotBoard.className = 'dot';
        gameWindow.appendChild(dotBoard);
        dotBoard.style.gridRowStart = rand(2, 9);
        dotBoard.style.gridColumnStart = rand(2, 19)
        let dot = {x: Number(dotBoard.style.gridColumnStart), y: Number(dotBoard.style.gridRowStart)};
        let xy = String(dot.x) + String(dot.y);
        dots.push(dot);
        coordArr.push(xy);
        dotCount--
    }

    for (let i=0;i<dots.length;i++) {

        for (let j=0;j<borders.length;j++) {

            for (let k=0;k<badPoints.length;k++) {
                if (dots[i].x === badPoints[k].x && dots[i].y === badPoints[k].y) {
                    dotCount++;
                    dots.splice(i, 1)
                    dotsOnBoard[i].parentNode.removeChild(dotsOnBoard[i]);
                    drawDots();
                }
            }

            if (dots[i].x === 11 || dots[i].x === 12 || dots[i].x === 13) {
                if (dots[i].y === 4 || dots[i].y === 5 || dots[i].y === 6) {
                    dotCount++;
                    dots.splice(i, 1)
                    dotsOnBoard[i].parentNode.removeChild(dotsOnBoard[i]);
                    drawDots();
                }
            }
            if (dots[i].x === borders[j].x && dots[i].y === borders[j].y) {
                dotCount++;
                dots.splice(i, 1)
                dotsOnBoard[i].parentNode.removeChild(dotsOnBoard[i]);
                drawDots();
            }
        }
    }

    let newArr = [];

    for (let i=0;i<dots.length;i++) {
        let xy = String(dots[i].x) + String(dots[i].y);
        newArr.push(xy);
    }

    for (let i=0;i<newArr.length;i++) {

        //console.log(`${newArr[i]} - ${i} - ${newArr.indexOf(newArr[i])}`)

        if (i != newArr.indexOf(newArr[i])) {
            dotCount++;
            dots.splice(i, 1);
            newArr.splice(i, 1);
            dotsOnBoard[i].parentNode.removeChild(dotsOnBoard[i]);
        }
    }

    if (dotCount != 0) {
        drawDots();
    }
}

export function setWall() {
    let moveWall = document.getElementById('walltoggle');
    let seconds = 0;

    function addSeconds() {
        seconds++;
        console.log(seconds)
        if (seconds === 3) {
            clearInterval(timer)
            moveWall.parentNode.removeChild(moveWall);
            for (let i=0;i<borders.length;i++) {
                if (borders[i].x === 13 && borders[i].y === 7) {
                    borders.splice(i, 1);
                }
            }
        }
    }

    let timer = setInterval(addSeconds, 1000);
    
}