export var borders = [];
export var gameWindow = document.getElementsByClassName('gamewindow')[0];

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
    wallToggle.className = 'walltoggle'
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