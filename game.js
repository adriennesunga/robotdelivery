const origin = {x: 0, y: 0}
// robots always start at 0,0 

var housesTotal = document.querySelector('.houses-total')
var currentPosition = document.querySelector('.current-position')
var currentPosition2 = document.querySelector('.current-position2')

var robbieRobot = {
    name: "Robbie",
    lastMove: origin,
}
// declare a unique variable
// lastmove = origin , all robots always start at 0,0

var jillRobot = {
    name: "Jill",
    lastMove: origin,
}

function move(robot, direction){
     if (direction  == 'up'){
        robot.lastMove = {
            x: robot.lastMove.x,
            y: robot.lastMove.y +1
        }
        // adding to the y coordinate by 1 (moves up)
        addToVisited(housesVisited, robot.lastMove)
        displayLastMove(robot.lastMove.x, robot.lastMove.y)
        displayLastMove2(robot.lastMove.x, robot.lastMove.y)
        // pushes to the array of houses visited, if no duplicates
        //updates coordinates as (last move)
    } else if(direction == 'down'){
        robot.lastMove = {
            x: robot.lastMove.x,
            y: robot.lastMove.y -1
        }
        addToVisited(housesVisited, robot.lastMove)
        displayLastMove(robot.lastMove.x, robot.lastMove.y)
        displayLastMove2(robot.lastMove.x, robot.lastMove.y)
    } else if (direction == 'left'){
        robot.lastMove = {
            x: robot.lastMove.x -1,
            y: robot.lastMove.y
        }
        addToVisited(housesVisited, robot.lastMove)
        displayLastMove(robot.lastMove.x, robot.lastMove.y)
        displayLastMove2(robot.lastMove.x, robot.lastMove.y)
    }else if (direction == 'right'){
        robot.lastMove = {
            x: robot.lastMove.x +1,
            y: robot.lastMove.y 
        }
        addToVisited(housesVisited, robot.lastMove)
        displayLastMove(robot.lastMove.x, robot.lastMove.y)
        displayLastMove2(robot.lastMove.x, robot.lastMove.y)
    }else {}
    
}
      
function addToVisited(houses, lastMove){
    var exists = houses.filter(function(house){
        return house.x == lastMove.x &&
               house.y == lastMove.y 
// filters to check if coordinates have been landed on before
    })
    if (exists.length ==0){
        housesVisited.push(lastMove)
// if they haven't been landed on, push the lastMove to the housesVisited array
    }
    housesTotal.innerHTML = housesVisited.length
    // force update anytime function runs
}


function clickNext() {
    move(robbieRobot, "up")
    setTimeout(function(){ move(jillRobot, "up"); }, 2000);
    setTimeout(function(){ move(robbieRobot, "down"); }, 3000);
    setTimeout(function(){ move(jillRobot, "down"); }, 4000);
    setTimeout(function(){ move(robbieRobot, "left"); }, 5000);
    setTimeout(function(){ move(jillRobot, "right"); }, 6000);
    
  }
//set timeout function to show each coordinate in html

var housesVisited = []

function displayLastMove(x,y){
    return currentPosition.innerHTML = ("x: " + robbieRobot.lastMove.x) + (" y: " + robbieRobot.lastMove.y)
}

function displayLastMove2(x,y){
    return currentPosition2.innerHTML = ("x: " + jillRobot.lastMove.x) + (" y: " + jillRobot.lastMove.y)
}


